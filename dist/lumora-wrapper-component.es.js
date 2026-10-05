import { jsx as e, jsxs as d, Fragment as at } from "react/jsx-runtime";
import Wr from "@mui/icons-material/KeyboardArrowDownRounded";
import Lr from "@mui/icons-material/KeyboardArrowUpRounded";
import qt from "@mui/icons-material/ChevronRightRounded";
import zr from "@mui/icons-material/ViewSidebarOutlined";
import x from "@mui/material/Box";
import Co from "@mui/material/Collapse";
import We from "@mui/material/Divider";
import Oe from "@mui/material/IconButton";
import Et from "@mui/material/ListItemButton";
import j from "@mui/material/ListItemIcon";
import Fe from "@mui/material/ListItemText";
import de from "@mui/material/Stack";
import ye from "@mui/material/Tooltip";
import _ from "@mui/material/Typography";
import { useTheme as _t, createTheme as Vo, alpha as Xe, ThemeProvider as Io } from "@mui/material/styles";
import * as m from "react";
import { useMemo as To, useState as Qe, useCallback as Pr, useRef as $t, useEffect as wt } from "react";
import st from "@mui/material/ButtonBase";
import { useTheme as Br, useMediaQuery as Mr, Box as Se, CircularProgress as Fr, CssBaseline as Hr, Drawer as Oo, SwipeableDrawer as $r, Stack as Ur } from "@mui/material";
import _o from "axios";
import Kr from "@mui/material/Card";
import Gr from "@mui/material/CardContent";
import Yo from "@mui/material/Button";
import jr from "@mui/icons-material/AutoAwesomeRounded";
import Xr from "@mui/material/Grow";
import to from "@mui/material/Paper";
import Vr from "@mui/material/Slide";
import Yr from "@mui/material/ListSubheader";
import Q from "@mui/material/MenuItem";
import kt from "@mui/material/MenuList";
import qr from "@mui/material/Popper";
import qo from "@mui/icons-material/MenuRounded";
import Jo from "@mui/icons-material/SearchRounded";
import Zo from "@mui/icons-material/LogoutRounded";
import Qo from "@mui/icons-material/NotificationsNoneOutlined";
import er from "@mui/icons-material/SettingsOutlined";
import Jr from "@mui/material/Avatar";
import Zr from "@mui/material/Menu";
import ko from "@mui/material/ToggleButton";
import Qr from "@mui/material/ToggleButtonGroup";
import en from "@mui/material/Drawer";
import tn from "@mui/material/AppBar";
import on from "@mui/material/Toolbar";
import tr from "@mui/material/Badge";
import rn from "@mui/icons-material/AutoAwesomeOutlined";
import nn from "@mui/icons-material/DarkModeOutlined";
import an from "@mui/icons-material/LayersOutlined";
import sn from "@mui/icons-material/LightModeOutlined";
import ln from "@mui/icons-material/NotificationsOutlined";
import cn from "@mui/icons-material/PersonOutlineRounded";
import dn from "@mui/icons-material/SettingsBrightnessOutlined";
import un from "@mui/icons-material/SupportAgentOutlined";
import or from "@mui/material/Popover";
import pn from "@mui/icons-material/ArrowOutwardRounded";
import hn from "@mui/icons-material/CheckRounded";
import fn from "@mui/icons-material/ShieldOutlined";
import mn from "@mui/icons-material/ExpandMoreRounded";
const Tt = ({
  logo: t,
  title: o,
  appName: r,
  onClick: n,
  color: s,
  testId: p
}) => {
  const a = {
    alignItems: "center",
    gap: 1,
    minWidth: 0,
    flexShrink: 0,
    color: s,
    // Consumer SVG logos pick up the brand color
    "& svg": { color: "inherit", fill: "currentColor" }
  }, l = /* @__PURE__ */ d(at, { children: [
    o ? /* @__PURE__ */ e(
      _,
      {
        variant: "h6",
        noWrap: !0,
        sx: {
          color: s,
          fontWeight: 600,
          fontSize: "18px",
          lineHeight: 1,
          textTransform: "uppercase"
        },
        children: o
      }
    ) : null,
    t
  ] });
  return n ? /* @__PURE__ */ e(
    st,
    {
      onClick: n,
      "aria-label": `${r} home`,
      "data-testid": p,
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
          outlineColor: s,
          outlineOffset: 2
        }
      },
      children: l
    }
  ) : /* @__PURE__ */ e(de, { direction: "row", "data-testid": p, sx: a, children: l });
}, ft = (t) => !!t.subitems?.length, Ct = (t, o) => t ? `${t}/${o.text}` : o.text, et = (t, o) => o ? t.path && o === t.path ? !0 : t.subitems?.some((r) => et(r, o)) ?? !1 : !1, je = (t, o) => !!(o && t.path === o), rr = (t, o) => (t ?? []).flatMap((r) => {
  const n = r.icon ?? o;
  return ft(r) ? rr(r.subitems, n) : r.path ? [{ sub: r, icon: n }] : [];
}), Jt = (t) => {
  const o = nr(t);
  if (!o)
    return "#ffffff";
  const [r, n, s] = o.map((a) => {
    const l = a / 255;
    return l <= 0.03928 ? l / 12.92 : ((l + 0.055) / 1.055) ** 2.4;
  });
  return 0.2126 * r + 0.7152 * n + 0.0722 * s > 0.5 ? "#0b1f1c" : "#ffffff";
}, Ot = (t) => {
  const o = nr(t);
  if (!o)
    return "rgba(1, 88, 79, 0.12)";
  const [r, n, s] = o;
  return `rgba(${r}, ${n}, ${s}, 0.14)`;
}, nr = (t) => {
  let o = t.trim().replace(/^#/, "");
  if (o.length === 3 && (o = o.split("").map((n) => n + n).join("")), o.length !== 6 || /[^0-9a-fA-F]/.test(o))
    return null;
  const r = parseInt(o, 16);
  return [r >> 16 & 255, r >> 8 & 255, r & 255];
}, ir = () => typeof window < "u" && !!window.localStorage, ar = (t) => {
  if (!ir())
    return null;
  try {
    const o = window.localStorage.getItem(t);
    return o === null ? null : o === "true";
  } catch (o) {
    return console.warn("Failed to read sidebar collapsed state:", o), null;
  }
}, sr = (t, o) => {
  if (ir())
    try {
      window.localStorage.setItem(t, o ? "true" : "false");
    } catch (r) {
      console.warn("Failed to persist sidebar collapsed state:", r);
    }
}, xn = (t) => {
  typeof window > "u" || window.location.assign(t);
}, gn = 264, bn = 72, Sn = "lumora:sidebar-collapsed", En = "width 200ms ease", Ao = 64, yt = {
  "&:focus, &:focus-visible": { outline: "none" }
}, wn = 16, yn = 14, vn = 4, Rn = 2.5, Do = "0.7rem", No = 22, tt = ({ text: t, variant: o = "body1", center: r = !1, fontSize: n, fontWeight: s }) => {
  const p = m.useRef(null), [a, l] = m.useState(!1), c = m.useCallback(() => {
    const u = p.current;
    u && l(u.scrollWidth > u.clientWidth + 0.5);
  }, []);
  return m.useLayoutEffect(() => {
    c();
  }, [c, t]), m.useEffect(() => {
    const u = p.current;
    if (!u)
      return;
    const f = new ResizeObserver(() => c());
    return f.observe(u), () => f.disconnect();
  }, [c]), /* @__PURE__ */ e(
    ye,
    {
      title: t,
      placement: "right",
      arrow: !0,
      enterDelay: 400,
      disableHoverListener: !a,
      disableFocusListener: !a,
      disableTouchListener: !a,
      children: /* @__PURE__ */ e(
        _,
        {
          ref: p,
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
            ...s ? { fontWeight: s } : {},
            ...r ? { textAlign: "center", lineHeight: 1.1 } : {}
          },
          children: t
        }
      )
    }
  );
}, Cn = ({
  open: t,
  size: o = wn
}) => t ? /* @__PURE__ */ e(Lr, { sx: { fontSize: o, opacity: 0.75 } }) : /* @__PURE__ */ e(Wr, { sx: { fontSize: o, opacity: 0.75 } }), Wo = ({ open: t }) => /* @__PURE__ */ e(
  qt,
  {
    sx: {
      fontSize: 20,
      opacity: 0.75,
      transition: "transform 150ms ease",
      transform: t ? "rotate(90deg)" : "none"
    }
  }
), In = () => /* @__PURE__ */ e(zr, { sx: { transform: "scaleX(-1)" } }), vt = 600, Zt = ({
  mainLinks: t,
  secondaryLinks: o = [],
  activePath: r,
  onLinkClick: n,
  onLinkAction: s,
  logo: p,
  title: a,
  onBrandClick: l,
  showHeaderBar: c = !1,
  headerBackgroundColor: u,
  headerForegroundColor: f,
  brandColor: v,
  activeAccentColor: h = "#01584f",
  groupAccentColor: S,
  activeForegroundColor: w,
  foregroundColor: g,
  surfaceBackgroundColor: M,
  collapsed: W,
  defaultCollapsed: D = !1,
  onCollapsedChange: T,
  persistKey: N = Sn,
  expandedWidth: X = gn,
  collapsedWidth: F = bn,
  showLabels: b = !1,
  topInsetPx: ne = 0,
  topContent: ie,
  footer: C
}) => {
  const $ = _t(), U = $.palette.mode === "dark", k = W !== void 0, [ue, _e] = m.useState(
    () => ar(N) ?? D
  ), H = k ? !!W : ue, [Ve, pe] = m.useState(
    {}
  ), L = w ?? Jt(h), ee = {
    bgcolor: h,
    color: L,
    "& .MuiListItemIcon-root": { color: L }
  }, Le = {
    bgcolor: h,
    color: L,
    borderRadius: "8px"
  }, te = S ?? Ot(h), He = M ?? (U ? $.palette.background.paper : "#ffffff"), oe = g ?? (U ? "text.primary" : h), G = u ?? He, he = f ?? (u ? Jt(G) : g ?? (U ? $.palette.text.primary : h)), ve = Ot(he), z = (i) => {
    n?.(i);
  }, Ye = () => {
    const i = !H;
    k || (_e(i), sr(N, i)), T?.(i);
  }, V = (i, y) => {
    pe((O) => ({ ...O, [i]: !y }));
  }, ke = (i, y) => Ve[y] ?? et(i, r), J = (i, y, O) => ({
    color: i ? L : oe,
    bgcolor: i ? h : "transparent",
    "& .MuiListItemIcon-root": {
      color: i ? L : oe,
      minWidth: O
    },
    "&:hover": i || b ? ee : { bgcolor: y }
  }), Ae = {
    "&.Mui-selected": {
      bgcolor: h
    },
    "&.Mui-selected:hover": ee
  }, re = (i) => {
    const y = je(i, r), O = /* @__PURE__ */ d(
      Et,
      {
        disabled: !i.path,
        selected: y,
        onClick: () => i.path && z(i.path),
        "data-testid": `sidebar-item-${i.text}`,
        "data-active": y ? "true" : "false",
        sx: {
          borderRadius: "8px",
          py: 1.25,
          px: 1.5,
          // Room for the action button laid over the row's end
          ...i.action && { pr: 6 },
          ...J(y, te, 36),
          ...Ae
        },
        children: [
          /* @__PURE__ */ e(j, { children: i.icon }),
          /* @__PURE__ */ e(
            Fe,
            {
              disableTypography: !0,
              primary: /* @__PURE__ */ e(
                tt,
                {
                  text: i.text,
                  fontWeight: vt
                }
              )
            }
          )
        ]
      },
      i.text
    );
    if (!i.action)
      return O;
    const { action: R } = i;
    return /* @__PURE__ */ d(x, { sx: { position: "relative" }, children: [
      O,
      /* @__PURE__ */ e(ye, { title: R.label, placement: "right", arrow: !0, children: /* @__PURE__ */ e(
        Oe,
        {
          "aria-label": R.label,
          "data-testid": `sidebar-action-${i.text}`,
          onClick: () => {
            R.onClick(), s?.();
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
            borderColor: y ? "rgba(255, 255, 255, 0.35)" : te,
            color: y ? L : oe,
            "&:hover": {
              bgcolor: y ? "rgba(255, 255, 255, 0.15)" : te
            },
            "& .MuiSvgIcon-root": { fontSize: 18 },
            // No lingering outline after a click; a clear ring for keyboard focus
            "&:focus:not(.Mui-focusVisible)": {
              outline: "none"
            },
            "&.Mui-focusVisible": {
              outline: "2px solid",
              outlineColor: y ? L : oe,
              outlineOffset: 1
            }
          },
          children: R.icon
        }
      ) })
    ] }, i.text);
  }, qe = (i) => {
    const y = et(i, r), O = je(i, r), R = Ct("", i), P = ke(i, R);
    return /* @__PURE__ */ d(
      x,
      {
        "data-testid": `sidebar-group-${i.text}`,
        sx: {
          borderRadius: "8px",
          bgcolor: y ? te : "transparent"
        },
        children: [
          /* @__PURE__ */ d(
            Et,
            {
              onClick: () => V(R, P),
              "data-testid": `sidebar-item-${i.text}`,
              "data-active": O ? "true" : "false",
              "aria-expanded": P,
              sx: {
                borderRadius: "8px",
                py: 1.25,
                px: 1.5,
                ...J(O, te, 36)
              },
              children: [
                /* @__PURE__ */ e(j, { children: i.icon }),
                /* @__PURE__ */ e(
                  Fe,
                  {
                    disableTypography: !0,
                    primary: /* @__PURE__ */ e(
                      tt,
                      {
                        text: i.text,
                        fontWeight: vt
                      }
                    )
                  }
                ),
                /* @__PURE__ */ e(Wo, { open: P })
              ]
            }
          ),
          /* @__PURE__ */ e(Co, { in: P, timeout: "auto", unmountOnExit: !0, children: /* @__PURE__ */ e(
            x,
            {
              "data-testid": `sidebar-children-${i.text}`,
              sx: { pb: 0.5 },
              children: i.subitems.map(
                (se) => ae(se, R, 1)
              )
            }
          ) })
        ]
      },
      i.text
    );
  }, ae = (i, y, O) => {
    const R = Ct(y, i), P = vn + (O - 1) * Rn;
    if (ft(i)) {
      const ge = et(i, r), Z = je(i, r), Pe = ke(i, R);
      return /* @__PURE__ */ d(x, { "data-testid": `sidebar-group-${i.text}`, children: [
        /* @__PURE__ */ d(
          Et,
          {
            onClick: () => V(R, Pe),
            "data-testid": `sidebar-subitem-${i.text}`,
            "data-active": ge ? "true" : "false",
            "aria-expanded": Pe,
            sx: {
              borderRadius: "8px",
              mx: 0.5,
              py: 0.75,
              pl: P,
              ...J(Z, "action.hover", 32)
            },
            children: [
              i.icon ? /* @__PURE__ */ e(j, { children: i.icon }) : null,
              /* @__PURE__ */ e(
                Fe,
                {
                  disableTypography: !0,
                  primary: /* @__PURE__ */ e(
                    tt,
                    {
                      text: i.text,
                      fontWeight: vt
                    }
                  )
                }
              ),
              /* @__PURE__ */ e(Wo, { open: Pe })
            ]
          }
        ),
        /* @__PURE__ */ e(Co, { in: Pe, timeout: "auto", unmountOnExit: !0, children: /* @__PURE__ */ e(x, { "data-testid": `sidebar-children-${i.text}`, children: i.subitems.map(
          (le) => ae(le, R, O + 1)
        ) }) })
      ] }, R);
    }
    const se = je(i, r);
    return /* @__PURE__ */ d(
      Et,
      {
        selected: se,
        disabled: !i.path,
        onClick: () => i.path && z(i.path),
        "data-testid": `sidebar-subitem-${i.text}`,
        "data-active": se ? "true" : "false",
        sx: {
          borderRadius: "8px",
          mx: 0.5,
          py: 0.75,
          pl: P,
          ...J(se, "action.hover", 32),
          ...Ae
        },
        children: [
          i.icon ? /* @__PURE__ */ e(j, { children: i.icon }) : null,
          /* @__PURE__ */ e(
            Fe,
            {
              disableTypography: !0,
              primary: /* @__PURE__ */ e(
                tt,
                {
                  text: i.text,
                  fontWeight: vt
                }
              )
            }
          )
        ]
      },
      R
    );
  }, Re = (i, y, O, R, P, se) => {
    const ge = !P, Z = /* @__PURE__ */ d(
      Oe,
      {
        "aria-label": y,
        disabled: ge,
        onClick: P,
        "data-testid": se?.testId ?? `sidebar-item-${y}`,
        "data-active": R ? "true" : "false",
        sx: b ? {
          display: "flex",
          flexDirection: "column",
          gap: 0.25,
          width: "100%",
          maxWidth: "100%",
          height: "auto",
          // 8px padding on all sides of the item container.
          p: 1,
          borderRadius: "8px",
          color: R ? L : oe,
          bgcolor: R ? h : "transparent",
          "& .MuiSvgIcon-root": {
            fontSize: No
          },
          "&:hover": Le,
          ...yt
        } : {
          // Icon-only collapsed rail (collapsible variant):
          // original hover — accent when active, else a subtle
          // tint; no foreground change.
          width: 44,
          height: 44,
          color: R ? L : oe,
          bgcolor: R ? h : "transparent",
          borderRadius: R ? "8px" : "50%",
          "&:hover": {
            bgcolor: R ? h : se?.insideGroup ? "action.hover" : te,
            borderRadius: "8px"
          },
          ...yt
        },
        children: [
          O,
          b ? /* @__PURE__ */ e(
            tt,
            {
              text: y,
              variant: "caption",
              center: !0,
              fontSize: Do
            }
          ) : null
        ]
      }
    );
    return b ? ge ? /* @__PURE__ */ e("span", { children: Z }, i) : /* @__PURE__ */ e(m.Fragment, { children: Z }, i) : /* @__PURE__ */ e(ye, { title: y, placement: "right", arrow: !0, children: ge ? /* @__PURE__ */ e("span", { children: Z }) : Z }, i);
  }, K = (i) => {
    const y = et(i, r), O = je(i, r), R = Ct("", i), P = ke(i, R), se = /* @__PURE__ */ d(
      Oe,
      {
        "aria-label": i.text,
        "aria-expanded": P,
        onClick: () => V(R, P),
        "data-testid": `sidebar-item-${i.text}`,
        "data-active": O ? "true" : "false",
        sx: {
          display: "flex",
          flexDirection: "column",
          gap: b ? 0.25 : 0,
          width: b ? "100%" : 44,
          maxWidth: "100%",
          // 8px padding on all sides of the labeled item container.
          ...b ? { p: 1 } : { py: 0.75 },
          borderRadius: "10px",
          color: O ? L : oe,
          bgcolor: O ? h : "transparent",
          // rail-labeled: active AND hover share the highlight. collapsible:
          // original behavior — accent only when active; the outer pill
          // supplies the idle-hover tint, so the button stays transparent.
          "&:hover": b ? { bgcolor: h, color: L } : {
            bgcolor: O ? h : "transparent"
          },
          ...yt
        },
        children: [
          b ? /* @__PURE__ */ e(
            x,
            {
              sx: {
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                "& .MuiSvgIcon-root": {
                  fontSize: No
                }
              },
              children: i.icon
            }
          ) : i.icon,
          b ? /* @__PURE__ */ e(
            tt,
            {
              text: i.text,
              variant: "caption",
              center: !0,
              fontSize: Do
            }
          ) : null,
          /* @__PURE__ */ e(Cn, { open: P, size: yn })
        ]
      }
    ), ge = b ? se : /* @__PURE__ */ e(ye, { title: i.text, placement: "right", arrow: !0, children: se });
    return /* @__PURE__ */ d(
      x,
      {
        "data-testid": `sidebar-group-${i.text}`,
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
          bgcolor: y ? te : "transparent",
          ...b ? {} : { "&:hover": { bgcolor: te } }
        },
        children: [
          ge,
          P ? rr(i.subitems, i.icon).map(
            ({ sub: Z, icon: Pe }) => Re(
              Z.path,
              Z.text,
              Pe,
              je(Z, r),
              () => z(Z.path),
              {
                insideGroup: !0,
                testId: `sidebar-subitem-${Z.text}`
              }
            )
          ) : null
        ]
      },
      i.text
    );
  }, fe = (i) => /* @__PURE__ */ e(
    x,
    {
      sx: {
        width: "100%",
        display: "flex",
        justifyContent: "center"
      },
      children: Re(
        i.text,
        i.text,
        i.icon,
        je(i, r),
        i.path ? () => z(i.path) : void 0
      )
    },
    i.text
  ), De = (i) => ft(i) ? H ? K(i) : qe(i) : H ? fe(i) : re(i), Ce = (i) => /* @__PURE__ */ e(
    de,
    {
      spacing: 0.5,
      sx: {
        width: "100%",
        alignItems: H ? "center" : "stretch"
      },
      children: i.map(De)
    }
  ), me = H ? F : X, E = H ? "Expand sidebar" : "Collapse sidebar", Ie = c ? /* @__PURE__ */ d(
    x,
    {
      "data-testid": "sidebar-header",
      sx: {
        minHeight: Ao,
        flexShrink: 0,
        display: "flex",
        alignItems: "center",
        bgcolor: G,
        ...H ? {
          // Toggle on top, the brand logo (its own link) below it
          flexDirection: "column",
          justifyContent: "center",
          gap: 1,
          py: 1.5
        } : {
          height: Ao,
          gap: 1.5,
          // Lines the toggle glyph up with the row icons below
          // (12px panel padding + 12px row padding = 24px, minus
          // the button's own 8px)
          px: 2
        }
      },
      children: [
        /* @__PURE__ */ e(ye, { title: E, placement: "right", arrow: !0, children: /* @__PURE__ */ e(
          Oe,
          {
            "aria-label": E,
            "aria-expanded": !H,
            onClick: Ye,
            "data-testid": "sidebar-collapse-toggle",
            disableFocusRipple: !0,
            sx: { color: he, ...yt },
            children: /* @__PURE__ */ e(In, {})
          }
        ) }),
        p || a ? /* @__PURE__ */ e(
          Tt,
          {
            logo: p,
            title: H ? void 0 : a,
            appName: a || "App",
            onClick: l,
            color: v ?? he,
            testId: "sidebar-header-brand"
          }
        ) : null
      ]
    }
  ) : null, xe = !c && p ? /* @__PURE__ */ e(
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
          logo: p,
          appName: a || "App",
          onClick: l,
          color: v ?? he,
          testId: "sidebar-header-brand"
        }
      )
    }
  ) : null, ze = b ? 0.5 : H ? 1 : 1.5;
  return /* @__PURE__ */ d(
    x,
    {
      component: "nav",
      "aria-label": "Main sidebar",
      "data-testid": "collapsible-sidebar",
      "data-collapsed": H ? "true" : "false",
      "data-labeled": b ? "true" : "false",
      sx: {
        width: me,
        minWidth: me,
        height: "100%",
        boxSizing: "border-box",
        bgcolor: He,
        display: "flex",
        flexDirection: "column",
        // Lets the sidebar shrink inside a flex-column host so siblings
        // (e.g. an alert card below it) stay within the viewport.
        flex: "1 1 auto",
        minHeight: 0,
        overflow: "hidden",
        transition: En
      },
      children: [
        Ie ?? xe,
        ie ? /* @__PURE__ */ e(
          x,
          {
            sx: { flexShrink: 0, px: ze, pt: 1, pb: 1 },
            children: ie
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
              pt: ne && !c ? `${ne}px` : 1,
              pb: 2
            },
            children: [
              Ce(t),
              o.length > 0 ? /* @__PURE__ */ d(x, { sx: { mt: "auto", pt: 2 }, children: [
                C ? null : /* @__PURE__ */ e(We, { sx: { mb: 1, borderColor: "divider" } }),
                Ce(o)
              ] }) : null
            ]
          }
        ),
        C ? /* @__PURE__ */ e(x, { sx: { flexShrink: 0, px: ze, pb: 1.5 }, children: /* @__PURE__ */ e(
          x,
          {
            sx: {
              borderTop: `1px solid ${ve}`,
              pt: 1.5
            },
            children: C
          }
        ) }) : null
      ]
    }
  );
}, Qt = "var(--lumora-content-padding, 0px)", Lo = `calc(${Qt} * -1)`, ya = ({
  children: t,
  flushTop: o = !0,
  sticky: r = !1,
  background: n = "background.paper",
  divider: s = !0,
  inset: p = !0,
  sx: a
}) => /* @__PURE__ */ e(
  x,
  {
    "data-testid": "full-bleed-section",
    sx: [
      {
        mx: Lo,
        mt: o ? Lo : 0,
        // Space below it, like any other block on the page
        mb: Qt,
        px: p ? Qt : 0,
        bgcolor: n,
        ...s && {
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
    children: t.map((o) => /* @__PURE__ */ e("span", { children: o }, o))
  }
);
class A extends Error {
  code;
  originalError;
  timestamp;
  constructor(o, r, n = null) {
    super(o), this.name = "AuthError", this.code = r, this.originalError = n, this.timestamp = (/* @__PURE__ */ new Date()).toISOString();
  }
}
const B = {
  STORAGE_ACCESS_DENIED: "STORAGE_ACCESS_DENIED",
  TOKEN_NOT_FOUND: "TOKEN_NOT_FOUND",
  TOKEN_INVALID: "TOKEN_INVALID",
  TOKEN_EXPIRED: "TOKEN_EXPIRED",
  LOGOUT_FAILED: "LOGOUT_FAILED",
  UNKNOWN_ERROR: "UNKNOWN_ERROR"
}, q = {
  ACCESS_TOKEN: "lumoraAccessToken",
  REFRESH_TOKEN: "lumoraRefreshToken",
  USER: "lumoraUser"
}, Me = {
  ACCESS_TOKEN: "accessToken",
  REFRESH_TOKEN: "refreshToken",
  USER: "user"
}, On = () => {
  if (!(typeof window > "u" || !window.localStorage))
    try {
      const t = localStorage.getItem(
        Me.ACCESS_TOKEN
      ), o = localStorage.getItem(
        Me.REFRESH_TOKEN
      ), r = localStorage.getItem(Me.USER);
      t && !localStorage.getItem(q.ACCESS_TOKEN) && localStorage.setItem(q.ACCESS_TOKEN, t), o && !localStorage.getItem(q.REFRESH_TOKEN) && localStorage.setItem(
        q.REFRESH_TOKEN,
        o
      ), r && !localStorage.getItem(q.USER) && localStorage.setItem(q.USER, r), (t || o || r) && (localStorage.removeItem(Me.ACCESS_TOKEN), localStorage.removeItem(Me.REFRESH_TOKEN), localStorage.removeItem(Me.USER));
    } catch (t) {
      console.warn("Failed to migrate legacy localStorage keys:", t);
    }
}, Ut = (t) => {
  try {
    if (typeof window > "u")
      return console.warn("localStorage access attempted on server side"), null;
    if (!window.localStorage)
      throw new A(
        "localStorage is not available",
        B.STORAGE_ACCESS_DENIED
      );
    return window.localStorage.getItem(t);
  } catch (o) {
    throw o.name === "QuotaExceededError" ? (console.error("Storage quota exceeded"), new A(
      "Storage quota exceeded. Please clear browser data.",
      B.STORAGE_ACCESS_DENIED,
      o
    )) : o.name === "SecurityError" ? (console.error(
      "localStorage access denied (private browsing or security settings)"
    ), new A(
      "Access to localStorage is denied. Please check browser settings.",
      B.STORAGE_ACCESS_DENIED,
      o
    )) : (console.error(
      "Unexpected error accessing localStorage:",
      o.name
    ), new A(
      "Failed to access storage",
      B.STORAGE_ACCESS_DENIED,
      o
    ));
  }
}, Kt = (t, o) => {
  try {
    if (typeof window > "u")
      return console.warn("localStorage write attempted on server side"), !1;
    if (!window.localStorage)
      throw new A(
        "localStorage is not available",
        B.STORAGE_ACCESS_DENIED
      );
    return window.localStorage.setItem(t, o), !0;
  } catch (r) {
    throw r.name === "QuotaExceededError" ? (console.error("Storage quota exceeded"), new A(
      "Storage quota exceeded. Please clear browser data.",
      B.STORAGE_ACCESS_DENIED,
      r
    )) : r.name === "SecurityError" ? (console.error(
      "localStorage write denied (private browsing or security settings)"
    ), new A(
      "Access to localStorage is denied. Please check browser settings.",
      B.STORAGE_ACCESS_DENIED,
      r
    )) : (console.error(
      "Unexpected error writing to localStorage:",
      r.name
    ), new A(
      "Failed to write to storage",
      B.STORAGE_ACCESS_DENIED,
      r
    ));
  }
}, lr = (t) => {
  try {
    return typeof window > "u" ? (console.warn("localStorage removal attempted on server side"), !1) : window.localStorage ? (window.localStorage.removeItem(t), !0) : (console.warn("localStorage is not available"), !1);
  } catch (o) {
    return o.name !== "SecurityError" && console.warn(`Could not remove localStorage key "${t}"`), !1;
  }
}, mt = () => {
  try {
    On();
    const t = Ut(q.ACCESS_TOKEN), o = Ut(q.REFRESH_TOKEN), r = Ut(q.USER);
    let n = null;
    if (r)
      try {
        n = JSON.parse(r);
      } catch {
        r && r !== "null" && r !== "undefined" && console.warn(
          "Invalid user data in localStorage, clearing:",
          r.substring(0, 50)
        ), lr(q.USER);
      }
    return {
      accessToken: t,
      refreshToken: o,
      user: n
    };
  } catch (t) {
    throw t instanceof A ? t : new A(
      "Failed to retrieve authentication tokens",
      B.UNKNOWN_ERROR,
      t
    );
  }
}, _n = () => {
  try {
    const { accessToken: t, refreshToken: o } = mt();
    return !(t || o) ? {
      isAuthenticated: !1,
      error: new A(
        "No authentication tokens found",
        B.TOKEN_NOT_FOUND
      )
    } : {
      isAuthenticated: !0,
      error: null
    };
  } catch (t) {
    return console.error("Authentication check failed:", t), {
      isAuthenticated: !1,
      error: t instanceof A ? t : new A(
        "Authentication check failed",
        B.UNKNOWN_ERROR,
        t
      )
    };
  }
}, cr = (t, o, r = null) => {
  try {
    if (!t && !o)
      throw new A(
        "At least one token must be provided",
        B.TOKEN_INVALID
      );
    return t && Kt(q.ACCESS_TOKEN, t), o && Kt(q.REFRESH_TOKEN, o), r && Kt(q.USER, JSON.stringify(r)), {
      success: !0,
      error: null
    };
  } catch (n) {
    return console.error("Failed to store authentication tokens:", n), {
      success: !1,
      error: n instanceof A ? n : new A(
        "Failed to store tokens",
        B.UNKNOWN_ERROR,
        n
      )
    };
  }
}, xt = () => {
  try {
    return [
      q.ACCESS_TOKEN,
      q.REFRESH_TOKEN,
      q.USER,
      // Also clear legacy keys for complete cleanup
      Me.ACCESS_TOKEN,
      Me.REFRESH_TOKEN,
      Me.USER
    ].map((n) => lr(n)).every((n) => n) || console.warn("Some tokens could not be removed from localStorage"), {
      success: !0,
      error: null
    };
  } catch (t) {
    return console.error("Failed to clear authentication tokens:", t), {
      success: !1,
      error: t instanceof A ? t : new A(
        "Failed to clear tokens",
        B.LOGOUT_FAILED,
        t
      )
    };
  }
}, kn = () => {
  try {
    const { user: t } = mt();
    return {
      user: t,
      error: null
    };
  } catch (t) {
    return console.error("Failed to get current user:", t), {
      user: null,
      error: t instanceof A ? t : new A(
        "Failed to retrieve user data",
        B.UNKNOWN_ERROR,
        t
      )
    };
  }
}, va = (t) => {
  if (!(t instanceof A))
    return "An unexpected error occurred. Please try again.";
  switch (t.code) {
    case B.STORAGE_ACCESS_DENIED:
      return "Unable to access browser storage. Please check your browser settings and disable private browsing if enabled.";
    case B.TOKEN_NOT_FOUND:
      return "You are not logged in. Please sign in to continue.";
    case B.TOKEN_INVALID:
      return "Your session is invalid. Please sign in again.";
    case B.TOKEN_EXPIRED:
      return "Your session has expired. Please sign in again.";
    case B.LOGOUT_FAILED:
      return "Failed to log out properly. Please clear your browser cache and try again.";
    case B.UNKNOWN_ERROR:
    default:
      return "An unexpected error occurred. Please try again or contact support if the problem persists.";
  }
}, eo = (t, o = "Unknown") => {
  const r = {
    context: o,
    message: t.message,
    code: t instanceof A ? t.code : "UNKNOWN",
    timestamp: t instanceof A ? t.timestamp : (/* @__PURE__ */ new Date()).toISOString(),
    stack: t.stack
  };
  t instanceof A && t.originalError && (r.originalError = {
    name: t.originalError.name,
    message: t.originalError.message
  }), console.warn("[Auth Error]", r);
}, An = (t) => {
  if (!t)
    throw new Error("API base URL is required to create axios client");
  const o = _o.create({
    baseURL: t,
    headers: {
      "Content-Type": "application/json"
    }
  });
  let r = !1, n = null, s = [];
  const p = (a, l) => {
    s.forEach(({ resolve: c, reject: u }) => {
      a ? u(a) : l && c(l);
    }), s = [];
  };
  return o.interceptors.request.use(
    (a) => {
      const { accessToken: l } = mt();
      return l && a.headers && (a.headers.Authorization = `Bearer ${l}`), a;
    },
    (a) => Promise.reject(a)
  ), o.interceptors.response.use(
    (a) => a,
    async (a) => {
      const l = a.config, c = a.response?.status, u = l?.url || "", f = u.includes("/auth/refresh");
      if (c !== 401 || l._retry || f)
        return Promise.reject(a);
      l._retry = !0;
      const { refreshToken: v } = mt();
      if (!v) {
        const h = new Error(
          "No refresh token available for token refresh"
        );
        return eo(h, "AxiosClient - Token Refresh"), xt(), typeof window < "u" && (window.location.href = "/login"), Promise.reject(a);
      }
      if (r && n)
        return new Promise((h, S) => {
          s.push({ resolve: h, reject: S });
        }).then((h) => {
          const {
            accessToken: S,
            refreshToken: w
          } = h;
          if (l.headers && (l.headers.Authorization = `Bearer ${S}`), u.includes("/auth/logout"))
            try {
              if (typeof l.data == "string") {
                const g = JSON.parse(
                  l.data || "{}"
                );
                g.refresh_token = w, l.data = JSON.stringify(g);
              } else l.data && typeof l.data == "object" ? l.data.refresh_token = w : l.data = JSON.stringify({
                refresh_token: w
              });
            } catch {
              l.data = JSON.stringify({
                refresh_token: w
              });
            }
          return o(l);
        }).catch((h) => Promise.reject(h));
      r = !0, n = _o.post(
        `${t}/auth/refresh`,
        {
          refresh_token: v
        }
      );
      try {
        const h = await n, { accessToken: S, refreshToken: w } = h.data;
        if (cr(S, w, null), p(null, {
          accessToken: S,
          refreshToken: w
        }), l.headers && (l.headers.Authorization = `Bearer ${S}`), u.includes("/auth/logout"))
          try {
            if (typeof l.data == "string") {
              const g = JSON.parse(
                l.data || "{}"
              );
              g.refresh_token = w, l.data = JSON.stringify(g);
            } else l.data && typeof l.data == "object" ? l.data.refresh_token = w : l.data = JSON.stringify({
              refresh_token: w
            });
          } catch {
            l.data = JSON.stringify({
              refresh_token: w
            });
          }
        return o(l);
      } catch (h) {
        return eo(
          h,
          "AxiosClient - Token Refresh Failed"
        ), p(h), xt(), typeof window < "u" && (window.location.href = "/login"), Promise.reject(h);
      } finally {
        r = !1, n = null;
      }
    }
  ), o;
}, Ee = {
  50: "hsl(210, 100%, 95%)",
  100: "hsl(210, 100%, 92%)",
  200: "hsl(210, 100%, 80%)",
  300: "hsl(210, 100%, 65%)",
  400: "hsl(210, 98%, 48%)",
  500: "hsl(210, 98%, 42%)",
  600: "hsl(210, 98%, 55%)",
  700: "hsl(210, 100%, 35%)",
  900: "hsl(210, 100%, 21%)"
}, we = {
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
}, ot = {
  300: "hsl(120, 61%, 77%)",
  400: "hsl(120, 44%, 53%)",
  500: "hsl(120, 59%, 30%)",
  700: "hsl(120, 75%, 16%)",
  800: "hsl(120, 84%, 10%)"
}, rt = {
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
}, dr = Vo(), Te = dr.typography.pxToRem, Dn = (t) => {
  const o = t === "dark", r = [...dr.shadows];
  return r[1] = o ? "hsla(220, 30%, 5%, 0.7) 0px 4px 16px 0px, hsla(220, 25%, 10%, 0.8) 0px 8px 16px -5px" : "hsla(220, 30%, 5%, 0.07) 0px 4px 16px 0px, hsla(220, 25%, 10%, 0.07) 0px 8px 16px -5px", {
    palette: {
      mode: t,
      primary: {
        light: o ? Ee[300] : Ee[200],
        main: Ee[400],
        dark: Ee[700],
        contrastText: Ee[50]
      },
      info: o ? {
        light: Ee[500],
        main: Ee[700],
        dark: Ee[900],
        contrastText: Ee[300]
      } : {
        light: Ee[100],
        main: Ee[300],
        dark: Ee[600],
        contrastText: we[50]
      },
      warning: o ? { light: rt[400], main: rt[500], dark: rt[700] } : { light: rt[300], main: rt[400], dark: rt[800] },
      error: o ? { light: nt[400], main: nt[500], dark: nt[700] } : { light: nt[300], main: nt[400], dark: nt[800] },
      success: o ? { light: ot[400], main: ot[500], dark: ot[700] } : { light: ot[300], main: ot[400], dark: ot[800] },
      grey: we,
      divider: o ? Xe(we[700], 0.6) : Xe(we[300], 0.4),
      background: o ? { default: we[900], paper: "hsl(220, 30%, 7%)" } : { default: "hsl(0, 0%, 99%)", paper: "hsl(220, 35%, 97%)" },
      text: o ? { primary: "hsl(0, 0%, 100%)", secondary: we[400] } : { primary: we[800], secondary: we[600] },
      action: o ? {
        hover: Xe(we[600], 0.2),
        selected: Xe(we[600], 0.3)
      } : {
        hover: Xe(we[200], 0.2),
        selected: Xe(we[200], 0.3)
      }
    },
    typography: {
      fontFamily: "Inter, sans-serif",
      h1: {
        fontSize: Te(48),
        fontWeight: 600,
        lineHeight: 1.2,
        letterSpacing: -0.5
      },
      h2: { fontSize: Te(36), fontWeight: 600, lineHeight: 1.2 },
      h3: { fontSize: Te(30), lineHeight: 1.2 },
      h4: { fontSize: Te(24), fontWeight: 600, lineHeight: 1.5 },
      h5: { fontSize: Te(20), fontWeight: 600 },
      h6: { fontSize: Te(18), fontWeight: 600 },
      subtitle1: { fontSize: Te(18) },
      subtitle2: { fontSize: Te(14), fontWeight: 500 },
      body1: { fontSize: Te(14) },
      body2: { fontSize: Te(14), fontWeight: 400 },
      caption: { fontSize: Te(12), fontWeight: 400 }
    },
    shape: {
      borderRadius: 8
    },
    shadows: r
  };
}, Nn = async (t, o) => {
  const { accessToken: r, refreshToken: n } = mt();
  if (r)
    return !0;
  if (n)
    try {
      const s = await t.post("/auth/refresh", {
        refresh_token: n
      });
      if (s.data.success && s.data.accessToken)
        return cr(
          s.data.accessToken,
          s.data.refreshToken || null,
          null
        ), !0;
    } catch (s) {
      eo(s, "TokenValidator - Refresh Failed");
    }
  return xt(), o ? o() : window.location.href = "/login", !1;
}, It = ({ size: t = 20 }) => /* @__PURE__ */ d(
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
), it = "#09C1AE", Gt = (t, o) => ({
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
    bgcolor: o,
    zIndex: 1
  },
  "& > *": { position: "relative", zIndex: 2 },
  "@keyframes nexa-beam": { to: { transform: "rotate(360deg)" } },
  "@media (prefers-reduced-motion: reduce)": {
    "&::before": { animation: "none" }
  }
}), zo = ({
  variant: t,
  onClick: o,
  active: r = !1,
  busy: n = !1,
  shortcutKeys: s,
  accentColor: p = "#01584f",
  rightOffsetPx: a = 0
}) => {
  const l = s ? `Ask Nexa (${s.join("")})` : "Ask Nexa", c = {
    onClick: o,
    "aria-label": "Ask Nexa",
    "aria-pressed": r,
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
        borderColor: r ? it : "rgba(9, 193, 174, 0.45)",
        bgcolor: "rgba(9, 193, 174, 0.08)",
        color: p,
        transition: "border-color 150ms, background-color 150ms",
        "&:hover": { bgcolor: "rgba(9, 193, 174, 0.14)" },
        "&.Mui-focusVisible": {
          outline: `2px solid ${it}`,
          outlineOffset: 2
        },
        ...n && Gt(8, "background.paper")
      },
      children: [
        /* @__PURE__ */ e(It, { size: 20 }),
        /* @__PURE__ */ e(
          _,
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
        s && /* @__PURE__ */ e(Tn, { keys: s })
      ]
    }
  ) : t === "sidebar-icon" ? /* @__PURE__ */ e(ye, { title: l, placement: "right", arrow: !0, children: /* @__PURE__ */ e(
    Oe,
    {
      ...c,
      "data-variant": "sidebar-icon",
      sx: {
        width: 44,
        height: 44,
        borderRadius: "8px",
        border: "1px solid",
        borderColor: r ? it : "rgba(9, 193, 174, 0.45)",
        bgcolor: "rgba(9, 193, 174, 0.08)",
        "&:hover": { bgcolor: "rgba(9, 193, 174, 0.14)" },
        ...n && Gt(8, "background.paper")
      },
      children: /* @__PURE__ */ e(It, { size: 20 })
    }
  ) }) : /* @__PURE__ */ e(ye, { title: l, placement: "left", children: /* @__PURE__ */ e(
    Oe,
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
        outline: r ? `2px solid ${it}` : "none",
        outlineOffset: 2,
        "&:hover": { bgcolor: "background.paper", boxShadow: 6 },
        "&.Mui-focusVisible": { outline: `2px solid ${it}` },
        ...n && Gt(16, "background.paper")
      },
      children: /* @__PURE__ */ e(x, { sx: { display: "flex", alignItems: "center" }, children: /* @__PURE__ */ e(It, { size: 26 }) })
    }
  ) });
}, Rt = ({
  title: t = "",
  message: o = "",
  buttonText: r = "",
  onButtonClick: n,
  show: s = !0
}) => s ? /* @__PURE__ */ e(Kr, { variant: "outlined", sx: { m: 1.5, flexShrink: 0 }, children: /* @__PURE__ */ d(Gr, { children: [
  /* @__PURE__ */ e(jr, { fontSize: "small" }),
  /* @__PURE__ */ e(_, { gutterBottom: !0, sx: { fontWeight: 600 }, children: t }),
  /* @__PURE__ */ e(
    _,
    {
      variant: "body2",
      sx: { mb: 2, color: "text.secondary" },
      children: o
    }
  ),
  /* @__PURE__ */ e(
    Yo,
    {
      variant: "contained",
      size: "small",
      fullWidth: !0,
      onClick: n,
      children: r
    }
  )
] }) }) : null, pt = 24, Wn = 720, Ln = 1140, zn = 1250, Pn = ({
  open: t,
  children: o,
  variant: r,
  position: n,
  width: s,
  sidebarWidthPx: p,
  bottomOffsetPx: a,
  fullScreen: l,
  fullScreenBottom: c = "0px",
  onClose: u
}) => {
  m.useEffect(() => {
    if (!t || !u)
      return;
    const w = (g) => {
      g.key === "Escape" && u();
    };
    return window.addEventListener("keydown", w), () => window.removeEventListener("keydown", w);
  }, [t, u]);
  const f = r === "docked", v = pt + a;
  let h;
  l ? h = {
    top: 0,
    left: 0,
    right: 0,
    bottom: c,
    borderRadius: 0
  } : f ? h = {
    top: 0,
    right: 0,
    bottom: 0,
    width: s,
    maxWidth: "100vw",
    borderRadius: 0,
    borderWidth: "0 0 0 1px"
  } : h = {
    bottom: v,
    ...n === "left" ? { left: p + pt } : { right: pt },
    width: s,
    maxWidth: `calc(100vw - ${pt * 2}px)`,
    height: `min(${Wn}px, calc(100vh - ${v + pt}px))`,
    borderRadius: "12px"
  };
  const S = /* @__PURE__ */ e(
    to,
    {
      role: f ? "complementary" : "dialog",
      "aria-label": "Nexa chat",
      "data-testid": "chat-panel",
      "data-variant": r,
      elevation: 8,
      sx: {
        position: "fixed",
        zIndex: f ? Ln : zn,
        display: "flex",
        flexDirection: "column",
        overflow: "hidden",
        border: "1px solid",
        borderColor: "divider",
        ...h
      },
      children: o
    }
  );
  return f ? /* @__PURE__ */ e(Vr, { direction: "left", in: t, mountOnEnter: !0, children: S }) : /* @__PURE__ */ e(
    Xr,
    {
      in: t,
      mountOnEnter: !0,
      style: {
        transformOrigin: n === "left" ? "bottom left" : "bottom right"
      },
      children: S
    }
  );
}, Bn = 180, Po = 250, Mn = "#01584F", Fn = ({
  text: t,
  testId: o
}) => {
  const r = m.useRef(null), [n, s] = m.useState(!1), p = m.useCallback(() => {
    const a = r.current;
    a && s(a.scrollWidth > a.clientWidth + 0.5);
  }, []);
  return m.useLayoutEffect(() => {
    p();
  }, [p, t]), m.useEffect(() => {
    const a = r.current;
    if (!a)
      return;
    const l = new ResizeObserver(() => p());
    return l.observe(a), () => l.disconnect();
  }, [p]), /* @__PURE__ */ e(
    ye,
    {
      title: t,
      placement: "right",
      arrow: !0,
      enterDelay: 400,
      disableHoverListener: !n,
      disableFocusListener: !n,
      disableTouchListener: !n,
      children: /* @__PURE__ */ e(
        _,
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
          children: t
        }
      )
    }
  );
}, ur = (t, o, r, n) => {
  const s = t ? 48 : 44, p = t ? "text.secondary" : o, a = t ? Mn : o;
  return { activeBg: a, sx: n ? {
    width: "100%",
    maxWidth: "100%",
    minWidth: s,
    height: "auto",
    minHeight: s,
    flexDirection: "column",
    py: 0.5,
    // Horizontal padding so labels (esp. active fill) do not touch the box edges
    px: 1,
    borderRadius: "4px",
    color: r ? "#ffffff" : p,
    backgroundColor: r ? a : "transparent",
    "&:hover": {
      backgroundColor: r ? a : "action.hover",
      borderRadius: "4px",
      color: r ? "#ffffff" : p
    }
  } : {
    width: s,
    height: s,
    color: r ? "#ffffff" : p,
    backgroundColor: r ? a : "transparent",
    borderRadius: r ? "4px" : "50%",
    "&:hover": {
      backgroundColor: r ? a : "action.hover",
      borderRadius: "4px"
    }
  } };
}, pr = ({ link: t }) => /* @__PURE__ */ d(de, { alignItems: "center", spacing: 1, sx: { width: "100%" }, children: [
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
    Fn,
    {
      text: t.text,
      testId: `rail-item-caption-${t.text}`
    }
  )
] }), hr = (t, o, r) => r ? t : /* @__PURE__ */ e(ye, { title: o, placement: "right", arrow: !0, children: t }), Hn = ({
  link: t,
  activePath: o,
  onLinkClick: r,
  accentColor: n,
  isSecondary: s,
  surfaceBackgroundColor: p,
  railShowTitles: a
}) => {
  const l = _t(), [c, u] = m.useState(null), [f, v] = m.useState(!1), h = m.useRef(
    null
  ), S = m.useRef(null), w = m.useRef(null), g = m.useRef(!1), M = m.useRef(!1), W = m.useId(), D = () => {
    h.current && (clearTimeout(h.current), h.current = null);
  }, T = () => {
    D(), h.current = setTimeout(() => {
      v(!1), h.current = null;
    }, Bn);
  }, N = () => {
    D(), v(!0);
  };
  m.useEffect(() => {
    if (!f)
      return;
    const C = ($) => {
      $.key === "Escape" && (v(!1), w.current?.focus());
    };
    return document.addEventListener("keydown", C), () => document.removeEventListener("keydown", C);
  }, [f]), m.useEffect(() => {
    if (!f || !M.current)
      return;
    const C = globalThis.requestAnimationFrame(() => {
      S.current?.querySelector(
        '[role="menuitem"]'
      )?.focus(), M.current = !1;
    });
    return () => cancelAnimationFrame(C);
  }, [f]);
  const X = et(t, o), { activeBg: F, sx: b } = ur(
    s,
    n,
    X,
    a
  ), ne = /* @__PURE__ */ e(
    Oe,
    {
      ref: w,
      component: t.path ? "a" : "button",
      href: t.path || void 0,
      "aria-label": t.text,
      onFocus: () => {
        g.current || N();
      },
      onBlur: (C) => {
        const $ = C.relatedTarget;
        $ && S.current?.contains($) || T();
      },
      onKeyDown: (C) => {
        C.key === "ArrowDown" && (C.preventDefault(), M.current = !0, N());
      },
      onClick: (C) => {
        C.preventDefault(), C.stopPropagation(), t.path && r?.(t.path);
      },
      "aria-haspopup": "menu",
      "aria-expanded": f,
      "aria-controls": f ? W : void 0,
      "data-testid": `rail-submenu-trigger-${t.text}`,
      sx: b,
      children: a ? /* @__PURE__ */ e(pr, { link: t }) : t.icon
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
              g.current = !0, N();
            },
            onMouseLeave: () => {
              g.current = !1, T();
            },
            children: hr(ne, t.text, a)
          }
        ),
        /* @__PURE__ */ e(
          qr,
          {
            open: f && !!c,
            anchorEl: c,
            placement: "right-start",
            modifiers: [{ name: "offset", options: { offset: [8, 0] } }],
            sx: { zIndex: (C) => C.zIndex.modal },
            children: /* @__PURE__ */ e(
              to,
              {
                ref: S,
                elevation: 0,
                onMouseEnter: D,
                onMouseLeave: T,
                "data-testid": `rail-submenu-panel-${t.text}`,
                sx: {
                  bgcolor: p,
                  backgroundImage: "none",
                  borderRadius: "4px",
                  border: "1px solid",
                  borderColor: "divider",
                  boxShadow: l.shadows[8],
                  maxWidth: Po,
                  minWidth: 0,
                  py: 0.5,
                  boxSizing: "border-box"
                },
                children: /* @__PURE__ */ e(
                  kt,
                  {
                    id: W,
                    dense: !0,
                    autoFocus: !1,
                    role: "menu",
                    sx: {
                      bgcolor: "transparent",
                      py: 0,
                      maxWidth: Po
                    },
                    children: ie(t.subitems, t.text, 0)
                  }
                )
              }
            )
          }
        )
      ]
    }
  );
  function ie(C, $, U) {
    return C.flatMap((k) => {
      const ue = Ct($, k);
      return ft(k) ? [
        /* @__PURE__ */ e(
          Yr,
          {
            disableSticky: !0,
            title: k.text,
            sx: {
              bgcolor: "transparent",
              lineHeight: "28px",
              pl: 2 + U * 1.5,
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
          ue
        ),
        ...ie(k.subitems, ue, U + 1)
      ] : [
        /* @__PURE__ */ d(
          Q,
          {
            role: "menuitem",
            title: k.text,
            disabled: !k.path,
            selected: je(k, o),
            onClick: (_e) => {
              _e.preventDefault(), k.path && r?.(k.path), v(!1);
            },
            sx: {
              borderRadius: "4px",
              mx: 0.5,
              my: 0.125,
              pl: 2 + U * 1.5,
              maxWidth: "100%",
              overflow: "hidden",
              color: s ? "text.secondary" : n,
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
                bgcolor: F,
                color: "#ffffff",
                "&:hover": {
                  bgcolor: F
                }
              },
              "&.Mui-focusVisible": {
                bgcolor: "action.focus"
              }
            },
            children: [
              k.icon ? /* @__PURE__ */ e(j, { children: k.icon }) : null,
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
          ue
        )
      ];
    });
  }
}, $n = ({
  link: t,
  activePath: o,
  onLinkClick: r,
  accentColor: n,
  isSecondary: s,
  railShowTitles: p
}) => {
  const a = !!(t.path && o === t.path), { sx: l } = ur(
    s,
    n,
    a,
    p
  );
  return hr(
    /* @__PURE__ */ e(
      Oe,
      {
        component: t.path ? "a" : "button",
        href: t.path || void 0,
        "aria-label": t.text,
        onClick: (c) => {
          c.preventDefault(), c.stopPropagation(), t.path && r?.(t.path);
        },
        disabled: !t.path,
        sx: l,
        children: p ? /* @__PURE__ */ e(pr, { link: t }) : t.icon
      }
    ),
    t.text,
    p
  );
}, Un = () => /* @__PURE__ */ e(
  x,
  {
    sx: {
      width: "100%",
      display: "flex",
      justifyContent: "center"
    },
    children: /* @__PURE__ */ e(We, { sx: { width: "60%", borderColor: "divider" } })
  }
), Kn = () => /* @__PURE__ */ e(
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
), Bo = (t, o) => t.map((r, n) => /* @__PURE__ */ d(m.Fragment, { children: [
  o(r, n),
  n < t.length - 1 ? /* @__PURE__ */ e(Un, {}) : null
] }, n)), Gn = ({
  mainLinks: t,
  secondaryLinks: o = [],
  activePath: r,
  onLinkClick: n,
  accentColor: s = "#01584f",
  surfaceBackgroundColor: p,
  railShowTitles: a = !1
}) => {
  const l = (u, f) => ft(u) ? /* @__PURE__ */ e(
    Hn,
    {
      link: u,
      activePath: r,
      onLinkClick: n,
      accentColor: s,
      isSecondary: f,
      surfaceBackgroundColor: p,
      railShowTitles: a
    }
  ) : /* @__PURE__ */ e(
    $n,
    {
      link: u,
      activePath: r,
      onLinkClick: n,
      accentColor: s,
      isSecondary: f,
      railShowTitles: a
    }
  ), c = a ? 1.25 : 1;
  return /* @__PURE__ */ d(
    de,
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
        Bo(t, (u) => l(u, !1)),
        o.length > 0 ? /* @__PURE__ */ d(at, { children: [
          /* @__PURE__ */ e(Kn, {}),
          /* @__PURE__ */ e(x, { sx: { mt: "auto", pb: 2 }, children: /* @__PURE__ */ e(de, { gap: c, alignItems: "center", children: Bo(
            o,
            (u) => l(u, !0)
          ) }) })
        ] }) : null
      ]
    }
  );
}, jn = (t) => t ? t.replace(/_/g, " ").toUpperCase() : "USER", Xn = (t) => t.split(/\s+/).filter(Boolean).slice(0, 2).map((o) => o.charAt(0).toUpperCase()).join(""), Mo = {
  overflow: "hidden",
  textOverflow: "ellipsis",
  whiteSpace: "nowrap",
  maxWidth: "100%"
}, Fo = ({ count: t }) => t ? /* @__PURE__ */ e(
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
) : null, oo = ({ name: t, avatar: o, color: r, size: n = 36 }) => /* @__PURE__ */ e(
  Jr,
  {
    src: o,
    alt: t,
    sx: {
      width: n,
      height: n,
      flexShrink: 0,
      fontSize: n * 0.36,
      fontWeight: 600,
      bgcolor: r,
      color: "#ffffff"
    },
    children: Xn(t)
  }
), fr = ({ name: t, role: o, avatar: r, avatarColor: n, showText: s }) => /* @__PURE__ */ d(at, { children: [
  /* @__PURE__ */ e(oo, { name: t, avatar: r, color: n }),
  s && /* @__PURE__ */ d(
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
          _,
          {
            variant: "body2",
            sx: { ...Mo, fontWeight: 600, color: "inherit" },
            children: t
          }
        ),
        /* @__PURE__ */ e(
          _,
          {
            variant: "caption",
            sx: { ...Mo, opacity: 0.8, color: "inherit" },
            children: jn(o)
          }
        )
      ]
    }
  )
] }), Ho = {
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
}, mr = ({
  anchorEl: t,
  onClose: o,
  placement: r,
  width: n,
  avatarColor: s,
  showNotifications: p,
  notificationCount: a,
  onNotificationsClick: l,
  userName: c = "User",
  userRole: u,
  userAvatar: f,
  menuItems: v = [],
  showSettings: h,
  onSettingsClick: S,
  showThemeToggler: w,
  theme: g,
  onThemeToggle: M,
  onLogout: W
}) => {
  const D = (T) => () => {
    o(), T?.();
  };
  return /* @__PURE__ */ d(
    Zr,
    {
      anchorEl: t,
      open: !!t,
      onClose: o,
      anchorOrigin: Ho[r].anchor,
      transformOrigin: Ho[r].transform,
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
        /* @__PURE__ */ e(
          de,
          {
            direction: "row",
            spacing: 1.25,
            sx: { px: 1.5, py: 1, alignItems: "center" },
            children: /* @__PURE__ */ e(
              fr,
              {
                name: c,
                role: u,
                avatar: f,
                avatarColor: s,
                showText: !0
              }
            )
          }
        ),
        /* @__PURE__ */ e(We, {}),
        p && /* @__PURE__ */ d(Q, { onClick: D(l), children: [
          /* @__PURE__ */ e(j, { children: /* @__PURE__ */ e(Qo, { fontSize: "small" }) }),
          /* @__PURE__ */ e(Fe, { children: "Notifications" }),
          /* @__PURE__ */ e(Fo, { count: a })
        ] }),
        v.map((T) => /* @__PURE__ */ d(Q, { onClick: D(T.onClick), children: [
          T.icon && /* @__PURE__ */ e(j, { children: T.icon }),
          /* @__PURE__ */ e(Fe, { inset: !T.icon, children: T.label }),
          /* @__PURE__ */ e(Fo, { count: T.badge })
        ] }, T.key)),
        h && /* @__PURE__ */ d(Q, { onClick: D(S), children: [
          /* @__PURE__ */ e(j, { children: /* @__PURE__ */ e(er, { fontSize: "small" }) }),
          /* @__PURE__ */ e(Fe, { children: "Settings" })
        ] }),
        w && [
          /* @__PURE__ */ e(We, {}, "theme-divider"),
          /* @__PURE__ */ d(x, { sx: { px: 1.5, py: 1 }, children: [
            /* @__PURE__ */ e(
              _,
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
              Qr,
              {
                exclusive: !0,
                fullWidth: !0,
                size: "small",
                "aria-label": "Theme",
                value: g,
                onChange: (T, N) => N && N !== g && M?.(),
                disabled: !M,
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
                  /* @__PURE__ */ e(ko, { value: "light", children: "Light" }),
                  /* @__PURE__ */ e(ko, { value: "dark", children: "Dark" })
                ]
              }
            )
          ] }, "theme")
        ],
        /* @__PURE__ */ e(We, {}),
        /* @__PURE__ */ d(
          Q,
          {
            onClick: D(W),
            sx: {
              color: g === "dark" ? "hsl(0, 90%, 65%)" : "error.main"
            },
            children: [
              /* @__PURE__ */ e(j, { sx: { color: "inherit" }, children: /* @__PURE__ */ e(Zo, { fontSize: "small" }) }),
              /* @__PURE__ */ e(Fe, { children: "Log out" })
            ]
          }
        )
      ]
    }
  );
}, xr = 64, Vn = 2, ht = ({
  label: t,
  icon: o,
  onClick: r,
  active: n,
  color: s,
  activeColor: p,
  activeBackground: a,
  ariaLabel: l,
  haspopup: c,
  isPage: u = !1,
  testId: f
}) => /* @__PURE__ */ d(
  st,
  {
    onClick: r,
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
      color: n ? p : s,
      "&.Mui-focusVisible": {
        outline: "2px solid",
        outlineColor: p,
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
          children: o
        }
      ),
      /* @__PURE__ */ e(
        _,
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
), Yn = ({
  onMenuClick: t,
  menuOpen: o,
  onSearchClick: r,
  searchOpen: n,
  showAssistant: s,
  onAssistantClick: p,
  assistantActive: a,
  showProfile: l,
  background: c,
  color: u,
  activeColor: f,
  activeBackground: v,
  pinnedLinks: h = [],
  activePath: S,
  onLinkClick: w,
  ...g
}) => {
  const M = h.filter((b) => b.path).slice(0, Vn), [W, D] = m.useState(
    null
  ), { userName: T = "User", userAvatar: N, avatarColor: X } = g, F = { color: u, activeColor: f, activeBackground: v };
  return /* @__PURE__ */ d(
    to,
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
        height: `calc(${xr}px + env(safe-area-inset-bottom, 0px))`,
        pb: "env(safe-area-inset-bottom, 0px)",
        bgcolor: c,
        borderTop: "1px solid",
        borderColor: "divider"
      },
      children: [
        t && /* @__PURE__ */ e(
          ht,
          {
            label: "Menu",
            icon: /* @__PURE__ */ e(qo, {}),
            onClick: t,
            active: o,
            haspopup: "dialog",
            testId: "mobile-nav-menu",
            ...F
          }
        ),
        M.map((b) => /* @__PURE__ */ e(
          ht,
          {
            label: b.text,
            icon: b.icon,
            onClick: () => w?.(b.path),
            active: et(b, S),
            isPage: !0,
            testId: `mobile-nav-link-${b.text}`,
            ...F
          },
          b.path
        )),
        s && /* @__PURE__ */ e(
          ht,
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
                children: /* @__PURE__ */ e(It, { size: 18 })
              }
            ),
            onClick: p,
            active: a,
            testId: "mobile-nav-nexa",
            ...F
          }
        ),
        r && /* @__PURE__ */ e(
          ht,
          {
            label: "Search",
            icon: /* @__PURE__ */ e(Jo, {}),
            onClick: r,
            active: n,
            haspopup: "dialog",
            testId: "mobile-nav-search",
            ...F
          }
        ),
        l && /* @__PURE__ */ d(at, { children: [
          /* @__PURE__ */ e(
            ht,
            {
              label: "Account",
              ariaLabel: `Account menu for ${T}`,
              icon: /* @__PURE__ */ e(
                oo,
                {
                  name: T,
                  avatar: N,
                  color: X,
                  size: 26
                }
              ),
              onClick: (b) => D(b.currentTarget),
              active: !!W,
              haspopup: "menu",
              testId: "mobile-nav-account",
              ...F
            }
          ),
          /* @__PURE__ */ e(
            mr,
            {
              anchorEl: W,
              onClose: () => D(null),
              placement: "above-end",
              width: 280,
              ...g
            }
          )
        ] })
      ]
    }
  );
}, qn = ({
  open: t,
  onClose: o,
  search: r
}) => /* @__PURE__ */ e(
  en,
  {
    anchor: "top",
    open: t,
    onClose: o,
    SlideProps: {
      onEntered: (n) => n.querySelector(
        'input, textarea, [contenteditable="true"]'
      )?.focus()
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
      de,
      {
        direction: "row",
        spacing: 1,
        "data-testid": "mobile-search-sheet",
        sx: { alignItems: "center" },
        children: [
          /* @__PURE__ */ e(x, { sx: { flex: "1 1 auto", minWidth: 0 }, children: r }),
          /* @__PURE__ */ e(
            Yo,
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
), Jn = ({
  height: t,
  onMenuClick: o,
  appName: r,
  logo: n,
  onBrandClick: s,
  background: p,
  color: a,
  brandColor: l = a,
  endContent: c
}) => /* @__PURE__ */ e(
  tn,
  {
    position: "fixed",
    elevation: 0,
    sx: {
      height: t,
      background: p,
      color: a,
      borderBottom: "1px solid",
      borderColor: "divider"
    },
    children: /* @__PURE__ */ d(on, { sx: { minHeight: `${t}px !important`, gap: 1, px: 1 }, children: [
      o && /* @__PURE__ */ e(
        Oe,
        {
          "aria-label": "Open navigation menu",
          onClick: o,
          sx: { color: a },
          children: /* @__PURE__ */ e(qo, {})
        }
      ),
      /* @__PURE__ */ e(
        Tt,
        {
          title: r,
          appName: r,
          logo: n,
          onClick: s,
          color: l,
          testId: "mobile-brand"
        }
      ),
      c ? /* @__PURE__ */ e(x, { sx: { ml: "auto", display: "flex", alignItems: "center" }, children: c }) : null
    ] })
  }
), ro = ({
  count: t,
  onClick: o,
  color: r,
  hoverColor: n,
  tooltipPlacement: s,
  testId: p
}) => {
  const a = t ? `Notifications, ${t} unread` : "Notifications";
  return /* @__PURE__ */ e(ye, { title: a, placement: s, arrow: !0, children: /* @__PURE__ */ e(
    Oe,
    {
      onClick: o,
      "aria-label": a,
      "data-testid": p,
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
      children: /* @__PURE__ */ e(
        tr,
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
          children: /* @__PURE__ */ e(Qo, {})
        }
      )
    }
  ) });
}, gr = ({
  title: t,
  subtitle: o,
  testId: r,
  width: n,
  sx: s,
  footer: p,
  children: a
}) => {
  const l = m.useId();
  return /* @__PURE__ */ d(
    x,
    {
      role: "dialog",
      "aria-modal": "false",
      "aria-labelledby": l,
      "data-testid": r,
      sx: [
        { width: n, minWidth: n },
        ...Array.isArray(s) ? s : [s]
      ],
      children: [
        /* @__PURE__ */ d(x, { sx: { px: 2, pt: 1.5, pb: 1 }, children: [
          /* @__PURE__ */ e(_, { id: l, sx: { fontWeight: 600 }, children: t }),
          o ? /* @__PURE__ */ e(
            _,
            {
              variant: "body2",
              sx: { mt: 0.25, color: "text.secondary" },
              children: o
            }
          ) : null
        ] }),
        a,
        p ? /* @__PURE__ */ d(at, { children: [
          /* @__PURE__ */ e(We, {}),
          p
        ] }) : null
      ]
    }
  );
}, Zn = 5, Qn = 56, ei = ({
  platforms: t,
  currentPlatformKey: o,
  onSelect: r,
  accentColor: n,
  tint: s,
  width: p,
  sx: a
}) => /* @__PURE__ */ e(
  gr,
  {
    title: "Lumora Platforms",
    subtitle: "Choose where you want to work.",
    testId: "platforms-panel",
    width: p,
    sx: a,
    footer: /* @__PURE__ */ d(
      de,
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
          /* @__PURE__ */ e(fn, { fontSize: "small" }),
          /* @__PURE__ */ e(_, { variant: "body2", children: "Platforms available to your account" })
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
          maxHeight: Zn * Qn,
          overflowY: "auto"
        },
        children: t.map((l) => {
          const c = l.key === o;
          return /* @__PURE__ */ d(
            Q,
            {
              "data-testid": `platform-item-${l.key}`,
              "aria-current": c ? "true" : void 0,
              onClick: () => {
                c || r(l);
              },
              sx: {
                borderRadius: "10px",
                px: 1.5,
                py: 1.25,
                mb: 0.5,
                gap: 1,
                // The current row is inert: keeps its wash on hover
                // and shows no pointer.
                bgcolor: c ? s : "transparent",
                cursor: c ? "default" : "pointer",
                "&:hover": {
                  bgcolor: c ? s : "action.hover"
                }
              },
              children: [
                /* @__PURE__ */ d(x, { sx: { flex: 1, minWidth: 0 }, children: [
                  /* @__PURE__ */ e(_, { noWrap: !0, sx: { fontWeight: 500 }, children: l.name }),
                  l.description ? /* @__PURE__ */ e(
                    _,
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
                  de,
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
                      /* @__PURE__ */ e(hn, { sx: { fontSize: 16 } })
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
), $o = (t) => t.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, ""), ti = ({
  sections: t,
  onItemClick: o,
  width: r,
  sx: n
}) => {
  const [s, p] = m.useState({}), a = (c) => s[c.title] ?? c.defaultOpen ?? !1, l = (c) => p((u) => ({
    ...u,
    [c.title]: !a(c)
  }));
  return /* @__PURE__ */ e(
    gr,
    {
      title: "Settings",
      testId: "settings-panel",
      width: r,
      sx: n,
      children: /* @__PURE__ */ e(
        kt,
        {
          autoFocusItem: !0,
          "aria-label": "Settings",
          sx: { px: 1, py: 0.5, maxHeight: "60vh", overflowY: "auto" },
          children: t.flatMap((c) => {
            const u = a(c), f = $o(c.title), v = /* @__PURE__ */ d(
              Q,
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
                    mn,
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
              v,
              ...c.items.map((h) => /* @__PURE__ */ e(
                Q,
                {
                  onClick: () => o(h, c),
                  disabled: h.disabled,
                  "data-testid": `settings-item-${h.key ?? $o(h.text)}`,
                  sx: {
                    borderRadius: "8px",
                    py: 0.75,
                    // Indented under the header, no bullet.
                    pl: 3.5
                  },
                  children: h.text
                },
                `item-${c.title}-${h.key ?? h.text}`
              ))
            ] : [v];
          })
        }
      )
    }
  );
}, oi = 288, ri = 300, ni = {
  "&:focus, &:focus-visible": { outline: "none" }
}, br = {
  pointerEvents: "auto",
  bgcolor: "background.paper",
  border: "1px solid",
  borderColor: "divider",
  borderRadius: "12px",
  boxShadow: "0 8px 24px rgba(0, 0, 0, 0.12)",
  overflow: "hidden",
  display: "flex",
  flexDirection: "column"
}, Uo = {
  ...br,
  "@keyframes sub-panel-in": {
    from: { opacity: 0, transform: "translateX(-6px)" },
    to: { opacity: 1, transform: "none" }
  },
  animation: "sub-panel-in 150ms ease-out",
  "@media (prefers-reduced-motion: reduce)": { animation: "none" }
}, Ko = ({ count: t }) => t ? /* @__PURE__ */ e(
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
) : null, ii = ({ mode: t, onToggle: o, accentColor: r, tint: n }) => {
  const s = m.useRef(null), p = m.useRef(null), a = (u) => {
    u !== t && o?.(), (u === "light" ? s : p).current?.focus();
  }, l = (u) => {
    if (!(u.key === "Tab" || u.key === "Escape"))
      switch (u.stopPropagation(), u.key) {
        case "ArrowLeft":
        case "ArrowRight":
        case "ArrowUp":
        case "ArrowDown":
          u.preventDefault(), a(t === "light" ? "dark" : "light");
          break;
        case "Home":
          u.preventDefault(), a("light");
          break;
        case "End":
          u.preventDefault(), a("dark");
          break;
      }
  }, c = (u, f, v, h) => {
    const S = t === u;
    return /* @__PURE__ */ e(
      st,
      {
        ref: h,
        role: "radio",
        "aria-checked": S,
        "aria-label": f,
        tabIndex: S ? 0 : -1,
        onClick: () => a(u),
        "data-testid": `theme-segment-${u}`,
        sx: {
          width: 36,
          height: 26,
          borderRadius: "999px",
          color: S ? r : "text.secondary",
          bgcolor: S ? n : "transparent",
          transition: "background-color 150ms ease, color 150ms ease",
          "&.Mui-focusVisible": {
            boxShadow: `0 0 0 2px ${Xe(r, 0.6)}`
          },
          ...ni
        },
        children: /* @__PURE__ */ e(v, { sx: { fontSize: 18 } })
      }
    );
  };
  return /* @__PURE__ */ d(
    de,
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
        c("light", "Light", sn, s),
        c("dark", "Dark", nn, p)
      ]
    }
  );
}, ai = ({
  open: t,
  anchorEl: o,
  onClose: r,
  width: n,
  renderAvatar: s,
  userName: p,
  userEmail: a,
  roleLabel: l,
  accentColor: c,
  tint: u,
  showThemeToggler: f,
  theme: v,
  onThemeToggle: h,
  showNotifications: S,
  notificationCount: w,
  onNotificationsClick: g,
  whatsNewCount: M,
  onWhatsNewClick: W,
  onProfileClick: D,
  onSubmitRequestClick: T,
  showSettings: N,
  onSettingsClick: X,
  settingsSections: F,
  onSettingsItemClick: b,
  onLinkClick: ne,
  platforms: ie,
  currentPlatformKey: C,
  onPlatformSelect: $,
  onLogout: U
}) => {
  const ue = _t().palette.mode === "dark", _e = m.useRef(null), [H, Ve] = m.useState(null), pe = m.useRef(null), L = m.useRef(null), ee = m.useRef(null), [Le, te] = m.useState(
    null
  ), [He, oe] = m.useState(0), [G, he] = m.useState(null), ve = !!ie?.length, z = N && !!F?.length, Ye = N && (z || !!X), V = m.useCallback(() => {
    const E = pe.current, Ie = G === "platforms" ? L.current : G === "settings" ? ee.current : null;
    if (!t || !E || !Ie || !Le) {
      oe(0);
      return;
    }
    const xe = E.getBoundingClientRect(), ze = Ie.getBoundingClientRect().top, i = Le.getBoundingClientRect().height, y = xe.bottom - (ze + i), O = Math.max(0, xe.height - i), R = Math.round(Math.min(Math.max(y, 0), O));
    oe((P) => P === R ? P : R);
  }, [t, G, Le]);
  m.useLayoutEffect(() => {
    V();
  }, [V]), m.useEffect(() => {
    if (!H || typeof ResizeObserver > "u")
      return;
    const E = new ResizeObserver(() => {
      _e.current?.updatePosition(), V();
    });
    return E.observe(H), () => E.disconnect();
  }, [H, V]);
  const ke = () => {
    he(null);
  }, J = (E) => {
    r(), E?.();
  }, Ae = () => {
    const E = G === "platforms" ? L : ee;
    he(null), E.current?.focus();
  }, re = (E) => {
    he((Ie) => Ie === E ? null : E);
  }, qe = (E) => {
    E.key !== C && (r(), $ ? $(E) : xn(E.url));
  }, ae = (E, Ie) => {
    r(), E.onClick ? E.onClick() : b ? b(E, Ie) : E.path && ne?.(E.path);
  }, Re = (E) => {
    E.key === "Escape" && G && (E.stopPropagation(), Ae());
  }, K = { borderRadius: "8px", py: 1, gap: 0.5 }, fe = { color: "text.secondary", fontSize: 20 }, De = {
    color: c,
    bgcolor: u,
    "& .MuiListItemIcon-root": { color: c },
    "& .MuiSvgIcon-root": { color: c },
    "&:hover": { bgcolor: Xe(c, 0.22) }
  }, Ce = G === "settings", me = G === "platforms";
  return /* @__PURE__ */ d(
    or,
    {
      open: t,
      anchorEl: o,
      onClose: r,
      action: _e,
      anchorOrigin: { vertical: "top", horizontal: "left" },
      transformOrigin: { vertical: "bottom", horizontal: "left" },
      slotProps: {
        transition: { onExited: ke },
        paper: {
          ref: Ve,
          onKeyDown: Re,
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
            ref: pe,
            "data-testid": "account-menu",
            sx: { ...br, width: n, minWidth: n },
            children: [
              /* @__PURE__ */ d(
                de,
                {
                  direction: "row",
                  sx: { alignItems: "center", gap: 1.5, p: 2 },
                  children: [
                    s(44),
                    /* @__PURE__ */ d(x, { sx: { minWidth: 0, flex: 1 }, children: [
                      /* @__PURE__ */ e(_, { noWrap: !0, sx: { fontWeight: 600 }, children: p }),
                      a ? /* @__PURE__ */ e(
                        _,
                        {
                          noWrap: !0,
                          variant: "body2",
                          "data-testid": "account-menu-email",
                          sx: { color: "text.secondary" },
                          children: a
                        }
                      ) : null,
                      l ? /* @__PURE__ */ e(
                        _,
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
                    ...K,
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
                    /* @__PURE__ */ e(j, { children: /* @__PURE__ */ e(dn, { fontSize: "small" }) }),
                    /* @__PURE__ */ e(_, { sx: { flex: 1 }, children: "Theme" }),
                    /* @__PURE__ */ e(
                      ii,
                      {
                        mode: v,
                        onToggle: h,
                        accentColor: c,
                        tint: u
                      }
                    )
                  ]
                }
              ) : null,
              /* @__PURE__ */ d(
                kt,
                {
                  autoFocusItem: t,
                  sx: { px: 1, pt: f ? 0 : 0.5, pb: 0.5 },
                  children: [
                    S ? /* @__PURE__ */ d(
                      Q,
                      {
                        onClick: () => J(g),
                        "data-testid": "menu-item-notifications",
                        sx: K,
                        children: [
                          /* @__PURE__ */ e(j, { children: /* @__PURE__ */ e(ln, { fontSize: "small" }) }),
                          /* @__PURE__ */ e(_, { sx: { flex: 1 }, children: "Notifications" }),
                          /* @__PURE__ */ e(Ko, { count: w })
                        ]
                      }
                    ) : null,
                    W ? /* @__PURE__ */ d(
                      Q,
                      {
                        onClick: () => J(W),
                        "data-testid": "menu-item-whats-new",
                        sx: K,
                        children: [
                          /* @__PURE__ */ e(j, { children: /* @__PURE__ */ e(rn, { fontSize: "small" }) }),
                          /* @__PURE__ */ e(_, { sx: { flex: 1 }, children: "What's New" }),
                          /* @__PURE__ */ e(Ko, { count: M })
                        ]
                      }
                    ) : null,
                    D ? /* @__PURE__ */ d(
                      Q,
                      {
                        onClick: () => J(D),
                        "data-testid": "menu-item-profile",
                        sx: K,
                        children: [
                          /* @__PURE__ */ e(j, { children: /* @__PURE__ */ e(cn, { fontSize: "small" }) }),
                          "Profile"
                        ]
                      }
                    ) : null,
                    T ? /* @__PURE__ */ d(
                      Q,
                      {
                        onClick: () => J(T),
                        "data-testid": "menu-item-submit-request",
                        sx: K,
                        children: [
                          /* @__PURE__ */ e(j, { children: /* @__PURE__ */ e(un, { fontSize: "small" }) }),
                          "Submit a request"
                        ]
                      }
                    ) : null,
                    Ye ? /* @__PURE__ */ d(
                      Q,
                      {
                        ref: ee,
                        onClick: z ? () => re("settings") : () => J(X),
                        "aria-haspopup": z ? "dialog" : void 0,
                        "aria-expanded": z ? Ce : void 0,
                        "data-active": Ce ? "true" : "false",
                        "data-testid": "menu-item-settings",
                        sx: Ce ? { ...K, ...De } : K,
                        children: [
                          /* @__PURE__ */ e(j, { children: /* @__PURE__ */ e(er, { fontSize: "small" }) }),
                          /* @__PURE__ */ e(_, { sx: { flex: 1 }, children: "Settings" }),
                          /* @__PURE__ */ e(qt, { sx: fe })
                        ]
                      }
                    ) : null,
                    ve ? /* @__PURE__ */ e(We, { component: "li", sx: { my: 0.5 } }) : null,
                    ve ? /* @__PURE__ */ d(
                      Q,
                      {
                        ref: L,
                        onClick: () => re("platforms"),
                        "aria-haspopup": "dialog",
                        "aria-expanded": me,
                        "data-active": me ? "true" : "false",
                        "data-testid": "menu-item-platforms",
                        sx: me ? { ...K, ...De } : K,
                        children: [
                          /* @__PURE__ */ e(j, { children: /* @__PURE__ */ e(an, { fontSize: "small" }) }),
                          /* @__PURE__ */ e(_, { sx: { flex: 1 }, children: "Lumora Platforms" }),
                          /* @__PURE__ */ e(qt, { sx: fe })
                        ]
                      }
                    ) : null,
                    U ? /* @__PURE__ */ e(We, { component: "li", sx: { my: 0.5 } }) : null,
                    U ? /* @__PURE__ */ d(
                      Q,
                      {
                        onClick: () => J(U),
                        "data-testid": "menu-item-logout",
                        sx: {
                          ...K,
                          color: ue ? "error.light" : "error.main"
                        },
                        children: [
                          /* @__PURE__ */ e(j, { sx: { color: "inherit" }, children: /* @__PURE__ */ e(Zo, { fontSize: "small" }) }),
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
        ve && G === "platforms" || z && G === "settings" ? /* @__PURE__ */ e(
          x,
          {
            ref: te,
            "data-testid": "account-menu-subcard",
            style: { marginBottom: He },
            sx: { display: "flex" },
            children: G === "platforms" ? /* @__PURE__ */ e(
              ei,
              {
                platforms: ie,
                currentPlatformKey: C,
                onSelect: qe,
                accentColor: c,
                tint: u,
                width: oi,
                sx: Uo
              }
            ) : /* @__PURE__ */ e(
              ti,
              {
                sections: F,
                onItemClick: ae,
                width: ri,
                sx: Uo
              }
            )
          }
        ) : null
      ]
    }
  );
}, si = {
  "&:focus, &:focus-visible": { outline: "none" }
}, li = ({
  mainLinks: t,
  secondaryLinks: o = [],
  activePath: r,
  onLinkClick: n,
  logo: s,
  title: p,
  onBrandClick: a,
  brandColor: l,
  headerBackgroundColor: c,
  headerForegroundColor: u,
  activeAccentColor: f = "#01584f",
  groupAccentColor: v,
  activeForegroundColor: h,
  foregroundColor: S,
  surfaceBackgroundColor: w,
  collapsed: g,
  onCollapsedChange: M,
  expandedWidth: W,
  collapsedWidth: D,
  topContent: T,
  color: N,
  hoverColor: X,
  avatarColor: F,
  showProfile: b = !0,
  userName: ne = "User",
  userEmail: ie,
  userRole: C,
  userAvatar: $,
  showNotifications: U = !0,
  notificationCount: k = 0,
  onNotificationsClick: ue,
  whatsNewCount: _e = 0,
  onWhatsNewClick: H,
  onProfileClick: Ve,
  onSubmitRequestClick: pe,
  showSettings: L = !0,
  onSettingsClick: ee,
  settingsSections: Le,
  onSettingsItemClick: te,
  platforms: He,
  currentPlatformKey: oe,
  onPlatformSelect: G,
  onLogout: he,
  theme: ve = "light",
  showThemeToggler: z = !0,
  onThemeToggle: Ye
}) => {
  const V = _t(), ke = V.palette.mode === "dark", J = w ?? (ke ? V.palette.background.paper : "#ffffff"), Ae = N ?? S ?? (ke ? V.palette.text.primary : f), re = X ?? v ?? Ot(f), qe = F ?? f, ae = m.useRef(null), [Re, K] = m.useState(!1), fe = C ? C.replace(/_/g, " ") : void 0, De = (xe) => /* @__PURE__ */ e(
    oo,
    {
      name: ne,
      avatar: $,
      color: qe,
      size: xe
    }
  ), Ce = U ? /* @__PURE__ */ e(
    ro,
    {
      count: k,
      onClick: ue,
      color: Ae,
      hoverColor: re,
      tooltipPlacement: "right",
      testId: "panel-notifications"
    }
  ) : null, me = b ? /* @__PURE__ */ d(
    st,
    {
      ref: ae,
      onClick: () => K(!0),
      "aria-haspopup": "menu",
      "aria-expanded": Re,
      "aria-label": "Account menu",
      "data-testid": "panel-user-button",
      sx: {
        flex: g ? "0 0 auto" : 1,
        minWidth: 0,
        justifyContent: "flex-start",
        gap: 1.25,
        p: 0.75,
        borderRadius: "10px",
        bgcolor: Re ? re : "transparent",
        "&:hover": { bgcolor: re },
        ...si
      },
      children: [
        g && U ? (
          // Collapsed: no room for the bell, so unread shows as a dot
          /* @__PURE__ */ e(
            tr,
            {
              color: "error",
              variant: "dot",
              overlap: "circular",
              invisible: !k,
              children: De(36)
            }
          )
        ) : De(g ? 36 : 40),
        g ? null : /* @__PURE__ */ d(x, { sx: { minWidth: 0, textAlign: "left" }, children: [
          /* @__PURE__ */ e(
            _,
            {
              noWrap: !0,
              sx: { fontWeight: 600, color: Ae, lineHeight: 1.3 },
              children: ne
            }
          ),
          fe ? /* @__PURE__ */ e(
            _,
            {
              noWrap: !0,
              variant: "caption",
              "data-testid": "panel-user-role",
              sx: {
                display: "block",
                color: Ae,
                opacity: 0.85,
                textTransform: "uppercase",
                letterSpacing: "0.02em",
                lineHeight: 1.3
              },
              children: fe
            }
          ) : null
        ] })
      ]
    }
  ) : null, E = !!Ce && (!g || !me);
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
          Zt,
          {
            mainLinks: t,
            secondaryLinks: o,
            activePath: r,
            onLinkClick: n,
            showHeaderBar: !0,
            logo: s,
            title: p,
            onBrandClick: a,
            brandColor: l,
            headerBackgroundColor: c,
            headerForegroundColor: u,
            activeAccentColor: f,
            groupAccentColor: v,
            activeForegroundColor: h,
            foregroundColor: S,
            surfaceBackgroundColor: J,
            collapsed: g,
            onCollapsedChange: M,
            expandedWidth: W,
            collapsedWidth: D,
            topContent: T,
            footer: me || E ? /* @__PURE__ */ d(
              de,
              {
                direction: "row",
                sx: {
                  alignItems: "center",
                  gap: 0.5,
                  justifyContent: "center"
                },
                children: [
                  me,
                  E ? Ce : null
                ]
              }
            ) : void 0
          }
        ),
        b ? /* @__PURE__ */ e(
          ai,
          {
            open: Re,
            anchorEl: ae.current,
            onClose: () => K(!1),
            width: Math.max(W - 16, 240),
            renderAvatar: De,
            userName: ne,
            userEmail: ie,
            roleLabel: fe,
            accentColor: f,
            tint: re,
            showThemeToggler: z,
            theme: ve,
            onThemeToggle: Ye,
            showNotifications: U,
            notificationCount: k,
            onNotificationsClick: ue,
            whatsNewCount: _e,
            onWhatsNewClick: H,
            onProfileClick: Ve,
            onSubmitRequestClick: pe,
            showSettings: L,
            onSettingsClick: ee,
            settingsSections: Le,
            onSettingsItemClick: te,
            onLinkClick: n,
            platforms: He,
            currentPlatformKey: oe,
            onPlatformSelect: G,
            onLogout: he
          }
        ) : null
      ]
    }
  );
}, ci = ({
  compact: t,
  color: o,
  hoverColor: r,
  showProfile: n,
  ...s
}) => {
  const {
    avatarColor: p,
    showNotifications: a,
    notificationCount: l,
    onNotificationsClick: c,
    userName: u = "User",
    userRole: f,
    userAvatar: v
  } = s, h = m.useRef(null), [S, w] = m.useState(
    null
  ), g = !!S;
  if (!a && !n)
    return null;
  const M = {
    "&.Mui-focusVisible": { outline: "2px solid", outlineColor: o }
  };
  return /* @__PURE__ */ d(at, { children: [
    /* @__PURE__ */ d(
      de,
      {
        ref: h,
        direction: t ? "column" : "row",
        spacing: 0.5,
        "data-testid": "sidebar-footer",
        sx: { width: "100%", alignItems: "center" },
        children: [
          n && /* @__PURE__ */ e(
            ye,
            {
              title: t ? u : "",
              placement: "right",
              arrow: !0,
              children: /* @__PURE__ */ e(
                st,
                {
                  onClick: () => w(h.current),
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
                    color: o,
                    bgcolor: g ? r : "transparent",
                    "&:hover": { bgcolor: r },
                    ...M
                  },
                  children: /* @__PURE__ */ e(
                    fr,
                    {
                      name: u,
                      role: f,
                      avatar: v,
                      avatarColor: p,
                      showText: !t
                    }
                  )
                }
              )
            }
          ),
          a && /* @__PURE__ */ e(
            ro,
            {
              count: l,
              onClick: c,
              color: o,
              hoverColor: r,
              tooltipPlacement: "right",
              testId: "sidebar-notifications"
            }
          )
        ]
      }
    ),
    /* @__PURE__ */ e(
      mr,
      {
        anchorEl: S,
        onClose: () => w(null),
        placement: t ? "beside" : "above",
        width: t ? void 0 : h.current?.clientWidth,
        ...s
      }
    )
  ] });
}, di = 'input, textarea, [contenteditable="true"]', Go = (t) => {
  t?.querySelector(di)?.focus();
}, ui = ({
  search: t,
  mode: o,
  onExpand: r,
  autoFocus: n = !1,
  onAutoFocused: s,
  color: p,
  hoverColor: a
}) => {
  const l = m.useRef(null), [c, u] = m.useState(null);
  return m.useEffect(() => {
    o === "full" && n && (Go(l.current), s?.());
  }, [o, n, s]), o === "full" ? /* @__PURE__ */ e(
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
        /* @__PURE__ */ e(ye, { title: "Search", placement: "right", arrow: !0, children: /* @__PURE__ */ e(
          Oe,
          {
            "aria-label": "Search",
            onClick: (f) => o === "expand" ? r?.() : u(f.currentTarget),
            sx: {
              width: 44,
              height: 44,
              color: p,
              borderRadius: "8px",
              "&:hover": { bgcolor: a }
            },
            children: /* @__PURE__ */ e(Jo, {})
          }
        ) }),
        /* @__PURE__ */ e(
          or,
          {
            open: !!c,
            anchorEl: c,
            onClose: () => u(null),
            anchorOrigin: { vertical: "top", horizontal: "right" },
            transformOrigin: { vertical: "top", horizontal: "left" },
            TransitionProps: {
              onEntered: (f) => Go(f)
            },
            slotProps: { paper: { sx: { ml: 1, p: 1.5, width: 360 } } },
            children: t
          }
        )
      ]
    }
  );
}, pi = 100, jo = 80, jt = 56, hi = 300, Xt = 288, Vt = 72, Xo = "lumora:sidebar-collapsed", Yt = "width 200ms ease, left 200ms ease", fi = 68, mi = { xs: 2, md: 5 }, xi = () => typeof navigator < "u" && /Mac|iPhone|iPad/.test(navigator.platform || navigator.userAgent), gi = (t, o) => {
  const r = (n) => typeof n == "number" ? o.spacing(n) : n;
  return typeof t == "object" ? Object.fromEntries(
    Object.entries(t).map(([n, s]) => [n, r(s)])
  ) : r(t);
}, Ra = ({
  children: t,
  sidebarLinks: o = [],
  secondarySidebarLinks: r = [],
  appName: n = "Dashboard",
  showSidebar: s = !0,
  showSidebarRailTitles: p = !1,
  sidebarVariant: a = "rail",
  mobileNavigation: l = "bottom-bar",
  mobileBottomBarLinks: c,
  logo: u,
  onBrandClick: f,
  searchComponent: v,
  brandColor: h,
  contentPadding: S = mi,
  userMenuItems: w,
  sidebarBackgroundColor: g,
  sidebarHeaderBackgroundColor: M,
  groupAccentColor: W,
  activeSidebarForegroundColor: D,
  enableRefreshToken: T = !1,
  activePath: N,
  onLinkClick: X,
  showProfile: F = !0,
  userName: b,
  userRole: ne,
  userAvatar: ie,
  userEmail: C,
  onLogout: $,
  showSettings: U = !0,
  onSettingsClick: k,
  onProfileClick: ue,
  onSubmitRequestClick: _e,
  settingsSections: H,
  onSettingsItemClick: Ve,
  showNotifications: pe = !0,
  notificationCount: L = 0,
  NotificationSidebarContent: ee,
  whatsNewCount: Le = 0,
  onNotificationsClick: te,
  onWhatsNewClick: He,
  platforms: oe,
  currentPlatformKey: G,
  onPlatformSelect: he,
  onVerify: ve,
  alertProps: z,
  style: Ye,
  sidebarStyles: V,
  contentStyles: ke,
  accentColor: J,
  sidebarAccentColor: Ae,
  sidebarForegroundColor: re,
  contentBackgroundColor: qe,
  theme: ae = "light",
  showThemeToggler: Re = !1,
  onThemeToggle: K,
  GlobalChatSidebar: fe,
  useChatSidebar: De,
  chatPanelMode: Ce = "docked",
  chatPanelPosition: me = "right",
  chatPanelWidth: E = 420,
  onChatClose: Ie,
  showAssistant: xe = !1,
  assistantPlacement: ze = "sidebar",
  assistantShortcut: i = "j",
  onAssistantClick: y,
  assistantActive: O = !1,
  assistantBusy: R = !1,
  customNavbar: P,
  customNavbarProps: se,
  redirectToLogin: ge,
  apiBaseUrl: Z
}) => {
  const Pe = Br(), le = Mr(Pe.breakpoints.down("md")), no = To(
    () => Vo(Dn(ae)),
    [ae]
  ), At = ae === "dark", io = J ?? "#01584f", $e = Ae ?? io, Dt = qe ?? (At ? "hsl(220, 35%, 9%)" : "#f2f9fc"), Je = a === "collapsible", Nt = a === "panel", Sr = Nt && s && !le, Ue = a === "rail-labeled", ao = Je || Ue, Ke = g ?? (At ? "hsl(220, 30%, 7%)" : "#ffffff"), gt = M ?? Ke, Be = re ?? (At ? "#ffffff" : $e), lt = W ?? Ot(Be), ct = M ? Jt(gt) : Be, so = (I) => /* @__PURE__ */ e(
    Se,
    {
      role: "img",
      "aria-label": `${n} logo`,
      sx: {
        width: 28,
        height: 28,
        flexShrink: 0,
        bgcolor: I,
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
  ), bt = h ?? ct, Wt = u ?? so(bt), Er = u ?? so(h ?? Be), [Ge, wr] = Qe(
    () => ar(Xo) ?? !1
  ), Lt = (I) => {
    wr(I), sr(Xo, I);
  }, [yr, lo] = Qe(!1), vr = Pr(() => lo(!1), []);
  let be = 0;
  s && !le && (Ue ? be = jo : Je || Nt ? be = Ge ? Vt : Xt : be = pi);
  const [co, Ze] = Qe(!1), [uo, zt] = Qe(!1), ce = le && l === "bottom-bar", po = `calc(${xr}px + env(safe-area-inset-bottom, 0px))`, [Pt, ho] = Qe({ open: !1, tab: "notifications" }), fo = () => ho((I) => ({ ...I, open: !1 })), mo = pe && !!ee, [Rr, Cr] = Qe(!0), [Ir, Tr] = Qe(!1), xo = De?.()?.isOpen ?? !1, go = Ce === "floating" ? "floating" : "docked", Or = go === "docked" && xo && fe && !le ? E : 0, bo = $t(ve), So = $t(!1), Eo = To(
    () => An(Z),
    [Z]
  );
  wt(() => {
    bo.current = ve;
  }, [ve]);
  const Bt = $t(y);
  Bt.current = y;
  const dt = xe && i ? i.toLowerCase() : null;
  wt(() => {
    if (!dt)
      return;
    const I = (Y) => {
      (Y.metaKey || Y.ctrlKey) && !Y.altKey && !Y.shiftKey && Y.key.toLowerCase() === dt && Bt.current && (Y.preventDefault(), Bt.current());
    };
    return window.addEventListener("keydown", I), () => window.removeEventListener("keydown", I);
  }, [dt]);
  const wo = (I) => {
    const Y = $(I);
    Y instanceof Promise && Y.catch((Ne) => {
      console.error("Error in logout handler:", Ne);
    });
  };
  if (wt(() => {
    (() => {
      try {
        const { isAuthenticated: Y } = _n();
        if (!Y) {
          console.log("No session found, redirecting to login"), xt(), ge();
          return;
        }
        if (!So.current) {
          const { user: Ne, error: Ht } = kn();
          if (Ne && !Ht) {
            const Nr = {
              name: Ne.name || "",
              email: Ne.email || "",
              profilePicture: Ne.profilePicture || "",
              role: Ne.role || ""
            };
            So.current = !0, bo.current?.(Nr);
          } else Ht && console.error("Error getting user data:", Ht);
        }
        Tr(!0);
      } catch (Y) {
        console.error("Error checking session:", Y), xt(), ge();
      } finally {
        Cr(!1);
      }
    })();
  }, [ge]), wt(() => {
    T && Nn(Eo, ge);
  }, [T, Eo]), Rr)
    return /* @__PURE__ */ e(Io, { theme: no, children: /* @__PURE__ */ d(
      Se,
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
            Fr,
            {
              size: 60,
              thickness: 4,
              sx: { color: io }
            }
          ),
          /* @__PURE__ */ e(Se, { sx: { mt: 2, color: "text.secondary" }, children: "Checking session..." })
        ]
      }
    ) });
  if (!Ir)
    return null;
  const ut = v ?? (P ? /* @__PURE__ */ e(P, { ...se }) : null), yo = (I) => {
    Ze(!1), zt(!1), ho({ open: !0, tab: I });
  }, Mt = ee && (() => yo("notifications")), _r = ee && (() => yo("whats-new")), vo = {
    avatarColor: $e,
    menuItems: w,
    showNotifications: pe,
    notificationCount: L,
    onNotificationsClick: Mt,
    showProfile: F,
    userName: b,
    userRole: ne,
    userAvatar: ie,
    showSettings: U,
    onSettingsClick: k,
    showThemeToggler: Re,
    theme: ae,
    onThemeToggle: K,
    onLogout: wo
  }, Ft = (I) => /* @__PURE__ */ e(
    ci,
    {
      ...vo,
      compact: I,
      color: Be,
      hoverColor: lt
    }
  ), Ro = dt ? [xi() ? "⌘" : "Ctrl", dt.toUpperCase()] : void 0, kr = (I) => xe && ze === "sidebar" ? /* @__PURE__ */ e(
    zo,
    {
      variant: I ? "sidebar-icon" : "sidebar",
      onClick: y,
      active: O,
      busy: R,
      shortcutKeys: Ro,
      accentColor: Be
    }
  ) : null, Ar = (I) => ut ? /* @__PURE__ */ e(
    ui,
    {
      search: ut,
      mode: I,
      onExpand: () => {
        Lt(!1), lo(!0);
      },
      autoFocus: yr,
      onAutoFocused: vr,
      color: Be,
      hoverColor: lt
    }
  ) : null, St = (I) => {
    const Y = kr(I !== "full"), Ne = Ar(I);
    return Y || Ne ? /* @__PURE__ */ d(
      Ur,
      {
        spacing: 1.5,
        sx: { alignItems: I === "full" ? "stretch" : "center" },
        children: [
          Y,
          Ne
        ]
      }
    ) : void 0;
  }, Dr = gi(
    S,
    Pe
  );
  return /* @__PURE__ */ e(Io, { theme: no, children: /* @__PURE__ */ d(
    Se,
    {
      sx: {
        display: "flex",
        minHeight: "100vh",
        ...Ye
      },
      children: [
        /* @__PURE__ */ e(Hr, {}),
        le && /* @__PURE__ */ e(
          Jn,
          {
            height: jt,
            onMenuClick: s && !ce ? () => Ze(!0) : void 0,
            appName: n,
            logo: Wt,
            onBrandClick: f,
            background: gt,
            color: ct,
            brandColor: bt,
            endContent: pe ? /* @__PURE__ */ e(
              ro,
              {
                count: L,
                onClick: Mt,
                color: ct,
                hoverColor: lt,
                tooltipPlacement: "bottom",
                testId: "mobile-notifications"
              }
            ) : void 0
          }
        ),
        s && !le && ao && /* @__PURE__ */ d(
          Se,
          {
            component: "aside",
            sx: {
              width: be,
              minWidth: be,
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
              bgcolor: Je ? Ke : void 0,
              borderRight: "1px solid",
              borderColor: "divider",
              transition: Yt,
              ...V
            },
            children: [
              /* @__PURE__ */ e(
                Zt,
                {
                  mainLinks: o,
                  secondaryLinks: r,
                  activePath: N,
                  onLinkClick: X,
                  showHeaderBar: Je,
                  logo: Wt,
                  title: n,
                  onBrandClick: f,
                  brandColor: bt,
                  headerBackgroundColor: Je ? gt : void 0,
                  headerForegroundColor: Je ? ct : void 0,
                  activeAccentColor: $e,
                  groupAccentColor: W,
                  activeForegroundColor: D,
                  foregroundColor: re,
                  surfaceBackgroundColor: Ke,
                  collapsed: Ue ? !0 : Ge,
                  onCollapsedChange: Ue ? void 0 : Lt,
                  showLabels: Ue,
                  expandedWidth: Xt,
                  collapsedWidth: Ue ? jo : Vt,
                  topContent: St(
                    Ue ? "popover" : Ge ? "expand" : "full"
                  ),
                  footer: Ft(
                    Ue || Ge
                  )
                }
              ),
              Je && z?.show && !Ge && /* @__PURE__ */ e(Rt, { ...z })
            ]
          }
        ),
        Sr && /* @__PURE__ */ d(
          Se,
          {
            component: "aside",
            sx: {
              width: be,
              minWidth: be,
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
              transition: Yt,
              ...V
            },
            children: [
              /* @__PURE__ */ e(
                li,
                {
                  mainLinks: o,
                  secondaryLinks: r,
                  activePath: N,
                  onLinkClick: X,
                  logo: Wt,
                  title: n,
                  onBrandClick: f,
                  brandColor: bt,
                  headerBackgroundColor: gt,
                  headerForegroundColor: ct,
                  activeAccentColor: $e,
                  groupAccentColor: W,
                  activeForegroundColor: D,
                  foregroundColor: re,
                  surfaceBackgroundColor: Ke,
                  collapsed: Ge,
                  onCollapsedChange: Lt,
                  expandedWidth: Xt,
                  collapsedWidth: Vt,
                  topContent: St(
                    Ge ? "expand" : "full"
                  ),
                  color: Be,
                  hoverColor: lt,
                  avatarColor: $e,
                  showProfile: F,
                  userName: b,
                  userEmail: C,
                  userRole: ne,
                  userAvatar: ie,
                  showNotifications: pe,
                  notificationCount: L,
                  onNotificationsClick: mo ? Mt : te,
                  whatsNewCount: Le,
                  onWhatsNewClick: mo ? _r : He,
                  onProfileClick: ue,
                  onSubmitRequestClick: _e,
                  showSettings: U,
                  onSettingsClick: k,
                  settingsSections: H,
                  onSettingsItemClick: Ve,
                  platforms: oe,
                  currentPlatformKey: G,
                  onPlatformSelect: he,
                  onLogout: wo,
                  theme: ae,
                  showThemeToggler: Re,
                  onThemeToggle: K
                }
              ),
              z?.show && !Ge && /* @__PURE__ */ e(Rt, { ...z })
            ]
          }
        ),
        s && !le && !ao && !Nt && /* @__PURE__ */ e(
          Oo,
          {
            variant: "permanent",
            sx: {
              width: be,
              flexShrink: 0,
              zIndex: 2,
              "& .MuiDrawer-paper": {
                width: be,
                boxSizing: "border-box",
                bgcolor: Dt,
                borderRight: "none"
              },
              ...V
            },
            children: /* @__PURE__ */ d(
              Se,
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
                    Se,
                    {
                      sx: {
                        display: "flex",
                        justifyContent: "center",
                        mb: 1.5
                      },
                      children: /* @__PURE__ */ e(
                        Tt,
                        {
                          logo: Er,
                          appName: n,
                          onClick: f,
                          color: h ?? Be,
                          testId: "sidebar-header-brand"
                        }
                      )
                    }
                  ),
                  St("popover"),
                  /* @__PURE__ */ d(
                    Se,
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
                          Gn,
                          {
                            mainLinks: o,
                            secondaryLinks: r,
                            activePath: N,
                            onLinkClick: X,
                            accentColor: $e,
                            surfaceBackgroundColor: Dt,
                            railShowTitles: p
                          }
                        ),
                        z?.show && /* @__PURE__ */ e(Rt, { ...z })
                      ]
                    }
                  ),
                  /* @__PURE__ */ e(Se, { sx: { py: 1.5 }, children: Ft(!0) })
                ]
              }
            )
          }
        ),
        s && le && /* @__PURE__ */ d(
          $r,
          {
            anchor: ce ? "bottom" : "left",
            open: co,
            onOpen: () => Ze(!0),
            onClose: () => Ze(!1),
            disableSwipeToOpen: !0,
            sx: { zIndex: (I) => I.zIndex.drawer + 1 },
            slotProps: {
              paper: {
                "aria-label": "Navigation",
                sx: {
                  bgcolor: Ke,
                  backgroundImage: "none",
                  ...ce ? {
                    maxHeight: "min(80vh, 640px)",
                    borderTopLeftRadius: "16px",
                    borderTopRightRadius: "16px",
                    pb: "env(safe-area-inset-bottom, 0px)"
                  } : { maxWidth: "85vw" }
                }
              }
            },
            children: [
              ce && // Grab handle: the sheet can be swiped down to close
              /* @__PURE__ */ e(
                Se,
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
                Zt,
                {
                  mainLinks: o,
                  secondaryLinks: r,
                  activePath: N,
                  onLinkClick: (I) => {
                    X?.(I), Ze(!1);
                  },
                  onLinkAction: () => Ze(!1),
                  collapsed: !1,
                  expandedWidth: ce ? "100%" : hi,
                  activeAccentColor: $e,
                  groupAccentColor: W,
                  activeForegroundColor: D,
                  foregroundColor: re,
                  surfaceBackgroundColor: Ke,
                  topInsetPx: ce ? 8 : 0,
                  topContent: ce ? void 0 : St("full"),
                  footer: ce ? void 0 : Ft(!1)
                }
              ),
              z?.show && /* @__PURE__ */ e(Rt, { ...z })
            ]
          }
        ),
        ce && ut && /* @__PURE__ */ e(
          qn,
          {
            open: uo,
            onClose: () => zt(!1),
            search: ut
          }
        ),
        ce && /* @__PURE__ */ e(
          Yn,
          {
            ...vo,
            pinnedLinks: c,
            activePath: N,
            onLinkClick: X,
            onMenuClick: s ? () => Ze(!0) : void 0,
            menuOpen: co,
            onSearchClick: ut ? () => zt(!0) : void 0,
            searchOpen: uo,
            showAssistant: xe,
            onAssistantClick: y,
            assistantActive: O,
            showProfile: F,
            background: Ke,
            color: Be,
            activeColor: $e,
            activeBackground: lt
          }
        ),
        /* @__PURE__ */ e(
          Se,
          {
            component: "main",
            sx: {
              flexGrow: 1,
              "--lumora-content-padding": Dr,
              // Where sticky page elements should pin (below the mobile bar)
              "--lumora-sticky-top": le ? `${jt}px` : "0px",
              p: "var(--lumora-content-padding)",
              width: be ? `calc(100% - ${be}px)` : "100%",
              transition: Yt,
              mt: le ? `${jt}px` : 0,
              // Keep the last content clear of the bottom bar
              ...ce && {
                pb: `calc(var(--lumora-content-padding) + ${po})`
              },
              backgroundColor: Dt,
              ...ke
            },
            children: t
          }
        ),
        fe && /* @__PURE__ */ e(
          Pn,
          {
            open: xo,
            variant: go,
            position: me,
            width: E,
            sidebarWidthPx: be,
            bottomOffsetPx: xe && ze === "floating" ? fi : 0,
            fullScreen: le,
            fullScreenBottom: ce ? po : "0px",
            onClose: Ie,
            children: /* @__PURE__ */ e(fe, {})
          }
        ),
        xe && ze === "floating" && !ce && /* @__PURE__ */ e(
          zo,
          {
            variant: "floating",
            rightOffsetPx: Or,
            shortcutKeys: Ro,
            onClick: y,
            active: O,
            busy: R
          }
        ),
        pe && ee && /* @__PURE__ */ e(
          Oo,
          {
            anchor: "right",
            open: Pt.open,
            onClose: fo,
            slotProps: {
              paper: { sx: { width: 380, maxWidth: "100vw" } }
            },
            children: /* @__PURE__ */ e(
              ee,
              {
                onClose: fo,
                initialTab: Pt.tab
              },
              Pt.tab
            )
          }
        )
      ]
    }
  ) });
};
export {
  B as AUTH_ERROR_CODES,
  A as AuthError,
  Zt as CollapsibleSidebar,
  ya as FullBleedSection,
  Tn as Kbd,
  Ra as LumoraWrapper,
  xt as clearAuthTokens,
  Ra as default,
  va as getAuthErrorMessage,
  mt as getAuthTokens,
  kn as getCurrentUser,
  Dn as getDesignTokens,
  _n as isAuthenticated,
  eo as logAuthError,
  cr as storeAuthTokens
};
