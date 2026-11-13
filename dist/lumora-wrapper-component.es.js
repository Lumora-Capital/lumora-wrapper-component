import { jsx as o, jsxs as y, Fragment as xe } from "react/jsx-runtime";
import { ChevronRightIcon as Os, ChevronUpIcon as Is, ChevronDownIcon as $s, SparklesIcon as ks, BellIcon as ur, SettingsIcon as Ls, LogOutIcon as wr, MenuIcon as fr, SearchIcon as Wo, CheckIcon as Ds, SunMoonIcon as Ms, SunIcon as Ps, MoonIcon as Fs } from "lucide-react";
import * as c from "react";
import { useState as Ue, useCallback as ho, useRef as Sn, useEffect as Vt, useMemo as Bs, useLayoutEffect as zs } from "react";
import { clsx as Hs } from "clsx";
import { extendTailwindMerge as Ws } from "tailwind-merge";
import { Tooltip as At, Slot as Gs, Popover as zn, DropdownMenu as It, Dialog as Zt } from "radix-ui";
import { createPortal as mr } from "react-dom";
import Ol from "axios";
import { cva as Us } from "class-variance-authority";
const Xs = Ws({ prefix: "lw" });
function x(...e) {
  return Xs(Hs(e));
}
const Il = "lw:flex lw:flex-row lw:items-center lw:gap-2 lw:min-w-0 lw:shrink-0 lw:[&_svg]:text-inherit lw:[&_svg]:fill-current", Ks = ({
  logo: e,
  title: t,
  appName: n,
  onClick: l,
  color: r,
  testId: s,
  menuOpen: i
}) => {
  const a = /* @__PURE__ */ y(xe, { children: [
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
      className: x(
        Il,
        "lw:cursor-pointer lw:rounded-lg lw:px-1 lw:-mx-1 lw:outline-none lw:hover:bg-accent lw:focus-visible:outline-2 lw:focus-visible:outline-solid lw:focus-visible:outline-offset-2 lw:focus-visible:outline-(--lw-brand-color)"
      ),
      style: { color: r, "--lw-brand-color": r },
      children: a
    }
  ) : /* @__PURE__ */ o("div", { "data-testid": s, className: Il, style: { color: r }, children: a });
}, Hn = Ks, pr = c.createContext(void 0), js = () => typeof document < "u" && document.documentElement.getAttribute("data-color-scheme") === "dark", Ys = (e) => {
  if (typeof MutationObserver > "u" || typeof document > "u")
    return () => {
    };
  const t = new MutationObserver(e);
  return t.observe(document.documentElement, {
    attributes: !0,
    attributeFilter: ["data-color-scheme"]
  }), () => t.disconnect();
}, Ye = () => {
  const e = c.useContext(pr), t = c.useSyncExternalStore(
    Ys,
    js,
    () => !1
  );
  return e ? e === "dark" : t;
}, un = () => ({
  "data-lw-scope": "",
  "data-lw-theme": Ye() ? "dark" : "light"
}), hr = c.forwardRef(({ className: e, sideOffset: t = 4, arrow: n = !1, children: l, ...r }, s) => {
  const i = un();
  return /* @__PURE__ */ o(At.Portal, { children: /* @__PURE__ */ y(
    At.Content,
    {
      ref: s,
      ...i,
      "data-slot": "tooltip-content",
      sideOffset: t,
      className: x(
        "lw:z-[1500] lw:max-w-xs lw:rounded-md lw:bg-tooltip lw:px-2 lw:py-1 lw:text-xs lw:font-medium lw:text-tooltip-foreground lw:animate-in lw:fade-in-0 lw:zoom-in-95 lw:data-[state=closed]:animate-out lw:data-[state=closed]:fade-out-0 lw:data-[state=closed]:zoom-out-95",
        e
      ),
      ...r,
      children: [
        l,
        n ? /* @__PURE__ */ o(
          At.Arrow,
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
hr.displayName = "TooltipContent";
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
  disabled: m = !1,
  arrow: w = !1,
  disableHoverableContent: g = !0
}) {
  const f = e == null || e === "" || e === !1, [h, R] = c.useState(!1);
  (m || f) && h && R(!1);
  const _ = (v) => {
    s === void 0 && R(v), i == null || i(v);
  };
  return /* @__PURE__ */ o(
    At.Provider,
    {
      delayDuration: a,
      disableHoverableContent: g,
      children: /* @__PURE__ */ y(
        At.Root,
        {
          open: m || f ? !1 : s ?? h,
          onOpenChange: _,
          children: [
            /* @__PURE__ */ o(At.Trigger, { asChild: !0, children: t }),
            f ? null : /* @__PURE__ */ o(
              hr,
              {
                side: n,
                align: l,
                sideOffset: r,
                className: u,
                style: d,
                arrow: w,
                children: e
              }
            )
          ]
        }
      )
    }
  );
}
const go = (e, t) => (n) => {
  e == null || e(n), t(n);
}, qs = ({
  children: e,
  onOpenChange: t,
  ...n
}) => {
  const [l, r] = c.useState(!1), s = c.useRef(!1), i = c.useRef(!1), a = c.Children.only(e), u = c.cloneElement(a, {
    onPointerEnter: go(a.props.onPointerEnter, () => {
      s.current = !0;
    }),
    onPointerLeave: go(a.props.onPointerLeave, () => {
      s.current = !1, i.current = !1;
    }),
    onClickCapture: go(a.props.onClickCapture, () => {
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
}, Dn = qs, $o = !1, $t = (e) => e.button === 0 && !e.metaKey && !e.ctrlKey && !e.shiftKey && !e.altKey, Ct = (e) => {
  var t;
  return !!((t = e.subitems) != null && t.length);
}, Rt = (e, t) => e ? `${e}/${t.text}` : t.text, st = (e, t) => {
  var n;
  return t ? e.path && t === e.path ? !0 : ((n = e.subitems) == null ? void 0 : n.some((l) => st(l, t))) ?? !1 : !1;
}, Xe = (e, t) => !!(t && e.path === t), Go = (e, t) => (e ?? []).flatMap((n) => {
  const l = n.icon ?? t;
  return Ct(n) ? Go(n.subitems, l) : n.path ? [{ sub: n, icon: l }] : [];
}), ko = (e) => {
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
}, it = (e, t) => {
  const n = Xn(e);
  return n ? `rgba(${n[0]}, ${n[1]}, ${n[2]}, ${t})` : e;
}, Xn = (e) => {
  let t = e.trim().replace(/^#/, "");
  if (t.length === 3 && (t = t.split("").map((l) => l + l).join("")), t.length !== 6 || /[^0-9a-fA-F]/.test(t))
    return null;
  const n = parseInt(t, 16);
  return [n >> 16 & 255, n >> 8 & 255, n & 255];
}, gr = (e) => e.replace(/_/g, " ").split(/\s+/).filter(Boolean).join(" ").toUpperCase(), Uo = (e) => e ? "rgba(255, 255, 255, 0.12)" : "rgba(15, 23, 42, 0.1)", Vs = (e) => e ? "0 12px 32px -8px rgba(0, 0, 0, 0.6)" : "0 12px 32px -8px rgba(15, 23, 42, 0.18), 0 2px 6px rgba(15, 23, 42, 0.06)", Zs = "lw-tile-in", Ce = "lw-motion-none", br = "lw-motion-fade", xr = "lw-motion-fade-fast", et = 6, Xo = "9, 193, 174", vr = c.createContext(
  void 0
), Kn = c.createContext(
  void 0
), Ko = (e) => c.useContext(Kn) ?? e, jn = () => {
  const e = c.useContext(vr), t = e ? Xn(e) : null;
  return t ? t.join(", ") : Xo;
}, Js = (e, t, n = Xo) => ({
  // Solid: the surface colour, a hairline edge and a shadow
  className: "lw:relative",
  style: {
    backgroundColor: t,
    boxShadow: `${Vs(e)}, 0 0 0 1px ${Uo(e)}`
  }
}), jo = (e, t) => ({
  className: "lw:rounded-md lw:border lw:border-solid lw:px-2.5 lw:py-1.5 lw:text-[0.8125rem] lw:leading-[1.4] lw:font-semibold",
  style: {
    color: e ? "#ffffff" : "#0b1f1c",
    backgroundColor: t ?? (e ? "rgb(30, 36, 48)" : "#ffffff"),
    borderColor: Uo(e),
    boxShadow: e ? "0 6px 16px -6px rgba(0, 0, 0, 0.6)" : "0 6px 16px -6px rgba(15, 23, 42, 0.2)"
  }
}), yr = (e) => e ? "#ffffff" : "#0b1f1c", Yo = "lw-glass-grow", qo = "lw-content-in", Er = (e, t = Xo, n = `rgba(${t}, 0.2)`) => ({
  // Solid: a flat tint of the accent
  background: `rgba(${t}, ${e ? 0.2 : 0.12})`,
  boxShadow: "none"
}), Nr = (e, t, n = "solid") => n === "solid" ? { background: e, boxShadow: "none" } : {
  background: it(e, t ? 0.16 : 0.1),
  boxShadow: `inset 0 0 0 1px ${it(e, 0.45)}`
}, Qs = (e, t) => {
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
    const l = `inset 0 0 0 1px ${Uo(e)}`, r = e ? "rgba(255, 255, 255, 0.06)" : "#ffffff";
    return n({
      bg: e ? "rgba(255, 255, 255, 0.04)" : "#ffffff",
      shadow: l,
      hoverBg: r,
      focusBg: r,
      focusShadow: `${l}, 0 0 0 3px ${t}`
    });
  }
}, ea = 100, Sr = 80, Mn = 56, Jt = 72, nn = 64, Te = 44, Lo = 24, Yn = 4, at = 8, _r = 1.4, Rr = et, ta = nn + 2 * at, Tr = { xs: 2, md: "18px" }, na = ["xs", "sm", "md", "lg", "xl"], oa = 8, $l = (e) => typeof e == "number" ? `${e * oa}px` : e, Ar = (e) => typeof e == "object" ? Object.fromEntries(
  na.filter((t) => e[t] !== void 0).map((t) => [
    `--lw-cp-${t}`,
    $l(e[t])
  ])
) : { "--lw-cp-xs": $l(e) }, on = (e, t) => e === "flyout" && (t === "collapsible" || t === "panel"), la = (e, t, n) => e && on(t, n), Cr = ({
  showSidebar: e,
  isMobile: t,
  sidebarVariant: n,
  sidebarSubmenu: l,
  sidebarAutoHide: r = !1
}) => !e || t ? 0 : n === "rail-labeled" ? Sr : on(l, n) ? r ? 0 : nn + 2 * at : n === "collapsible" || n === "panel" ? Jt : ea, qn = (e, t) => e ?? (t ? "hsl(220, 30%, 7%)" : "#ffffff"), Or = (e, t) => e ?? (t ? "hsl(220, 35%, 9%)" : "#f2f9fc"), Ir = { stiffness: 320, damping: 24 }, $r = { stiffness: 320, damping: 28 }, Vo = { stiffness: 520, damping: 20 }, Zo = { stiffness: 380, damping: 36 }, Vn = { stiffness: 260, damping: 28 }, ra = "cubic-bezier(0.32, 1.28, 0.52, 1)", sa = 420, kl = 60, aa = (() => {
  try {
    return typeof CSS < "u" && typeof CSS.supports == "function" && CSS.supports("animation-timing-function", "linear(0, 1)");
  } catch {
    return !1;
  }
})(), Ll = /* @__PURE__ */ new Map(), Oe = ({
  stiffness: e,
  damping: t,
  mass: n = 1
}) => {
  const l = `${e}/${t}/${n}`, r = Ll.get(l);
  if (r)
    return r;
  if (!aa)
    return { easing: ra, duration: sa };
  const s = 1 / 600;
  let i = 0, a = 0, u = 0, d = 1 / kl;
  const m = [0];
  for (; u < 3; ) {
    const g = (-e * (i - 1) - t * a) / n;
    if (a += g * s, i += a * s, u += s, u >= d && (m.push(i), d += 1 / kl, Math.abs(i - 1) < 1e-3 && Math.abs(a) < 0.01))
      break;
  }
  m[m.length - 1] = 1;
  const w = {
    easing: `linear(${m.map((g) => Number(g.toFixed(4))).join(", ")})`,
    duration: Math.round(u * 1e3)
  };
  return Ll.set(l, w), w;
}, ln = (e) => !!(e && typeof e.animate == "function"), kt = () => typeof window < "u" && typeof window.matchMedia == "function" && window.matchMedia("(prefers-reduced-motion: reduce)").matches, ia = (e) => {
  !e || typeof e.getAnimations != "function" || e.getAnimations({ subtree: !1 }).forEach((t) => t.cancel());
}, ca = (e, t = 1.14) => {
  if (!ln(e) || kt())
    return;
  const n = Oe(Vo);
  e.animate(
    [
      { transform: "scale(1)", easing: "cubic-bezier(0.2, 0, 0, 1)" },
      { transform: `scale(${t})`, offset: 0.18, easing: n.easing },
      { transform: "scale(1)" }
    ],
    { duration: Math.round(n.duration / 0.82) }
  );
}, da = 1.6, kr = 110, rn = 110, ua = 6, lt = Oe(Zo), wa = (e, t = kr) => e >= t ? 0 : (1 + Math.cos(Math.PI * e / t)) / 2, Lr = (e, t) => {
  const { offsetWidth: n, offsetHeight: l } = e;
  if (!(n > 0 && l > 0))
    return 1 / 0;
  const r = t.getBoundingClientRect(), s = r.left + t.clientLeft, i = r.top + t.clientTop, a = e.getBoundingClientRect(), u = a.left + a.width / 2, d = a.top + a.height / 2, m = Math.min(
    u - n / 2 - s,
    s + t.clientWidth - (u + n / 2)
  ), w = Math.min(
    d - l / 2 - i,
    i + t.clientHeight - (d + l / 2)
  );
  return Math.min(1 + 2 * m / n, 1 + 2 * w / l);
}, Dr = (e, {
  enabled: t,
  axis: n,
  itemSelector: l,
  glyphSelector: r,
  transition: s,
  maxScale: i = da,
  reach: a = kr,
  carrierSelector: u,
  spacing: d = 0,
  hoveredOnly: m = !1,
  boundsRef: w
}) => {
  const g = c.useRef(0), f = c.useRef(
    /* @__PURE__ */ new WeakMap()
  ), h = c.useRef(/* @__PURE__ */ new Set()), R = c.useRef(null), _ = (A) => {
    var $;
    R.current !== A && (($ = R.current) == null || $.removeAttribute("data-dock-hovered"), A == null || A.setAttribute("data-dock-hovered", ""), R.current = A);
  }, v = c.useRef(/* @__PURE__ */ new Set()), E = s ? `, ${s}` : "", S = m ? `${lt.duration}ms ${lt.easing}` : `${rn}ms ease-out`, I = (A) => u ? A.closest(u) : null, N = (A) => {
    const [$ = "0", B = "0"] = A.split(" ").filter(Boolean);
    return n === "x" ? parseFloat($) || 0 : parseFloat(B) || 0;
  }, b = (A) => {
    const $ = I(A);
    if (!$)
      return 0;
    const B = getComputedStyle($).translate;
    return N(
      B && B !== "none" ? B : $.style.translate
    );
  }, T = (A, $) => {
    var ee;
    const Z = (n === "x" ? A.offsetWidth : A.offsetHeight) * (Number(A.style.scale) || 1) / 2, k = C(A) + N(((ee = I(A)) == null ? void 0 : ee.style.translate) ?? "");
    return Math.max(0, Math.abs($ - k) - Z);
  }, C = (A) => {
    const $ = A.getBoundingClientRect();
    return (n === "x" ? $.left + $.width / 2 : $.top + $.height / 2) - b(A);
  }, K = (A) => {
    const $ = A.getBoundingClientRect();
    return Array.from(A.querySelectorAll(l)).filter((B) => {
      var V;
      const Z = (V = B.parentElement) == null ? void 0 : V.closest(l);
      if (Z && A.contains(Z))
        return !1;
      const k = B.getBoundingClientRect(), ee = C(B), we = n === "x" ? ee : k.left + k.width / 2, Y = n === "x" ? k.top + k.height / 2 : ee;
      return k.width > 0 && we >= $.left && we <= $.right && Y >= $.top && Y <= $.bottom;
    }).map((B) => ({
      item: B,
      glyph: r ? B.querySelector(r) : B
    })).filter(
      (B) => B.glyph !== null
    );
  }, D = (A, $) => {
    if ($ === A)
      return i;
    let B = f.current.get($);
    if (B === void 0) {
      const ee = Number($.style.scale) || 1, we = $.getBoundingClientRect();
      B = { width: we.width / ee, height: we.height / ee }, f.current.set($, B);
    }
    if (!(B.width > 0 && B.height > 0))
      return 1;
    const Z = A.getBoundingClientRect(), k = Math.min(
      Z.width / B.width,
      Z.height / B.height
    );
    return Math.max(1, Math.min(k, i));
  }, F = (A) => {
    const $ = w == null ? void 0 : w.current;
    return $ != null && $.contains(A) ? Lr(A, $) : 1 / 0;
  }, P = () => {
    var A, $, B, Z;
    cancelAnimationFrame(g.current), h.current.forEach((k) => {
      k.style.transition = `scale ${lt.duration}ms ${lt.easing}${E}`, k.style.scale = "";
    }), h.current.clear(), _(null), v.current.forEach((k) => {
      k.style.transition = `translate ${lt.duration}ms ${lt.easing}`, k.style.translate = "", k.style.removeProperty("--dock-scale");
    }), v.current.clear(), (A = e.current) == null || A.style.setProperty(
      "--dock-scale-timing",
      `${lt.duration}ms ${lt.easing}`
    ), ($ = e.current) == null || $.style.removeProperty("--dock-spread"), (B = e.current) == null || B.style.removeProperty("--dock-max-scale"), (Z = e.current) == null || Z.style.removeProperty("--dock-active-scale");
  }, G = (A, $, B) => {
    const Z = n === "x" ? $ : B, k = K(A).map(({ item: Y, glyph: V }) => {
      const fe = C(Y), J = m ? Y === R.current ? 1 : 0 : wa(Math.abs(Z - fe), a), me = 1 + (Math.max(1, Math.min(D(Y, V), F(V))) - 1) * J;
      V.style.transition = `scale ${S}${E}`, me > 1.001 ? (V.style.scale = me.toFixed(3), h.current.add(V)) : h.current.has(V) && (V.style.scale = "", h.current.delete(V));
      const pe = n === "x" ? Y.offsetWidth : Y.offsetHeight, ve = (me - 1) * pe + 2 * d * J;
      return { item: Y, centre: fe, scale: me, growth: ve };
    });
    A.style.setProperty("--dock-scale-timing", S), A.style.setProperty(
      "--dock-max-scale",
      Math.max(1, ...k.map(({ scale: Y }) => Y)).toFixed(3)
    );
    const ee = k.find(({ item: Y }) => Y.dataset.active === "true");
    if (A.style.setProperty(
      "--dock-active-scale",
      ((ee == null ? void 0 : ee.scale) ?? 1).toFixed(3)
    ), !u)
      return;
    const we = k.reduce((Y, { growth: V }) => Y + V, 0);
    A.style.setProperty("--dock-spread", `${we.toFixed(1)}px`), k.forEach(({ item: Y, centre: V, scale: fe, growth: J }) => {
      const te = I(Y);
      if (!te)
        return;
      const me = k.reduce(
        (pe, ve) => ve.centre < V ? pe + ve.growth : pe,
        J / 2
      );
      te.style.transition = `translate ${S}`, Math.abs(me) > 0.1 || fe > 1.001 ? (te.style.translate = n === "x" ? `${me.toFixed(1)}px 0` : `0 ${me.toFixed(1)}px`, te.style.setProperty("--dock-scale", fe.toFixed(3)), v.current.add(te)) : v.current.has(te) && (te.style.translate = "", te.style.removeProperty("--dock-scale"), v.current.delete(te));
    });
  }, oe = (A) => {
    if (A.pointerType && A.pointerType !== "mouse" || kt())
      return;
    const $ = A.currentTarget, { clientX: B, clientY: Z } = A;
    cancelAnimationFrame(g.current), g.current = requestAnimationFrame(() => {
      const k = $.getBoundingClientRect(), ee = n === "x" ? Z : B, [we, Y] = n === "x" ? [k.top, k.bottom] : [k.left, k.right];
      if (ee < we || ee > Y) {
        P();
        return;
      }
      if (m) {
        const V = n === "x" ? B : Z, fe = R.current;
        if (!(fe && $.contains(fe) && T(fe, V) <= ua)) {
          let te = null, me = 1 / 0;
          K($).forEach(({ item: pe }) => {
            const ve = T(pe, V);
            ve < me && (te = pe, me = ve);
          }), te && _(te);
        }
      }
      G($, B, Z);
    });
  }, z = (A) => {
    const $ = e.current;
    if (!t || !$ || kt())
      return;
    m && _(A);
    const B = A.getBoundingClientRect();
    G($, B.left + B.width / 2, B.top + B.height / 2);
  };
  return c.useEffect(() => {
    t || P();
  }, [t]), c.useEffect(() => () => cancelAnimationFrame(g.current), []), {
    containerProps: t ? { onPointerMove: oe, onPointerLeave: P, onScrollCapture: P } : {},
    swellOn: z,
    settle: P
  };
}, sn = "data-rail-item", Mr = `[${sn}], button, [role="button"]`, wn = c.createContext(!1), Jo = () => {
  const e = c.useContext(wn), t = Ye(), n = c.useContext(Kn);
  if (!e)
    return {};
  const l = jo(t, n);
  return {
    arrow: !1,
    contentClassName: l.className,
    contentStyle: l.style,
    sideOffset: 6
  };
}, Ot = Oe(Zo), Qo = ({
  enabled: e,
  isDark: t,
  selector: n,
  size: l,
  radius: r,
  pinSelector: s,
  pinKey: i = null
}) => {
  const a = c.useRef(null), u = jn(), [d, m] = c.useState(null), w = c.useRef(null), g = c.useRef(null), f = (N, b) => {
    g.current = b;
    const T = b.getBoundingClientRect(), C = N.getBoundingClientRect(), K = l ?? T.width, D = l ?? T.height, F = {
      top: Math.round(T.top - C.top + (T.height - D) / 2),
      left: Math.round(T.left - C.left + (T.width - K) / 2),
      width: Math.round(K),
      height: Math.round(D)
    };
    m(
      (P) => P && P.visible && P.top === F.top && P.left === F.left && P.width === F.width && P.height === F.height ? P : { ...F, visible: !0, instant: !(P != null && P.visible) }
    );
  }, h = (N, b) => {
    var C;
    const T = (C = b == null ? void 0 : b.closest) == null ? void 0 : C.call(b, n);
    return T && N.contains(T) ? T : null;
  }, R = (N) => {
    if (!e)
      return;
    const b = h(N.currentTarget, N.target);
    b && f(N.currentTarget, b);
  }, _ = (N) => {
    if (!e)
      return;
    const b = h(N.currentTarget, N.target);
    b && N.target.matches(":focus-visible") && f(N.currentTarget, b);
  }, v = () => {
    var T;
    const N = (T = a.current) == null ? void 0 : T.parentElement, b = s && (N == null ? void 0 : N.querySelector(s));
    return N && b ? { container: N, item: b } : null;
  }, E = () => {
    const N = v();
    if (N) {
      f(N.container, N.item);
      return;
    }
    g.current = null, m((b) => b != null && b.visible ? { ...b, visible: !1 } : b);
  };
  c.useEffect(() => {
    var b, T;
    if (!e)
      return;
    const N = v();
    N ? f(N.container, N.item) : (T = (b = a.current) == null ? void 0 : b.parentElement) != null && T.matches(":hover") || E();
  }, [e, i]);
  const S = (N) => {
    const b = N.relatedTarget;
    (!b || !N.currentTarget.contains(b)) && (N.currentTarget.matches(":hover") || E());
  };
  return c.useEffect(() => {
    const N = a.current;
    if (!(d != null && d.visible)) {
      w.current = null;
      return;
    }
    const b = w.current;
    if (w.current = d.top, !ln(N) || kt() || b === null || d.instant)
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
      { duration: Ot.duration, easing: "ease-out" }
    );
  }, [d == null ? void 0 : d.top, d == null ? void 0 : d.visible, d == null ? void 0 : d.instant]), {
    lens: e && d ? /* @__PURE__ */ o(
      "div",
      {
        ref: a,
        "aria-hidden": !0,
        "data-glass-lens": "",
        "data-visible": d.visible ? "true" : "false",
        className: x(
          "lw:pointer-events-none lw:absolute lw:top-0 lw:left-0",
          br
        ),
        style: {
          ...Er(t, u),
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
          transition: d.instant ? `opacity 160ms ease, scale var(--dock-scale-timing, ${rn}ms ease-out)` : `translate ${Ot.duration}ms ${Ot.easing}, width 220ms ease, height 220ms ease, opacity 160ms ease, scale var(--dock-scale-timing, ${rn}ms ease-out)`
        }
      }
    ) : null,
    // A scroll inside the container moves the items out from under it
    containerProps: e ? {
      onMouseOver: R,
      onMouseLeave: E,
      onFocus: _,
      onBlur: S,
      onScrollCapture: E
    } : {}
  };
}, fa = (e, t, n = null) => {
  const l = Qo({
    enabled: e,
    isDark: t,
    selector: Mr,
    // The rail's buttons exactly, so the hover sits on the item
    size: Te,
    radius: et,
    pinSelector: `[${sn}][data-open="true"]`,
    pinKey: n
  });
  return {
    ...l,
    lens: l.lens ? c.cloneElement(l.lens, {
      "data-testid": "sidebar-rail-lens"
    }) : null
  };
}, ma = (e, t) => {
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
}, Dl = ({
  enabled: e,
  isDark: t,
  color: n,
  containerRef: l
}) => {
  const r = c.useRef(null), [s, i] = c.useState(null), a = c.useRef(null), u = c.useCallback(
    (m) => {
      const w = l.current;
      if (!e || !w)
        return;
      const g = w.querySelector(
        `[${sn}][data-active="true"]`
      );
      if (!g) {
        i(
          (h) => h != null && h.visible ? { ...h, visible: !1 } : h
        );
        return;
      }
      const f = ma(g, w);
      i(
        (h) => h && h.visible && h.top === f.top && h.left === f.left && h.width === f.width && h.height === f.height ? h : {
          ...f,
          visible: !0,
          instant: m || !(h != null && h.visible)
        }
      );
    },
    [e, l]
  );
  return c.useLayoutEffect(() => {
    u(!1);
  }), c.useEffect(() => {
    const m = l.current;
    if (!e || !m)
      return;
    let w = 0;
    const g = () => {
      cancelAnimationFrame(w), w = requestAnimationFrame(() => u(!1));
    }, f = typeof ResizeObserver > "u" ? null : new ResizeObserver(() => u(!0));
    f == null || f.observe(m);
    const h = typeof MutationObserver > "u" ? null : new MutationObserver(g);
    return h == null || h.observe(m, {
      subtree: !0,
      childList: !0,
      attributes: !0,
      attributeFilter: ["data-active", "class", "hidden"]
    }), () => {
      cancelAnimationFrame(w), f == null || f.disconnect(), h == null || h.disconnect();
    };
  }, [e, l, u]), c.useEffect(() => {
    const m = r.current;
    if (!(s != null && s.visible)) {
      a.current = null;
      return;
    }
    const w = a.current;
    if (a.current = s.top, w === null || s.instant || !ln(m) || kt())
      return;
    const g = Math.min(Math.abs(s.top - w) / 600, 0.08);
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
  }, [s == null ? void 0 : s.top, s == null ? void 0 : s.visible, s == null ? void 0 : s.instant]), { glass: e && s ? /* @__PURE__ */ o(
    "div",
    {
      ref: r,
      "aria-hidden": !0,
      "data-active-glass": "",
      "data-testid": "sidebar-rail-active",
      "data-visible": s.visible ? "true" : "false",
      className: x(
        "lw:pointer-events-none lw:absolute lw:top-0 lw:left-0",
        br
      ),
      style: {
        ...Nr(n, t),
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
        transition: s.instant ? `opacity 160ms ease, scale var(--dock-scale-timing, ${rn}ms ease-out)` : `translate ${Ot.duration}ms ${Ot.easing}, width 220ms ease, height 220ms ease, opacity 160ms ease, scale var(--dock-scale-timing, ${rn}ms ease-out)`
      }
    }
  ) : null };
}, Ae = 52, pa = 2, ha = 10, ga = Ae / 2, bo = "[data-flyout-tile]", el = 4, tl = 32, Do = tl + el, ba = 104, Xt = 24, Pr = "background 160ms ease, color 160ms ease, transform 120ms ease", xa = 10, Fr = 10, Ml = Fr + 2, va = 18, Pl = 1.08, ya = (e) => {
  for (let t = e.parentElement; t; t = t.parentElement) {
    const { overflowY: n } = getComputedStyle(t);
    if (n === "auto" || n === "scroll")
      return t;
  }
  return null;
}, Ea = (e) => {
  const t = ya(e);
  if (!t)
    return Pl;
  const n = Lr(e, t);
  return Math.min(Pl, n / Math.min(n, _r));
}, Na = 1190, Sa = 1195, _a = 1355, Fl = 120, Ra = 220, Bl = 200, zl = 8, Hl = Oe(Ir), Ke = Oe(Zo), Wl = Oe(Vn), Gl = 8192, Ta = ({ left: e, top: t, width: n, height: l, radius: r }) => {
  const s = Math.min(r, n / 2, l / 2), i = e + n, a = t + l, u = `A ${s} ${s} 0 0 1`;
  return `path(evenodd, 'M 0 0 H ${Gl} V ${Gl} H 0 Z M ${e + s} ${t} H ${i - s} ${u} ${i} ${t + s} V ${a - s} ${u} ${i - s} ${a} H ${e + s} ${u} ${e} ${a - s} V ${t + s} ${u} ${e + s} ${t} Z')`;
}, Aa = ({
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
  accentColor: m,
  activeBackgroundColor: w,
  activeForegroundColor: g,
  solidSurface: f
}) => {
  var He;
  const h = Ye(), R = un(), _ = !!(e && n), v = c.useRef(null);
  e && t && (v.current = { group: e, key: t });
  const E = v.current, S = c.useRef(null);
  n && (S.current = { anchor: n, railEdge: l });
  const [I, N] = c.useState(_);
  _ && !I && N(!0);
  const [b, T] = c.useState(_);
  _ && !b && T(!0), c.useEffect(() => {
    if (_)
      return;
    const M = setTimeout(() => T(!1), Bl);
    return () => clearTimeout(M);
  }, [_]);
  const C = c.useRef(null), [K, D] = c.useState({
    x: 0,
    y: 0
  }), F = c.useCallback(() => {
    const M = S.current, H = C.current;
    if (!M || !H)
      return;
    const U = M.anchor.getBoundingClientRect(), j = H.offsetHeight, Q = Math.round(M.railEdge + xa), de = U.top + U.height / 2 - j / 2, he = window.innerHeight - j - zl, Ee = Math.round(
      Math.max(zl, Math.min(de, he))
    );
    D((Ne) => Ne.x === Q && Ne.y === Ee ? Ne : { x: Q, y: Ee });
  }, []);
  c.useLayoutEffect(() => {
    if (!I)
      return;
    F(), window.addEventListener("resize", F), window.addEventListener("scroll", F, !0);
    const M = typeof ResizeObserver > "u" || !C.current ? null : new ResizeObserver(F);
    return M && C.current && M.observe(C.current), () => {
      window.removeEventListener("resize", F), window.removeEventListener("scroll", F, !0), M == null || M.disconnect();
    };
  }, [I, F, n, l, t]), c.useEffect(() => {
    if (!n)
      return;
    const M = Ea(n);
    M > 1.001 && ca(n, M);
  }, [n]);
  const [P, G] = c.useState(!1);
  c.useEffect(() => {
    if (!_) {
      G(!1);
      return;
    }
    let M = 0;
    const H = requestAnimationFrame(() => {
      M = requestAnimationFrame(() => G(!0));
    });
    return () => {
      cancelAnimationFrame(H), cancelAnimationFrame(M);
    };
  }, [_]);
  const oe = c.useMemo(
    () => E ? Go(E.group.subitems, E.group.icon) : [],
    [E]
  ), z = c.useRef(null), A = Dr(z, {
    enabled: _,
    axis: "x",
    itemSelector: bo,
    transition: Pr,
    // A bigger swell than the rail's: the tiles are the destination
    maxScale: pa,
    // The neighbours make room as it grows, and a little more
    carrierSelector: '[role="menuitem"]',
    spacing: ha,
    // Only the tile under the pointer swells; the rest keep their size
    hoveredOnly: !0
  }), $ = c.useRef(void 0), B = c.useCallback((M) => {
    var Q;
    (Q = $.current) == null || Q.call($), $.current = void 0;
    const H = M == null ? void 0 : M.parentElement;
    if (!M || !H || typeof MutationObserver > "u")
      return;
    const U = () => {
      const de = M.offsetLeft - M.offsetWidth / 2, he = de + M.offsetWidth;
      let Ee = 0;
      const Ne = (ie, Se, be) => {
        ie < he && ie + Se > de && (Ee = Math.max(Ee, -be - Ml));
      };
      H.querySelectorAll(bo).forEach((ie) => {
        const Se = parseFloat(ie.style.scale) || 1, be = (Se - 1) * Ae / 2, ge = ie.closest('[role="menuitem"]'), ye = parseFloat((ge == null ? void 0 : ge.style.translate) ?? "") || 0;
        Ne(
          ie.offsetLeft + ye - be,
          Se * Ae,
          ie.offsetTop - be
        );
        const De = ge == null ? void 0 : ge.querySelector("[data-flyout-name]"), tt = De == null ? void 0 : De.parentElement;
        De && tt && ie.dataset.flyoutNameSide === "above" && Ne(
          tt.offsetLeft + ye,
          De.offsetWidth,
          tt.offsetTop + De.offsetTop - be
        );
      });
      const qe = Ee > 0 ? `0 ${(-Ee).toFixed(1)}px` : "";
      M.style.translate !== qe && (M.style.translate = qe);
    }, j = new MutationObserver(U);
    j.observe(H, {
      subtree: !0,
      attributes: !0,
      attributeFilter: ["style"]
    }), $.current = () => j.disconnect();
  }, []), Z = c.useRef([]), [k, ee] = c.useState([]);
  c.useLayoutEffect(() => {
    const M = () => {
      const U = oe.map(
        (j, Q) => {
          var de;
          return ((de = Z.current[Q]) == null ? void 0 : de.offsetWidth) ?? 0;
        }
      );
      ee(
        (j) => j.length === U.length && j.every((Q, de) => Q === U[de]) ? j : U
      );
    };
    if (M(), typeof ResizeObserver > "u")
      return;
    const H = new ResizeObserver(M);
    return Z.current.slice(0, oe.length).forEach((U) => U && H.observe(U)), () => H.disconnect();
  }, [oe]);
  const we = Oa(k, oe.length), Y = c.useRef([]), V = oe.findIndex(
    ({ sub: M }) => Xe(M, s)
  ), [fe, J] = c.useState(0);
  c.useEffect(() => {
    J(Math.max(V, 0));
  }, [t]), c.useEffect(() => {
    if (!_ || !i)
      return;
    const M = setTimeout(() => {
      var H;
      return (H = Y.current[0]) == null ? void 0 : H.focus();
    });
    return () => clearTimeout(M);
  }, [_, i, t]);
  const te = (M) => {
    var U;
    const H = Math.max(0, Math.min(M, oe.length - 1));
    J(H), (U = Y.current[H]) == null || U.focus();
  }, me = (M, H) => {
    var U;
    switch (M.key) {
      case "ArrowRight":
        te(H + 1);
        break;
      case "ArrowLeft":
        H === 0 ? u(!0) : te(H - 1);
        break;
      case " ":
        (U = Y.current[H]) == null || U.click();
        break;
      case "Home":
        te(0);
        break;
      case "End":
        te(oe.length - 1);
        break;
      case "Tab":
        u(!0);
        break;
      default:
        return;
    }
    M.preventDefault();
  }, pe = "var(--lw-text-primary)", ve = h ? "#ffffff" : m;
  return /* @__PURE__ */ y(xe, { children: [
    b ? /* @__PURE__ */ o(
      "div",
      {
        "data-testid": "sidebar-flyout-scrim",
        "data-flyout-scrim": "",
        "data-state": _ ? "open" : "closed",
        "aria-hidden": !0,
        onClick: () => u(),
        className: x(
          "lw:fixed lw:inset-y-0 lw:right-0",
          _ ? "lw:animate-in lw:fade-in-0" : "lw:animate-out lw:fade-out-0 lw:[animation-fill-mode:forwards]"
        ),
        style: {
          left: r ? 0 : `${l}px`,
          // Clicks in the cut-out reach the rail beneath
          ...r ? { clipPath: Ta(r) } : {},
          zIndex: Na,
          animationDuration: `${_ ? Ra : Bl}ms`,
          // The flyout's only surface: a wash from the rail across
          // the page, strongest behind the tiles, fading to the right
          background: h ? "linear-gradient(90deg, rgba(24, 30, 40, 0.97) 0%, rgba(24, 30, 40, 0.9) 30%, rgba(24, 30, 40, 0.6) 55%, rgba(24, 30, 40, 0.2) 100%)" : "linear-gradient(90deg, rgba(236, 239, 243, 0.88) 0%, rgba(236, 239, 243, 0.78) 30%, rgba(236, 239, 243, 0.45) 55%, rgba(236, 239, 243, 0.1) 100%)"
        }
      }
    ) : null,
    I && typeof document < "u" ? mr(
      /* @__PURE__ */ o(
        "div",
        {
          ref: C,
          ...R,
          className: x(
            "lw:fixed lw:top-0 lw:left-0",
            Ce
          ),
          style: {
            zIndex: (He = S.current) != null && He.anchor.closest(
              '[data-auto-hide="true"]'
            ) ? _a : Sa,
            transform: `translate(${K.x}px, ${K.y}px)`,
            transition: P ? `transform ${Ke.duration}ms ${Ke.easing}` : "none"
          },
          children: /* @__PURE__ */ o(
            Ca,
            {
              in: _,
              onExited: () => N(!1),
              panelProps: d,
              groupText: E == null ? void 0 : E.group.text,
              children: E ? /* @__PURE__ */ y(
                "div",
                {
                  ref: z,
                  role: "menu",
                  "aria-label": E.group.text,
                  ...A.containerProps,
                  onBlur: (M) => {
                    M.currentTarget.contains(
                      M.relatedTarget
                    ) || A.settle();
                  },
                  className: x(
                    "lw:relative",
                    Ce
                  ),
                  style: {
                    width: we.width,
                    height: Do + Ae + el + tl,
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
                        ref: B,
                        "aria-hidden": !0,
                        "data-testid": "sidebar-flyout-heading",
                        className: x(
                          "lw:pointer-events-none lw:absolute lw:bottom-full lw:left-1/2 lw:-translate-x-1/2 lw:text-[1.125rem] lw:leading-normal lw:font-bold lw:tracking-[0.08em] lw:whitespace-nowrap lw:uppercase",
                          Ce
                        ),
                        style: {
                          marginBottom: Ml,
                          transition: `translate var(--dock-scale-timing, ${Ke.duration}ms ${Ke.easing})`,
                          // The pages' own name colour
                          color: yr(h)
                        },
                        children: E.group.text
                      }
                    ),
                    oe.map(({ sub: M, icon: H }, U) => /* @__PURE__ */ o(
                      zr,
                      {
                        ref: (j) => {
                          Y.current[U] = j;
                        },
                        nameRef: (j) => {
                          Z.current[U] = j;
                        },
                        tileLeft: we.tiles[U],
                        nameLeft: we.names[U],
                        sub: M,
                        icon: H,
                        index: U,
                        active: Xe(
                          M,
                          s
                        ),
                        tabIndex: U === fe ? 0 : -1,
                        onClick: (j) => {
                          $t(j) && (j.preventDefault(), a(M.path), u());
                        },
                        onKeyDown: (j) => me(j, U),
                        onFocus: (j) => {
                          J(U);
                          const Q = j.currentTarget.querySelector(
                            bo
                          );
                          Q && j.currentTarget.matches(
                            ":focus-visible"
                          ) && A.swellOn(Q);
                        },
                        accentColor: m,
                        activeBackgroundColor: w,
                        activeForegroundColor: g,
                        labelColor: pe,
                        iconColor: ve,
                        surface: f,
                        isDark: h
                      },
                      M.path
                    ))
                  ]
                },
                E.key
              ) : null
            }
          )
        }
      ),
      document.body
    ) : null
  ] });
}, Ca = ({
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
    if (ia(u), e) {
      ln(u) && !kt() && u.animate(
        [
          { opacity: 0, transform: "translateX(-8px)" },
          { opacity: 1, transform: "none" }
        ],
        { duration: Wl.duration, easing: Wl.easing }
      );
      return;
    }
    if (!ln(u)) {
      t == null || t();
      return;
    }
    let d = !1;
    const m = () => {
      !d && !a.current && (d = !0, t == null || t());
    }, w = setTimeout(m, Fl + 100);
    return u.animate([{ opacity: 1 }, { opacity: 0 }], {
      duration: Fl,
      easing: "ease-in",
      fill: "forwards"
    }).finished.then(m, m), () => clearTimeout(w);
  }, [e]), /* @__PURE__ */ o(
    "div",
    {
      ref: i,
      onMouseEnter: n.onMouseEnter,
      onMouseLeave: n.onMouseLeave,
      "data-testid": "sidebar-flyout",
      "data-group": l,
      className: "lw:relative lw:before:absolute lw:before:inset-y-0 lw:before:left-[-12px] lw:before:w-3 lw:before:content-['']",
      style: { padding: Fr },
      children: r
    }
  );
}, Br = (e) => e % 2 === 1, Oa = (e, t) => {
  const n = [], l = [];
  let r = -Xt, s = -Xt, i = -Xt;
  for (let a = 0; a < t; a += 1) {
    const u = e[a] || Ae, d = Br(a), m = d ? s : i, w = Math.max(
      r + Xt + Ae / 2,
      m + Xt + u / 2
    );
    r = w + Ae / 2, d ? s = w + u / 2 : i = w + u / 2, n.push(Math.round(w - Ae / 2)), l.push(Math.round(w - u / 2));
  }
  return {
    tiles: n,
    names: l,
    width: Math.round(Math.max(r, s, i, 0))
  };
}, zr = c.forwardRef(
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
    onFocus: m,
    accentColor: w,
    activeBackgroundColor: g,
    activeForegroundColor: f,
    labelColor: h,
    iconColor: R,
    surface: _,
    isDark: v
  }, E) => {
    const S = Br(s), I = jo(v, _), N = yr(v), b = {
      animation: `${Zs} ${Hl.duration}ms ${Hl.easing} both`,
      animationDelay: `${s * va}ms`
    }, T = v ? N : w, C = {
      // Hovered or focused, the tile and its name take the rail's hover
      // colour — a tint of the accent, whatever the accent is — mixed
      // into the surface so it is solid rather than see-through
      "--lw-tile-hover": `color-mix(in srgb, ${w} ${v ? 20 : 12}%, ${_})`,
      "--lw-tile-outline": w,
      // The current page's icon takes the accent's foreground
      "--lw-tile-icon": i ? f : R
    };
    return /* @__PURE__ */ y(
      "a",
      {
        ref: E,
        href: l.path,
        role: "menuitem",
        tabIndex: a,
        "aria-current": i ? "page" : void 0,
        "data-testid": `sidebar-subitem-${l.text}`,
        "data-active": i ? "true" : "false",
        onClick: u,
        onKeyDown: d,
        onFocus: m,
        className: "lw:group/tile lw:pointer-events-none lw:absolute lw:inset-0 lw:block lw:no-underline lw:outline-none",
        style: { ...C, color: h },
        children: [
          /* @__PURE__ */ o(
            "span",
            {
              "data-flyout-bridge": "",
              "aria-hidden": !0,
              className: "lw:pointer-events-auto lw:absolute lw:top-0 lw:block lw:h-full",
              style: { left: t, width: Ae }
            }
          ),
          /* @__PURE__ */ o(
            "span",
            {
              "data-flyout-tile": "",
              "data-flyout-name-side": S ? "above" : "below",
              className: x(
                I.className,
                "lw:pointer-events-auto lw:absolute lw:box-border lw:flex lw:items-center lw:justify-center lw:rounded-full lw:p-0",
                "lw:[&_svg]:size-9 lw:[&_svg]:text-(--lw-tile-icon) lw:[&_svg]:transition-colors lw:[&_svg]:duration-150",
                // A host's own glyph (an image in a `role="img"` box)
                // takes the same size
                "lw:[&_[role=img]]:size-9 lw:[&_[role=img]>img]:size-9",
                !i && "lw:group-has-[[data-dock-hovered]]/tile:bg-(--lw-tile-hover)! lw:[[role=menu]:not(:has([data-dock-hovered]))_[role=menuitem]:hover_&]:bg-(--lw-tile-hover)! lw:group-focus-visible/tile:bg-(--lw-tile-hover)!",
                "lw:group-focus-visible/tile:outline-2 lw:group-focus-visible/tile:outline-offset-2 lw:group-focus-visible/tile:outline-(--lw-tile-outline) lw:group-focus-visible/tile:outline-solid",
                "lw:group-active/tile:[transform:scale(0.94)] lw:motion-reduce:group-active/tile:[transform:none]",
                Ce
              ),
              style: {
                ...I.style,
                // Cards of their own: a surface and a soft shadow, no
                // edge, lifted a little more than a resting label
                border: "none",
                boxShadow: v ? "0 1px 2px rgba(0, 0, 0, 0.5), 0 8px 20px -6px rgba(0, 0, 0, 0.7)" : "0 1px 2px rgba(15, 23, 42, 0.08), 0 8px 20px -6px rgba(15, 23, 42, 0.28)",
                left: t,
                top: Do,
                width: Ae,
                height: Ae,
                borderRadius: ga,
                // Grows about its centre, so the row stays level; its
                // name moves aside to clear it (see the name's slot)
                transformOrigin: "center",
                transition: `scale ${Ke.duration}ms ${Ke.easing}, ${Pr}`,
                // The current page: the accent, solid, its icon and text in
                // the accent's foreground — as the current page on the rail
                ...i ? {
                  background: g ?? w,
                  color: f
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
              className: x(
                "lw:pointer-events-auto lw:absolute lw:flex",
                Ce
              ),
              style: {
                left: n,
                top: S ? 0 : Do + Ae + el,
                height: tl,
                // Held against its own tile, not floating mid-band; a
                // name too long for the band bleeds away from the tile
                alignItems: S ? "flex-end" : "flex-start",
                // Pushed away from its tile by as much as the tile
                // grows towards it (`--dock-scale`, on the page)
                translate: `0 calc((var(--dock-scale, 1) - 1) * ${S ? -Ae / 2 : Ae / 2}px)`,
                transition: `translate var(--dock-scale-timing, ${Ke.duration}ms ${Ke.easing})`
              },
              children: /* @__PURE__ */ o(
                "span",
                {
                  ref: e,
                  "data-flyout-name": "",
                  "data-text": l.text,
                  className: x(
                    "lw:block lw:px-2 lw:py-0 lw:text-center lw:text-[0.75rem] lw:leading-4 lw:text-balance lw:transition-colors lw:duration-150",
                    "lw:after:invisible lw:after:block lw:after:h-0 lw:after:overflow-hidden lw:after:font-semibold lw:after:content-[attr(data-text)]",
                    i ? "lw:font-semibold" : "lw:font-medium",
                    "lw:group-has-[[data-dock-hovered]]/tile:font-semibold lw:[[role=menu]:not(:has([data-dock-hovered]))_[role=menuitem]:hover_&]:font-semibold lw:group-focus-visible/tile:font-semibold",
                    Ce
                  ),
                  style: {
                    maxWidth: ba,
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
zr.displayName = "FlyoutTile";
const Ia = Aa;
function an({
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
      className: x(
        "lw:shrink-0 lw:bg-border",
        e === "horizontal" ? "lw:h-px lw:w-full" : "lw:w-px lw:self-stretch",
        t
      ),
      ...n
    }
  );
}
const $a = 50, Hr = 250, ka = (e) => {
  const [t, n] = c.useState(null), l = c.useRef(t);
  l.current = t;
  const r = c.useRef(/* @__PURE__ */ new Map()), s = c.useRef(null), i = c.useRef(void 0), a = c.useRef(void 0), u = () => {
    clearTimeout(i.current), i.current = void 0;
  }, d = () => {
    clearTimeout(a.current), a.current = void 0;
  }, m = (v, E, S = !1) => {
    u(), d(), n({ key: v, pinned: E, focusFirst: S });
  }, w = c.useCallback((v = !1) => {
    var S, I;
    u(), d();
    const E = (S = l.current) == null ? void 0 : S.key;
    n(null), v && E && ((I = r.current.get(E)) == null || I.focus());
  }, []), g = () => {
    u(), !(!l.current || l.current.pinned) && (d(), a.current = setTimeout(() => w(), Hr));
  };
  c.useEffect(() => {
    e || w();
  }, [e, w]), c.useEffect(
    () => () => {
      u(), d();
    },
    []
  );
  const f = t !== null;
  return c.useEffect(() => {
    if (!f)
      return;
    const v = (I) => {
      var b;
      const N = I;
      return N ? (b = s.current) != null && b.contains(N) ? !0 : [...r.current.values()].some((T) => T.contains(N)) : !1;
    }, E = (I) => {
      v(I.target) || w();
    }, S = (I) => {
      var N;
      I.key === "Escape" && w(
        !!((N = s.current) != null && N.contains(document.activeElement))
      );
    };
    return document.addEventListener("pointerdown", E), document.addEventListener("keydown", S), () => {
      document.removeEventListener("pointerdown", E), document.removeEventListener("keydown", S);
    };
  }, [f, w]), {
    state: t,
    close: w,
    triggerProps: (v) => ({
      ref: (E) => {
        E ? r.current.set(v, E) : r.current.delete(v);
      },
      onMouseEnter: () => {
        if (!e)
          return;
        d();
        const E = l.current;
        if (E) {
          E.key !== v && m(v, E.pinned);
          return;
        }
        u(), i.current = setTimeout(
          () => m(v, !1),
          $a
        );
      },
      onMouseLeave: g,
      onClick: (E) => {
        var S;
        if (E.detail === 0) {
          m(v, !0, !0);
          return;
        }
        ((S = l.current) == null ? void 0 : S.key) !== v && m(v, !1);
      },
      onKeyDown: (E) => {
        E.key === "ArrowRight" && (E.preventDefault(), m(v, !0, !0));
      }
    }),
    flyoutProps: {
      ref: s,
      onMouseEnter: d,
      onMouseLeave: g
    },
    onRailLeafEnter: () => {
      u(), l.current && !l.current.pinned && w();
    },
    getTrigger: (v) => r.current.get(v) ?? null
  };
}, La = ka, Da = 264, Ma = 72, Ul = 64, Pa = "lw:outline-none lw:focus:outline-none lw:focus-visible:outline-none", Fa = 16, Ba = 14, za = 32, Ha = 20, Xl = "0.7rem", _n = Oe(Vo), xo = "var(--lw-hover-wash)", Wa = "#ffffff", Kt = (e, t) => ({
  className: x(
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
}), Tt = c.forwardRef(
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
Tt.displayName = "RowControl";
const vo = "lw:relative lw:flex lw:w-full lw:min-w-0 lw:grow lw:items-center lw:justify-start lw:text-left lw:no-underline lw:transition-colors lw:duration-150 lw:outline-none lw:focus-visible:bg-selected lw:disabled:opacity-40", Rn = "lw:inline-flex lw:shrink-0 lw:text-inherit lw:[&_svg]:size-6", Tn = "lw:my-1 lw:min-w-0 lw:flex-auto", yo = x(
  "lw:relative lw:inline-flex lw:shrink-0 lw:items-center lw:justify-center lw:p-2 lw:transition-[background-color,border-radius,color] lw:duration-150 lw:disabled:opacity-40 lw:[&_svg]:size-6",
  Pa
), mt = ({ text: e, variant: t = "body1", center: n = !1, fontSize: l, fontWeight: r }) => {
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
          className: x(
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
}, Ga = `url("data:image/svg+xml,${encodeURIComponent(
  "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 5 8'><path d='M0.5 0.9L4.1 4L0.5 7.1Z' stroke='black' stroke-width='1' stroke-linejoin='round'/></svg>"
)}")`, Ua = 4, Xa = (e) => Math.max(0, Math.min(Ua, Pn - e)), Ka = ({
  open: e,
  size: t = Fa
}) => /* @__PURE__ */ o(
  e ? Is : $s,
  {
    "aria-hidden": !0,
    className: "lw:shrink-0 lw:opacity-75",
    style: { width: t, height: t }
  }
), Kl = ({ open: e }) => /* @__PURE__ */ o(
  Os,
  {
    "aria-hidden": !0,
    className: x(
      "lw:size-5! lw:shrink-0 lw:opacity-75 lw:transition-transform lw:duration-150",
      e && "lw:rotate-90"
    )
  }
), An = 600, rt = `${Yn}px`, Pn = (nn - Te) / 2, ja = (e) => {
  const t = Math.max(0, e - Pn);
  return {
    paddingLeft: `${Math.max(0, Pn - t)}px`,
    paddingRight: `${Math.max(0, Pn - e)}px`
  };
};
function Ya(e, t) {
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
function qa(e) {
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
function Va(e, t, n) {
  c.useEffect(() => {
    const l = e.current;
    if (!l)
      return;
    const r = (u) => {
      const d = Array.from(
        l.querySelectorAll('[data-active="true"]')
      ).filter((f) => f.offsetHeight > 0).pop();
      if (!d)
        return;
      const m = l.getBoundingClientRect(), w = d.getBoundingClientRect();
      let g = 0;
      w.top < m.top + Cn ? g = w.top - m.top - Cn : w.bottom > m.bottom - Cn && (g = w.bottom - m.bottom + Cn), g !== 0 && l.scrollBy({ top: g, behavior: u });
    }, s = requestAnimationFrame(() => r("smooth")), i = window.setTimeout(() => r("smooth"), 350), a = typeof ResizeObserver > "u" ? null : new ResizeObserver(() => r("auto"));
    return a == null || a.observe(l), () => {
      cancelAnimationFrame(s), window.clearTimeout(i), a == null || a.disconnect();
    };
  }, [e, t, n]);
}
const Za = ({
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
  headerBackgroundColor: m,
  headerForegroundColor: w,
  brandColor: g,
  activeAccentColor: f = "#01584f",
  activeBackgroundColor: h,
  groupArrowColor: R,
  groupAccentColor: _,
  activeForegroundColor: v,
  foregroundColor: E,
  surfaceBackgroundColor: S,
  flyoutSurfaceColor: I,
  collapsed: N = !1,
  expandedWidth: b = Da,
  collapsedWidth: T = Ma,
  showLabels: C = !1,
  topInsetPx: K = 0,
  topContent: D,
  footer: F,
  submenuMode: P = "inline"
}) => {
  var ut;
  const G = Ye(), oe = c.useContext(Kn), z = P === "flyout" && N && !C, A = La(z), $ = c.useRef(null), B = c.useRef(null), Z = c.useRef(null), k = c.useRef(null);
  Va(k, n, N);
  const ee = Ya(k, z), we = qa(k), Y = fa(z, G, ((ut = A.state) == null ? void 0 : ut.key) ?? null), V = Dr($, {
    enabled: z,
    axis: "y",
    itemSelector: Mr,
    maxScale: _r,
    // One button's pitch: the one under the pointer swells, its
    // neighbours only as the pointer crosses over to them
    reach: Te + Yn,
    // Only 4px of padding at the scroller's ends: the first and last
    // buttons swell less, or the last would scroll the rail
    boundsRef: k,
    transition: `transform ${_n.duration}ms ${_n.easing}, background-color 160ms ease`
  }), fe = {
    ...Y.containerProps,
    ...V.containerProps,
    ...z ? {
      onScrollCapture: () => {
        var p, O;
        (O = (p = Y.containerProps).onScrollCapture) == null || O.call(p), V.settle();
      }
    } : {}
  }, J = h ?? f, te = Dl({
    enabled: z,
    isDark: G,
    color: J,
    containerRef: B
  }), me = Dl({
    enabled: z,
    isDark: G,
    color: J,
    containerRef: Z
  }), pe = c.useMemo(
    () => e.filter((p) => p.aboveSearch),
    [e]
  ), ve = c.useMemo(
    () => e.filter((p) => !p.aboveSearch),
    [e]
  ), { close: He } = A;
  c.useEffect(() => {
    He();
  }, [n, He]);
  const [M, H] = c.useState(
    {}
  ), U = v ?? ko(J), j = { bg: J, fg: U }, Q = _ ?? tn(f), de = qn(S, G), he = E ?? (G ? "var(--lw-text-primary)" : f), Ee = m ?? de, Ne = w ?? (m ? ko(Ee) : E ?? (G ? Wa : f)), qe = tn(Ne), ie = (p) => {
    l == null || l(p);
  }, Se = (p) => p ? {
    href: p,
    onClick: (O) => {
      $t(O) && (O.preventDefault(), ie(p));
    }
  } : {}, be = (p, O) => {
    H((q) => ({ ...q, [p]: !O }));
  }, ge = (p, O) => M[O] ?? st(p, n), ye = (p, O) => Kt(
    {
      fg: p ? U : he,
      bg: p ? J : void 0
    },
    p || C ? j : { bg: O }
  ), De = (p) => {
    const O = Xe(p, n), q = ye(O, Q), X = /* @__PURE__ */ y(
      Tt,
      {
        disabled: !p.path,
        ...Se(p.path),
        "data-testid": `sidebar-item-${p.text}`,
        "data-active": O ? "true" : "false",
        "data-selected": O ? "true" : void 0,
        className: x(
          vo,
          "lw:rounded-lg lw:px-3",
          p.subtitle ? "lw:py-2" : "lw:py-2.5",
          // Room for the action button laid over the row's end
          p.action && "lw:pr-12",
          q.className
        ),
        style: q.style,
        children: [
          /* @__PURE__ */ o(
            "span",
            {
              className: Rn,
              style: { minWidth: p.subtitle ? 48 : 36 },
              children: p.icon
            }
          ),
          /* @__PURE__ */ y(
            "span",
            {
              className: x(Tn, p.subtitle && "lw:my-0"),
              children: [
                /* @__PURE__ */ o(
                  mt,
                  {
                    text: p.text,
                    fontWeight: An
                  }
                ),
                p.subtitle ? /* @__PURE__ */ o("span", { className: "lw:block lw:opacity-85", children: /* @__PURE__ */ o(
                  mt,
                  {
                    text: p.subtitle,
                    fontSize: "0.8125rem"
                  }
                ) }) : null
              ]
            }
          )
        ]
      },
      p.text
    );
    if (!p.action)
      return X;
    const { action: W } = p, ne = O ? U : he;
    return /* @__PURE__ */ y("div", { className: "lw:relative", children: [
      X,
      /* @__PURE__ */ o(Dn, { title: W.label, side: "right", arrow: !0, children: /* @__PURE__ */ o(
        "button",
        {
          type: "button",
          "aria-label": W.label,
          "data-testid": `sidebar-action-${p.text}`,
          onClick: () => {
            W.onClick(), r == null || r();
          },
          className: x(
            "lw:absolute lw:top-1/2 lw:right-2 lw:inline-flex lw:size-[30px] lw:-translate-y-1/2 lw:items-center lw:justify-center lw:rounded-md lw:border lw:border-solid lw:transition-colors lw:[&_svg]:size-[18px]",
            "lw:hover:bg-(--lw-action-hover-bg)",
            // No lingering outline after a click; a clear ring for keyboard focus
            "lw:focus:outline-none lw:focus-visible:outline-2 lw:focus-visible:outline-offset-1 lw:focus-visible:outline-solid lw:focus-visible:outline-(--lw-action-ring)"
          ),
          style: {
            borderColor: O ? "rgba(255, 255, 255, 0.35)" : Q,
            color: ne,
            "--lw-action-hover-bg": O ? "rgba(255, 255, 255, 0.15)" : Q,
            "--lw-action-ring": ne
          },
          children: W.icon
        }
      ) })
    ] }, p.text);
  }, tt = (p) => {
    const O = st(p, n), q = Xe(p, n), X = Rt("", p), W = ge(p, X), ne = ye(q, Q);
    return /* @__PURE__ */ y(
      "div",
      {
        "data-testid": `sidebar-group-${p.text}`,
        className: "lw:rounded-lg",
        style: {
          backgroundColor: O ? Q : "transparent"
        },
        children: [
          /* @__PURE__ */ y(
            Tt,
            {
              onClick: () => be(X, W),
              "data-testid": `sidebar-item-${p.text}`,
              "data-active": q ? "true" : "false",
              "aria-expanded": W,
              className: x(
                vo,
                "lw:rounded-lg lw:px-3 lw:py-2.5",
                ne.className
              ),
              style: ne.style,
              children: [
                /* @__PURE__ */ o("span", { className: Rn, style: { minWidth: 36 }, children: p.icon }),
                /* @__PURE__ */ o("span", { className: Tn, children: /* @__PURE__ */ o(
                  mt,
                  {
                    text: p.text,
                    fontWeight: An
                  }
                ) }),
                /* @__PURE__ */ o(Kl, { open: W })
              ]
            }
          ),
          W ? /* @__PURE__ */ o(
            "div",
            {
              "data-testid": `sidebar-children-${p.text}`,
              className: "lw:pb-1 lw:animate-in lw:fade-in-0",
              children: p.subitems.map(
                (ae) => Dt(ae, X, 1)
              )
            }
          ) : null
        ]
      },
      p.text
    );
  }, Dt = (p, O, q) => {
    const X = Rt(O, p), W = za + (q - 1) * Ha, ne = x(
      vo,
      "lw:mx-1 lw:w-[calc(100%-8px)] lw:rounded-lg lw:py-1.5 lw:pr-4"
    );
    if (Ct(p)) {
      const Me = st(p, n), ue = Xe(p, n), ot = ge(p, X), Ie = ye(ue, xo);
      return /* @__PURE__ */ y("div", { "data-testid": `sidebar-group-${p.text}`, children: [
        /* @__PURE__ */ y(
          Tt,
          {
            onClick: () => be(X, ot),
            "data-testid": `sidebar-subitem-${p.text}`,
            "data-active": Me ? "true" : "false",
            "aria-expanded": ot,
            className: x(ne, Ie.className),
            style: { ...Ie.style, paddingLeft: W },
            children: [
              p.icon ? /* @__PURE__ */ o(
                "span",
                {
                  className: Rn,
                  style: { minWidth: 32 },
                  children: p.icon
                }
              ) : null,
              /* @__PURE__ */ o("span", { className: Tn, children: /* @__PURE__ */ o(
                mt,
                {
                  text: p.text,
                  fontWeight: An
                }
              ) }),
              /* @__PURE__ */ o(Kl, { open: ot })
            ]
          }
        ),
        ot ? /* @__PURE__ */ o(
          "div",
          {
            "data-testid": `sidebar-children-${p.text}`,
            className: "lw:animate-in lw:fade-in-0",
            children: p.subitems.map(
              (Pt) => Dt(Pt, X, q + 1)
            )
          }
        ) : null
      ] }, X);
    }
    const ae = Xe(p, n), Re = ye(ae, xo);
    return /* @__PURE__ */ y(
      Tt,
      {
        disabled: !p.path,
        ...Se(p.path),
        "data-testid": `sidebar-subitem-${p.text}`,
        "data-active": ae ? "true" : "false",
        "data-selected": ae ? "true" : void 0,
        className: x(ne, Re.className),
        style: { ...Re.style, paddingLeft: W },
        children: [
          p.icon ? /* @__PURE__ */ o("span", { className: Rn, style: { minWidth: 32 }, children: p.icon }) : null,
          /* @__PURE__ */ o("span", { className: Tn, children: /* @__PURE__ */ o(
            mt,
            {
              text: p.text,
              fontWeight: An
            }
          ) })
        ]
      },
      X
    );
  }, pt = x(
    "lw:rounded-md! lw:[&_svg]:size-6 lw:hover:bg-transparent! lw:active:[transform:scale(0.88)] lw:active:duration-[90ms] lw:motion-reduce:active:[transform:none]",
    Ce
  ), ht = (p) => ({
    ...p ? { backgroundColor: "transparent" } : {},
    transition: `transform ${_n.duration}ms ${_n.easing}, background-color 160ms ease`
  }), pn = jo(G, oe), hn = (p, O, q, X, W, ne) => {
    const ae = !W, Re = C ? Kt(
      {
        fg: X ? U : he,
        bg: X ? J : void 0
      },
      j
    ) : (
      // Icon-only collapsed rail (collapsible variant): original
      // hover — accent when active, else a subtle tint; no
      // foreground change. The glass rail has no hover of its own.
      Kt(
        {
          fg: X ? U : he,
          bg: X ? J : void 0
        },
        z ? void 0 : {
          bg: X ? J : ne != null && ne.insideGroup ? xo : Q,
          radius: "8px"
        }
      )
    ), Me = z ? Te : 44, ue = /* @__PURE__ */ y(
      Tt,
      {
        "aria-label": O,
        disabled: ae,
        ...Se(W),
        onMouseEnter: z ? A.onRailLeafEnter : void 0,
        ...z ? { [sn]: "" } : {},
        "data-testid": (ne == null ? void 0 : ne.testId) ?? `sidebar-item-${O}`,
        "data-active": X ? "true" : "false",
        className: x(
          yo,
          Re.className,
          C ? (
            // 8px padding on all sides of the item container.
            "lw:flex lw:h-auto lw:w-full lw:max-w-full lw:flex-col lw:gap-0.5 lw:rounded-lg lw:p-2 lw:[&_svg]:size-[22px]"
          ) : X ? "lw:rounded-lg" : "lw:rounded-full",
          !C && z && pt
        ),
        style: {
          ...Re.style,
          ...C ? {} : { width: Me, height: Me },
          ...!C && z ? ht(X) : {}
        },
        children: [
          q,
          C ? /* @__PURE__ */ o(
            mt,
            {
              text: O,
              variant: "caption",
              center: !0,
              fontSize: Xl
            }
          ) : null
        ]
      }
    );
    return C ? ae ? /* @__PURE__ */ o("span", { children: ue }, p) : /* @__PURE__ */ o(c.Fragment, { children: ue }, p) : /* @__PURE__ */ o(
      Dn,
      {
        title: O,
        side: "right",
        arrow: !z,
        ...z ? {
          contentClassName: pn.className,
          contentStyle: pn.style,
          sideOffset: 6
        } : {},
        children: ae ? /* @__PURE__ */ o("span", { children: ue }) : ue
      },
      p
    );
  }, gn = (p) => {
    var W;
    const O = st(p, n), q = Rt("", p), X = ((W = A.state) == null ? void 0 : W.key) === q;
    return /* @__PURE__ */ o(
      "div",
      {
        "data-testid": `sidebar-group-${p.text}`,
        className: "lw:flex lw:w-full lw:justify-center",
        children: /* @__PURE__ */ o(
          "button",
          {
            type: "button",
            ...A.triggerProps(q),
            "aria-label": p.text,
            "aria-haspopup": "menu",
            "aria-expanded": X,
            "data-testid": `sidebar-item-${p.text}`,
            "data-active": O ? "true" : "false",
            "data-open": X ? "true" : "false",
            [sn]: "",
            className: x(
              yo,
              pt,
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
              color: O ? U : he,
              // Open, the rail's hover lens stays on it (useRailLens)
              // rather than a fill of its own under the lens
              backgroundColor: O ? J : "transparent",
              ...ht(O),
              "--lw-arrow-right": `${-Xa(ee)}px`,
              "--lw-arrow-bg": R ?? "currentColor",
              "--lw-arrow-opacity": R ? 1 : 0.55,
              "--lw-arrow-mask": `${Ga} center / contain no-repeat`
            },
            children: p.icon
          }
        )
      },
      p.text
    );
  }, eo = (p) => {
    const O = st(p, n), q = Xe(p, n), X = Rt("", p), W = ge(p, X), ne = Kt(
      {
        fg: q ? U : he,
        bg: q ? J : void 0
      },
      C ? j : { bg: q ? J : "transparent" }
    ), ae = /* @__PURE__ */ y(
      "button",
      {
        type: "button",
        "aria-label": p.text,
        "aria-expanded": W,
        onClick: () => be(X, W),
        "data-testid": `sidebar-item-${p.text}`,
        "data-active": q ? "true" : "false",
        className: x(
          yo,
          ne.className,
          "lw:flex lw:max-w-full lw:flex-col lw:rounded-[10px]",
          // 8px padding on all sides of the labeled item container.
          C ? "lw:w-full lw:gap-0.5 lw:p-2" : "lw:w-11 lw:px-2 lw:py-1.5"
        ),
        style: ne.style,
        children: [
          C ? /* @__PURE__ */ o("span", { className: "lw:flex lw:items-center lw:justify-center lw:[&_svg]:size-[22px]", children: p.icon }) : p.icon,
          C ? /* @__PURE__ */ o(
            mt,
            {
              text: p.text,
              variant: "caption",
              center: !0,
              fontSize: Xl
            }
          ) : null,
          /* @__PURE__ */ o(Ka, { open: W, size: Ba })
        ]
      }
    ), Re = C ? ae : /* @__PURE__ */ o(Dn, { title: p.text, side: "right", arrow: !0, children: ae }), Me = Kt(
      { bg: O ? Q : void 0 },
      C ? void 0 : { bg: Q }
    );
    return /* @__PURE__ */ y(
      "div",
      {
        "data-testid": `sidebar-group-${p.text}`,
        className: x(
          "lw:flex lw:w-full lw:flex-col lw:items-center lw:gap-1 lw:rounded-[10px] lw:py-1",
          Me.className
        ),
        style: Me.style,
        children: [
          Re,
          W ? Go(p.subitems, p.icon).map(
            ({ sub: ue, icon: ot }) => hn(
              ue.path,
              ue.text,
              ot,
              Xe(ue, n),
              ue.path,
              {
                insideGroup: !0,
                testId: `sidebar-subitem-${ue.text}`
              }
            )
          ) : null
        ]
      },
      p.text
    );
  }, ct = (p) => /* @__PURE__ */ o("div", { className: "lw:flex lw:w-full lw:justify-center", children: hn(
    p.text,
    p.subtitle ? `${p.text} · ${p.subtitle}` : p.text,
    p.icon,
    Xe(p, n),
    p.path,
    { testId: `sidebar-item-${p.text}` }
  ) }, p.text), gt = (p) => Ct(p) ? z ? gn(p) : N ? eo(p) : tt(p) : N ? ct(p) : De(p), bt = (p) => /* @__PURE__ */ o(
    "div",
    {
      className: x(
        "lw:flex lw:w-full lw:flex-col lw:gap-1",
        N ? "lw:items-center" : "lw:items-stretch"
      ),
      children: p.map((O, q) => {
        const X = (ne) => /* @__PURE__ */ o(
          an,
          {
            "data-testid": `sidebar-divider-${ne === "before" ? "before-" : ""}${O.text}`,
            className: "lw:self-stretch",
            style: {
              marginBlock: z ? rt : "8px",
              width: "auto"
            }
          }
        ), W = O.dividerAfter && q < p.length - 1;
        return O.dividerBefore || W ? /* @__PURE__ */ y(c.Fragment, { children: [
          O.dividerBefore ? X("before") : null,
          gt(O),
          W ? X("after") : null
        ] }, O.text) : gt(O);
      })
    }
  ), nt = N ? T : b, Mt = () => {
    var ae, Re;
    const { state: p } = A, O = p ? [...e, ...t].find(
      (Me) => Ct(Me) && Rt("", Me) === p.key
    ) ?? null : null, q = O ? ((ae = $.current) == null ? void 0 : ae.getBoundingClientRect().right) ?? T : T, X = O ? ((Re = $.current) == null ? void 0 : Re.closest("[data-rail-surface]")) ?? $.current : null, W = X == null ? void 0 : X.getBoundingClientRect(), ne = X && W ? {
      left: W.left,
      top: W.top,
      width: W.width,
      height: W.height,
      radius: parseFloat(
        getComputedStyle(X).borderTopRightRadius
      ) || 0
    } : null;
    return /* @__PURE__ */ o(
      Ia,
      {
        group: O,
        groupKey: O ? p.key : null,
        anchor: O ? A.getTrigger(p.key) : null,
        railEdge: q,
        railShape: ne,
        activePath: n,
        focusFirst: p == null ? void 0 : p.focusFirst,
        onNavigate: ie,
        onClose: A.close,
        panelProps: A.flyoutProps,
        accentColor: f,
        activeBackgroundColor: h,
        activeForegroundColor: U,
        solidSurface: I ?? de
      }
    );
  }, bn = d ? /* @__PURE__ */ o(
    "div",
    {
      "data-testid": "sidebar-header",
      className: x(
        "lw:flex lw:shrink-0 lw:items-center lw:justify-center",
        // On the floating rail the logo sits 12px from the top and
        // 12px above Nexa — a section apart, wider than the 4px
        // between items
        z && "lw:py-3"
      ),
      style: {
        backgroundColor: Ee,
        ...z ? {} : { height: Ul, minHeight: Ul }
      },
      children: s || i ? /* @__PURE__ */ o(
        Hn,
        {
          logo: s,
          title: N ? void 0 : i,
          appName: i || "App",
          onClick: a,
          menuOpen: u,
          color: g ?? Ne,
          testId: "sidebar-header-brand"
        }
      ) : null
    }
  ) : null, to = !d && s ? /* @__PURE__ */ o(
    "div",
    {
      className: "lw:flex lw:shrink-0 lw:justify-center lw:pt-4",
      style: { paddingBottom: z ? rt : "8px" },
      children: /* @__PURE__ */ o(
        Hn,
        {
          logo: s,
          appName: i || "App",
          onClick: a,
          menuOpen: u,
          color: g ?? Ne,
          testId: "sidebar-header-brand"
        }
      )
    }
  ) : null, dt = C ? 4 : z ? 6 : N ? 8 : 12, no = x(
    z ? "lw:not-supports-[selector(::-webkit-scrollbar)]:[scrollbar-width:thin] lw:not-supports-[selector(::-webkit-scrollbar)]:[scrollbar-color:transparent_transparent] lw:not-supports-[selector(::-webkit-scrollbar)]:hover:[scrollbar-color:var(--lw-border-color)_transparent] lw:not-supports-[selector(::-webkit-scrollbar)]:has-[:focus-visible]:[scrollbar-color:var(--lw-border-color)_transparent] lw:[&::-webkit-scrollbar]:w-1.5" : "lw:[scrollbar-width:thin] lw:[scrollbar-color:transparent_transparent] lw:hover:[scrollbar-color:var(--lw-border-color)_transparent] lw:has-[:focus-visible]:[scrollbar-color:var(--lw-border-color)_transparent] lw:[&::-webkit-scrollbar]:w-2",
    "lw:[&::-webkit-scrollbar-thumb]:rounded-[4px] lw:[&::-webkit-scrollbar-thumb]:bg-transparent lw:[&:hover::-webkit-scrollbar-thumb]:bg-border lw:[&:has(:focus-visible)::-webkit-scrollbar-thumb]:bg-border"
  );
  return /* @__PURE__ */ o(wn.Provider, { value: z, children: /* @__PURE__ */ y(
    "nav",
    {
      ref: $,
      ...fe,
      "aria-label": "Main sidebar",
      "data-testid": "collapsible-sidebar",
      "data-collapsed": N ? "true" : "false",
      "data-labeled": C ? "true" : "false",
      className: x(
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
        z && "lw:relative lw:[&_:is(button,a,[role=button]):not([data-active=true]):not([data-rail-keep-fill]):hover]:bg-transparent! lw:[&>:not([data-glass-lens],[data-active-glass],[data-flyout-scrim])]:relative"
      ),
      style: { width: nt, minWidth: nt, backgroundColor: de },
      children: [
        Y.lens,
        bn ?? to,
        pe.length > 0 ? /* @__PURE__ */ y(
          "div",
          {
            ref: Z,
            className: "lw:relative lw:shrink-0",
            style: {
              marginInline: dt,
              paddingBottom: z ? rt : "8px"
            },
            children: [
              me.glass,
              bt(pe)
            ]
          }
        ) : null,
        D ? /* @__PURE__ */ o(
          "div",
          {
            className: "lw:shrink-0",
            style: {
              paddingInline: dt,
              paddingBlock: z ? 0 : 8
            },
            children: D
          }
        ) : null,
        /* @__PURE__ */ o(
          "div",
          {
            ref: k,
            "data-testid": "sidebar-links-scroller",
            className: x(
              "lw:flex lw:min-h-0 lw:flex-auto lw:flex-col",
              no
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
              ...z ? ja(ee) : { paddingInline: dt },
              paddingTop: K && !d ? `${K}px` : z ? rt : "8px",
              paddingBottom: z ? rt : "16px"
            },
            children: /* @__PURE__ */ y(
              "div",
              {
                ref: B,
                className: "lw:relative lw:flex lw:flex-[1_0_auto] lw:flex-col",
                children: [
                  te.glass,
                  bt(ve),
                  t.length > 0 ? /* @__PURE__ */ y(
                    "div",
                    {
                      className: "lw:mt-auto",
                      style: {
                        paddingTop: z ? rt : "16px"
                      },
                      children: [
                        F ? null : /* @__PURE__ */ o(
                          an,
                          {
                            style: {
                              marginBottom: z ? rt : "8px"
                            }
                          }
                        ),
                        bt(t)
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
            className: x(
              "lw:shrink-0 lw:pb-3",
              z && "lw:[&_button_svg]:size-6"
            ),
            style: { paddingInline: dt },
            children: /* @__PURE__ */ o(
              "div",
              {
                style: {
                  borderTop: `1px solid ${qe}`,
                  paddingTop: z ? rt : "12px"
                },
                children: F
              }
            )
          }
        ) : null,
        z ? Mt() : null
      ]
    }
  ) });
}, Mo = Za, Fn = "var(--lumora-content-padding, 0px)", Eo = `calc(${Fn} * -1)`, Ja = {
  "background.paper": "var(--lw-bg-surface)",
  "background.default": "var(--lw-bg-page)"
}, Qa = (e) => e && typeof e == "object" && !Array.isArray(e) ? Object.fromEntries(
  Object.entries(e).filter(
    ([t, n]) => !t.includes("&") && !t.startsWith("@") && (typeof n == "string" || typeof n == "number")
  )
) : {}, ei = ({
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
    className: x(
      r && "lw:border-b lw:border-solid lw:border-border",
      // Above page content, below the sidebar drawer and menus
      n && "lw:sticky lw:z-[3]",
      i
    ),
    style: {
      marginLeft: Eo,
      marginRight: Eo,
      marginTop: t ? Eo : 0,
      // Space below it, like any other block on the page
      marginBottom: Fn,
      paddingLeft: s ? Fn : 0,
      paddingRight: s ? Fn : 0,
      backgroundColor: Ja[l] ?? l,
      ...n && {
        position: "sticky",
        // Under the mobile top bar on phones, the viewport top on desktop
        top: "var(--lumora-sticky-top, 0px)"
      },
      ...Qa(u),
      ...a
    },
    children: e
  }
), cd = ei, ti = ({ keys: e }) => /* @__PURE__ */ o(
  "kbd",
  {
    "aria-hidden": "true",
    className: "lw:inline-flex lw:h-5 lw:shrink-0 lw:items-center lw:gap-1 lw:rounded-sm lw:border lw:border-solid lw:border-border lw:bg-surface lw:px-1.5 lw:font-[inherit] lw:text-[11px] lw:leading-none lw:text-muted-foreground",
    children: e.map((t) => /* @__PURE__ */ o("span", { children: t }, t))
  }
), ni = ti;
function Wn({
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
      className: x(
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
const oi = "(max-width: 899.95px)", li = (e) => (t) => {
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
function ri(e) {
  const t = c.useMemo(() => li(e), [e]);
  return c.useSyncExternalStore(
    t,
    () => typeof window < "u" && window.matchMedia ? window.matchMedia(e).matches : !1,
    () => !1
  );
}
const Wr = () => ri(oi), si = 6, ai = 8, jl = (e, t) => typeof e == "object" ? e[t] : e, No = ({ width: e, height: t = 20, className: n }) => /* @__PURE__ */ o(
  Wn,
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
), yt = ({ size: e, variant: t = "rounded" }) => /* @__PURE__ */ o(
  Wn,
  {
    variant: t,
    className: "lw:shrink-0",
    style: { width: e, height: e }
  }
), So = ({
  themeMode: e,
  sidebarVariant: t = "rail",
  sidebarSubmenu: n = "expand",
  sidebarAutoHide: l = !1,
  showSidebar: r = !0,
  contentPadding: s = Tr,
  sidebarBackgroundColor: i,
  contentBackgroundColor: a,
  content: u
}) => {
  const d = Wr(), m = e === "dark", w = Cr({
    showSidebar: r,
    isMobile: d,
    sidebarVariant: t,
    sidebarSubmenu: n,
    sidebarAutoHide: l
  }), g = on(n, t) ? {
    gutterPx: at,
    radiusPx: Rr
  } : void 0, f = Mn, h = qn(
    jl(i, e),
    m
  ), R = Or(
    jl(a, e),
    m
  ), _ = Ar(s), v = g ? /* @__PURE__ */ y("div", { className: "lw:flex lw:flex-col lw:items-center lw:pt-3", children: [
    /* @__PURE__ */ o(yt, { size: 36 }),
    /* @__PURE__ */ o(
      "div",
      {
        className: "lw:mt-4 lw:flex lw:flex-col lw:items-center",
        style: { gap: Yn },
        children: Array.from({ length: ai }, (E, S) => /* @__PURE__ */ o(
          "div",
          {
            className: "lw:flex lw:items-center lw:justify-center",
            style: {
              width: Te,
              height: Te
            },
            children: /* @__PURE__ */ o(yt, { size: Lo })
          },
          S
        ))
      }
    )
  ] }) : /* @__PURE__ */ y("div", { className: "lw:flex lw:flex-col lw:items-center lw:gap-4 lw:pt-4", children: [
    /* @__PURE__ */ o(yt, { size: 32 }),
    /* @__PURE__ */ o("div", { className: "lw:h-2" }),
    Array.from({ length: si }, (E, S) => /* @__PURE__ */ o(yt, { size: 28 }, S))
  ] });
  return /* @__PURE__ */ y(
    "div",
    {
      role: "status",
      "aria-busy": "true",
      "aria-label": "Checking session",
      "data-lw-scope": "",
      "data-lw-theme": e,
      className: "lw:flex lw:min-h-screen",
      style: { backgroundColor: R },
      children: [
        d && /* @__PURE__ */ y(
          "div",
          {
            className: "lw:fixed lw:top-0 lw:right-0 lw:left-0 lw:z-[1] lw:flex lw:items-center lw:gap-4 lw:px-4",
            style: {
              height: f,
              backgroundColor: h
            },
            children: [
              /* @__PURE__ */ o(yt, { size: 24 }),
              /* @__PURE__ */ o(No, { width: 96 }),
              /* @__PURE__ */ o("div", { className: "lw:grow" }),
              /* @__PURE__ */ o(yt, { size: 32, variant: "circular" })
            ]
          }
        ),
        !d && w > 0 && /* @__PURE__ */ o(
          "div",
          {
            className: "lw:relative lw:shrink-0",
            style: { width: w },
            children: /* @__PURE__ */ o(
              "div",
              {
                className: "lw:fixed",
                style: g ? {
                  top: g.gutterPx,
                  bottom: g.gutterPx,
                  left: g.gutterPx,
                  width: w - 2 * g.gutterPx,
                  borderRadius: g.radiusPx,
                  backgroundColor: h
                } : {
                  top: 0,
                  bottom: 0,
                  left: 0,
                  width: w,
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
              ..._,
              "--lumora-sticky-top": d ? `${f}px` : "0px",
              padding: "var(--lumora-content-padding)",
              marginTop: d ? f : 0
            },
            children: u ?? /* @__PURE__ */ y(xe, { children: [
              /* @__PURE__ */ o(No, { width: 220, height: 40 }),
              /* @__PURE__ */ o(No, { width: 320, className: "lw:mb-6" }),
              /* @__PURE__ */ o("div", { className: "lw:mb-6 lw:flex lw:flex-row lw:gap-4", children: Array.from(
                { length: d ? 2 : 4 },
                (E, S) => /* @__PURE__ */ o(
                  Wn,
                  {
                    className: "lw:h-24 lw:flex-1"
                  },
                  S
                )
              ) }),
              /* @__PURE__ */ o(Wn, { className: "lw:h-[360px]" })
            ] })
          }
        )
      ]
    }
  );
}, Yl = { background: "hsl(220, 35%, 3%)", color: "#ffffff" }, ii = ({
  theme: e = "light",
  darkModeSelector: t,
  ...n
}) => {
  if (!t)
    return /* @__PURE__ */ o(So, { themeMode: e, ...n });
  const l = [
    '[data-lw-skeleton-mode="dark"]{display:none}',
    '[data-lw-skeleton-mode="light"]{display:contents}',
    `${t} [data-lw-skeleton-mode="light"]{display:none}`,
    `${t} [data-lw-skeleton-mode="dark"]{display:contents}`,
    `${t} body{background-color:${Yl.background};color:${Yl.color}}`
  ].join(`
`);
  return /* @__PURE__ */ y(xe, { children: [
    /* @__PURE__ */ o("style", { dangerouslySetInnerHTML: { __html: l } }),
    /* @__PURE__ */ o("div", { "data-lw-skeleton-mode": "light", children: /* @__PURE__ */ o(So, { themeMode: "light", ...n }) }),
    /* @__PURE__ */ o("div", { "data-lw-skeleton-mode": "dark", children: /* @__PURE__ */ o(So, { themeMode: "dark", ...n }) })
  ] });
}, ci = ii;
class se extends Error {
  constructor(t, n, l = null) {
    super(t), this.name = "AuthError", this.code = n, this.originalError = l, this.timestamp = (/* @__PURE__ */ new Date()).toISOString();
  }
}
const ce = {
  STORAGE_ACCESS_DENIED: "STORAGE_ACCESS_DENIED",
  TOKEN_NOT_FOUND: "TOKEN_NOT_FOUND",
  TOKEN_INVALID: "TOKEN_INVALID",
  TOKEN_EXPIRED: "TOKEN_EXPIRED",
  LOGOUT_FAILED: "LOGOUT_FAILED",
  UNKNOWN_ERROR: "UNKNOWN_ERROR"
}, _e = {
  ACCESS_TOKEN: "lumoraAccessToken",
  REFRESH_TOKEN: "lumoraRefreshToken",
  USER: "lumoraUser"
}, Qe = {
  ACCESS_TOKEN: "accessToken",
  REFRESH_TOKEN: "refreshToken",
  USER: "user"
}, di = () => {
  if (!(typeof window > "u" || !window.localStorage))
    try {
      const e = localStorage.getItem(
        Qe.ACCESS_TOKEN
      ), t = localStorage.getItem(
        Qe.REFRESH_TOKEN
      ), n = localStorage.getItem(Qe.USER);
      e && !localStorage.getItem(_e.ACCESS_TOKEN) && localStorage.setItem(_e.ACCESS_TOKEN, e), t && !localStorage.getItem(_e.REFRESH_TOKEN) && localStorage.setItem(
        _e.REFRESH_TOKEN,
        t
      ), n && !localStorage.getItem(_e.USER) && localStorage.setItem(_e.USER, n), (e || t || n) && (localStorage.removeItem(Qe.ACCESS_TOKEN), localStorage.removeItem(Qe.REFRESH_TOKEN), localStorage.removeItem(Qe.USER));
    } catch (e) {
      console.warn("Failed to migrate legacy localStorage keys:", e);
    }
}, _o = (e) => {
  try {
    if (typeof window > "u")
      return console.warn("localStorage access attempted on server side"), null;
    if (!window.localStorage)
      throw new se(
        "localStorage is not available",
        ce.STORAGE_ACCESS_DENIED
      );
    return window.localStorage.getItem(e);
  } catch (t) {
    throw t.name === "QuotaExceededError" ? (console.error("Storage quota exceeded"), new se(
      "Storage quota exceeded. Please clear browser data.",
      ce.STORAGE_ACCESS_DENIED,
      t
    )) : t.name === "SecurityError" ? (console.error(
      "localStorage access denied (private browsing or security settings)"
    ), new se(
      "Access to localStorage is denied. Please check browser settings.",
      ce.STORAGE_ACCESS_DENIED,
      t
    )) : (console.error(
      "Unexpected error accessing localStorage:",
      t.name
    ), new se(
      "Failed to access storage",
      ce.STORAGE_ACCESS_DENIED,
      t
    ));
  }
}, Ro = (e, t) => {
  try {
    if (typeof window > "u")
      return console.warn("localStorage write attempted on server side"), !1;
    if (!window.localStorage)
      throw new se(
        "localStorage is not available",
        ce.STORAGE_ACCESS_DENIED
      );
    return window.localStorage.setItem(e, t), !0;
  } catch (n) {
    throw n.name === "QuotaExceededError" ? (console.error("Storage quota exceeded"), new se(
      "Storage quota exceeded. Please clear browser data.",
      ce.STORAGE_ACCESS_DENIED,
      n
    )) : n.name === "SecurityError" ? (console.error(
      "localStorage write denied (private browsing or security settings)"
    ), new se(
      "Access to localStorage is denied. Please check browser settings.",
      ce.STORAGE_ACCESS_DENIED,
      n
    )) : (console.error(
      "Unexpected error writing to localStorage:",
      n.name
    ), new se(
      "Failed to write to storage",
      ce.STORAGE_ACCESS_DENIED,
      n
    ));
  }
}, Gr = (e) => {
  try {
    return typeof window > "u" ? (console.warn("localStorage removal attempted on server side"), !1) : window.localStorage ? (window.localStorage.removeItem(e), !0) : (console.warn("localStorage is not available"), !1);
  } catch (t) {
    return t.name !== "SecurityError" && console.warn(`Could not remove localStorage key "${e}"`), !1;
  }
}, cn = () => {
  try {
    di();
    const e = _o(_e.ACCESS_TOKEN), t = _o(_e.REFRESH_TOKEN), n = _o(_e.USER);
    let l = null;
    if (n)
      try {
        l = JSON.parse(n);
      } catch {
        n && n !== "null" && n !== "undefined" && console.warn(
          "Invalid user data in localStorage, clearing:",
          n.substring(0, 50)
        ), Gr(_e.USER);
      }
    return {
      accessToken: e,
      refreshToken: t,
      user: l
    };
  } catch (e) {
    throw e instanceof se ? e : new se(
      "Failed to retrieve authentication tokens",
      ce.UNKNOWN_ERROR,
      e
    );
  }
}, ui = () => {
  try {
    const { accessToken: e, refreshToken: t } = cn();
    return !(e || t) ? {
      isAuthenticated: !1,
      error: new se(
        "No authentication tokens found",
        ce.TOKEN_NOT_FOUND
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
        ce.UNKNOWN_ERROR,
        e
      )
    };
  }
}, Ur = (e, t, n = null) => {
  try {
    if (!e && !t)
      throw new se(
        "At least one token must be provided",
        ce.TOKEN_INVALID
      );
    return e && Ro(_e.ACCESS_TOKEN, e), t && Ro(_e.REFRESH_TOKEN, t), n && Ro(_e.USER, JSON.stringify(n)), {
      success: !0,
      error: null
    };
  } catch (l) {
    return console.error("Failed to store authentication tokens:", l), {
      success: !1,
      error: l instanceof se ? l : new se(
        "Failed to store tokens",
        ce.UNKNOWN_ERROR,
        l
      )
    };
  }
}, dn = () => {
  try {
    return [
      _e.ACCESS_TOKEN,
      _e.REFRESH_TOKEN,
      _e.USER,
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
        ce.LOGOUT_FAILED,
        e
      )
    };
  }
}, wi = () => {
  try {
    const { user: e } = cn();
    return {
      user: e,
      error: null
    };
  } catch (e) {
    return console.error("Failed to get current user:", e), {
      user: null,
      error: e instanceof se ? e : new se(
        "Failed to retrieve user data",
        ce.UNKNOWN_ERROR,
        e
      )
    };
  }
}, dd = (e) => {
  if (!(e instanceof se))
    return "An unexpected error occurred. Please try again.";
  switch (e.code) {
    case ce.STORAGE_ACCESS_DENIED:
      return "Unable to access browser storage. Please check your browser settings and disable private browsing if enabled.";
    case ce.TOKEN_NOT_FOUND:
      return "You are not logged in. Please sign in to continue.";
    case ce.TOKEN_INVALID:
      return "Your session is invalid. Please sign in again.";
    case ce.TOKEN_EXPIRED:
      return "Your session has expired. Please sign in again.";
    case ce.LOGOUT_FAILED:
      return "Failed to log out properly. Please clear your browser cache and try again.";
    case ce.UNKNOWN_ERROR:
    default:
      return "An unexpected error occurred. Please try again or contact support if the problem persists.";
  }
}, Po = (e, t = "Unknown") => {
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
}, fi = (e) => {
  if (!e)
    throw new Error("API base URL is required to create axios client");
  const t = Ol.create({
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
      const { accessToken: a } = cn();
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
      const { refreshToken: w } = cn();
      if (!w) {
        const f = new Error(
          "No refresh token available for token refresh"
        );
        return Po(f, "AxiosClient - Token Refresh"), dn(), typeof window < "u" && (window.location.href = "/login"), Promise.reject(i);
      }
      if (n && l)
        return new Promise((f, h) => {
          r.push({ resolve: f, reject: h });
        }).then((f) => {
          const {
            accessToken: h,
            refreshToken: R
          } = f;
          if (a.headers && (a.headers.Authorization = `Bearer ${h}`), d.includes("/auth/logout"))
            try {
              if (typeof a.data == "string") {
                const _ = JSON.parse(
                  a.data || "{}"
                );
                _.refresh_token = R, a.data = JSON.stringify(_);
              } else
                a.data && typeof a.data == "object" ? a.data.refresh_token = R : a.data = JSON.stringify({
                  refresh_token: R
                });
            } catch {
              a.data = JSON.stringify({
                refresh_token: R
              });
            }
          return t(a);
        }).catch((f) => Promise.reject(f));
      n = !0, l = Ol.post(
        `${e}/auth/refresh`,
        {
          refresh_token: w
        }
      );
      try {
        const f = await l, { accessToken: h, refreshToken: R } = f.data;
        if (Ur(h, R, null), s(null, {
          accessToken: h,
          refreshToken: R
        }), a.headers && (a.headers.Authorization = `Bearer ${h}`), d.includes("/auth/logout"))
          try {
            if (typeof a.data == "string") {
              const _ = JSON.parse(
                a.data || "{}"
              );
              _.refresh_token = R, a.data = JSON.stringify(_);
            } else
              a.data && typeof a.data == "object" ? a.data.refresh_token = R : a.data = JSON.stringify({
                refresh_token: R
              });
          } catch {
            a.data = JSON.stringify({
              refresh_token: R
            });
          }
        return t(a);
      } catch (f) {
        return Po(
          f,
          "AxiosClient - Token Refresh Failed"
        ), s(f), dn(), typeof window < "u" && (window.location.href = "/login"), Promise.reject(f);
      } finally {
        n = !1, l = null;
      }
    }
  ), t;
}, mi = async (e, t) => {
  const { accessToken: n, refreshToken: l } = cn();
  if (n)
    return !0;
  if (l)
    try {
      const r = await e.post("/auth/refresh", {
        refresh_token: l
      });
      if (r.data.success && r.data.accessToken)
        return Ur(
          r.data.accessToken,
          r.data.refreshToken || null,
          null
        ), !0;
    } catch (r) {
      Po(r, "TokenValidator - Refresh Failed");
    }
  return dn(), t ? t() : window.location.href = "/login", !1;
}, pi = ({ size: e = 20 }) => /* @__PURE__ */ y(
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
), Qt = pi, ql = Oe(Vo), Xr = "#09C1AE", hi = "0px 2px 4px -1px rgba(0,0,0,0.2),0px 4px 5px 0px rgba(0,0,0,0.14),0px 1px 10px 0px rgba(0,0,0,0.12)", gi = "0px 3px 5px -1px rgba(0,0,0,0.2),0px 6px 10px 0px rgba(0,0,0,0.14),0px 1px 18px 0px rgba(0,0,0,0.12)", On = "lw:relative lw:overflow-hidden lw:[&>*]:relative lw:[&>*]:z-[2]", In = ({
  radiusPx: e,
  cover: t
}) => /* @__PURE__ */ y(xe, { children: [
  /* @__PURE__ */ o(
    "span",
    {
      "aria-hidden": !0,
      className: "lw:pointer-events-none lw:absolute! lw:inset-[-50%] lw:z-0! lw:animate-spin lw:motion-reduce:animate-none",
      style: {
        background: `conic-gradient(from 0deg, rgba(9, 193, 174, 0.25) 0deg 250deg, ${Xr} 300deg, #0DD4BF 330deg, rgba(9, 193, 174, 0.25) 360deg)`,
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
] }), bi = ({
  variant: e,
  onClick: t,
  active: n = !1,
  busy: l = !1,
  shortcutKeys: r,
  accentColor: s = "#01584f",
  rightOffsetPx: i = 0
}) => {
  const a = Jo(), u = c.useContext(wn), d = Ye(), m = r ? `Ask Nexa (${r.join("")})` : "Ask Nexa", w = {
    type: "button",
    onClick: t,
    "aria-label": "Ask Nexa",
    "aria-pressed": n,
    "data-testid": "assistant-button"
  }, g = x(
    "lw:border lw:border-solid lw:bg-[rgba(9,193,174,0.08)] lw:hover:bg-[rgba(9,193,174,0.14)]",
    n ? "lw:border-[#09C1AE]" : "lw:border-[rgba(9,193,174,0.45)]"
  );
  if (e === "sidebar")
    return /* @__PURE__ */ y(
      "button",
      {
        ...w,
        "data-variant": "sidebar",
        className: x(
          "lw:flex lw:h-11 lw:w-full lw:cursor-pointer lw:items-center lw:justify-start lw:gap-2.5 lw:rounded-lg lw:px-3 lw:outline-none lw:transition-[border-color,background-color] lw:duration-150 lw:focus-visible:outline-2 lw:focus-visible:outline-solid lw:focus-visible:outline-[#09C1AE] lw:focus-visible:outline-offset-2",
          g,
          l && On
        ),
        style: { color: s },
        children: [
          l && /* @__PURE__ */ o(In, { radiusPx: 8, cover: "var(--lw-bg-surface)" }),
          /* @__PURE__ */ o(Qt, { size: 20 }),
          /* @__PURE__ */ o("span", { className: "lw:grow lw:text-left lw:text-sm lw:font-semibold lw:text-inherit", children: "Ask Nexa" }),
          r && /* @__PURE__ */ o(ni, { keys: r })
        ]
      }
    );
  if (e === "sidebar-icon" && u && $o) {
    const f = Nr(Xr, d, "clear");
    return /* @__PURE__ */ o(je, { title: m, side: "right", arrow: !0, ...a, children: /* @__PURE__ */ y(
      "button",
      {
        ...w,
        "data-variant": "sidebar-icon",
        "data-rail-keep-fill": !0,
        className: x(
          "lw:inline-flex lw:cursor-pointer lw:items-center lw:justify-center lw:outline-none lw:hover:[transform:scale(1.07)] lw:active:[transform:scale(0.92)] lw:active:[transition-duration:90ms]! lw:motion-reduce:hover:[transform:none] lw:motion-reduce:active:[transform:none] lw:[&_svg]:[filter:drop-shadow(0_1px_1.5px_rgba(0,0,0,0.25))]",
          Ce,
          l && On
        ),
        style: {
          width: Te,
          height: Te,
          borderRadius: et,
          background: f.background,
          boxShadow: n ? `${f.boxShadow}, 0 0 0 3px rgba(13, 212, 191, 0.3), 0 0 18px rgba(13, 212, 191, 0.45)` : f.boxShadow,
          backdropFilter: "blur(8px) saturate(180%)",
          WebkitBackdropFilter: "blur(8px) saturate(180%)",
          transition: `transform ${ql.duration}ms ${ql.easing}, box-shadow 200ms ease`
        },
        children: [
          l && // The same light over a glass interior (tint over an
          // opaque base, so the beam stays a 2px line)
          /* @__PURE__ */ o(
            In,
            {
              radiusPx: et,
              cover: `${f.background}, ${d ? "#16202c" : "#f2fbfa"}`
            }
          ),
          /* @__PURE__ */ o(Qt, { size: 18 })
        ]
      }
    ) });
  }
  if (e === "sidebar-icon") {
    const f = u ? Te : 44;
    return /* @__PURE__ */ o(je, { title: m, side: "right", arrow: !0, ...a, children: /* @__PURE__ */ y(
      "button",
      {
        ...w,
        "data-variant": "sidebar-icon",
        "data-rail-keep-fill": u || void 0,
        className: x(
          "lw:inline-flex lw:shrink-0 lw:cursor-pointer lw:items-center lw:justify-center lw:rounded-lg lw:outline-none lw:transition-colors lw:focus-visible:ring-2 lw:focus-visible:ring-ring",
          g,
          l && On
        ),
        style: { width: f, height: f },
        children: [
          l && /* @__PURE__ */ o(In, { radiusPx: 8, cover: "var(--lw-bg-surface)" }),
          /* @__PURE__ */ o(Qt, { size: u ? 18 : 20 })
        ]
      }
    ) });
  }
  return /* @__PURE__ */ o(je, { title: m, side: "left", children: /* @__PURE__ */ y(
    "button",
    {
      ...w,
      "data-variant": "floating",
      className: x(
        "lw:fixed lw:bottom-6 lw:z-[1150] lw:inline-flex lw:size-[52px] lw:cursor-pointer lw:items-center lw:justify-center lw:rounded-2xl lw:bg-surface lw:p-0 lw:outline-offset-2 lw:transition-[right,box-shadow] lw:duration-[225ms] lw:ease-in-out lw:[box-shadow:var(--lw-shadow-rest)] lw:hover:[box-shadow:var(--lw-shadow-hover)] lw:focus-visible:outline-2 lw:focus-visible:outline-solid lw:focus-visible:outline-[#09C1AE]",
        n ? "lw:outline-2 lw:outline-solid lw:outline-[#09C1AE]" : "lw:outline-none",
        l && On
      ),
      style: {
        right: 24 + i,
        "--lw-shadow-rest": hi,
        "--lw-shadow-hover": gi
      },
      children: [
        l && /* @__PURE__ */ o(In, { radiusPx: 16, cover: "var(--lw-bg-surface)" }),
        /* @__PURE__ */ o("span", { className: "lw:flex lw:items-center", children: /* @__PURE__ */ o(Qt, { size: 26 }) })
      ]
    }
  ) });
}, Vl = bi, xi = Us(
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
        className: x(xi({ variant: t, size: n }), e),
        ...s
      }
    );
  }
);
Zn.displayName = "Button";
const vi = ({
  title: e = "",
  message: t = "",
  buttonText: n = "",
  onButtonClick: l,
  show: r = !0
}) => r ? /* @__PURE__ */ y("div", { className: "lw:m-3 lw:shrink-0 lw:rounded-lg lw:border lw:border-solid lw:border-border lw:bg-card lw:p-4 lw:text-card-foreground", children: [
  /* @__PURE__ */ o(ks, { className: "lw:size-5", "aria-hidden": !0 }),
  /* @__PURE__ */ o("p", { className: "lw:mb-[0.35em] lw:text-sm lw:font-semibold", children: e }),
  /* @__PURE__ */ o("p", { className: "lw:mb-4 lw:text-sm lw:text-muted-foreground", children: t }),
  /* @__PURE__ */ o(Zn, { size: "sm", className: "lw:w-full", onClick: l, children: n })
] }) : null, $n = vi, To = 225, jt = 195, Ao = "cubic-bezier(0, 0, 0.2, 1)", Co = "cubic-bezier(0.4, 0, 0.6, 1)", Yt = 24, yi = 720, Ei = 1140, Ni = 1250, Si = ({
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
  const m = c.useRef(!1);
  c.useEffect(() => {
    const N = requestAnimationFrame(() => {
      m.current = !0;
    });
    return () => cancelAnimationFrame(N);
  }, []);
  const [w, g] = c.useState(e), [f, h] = c.useState(e);
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
  const R = n === "docked", _ = Yt + i;
  let v;
  if (a ? v = {
    top: 0,
    left: 0,
    right: 0,
    bottom: u,
    borderRadius: 0
  } : R ? v = {
    top: 0,
    right: 0,
    bottom: 0,
    width: r,
    maxWidth: "100vw",
    borderRadius: 0,
    borderWidth: "0 0 0 1px"
  } : v = {
    bottom: _,
    ...l === "left" ? { left: s + Yt } : { right: Yt },
    width: r,
    maxWidth: `calc(100vw - ${Yt * 2}px)`,
    height: `min(${yi}px, calc(100vh - ${_ + Yt}px))`,
    borderRadius: "12px"
  }, !e && !w)
    return null;
  const E = e && f, S = !m.current, I = R ? {
    transform: E ? "none" : "translateX(100%)",
    transition: e ? `transform ${S ? 0 : To}ms ${Ao}` : `transform ${jt}ms ${Co}, visibility 0ms linear ${jt}ms`
  } : {
    transform: E ? "none" : "scale(0.75, 0.5625)",
    opacity: E ? 1 : 0,
    transformOrigin: l === "left" ? "bottom left" : "bottom right",
    transition: e ? `opacity ${To}ms ${Ao}, transform ${Math.round(To * 0.666)}ms ${Ao}` : `opacity ${jt}ms ${Co}, transform ${jt}ms ${Co}, visibility 0ms linear ${jt}ms`
  };
  return /* @__PURE__ */ o(
    "div",
    {
      role: R ? "complementary" : "dialog",
      "aria-label": "Nexa chat",
      "aria-hidden": e ? void 0 : !0,
      "data-testid": "chat-panel",
      "data-variant": n,
      "data-lw-host": "",
      className: `lw:fixed lw:flex lw:flex-col lw:overflow-hidden lw:border lw:border-solid lw:border-border lw:bg-surface lw:text-foreground lw:shadow-popover ${xr}`,
      style: {
        zIndex: R ? Ei : Ni,
        visibility: e ? "visible" : "hidden",
        ...v,
        ...I
      },
      children: t
    }
  );
}, _i = Si, fn = zn.Root, mn = zn.Anchor, Ri = "lw:rounded-md lw:border lw:border-solid lw:border-border lw:bg-popover lw:text-popover-foreground lw:shadow-popover lw:outline-none", Lt = c.forwardRef(
  ({
    className: e,
    align: t = "start",
    sideOffset: n = 4,
    unstyled: l = !1,
    ...r
  }, s) => {
    const i = un();
    return /* @__PURE__ */ o(zn.Portal, { children: /* @__PURE__ */ o(
      zn.Content,
      {
        ref: s,
        ...i,
        "data-slot": "popover-content",
        align: t,
        sideOffset: n,
        className: x(
          "lw:z-[1400] lw:outline-none",
          !l && x(
            Ri,
            "lw:p-3 lw:data-[state=open]:animate-in lw:data-[state=open]:fade-in-0 lw:data-[state=open]:zoom-in-95 lw:data-[state=closed]:animate-out lw:data-[state=closed]:fade-out-0 lw:data-[state=closed]:zoom-out-95"
          ),
          e
        ),
        ...r
      }
    ) });
  }
);
Lt.displayName = "PopoverContent";
const Ti = 180, Zl = 250, Ai = "#01584F", Kr = "var(--lw-text-muted)", Ci = ({
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
}, Oi = "lw:inline-flex lw:shrink-0 lw:items-center lw:justify-center lw:transition-[background-color,border-radius] lw:duration-150 lw:outline-none lw:focus-visible:ring-2 lw:focus-visible:ring-ring lw:disabled:cursor-default lw:disabled:opacity-50 lw:[&_svg]:size-6", jr = (e, t, n, l) => {
  const r = e ? 48 : 44, s = e ? Kr : t, i = e ? Ai : t, a = x(
    Oi,
    l ? "lw:h-auto lw:w-full lw:max-w-full lw:flex-col lw:rounded-sm lw:px-2 lw:py-1" : n ? "lw:rounded-sm" : "lw:rounded-full lw:hover:rounded-sm",
    !n && "lw:hover:bg-accent"
  ), u = {
    color: n ? "#ffffff" : s,
    backgroundColor: n ? i : void 0,
    ...l ? { minWidth: r, minHeight: r } : { width: r, height: r }
  };
  return { activeBg: i, className: a, style: u };
}, Yr = ({ link: e }) => /* @__PURE__ */ y("span", { className: "lw:flex lw:w-full lw:flex-col lw:items-center lw:gap-2", children: [
  /* @__PURE__ */ o("span", { className: "lw:flex lw:items-center lw:justify-center lw:text-inherit", children: e.icon }),
  /* @__PURE__ */ o(
    Ci,
    {
      text: e.text,
      testId: `rail-item-caption-${e.text}`
    }
  )
] }), qr = (e, t, n) => n ? e : /* @__PURE__ */ o(Dn, { title: t, side: "right", arrow: !0, children: e }), Ii = (e) => {
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
}, $i = ({
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
  ), m = c.useRef(null), w = c.useRef(null), g = c.useRef(!1), f = c.useRef(!1), h = c.useId(), R = () => {
    d.current && (clearTimeout(d.current), d.current = null);
  }, _ = () => {
    R(), d.current = setTimeout(() => {
      u(!1), d.current = null;
    }, Ti);
  }, v = () => {
    R(), u(!0);
  };
  c.useEffect(() => {
    if (!a)
      return;
    const D = (F) => {
      var P;
      F.key === "Escape" && (u(!1), (P = w.current) == null || P.focus());
    };
    return document.addEventListener("keydown", D), () => document.removeEventListener("keydown", D);
  }, [a]), c.useEffect(() => {
    if (!a || !f.current)
      return;
    const D = globalThis.requestAnimationFrame(() => {
      var P;
      const F = (P = m.current) == null ? void 0 : P.querySelector(
        '[role="menuitem"]'
      );
      F == null || F.focus(), f.current = !1;
    });
    return () => cancelAnimationFrame(D);
  }, [a]);
  const E = st(e, t), {
    activeBg: S,
    className: I,
    style: N
  } = jr(r, l, E, i), b = {
    "aria-label": e.text,
    onFocus: () => {
      g.current || v();
    },
    onBlur: (D) => {
      var P;
      const F = D.relatedTarget;
      F && ((P = m.current) != null && P.contains(F)) || _();
    },
    onKeyDown: (D) => {
      D.key === "ArrowDown" && (D.preventDefault(), f.current = !0, v());
    },
    onClick: (D) => {
      D.stopPropagation(), !(e.path && !$t(D)) && (D.preventDefault(), e.path && (n == null || n(e.path)));
    },
    "aria-haspopup": "menu",
    "aria-expanded": a,
    "aria-controls": a ? h : void 0,
    "data-testid": `rail-submenu-trigger-${e.text}`,
    className: I,
    style: N
  }, T = i ? /* @__PURE__ */ o(Yr, { link: e }) : e.icon, C = e.path ? /* @__PURE__ */ o(
    "a",
    {
      ref: w,
      href: e.path,
      ...b,
      children: T
    }
  ) : /* @__PURE__ */ o(
    "button",
    {
      ref: w,
      type: "button",
      ...b,
      children: T
    }
  );
  return /* @__PURE__ */ y(fn, { open: a, children: [
    /* @__PURE__ */ o("div", { className: "lw:flex lw:w-full lw:justify-center", children: /* @__PURE__ */ o(mn, { asChild: !0, children: /* @__PURE__ */ o(
      "div",
      {
        "data-testid": `rail-submenu-anchor-${e.text}`,
        className: "lw:inline-flex lw:max-w-full",
        onMouseEnter: () => {
          g.current = !0, v();
        },
        onMouseLeave: () => {
          g.current = !1, _();
        },
        children: qr(C, e.text, i)
      }
    ) }) }),
    /* @__PURE__ */ o(
      Lt,
      {
        ref: m,
        unstyled: !0,
        side: "right",
        align: "start",
        sideOffset: 8,
        onOpenAutoFocus: (D) => D.preventDefault(),
        onCloseAutoFocus: (D) => D.preventDefault(),
        onInteractOutside: (D) => {
          var F;
          if ((F = w.current) != null && F.contains(D.target)) {
            D.preventDefault();
            return;
          }
          u(!1);
        },
        onEscapeKeyDown: () => u(!1),
        onMouseEnter: R,
        onMouseLeave: _,
        "data-testid": `rail-submenu-panel-${e.text}`,
        className: "lw:z-[1300] lw:min-w-0 lw:rounded-sm lw:border lw:border-solid lw:border-border lw:bg-popover lw:py-1 lw:text-popover-foreground lw:shadow-popover",
        style: {
          backgroundColor: s,
          maxWidth: Zl
        },
        children: /* @__PURE__ */ o(
          "div",
          {
            id: h,
            role: "menu",
            onKeyDown: Ii,
            style: { maxWidth: Zl },
            children: K(e.subitems, e.text, 0)
          }
        )
      }
    )
  ] });
  function K(D, F, P) {
    return D.flatMap((G) => {
      const oe = Rt(F, G), z = 16 + P * 12;
      if (Ct(G))
        return [
          /* @__PURE__ */ o(
            "div",
            {
              role: "presentation",
              title: G.text,
              className: "lw:overflow-hidden lw:pr-4 lw:text-[0.7rem] lw:leading-[28px] lw:font-medium lw:tracking-[0.06em] lw:text-ellipsis lw:whitespace-nowrap lw:uppercase lw:text-muted-foreground",
              style: { paddingLeft: z },
              children: G.text
            },
            oe
          ),
          ...K(G.subitems, oe, P + 1)
        ];
      const A = Xe(G, t), $ = G.path ? "a" : "div";
      return [
        /* @__PURE__ */ y(
          $,
          {
            role: "menuitem",
            tabIndex: -1,
            title: G.text,
            "aria-disabled": G.path ? void 0 : !0,
            "data-selected": A ? "true" : void 0,
            ...G.path ? { href: G.path } : {},
            onClick: (B) => {
              G.path && $t(B) && (B.preventDefault(), n == null || n(G.path), u(!1));
            },
            className: x(
              "lw:mx-1 lw:my-[1px] lw:flex lw:min-h-8 lw:max-w-full lw:cursor-pointer lw:items-center lw:overflow-hidden lw:rounded-sm lw:pr-4 lw:text-sm lw:outline-none lw:select-none lw:[&_svg]:size-5",
              !A && "lw:hover:bg-accent lw:focus-visible:bg-selected",
              !G.path && "lw:pointer-events-none lw:opacity-40"
            ),
            style: {
              paddingLeft: z,
              color: A ? "#ffffff" : r ? Kr : l,
              backgroundColor: A ? S : void 0
            },
            children: [
              G.icon ? /* @__PURE__ */ o("span", { className: "lw:inline-flex lw:min-w-9 lw:shrink-0 lw:text-inherit", children: G.icon }) : null,
              /* @__PURE__ */ o("span", { className: "lw:min-w-0 lw:flex-auto lw:overflow-hidden lw:text-ellipsis lw:whitespace-nowrap", children: G.text })
            ]
          },
          oe
        )
      ];
    });
  }
}, ki = ({
  link: e,
  activePath: t,
  onLinkClick: n,
  accentColor: l,
  isSecondary: r,
  railShowTitles: s
}) => {
  const i = !!(e.path && t === e.path), { className: a, style: u } = jr(
    r,
    l,
    i,
    s
  ), d = (w) => {
    w.stopPropagation(), !(e.path && !$t(w)) && (w.preventDefault(), e.path && (n == null || n(e.path)));
  }, m = s ? /* @__PURE__ */ o(Yr, { link: e }) : e.icon;
  return qr(
    e.path ? /* @__PURE__ */ o(
      "a",
      {
        href: e.path,
        "aria-label": e.text,
        onClick: d,
        className: a,
        style: u,
        children: m
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
        children: m
      }
    ),
    e.text,
    s
  );
}, Li = () => /* @__PURE__ */ o("div", { className: "lw:flex lw:w-full lw:justify-center", children: /* @__PURE__ */ o(an, { className: "lw:w-[60%]" }) }), Di = () => /* @__PURE__ */ o("div", { className: "lw:my-4 lw:flex lw:w-full lw:justify-center", children: /* @__PURE__ */ o(an, { className: "lw:w-[60%]" }) }), Jl = (e, t) => e.map((n, l) => /* @__PURE__ */ y(c.Fragment, { children: [
  t(n, l),
  l < e.length - 1 ? /* @__PURE__ */ o(Li, {}) : null
] }, l)), Mi = ({
  mainLinks: e,
  secondaryLinks: t = [],
  activePath: n,
  onLinkClick: l,
  accentColor: r = "#01584f",
  surfaceBackgroundColor: s,
  railShowTitles: i = !1
}) => {
  const a = (d, m) => Ct(d) ? /* @__PURE__ */ o(
    $i,
    {
      link: d,
      activePath: n,
      onLinkClick: l,
      accentColor: r,
      isSecondary: m,
      surfaceBackgroundColor: s,
      railShowTitles: i
    }
  ) : /* @__PURE__ */ o(
    ki,
    {
      link: d,
      activePath: n,
      onLinkClick: l,
      accentColor: r,
      isSecondary: m,
      railShowTitles: i
    }
  ), u = i ? "lw:gap-2.5" : "lw:gap-2";
  return /* @__PURE__ */ y(
    "div",
    {
      className: x(
        "lw:box-border lw:flex lw:w-full lw:grow lw:flex-col lw:items-center lw:justify-start lw:pt-4",
        u
      ),
      children: [
        Jl(e, (d) => a(d, !1)),
        t.length > 0 ? /* @__PURE__ */ y(xe, { children: [
          /* @__PURE__ */ o(Di, {}),
          /* @__PURE__ */ o("div", { className: "lw:mt-auto lw:pb-4", children: /* @__PURE__ */ o(
            "div",
            {
              className: x(
                "lw:flex lw:flex-col lw:items-center",
                u
              ),
              children: Jl(
                t,
                (d) => a(d, !0)
              )
            }
          ) })
        ] }) : null
      ]
    }
  );
}, Pi = Mi, Fi = It.Root, Bi = It.Trigger, zi = "lw:relative lw:flex lw:min-h-8 lw:cursor-pointer lw:items-center lw:gap-2 lw:rounded-sm lw:px-2 lw:py-1 lw:text-sm lw:outline-none lw:select-none lw:focus:bg-accent lw:data-[highlighted]:bg-accent lw:data-[disabled]:pointer-events-none lw:data-[disabled]:opacity-50 lw:data-[variant=destructive]:text-destructive lw:[&_svg]:pointer-events-none lw:[&_svg]:shrink-0 lw:[&_svg:not([class*='size-'])]:size-4", Hi = "lw:z-[1400] lw:max-h-(--radix-dropdown-menu-content-available-height) lw:min-w-40 lw:overflow-x-hidden lw:overflow-y-auto lw:rounded-md lw:border lw:border-solid lw:border-border lw:bg-popover lw:p-1 lw:text-popover-foreground lw:shadow-popover lw:data-[state=open]:animate-in lw:data-[state=open]:fade-in-0 lw:data-[state=open]:zoom-in-95 lw:data-[state=closed]:animate-out lw:data-[state=closed]:fade-out-0 lw:data-[state=closed]:zoom-out-95", Vr = c.forwardRef(
  ({
    className: e,
    sideOffset: t = 4,
    align: n = "start",
    unstyled: l = !1,
    ...r
  }, s) => {
    const i = un();
    return /* @__PURE__ */ o(It.Portal, { children: /* @__PURE__ */ o(
      It.Content,
      {
        ref: s,
        ...i,
        "data-slot": "dropdown-menu-content",
        sideOffset: t,
        align: n,
        className: x(
          l ? "lw:z-[1400] lw:outline-none" : Hi,
          e
        ),
        ...r
      }
    ) });
  }
);
Vr.displayName = "DropdownMenuContent";
const en = c.forwardRef(({ className: e, variant: t = "default", ...n }, l) => /* @__PURE__ */ o(
  It.Item,
  {
    ref: l,
    "data-slot": "dropdown-menu-item",
    "data-variant": t,
    className: x(zi, e),
    ...n
  }
));
en.displayName = "DropdownMenuItem";
const Bn = c.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ o(
  It.Separator,
  {
    ref: n,
    "data-slot": "dropdown-menu-separator",
    className: x("lw:-mx-1 lw:my-1 lw:h-px lw:bg-border", e),
    ...t
  }
));
Bn.displayName = "DropdownMenuSeparator";
const Wi = (e) => e ? gr(e) : "USER", Gi = (e) => e.split(/\s+/).filter(Boolean).slice(0, 2).map((t) => t.charAt(0).toUpperCase()).join(""), Ql = "lw:max-w-full lw:overflow-hidden lw:text-ellipsis lw:whitespace-nowrap", Fo = ({ count: e }) => e ? /* @__PURE__ */ o("span", { className: "lw:h-5 lw:min-w-[22px] lw:rounded-[10px] lw:bg-destructive-fill lw:px-1.5 lw:text-center lw:text-xs lw:leading-5 lw:font-semibold lw:text-white", children: e > 99 ? "99+" : e }) : null, nl = ({ name: e, avatar: t, color: n, size: l = 36 }) => {
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
      ) : Gi(e)
    }
  );
}, Zr = ({ name: e, role: t, avatar: n, avatarColor: l, showText: r }) => /* @__PURE__ */ y(xe, { children: [
  /* @__PURE__ */ o(nl, { name: e, avatar: n, color: l }),
  r && /* @__PURE__ */ y("span", { className: "lw:flex lw:min-w-0 lw:grow lw:flex-col lw:items-start lw:text-left", children: [
    /* @__PURE__ */ o(
      "span",
      {
        className: x(
          Ql,
          "lw:text-sm lw:leading-[1.43] lw:font-semibold"
        ),
        children: e
      }
    ),
    /* @__PURE__ */ o(
      "span",
      {
        className: x(
          Ql,
          "lw:text-xs lw:leading-[1.66] lw:opacity-80"
        ),
        children: Wi(t)
      }
    )
  ] })
] }), Ui = {
  above: { side: "top", align: "start", sideOffset: 8 },
  "above-end": { side: "top", align: "end", sideOffset: 8 },
  beside: { side: "right", align: "end", sideOffset: 12 }
}, kn = "lw:mx-1 lw:min-h-9 lw:gap-0 lw:rounded-md lw:px-4 lw:text-sm lw:[&_svg:not([class*='size-'])]:size-5", Ln = "lw:inline-flex lw:min-w-9 lw:shrink-0 lw:items-center lw:text-muted-foreground", Xi = ({
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
  userName: m = "User",
  userRole: w,
  userAvatar: g,
  menuItems: f = [],
  showSettings: h,
  onSettingsClick: R,
  showThemeToggler: _,
  theme: v,
  onThemeToggle: E,
  onLogout: S
}) => {
  const I = (D) => () => {
    t(), D == null || D();
  }, N = !!e, b = N ? e.getBoundingClientRect() : null, T = c.useRef(null);
  c.useEffect(() => {
    N && typeof document < "u" && (T.current = document.activeElement);
  }, [N]);
  const C = Ui[n], K = (D, F) => {
    const P = v === D;
    return /* @__PURE__ */ o(
      "button",
      {
        type: "button",
        "aria-pressed": P,
        disabled: !E,
        onClick: () => !P && (E == null ? void 0 : E()),
        className: x(
          "lw:h-8 lw:flex-1 lw:cursor-pointer lw:rounded-md lw:text-sm lw:font-medium lw:outline-none lw:transition-colors lw:focus-visible:ring-2 lw:focus-visible:ring-ring lw:disabled:cursor-default lw:disabled:opacity-50",
          P ? "lw:bg-surface lw:text-foreground lw:shadow-[0_1px_3px_rgba(0,0,0,0.12),0_1px_1px_rgba(0,0,0,0.08)]" : "lw:text-muted-foreground lw:hover:text-foreground"
        ),
        children: F
      }
    );
  };
  return /* @__PURE__ */ y(xe, { children: [
    N && !s && typeof document < "u" ? mr(
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
    /* @__PURE__ */ y(
      Fi,
      {
        open: N,
        onOpenChange: (D) => !D && t(),
        modal: !1,
        children: [
          /* @__PURE__ */ o(Bi, { asChild: !0, children: /* @__PURE__ */ o(
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
          /* @__PURE__ */ y(
            Vr,
            {
              ...r,
              side: C.side,
              align: C.align,
              sideOffset: C.sideOffset,
              collisionPadding: 8,
              onOpenAutoFocus: (D) => {
                s && D.preventDefault();
              },
              onCloseAutoFocus: (D) => {
                var F, P;
                D.preventDefault(), s || (P = (F = T.current) == null ? void 0 : F.focus) == null || P.call(F);
              },
              className: "lw:min-w-0 lw:rounded-[10px] lw:px-0 lw:py-1 lw:shadow-[0_8px_24px_rgba(0,0,0,0.12)]",
              style: {
                width: l ?? 240,
                maxWidth: "calc(100vw - 16px)"
              },
              children: [
                /* @__PURE__ */ o("div", { className: "lw:flex lw:flex-row lw:items-center lw:gap-2.5 lw:px-3 lw:py-2", children: /* @__PURE__ */ o(
                  Zr,
                  {
                    name: m,
                    role: w,
                    avatar: g,
                    avatarColor: i,
                    showText: !0
                  }
                ) }),
                /* @__PURE__ */ o(Bn, { className: "lw:mx-0" }),
                a && /* @__PURE__ */ y(
                  en,
                  {
                    className: kn,
                    onSelect: I(d),
                    children: [
                      /* @__PURE__ */ o("span", { className: Ln, children: /* @__PURE__ */ o(ur, {}) }),
                      /* @__PURE__ */ o("span", { className: "lw:flex-auto", children: "Notifications" }),
                      /* @__PURE__ */ o(Fo, { count: u })
                    ]
                  }
                ),
                f.map((D) => /* @__PURE__ */ y(
                  en,
                  {
                    className: kn,
                    onSelect: I(D.onClick),
                    children: [
                      /* @__PURE__ */ o("span", { className: Ln, children: D.icon }),
                      /* @__PURE__ */ o("span", { className: "lw:flex-auto", children: D.label }),
                      /* @__PURE__ */ o(Fo, { count: D.badge })
                    ]
                  },
                  D.key
                )),
                h && /* @__PURE__ */ y(
                  en,
                  {
                    className: kn,
                    onSelect: I(R),
                    children: [
                      /* @__PURE__ */ o("span", { className: Ln, children: /* @__PURE__ */ o(Ls, {}) }),
                      /* @__PURE__ */ o("span", { className: "lw:flex-auto", children: "Settings" })
                    ]
                  }
                ),
                _ && /* @__PURE__ */ y(xe, { children: [
                  /* @__PURE__ */ o(Bn, { className: "lw:mx-0" }),
                  /* @__PURE__ */ y("div", { className: "lw:px-3 lw:py-2", children: [
                    /* @__PURE__ */ o("span", { className: "lw:mb-1.5 lw:block lw:text-xs lw:leading-[1.5] lw:font-normal lw:tracking-[0.08em] lw:text-muted-foreground lw:uppercase", children: "— Theme" }),
                    /* @__PURE__ */ y(
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
                /* @__PURE__ */ y(
                  en,
                  {
                    className: x(
                      kn,
                      // The dark palette's error colors are too dim on the dark menu
                      v === "dark" ? "lw:text-[hsl(0,90%,65%)]" : "lw:text-destructive"
                    ),
                    onSelect: I(S),
                    children: [
                      /* @__PURE__ */ o("span", { className: x(Ln, "lw:text-inherit"), children: /* @__PURE__ */ o(wr, { className: "lw:size-5 lw:text-current" }) }),
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
}, Jr = Xi, Qr = 64, Ki = 2, qt = ({
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
  href: m,
  testId: w
}) => {
  const g = x(
    "lw:flex lw:h-full lw:min-w-0 lw:flex-[1_1_0] lw:cursor-pointer lw:flex-col lw:items-center lw:justify-center lw:gap-0.5 lw:border-0 lw:bg-transparent lw:p-0 lw:no-underline lw:outline-none lw:select-none",
    "lw:focus-visible:outline-2 lw:focus-visible:outline-offset-[-4px] lw:focus-visible:outline-(--lw-item-active) lw:focus-visible:outline-solid"
  ), f = {
    color: l ? s : r,
    "--lw-item-active": s
  }, h = /* @__PURE__ */ y(xe, { children: [
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
        className: x(
          "lw:text-[11px] lw:leading-[1.2] lw:text-inherit",
          l ? "lw:font-semibold" : "lw:font-medium"
        ),
        children: e
      }
    )
  ] }), R = {
    onClick: n,
    "aria-label": a ?? e,
    "aria-haspopup": u,
    "aria-expanded": u ? l : void 0,
    "aria-current": d && l ? "page" : void 0,
    "data-testid": w,
    className: g,
    style: f
  };
  return m ? /* @__PURE__ */ o("a", { href: m, ...R, children: h }) : /* @__PURE__ */ o("button", { type: "button", ...R, children: h });
}, ji = ({
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
  color: m,
  activeColor: w,
  activeBackground: g,
  pinnedLinks: f = [],
  activePath: h,
  onLinkClick: R,
  ..._
}) => {
  const v = f.filter((C) => C.path).slice(0, Ki), [E, S] = c.useState(
    null
  ), { userName: I = "User", userAvatar: N, avatarColor: b } = _, T = { color: m, activeColor: w, activeBackground: g };
  return /* @__PURE__ */ y(
    "nav",
    {
      "aria-label": "Mobile navigation",
      "data-testid": "mobile-bottom-nav",
      className: "lw:fixed lw:right-0 lw:bottom-0 lw:left-0 lw:z-[1199] lw:flex lw:items-stretch lw:border-t lw:border-solid lw:border-border lw:pb-[env(safe-area-inset-bottom,0px)]",
      style: {
        height: `calc(${Qr}px + env(safe-area-inset-bottom, 0px))`,
        backgroundColor: d
      },
      children: [
        e && /* @__PURE__ */ o(
          qt,
          {
            label: "Menu",
            icon: /* @__PURE__ */ o(fr, {}),
            onClick: e,
            active: t,
            haspopup: "dialog",
            testId: "mobile-nav-menu",
            ...T
          }
        ),
        v.map((C) => /* @__PURE__ */ o(
          qt,
          {
            label: C.text,
            icon: C.icon,
            href: C.path,
            onClick: (K) => {
              $t(K) && (K.preventDefault(), R == null || R(C.path));
            },
            active: st(C, h),
            isPage: !0,
            testId: `mobile-nav-link-${C.text}`,
            ...T
          },
          C.path
        )),
        r && /* @__PURE__ */ o(
          qt,
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
                children: /* @__PURE__ */ o(Qt, { size: 18 })
              }
            ),
            onClick: i,
            active: a,
            testId: "mobile-nav-nexa",
            ...T
          }
        ),
        n && /* @__PURE__ */ o(
          qt,
          {
            label: "Search",
            icon: /* @__PURE__ */ o(Wo, {}),
            onClick: n,
            active: l,
            haspopup: "dialog",
            testId: "mobile-nav-search",
            ...T
          }
        ),
        u && /* @__PURE__ */ y(xe, { children: [
          /* @__PURE__ */ o(
            qt,
            {
              label: "Account",
              ariaLabel: `Account menu for ${I}`,
              icon: /* @__PURE__ */ o(
                nl,
                {
                  name: I,
                  avatar: N,
                  color: b,
                  size: 26
                }
              ),
              onClick: (C) => S(C.currentTarget),
              active: !!E,
              haspopup: "menu",
              testId: "mobile-nav-account",
              ...T
            }
          ),
          /* @__PURE__ */ o(
            Jr,
            {
              anchorEl: E,
              onClose: () => S(null),
              placement: "above-end",
              width: 280,
              ..._
            }
          )
        ] })
      ]
    }
  );
}, Yi = ji, Bo = Zt.Root, qi = {
  right: "lw:inset-y-0 lw:right-0 lw:h-full lw:border-l lw:data-[state=open]:slide-in-from-right lw:data-[state=closed]:slide-out-to-right",
  left: "lw:inset-y-0 lw:left-0 lw:h-full lw:border-r lw:data-[state=open]:slide-in-from-left lw:data-[state=closed]:slide-out-to-left",
  top: "lw:inset-x-0 lw:top-0 lw:h-auto lw:border-b lw:data-[state=open]:slide-in-from-top lw:data-[state=closed]:slide-out-to-top",
  bottom: "lw:inset-x-0 lw:bottom-0 lw:h-auto lw:border-t lw:data-[state=open]:slide-in-from-bottom lw:data-[state=closed]:slide-out-to-bottom"
}, Gn = c.forwardRef(
  ({
    className: e,
    children: t,
    side: n = "right",
    overlay: l = !0,
    overlayClassName: r,
    srTitle: s,
    ...i
  }, a) => {
    const u = un();
    return /* @__PURE__ */ y(Zt.Portal, { children: [
      l ? /* @__PURE__ */ o(
        Zt.Overlay,
        {
          ...u,
          "data-slot": "sheet-overlay",
          "data-invisible": l === "invisible" ? "true" : void 0,
          className: x(
            "lw:fixed lw:inset-0 lw:z-[1200] lw:data-[state=open]:animate-in lw:data-[state=open]:fade-in-0 lw:data-[state=closed]:animate-out lw:data-[state=closed]:fade-out-0",
            l === "invisible" ? "lw:bg-transparent" : "lw:bg-black/35",
            r
          )
        }
      ) : null,
      /* @__PURE__ */ y(
        Zt.Content,
        {
          ref: a,
          ...u,
          "data-slot": "sheet-content",
          "data-side": n,
          "aria-describedby": void 0,
          className: x(
            "lw:fixed lw:z-[1200] lw:flex lw:flex-col lw:border-solid lw:border-border lw:bg-popover lw:text-popover-foreground lw:shadow-popover lw:outline-none lw:transition lw:ease-in-out lw:data-[state=open]:animate-in lw:data-[state=open]:duration-200 lw:data-[state=closed]:animate-out lw:data-[state=closed]:duration-150",
            qi[n],
            e
          ),
          ...i,
          children: [
            s ? /* @__PURE__ */ o(Zt.Title, { className: "lw:sr-only", children: s }) : null,
            t
          ]
        }
      )
    ] });
  }
);
Gn.displayName = "SheetContent";
const Vi = ({
  open: e,
  onClose: t,
  search: n
}) => /* @__PURE__ */ o(Bo, { open: e, onOpenChange: (l) => !l && t(), children: /* @__PURE__ */ o(
  Gn,
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
    children: /* @__PURE__ */ y(
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
) }), Zi = Vi, Ji = ({
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
    children: /* @__PURE__ */ y(
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
              children: /* @__PURE__ */ o(fr, {})
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
), Qi = Ji;
function es({
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
  const m = r ?? (!l && e <= 0);
  return /* @__PURE__ */ y(
    "span",
    {
      className: x(
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
            "data-invisible": m ? "true" : "false",
            "aria-hidden": d ? void 0 : !0,
            "aria-label": d,
            className: x(
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
const ts = c.createContext(void 0), ec = ({
  count: e,
  onClick: t,
  triggerProps: n,
  active: l,
  color: r,
  hoverColor: s,
  tooltipPlacement: i,
  testId: a
}) => {
  const u = Jo(), d = c.useContext(ts), m = c.useContext(wn), w = e ? `Notifications, ${e} unread` : "Notifications";
  return /* @__PURE__ */ o(
    je,
    {
      title: w,
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
          "aria-label": w,
          "data-testid": a,
          className: x(
            "lw:inline-flex lw:shrink-0 lw:cursor-pointer lw:items-center lw:justify-center lw:rounded-lg lw:outline-none lw:transition-colors lw:hover:bg-(--lw-hover) lw:focus-visible:outline-2 lw:focus-visible:outline-solid lw:focus-visible:outline-(--lw-fg) lw:[&_svg]:size-6",
            !m && "lw:p-2"
          ),
          style: {
            color: r,
            "--lw-fg": r,
            "--lw-hover": s,
            ...m ? {
              width: Te,
              height: Te
            } : {}
          },
          children: /* @__PURE__ */ o(
            es,
            {
              count: e,
              max: 99,
              badgeClassName: "lw:h-4 lw:min-w-4 lw:px-1 lw:text-[10px]",
              children: d ?? /* @__PURE__ */ o(ur, {})
            }
          )
        }
      )
    }
  );
}, ol = ec, er = 14, tc = 18, nc = "blur(12px) saturate(180%) brightness(1.04)", oc = (() => {
  var t;
  if (typeof navigator > "u")
    return !1;
  const e = (t = navigator.userAgentData) == null ? void 0 : t.brands;
  return !!(e != null && e.some(({ brand: n }) => /Chromium/.test(n)));
})(), lc = (e, t, n) => {
  const l = Math.min(0.45, n / e), r = Math.min(0.45, n / t), s = `<svg xmlns="http://www.w3.org/2000/svg" width="${e}" height="${t}"><defs><linearGradient id="x" x1="0" x2="1" y1="0" y2="0"><stop offset="0" stop-color="#ff0000"/><stop offset="${l}" stop-color="#800000"/><stop offset="${1 - l}" stop-color="#800000"/><stop offset="1" stop-color="#000000"/></linearGradient><linearGradient id="y" x1="0" x2="0" y1="0" y2="1"><stop offset="0" stop-color="#00ff00"/><stop offset="${r}" stop-color="#008000"/><stop offset="${1 - r}" stop-color="#008000"/><stop offset="1" stop-color="#000000"/></linearGradient></defs><rect width="100%" height="100%" fill="url(#x)"/><rect width="100%" height="100%" fill="url(#y)" style="mix-blend-mode:screen"/></svg>`;
  return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(s)}`;
}, rc = 140, tr = 0.22, sc = 0.14, ac = (e, t, n) => {
  const l = c.useRef(n);
  l.current = n, c.useEffect(() => {
    if (!t || typeof document > "u" || typeof window.matchMedia == "function" && window.matchMedia("(prefers-reduced-transparency: reduce)").matches)
      return;
    const r = { x: 0, y: 0, i: 0 }, s = { x: 0, y: 0, i: 0 };
    let i = 0;
    const a = () => {
      var f;
      const g = e.current;
      g && (g.style.setProperty("--lx", `${s.x.toFixed(1)}px`), g.style.setProperty("--ly", `${s.y.toFixed(1)}px`), g.style.setProperty("--li", s.i.toFixed(3)), (f = l.current) == null || f.call(l, s.x, s.y, s.i));
    }, u = () => {
      s.x += (r.x - s.x) * tr, s.y += (r.y - s.y) * tr, s.i += (r.i - s.i) * sc;
      const g = Math.abs(r.x - s.x) < 0.3 && Math.abs(r.y - s.y) < 0.3 && Math.abs(r.i - s.i) < 3e-3;
      g && (s.x = r.x, s.y = r.y, s.i = r.i), a(), i = g ? 0 : requestAnimationFrame(u);
    }, d = () => {
      i || (i = requestAnimationFrame(u));
    }, m = (g) => {
      const f = e.current;
      if (g.pointerType === "touch" || !f)
        return;
      const h = f.getBoundingClientRect();
      if (!h.width || !h.height)
        return;
      r.x = (g.clientX - h.left) * f.offsetWidth / h.width, r.y = (g.clientY - h.top) * f.offsetHeight / h.height;
      const R = Math.max(
        h.left - g.clientX,
        0,
        g.clientX - h.right
      ), _ = Math.max(
        h.top - g.clientY,
        0,
        g.clientY - h.bottom
      );
      r.i = Math.max(0, 1 - Math.hypot(R, _) / rc), s.i < 0.01 && (s.x = r.x, s.y = r.y), d();
    }, w = () => {
      r.i = 0, d();
    };
    return document.addEventListener("pointermove", m, { passive: !0 }), document.documentElement.addEventListener("mouseleave", w), () => {
      cancelAnimationFrame(i), document.removeEventListener("pointermove", m), document.documentElement.removeEventListener("mouseleave", w);
    };
  }, [e, t]);
}, ns = c.forwardRef(
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
    const d = c.useRef(null), m = s && $o;
    ac(d, i && $o, a);
    const w = jn(), g = `lumora-glass-${c.useId().replace(/[^a-zA-Z0-9-]/g, "")}`, [f, h] = c.useState(null), R = c.useRef(null), _ = c.useCallback(
      (I) => {
        var b;
        if (d.current = I, typeof u == "function" ? u(I) : u && (u.current = I), (b = R.current) == null || b.disconnect(), R.current = null, !I || !m || !oc || typeof ResizeObserver > "u")
          return;
        const N = () => {
          const T = I.offsetWidth, C = I.offsetHeight;
          h(
            (K) => (K == null ? void 0 : K.width) === T && K.height === C ? K : T && C ? { width: T, height: C } : null
          );
        };
        R.current = new ResizeObserver(N), R.current.observe(I), N();
      },
      [u, m]
    ), v = c.useMemo(
      () => f ? lc(f.width, f.height, er) : null,
      [f]
    ), E = m && !!(v && f), S = Js(e, t, w);
    return /* @__PURE__ */ y(xe, { children: [
      E ? /* @__PURE__ */ o(
        "svg",
        {
          "aria-hidden": !0,
          width: "0",
          height: "0",
          style: { position: "absolute", pointerEvents: "none" },
          children: /* @__PURE__ */ y(
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
                /* @__PURE__ */ o(
                  "feImage",
                  {
                    href: v,
                    x: "0",
                    y: "0",
                    width: f.width,
                    height: f.height,
                    preserveAspectRatio: "none",
                    result: "map"
                  }
                ),
                /* @__PURE__ */ o(
                  "feGaussianBlur",
                  {
                    in: "map",
                    stdDeviation: er / 3,
                    result: "softMap"
                  }
                ),
                /* @__PURE__ */ o(
                  "feDisplacementMap",
                  {
                    in: "SourceGraphic",
                    in2: "softMap",
                    scale: tc,
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
          ref: _,
          "aria-hidden": !0,
          "data-testid": r,
          "data-refract": E ? "true" : void 0,
          className: x(
            S.className,
            E && "lw:reduce-transparency:[backdrop-filter:none]! lw:reduce-transparency:[-webkit-backdrop-filter:none]!",
            n
          ),
          style: {
            ...S.style,
            ...E ? {
              backdropFilter: `url(#${g}) ${nc}`
            } : {},
            ...l
          }
        }
      )
    ] });
  }
);
ns.displayName = "GlassLayer";
const Jn = ns, ic = '[role="menuitem"]:not([aria-disabled="true"])', os = (e) => Array.from(e.querySelectorAll(ic)), ls = (e) => {
  if (!e)
    return !1;
  const t = e.querySelector(
    '[role="menuitem"][data-selected="true"]'
  ) ?? os(e)[0];
  return t == null || t.focus(), !!t;
}, ll = c.forwardRef(({ className: e, onKeyDown: t, ...n }, l) => /* @__PURE__ */ o(
  "ul",
  {
    ref: l,
    role: "menu",
    className: x(
      "lw:relative lw:m-0 lw:list-none lw:outline-none",
      e
    ),
    onKeyDown: (r) => {
      if (t == null || t(r), r.defaultPrevented)
        return;
      const s = os(r.currentTarget);
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
ll.displayName = "ShellMenuList";
const Un = c.forwardRef(({ className: e, onKeyDown: t, selected: n, ...l }, r) => /* @__PURE__ */ o(
  "li",
  {
    ref: r,
    role: "menuitem",
    tabIndex: -1,
    "data-selected": n ? "true" : void 0,
    className: x(
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
const cc = ({
  className: e
}) => /* @__PURE__ */ o(
  "li",
  {
    role: "separator",
    className: x("lw:my-1 lw:h-px lw:list-none lw:bg-border", e)
  }
), dc = 150, uc = ({
  open: e,
  onOpen: t,
  onClose: n
}) => {
  const l = c.useRef(void 0), r = c.useRef(null), [s, i] = c.useState(!1), [a, u] = c.useState(!1), [d, m] = c.useState(e);
  e !== d && (m(e), e && (u(s), i(!1)));
  const w = c.useRef({ open: e, openedByHover: a, onOpen: t, onClose: n });
  w.current = { open: e, openedByHover: a, onOpen: t, onClose: n };
  const g = () => {
    clearTimeout(l.current), l.current = void 0;
  }, f = c.useRef(!1), h = c.useRef(!1), R = c.useRef(void 0), _ = () => {
    h.current = !1, R.current && (document.removeEventListener("pointermove", R.current), R.current = void 0);
  }, v = (b) => {
    const T = r.current, C = T == null ? void 0 : T.getBoundingClientRect();
    return b.target instanceof Node && !!(T != null && T.contains(b.target)) || !!C && b.clientX >= C.left && b.clientX <= C.right && b.clientY >= C.top && b.clientY <= C.bottom;
  }, E = () => {
    _(), h.current = !0, R.current = (b) => {
      b.pointerType === "mouse" && !v(b) && _();
    }, document.addEventListener("pointermove", R.current);
  };
  c.useEffect(
    () => () => {
      g(), e && !f.current && E(), f.current = !1;
    },
    [e]
  ), c.useEffect(() => _, []);
  const S = (b) => {
    b.pointerType === "mouse" && (g(), w.current.open ? w.current.openedByHover && (l.current = setTimeout(() => {
      f.current = !0, w.current.onClose();
    }, Hr)) : i(!1));
  };
  return { triggerProps: {
    onPointerEnter: (b) => {
      if (b.pointerType !== "mouse" || (g(), r.current = b.currentTarget, w.current.open || h.current))
        return;
      const T = b.currentTarget;
      l.current = setTimeout(() => {
        w.current.open || (i(!0), w.current.onOpen(T));
      }, dc);
    },
    onPointerLeave: S,
    // The click that follows opens it as a hover would, so leaving closes it
    onPointerDown: (b) => {
      b.pointerType === "mouse" && (g(), r.current = b.currentTarget, w.current.open || i(!0));
    }
  }, contentProps: {
    onPointerEnter: (b) => {
      b.pointerType === "mouse" && g();
    },
    onPointerLeave: S,
    onInteractOutside: (b) => {
      var T;
      b.target instanceof Node && ((T = r.current) != null && T.contains(b.target)) && b.preventDefault();
    }
  }, openedByHover: a };
}, Qn = uc, nr = Oe($r), or = Oe(Vn), wc = 240, fc = 8, rs = '[data-rail-surface], [data-testid="sidebar-hover-panel"], aside', ss = (e) => {
  const t = e.getBoundingClientRect(), n = e.closest(rs);
  if (!n)
    return t;
  const l = n.getBoundingClientRect().right + fc;
  return new DOMRect(l, t.top, 0, t.height);
}, mc = "lw:overflow-hidden lw:rounded-xl lw:border lw:border-solid lw:border-border lw:bg-popover lw:text-popover-foreground lw:shadow-[0_8px_24px_rgba(0,0,0,0.12)]", pc = ({
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
  const d = Ye(), m = !!e, w = !!(e != null && e.closest(rs)), g = Ko(d ? "hsl(220, 30%, 7%)" : "#ffffff"), f = c.useRef(null), h = c.useMemo(
    () => ({
      current: e && {
        // Lets floating-ui follow the anchor's scroll parents and resizes
        contextElement: e,
        getBoundingClientRect: () => ss(e)
      }
    }),
    [e]
  ), R = Qo({
    enabled: i,
    isDark: d,
    selector: '[role="menuitem"]',
    radius: et
  }), _ = /* @__PURE__ */ o(
    ll,
    {
      ref: f,
      "aria-label": "Switch platform",
      "data-testid": "platform-menu-list",
      className: "lw:p-1",
      children: n.map((v) => {
        const E = v.key === l, S = v.accentColor ?? s;
        return /* @__PURE__ */ y(
          Un,
          {
            selected: E,
            onClick: () => r(v),
            "data-testid": `platform-item-${v.key}`,
            className: x(
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
                    backgroundColor: S,
                    boxShadow: i ? `0 0 0 3px ${d ? "rgba(255,255,255,0.08)" : "rgba(255,255,255,0.7)"}` : "none"
                  }
                }
              ) }),
              /* @__PURE__ */ y("span", { className: "lw:min-w-0 lw:flex-auto", children: [
                /* @__PURE__ */ o("span", { className: "lw:block lw:text-sm lw:leading-5 lw:font-semibold lw:text-foreground", children: v.name }),
                v.description ? /* @__PURE__ */ o("span", { className: "lw:block lw:text-xs lw:leading-[18px] lw:text-muted-foreground", children: v.description }) : null
              ] }),
              E ? /* @__PURE__ */ o(
                Ds,
                {
                  "data-testid": "platform-current",
                  className: "lw:ml-3 lw:size-[18px] lw:shrink-0",
                  style: { color: S }
                }
              ) : null
            ]
          },
          v.key
        );
      })
    }
  );
  return /* @__PURE__ */ y(
    fn,
    {
      open: m,
      onOpenChange: (v) => {
        v || t();
      },
      modal: !u,
      children: [
        /* @__PURE__ */ o(
          mn,
          {
            virtualRef: h
          }
        ),
        /* @__PURE__ */ o(
          Lt,
          {
            unstyled: !0,
            side: w ? "right" : "bottom",
            align: "start",
            sideOffset: w ? 0 : 8,
            collisionPadding: 16,
            ...a,
            onClick: (v) => v.stopPropagation(),
            onInteractOutside: (v) => {
              a == null || a.onInteractOutside(v), v.target instanceof Node && (e != null && e.contains(v.target)) && v.preventDefault();
            },
            onOpenAutoFocus: (v) => {
              v.preventDefault(), u || ls(f.current);
            },
            onCloseAutoFocus: (v) => {
              var E;
              v.preventDefault(), u || (E = e == null ? void 0 : e.focus) == null || E.call(e);
            },
            className: "lw:max-w-[calc(100vw-32px)]",
            children: /* @__PURE__ */ o(
              "div",
              {
                "data-testid": "platform-menu",
                "data-glass": i ? "true" : void 0,
                className: i ? "lw:relative lw:rounded-md" : mc,
                style: { minWidth: wc },
                children: i ? /* @__PURE__ */ y(xe, { children: [
                  /* @__PURE__ */ o(
                    Jn,
                    {
                      isDark: d,
                      solid: g,
                      className: x(
                        "lw:absolute lw:inset-0 lw:origin-top-left lw:rounded-[inherit]",
                        Ce
                      ),
                      style: {
                        animation: `${Yo} ${nr.duration}ms ${nr.easing} both`
                      }
                    }
                  ),
                  /* @__PURE__ */ y(
                    "div",
                    {
                      ...R.containerProps,
                      className: x(
                        "lw:relative lw:overflow-hidden lw:rounded-[inherit]",
                        Ce
                      ),
                      style: {
                        animation: `${qo} ${or.duration}ms ${or.easing} 70ms both`
                      },
                      children: [
                        R.lens,
                        _
                      ]
                    }
                  )
                ] }) : _
              }
            )
          }
        )
      ]
    }
  );
}, hc = ({ children: e, anchorEl: t, onOpen: n, hoverOpen: l = !1, ...r }) => {
  const s = c.useRef(null), i = !!(t && s.current && t.contains(s.current)), a = Qn({
    open: i,
    // The brand button anchors the menu, as a click on it does
    onOpen: (u) => n(u.closest("button") ?? u),
    onClose: r.onClose
  });
  return /* @__PURE__ */ y(
    "span",
    {
      ref: s,
      ...l ? a.triggerProps : {},
      "data-testid": "platform-switcher-logo",
      className: "lw:relative lw:inline-flex lw:items-center lw:justify-center lw:p-1.5 lw:after:absolute lw:after:right-px lw:after:bottom-px lw:after:border-solid lw:after:[border-width:0_0_5px_5px] lw:after:[border-color:transparent_transparent_currentColor_transparent] lw:after:opacity-55 lw:after:content-['']",
      children: [
        e,
        /* @__PURE__ */ o(
          pc,
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
}, zo = "lw:outline-none lw:focus:outline-none", gc = "lw:flex lw:flex-col lw:overflow-hidden lw:rounded-xl lw:border lw:border-solid lw:border-border lw:bg-popover lw:text-popover-foreground lw:shadow-[0_8px_24px_rgba(0,0,0,0.12)]", lr = Oe($r), rr = Oe(Vn), bc = '[role="menuitem"], button[data-testid="account-menu-header"], [data-testid="menu-item-theme"]', xc = ({ mode: e, onToggle: t, accentColor: n, tint: l, glass: r = !1 }) => {
  const s = Ye(), i = jn(), a = c.useRef(null), u = c.useRef(null), d = (g) => {
    var f;
    g !== e && (t == null || t()), (f = (g === "light" ? a : u).current) == null || f.focus();
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
  }, w = (g, f, h, R) => {
    const _ = e === g;
    return /* @__PURE__ */ o(
      "button",
      {
        type: "button",
        ref: R,
        role: "radio",
        "aria-checked": _,
        "aria-label": f,
        tabIndex: _ ? 0 : -1,
        onClick: () => d(g),
        "data-testid": `theme-segment-${g}`,
        className: x(
          "lw:inline-flex lw:h-6 lw:w-8 lw:cursor-pointer lw:items-center lw:justify-center lw:transition-[background-color,color,box-shadow,transform] lw:duration-150 lw:ease-out lw:focus-visible:shadow-[0_0_0_2px_var(--lw-seg-ring)]",
          r ? "lw:rounded-md" : "lw:rounded-full",
          !_ && "lw:text-muted-foreground lw:hover:text-foreground",
          // On glass each mode answers the pointer itself, so the
          // row's lens is not the only thing that moves
          r && "lw:hover:scale-[1.06] lw:active:scale-[0.94]",
          r && !_ && (s ? "lw:hover:bg-white/12" : "lw:hover:bg-white/75"),
          zo
        ),
        style: {
          "--lw-seg-ring": it(n, 0.6),
          // White on dark: the accent is too dim against a dark surface
          ..._ ? {
            color: s ? "#ffffff" : n,
            backgroundColor: l,
            ...r ? Er(s, i) : {}
          } : {}
        },
        children: /* @__PURE__ */ o(h, { className: "lw:size-4" })
      }
    );
  };
  return /* @__PURE__ */ y(
    "div",
    {
      role: "radiogroup",
      "aria-label": "Theme",
      "data-testid": "theme-segments",
      onKeyDown: m,
      className: x(
        "lw:flex lw:shrink-0 lw:flex-row lw:gap-0.5 lw:bg-selected lw:p-[3px]",
        r ? "lw:rounded-md" : "lw:rounded-full"
      ),
      children: [
        w("light", "Light", Ps, a),
        w("dark", "Dark", Fs, u)
      ]
    }
  );
}, vc = 80, yc = ({
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
  showThemeToggler: m,
  theme: w,
  onThemeToggle: g,
  onProfileClick: f,
  onAiUsageClick: h,
  aiUsageCaption: R,
  onLinkClick: _,
  menuItems: v = [],
  onLogout: E,
  glass: S = !1,
  contentProps: I,
  openedByHover: N = !1
}) => {
  const b = Ye(), T = Ko(b ? "hsl(220, 30%, 7%)" : "#ffffff"), C = c.useRef(null), K = c.useMemo(
    () => ({
      current: t && {
        contextElement: t,
        getBoundingClientRect: () => ss(t)
      }
    }),
    [t]
  ), D = Qo({
    enabled: S,
    isDark: b,
    selector: bc,
    radius: et
  }), F = (k) => {
    n(), k == null || k();
  }, P = (k) => {
    n(), k.onClick ? k.onClick() : k.path && (_ == null || _(k.path));
  }, G = x(
    "lw:min-h-8 lw:gap-1 lw:px-3 lw:py-1.5 lw:text-sm lw:leading-5",
    S ? "lw:rounded-md" : "lw:rounded-lg lw:hover:bg-(--lw-menu-tint) lw:focus-visible:bg-(--lw-menu-tint)"
  ), oe = "lw:flex lw:min-w-8 lw:shrink-0 lw:items-center lw:[&_svg]:size-5", z = x(
    "lw:cursor-pointer lw:rounded-sm lw:text-xs lw:leading-[18px] lw:font-semibold lw:tracking-[0.02em] lw:hover:underline lw:hover:underline-offset-2 lw:focus-visible:shadow-[0_0_0_2px_var(--lw-link-ring)]",
    zo
  ), A = b ? "#ffffff" : u, $ = /* @__PURE__ */ o("span", { "aria-hidden": !0, className: "lw:shrink-0 lw:text-xs lw:text-faint", children: "·" }), B = h ? /* @__PURE__ */ y(
    "div",
    {
      "data-testid": "account-menu-links",
      className: "lw:mt-0.5 lw:flex lw:min-w-0 lw:flex-row lw:items-center lw:gap-1.5 lw:whitespace-nowrap",
      children: [
        f ? /* @__PURE__ */ y(xe, { children: [
          /* @__PURE__ */ o(
            "button",
            {
              type: "button",
              onClick: () => F(f),
              "data-testid": "account-menu-view-profile",
              className: x(z, "lw:shrink-0"),
              style: { color: A },
              children: "View profile"
            }
          ),
          $
        ] }) : null,
        /* @__PURE__ */ o(
          "button",
          {
            type: "button",
            onClick: () => F(h),
            "data-testid": "account-menu-ai-usage",
            className: x(z, "lw:shrink-0"),
            style: { color: A },
            children: "My AI usage"
          }
        ),
        R ? /* @__PURE__ */ y(xe, { children: [
          $,
          /* @__PURE__ */ o(
            "span",
            {
              "data-testid": "account-menu-ai-usage-caption",
              className: "lw:min-w-0 lw:truncate lw:text-xs lw:leading-[18px] lw:text-faint",
              children: R
            }
          )
        ] }) : null
      ]
    }
  ) : null, Z = /* @__PURE__ */ y("div", { className: "lw:flex lw:flex-row lw:items-center lw:gap-2.5 lw:p-3", children: [
    r(36),
    /* @__PURE__ */ y("div", { className: "lw:min-w-0 lw:flex-1", children: [
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
      B,
      f && !h ? /* @__PURE__ */ o(
        "span",
        {
          "data-hint": !0,
          "data-testid": "account-menu-view-profile",
          className: "lw:truncate lw:text-xs lw:leading-[1.66] lw:font-semibold lw:tracking-[0.02em] lw:underline lw:underline-offset-2",
          style: { color: A },
          children: "View profile"
        }
      ) : null
    ] })
  ] });
  return /* @__PURE__ */ y(
    fn,
    {
      open: e && !!t,
      onOpenChange: (k) => {
        k || n();
      },
      modal: !N,
      children: [
        /* @__PURE__ */ o(
          mn,
          {
            virtualRef: K
          }
        ),
        /* @__PURE__ */ o(
          Lt,
          {
            ...I,
            unstyled: !0,
            side: "right",
            align: "end",
            sideOffset: 0,
            collisionPadding: 16,
            onOpenAutoFocus: (k) => {
              k.preventDefault(), N || ls(C.current);
            },
            onCloseAutoFocus: (k) => {
              var ee;
              k.preventDefault(), N || (ee = t == null ? void 0 : t.focus) == null || ee.call(t);
            },
            className: "lw:max-w-[calc(100vw-32px)]",
            children: /* @__PURE__ */ y(
              "div",
              {
                "data-testid": "account-menu",
                "data-glass": S ? "true" : void 0,
                className: x(
                  S ? (
                    // The rows give up their own hover fill: one drop of
                    // glass (the lens) glides behind whichever is hovered
                    "lw:relative lw:rounded-md"
                  ) : gc
                ),
                style: {
                  // With a cost beside "My AI usage" the card grows to fit that line
                  // (up to CAPTION_EXTRA_PX wider); otherwise it is the sidebar's width.
                  width: R ? "max-content" : l,
                  minWidth: l,
                  maxWidth: R ? l + vc : l,
                  "--lw-menu-tint": d,
                  "--lw-link-ring": it(u, 0.6)
                },
                children: [
                  S ? /* @__PURE__ */ o(
                    Jn,
                    {
                      isDark: b,
                      solid: T,
                      className: x(
                        "lw:absolute lw:inset-0 lw:origin-bottom-left lw:rounded-[inherit]",
                        Ce
                      ),
                      style: {
                        animation: `${Yo} ${lr.duration}ms ${lr.easing} both`
                      }
                    }
                  ) : null,
                  /* @__PURE__ */ y(
                    "div",
                    {
                      ...D.containerProps,
                      className: S ? x(
                        "lw:relative lw:flex lw:flex-col lw:overflow-hidden lw:rounded-[inherit]",
                        Ce
                      ) : "lw:contents",
                      style: S ? {
                        animation: `${qo} ${rr.duration}ms ${rr.easing} 70ms both`
                      } : void 0,
                      children: [
                        D.lens,
                        f && !h ? /* @__PURE__ */ o(
                          "button",
                          {
                            type: "button",
                            onClick: () => F(f),
                            "data-testid": "account-menu-header",
                            className: x(
                              "lw:group lw:relative lw:block lw:w-full lw:cursor-pointer lw:text-left lw:transition-colors lw:duration-150 lw:[&_[data-hint]]:hidden lw:hover:[&_[data-hint]]:block lw:hover:[&_[data-role]]:hidden lw:focus-visible:[&_[data-hint]]:block lw:focus-visible:[&_[data-role]]:hidden",
                              !S && "lw:hover:bg-(--lw-menu-tint) lw:focus-visible:bg-(--lw-menu-tint)",
                              zo
                            ),
                            children: Z
                          }
                        ) : /* @__PURE__ */ o(
                          "div",
                          {
                            "data-testid": "account-menu-header",
                            className: "lw:relative",
                            children: Z
                          }
                        ),
                        /* @__PURE__ */ o(an, { className: "lw:relative" }),
                        m ? /* @__PURE__ */ y(
                          "div",
                          {
                            "data-testid": "menu-item-theme",
                            className: x(
                              G,
                              "lw:relative lw:mx-1 lw:mt-1 lw:flex lw:items-center lw:py-1 lw:hover:bg-transparent"
                            ),
                            children: [
                              /* @__PURE__ */ o(
                                "span",
                                {
                                  className: x(
                                    oe,
                                    "lw:text-muted-foreground"
                                  ),
                                  children: /* @__PURE__ */ o(Ms, {})
                                }
                              ),
                              /* @__PURE__ */ o("span", { className: "lw:flex-1 lw:text-foreground", children: "Theme" }),
                              /* @__PURE__ */ o(
                                xc,
                                {
                                  glass: S,
                                  mode: w,
                                  onToggle: g,
                                  accentColor: u,
                                  tint: d
                                }
                              )
                            ]
                          }
                        ) : null,
                        /* @__PURE__ */ y(
                          ll,
                          {
                            ref: C,
                            className: x(
                              "lw:px-1 lw:pb-1",
                              m ? "lw:pt-0" : "lw:pt-1"
                            ),
                            children: [
                              v.map((k) => /* @__PURE__ */ y(
                                Un,
                                {
                                  onClick: () => P(k),
                                  "data-testid": `menu-item-${k.key}`,
                                  className: x(
                                    G,
                                    "lw:text-foreground"
                                  ),
                                  children: [
                                    /* @__PURE__ */ o(
                                      "span",
                                      {
                                        className: x(
                                          oe,
                                          "lw:text-muted-foreground"
                                        ),
                                        children: k.icon
                                      }
                                    ),
                                    /* @__PURE__ */ o("span", { className: "lw:flex-1", children: k.label }),
                                    /* @__PURE__ */ o(Fo, { count: k.badge })
                                  ]
                                },
                                k.key
                              )),
                              E ? /* @__PURE__ */ o(cc, {}) : null,
                              E ? /* @__PURE__ */ y(
                                Un,
                                {
                                  onClick: () => F(E),
                                  "data-testid": "menu-item-logout",
                                  className: x(
                                    G,
                                    "lw:text-destructive"
                                  ),
                                  children: [
                                    /* @__PURE__ */ o("span", { className: oe, children: /* @__PURE__ */ o(wr, {}) }),
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
}, Ec = yc, Nc = "lw:outline-none lw:focus:outline-none", Sc = ({
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
  headerForegroundColor: m,
  activeAccentColor: w = "#01584f",
  activeBackgroundColor: g,
  groupArrowColor: f,
  groupAccentColor: h,
  activeForegroundColor: R,
  foregroundColor: _,
  surfaceBackgroundColor: v,
  flyoutSurfaceColor: E,
  collapsed: S,
  expandedWidth: I,
  collapsedWidth: N,
  topContent: b,
  submenuMode: T,
  color: C,
  hoverColor: K,
  avatarColor: D,
  showProfile: F = !0,
  userName: P = "User",
  userEmail: G,
  userRole: oe,
  userAvatar: z,
  showNotifications: A = !0,
  notificationCount: $ = 0,
  onNotificationsClick: B,
  notificationsTriggerProps: Z,
  notificationsOpen: k,
  whatsNewCount: ee = 0,
  onProfileClick: we,
  onAiUsageClick: Y,
  aiUsageCaption: V,
  menuItems: fe,
  onLogout: J,
  theme: te = "light",
  showThemeToggler: me = !0,
  onThemeToggle: pe
}) => {
  const ve = Ye(), He = qn(v, ve), M = C ?? _ ?? (ve ? "#ffffff" : w), H = K ?? h ?? tn(w), U = D ?? w, j = c.useRef(null), [Q, de] = c.useState(!1), he = Qn({
    open: Q,
    onOpen: () => de(!0),
    onClose: () => de(!1)
  }), Ee = oe ? gr(oe) : void 0, Ne = (De) => /* @__PURE__ */ o(
    nl,
    {
      name: P,
      avatar: z,
      color: U,
      size: De
    }
  ), qe = $ + ee, ie = S && T === "flyout", Se = A ? /* @__PURE__ */ o(
    ol,
    {
      count: qe,
      onClick: B,
      triggerProps: Z,
      active: k,
      color: M,
      hoverColor: H,
      tooltipPlacement: "right",
      testId: "panel-notifications"
    }
  ) : null, be = F ? /* @__PURE__ */ y(
    "button",
    {
      type: "button",
      ref: j,
      onClick: () => de(!0),
      ...he.triggerProps,
      "aria-haspopup": "menu",
      "aria-expanded": Q,
      "aria-label": "Account menu",
      "data-testid": "panel-user-button",
      className: x(
        "lw:flex lw:min-w-0 lw:cursor-pointer lw:items-center lw:justify-start lw:gap-2.5 lw:rounded-[10px] lw:hover:bg-(--lw-footer-tint)",
        S ? "lw:flex-[0_0_auto]" : "lw:flex-1",
        // On the flyout rail the 36px avatar fills a 44px button,
        // matching the rail's icon buttons
        ie ? "lw:p-1" : "lw:p-1.5",
        Q ? "lw:bg-(--lw-footer-tint)" : "lw:bg-transparent",
        Nc
      ),
      style: { "--lw-footer-tint": H },
      children: [
        S && !ie && A ? (
          // Collapsed: no room for the bell, so unread shows as a dot
          /* @__PURE__ */ o(
            es,
            {
              dot: !0,
              count: qe,
              className: "lw:rounded-full",
              badgeClassName: "lw:top-[14%] lw:right-[14%]",
              children: Ne(36)
            }
          )
        ) : Ne(S ? 36 : 40),
        S ? null : /* @__PURE__ */ y("span", { className: "lw:block lw:min-w-0 lw:text-left", children: [
          /* @__PURE__ */ o(
            "span",
            {
              className: "lw:block lw:truncate lw:text-sm lw:leading-[1.3] lw:font-semibold",
              style: { color: M },
              children: P
            }
          ),
          Ee ? /* @__PURE__ */ o(
            "span",
            {
              "data-testid": "panel-user-role",
              className: "lw:block lw:truncate lw:text-xs lw:leading-[1.3] lw:tracking-[0.02em] lw:opacity-85",
              style: { color: M },
              children: Ee
            }
          ) : null
        ] })
      ]
    }
  ) : null, ge = !!Se && (!S || ie || !be), ye = be || ge ? /* @__PURE__ */ y(
    "div",
    {
      className: x(
        "lw:flex lw:items-center lw:justify-center lw:gap-1",
        ie ? "lw:flex-col" : "lw:flex-row"
      ),
      children: [
        ie && ge ? Se : null,
        be,
        !ie && ge ? Se : null
      ]
    }
  ) : void 0;
  return /* @__PURE__ */ y(
    "div",
    {
      "data-testid": "panel-sidebar",
      "data-collapsed": S ? "true" : "false",
      className: "lw:flex lw:min-h-0 lw:flex-auto lw:flex-col",
      children: [
        /* @__PURE__ */ o(
          Mo,
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
            headerForegroundColor: m,
            activeAccentColor: w,
            activeBackgroundColor: g,
            groupArrowColor: f,
            groupAccentColor: h,
            activeForegroundColor: R,
            foregroundColor: _,
            surfaceBackgroundColor: He,
            flyoutSurfaceColor: E,
            collapsed: S,
            expandedWidth: I,
            collapsedWidth: N,
            topContent: b,
            footer: ye,
            submenuMode: T
          }
        ),
        F ? /* @__PURE__ */ o(
          Ec,
          {
            open: Q,
            anchorEl: j.current,
            onClose: () => de(!1),
            width: Math.max(I - 16, 240),
            renderAvatar: Ne,
            userName: P,
            userEmail: G,
            roleLabel: Ee,
            accentColor: w,
            tint: H,
            showThemeToggler: me,
            theme: te,
            onThemeToggle: pe,
            onProfileClick: we,
            onAiUsageClick: Y,
            aiUsageCaption: V,
            onLinkClick: l,
            menuItems: fe,
            onLogout: J,
            glass: T === "flyout",
            contentProps: he.contentProps,
            openedByHover: he.openedByHover
          }
        ) : null
      ]
    }
  );
}, _c = Sc, Rc = ({
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
    showNotifications: m,
    notificationCount: w,
    onNotificationsClick: g,
    userName: f = "User",
    userRole: h,
    userAvatar: R
  } = u, _ = c.useRef(null), [v, E] = c.useState(
    null
  ), S = !!v, I = Qn({
    open: S,
    onOpen: () => E(_.current),
    onClose: () => E(null)
  }), N = c.useRef(e);
  return c.useEffect(() => {
    e && !N.current && E(null), N.current = e;
  }, [e]), !m && !l ? null : /* @__PURE__ */ y(xe, { children: [
    /* @__PURE__ */ y(
      "div",
      {
        ref: _,
        "data-testid": "sidebar-footer",
        className: x(
          "lw:flex lw:w-full lw:items-center lw:gap-1",
          e ? "lw:flex-col" : "lw:flex-row"
        ),
        children: [
          l && /* @__PURE__ */ o(
            je,
            {
              title: e ? f : "",
              side: "right",
              arrow: !0,
              disabled: S,
              children: /* @__PURE__ */ o(
                "button",
                {
                  type: "button",
                  onClick: () => E(_.current),
                  ...r ? I.triggerProps : {},
                  "aria-label": `Account menu for ${f}`,
                  "aria-haspopup": "menu",
                  "aria-expanded": S,
                  "data-testid": "sidebar-user",
                  className: x(
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
                  children: /* @__PURE__ */ o(
                    Zr,
                    {
                      name: f,
                      role: h,
                      avatar: R,
                      avatarColor: d,
                      showText: !e
                    }
                  )
                }
              )
            }
          ),
          m && /* @__PURE__ */ o(
            ol,
            {
              count: w + s,
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
      Jr,
      {
        anchorEl: v,
        onClose: () => E(null),
        placement: e ? "beside" : "above",
        width: e || (b = _.current) == null ? void 0 : b.clientWidth,
        contentProps: I.contentProps,
        openedByHover: I.openedByHover,
        ...u
      }
    )
  ] });
}, Tc = Rc, Ac = 120, Cc = 300, sr = Oe(Ir), ar = Oe(Vn), Oc = (e) => {
  var t;
  return ((t = e == null ? void 0 : e.querySelector("input, textarea")) == null ? void 0 : t.value) ?? "";
}, Ic = 'input, textarea, [contenteditable="true"]', Ho = (e) => {
  var t;
  (t = e == null ? void 0 : e.querySelector(Ic)) == null || t.focus();
}, $c = "lw:[&_:is([data-slot=input],[data-slot=button],input:not([data-slot]))]:rounded-[6px] lw:[&_:is([data-slot=input],[data-slot=button]):focus-visible]:border-(--lw-accent) lw:[&_:is([data-slot=input]):focus-visible]:ring-(--lw-accent)", ir = (e) => e ? `Search (${e.join("")})` : "Search", kc = ({
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
  const d = Jo(), m = c.useContext(wn), w = c.useRef(null), [g, f] = c.useState(null);
  return c.useEffect(() => {
    n === "full" && r && (Ho(w.current), s == null || s());
  }, [n, r, s]), n === "full" ? /* @__PURE__ */ o(
    "div",
    {
      ref: w,
      "data-testid": "sidebar-search",
      "data-lw-host": "",
      className: "lw:w-full",
      children: e
    }
  ) : n === "popover" && m ? /* @__PURE__ */ o(
    Lc,
    {
      search: e,
      icon: t,
      color: i,
      railTooltip: d,
      tooltip: ir(u)
    }
  ) : /* @__PURE__ */ o(
    "div",
    {
      "data-testid": "sidebar-search",
      className: "lw:flex lw:w-full lw:justify-center",
      children: /* @__PURE__ */ y(
        fn,
        {
          open: !!g,
          onOpenChange: (h) => !h && f(null),
          children: [
            /* @__PURE__ */ o(
              je,
              {
                title: ir(u),
                side: "right",
                arrow: !0,
                ...d,
                children: /* @__PURE__ */ o(mn, { asChild: !0, children: /* @__PURE__ */ o(
                  "button",
                  {
                    type: "button",
                    "aria-label": "Search",
                    onClick: (h) => n === "expand" ? l == null ? void 0 : l() : f(h.currentTarget),
                    className: "lw:inline-flex lw:size-11 lw:shrink-0 lw:cursor-pointer lw:items-center lw:justify-center lw:rounded-lg lw:outline-none lw:transition-colors lw:hover:bg-(--lw-hover) lw:focus-visible:ring-2 lw:focus-visible:ring-ring lw:[&_svg]:size-6",
                    style: {
                      color: i,
                      "--lw-hover": a
                    },
                    children: t ?? /* @__PURE__ */ o(Wo, {})
                  }
                ) })
              }
            ),
            /* @__PURE__ */ o(
              Lt,
              {
                side: "right",
                align: "start",
                sideOffset: 8,
                collisionPadding: 8,
                onOpenAutoFocus: (h) => {
                  h.preventDefault(), Ho(h.currentTarget);
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
}, Lc = ({ search: e, icon: t, color: n, railTooltip: l, tooltip: r }) => {
  const s = Ye();
  Qs(s, it(n, s ? 0.3 : 0.35));
  const i = `rgb(${jn()})`, a = Ko(s ? "#1e2430" : "#ffffff"), u = c.useRef(null), d = c.useRef(null), [m, w] = c.useState(!1), g = c.useRef(!1), f = c.useRef(void 0), h = c.useRef(void 0), R = () => {
    clearTimeout(f.current), clearTimeout(h.current);
  }, _ = c.useCallback(() => {
    R(), g.current = !1, w(!1);
  }, []), v = () => {
    clearTimeout(h.current), m || (clearTimeout(f.current), f.current = setTimeout(
      () => w(!0),
      Ac
    ));
  }, E = () => {
    clearTimeout(f.current), clearTimeout(h.current), h.current = setTimeout(() => {
      !g.current && !Oc(d.current) && w(!1);
    }, Cc);
  };
  return c.useEffect(() => R, []), c.useEffect(() => {
    if (!m)
      return;
    const S = setTimeout(() => Ho(d.current)), I = (b) => {
      var C, K;
      const T = b.target;
      !((C = d.current) != null && C.contains(T)) && !((K = u.current) != null && K.contains(T)) && _();
    }, N = (b) => {
      var T;
      b.key === "Escape" && (_(), (T = u.current) == null || T.focus());
    };
    return document.addEventListener("pointerdown", I), document.addEventListener("keydown", N), () => {
      clearTimeout(S), document.removeEventListener("pointerdown", I), document.removeEventListener("keydown", N);
    };
  }, [m, _]), /* @__PURE__ */ o(
    "div",
    {
      "data-testid": "sidebar-search",
      className: "lw:flex lw:w-full lw:justify-center",
      children: /* @__PURE__ */ y(
        fn,
        {
          open: m,
          onOpenChange: (S) => !S && _(),
          modal: !1,
          children: [
            /* @__PURE__ */ o(
              je,
              {
                title: m ? "" : r,
                side: "right",
                arrow: !0,
                ...l,
                children: /* @__PURE__ */ o(mn, { asChild: !0, children: /* @__PURE__ */ o(
                  "button",
                  {
                    ref: u,
                    type: "button",
                    "aria-label": "Search",
                    "aria-expanded": m,
                    onMouseEnter: v,
                    onMouseLeave: E,
                    onClick: () => {
                      R(), g.current = !0, w(!0);
                    },
                    className: "lw:inline-flex lw:shrink-0 lw:cursor-pointer lw:items-center lw:justify-center lw:outline-none lw:focus-visible:ring-2 lw:focus-visible:ring-ring",
                    style: {
                      width: Te,
                      height: Te,
                      color: n,
                      borderRadius: et
                    },
                    children: t ?? /* @__PURE__ */ o(
                      Wo,
                      {
                        style: {
                          width: Lo,
                          height: Lo
                        }
                      }
                    )
                  }
                ) })
              }
            ),
            /* @__PURE__ */ o(
              Lt,
              {
                unstyled: !0,
                side: "right",
                align: "center",
                sideOffset: 14,
                collisionPadding: 8,
                onOpenAutoFocus: (S) => S.preventDefault(),
                onCloseAutoFocus: (S) => S.preventDefault(),
                onInteractOutside: (S) => {
                  var I;
                  (I = u.current) != null && I.contains(S.target) && S.preventDefault();
                },
                className: "lw:z-[1300]",
                children: /* @__PURE__ */ y(
                  "div",
                  {
                    ref: d,
                    "data-testid": "sidebar-search-card",
                    onMouseEnter: v,
                    onMouseLeave: E,
                    className: "lw:relative lw:w-80 lw:p-2",
                    style: { borderRadius: et },
                    children: [
                      /* @__PURE__ */ o(
                        Jn,
                        {
                          isDark: s,
                          solid: a,
                          className: x(
                            "lw:absolute lw:inset-0 lw:origin-left lw:rounded-[inherit]",
                            Ce
                          ),
                          style: {
                            animation: `${Yo} ${sr.duration}ms ${sr.easing} both`
                          }
                        }
                      ),
                      /* @__PURE__ */ o(
                        "div",
                        {
                          "data-lw-host": "",
                          className: x(
                            "lw:relative",
                            $c,
                            Ce
                          ),
                          style: {
                            "--lw-accent": i,
                            animation: `${qo} ${ar.duration}ms ${ar.easing} 60ms both`
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
}, Dc = kc, Mc = 80, Pc = 300, Fc = 32, Bc = (e) => {
  const t = c.useRef(/* @__PURE__ */ new WeakSet()), n = c.useRef(void 0), l = c.useRef(void 0), [r, s] = c.useState(!1), [i, a] = c.useState(!1), [u, d] = c.useState(!1), m = c.useRef(null), w = () => {
    clearTimeout(n.current), clearTimeout(l.current), n.current = void 0, l.current = void 0;
  };
  c.useEffect(() => {
    if (!e) {
      w(), s(!1), a(!1), d(!1);
      return;
    }
    const h = (E) => {
      var I;
      if (E.pointerType !== "mouse")
        return;
      const S = E.clientX <= Fc;
      S && ((I = m.current) == null || I.style.setProperty(
        "--edge-glow-y",
        `${E.clientY}px`
      )), d(S);
    }, R = () => d(!1), _ = () => {
      clearTimeout(n.current), n.current = void 0, l.current === void 0 && (l.current = setTimeout(() => {
        l.current = void 0, s(!1), a(!1);
      }, Pc));
    }, v = (E) => {
      t.current.has(E) || _();
    };
    return document.addEventListener("mouseover", v), document.addEventListener("pointermove", h, {
      passive: !0
    }), document.documentElement.addEventListener("mouseleave", _), document.documentElement.addEventListener("mouseleave", R), () => {
      w(), document.removeEventListener("mouseover", v), document.removeEventListener("pointermove", h), document.documentElement.removeEventListener(
        "mouseleave",
        _
      ), document.documentElement.removeEventListener(
        "mouseleave",
        R
      );
    };
  }, [e]);
  const g = {
    onMouseOver: (h) => {
      t.current.add(h.nativeEvent), clearTimeout(l.current), l.current = void 0, !r && n.current === void 0 && (n.current = setTimeout(() => {
        n.current = void 0, s(!0);
      }, Mc));
    },
    onFocus: (h) => {
      zc(h.target) && a(!0);
    },
    onBlur: (h) => {
      const R = h.relatedTarget;
      (!R || !h.currentTarget.contains(R)) && a(!1);
    },
    onKeyDown: (h) => {
      h.key === "Escape" && (a(!1), s(!1));
    }
  }, f = e && (r || i);
  return {
    shown: f,
    nearEdge: e && u && !f,
    glowRef: m,
    rootProps: g
  };
}, zc = (e) => {
  try {
    return e.matches(":focus-visible");
  } catch {
    return !0;
  }
}, Hc = Bc, Wc = 100, Gc = () => {
  const e = c.useRef(null), t = c.useRef(void 0), n = c.useRef(/* @__PURE__ */ new WeakSet()), [l, r] = c.useState(!1), [s, i] = c.useState(!1), a = () => {
    clearTimeout(t.current), t.current = void 0;
  };
  return c.useEffect(() => {
    const d = (w) => {
      n.current.has(w) || (a(), r(!1));
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
      var w;
      (w = e.current) != null && w.contains(m.target) || i(!1);
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
        }, Wc));
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
}, Uc = Gc, Xc = (e) => {
  const t = Array.from((e == null ? void 0 : e.children) ?? []).find(
    (a) => a.tagName === "ASIDE"
  );
  if (!t)
    return null;
  const n = t.querySelector("[data-rail-surface]") ?? t, { right: l, width: r } = t.getBoundingClientRect(), { top: s, height: i } = n.getBoundingClientRect();
  return r <= 0 || i <= 0 ? null : { left: l, top: s, height: i };
}, Kc = 300, Oo = 288, jc = "width 220ms cubic-bezier(0.4, 0, 0.2, 1), box-shadow 220ms ease", cr = 72, Io = 90, Yc = 18, qc = "transform 240ms cubic-bezier(0.2, 0.8, 0.2, 1), opacity 180ms ease", Vc = 68, dr = () => typeof navigator < "u" && /Mac|iPhone|iPad/.test(navigator.platform || navigator.userAgent), Zc = typeof window > "u" ? Vt : zs, Jc = ({
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
  mobileBottomBarLinks: m,
  logo: w,
  onBrandClick: g,
  searchComponent: f,
  searchIcon: h,
  notificationsIcon: R,
  searchShortcut: _ = !1,
  brandColor: v,
  contentPadding: E = Tr,
  userMenuItems: S,
  sidebarBackgroundColor: I,
  sidebarHeaderBackgroundColor: N,
  groupAccentColor: b,
  activeSidebarForegroundColor: T,
  enableRefreshToken: C = !1,
  holdSessionSkeleton: K = !1,
  sessionSkeletonContent: D,
  activePath: F,
  onLinkClick: P,
  showProfile: G = !0,
  userName: oe,
  userRole: z,
  userAvatar: A,
  userEmail: $,
  onLogout: B,
  showSettings: Z = !0,
  onSettingsClick: k,
  onProfileClick: ee,
  onAiUsageClick: we,
  aiUsageCaption: Y,
  showNotifications: V = !0,
  notificationCount: fe = 0,
  NotificationSidebarContent: J,
  whatsNewCount: te = 0,
  onNotificationsClick: me,
  platforms: pe,
  currentPlatformKey: ve,
  onPlatformSelect: He,
  onVerify: M,
  alertProps: H,
  style: U,
  sidebarStyles: j,
  contentStyles: Q,
  className: de,
  sidebarClassName: he,
  contentClassName: Ee,
  accentColor: Ne,
  sidebarAccentColor: qe,
  sidebarActiveBackgroundColor: ie,
  sidebarGroupArrowColor: Se,
  sidebarForegroundColor: be,
  contentBackgroundColor: ge,
  theme: ye = "light",
  darkModeSelector: De,
  showThemeToggler: tt = !1,
  onThemeToggle: Dt,
  GlobalChatSidebar: pt,
  useChatSidebar: ht,
  chatPanelMode: pn = "docked",
  chatPanelPosition: hn = "right",
  chatPanelWidth: gn = 420,
  onChatClose: eo,
  showAssistant: ct = !1,
  assistantPlacement: gt = "sidebar",
  assistantShortcut: bt = "j",
  onAssistantClick: nt,
  assistantActive: Mt = !1,
  assistantBusy: bn = !1,
  assistantLabel: to = "Nexa",
  customNavbar: dt,
  customNavbarProps: no,
  redirectToLogin: ut,
  apiBaseUrl: p
}) => {
  const O = Wr(), q = ye === "dark", X = Ne ?? "#01584f", W = qe ?? X, ne = Or(
    typeof ge == "object" ? ge[ye] : ge,
    q
  ), ae = i === "collapsible", Re = i === "panel", Me = Re && r && !O, ue = i === "rail-labeled", ot = ae || ue, Ie = qn(
    I,
    q
  ), Pt = N ?? Ie, $e = be ?? (q ? "#ffffff" : W), Ft = b ?? tn($e), Bt = N ? ko(Pt) : $e, rl = (L) => /* @__PURE__ */ o(
    "div",
    {
      role: "img",
      "aria-label": `${l} logo`,
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
  ), xn = v ?? Bt, [sl, zt] = Ue(
    null
  ), oo = ((pe == null ? void 0 : pe.length) ?? 0) > 1, as = ho(() => zt(null), []), is = (L) => {
    zt(null), He ? He(L) : L.key !== ve && L.url && window.location.assign(L.url);
  }, lo = !O && (on(a, i) || !(ae || Re)), al = (L) => oo ? /* @__PURE__ */ o(
    hc,
    {
      anchorEl: sl,
      onClose: as,
      onOpen: zt,
      hoverOpen: lo,
      platforms: pe,
      currentKey: ve,
      onSelect: is,
      accentColor: X,
      glass: a === "flyout" && (ae || Re) && !O,
      children: L
    }
  ) : L, vn = oo ? (L) => zt(L.currentTarget) : g, yn = oo ? !!sl : void 0, ro = al(
    w ?? rl(xn)
  ), cs = al(
    w ?? rl(v ?? $e)
  ), so = Uc(), Be = on(a, i), We = Be || !so.expanded, ke = r && !O && la(u, a, i), xt = Hc(ke), il = Be ? "popover" : "expand", cl = Be ? nn : Jt, dl = Be ? "transparent" : Ie, ul = Be && !N ? "transparent" : Pt, [ds, wl] = Ue(!1), us = ho(() => wl(!1), []), Ve = Cr({
    showSidebar: r,
    isMobile: O,
    sidebarVariant: i,
    sidebarSubmenu: a,
    sidebarAutoHide: u
  }), [fl, vt] = Ue(!1), [ml, ao] = Ue(!1), Le = O && d === "bottom-bar", pl = `calc(${Qr}px + env(safe-area-inset-bottom, 0px))`, [Ze, hl] = Ue({ open: !1, tab: "notifications" }), io = () => hl((L) => ({ ...L, open: !1 })), gl = V && !!J, bl = Sn(null), [co, ws] = Ue(null), Ht = ho(() => {
    const L = O ? null : Xc(bl.current);
    ws(
      (le) => le && L && le.left === L.left && le.top === L.top && le.height === L.height ? le : L
    );
  }, [O]);
  Vt(() => {
    if (Ze.open)
      return Ht(), window.addEventListener("resize", Ht), () => window.removeEventListener("resize", Ht);
  }, [Ze.open, Ht]);
  const xl = (L) => {
    vt(!1), ao(!1), Ht(), hl({ open: !0, tab: L });
  }, wt = Qn({
    open: Ze.open,
    onOpen: () => xl("notifications"),
    onClose: io
  }), vl = gl ? wt.triggerProps : void 0, Ge = xt.shown || ke && Ze.open && wt.openedByHover, [fs, ms] = Ue(0), [ps, hs] = Ue(Ge);
  ps !== Ge && (hs(Ge), Ge || (ms((L) => L + 1), zt(null)));
  const [gs, bs] = Ue(!0), [xs, vs] = Ue(!1), uo = ht == null ? void 0 : ht(), yl = (uo == null ? void 0 : uo.isOpen) ?? !1, El = pn === "floating" ? "floating" : "docked", ys = El === "docked" && yl && pt && !O ? gn : 0, En = Sn(M), Nl = Sn(!1), Sl = Bs(
    () => fi(p),
    [p]
  );
  Vt(() => {
    En.current = M;
  }, [M]);
  const wo = Sn(nt);
  wo.current = nt;
  const Wt = ct && bt ? bt.toLowerCase() : null;
  Vt(() => {
    if (!Wt)
      return;
    const L = (le) => {
      (le.metaKey || le.ctrlKey) && !le.altKey && !le.shiftKey && le.key.toLowerCase() === Wt && wo.current && (le.preventDefault(), wo.current());
    };
    return window.addEventListener("keydown", L), () => window.removeEventListener("keydown", L);
  }, [Wt]);
  const _l = (L) => {
    const le = B(L);
    le instanceof Promise && le.catch((Je) => {
      console.error("Error in logout handler:", Je);
    });
  };
  if (Zc(() => {
    (() => {
      var le;
      try {
        const { isAuthenticated: Je } = ui();
        if (!Je) {
          console.log("No session found, redirecting to login"), dn(), ut();
          return;
        }
        if (!Nl.current) {
          const { user: Ut, error: po } = wi();
          if (Ut && !po) {
            const Cs = {
              name: Ut.name || "",
              email: Ut.email || "",
              profilePicture: Ut.profilePicture || "",
              role: Ut.role || ""
            };
            Nl.current = !0, (le = En.current) == null || le.call(En, Cs);
          } else
            po && console.error("Error getting user data:", po);
        }
        vs(!0);
      } catch (Je) {
        console.error("Error checking session:", Je), dn(), ut();
      } finally {
        bs(!1);
      }
    })();
  }, [ut]), Vt(() => {
    C && mi(Sl, ut);
  }, [C, Sl]), gs || K)
    return /* @__PURE__ */ o(
      ci,
      {
        theme: ye,
        darkModeSelector: De,
        sidebarVariant: i,
        sidebarSubmenu: a,
        sidebarAutoHide: u,
        showSidebar: r,
        contentPadding: E,
        sidebarBackgroundColor: I,
        contentBackgroundColor: ge,
        content: D
      }
    );
  if (!xs)
    return null;
  const Gt = f ?? (dt ? /* @__PURE__ */ o(dt, { ...no }) : null), fo = J && (() => xl("notifications")), Es = fe + te, Rl = {
    avatarColor: W,
    // The standard menu only runs `onClick`, so path rows navigate here.
    menuItems: S == null ? void 0 : S.map(
      (L) => L.onClick || !L.path ? L : { ...L, onClick: () => P == null ? void 0 : P(L.path) }
    ),
    showNotifications: V,
    notificationCount: fe,
    whatsNewCount: te,
    onNotificationsClick: fo,
    notificationsTriggerProps: vl,
    notificationsOpen: Ze.open,
    showProfile: G,
    userName: oe,
    userRole: z,
    userAvatar: A,
    showSettings: Z,
    onSettingsClick: k,
    showThemeToggler: tt,
    theme: ye,
    onThemeToggle: Dt,
    onLogout: _l
  }, mo = (L, le = !1) => /* @__PURE__ */ o(
    Tc,
    {
      ...Rl,
      compact: L,
      hoverOpen: le,
      color: $e,
      hoverColor: Ft
    }
  ), Tl = Wt ? [dr() ? "⌘" : "Ctrl", Wt.toUpperCase()] : void 0, Ns = (L) => ct && gt === "sidebar" ? /* @__PURE__ */ o(
    Vl,
    {
      variant: L ? "sidebar-icon" : "sidebar",
      onClick: nt,
      active: Mt,
      busy: bn,
      shortcutKeys: Tl,
      accentColor: $e
    }
  ) : null, Ss = _ ? [dr() ? "⌘" : "Ctrl", _.toUpperCase()] : void 0, _s = (L) => Gt ? /* @__PURE__ */ o(
    Dc,
    {
      search: Gt,
      icon: h,
      mode: L,
      onExpand: () => {
        so.pin(), wl(!0);
      },
      autoFocus: ds,
      onAutoFocused: us,
      color: $e,
      hoverColor: Ft,
      shortcutKeys: Ss
    }
  ) : null, Nn = (L) => {
    const le = Ns(L !== "full"), Je = _s(L);
    return le || Je ? /* @__PURE__ */ y(
      "div",
      {
        className: x(
          "lw:flex lw:flex-col",
          L === "full" ? "lw:items-stretch" : "lw:items-center"
        ),
        style: { gap: Be ? Yn : 12 },
        children: [
          le,
          Be && le && Je ? /* @__PURE__ */ o(
            "div",
            {
              role: "separator",
              className: "lw:w-full lw:border-t lw:border-solid",
              style: {
                borderTopColor: tn($e)
              }
            }
          ) : null,
          Je
        ]
      }
    ) : void 0;
  }, Al = () => /* @__PURE__ */ o(
    Mo,
    {
      mainLinks: t,
      secondaryLinks: n,
      activePath: F,
      onLinkClick: P,
      showHeaderBar: ae,
      logo: ro,
      title: l,
      onBrandClick: vn,
      brandMenuOpen: yn,
      brandColor: xn,
      headerBackgroundColor: ae ? ul : void 0,
      headerForegroundColor: ae ? Bt : void 0,
      activeAccentColor: W,
      activeBackgroundColor: ie,
      groupArrowColor: Se,
      groupAccentColor: b,
      activeForegroundColor: T,
      foregroundColor: be,
      surfaceBackgroundColor: dl,
      flyoutSurfaceColor: Ie,
      collapsed: ue || We,
      showLabels: ue,
      expandedWidth: Oo,
      collapsedWidth: ue ? Sr : cl,
      topContent: Nn(
        ue ? "popover" : We ? il : "full"
      ),
      footer: mo(
        ue || We,
        lo
      ),
      submenuMode: Be ? "flyout" : "inline"
    }
  ), Cl = (L) => Be ? Rs(L) : Ts(L), Rs = (L) => /* @__PURE__ */ y(
    "aside",
    {
      ...ke ? xt.rootProps : {},
      "data-auto-hide": ke ? "true" : void 0,
      "data-shown": ke ? String(Ge) : void 0,
      className: x(
        // Above the page, including its sticky app bars
        "lw:top-0 lw:h-screen",
        ke ? (
          // and above dialogs (1300), so a modal never covers the
          // edge; under menus, popovers and toasts (1400)
          "lw:pointer-events-none lw:fixed lw:left-0 lw:z-[1350]"
        ) : "lw:sticky lw:z-[1101] lw:shrink-0 lw:self-start"
      ),
      style: ke ? { width: ta } : {
        width: Ve,
        minWidth: Ve,
        backgroundColor: ne
      },
      children: [
        ke && /* @__PURE__ */ o(
          "div",
          {
            "data-testid": "sidebar-edge-reveal",
            "aria-hidden": "true",
            className: "lw:pointer-events-auto lw:absolute lw:inset-y-0 lw:left-0",
            style: { width: Yc }
          }
        ),
        ke && /* @__PURE__ */ o(
          "div",
          {
            ref: xt.glowRef,
            "data-testid": "sidebar-edge-glow",
            "data-visible": String(xt.nearEdge && !Ge),
            "aria-hidden": "true",
            className: "lw:pointer-events-none lw:absolute lw:inset-y-0 lw:left-0 lw:transition-opacity lw:duration-200 lw:ease-[ease]",
            style: {
              "--edge-glow-y": "50%",
              width: cr,
              // A pool of light at the edge, where the pointer is
              background: `radial-gradient(${cr}px ${Io}px at 0 var(--edge-glow-y), ${it($e, q ? 0.5 : 0.4)}, ${it($e, 0)})`,
              opacity: xt.nearEdge && !Ge ? 1 : 0
            },
            children: /* @__PURE__ */ o(
              "span",
              {
                className: "lw:absolute lw:inset-y-0 lw:left-0 lw:w-[3px]",
                style: {
                  background: `linear-gradient(180deg, transparent calc(var(--edge-glow-y) - ${Io}px), ${it($e, q ? 0.95 : 0.85)} var(--edge-glow-y), transparent calc(var(--edge-glow-y) + ${Io}px))`
                }
              }
            )
          }
        ),
        /* @__PURE__ */ y(
          "div",
          {
            "data-testid": "sidebar-hover-panel",
            "data-expanded": "false",
            "data-glass": "true",
            "data-rail-surface": "",
            className: x(
              "lw:absolute lw:flex lw:flex-col",
              ke && xr,
              he
            ),
            style: {
              top: at,
              bottom: at,
              left: at,
              width: nn,
              borderRadius: Rr,
              ...ke && {
                pointerEvents: Ge ? "auto" : "none",
                opacity: Ge ? 1 : 0,
                transform: Ge ? "none" : `translateX(calc(-100% - ${2 * at}px))`,
                transition: qc
              },
              ...j
            },
            children: [
              /* @__PURE__ */ o(
                Jn,
                {
                  isDark: q,
                  solid: Ie,
                  className: "lw:absolute lw:inset-0",
                  style: { borderRadius: "inherit" }
                }
              ),
              /* @__PURE__ */ o(
                "div",
                {
                  className: "lw:relative lw:flex lw:min-h-0 lw:flex-auto lw:flex-col lw:overflow-hidden",
                  style: { borderRadius: "inherit" },
                  children: L
                },
                fs
              )
            ]
          }
        )
      ]
    }
  ), Ts = (L) => /* @__PURE__ */ o(
    "aside",
    {
      className: "lw:sticky lw:top-0 lw:z-[1101] lw:h-screen lw:shrink-0 lw:self-start",
      style: {
        width: Jt,
        minWidth: Jt
      },
      children: /* @__PURE__ */ o(
        "div",
        {
          ...Be ? {} : so.rootProps,
          "data-testid": "sidebar-hover-panel",
          "data-expanded": We ? "false" : "true",
          className: x(
            "lw:absolute lw:top-0 lw:left-0 lw:flex lw:h-full lw:flex-col lw:overflow-hidden lw:border-r lw:border-solid lw:border-border",
            he
          ),
          style: {
            width: We ? Jt : Oo,
            backgroundColor: Ie,
            boxShadow: We ? "none" : `4px 0 24px rgba(0, 0, 0, ${q ? 0.5 : 0.12})`,
            transition: jc,
            ...j
          },
          children: L
        }
      )
    }
  ), As = Ar(E), ft = O || !co ? null : ke && !wt.openedByHover ? { ...co, left: at } : co;
  return /* @__PURE__ */ o(pr.Provider, { value: ye, children: /* @__PURE__ */ o(vr.Provider, { value: W, children: /* @__PURE__ */ o(Kn.Provider, { value: Ie, children: /* @__PURE__ */ o(ts.Provider, { value: R, children: /* @__PURE__ */ y(
    "div",
    {
      ref: bl,
      "data-lw-scope": "",
      "data-lw-theme": ye,
      className: x("lw:flex lw:min-h-screen", de),
      style: U,
      children: [
        O && /* @__PURE__ */ o(
          Qi,
          {
            height: Mn,
            onMenuClick: r && !Le ? () => vt(!0) : void 0,
            appName: l,
            logo: ro,
            onBrandClick: vn,
            brandMenuOpen: yn,
            background: Pt,
            color: Bt,
            brandColor: xn,
            endContent: V ? /* @__PURE__ */ o(
              ol,
              {
                count: Es,
                onClick: fo,
                color: Bt,
                hoverColor: Ft,
                tooltipPlacement: "bottom",
                testId: "mobile-notifications"
              }
            ) : void 0
          }
        ),
        r && !O && ue && /* @__PURE__ */ o(
          "aside",
          {
            className: x(
              "lw:sticky lw:top-0 lw:z-[2] lw:flex lw:h-screen lw:shrink-0 lw:flex-col lw:self-start lw:border-r lw:border-solid lw:border-border",
              he
            ),
            style: {
              width: Ve,
              minWidth: Ve,
              ...j
            },
            children: Al()
          }
        ),
        r && !O && ae && Cl(
          /* @__PURE__ */ y(xe, { children: [
            Al(),
            (H == null ? void 0 : H.show) && !We && /* @__PURE__ */ o($n, { ...H })
          ] })
        ),
        Me && Cl(
          /* @__PURE__ */ y(xe, { children: [
            /* @__PURE__ */ o(
              _c,
              {
                mainLinks: t,
                secondaryLinks: n,
                activePath: F,
                onLinkClick: P,
                logo: ro,
                title: l,
                onBrandClick: vn,
                brandMenuOpen: yn,
                brandColor: xn,
                headerBackgroundColor: ul,
                headerForegroundColor: Bt,
                activeAccentColor: W,
                activeBackgroundColor: ie,
                groupArrowColor: Se,
                groupAccentColor: b,
                activeForegroundColor: T,
                foregroundColor: be,
                surfaceBackgroundColor: dl,
                flyoutSurfaceColor: Ie,
                collapsed: We,
                expandedWidth: Oo,
                collapsedWidth: cl,
                topContent: Nn(
                  We ? il : "full"
                ),
                submenuMode: Be ? "flyout" : "inline",
                color: $e,
                hoverColor: Ft,
                avatarColor: W,
                showProfile: G,
                userName: oe,
                userEmail: $,
                userRole: z,
                userAvatar: A,
                showNotifications: V,
                notificationCount: fe,
                onNotificationsClick: gl ? fo : me,
                notificationsTriggerProps: vl,
                notificationsOpen: Ze.open,
                whatsNewCount: te,
                onProfileClick: ee,
                onAiUsageClick: we,
                aiUsageCaption: Y,
                menuItems: S,
                onLogout: _l,
                theme: ye,
                showThemeToggler: tt,
                onThemeToggle: Dt
              }
            ),
            (H == null ? void 0 : H.show) && !We && /* @__PURE__ */ o($n, { ...H })
          ] })
        ),
        r && !O && !ot && !Re && // The fixed rail: a permanent drawer, its column fixed
        // to the window's left edge
        /* @__PURE__ */ o(
          "div",
          {
            "data-slot": "rail-drawer",
            className: x(
              "lw:z-[2] lw:shrink-0",
              he
            ),
            style: {
              width: Ve,
              ...j
            },
            children: /* @__PURE__ */ y(
              "aside",
              {
                "data-slot": "rail-drawer-paper",
                className: "lw:fixed lw:top-0 lw:left-0 lw:z-[1200] lw:flex lw:h-full lw:flex-col lw:overflow-y-auto lw:px-3 lw:pt-4",
                style: {
                  width: Ve,
                  backgroundColor: ne
                },
                children: [
                  /* @__PURE__ */ o("div", { className: "lw:mb-3 lw:flex lw:justify-center", children: /* @__PURE__ */ o(
                    Hn,
                    {
                      logo: cs,
                      appName: l,
                      onClick: vn,
                      menuOpen: yn,
                      color: v ?? $e,
                      testId: "sidebar-header-brand"
                    }
                  ) }),
                  Nn("popover"),
                  /* @__PURE__ */ y("div", { className: "lw:mt-2 lw:flex lw:min-h-0 lw:flex-auto lw:flex-col lw:overflow-y-auto", children: [
                    /* @__PURE__ */ o(
                      Pi,
                      {
                        mainLinks: t,
                        secondaryLinks: n,
                        activePath: F,
                        onLinkClick: P,
                        accentColor: W,
                        surfaceBackgroundColor: ne,
                        railShowTitles: s
                      }
                    ),
                    (H == null ? void 0 : H.show) && /* @__PURE__ */ o(
                      $n,
                      {
                        ...H
                      }
                    )
                  ] }),
                  /* @__PURE__ */ o("div", { className: "lw:py-3", children: mo(
                    !0,
                    lo
                  ) })
                ]
              }
            )
          }
        ),
        r && O && /* @__PURE__ */ o(
          Bo,
          {
            open: fl,
            onOpenChange: vt,
            children: /* @__PURE__ */ y(
              Gn,
              {
                side: Le ? "bottom" : "left",
                "aria-label": "Navigation",
                srTitle: "Navigation",
                overlayClassName: "lw:z-[1201]",
                className: x(
                  "lw:z-[1201] lw:overflow-y-auto lw:border-0",
                  Le ? "lw:max-h-[min(80vh,640px)] lw:rounded-t-2xl lw:pb-[env(safe-area-inset-bottom,0px)]" : "lw:max-w-[85vw]"
                ),
                style: {
                  backgroundColor: Ie
                },
                children: [
                  Le && // Grab handle, marking the sheet as one that closes downwards
                  /* @__PURE__ */ o(
                    "div",
                    {
                      "aria-hidden": "true",
                      className: "lw:mx-auto lw:mt-2 lw:mb-1 lw:h-1 lw:w-9 lw:shrink-0 lw:rounded-[2px] lw:bg-border"
                    }
                  ),
                  /* @__PURE__ */ o(
                    Mo,
                    {
                      mainLinks: t,
                      secondaryLinks: n,
                      activePath: F,
                      onLinkClick: (L) => {
                        P == null || P(L), vt(!1);
                      },
                      onLinkAction: () => vt(!1),
                      collapsed: !1,
                      expandedWidth: Le ? "100%" : Kc,
                      activeAccentColor: W,
                      activeBackgroundColor: ie,
                      groupArrowColor: Se,
                      groupAccentColor: b,
                      activeForegroundColor: T,
                      foregroundColor: be,
                      surfaceBackgroundColor: Ie,
                      topInsetPx: Le ? 8 : 0,
                      topContent: Le ? void 0 : Nn("full"),
                      footer: Le ? void 0 : mo(!1)
                    }
                  ),
                  (H == null ? void 0 : H.show) && /* @__PURE__ */ o($n, { ...H })
                ]
              }
            )
          }
        ),
        Le && Gt && /* @__PURE__ */ o(
          Zi,
          {
            open: ml,
            onClose: () => ao(!1),
            search: Gt
          }
        ),
        Le && /* @__PURE__ */ o(
          Yi,
          {
            ...Rl,
            pinnedLinks: m,
            activePath: F,
            onLinkClick: P,
            onMenuClick: r ? () => vt(!0) : void 0,
            menuOpen: fl,
            onSearchClick: Gt ? () => ao(!0) : void 0,
            searchOpen: ml,
            showAssistant: ct,
            assistantLabel: to,
            onAssistantClick: nt,
            assistantActive: Mt,
            showProfile: G,
            background: Ie,
            color: $e,
            activeColor: W,
            activeBackground: Ft
          }
        ),
        /* @__PURE__ */ o(
          "main",
          {
            "data-lw-host": "",
            className: x(
              "lw-content-padding lw:grow",
              Ee
            ),
            style: {
              ...As,
              // Where sticky page elements should pin (below the mobile bar)
              "--lumora-sticky-top": O ? `${Mn}px` : "0px",
              padding: "var(--lumora-content-padding)",
              width: Ve ? `calc(100% - ${Ve}px)` : "100%",
              marginTop: O ? `${Mn}px` : 0,
              // Keep the last content clear of the bottom bar
              ...Le && {
                paddingBottom: `calc(var(--lumora-content-padding) + ${pl})`
              },
              backgroundColor: ne,
              ...Q
            },
            children: e
          }
        ),
        pt && /* @__PURE__ */ o(
          _i,
          {
            open: yl,
            variant: El,
            position: hn,
            width: gn,
            sidebarWidthPx: Ve,
            bottomOffsetPx: ct && gt === "floating" ? Vc : 0,
            fullScreen: O,
            fullScreenBottom: Le ? pl : "0px",
            onClose: eo,
            children: /* @__PURE__ */ o(pt, {})
          }
        ),
        ct && gt === "floating" && !Le && /* @__PURE__ */ o(
          Vl,
          {
            variant: "floating",
            rightOffsetPx: ys,
            shortcutKeys: Tl,
            onClick: nt,
            active: Mt,
            busy: bn
          }
        ),
        V && J && /* @__PURE__ */ o(
          Bo,
          {
            open: Ze.open,
            modal: !wt.openedByHover,
            onOpenChange: (L) => {
              L || io();
            },
            children: /* @__PURE__ */ o(
              Gn,
              {
                ...wt.contentProps,
                onMouseOver: ke && wt.openedByHover ? xt.rootProps.onMouseOver : void 0,
                onOpenAutoFocus: (L) => {
                  wt.openedByHover && L.preventDefault();
                },
                side: ft ? "left" : "right",
                srTitle: "Updates",
                className: ft ? "lw-slide-from-edge lw:overflow-hidden lw:rounded-lg lw:border-0" : "lw:overflow-hidden lw:rounded-l-lg lw:border-0",
                style: ft ? {
                  width: 380,
                  maxWidth: `calc(100vw - ${ft.left}px)`,
                  left: ft.left,
                  top: ft.top,
                  height: ft.height
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
                      J,
                      {
                        onClose: io,
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
}, ud = Jc, Pe = {
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
}, Et = {
  300: "hsl(120, 61%, 77%)",
  400: "hsl(120, 44%, 53%)",
  500: "hsl(120, 59%, 30%)",
  700: "hsl(120, 75%, 16%)",
  800: "hsl(120, 84%, 10%)"
}, Nt = {
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
}, _t = (e, t) => {
  const n = /^hsl\((.+)\)$/.exec(e);
  if (n)
    return `hsla(${n[1]}, ${t})`;
  const l = /^#([0-9a-f]{6})$/i.exec(e);
  if (l) {
    const r = parseInt(l[1], 16);
    return `rgba(${r >> 16 & 255}, ${r >> 8 & 255}, ${r & 255}, ${t})`;
  }
  return e;
}, ze = (e) => `${e / 16}rem`, re = (...e) => [
  `${e[0]}px ${e[1]}px ${e[2]}px ${e[3]}px rgba(0,0,0,0.2)`,
  `${e[4]}px ${e[5]}px ${e[6]}px ${e[7]}px rgba(0,0,0,0.14)`,
  `${e[8]}px ${e[9]}px ${e[10]}px ${e[11]}px rgba(0,0,0,0.12)`
].join(","), Qc = [
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
], wd = (e) => {
  const t = e === "dark", n = [...Qc];
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
      warning: t ? { light: Nt[400], main: Nt[500], dark: Nt[700] } : { light: Nt[300], main: Nt[400], dark: Nt[800] },
      error: t ? { light: St[400], main: St[500], dark: St[700] } : { light: St[300], main: St[400], dark: St[800] },
      success: t ? { light: Et[400], main: Et[500], dark: Et[700] } : { light: Et[300], main: Et[400], dark: Et[800] },
      grey: Fe,
      divider: t ? _t(Fe[700], 0.6) : _t(Fe[300], 0.4),
      background: t ? { default: Fe[900], paper: "hsl(220, 30%, 7%)" } : { default: "hsl(0, 0%, 99%)", paper: "hsl(220, 35%, 97%)" },
      text: t ? { primary: "hsl(0, 0%, 100%)", secondary: Fe[400] } : { primary: Fe[800], secondary: Fe[600] },
      action: t ? {
        hover: _t(Fe[600], 0.2),
        selected: _t(Fe[600], 0.3)
      } : {
        hover: _t(Fe[200], 0.2),
        selected: _t(Fe[200], 0.3)
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
    shadows: n
  };
};
export {
  ce as AUTH_ERROR_CODES,
  ta as AUTO_HIDE_RAIL_WIDTH_PX,
  se as AuthError,
  Mo as CollapsibleSidebar,
  cd as FullBleedSection,
  ni as Kbd,
  ci as LumoraShellSkeleton,
  ud as LumoraWrapper,
  dn as clearAuthTokens,
  ud as default,
  dd as getAuthErrorMessage,
  cn as getAuthTokens,
  wi as getCurrentUser,
  wd as getDesignTokens,
  ui as isAuthenticated,
  Po as logAuthError,
  Ur as storeAuthTokens
};
