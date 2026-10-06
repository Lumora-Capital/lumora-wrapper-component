import { jsx as e, jsxs as u, Fragment as at } from "react/jsx-runtime";
import Mo from "@mui/icons-material/KeyboardArrowDownRounded";
import Lo from "@mui/icons-material/KeyboardArrowUpRounded";
import Bo from "@mui/icons-material/KeyboardDoubleArrowLeftRounded";
import er from "@mui/icons-material/ChevronRightRounded";
import x from "@mui/material/Box";
import wr from "@mui/material/Collapse";
import Ne from "@mui/material/Divider";
import Ie from "@mui/material/IconButton";
import Rt from "@mui/material/ListItemButton";
import se from "@mui/material/ListItemIcon";
import $e from "@mui/material/ListItemText";
import le from "@mui/material/Stack";
import ge from "@mui/material/Tooltip";
import z from "@mui/material/Typography";
import { useTheme as Wt, createTheme as Gr, alpha as Ve, ThemeProvider as Rr } from "@mui/material/styles";
import * as m from "react";
import { useMemo as Ir, useState as qe, useCallback as Fo, useRef as Gt, useEffect as It } from "react";
import Qe from "@mui/material/ButtonBase";
import { useTheme as $o, useMediaQuery as Ho, Box as fe, CircularProgress as Po, CssBaseline as Uo, Drawer as Cr, SwipeableDrawer as Ko, Stack as Go } from "@mui/material";
import _r from "axios";
import Xo from "@mui/material/Card";
import jo from "@mui/material/CardContent";
import Xr from "@mui/material/Button";
import Vo from "@mui/icons-material/AutoAwesomeRounded";
import Yo from "@mui/material/Grow";
import ir from "@mui/material/Paper";
import Zo from "@mui/material/Slide";
import qo from "@mui/material/ListSubheader";
import Ce from "@mui/material/MenuItem";
import kt from "@mui/material/MenuList";
import Jo from "@mui/material/Popper";
import jr from "@mui/icons-material/MenuRounded";
import Vr from "@mui/icons-material/SearchRounded";
import Yr from "@mui/icons-material/LogoutRounded";
import Zr from "@mui/icons-material/NotificationsNoneOutlined";
import qr from "@mui/icons-material/SettingsOutlined";
import Qo from "@mui/material/Avatar";
import en from "@mui/material/Menu";
import Or from "@mui/material/ToggleButton";
import tn from "@mui/material/ToggleButtonGroup";
import rn from "@mui/material/Drawer";
import on from "@mui/material/AppBar";
import nn from "@mui/material/Toolbar";
import Jr from "@mui/material/Badge";
import an from "@mui/icons-material/DarkModeOutlined";
import sn from "@mui/icons-material/LayersOutlined";
import ln from "@mui/icons-material/LightModeOutlined";
import cn from "@mui/icons-material/SettingsBrightnessOutlined";
import Qr from "@mui/material/Popover";
import dn from "@mui/icons-material/ArrowOutwardRounded";
import un from "@mui/icons-material/CheckRounded";
import hn from "@mui/icons-material/ShieldOutlined";
import pn from "@mui/icons-material/ExpandMoreRounded";
const Dt = ({
  logo: t,
  title: r,
  appName: o,
  onClick: n,
  color: i,
  testId: h
}) => {
  const a = {
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
    Qe,
    {
      onClick: n,
      "aria-label": `${o} home`,
      "data-testid": h,
      focusRipple: !0,
      sx: {
        ...a,
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
  ) : /* @__PURE__ */ e(le, { direction: "row", "data-testid": h, sx: a, children: l });
}, gt = (t) => {
  var r;
  return !!((r = t.subitems) != null && r.length);
}, Tt = (t, r) => t ? `${t}/${r.text}` : r.text, Je = (t, r) => {
  var o;
  return r ? t.path && r === t.path ? !0 : ((o = t.subitems) == null ? void 0 : o.some((n) => Je(n, r))) ?? !1 : !1;
}, je = (t, r) => !!(r && t.path === r), eo = (t, r) => (t ?? []).flatMap((o) => {
  const n = o.icon ?? r;
  return gt(o) ? eo(o.subitems, n) : o.path ? [{ sub: o, icon: n }] : [];
}), tr = (t) => {
  const r = to(t);
  if (!r)
    return "#ffffff";
  const [o, n, i] = r.map((a) => {
    const l = a / 255;
    return l <= 0.03928 ? l / 12.92 : ((l + 0.055) / 1.055) ** 2.4;
  });
  return 0.2126 * o + 0.7152 * n + 0.0722 * i > 0.5 ? "#0b1f1c" : "#ffffff";
}, Nt = (t) => {
  const r = to(t);
  if (!r)
    return "rgba(1, 88, 79, 0.12)";
  const [o, n, i] = r;
  return `rgba(${o}, ${n}, ${i}, 0.14)`;
}, to = (t) => {
  let r = t.trim().replace(/^#/, "");
  if (r.length === 3 && (r = r.split("").map((n) => n + n).join("")), r.length !== 6 || /[^0-9a-fA-F]/.test(r))
    return null;
  const o = parseInt(r, 16);
  return [o >> 16 & 255, o >> 8 & 255, o & 255];
}, ro = () => typeof window < "u" && !!window.localStorage, oo = (t) => {
  if (!ro())
    return null;
  try {
    const r = window.localStorage.getItem(t);
    return r === null ? null : r === "true";
  } catch (r) {
    return console.warn("Failed to read sidebar collapsed state:", r), null;
  }
}, no = (t, r) => {
  if (ro())
    try {
      window.localStorage.setItem(t, r ? "true" : "false");
    } catch (o) {
      console.warn("Failed to persist sidebar collapsed state:", o);
    }
}, fn = (t) => {
  typeof window > "u" || window.open(t, "_blank", "noopener,noreferrer");
}, io = (t) => t.replace(/_/g, " ").split(/\s+/).filter(Boolean).join(" ").toUpperCase(), mn = 264, xn = 72, gn = "lumora:sidebar-collapsed", bn = "width 200ms ease", Xt = 64, Tr = 28, Sn = 16, Ct = {
  "&:focus, &:focus-visible": { outline: "none" }
}, En = 16, vn = 14, yn = 4, wn = 2.5, Ar = "0.7rem", Dr = 22, tt = ({ text: t, variant: r = "body1", center: o = !1, fontSize: n, fontWeight: i }) => {
  const h = m.useRef(null), [a, l] = m.useState(!1), c = m.useCallback(() => {
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
    ge,
    {
      title: t,
      placement: "right",
      arrow: !0,
      enterDelay: 400,
      disableHoverListener: !a,
      disableFocusListener: !a,
      disableTouchListener: !a,
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
}, Rn = ({
  open: t,
  size: r = En
}) => t ? /* @__PURE__ */ e(Lo, { sx: { fontSize: r, opacity: 0.75 } }) : /* @__PURE__ */ e(Mo, { sx: { fontSize: r, opacity: 0.75 } }), Nr = ({ open: t }) => /* @__PURE__ */ e(
  er,
  {
    sx: {
      fontSize: 20,
      opacity: 0.75,
      transition: "transform 150ms ease",
      transform: t ? "rotate(90deg)" : "none"
    }
  }
), _t = 600, rr = ({
  mainLinks: t,
  secondaryLinks: r = [],
  activePath: o,
  onLinkClick: n,
  onLinkAction: i,
  logo: h,
  title: a,
  onBrandClick: l,
  showHeaderBar: c = !1,
  headerBackgroundColor: d,
  headerForegroundColor: p,
  brandColor: w,
  activeAccentColor: f = "#01584f",
  groupAccentColor: g,
  activeForegroundColor: R,
  foregroundColor: b,
  surfaceBackgroundColor: v,
  collapsed: L,
  defaultCollapsed: N = !1,
  onCollapsedChange: y,
  persistKey: B = gn,
  expandedWidth: j = mn,
  collapsedWidth: P = xn,
  showLabels: E = !1,
  topInsetPx: te = 0,
  topContent: re,
  footer: I
}) => {
  const U = Wt(), W = U.palette.mode === "dark", k = L !== void 0, [oe, be] = m.useState(
    () => oo(B) ?? N
  ), G = k ? !!L : oe, [Se, _e] = m.useState(
    {}
  ), C = R ?? tr(f), ce = {
    bgcolor: f,
    color: C,
    "& .MuiListItemIcon-root": { color: C }
  }, We = {
    bgcolor: f,
    color: C,
    borderRadius: "8px"
  }, K = g ?? Nt(f), Oe = v ?? (W ? U.palette.background.paper : "#ffffff"), Y = b ?? (W ? "text.primary" : f), de = d ?? Oe, A = p ?? (d ? tr(de) : b ?? (W ? U.palette.text.primary : f)), ke = Nt(A), q = (s) => {
    n == null || n(s);
  }, He = () => {
    const s = !G;
    k || (be(s), no(B, s)), y == null || y(s);
  }, ze = (s, _) => {
    _e((F) => ({ ...F, [s]: !_ }));
  }, Ee = (s, _) => Se[_] ?? Je(s, o), $ = (s, _, F) => ({
    color: s ? C : Y,
    bgcolor: s ? f : "transparent",
    "& .MuiListItemIcon-root": {
      color: s ? C : Y,
      minWidth: F
    },
    "&:hover": s || E ? ce : { bgcolor: _ }
  }), Me = {
    "&.Mui-selected": {
      bgcolor: f
    },
    "&.Mui-selected:hover": ce
  }, ne = (s) => {
    const _ = je(s, o), F = /* @__PURE__ */ u(
      Rt,
      {
        disabled: !s.path,
        selected: _,
        onClick: () => s.path && q(s.path),
        "data-testid": `sidebar-item-${s.text}`,
        "data-active": _ ? "true" : "false",
        sx: {
          borderRadius: "8px",
          py: 1.25,
          px: 1.5,
          // Room for the action button laid over the row's end
          ...s.action && { pr: 6 },
          ...$(_, K, 36),
          ...Me
        },
        children: [
          /* @__PURE__ */ e(se, { children: s.icon }),
          /* @__PURE__ */ e(
            $e,
            {
              disableTypography: !0,
              primary: /* @__PURE__ */ e(
                tt,
                {
                  text: s.text,
                  fontWeight: _t
                }
              )
            }
          )
        ]
      },
      s.text
    );
    if (!s.action)
      return F;
    const { action: O } = s;
    return /* @__PURE__ */ u(x, { sx: { position: "relative" }, children: [
      F,
      /* @__PURE__ */ e(ge, { title: O.label, placement: "right", arrow: !0, children: /* @__PURE__ */ e(
        Ie,
        {
          "aria-label": O.label,
          "data-testid": `sidebar-action-${s.text}`,
          onClick: () => {
            O.onClick(), i == null || i();
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
            borderColor: _ ? "rgba(255, 255, 255, 0.35)" : K,
            color: _ ? C : Y,
            "&:hover": {
              bgcolor: _ ? "rgba(255, 255, 255, 0.15)" : K
            },
            "& .MuiSvgIcon-root": { fontSize: 18 },
            // No lingering outline after a click; a clear ring for keyboard focus
            "&:focus:not(.Mui-focusVisible)": {
              outline: "none"
            },
            "&.Mui-focusVisible": {
              outline: "2px solid",
              outlineColor: _ ? C : Y,
              outlineOffset: 1
            }
          },
          children: O.icon
        }
      ) })
    ] }, s.text);
  }, ue = (s) => {
    const _ = Je(s, o), F = je(s, o), O = Tt("", s), D = Ee(s, O);
    return /* @__PURE__ */ u(
      x,
      {
        "data-testid": `sidebar-group-${s.text}`,
        sx: {
          borderRadius: "8px",
          bgcolor: _ ? K : "transparent"
        },
        children: [
          /* @__PURE__ */ u(
            Rt,
            {
              onClick: () => ze(O, D),
              "data-testid": `sidebar-item-${s.text}`,
              "data-active": F ? "true" : "false",
              "aria-expanded": D,
              sx: {
                borderRadius: "8px",
                py: 1.25,
                px: 1.5,
                ...$(F, K, 36)
              },
              children: [
                /* @__PURE__ */ e(se, { children: s.icon }),
                /* @__PURE__ */ e(
                  $e,
                  {
                    disableTypography: !0,
                    primary: /* @__PURE__ */ e(
                      tt,
                      {
                        text: s.text,
                        fontWeight: _t
                      }
                    )
                  }
                ),
                /* @__PURE__ */ e(Nr, { open: D })
              ]
            }
          ),
          /* @__PURE__ */ e(wr, { in: D, timeout: "auto", unmountOnExit: !0, children: /* @__PURE__ */ e(
            x,
            {
              "data-testid": `sidebar-children-${s.text}`,
              sx: { pb: 0.5 },
              children: s.subitems.map(
                (V) => he(V, O, 1)
              )
            }
          ) })
        ]
      },
      s.text
    );
  }, he = (s, _, F) => {
    const O = Tt(_, s), D = yn + (F - 1) * wn;
    if (gt(s)) {
      const we = Je(s, o), J = je(s, o), Q = Ee(s, O);
      return /* @__PURE__ */ u(x, { "data-testid": `sidebar-group-${s.text}`, children: [
        /* @__PURE__ */ u(
          Rt,
          {
            onClick: () => ze(O, Q),
            "data-testid": `sidebar-subitem-${s.text}`,
            "data-active": we ? "true" : "false",
            "aria-expanded": Q,
            sx: {
              borderRadius: "8px",
              mx: 0.5,
              py: 0.75,
              pl: D,
              ...$(J, "action.hover", 32)
            },
            children: [
              s.icon ? /* @__PURE__ */ e(se, { children: s.icon }) : null,
              /* @__PURE__ */ e(
                $e,
                {
                  disableTypography: !0,
                  primary: /* @__PURE__ */ e(
                    tt,
                    {
                      text: s.text,
                      fontWeight: _t
                    }
                  )
                }
              ),
              /* @__PURE__ */ e(Nr, { open: Q })
            ]
          }
        ),
        /* @__PURE__ */ e(wr, { in: Q, timeout: "auto", unmountOnExit: !0, children: /* @__PURE__ */ e(x, { "data-testid": `sidebar-children-${s.text}`, children: s.subitems.map(
          (ct) => he(ct, O, F + 1)
        ) }) })
      ] }, O);
    }
    const V = je(s, o);
    return /* @__PURE__ */ u(
      Rt,
      {
        selected: V,
        disabled: !s.path,
        onClick: () => s.path && q(s.path),
        "data-testid": `sidebar-subitem-${s.text}`,
        "data-active": V ? "true" : "false",
        sx: {
          borderRadius: "8px",
          mx: 0.5,
          py: 0.75,
          pl: D,
          ...$(V, "action.hover", 32),
          ...Me
        },
        children: [
          s.icon ? /* @__PURE__ */ e(se, { children: s.icon }) : null,
          /* @__PURE__ */ e(
            $e,
            {
              disableTypography: !0,
              primary: /* @__PURE__ */ e(
                tt,
                {
                  text: s.text,
                  fontWeight: _t
                }
              )
            }
          )
        ]
      },
      O
    );
  }, ie = (s, _, F, O, D, V) => {
    const we = !D, J = /* @__PURE__ */ u(
      Ie,
      {
        "aria-label": _,
        disabled: we,
        onClick: D,
        "data-testid": (V == null ? void 0 : V.testId) ?? `sidebar-item-${_}`,
        "data-active": O ? "true" : "false",
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
          color: O ? C : Y,
          bgcolor: O ? f : "transparent",
          "& .MuiSvgIcon-root": {
            fontSize: Dr
          },
          "&:hover": We,
          ...Ct
        } : {
          // Icon-only collapsed rail (collapsible variant):
          // original hover — accent when active, else a subtle
          // tint; no foreground change.
          width: 44,
          height: 44,
          color: O ? C : Y,
          bgcolor: O ? f : "transparent",
          borderRadius: O ? "8px" : "50%",
          "&:hover": {
            bgcolor: O ? f : V != null && V.insideGroup ? "action.hover" : K,
            borderRadius: "8px"
          },
          ...Ct
        },
        children: [
          F,
          E ? /* @__PURE__ */ e(
            tt,
            {
              text: _,
              variant: "caption",
              center: !0,
              fontSize: Ar
            }
          ) : null
        ]
      }
    );
    return E ? we ? /* @__PURE__ */ e("span", { children: J }, s) : /* @__PURE__ */ e(m.Fragment, { children: J }, s) : /* @__PURE__ */ e(ge, { title: _, placement: "right", arrow: !0, children: we ? /* @__PURE__ */ e("span", { children: J }) : J }, s);
  }, S = (s) => {
    const _ = Je(s, o), F = je(s, o), O = Tt("", s), D = Ee(s, O), V = /* @__PURE__ */ u(
      Ie,
      {
        "aria-label": s.text,
        "aria-expanded": D,
        onClick: () => ze(O, D),
        "data-testid": `sidebar-item-${s.text}`,
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
          color: F ? C : Y,
          bgcolor: F ? f : "transparent",
          // rail-labeled: active AND hover share the highlight. collapsible:
          // original behavior — accent only when active; the outer pill
          // supplies the idle-hover tint, so the button stays transparent.
          "&:hover": E ? { bgcolor: f, color: C } : {
            bgcolor: F ? f : "transparent"
          },
          ...Ct
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
                  fontSize: Dr
                }
              },
              children: s.icon
            }
          ) : s.icon,
          E ? /* @__PURE__ */ e(
            tt,
            {
              text: s.text,
              variant: "caption",
              center: !0,
              fontSize: Ar
            }
          ) : null,
          /* @__PURE__ */ e(Rn, { open: D, size: vn })
        ]
      }
    ), we = E ? V : /* @__PURE__ */ e(ge, { title: s.text, placement: "right", arrow: !0, children: V });
    return /* @__PURE__ */ u(
      x,
      {
        "data-testid": `sidebar-group-${s.text}`,
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
          bgcolor: _ ? K : "transparent",
          ...E ? {} : { "&:hover": { bgcolor: K } }
        },
        children: [
          we,
          D ? eo(s.subitems, s.icon).map(
            ({ sub: J, icon: Q }) => ie(
              J.path,
              J.text,
              Q,
              je(J, o),
              () => q(J.path),
              {
                insideGroup: !0,
                testId: `sidebar-subitem-${J.text}`
              }
            )
          ) : null
        ]
      },
      s.text
    );
  }, X = (s) => /* @__PURE__ */ e(
    x,
    {
      sx: {
        width: "100%",
        display: "flex",
        justifyContent: "center"
      },
      children: ie(
        s.text,
        s.text,
        s.icon,
        je(s, o),
        s.path ? () => q(s.path) : void 0
      )
    },
    s.text
  ), Le = (s) => gt(s) ? G ? S(s) : ue(s) : G ? X(s) : ne(s), ve = (s) => /* @__PURE__ */ e(
    le,
    {
      spacing: 0.5,
      sx: {
        width: "100%",
        alignItems: G ? "center" : "stretch"
      },
      children: s.map(Le)
    }
  ), Te = G ? P : j, ye = G ? "Expand sidebar" : "Collapse sidebar", Ae = G ? "translate(50%, -50%)" : `translate(-${Sn}px, -50%)`, Pe = c ? /* @__PURE__ */ e(ge, { title: ye, placement: "right", arrow: !0, children: /* @__PURE__ */ e(
    Ie,
    {
      "aria-label": ye,
      "aria-expanded": !G,
      onClick: He,
      "data-testid": "sidebar-collapse-toggle",
      disableFocusRipple: !0,
      size: "small",
      sx: {
        position: "absolute",
        top: Xt / 2,
        right: 0,
        transform: Ae,
        zIndex: 1,
        width: Tr,
        height: Tr,
        p: 0,
        transition: "transform 150ms ease, box-shadow 150ms ease, border-color 150ms ease",
        ...G ? {
          // Overhanging the edge: a light accent tint (the
          // Ask Nexa button's treatment), border and lift so
          // it reads at a glance. The tint is layered over
          // the opaque surface so it looks the same over the
          // sidebar and over the page. accentOnSurface: the
          // accent is too dim on a dark surface.
          color: Y,
          bgcolor: Oe,
          backgroundImage: `linear-gradient(${K}, ${K})`,
          border: `1px solid color-mix(in srgb, ${f} 35%, transparent)`,
          boxShadow: "0 1px 4px rgba(0, 0, 0, 0.1)",
          "&:hover, &.Mui-focusVisible": {
            bgcolor: Oe,
            borderColor: f,
            transform: `${Ae} scale(1.1)`,
            boxShadow: "0 2px 8px rgba(0, 0, 0, 0.14)"
          }
        } : {
          // In the brand row: the header's own colors, tinted
          // only on hover. The transparent border keeps the
          // size steady between states.
          color: A,
          bgcolor: de,
          border: "1px solid transparent",
          "&:hover, &.Mui-focusVisible": {
            bgcolor: de,
            backgroundImage: `linear-gradient(${ke}, ${ke})`
          }
        },
        ...Ct
      },
      children: /* @__PURE__ */ e(
        Bo,
        {
          sx: {
            fontSize: 18,
            transition: "transform 200ms ease",
            transform: G ? "rotate(180deg)" : "none"
          }
        }
      )
    }
  ) }) : null, De = c ? /* @__PURE__ */ e(
    x,
    {
      "data-testid": "sidebar-header",
      sx: {
        height: Xt,
        minHeight: Xt,
        flexShrink: 0,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        bgcolor: de
      },
      children: h || a ? /* @__PURE__ */ e(
        Dt,
        {
          logo: h,
          title: G ? void 0 : a,
          appName: a || "App",
          onClick: l,
          color: w ?? A,
          testId: "sidebar-header-brand"
        }
      ) : null
    }
  ) : null, st = !c && h ? /* @__PURE__ */ e(
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
        Dt,
        {
          logo: h,
          appName: a || "App",
          onClick: l,
          color: w ?? A,
          testId: "sidebar-header-brand"
        }
      )
    }
  ) : null, et = E ? 0.5 : G ? 1 : 1.5, lt = /* @__PURE__ */ u(
    x,
    {
      component: "nav",
      "aria-label": "Main sidebar",
      "data-testid": "collapsible-sidebar",
      "data-collapsed": G ? "true" : "false",
      "data-labeled": E ? "true" : "false",
      sx: {
        width: Te,
        minWidth: Te,
        height: "100%",
        boxSizing: "border-box",
        bgcolor: Oe,
        display: "flex",
        flexDirection: "column",
        // Lets the sidebar shrink inside a flex-column host so siblings
        // (e.g. an alert card below it) stay within the viewport.
        flex: "1 1 auto",
        minHeight: 0,
        overflow: "hidden",
        transition: bn
      },
      children: [
        De ?? st,
        re ? /* @__PURE__ */ e(
          x,
          {
            sx: { flexShrink: 0, px: et, pt: 1, pb: 1 },
            children: re
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
              px: et,
              pt: te && !c ? `${te}px` : 1,
              pb: 2
            },
            children: [
              ve(t),
              r.length > 0 ? /* @__PURE__ */ u(x, { sx: { mt: "auto", pt: 2 }, children: [
                I ? null : /* @__PURE__ */ e(Ne, { sx: { mb: 1, borderColor: "divider" } }),
                ve(r)
              ] }) : null
            ]
          }
        ),
        I ? /* @__PURE__ */ e(x, { sx: { flexShrink: 0, px: et, pb: 1.5 }, children: /* @__PURE__ */ e(
          x,
          {
            sx: {
              borderTop: `1px solid ${ke}`,
              pt: 1.5
            },
            children: I
          }
        ) }) : null
      ]
    }
  );
  return Pe ? /* @__PURE__ */ u(
    x,
    {
      sx: {
        position: "relative",
        display: "flex",
        flexDirection: "column",
        flex: "1 1 auto",
        minHeight: 0,
        height: "100%"
      },
      children: [
        Pe,
        lt
      ]
    }
  ) : lt;
}, or = "var(--lumora-content-padding, 0px)", Wr = `calc(${or} * -1)`, fa = ({
  children: t,
  flushTop: r = !0,
  sticky: o = !1,
  background: n = "background.paper",
  divider: i = !0,
  inset: h = !0,
  sx: a
}) => /* @__PURE__ */ e(
  x,
  {
    "data-testid": "full-bleed-section",
    sx: [
      {
        mx: Wr,
        mt: r ? Wr : 0,
        // Space below it, like any other block on the page
        mb: or,
        px: h ? or : 0,
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
      ...Array.isArray(a) ? a : [a]
    ],
    children: t
  }
), In = ({ keys: t }) => /* @__PURE__ */ e(
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
class M extends Error {
  constructor(r, o, n = null) {
    super(r), this.name = "AuthError", this.code = o, this.originalError = n, this.timestamp = (/* @__PURE__ */ new Date()).toISOString();
  }
}
const H = {
  STORAGE_ACCESS_DENIED: "STORAGE_ACCESS_DENIED",
  TOKEN_NOT_FOUND: "TOKEN_NOT_FOUND",
  TOKEN_INVALID: "TOKEN_INVALID",
  TOKEN_EXPIRED: "TOKEN_EXPIRED",
  LOGOUT_FAILED: "LOGOUT_FAILED",
  UNKNOWN_ERROR: "UNKNOWN_ERROR"
}, Z = {
  ACCESS_TOKEN: "lumoraAccessToken",
  REFRESH_TOKEN: "lumoraRefreshToken",
  USER: "lumoraUser"
}, Fe = {
  ACCESS_TOKEN: "accessToken",
  REFRESH_TOKEN: "refreshToken",
  USER: "user"
}, Cn = () => {
  if (!(typeof window > "u" || !window.localStorage))
    try {
      const t = localStorage.getItem(
        Fe.ACCESS_TOKEN
      ), r = localStorage.getItem(
        Fe.REFRESH_TOKEN
      ), o = localStorage.getItem(Fe.USER);
      t && !localStorage.getItem(Z.ACCESS_TOKEN) && localStorage.setItem(Z.ACCESS_TOKEN, t), r && !localStorage.getItem(Z.REFRESH_TOKEN) && localStorage.setItem(
        Z.REFRESH_TOKEN,
        r
      ), o && !localStorage.getItem(Z.USER) && localStorage.setItem(Z.USER, o), (t || r || o) && (localStorage.removeItem(Fe.ACCESS_TOKEN), localStorage.removeItem(Fe.REFRESH_TOKEN), localStorage.removeItem(Fe.USER));
    } catch (t) {
      console.warn("Failed to migrate legacy localStorage keys:", t);
    }
}, jt = (t) => {
  try {
    if (typeof window > "u")
      return console.warn("localStorage access attempted on server side"), null;
    if (!window.localStorage)
      throw new M(
        "localStorage is not available",
        H.STORAGE_ACCESS_DENIED
      );
    return window.localStorage.getItem(t);
  } catch (r) {
    throw r.name === "QuotaExceededError" ? (console.error("Storage quota exceeded"), new M(
      "Storage quota exceeded. Please clear browser data.",
      H.STORAGE_ACCESS_DENIED,
      r
    )) : r.name === "SecurityError" ? (console.error(
      "localStorage access denied (private browsing or security settings)"
    ), new M(
      "Access to localStorage is denied. Please check browser settings.",
      H.STORAGE_ACCESS_DENIED,
      r
    )) : (console.error(
      "Unexpected error accessing localStorage:",
      r.name
    ), new M(
      "Failed to access storage",
      H.STORAGE_ACCESS_DENIED,
      r
    ));
  }
}, Vt = (t, r) => {
  try {
    if (typeof window > "u")
      return console.warn("localStorage write attempted on server side"), !1;
    if (!window.localStorage)
      throw new M(
        "localStorage is not available",
        H.STORAGE_ACCESS_DENIED
      );
    return window.localStorage.setItem(t, r), !0;
  } catch (o) {
    throw o.name === "QuotaExceededError" ? (console.error("Storage quota exceeded"), new M(
      "Storage quota exceeded. Please clear browser data.",
      H.STORAGE_ACCESS_DENIED,
      o
    )) : o.name === "SecurityError" ? (console.error(
      "localStorage write denied (private browsing or security settings)"
    ), new M(
      "Access to localStorage is denied. Please check browser settings.",
      H.STORAGE_ACCESS_DENIED,
      o
    )) : (console.error(
      "Unexpected error writing to localStorage:",
      o.name
    ), new M(
      "Failed to write to storage",
      H.STORAGE_ACCESS_DENIED,
      o
    ));
  }
}, ao = (t) => {
  try {
    return typeof window > "u" ? (console.warn("localStorage removal attempted on server side"), !1) : window.localStorage ? (window.localStorage.removeItem(t), !0) : (console.warn("localStorage is not available"), !1);
  } catch (r) {
    return r.name !== "SecurityError" && console.warn(`Could not remove localStorage key "${t}"`), !1;
  }
}, bt = () => {
  try {
    Cn();
    const t = jt(Z.ACCESS_TOKEN), r = jt(Z.REFRESH_TOKEN), o = jt(Z.USER);
    let n = null;
    if (o)
      try {
        n = JSON.parse(o);
      } catch {
        o && o !== "null" && o !== "undefined" && console.warn(
          "Invalid user data in localStorage, clearing:",
          o.substring(0, 50)
        ), ao(Z.USER);
      }
    return {
      accessToken: t,
      refreshToken: r,
      user: n
    };
  } catch (t) {
    throw t instanceof M ? t : new M(
      "Failed to retrieve authentication tokens",
      H.UNKNOWN_ERROR,
      t
    );
  }
}, _n = () => {
  try {
    const { accessToken: t, refreshToken: r } = bt();
    return !(t || r) ? {
      isAuthenticated: !1,
      error: new M(
        "No authentication tokens found",
        H.TOKEN_NOT_FOUND
      )
    } : {
      isAuthenticated: !0,
      error: null
    };
  } catch (t) {
    return console.error("Authentication check failed:", t), {
      isAuthenticated: !1,
      error: t instanceof M ? t : new M(
        "Authentication check failed",
        H.UNKNOWN_ERROR,
        t
      )
    };
  }
}, so = (t, r, o = null) => {
  try {
    if (!t && !r)
      throw new M(
        "At least one token must be provided",
        H.TOKEN_INVALID
      );
    return t && Vt(Z.ACCESS_TOKEN, t), r && Vt(Z.REFRESH_TOKEN, r), o && Vt(Z.USER, JSON.stringify(o)), {
      success: !0,
      error: null
    };
  } catch (n) {
    return console.error("Failed to store authentication tokens:", n), {
      success: !1,
      error: n instanceof M ? n : new M(
        "Failed to store tokens",
        H.UNKNOWN_ERROR,
        n
      )
    };
  }
}, St = () => {
  try {
    return [
      Z.ACCESS_TOKEN,
      Z.REFRESH_TOKEN,
      Z.USER,
      // Also clear legacy keys for complete cleanup
      Fe.ACCESS_TOKEN,
      Fe.REFRESH_TOKEN,
      Fe.USER
    ].map((n) => ao(n)).every((n) => n) || console.warn("Some tokens could not be removed from localStorage"), {
      success: !0,
      error: null
    };
  } catch (t) {
    return console.error("Failed to clear authentication tokens:", t), {
      success: !1,
      error: t instanceof M ? t : new M(
        "Failed to clear tokens",
        H.LOGOUT_FAILED,
        t
      )
    };
  }
}, On = () => {
  try {
    const { user: t } = bt();
    return {
      user: t,
      error: null
    };
  } catch (t) {
    return console.error("Failed to get current user:", t), {
      user: null,
      error: t instanceof M ? t : new M(
        "Failed to retrieve user data",
        H.UNKNOWN_ERROR,
        t
      )
    };
  }
}, ma = (t) => {
  if (!(t instanceof M))
    return "An unexpected error occurred. Please try again.";
  switch (t.code) {
    case H.STORAGE_ACCESS_DENIED:
      return "Unable to access browser storage. Please check your browser settings and disable private browsing if enabled.";
    case H.TOKEN_NOT_FOUND:
      return "You are not logged in. Please sign in to continue.";
    case H.TOKEN_INVALID:
      return "Your session is invalid. Please sign in again.";
    case H.TOKEN_EXPIRED:
      return "Your session has expired. Please sign in again.";
    case H.LOGOUT_FAILED:
      return "Failed to log out properly. Please clear your browser cache and try again.";
    case H.UNKNOWN_ERROR:
    default:
      return "An unexpected error occurred. Please try again or contact support if the problem persists.";
  }
}, nr = (t, r = "Unknown") => {
  const o = {
    context: r,
    message: t.message,
    code: t instanceof M ? t.code : "UNKNOWN",
    timestamp: t instanceof M ? t.timestamp : (/* @__PURE__ */ new Date()).toISOString(),
    stack: t.stack
  };
  t instanceof M && t.originalError && (o.originalError = {
    name: t.originalError.name,
    message: t.originalError.message
  }), console.warn("[Auth Error]", o);
}, Tn = (t) => {
  if (!t)
    throw new Error("API base URL is required to create axios client");
  const r = _r.create({
    baseURL: t,
    headers: {
      "Content-Type": "application/json"
    }
  });
  let o = !1, n = null, i = [];
  const h = (a, l) => {
    i.forEach(({ resolve: c, reject: d }) => {
      a ? d(a) : l && c(l);
    }), i = [];
  };
  return r.interceptors.request.use(
    (a) => {
      const { accessToken: l } = bt();
      return l && a.headers && (a.headers.Authorization = `Bearer ${l}`), a;
    },
    (a) => Promise.reject(a)
  ), r.interceptors.response.use(
    (a) => a,
    async (a) => {
      var f;
      const l = a.config, c = (f = a.response) == null ? void 0 : f.status, d = (l == null ? void 0 : l.url) || "", p = d.includes("/auth/refresh");
      if (c !== 401 || l._retry || p)
        return Promise.reject(a);
      l._retry = !0;
      const { refreshToken: w } = bt();
      if (!w) {
        const g = new Error(
          "No refresh token available for token refresh"
        );
        return nr(g, "AxiosClient - Token Refresh"), St(), typeof window < "u" && (window.location.href = "/login"), Promise.reject(a);
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
                const v = JSON.parse(
                  l.data || "{}"
                );
                v.refresh_token = b, l.data = JSON.stringify(v);
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
      o = !0, n = _r.post(
        `${t}/auth/refresh`,
        {
          refresh_token: w
        }
      );
      try {
        const g = await n, { accessToken: R, refreshToken: b } = g.data;
        if (so(R, b, null), h(null, {
          accessToken: R,
          refreshToken: b
        }), l.headers && (l.headers.Authorization = `Bearer ${R}`), d.includes("/auth/logout"))
          try {
            if (typeof l.data == "string") {
              const v = JSON.parse(
                l.data || "{}"
              );
              v.refresh_token = b, l.data = JSON.stringify(v);
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
        return nr(
          g,
          "AxiosClient - Token Refresh Failed"
        ), h(g), St(), typeof window < "u" && (window.location.href = "/login"), Promise.reject(g);
      } finally {
        o = !1, n = null;
      }
    }
  ), r;
}, me = {
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
}, xe = {
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
}, lo = Gr(), Re = lo.typography.pxToRem, An = (t) => {
  const r = t === "dark", o = [...lo.shadows];
  return o[1] = r ? "hsla(220, 30%, 5%, 0.7) 0px 4px 16px 0px, hsla(220, 25%, 10%, 0.8) 0px 8px 16px -5px" : "hsla(220, 30%, 5%, 0.07) 0px 4px 16px 0px, hsla(220, 25%, 10%, 0.07) 0px 8px 16px -5px", {
    palette: {
      mode: t,
      primary: {
        light: r ? me[300] : me[200],
        main: me[400],
        dark: me[700],
        contrastText: me[50]
      },
      info: r ? {
        light: me[500],
        main: me[700],
        dark: me[900],
        contrastText: me[300]
      } : {
        light: me[100],
        main: me[300],
        dark: me[600],
        contrastText: xe[50]
      },
      warning: r ? { light: ot[400], main: ot[500], dark: ot[700] } : { light: ot[300], main: ot[400], dark: ot[800] },
      error: r ? { light: nt[400], main: nt[500], dark: nt[700] } : { light: nt[300], main: nt[400], dark: nt[800] },
      success: r ? { light: rt[400], main: rt[500], dark: rt[700] } : { light: rt[300], main: rt[400], dark: rt[800] },
      grey: xe,
      divider: r ? Ve(xe[700], 0.6) : Ve(xe[300], 0.4),
      background: r ? { default: xe[900], paper: "hsl(220, 30%, 7%)" } : { default: "hsl(0, 0%, 99%)", paper: "hsl(220, 35%, 97%)" },
      text: r ? { primary: "hsl(0, 0%, 100%)", secondary: xe[400] } : { primary: xe[800], secondary: xe[600] },
      action: r ? {
        hover: Ve(xe[600], 0.2),
        selected: Ve(xe[600], 0.3)
      } : {
        hover: Ve(xe[200], 0.2),
        selected: Ve(xe[200], 0.3)
      }
    },
    typography: {
      fontFamily: "Inter, sans-serif",
      h1: {
        fontSize: Re(48),
        fontWeight: 600,
        lineHeight: 1.2,
        letterSpacing: -0.5
      },
      h2: { fontSize: Re(36), fontWeight: 600, lineHeight: 1.2 },
      h3: { fontSize: Re(30), lineHeight: 1.2 },
      h4: { fontSize: Re(24), fontWeight: 600, lineHeight: 1.5 },
      h5: { fontSize: Re(20), fontWeight: 600 },
      h6: { fontSize: Re(18), fontWeight: 600 },
      subtitle1: { fontSize: Re(18) },
      subtitle2: { fontSize: Re(14), fontWeight: 500 },
      body1: { fontSize: Re(14) },
      body2: { fontSize: Re(14), fontWeight: 400 },
      caption: { fontSize: Re(12), fontWeight: 400 }
    },
    shape: {
      borderRadius: 8
    },
    shadows: o
  };
}, Dn = async (t, r) => {
  const { accessToken: o, refreshToken: n } = bt();
  if (o)
    return !0;
  if (n)
    try {
      const i = await t.post("/auth/refresh", {
        refresh_token: n
      });
      if (i.data.success && i.data.accessToken)
        return so(
          i.data.accessToken,
          i.data.refreshToken || null,
          null
        ), !0;
    } catch (i) {
      nr(i, "TokenValidator - Refresh Failed");
    }
  return St(), r ? r() : window.location.href = "/login", !1;
}, At = ({ size: t = 20 }) => /* @__PURE__ */ u(
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
), it = "#09C1AE", Yt = (t, r) => ({
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
}), kr = ({
  variant: t,
  onClick: r,
  active: o = !1,
  busy: n = !1,
  shortcutKeys: i,
  accentColor: h = "#01584f",
  rightOffsetPx: a = 0
}) => {
  const l = i ? `Ask Nexa (${i.join("")})` : "Ask Nexa", c = {
    onClick: r,
    "aria-label": "Ask Nexa",
    "aria-pressed": o,
    "data-testid": "assistant-button"
  };
  return t === "sidebar" ? /* @__PURE__ */ u(
    Qe,
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
        ...n && Yt(8, "background.paper")
      },
      children: [
        /* @__PURE__ */ e(At, { size: 20 }),
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
        i && /* @__PURE__ */ e(In, { keys: i })
      ]
    }
  ) : t === "sidebar-icon" ? /* @__PURE__ */ e(ge, { title: l, placement: "right", arrow: !0, children: /* @__PURE__ */ e(
    Ie,
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
        ...n && Yt(8, "background.paper")
      },
      children: /* @__PURE__ */ e(At, { size: 20 })
    }
  ) }) : /* @__PURE__ */ e(ge, { title: l, placement: "left", children: /* @__PURE__ */ e(
    Ie,
    {
      ...c,
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
        outline: o ? `2px solid ${it}` : "none",
        outlineOffset: 2,
        "&:hover": { bgcolor: "background.paper", boxShadow: 6 },
        "&.Mui-focusVisible": { outline: `2px solid ${it}` },
        ...n && Yt(16, "background.paper")
      },
      children: /* @__PURE__ */ e(x, { sx: { display: "flex", alignItems: "center" }, children: /* @__PURE__ */ e(At, { size: 26 }) })
    }
  ) });
}, Ot = ({
  title: t = "",
  message: r = "",
  buttonText: o = "",
  onButtonClick: n,
  show: i = !0
}) => i ? /* @__PURE__ */ e(Xo, { variant: "outlined", sx: { m: 1.5, flexShrink: 0 }, children: /* @__PURE__ */ u(jo, { children: [
  /* @__PURE__ */ e(Vo, { fontSize: "small" }),
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
    Xr,
    {
      variant: "contained",
      size: "small",
      fullWidth: !0,
      onClick: n,
      children: o
    }
  )
] }) }) : null, mt = 24, Nn = 720, Wn = 1140, kn = 1250, zn = ({
  open: t,
  children: r,
  variant: o,
  position: n,
  width: i,
  sidebarWidthPx: h,
  bottomOffsetPx: a,
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
  const p = o === "docked", w = mt + a;
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
    ...n === "left" ? { left: h + mt } : { right: mt },
    width: i,
    maxWidth: `calc(100vw - ${mt * 2}px)`,
    height: `min(${Nn}px, calc(100vh - ${w + mt}px))`,
    borderRadius: "12px"
  };
  const g = /* @__PURE__ */ e(
    ir,
    {
      role: p ? "complementary" : "dialog",
      "aria-label": "Nexa chat",
      "data-testid": "chat-panel",
      "data-variant": o,
      elevation: 8,
      sx: {
        position: "fixed",
        zIndex: p ? Wn : kn,
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
  return p ? /* @__PURE__ */ e(Zo, { direction: "left", in: t, mountOnEnter: !0, children: g }) : /* @__PURE__ */ e(
    Yo,
    {
      in: t,
      mountOnEnter: !0,
      style: {
        transformOrigin: n === "left" ? "bottom left" : "bottom right"
      },
      children: g
    }
  );
}, Mn = 180, zr = 250, Ln = "#01584F", Bn = ({
  text: t,
  testId: r
}) => {
  const o = m.useRef(null), [n, i] = m.useState(!1), h = m.useCallback(() => {
    const a = o.current;
    a && i(a.scrollWidth > a.clientWidth + 0.5);
  }, []);
  return m.useLayoutEffect(() => {
    h();
  }, [h, t]), m.useEffect(() => {
    const a = o.current;
    if (!a)
      return;
    const l = new ResizeObserver(() => h());
    return l.observe(a), () => l.disconnect();
  }, [h]), /* @__PURE__ */ e(
    ge,
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
}, co = (t, r, o, n) => {
  const i = t ? 48 : 44, h = t ? "text.secondary" : r, a = t ? Ln : r;
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
    color: o ? "#ffffff" : h,
    backgroundColor: o ? a : "transparent",
    "&:hover": {
      backgroundColor: o ? a : "action.hover",
      borderRadius: "4px",
      color: o ? "#ffffff" : h
    }
  } : {
    width: i,
    height: i,
    color: o ? "#ffffff" : h,
    backgroundColor: o ? a : "transparent",
    borderRadius: o ? "4px" : "50%",
    "&:hover": {
      backgroundColor: o ? a : "action.hover",
      borderRadius: "4px"
    }
  } };
}, uo = ({ link: t }) => /* @__PURE__ */ u(le, { alignItems: "center", spacing: 1, sx: { width: "100%" }, children: [
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
    Bn,
    {
      text: t.text,
      testId: `rail-item-caption-${t.text}`
    }
  )
] }), ho = (t, r, o) => o ? t : /* @__PURE__ */ e(ge, { title: r, placement: "right", arrow: !0, children: t }), Fn = ({
  link: t,
  activePath: r,
  onLinkClick: o,
  accentColor: n,
  isSecondary: i,
  surfaceBackgroundColor: h,
  railShowTitles: a
}) => {
  const l = Wt(), [c, d] = m.useState(null), [p, w] = m.useState(!1), f = m.useRef(
    null
  ), g = m.useRef(null), R = m.useRef(null), b = m.useRef(!1), v = m.useRef(!1), L = m.useId(), N = () => {
    f.current && (clearTimeout(f.current), f.current = null);
  }, y = () => {
    N(), f.current = setTimeout(() => {
      w(!1), f.current = null;
    }, Mn);
  }, B = () => {
    N(), w(!0);
  };
  m.useEffect(() => {
    if (!p)
      return;
    const I = (U) => {
      var W;
      U.key === "Escape" && (w(!1), (W = R.current) == null || W.focus());
    };
    return document.addEventListener("keydown", I), () => document.removeEventListener("keydown", I);
  }, [p]), m.useEffect(() => {
    if (!p || !v.current)
      return;
    const I = globalThis.requestAnimationFrame(() => {
      var W;
      const U = (W = g.current) == null ? void 0 : W.querySelector(
        '[role="menuitem"]'
      );
      U == null || U.focus(), v.current = !1;
    });
    return () => cancelAnimationFrame(I);
  }, [p]);
  const j = Je(t, r), { activeBg: P, sx: E } = co(
    i,
    n,
    j,
    a
  ), te = /* @__PURE__ */ e(
    Ie,
    {
      ref: R,
      component: t.path ? "a" : "button",
      href: t.path || void 0,
      "aria-label": t.text,
      onFocus: () => {
        b.current || B();
      },
      onBlur: (I) => {
        var W;
        const U = I.relatedTarget;
        U && ((W = g.current) != null && W.contains(U)) || y();
      },
      onKeyDown: (I) => {
        I.key === "ArrowDown" && (I.preventDefault(), v.current = !0, B());
      },
      onClick: (I) => {
        I.preventDefault(), I.stopPropagation(), t.path && (o == null || o(t.path));
      },
      "aria-haspopup": "menu",
      "aria-expanded": p,
      "aria-controls": p ? L : void 0,
      "data-testid": `rail-submenu-trigger-${t.text}`,
      sx: E,
      children: a ? /* @__PURE__ */ e(uo, { link: t }) : t.icon
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
              b.current = !0, B();
            },
            onMouseLeave: () => {
              b.current = !1, y();
            },
            children: ho(te, t.text, a)
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
              ir,
              {
                ref: g,
                elevation: 0,
                onMouseEnter: N,
                onMouseLeave: y,
                "data-testid": `rail-submenu-panel-${t.text}`,
                sx: {
                  bgcolor: h,
                  backgroundImage: "none",
                  borderRadius: "4px",
                  border: "1px solid",
                  borderColor: "divider",
                  boxShadow: l.shadows[8],
                  maxWidth: zr,
                  minWidth: 0,
                  py: 0.5,
                  boxSizing: "border-box"
                },
                children: /* @__PURE__ */ e(
                  kt,
                  {
                    id: L,
                    dense: !0,
                    autoFocus: !1,
                    role: "menu",
                    sx: {
                      bgcolor: "transparent",
                      py: 0,
                      maxWidth: zr
                    },
                    children: re(t.subitems, t.text, 0)
                  }
                )
              }
            )
          }
        )
      ]
    }
  );
  function re(I, U, W) {
    return I.flatMap((k) => {
      const oe = Tt(U, k);
      return gt(k) ? [
        /* @__PURE__ */ e(
          qo,
          {
            disableSticky: !0,
            title: k.text,
            sx: {
              bgcolor: "transparent",
              lineHeight: "28px",
              pl: 2 + W * 1.5,
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
          oe
        ),
        ...re(k.subitems, oe, W + 1)
      ] : [
        /* @__PURE__ */ u(
          Ce,
          {
            role: "menuitem",
            title: k.text,
            disabled: !k.path,
            selected: je(k, r),
            onClick: (be) => {
              be.preventDefault(), k.path && (o == null || o(k.path)), w(!1);
            },
            sx: {
              borderRadius: "4px",
              mx: 0.5,
              my: 0.125,
              pl: 2 + W * 1.5,
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
                bgcolor: P,
                color: "#ffffff",
                "&:hover": {
                  bgcolor: P
                }
              },
              "&.Mui-focusVisible": {
                bgcolor: "action.focus"
              }
            },
            children: [
              k.icon ? /* @__PURE__ */ e(se, { children: k.icon }) : null,
              /* @__PURE__ */ e(
                $e,
                {
                  primary: k.text,
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
}, $n = ({
  link: t,
  activePath: r,
  onLinkClick: o,
  accentColor: n,
  isSecondary: i,
  railShowTitles: h
}) => {
  const a = !!(t.path && r === t.path), { sx: l } = co(
    i,
    n,
    a,
    h
  );
  return ho(
    /* @__PURE__ */ e(
      Ie,
      {
        component: t.path ? "a" : "button",
        href: t.path || void 0,
        "aria-label": t.text,
        onClick: (c) => {
          c.preventDefault(), c.stopPropagation(), t.path && (o == null || o(t.path));
        },
        disabled: !t.path,
        sx: l,
        children: h ? /* @__PURE__ */ e(uo, { link: t }) : t.icon
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
    children: /* @__PURE__ */ e(Ne, { sx: { width: "60%", borderColor: "divider" } })
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
    children: /* @__PURE__ */ e(Ne, { sx: { width: "60%", borderColor: "divider" } })
  }
), Mr = (t, r) => t.map((o, n) => /* @__PURE__ */ u(m.Fragment, { children: [
  r(o, n),
  n < t.length - 1 ? /* @__PURE__ */ e(Hn, {}) : null
] }, n)), Un = ({
  mainLinks: t,
  secondaryLinks: r = [],
  activePath: o,
  onLinkClick: n,
  accentColor: i = "#01584f",
  surfaceBackgroundColor: h,
  railShowTitles: a = !1
}) => {
  const l = (d, p) => gt(d) ? /* @__PURE__ */ e(
    Fn,
    {
      link: d,
      activePath: o,
      onLinkClick: n,
      accentColor: i,
      isSecondary: p,
      surfaceBackgroundColor: h,
      railShowTitles: a
    }
  ) : /* @__PURE__ */ e(
    $n,
    {
      link: d,
      activePath: o,
      onLinkClick: n,
      accentColor: i,
      isSecondary: p,
      railShowTitles: a
    }
  ), c = a ? 1.25 : 1;
  return /* @__PURE__ */ u(
    le,
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
        Mr(t, (d) => l(d, !1)),
        r.length > 0 ? /* @__PURE__ */ u(at, { children: [
          /* @__PURE__ */ e(Pn, {}),
          /* @__PURE__ */ e(x, { sx: { mt: "auto", pb: 2 }, children: /* @__PURE__ */ e(le, { gap: c, alignItems: "center", children: Mr(
            r,
            (d) => l(d, !0)
          ) }) })
        ] }) : null
      ]
    }
  );
}, Kn = (t) => t ? io(t) : "USER", Gn = (t) => t.split(/\s+/).filter(Boolean).slice(0, 2).map((r) => r.charAt(0).toUpperCase()).join(""), Lr = {
  overflow: "hidden",
  textOverflow: "ellipsis",
  whiteSpace: "nowrap",
  maxWidth: "100%"
}, Br = ({ count: t }) => t ? /* @__PURE__ */ e(
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
) : null, ar = ({ name: t, avatar: r, color: o, size: n = 36 }) => /* @__PURE__ */ e(
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
    children: Gn(t)
  }
), po = ({ name: t, role: r, avatar: o, avatarColor: n, showText: i }) => /* @__PURE__ */ u(at, { children: [
  /* @__PURE__ */ e(ar, { name: t, avatar: o, color: n }),
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
            sx: { ...Lr, fontWeight: 600, color: "inherit" },
            children: t
          }
        ),
        /* @__PURE__ */ e(
          z,
          {
            variant: "caption",
            sx: { ...Lr, opacity: 0.8, color: "inherit" },
            children: Kn(r)
          }
        )
      ]
    }
  )
] }), Fr = {
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
}, fo = ({
  anchorEl: t,
  onClose: r,
  placement: o,
  width: n,
  avatarColor: i,
  showNotifications: h,
  notificationCount: a,
  onNotificationsClick: l,
  userName: c = "User",
  userRole: d,
  userAvatar: p,
  menuItems: w = [],
  showSettings: f,
  onSettingsClick: g,
  showThemeToggler: R,
  theme: b,
  onThemeToggle: v,
  onLogout: L
}) => {
  const N = (y) => () => {
    r(), y == null || y();
  };
  return /* @__PURE__ */ u(
    en,
    {
      anchorEl: t,
      open: !!t,
      onClose: r,
      anchorOrigin: Fr[o].anchor,
      transformOrigin: Fr[o].transform,
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
          le,
          {
            direction: "row",
            spacing: 1.25,
            sx: { px: 1.5, py: 1, alignItems: "center" },
            children: /* @__PURE__ */ e(
              po,
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
        /* @__PURE__ */ e(Ne, {}),
        h && /* @__PURE__ */ u(Ce, { onClick: N(l), children: [
          /* @__PURE__ */ e(se, { children: /* @__PURE__ */ e(Zr, { fontSize: "small" }) }),
          /* @__PURE__ */ e($e, { children: "Notifications" }),
          /* @__PURE__ */ e(Br, { count: a })
        ] }),
        w.map((y) => /* @__PURE__ */ u(Ce, { onClick: N(y.onClick), children: [
          y.icon && /* @__PURE__ */ e(se, { children: y.icon }),
          /* @__PURE__ */ e($e, { inset: !y.icon, children: y.label }),
          /* @__PURE__ */ e(Br, { count: y.badge })
        ] }, y.key)),
        f && /* @__PURE__ */ u(Ce, { onClick: N(g), children: [
          /* @__PURE__ */ e(se, { children: /* @__PURE__ */ e(qr, { fontSize: "small" }) }),
          /* @__PURE__ */ e($e, { children: "Settings" })
        ] }),
        R && [
          /* @__PURE__ */ e(Ne, {}, "theme-divider"),
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
              tn,
              {
                exclusive: !0,
                fullWidth: !0,
                size: "small",
                "aria-label": "Theme",
                value: b,
                onChange: (y, B) => B && B !== b && (v == null ? void 0 : v()),
                disabled: !v,
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
        /* @__PURE__ */ e(Ne, {}),
        /* @__PURE__ */ u(
          Ce,
          {
            onClick: N(L),
            sx: {
              color: b === "dark" ? "hsl(0, 90%, 65%)" : "error.main"
            },
            children: [
              /* @__PURE__ */ e(se, { sx: { color: "inherit" }, children: /* @__PURE__ */ e(Yr, { fontSize: "small" }) }),
              /* @__PURE__ */ e($e, { children: "Log out" })
            ]
          }
        )
      ]
    }
  );
}, mo = 64, Xn = 2, xt = ({
  label: t,
  icon: r,
  onClick: o,
  active: n,
  color: i,
  activeColor: h,
  activeBackground: a,
  ariaLabel: l,
  haspopup: c,
  isPage: d = !1,
  testId: p
}) => /* @__PURE__ */ u(
  Qe,
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
            bgcolor: n ? a : "transparent",
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
  assistantActive: a,
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
  const v = f.filter((E) => E.path).slice(0, Xn), [L, N] = m.useState(
    null
  ), { userName: y = "User", userAvatar: B, avatarColor: j } = b, P = { color: d, activeColor: p, activeBackground: w };
  return /* @__PURE__ */ u(
    ir,
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
        height: `calc(${mo}px + env(safe-area-inset-bottom, 0px))`,
        pb: "env(safe-area-inset-bottom, 0px)",
        bgcolor: c,
        borderTop: "1px solid",
        borderColor: "divider"
      },
      children: [
        t && /* @__PURE__ */ e(
          xt,
          {
            label: "Menu",
            icon: /* @__PURE__ */ e(jr, {}),
            onClick: t,
            active: r,
            haspopup: "dialog",
            testId: "mobile-nav-menu",
            ...P
          }
        ),
        v.map((E) => /* @__PURE__ */ e(
          xt,
          {
            label: E.text,
            icon: E.icon,
            onClick: () => R == null ? void 0 : R(E.path),
            active: Je(E, g),
            isPage: !0,
            testId: `mobile-nav-link-${E.text}`,
            ...P
          },
          E.path
        )),
        i && /* @__PURE__ */ e(
          xt,
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
                  borderColor: a ? "#09C1AE" : "rgba(9, 193, 174, 0.45)",
                  bgcolor: "rgba(9, 193, 174, 0.1)"
                },
                children: /* @__PURE__ */ e(At, { size: 18 })
              }
            ),
            onClick: h,
            active: a,
            testId: "mobile-nav-nexa",
            ...P
          }
        ),
        o && /* @__PURE__ */ e(
          xt,
          {
            label: "Search",
            icon: /* @__PURE__ */ e(Vr, {}),
            onClick: o,
            active: n,
            haspopup: "dialog",
            testId: "mobile-nav-search",
            ...P
          }
        ),
        l && /* @__PURE__ */ u(at, { children: [
          /* @__PURE__ */ e(
            xt,
            {
              label: "Account",
              ariaLabel: `Account menu for ${y}`,
              icon: /* @__PURE__ */ e(
                ar,
                {
                  name: y,
                  avatar: B,
                  color: j,
                  size: 26
                }
              ),
              onClick: (E) => N(E.currentTarget),
              active: !!L,
              haspopup: "menu",
              testId: "mobile-nav-account",
              ...P
            }
          ),
          /* @__PURE__ */ e(
            fo,
            {
              anchorEl: L,
              onClose: () => N(null),
              placement: "above-end",
              width: 280,
              ...b
            }
          )
        ] })
      ]
    }
  );
}, Vn = ({
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
    children: /* @__PURE__ */ u(
      le,
      {
        direction: "row",
        spacing: 1,
        "data-testid": "mobile-search-sheet",
        sx: { alignItems: "center" },
        children: [
          /* @__PURE__ */ e(x, { sx: { flex: "1 1 auto", minWidth: 0 }, children: o }),
          /* @__PURE__ */ e(
            Xr,
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
), Yn = ({
  height: t,
  onMenuClick: r,
  appName: o,
  logo: n,
  onBrandClick: i,
  background: h,
  color: a,
  brandColor: l = a,
  endContent: c
}) => /* @__PURE__ */ e(
  on,
  {
    position: "fixed",
    elevation: 0,
    sx: {
      height: t,
      background: h,
      color: a,
      borderBottom: "1px solid",
      borderColor: "divider"
    },
    children: /* @__PURE__ */ u(nn, { sx: { minHeight: `${t}px !important`, gap: 1, px: 1 }, children: [
      r && /* @__PURE__ */ e(
        Ie,
        {
          "aria-label": "Open navigation menu",
          onClick: r,
          sx: { color: a },
          children: /* @__PURE__ */ e(jr, {})
        }
      ),
      /* @__PURE__ */ e(
        Dt,
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
), sr = ({
  count: t,
  onClick: r,
  color: o,
  hoverColor: n,
  tooltipPlacement: i,
  testId: h
}) => {
  const a = t ? `Notifications, ${t} unread` : "Notifications";
  return /* @__PURE__ */ e(ge, { title: a, placement: i, arrow: !0, children: /* @__PURE__ */ e(
    Ie,
    {
      onClick: r,
      "aria-label": a,
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
          children: /* @__PURE__ */ e(Zr, {})
        }
      )
    }
  ) });
}, xo = ({
  title: t,
  subtitle: r,
  testId: o,
  width: n,
  sx: i,
  footer: h,
  children: a
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
        a,
        h ? /* @__PURE__ */ u(at, { children: [
          /* @__PURE__ */ e(Ne, {}),
          h
        ] }) : null
      ]
    }
  );
}, Zn = 5, qn = 56, Jn = ({
  platforms: t,
  currentPlatformKey: r,
  onSelect: o,
  accentColor: n,
  tint: i,
  width: h,
  sx: a
}) => /* @__PURE__ */ e(
  xo,
  {
    title: "Lumora Platforms",
    subtitle: "Choose where you want to work.",
    testId: "platforms-panel",
    width: h,
    sx: a,
    footer: /* @__PURE__ */ u(
      le,
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
          /* @__PURE__ */ e(hn, { fontSize: "small" }),
          /* @__PURE__ */ e(z, { variant: "body2", children: "Platforms available to your account" })
        ]
      }
    ),
    children: /* @__PURE__ */ e(
      kt,
      {
        autoFocusItem: !0,
        "aria-label": "Platforms",
        sx: {
          px: 1,
          py: 0.5,
          maxHeight: Zn * qn,
          overflowY: "auto"
        },
        children: t.map((l) => {
          const c = l.key === r;
          return /* @__PURE__ */ u(
            Ce,
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
                  le,
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
                      /* @__PURE__ */ e(un, { sx: { fontSize: 16 } })
                    ]
                  }
                ) : /* @__PURE__ */ e(
                  dn,
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
), $r = (t) => t.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, ""), Qn = ({
  sections: t,
  onItemClick: r,
  width: o,
  sx: n
}) => {
  const [i, h] = m.useState({}), a = (c) => i[c.title] ?? c.defaultOpen ?? !0, l = (c) => h((d) => ({
    ...d,
    [c.title]: !a(c)
  }));
  return /* @__PURE__ */ e(
    xo,
    {
      title: "Settings",
      testId: "settings-panel",
      width: o,
      sx: n,
      children: /* @__PURE__ */ e(
        kt,
        {
          autoFocusItem: !0,
          "aria-label": "Settings",
          sx: { px: 1, py: 0.5, maxHeight: "60vh", overflowY: "auto" },
          children: t.flatMap((c) => {
            const d = a(c), p = $r(c.title), w = /* @__PURE__ */ u(
              Ce,
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
                    pn,
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
                Ce,
                {
                  onClick: () => r(f, c),
                  disabled: f.disabled,
                  "data-testid": `settings-item-${f.key ?? $r(f.text)}`,
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
}, ei = 288, ti = 300, go = {
  "&:focus, &:focus-visible": { outline: "none" }
}, bo = {
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
  ...bo,
  "@keyframes sub-panel-in": {
    from: { opacity: 0, transform: "translateX(-6px)" },
    to: { opacity: 1, transform: "none" }
  },
  animation: "sub-panel-in 150ms ease-out",
  "@media (prefers-reduced-motion: reduce)": { animation: "none" }
}, ri = ({ mode: t, onToggle: r, accentColor: o, tint: n }) => {
  const i = m.useRef(null), h = m.useRef(null), a = (d) => {
    var p;
    d !== t && (r == null || r()), (p = (d === "light" ? i : h).current) == null || p.focus();
  }, l = (d) => {
    if (!(d.key === "Tab" || d.key === "Escape"))
      switch (d.stopPropagation(), d.key) {
        case "ArrowLeft":
        case "ArrowRight":
        case "ArrowUp":
        case "ArrowDown":
          d.preventDefault(), a(t === "light" ? "dark" : "light");
          break;
        case "Home":
          d.preventDefault(), a("light");
          break;
        case "End":
          d.preventDefault(), a("dark");
          break;
      }
  }, c = (d, p, w, f) => {
    const g = t === d;
    return /* @__PURE__ */ e(
      Qe,
      {
        ref: f,
        role: "radio",
        "aria-checked": g,
        "aria-label": p,
        tabIndex: g ? 0 : -1,
        onClick: () => a(d),
        "data-testid": `theme-segment-${d}`,
        sx: {
          width: 36,
          height: 26,
          borderRadius: "999px",
          color: g ? o : "text.secondary",
          bgcolor: g ? n : "transparent",
          transition: "background-color 150ms ease, color 150ms ease",
          "&.Mui-focusVisible": {
            boxShadow: `0 0 0 2px ${Ve(o, 0.6)}`
          },
          ...go
        },
        children: /* @__PURE__ */ e(w, { sx: { fontSize: 18 } })
      }
    );
  };
  return /* @__PURE__ */ u(
    le,
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
        c("light", "Light", ln, i),
        c("dark", "Dark", an, h)
      ]
    }
  );
}, oi = ({
  open: t,
  anchorEl: r,
  onClose: o,
  width: n,
  renderAvatar: i,
  userName: h,
  userEmail: a,
  roleLabel: l,
  accentColor: c,
  tint: d,
  showThemeToggler: p,
  theme: w,
  onThemeToggle: f,
  onProfileClick: g,
  showSettings: R,
  onSettingsClick: b,
  settingsSections: v,
  onSettingsItemClick: L,
  onLinkClick: N,
  platforms: y,
  currentPlatformKey: B,
  onPlatformSelect: j,
  onLogout: P
}) => {
  const te = Wt().palette.mode === "dark", re = m.useRef(null), [I, U] = m.useState(null), W = m.useRef(null), k = m.useRef(null), oe = m.useRef(null), [be, G] = m.useState(
    null
  ), [Se, _e] = m.useState(0), [C, ce] = m.useState(null), We = !!(y != null && y.length), K = R && !!(v != null && v.length), Oe = R && (K || !!b), Y = m.useCallback(() => {
    const S = W.current, X = C === "platforms" ? k.current : C === "settings" ? oe.current : null;
    if (!t || !S || !X || !be) {
      _e(0);
      return;
    }
    const Le = S.getBoundingClientRect(), ve = X.getBoundingClientRect().top, Te = be.getBoundingClientRect().height, ye = Le.bottom - (ve + Te), Ae = Math.max(0, Le.height - Te), Pe = Math.round(Math.min(Math.max(ye, 0), Ae));
    _e((De) => De === Pe ? De : Pe);
  }, [t, C, be]);
  m.useLayoutEffect(() => {
    Y();
  }, [Y]), m.useEffect(() => {
    if (!I || typeof ResizeObserver > "u")
      return;
    const S = new ResizeObserver(() => {
      var X;
      (X = re.current) == null || X.updatePosition(), Y();
    });
    return S.observe(I), () => S.disconnect();
  }, [I, Y]);
  const de = () => {
    ce(null);
  }, A = (S) => {
    o(), S == null || S();
  }, ke = () => {
    var X;
    const S = C === "platforms" ? k : oe;
    ce(null), (X = S.current) == null || X.focus();
  }, q = (S) => {
    ce((X) => X === S ? null : S);
  }, He = (S) => {
    S.key !== B && (o(), j ? j(S) : fn(S.url));
  }, ze = (S, X) => {
    o(), S.onClick ? S.onClick() : L ? L(S, X) : S.path && (N == null || N(S.path));
  }, Ee = (S) => {
    S.key === "Escape" && C && (S.stopPropagation(), ke());
  }, $ = { borderRadius: "8px", py: 1, gap: 0.5 }, Me = { color: "text.secondary", fontSize: 20 }, ne = {
    color: c,
    bgcolor: d,
    "& .MuiListItemIcon-root": { color: c },
    "& .MuiSvgIcon-root": { color: c },
    "&:hover": { bgcolor: Ve(c, 0.22) }
  }, ue = C === "settings", he = C === "platforms", ie = /* @__PURE__ */ u(le, { direction: "row", sx: { alignItems: "center", gap: 1.5, p: 2 }, children: [
    i(44),
    /* @__PURE__ */ u(x, { sx: { minWidth: 0, flex: 1 }, children: [
      /* @__PURE__ */ e(z, { noWrap: !0, sx: { fontWeight: 600 }, children: h }),
      a ? /* @__PURE__ */ e(
        z,
        {
          noWrap: !0,
          variant: "body2",
          "data-testid": "account-menu-email",
          sx: { color: "text.secondary" },
          children: a
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
    Qr,
    {
      open: t,
      anchorEl: r,
      onClose: o,
      action: re,
      anchorOrigin: { vertical: "top", horizontal: "left" },
      transformOrigin: { vertical: "bottom", horizontal: "left" },
      slotProps: {
        transition: { onExited: de },
        paper: {
          ref: U,
          onKeyDown: Ee,
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
            ref: W,
            "data-testid": "account-menu",
            sx: { ...bo, width: n, minWidth: n },
            children: [
              g ? /* @__PURE__ */ e(
                Qe,
                {
                  onClick: () => A(g),
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
                    ...go
                  },
                  children: ie
                }
              ) : /* @__PURE__ */ e(x, { "data-testid": "account-menu-header", children: ie }),
              /* @__PURE__ */ e(Ne, {}),
              p ? /* @__PURE__ */ u(
                x,
                {
                  "data-testid": "menu-item-theme",
                  sx: {
                    ...$,
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
                    /* @__PURE__ */ e(se, { children: /* @__PURE__ */ e(cn, { fontSize: "small" }) }),
                    /* @__PURE__ */ e(z, { sx: { flex: 1 }, children: "Theme" }),
                    /* @__PURE__ */ e(
                      ri,
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
                kt,
                {
                  autoFocusItem: t,
                  sx: { px: 1, pt: p ? 0 : 0.5, pb: 0.5 },
                  children: [
                    Oe ? /* @__PURE__ */ u(
                      Ce,
                      {
                        ref: oe,
                        onClick: K ? () => q("settings") : () => A(b),
                        "aria-haspopup": K ? "dialog" : void 0,
                        "aria-expanded": K ? ue : void 0,
                        "data-active": ue ? "true" : "false",
                        "data-testid": "menu-item-settings",
                        sx: ue ? { ...$, ...ne } : $,
                        children: [
                          /* @__PURE__ */ e(se, { children: /* @__PURE__ */ e(qr, { fontSize: "small" }) }),
                          /* @__PURE__ */ e(z, { sx: { flex: 1 }, children: "Settings" }),
                          /* @__PURE__ */ e(er, { sx: Me })
                        ]
                      }
                    ) : null,
                    We ? /* @__PURE__ */ e(Ne, { component: "li", sx: { my: 0.5 } }) : null,
                    We ? /* @__PURE__ */ u(
                      Ce,
                      {
                        ref: k,
                        onClick: () => q("platforms"),
                        "aria-haspopup": "dialog",
                        "aria-expanded": he,
                        "data-active": he ? "true" : "false",
                        "data-testid": "menu-item-platforms",
                        sx: he ? { ...$, ...ne } : $,
                        children: [
                          /* @__PURE__ */ e(se, { children: /* @__PURE__ */ e(sn, { fontSize: "small" }) }),
                          /* @__PURE__ */ e(z, { sx: { flex: 1 }, children: "Lumora Platforms" }),
                          /* @__PURE__ */ e(er, { sx: Me })
                        ]
                      }
                    ) : null,
                    P ? /* @__PURE__ */ e(Ne, { component: "li", sx: { my: 0.5 } }) : null,
                    P ? /* @__PURE__ */ u(
                      Ce,
                      {
                        onClick: () => A(P),
                        "data-testid": "menu-item-logout",
                        sx: {
                          ...$,
                          color: te ? "error.light" : "error.main"
                        },
                        children: [
                          /* @__PURE__ */ e(se, { sx: { color: "inherit" }, children: /* @__PURE__ */ e(Yr, { fontSize: "small" }) }),
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
        We && C === "platforms" || K && C === "settings" ? /* @__PURE__ */ e(
          x,
          {
            ref: G,
            "data-testid": "account-menu-subcard",
            style: { marginBottom: Se },
            sx: { display: "flex" },
            children: C === "platforms" ? /* @__PURE__ */ e(
              Jn,
              {
                platforms: y,
                currentPlatformKey: B,
                onSelect: He,
                accentColor: c,
                tint: d,
                width: ei,
                sx: Hr
              }
            ) : /* @__PURE__ */ e(
              Qn,
              {
                sections: v,
                onItemClick: ze,
                width: ti,
                sx: Hr
              }
            )
          }
        ) : null
      ]
    }
  );
}, ni = {
  "&:focus, &:focus-visible": { outline: "none" }
}, ii = ({
  mainLinks: t,
  secondaryLinks: r = [],
  activePath: o,
  onLinkClick: n,
  logo: i,
  title: h,
  onBrandClick: a,
  brandColor: l,
  headerBackgroundColor: c,
  headerForegroundColor: d,
  activeAccentColor: p = "#01584f",
  groupAccentColor: w,
  activeForegroundColor: f,
  foregroundColor: g,
  surfaceBackgroundColor: R,
  collapsed: b,
  onCollapsedChange: v,
  expandedWidth: L,
  collapsedWidth: N,
  topContent: y,
  color: B,
  hoverColor: j,
  avatarColor: P,
  showProfile: E = !0,
  userName: te = "User",
  userEmail: re,
  userRole: I,
  userAvatar: U,
  showNotifications: W = !0,
  notificationCount: k = 0,
  onNotificationsClick: oe,
  whatsNewCount: be = 0,
  onProfileClick: G,
  showSettings: Se = !0,
  onSettingsClick: _e,
  settingsSections: C,
  onSettingsItemClick: ce,
  platforms: We,
  currentPlatformKey: K,
  onPlatformSelect: Oe,
  onLogout: Y,
  theme: de = "light",
  showThemeToggler: A = !0,
  onThemeToggle: ke
}) => {
  const q = Wt(), He = q.palette.mode === "dark", ze = R ?? (He ? q.palette.background.paper : "#ffffff"), Ee = B ?? g ?? (He ? q.palette.text.primary : p), $ = j ?? w ?? Nt(p), Me = P ?? p, ne = m.useRef(null), [ue, he] = m.useState(!1), ie = I ? io(I) : void 0, S = (Ae) => /* @__PURE__ */ e(
    ar,
    {
      name: te,
      avatar: U,
      color: Me,
      size: Ae
    }
  ), X = k + be, Le = W ? /* @__PURE__ */ e(
    sr,
    {
      count: X,
      onClick: oe,
      color: Ee,
      hoverColor: $,
      tooltipPlacement: "right",
      testId: "panel-notifications"
    }
  ) : null, ve = E ? /* @__PURE__ */ u(
    Qe,
    {
      ref: ne,
      onClick: () => he(!0),
      "aria-haspopup": "menu",
      "aria-expanded": ue,
      "aria-label": "Account menu",
      "data-testid": "panel-user-button",
      sx: {
        flex: b ? "0 0 auto" : 1,
        minWidth: 0,
        justifyContent: "flex-start",
        gap: 1.25,
        p: 0.75,
        borderRadius: "10px",
        bgcolor: ue ? $ : "transparent",
        "&:hover": { bgcolor: $ },
        ...ni
      },
      children: [
        b && W ? (
          // Collapsed: no room for the bell, so unread shows as a dot
          /* @__PURE__ */ e(
            Jr,
            {
              color: "error",
              variant: "dot",
              overlap: "circular",
              invisible: !X,
              children: S(36)
            }
          )
        ) : S(b ? 36 : 40),
        b ? null : /* @__PURE__ */ u(x, { sx: { minWidth: 0, textAlign: "left" }, children: [
          /* @__PURE__ */ e(
            z,
            {
              noWrap: !0,
              sx: { fontWeight: 600, color: Ee, lineHeight: 1.3 },
              children: te
            }
          ),
          ie ? /* @__PURE__ */ e(
            z,
            {
              noWrap: !0,
              variant: "caption",
              "data-testid": "panel-user-role",
              sx: {
                display: "block",
                color: Ee,
                opacity: 0.85,
                letterSpacing: "0.02em",
                lineHeight: 1.3
              },
              children: ie
            }
          ) : null
        ] })
      ]
    }
  ) : null, Te = !!Le && (!b || !ve);
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
          rr,
          {
            mainLinks: t,
            secondaryLinks: r,
            activePath: o,
            onLinkClick: n,
            showHeaderBar: !0,
            logo: i,
            title: h,
            onBrandClick: a,
            brandColor: l,
            headerBackgroundColor: c,
            headerForegroundColor: d,
            activeAccentColor: p,
            groupAccentColor: w,
            activeForegroundColor: f,
            foregroundColor: g,
            surfaceBackgroundColor: ze,
            collapsed: b,
            onCollapsedChange: v,
            expandedWidth: L,
            collapsedWidth: N,
            topContent: y,
            footer: ve || Te ? /* @__PURE__ */ u(
              le,
              {
                direction: "row",
                sx: {
                  alignItems: "center",
                  gap: 0.5,
                  justifyContent: "center"
                },
                children: [
                  ve,
                  Te ? Le : null
                ]
              }
            ) : void 0
          }
        ),
        E ? /* @__PURE__ */ e(
          oi,
          {
            open: ue,
            anchorEl: ne.current,
            onClose: () => he(!1),
            width: Math.max(L - 16, 240),
            renderAvatar: S,
            userName: te,
            userEmail: re,
            roleLabel: ie,
            accentColor: p,
            tint: $,
            showThemeToggler: A,
            theme: de,
            onThemeToggle: ke,
            onProfileClick: G,
            showSettings: Se,
            onSettingsClick: _e,
            settingsSections: C,
            onSettingsItemClick: ce,
            onLinkClick: n,
            platforms: We,
            currentPlatformKey: K,
            onPlatformSelect: Oe,
            onLogout: Y
          }
        ) : null
      ]
    }
  );
}, ai = ({
  compact: t,
  color: r,
  hoverColor: o,
  showProfile: n,
  whatsNewCount: i = 0,
  ...h
}) => {
  var N;
  const {
    avatarColor: a,
    showNotifications: l,
    notificationCount: c,
    onNotificationsClick: d,
    userName: p = "User",
    userRole: w,
    userAvatar: f
  } = h, g = m.useRef(null), [R, b] = m.useState(
    null
  ), v = !!R;
  if (!l && !n)
    return null;
  const L = {
    "&.Mui-focusVisible": { outline: "2px solid", outlineColor: r }
  };
  return /* @__PURE__ */ u(at, { children: [
    /* @__PURE__ */ u(
      le,
      {
        ref: g,
        direction: t ? "column" : "row",
        spacing: 0.5,
        "data-testid": "sidebar-footer",
        sx: { width: "100%", alignItems: "center" },
        children: [
          n && /* @__PURE__ */ e(
            ge,
            {
              title: t ? p : "",
              placement: "right",
              arrow: !0,
              children: /* @__PURE__ */ e(
                Qe,
                {
                  onClick: () => b(g.current),
                  "aria-label": `Account menu for ${p}`,
                  "aria-haspopup": "menu",
                  "aria-expanded": v,
                  "data-testid": "sidebar-user",
                  sx: {
                    flex: t ? "0 0 auto" : "1 1 auto",
                    minWidth: 0,
                    gap: 1.25,
                    p: t ? 0.5 : "6px 8px",
                    justifyContent: "flex-start",
                    borderRadius: "8px",
                    color: r,
                    bgcolor: v ? o : "transparent",
                    "&:hover": { bgcolor: o },
                    ...L
                  },
                  children: /* @__PURE__ */ e(
                    po,
                    {
                      name: p,
                      role: w,
                      avatar: f,
                      avatarColor: a,
                      showText: !t
                    }
                  )
                }
              )
            }
          ),
          l && /* @__PURE__ */ e(
            sr,
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
      fo,
      {
        anchorEl: R,
        onClose: () => b(null),
        placement: t ? "beside" : "above",
        width: t || (N = g.current) == null ? void 0 : N.clientWidth,
        ...h
      }
    )
  ] });
}, si = 'input, textarea, [contenteditable="true"]', Pr = (t) => {
  var r;
  (r = t == null ? void 0 : t.querySelector(si)) == null || r.focus();
}, li = ({
  search: t,
  mode: r,
  onExpand: o,
  autoFocus: n = !1,
  onAutoFocused: i,
  color: h,
  hoverColor: a
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
        /* @__PURE__ */ e(ge, { title: "Search", placement: "right", arrow: !0, children: /* @__PURE__ */ e(
          Ie,
          {
            "aria-label": "Search",
            onClick: (p) => r === "expand" ? o == null ? void 0 : o() : d(p.currentTarget),
            sx: {
              width: 44,
              height: 44,
              color: h,
              borderRadius: "8px",
              "&:hover": { bgcolor: a }
            },
            children: /* @__PURE__ */ e(Vr, {})
          }
        ) }),
        /* @__PURE__ */ e(
          Qr,
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
}, ci = 100, Ur = 80, Zt = 56, di = 300, qt = 288, Jt = 72, Kr = "lumora:sidebar-collapsed", Qt = "width 200ms ease, left 200ms ease", ui = 68, hi = { xs: 2, md: 5 }, pi = () => typeof navigator < "u" && /Mac|iPhone|iPad/.test(navigator.platform || navigator.userAgent), fi = (t, r) => {
  const o = (n) => typeof n == "number" ? r.spacing(n) : n;
  return typeof t == "object" ? Object.fromEntries(
    Object.entries(t).map(([n, i]) => [n, o(i)])
  ) : o(t);
}, xa = ({
  children: t,
  sidebarLinks: r = [],
  secondarySidebarLinks: o = [],
  appName: n = "Dashboard",
  showSidebar: i = !0,
  showSidebarRailTitles: h = !1,
  sidebarVariant: a = "rail",
  mobileNavigation: l = "bottom-bar",
  mobileBottomBarLinks: c,
  logo: d,
  onBrandClick: p,
  searchComponent: w,
  brandColor: f,
  contentPadding: g = hi,
  userMenuItems: R,
  sidebarBackgroundColor: b,
  sidebarHeaderBackgroundColor: v,
  groupAccentColor: L,
  activeSidebarForegroundColor: N,
  enableRefreshToken: y = !1,
  activePath: B,
  onLinkClick: j,
  showProfile: P = !0,
  userName: E,
  userRole: te,
  userAvatar: re,
  userEmail: I,
  onLogout: U,
  showSettings: W = !0,
  onSettingsClick: k,
  onProfileClick: oe,
  settingsSections: be,
  onSettingsItemClick: G,
  showNotifications: Se = !0,
  notificationCount: _e = 0,
  NotificationSidebarContent: C,
  whatsNewCount: ce = 0,
  onNotificationsClick: We,
  platforms: K,
  currentPlatformKey: Oe,
  onPlatformSelect: Y,
  onVerify: de,
  alertProps: A,
  style: ke,
  sidebarStyles: q,
  contentStyles: He,
  accentColor: ze,
  sidebarAccentColor: Ee,
  sidebarForegroundColor: $,
  contentBackgroundColor: Me,
  theme: ne = "light",
  showThemeToggler: ue = !1,
  onThemeToggle: he,
  GlobalChatSidebar: ie,
  useChatSidebar: S,
  chatPanelMode: X = "docked",
  chatPanelPosition: Le = "right",
  chatPanelWidth: ve = 420,
  onChatClose: Te,
  showAssistant: ye = !1,
  assistantPlacement: Ae = "sidebar",
  assistantShortcut: Pe = "j",
  onAssistantClick: De,
  assistantActive: st = !1,
  assistantBusy: et = !1,
  customNavbar: lt,
  customNavbarProps: s,
  redirectToLogin: _,
  apiBaseUrl: F
}) => {
  const O = $o(), D = Ho(O.breakpoints.down("md")), V = Ir(
    () => Gr(An(ne)),
    [ne]
  ), we = ne === "dark", J = ze ?? "#01584f", Q = Ee ?? J, ct = Me ?? (we ? "hsl(220, 35%, 9%)" : "#f2f9fc"), Ye = a === "collapsible", zt = a === "panel", So = zt && i && !D, Ue = a === "rail-labeled", lr = Ye || Ue, Ke = b ?? (we ? "hsl(220, 30%, 7%)" : "#ffffff"), Et = v ?? Ke, Be = $ ?? (we ? "#ffffff" : Q), dt = L ?? Nt(Be), ut = v ? tr(Et) : Be, cr = (T) => /* @__PURE__ */ e(
    fe,
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
  ), vt = f ?? ut, Mt = d ?? cr(vt), Eo = d ?? cr(f ?? Be), [Ge, vo] = qe(
    () => oo(Kr) ?? !1
  ), Lt = (T) => {
    vo(T), no(Kr, T);
  }, [yo, dr] = qe(!1), wo = Fo(() => dr(!1), []);
  let pe = 0;
  i && !D && (Ue ? pe = Ur : Ye || zt ? pe = Ge ? Jt : qt : pe = ci);
  const [ur, Ze] = qe(!1), [hr, Bt] = qe(!1), ae = D && l === "bottom-bar", pr = `calc(${mo}px + env(safe-area-inset-bottom, 0px))`, [Ft, fr] = qe({ open: !1, tab: "notifications" }), mr = () => fr((T) => ({ ...T, open: !1 })), Ro = Se && !!C, [Io, Co] = qe(!0), [_o, Oo] = qe(!1), $t = S == null ? void 0 : S(), xr = ($t == null ? void 0 : $t.isOpen) ?? !1, gr = X === "floating" ? "floating" : "docked", To = gr === "docked" && xr && ie && !D ? ve : 0, yt = Gt(de), br = Gt(!1), Sr = Ir(
    () => Tn(F),
    [F]
  );
  It(() => {
    yt.current = de;
  }, [de]);
  const Ht = Gt(De);
  Ht.current = De;
  const ht = ye && Pe ? Pe.toLowerCase() : null;
  It(() => {
    if (!ht)
      return;
    const T = (ee) => {
      (ee.metaKey || ee.ctrlKey) && !ee.altKey && !ee.shiftKey && ee.key.toLowerCase() === ht && Ht.current && (ee.preventDefault(), Ht.current());
    };
    return window.addEventListener("keydown", T), () => window.removeEventListener("keydown", T);
  }, [ht]);
  const Er = (T) => {
    const ee = U(T);
    ee instanceof Promise && ee.catch((Xe) => {
      console.error("Error in logout handler:", Xe);
    });
  };
  if (It(() => {
    (() => {
      var ee;
      try {
        const { isAuthenticated: Xe } = _n();
        if (!Xe) {
          console.log("No session found, redirecting to login"), St(), _();
          return;
        }
        if (!br.current) {
          const { user: ft, error: Kt } = On();
          if (ft && !Kt) {
            const zo = {
              name: ft.name || "",
              email: ft.email || "",
              profilePicture: ft.profilePicture || "",
              role: ft.role || ""
            };
            br.current = !0, (ee = yt.current) == null || ee.call(yt, zo);
          } else
            Kt && console.error("Error getting user data:", Kt);
        }
        Oo(!0);
      } catch (Xe) {
        console.error("Error checking session:", Xe), St(), _();
      } finally {
        Co(!1);
      }
    })();
  }, [_]), It(() => {
    y && Dn(Sr, _);
  }, [y, Sr]), Io)
    return /* @__PURE__ */ e(Rr, { theme: V, children: /* @__PURE__ */ u(
      fe,
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
              sx: { color: J }
            }
          ),
          /* @__PURE__ */ e(fe, { sx: { mt: 2, color: "text.secondary" }, children: "Checking session..." })
        ]
      }
    ) });
  if (!_o)
    return null;
  const pt = w ?? (lt ? /* @__PURE__ */ e(lt, { ...s }) : null), Ao = (T) => {
    Ze(!1), Bt(!1), fr({ open: !0, tab: T });
  }, Pt = C && (() => Ao("notifications")), Do = _e + ce, vr = {
    avatarColor: Q,
    menuItems: R,
    showNotifications: Se,
    notificationCount: _e,
    whatsNewCount: ce,
    onNotificationsClick: Pt,
    showProfile: P,
    userName: E,
    userRole: te,
    userAvatar: re,
    showSettings: W,
    onSettingsClick: k,
    showThemeToggler: ue,
    theme: ne,
    onThemeToggle: he,
    onLogout: Er
  }, Ut = (T) => /* @__PURE__ */ e(
    ai,
    {
      ...vr,
      compact: T,
      color: Be,
      hoverColor: dt
    }
  ), yr = ht ? [pi() ? "⌘" : "Ctrl", ht.toUpperCase()] : void 0, No = (T) => ye && Ae === "sidebar" ? /* @__PURE__ */ e(
    kr,
    {
      variant: T ? "sidebar-icon" : "sidebar",
      onClick: De,
      active: st,
      busy: et,
      shortcutKeys: yr,
      accentColor: Be
    }
  ) : null, Wo = (T) => pt ? /* @__PURE__ */ e(
    li,
    {
      search: pt,
      mode: T,
      onExpand: () => {
        Lt(!1), dr(!0);
      },
      autoFocus: yo,
      onAutoFocused: wo,
      color: Be,
      hoverColor: dt
    }
  ) : null, wt = (T) => {
    const ee = No(T !== "full"), Xe = Wo(T);
    return ee || Xe ? /* @__PURE__ */ u(
      Go,
      {
        spacing: 1.5,
        sx: { alignItems: T === "full" ? "stretch" : "center" },
        children: [
          ee,
          Xe
        ]
      }
    ) : void 0;
  }, ko = fi(
    g,
    O
  );
  return /* @__PURE__ */ e(Rr, { theme: V, children: /* @__PURE__ */ u(
    fe,
    {
      sx: {
        display: "flex",
        minHeight: "100vh",
        ...ke
      },
      children: [
        /* @__PURE__ */ e(Uo, {}),
        D && /* @__PURE__ */ e(
          Yn,
          {
            height: Zt,
            onMenuClick: i && !ae ? () => Ze(!0) : void 0,
            appName: n,
            logo: Mt,
            onBrandClick: p,
            background: Et,
            color: ut,
            brandColor: vt,
            endContent: Se ? /* @__PURE__ */ e(
              sr,
              {
                count: Do,
                onClick: Pt,
                color: ut,
                hoverColor: dt,
                tooltipPlacement: "bottom",
                testId: "mobile-notifications"
              }
            ) : void 0
          }
        ),
        i && !D && lr && /* @__PURE__ */ u(
          fe,
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
              // Flex column so the sidebar shrinks to fit siblings
              // (the alert card) instead of pushing them off-screen.
              display: "flex",
              flexDirection: "column",
              // Keep the strip behind any bottom sibling on-brand.
              bgcolor: Ye ? Ke : void 0,
              borderRight: "1px solid",
              borderColor: "divider",
              transition: Qt,
              ...q
            },
            children: [
              /* @__PURE__ */ e(
                rr,
                {
                  mainLinks: r,
                  secondaryLinks: o,
                  activePath: B,
                  onLinkClick: j,
                  showHeaderBar: Ye,
                  logo: Mt,
                  title: n,
                  onBrandClick: p,
                  brandColor: vt,
                  headerBackgroundColor: Ye ? Et : void 0,
                  headerForegroundColor: Ye ? ut : void 0,
                  activeAccentColor: Q,
                  groupAccentColor: L,
                  activeForegroundColor: N,
                  foregroundColor: $,
                  surfaceBackgroundColor: Ke,
                  collapsed: Ue ? !0 : Ge,
                  onCollapsedChange: Ue ? void 0 : Lt,
                  showLabels: Ue,
                  expandedWidth: qt,
                  collapsedWidth: Ue ? Ur : Jt,
                  topContent: wt(
                    Ue ? "popover" : Ge ? "expand" : "full"
                  ),
                  footer: Ut(
                    Ue || Ge
                  )
                }
              ),
              Ye && (A == null ? void 0 : A.show) && !Ge && /* @__PURE__ */ e(Ot, { ...A })
            ]
          }
        ),
        So && /* @__PURE__ */ u(
          fe,
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
              display: "flex",
              flexDirection: "column",
              bgcolor: Ke,
              borderRight: "1px solid",
              borderColor: "divider",
              transition: Qt,
              ...q
            },
            children: [
              /* @__PURE__ */ e(
                ii,
                {
                  mainLinks: r,
                  secondaryLinks: o,
                  activePath: B,
                  onLinkClick: j,
                  logo: Mt,
                  title: n,
                  onBrandClick: p,
                  brandColor: vt,
                  headerBackgroundColor: Et,
                  headerForegroundColor: ut,
                  activeAccentColor: Q,
                  groupAccentColor: L,
                  activeForegroundColor: N,
                  foregroundColor: $,
                  surfaceBackgroundColor: Ke,
                  collapsed: Ge,
                  onCollapsedChange: Lt,
                  expandedWidth: qt,
                  collapsedWidth: Jt,
                  topContent: wt(
                    Ge ? "expand" : "full"
                  ),
                  color: Be,
                  hoverColor: dt,
                  avatarColor: Q,
                  showProfile: P,
                  userName: E,
                  userEmail: I,
                  userRole: te,
                  userAvatar: re,
                  showNotifications: Se,
                  notificationCount: _e,
                  onNotificationsClick: Ro ? Pt : We,
                  whatsNewCount: ce,
                  onProfileClick: oe,
                  showSettings: W,
                  onSettingsClick: k,
                  settingsSections: be,
                  onSettingsItemClick: G,
                  platforms: K,
                  currentPlatformKey: Oe,
                  onPlatformSelect: Y,
                  onLogout: Er,
                  theme: ne,
                  showThemeToggler: ue,
                  onThemeToggle: he
                }
              ),
              (A == null ? void 0 : A.show) && !Ge && /* @__PURE__ */ e(Ot, { ...A })
            ]
          }
        ),
        i && !D && !lr && !zt && /* @__PURE__ */ e(
          Cr,
          {
            variant: "permanent",
            sx: {
              width: pe,
              flexShrink: 0,
              zIndex: 2,
              "& .MuiDrawer-paper": {
                width: pe,
                boxSizing: "border-box",
                bgcolor: ct,
                borderRight: "none"
              },
              ...q
            },
            children: /* @__PURE__ */ u(
              fe,
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
                    fe,
                    {
                      sx: {
                        display: "flex",
                        justifyContent: "center",
                        mb: 1.5
                      },
                      children: /* @__PURE__ */ e(
                        Dt,
                        {
                          logo: Eo,
                          appName: n,
                          onClick: p,
                          color: f ?? Be,
                          testId: "sidebar-header-brand"
                        }
                      )
                    }
                  ),
                  wt("popover"),
                  /* @__PURE__ */ u(
                    fe,
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
                          Un,
                          {
                            mainLinks: r,
                            secondaryLinks: o,
                            activePath: B,
                            onLinkClick: j,
                            accentColor: Q,
                            surfaceBackgroundColor: ct,
                            railShowTitles: h
                          }
                        ),
                        (A == null ? void 0 : A.show) && /* @__PURE__ */ e(Ot, { ...A })
                      ]
                    }
                  ),
                  /* @__PURE__ */ e(fe, { sx: { py: 1.5 }, children: Ut(!0) })
                ]
              }
            )
          }
        ),
        i && D && /* @__PURE__ */ u(
          Ko,
          {
            anchor: ae ? "bottom" : "left",
            open: ur,
            onOpen: () => Ze(!0),
            onClose: () => Ze(!1),
            disableSwipeToOpen: !0,
            sx: { zIndex: (T) => T.zIndex.drawer + 1 },
            slotProps: {
              paper: {
                "aria-label": "Navigation",
                sx: {
                  bgcolor: Ke,
                  backgroundImage: "none",
                  ...ae ? {
                    maxHeight: "min(80vh, 640px)",
                    borderTopLeftRadius: "16px",
                    borderTopRightRadius: "16px",
                    pb: "env(safe-area-inset-bottom, 0px)"
                  } : { maxWidth: "85vw" }
                }
              }
            },
            children: [
              ae && // Grab handle: the sheet can be swiped down to close
              /* @__PURE__ */ e(
                fe,
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
                rr,
                {
                  mainLinks: r,
                  secondaryLinks: o,
                  activePath: B,
                  onLinkClick: (T) => {
                    j == null || j(T), Ze(!1);
                  },
                  onLinkAction: () => Ze(!1),
                  collapsed: !1,
                  expandedWidth: ae ? "100%" : di,
                  activeAccentColor: Q,
                  groupAccentColor: L,
                  activeForegroundColor: N,
                  foregroundColor: $,
                  surfaceBackgroundColor: Ke,
                  topInsetPx: ae ? 8 : 0,
                  topContent: ae ? void 0 : wt("full"),
                  footer: ae ? void 0 : Ut(!1)
                }
              ),
              (A == null ? void 0 : A.show) && /* @__PURE__ */ e(Ot, { ...A })
            ]
          }
        ),
        ae && pt && /* @__PURE__ */ e(
          Vn,
          {
            open: hr,
            onClose: () => Bt(!1),
            search: pt
          }
        ),
        ae && /* @__PURE__ */ e(
          jn,
          {
            ...vr,
            pinnedLinks: c,
            activePath: B,
            onLinkClick: j,
            onMenuClick: i ? () => Ze(!0) : void 0,
            menuOpen: ur,
            onSearchClick: pt ? () => Bt(!0) : void 0,
            searchOpen: hr,
            showAssistant: ye,
            onAssistantClick: De,
            assistantActive: st,
            showProfile: P,
            background: Ke,
            color: Be,
            activeColor: Q,
            activeBackground: dt
          }
        ),
        /* @__PURE__ */ e(
          fe,
          {
            component: "main",
            sx: {
              flexGrow: 1,
              "--lumora-content-padding": ko,
              // Where sticky page elements should pin (below the mobile bar)
              "--lumora-sticky-top": D ? `${Zt}px` : "0px",
              p: "var(--lumora-content-padding)",
              width: pe ? `calc(100% - ${pe}px)` : "100%",
              transition: Qt,
              mt: D ? `${Zt}px` : 0,
              // Keep the last content clear of the bottom bar
              ...ae && {
                pb: `calc(var(--lumora-content-padding) + ${pr})`
              },
              backgroundColor: ct,
              ...He
            },
            children: t
          }
        ),
        ie && /* @__PURE__ */ e(
          zn,
          {
            open: xr,
            variant: gr,
            position: Le,
            width: ve,
            sidebarWidthPx: pe,
            bottomOffsetPx: ye && Ae === "floating" ? ui : 0,
            fullScreen: D,
            fullScreenBottom: ae ? pr : "0px",
            onClose: Te,
            children: /* @__PURE__ */ e(ie, {})
          }
        ),
        ye && Ae === "floating" && !ae && /* @__PURE__ */ e(
          kr,
          {
            variant: "floating",
            rightOffsetPx: To,
            shortcutKeys: yr,
            onClick: De,
            active: st,
            busy: et
          }
        ),
        Se && C && /* @__PURE__ */ e(
          Cr,
          {
            anchor: "right",
            open: Ft.open,
            onClose: mr,
            slotProps: {
              paper: { sx: { width: 380, maxWidth: "100vw" } }
            },
            children: /* @__PURE__ */ e(
              C,
              {
                onClose: mr,
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
  H as AUTH_ERROR_CODES,
  M as AuthError,
  rr as CollapsibleSidebar,
  fa as FullBleedSection,
  In as Kbd,
  xa as LumoraWrapper,
  St as clearAuthTokens,
  xa as default,
  ma as getAuthErrorMessage,
  bt as getAuthTokens,
  On as getCurrentUser,
  An as getDesignTokens,
  _n as isAuthenticated,
  nr as logAuthError,
  so as storeAuthTokens
};
