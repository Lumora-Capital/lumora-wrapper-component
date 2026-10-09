import { jsx as t, jsxs as h, Fragment as $e } from "react/jsx-runtime";
import Eo from "@mui/icons-material/KeyboardArrowDownRounded";
import vo from "@mui/icons-material/KeyboardArrowUpRounded";
import wo from "@mui/icons-material/ChevronRightRounded";
import S from "@mui/material/Box";
import xr from "@mui/material/Collapse";
import Ne from "@mui/material/Divider";
import ue from "@mui/material/IconButton";
import xt from "@mui/material/ListItemButton";
import te from "@mui/material/ListItemIcon";
import Se from "@mui/material/ListItemText";
import ae from "@mui/material/Stack";
import ie from "@mui/material/Tooltip";
import K from "@mui/material/Typography";
import { useTheme as Rt, createTheme as kr, alpha as Fe, ThemeProvider as gr } from "@mui/material/styles";
import * as p from "react";
import { useMemo as br, useState as je, useCallback as yo, useRef as Bt, useEffect as gt } from "react";
import Ke from "@mui/material/ButtonBase";
import { useTheme as Ro, useMediaQuery as Io, Box as J, CircularProgress as Oo, CssBaseline as Co, Drawer as Sr, SwipeableDrawer as _o, Stack as To } from "@mui/material";
import Er from "axios";
import Ao from "@mui/material/Card";
import Do from "@mui/material/CardContent";
import zr from "@mui/material/Button";
import No from "@mui/icons-material/AutoAwesomeRounded";
import Wo from "@mui/material/Grow";
import Vt from "@mui/material/Paper";
import ko from "@mui/material/Slide";
import zo from "@mui/material/ListSubheader";
import He from "@mui/material/MenuItem";
import Br from "@mui/material/MenuList";
import Bo from "@mui/material/Popper";
import Mr from "@mui/icons-material/MenuRounded";
import Lr from "@mui/icons-material/SearchRounded";
import Fr from "@mui/icons-material/LogoutRounded";
import Hr from "@mui/icons-material/NotificationsNoneOutlined";
import Mo from "@mui/icons-material/SettingsOutlined";
import Lo from "@mui/material/Avatar";
import Fo from "@mui/material/Menu";
import vr from "@mui/material/ToggleButton";
import Ho from "@mui/material/ToggleButtonGroup";
import Uo from "@mui/material/Drawer";
import $o from "@mui/material/AppBar";
import Ko from "@mui/material/Toolbar";
import Ur from "@mui/material/Badge";
import Po from "@mui/icons-material/DarkModeOutlined";
import Go from "@mui/icons-material/LightModeOutlined";
import jo from "@mui/icons-material/SettingsBrightnessOutlined";
import $r from "@mui/material/Popover";
const wt = ({
  logo: e,
  title: r,
  appName: o,
  onClick: n,
  color: a,
  testId: d
}) => {
  const s = {
    alignItems: "center",
    gap: 1,
    minWidth: 0,
    flexShrink: 0,
    color: a,
    // Consumer SVG logos pick up the brand color
    "& svg": { color: "inherit", fill: "currentColor" }
  }, l = /* @__PURE__ */ h($e, { children: [
    r ? /* @__PURE__ */ t(
      K,
      {
        variant: "h6",
        noWrap: !0,
        sx: {
          color: a,
          fontWeight: 600,
          fontSize: "18px",
          lineHeight: 1,
          textTransform: "uppercase"
        },
        children: r
      }
    ) : null,
    e
  ] });
  return n ? /* @__PURE__ */ t(
    Ke,
    {
      onClick: n,
      "aria-label": `${o} home`,
      "data-testid": d,
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
          outlineColor: a,
          outlineOffset: 2
        }
      },
      children: l
    }
  ) : /* @__PURE__ */ t(ae, { direction: "row", "data-testid": d, sx: s, children: l });
}, st = (e) => {
  var r;
  return !!((r = e.subitems) != null && r.length);
}, Et = (e, r) => e ? `${e}/${r.text}` : r.text, Ue = (e, r) => {
  var o;
  return r ? e.path && r === e.path ? !0 : ((o = e.subitems) == null ? void 0 : o.some((n) => Ue(n, r))) ?? !1 : !1;
}, De = (e, r) => !!(r && e.path === r), Kr = (e, r) => (e ?? []).flatMap((o) => {
  const n = o.icon ?? r;
  return st(o) ? Kr(o.subitems, n) : o.path ? [{ sub: o, icon: n }] : [];
}), Kt = (e) => {
  const r = Pr(e);
  if (!r)
    return "#ffffff";
  const [o, n, a] = r.map((s) => {
    const l = s / 255;
    return l <= 0.03928 ? l / 12.92 : ((l + 0.055) / 1.055) ** 2.4;
  });
  return 0.2126 * o + 0.7152 * n + 0.0722 * a > 0.5 ? "#0b1f1c" : "#ffffff";
}, yt = (e) => {
  const r = Pr(e);
  if (!r)
    return "rgba(1, 88, 79, 0.12)";
  const [o, n, a] = r;
  return `rgba(${o}, ${n}, ${a}, 0.14)`;
}, Pr = (e) => {
  let r = e.trim().replace(/^#/, "");
  if (r.length === 3 && (r = r.split("").map((n) => n + n).join("")), r.length !== 6 || /[^0-9a-fA-F]/.test(r))
    return null;
  const o = parseInt(r, 16);
  return [o >> 16 & 255, o >> 8 & 255, o & 255];
}, Gr = (e) => e.replace(/_/g, " ").split(/\s+/).filter(Boolean).join(" ").toUpperCase(), Xo = 264, Vo = 72, wr = 64, Mt = {
  "&:focus, &:focus-visible": { outline: "none" }
}, Yo = 16, qo = 14, Jo = 4, Zo = 2.5, yr = "0.7rem", Rr = 22, Le = ({ text: e, variant: r = "body1", center: o = !1, fontSize: n, fontWeight: a }) => {
  const d = p.useRef(null), [s, l] = p.useState(!1), f = p.useCallback(() => {
    const c = d.current;
    c && l(c.scrollWidth > c.clientWidth + 0.5);
  }, []);
  return p.useLayoutEffect(() => {
    f();
  }, [f, e]), p.useEffect(() => {
    const c = d.current;
    if (!c)
      return;
    const u = new ResizeObserver(() => f());
    return u.observe(c), () => u.disconnect();
  }, [f]), /* @__PURE__ */ t(
    ie,
    {
      title: e,
      placement: "right",
      arrow: !0,
      enterDelay: 400,
      disableHoverListener: !s,
      disableFocusListener: !s,
      disableTouchListener: !s,
      children: /* @__PURE__ */ t(
        K,
        {
          ref: d,
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
            ...a ? { fontWeight: a } : {},
            ...o ? { textAlign: "center", lineHeight: 1.1 } : {}
          },
          children: e
        }
      )
    }
  );
}, Qo = ({
  open: e,
  size: r = Yo
}) => e ? /* @__PURE__ */ t(vo, { sx: { fontSize: r, opacity: 0.75 } }) : /* @__PURE__ */ t(Eo, { sx: { fontSize: r, opacity: 0.75 } }), Ir = ({ open: e }) => /* @__PURE__ */ t(
  wo,
  {
    sx: {
      fontSize: 20,
      opacity: 0.75,
      transition: "transform 150ms ease",
      transform: e ? "rotate(90deg)" : "none"
    }
  }
), bt = 600, Pt = ({
  mainLinks: e,
  secondaryLinks: r = [],
  activePath: o,
  onLinkClick: n,
  onLinkAction: a,
  logo: d,
  title: s,
  onBrandClick: l,
  showHeaderBar: f = !1,
  headerBackgroundColor: c,
  headerForegroundColor: u,
  brandColor: w,
  activeAccentColor: m = "#01584f",
  groupAccentColor: x,
  activeForegroundColor: E,
  foregroundColor: g,
  surfaceBackgroundColor: y,
  collapsed: T = !1,
  expandedWidth: W = Xo,
  collapsedWidth: I = Vo,
  showLabels: v = !1,
  topInsetPx: z = 0,
  topContent: B,
  footer: A
}) => {
  const X = Rt(), j = X.palette.mode === "dark", [b, L] = p.useState(
    {}
  ), C = E ?? Kt(m), F = {
    bgcolor: m,
    color: C,
    "& .MuiListItemIcon-root": { color: C }
  }, he = {
    bgcolor: m,
    color: C,
    borderRadius: "8px"
  }, U = x ?? yt(m), Ee = y ?? (j ? X.palette.background.paper : "#ffffff"), V = g ?? (j ? "text.primary" : m), ve = c ?? Ee, We = u ?? (c ? Kt(ve) : g ?? (j ? X.palette.text.primary : m)), ke = yt(We), D = (i) => {
    n == null || n(i);
  }, we = (i, _) => {
    L((k) => ({ ...k, [i]: !_ }));
  }, fe = (i, _) => b[_] ?? Ue(i, o), se = (i, _, k) => ({
    color: i ? C : V,
    bgcolor: i ? m : "transparent",
    "& .MuiListItemIcon-root": {
      color: i ? C : V,
      minWidth: k
    },
    "&:hover": i || v ? F : { bgcolor: _ }
  }), pe = {
    "&.Mui-selected": {
      bgcolor: m
    },
    "&.Mui-selected:hover": F
  }, Ze = (i) => {
    const _ = De(i, o), k = /* @__PURE__ */ h(
      xt,
      {
        disabled: !i.path,
        selected: _,
        onClick: () => i.path && D(i.path),
        "data-testid": `sidebar-item-${i.text}`,
        "data-active": _ ? "true" : "false",
        sx: {
          borderRadius: "8px",
          py: 1.25,
          px: 1.5,
          // Room for the action button laid over the row's end
          ...i.action && { pr: 6 },
          ...i.subtitle && { py: 1 },
          // A two-line row usually leads with a larger avatar; give it room
          ...se(
            _,
            U,
            i.subtitle ? 48 : 36
          ),
          ...pe
        },
        children: [
          /* @__PURE__ */ t(te, { children: i.icon }),
          /* @__PURE__ */ t(
            Se,
            {
              disableTypography: !0,
              primary: /* @__PURE__ */ t(
                Le,
                {
                  text: i.text,
                  fontWeight: bt
                }
              ),
              secondary: i.subtitle ? /* @__PURE__ */ t(
                S,
                {
                  component: "span",
                  sx: { display: "block", opacity: 0.85 },
                  children: /* @__PURE__ */ t(
                    Le,
                    {
                      text: i.subtitle,
                      fontSize: "0.8125rem"
                    }
                  )
                }
              ) : void 0,
              sx: i.subtitle ? { my: 0 } : void 0
            }
          )
        ]
      },
      i.text
    );
    if (!i.action)
      return k;
    const { action: O } = i;
    return /* @__PURE__ */ h(S, { sx: { position: "relative" }, children: [
      k,
      /* @__PURE__ */ t(ie, { title: O.label, placement: "right", arrow: !0, children: /* @__PURE__ */ t(
        ue,
        {
          "aria-label": O.label,
          "data-testid": `sidebar-action-${i.text}`,
          onClick: () => {
            O.onClick(), a == null || a();
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
            borderColor: _ ? "rgba(255, 255, 255, 0.35)" : U,
            color: _ ? C : V,
            "&:hover": {
              bgcolor: _ ? "rgba(255, 255, 255, 0.15)" : U
            },
            "& .MuiSvgIcon-root": { fontSize: 18 },
            // No lingering outline after a click; a clear ring for keyboard focus
            "&:focus:not(.Mui-focusVisible)": {
              outline: "none"
            },
            "&.Mui-focusVisible": {
              outline: "2px solid",
              outlineColor: _ ? C : V,
              outlineOffset: 1
            }
          },
          children: O.icon
        }
      ) })
    ] }, i.text);
  }, me = (i) => {
    const _ = Ue(i, o), k = De(i, o), O = Et("", i), H = fe(i, O);
    return /* @__PURE__ */ h(
      S,
      {
        "data-testid": `sidebar-group-${i.text}`,
        sx: {
          borderRadius: "8px",
          bgcolor: _ ? U : "transparent"
        },
        children: [
          /* @__PURE__ */ h(
            xt,
            {
              onClick: () => we(O, H),
              "data-testid": `sidebar-item-${i.text}`,
              "data-active": k ? "true" : "false",
              "aria-expanded": H,
              sx: {
                borderRadius: "8px",
                py: 1.25,
                px: 1.5,
                ...se(k, U, 36)
              },
              children: [
                /* @__PURE__ */ t(te, { children: i.icon }),
                /* @__PURE__ */ t(
                  Se,
                  {
                    disableTypography: !0,
                    primary: /* @__PURE__ */ t(
                      Le,
                      {
                        text: i.text,
                        fontWeight: bt
                      }
                    )
                  }
                ),
                /* @__PURE__ */ t(Ir, { open: H })
              ]
            }
          ),
          /* @__PURE__ */ t(xr, { in: H, timeout: "auto", unmountOnExit: !0, children: /* @__PURE__ */ t(
            S,
            {
              "data-testid": `sidebar-children-${i.text}`,
              sx: { pb: 0.5 },
              children: i.subitems.map(
                ($) => ye($, O, 1)
              )
            }
          ) })
        ]
      },
      i.text
    );
  }, ye = (i, _, k) => {
    const O = Et(_, i), H = Jo + (k - 1) * Zo;
    if (st(i)) {
      const le = Ue(i, o), Y = De(i, o), oe = fe(i, O);
      return /* @__PURE__ */ h(S, { "data-testid": `sidebar-group-${i.text}`, children: [
        /* @__PURE__ */ h(
          xt,
          {
            onClick: () => we(O, oe),
            "data-testid": `sidebar-subitem-${i.text}`,
            "data-active": le ? "true" : "false",
            "aria-expanded": oe,
            sx: {
              borderRadius: "8px",
              mx: 0.5,
              py: 0.75,
              pl: H,
              ...se(Y, "action.hover", 32)
            },
            children: [
              i.icon ? /* @__PURE__ */ t(te, { children: i.icon }) : null,
              /* @__PURE__ */ t(
                Se,
                {
                  disableTypography: !0,
                  primary: /* @__PURE__ */ t(
                    Le,
                    {
                      text: i.text,
                      fontWeight: bt
                    }
                  )
                }
              ),
              /* @__PURE__ */ t(Ir, { open: oe })
            ]
          }
        ),
        /* @__PURE__ */ t(xr, { in: oe, timeout: "auto", unmountOnExit: !0, children: /* @__PURE__ */ t(S, { "data-testid": `sidebar-children-${i.text}`, children: i.subitems.map(
          (dt) => ye(dt, O, k + 1)
        ) }) })
      ] }, O);
    }
    const $ = De(i, o);
    return /* @__PURE__ */ h(
      xt,
      {
        selected: $,
        disabled: !i.path,
        onClick: () => i.path && D(i.path),
        "data-testid": `sidebar-subitem-${i.text}`,
        "data-active": $ ? "true" : "false",
        sx: {
          borderRadius: "8px",
          mx: 0.5,
          py: 0.75,
          pl: H,
          ...se($, "action.hover", 32),
          ...pe
        },
        children: [
          i.icon ? /* @__PURE__ */ t(te, { children: i.icon }) : null,
          /* @__PURE__ */ t(
            Se,
            {
              disableTypography: !0,
              primary: /* @__PURE__ */ t(
                Le,
                {
                  text: i.text,
                  fontWeight: bt
                }
              )
            }
          )
        ]
      },
      O
    );
  }, re = (i, _, k, O, H, $) => {
    const le = !H, Y = /* @__PURE__ */ h(
      ue,
      {
        "aria-label": _,
        disabled: le,
        onClick: H,
        "data-testid": ($ == null ? void 0 : $.testId) ?? `sidebar-item-${_}`,
        "data-active": O ? "true" : "false",
        sx: v ? {
          display: "flex",
          flexDirection: "column",
          gap: 0.25,
          width: "100%",
          maxWidth: "100%",
          height: "auto",
          // 8px padding on all sides of the item container.
          p: 1,
          borderRadius: "8px",
          color: O ? C : V,
          bgcolor: O ? m : "transparent",
          "& .MuiSvgIcon-root": {
            fontSize: Rr
          },
          "&:hover": he,
          ...Mt
        } : {
          // Icon-only collapsed rail (collapsible variant):
          // original hover — accent when active, else a subtle
          // tint; no foreground change.
          width: 44,
          height: 44,
          color: O ? C : V,
          bgcolor: O ? m : "transparent",
          borderRadius: O ? "8px" : "50%",
          "&:hover": {
            bgcolor: O ? m : $ != null && $.insideGroup ? "action.hover" : U,
            borderRadius: "8px"
          },
          ...Mt
        },
        children: [
          k,
          v ? /* @__PURE__ */ t(
            Le,
            {
              text: _,
              variant: "caption",
              center: !0,
              fontSize: yr
            }
          ) : null
        ]
      }
    );
    return v ? le ? /* @__PURE__ */ t("span", { children: Y }, i) : /* @__PURE__ */ t(p.Fragment, { children: Y }, i) : /* @__PURE__ */ t(ie, { title: _, placement: "right", arrow: !0, children: le ? /* @__PURE__ */ t("span", { children: Y }) : Y }, i);
  }, Re = (i) => {
    const _ = Ue(i, o), k = De(i, o), O = Et("", i), H = fe(i, O), $ = /* @__PURE__ */ h(
      ue,
      {
        "aria-label": i.text,
        "aria-expanded": H,
        onClick: () => we(O, H),
        "data-testid": `sidebar-item-${i.text}`,
        "data-active": k ? "true" : "false",
        sx: {
          display: "flex",
          flexDirection: "column",
          gap: v ? 0.25 : 0,
          width: v ? "100%" : 44,
          maxWidth: "100%",
          // 8px padding on all sides of the labeled item container.
          ...v ? { p: 1 } : { py: 0.75 },
          borderRadius: "10px",
          color: k ? C : V,
          bgcolor: k ? m : "transparent",
          // rail-labeled: active AND hover share the highlight. collapsible:
          // original behavior — accent only when active; the outer pill
          // supplies the idle-hover tint, so the button stays transparent.
          "&:hover": v ? { bgcolor: m, color: C } : {
            bgcolor: k ? m : "transparent"
          },
          ...Mt
        },
        children: [
          v ? /* @__PURE__ */ t(
            S,
            {
              sx: {
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                "& .MuiSvgIcon-root": {
                  fontSize: Rr
                }
              },
              children: i.icon
            }
          ) : i.icon,
          v ? /* @__PURE__ */ t(
            Le,
            {
              text: i.text,
              variant: "caption",
              center: !0,
              fontSize: yr
            }
          ) : null,
          /* @__PURE__ */ t(Qo, { open: H, size: qo })
        ]
      }
    ), le = v ? $ : /* @__PURE__ */ t(ie, { title: i.text, placement: "right", arrow: !0, children: $ });
    return /* @__PURE__ */ h(
      S,
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
          bgcolor: _ ? U : "transparent",
          ...v ? {} : { "&:hover": { bgcolor: U } }
        },
        children: [
          le,
          H ? Kr(i.subitems, i.icon).map(
            ({ sub: Y, icon: oe }) => re(
              Y.path,
              Y.text,
              oe,
              De(Y, o),
              () => D(Y.path),
              {
                insideGroup: !0,
                testId: `sidebar-subitem-${Y.text}`
              }
            )
          ) : null
        ]
      },
      i.text
    );
  }, Ie = (i) => /* @__PURE__ */ t(
    S,
    {
      sx: {
        width: "100%",
        display: "flex",
        justifyContent: "center"
      },
      children: re(
        i.text,
        i.subtitle ? `${i.text} · ${i.subtitle}` : i.text,
        i.icon,
        De(i, o),
        i.path ? () => D(i.path) : void 0,
        { testId: `sidebar-item-${i.text}` }
      )
    },
    i.text
  ), Oe = (i) => st(i) ? T ? Re(i) : me(i) : T ? Ie(i) : Ze(i), xe = (i) => /* @__PURE__ */ t(
    ae,
    {
      spacing: 0.5,
      sx: {
        width: "100%",
        alignItems: T ? "center" : "stretch"
      },
      children: i.map(Oe)
    }
  ), Ce = T ? I : W, Pe = f ? /* @__PURE__ */ t(
    S,
    {
      "data-testid": "sidebar-header",
      sx: {
        height: wr,
        minHeight: wr,
        flexShrink: 0,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        bgcolor: ve
      },
      children: d || s ? /* @__PURE__ */ t(
        wt,
        {
          logo: d,
          title: T ? void 0 : s,
          appName: s || "App",
          onClick: l,
          color: w ?? We,
          testId: "sidebar-header-brand"
        }
      ) : null
    }
  ) : null, Qe = !f && d ? /* @__PURE__ */ t(
    S,
    {
      sx: {
        display: "flex",
        justifyContent: "center",
        flexShrink: 0,
        pt: 2,
        pb: 1
      },
      children: /* @__PURE__ */ t(
        wt,
        {
          logo: d,
          appName: s || "App",
          onClick: l,
          color: w ?? We,
          testId: "sidebar-header-brand"
        }
      )
    }
  ) : null, ze = v ? 0.5 : T ? 1 : 1.5;
  return /* @__PURE__ */ h(
    S,
    {
      component: "nav",
      "aria-label": "Main sidebar",
      "data-testid": "collapsible-sidebar",
      "data-collapsed": T ? "true" : "false",
      "data-labeled": v ? "true" : "false",
      sx: {
        width: Ce,
        minWidth: Ce,
        height: "100%",
        boxSizing: "border-box",
        bgcolor: Ee,
        display: "flex",
        flexDirection: "column",
        // Lets the sidebar shrink inside a flex-column host so siblings
        // (e.g. an alert card below it) stay within the viewport.
        flex: "1 1 auto",
        minHeight: 0,
        // Snaps to its width; an owner that animates the switch (the
        // wrapper's hover panel) clips it from a container, so the
        // rows never reflow mid-animation.
        overflow: "hidden"
      },
      children: [
        Pe ?? Qe,
        B ? /* @__PURE__ */ t(
          S,
          {
            sx: { flexShrink: 0, px: ze, pt: 1, pb: 1 },
            children: B
          }
        ) : null,
        /* @__PURE__ */ h(
          S,
          {
            sx: {
              flex: "1 1 auto",
              minHeight: 0,
              display: "flex",
              flexDirection: "column",
              overflowY: "auto",
              overflowX: "hidden",
              px: ze,
              pt: z && !f ? `${z}px` : 1,
              pb: 2
            },
            children: [
              xe(e),
              r.length > 0 ? /* @__PURE__ */ h(S, { sx: { mt: "auto", pt: 2 }, children: [
                A ? null : /* @__PURE__ */ t(Ne, { sx: { mb: 1, borderColor: "divider" } }),
                xe(r)
              ] }) : null
            ]
          }
        ),
        A ? /* @__PURE__ */ t(S, { sx: { flexShrink: 0, px: ze, pb: 1.5 }, children: /* @__PURE__ */ t(
          S,
          {
            sx: {
              borderTop: `1px solid ${ke}`,
              pt: 1.5
            },
            children: A
          }
        ) }) : null
      ]
    }
  );
}, Gt = "var(--lumora-content-padding, 0px)", Or = `calc(${Gt} * -1)`, Bi = ({
  children: e,
  flushTop: r = !0,
  sticky: o = !1,
  background: n = "background.paper",
  divider: a = !0,
  inset: d = !0,
  sx: s
}) => /* @__PURE__ */ t(
  S,
  {
    "data-testid": "full-bleed-section",
    sx: [
      {
        mx: Or,
        mt: r ? Or : 0,
        // Space below it, like any other block on the page
        mb: Gt,
        px: d ? Gt : 0,
        bgcolor: n,
        ...a && {
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
    children: e
  }
), en = ({ keys: e }) => /* @__PURE__ */ t(
  S,
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
    children: e.map((r) => /* @__PURE__ */ t("span", { children: r }, r))
  }
);
class N extends Error {
  constructor(r, o, n = null) {
    super(r), this.name = "AuthError", this.code = o, this.originalError = n, this.timestamp = (/* @__PURE__ */ new Date()).toISOString();
  }
}
const M = {
  STORAGE_ACCESS_DENIED: "STORAGE_ACCESS_DENIED",
  TOKEN_NOT_FOUND: "TOKEN_NOT_FOUND",
  TOKEN_INVALID: "TOKEN_INVALID",
  TOKEN_EXPIRED: "TOKEN_EXPIRED",
  LOGOUT_FAILED: "LOGOUT_FAILED",
  UNKNOWN_ERROR: "UNKNOWN_ERROR"
}, G = {
  ACCESS_TOKEN: "lumoraAccessToken",
  REFRESH_TOKEN: "lumoraRefreshToken",
  USER: "lumoraUser"
}, be = {
  ACCESS_TOKEN: "accessToken",
  REFRESH_TOKEN: "refreshToken",
  USER: "user"
}, tn = () => {
  if (!(typeof window > "u" || !window.localStorage))
    try {
      const e = localStorage.getItem(
        be.ACCESS_TOKEN
      ), r = localStorage.getItem(
        be.REFRESH_TOKEN
      ), o = localStorage.getItem(be.USER);
      e && !localStorage.getItem(G.ACCESS_TOKEN) && localStorage.setItem(G.ACCESS_TOKEN, e), r && !localStorage.getItem(G.REFRESH_TOKEN) && localStorage.setItem(
        G.REFRESH_TOKEN,
        r
      ), o && !localStorage.getItem(G.USER) && localStorage.setItem(G.USER, o), (e || r || o) && (localStorage.removeItem(be.ACCESS_TOKEN), localStorage.removeItem(be.REFRESH_TOKEN), localStorage.removeItem(be.USER));
    } catch (e) {
      console.warn("Failed to migrate legacy localStorage keys:", e);
    }
}, Lt = (e) => {
  try {
    if (typeof window > "u")
      return console.warn("localStorage access attempted on server side"), null;
    if (!window.localStorage)
      throw new N(
        "localStorage is not available",
        M.STORAGE_ACCESS_DENIED
      );
    return window.localStorage.getItem(e);
  } catch (r) {
    throw r.name === "QuotaExceededError" ? (console.error("Storage quota exceeded"), new N(
      "Storage quota exceeded. Please clear browser data.",
      M.STORAGE_ACCESS_DENIED,
      r
    )) : r.name === "SecurityError" ? (console.error(
      "localStorage access denied (private browsing or security settings)"
    ), new N(
      "Access to localStorage is denied. Please check browser settings.",
      M.STORAGE_ACCESS_DENIED,
      r
    )) : (console.error(
      "Unexpected error accessing localStorage:",
      r.name
    ), new N(
      "Failed to access storage",
      M.STORAGE_ACCESS_DENIED,
      r
    ));
  }
}, Ft = (e, r) => {
  try {
    if (typeof window > "u")
      return console.warn("localStorage write attempted on server side"), !1;
    if (!window.localStorage)
      throw new N(
        "localStorage is not available",
        M.STORAGE_ACCESS_DENIED
      );
    return window.localStorage.setItem(e, r), !0;
  } catch (o) {
    throw o.name === "QuotaExceededError" ? (console.error("Storage quota exceeded"), new N(
      "Storage quota exceeded. Please clear browser data.",
      M.STORAGE_ACCESS_DENIED,
      o
    )) : o.name === "SecurityError" ? (console.error(
      "localStorage write denied (private browsing or security settings)"
    ), new N(
      "Access to localStorage is denied. Please check browser settings.",
      M.STORAGE_ACCESS_DENIED,
      o
    )) : (console.error(
      "Unexpected error writing to localStorage:",
      o.name
    ), new N(
      "Failed to write to storage",
      M.STORAGE_ACCESS_DENIED,
      o
    ));
  }
}, jr = (e) => {
  try {
    return typeof window > "u" ? (console.warn("localStorage removal attempted on server side"), !1) : window.localStorage ? (window.localStorage.removeItem(e), !0) : (console.warn("localStorage is not available"), !1);
  } catch (r) {
    return r.name !== "SecurityError" && console.warn(`Could not remove localStorage key "${e}"`), !1;
  }
}, lt = () => {
  try {
    tn();
    const e = Lt(G.ACCESS_TOKEN), r = Lt(G.REFRESH_TOKEN), o = Lt(G.USER);
    let n = null;
    if (o)
      try {
        n = JSON.parse(o);
      } catch {
        o && o !== "null" && o !== "undefined" && console.warn(
          "Invalid user data in localStorage, clearing:",
          o.substring(0, 50)
        ), jr(G.USER);
      }
    return {
      accessToken: e,
      refreshToken: r,
      user: n
    };
  } catch (e) {
    throw e instanceof N ? e : new N(
      "Failed to retrieve authentication tokens",
      M.UNKNOWN_ERROR,
      e
    );
  }
}, rn = () => {
  try {
    const { accessToken: e, refreshToken: r } = lt();
    return !(e || r) ? {
      isAuthenticated: !1,
      error: new N(
        "No authentication tokens found",
        M.TOKEN_NOT_FOUND
      )
    } : {
      isAuthenticated: !0,
      error: null
    };
  } catch (e) {
    return console.error("Authentication check failed:", e), {
      isAuthenticated: !1,
      error: e instanceof N ? e : new N(
        "Authentication check failed",
        M.UNKNOWN_ERROR,
        e
      )
    };
  }
}, Xr = (e, r, o = null) => {
  try {
    if (!e && !r)
      throw new N(
        "At least one token must be provided",
        M.TOKEN_INVALID
      );
    return e && Ft(G.ACCESS_TOKEN, e), r && Ft(G.REFRESH_TOKEN, r), o && Ft(G.USER, JSON.stringify(o)), {
      success: !0,
      error: null
    };
  } catch (n) {
    return console.error("Failed to store authentication tokens:", n), {
      success: !1,
      error: n instanceof N ? n : new N(
        "Failed to store tokens",
        M.UNKNOWN_ERROR,
        n
      )
    };
  }
}, ct = () => {
  try {
    return [
      G.ACCESS_TOKEN,
      G.REFRESH_TOKEN,
      G.USER,
      // Also clear legacy keys for complete cleanup
      be.ACCESS_TOKEN,
      be.REFRESH_TOKEN,
      be.USER
    ].map((n) => jr(n)).every((n) => n) || console.warn("Some tokens could not be removed from localStorage"), {
      success: !0,
      error: null
    };
  } catch (e) {
    return console.error("Failed to clear authentication tokens:", e), {
      success: !1,
      error: e instanceof N ? e : new N(
        "Failed to clear tokens",
        M.LOGOUT_FAILED,
        e
      )
    };
  }
}, on = () => {
  try {
    const { user: e } = lt();
    return {
      user: e,
      error: null
    };
  } catch (e) {
    return console.error("Failed to get current user:", e), {
      user: null,
      error: e instanceof N ? e : new N(
        "Failed to retrieve user data",
        M.UNKNOWN_ERROR,
        e
      )
    };
  }
}, Mi = (e) => {
  if (!(e instanceof N))
    return "An unexpected error occurred. Please try again.";
  switch (e.code) {
    case M.STORAGE_ACCESS_DENIED:
      return "Unable to access browser storage. Please check your browser settings and disable private browsing if enabled.";
    case M.TOKEN_NOT_FOUND:
      return "You are not logged in. Please sign in to continue.";
    case M.TOKEN_INVALID:
      return "Your session is invalid. Please sign in again.";
    case M.TOKEN_EXPIRED:
      return "Your session has expired. Please sign in again.";
    case M.LOGOUT_FAILED:
      return "Failed to log out properly. Please clear your browser cache and try again.";
    case M.UNKNOWN_ERROR:
    default:
      return "An unexpected error occurred. Please try again or contact support if the problem persists.";
  }
}, jt = (e, r = "Unknown") => {
  const o = {
    context: r,
    message: e.message,
    code: e instanceof N ? e.code : "UNKNOWN",
    timestamp: e instanceof N ? e.timestamp : (/* @__PURE__ */ new Date()).toISOString(),
    stack: e.stack
  };
  e instanceof N && e.originalError && (o.originalError = {
    name: e.originalError.name,
    message: e.originalError.message
  }), console.warn("[Auth Error]", o);
}, nn = (e) => {
  if (!e)
    throw new Error("API base URL is required to create axios client");
  const r = Er.create({
    baseURL: e,
    headers: {
      "Content-Type": "application/json"
    }
  });
  let o = !1, n = null, a = [];
  const d = (s, l) => {
    a.forEach(({ resolve: f, reject: c }) => {
      s ? c(s) : l && f(l);
    }), a = [];
  };
  return r.interceptors.request.use(
    (s) => {
      const { accessToken: l } = lt();
      return l && s.headers && (s.headers.Authorization = `Bearer ${l}`), s;
    },
    (s) => Promise.reject(s)
  ), r.interceptors.response.use(
    (s) => s,
    async (s) => {
      var m;
      const l = s.config, f = (m = s.response) == null ? void 0 : m.status, c = (l == null ? void 0 : l.url) || "", u = c.includes("/auth/refresh");
      if (f !== 401 || l._retry || u)
        return Promise.reject(s);
      l._retry = !0;
      const { refreshToken: w } = lt();
      if (!w) {
        const x = new Error(
          "No refresh token available for token refresh"
        );
        return jt(x, "AxiosClient - Token Refresh"), ct(), typeof window < "u" && (window.location.href = "/login"), Promise.reject(s);
      }
      if (o && n)
        return new Promise((x, E) => {
          a.push({ resolve: x, reject: E });
        }).then((x) => {
          const {
            accessToken: E,
            refreshToken: g
          } = x;
          if (l.headers && (l.headers.Authorization = `Bearer ${E}`), c.includes("/auth/logout"))
            try {
              if (typeof l.data == "string") {
                const y = JSON.parse(
                  l.data || "{}"
                );
                y.refresh_token = g, l.data = JSON.stringify(y);
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
        }).catch((x) => Promise.reject(x));
      o = !0, n = Er.post(
        `${e}/auth/refresh`,
        {
          refresh_token: w
        }
      );
      try {
        const x = await n, { accessToken: E, refreshToken: g } = x.data;
        if (Xr(E, g, null), d(null, {
          accessToken: E,
          refreshToken: g
        }), l.headers && (l.headers.Authorization = `Bearer ${E}`), c.includes("/auth/logout"))
          try {
            if (typeof l.data == "string") {
              const y = JSON.parse(
                l.data || "{}"
              );
              y.refresh_token = g, l.data = JSON.stringify(y);
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
      } catch (x) {
        return jt(
          x,
          "AxiosClient - Token Refresh Failed"
        ), d(x), ct(), typeof window < "u" && (window.location.href = "/login"), Promise.reject(x);
      } finally {
        o = !1, n = null;
      }
    }
  ), r;
}, Q = {
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
}, ee = {
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
}, Xe = {
  300: "hsl(120, 61%, 77%)",
  400: "hsl(120, 44%, 53%)",
  500: "hsl(120, 59%, 30%)",
  700: "hsl(120, 75%, 16%)",
  800: "hsl(120, 84%, 10%)"
}, Ve = {
  300: "hsl(45, 90%, 65%)",
  400: "hsl(45, 90%, 40%)",
  500: "hsl(45, 90%, 35%)",
  700: "hsl(45, 94%, 20%)",
  800: "hsl(45, 95%, 16%)"
}, Ye = {
  300: "hsl(0, 90%, 65%)",
  400: "hsl(0, 90%, 40%)",
  500: "hsl(0, 90%, 30%)",
  700: "hsl(0, 94%, 18%)",
  800: "hsl(0, 95%, 12%)"
}, Vr = kr(), ne = Vr.typography.pxToRem, an = (e) => {
  const r = e === "dark", o = [...Vr.shadows];
  return o[1] = r ? "hsla(220, 30%, 5%, 0.7) 0px 4px 16px 0px, hsla(220, 25%, 10%, 0.8) 0px 8px 16px -5px" : "hsla(220, 30%, 5%, 0.07) 0px 4px 16px 0px, hsla(220, 25%, 10%, 0.07) 0px 8px 16px -5px", {
    palette: {
      mode: e,
      primary: {
        light: r ? Q[300] : Q[200],
        main: Q[400],
        dark: Q[700],
        contrastText: Q[50]
      },
      info: r ? {
        light: Q[500],
        main: Q[700],
        dark: Q[900],
        contrastText: Q[300]
      } : {
        light: Q[100],
        main: Q[300],
        dark: Q[600],
        contrastText: ee[50]
      },
      warning: r ? { light: Ve[400], main: Ve[500], dark: Ve[700] } : { light: Ve[300], main: Ve[400], dark: Ve[800] },
      error: r ? { light: Ye[400], main: Ye[500], dark: Ye[700] } : { light: Ye[300], main: Ye[400], dark: Ye[800] },
      success: r ? { light: Xe[400], main: Xe[500], dark: Xe[700] } : { light: Xe[300], main: Xe[400], dark: Xe[800] },
      grey: ee,
      divider: r ? Fe(ee[700], 0.6) : Fe(ee[300], 0.4),
      background: r ? { default: ee[900], paper: "hsl(220, 30%, 7%)" } : { default: "hsl(0, 0%, 99%)", paper: "hsl(220, 35%, 97%)" },
      text: r ? { primary: "hsl(0, 0%, 100%)", secondary: ee[400] } : { primary: ee[800], secondary: ee[600] },
      action: r ? {
        hover: Fe(ee[600], 0.2),
        selected: Fe(ee[600], 0.3)
      } : {
        hover: Fe(ee[200], 0.2),
        selected: Fe(ee[200], 0.3)
      }
    },
    typography: {
      fontFamily: "Inter, sans-serif",
      h1: {
        fontSize: ne(48),
        fontWeight: 600,
        lineHeight: 1.2,
        letterSpacing: -0.5
      },
      h2: { fontSize: ne(36), fontWeight: 600, lineHeight: 1.2 },
      h3: { fontSize: ne(30), lineHeight: 1.2 },
      h4: { fontSize: ne(24), fontWeight: 600, lineHeight: 1.5 },
      h5: { fontSize: ne(20), fontWeight: 600 },
      h6: { fontSize: ne(18), fontWeight: 600 },
      subtitle1: { fontSize: ne(18) },
      subtitle2: { fontSize: ne(14), fontWeight: 500 },
      body1: { fontSize: ne(14) },
      body2: { fontSize: ne(14), fontWeight: 400 },
      caption: { fontSize: ne(12), fontWeight: 400 }
    },
    shape: {
      borderRadius: 8
    },
    shadows: o
  };
}, sn = async (e, r) => {
  const { accessToken: o, refreshToken: n } = lt();
  if (o)
    return !0;
  if (n)
    try {
      const a = await e.post("/auth/refresh", {
        refresh_token: n
      });
      if (a.data.success && a.data.accessToken)
        return Xr(
          a.data.accessToken,
          a.data.refreshToken || null,
          null
        ), !0;
    } catch (a) {
      jt(a, "TokenValidator - Refresh Failed");
    }
  return ct(), r ? r() : window.location.href = "/login", !1;
}, vt = ({ size: e = 20 }) => /* @__PURE__ */ h(
  "svg",
  {
    width: e,
    height: e * 30 / 33,
    viewBox: "0 0 33 30",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    "aria-hidden": "true",
    focusable: "false",
    children: [
      /* @__PURE__ */ t(
        "path",
        {
          d: "M21.7931 29.9243V20.5466L11.0774 10.4528V20.5466L21.7931 29.9243Z",
          fill: "#05A393"
        }
      ),
      /* @__PURE__ */ t(
        "path",
        {
          d: "M21.7931 20.1102L21.7931 10.0939L11.0774 0V10.0939L21.7931 20.1102Z",
          fill: "#049586"
        }
      ),
      /* @__PURE__ */ t(
        "path",
        {
          d: "M2.19027e-05 29.9243V20.5466L10.7157 10.4528V20.5466L2.19027e-05 29.9243Z",
          fill: "#09C1AE"
        }
      ),
      /* @__PURE__ */ t(
        "path",
        {
          d: "M22.1555 19.4716V10.0939L32.8712 0V10.0939L22.1555 19.4716Z",
          fill: "#016F63"
        }
      )
    ]
  }
), Je = "#09C1AE", Ht = (e, r) => ({
  position: "relative",
  overflow: "hidden",
  "&::before": {
    content: '""',
    position: "absolute",
    inset: "-50%",
    background: `conic-gradient(from 0deg, rgba(9, 193, 174, 0.25) 0deg 250deg, ${Je} 300deg, #0DD4BF 330deg, rgba(9, 193, 174, 0.25) 360deg)`,
    animation: "nexa-beam 3s linear infinite",
    zIndex: 0
  },
  "&::after": {
    content: '""',
    position: "absolute",
    inset: "2px",
    borderRadius: `${e - 2}px`,
    bgcolor: r,
    zIndex: 1
  },
  "& > *": { position: "relative", zIndex: 2 },
  "@keyframes nexa-beam": { to: { transform: "rotate(360deg)" } },
  "@media (prefers-reduced-motion: reduce)": {
    "&::before": { animation: "none" }
  }
}), Cr = ({
  variant: e,
  onClick: r,
  active: o = !1,
  busy: n = !1,
  shortcutKeys: a,
  accentColor: d = "#01584f",
  rightOffsetPx: s = 0
}) => {
  const l = a ? `Ask Nexa (${a.join("")})` : "Ask Nexa", f = {
    onClick: r,
    "aria-label": "Ask Nexa",
    "aria-pressed": o,
    "data-testid": "assistant-button"
  };
  return e === "sidebar" ? /* @__PURE__ */ h(
    Ke,
    {
      ...f,
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
        borderColor: o ? Je : "rgba(9, 193, 174, 0.45)",
        bgcolor: "rgba(9, 193, 174, 0.08)",
        color: d,
        transition: "border-color 150ms, background-color 150ms",
        "&:hover": { bgcolor: "rgba(9, 193, 174, 0.14)" },
        "&.Mui-focusVisible": {
          outline: `2px solid ${Je}`,
          outlineOffset: 2
        },
        ...n && Ht(8, "background.paper")
      },
      children: [
        /* @__PURE__ */ t(vt, { size: 20 }),
        /* @__PURE__ */ t(
          K,
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
        a && /* @__PURE__ */ t(en, { keys: a })
      ]
    }
  ) : e === "sidebar-icon" ? /* @__PURE__ */ t(ie, { title: l, placement: "right", arrow: !0, children: /* @__PURE__ */ t(
    ue,
    {
      ...f,
      "data-variant": "sidebar-icon",
      sx: {
        width: 44,
        height: 44,
        borderRadius: "8px",
        border: "1px solid",
        borderColor: o ? Je : "rgba(9, 193, 174, 0.45)",
        bgcolor: "rgba(9, 193, 174, 0.08)",
        "&:hover": { bgcolor: "rgba(9, 193, 174, 0.14)" },
        ...n && Ht(8, "background.paper")
      },
      children: /* @__PURE__ */ t(vt, { size: 20 })
    }
  ) }) : /* @__PURE__ */ t(ie, { title: l, placement: "left", children: /* @__PURE__ */ t(
    ue,
    {
      ...f,
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
        outline: o ? `2px solid ${Je}` : "none",
        outlineOffset: 2,
        "&:hover": { bgcolor: "background.paper", boxShadow: 6 },
        "&.Mui-focusVisible": { outline: `2px solid ${Je}` },
        ...n && Ht(16, "background.paper")
      },
      children: /* @__PURE__ */ t(S, { sx: { display: "flex", alignItems: "center" }, children: /* @__PURE__ */ t(vt, { size: 26 }) })
    }
  ) });
}, St = ({
  title: e = "",
  message: r = "",
  buttonText: o = "",
  onButtonClick: n,
  show: a = !0
}) => a ? /* @__PURE__ */ t(Ao, { variant: "outlined", sx: { m: 1.5, flexShrink: 0 }, children: /* @__PURE__ */ h(Do, { children: [
  /* @__PURE__ */ t(No, { fontSize: "small" }),
  /* @__PURE__ */ t(K, { gutterBottom: !0, sx: { fontWeight: 600 }, children: e }),
  /* @__PURE__ */ t(
    K,
    {
      variant: "body2",
      sx: { mb: 2, color: "text.secondary" },
      children: r
    }
  ),
  /* @__PURE__ */ t(
    zr,
    {
      variant: "contained",
      size: "small",
      fullWidth: !0,
      onClick: n,
      children: o
    }
  )
] }) }) : null, it = 24, ln = 720, cn = 1140, dn = 1250, un = ({
  open: e,
  children: r,
  variant: o,
  position: n,
  width: a,
  sidebarWidthPx: d,
  bottomOffsetPx: s,
  fullScreen: l,
  fullScreenBottom: f = "0px",
  onClose: c
}) => {
  p.useEffect(() => {
    if (!e || !c)
      return;
    const E = (g) => {
      g.key === "Escape" && c();
    };
    return window.addEventListener("keydown", E), () => window.removeEventListener("keydown", E);
  }, [e, c]);
  const u = o === "docked", w = it + s;
  let m;
  l ? m = {
    top: 0,
    left: 0,
    right: 0,
    bottom: f,
    borderRadius: 0
  } : u ? m = {
    top: 0,
    right: 0,
    bottom: 0,
    width: a,
    maxWidth: "100vw",
    borderRadius: 0,
    borderWidth: "0 0 0 1px"
  } : m = {
    bottom: w,
    ...n === "left" ? { left: d + it } : { right: it },
    width: a,
    maxWidth: `calc(100vw - ${it * 2}px)`,
    height: `min(${ln}px, calc(100vh - ${w + it}px))`,
    borderRadius: "12px"
  };
  const x = /* @__PURE__ */ t(
    Vt,
    {
      role: u ? "complementary" : "dialog",
      "aria-label": "Nexa chat",
      "data-testid": "chat-panel",
      "data-variant": o,
      elevation: 8,
      sx: {
        position: "fixed",
        zIndex: u ? cn : dn,
        display: "flex",
        flexDirection: "column",
        overflow: "hidden",
        border: "1px solid",
        borderColor: "divider",
        ...m
      },
      children: r
    }
  );
  return u ? /* @__PURE__ */ t(ko, { direction: "left", in: e, mountOnEnter: !0, children: x }) : /* @__PURE__ */ t(
    Wo,
    {
      in: e,
      mountOnEnter: !0,
      style: {
        transformOrigin: n === "left" ? "bottom left" : "bottom right"
      },
      children: x
    }
  );
}, hn = 180, _r = 250, fn = "#01584F", pn = ({
  text: e,
  testId: r
}) => {
  const o = p.useRef(null), [n, a] = p.useState(!1), d = p.useCallback(() => {
    const s = o.current;
    s && a(s.scrollWidth > s.clientWidth + 0.5);
  }, []);
  return p.useLayoutEffect(() => {
    d();
  }, [d, e]), p.useEffect(() => {
    const s = o.current;
    if (!s)
      return;
    const l = new ResizeObserver(() => d());
    return l.observe(s), () => l.disconnect();
  }, [d]), /* @__PURE__ */ t(
    ie,
    {
      title: e,
      placement: "right",
      arrow: !0,
      enterDelay: 400,
      disableHoverListener: !n,
      disableFocusListener: !n,
      disableTouchListener: !n,
      children: /* @__PURE__ */ t(
        K,
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
          children: e
        }
      )
    }
  );
}, Yr = (e, r, o, n) => {
  const a = e ? 48 : 44, d = e ? "text.secondary" : r, s = e ? fn : r;
  return { activeBg: s, sx: n ? {
    width: "100%",
    maxWidth: "100%",
    minWidth: a,
    height: "auto",
    minHeight: a,
    flexDirection: "column",
    py: 0.5,
    // Horizontal padding so labels (esp. active fill) do not touch the box edges
    px: 1,
    borderRadius: "4px",
    color: o ? "#ffffff" : d,
    backgroundColor: o ? s : "transparent",
    "&:hover": {
      backgroundColor: o ? s : "action.hover",
      borderRadius: "4px",
      color: o ? "#ffffff" : d
    }
  } : {
    width: a,
    height: a,
    color: o ? "#ffffff" : d,
    backgroundColor: o ? s : "transparent",
    borderRadius: o ? "4px" : "50%",
    "&:hover": {
      backgroundColor: o ? s : "action.hover",
      borderRadius: "4px"
    }
  } };
}, qr = ({ link: e }) => /* @__PURE__ */ h(ae, { alignItems: "center", spacing: 1, sx: { width: "100%" }, children: [
  /* @__PURE__ */ t(
    S,
    {
      sx: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "inherit",
        "& .MuiSvgIcon-root": { color: "inherit" }
      },
      children: e.icon
    }
  ),
  /* @__PURE__ */ t(
    pn,
    {
      text: e.text,
      testId: `rail-item-caption-${e.text}`
    }
  )
] }), Jr = (e, r, o) => o ? e : /* @__PURE__ */ t(ie, { title: r, placement: "right", arrow: !0, children: e }), mn = ({
  link: e,
  activePath: r,
  onLinkClick: o,
  accentColor: n,
  isSecondary: a,
  surfaceBackgroundColor: d,
  railShowTitles: s
}) => {
  const l = Rt(), [f, c] = p.useState(null), [u, w] = p.useState(!1), m = p.useRef(
    null
  ), x = p.useRef(null), E = p.useRef(null), g = p.useRef(!1), y = p.useRef(!1), T = p.useId(), W = () => {
    m.current && (clearTimeout(m.current), m.current = null);
  }, I = () => {
    W(), m.current = setTimeout(() => {
      w(!1), m.current = null;
    }, hn);
  }, v = () => {
    W(), w(!0);
  };
  p.useEffect(() => {
    if (!u)
      return;
    const b = (L) => {
      var C;
      L.key === "Escape" && (w(!1), (C = E.current) == null || C.focus());
    };
    return document.addEventListener("keydown", b), () => document.removeEventListener("keydown", b);
  }, [u]), p.useEffect(() => {
    if (!u || !y.current)
      return;
    const b = globalThis.requestAnimationFrame(() => {
      var C;
      const L = (C = x.current) == null ? void 0 : C.querySelector(
        '[role="menuitem"]'
      );
      L == null || L.focus(), y.current = !1;
    });
    return () => cancelAnimationFrame(b);
  }, [u]);
  const z = Ue(e, r), { activeBg: B, sx: A } = Yr(
    a,
    n,
    z,
    s
  ), X = /* @__PURE__ */ t(
    ue,
    {
      ref: E,
      component: e.path ? "a" : "button",
      href: e.path || void 0,
      "aria-label": e.text,
      onFocus: () => {
        g.current || v();
      },
      onBlur: (b) => {
        var C;
        const L = b.relatedTarget;
        L && ((C = x.current) != null && C.contains(L)) || I();
      },
      onKeyDown: (b) => {
        b.key === "ArrowDown" && (b.preventDefault(), y.current = !0, v());
      },
      onClick: (b) => {
        b.preventDefault(), b.stopPropagation(), e.path && (o == null || o(e.path));
      },
      "aria-haspopup": "menu",
      "aria-expanded": u,
      "aria-controls": u ? T : void 0,
      "data-testid": `rail-submenu-trigger-${e.text}`,
      sx: A,
      children: s ? /* @__PURE__ */ t(qr, { link: e }) : e.icon
    }
  );
  return /* @__PURE__ */ h(
    S,
    {
      sx: {
        width: "100%",
        display: "flex",
        justifyContent: "center"
      },
      children: [
        /* @__PURE__ */ t(
          S,
          {
            ref: c,
            "data-testid": `rail-submenu-anchor-${e.text}`,
            sx: { display: "inline-flex", maxWidth: "100%" },
            onMouseEnter: () => {
              g.current = !0, v();
            },
            onMouseLeave: () => {
              g.current = !1, I();
            },
            children: Jr(X, e.text, s)
          }
        ),
        /* @__PURE__ */ t(
          Bo,
          {
            open: u && !!f,
            anchorEl: f,
            placement: "right-start",
            modifiers: [{ name: "offset", options: { offset: [8, 0] } }],
            sx: { zIndex: (b) => b.zIndex.modal },
            children: /* @__PURE__ */ t(
              Vt,
              {
                ref: x,
                elevation: 0,
                onMouseEnter: W,
                onMouseLeave: I,
                "data-testid": `rail-submenu-panel-${e.text}`,
                sx: {
                  bgcolor: d,
                  backgroundImage: "none",
                  borderRadius: "4px",
                  border: "1px solid",
                  borderColor: "divider",
                  boxShadow: l.shadows[8],
                  maxWidth: _r,
                  minWidth: 0,
                  py: 0.5,
                  boxSizing: "border-box"
                },
                children: /* @__PURE__ */ t(
                  Br,
                  {
                    id: T,
                    dense: !0,
                    autoFocus: !1,
                    role: "menu",
                    sx: {
                      bgcolor: "transparent",
                      py: 0,
                      maxWidth: _r
                    },
                    children: j(e.subitems, e.text, 0)
                  }
                )
              }
            )
          }
        )
      ]
    }
  );
  function j(b, L, C) {
    return b.flatMap((F) => {
      const he = Et(L, F);
      return st(F) ? [
        /* @__PURE__ */ t(
          zo,
          {
            disableSticky: !0,
            title: F.text,
            sx: {
              bgcolor: "transparent",
              lineHeight: "28px",
              pl: 2 + C * 1.5,
              fontSize: "0.7rem",
              letterSpacing: "0.06em",
              textTransform: "uppercase",
              color: "text.secondary",
              overflow: "hidden",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap"
            },
            children: F.text
          },
          he
        ),
        ...j(F.subitems, he, C + 1)
      ] : [
        /* @__PURE__ */ h(
          He,
          {
            role: "menuitem",
            title: F.text,
            disabled: !F.path,
            selected: De(F, r),
            onClick: (U) => {
              U.preventDefault(), F.path && (o == null || o(F.path)), w(!1);
            },
            sx: {
              borderRadius: "4px",
              mx: 0.5,
              my: 0.125,
              pl: 2 + C * 1.5,
              maxWidth: "100%",
              overflow: "hidden",
              color: a ? "text.secondary" : n,
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
                bgcolor: B,
                color: "#ffffff",
                "&:hover": {
                  bgcolor: B
                }
              },
              "&.Mui-focusVisible": {
                bgcolor: "action.focus"
              }
            },
            children: [
              F.icon ? /* @__PURE__ */ t(te, { children: F.icon }) : null,
              /* @__PURE__ */ t(
                Se,
                {
                  primary: F.text,
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
}, xn = ({
  link: e,
  activePath: r,
  onLinkClick: o,
  accentColor: n,
  isSecondary: a,
  railShowTitles: d
}) => {
  const s = !!(e.path && r === e.path), { sx: l } = Yr(
    a,
    n,
    s,
    d
  );
  return Jr(
    /* @__PURE__ */ t(
      ue,
      {
        component: e.path ? "a" : "button",
        href: e.path || void 0,
        "aria-label": e.text,
        onClick: (f) => {
          f.preventDefault(), f.stopPropagation(), e.path && (o == null || o(e.path));
        },
        disabled: !e.path,
        sx: l,
        children: d ? /* @__PURE__ */ t(qr, { link: e }) : e.icon
      }
    ),
    e.text,
    d
  );
}, gn = () => /* @__PURE__ */ t(
  S,
  {
    sx: {
      width: "100%",
      display: "flex",
      justifyContent: "center"
    },
    children: /* @__PURE__ */ t(Ne, { sx: { width: "60%", borderColor: "divider" } })
  }
), bn = () => /* @__PURE__ */ t(
  S,
  {
    sx: {
      width: "100%",
      my: 2,
      display: "flex",
      justifyContent: "center"
    },
    children: /* @__PURE__ */ t(Ne, { sx: { width: "60%", borderColor: "divider" } })
  }
), Tr = (e, r) => e.map((o, n) => /* @__PURE__ */ h(p.Fragment, { children: [
  r(o, n),
  n < e.length - 1 ? /* @__PURE__ */ t(gn, {}) : null
] }, n)), Sn = ({
  mainLinks: e,
  secondaryLinks: r = [],
  activePath: o,
  onLinkClick: n,
  accentColor: a = "#01584f",
  surfaceBackgroundColor: d,
  railShowTitles: s = !1
}) => {
  const l = (c, u) => st(c) ? /* @__PURE__ */ t(
    mn,
    {
      link: c,
      activePath: o,
      onLinkClick: n,
      accentColor: a,
      isSecondary: u,
      surfaceBackgroundColor: d,
      railShowTitles: s
    }
  ) : /* @__PURE__ */ t(
    xn,
    {
      link: c,
      activePath: o,
      onLinkClick: n,
      accentColor: a,
      isSecondary: u,
      railShowTitles: s
    }
  ), f = s ? 1.25 : 1;
  return /* @__PURE__ */ h(
    ae,
    {
      sx: {
        flexGrow: 1,
        width: "100%",
        boxSizing: "border-box",
        justifyContent: "flex-start",
        alignItems: "center",
        pt: 2,
        gap: f
      },
      children: [
        Tr(e, (c) => l(c, !1)),
        r.length > 0 ? /* @__PURE__ */ h($e, { children: [
          /* @__PURE__ */ t(bn, {}),
          /* @__PURE__ */ t(S, { sx: { mt: "auto", pb: 2 }, children: /* @__PURE__ */ t(ae, { gap: f, alignItems: "center", children: Tr(
            r,
            (c) => l(c, !0)
          ) }) })
        ] }) : null
      ]
    }
  );
}, En = (e) => e ? Gr(e) : "USER", vn = (e) => e.split(/\s+/).filter(Boolean).slice(0, 2).map((r) => r.charAt(0).toUpperCase()).join(""), Ar = {
  overflow: "hidden",
  textOverflow: "ellipsis",
  whiteSpace: "nowrap",
  maxWidth: "100%"
}, Xt = ({ count: e }) => e ? /* @__PURE__ */ t(
  S,
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
    children: e > 99 ? "99+" : e
  }
) : null, Yt = ({ name: e, avatar: r, color: o, size: n = 36 }) => /* @__PURE__ */ t(
  Lo,
  {
    src: r,
    alt: e,
    sx: {
      width: n,
      height: n,
      flexShrink: 0,
      fontSize: n * 0.36,
      fontWeight: 600,
      bgcolor: o,
      color: "#ffffff"
    },
    children: vn(e)
  }
), Zr = ({ name: e, role: r, avatar: o, avatarColor: n, showText: a }) => /* @__PURE__ */ h($e, { children: [
  /* @__PURE__ */ t(Yt, { name: e, avatar: o, color: n }),
  a && /* @__PURE__ */ h(
    S,
    {
      sx: {
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        minWidth: 0,
        flexGrow: 1
      },
      children: [
        /* @__PURE__ */ t(
          K,
          {
            variant: "body2",
            sx: { ...Ar, fontWeight: 600, color: "inherit" },
            children: e
          }
        ),
        /* @__PURE__ */ t(
          K,
          {
            variant: "caption",
            sx: { ...Ar, opacity: 0.8, color: "inherit" },
            children: En(r)
          }
        )
      ]
    }
  )
] }), Dr = {
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
}, Qr = ({
  anchorEl: e,
  onClose: r,
  placement: o,
  width: n,
  avatarColor: a,
  showNotifications: d,
  notificationCount: s,
  onNotificationsClick: l,
  userName: f = "User",
  userRole: c,
  userAvatar: u,
  menuItems: w = [],
  showSettings: m,
  onSettingsClick: x,
  showThemeToggler: E,
  theme: g,
  onThemeToggle: y,
  onLogout: T
}) => {
  const W = (I) => () => {
    r(), I == null || I();
  };
  return /* @__PURE__ */ h(
    Fo,
    {
      anchorEl: e,
      open: !!e,
      onClose: r,
      anchorOrigin: Dr[o].anchor,
      transformOrigin: Dr[o].transform,
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
        /* @__PURE__ */ t(
          ae,
          {
            direction: "row",
            spacing: 1.25,
            sx: { px: 1.5, py: 1, alignItems: "center" },
            children: /* @__PURE__ */ t(
              Zr,
              {
                name: f,
                role: c,
                avatar: u,
                avatarColor: a,
                showText: !0
              }
            )
          }
        ),
        /* @__PURE__ */ t(Ne, {}),
        d && /* @__PURE__ */ h(He, { onClick: W(l), children: [
          /* @__PURE__ */ t(te, { children: /* @__PURE__ */ t(Hr, { fontSize: "small" }) }),
          /* @__PURE__ */ t(Se, { children: "Notifications" }),
          /* @__PURE__ */ t(Xt, { count: s })
        ] }),
        w.map((I) => /* @__PURE__ */ h(He, { onClick: W(I.onClick), children: [
          I.icon && /* @__PURE__ */ t(te, { children: I.icon }),
          /* @__PURE__ */ t(Se, { inset: !I.icon, children: I.label }),
          /* @__PURE__ */ t(Xt, { count: I.badge })
        ] }, I.key)),
        m && /* @__PURE__ */ h(He, { onClick: W(x), children: [
          /* @__PURE__ */ t(te, { children: /* @__PURE__ */ t(Mo, { fontSize: "small" }) }),
          /* @__PURE__ */ t(Se, { children: "Settings" })
        ] }),
        E && [
          /* @__PURE__ */ t(Ne, {}, "theme-divider"),
          /* @__PURE__ */ h(S, { sx: { px: 1.5, py: 1 }, children: [
            /* @__PURE__ */ t(
              K,
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
            /* @__PURE__ */ h(
              Ho,
              {
                exclusive: !0,
                fullWidth: !0,
                size: "small",
                "aria-label": "Theme",
                value: g,
                onChange: (I, v) => v && v !== g && (y == null ? void 0 : y()),
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
                  /* @__PURE__ */ t(vr, { value: "light", children: "Light" }),
                  /* @__PURE__ */ t(vr, { value: "dark", children: "Dark" })
                ]
              }
            )
          ] }, "theme")
        ],
        /* @__PURE__ */ t(Ne, {}),
        /* @__PURE__ */ h(
          He,
          {
            onClick: W(T),
            sx: {
              color: g === "dark" ? "hsl(0, 90%, 65%)" : "error.main"
            },
            children: [
              /* @__PURE__ */ t(te, { sx: { color: "inherit" }, children: /* @__PURE__ */ t(Fr, { fontSize: "small" }) }),
              /* @__PURE__ */ t(Se, { children: "Log out" })
            ]
          }
        )
      ]
    }
  );
}, eo = 64, wn = 2, at = ({
  label: e,
  icon: r,
  onClick: o,
  active: n,
  color: a,
  activeColor: d,
  activeBackground: s,
  ariaLabel: l,
  haspopup: f,
  isPage: c = !1,
  testId: u
}) => /* @__PURE__ */ h(
  Ke,
  {
    onClick: o,
    "aria-label": l ?? e,
    "aria-haspopup": f,
    "aria-expanded": f ? n : void 0,
    "aria-current": c && n ? "page" : void 0,
    "data-testid": u,
    sx: {
      flex: "1 1 0",
      minWidth: 0,
      height: "100%",
      flexDirection: "column",
      gap: 0.25,
      color: n ? d : a,
      "&.Mui-focusVisible": {
        outline: "2px solid",
        outlineColor: d,
        outlineOffset: -4
      }
    },
    children: [
      /* @__PURE__ */ t(
        S,
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
      /* @__PURE__ */ t(
        K,
        {
          component: "span",
          sx: {
            fontSize: 11,
            fontWeight: n ? 600 : 500,
            lineHeight: 1.2,
            color: "inherit"
          },
          children: e
        }
      )
    ]
  }
), yn = ({
  onMenuClick: e,
  menuOpen: r,
  onSearchClick: o,
  searchOpen: n,
  showAssistant: a,
  onAssistantClick: d,
  assistantActive: s,
  showProfile: l,
  background: f,
  color: c,
  activeColor: u,
  activeBackground: w,
  pinnedLinks: m = [],
  activePath: x,
  onLinkClick: E,
  ...g
}) => {
  const y = m.filter((A) => A.path).slice(0, wn), [T, W] = p.useState(
    null
  ), { userName: I = "User", userAvatar: v, avatarColor: z } = g, B = { color: c, activeColor: u, activeBackground: w };
  return /* @__PURE__ */ h(
    Vt,
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
        height: `calc(${eo}px + env(safe-area-inset-bottom, 0px))`,
        pb: "env(safe-area-inset-bottom, 0px)",
        bgcolor: f,
        borderTop: "1px solid",
        borderColor: "divider"
      },
      children: [
        e && /* @__PURE__ */ t(
          at,
          {
            label: "Menu",
            icon: /* @__PURE__ */ t(Mr, {}),
            onClick: e,
            active: r,
            haspopup: "dialog",
            testId: "mobile-nav-menu",
            ...B
          }
        ),
        y.map((A) => /* @__PURE__ */ t(
          at,
          {
            label: A.text,
            icon: A.icon,
            onClick: () => E == null ? void 0 : E(A.path),
            active: Ue(A, x),
            isPage: !0,
            testId: `mobile-nav-link-${A.text}`,
            ...B
          },
          A.path
        )),
        a && /* @__PURE__ */ t(
          at,
          {
            label: "Nexa",
            ariaLabel: "Ask Nexa",
            icon: /* @__PURE__ */ t(
              S,
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
                children: /* @__PURE__ */ t(vt, { size: 18 })
              }
            ),
            onClick: d,
            active: s,
            testId: "mobile-nav-nexa",
            ...B
          }
        ),
        o && /* @__PURE__ */ t(
          at,
          {
            label: "Search",
            icon: /* @__PURE__ */ t(Lr, {}),
            onClick: o,
            active: n,
            haspopup: "dialog",
            testId: "mobile-nav-search",
            ...B
          }
        ),
        l && /* @__PURE__ */ h($e, { children: [
          /* @__PURE__ */ t(
            at,
            {
              label: "Account",
              ariaLabel: `Account menu for ${I}`,
              icon: /* @__PURE__ */ t(
                Yt,
                {
                  name: I,
                  avatar: v,
                  color: z,
                  size: 26
                }
              ),
              onClick: (A) => W(A.currentTarget),
              active: !!T,
              haspopup: "menu",
              testId: "mobile-nav-account",
              ...B
            }
          ),
          /* @__PURE__ */ t(
            Qr,
            {
              anchorEl: T,
              onClose: () => W(null),
              placement: "above-end",
              width: 280,
              ...g
            }
          )
        ] })
      ]
    }
  );
}, Rn = ({
  open: e,
  onClose: r,
  search: o
}) => /* @__PURE__ */ t(
  Uo,
  {
    anchor: "top",
    open: e,
    onClose: r,
    SlideProps: {
      onEntered: (n) => {
        var a;
        return (a = n.querySelector(
          'input, textarea, [contenteditable="true"]'
        )) == null ? void 0 : a.focus();
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
    children: /* @__PURE__ */ h(
      ae,
      {
        direction: "row",
        spacing: 1,
        "data-testid": "mobile-search-sheet",
        sx: { alignItems: "center" },
        children: [
          /* @__PURE__ */ t(S, { sx: { flex: "1 1 auto", minWidth: 0 }, children: o }),
          /* @__PURE__ */ t(
            zr,
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
), In = ({
  height: e,
  onMenuClick: r,
  appName: o,
  logo: n,
  onBrandClick: a,
  background: d,
  color: s,
  brandColor: l = s,
  endContent: f
}) => /* @__PURE__ */ t(
  $o,
  {
    position: "fixed",
    elevation: 0,
    sx: {
      height: e,
      background: d,
      color: s,
      borderBottom: "1px solid",
      borderColor: "divider"
    },
    children: /* @__PURE__ */ h(Ko, { sx: { minHeight: `${e}px !important`, gap: 1, px: 1 }, children: [
      r && /* @__PURE__ */ t(
        ue,
        {
          "aria-label": "Open navigation menu",
          onClick: r,
          sx: { color: s },
          children: /* @__PURE__ */ t(Mr, {})
        }
      ),
      /* @__PURE__ */ t(
        wt,
        {
          title: o,
          appName: o,
          logo: n,
          onClick: a,
          color: l,
          testId: "mobile-brand"
        }
      ),
      f ? /* @__PURE__ */ t(S, { sx: { ml: "auto", display: "flex", alignItems: "center" }, children: f }) : null
    ] })
  }
), qt = ({
  count: e,
  onClick: r,
  color: o,
  hoverColor: n,
  tooltipPlacement: a,
  testId: d
}) => {
  const s = e ? `Notifications, ${e} unread` : "Notifications";
  return /* @__PURE__ */ t(ie, { title: s, placement: a, arrow: !0, children: /* @__PURE__ */ t(
    ue,
    {
      onClick: r,
      "aria-label": s,
      "data-testid": d,
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
      children: /* @__PURE__ */ t(
        Ur,
        {
          color: "error",
          badgeContent: e,
          invisible: e === 0,
          max: 99,
          sx: {
            "& .MuiBadge-badge": {
              fontSize: 10,
              height: 16,
              minWidth: 16,
              px: 0.5
            }
          },
          children: /* @__PURE__ */ t(Hr, {})
        }
      )
    }
  ) });
}, to = {
  "&:focus, &:focus-visible": { outline: "none" }
}, On = {
  bgcolor: "background.paper",
  border: "1px solid",
  borderColor: "divider",
  borderRadius: "12px",
  boxShadow: "0 8px 24px rgba(0, 0, 0, 0.12)",
  overflow: "hidden",
  display: "flex",
  flexDirection: "column"
}, Cn = ({ mode: e, onToggle: r, accentColor: o, tint: n }) => {
  const a = p.useRef(null), d = p.useRef(null), s = (c) => {
    var u;
    c !== e && (r == null || r()), (u = (c === "light" ? a : d).current) == null || u.focus();
  }, l = (c) => {
    if (!(c.key === "Tab" || c.key === "Escape"))
      switch (c.stopPropagation(), c.key) {
        case "ArrowLeft":
        case "ArrowRight":
        case "ArrowUp":
        case "ArrowDown":
          c.preventDefault(), s(e === "light" ? "dark" : "light");
          break;
        case "Home":
          c.preventDefault(), s("light");
          break;
        case "End":
          c.preventDefault(), s("dark");
          break;
      }
  }, f = (c, u, w, m) => {
    const x = e === c;
    return /* @__PURE__ */ t(
      Ke,
      {
        ref: m,
        role: "radio",
        "aria-checked": x,
        "aria-label": u,
        tabIndex: x ? 0 : -1,
        onClick: () => s(c),
        "data-testid": `theme-segment-${c}`,
        sx: {
          width: 36,
          height: 26,
          borderRadius: "999px",
          color: x ? o : "text.secondary",
          bgcolor: x ? n : "transparent",
          transition: "background-color 150ms ease, color 150ms ease",
          "&.Mui-focusVisible": {
            boxShadow: `0 0 0 2px ${Fe(o, 0.6)}`
          },
          ...to
        },
        children: /* @__PURE__ */ t(w, { sx: { fontSize: 18 } })
      }
    );
  };
  return /* @__PURE__ */ h(
    ae,
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
        f("light", "Light", Go, a),
        f("dark", "Dark", Po, d)
      ]
    }
  );
}, _n = ({
  open: e,
  anchorEl: r,
  onClose: o,
  width: n,
  renderAvatar: a,
  userName: d,
  userEmail: s,
  roleLabel: l,
  accentColor: f,
  tint: c,
  showThemeToggler: u,
  theme: w,
  onThemeToggle: m,
  onProfileClick: x,
  onLinkClick: E,
  menuItems: g = [],
  onLogout: y
}) => {
  const W = Rt().palette.mode === "dark", I = p.useRef(null), [v, z] = p.useState(null);
  p.useEffect(() => {
    if (!v || typeof ResizeObserver > "u")
      return;
    const b = new ResizeObserver(() => {
      var L;
      (L = I.current) == null || L.updatePosition();
    });
    return b.observe(v), () => b.disconnect();
  }, [v]);
  const B = (b) => {
    o(), b == null || b();
  }, A = (b) => {
    o(), b.onClick ? b.onClick() : b.path && (E == null || E(b.path));
  }, X = { borderRadius: "8px", py: 1, gap: 0.5 }, j = /* @__PURE__ */ h(ae, { direction: "row", sx: { alignItems: "center", gap: 1.5, p: 2 }, children: [
    a(44),
    /* @__PURE__ */ h(S, { sx: { minWidth: 0, flex: 1 }, children: [
      /* @__PURE__ */ t(K, { noWrap: !0, sx: { fontWeight: 600 }, children: d }),
      s ? /* @__PURE__ */ t(
        K,
        {
          noWrap: !0,
          variant: "body2",
          "data-testid": "account-menu-email",
          sx: { color: "text.secondary" },
          children: s
        }
      ) : null,
      l ? /* @__PURE__ */ t(
        K,
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
      x ? /* @__PURE__ */ t(
        K,
        {
          noWrap: !0,
          variant: "caption",
          "data-hint": !0,
          "data-testid": "account-menu-view-profile",
          sx: {
            letterSpacing: "0.02em",
            fontWeight: 600,
            color: f,
            textDecoration: "underline",
            textUnderlineOffset: "2px"
          },
          children: "View profile"
        }
      ) : null
    ] })
  ] });
  return /* @__PURE__ */ t(
    $r,
    {
      open: e,
      anchorEl: r,
      onClose: o,
      action: I,
      anchorOrigin: { vertical: "top", horizontal: "left" },
      transformOrigin: { vertical: "bottom", horizontal: "left" },
      slotProps: {
        paper: {
          ref: z,
          sx: {
            // Transparent paper: the card draws its own chrome.
            bgcolor: "transparent",
            backgroundImage: "none",
            boxShadow: "none",
            border: "none",
            borderRadius: 0,
            overflow: "visible",
            mt: -1,
            maxWidth: "calc(100vw - 32px)"
          }
        }
      },
      children: /* @__PURE__ */ h(
        S,
        {
          "data-testid": "account-menu",
          sx: { ...On, width: n, minWidth: n },
          children: [
            x ? /* @__PURE__ */ t(
              Ke,
              {
                onClick: () => B(x),
                "data-testid": "account-menu-header",
                sx: {
                  display: "block",
                  width: "100%",
                  textAlign: "left",
                  transition: "background-color 150ms ease",
                  "& [data-hint]": { display: "none" },
                  "&:hover, &.Mui-focusVisible": {
                    bgcolor: c,
                    "& [data-hint]": { display: "block" },
                    "& [data-role]": { display: "none" }
                  },
                  ...to
                },
                children: j
              }
            ) : /* @__PURE__ */ t(S, { "data-testid": "account-menu-header", children: j }),
            /* @__PURE__ */ t(Ne, {}),
            u ? /* @__PURE__ */ h(
              S,
              {
                "data-testid": "menu-item-theme",
                sx: {
                  ...X,
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
                  /* @__PURE__ */ t(te, { children: /* @__PURE__ */ t(jo, { fontSize: "small" }) }),
                  /* @__PURE__ */ t(K, { sx: { flex: 1 }, children: "Theme" }),
                  /* @__PURE__ */ t(
                    Cn,
                    {
                      mode: w,
                      onToggle: m,
                      accentColor: f,
                      tint: c
                    }
                  )
                ]
              }
            ) : null,
            /* @__PURE__ */ h(
              Br,
              {
                autoFocusItem: e,
                sx: { px: 1, pt: u ? 0 : 0.5, pb: 0.5 },
                children: [
                  g.map((b) => /* @__PURE__ */ h(
                    He,
                    {
                      onClick: () => A(b),
                      "data-testid": `menu-item-${b.key}`,
                      sx: X,
                      children: [
                        /* @__PURE__ */ t(te, { children: b.icon }),
                        /* @__PURE__ */ t(K, { sx: { flex: 1 }, children: b.label }),
                        /* @__PURE__ */ t(Xt, { count: b.badge })
                      ]
                    },
                    b.key
                  )),
                  y ? /* @__PURE__ */ t(Ne, { component: "li", sx: { my: 0.5 } }) : null,
                  y ? /* @__PURE__ */ h(
                    He,
                    {
                      onClick: () => B(y),
                      "data-testid": "menu-item-logout",
                      sx: {
                        ...X,
                        color: W ? "error.light" : "error.main"
                      },
                      children: [
                        /* @__PURE__ */ t(te, { sx: { color: "inherit" }, children: /* @__PURE__ */ t(Fr, { fontSize: "small" }) }),
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
    }
  );
}, Tn = {
  "&:focus, &:focus-visible": { outline: "none" }
}, An = ({
  mainLinks: e,
  secondaryLinks: r = [],
  activePath: o,
  onLinkClick: n,
  logo: a,
  title: d,
  onBrandClick: s,
  brandColor: l,
  headerBackgroundColor: f,
  headerForegroundColor: c,
  activeAccentColor: u = "#01584f",
  groupAccentColor: w,
  activeForegroundColor: m,
  foregroundColor: x,
  surfaceBackgroundColor: E,
  collapsed: g,
  expandedWidth: y,
  collapsedWidth: T,
  topContent: W,
  color: I,
  hoverColor: v,
  avatarColor: z,
  showProfile: B = !0,
  userName: A = "User",
  userEmail: X,
  userRole: j,
  userAvatar: b,
  showNotifications: L = !0,
  notificationCount: C = 0,
  onNotificationsClick: F,
  whatsNewCount: he = 0,
  onProfileClick: U,
  menuItems: Ee,
  onLogout: V,
  theme: ve = "light",
  showThemeToggler: We = !0,
  onThemeToggle: ke
}) => {
  const D = Rt(), we = D.palette.mode === "dark", fe = E ?? (we ? D.palette.background.paper : "#ffffff"), se = I ?? x ?? (we ? D.palette.text.primary : u), pe = v ?? w ?? yt(u), Ze = z ?? u, me = p.useRef(null), [ye, re] = p.useState(!1), Re = j ? Gr(j) : void 0, Ie = (ze) => /* @__PURE__ */ t(
    Yt,
    {
      name: A,
      avatar: b,
      color: Ze,
      size: ze
    }
  ), Oe = C + he, xe = L ? /* @__PURE__ */ t(
    qt,
    {
      count: Oe,
      onClick: F,
      color: se,
      hoverColor: pe,
      tooltipPlacement: "right",
      testId: "panel-notifications"
    }
  ) : null, Ce = B ? /* @__PURE__ */ h(
    Ke,
    {
      ref: me,
      onClick: () => re(!0),
      "aria-haspopup": "menu",
      "aria-expanded": ye,
      "aria-label": "Account menu",
      "data-testid": "panel-user-button",
      sx: {
        flex: g ? "0 0 auto" : 1,
        minWidth: 0,
        justifyContent: "flex-start",
        gap: 1.25,
        p: 0.75,
        borderRadius: "10px",
        bgcolor: ye ? pe : "transparent",
        "&:hover": { bgcolor: pe },
        ...Tn
      },
      children: [
        g && L ? (
          // Collapsed: no room for the bell, so unread shows as a dot
          /* @__PURE__ */ t(
            Ur,
            {
              color: "error",
              variant: "dot",
              overlap: "circular",
              invisible: !Oe,
              children: Ie(36)
            }
          )
        ) : Ie(g ? 36 : 40),
        g ? null : /* @__PURE__ */ h(S, { sx: { minWidth: 0, textAlign: "left" }, children: [
          /* @__PURE__ */ t(
            K,
            {
              noWrap: !0,
              sx: { fontWeight: 600, color: se, lineHeight: 1.3 },
              children: A
            }
          ),
          Re ? /* @__PURE__ */ t(
            K,
            {
              noWrap: !0,
              variant: "caption",
              "data-testid": "panel-user-role",
              sx: {
                display: "block",
                color: se,
                opacity: 0.85,
                letterSpacing: "0.02em",
                lineHeight: 1.3
              },
              children: Re
            }
          ) : null
        ] })
      ]
    }
  ) : null, Pe = !!xe && (!g || !Ce);
  return /* @__PURE__ */ h(
    S,
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
        /* @__PURE__ */ t(
          Pt,
          {
            mainLinks: e,
            secondaryLinks: r,
            activePath: o,
            onLinkClick: n,
            showHeaderBar: !0,
            logo: a,
            title: d,
            onBrandClick: s,
            brandColor: l,
            headerBackgroundColor: f,
            headerForegroundColor: c,
            activeAccentColor: u,
            groupAccentColor: w,
            activeForegroundColor: m,
            foregroundColor: x,
            surfaceBackgroundColor: fe,
            collapsed: g,
            expandedWidth: y,
            collapsedWidth: T,
            topContent: W,
            footer: Ce || Pe ? /* @__PURE__ */ h(
              ae,
              {
                direction: "row",
                sx: {
                  alignItems: "center",
                  gap: 0.5,
                  justifyContent: "center"
                },
                children: [
                  Ce,
                  Pe ? xe : null
                ]
              }
            ) : void 0
          }
        ),
        B ? /* @__PURE__ */ t(
          _n,
          {
            open: ye,
            anchorEl: me.current,
            onClose: () => re(!1),
            width: Math.max(y - 16, 240),
            renderAvatar: Ie,
            userName: A,
            userEmail: X,
            roleLabel: Re,
            accentColor: u,
            tint: pe,
            showThemeToggler: We,
            theme: ve,
            onThemeToggle: ke,
            onProfileClick: U,
            onLinkClick: n,
            menuItems: Ee,
            onLogout: V
          }
        ) : null
      ]
    }
  );
}, Dn = ({
  compact: e,
  color: r,
  hoverColor: o,
  showProfile: n,
  whatsNewCount: a = 0,
  ...d
}) => {
  var I;
  const {
    avatarColor: s,
    showNotifications: l,
    notificationCount: f,
    onNotificationsClick: c,
    userName: u = "User",
    userRole: w,
    userAvatar: m
  } = d, x = p.useRef(null), [E, g] = p.useState(
    null
  ), y = !!E, T = p.useRef(e);
  if (p.useEffect(() => {
    e && !T.current && g(null), T.current = e;
  }, [e]), !l && !n)
    return null;
  const W = {
    "&.Mui-focusVisible": { outline: "2px solid", outlineColor: r }
  };
  return /* @__PURE__ */ h($e, { children: [
    /* @__PURE__ */ h(
      ae,
      {
        ref: x,
        direction: e ? "column" : "row",
        spacing: 0.5,
        "data-testid": "sidebar-footer",
        sx: { width: "100%", alignItems: "center" },
        children: [
          n && /* @__PURE__ */ t(
            ie,
            {
              title: e ? u : "",
              placement: "right",
              arrow: !0,
              children: /* @__PURE__ */ t(
                Ke,
                {
                  onClick: () => g(x.current),
                  "aria-label": `Account menu for ${u}`,
                  "aria-haspopup": "menu",
                  "aria-expanded": y,
                  "data-testid": "sidebar-user",
                  sx: {
                    flex: e ? "0 0 auto" : "1 1 auto",
                    minWidth: 0,
                    gap: 1.25,
                    p: e ? 0.5 : "6px 8px",
                    justifyContent: "flex-start",
                    borderRadius: "8px",
                    color: r,
                    bgcolor: y ? o : "transparent",
                    "&:hover": { bgcolor: o },
                    ...W
                  },
                  children: /* @__PURE__ */ t(
                    Zr,
                    {
                      name: u,
                      role: w,
                      avatar: m,
                      avatarColor: s,
                      showText: !e
                    }
                  )
                }
              )
            }
          ),
          l && /* @__PURE__ */ t(
            qt,
            {
              count: f + a,
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
    /* @__PURE__ */ t(
      Qr,
      {
        anchorEl: E,
        onClose: () => g(null),
        placement: e ? "beside" : "above",
        width: e || (I = x.current) == null ? void 0 : I.clientWidth,
        ...d
      }
    )
  ] });
}, Nn = 'input, textarea, [contenteditable="true"]', Nr = (e) => {
  var r;
  (r = e == null ? void 0 : e.querySelector(Nn)) == null || r.focus();
}, Wn = ({
  search: e,
  mode: r,
  onExpand: o,
  autoFocus: n = !1,
  onAutoFocused: a,
  color: d,
  hoverColor: s
}) => {
  const l = p.useRef(null), [f, c] = p.useState(null);
  return p.useEffect(() => {
    r === "full" && n && (Nr(l.current), a == null || a());
  }, [r, n, a]), r === "full" ? /* @__PURE__ */ t(
    S,
    {
      ref: l,
      "data-testid": "sidebar-search",
      sx: { width: "100%" },
      children: e
    }
  ) : /* @__PURE__ */ h(
    S,
    {
      "data-testid": "sidebar-search",
      sx: { width: "100%", display: "flex", justifyContent: "center" },
      children: [
        /* @__PURE__ */ t(ie, { title: "Search", placement: "right", arrow: !0, children: /* @__PURE__ */ t(
          ue,
          {
            "aria-label": "Search",
            onClick: (u) => r === "expand" ? o == null ? void 0 : o() : c(u.currentTarget),
            sx: {
              width: 44,
              height: 44,
              color: d,
              borderRadius: "8px",
              "&:hover": { bgcolor: s }
            },
            children: /* @__PURE__ */ t(Lr, {})
          }
        ) }),
        /* @__PURE__ */ t(
          $r,
          {
            open: !!f,
            anchorEl: f,
            onClose: () => c(null),
            anchorOrigin: { vertical: "top", horizontal: "right" },
            transformOrigin: { vertical: "top", horizontal: "left" },
            TransitionProps: {
              onEntered: (u) => Nr(u)
            },
            slotProps: { paper: { sx: { ml: 1, p: 1.5, width: 360 } } },
            children: e
          }
        )
      ]
    }
  );
}, kn = 100, zn = () => {
  const e = p.useRef(null), r = p.useRef(void 0), o = p.useRef(/* @__PURE__ */ new WeakSet()), [n, a] = p.useState(!1), [d, s] = p.useState(!1), l = () => {
    clearTimeout(r.current), r.current = void 0;
  };
  return p.useEffect(() => {
    const c = (w) => {
      o.current.has(w) || (l(), a(!1));
    }, u = () => {
      l(), a(!1);
    };
    return document.addEventListener("mouseover", c), document.documentElement.addEventListener("mouseleave", u), () => {
      l(), document.removeEventListener("mouseover", c), document.documentElement.removeEventListener(
        "mouseleave",
        u
      );
    };
  }, []), p.useEffect(() => {
    if (!d)
      return;
    const c = (u) => {
      var w;
      (w = e.current) != null && w.contains(u.target) || s(!1);
    };
    return document.addEventListener("pointerdown", c), () => document.removeEventListener("pointerdown", c);
  }, [d]), {
    expanded: n || d,
    pin: () => s(!0),
    rootProps: {
      ref: e,
      onMouseOver: (c) => {
        o.current.add(c.nativeEvent), !n && r.current === void 0 && (r.current = setTimeout(() => {
          r.current = void 0, a(!0);
        }, kn));
      },
      // Focus moving to an element outside unpins; a null target (the
      // focused element unmounted as the panel swapped layouts) does not.
      onBlur: (c) => {
        const u = c.relatedTarget;
        u && !c.currentTarget.contains(u) && s(!1);
      },
      onKeyDown: (c) => {
        c.key === "Escape" && s(!1);
      }
    }
  };
}, Bn = 100, Wr = 80, Ut = 56, Mn = 300, $t = 288, qe = 72, Ln = "width 220ms cubic-bezier(0.4, 0, 0.2, 1), box-shadow 220ms ease", Fn = 68, Hn = { xs: 2, md: 5 }, Un = () => typeof navigator < "u" && /Mac|iPhone|iPad/.test(navigator.platform || navigator.userAgent), $n = (e, r) => {
  const o = (n) => typeof n == "number" ? r.spacing(n) : n;
  return typeof e == "object" ? Object.fromEntries(
    Object.entries(e).map(([n, a]) => [n, o(a)])
  ) : o(e);
}, Li = ({
  children: e,
  sidebarLinks: r = [],
  secondarySidebarLinks: o = [],
  appName: n = "Dashboard",
  showSidebar: a = !0,
  showSidebarRailTitles: d = !1,
  sidebarVariant: s = "rail",
  mobileNavigation: l = "bottom-bar",
  mobileBottomBarLinks: f,
  logo: c,
  onBrandClick: u,
  searchComponent: w,
  brandColor: m,
  contentPadding: x = Hn,
  userMenuItems: E,
  sidebarBackgroundColor: g,
  sidebarHeaderBackgroundColor: y,
  groupAccentColor: T,
  activeSidebarForegroundColor: W,
  enableRefreshToken: I = !1,
  activePath: v,
  onLinkClick: z,
  showProfile: B = !0,
  userName: A,
  userRole: X,
  userAvatar: j,
  userEmail: b,
  onLogout: L,
  showSettings: C = !0,
  onSettingsClick: F,
  onProfileClick: he,
  showNotifications: U = !0,
  notificationCount: Ee = 0,
  NotificationSidebarContent: V,
  whatsNewCount: ve = 0,
  onNotificationsClick: We,
  onVerify: ke,
  alertProps: D,
  style: we,
  sidebarStyles: fe,
  contentStyles: se,
  accentColor: pe,
  sidebarAccentColor: Ze,
  sidebarForegroundColor: me,
  contentBackgroundColor: ye,
  theme: re = "light",
  showThemeToggler: Re = !1,
  onThemeToggle: Ie,
  GlobalChatSidebar: Oe,
  useChatSidebar: xe,
  chatPanelMode: Ce = "docked",
  chatPanelPosition: Pe = "right",
  chatPanelWidth: Qe = 420,
  onChatClose: ze,
  showAssistant: i = !1,
  assistantPlacement: _ = "sidebar",
  assistantShortcut: k = "j",
  onAssistantClick: O,
  assistantActive: H = !1,
  assistantBusy: $ = !1,
  customNavbar: le,
  customNavbarProps: Y,
  redirectToLogin: oe,
  apiBaseUrl: dt
}) => {
  const Jt = Ro(), Z = Io(Jt.breakpoints.down("md")), Zt = br(
    () => kr(an(re)),
    [re]
  ), ut = re === "dark", Qt = pe ?? "#01584f", _e = Ze ?? Qt, It = ye ?? (ut ? "hsl(220, 35%, 9%)" : "#f2f9fc"), Ge = s === "collapsible", Ot = s === "panel", ro = Ot && a && !Z, Te = s === "rail-labeled", oo = Ge || Te, Be = g ?? (ut ? "hsl(220, 30%, 7%)" : "#ffffff"), ht = y ?? Be, ge = me ?? (ut ? "#ffffff" : _e), et = T ?? yt(ge), tt = y ? Kt(ht) : ge, er = (R) => /* @__PURE__ */ t(
    J,
    {
      role: "img",
      "aria-label": `${n} logo`,
      sx: {
        width: 28,
        height: 28,
        flexShrink: 0,
        bgcolor: R,
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
  ), ft = m ?? tt, Ct = c ?? er(ft), no = c ?? er(m ?? ge), _t = zn(), ce = !_t.expanded, [io, tr] = je(!1), ao = yo(() => tr(!1), []);
  let de = 0;
  a && !Z && (Te ? de = Wr : Ge || Ot ? de = qe : de = Bn);
  const [rr, Me] = je(!1), [or, Tt] = je(!1), q = Z && l === "bottom-bar", nr = `calc(${eo}px + env(safe-area-inset-bottom, 0px))`, [At, ir] = je({ open: !1, tab: "notifications" }), ar = () => ir((R) => ({ ...R, open: !1 })), so = U && !!V, [lo, co] = je(!0), [uo, ho] = je(!1), Dt = xe == null ? void 0 : xe(), sr = (Dt == null ? void 0 : Dt.isOpen) ?? !1, lr = Ce === "floating" ? "floating" : "docked", fo = lr === "docked" && sr && Oe && !Z ? Qe : 0, pt = Bt(ke), cr = Bt(!1), dr = br(
    () => nn(dt),
    [dt]
  );
  gt(() => {
    pt.current = ke;
  }, [ke]);
  const Nt = Bt(O);
  Nt.current = O;
  const rt = i && k ? k.toLowerCase() : null;
  gt(() => {
    if (!rt)
      return;
    const R = (P) => {
      (P.metaKey || P.ctrlKey) && !P.altKey && !P.shiftKey && P.key.toLowerCase() === rt && Nt.current && (P.preventDefault(), Nt.current());
    };
    return window.addEventListener("keydown", R), () => window.removeEventListener("keydown", R);
  }, [rt]);
  const ur = (R) => {
    const P = L(R);
    P instanceof Promise && P.catch((Ae) => {
      console.error("Error in logout handler:", Ae);
    });
  };
  if (gt(() => {
    (() => {
      var P;
      try {
        const { isAuthenticated: Ae } = rn();
        if (!Ae) {
          console.log("No session found, redirecting to login"), ct(), oe();
          return;
        }
        if (!cr.current) {
          const { user: nt, error: zt } = on();
          if (nt && !zt) {
            const So = {
              name: nt.name || "",
              email: nt.email || "",
              profilePicture: nt.profilePicture || "",
              role: nt.role || ""
            };
            cr.current = !0, (P = pt.current) == null || P.call(pt, So);
          } else
            zt && console.error("Error getting user data:", zt);
        }
        ho(!0);
      } catch (Ae) {
        console.error("Error checking session:", Ae), ct(), oe();
      } finally {
        co(!1);
      }
    })();
  }, [oe]), gt(() => {
    I && sn(dr, oe);
  }, [I, dr]), lo)
    return /* @__PURE__ */ t(gr, { theme: Zt, children: /* @__PURE__ */ h(
      J,
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
          /* @__PURE__ */ t(
            Oo,
            {
              size: 60,
              thickness: 4,
              sx: { color: Qt }
            }
          ),
          /* @__PURE__ */ t(J, { sx: { mt: 2, color: "text.secondary" }, children: "Checking session..." })
        ]
      }
    ) });
  if (!uo)
    return null;
  const ot = w ?? (le ? /* @__PURE__ */ t(le, { ...Y }) : null), po = (R) => {
    Me(!1), Tt(!1), ir({ open: !0, tab: R });
  }, Wt = V && (() => po("notifications")), mo = Ee + ve, hr = {
    avatarColor: _e,
    // The standard menu only runs `onClick`, so path rows navigate here.
    menuItems: E == null ? void 0 : E.map(
      (R) => R.onClick || !R.path ? R : { ...R, onClick: () => z == null ? void 0 : z(R.path) }
    ),
    showNotifications: U,
    notificationCount: Ee,
    whatsNewCount: ve,
    onNotificationsClick: Wt,
    showProfile: B,
    userName: A,
    userRole: X,
    userAvatar: j,
    showSettings: C,
    onSettingsClick: F,
    showThemeToggler: Re,
    theme: re,
    onThemeToggle: Ie,
    onLogout: ur
  }, kt = (R) => /* @__PURE__ */ t(
    Dn,
    {
      ...hr,
      compact: R,
      color: ge,
      hoverColor: et
    }
  ), fr = rt ? [Un() ? "⌘" : "Ctrl", rt.toUpperCase()] : void 0, xo = (R) => i && _ === "sidebar" ? /* @__PURE__ */ t(
    Cr,
    {
      variant: R ? "sidebar-icon" : "sidebar",
      onClick: O,
      active: H,
      busy: $,
      shortcutKeys: fr,
      accentColor: ge
    }
  ) : null, go = (R) => ot ? /* @__PURE__ */ t(
    Wn,
    {
      search: ot,
      mode: R,
      onExpand: () => {
        _t.pin(), tr(!0);
      },
      autoFocus: io,
      onAutoFocused: ao,
      color: ge,
      hoverColor: et
    }
  ) : null, mt = (R) => {
    const P = xo(R !== "full"), Ae = go(R);
    return P || Ae ? /* @__PURE__ */ h(
      To,
      {
        spacing: 1.5,
        sx: { alignItems: R === "full" ? "stretch" : "center" },
        children: [
          P,
          Ae
        ]
      }
    ) : void 0;
  }, pr = () => /* @__PURE__ */ t(
    Pt,
    {
      mainLinks: r,
      secondaryLinks: o,
      activePath: v,
      onLinkClick: z,
      showHeaderBar: Ge,
      logo: Ct,
      title: n,
      onBrandClick: u,
      brandColor: ft,
      headerBackgroundColor: Ge ? ht : void 0,
      headerForegroundColor: Ge ? tt : void 0,
      activeAccentColor: _e,
      groupAccentColor: T,
      activeForegroundColor: W,
      foregroundColor: me,
      surfaceBackgroundColor: Be,
      collapsed: Te || ce,
      showLabels: Te,
      expandedWidth: $t,
      collapsedWidth: Te ? Wr : qe,
      topContent: mt(
        Te ? "popover" : ce ? "expand" : "full"
      ),
      footer: kt(Te || ce)
    }
  ), mr = (R) => /* @__PURE__ */ t(
    J,
    {
      component: "aside",
      sx: {
        width: qe,
        minWidth: qe,
        flexShrink: 0,
        // Above the page, including its sticky app bars
        zIndex: (P) => P.zIndex.appBar + 1,
        position: "sticky",
        top: 0,
        alignSelf: "flex-start",
        height: "100vh"
      },
      children: /* @__PURE__ */ t(
        J,
        {
          ..._t.rootProps,
          "data-testid": "sidebar-hover-panel",
          "data-expanded": ce ? "false" : "true",
          sx: {
            position: "absolute",
            top: 0,
            left: 0,
            height: "100%",
            width: ce ? qe : $t,
            // Flex column so the sidebar shrinks to fit siblings (the
            // alert card) instead of pushing them off-screen.
            display: "flex",
            flexDirection: "column",
            overflow: "hidden",
            bgcolor: Be,
            borderRight: "1px solid",
            borderColor: "divider",
            boxShadow: ce ? "none" : `4px 0 24px rgba(0, 0, 0, ${ut ? 0.5 : 0.12})`,
            transition: Ln,
            ...fe
          },
          children: R
        }
      )
    }
  ), bo = $n(
    x,
    Jt
  );
  return /* @__PURE__ */ t(gr, { theme: Zt, children: /* @__PURE__ */ h(
    J,
    {
      sx: {
        display: "flex",
        minHeight: "100vh",
        ...we
      },
      children: [
        /* @__PURE__ */ t(Co, {}),
        Z && /* @__PURE__ */ t(
          In,
          {
            height: Ut,
            onMenuClick: a && !q ? () => Me(!0) : void 0,
            appName: n,
            logo: Ct,
            onBrandClick: u,
            background: ht,
            color: tt,
            brandColor: ft,
            endContent: U ? /* @__PURE__ */ t(
              qt,
              {
                count: mo,
                onClick: Wt,
                color: tt,
                hoverColor: et,
                tooltipPlacement: "bottom",
                testId: "mobile-notifications"
              }
            ) : void 0
          }
        ),
        a && !Z && Te && /* @__PURE__ */ t(
          J,
          {
            component: "aside",
            sx: {
              width: de,
              minWidth: de,
              flexShrink: 0,
              zIndex: 2,
              position: "sticky",
              top: 0,
              alignSelf: "flex-start",
              height: "100vh",
              // Flex column so the rail shrinks inside the viewport.
              display: "flex",
              flexDirection: "column",
              borderRight: "1px solid",
              borderColor: "divider",
              ...fe
            },
            children: pr()
          }
        ),
        a && !Z && Ge && mr(
          /* @__PURE__ */ h($e, { children: [
            pr(),
            (D == null ? void 0 : D.show) && !ce && /* @__PURE__ */ t(St, { ...D })
          ] })
        ),
        ro && mr(
          /* @__PURE__ */ h($e, { children: [
            /* @__PURE__ */ t(
              An,
              {
                mainLinks: r,
                secondaryLinks: o,
                activePath: v,
                onLinkClick: z,
                logo: Ct,
                title: n,
                onBrandClick: u,
                brandColor: ft,
                headerBackgroundColor: ht,
                headerForegroundColor: tt,
                activeAccentColor: _e,
                groupAccentColor: T,
                activeForegroundColor: W,
                foregroundColor: me,
                surfaceBackgroundColor: Be,
                collapsed: ce,
                expandedWidth: $t,
                collapsedWidth: qe,
                topContent: mt(
                  ce ? "expand" : "full"
                ),
                color: ge,
                hoverColor: et,
                avatarColor: _e,
                showProfile: B,
                userName: A,
                userEmail: b,
                userRole: X,
                userAvatar: j,
                showNotifications: U,
                notificationCount: Ee,
                onNotificationsClick: so ? Wt : We,
                whatsNewCount: ve,
                onProfileClick: he,
                menuItems: E,
                onLogout: ur,
                theme: re,
                showThemeToggler: Re,
                onThemeToggle: Ie
              }
            ),
            (D == null ? void 0 : D.show) && !ce && /* @__PURE__ */ t(St, { ...D })
          ] })
        ),
        a && !Z && !oo && !Ot && /* @__PURE__ */ t(
          Sr,
          {
            variant: "permanent",
            sx: {
              width: de,
              flexShrink: 0,
              zIndex: 2,
              "& .MuiDrawer-paper": {
                width: de,
                boxSizing: "border-box",
                bgcolor: It,
                borderRight: "none"
              },
              ...fe
            },
            children: /* @__PURE__ */ h(
              J,
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
                  /* @__PURE__ */ t(
                    J,
                    {
                      sx: {
                        display: "flex",
                        justifyContent: "center",
                        mb: 1.5
                      },
                      children: /* @__PURE__ */ t(
                        wt,
                        {
                          logo: no,
                          appName: n,
                          onClick: u,
                          color: m ?? ge,
                          testId: "sidebar-header-brand"
                        }
                      )
                    }
                  ),
                  mt("popover"),
                  /* @__PURE__ */ h(
                    J,
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
                        /* @__PURE__ */ t(
                          Sn,
                          {
                            mainLinks: r,
                            secondaryLinks: o,
                            activePath: v,
                            onLinkClick: z,
                            accentColor: _e,
                            surfaceBackgroundColor: It,
                            railShowTitles: d
                          }
                        ),
                        (D == null ? void 0 : D.show) && /* @__PURE__ */ t(St, { ...D })
                      ]
                    }
                  ),
                  /* @__PURE__ */ t(J, { sx: { py: 1.5 }, children: kt(!0) })
                ]
              }
            )
          }
        ),
        a && Z && /* @__PURE__ */ h(
          _o,
          {
            anchor: q ? "bottom" : "left",
            open: rr,
            onOpen: () => Me(!0),
            onClose: () => Me(!1),
            disableSwipeToOpen: !0,
            sx: { zIndex: (R) => R.zIndex.drawer + 1 },
            slotProps: {
              paper: {
                "aria-label": "Navigation",
                sx: {
                  bgcolor: Be,
                  backgroundImage: "none",
                  ...q ? {
                    maxHeight: "min(80vh, 640px)",
                    borderTopLeftRadius: "16px",
                    borderTopRightRadius: "16px",
                    pb: "env(safe-area-inset-bottom, 0px)"
                  } : { maxWidth: "85vw" }
                }
              }
            },
            children: [
              q && // Grab handle: the sheet can be swiped down to close
              /* @__PURE__ */ t(
                J,
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
              /* @__PURE__ */ t(
                Pt,
                {
                  mainLinks: r,
                  secondaryLinks: o,
                  activePath: v,
                  onLinkClick: (R) => {
                    z == null || z(R), Me(!1);
                  },
                  onLinkAction: () => Me(!1),
                  collapsed: !1,
                  expandedWidth: q ? "100%" : Mn,
                  activeAccentColor: _e,
                  groupAccentColor: T,
                  activeForegroundColor: W,
                  foregroundColor: me,
                  surfaceBackgroundColor: Be,
                  topInsetPx: q ? 8 : 0,
                  topContent: q ? void 0 : mt("full"),
                  footer: q ? void 0 : kt(!1)
                }
              ),
              (D == null ? void 0 : D.show) && /* @__PURE__ */ t(St, { ...D })
            ]
          }
        ),
        q && ot && /* @__PURE__ */ t(
          Rn,
          {
            open: or,
            onClose: () => Tt(!1),
            search: ot
          }
        ),
        q && /* @__PURE__ */ t(
          yn,
          {
            ...hr,
            pinnedLinks: f,
            activePath: v,
            onLinkClick: z,
            onMenuClick: a ? () => Me(!0) : void 0,
            menuOpen: rr,
            onSearchClick: ot ? () => Tt(!0) : void 0,
            searchOpen: or,
            showAssistant: i,
            onAssistantClick: O,
            assistantActive: H,
            showProfile: B,
            background: Be,
            color: ge,
            activeColor: _e,
            activeBackground: et
          }
        ),
        /* @__PURE__ */ t(
          J,
          {
            component: "main",
            sx: {
              flexGrow: 1,
              "--lumora-content-padding": bo,
              // Where sticky page elements should pin (below the mobile bar)
              "--lumora-sticky-top": Z ? `${Ut}px` : "0px",
              p: "var(--lumora-content-padding)",
              width: de ? `calc(100% - ${de}px)` : "100%",
              mt: Z ? `${Ut}px` : 0,
              // Keep the last content clear of the bottom bar
              ...q && {
                pb: `calc(var(--lumora-content-padding) + ${nr})`
              },
              backgroundColor: It,
              ...se
            },
            children: e
          }
        ),
        Oe && /* @__PURE__ */ t(
          un,
          {
            open: sr,
            variant: lr,
            position: Pe,
            width: Qe,
            sidebarWidthPx: de,
            bottomOffsetPx: i && _ === "floating" ? Fn : 0,
            fullScreen: Z,
            fullScreenBottom: q ? nr : "0px",
            onClose: ze,
            children: /* @__PURE__ */ t(Oe, {})
          }
        ),
        i && _ === "floating" && !q && /* @__PURE__ */ t(
          Cr,
          {
            variant: "floating",
            rightOffsetPx: fo,
            shortcutKeys: fr,
            onClick: O,
            active: H,
            busy: $
          }
        ),
        U && V && /* @__PURE__ */ t(
          Sr,
          {
            anchor: "right",
            open: At.open,
            onClose: ar,
            slotProps: {
              paper: { sx: { width: 380, maxWidth: "100vw" } }
            },
            children: /* @__PURE__ */ t(
              V,
              {
                onClose: ar,
                initialTab: At.tab
              },
              At.tab
            )
          }
        )
      ]
    }
  ) });
};
export {
  M as AUTH_ERROR_CODES,
  N as AuthError,
  Pt as CollapsibleSidebar,
  Bi as FullBleedSection,
  en as Kbd,
  Li as LumoraWrapper,
  ct as clearAuthTokens,
  Li as default,
  Mi as getAuthErrorMessage,
  lt as getAuthTokens,
  on as getCurrentUser,
  an as getDesignTokens,
  rn as isAuthenticated,
  jt as logAuthError,
  Xr as storeAuthTokens
};
