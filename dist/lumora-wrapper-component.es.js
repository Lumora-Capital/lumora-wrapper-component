import { jsx as o, jsxs as E, Fragment as ve } from "react/jsx-runtime";
import { ChevronRightIcon as Cs, ChevronUpIcon as Os, ChevronDownIcon as Is, SparklesIcon as $s, BellIcon as dr, SettingsIcon as ks, LogOutIcon as ur, MenuIcon as wr, SearchIcon as Ho, CheckIcon as Ls, SunMoonIcon as Ds, SunIcon as Ms, MoonIcon as Ps } from "lucide-react";
import * as c from "react";
import { useState as Xe, useCallback as po, useRef as Sn, useEffect as Vt, useMemo as Fs, useLayoutEffect as Bs } from "react";
import { clsx as zs } from "clsx";
import { extendTailwindMerge as Hs } from "tailwind-merge";
import { Tooltip as Tt, Slot as Ws, Popover as zn, DropdownMenu as Ot, Dialog as Zt } from "radix-ui";
import { createPortal as fr } from "react-dom";
import Cl from "axios";
import { cva as Gs } from "class-variance-authority";
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
}, qe = () => {
  const e = c.useContext(mr), t = c.useSyncExternalStore(
    js,
    Ks,
    () => !1
  );
  return e ? e === "dark" : t;
}, un = () => ({
  "data-lw-scope": "",
  "data-lw-theme": qe() ? "dark" : "light"
}), pr = c.forwardRef(({ className: e, sideOffset: t = 4, arrow: n = !1, children: l, ...r }, s) => {
  const i = un();
  return /* @__PURE__ */ o(Tt.Portal, { children: /* @__PURE__ */ E(
    Tt.Content,
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
          Tt.Arrow,
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
function Ye({
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
    Tt.Provider,
    {
      delayDuration: a,
      disableHoverableContent: g,
      children: /* @__PURE__ */ E(
        Tt.Root,
        {
          open: p || m ? !1 : s ?? h,
          onOpenChange: S,
          children: [
            /* @__PURE__ */ o(Tt.Trigger, { asChild: !0, children: t }),
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
    Ye,
    {
      ...n,
      open: l,
      onOpenChange: (d) => {
        d && (!s.current || i.current) || (r(d), t == null || t(d));
      },
      children: u
    }
  );
}, Dn = Ys, Io = !1, It = (e) => e.button === 0 && !e.metaKey && !e.ctrlKey && !e.shiftKey && !e.altKey, At = (e) => {
  var t;
  return !!((t = e.subitems) != null && t.length);
}, _t = (e, t) => e ? `${e}/${t.text}` : t.text, rt = (e, t) => {
  var n;
  return t ? e.path && t === e.path ? !0 : ((n = e.subitems) == null ? void 0 : n.some((l) => rt(l, t))) ?? !1 : !1;
}, Ke = (e, t) => !!(t && e.path === t), Wo = (e, t) => (e ?? []).flatMap((n) => {
  const l = n.icon ?? t;
  return At(n) ? Wo(n.subitems, l) : n.path ? [{ sub: n, icon: l }] : [];
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
}, at = (e, t) => {
  const n = Xn(e);
  return n ? `rgba(${n[0]}, ${n[1]}, ${n[2]}, ${t})` : e;
}, Xn = (e) => {
  let t = e.trim().replace(/^#/, "");
  if (t.length === 3 && (t = t.split("").map((l) => l + l).join("")), t.length !== 6 || /[^0-9a-fA-F]/.test(t))
    return null;
  const n = parseInt(t, 16);
  return [n >> 16 & 255, n >> 8 & 255, n & 255];
}, hr = (e) => e.replace(/_/g, " ").split(/\s+/).filter(Boolean).join(" ").toUpperCase(), Go = (e) => e ? "rgba(255, 255, 255, 0.12)" : "rgba(15, 23, 42, 0.1)", qs = (e) => e ? "0 12px 32px -8px rgba(0, 0, 0, 0.6)" : "0 12px 32px -8px rgba(15, 23, 42, 0.18), 0 2px 6px rgba(15, 23, 42, 0.06)", Vs = "lw-tile-in", Ie = "lw-motion-none", gr = "lw-motion-fade", br = "lw-motion-fade-fast", tt = 6, Uo = "9, 193, 174", xr = c.createContext(
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
    boxShadow: `${qs(e)}, 0 0 0 1px ${Go(e)}`
  }
}), Ko = (e, t) => ({
  className: "lw:rounded-md lw:border lw:border-solid lw:px-2.5 lw:py-1.5 lw:text-[0.8125rem] lw:leading-[1.4] lw:font-semibold",
  style: {
    color: e ? "#ffffff" : "#0b1f1c",
    backgroundColor: t ?? (e ? "rgb(30, 36, 48)" : "#ffffff"),
    borderColor: Go(e),
    boxShadow: e ? "0 6px 16px -6px rgba(0, 0, 0, 0.6)" : "0 6px 16px -6px rgba(15, 23, 42, 0.2)"
  }
}), vr = (e) => e ? "#ffffff" : "#0b1f1c", jo = "lw-glass-grow", Yo = "lw-content-in", yr = (e, t = Uo, n = `rgba(${t}, 0.2)`) => ({
  // Solid: a flat tint of the accent
  background: `rgba(${t}, ${e ? 0.2 : 0.12})`,
  boxShadow: "none"
}), Er = (e, t, n = "solid") => n === "solid" ? { background: e, boxShadow: "none" } : {
  background: at(e, t ? 0.16 : 0.1),
  boxShadow: `inset 0 0 0 1px ${at(e, 0.45)}`
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
    const l = `inset 0 0 0 1px ${Go(e)}`, r = e ? "rgba(255, 255, 255, 0.06)" : "#ffffff";
    return n({
      bg: e ? "rgba(255, 255, 255, 0.04)" : "#ffffff",
      shadow: l,
      hoverBg: r,
      focusBg: r,
      focusShadow: `${l}, 0 0 0 3px ${t}`
    });
  }
}, Qs = 100, Nr = 80, Mn = 56, Jt = 72, nn = 64, Ae = 44, ko = 24, Yn = 4, st = 8, Sr = 1.4, _r = tt, ea = nn + 2 * st, Rr = { xs: 2, md: "18px" }, ta = ["xs", "sm", "md", "lg", "xl"], na = 8, Il = (e) => typeof e == "number" ? `${e * na}px` : e, Tr = (e) => typeof e == "object" ? Object.fromEntries(
  ta.filter((t) => e[t] !== void 0).map((t) => [
    `--lw-cp-${t}`,
    Il(e[t])
  ])
) : { "--lw-cp-xs": Il(e) }, on = (e, t) => e === "flyout" && (t === "collapsible" || t === "panel"), oa = (e, t, n) => e && on(t, n), Ar = ({
  showSidebar: e,
  isMobile: t,
  sidebarVariant: n,
  sidebarSubmenu: l,
  sidebarAutoHide: r = !1
}) => !e || t ? 0 : n === "rail-labeled" ? Nr : on(l, n) ? r ? 0 : nn + 2 * st : n === "collapsible" || n === "panel" ? Jt : Qs, qn = (e, t) => e ?? (t ? "hsl(220, 30%, 7%)" : "#ffffff"), Cr = (e, t) => e ?? (t ? "hsl(220, 35%, 9%)" : "#f2f9fc"), Or = { stiffness: 320, damping: 24 }, Ir = { stiffness: 320, damping: 28 }, qo = { stiffness: 520, damping: 20 }, Vo = { stiffness: 380, damping: 36 }, Vn = { stiffness: 260, damping: 28 }, la = "cubic-bezier(0.32, 1.28, 0.52, 1)", ra = 420, $l = 60, sa = (() => {
  try {
    return typeof CSS < "u" && typeof CSS.supports == "function" && CSS.supports("animation-timing-function", "linear(0, 1)");
  } catch {
    return !1;
  }
})(), kl = /* @__PURE__ */ new Map(), $e = ({
  stiffness: e,
  damping: t,
  mass: n = 1
}) => {
  const l = `${e}/${t}/${n}`, r = kl.get(l);
  if (r)
    return r;
  if (!sa)
    return { easing: la, duration: ra };
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
}, ln = (e) => !!(e && typeof e.animate == "function"), $t = () => typeof window < "u" && typeof window.matchMedia == "function" && window.matchMedia("(prefers-reduced-motion: reduce)").matches, aa = (e) => {
  !e || typeof e.getAnimations != "function" || e.getAnimations({ subtree: !1 }).forEach((t) => t.cancel());
}, ia = (e, t = 1.14) => {
  if (!ln(e) || $t())
    return;
  const n = $e(qo);
  e.animate(
    [
      { transform: "scale(1)", easing: "cubic-bezier(0.2, 0, 0, 1)" },
      { transform: `scale(${t})`, offset: 0.18, easing: n.easing },
      { transform: "scale(1)" }
    ],
    { duration: Math.round(n.duration / 0.82) }
  );
}, ca = 1.6, $r = 110, rn = 110, da = 6, ot = $e(Vo), ua = (e, t = $r) => e >= t ? 0 : (1 + Math.cos(Math.PI * e / t)) / 2, kr = (e, t) => {
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
  maxScale: i = ca,
  reach: a = $r,
  carrierSelector: u,
  spacing: d = 0,
  hoveredOnly: p = !1,
  boundsRef: f
}) => {
  const g = c.useRef(0), m = c.useRef(
    /* @__PURE__ */ new WeakMap()
  ), h = c.useRef(/* @__PURE__ */ new Set()), _ = c.useRef(null), S = (A) => {
    var k;
    _.current !== A && ((k = _.current) == null || k.removeAttribute("data-dock-hovered"), A == null || A.setAttribute("data-dock-hovered", ""), _.current = A);
  }, v = c.useRef(/* @__PURE__ */ new Set()), x = s ? `, ${s}` : "", R = p ? `${ot.duration}ms ${ot.easing}` : `${rn}ms ease-out`, $ = (A) => u ? A.closest(u) : null, N = (A) => {
    const [k = "0", O = "0"] = A.split(" ").filter(Boolean);
    return n === "x" ? parseFloat(k) || 0 : parseFloat(O) || 0;
  }, b = (A) => {
    const k = $(A);
    if (!k)
      return 0;
    const O = getComputedStyle(k).translate;
    return N(
      O && O !== "none" ? O : k.style.translate
    );
  }, T = (A, k) => {
    var oe;
    const Y = (n === "x" ? A.offsetWidth : A.offsetHeight) * (Number(A.style.scale) || 1) / 2, G = C(A) + N(((oe = $(A)) == null ? void 0 : oe.style.translate) ?? "");
    return Math.max(0, Math.abs(k - G) - Y);
  }, C = (A) => {
    const k = A.getBoundingClientRect();
    return (n === "x" ? k.left + k.width / 2 : k.top + k.height / 2) - b(A);
  }, X = (A) => {
    const k = A.getBoundingClientRect();
    return Array.from(A.querySelectorAll(l)).filter((O) => {
      var Z;
      const Y = (Z = O.parentElement) == null ? void 0 : Z.closest(l);
      if (Y && A.contains(Y))
        return !1;
      const G = O.getBoundingClientRect(), oe = C(O), fe = n === "x" ? oe : G.left + G.width / 2, K = n === "x" ? G.top + G.height / 2 : oe;
      return G.width > 0 && fe >= k.left && fe <= k.right && K >= k.top && K <= k.bottom;
    }).map((O) => ({
      item: O,
      glyph: r ? O.querySelector(r) : O
    })).filter(
      (O) => O.glyph !== null
    );
  }, L = (A, k) => {
    if (k === A)
      return i;
    let O = m.current.get(k);
    if (O === void 0) {
      const oe = Number(k.style.scale) || 1, fe = k.getBoundingClientRect();
      O = { width: fe.width / oe, height: fe.height / oe }, m.current.set(k, O);
    }
    if (!(O.width > 0 && O.height > 0))
      return 1;
    const Y = A.getBoundingClientRect(), G = Math.min(
      Y.width / O.width,
      Y.height / O.height
    );
    return Math.max(1, Math.min(G, i));
  }, F = (A) => {
    const k = f == null ? void 0 : f.current;
    return k != null && k.contains(A) ? kr(A, k) : 1 / 0;
  }, D = () => {
    var A, k, O, Y;
    cancelAnimationFrame(g.current), h.current.forEach((G) => {
      G.style.transition = `scale ${ot.duration}ms ${ot.easing}${x}`, G.style.scale = "";
    }), h.current.clear(), S(null), v.current.forEach((G) => {
      G.style.transition = `translate ${ot.duration}ms ${ot.easing}`, G.style.translate = "", G.style.removeProperty("--dock-scale");
    }), v.current.clear(), (A = e.current) == null || A.style.setProperty(
      "--dock-scale-timing",
      `${ot.duration}ms ${ot.easing}`
    ), (k = e.current) == null || k.style.removeProperty("--dock-spread"), (O = e.current) == null || O.style.removeProperty("--dock-max-scale"), (Y = e.current) == null || Y.style.removeProperty("--dock-active-scale");
  }, W = (A, k, O) => {
    const Y = n === "x" ? k : O, G = X(A).map(({ item: K, glyph: Z }) => {
      const de = C(K), Q = p ? K === _.current ? 1 : 0 : ua(Math.abs(Y - de), a), ae = 1 + (Math.max(1, Math.min(L(K, Z), F(Z))) - 1) * Q;
      Z.style.transition = `scale ${R}${x}`, ae > 1.001 ? (Z.style.scale = ae.toFixed(3), h.current.add(Z)) : h.current.has(Z) && (Z.style.scale = "", h.current.delete(Z));
      const pe = n === "x" ? K.offsetWidth : K.offsetHeight, ye = (ae - 1) * pe + 2 * d * Q;
      return { item: K, centre: de, scale: ae, growth: ye };
    });
    A.style.setProperty("--dock-scale-timing", R), A.style.setProperty(
      "--dock-max-scale",
      Math.max(1, ...G.map(({ scale: K }) => K)).toFixed(3)
    );
    const oe = G.find(({ item: K }) => K.dataset.active === "true");
    if (A.style.setProperty(
      "--dock-active-scale",
      ((oe == null ? void 0 : oe.scale) ?? 1).toFixed(3)
    ), !u)
      return;
    const fe = G.reduce((K, { growth: Z }) => K + Z, 0);
    A.style.setProperty("--dock-spread", `${fe.toFixed(1)}px`), G.forEach(({ item: K, centre: Z, scale: de, growth: Q }) => {
      const ne = $(K);
      if (!ne)
        return;
      const ae = G.reduce(
        (pe, ye) => ye.centre < Z ? pe + ye.growth : pe,
        Q / 2
      );
      ne.style.transition = `translate ${R}`, Math.abs(ae) > 0.1 || de > 1.001 ? (ne.style.translate = n === "x" ? `${ae.toFixed(1)}px 0` : `0 ${ae.toFixed(1)}px`, ne.style.setProperty("--dock-scale", de.toFixed(3)), v.current.add(ne)) : v.current.has(ne) && (ne.style.translate = "", ne.style.removeProperty("--dock-scale"), v.current.delete(ne));
    });
  }, te = (A) => {
    if (A.pointerType && A.pointerType !== "mouse" || $t())
      return;
    const k = A.currentTarget, { clientX: O, clientY: Y } = A;
    cancelAnimationFrame(g.current), g.current = requestAnimationFrame(() => {
      const G = k.getBoundingClientRect(), oe = n === "x" ? Y : O, [fe, K] = n === "x" ? [G.top, G.bottom] : [G.left, G.right];
      if (oe < fe || oe > K) {
        D();
        return;
      }
      if (p) {
        const Z = n === "x" ? O : Y, de = _.current;
        if (!(de && k.contains(de) && T(de, Z) <= da)) {
          let ne = null, ae = 1 / 0;
          X(k).forEach(({ item: pe }) => {
            const ye = T(pe, Z);
            ye < ae && (ne = pe, ae = ye);
          }), ne && S(ne);
        }
      }
      W(k, O, Y);
    });
  }, B = (A) => {
    const k = e.current;
    if (!t || !k || $t())
      return;
    p && S(A);
    const O = A.getBoundingClientRect();
    W(k, O.left + O.width / 2, O.top + O.height / 2);
  };
  return c.useEffect(() => {
    t || D();
  }, [t]), c.useEffect(() => () => cancelAnimationFrame(g.current), []), {
    containerProps: t ? { onPointerMove: te, onPointerLeave: D, onScrollCapture: D } : {},
    swellOn: B,
    settle: D
  };
}, sn = "data-rail-item", Dr = `[${sn}], button, [role="button"]`, wn = c.createContext(!1), Zo = () => {
  const e = c.useContext(wn), t = qe(), n = c.useContext(Kn);
  if (!e)
    return {};
  const l = Ko(t, n);
  return {
    arrow: !1,
    contentClassName: l.className,
    contentStyle: l.style,
    sideOffset: 6
  };
}, Ct = $e(Vo), Jo = ({
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
    const T = b.getBoundingClientRect(), C = N.getBoundingClientRect(), X = l ?? T.width, L = l ?? T.height, F = {
      top: Math.round(T.top - C.top + (T.height - L) / 2),
      left: Math.round(T.left - C.left + (T.width - X) / 2),
      width: Math.round(X),
      height: Math.round(L)
    };
    p(
      (D) => D && D.visible && D.top === F.top && D.left === F.left && D.width === F.width && D.height === F.height ? D : { ...F, visible: !0, instant: !(D != null && D.visible) }
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
    if (f.current = d.top, !ln(N) || $t() || b === null || d.instant)
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
      { duration: Ct.duration, easing: "ease-out" }
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
          transition: d.instant ? `opacity 160ms ease, scale var(--dock-scale-timing, ${rn}ms ease-out)` : `translate ${Ct.duration}ms ${Ct.easing}, width 220ms ease, height 220ms ease, opacity 160ms ease, scale var(--dock-scale-timing, ${rn}ms ease-out)`
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
}, wa = (e, t, n = null) => {
  const l = Jo({
    enabled: e,
    isDark: t,
    selector: Dr,
    // The rail's buttons exactly, so the hover sits on the item
    size: Ae,
    radius: tt,
    pinSelector: `[${sn}][data-open="true"]`,
    pinKey: n
  });
  return {
    ...l,
    lens: l.lens ? c.cloneElement(l.lens, {
      "data-testid": "sidebar-rail-lens"
    }) : null
  };
}, fa = (e, t) => {
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
        `[${sn}][data-active="true"]`
      );
      if (!g) {
        i(
          (h) => h != null && h.visible ? { ...h, visible: !1 } : h
        );
        return;
      }
      const m = fa(g, f);
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
    if (a.current = s.top, f === null || s.instant || !ln(p) || $t())
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
      { duration: Ct.duration, easing: "ease-out" }
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
        borderRadius: `${tt}px`,
        width: s.width,
        height: s.height,
        translate: `${s.left}px ${s.top}px`,
        // Swells with its item (useDockMagnify); fades in and out at
        // its item's size, never popping from smaller
        scale: "var(--dock-active-scale, 1)",
        opacity: s.visible ? 1 : 0,
        // Its scale on the item's own timing, swelling and settling
        // (useDockMagnify), so the two move as one
        transition: s.instant ? `opacity 160ms ease, scale var(--dock-scale-timing, ${rn}ms ease-out)` : `translate ${Ct.duration}ms ${Ct.easing}, width 220ms ease, height 220ms ease, opacity 160ms ease, scale var(--dock-scale-timing, ${rn}ms ease-out)`
      }
    }
  ) : null };
}, Oe = 52, ma = 2, pa = 10, ha = Oe / 2, go = "[data-flyout-tile]", Qo = 4, el = 32, Lo = el + Qo, ga = 104, Xt = 24, Mr = "background 160ms ease, color 160ms ease, transform 120ms ease", ba = 10, Pr = 10, Dl = Pr + 2, xa = 18, Ml = 1.08, va = (e) => {
  for (let t = e.parentElement; t; t = t.parentElement) {
    const { overflowY: n } = getComputedStyle(t);
    if (n === "auto" || n === "scroll")
      return t;
  }
  return null;
}, ya = (e) => {
  const t = va(e);
  if (!t)
    return Ml;
  const n = kr(e, t);
  return Math.min(Ml, n / Math.min(n, Sr));
}, Ea = 1190, Na = 1195, Sa = 1355, Pl = 120, _a = 220, Fl = 200, Bl = 8, zl = $e(Or), je = $e(Vo), Hl = $e(Vn), Wl = 8192, Ra = ({ left: e, top: t, width: n, height: l, radius: r }) => {
  const s = Math.min(r, n / 2, l / 2), i = e + n, a = t + l, u = `A ${s} ${s} 0 0 1`;
  return `path(evenodd, 'M 0 0 H ${Wl} V ${Wl} H 0 Z M ${e + s} ${t} H ${i - s} ${u} ${i} ${t + s} V ${a - s} ${u} ${i - s} ${a} H ${e + s} ${u} ${e} ${a - s} V ${t + s} ${u} ${e + s} ${t} Z')`;
}, Ta = ({
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
  var ke;
  const h = qe(), _ = un(), S = !!(e && n), v = c.useRef(null);
  e && t && (v.current = { group: e, key: t });
  const x = v.current, R = c.useRef(null);
  n && (R.current = { anchor: n, railEdge: l });
  const [$, N] = c.useState(S);
  S && !$ && N(!0);
  const [b, T] = c.useState(S);
  S && !b && T(!0), c.useEffect(() => {
    if (S)
      return;
    const I = setTimeout(() => T(!1), Fl);
    return () => clearTimeout(I);
  }, [S]);
  const C = c.useRef(null), [X, L] = c.useState({
    x: 0,
    y: 0
  }), F = c.useCallback(() => {
    const I = R.current, q = C.current;
    if (!I || !q)
      return;
    const H = I.anchor.getBoundingClientRect(), j = q.offsetHeight, J = Math.round(I.railEdge + ba), ie = H.top + H.height / 2 - j / 2, Ee = window.innerHeight - j - Bl, Ne = Math.round(
      Math.max(Bl, Math.min(ie, Ee))
    );
    L((_e) => _e.x === J && _e.y === Ne ? _e : { x: J, y: Ne });
  }, []);
  c.useLayoutEffect(() => {
    if (!$)
      return;
    F(), window.addEventListener("resize", F), window.addEventListener("scroll", F, !0);
    const I = typeof ResizeObserver > "u" || !C.current ? null : new ResizeObserver(F);
    return I && C.current && I.observe(C.current), () => {
      window.removeEventListener("resize", F), window.removeEventListener("scroll", F, !0), I == null || I.disconnect();
    };
  }, [$, F, n, l, t]), c.useEffect(() => {
    if (!n)
      return;
    const I = ya(n);
    I > 1.001 && ia(n, I);
  }, [n]);
  const [D, W] = c.useState(!1);
  c.useEffect(() => {
    if (!S) {
      W(!1);
      return;
    }
    let I = 0;
    const q = requestAnimationFrame(() => {
      I = requestAnimationFrame(() => W(!0));
    });
    return () => {
      cancelAnimationFrame(q), cancelAnimationFrame(I);
    };
  }, [S]);
  const te = c.useMemo(
    () => x ? Wo(x.group.subitems, x.group.icon) : [],
    [x]
  ), B = c.useRef(null), A = Lr(B, {
    enabled: S,
    axis: "x",
    itemSelector: go,
    transition: Mr,
    // A bigger swell than the rail's: the tiles are the destination
    maxScale: ma,
    // The neighbours make room as it grows, and a little more
    carrierSelector: '[role="menuitem"]',
    spacing: pa,
    // Only the tile under the pointer swells; the rest keep their size
    hoveredOnly: !0
  }), k = c.useRef(void 0), O = c.useCallback((I) => {
    var J;
    (J = k.current) == null || J.call(k), k.current = void 0;
    const q = I == null ? void 0 : I.parentElement;
    if (!I || !q || typeof MutationObserver > "u")
      return;
    const H = () => {
      const ie = I.offsetLeft - I.offsetWidth / 2, Ee = ie + I.offsetWidth;
      let Ne = 0;
      const _e = (me, be, he) => {
        me < Ee && me + be > ie && (Ne = Math.max(Ne, -he - Dl));
      };
      q.querySelectorAll(go).forEach((me) => {
        const be = parseFloat(me.style.scale) || 1, he = (be - 1) * Oe / 2, ue = me.closest('[role="menuitem"]'), Be = parseFloat((ue == null ? void 0 : ue.style.translate) ?? "") || 0;
        _e(
          me.offsetLeft + Be - he,
          be * Oe,
          me.offsetTop - he
        );
        const ze = ue == null ? void 0 : ue.querySelector("[data-flyout-name]"), nt = ze == null ? void 0 : ze.parentElement;
        ze && nt && me.dataset.flyoutNameSide === "above" && _e(
          nt.offsetLeft + Be,
          ze.offsetWidth,
          nt.offsetTop + ze.offsetTop - he
        );
      });
      const Re = Ne > 0 ? `0 ${(-Ne).toFixed(1)}px` : "";
      I.style.translate !== Re && (I.style.translate = Re);
    }, j = new MutationObserver(H);
    j.observe(q, {
      subtree: !0,
      attributes: !0,
      attributeFilter: ["style"]
    }), k.current = () => j.disconnect();
  }, []), Y = c.useRef([]), [G, oe] = c.useState([]);
  c.useLayoutEffect(() => {
    const I = () => {
      const H = te.map(
        (j, J) => {
          var ie;
          return ((ie = Y.current[J]) == null ? void 0 : ie.offsetWidth) ?? 0;
        }
      );
      oe(
        (j) => j.length === H.length && j.every((J, ie) => J === H[ie]) ? j : H
      );
    };
    if (I(), typeof ResizeObserver > "u")
      return;
    const q = new ResizeObserver(I);
    return Y.current.slice(0, te.length).forEach((H) => H && q.observe(H)), () => q.disconnect();
  }, [te]);
  const fe = Ca(G, te.length), K = c.useRef([]), Z = te.findIndex(
    ({ sub: I }) => Ke(I, s)
  ), [de, Q] = c.useState(0);
  c.useEffect(() => {
    Q(Math.max(Z, 0));
  }, [t]), c.useEffect(() => {
    if (!S || !i)
      return;
    const I = setTimeout(() => {
      var q;
      return (q = K.current[0]) == null ? void 0 : q.focus();
    });
    return () => clearTimeout(I);
  }, [S, i, t]);
  const ne = (I) => {
    var H;
    const q = Math.max(0, Math.min(I, te.length - 1));
    Q(q), (H = K.current[q]) == null || H.focus();
  }, ae = (I, q) => {
    var H;
    switch (I.key) {
      case "ArrowRight":
        ne(q + 1);
        break;
      case "ArrowLeft":
        q === 0 ? u(!0) : ne(q - 1);
        break;
      case " ":
        (H = K.current[q]) == null || H.click();
        break;
      case "Home":
        ne(0);
        break;
      case "End":
        ne(te.length - 1);
        break;
      case "Tab":
        u(!0);
        break;
      default:
        return;
    }
    I.preventDefault();
  }, pe = "var(--lw-text-primary)", ye = h ? "#ffffff" : p;
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
          ...r ? { clipPath: Ra(r) } : {},
          zIndex: Ea,
          animationDuration: `${S ? _a : Fl}ms`,
          // The flyout's only surface: a wash from the rail across
          // the page, strongest behind the tiles, fading to the right
          background: h ? "linear-gradient(90deg, rgba(24, 30, 40, 0.97) 0%, rgba(24, 30, 40, 0.9) 30%, rgba(24, 30, 40, 0.6) 55%, rgba(24, 30, 40, 0.2) 100%)" : "linear-gradient(90deg, rgba(236, 239, 243, 0.88) 0%, rgba(236, 239, 243, 0.78) 30%, rgba(236, 239, 243, 0.45) 55%, rgba(236, 239, 243, 0.1) 100%)"
        }
      }
    ) : null,
    $ && typeof document < "u" ? fr(
      /* @__PURE__ */ o(
        "div",
        {
          ref: C,
          ..._,
          className: y(
            "lw:fixed lw:top-0 lw:left-0",
            Ie
          ),
          style: {
            zIndex: (ke = R.current) != null && ke.anchor.closest(
              '[data-auto-hide="true"]'
            ) ? Sa : Na,
            transform: `translate(${X.x}px, ${X.y}px)`,
            transition: D ? `transform ${je.duration}ms ${je.easing}` : "none"
          },
          children: /* @__PURE__ */ o(
            Aa,
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
                  onBlur: (I) => {
                    I.currentTarget.contains(
                      I.relatedTarget
                    ) || A.settle();
                  },
                  className: y(
                    "lw:relative",
                    Ie
                  ),
                  style: {
                    width: fe.width,
                    height: Lo + Oe + Qo + el,
                    // The panel stretches as the dock pushes
                    // the pages along, as the Dock's shelf does
                    marginRight: "var(--dock-spread, 0px)",
                    // In step with the pages it makes room for
                    transition: `margin-right var(--dock-scale-timing, ${je.duration}ms ${je.easing})`
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
                          Ie
                        ),
                        style: {
                          marginBottom: Dl,
                          transition: `translate var(--dock-scale-timing, ${je.duration}ms ${je.easing})`,
                          // The pages' own name colour
                          color: vr(h)
                        },
                        children: x.group.text
                      }
                    ),
                    te.map(({ sub: I, icon: q }, H) => /* @__PURE__ */ o(
                      Br,
                      {
                        ref: (j) => {
                          K.current[H] = j;
                        },
                        nameRef: (j) => {
                          Y.current[H] = j;
                        },
                        tileLeft: fe.tiles[H],
                        nameLeft: fe.names[H],
                        sub: I,
                        icon: q,
                        index: H,
                        active: Ke(
                          I,
                          s
                        ),
                        tabIndex: H === de ? 0 : -1,
                        onClick: (j) => {
                          It(j) && (j.preventDefault(), a(I.path), u());
                        },
                        onKeyDown: (j) => ae(j, H),
                        onFocus: (j) => {
                          Q(H);
                          const J = j.currentTarget.querySelector(
                            go
                          );
                          J && j.currentTarget.matches(
                            ":focus-visible"
                          ) && A.swellOn(J);
                        },
                        accentColor: p,
                        activeBackgroundColor: f,
                        activeForegroundColor: g,
                        labelColor: pe,
                        iconColor: ye,
                        surface: m,
                        isDark: h
                      },
                      I.path
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
}, Aa = ({
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
    if (aa(u), e) {
      ln(u) && !$t() && u.animate(
        [
          { opacity: 0, transform: "translateX(-8px)" },
          { opacity: 1, transform: "none" }
        ],
        { duration: Hl.duration, easing: Hl.easing }
      );
      return;
    }
    if (!ln(u)) {
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
}, Fr = (e) => e % 2 === 1, Ca = (e, t) => {
  const n = [], l = [];
  let r = -Xt, s = -Xt, i = -Xt;
  for (let a = 0; a < t; a += 1) {
    const u = e[a] || Oe, d = Fr(a), p = d ? s : i, f = Math.max(
      r + Xt + Oe / 2,
      p + Xt + u / 2
    );
    r = f + Oe / 2, d ? s = f + u / 2 : i = f + u / 2, n.push(Math.round(f - Oe / 2)), l.push(Math.round(f - u / 2));
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
    const R = Fr(s), $ = Ko(v, S), N = vr(v), b = {
      animation: `${Vs} ${zl.duration}ms ${zl.easing} both`,
      animationDelay: `${s * xa}ms`
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
              style: { left: t, width: Oe }
            }
          ),
          /* @__PURE__ */ o(
            "span",
            {
              "data-flyout-tile": "",
              "data-flyout-name-side": R ? "above" : "below",
              className: y(
                $.className,
                "lw:pointer-events-auto lw:absolute lw:box-border lw:flex lw:items-center lw:justify-center lw:rounded-full lw:p-0",
                "lw:[&_svg]:size-9 lw:[&_svg]:text-(--lw-tile-icon) lw:[&_svg]:transition-colors lw:[&_svg]:duration-150",
                // A host's own glyph (an image in a `role="img"` box)
                // takes the same size
                "lw:[&_[role=img]]:size-9 lw:[&_[role=img]>img]:size-9",
                !i && "lw:group-has-[[data-dock-hovered]]/tile:bg-(--lw-tile-hover)! lw:[[role=menu]:not(:has([data-dock-hovered]))_[role=menuitem]:hover_&]:bg-(--lw-tile-hover)! lw:group-focus-visible/tile:bg-(--lw-tile-hover)!",
                "lw:group-focus-visible/tile:outline-2 lw:group-focus-visible/tile:outline-offset-2 lw:group-focus-visible/tile:outline-(--lw-tile-outline) lw:group-focus-visible/tile:outline-solid",
                "lw:group-active/tile:[transform:scale(0.94)] lw:motion-reduce:group-active/tile:[transform:none]",
                Ie
              ),
              style: {
                ...$.style,
                // Cards of their own: a surface and a soft shadow, no
                // edge, lifted a little more than a resting label
                border: "none",
                boxShadow: v ? "0 1px 2px rgba(0, 0, 0, 0.5), 0 8px 20px -6px rgba(0, 0, 0, 0.7)" : "0 1px 2px rgba(15, 23, 42, 0.08), 0 8px 20px -6px rgba(15, 23, 42, 0.28)",
                left: t,
                top: Lo,
                width: Oe,
                height: Oe,
                borderRadius: ha,
                // Grows about its centre, so the row stays level; its
                // name moves aside to clear it (see the name's slot)
                transformOrigin: "center",
                transition: `scale ${je.duration}ms ${je.easing}, ${Mr}`,
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
                Ie
              ),
              style: {
                left: n,
                top: R ? 0 : Lo + Oe + Qo,
                height: el,
                // Held against its own tile, not floating mid-band; a
                // name too long for the band bleeds away from the tile
                alignItems: R ? "flex-end" : "flex-start",
                // Pushed away from its tile by as much as the tile
                // grows towards it (`--dock-scale`, on the page)
                translate: `0 calc((var(--dock-scale, 1) - 1) * ${R ? -Oe / 2 : Oe / 2}px)`,
                transition: `translate var(--dock-scale-timing, ${je.duration}ms ${je.easing})`
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
                    Ie
                  ),
                  style: {
                    maxWidth: ga,
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
const Oa = Ta;
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
      className: y(
        "lw:shrink-0 lw:bg-border",
        e === "horizontal" ? "lw:h-px lw:w-full" : "lw:w-px lw:self-stretch",
        t
      ),
      ...n
    }
  );
}
const Ia = 50, zr = 250, $a = (e) => {
  const [t, n] = c.useState(null), l = c.useRef(t);
  l.current = t;
  const r = c.useRef(/* @__PURE__ */ new Map()), s = c.useRef(null), i = c.useRef(void 0), a = c.useRef(void 0), u = () => {
    clearTimeout(i.current), i.current = void 0;
  }, d = () => {
    clearTimeout(a.current), a.current = void 0;
  }, p = (v, x, R = !1) => {
    u(), d(), n({ key: v, pinned: x, focusFirst: R });
  }, f = c.useCallback((v = !1) => {
    var R, $;
    u(), d();
    const x = (R = l.current) == null ? void 0 : R.key;
    n(null), v && x && (($ = r.current.get(x)) == null || $.focus());
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
    const v = ($) => {
      var b;
      const N = $;
      return N ? (b = s.current) != null && b.contains(N) ? !0 : [...r.current.values()].some((T) => T.contains(N)) : !1;
    }, x = ($) => {
      v($.target) || f();
    }, R = ($) => {
      var N;
      $.key === "Escape" && f(
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
          Ia
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
}, ka = $a, La = 264, Da = 72, Gl = 64, Ma = "lw:outline-none lw:focus:outline-none lw:focus-visible:outline-none", Pa = 16, Fa = 14, Ba = 32, za = 20, Ul = "0.7rem", _n = $e(qo), bo = "var(--lw-hover-wash)", Ha = "#ffffff", Kt = (e, t) => ({
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
}), Rt = c.forwardRef(
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
Rt.displayName = "RowControl";
const xo = "lw:relative lw:flex lw:w-full lw:min-w-0 lw:grow lw:items-center lw:justify-start lw:text-left lw:no-underline lw:transition-colors lw:duration-150 lw:outline-none lw:focus-visible:bg-selected lw:disabled:opacity-40", Rn = "lw:inline-flex lw:shrink-0 lw:text-inherit lw:[&_svg]:size-6", Tn = "lw:my-1 lw:min-w-0 lw:flex-auto", vo = y(
  "lw:relative lw:inline-flex lw:shrink-0 lw:items-center lw:justify-center lw:p-2 lw:transition-[background-color,border-radius,color] lw:duration-150 lw:disabled:opacity-40 lw:[&_svg]:size-6",
  Ma
), ut = ({ text: e, variant: t = "body1", center: n = !1, fontSize: l, fontWeight: r }) => {
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
    Ye,
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
}, Wa = `url("data:image/svg+xml,${encodeURIComponent(
  "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 5 8'><path d='M0.5 0.9L4.1 4L0.5 7.1Z' stroke='black' stroke-width='1' stroke-linejoin='round'/></svg>"
)}")`, Ga = 4, Ua = (e) => Math.max(0, Math.min(Ga, Pn - e)), Xa = ({
  open: e,
  size: t = Pa
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
), An = 600, lt = `${Yn}px`, Pn = (nn - Ae) / 2, Ka = (e) => {
  const t = Math.max(0, e - Pn);
  return {
    paddingLeft: `${Math.max(0, Pn - t)}px`,
    paddingRight: `${Math.max(0, Pn - e)}px`
  };
};
function ja(e, t) {
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
function Ya(e) {
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
function qa(e, t, n) {
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
const Va = ({
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
  flyoutSurfaceColor: $,
  collapsed: N = !1,
  expandedWidth: b = La,
  collapsedWidth: T = Da,
  showLabels: C = !1,
  topInsetPx: X = 0,
  topContent: L,
  footer: F,
  submenuMode: D = "inline"
}) => {
  var Pt;
  const W = qe(), te = c.useContext(Kn), B = D === "flyout" && N && !C, A = ka(B), k = c.useRef(null), O = c.useRef(null), Y = c.useRef(null), G = c.useRef(null);
  qa(G, n, N);
  const oe = ja(G, B), fe = Ya(G), K = wa(B, W, ((Pt = A.state) == null ? void 0 : Pt.key) ?? null), Z = Lr(k, {
    enabled: B,
    axis: "y",
    itemSelector: Dr,
    maxScale: Sr,
    // One button's pitch: the one under the pointer swells, its
    // neighbours only as the pointer crosses over to them
    reach: Ae + Yn,
    // Only 4px of padding at the scroller's ends: the first and last
    // buttons swell less, or the last would scroll the rail
    boundsRef: G,
    transition: `transform ${_n.duration}ms ${_n.easing}, background-color 160ms ease`
  }), de = {
    ...K.containerProps,
    ...Z.containerProps,
    ...B ? {
      onScrollCapture: () => {
        var w, P;
        (P = (w = K.containerProps).onScrollCapture) == null || P.call(w), Z.settle();
      }
    } : {}
  }, Q = h ?? m, ne = Ll({
    enabled: B,
    isDark: W,
    color: Q,
    containerRef: O
  }), ae = Ll({
    enabled: B,
    isDark: W,
    color: Q,
    containerRef: Y
  }), pe = c.useMemo(
    () => e.filter((w) => w.aboveSearch),
    [e]
  ), ye = c.useMemo(
    () => e.filter((w) => !w.aboveSearch),
    [e]
  ), { close: ke } = A;
  c.useEffect(() => {
    ke();
  }, [n, ke]);
  const [I, q] = c.useState(
    {}
  ), H = v ?? $o(Q), j = { bg: Q, fg: H }, J = S ?? tn(m), ie = qn(R, W), Ee = x ?? (W ? "var(--lw-text-primary)" : m), Ne = p ?? ie, _e = f ?? (p ? $o(Ne) : x ?? (W ? Ha : m)), Re = tn(_e), me = (w) => {
    l == null || l(w);
  }, be = (w) => w ? {
    href: w,
    onClick: (P) => {
      It(P) && (P.preventDefault(), me(w));
    }
  } : {}, he = (w, P) => {
    q((ee) => ({ ...ee, [w]: !P }));
  }, ue = (w, P) => I[P] ?? rt(w, n), Be = (w, P) => Kt(
    {
      fg: w ? H : Ee,
      bg: w ? Q : void 0
    },
    w || C ? j : { bg: P }
  ), ze = (w) => {
    const P = Ke(w, n), ee = Be(P, J), z = /* @__PURE__ */ E(
      Rt,
      {
        disabled: !w.path,
        ...be(w.path),
        "data-testid": `sidebar-item-${w.text}`,
        "data-active": P ? "true" : "false",
        "data-selected": P ? "true" : void 0,
        className: y(
          xo,
          "lw:rounded-lg lw:px-3",
          w.subtitle ? "lw:py-2" : "lw:py-2.5",
          // Room for the action button laid over the row's end
          w.action && "lw:pr-12",
          ee.className
        ),
        style: ee.style,
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
                  ut,
                  {
                    text: w.text,
                    fontWeight: An
                  }
                ),
                w.subtitle ? /* @__PURE__ */ o("span", { className: "lw:block lw:opacity-85", children: /* @__PURE__ */ o(
                  ut,
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
      return z;
    const { action: U } = w, V = P ? H : Ee;
    return /* @__PURE__ */ E("div", { className: "lw:relative", children: [
      z,
      /* @__PURE__ */ o(Dn, { title: U.label, side: "right", arrow: !0, children: /* @__PURE__ */ o(
        "button",
        {
          type: "button",
          "aria-label": U.label,
          "data-testid": `sidebar-action-${w.text}`,
          onClick: () => {
            U.onClick(), r == null || r();
          },
          className: y(
            "lw:absolute lw:top-1/2 lw:right-2 lw:inline-flex lw:size-[30px] lw:-translate-y-1/2 lw:items-center lw:justify-center lw:rounded-md lw:border lw:border-solid lw:transition-colors lw:[&_svg]:size-[18px]",
            "lw:hover:bg-(--lw-action-hover-bg)",
            // No lingering outline after a click; a clear ring for keyboard focus
            "lw:focus:outline-none lw:focus-visible:outline-2 lw:focus-visible:outline-offset-1 lw:focus-visible:outline-solid lw:focus-visible:outline-(--lw-action-ring)"
          ),
          style: {
            borderColor: P ? "rgba(255, 255, 255, 0.35)" : J,
            color: V,
            "--lw-action-hover-bg": P ? "rgba(255, 255, 255, 0.15)" : J,
            "--lw-action-ring": V
          },
          children: U.icon
        }
      ) })
    ] }, w.text);
  }, nt = (w) => {
    const P = rt(w, n), ee = Ke(w, n), z = _t("", w), U = ue(w, z), V = Be(ee, J);
    return /* @__PURE__ */ E(
      "div",
      {
        "data-testid": `sidebar-group-${w.text}`,
        className: "lw:rounded-lg",
        style: {
          backgroundColor: P ? J : "transparent"
        },
        children: [
          /* @__PURE__ */ E(
            Rt,
            {
              onClick: () => he(z, U),
              "data-testid": `sidebar-item-${w.text}`,
              "data-active": ee ? "true" : "false",
              "aria-expanded": U,
              className: y(
                xo,
                "lw:rounded-lg lw:px-3 lw:py-2.5",
                V.className
              ),
              style: V.style,
              children: [
                /* @__PURE__ */ o("span", { className: Rn, style: { minWidth: 36 }, children: w.icon }),
                /* @__PURE__ */ o("span", { className: Tn, children: /* @__PURE__ */ o(
                  ut,
                  {
                    text: w.text,
                    fontWeight: An
                  }
                ) }),
                /* @__PURE__ */ o(Xl, { open: U })
              ]
            }
          ),
          U ? /* @__PURE__ */ o(
            "div",
            {
              "data-testid": `sidebar-children-${w.text}`,
              className: "lw:pb-1 lw:animate-in lw:fade-in-0",
              children: w.subitems.map(
                (we) => wt(we, z, 1)
              )
            }
          ) : null
        ]
      },
      w.text
    );
  }, wt = (w, P, ee) => {
    const z = _t(P, w), U = Ba + (ee - 1) * za, V = y(
      xo,
      "lw:mx-1 lw:w-[calc(100%-8px)] lw:rounded-lg lw:py-1.5 lw:pr-4"
    );
    if (At(w)) {
      const ge = rt(w, n), Ce = Ke(w, n), xe = ue(w, z), gt = Be(Ce, bo);
      return /* @__PURE__ */ E("div", { "data-testid": `sidebar-group-${w.text}`, children: [
        /* @__PURE__ */ E(
          Rt,
          {
            onClick: () => he(z, xe),
            "data-testid": `sidebar-subitem-${w.text}`,
            "data-active": ge ? "true" : "false",
            "aria-expanded": xe,
            className: y(V, gt.className),
            style: { ...gt.style, paddingLeft: U },
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
                ut,
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
              (Te) => wt(Te, z, ee + 1)
            )
          }
        ) : null
      ] }, z);
    }
    const we = Ke(w, n), Me = Be(we, bo);
    return /* @__PURE__ */ E(
      Rt,
      {
        disabled: !w.path,
        ...be(w.path),
        "data-testid": `sidebar-subitem-${w.text}`,
        "data-active": we ? "true" : "false",
        "data-selected": we ? "true" : void 0,
        className: y(V, Me.className),
        style: { ...Me.style, paddingLeft: U },
        children: [
          w.icon ? /* @__PURE__ */ o("span", { className: Rn, style: { minWidth: 32 }, children: w.icon }) : null,
          /* @__PURE__ */ o("span", { className: Tn, children: /* @__PURE__ */ o(
            ut,
            {
              text: w.text,
              fontWeight: An
            }
          ) })
        ]
      },
      z
    );
  }, ft = y(
    "lw:rounded-md! lw:[&_svg]:size-6 lw:hover:bg-transparent! lw:active:[transform:scale(0.88)] lw:active:duration-[90ms] lw:motion-reduce:active:[transform:none]",
    Ie
  ), pn = (w) => ({
    ...w ? { backgroundColor: "transparent" } : {},
    transition: `transform ${_n.duration}ms ${_n.easing}, background-color 160ms ease`
  }), hn = Ko(W, te), Lt = (w, P, ee, z, U, V) => {
    const we = !U, Me = C ? Kt(
      {
        fg: z ? H : Ee,
        bg: z ? Q : void 0
      },
      j
    ) : (
      // Icon-only collapsed rail (collapsible variant): original
      // hover — accent when active, else a subtle tint; no
      // foreground change. The glass rail has no hover of its own.
      Kt(
        {
          fg: z ? H : Ee,
          bg: z ? Q : void 0
        },
        B ? void 0 : {
          bg: z ? Q : V != null && V.insideGroup ? bo : J,
          radius: "8px"
        }
      )
    ), ge = B ? Ae : 44, Ce = /* @__PURE__ */ E(
      Rt,
      {
        "aria-label": P,
        disabled: we,
        ...be(U),
        onMouseEnter: B ? A.onRailLeafEnter : void 0,
        ...B ? { [sn]: "" } : {},
        "data-testid": (V == null ? void 0 : V.testId) ?? `sidebar-item-${P}`,
        "data-active": z ? "true" : "false",
        className: y(
          vo,
          Me.className,
          C ? (
            // 8px padding on all sides of the item container.
            "lw:flex lw:h-auto lw:w-full lw:max-w-full lw:flex-col lw:gap-0.5 lw:rounded-lg lw:p-2 lw:[&_svg]:size-[22px]"
          ) : z ? "lw:rounded-lg" : "lw:rounded-full",
          !C && B && ft
        ),
        style: {
          ...Me.style,
          ...C ? {} : { width: ge, height: ge },
          ...!C && B ? pn(z) : {}
        },
        children: [
          ee,
          C ? /* @__PURE__ */ o(
            ut,
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
    return C ? we ? /* @__PURE__ */ o("span", { children: Ce }, w) : /* @__PURE__ */ o(c.Fragment, { children: Ce }, w) : /* @__PURE__ */ o(
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
        children: we ? /* @__PURE__ */ o("span", { children: Ce }) : Ce
      },
      w
    );
  }, eo = (w) => {
    var U;
    const P = rt(w, n), ee = _t("", w), z = ((U = A.state) == null ? void 0 : U.key) === ee;
    return /* @__PURE__ */ o(
      "div",
      {
        "data-testid": `sidebar-group-${w.text}`,
        className: "lw:flex lw:w-full lw:justify-center",
        children: /* @__PURE__ */ o(
          "button",
          {
            type: "button",
            ...A.triggerProps(ee),
            "aria-label": w.text,
            "aria-haspopup": "menu",
            "aria-expanded": z,
            "data-testid": `sidebar-item-${w.text}`,
            "data-active": P ? "true" : "false",
            "data-open": z ? "true" : "false",
            [sn]: "",
            className: y(
              vo,
              ft,
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
              color: P ? H : Ee,
              // Open, the rail's hover lens stays on it (useRailLens)
              // rather than a fill of its own under the lens
              backgroundColor: P ? Q : "transparent",
              ...pn(P),
              "--lw-arrow-right": `${-Ua(oe)}px`,
              "--lw-arrow-bg": _ ?? "currentColor",
              "--lw-arrow-opacity": _ ? 1 : 0.55,
              "--lw-arrow-mask": `${Wa} center / contain no-repeat`
            },
            children: w.icon
          }
        )
      },
      w.text
    );
  }, it = (w) => {
    const P = rt(w, n), ee = Ke(w, n), z = _t("", w), U = ue(w, z), V = Kt(
      {
        fg: ee ? H : Ee,
        bg: ee ? Q : void 0
      },
      C ? j : { bg: ee ? Q : "transparent" }
    ), we = /* @__PURE__ */ E(
      "button",
      {
        type: "button",
        "aria-label": w.text,
        "aria-expanded": U,
        onClick: () => he(z, U),
        "data-testid": `sidebar-item-${w.text}`,
        "data-active": ee ? "true" : "false",
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
            ut,
            {
              text: w.text,
              variant: "caption",
              center: !0,
              fontSize: Ul
            }
          ) : null,
          /* @__PURE__ */ o(Xa, { open: U, size: Fa })
        ]
      }
    ), Me = C ? we : /* @__PURE__ */ o(Dn, { title: w.text, side: "right", arrow: !0, children: we }), ge = Kt(
      { bg: P ? J : void 0 },
      C ? void 0 : { bg: J }
    );
    return /* @__PURE__ */ E(
      "div",
      {
        "data-testid": `sidebar-group-${w.text}`,
        className: y(
          "lw:flex lw:w-full lw:flex-col lw:items-center lw:gap-1 lw:rounded-[10px] lw:py-1",
          ge.className
        ),
        style: ge.style,
        children: [
          Me,
          U ? Wo(w.subitems, w.icon).map(
            ({ sub: Ce, icon: xe }) => Lt(
              Ce.path,
              Ce.text,
              xe,
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
  }, Dt = (w) => /* @__PURE__ */ o("div", { className: "lw:flex lw:w-full lw:justify-center", children: Lt(
    w.text,
    w.subtitle ? `${w.text} · ${w.subtitle}` : w.text,
    w.icon,
    Ke(w, n),
    w.path,
    { testId: `sidebar-item-${w.text}` }
  ) }, w.text), Mt = (w) => At(w) ? B ? eo(w) : N ? it(w) : nt(w) : N ? Dt(w) : ze(w), Ve = (w) => /* @__PURE__ */ o(
    "div",
    {
      className: y(
        "lw:flex lw:w-full lw:flex-col lw:gap-1",
        N ? "lw:items-center" : "lw:items-stretch"
      ),
      children: w.map((P, ee) => {
        const z = (V) => /* @__PURE__ */ o(
          an,
          {
            "data-testid": `sidebar-divider-${V === "before" ? "before-" : ""}${P.text}`,
            className: "lw:self-stretch",
            style: {
              marginBlock: B ? lt : "8px",
              width: "auto"
            }
          }
        ), U = P.dividerAfter && ee < w.length - 1;
        return P.dividerBefore || U ? /* @__PURE__ */ E(c.Fragment, { children: [
          P.dividerBefore ? z("before") : null,
          Mt(P),
          U ? z("after") : null
        ] }, P.text) : Mt(P);
      })
    }
  ), mt = N ? T : b, gn = () => {
    var we, Me;
    const { state: w } = A, P = w ? [...e, ...t].find(
      (ge) => At(ge) && _t("", ge) === w.key
    ) ?? null : null, ee = P ? ((we = k.current) == null ? void 0 : we.getBoundingClientRect().right) ?? T : T, z = P ? ((Me = k.current) == null ? void 0 : Me.closest("[data-rail-surface]")) ?? k.current : null, U = z == null ? void 0 : z.getBoundingClientRect(), V = z && U ? {
      left: U.left,
      top: U.top,
      width: U.width,
      height: U.height,
      radius: parseFloat(
        getComputedStyle(z).borderTopRightRadius
      ) || 0
    } : null;
    return /* @__PURE__ */ o(
      Oa,
      {
        group: P,
        groupKey: P ? w.key : null,
        anchor: P ? A.getTrigger(w.key) : null,
        railEdge: ee,
        railShape: V,
        activePath: n,
        focusFirst: w == null ? void 0 : w.focusFirst,
        onNavigate: me,
        onClose: A.close,
        panelProps: A.flyoutProps,
        accentColor: m,
        activeBackgroundColor: h,
        activeForegroundColor: H,
        solidSurface: $ ?? ie
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
        backgroundColor: Ne,
        ...B ? {} : { height: Gl, minHeight: Gl }
      },
      children: s || i ? /* @__PURE__ */ o(
        Hn,
        {
          logo: s,
          title: N ? void 0 : i,
          appName: i || "App",
          onClick: a,
          menuOpen: u,
          color: g ?? _e,
          testId: "sidebar-header-brand"
        }
      ) : null
    }
  ) : null, bn = !d && s ? /* @__PURE__ */ o(
    "div",
    {
      className: "lw:flex lw:shrink-0 lw:justify-center lw:pt-4",
      style: { paddingBottom: B ? lt : "8px" },
      children: /* @__PURE__ */ o(
        Hn,
        {
          logo: s,
          appName: i || "App",
          onClick: a,
          menuOpen: u,
          color: g ?? _e,
          testId: "sidebar-header-brand"
        }
      )
    }
  ) : null, pt = C ? 4 : B ? 6 : N ? 8 : 12, ht = y(
    B ? "lw:not-supports-[selector(::-webkit-scrollbar)]:[scrollbar-width:thin] lw:not-supports-[selector(::-webkit-scrollbar)]:[scrollbar-color:transparent_transparent] lw:not-supports-[selector(::-webkit-scrollbar)]:hover:[scrollbar-color:var(--lw-border-color)_transparent] lw:not-supports-[selector(::-webkit-scrollbar)]:has-[:focus-visible]:[scrollbar-color:var(--lw-border-color)_transparent] lw:[&::-webkit-scrollbar]:w-1.5" : "lw:[scrollbar-width:thin] lw:[scrollbar-color:transparent_transparent] lw:hover:[scrollbar-color:var(--lw-border-color)_transparent] lw:has-[:focus-visible]:[scrollbar-color:var(--lw-border-color)_transparent] lw:[&::-webkit-scrollbar]:w-2",
    "lw:[&::-webkit-scrollbar-thumb]:rounded-[4px] lw:[&::-webkit-scrollbar-thumb]:bg-transparent lw:[&:hover::-webkit-scrollbar-thumb]:bg-border lw:[&:has(:focus-visible)::-webkit-scrollbar-thumb]:bg-border"
  );
  return /* @__PURE__ */ o(wn.Provider, { value: B, children: /* @__PURE__ */ E(
    "nav",
    {
      ref: k,
      ...de,
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
      style: { width: mt, minWidth: mt, backgroundColor: ie },
      children: [
        K.lens,
        to ?? bn,
        pe.length > 0 ? /* @__PURE__ */ E(
          "div",
          {
            ref: Y,
            className: "lw:relative lw:shrink-0",
            style: {
              marginInline: pt,
              paddingBottom: B ? lt : "8px"
            },
            children: [
              ae.glass,
              Ve(pe)
            ]
          }
        ) : null,
        L ? /* @__PURE__ */ o(
          "div",
          {
            className: "lw:shrink-0",
            style: {
              paddingInline: pt,
              paddingBlock: B ? 0 : 8
            },
            children: L
          }
        ) : null,
        /* @__PURE__ */ o(
          "div",
          {
            ref: G,
            "data-testid": "sidebar-links-scroller",
            className: y(
              "lw:flex lw:min-h-0 lw:flex-auto lw:flex-col",
              ht
            ),
            style: {
              overflowY: fe ? "auto" : "hidden",
              overflowX: "hidden",
              // On the floating rail the bar (when it takes space at all)
              // stands in for the right padding, and the left padding
              // follows it, so the 44px column keeps equal gaps in the
              // capsule whether the bar is classic, overlay or absent.
              // (The inline collapsed rail keeps its padding: its open
              // groups tint the full row width.)
              ...B ? Ka(oe) : { paddingInline: pt },
              paddingTop: X && !d ? `${X}px` : B ? lt : "8px",
              paddingBottom: B ? lt : "16px"
            },
            children: /* @__PURE__ */ E(
              "div",
              {
                ref: O,
                className: "lw:relative lw:flex lw:flex-[1_0_auto] lw:flex-col",
                children: [
                  ne.glass,
                  Ve(ye),
                  t.length > 0 ? /* @__PURE__ */ E(
                    "div",
                    {
                      className: "lw:mt-auto",
                      style: {
                        paddingTop: B ? lt : "16px"
                      },
                      children: [
                        F ? null : /* @__PURE__ */ o(
                          an,
                          {
                            style: {
                              marginBottom: B ? lt : "8px"
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
        F ? /* @__PURE__ */ o(
          "div",
          {
            className: y(
              "lw:shrink-0 lw:pb-3",
              B && "lw:[&_button_svg]:size-6"
            ),
            style: { paddingInline: pt },
            children: /* @__PURE__ */ o(
              "div",
              {
                style: {
                  borderTop: `1px solid ${Re}`,
                  paddingTop: B ? lt : "12px"
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
}, Do = Va, Fn = "var(--lumora-content-padding, 0px)", yo = `calc(${Fn} * -1)`, Za = {
  "background.paper": "var(--lw-bg-surface)",
  "background.default": "var(--lw-bg-page)"
}, Ja = (e) => e && typeof e == "object" && !Array.isArray(e) ? Object.fromEntries(
  Object.entries(e).filter(
    ([t, n]) => !t.includes("&") && !t.startsWith("@") && (typeof n == "string" || typeof n == "number")
  )
) : {}, Qa = ({
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
      backgroundColor: Za[l] ?? l,
      ...n && {
        position: "sticky",
        // Under the mobile top bar on phones, the viewport top on desktop
        top: "var(--lumora-sticky-top, 0px)"
      },
      ...Ja(u),
      ...a
    },
    children: e
  }
), ad = Qa, ei = ({ keys: e }) => /* @__PURE__ */ o(
  "kbd",
  {
    "aria-hidden": "true",
    className: "lw:inline-flex lw:h-5 lw:shrink-0 lw:items-center lw:gap-1 lw:rounded-sm lw:border lw:border-solid lw:border-border lw:bg-surface lw:px-1.5 lw:font-[inherit] lw:text-[11px] lw:leading-none lw:text-muted-foreground",
    children: e.map((t) => /* @__PURE__ */ o("span", { children: t }, t))
  }
), ti = ei;
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
const ni = "(max-width: 899.95px)", oi = (e) => (t) => {
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
function li(e) {
  const t = c.useMemo(() => oi(e), [e]);
  return c.useSyncExternalStore(
    t,
    () => typeof window < "u" && window.matchMedia ? window.matchMedia(e).matches : !1,
    () => !1
  );
}
const Hr = () => li(ni), ri = 6, si = 8, Kl = (e, t) => typeof e == "object" ? e[t] : e, Eo = ({ width: e, height: t = 20, className: n }) => /* @__PURE__ */ o(
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
), vt = ({ size: e, variant: t = "rounded" }) => /* @__PURE__ */ o(
  Wn,
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
  }), g = on(n, t) ? {
    gutterPx: st,
    radiusPx: _r
  } : void 0, m = Mn, h = qn(
    Kl(i, e),
    p
  ), _ = Cr(
    Kl(a, e),
    p
  ), S = Tr(s), v = g ? /* @__PURE__ */ E("div", { className: "lw:flex lw:flex-col lw:items-center lw:pt-3", children: [
    /* @__PURE__ */ o(vt, { size: 36 }),
    /* @__PURE__ */ o(
      "div",
      {
        className: "lw:mt-4 lw:flex lw:flex-col lw:items-center",
        style: { gap: Yn },
        children: Array.from({ length: si }, (x, R) => /* @__PURE__ */ o(
          "div",
          {
            className: "lw:flex lw:items-center lw:justify-center",
            style: {
              width: Ae,
              height: Ae
            },
            children: /* @__PURE__ */ o(vt, { size: ko })
          },
          R
        ))
      }
    )
  ] }) : /* @__PURE__ */ E("div", { className: "lw:flex lw:flex-col lw:items-center lw:gap-4 lw:pt-4", children: [
    /* @__PURE__ */ o(vt, { size: 32 }),
    /* @__PURE__ */ o("div", { className: "lw:h-2" }),
    Array.from({ length: ri }, (x, R) => /* @__PURE__ */ o(vt, { size: 28 }, R))
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
              /* @__PURE__ */ o(vt, { size: 24 }),
              /* @__PURE__ */ o(Eo, { width: 96 }),
              /* @__PURE__ */ o("div", { className: "lw:grow" }),
              /* @__PURE__ */ o(vt, { size: 32, variant: "circular" })
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
                  Wn,
                  {
                    className: "lw:h-24 lw:flex-1"
                  },
                  R
                )
              ) }),
              /* @__PURE__ */ o(Wn, { className: "lw:h-[360px]" })
            ] })
          }
        )
      ]
    }
  );
}, jl = { background: "hsl(220, 35%, 3%)", color: "#ffffff" }, ai = ({
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
}, ii = ai;
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
}, Se = {
  ACCESS_TOKEN: "lumoraAccessToken",
  REFRESH_TOKEN: "lumoraRefreshToken",
  USER: "lumoraUser"
}, et = {
  ACCESS_TOKEN: "accessToken",
  REFRESH_TOKEN: "refreshToken",
  USER: "user"
}, ci = () => {
  if (!(typeof window > "u" || !window.localStorage))
    try {
      const e = localStorage.getItem(
        et.ACCESS_TOKEN
      ), t = localStorage.getItem(
        et.REFRESH_TOKEN
      ), n = localStorage.getItem(et.USER);
      e && !localStorage.getItem(Se.ACCESS_TOKEN) && localStorage.setItem(Se.ACCESS_TOKEN, e), t && !localStorage.getItem(Se.REFRESH_TOKEN) && localStorage.setItem(
        Se.REFRESH_TOKEN,
        t
      ), n && !localStorage.getItem(Se.USER) && localStorage.setItem(Se.USER, n), (e || t || n) && (localStorage.removeItem(et.ACCESS_TOKEN), localStorage.removeItem(et.REFRESH_TOKEN), localStorage.removeItem(et.USER));
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
}, _o = (e, t) => {
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
}, Wr = (e) => {
  try {
    return typeof window > "u" ? (console.warn("localStorage removal attempted on server side"), !1) : window.localStorage ? (window.localStorage.removeItem(e), !0) : (console.warn("localStorage is not available"), !1);
  } catch (t) {
    return t.name !== "SecurityError" && console.warn(`Could not remove localStorage key "${e}"`), !1;
  }
}, cn = () => {
  try {
    ci();
    const e = So(Se.ACCESS_TOKEN), t = So(Se.REFRESH_TOKEN), n = So(Se.USER);
    let l = null;
    if (n)
      try {
        l = JSON.parse(n);
      } catch {
        n && n !== "null" && n !== "undefined" && console.warn(
          "Invalid user data in localStorage, clearing:",
          n.substring(0, 50)
        ), Wr(Se.USER);
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
}, di = () => {
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
}, Gr = (e, t, n = null) => {
  try {
    if (!e && !t)
      throw new se(
        "At least one token must be provided",
        ce.TOKEN_INVALID
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
        ce.UNKNOWN_ERROR,
        l
      )
    };
  }
}, dn = () => {
  try {
    return [
      Se.ACCESS_TOKEN,
      Se.REFRESH_TOKEN,
      Se.USER,
      // Also clear legacy keys for complete cleanup
      et.ACCESS_TOKEN,
      et.REFRESH_TOKEN,
      et.USER
    ].map((l) => Wr(l)).every((l) => l) || console.warn("Some tokens could not be removed from localStorage"), {
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
}, ui = () => {
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
}, id = (e) => {
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
}, wi = (e) => {
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
      const { accessToken: a } = cn();
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
      const { refreshToken: f } = cn();
      if (!f) {
        const m = new Error(
          "No refresh token available for token refresh"
        );
        return Mo(m, "AxiosClient - Token Refresh"), dn(), typeof window < "u" && (window.location.href = "/login"), Promise.reject(i);
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
        if (Gr(h, _, null), s(null, {
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
        ), s(m), dn(), typeof window < "u" && (window.location.href = "/login"), Promise.reject(m);
      } finally {
        n = !1, l = null;
      }
    }
  ), t;
}, fi = async (e, t) => {
  const { accessToken: n, refreshToken: l } = cn();
  if (n)
    return !0;
  if (l)
    try {
      const r = await e.post("/auth/refresh", {
        refresh_token: l
      });
      if (r.data.success && r.data.accessToken)
        return Gr(
          r.data.accessToken,
          r.data.refreshToken || null,
          null
        ), !0;
    } catch (r) {
      Mo(r, "TokenValidator - Refresh Failed");
    }
  return dn(), t ? t() : window.location.href = "/login", !1;
}, mi = ({ size: e = 20 }) => /* @__PURE__ */ E(
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
), Qt = mi, Yl = $e(qo), Ur = "#09C1AE", pi = "0px 2px 4px -1px rgba(0,0,0,0.2),0px 4px 5px 0px rgba(0,0,0,0.14),0px 1px 10px 0px rgba(0,0,0,0.12)", hi = "0px 3px 5px -1px rgba(0,0,0,0.2),0px 6px 10px 0px rgba(0,0,0,0.14),0px 1px 18px 0px rgba(0,0,0,0.12)", On = "lw:relative lw:overflow-hidden lw:[&>*]:relative lw:[&>*]:z-[2]", In = ({
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
] }), gi = ({
  variant: e,
  onClick: t,
  active: n = !1,
  busy: l = !1,
  shortcutKeys: r,
  accentColor: s = "#01584f",
  rightOffsetPx: i = 0
}) => {
  const a = Zo(), u = c.useContext(wn), d = qe(), p = r ? `Ask Nexa (${r.join("")})` : "Ask Nexa", f = {
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
          /* @__PURE__ */ o(Qt, { size: 20 }),
          /* @__PURE__ */ o("span", { className: "lw:grow lw:text-left lw:text-sm lw:font-semibold lw:text-inherit", children: "Ask Nexa" }),
          r && /* @__PURE__ */ o(ti, { keys: r })
        ]
      }
    );
  if (e === "sidebar-icon" && u && Io) {
    const m = Er(Ur, d, "clear");
    return /* @__PURE__ */ o(Ye, { title: p, side: "right", arrow: !0, ...a, children: /* @__PURE__ */ E(
      "button",
      {
        ...f,
        "data-variant": "sidebar-icon",
        "data-rail-keep-fill": !0,
        className: y(
          "lw:inline-flex lw:cursor-pointer lw:items-center lw:justify-center lw:outline-none lw:hover:[transform:scale(1.07)] lw:active:[transform:scale(0.92)] lw:active:[transition-duration:90ms]! lw:motion-reduce:hover:[transform:none] lw:motion-reduce:active:[transform:none] lw:[&_svg]:[filter:drop-shadow(0_1px_1.5px_rgba(0,0,0,0.25))]",
          Ie,
          l && On
        ),
        style: {
          width: Ae,
          height: Ae,
          borderRadius: tt,
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
              radiusPx: tt,
              cover: `${m.background}, ${d ? "#16202c" : "#f2fbfa"}`
            }
          ),
          /* @__PURE__ */ o(Qt, { size: 18 })
        ]
      }
    ) });
  }
  if (e === "sidebar-icon") {
    const m = u ? Ae : 44;
    return /* @__PURE__ */ o(Ye, { title: p, side: "right", arrow: !0, ...a, children: /* @__PURE__ */ E(
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
          /* @__PURE__ */ o(Qt, { size: u ? 18 : 20 })
        ]
      }
    ) });
  }
  return /* @__PURE__ */ o(Ye, { title: p, side: "left", children: /* @__PURE__ */ E(
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
        "--lw-shadow-rest": pi,
        "--lw-shadow-hover": hi
      },
      children: [
        l && /* @__PURE__ */ o(In, { radiusPx: 16, cover: "var(--lw-bg-surface)" }),
        /* @__PURE__ */ o("span", { className: "lw:flex lw:items-center", children: /* @__PURE__ */ o(Qt, { size: 26 }) })
      ]
    }
  ) });
}, ql = gi, bi = Gs(
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
    const a = l ? Ws.Root : "button";
    return /* @__PURE__ */ o(
      a,
      {
        ref: i,
        "data-slot": "button",
        type: l ? void 0 : r,
        className: y(bi({ variant: t, size: n }), e),
        ...s
      }
    );
  }
);
Zn.displayName = "Button";
const xi = ({
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
] }) : null, $n = xi, Ro = 225, jt = 195, To = "cubic-bezier(0, 0, 0.2, 1)", Ao = "cubic-bezier(0.4, 0, 0.6, 1)", Yt = 24, vi = 720, yi = 1140, Ei = 1250, Ni = ({
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
  const _ = n === "docked", S = Yt + i;
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
    ...l === "left" ? { left: s + Yt } : { right: Yt },
    width: r,
    maxWidth: `calc(100vw - ${Yt * 2}px)`,
    height: `min(${vi}px, calc(100vh - ${S + Yt}px))`,
    borderRadius: "12px"
  }, !e && !f)
    return null;
  const x = e && m, R = !p.current, $ = _ ? {
    transform: x ? "none" : "translateX(100%)",
    transition: e ? `transform ${R ? 0 : Ro}ms ${To}` : `transform ${jt}ms ${Ao}, visibility 0ms linear ${jt}ms`
  } : {
    transform: x ? "none" : "scale(0.75, 0.5625)",
    opacity: x ? 1 : 0,
    transformOrigin: l === "left" ? "bottom left" : "bottom right",
    transition: e ? `opacity ${Ro}ms ${To}, transform ${Math.round(Ro * 0.666)}ms ${To}` : `opacity ${jt}ms ${Ao}, transform ${jt}ms ${Ao}, visibility 0ms linear ${jt}ms`
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
        zIndex: _ ? yi : Ei,
        visibility: e ? "visible" : "hidden",
        ...v,
        ...$
      },
      children: t
    }
  );
}, Si = Ni, fn = zn.Root, mn = zn.Anchor, _i = "lw:rounded-md lw:border lw:border-solid lw:border-border lw:bg-popover lw:text-popover-foreground lw:shadow-popover lw:outline-none", kt = c.forwardRef(
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
        className: y(
          "lw:z-[1400] lw:outline-none",
          !l && y(
            _i,
            "lw:p-3 lw:data-[state=open]:animate-in lw:data-[state=open]:fade-in-0 lw:data-[state=open]:zoom-in-95 lw:data-[state=closed]:animate-out lw:data-[state=closed]:fade-out-0 lw:data-[state=closed]:zoom-out-95"
          ),
          e
        ),
        ...r
      }
    ) });
  }
);
kt.displayName = "PopoverContent";
const Ri = 180, Vl = 250, Ti = "#01584F", Xr = "var(--lw-text-muted)", Ai = ({
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
    Ye,
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
}, Ci = "lw:inline-flex lw:shrink-0 lw:items-center lw:justify-center lw:transition-[background-color,border-radius] lw:duration-150 lw:outline-none lw:focus-visible:ring-2 lw:focus-visible:ring-ring lw:disabled:cursor-default lw:disabled:opacity-50 lw:[&_svg]:size-6", Kr = (e, t, n, l) => {
  const r = e ? 48 : 44, s = e ? Xr : t, i = e ? Ti : t, a = y(
    Ci,
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
    Ai,
    {
      text: e.text,
      testId: `rail-item-caption-${e.text}`
    }
  )
] }), Yr = (e, t, n) => n ? e : /* @__PURE__ */ o(Dn, { title: t, side: "right", arrow: !0, children: e }), Oi = (e) => {
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
}, Ii = ({
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
    }, Ri);
  }, v = () => {
    _(), u(!0);
  };
  c.useEffect(() => {
    if (!a)
      return;
    const L = (F) => {
      var D;
      F.key === "Escape" && (u(!1), (D = f.current) == null || D.focus());
    };
    return document.addEventListener("keydown", L), () => document.removeEventListener("keydown", L);
  }, [a]), c.useEffect(() => {
    if (!a || !m.current)
      return;
    const L = globalThis.requestAnimationFrame(() => {
      var D;
      const F = (D = p.current) == null ? void 0 : D.querySelector(
        '[role="menuitem"]'
      );
      F == null || F.focus(), m.current = !1;
    });
    return () => cancelAnimationFrame(L);
  }, [a]);
  const x = rt(e, t), {
    activeBg: R,
    className: $,
    style: N
  } = Kr(r, l, x, i), b = {
    "aria-label": e.text,
    onFocus: () => {
      g.current || v();
    },
    onBlur: (L) => {
      var D;
      const F = L.relatedTarget;
      F && ((D = p.current) != null && D.contains(F)) || S();
    },
    onKeyDown: (L) => {
      L.key === "ArrowDown" && (L.preventDefault(), m.current = !0, v());
    },
    onClick: (L) => {
      L.stopPropagation(), !(e.path && !It(L)) && (L.preventDefault(), e.path && (n == null || n(e.path)));
    },
    "aria-haspopup": "menu",
    "aria-expanded": a,
    "aria-controls": a ? h : void 0,
    "data-testid": `rail-submenu-trigger-${e.text}`,
    className: $,
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
  return /* @__PURE__ */ E(fn, { open: a, children: [
    /* @__PURE__ */ o("div", { className: "lw:flex lw:w-full lw:justify-center", children: /* @__PURE__ */ o(mn, { asChild: !0, children: /* @__PURE__ */ o(
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
      kt,
      {
        ref: p,
        unstyled: !0,
        side: "right",
        align: "start",
        sideOffset: 8,
        onOpenAutoFocus: (L) => L.preventDefault(),
        onCloseAutoFocus: (L) => L.preventDefault(),
        onInteractOutside: (L) => {
          var F;
          if ((F = f.current) != null && F.contains(L.target)) {
            L.preventDefault();
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
            onKeyDown: Oi,
            style: { maxWidth: Vl },
            children: X(e.subitems, e.text, 0)
          }
        )
      }
    )
  ] });
  function X(L, F, D) {
    return L.flatMap((W) => {
      const te = _t(F, W), B = 16 + D * 12;
      if (At(W))
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
            te
          ),
          ...X(W.subitems, te, D + 1)
        ];
      const A = Ke(W, t), k = W.path ? "a" : "div";
      return [
        /* @__PURE__ */ E(
          k,
          {
            role: "menuitem",
            tabIndex: -1,
            title: W.text,
            "aria-disabled": W.path ? void 0 : !0,
            "data-selected": A ? "true" : void 0,
            ...W.path ? { href: W.path } : {},
            onClick: (O) => {
              W.path && It(O) && (O.preventDefault(), n == null || n(W.path), u(!1));
            },
            className: y(
              "lw:mx-1 lw:my-[1px] lw:flex lw:min-h-8 lw:max-w-full lw:cursor-pointer lw:items-center lw:overflow-hidden lw:rounded-sm lw:pr-4 lw:text-sm lw:outline-none lw:select-none lw:[&_svg]:size-5",
              !A && "lw:hover:bg-accent lw:focus-visible:bg-selected",
              !W.path && "lw:pointer-events-none lw:opacity-40"
            ),
            style: {
              paddingLeft: B,
              color: A ? "#ffffff" : r ? Xr : l,
              backgroundColor: A ? R : void 0
            },
            children: [
              W.icon ? /* @__PURE__ */ o("span", { className: "lw:inline-flex lw:min-w-9 lw:shrink-0 lw:text-inherit", children: W.icon }) : null,
              /* @__PURE__ */ o("span", { className: "lw:min-w-0 lw:flex-auto lw:overflow-hidden lw:text-ellipsis lw:whitespace-nowrap", children: W.text })
            ]
          },
          te
        )
      ];
    });
  }
}, $i = ({
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
    f.stopPropagation(), !(e.path && !It(f)) && (f.preventDefault(), e.path && (n == null || n(e.path)));
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
}, ki = () => /* @__PURE__ */ o("div", { className: "lw:flex lw:w-full lw:justify-center", children: /* @__PURE__ */ o(an, { className: "lw:w-[60%]" }) }), Li = () => /* @__PURE__ */ o("div", { className: "lw:my-4 lw:flex lw:w-full lw:justify-center", children: /* @__PURE__ */ o(an, { className: "lw:w-[60%]" }) }), Zl = (e, t) => e.map((n, l) => /* @__PURE__ */ E(c.Fragment, { children: [
  t(n, l),
  l < e.length - 1 ? /* @__PURE__ */ o(ki, {}) : null
] }, l)), Di = ({
  mainLinks: e,
  secondaryLinks: t = [],
  activePath: n,
  onLinkClick: l,
  accentColor: r = "#01584f",
  surfaceBackgroundColor: s,
  railShowTitles: i = !1
}) => {
  const a = (d, p) => At(d) ? /* @__PURE__ */ o(
    Ii,
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
    $i,
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
          /* @__PURE__ */ o(Li, {}),
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
}, Mi = Di, Pi = Ot.Root, Fi = Ot.Trigger, Bi = "lw:relative lw:flex lw:min-h-8 lw:cursor-pointer lw:items-center lw:gap-2 lw:rounded-sm lw:px-2 lw:py-1 lw:text-sm lw:outline-none lw:select-none lw:focus:bg-accent lw:data-[highlighted]:bg-accent lw:data-[disabled]:pointer-events-none lw:data-[disabled]:opacity-50 lw:data-[variant=destructive]:text-destructive lw:[&_svg]:pointer-events-none lw:[&_svg]:shrink-0 lw:[&_svg:not([class*='size-'])]:size-4", zi = "lw:z-[1400] lw:max-h-(--radix-dropdown-menu-content-available-height) lw:min-w-40 lw:overflow-x-hidden lw:overflow-y-auto lw:rounded-md lw:border lw:border-solid lw:border-border lw:bg-popover lw:p-1 lw:text-popover-foreground lw:shadow-popover lw:data-[state=open]:animate-in lw:data-[state=open]:fade-in-0 lw:data-[state=open]:zoom-in-95 lw:data-[state=closed]:animate-out lw:data-[state=closed]:fade-out-0 lw:data-[state=closed]:zoom-out-95", qr = c.forwardRef(
  ({
    className: e,
    sideOffset: t = 4,
    align: n = "start",
    unstyled: l = !1,
    ...r
  }, s) => {
    const i = un();
    return /* @__PURE__ */ o(Ot.Portal, { children: /* @__PURE__ */ o(
      Ot.Content,
      {
        ref: s,
        ...i,
        "data-slot": "dropdown-menu-content",
        sideOffset: t,
        align: n,
        className: y(
          l ? "lw:z-[1400] lw:outline-none" : zi,
          e
        ),
        ...r
      }
    ) });
  }
);
qr.displayName = "DropdownMenuContent";
const en = c.forwardRef(({ className: e, variant: t = "default", ...n }, l) => /* @__PURE__ */ o(
  Ot.Item,
  {
    ref: l,
    "data-slot": "dropdown-menu-item",
    "data-variant": t,
    className: y(Bi, e),
    ...n
  }
));
en.displayName = "DropdownMenuItem";
const Bn = c.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ o(
  Ot.Separator,
  {
    ref: n,
    "data-slot": "dropdown-menu-separator",
    className: y("lw:-mx-1 lw:my-1 lw:h-px lw:bg-border", e),
    ...t
  }
));
Bn.displayName = "DropdownMenuSeparator";
const Hi = (e) => e ? hr(e) : "USER", Wi = (e) => e.split(/\s+/).filter(Boolean).slice(0, 2).map((t) => t.charAt(0).toUpperCase()).join(""), Jl = "lw:max-w-full lw:overflow-hidden lw:text-ellipsis lw:whitespace-nowrap", Po = ({ count: e }) => e ? /* @__PURE__ */ o("span", { className: "lw:h-5 lw:min-w-[22px] lw:rounded-[10px] lw:bg-destructive-fill lw:px-1.5 lw:text-center lw:text-xs lw:leading-5 lw:font-semibold lw:text-white", children: e > 99 ? "99+" : e }) : null, tl = ({ name: e, avatar: t, color: n, size: l = 36 }) => {
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
      ) : Wi(e)
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
        children: Hi(t)
      }
    )
  ] })
] }), Gi = {
  above: { side: "top", align: "start", sideOffset: 8 },
  "above-end": { side: "top", align: "end", sideOffset: 8 },
  beside: { side: "right", align: "end", sideOffset: 12 }
}, kn = "lw:mx-1 lw:min-h-9 lw:gap-0 lw:rounded-md lw:px-4 lw:text-sm lw:[&_svg:not([class*='size-'])]:size-5", Ln = "lw:inline-flex lw:min-w-9 lw:shrink-0 lw:items-center lw:text-muted-foreground", Ui = ({
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
  const $ = (L) => () => {
    t(), L == null || L();
  }, N = !!e, b = N ? e.getBoundingClientRect() : null, T = c.useRef(null);
  c.useEffect(() => {
    N && typeof document < "u" && (T.current = document.activeElement);
  }, [N]);
  const C = Gi[n], X = (L, F) => {
    const D = v === L;
    return /* @__PURE__ */ o(
      "button",
      {
        type: "button",
        "aria-pressed": D,
        disabled: !x,
        onClick: () => !D && (x == null ? void 0 : x()),
        className: y(
          "lw:h-8 lw:flex-1 lw:cursor-pointer lw:rounded-md lw:text-sm lw:font-medium lw:outline-none lw:transition-colors lw:focus-visible:ring-2 lw:focus-visible:ring-ring lw:disabled:cursor-default lw:disabled:opacity-50",
          D ? "lw:bg-surface lw:text-foreground lw:shadow-[0_1px_3px_rgba(0,0,0,0.12),0_1px_1px_rgba(0,0,0,0.08)]" : "lw:text-muted-foreground lw:hover:text-foreground"
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
      Pi,
      {
        open: N,
        onOpenChange: (L) => !L && t(),
        modal: !1,
        children: [
          /* @__PURE__ */ o(Fi, { asChild: !0, children: /* @__PURE__ */ o(
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
              onOpenAutoFocus: (L) => {
                s && L.preventDefault();
              },
              onCloseAutoFocus: (L) => {
                var F, D;
                L.preventDefault(), s || (D = (F = T.current) == null ? void 0 : F.focus) == null || D.call(F);
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
                  en,
                  {
                    className: kn,
                    onSelect: $(d),
                    children: [
                      /* @__PURE__ */ o("span", { className: Ln, children: /* @__PURE__ */ o(dr, {}) }),
                      /* @__PURE__ */ o("span", { className: "lw:flex-auto", children: "Notifications" }),
                      /* @__PURE__ */ o(Po, { count: u })
                    ]
                  }
                ),
                m.map((L) => /* @__PURE__ */ E(
                  en,
                  {
                    className: kn,
                    onSelect: $(L.onClick),
                    children: [
                      /* @__PURE__ */ o("span", { className: Ln, children: L.icon }),
                      /* @__PURE__ */ o("span", { className: "lw:flex-auto", children: L.label }),
                      /* @__PURE__ */ o(Po, { count: L.badge })
                    ]
                  },
                  L.key
                )),
                h && /* @__PURE__ */ E(
                  en,
                  {
                    className: kn,
                    onSelect: $(_),
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
                          X("light", "Light"),
                          X("dark", "Dark")
                        ]
                      }
                    )
                  ] })
                ] }),
                /* @__PURE__ */ o(Bn, { className: "lw:mx-0" }),
                /* @__PURE__ */ E(
                  en,
                  {
                    className: y(
                      kn,
                      // The dark palette's error colors are too dim on the dark menu
                      v === "dark" ? "lw:text-[hsl(0,90%,65%)]" : "lw:text-destructive"
                    ),
                    onSelect: $(R),
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
}, Zr = Ui, Jr = 64, Xi = 2, qt = ({
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
}, Ki = ({
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
  const v = m.filter((C) => C.path).slice(0, Xi), [x, R] = c.useState(
    null
  ), { userName: $ = "User", userAvatar: N, avatarColor: b } = S, T = { color: p, activeColor: f, activeBackground: g };
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
          qt,
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
          qt,
          {
            label: C.text,
            icon: C.icon,
            href: C.path,
            onClick: (X) => {
              It(X) && (X.preventDefault(), _ == null || _(C.path));
            },
            active: rt(C, h),
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
            qt,
            {
              label: "Account",
              ariaLabel: `Account menu for ${$}`,
              icon: /* @__PURE__ */ o(
                tl,
                {
                  name: $,
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
}, ji = Ki, Fo = Zt.Root, Yi = {
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
    return /* @__PURE__ */ E(Zt.Portal, { children: [
      l ? /* @__PURE__ */ o(
        Zt.Overlay,
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
        Zt.Content,
        {
          ref: a,
          ...u,
          "data-slot": "sheet-content",
          "data-side": n,
          "aria-describedby": void 0,
          className: y(
            "lw:fixed lw:z-[1200] lw:flex lw:flex-col lw:border-solid lw:border-border lw:bg-popover lw:text-popover-foreground lw:shadow-popover lw:outline-none lw:transition lw:ease-in-out lw:data-[state=open]:animate-in lw:data-[state=open]:duration-200 lw:data-[state=closed]:animate-out lw:data-[state=closed]:duration-150",
            Yi[n],
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
const qi = ({
  open: e,
  onClose: t,
  search: n
}) => /* @__PURE__ */ o(Fo, { open: e, onOpenChange: (l) => !l && t(), children: /* @__PURE__ */ o(
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
) }), Vi = qi, Zi = ({
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
), Ji = Zi;
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
const es = c.createContext(void 0), Qi = ({
  count: e,
  onClick: t,
  triggerProps: n,
  active: l,
  color: r,
  hoverColor: s,
  tooltipPlacement: i,
  testId: a
}) => {
  const u = Zo(), d = c.useContext(es), p = c.useContext(wn), f = e ? `Notifications, ${e} unread` : "Notifications";
  return /* @__PURE__ */ o(
    Ye,
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
              width: Ae,
              height: Ae
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
}, nl = Qi, Ql = 14, ec = 18, tc = "blur(12px) saturate(180%) brightness(1.04)", nc = (() => {
  var t;
  if (typeof navigator > "u")
    return !1;
  const e = (t = navigator.userAgentData) == null ? void 0 : t.brands;
  return !!(e != null && e.some(({ brand: n }) => /Chromium/.test(n)));
})(), oc = (e, t, n) => {
  const l = Math.min(0.45, n / e), r = Math.min(0.45, n / t), s = `<svg xmlns="http://www.w3.org/2000/svg" width="${e}" height="${t}"><defs><linearGradient id="x" x1="0" x2="1" y1="0" y2="0"><stop offset="0" stop-color="#ff0000"/><stop offset="${l}" stop-color="#800000"/><stop offset="${1 - l}" stop-color="#800000"/><stop offset="1" stop-color="#000000"/></linearGradient><linearGradient id="y" x1="0" x2="0" y1="0" y2="1"><stop offset="0" stop-color="#00ff00"/><stop offset="${r}" stop-color="#008000"/><stop offset="${1 - r}" stop-color="#008000"/><stop offset="1" stop-color="#000000"/></linearGradient></defs><rect width="100%" height="100%" fill="url(#x)"/><rect width="100%" height="100%" fill="url(#y)" style="mix-blend-mode:screen"/></svg>`;
  return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(s)}`;
}, lc = 140, er = 0.22, rc = 0.14, sc = (e, t, n) => {
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
      s.x += (r.x - s.x) * er, s.y += (r.y - s.y) * er, s.i += (r.i - s.i) * rc;
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
      r.i = Math.max(0, 1 - Math.hypot(_, S) / lc), s.i < 0.01 && (s.x = r.x, s.y = r.y), d();
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
    sc(d, i && Io, a);
    const f = jn(), g = `lumora-glass-${c.useId().replace(/[^a-zA-Z0-9-]/g, "")}`, [m, h] = c.useState(null), _ = c.useRef(null), S = c.useCallback(
      ($) => {
        var b;
        if (d.current = $, typeof u == "function" ? u($) : u && (u.current = $), (b = _.current) == null || b.disconnect(), _.current = null, !$ || !p || !nc || typeof ResizeObserver > "u")
          return;
        const N = () => {
          const T = $.offsetWidth, C = $.offsetHeight;
          h(
            (X) => (X == null ? void 0 : X.width) === T && X.height === C ? X : T && C ? { width: T, height: C } : null
          );
        };
        _.current = new ResizeObserver(N), _.current.observe($), N();
      },
      [u, p]
    ), v = c.useMemo(
      () => m ? oc(m.width, m.height, Ql) : null,
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
                    scale: ec,
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
              backdropFilter: `url(#${g}) ${tc}`
            } : {},
            ...l
          }
        }
      )
    ] });
  }
);
ts.displayName = "GlassLayer";
const Jn = ts, ac = '[role="menuitem"]:not([aria-disabled="true"])', ns = (e) => Array.from(e.querySelectorAll(ac)), os = (e) => {
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
const ic = ({
  className: e
}) => /* @__PURE__ */ o(
  "li",
  {
    role: "separator",
    className: y("lw:my-1 lw:h-px lw:list-none lw:bg-border", e)
  }
), cc = 150, dc = ({
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
      }, cc);
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
}, Qn = dc, tr = $e(Ir), nr = $e(Vn), uc = 240, wc = 8, ls = '[data-rail-surface], [data-testid="sidebar-hover-panel"], aside', rs = (e) => {
  const t = e.getBoundingClientRect(), n = e.closest(ls);
  if (!n)
    return t;
  const l = n.getBoundingClientRect().right + wc;
  return new DOMRect(l, t.top, 0, t.height);
}, fc = "lw:overflow-hidden lw:rounded-xl lw:border lw:border-solid lw:border-border lw:bg-popover lw:text-popover-foreground lw:shadow-[0_8px_24px_rgba(0,0,0,0.12)]", mc = ({
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
  const d = qe(), p = !!e, f = !!(e != null && e.closest(ls)), g = Xo(d ? "hsl(220, 30%, 7%)" : "#ffffff"), m = c.useRef(null), h = c.useMemo(
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
    radius: tt
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
    fn,
    {
      open: p,
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
          kt,
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
                className: i ? "lw:relative lw:rounded-md" : fc,
                style: { minWidth: uc },
                children: i ? /* @__PURE__ */ E(ve, { children: [
                  /* @__PURE__ */ o(
                    Jn,
                    {
                      isDark: d,
                      solid: g,
                      className: y(
                        "lw:absolute lw:inset-0 lw:origin-top-left lw:rounded-[inherit]",
                        Ie
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
                        Ie
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
}, pc = ({ children: e, anchorEl: t, onOpen: n, hoverOpen: l = !1, ...r }) => {
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
          mc,
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
}, Bo = "lw:outline-none lw:focus:outline-none", hc = "lw:flex lw:flex-col lw:overflow-hidden lw:rounded-xl lw:border lw:border-solid lw:border-border lw:bg-popover lw:text-popover-foreground lw:shadow-[0_8px_24px_rgba(0,0,0,0.12)]", or = $e(Ir), lr = $e(Vn), gc = '[role="menuitem"], button[data-testid="account-menu-header"], [data-testid="menu-item-theme"]', bc = ({ mode: e, onToggle: t, accentColor: n, tint: l, glass: r = !1 }) => {
  const s = qe(), i = jn(), a = c.useRef(null), u = c.useRef(null), d = (g) => {
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
          "--lw-seg-ring": at(n, 0.6),
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
}, xc = ({
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
  openedByHover: $ = !1
}) => {
  const N = qe(), b = Xo(N ? "hsl(220, 30%, 7%)" : "#ffffff"), T = c.useRef(null), C = c.useMemo(
    () => ({
      current: t && {
        contextElement: t,
        getBoundingClientRect: () => rs(t)
      }
    }),
    [t]
  ), X = Jo({
    enabled: x,
    isDark: N,
    selector: gc,
    radius: tt
  }), L = (O) => {
    n(), O == null || O();
  }, F = (O) => {
    n(), O.onClick ? O.onClick() : O.path && (_ == null || _(O.path));
  }, D = y(
    "lw:min-h-8 lw:gap-1 lw:px-3 lw:py-1.5 lw:text-sm lw:leading-5",
    x ? "lw:rounded-md" : "lw:rounded-lg lw:hover:bg-(--lw-menu-tint) lw:focus-visible:bg-(--lw-menu-tint)"
  ), W = "lw:flex lw:min-w-8 lw:shrink-0 lw:items-center lw:[&_svg]:size-5", te = y(
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
              onClick: () => L(m),
              "data-testid": "account-menu-view-profile",
              className: te,
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
            onClick: () => L(h),
            "data-testid": "account-menu-ai-usage",
            className: te,
            style: { color: B },
            children: "My AI usage"
          }
        )
      ]
    }
  ) : null, k = /* @__PURE__ */ E("div", { className: "lw:flex lw:flex-row lw:items-center lw:gap-2.5 lw:p-3", children: [
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
    fn,
    {
      open: e && !!t,
      onOpenChange: (O) => {
        O || n();
      },
      modal: !$,
      children: [
        /* @__PURE__ */ o(
          mn,
          {
            virtualRef: C
          }
        ),
        /* @__PURE__ */ o(
          kt,
          {
            ...R,
            unstyled: !0,
            side: "right",
            align: "end",
            sideOffset: 0,
            collisionPadding: 16,
            onOpenAutoFocus: (O) => {
              O.preventDefault(), $ || os(T.current);
            },
            onCloseAutoFocus: (O) => {
              var Y;
              O.preventDefault(), $ || (Y = t == null ? void 0 : t.focus) == null || Y.call(t);
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
                  ) : hc
                ),
                style: {
                  width: l,
                  minWidth: l,
                  "--lw-menu-tint": d,
                  "--lw-link-ring": at(u, 0.6)
                },
                children: [
                  x ? /* @__PURE__ */ o(
                    Jn,
                    {
                      isDark: N,
                      solid: b,
                      className: y(
                        "lw:absolute lw:inset-0 lw:origin-bottom-left lw:rounded-[inherit]",
                        Ie
                      ),
                      style: {
                        animation: `${jo} ${or.duration}ms ${or.easing} both`
                      }
                    }
                  ) : null,
                  /* @__PURE__ */ E(
                    "div",
                    {
                      ...X.containerProps,
                      className: x ? y(
                        "lw:relative lw:flex lw:flex-col lw:overflow-hidden lw:rounded-[inherit]",
                        Ie
                      ) : "lw:contents",
                      style: x ? {
                        animation: `${Yo} ${lr.duration}ms ${lr.easing} 70ms both`
                      } : void 0,
                      children: [
                        X.lens,
                        m && !h ? /* @__PURE__ */ o(
                          "button",
                          {
                            type: "button",
                            onClick: () => L(m),
                            "data-testid": "account-menu-header",
                            className: y(
                              "lw:group lw:relative lw:block lw:w-full lw:cursor-pointer lw:text-left lw:transition-colors lw:duration-150 lw:[&_[data-hint]]:hidden lw:hover:[&_[data-hint]]:block lw:hover:[&_[data-role]]:hidden lw:focus-visible:[&_[data-hint]]:block lw:focus-visible:[&_[data-role]]:hidden",
                              !x && "lw:hover:bg-(--lw-menu-tint) lw:focus-visible:bg-(--lw-menu-tint)",
                              Bo
                            ),
                            children: k
                          }
                        ) : /* @__PURE__ */ o(
                          "div",
                          {
                            "data-testid": "account-menu-header",
                            className: "lw:relative",
                            children: k
                          }
                        ),
                        /* @__PURE__ */ o(an, { className: "lw:relative" }),
                        p ? /* @__PURE__ */ E(
                          "div",
                          {
                            "data-testid": "menu-item-theme",
                            className: y(
                              D,
                              "lw:relative lw:mx-1 lw:mt-1 lw:flex lw:items-center lw:py-1 lw:hover:bg-transparent"
                            ),
                            children: [
                              /* @__PURE__ */ o(
                                "span",
                                {
                                  className: y(
                                    W,
                                    "lw:text-muted-foreground"
                                  ),
                                  children: /* @__PURE__ */ o(Ds, {})
                                }
                              ),
                              /* @__PURE__ */ o("span", { className: "lw:flex-1 lw:text-foreground", children: "Theme" }),
                              /* @__PURE__ */ o(
                                bc,
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
                                    D,
                                    "lw:text-foreground"
                                  ),
                                  children: [
                                    /* @__PURE__ */ o(
                                      "span",
                                      {
                                        className: y(
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
                              v ? /* @__PURE__ */ o(ic, {}) : null,
                              v ? /* @__PURE__ */ E(
                                Un,
                                {
                                  onClick: () => L(v),
                                  "data-testid": "menu-item-logout",
                                  className: y(
                                    D,
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
}, vc = xc, yc = "lw:outline-none lw:focus:outline-none", Ec = ({
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
  expandedWidth: $,
  collapsedWidth: N,
  topContent: b,
  submenuMode: T,
  color: C,
  hoverColor: X,
  avatarColor: L,
  showProfile: F = !0,
  userName: D = "User",
  userEmail: W,
  userRole: te,
  userAvatar: B,
  showNotifications: A = !0,
  notificationCount: k = 0,
  onNotificationsClick: O,
  notificationsTriggerProps: Y,
  notificationsOpen: G,
  whatsNewCount: oe = 0,
  onProfileClick: fe,
  onAiUsageClick: K,
  menuItems: Z,
  onLogout: de,
  theme: Q = "light",
  showThemeToggler: ne = !0,
  onThemeToggle: ae
}) => {
  const pe = qe(), ye = qn(v, pe), ke = C ?? S ?? (pe ? "#ffffff" : f), I = X ?? h ?? tn(f), q = L ?? f, H = c.useRef(null), [j, J] = c.useState(!1), ie = Qn({
    open: j,
    onOpen: () => J(!0),
    onClose: () => J(!1)
  }), Ee = te ? hr(te) : void 0, Ne = (Be) => /* @__PURE__ */ o(
    tl,
    {
      name: D,
      avatar: B,
      color: q,
      size: Be
    }
  ), _e = k + oe, Re = R && T === "flyout", me = A ? /* @__PURE__ */ o(
    nl,
    {
      count: _e,
      onClick: O,
      triggerProps: Y,
      active: G,
      color: ke,
      hoverColor: I,
      tooltipPlacement: "right",
      testId: "panel-notifications"
    }
  ) : null, be = F ? /* @__PURE__ */ E(
    "button",
    {
      type: "button",
      ref: H,
      onClick: () => J(!0),
      ...ie.triggerProps,
      "aria-haspopup": "menu",
      "aria-expanded": j,
      "aria-label": "Account menu",
      "data-testid": "panel-user-button",
      className: y(
        "lw:flex lw:min-w-0 lw:cursor-pointer lw:items-center lw:justify-start lw:gap-2.5 lw:rounded-[10px] lw:hover:bg-(--lw-footer-tint)",
        R ? "lw:flex-[0_0_auto]" : "lw:flex-1",
        // On the flyout rail the 36px avatar fills a 44px button,
        // matching the rail's icon buttons
        Re ? "lw:p-1" : "lw:p-1.5",
        j ? "lw:bg-(--lw-footer-tint)" : "lw:bg-transparent",
        yc
      ),
      style: { "--lw-footer-tint": I },
      children: [
        R && !Re && A ? (
          // Collapsed: no room for the bell, so unread shows as a dot
          /* @__PURE__ */ o(
            Qr,
            {
              dot: !0,
              count: _e,
              className: "lw:rounded-full",
              badgeClassName: "lw:top-[14%] lw:right-[14%]",
              children: Ne(36)
            }
          )
        ) : Ne(R ? 36 : 40),
        R ? null : /* @__PURE__ */ E("span", { className: "lw:block lw:min-w-0 lw:text-left", children: [
          /* @__PURE__ */ o(
            "span",
            {
              className: "lw:block lw:truncate lw:text-sm lw:leading-[1.3] lw:font-semibold",
              style: { color: ke },
              children: D
            }
          ),
          Ee ? /* @__PURE__ */ o(
            "span",
            {
              "data-testid": "panel-user-role",
              className: "lw:block lw:truncate lw:text-xs lw:leading-[1.3] lw:tracking-[0.02em] lw:opacity-85",
              style: { color: ke },
              children: Ee
            }
          ) : null
        ] })
      ]
    }
  ) : null, he = !!me && (!R || Re || !be), ue = be || he ? /* @__PURE__ */ E(
    "div",
    {
      className: y(
        "lw:flex lw:items-center lw:justify-center lw:gap-1",
        Re ? "lw:flex-col" : "lw:flex-row"
      ),
      children: [
        Re && he ? me : null,
        be,
        !Re && he ? me : null
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
            expandedWidth: $,
            collapsedWidth: N,
            topContent: b,
            footer: ue,
            submenuMode: T
          }
        ),
        F ? /* @__PURE__ */ o(
          vc,
          {
            open: j,
            anchorEl: H.current,
            onClose: () => J(!1),
            width: Math.max($ - 16, 240),
            renderAvatar: Ne,
            userName: D,
            userEmail: W,
            roleLabel: Ee,
            accentColor: f,
            tint: I,
            showThemeToggler: ne,
            theme: Q,
            onThemeToggle: ae,
            onProfileClick: fe,
            onAiUsageClick: K,
            onLinkClick: l,
            menuItems: Z,
            onLogout: de,
            glass: T === "flyout",
            contentProps: ie.contentProps,
            openedByHover: ie.openedByHover
          }
        ) : null
      ]
    }
  );
}, Nc = Ec, Sc = ({
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
  ), R = !!v, $ = Qn({
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
            Ye,
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
                  ...r ? $.triggerProps : {},
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
        contentProps: $.contentProps,
        openedByHover: $.openedByHover,
        ...u
      }
    )
  ] });
}, _c = Sc, Rc = 120, Tc = 300, rr = $e(Or), sr = $e(Vn), Ac = (e) => {
  var t;
  return ((t = e == null ? void 0 : e.querySelector("input, textarea")) == null ? void 0 : t.value) ?? "";
}, Cc = 'input, textarea, [contenteditable="true"]', zo = (e) => {
  var t;
  (t = e == null ? void 0 : e.querySelector(Cc)) == null || t.focus();
}, Oc = "lw:[&_:is([data-slot=input],[data-slot=button],input:not([data-slot]))]:rounded-[6px] lw:[&_:is([data-slot=input],[data-slot=button]):focus-visible]:border-(--lw-accent) lw:[&_:is([data-slot=input]):focus-visible]:ring-(--lw-accent)", ar = (e) => e ? `Search (${e.join("")})` : "Search", Ic = ({
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
  const d = Zo(), p = c.useContext(wn), f = c.useRef(null), [g, m] = c.useState(null);
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
    $c,
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
        fn,
        {
          open: !!g,
          onOpenChange: (h) => !h && m(null),
          children: [
            /* @__PURE__ */ o(
              Ye,
              {
                title: ar(u),
                side: "right",
                arrow: !0,
                ...d,
                children: /* @__PURE__ */ o(mn, { asChild: !0, children: /* @__PURE__ */ o(
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
              kt,
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
}, $c = ({ search: e, icon: t, color: n, railTooltip: l, tooltip: r }) => {
  const s = qe();
  Js(s, at(n, s ? 0.3 : 0.35));
  const i = `rgb(${jn()})`, a = Xo(s ? "#1e2430" : "#ffffff"), u = c.useRef(null), d = c.useRef(null), [p, f] = c.useState(!1), g = c.useRef(!1), m = c.useRef(void 0), h = c.useRef(void 0), _ = () => {
    clearTimeout(m.current), clearTimeout(h.current);
  }, S = c.useCallback(() => {
    _(), g.current = !1, f(!1);
  }, []), v = () => {
    clearTimeout(h.current), p || (clearTimeout(m.current), m.current = setTimeout(
      () => f(!0),
      Rc
    ));
  }, x = () => {
    clearTimeout(m.current), clearTimeout(h.current), h.current = setTimeout(() => {
      !g.current && !Ac(d.current) && f(!1);
    }, Tc);
  };
  return c.useEffect(() => _, []), c.useEffect(() => {
    if (!p)
      return;
    const R = setTimeout(() => zo(d.current)), $ = (b) => {
      var C, X;
      const T = b.target;
      !((C = d.current) != null && C.contains(T)) && !((X = u.current) != null && X.contains(T)) && S();
    }, N = (b) => {
      var T;
      b.key === "Escape" && (S(), (T = u.current) == null || T.focus());
    };
    return document.addEventListener("pointerdown", $), document.addEventListener("keydown", N), () => {
      clearTimeout(R), document.removeEventListener("pointerdown", $), document.removeEventListener("keydown", N);
    };
  }, [p, S]), /* @__PURE__ */ o(
    "div",
    {
      "data-testid": "sidebar-search",
      className: "lw:flex lw:w-full lw:justify-center",
      children: /* @__PURE__ */ E(
        fn,
        {
          open: p,
          onOpenChange: (R) => !R && S(),
          modal: !1,
          children: [
            /* @__PURE__ */ o(
              Ye,
              {
                title: p ? "" : r,
                side: "right",
                arrow: !0,
                ...l,
                children: /* @__PURE__ */ o(mn, { asChild: !0, children: /* @__PURE__ */ o(
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
                      width: Ae,
                      height: Ae,
                      color: n,
                      borderRadius: tt
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
              kt,
              {
                unstyled: !0,
                side: "right",
                align: "center",
                sideOffset: 14,
                collisionPadding: 8,
                onOpenAutoFocus: (R) => R.preventDefault(),
                onCloseAutoFocus: (R) => R.preventDefault(),
                onInteractOutside: (R) => {
                  var $;
                  ($ = u.current) != null && $.contains(R.target) && R.preventDefault();
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
                    style: { borderRadius: tt },
                    children: [
                      /* @__PURE__ */ o(
                        Jn,
                        {
                          isDark: s,
                          solid: a,
                          className: y(
                            "lw:absolute lw:inset-0 lw:origin-left lw:rounded-[inherit]",
                            Ie
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
                            Oc,
                            Ie
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
}, kc = Ic, Lc = 80, Dc = 300, Mc = 32, Pc = (e) => {
  const t = c.useRef(/* @__PURE__ */ new WeakSet()), n = c.useRef(void 0), l = c.useRef(void 0), [r, s] = c.useState(!1), [i, a] = c.useState(!1), [u, d] = c.useState(!1), p = c.useRef(null), f = () => {
    clearTimeout(n.current), clearTimeout(l.current), n.current = void 0, l.current = void 0;
  };
  c.useEffect(() => {
    if (!e) {
      f(), s(!1), a(!1), d(!1);
      return;
    }
    const h = (x) => {
      var $;
      if (x.pointerType !== "mouse")
        return;
      const R = x.clientX <= Mc;
      R && (($ = p.current) == null || $.style.setProperty(
        "--edge-glow-y",
        `${x.clientY}px`
      )), d(R);
    }, _ = () => d(!1), S = () => {
      clearTimeout(n.current), n.current = void 0, l.current === void 0 && (l.current = setTimeout(() => {
        l.current = void 0, s(!1), a(!1);
      }, Dc));
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
      }, Lc));
    },
    onFocus: (h) => {
      Fc(h.target) && a(!0);
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
}, Fc = (e) => {
  try {
    return e.matches(":focus-visible");
  } catch {
    return !0;
  }
}, Bc = Pc, zc = 100, Hc = () => {
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
        }, zc));
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
}, Wc = Hc, Gc = (e) => {
  const t = Array.from((e == null ? void 0 : e.children) ?? []).find(
    (a) => a.tagName === "ASIDE"
  );
  if (!t)
    return null;
  const n = t.querySelector("[data-rail-surface]") ?? t, { right: l, width: r } = t.getBoundingClientRect(), { top: s, height: i } = n.getBoundingClientRect();
  return r <= 0 || i <= 0 ? null : { left: l, top: s, height: i };
}, Uc = 300, Co = 288, Xc = "width 220ms cubic-bezier(0.4, 0, 0.2, 1), box-shadow 220ms ease", ir = 72, Oo = 90, Kc = 18, jc = "transform 240ms cubic-bezier(0.2, 0.8, 0.2, 1), opacity 180ms ease", Yc = 68, cr = () => typeof navigator < "u" && /Mac|iPhone|iPad/.test(navigator.platform || navigator.userAgent), qc = typeof window > "u" ? Vt : Bs, Vc = ({
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
  sidebarBackgroundColor: $,
  sidebarHeaderBackgroundColor: N,
  groupAccentColor: b,
  activeSidebarForegroundColor: T,
  enableRefreshToken: C = !1,
  holdSessionSkeleton: X = !1,
  sessionSkeletonContent: L,
  activePath: F,
  onLinkClick: D,
  showProfile: W = !0,
  userName: te,
  userRole: B,
  userAvatar: A,
  userEmail: k,
  onLogout: O,
  showSettings: Y = !0,
  onSettingsClick: G,
  onProfileClick: oe,
  onAiUsageClick: fe,
  showNotifications: K = !0,
  notificationCount: Z = 0,
  NotificationSidebarContent: de,
  whatsNewCount: Q = 0,
  onNotificationsClick: ne,
  platforms: ae,
  currentPlatformKey: pe,
  onPlatformSelect: ye,
  onVerify: ke,
  alertProps: I,
  style: q,
  sidebarStyles: H,
  contentStyles: j,
  className: J,
  sidebarClassName: ie,
  contentClassName: Ee,
  accentColor: Ne,
  sidebarAccentColor: _e,
  sidebarActiveBackgroundColor: Re,
  sidebarGroupArrowColor: me,
  sidebarForegroundColor: be,
  contentBackgroundColor: he,
  theme: ue = "light",
  darkModeSelector: Be,
  showThemeToggler: ze = !1,
  onThemeToggle: nt,
  GlobalChatSidebar: wt,
  useChatSidebar: ft,
  chatPanelMode: pn = "docked",
  chatPanelPosition: hn = "right",
  chatPanelWidth: Lt = 420,
  onChatClose: eo,
  showAssistant: it = !1,
  assistantPlacement: Dt = "sidebar",
  assistantShortcut: Mt = "j",
  onAssistantClick: Ve,
  assistantActive: mt = !1,
  assistantBusy: gn = !1,
  assistantLabel: to = "Nexa",
  customNavbar: bn,
  customNavbarProps: pt,
  redirectToLogin: ht,
  apiBaseUrl: Pt
}) => {
  const w = Hr(), P = ue === "dark", ee = Ne ?? "#01584f", z = _e ?? ee, U = Cr(
    typeof he == "object" ? he[ue] : he,
    P
  ), V = i === "collapsible", we = i === "panel", Me = we && r && !w, ge = i === "rail-labeled", Ce = V || ge, xe = qn(
    $,
    P
  ), gt = N ?? xe, Te = be ?? (P ? "#ffffff" : z), Ft = b ?? tn(Te), Bt = N ? $o(gt) : Te, ll = (M) => /* @__PURE__ */ o(
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
  ), xn = v ?? Bt, [rl, zt] = Xe(
    null
  ), no = ((ae == null ? void 0 : ae.length) ?? 0) > 1, ss = po(() => zt(null), []), as = (M) => {
    zt(null), ye ? ye(M) : M.key !== pe && M.url && window.location.assign(M.url);
  }, oo = !w && (on(a, i) || !(V || we)), sl = (M) => no ? /* @__PURE__ */ o(
    pc,
    {
      anchorEl: rl,
      onClose: ss,
      onOpen: zt,
      hoverOpen: oo,
      platforms: ae,
      currentKey: pe,
      onSelect: as,
      accentColor: ee,
      glass: a === "flyout" && (V || we) && !w,
      children: M
    }
  ) : M, vn = no ? (M) => zt(M.currentTarget) : g, yn = no ? !!rl : void 0, lo = sl(
    f ?? ll(xn)
  ), is = sl(
    f ?? ll(v ?? Te)
  ), ro = Wc(), He = on(a, i), Ge = He || !ro.expanded, Le = r && !w && oa(u, a, i), bt = Bc(Le), al = He ? "popover" : "expand", il = He ? nn : Jt, cl = He ? "transparent" : xe, dl = He && !N ? "transparent" : gt, [cs, ul] = Xe(!1), ds = po(() => ul(!1), []), Ze = Ar({
    showSidebar: r,
    isMobile: w,
    sidebarVariant: i,
    sidebarSubmenu: a,
    sidebarAutoHide: u
  }), [wl, xt] = Xe(!1), [fl, so] = Xe(!1), De = w && d === "bottom-bar", ml = `calc(${Jr}px + env(safe-area-inset-bottom, 0px))`, [Je, pl] = Xe({ open: !1, tab: "notifications" }), ao = () => pl((M) => ({ ...M, open: !1 })), hl = K && !!de, gl = Sn(null), [io, us] = Xe(null), Ht = po(() => {
    const M = w ? null : Gc(gl.current);
    us(
      (le) => le && M && le.left === M.left && le.top === M.top && le.height === M.height ? le : M
    );
  }, [w]);
  Vt(() => {
    if (Je.open)
      return Ht(), window.addEventListener("resize", Ht), () => window.removeEventListener("resize", Ht);
  }, [Je.open, Ht]);
  const bl = (M) => {
    xt(!1), so(!1), Ht(), pl({ open: !0, tab: M });
  }, ct = Qn({
    open: Je.open,
    onOpen: () => bl("notifications"),
    onClose: ao
  }), xl = hl ? ct.triggerProps : void 0, Ue = bt.shown || Le && Je.open && ct.openedByHover, [ws, fs] = Xe(0), [ms, ps] = Xe(Ue);
  ms !== Ue && (ps(Ue), Ue || (fs((M) => M + 1), zt(null)));
  const [hs, gs] = Xe(!0), [bs, xs] = Xe(!1), co = ft == null ? void 0 : ft(), vl = (co == null ? void 0 : co.isOpen) ?? !1, yl = pn === "floating" ? "floating" : "docked", vs = yl === "docked" && vl && wt && !w ? Lt : 0, En = Sn(ke), El = Sn(!1), Nl = Fs(
    () => wi(Pt),
    [Pt]
  );
  Vt(() => {
    En.current = ke;
  }, [ke]);
  const uo = Sn(Ve);
  uo.current = Ve;
  const Wt = it && Mt ? Mt.toLowerCase() : null;
  Vt(() => {
    if (!Wt)
      return;
    const M = (le) => {
      (le.metaKey || le.ctrlKey) && !le.altKey && !le.shiftKey && le.key.toLowerCase() === Wt && uo.current && (le.preventDefault(), uo.current());
    };
    return window.addEventListener("keydown", M), () => window.removeEventListener("keydown", M);
  }, [Wt]);
  const Sl = (M) => {
    const le = O(M);
    le instanceof Promise && le.catch((Qe) => {
      console.error("Error in logout handler:", Qe);
    });
  };
  if (qc(() => {
    (() => {
      var le;
      try {
        const { isAuthenticated: Qe } = di();
        if (!Qe) {
          console.log("No session found, redirecting to login"), dn(), ht();
          return;
        }
        if (!El.current) {
          const { user: Ut, error: mo } = ui();
          if (Ut && !mo) {
            const As = {
              name: Ut.name || "",
              email: Ut.email || "",
              profilePicture: Ut.profilePicture || "",
              role: Ut.role || ""
            };
            El.current = !0, (le = En.current) == null || le.call(En, As);
          } else
            mo && console.error("Error getting user data:", mo);
        }
        xs(!0);
      } catch (Qe) {
        console.error("Error checking session:", Qe), dn(), ht();
      } finally {
        gs(!1);
      }
    })();
  }, [ht]), Vt(() => {
    C && fi(Nl, ht);
  }, [C, Nl]), hs || X)
    return /* @__PURE__ */ o(
      ii,
      {
        theme: ue,
        darkModeSelector: Be,
        sidebarVariant: i,
        sidebarSubmenu: a,
        sidebarAutoHide: u,
        showSidebar: r,
        contentPadding: x,
        sidebarBackgroundColor: $,
        contentBackgroundColor: he,
        content: L
      }
    );
  if (!bs)
    return null;
  const Gt = m ?? (bn ? /* @__PURE__ */ o(bn, { ...pt }) : null), wo = de && (() => bl("notifications")), ys = Z + Q, _l = {
    avatarColor: z,
    // The standard menu only runs `onClick`, so path rows navigate here.
    menuItems: R == null ? void 0 : R.map(
      (M) => M.onClick || !M.path ? M : { ...M, onClick: () => D == null ? void 0 : D(M.path) }
    ),
    showNotifications: K,
    notificationCount: Z,
    whatsNewCount: Q,
    onNotificationsClick: wo,
    notificationsTriggerProps: xl,
    notificationsOpen: Je.open,
    showProfile: W,
    userName: te,
    userRole: B,
    userAvatar: A,
    showSettings: Y,
    onSettingsClick: G,
    showThemeToggler: ze,
    theme: ue,
    onThemeToggle: nt,
    onLogout: Sl
  }, fo = (M, le = !1) => /* @__PURE__ */ o(
    _c,
    {
      ..._l,
      compact: M,
      hoverOpen: le,
      color: Te,
      hoverColor: Ft
    }
  ), Rl = Wt ? [cr() ? "⌘" : "Ctrl", Wt.toUpperCase()] : void 0, Es = (M) => it && Dt === "sidebar" ? /* @__PURE__ */ o(
    ql,
    {
      variant: M ? "sidebar-icon" : "sidebar",
      onClick: Ve,
      active: mt,
      busy: gn,
      shortcutKeys: Rl,
      accentColor: Te
    }
  ) : null, Ns = S ? [cr() ? "⌘" : "Ctrl", S.toUpperCase()] : void 0, Ss = (M) => Gt ? /* @__PURE__ */ o(
    kc,
    {
      search: Gt,
      icon: h,
      mode: M,
      onExpand: () => {
        ro.pin(), ul(!0);
      },
      autoFocus: cs,
      onAutoFocused: ds,
      color: Te,
      hoverColor: Ft,
      shortcutKeys: Ns
    }
  ) : null, Nn = (M) => {
    const le = Es(M !== "full"), Qe = Ss(M);
    return le || Qe ? /* @__PURE__ */ E(
      "div",
      {
        className: y(
          "lw:flex lw:flex-col",
          M === "full" ? "lw:items-stretch" : "lw:items-center"
        ),
        style: { gap: He ? Yn : 12 },
        children: [
          le,
          He && le && Qe ? /* @__PURE__ */ o(
            "div",
            {
              role: "separator",
              className: "lw:w-full lw:border-t lw:border-solid",
              style: {
                borderTopColor: tn(Te)
              }
            }
          ) : null,
          Qe
        ]
      }
    ) : void 0;
  }, Tl = () => /* @__PURE__ */ o(
    Do,
    {
      mainLinks: t,
      secondaryLinks: n,
      activePath: F,
      onLinkClick: D,
      showHeaderBar: V,
      logo: lo,
      title: l,
      onBrandClick: vn,
      brandMenuOpen: yn,
      brandColor: xn,
      headerBackgroundColor: V ? dl : void 0,
      headerForegroundColor: V ? Bt : void 0,
      activeAccentColor: z,
      activeBackgroundColor: Re,
      groupArrowColor: me,
      groupAccentColor: b,
      activeForegroundColor: T,
      foregroundColor: be,
      surfaceBackgroundColor: cl,
      flyoutSurfaceColor: xe,
      collapsed: ge || Ge,
      showLabels: ge,
      expandedWidth: Co,
      collapsedWidth: ge ? Nr : il,
      topContent: Nn(
        ge ? "popover" : Ge ? al : "full"
      ),
      footer: fo(
        ge || Ge,
        oo
      ),
      submenuMode: He ? "flyout" : "inline"
    }
  ), Al = (M) => He ? _s(M) : Rs(M), _s = (M) => /* @__PURE__ */ E(
    "aside",
    {
      ...Le ? bt.rootProps : {},
      "data-auto-hide": Le ? "true" : void 0,
      "data-shown": Le ? String(Ue) : void 0,
      className: y(
        // Above the page, including its sticky app bars
        "lw:top-0 lw:h-screen",
        Le ? (
          // and above dialogs (1300), so a modal never covers the
          // edge; under menus, popovers and toasts (1400)
          "lw:pointer-events-none lw:fixed lw:left-0 lw:z-[1350]"
        ) : "lw:sticky lw:z-[1101] lw:shrink-0 lw:self-start"
      ),
      style: Le ? { width: ea } : {
        width: Ze,
        minWidth: Ze,
        backgroundColor: U
      },
      children: [
        Le && /* @__PURE__ */ o(
          "div",
          {
            "data-testid": "sidebar-edge-reveal",
            "aria-hidden": "true",
            className: "lw:pointer-events-auto lw:absolute lw:inset-y-0 lw:left-0",
            style: { width: Kc }
          }
        ),
        Le && /* @__PURE__ */ o(
          "div",
          {
            ref: bt.glowRef,
            "data-testid": "sidebar-edge-glow",
            "data-visible": String(bt.nearEdge && !Ue),
            "aria-hidden": "true",
            className: "lw:pointer-events-none lw:absolute lw:inset-y-0 lw:left-0 lw:transition-opacity lw:duration-200 lw:ease-[ease]",
            style: {
              "--edge-glow-y": "50%",
              width: ir,
              // A pool of light at the edge, where the pointer is
              background: `radial-gradient(${ir}px ${Oo}px at 0 var(--edge-glow-y), ${at(Te, P ? 0.5 : 0.4)}, ${at(Te, 0)})`,
              opacity: bt.nearEdge && !Ue ? 1 : 0
            },
            children: /* @__PURE__ */ o(
              "span",
              {
                className: "lw:absolute lw:inset-y-0 lw:left-0 lw:w-[3px]",
                style: {
                  background: `linear-gradient(180deg, transparent calc(var(--edge-glow-y) - ${Oo}px), ${at(Te, P ? 0.95 : 0.85)} var(--edge-glow-y), transparent calc(var(--edge-glow-y) + ${Oo}px))`
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
              ie
            ),
            style: {
              top: st,
              bottom: st,
              left: st,
              width: nn,
              borderRadius: _r,
              ...Le && {
                pointerEvents: Ue ? "auto" : "none",
                opacity: Ue ? 1 : 0,
                transform: Ue ? "none" : `translateX(calc(-100% - ${2 * st}px))`,
                transition: jc
              },
              ...H
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
        width: Jt,
        minWidth: Jt
      },
      children: /* @__PURE__ */ o(
        "div",
        {
          ...He ? {} : ro.rootProps,
          "data-testid": "sidebar-hover-panel",
          "data-expanded": Ge ? "false" : "true",
          className: y(
            "lw:absolute lw:top-0 lw:left-0 lw:flex lw:h-full lw:flex-col lw:overflow-hidden lw:border-r lw:border-solid lw:border-border",
            ie
          ),
          style: {
            width: Ge ? Jt : Co,
            backgroundColor: xe,
            boxShadow: Ge ? "none" : `4px 0 24px rgba(0, 0, 0, ${P ? 0.5 : 0.12})`,
            transition: Xc,
            ...H
          },
          children: M
        }
      )
    }
  ), Ts = Tr(x), dt = w || !io ? null : Le && !ct.openedByHover ? { ...io, left: st } : io;
  return /* @__PURE__ */ o(mr.Provider, { value: ue, children: /* @__PURE__ */ o(xr.Provider, { value: z, children: /* @__PURE__ */ o(Kn.Provider, { value: xe, children: /* @__PURE__ */ o(es.Provider, { value: _, children: /* @__PURE__ */ E(
    "div",
    {
      ref: gl,
      "data-lw-scope": "",
      "data-lw-theme": ue,
      className: y("lw:flex lw:min-h-screen", J),
      style: q,
      children: [
        w && /* @__PURE__ */ o(
          Ji,
          {
            height: Mn,
            onMenuClick: r && !De ? () => xt(!0) : void 0,
            appName: l,
            logo: lo,
            onBrandClick: vn,
            brandMenuOpen: yn,
            background: gt,
            color: Bt,
            brandColor: xn,
            endContent: K ? /* @__PURE__ */ o(
              nl,
              {
                count: ys,
                onClick: wo,
                color: Bt,
                hoverColor: Ft,
                tooltipPlacement: "bottom",
                testId: "mobile-notifications"
              }
            ) : void 0
          }
        ),
        r && !w && ge && /* @__PURE__ */ o(
          "aside",
          {
            className: y(
              "lw:sticky lw:top-0 lw:z-[2] lw:flex lw:h-screen lw:shrink-0 lw:flex-col lw:self-start lw:border-r lw:border-solid lw:border-border",
              ie
            ),
            style: {
              width: Ze,
              minWidth: Ze,
              ...H
            },
            children: Tl()
          }
        ),
        r && !w && V && Al(
          /* @__PURE__ */ E(ve, { children: [
            Tl(),
            (I == null ? void 0 : I.show) && !Ge && /* @__PURE__ */ o($n, { ...I })
          ] })
        ),
        Me && Al(
          /* @__PURE__ */ E(ve, { children: [
            /* @__PURE__ */ o(
              Nc,
              {
                mainLinks: t,
                secondaryLinks: n,
                activePath: F,
                onLinkClick: D,
                logo: lo,
                title: l,
                onBrandClick: vn,
                brandMenuOpen: yn,
                brandColor: xn,
                headerBackgroundColor: dl,
                headerForegroundColor: Bt,
                activeAccentColor: z,
                activeBackgroundColor: Re,
                groupArrowColor: me,
                groupAccentColor: b,
                activeForegroundColor: T,
                foregroundColor: be,
                surfaceBackgroundColor: cl,
                flyoutSurfaceColor: xe,
                collapsed: Ge,
                expandedWidth: Co,
                collapsedWidth: il,
                topContent: Nn(
                  Ge ? al : "full"
                ),
                submenuMode: He ? "flyout" : "inline",
                color: Te,
                hoverColor: Ft,
                avatarColor: z,
                showProfile: W,
                userName: te,
                userEmail: k,
                userRole: B,
                userAvatar: A,
                showNotifications: K,
                notificationCount: Z,
                onNotificationsClick: hl ? wo : ne,
                notificationsTriggerProps: xl,
                notificationsOpen: Je.open,
                whatsNewCount: Q,
                onProfileClick: oe,
                onAiUsageClick: fe,
                menuItems: R,
                onLogout: Sl,
                theme: ue,
                showThemeToggler: ze,
                onThemeToggle: nt
              }
            ),
            (I == null ? void 0 : I.show) && !Ge && /* @__PURE__ */ o($n, { ...I })
          ] })
        ),
        r && !w && !Ce && !we && // The fixed rail: a permanent drawer, its column fixed
        // to the window's left edge
        /* @__PURE__ */ o(
          "div",
          {
            "data-slot": "rail-drawer",
            className: y(
              "lw:z-[2] lw:shrink-0",
              ie
            ),
            style: {
              width: Ze,
              ...H
            },
            children: /* @__PURE__ */ E(
              "aside",
              {
                "data-slot": "rail-drawer-paper",
                className: "lw:fixed lw:top-0 lw:left-0 lw:z-[1200] lw:flex lw:h-full lw:flex-col lw:overflow-y-auto lw:px-3 lw:pt-4",
                style: {
                  width: Ze,
                  backgroundColor: U
                },
                children: [
                  /* @__PURE__ */ o("div", { className: "lw:mb-3 lw:flex lw:justify-center", children: /* @__PURE__ */ o(
                    Hn,
                    {
                      logo: is,
                      appName: l,
                      onClick: vn,
                      menuOpen: yn,
                      color: v ?? Te,
                      testId: "sidebar-header-brand"
                    }
                  ) }),
                  Nn("popover"),
                  /* @__PURE__ */ E("div", { className: "lw:mt-2 lw:flex lw:min-h-0 lw:flex-auto lw:flex-col lw:overflow-y-auto", children: [
                    /* @__PURE__ */ o(
                      Mi,
                      {
                        mainLinks: t,
                        secondaryLinks: n,
                        activePath: F,
                        onLinkClick: D,
                        accentColor: z,
                        surfaceBackgroundColor: U,
                        railShowTitles: s
                      }
                    ),
                    (I == null ? void 0 : I.show) && /* @__PURE__ */ o(
                      $n,
                      {
                        ...I
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
            onOpenChange: xt,
            children: /* @__PURE__ */ E(
              Gn,
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
                        D == null || D(M), xt(!1);
                      },
                      onLinkAction: () => xt(!1),
                      collapsed: !1,
                      expandedWidth: De ? "100%" : Uc,
                      activeAccentColor: z,
                      activeBackgroundColor: Re,
                      groupArrowColor: me,
                      groupAccentColor: b,
                      activeForegroundColor: T,
                      foregroundColor: be,
                      surfaceBackgroundColor: xe,
                      topInsetPx: De ? 8 : 0,
                      topContent: De ? void 0 : Nn("full"),
                      footer: De ? void 0 : fo(!1)
                    }
                  ),
                  (I == null ? void 0 : I.show) && /* @__PURE__ */ o($n, { ...I })
                ]
              }
            )
          }
        ),
        De && Gt && /* @__PURE__ */ o(
          Vi,
          {
            open: fl,
            onClose: () => so(!1),
            search: Gt
          }
        ),
        De && /* @__PURE__ */ o(
          ji,
          {
            ..._l,
            pinnedLinks: p,
            activePath: F,
            onLinkClick: D,
            onMenuClick: r ? () => xt(!0) : void 0,
            menuOpen: wl,
            onSearchClick: Gt ? () => so(!0) : void 0,
            searchOpen: fl,
            showAssistant: it,
            assistantLabel: to,
            onAssistantClick: Ve,
            assistantActive: mt,
            showProfile: W,
            background: xe,
            color: Te,
            activeColor: z,
            activeBackground: Ft
          }
        ),
        /* @__PURE__ */ o(
          "main",
          {
            "data-lw-host": "",
            className: y(
              "lw-content-padding lw:grow",
              Ee
            ),
            style: {
              ...Ts,
              // Where sticky page elements should pin (below the mobile bar)
              "--lumora-sticky-top": w ? `${Mn}px` : "0px",
              padding: "var(--lumora-content-padding)",
              width: Ze ? `calc(100% - ${Ze}px)` : "100%",
              marginTop: w ? `${Mn}px` : 0,
              // Keep the last content clear of the bottom bar
              ...De && {
                paddingBottom: `calc(var(--lumora-content-padding) + ${ml})`
              },
              backgroundColor: U,
              ...j
            },
            children: e
          }
        ),
        wt && /* @__PURE__ */ o(
          Si,
          {
            open: vl,
            variant: yl,
            position: hn,
            width: Lt,
            sidebarWidthPx: Ze,
            bottomOffsetPx: it && Dt === "floating" ? Yc : 0,
            fullScreen: w,
            fullScreenBottom: De ? ml : "0px",
            onClose: eo,
            children: /* @__PURE__ */ o(wt, {})
          }
        ),
        it && Dt === "floating" && !De && /* @__PURE__ */ o(
          ql,
          {
            variant: "floating",
            rightOffsetPx: vs,
            shortcutKeys: Rl,
            onClick: Ve,
            active: mt,
            busy: gn
          }
        ),
        K && de && /* @__PURE__ */ o(
          Fo,
          {
            open: Je.open,
            modal: !ct.openedByHover,
            onOpenChange: (M) => {
              M || ao();
            },
            children: /* @__PURE__ */ o(
              Gn,
              {
                ...ct.contentProps,
                onMouseOver: Le && ct.openedByHover ? bt.rootProps.onMouseOver : void 0,
                onOpenAutoFocus: (M) => {
                  ct.openedByHover && M.preventDefault();
                },
                side: dt ? "left" : "right",
                srTitle: "Updates",
                className: dt ? "lw-slide-from-edge lw:overflow-hidden lw:rounded-lg lw:border-0" : "lw:overflow-hidden lw:rounded-l-lg lw:border-0",
                style: dt ? {
                  width: 380,
                  maxWidth: `calc(100vw - ${dt.left}px)`,
                  left: dt.left,
                  top: dt.top,
                  height: dt.height
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
                      de,
                      {
                        onClose: ao,
                        initialTab: Je.tab
                      },
                      Je.tab
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
}, cd = Vc, Pe = {
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
}, yt = {
  300: "hsl(120, 61%, 77%)",
  400: "hsl(120, 44%, 53%)",
  500: "hsl(120, 59%, 30%)",
  700: "hsl(120, 75%, 16%)",
  800: "hsl(120, 84%, 10%)"
}, Et = {
  300: "hsl(45, 90%, 65%)",
  400: "hsl(45, 90%, 40%)",
  500: "hsl(45, 90%, 35%)",
  700: "hsl(45, 94%, 20%)",
  800: "hsl(45, 95%, 16%)"
}, Nt = {
  300: "hsl(0, 90%, 65%)",
  400: "hsl(0, 90%, 40%)",
  500: "hsl(0, 90%, 30%)",
  700: "hsl(0, 94%, 18%)",
  800: "hsl(0, 95%, 12%)"
}, St = (e, t) => {
  const n = /^hsl\((.+)\)$/.exec(e);
  if (n)
    return `hsla(${n[1]}, ${t})`;
  const l = /^#([0-9a-f]{6})$/i.exec(e);
  if (l) {
    const r = parseInt(l[1], 16);
    return `rgba(${r >> 16 & 255}, ${r >> 8 & 255}, ${r & 255}, ${t})`;
  }
  return e;
}, We = (e) => `${e / 16}rem`, re = (...e) => [
  `${e[0]}px ${e[1]}px ${e[2]}px ${e[3]}px rgba(0,0,0,0.2)`,
  `${e[4]}px ${e[5]}px ${e[6]}px ${e[7]}px rgba(0,0,0,0.14)`,
  `${e[8]}px ${e[9]}px ${e[10]}px ${e[11]}px rgba(0,0,0,0.12)`
].join(","), Zc = [
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
], dd = (e) => {
  const t = e === "dark", n = [...Zc];
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
      warning: t ? { light: Et[400], main: Et[500], dark: Et[700] } : { light: Et[300], main: Et[400], dark: Et[800] },
      error: t ? { light: Nt[400], main: Nt[500], dark: Nt[700] } : { light: Nt[300], main: Nt[400], dark: Nt[800] },
      success: t ? { light: yt[400], main: yt[500], dark: yt[700] } : { light: yt[300], main: yt[400], dark: yt[800] },
      grey: Fe,
      divider: t ? St(Fe[700], 0.6) : St(Fe[300], 0.4),
      background: t ? { default: Fe[900], paper: "hsl(220, 30%, 7%)" } : { default: "hsl(0, 0%, 99%)", paper: "hsl(220, 35%, 97%)" },
      text: t ? { primary: "hsl(0, 0%, 100%)", secondary: Fe[400] } : { primary: Fe[800], secondary: Fe[600] },
      action: t ? {
        hover: St(Fe[600], 0.2),
        selected: St(Fe[600], 0.3)
      } : {
        hover: St(Fe[200], 0.2),
        selected: St(Fe[200], 0.3)
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
  ce as AUTH_ERROR_CODES,
  ea as AUTO_HIDE_RAIL_WIDTH_PX,
  se as AuthError,
  Do as CollapsibleSidebar,
  ad as FullBleedSection,
  ti as Kbd,
  ii as LumoraShellSkeleton,
  cd as LumoraWrapper,
  dn as clearAuthTokens,
  cd as default,
  id as getAuthErrorMessage,
  cn as getAuthTokens,
  ui as getCurrentUser,
  dd as getDesignTokens,
  di as isAuthenticated,
  Mo as logAuthError,
  Gr as storeAuthTokens
};
