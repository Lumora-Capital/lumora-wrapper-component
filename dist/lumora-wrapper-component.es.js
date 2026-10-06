import { jsx as e, jsxs as u, Fragment as at } from "react/jsx-runtime";
import zo from "@mui/icons-material/KeyboardArrowDownRounded";
import Bo from "@mui/icons-material/KeyboardArrowUpRounded";
import Zt from "@mui/icons-material/ChevronRightRounded";
import Mo from "@mui/icons-material/ViewSidebarOutlined";
import x from "@mui/material/Box";
import vr from "@mui/material/Collapse";
import Te from "@mui/material/Divider";
import we from "@mui/material/IconButton";
import vt from "@mui/material/ListItemButton";
import ae from "@mui/material/ListItemIcon";
import Le from "@mui/material/ListItemText";
import se from "@mui/material/Stack";
import xe from "@mui/material/Tooltip";
import z from "@mui/material/Typography";
import { useTheme as Dt, createTheme as Kr, alpha as Xe, ThemeProvider as wr } from "@mui/material/styles";
import * as m from "react";
import { useMemo as Rr, useState as Ze, useCallback as Lo, useRef as Kt, useEffect as wt } from "react";
import et from "@mui/material/ButtonBase";
import { useTheme as Fo, useMediaQuery as Ho, Box as pe, CircularProgress as Po, CssBaseline as $o, Drawer as Ir, SwipeableDrawer as Uo, Stack as Ko } from "@mui/material";
import Cr from "axios";
import Go from "@mui/material/Card";
import jo from "@mui/material/CardContent";
import Gr from "@mui/material/Button";
import Xo from "@mui/icons-material/AutoAwesomeRounded";
import Vo from "@mui/material/Grow";
import or from "@mui/material/Paper";
import Yo from "@mui/material/Slide";
import qo from "@mui/material/ListSubheader";
import Re from "@mui/material/MenuItem";
import Nt from "@mui/material/MenuList";
import Jo from "@mui/material/Popper";
import jr from "@mui/icons-material/MenuRounded";
import Xr from "@mui/icons-material/SearchRounded";
import Vr from "@mui/icons-material/LogoutRounded";
import Yr from "@mui/icons-material/NotificationsNoneOutlined";
import qr from "@mui/icons-material/SettingsOutlined";
import Zo from "@mui/material/Avatar";
import Qo from "@mui/material/Menu";
import Or from "@mui/material/ToggleButton";
import en from "@mui/material/ToggleButtonGroup";
import tn from "@mui/material/Drawer";
import rn from "@mui/material/AppBar";
import on from "@mui/material/Toolbar";
import Jr from "@mui/material/Badge";
import nn from "@mui/icons-material/DarkModeOutlined";
import an from "@mui/icons-material/LayersOutlined";
import sn from "@mui/icons-material/LightModeOutlined";
import ln from "@mui/icons-material/SettingsBrightnessOutlined";
import Zr from "@mui/material/Popover";
import cn from "@mui/icons-material/ArrowOutwardRounded";
import dn from "@mui/icons-material/CheckRounded";
import un from "@mui/icons-material/ShieldOutlined";
import hn from "@mui/icons-material/ExpandMoreRounded";
const Tt = ({
  logo: t,
  title: r,
  appName: o,
  onClick: n,
  color: i,
  testId: h
}) => {
  const s = {
    alignItems: "center",
    gap: 1,
    minWidth: 0,
    flexShrink: 0,
    color: i,
    // Consumer SVG logos pick up the brand color
    "& svg": { color: "inherit", fill: "currentColor" }
  }, l = /* @__PURE__ */ u(at, { children: [
    r ? /* @__PURE__ */ e(
      z,
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
        children: r
      }
    ) : null,
    t
  ] });
  return n ? /* @__PURE__ */ e(
    et,
    {
      onClick: n,
      "aria-label": `${o} home`,
      "data-testid": h,
      focusRipple: !0,
      sx: {
        ...s,
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
  ) : /* @__PURE__ */ e(se, { direction: "row", "data-testid": h, sx: s, children: l });
}, mt = (t) => {
  var r;
  return !!((r = t.subitems) != null && r.length);
}, Ot = (t, r) => t ? `${t}/${r.text}` : r.text, Qe = (t, r) => {
  var o;
  return r ? t.path && r === t.path ? !0 : ((o = t.subitems) == null ? void 0 : o.some((n) => Qe(n, r))) ?? !1 : !1;
}, je = (t, r) => !!(r && t.path === r), Qr = (t, r) => (t ?? []).flatMap((o) => {
  const n = o.icon ?? r;
  return mt(o) ? Qr(o.subitems, n) : o.path ? [{ sub: o, icon: n }] : [];
}), Qt = (t) => {
  const r = eo(t);
  if (!r)
    return "#ffffff";
  const [o, n, i] = r.map((s) => {
    const l = s / 255;
    return l <= 0.03928 ? l / 12.92 : ((l + 0.055) / 1.055) ** 2.4;
  });
  return 0.2126 * o + 0.7152 * n + 0.0722 * i > 0.5 ? "#0b1f1c" : "#ffffff";
}, At = (t) => {
  const r = eo(t);
  if (!r)
    return "rgba(1, 88, 79, 0.12)";
  const [o, n, i] = r;
  return `rgba(${o}, ${n}, ${i}, 0.14)`;
}, eo = (t) => {
  let r = t.trim().replace(/^#/, "");
  if (r.length === 3 && (r = r.split("").map((n) => n + n).join("")), r.length !== 6 || /[^0-9a-fA-F]/.test(r))
    return null;
  const o = parseInt(r, 16);
  return [o >> 16 & 255, o >> 8 & 255, o & 255];
}, to = () => typeof window < "u" && !!window.localStorage, ro = (t) => {
  if (!to())
    return null;
  try {
    const r = window.localStorage.getItem(t);
    return r === null ? null : r === "true";
  } catch (r) {
    return console.warn("Failed to read sidebar collapsed state:", r), null;
  }
}, oo = (t, r) => {
  if (to())
    try {
      window.localStorage.setItem(t, r ? "true" : "false");
    } catch (o) {
      console.warn("Failed to persist sidebar collapsed state:", o);
    }
}, pn = (t) => {
  typeof window > "u" || window.open(t, "_blank", "noopener,noreferrer");
}, no = (t) => t.replace(/_/g, " ").split(/\s+/).filter(Boolean).join(" ").toUpperCase(), fn = 264, mn = 72, xn = "lumora:sidebar-collapsed", gn = "width 200ms ease", _r = 64, Rt = {
  "&:focus, &:focus-visible": { outline: "none" }
}, bn = 16, Sn = 14, En = 4, yn = 2.5, Tr = "0.7rem", Ar = 22, tt = ({ text: t, variant: r = "body1", center: o = !1, fontSize: n, fontWeight: i }) => {
  const h = m.useRef(null), [s, l] = m.useState(!1), c = m.useCallback(() => {
    const d = h.current;
    d && l(d.scrollWidth > d.clientWidth + 0.5);
  }, []);
  return m.useLayoutEffect(() => {
    c();
  }, [c, t]), m.useEffect(() => {
    const d = h.current;
    if (!d)
      return;
    const p = new ResizeObserver(() => c());
    return p.observe(d), () => p.disconnect();
  }, [c]), /* @__PURE__ */ e(
    xe,
    {
      title: t,
      placement: "right",
      arrow: !0,
      enterDelay: 400,
      disableHoverListener: !s,
      disableFocusListener: !s,
      disableTouchListener: !s,
      children: /* @__PURE__ */ e(
        z,
        {
          ref: h,
          component: "span",
          variant: r,
          sx: {
            display: "block",
            width: o ? "100%" : void 0,
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
            color: "inherit",
            ...n ? { fontSize: n } : {},
            ...i ? { fontWeight: i } : {},
            ...o ? { textAlign: "center", lineHeight: 1.1 } : {}
          },
          children: t
        }
      )
    }
  );
}, vn = ({
  open: t,
  size: r = bn
}) => t ? /* @__PURE__ */ e(Bo, { sx: { fontSize: r, opacity: 0.75 } }) : /* @__PURE__ */ e(zo, { sx: { fontSize: r, opacity: 0.75 } }), Dr = ({ open: t }) => /* @__PURE__ */ e(
  Zt,
  {
    sx: {
      fontSize: 20,
      opacity: 0.75,
      transition: "transform 150ms ease",
      transform: t ? "rotate(90deg)" : "none"
    }
  }
), wn = () => /* @__PURE__ */ e(Mo, { sx: { transform: "scaleX(-1)" } }), It = 600, er = ({
  mainLinks: t,
  secondaryLinks: r = [],
  activePath: o,
  onLinkClick: n,
  onLinkAction: i,
  logo: h,
  title: s,
  onBrandClick: l,
  showHeaderBar: c = !1,
  headerBackgroundColor: d,
  headerForegroundColor: p,
  brandColor: w,
  activeAccentColor: f = "#01584f",
  groupAccentColor: g,
  activeForegroundColor: R,
  foregroundColor: b,
  surfaceBackgroundColor: y,
  collapsed: M,
  defaultCollapsed: D = !1,
  onCollapsedChange: v,
  persistKey: L = xn,
  expandedWidth: j = fn,
  collapsedWidth: $ = mn,
  showLabels: E = !1,
  topInsetPx: ee = 0,
  topContent: te,
  footer: I
}) => {
  const U = Dt(), N = U.palette.mode === "dark", W = M !== void 0, [re, ge] = m.useState(
    () => ro(L) ?? D
  ), Y = W ? !!M : re, [be, Ie] = m.useState(
    {}
  ), C = R ?? Qt(f), le = {
    bgcolor: f,
    color: C,
    "& .MuiListItemIcon-root": { color: C }
  }, Ae = {
    bgcolor: f,
    color: C,
    borderRadius: "8px"
  }, X = g ?? At(f), Fe = y ?? (N ? U.palette.background.paper : "#ffffff"), q = b ?? (N ? "text.primary" : f), Ce = d ?? Fe, _ = p ?? (d ? Qt(Ce) : b ?? (N ? U.palette.text.primary : f)), Ve = At(_), Z = (a) => {
    n == null || n(a);
  }, He = () => {
    const a = !Y;
    W || (ge(a), oo(L, a)), v == null || v(a);
  }, De = (a, T) => {
    Ie((F) => ({ ...F, [a]: !T }));
  }, Se = (a, T) => be[T] ?? Qe(a, o), H = (a, T, F) => ({
    color: a ? C : q,
    bgcolor: a ? f : "transparent",
    "& .MuiListItemIcon-root": {
      color: a ? C : q,
      minWidth: F
    },
    "&:hover": a || E ? le : { bgcolor: T }
  }), Ne = {
    "&.Mui-selected": {
      bgcolor: f
    },
    "&.Mui-selected:hover": le
  }, oe = (a) => {
    const T = je(a, o), F = /* @__PURE__ */ u(
      vt,
      {
        disabled: !a.path,
        selected: T,
        onClick: () => a.path && Z(a.path),
        "data-testid": `sidebar-item-${a.text}`,
        "data-active": T ? "true" : "false",
        sx: {
          borderRadius: "8px",
          py: 1.25,
          px: 1.5,
          // Room for the action button laid over the row's end
          ...a.action && { pr: 6 },
          ...H(T, X, 36),
          ...Ne
        },
        children: [
          /* @__PURE__ */ e(ae, { children: a.icon }),
          /* @__PURE__ */ e(
            Le,
            {
              disableTypography: !0,
              primary: /* @__PURE__ */ e(
                tt,
                {
                  text: a.text,
                  fontWeight: It
                }
              )
            }
          )
        ]
      },
      a.text
    );
    if (!a.action)
      return F;
    const { action: A } = a;
    return /* @__PURE__ */ u(x, { sx: { position: "relative" }, children: [
      F,
      /* @__PURE__ */ e(xe, { title: A.label, placement: "right", arrow: !0, children: /* @__PURE__ */ e(
        we,
        {
          "aria-label": A.label,
          "data-testid": `sidebar-action-${a.text}`,
          onClick: () => {
            A.onClick(), i == null || i();
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
            borderColor: T ? "rgba(255, 255, 255, 0.35)" : X,
            color: T ? C : q,
            "&:hover": {
              bgcolor: T ? "rgba(255, 255, 255, 0.15)" : X
            },
            "& .MuiSvgIcon-root": { fontSize: 18 },
            // No lingering outline after a click; a clear ring for keyboard focus
            "&:focus:not(.Mui-focusVisible)": {
              outline: "none"
            },
            "&.Mui-focusVisible": {
              outline: "2px solid",
              outlineColor: T ? C : q,
              outlineOffset: 1
            }
          },
          children: A.icon
        }
      ) })
    ] }, a.text);
  }, ce = (a) => {
    const T = Qe(a, o), F = je(a, o), A = Ot("", a), K = Se(a, A);
    return /* @__PURE__ */ u(
      x,
      {
        "data-testid": `sidebar-group-${a.text}`,
        sx: {
          borderRadius: "8px",
          bgcolor: T ? X : "transparent"
        },
        children: [
          /* @__PURE__ */ u(
            vt,
            {
              onClick: () => De(A, K),
              "data-testid": `sidebar-item-${a.text}`,
              "data-active": F ? "true" : "false",
              "aria-expanded": K,
              sx: {
                borderRadius: "8px",
                py: 1.25,
                px: 1.5,
                ...H(F, X, 36)
              },
              children: [
                /* @__PURE__ */ e(ae, { children: a.icon }),
                /* @__PURE__ */ e(
                  Le,
                  {
                    disableTypography: !0,
                    primary: /* @__PURE__ */ e(
                      tt,
                      {
                        text: a.text,
                        fontWeight: It
                      }
                    )
                  }
                ),
                /* @__PURE__ */ e(Dr, { open: K })
              ]
            }
          ),
          /* @__PURE__ */ e(vr, { in: K, timeout: "auto", unmountOnExit: !0, children: /* @__PURE__ */ e(
            x,
            {
              "data-testid": `sidebar-children-${a.text}`,
              sx: { pb: 0.5 },
              children: a.subitems.map(
                (V) => de(V, A, 1)
              )
            }
          ) })
        ]
      },
      a.text
    );
  }, de = (a, T, F) => {
    const A = Ot(T, a), K = En + (F - 1) * yn;
    if (mt(a)) {
      const _e = Qe(a, o), k = je(a, o), ze = Se(a, A);
      return /* @__PURE__ */ u(x, { "data-testid": `sidebar-group-${a.text}`, children: [
        /* @__PURE__ */ u(
          vt,
          {
            onClick: () => De(A, ze),
            "data-testid": `sidebar-subitem-${a.text}`,
            "data-active": _e ? "true" : "false",
            "aria-expanded": ze,
            sx: {
              borderRadius: "8px",
              mx: 0.5,
              py: 0.75,
              pl: K,
              ...H(k, "action.hover", 32)
            },
            children: [
              a.icon ? /* @__PURE__ */ e(ae, { children: a.icon }) : null,
              /* @__PURE__ */ e(
                Le,
                {
                  disableTypography: !0,
                  primary: /* @__PURE__ */ e(
                    tt,
                    {
                      text: a.text,
                      fontWeight: It
                    }
                  )
                }
              ),
              /* @__PURE__ */ e(Dr, { open: ze })
            ]
          }
        ),
        /* @__PURE__ */ e(vr, { in: ze, timeout: "auto", unmountOnExit: !0, children: /* @__PURE__ */ e(x, { "data-testid": `sidebar-children-${a.text}`, children: a.subitems.map(
          (st) => de(st, A, F + 1)
        ) }) })
      ] }, A);
    }
    const V = je(a, o);
    return /* @__PURE__ */ u(
      vt,
      {
        selected: V,
        disabled: !a.path,
        onClick: () => a.path && Z(a.path),
        "data-testid": `sidebar-subitem-${a.text}`,
        "data-active": V ? "true" : "false",
        sx: {
          borderRadius: "8px",
          mx: 0.5,
          py: 0.75,
          pl: K,
          ...H(V, "action.hover", 32),
          ...Ne
        },
        children: [
          a.icon ? /* @__PURE__ */ e(ae, { children: a.icon }) : null,
          /* @__PURE__ */ e(
            Le,
            {
              disableTypography: !0,
              primary: /* @__PURE__ */ e(
                tt,
                {
                  text: a.text,
                  fontWeight: It
                }
              )
            }
          )
        ]
      },
      A
    );
  }, ne = (a, T, F, A, K, V) => {
    const _e = !K, k = /* @__PURE__ */ u(
      we,
      {
        "aria-label": T,
        disabled: _e,
        onClick: K,
        "data-testid": (V == null ? void 0 : V.testId) ?? `sidebar-item-${T}`,
        "data-active": A ? "true" : "false",
        sx: E ? {
          display: "flex",
          flexDirection: "column",
          gap: 0.25,
          width: "100%",
          maxWidth: "100%",
          height: "auto",
          // 8px padding on all sides of the item container.
          p: 1,
          borderRadius: "8px",
          color: A ? C : q,
          bgcolor: A ? f : "transparent",
          "& .MuiSvgIcon-root": {
            fontSize: Ar
          },
          "&:hover": Ae,
          ...Rt
        } : {
          // Icon-only collapsed rail (collapsible variant):
          // original hover — accent when active, else a subtle
          // tint; no foreground change.
          width: 44,
          height: 44,
          color: A ? C : q,
          bgcolor: A ? f : "transparent",
          borderRadius: A ? "8px" : "50%",
          "&:hover": {
            bgcolor: A ? f : V != null && V.insideGroup ? "action.hover" : X,
            borderRadius: "8px"
          },
          ...Rt
        },
        children: [
          F,
          E ? /* @__PURE__ */ e(
            tt,
            {
              text: T,
              variant: "caption",
              center: !0,
              fontSize: Tr
            }
          ) : null
        ]
      }
    );
    return E ? _e ? /* @__PURE__ */ e("span", { children: k }, a) : /* @__PURE__ */ e(m.Fragment, { children: k }, a) : /* @__PURE__ */ e(xe, { title: T, placement: "right", arrow: !0, children: _e ? /* @__PURE__ */ e("span", { children: k }) : k }, a);
  }, S = (a) => {
    const T = Qe(a, o), F = je(a, o), A = Ot("", a), K = Se(a, A), V = /* @__PURE__ */ u(
      we,
      {
        "aria-label": a.text,
        "aria-expanded": K,
        onClick: () => De(A, K),
        "data-testid": `sidebar-item-${a.text}`,
        "data-active": F ? "true" : "false",
        sx: {
          display: "flex",
          flexDirection: "column",
          gap: E ? 0.25 : 0,
          width: E ? "100%" : 44,
          maxWidth: "100%",
          // 8px padding on all sides of the labeled item container.
          ...E ? { p: 1 } : { py: 0.75 },
          borderRadius: "10px",
          color: F ? C : q,
          bgcolor: F ? f : "transparent",
          // rail-labeled: active AND hover share the highlight. collapsible:
          // original behavior — accent only when active; the outer pill
          // supplies the idle-hover tint, so the button stays transparent.
          "&:hover": E ? { bgcolor: f, color: C } : {
            bgcolor: F ? f : "transparent"
          },
          ...Rt
        },
        children: [
          E ? /* @__PURE__ */ e(
            x,
            {
              sx: {
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                "& .MuiSvgIcon-root": {
                  fontSize: Ar
                }
              },
              children: a.icon
            }
          ) : a.icon,
          E ? /* @__PURE__ */ e(
            tt,
            {
              text: a.text,
              variant: "caption",
              center: !0,
              fontSize: Tr
            }
          ) : null,
          /* @__PURE__ */ e(vn, { open: K, size: Sn })
        ]
      }
    ), _e = E ? V : /* @__PURE__ */ e(xe, { title: a.text, placement: "right", arrow: !0, children: V });
    return /* @__PURE__ */ u(
      x,
      {
        "data-testid": `sidebar-group-${a.text}`,
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
          bgcolor: T ? X : "transparent",
          ...E ? {} : { "&:hover": { bgcolor: X } }
        },
        children: [
          _e,
          K ? Qr(a.subitems, a.icon).map(
            ({ sub: k, icon: ze }) => ne(
              k.path,
              k.text,
              ze,
              je(k, o),
              () => Z(k.path),
              {
                insideGroup: !0,
                testId: `sidebar-subitem-${k.text}`
              }
            )
          ) : null
        ]
      },
      a.text
    );
  }, G = (a) => /* @__PURE__ */ e(
    x,
    {
      sx: {
        width: "100%",
        display: "flex",
        justifyContent: "center"
      },
      children: ne(
        a.text,
        a.text,
        a.icon,
        je(a, o),
        a.path ? () => Z(a.path) : void 0
      )
    },
    a.text
  ), We = (a) => mt(a) ? Y ? S(a) : ce(a) : Y ? G(a) : oe(a), Ee = (a) => /* @__PURE__ */ e(
    se,
    {
      spacing: 0.5,
      sx: {
        width: "100%",
        alignItems: Y ? "center" : "stretch"
      },
      children: a.map(We)
    }
  ), Oe = Y ? $ : j, ye = Y ? "Expand sidebar" : "Collapse sidebar", ke = c ? /* @__PURE__ */ u(
    x,
    {
      "data-testid": "sidebar-header",
      sx: {
        minHeight: _r,
        flexShrink: 0,
        display: "flex",
        alignItems: "center",
        bgcolor: Ce,
        ...Y ? {
          // Toggle on top, the brand logo (its own link) below it
          flexDirection: "column",
          justifyContent: "center",
          gap: 1,
          py: 1.5
        } : {
          height: _r,
          gap: 1.5,
          // Lines the toggle glyph up with the row icons below
          // (12px panel padding + 12px row padding = 24px, minus
          // the button's own 8px)
          px: 2
        }
      },
      children: [
        /* @__PURE__ */ e(xe, { title: ye, placement: "right", arrow: !0, children: /* @__PURE__ */ e(
          we,
          {
            "aria-label": ye,
            "aria-expanded": !Y,
            onClick: He,
            "data-testid": "sidebar-collapse-toggle",
            disableFocusRipple: !0,
            sx: { color: _, ...Rt },
            children: /* @__PURE__ */ e(wn, {})
          }
        ) }),
        h || s ? /* @__PURE__ */ e(
          Tt,
          {
            logo: h,
            title: Y ? void 0 : s,
            appName: s || "App",
            onClick: l,
            color: w ?? _,
            testId: "sidebar-header-brand"
          }
        ) : null
      ]
    }
  ) : null, Ye = !c && h ? /* @__PURE__ */ e(
    x,
    {
      sx: {
        display: "flex",
        justifyContent: "center",
        flexShrink: 0,
        pt: 2,
        pb: 1
      },
      children: /* @__PURE__ */ e(
        Tt,
        {
          logo: h,
          appName: s || "App",
          onClick: l,
          color: w ?? _,
          testId: "sidebar-header-brand"
        }
      )
    }
  ) : null, ue = E ? 0.5 : Y ? 1 : 1.5;
  return /* @__PURE__ */ u(
    x,
    {
      component: "nav",
      "aria-label": "Main sidebar",
      "data-testid": "collapsible-sidebar",
      "data-collapsed": Y ? "true" : "false",
      "data-labeled": E ? "true" : "false",
      sx: {
        width: Oe,
        minWidth: Oe,
        height: "100%",
        boxSizing: "border-box",
        bgcolor: Fe,
        display: "flex",
        flexDirection: "column",
        // Lets the sidebar shrink inside a flex-column host so siblings
        // (e.g. an alert card below it) stay within the viewport.
        flex: "1 1 auto",
        minHeight: 0,
        overflow: "hidden",
        transition: gn
      },
      children: [
        ke ?? Ye,
        te ? /* @__PURE__ */ e(
          x,
          {
            sx: { flexShrink: 0, px: ue, pt: 1, pb: 1 },
            children: te
          }
        ) : null,
        /* @__PURE__ */ u(
          x,
          {
            sx: {
              flex: "1 1 auto",
              minHeight: 0,
              display: "flex",
              flexDirection: "column",
              overflowY: "auto",
              overflowX: "hidden",
              px: ue,
              pt: ee && !c ? `${ee}px` : 1,
              pb: 2
            },
            children: [
              Ee(t),
              r.length > 0 ? /* @__PURE__ */ u(x, { sx: { mt: "auto", pt: 2 }, children: [
                I ? null : /* @__PURE__ */ e(Te, { sx: { mb: 1, borderColor: "divider" } }),
                Ee(r)
              ] }) : null
            ]
          }
        ),
        I ? /* @__PURE__ */ e(x, { sx: { flexShrink: 0, px: ue, pb: 1.5 }, children: /* @__PURE__ */ e(
          x,
          {
            sx: {
              borderTop: `1px solid ${Ve}`,
              pt: 1.5
            },
            children: I
          }
        ) }) : null
      ]
    }
  );
}, tr = "var(--lumora-content-padding, 0px)", Nr = `calc(${tr} * -1)`, pa = ({
  children: t,
  flushTop: r = !0,
  sticky: o = !1,
  background: n = "background.paper",
  divider: i = !0,
  inset: h = !0,
  sx: s
}) => /* @__PURE__ */ e(
  x,
  {
    "data-testid": "full-bleed-section",
    sx: [
      {
        mx: Nr,
        mt: r ? Nr : 0,
        // Space below it, like any other block on the page
        mb: tr,
        px: h ? tr : 0,
        bgcolor: n,
        ...i && {
          borderBottom: "1px solid",
          borderColor: "divider"
        },
        ...o && {
          position: "sticky",
          // Under the mobile top bar on phones, the viewport top on desktop
          top: "var(--lumora-sticky-top, 0px)",
          // Above page content, below the sidebar drawer and menus
          zIndex: 3
        }
      },
      ...Array.isArray(s) ? s : [s]
    ],
    children: t
  }
), Rn = ({ keys: t }) => /* @__PURE__ */ e(
  x,
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
    children: t.map((r) => /* @__PURE__ */ e("span", { children: r }, r))
  }
);
class B extends Error {
  constructor(r, o, n = null) {
    super(r), this.name = "AuthError", this.code = o, this.originalError = n, this.timestamp = (/* @__PURE__ */ new Date()).toISOString();
  }
}
const P = {
  STORAGE_ACCESS_DENIED: "STORAGE_ACCESS_DENIED",
  TOKEN_NOT_FOUND: "TOKEN_NOT_FOUND",
  TOKEN_INVALID: "TOKEN_INVALID",
  TOKEN_EXPIRED: "TOKEN_EXPIRED",
  LOGOUT_FAILED: "LOGOUT_FAILED",
  UNKNOWN_ERROR: "UNKNOWN_ERROR"
}, J = {
  ACCESS_TOKEN: "lumoraAccessToken",
  REFRESH_TOKEN: "lumoraRefreshToken",
  USER: "lumoraUser"
}, Me = {
  ACCESS_TOKEN: "accessToken",
  REFRESH_TOKEN: "refreshToken",
  USER: "user"
}, In = () => {
  if (!(typeof window > "u" || !window.localStorage))
    try {
      const t = localStorage.getItem(
        Me.ACCESS_TOKEN
      ), r = localStorage.getItem(
        Me.REFRESH_TOKEN
      ), o = localStorage.getItem(Me.USER);
      t && !localStorage.getItem(J.ACCESS_TOKEN) && localStorage.setItem(J.ACCESS_TOKEN, t), r && !localStorage.getItem(J.REFRESH_TOKEN) && localStorage.setItem(
        J.REFRESH_TOKEN,
        r
      ), o && !localStorage.getItem(J.USER) && localStorage.setItem(J.USER, o), (t || r || o) && (localStorage.removeItem(Me.ACCESS_TOKEN), localStorage.removeItem(Me.REFRESH_TOKEN), localStorage.removeItem(Me.USER));
    } catch (t) {
      console.warn("Failed to migrate legacy localStorage keys:", t);
    }
}, Gt = (t) => {
  try {
    if (typeof window > "u")
      return console.warn("localStorage access attempted on server side"), null;
    if (!window.localStorage)
      throw new B(
        "localStorage is not available",
        P.STORAGE_ACCESS_DENIED
      );
    return window.localStorage.getItem(t);
  } catch (r) {
    throw r.name === "QuotaExceededError" ? (console.error("Storage quota exceeded"), new B(
      "Storage quota exceeded. Please clear browser data.",
      P.STORAGE_ACCESS_DENIED,
      r
    )) : r.name === "SecurityError" ? (console.error(
      "localStorage access denied (private browsing or security settings)"
    ), new B(
      "Access to localStorage is denied. Please check browser settings.",
      P.STORAGE_ACCESS_DENIED,
      r
    )) : (console.error(
      "Unexpected error accessing localStorage:",
      r.name
    ), new B(
      "Failed to access storage",
      P.STORAGE_ACCESS_DENIED,
      r
    ));
  }
}, jt = (t, r) => {
  try {
    if (typeof window > "u")
      return console.warn("localStorage write attempted on server side"), !1;
    if (!window.localStorage)
      throw new B(
        "localStorage is not available",
        P.STORAGE_ACCESS_DENIED
      );
    return window.localStorage.setItem(t, r), !0;
  } catch (o) {
    throw o.name === "QuotaExceededError" ? (console.error("Storage quota exceeded"), new B(
      "Storage quota exceeded. Please clear browser data.",
      P.STORAGE_ACCESS_DENIED,
      o
    )) : o.name === "SecurityError" ? (console.error(
      "localStorage write denied (private browsing or security settings)"
    ), new B(
      "Access to localStorage is denied. Please check browser settings.",
      P.STORAGE_ACCESS_DENIED,
      o
    )) : (console.error(
      "Unexpected error writing to localStorage:",
      o.name
    ), new B(
      "Failed to write to storage",
      P.STORAGE_ACCESS_DENIED,
      o
    ));
  }
}, io = (t) => {
  try {
    return typeof window > "u" ? (console.warn("localStorage removal attempted on server side"), !1) : window.localStorage ? (window.localStorage.removeItem(t), !0) : (console.warn("localStorage is not available"), !1);
  } catch (r) {
    return r.name !== "SecurityError" && console.warn(`Could not remove localStorage key "${t}"`), !1;
  }
}, xt = () => {
  try {
    In();
    const t = Gt(J.ACCESS_TOKEN), r = Gt(J.REFRESH_TOKEN), o = Gt(J.USER);
    let n = null;
    if (o)
      try {
        n = JSON.parse(o);
      } catch {
        o && o !== "null" && o !== "undefined" && console.warn(
          "Invalid user data in localStorage, clearing:",
          o.substring(0, 50)
        ), io(J.USER);
      }
    return {
      accessToken: t,
      refreshToken: r,
      user: n
    };
  } catch (t) {
    throw t instanceof B ? t : new B(
      "Failed to retrieve authentication tokens",
      P.UNKNOWN_ERROR,
      t
    );
  }
}, Cn = () => {
  try {
    const { accessToken: t, refreshToken: r } = xt();
    return !(t || r) ? {
      isAuthenticated: !1,
      error: new B(
        "No authentication tokens found",
        P.TOKEN_NOT_FOUND
      )
    } : {
      isAuthenticated: !0,
      error: null
    };
  } catch (t) {
    return console.error("Authentication check failed:", t), {
      isAuthenticated: !1,
      error: t instanceof B ? t : new B(
        "Authentication check failed",
        P.UNKNOWN_ERROR,
        t
      )
    };
  }
}, ao = (t, r, o = null) => {
  try {
    if (!t && !r)
      throw new B(
        "At least one token must be provided",
        P.TOKEN_INVALID
      );
    return t && jt(J.ACCESS_TOKEN, t), r && jt(J.REFRESH_TOKEN, r), o && jt(J.USER, JSON.stringify(o)), {
      success: !0,
      error: null
    };
  } catch (n) {
    return console.error("Failed to store authentication tokens:", n), {
      success: !1,
      error: n instanceof B ? n : new B(
        "Failed to store tokens",
        P.UNKNOWN_ERROR,
        n
      )
    };
  }
}, gt = () => {
  try {
    return [
      J.ACCESS_TOKEN,
      J.REFRESH_TOKEN,
      J.USER,
      // Also clear legacy keys for complete cleanup
      Me.ACCESS_TOKEN,
      Me.REFRESH_TOKEN,
      Me.USER
    ].map((n) => io(n)).every((n) => n) || console.warn("Some tokens could not be removed from localStorage"), {
      success: !0,
      error: null
    };
  } catch (t) {
    return console.error("Failed to clear authentication tokens:", t), {
      success: !1,
      error: t instanceof B ? t : new B(
        "Failed to clear tokens",
        P.LOGOUT_FAILED,
        t
      )
    };
  }
}, On = () => {
  try {
    const { user: t } = xt();
    return {
      user: t,
      error: null
    };
  } catch (t) {
    return console.error("Failed to get current user:", t), {
      user: null,
      error: t instanceof B ? t : new B(
        "Failed to retrieve user data",
        P.UNKNOWN_ERROR,
        t
      )
    };
  }
}, fa = (t) => {
  if (!(t instanceof B))
    return "An unexpected error occurred. Please try again.";
  switch (t.code) {
    case P.STORAGE_ACCESS_DENIED:
      return "Unable to access browser storage. Please check your browser settings and disable private browsing if enabled.";
    case P.TOKEN_NOT_FOUND:
      return "You are not logged in. Please sign in to continue.";
    case P.TOKEN_INVALID:
      return "Your session is invalid. Please sign in again.";
    case P.TOKEN_EXPIRED:
      return "Your session has expired. Please sign in again.";
    case P.LOGOUT_FAILED:
      return "Failed to log out properly. Please clear your browser cache and try again.";
    case P.UNKNOWN_ERROR:
    default:
      return "An unexpected error occurred. Please try again or contact support if the problem persists.";
  }
}, rr = (t, r = "Unknown") => {
  const o = {
    context: r,
    message: t.message,
    code: t instanceof B ? t.code : "UNKNOWN",
    timestamp: t instanceof B ? t.timestamp : (/* @__PURE__ */ new Date()).toISOString(),
    stack: t.stack
  };
  t instanceof B && t.originalError && (o.originalError = {
    name: t.originalError.name,
    message: t.originalError.message
  }), console.warn("[Auth Error]", o);
}, _n = (t) => {
  if (!t)
    throw new Error("API base URL is required to create axios client");
  const r = Cr.create({
    baseURL: t,
    headers: {
      "Content-Type": "application/json"
    }
  });
  let o = !1, n = null, i = [];
  const h = (s, l) => {
    i.forEach(({ resolve: c, reject: d }) => {
      s ? d(s) : l && c(l);
    }), i = [];
  };
  return r.interceptors.request.use(
    (s) => {
      const { accessToken: l } = xt();
      return l && s.headers && (s.headers.Authorization = `Bearer ${l}`), s;
    },
    (s) => Promise.reject(s)
  ), r.interceptors.response.use(
    (s) => s,
    async (s) => {
      var f;
      const l = s.config, c = (f = s.response) == null ? void 0 : f.status, d = (l == null ? void 0 : l.url) || "", p = d.includes("/auth/refresh");
      if (c !== 401 || l._retry || p)
        return Promise.reject(s);
      l._retry = !0;
      const { refreshToken: w } = xt();
      if (!w) {
        const g = new Error(
          "No refresh token available for token refresh"
        );
        return rr(g, "AxiosClient - Token Refresh"), gt(), typeof window < "u" && (window.location.href = "/login"), Promise.reject(s);
      }
      if (o && n)
        return new Promise((g, R) => {
          i.push({ resolve: g, reject: R });
        }).then((g) => {
          const {
            accessToken: R,
            refreshToken: b
          } = g;
          if (l.headers && (l.headers.Authorization = `Bearer ${R}`), d.includes("/auth/logout"))
            try {
              if (typeof l.data == "string") {
                const y = JSON.parse(
                  l.data || "{}"
                );
                y.refresh_token = b, l.data = JSON.stringify(y);
              } else
                l.data && typeof l.data == "object" ? l.data.refresh_token = b : l.data = JSON.stringify({
                  refresh_token: b
                });
            } catch {
              l.data = JSON.stringify({
                refresh_token: b
              });
            }
          return r(l);
        }).catch((g) => Promise.reject(g));
      o = !0, n = Cr.post(
        `${t}/auth/refresh`,
        {
          refresh_token: w
        }
      );
      try {
        const g = await n, { accessToken: R, refreshToken: b } = g.data;
        if (ao(R, b, null), h(null, {
          accessToken: R,
          refreshToken: b
        }), l.headers && (l.headers.Authorization = `Bearer ${R}`), d.includes("/auth/logout"))
          try {
            if (typeof l.data == "string") {
              const y = JSON.parse(
                l.data || "{}"
              );
              y.refresh_token = b, l.data = JSON.stringify(y);
            } else
              l.data && typeof l.data == "object" ? l.data.refresh_token = b : l.data = JSON.stringify({
                refresh_token: b
              });
          } catch {
            l.data = JSON.stringify({
              refresh_token: b
            });
          }
        return r(l);
      } catch (g) {
        return rr(
          g,
          "AxiosClient - Token Refresh Failed"
        ), h(g), gt(), typeof window < "u" && (window.location.href = "/login"), Promise.reject(g);
      } finally {
        o = !1, n = null;
      }
    }
  ), r;
}, fe = {
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
}, me = {
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
}, rt = {
  300: "hsl(120, 61%, 77%)",
  400: "hsl(120, 44%, 53%)",
  500: "hsl(120, 59%, 30%)",
  700: "hsl(120, 75%, 16%)",
  800: "hsl(120, 84%, 10%)"
}, ot = {
  300: "hsl(45, 90%, 65%)",
  400: "hsl(45, 90%, 40%)",
  500: "hsl(45, 90%, 35%)",
  700: "hsl(45, 94%, 20%)",
  800: "hsl(45, 95%, 16%)"
}, nt = {
  300: "hsl(0, 90%, 65%)",
  400: "hsl(0, 90%, 40%)",
  500: "hsl(0, 90%, 30%)",
  700: "hsl(0, 94%, 18%)",
  800: "hsl(0, 95%, 12%)"
}, so = Kr(), ve = so.typography.pxToRem, Tn = (t) => {
  const r = t === "dark", o = [...so.shadows];
  return o[1] = r ? "hsla(220, 30%, 5%, 0.7) 0px 4px 16px 0px, hsla(220, 25%, 10%, 0.8) 0px 8px 16px -5px" : "hsla(220, 30%, 5%, 0.07) 0px 4px 16px 0px, hsla(220, 25%, 10%, 0.07) 0px 8px 16px -5px", {
    palette: {
      mode: t,
      primary: {
        light: r ? fe[300] : fe[200],
        main: fe[400],
        dark: fe[700],
        contrastText: fe[50]
      },
      info: r ? {
        light: fe[500],
        main: fe[700],
        dark: fe[900],
        contrastText: fe[300]
      } : {
        light: fe[100],
        main: fe[300],
        dark: fe[600],
        contrastText: me[50]
      },
      warning: r ? { light: ot[400], main: ot[500], dark: ot[700] } : { light: ot[300], main: ot[400], dark: ot[800] },
      error: r ? { light: nt[400], main: nt[500], dark: nt[700] } : { light: nt[300], main: nt[400], dark: nt[800] },
      success: r ? { light: rt[400], main: rt[500], dark: rt[700] } : { light: rt[300], main: rt[400], dark: rt[800] },
      grey: me,
      divider: r ? Xe(me[700], 0.6) : Xe(me[300], 0.4),
      background: r ? { default: me[900], paper: "hsl(220, 30%, 7%)" } : { default: "hsl(0, 0%, 99%)", paper: "hsl(220, 35%, 97%)" },
      text: r ? { primary: "hsl(0, 0%, 100%)", secondary: me[400] } : { primary: me[800], secondary: me[600] },
      action: r ? {
        hover: Xe(me[600], 0.2),
        selected: Xe(me[600], 0.3)
      } : {
        hover: Xe(me[200], 0.2),
        selected: Xe(me[200], 0.3)
      }
    },
    typography: {
      fontFamily: "Inter, sans-serif",
      h1: {
        fontSize: ve(48),
        fontWeight: 600,
        lineHeight: 1.2,
        letterSpacing: -0.5
      },
      h2: { fontSize: ve(36), fontWeight: 600, lineHeight: 1.2 },
      h3: { fontSize: ve(30), lineHeight: 1.2 },
      h4: { fontSize: ve(24), fontWeight: 600, lineHeight: 1.5 },
      h5: { fontSize: ve(20), fontWeight: 600 },
      h6: { fontSize: ve(18), fontWeight: 600 },
      subtitle1: { fontSize: ve(18) },
      subtitle2: { fontSize: ve(14), fontWeight: 500 },
      body1: { fontSize: ve(14) },
      body2: { fontSize: ve(14), fontWeight: 400 },
      caption: { fontSize: ve(12), fontWeight: 400 }
    },
    shape: {
      borderRadius: 8
    },
    shadows: o
  };
}, An = async (t, r) => {
  const { accessToken: o, refreshToken: n } = xt();
  if (o)
    return !0;
  if (n)
    try {
      const i = await t.post("/auth/refresh", {
        refresh_token: n
      });
      if (i.data.success && i.data.accessToken)
        return ao(
          i.data.accessToken,
          i.data.refreshToken || null,
          null
        ), !0;
    } catch (i) {
      rr(i, "TokenValidator - Refresh Failed");
    }
  return gt(), r ? r() : window.location.href = "/login", !1;
}, _t = ({ size: t = 20 }) => /* @__PURE__ */ u(
  "svg",
  {
    width: t,
    height: t * 30 / 33,
    viewBox: "0 0 33 30",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    "aria-hidden": "true",
    focusable: "false",
    children: [
      /* @__PURE__ */ e(
        "path",
        {
          d: "M21.7931 29.9243V20.5466L11.0774 10.4528V20.5466L21.7931 29.9243Z",
          fill: "#05A393"
        }
      ),
      /* @__PURE__ */ e(
        "path",
        {
          d: "M21.7931 20.1102L21.7931 10.0939L11.0774 0V10.0939L21.7931 20.1102Z",
          fill: "#049586"
        }
      ),
      /* @__PURE__ */ e(
        "path",
        {
          d: "M2.19027e-05 29.9243V20.5466L10.7157 10.4528V20.5466L2.19027e-05 29.9243Z",
          fill: "#09C1AE"
        }
      ),
      /* @__PURE__ */ e(
        "path",
        {
          d: "M22.1555 19.4716V10.0939L32.8712 0V10.0939L22.1555 19.4716Z",
          fill: "#016F63"
        }
      )
    ]
  }
), it = "#09C1AE", Xt = (t, r) => ({
  position: "relative",
  overflow: "hidden",
  "&::before": {
    content: '""',
    position: "absolute",
    inset: "-50%",
    background: `conic-gradient(from 0deg, rgba(9, 193, 174, 0.25) 0deg 250deg, ${it} 300deg, #0DD4BF 330deg, rgba(9, 193, 174, 0.25) 360deg)`,
    animation: "nexa-beam 3s linear infinite",
    zIndex: 0
  },
  "&::after": {
    content: '""',
    position: "absolute",
    inset: "2px",
    borderRadius: `${t - 2}px`,
    bgcolor: r,
    zIndex: 1
  },
  "& > *": { position: "relative", zIndex: 2 },
  "@keyframes nexa-beam": { to: { transform: "rotate(360deg)" } },
  "@media (prefers-reduced-motion: reduce)": {
    "&::before": { animation: "none" }
  }
}), Wr = ({
  variant: t,
  onClick: r,
  active: o = !1,
  busy: n = !1,
  shortcutKeys: i,
  accentColor: h = "#01584f",
  rightOffsetPx: s = 0
}) => {
  const l = i ? `Ask Nexa (${i.join("")})` : "Ask Nexa", c = {
    onClick: r,
    "aria-label": "Ask Nexa",
    "aria-pressed": o,
    "data-testid": "assistant-button"
  };
  return t === "sidebar" ? /* @__PURE__ */ u(
    et,
    {
      ...c,
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
        borderColor: o ? it : "rgba(9, 193, 174, 0.45)",
        bgcolor: "rgba(9, 193, 174, 0.08)",
        color: h,
        transition: "border-color 150ms, background-color 150ms",
        "&:hover": { bgcolor: "rgba(9, 193, 174, 0.14)" },
        "&.Mui-focusVisible": {
          outline: `2px solid ${it}`,
          outlineOffset: 2
        },
        ...n && Xt(8, "background.paper")
      },
      children: [
        /* @__PURE__ */ e(_t, { size: 20 }),
        /* @__PURE__ */ e(
          z,
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
        i && /* @__PURE__ */ e(Rn, { keys: i })
      ]
    }
  ) : t === "sidebar-icon" ? /* @__PURE__ */ e(xe, { title: l, placement: "right", arrow: !0, children: /* @__PURE__ */ e(
    we,
    {
      ...c,
      "data-variant": "sidebar-icon",
      sx: {
        width: 44,
        height: 44,
        borderRadius: "8px",
        border: "1px solid",
        borderColor: o ? it : "rgba(9, 193, 174, 0.45)",
        bgcolor: "rgba(9, 193, 174, 0.08)",
        "&:hover": { bgcolor: "rgba(9, 193, 174, 0.14)" },
        ...n && Xt(8, "background.paper")
      },
      children: /* @__PURE__ */ e(_t, { size: 20 })
    }
  ) }) : /* @__PURE__ */ e(xe, { title: l, placement: "left", children: /* @__PURE__ */ e(
    we,
    {
      ...c,
      disableFocusRipple: !0,
      "data-variant": "floating",
      sx: {
        position: "fixed",
        right: 24 + s,
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
        outline: o ? `2px solid ${it}` : "none",
        outlineOffset: 2,
        "&:hover": { bgcolor: "background.paper", boxShadow: 6 },
        "&.Mui-focusVisible": { outline: `2px solid ${it}` },
        ...n && Xt(16, "background.paper")
      },
      children: /* @__PURE__ */ e(x, { sx: { display: "flex", alignItems: "center" }, children: /* @__PURE__ */ e(_t, { size: 26 }) })
    }
  ) });
}, Ct = ({
  title: t = "",
  message: r = "",
  buttonText: o = "",
  onButtonClick: n,
  show: i = !0
}) => i ? /* @__PURE__ */ e(Go, { variant: "outlined", sx: { m: 1.5, flexShrink: 0 }, children: /* @__PURE__ */ u(jo, { children: [
  /* @__PURE__ */ e(Xo, { fontSize: "small" }),
  /* @__PURE__ */ e(z, { gutterBottom: !0, sx: { fontWeight: 600 }, children: t }),
  /* @__PURE__ */ e(
    z,
    {
      variant: "body2",
      sx: { mb: 2, color: "text.secondary" },
      children: r
    }
  ),
  /* @__PURE__ */ e(
    Gr,
    {
      variant: "contained",
      size: "small",
      fullWidth: !0,
      onClick: n,
      children: o
    }
  )
] }) }) : null, pt = 24, Dn = 720, Nn = 1140, Wn = 1250, kn = ({
  open: t,
  children: r,
  variant: o,
  position: n,
  width: i,
  sidebarWidthPx: h,
  bottomOffsetPx: s,
  fullScreen: l,
  fullScreenBottom: c = "0px",
  onClose: d
}) => {
  m.useEffect(() => {
    if (!t || !d)
      return;
    const R = (b) => {
      b.key === "Escape" && d();
    };
    return window.addEventListener("keydown", R), () => window.removeEventListener("keydown", R);
  }, [t, d]);
  const p = o === "docked", w = pt + s;
  let f;
  l ? f = {
    top: 0,
    left: 0,
    right: 0,
    bottom: c,
    borderRadius: 0
  } : p ? f = {
    top: 0,
    right: 0,
    bottom: 0,
    width: i,
    maxWidth: "100vw",
    borderRadius: 0,
    borderWidth: "0 0 0 1px"
  } : f = {
    bottom: w,
    ...n === "left" ? { left: h + pt } : { right: pt },
    width: i,
    maxWidth: `calc(100vw - ${pt * 2}px)`,
    height: `min(${Dn}px, calc(100vh - ${w + pt}px))`,
    borderRadius: "12px"
  };
  const g = /* @__PURE__ */ e(
    or,
    {
      role: p ? "complementary" : "dialog",
      "aria-label": "Nexa chat",
      "data-testid": "chat-panel",
      "data-variant": o,
      elevation: 8,
      sx: {
        position: "fixed",
        zIndex: p ? Nn : Wn,
        display: "flex",
        flexDirection: "column",
        overflow: "hidden",
        border: "1px solid",
        borderColor: "divider",
        ...f
      },
      children: r
    }
  );
  return p ? /* @__PURE__ */ e(Yo, { direction: "left", in: t, mountOnEnter: !0, children: g }) : /* @__PURE__ */ e(
    Vo,
    {
      in: t,
      mountOnEnter: !0,
      style: {
        transformOrigin: n === "left" ? "bottom left" : "bottom right"
      },
      children: g
    }
  );
}, zn = 180, kr = 250, Bn = "#01584F", Mn = ({
  text: t,
  testId: r
}) => {
  const o = m.useRef(null), [n, i] = m.useState(!1), h = m.useCallback(() => {
    const s = o.current;
    s && i(s.scrollWidth > s.clientWidth + 0.5);
  }, []);
  return m.useLayoutEffect(() => {
    h();
  }, [h, t]), m.useEffect(() => {
    const s = o.current;
    if (!s)
      return;
    const l = new ResizeObserver(() => h());
    return l.observe(s), () => l.disconnect();
  }, [h]), /* @__PURE__ */ e(
    xe,
    {
      title: t,
      placement: "right",
      arrow: !0,
      enterDelay: 400,
      disableHoverListener: !n,
      disableFocusListener: !n,
      disableTouchListener: !n,
      children: /* @__PURE__ */ e(
        z,
        {
          ref: o,
          variant: "caption",
          component: "span",
          "aria-hidden": !0,
          "data-testid": r,
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
          children: t
        }
      )
    }
  );
}, lo = (t, r, o, n) => {
  const i = t ? 48 : 44, h = t ? "text.secondary" : r, s = t ? Bn : r;
  return { activeBg: s, sx: n ? {
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
    color: o ? "#ffffff" : h,
    backgroundColor: o ? s : "transparent",
    "&:hover": {
      backgroundColor: o ? s : "action.hover",
      borderRadius: "4px",
      color: o ? "#ffffff" : h
    }
  } : {
    width: i,
    height: i,
    color: o ? "#ffffff" : h,
    backgroundColor: o ? s : "transparent",
    borderRadius: o ? "4px" : "50%",
    "&:hover": {
      backgroundColor: o ? s : "action.hover",
      borderRadius: "4px"
    }
  } };
}, co = ({ link: t }) => /* @__PURE__ */ u(se, { alignItems: "center", spacing: 1, sx: { width: "100%" }, children: [
  /* @__PURE__ */ e(
    x,
    {
      sx: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "inherit",
        "& .MuiSvgIcon-root": { color: "inherit" }
      },
      children: t.icon
    }
  ),
  /* @__PURE__ */ e(
    Mn,
    {
      text: t.text,
      testId: `rail-item-caption-${t.text}`
    }
  )
] }), uo = (t, r, o) => o ? t : /* @__PURE__ */ e(xe, { title: r, placement: "right", arrow: !0, children: t }), Ln = ({
  link: t,
  activePath: r,
  onLinkClick: o,
  accentColor: n,
  isSecondary: i,
  surfaceBackgroundColor: h,
  railShowTitles: s
}) => {
  const l = Dt(), [c, d] = m.useState(null), [p, w] = m.useState(!1), f = m.useRef(
    null
  ), g = m.useRef(null), R = m.useRef(null), b = m.useRef(!1), y = m.useRef(!1), M = m.useId(), D = () => {
    f.current && (clearTimeout(f.current), f.current = null);
  }, v = () => {
    D(), f.current = setTimeout(() => {
      w(!1), f.current = null;
    }, zn);
  }, L = () => {
    D(), w(!0);
  };
  m.useEffect(() => {
    if (!p)
      return;
    const I = (U) => {
      var N;
      U.key === "Escape" && (w(!1), (N = R.current) == null || N.focus());
    };
    return document.addEventListener("keydown", I), () => document.removeEventListener("keydown", I);
  }, [p]), m.useEffect(() => {
    if (!p || !y.current)
      return;
    const I = globalThis.requestAnimationFrame(() => {
      var N;
      const U = (N = g.current) == null ? void 0 : N.querySelector(
        '[role="menuitem"]'
      );
      U == null || U.focus(), y.current = !1;
    });
    return () => cancelAnimationFrame(I);
  }, [p]);
  const j = Qe(t, r), { activeBg: $, sx: E } = lo(
    i,
    n,
    j,
    s
  ), ee = /* @__PURE__ */ e(
    we,
    {
      ref: R,
      component: t.path ? "a" : "button",
      href: t.path || void 0,
      "aria-label": t.text,
      onFocus: () => {
        b.current || L();
      },
      onBlur: (I) => {
        var N;
        const U = I.relatedTarget;
        U && ((N = g.current) != null && N.contains(U)) || v();
      },
      onKeyDown: (I) => {
        I.key === "ArrowDown" && (I.preventDefault(), y.current = !0, L());
      },
      onClick: (I) => {
        I.preventDefault(), I.stopPropagation(), t.path && (o == null || o(t.path));
      },
      "aria-haspopup": "menu",
      "aria-expanded": p,
      "aria-controls": p ? M : void 0,
      "data-testid": `rail-submenu-trigger-${t.text}`,
      sx: E,
      children: s ? /* @__PURE__ */ e(co, { link: t }) : t.icon
    }
  );
  return /* @__PURE__ */ u(
    x,
    {
      sx: {
        width: "100%",
        display: "flex",
        justifyContent: "center"
      },
      children: [
        /* @__PURE__ */ e(
          x,
          {
            ref: d,
            "data-testid": `rail-submenu-anchor-${t.text}`,
            sx: { display: "inline-flex", maxWidth: "100%" },
            onMouseEnter: () => {
              b.current = !0, L();
            },
            onMouseLeave: () => {
              b.current = !1, v();
            },
            children: uo(ee, t.text, s)
          }
        ),
        /* @__PURE__ */ e(
          Jo,
          {
            open: p && !!c,
            anchorEl: c,
            placement: "right-start",
            modifiers: [{ name: "offset", options: { offset: [8, 0] } }],
            sx: { zIndex: (I) => I.zIndex.modal },
            children: /* @__PURE__ */ e(
              or,
              {
                ref: g,
                elevation: 0,
                onMouseEnter: D,
                onMouseLeave: v,
                "data-testid": `rail-submenu-panel-${t.text}`,
                sx: {
                  bgcolor: h,
                  backgroundImage: "none",
                  borderRadius: "4px",
                  border: "1px solid",
                  borderColor: "divider",
                  boxShadow: l.shadows[8],
                  maxWidth: kr,
                  minWidth: 0,
                  py: 0.5,
                  boxSizing: "border-box"
                },
                children: /* @__PURE__ */ e(
                  Nt,
                  {
                    id: M,
                    dense: !0,
                    autoFocus: !1,
                    role: "menu",
                    sx: {
                      bgcolor: "transparent",
                      py: 0,
                      maxWidth: kr
                    },
                    children: te(t.subitems, t.text, 0)
                  }
                )
              }
            )
          }
        )
      ]
    }
  );
  function te(I, U, N) {
    return I.flatMap((W) => {
      const re = Ot(U, W);
      return mt(W) ? [
        /* @__PURE__ */ e(
          qo,
          {
            disableSticky: !0,
            title: W.text,
            sx: {
              bgcolor: "transparent",
              lineHeight: "28px",
              pl: 2 + N * 1.5,
              fontSize: "0.7rem",
              letterSpacing: "0.06em",
              textTransform: "uppercase",
              color: "text.secondary",
              overflow: "hidden",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap"
            },
            children: W.text
          },
          re
        ),
        ...te(W.subitems, re, N + 1)
      ] : [
        /* @__PURE__ */ u(
          Re,
          {
            role: "menuitem",
            title: W.text,
            disabled: !W.path,
            selected: je(W, r),
            onClick: (ge) => {
              ge.preventDefault(), W.path && (o == null || o(W.path)), w(!1);
            },
            sx: {
              borderRadius: "4px",
              mx: 0.5,
              my: 0.125,
              pl: 2 + N * 1.5,
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
                bgcolor: $,
                color: "#ffffff",
                "&:hover": {
                  bgcolor: $
                }
              },
              "&.Mui-focusVisible": {
                bgcolor: "action.focus"
              }
            },
            children: [
              W.icon ? /* @__PURE__ */ e(ae, { children: W.icon }) : null,
              /* @__PURE__ */ e(
                Le,
                {
                  primary: W.text,
                  primaryTypographyProps: {
                    noWrap: !0
                  }
                }
              )
            ]
          },
          re
        )
      ];
    });
  }
}, Fn = ({
  link: t,
  activePath: r,
  onLinkClick: o,
  accentColor: n,
  isSecondary: i,
  railShowTitles: h
}) => {
  const s = !!(t.path && r === t.path), { sx: l } = lo(
    i,
    n,
    s,
    h
  );
  return uo(
    /* @__PURE__ */ e(
      we,
      {
        component: t.path ? "a" : "button",
        href: t.path || void 0,
        "aria-label": t.text,
        onClick: (c) => {
          c.preventDefault(), c.stopPropagation(), t.path && (o == null || o(t.path));
        },
        disabled: !t.path,
        sx: l,
        children: h ? /* @__PURE__ */ e(co, { link: t }) : t.icon
      }
    ),
    t.text,
    h
  );
}, Hn = () => /* @__PURE__ */ e(
  x,
  {
    sx: {
      width: "100%",
      display: "flex",
      justifyContent: "center"
    },
    children: /* @__PURE__ */ e(Te, { sx: { width: "60%", borderColor: "divider" } })
  }
), Pn = () => /* @__PURE__ */ e(
  x,
  {
    sx: {
      width: "100%",
      my: 2,
      display: "flex",
      justifyContent: "center"
    },
    children: /* @__PURE__ */ e(Te, { sx: { width: "60%", borderColor: "divider" } })
  }
), zr = (t, r) => t.map((o, n) => /* @__PURE__ */ u(m.Fragment, { children: [
  r(o, n),
  n < t.length - 1 ? /* @__PURE__ */ e(Hn, {}) : null
] }, n)), $n = ({
  mainLinks: t,
  secondaryLinks: r = [],
  activePath: o,
  onLinkClick: n,
  accentColor: i = "#01584f",
  surfaceBackgroundColor: h,
  railShowTitles: s = !1
}) => {
  const l = (d, p) => mt(d) ? /* @__PURE__ */ e(
    Ln,
    {
      link: d,
      activePath: o,
      onLinkClick: n,
      accentColor: i,
      isSecondary: p,
      surfaceBackgroundColor: h,
      railShowTitles: s
    }
  ) : /* @__PURE__ */ e(
    Fn,
    {
      link: d,
      activePath: o,
      onLinkClick: n,
      accentColor: i,
      isSecondary: p,
      railShowTitles: s
    }
  ), c = s ? 1.25 : 1;
  return /* @__PURE__ */ u(
    se,
    {
      sx: {
        flexGrow: 1,
        width: "100%",
        boxSizing: "border-box",
        justifyContent: "flex-start",
        alignItems: "center",
        pt: 2,
        gap: c
      },
      children: [
        zr(t, (d) => l(d, !1)),
        r.length > 0 ? /* @__PURE__ */ u(at, { children: [
          /* @__PURE__ */ e(Pn, {}),
          /* @__PURE__ */ e(x, { sx: { mt: "auto", pb: 2 }, children: /* @__PURE__ */ e(se, { gap: c, alignItems: "center", children: zr(
            r,
            (d) => l(d, !0)
          ) }) })
        ] }) : null
      ]
    }
  );
}, Un = (t) => t ? no(t) : "USER", Kn = (t) => t.split(/\s+/).filter(Boolean).slice(0, 2).map((r) => r.charAt(0).toUpperCase()).join(""), Br = {
  overflow: "hidden",
  textOverflow: "ellipsis",
  whiteSpace: "nowrap",
  maxWidth: "100%"
}, Mr = ({ count: t }) => t ? /* @__PURE__ */ e(
  x,
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
    children: t > 99 ? "99+" : t
  }
) : null, nr = ({ name: t, avatar: r, color: o, size: n = 36 }) => /* @__PURE__ */ e(
  Zo,
  {
    src: r,
    alt: t,
    sx: {
      width: n,
      height: n,
      flexShrink: 0,
      fontSize: n * 0.36,
      fontWeight: 600,
      bgcolor: o,
      color: "#ffffff"
    },
    children: Kn(t)
  }
), ho = ({ name: t, role: r, avatar: o, avatarColor: n, showText: i }) => /* @__PURE__ */ u(at, { children: [
  /* @__PURE__ */ e(nr, { name: t, avatar: o, color: n }),
  i && /* @__PURE__ */ u(
    x,
    {
      sx: {
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        minWidth: 0,
        flexGrow: 1
      },
      children: [
        /* @__PURE__ */ e(
          z,
          {
            variant: "body2",
            sx: { ...Br, fontWeight: 600, color: "inherit" },
            children: t
          }
        ),
        /* @__PURE__ */ e(
          z,
          {
            variant: "caption",
            sx: { ...Br, opacity: 0.8, color: "inherit" },
            children: Un(r)
          }
        )
      ]
    }
  )
] }), Lr = {
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
}, po = ({
  anchorEl: t,
  onClose: r,
  placement: o,
  width: n,
  avatarColor: i,
  showNotifications: h,
  notificationCount: s,
  onNotificationsClick: l,
  userName: c = "User",
  userRole: d,
  userAvatar: p,
  menuItems: w = [],
  showSettings: f,
  onSettingsClick: g,
  showThemeToggler: R,
  theme: b,
  onThemeToggle: y,
  onLogout: M
}) => {
  const D = (v) => () => {
    r(), v == null || v();
  };
  return /* @__PURE__ */ u(
    Qo,
    {
      anchorEl: t,
      open: !!t,
      onClose: r,
      anchorOrigin: Lr[o].anchor,
      transformOrigin: Lr[o].transform,
      slotProps: {
        paper: {
          sx: {
            width: n ?? 240,
            maxWidth: "calc(100vw - 16px)",
            mt: o === "beside" ? 0 : -1,
            ml: o === "beside" ? 1.5 : 0,
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
        /* @__PURE__ */ e(
          se,
          {
            direction: "row",
            spacing: 1.25,
            sx: { px: 1.5, py: 1, alignItems: "center" },
            children: /* @__PURE__ */ e(
              ho,
              {
                name: c,
                role: d,
                avatar: p,
                avatarColor: i,
                showText: !0
              }
            )
          }
        ),
        /* @__PURE__ */ e(Te, {}),
        h && /* @__PURE__ */ u(Re, { onClick: D(l), children: [
          /* @__PURE__ */ e(ae, { children: /* @__PURE__ */ e(Yr, { fontSize: "small" }) }),
          /* @__PURE__ */ e(Le, { children: "Notifications" }),
          /* @__PURE__ */ e(Mr, { count: s })
        ] }),
        w.map((v) => /* @__PURE__ */ u(Re, { onClick: D(v.onClick), children: [
          v.icon && /* @__PURE__ */ e(ae, { children: v.icon }),
          /* @__PURE__ */ e(Le, { inset: !v.icon, children: v.label }),
          /* @__PURE__ */ e(Mr, { count: v.badge })
        ] }, v.key)),
        f && /* @__PURE__ */ u(Re, { onClick: D(g), children: [
          /* @__PURE__ */ e(ae, { children: /* @__PURE__ */ e(qr, { fontSize: "small" }) }),
          /* @__PURE__ */ e(Le, { children: "Settings" })
        ] }),
        R && [
          /* @__PURE__ */ e(Te, {}, "theme-divider"),
          /* @__PURE__ */ u(x, { sx: { px: 1.5, py: 1 }, children: [
            /* @__PURE__ */ e(
              z,
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
            /* @__PURE__ */ u(
              en,
              {
                exclusive: !0,
                fullWidth: !0,
                size: "small",
                "aria-label": "Theme",
                value: b,
                onChange: (v, L) => L && L !== b && (y == null ? void 0 : y()),
                disabled: !y,
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
                  /* @__PURE__ */ e(Or, { value: "light", children: "Light" }),
                  /* @__PURE__ */ e(Or, { value: "dark", children: "Dark" })
                ]
              }
            )
          ] }, "theme")
        ],
        /* @__PURE__ */ e(Te, {}),
        /* @__PURE__ */ u(
          Re,
          {
            onClick: D(M),
            sx: {
              color: b === "dark" ? "hsl(0, 90%, 65%)" : "error.main"
            },
            children: [
              /* @__PURE__ */ e(ae, { sx: { color: "inherit" }, children: /* @__PURE__ */ e(Vr, { fontSize: "small" }) }),
              /* @__PURE__ */ e(Le, { children: "Log out" })
            ]
          }
        )
      ]
    }
  );
}, fo = 64, Gn = 2, ft = ({
  label: t,
  icon: r,
  onClick: o,
  active: n,
  color: i,
  activeColor: h,
  activeBackground: s,
  ariaLabel: l,
  haspopup: c,
  isPage: d = !1,
  testId: p
}) => /* @__PURE__ */ u(
  et,
  {
    onClick: o,
    "aria-label": l ?? t,
    "aria-haspopup": c,
    "aria-expanded": c ? n : void 0,
    "aria-current": d && n ? "page" : void 0,
    "data-testid": p,
    sx: {
      flex: "1 1 0",
      minWidth: 0,
      height: "100%",
      flexDirection: "column",
      gap: 0.25,
      color: n ? h : i,
      "&.Mui-focusVisible": {
        outline: "2px solid",
        outlineColor: h,
        outlineOffset: -4
      }
    },
    children: [
      /* @__PURE__ */ e(
        x,
        {
          sx: {
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: 28,
            minWidth: 48,
            borderRadius: "14px",
            bgcolor: n ? s : "transparent",
            transition: "background-color 150ms"
          },
          children: r
        }
      ),
      /* @__PURE__ */ e(
        z,
        {
          component: "span",
          sx: {
            fontSize: 11,
            fontWeight: n ? 600 : 500,
            lineHeight: 1.2,
            color: "inherit"
          },
          children: t
        }
      )
    ]
  }
), jn = ({
  onMenuClick: t,
  menuOpen: r,
  onSearchClick: o,
  searchOpen: n,
  showAssistant: i,
  onAssistantClick: h,
  assistantActive: s,
  showProfile: l,
  background: c,
  color: d,
  activeColor: p,
  activeBackground: w,
  pinnedLinks: f = [],
  activePath: g,
  onLinkClick: R,
  ...b
}) => {
  const y = f.filter((E) => E.path).slice(0, Gn), [M, D] = m.useState(
    null
  ), { userName: v = "User", userAvatar: L, avatarColor: j } = b, $ = { color: d, activeColor: p, activeBackground: w };
  return /* @__PURE__ */ u(
    or,
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
        height: `calc(${fo}px + env(safe-area-inset-bottom, 0px))`,
        pb: "env(safe-area-inset-bottom, 0px)",
        bgcolor: c,
        borderTop: "1px solid",
        borderColor: "divider"
      },
      children: [
        t && /* @__PURE__ */ e(
          ft,
          {
            label: "Menu",
            icon: /* @__PURE__ */ e(jr, {}),
            onClick: t,
            active: r,
            haspopup: "dialog",
            testId: "mobile-nav-menu",
            ...$
          }
        ),
        y.map((E) => /* @__PURE__ */ e(
          ft,
          {
            label: E.text,
            icon: E.icon,
            onClick: () => R == null ? void 0 : R(E.path),
            active: Qe(E, g),
            isPage: !0,
            testId: `mobile-nav-link-${E.text}`,
            ...$
          },
          E.path
        )),
        i && /* @__PURE__ */ e(
          ft,
          {
            label: "Nexa",
            ariaLabel: "Ask Nexa",
            icon: /* @__PURE__ */ e(
              x,
              {
                sx: {
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: 40,
                  height: 28,
                  borderRadius: "8px",
                  border: "1px solid",
                  borderColor: s ? "#09C1AE" : "rgba(9, 193, 174, 0.45)",
                  bgcolor: "rgba(9, 193, 174, 0.1)"
                },
                children: /* @__PURE__ */ e(_t, { size: 18 })
              }
            ),
            onClick: h,
            active: s,
            testId: "mobile-nav-nexa",
            ...$
          }
        ),
        o && /* @__PURE__ */ e(
          ft,
          {
            label: "Search",
            icon: /* @__PURE__ */ e(Xr, {}),
            onClick: o,
            active: n,
            haspopup: "dialog",
            testId: "mobile-nav-search",
            ...$
          }
        ),
        l && /* @__PURE__ */ u(at, { children: [
          /* @__PURE__ */ e(
            ft,
            {
              label: "Account",
              ariaLabel: `Account menu for ${v}`,
              icon: /* @__PURE__ */ e(
                nr,
                {
                  name: v,
                  avatar: L,
                  color: j,
                  size: 26
                }
              ),
              onClick: (E) => D(E.currentTarget),
              active: !!M,
              haspopup: "menu",
              testId: "mobile-nav-account",
              ...$
            }
          ),
          /* @__PURE__ */ e(
            po,
            {
              anchorEl: M,
              onClose: () => D(null),
              placement: "above-end",
              width: 280,
              ...b
            }
          )
        ] })
      ]
    }
  );
}, Xn = ({
  open: t,
  onClose: r,
  search: o
}) => /* @__PURE__ */ e(
  tn,
  {
    anchor: "top",
    open: t,
    onClose: r,
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
    children: /* @__PURE__ */ u(
      se,
      {
        direction: "row",
        spacing: 1,
        "data-testid": "mobile-search-sheet",
        sx: { alignItems: "center" },
        children: [
          /* @__PURE__ */ e(x, { sx: { flex: "1 1 auto", minWidth: 0 }, children: o }),
          /* @__PURE__ */ e(
            Gr,
            {
              onClick: r,
              sx: { flexShrink: 0, textTransform: "none" },
              children: "Cancel"
            }
          )
        ]
      }
    )
  }
), Vn = ({
  height: t,
  onMenuClick: r,
  appName: o,
  logo: n,
  onBrandClick: i,
  background: h,
  color: s,
  brandColor: l = s,
  endContent: c
}) => /* @__PURE__ */ e(
  rn,
  {
    position: "fixed",
    elevation: 0,
    sx: {
      height: t,
      background: h,
      color: s,
      borderBottom: "1px solid",
      borderColor: "divider"
    },
    children: /* @__PURE__ */ u(on, { sx: { minHeight: `${t}px !important`, gap: 1, px: 1 }, children: [
      r && /* @__PURE__ */ e(
        we,
        {
          "aria-label": "Open navigation menu",
          onClick: r,
          sx: { color: s },
          children: /* @__PURE__ */ e(jr, {})
        }
      ),
      /* @__PURE__ */ e(
        Tt,
        {
          title: o,
          appName: o,
          logo: n,
          onClick: i,
          color: l,
          testId: "mobile-brand"
        }
      ),
      c ? /* @__PURE__ */ e(x, { sx: { ml: "auto", display: "flex", alignItems: "center" }, children: c }) : null
    ] })
  }
), ir = ({
  count: t,
  onClick: r,
  color: o,
  hoverColor: n,
  tooltipPlacement: i,
  testId: h
}) => {
  const s = t ? `Notifications, ${t} unread` : "Notifications";
  return /* @__PURE__ */ e(xe, { title: s, placement: i, arrow: !0, children: /* @__PURE__ */ e(
    we,
    {
      onClick: r,
      "aria-label": s,
      "data-testid": h,
      sx: {
        color: o,
        flexShrink: 0,
        borderRadius: "8px",
        "&:hover": { bgcolor: n },
        "&.Mui-focusVisible": {
          outline: "2px solid",
          outlineColor: o
        }
      },
      children: /* @__PURE__ */ e(
        Jr,
        {
          color: "error",
          badgeContent: t,
          invisible: t === 0,
          max: 99,
          sx: {
            "& .MuiBadge-badge": {
              fontSize: 10,
              height: 16,
              minWidth: 16,
              px: 0.5
            }
          },
          children: /* @__PURE__ */ e(Yr, {})
        }
      )
    }
  ) });
}, mo = ({
  title: t,
  subtitle: r,
  testId: o,
  width: n,
  sx: i,
  footer: h,
  children: s
}) => {
  const l = m.useId();
  return /* @__PURE__ */ u(
    x,
    {
      role: "dialog",
      "aria-modal": "false",
      "aria-labelledby": l,
      "data-testid": o,
      sx: [
        { width: n, minWidth: n },
        ...Array.isArray(i) ? i : [i]
      ],
      children: [
        /* @__PURE__ */ u(x, { sx: { px: 2, pt: 1.5, pb: 1 }, children: [
          /* @__PURE__ */ e(z, { id: l, sx: { fontWeight: 600 }, children: t }),
          r ? /* @__PURE__ */ e(
            z,
            {
              variant: "body2",
              sx: { mt: 0.25, color: "text.secondary" },
              children: r
            }
          ) : null
        ] }),
        s,
        h ? /* @__PURE__ */ u(at, { children: [
          /* @__PURE__ */ e(Te, {}),
          h
        ] }) : null
      ]
    }
  );
}, Yn = 5, qn = 56, Jn = ({
  platforms: t,
  currentPlatformKey: r,
  onSelect: o,
  accentColor: n,
  tint: i,
  width: h,
  sx: s
}) => /* @__PURE__ */ e(
  mo,
  {
    title: "Lumora Platforms",
    subtitle: "Choose where you want to work.",
    testId: "platforms-panel",
    width: h,
    sx: s,
    footer: /* @__PURE__ */ u(
      se,
      {
        direction: "row",
        sx: {
          alignItems: "center",
          gap: 1,
          px: 2,
          py: 1.5,
          color: "text.secondary"
        },
        children: [
          /* @__PURE__ */ e(un, { fontSize: "small" }),
          /* @__PURE__ */ e(z, { variant: "body2", children: "Platforms available to your account" })
        ]
      }
    ),
    children: /* @__PURE__ */ e(
      Nt,
      {
        autoFocusItem: !0,
        "aria-label": "Platforms",
        sx: {
          px: 1,
          py: 0.5,
          maxHeight: Yn * qn,
          overflowY: "auto"
        },
        children: t.map((l) => {
          const c = l.key === r;
          return /* @__PURE__ */ u(
            Re,
            {
              "data-testid": `platform-item-${l.key}`,
              "aria-current": c ? "true" : void 0,
              onClick: () => {
                c || o(l);
              },
              sx: {
                borderRadius: "10px",
                px: 1.5,
                py: 1.25,
                mb: 0.5,
                gap: 1,
                // The current row is inert: keeps its wash on hover
                // and shows no pointer.
                bgcolor: c ? i : "transparent",
                cursor: c ? "default" : "pointer",
                "&:hover": {
                  bgcolor: c ? i : "action.hover"
                }
              },
              children: [
                /* @__PURE__ */ u(x, { sx: { flex: 1, minWidth: 0 }, children: [
                  /* @__PURE__ */ e(z, { noWrap: !0, sx: { fontWeight: 500 }, children: l.name }),
                  l.description ? /* @__PURE__ */ e(
                    z,
                    {
                      noWrap: !0,
                      variant: "caption",
                      sx: {
                        display: "block",
                        color: "text.secondary"
                      },
                      children: l.description
                    }
                  ) : null
                ] }),
                c ? /* @__PURE__ */ u(
                  se,
                  {
                    direction: "row",
                    sx: {
                      alignItems: "center",
                      gap: 0.5,
                      flexShrink: 0,
                      color: n,
                      fontSize: "0.8125rem",
                      fontWeight: 500
                    },
                    children: [
                      "Current",
                      /* @__PURE__ */ e(dn, { sx: { fontSize: 16 } })
                    ]
                  }
                ) : /* @__PURE__ */ e(
                  cn,
                  {
                    fontSize: "small",
                    "data-testid": "platform-external-icon",
                    sx: { flexShrink: 0, color: "text.secondary" }
                  }
                )
              ]
            },
            l.key
          );
        })
      }
    )
  }
), Fr = (t) => t.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, ""), Zn = ({
  sections: t,
  onItemClick: r,
  width: o,
  sx: n
}) => {
  const [i, h] = m.useState({}), s = (c) => i[c.title] ?? c.defaultOpen ?? !0, l = (c) => h((d) => ({
    ...d,
    [c.title]: !s(c)
  }));
  return /* @__PURE__ */ e(
    mo,
    {
      title: "Settings",
      testId: "settings-panel",
      width: o,
      sx: n,
      children: /* @__PURE__ */ e(
        Nt,
        {
          autoFocusItem: !0,
          "aria-label": "Settings",
          sx: { px: 1, py: 0.5, maxHeight: "60vh", overflowY: "auto" },
          children: t.flatMap((c) => {
            const d = s(c), p = Fr(c.title), w = /* @__PURE__ */ u(
              Re,
              {
                onClick: () => l(c),
                "aria-expanded": d,
                "data-testid": `settings-section-${p}`,
                sx: {
                  borderRadius: "8px",
                  py: 0.75,
                  gap: 1,
                  fontWeight: 600
                },
                children: [
                  /* @__PURE__ */ e(x, { component: "span", sx: { flex: 1, minWidth: 0 }, children: c.title }),
                  /* @__PURE__ */ e(
                    hn,
                    {
                      "data-testid": `settings-section-${p}-chevron`,
                      sx: {
                        fontSize: 20,
                        color: "text.secondary",
                        flexShrink: 0,
                        transform: d ? "none" : "rotate(-90deg)",
                        transition: "transform 150ms ease"
                      }
                    }
                  )
                ]
              },
              `section-${c.title}`
            );
            return d ? [
              w,
              ...c.items.map((f) => /* @__PURE__ */ e(
                Re,
                {
                  onClick: () => r(f, c),
                  disabled: f.disabled,
                  "data-testid": `settings-item-${f.key ?? Fr(f.text)}`,
                  sx: {
                    borderRadius: "8px",
                    py: 0.75,
                    // Indented under the header, no bullet.
                    pl: 3.5
                  },
                  children: f.text
                },
                `item-${c.title}-${f.key ?? f.text}`
              ))
            ] : [w];
          })
        }
      )
    }
  );
}, Qn = 288, ei = 300, xo = {
  "&:focus, &:focus-visible": { outline: "none" }
}, go = {
  pointerEvents: "auto",
  bgcolor: "background.paper",
  border: "1px solid",
  borderColor: "divider",
  borderRadius: "12px",
  boxShadow: "0 8px 24px rgba(0, 0, 0, 0.12)",
  overflow: "hidden",
  display: "flex",
  flexDirection: "column"
}, Hr = {
  ...go,
  "@keyframes sub-panel-in": {
    from: { opacity: 0, transform: "translateX(-6px)" },
    to: { opacity: 1, transform: "none" }
  },
  animation: "sub-panel-in 150ms ease-out",
  "@media (prefers-reduced-motion: reduce)": { animation: "none" }
}, ti = ({ mode: t, onToggle: r, accentColor: o, tint: n }) => {
  const i = m.useRef(null), h = m.useRef(null), s = (d) => {
    var p;
    d !== t && (r == null || r()), (p = (d === "light" ? i : h).current) == null || p.focus();
  }, l = (d) => {
    if (!(d.key === "Tab" || d.key === "Escape"))
      switch (d.stopPropagation(), d.key) {
        case "ArrowLeft":
        case "ArrowRight":
        case "ArrowUp":
        case "ArrowDown":
          d.preventDefault(), s(t === "light" ? "dark" : "light");
          break;
        case "Home":
          d.preventDefault(), s("light");
          break;
        case "End":
          d.preventDefault(), s("dark");
          break;
      }
  }, c = (d, p, w, f) => {
    const g = t === d;
    return /* @__PURE__ */ e(
      et,
      {
        ref: f,
        role: "radio",
        "aria-checked": g,
        "aria-label": p,
        tabIndex: g ? 0 : -1,
        onClick: () => s(d),
        "data-testid": `theme-segment-${d}`,
        sx: {
          width: 36,
          height: 26,
          borderRadius: "999px",
          color: g ? o : "text.secondary",
          bgcolor: g ? n : "transparent",
          transition: "background-color 150ms ease, color 150ms ease",
          "&.Mui-focusVisible": {
            boxShadow: `0 0 0 2px ${Xe(o, 0.6)}`
          },
          ...xo
        },
        children: /* @__PURE__ */ e(w, { sx: { fontSize: 18 } })
      }
    );
  };
  return /* @__PURE__ */ u(
    se,
    {
      direction: "row",
      role: "radiogroup",
      "aria-label": "Theme",
      "data-testid": "theme-segments",
      onKeyDown: l,
      sx: {
        p: "3px",
        gap: "2px",
        borderRadius: "999px",
        bgcolor: "action.selected",
        flexShrink: 0
      },
      children: [
        c("light", "Light", sn, i),
        c("dark", "Dark", nn, h)
      ]
    }
  );
}, ri = ({
  open: t,
  anchorEl: r,
  onClose: o,
  width: n,
  renderAvatar: i,
  userName: h,
  userEmail: s,
  roleLabel: l,
  accentColor: c,
  tint: d,
  showThemeToggler: p,
  theme: w,
  onThemeToggle: f,
  onProfileClick: g,
  showSettings: R,
  onSettingsClick: b,
  settingsSections: y,
  onSettingsItemClick: M,
  onLinkClick: D,
  platforms: v,
  currentPlatformKey: L,
  onPlatformSelect: j,
  onLogout: $
}) => {
  const ee = Dt().palette.mode === "dark", te = m.useRef(null), [I, U] = m.useState(null), N = m.useRef(null), W = m.useRef(null), re = m.useRef(null), [ge, Y] = m.useState(
    null
  ), [be, Ie] = m.useState(0), [C, le] = m.useState(null), Ae = !!(v != null && v.length), X = R && !!(y != null && y.length), Fe = R && (X || !!b), q = m.useCallback(() => {
    const S = N.current, G = C === "platforms" ? W.current : C === "settings" ? re.current : null;
    if (!t || !S || !G || !ge) {
      Ie(0);
      return;
    }
    const We = S.getBoundingClientRect(), Ee = G.getBoundingClientRect().top, Oe = ge.getBoundingClientRect().height, ye = We.bottom - (Ee + Oe), ke = Math.max(0, We.height - Oe), Ye = Math.round(Math.min(Math.max(ye, 0), ke));
    Ie((ue) => ue === Ye ? ue : Ye);
  }, [t, C, ge]);
  m.useLayoutEffect(() => {
    q();
  }, [q]), m.useEffect(() => {
    if (!I || typeof ResizeObserver > "u")
      return;
    const S = new ResizeObserver(() => {
      var G;
      (G = te.current) == null || G.updatePosition(), q();
    });
    return S.observe(I), () => S.disconnect();
  }, [I, q]);
  const Ce = () => {
    le(null);
  }, _ = (S) => {
    o(), S == null || S();
  }, Ve = () => {
    var G;
    const S = C === "platforms" ? W : re;
    le(null), (G = S.current) == null || G.focus();
  }, Z = (S) => {
    le((G) => G === S ? null : S);
  }, He = (S) => {
    S.key !== L && (o(), j ? j(S) : pn(S.url));
  }, De = (S, G) => {
    o(), S.onClick ? S.onClick() : M ? M(S, G) : S.path && (D == null || D(S.path));
  }, Se = (S) => {
    S.key === "Escape" && C && (S.stopPropagation(), Ve());
  }, H = { borderRadius: "8px", py: 1, gap: 0.5 }, Ne = { color: "text.secondary", fontSize: 20 }, oe = {
    color: c,
    bgcolor: d,
    "& .MuiListItemIcon-root": { color: c },
    "& .MuiSvgIcon-root": { color: c },
    "&:hover": { bgcolor: Xe(c, 0.22) }
  }, ce = C === "settings", de = C === "platforms", ne = /* @__PURE__ */ u(se, { direction: "row", sx: { alignItems: "center", gap: 1.5, p: 2 }, children: [
    i(44),
    /* @__PURE__ */ u(x, { sx: { minWidth: 0, flex: 1 }, children: [
      /* @__PURE__ */ e(z, { noWrap: !0, sx: { fontWeight: 600 }, children: h }),
      s ? /* @__PURE__ */ e(
        z,
        {
          noWrap: !0,
          variant: "body2",
          "data-testid": "account-menu-email",
          sx: { color: "text.secondary" },
          children: s
        }
      ) : null,
      l ? /* @__PURE__ */ e(
        z,
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
          children: l
        }
      ) : null,
      g ? /* @__PURE__ */ e(
        z,
        {
          noWrap: !0,
          variant: "caption",
          "data-hint": !0,
          "data-testid": "account-menu-view-profile",
          sx: {
            letterSpacing: "0.02em",
            fontWeight: 600,
            color: c,
            textDecoration: "underline",
            textUnderlineOffset: "2px"
          },
          children: "View profile"
        }
      ) : null
    ] })
  ] });
  return /* @__PURE__ */ u(
    Zr,
    {
      open: t,
      anchorEl: r,
      onClose: o,
      action: te,
      anchorOrigin: { vertical: "top", horizontal: "left" },
      transformOrigin: { vertical: "bottom", horizontal: "left" },
      slotProps: {
        transition: { onExited: Ce },
        paper: {
          ref: U,
          onKeyDown: Se,
          sx: {
            // Transparent paper: each card draws its own chrome. The
            // paper's box spans both cards (the second one is shorter
            // and bottom-aligned), so it must not catch clicks itself —
            // clicks on its empty area fall through to the backdrop
            // and close the menu like any other outside click.
            bgcolor: "transparent",
            backgroundImage: "none",
            boxShadow: "none",
            border: "none",
            borderRadius: 0,
            overflow: "visible",
            pointerEvents: "none",
            mt: -1,
            maxWidth: "calc(100vw - 32px)",
            display: "flex",
            alignItems: "flex-end",
            gap: 1
          }
        }
      },
      children: [
        /* @__PURE__ */ u(
          x,
          {
            ref: N,
            "data-testid": "account-menu",
            sx: { ...go, width: n, minWidth: n },
            children: [
              g ? /* @__PURE__ */ e(
                et,
                {
                  onClick: () => _(g),
                  "data-testid": "account-menu-header",
                  sx: {
                    display: "block",
                    width: "100%",
                    textAlign: "left",
                    transition: "background-color 150ms ease",
                    "& [data-hint]": { display: "none" },
                    "&:hover, &.Mui-focusVisible": {
                      bgcolor: d,
                      "& [data-hint]": { display: "block" },
                      "& [data-role]": { display: "none" }
                    },
                    ...xo
                  },
                  children: ne
                }
              ) : /* @__PURE__ */ e(x, { "data-testid": "account-menu-header", children: ne }),
              /* @__PURE__ */ e(Te, {}),
              p ? /* @__PURE__ */ u(
                x,
                {
                  "data-testid": "menu-item-theme",
                  sx: {
                    ...H,
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
                    /* @__PURE__ */ e(ae, { children: /* @__PURE__ */ e(ln, { fontSize: "small" }) }),
                    /* @__PURE__ */ e(z, { sx: { flex: 1 }, children: "Theme" }),
                    /* @__PURE__ */ e(
                      ti,
                      {
                        mode: w,
                        onToggle: f,
                        accentColor: c,
                        tint: d
                      }
                    )
                  ]
                }
              ) : null,
              /* @__PURE__ */ u(
                Nt,
                {
                  autoFocusItem: t,
                  sx: { px: 1, pt: p ? 0 : 0.5, pb: 0.5 },
                  children: [
                    Fe ? /* @__PURE__ */ u(
                      Re,
                      {
                        ref: re,
                        onClick: X ? () => Z("settings") : () => _(b),
                        "aria-haspopup": X ? "dialog" : void 0,
                        "aria-expanded": X ? ce : void 0,
                        "data-active": ce ? "true" : "false",
                        "data-testid": "menu-item-settings",
                        sx: ce ? { ...H, ...oe } : H,
                        children: [
                          /* @__PURE__ */ e(ae, { children: /* @__PURE__ */ e(qr, { fontSize: "small" }) }),
                          /* @__PURE__ */ e(z, { sx: { flex: 1 }, children: "Settings" }),
                          /* @__PURE__ */ e(Zt, { sx: Ne })
                        ]
                      }
                    ) : null,
                    Ae ? /* @__PURE__ */ e(Te, { component: "li", sx: { my: 0.5 } }) : null,
                    Ae ? /* @__PURE__ */ u(
                      Re,
                      {
                        ref: W,
                        onClick: () => Z("platforms"),
                        "aria-haspopup": "dialog",
                        "aria-expanded": de,
                        "data-active": de ? "true" : "false",
                        "data-testid": "menu-item-platforms",
                        sx: de ? { ...H, ...oe } : H,
                        children: [
                          /* @__PURE__ */ e(ae, { children: /* @__PURE__ */ e(an, { fontSize: "small" }) }),
                          /* @__PURE__ */ e(z, { sx: { flex: 1 }, children: "Lumora Platforms" }),
                          /* @__PURE__ */ e(Zt, { sx: Ne })
                        ]
                      }
                    ) : null,
                    $ ? /* @__PURE__ */ e(Te, { component: "li", sx: { my: 0.5 } }) : null,
                    $ ? /* @__PURE__ */ u(
                      Re,
                      {
                        onClick: () => _($),
                        "data-testid": "menu-item-logout",
                        sx: {
                          ...H,
                          color: ee ? "error.light" : "error.main"
                        },
                        children: [
                          /* @__PURE__ */ e(ae, { sx: { color: "inherit" }, children: /* @__PURE__ */ e(Vr, { fontSize: "small" }) }),
                          "Log out"
                        ]
                      }
                    ) : null
                  ]
                }
              )
            ]
          }
        ),
        Ae && C === "platforms" || X && C === "settings" ? /* @__PURE__ */ e(
          x,
          {
            ref: Y,
            "data-testid": "account-menu-subcard",
            style: { marginBottom: be },
            sx: { display: "flex" },
            children: C === "platforms" ? /* @__PURE__ */ e(
              Jn,
              {
                platforms: v,
                currentPlatformKey: L,
                onSelect: He,
                accentColor: c,
                tint: d,
                width: Qn,
                sx: Hr
              }
            ) : /* @__PURE__ */ e(
              Zn,
              {
                sections: y,
                onItemClick: De,
                width: ei,
                sx: Hr
              }
            )
          }
        ) : null
      ]
    }
  );
}, oi = {
  "&:focus, &:focus-visible": { outline: "none" }
}, ni = ({
  mainLinks: t,
  secondaryLinks: r = [],
  activePath: o,
  onLinkClick: n,
  logo: i,
  title: h,
  onBrandClick: s,
  brandColor: l,
  headerBackgroundColor: c,
  headerForegroundColor: d,
  activeAccentColor: p = "#01584f",
  groupAccentColor: w,
  activeForegroundColor: f,
  foregroundColor: g,
  surfaceBackgroundColor: R,
  collapsed: b,
  onCollapsedChange: y,
  expandedWidth: M,
  collapsedWidth: D,
  topContent: v,
  color: L,
  hoverColor: j,
  avatarColor: $,
  showProfile: E = !0,
  userName: ee = "User",
  userEmail: te,
  userRole: I,
  userAvatar: U,
  showNotifications: N = !0,
  notificationCount: W = 0,
  onNotificationsClick: re,
  whatsNewCount: ge = 0,
  onProfileClick: Y,
  showSettings: be = !0,
  onSettingsClick: Ie,
  settingsSections: C,
  onSettingsItemClick: le,
  platforms: Ae,
  currentPlatformKey: X,
  onPlatformSelect: Fe,
  onLogout: q,
  theme: Ce = "light",
  showThemeToggler: _ = !0,
  onThemeToggle: Ve
}) => {
  const Z = Dt(), He = Z.palette.mode === "dark", De = R ?? (He ? Z.palette.background.paper : "#ffffff"), Se = L ?? g ?? (He ? Z.palette.text.primary : p), H = j ?? w ?? At(p), Ne = $ ?? p, oe = m.useRef(null), [ce, de] = m.useState(!1), ne = I ? no(I) : void 0, S = (ke) => /* @__PURE__ */ e(
    nr,
    {
      name: ee,
      avatar: U,
      color: Ne,
      size: ke
    }
  ), G = W + ge, We = N ? /* @__PURE__ */ e(
    ir,
    {
      count: G,
      onClick: re,
      color: Se,
      hoverColor: H,
      tooltipPlacement: "right",
      testId: "panel-notifications"
    }
  ) : null, Ee = E ? /* @__PURE__ */ u(
    et,
    {
      ref: oe,
      onClick: () => de(!0),
      "aria-haspopup": "menu",
      "aria-expanded": ce,
      "aria-label": "Account menu",
      "data-testid": "panel-user-button",
      sx: {
        flex: b ? "0 0 auto" : 1,
        minWidth: 0,
        justifyContent: "flex-start",
        gap: 1.25,
        p: 0.75,
        borderRadius: "10px",
        bgcolor: ce ? H : "transparent",
        "&:hover": { bgcolor: H },
        ...oi
      },
      children: [
        b && N ? (
          // Collapsed: no room for the bell, so unread shows as a dot
          /* @__PURE__ */ e(
            Jr,
            {
              color: "error",
              variant: "dot",
              overlap: "circular",
              invisible: !G,
              children: S(36)
            }
          )
        ) : S(b ? 36 : 40),
        b ? null : /* @__PURE__ */ u(x, { sx: { minWidth: 0, textAlign: "left" }, children: [
          /* @__PURE__ */ e(
            z,
            {
              noWrap: !0,
              sx: { fontWeight: 600, color: Se, lineHeight: 1.3 },
              children: ee
            }
          ),
          ne ? /* @__PURE__ */ e(
            z,
            {
              noWrap: !0,
              variant: "caption",
              "data-testid": "panel-user-role",
              sx: {
                display: "block",
                color: Se,
                opacity: 0.85,
                letterSpacing: "0.02em",
                lineHeight: 1.3
              },
              children: ne
            }
          ) : null
        ] })
      ]
    }
  ) : null, Oe = !!We && (!b || !Ee);
  return /* @__PURE__ */ u(
    x,
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
        /* @__PURE__ */ e(
          er,
          {
            mainLinks: t,
            secondaryLinks: r,
            activePath: o,
            onLinkClick: n,
            showHeaderBar: !0,
            logo: i,
            title: h,
            onBrandClick: s,
            brandColor: l,
            headerBackgroundColor: c,
            headerForegroundColor: d,
            activeAccentColor: p,
            groupAccentColor: w,
            activeForegroundColor: f,
            foregroundColor: g,
            surfaceBackgroundColor: De,
            collapsed: b,
            onCollapsedChange: y,
            expandedWidth: M,
            collapsedWidth: D,
            topContent: v,
            footer: Ee || Oe ? /* @__PURE__ */ u(
              se,
              {
                direction: "row",
                sx: {
                  alignItems: "center",
                  gap: 0.5,
                  justifyContent: "center"
                },
                children: [
                  Ee,
                  Oe ? We : null
                ]
              }
            ) : void 0
          }
        ),
        E ? /* @__PURE__ */ e(
          ri,
          {
            open: ce,
            anchorEl: oe.current,
            onClose: () => de(!1),
            width: Math.max(M - 16, 240),
            renderAvatar: S,
            userName: ee,
            userEmail: te,
            roleLabel: ne,
            accentColor: p,
            tint: H,
            showThemeToggler: _,
            theme: Ce,
            onThemeToggle: Ve,
            onProfileClick: Y,
            showSettings: be,
            onSettingsClick: Ie,
            settingsSections: C,
            onSettingsItemClick: le,
            onLinkClick: n,
            platforms: Ae,
            currentPlatformKey: X,
            onPlatformSelect: Fe,
            onLogout: q
          }
        ) : null
      ]
    }
  );
}, ii = ({
  compact: t,
  color: r,
  hoverColor: o,
  showProfile: n,
  whatsNewCount: i = 0,
  ...h
}) => {
  var D;
  const {
    avatarColor: s,
    showNotifications: l,
    notificationCount: c,
    onNotificationsClick: d,
    userName: p = "User",
    userRole: w,
    userAvatar: f
  } = h, g = m.useRef(null), [R, b] = m.useState(
    null
  ), y = !!R;
  if (!l && !n)
    return null;
  const M = {
    "&.Mui-focusVisible": { outline: "2px solid", outlineColor: r }
  };
  return /* @__PURE__ */ u(at, { children: [
    /* @__PURE__ */ u(
      se,
      {
        ref: g,
        direction: t ? "column" : "row",
        spacing: 0.5,
        "data-testid": "sidebar-footer",
        sx: { width: "100%", alignItems: "center" },
        children: [
          n && /* @__PURE__ */ e(
            xe,
            {
              title: t ? p : "",
              placement: "right",
              arrow: !0,
              children: /* @__PURE__ */ e(
                et,
                {
                  onClick: () => b(g.current),
                  "aria-label": `Account menu for ${p}`,
                  "aria-haspopup": "menu",
                  "aria-expanded": y,
                  "data-testid": "sidebar-user",
                  sx: {
                    flex: t ? "0 0 auto" : "1 1 auto",
                    minWidth: 0,
                    gap: 1.25,
                    p: t ? 0.5 : "6px 8px",
                    justifyContent: "flex-start",
                    borderRadius: "8px",
                    color: r,
                    bgcolor: y ? o : "transparent",
                    "&:hover": { bgcolor: o },
                    ...M
                  },
                  children: /* @__PURE__ */ e(
                    ho,
                    {
                      name: p,
                      role: w,
                      avatar: f,
                      avatarColor: s,
                      showText: !t
                    }
                  )
                }
              )
            }
          ),
          l && /* @__PURE__ */ e(
            ir,
            {
              count: c + i,
              onClick: d,
              color: r,
              hoverColor: o,
              tooltipPlacement: "right",
              testId: "sidebar-notifications"
            }
          )
        ]
      }
    ),
    /* @__PURE__ */ e(
      po,
      {
        anchorEl: R,
        onClose: () => b(null),
        placement: t ? "beside" : "above",
        width: t || (D = g.current) == null ? void 0 : D.clientWidth,
        ...h
      }
    )
  ] });
}, ai = 'input, textarea, [contenteditable="true"]', Pr = (t) => {
  var r;
  (r = t == null ? void 0 : t.querySelector(ai)) == null || r.focus();
}, si = ({
  search: t,
  mode: r,
  onExpand: o,
  autoFocus: n = !1,
  onAutoFocused: i,
  color: h,
  hoverColor: s
}) => {
  const l = m.useRef(null), [c, d] = m.useState(null);
  return m.useEffect(() => {
    r === "full" && n && (Pr(l.current), i == null || i());
  }, [r, n, i]), r === "full" ? /* @__PURE__ */ e(
    x,
    {
      ref: l,
      "data-testid": "sidebar-search",
      sx: { width: "100%" },
      children: t
    }
  ) : /* @__PURE__ */ u(
    x,
    {
      "data-testid": "sidebar-search",
      sx: { width: "100%", display: "flex", justifyContent: "center" },
      children: [
        /* @__PURE__ */ e(xe, { title: "Search", placement: "right", arrow: !0, children: /* @__PURE__ */ e(
          we,
          {
            "aria-label": "Search",
            onClick: (p) => r === "expand" ? o == null ? void 0 : o() : d(p.currentTarget),
            sx: {
              width: 44,
              height: 44,
              color: h,
              borderRadius: "8px",
              "&:hover": { bgcolor: s }
            },
            children: /* @__PURE__ */ e(Xr, {})
          }
        ) }),
        /* @__PURE__ */ e(
          Zr,
          {
            open: !!c,
            anchorEl: c,
            onClose: () => d(null),
            anchorOrigin: { vertical: "top", horizontal: "right" },
            transformOrigin: { vertical: "top", horizontal: "left" },
            TransitionProps: {
              onEntered: (p) => Pr(p)
            },
            slotProps: { paper: { sx: { ml: 1, p: 1.5, width: 360 } } },
            children: t
          }
        )
      ]
    }
  );
}, li = 100, $r = 80, Vt = 56, ci = 300, Yt = 288, qt = 72, Ur = "lumora:sidebar-collapsed", Jt = "width 200ms ease, left 200ms ease", di = 68, ui = { xs: 2, md: 5 }, hi = () => typeof navigator < "u" && /Mac|iPhone|iPad/.test(navigator.platform || navigator.userAgent), pi = (t, r) => {
  const o = (n) => typeof n == "number" ? r.spacing(n) : n;
  return typeof t == "object" ? Object.fromEntries(
    Object.entries(t).map(([n, i]) => [n, o(i)])
  ) : o(t);
}, ma = ({
  children: t,
  sidebarLinks: r = [],
  secondarySidebarLinks: o = [],
  appName: n = "Dashboard",
  showSidebar: i = !0,
  showSidebarRailTitles: h = !1,
  sidebarVariant: s = "rail",
  mobileNavigation: l = "bottom-bar",
  mobileBottomBarLinks: c,
  logo: d,
  onBrandClick: p,
  searchComponent: w,
  brandColor: f,
  contentPadding: g = ui,
  userMenuItems: R,
  sidebarBackgroundColor: b,
  sidebarHeaderBackgroundColor: y,
  groupAccentColor: M,
  activeSidebarForegroundColor: D,
  enableRefreshToken: v = !1,
  activePath: L,
  onLinkClick: j,
  showProfile: $ = !0,
  userName: E,
  userRole: ee,
  userAvatar: te,
  userEmail: I,
  onLogout: U,
  showSettings: N = !0,
  onSettingsClick: W,
  onProfileClick: re,
  settingsSections: ge,
  onSettingsItemClick: Y,
  showNotifications: be = !0,
  notificationCount: Ie = 0,
  NotificationSidebarContent: C,
  whatsNewCount: le = 0,
  onNotificationsClick: Ae,
  platforms: X,
  currentPlatformKey: Fe,
  onPlatformSelect: q,
  onVerify: Ce,
  alertProps: _,
  style: Ve,
  sidebarStyles: Z,
  contentStyles: He,
  accentColor: De,
  sidebarAccentColor: Se,
  sidebarForegroundColor: H,
  contentBackgroundColor: Ne,
  theme: oe = "light",
  showThemeToggler: ce = !1,
  onThemeToggle: de,
  GlobalChatSidebar: ne,
  useChatSidebar: S,
  chatPanelMode: G = "docked",
  chatPanelPosition: We = "right",
  chatPanelWidth: Ee = 420,
  onChatClose: Oe,
  showAssistant: ye = !1,
  assistantPlacement: ke = "sidebar",
  assistantShortcut: Ye = "j",
  onAssistantClick: ue,
  assistantActive: a = !1,
  assistantBusy: T = !1,
  customNavbar: F,
  customNavbarProps: A,
  redirectToLogin: K,
  apiBaseUrl: V
}) => {
  const _e = Fo(), k = Ho(_e.breakpoints.down("md")), ze = Rr(
    () => Kr(Tn(oe)),
    [oe]
  ), st = oe === "dark", ar = De ?? "#01584f", Pe = Se ?? ar, Wt = Ne ?? (st ? "hsl(220, 35%, 9%)" : "#f2f9fc"), qe = s === "collapsible", kt = s === "panel", bo = kt && i && !k, $e = s === "rail-labeled", sr = qe || $e, Ue = b ?? (st ? "hsl(220, 30%, 7%)" : "#ffffff"), bt = y ?? Ue, Be = H ?? (st ? "#ffffff" : Pe), lt = M ?? At(Be), ct = y ? Qt(bt) : Be, lr = (O) => /* @__PURE__ */ e(
    pe,
    {
      role: "img",
      "aria-label": `${n} logo`,
      sx: {
        width: 28,
        height: 28,
        flexShrink: 0,
        bgcolor: O,
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
  ), St = f ?? ct, zt = d ?? lr(St), So = d ?? lr(f ?? Be), [Ke, Eo] = Ze(
    () => ro(Ur) ?? !1
  ), Bt = (O) => {
    Eo(O), oo(Ur, O);
  }, [yo, cr] = Ze(!1), vo = Lo(() => cr(!1), []);
  let he = 0;
  i && !k && ($e ? he = $r : qe || kt ? he = Ke ? qt : Yt : he = li);
  const [dr, Je] = Ze(!1), [ur, Mt] = Ze(!1), ie = k && l === "bottom-bar", hr = `calc(${fo}px + env(safe-area-inset-bottom, 0px))`, [Lt, pr] = Ze({ open: !1, tab: "notifications" }), fr = () => pr((O) => ({ ...O, open: !1 })), wo = be && !!C, [Ro, Io] = Ze(!0), [Co, Oo] = Ze(!1), Ft = S == null ? void 0 : S(), mr = (Ft == null ? void 0 : Ft.isOpen) ?? !1, xr = G === "floating" ? "floating" : "docked", _o = xr === "docked" && mr && ne && !k ? Ee : 0, Et = Kt(Ce), gr = Kt(!1), br = Rr(
    () => _n(V),
    [V]
  );
  wt(() => {
    Et.current = Ce;
  }, [Ce]);
  const Ht = Kt(ue);
  Ht.current = ue;
  const dt = ye && Ye ? Ye.toLowerCase() : null;
  wt(() => {
    if (!dt)
      return;
    const O = (Q) => {
      (Q.metaKey || Q.ctrlKey) && !Q.altKey && !Q.shiftKey && Q.key.toLowerCase() === dt && Ht.current && (Q.preventDefault(), Ht.current());
    };
    return window.addEventListener("keydown", O), () => window.removeEventListener("keydown", O);
  }, [dt]);
  const Sr = (O) => {
    const Q = U(O);
    Q instanceof Promise && Q.catch((Ge) => {
      console.error("Error in logout handler:", Ge);
    });
  };
  if (wt(() => {
    (() => {
      var Q;
      try {
        const { isAuthenticated: Ge } = Cn();
        if (!Ge) {
          console.log("No session found, redirecting to login"), gt(), K();
          return;
        }
        if (!gr.current) {
          const { user: ht, error: Ut } = On();
          if (ht && !Ut) {
            const ko = {
              name: ht.name || "",
              email: ht.email || "",
              profilePicture: ht.profilePicture || "",
              role: ht.role || ""
            };
            gr.current = !0, (Q = Et.current) == null || Q.call(Et, ko);
          } else
            Ut && console.error("Error getting user data:", Ut);
        }
        Oo(!0);
      } catch (Ge) {
        console.error("Error checking session:", Ge), gt(), K();
      } finally {
        Io(!1);
      }
    })();
  }, [K]), wt(() => {
    v && An(br, K);
  }, [v, br]), Ro)
    return /* @__PURE__ */ e(wr, { theme: ze, children: /* @__PURE__ */ u(
      pe,
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
          /* @__PURE__ */ e(
            Po,
            {
              size: 60,
              thickness: 4,
              sx: { color: ar }
            }
          ),
          /* @__PURE__ */ e(pe, { sx: { mt: 2, color: "text.secondary" }, children: "Checking session..." })
        ]
      }
    ) });
  if (!Co)
    return null;
  const ut = w ?? (F ? /* @__PURE__ */ e(F, { ...A }) : null), To = (O) => {
    Je(!1), Mt(!1), pr({ open: !0, tab: O });
  }, Pt = C && (() => To("notifications")), Ao = Ie + le, Er = {
    avatarColor: Pe,
    menuItems: R,
    showNotifications: be,
    notificationCount: Ie,
    whatsNewCount: le,
    onNotificationsClick: Pt,
    showProfile: $,
    userName: E,
    userRole: ee,
    userAvatar: te,
    showSettings: N,
    onSettingsClick: W,
    showThemeToggler: ce,
    theme: oe,
    onThemeToggle: de,
    onLogout: Sr
  }, $t = (O) => /* @__PURE__ */ e(
    ii,
    {
      ...Er,
      compact: O,
      color: Be,
      hoverColor: lt
    }
  ), yr = dt ? [hi() ? "⌘" : "Ctrl", dt.toUpperCase()] : void 0, Do = (O) => ye && ke === "sidebar" ? /* @__PURE__ */ e(
    Wr,
    {
      variant: O ? "sidebar-icon" : "sidebar",
      onClick: ue,
      active: a,
      busy: T,
      shortcutKeys: yr,
      accentColor: Be
    }
  ) : null, No = (O) => ut ? /* @__PURE__ */ e(
    si,
    {
      search: ut,
      mode: O,
      onExpand: () => {
        Bt(!1), cr(!0);
      },
      autoFocus: yo,
      onAutoFocused: vo,
      color: Be,
      hoverColor: lt
    }
  ) : null, yt = (O) => {
    const Q = Do(O !== "full"), Ge = No(O);
    return Q || Ge ? /* @__PURE__ */ u(
      Ko,
      {
        spacing: 1.5,
        sx: { alignItems: O === "full" ? "stretch" : "center" },
        children: [
          Q,
          Ge
        ]
      }
    ) : void 0;
  }, Wo = pi(
    g,
    _e
  );
  return /* @__PURE__ */ e(wr, { theme: ze, children: /* @__PURE__ */ u(
    pe,
    {
      sx: {
        display: "flex",
        minHeight: "100vh",
        ...Ve
      },
      children: [
        /* @__PURE__ */ e($o, {}),
        k && /* @__PURE__ */ e(
          Vn,
          {
            height: Vt,
            onMenuClick: i && !ie ? () => Je(!0) : void 0,
            appName: n,
            logo: zt,
            onBrandClick: p,
            background: bt,
            color: ct,
            brandColor: St,
            endContent: be ? /* @__PURE__ */ e(
              ir,
              {
                count: Ao,
                onClick: Pt,
                color: ct,
                hoverColor: lt,
                tooltipPlacement: "bottom",
                testId: "mobile-notifications"
              }
            ) : void 0
          }
        ),
        i && !k && sr && /* @__PURE__ */ u(
          pe,
          {
            component: "aside",
            sx: {
              width: he,
              minWidth: he,
              flexShrink: 0,
              zIndex: 2,
              position: "sticky",
              top: 0,
              alignSelf: "flex-start",
              height: "100vh",
              // Flex column so the sidebar shrinks to fit siblings
              // (the alert card) instead of pushing them off-screen.
              display: "flex",
              flexDirection: "column",
              // Keep the strip behind any bottom sibling on-brand.
              bgcolor: qe ? Ue : void 0,
              borderRight: "1px solid",
              borderColor: "divider",
              transition: Jt,
              ...Z
            },
            children: [
              /* @__PURE__ */ e(
                er,
                {
                  mainLinks: r,
                  secondaryLinks: o,
                  activePath: L,
                  onLinkClick: j,
                  showHeaderBar: qe,
                  logo: zt,
                  title: n,
                  onBrandClick: p,
                  brandColor: St,
                  headerBackgroundColor: qe ? bt : void 0,
                  headerForegroundColor: qe ? ct : void 0,
                  activeAccentColor: Pe,
                  groupAccentColor: M,
                  activeForegroundColor: D,
                  foregroundColor: H,
                  surfaceBackgroundColor: Ue,
                  collapsed: $e ? !0 : Ke,
                  onCollapsedChange: $e ? void 0 : Bt,
                  showLabels: $e,
                  expandedWidth: Yt,
                  collapsedWidth: $e ? $r : qt,
                  topContent: yt(
                    $e ? "popover" : Ke ? "expand" : "full"
                  ),
                  footer: $t(
                    $e || Ke
                  )
                }
              ),
              qe && (_ == null ? void 0 : _.show) && !Ke && /* @__PURE__ */ e(Ct, { ..._ })
            ]
          }
        ),
        bo && /* @__PURE__ */ u(
          pe,
          {
            component: "aside",
            sx: {
              width: he,
              minWidth: he,
              flexShrink: 0,
              zIndex: 2,
              position: "sticky",
              top: 0,
              alignSelf: "flex-start",
              height: "100vh",
              display: "flex",
              flexDirection: "column",
              bgcolor: Ue,
              borderRight: "1px solid",
              borderColor: "divider",
              transition: Jt,
              ...Z
            },
            children: [
              /* @__PURE__ */ e(
                ni,
                {
                  mainLinks: r,
                  secondaryLinks: o,
                  activePath: L,
                  onLinkClick: j,
                  logo: zt,
                  title: n,
                  onBrandClick: p,
                  brandColor: St,
                  headerBackgroundColor: bt,
                  headerForegroundColor: ct,
                  activeAccentColor: Pe,
                  groupAccentColor: M,
                  activeForegroundColor: D,
                  foregroundColor: H,
                  surfaceBackgroundColor: Ue,
                  collapsed: Ke,
                  onCollapsedChange: Bt,
                  expandedWidth: Yt,
                  collapsedWidth: qt,
                  topContent: yt(
                    Ke ? "expand" : "full"
                  ),
                  color: Be,
                  hoverColor: lt,
                  avatarColor: Pe,
                  showProfile: $,
                  userName: E,
                  userEmail: I,
                  userRole: ee,
                  userAvatar: te,
                  showNotifications: be,
                  notificationCount: Ie,
                  onNotificationsClick: wo ? Pt : Ae,
                  whatsNewCount: le,
                  onProfileClick: re,
                  showSettings: N,
                  onSettingsClick: W,
                  settingsSections: ge,
                  onSettingsItemClick: Y,
                  platforms: X,
                  currentPlatformKey: Fe,
                  onPlatformSelect: q,
                  onLogout: Sr,
                  theme: oe,
                  showThemeToggler: ce,
                  onThemeToggle: de
                }
              ),
              (_ == null ? void 0 : _.show) && !Ke && /* @__PURE__ */ e(Ct, { ..._ })
            ]
          }
        ),
        i && !k && !sr && !kt && /* @__PURE__ */ e(
          Ir,
          {
            variant: "permanent",
            sx: {
              width: he,
              flexShrink: 0,
              zIndex: 2,
              "& .MuiDrawer-paper": {
                width: he,
                boxSizing: "border-box",
                bgcolor: Wt,
                borderRight: "none"
              },
              ...Z
            },
            children: /* @__PURE__ */ u(
              pe,
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
                  /* @__PURE__ */ e(
                    pe,
                    {
                      sx: {
                        display: "flex",
                        justifyContent: "center",
                        mb: 1.5
                      },
                      children: /* @__PURE__ */ e(
                        Tt,
                        {
                          logo: So,
                          appName: n,
                          onClick: p,
                          color: f ?? Be,
                          testId: "sidebar-header-brand"
                        }
                      )
                    }
                  ),
                  yt("popover"),
                  /* @__PURE__ */ u(
                    pe,
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
                        /* @__PURE__ */ e(
                          $n,
                          {
                            mainLinks: r,
                            secondaryLinks: o,
                            activePath: L,
                            onLinkClick: j,
                            accentColor: Pe,
                            surfaceBackgroundColor: Wt,
                            railShowTitles: h
                          }
                        ),
                        (_ == null ? void 0 : _.show) && /* @__PURE__ */ e(Ct, { ..._ })
                      ]
                    }
                  ),
                  /* @__PURE__ */ e(pe, { sx: { py: 1.5 }, children: $t(!0) })
                ]
              }
            )
          }
        ),
        i && k && /* @__PURE__ */ u(
          Uo,
          {
            anchor: ie ? "bottom" : "left",
            open: dr,
            onOpen: () => Je(!0),
            onClose: () => Je(!1),
            disableSwipeToOpen: !0,
            sx: { zIndex: (O) => O.zIndex.drawer + 1 },
            slotProps: {
              paper: {
                "aria-label": "Navigation",
                sx: {
                  bgcolor: Ue,
                  backgroundImage: "none",
                  ...ie ? {
                    maxHeight: "min(80vh, 640px)",
                    borderTopLeftRadius: "16px",
                    borderTopRightRadius: "16px",
                    pb: "env(safe-area-inset-bottom, 0px)"
                  } : { maxWidth: "85vw" }
                }
              }
            },
            children: [
              ie && // Grab handle: the sheet can be swiped down to close
              /* @__PURE__ */ e(
                pe,
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
              /* @__PURE__ */ e(
                er,
                {
                  mainLinks: r,
                  secondaryLinks: o,
                  activePath: L,
                  onLinkClick: (O) => {
                    j == null || j(O), Je(!1);
                  },
                  onLinkAction: () => Je(!1),
                  collapsed: !1,
                  expandedWidth: ie ? "100%" : ci,
                  activeAccentColor: Pe,
                  groupAccentColor: M,
                  activeForegroundColor: D,
                  foregroundColor: H,
                  surfaceBackgroundColor: Ue,
                  topInsetPx: ie ? 8 : 0,
                  topContent: ie ? void 0 : yt("full"),
                  footer: ie ? void 0 : $t(!1)
                }
              ),
              (_ == null ? void 0 : _.show) && /* @__PURE__ */ e(Ct, { ..._ })
            ]
          }
        ),
        ie && ut && /* @__PURE__ */ e(
          Xn,
          {
            open: ur,
            onClose: () => Mt(!1),
            search: ut
          }
        ),
        ie && /* @__PURE__ */ e(
          jn,
          {
            ...Er,
            pinnedLinks: c,
            activePath: L,
            onLinkClick: j,
            onMenuClick: i ? () => Je(!0) : void 0,
            menuOpen: dr,
            onSearchClick: ut ? () => Mt(!0) : void 0,
            searchOpen: ur,
            showAssistant: ye,
            onAssistantClick: ue,
            assistantActive: a,
            showProfile: $,
            background: Ue,
            color: Be,
            activeColor: Pe,
            activeBackground: lt
          }
        ),
        /* @__PURE__ */ e(
          pe,
          {
            component: "main",
            sx: {
              flexGrow: 1,
              "--lumora-content-padding": Wo,
              // Where sticky page elements should pin (below the mobile bar)
              "--lumora-sticky-top": k ? `${Vt}px` : "0px",
              p: "var(--lumora-content-padding)",
              width: he ? `calc(100% - ${he}px)` : "100%",
              transition: Jt,
              mt: k ? `${Vt}px` : 0,
              // Keep the last content clear of the bottom bar
              ...ie && {
                pb: `calc(var(--lumora-content-padding) + ${hr})`
              },
              backgroundColor: Wt,
              ...He
            },
            children: t
          }
        ),
        ne && /* @__PURE__ */ e(
          kn,
          {
            open: mr,
            variant: xr,
            position: We,
            width: Ee,
            sidebarWidthPx: he,
            bottomOffsetPx: ye && ke === "floating" ? di : 0,
            fullScreen: k,
            fullScreenBottom: ie ? hr : "0px",
            onClose: Oe,
            children: /* @__PURE__ */ e(ne, {})
          }
        ),
        ye && ke === "floating" && !ie && /* @__PURE__ */ e(
          Wr,
          {
            variant: "floating",
            rightOffsetPx: _o,
            shortcutKeys: yr,
            onClick: ue,
            active: a,
            busy: T
          }
        ),
        be && C && /* @__PURE__ */ e(
          Ir,
          {
            anchor: "right",
            open: Lt.open,
            onClose: fr,
            slotProps: {
              paper: { sx: { width: 380, maxWidth: "100vw" } }
            },
            children: /* @__PURE__ */ e(
              C,
              {
                onClose: fr,
                initialTab: Lt.tab
              },
              Lt.tab
            )
          }
        )
      ]
    }
  ) });
};
export {
  P as AUTH_ERROR_CODES,
  B as AuthError,
  er as CollapsibleSidebar,
  pa as FullBleedSection,
  Rn as Kbd,
  ma as LumoraWrapper,
  gt as clearAuthTokens,
  ma as default,
  fa as getAuthErrorMessage,
  xt as getAuthTokens,
  On as getCurrentUser,
  Tn as getDesignTokens,
  Cn as isAuthenticated,
  rr as logAuthError,
  ao as storeAuthTokens
};
