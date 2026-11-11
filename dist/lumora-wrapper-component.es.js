import { jsx as o, jsxs as E, Fragment as ve } from "react/jsx-runtime";
import { ChevronRightIcon as Cs, ChevronUpIcon as Os, ChevronDownIcon as Is, SparklesIcon as $s, BellIcon as dr, SettingsIcon as ks, LogOutIcon as ur, MenuIcon as wr, SearchIcon as Ho, CheckIcon as Ls, SunMoonIcon as Ds, SunIcon as Ms, MoonIcon as Ps } from "lucide-react";
import * as c from "react";
import { useState as Ue, useCallback as po, useRef as Sn, useEffect as qt, useMemo as Fs, useLayoutEffect as Bs } from "react";
import { clsx as zs } from "clsx";
import { extendTailwindMerge as Hs } from "tailwind-merge";
import { Tooltip as Rt, Slot as Gs, Popover as zn, DropdownMenu as Ct, Dialog as Vt } from "radix-ui";
import { createPortal as fr } from "react-dom";
import Cl from "axios";
import { cva as Ws } from "class-variance-authority";
const Us = Hs({ prefix: "lw" });
function y(...e) {
  return Us(zs(e));
}
const Ol = "lw:flex lw:flex-row lw:items-center lw:gap-2 lw:min-w-0 lw:shrink-0 lw:[&_svg]:text-inherit lw:[&_svg]:fill-current", Xs = ({
  logo: e,
  title: t,
  appName: n,
  onClick: l,
  color: r,
  testId: s,
  menuOpen: i
}) => {
  const a = /* @__PURE__ */ E(ve, { children: [
    t ? /* @__PURE__ */ o(
      "h6",
      {
        className: "lw:overflow-hidden lw:text-ellipsis lw:whitespace-nowrap lw:text-[18px] lw:leading-none lw:font-semibold lw:uppercase",
        style: { color: r },
        children: t
      }
    ) : null,
    e
  ] });
  return l ? /* @__PURE__ */ o(
    "button",
    {
      type: "button",
      onClick: l,
      "aria-label": i === void 0 ? `${n} home` : `${n}: switch platform`,
      ...i !== void 0 && {
        "aria-haspopup": "menu",
        "aria-expanded": i
      },
      "data-testid": s,
      className: y(
        Ol,
        "lw:cursor-pointer lw:rounded-lg lw:px-1 lw:-mx-1 lw:outline-none lw:hover:bg-accent lw:focus-visible:outline-2 lw:focus-visible:outline-solid lw:focus-visible:outline-offset-2 lw:focus-visible:outline-(--lw-brand-color)"
      ),
      style: { color: r, "--lw-brand-color": r },
      children: a
    }
  ) : /* @__PURE__ */ o("div", { "data-testid": s, className: Ol, style: { color: r }, children: a });
}, Hn = Xs, mr = c.createContext(void 0), Ks = () => typeof document < "u" && document.documentElement.getAttribute("data-color-scheme") === "dark", js = (e) => {
  if (typeof MutationObserver > "u" || typeof document > "u")
    return () => {
    };
  const t = new MutationObserver(e);
  return t.observe(document.documentElement, {
    attributes: !0,
    attributeFilter: ["data-color-scheme"]
  }), () => t.disconnect();
}, Ye = () => {
  const e = c.useContext(mr), t = c.useSyncExternalStore(
    js,
    Ks,
    () => !1
  );
  return e ? e === "dark" : t;
}, dn = () => ({
  "data-lw-scope": "",
  "data-lw-theme": Ye() ? "dark" : "light"
}), pr = c.forwardRef(({ className: e, sideOffset: t = 4, arrow: n = !1, children: l, ...r }, s) => {
  const i = dn();
  return /* @__PURE__ */ o(Rt.Portal, { children: /* @__PURE__ */ E(
    Rt.Content,
    {
      ref: s,
      ...i,
      "data-slot": "tooltip-content",
      sideOffset: t,
      className: y(
        "lw:z-[1500] lw:max-w-xs lw:rounded-md lw:bg-tooltip lw:px-2 lw:py-1 lw:text-xs lw:font-medium lw:text-tooltip-foreground lw:animate-in lw:fade-in-0 lw:zoom-in-95 lw:data-[state=closed]:animate-out lw:data-[state=closed]:fade-out-0 lw:data-[state=closed]:zoom-out-95",
        e
      ),
      ...r,
      children: [
        l,
        n ? /* @__PURE__ */ o(
          Rt.Arrow,
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
pr.displayName = "TooltipContent";
function je({
  title: e,
  children: t,
  side: n = "top",
  align: l,
  sideOffset: r,
  open: s,
  onOpenChange: i,
  delayDuration: a = 300,
  contentClassName: u,
  contentStyle: d,
  disabled: p = !1,
  arrow: f = !1,
  disableHoverableContent: g = !0
}) {
  const m = e == null || e === "" || e === !1, [h, _] = c.useState(!1);
  (p || m) && h && _(!1);
  const S = (v) => {
    s === void 0 && _(v), i == null || i(v);
  };
  return /* @__PURE__ */ o(
    Rt.Provider,
    {
      delayDuration: a,
      disableHoverableContent: g,
      children: /* @__PURE__ */ E(
        Rt.Root,
        {
          open: p || m ? !1 : s ?? h,
          onOpenChange: S,
          children: [
            /* @__PURE__ */ o(Rt.Trigger, { asChild: !0, children: t }),
            m ? null : /* @__PURE__ */ o(
              pr,
              {
                side: n,
                align: l,
                sideOffset: r,
                className: u,
                style: d,
                arrow: f,
                children: e
              }
            )
          ]
        }
      )
    }
  );
}
const ho = (e, t) => (n) => {
  e == null || e(n), t(n);
}, Ys = ({
  children: e,
  onOpenChange: t,
  ...n
}) => {
  const [l, r] = c.useState(!1), s = c.useRef(!1), i = c.useRef(!1), a = c.Children.only(e), u = c.cloneElement(a, {
    onPointerEnter: ho(a.props.onPointerEnter, () => {
      s.current = !0;
    }),
    onPointerLeave: ho(a.props.onPointerLeave, () => {
      s.current = !1, i.current = !1;
    }),
    onClickCapture: ho(a.props.onClickCapture, () => {
      i.current = !0, r(!1);
    })
  });
  return /* @__PURE__ */ o(
    je,
    {
      ...n,
      open: l,
      onOpenChange: (d) => {
        d && (!s.current || i.current) || (r(d), t == null || t(d));
      },
      children: u
    }
  );
}, Dn = Ys, Io = !1, Ot = (e) => e.button === 0 && !e.metaKey && !e.ctrlKey && !e.shiftKey && !e.altKey, Tt = (e) => {
  var t;
  return !!((t = e.subitems) != null && t.length);
}, St = (e, t) => e ? `${e}/${t.text}` : t.text, rt = (e, t) => {
  var n;
  return t ? e.path && t === e.path ? !0 : ((n = e.subitems) == null ? void 0 : n.some((l) => rt(l, t))) ?? !1 : !1;
}, Xe = (e, t) => !!(t && e.path === t), Go = (e, t) => (e ?? []).flatMap((n) => {
  const l = n.icon ?? t;
  return Tt(n) ? Go(n.subitems, l) : n.path ? [{ sub: n, icon: l }] : [];
}), $o = (e) => {
  const t = Xn(e);
  if (!t)
    return "#ffffff";
  const [n, l, r] = t.map((i) => {
    const a = i / 255;
    return a <= 0.03928 ? a / 12.92 : ((a + 0.055) / 1.055) ** 2.4;
  });
  return 0.2126 * n + 0.7152 * l + 0.0722 * r > 0.5 ? "#0b1f1c" : "#ffffff";
}, tn = (e) => {
  const t = Xn(e);
  if (!t)
    return "rgba(1, 88, 79, 0.12)";
  const [n, l, r] = t;
  return `rgba(${n}, ${l}, ${r}, 0.14)`;
}, st = (e, t) => {
  const n = Xn(e);
  return n ? `rgba(${n[0]}, ${n[1]}, ${n[2]}, ${t})` : e;
}, Xn = (e) => {
  let t = e.trim().replace(/^#/, "");
  if (t.length === 3 && (t = t.split("").map((l) => l + l).join("")), t.length !== 6 || /[^0-9a-fA-F]/.test(t))
    return null;
  const n = parseInt(t, 16);
  return [n >> 16 & 255, n >> 8 & 255, n & 255];
}, hr = (e) => e.replace(/_/g, " ").split(/\s+/).filter(Boolean).join(" ").toUpperCase(), Wo = (e) => e ? "rgba(255, 255, 255, 0.12)" : "rgba(15, 23, 42, 0.1)", qs = (e) => e ? "0 12px 32px -8px rgba(0, 0, 0, 0.6)" : "0 12px 32px -8px rgba(15, 23, 42, 0.18), 0 2px 6px rgba(15, 23, 42, 0.06)", Vs = "lw-tile-in", $e = "lw-motion-none", gr = "lw-motion-fade", br = "lw-motion-fade-fast", et = 6, Uo = "9, 193, 174", xr = c.createContext(
  void 0
), Kn = c.createContext(
  void 0
), Xo = (e) => c.useContext(Kn) ?? e, jn = () => {
  const e = c.useContext(xr), t = e ? Xn(e) : null;
  return t ? t.join(", ") : Uo;
}, Zs = (e, t, n = Uo) => ({
  // Solid: the surface colour, a hairline edge and a shadow
  className: "lw:relative",
  style: {
    backgroundColor: t,
    boxShadow: `${qs(e)}, 0 0 0 1px ${Wo(e)}`
  }
}), Ko = (e, t) => ({
  className: "lw:rounded-md lw:border lw:border-solid lw:px-2.5 lw:py-1.5 lw:text-[0.8125rem] lw:leading-[1.4] lw:font-semibold",
  style: {
    color: e ? "#ffffff" : "#0b1f1c",
    backgroundColor: t ?? (e ? "rgb(30, 36, 48)" : "#ffffff"),
    borderColor: Wo(e),
    boxShadow: e ? "0 6px 16px -6px rgba(0, 0, 0, 0.6)" : "0 6px 16px -6px rgba(15, 23, 42, 0.2)"
  }
}), vr = (e) => e ? "#ffffff" : "#0b1f1c", jo = "lw-glass-grow", Yo = "lw-content-in", yr = (e, t = Uo, n = `rgba(${t}, 0.2)`) => ({
  // Solid: a flat tint of the accent
  background: `rgba(${t}, ${e ? 0.2 : 0.12})`,
  boxShadow: "none"
}), Er = (e, t, n = "solid") => n === "solid" ? { background: e, boxShadow: "none" } : {
  background: st(e, t ? 0.16 : 0.1),
  boxShadow: `inset 0 0 0 1px ${st(e, 0.45)}`
}, Js = (e, t) => {
  const n = (l) => ({
    className: "lw-glass-well",
    style: {
      "--lw-well-bg": l.bg,
      "--lw-well-shadow": l.shadow,
      "--lw-well-hover-bg": l.hoverBg,
      "--lw-well-focus-bg": l.focusBg,
      "--lw-well-focus-shadow": l.focusShadow
    }
  });
  {
    const l = `inset 0 0 0 1px ${Wo(e)}`, r = e ? "rgba(255, 255, 255, 0.06)" : "#ffffff";
    return n({
      bg: e ? "rgba(255, 255, 255, 0.04)" : "#ffffff",
      shadow: l,
      hoverBg: r,
      focusBg: r,
      focusShadow: `${l}, 0 0 0 3px ${t}`
    });
  }
}, Qs = 100, Nr = 80, Mn = 56, Zt = 72, en = 64, Ce = 44, ko = 24, Yn = 4, lt = 8, Sr = 1.4, _r = et, Rr = { xs: 2, md: "18px" }, ea = ["xs", "sm", "md", "lg", "xl"], ta = 8, Il = (e) => typeof e == "number" ? `${e * ta}px` : e, Tr = (e) => typeof e == "object" ? Object.fromEntries(
  ea.filter((t) => e[t] !== void 0).map((t) => [
    `--lw-cp-${t}`,
    Il(e[t])
  ])
) : { "--lw-cp-xs": Il(e) }, nn = (e, t) => e === "flyout" && (t === "collapsible" || t === "panel"), na = (e, t, n) => e && nn(t, n), Ar = ({
  showSidebar: e,
  isMobile: t,
  sidebarVariant: n,
  sidebarSubmenu: l,
  sidebarAutoHide: r = !1
}) => !e || t ? 0 : n === "rail-labeled" ? Nr : nn(l, n) ? r ? 0 : en + 2 * lt : n === "collapsible" || n === "panel" ? Zt : Qs, qn = (e, t) => e ?? (t ? "hsl(220, 30%, 7%)" : "#ffffff"), Cr = (e, t) => e ?? (t ? "hsl(220, 35%, 9%)" : "#f2f9fc"), Or = { stiffness: 320, damping: 24 }, Ir = { stiffness: 320, damping: 28 }, qo = { stiffness: 520, damping: 20 }, Vo = { stiffness: 380, damping: 36 }, Vn = { stiffness: 260, damping: 28 }, oa = "cubic-bezier(0.32, 1.28, 0.52, 1)", la = 420, $l = 60, ra = (() => {
  try {
    return typeof CSS < "u" && typeof CSS.supports == "function" && CSS.supports("animation-timing-function", "linear(0, 1)");
  } catch {
    return !1;
  }
})(), kl = /* @__PURE__ */ new Map(), ke = ({
  stiffness: e,
  damping: t,
  mass: n = 1
}) => {
  const l = `${e}/${t}/${n}`, r = kl.get(l);
  if (r)
    return r;
  if (!ra)
    return { easing: oa, duration: la };
  const s = 1 / 600;
  let i = 0, a = 0, u = 0, d = 1 / $l;
  const p = [0];
  for (; u < 3; ) {
    const g = (-e * (i - 1) - t * a) / n;
    if (a += g * s, i += a * s, u += s, u >= d && (p.push(i), d += 1 / $l, Math.abs(i - 1) < 1e-3 && Math.abs(a) < 0.01))
      break;
  }
  p[p.length - 1] = 1;
  const f = {
    easing: `linear(${p.map((g) => Number(g.toFixed(4))).join(", ")})`,
    duration: Math.round(u * 1e3)
  };
  return kl.set(l, f), f;
}, on = (e) => !!(e && typeof e.animate == "function"), It = () => typeof window < "u" && typeof window.matchMedia == "function" && window.matchMedia("(prefers-reduced-motion: reduce)").matches, sa = (e) => {
  !e || typeof e.getAnimations != "function" || e.getAnimations({ subtree: !1 }).forEach((t) => t.cancel());
}, aa = (e, t = 1.14) => {
  if (!on(e) || It())
    return;
  const n = ke(qo);
  e.animate(
    [
      { transform: "scale(1)", easing: "cubic-bezier(0.2, 0, 0, 1)" },
      { transform: `scale(${t})`, offset: 0.18, easing: n.easing },
      { transform: "scale(1)" }
    ],
    { duration: Math.round(n.duration / 0.82) }
  );
}, ia = 1.6, $r = 110, ln = 110, ca = 6, nt = ke(Vo), da = (e, t = $r) => e >= t ? 0 : (1 + Math.cos(Math.PI * e / t)) / 2, kr = (e, t) => {
  const { offsetWidth: n, offsetHeight: l } = e;
  if (!(n > 0 && l > 0))
    return 1 / 0;
  const r = t.getBoundingClientRect(), s = r.left + t.clientLeft, i = r.top + t.clientTop, a = e.getBoundingClientRect(), u = a.left + a.width / 2, d = a.top + a.height / 2, p = Math.min(
    u - n / 2 - s,
    s + t.clientWidth - (u + n / 2)
  ), f = Math.min(
    d - l / 2 - i,
    i + t.clientHeight - (d + l / 2)
  );
  return Math.min(1 + 2 * p / n, 1 + 2 * f / l);
}, Lr = (e, {
  enabled: t,
  axis: n,
  itemSelector: l,
  glyphSelector: r,
  transition: s,
  maxScale: i = ia,
  reach: a = $r,
  carrierSelector: u,
  spacing: d = 0,
  hoveredOnly: p = !1,
  boundsRef: f
}) => {
  const g = c.useRef(0), m = c.useRef(
    /* @__PURE__ */ new WeakMap()
  ), h = c.useRef(/* @__PURE__ */ new Set()), _ = c.useRef(null), S = (A) => {
    var $;
    _.current !== A && (($ = _.current) == null || $.removeAttribute("data-dock-hovered"), A == null || A.setAttribute("data-dock-hovered", ""), _.current = A);
  }, v = c.useRef(/* @__PURE__ */ new Set()), x = s ? `, ${s}` : "", R = p ? `${nt.duration}ms ${nt.easing}` : `${ln}ms ease-out`, I = (A) => u ? A.closest(u) : null, N = (A) => {
    const [$ = "0", O = "0"] = A.split(" ").filter(Boolean);
    return n === "x" ? parseFloat($) || 0 : parseFloat(O) || 0;
  }, b = (A) => {
    const $ = I(A);
    if (!$)
      return 0;
    const O = getComputedStyle($).translate;
    return N(
      O && O !== "none" ? O : $.style.translate
    );
  }, T = (A, $) => {
    var oe;
    const q = (n === "x" ? A.offsetWidth : A.offsetHeight) * (Number(A.style.scale) || 1) / 2, W = C(A) + N(((oe = I(A)) == null ? void 0 : oe.style.translate) ?? "");
    return Math.max(0, Math.abs($ - W) - q);
  }, C = (A) => {
    const $ = A.getBoundingClientRect();
    return (n === "x" ? $.left + $.width / 2 : $.top + $.height / 2) - b(A);
  }, K = (A) => {
    const $ = A.getBoundingClientRect();
    return Array.from(A.querySelectorAll(l)).filter((O) => {
      var Z;
      const q = (Z = O.parentElement) == null ? void 0 : Z.closest(l);
      if (q && A.contains(q))
        return !1;
      const W = O.getBoundingClientRect(), oe = C(O), me = n === "x" ? oe : W.left + W.width / 2, j = n === "x" ? W.top + W.height / 2 : oe;
      return W.width > 0 && me >= $.left && me <= $.right && j >= $.top && j <= $.bottom;
    }).map((O) => ({
      item: O,
      glyph: r ? O.querySelector(r) : O
    })).filter(
      (O) => O.glyph !== null
    );
  }, k = (A, $) => {
    if ($ === A)
      return i;
    let O = m.current.get($);
    if (O === void 0) {
      const oe = Number($.style.scale) || 1, me = $.getBoundingClientRect();
      O = { width: me.width / oe, height: me.height / oe }, m.current.set($, O);
    }
    if (!(O.width > 0 && O.height > 0))
      return 1;
    const q = A.getBoundingClientRect(), W = Math.min(
      q.width / O.width,
      q.height / O.height
    );
    return Math.max(1, Math.min(W, i));
  }, F = (A) => {
    const $ = f == null ? void 0 : f.current;
    return $ != null && $.contains(A) ? kr(A, $) : 1 / 0;
  }, L = () => {
    var A, $, O, q;
    cancelAnimationFrame(g.current), h.current.forEach((W) => {
      W.style.transition = `scale ${nt.duration}ms ${nt.easing}${x}`, W.style.scale = "";
    }), h.current.clear(), S(null), v.current.forEach((W) => {
      W.style.transition = `translate ${nt.duration}ms ${nt.easing}`, W.style.translate = "", W.style.removeProperty("--dock-scale");
    }), v.current.clear(), (A = e.current) == null || A.style.setProperty(
      "--dock-scale-timing",
      `${nt.duration}ms ${nt.easing}`
    ), ($ = e.current) == null || $.style.removeProperty("--dock-spread"), (O = e.current) == null || O.style.removeProperty("--dock-max-scale"), (q = e.current) == null || q.style.removeProperty("--dock-active-scale");
  }, G = (A, $, O) => {
    const q = n === "x" ? $ : O, W = K(A).map(({ item: j, glyph: Z }) => {
      const ue = C(j), J = p ? j === _.current ? 1 : 0 : da(Math.abs(q - ue), a), ie = 1 + (Math.max(1, Math.min(k(j, Z), F(Z))) - 1) * J;
      Z.style.transition = `scale ${R}${x}`, ie > 1.001 ? (Z.style.scale = ie.toFixed(3), h.current.add(Z)) : h.current.has(Z) && (Z.style.scale = "", h.current.delete(Z));
      const he = n === "x" ? j.offsetWidth : j.offsetHeight, ye = (ie - 1) * he + 2 * d * J;
      return { item: j, centre: ue, scale: ie, growth: ye };
    });
    A.style.setProperty("--dock-scale-timing", R), A.style.setProperty(
      "--dock-max-scale",
      Math.max(1, ...W.map(({ scale: j }) => j)).toFixed(3)
    );
    const oe = W.find(({ item: j }) => j.dataset.active === "true");
    if (A.style.setProperty(
      "--dock-active-scale",
      ((oe == null ? void 0 : oe.scale) ?? 1).toFixed(3)
    ), !u)
      return;
    const me = W.reduce((j, { growth: Z }) => j + Z, 0);
    A.style.setProperty("--dock-spread", `${me.toFixed(1)}px`), W.forEach(({ item: j, centre: Z, scale: ue, growth: J }) => {
      const te = I(j);
      if (!te)
        return;
      const ie = W.reduce(
        (he, ye) => ye.centre < Z ? he + ye.growth : he,
        J / 2
      );
      te.style.transition = `translate ${R}`, Math.abs(ie) > 0.1 || ue > 1.001 ? (te.style.translate = n === "x" ? `${ie.toFixed(1)}px 0` : `0 ${ie.toFixed(1)}px`, te.style.setProperty("--dock-scale", ue.toFixed(3)), v.current.add(te)) : v.current.has(te) && (te.style.translate = "", te.style.removeProperty("--dock-scale"), v.current.delete(te));
    });
  }, ee = (A) => {
    if (A.pointerType && A.pointerType !== "mouse" || It())
      return;
    const $ = A.currentTarget, { clientX: O, clientY: q } = A;
    cancelAnimationFrame(g.current), g.current = requestAnimationFrame(() => {
      const W = $.getBoundingClientRect(), oe = n === "x" ? q : O, [me, j] = n === "x" ? [W.top, W.bottom] : [W.left, W.right];
      if (oe < me || oe > j) {
        L();
        return;
      }
      if (p) {
        const Z = n === "x" ? O : q, ue = _.current;
        if (!(ue && $.contains(ue) && T(ue, Z) <= ca)) {
          let te = null, ie = 1 / 0;
          K($).forEach(({ item: he }) => {
            const ye = T(he, Z);
            ye < ie && (te = he, ie = ye);
          }), te && S(te);
        }
      }
      G($, O, q);
    });
  }, B = (A) => {
    const $ = e.current;
    if (!t || !$ || It())
      return;
    p && S(A);
    const O = A.getBoundingClientRect();
    G($, O.left + O.width / 2, O.top + O.height / 2);
  };
  return c.useEffect(() => {
    t || L();
  }, [t]), c.useEffect(() => () => cancelAnimationFrame(g.current), []), {
    containerProps: t ? { onPointerMove: ee, onPointerLeave: L, onScrollCapture: L } : {},
    swellOn: B,
    settle: L
  };
}, rn = "data-rail-item", Dr = `[${rn}], button, [role="button"]`, un = c.createContext(!1), Zo = () => {
  const e = c.useContext(un), t = Ye(), n = c.useContext(Kn);
  if (!e)
    return {};
  const l = Ko(t, n);
  return {
    arrow: !1,
    contentClassName: l.className,
    contentStyle: l.style,
    sideOffset: 6
  };
}, At = ke(Vo), Jo = ({
  enabled: e,
  isDark: t,
  selector: n,
  size: l,
  radius: r,
  pinSelector: s,
  pinKey: i = null
}) => {
  const a = c.useRef(null), u = jn(), [d, p] = c.useState(null), f = c.useRef(null), g = c.useRef(null), m = (N, b) => {
    g.current = b;
    const T = b.getBoundingClientRect(), C = N.getBoundingClientRect(), K = l ?? T.width, k = l ?? T.height, F = {
      top: Math.round(T.top - C.top + (T.height - k) / 2),
      left: Math.round(T.left - C.left + (T.width - K) / 2),
      width: Math.round(K),
      height: Math.round(k)
    };
    p(
      (L) => L && L.visible && L.top === F.top && L.left === F.left && L.width === F.width && L.height === F.height ? L : { ...F, visible: !0, instant: !(L != null && L.visible) }
    );
  }, h = (N, b) => {
    var C;
    const T = (C = b == null ? void 0 : b.closest) == null ? void 0 : C.call(b, n);
    return T && N.contains(T) ? T : null;
  }, _ = (N) => {
    if (!e)
      return;
    const b = h(N.currentTarget, N.target);
    b && m(N.currentTarget, b);
  }, S = (N) => {
    if (!e)
      return;
    const b = h(N.currentTarget, N.target);
    b && N.target.matches(":focus-visible") && m(N.currentTarget, b);
  }, v = () => {
    var T;
    const N = (T = a.current) == null ? void 0 : T.parentElement, b = s && (N == null ? void 0 : N.querySelector(s));
    return N && b ? { container: N, item: b } : null;
  }, x = () => {
    const N = v();
    if (N) {
      m(N.container, N.item);
      return;
    }
    g.current = null, p((b) => b != null && b.visible ? { ...b, visible: !1 } : b);
  };
  c.useEffect(() => {
    var b, T;
    if (!e)
      return;
    const N = v();
    N ? m(N.container, N.item) : (T = (b = a.current) == null ? void 0 : b.parentElement) != null && T.matches(":hover") || x();
  }, [e, i]);
  const R = (N) => {
    const b = N.relatedTarget;
    (!b || !N.currentTarget.contains(b)) && (N.currentTarget.matches(":hover") || x());
  };
  return c.useEffect(() => {
    const N = a.current;
    if (!(d != null && d.visible)) {
      f.current = null;
      return;
    }
    const b = f.current;
    if (f.current = d.top, !on(N) || It() || b === null || d.instant)
      return;
    const T = Math.min(Math.abs(d.top - b) / 600, 0.08);
    T && N.animate(
      // On `transform`, which composes with the swell's `scale` rather
      // than overriding it (that snapped the drop back to 1 mid-swell)
      [
        { transform: "scale(1, 1)" },
        {
          transform: `scale(${1 - T / 2}, ${1 + T})`,
          offset: 0.35
        },
        { transform: "scale(1, 1)" }
      ],
      { duration: At.duration, easing: "ease-out" }
    );
  }, [d == null ? void 0 : d.top, d == null ? void 0 : d.visible, d == null ? void 0 : d.instant]), {
    lens: e && d ? /* @__PURE__ */ o(
      "div",
      {
        ref: a,
        "aria-hidden": !0,
        "data-glass-lens": "",
        "data-visible": d.visible ? "true" : "false",
        className: y(
          "lw:pointer-events-none lw:absolute lw:top-0 lw:left-0",
          gr
        ),
        style: {
          ...yr(t, u),
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
          transition: d.instant ? `opacity 160ms ease, scale var(--dock-scale-timing, ${ln}ms ease-out)` : `translate ${At.duration}ms ${At.easing}, width 220ms ease, height 220ms ease, opacity 160ms ease, scale var(--dock-scale-timing, ${ln}ms ease-out)`
        }
      }
    ) : null,
    // A scroll inside the container moves the items out from under it
    containerProps: e ? {
      onMouseOver: _,
      onMouseLeave: x,
      onFocus: S,
      onBlur: R,
      onScrollCapture: x
    } : {}
  };
}, ua = (e, t, n = null) => {
  const l = Jo({
    enabled: e,
    isDark: t,
    selector: Dr,
    // The rail's buttons exactly, so the hover sits on the item
    size: Ce,
    radius: et,
    pinSelector: `[${rn}][data-open="true"]`,
    pinKey: n
  });
  return {
    ...l,
    lens: l.lens ? c.cloneElement(l.lens, {
      "data-testid": "sidebar-rail-lens"
    }) : null
  };
}, wa = (e, t) => {
  let n = 0, l = 0, r = e;
  for (; r && r !== t; ) {
    n += r.offsetTop, l += r.offsetLeft;
    const a = r.offsetParent;
    for (let u = r.parentElement; u && u !== t && (n -= u.scrollTop, l -= u.scrollLeft, u !== a); u = u.parentElement)
      ;
    r = a;
  }
  if (r === t && e.offsetWidth)
    return {
      top: Math.round(n),
      left: Math.round(l),
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
}, Ll = ({
  enabled: e,
  isDark: t,
  color: n,
  containerRef: l
}) => {
  const r = c.useRef(null), [s, i] = c.useState(null), a = c.useRef(null), u = c.useCallback(
    (p) => {
      const f = l.current;
      if (!e || !f)
        return;
      const g = f.querySelector(
        `[${rn}][data-active="true"]`
      );
      if (!g) {
        i(
          (h) => h != null && h.visible ? { ...h, visible: !1 } : h
        );
        return;
      }
      const m = wa(g, f);
      i(
        (h) => h && h.visible && h.top === m.top && h.left === m.left && h.width === m.width && h.height === m.height ? h : {
          ...m,
          visible: !0,
          instant: p || !(h != null && h.visible)
        }
      );
    },
    [e, l]
  );
  return c.useLayoutEffect(() => {
    u(!1);
  }), c.useEffect(() => {
    const p = l.current;
    if (!e || !p)
      return;
    let f = 0;
    const g = () => {
      cancelAnimationFrame(f), f = requestAnimationFrame(() => u(!1));
    }, m = typeof ResizeObserver > "u" ? null : new ResizeObserver(() => u(!0));
    m == null || m.observe(p);
    const h = typeof MutationObserver > "u" ? null : new MutationObserver(g);
    return h == null || h.observe(p, {
      subtree: !0,
      childList: !0,
      attributes: !0,
      attributeFilter: ["data-active", "class", "hidden"]
    }), () => {
      cancelAnimationFrame(f), m == null || m.disconnect(), h == null || h.disconnect();
    };
  }, [e, l, u]), c.useEffect(() => {
    const p = r.current;
    if (!(s != null && s.visible)) {
      a.current = null;
      return;
    }
    const f = a.current;
    if (a.current = s.top, f === null || s.instant || !on(p) || It())
      return;
    const g = Math.min(Math.abs(s.top - f) / 600, 0.08);
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
      { duration: At.duration, easing: "ease-out" }
    );
  }, [s == null ? void 0 : s.top, s == null ? void 0 : s.visible, s == null ? void 0 : s.instant]), { glass: e && s ? /* @__PURE__ */ o(
    "div",
    {
      ref: r,
      "aria-hidden": !0,
      "data-active-glass": "",
      "data-testid": "sidebar-rail-active",
      "data-visible": s.visible ? "true" : "false",
      className: y(
        "lw:pointer-events-none lw:absolute lw:top-0 lw:left-0",
        gr
      ),
      style: {
        ...Er(n, t),
        borderRadius: `${et}px`,
        width: s.width,
        height: s.height,
        translate: `${s.left}px ${s.top}px`,
        // Swells with its item (useDockMagnify); fades in and out at
        // its item's size, never popping from smaller
        scale: "var(--dock-active-scale, 1)",
        opacity: s.visible ? 1 : 0,
        // Its scale on the item's own timing, swelling and settling
        // (useDockMagnify), so the two move as one
        transition: s.instant ? `opacity 160ms ease, scale var(--dock-scale-timing, ${ln}ms ease-out)` : `translate ${At.duration}ms ${At.easing}, width 220ms ease, height 220ms ease, opacity 160ms ease, scale var(--dock-scale-timing, ${ln}ms ease-out)`
      }
    }
  ) : null };
}, Ie = 52, fa = 2, ma = 10, pa = Ie / 2, go = "[data-flyout-tile]", Qo = 4, el = 32, Lo = el + Qo, ha = 104, Ut = 24, Mr = "background 160ms ease, color 160ms ease, transform 120ms ease", ga = 10, Pr = 10, Dl = Pr + 2, ba = 18, Ml = 1.08, xa = (e) => {
  for (let t = e.parentElement; t; t = t.parentElement) {
    const { overflowY: n } = getComputedStyle(t);
    if (n === "auto" || n === "scroll")
      return t;
  }
  return null;
}, va = (e) => {
  const t = xa(e);
  if (!t)
    return Ml;
  const n = kr(e, t);
  return Math.min(Ml, n / Math.min(n, Sr));
}, ya = 1190, Ea = 1195, Pl = 120, Na = 220, Fl = 200, Bl = 8, zl = ke(Or), Ke = ke(Vo), Hl = ke(Vn), Gl = 8192, Sa = ({ left: e, top: t, width: n, height: l, radius: r }) => {
  const s = Math.min(r, n / 2, l / 2), i = e + n, a = t + l, u = `A ${s} ${s} 0 0 1`;
  return `path(evenodd, 'M 0 0 H ${Gl} V ${Gl} H 0 Z M ${e + s} ${t} H ${i - s} ${u} ${i} ${t + s} V ${a - s} ${u} ${i - s} ${a} H ${e + s} ${u} ${e} ${a - s} V ${t + s} ${u} ${e + s} ${t} Z')`;
}, _a = ({
  group: e,
  groupKey: t,
  anchor: n,
  railEdge: l,
  railShape: r,
  activePath: s,
  focusFirst: i = !1,
  onNavigate: a,
  onClose: u,
  panelProps: d,
  accentColor: p,
  activeBackgroundColor: f,
  activeForegroundColor: g,
  solidSurface: m
}) => {
  const h = Ye(), _ = dn(), S = !!(e && n), v = c.useRef(null);
  e && t && (v.current = { group: e, key: t });
  const x = v.current, R = c.useRef(null);
  n && (R.current = { anchor: n, railEdge: l });
  const [I, N] = c.useState(S);
  S && !I && N(!0);
  const [b, T] = c.useState(S);
  S && !b && T(!0), c.useEffect(() => {
    if (S)
      return;
    const D = setTimeout(() => T(!1), Fl);
    return () => clearTimeout(D);
  }, [S]);
  const C = c.useRef(null), [K, k] = c.useState({
    x: 0,
    y: 0
  }), F = c.useCallback(() => {
    const D = R.current, z = C.current;
    if (!D || !z)
      return;
    const Y = D.anchor.getBoundingClientRect(), U = z.offsetHeight, ae = Math.round(D.railEdge + ga), ne = Y.top + Y.height / 2 - U / 2, Ee = window.innerHeight - U - Bl, we = Math.round(
      Math.max(Bl, Math.min(ne, Ee))
    );
    k((_e) => _e.x === ae && _e.y === we ? _e : { x: ae, y: we });
  }, []);
  c.useLayoutEffect(() => {
    if (!I)
      return;
    F(), window.addEventListener("resize", F), window.addEventListener("scroll", F, !0);
    const D = typeof ResizeObserver > "u" || !C.current ? null : new ResizeObserver(F);
    return D && C.current && D.observe(C.current), () => {
      window.removeEventListener("resize", F), window.removeEventListener("scroll", F, !0), D == null || D.disconnect();
    };
  }, [I, F, n, l, t]), c.useEffect(() => {
    if (!n)
      return;
    const D = va(n);
    D > 1.001 && aa(n, D);
  }, [n]);
  const [L, G] = c.useState(!1);
  c.useEffect(() => {
    if (!S) {
      G(!1);
      return;
    }
    let D = 0;
    const z = requestAnimationFrame(() => {
      D = requestAnimationFrame(() => G(!0));
    });
    return () => {
      cancelAnimationFrame(z), cancelAnimationFrame(D);
    };
  }, [S]);
  const ee = c.useMemo(
    () => x ? Go(x.group.subitems, x.group.icon) : [],
    [x]
  ), B = c.useRef(null), A = Lr(B, {
    enabled: S,
    axis: "x",
    itemSelector: go,
    transition: Mr,
    // A bigger swell than the rail's: the tiles are the destination
    maxScale: fa,
    // The neighbours make room as it grows, and a little more
    carrierSelector: '[role="menuitem"]',
    spacing: ma,
    // Only the tile under the pointer swells; the rest keep their size
    hoveredOnly: !0
  }), $ = c.useRef(void 0), O = c.useCallback((D) => {
    var ae;
    (ae = $.current) == null || ae.call($), $.current = void 0;
    const z = D == null ? void 0 : D.parentElement;
    if (!D || !z || typeof MutationObserver > "u")
      return;
    const Y = () => {
      const ne = D.offsetLeft - D.offsetWidth / 2, Ee = ne + D.offsetWidth;
      let we = 0;
      const _e = (ce, Re, ge) => {
        ce < Ee && ce + Re > ne && (we = Math.max(we, -ge - Dl));
      };
      z.querySelectorAll(go).forEach((ce) => {
        const Re = parseFloat(ce.style.scale) || 1, ge = (Re - 1) * Ie / 2, pe = ce.closest('[role="menuitem"]'), Ne = parseFloat((pe == null ? void 0 : pe.style.translate) ?? "") || 0;
        _e(
          ce.offsetLeft + Ne - ge,
          Re * Ie,
          ce.offsetTop - ge
        );
        const Te = pe == null ? void 0 : pe.querySelector("[data-flyout-name]"), tt = Te == null ? void 0 : Te.parentElement;
        Te && tt && ce.dataset.flyoutNameSide === "above" && _e(
          tt.offsetLeft + Ne,
          Te.offsetWidth,
          tt.offsetTop + Te.offsetTop - ge
        );
      });
      const Be = we > 0 ? `0 ${(-we).toFixed(1)}px` : "";
      D.style.translate !== Be && (D.style.translate = Be);
    }, U = new MutationObserver(Y);
    U.observe(z, {
      subtree: !0,
      attributes: !0,
      attributeFilter: ["style"]
    }), $.current = () => U.disconnect();
  }, []), q = c.useRef([]), [W, oe] = c.useState([]);
  c.useLayoutEffect(() => {
    const D = () => {
      const Y = ee.map(
        (U, ae) => {
          var ne;
          return ((ne = q.current[ae]) == null ? void 0 : ne.offsetWidth) ?? 0;
        }
      );
      oe(
        (U) => U.length === Y.length && U.every((ae, ne) => ae === Y[ne]) ? U : Y
      );
    };
    if (D(), typeof ResizeObserver > "u")
      return;
    const z = new ResizeObserver(D);
    return q.current.slice(0, ee.length).forEach((Y) => Y && z.observe(Y)), () => z.disconnect();
  }, [ee]);
  const me = Ta(W, ee.length), j = c.useRef([]), Z = ee.findIndex(
    ({ sub: D }) => Xe(D, s)
  ), [ue, J] = c.useState(0);
  c.useEffect(() => {
    J(Math.max(Z, 0));
  }, [t]), c.useEffect(() => {
    if (!S || !i)
      return;
    const D = setTimeout(() => {
      var z;
      return (z = j.current[0]) == null ? void 0 : z.focus();
    });
    return () => clearTimeout(D);
  }, [S, i, t]);
  const te = (D) => {
    var Y;
    const z = Math.max(0, Math.min(D, ee.length - 1));
    J(z), (Y = j.current[z]) == null || Y.focus();
  }, ie = (D, z) => {
    var Y;
    switch (D.key) {
      case "ArrowRight":
        te(z + 1);
        break;
      case "ArrowLeft":
        z === 0 ? u(!0) : te(z - 1);
        break;
      case " ":
        (Y = j.current[z]) == null || Y.click();
        break;
      case "Home":
        te(0);
        break;
      case "End":
        te(ee.length - 1);
        break;
      case "Tab":
        u(!0);
        break;
      default:
        return;
    }
    D.preventDefault();
  }, he = "var(--lw-text-primary)", ye = h ? "#ffffff" : p;
  return /* @__PURE__ */ E(ve, { children: [
    b ? /* @__PURE__ */ o(
      "div",
      {
        "data-testid": "sidebar-flyout-scrim",
        "data-flyout-scrim": "",
        "data-state": S ? "open" : "closed",
        "aria-hidden": !0,
        onClick: () => u(),
        className: y(
          "lw:fixed lw:inset-y-0 lw:right-0",
          S ? "lw:animate-in lw:fade-in-0" : "lw:animate-out lw:fade-out-0 lw:[animation-fill-mode:forwards]"
        ),
        style: {
          left: r ? 0 : `${l}px`,
          // Clicks in the cut-out reach the rail beneath
          ...r ? { clipPath: Sa(r) } : {},
          zIndex: ya,
          animationDuration: `${S ? Na : Fl}ms`,
          // The flyout's only surface: a wash from the rail across
          // the page, strongest behind the tiles, fading to the right
          background: h ? "linear-gradient(90deg, rgba(24, 30, 40, 0.97) 0%, rgba(24, 30, 40, 0.9) 30%, rgba(24, 30, 40, 0.6) 55%, rgba(24, 30, 40, 0.2) 100%)" : "linear-gradient(90deg, rgba(236, 239, 243, 0.88) 0%, rgba(236, 239, 243, 0.78) 30%, rgba(236, 239, 243, 0.45) 55%, rgba(236, 239, 243, 0.1) 100%)"
        }
      }
    ) : null,
    I && typeof document < "u" ? fr(
      /* @__PURE__ */ o(
        "div",
        {
          ref: C,
          ..._,
          className: y(
            "lw:fixed lw:top-0 lw:left-0",
            $e
          ),
          style: {
            zIndex: Ea,
            transform: `translate(${K.x}px, ${K.y}px)`,
            transition: L ? `transform ${Ke.duration}ms ${Ke.easing}` : "none"
          },
          children: /* @__PURE__ */ o(
            Ra,
            {
              in: S,
              onExited: () => N(!1),
              panelProps: d,
              groupText: x == null ? void 0 : x.group.text,
              children: x ? /* @__PURE__ */ E(
                "div",
                {
                  ref: B,
                  role: "menu",
                  "aria-label": x.group.text,
                  ...A.containerProps,
                  onBlur: (D) => {
                    D.currentTarget.contains(
                      D.relatedTarget
                    ) || A.settle();
                  },
                  className: y(
                    "lw:relative",
                    $e
                  ),
                  style: {
                    width: me.width,
                    height: Lo + Ie + Qo + el,
                    // The panel stretches as the dock pushes
                    // the pages along, as the Dock's shelf does
                    marginRight: "var(--dock-spread, 0px)",
                    // In step with the pages it makes room for
                    transition: `margin-right var(--dock-scale-timing, ${Ke.duration}ms ${Ke.easing})`
                  },
                  children: [
                    /* @__PURE__ */ o(
                      "span",
                      {
                        ref: O,
                        "aria-hidden": !0,
                        "data-testid": "sidebar-flyout-heading",
                        className: y(
                          "lw:pointer-events-none lw:absolute lw:bottom-full lw:left-1/2 lw:-translate-x-1/2 lw:text-[1.125rem] lw:leading-normal lw:font-bold lw:tracking-[0.08em] lw:whitespace-nowrap lw:uppercase",
                          $e
                        ),
                        style: {
                          marginBottom: Dl,
                          transition: `translate var(--dock-scale-timing, ${Ke.duration}ms ${Ke.easing})`,
                          // The pages' own name colour
                          color: vr(h)
                        },
                        children: x.group.text
                      }
                    ),
                    ee.map(({ sub: D, icon: z }, Y) => /* @__PURE__ */ o(
                      Br,
                      {
                        ref: (U) => {
                          j.current[Y] = U;
                        },
                        nameRef: (U) => {
                          q.current[Y] = U;
                        },
                        tileLeft: me.tiles[Y],
                        nameLeft: me.names[Y],
                        sub: D,
                        icon: z,
                        index: Y,
                        active: Xe(
                          D,
                          s
                        ),
                        tabIndex: Y === ue ? 0 : -1,
                        onClick: (U) => {
                          Ot(U) && (U.preventDefault(), a(D.path), u());
                        },
                        onKeyDown: (U) => ie(U, Y),
                        onFocus: (U) => {
                          J(Y);
                          const ae = U.currentTarget.querySelector(
                            go
                          );
                          ae && U.currentTarget.matches(
                            ":focus-visible"
                          ) && A.swellOn(ae);
                        },
                        accentColor: p,
                        activeBackgroundColor: f,
                        activeForegroundColor: g,
                        labelColor: he,
                        iconColor: ye,
                        surface: m,
                        isDark: h
                      },
                      D.path
                    ))
                  ]
                },
                x.key
              ) : null
            }
          )
        }
      ),
      document.body
    ) : null
  ] });
}, Ra = ({
  in: e,
  onExited: t,
  panelProps: n,
  groupText: l,
  children: r
}) => {
  const s = c.useRef(null), i = (u) => {
    s.current = u;
    const { ref: d } = n;
    typeof d == "function" ? d(u) : d && (d.current = u);
  }, a = c.useRef(e);
  return a.current = e, c.useLayoutEffect(() => {
    const u = s.current;
    if (sa(u), e) {
      on(u) && !It() && u.animate(
        [
          { opacity: 0, transform: "translateX(-8px)" },
          { opacity: 1, transform: "none" }
        ],
        { duration: Hl.duration, easing: Hl.easing }
      );
      return;
    }
    if (!on(u)) {
      t == null || t();
      return;
    }
    let d = !1;
    const p = () => {
      !d && !a.current && (d = !0, t == null || t());
    }, f = setTimeout(p, Pl + 100);
    return u.animate([{ opacity: 1 }, { opacity: 0 }], {
      duration: Pl,
      easing: "ease-in",
      fill: "forwards"
    }).finished.then(p, p), () => clearTimeout(f);
  }, [e]), /* @__PURE__ */ o(
    "div",
    {
      ref: i,
      onMouseEnter: n.onMouseEnter,
      onMouseLeave: n.onMouseLeave,
      "data-testid": "sidebar-flyout",
      "data-group": l,
      className: "lw:relative lw:before:absolute lw:before:inset-y-0 lw:before:left-[-12px] lw:before:w-3 lw:before:content-['']",
      style: { padding: Pr },
      children: r
    }
  );
}, Fr = (e) => e % 2 === 1, Ta = (e, t) => {
  const n = [], l = [];
  let r = -Ut, s = -Ut, i = -Ut;
  for (let a = 0; a < t; a += 1) {
    const u = e[a] || Ie, d = Fr(a), p = d ? s : i, f = Math.max(
      r + Ut + Ie / 2,
      p + Ut + u / 2
    );
    r = f + Ie / 2, d ? s = f + u / 2 : i = f + u / 2, n.push(Math.round(f - Ie / 2)), l.push(Math.round(f - u / 2));
  }
  return {
    tiles: n,
    names: l,
    width: Math.round(Math.max(r, s, i, 0))
  };
}, Br = c.forwardRef(
  ({
    nameRef: e,
    tileLeft: t,
    nameLeft: n,
    sub: l,
    icon: r,
    index: s,
    active: i,
    tabIndex: a,
    onClick: u,
    onKeyDown: d,
    onFocus: p,
    accentColor: f,
    activeBackgroundColor: g,
    activeForegroundColor: m,
    labelColor: h,
    iconColor: _,
    surface: S,
    isDark: v
  }, x) => {
    const R = Fr(s), I = Ko(v, S), N = vr(v), b = {
      animation: `${Vs} ${zl.duration}ms ${zl.easing} both`,
      animationDelay: `${s * ba}ms`
    }, T = v ? N : f, C = {
      // Hovered or focused, the tile and its name take the rail's hover
      // colour — a tint of the accent, whatever the accent is — mixed
      // into the surface so it is solid rather than see-through
      "--lw-tile-hover": `color-mix(in srgb, ${f} ${v ? 20 : 12}%, ${S})`,
      "--lw-tile-outline": f,
      // The current page's icon takes the accent's foreground
      "--lw-tile-icon": i ? m : _
    };
    return /* @__PURE__ */ E(
      "a",
      {
        ref: x,
        href: l.path,
        role: "menuitem",
        tabIndex: a,
        "aria-current": i ? "page" : void 0,
        "data-testid": `sidebar-subitem-${l.text}`,
        "data-active": i ? "true" : "false",
        onClick: u,
        onKeyDown: d,
        onFocus: p,
        className: "lw:group/tile lw:pointer-events-none lw:absolute lw:inset-0 lw:block lw:no-underline lw:outline-none",
        style: { ...C, color: h },
        children: [
          /* @__PURE__ */ o(
            "span",
            {
              "data-flyout-bridge": "",
              "aria-hidden": !0,
              className: "lw:pointer-events-auto lw:absolute lw:top-0 lw:block lw:h-full",
              style: { left: t, width: Ie }
            }
          ),
          /* @__PURE__ */ o(
            "span",
            {
              "data-flyout-tile": "",
              "data-flyout-name-side": R ? "above" : "below",
              className: y(
                I.className,
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
                ...I.style,
                // Cards of their own: a surface and a soft shadow, no
                // edge, lifted a little more than a resting label
                border: "none",
                boxShadow: v ? "0 1px 2px rgba(0, 0, 0, 0.5), 0 8px 20px -6px rgba(0, 0, 0, 0.7)" : "0 1px 2px rgba(15, 23, 42, 0.08), 0 8px 20px -6px rgba(15, 23, 42, 0.28)",
                left: t,
                top: Lo,
                width: Ie,
                height: Ie,
                borderRadius: pa,
                // Grows about its centre, so the row stays level; its
                // name moves aside to clear it (see the name's slot)
                transformOrigin: "center",
                transition: `scale ${Ke.duration}ms ${Ke.easing}, ${Mr}`,
                // The current page: the accent, solid, its icon and text in
                // the accent's foreground — as the current page on the rail
                ...i ? {
                  background: g ?? f,
                  color: m
                } : {},
                ...b
              },
              children: r
            }
          ),
          /* @__PURE__ */ o(
            "span",
            {
              "data-flyout-slot": "",
              className: y(
                "lw:pointer-events-auto lw:absolute lw:flex",
                $e
              ),
              style: {
                left: n,
                top: R ? 0 : Lo + Ie + Qo,
                height: el,
                // Held against its own tile, not floating mid-band; a
                // name too long for the band bleeds away from the tile
                alignItems: R ? "flex-end" : "flex-start",
                // Pushed away from its tile by as much as the tile
                // grows towards it (`--dock-scale`, on the page)
                translate: `0 calc((var(--dock-scale, 1) - 1) * ${R ? -Ie / 2 : Ie / 2}px)`,
                transition: `translate var(--dock-scale-timing, ${Ke.duration}ms ${Ke.easing})`
              },
              children: /* @__PURE__ */ o(
                "span",
                {
                  ref: e,
                  "data-flyout-name": "",
                  "data-text": l.text,
                  className: y(
                    "lw:block lw:px-2 lw:py-0 lw:text-center lw:text-[0.75rem] lw:leading-4 lw:text-balance lw:transition-colors lw:duration-150",
                    "lw:after:invisible lw:after:block lw:after:h-0 lw:after:overflow-hidden lw:after:font-semibold lw:after:content-[attr(data-text)]",
                    i ? "lw:font-semibold" : "lw:font-medium",
                    "lw:group-has-[[data-dock-hovered]]/tile:font-semibold lw:[[role=menu]:not(:has([data-dock-hovered]))_[role=menuitem]:hover_&]:font-semibold lw:group-focus-visible/tile:font-semibold",
                    $e
                  ),
                  style: {
                    maxWidth: ha,
                    color: i ? T : N,
                    ...b
                  },
                  children: l.text
                }
              )
            }
          )
        ]
      }
    );
  }
);
Br.displayName = "FlyoutTile";
const Aa = _a;
function sn({
  orientation: e = "horizontal",
  className: t,
  ...n
}) {
  return /* @__PURE__ */ o(
    "div",
    {
      role: "separator",
      "aria-orientation": e,
      "data-slot": "separator",
      className: y(
        "lw:shrink-0 lw:bg-border",
        e === "horizontal" ? "lw:h-px lw:w-full" : "lw:w-px lw:self-stretch",
        t
      ),
      ...n
    }
  );
}
const Ca = 50, zr = 250, Oa = (e) => {
  const [t, n] = c.useState(null), l = c.useRef(t);
  l.current = t;
  const r = c.useRef(/* @__PURE__ */ new Map()), s = c.useRef(null), i = c.useRef(void 0), a = c.useRef(void 0), u = () => {
    clearTimeout(i.current), i.current = void 0;
  }, d = () => {
    clearTimeout(a.current), a.current = void 0;
  }, p = (v, x, R = !1) => {
    u(), d(), n({ key: v, pinned: x, focusFirst: R });
  }, f = c.useCallback((v = !1) => {
    var R, I;
    u(), d();
    const x = (R = l.current) == null ? void 0 : R.key;
    n(null), v && x && ((I = r.current.get(x)) == null || I.focus());
  }, []), g = () => {
    u(), !(!l.current || l.current.pinned) && (d(), a.current = setTimeout(() => f(), zr));
  };
  c.useEffect(() => {
    e || f();
  }, [e, f]), c.useEffect(
    () => () => {
      u(), d();
    },
    []
  );
  const m = t !== null;
  return c.useEffect(() => {
    if (!m)
      return;
    const v = (I) => {
      var b;
      const N = I;
      return N ? (b = s.current) != null && b.contains(N) ? !0 : [...r.current.values()].some((T) => T.contains(N)) : !1;
    }, x = (I) => {
      v(I.target) || f();
    }, R = (I) => {
      var N;
      I.key === "Escape" && f(
        !!((N = s.current) != null && N.contains(document.activeElement))
      );
    };
    return document.addEventListener("pointerdown", x), document.addEventListener("keydown", R), () => {
      document.removeEventListener("pointerdown", x), document.removeEventListener("keydown", R);
    };
  }, [m, f]), {
    state: t,
    close: f,
    triggerProps: (v) => ({
      ref: (x) => {
        x ? r.current.set(v, x) : r.current.delete(v);
      },
      onMouseEnter: () => {
        if (!e)
          return;
        d();
        const x = l.current;
        if (x) {
          x.key !== v && p(v, x.pinned);
          return;
        }
        u(), i.current = setTimeout(
          () => p(v, !1),
          Ca
        );
      },
      onMouseLeave: g,
      onClick: (x) => {
        var R;
        if (x.detail === 0) {
          p(v, !0, !0);
          return;
        }
        ((R = l.current) == null ? void 0 : R.key) !== v && p(v, !1);
      },
      onKeyDown: (x) => {
        x.key === "ArrowRight" && (x.preventDefault(), p(v, !0, !0));
      }
    }),
    flyoutProps: {
      ref: s,
      onMouseEnter: d,
      onMouseLeave: g
    },
    onRailLeafEnter: () => {
      u(), l.current && !l.current.pinned && f();
    },
    getTrigger: (v) => r.current.get(v) ?? null
  };
}, Ia = Oa, $a = 264, ka = 72, Wl = 64, La = "lw:outline-none lw:focus:outline-none lw:focus-visible:outline-none", Da = 16, Ma = 14, Pa = 32, Fa = 20, Ul = "0.7rem", _n = ke(qo), bo = "var(--lw-hover-wash)", Ba = "#ffffff", Xt = (e, t) => ({
  className: y(
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
}), _t = c.forwardRef(
  ({ href: e, disabled: t, ...n }, l) => e ? /* @__PURE__ */ o(
    "a",
    {
      ref: l,
      href: e,
      ...n
    }
  ) : /* @__PURE__ */ o(
    "button",
    {
      ref: l,
      type: "button",
      disabled: t,
      ...n
    }
  )
);
_t.displayName = "RowControl";
const xo = "lw:relative lw:flex lw:w-full lw:min-w-0 lw:grow lw:items-center lw:justify-start lw:text-left lw:no-underline lw:transition-colors lw:duration-150 lw:outline-none lw:focus-visible:bg-selected lw:disabled:opacity-40", Rn = "lw:inline-flex lw:shrink-0 lw:text-inherit lw:[&_svg]:size-6", Tn = "lw:my-1 lw:min-w-0 lw:flex-auto", vo = y(
  "lw:relative lw:inline-flex lw:shrink-0 lw:items-center lw:justify-center lw:p-2 lw:transition-[background-color,border-radius,color] lw:duration-150 lw:disabled:opacity-40 lw:[&_svg]:size-6",
  La
), dt = ({ text: e, variant: t = "body1", center: n = !1, fontSize: l, fontWeight: r }) => {
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
    const p = new ResizeObserver(() => u());
    return p.observe(d), () => p.disconnect();
  }, [u]), /* @__PURE__ */ o(
    je,
    {
      title: e,
      side: "right",
      arrow: !0,
      delayDuration: 400,
      disabled: !i,
      children: /* @__PURE__ */ o(
        "span",
        {
          ref: s,
          className: y(
            "lw:block lw:overflow-hidden lw:text-ellipsis lw:whitespace-nowrap lw:text-inherit",
            t === "caption" ? "lw:text-xs lw:leading-[1.66]" : "lw:text-sm lw:leading-normal",
            n && "lw:w-full lw:text-center lw:leading-[1.1]"
          ),
          style: {
            ...l ? { fontSize: l } : {},
            ...r ? { fontWeight: r } : {}
          },
          children: e
        }
      )
    }
  );
}, za = `url("data:image/svg+xml,${encodeURIComponent(
  "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 5 8'><path d='M0.5 0.9L4.1 4L0.5 7.1Z' stroke='black' stroke-width='1' stroke-linejoin='round'/></svg>"
)}")`, Ha = 4, Ga = (e) => Math.max(0, Math.min(Ha, Pn - e)), Wa = ({
  open: e,
  size: t = Da
}) => /* @__PURE__ */ o(
  e ? Os : Is,
  {
    "aria-hidden": !0,
    className: "lw:shrink-0 lw:opacity-75",
    style: { width: t, height: t }
  }
), Xl = ({ open: e }) => /* @__PURE__ */ o(
  Cs,
  {
    "aria-hidden": !0,
    className: y(
      "lw:size-5! lw:shrink-0 lw:opacity-75 lw:transition-transform lw:duration-150",
      e && "lw:rotate-90"
    )
  }
), An = 600, ot = `${Yn}px`, Pn = (en - Ce) / 2, Ua = (e) => {
  const t = Math.max(0, e - Pn);
  return {
    paddingLeft: `${Math.max(0, Pn - t)}px`,
    paddingRight: `${Math.max(0, Pn - e)}px`
  };
};
function Xa(e, t) {
  const [n, l] = c.useState(0);
  return c.useLayoutEffect(() => {
    const r = e.current;
    if (!t || !r) {
      l(0);
      return;
    }
    const s = () => {
      const a = getComputedStyle(r), u = parseFloat(a.borderLeftWidth) + parseFloat(a.borderRightWidth);
      l(Math.max(0, r.offsetWidth - r.clientWidth - u));
    };
    if (s(), typeof ResizeObserver > "u")
      return;
    const i = new ResizeObserver(s);
    return i.observe(r), r.firstElementChild && i.observe(r.firstElementChild), () => i.disconnect();
  }, [e, t]), n;
}
function Ka(e) {
  const [t, n] = c.useState(!1);
  return c.useLayoutEffect(() => {
    const l = e.current, r = l == null ? void 0 : l.firstElementChild;
    if (!l || !r)
      return;
    const s = () => {
      const a = getComputedStyle(l), u = r.offsetHeight + parseFloat(a.paddingTop) + parseFloat(a.paddingBottom);
      n(u > l.clientHeight + 0.5);
    };
    if (s(), typeof ResizeObserver > "u")
      return;
    const i = new ResizeObserver(s);
    return i.observe(l), i.observe(r), () => i.disconnect();
  }, [e]), t;
}
const Cn = 8;
function ja(e, t, n) {
  c.useEffect(() => {
    const l = e.current;
    if (!l)
      return;
    const r = (u) => {
      const d = Array.from(
        l.querySelectorAll('[data-active="true"]')
      ).filter((m) => m.offsetHeight > 0).pop();
      if (!d)
        return;
      const p = l.getBoundingClientRect(), f = d.getBoundingClientRect();
      let g = 0;
      f.top < p.top + Cn ? g = f.top - p.top - Cn : f.bottom > p.bottom - Cn && (g = f.bottom - p.bottom + Cn), g !== 0 && l.scrollBy({ top: g, behavior: u });
    }, s = requestAnimationFrame(() => r("smooth")), i = window.setTimeout(() => r("smooth"), 350), a = typeof ResizeObserver > "u" ? null : new ResizeObserver(() => r("auto"));
    return a == null || a.observe(l), () => {
      cancelAnimationFrame(s), window.clearTimeout(i), a == null || a.disconnect();
    };
  }, [e, t, n]);
}
const Ya = ({
  mainLinks: e,
  secondaryLinks: t = [],
  activePath: n,
  onLinkClick: l,
  onLinkAction: r,
  logo: s,
  title: i,
  onBrandClick: a,
  brandMenuOpen: u,
  showHeaderBar: d = !1,
  headerBackgroundColor: p,
  headerForegroundColor: f,
  brandColor: g,
  activeAccentColor: m = "#01584f",
  activeBackgroundColor: h,
  groupArrowColor: _,
  groupAccentColor: S,
  activeForegroundColor: v,
  foregroundColor: x,
  surfaceBackgroundColor: R,
  flyoutSurfaceColor: I,
  collapsed: N = !1,
  expandedWidth: b = $a,
  collapsedWidth: T = ka,
  showLabels: C = !1,
  topInsetPx: K = 0,
  topContent: k,
  footer: F,
  submenuMode: L = "inline"
}) => {
  var Mt;
  const G = Ye(), ee = c.useContext(Kn), B = L === "flyout" && N && !C, A = Ia(B), $ = c.useRef(null), O = c.useRef(null), q = c.useRef(null), W = c.useRef(null);
  ja(W, n, N);
  const oe = Xa(W, B), me = Ka(W), j = ua(B, G, ((Mt = A.state) == null ? void 0 : Mt.key) ?? null), Z = Lr($, {
    enabled: B,
    axis: "y",
    itemSelector: Dr,
    maxScale: Sr,
    // One button's pitch: the one under the pointer swells, its
    // neighbours only as the pointer crosses over to them
    reach: Ce + Yn,
    // Only 4px of padding at the scroller's ends: the first and last
    // buttons swell less, or the last would scroll the rail
    boundsRef: W,
    transition: `transform ${_n.duration}ms ${_n.easing}, background-color 160ms ease`
  }), ue = {
    ...j.containerProps,
    ...Z.containerProps,
    ...B ? {
      onScrollCapture: () => {
        var w, P;
        (P = (w = j.containerProps).onScrollCapture) == null || P.call(w), Z.settle();
      }
    } : {}
  }, J = h ?? m, te = Ll({
    enabled: B,
    isDark: G,
    color: J,
    containerRef: O
  }), ie = Ll({
    enabled: B,
    isDark: G,
    color: J,
    containerRef: q
  }), he = c.useMemo(
    () => e.filter((w) => w.aboveSearch),
    [e]
  ), ye = c.useMemo(
    () => e.filter((w) => !w.aboveSearch),
    [e]
  ), { close: D } = A;
  c.useEffect(() => {
    D();
  }, [n, D]);
  const [z, Y] = c.useState(
    {}
  ), U = v ?? $o(J), ae = { bg: J, fg: U }, ne = S ?? tn(m), Ee = qn(R, G), we = x ?? (G ? "var(--lw-text-primary)" : m), _e = p ?? Ee, Be = f ?? (p ? $o(_e) : x ?? (G ? Ba : m)), ce = tn(Be), Re = (w) => {
    l == null || l(w);
  }, ge = (w) => w ? {
    href: w,
    onClick: (P) => {
      Ot(P) && (P.preventDefault(), Re(w));
    }
  } : {}, pe = (w, P) => {
    Y((Q) => ({ ...Q, [w]: !P }));
  }, Ne = (w, P) => z[P] ?? rt(w, n), Te = (w, P) => Xt(
    {
      fg: w ? U : we,
      bg: w ? J : void 0
    },
    w || C ? ae : { bg: P }
  ), tt = (w) => {
    const P = Xe(w, n), Q = Te(P, ne), H = /* @__PURE__ */ E(
      _t,
      {
        disabled: !w.path,
        ...ge(w.path),
        "data-testid": `sidebar-item-${w.text}`,
        "data-active": P ? "true" : "false",
        "data-selected": P ? "true" : void 0,
        className: y(
          xo,
          "lw:rounded-lg lw:px-3",
          w.subtitle ? "lw:py-2" : "lw:py-2.5",
          // Room for the action button laid over the row's end
          w.action && "lw:pr-12",
          Q.className
        ),
        style: Q.style,
        children: [
          /* @__PURE__ */ o(
            "span",
            {
              className: Rn,
              style: { minWidth: w.subtitle ? 48 : 36 },
              children: w.icon
            }
          ),
          /* @__PURE__ */ E(
            "span",
            {
              className: y(Tn, w.subtitle && "lw:my-0"),
              children: [
                /* @__PURE__ */ o(
                  dt,
                  {
                    text: w.text,
                    fontWeight: An
                  }
                ),
                w.subtitle ? /* @__PURE__ */ o("span", { className: "lw:block lw:opacity-85", children: /* @__PURE__ */ o(
                  dt,
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
      return H;
    const { action: X } = w, V = P ? U : we;
    return /* @__PURE__ */ E("div", { className: "lw:relative", children: [
      H,
      /* @__PURE__ */ o(Dn, { title: X.label, side: "right", arrow: !0, children: /* @__PURE__ */ o(
        "button",
        {
          type: "button",
          "aria-label": X.label,
          "data-testid": `sidebar-action-${w.text}`,
          onClick: () => {
            X.onClick(), r == null || r();
          },
          className: y(
            "lw:absolute lw:top-1/2 lw:right-2 lw:inline-flex lw:size-[30px] lw:-translate-y-1/2 lw:items-center lw:justify-center lw:rounded-md lw:border lw:border-solid lw:transition-colors lw:[&_svg]:size-[18px]",
            "lw:hover:bg-(--lw-action-hover-bg)",
            // No lingering outline after a click; a clear ring for keyboard focus
            "lw:focus:outline-none lw:focus-visible:outline-2 lw:focus-visible:outline-offset-1 lw:focus-visible:outline-solid lw:focus-visible:outline-(--lw-action-ring)"
          ),
          style: {
            borderColor: P ? "rgba(255, 255, 255, 0.35)" : ne,
            color: V,
            "--lw-action-hover-bg": P ? "rgba(255, 255, 255, 0.15)" : ne,
            "--lw-action-ring": V
          },
          children: X.icon
        }
      ) })
    ] }, w.text);
  }, mn = (w) => {
    const P = rt(w, n), Q = Xe(w, n), H = St("", w), X = Ne(w, H), V = Te(Q, ne);
    return /* @__PURE__ */ E(
      "div",
      {
        "data-testid": `sidebar-group-${w.text}`,
        className: "lw:rounded-lg",
        style: {
          backgroundColor: P ? ne : "transparent"
        },
        children: [
          /* @__PURE__ */ E(
            _t,
            {
              onClick: () => pe(H, X),
              "data-testid": `sidebar-item-${w.text}`,
              "data-active": Q ? "true" : "false",
              "aria-expanded": X,
              className: y(
                xo,
                "lw:rounded-lg lw:px-3 lw:py-2.5",
                V.className
              ),
              style: V.style,
              children: [
                /* @__PURE__ */ o("span", { className: Rn, style: { minWidth: 36 }, children: w.icon }),
                /* @__PURE__ */ o("span", { className: Tn, children: /* @__PURE__ */ o(
                  dt,
                  {
                    text: w.text,
                    fontWeight: An
                  }
                ) }),
                /* @__PURE__ */ o(Xl, { open: X })
              ]
            }
          ),
          X ? /* @__PURE__ */ o(
            "div",
            {
              "data-testid": `sidebar-children-${w.text}`,
              className: "lw:pb-1 lw:animate-in lw:fade-in-0",
              children: w.subitems.map(
                (fe) => ut(fe, H, 1)
              )
            }
          ) : null
        ]
      },
      w.text
    );
  }, ut = (w, P, Q) => {
    const H = St(P, w), X = Pa + (Q - 1) * Fa, V = y(
      xo,
      "lw:mx-1 lw:w-[calc(100%-8px)] lw:rounded-lg lw:py-1.5 lw:pr-4"
    );
    if (Tt(w)) {
      const be = rt(w, n), Oe = Xe(w, n), xe = Ne(w, H), ht = Te(Oe, bo);
      return /* @__PURE__ */ E("div", { "data-testid": `sidebar-group-${w.text}`, children: [
        /* @__PURE__ */ E(
          _t,
          {
            onClick: () => pe(H, xe),
            "data-testid": `sidebar-subitem-${w.text}`,
            "data-active": be ? "true" : "false",
            "aria-expanded": xe,
            className: y(V, ht.className),
            style: { ...ht.style, paddingLeft: X },
            children: [
              w.icon ? /* @__PURE__ */ o(
                "span",
                {
                  className: Rn,
                  style: { minWidth: 32 },
                  children: w.icon
                }
              ) : null,
              /* @__PURE__ */ o("span", { className: Tn, children: /* @__PURE__ */ o(
                dt,
                {
                  text: w.text,
                  fontWeight: An
                }
              ) }),
              /* @__PURE__ */ o(Xl, { open: xe })
            ]
          }
        ),
        xe ? /* @__PURE__ */ o(
          "div",
          {
            "data-testid": `sidebar-children-${w.text}`,
            className: "lw:animate-in lw:fade-in-0",
            children: w.subitems.map(
              (Ae) => ut(Ae, H, Q + 1)
            )
          }
        ) : null
      ] }, H);
    }
    const fe = Xe(w, n), Me = Te(fe, bo);
    return /* @__PURE__ */ E(
      _t,
      {
        disabled: !w.path,
        ...ge(w.path),
        "data-testid": `sidebar-subitem-${w.text}`,
        "data-active": fe ? "true" : "false",
        "data-selected": fe ? "true" : void 0,
        className: y(V, Me.className),
        style: { ...Me.style, paddingLeft: X },
        children: [
          w.icon ? /* @__PURE__ */ o("span", { className: Rn, style: { minWidth: 32 }, children: w.icon }) : null,
          /* @__PURE__ */ o("span", { className: Tn, children: /* @__PURE__ */ o(
            dt,
            {
              text: w.text,
              fontWeight: An
            }
          ) })
        ]
      },
      H
    );
  }, wt = y(
    "lw:rounded-md! lw:[&_svg]:size-6 lw:hover:bg-transparent! lw:active:[transform:scale(0.88)] lw:active:duration-[90ms] lw:motion-reduce:active:[transform:none]",
    $e
  ), pn = (w) => ({
    ...w ? { backgroundColor: "transparent" } : {},
    transition: `transform ${_n.duration}ms ${_n.easing}, background-color 160ms ease`
  }), hn = Ko(G, ee), kt = (w, P, Q, H, X, V) => {
    const fe = !X, Me = C ? Xt(
      {
        fg: H ? U : we,
        bg: H ? J : void 0
      },
      ae
    ) : (
      // Icon-only collapsed rail (collapsible variant): original
      // hover — accent when active, else a subtle tint; no
      // foreground change. The glass rail has no hover of its own.
      Xt(
        {
          fg: H ? U : we,
          bg: H ? J : void 0
        },
        B ? void 0 : {
          bg: H ? J : V != null && V.insideGroup ? bo : ne,
          radius: "8px"
        }
      )
    ), be = B ? Ce : 44, Oe = /* @__PURE__ */ E(
      _t,
      {
        "aria-label": P,
        disabled: fe,
        ...ge(X),
        onMouseEnter: B ? A.onRailLeafEnter : void 0,
        ...B ? { [rn]: "" } : {},
        "data-testid": (V == null ? void 0 : V.testId) ?? `sidebar-item-${P}`,
        "data-active": H ? "true" : "false",
        className: y(
          vo,
          Me.className,
          C ? (
            // 8px padding on all sides of the item container.
            "lw:flex lw:h-auto lw:w-full lw:max-w-full lw:flex-col lw:gap-0.5 lw:rounded-lg lw:p-2 lw:[&_svg]:size-[22px]"
          ) : H ? "lw:rounded-lg" : "lw:rounded-full",
          !C && B && wt
        ),
        style: {
          ...Me.style,
          ...C ? {} : { width: be, height: be },
          ...!C && B ? pn(H) : {}
        },
        children: [
          Q,
          C ? /* @__PURE__ */ o(
            dt,
            {
              text: P,
              variant: "caption",
              center: !0,
              fontSize: Ul
            }
          ) : null
        ]
      }
    );
    return C ? fe ? /* @__PURE__ */ o("span", { children: Oe }, w) : /* @__PURE__ */ o(c.Fragment, { children: Oe }, w) : /* @__PURE__ */ o(
      Dn,
      {
        title: P,
        side: "right",
        arrow: !B,
        ...B ? {
          contentClassName: hn.className,
          contentStyle: hn.style,
          sideOffset: 6
        } : {},
        children: fe ? /* @__PURE__ */ o("span", { children: Oe }) : Oe
      },
      w
    );
  }, eo = (w) => {
    var X;
    const P = rt(w, n), Q = St("", w), H = ((X = A.state) == null ? void 0 : X.key) === Q;
    return /* @__PURE__ */ o(
      "div",
      {
        "data-testid": `sidebar-group-${w.text}`,
        className: "lw:flex lw:w-full lw:justify-center",
        children: /* @__PURE__ */ o(
          "button",
          {
            type: "button",
            ...A.triggerProps(Q),
            "aria-label": w.text,
            "aria-haspopup": "menu",
            "aria-expanded": H,
            "data-testid": `sidebar-item-${w.text}`,
            "data-active": P ? "true" : "false",
            "data-open": H ? "true" : "false",
            [rn]: "",
            className: y(
              vo,
              wt,
              // The icon stays centred, in line with every other icon
              // down the rail; the arrow sits in the room beside it,
              // just past the button, in the rail's side gutter (drawn
              // back inside it when the scrollbar takes that gutter).
              // Pointed at, or its pages already out, it has said its piece
              "lw:after:pointer-events-none lw:after:absolute lw:after:top-1/2 lw:after:h-[8px] lw:after:w-[5px] lw:after:-translate-y-1/2 lw:after:content-[''] lw:after:transition-opacity lw:after:duration-150 lw:after:right-(--lw-arrow-right) lw:after:bg-(--lw-arrow-bg) lw:after:opacity-(--lw-arrow-opacity) lw:after:[mask:var(--lw-arrow-mask)] lw:hover:after:opacity-0 lw:data-[open=true]:after:opacity-0"
            ),
            style: {
              width: Ce,
              height: Ce,
              color: P ? U : we,
              // Open, the rail's hover lens stays on it (useRailLens)
              // rather than a fill of its own under the lens
              backgroundColor: P ? J : "transparent",
              ...pn(P),
              "--lw-arrow-right": `${-Ga(oe)}px`,
              "--lw-arrow-bg": _ ?? "currentColor",
              "--lw-arrow-opacity": _ ? 1 : 0.55,
              "--lw-arrow-mask": `${za} center / contain no-repeat`
            },
            children: w.icon
          }
        )
      },
      w.text
    );
  }, at = (w) => {
    const P = rt(w, n), Q = Xe(w, n), H = St("", w), X = Ne(w, H), V = Xt(
      {
        fg: Q ? U : we,
        bg: Q ? J : void 0
      },
      C ? ae : { bg: Q ? J : "transparent" }
    ), fe = /* @__PURE__ */ E(
      "button",
      {
        type: "button",
        "aria-label": w.text,
        "aria-expanded": X,
        onClick: () => pe(H, X),
        "data-testid": `sidebar-item-${w.text}`,
        "data-active": Q ? "true" : "false",
        className: y(
          vo,
          V.className,
          "lw:flex lw:max-w-full lw:flex-col lw:rounded-[10px]",
          // 8px padding on all sides of the labeled item container.
          C ? "lw:w-full lw:gap-0.5 lw:p-2" : "lw:w-11 lw:px-2 lw:py-1.5"
        ),
        style: V.style,
        children: [
          C ? /* @__PURE__ */ o("span", { className: "lw:flex lw:items-center lw:justify-center lw:[&_svg]:size-[22px]", children: w.icon }) : w.icon,
          C ? /* @__PURE__ */ o(
            dt,
            {
              text: w.text,
              variant: "caption",
              center: !0,
              fontSize: Ul
            }
          ) : null,
          /* @__PURE__ */ o(Wa, { open: X, size: Ma })
        ]
      }
    ), Me = C ? fe : /* @__PURE__ */ o(Dn, { title: w.text, side: "right", arrow: !0, children: fe }), be = Xt(
      { bg: P ? ne : void 0 },
      C ? void 0 : { bg: ne }
    );
    return /* @__PURE__ */ E(
      "div",
      {
        "data-testid": `sidebar-group-${w.text}`,
        className: y(
          "lw:flex lw:w-full lw:flex-col lw:items-center lw:gap-1 lw:rounded-[10px] lw:py-1",
          be.className
        ),
        style: be.style,
        children: [
          Me,
          X ? Go(w.subitems, w.icon).map(
            ({ sub: Oe, icon: xe }) => kt(
              Oe.path,
              Oe.text,
              xe,
              Xe(Oe, n),
              Oe.path,
              {
                insideGroup: !0,
                testId: `sidebar-subitem-${Oe.text}`
              }
            )
          ) : null
        ]
      },
      w.text
    );
  }, Lt = (w) => /* @__PURE__ */ o("div", { className: "lw:flex lw:w-full lw:justify-center", children: kt(
    w.text,
    w.subtitle ? `${w.text} · ${w.subtitle}` : w.text,
    w.icon,
    Xe(w, n),
    w.path,
    { testId: `sidebar-item-${w.text}` }
  ) }, w.text), Dt = (w) => Tt(w) ? B ? eo(w) : N ? at(w) : mn(w) : N ? Lt(w) : tt(w), qe = (w) => /* @__PURE__ */ o(
    "div",
    {
      className: y(
        "lw:flex lw:w-full lw:flex-col lw:gap-1",
        N ? "lw:items-center" : "lw:items-stretch"
      ),
      children: w.map((P, Q) => {
        const H = (V) => /* @__PURE__ */ o(
          sn,
          {
            "data-testid": `sidebar-divider-${V === "before" ? "before-" : ""}${P.text}`,
            className: "lw:self-stretch",
            style: {
              marginBlock: B ? ot : "8px",
              width: "auto"
            }
          }
        ), X = P.dividerAfter && Q < w.length - 1;
        return P.dividerBefore || X ? /* @__PURE__ */ E(c.Fragment, { children: [
          P.dividerBefore ? H("before") : null,
          Dt(P),
          X ? H("after") : null
        ] }, P.text) : Dt(P);
      })
    }
  ), ft = N ? T : b, gn = () => {
    var fe, Me;
    const { state: w } = A, P = w ? [...e, ...t].find(
      (be) => Tt(be) && St("", be) === w.key
    ) ?? null : null, Q = P ? ((fe = $.current) == null ? void 0 : fe.getBoundingClientRect().right) ?? T : T, H = P ? ((Me = $.current) == null ? void 0 : Me.closest("[data-rail-surface]")) ?? $.current : null, X = H == null ? void 0 : H.getBoundingClientRect(), V = H && X ? {
      left: X.left,
      top: X.top,
      width: X.width,
      height: X.height,
      radius: parseFloat(
        getComputedStyle(H).borderTopRightRadius
      ) || 0
    } : null;
    return /* @__PURE__ */ o(
      Aa,
      {
        group: P,
        groupKey: P ? w.key : null,
        anchor: P ? A.getTrigger(w.key) : null,
        railEdge: Q,
        railShape: V,
        activePath: n,
        focusFirst: w == null ? void 0 : w.focusFirst,
        onNavigate: Re,
        onClose: A.close,
        panelProps: A.flyoutProps,
        accentColor: m,
        activeBackgroundColor: h,
        activeForegroundColor: U,
        solidSurface: I ?? Ee
      }
    );
  }, to = d ? /* @__PURE__ */ o(
    "div",
    {
      "data-testid": "sidebar-header",
      className: y(
        "lw:flex lw:shrink-0 lw:items-center lw:justify-center",
        // On the floating rail the logo sits 12px from the top and
        // 12px above Nexa — a section apart, wider than the 4px
        // between items
        B && "lw:py-3"
      ),
      style: {
        backgroundColor: _e,
        ...B ? {} : { height: Wl, minHeight: Wl }
      },
      children: s || i ? /* @__PURE__ */ o(
        Hn,
        {
          logo: s,
          title: N ? void 0 : i,
          appName: i || "App",
          onClick: a,
          menuOpen: u,
          color: g ?? Be,
          testId: "sidebar-header-brand"
        }
      ) : null
    }
  ) : null, bn = !d && s ? /* @__PURE__ */ o(
    "div",
    {
      className: "lw:flex lw:shrink-0 lw:justify-center lw:pt-4",
      style: { paddingBottom: B ? ot : "8px" },
      children: /* @__PURE__ */ o(
        Hn,
        {
          logo: s,
          appName: i || "App",
          onClick: a,
          menuOpen: u,
          color: g ?? Be,
          testId: "sidebar-header-brand"
        }
      )
    }
  ) : null, mt = C ? 4 : B ? 6 : N ? 8 : 12, pt = y(
    B ? "lw:not-supports-[selector(::-webkit-scrollbar)]:[scrollbar-width:thin] lw:not-supports-[selector(::-webkit-scrollbar)]:[scrollbar-color:transparent_transparent] lw:not-supports-[selector(::-webkit-scrollbar)]:hover:[scrollbar-color:var(--lw-border-color)_transparent] lw:not-supports-[selector(::-webkit-scrollbar)]:has-[:focus-visible]:[scrollbar-color:var(--lw-border-color)_transparent] lw:[&::-webkit-scrollbar]:w-1.5" : "lw:[scrollbar-width:thin] lw:[scrollbar-color:transparent_transparent] lw:hover:[scrollbar-color:var(--lw-border-color)_transparent] lw:has-[:focus-visible]:[scrollbar-color:var(--lw-border-color)_transparent] lw:[&::-webkit-scrollbar]:w-2",
    "lw:[&::-webkit-scrollbar-thumb]:rounded-[4px] lw:[&::-webkit-scrollbar-thumb]:bg-transparent lw:[&:hover::-webkit-scrollbar-thumb]:bg-border lw:[&:has(:focus-visible)::-webkit-scrollbar-thumb]:bg-border"
  );
  return /* @__PURE__ */ o(un.Provider, { value: B, children: /* @__PURE__ */ E(
    "nav",
    {
      ref: $,
      ...ue,
      "aria-label": "Main sidebar",
      "data-testid": "collapsible-sidebar",
      "data-collapsed": N ? "true" : "false",
      "data-labeled": C ? "true" : "false",
      className: y(
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
        B && "lw:relative lw:[&_:is(button,a,[role=button]):not([data-active=true]):not([data-rail-keep-fill]):hover]:bg-transparent! lw:[&>:not([data-glass-lens],[data-active-glass],[data-flyout-scrim])]:relative"
      ),
      style: { width: ft, minWidth: ft, backgroundColor: Ee },
      children: [
        j.lens,
        to ?? bn,
        he.length > 0 ? /* @__PURE__ */ E(
          "div",
          {
            ref: q,
            className: "lw:relative lw:shrink-0",
            style: {
              marginInline: mt,
              paddingBottom: B ? ot : "8px"
            },
            children: [
              ie.glass,
              qe(he)
            ]
          }
        ) : null,
        k ? /* @__PURE__ */ o(
          "div",
          {
            className: "lw:shrink-0",
            style: {
              paddingInline: mt,
              paddingBlock: B ? 0 : 8
            },
            children: k
          }
        ) : null,
        /* @__PURE__ */ o(
          "div",
          {
            ref: W,
            "data-testid": "sidebar-links-scroller",
            className: y(
              "lw:flex lw:min-h-0 lw:flex-auto lw:flex-col",
              pt
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
              ...B ? Ua(oe) : { paddingInline: mt },
              paddingTop: K && !d ? `${K}px` : B ? ot : "8px",
              paddingBottom: B ? ot : "16px"
            },
            children: /* @__PURE__ */ E(
              "div",
              {
                ref: O,
                className: "lw:relative lw:flex lw:flex-[1_0_auto] lw:flex-col",
                children: [
                  te.glass,
                  qe(ye),
                  t.length > 0 ? /* @__PURE__ */ E(
                    "div",
                    {
                      className: "lw:mt-auto",
                      style: {
                        paddingTop: B ? ot : "16px"
                      },
                      children: [
                        F ? null : /* @__PURE__ */ o(
                          sn,
                          {
                            style: {
                              marginBottom: B ? ot : "8px"
                            }
                          }
                        ),
                        qe(t)
                      ]
                    }
                  ) : null
                ]
              }
            )
          }
        ),
        F ? /* @__PURE__ */ o(
          "div",
          {
            className: y(
              "lw:shrink-0 lw:pb-3",
              B && "lw:[&_button_svg]:size-6"
            ),
            style: { paddingInline: mt },
            children: /* @__PURE__ */ o(
              "div",
              {
                style: {
                  borderTop: `1px solid ${ce}`,
                  paddingTop: B ? ot : "12px"
                },
                children: F
              }
            )
          }
        ) : null,
        B ? gn() : null
      ]
    }
  ) });
}, Do = Ya, Fn = "var(--lumora-content-padding, 0px)", yo = `calc(${Fn} * -1)`, qa = {
  "background.paper": "var(--lw-bg-surface)",
  "background.default": "var(--lw-bg-page)"
}, Va = (e) => e && typeof e == "object" && !Array.isArray(e) ? Object.fromEntries(
  Object.entries(e).filter(
    ([t, n]) => !t.includes("&") && !t.startsWith("@") && (typeof n == "string" || typeof n == "number")
  )
) : {}, Za = ({
  children: e,
  flushTop: t = !0,
  sticky: n = !1,
  background: l = "var(--lw-bg-surface)",
  divider: r = !0,
  inset: s = !0,
  className: i,
  style: a,
  sx: u
}) => /* @__PURE__ */ o(
  "div",
  {
    "data-testid": "full-bleed-section",
    className: y(
      r && "lw:border-b lw:border-solid lw:border-border",
      // Above page content, below the sidebar drawer and menus
      n && "lw:sticky lw:z-[3]",
      i
    ),
    style: {
      marginLeft: yo,
      marginRight: yo,
      marginTop: t ? yo : 0,
      // Space below it, like any other block on the page
      marginBottom: Fn,
      paddingLeft: s ? Fn : 0,
      paddingRight: s ? Fn : 0,
      backgroundColor: qa[l] ?? l,
      ...n && {
        position: "sticky",
        // Under the mobile top bar on phones, the viewport top on desktop
        top: "var(--lumora-sticky-top, 0px)"
      },
      ...Va(u),
      ...a
    },
    children: e
  }
), rd = Za, Ja = ({ keys: e }) => /* @__PURE__ */ o(
  "kbd",
  {
    "aria-hidden": "true",
    className: "lw:inline-flex lw:h-5 lw:shrink-0 lw:items-center lw:gap-1 lw:rounded-sm lw:border lw:border-solid lw:border-border lw:bg-surface lw:px-1.5 lw:font-[inherit] lw:text-[11px] lw:leading-none lw:text-muted-foreground",
    children: e.map((t) => /* @__PURE__ */ o("span", { children: t }, t))
  }
), Qa = Ja;
function Gn({
  className: e,
  style: t,
  variant: n = "rounded",
  animate: l = !0,
  ...r
}) {
  return /* @__PURE__ */ o(
    "span",
    {
      "data-slot": "skeleton",
      "aria-hidden": !0,
      className: y(
        "lw:block lw:bg-skeleton",
        n === "circular" && "lw:rounded-full",
        n === "rounded" && "lw:rounded-md",
        n === "text" && "lw:h-[1em] lw:rounded-sm",
        l && "lw:animate-[lw-skeleton-pulse_2s_ease-in-out_0.5s_infinite]",
        e
      ),
      style: t,
      ...r
    }
  );
}
const ei = "(max-width: 899.95px)", ti = (e) => (t) => {
  var l;
  if (typeof window > "u" || !window.matchMedia)
    return () => {
    };
  const n = window.matchMedia(e);
  return (l = n.addEventListener) == null || l.call(n, "change", t), () => {
    var r;
    return (r = n.removeEventListener) == null ? void 0 : r.call(n, "change", t);
  };
};
function ni(e) {
  const t = c.useMemo(() => ti(e), [e]);
  return c.useSyncExternalStore(
    t,
    () => typeof window < "u" && window.matchMedia ? window.matchMedia(e).matches : !1,
    () => !1
  );
}
const Hr = () => ni(ei), oi = 6, li = 8, Kl = (e, t) => typeof e == "object" ? e[t] : e, Eo = ({ width: e, height: t = 20, className: n }) => /* @__PURE__ */ o(
  Gn,
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
), xt = ({ size: e, variant: t = "rounded" }) => /* @__PURE__ */ o(
  Gn,
  {
    variant: t,
    className: "lw:shrink-0",
    style: { width: e, height: e }
  }
), No = ({
  themeMode: e,
  sidebarVariant: t = "rail",
  sidebarSubmenu: n = "expand",
  sidebarAutoHide: l = !1,
  showSidebar: r = !0,
  contentPadding: s = Rr,
  sidebarBackgroundColor: i,
  contentBackgroundColor: a,
  content: u
}) => {
  const d = Hr(), p = e === "dark", f = Ar({
    showSidebar: r,
    isMobile: d,
    sidebarVariant: t,
    sidebarSubmenu: n,
    sidebarAutoHide: l
  }), g = nn(n, t) ? {
    gutterPx: lt,
    radiusPx: _r
  } : void 0, m = Mn, h = qn(
    Kl(i, e),
    p
  ), _ = Cr(
    Kl(a, e),
    p
  ), S = Tr(s), v = g ? /* @__PURE__ */ E("div", { className: "lw:flex lw:flex-col lw:items-center lw:pt-3", children: [
    /* @__PURE__ */ o(xt, { size: 36 }),
    /* @__PURE__ */ o(
      "div",
      {
        className: "lw:mt-4 lw:flex lw:flex-col lw:items-center",
        style: { gap: Yn },
        children: Array.from({ length: li }, (x, R) => /* @__PURE__ */ o(
          "div",
          {
            className: "lw:flex lw:items-center lw:justify-center",
            style: {
              width: Ce,
              height: Ce
            },
            children: /* @__PURE__ */ o(xt, { size: ko })
          },
          R
        ))
      }
    )
  ] }) : /* @__PURE__ */ E("div", { className: "lw:flex lw:flex-col lw:items-center lw:gap-4 lw:pt-4", children: [
    /* @__PURE__ */ o(xt, { size: 32 }),
    /* @__PURE__ */ o("div", { className: "lw:h-2" }),
    Array.from({ length: oi }, (x, R) => /* @__PURE__ */ o(xt, { size: 28 }, R))
  ] });
  return /* @__PURE__ */ E(
    "div",
    {
      role: "status",
      "aria-busy": "true",
      "aria-label": "Checking session",
      "data-lw-scope": "",
      "data-lw-theme": e,
      className: "lw:flex lw:min-h-screen",
      style: { backgroundColor: _ },
      children: [
        d && /* @__PURE__ */ E(
          "div",
          {
            className: "lw:fixed lw:top-0 lw:right-0 lw:left-0 lw:z-[1] lw:flex lw:items-center lw:gap-4 lw:px-4",
            style: {
              height: m,
              backgroundColor: h
            },
            children: [
              /* @__PURE__ */ o(xt, { size: 24 }),
              /* @__PURE__ */ o(Eo, { width: 96 }),
              /* @__PURE__ */ o("div", { className: "lw:grow" }),
              /* @__PURE__ */ o(xt, { size: 32, variant: "circular" })
            ]
          }
        ),
        !d && f > 0 && /* @__PURE__ */ o(
          "div",
          {
            className: "lw:relative lw:shrink-0",
            style: { width: f },
            children: /* @__PURE__ */ o(
              "div",
              {
                className: "lw:fixed",
                style: g ? {
                  top: g.gutterPx,
                  bottom: g.gutterPx,
                  left: g.gutterPx,
                  width: f - 2 * g.gutterPx,
                  borderRadius: g.radiusPx,
                  backgroundColor: h
                } : {
                  top: 0,
                  bottom: 0,
                  left: 0,
                  width: f,
                  backgroundColor: h
                },
                children: v
              }
            )
          }
        ),
        /* @__PURE__ */ o(
          "div",
          {
            className: "lw-content-padding lw:min-w-0 lw:grow",
            "data-lw-host": "",
            style: {
              ...S,
              "--lumora-sticky-top": d ? `${m}px` : "0px",
              padding: "var(--lumora-content-padding)",
              marginTop: d ? m : 0
            },
            children: u ?? /* @__PURE__ */ E(ve, { children: [
              /* @__PURE__ */ o(Eo, { width: 220, height: 40 }),
              /* @__PURE__ */ o(Eo, { width: 320, className: "lw:mb-6" }),
              /* @__PURE__ */ o("div", { className: "lw:mb-6 lw:flex lw:flex-row lw:gap-4", children: Array.from(
                { length: d ? 2 : 4 },
                (x, R) => /* @__PURE__ */ o(
                  Gn,
                  {
                    className: "lw:h-24 lw:flex-1"
                  },
                  R
                )
              ) }),
              /* @__PURE__ */ o(Gn, { className: "lw:h-[360px]" })
            ] })
          }
        )
      ]
    }
  );
}, jl = { background: "hsl(220, 35%, 3%)", color: "#ffffff" }, ri = ({
  theme: e = "light",
  darkModeSelector: t,
  ...n
}) => {
  if (!t)
    return /* @__PURE__ */ o(No, { themeMode: e, ...n });
  const l = [
    '[data-lw-skeleton-mode="dark"]{display:none}',
    '[data-lw-skeleton-mode="light"]{display:contents}',
    `${t} [data-lw-skeleton-mode="light"]{display:none}`,
    `${t} [data-lw-skeleton-mode="dark"]{display:contents}`,
    `${t} body{background-color:${jl.background};color:${jl.color}}`
  ].join(`
`);
  return /* @__PURE__ */ E(ve, { children: [
    /* @__PURE__ */ o("style", { dangerouslySetInnerHTML: { __html: l } }),
    /* @__PURE__ */ o("div", { "data-lw-skeleton-mode": "light", children: /* @__PURE__ */ o(No, { themeMode: "light", ...n }) }),
    /* @__PURE__ */ o("div", { "data-lw-skeleton-mode": "dark", children: /* @__PURE__ */ o(No, { themeMode: "dark", ...n }) })
  ] });
}, si = ri;
class se extends Error {
  constructor(t, n, l = null) {
    super(t), this.name = "AuthError", this.code = n, this.originalError = l, this.timestamp = (/* @__PURE__ */ new Date()).toISOString();
  }
}
const de = {
  STORAGE_ACCESS_DENIED: "STORAGE_ACCESS_DENIED",
  TOKEN_NOT_FOUND: "TOKEN_NOT_FOUND",
  TOKEN_INVALID: "TOKEN_INVALID",
  TOKEN_EXPIRED: "TOKEN_EXPIRED",
  LOGOUT_FAILED: "LOGOUT_FAILED",
  UNKNOWN_ERROR: "UNKNOWN_ERROR"
}, Se = {
  ACCESS_TOKEN: "lumoraAccessToken",
  REFRESH_TOKEN: "lumoraRefreshToken",
  USER: "lumoraUser"
}, Qe = {
  ACCESS_TOKEN: "accessToken",
  REFRESH_TOKEN: "refreshToken",
  USER: "user"
}, ai = () => {
  if (!(typeof window > "u" || !window.localStorage))
    try {
      const e = localStorage.getItem(
        Qe.ACCESS_TOKEN
      ), t = localStorage.getItem(
        Qe.REFRESH_TOKEN
      ), n = localStorage.getItem(Qe.USER);
      e && !localStorage.getItem(Se.ACCESS_TOKEN) && localStorage.setItem(Se.ACCESS_TOKEN, e), t && !localStorage.getItem(Se.REFRESH_TOKEN) && localStorage.setItem(
        Se.REFRESH_TOKEN,
        t
      ), n && !localStorage.getItem(Se.USER) && localStorage.setItem(Se.USER, n), (e || t || n) && (localStorage.removeItem(Qe.ACCESS_TOKEN), localStorage.removeItem(Qe.REFRESH_TOKEN), localStorage.removeItem(Qe.USER));
    } catch (e) {
      console.warn("Failed to migrate legacy localStorage keys:", e);
    }
}, So = (e) => {
  try {
    if (typeof window > "u")
      return console.warn("localStorage access attempted on server side"), null;
    if (!window.localStorage)
      throw new se(
        "localStorage is not available",
        de.STORAGE_ACCESS_DENIED
      );
    return window.localStorage.getItem(e);
  } catch (t) {
    throw t.name === "QuotaExceededError" ? (console.error("Storage quota exceeded"), new se(
      "Storage quota exceeded. Please clear browser data.",
      de.STORAGE_ACCESS_DENIED,
      t
    )) : t.name === "SecurityError" ? (console.error(
      "localStorage access denied (private browsing or security settings)"
    ), new se(
      "Access to localStorage is denied. Please check browser settings.",
      de.STORAGE_ACCESS_DENIED,
      t
    )) : (console.error(
      "Unexpected error accessing localStorage:",
      t.name
    ), new se(
      "Failed to access storage",
      de.STORAGE_ACCESS_DENIED,
      t
    ));
  }
}, _o = (e, t) => {
  try {
    if (typeof window > "u")
      return console.warn("localStorage write attempted on server side"), !1;
    if (!window.localStorage)
      throw new se(
        "localStorage is not available",
        de.STORAGE_ACCESS_DENIED
      );
    return window.localStorage.setItem(e, t), !0;
  } catch (n) {
    throw n.name === "QuotaExceededError" ? (console.error("Storage quota exceeded"), new se(
      "Storage quota exceeded. Please clear browser data.",
      de.STORAGE_ACCESS_DENIED,
      n
    )) : n.name === "SecurityError" ? (console.error(
      "localStorage write denied (private browsing or security settings)"
    ), new se(
      "Access to localStorage is denied. Please check browser settings.",
      de.STORAGE_ACCESS_DENIED,
      n
    )) : (console.error(
      "Unexpected error writing to localStorage:",
      n.name
    ), new se(
      "Failed to write to storage",
      de.STORAGE_ACCESS_DENIED,
      n
    ));
  }
}, Gr = (e) => {
  try {
    return typeof window > "u" ? (console.warn("localStorage removal attempted on server side"), !1) : window.localStorage ? (window.localStorage.removeItem(e), !0) : (console.warn("localStorage is not available"), !1);
  } catch (t) {
    return t.name !== "SecurityError" && console.warn(`Could not remove localStorage key "${e}"`), !1;
  }
}, an = () => {
  try {
    ai();
    const e = So(Se.ACCESS_TOKEN), t = So(Se.REFRESH_TOKEN), n = So(Se.USER);
    let l = null;
    if (n)
      try {
        l = JSON.parse(n);
      } catch {
        n && n !== "null" && n !== "undefined" && console.warn(
          "Invalid user data in localStorage, clearing:",
          n.substring(0, 50)
        ), Gr(Se.USER);
      }
    return {
      accessToken: e,
      refreshToken: t,
      user: l
    };
  } catch (e) {
    throw e instanceof se ? e : new se(
      "Failed to retrieve authentication tokens",
      de.UNKNOWN_ERROR,
      e
    );
  }
}, ii = () => {
  try {
    const { accessToken: e, refreshToken: t } = an();
    return !(e || t) ? {
      isAuthenticated: !1,
      error: new se(
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
      error: e instanceof se ? e : new se(
        "Authentication check failed",
        de.UNKNOWN_ERROR,
        e
      )
    };
  }
}, Wr = (e, t, n = null) => {
  try {
    if (!e && !t)
      throw new se(
        "At least one token must be provided",
        de.TOKEN_INVALID
      );
    return e && _o(Se.ACCESS_TOKEN, e), t && _o(Se.REFRESH_TOKEN, t), n && _o(Se.USER, JSON.stringify(n)), {
      success: !0,
      error: null
    };
  } catch (l) {
    return console.error("Failed to store authentication tokens:", l), {
      success: !1,
      error: l instanceof se ? l : new se(
        "Failed to store tokens",
        de.UNKNOWN_ERROR,
        l
      )
    };
  }
}, cn = () => {
  try {
    return [
      Se.ACCESS_TOKEN,
      Se.REFRESH_TOKEN,
      Se.USER,
      // Also clear legacy keys for complete cleanup
      Qe.ACCESS_TOKEN,
      Qe.REFRESH_TOKEN,
      Qe.USER
    ].map((l) => Gr(l)).every((l) => l) || console.warn("Some tokens could not be removed from localStorage"), {
      success: !0,
      error: null
    };
  } catch (e) {
    return console.error("Failed to clear authentication tokens:", e), {
      success: !1,
      error: e instanceof se ? e : new se(
        "Failed to clear tokens",
        de.LOGOUT_FAILED,
        e
      )
    };
  }
}, ci = () => {
  try {
    const { user: e } = an();
    return {
      user: e,
      error: null
    };
  } catch (e) {
    return console.error("Failed to get current user:", e), {
      user: null,
      error: e instanceof se ? e : new se(
        "Failed to retrieve user data",
        de.UNKNOWN_ERROR,
        e
      )
    };
  }
}, sd = (e) => {
  if (!(e instanceof se))
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
}, Mo = (e, t = "Unknown") => {
  const n = {
    context: t,
    message: e.message,
    code: e instanceof se ? e.code : "UNKNOWN",
    timestamp: e instanceof se ? e.timestamp : (/* @__PURE__ */ new Date()).toISOString(),
    stack: e.stack
  };
  e instanceof se && e.originalError && (n.originalError = {
    name: e.originalError.name,
    message: e.originalError.message
  }), console.warn("[Auth Error]", n);
}, di = (e) => {
  if (!e)
    throw new Error("API base URL is required to create axios client");
  const t = Cl.create({
    baseURL: e,
    headers: {
      "Content-Type": "application/json"
    }
  });
  let n = !1, l = null, r = [];
  const s = (i, a) => {
    r.forEach(({ resolve: u, reject: d }) => {
      i ? d(i) : a && u(a);
    }), r = [];
  };
  return t.interceptors.request.use(
    (i) => {
      const { accessToken: a } = an();
      return a && i.headers && (i.headers.Authorization = `Bearer ${a}`), i;
    },
    (i) => Promise.reject(i)
  ), t.interceptors.response.use(
    (i) => i,
    async (i) => {
      var g;
      const a = i.config, u = (g = i.response) == null ? void 0 : g.status, d = (a == null ? void 0 : a.url) || "", p = d.includes("/auth/refresh");
      if (u !== 401 || a._retry || p)
        return Promise.reject(i);
      a._retry = !0;
      const { refreshToken: f } = an();
      if (!f) {
        const m = new Error(
          "No refresh token available for token refresh"
        );
        return Mo(m, "AxiosClient - Token Refresh"), cn(), typeof window < "u" && (window.location.href = "/login"), Promise.reject(i);
      }
      if (n && l)
        return new Promise((m, h) => {
          r.push({ resolve: m, reject: h });
        }).then((m) => {
          const {
            accessToken: h,
            refreshToken: _
          } = m;
          if (a.headers && (a.headers.Authorization = `Bearer ${h}`), d.includes("/auth/logout"))
            try {
              if (typeof a.data == "string") {
                const S = JSON.parse(
                  a.data || "{}"
                );
                S.refresh_token = _, a.data = JSON.stringify(S);
              } else
                a.data && typeof a.data == "object" ? a.data.refresh_token = _ : a.data = JSON.stringify({
                  refresh_token: _
                });
            } catch {
              a.data = JSON.stringify({
                refresh_token: _
              });
            }
          return t(a);
        }).catch((m) => Promise.reject(m));
      n = !0, l = Cl.post(
        `${e}/auth/refresh`,
        {
          refresh_token: f
        }
      );
      try {
        const m = await l, { accessToken: h, refreshToken: _ } = m.data;
        if (Wr(h, _, null), s(null, {
          accessToken: h,
          refreshToken: _
        }), a.headers && (a.headers.Authorization = `Bearer ${h}`), d.includes("/auth/logout"))
          try {
            if (typeof a.data == "string") {
              const S = JSON.parse(
                a.data || "{}"
              );
              S.refresh_token = _, a.data = JSON.stringify(S);
            } else
              a.data && typeof a.data == "object" ? a.data.refresh_token = _ : a.data = JSON.stringify({
                refresh_token: _
              });
          } catch {
            a.data = JSON.stringify({
              refresh_token: _
            });
          }
        return t(a);
      } catch (m) {
        return Mo(
          m,
          "AxiosClient - Token Refresh Failed"
        ), s(m), cn(), typeof window < "u" && (window.location.href = "/login"), Promise.reject(m);
      } finally {
        n = !1, l = null;
      }
    }
  ), t;
}, ui = async (e, t) => {
  const { accessToken: n, refreshToken: l } = an();
  if (n)
    return !0;
  if (l)
    try {
      const r = await e.post("/auth/refresh", {
        refresh_token: l
      });
      if (r.data.success && r.data.accessToken)
        return Wr(
          r.data.accessToken,
          r.data.refreshToken || null,
          null
        ), !0;
    } catch (r) {
      Mo(r, "TokenValidator - Refresh Failed");
    }
  return cn(), t ? t() : window.location.href = "/login", !1;
}, wi = ({ size: e = 20 }) => /* @__PURE__ */ E(
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
), Jt = wi, Yl = ke(qo), Ur = "#09C1AE", fi = "0px 2px 4px -1px rgba(0,0,0,0.2),0px 4px 5px 0px rgba(0,0,0,0.14),0px 1px 10px 0px rgba(0,0,0,0.12)", mi = "0px 3px 5px -1px rgba(0,0,0,0.2),0px 6px 10px 0px rgba(0,0,0,0.14),0px 1px 18px 0px rgba(0,0,0,0.12)", On = "lw:relative lw:overflow-hidden lw:[&>*]:relative lw:[&>*]:z-[2]", In = ({
  radiusPx: e,
  cover: t
}) => /* @__PURE__ */ E(ve, { children: [
  /* @__PURE__ */ o(
    "span",
    {
      "aria-hidden": !0,
      className: "lw:pointer-events-none lw:absolute! lw:inset-[-50%] lw:z-0! lw:animate-spin lw:motion-reduce:animate-none",
      style: {
        background: `conic-gradient(from 0deg, rgba(9, 193, 174, 0.25) 0deg 250deg, ${Ur} 300deg, #0DD4BF 330deg, rgba(9, 193, 174, 0.25) 360deg)`,
        animationDuration: "3s"
      }
    }
  ),
  /* @__PURE__ */ o(
    "span",
    {
      "aria-hidden": !0,
      className: "lw:pointer-events-none lw:absolute! lw:inset-[2px] lw:z-[1]!",
      style: { borderRadius: e - 2, background: t }
    }
  )
] }), pi = ({
  variant: e,
  onClick: t,
  active: n = !1,
  busy: l = !1,
  shortcutKeys: r,
  accentColor: s = "#01584f",
  rightOffsetPx: i = 0
}) => {
  const a = Zo(), u = c.useContext(un), d = Ye(), p = r ? `Ask Nexa (${r.join("")})` : "Ask Nexa", f = {
    type: "button",
    onClick: t,
    "aria-label": "Ask Nexa",
    "aria-pressed": n,
    "data-testid": "assistant-button"
  }, g = y(
    "lw:border lw:border-solid lw:bg-[rgba(9,193,174,0.08)] lw:hover:bg-[rgba(9,193,174,0.14)]",
    n ? "lw:border-[#09C1AE]" : "lw:border-[rgba(9,193,174,0.45)]"
  );
  if (e === "sidebar")
    return /* @__PURE__ */ E(
      "button",
      {
        ...f,
        "data-variant": "sidebar",
        className: y(
          "lw:flex lw:h-11 lw:w-full lw:cursor-pointer lw:items-center lw:justify-start lw:gap-2.5 lw:rounded-lg lw:px-3 lw:outline-none lw:transition-[border-color,background-color] lw:duration-150 lw:focus-visible:outline-2 lw:focus-visible:outline-solid lw:focus-visible:outline-[#09C1AE] lw:focus-visible:outline-offset-2",
          g,
          l && On
        ),
        style: { color: s },
        children: [
          l && /* @__PURE__ */ o(In, { radiusPx: 8, cover: "var(--lw-bg-surface)" }),
          /* @__PURE__ */ o(Jt, { size: 20 }),
          /* @__PURE__ */ o("span", { className: "lw:grow lw:text-left lw:text-sm lw:font-semibold lw:text-inherit", children: "Ask Nexa" }),
          r && /* @__PURE__ */ o(Qa, { keys: r })
        ]
      }
    );
  if (e === "sidebar-icon" && u && Io) {
    const m = Er(Ur, d, "clear");
    return /* @__PURE__ */ o(je, { title: p, side: "right", arrow: !0, ...a, children: /* @__PURE__ */ E(
      "button",
      {
        ...f,
        "data-variant": "sidebar-icon",
        "data-rail-keep-fill": !0,
        className: y(
          "lw:inline-flex lw:cursor-pointer lw:items-center lw:justify-center lw:outline-none lw:hover:[transform:scale(1.07)] lw:active:[transform:scale(0.92)] lw:active:[transition-duration:90ms]! lw:motion-reduce:hover:[transform:none] lw:motion-reduce:active:[transform:none] lw:[&_svg]:[filter:drop-shadow(0_1px_1.5px_rgba(0,0,0,0.25))]",
          $e,
          l && On
        ),
        style: {
          width: Ce,
          height: Ce,
          borderRadius: et,
          background: m.background,
          boxShadow: n ? `${m.boxShadow}, 0 0 0 3px rgba(13, 212, 191, 0.3), 0 0 18px rgba(13, 212, 191, 0.45)` : m.boxShadow,
          backdropFilter: "blur(8px) saturate(180%)",
          WebkitBackdropFilter: "blur(8px) saturate(180%)",
          transition: `transform ${Yl.duration}ms ${Yl.easing}, box-shadow 200ms ease`
        },
        children: [
          l && // The same light over a glass interior (tint over an
          // opaque base, so the beam stays a 2px line)
          /* @__PURE__ */ o(
            In,
            {
              radiusPx: et,
              cover: `${m.background}, ${d ? "#16202c" : "#f2fbfa"}`
            }
          ),
          /* @__PURE__ */ o(Jt, { size: 18 })
        ]
      }
    ) });
  }
  if (e === "sidebar-icon") {
    const m = u ? Ce : 44;
    return /* @__PURE__ */ o(je, { title: p, side: "right", arrow: !0, ...a, children: /* @__PURE__ */ E(
      "button",
      {
        ...f,
        "data-variant": "sidebar-icon",
        "data-rail-keep-fill": u || void 0,
        className: y(
          "lw:inline-flex lw:shrink-0 lw:cursor-pointer lw:items-center lw:justify-center lw:rounded-lg lw:outline-none lw:transition-colors lw:focus-visible:ring-2 lw:focus-visible:ring-ring",
          g,
          l && On
        ),
        style: { width: m, height: m },
        children: [
          l && /* @__PURE__ */ o(In, { radiusPx: 8, cover: "var(--lw-bg-surface)" }),
          /* @__PURE__ */ o(Jt, { size: u ? 18 : 20 })
        ]
      }
    ) });
  }
  return /* @__PURE__ */ o(je, { title: p, side: "left", children: /* @__PURE__ */ E(
    "button",
    {
      ...f,
      "data-variant": "floating",
      className: y(
        "lw:fixed lw:bottom-6 lw:z-[1150] lw:inline-flex lw:size-[52px] lw:cursor-pointer lw:items-center lw:justify-center lw:rounded-2xl lw:bg-surface lw:p-0 lw:outline-offset-2 lw:transition-[right,box-shadow] lw:duration-[225ms] lw:ease-in-out lw:[box-shadow:var(--lw-shadow-rest)] lw:hover:[box-shadow:var(--lw-shadow-hover)] lw:focus-visible:outline-2 lw:focus-visible:outline-solid lw:focus-visible:outline-[#09C1AE]",
        n ? "lw:outline-2 lw:outline-solid lw:outline-[#09C1AE]" : "lw:outline-none",
        l && On
      ),
      style: {
        right: 24 + i,
        "--lw-shadow-rest": fi,
        "--lw-shadow-hover": mi
      },
      children: [
        l && /* @__PURE__ */ o(In, { radiusPx: 16, cover: "var(--lw-bg-surface)" }),
        /* @__PURE__ */ o("span", { className: "lw:flex lw:items-center", children: /* @__PURE__ */ o(Jt, { size: 26 }) })
      ]
    }
  ) });
}, ql = pi, hi = Ws(
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
), Zn = c.forwardRef(
  ({
    className: e,
    variant: t,
    size: n,
    asChild: l = !1,
    type: r = "button",
    ...s
  }, i) => {
    const a = l ? Gs.Root : "button";
    return /* @__PURE__ */ o(
      a,
      {
        ref: i,
        "data-slot": "button",
        type: l ? void 0 : r,
        className: y(hi({ variant: t, size: n }), e),
        ...s
      }
    );
  }
);
Zn.displayName = "Button";
const gi = ({
  title: e = "",
  message: t = "",
  buttonText: n = "",
  onButtonClick: l,
  show: r = !0
}) => r ? /* @__PURE__ */ E("div", { className: "lw:m-3 lw:shrink-0 lw:rounded-lg lw:border lw:border-solid lw:border-border lw:bg-card lw:p-4 lw:text-card-foreground", children: [
  /* @__PURE__ */ o($s, { className: "lw:size-5", "aria-hidden": !0 }),
  /* @__PURE__ */ o("p", { className: "lw:mb-[0.35em] lw:text-sm lw:font-semibold", children: e }),
  /* @__PURE__ */ o("p", { className: "lw:mb-4 lw:text-sm lw:text-muted-foreground", children: t }),
  /* @__PURE__ */ o(Zn, { size: "sm", className: "lw:w-full", onClick: l, children: n })
] }) : null, $n = gi, Ro = 225, Kt = 195, To = "cubic-bezier(0, 0, 0.2, 1)", Ao = "cubic-bezier(0.4, 0, 0.6, 1)", jt = 24, bi = 720, xi = 1140, vi = 1250, yi = ({
  open: e,
  children: t,
  variant: n,
  position: l,
  width: r,
  sidebarWidthPx: s,
  bottomOffsetPx: i,
  fullScreen: a,
  fullScreenBottom: u = "0px",
  onClose: d
}) => {
  const p = c.useRef(!1);
  c.useEffect(() => {
    const N = requestAnimationFrame(() => {
      p.current = !0;
    });
    return () => cancelAnimationFrame(N);
  }, []);
  const [f, g] = c.useState(e), [m, h] = c.useState(e);
  c.useEffect(() => {
    if (!e) {
      h(!1);
      return;
    }
    g(!0);
    const N = requestAnimationFrame(() => h(!0));
    return () => cancelAnimationFrame(N);
  }, [e]), c.useEffect(() => {
    if (!e || !d)
      return;
    const N = (b) => {
      b.key === "Escape" && d();
    };
    return window.addEventListener("keydown", N), () => window.removeEventListener("keydown", N);
  }, [e, d]);
  const _ = n === "docked", S = jt + i;
  let v;
  if (a ? v = {
    top: 0,
    left: 0,
    right: 0,
    bottom: u,
    borderRadius: 0
  } : _ ? v = {
    top: 0,
    right: 0,
    bottom: 0,
    width: r,
    maxWidth: "100vw",
    borderRadius: 0,
    borderWidth: "0 0 0 1px"
  } : v = {
    bottom: S,
    ...l === "left" ? { left: s + jt } : { right: jt },
    width: r,
    maxWidth: `calc(100vw - ${jt * 2}px)`,
    height: `min(${bi}px, calc(100vh - ${S + jt}px))`,
    borderRadius: "12px"
  }, !e && !f)
    return null;
  const x = e && m, R = !p.current, I = _ ? {
    transform: x ? "none" : "translateX(100%)",
    transition: e ? `transform ${R ? 0 : Ro}ms ${To}` : `transform ${Kt}ms ${Ao}, visibility 0ms linear ${Kt}ms`
  } : {
    transform: x ? "none" : "scale(0.75, 0.5625)",
    opacity: x ? 1 : 0,
    transformOrigin: l === "left" ? "bottom left" : "bottom right",
    transition: e ? `opacity ${Ro}ms ${To}, transform ${Math.round(Ro * 0.666)}ms ${To}` : `opacity ${Kt}ms ${Ao}, transform ${Kt}ms ${Ao}, visibility 0ms linear ${Kt}ms`
  };
  return /* @__PURE__ */ o(
    "div",
    {
      role: _ ? "complementary" : "dialog",
      "aria-label": "Nexa chat",
      "aria-hidden": e ? void 0 : !0,
      "data-testid": "chat-panel",
      "data-variant": n,
      "data-lw-host": "",
      className: `lw:fixed lw:flex lw:flex-col lw:overflow-hidden lw:border lw:border-solid lw:border-border lw:bg-surface lw:text-foreground lw:shadow-popover ${br}`,
      style: {
        zIndex: _ ? xi : vi,
        visibility: e ? "visible" : "hidden",
        ...v,
        ...I
      },
      children: t
    }
  );
}, Ei = yi, wn = zn.Root, fn = zn.Anchor, Ni = "lw:rounded-md lw:border lw:border-solid lw:border-border lw:bg-popover lw:text-popover-foreground lw:shadow-popover lw:outline-none", $t = c.forwardRef(
  ({
    className: e,
    align: t = "start",
    sideOffset: n = 4,
    unstyled: l = !1,
    ...r
  }, s) => {
    const i = dn();
    return /* @__PURE__ */ o(zn.Portal, { children: /* @__PURE__ */ o(
      zn.Content,
      {
        ref: s,
        ...i,
        "data-slot": "popover-content",
        align: t,
        sideOffset: n,
        className: y(
          "lw:z-[1400] lw:outline-none",
          !l && y(
            Ni,
            "lw:p-3 lw:data-[state=open]:animate-in lw:data-[state=open]:fade-in-0 lw:data-[state=open]:zoom-in-95 lw:data-[state=closed]:animate-out lw:data-[state=closed]:fade-out-0 lw:data-[state=closed]:zoom-out-95"
          ),
          e
        ),
        ...r
      }
    ) });
  }
);
$t.displayName = "PopoverContent";
const Si = 180, Vl = 250, _i = "#01584F", Xr = "var(--lw-text-muted)", Ri = ({
  text: e,
  testId: t
}) => {
  const n = c.useRef(null), [l, r] = c.useState(!1), s = c.useCallback(() => {
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
  }, [s]), /* @__PURE__ */ o(
    je,
    {
      title: e,
      side: "right",
      arrow: !0,
      delayDuration: 400,
      disabled: !l,
      children: /* @__PURE__ */ o(
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
}, Ti = "lw:inline-flex lw:shrink-0 lw:items-center lw:justify-center lw:transition-[background-color,border-radius] lw:duration-150 lw:outline-none lw:focus-visible:ring-2 lw:focus-visible:ring-ring lw:disabled:cursor-default lw:disabled:opacity-50 lw:[&_svg]:size-6", Kr = (e, t, n, l) => {
  const r = e ? 48 : 44, s = e ? Xr : t, i = e ? _i : t, a = y(
    Ti,
    l ? "lw:h-auto lw:w-full lw:max-w-full lw:flex-col lw:rounded-sm lw:px-2 lw:py-1" : n ? "lw:rounded-sm" : "lw:rounded-full lw:hover:rounded-sm",
    !n && "lw:hover:bg-accent"
  ), u = {
    color: n ? "#ffffff" : s,
    backgroundColor: n ? i : void 0,
    ...l ? { minWidth: r, minHeight: r } : { width: r, height: r }
  };
  return { activeBg: i, className: a, style: u };
}, jr = ({ link: e }) => /* @__PURE__ */ E("span", { className: "lw:flex lw:w-full lw:flex-col lw:items-center lw:gap-2", children: [
  /* @__PURE__ */ o("span", { className: "lw:flex lw:items-center lw:justify-center lw:text-inherit", children: e.icon }),
  /* @__PURE__ */ o(
    Ri,
    {
      text: e.text,
      testId: `rail-item-caption-${e.text}`
    }
  )
] }), Yr = (e, t, n) => n ? e : /* @__PURE__ */ o(Dn, { title: t, side: "right", arrow: !0, children: e }), Ai = (e) => {
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
  const l = n.indexOf(document.activeElement), r = e.key === "Home" ? 0 : e.key === "End" ? n.length - 1 : e.key === "ArrowDown" ? (l + 1) % n.length : (l - 1 + n.length) % n.length;
  n[r].focus();
}, Ci = ({
  link: e,
  activePath: t,
  onLinkClick: n,
  accentColor: l,
  isSecondary: r,
  surfaceBackgroundColor: s,
  railShowTitles: i
}) => {
  const [a, u] = c.useState(!1), d = c.useRef(
    null
  ), p = c.useRef(null), f = c.useRef(null), g = c.useRef(!1), m = c.useRef(!1), h = c.useId(), _ = () => {
    d.current && (clearTimeout(d.current), d.current = null);
  }, S = () => {
    _(), d.current = setTimeout(() => {
      u(!1), d.current = null;
    }, Si);
  }, v = () => {
    _(), u(!0);
  };
  c.useEffect(() => {
    if (!a)
      return;
    const k = (F) => {
      var L;
      F.key === "Escape" && (u(!1), (L = f.current) == null || L.focus());
    };
    return document.addEventListener("keydown", k), () => document.removeEventListener("keydown", k);
  }, [a]), c.useEffect(() => {
    if (!a || !m.current)
      return;
    const k = globalThis.requestAnimationFrame(() => {
      var L;
      const F = (L = p.current) == null ? void 0 : L.querySelector(
        '[role="menuitem"]'
      );
      F == null || F.focus(), m.current = !1;
    });
    return () => cancelAnimationFrame(k);
  }, [a]);
  const x = rt(e, t), {
    activeBg: R,
    className: I,
    style: N
  } = Kr(r, l, x, i), b = {
    "aria-label": e.text,
    onFocus: () => {
      g.current || v();
    },
    onBlur: (k) => {
      var L;
      const F = k.relatedTarget;
      F && ((L = p.current) != null && L.contains(F)) || S();
    },
    onKeyDown: (k) => {
      k.key === "ArrowDown" && (k.preventDefault(), m.current = !0, v());
    },
    onClick: (k) => {
      k.stopPropagation(), !(e.path && !Ot(k)) && (k.preventDefault(), e.path && (n == null || n(e.path)));
    },
    "aria-haspopup": "menu",
    "aria-expanded": a,
    "aria-controls": a ? h : void 0,
    "data-testid": `rail-submenu-trigger-${e.text}`,
    className: I,
    style: N
  }, T = i ? /* @__PURE__ */ o(jr, { link: e }) : e.icon, C = e.path ? /* @__PURE__ */ o(
    "a",
    {
      ref: f,
      href: e.path,
      ...b,
      children: T
    }
  ) : /* @__PURE__ */ o(
    "button",
    {
      ref: f,
      type: "button",
      ...b,
      children: T
    }
  );
  return /* @__PURE__ */ E(wn, { open: a, children: [
    /* @__PURE__ */ o("div", { className: "lw:flex lw:w-full lw:justify-center", children: /* @__PURE__ */ o(fn, { asChild: !0, children: /* @__PURE__ */ o(
      "div",
      {
        "data-testid": `rail-submenu-anchor-${e.text}`,
        className: "lw:inline-flex lw:max-w-full",
        onMouseEnter: () => {
          g.current = !0, v();
        },
        onMouseLeave: () => {
          g.current = !1, S();
        },
        children: Yr(C, e.text, i)
      }
    ) }) }),
    /* @__PURE__ */ o(
      $t,
      {
        ref: p,
        unstyled: !0,
        side: "right",
        align: "start",
        sideOffset: 8,
        onOpenAutoFocus: (k) => k.preventDefault(),
        onCloseAutoFocus: (k) => k.preventDefault(),
        onInteractOutside: (k) => {
          var F;
          if ((F = f.current) != null && F.contains(k.target)) {
            k.preventDefault();
            return;
          }
          u(!1);
        },
        onEscapeKeyDown: () => u(!1),
        onMouseEnter: _,
        onMouseLeave: S,
        "data-testid": `rail-submenu-panel-${e.text}`,
        className: "lw:z-[1300] lw:min-w-0 lw:rounded-sm lw:border lw:border-solid lw:border-border lw:bg-popover lw:py-1 lw:text-popover-foreground lw:shadow-popover",
        style: {
          backgroundColor: s,
          maxWidth: Vl
        },
        children: /* @__PURE__ */ o(
          "div",
          {
            id: h,
            role: "menu",
            onKeyDown: Ai,
            style: { maxWidth: Vl },
            children: K(e.subitems, e.text, 0)
          }
        )
      }
    )
  ] });
  function K(k, F, L) {
    return k.flatMap((G) => {
      const ee = St(F, G), B = 16 + L * 12;
      if (Tt(G))
        return [
          /* @__PURE__ */ o(
            "div",
            {
              role: "presentation",
              title: G.text,
              className: "lw:overflow-hidden lw:pr-4 lw:text-[0.7rem] lw:leading-[28px] lw:font-medium lw:tracking-[0.06em] lw:text-ellipsis lw:whitespace-nowrap lw:uppercase lw:text-muted-foreground",
              style: { paddingLeft: B },
              children: G.text
            },
            ee
          ),
          ...K(G.subitems, ee, L + 1)
        ];
      const A = Xe(G, t), $ = G.path ? "a" : "div";
      return [
        /* @__PURE__ */ E(
          $,
          {
            role: "menuitem",
            tabIndex: -1,
            title: G.text,
            "aria-disabled": G.path ? void 0 : !0,
            "data-selected": A ? "true" : void 0,
            ...G.path ? { href: G.path } : {},
            onClick: (O) => {
              G.path && Ot(O) && (O.preventDefault(), n == null || n(G.path), u(!1));
            },
            className: y(
              "lw:mx-1 lw:my-[1px] lw:flex lw:min-h-8 lw:max-w-full lw:cursor-pointer lw:items-center lw:overflow-hidden lw:rounded-sm lw:pr-4 lw:text-sm lw:outline-none lw:select-none lw:[&_svg]:size-5",
              !A && "lw:hover:bg-accent lw:focus-visible:bg-selected",
              !G.path && "lw:pointer-events-none lw:opacity-40"
            ),
            style: {
              paddingLeft: B,
              color: A ? "#ffffff" : r ? Xr : l,
              backgroundColor: A ? R : void 0
            },
            children: [
              G.icon ? /* @__PURE__ */ o("span", { className: "lw:inline-flex lw:min-w-9 lw:shrink-0 lw:text-inherit", children: G.icon }) : null,
              /* @__PURE__ */ o("span", { className: "lw:min-w-0 lw:flex-auto lw:overflow-hidden lw:text-ellipsis lw:whitespace-nowrap", children: G.text })
            ]
          },
          ee
        )
      ];
    });
  }
}, Oi = ({
  link: e,
  activePath: t,
  onLinkClick: n,
  accentColor: l,
  isSecondary: r,
  railShowTitles: s
}) => {
  const i = !!(e.path && t === e.path), { className: a, style: u } = Kr(
    r,
    l,
    i,
    s
  ), d = (f) => {
    f.stopPropagation(), !(e.path && !Ot(f)) && (f.preventDefault(), e.path && (n == null || n(e.path)));
  }, p = s ? /* @__PURE__ */ o(jr, { link: e }) : e.icon;
  return Yr(
    e.path ? /* @__PURE__ */ o(
      "a",
      {
        href: e.path,
        "aria-label": e.text,
        onClick: d,
        className: a,
        style: u,
        children: p
      }
    ) : /* @__PURE__ */ o(
      "button",
      {
        type: "button",
        "aria-label": e.text,
        onClick: d,
        disabled: !0,
        className: a,
        style: u,
        children: p
      }
    ),
    e.text,
    s
  );
}, Ii = () => /* @__PURE__ */ o("div", { className: "lw:flex lw:w-full lw:justify-center", children: /* @__PURE__ */ o(sn, { className: "lw:w-[60%]" }) }), $i = () => /* @__PURE__ */ o("div", { className: "lw:my-4 lw:flex lw:w-full lw:justify-center", children: /* @__PURE__ */ o(sn, { className: "lw:w-[60%]" }) }), Zl = (e, t) => e.map((n, l) => /* @__PURE__ */ E(c.Fragment, { children: [
  t(n, l),
  l < e.length - 1 ? /* @__PURE__ */ o(Ii, {}) : null
] }, l)), ki = ({
  mainLinks: e,
  secondaryLinks: t = [],
  activePath: n,
  onLinkClick: l,
  accentColor: r = "#01584f",
  surfaceBackgroundColor: s,
  railShowTitles: i = !1
}) => {
  const a = (d, p) => Tt(d) ? /* @__PURE__ */ o(
    Ci,
    {
      link: d,
      activePath: n,
      onLinkClick: l,
      accentColor: r,
      isSecondary: p,
      surfaceBackgroundColor: s,
      railShowTitles: i
    }
  ) : /* @__PURE__ */ o(
    Oi,
    {
      link: d,
      activePath: n,
      onLinkClick: l,
      accentColor: r,
      isSecondary: p,
      railShowTitles: i
    }
  ), u = i ? "lw:gap-2.5" : "lw:gap-2";
  return /* @__PURE__ */ E(
    "div",
    {
      className: y(
        "lw:box-border lw:flex lw:w-full lw:grow lw:flex-col lw:items-center lw:justify-start lw:pt-4",
        u
      ),
      children: [
        Zl(e, (d) => a(d, !1)),
        t.length > 0 ? /* @__PURE__ */ E(ve, { children: [
          /* @__PURE__ */ o($i, {}),
          /* @__PURE__ */ o("div", { className: "lw:mt-auto lw:pb-4", children: /* @__PURE__ */ o(
            "div",
            {
              className: y(
                "lw:flex lw:flex-col lw:items-center",
                u
              ),
              children: Zl(
                t,
                (d) => a(d, !0)
              )
            }
          ) })
        ] }) : null
      ]
    }
  );
}, Li = ki, Di = Ct.Root, Mi = Ct.Trigger, Pi = "lw:relative lw:flex lw:min-h-8 lw:cursor-pointer lw:items-center lw:gap-2 lw:rounded-sm lw:px-2 lw:py-1 lw:text-sm lw:outline-none lw:select-none lw:focus:bg-accent lw:data-[highlighted]:bg-accent lw:data-[disabled]:pointer-events-none lw:data-[disabled]:opacity-50 lw:data-[variant=destructive]:text-destructive lw:[&_svg]:pointer-events-none lw:[&_svg]:shrink-0 lw:[&_svg:not([class*='size-'])]:size-4", Fi = "lw:z-[1400] lw:max-h-(--radix-dropdown-menu-content-available-height) lw:min-w-40 lw:overflow-x-hidden lw:overflow-y-auto lw:rounded-md lw:border lw:border-solid lw:border-border lw:bg-popover lw:p-1 lw:text-popover-foreground lw:shadow-popover lw:data-[state=open]:animate-in lw:data-[state=open]:fade-in-0 lw:data-[state=open]:zoom-in-95 lw:data-[state=closed]:animate-out lw:data-[state=closed]:fade-out-0 lw:data-[state=closed]:zoom-out-95", qr = c.forwardRef(
  ({
    className: e,
    sideOffset: t = 4,
    align: n = "start",
    unstyled: l = !1,
    ...r
  }, s) => {
    const i = dn();
    return /* @__PURE__ */ o(Ct.Portal, { children: /* @__PURE__ */ o(
      Ct.Content,
      {
        ref: s,
        ...i,
        "data-slot": "dropdown-menu-content",
        sideOffset: t,
        align: n,
        className: y(
          l ? "lw:z-[1400] lw:outline-none" : Fi,
          e
        ),
        ...r
      }
    ) });
  }
);
qr.displayName = "DropdownMenuContent";
const Qt = c.forwardRef(({ className: e, variant: t = "default", ...n }, l) => /* @__PURE__ */ o(
  Ct.Item,
  {
    ref: l,
    "data-slot": "dropdown-menu-item",
    "data-variant": t,
    className: y(Pi, e),
    ...n
  }
));
Qt.displayName = "DropdownMenuItem";
const Bn = c.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ o(
  Ct.Separator,
  {
    ref: n,
    "data-slot": "dropdown-menu-separator",
    className: y("lw:-mx-1 lw:my-1 lw:h-px lw:bg-border", e),
    ...t
  }
));
Bn.displayName = "DropdownMenuSeparator";
const Bi = (e) => e ? hr(e) : "USER", zi = (e) => e.split(/\s+/).filter(Boolean).slice(0, 2).map((t) => t.charAt(0).toUpperCase()).join(""), Jl = "lw:max-w-full lw:overflow-hidden lw:text-ellipsis lw:whitespace-nowrap", Po = ({ count: e }) => e ? /* @__PURE__ */ o("span", { className: "lw:h-5 lw:min-w-[22px] lw:rounded-[10px] lw:bg-destructive-fill lw:px-1.5 lw:text-center lw:text-xs lw:leading-5 lw:font-semibold lw:text-white", children: e > 99 ? "99+" : e }) : null, tl = ({ name: e, avatar: t, color: n, size: l = 36 }) => {
  const [r, s] = c.useState(!1);
  c.useEffect(() => s(!1), [t]);
  const i = !!t && !r;
  return /* @__PURE__ */ o(
    "span",
    {
      className: "lw:relative lw:inline-flex lw:shrink-0 lw:items-center lw:justify-center lw:overflow-hidden lw:rounded-full lw:leading-none lw:font-semibold lw:text-white lw:select-none",
      style: {
        width: l,
        height: l,
        fontSize: l * 0.36,
        backgroundColor: i ? void 0 : n
      },
      children: i ? /* @__PURE__ */ o(
        "img",
        {
          src: t,
          alt: e,
          onError: () => s(!0),
          className: "lw:size-full lw:object-cover"
        }
      ) : zi(e)
    }
  );
}, Vr = ({ name: e, role: t, avatar: n, avatarColor: l, showText: r }) => /* @__PURE__ */ E(ve, { children: [
  /* @__PURE__ */ o(tl, { name: e, avatar: n, color: l }),
  r && /* @__PURE__ */ E("span", { className: "lw:flex lw:min-w-0 lw:grow lw:flex-col lw:items-start lw:text-left", children: [
    /* @__PURE__ */ o(
      "span",
      {
        className: y(
          Jl,
          "lw:text-sm lw:leading-[1.43] lw:font-semibold"
        ),
        children: e
      }
    ),
    /* @__PURE__ */ o(
      "span",
      {
        className: y(
          Jl,
          "lw:text-xs lw:leading-[1.66] lw:opacity-80"
        ),
        children: Bi(t)
      }
    )
  ] })
] }), Hi = {
  above: { side: "top", align: "start", sideOffset: 8 },
  "above-end": { side: "top", align: "end", sideOffset: 8 },
  beside: { side: "right", align: "end", sideOffset: 12 }
}, kn = "lw:mx-1 lw:min-h-9 lw:gap-0 lw:rounded-md lw:px-4 lw:text-sm lw:[&_svg:not([class*='size-'])]:size-5", Ln = "lw:inline-flex lw:min-w-9 lw:shrink-0 lw:items-center lw:text-muted-foreground", Gi = ({
  anchorEl: e,
  onClose: t,
  placement: n,
  width: l,
  contentProps: r,
  openedByHover: s = !1,
  avatarColor: i,
  showNotifications: a,
  notificationCount: u,
  onNotificationsClick: d,
  userName: p = "User",
  userRole: f,
  userAvatar: g,
  menuItems: m = [],
  showSettings: h,
  onSettingsClick: _,
  showThemeToggler: S,
  theme: v,
  onThemeToggle: x,
  onLogout: R
}) => {
  const I = (k) => () => {
    t(), k == null || k();
  }, N = !!e, b = N ? e.getBoundingClientRect() : null, T = c.useRef(null);
  c.useEffect(() => {
    N && typeof document < "u" && (T.current = document.activeElement);
  }, [N]);
  const C = Hi[n], K = (k, F) => {
    const L = v === k;
    return /* @__PURE__ */ o(
      "button",
      {
        type: "button",
        "aria-pressed": L,
        disabled: !x,
        onClick: () => !L && (x == null ? void 0 : x()),
        className: y(
          "lw:h-8 lw:flex-1 lw:cursor-pointer lw:rounded-md lw:text-sm lw:font-medium lw:outline-none lw:transition-colors lw:focus-visible:ring-2 lw:focus-visible:ring-ring lw:disabled:cursor-default lw:disabled:opacity-50",
          L ? "lw:bg-surface lw:text-foreground lw:shadow-[0_1px_3px_rgba(0,0,0,0.12),0_1px_1px_rgba(0,0,0,0.08)]" : "lw:text-muted-foreground lw:hover:text-foreground"
        ),
        children: F
      }
    );
  };
  return /* @__PURE__ */ E(ve, { children: [
    N && !s && typeof document < "u" ? fr(
      /* @__PURE__ */ o(
        "div",
        {
          "aria-hidden": "true",
          "data-slot": "menu-backdrop",
          className: "lw:fixed lw:inset-0 lw:z-[1399]"
        }
      ),
      document.body
    ) : null,
    /* @__PURE__ */ E(
      Di,
      {
        open: N,
        onOpenChange: (k) => !k && t(),
        modal: !1,
        children: [
          /* @__PURE__ */ o(Mi, { asChild: !0, children: /* @__PURE__ */ o(
            "span",
            {
              "aria-hidden": "true",
              tabIndex: -1,
              className: "lw:pointer-events-none lw:fixed",
              style: {
                left: (b == null ? void 0 : b.left) ?? 0,
                top: (b == null ? void 0 : b.top) ?? 0,
                width: (b == null ? void 0 : b.width) ?? 0,
                height: (b == null ? void 0 : b.height) ?? 0
              }
            }
          ) }),
          /* @__PURE__ */ E(
            qr,
            {
              ...r,
              side: C.side,
              align: C.align,
              sideOffset: C.sideOffset,
              collisionPadding: 8,
              onOpenAutoFocus: (k) => {
                s && k.preventDefault();
              },
              onCloseAutoFocus: (k) => {
                var F, L;
                k.preventDefault(), s || (L = (F = T.current) == null ? void 0 : F.focus) == null || L.call(F);
              },
              className: "lw:min-w-0 lw:rounded-[10px] lw:px-0 lw:py-1 lw:shadow-[0_8px_24px_rgba(0,0,0,0.12)]",
              style: {
                width: l ?? 240,
                maxWidth: "calc(100vw - 16px)"
              },
              children: [
                /* @__PURE__ */ o("div", { className: "lw:flex lw:flex-row lw:items-center lw:gap-2.5 lw:px-3 lw:py-2", children: /* @__PURE__ */ o(
                  Vr,
                  {
                    name: p,
                    role: f,
                    avatar: g,
                    avatarColor: i,
                    showText: !0
                  }
                ) }),
                /* @__PURE__ */ o(Bn, { className: "lw:mx-0" }),
                a && /* @__PURE__ */ E(
                  Qt,
                  {
                    className: kn,
                    onSelect: I(d),
                    children: [
                      /* @__PURE__ */ o("span", { className: Ln, children: /* @__PURE__ */ o(dr, {}) }),
                      /* @__PURE__ */ o("span", { className: "lw:flex-auto", children: "Notifications" }),
                      /* @__PURE__ */ o(Po, { count: u })
                    ]
                  }
                ),
                m.map((k) => /* @__PURE__ */ E(
                  Qt,
                  {
                    className: kn,
                    onSelect: I(k.onClick),
                    children: [
                      /* @__PURE__ */ o("span", { className: Ln, children: k.icon }),
                      /* @__PURE__ */ o("span", { className: "lw:flex-auto", children: k.label }),
                      /* @__PURE__ */ o(Po, { count: k.badge })
                    ]
                  },
                  k.key
                )),
                h && /* @__PURE__ */ E(
                  Qt,
                  {
                    className: kn,
                    onSelect: I(_),
                    children: [
                      /* @__PURE__ */ o("span", { className: Ln, children: /* @__PURE__ */ o(ks, {}) }),
                      /* @__PURE__ */ o("span", { className: "lw:flex-auto", children: "Settings" })
                    ]
                  }
                ),
                S && /* @__PURE__ */ E(ve, { children: [
                  /* @__PURE__ */ o(Bn, { className: "lw:mx-0" }),
                  /* @__PURE__ */ E("div", { className: "lw:px-3 lw:py-2", children: [
                    /* @__PURE__ */ o("span", { className: "lw:mb-1.5 lw:block lw:text-xs lw:leading-[1.5] lw:font-normal lw:tracking-[0.08em] lw:text-muted-foreground lw:uppercase", children: "— Theme" }),
                    /* @__PURE__ */ E(
                      "div",
                      {
                        role: "group",
                        "aria-label": "Theme",
                        className: "lw:flex lw:gap-1 lw:rounded-lg lw:bg-accent lw:p-1",
                        children: [
                          K("light", "Light"),
                          K("dark", "Dark")
                        ]
                      }
                    )
                  ] })
                ] }),
                /* @__PURE__ */ o(Bn, { className: "lw:mx-0" }),
                /* @__PURE__ */ E(
                  Qt,
                  {
                    className: y(
                      kn,
                      // The dark palette's error colors are too dim on the dark menu
                      v === "dark" ? "lw:text-[hsl(0,90%,65%)]" : "lw:text-destructive"
                    ),
                    onSelect: I(R),
                    children: [
                      /* @__PURE__ */ o("span", { className: y(Ln, "lw:text-inherit"), children: /* @__PURE__ */ o(ur, { className: "lw:size-5 lw:text-current" }) }),
                      /* @__PURE__ */ o("span", { className: "lw:flex-auto", children: "Log out" })
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
}, Zr = Gi, Jr = 64, Wi = 2, Yt = ({
  label: e,
  icon: t,
  onClick: n,
  active: l,
  color: r,
  activeColor: s,
  activeBackground: i,
  ariaLabel: a,
  haspopup: u,
  isPage: d = !1,
  href: p,
  testId: f
}) => {
  const g = y(
    "lw:flex lw:h-full lw:min-w-0 lw:flex-[1_1_0] lw:cursor-pointer lw:flex-col lw:items-center lw:justify-center lw:gap-0.5 lw:border-0 lw:bg-transparent lw:p-0 lw:no-underline lw:outline-none lw:select-none",
    "lw:focus-visible:outline-2 lw:focus-visible:outline-offset-[-4px] lw:focus-visible:outline-(--lw-item-active) lw:focus-visible:outline-solid"
  ), m = {
    color: l ? s : r,
    "--lw-item-active": s
  }, h = /* @__PURE__ */ E(ve, { children: [
    /* @__PURE__ */ o(
      "span",
      {
        className: "lw:flex lw:h-7 lw:min-w-12 lw:items-center lw:justify-center lw:rounded-[14px] lw:transition-colors lw:duration-150 lw:[&>svg]:size-6",
        style: {
          backgroundColor: l ? i : "transparent"
        },
        children: t
      }
    ),
    /* @__PURE__ */ o(
      "span",
      {
        className: y(
          "lw:text-[11px] lw:leading-[1.2] lw:text-inherit",
          l ? "lw:font-semibold" : "lw:font-medium"
        ),
        children: e
      }
    )
  ] }), _ = {
    onClick: n,
    "aria-label": a ?? e,
    "aria-haspopup": u,
    "aria-expanded": u ? l : void 0,
    "aria-current": d && l ? "page" : void 0,
    "data-testid": f,
    className: g,
    style: m
  };
  return p ? /* @__PURE__ */ o("a", { href: p, ..._, children: h }) : /* @__PURE__ */ o("button", { type: "button", ..._, children: h });
}, Ui = ({
  onMenuClick: e,
  menuOpen: t,
  onSearchClick: n,
  searchOpen: l,
  showAssistant: r,
  assistantLabel: s = "Nexa",
  onAssistantClick: i,
  assistantActive: a,
  showProfile: u,
  background: d,
  color: p,
  activeColor: f,
  activeBackground: g,
  pinnedLinks: m = [],
  activePath: h,
  onLinkClick: _,
  ...S
}) => {
  const v = m.filter((C) => C.path).slice(0, Wi), [x, R] = c.useState(
    null
  ), { userName: I = "User", userAvatar: N, avatarColor: b } = S, T = { color: p, activeColor: f, activeBackground: g };
  return /* @__PURE__ */ E(
    "nav",
    {
      "aria-label": "Mobile navigation",
      "data-testid": "mobile-bottom-nav",
      className: "lw:fixed lw:right-0 lw:bottom-0 lw:left-0 lw:z-[1199] lw:flex lw:items-stretch lw:border-t lw:border-solid lw:border-border lw:pb-[env(safe-area-inset-bottom,0px)]",
      style: {
        height: `calc(${Jr}px + env(safe-area-inset-bottom, 0px))`,
        backgroundColor: d
      },
      children: [
        e && /* @__PURE__ */ o(
          Yt,
          {
            label: "Menu",
            icon: /* @__PURE__ */ o(wr, {}),
            onClick: e,
            active: t,
            haspopup: "dialog",
            testId: "mobile-nav-menu",
            ...T
          }
        ),
        v.map((C) => /* @__PURE__ */ o(
          Yt,
          {
            label: C.text,
            icon: C.icon,
            href: C.path,
            onClick: (K) => {
              Ot(K) && (K.preventDefault(), _ == null || _(C.path));
            },
            active: rt(C, h),
            isPage: !0,
            testId: `mobile-nav-link-${C.text}`,
            ...T
          },
          C.path
        )),
        r && /* @__PURE__ */ o(
          Yt,
          {
            label: s,
            ariaLabel: `Ask ${s}`,
            icon: /* @__PURE__ */ o(
              "span",
              {
                className: "lw:flex lw:h-7 lw:w-10 lw:items-center lw:justify-center lw:rounded-lg lw:border lw:border-solid lw:bg-[rgba(9,193,174,0.1)]",
                style: {
                  borderColor: a ? "#09C1AE" : "rgba(9, 193, 174, 0.45)"
                },
                children: /* @__PURE__ */ o(Jt, { size: 18 })
              }
            ),
            onClick: i,
            active: a,
            testId: "mobile-nav-nexa",
            ...T
          }
        ),
        n && /* @__PURE__ */ o(
          Yt,
          {
            label: "Search",
            icon: /* @__PURE__ */ o(Ho, {}),
            onClick: n,
            active: l,
            haspopup: "dialog",
            testId: "mobile-nav-search",
            ...T
          }
        ),
        u && /* @__PURE__ */ E(ve, { children: [
          /* @__PURE__ */ o(
            Yt,
            {
              label: "Account",
              ariaLabel: `Account menu for ${I}`,
              icon: /* @__PURE__ */ o(
                tl,
                {
                  name: I,
                  avatar: N,
                  color: b,
                  size: 26
                }
              ),
              onClick: (C) => R(C.currentTarget),
              active: !!x,
              haspopup: "menu",
              testId: "mobile-nav-account",
              ...T
            }
          ),
          /* @__PURE__ */ o(
            Zr,
            {
              anchorEl: x,
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
}, Xi = Ui, Fo = Vt.Root, Ki = {
  right: "lw:inset-y-0 lw:right-0 lw:h-full lw:border-l lw:data-[state=open]:slide-in-from-right lw:data-[state=closed]:slide-out-to-right",
  left: "lw:inset-y-0 lw:left-0 lw:h-full lw:border-r lw:data-[state=open]:slide-in-from-left lw:data-[state=closed]:slide-out-to-left",
  top: "lw:inset-x-0 lw:top-0 lw:h-auto lw:border-b lw:data-[state=open]:slide-in-from-top lw:data-[state=closed]:slide-out-to-top",
  bottom: "lw:inset-x-0 lw:bottom-0 lw:h-auto lw:border-t lw:data-[state=open]:slide-in-from-bottom lw:data-[state=closed]:slide-out-to-bottom"
}, Wn = c.forwardRef(
  ({
    className: e,
    children: t,
    side: n = "right",
    overlay: l = !0,
    overlayClassName: r,
    srTitle: s,
    ...i
  }, a) => {
    const u = dn();
    return /* @__PURE__ */ E(Vt.Portal, { children: [
      l ? /* @__PURE__ */ o(
        Vt.Overlay,
        {
          ...u,
          "data-slot": "sheet-overlay",
          "data-invisible": l === "invisible" ? "true" : void 0,
          className: y(
            "lw:fixed lw:inset-0 lw:z-[1200] lw:data-[state=open]:animate-in lw:data-[state=open]:fade-in-0 lw:data-[state=closed]:animate-out lw:data-[state=closed]:fade-out-0",
            l === "invisible" ? "lw:bg-transparent" : "lw:bg-black/35",
            r
          )
        }
      ) : null,
      /* @__PURE__ */ E(
        Vt.Content,
        {
          ref: a,
          ...u,
          "data-slot": "sheet-content",
          "data-side": n,
          "aria-describedby": void 0,
          className: y(
            "lw:fixed lw:z-[1200] lw:flex lw:flex-col lw:border-solid lw:border-border lw:bg-popover lw:text-popover-foreground lw:shadow-popover lw:outline-none lw:transition lw:ease-in-out lw:data-[state=open]:animate-in lw:data-[state=open]:duration-200 lw:data-[state=closed]:animate-out lw:data-[state=closed]:duration-150",
            Ki[n],
            e
          ),
          ...i,
          children: [
            s ? /* @__PURE__ */ o(Vt.Title, { className: "lw:sr-only", children: s }) : null,
            t
          ]
        }
      )
    ] });
  }
);
Wn.displayName = "SheetContent";
const ji = ({
  open: e,
  onClose: t,
  search: n
}) => /* @__PURE__ */ o(Fo, { open: e, onOpenChange: (l) => !l && t(), children: /* @__PURE__ */ o(
  Wn,
  {
    side: "top",
    "aria-label": "Search",
    srTitle: "Search",
    onOpenAutoFocus: (l) => {
      var s;
      const r = (s = l.currentTarget) == null ? void 0 : s.querySelector(
        'input, textarea, [contenteditable="true"]'
      );
      r && (l.preventDefault(), r.focus());
    },
    className: "lw:rounded-b-xl lw:border-b-0 lw:p-4 lw:pt-[calc(16px+env(safe-area-inset-top,0px))]",
    children: /* @__PURE__ */ E(
      "div",
      {
        "data-testid": "mobile-search-sheet",
        className: "lw:flex lw:flex-row lw:items-center lw:gap-2",
        children: [
          /* @__PURE__ */ o("div", { "data-lw-host": "", className: "lw:min-w-0 lw:flex-auto", children: n }),
          /* @__PURE__ */ o(
            Zn,
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
) }), Yi = ji, qi = ({
  height: e,
  onMenuClick: t,
  appName: n,
  logo: l,
  onBrandClick: r,
  brandMenuOpen: s,
  background: i,
  color: a,
  brandColor: u = a,
  endContent: d
}) => /* @__PURE__ */ o(
  "header",
  {
    className: "lw:fixed lw:top-0 lw:right-0 lw:left-0 lw:z-[1100] lw:flex lw:flex-col lw:border-b lw:border-solid lw:border-border",
    style: { height: e, background: i, color: a },
    children: /* @__PURE__ */ E(
      "div",
      {
        className: "lw:flex lw:items-center lw:gap-2 lw:px-2",
        style: { minHeight: e },
        children: [
          t && /* @__PURE__ */ o(
            Zn,
            {
              variant: "bare",
              size: "none",
              "aria-label": "Open navigation menu",
              onClick: t,
              className: "lw:size-10 lw:rounded-full lw:text-inherit lw:hover:bg-black/5 lw:dark:hover:bg-white/10 lw:[&_svg:not([class*=size-])]:size-6",
              style: { color: a },
              children: /* @__PURE__ */ o(wr, {})
            }
          ),
          /* @__PURE__ */ o(
            Hn,
            {
              title: n,
              appName: n,
              logo: l,
              onClick: r,
              menuOpen: s,
              color: u,
              testId: "mobile-brand"
            }
          ),
          d ? /* @__PURE__ */ o("div", { className: "lw:ml-auto lw:flex lw:items-center", children: d }) : null
        ]
      }
    )
  }
), Vi = qi;
function Qr({
  count: e = 0,
  max: t = 99,
  dot: n = !1,
  showZero: l = !1,
  invisible: r,
  children: s,
  className: i,
  badgeClassName: a,
  badgeStyle: u,
  label: d
}) {
  const p = r ?? (!l && e <= 0);
  return /* @__PURE__ */ E(
    "span",
    {
      className: y(
        "lw:relative lw:inline-flex lw:shrink-0 lw:align-middle",
        i
      ),
      children: [
        s,
        /* @__PURE__ */ o(
          "span",
          {
            "data-slot": "badge",
            "data-dot": n ? "true" : void 0,
            "data-invisible": p ? "true" : "false",
            "aria-hidden": d ? void 0 : !0,
            "aria-label": d,
            className: y(
              "lw:pointer-events-none lw:absolute lw:top-0 lw:right-0 lw:z-[1] lw:flex lw:translate-x-1/2 lw:-translate-y-1/2 lw:items-center lw:justify-center lw:rounded-full lw:bg-destructive-fill lw:font-semibold lw:text-white lw:transition-transform lw:duration-200",
              n ? "lw:size-2" : "lw:h-5 lw:min-w-5 lw:px-1.5 lw:text-[0.75rem] lw:leading-none",
              p && "lw:scale-0",
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
const es = c.createContext(void 0), Zi = ({
  count: e,
  onClick: t,
  triggerProps: n,
  active: l,
  color: r,
  hoverColor: s,
  tooltipPlacement: i,
  testId: a
}) => {
  const u = Zo(), d = c.useContext(es), p = c.useContext(un), f = e ? `Notifications, ${e} unread` : "Notifications";
  return /* @__PURE__ */ o(
    je,
    {
      title: f,
      side: i,
      arrow: !0,
      ...u,
      disabled: l,
      children: /* @__PURE__ */ o(
        "button",
        {
          type: "button",
          onClick: t,
          ...n,
          "aria-label": f,
          "data-testid": a,
          className: y(
            "lw:inline-flex lw:shrink-0 lw:cursor-pointer lw:items-center lw:justify-center lw:rounded-lg lw:outline-none lw:transition-colors lw:hover:bg-(--lw-hover) lw:focus-visible:outline-2 lw:focus-visible:outline-solid lw:focus-visible:outline-(--lw-fg) lw:[&_svg]:size-6",
            !p && "lw:p-2"
          ),
          style: {
            color: r,
            "--lw-fg": r,
            "--lw-hover": s,
            ...p ? {
              width: Ce,
              height: Ce
            } : {}
          },
          children: /* @__PURE__ */ o(
            Qr,
            {
              count: e,
              max: 99,
              badgeClassName: "lw:h-4 lw:min-w-4 lw:px-1 lw:text-[10px]",
              children: d ?? /* @__PURE__ */ o(dr, {})
            }
          )
        }
      )
    }
  );
}, nl = Zi, Ql = 14, Ji = 18, Qi = "blur(12px) saturate(180%) brightness(1.04)", ec = (() => {
  var t;
  if (typeof navigator > "u")
    return !1;
  const e = (t = navigator.userAgentData) == null ? void 0 : t.brands;
  return !!(e != null && e.some(({ brand: n }) => /Chromium/.test(n)));
})(), tc = (e, t, n) => {
  const l = Math.min(0.45, n / e), r = Math.min(0.45, n / t), s = `<svg xmlns="http://www.w3.org/2000/svg" width="${e}" height="${t}"><defs><linearGradient id="x" x1="0" x2="1" y1="0" y2="0"><stop offset="0" stop-color="#ff0000"/><stop offset="${l}" stop-color="#800000"/><stop offset="${1 - l}" stop-color="#800000"/><stop offset="1" stop-color="#000000"/></linearGradient><linearGradient id="y" x1="0" x2="0" y1="0" y2="1"><stop offset="0" stop-color="#00ff00"/><stop offset="${r}" stop-color="#008000"/><stop offset="${1 - r}" stop-color="#008000"/><stop offset="1" stop-color="#000000"/></linearGradient></defs><rect width="100%" height="100%" fill="url(#x)"/><rect width="100%" height="100%" fill="url(#y)" style="mix-blend-mode:screen"/></svg>`;
  return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(s)}`;
}, nc = 140, er = 0.22, oc = 0.14, lc = (e, t, n) => {
  const l = c.useRef(n);
  l.current = n, c.useEffect(() => {
    if (!t || typeof document > "u" || typeof window.matchMedia == "function" && window.matchMedia("(prefers-reduced-transparency: reduce)").matches)
      return;
    const r = { x: 0, y: 0, i: 0 }, s = { x: 0, y: 0, i: 0 };
    let i = 0;
    const a = () => {
      var m;
      const g = e.current;
      g && (g.style.setProperty("--lx", `${s.x.toFixed(1)}px`), g.style.setProperty("--ly", `${s.y.toFixed(1)}px`), g.style.setProperty("--li", s.i.toFixed(3)), (m = l.current) == null || m.call(l, s.x, s.y, s.i));
    }, u = () => {
      s.x += (r.x - s.x) * er, s.y += (r.y - s.y) * er, s.i += (r.i - s.i) * oc;
      const g = Math.abs(r.x - s.x) < 0.3 && Math.abs(r.y - s.y) < 0.3 && Math.abs(r.i - s.i) < 3e-3;
      g && (s.x = r.x, s.y = r.y, s.i = r.i), a(), i = g ? 0 : requestAnimationFrame(u);
    }, d = () => {
      i || (i = requestAnimationFrame(u));
    }, p = (g) => {
      const m = e.current;
      if (g.pointerType === "touch" || !m)
        return;
      const h = m.getBoundingClientRect();
      if (!h.width || !h.height)
        return;
      r.x = (g.clientX - h.left) * m.offsetWidth / h.width, r.y = (g.clientY - h.top) * m.offsetHeight / h.height;
      const _ = Math.max(
        h.left - g.clientX,
        0,
        g.clientX - h.right
      ), S = Math.max(
        h.top - g.clientY,
        0,
        g.clientY - h.bottom
      );
      r.i = Math.max(0, 1 - Math.hypot(_, S) / nc), s.i < 0.01 && (s.x = r.x, s.y = r.y), d();
    }, f = () => {
      r.i = 0, d();
    };
    return document.addEventListener("pointermove", p, { passive: !0 }), document.documentElement.addEventListener("mouseleave", f), () => {
      cancelAnimationFrame(i), document.removeEventListener("pointermove", p), document.documentElement.removeEventListener("mouseleave", f);
    };
  }, [e, t]);
}, ts = c.forwardRef(
  ({
    isDark: e,
    solid: t,
    className: n,
    style: l,
    "data-testid": r,
    refract: s = !0,
    light: i = !0,
    onLight: a
  }, u) => {
    const d = c.useRef(null), p = s && Io;
    lc(d, i && Io, a);
    const f = jn(), g = `lumora-glass-${c.useId().replace(/[^a-zA-Z0-9-]/g, "")}`, [m, h] = c.useState(null), _ = c.useRef(null), S = c.useCallback(
      (I) => {
        var b;
        if (d.current = I, typeof u == "function" ? u(I) : u && (u.current = I), (b = _.current) == null || b.disconnect(), _.current = null, !I || !p || !ec || typeof ResizeObserver > "u")
          return;
        const N = () => {
          const T = I.offsetWidth, C = I.offsetHeight;
          h(
            (K) => (K == null ? void 0 : K.width) === T && K.height === C ? K : T && C ? { width: T, height: C } : null
          );
        };
        _.current = new ResizeObserver(N), _.current.observe(I), N();
      },
      [u, p]
    ), v = c.useMemo(
      () => m ? tc(m.width, m.height, Ql) : null,
      [m]
    ), x = p && !!(v && m), R = Zs(e, t, f);
    return /* @__PURE__ */ E(ve, { children: [
      x ? /* @__PURE__ */ o(
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
              width: m.width,
              height: m.height,
              filterUnits: "userSpaceOnUse",
              primitiveUnits: "userSpaceOnUse",
              colorInterpolationFilters: "sRGB",
              children: [
                /* @__PURE__ */ o(
                  "feImage",
                  {
                    href: v,
                    x: "0",
                    y: "0",
                    width: m.width,
                    height: m.height,
                    preserveAspectRatio: "none",
                    result: "map"
                  }
                ),
                /* @__PURE__ */ o(
                  "feGaussianBlur",
                  {
                    in: "map",
                    stdDeviation: Ql / 3,
                    result: "softMap"
                  }
                ),
                /* @__PURE__ */ o(
                  "feDisplacementMap",
                  {
                    in: "SourceGraphic",
                    in2: "softMap",
                    scale: Ji,
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
        "div",
        {
          ref: S,
          "aria-hidden": !0,
          "data-testid": r,
          "data-refract": x ? "true" : void 0,
          className: y(
            R.className,
            x && "lw:reduce-transparency:[backdrop-filter:none]! lw:reduce-transparency:[-webkit-backdrop-filter:none]!",
            n
          ),
          style: {
            ...R.style,
            ...x ? {
              backdropFilter: `url(#${g}) ${Qi}`
            } : {},
            ...l
          }
        }
      )
    ] });
  }
);
ts.displayName = "GlassLayer";
const Jn = ts, rc = '[role="menuitem"]:not([aria-disabled="true"])', ns = (e) => Array.from(e.querySelectorAll(rc)), os = (e) => {
  if (!e)
    return !1;
  const t = e.querySelector(
    '[role="menuitem"][data-selected="true"]'
  ) ?? ns(e)[0];
  return t == null || t.focus(), !!t;
}, ol = c.forwardRef(({ className: e, onKeyDown: t, ...n }, l) => /* @__PURE__ */ o(
  "ul",
  {
    ref: l,
    role: "menu",
    className: y(
      "lw:relative lw:m-0 lw:list-none lw:outline-none",
      e
    ),
    onKeyDown: (r) => {
      if (t == null || t(r), r.defaultPrevented)
        return;
      const s = ns(r.currentTarget);
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
ol.displayName = "ShellMenuList";
const Un = c.forwardRef(({ className: e, onKeyDown: t, selected: n, ...l }, r) => /* @__PURE__ */ o(
  "li",
  {
    ref: r,
    role: "menuitem",
    tabIndex: -1,
    "data-selected": n ? "true" : void 0,
    className: y(
      "lw:relative lw:flex lw:cursor-pointer lw:items-center lw:outline-none lw:select-none lw:transition-colors",
      e
    ),
    onKeyDown: (s) => {
      t == null || t(s), !s.defaultPrevented && (s.key === "Enter" || s.key === " ") && (s.preventDefault(), s.currentTarget.click());
    },
    ...l
  }
));
Un.displayName = "ShellMenuItem";
const sc = ({
  className: e
}) => /* @__PURE__ */ o(
  "li",
  {
    role: "separator",
    className: y("lw:my-1 lw:h-px lw:list-none lw:bg-border", e)
  }
), ac = 150, ic = ({
  open: e,
  onOpen: t,
  onClose: n
}) => {
  const l = c.useRef(void 0), r = c.useRef(null), [s, i] = c.useState(!1), [a, u] = c.useState(!1), [d, p] = c.useState(e);
  e !== d && (p(e), e && (u(s), i(!1)));
  const f = c.useRef({ open: e, openedByHover: a, onOpen: t, onClose: n });
  f.current = { open: e, openedByHover: a, onOpen: t, onClose: n };
  const g = () => {
    clearTimeout(l.current), l.current = void 0;
  }, m = c.useRef(!1), h = c.useRef(!1), _ = c.useRef(void 0), S = () => {
    h.current = !1, _.current && (document.removeEventListener("pointermove", _.current), _.current = void 0);
  }, v = (b) => {
    const T = r.current, C = T == null ? void 0 : T.getBoundingClientRect();
    return b.target instanceof Node && !!(T != null && T.contains(b.target)) || !!C && b.clientX >= C.left && b.clientX <= C.right && b.clientY >= C.top && b.clientY <= C.bottom;
  }, x = () => {
    S(), h.current = !0, _.current = (b) => {
      b.pointerType === "mouse" && !v(b) && S();
    }, document.addEventListener("pointermove", _.current);
  };
  c.useEffect(
    () => () => {
      g(), e && !m.current && x(), m.current = !1;
    },
    [e]
  ), c.useEffect(() => S, []);
  const R = (b) => {
    b.pointerType === "mouse" && (g(), f.current.open ? f.current.openedByHover && (l.current = setTimeout(() => {
      m.current = !0, f.current.onClose();
    }, zr)) : i(!1));
  };
  return { triggerProps: {
    onPointerEnter: (b) => {
      if (b.pointerType !== "mouse" || (g(), r.current = b.currentTarget, f.current.open || h.current))
        return;
      const T = b.currentTarget;
      l.current = setTimeout(() => {
        f.current.open || (i(!0), f.current.onOpen(T));
      }, ac);
    },
    onPointerLeave: R,
    // The click that follows opens it as a hover would, so leaving closes it
    onPointerDown: (b) => {
      b.pointerType === "mouse" && (g(), r.current = b.currentTarget, f.current.open || i(!0));
    }
  }, contentProps: {
    onPointerEnter: (b) => {
      b.pointerType === "mouse" && g();
    },
    onPointerLeave: R,
    onInteractOutside: (b) => {
      var T;
      b.target instanceof Node && ((T = r.current) != null && T.contains(b.target)) && b.preventDefault();
    }
  }, openedByHover: a };
}, Qn = ic, tr = ke(Ir), nr = ke(Vn), cc = 240, dc = 8, ls = '[data-rail-surface], [data-testid="sidebar-hover-panel"], aside', rs = (e) => {
  const t = e.getBoundingClientRect(), n = e.closest(ls);
  if (!n)
    return t;
  const l = n.getBoundingClientRect().right + dc;
  return new DOMRect(l, t.top, 0, t.height);
}, uc = "lw:overflow-hidden lw:rounded-xl lw:border lw:border-solid lw:border-border lw:bg-popover lw:text-popover-foreground lw:shadow-[0_8px_24px_rgba(0,0,0,0.12)]", wc = ({
  anchorEl: e,
  onClose: t,
  platforms: n,
  currentKey: l,
  onSelect: r,
  accentColor: s,
  glass: i = !1,
  contentProps: a,
  openedByHover: u = !1
}) => {
  const d = Ye(), p = !!e, f = !!(e != null && e.closest(ls)), g = Xo(d ? "hsl(220, 30%, 7%)" : "#ffffff"), m = c.useRef(null), h = c.useMemo(
    () => ({
      current: e && {
        // Lets floating-ui follow the anchor's scroll parents and resizes
        contextElement: e,
        getBoundingClientRect: () => rs(e)
      }
    }),
    [e]
  ), _ = Jo({
    enabled: i,
    isDark: d,
    selector: '[role="menuitem"]',
    radius: et
  }), S = /* @__PURE__ */ o(
    ol,
    {
      ref: m,
      "aria-label": "Switch platform",
      "data-testid": "platform-menu-list",
      className: "lw:p-1",
      children: n.map((v) => {
        const x = v.key === l, R = v.accentColor ?? s;
        return /* @__PURE__ */ E(
          Un,
          {
            selected: x,
            onClick: () => r(v),
            "data-testid": `platform-item-${v.key}`,
            className: y(
              // Compact: 14px name over a 12px description.
              "lw:px-3 lw:py-1.5",
              i ? (
                // Glass: the tick marks the current platform and
                // the lens is the only hover fill
                "lw:rounded-md"
              ) : "lw:rounded-lg lw:hover:bg-accent lw:focus-visible:bg-accent lw:data-[selected=true]:bg-selected"
            ),
            children: [
              /* @__PURE__ */ o("span", { className: "lw:flex lw:min-w-6 lw:shrink-0 lw:items-center", children: /* @__PURE__ */ o(
                "span",
                {
                  "aria-hidden": !0,
                  className: "lw:block lw:size-2.5 lw:rounded-full",
                  style: {
                    backgroundColor: R,
                    boxShadow: i ? `0 0 0 3px ${d ? "rgba(255,255,255,0.08)" : "rgba(255,255,255,0.7)"}` : "none"
                  }
                }
              ) }),
              /* @__PURE__ */ E("span", { className: "lw:min-w-0 lw:flex-auto", children: [
                /* @__PURE__ */ o("span", { className: "lw:block lw:text-sm lw:leading-5 lw:font-semibold lw:text-foreground", children: v.name }),
                v.description ? /* @__PURE__ */ o("span", { className: "lw:block lw:text-xs lw:leading-[18px] lw:text-muted-foreground", children: v.description }) : null
              ] }),
              x ? /* @__PURE__ */ o(
                Ls,
                {
                  "data-testid": "platform-current",
                  className: "lw:ml-3 lw:size-[18px] lw:shrink-0",
                  style: { color: R }
                }
              ) : null
            ]
          },
          v.key
        );
      })
    }
  );
  return /* @__PURE__ */ E(
    wn,
    {
      open: p,
      onOpenChange: (v) => {
        v || t();
      },
      modal: !u,
      children: [
        /* @__PURE__ */ o(
          fn,
          {
            virtualRef: h
          }
        ),
        /* @__PURE__ */ o(
          $t,
          {
            unstyled: !0,
            side: f ? "right" : "bottom",
            align: "start",
            sideOffset: f ? 0 : 8,
            collisionPadding: 16,
            ...a,
            onClick: (v) => v.stopPropagation(),
            onInteractOutside: (v) => {
              a == null || a.onInteractOutside(v), v.target instanceof Node && (e != null && e.contains(v.target)) && v.preventDefault();
            },
            onOpenAutoFocus: (v) => {
              v.preventDefault(), u || os(m.current);
            },
            onCloseAutoFocus: (v) => {
              var x;
              v.preventDefault(), u || (x = e == null ? void 0 : e.focus) == null || x.call(e);
            },
            className: "lw:max-w-[calc(100vw-32px)]",
            children: /* @__PURE__ */ o(
              "div",
              {
                "data-testid": "platform-menu",
                "data-glass": i ? "true" : void 0,
                className: i ? "lw:relative lw:rounded-md" : uc,
                style: { minWidth: cc },
                children: i ? /* @__PURE__ */ E(ve, { children: [
                  /* @__PURE__ */ o(
                    Jn,
                    {
                      isDark: d,
                      solid: g,
                      className: y(
                        "lw:absolute lw:inset-0 lw:origin-top-left lw:rounded-[inherit]",
                        $e
                      ),
                      style: {
                        animation: `${jo} ${tr.duration}ms ${tr.easing} both`
                      }
                    }
                  ),
                  /* @__PURE__ */ E(
                    "div",
                    {
                      ..._.containerProps,
                      className: y(
                        "lw:relative lw:overflow-hidden lw:rounded-[inherit]",
                        $e
                      ),
                      style: {
                        animation: `${Yo} ${nr.duration}ms ${nr.easing} 70ms both`
                      },
                      children: [
                        _.lens,
                        S
                      ]
                    }
                  )
                ] }) : S
              }
            )
          }
        )
      ]
    }
  );
}, fc = ({ children: e, anchorEl: t, onOpen: n, hoverOpen: l = !1, ...r }) => {
  const s = c.useRef(null), i = !!(t && s.current && t.contains(s.current)), a = Qn({
    open: i,
    // The brand button anchors the menu, as a click on it does
    onOpen: (u) => n(u.closest("button") ?? u),
    onClose: r.onClose
  });
  return /* @__PURE__ */ E(
    "span",
    {
      ref: s,
      ...l ? a.triggerProps : {},
      "data-testid": "platform-switcher-logo",
      className: "lw:relative lw:inline-flex lw:items-center lw:justify-center lw:p-1.5 lw:after:absolute lw:after:right-px lw:after:bottom-px lw:after:border-solid lw:after:[border-width:0_0_5px_5px] lw:after:[border-color:transparent_transparent_currentColor_transparent] lw:after:opacity-55 lw:after:content-['']",
      children: [
        e,
        /* @__PURE__ */ o(
          wc,
          {
            ...r,
            anchorEl: i ? t : null,
            contentProps: a.contentProps,
            openedByHover: a.openedByHover
          }
        )
      ]
    }
  );
}, Bo = "lw:outline-none lw:focus:outline-none", mc = "lw:flex lw:flex-col lw:overflow-hidden lw:rounded-xl lw:border lw:border-solid lw:border-border lw:bg-popover lw:text-popover-foreground lw:shadow-[0_8px_24px_rgba(0,0,0,0.12)]", or = ke(Ir), lr = ke(Vn), pc = '[role="menuitem"], button[data-testid="account-menu-header"], [data-testid="menu-item-theme"]', hc = ({ mode: e, onToggle: t, accentColor: n, tint: l, glass: r = !1 }) => {
  const s = Ye(), i = jn(), a = c.useRef(null), u = c.useRef(null), d = (g) => {
    var m;
    g !== e && (t == null || t()), (m = (g === "light" ? a : u).current) == null || m.focus();
  }, p = (g) => {
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
  }, f = (g, m, h, _) => {
    const S = e === g;
    return /* @__PURE__ */ o(
      "button",
      {
        type: "button",
        ref: _,
        role: "radio",
        "aria-checked": S,
        "aria-label": m,
        tabIndex: S ? 0 : -1,
        onClick: () => d(g),
        "data-testid": `theme-segment-${g}`,
        className: y(
          "lw:inline-flex lw:h-6 lw:w-8 lw:cursor-pointer lw:items-center lw:justify-center lw:transition-[background-color,color,box-shadow,transform] lw:duration-150 lw:ease-out lw:focus-visible:shadow-[0_0_0_2px_var(--lw-seg-ring)]",
          r ? "lw:rounded-md" : "lw:rounded-full",
          !S && "lw:text-muted-foreground lw:hover:text-foreground",
          // On glass each mode answers the pointer itself, so the
          // row's lens is not the only thing that moves
          r && "lw:hover:scale-[1.06] lw:active:scale-[0.94]",
          r && !S && (s ? "lw:hover:bg-white/12" : "lw:hover:bg-white/75"),
          Bo
        ),
        style: {
          "--lw-seg-ring": st(n, 0.6),
          // White on dark: the accent is too dim against a dark surface
          ...S ? {
            color: s ? "#ffffff" : n,
            backgroundColor: l,
            ...r ? yr(s, i) : {}
          } : {}
        },
        children: /* @__PURE__ */ o(h, { className: "lw:size-4" })
      }
    );
  };
  return /* @__PURE__ */ E(
    "div",
    {
      role: "radiogroup",
      "aria-label": "Theme",
      "data-testid": "theme-segments",
      onKeyDown: p,
      className: y(
        "lw:flex lw:shrink-0 lw:flex-row lw:gap-0.5 lw:bg-selected lw:p-[3px]",
        r ? "lw:rounded-md" : "lw:rounded-full"
      ),
      children: [
        f("light", "Light", Ms, a),
        f("dark", "Dark", Ps, u)
      ]
    }
  );
}, gc = ({
  open: e,
  anchorEl: t,
  onClose: n,
  width: l,
  renderAvatar: r,
  userName: s,
  userEmail: i,
  roleLabel: a,
  accentColor: u,
  tint: d,
  showThemeToggler: p,
  theme: f,
  onThemeToggle: g,
  onProfileClick: m,
  onAiUsageClick: h,
  onLinkClick: _,
  menuItems: S = [],
  onLogout: v,
  glass: x = !1,
  contentProps: R,
  openedByHover: I = !1
}) => {
  const N = Ye(), b = Xo(N ? "hsl(220, 30%, 7%)" : "#ffffff"), T = c.useRef(null), C = c.useMemo(
    () => ({
      current: t && {
        contextElement: t,
        getBoundingClientRect: () => rs(t)
      }
    }),
    [t]
  ), K = Jo({
    enabled: x,
    isDark: N,
    selector: pc,
    radius: et
  }), k = (O) => {
    n(), O == null || O();
  }, F = (O) => {
    n(), O.onClick ? O.onClick() : O.path && (_ == null || _(O.path));
  }, L = y(
    "lw:min-h-8 lw:gap-1 lw:px-3 lw:py-1.5 lw:text-sm lw:leading-5",
    x ? "lw:rounded-md" : "lw:rounded-lg lw:hover:bg-(--lw-menu-tint) lw:focus-visible:bg-(--lw-menu-tint)"
  ), G = "lw:flex lw:min-w-8 lw:shrink-0 lw:items-center lw:[&_svg]:size-5", ee = y(
    "lw:cursor-pointer lw:rounded-sm lw:text-xs lw:leading-[18px] lw:font-semibold lw:tracking-[0.02em] lw:hover:underline lw:hover:underline-offset-2 lw:focus-visible:shadow-[0_0_0_2px_var(--lw-link-ring)]",
    Bo
  ), B = N ? "#ffffff" : u, A = h ? /* @__PURE__ */ E(
    "div",
    {
      "data-testid": "account-menu-links",
      className: "lw:mt-0.5 lw:flex lw:flex-row lw:items-center lw:gap-1.5",
      children: [
        m ? /* @__PURE__ */ E(ve, { children: [
          /* @__PURE__ */ o(
            "button",
            {
              type: "button",
              onClick: () => k(m),
              "data-testid": "account-menu-view-profile",
              className: ee,
              style: { color: B },
              children: "View profile"
            }
          ),
          /* @__PURE__ */ o("span", { "aria-hidden": !0, className: "lw:text-xs lw:text-faint", children: "·" })
        ] }) : null,
        /* @__PURE__ */ o(
          "button",
          {
            type: "button",
            onClick: () => k(h),
            "data-testid": "account-menu-ai-usage",
            className: ee,
            style: { color: B },
            children: "My AI usage"
          }
        )
      ]
    }
  ) : null, $ = /* @__PURE__ */ E("div", { className: "lw:flex lw:flex-row lw:items-center lw:gap-2.5 lw:p-3", children: [
    r(36),
    /* @__PURE__ */ E("div", { className: "lw:min-w-0 lw:flex-1", children: [
      /* @__PURE__ */ o("p", { className: "lw:truncate lw:text-sm lw:leading-5 lw:font-semibold lw:text-foreground", children: s }),
      i ? /* @__PURE__ */ o(
        "p",
        {
          "data-testid": "account-menu-email",
          className: "lw:truncate lw:text-xs lw:leading-[18px] lw:text-muted-foreground",
          children: i
        }
      ) : null,
      a ? /* @__PURE__ */ o(
        "span",
        {
          "data-role": !0,
          "data-testid": "account-menu-role",
          className: "lw:block lw:truncate lw:text-xs lw:leading-[1.66] lw:tracking-[0.02em] lw:text-muted-foreground",
          children: a
        }
      ) : null,
      A,
      m && !h ? /* @__PURE__ */ o(
        "span",
        {
          "data-hint": !0,
          "data-testid": "account-menu-view-profile",
          className: "lw:truncate lw:text-xs lw:leading-[1.66] lw:font-semibold lw:tracking-[0.02em] lw:underline lw:underline-offset-2",
          style: { color: B },
          children: "View profile"
        }
      ) : null
    ] })
  ] });
  return /* @__PURE__ */ E(
    wn,
    {
      open: e && !!t,
      onOpenChange: (O) => {
        O || n();
      },
      modal: !I,
      children: [
        /* @__PURE__ */ o(
          fn,
          {
            virtualRef: C
          }
        ),
        /* @__PURE__ */ o(
          $t,
          {
            ...R,
            unstyled: !0,
            side: "right",
            align: "end",
            sideOffset: 0,
            collisionPadding: 16,
            onOpenAutoFocus: (O) => {
              O.preventDefault(), I || os(T.current);
            },
            onCloseAutoFocus: (O) => {
              var q;
              O.preventDefault(), I || (q = t == null ? void 0 : t.focus) == null || q.call(t);
            },
            className: "lw:max-w-[calc(100vw-32px)]",
            children: /* @__PURE__ */ E(
              "div",
              {
                "data-testid": "account-menu",
                "data-glass": x ? "true" : void 0,
                className: y(
                  x ? (
                    // The rows give up their own hover fill: one drop of
                    // glass (the lens) glides behind whichever is hovered
                    "lw:relative lw:rounded-md"
                  ) : mc
                ),
                style: {
                  width: l,
                  minWidth: l,
                  "--lw-menu-tint": d,
                  "--lw-link-ring": st(u, 0.6)
                },
                children: [
                  x ? /* @__PURE__ */ o(
                    Jn,
                    {
                      isDark: N,
                      solid: b,
                      className: y(
                        "lw:absolute lw:inset-0 lw:origin-bottom-left lw:rounded-[inherit]",
                        $e
                      ),
                      style: {
                        animation: `${jo} ${or.duration}ms ${or.easing} both`
                      }
                    }
                  ) : null,
                  /* @__PURE__ */ E(
                    "div",
                    {
                      ...K.containerProps,
                      className: x ? y(
                        "lw:relative lw:flex lw:flex-col lw:overflow-hidden lw:rounded-[inherit]",
                        $e
                      ) : "lw:contents",
                      style: x ? {
                        animation: `${Yo} ${lr.duration}ms ${lr.easing} 70ms both`
                      } : void 0,
                      children: [
                        K.lens,
                        m && !h ? /* @__PURE__ */ o(
                          "button",
                          {
                            type: "button",
                            onClick: () => k(m),
                            "data-testid": "account-menu-header",
                            className: y(
                              "lw:group lw:relative lw:block lw:w-full lw:cursor-pointer lw:text-left lw:transition-colors lw:duration-150 lw:[&_[data-hint]]:hidden lw:hover:[&_[data-hint]]:block lw:hover:[&_[data-role]]:hidden lw:focus-visible:[&_[data-hint]]:block lw:focus-visible:[&_[data-role]]:hidden",
                              !x && "lw:hover:bg-(--lw-menu-tint) lw:focus-visible:bg-(--lw-menu-tint)",
                              Bo
                            ),
                            children: $
                          }
                        ) : /* @__PURE__ */ o(
                          "div",
                          {
                            "data-testid": "account-menu-header",
                            className: "lw:relative",
                            children: $
                          }
                        ),
                        /* @__PURE__ */ o(sn, { className: "lw:relative" }),
                        p ? /* @__PURE__ */ E(
                          "div",
                          {
                            "data-testid": "menu-item-theme",
                            className: y(
                              L,
                              "lw:relative lw:mx-1 lw:mt-1 lw:flex lw:items-center lw:py-1 lw:hover:bg-transparent"
                            ),
                            children: [
                              /* @__PURE__ */ o(
                                "span",
                                {
                                  className: y(
                                    G,
                                    "lw:text-muted-foreground"
                                  ),
                                  children: /* @__PURE__ */ o(Ds, {})
                                }
                              ),
                              /* @__PURE__ */ o("span", { className: "lw:flex-1 lw:text-foreground", children: "Theme" }),
                              /* @__PURE__ */ o(
                                hc,
                                {
                                  glass: x,
                                  mode: f,
                                  onToggle: g,
                                  accentColor: u,
                                  tint: d
                                }
                              )
                            ]
                          }
                        ) : null,
                        /* @__PURE__ */ E(
                          ol,
                          {
                            ref: T,
                            className: y(
                              "lw:px-1 lw:pb-1",
                              p ? "lw:pt-0" : "lw:pt-1"
                            ),
                            children: [
                              S.map((O) => /* @__PURE__ */ E(
                                Un,
                                {
                                  onClick: () => F(O),
                                  "data-testid": `menu-item-${O.key}`,
                                  className: y(
                                    L,
                                    "lw:text-foreground"
                                  ),
                                  children: [
                                    /* @__PURE__ */ o(
                                      "span",
                                      {
                                        className: y(
                                          G,
                                          "lw:text-muted-foreground"
                                        ),
                                        children: O.icon
                                      }
                                    ),
                                    /* @__PURE__ */ o("span", { className: "lw:flex-1", children: O.label }),
                                    /* @__PURE__ */ o(Po, { count: O.badge })
                                  ]
                                },
                                O.key
                              )),
                              v ? /* @__PURE__ */ o(sc, {}) : null,
                              v ? /* @__PURE__ */ E(
                                Un,
                                {
                                  onClick: () => k(v),
                                  "data-testid": "menu-item-logout",
                                  className: y(
                                    L,
                                    "lw:text-destructive"
                                  ),
                                  children: [
                                    /* @__PURE__ */ o("span", { className: G, children: /* @__PURE__ */ o(ur, {}) }),
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
}, bc = gc, xc = "lw:outline-none lw:focus:outline-none", vc = ({
  mainLinks: e,
  secondaryLinks: t = [],
  activePath: n,
  onLinkClick: l,
  logo: r,
  title: s,
  onBrandClick: i,
  brandMenuOpen: a,
  brandColor: u,
  headerBackgroundColor: d,
  headerForegroundColor: p,
  activeAccentColor: f = "#01584f",
  activeBackgroundColor: g,
  groupArrowColor: m,
  groupAccentColor: h,
  activeForegroundColor: _,
  foregroundColor: S,
  surfaceBackgroundColor: v,
  flyoutSurfaceColor: x,
  collapsed: R,
  expandedWidth: I,
  collapsedWidth: N,
  topContent: b,
  submenuMode: T,
  color: C,
  hoverColor: K,
  avatarColor: k,
  showProfile: F = !0,
  userName: L = "User",
  userEmail: G,
  userRole: ee,
  userAvatar: B,
  showNotifications: A = !0,
  notificationCount: $ = 0,
  onNotificationsClick: O,
  notificationsTriggerProps: q,
  notificationsOpen: W,
  whatsNewCount: oe = 0,
  onProfileClick: me,
  onAiUsageClick: j,
  menuItems: Z,
  onLogout: ue,
  theme: J = "light",
  showThemeToggler: te = !0,
  onThemeToggle: ie
}) => {
  const he = Ye(), ye = qn(v, he), D = C ?? S ?? (he ? "#ffffff" : f), z = K ?? h ?? tn(f), Y = k ?? f, U = c.useRef(null), [ae, ne] = c.useState(!1), Ee = Qn({
    open: ae,
    onOpen: () => ne(!0),
    onClose: () => ne(!1)
  }), we = ee ? hr(ee) : void 0, _e = (Te) => /* @__PURE__ */ o(
    tl,
    {
      name: L,
      avatar: B,
      color: Y,
      size: Te
    }
  ), Be = $ + oe, ce = R && T === "flyout", Re = A ? /* @__PURE__ */ o(
    nl,
    {
      count: Be,
      onClick: O,
      triggerProps: q,
      active: W,
      color: D,
      hoverColor: z,
      tooltipPlacement: "right",
      testId: "panel-notifications"
    }
  ) : null, ge = F ? /* @__PURE__ */ E(
    "button",
    {
      type: "button",
      ref: U,
      onClick: () => ne(!0),
      ...Ee.triggerProps,
      "aria-haspopup": "menu",
      "aria-expanded": ae,
      "aria-label": "Account menu",
      "data-testid": "panel-user-button",
      className: y(
        "lw:flex lw:min-w-0 lw:cursor-pointer lw:items-center lw:justify-start lw:gap-2.5 lw:rounded-[10px] lw:hover:bg-(--lw-footer-tint)",
        R ? "lw:flex-[0_0_auto]" : "lw:flex-1",
        // On the flyout rail the 36px avatar fills a 44px button,
        // matching the rail's icon buttons
        ce ? "lw:p-1" : "lw:p-1.5",
        ae ? "lw:bg-(--lw-footer-tint)" : "lw:bg-transparent",
        xc
      ),
      style: { "--lw-footer-tint": z },
      children: [
        R && !ce && A ? (
          // Collapsed: no room for the bell, so unread shows as a dot
          /* @__PURE__ */ o(
            Qr,
            {
              dot: !0,
              count: Be,
              className: "lw:rounded-full",
              badgeClassName: "lw:top-[14%] lw:right-[14%]",
              children: _e(36)
            }
          )
        ) : _e(R ? 36 : 40),
        R ? null : /* @__PURE__ */ E("span", { className: "lw:block lw:min-w-0 lw:text-left", children: [
          /* @__PURE__ */ o(
            "span",
            {
              className: "lw:block lw:truncate lw:text-sm lw:leading-[1.3] lw:font-semibold",
              style: { color: D },
              children: L
            }
          ),
          we ? /* @__PURE__ */ o(
            "span",
            {
              "data-testid": "panel-user-role",
              className: "lw:block lw:truncate lw:text-xs lw:leading-[1.3] lw:tracking-[0.02em] lw:opacity-85",
              style: { color: D },
              children: we
            }
          ) : null
        ] })
      ]
    }
  ) : null, pe = !!Re && (!R || ce || !ge), Ne = ge || pe ? /* @__PURE__ */ E(
    "div",
    {
      className: y(
        "lw:flex lw:items-center lw:justify-center lw:gap-1",
        ce ? "lw:flex-col" : "lw:flex-row"
      ),
      children: [
        ce && pe ? Re : null,
        ge,
        !ce && pe ? Re : null
      ]
    }
  ) : void 0;
  return /* @__PURE__ */ E(
    "div",
    {
      "data-testid": "panel-sidebar",
      "data-collapsed": R ? "true" : "false",
      className: "lw:flex lw:min-h-0 lw:flex-auto lw:flex-col",
      children: [
        /* @__PURE__ */ o(
          Do,
          {
            mainLinks: e,
            secondaryLinks: t,
            activePath: n,
            onLinkClick: l,
            showHeaderBar: !0,
            logo: r,
            title: s,
            onBrandClick: i,
            brandMenuOpen: a,
            brandColor: u,
            headerBackgroundColor: d,
            headerForegroundColor: p,
            activeAccentColor: f,
            activeBackgroundColor: g,
            groupArrowColor: m,
            groupAccentColor: h,
            activeForegroundColor: _,
            foregroundColor: S,
            surfaceBackgroundColor: ye,
            flyoutSurfaceColor: x,
            collapsed: R,
            expandedWidth: I,
            collapsedWidth: N,
            topContent: b,
            footer: Ne,
            submenuMode: T
          }
        ),
        F ? /* @__PURE__ */ o(
          bc,
          {
            open: ae,
            anchorEl: U.current,
            onClose: () => ne(!1),
            width: Math.max(I - 16, 240),
            renderAvatar: _e,
            userName: L,
            userEmail: G,
            roleLabel: we,
            accentColor: f,
            tint: z,
            showThemeToggler: te,
            theme: J,
            onThemeToggle: ie,
            onProfileClick: me,
            onAiUsageClick: j,
            onLinkClick: l,
            menuItems: Z,
            onLogout: ue,
            glass: T === "flyout",
            contentProps: Ee.contentProps,
            openedByHover: Ee.openedByHover
          }
        ) : null
      ]
    }
  );
}, yc = vc, Ec = ({
  compact: e,
  color: t,
  hoverColor: n,
  showProfile: l,
  hoverOpen: r = !1,
  whatsNewCount: s = 0,
  notificationsTriggerProps: i,
  notificationsOpen: a,
  ...u
}) => {
  var b;
  const {
    avatarColor: d,
    showNotifications: p,
    notificationCount: f,
    onNotificationsClick: g,
    userName: m = "User",
    userRole: h,
    userAvatar: _
  } = u, S = c.useRef(null), [v, x] = c.useState(
    null
  ), R = !!v, I = Qn({
    open: R,
    onOpen: () => x(S.current),
    onClose: () => x(null)
  }), N = c.useRef(e);
  return c.useEffect(() => {
    e && !N.current && x(null), N.current = e;
  }, [e]), !p && !l ? null : /* @__PURE__ */ E(ve, { children: [
    /* @__PURE__ */ E(
      "div",
      {
        ref: S,
        "data-testid": "sidebar-footer",
        className: y(
          "lw:flex lw:w-full lw:items-center lw:gap-1",
          e ? "lw:flex-col" : "lw:flex-row"
        ),
        children: [
          l && /* @__PURE__ */ o(
            je,
            {
              title: e ? m : "",
              side: "right",
              arrow: !0,
              disabled: R,
              children: /* @__PURE__ */ o(
                "button",
                {
                  type: "button",
                  onClick: () => x(S.current),
                  ...r ? I.triggerProps : {},
                  "aria-label": `Account menu for ${m}`,
                  "aria-haspopup": "menu",
                  "aria-expanded": R,
                  "data-testid": "sidebar-user",
                  className: y(
                    "lw:inline-flex lw:min-w-0 lw:cursor-pointer lw:items-center lw:justify-start lw:gap-2.5 lw:rounded-lg lw:text-left lw:outline-none lw:transition-colors lw:hover:bg-(--lw-hover) lw:focus-visible:outline-2 lw:focus-visible:outline-solid lw:focus-visible:outline-(--lw-fg)",
                    // 4px around the avatar, on the glass rail too
                    e ? "lw:flex-none lw:p-1" : "lw:flex-auto lw:px-2 lw:py-1.5"
                  ),
                  style: {
                    color: t,
                    "--lw-fg": t,
                    "--lw-hover": n,
                    ...R ? { backgroundColor: n } : {}
                  },
                  children: /* @__PURE__ */ o(
                    Vr,
                    {
                      name: m,
                      role: h,
                      avatar: _,
                      avatarColor: d,
                      showText: !e
                    }
                  )
                }
              )
            }
          ),
          p && /* @__PURE__ */ o(
            nl,
            {
              count: f + s,
              onClick: g,
              triggerProps: r ? i : void 0,
              active: a,
              color: t,
              hoverColor: n,
              tooltipPlacement: "right",
              testId: "sidebar-notifications"
            }
          )
        ]
      }
    ),
    /* @__PURE__ */ o(
      Zr,
      {
        anchorEl: v,
        onClose: () => x(null),
        placement: e ? "beside" : "above",
        width: e || (b = S.current) == null ? void 0 : b.clientWidth,
        contentProps: I.contentProps,
        openedByHover: I.openedByHover,
        ...u
      }
    )
  ] });
}, Nc = Ec, Sc = 120, _c = 300, rr = ke(Or), sr = ke(Vn), Rc = (e) => {
  var t;
  return ((t = e == null ? void 0 : e.querySelector("input, textarea")) == null ? void 0 : t.value) ?? "";
}, Tc = 'input, textarea, [contenteditable="true"]', zo = (e) => {
  var t;
  (t = e == null ? void 0 : e.querySelector(Tc)) == null || t.focus();
}, Ac = "lw:[&_:is([data-slot=input],[data-slot=button],input:not([data-slot]))]:rounded-[6px] lw:[&_:is([data-slot=input],[data-slot=button]):focus-visible]:border-(--lw-accent) lw:[&_:is([data-slot=input]):focus-visible]:ring-(--lw-accent)", ar = (e) => e ? `Search (${e.join("")})` : "Search", Cc = ({
  search: e,
  icon: t,
  mode: n,
  onExpand: l,
  autoFocus: r = !1,
  onAutoFocused: s,
  color: i,
  hoverColor: a,
  shortcutKeys: u
}) => {
  const d = Zo(), p = c.useContext(un), f = c.useRef(null), [g, m] = c.useState(null);
  return c.useEffect(() => {
    n === "full" && r && (zo(f.current), s == null || s());
  }, [n, r, s]), n === "full" ? /* @__PURE__ */ o(
    "div",
    {
      ref: f,
      "data-testid": "sidebar-search",
      "data-lw-host": "",
      className: "lw:w-full",
      children: e
    }
  ) : n === "popover" && p ? /* @__PURE__ */ o(
    Oc,
    {
      search: e,
      icon: t,
      color: i,
      railTooltip: d,
      tooltip: ar(u)
    }
  ) : /* @__PURE__ */ o(
    "div",
    {
      "data-testid": "sidebar-search",
      className: "lw:flex lw:w-full lw:justify-center",
      children: /* @__PURE__ */ E(
        wn,
        {
          open: !!g,
          onOpenChange: (h) => !h && m(null),
          children: [
            /* @__PURE__ */ o(
              je,
              {
                title: ar(u),
                side: "right",
                arrow: !0,
                ...d,
                children: /* @__PURE__ */ o(fn, { asChild: !0, children: /* @__PURE__ */ o(
                  "button",
                  {
                    type: "button",
                    "aria-label": "Search",
                    onClick: (h) => n === "expand" ? l == null ? void 0 : l() : m(h.currentTarget),
                    className: "lw:inline-flex lw:size-11 lw:shrink-0 lw:cursor-pointer lw:items-center lw:justify-center lw:rounded-lg lw:outline-none lw:transition-colors lw:hover:bg-(--lw-hover) lw:focus-visible:ring-2 lw:focus-visible:ring-ring lw:[&_svg]:size-6",
                    style: {
                      color: i,
                      "--lw-hover": a
                    },
                    children: t ?? /* @__PURE__ */ o(Ho, {})
                  }
                ) })
              }
            ),
            /* @__PURE__ */ o(
              $t,
              {
                side: "right",
                align: "start",
                sideOffset: 8,
                collisionPadding: 8,
                onOpenAutoFocus: (h) => {
                  h.preventDefault(), zo(h.currentTarget);
                },
                className: "lw:w-80 lw:p-2",
                children: /* @__PURE__ */ o("div", { "data-lw-host": "", children: e })
              }
            )
          ]
        }
      )
    }
  );
}, Oc = ({ search: e, icon: t, color: n, railTooltip: l, tooltip: r }) => {
  const s = Ye();
  Js(s, st(n, s ? 0.3 : 0.35));
  const i = `rgb(${jn()})`, a = Xo(s ? "#1e2430" : "#ffffff"), u = c.useRef(null), d = c.useRef(null), [p, f] = c.useState(!1), g = c.useRef(!1), m = c.useRef(void 0), h = c.useRef(void 0), _ = () => {
    clearTimeout(m.current), clearTimeout(h.current);
  }, S = c.useCallback(() => {
    _(), g.current = !1, f(!1);
  }, []), v = () => {
    clearTimeout(h.current), p || (clearTimeout(m.current), m.current = setTimeout(
      () => f(!0),
      Sc
    ));
  }, x = () => {
    clearTimeout(m.current), clearTimeout(h.current), h.current = setTimeout(() => {
      !g.current && !Rc(d.current) && f(!1);
    }, _c);
  };
  return c.useEffect(() => _, []), c.useEffect(() => {
    if (!p)
      return;
    const R = setTimeout(() => zo(d.current)), I = (b) => {
      var C, K;
      const T = b.target;
      !((C = d.current) != null && C.contains(T)) && !((K = u.current) != null && K.contains(T)) && S();
    }, N = (b) => {
      var T;
      b.key === "Escape" && (S(), (T = u.current) == null || T.focus());
    };
    return document.addEventListener("pointerdown", I), document.addEventListener("keydown", N), () => {
      clearTimeout(R), document.removeEventListener("pointerdown", I), document.removeEventListener("keydown", N);
    };
  }, [p, S]), /* @__PURE__ */ o(
    "div",
    {
      "data-testid": "sidebar-search",
      className: "lw:flex lw:w-full lw:justify-center",
      children: /* @__PURE__ */ E(
        wn,
        {
          open: p,
          onOpenChange: (R) => !R && S(),
          modal: !1,
          children: [
            /* @__PURE__ */ o(
              je,
              {
                title: p ? "" : r,
                side: "right",
                arrow: !0,
                ...l,
                children: /* @__PURE__ */ o(fn, { asChild: !0, children: /* @__PURE__ */ o(
                  "button",
                  {
                    ref: u,
                    type: "button",
                    "aria-label": "Search",
                    "aria-expanded": p,
                    onMouseEnter: v,
                    onMouseLeave: x,
                    onClick: () => {
                      _(), g.current = !0, f(!0);
                    },
                    className: "lw:inline-flex lw:shrink-0 lw:cursor-pointer lw:items-center lw:justify-center lw:outline-none lw:focus-visible:ring-2 lw:focus-visible:ring-ring",
                    style: {
                      width: Ce,
                      height: Ce,
                      color: n,
                      borderRadius: et
                    },
                    children: t ?? /* @__PURE__ */ o(
                      Ho,
                      {
                        style: {
                          width: ko,
                          height: ko
                        }
                      }
                    )
                  }
                ) })
              }
            ),
            /* @__PURE__ */ o(
              $t,
              {
                unstyled: !0,
                side: "right",
                align: "center",
                sideOffset: 14,
                collisionPadding: 8,
                onOpenAutoFocus: (R) => R.preventDefault(),
                onCloseAutoFocus: (R) => R.preventDefault(),
                onInteractOutside: (R) => {
                  var I;
                  (I = u.current) != null && I.contains(R.target) && R.preventDefault();
                },
                className: "lw:z-[1300]",
                children: /* @__PURE__ */ E(
                  "div",
                  {
                    ref: d,
                    "data-testid": "sidebar-search-card",
                    onMouseEnter: v,
                    onMouseLeave: x,
                    className: "lw:relative lw:w-80 lw:p-2",
                    style: { borderRadius: et },
                    children: [
                      /* @__PURE__ */ o(
                        Jn,
                        {
                          isDark: s,
                          solid: a,
                          className: y(
                            "lw:absolute lw:inset-0 lw:origin-left lw:rounded-[inherit]",
                            $e
                          ),
                          style: {
                            animation: `${jo} ${rr.duration}ms ${rr.easing} both`
                          }
                        }
                      ),
                      /* @__PURE__ */ o(
                        "div",
                        {
                          "data-lw-host": "",
                          className: y(
                            "lw:relative",
                            Ac,
                            $e
                          ),
                          style: {
                            "--lw-accent": i,
                            animation: `${Yo} ${sr.duration}ms ${sr.easing} 60ms both`
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
}, Ic = Cc, $c = 80, kc = 300, Lc = 32, Dc = (e) => {
  const t = c.useRef(/* @__PURE__ */ new WeakSet()), n = c.useRef(void 0), l = c.useRef(void 0), [r, s] = c.useState(!1), [i, a] = c.useState(!1), [u, d] = c.useState(!1), p = c.useRef(null), f = () => {
    clearTimeout(n.current), clearTimeout(l.current), n.current = void 0, l.current = void 0;
  };
  c.useEffect(() => {
    if (!e) {
      f(), s(!1), a(!1), d(!1);
      return;
    }
    const h = (x) => {
      var I;
      if (x.pointerType !== "mouse")
        return;
      const R = x.clientX <= Lc;
      R && ((I = p.current) == null || I.style.setProperty(
        "--edge-glow-y",
        `${x.clientY}px`
      )), d(R);
    }, _ = () => d(!1), S = () => {
      clearTimeout(n.current), n.current = void 0, l.current === void 0 && (l.current = setTimeout(() => {
        l.current = void 0, s(!1), a(!1);
      }, kc));
    }, v = (x) => {
      t.current.has(x) || S();
    };
    return document.addEventListener("mouseover", v), document.addEventListener("pointermove", h, {
      passive: !0
    }), document.documentElement.addEventListener("mouseleave", S), document.documentElement.addEventListener("mouseleave", _), () => {
      f(), document.removeEventListener("mouseover", v), document.removeEventListener("pointermove", h), document.documentElement.removeEventListener(
        "mouseleave",
        S
      ), document.documentElement.removeEventListener(
        "mouseleave",
        _
      );
    };
  }, [e]);
  const g = {
    onMouseOver: (h) => {
      t.current.add(h.nativeEvent), clearTimeout(l.current), l.current = void 0, !r && n.current === void 0 && (n.current = setTimeout(() => {
        n.current = void 0, s(!0);
      }, $c));
    },
    onFocus: (h) => {
      Mc(h.target) && a(!0);
    },
    onBlur: (h) => {
      const _ = h.relatedTarget;
      (!_ || !h.currentTarget.contains(_)) && a(!1);
    },
    onKeyDown: (h) => {
      h.key === "Escape" && (a(!1), s(!1));
    }
  }, m = e && (r || i);
  return {
    shown: m,
    nearEdge: e && u && !m,
    glowRef: p,
    rootProps: g
  };
}, Mc = (e) => {
  try {
    return e.matches(":focus-visible");
  } catch {
    return !0;
  }
}, Pc = Dc, Fc = 100, Bc = () => {
  const e = c.useRef(null), t = c.useRef(void 0), n = c.useRef(/* @__PURE__ */ new WeakSet()), [l, r] = c.useState(!1), [s, i] = c.useState(!1), a = () => {
    clearTimeout(t.current), t.current = void 0;
  };
  return c.useEffect(() => {
    const d = (f) => {
      n.current.has(f) || (a(), r(!1));
    }, p = () => {
      a(), r(!1);
    };
    return document.addEventListener("mouseover", d), document.documentElement.addEventListener("mouseleave", p), () => {
      a(), document.removeEventListener("mouseover", d), document.documentElement.removeEventListener(
        "mouseleave",
        p
      );
    };
  }, []), c.useEffect(() => {
    if (!s)
      return;
    const d = (p) => {
      var f;
      (f = e.current) != null && f.contains(p.target) || i(!1);
    };
    return document.addEventListener("pointerdown", d), () => document.removeEventListener("pointerdown", d);
  }, [s]), {
    expanded: l || s,
    pin: () => i(!0),
    rootProps: {
      ref: e,
      onMouseOver: (d) => {
        n.current.add(d.nativeEvent), !l && t.current === void 0 && (t.current = setTimeout(() => {
          t.current = void 0, r(!0);
        }, Fc));
      },
      // Focus moving to an element outside unpins; a null target (the
      // focused element unmounted as the panel swapped layouts) does not.
      onBlur: (d) => {
        const p = d.relatedTarget;
        p && !d.currentTarget.contains(p) && i(!1);
      },
      onKeyDown: (d) => {
        d.key === "Escape" && i(!1);
      }
    }
  };
}, zc = Bc, Hc = (e) => {
  const t = Array.from((e == null ? void 0 : e.children) ?? []).find(
    (a) => a.tagName === "ASIDE"
  );
  if (!t)
    return null;
  const n = t.querySelector("[data-rail-surface]") ?? t, { right: l, width: r } = t.getBoundingClientRect(), { top: s, height: i } = n.getBoundingClientRect();
  return r <= 0 || i <= 0 ? null : { left: l, top: s, height: i };
}, Gc = 300, Co = 288, Wc = "width 220ms cubic-bezier(0.4, 0, 0.2, 1), box-shadow 220ms ease", Uc = 18, ir = 72, Oo = 90, Xc = "transform 240ms cubic-bezier(0.2, 0.8, 0.2, 1), opacity 180ms ease", Kc = 68, cr = () => typeof navigator < "u" && /Mac|iPhone|iPad/.test(navigator.platform || navigator.userAgent), jc = typeof window > "u" ? qt : Bs, Yc = ({
  children: e,
  sidebarLinks: t = [],
  secondarySidebarLinks: n = [],
  appName: l = "Dashboard",
  showSidebar: r = !0,
  showSidebarRailTitles: s = !1,
  sidebarVariant: i = "rail",
  sidebarSubmenu: a = "expand",
  sidebarAutoHide: u = !1,
  mobileNavigation: d = "bottom-bar",
  mobileBottomBarLinks: p,
  logo: f,
  onBrandClick: g,
  searchComponent: m,
  searchIcon: h,
  notificationsIcon: _,
  searchShortcut: S = !1,
  brandColor: v,
  contentPadding: x = Rr,
  userMenuItems: R,
  sidebarBackgroundColor: I,
  sidebarHeaderBackgroundColor: N,
  groupAccentColor: b,
  activeSidebarForegroundColor: T,
  enableRefreshToken: C = !1,
  holdSessionSkeleton: K = !1,
  sessionSkeletonContent: k,
  activePath: F,
  onLinkClick: L,
  showProfile: G = !0,
  userName: ee,
  userRole: B,
  userAvatar: A,
  userEmail: $,
  onLogout: O,
  showSettings: q = !0,
  onSettingsClick: W,
  onProfileClick: oe,
  onAiUsageClick: me,
  showNotifications: j = !0,
  notificationCount: Z = 0,
  NotificationSidebarContent: ue,
  whatsNewCount: J = 0,
  onNotificationsClick: te,
  platforms: ie,
  currentPlatformKey: he,
  onPlatformSelect: ye,
  onVerify: D,
  alertProps: z,
  style: Y,
  sidebarStyles: U,
  contentStyles: ae,
  className: ne,
  sidebarClassName: Ee,
  contentClassName: we,
  accentColor: _e,
  sidebarAccentColor: Be,
  sidebarActiveBackgroundColor: ce,
  sidebarGroupArrowColor: Re,
  sidebarForegroundColor: ge,
  contentBackgroundColor: pe,
  theme: Ne = "light",
  darkModeSelector: Te,
  showThemeToggler: tt = !1,
  onThemeToggle: mn,
  GlobalChatSidebar: ut,
  useChatSidebar: wt,
  chatPanelMode: pn = "docked",
  chatPanelPosition: hn = "right",
  chatPanelWidth: kt = 420,
  onChatClose: eo,
  showAssistant: at = !1,
  assistantPlacement: Lt = "sidebar",
  assistantShortcut: Dt = "j",
  onAssistantClick: qe,
  assistantActive: ft = !1,
  assistantBusy: gn = !1,
  assistantLabel: to = "Nexa",
  customNavbar: bn,
  customNavbarProps: mt,
  redirectToLogin: pt,
  apiBaseUrl: Mt
}) => {
  const w = Hr(), P = Ne === "dark", Q = _e ?? "#01584f", H = Be ?? Q, X = Cr(
    typeof pe == "object" ? pe[Ne] : pe,
    P
  ), V = i === "collapsible", fe = i === "panel", Me = fe && r && !w, be = i === "rail-labeled", Oe = V || be, xe = qn(
    I,
    P
  ), ht = N ?? xe, Ae = ge ?? (P ? "#ffffff" : H), Pt = b ?? tn(Ae), Ft = N ? $o(ht) : Ae, ll = (M) => /* @__PURE__ */ o(
    "div",
    {
      role: "img",
      "aria-label": `${l} logo`,
      className: "lw:size-7 lw:shrink-0",
      style: {
        backgroundColor: M,
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
  ), xn = v ?? Ft, [rl, Bt] = Ue(
    null
  ), no = ((ie == null ? void 0 : ie.length) ?? 0) > 1, ss = po(() => Bt(null), []), as = (M) => {
    Bt(null), ye ? ye(M) : M.key !== he && M.url && window.location.assign(M.url);
  }, oo = !w && (nn(a, i) || !(V || fe)), sl = (M) => no ? /* @__PURE__ */ o(
    fc,
    {
      anchorEl: rl,
      onClose: ss,
      onOpen: Bt,
      hoverOpen: oo,
      platforms: ie,
      currentKey: he,
      onSelect: as,
      accentColor: Q,
      glass: a === "flyout" && (V || fe) && !w,
      children: M
    }
  ) : M, vn = no ? (M) => Bt(M.currentTarget) : g, yn = no ? !!rl : void 0, lo = sl(
    f ?? ll(xn)
  ), is = sl(
    f ?? ll(v ?? Ae)
  ), ro = zc(), ze = nn(a, i), Ge = ze || !ro.expanded, Le = r && !w && na(u, a, i), gt = Pc(Le), al = ze ? "popover" : "expand", il = ze ? en : Zt, cl = ze ? "transparent" : xe, dl = ze && !N ? "transparent" : ht, [cs, ul] = Ue(!1), ds = po(() => ul(!1), []), Ve = Ar({
    showSidebar: r,
    isMobile: w,
    sidebarVariant: i,
    sidebarSubmenu: a,
    sidebarAutoHide: u
  }), [wl, bt] = Ue(!1), [fl, so] = Ue(!1), De = w && d === "bottom-bar", ml = `calc(${Jr}px + env(safe-area-inset-bottom, 0px))`, [Ze, pl] = Ue({ open: !1, tab: "notifications" }), ao = () => pl((M) => ({ ...M, open: !1 })), hl = j && !!ue, gl = Sn(null), [io, us] = Ue(null), zt = po(() => {
    const M = w ? null : Hc(gl.current);
    us(
      (le) => le && M && le.left === M.left && le.top === M.top && le.height === M.height ? le : M
    );
  }, [w]);
  qt(() => {
    if (Ze.open)
      return zt(), window.addEventListener("resize", zt), () => window.removeEventListener("resize", zt);
  }, [Ze.open, zt]);
  const bl = (M) => {
    bt(!1), so(!1), zt(), pl({ open: !0, tab: M });
  }, it = Qn({
    open: Ze.open,
    onOpen: () => bl("notifications"),
    onClose: ao
  }), xl = hl ? it.triggerProps : void 0, We = gt.shown || Le && Ze.open && it.openedByHover, [ws, fs] = Ue(0), [ms, ps] = Ue(We);
  ms !== We && (ps(We), We || (fs((M) => M + 1), Bt(null)));
  const [hs, gs] = Ue(!0), [bs, xs] = Ue(!1), co = wt == null ? void 0 : wt(), vl = (co == null ? void 0 : co.isOpen) ?? !1, yl = pn === "floating" ? "floating" : "docked", vs = yl === "docked" && vl && ut && !w ? kt : 0, En = Sn(D), El = Sn(!1), Nl = Fs(
    () => di(Mt),
    [Mt]
  );
  qt(() => {
    En.current = D;
  }, [D]);
  const uo = Sn(qe);
  uo.current = qe;
  const Ht = at && Dt ? Dt.toLowerCase() : null;
  qt(() => {
    if (!Ht)
      return;
    const M = (le) => {
      (le.metaKey || le.ctrlKey) && !le.altKey && !le.shiftKey && le.key.toLowerCase() === Ht && uo.current && (le.preventDefault(), uo.current());
    };
    return window.addEventListener("keydown", M), () => window.removeEventListener("keydown", M);
  }, [Ht]);
  const Sl = (M) => {
    const le = O(M);
    le instanceof Promise && le.catch((Je) => {
      console.error("Error in logout handler:", Je);
    });
  };
  if (jc(() => {
    (() => {
      var le;
      try {
        const { isAuthenticated: Je } = ii();
        if (!Je) {
          console.log("No session found, redirecting to login"), cn(), pt();
          return;
        }
        if (!El.current) {
          const { user: Wt, error: mo } = ci();
          if (Wt && !mo) {
            const As = {
              name: Wt.name || "",
              email: Wt.email || "",
              profilePicture: Wt.profilePicture || "",
              role: Wt.role || ""
            };
            El.current = !0, (le = En.current) == null || le.call(En, As);
          } else
            mo && console.error("Error getting user data:", mo);
        }
        xs(!0);
      } catch (Je) {
        console.error("Error checking session:", Je), cn(), pt();
      } finally {
        gs(!1);
      }
    })();
  }, [pt]), qt(() => {
    C && ui(Nl, pt);
  }, [C, Nl]), hs || K)
    return /* @__PURE__ */ o(
      si,
      {
        theme: Ne,
        darkModeSelector: Te,
        sidebarVariant: i,
        sidebarSubmenu: a,
        sidebarAutoHide: u,
        showSidebar: r,
        contentPadding: x,
        sidebarBackgroundColor: I,
        contentBackgroundColor: pe,
        content: k
      }
    );
  if (!bs)
    return null;
  const Gt = m ?? (bn ? /* @__PURE__ */ o(bn, { ...mt }) : null), wo = ue && (() => bl("notifications")), ys = Z + J, _l = {
    avatarColor: H,
    // The standard menu only runs `onClick`, so path rows navigate here.
    menuItems: R == null ? void 0 : R.map(
      (M) => M.onClick || !M.path ? M : { ...M, onClick: () => L == null ? void 0 : L(M.path) }
    ),
    showNotifications: j,
    notificationCount: Z,
    whatsNewCount: J,
    onNotificationsClick: wo,
    notificationsTriggerProps: xl,
    notificationsOpen: Ze.open,
    showProfile: G,
    userName: ee,
    userRole: B,
    userAvatar: A,
    showSettings: q,
    onSettingsClick: W,
    showThemeToggler: tt,
    theme: Ne,
    onThemeToggle: mn,
    onLogout: Sl
  }, fo = (M, le = !1) => /* @__PURE__ */ o(
    Nc,
    {
      ..._l,
      compact: M,
      hoverOpen: le,
      color: Ae,
      hoverColor: Pt
    }
  ), Rl = Ht ? [cr() ? "⌘" : "Ctrl", Ht.toUpperCase()] : void 0, Es = (M) => at && Lt === "sidebar" ? /* @__PURE__ */ o(
    ql,
    {
      variant: M ? "sidebar-icon" : "sidebar",
      onClick: qe,
      active: ft,
      busy: gn,
      shortcutKeys: Rl,
      accentColor: Ae
    }
  ) : null, Ns = S ? [cr() ? "⌘" : "Ctrl", S.toUpperCase()] : void 0, Ss = (M) => Gt ? /* @__PURE__ */ o(
    Ic,
    {
      search: Gt,
      icon: h,
      mode: M,
      onExpand: () => {
        ro.pin(), ul(!0);
      },
      autoFocus: cs,
      onAutoFocused: ds,
      color: Ae,
      hoverColor: Pt,
      shortcutKeys: Ns
    }
  ) : null, Nn = (M) => {
    const le = Es(M !== "full"), Je = Ss(M);
    return le || Je ? /* @__PURE__ */ E(
      "div",
      {
        className: y(
          "lw:flex lw:flex-col",
          M === "full" ? "lw:items-stretch" : "lw:items-center"
        ),
        style: { gap: ze ? Yn : 12 },
        children: [
          le,
          ze && le && Je ? /* @__PURE__ */ o(
            "div",
            {
              role: "separator",
              className: "lw:w-full lw:border-t lw:border-solid",
              style: {
                borderTopColor: tn(Ae)
              }
            }
          ) : null,
          Je
        ]
      }
    ) : void 0;
  }, Tl = () => /* @__PURE__ */ o(
    Do,
    {
      mainLinks: t,
      secondaryLinks: n,
      activePath: F,
      onLinkClick: L,
      showHeaderBar: V,
      logo: lo,
      title: l,
      onBrandClick: vn,
      brandMenuOpen: yn,
      brandColor: xn,
      headerBackgroundColor: V ? dl : void 0,
      headerForegroundColor: V ? Ft : void 0,
      activeAccentColor: H,
      activeBackgroundColor: ce,
      groupArrowColor: Re,
      groupAccentColor: b,
      activeForegroundColor: T,
      foregroundColor: ge,
      surfaceBackgroundColor: cl,
      flyoutSurfaceColor: xe,
      collapsed: be || Ge,
      showLabels: be,
      expandedWidth: Co,
      collapsedWidth: be ? Nr : il,
      topContent: Nn(
        be ? "popover" : Ge ? al : "full"
      ),
      footer: fo(
        be || Ge,
        oo
      ),
      submenuMode: ze ? "flyout" : "inline"
    }
  ), Al = (M) => ze ? _s(M) : Rs(M), _s = (M) => /* @__PURE__ */ E(
    "aside",
    {
      ...Le ? gt.rootProps : {},
      "data-auto-hide": Le ? "true" : void 0,
      "data-shown": Le ? String(We) : void 0,
      className: y(
        // Above the page, including its sticky app bars
        "lw:top-0 lw:z-[1101] lw:h-screen",
        Le ? "lw:pointer-events-none lw:fixed lw:left-0" : "lw:sticky lw:shrink-0 lw:self-start"
      ),
      style: Le ? {
        width: en + 2 * lt
      } : {
        width: Ve,
        minWidth: Ve,
        backgroundColor: X
      },
      children: [
        Le && /* @__PURE__ */ o(
          "div",
          {
            "data-testid": "sidebar-edge-reveal",
            "aria-hidden": "true",
            className: "lw:pointer-events-auto lw:absolute lw:inset-y-0 lw:left-0",
            style: { width: Uc }
          }
        ),
        Le && /* @__PURE__ */ o(
          "div",
          {
            ref: gt.glowRef,
            "data-testid": "sidebar-edge-glow",
            "data-visible": String(gt.nearEdge && !We),
            "aria-hidden": "true",
            className: "lw:pointer-events-none lw:absolute lw:inset-y-0 lw:left-0 lw:transition-opacity lw:duration-200 lw:ease-[ease]",
            style: {
              "--edge-glow-y": "50%",
              width: ir,
              // A pool of light at the edge, where the pointer is
              background: `radial-gradient(${ir}px ${Oo}px at 0 var(--edge-glow-y), ${st(Ae, P ? 0.5 : 0.4)}, ${st(Ae, 0)})`,
              opacity: gt.nearEdge && !We ? 1 : 0
            },
            children: /* @__PURE__ */ o(
              "span",
              {
                className: "lw:absolute lw:inset-y-0 lw:left-0 lw:w-[3px]",
                style: {
                  background: `linear-gradient(180deg, transparent calc(var(--edge-glow-y) - ${Oo}px), ${st(Ae, P ? 0.95 : 0.85)} var(--edge-glow-y), transparent calc(var(--edge-glow-y) + ${Oo}px))`
                }
              }
            )
          }
        ),
        /* @__PURE__ */ E(
          "div",
          {
            "data-testid": "sidebar-hover-panel",
            "data-expanded": "false",
            "data-glass": "true",
            "data-rail-surface": "",
            className: y(
              "lw:absolute lw:flex lw:flex-col",
              Le && br,
              Ee
            ),
            style: {
              top: lt,
              bottom: lt,
              left: lt,
              width: en,
              borderRadius: _r,
              ...Le && {
                pointerEvents: We ? "auto" : "none",
                opacity: We ? 1 : 0,
                transform: We ? "none" : `translateX(calc(-100% - ${2 * lt}px))`,
                transition: Xc
              },
              ...U
            },
            children: [
              /* @__PURE__ */ o(
                Jn,
                {
                  isDark: P,
                  solid: xe,
                  className: "lw:absolute lw:inset-0",
                  style: { borderRadius: "inherit" }
                }
              ),
              /* @__PURE__ */ o(
                "div",
                {
                  className: "lw:relative lw:flex lw:min-h-0 lw:flex-auto lw:flex-col lw:overflow-hidden",
                  style: { borderRadius: "inherit" },
                  children: M
                },
                ws
              )
            ]
          }
        )
      ]
    }
  ), Rs = (M) => /* @__PURE__ */ o(
    "aside",
    {
      className: "lw:sticky lw:top-0 lw:z-[1101] lw:h-screen lw:shrink-0 lw:self-start",
      style: {
        width: Zt,
        minWidth: Zt
      },
      children: /* @__PURE__ */ o(
        "div",
        {
          ...ze ? {} : ro.rootProps,
          "data-testid": "sidebar-hover-panel",
          "data-expanded": Ge ? "false" : "true",
          className: y(
            "lw:absolute lw:top-0 lw:left-0 lw:flex lw:h-full lw:flex-col lw:overflow-hidden lw:border-r lw:border-solid lw:border-border",
            Ee
          ),
          style: {
            width: Ge ? Zt : Co,
            backgroundColor: xe,
            boxShadow: Ge ? "none" : `4px 0 24px rgba(0, 0, 0, ${P ? 0.5 : 0.12})`,
            transition: Wc,
            ...U
          },
          children: M
        }
      )
    }
  ), Ts = Tr(x), ct = w || !io ? null : Le && !it.openedByHover ? { ...io, left: lt } : io;
  return /* @__PURE__ */ o(mr.Provider, { value: Ne, children: /* @__PURE__ */ o(xr.Provider, { value: H, children: /* @__PURE__ */ o(Kn.Provider, { value: xe, children: /* @__PURE__ */ o(es.Provider, { value: _, children: /* @__PURE__ */ E(
    "div",
    {
      ref: gl,
      "data-lw-scope": "",
      "data-lw-theme": Ne,
      className: y("lw:flex lw:min-h-screen", ne),
      style: Y,
      children: [
        w && /* @__PURE__ */ o(
          Vi,
          {
            height: Mn,
            onMenuClick: r && !De ? () => bt(!0) : void 0,
            appName: l,
            logo: lo,
            onBrandClick: vn,
            brandMenuOpen: yn,
            background: ht,
            color: Ft,
            brandColor: xn,
            endContent: j ? /* @__PURE__ */ o(
              nl,
              {
                count: ys,
                onClick: wo,
                color: Ft,
                hoverColor: Pt,
                tooltipPlacement: "bottom",
                testId: "mobile-notifications"
              }
            ) : void 0
          }
        ),
        r && !w && be && /* @__PURE__ */ o(
          "aside",
          {
            className: y(
              "lw:sticky lw:top-0 lw:z-[2] lw:flex lw:h-screen lw:shrink-0 lw:flex-col lw:self-start lw:border-r lw:border-solid lw:border-border",
              Ee
            ),
            style: {
              width: Ve,
              minWidth: Ve,
              ...U
            },
            children: Tl()
          }
        ),
        r && !w && V && Al(
          /* @__PURE__ */ E(ve, { children: [
            Tl(),
            (z == null ? void 0 : z.show) && !Ge && /* @__PURE__ */ o($n, { ...z })
          ] })
        ),
        Me && Al(
          /* @__PURE__ */ E(ve, { children: [
            /* @__PURE__ */ o(
              yc,
              {
                mainLinks: t,
                secondaryLinks: n,
                activePath: F,
                onLinkClick: L,
                logo: lo,
                title: l,
                onBrandClick: vn,
                brandMenuOpen: yn,
                brandColor: xn,
                headerBackgroundColor: dl,
                headerForegroundColor: Ft,
                activeAccentColor: H,
                activeBackgroundColor: ce,
                groupArrowColor: Re,
                groupAccentColor: b,
                activeForegroundColor: T,
                foregroundColor: ge,
                surfaceBackgroundColor: cl,
                flyoutSurfaceColor: xe,
                collapsed: Ge,
                expandedWidth: Co,
                collapsedWidth: il,
                topContent: Nn(
                  Ge ? al : "full"
                ),
                submenuMode: ze ? "flyout" : "inline",
                color: Ae,
                hoverColor: Pt,
                avatarColor: H,
                showProfile: G,
                userName: ee,
                userEmail: $,
                userRole: B,
                userAvatar: A,
                showNotifications: j,
                notificationCount: Z,
                onNotificationsClick: hl ? wo : te,
                notificationsTriggerProps: xl,
                notificationsOpen: Ze.open,
                whatsNewCount: J,
                onProfileClick: oe,
                onAiUsageClick: me,
                menuItems: R,
                onLogout: Sl,
                theme: Ne,
                showThemeToggler: tt,
                onThemeToggle: mn
              }
            ),
            (z == null ? void 0 : z.show) && !Ge && /* @__PURE__ */ o($n, { ...z })
          ] })
        ),
        r && !w && !Oe && !fe && // The fixed rail: a permanent drawer, its column fixed
        // to the window's left edge
        /* @__PURE__ */ o(
          "div",
          {
            "data-slot": "rail-drawer",
            className: y(
              "lw:z-[2] lw:shrink-0",
              Ee
            ),
            style: {
              width: Ve,
              ...U
            },
            children: /* @__PURE__ */ E(
              "aside",
              {
                "data-slot": "rail-drawer-paper",
                className: "lw:fixed lw:top-0 lw:left-0 lw:z-[1200] lw:flex lw:h-full lw:flex-col lw:overflow-y-auto lw:px-3 lw:pt-4",
                style: {
                  width: Ve,
                  backgroundColor: X
                },
                children: [
                  /* @__PURE__ */ o("div", { className: "lw:mb-3 lw:flex lw:justify-center", children: /* @__PURE__ */ o(
                    Hn,
                    {
                      logo: is,
                      appName: l,
                      onClick: vn,
                      menuOpen: yn,
                      color: v ?? Ae,
                      testId: "sidebar-header-brand"
                    }
                  ) }),
                  Nn("popover"),
                  /* @__PURE__ */ E("div", { className: "lw:mt-2 lw:flex lw:min-h-0 lw:flex-auto lw:flex-col lw:overflow-y-auto", children: [
                    /* @__PURE__ */ o(
                      Li,
                      {
                        mainLinks: t,
                        secondaryLinks: n,
                        activePath: F,
                        onLinkClick: L,
                        accentColor: H,
                        surfaceBackgroundColor: X,
                        railShowTitles: s
                      }
                    ),
                    (z == null ? void 0 : z.show) && /* @__PURE__ */ o(
                      $n,
                      {
                        ...z
                      }
                    )
                  ] }),
                  /* @__PURE__ */ o("div", { className: "lw:py-3", children: fo(
                    !0,
                    oo
                  ) })
                ]
              }
            )
          }
        ),
        r && w && /* @__PURE__ */ o(
          Fo,
          {
            open: wl,
            onOpenChange: bt,
            children: /* @__PURE__ */ E(
              Wn,
              {
                side: De ? "bottom" : "left",
                "aria-label": "Navigation",
                srTitle: "Navigation",
                overlayClassName: "lw:z-[1201]",
                className: y(
                  "lw:z-[1201] lw:overflow-y-auto lw:border-0",
                  De ? "lw:max-h-[min(80vh,640px)] lw:rounded-t-2xl lw:pb-[env(safe-area-inset-bottom,0px)]" : "lw:max-w-[85vw]"
                ),
                style: {
                  backgroundColor: xe
                },
                children: [
                  De && // Grab handle, marking the sheet as one that closes downwards
                  /* @__PURE__ */ o(
                    "div",
                    {
                      "aria-hidden": "true",
                      className: "lw:mx-auto lw:mt-2 lw:mb-1 lw:h-1 lw:w-9 lw:shrink-0 lw:rounded-[2px] lw:bg-border"
                    }
                  ),
                  /* @__PURE__ */ o(
                    Do,
                    {
                      mainLinks: t,
                      secondaryLinks: n,
                      activePath: F,
                      onLinkClick: (M) => {
                        L == null || L(M), bt(!1);
                      },
                      onLinkAction: () => bt(!1),
                      collapsed: !1,
                      expandedWidth: De ? "100%" : Gc,
                      activeAccentColor: H,
                      activeBackgroundColor: ce,
                      groupArrowColor: Re,
                      groupAccentColor: b,
                      activeForegroundColor: T,
                      foregroundColor: ge,
                      surfaceBackgroundColor: xe,
                      topInsetPx: De ? 8 : 0,
                      topContent: De ? void 0 : Nn("full"),
                      footer: De ? void 0 : fo(!1)
                    }
                  ),
                  (z == null ? void 0 : z.show) && /* @__PURE__ */ o($n, { ...z })
                ]
              }
            )
          }
        ),
        De && Gt && /* @__PURE__ */ o(
          Yi,
          {
            open: fl,
            onClose: () => so(!1),
            search: Gt
          }
        ),
        De && /* @__PURE__ */ o(
          Xi,
          {
            ..._l,
            pinnedLinks: p,
            activePath: F,
            onLinkClick: L,
            onMenuClick: r ? () => bt(!0) : void 0,
            menuOpen: wl,
            onSearchClick: Gt ? () => so(!0) : void 0,
            searchOpen: fl,
            showAssistant: at,
            assistantLabel: to,
            onAssistantClick: qe,
            assistantActive: ft,
            showProfile: G,
            background: xe,
            color: Ae,
            activeColor: H,
            activeBackground: Pt
          }
        ),
        /* @__PURE__ */ o(
          "main",
          {
            "data-lw-host": "",
            className: y(
              "lw-content-padding lw:grow",
              we
            ),
            style: {
              ...Ts,
              // Where sticky page elements should pin (below the mobile bar)
              "--lumora-sticky-top": w ? `${Mn}px` : "0px",
              padding: "var(--lumora-content-padding)",
              width: Ve ? `calc(100% - ${Ve}px)` : "100%",
              marginTop: w ? `${Mn}px` : 0,
              // Keep the last content clear of the bottom bar
              ...De && {
                paddingBottom: `calc(var(--lumora-content-padding) + ${ml})`
              },
              backgroundColor: X,
              ...ae
            },
            children: e
          }
        ),
        ut && /* @__PURE__ */ o(
          Ei,
          {
            open: vl,
            variant: yl,
            position: hn,
            width: kt,
            sidebarWidthPx: Ve,
            bottomOffsetPx: at && Lt === "floating" ? Kc : 0,
            fullScreen: w,
            fullScreenBottom: De ? ml : "0px",
            onClose: eo,
            children: /* @__PURE__ */ o(ut, {})
          }
        ),
        at && Lt === "floating" && !De && /* @__PURE__ */ o(
          ql,
          {
            variant: "floating",
            rightOffsetPx: vs,
            shortcutKeys: Rl,
            onClick: qe,
            active: ft,
            busy: gn
          }
        ),
        j && ue && /* @__PURE__ */ o(
          Fo,
          {
            open: Ze.open,
            modal: !it.openedByHover,
            onOpenChange: (M) => {
              M || ao();
            },
            children: /* @__PURE__ */ o(
              Wn,
              {
                ...it.contentProps,
                onMouseOver: Le && it.openedByHover ? gt.rootProps.onMouseOver : void 0,
                onOpenAutoFocus: (M) => {
                  it.openedByHover && M.preventDefault();
                },
                side: ct ? "left" : "right",
                srTitle: "Updates",
                className: ct ? "lw-slide-from-edge lw:overflow-hidden lw:rounded-lg lw:border-0" : "lw:overflow-hidden lw:rounded-l-lg lw:border-0",
                style: ct ? {
                  width: 380,
                  maxWidth: `calc(100vw - ${ct.left}px)`,
                  left: ct.left,
                  top: ct.top,
                  height: ct.height
                } : {
                  width: 380,
                  maxWidth: "100vw"
                },
                children: /* @__PURE__ */ o(
                  "div",
                  {
                    "data-lw-host": "",
                    className: "lw:flex lw:min-h-0 lw:flex-1 lw:flex-col",
                    children: /* @__PURE__ */ o(
                      ue,
                      {
                        onClose: ao,
                        initialTab: Ze.tab
                      },
                      Ze.tab
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
}, ad = Yc, Pe = {
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
}, Fe = {
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
}, Et = {
  300: "hsl(0, 90%, 65%)",
  400: "hsl(0, 90%, 40%)",
  500: "hsl(0, 90%, 30%)",
  700: "hsl(0, 94%, 18%)",
  800: "hsl(0, 95%, 12%)"
}, Nt = (e, t) => {
  const n = /^hsl\((.+)\)$/.exec(e);
  if (n)
    return `hsla(${n[1]}, ${t})`;
  const l = /^#([0-9a-f]{6})$/i.exec(e);
  if (l) {
    const r = parseInt(l[1], 16);
    return `rgba(${r >> 16 & 255}, ${r >> 8 & 255}, ${r & 255}, ${t})`;
  }
  return e;
}, He = (e) => `${e / 16}rem`, re = (...e) => [
  `${e[0]}px ${e[1]}px ${e[2]}px ${e[3]}px rgba(0,0,0,0.2)`,
  `${e[4]}px ${e[5]}px ${e[6]}px ${e[7]}px rgba(0,0,0,0.14)`,
  `${e[8]}px ${e[9]}px ${e[10]}px ${e[11]}px rgba(0,0,0,0.12)`
].join(","), qc = [
  "none",
  re(0, 2, 1, -1, 0, 1, 1, 0, 0, 1, 3, 0),
  re(0, 3, 1, -2, 0, 2, 2, 0, 0, 1, 5, 0),
  re(0, 3, 3, -2, 0, 3, 4, 0, 0, 1, 8, 0),
  re(0, 2, 4, -1, 0, 4, 5, 0, 0, 1, 10, 0),
  re(0, 3, 5, -1, 0, 5, 8, 0, 0, 1, 14, 0),
  re(0, 3, 5, -1, 0, 6, 10, 0, 0, 1, 18, 0),
  re(0, 4, 5, -2, 0, 7, 10, 1, 0, 2, 16, 1),
  re(0, 5, 5, -3, 0, 8, 10, 1, 0, 3, 14, 2),
  re(0, 5, 6, -3, 0, 9, 12, 1, 0, 3, 16, 2),
  re(0, 6, 6, -3, 0, 10, 14, 1, 0, 4, 18, 3),
  re(0, 6, 7, -4, 0, 11, 15, 1, 0, 4, 20, 3),
  re(0, 7, 8, -4, 0, 12, 17, 2, 0, 5, 22, 4),
  re(0, 7, 8, -4, 0, 13, 19, 2, 0, 5, 24, 4),
  re(0, 7, 9, -4, 0, 14, 21, 2, 0, 5, 26, 4),
  re(0, 8, 9, -5, 0, 15, 22, 2, 0, 6, 28, 5),
  re(0, 8, 10, -5, 0, 16, 24, 2, 0, 6, 30, 5),
  re(0, 8, 11, -5, 0, 17, 26, 2, 0, 6, 32, 5),
  re(0, 9, 11, -5, 0, 18, 28, 2, 0, 7, 34, 6),
  re(0, 9, 12, -6, 0, 19, 29, 2, 0, 7, 36, 6),
  re(0, 10, 13, -6, 0, 20, 31, 3, 0, 8, 38, 7),
  re(0, 10, 13, -6, 0, 21, 33, 3, 0, 8, 40, 7),
  re(0, 10, 14, -6, 0, 22, 35, 3, 0, 8, 42, 7),
  re(0, 11, 14, -7, 0, 23, 36, 3, 0, 9, 44, 8),
  re(0, 11, 15, -7, 0, 24, 38, 3, 0, 9, 46, 8)
], id = (e) => {
  const t = e === "dark", n = [...qc];
  return n[1] = t ? "hsla(220, 30%, 5%, 0.7) 0px 4px 16px 0px, hsla(220, 25%, 10%, 0.8) 0px 8px 16px -5px" : "hsla(220, 30%, 5%, 0.07) 0px 4px 16px 0px, hsla(220, 25%, 10%, 0.07) 0px 8px 16px -5px", {
    palette: {
      mode: e,
      primary: {
        light: t ? Pe[300] : Pe[200],
        main: Pe[400],
        dark: Pe[700],
        contrastText: Pe[50]
      },
      info: t ? {
        light: Pe[500],
        main: Pe[700],
        dark: Pe[900],
        contrastText: Pe[300]
      } : {
        light: Pe[100],
        main: Pe[300],
        dark: Pe[600],
        contrastText: Fe[50]
      },
      warning: t ? { light: yt[400], main: yt[500], dark: yt[700] } : { light: yt[300], main: yt[400], dark: yt[800] },
      error: t ? { light: Et[400], main: Et[500], dark: Et[700] } : { light: Et[300], main: Et[400], dark: Et[800] },
      success: t ? { light: vt[400], main: vt[500], dark: vt[700] } : { light: vt[300], main: vt[400], dark: vt[800] },
      grey: Fe,
      divider: t ? Nt(Fe[700], 0.6) : Nt(Fe[300], 0.4),
      background: t ? { default: Fe[900], paper: "hsl(220, 30%, 7%)" } : { default: "hsl(0, 0%, 99%)", paper: "hsl(220, 35%, 97%)" },
      text: t ? { primary: "hsl(0, 0%, 100%)", secondary: Fe[400] } : { primary: Fe[800], secondary: Fe[600] },
      action: t ? {
        hover: Nt(Fe[600], 0.2),
        selected: Nt(Fe[600], 0.3)
      } : {
        hover: Nt(Fe[200], 0.2),
        selected: Nt(Fe[200], 0.3)
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
  se as AuthError,
  Do as CollapsibleSidebar,
  rd as FullBleedSection,
  Qa as Kbd,
  si as LumoraShellSkeleton,
  ad as LumoraWrapper,
  cn as clearAuthTokens,
  ad as default,
  sd as getAuthErrorMessage,
  an as getAuthTokens,
  ci as getCurrentUser,
  id as getDesignTokens,
  ii as isAuthenticated,
  Mo as logAuthError,
  Wr as storeAuthTokens
};
