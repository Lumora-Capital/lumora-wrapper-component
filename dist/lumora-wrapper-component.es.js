import { jsx as o, jsxs as y, Fragment as ve } from "react/jsx-runtime";
import { ChevronRightIcon as As, ChevronUpIcon as Cs, ChevronDownIcon as Os, SparklesIcon as Is, BellIcon as dr, SettingsIcon as $s, LogOutIcon as ur, MenuIcon as wr, SearchIcon as Ho, CheckIcon as ks, SunMoonIcon as Ls, SunIcon as Ms, MoonIcon as Ds } from "lucide-react";
import * as c from "react";
import { useState as Ue, useCallback as po, useRef as Sn, useEffect as qt, useMemo as Ps, useLayoutEffect as Fs } from "react";
import { clsx as Bs } from "clsx";
import { extendTailwindMerge as zs } from "tailwind-merge";
import { Tooltip as Rt, Slot as Hs, Popover as zn, DropdownMenu as Ct, Dialog as Vt } from "radix-ui";
import { createPortal as fr } from "react-dom";
import Cl from "axios";
import { cva as Gs } from "class-variance-authority";
const Ws = zs({ prefix: "lw" });
function v(...e) {
  return Ws(Bs(e));
}
const Ol = "lw:flex lw:flex-row lw:items-center lw:gap-2 lw:min-w-0 lw:shrink-0 lw:[&_svg]:text-inherit lw:[&_svg]:fill-current", Us = ({
  logo: e,
  title: t,
  appName: n,
  onClick: l,
  color: s,
  testId: r,
  menuOpen: i
}) => {
  const a = /* @__PURE__ */ y(ve, { children: [
    t ? /* @__PURE__ */ o(
      "h6",
      {
        className: "lw:overflow-hidden lw:text-ellipsis lw:whitespace-nowrap lw:text-[18px] lw:leading-none lw:font-semibold lw:uppercase",
        style: { color: s },
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
      "data-testid": r,
      className: v(
        Ol,
        "lw:cursor-pointer lw:rounded-lg lw:px-1 lw:-mx-1 lw:outline-none lw:hover:bg-accent lw:focus-visible:outline-2 lw:focus-visible:outline-solid lw:focus-visible:outline-offset-2 lw:focus-visible:outline-(--lw-brand-color)"
      ),
      style: { color: s, "--lw-brand-color": s },
      children: a
    }
  ) : /* @__PURE__ */ o("div", { "data-testid": r, className: Ol, style: { color: s }, children: a });
}, Hn = Us, mr = c.createContext(void 0), Xs = () => typeof document < "u" && document.documentElement.getAttribute("data-color-scheme") === "dark", Ks = (e) => {
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
    Ks,
    Xs,
    () => !1
  );
  return e ? e === "dark" : t;
}, dn = () => ({
  "data-lw-scope": "",
  "data-lw-theme": Ye() ? "dark" : "light"
}), pr = c.forwardRef(({ className: e, sideOffset: t = 4, arrow: n = !1, children: l, ...s }, r) => {
  const i = dn();
  return /* @__PURE__ */ o(Rt.Portal, { children: /* @__PURE__ */ y(
    Rt.Content,
    {
      ref: r,
      ...i,
      "data-slot": "tooltip-content",
      sideOffset: t,
      className: v(
        "lw:z-[1500] lw:max-w-xs lw:rounded-md lw:bg-tooltip lw:px-2 lw:py-1 lw:text-xs lw:font-medium lw:text-tooltip-foreground lw:animate-in lw:fade-in-0 lw:zoom-in-95 lw:data-[state=closed]:animate-out lw:data-[state=closed]:fade-out-0 lw:data-[state=closed]:zoom-out-95",
        e
      ),
      ...s,
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
  sideOffset: s,
  open: r,
  onOpenChange: i,
  delayDuration: a = 300,
  contentClassName: u,
  contentStyle: d,
  disabled: m = !1,
  arrow: p = !1,
  disableHoverableContent: g = !0
}) {
  const f = e == null || e === "" || e === !1, [h, _] = c.useState(!1);
  (m || f) && h && _(!1);
  const b = (S) => {
    r === void 0 && _(S), i == null || i(S);
  };
  return /* @__PURE__ */ o(
    Rt.Provider,
    {
      delayDuration: a,
      disableHoverableContent: g,
      children: /* @__PURE__ */ y(
        Rt.Root,
        {
          open: m || f ? !1 : r ?? h,
          onOpenChange: b,
          children: [
            /* @__PURE__ */ o(Rt.Trigger, { asChild: !0, children: t }),
            f ? null : /* @__PURE__ */ o(
              pr,
              {
                side: n,
                align: l,
                sideOffset: s,
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
const ho = (e, t) => (n) => {
  e == null || e(n), t(n);
}, js = ({
  children: e,
  onOpenChange: t,
  ...n
}) => {
  const [l, s] = c.useState(!1), r = c.useRef(!1), i = c.useRef(!1), a = c.Children.only(e), u = c.cloneElement(a, {
    onPointerEnter: ho(a.props.onPointerEnter, () => {
      r.current = !0;
    }),
    onPointerLeave: ho(a.props.onPointerLeave, () => {
      r.current = !1, i.current = !1;
    }),
    onClickCapture: ho(a.props.onClickCapture, () => {
      i.current = !0, s(!1);
    })
  });
  return /* @__PURE__ */ o(
    je,
    {
      ...n,
      open: l,
      onOpenChange: (d) => {
        d && (!r.current || i.current) || (s(d), t == null || t(d));
      },
      children: u
    }
  );
}, Mn = js, Io = !1, Ot = (e) => e.button === 0 && !e.metaKey && !e.ctrlKey && !e.shiftKey && !e.altKey, Tt = (e) => {
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
  const [n, l, s] = t.map((i) => {
    const a = i / 255;
    return a <= 0.03928 ? a / 12.92 : ((a + 0.055) / 1.055) ** 2.4;
  });
  return 0.2126 * n + 0.7152 * l + 0.0722 * s > 0.5 ? "#0b1f1c" : "#ffffff";
}, tn = (e) => {
  const t = Xn(e);
  if (!t)
    return "rgba(1, 88, 79, 0.12)";
  const [n, l, s] = t;
  return `rgba(${n}, ${l}, ${s}, 0.14)`;
}, st = (e, t) => {
  const n = Xn(e);
  return n ? `rgba(${n[0]}, ${n[1]}, ${n[2]}, ${t})` : e;
}, Xn = (e) => {
  let t = e.trim().replace(/^#/, "");
  if (t.length === 3 && (t = t.split("").map((l) => l + l).join("")), t.length !== 6 || /[^0-9a-fA-F]/.test(t))
    return null;
  const n = parseInt(t, 16);
  return [n >> 16 & 255, n >> 8 & 255, n & 255];
}, hr = (e) => e.replace(/_/g, " ").split(/\s+/).filter(Boolean).join(" ").toUpperCase(), Wo = (e) => e ? "rgba(255, 255, 255, 0.12)" : "rgba(15, 23, 42, 0.1)", Ys = (e) => e ? "0 12px 32px -8px rgba(0, 0, 0, 0.6)" : "0 12px 32px -8px rgba(15, 23, 42, 0.18), 0 2px 6px rgba(15, 23, 42, 0.06)", qs = "lw-tile-in", $e = "lw-motion-none", gr = "lw-motion-fade", br = "lw-motion-fade-fast", et = 6, Uo = "9, 193, 174", xr = c.createContext(
  void 0
), Kn = c.createContext(
  void 0
), Xo = (e) => c.useContext(Kn) ?? e, jn = () => {
  const e = c.useContext(xr), t = e ? Xn(e) : null;
  return t ? t.join(", ") : Uo;
}, Vs = (e, t, n = Uo) => ({
  // Solid: the surface colour, a hairline edge and a shadow
  className: "lw:relative",
  style: {
    backgroundColor: t,
    boxShadow: `${Ys(e)}, 0 0 0 1px ${Wo(e)}`
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
}, Zs = (e, t) => {
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
    const l = `inset 0 0 0 1px ${Wo(e)}`, s = e ? "rgba(255, 255, 255, 0.06)" : "#ffffff";
    return n({
      bg: e ? "rgba(255, 255, 255, 0.04)" : "#ffffff",
      shadow: l,
      hoverBg: s,
      focusBg: s,
      focusShadow: `${l}, 0 0 0 3px ${t}`
    });
  }
}, Js = 100, Nr = 80, Dn = 56, Zt = 72, en = 64, Ce = 44, ko = 24, Yn = 4, lt = 8, Sr = 1.4, _r = et, Rr = { xs: 2, md: "18px" }, Qs = ["xs", "sm", "md", "lg", "xl"], ea = 8, Il = (e) => typeof e == "number" ? `${e * ea}px` : e, Tr = (e) => typeof e == "object" ? Object.fromEntries(
  Qs.filter((t) => e[t] !== void 0).map((t) => [
    `--lw-cp-${t}`,
    Il(e[t])
  ])
) : { "--lw-cp-xs": Il(e) }, nn = (e, t) => e === "flyout" && (t === "collapsible" || t === "panel"), ta = (e, t, n) => e && nn(t, n), Ar = ({
  showSidebar: e,
  isMobile: t,
  sidebarVariant: n,
  sidebarSubmenu: l,
  sidebarAutoHide: s = !1
}) => !e || t ? 0 : n === "rail-labeled" ? Nr : nn(l, n) ? s ? 0 : en + 2 * lt : n === "collapsible" || n === "panel" ? Zt : Js, qn = (e, t) => e ?? (t ? "hsl(220, 30%, 7%)" : "#ffffff"), Cr = (e, t) => e ?? (t ? "hsl(220, 35%, 9%)" : "#f2f9fc"), Or = { stiffness: 320, damping: 24 }, Ir = { stiffness: 320, damping: 28 }, qo = { stiffness: 520, damping: 20 }, Vo = { stiffness: 380, damping: 36 }, Vn = { stiffness: 260, damping: 28 }, na = "cubic-bezier(0.32, 1.28, 0.52, 1)", oa = 420, $l = 60, la = (() => {
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
  const l = `${e}/${t}/${n}`, s = kl.get(l);
  if (s)
    return s;
  if (!la)
    return { easing: na, duration: oa };
  const r = 1 / 600;
  let i = 0, a = 0, u = 0, d = 1 / $l;
  const m = [0];
  for (; u < 3; ) {
    const g = (-e * (i - 1) - t * a) / n;
    if (a += g * r, i += a * r, u += r, u >= d && (m.push(i), d += 1 / $l, Math.abs(i - 1) < 1e-3 && Math.abs(a) < 0.01))
      break;
  }
  m[m.length - 1] = 1;
  const p = {
    easing: `linear(${m.map((g) => Number(g.toFixed(4))).join(", ")})`,
    duration: Math.round(u * 1e3)
  };
  return kl.set(l, p), p;
}, on = (e) => !!(e && typeof e.animate == "function"), It = () => typeof window < "u" && typeof window.matchMedia == "function" && window.matchMedia("(prefers-reduced-motion: reduce)").matches, ra = (e) => {
  !e || typeof e.getAnimations != "function" || e.getAnimations({ subtree: !1 }).forEach((t) => t.cancel());
}, sa = (e, t = 1.14) => {
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
}, aa = 1.6, $r = 110, ln = 110, ia = 6, nt = ke(Vo), ca = (e, t = $r) => e >= t ? 0 : (1 + Math.cos(Math.PI * e / t)) / 2, kr = (e, t) => {
  const { offsetWidth: n, offsetHeight: l } = e;
  if (!(n > 0 && l > 0))
    return 1 / 0;
  const s = t.getBoundingClientRect(), r = s.left + t.clientLeft, i = s.top + t.clientTop, a = e.getBoundingClientRect(), u = a.left + a.width / 2, d = a.top + a.height / 2, m = Math.min(
    u - n / 2 - r,
    r + t.clientWidth - (u + n / 2)
  ), p = Math.min(
    d - l / 2 - i,
    i + t.clientHeight - (d + l / 2)
  );
  return Math.min(1 + 2 * m / n, 1 + 2 * p / l);
}, Lr = (e, {
  enabled: t,
  axis: n,
  itemSelector: l,
  glyphSelector: s,
  transition: r,
  maxScale: i = aa,
  reach: a = $r,
  carrierSelector: u,
  spacing: d = 0,
  hoveredOnly: m = !1,
  boundsRef: p
}) => {
  const g = c.useRef(0), f = c.useRef(
    /* @__PURE__ */ new WeakMap()
  ), h = c.useRef(/* @__PURE__ */ new Set()), _ = c.useRef(null), b = (C) => {
    var $;
    _.current !== C && (($ = _.current) == null || $.removeAttribute("data-dock-hovered"), C == null || C.setAttribute("data-dock-hovered", ""), _.current = C);
  }, S = c.useRef(/* @__PURE__ */ new Set()), x = r ? `, ${r}` : "", T = m ? `${nt.duration}ms ${nt.easing}` : `${ln}ms ease-out`, I = (C) => u ? C.closest(u) : null, E = (C) => {
    const [$ = "0", O = "0"] = C.split(" ").filter(Boolean);
    return n === "x" ? parseFloat($) || 0 : parseFloat(O) || 0;
  }, R = (C) => {
    const $ = I(C);
    if (!$)
      return 0;
    const O = getComputedStyle($).translate;
    return E(
      O && O !== "none" ? O : $.style.translate
    );
  }, N = (C, $) => {
    var oe;
    const q = (n === "x" ? C.offsetWidth : C.offsetHeight) * (Number(C.style.scale) || 1) / 2, U = A(C) + E(((oe = I(C)) == null ? void 0 : oe.style.translate) ?? "");
    return Math.max(0, Math.abs($ - U) - q);
  }, A = (C) => {
    const $ = C.getBoundingClientRect();
    return (n === "x" ? $.left + $.width / 2 : $.top + $.height / 2) - R(C);
  }, G = (C) => {
    const $ = C.getBoundingClientRect();
    return Array.from(C.querySelectorAll(l)).filter((O) => {
      var Z;
      const q = (Z = O.parentElement) == null ? void 0 : Z.closest(l);
      if (q && C.contains(q))
        return !1;
      const U = O.getBoundingClientRect(), oe = A(O), me = n === "x" ? oe : U.left + U.width / 2, j = n === "x" ? U.top + U.height / 2 : oe;
      return U.width > 0 && me >= $.left && me <= $.right && j >= $.top && j <= $.bottom;
    }).map((O) => ({
      item: O,
      glyph: s ? O.querySelector(s) : O
    })).filter(
      (O) => O.glyph !== null
    );
  }, k = (C, $) => {
    if ($ === C)
      return i;
    let O = f.current.get($);
    if (O === void 0) {
      const oe = Number($.style.scale) || 1, me = $.getBoundingClientRect();
      O = { width: me.width / oe, height: me.height / oe }, f.current.set($, O);
    }
    if (!(O.width > 0 && O.height > 0))
      return 1;
    const q = C.getBoundingClientRect(), U = Math.min(
      q.width / O.width,
      q.height / O.height
    );
    return Math.max(1, Math.min(U, i));
  }, F = (C) => {
    const $ = p == null ? void 0 : p.current;
    return $ != null && $.contains(C) ? kr(C, $) : 1 / 0;
  }, L = () => {
    var C, $, O, q;
    cancelAnimationFrame(g.current), h.current.forEach((U) => {
      U.style.transition = `scale ${nt.duration}ms ${nt.easing}${x}`, U.style.scale = "";
    }), h.current.clear(), b(null), S.current.forEach((U) => {
      U.style.transition = `translate ${nt.duration}ms ${nt.easing}`, U.style.translate = "", U.style.removeProperty("--dock-scale");
    }), S.current.clear(), (C = e.current) == null || C.style.setProperty(
      "--dock-scale-timing",
      `${nt.duration}ms ${nt.easing}`
    ), ($ = e.current) == null || $.style.removeProperty("--dock-spread"), (O = e.current) == null || O.style.removeProperty("--dock-max-scale"), (q = e.current) == null || q.style.removeProperty("--dock-active-scale");
  }, W = (C, $, O) => {
    const q = n === "x" ? $ : O, U = G(C).map(({ item: j, glyph: Z }) => {
      const ue = A(j), J = m ? j === _.current ? 1 : 0 : ca(Math.abs(q - ue), a), ie = 1 + (Math.max(1, Math.min(k(j, Z), F(Z))) - 1) * J;
      Z.style.transition = `scale ${T}${x}`, ie > 1.001 ? (Z.style.scale = ie.toFixed(3), h.current.add(Z)) : h.current.has(Z) && (Z.style.scale = "", h.current.delete(Z));
      const he = n === "x" ? j.offsetWidth : j.offsetHeight, ye = (ie - 1) * he + 2 * d * J;
      return { item: j, centre: ue, scale: ie, growth: ye };
    });
    C.style.setProperty("--dock-scale-timing", T), C.style.setProperty(
      "--dock-max-scale",
      Math.max(1, ...U.map(({ scale: j }) => j)).toFixed(3)
    );
    const oe = U.find(({ item: j }) => j.dataset.active === "true");
    if (C.style.setProperty(
      "--dock-active-scale",
      ((oe == null ? void 0 : oe.scale) ?? 1).toFixed(3)
    ), !u)
      return;
    const me = U.reduce((j, { growth: Z }) => j + Z, 0);
    C.style.setProperty("--dock-spread", `${me.toFixed(1)}px`), U.forEach(({ item: j, centre: Z, scale: ue, growth: J }) => {
      const te = I(j);
      if (!te)
        return;
      const ie = U.reduce(
        (he, ye) => ye.centre < Z ? he + ye.growth : he,
        J / 2
      );
      te.style.transition = `translate ${T}`, Math.abs(ie) > 0.1 || ue > 1.001 ? (te.style.translate = n === "x" ? `${ie.toFixed(1)}px 0` : `0 ${ie.toFixed(1)}px`, te.style.setProperty("--dock-scale", ue.toFixed(3)), S.current.add(te)) : S.current.has(te) && (te.style.translate = "", te.style.removeProperty("--dock-scale"), S.current.delete(te));
    });
  }, ee = (C) => {
    if (C.pointerType && C.pointerType !== "mouse" || It())
      return;
    const $ = C.currentTarget, { clientX: O, clientY: q } = C;
    cancelAnimationFrame(g.current), g.current = requestAnimationFrame(() => {
      const U = $.getBoundingClientRect(), oe = n === "x" ? q : O, [me, j] = n === "x" ? [U.top, U.bottom] : [U.left, U.right];
      if (oe < me || oe > j) {
        L();
        return;
      }
      if (m) {
        const Z = n === "x" ? O : q, ue = _.current;
        if (!(ue && $.contains(ue) && N(ue, Z) <= ia)) {
          let te = null, ie = 1 / 0;
          G($).forEach(({ item: he }) => {
            const ye = N(he, Z);
            ye < ie && (te = he, ie = ye);
          }), te && b(te);
        }
      }
      W($, O, q);
    });
  }, B = (C) => {
    const $ = e.current;
    if (!t || !$ || It())
      return;
    m && b(C);
    const O = C.getBoundingClientRect();
    W($, O.left + O.width / 2, O.top + O.height / 2);
  };
  return c.useEffect(() => {
    t || L();
  }, [t]), c.useEffect(() => () => cancelAnimationFrame(g.current), []), {
    containerProps: t ? { onPointerMove: ee, onPointerLeave: L, onScrollCapture: L } : {},
    swellOn: B,
    settle: L
  };
}, rn = "data-rail-item", Mr = `[${rn}], button, [role="button"]`, un = c.createContext(!1), Zo = () => {
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
  radius: s,
  pinSelector: r,
  pinKey: i = null
}) => {
  const a = c.useRef(null), u = jn(), [d, m] = c.useState(null), p = c.useRef(null), g = c.useRef(null), f = (E, R) => {
    g.current = R;
    const N = R.getBoundingClientRect(), A = E.getBoundingClientRect(), G = l ?? N.width, k = l ?? N.height, F = {
      top: Math.round(N.top - A.top + (N.height - k) / 2),
      left: Math.round(N.left - A.left + (N.width - G) / 2),
      width: Math.round(G),
      height: Math.round(k)
    };
    m(
      (L) => L && L.visible && L.top === F.top && L.left === F.left && L.width === F.width && L.height === F.height ? L : { ...F, visible: !0, instant: !(L != null && L.visible) }
    );
  }, h = (E, R) => {
    var A;
    const N = (A = R == null ? void 0 : R.closest) == null ? void 0 : A.call(R, n);
    return N && E.contains(N) ? N : null;
  }, _ = (E) => {
    if (!e)
      return;
    const R = h(E.currentTarget, E.target);
    R && f(E.currentTarget, R);
  }, b = (E) => {
    if (!e)
      return;
    const R = h(E.currentTarget, E.target);
    R && E.target.matches(":focus-visible") && f(E.currentTarget, R);
  }, S = () => {
    var N;
    const E = (N = a.current) == null ? void 0 : N.parentElement, R = r && (E == null ? void 0 : E.querySelector(r));
    return E && R ? { container: E, item: R } : null;
  }, x = () => {
    const E = S();
    if (E) {
      f(E.container, E.item);
      return;
    }
    g.current = null, m((R) => R != null && R.visible ? { ...R, visible: !1 } : R);
  };
  c.useEffect(() => {
    var R, N;
    if (!e)
      return;
    const E = S();
    E ? f(E.container, E.item) : (N = (R = a.current) == null ? void 0 : R.parentElement) != null && N.matches(":hover") || x();
  }, [e, i]);
  const T = (E) => {
    const R = E.relatedTarget;
    (!R || !E.currentTarget.contains(R)) && (E.currentTarget.matches(":hover") || x());
  };
  return c.useEffect(() => {
    const E = a.current;
    if (!(d != null && d.visible)) {
      p.current = null;
      return;
    }
    const R = p.current;
    if (p.current = d.top, !on(E) || It() || R === null || d.instant)
      return;
    const N = Math.min(Math.abs(d.top - R) / 600, 0.08);
    N && E.animate(
      // On `transform`, which composes with the swell's `scale` rather
      // than overriding it (that snapped the drop back to 1 mid-swell)
      [
        { transform: "scale(1, 1)" },
        {
          transform: `scale(${1 - N / 2}, ${1 + N})`,
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
        className: v(
          "lw:pointer-events-none lw:absolute lw:top-0 lw:left-0",
          gr
        ),
        style: {
          ...yr(t, u),
          borderRadius: `${s}px`,
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
      onFocus: b,
      onBlur: T,
      onScrollCapture: x
    } : {}
  };
}, da = (e, t, n = null) => {
  const l = Jo({
    enabled: e,
    isDark: t,
    selector: Mr,
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
}, ua = (e, t) => {
  let n = 0, l = 0, s = e;
  for (; s && s !== t; ) {
    n += s.offsetTop, l += s.offsetLeft;
    const a = s.offsetParent;
    for (let u = s.parentElement; u && u !== t && (n -= u.scrollTop, l -= u.scrollLeft, u !== a); u = u.parentElement)
      ;
    s = a;
  }
  if (s === t && e.offsetWidth)
    return {
      top: Math.round(n),
      left: Math.round(l),
      width: e.offsetWidth,
      height: e.offsetHeight
    };
  const r = e.getBoundingClientRect(), i = t.getBoundingClientRect();
  return {
    top: Math.round(r.top - i.top),
    left: Math.round(r.left - i.left),
    width: Math.round(r.width),
    height: Math.round(r.height)
  };
}, Ll = ({
  enabled: e,
  isDark: t,
  color: n,
  containerRef: l
}) => {
  const s = c.useRef(null), [r, i] = c.useState(null), a = c.useRef(null), u = c.useCallback(
    (m) => {
      const p = l.current;
      if (!e || !p)
        return;
      const g = p.querySelector(
        `[${rn}][data-active="true"]`
      );
      if (!g) {
        i(
          (h) => h != null && h.visible ? { ...h, visible: !1 } : h
        );
        return;
      }
      const f = ua(g, p);
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
    let p = 0;
    const g = () => {
      cancelAnimationFrame(p), p = requestAnimationFrame(() => u(!1));
    }, f = typeof ResizeObserver > "u" ? null : new ResizeObserver(() => u(!0));
    f == null || f.observe(m);
    const h = typeof MutationObserver > "u" ? null : new MutationObserver(g);
    return h == null || h.observe(m, {
      subtree: !0,
      childList: !0,
      attributes: !0,
      attributeFilter: ["data-active", "class", "hidden"]
    }), () => {
      cancelAnimationFrame(p), f == null || f.disconnect(), h == null || h.disconnect();
    };
  }, [e, l, u]), c.useEffect(() => {
    const m = s.current;
    if (!(r != null && r.visible)) {
      a.current = null;
      return;
    }
    const p = a.current;
    if (a.current = r.top, p === null || r.instant || !on(m) || It())
      return;
    const g = Math.min(Math.abs(r.top - p) / 600, 0.08);
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
      { duration: At.duration, easing: "ease-out" }
    );
  }, [r == null ? void 0 : r.top, r == null ? void 0 : r.visible, r == null ? void 0 : r.instant]), { glass: e && r ? /* @__PURE__ */ o(
    "div",
    {
      ref: s,
      "aria-hidden": !0,
      "data-active-glass": "",
      "data-testid": "sidebar-rail-active",
      "data-visible": r.visible ? "true" : "false",
      className: v(
        "lw:pointer-events-none lw:absolute lw:top-0 lw:left-0",
        gr
      ),
      style: {
        ...Er(n, t),
        borderRadius: `${et}px`,
        width: r.width,
        height: r.height,
        translate: `${r.left}px ${r.top}px`,
        // Swells with its item (useDockMagnify); fades in and out at
        // its item's size, never popping from smaller
        scale: "var(--dock-active-scale, 1)",
        opacity: r.visible ? 1 : 0,
        // Its scale on the item's own timing, swelling and settling
        // (useDockMagnify), so the two move as one
        transition: r.instant ? `opacity 160ms ease, scale var(--dock-scale-timing, ${ln}ms ease-out)` : `translate ${At.duration}ms ${At.easing}, width 220ms ease, height 220ms ease, opacity 160ms ease, scale var(--dock-scale-timing, ${ln}ms ease-out)`
      }
    }
  ) : null };
}, Ie = 52, wa = 2, fa = 10, ma = Ie / 2, go = "[data-flyout-tile]", Qo = 4, el = 32, Lo = el + Qo, pa = 104, Ut = 24, Dr = "background 160ms ease, color 160ms ease, transform 120ms ease", ha = 10, Pr = 10, Ml = Pr + 2, ga = 18, Dl = 1.08, ba = (e) => {
  for (let t = e.parentElement; t; t = t.parentElement) {
    const { overflowY: n } = getComputedStyle(t);
    if (n === "auto" || n === "scroll")
      return t;
  }
  return null;
}, xa = (e) => {
  const t = ba(e);
  if (!t)
    return Dl;
  const n = kr(e, t);
  return Math.min(Dl, n / Math.min(n, Sr));
}, va = 1190, ya = 1195, Pl = 120, Ea = 220, Fl = 200, Bl = 8, zl = ke(Or), Ke = ke(Vo), Hl = ke(Vn), Gl = 8192, Na = ({ left: e, top: t, width: n, height: l, radius: s }) => {
  const r = Math.min(s, n / 2, l / 2), i = e + n, a = t + l, u = `A ${r} ${r} 0 0 1`;
  return `path(evenodd, 'M 0 0 H ${Gl} V ${Gl} H 0 Z M ${e + r} ${t} H ${i - r} ${u} ${i} ${t + r} V ${a - r} ${u} ${i - r} ${a} H ${e + r} ${u} ${e} ${a - r} V ${t + r} ${u} ${e + r} ${t} Z')`;
}, Sa = ({
  group: e,
  groupKey: t,
  anchor: n,
  railEdge: l,
  railShape: s,
  activePath: r,
  focusFirst: i = !1,
  onNavigate: a,
  onClose: u,
  panelProps: d,
  accentColor: m,
  activeBackgroundColor: p,
  activeForegroundColor: g,
  solidSurface: f
}) => {
  const h = Ye(), _ = dn(), b = !!(e && n), S = c.useRef(null);
  e && t && (S.current = { group: e, key: t });
  const x = S.current, T = c.useRef(null);
  n && (T.current = { anchor: n, railEdge: l });
  const [I, E] = c.useState(b);
  b && !I && E(!0);
  const [R, N] = c.useState(b);
  b && !R && N(!0), c.useEffect(() => {
    if (b)
      return;
    const M = setTimeout(() => N(!1), Fl);
    return () => clearTimeout(M);
  }, [b]);
  const A = c.useRef(null), [G, k] = c.useState({
    x: 0,
    y: 0
  }), F = c.useCallback(() => {
    const M = T.current, z = A.current;
    if (!M || !z)
      return;
    const Y = M.anchor.getBoundingClientRect(), X = z.offsetHeight, ae = Math.round(M.railEdge + ha), ne = Y.top + Y.height / 2 - X / 2, Ee = window.innerHeight - X - Bl, we = Math.round(
      Math.max(Bl, Math.min(ne, Ee))
    );
    k((_e) => _e.x === ae && _e.y === we ? _e : { x: ae, y: we });
  }, []);
  c.useLayoutEffect(() => {
    if (!I)
      return;
    F(), window.addEventListener("resize", F), window.addEventListener("scroll", F, !0);
    const M = typeof ResizeObserver > "u" || !A.current ? null : new ResizeObserver(F);
    return M && A.current && M.observe(A.current), () => {
      window.removeEventListener("resize", F), window.removeEventListener("scroll", F, !0), M == null || M.disconnect();
    };
  }, [I, F, n, l, t]), c.useEffect(() => {
    if (!n)
      return;
    const M = xa(n);
    M > 1.001 && sa(n, M);
  }, [n]);
  const [L, W] = c.useState(!1);
  c.useEffect(() => {
    if (!b) {
      W(!1);
      return;
    }
    let M = 0;
    const z = requestAnimationFrame(() => {
      M = requestAnimationFrame(() => W(!0));
    });
    return () => {
      cancelAnimationFrame(z), cancelAnimationFrame(M);
    };
  }, [b]);
  const ee = c.useMemo(
    () => x ? Go(x.group.subitems, x.group.icon) : [],
    [x]
  ), B = c.useRef(null), C = Lr(B, {
    enabled: b,
    axis: "x",
    itemSelector: go,
    transition: Dr,
    // A bigger swell than the rail's: the tiles are the destination
    maxScale: wa,
    // The neighbours make room as it grows, and a little more
    carrierSelector: '[role="menuitem"]',
    spacing: fa,
    // Only the tile under the pointer swells; the rest keep their size
    hoveredOnly: !0
  }), $ = c.useRef(void 0), O = c.useCallback((M) => {
    var ae;
    (ae = $.current) == null || ae.call($), $.current = void 0;
    const z = M == null ? void 0 : M.parentElement;
    if (!M || !z || typeof MutationObserver > "u")
      return;
    const Y = () => {
      const ne = M.offsetLeft - M.offsetWidth / 2, Ee = ne + M.offsetWidth;
      let we = 0;
      const _e = (ce, Re, ge) => {
        ce < Ee && ce + Re > ne && (we = Math.max(we, -ge - Ml));
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
      M.style.translate !== Be && (M.style.translate = Be);
    }, X = new MutationObserver(Y);
    X.observe(z, {
      subtree: !0,
      attributes: !0,
      attributeFilter: ["style"]
    }), $.current = () => X.disconnect();
  }, []), q = c.useRef([]), [U, oe] = c.useState([]);
  c.useLayoutEffect(() => {
    const M = () => {
      const Y = ee.map(
        (X, ae) => {
          var ne;
          return ((ne = q.current[ae]) == null ? void 0 : ne.offsetWidth) ?? 0;
        }
      );
      oe(
        (X) => X.length === Y.length && X.every((ae, ne) => ae === Y[ne]) ? X : Y
      );
    };
    if (M(), typeof ResizeObserver > "u")
      return;
    const z = new ResizeObserver(M);
    return q.current.slice(0, ee.length).forEach((Y) => Y && z.observe(Y)), () => z.disconnect();
  }, [ee]);
  const me = Ra(U, ee.length), j = c.useRef([]), Z = ee.findIndex(
    ({ sub: M }) => Xe(M, r)
  ), [ue, J] = c.useState(0);
  c.useEffect(() => {
    J(Math.max(Z, 0));
  }, [t]), c.useEffect(() => {
    if (!b || !i)
      return;
    const M = setTimeout(() => {
      var z;
      return (z = j.current[0]) == null ? void 0 : z.focus();
    });
    return () => clearTimeout(M);
  }, [b, i, t]);
  const te = (M) => {
    var Y;
    const z = Math.max(0, Math.min(M, ee.length - 1));
    J(z), (Y = j.current[z]) == null || Y.focus();
  }, ie = (M, z) => {
    var Y;
    switch (M.key) {
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
    M.preventDefault();
  }, he = "var(--lw-text-primary)", ye = h ? "#ffffff" : m;
  return /* @__PURE__ */ y(ve, { children: [
    R ? /* @__PURE__ */ o(
      "div",
      {
        "data-testid": "sidebar-flyout-scrim",
        "data-flyout-scrim": "",
        "data-state": b ? "open" : "closed",
        "aria-hidden": !0,
        onClick: () => u(),
        className: v(
          "lw:fixed lw:inset-y-0 lw:right-0",
          b ? "lw:animate-in lw:fade-in-0" : "lw:animate-out lw:fade-out-0 lw:[animation-fill-mode:forwards]"
        ),
        style: {
          left: s ? 0 : `${l}px`,
          // Clicks in the cut-out reach the rail beneath
          ...s ? { clipPath: Na(s) } : {},
          zIndex: va,
          animationDuration: `${b ? Ea : Fl}ms`,
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
          ref: A,
          ..._,
          className: v(
            "lw:fixed lw:top-0 lw:left-0",
            $e
          ),
          style: {
            zIndex: ya,
            transform: `translate(${G.x}px, ${G.y}px)`,
            transition: L ? `transform ${Ke.duration}ms ${Ke.easing}` : "none"
          },
          children: /* @__PURE__ */ o(
            _a,
            {
              in: b,
              onExited: () => E(!1),
              panelProps: d,
              groupText: x == null ? void 0 : x.group.text,
              children: x ? /* @__PURE__ */ y(
                "div",
                {
                  ref: B,
                  role: "menu",
                  "aria-label": x.group.text,
                  ...C.containerProps,
                  onBlur: (M) => {
                    M.currentTarget.contains(
                      M.relatedTarget
                    ) || C.settle();
                  },
                  className: v(
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
                        className: v(
                          "lw:pointer-events-none lw:absolute lw:bottom-full lw:left-1/2 lw:-translate-x-1/2 lw:text-[1.125rem] lw:leading-normal lw:font-bold lw:tracking-[0.08em] lw:whitespace-nowrap lw:uppercase",
                          $e
                        ),
                        style: {
                          marginBottom: Ml,
                          transition: `translate var(--dock-scale-timing, ${Ke.duration}ms ${Ke.easing})`,
                          // The pages' own name colour
                          color: vr(h)
                        },
                        children: x.group.text
                      }
                    ),
                    ee.map(({ sub: M, icon: z }, Y) => /* @__PURE__ */ o(
                      Br,
                      {
                        ref: (X) => {
                          j.current[Y] = X;
                        },
                        nameRef: (X) => {
                          q.current[Y] = X;
                        },
                        tileLeft: me.tiles[Y],
                        nameLeft: me.names[Y],
                        sub: M,
                        icon: z,
                        index: Y,
                        active: Xe(
                          M,
                          r
                        ),
                        tabIndex: Y === ue ? 0 : -1,
                        onClick: (X) => {
                          Ot(X) && (X.preventDefault(), a(M.path), u());
                        },
                        onKeyDown: (X) => ie(X, Y),
                        onFocus: (X) => {
                          J(Y);
                          const ae = X.currentTarget.querySelector(
                            go
                          );
                          ae && X.currentTarget.matches(
                            ":focus-visible"
                          ) && C.swellOn(ae);
                        },
                        accentColor: m,
                        activeBackgroundColor: p,
                        activeForegroundColor: g,
                        labelColor: he,
                        iconColor: ye,
                        surface: f,
                        isDark: h
                      },
                      M.path
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
}, _a = ({
  in: e,
  onExited: t,
  panelProps: n,
  groupText: l,
  children: s
}) => {
  const r = c.useRef(null), i = (u) => {
    r.current = u;
    const { ref: d } = n;
    typeof d == "function" ? d(u) : d && (d.current = u);
  }, a = c.useRef(e);
  return a.current = e, c.useLayoutEffect(() => {
    const u = r.current;
    if (ra(u), e) {
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
    const m = () => {
      !d && !a.current && (d = !0, t == null || t());
    }, p = setTimeout(m, Pl + 100);
    return u.animate([{ opacity: 1 }, { opacity: 0 }], {
      duration: Pl,
      easing: "ease-in",
      fill: "forwards"
    }).finished.then(m, m), () => clearTimeout(p);
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
      children: s
    }
  );
}, Fr = (e) => e % 2 === 1, Ra = (e, t) => {
  const n = [], l = [];
  let s = -Ut, r = -Ut, i = -Ut;
  for (let a = 0; a < t; a += 1) {
    const u = e[a] || Ie, d = Fr(a), m = d ? r : i, p = Math.max(
      s + Ut + Ie / 2,
      m + Ut + u / 2
    );
    s = p + Ie / 2, d ? r = p + u / 2 : i = p + u / 2, n.push(Math.round(p - Ie / 2)), l.push(Math.round(p - u / 2));
  }
  return {
    tiles: n,
    names: l,
    width: Math.round(Math.max(s, r, i, 0))
  };
}, Br = c.forwardRef(
  ({
    nameRef: e,
    tileLeft: t,
    nameLeft: n,
    sub: l,
    icon: s,
    index: r,
    active: i,
    tabIndex: a,
    onClick: u,
    onKeyDown: d,
    onFocus: m,
    accentColor: p,
    activeBackgroundColor: g,
    activeForegroundColor: f,
    labelColor: h,
    iconColor: _,
    surface: b,
    isDark: S
  }, x) => {
    const T = Fr(r), I = Ko(S, b), E = vr(S), R = {
      animation: `${qs} ${zl.duration}ms ${zl.easing} both`,
      animationDelay: `${r * ga}ms`
    }, N = S ? E : p, A = {
      // Hovered or focused, the tile and its name take the rail's hover
      // colour — a tint of the accent, whatever the accent is — mixed
      // into the surface so it is solid rather than see-through
      "--lw-tile-hover": `color-mix(in srgb, ${p} ${S ? 20 : 12}%, ${b})`,
      "--lw-tile-outline": p,
      // The current page's icon takes the accent's foreground
      "--lw-tile-icon": i ? f : _
    };
    return /* @__PURE__ */ y(
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
        onFocus: m,
        className: "lw:group/tile lw:pointer-events-none lw:absolute lw:inset-0 lw:block lw:no-underline lw:outline-none",
        style: { ...A, color: h },
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
              "data-flyout-name-side": T ? "above" : "below",
              className: v(
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
                boxShadow: S ? "0 1px 2px rgba(0, 0, 0, 0.5), 0 8px 20px -6px rgba(0, 0, 0, 0.7)" : "0 1px 2px rgba(15, 23, 42, 0.08), 0 8px 20px -6px rgba(15, 23, 42, 0.28)",
                left: t,
                top: Lo,
                width: Ie,
                height: Ie,
                borderRadius: ma,
                // Grows about its centre, so the row stays level; its
                // name moves aside to clear it (see the name's slot)
                transformOrigin: "center",
                transition: `scale ${Ke.duration}ms ${Ke.easing}, ${Dr}`,
                // The current page: the accent, solid, its icon and text in
                // the accent's foreground — as the current page on the rail
                ...i ? {
                  background: g ?? p,
                  color: f
                } : {},
                ...R
              },
              children: s
            }
          ),
          /* @__PURE__ */ o(
            "span",
            {
              "data-flyout-slot": "",
              className: v(
                "lw:pointer-events-auto lw:absolute lw:flex",
                $e
              ),
              style: {
                left: n,
                top: T ? 0 : Lo + Ie + Qo,
                height: el,
                // Held against its own tile, not floating mid-band; a
                // name too long for the band bleeds away from the tile
                alignItems: T ? "flex-end" : "flex-start",
                // Pushed away from its tile by as much as the tile
                // grows towards it (`--dock-scale`, on the page)
                translate: `0 calc((var(--dock-scale, 1) - 1) * ${T ? -Ie / 2 : Ie / 2}px)`,
                transition: `translate var(--dock-scale-timing, ${Ke.duration}ms ${Ke.easing})`
              },
              children: /* @__PURE__ */ o(
                "span",
                {
                  ref: e,
                  "data-flyout-name": "",
                  "data-text": l.text,
                  className: v(
                    "lw:block lw:px-2 lw:py-0 lw:text-center lw:text-[0.75rem] lw:leading-4 lw:text-balance lw:transition-colors lw:duration-150",
                    "lw:after:invisible lw:after:block lw:after:h-0 lw:after:overflow-hidden lw:after:font-semibold lw:after:content-[attr(data-text)]",
                    i ? "lw:font-semibold" : "lw:font-medium",
                    "lw:group-has-[[data-dock-hovered]]/tile:font-semibold lw:[[role=menu]:not(:has([data-dock-hovered]))_[role=menuitem]:hover_&]:font-semibold lw:group-focus-visible/tile:font-semibold",
                    $e
                  ),
                  style: {
                    maxWidth: pa,
                    color: i ? N : E,
                    ...R
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
const Ta = Sa;
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
      className: v(
        "lw:shrink-0 lw:bg-border",
        e === "horizontal" ? "lw:h-px lw:w-full" : "lw:w-px lw:self-stretch",
        t
      ),
      ...n
    }
  );
}
const Aa = 50, zr = 250, Ca = (e) => {
  const [t, n] = c.useState(null), l = c.useRef(t);
  l.current = t;
  const s = c.useRef(/* @__PURE__ */ new Map()), r = c.useRef(null), i = c.useRef(void 0), a = c.useRef(void 0), u = () => {
    clearTimeout(i.current), i.current = void 0;
  }, d = () => {
    clearTimeout(a.current), a.current = void 0;
  }, m = (S, x, T = !1) => {
    u(), d(), n({ key: S, pinned: x, focusFirst: T });
  }, p = c.useCallback((S = !1) => {
    var T, I;
    u(), d();
    const x = (T = l.current) == null ? void 0 : T.key;
    n(null), S && x && ((I = s.current.get(x)) == null || I.focus());
  }, []), g = () => {
    u(), !(!l.current || l.current.pinned) && (d(), a.current = setTimeout(() => p(), zr));
  };
  c.useEffect(() => {
    e || p();
  }, [e, p]), c.useEffect(
    () => () => {
      u(), d();
    },
    []
  );
  const f = t !== null;
  return c.useEffect(() => {
    if (!f)
      return;
    const S = (I) => {
      var R;
      const E = I;
      return E ? (R = r.current) != null && R.contains(E) ? !0 : [...s.current.values()].some((N) => N.contains(E)) : !1;
    }, x = (I) => {
      S(I.target) || p();
    }, T = (I) => {
      var E;
      I.key === "Escape" && p(
        !!((E = r.current) != null && E.contains(document.activeElement))
      );
    };
    return document.addEventListener("pointerdown", x), document.addEventListener("keydown", T), () => {
      document.removeEventListener("pointerdown", x), document.removeEventListener("keydown", T);
    };
  }, [f, p]), {
    state: t,
    close: p,
    triggerProps: (S) => ({
      ref: (x) => {
        x ? s.current.set(S, x) : s.current.delete(S);
      },
      onMouseEnter: () => {
        if (!e)
          return;
        d();
        const x = l.current;
        if (x) {
          x.key !== S && m(S, x.pinned);
          return;
        }
        u(), i.current = setTimeout(
          () => m(S, !1),
          Aa
        );
      },
      onMouseLeave: g,
      onClick: (x) => {
        var T;
        if (x.detail === 0) {
          m(S, !0, !0);
          return;
        }
        ((T = l.current) == null ? void 0 : T.key) !== S && m(S, !1);
      },
      onKeyDown: (x) => {
        x.key === "ArrowRight" && (x.preventDefault(), m(S, !0, !0));
      }
    }),
    flyoutProps: {
      ref: r,
      onMouseEnter: d,
      onMouseLeave: g
    },
    onRailLeafEnter: () => {
      u(), l.current && !l.current.pinned && p();
    },
    getTrigger: (S) => s.current.get(S) ?? null
  };
}, Oa = Ca, Ia = 264, $a = 72, Wl = 64, ka = "lw:outline-none lw:focus:outline-none lw:focus-visible:outline-none", La = 16, Ma = 14, Da = 32, Pa = 20, Ul = "0.7rem", _n = ke(qo), bo = "var(--lw-hover-wash)", Fa = "#ffffff", Xt = (e, t) => ({
  className: v(
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
const xo = "lw:relative lw:flex lw:w-full lw:min-w-0 lw:grow lw:items-center lw:justify-start lw:text-left lw:no-underline lw:transition-colors lw:duration-150 lw:outline-none lw:focus-visible:bg-selected lw:disabled:opacity-40", Rn = "lw:inline-flex lw:shrink-0 lw:text-inherit lw:[&_svg]:size-6", Tn = "lw:my-1 lw:min-w-0 lw:flex-auto", vo = v(
  "lw:relative lw:inline-flex lw:shrink-0 lw:items-center lw:justify-center lw:p-2 lw:transition-[background-color,border-radius,color] lw:duration-150 lw:disabled:opacity-40 lw:[&_svg]:size-6",
  ka
), dt = ({ text: e, variant: t = "body1", center: n = !1, fontSize: l, fontWeight: s }) => {
  const r = c.useRef(null), [i, a] = c.useState(!1), u = c.useCallback(() => {
    const d = r.current;
    d && a(d.scrollWidth > d.clientWidth + 0.5);
  }, []);
  return c.useLayoutEffect(() => {
    u();
  }, [u, e]), c.useEffect(() => {
    const d = r.current;
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
          ref: r,
          className: v(
            "lw:block lw:overflow-hidden lw:text-ellipsis lw:whitespace-nowrap lw:text-inherit",
            t === "caption" ? "lw:text-xs lw:leading-[1.66]" : "lw:text-sm lw:leading-normal",
            n && "lw:w-full lw:text-center lw:leading-[1.1]"
          ),
          style: {
            ...l ? { fontSize: l } : {},
            ...s ? { fontWeight: s } : {}
          },
          children: e
        }
      )
    }
  );
}, Ba = `url("data:image/svg+xml,${encodeURIComponent(
  "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 5 8'><path d='M0.5 0.9L4.1 4L0.5 7.1Z' stroke='black' stroke-width='1' stroke-linejoin='round'/></svg>"
)}")`, za = 4, Ha = (e) => Math.max(0, Math.min(za, Pn - e)), Ga = ({
  open: e,
  size: t = La
}) => /* @__PURE__ */ o(
  e ? Cs : Os,
  {
    "aria-hidden": !0,
    className: "lw:shrink-0 lw:opacity-75",
    style: { width: t, height: t }
  }
), Xl = ({ open: e }) => /* @__PURE__ */ o(
  As,
  {
    "aria-hidden": !0,
    className: v(
      "lw:size-5! lw:shrink-0 lw:opacity-75 lw:transition-transform lw:duration-150",
      e && "lw:rotate-90"
    )
  }
), An = 600, ot = `${Yn}px`, Pn = (en - Ce) / 2, Wa = (e) => {
  const t = Math.max(0, e - Pn);
  return {
    paddingLeft: `${Math.max(0, Pn - t)}px`,
    paddingRight: `${Math.max(0, Pn - e)}px`
  };
};
function Ua(e, t) {
  const [n, l] = c.useState(0);
  return c.useLayoutEffect(() => {
    const s = e.current;
    if (!t || !s) {
      l(0);
      return;
    }
    const r = () => {
      const a = getComputedStyle(s), u = parseFloat(a.borderLeftWidth) + parseFloat(a.borderRightWidth);
      l(Math.max(0, s.offsetWidth - s.clientWidth - u));
    };
    if (r(), typeof ResizeObserver > "u")
      return;
    const i = new ResizeObserver(r);
    return i.observe(s), s.firstElementChild && i.observe(s.firstElementChild), () => i.disconnect();
  }, [e, t]), n;
}
function Xa(e) {
  const [t, n] = c.useState(!1);
  return c.useLayoutEffect(() => {
    const l = e.current, s = l == null ? void 0 : l.firstElementChild;
    if (!l || !s)
      return;
    const r = () => {
      const a = getComputedStyle(l), u = s.offsetHeight + parseFloat(a.paddingTop) + parseFloat(a.paddingBottom);
      n(u > l.clientHeight + 0.5);
    };
    if (r(), typeof ResizeObserver > "u")
      return;
    const i = new ResizeObserver(r);
    return i.observe(l), i.observe(s), () => i.disconnect();
  }, [e]), t;
}
const Cn = 8;
function Ka(e, t, n) {
  c.useEffect(() => {
    const l = e.current;
    if (!l)
      return;
    const s = (u) => {
      const d = Array.from(
        l.querySelectorAll('[data-active="true"]')
      ).filter((f) => f.offsetHeight > 0).pop();
      if (!d)
        return;
      const m = l.getBoundingClientRect(), p = d.getBoundingClientRect();
      let g = 0;
      p.top < m.top + Cn ? g = p.top - m.top - Cn : p.bottom > m.bottom - Cn && (g = p.bottom - m.bottom + Cn), g !== 0 && l.scrollBy({ top: g, behavior: u });
    }, r = requestAnimationFrame(() => s("smooth")), i = window.setTimeout(() => s("smooth"), 350), a = typeof ResizeObserver > "u" ? null : new ResizeObserver(() => s("auto"));
    return a == null || a.observe(l), () => {
      cancelAnimationFrame(r), window.clearTimeout(i), a == null || a.disconnect();
    };
  }, [e, t, n]);
}
const ja = ({
  mainLinks: e,
  secondaryLinks: t = [],
  activePath: n,
  onLinkClick: l,
  onLinkAction: s,
  logo: r,
  title: i,
  onBrandClick: a,
  brandMenuOpen: u,
  showHeaderBar: d = !1,
  headerBackgroundColor: m,
  headerForegroundColor: p,
  brandColor: g,
  activeAccentColor: f = "#01584f",
  activeBackgroundColor: h,
  groupArrowColor: _,
  groupAccentColor: b,
  activeForegroundColor: S,
  foregroundColor: x,
  surfaceBackgroundColor: T,
  flyoutSurfaceColor: I,
  collapsed: E = !1,
  expandedWidth: R = Ia,
  collapsedWidth: N = $a,
  showLabels: A = !1,
  topInsetPx: G = 0,
  topContent: k,
  footer: F,
  submenuMode: L = "inline"
}) => {
  var Dt;
  const W = Ye(), ee = c.useContext(Kn), B = L === "flyout" && E && !A, C = Oa(B), $ = c.useRef(null), O = c.useRef(null), q = c.useRef(null), U = c.useRef(null);
  Ka(U, n, E);
  const oe = Ua(U, B), me = Xa(U), j = da(B, W, ((Dt = C.state) == null ? void 0 : Dt.key) ?? null), Z = Lr($, {
    enabled: B,
    axis: "y",
    itemSelector: Mr,
    maxScale: Sr,
    // One button's pitch: the one under the pointer swells, its
    // neighbours only as the pointer crosses over to them
    reach: Ce + Yn,
    // Only 4px of padding at the scroller's ends: the first and last
    // buttons swell less, or the last would scroll the rail
    boundsRef: U,
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
  }, J = h ?? f, te = Ll({
    enabled: B,
    isDark: W,
    color: J,
    containerRef: O
  }), ie = Ll({
    enabled: B,
    isDark: W,
    color: J,
    containerRef: q
  }), he = c.useMemo(
    () => e.filter((w) => w.aboveSearch),
    [e]
  ), ye = c.useMemo(
    () => e.filter((w) => !w.aboveSearch),
    [e]
  ), { close: M } = C;
  c.useEffect(() => {
    M();
  }, [n, M]);
  const [z, Y] = c.useState(
    {}
  ), X = S ?? $o(J), ae = { bg: J, fg: X }, ne = b ?? tn(f), Ee = qn(T, W), we = x ?? (W ? "var(--lw-text-primary)" : f), _e = m ?? Ee, Be = p ?? (m ? $o(_e) : x ?? (W ? Fa : f)), ce = tn(Be), Re = (w) => {
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
      fg: w ? X : we,
      bg: w ? J : void 0
    },
    w || A ? ae : { bg: P }
  ), tt = (w) => {
    const P = Xe(w, n), Q = Te(P, ne), H = /* @__PURE__ */ y(
      _t,
      {
        disabled: !w.path,
        ...ge(w.path),
        "data-testid": `sidebar-item-${w.text}`,
        "data-active": P ? "true" : "false",
        "data-selected": P ? "true" : void 0,
        className: v(
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
          /* @__PURE__ */ y(
            "span",
            {
              className: v(Tn, w.subtitle && "lw:my-0"),
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
    const { action: K } = w, V = P ? X : we;
    return /* @__PURE__ */ y("div", { className: "lw:relative", children: [
      H,
      /* @__PURE__ */ o(Mn, { title: K.label, side: "right", arrow: !0, children: /* @__PURE__ */ o(
        "button",
        {
          type: "button",
          "aria-label": K.label,
          "data-testid": `sidebar-action-${w.text}`,
          onClick: () => {
            K.onClick(), s == null || s();
          },
          className: v(
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
          children: K.icon
        }
      ) })
    ] }, w.text);
  }, mn = (w) => {
    const P = rt(w, n), Q = Xe(w, n), H = St("", w), K = Ne(w, H), V = Te(Q, ne);
    return /* @__PURE__ */ y(
      "div",
      {
        "data-testid": `sidebar-group-${w.text}`,
        className: "lw:rounded-lg",
        style: {
          backgroundColor: P ? ne : "transparent"
        },
        children: [
          /* @__PURE__ */ y(
            _t,
            {
              onClick: () => pe(H, K),
              "data-testid": `sidebar-item-${w.text}`,
              "data-active": Q ? "true" : "false",
              "aria-expanded": K,
              className: v(
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
                /* @__PURE__ */ o(Xl, { open: K })
              ]
            }
          ),
          K ? /* @__PURE__ */ o(
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
    const H = St(P, w), K = Da + (Q - 1) * Pa, V = v(
      xo,
      "lw:mx-1 lw:w-[calc(100%-8px)] lw:rounded-lg lw:py-1.5 lw:pr-4"
    );
    if (Tt(w)) {
      const be = rt(w, n), Oe = Xe(w, n), xe = Ne(w, H), ht = Te(Oe, bo);
      return /* @__PURE__ */ y("div", { "data-testid": `sidebar-group-${w.text}`, children: [
        /* @__PURE__ */ y(
          _t,
          {
            onClick: () => pe(H, xe),
            "data-testid": `sidebar-subitem-${w.text}`,
            "data-active": be ? "true" : "false",
            "aria-expanded": xe,
            className: v(V, ht.className),
            style: { ...ht.style, paddingLeft: K },
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
    const fe = Xe(w, n), De = Te(fe, bo);
    return /* @__PURE__ */ y(
      _t,
      {
        disabled: !w.path,
        ...ge(w.path),
        "data-testid": `sidebar-subitem-${w.text}`,
        "data-active": fe ? "true" : "false",
        "data-selected": fe ? "true" : void 0,
        className: v(V, De.className),
        style: { ...De.style, paddingLeft: K },
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
  }, wt = v(
    "lw:rounded-md! lw:[&_svg]:size-6 lw:hover:bg-transparent! lw:active:[transform:scale(0.88)] lw:active:duration-[90ms] lw:motion-reduce:active:[transform:none]",
    $e
  ), pn = (w) => ({
    ...w ? { backgroundColor: "transparent" } : {},
    transition: `transform ${_n.duration}ms ${_n.easing}, background-color 160ms ease`
  }), hn = Ko(W, ee), kt = (w, P, Q, H, K, V) => {
    const fe = !K, De = A ? Xt(
      {
        fg: H ? X : we,
        bg: H ? J : void 0
      },
      ae
    ) : (
      // Icon-only collapsed rail (collapsible variant): original
      // hover — accent when active, else a subtle tint; no
      // foreground change. The glass rail has no hover of its own.
      Xt(
        {
          fg: H ? X : we,
          bg: H ? J : void 0
        },
        B ? void 0 : {
          bg: H ? J : V != null && V.insideGroup ? bo : ne,
          radius: "8px"
        }
      )
    ), be = B ? Ce : 44, Oe = /* @__PURE__ */ y(
      _t,
      {
        "aria-label": P,
        disabled: fe,
        ...ge(K),
        onMouseEnter: B ? C.onRailLeafEnter : void 0,
        ...B ? { [rn]: "" } : {},
        "data-testid": (V == null ? void 0 : V.testId) ?? `sidebar-item-${P}`,
        "data-active": H ? "true" : "false",
        className: v(
          vo,
          De.className,
          A ? (
            // 8px padding on all sides of the item container.
            "lw:flex lw:h-auto lw:w-full lw:max-w-full lw:flex-col lw:gap-0.5 lw:rounded-lg lw:p-2 lw:[&_svg]:size-[22px]"
          ) : H ? "lw:rounded-lg" : "lw:rounded-full",
          !A && B && wt
        ),
        style: {
          ...De.style,
          ...A ? {} : { width: be, height: be },
          ...!A && B ? pn(H) : {}
        },
        children: [
          Q,
          A ? /* @__PURE__ */ o(
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
    return A ? fe ? /* @__PURE__ */ o("span", { children: Oe }, w) : /* @__PURE__ */ o(c.Fragment, { children: Oe }, w) : /* @__PURE__ */ o(
      Mn,
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
    var K;
    const P = rt(w, n), Q = St("", w), H = ((K = C.state) == null ? void 0 : K.key) === Q;
    return /* @__PURE__ */ o(
      "div",
      {
        "data-testid": `sidebar-group-${w.text}`,
        className: "lw:flex lw:w-full lw:justify-center",
        children: /* @__PURE__ */ o(
          "button",
          {
            type: "button",
            ...C.triggerProps(Q),
            "aria-label": w.text,
            "aria-haspopup": "menu",
            "aria-expanded": H,
            "data-testid": `sidebar-item-${w.text}`,
            "data-active": P ? "true" : "false",
            "data-open": H ? "true" : "false",
            [rn]: "",
            className: v(
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
              color: P ? X : we,
              // Open, the rail's hover lens stays on it (useRailLens)
              // rather than a fill of its own under the lens
              backgroundColor: P ? J : "transparent",
              ...pn(P),
              "--lw-arrow-right": `${-Ha(oe)}px`,
              "--lw-arrow-bg": _ ?? "currentColor",
              "--lw-arrow-opacity": _ ? 1 : 0.55,
              "--lw-arrow-mask": `${Ba} center / contain no-repeat`
            },
            children: w.icon
          }
        )
      },
      w.text
    );
  }, at = (w) => {
    const P = rt(w, n), Q = Xe(w, n), H = St("", w), K = Ne(w, H), V = Xt(
      {
        fg: Q ? X : we,
        bg: Q ? J : void 0
      },
      A ? ae : { bg: Q ? J : "transparent" }
    ), fe = /* @__PURE__ */ y(
      "button",
      {
        type: "button",
        "aria-label": w.text,
        "aria-expanded": K,
        onClick: () => pe(H, K),
        "data-testid": `sidebar-item-${w.text}`,
        "data-active": Q ? "true" : "false",
        className: v(
          vo,
          V.className,
          "lw:flex lw:max-w-full lw:flex-col lw:rounded-[10px]",
          // 8px padding on all sides of the labeled item container.
          A ? "lw:w-full lw:gap-0.5 lw:p-2" : "lw:w-11 lw:px-2 lw:py-1.5"
        ),
        style: V.style,
        children: [
          A ? /* @__PURE__ */ o("span", { className: "lw:flex lw:items-center lw:justify-center lw:[&_svg]:size-[22px]", children: w.icon }) : w.icon,
          A ? /* @__PURE__ */ o(
            dt,
            {
              text: w.text,
              variant: "caption",
              center: !0,
              fontSize: Ul
            }
          ) : null,
          /* @__PURE__ */ o(Ga, { open: K, size: Ma })
        ]
      }
    ), De = A ? fe : /* @__PURE__ */ o(Mn, { title: w.text, side: "right", arrow: !0, children: fe }), be = Xt(
      { bg: P ? ne : void 0 },
      A ? void 0 : { bg: ne }
    );
    return /* @__PURE__ */ y(
      "div",
      {
        "data-testid": `sidebar-group-${w.text}`,
        className: v(
          "lw:flex lw:w-full lw:flex-col lw:items-center lw:gap-1 lw:rounded-[10px] lw:py-1",
          be.className
        ),
        style: be.style,
        children: [
          De,
          K ? Go(w.subitems, w.icon).map(
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
  ) }, w.text), Mt = (w) => Tt(w) ? B ? eo(w) : E ? at(w) : mn(w) : E ? Lt(w) : tt(w), qe = (w) => /* @__PURE__ */ o(
    "div",
    {
      className: v(
        "lw:flex lw:w-full lw:flex-col lw:gap-1",
        E ? "lw:items-center" : "lw:items-stretch"
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
        ), K = P.dividerAfter && Q < w.length - 1;
        return P.dividerBefore || K ? /* @__PURE__ */ y(c.Fragment, { children: [
          P.dividerBefore ? H("before") : null,
          Mt(P),
          K ? H("after") : null
        ] }, P.text) : Mt(P);
      })
    }
  ), ft = E ? N : R, gn = () => {
    var fe, De;
    const { state: w } = C, P = w ? [...e, ...t].find(
      (be) => Tt(be) && St("", be) === w.key
    ) ?? null : null, Q = P ? ((fe = $.current) == null ? void 0 : fe.getBoundingClientRect().right) ?? N : N, H = P ? ((De = $.current) == null ? void 0 : De.closest("[data-rail-surface]")) ?? $.current : null, K = H == null ? void 0 : H.getBoundingClientRect(), V = H && K ? {
      left: K.left,
      top: K.top,
      width: K.width,
      height: K.height,
      radius: parseFloat(
        getComputedStyle(H).borderTopRightRadius
      ) || 0
    } : null;
    return /* @__PURE__ */ o(
      Ta,
      {
        group: P,
        groupKey: P ? w.key : null,
        anchor: P ? C.getTrigger(w.key) : null,
        railEdge: Q,
        railShape: V,
        activePath: n,
        focusFirst: w == null ? void 0 : w.focusFirst,
        onNavigate: Re,
        onClose: C.close,
        panelProps: C.flyoutProps,
        accentColor: f,
        activeBackgroundColor: h,
        activeForegroundColor: X,
        solidSurface: I ?? Ee
      }
    );
  }, to = d ? /* @__PURE__ */ o(
    "div",
    {
      "data-testid": "sidebar-header",
      className: v(
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
      children: r || i ? /* @__PURE__ */ o(
        Hn,
        {
          logo: r,
          title: E ? void 0 : i,
          appName: i || "App",
          onClick: a,
          menuOpen: u,
          color: g ?? Be,
          testId: "sidebar-header-brand"
        }
      ) : null
    }
  ) : null, bn = !d && r ? /* @__PURE__ */ o(
    "div",
    {
      className: "lw:flex lw:shrink-0 lw:justify-center lw:pt-4",
      style: { paddingBottom: B ? ot : "8px" },
      children: /* @__PURE__ */ o(
        Hn,
        {
          logo: r,
          appName: i || "App",
          onClick: a,
          menuOpen: u,
          color: g ?? Be,
          testId: "sidebar-header-brand"
        }
      )
    }
  ) : null, mt = A ? 4 : B ? 6 : E ? 8 : 12, pt = v(
    B ? "lw:not-supports-[selector(::-webkit-scrollbar)]:[scrollbar-width:thin] lw:not-supports-[selector(::-webkit-scrollbar)]:[scrollbar-color:transparent_transparent] lw:not-supports-[selector(::-webkit-scrollbar)]:hover:[scrollbar-color:var(--lw-border-color)_transparent] lw:not-supports-[selector(::-webkit-scrollbar)]:has-[:focus-visible]:[scrollbar-color:var(--lw-border-color)_transparent] lw:[&::-webkit-scrollbar]:w-1.5" : "lw:[scrollbar-width:thin] lw:[scrollbar-color:transparent_transparent] lw:hover:[scrollbar-color:var(--lw-border-color)_transparent] lw:has-[:focus-visible]:[scrollbar-color:var(--lw-border-color)_transparent] lw:[&::-webkit-scrollbar]:w-2",
    "lw:[&::-webkit-scrollbar-thumb]:rounded-[4px] lw:[&::-webkit-scrollbar-thumb]:bg-transparent lw:[&:hover::-webkit-scrollbar-thumb]:bg-border lw:[&:has(:focus-visible)::-webkit-scrollbar-thumb]:bg-border"
  );
  return /* @__PURE__ */ o(un.Provider, { value: B, children: /* @__PURE__ */ y(
    "nav",
    {
      ref: $,
      ...ue,
      "aria-label": "Main sidebar",
      "data-testid": "collapsible-sidebar",
      "data-collapsed": E ? "true" : "false",
      "data-labeled": A ? "true" : "false",
      className: v(
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
        he.length > 0 ? /* @__PURE__ */ y(
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
            ref: U,
            "data-testid": "sidebar-links-scroller",
            className: v(
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
              ...B ? Wa(oe) : { paddingInline: mt },
              paddingTop: G && !d ? `${G}px` : B ? ot : "8px",
              paddingBottom: B ? ot : "16px"
            },
            children: /* @__PURE__ */ y(
              "div",
              {
                ref: O,
                className: "lw:relative lw:flex lw:flex-[1_0_auto] lw:flex-col",
                children: [
                  te.glass,
                  qe(ye),
                  t.length > 0 ? /* @__PURE__ */ y(
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
            className: v(
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
}, Mo = ja, Fn = "var(--lumora-content-padding, 0px)", yo = `calc(${Fn} * -1)`, Ya = {
  "background.paper": "var(--lw-bg-surface)",
  "background.default": "var(--lw-bg-page)"
}, qa = (e) => e && typeof e == "object" && !Array.isArray(e) ? Object.fromEntries(
  Object.entries(e).filter(
    ([t, n]) => !t.includes("&") && !t.startsWith("@") && (typeof n == "string" || typeof n == "number")
  )
) : {}, Va = ({
  children: e,
  flushTop: t = !0,
  sticky: n = !1,
  background: l = "var(--lw-bg-surface)",
  divider: s = !0,
  inset: r = !0,
  className: i,
  style: a,
  sx: u
}) => /* @__PURE__ */ o(
  "div",
  {
    "data-testid": "full-bleed-section",
    className: v(
      s && "lw:border-b lw:border-solid lw:border-border",
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
      paddingLeft: r ? Fn : 0,
      paddingRight: r ? Fn : 0,
      backgroundColor: Ya[l] ?? l,
      ...n && {
        position: "sticky",
        // Under the mobile top bar on phones, the viewport top on desktop
        top: "var(--lumora-sticky-top, 0px)"
      },
      ...qa(u),
      ...a
    },
    children: e
  }
), ld = Va, Za = ({ keys: e }) => /* @__PURE__ */ o(
  "kbd",
  {
    "aria-hidden": "true",
    className: "lw:inline-flex lw:h-5 lw:shrink-0 lw:items-center lw:gap-1 lw:rounded-sm lw:border lw:border-solid lw:border-border lw:bg-surface lw:px-1.5 lw:font-[inherit] lw:text-[11px] lw:leading-none lw:text-muted-foreground",
    children: e.map((t) => /* @__PURE__ */ o("span", { children: t }, t))
  }
), Ja = Za;
function Gn({
  className: e,
  style: t,
  variant: n = "rounded",
  animate: l = !0,
  ...s
}) {
  return /* @__PURE__ */ o(
    "span",
    {
      "data-slot": "skeleton",
      "aria-hidden": !0,
      className: v(
        "lw:block lw:bg-skeleton",
        n === "circular" && "lw:rounded-full",
        n === "rounded" && "lw:rounded-md",
        n === "text" && "lw:h-[1em] lw:rounded-sm",
        l && "lw:animate-[lw-skeleton-pulse_2s_ease-in-out_0.5s_infinite]",
        e
      ),
      style: t,
      ...s
    }
  );
}
const Qa = "(max-width: 899.95px)", ei = (e) => (t) => {
  var l;
  if (typeof window > "u" || !window.matchMedia)
    return () => {
    };
  const n = window.matchMedia(e);
  return (l = n.addEventListener) == null || l.call(n, "change", t), () => {
    var s;
    return (s = n.removeEventListener) == null ? void 0 : s.call(n, "change", t);
  };
};
function ti(e) {
  const t = c.useMemo(() => ei(e), [e]);
  return c.useSyncExternalStore(
    t,
    () => typeof window < "u" && window.matchMedia ? window.matchMedia(e).matches : !1,
    () => !1
  );
}
const Hr = () => ti(Qa), ni = 6, oi = 8, Kl = (e, t) => typeof e == "object" ? e[t] : e, Eo = ({ width: e, height: t = 20, className: n }) => /* @__PURE__ */ o(
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
  showSidebar: s = !0,
  contentPadding: r = Rr,
  sidebarBackgroundColor: i,
  contentBackgroundColor: a,
  content: u
}) => {
  const d = Hr(), m = e === "dark", p = Ar({
    showSidebar: s,
    isMobile: d,
    sidebarVariant: t,
    sidebarSubmenu: n,
    sidebarAutoHide: l
  }), g = nn(n, t) ? {
    gutterPx: lt,
    radiusPx: _r
  } : void 0, f = Dn, h = qn(
    Kl(i, e),
    m
  ), _ = Cr(
    Kl(a, e),
    m
  ), b = Tr(r), S = g ? /* @__PURE__ */ y("div", { className: "lw:flex lw:flex-col lw:items-center lw:pt-3", children: [
    /* @__PURE__ */ o(xt, { size: 36 }),
    /* @__PURE__ */ o(
      "div",
      {
        className: "lw:mt-4 lw:flex lw:flex-col lw:items-center",
        style: { gap: Yn },
        children: Array.from({ length: oi }, (x, T) => /* @__PURE__ */ o(
          "div",
          {
            className: "lw:flex lw:items-center lw:justify-center",
            style: {
              width: Ce,
              height: Ce
            },
            children: /* @__PURE__ */ o(xt, { size: ko })
          },
          T
        ))
      }
    )
  ] }) : /* @__PURE__ */ y("div", { className: "lw:flex lw:flex-col lw:items-center lw:gap-4 lw:pt-4", children: [
    /* @__PURE__ */ o(xt, { size: 32 }),
    /* @__PURE__ */ o("div", { className: "lw:h-2" }),
    Array.from({ length: ni }, (x, T) => /* @__PURE__ */ o(xt, { size: 28 }, T))
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
      style: { backgroundColor: _ },
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
              /* @__PURE__ */ o(xt, { size: 24 }),
              /* @__PURE__ */ o(Eo, { width: 96 }),
              /* @__PURE__ */ o("div", { className: "lw:grow" }),
              /* @__PURE__ */ o(xt, { size: 32, variant: "circular" })
            ]
          }
        ),
        !d && p > 0 && /* @__PURE__ */ o(
          "div",
          {
            className: "lw:relative lw:shrink-0",
            style: { width: p },
            children: /* @__PURE__ */ o(
              "div",
              {
                className: "lw:fixed",
                style: g ? {
                  top: g.gutterPx,
                  bottom: g.gutterPx,
                  left: g.gutterPx,
                  width: p - 2 * g.gutterPx,
                  borderRadius: g.radiusPx,
                  backgroundColor: h
                } : {
                  top: 0,
                  bottom: 0,
                  left: 0,
                  width: p,
                  backgroundColor: h
                },
                children: S
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
              ...b,
              "--lumora-sticky-top": d ? `${f}px` : "0px",
              padding: "var(--lumora-content-padding)",
              marginTop: d ? f : 0
            },
            children: u ?? /* @__PURE__ */ y(ve, { children: [
              /* @__PURE__ */ o(Eo, { width: 220, height: 40 }),
              /* @__PURE__ */ o(Eo, { width: 320, className: "lw:mb-6" }),
              /* @__PURE__ */ o("div", { className: "lw:mb-6 lw:flex lw:flex-row lw:gap-4", children: Array.from(
                { length: d ? 2 : 4 },
                (x, T) => /* @__PURE__ */ o(
                  Gn,
                  {
                    className: "lw:h-24 lw:flex-1"
                  },
                  T
                )
              ) }),
              /* @__PURE__ */ o(Gn, { className: "lw:h-[360px]" })
            ] })
          }
        )
      ]
    }
  );
}, jl = { background: "hsl(220, 35%, 3%)", color: "#ffffff" }, li = ({
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
  return /* @__PURE__ */ y(ve, { children: [
    /* @__PURE__ */ o("style", { dangerouslySetInnerHTML: { __html: l } }),
    /* @__PURE__ */ o("div", { "data-lw-skeleton-mode": "light", children: /* @__PURE__ */ o(No, { themeMode: "light", ...n }) }),
    /* @__PURE__ */ o("div", { "data-lw-skeleton-mode": "dark", children: /* @__PURE__ */ o(No, { themeMode: "dark", ...n }) })
  ] });
}, ri = li;
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
}, si = () => {
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
    si();
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
}, ai = () => {
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
}, ii = () => {
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
}, rd = (e) => {
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
}, Do = (e, t = "Unknown") => {
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
}, ci = (e) => {
  if (!e)
    throw new Error("API base URL is required to create axios client");
  const t = Cl.create({
    baseURL: e,
    headers: {
      "Content-Type": "application/json"
    }
  });
  let n = !1, l = null, s = [];
  const r = (i, a) => {
    s.forEach(({ resolve: u, reject: d }) => {
      i ? d(i) : a && u(a);
    }), s = [];
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
      const a = i.config, u = (g = i.response) == null ? void 0 : g.status, d = (a == null ? void 0 : a.url) || "", m = d.includes("/auth/refresh");
      if (u !== 401 || a._retry || m)
        return Promise.reject(i);
      a._retry = !0;
      const { refreshToken: p } = an();
      if (!p) {
        const f = new Error(
          "No refresh token available for token refresh"
        );
        return Do(f, "AxiosClient - Token Refresh"), cn(), typeof window < "u" && (window.location.href = "/login"), Promise.reject(i);
      }
      if (n && l)
        return new Promise((f, h) => {
          s.push({ resolve: f, reject: h });
        }).then((f) => {
          const {
            accessToken: h,
            refreshToken: _
          } = f;
          if (a.headers && (a.headers.Authorization = `Bearer ${h}`), d.includes("/auth/logout"))
            try {
              if (typeof a.data == "string") {
                const b = JSON.parse(
                  a.data || "{}"
                );
                b.refresh_token = _, a.data = JSON.stringify(b);
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
        }).catch((f) => Promise.reject(f));
      n = !0, l = Cl.post(
        `${e}/auth/refresh`,
        {
          refresh_token: p
        }
      );
      try {
        const f = await l, { accessToken: h, refreshToken: _ } = f.data;
        if (Wr(h, _, null), r(null, {
          accessToken: h,
          refreshToken: _
        }), a.headers && (a.headers.Authorization = `Bearer ${h}`), d.includes("/auth/logout"))
          try {
            if (typeof a.data == "string") {
              const b = JSON.parse(
                a.data || "{}"
              );
              b.refresh_token = _, a.data = JSON.stringify(b);
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
      } catch (f) {
        return Do(
          f,
          "AxiosClient - Token Refresh Failed"
        ), r(f), cn(), typeof window < "u" && (window.location.href = "/login"), Promise.reject(f);
      } finally {
        n = !1, l = null;
      }
    }
  ), t;
}, di = async (e, t) => {
  const { accessToken: n, refreshToken: l } = an();
  if (n)
    return !0;
  if (l)
    try {
      const s = await e.post("/auth/refresh", {
        refresh_token: l
      });
      if (s.data.success && s.data.accessToken)
        return Wr(
          s.data.accessToken,
          s.data.refreshToken || null,
          null
        ), !0;
    } catch (s) {
      Do(s, "TokenValidator - Refresh Failed");
    }
  return cn(), t ? t() : window.location.href = "/login", !1;
}, ui = ({ size: e = 20 }) => /* @__PURE__ */ y(
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
), Jt = ui, Yl = ke(qo), Ur = "#09C1AE", wi = "0px 2px 4px -1px rgba(0,0,0,0.2),0px 4px 5px 0px rgba(0,0,0,0.14),0px 1px 10px 0px rgba(0,0,0,0.12)", fi = "0px 3px 5px -1px rgba(0,0,0,0.2),0px 6px 10px 0px rgba(0,0,0,0.14),0px 1px 18px 0px rgba(0,0,0,0.12)", On = "lw:relative lw:overflow-hidden lw:[&>*]:relative lw:[&>*]:z-[2]", In = ({
  radiusPx: e,
  cover: t
}) => /* @__PURE__ */ y(ve, { children: [
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
] }), mi = ({
  variant: e,
  onClick: t,
  active: n = !1,
  busy: l = !1,
  shortcutKeys: s,
  accentColor: r = "#01584f",
  rightOffsetPx: i = 0
}) => {
  const a = Zo(), u = c.useContext(un), d = Ye(), m = s ? `Ask Nexa (${s.join("")})` : "Ask Nexa", p = {
    type: "button",
    onClick: t,
    "aria-label": "Ask Nexa",
    "aria-pressed": n,
    "data-testid": "assistant-button"
  }, g = v(
    "lw:border lw:border-solid lw:bg-[rgba(9,193,174,0.08)] lw:hover:bg-[rgba(9,193,174,0.14)]",
    n ? "lw:border-[#09C1AE]" : "lw:border-[rgba(9,193,174,0.45)]"
  );
  if (e === "sidebar")
    return /* @__PURE__ */ y(
      "button",
      {
        ...p,
        "data-variant": "sidebar",
        className: v(
          "lw:flex lw:h-11 lw:w-full lw:cursor-pointer lw:items-center lw:justify-start lw:gap-2.5 lw:rounded-lg lw:px-3 lw:outline-none lw:transition-[border-color,background-color] lw:duration-150 lw:focus-visible:outline-2 lw:focus-visible:outline-solid lw:focus-visible:outline-[#09C1AE] lw:focus-visible:outline-offset-2",
          g,
          l && On
        ),
        style: { color: r },
        children: [
          l && /* @__PURE__ */ o(In, { radiusPx: 8, cover: "var(--lw-bg-surface)" }),
          /* @__PURE__ */ o(Jt, { size: 20 }),
          /* @__PURE__ */ o("span", { className: "lw:grow lw:text-left lw:text-sm lw:font-semibold lw:text-inherit", children: "Ask Nexa" }),
          s && /* @__PURE__ */ o(Ja, { keys: s })
        ]
      }
    );
  if (e === "sidebar-icon" && u && Io) {
    const f = Er(Ur, d, "clear");
    return /* @__PURE__ */ o(je, { title: m, side: "right", arrow: !0, ...a, children: /* @__PURE__ */ y(
      "button",
      {
        ...p,
        "data-variant": "sidebar-icon",
        "data-rail-keep-fill": !0,
        className: v(
          "lw:inline-flex lw:cursor-pointer lw:items-center lw:justify-center lw:outline-none lw:hover:[transform:scale(1.07)] lw:active:[transform:scale(0.92)] lw:active:[transition-duration:90ms]! lw:motion-reduce:hover:[transform:none] lw:motion-reduce:active:[transform:none] lw:[&_svg]:[filter:drop-shadow(0_1px_1.5px_rgba(0,0,0,0.25))]",
          $e,
          l && On
        ),
        style: {
          width: Ce,
          height: Ce,
          borderRadius: et,
          background: f.background,
          boxShadow: n ? `${f.boxShadow}, 0 0 0 3px rgba(13, 212, 191, 0.3), 0 0 18px rgba(13, 212, 191, 0.45)` : f.boxShadow,
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
              cover: `${f.background}, ${d ? "#16202c" : "#f2fbfa"}`
            }
          ),
          /* @__PURE__ */ o(Jt, { size: 18 })
        ]
      }
    ) });
  }
  if (e === "sidebar-icon") {
    const f = u ? Ce : 44;
    return /* @__PURE__ */ o(je, { title: m, side: "right", arrow: !0, ...a, children: /* @__PURE__ */ y(
      "button",
      {
        ...p,
        "data-variant": "sidebar-icon",
        "data-rail-keep-fill": u || void 0,
        className: v(
          "lw:inline-flex lw:shrink-0 lw:cursor-pointer lw:items-center lw:justify-center lw:rounded-lg lw:outline-none lw:transition-colors lw:focus-visible:ring-2 lw:focus-visible:ring-ring",
          g,
          l && On
        ),
        style: { width: f, height: f },
        children: [
          l && /* @__PURE__ */ o(In, { radiusPx: 8, cover: "var(--lw-bg-surface)" }),
          /* @__PURE__ */ o(Jt, { size: u ? 18 : 20 })
        ]
      }
    ) });
  }
  return /* @__PURE__ */ o(je, { title: m, side: "left", children: /* @__PURE__ */ y(
    "button",
    {
      ...p,
      "data-variant": "floating",
      className: v(
        "lw:fixed lw:bottom-6 lw:z-[1150] lw:inline-flex lw:size-[52px] lw:cursor-pointer lw:items-center lw:justify-center lw:rounded-2xl lw:bg-surface lw:p-0 lw:outline-offset-2 lw:transition-[right,box-shadow] lw:duration-[225ms] lw:ease-in-out lw:[box-shadow:var(--lw-shadow-rest)] lw:hover:[box-shadow:var(--lw-shadow-hover)] lw:focus-visible:outline-2 lw:focus-visible:outline-solid lw:focus-visible:outline-[#09C1AE]",
        n ? "lw:outline-2 lw:outline-solid lw:outline-[#09C1AE]" : "lw:outline-none",
        l && On
      ),
      style: {
        right: 24 + i,
        "--lw-shadow-rest": wi,
        "--lw-shadow-hover": fi
      },
      children: [
        l && /* @__PURE__ */ o(In, { radiusPx: 16, cover: "var(--lw-bg-surface)" }),
        /* @__PURE__ */ o("span", { className: "lw:flex lw:items-center", children: /* @__PURE__ */ o(Jt, { size: 26 }) })
      ]
    }
  ) });
}, ql = mi, pi = Gs(
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
    type: s = "button",
    ...r
  }, i) => {
    const a = l ? Hs.Root : "button";
    return /* @__PURE__ */ o(
      a,
      {
        ref: i,
        "data-slot": "button",
        type: l ? void 0 : s,
        className: v(pi({ variant: t, size: n }), e),
        ...r
      }
    );
  }
);
Zn.displayName = "Button";
const hi = ({
  title: e = "",
  message: t = "",
  buttonText: n = "",
  onButtonClick: l,
  show: s = !0
}) => s ? /* @__PURE__ */ y("div", { className: "lw:m-3 lw:shrink-0 lw:rounded-lg lw:border lw:border-solid lw:border-border lw:bg-card lw:p-4 lw:text-card-foreground", children: [
  /* @__PURE__ */ o(Is, { className: "lw:size-5", "aria-hidden": !0 }),
  /* @__PURE__ */ o("p", { className: "lw:mb-[0.35em] lw:text-sm lw:font-semibold", children: e }),
  /* @__PURE__ */ o("p", { className: "lw:mb-4 lw:text-sm lw:text-muted-foreground", children: t }),
  /* @__PURE__ */ o(Zn, { size: "sm", className: "lw:w-full", onClick: l, children: n })
] }) : null, $n = hi, Ro = 225, Kt = 195, To = "cubic-bezier(0, 0, 0.2, 1)", Ao = "cubic-bezier(0.4, 0, 0.6, 1)", jt = 24, gi = 720, bi = 1140, xi = 1250, vi = ({
  open: e,
  children: t,
  variant: n,
  position: l,
  width: s,
  sidebarWidthPx: r,
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
  const [p, g] = c.useState(e), [f, h] = c.useState(e);
  c.useEffect(() => {
    if (!e) {
      h(!1);
      return;
    }
    g(!0);
    const E = requestAnimationFrame(() => h(!0));
    return () => cancelAnimationFrame(E);
  }, [e]), c.useEffect(() => {
    if (!e || !d)
      return;
    const E = (R) => {
      R.key === "Escape" && d();
    };
    return window.addEventListener("keydown", E), () => window.removeEventListener("keydown", E);
  }, [e, d]);
  const _ = n === "docked", b = jt + i;
  let S;
  if (a ? S = {
    top: 0,
    left: 0,
    right: 0,
    bottom: u,
    borderRadius: 0
  } : _ ? S = {
    top: 0,
    right: 0,
    bottom: 0,
    width: s,
    maxWidth: "100vw",
    borderRadius: 0,
    borderWidth: "0 0 0 1px"
  } : S = {
    bottom: b,
    ...l === "left" ? { left: r + jt } : { right: jt },
    width: s,
    maxWidth: `calc(100vw - ${jt * 2}px)`,
    height: `min(${gi}px, calc(100vh - ${b + jt}px))`,
    borderRadius: "12px"
  }, !e && !p)
    return null;
  const x = e && f, T = !m.current, I = _ ? {
    transform: x ? "none" : "translateX(100%)",
    transition: e ? `transform ${T ? 0 : Ro}ms ${To}` : `transform ${Kt}ms ${Ao}, visibility 0ms linear ${Kt}ms`
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
        zIndex: _ ? bi : xi,
        visibility: e ? "visible" : "hidden",
        ...S,
        ...I
      },
      children: t
    }
  );
}, yi = vi, wn = zn.Root, fn = zn.Anchor, Ei = "lw:rounded-md lw:border lw:border-solid lw:border-border lw:bg-popover lw:text-popover-foreground lw:shadow-popover lw:outline-none", $t = c.forwardRef(
  ({
    className: e,
    align: t = "start",
    sideOffset: n = 4,
    unstyled: l = !1,
    ...s
  }, r) => {
    const i = dn();
    return /* @__PURE__ */ o(zn.Portal, { children: /* @__PURE__ */ o(
      zn.Content,
      {
        ref: r,
        ...i,
        "data-slot": "popover-content",
        align: t,
        sideOffset: n,
        className: v(
          "lw:z-[1400] lw:outline-none",
          !l && v(
            Ei,
            "lw:p-3 lw:data-[state=open]:animate-in lw:data-[state=open]:fade-in-0 lw:data-[state=open]:zoom-in-95 lw:data-[state=closed]:animate-out lw:data-[state=closed]:fade-out-0 lw:data-[state=closed]:zoom-out-95"
          ),
          e
        ),
        ...s
      }
    ) });
  }
);
$t.displayName = "PopoverContent";
const Ni = 180, Vl = 250, Si = "#01584F", Xr = "var(--lw-text-muted)", _i = ({
  text: e,
  testId: t
}) => {
  const n = c.useRef(null), [l, s] = c.useState(!1), r = c.useCallback(() => {
    const i = n.current;
    i && s(i.scrollWidth > i.clientWidth + 0.5);
  }, []);
  return c.useLayoutEffect(() => {
    r();
  }, [r, e]), c.useEffect(() => {
    const i = n.current;
    if (!i)
      return;
    const a = new ResizeObserver(() => r());
    return a.observe(i), () => a.disconnect();
  }, [r]), /* @__PURE__ */ o(
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
}, Ri = "lw:inline-flex lw:shrink-0 lw:items-center lw:justify-center lw:transition-[background-color,border-radius] lw:duration-150 lw:outline-none lw:focus-visible:ring-2 lw:focus-visible:ring-ring lw:disabled:cursor-default lw:disabled:opacity-50 lw:[&_svg]:size-6", Kr = (e, t, n, l) => {
  const s = e ? 48 : 44, r = e ? Xr : t, i = e ? Si : t, a = v(
    Ri,
    l ? "lw:h-auto lw:w-full lw:max-w-full lw:flex-col lw:rounded-sm lw:px-2 lw:py-1" : n ? "lw:rounded-sm" : "lw:rounded-full lw:hover:rounded-sm",
    !n && "lw:hover:bg-accent"
  ), u = {
    color: n ? "#ffffff" : r,
    backgroundColor: n ? i : void 0,
    ...l ? { minWidth: s, minHeight: s } : { width: s, height: s }
  };
  return { activeBg: i, className: a, style: u };
}, jr = ({ link: e }) => /* @__PURE__ */ y("span", { className: "lw:flex lw:w-full lw:flex-col lw:items-center lw:gap-2", children: [
  /* @__PURE__ */ o("span", { className: "lw:flex lw:items-center lw:justify-center lw:text-inherit", children: e.icon }),
  /* @__PURE__ */ o(
    _i,
    {
      text: e.text,
      testId: `rail-item-caption-${e.text}`
    }
  )
] }), Yr = (e, t, n) => n ? e : /* @__PURE__ */ o(Mn, { title: t, side: "right", arrow: !0, children: e }), Ti = (e) => {
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
  const l = n.indexOf(document.activeElement), s = e.key === "Home" ? 0 : e.key === "End" ? n.length - 1 : e.key === "ArrowDown" ? (l + 1) % n.length : (l - 1 + n.length) % n.length;
  n[s].focus();
}, Ai = ({
  link: e,
  activePath: t,
  onLinkClick: n,
  accentColor: l,
  isSecondary: s,
  surfaceBackgroundColor: r,
  railShowTitles: i
}) => {
  const [a, u] = c.useState(!1), d = c.useRef(
    null
  ), m = c.useRef(null), p = c.useRef(null), g = c.useRef(!1), f = c.useRef(!1), h = c.useId(), _ = () => {
    d.current && (clearTimeout(d.current), d.current = null);
  }, b = () => {
    _(), d.current = setTimeout(() => {
      u(!1), d.current = null;
    }, Ni);
  }, S = () => {
    _(), u(!0);
  };
  c.useEffect(() => {
    if (!a)
      return;
    const k = (F) => {
      var L;
      F.key === "Escape" && (u(!1), (L = p.current) == null || L.focus());
    };
    return document.addEventListener("keydown", k), () => document.removeEventListener("keydown", k);
  }, [a]), c.useEffect(() => {
    if (!a || !f.current)
      return;
    const k = globalThis.requestAnimationFrame(() => {
      var L;
      const F = (L = m.current) == null ? void 0 : L.querySelector(
        '[role="menuitem"]'
      );
      F == null || F.focus(), f.current = !1;
    });
    return () => cancelAnimationFrame(k);
  }, [a]);
  const x = rt(e, t), {
    activeBg: T,
    className: I,
    style: E
  } = Kr(s, l, x, i), R = {
    "aria-label": e.text,
    onFocus: () => {
      g.current || S();
    },
    onBlur: (k) => {
      var L;
      const F = k.relatedTarget;
      F && ((L = m.current) != null && L.contains(F)) || b();
    },
    onKeyDown: (k) => {
      k.key === "ArrowDown" && (k.preventDefault(), f.current = !0, S());
    },
    onClick: (k) => {
      k.stopPropagation(), !(e.path && !Ot(k)) && (k.preventDefault(), e.path && (n == null || n(e.path)));
    },
    "aria-haspopup": "menu",
    "aria-expanded": a,
    "aria-controls": a ? h : void 0,
    "data-testid": `rail-submenu-trigger-${e.text}`,
    className: I,
    style: E
  }, N = i ? /* @__PURE__ */ o(jr, { link: e }) : e.icon, A = e.path ? /* @__PURE__ */ o(
    "a",
    {
      ref: p,
      href: e.path,
      ...R,
      children: N
    }
  ) : /* @__PURE__ */ o(
    "button",
    {
      ref: p,
      type: "button",
      ...R,
      children: N
    }
  );
  return /* @__PURE__ */ y(wn, { open: a, children: [
    /* @__PURE__ */ o("div", { className: "lw:flex lw:w-full lw:justify-center", children: /* @__PURE__ */ o(fn, { asChild: !0, children: /* @__PURE__ */ o(
      "div",
      {
        "data-testid": `rail-submenu-anchor-${e.text}`,
        className: "lw:inline-flex lw:max-w-full",
        onMouseEnter: () => {
          g.current = !0, S();
        },
        onMouseLeave: () => {
          g.current = !1, b();
        },
        children: Yr(A, e.text, i)
      }
    ) }) }),
    /* @__PURE__ */ o(
      $t,
      {
        ref: m,
        unstyled: !0,
        side: "right",
        align: "start",
        sideOffset: 8,
        onOpenAutoFocus: (k) => k.preventDefault(),
        onCloseAutoFocus: (k) => k.preventDefault(),
        onInteractOutside: (k) => {
          var F;
          if ((F = p.current) != null && F.contains(k.target)) {
            k.preventDefault();
            return;
          }
          u(!1);
        },
        onEscapeKeyDown: () => u(!1),
        onMouseEnter: _,
        onMouseLeave: b,
        "data-testid": `rail-submenu-panel-${e.text}`,
        className: "lw:z-[1300] lw:min-w-0 lw:rounded-sm lw:border lw:border-solid lw:border-border lw:bg-popover lw:py-1 lw:text-popover-foreground lw:shadow-popover",
        style: {
          backgroundColor: r,
          maxWidth: Vl
        },
        children: /* @__PURE__ */ o(
          "div",
          {
            id: h,
            role: "menu",
            onKeyDown: Ti,
            style: { maxWidth: Vl },
            children: G(e.subitems, e.text, 0)
          }
        )
      }
    )
  ] });
  function G(k, F, L) {
    return k.flatMap((W) => {
      const ee = St(F, W), B = 16 + L * 12;
      if (Tt(W))
        return [
          /* @__PURE__ */ o(
            "div",
            {
              role: "presentation",
              title: W.text,
              className: "lw:overflow-hidden lw:pr-4 lw:text-[0.7rem] lw:leading-[28px] lw:font-medium lw:tracking-[0.06em] lw:text-ellipsis lw:whitespace-nowrap lw:uppercase lw:text-muted-foreground",
              style: { paddingLeft: B },
              children: W.text
            },
            ee
          ),
          ...G(W.subitems, ee, L + 1)
        ];
      const C = Xe(W, t), $ = W.path ? "a" : "div";
      return [
        /* @__PURE__ */ y(
          $,
          {
            role: "menuitem",
            tabIndex: -1,
            title: W.text,
            "aria-disabled": W.path ? void 0 : !0,
            "data-selected": C ? "true" : void 0,
            ...W.path ? { href: W.path } : {},
            onClick: (O) => {
              W.path && Ot(O) && (O.preventDefault(), n == null || n(W.path), u(!1));
            },
            className: v(
              "lw:mx-1 lw:my-[1px] lw:flex lw:min-h-8 lw:max-w-full lw:cursor-pointer lw:items-center lw:overflow-hidden lw:rounded-sm lw:pr-4 lw:text-sm lw:outline-none lw:select-none lw:[&_svg]:size-5",
              !C && "lw:hover:bg-accent lw:focus-visible:bg-selected",
              !W.path && "lw:pointer-events-none lw:opacity-40"
            ),
            style: {
              paddingLeft: B,
              color: C ? "#ffffff" : s ? Xr : l,
              backgroundColor: C ? T : void 0
            },
            children: [
              W.icon ? /* @__PURE__ */ o("span", { className: "lw:inline-flex lw:min-w-9 lw:shrink-0 lw:text-inherit", children: W.icon }) : null,
              /* @__PURE__ */ o("span", { className: "lw:min-w-0 lw:flex-auto lw:overflow-hidden lw:text-ellipsis lw:whitespace-nowrap", children: W.text })
            ]
          },
          ee
        )
      ];
    });
  }
}, Ci = ({
  link: e,
  activePath: t,
  onLinkClick: n,
  accentColor: l,
  isSecondary: s,
  railShowTitles: r
}) => {
  const i = !!(e.path && t === e.path), { className: a, style: u } = Kr(
    s,
    l,
    i,
    r
  ), d = (p) => {
    p.stopPropagation(), !(e.path && !Ot(p)) && (p.preventDefault(), e.path && (n == null || n(e.path)));
  }, m = r ? /* @__PURE__ */ o(jr, { link: e }) : e.icon;
  return Yr(
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
    r
  );
}, Oi = () => /* @__PURE__ */ o("div", { className: "lw:flex lw:w-full lw:justify-center", children: /* @__PURE__ */ o(sn, { className: "lw:w-[60%]" }) }), Ii = () => /* @__PURE__ */ o("div", { className: "lw:my-4 lw:flex lw:w-full lw:justify-center", children: /* @__PURE__ */ o(sn, { className: "lw:w-[60%]" }) }), Zl = (e, t) => e.map((n, l) => /* @__PURE__ */ y(c.Fragment, { children: [
  t(n, l),
  l < e.length - 1 ? /* @__PURE__ */ o(Oi, {}) : null
] }, l)), $i = ({
  mainLinks: e,
  secondaryLinks: t = [],
  activePath: n,
  onLinkClick: l,
  accentColor: s = "#01584f",
  surfaceBackgroundColor: r,
  railShowTitles: i = !1
}) => {
  const a = (d, m) => Tt(d) ? /* @__PURE__ */ o(
    Ai,
    {
      link: d,
      activePath: n,
      onLinkClick: l,
      accentColor: s,
      isSecondary: m,
      surfaceBackgroundColor: r,
      railShowTitles: i
    }
  ) : /* @__PURE__ */ o(
    Ci,
    {
      link: d,
      activePath: n,
      onLinkClick: l,
      accentColor: s,
      isSecondary: m,
      railShowTitles: i
    }
  ), u = i ? "lw:gap-2.5" : "lw:gap-2";
  return /* @__PURE__ */ y(
    "div",
    {
      className: v(
        "lw:box-border lw:flex lw:w-full lw:grow lw:flex-col lw:items-center lw:justify-start lw:pt-4",
        u
      ),
      children: [
        Zl(e, (d) => a(d, !1)),
        t.length > 0 ? /* @__PURE__ */ y(ve, { children: [
          /* @__PURE__ */ o(Ii, {}),
          /* @__PURE__ */ o("div", { className: "lw:mt-auto lw:pb-4", children: /* @__PURE__ */ o(
            "div",
            {
              className: v(
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
}, ki = $i, Li = Ct.Root, Mi = Ct.Trigger, Di = "lw:relative lw:flex lw:min-h-8 lw:cursor-pointer lw:items-center lw:gap-2 lw:rounded-sm lw:px-2 lw:py-1 lw:text-sm lw:outline-none lw:select-none lw:focus:bg-accent lw:data-[highlighted]:bg-accent lw:data-[disabled]:pointer-events-none lw:data-[disabled]:opacity-50 lw:data-[variant=destructive]:text-destructive lw:[&_svg]:pointer-events-none lw:[&_svg]:shrink-0 lw:[&_svg:not([class*='size-'])]:size-4", Pi = "lw:z-[1400] lw:max-h-(--radix-dropdown-menu-content-available-height) lw:min-w-40 lw:overflow-x-hidden lw:overflow-y-auto lw:rounded-md lw:border lw:border-solid lw:border-border lw:bg-popover lw:p-1 lw:text-popover-foreground lw:shadow-popover lw:data-[state=open]:animate-in lw:data-[state=open]:fade-in-0 lw:data-[state=open]:zoom-in-95 lw:data-[state=closed]:animate-out lw:data-[state=closed]:fade-out-0 lw:data-[state=closed]:zoom-out-95", qr = c.forwardRef(
  ({
    className: e,
    sideOffset: t = 4,
    align: n = "start",
    unstyled: l = !1,
    ...s
  }, r) => {
    const i = dn();
    return /* @__PURE__ */ o(Ct.Portal, { children: /* @__PURE__ */ o(
      Ct.Content,
      {
        ref: r,
        ...i,
        "data-slot": "dropdown-menu-content",
        sideOffset: t,
        align: n,
        className: v(
          l ? "lw:z-[1400] lw:outline-none" : Pi,
          e
        ),
        ...s
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
    className: v(Di, e),
    ...n
  }
));
Qt.displayName = "DropdownMenuItem";
const Bn = c.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ o(
  Ct.Separator,
  {
    ref: n,
    "data-slot": "dropdown-menu-separator",
    className: v("lw:-mx-1 lw:my-1 lw:h-px lw:bg-border", e),
    ...t
  }
));
Bn.displayName = "DropdownMenuSeparator";
const Fi = (e) => e ? hr(e) : "USER", Bi = (e) => e.split(/\s+/).filter(Boolean).slice(0, 2).map((t) => t.charAt(0).toUpperCase()).join(""), Jl = "lw:max-w-full lw:overflow-hidden lw:text-ellipsis lw:whitespace-nowrap", Po = ({ count: e }) => e ? /* @__PURE__ */ o("span", { className: "lw:h-5 lw:min-w-[22px] lw:rounded-[10px] lw:bg-destructive-fill lw:px-1.5 lw:text-center lw:text-xs lw:leading-5 lw:font-semibold lw:text-white", children: e > 99 ? "99+" : e }) : null, tl = ({ name: e, avatar: t, color: n, size: l = 36 }) => {
  const [s, r] = c.useState(!1);
  c.useEffect(() => r(!1), [t]);
  const i = !!t && !s;
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
          onError: () => r(!0),
          className: "lw:size-full lw:object-cover"
        }
      ) : Bi(e)
    }
  );
}, Vr = ({ name: e, role: t, avatar: n, avatarColor: l, showText: s }) => /* @__PURE__ */ y(ve, { children: [
  /* @__PURE__ */ o(tl, { name: e, avatar: n, color: l }),
  s && /* @__PURE__ */ y("span", { className: "lw:flex lw:min-w-0 lw:grow lw:flex-col lw:items-start lw:text-left", children: [
    /* @__PURE__ */ o(
      "span",
      {
        className: v(
          Jl,
          "lw:text-sm lw:leading-[1.43] lw:font-semibold"
        ),
        children: e
      }
    ),
    /* @__PURE__ */ o(
      "span",
      {
        className: v(
          Jl,
          "lw:text-xs lw:leading-[1.66] lw:opacity-80"
        ),
        children: Fi(t)
      }
    )
  ] })
] }), zi = {
  above: { side: "top", align: "start", sideOffset: 8 },
  "above-end": { side: "top", align: "end", sideOffset: 8 },
  beside: { side: "right", align: "end", sideOffset: 12 }
}, kn = "lw:mx-1 lw:min-h-9 lw:gap-0 lw:rounded-md lw:px-4 lw:text-sm lw:[&_svg:not([class*='size-'])]:size-5", Ln = "lw:inline-flex lw:min-w-9 lw:shrink-0 lw:items-center lw:text-muted-foreground", Hi = ({
  anchorEl: e,
  onClose: t,
  placement: n,
  width: l,
  contentProps: s,
  openedByHover: r = !1,
  avatarColor: i,
  showNotifications: a,
  notificationCount: u,
  onNotificationsClick: d,
  userName: m = "User",
  userRole: p,
  userAvatar: g,
  menuItems: f = [],
  showSettings: h,
  onSettingsClick: _,
  showThemeToggler: b,
  theme: S,
  onThemeToggle: x,
  onLogout: T
}) => {
  const I = (k) => () => {
    t(), k == null || k();
  }, E = !!e, R = E ? e.getBoundingClientRect() : null, N = c.useRef(null);
  c.useEffect(() => {
    E && typeof document < "u" && (N.current = document.activeElement);
  }, [E]);
  const A = zi[n], G = (k, F) => {
    const L = S === k;
    return /* @__PURE__ */ o(
      "button",
      {
        type: "button",
        "aria-pressed": L,
        disabled: !x,
        onClick: () => !L && (x == null ? void 0 : x()),
        className: v(
          "lw:h-8 lw:flex-1 lw:cursor-pointer lw:rounded-md lw:text-sm lw:font-medium lw:outline-none lw:transition-colors lw:focus-visible:ring-2 lw:focus-visible:ring-ring lw:disabled:cursor-default lw:disabled:opacity-50",
          L ? "lw:bg-surface lw:text-foreground lw:shadow-[0_1px_3px_rgba(0,0,0,0.12),0_1px_1px_rgba(0,0,0,0.08)]" : "lw:text-muted-foreground lw:hover:text-foreground"
        ),
        children: F
      }
    );
  };
  return /* @__PURE__ */ y(ve, { children: [
    E && !r && typeof document < "u" ? fr(
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
      Li,
      {
        open: E,
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
                left: (R == null ? void 0 : R.left) ?? 0,
                top: (R == null ? void 0 : R.top) ?? 0,
                width: (R == null ? void 0 : R.width) ?? 0,
                height: (R == null ? void 0 : R.height) ?? 0
              }
            }
          ) }),
          /* @__PURE__ */ y(
            qr,
            {
              ...s,
              side: A.side,
              align: A.align,
              sideOffset: A.sideOffset,
              collisionPadding: 8,
              onOpenAutoFocus: (k) => {
                r && k.preventDefault();
              },
              onCloseAutoFocus: (k) => {
                var F, L;
                k.preventDefault(), r || (L = (F = N.current) == null ? void 0 : F.focus) == null || L.call(F);
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
                    name: m,
                    role: p,
                    avatar: g,
                    avatarColor: i,
                    showText: !0
                  }
                ) }),
                /* @__PURE__ */ o(Bn, { className: "lw:mx-0" }),
                a && /* @__PURE__ */ y(
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
                f.map((k) => /* @__PURE__ */ y(
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
                h && /* @__PURE__ */ y(
                  Qt,
                  {
                    className: kn,
                    onSelect: I(_),
                    children: [
                      /* @__PURE__ */ o("span", { className: Ln, children: /* @__PURE__ */ o($s, {}) }),
                      /* @__PURE__ */ o("span", { className: "lw:flex-auto", children: "Settings" })
                    ]
                  }
                ),
                b && /* @__PURE__ */ y(ve, { children: [
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
                          G("light", "Light"),
                          G("dark", "Dark")
                        ]
                      }
                    )
                  ] })
                ] }),
                /* @__PURE__ */ o(Bn, { className: "lw:mx-0" }),
                /* @__PURE__ */ y(
                  Qt,
                  {
                    className: v(
                      kn,
                      // The dark palette's error colors are too dim on the dark menu
                      S === "dark" ? "lw:text-[hsl(0,90%,65%)]" : "lw:text-destructive"
                    ),
                    onSelect: I(T),
                    children: [
                      /* @__PURE__ */ o("span", { className: v(Ln, "lw:text-inherit"), children: /* @__PURE__ */ o(ur, { className: "lw:size-5 lw:text-current" }) }),
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
}, Zr = Hi, Jr = 64, Gi = 2, Yt = ({
  label: e,
  icon: t,
  onClick: n,
  active: l,
  color: s,
  activeColor: r,
  activeBackground: i,
  ariaLabel: a,
  haspopup: u,
  isPage: d = !1,
  href: m,
  testId: p
}) => {
  const g = v(
    "lw:flex lw:h-full lw:min-w-0 lw:flex-[1_1_0] lw:cursor-pointer lw:flex-col lw:items-center lw:justify-center lw:gap-0.5 lw:border-0 lw:bg-transparent lw:p-0 lw:no-underline lw:outline-none lw:select-none",
    "lw:focus-visible:outline-2 lw:focus-visible:outline-offset-[-4px] lw:focus-visible:outline-(--lw-item-active) lw:focus-visible:outline-solid"
  ), f = {
    color: l ? r : s,
    "--lw-item-active": r
  }, h = /* @__PURE__ */ y(ve, { children: [
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
        className: v(
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
    "data-testid": p,
    className: g,
    style: f
  };
  return m ? /* @__PURE__ */ o("a", { href: m, ..._, children: h }) : /* @__PURE__ */ o("button", { type: "button", ..._, children: h });
}, Wi = ({
  onMenuClick: e,
  menuOpen: t,
  onSearchClick: n,
  searchOpen: l,
  showAssistant: s,
  assistantLabel: r = "Nexa",
  onAssistantClick: i,
  assistantActive: a,
  showProfile: u,
  background: d,
  color: m,
  activeColor: p,
  activeBackground: g,
  pinnedLinks: f = [],
  activePath: h,
  onLinkClick: _,
  ...b
}) => {
  const S = f.filter((A) => A.path).slice(0, Gi), [x, T] = c.useState(
    null
  ), { userName: I = "User", userAvatar: E, avatarColor: R } = b, N = { color: m, activeColor: p, activeBackground: g };
  return /* @__PURE__ */ y(
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
            ...N
          }
        ),
        S.map((A) => /* @__PURE__ */ o(
          Yt,
          {
            label: A.text,
            icon: A.icon,
            href: A.path,
            onClick: (G) => {
              Ot(G) && (G.preventDefault(), _ == null || _(A.path));
            },
            active: rt(A, h),
            isPage: !0,
            testId: `mobile-nav-link-${A.text}`,
            ...N
          },
          A.path
        )),
        s && /* @__PURE__ */ o(
          Yt,
          {
            label: r,
            ariaLabel: `Ask ${r}`,
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
            ...N
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
            ...N
          }
        ),
        u && /* @__PURE__ */ y(ve, { children: [
          /* @__PURE__ */ o(
            Yt,
            {
              label: "Account",
              ariaLabel: `Account menu for ${I}`,
              icon: /* @__PURE__ */ o(
                tl,
                {
                  name: I,
                  avatar: E,
                  color: R,
                  size: 26
                }
              ),
              onClick: (A) => T(A.currentTarget),
              active: !!x,
              haspopup: "menu",
              testId: "mobile-nav-account",
              ...N
            }
          ),
          /* @__PURE__ */ o(
            Zr,
            {
              anchorEl: x,
              onClose: () => T(null),
              placement: "above-end",
              width: 280,
              ...b
            }
          )
        ] })
      ]
    }
  );
}, Ui = Wi, Fo = Vt.Root, Xi = {
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
    overlayClassName: s,
    srTitle: r,
    ...i
  }, a) => {
    const u = dn();
    return /* @__PURE__ */ y(Vt.Portal, { children: [
      l ? /* @__PURE__ */ o(
        Vt.Overlay,
        {
          ...u,
          "data-slot": "sheet-overlay",
          "data-invisible": l === "invisible" ? "true" : void 0,
          className: v(
            "lw:fixed lw:inset-0 lw:z-[1200] lw:data-[state=open]:animate-in lw:data-[state=open]:fade-in-0 lw:data-[state=closed]:animate-out lw:data-[state=closed]:fade-out-0",
            l === "invisible" ? "lw:bg-transparent" : "lw:bg-black/35",
            s
          )
        }
      ) : null,
      /* @__PURE__ */ y(
        Vt.Content,
        {
          ref: a,
          ...u,
          "data-slot": "sheet-content",
          "data-side": n,
          "aria-describedby": void 0,
          className: v(
            "lw:fixed lw:z-[1200] lw:flex lw:flex-col lw:border-solid lw:border-border lw:bg-popover lw:text-popover-foreground lw:shadow-popover lw:outline-none lw:transition lw:ease-in-out lw:data-[state=open]:animate-in lw:data-[state=open]:duration-200 lw:data-[state=closed]:animate-out lw:data-[state=closed]:duration-150",
            Xi[n],
            e
          ),
          ...i,
          children: [
            r ? /* @__PURE__ */ o(Vt.Title, { className: "lw:sr-only", children: r }) : null,
            t
          ]
        }
      )
    ] });
  }
);
Wn.displayName = "SheetContent";
const Ki = ({
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
      var r;
      const s = (r = l.currentTarget) == null ? void 0 : r.querySelector(
        'input, textarea, [contenteditable="true"]'
      );
      s && (l.preventDefault(), s.focus());
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
) }), ji = Ki, Yi = ({
  height: e,
  onMenuClick: t,
  appName: n,
  logo: l,
  onBrandClick: s,
  brandMenuOpen: r,
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
              children: /* @__PURE__ */ o(wr, {})
            }
          ),
          /* @__PURE__ */ o(
            Hn,
            {
              title: n,
              appName: n,
              logo: l,
              onClick: s,
              menuOpen: r,
              color: u,
              testId: "mobile-brand"
            }
          ),
          d ? /* @__PURE__ */ o("div", { className: "lw:ml-auto lw:flex lw:items-center", children: d }) : null
        ]
      }
    )
  }
), qi = Yi;
function Qr({
  count: e = 0,
  max: t = 99,
  dot: n = !1,
  showZero: l = !1,
  invisible: s,
  children: r,
  className: i,
  badgeClassName: a,
  badgeStyle: u,
  label: d
}) {
  const m = s ?? (!l && e <= 0);
  return /* @__PURE__ */ y(
    "span",
    {
      className: v(
        "lw:relative lw:inline-flex lw:shrink-0 lw:align-middle",
        i
      ),
      children: [
        r,
        /* @__PURE__ */ o(
          "span",
          {
            "data-slot": "badge",
            "data-dot": n ? "true" : void 0,
            "data-invisible": m ? "true" : "false",
            "aria-hidden": d ? void 0 : !0,
            "aria-label": d,
            className: v(
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
const es = c.createContext(void 0), Vi = ({
  count: e,
  onClick: t,
  triggerProps: n,
  active: l,
  color: s,
  hoverColor: r,
  tooltipPlacement: i,
  testId: a
}) => {
  const u = Zo(), d = c.useContext(es), m = c.useContext(un), p = e ? `Notifications, ${e} unread` : "Notifications";
  return /* @__PURE__ */ o(
    je,
    {
      title: p,
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
          "aria-label": p,
          "data-testid": a,
          className: v(
            "lw:inline-flex lw:shrink-0 lw:cursor-pointer lw:items-center lw:justify-center lw:rounded-lg lw:outline-none lw:transition-colors lw:hover:bg-(--lw-hover) lw:focus-visible:outline-2 lw:focus-visible:outline-solid lw:focus-visible:outline-(--lw-fg) lw:[&_svg]:size-6",
            !m && "lw:p-2"
          ),
          style: {
            color: s,
            "--lw-fg": s,
            "--lw-hover": r,
            ...m ? {
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
}, nl = Vi, Ql = 14, Zi = 18, Ji = "blur(12px) saturate(180%) brightness(1.04)", Qi = (() => {
  var t;
  if (typeof navigator > "u")
    return !1;
  const e = (t = navigator.userAgentData) == null ? void 0 : t.brands;
  return !!(e != null && e.some(({ brand: n }) => /Chromium/.test(n)));
})(), ec = (e, t, n) => {
  const l = Math.min(0.45, n / e), s = Math.min(0.45, n / t), r = `<svg xmlns="http://www.w3.org/2000/svg" width="${e}" height="${t}"><defs><linearGradient id="x" x1="0" x2="1" y1="0" y2="0"><stop offset="0" stop-color="#ff0000"/><stop offset="${l}" stop-color="#800000"/><stop offset="${1 - l}" stop-color="#800000"/><stop offset="1" stop-color="#000000"/></linearGradient><linearGradient id="y" x1="0" x2="0" y1="0" y2="1"><stop offset="0" stop-color="#00ff00"/><stop offset="${s}" stop-color="#008000"/><stop offset="${1 - s}" stop-color="#008000"/><stop offset="1" stop-color="#000000"/></linearGradient></defs><rect width="100%" height="100%" fill="url(#x)"/><rect width="100%" height="100%" fill="url(#y)" style="mix-blend-mode:screen"/></svg>`;
  return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(r)}`;
}, tc = 140, er = 0.22, nc = 0.14, oc = (e, t, n) => {
  const l = c.useRef(n);
  l.current = n, c.useEffect(() => {
    if (!t || typeof document > "u" || typeof window.matchMedia == "function" && window.matchMedia("(prefers-reduced-transparency: reduce)").matches)
      return;
    const s = { x: 0, y: 0, i: 0 }, r = { x: 0, y: 0, i: 0 };
    let i = 0;
    const a = () => {
      var f;
      const g = e.current;
      g && (g.style.setProperty("--lx", `${r.x.toFixed(1)}px`), g.style.setProperty("--ly", `${r.y.toFixed(1)}px`), g.style.setProperty("--li", r.i.toFixed(3)), (f = l.current) == null || f.call(l, r.x, r.y, r.i));
    }, u = () => {
      r.x += (s.x - r.x) * er, r.y += (s.y - r.y) * er, r.i += (s.i - r.i) * nc;
      const g = Math.abs(s.x - r.x) < 0.3 && Math.abs(s.y - r.y) < 0.3 && Math.abs(s.i - r.i) < 3e-3;
      g && (r.x = s.x, r.y = s.y, r.i = s.i), a(), i = g ? 0 : requestAnimationFrame(u);
    }, d = () => {
      i || (i = requestAnimationFrame(u));
    }, m = (g) => {
      const f = e.current;
      if (g.pointerType === "touch" || !f)
        return;
      const h = f.getBoundingClientRect();
      if (!h.width || !h.height)
        return;
      s.x = (g.clientX - h.left) * f.offsetWidth / h.width, s.y = (g.clientY - h.top) * f.offsetHeight / h.height;
      const _ = Math.max(
        h.left - g.clientX,
        0,
        g.clientX - h.right
      ), b = Math.max(
        h.top - g.clientY,
        0,
        g.clientY - h.bottom
      );
      s.i = Math.max(0, 1 - Math.hypot(_, b) / tc), r.i < 0.01 && (r.x = s.x, r.y = s.y), d();
    }, p = () => {
      s.i = 0, d();
    };
    return document.addEventListener("pointermove", m, { passive: !0 }), document.documentElement.addEventListener("mouseleave", p), () => {
      cancelAnimationFrame(i), document.removeEventListener("pointermove", m), document.documentElement.removeEventListener("mouseleave", p);
    };
  }, [e, t]);
}, ts = c.forwardRef(
  ({
    isDark: e,
    solid: t,
    className: n,
    style: l,
    "data-testid": s,
    refract: r = !0,
    light: i = !0,
    onLight: a
  }, u) => {
    const d = c.useRef(null), m = r && Io;
    oc(d, i && Io, a);
    const p = jn(), g = `lumora-glass-${c.useId().replace(/[^a-zA-Z0-9-]/g, "")}`, [f, h] = c.useState(null), _ = c.useRef(null), b = c.useCallback(
      (I) => {
        var R;
        if (d.current = I, typeof u == "function" ? u(I) : u && (u.current = I), (R = _.current) == null || R.disconnect(), _.current = null, !I || !m || !Qi || typeof ResizeObserver > "u")
          return;
        const E = () => {
          const N = I.offsetWidth, A = I.offsetHeight;
          h(
            (G) => (G == null ? void 0 : G.width) === N && G.height === A ? G : N && A ? { width: N, height: A } : null
          );
        };
        _.current = new ResizeObserver(E), _.current.observe(I), E();
      },
      [u, m]
    ), S = c.useMemo(
      () => f ? ec(f.width, f.height, Ql) : null,
      [f]
    ), x = m && !!(S && f), T = Vs(e, t, p);
    return /* @__PURE__ */ y(ve, { children: [
      x ? /* @__PURE__ */ o(
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
                    href: S,
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
                    stdDeviation: Ql / 3,
                    result: "softMap"
                  }
                ),
                /* @__PURE__ */ o(
                  "feDisplacementMap",
                  {
                    in: "SourceGraphic",
                    in2: "softMap",
                    scale: Zi,
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
          ref: b,
          "aria-hidden": !0,
          "data-testid": s,
          "data-refract": x ? "true" : void 0,
          className: v(
            T.className,
            x && "lw:reduce-transparency:[backdrop-filter:none]! lw:reduce-transparency:[-webkit-backdrop-filter:none]!",
            n
          ),
          style: {
            ...T.style,
            ...x ? {
              backdropFilter: `url(#${g}) ${Ji}`
            } : {},
            ...l
          }
        }
      )
    ] });
  }
);
ts.displayName = "GlassLayer";
const Jn = ts, lc = '[role="menuitem"]:not([aria-disabled="true"])', ns = (e) => Array.from(e.querySelectorAll(lc)), os = (e) => {
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
    className: v(
      "lw:relative lw:m-0 lw:list-none lw:outline-none",
      e
    ),
    onKeyDown: (s) => {
      if (t == null || t(s), s.defaultPrevented)
        return;
      const r = ns(s.currentTarget);
      if (!r.length)
        return;
      const i = r.indexOf(document.activeElement);
      let a = null;
      switch (s.key) {
        case "ArrowDown":
          a = i < 0 ? 0 : (i + 1) % r.length;
          break;
        case "ArrowUp":
          a = i < 0 ? r.length - 1 : (i - 1 + r.length) % r.length;
          break;
        case "Home":
          a = 0;
          break;
        case "End":
          a = r.length - 1;
          break;
        default:
          return;
      }
      s.preventDefault(), r[a].focus();
    },
    ...n
  }
));
ol.displayName = "ShellMenuList";
const Un = c.forwardRef(({ className: e, onKeyDown: t, selected: n, ...l }, s) => /* @__PURE__ */ o(
  "li",
  {
    ref: s,
    role: "menuitem",
    tabIndex: -1,
    "data-selected": n ? "true" : void 0,
    className: v(
      "lw:relative lw:flex lw:cursor-pointer lw:items-center lw:outline-none lw:select-none lw:transition-colors",
      e
    ),
    onKeyDown: (r) => {
      t == null || t(r), !r.defaultPrevented && (r.key === "Enter" || r.key === " ") && (r.preventDefault(), r.currentTarget.click());
    },
    ...l
  }
));
Un.displayName = "ShellMenuItem";
const rc = ({
  className: e
}) => /* @__PURE__ */ o(
  "li",
  {
    role: "separator",
    className: v("lw:my-1 lw:h-px lw:list-none lw:bg-border", e)
  }
), sc = 150, ac = ({
  open: e,
  onOpen: t,
  onClose: n
}) => {
  const l = c.useRef(void 0), s = c.useRef(null), r = c.useRef(!1), [i, a] = c.useState(!1), [u, d] = c.useState(!1), [m, p] = c.useState(e);
  e !== m && (p(e), e && (d(i), a(!1)));
  const g = c.useRef({ open: e, openedByHover: u, onOpen: t, onClose: n });
  g.current = { open: e, openedByHover: u, onOpen: t, onClose: n };
  const f = () => {
    clearTimeout(l.current), l.current = void 0;
  }, h = c.useRef(!1), _ = c.useRef(!1), b = c.useRef(void 0), S = () => {
    _.current = !1, b.current && (document.removeEventListener("pointermove", b.current), b.current = void 0);
  }, x = (N) => {
    const A = s.current, G = A == null ? void 0 : A.getBoundingClientRect();
    return N.target instanceof Node && !!(A != null && A.contains(N.target)) || !!G && N.clientX >= G.left && N.clientX <= G.right && N.clientY >= G.top && N.clientY <= G.bottom;
  }, T = () => {
    S(), _.current = !0, b.current = (N) => {
      N.pointerType === "mouse" && !x(N) && S();
    }, document.addEventListener("pointermove", b.current);
  };
  c.useEffect(
    () => () => {
      f(), r.current = !1, e && !h.current && T(), h.current = !1;
    },
    [e]
  ), c.useEffect(() => S, []);
  const I = (N) => {
    N.pointerType === "mouse" && (f(), g.current.open && g.current.openedByHover && !r.current && (l.current = setTimeout(() => {
      h.current = !0, g.current.onClose();
    }, zr)));
  };
  return { triggerProps: {
    onPointerEnter: (N) => {
      if (N.pointerType !== "mouse" || (f(), s.current = N.currentTarget, g.current.open || _.current))
        return;
      const A = N.currentTarget;
      l.current = setTimeout(() => {
        g.current.open || (a(!0), g.current.onOpen(A));
      }, sc);
    },
    onPointerLeave: I,
    onPointerDown: () => {
      g.current.open && g.current.openedByHover && (f(), r.current = !0);
    }
  }, contentProps: {
    onPointerEnter: (N) => {
      N.pointerType === "mouse" && f();
    },
    onPointerLeave: I,
    onInteractOutside: (N) => {
      var A;
      N.target instanceof Node && ((A = s.current) != null && A.contains(N.target)) && N.preventDefault();
    }
  }, openedByHover: u };
}, Qn = ac, tr = ke(Ir), nr = ke(Vn), ic = 240, cc = 8, ls = (e) => {
  const t = e.getBoundingClientRect(), n = e.closest(
    '[data-rail-surface], [data-testid="sidebar-hover-panel"], aside'
  );
  if (!n)
    return t;
  const l = n.getBoundingClientRect().right + cc;
  return new DOMRect(l, t.top, 0, t.height);
}, dc = "lw:overflow-hidden lw:rounded-xl lw:border lw:border-solid lw:border-border lw:bg-popover lw:text-popover-foreground lw:shadow-[0_8px_24px_rgba(0,0,0,0.12)]", uc = ({
  anchorEl: e,
  onClose: t,
  platforms: n,
  currentKey: l,
  onSelect: s,
  accentColor: r,
  glass: i = !1,
  contentProps: a,
  openedByHover: u = !1
}) => {
  const d = Ye(), m = !!e, p = Xo(d ? "hsl(220, 30%, 7%)" : "#ffffff"), g = c.useRef(null), f = c.useMemo(
    () => ({
      current: e && {
        // Lets floating-ui follow the anchor's scroll parents and resizes
        contextElement: e,
        getBoundingClientRect: () => ls(e)
      }
    }),
    [e]
  ), h = Jo({
    enabled: i,
    isDark: d,
    selector: '[role="menuitem"]',
    radius: et
  }), _ = /* @__PURE__ */ o(
    ol,
    {
      ref: g,
      "aria-label": "Switch platform",
      "data-testid": "platform-menu-list",
      className: "lw:p-1",
      children: n.map((b) => {
        const S = b.key === l, x = b.accentColor ?? r;
        return /* @__PURE__ */ y(
          Un,
          {
            selected: S,
            onClick: () => s(b),
            "data-testid": `platform-item-${b.key}`,
            className: v(
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
                    backgroundColor: x,
                    boxShadow: i ? `0 0 0 3px ${d ? "rgba(255,255,255,0.08)" : "rgba(255,255,255,0.7)"}` : "none"
                  }
                }
              ) }),
              /* @__PURE__ */ y("span", { className: "lw:min-w-0 lw:flex-auto", children: [
                /* @__PURE__ */ o("span", { className: "lw:block lw:text-sm lw:leading-5 lw:font-semibold lw:text-foreground", children: b.name }),
                b.description ? /* @__PURE__ */ o("span", { className: "lw:block lw:text-xs lw:leading-[18px] lw:text-muted-foreground", children: b.description }) : null
              ] }),
              S ? /* @__PURE__ */ o(
                ks,
                {
                  "data-testid": "platform-current",
                  className: "lw:ml-3 lw:size-[18px] lw:shrink-0",
                  style: { color: x }
                }
              ) : null
            ]
          },
          b.key
        );
      })
    }
  );
  return /* @__PURE__ */ y(
    wn,
    {
      open: m,
      onOpenChange: (b) => {
        b || t();
      },
      modal: !u,
      children: [
        /* @__PURE__ */ o(
          fn,
          {
            virtualRef: f
          }
        ),
        /* @__PURE__ */ o(
          $t,
          {
            unstyled: !0,
            side: "bottom",
            align: "start",
            sideOffset: 8,
            collisionPadding: 16,
            ...a,
            onClick: (b) => b.stopPropagation(),
            onInteractOutside: (b) => {
              a == null || a.onInteractOutside(b), b.target instanceof Node && (e != null && e.contains(b.target)) && b.preventDefault();
            },
            onOpenAutoFocus: (b) => {
              b.preventDefault(), u || os(g.current);
            },
            onCloseAutoFocus: (b) => {
              var S;
              b.preventDefault(), u || (S = e == null ? void 0 : e.focus) == null || S.call(e);
            },
            className: "lw:max-w-[calc(100vw-32px)]",
            children: /* @__PURE__ */ o(
              "div",
              {
                "data-testid": "platform-menu",
                "data-glass": i ? "true" : void 0,
                className: i ? "lw:relative lw:rounded-md" : dc,
                style: { minWidth: ic },
                children: i ? /* @__PURE__ */ y(ve, { children: [
                  /* @__PURE__ */ o(
                    Jn,
                    {
                      isDark: d,
                      solid: p,
                      className: v(
                        "lw:absolute lw:inset-0 lw:origin-top-left lw:rounded-[inherit]",
                        $e
                      ),
                      style: {
                        animation: `${jo} ${tr.duration}ms ${tr.easing} both`
                      }
                    }
                  ),
                  /* @__PURE__ */ y(
                    "div",
                    {
                      ...h.containerProps,
                      className: v(
                        "lw:relative lw:overflow-hidden lw:rounded-[inherit]",
                        $e
                      ),
                      style: {
                        animation: `${Yo} ${nr.duration}ms ${nr.easing} 70ms both`
                      },
                      children: [
                        h.lens,
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
}, wc = ({ children: e, anchorEl: t, onOpen: n, hoverOpen: l = !1, ...s }) => {
  const r = c.useRef(null), i = !!(t && r.current && t.contains(r.current)), a = Qn({
    open: i,
    // The brand button anchors the menu, as a click on it does
    onOpen: (u) => n(u.closest("button") ?? u),
    onClose: s.onClose
  });
  return /* @__PURE__ */ y(
    "span",
    {
      ref: r,
      ...l ? a.triggerProps : {},
      "data-testid": "platform-switcher-logo",
      className: "lw:relative lw:inline-flex lw:items-center lw:justify-center lw:p-1.5 lw:after:absolute lw:after:right-px lw:after:bottom-px lw:after:border-solid lw:after:[border-width:0_0_5px_5px] lw:after:[border-color:transparent_transparent_currentColor_transparent] lw:after:opacity-55 lw:after:content-['']",
      children: [
        e,
        /* @__PURE__ */ o(
          uc,
          {
            ...s,
            anchorEl: i ? t : null,
            contentProps: a.contentProps,
            openedByHover: a.openedByHover
          }
        )
      ]
    }
  );
}, Bo = "lw:outline-none lw:focus:outline-none", fc = "lw:flex lw:flex-col lw:overflow-hidden lw:rounded-xl lw:border lw:border-solid lw:border-border lw:bg-popover lw:text-popover-foreground lw:shadow-[0_8px_24px_rgba(0,0,0,0.12)]", or = ke(Ir), lr = ke(Vn), mc = '[role="menuitem"], button[data-testid="account-menu-header"], [data-testid="menu-item-theme"]', pc = ({ mode: e, onToggle: t, accentColor: n, tint: l, glass: s = !1 }) => {
  const r = Ye(), i = jn(), a = c.useRef(null), u = c.useRef(null), d = (g) => {
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
  }, p = (g, f, h, _) => {
    const b = e === g;
    return /* @__PURE__ */ o(
      "button",
      {
        type: "button",
        ref: _,
        role: "radio",
        "aria-checked": b,
        "aria-label": f,
        tabIndex: b ? 0 : -1,
        onClick: () => d(g),
        "data-testid": `theme-segment-${g}`,
        className: v(
          "lw:inline-flex lw:h-6 lw:w-8 lw:cursor-pointer lw:items-center lw:justify-center lw:transition-[background-color,color,box-shadow,transform] lw:duration-150 lw:ease-out lw:focus-visible:shadow-[0_0_0_2px_var(--lw-seg-ring)]",
          s ? "lw:rounded-md" : "lw:rounded-full",
          !b && "lw:text-muted-foreground lw:hover:text-foreground",
          // On glass each mode answers the pointer itself, so the
          // row's lens is not the only thing that moves
          s && "lw:hover:scale-[1.06] lw:active:scale-[0.94]",
          s && !b && (r ? "lw:hover:bg-white/12" : "lw:hover:bg-white/75"),
          Bo
        ),
        style: {
          "--lw-seg-ring": st(n, 0.6),
          // White on dark: the accent is too dim against a dark surface
          ...b ? {
            color: r ? "#ffffff" : n,
            backgroundColor: l,
            ...s ? yr(r, i) : {}
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
      className: v(
        "lw:flex lw:shrink-0 lw:flex-row lw:gap-0.5 lw:bg-selected lw:p-[3px]",
        s ? "lw:rounded-md" : "lw:rounded-full"
      ),
      children: [
        p("light", "Light", Ms, a),
        p("dark", "Dark", Ds, u)
      ]
    }
  );
}, hc = ({
  open: e,
  anchorEl: t,
  onClose: n,
  width: l,
  renderAvatar: s,
  userName: r,
  userEmail: i,
  roleLabel: a,
  accentColor: u,
  tint: d,
  showThemeToggler: m,
  theme: p,
  onThemeToggle: g,
  onProfileClick: f,
  onAiUsageClick: h,
  onLinkClick: _,
  menuItems: b = [],
  onLogout: S,
  glass: x = !1,
  contentProps: T,
  openedByHover: I = !1
}) => {
  const E = Ye(), R = Xo(E ? "hsl(220, 30%, 7%)" : "#ffffff"), N = c.useRef(null), A = c.useMemo(
    () => ({
      current: t && {
        contextElement: t,
        getBoundingClientRect: () => ls(t)
      }
    }),
    [t]
  ), G = Jo({
    enabled: x,
    isDark: E,
    selector: mc,
    radius: et
  }), k = (O) => {
    n(), O == null || O();
  }, F = (O) => {
    n(), O.onClick ? O.onClick() : O.path && (_ == null || _(O.path));
  }, L = v(
    "lw:min-h-8 lw:gap-1 lw:px-3 lw:py-1.5 lw:text-sm lw:leading-5",
    x ? "lw:rounded-md" : "lw:rounded-lg lw:hover:bg-(--lw-menu-tint) lw:focus-visible:bg-(--lw-menu-tint)"
  ), W = "lw:flex lw:min-w-8 lw:shrink-0 lw:items-center lw:[&_svg]:size-5", ee = v(
    "lw:cursor-pointer lw:rounded-sm lw:text-xs lw:leading-[18px] lw:font-semibold lw:tracking-[0.02em] lw:hover:underline lw:hover:underline-offset-2 lw:focus-visible:shadow-[0_0_0_2px_var(--lw-link-ring)]",
    Bo
  ), B = E ? "#ffffff" : u, C = h ? /* @__PURE__ */ y(
    "div",
    {
      "data-testid": "account-menu-links",
      className: "lw:mt-0.5 lw:flex lw:flex-row lw:items-center lw:gap-1.5",
      children: [
        f ? /* @__PURE__ */ y(ve, { children: [
          /* @__PURE__ */ o(
            "button",
            {
              type: "button",
              onClick: () => k(f),
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
  ) : null, $ = /* @__PURE__ */ y("div", { className: "lw:flex lw:flex-row lw:items-center lw:gap-2.5 lw:p-3", children: [
    s(36),
    /* @__PURE__ */ y("div", { className: "lw:min-w-0 lw:flex-1", children: [
      /* @__PURE__ */ o("p", { className: "lw:truncate lw:text-sm lw:leading-5 lw:font-semibold lw:text-foreground", children: r }),
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
      C,
      f && !h ? /* @__PURE__ */ o(
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
  return /* @__PURE__ */ y(
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
            virtualRef: A
          }
        ),
        /* @__PURE__ */ o(
          $t,
          {
            ...T,
            unstyled: !0,
            side: "top",
            align: "start",
            sideOffset: 8,
            collisionPadding: 16,
            onOpenAutoFocus: (O) => {
              O.preventDefault(), I || os(N.current);
            },
            onCloseAutoFocus: (O) => {
              var q;
              O.preventDefault(), I || (q = t == null ? void 0 : t.focus) == null || q.call(t);
            },
            className: "lw:max-w-[calc(100vw-32px)]",
            children: /* @__PURE__ */ y(
              "div",
              {
                "data-testid": "account-menu",
                "data-glass": x ? "true" : void 0,
                className: v(
                  x ? (
                    // The rows give up their own hover fill: one drop of
                    // glass (the lens) glides behind whichever is hovered
                    "lw:relative lw:rounded-md"
                  ) : fc
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
                      isDark: E,
                      solid: R,
                      className: v(
                        "lw:absolute lw:inset-0 lw:origin-bottom-left lw:rounded-[inherit]",
                        $e
                      ),
                      style: {
                        animation: `${jo} ${or.duration}ms ${or.easing} both`
                      }
                    }
                  ) : null,
                  /* @__PURE__ */ y(
                    "div",
                    {
                      ...G.containerProps,
                      className: x ? v(
                        "lw:relative lw:flex lw:flex-col lw:overflow-hidden lw:rounded-[inherit]",
                        $e
                      ) : "lw:contents",
                      style: x ? {
                        animation: `${Yo} ${lr.duration}ms ${lr.easing} 70ms both`
                      } : void 0,
                      children: [
                        G.lens,
                        f && !h ? /* @__PURE__ */ o(
                          "button",
                          {
                            type: "button",
                            onClick: () => k(f),
                            "data-testid": "account-menu-header",
                            className: v(
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
                        m ? /* @__PURE__ */ y(
                          "div",
                          {
                            "data-testid": "menu-item-theme",
                            className: v(
                              L,
                              "lw:relative lw:mx-1 lw:mt-1 lw:flex lw:items-center lw:py-1 lw:hover:bg-transparent"
                            ),
                            children: [
                              /* @__PURE__ */ o(
                                "span",
                                {
                                  className: v(
                                    W,
                                    "lw:text-muted-foreground"
                                  ),
                                  children: /* @__PURE__ */ o(Ls, {})
                                }
                              ),
                              /* @__PURE__ */ o("span", { className: "lw:flex-1 lw:text-foreground", children: "Theme" }),
                              /* @__PURE__ */ o(
                                pc,
                                {
                                  glass: x,
                                  mode: p,
                                  onToggle: g,
                                  accentColor: u,
                                  tint: d
                                }
                              )
                            ]
                          }
                        ) : null,
                        /* @__PURE__ */ y(
                          ol,
                          {
                            ref: N,
                            className: v(
                              "lw:px-1 lw:pb-1",
                              m ? "lw:pt-0" : "lw:pt-1"
                            ),
                            children: [
                              b.map((O) => /* @__PURE__ */ y(
                                Un,
                                {
                                  onClick: () => F(O),
                                  "data-testid": `menu-item-${O.key}`,
                                  className: v(
                                    L,
                                    "lw:text-foreground"
                                  ),
                                  children: [
                                    /* @__PURE__ */ o(
                                      "span",
                                      {
                                        className: v(
                                          W,
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
                              S ? /* @__PURE__ */ o(rc, {}) : null,
                              S ? /* @__PURE__ */ y(
                                Un,
                                {
                                  onClick: () => k(S),
                                  "data-testid": "menu-item-logout",
                                  className: v(
                                    L,
                                    "lw:text-destructive"
                                  ),
                                  children: [
                                    /* @__PURE__ */ o("span", { className: W, children: /* @__PURE__ */ o(ur, {}) }),
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
}, gc = hc, bc = "lw:outline-none lw:focus:outline-none", xc = ({
  mainLinks: e,
  secondaryLinks: t = [],
  activePath: n,
  onLinkClick: l,
  logo: s,
  title: r,
  onBrandClick: i,
  brandMenuOpen: a,
  brandColor: u,
  headerBackgroundColor: d,
  headerForegroundColor: m,
  activeAccentColor: p = "#01584f",
  activeBackgroundColor: g,
  groupArrowColor: f,
  groupAccentColor: h,
  activeForegroundColor: _,
  foregroundColor: b,
  surfaceBackgroundColor: S,
  flyoutSurfaceColor: x,
  collapsed: T,
  expandedWidth: I,
  collapsedWidth: E,
  topContent: R,
  submenuMode: N,
  color: A,
  hoverColor: G,
  avatarColor: k,
  showProfile: F = !0,
  userName: L = "User",
  userEmail: W,
  userRole: ee,
  userAvatar: B,
  showNotifications: C = !0,
  notificationCount: $ = 0,
  onNotificationsClick: O,
  notificationsTriggerProps: q,
  notificationsOpen: U,
  whatsNewCount: oe = 0,
  onProfileClick: me,
  onAiUsageClick: j,
  menuItems: Z,
  onLogout: ue,
  theme: J = "light",
  showThemeToggler: te = !0,
  onThemeToggle: ie
}) => {
  const he = Ye(), ye = qn(S, he), M = A ?? b ?? (he ? "#ffffff" : p), z = G ?? h ?? tn(p), Y = k ?? p, X = c.useRef(null), [ae, ne] = c.useState(!1), Ee = Qn({
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
  ), Be = $ + oe, ce = T && N === "flyout", Re = C ? /* @__PURE__ */ o(
    nl,
    {
      count: Be,
      onClick: O,
      triggerProps: q,
      active: U,
      color: M,
      hoverColor: z,
      tooltipPlacement: "right",
      testId: "panel-notifications"
    }
  ) : null, ge = F ? /* @__PURE__ */ y(
    "button",
    {
      type: "button",
      ref: X,
      onClick: () => ne(!0),
      ...Ee.triggerProps,
      "aria-haspopup": "menu",
      "aria-expanded": ae,
      "aria-label": "Account menu",
      "data-testid": "panel-user-button",
      className: v(
        "lw:flex lw:min-w-0 lw:cursor-pointer lw:items-center lw:justify-start lw:gap-2.5 lw:rounded-[10px] lw:hover:bg-(--lw-footer-tint)",
        T ? "lw:flex-[0_0_auto]" : "lw:flex-1",
        // On the flyout rail the 36px avatar fills a 44px button,
        // matching the rail's icon buttons
        ce ? "lw:p-1" : "lw:p-1.5",
        ae ? "lw:bg-(--lw-footer-tint)" : "lw:bg-transparent",
        bc
      ),
      style: { "--lw-footer-tint": z },
      children: [
        T && !ce && C ? (
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
        ) : _e(T ? 36 : 40),
        T ? null : /* @__PURE__ */ y("span", { className: "lw:block lw:min-w-0 lw:text-left", children: [
          /* @__PURE__ */ o(
            "span",
            {
              className: "lw:block lw:truncate lw:text-sm lw:leading-[1.3] lw:font-semibold",
              style: { color: M },
              children: L
            }
          ),
          we ? /* @__PURE__ */ o(
            "span",
            {
              "data-testid": "panel-user-role",
              className: "lw:block lw:truncate lw:text-xs lw:leading-[1.3] lw:tracking-[0.02em] lw:opacity-85",
              style: { color: M },
              children: we
            }
          ) : null
        ] })
      ]
    }
  ) : null, pe = !!Re && (!T || ce || !ge), Ne = ge || pe ? /* @__PURE__ */ y(
    "div",
    {
      className: v(
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
  return /* @__PURE__ */ y(
    "div",
    {
      "data-testid": "panel-sidebar",
      "data-collapsed": T ? "true" : "false",
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
            logo: s,
            title: r,
            onBrandClick: i,
            brandMenuOpen: a,
            brandColor: u,
            headerBackgroundColor: d,
            headerForegroundColor: m,
            activeAccentColor: p,
            activeBackgroundColor: g,
            groupArrowColor: f,
            groupAccentColor: h,
            activeForegroundColor: _,
            foregroundColor: b,
            surfaceBackgroundColor: ye,
            flyoutSurfaceColor: x,
            collapsed: T,
            expandedWidth: I,
            collapsedWidth: E,
            topContent: R,
            footer: Ne,
            submenuMode: N
          }
        ),
        F ? /* @__PURE__ */ o(
          gc,
          {
            open: ae,
            anchorEl: X.current,
            onClose: () => ne(!1),
            width: Math.max(I - 16, 240),
            renderAvatar: _e,
            userName: L,
            userEmail: W,
            roleLabel: we,
            accentColor: p,
            tint: z,
            showThemeToggler: te,
            theme: J,
            onThemeToggle: ie,
            onProfileClick: me,
            onAiUsageClick: j,
            onLinkClick: l,
            menuItems: Z,
            onLogout: ue,
            glass: N === "flyout",
            contentProps: Ee.contentProps,
            openedByHover: Ee.openedByHover
          }
        ) : null
      ]
    }
  );
}, vc = xc, yc = ({
  compact: e,
  color: t,
  hoverColor: n,
  showProfile: l,
  hoverOpen: s = !1,
  whatsNewCount: r = 0,
  notificationsTriggerProps: i,
  notificationsOpen: a,
  ...u
}) => {
  var R;
  const {
    avatarColor: d,
    showNotifications: m,
    notificationCount: p,
    onNotificationsClick: g,
    userName: f = "User",
    userRole: h,
    userAvatar: _
  } = u, b = c.useRef(null), [S, x] = c.useState(
    null
  ), T = !!S, I = Qn({
    open: T,
    onOpen: () => x(b.current),
    onClose: () => x(null)
  }), E = c.useRef(e);
  return c.useEffect(() => {
    e && !E.current && x(null), E.current = e;
  }, [e]), !m && !l ? null : /* @__PURE__ */ y(ve, { children: [
    /* @__PURE__ */ y(
      "div",
      {
        ref: b,
        "data-testid": "sidebar-footer",
        className: v(
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
              disabled: T,
              children: /* @__PURE__ */ o(
                "button",
                {
                  type: "button",
                  onClick: () => x(b.current),
                  ...s ? I.triggerProps : {},
                  "aria-label": `Account menu for ${f}`,
                  "aria-haspopup": "menu",
                  "aria-expanded": T,
                  "data-testid": "sidebar-user",
                  className: v(
                    "lw:inline-flex lw:min-w-0 lw:cursor-pointer lw:items-center lw:justify-start lw:gap-2.5 lw:rounded-lg lw:text-left lw:outline-none lw:transition-colors lw:hover:bg-(--lw-hover) lw:focus-visible:outline-2 lw:focus-visible:outline-solid lw:focus-visible:outline-(--lw-fg)",
                    // 4px around the avatar, on the glass rail too
                    e ? "lw:flex-none lw:p-1" : "lw:flex-auto lw:px-2 lw:py-1.5"
                  ),
                  style: {
                    color: t,
                    "--lw-fg": t,
                    "--lw-hover": n,
                    ...T ? { backgroundColor: n } : {}
                  },
                  children: /* @__PURE__ */ o(
                    Vr,
                    {
                      name: f,
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
          m && /* @__PURE__ */ o(
            nl,
            {
              count: p + r,
              onClick: g,
              triggerProps: s ? i : void 0,
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
        anchorEl: S,
        onClose: () => x(null),
        placement: e ? "beside" : "above",
        width: e || (R = b.current) == null ? void 0 : R.clientWidth,
        contentProps: I.contentProps,
        openedByHover: I.openedByHover,
        ...u
      }
    )
  ] });
}, Ec = yc, Nc = 120, Sc = 300, rr = ke(Or), sr = ke(Vn), _c = (e) => {
  var t;
  return ((t = e == null ? void 0 : e.querySelector("input, textarea")) == null ? void 0 : t.value) ?? "";
}, Rc = 'input, textarea, [contenteditable="true"]', zo = (e) => {
  var t;
  (t = e == null ? void 0 : e.querySelector(Rc)) == null || t.focus();
}, Tc = "lw:[&_:is([data-slot=input],[data-slot=button],input:not([data-slot]))]:rounded-[6px] lw:[&_:is([data-slot=input],[data-slot=button]):focus-visible]:border-(--lw-accent) lw:[&_:is([data-slot=input]):focus-visible]:ring-(--lw-accent)", ar = (e) => e ? `Search (${e.join("")})` : "Search", Ac = ({
  search: e,
  icon: t,
  mode: n,
  onExpand: l,
  autoFocus: s = !1,
  onAutoFocused: r,
  color: i,
  hoverColor: a,
  shortcutKeys: u
}) => {
  const d = Zo(), m = c.useContext(un), p = c.useRef(null), [g, f] = c.useState(null);
  return c.useEffect(() => {
    n === "full" && s && (zo(p.current), r == null || r());
  }, [n, s, r]), n === "full" ? /* @__PURE__ */ o(
    "div",
    {
      ref: p,
      "data-testid": "sidebar-search",
      "data-lw-host": "",
      className: "lw:w-full",
      children: e
    }
  ) : n === "popover" && m ? /* @__PURE__ */ o(
    Cc,
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
      children: /* @__PURE__ */ y(
        wn,
        {
          open: !!g,
          onOpenChange: (h) => !h && f(null),
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
                    onClick: (h) => n === "expand" ? l == null ? void 0 : l() : f(h.currentTarget),
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
}, Cc = ({ search: e, icon: t, color: n, railTooltip: l, tooltip: s }) => {
  const r = Ye();
  Zs(r, st(n, r ? 0.3 : 0.35));
  const i = `rgb(${jn()})`, a = Xo(r ? "#1e2430" : "#ffffff"), u = c.useRef(null), d = c.useRef(null), [m, p] = c.useState(!1), g = c.useRef(!1), f = c.useRef(void 0), h = c.useRef(void 0), _ = () => {
    clearTimeout(f.current), clearTimeout(h.current);
  }, b = c.useCallback(() => {
    _(), g.current = !1, p(!1);
  }, []), S = () => {
    clearTimeout(h.current), m || (clearTimeout(f.current), f.current = setTimeout(
      () => p(!0),
      Nc
    ));
  }, x = () => {
    clearTimeout(f.current), clearTimeout(h.current), h.current = setTimeout(() => {
      !g.current && !_c(d.current) && p(!1);
    }, Sc);
  };
  return c.useEffect(() => _, []), c.useEffect(() => {
    if (!m)
      return;
    const T = setTimeout(() => zo(d.current)), I = (R) => {
      var A, G;
      const N = R.target;
      !((A = d.current) != null && A.contains(N)) && !((G = u.current) != null && G.contains(N)) && b();
    }, E = (R) => {
      var N;
      R.key === "Escape" && (b(), (N = u.current) == null || N.focus());
    };
    return document.addEventListener("pointerdown", I), document.addEventListener("keydown", E), () => {
      clearTimeout(T), document.removeEventListener("pointerdown", I), document.removeEventListener("keydown", E);
    };
  }, [m, b]), /* @__PURE__ */ o(
    "div",
    {
      "data-testid": "sidebar-search",
      className: "lw:flex lw:w-full lw:justify-center",
      children: /* @__PURE__ */ y(
        wn,
        {
          open: m,
          onOpenChange: (T) => !T && b(),
          modal: !1,
          children: [
            /* @__PURE__ */ o(
              je,
              {
                title: m ? "" : s,
                side: "right",
                arrow: !0,
                ...l,
                children: /* @__PURE__ */ o(fn, { asChild: !0, children: /* @__PURE__ */ o(
                  "button",
                  {
                    ref: u,
                    type: "button",
                    "aria-label": "Search",
                    "aria-expanded": m,
                    onMouseEnter: S,
                    onMouseLeave: x,
                    onClick: () => {
                      _(), g.current = !0, p(!0);
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
                onOpenAutoFocus: (T) => T.preventDefault(),
                onCloseAutoFocus: (T) => T.preventDefault(),
                onInteractOutside: (T) => {
                  var I;
                  (I = u.current) != null && I.contains(T.target) && T.preventDefault();
                },
                className: "lw:z-[1300]",
                children: /* @__PURE__ */ y(
                  "div",
                  {
                    ref: d,
                    "data-testid": "sidebar-search-card",
                    onMouseEnter: S,
                    onMouseLeave: x,
                    className: "lw:relative lw:w-80 lw:p-2",
                    style: { borderRadius: et },
                    children: [
                      /* @__PURE__ */ o(
                        Jn,
                        {
                          isDark: r,
                          solid: a,
                          className: v(
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
                          className: v(
                            "lw:relative",
                            Tc,
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
}, Oc = Ac, Ic = 80, $c = 300, kc = 32, Lc = (e) => {
  const t = c.useRef(/* @__PURE__ */ new WeakSet()), n = c.useRef(void 0), l = c.useRef(void 0), [s, r] = c.useState(!1), [i, a] = c.useState(!1), [u, d] = c.useState(!1), m = c.useRef(null), p = () => {
    clearTimeout(n.current), clearTimeout(l.current), n.current = void 0, l.current = void 0;
  };
  c.useEffect(() => {
    if (!e) {
      p(), r(!1), a(!1), d(!1);
      return;
    }
    const h = (x) => {
      var I;
      if (x.pointerType !== "mouse")
        return;
      const T = x.clientX <= kc;
      T && ((I = m.current) == null || I.style.setProperty(
        "--edge-glow-y",
        `${x.clientY}px`
      )), d(T);
    }, _ = () => d(!1), b = () => {
      clearTimeout(n.current), n.current = void 0, l.current === void 0 && (l.current = setTimeout(() => {
        l.current = void 0, r(!1), a(!1);
      }, $c));
    }, S = (x) => {
      t.current.has(x) || b();
    };
    return document.addEventListener("mouseover", S), document.addEventListener("pointermove", h, {
      passive: !0
    }), document.documentElement.addEventListener("mouseleave", b), document.documentElement.addEventListener("mouseleave", _), () => {
      p(), document.removeEventListener("mouseover", S), document.removeEventListener("pointermove", h), document.documentElement.removeEventListener(
        "mouseleave",
        b
      ), document.documentElement.removeEventListener(
        "mouseleave",
        _
      );
    };
  }, [e]);
  const g = {
    onMouseOver: (h) => {
      t.current.add(h.nativeEvent), clearTimeout(l.current), l.current = void 0, !s && n.current === void 0 && (n.current = setTimeout(() => {
        n.current = void 0, r(!0);
      }, Ic));
    },
    onFocus: (h) => {
      Mc(h.target) && a(!0);
    },
    onBlur: (h) => {
      const _ = h.relatedTarget;
      (!_ || !h.currentTarget.contains(_)) && a(!1);
    },
    onKeyDown: (h) => {
      h.key === "Escape" && (a(!1), r(!1));
    }
  }, f = e && (s || i);
  return {
    shown: f,
    nearEdge: e && u && !f,
    glowRef: m,
    rootProps: g
  };
}, Mc = (e) => {
  try {
    return e.matches(":focus-visible");
  } catch {
    return !0;
  }
}, Dc = Lc, Pc = 100, Fc = () => {
  const e = c.useRef(null), t = c.useRef(void 0), n = c.useRef(/* @__PURE__ */ new WeakSet()), [l, s] = c.useState(!1), [r, i] = c.useState(!1), a = () => {
    clearTimeout(t.current), t.current = void 0;
  };
  return c.useEffect(() => {
    const d = (p) => {
      n.current.has(p) || (a(), s(!1));
    }, m = () => {
      a(), s(!1);
    };
    return document.addEventListener("mouseover", d), document.documentElement.addEventListener("mouseleave", m), () => {
      a(), document.removeEventListener("mouseover", d), document.documentElement.removeEventListener(
        "mouseleave",
        m
      );
    };
  }, []), c.useEffect(() => {
    if (!r)
      return;
    const d = (m) => {
      var p;
      (p = e.current) != null && p.contains(m.target) || i(!1);
    };
    return document.addEventListener("pointerdown", d), () => document.removeEventListener("pointerdown", d);
  }, [r]), {
    expanded: l || r,
    pin: () => i(!0),
    rootProps: {
      ref: e,
      onMouseOver: (d) => {
        n.current.add(d.nativeEvent), !l && t.current === void 0 && (t.current = setTimeout(() => {
          t.current = void 0, s(!0);
        }, Pc));
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
}, Bc = Fc, zc = (e) => {
  const t = Array.from((e == null ? void 0 : e.children) ?? []).find(
    (a) => a.tagName === "ASIDE"
  );
  if (!t)
    return null;
  const n = t.querySelector("[data-rail-surface]") ?? t, { right: l, width: s } = t.getBoundingClientRect(), { top: r, height: i } = n.getBoundingClientRect();
  return s <= 0 || i <= 0 ? null : { left: l, top: r, height: i };
}, Hc = 300, Co = 288, Gc = "width 220ms cubic-bezier(0.4, 0, 0.2, 1), box-shadow 220ms ease", Wc = 18, ir = 72, Oo = 90, Uc = "transform 240ms cubic-bezier(0.2, 0.8, 0.2, 1), opacity 180ms ease", Xc = 68, cr = () => typeof navigator < "u" && /Mac|iPhone|iPad/.test(navigator.platform || navigator.userAgent), Kc = typeof window > "u" ? qt : Fs, jc = ({
  children: e,
  sidebarLinks: t = [],
  secondarySidebarLinks: n = [],
  appName: l = "Dashboard",
  showSidebar: s = !0,
  showSidebarRailTitles: r = !1,
  sidebarVariant: i = "rail",
  sidebarSubmenu: a = "expand",
  sidebarAutoHide: u = !1,
  mobileNavigation: d = "bottom-bar",
  mobileBottomBarLinks: m,
  logo: p,
  onBrandClick: g,
  searchComponent: f,
  searchIcon: h,
  notificationsIcon: _,
  searchShortcut: b = !1,
  brandColor: S,
  contentPadding: x = Rr,
  userMenuItems: T,
  sidebarBackgroundColor: I,
  sidebarHeaderBackgroundColor: E,
  groupAccentColor: R,
  activeSidebarForegroundColor: N,
  enableRefreshToken: A = !1,
  holdSessionSkeleton: G = !1,
  sessionSkeletonContent: k,
  activePath: F,
  onLinkClick: L,
  showProfile: W = !0,
  userName: ee,
  userRole: B,
  userAvatar: C,
  userEmail: $,
  onLogout: O,
  showSettings: q = !0,
  onSettingsClick: U,
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
  onVerify: M,
  alertProps: z,
  style: Y,
  sidebarStyles: X,
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
  assistantShortcut: Mt = "j",
  onAssistantClick: qe,
  assistantActive: ft = !1,
  assistantBusy: gn = !1,
  assistantLabel: to = "Nexa",
  customNavbar: bn,
  customNavbarProps: mt,
  redirectToLogin: pt,
  apiBaseUrl: Dt
}) => {
  const w = Hr(), P = Ne === "dark", Q = _e ?? "#01584f", H = Be ?? Q, K = Cr(
    typeof pe == "object" ? pe[Ne] : pe,
    P
  ), V = i === "collapsible", fe = i === "panel", De = fe && s && !w, be = i === "rail-labeled", Oe = V || be, xe = qn(
    I,
    P
  ), ht = E ?? xe, Ae = ge ?? (P ? "#ffffff" : H), Pt = R ?? tn(Ae), Ft = E ? $o(ht) : Ae, ll = (D) => /* @__PURE__ */ o(
    "div",
    {
      role: "img",
      "aria-label": `${l} logo`,
      className: "lw:size-7 lw:shrink-0",
      style: {
        backgroundColor: D,
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
  ), xn = S ?? Ft, [rl, Bt] = Ue(
    null
  ), no = ((ie == null ? void 0 : ie.length) ?? 0) > 1, rs = po(() => Bt(null), []), ss = (D) => {
    Bt(null), ye ? ye(D) : D.key !== he && D.url && window.location.assign(D.url);
  }, oo = !w && (nn(a, i) || !(V || fe)), sl = (D) => no ? /* @__PURE__ */ o(
    wc,
    {
      anchorEl: rl,
      onClose: rs,
      onOpen: Bt,
      hoverOpen: oo,
      platforms: ie,
      currentKey: he,
      onSelect: ss,
      accentColor: Q,
      glass: a === "flyout" && (V || fe) && !w,
      children: D
    }
  ) : D, vn = no ? (D) => Bt(D.currentTarget) : g, yn = no ? !!rl : void 0, lo = sl(
    p ?? ll(xn)
  ), as = sl(
    p ?? ll(S ?? Ae)
  ), ro = Bc(), ze = nn(a, i), Ge = ze || !ro.expanded, Le = s && !w && ta(u, a, i), gt = Dc(Le), al = ze ? "popover" : "expand", il = ze ? en : Zt, cl = ze ? "transparent" : xe, dl = ze && !E ? "transparent" : ht, [is, ul] = Ue(!1), cs = po(() => ul(!1), []), Ve = Ar({
    showSidebar: s,
    isMobile: w,
    sidebarVariant: i,
    sidebarSubmenu: a,
    sidebarAutoHide: u
  }), [wl, bt] = Ue(!1), [fl, so] = Ue(!1), Me = w && d === "bottom-bar", ml = `calc(${Jr}px + env(safe-area-inset-bottom, 0px))`, [Ze, pl] = Ue({ open: !1, tab: "notifications" }), ao = () => pl((D) => ({ ...D, open: !1 })), hl = j && !!ue, gl = Sn(null), [io, ds] = Ue(null), zt = po(() => {
    const D = w ? null : zc(gl.current);
    ds(
      (le) => le && D && le.left === D.left && le.top === D.top && le.height === D.height ? le : D
    );
  }, [w]);
  qt(() => {
    if (Ze.open)
      return zt(), window.addEventListener("resize", zt), () => window.removeEventListener("resize", zt);
  }, [Ze.open, zt]);
  const bl = (D) => {
    bt(!1), so(!1), zt(), pl({ open: !0, tab: D });
  }, it = Qn({
    open: Ze.open,
    onOpen: () => bl("notifications"),
    onClose: ao
  }), xl = hl ? it.triggerProps : void 0, We = gt.shown || Le && Ze.open && it.openedByHover, [us, ws] = Ue(0), [fs, ms] = Ue(We);
  fs !== We && (ms(We), We || (ws((D) => D + 1), Bt(null)));
  const [ps, hs] = Ue(!0), [gs, bs] = Ue(!1), co = wt == null ? void 0 : wt(), vl = (co == null ? void 0 : co.isOpen) ?? !1, yl = pn === "floating" ? "floating" : "docked", xs = yl === "docked" && vl && ut && !w ? kt : 0, En = Sn(M), El = Sn(!1), Nl = Ps(
    () => ci(Dt),
    [Dt]
  );
  qt(() => {
    En.current = M;
  }, [M]);
  const uo = Sn(qe);
  uo.current = qe;
  const Ht = at && Mt ? Mt.toLowerCase() : null;
  qt(() => {
    if (!Ht)
      return;
    const D = (le) => {
      (le.metaKey || le.ctrlKey) && !le.altKey && !le.shiftKey && le.key.toLowerCase() === Ht && uo.current && (le.preventDefault(), uo.current());
    };
    return window.addEventListener("keydown", D), () => window.removeEventListener("keydown", D);
  }, [Ht]);
  const Sl = (D) => {
    const le = O(D);
    le instanceof Promise && le.catch((Je) => {
      console.error("Error in logout handler:", Je);
    });
  };
  if (Kc(() => {
    (() => {
      var le;
      try {
        const { isAuthenticated: Je } = ai();
        if (!Je) {
          console.log("No session found, redirecting to login"), cn(), pt();
          return;
        }
        if (!El.current) {
          const { user: Wt, error: mo } = ii();
          if (Wt && !mo) {
            const Ts = {
              name: Wt.name || "",
              email: Wt.email || "",
              profilePicture: Wt.profilePicture || "",
              role: Wt.role || ""
            };
            El.current = !0, (le = En.current) == null || le.call(En, Ts);
          } else
            mo && console.error("Error getting user data:", mo);
        }
        bs(!0);
      } catch (Je) {
        console.error("Error checking session:", Je), cn(), pt();
      } finally {
        hs(!1);
      }
    })();
  }, [pt]), qt(() => {
    A && di(Nl, pt);
  }, [A, Nl]), ps || G)
    return /* @__PURE__ */ o(
      ri,
      {
        theme: Ne,
        darkModeSelector: Te,
        sidebarVariant: i,
        sidebarSubmenu: a,
        sidebarAutoHide: u,
        showSidebar: s,
        contentPadding: x,
        sidebarBackgroundColor: I,
        contentBackgroundColor: pe,
        content: k
      }
    );
  if (!gs)
    return null;
  const Gt = f ?? (bn ? /* @__PURE__ */ o(bn, { ...mt }) : null), wo = ue && (() => bl("notifications")), vs = Z + J, _l = {
    avatarColor: H,
    // The standard menu only runs `onClick`, so path rows navigate here.
    menuItems: T == null ? void 0 : T.map(
      (D) => D.onClick || !D.path ? D : { ...D, onClick: () => L == null ? void 0 : L(D.path) }
    ),
    showNotifications: j,
    notificationCount: Z,
    whatsNewCount: J,
    onNotificationsClick: wo,
    notificationsTriggerProps: xl,
    notificationsOpen: Ze.open,
    showProfile: W,
    userName: ee,
    userRole: B,
    userAvatar: C,
    showSettings: q,
    onSettingsClick: U,
    showThemeToggler: tt,
    theme: Ne,
    onThemeToggle: mn,
    onLogout: Sl
  }, fo = (D, le = !1) => /* @__PURE__ */ o(
    Ec,
    {
      ..._l,
      compact: D,
      hoverOpen: le,
      color: Ae,
      hoverColor: Pt
    }
  ), Rl = Ht ? [cr() ? "⌘" : "Ctrl", Ht.toUpperCase()] : void 0, ys = (D) => at && Lt === "sidebar" ? /* @__PURE__ */ o(
    ql,
    {
      variant: D ? "sidebar-icon" : "sidebar",
      onClick: qe,
      active: ft,
      busy: gn,
      shortcutKeys: Rl,
      accentColor: Ae
    }
  ) : null, Es = b ? [cr() ? "⌘" : "Ctrl", b.toUpperCase()] : void 0, Ns = (D) => Gt ? /* @__PURE__ */ o(
    Oc,
    {
      search: Gt,
      icon: h,
      mode: D,
      onExpand: () => {
        ro.pin(), ul(!0);
      },
      autoFocus: is,
      onAutoFocused: cs,
      color: Ae,
      hoverColor: Pt,
      shortcutKeys: Es
    }
  ) : null, Nn = (D) => {
    const le = ys(D !== "full"), Je = Ns(D);
    return le || Je ? /* @__PURE__ */ y(
      "div",
      {
        className: v(
          "lw:flex lw:flex-col",
          D === "full" ? "lw:items-stretch" : "lw:items-center"
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
    Mo,
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
      groupAccentColor: R,
      activeForegroundColor: N,
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
  ), Al = (D) => ze ? Ss(D) : _s(D), Ss = (D) => /* @__PURE__ */ y(
    "aside",
    {
      ...Le ? gt.rootProps : {},
      "data-auto-hide": Le ? "true" : void 0,
      "data-shown": Le ? String(We) : void 0,
      className: v(
        // Above the page, including its sticky app bars
        "lw:top-0 lw:z-[1101] lw:h-screen",
        Le ? "lw:pointer-events-none lw:fixed lw:left-0" : "lw:sticky lw:shrink-0 lw:self-start"
      ),
      style: Le ? {
        width: en + 2 * lt
      } : {
        width: Ve,
        minWidth: Ve,
        backgroundColor: K
      },
      children: [
        Le && /* @__PURE__ */ o(
          "div",
          {
            "data-testid": "sidebar-edge-reveal",
            "aria-hidden": "true",
            className: "lw:pointer-events-auto lw:absolute lw:inset-y-0 lw:left-0",
            style: { width: Wc }
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
        /* @__PURE__ */ y(
          "div",
          {
            "data-testid": "sidebar-hover-panel",
            "data-expanded": "false",
            "data-glass": "true",
            "data-rail-surface": "",
            className: v(
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
                transition: Uc
              },
              ...X
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
                  children: D
                },
                us
              )
            ]
          }
        )
      ]
    }
  ), _s = (D) => /* @__PURE__ */ o(
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
          className: v(
            "lw:absolute lw:top-0 lw:left-0 lw:flex lw:h-full lw:flex-col lw:overflow-hidden lw:border-r lw:border-solid lw:border-border",
            Ee
          ),
          style: {
            width: Ge ? Zt : Co,
            backgroundColor: xe,
            boxShadow: Ge ? "none" : `4px 0 24px rgba(0, 0, 0, ${P ? 0.5 : 0.12})`,
            transition: Gc,
            ...X
          },
          children: D
        }
      )
    }
  ), Rs = Tr(x), ct = w || !io ? null : Le && !it.openedByHover ? { ...io, left: lt } : io;
  return /* @__PURE__ */ o(mr.Provider, { value: Ne, children: /* @__PURE__ */ o(xr.Provider, { value: H, children: /* @__PURE__ */ o(Kn.Provider, { value: xe, children: /* @__PURE__ */ o(es.Provider, { value: _, children: /* @__PURE__ */ y(
    "div",
    {
      ref: gl,
      "data-lw-scope": "",
      "data-lw-theme": Ne,
      className: v("lw:flex lw:min-h-screen", ne),
      style: Y,
      children: [
        w && /* @__PURE__ */ o(
          qi,
          {
            height: Dn,
            onMenuClick: s && !Me ? () => bt(!0) : void 0,
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
                count: vs,
                onClick: wo,
                color: Ft,
                hoverColor: Pt,
                tooltipPlacement: "bottom",
                testId: "mobile-notifications"
              }
            ) : void 0
          }
        ),
        s && !w && be && /* @__PURE__ */ o(
          "aside",
          {
            className: v(
              "lw:sticky lw:top-0 lw:z-[2] lw:flex lw:h-screen lw:shrink-0 lw:flex-col lw:self-start lw:border-r lw:border-solid lw:border-border",
              Ee
            ),
            style: {
              width: Ve,
              minWidth: Ve,
              ...X
            },
            children: Tl()
          }
        ),
        s && !w && V && Al(
          /* @__PURE__ */ y(ve, { children: [
            Tl(),
            (z == null ? void 0 : z.show) && !Ge && /* @__PURE__ */ o($n, { ...z })
          ] })
        ),
        De && Al(
          /* @__PURE__ */ y(ve, { children: [
            /* @__PURE__ */ o(
              vc,
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
                groupAccentColor: R,
                activeForegroundColor: N,
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
                showProfile: W,
                userName: ee,
                userEmail: $,
                userRole: B,
                userAvatar: C,
                showNotifications: j,
                notificationCount: Z,
                onNotificationsClick: hl ? wo : te,
                notificationsTriggerProps: xl,
                notificationsOpen: Ze.open,
                whatsNewCount: J,
                onProfileClick: oe,
                onAiUsageClick: me,
                menuItems: T,
                onLogout: Sl,
                theme: Ne,
                showThemeToggler: tt,
                onThemeToggle: mn
              }
            ),
            (z == null ? void 0 : z.show) && !Ge && /* @__PURE__ */ o($n, { ...z })
          ] })
        ),
        s && !w && !Oe && !fe && // The fixed rail: a permanent drawer, its column fixed
        // to the window's left edge
        /* @__PURE__ */ o(
          "div",
          {
            "data-slot": "rail-drawer",
            className: v(
              "lw:z-[2] lw:shrink-0",
              Ee
            ),
            style: {
              width: Ve,
              ...X
            },
            children: /* @__PURE__ */ y(
              "aside",
              {
                "data-slot": "rail-drawer-paper",
                className: "lw:fixed lw:top-0 lw:left-0 lw:z-[1200] lw:flex lw:h-full lw:flex-col lw:overflow-y-auto lw:px-3 lw:pt-4",
                style: {
                  width: Ve,
                  backgroundColor: K
                },
                children: [
                  /* @__PURE__ */ o("div", { className: "lw:mb-3 lw:flex lw:justify-center", children: /* @__PURE__ */ o(
                    Hn,
                    {
                      logo: as,
                      appName: l,
                      onClick: vn,
                      menuOpen: yn,
                      color: S ?? Ae,
                      testId: "sidebar-header-brand"
                    }
                  ) }),
                  Nn("popover"),
                  /* @__PURE__ */ y("div", { className: "lw:mt-2 lw:flex lw:min-h-0 lw:flex-auto lw:flex-col lw:overflow-y-auto", children: [
                    /* @__PURE__ */ o(
                      ki,
                      {
                        mainLinks: t,
                        secondaryLinks: n,
                        activePath: F,
                        onLinkClick: L,
                        accentColor: H,
                        surfaceBackgroundColor: K,
                        railShowTitles: r
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
        s && w && /* @__PURE__ */ o(
          Fo,
          {
            open: wl,
            onOpenChange: bt,
            children: /* @__PURE__ */ y(
              Wn,
              {
                side: Me ? "bottom" : "left",
                "aria-label": "Navigation",
                srTitle: "Navigation",
                overlayClassName: "lw:z-[1201]",
                className: v(
                  "lw:z-[1201] lw:overflow-y-auto lw:border-0",
                  Me ? "lw:max-h-[min(80vh,640px)] lw:rounded-t-2xl lw:pb-[env(safe-area-inset-bottom,0px)]" : "lw:max-w-[85vw]"
                ),
                style: {
                  backgroundColor: xe
                },
                children: [
                  Me && // Grab handle, marking the sheet as one that closes downwards
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
                      onLinkClick: (D) => {
                        L == null || L(D), bt(!1);
                      },
                      onLinkAction: () => bt(!1),
                      collapsed: !1,
                      expandedWidth: Me ? "100%" : Hc,
                      activeAccentColor: H,
                      activeBackgroundColor: ce,
                      groupArrowColor: Re,
                      groupAccentColor: R,
                      activeForegroundColor: N,
                      foregroundColor: ge,
                      surfaceBackgroundColor: xe,
                      topInsetPx: Me ? 8 : 0,
                      topContent: Me ? void 0 : Nn("full"),
                      footer: Me ? void 0 : fo(!1)
                    }
                  ),
                  (z == null ? void 0 : z.show) && /* @__PURE__ */ o($n, { ...z })
                ]
              }
            )
          }
        ),
        Me && Gt && /* @__PURE__ */ o(
          ji,
          {
            open: fl,
            onClose: () => so(!1),
            search: Gt
          }
        ),
        Me && /* @__PURE__ */ o(
          Ui,
          {
            ..._l,
            pinnedLinks: m,
            activePath: F,
            onLinkClick: L,
            onMenuClick: s ? () => bt(!0) : void 0,
            menuOpen: wl,
            onSearchClick: Gt ? () => so(!0) : void 0,
            searchOpen: fl,
            showAssistant: at,
            assistantLabel: to,
            onAssistantClick: qe,
            assistantActive: ft,
            showProfile: W,
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
            className: v(
              "lw-content-padding lw:grow",
              we
            ),
            style: {
              ...Rs,
              // Where sticky page elements should pin (below the mobile bar)
              "--lumora-sticky-top": w ? `${Dn}px` : "0px",
              padding: "var(--lumora-content-padding)",
              width: Ve ? `calc(100% - ${Ve}px)` : "100%",
              marginTop: w ? `${Dn}px` : 0,
              // Keep the last content clear of the bottom bar
              ...Me && {
                paddingBottom: `calc(var(--lumora-content-padding) + ${ml})`
              },
              backgroundColor: K,
              ...ae
            },
            children: e
          }
        ),
        ut && /* @__PURE__ */ o(
          yi,
          {
            open: vl,
            variant: yl,
            position: hn,
            width: kt,
            sidebarWidthPx: Ve,
            bottomOffsetPx: at && Lt === "floating" ? Xc : 0,
            fullScreen: w,
            fullScreenBottom: Me ? ml : "0px",
            onClose: eo,
            children: /* @__PURE__ */ o(ut, {})
          }
        ),
        at && Lt === "floating" && !Me && /* @__PURE__ */ o(
          ql,
          {
            variant: "floating",
            rightOffsetPx: xs,
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
            onOpenChange: (D) => {
              D || ao();
            },
            children: /* @__PURE__ */ o(
              Wn,
              {
                ...it.contentProps,
                onMouseOver: Le && it.openedByHover ? gt.rootProps.onMouseOver : void 0,
                onOpenAutoFocus: (D) => {
                  it.openedByHover && D.preventDefault();
                },
                side: ct ? "left" : "right",
                srTitle: "Updates",
                className: ct ? "lw:overflow-hidden lw:rounded-lg lw:border-0" : "lw:overflow-hidden lw:rounded-l-lg lw:border-0",
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
}, sd = jc, Pe = {
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
    const s = parseInt(l[1], 16);
    return `rgba(${s >> 16 & 255}, ${s >> 8 & 255}, ${s & 255}, ${t})`;
  }
  return e;
}, He = (e) => `${e / 16}rem`, re = (...e) => [
  `${e[0]}px ${e[1]}px ${e[2]}px ${e[3]}px rgba(0,0,0,0.2)`,
  `${e[4]}px ${e[5]}px ${e[6]}px ${e[7]}px rgba(0,0,0,0.14)`,
  `${e[8]}px ${e[9]}px ${e[10]}px ${e[11]}px rgba(0,0,0,0.12)`
].join(","), Yc = [
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
], ad = (e) => {
  const t = e === "dark", n = [...Yc];
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
  Mo as CollapsibleSidebar,
  ld as FullBleedSection,
  Ja as Kbd,
  ri as LumoraShellSkeleton,
  sd as LumoraWrapper,
  cn as clearAuthTokens,
  sd as default,
  rd as getAuthErrorMessage,
  an as getAuthTokens,
  ii as getCurrentUser,
  ad as getDesignTokens,
  ai as isAuthenticated,
  Do as logAuthError,
  Wr as storeAuthTokens
};
