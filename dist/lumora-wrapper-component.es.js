import { jsx as e, jsxs as d, Fragment as at } from "react/jsx-runtime";
import Bo from "@mui/icons-material/KeyboardArrowDownRounded";
import Mo from "@mui/icons-material/KeyboardArrowUpRounded";
import Qt from "@mui/icons-material/ChevronRightRounded";
import Lo from "@mui/icons-material/ViewSidebarOutlined";
import x from "@mui/material/Box";
import Cr from "@mui/material/Collapse";
import We from "@mui/material/Divider";
import Te from "@mui/material/IconButton";
import yt from "@mui/material/ListItemButton";
import Y from "@mui/material/ListItemIcon";
import Fe from "@mui/material/ListItemText";
import ue from "@mui/material/Stack";
import Re from "@mui/material/Tooltip";
import N from "@mui/material/Typography";
import { useTheme as Dt, createTheme as Yr, alpha as Xe, ThemeProvider as Or } from "@mui/material/styles";
import * as m from "react";
import { useMemo as _r, useState as Qe, useCallback as Fo, useRef as Gt, useEffect as vt } from "react";
import st from "@mui/material/ButtonBase";
import { useTheme as Po, useMediaQuery as Ho, Box as we, CircularProgress as $o, CssBaseline as Uo, Drawer as Tr, SwipeableDrawer as Ko, Stack as Go } from "@mui/material";
import Ar from "axios";
import jo from "@mui/material/Card";
import Xo from "@mui/material/CardContent";
import qr from "@mui/material/Button";
import Vo from "@mui/icons-material/AutoAwesomeRounded";
import Yo from "@mui/material/Grow";
import nr from "@mui/material/Paper";
import qo from "@mui/material/Slide";
import Jo from "@mui/material/ListSubheader";
import oe from "@mui/material/MenuItem";
import Nt from "@mui/material/MenuList";
import Zo from "@mui/material/Popper";
import Jr from "@mui/icons-material/MenuRounded";
import Zr from "@mui/icons-material/SearchRounded";
import Qr from "@mui/icons-material/LogoutRounded";
import eo from "@mui/icons-material/NotificationsNoneOutlined";
import to from "@mui/icons-material/SettingsOutlined";
import Qo from "@mui/material/Avatar";
import en from "@mui/material/Menu";
import Dr from "@mui/material/ToggleButton";
import tn from "@mui/material/ToggleButtonGroup";
import rn from "@mui/material/Drawer";
import on from "@mui/material/AppBar";
import nn from "@mui/material/Toolbar";
import ro from "@mui/material/Badge";
import an from "@mui/icons-material/AutoAwesomeOutlined";
import sn from "@mui/icons-material/DarkModeOutlined";
import ln from "@mui/icons-material/LayersOutlined";
import cn from "@mui/icons-material/LightModeOutlined";
import dn from "@mui/icons-material/NotificationsOutlined";
import un from "@mui/icons-material/PersonOutlineRounded";
import hn from "@mui/icons-material/SettingsBrightnessOutlined";
import fn from "@mui/icons-material/SupportAgentOutlined";
import oo from "@mui/material/Popover";
import pn from "@mui/icons-material/ArrowOutwardRounded";
import mn from "@mui/icons-material/CheckRounded";
import xn from "@mui/icons-material/ShieldOutlined";
import gn from "@mui/icons-material/ExpandMoreRounded";
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
  }, l = /* @__PURE__ */ d(at, { children: [
    r ? /* @__PURE__ */ e(
      N,
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
    st,
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
  ) : /* @__PURE__ */ e(ue, { direction: "row", "data-testid": h, sx: s, children: l });
}, mt = (t) => {
  var r;
  return !!((r = t.subitems) != null && r.length);
}, Ot = (t, r) => t ? `${t}/${r.text}` : r.text, et = (t, r) => {
  var o;
  return r ? t.path && r === t.path ? !0 : ((o = t.subitems) == null ? void 0 : o.some((n) => et(n, r))) ?? !1 : !1;
}, je = (t, r) => !!(r && t.path === r), no = (t, r) => (t ?? []).flatMap((o) => {
  const n = o.icon ?? r;
  return mt(o) ? no(o.subitems, n) : o.path ? [{ sub: o, icon: n }] : [];
}), er = (t) => {
  const r = io(t);
  if (!r)
    return "#ffffff";
  const [o, n, i] = r.map((s) => {
    const l = s / 255;
    return l <= 0.03928 ? l / 12.92 : ((l + 0.055) / 1.055) ** 2.4;
  });
  return 0.2126 * o + 0.7152 * n + 0.0722 * i > 0.5 ? "#0b1f1c" : "#ffffff";
}, At = (t) => {
  const r = io(t);
  if (!r)
    return "rgba(1, 88, 79, 0.12)";
  const [o, n, i] = r;
  return `rgba(${o}, ${n}, ${i}, 0.14)`;
}, io = (t) => {
  let r = t.trim().replace(/^#/, "");
  if (r.length === 3 && (r = r.split("").map((n) => n + n).join("")), r.length !== 6 || /[^0-9a-fA-F]/.test(r))
    return null;
  const o = parseInt(r, 16);
  return [o >> 16 & 255, o >> 8 & 255, o & 255];
}, ao = () => typeof window < "u" && !!window.localStorage, so = (t) => {
  if (!ao())
    return null;
  try {
    const r = window.localStorage.getItem(t);
    return r === null ? null : r === "true";
  } catch (r) {
    return console.warn("Failed to read sidebar collapsed state:", r), null;
  }
}, lo = (t, r) => {
  if (ao())
    try {
      window.localStorage.setItem(t, r ? "true" : "false");
    } catch (o) {
      console.warn("Failed to persist sidebar collapsed state:", o);
    }
}, bn = (t) => {
  typeof window > "u" || window.open(t, "_blank", "noopener,noreferrer");
}, Sn = 264, En = 72, wn = "lumora:sidebar-collapsed", yn = "width 200ms ease", Nr = 64, Rt = {
  "&:focus, &:focus-visible": { outline: "none" }
}, vn = 16, Rn = 14, In = 4, Cn = 2.5, Wr = "0.7rem", kr = 22, tt = ({ text: t, variant: r = "body1", center: o = !1, fontSize: n, fontWeight: i }) => {
  const h = m.useRef(null), [s, l] = m.useState(!1), c = m.useCallback(() => {
    const u = h.current;
    u && l(u.scrollWidth > u.clientWidth + 0.5);
  }, []);
  return m.useLayoutEffect(() => {
    c();
  }, [c, t]), m.useEffect(() => {
    const u = h.current;
    if (!u)
      return;
    const f = new ResizeObserver(() => c());
    return f.observe(u), () => f.disconnect();
  }, [c]), /* @__PURE__ */ e(
    Re,
    {
      title: t,
      placement: "right",
      arrow: !0,
      enterDelay: 400,
      disableHoverListener: !s,
      disableFocusListener: !s,
      disableTouchListener: !s,
      children: /* @__PURE__ */ e(
        N,
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
}, On = ({
  open: t,
  size: r = vn
}) => t ? /* @__PURE__ */ e(Mo, { sx: { fontSize: r, opacity: 0.75 } }) : /* @__PURE__ */ e(Bo, { sx: { fontSize: r, opacity: 0.75 } }), zr = ({ open: t }) => /* @__PURE__ */ e(
  Qt,
  {
    sx: {
      fontSize: 20,
      opacity: 0.75,
      transition: "transform 150ms ease",
      transform: t ? "rotate(90deg)" : "none"
    }
  }
), _n = () => /* @__PURE__ */ e(Lo, { sx: { transform: "scaleX(-1)" } }), It = 600, tr = ({
  mainLinks: t,
  secondaryLinks: r = [],
  activePath: o,
  onLinkClick: n,
  onLinkAction: i,
  logo: h,
  title: s,
  onBrandClick: l,
  showHeaderBar: c = !1,
  headerBackgroundColor: u,
  headerForegroundColor: f,
  brandColor: y,
  activeAccentColor: p = "#01584f",
  groupAccentColor: b,
  activeForegroundColor: I,
  foregroundColor: g,
  surfaceBackgroundColor: C,
  collapsed: W,
  defaultCollapsed: B = !1,
  onCollapsedChange: v,
  persistKey: M = wn,
  expandedWidth: K = Sn,
  collapsedWidth: L = En,
  showLabels: S = !1,
  topInsetPx: Z = 0,
  topContent: Q,
  footer: _
}) => {
  const F = Dt(), A = F.palette.mode === "dark", k = W !== void 0, [he, Ae] = m.useState(
    () => so(M) ?? B
  ), U = k ? !!W : he, [Ve, fe] = m.useState(
    {}
  ), P = I ?? er(p), ne = {
    bgcolor: p,
    color: P,
    "& .MuiListItemIcon-root": { color: P }
  }, ke = {
    bgcolor: p,
    color: P,
    borderRadius: "8px"
  }, ie = b ?? At(p), Pe = C ?? (A ? F.palette.background.paper : "#ffffff"), ae = g ?? (A ? "text.primary" : p), j = u ?? Pe, pe = f ?? (u ? er(j) : g ?? (A ? F.palette.text.primary : p)), Ie = At(pe), O = (a) => {
    n == null || n(a);
  }, Ye = () => {
    const a = !U;
    k || (Ae(a), lo(M, a)), v == null || v(a);
  }, q = (a, w) => {
    fe((D) => ({ ...D, [a]: !w }));
  }, De = (a, w) => Ve[w] ?? et(a, o), ee = (a, w, D) => ({
    color: a ? P : ae,
    bgcolor: a ? p : "transparent",
    "& .MuiListItemIcon-root": {
      color: a ? P : ae,
      minWidth: D
    },
    "&:hover": a || S ? ne : { bgcolor: w }
  }), Ne = {
    "&.Mui-selected": {
      bgcolor: p
    },
    "&.Mui-selected:hover": ne
  }, se = (a) => {
    const w = je(a, o), D = /* @__PURE__ */ d(
      yt,
      {
        disabled: !a.path,
        selected: w,
        onClick: () => a.path && O(a.path),
        "data-testid": `sidebar-item-${a.text}`,
        "data-active": w ? "true" : "false",
        sx: {
          borderRadius: "8px",
          py: 1.25,
          px: 1.5,
          // Room for the action button laid over the row's end
          ...a.action && { pr: 6 },
          ...ee(w, ie, 36),
          ...Ne
        },
        children: [
          /* @__PURE__ */ e(Y, { children: a.icon }),
          /* @__PURE__ */ e(
            Fe,
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
      return D;
    const { action: R } = a;
    return /* @__PURE__ */ d(x, { sx: { position: "relative" }, children: [
      D,
      /* @__PURE__ */ e(Re, { title: R.label, placement: "right", arrow: !0, children: /* @__PURE__ */ e(
        Te,
        {
          "aria-label": R.label,
          "data-testid": `sidebar-action-${a.text}`,
          onClick: () => {
            R.onClick(), i == null || i();
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
            borderColor: w ? "rgba(255, 255, 255, 0.35)" : ie,
            color: w ? P : ae,
            "&:hover": {
              bgcolor: w ? "rgba(255, 255, 255, 0.15)" : ie
            },
            "& .MuiSvgIcon-root": { fontSize: 18 },
            // No lingering outline after a click; a clear ring for keyboard focus
            "&:focus:not(.Mui-focusVisible)": {
              outline: "none"
            },
            "&.Mui-focusVisible": {
              outline: "2px solid",
              outlineColor: w ? P : ae,
              outlineOffset: 1
            }
          },
          children: R.icon
        }
      ) })
    ] }, a.text);
  }, qe = (a) => {
    const w = et(a, o), D = je(a, o), R = Ot("", a), H = De(a, R);
    return /* @__PURE__ */ d(
      x,
      {
        "data-testid": `sidebar-group-${a.text}`,
        sx: {
          borderRadius: "8px",
          bgcolor: w ? ie : "transparent"
        },
        children: [
          /* @__PURE__ */ d(
            yt,
            {
              onClick: () => q(R, H),
              "data-testid": `sidebar-item-${a.text}`,
              "data-active": D ? "true" : "false",
              "aria-expanded": H,
              sx: {
                borderRadius: "8px",
                py: 1.25,
                px: 1.5,
                ...ee(D, ie, 36)
              },
              children: [
                /* @__PURE__ */ e(Y, { children: a.icon }),
                /* @__PURE__ */ e(
                  Fe,
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
                /* @__PURE__ */ e(zr, { open: H })
              ]
            }
          ),
          /* @__PURE__ */ e(Cr, { in: H, timeout: "auto", unmountOnExit: !0, children: /* @__PURE__ */ e(
            x,
            {
              "data-testid": `sidebar-children-${a.text}`,
              sx: { pb: 0.5 },
              children: a.subitems.map(
                (V) => le(V, R, 1)
              )
            }
          ) })
        ]
      },
      a.text
    );
  }, le = (a, w, D) => {
    const R = Ot(w, a), H = In + (D - 1) * Cn;
    if (mt(a)) {
      const Se = et(a, o), te = je(a, o), Be = De(a, R);
      return /* @__PURE__ */ d(x, { "data-testid": `sidebar-group-${a.text}`, children: [
        /* @__PURE__ */ d(
          yt,
          {
            onClick: () => q(R, Be),
            "data-testid": `sidebar-subitem-${a.text}`,
            "data-active": Se ? "true" : "false",
            "aria-expanded": Be,
            sx: {
              borderRadius: "8px",
              mx: 0.5,
              py: 0.75,
              pl: H,
              ...ee(te, "action.hover", 32)
            },
            children: [
              a.icon ? /* @__PURE__ */ e(Y, { children: a.icon }) : null,
              /* @__PURE__ */ e(
                Fe,
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
              /* @__PURE__ */ e(zr, { open: Be })
            ]
          }
        ),
        /* @__PURE__ */ e(Cr, { in: Be, timeout: "auto", unmountOnExit: !0, children: /* @__PURE__ */ e(x, { "data-testid": `sidebar-children-${a.text}`, children: a.subitems.map(
          (ce) => le(ce, R, D + 1)
        ) }) })
      ] }, R);
    }
    const V = je(a, o);
    return /* @__PURE__ */ d(
      yt,
      {
        selected: V,
        disabled: !a.path,
        onClick: () => a.path && O(a.path),
        "data-testid": `sidebar-subitem-${a.text}`,
        "data-active": V ? "true" : "false",
        sx: {
          borderRadius: "8px",
          mx: 0.5,
          py: 0.75,
          pl: H,
          ...ee(V, "action.hover", 32),
          ...Ne
        },
        children: [
          a.icon ? /* @__PURE__ */ e(Y, { children: a.icon }) : null,
          /* @__PURE__ */ e(
            Fe,
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
      R
    );
  }, Ce = (a, w, D, R, H, V) => {
    const Se = !H, te = /* @__PURE__ */ d(
      Te,
      {
        "aria-label": w,
        disabled: Se,
        onClick: H,
        "data-testid": (V == null ? void 0 : V.testId) ?? `sidebar-item-${w}`,
        "data-active": R ? "true" : "false",
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
          color: R ? P : ae,
          bgcolor: R ? p : "transparent",
          "& .MuiSvgIcon-root": {
            fontSize: kr
          },
          "&:hover": ke,
          ...Rt
        } : {
          // Icon-only collapsed rail (collapsible variant):
          // original hover — accent when active, else a subtle
          // tint; no foreground change.
          width: 44,
          height: 44,
          color: R ? P : ae,
          bgcolor: R ? p : "transparent",
          borderRadius: R ? "8px" : "50%",
          "&:hover": {
            bgcolor: R ? p : V != null && V.insideGroup ? "action.hover" : ie,
            borderRadius: "8px"
          },
          ...Rt
        },
        children: [
          D,
          S ? /* @__PURE__ */ e(
            tt,
            {
              text: w,
              variant: "caption",
              center: !0,
              fontSize: Wr
            }
          ) : null
        ]
      }
    );
    return S ? Se ? /* @__PURE__ */ e("span", { children: te }, a) : /* @__PURE__ */ e(m.Fragment, { children: te }, a) : /* @__PURE__ */ e(Re, { title: w, placement: "right", arrow: !0, children: Se ? /* @__PURE__ */ e("span", { children: te }) : te }, a);
  }, G = (a) => {
    const w = et(a, o), D = je(a, o), R = Ot("", a), H = De(a, R), V = /* @__PURE__ */ d(
      Te,
      {
        "aria-label": a.text,
        "aria-expanded": H,
        onClick: () => q(R, H),
        "data-testid": `sidebar-item-${a.text}`,
        "data-active": D ? "true" : "false",
        sx: {
          display: "flex",
          flexDirection: "column",
          gap: S ? 0.25 : 0,
          width: S ? "100%" : 44,
          maxWidth: "100%",
          // 8px padding on all sides of the labeled item container.
          ...S ? { p: 1 } : { py: 0.75 },
          borderRadius: "10px",
          color: D ? P : ae,
          bgcolor: D ? p : "transparent",
          // rail-labeled: active AND hover share the highlight. collapsible:
          // original behavior — accent only when active; the outer pill
          // supplies the idle-hover tint, so the button stays transparent.
          "&:hover": S ? { bgcolor: p, color: P } : {
            bgcolor: D ? p : "transparent"
          },
          ...Rt
        },
        children: [
          S ? /* @__PURE__ */ e(
            x,
            {
              sx: {
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                "& .MuiSvgIcon-root": {
                  fontSize: kr
                }
              },
              children: a.icon
            }
          ) : a.icon,
          S ? /* @__PURE__ */ e(
            tt,
            {
              text: a.text,
              variant: "caption",
              center: !0,
              fontSize: Wr
            }
          ) : null,
          /* @__PURE__ */ e(On, { open: H, size: Rn })
        ]
      }
    ), Se = S ? V : /* @__PURE__ */ e(Re, { title: a.text, placement: "right", arrow: !0, children: V });
    return /* @__PURE__ */ d(
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
          bgcolor: w ? ie : "transparent",
          ...S ? {} : { "&:hover": { bgcolor: ie } }
        },
        children: [
          Se,
          H ? no(a.subitems, a.icon).map(
            ({ sub: te, icon: Be }) => Ce(
              te.path,
              te.text,
              Be,
              je(te, o),
              () => O(te.path),
              {
                insideGroup: !0,
                testId: `sidebar-subitem-${te.text}`
              }
            )
          ) : null
        ]
      },
      a.text
    );
  }, me = (a) => /* @__PURE__ */ e(
    x,
    {
      sx: {
        width: "100%",
        display: "flex",
        justifyContent: "center"
      },
      children: Ce(
        a.text,
        a.text,
        a.icon,
        je(a, o),
        a.path ? () => O(a.path) : void 0
      )
    },
    a.text
  ), xe = (a) => mt(a) ? U ? G(a) : qe(a) : U ? me(a) : se(a), Oe = (a) => /* @__PURE__ */ e(
    ue,
    {
      spacing: 0.5,
      sx: {
        width: "100%",
        alignItems: U ? "center" : "stretch"
      },
      children: a.map(xe)
    }
  ), ge = U ? L : K, E = U ? "Expand sidebar" : "Collapse sidebar", X = c ? /* @__PURE__ */ d(
    x,
    {
      "data-testid": "sidebar-header",
      sx: {
        minHeight: Nr,
        flexShrink: 0,
        display: "flex",
        alignItems: "center",
        bgcolor: j,
        ...U ? {
          // Toggle on top, the brand logo (its own link) below it
          flexDirection: "column",
          justifyContent: "center",
          gap: 1,
          py: 1.5
        } : {
          height: Nr,
          gap: 1.5,
          // Lines the toggle glyph up with the row icons below
          // (12px panel padding + 12px row padding = 24px, minus
          // the button's own 8px)
          px: 2
        }
      },
      children: [
        /* @__PURE__ */ e(Re, { title: E, placement: "right", arrow: !0, children: /* @__PURE__ */ e(
          Te,
          {
            "aria-label": E,
            "aria-expanded": !U,
            onClick: Ye,
            "data-testid": "sidebar-collapse-toggle",
            disableFocusRipple: !0,
            sx: { color: pe, ...Rt },
            children: /* @__PURE__ */ e(_n, {})
          }
        ) }),
        h || s ? /* @__PURE__ */ e(
          Tt,
          {
            logo: h,
            title: U ? void 0 : s,
            appName: s || "App",
            onClick: l,
            color: y ?? pe,
            testId: "sidebar-header-brand"
          }
        ) : null
      ]
    }
  ) : null, be = !c && h ? /* @__PURE__ */ e(
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
          color: y ?? pe,
          testId: "sidebar-header-brand"
        }
      )
    }
  ) : null, ze = S ? 0.5 : U ? 1 : 1.5;
  return /* @__PURE__ */ d(
    x,
    {
      component: "nav",
      "aria-label": "Main sidebar",
      "data-testid": "collapsible-sidebar",
      "data-collapsed": U ? "true" : "false",
      "data-labeled": S ? "true" : "false",
      sx: {
        width: ge,
        minWidth: ge,
        height: "100%",
        boxSizing: "border-box",
        bgcolor: Pe,
        display: "flex",
        flexDirection: "column",
        // Lets the sidebar shrink inside a flex-column host so siblings
        // (e.g. an alert card below it) stay within the viewport.
        flex: "1 1 auto",
        minHeight: 0,
        overflow: "hidden",
        transition: yn
      },
      children: [
        X ?? be,
        Q ? /* @__PURE__ */ e(
          x,
          {
            sx: { flexShrink: 0, px: ze, pt: 1, pb: 1 },
            children: Q
          }
        ) : null,
        /* @__PURE__ */ d(
          x,
          {
            sx: {
              flex: "1 1 auto",
              minHeight: 0,
              display: "flex",
              flexDirection: "column",
              overflowY: "auto",
              overflowX: "hidden",
              px: ze,
              pt: Z && !c ? `${Z}px` : 1,
              pb: 2
            },
            children: [
              Oe(t),
              r.length > 0 ? /* @__PURE__ */ d(x, { sx: { mt: "auto", pt: 2 }, children: [
                _ ? null : /* @__PURE__ */ e(We, { sx: { mb: 1, borderColor: "divider" } }),
                Oe(r)
              ] }) : null
            ]
          }
        ),
        _ ? /* @__PURE__ */ e(x, { sx: { flexShrink: 0, px: ze, pb: 1.5 }, children: /* @__PURE__ */ e(
          x,
          {
            sx: {
              borderTop: `1px solid ${Ie}`,
              pt: 1.5
            },
            children: _
          }
        ) }) : null
      ]
    }
  );
}, rr = "var(--lumora-content-padding, 0px)", Br = `calc(${rr} * -1)`, va = ({
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
        mx: Br,
        mt: r ? Br : 0,
        // Space below it, like any other block on the page
        mb: rr,
        px: h ? rr : 0,
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
), Tn = ({ keys: t }) => /* @__PURE__ */ e(
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
class z extends Error {
  constructor(r, o, n = null) {
    super(r), this.name = "AuthError", this.code = o, this.originalError = n, this.timestamp = (/* @__PURE__ */ new Date()).toISOString();
  }
}
const $ = {
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
}, Le = {
  ACCESS_TOKEN: "accessToken",
  REFRESH_TOKEN: "refreshToken",
  USER: "user"
}, An = () => {
  if (!(typeof window > "u" || !window.localStorage))
    try {
      const t = localStorage.getItem(
        Le.ACCESS_TOKEN
      ), r = localStorage.getItem(
        Le.REFRESH_TOKEN
      ), o = localStorage.getItem(Le.USER);
      t && !localStorage.getItem(J.ACCESS_TOKEN) && localStorage.setItem(J.ACCESS_TOKEN, t), r && !localStorage.getItem(J.REFRESH_TOKEN) && localStorage.setItem(
        J.REFRESH_TOKEN,
        r
      ), o && !localStorage.getItem(J.USER) && localStorage.setItem(J.USER, o), (t || r || o) && (localStorage.removeItem(Le.ACCESS_TOKEN), localStorage.removeItem(Le.REFRESH_TOKEN), localStorage.removeItem(Le.USER));
    } catch (t) {
      console.warn("Failed to migrate legacy localStorage keys:", t);
    }
}, jt = (t) => {
  try {
    if (typeof window > "u")
      return console.warn("localStorage access attempted on server side"), null;
    if (!window.localStorage)
      throw new z(
        "localStorage is not available",
        $.STORAGE_ACCESS_DENIED
      );
    return window.localStorage.getItem(t);
  } catch (r) {
    throw r.name === "QuotaExceededError" ? (console.error("Storage quota exceeded"), new z(
      "Storage quota exceeded. Please clear browser data.",
      $.STORAGE_ACCESS_DENIED,
      r
    )) : r.name === "SecurityError" ? (console.error(
      "localStorage access denied (private browsing or security settings)"
    ), new z(
      "Access to localStorage is denied. Please check browser settings.",
      $.STORAGE_ACCESS_DENIED,
      r
    )) : (console.error(
      "Unexpected error accessing localStorage:",
      r.name
    ), new z(
      "Failed to access storage",
      $.STORAGE_ACCESS_DENIED,
      r
    ));
  }
}, Xt = (t, r) => {
  try {
    if (typeof window > "u")
      return console.warn("localStorage write attempted on server side"), !1;
    if (!window.localStorage)
      throw new z(
        "localStorage is not available",
        $.STORAGE_ACCESS_DENIED
      );
    return window.localStorage.setItem(t, r), !0;
  } catch (o) {
    throw o.name === "QuotaExceededError" ? (console.error("Storage quota exceeded"), new z(
      "Storage quota exceeded. Please clear browser data.",
      $.STORAGE_ACCESS_DENIED,
      o
    )) : o.name === "SecurityError" ? (console.error(
      "localStorage write denied (private browsing or security settings)"
    ), new z(
      "Access to localStorage is denied. Please check browser settings.",
      $.STORAGE_ACCESS_DENIED,
      o
    )) : (console.error(
      "Unexpected error writing to localStorage:",
      o.name
    ), new z(
      "Failed to write to storage",
      $.STORAGE_ACCESS_DENIED,
      o
    ));
  }
}, co = (t) => {
  try {
    return typeof window > "u" ? (console.warn("localStorage removal attempted on server side"), !1) : window.localStorage ? (window.localStorage.removeItem(t), !0) : (console.warn("localStorage is not available"), !1);
  } catch (r) {
    return r.name !== "SecurityError" && console.warn(`Could not remove localStorage key "${t}"`), !1;
  }
}, xt = () => {
  try {
    An();
    const t = jt(J.ACCESS_TOKEN), r = jt(J.REFRESH_TOKEN), o = jt(J.USER);
    let n = null;
    if (o)
      try {
        n = JSON.parse(o);
      } catch {
        o && o !== "null" && o !== "undefined" && console.warn(
          "Invalid user data in localStorage, clearing:",
          o.substring(0, 50)
        ), co(J.USER);
      }
    return {
      accessToken: t,
      refreshToken: r,
      user: n
    };
  } catch (t) {
    throw t instanceof z ? t : new z(
      "Failed to retrieve authentication tokens",
      $.UNKNOWN_ERROR,
      t
    );
  }
}, Dn = () => {
  try {
    const { accessToken: t, refreshToken: r } = xt();
    return !(t || r) ? {
      isAuthenticated: !1,
      error: new z(
        "No authentication tokens found",
        $.TOKEN_NOT_FOUND
      )
    } : {
      isAuthenticated: !0,
      error: null
    };
  } catch (t) {
    return console.error("Authentication check failed:", t), {
      isAuthenticated: !1,
      error: t instanceof z ? t : new z(
        "Authentication check failed",
        $.UNKNOWN_ERROR,
        t
      )
    };
  }
}, uo = (t, r, o = null) => {
  try {
    if (!t && !r)
      throw new z(
        "At least one token must be provided",
        $.TOKEN_INVALID
      );
    return t && Xt(J.ACCESS_TOKEN, t), r && Xt(J.REFRESH_TOKEN, r), o && Xt(J.USER, JSON.stringify(o)), {
      success: !0,
      error: null
    };
  } catch (n) {
    return console.error("Failed to store authentication tokens:", n), {
      success: !1,
      error: n instanceof z ? n : new z(
        "Failed to store tokens",
        $.UNKNOWN_ERROR,
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
      Le.ACCESS_TOKEN,
      Le.REFRESH_TOKEN,
      Le.USER
    ].map((n) => co(n)).every((n) => n) || console.warn("Some tokens could not be removed from localStorage"), {
      success: !0,
      error: null
    };
  } catch (t) {
    return console.error("Failed to clear authentication tokens:", t), {
      success: !1,
      error: t instanceof z ? t : new z(
        "Failed to clear tokens",
        $.LOGOUT_FAILED,
        t
      )
    };
  }
}, Nn = () => {
  try {
    const { user: t } = xt();
    return {
      user: t,
      error: null
    };
  } catch (t) {
    return console.error("Failed to get current user:", t), {
      user: null,
      error: t instanceof z ? t : new z(
        "Failed to retrieve user data",
        $.UNKNOWN_ERROR,
        t
      )
    };
  }
}, Ra = (t) => {
  if (!(t instanceof z))
    return "An unexpected error occurred. Please try again.";
  switch (t.code) {
    case $.STORAGE_ACCESS_DENIED:
      return "Unable to access browser storage. Please check your browser settings and disable private browsing if enabled.";
    case $.TOKEN_NOT_FOUND:
      return "You are not logged in. Please sign in to continue.";
    case $.TOKEN_INVALID:
      return "Your session is invalid. Please sign in again.";
    case $.TOKEN_EXPIRED:
      return "Your session has expired. Please sign in again.";
    case $.LOGOUT_FAILED:
      return "Failed to log out properly. Please clear your browser cache and try again.";
    case $.UNKNOWN_ERROR:
    default:
      return "An unexpected error occurred. Please try again or contact support if the problem persists.";
  }
}, or = (t, r = "Unknown") => {
  const o = {
    context: r,
    message: t.message,
    code: t instanceof z ? t.code : "UNKNOWN",
    timestamp: t instanceof z ? t.timestamp : (/* @__PURE__ */ new Date()).toISOString(),
    stack: t.stack
  };
  t instanceof z && t.originalError && (o.originalError = {
    name: t.originalError.name,
    message: t.originalError.message
  }), console.warn("[Auth Error]", o);
}, Wn = (t) => {
  if (!t)
    throw new Error("API base URL is required to create axios client");
  const r = Ar.create({
    baseURL: t,
    headers: {
      "Content-Type": "application/json"
    }
  });
  let o = !1, n = null, i = [];
  const h = (s, l) => {
    i.forEach(({ resolve: c, reject: u }) => {
      s ? u(s) : l && c(l);
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
      var p;
      const l = s.config, c = (p = s.response) == null ? void 0 : p.status, u = (l == null ? void 0 : l.url) || "", f = u.includes("/auth/refresh");
      if (c !== 401 || l._retry || f)
        return Promise.reject(s);
      l._retry = !0;
      const { refreshToken: y } = xt();
      if (!y) {
        const b = new Error(
          "No refresh token available for token refresh"
        );
        return or(b, "AxiosClient - Token Refresh"), gt(), typeof window < "u" && (window.location.href = "/login"), Promise.reject(s);
      }
      if (o && n)
        return new Promise((b, I) => {
          i.push({ resolve: b, reject: I });
        }).then((b) => {
          const {
            accessToken: I,
            refreshToken: g
          } = b;
          if (l.headers && (l.headers.Authorization = `Bearer ${I}`), u.includes("/auth/logout"))
            try {
              if (typeof l.data == "string") {
                const C = JSON.parse(
                  l.data || "{}"
                );
                C.refresh_token = g, l.data = JSON.stringify(C);
              } else
                l.data && typeof l.data == "object" ? l.data.refresh_token = g : l.data = JSON.stringify({
                  refresh_token: g
                });
            } catch {
              l.data = JSON.stringify({
                refresh_token: g
              });
            }
          return r(l);
        }).catch((b) => Promise.reject(b));
      o = !0, n = Ar.post(
        `${t}/auth/refresh`,
        {
          refresh_token: y
        }
      );
      try {
        const b = await n, { accessToken: I, refreshToken: g } = b.data;
        if (uo(I, g, null), h(null, {
          accessToken: I,
          refreshToken: g
        }), l.headers && (l.headers.Authorization = `Bearer ${I}`), u.includes("/auth/logout"))
          try {
            if (typeof l.data == "string") {
              const C = JSON.parse(
                l.data || "{}"
              );
              C.refresh_token = g, l.data = JSON.stringify(C);
            } else
              l.data && typeof l.data == "object" ? l.data.refresh_token = g : l.data = JSON.stringify({
                refresh_token: g
              });
          } catch {
            l.data = JSON.stringify({
              refresh_token: g
            });
          }
        return r(l);
      } catch (b) {
        return or(
          b,
          "AxiosClient - Token Refresh Failed"
        ), h(b), gt(), typeof window < "u" && (window.location.href = "/login"), Promise.reject(b);
      } finally {
        o = !1, n = null;
      }
    }
  ), r;
}, ye = {
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
}, ve = {
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
}, ho = Yr(), _e = ho.typography.pxToRem, kn = (t) => {
  const r = t === "dark", o = [...ho.shadows];
  return o[1] = r ? "hsla(220, 30%, 5%, 0.7) 0px 4px 16px 0px, hsla(220, 25%, 10%, 0.8) 0px 8px 16px -5px" : "hsla(220, 30%, 5%, 0.07) 0px 4px 16px 0px, hsla(220, 25%, 10%, 0.07) 0px 8px 16px -5px", {
    palette: {
      mode: t,
      primary: {
        light: r ? ye[300] : ye[200],
        main: ye[400],
        dark: ye[700],
        contrastText: ye[50]
      },
      info: r ? {
        light: ye[500],
        main: ye[700],
        dark: ye[900],
        contrastText: ye[300]
      } : {
        light: ye[100],
        main: ye[300],
        dark: ye[600],
        contrastText: ve[50]
      },
      warning: r ? { light: ot[400], main: ot[500], dark: ot[700] } : { light: ot[300], main: ot[400], dark: ot[800] },
      error: r ? { light: nt[400], main: nt[500], dark: nt[700] } : { light: nt[300], main: nt[400], dark: nt[800] },
      success: r ? { light: rt[400], main: rt[500], dark: rt[700] } : { light: rt[300], main: rt[400], dark: rt[800] },
      grey: ve,
      divider: r ? Xe(ve[700], 0.6) : Xe(ve[300], 0.4),
      background: r ? { default: ve[900], paper: "hsl(220, 30%, 7%)" } : { default: "hsl(0, 0%, 99%)", paper: "hsl(220, 35%, 97%)" },
      text: r ? { primary: "hsl(0, 0%, 100%)", secondary: ve[400] } : { primary: ve[800], secondary: ve[600] },
      action: r ? {
        hover: Xe(ve[600], 0.2),
        selected: Xe(ve[600], 0.3)
      } : {
        hover: Xe(ve[200], 0.2),
        selected: Xe(ve[200], 0.3)
      }
    },
    typography: {
      fontFamily: "Inter, sans-serif",
      h1: {
        fontSize: _e(48),
        fontWeight: 600,
        lineHeight: 1.2,
        letterSpacing: -0.5
      },
      h2: { fontSize: _e(36), fontWeight: 600, lineHeight: 1.2 },
      h3: { fontSize: _e(30), lineHeight: 1.2 },
      h4: { fontSize: _e(24), fontWeight: 600, lineHeight: 1.5 },
      h5: { fontSize: _e(20), fontWeight: 600 },
      h6: { fontSize: _e(18), fontWeight: 600 },
      subtitle1: { fontSize: _e(18) },
      subtitle2: { fontSize: _e(14), fontWeight: 500 },
      body1: { fontSize: _e(14) },
      body2: { fontSize: _e(14), fontWeight: 400 },
      caption: { fontSize: _e(12), fontWeight: 400 }
    },
    shape: {
      borderRadius: 8
    },
    shadows: o
  };
}, zn = async (t, r) => {
  const { accessToken: o, refreshToken: n } = xt();
  if (o)
    return !0;
  if (n)
    try {
      const i = await t.post("/auth/refresh", {
        refresh_token: n
      });
      if (i.data.success && i.data.accessToken)
        return uo(
          i.data.accessToken,
          i.data.refreshToken || null,
          null
        ), !0;
    } catch (i) {
      or(i, "TokenValidator - Refresh Failed");
    }
  return gt(), r ? r() : window.location.href = "/login", !1;
}, _t = ({ size: t = 20 }) => /* @__PURE__ */ d(
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
), it = "#09C1AE", Vt = (t, r) => ({
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
}), Mr = ({
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
  return t === "sidebar" ? /* @__PURE__ */ d(
    st,
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
        ...n && Vt(8, "background.paper")
      },
      children: [
        /* @__PURE__ */ e(_t, { size: 20 }),
        /* @__PURE__ */ e(
          N,
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
        i && /* @__PURE__ */ e(Tn, { keys: i })
      ]
    }
  ) : t === "sidebar-icon" ? /* @__PURE__ */ e(Re, { title: l, placement: "right", arrow: !0, children: /* @__PURE__ */ e(
    Te,
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
        ...n && Vt(8, "background.paper")
      },
      children: /* @__PURE__ */ e(_t, { size: 20 })
    }
  ) }) : /* @__PURE__ */ e(Re, { title: l, placement: "left", children: /* @__PURE__ */ e(
    Te,
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
        ...n && Vt(16, "background.paper")
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
}) => i ? /* @__PURE__ */ e(jo, { variant: "outlined", sx: { m: 1.5, flexShrink: 0 }, children: /* @__PURE__ */ d(Xo, { children: [
  /* @__PURE__ */ e(Vo, { fontSize: "small" }),
  /* @__PURE__ */ e(N, { gutterBottom: !0, sx: { fontWeight: 600 }, children: t }),
  /* @__PURE__ */ e(
    N,
    {
      variant: "body2",
      sx: { mb: 2, color: "text.secondary" },
      children: r
    }
  ),
  /* @__PURE__ */ e(
    qr,
    {
      variant: "contained",
      size: "small",
      fullWidth: !0,
      onClick: n,
      children: o
    }
  )
] }) }) : null, ft = 24, Bn = 720, Mn = 1140, Ln = 1250, Fn = ({
  open: t,
  children: r,
  variant: o,
  position: n,
  width: i,
  sidebarWidthPx: h,
  bottomOffsetPx: s,
  fullScreen: l,
  fullScreenBottom: c = "0px",
  onClose: u
}) => {
  m.useEffect(() => {
    if (!t || !u)
      return;
    const I = (g) => {
      g.key === "Escape" && u();
    };
    return window.addEventListener("keydown", I), () => window.removeEventListener("keydown", I);
  }, [t, u]);
  const f = o === "docked", y = ft + s;
  let p;
  l ? p = {
    top: 0,
    left: 0,
    right: 0,
    bottom: c,
    borderRadius: 0
  } : f ? p = {
    top: 0,
    right: 0,
    bottom: 0,
    width: i,
    maxWidth: "100vw",
    borderRadius: 0,
    borderWidth: "0 0 0 1px"
  } : p = {
    bottom: y,
    ...n === "left" ? { left: h + ft } : { right: ft },
    width: i,
    maxWidth: `calc(100vw - ${ft * 2}px)`,
    height: `min(${Bn}px, calc(100vh - ${y + ft}px))`,
    borderRadius: "12px"
  };
  const b = /* @__PURE__ */ e(
    nr,
    {
      role: f ? "complementary" : "dialog",
      "aria-label": "Nexa chat",
      "data-testid": "chat-panel",
      "data-variant": o,
      elevation: 8,
      sx: {
        position: "fixed",
        zIndex: f ? Mn : Ln,
        display: "flex",
        flexDirection: "column",
        overflow: "hidden",
        border: "1px solid",
        borderColor: "divider",
        ...p
      },
      children: r
    }
  );
  return f ? /* @__PURE__ */ e(qo, { direction: "left", in: t, mountOnEnter: !0, children: b }) : /* @__PURE__ */ e(
    Yo,
    {
      in: t,
      mountOnEnter: !0,
      style: {
        transformOrigin: n === "left" ? "bottom left" : "bottom right"
      },
      children: b
    }
  );
}, Pn = 180, Lr = 250, Hn = "#01584F", $n = ({
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
    Re,
    {
      title: t,
      placement: "right",
      arrow: !0,
      enterDelay: 400,
      disableHoverListener: !n,
      disableFocusListener: !n,
      disableTouchListener: !n,
      children: /* @__PURE__ */ e(
        N,
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
}, fo = (t, r, o, n) => {
  const i = t ? 48 : 44, h = t ? "text.secondary" : r, s = t ? Hn : r;
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
}, po = ({ link: t }) => /* @__PURE__ */ d(ue, { alignItems: "center", spacing: 1, sx: { width: "100%" }, children: [
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
    $n,
    {
      text: t.text,
      testId: `rail-item-caption-${t.text}`
    }
  )
] }), mo = (t, r, o) => o ? t : /* @__PURE__ */ e(Re, { title: r, placement: "right", arrow: !0, children: t }), Un = ({
  link: t,
  activePath: r,
  onLinkClick: o,
  accentColor: n,
  isSecondary: i,
  surfaceBackgroundColor: h,
  railShowTitles: s
}) => {
  const l = Dt(), [c, u] = m.useState(null), [f, y] = m.useState(!1), p = m.useRef(
    null
  ), b = m.useRef(null), I = m.useRef(null), g = m.useRef(!1), C = m.useRef(!1), W = m.useId(), B = () => {
    p.current && (clearTimeout(p.current), p.current = null);
  }, v = () => {
    B(), p.current = setTimeout(() => {
      y(!1), p.current = null;
    }, Pn);
  }, M = () => {
    B(), y(!0);
  };
  m.useEffect(() => {
    if (!f)
      return;
    const _ = (F) => {
      var A;
      F.key === "Escape" && (y(!1), (A = I.current) == null || A.focus());
    };
    return document.addEventListener("keydown", _), () => document.removeEventListener("keydown", _);
  }, [f]), m.useEffect(() => {
    if (!f || !C.current)
      return;
    const _ = globalThis.requestAnimationFrame(() => {
      var A;
      const F = (A = b.current) == null ? void 0 : A.querySelector(
        '[role="menuitem"]'
      );
      F == null || F.focus(), C.current = !1;
    });
    return () => cancelAnimationFrame(_);
  }, [f]);
  const K = et(t, r), { activeBg: L, sx: S } = fo(
    i,
    n,
    K,
    s
  ), Z = /* @__PURE__ */ e(
    Te,
    {
      ref: I,
      component: t.path ? "a" : "button",
      href: t.path || void 0,
      "aria-label": t.text,
      onFocus: () => {
        g.current || M();
      },
      onBlur: (_) => {
        var A;
        const F = _.relatedTarget;
        F && ((A = b.current) != null && A.contains(F)) || v();
      },
      onKeyDown: (_) => {
        _.key === "ArrowDown" && (_.preventDefault(), C.current = !0, M());
      },
      onClick: (_) => {
        _.preventDefault(), _.stopPropagation(), t.path && (o == null || o(t.path));
      },
      "aria-haspopup": "menu",
      "aria-expanded": f,
      "aria-controls": f ? W : void 0,
      "data-testid": `rail-submenu-trigger-${t.text}`,
      sx: S,
      children: s ? /* @__PURE__ */ e(po, { link: t }) : t.icon
    }
  );
  return /* @__PURE__ */ d(
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
            ref: u,
            "data-testid": `rail-submenu-anchor-${t.text}`,
            sx: { display: "inline-flex", maxWidth: "100%" },
            onMouseEnter: () => {
              g.current = !0, M();
            },
            onMouseLeave: () => {
              g.current = !1, v();
            },
            children: mo(Z, t.text, s)
          }
        ),
        /* @__PURE__ */ e(
          Zo,
          {
            open: f && !!c,
            anchorEl: c,
            placement: "right-start",
            modifiers: [{ name: "offset", options: { offset: [8, 0] } }],
            sx: { zIndex: (_) => _.zIndex.modal },
            children: /* @__PURE__ */ e(
              nr,
              {
                ref: b,
                elevation: 0,
                onMouseEnter: B,
                onMouseLeave: v,
                "data-testid": `rail-submenu-panel-${t.text}`,
                sx: {
                  bgcolor: h,
                  backgroundImage: "none",
                  borderRadius: "4px",
                  border: "1px solid",
                  borderColor: "divider",
                  boxShadow: l.shadows[8],
                  maxWidth: Lr,
                  minWidth: 0,
                  py: 0.5,
                  boxSizing: "border-box"
                },
                children: /* @__PURE__ */ e(
                  Nt,
                  {
                    id: W,
                    dense: !0,
                    autoFocus: !1,
                    role: "menu",
                    sx: {
                      bgcolor: "transparent",
                      py: 0,
                      maxWidth: Lr
                    },
                    children: Q(t.subitems, t.text, 0)
                  }
                )
              }
            )
          }
        )
      ]
    }
  );
  function Q(_, F, A) {
    return _.flatMap((k) => {
      const he = Ot(F, k);
      return mt(k) ? [
        /* @__PURE__ */ e(
          Jo,
          {
            disableSticky: !0,
            title: k.text,
            sx: {
              bgcolor: "transparent",
              lineHeight: "28px",
              pl: 2 + A * 1.5,
              fontSize: "0.7rem",
              letterSpacing: "0.06em",
              textTransform: "uppercase",
              color: "text.secondary",
              overflow: "hidden",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap"
            },
            children: k.text
          },
          he
        ),
        ...Q(k.subitems, he, A + 1)
      ] : [
        /* @__PURE__ */ d(
          oe,
          {
            role: "menuitem",
            title: k.text,
            disabled: !k.path,
            selected: je(k, r),
            onClick: (Ae) => {
              Ae.preventDefault(), k.path && (o == null || o(k.path)), y(!1);
            },
            sx: {
              borderRadius: "4px",
              mx: 0.5,
              my: 0.125,
              pl: 2 + A * 1.5,
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
                bgcolor: L,
                color: "#ffffff",
                "&:hover": {
                  bgcolor: L
                }
              },
              "&.Mui-focusVisible": {
                bgcolor: "action.focus"
              }
            },
            children: [
              k.icon ? /* @__PURE__ */ e(Y, { children: k.icon }) : null,
              /* @__PURE__ */ e(
                Fe,
                {
                  primary: k.text,
                  primaryTypographyProps: {
                    noWrap: !0
                  }
                }
              )
            ]
          },
          he
        )
      ];
    });
  }
}, Kn = ({
  link: t,
  activePath: r,
  onLinkClick: o,
  accentColor: n,
  isSecondary: i,
  railShowTitles: h
}) => {
  const s = !!(t.path && r === t.path), { sx: l } = fo(
    i,
    n,
    s,
    h
  );
  return mo(
    /* @__PURE__ */ e(
      Te,
      {
        component: t.path ? "a" : "button",
        href: t.path || void 0,
        "aria-label": t.text,
        onClick: (c) => {
          c.preventDefault(), c.stopPropagation(), t.path && (o == null || o(t.path));
        },
        disabled: !t.path,
        sx: l,
        children: h ? /* @__PURE__ */ e(po, { link: t }) : t.icon
      }
    ),
    t.text,
    h
  );
}, Gn = () => /* @__PURE__ */ e(
  x,
  {
    sx: {
      width: "100%",
      display: "flex",
      justifyContent: "center"
    },
    children: /* @__PURE__ */ e(We, { sx: { width: "60%", borderColor: "divider" } })
  }
), jn = () => /* @__PURE__ */ e(
  x,
  {
    sx: {
      width: "100%",
      my: 2,
      display: "flex",
      justifyContent: "center"
    },
    children: /* @__PURE__ */ e(We, { sx: { width: "60%", borderColor: "divider" } })
  }
), Fr = (t, r) => t.map((o, n) => /* @__PURE__ */ d(m.Fragment, { children: [
  r(o, n),
  n < t.length - 1 ? /* @__PURE__ */ e(Gn, {}) : null
] }, n)), Xn = ({
  mainLinks: t,
  secondaryLinks: r = [],
  activePath: o,
  onLinkClick: n,
  accentColor: i = "#01584f",
  surfaceBackgroundColor: h,
  railShowTitles: s = !1
}) => {
  const l = (u, f) => mt(u) ? /* @__PURE__ */ e(
    Un,
    {
      link: u,
      activePath: o,
      onLinkClick: n,
      accentColor: i,
      isSecondary: f,
      surfaceBackgroundColor: h,
      railShowTitles: s
    }
  ) : /* @__PURE__ */ e(
    Kn,
    {
      link: u,
      activePath: o,
      onLinkClick: n,
      accentColor: i,
      isSecondary: f,
      railShowTitles: s
    }
  ), c = s ? 1.25 : 1;
  return /* @__PURE__ */ d(
    ue,
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
        Fr(t, (u) => l(u, !1)),
        r.length > 0 ? /* @__PURE__ */ d(at, { children: [
          /* @__PURE__ */ e(jn, {}),
          /* @__PURE__ */ e(x, { sx: { mt: "auto", pb: 2 }, children: /* @__PURE__ */ e(ue, { gap: c, alignItems: "center", children: Fr(
            r,
            (u) => l(u, !0)
          ) }) })
        ] }) : null
      ]
    }
  );
}, Vn = (t) => t ? t.replace(/_/g, " ").toUpperCase() : "USER", Yn = (t) => t.split(/\s+/).filter(Boolean).slice(0, 2).map((r) => r.charAt(0).toUpperCase()).join(""), Pr = {
  overflow: "hidden",
  textOverflow: "ellipsis",
  whiteSpace: "nowrap",
  maxWidth: "100%"
}, Hr = ({ count: t }) => t ? /* @__PURE__ */ e(
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
) : null, ir = ({ name: t, avatar: r, color: o, size: n = 36 }) => /* @__PURE__ */ e(
  Qo,
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
    children: Yn(t)
  }
), xo = ({ name: t, role: r, avatar: o, avatarColor: n, showText: i }) => /* @__PURE__ */ d(at, { children: [
  /* @__PURE__ */ e(ir, { name: t, avatar: o, color: n }),
  i && /* @__PURE__ */ d(
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
          N,
          {
            variant: "body2",
            sx: { ...Pr, fontWeight: 600, color: "inherit" },
            children: t
          }
        ),
        /* @__PURE__ */ e(
          N,
          {
            variant: "caption",
            sx: { ...Pr, opacity: 0.8, color: "inherit" },
            children: Vn(r)
          }
        )
      ]
    }
  )
] }), $r = {
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
}, go = ({
  anchorEl: t,
  onClose: r,
  placement: o,
  width: n,
  avatarColor: i,
  showNotifications: h,
  notificationCount: s,
  onNotificationsClick: l,
  userName: c = "User",
  userRole: u,
  userAvatar: f,
  menuItems: y = [],
  showSettings: p,
  onSettingsClick: b,
  showThemeToggler: I,
  theme: g,
  onThemeToggle: C,
  onLogout: W
}) => {
  const B = (v) => () => {
    r(), v == null || v();
  };
  return /* @__PURE__ */ d(
    en,
    {
      anchorEl: t,
      open: !!t,
      onClose: r,
      anchorOrigin: $r[o].anchor,
      transformOrigin: $r[o].transform,
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
          ue,
          {
            direction: "row",
            spacing: 1.25,
            sx: { px: 1.5, py: 1, alignItems: "center" },
            children: /* @__PURE__ */ e(
              xo,
              {
                name: c,
                role: u,
                avatar: f,
                avatarColor: i,
                showText: !0
              }
            )
          }
        ),
        /* @__PURE__ */ e(We, {}),
        h && /* @__PURE__ */ d(oe, { onClick: B(l), children: [
          /* @__PURE__ */ e(Y, { children: /* @__PURE__ */ e(eo, { fontSize: "small" }) }),
          /* @__PURE__ */ e(Fe, { children: "Notifications" }),
          /* @__PURE__ */ e(Hr, { count: s })
        ] }),
        y.map((v) => /* @__PURE__ */ d(oe, { onClick: B(v.onClick), children: [
          v.icon && /* @__PURE__ */ e(Y, { children: v.icon }),
          /* @__PURE__ */ e(Fe, { inset: !v.icon, children: v.label }),
          /* @__PURE__ */ e(Hr, { count: v.badge })
        ] }, v.key)),
        p && /* @__PURE__ */ d(oe, { onClick: B(b), children: [
          /* @__PURE__ */ e(Y, { children: /* @__PURE__ */ e(to, { fontSize: "small" }) }),
          /* @__PURE__ */ e(Fe, { children: "Settings" })
        ] }),
        I && [
          /* @__PURE__ */ e(We, {}, "theme-divider"),
          /* @__PURE__ */ d(x, { sx: { px: 1.5, py: 1 }, children: [
            /* @__PURE__ */ e(
              N,
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
            /* @__PURE__ */ d(
              tn,
              {
                exclusive: !0,
                fullWidth: !0,
                size: "small",
                "aria-label": "Theme",
                value: g,
                onChange: (v, M) => M && M !== g && (C == null ? void 0 : C()),
                disabled: !C,
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
                  /* @__PURE__ */ e(Dr, { value: "light", children: "Light" }),
                  /* @__PURE__ */ e(Dr, { value: "dark", children: "Dark" })
                ]
              }
            )
          ] }, "theme")
        ],
        /* @__PURE__ */ e(We, {}),
        /* @__PURE__ */ d(
          oe,
          {
            onClick: B(W),
            sx: {
              color: g === "dark" ? "hsl(0, 90%, 65%)" : "error.main"
            },
            children: [
              /* @__PURE__ */ e(Y, { sx: { color: "inherit" }, children: /* @__PURE__ */ e(Qr, { fontSize: "small" }) }),
              /* @__PURE__ */ e(Fe, { children: "Log out" })
            ]
          }
        )
      ]
    }
  );
}, bo = 64, qn = 2, pt = ({
  label: t,
  icon: r,
  onClick: o,
  active: n,
  color: i,
  activeColor: h,
  activeBackground: s,
  ariaLabel: l,
  haspopup: c,
  isPage: u = !1,
  testId: f
}) => /* @__PURE__ */ d(
  st,
  {
    onClick: o,
    "aria-label": l ?? t,
    "aria-haspopup": c,
    "aria-expanded": c ? n : void 0,
    "aria-current": u && n ? "page" : void 0,
    "data-testid": f,
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
        N,
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
), Jn = ({
  onMenuClick: t,
  menuOpen: r,
  onSearchClick: o,
  searchOpen: n,
  showAssistant: i,
  onAssistantClick: h,
  assistantActive: s,
  showProfile: l,
  background: c,
  color: u,
  activeColor: f,
  activeBackground: y,
  pinnedLinks: p = [],
  activePath: b,
  onLinkClick: I,
  ...g
}) => {
  const C = p.filter((S) => S.path).slice(0, qn), [W, B] = m.useState(
    null
  ), { userName: v = "User", userAvatar: M, avatarColor: K } = g, L = { color: u, activeColor: f, activeBackground: y };
  return /* @__PURE__ */ d(
    nr,
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
        height: `calc(${bo}px + env(safe-area-inset-bottom, 0px))`,
        pb: "env(safe-area-inset-bottom, 0px)",
        bgcolor: c,
        borderTop: "1px solid",
        borderColor: "divider"
      },
      children: [
        t && /* @__PURE__ */ e(
          pt,
          {
            label: "Menu",
            icon: /* @__PURE__ */ e(Jr, {}),
            onClick: t,
            active: r,
            haspopup: "dialog",
            testId: "mobile-nav-menu",
            ...L
          }
        ),
        C.map((S) => /* @__PURE__ */ e(
          pt,
          {
            label: S.text,
            icon: S.icon,
            onClick: () => I == null ? void 0 : I(S.path),
            active: et(S, b),
            isPage: !0,
            testId: `mobile-nav-link-${S.text}`,
            ...L
          },
          S.path
        )),
        i && /* @__PURE__ */ e(
          pt,
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
            ...L
          }
        ),
        o && /* @__PURE__ */ e(
          pt,
          {
            label: "Search",
            icon: /* @__PURE__ */ e(Zr, {}),
            onClick: o,
            active: n,
            haspopup: "dialog",
            testId: "mobile-nav-search",
            ...L
          }
        ),
        l && /* @__PURE__ */ d(at, { children: [
          /* @__PURE__ */ e(
            pt,
            {
              label: "Account",
              ariaLabel: `Account menu for ${v}`,
              icon: /* @__PURE__ */ e(
                ir,
                {
                  name: v,
                  avatar: M,
                  color: K,
                  size: 26
                }
              ),
              onClick: (S) => B(S.currentTarget),
              active: !!W,
              haspopup: "menu",
              testId: "mobile-nav-account",
              ...L
            }
          ),
          /* @__PURE__ */ e(
            go,
            {
              anchorEl: W,
              onClose: () => B(null),
              placement: "above-end",
              width: 280,
              ...g
            }
          )
        ] })
      ]
    }
  );
}, Zn = ({
  open: t,
  onClose: r,
  search: o
}) => /* @__PURE__ */ e(
  rn,
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
    children: /* @__PURE__ */ d(
      ue,
      {
        direction: "row",
        spacing: 1,
        "data-testid": "mobile-search-sheet",
        sx: { alignItems: "center" },
        children: [
          /* @__PURE__ */ e(x, { sx: { flex: "1 1 auto", minWidth: 0 }, children: o }),
          /* @__PURE__ */ e(
            qr,
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
), Qn = ({
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
  on,
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
    children: /* @__PURE__ */ d(nn, { sx: { minHeight: `${t}px !important`, gap: 1, px: 1 }, children: [
      r && /* @__PURE__ */ e(
        Te,
        {
          "aria-label": "Open navigation menu",
          onClick: r,
          sx: { color: s },
          children: /* @__PURE__ */ e(Jr, {})
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
), ar = ({
  count: t,
  onClick: r,
  color: o,
  hoverColor: n,
  tooltipPlacement: i,
  testId: h
}) => {
  const s = t ? `Notifications, ${t} unread` : "Notifications";
  return /* @__PURE__ */ e(Re, { title: s, placement: i, arrow: !0, children: /* @__PURE__ */ e(
    Te,
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
        ro,
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
          children: /* @__PURE__ */ e(eo, {})
        }
      )
    }
  ) });
}, So = ({
  title: t,
  subtitle: r,
  testId: o,
  width: n,
  sx: i,
  footer: h,
  children: s
}) => {
  const l = m.useId();
  return /* @__PURE__ */ d(
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
        /* @__PURE__ */ d(x, { sx: { px: 2, pt: 1.5, pb: 1 }, children: [
          /* @__PURE__ */ e(N, { id: l, sx: { fontWeight: 600 }, children: t }),
          r ? /* @__PURE__ */ e(
            N,
            {
              variant: "body2",
              sx: { mt: 0.25, color: "text.secondary" },
              children: r
            }
          ) : null
        ] }),
        s,
        h ? /* @__PURE__ */ d(at, { children: [
          /* @__PURE__ */ e(We, {}),
          h
        ] }) : null
      ]
    }
  );
}, ei = 5, ti = 56, ri = ({
  platforms: t,
  currentPlatformKey: r,
  onSelect: o,
  accentColor: n,
  tint: i,
  width: h,
  sx: s
}) => /* @__PURE__ */ e(
  So,
  {
    title: "Lumora Platforms",
    subtitle: "Choose where you want to work.",
    testId: "platforms-panel",
    width: h,
    sx: s,
    footer: /* @__PURE__ */ d(
      ue,
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
          /* @__PURE__ */ e(xn, { fontSize: "small" }),
          /* @__PURE__ */ e(N, { variant: "body2", children: "Platforms available to your account" })
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
          maxHeight: ei * ti,
          overflowY: "auto"
        },
        children: t.map((l) => {
          const c = l.key === r;
          return /* @__PURE__ */ d(
            oe,
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
                /* @__PURE__ */ d(x, { sx: { flex: 1, minWidth: 0 }, children: [
                  /* @__PURE__ */ e(N, { noWrap: !0, sx: { fontWeight: 500 }, children: l.name }),
                  l.description ? /* @__PURE__ */ e(
                    N,
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
                c ? /* @__PURE__ */ d(
                  ue,
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
                      /* @__PURE__ */ e(mn, { sx: { fontSize: 16 } })
                    ]
                  }
                ) : /* @__PURE__ */ e(
                  pn,
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
), Ur = (t) => t.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, ""), oi = ({
  sections: t,
  onItemClick: r,
  width: o,
  sx: n
}) => {
  const [i, h] = m.useState({}), s = (c) => i[c.title] ?? c.defaultOpen ?? !1, l = (c) => h((u) => ({
    ...u,
    [c.title]: !s(c)
  }));
  return /* @__PURE__ */ e(
    So,
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
            const u = s(c), f = Ur(c.title), y = /* @__PURE__ */ d(
              oe,
              {
                onClick: () => l(c),
                "aria-expanded": u,
                "data-testid": `settings-section-${f}`,
                sx: {
                  borderRadius: "8px",
                  py: 0.75,
                  gap: 1,
                  fontWeight: 600
                },
                children: [
                  /* @__PURE__ */ e(x, { component: "span", sx: { flex: 1, minWidth: 0 }, children: c.title }),
                  /* @__PURE__ */ e(
                    gn,
                    {
                      "data-testid": `settings-section-${f}-chevron`,
                      sx: {
                        fontSize: 20,
                        color: "text.secondary",
                        flexShrink: 0,
                        transform: u ? "none" : "rotate(-90deg)",
                        transition: "transform 150ms ease"
                      }
                    }
                  )
                ]
              },
              `section-${c.title}`
            );
            return u ? [
              y,
              ...c.items.map((p) => /* @__PURE__ */ e(
                oe,
                {
                  onClick: () => r(p, c),
                  disabled: p.disabled,
                  "data-testid": `settings-item-${p.key ?? Ur(p.text)}`,
                  sx: {
                    borderRadius: "8px",
                    py: 0.75,
                    // Indented under the header, no bullet.
                    pl: 3.5
                  },
                  children: p.text
                },
                `item-${c.title}-${p.key ?? p.text}`
              ))
            ] : [y];
          })
        }
      )
    }
  );
}, ni = 288, ii = 300, ai = {
  "&:focus, &:focus-visible": { outline: "none" }
}, Eo = {
  pointerEvents: "auto",
  bgcolor: "background.paper",
  border: "1px solid",
  borderColor: "divider",
  borderRadius: "12px",
  boxShadow: "0 8px 24px rgba(0, 0, 0, 0.12)",
  overflow: "hidden",
  display: "flex",
  flexDirection: "column"
}, Kr = {
  ...Eo,
  "@keyframes sub-panel-in": {
    from: { opacity: 0, transform: "translateX(-6px)" },
    to: { opacity: 1, transform: "none" }
  },
  animation: "sub-panel-in 150ms ease-out",
  "@media (prefers-reduced-motion: reduce)": { animation: "none" }
}, Gr = ({ count: t }) => t ? /* @__PURE__ */ e(
  x,
  {
    sx: {
      minWidth: 24,
      height: 24,
      px: 0.75,
      borderRadius: "12px",
      bgcolor: "error.main",
      color: "error.contrastText",
      fontSize: "0.75rem",
      fontWeight: 600,
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    },
    children: t
  }
) : null, si = ({ mode: t, onToggle: r, accentColor: o, tint: n }) => {
  const i = m.useRef(null), h = m.useRef(null), s = (u) => {
    var f;
    u !== t && (r == null || r()), (f = (u === "light" ? i : h).current) == null || f.focus();
  }, l = (u) => {
    if (!(u.key === "Tab" || u.key === "Escape"))
      switch (u.stopPropagation(), u.key) {
        case "ArrowLeft":
        case "ArrowRight":
        case "ArrowUp":
        case "ArrowDown":
          u.preventDefault(), s(t === "light" ? "dark" : "light");
          break;
        case "Home":
          u.preventDefault(), s("light");
          break;
        case "End":
          u.preventDefault(), s("dark");
          break;
      }
  }, c = (u, f, y, p) => {
    const b = t === u;
    return /* @__PURE__ */ e(
      st,
      {
        ref: p,
        role: "radio",
        "aria-checked": b,
        "aria-label": f,
        tabIndex: b ? 0 : -1,
        onClick: () => s(u),
        "data-testid": `theme-segment-${u}`,
        sx: {
          width: 36,
          height: 26,
          borderRadius: "999px",
          color: b ? o : "text.secondary",
          bgcolor: b ? n : "transparent",
          transition: "background-color 150ms ease, color 150ms ease",
          "&.Mui-focusVisible": {
            boxShadow: `0 0 0 2px ${Xe(o, 0.6)}`
          },
          ...ai
        },
        children: /* @__PURE__ */ e(y, { sx: { fontSize: 18 } })
      }
    );
  };
  return /* @__PURE__ */ d(
    ue,
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
        c("light", "Light", cn, i),
        c("dark", "Dark", sn, h)
      ]
    }
  );
}, li = ({
  open: t,
  anchorEl: r,
  onClose: o,
  width: n,
  renderAvatar: i,
  userName: h,
  userEmail: s,
  roleLabel: l,
  accentColor: c,
  tint: u,
  showThemeToggler: f,
  theme: y,
  onThemeToggle: p,
  showNotifications: b,
  notificationCount: I,
  onNotificationsClick: g,
  whatsNewCount: C,
  onWhatsNewClick: W,
  onProfileClick: B,
  onSubmitRequestClick: v,
  showSettings: M,
  onSettingsClick: K,
  settingsSections: L,
  onSettingsItemClick: S,
  onLinkClick: Z,
  platforms: Q,
  currentPlatformKey: _,
  onPlatformSelect: F,
  onLogout: A
}) => {
  const he = Dt().palette.mode === "dark", Ae = m.useRef(null), [U, Ve] = m.useState(null), fe = m.useRef(null), P = m.useRef(null), ne = m.useRef(null), [ke, ie] = m.useState(
    null
  ), [Pe, ae] = m.useState(0), [j, pe] = m.useState(null), Ie = !!(Q != null && Q.length), O = M && !!(L != null && L.length), Ye = M && (O || !!K), q = m.useCallback(() => {
    const E = fe.current, X = j === "platforms" ? P.current : j === "settings" ? ne.current : null;
    if (!t || !E || !X || !ke) {
      ae(0);
      return;
    }
    const be = E.getBoundingClientRect(), ze = X.getBoundingClientRect().top, a = ke.getBoundingClientRect().height, w = be.bottom - (ze + a), D = Math.max(0, be.height - a), R = Math.round(Math.min(Math.max(w, 0), D));
    ae((H) => H === R ? H : R);
  }, [t, j, ke]);
  m.useLayoutEffect(() => {
    q();
  }, [q]), m.useEffect(() => {
    if (!U || typeof ResizeObserver > "u")
      return;
    const E = new ResizeObserver(() => {
      var X;
      (X = Ae.current) == null || X.updatePosition(), q();
    });
    return E.observe(U), () => E.disconnect();
  }, [U, q]);
  const De = () => {
    pe(null);
  }, ee = (E) => {
    o(), E == null || E();
  }, Ne = () => {
    var X;
    const E = j === "platforms" ? P : ne;
    pe(null), (X = E.current) == null || X.focus();
  }, se = (E) => {
    pe((X) => X === E ? null : E);
  }, qe = (E) => {
    E.key !== _ && (o(), F ? F(E) : bn(E.url));
  }, le = (E, X) => {
    o(), E.onClick ? E.onClick() : S ? S(E, X) : E.path && (Z == null || Z(E.path));
  }, Ce = (E) => {
    E.key === "Escape" && j && (E.stopPropagation(), Ne());
  }, G = { borderRadius: "8px", py: 1, gap: 0.5 }, me = { color: "text.secondary", fontSize: 20 }, xe = {
    color: c,
    bgcolor: u,
    "& .MuiListItemIcon-root": { color: c },
    "& .MuiSvgIcon-root": { color: c },
    "&:hover": { bgcolor: Xe(c, 0.22) }
  }, Oe = j === "settings", ge = j === "platforms";
  return /* @__PURE__ */ d(
    oo,
    {
      open: t,
      anchorEl: r,
      onClose: o,
      action: Ae,
      anchorOrigin: { vertical: "top", horizontal: "left" },
      transformOrigin: { vertical: "bottom", horizontal: "left" },
      slotProps: {
        transition: { onExited: De },
        paper: {
          ref: Ve,
          onKeyDown: Ce,
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
        /* @__PURE__ */ d(
          x,
          {
            ref: fe,
            "data-testid": "account-menu",
            sx: { ...Eo, width: n, minWidth: n },
            children: [
              /* @__PURE__ */ d(
                ue,
                {
                  direction: "row",
                  sx: { alignItems: "center", gap: 1.5, p: 2 },
                  children: [
                    i(44),
                    /* @__PURE__ */ d(x, { sx: { minWidth: 0, flex: 1 }, children: [
                      /* @__PURE__ */ e(N, { noWrap: !0, sx: { fontWeight: 600 }, children: h }),
                      s ? /* @__PURE__ */ e(
                        N,
                        {
                          noWrap: !0,
                          variant: "body2",
                          "data-testid": "account-menu-email",
                          sx: { color: "text.secondary" },
                          children: s
                        }
                      ) : null,
                      l ? /* @__PURE__ */ e(
                        N,
                        {
                          noWrap: !0,
                          variant: "caption",
                          "data-testid": "account-menu-role",
                          sx: {
                            display: "block",
                            textTransform: "uppercase",
                            letterSpacing: "0.04em",
                            color: "text.secondary"
                          },
                          children: l
                        }
                      ) : null
                    ] })
                  ]
                }
              ),
              /* @__PURE__ */ e(We, {}),
              f ? /* @__PURE__ */ d(
                x,
                {
                  "data-testid": "menu-item-theme",
                  sx: {
                    ...G,
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
                    /* @__PURE__ */ e(Y, { children: /* @__PURE__ */ e(hn, { fontSize: "small" }) }),
                    /* @__PURE__ */ e(N, { sx: { flex: 1 }, children: "Theme" }),
                    /* @__PURE__ */ e(
                      si,
                      {
                        mode: y,
                        onToggle: p,
                        accentColor: c,
                        tint: u
                      }
                    )
                  ]
                }
              ) : null,
              /* @__PURE__ */ d(
                Nt,
                {
                  autoFocusItem: t,
                  sx: { px: 1, pt: f ? 0 : 0.5, pb: 0.5 },
                  children: [
                    b ? /* @__PURE__ */ d(
                      oe,
                      {
                        onClick: () => ee(g),
                        "data-testid": "menu-item-notifications",
                        sx: G,
                        children: [
                          /* @__PURE__ */ e(Y, { children: /* @__PURE__ */ e(dn, { fontSize: "small" }) }),
                          /* @__PURE__ */ e(N, { sx: { flex: 1 }, children: "Notifications" }),
                          /* @__PURE__ */ e(Gr, { count: I })
                        ]
                      }
                    ) : null,
                    W ? /* @__PURE__ */ d(
                      oe,
                      {
                        onClick: () => ee(W),
                        "data-testid": "menu-item-whats-new",
                        sx: G,
                        children: [
                          /* @__PURE__ */ e(Y, { children: /* @__PURE__ */ e(an, { fontSize: "small" }) }),
                          /* @__PURE__ */ e(N, { sx: { flex: 1 }, children: "What's New" }),
                          /* @__PURE__ */ e(Gr, { count: C })
                        ]
                      }
                    ) : null,
                    B ? /* @__PURE__ */ d(
                      oe,
                      {
                        onClick: () => ee(B),
                        "data-testid": "menu-item-profile",
                        sx: G,
                        children: [
                          /* @__PURE__ */ e(Y, { children: /* @__PURE__ */ e(un, { fontSize: "small" }) }),
                          "Profile"
                        ]
                      }
                    ) : null,
                    v ? /* @__PURE__ */ d(
                      oe,
                      {
                        onClick: () => ee(v),
                        "data-testid": "menu-item-submit-request",
                        sx: G,
                        children: [
                          /* @__PURE__ */ e(Y, { children: /* @__PURE__ */ e(fn, { fontSize: "small" }) }),
                          "Submit a request"
                        ]
                      }
                    ) : null,
                    Ye ? /* @__PURE__ */ d(
                      oe,
                      {
                        ref: ne,
                        onClick: O ? () => se("settings") : () => ee(K),
                        "aria-haspopup": O ? "dialog" : void 0,
                        "aria-expanded": O ? Oe : void 0,
                        "data-active": Oe ? "true" : "false",
                        "data-testid": "menu-item-settings",
                        sx: Oe ? { ...G, ...xe } : G,
                        children: [
                          /* @__PURE__ */ e(Y, { children: /* @__PURE__ */ e(to, { fontSize: "small" }) }),
                          /* @__PURE__ */ e(N, { sx: { flex: 1 }, children: "Settings" }),
                          /* @__PURE__ */ e(Qt, { sx: me })
                        ]
                      }
                    ) : null,
                    Ie ? /* @__PURE__ */ e(We, { component: "li", sx: { my: 0.5 } }) : null,
                    Ie ? /* @__PURE__ */ d(
                      oe,
                      {
                        ref: P,
                        onClick: () => se("platforms"),
                        "aria-haspopup": "dialog",
                        "aria-expanded": ge,
                        "data-active": ge ? "true" : "false",
                        "data-testid": "menu-item-platforms",
                        sx: ge ? { ...G, ...xe } : G,
                        children: [
                          /* @__PURE__ */ e(Y, { children: /* @__PURE__ */ e(ln, { fontSize: "small" }) }),
                          /* @__PURE__ */ e(N, { sx: { flex: 1 }, children: "Lumora Platforms" }),
                          /* @__PURE__ */ e(Qt, { sx: me })
                        ]
                      }
                    ) : null,
                    A ? /* @__PURE__ */ e(We, { component: "li", sx: { my: 0.5 } }) : null,
                    A ? /* @__PURE__ */ d(
                      oe,
                      {
                        onClick: () => ee(A),
                        "data-testid": "menu-item-logout",
                        sx: {
                          ...G,
                          color: he ? "error.light" : "error.main"
                        },
                        children: [
                          /* @__PURE__ */ e(Y, { sx: { color: "inherit" }, children: /* @__PURE__ */ e(Qr, { fontSize: "small" }) }),
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
        Ie && j === "platforms" || O && j === "settings" ? /* @__PURE__ */ e(
          x,
          {
            ref: ie,
            "data-testid": "account-menu-subcard",
            style: { marginBottom: Pe },
            sx: { display: "flex" },
            children: j === "platforms" ? /* @__PURE__ */ e(
              ri,
              {
                platforms: Q,
                currentPlatformKey: _,
                onSelect: qe,
                accentColor: c,
                tint: u,
                width: ni,
                sx: Kr
              }
            ) : /* @__PURE__ */ e(
              oi,
              {
                sections: L,
                onItemClick: le,
                width: ii,
                sx: Kr
              }
            )
          }
        ) : null
      ]
    }
  );
}, ci = {
  "&:focus, &:focus-visible": { outline: "none" }
}, di = ({
  mainLinks: t,
  secondaryLinks: r = [],
  activePath: o,
  onLinkClick: n,
  logo: i,
  title: h,
  onBrandClick: s,
  brandColor: l,
  headerBackgroundColor: c,
  headerForegroundColor: u,
  activeAccentColor: f = "#01584f",
  groupAccentColor: y,
  activeForegroundColor: p,
  foregroundColor: b,
  surfaceBackgroundColor: I,
  collapsed: g,
  onCollapsedChange: C,
  expandedWidth: W,
  collapsedWidth: B,
  topContent: v,
  color: M,
  hoverColor: K,
  avatarColor: L,
  showProfile: S = !0,
  userName: Z = "User",
  userEmail: Q,
  userRole: _,
  userAvatar: F,
  showNotifications: A = !0,
  notificationCount: k = 0,
  onNotificationsClick: he,
  whatsNewCount: Ae = 0,
  onWhatsNewClick: U,
  onProfileClick: Ve,
  onSubmitRequestClick: fe,
  showSettings: P = !0,
  onSettingsClick: ne,
  settingsSections: ke,
  onSettingsItemClick: ie,
  platforms: Pe,
  currentPlatformKey: ae,
  onPlatformSelect: j,
  onLogout: pe,
  theme: Ie = "light",
  showThemeToggler: O = !0,
  onThemeToggle: Ye
}) => {
  const q = Dt(), De = q.palette.mode === "dark", ee = I ?? (De ? q.palette.background.paper : "#ffffff"), Ne = M ?? b ?? (De ? q.palette.text.primary : f), se = K ?? y ?? At(f), qe = L ?? f, le = m.useRef(null), [Ce, G] = m.useState(!1), me = _ ? _.replace(/_/g, " ") : void 0, xe = (be) => /* @__PURE__ */ e(
    ir,
    {
      name: Z,
      avatar: F,
      color: qe,
      size: be
    }
  ), Oe = A ? /* @__PURE__ */ e(
    ar,
    {
      count: k,
      onClick: he,
      color: Ne,
      hoverColor: se,
      tooltipPlacement: "right",
      testId: "panel-notifications"
    }
  ) : null, ge = S ? /* @__PURE__ */ d(
    st,
    {
      ref: le,
      onClick: () => G(!0),
      "aria-haspopup": "menu",
      "aria-expanded": Ce,
      "aria-label": "Account menu",
      "data-testid": "panel-user-button",
      sx: {
        flex: g ? "0 0 auto" : 1,
        minWidth: 0,
        justifyContent: "flex-start",
        gap: 1.25,
        p: 0.75,
        borderRadius: "10px",
        bgcolor: Ce ? se : "transparent",
        "&:hover": { bgcolor: se },
        ...ci
      },
      children: [
        g && A ? (
          // Collapsed: no room for the bell, so unread shows as a dot
          /* @__PURE__ */ e(
            ro,
            {
              color: "error",
              variant: "dot",
              overlap: "circular",
              invisible: !k,
              children: xe(36)
            }
          )
        ) : xe(g ? 36 : 40),
        g ? null : /* @__PURE__ */ d(x, { sx: { minWidth: 0, textAlign: "left" }, children: [
          /* @__PURE__ */ e(
            N,
            {
              noWrap: !0,
              sx: { fontWeight: 600, color: Ne, lineHeight: 1.3 },
              children: Z
            }
          ),
          me ? /* @__PURE__ */ e(
            N,
            {
              noWrap: !0,
              variant: "caption",
              "data-testid": "panel-user-role",
              sx: {
                display: "block",
                color: Ne,
                opacity: 0.85,
                textTransform: "uppercase",
                letterSpacing: "0.02em",
                lineHeight: 1.3
              },
              children: me
            }
          ) : null
        ] })
      ]
    }
  ) : null, E = !!Oe && (!g || !ge);
  return /* @__PURE__ */ d(
    x,
    {
      "data-testid": "panel-sidebar",
      "data-collapsed": g ? "true" : "false",
      sx: {
        flex: "1 1 auto",
        minHeight: 0,
        display: "flex",
        flexDirection: "column"
      },
      children: [
        /* @__PURE__ */ e(
          tr,
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
            headerForegroundColor: u,
            activeAccentColor: f,
            groupAccentColor: y,
            activeForegroundColor: p,
            foregroundColor: b,
            surfaceBackgroundColor: ee,
            collapsed: g,
            onCollapsedChange: C,
            expandedWidth: W,
            collapsedWidth: B,
            topContent: v,
            footer: ge || E ? /* @__PURE__ */ d(
              ue,
              {
                direction: "row",
                sx: {
                  alignItems: "center",
                  gap: 0.5,
                  justifyContent: "center"
                },
                children: [
                  ge,
                  E ? Oe : null
                ]
              }
            ) : void 0
          }
        ),
        S ? /* @__PURE__ */ e(
          li,
          {
            open: Ce,
            anchorEl: le.current,
            onClose: () => G(!1),
            width: Math.max(W - 16, 240),
            renderAvatar: xe,
            userName: Z,
            userEmail: Q,
            roleLabel: me,
            accentColor: f,
            tint: se,
            showThemeToggler: O,
            theme: Ie,
            onThemeToggle: Ye,
            showNotifications: A,
            notificationCount: k,
            onNotificationsClick: he,
            whatsNewCount: Ae,
            onWhatsNewClick: U,
            onProfileClick: Ve,
            onSubmitRequestClick: fe,
            showSettings: P,
            onSettingsClick: ne,
            settingsSections: ke,
            onSettingsItemClick: ie,
            onLinkClick: n,
            platforms: Pe,
            currentPlatformKey: ae,
            onPlatformSelect: j,
            onLogout: pe
          }
        ) : null
      ]
    }
  );
}, ui = ({
  compact: t,
  color: r,
  hoverColor: o,
  showProfile: n,
  ...i
}) => {
  var W;
  const {
    avatarColor: h,
    showNotifications: s,
    notificationCount: l,
    onNotificationsClick: c,
    userName: u = "User",
    userRole: f,
    userAvatar: y
  } = i, p = m.useRef(null), [b, I] = m.useState(
    null
  ), g = !!b;
  if (!s && !n)
    return null;
  const C = {
    "&.Mui-focusVisible": { outline: "2px solid", outlineColor: r }
  };
  return /* @__PURE__ */ d(at, { children: [
    /* @__PURE__ */ d(
      ue,
      {
        ref: p,
        direction: t ? "column" : "row",
        spacing: 0.5,
        "data-testid": "sidebar-footer",
        sx: { width: "100%", alignItems: "center" },
        children: [
          n && /* @__PURE__ */ e(
            Re,
            {
              title: t ? u : "",
              placement: "right",
              arrow: !0,
              children: /* @__PURE__ */ e(
                st,
                {
                  onClick: () => I(p.current),
                  "aria-label": `Account menu for ${u}`,
                  "aria-haspopup": "menu",
                  "aria-expanded": g,
                  "data-testid": "sidebar-user",
                  sx: {
                    flex: t ? "0 0 auto" : "1 1 auto",
                    minWidth: 0,
                    gap: 1.25,
                    p: t ? 0.5 : "6px 8px",
                    justifyContent: "flex-start",
                    borderRadius: "8px",
                    color: r,
                    bgcolor: g ? o : "transparent",
                    "&:hover": { bgcolor: o },
                    ...C
                  },
                  children: /* @__PURE__ */ e(
                    xo,
                    {
                      name: u,
                      role: f,
                      avatar: y,
                      avatarColor: h,
                      showText: !t
                    }
                  )
                }
              )
            }
          ),
          s && /* @__PURE__ */ e(
            ar,
            {
              count: l,
              onClick: c,
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
      go,
      {
        anchorEl: b,
        onClose: () => I(null),
        placement: t ? "beside" : "above",
        width: t || (W = p.current) == null ? void 0 : W.clientWidth,
        ...i
      }
    )
  ] });
}, hi = 'input, textarea, [contenteditable="true"]', jr = (t) => {
  var r;
  (r = t == null ? void 0 : t.querySelector(hi)) == null || r.focus();
}, fi = ({
  search: t,
  mode: r,
  onExpand: o,
  autoFocus: n = !1,
  onAutoFocused: i,
  color: h,
  hoverColor: s
}) => {
  const l = m.useRef(null), [c, u] = m.useState(null);
  return m.useEffect(() => {
    r === "full" && n && (jr(l.current), i == null || i());
  }, [r, n, i]), r === "full" ? /* @__PURE__ */ e(
    x,
    {
      ref: l,
      "data-testid": "sidebar-search",
      sx: { width: "100%" },
      children: t
    }
  ) : /* @__PURE__ */ d(
    x,
    {
      "data-testid": "sidebar-search",
      sx: { width: "100%", display: "flex", justifyContent: "center" },
      children: [
        /* @__PURE__ */ e(Re, { title: "Search", placement: "right", arrow: !0, children: /* @__PURE__ */ e(
          Te,
          {
            "aria-label": "Search",
            onClick: (f) => r === "expand" ? o == null ? void 0 : o() : u(f.currentTarget),
            sx: {
              width: 44,
              height: 44,
              color: h,
              borderRadius: "8px",
              "&:hover": { bgcolor: s }
            },
            children: /* @__PURE__ */ e(Zr, {})
          }
        ) }),
        /* @__PURE__ */ e(
          oo,
          {
            open: !!c,
            anchorEl: c,
            onClose: () => u(null),
            anchorOrigin: { vertical: "top", horizontal: "right" },
            transformOrigin: { vertical: "top", horizontal: "left" },
            TransitionProps: {
              onEntered: (f) => jr(f)
            },
            slotProps: { paper: { sx: { ml: 1, p: 1.5, width: 360 } } },
            children: t
          }
        )
      ]
    }
  );
}, pi = 100, Xr = 80, Yt = 56, mi = 300, qt = 288, Jt = 72, Vr = "lumora:sidebar-collapsed", Zt = "width 200ms ease, left 200ms ease", xi = 68, gi = { xs: 2, md: 5 }, bi = () => typeof navigator < "u" && /Mac|iPhone|iPad/.test(navigator.platform || navigator.userAgent), Si = (t, r) => {
  const o = (n) => typeof n == "number" ? r.spacing(n) : n;
  return typeof t == "object" ? Object.fromEntries(
    Object.entries(t).map(([n, i]) => [n, o(i)])
  ) : o(t);
}, Ia = ({
  children: t,
  sidebarLinks: r = [],
  secondarySidebarLinks: o = [],
  appName: n = "Dashboard",
  showSidebar: i = !0,
  showSidebarRailTitles: h = !1,
  sidebarVariant: s = "rail",
  mobileNavigation: l = "bottom-bar",
  mobileBottomBarLinks: c,
  logo: u,
  onBrandClick: f,
  searchComponent: y,
  brandColor: p,
  contentPadding: b = gi,
  userMenuItems: I,
  sidebarBackgroundColor: g,
  sidebarHeaderBackgroundColor: C,
  groupAccentColor: W,
  activeSidebarForegroundColor: B,
  enableRefreshToken: v = !1,
  activePath: M,
  onLinkClick: K,
  showProfile: L = !0,
  userName: S,
  userRole: Z,
  userAvatar: Q,
  userEmail: _,
  onLogout: F,
  showSettings: A = !0,
  onSettingsClick: k,
  onProfileClick: he,
  onSubmitRequestClick: Ae,
  settingsSections: U,
  onSettingsItemClick: Ve,
  showNotifications: fe = !0,
  notificationCount: P = 0,
  NotificationSidebarContent: ne,
  whatsNewCount: ke = 0,
  onNotificationsClick: ie,
  onWhatsNewClick: Pe,
  platforms: ae,
  currentPlatformKey: j,
  onPlatformSelect: pe,
  onVerify: Ie,
  alertProps: O,
  style: Ye,
  sidebarStyles: q,
  contentStyles: De,
  accentColor: ee,
  sidebarAccentColor: Ne,
  sidebarForegroundColor: se,
  contentBackgroundColor: qe,
  theme: le = "light",
  showThemeToggler: Ce = !1,
  onThemeToggle: G,
  GlobalChatSidebar: me,
  useChatSidebar: xe,
  chatPanelMode: Oe = "docked",
  chatPanelPosition: ge = "right",
  chatPanelWidth: E = 420,
  onChatClose: X,
  showAssistant: be = !1,
  assistantPlacement: ze = "sidebar",
  assistantShortcut: a = "j",
  onAssistantClick: w,
  assistantActive: D = !1,
  assistantBusy: R = !1,
  customNavbar: H,
  customNavbarProps: V,
  redirectToLogin: Se,
  apiBaseUrl: te
}) => {
  const Be = Po(), ce = Ho(Be.breakpoints.down("md")), sr = _r(
    () => Yr(kn(le)),
    [le]
  ), Wt = le === "dark", lr = ee ?? "#01584f", He = Ne ?? lr, kt = qe ?? (Wt ? "hsl(220, 35%, 9%)" : "#f2f9fc"), Je = s === "collapsible", zt = s === "panel", wo = zt && i && !ce, $e = s === "rail-labeled", cr = Je || $e, Ue = g ?? (Wt ? "hsl(220, 30%, 7%)" : "#ffffff"), bt = C ?? Ue, Me = se ?? (Wt ? "#ffffff" : He), lt = W ?? At(Me), ct = C ? er(bt) : Me, dr = (T) => /* @__PURE__ */ e(
    we,
    {
      role: "img",
      "aria-label": `${n} logo`,
      sx: {
        width: 28,
        height: 28,
        flexShrink: 0,
        bgcolor: T,
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
  ), St = p ?? ct, Bt = u ?? dr(St), yo = u ?? dr(p ?? Me), [Ke, vo] = Qe(
    () => so(Vr) ?? !1
  ), Mt = (T) => {
    vo(T), lo(Vr, T);
  }, [Ro, ur] = Qe(!1), Io = Fo(() => ur(!1), []);
  let Ee = 0;
  i && !ce && ($e ? Ee = Xr : Je || zt ? Ee = Ke ? Jt : qt : Ee = pi);
  const [hr, Ze] = Qe(!1), [fr, Lt] = Qe(!1), de = ce && l === "bottom-bar", pr = `calc(${bo}px + env(safe-area-inset-bottom, 0px))`, [Ft, mr] = Qe({ open: !1, tab: "notifications" }), xr = () => mr((T) => ({ ...T, open: !1 })), gr = fe && !!ne, [Co, Oo] = Qe(!0), [_o, To] = Qe(!1), Pt = xe == null ? void 0 : xe(), br = (Pt == null ? void 0 : Pt.isOpen) ?? !1, Sr = Oe === "floating" ? "floating" : "docked", Ao = Sr === "docked" && br && me && !ce ? E : 0, Et = Gt(Ie), Er = Gt(!1), wr = _r(
    () => Wn(te),
    [te]
  );
  vt(() => {
    Et.current = Ie;
  }, [Ie]);
  const Ht = Gt(w);
  Ht.current = w;
  const dt = be && a ? a.toLowerCase() : null;
  vt(() => {
    if (!dt)
      return;
    const T = (re) => {
      (re.metaKey || re.ctrlKey) && !re.altKey && !re.shiftKey && re.key.toLowerCase() === dt && Ht.current && (re.preventDefault(), Ht.current());
    };
    return window.addEventListener("keydown", T), () => window.removeEventListener("keydown", T);
  }, [dt]);
  const yr = (T) => {
    const re = F(T);
    re instanceof Promise && re.catch((Ge) => {
      console.error("Error in logout handler:", Ge);
    });
  };
  if (vt(() => {
    (() => {
      var re;
      try {
        const { isAuthenticated: Ge } = Dn();
        if (!Ge) {
          console.log("No session found, redirecting to login"), gt(), Se();
          return;
        }
        if (!Er.current) {
          const { user: ht, error: Kt } = Nn();
          if (ht && !Kt) {
            const zo = {
              name: ht.name || "",
              email: ht.email || "",
              profilePicture: ht.profilePicture || "",
              role: ht.role || ""
            };
            Er.current = !0, (re = Et.current) == null || re.call(Et, zo);
          } else
            Kt && console.error("Error getting user data:", Kt);
        }
        To(!0);
      } catch (Ge) {
        console.error("Error checking session:", Ge), gt(), Se();
      } finally {
        Oo(!1);
      }
    })();
  }, [Se]), vt(() => {
    v && zn(wr, Se);
  }, [v, wr]), Co)
    return /* @__PURE__ */ e(Or, { theme: sr, children: /* @__PURE__ */ d(
      we,
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
            $o,
            {
              size: 60,
              thickness: 4,
              sx: { color: lr }
            }
          ),
          /* @__PURE__ */ e(we, { sx: { mt: 2, color: "text.secondary" }, children: "Checking session..." })
        ]
      }
    ) });
  if (!_o)
    return null;
  const ut = y ?? (H ? /* @__PURE__ */ e(H, { ...V }) : null), vr = (T) => {
    Ze(!1), Lt(!1), mr({ open: !0, tab: T });
  }, $t = ne && (() => vr("notifications")), Do = ne && (() => vr("whats-new")), Rr = {
    avatarColor: He,
    menuItems: I,
    showNotifications: fe,
    notificationCount: P,
    onNotificationsClick: $t,
    showProfile: L,
    userName: S,
    userRole: Z,
    userAvatar: Q,
    showSettings: A,
    onSettingsClick: k,
    showThemeToggler: Ce,
    theme: le,
    onThemeToggle: G,
    onLogout: yr
  }, Ut = (T) => /* @__PURE__ */ e(
    ui,
    {
      ...Rr,
      compact: T,
      color: Me,
      hoverColor: lt
    }
  ), Ir = dt ? [bi() ? "⌘" : "Ctrl", dt.toUpperCase()] : void 0, No = (T) => be && ze === "sidebar" ? /* @__PURE__ */ e(
    Mr,
    {
      variant: T ? "sidebar-icon" : "sidebar",
      onClick: w,
      active: D,
      busy: R,
      shortcutKeys: Ir,
      accentColor: Me
    }
  ) : null, Wo = (T) => ut ? /* @__PURE__ */ e(
    fi,
    {
      search: ut,
      mode: T,
      onExpand: () => {
        Mt(!1), ur(!0);
      },
      autoFocus: Ro,
      onAutoFocused: Io,
      color: Me,
      hoverColor: lt
    }
  ) : null, wt = (T) => {
    const re = No(T !== "full"), Ge = Wo(T);
    return re || Ge ? /* @__PURE__ */ d(
      Go,
      {
        spacing: 1.5,
        sx: { alignItems: T === "full" ? "stretch" : "center" },
        children: [
          re,
          Ge
        ]
      }
    ) : void 0;
  }, ko = Si(
    b,
    Be
  );
  return /* @__PURE__ */ e(Or, { theme: sr, children: /* @__PURE__ */ d(
    we,
    {
      sx: {
        display: "flex",
        minHeight: "100vh",
        ...Ye
      },
      children: [
        /* @__PURE__ */ e(Uo, {}),
        ce && /* @__PURE__ */ e(
          Qn,
          {
            height: Yt,
            onMenuClick: i && !de ? () => Ze(!0) : void 0,
            appName: n,
            logo: Bt,
            onBrandClick: f,
            background: bt,
            color: ct,
            brandColor: St,
            endContent: fe ? /* @__PURE__ */ e(
              ar,
              {
                count: P,
                onClick: $t,
                color: ct,
                hoverColor: lt,
                tooltipPlacement: "bottom",
                testId: "mobile-notifications"
              }
            ) : void 0
          }
        ),
        i && !ce && cr && /* @__PURE__ */ d(
          we,
          {
            component: "aside",
            sx: {
              width: Ee,
              minWidth: Ee,
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
              bgcolor: Je ? Ue : void 0,
              borderRight: "1px solid",
              borderColor: "divider",
              transition: Zt,
              ...q
            },
            children: [
              /* @__PURE__ */ e(
                tr,
                {
                  mainLinks: r,
                  secondaryLinks: o,
                  activePath: M,
                  onLinkClick: K,
                  showHeaderBar: Je,
                  logo: Bt,
                  title: n,
                  onBrandClick: f,
                  brandColor: St,
                  headerBackgroundColor: Je ? bt : void 0,
                  headerForegroundColor: Je ? ct : void 0,
                  activeAccentColor: He,
                  groupAccentColor: W,
                  activeForegroundColor: B,
                  foregroundColor: se,
                  surfaceBackgroundColor: Ue,
                  collapsed: $e ? !0 : Ke,
                  onCollapsedChange: $e ? void 0 : Mt,
                  showLabels: $e,
                  expandedWidth: qt,
                  collapsedWidth: $e ? Xr : Jt,
                  topContent: wt(
                    $e ? "popover" : Ke ? "expand" : "full"
                  ),
                  footer: Ut(
                    $e || Ke
                  )
                }
              ),
              Je && (O == null ? void 0 : O.show) && !Ke && /* @__PURE__ */ e(Ct, { ...O })
            ]
          }
        ),
        wo && /* @__PURE__ */ d(
          we,
          {
            component: "aside",
            sx: {
              width: Ee,
              minWidth: Ee,
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
              transition: Zt,
              ...q
            },
            children: [
              /* @__PURE__ */ e(
                di,
                {
                  mainLinks: r,
                  secondaryLinks: o,
                  activePath: M,
                  onLinkClick: K,
                  logo: Bt,
                  title: n,
                  onBrandClick: f,
                  brandColor: St,
                  headerBackgroundColor: bt,
                  headerForegroundColor: ct,
                  activeAccentColor: He,
                  groupAccentColor: W,
                  activeForegroundColor: B,
                  foregroundColor: se,
                  surfaceBackgroundColor: Ue,
                  collapsed: Ke,
                  onCollapsedChange: Mt,
                  expandedWidth: qt,
                  collapsedWidth: Jt,
                  topContent: wt(
                    Ke ? "expand" : "full"
                  ),
                  color: Me,
                  hoverColor: lt,
                  avatarColor: He,
                  showProfile: L,
                  userName: S,
                  userEmail: _,
                  userRole: Z,
                  userAvatar: Q,
                  showNotifications: fe,
                  notificationCount: P,
                  onNotificationsClick: gr ? $t : ie,
                  whatsNewCount: ke,
                  onWhatsNewClick: gr ? Do : Pe,
                  onProfileClick: he,
                  onSubmitRequestClick: Ae,
                  showSettings: A,
                  onSettingsClick: k,
                  settingsSections: U,
                  onSettingsItemClick: Ve,
                  platforms: ae,
                  currentPlatformKey: j,
                  onPlatformSelect: pe,
                  onLogout: yr,
                  theme: le,
                  showThemeToggler: Ce,
                  onThemeToggle: G
                }
              ),
              (O == null ? void 0 : O.show) && !Ke && /* @__PURE__ */ e(Ct, { ...O })
            ]
          }
        ),
        i && !ce && !cr && !zt && /* @__PURE__ */ e(
          Tr,
          {
            variant: "permanent",
            sx: {
              width: Ee,
              flexShrink: 0,
              zIndex: 2,
              "& .MuiDrawer-paper": {
                width: Ee,
                boxSizing: "border-box",
                bgcolor: kt,
                borderRight: "none"
              },
              ...q
            },
            children: /* @__PURE__ */ d(
              we,
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
                    we,
                    {
                      sx: {
                        display: "flex",
                        justifyContent: "center",
                        mb: 1.5
                      },
                      children: /* @__PURE__ */ e(
                        Tt,
                        {
                          logo: yo,
                          appName: n,
                          onClick: f,
                          color: p ?? Me,
                          testId: "sidebar-header-brand"
                        }
                      )
                    }
                  ),
                  wt("popover"),
                  /* @__PURE__ */ d(
                    we,
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
                          Xn,
                          {
                            mainLinks: r,
                            secondaryLinks: o,
                            activePath: M,
                            onLinkClick: K,
                            accentColor: He,
                            surfaceBackgroundColor: kt,
                            railShowTitles: h
                          }
                        ),
                        (O == null ? void 0 : O.show) && /* @__PURE__ */ e(Ct, { ...O })
                      ]
                    }
                  ),
                  /* @__PURE__ */ e(we, { sx: { py: 1.5 }, children: Ut(!0) })
                ]
              }
            )
          }
        ),
        i && ce && /* @__PURE__ */ d(
          Ko,
          {
            anchor: de ? "bottom" : "left",
            open: hr,
            onOpen: () => Ze(!0),
            onClose: () => Ze(!1),
            disableSwipeToOpen: !0,
            sx: { zIndex: (T) => T.zIndex.drawer + 1 },
            slotProps: {
              paper: {
                "aria-label": "Navigation",
                sx: {
                  bgcolor: Ue,
                  backgroundImage: "none",
                  ...de ? {
                    maxHeight: "min(80vh, 640px)",
                    borderTopLeftRadius: "16px",
                    borderTopRightRadius: "16px",
                    pb: "env(safe-area-inset-bottom, 0px)"
                  } : { maxWidth: "85vw" }
                }
              }
            },
            children: [
              de && // Grab handle: the sheet can be swiped down to close
              /* @__PURE__ */ e(
                we,
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
                tr,
                {
                  mainLinks: r,
                  secondaryLinks: o,
                  activePath: M,
                  onLinkClick: (T) => {
                    K == null || K(T), Ze(!1);
                  },
                  onLinkAction: () => Ze(!1),
                  collapsed: !1,
                  expandedWidth: de ? "100%" : mi,
                  activeAccentColor: He,
                  groupAccentColor: W,
                  activeForegroundColor: B,
                  foregroundColor: se,
                  surfaceBackgroundColor: Ue,
                  topInsetPx: de ? 8 : 0,
                  topContent: de ? void 0 : wt("full"),
                  footer: de ? void 0 : Ut(!1)
                }
              ),
              (O == null ? void 0 : O.show) && /* @__PURE__ */ e(Ct, { ...O })
            ]
          }
        ),
        de && ut && /* @__PURE__ */ e(
          Zn,
          {
            open: fr,
            onClose: () => Lt(!1),
            search: ut
          }
        ),
        de && /* @__PURE__ */ e(
          Jn,
          {
            ...Rr,
            pinnedLinks: c,
            activePath: M,
            onLinkClick: K,
            onMenuClick: i ? () => Ze(!0) : void 0,
            menuOpen: hr,
            onSearchClick: ut ? () => Lt(!0) : void 0,
            searchOpen: fr,
            showAssistant: be,
            onAssistantClick: w,
            assistantActive: D,
            showProfile: L,
            background: Ue,
            color: Me,
            activeColor: He,
            activeBackground: lt
          }
        ),
        /* @__PURE__ */ e(
          we,
          {
            component: "main",
            sx: {
              flexGrow: 1,
              "--lumora-content-padding": ko,
              // Where sticky page elements should pin (below the mobile bar)
              "--lumora-sticky-top": ce ? `${Yt}px` : "0px",
              p: "var(--lumora-content-padding)",
              width: Ee ? `calc(100% - ${Ee}px)` : "100%",
              transition: Zt,
              mt: ce ? `${Yt}px` : 0,
              // Keep the last content clear of the bottom bar
              ...de && {
                pb: `calc(var(--lumora-content-padding) + ${pr})`
              },
              backgroundColor: kt,
              ...De
            },
            children: t
          }
        ),
        me && /* @__PURE__ */ e(
          Fn,
          {
            open: br,
            variant: Sr,
            position: ge,
            width: E,
            sidebarWidthPx: Ee,
            bottomOffsetPx: be && ze === "floating" ? xi : 0,
            fullScreen: ce,
            fullScreenBottom: de ? pr : "0px",
            onClose: X,
            children: /* @__PURE__ */ e(me, {})
          }
        ),
        be && ze === "floating" && !de && /* @__PURE__ */ e(
          Mr,
          {
            variant: "floating",
            rightOffsetPx: Ao,
            shortcutKeys: Ir,
            onClick: w,
            active: D,
            busy: R
          }
        ),
        fe && ne && /* @__PURE__ */ e(
          Tr,
          {
            anchor: "right",
            open: Ft.open,
            onClose: xr,
            slotProps: {
              paper: { sx: { width: 380, maxWidth: "100vw" } }
            },
            children: /* @__PURE__ */ e(
              ne,
              {
                onClose: xr,
                initialTab: Ft.tab
              },
              Ft.tab
            )
          }
        )
      ]
    }
  ) });
};
export {
  $ as AUTH_ERROR_CODES,
  z as AuthError,
  tr as CollapsibleSidebar,
  va as FullBleedSection,
  Tn as Kbd,
  Ia as LumoraWrapper,
  gt as clearAuthTokens,
  Ia as default,
  Ra as getAuthErrorMessage,
  xt as getAuthTokens,
  Nn as getCurrentUser,
  kn as getDesignTokens,
  Dn as isAuthenticated,
  or as logAuthError,
  uo as storeAuthTokens
};
