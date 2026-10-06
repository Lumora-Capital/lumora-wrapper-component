import { jsx as e, jsxs as h, Fragment as Pe } from "react/jsx-runtime";
import Do from "@mui/icons-material/KeyboardArrowDownRounded";
import No from "@mui/icons-material/KeyboardArrowUpRounded";
import Gt from "@mui/icons-material/ChevronRightRounded";
import x from "@mui/material/Box";
import Er from "@mui/material/Collapse";
import Ce from "@mui/material/Divider";
import Oe from "@mui/material/IconButton";
import gt from "@mui/material/ListItemButton";
import ae from "@mui/material/ListItemIcon";
import We from "@mui/material/ListItemText";
import se from "@mui/material/Stack";
import ve from "@mui/material/Tooltip";
import z from "@mui/material/Typography";
import { useTheme as It, createTheme as $r, alpha as Fe, ThemeProvider as yr } from "@mui/material/styles";
import * as p from "react";
import { useMemo as wr, useState as Xe, useCallback as Wo, useRef as Bt, useEffect as bt } from "react";
import Ge from "@mui/material/ButtonBase";
import { useTheme as ko, useMediaQuery as Lo, Box as ie, CircularProgress as zo, CssBaseline as Mo, Drawer as Rr, SwipeableDrawer as Bo, Stack as Ho } from "@mui/material";
import Ir from "axios";
import Fo from "@mui/material/Card";
import Po from "@mui/material/CardContent";
import Ur from "@mui/material/Button";
import $o from "@mui/icons-material/AutoAwesomeRounded";
import Uo from "@mui/material/Grow";
import qt from "@mui/material/Paper";
import Ko from "@mui/material/Slide";
import Go from "@mui/material/ListSubheader";
import Se from "@mui/material/MenuItem";
import Ct from "@mui/material/MenuList";
import jo from "@mui/material/Popper";
import Kr from "@mui/icons-material/MenuRounded";
import Gr from "@mui/icons-material/SearchRounded";
import jr from "@mui/icons-material/LogoutRounded";
import Xr from "@mui/icons-material/NotificationsNoneOutlined";
import Vr from "@mui/icons-material/SettingsOutlined";
import Xo from "@mui/material/Avatar";
import Vo from "@mui/material/Menu";
import Cr from "@mui/material/ToggleButton";
import Yo from "@mui/material/ToggleButtonGroup";
import qo from "@mui/material/Drawer";
import Jo from "@mui/material/AppBar";
import Zo from "@mui/material/Toolbar";
import Yr from "@mui/material/Badge";
import Qo from "@mui/icons-material/DarkModeOutlined";
import en from "@mui/icons-material/LayersOutlined";
import tn from "@mui/icons-material/LightModeOutlined";
import rn from "@mui/icons-material/SettingsBrightnessOutlined";
import qr from "@mui/material/Popover";
import on from "@mui/icons-material/ArrowOutwardRounded";
import nn from "@mui/icons-material/CheckRounded";
import an from "@mui/icons-material/ShieldOutlined";
import sn from "@mui/icons-material/ExpandMoreRounded";
const wt = ({
  logo: t,
  title: r,
  appName: o,
  onClick: n,
  color: a,
  testId: u
}) => {
  const s = {
    alignItems: "center",
    gap: 1,
    minWidth: 0,
    flexShrink: 0,
    color: a,
    // Consumer SVG logos pick up the brand color
    "& svg": { color: "inherit", fill: "currentColor" }
  }, l = /* @__PURE__ */ h(Pe, { children: [
    r ? /* @__PURE__ */ e(
      z,
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
    t
  ] });
  return n ? /* @__PURE__ */ e(
    Ge,
    {
      onClick: n,
      "aria-label": `${o} home`,
      "data-testid": u,
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
  ) : /* @__PURE__ */ e(se, { direction: "row", "data-testid": u, sx: s, children: l });
}, lt = (t) => {
  var r;
  return !!((r = t.subitems) != null && r.length);
}, Et = (t, r) => t ? `${t}/${r.text}` : r.text, Ke = (t, r) => {
  var o;
  return r ? t.path && r === t.path ? !0 : ((o = t.subitems) == null ? void 0 : o.some((n) => Ke(n, r))) ?? !1 : !1;
}, He = (t, r) => !!(r && t.path === r), Jr = (t, r) => (t ?? []).flatMap((o) => {
  const n = o.icon ?? r;
  return lt(o) ? Jr(o.subitems, n) : o.path ? [{ sub: o, icon: n }] : [];
}), jt = (t) => {
  const r = Zr(t);
  if (!r)
    return "#ffffff";
  const [o, n, a] = r.map((s) => {
    const l = s / 255;
    return l <= 0.03928 ? l / 12.92 : ((l + 0.055) / 1.055) ** 2.4;
  });
  return 0.2126 * o + 0.7152 * n + 0.0722 * a > 0.5 ? "#0b1f1c" : "#ffffff";
}, Rt = (t) => {
  const r = Zr(t);
  if (!r)
    return "rgba(1, 88, 79, 0.12)";
  const [o, n, a] = r;
  return `rgba(${o}, ${n}, ${a}, 0.14)`;
}, Zr = (t) => {
  let r = t.trim().replace(/^#/, "");
  if (r.length === 3 && (r = r.split("").map((n) => n + n).join("")), r.length !== 6 || /[^0-9a-fA-F]/.test(r))
    return null;
  const o = parseInt(r, 16);
  return [o >> 16 & 255, o >> 8 & 255, o & 255];
}, ln = (t) => {
  typeof window > "u" || window.open(t, "_blank", "noopener,noreferrer");
}, Qr = (t) => t.replace(/_/g, " ").split(/\s+/).filter(Boolean).join(" ").toUpperCase(), cn = 264, dn = 72, Or = 64, Ht = {
  "&:focus, &:focus-visible": { outline: "none" }
}, un = 16, hn = 14, fn = 4, pn = 2.5, _r = "0.7rem", Tr = 22, Ve = ({ text: t, variant: r = "body1", center: o = !1, fontSize: n, fontWeight: a }) => {
  const u = p.useRef(null), [s, l] = p.useState(!1), d = p.useCallback(() => {
    const c = u.current;
    c && l(c.scrollWidth > c.clientWidth + 0.5);
  }, []);
  return p.useLayoutEffect(() => {
    d();
  }, [d, t]), p.useEffect(() => {
    const c = u.current;
    if (!c)
      return;
    const f = new ResizeObserver(() => d());
    return f.observe(c), () => f.disconnect();
  }, [d]), /* @__PURE__ */ e(
    ve,
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
          ref: u,
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
          children: t
        }
      )
    }
  );
}, mn = ({
  open: t,
  size: r = un
}) => t ? /* @__PURE__ */ e(No, { sx: { fontSize: r, opacity: 0.75 } }) : /* @__PURE__ */ e(Do, { sx: { fontSize: r, opacity: 0.75 } }), Ar = ({ open: t }) => /* @__PURE__ */ e(
  Gt,
  {
    sx: {
      fontSize: 20,
      opacity: 0.75,
      transition: "transform 150ms ease",
      transform: t ? "rotate(90deg)" : "none"
    }
  }
), St = 600, Xt = ({
  mainLinks: t,
  secondaryLinks: r = [],
  activePath: o,
  onLinkClick: n,
  onLinkAction: a,
  logo: u,
  title: s,
  onBrandClick: l,
  showHeaderBar: d = !1,
  headerBackgroundColor: c,
  headerForegroundColor: f,
  brandColor: v,
  activeAccentColor: m = "#01584f",
  groupAccentColor: g,
  activeForegroundColor: I,
  foregroundColor: b,
  surfaceBackgroundColor: E,
  collapsed: _ = !1,
  expandedWidth: A = cn,
  collapsedWidth: C = dn,
  showLabels: y = !1,
  topInsetPx: $ = 0,
  topContent: B,
  footer: k
}) => {
  const le = It(), Y = le.palette.mode === "dark", [D, U] = p.useState(
    {}
  ), R = I ?? jt(m), N = {
    bgcolor: m,
    color: R,
    "& .MuiListItemIcon-root": { color: R }
  }, ee = {
    bgcolor: m,
    color: R,
    borderRadius: "8px"
  }, K = g ?? Rt(m), ke = E ?? (Y ? le.palette.background.paper : "#ffffff"), j = b ?? (Y ? "text.primary" : m), me = c ?? ke, H = f ?? (c ? jt(me) : b ?? (Y ? le.palette.text.primary : m)), xe = Rt(H), ce = (i) => {
    n == null || n(i);
  }, te = (i, S) => {
    U((O) => ({ ...O, [i]: !S }));
  }, _e = (i, S) => D[S] ?? Ke(i, o), re = (i, S, O) => ({
    color: i ? R : j,
    bgcolor: i ? m : "transparent",
    "& .MuiListItemIcon-root": {
      color: i ? R : j,
      minWidth: O
    },
    "&:hover": i || y ? N : { bgcolor: S }
  }), Ee = {
    "&.Mui-selected": {
      bgcolor: m
    },
    "&.Mui-selected:hover": N
  }, L = (i) => {
    const S = He(i, o), O = /* @__PURE__ */ h(
      gt,
      {
        disabled: !i.path,
        selected: S,
        onClick: () => i.path && ce(i.path),
        "data-testid": `sidebar-item-${i.text}`,
        "data-active": S ? "true" : "false",
        sx: {
          borderRadius: "8px",
          py: 1.25,
          px: 1.5,
          // Room for the action button laid over the row's end
          ...i.action && { pr: 6 },
          ...re(S, K, 36),
          ...Ee
        },
        children: [
          /* @__PURE__ */ e(ae, { children: i.icon }),
          /* @__PURE__ */ e(
            We,
            {
              disableTypography: !0,
              primary: /* @__PURE__ */ e(
                Ve,
                {
                  text: i.text,
                  fontWeight: St
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
    const { action: w } = i;
    return /* @__PURE__ */ h(x, { sx: { position: "relative" }, children: [
      O,
      /* @__PURE__ */ e(ve, { title: w.label, placement: "right", arrow: !0, children: /* @__PURE__ */ e(
        Oe,
        {
          "aria-label": w.label,
          "data-testid": `sidebar-action-${i.text}`,
          onClick: () => {
            w.onClick(), a == null || a();
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
            borderColor: S ? "rgba(255, 255, 255, 0.35)" : K,
            color: S ? R : j,
            "&:hover": {
              bgcolor: S ? "rgba(255, 255, 255, 0.15)" : K
            },
            "& .MuiSvgIcon-root": { fontSize: 18 },
            // No lingering outline after a click; a clear ring for keyboard focus
            "&:focus:not(.Mui-focusVisible)": {
              outline: "none"
            },
            "&.Mui-focusVisible": {
              outline: "2px solid",
              outlineColor: S ? R : j,
              outlineOffset: 1
            }
          },
          children: w.icon
        }
      ) })
    ] }, i.text);
  }, Te = (i) => {
    const S = Ke(i, o), O = He(i, o), w = Et("", i), F = _e(i, w);
    return /* @__PURE__ */ h(
      x,
      {
        "data-testid": `sidebar-group-${i.text}`,
        sx: {
          borderRadius: "8px",
          bgcolor: S ? K : "transparent"
        },
        children: [
          /* @__PURE__ */ h(
            gt,
            {
              onClick: () => te(w, F),
              "data-testid": `sidebar-item-${i.text}`,
              "data-active": O ? "true" : "false",
              "aria-expanded": F,
              sx: {
                borderRadius: "8px",
                py: 1.25,
                px: 1.5,
                ...re(O, K, 36)
              },
              children: [
                /* @__PURE__ */ e(ae, { children: i.icon }),
                /* @__PURE__ */ e(
                  We,
                  {
                    disableTypography: !0,
                    primary: /* @__PURE__ */ e(
                      Ve,
                      {
                        text: i.text,
                        fontWeight: St
                      }
                    )
                  }
                ),
                /* @__PURE__ */ e(Ar, { open: F })
              ]
            }
          ),
          /* @__PURE__ */ e(Er, { in: F, timeout: "auto", unmountOnExit: !0, children: /* @__PURE__ */ e(
            x,
            {
              "data-testid": `sidebar-children-${i.text}`,
              sx: { pb: 0.5 },
              children: i.subitems.map(
                (W) => de(W, w, 1)
              )
            }
          ) })
        ]
      },
      i.text
    );
  }, de = (i, S, O) => {
    const w = Et(S, i), F = fn + (O - 1) * pn;
    if (lt(i)) {
      const oe = Ke(i, o), G = He(i, o), Z = _e(i, w);
      return /* @__PURE__ */ h(x, { "data-testid": `sidebar-group-${i.text}`, children: [
        /* @__PURE__ */ h(
          gt,
          {
            onClick: () => te(w, Z),
            "data-testid": `sidebar-subitem-${i.text}`,
            "data-active": oe ? "true" : "false",
            "aria-expanded": Z,
            sx: {
              borderRadius: "8px",
              mx: 0.5,
              py: 0.75,
              pl: F,
              ...re(G, "action.hover", 32)
            },
            children: [
              i.icon ? /* @__PURE__ */ e(ae, { children: i.icon }) : null,
              /* @__PURE__ */ e(
                We,
                {
                  disableTypography: !0,
                  primary: /* @__PURE__ */ e(
                    Ve,
                    {
                      text: i.text,
                      fontWeight: St
                    }
                  )
                }
              ),
              /* @__PURE__ */ e(Ar, { open: Z })
            ]
          }
        ),
        /* @__PURE__ */ e(Er, { in: Z, timeout: "auto", unmountOnExit: !0, children: /* @__PURE__ */ e(x, { "data-testid": `sidebar-children-${i.text}`, children: i.subitems.map(
          (et) => de(et, w, O + 1)
        ) }) })
      ] }, w);
    }
    const W = He(i, o);
    return /* @__PURE__ */ h(
      gt,
      {
        selected: W,
        disabled: !i.path,
        onClick: () => i.path && ce(i.path),
        "data-testid": `sidebar-subitem-${i.text}`,
        "data-active": W ? "true" : "false",
        sx: {
          borderRadius: "8px",
          mx: 0.5,
          py: 0.75,
          pl: F,
          ...re(W, "action.hover", 32),
          ...Ee
        },
        children: [
          i.icon ? /* @__PURE__ */ e(ae, { children: i.icon }) : null,
          /* @__PURE__ */ e(
            We,
            {
              disableTypography: !0,
              primary: /* @__PURE__ */ e(
                Ve,
                {
                  text: i.text,
                  fontWeight: St
                }
              )
            }
          )
        ]
      },
      w
    );
  }, Le = (i, S, O, w, F, W) => {
    const oe = !F, G = /* @__PURE__ */ h(
      Oe,
      {
        "aria-label": S,
        disabled: oe,
        onClick: F,
        "data-testid": (W == null ? void 0 : W.testId) ?? `sidebar-item-${S}`,
        "data-active": w ? "true" : "false",
        sx: y ? {
          display: "flex",
          flexDirection: "column",
          gap: 0.25,
          width: "100%",
          maxWidth: "100%",
          height: "auto",
          // 8px padding on all sides of the item container.
          p: 1,
          borderRadius: "8px",
          color: w ? R : j,
          bgcolor: w ? m : "transparent",
          "& .MuiSvgIcon-root": {
            fontSize: Tr
          },
          "&:hover": ee,
          ...Ht
        } : {
          // Icon-only collapsed rail (collapsible variant):
          // original hover — accent when active, else a subtle
          // tint; no foreground change.
          width: 44,
          height: 44,
          color: w ? R : j,
          bgcolor: w ? m : "transparent",
          borderRadius: w ? "8px" : "50%",
          "&:hover": {
            bgcolor: w ? m : W != null && W.insideGroup ? "action.hover" : K,
            borderRadius: "8px"
          },
          ...Ht
        },
        children: [
          O,
          y ? /* @__PURE__ */ e(
            Ve,
            {
              text: S,
              variant: "caption",
              center: !0,
              fontSize: _r
            }
          ) : null
        ]
      }
    );
    return y ? oe ? /* @__PURE__ */ e("span", { children: G }, i) : /* @__PURE__ */ e(p.Fragment, { children: G }, i) : /* @__PURE__ */ e(ve, { title: S, placement: "right", arrow: !0, children: oe ? /* @__PURE__ */ e("span", { children: G }) : G }, i);
  }, Ae = (i) => {
    const S = Ke(i, o), O = He(i, o), w = Et("", i), F = _e(i, w), W = /* @__PURE__ */ h(
      Oe,
      {
        "aria-label": i.text,
        "aria-expanded": F,
        onClick: () => te(w, F),
        "data-testid": `sidebar-item-${i.text}`,
        "data-active": O ? "true" : "false",
        sx: {
          display: "flex",
          flexDirection: "column",
          gap: y ? 0.25 : 0,
          width: y ? "100%" : 44,
          maxWidth: "100%",
          // 8px padding on all sides of the labeled item container.
          ...y ? { p: 1 } : { py: 0.75 },
          borderRadius: "10px",
          color: O ? R : j,
          bgcolor: O ? m : "transparent",
          // rail-labeled: active AND hover share the highlight. collapsible:
          // original behavior — accent only when active; the outer pill
          // supplies the idle-hover tint, so the button stays transparent.
          "&:hover": y ? { bgcolor: m, color: R } : {
            bgcolor: O ? m : "transparent"
          },
          ...Ht
        },
        children: [
          y ? /* @__PURE__ */ e(
            x,
            {
              sx: {
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                "& .MuiSvgIcon-root": {
                  fontSize: Tr
                }
              },
              children: i.icon
            }
          ) : i.icon,
          y ? /* @__PURE__ */ e(
            Ve,
            {
              text: i.text,
              variant: "caption",
              center: !0,
              fontSize: _r
            }
          ) : null,
          /* @__PURE__ */ e(mn, { open: F, size: hn })
        ]
      }
    ), oe = y ? W : /* @__PURE__ */ e(ve, { title: i.text, placement: "right", arrow: !0, children: W });
    return /* @__PURE__ */ h(
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
          bgcolor: S ? K : "transparent",
          ...y ? {} : { "&:hover": { bgcolor: K } }
        },
        children: [
          oe,
          F ? Jr(i.subitems, i.icon).map(
            ({ sub: G, icon: Z }) => Le(
              G.path,
              G.text,
              Z,
              He(G, o),
              () => ce(G.path),
              {
                insideGroup: !0,
                testId: `sidebar-subitem-${G.text}`
              }
            )
          ) : null
        ]
      },
      i.text
    );
  }, ye = (i) => /* @__PURE__ */ e(
    x,
    {
      sx: {
        width: "100%",
        display: "flex",
        justifyContent: "center"
      },
      children: Le(
        i.text,
        i.text,
        i.icon,
        He(i, o),
        i.path ? () => ce(i.path) : void 0
      )
    },
    i.text
  ), q = (i) => lt(i) ? _ ? Ae(i) : Te(i) : _ ? ye(i) : L(i), we = (i) => /* @__PURE__ */ e(
    se,
    {
      spacing: 0.5,
      sx: {
        width: "100%",
        alignItems: _ ? "center" : "stretch"
      },
      children: i.map(q)
    }
  ), J = _ ? C : A, ge = d ? /* @__PURE__ */ e(
    x,
    {
      "data-testid": "sidebar-header",
      sx: {
        height: Or,
        minHeight: Or,
        flexShrink: 0,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        bgcolor: me
      },
      children: u || s ? /* @__PURE__ */ e(
        wt,
        {
          logo: u,
          title: _ ? void 0 : s,
          appName: s || "App",
          onClick: l,
          color: v ?? H,
          testId: "sidebar-header-brand"
        }
      ) : null
    }
  ) : null, ue = !d && u ? /* @__PURE__ */ e(
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
        wt,
        {
          logo: u,
          appName: s || "App",
          onClick: l,
          color: v ?? H,
          testId: "sidebar-header-brand"
        }
      )
    }
  ) : null, Q = y ? 0.5 : _ ? 1 : 1.5;
  return /* @__PURE__ */ h(
    x,
    {
      component: "nav",
      "aria-label": "Main sidebar",
      "data-testid": "collapsible-sidebar",
      "data-collapsed": _ ? "true" : "false",
      "data-labeled": y ? "true" : "false",
      sx: {
        width: J,
        minWidth: J,
        height: "100%",
        boxSizing: "border-box",
        bgcolor: ke,
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
        ge ?? ue,
        B ? /* @__PURE__ */ e(
          x,
          {
            sx: { flexShrink: 0, px: Q, pt: 1, pb: 1 },
            children: B
          }
        ) : null,
        /* @__PURE__ */ h(
          x,
          {
            sx: {
              flex: "1 1 auto",
              minHeight: 0,
              display: "flex",
              flexDirection: "column",
              overflowY: "auto",
              overflowX: "hidden",
              px: Q,
              pt: $ && !d ? `${$}px` : 1,
              pb: 2
            },
            children: [
              we(t),
              r.length > 0 ? /* @__PURE__ */ h(x, { sx: { mt: "auto", pt: 2 }, children: [
                k ? null : /* @__PURE__ */ e(Ce, { sx: { mb: 1, borderColor: "divider" } }),
                we(r)
              ] }) : null
            ]
          }
        ),
        k ? /* @__PURE__ */ e(x, { sx: { flexShrink: 0, px: Q, pb: 1.5 }, children: /* @__PURE__ */ e(
          x,
          {
            sx: {
              borderTop: `1px solid ${xe}`,
              pt: 1.5
            },
            children: k
          }
        ) }) : null
      ]
    }
  );
}, Vt = "var(--lumora-content-padding, 0px)", Dr = `calc(${Vt} * -1)`, sa = ({
  children: t,
  flushTop: r = !0,
  sticky: o = !1,
  background: n = "background.paper",
  divider: a = !0,
  inset: u = !0,
  sx: s
}) => /* @__PURE__ */ e(
  x,
  {
    "data-testid": "full-bleed-section",
    sx: [
      {
        mx: Dr,
        mt: r ? Dr : 0,
        // Space below it, like any other block on the page
        mb: Vt,
        px: u ? Vt : 0,
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
    children: t
  }
), xn = ({ keys: t }) => /* @__PURE__ */ e(
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
const P = {
  STORAGE_ACCESS_DENIED: "STORAGE_ACCESS_DENIED",
  TOKEN_NOT_FOUND: "TOKEN_NOT_FOUND",
  TOKEN_INVALID: "TOKEN_INVALID",
  TOKEN_EXPIRED: "TOKEN_EXPIRED",
  LOGOUT_FAILED: "LOGOUT_FAILED",
  UNKNOWN_ERROR: "UNKNOWN_ERROR"
}, V = {
  ACCESS_TOKEN: "lumoraAccessToken",
  REFRESH_TOKEN: "lumoraRefreshToken",
  USER: "lumoraUser"
}, Ne = {
  ACCESS_TOKEN: "accessToken",
  REFRESH_TOKEN: "refreshToken",
  USER: "user"
}, gn = () => {
  if (!(typeof window > "u" || !window.localStorage))
    try {
      const t = localStorage.getItem(
        Ne.ACCESS_TOKEN
      ), r = localStorage.getItem(
        Ne.REFRESH_TOKEN
      ), o = localStorage.getItem(Ne.USER);
      t && !localStorage.getItem(V.ACCESS_TOKEN) && localStorage.setItem(V.ACCESS_TOKEN, t), r && !localStorage.getItem(V.REFRESH_TOKEN) && localStorage.setItem(
        V.REFRESH_TOKEN,
        r
      ), o && !localStorage.getItem(V.USER) && localStorage.setItem(V.USER, o), (t || r || o) && (localStorage.removeItem(Ne.ACCESS_TOKEN), localStorage.removeItem(Ne.REFRESH_TOKEN), localStorage.removeItem(Ne.USER));
    } catch (t) {
      console.warn("Failed to migrate legacy localStorage keys:", t);
    }
}, Ft = (t) => {
  try {
    if (typeof window > "u")
      return console.warn("localStorage access attempted on server side"), null;
    if (!window.localStorage)
      throw new M(
        "localStorage is not available",
        P.STORAGE_ACCESS_DENIED
      );
    return window.localStorage.getItem(t);
  } catch (r) {
    throw r.name === "QuotaExceededError" ? (console.error("Storage quota exceeded"), new M(
      "Storage quota exceeded. Please clear browser data.",
      P.STORAGE_ACCESS_DENIED,
      r
    )) : r.name === "SecurityError" ? (console.error(
      "localStorage access denied (private browsing or security settings)"
    ), new M(
      "Access to localStorage is denied. Please check browser settings.",
      P.STORAGE_ACCESS_DENIED,
      r
    )) : (console.error(
      "Unexpected error accessing localStorage:",
      r.name
    ), new M(
      "Failed to access storage",
      P.STORAGE_ACCESS_DENIED,
      r
    ));
  }
}, Pt = (t, r) => {
  try {
    if (typeof window > "u")
      return console.warn("localStorage write attempted on server side"), !1;
    if (!window.localStorage)
      throw new M(
        "localStorage is not available",
        P.STORAGE_ACCESS_DENIED
      );
    return window.localStorage.setItem(t, r), !0;
  } catch (o) {
    throw o.name === "QuotaExceededError" ? (console.error("Storage quota exceeded"), new M(
      "Storage quota exceeded. Please clear browser data.",
      P.STORAGE_ACCESS_DENIED,
      o
    )) : o.name === "SecurityError" ? (console.error(
      "localStorage write denied (private browsing or security settings)"
    ), new M(
      "Access to localStorage is denied. Please check browser settings.",
      P.STORAGE_ACCESS_DENIED,
      o
    )) : (console.error(
      "Unexpected error writing to localStorage:",
      o.name
    ), new M(
      "Failed to write to storage",
      P.STORAGE_ACCESS_DENIED,
      o
    ));
  }
}, eo = (t) => {
  try {
    return typeof window > "u" ? (console.warn("localStorage removal attempted on server side"), !1) : window.localStorage ? (window.localStorage.removeItem(t), !0) : (console.warn("localStorage is not available"), !1);
  } catch (r) {
    return r.name !== "SecurityError" && console.warn(`Could not remove localStorage key "${t}"`), !1;
  }
}, ct = () => {
  try {
    gn();
    const t = Ft(V.ACCESS_TOKEN), r = Ft(V.REFRESH_TOKEN), o = Ft(V.USER);
    let n = null;
    if (o)
      try {
        n = JSON.parse(o);
      } catch {
        o && o !== "null" && o !== "undefined" && console.warn(
          "Invalid user data in localStorage, clearing:",
          o.substring(0, 50)
        ), eo(V.USER);
      }
    return {
      accessToken: t,
      refreshToken: r,
      user: n
    };
  } catch (t) {
    throw t instanceof M ? t : new M(
      "Failed to retrieve authentication tokens",
      P.UNKNOWN_ERROR,
      t
    );
  }
}, bn = () => {
  try {
    const { accessToken: t, refreshToken: r } = ct();
    return !(t || r) ? {
      isAuthenticated: !1,
      error: new M(
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
      error: t instanceof M ? t : new M(
        "Authentication check failed",
        P.UNKNOWN_ERROR,
        t
      )
    };
  }
}, to = (t, r, o = null) => {
  try {
    if (!t && !r)
      throw new M(
        "At least one token must be provided",
        P.TOKEN_INVALID
      );
    return t && Pt(V.ACCESS_TOKEN, t), r && Pt(V.REFRESH_TOKEN, r), o && Pt(V.USER, JSON.stringify(o)), {
      success: !0,
      error: null
    };
  } catch (n) {
    return console.error("Failed to store authentication tokens:", n), {
      success: !1,
      error: n instanceof M ? n : new M(
        "Failed to store tokens",
        P.UNKNOWN_ERROR,
        n
      )
    };
  }
}, dt = () => {
  try {
    return [
      V.ACCESS_TOKEN,
      V.REFRESH_TOKEN,
      V.USER,
      // Also clear legacy keys for complete cleanup
      Ne.ACCESS_TOKEN,
      Ne.REFRESH_TOKEN,
      Ne.USER
    ].map((n) => eo(n)).every((n) => n) || console.warn("Some tokens could not be removed from localStorage"), {
      success: !0,
      error: null
    };
  } catch (t) {
    return console.error("Failed to clear authentication tokens:", t), {
      success: !1,
      error: t instanceof M ? t : new M(
        "Failed to clear tokens",
        P.LOGOUT_FAILED,
        t
      )
    };
  }
}, Sn = () => {
  try {
    const { user: t } = ct();
    return {
      user: t,
      error: null
    };
  } catch (t) {
    return console.error("Failed to get current user:", t), {
      user: null,
      error: t instanceof M ? t : new M(
        "Failed to retrieve user data",
        P.UNKNOWN_ERROR,
        t
      )
    };
  }
}, la = (t) => {
  if (!(t instanceof M))
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
}, Yt = (t, r = "Unknown") => {
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
}, vn = (t) => {
  if (!t)
    throw new Error("API base URL is required to create axios client");
  const r = Ir.create({
    baseURL: t,
    headers: {
      "Content-Type": "application/json"
    }
  });
  let o = !1, n = null, a = [];
  const u = (s, l) => {
    a.forEach(({ resolve: d, reject: c }) => {
      s ? c(s) : l && d(l);
    }), a = [];
  };
  return r.interceptors.request.use(
    (s) => {
      const { accessToken: l } = ct();
      return l && s.headers && (s.headers.Authorization = `Bearer ${l}`), s;
    },
    (s) => Promise.reject(s)
  ), r.interceptors.response.use(
    (s) => s,
    async (s) => {
      var m;
      const l = s.config, d = (m = s.response) == null ? void 0 : m.status, c = (l == null ? void 0 : l.url) || "", f = c.includes("/auth/refresh");
      if (d !== 401 || l._retry || f)
        return Promise.reject(s);
      l._retry = !0;
      const { refreshToken: v } = ct();
      if (!v) {
        const g = new Error(
          "No refresh token available for token refresh"
        );
        return Yt(g, "AxiosClient - Token Refresh"), dt(), typeof window < "u" && (window.location.href = "/login"), Promise.reject(s);
      }
      if (o && n)
        return new Promise((g, I) => {
          a.push({ resolve: g, reject: I });
        }).then((g) => {
          const {
            accessToken: I,
            refreshToken: b
          } = g;
          if (l.headers && (l.headers.Authorization = `Bearer ${I}`), c.includes("/auth/logout"))
            try {
              if (typeof l.data == "string") {
                const E = JSON.parse(
                  l.data || "{}"
                );
                E.refresh_token = b, l.data = JSON.stringify(E);
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
      o = !0, n = Ir.post(
        `${t}/auth/refresh`,
        {
          refresh_token: v
        }
      );
      try {
        const g = await n, { accessToken: I, refreshToken: b } = g.data;
        if (to(I, b, null), u(null, {
          accessToken: I,
          refreshToken: b
        }), l.headers && (l.headers.Authorization = `Bearer ${I}`), c.includes("/auth/logout"))
          try {
            if (typeof l.data == "string") {
              const E = JSON.parse(
                l.data || "{}"
              );
              E.refresh_token = b, l.data = JSON.stringify(E);
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
        return Yt(
          g,
          "AxiosClient - Token Refresh Failed"
        ), u(g), dt(), typeof window < "u" && (window.location.href = "/login"), Promise.reject(g);
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
}, pe = {
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
}, Ye = {
  300: "hsl(120, 61%, 77%)",
  400: "hsl(120, 44%, 53%)",
  500: "hsl(120, 59%, 30%)",
  700: "hsl(120, 75%, 16%)",
  800: "hsl(120, 84%, 10%)"
}, qe = {
  300: "hsl(45, 90%, 65%)",
  400: "hsl(45, 90%, 40%)",
  500: "hsl(45, 90%, 35%)",
  700: "hsl(45, 94%, 20%)",
  800: "hsl(45, 95%, 16%)"
}, Je = {
  300: "hsl(0, 90%, 65%)",
  400: "hsl(0, 90%, 40%)",
  500: "hsl(0, 90%, 30%)",
  700: "hsl(0, 94%, 18%)",
  800: "hsl(0, 95%, 12%)"
}, ro = $r(), be = ro.typography.pxToRem, En = (t) => {
  const r = t === "dark", o = [...ro.shadows];
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
        contrastText: pe[50]
      },
      warning: r ? { light: qe[400], main: qe[500], dark: qe[700] } : { light: qe[300], main: qe[400], dark: qe[800] },
      error: r ? { light: Je[400], main: Je[500], dark: Je[700] } : { light: Je[300], main: Je[400], dark: Je[800] },
      success: r ? { light: Ye[400], main: Ye[500], dark: Ye[700] } : { light: Ye[300], main: Ye[400], dark: Ye[800] },
      grey: pe,
      divider: r ? Fe(pe[700], 0.6) : Fe(pe[300], 0.4),
      background: r ? { default: pe[900], paper: "hsl(220, 30%, 7%)" } : { default: "hsl(0, 0%, 99%)", paper: "hsl(220, 35%, 97%)" },
      text: r ? { primary: "hsl(0, 0%, 100%)", secondary: pe[400] } : { primary: pe[800], secondary: pe[600] },
      action: r ? {
        hover: Fe(pe[600], 0.2),
        selected: Fe(pe[600], 0.3)
      } : {
        hover: Fe(pe[200], 0.2),
        selected: Fe(pe[200], 0.3)
      }
    },
    typography: {
      fontFamily: "Inter, sans-serif",
      h1: {
        fontSize: be(48),
        fontWeight: 600,
        lineHeight: 1.2,
        letterSpacing: -0.5
      },
      h2: { fontSize: be(36), fontWeight: 600, lineHeight: 1.2 },
      h3: { fontSize: be(30), lineHeight: 1.2 },
      h4: { fontSize: be(24), fontWeight: 600, lineHeight: 1.5 },
      h5: { fontSize: be(20), fontWeight: 600 },
      h6: { fontSize: be(18), fontWeight: 600 },
      subtitle1: { fontSize: be(18) },
      subtitle2: { fontSize: be(14), fontWeight: 500 },
      body1: { fontSize: be(14) },
      body2: { fontSize: be(14), fontWeight: 400 },
      caption: { fontSize: be(12), fontWeight: 400 }
    },
    shape: {
      borderRadius: 8
    },
    shadows: o
  };
}, yn = async (t, r) => {
  const { accessToken: o, refreshToken: n } = ct();
  if (o)
    return !0;
  if (n)
    try {
      const a = await t.post("/auth/refresh", {
        refresh_token: n
      });
      if (a.data.success && a.data.accessToken)
        return to(
          a.data.accessToken,
          a.data.refreshToken || null,
          null
        ), !0;
    } catch (a) {
      Yt(a, "TokenValidator - Refresh Failed");
    }
  return dt(), r ? r() : window.location.href = "/login", !1;
}, yt = ({ size: t = 20 }) => /* @__PURE__ */ h(
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
), Qe = "#09C1AE", $t = (t, r) => ({
  position: "relative",
  overflow: "hidden",
  "&::before": {
    content: '""',
    position: "absolute",
    inset: "-50%",
    background: `conic-gradient(from 0deg, rgba(9, 193, 174, 0.25) 0deg 250deg, ${Qe} 300deg, #0DD4BF 330deg, rgba(9, 193, 174, 0.25) 360deg)`,
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
}), Nr = ({
  variant: t,
  onClick: r,
  active: o = !1,
  busy: n = !1,
  shortcutKeys: a,
  accentColor: u = "#01584f",
  rightOffsetPx: s = 0
}) => {
  const l = a ? `Ask Nexa (${a.join("")})` : "Ask Nexa", d = {
    onClick: r,
    "aria-label": "Ask Nexa",
    "aria-pressed": o,
    "data-testid": "assistant-button"
  };
  return t === "sidebar" ? /* @__PURE__ */ h(
    Ge,
    {
      ...d,
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
        borderColor: o ? Qe : "rgba(9, 193, 174, 0.45)",
        bgcolor: "rgba(9, 193, 174, 0.08)",
        color: u,
        transition: "border-color 150ms, background-color 150ms",
        "&:hover": { bgcolor: "rgba(9, 193, 174, 0.14)" },
        "&.Mui-focusVisible": {
          outline: `2px solid ${Qe}`,
          outlineOffset: 2
        },
        ...n && $t(8, "background.paper")
      },
      children: [
        /* @__PURE__ */ e(yt, { size: 20 }),
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
        a && /* @__PURE__ */ e(xn, { keys: a })
      ]
    }
  ) : t === "sidebar-icon" ? /* @__PURE__ */ e(ve, { title: l, placement: "right", arrow: !0, children: /* @__PURE__ */ e(
    Oe,
    {
      ...d,
      "data-variant": "sidebar-icon",
      sx: {
        width: 44,
        height: 44,
        borderRadius: "8px",
        border: "1px solid",
        borderColor: o ? Qe : "rgba(9, 193, 174, 0.45)",
        bgcolor: "rgba(9, 193, 174, 0.08)",
        "&:hover": { bgcolor: "rgba(9, 193, 174, 0.14)" },
        ...n && $t(8, "background.paper")
      },
      children: /* @__PURE__ */ e(yt, { size: 20 })
    }
  ) }) : /* @__PURE__ */ e(ve, { title: l, placement: "left", children: /* @__PURE__ */ e(
    Oe,
    {
      ...d,
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
        outline: o ? `2px solid ${Qe}` : "none",
        outlineOffset: 2,
        "&:hover": { bgcolor: "background.paper", boxShadow: 6 },
        "&.Mui-focusVisible": { outline: `2px solid ${Qe}` },
        ...n && $t(16, "background.paper")
      },
      children: /* @__PURE__ */ e(x, { sx: { display: "flex", alignItems: "center" }, children: /* @__PURE__ */ e(yt, { size: 26 }) })
    }
  ) });
}, vt = ({
  title: t = "",
  message: r = "",
  buttonText: o = "",
  onButtonClick: n,
  show: a = !0
}) => a ? /* @__PURE__ */ e(Fo, { variant: "outlined", sx: { m: 1.5, flexShrink: 0 }, children: /* @__PURE__ */ h(Po, { children: [
  /* @__PURE__ */ e($o, { fontSize: "small" }),
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
    Ur,
    {
      variant: "contained",
      size: "small",
      fullWidth: !0,
      onClick: n,
      children: o
    }
  )
] }) }) : null, at = 24, wn = 720, Rn = 1140, In = 1250, Cn = ({
  open: t,
  children: r,
  variant: o,
  position: n,
  width: a,
  sidebarWidthPx: u,
  bottomOffsetPx: s,
  fullScreen: l,
  fullScreenBottom: d = "0px",
  onClose: c
}) => {
  p.useEffect(() => {
    if (!t || !c)
      return;
    const I = (b) => {
      b.key === "Escape" && c();
    };
    return window.addEventListener("keydown", I), () => window.removeEventListener("keydown", I);
  }, [t, c]);
  const f = o === "docked", v = at + s;
  let m;
  l ? m = {
    top: 0,
    left: 0,
    right: 0,
    bottom: d,
    borderRadius: 0
  } : f ? m = {
    top: 0,
    right: 0,
    bottom: 0,
    width: a,
    maxWidth: "100vw",
    borderRadius: 0,
    borderWidth: "0 0 0 1px"
  } : m = {
    bottom: v,
    ...n === "left" ? { left: u + at } : { right: at },
    width: a,
    maxWidth: `calc(100vw - ${at * 2}px)`,
    height: `min(${wn}px, calc(100vh - ${v + at}px))`,
    borderRadius: "12px"
  };
  const g = /* @__PURE__ */ e(
    qt,
    {
      role: f ? "complementary" : "dialog",
      "aria-label": "Nexa chat",
      "data-testid": "chat-panel",
      "data-variant": o,
      elevation: 8,
      sx: {
        position: "fixed",
        zIndex: f ? Rn : In,
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
  return f ? /* @__PURE__ */ e(Ko, { direction: "left", in: t, mountOnEnter: !0, children: g }) : /* @__PURE__ */ e(
    Uo,
    {
      in: t,
      mountOnEnter: !0,
      style: {
        transformOrigin: n === "left" ? "bottom left" : "bottom right"
      },
      children: g
    }
  );
}, On = 180, Wr = 250, _n = "#01584F", Tn = ({
  text: t,
  testId: r
}) => {
  const o = p.useRef(null), [n, a] = p.useState(!1), u = p.useCallback(() => {
    const s = o.current;
    s && a(s.scrollWidth > s.clientWidth + 0.5);
  }, []);
  return p.useLayoutEffect(() => {
    u();
  }, [u, t]), p.useEffect(() => {
    const s = o.current;
    if (!s)
      return;
    const l = new ResizeObserver(() => u());
    return l.observe(s), () => l.disconnect();
  }, [u]), /* @__PURE__ */ e(
    ve,
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
}, oo = (t, r, o, n) => {
  const a = t ? 48 : 44, u = t ? "text.secondary" : r, s = t ? _n : r;
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
    color: o ? "#ffffff" : u,
    backgroundColor: o ? s : "transparent",
    "&:hover": {
      backgroundColor: o ? s : "action.hover",
      borderRadius: "4px",
      color: o ? "#ffffff" : u
    }
  } : {
    width: a,
    height: a,
    color: o ? "#ffffff" : u,
    backgroundColor: o ? s : "transparent",
    borderRadius: o ? "4px" : "50%",
    "&:hover": {
      backgroundColor: o ? s : "action.hover",
      borderRadius: "4px"
    }
  } };
}, no = ({ link: t }) => /* @__PURE__ */ h(se, { alignItems: "center", spacing: 1, sx: { width: "100%" }, children: [
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
    Tn,
    {
      text: t.text,
      testId: `rail-item-caption-${t.text}`
    }
  )
] }), io = (t, r, o) => o ? t : /* @__PURE__ */ e(ve, { title: r, placement: "right", arrow: !0, children: t }), An = ({
  link: t,
  activePath: r,
  onLinkClick: o,
  accentColor: n,
  isSecondary: a,
  surfaceBackgroundColor: u,
  railShowTitles: s
}) => {
  const l = It(), [d, c] = p.useState(null), [f, v] = p.useState(!1), m = p.useRef(
    null
  ), g = p.useRef(null), I = p.useRef(null), b = p.useRef(!1), E = p.useRef(!1), _ = p.useId(), A = () => {
    m.current && (clearTimeout(m.current), m.current = null);
  }, C = () => {
    A(), m.current = setTimeout(() => {
      v(!1), m.current = null;
    }, On);
  }, y = () => {
    A(), v(!0);
  };
  p.useEffect(() => {
    if (!f)
      return;
    const D = (U) => {
      var R;
      U.key === "Escape" && (v(!1), (R = I.current) == null || R.focus());
    };
    return document.addEventListener("keydown", D), () => document.removeEventListener("keydown", D);
  }, [f]), p.useEffect(() => {
    if (!f || !E.current)
      return;
    const D = globalThis.requestAnimationFrame(() => {
      var R;
      const U = (R = g.current) == null ? void 0 : R.querySelector(
        '[role="menuitem"]'
      );
      U == null || U.focus(), E.current = !1;
    });
    return () => cancelAnimationFrame(D);
  }, [f]);
  const $ = Ke(t, r), { activeBg: B, sx: k } = oo(
    a,
    n,
    $,
    s
  ), le = /* @__PURE__ */ e(
    Oe,
    {
      ref: I,
      component: t.path ? "a" : "button",
      href: t.path || void 0,
      "aria-label": t.text,
      onFocus: () => {
        b.current || y();
      },
      onBlur: (D) => {
        var R;
        const U = D.relatedTarget;
        U && ((R = g.current) != null && R.contains(U)) || C();
      },
      onKeyDown: (D) => {
        D.key === "ArrowDown" && (D.preventDefault(), E.current = !0, y());
      },
      onClick: (D) => {
        D.preventDefault(), D.stopPropagation(), t.path && (o == null || o(t.path));
      },
      "aria-haspopup": "menu",
      "aria-expanded": f,
      "aria-controls": f ? _ : void 0,
      "data-testid": `rail-submenu-trigger-${t.text}`,
      sx: k,
      children: s ? /* @__PURE__ */ e(no, { link: t }) : t.icon
    }
  );
  return /* @__PURE__ */ h(
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
            ref: c,
            "data-testid": `rail-submenu-anchor-${t.text}`,
            sx: { display: "inline-flex", maxWidth: "100%" },
            onMouseEnter: () => {
              b.current = !0, y();
            },
            onMouseLeave: () => {
              b.current = !1, C();
            },
            children: io(le, t.text, s)
          }
        ),
        /* @__PURE__ */ e(
          jo,
          {
            open: f && !!d,
            anchorEl: d,
            placement: "right-start",
            modifiers: [{ name: "offset", options: { offset: [8, 0] } }],
            sx: { zIndex: (D) => D.zIndex.modal },
            children: /* @__PURE__ */ e(
              qt,
              {
                ref: g,
                elevation: 0,
                onMouseEnter: A,
                onMouseLeave: C,
                "data-testid": `rail-submenu-panel-${t.text}`,
                sx: {
                  bgcolor: u,
                  backgroundImage: "none",
                  borderRadius: "4px",
                  border: "1px solid",
                  borderColor: "divider",
                  boxShadow: l.shadows[8],
                  maxWidth: Wr,
                  minWidth: 0,
                  py: 0.5,
                  boxSizing: "border-box"
                },
                children: /* @__PURE__ */ e(
                  Ct,
                  {
                    id: _,
                    dense: !0,
                    autoFocus: !1,
                    role: "menu",
                    sx: {
                      bgcolor: "transparent",
                      py: 0,
                      maxWidth: Wr
                    },
                    children: Y(t.subitems, t.text, 0)
                  }
                )
              }
            )
          }
        )
      ]
    }
  );
  function Y(D, U, R) {
    return D.flatMap((N) => {
      const ee = Et(U, N);
      return lt(N) ? [
        /* @__PURE__ */ e(
          Go,
          {
            disableSticky: !0,
            title: N.text,
            sx: {
              bgcolor: "transparent",
              lineHeight: "28px",
              pl: 2 + R * 1.5,
              fontSize: "0.7rem",
              letterSpacing: "0.06em",
              textTransform: "uppercase",
              color: "text.secondary",
              overflow: "hidden",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap"
            },
            children: N.text
          },
          ee
        ),
        ...Y(N.subitems, ee, R + 1)
      ] : [
        /* @__PURE__ */ h(
          Se,
          {
            role: "menuitem",
            title: N.text,
            disabled: !N.path,
            selected: He(N, r),
            onClick: (K) => {
              K.preventDefault(), N.path && (o == null || o(N.path)), v(!1);
            },
            sx: {
              borderRadius: "4px",
              mx: 0.5,
              my: 0.125,
              pl: 2 + R * 1.5,
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
              N.icon ? /* @__PURE__ */ e(ae, { children: N.icon }) : null,
              /* @__PURE__ */ e(
                We,
                {
                  primary: N.text,
                  primaryTypographyProps: {
                    noWrap: !0
                  }
                }
              )
            ]
          },
          ee
        )
      ];
    });
  }
}, Dn = ({
  link: t,
  activePath: r,
  onLinkClick: o,
  accentColor: n,
  isSecondary: a,
  railShowTitles: u
}) => {
  const s = !!(t.path && r === t.path), { sx: l } = oo(
    a,
    n,
    s,
    u
  );
  return io(
    /* @__PURE__ */ e(
      Oe,
      {
        component: t.path ? "a" : "button",
        href: t.path || void 0,
        "aria-label": t.text,
        onClick: (d) => {
          d.preventDefault(), d.stopPropagation(), t.path && (o == null || o(t.path));
        },
        disabled: !t.path,
        sx: l,
        children: u ? /* @__PURE__ */ e(no, { link: t }) : t.icon
      }
    ),
    t.text,
    u
  );
}, Nn = () => /* @__PURE__ */ e(
  x,
  {
    sx: {
      width: "100%",
      display: "flex",
      justifyContent: "center"
    },
    children: /* @__PURE__ */ e(Ce, { sx: { width: "60%", borderColor: "divider" } })
  }
), Wn = () => /* @__PURE__ */ e(
  x,
  {
    sx: {
      width: "100%",
      my: 2,
      display: "flex",
      justifyContent: "center"
    },
    children: /* @__PURE__ */ e(Ce, { sx: { width: "60%", borderColor: "divider" } })
  }
), kr = (t, r) => t.map((o, n) => /* @__PURE__ */ h(p.Fragment, { children: [
  r(o, n),
  n < t.length - 1 ? /* @__PURE__ */ e(Nn, {}) : null
] }, n)), kn = ({
  mainLinks: t,
  secondaryLinks: r = [],
  activePath: o,
  onLinkClick: n,
  accentColor: a = "#01584f",
  surfaceBackgroundColor: u,
  railShowTitles: s = !1
}) => {
  const l = (c, f) => lt(c) ? /* @__PURE__ */ e(
    An,
    {
      link: c,
      activePath: o,
      onLinkClick: n,
      accentColor: a,
      isSecondary: f,
      surfaceBackgroundColor: u,
      railShowTitles: s
    }
  ) : /* @__PURE__ */ e(
    Dn,
    {
      link: c,
      activePath: o,
      onLinkClick: n,
      accentColor: a,
      isSecondary: f,
      railShowTitles: s
    }
  ), d = s ? 1.25 : 1;
  return /* @__PURE__ */ h(
    se,
    {
      sx: {
        flexGrow: 1,
        width: "100%",
        boxSizing: "border-box",
        justifyContent: "flex-start",
        alignItems: "center",
        pt: 2,
        gap: d
      },
      children: [
        kr(t, (c) => l(c, !1)),
        r.length > 0 ? /* @__PURE__ */ h(Pe, { children: [
          /* @__PURE__ */ e(Wn, {}),
          /* @__PURE__ */ e(x, { sx: { mt: "auto", pb: 2 }, children: /* @__PURE__ */ e(se, { gap: d, alignItems: "center", children: kr(
            r,
            (c) => l(c, !0)
          ) }) })
        ] }) : null
      ]
    }
  );
}, Ln = (t) => t ? Qr(t) : "USER", zn = (t) => t.split(/\s+/).filter(Boolean).slice(0, 2).map((r) => r.charAt(0).toUpperCase()).join(""), Lr = {
  overflow: "hidden",
  textOverflow: "ellipsis",
  whiteSpace: "nowrap",
  maxWidth: "100%"
}, zr = ({ count: t }) => t ? /* @__PURE__ */ e(
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
) : null, Jt = ({ name: t, avatar: r, color: o, size: n = 36 }) => /* @__PURE__ */ e(
  Xo,
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
    children: zn(t)
  }
), ao = ({ name: t, role: r, avatar: o, avatarColor: n, showText: a }) => /* @__PURE__ */ h(Pe, { children: [
  /* @__PURE__ */ e(Jt, { name: t, avatar: o, color: n }),
  a && /* @__PURE__ */ h(
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
            children: Ln(r)
          }
        )
      ]
    }
  )
] }), Mr = {
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
}, so = ({
  anchorEl: t,
  onClose: r,
  placement: o,
  width: n,
  avatarColor: a,
  showNotifications: u,
  notificationCount: s,
  onNotificationsClick: l,
  userName: d = "User",
  userRole: c,
  userAvatar: f,
  menuItems: v = [],
  showSettings: m,
  onSettingsClick: g,
  showThemeToggler: I,
  theme: b,
  onThemeToggle: E,
  onLogout: _
}) => {
  const A = (C) => () => {
    r(), C == null || C();
  };
  return /* @__PURE__ */ h(
    Vo,
    {
      anchorEl: t,
      open: !!t,
      onClose: r,
      anchorOrigin: Mr[o].anchor,
      transformOrigin: Mr[o].transform,
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
              ao,
              {
                name: d,
                role: c,
                avatar: f,
                avatarColor: a,
                showText: !0
              }
            )
          }
        ),
        /* @__PURE__ */ e(Ce, {}),
        u && /* @__PURE__ */ h(Se, { onClick: A(l), children: [
          /* @__PURE__ */ e(ae, { children: /* @__PURE__ */ e(Xr, { fontSize: "small" }) }),
          /* @__PURE__ */ e(We, { children: "Notifications" }),
          /* @__PURE__ */ e(zr, { count: s })
        ] }),
        v.map((C) => /* @__PURE__ */ h(Se, { onClick: A(C.onClick), children: [
          C.icon && /* @__PURE__ */ e(ae, { children: C.icon }),
          /* @__PURE__ */ e(We, { inset: !C.icon, children: C.label }),
          /* @__PURE__ */ e(zr, { count: C.badge })
        ] }, C.key)),
        m && /* @__PURE__ */ h(Se, { onClick: A(g), children: [
          /* @__PURE__ */ e(ae, { children: /* @__PURE__ */ e(Vr, { fontSize: "small" }) }),
          /* @__PURE__ */ e(We, { children: "Settings" })
        ] }),
        I && [
          /* @__PURE__ */ e(Ce, {}, "theme-divider"),
          /* @__PURE__ */ h(x, { sx: { px: 1.5, py: 1 }, children: [
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
            /* @__PURE__ */ h(
              Yo,
              {
                exclusive: !0,
                fullWidth: !0,
                size: "small",
                "aria-label": "Theme",
                value: b,
                onChange: (C, y) => y && y !== b && (E == null ? void 0 : E()),
                disabled: !E,
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
                  /* @__PURE__ */ e(Cr, { value: "light", children: "Light" }),
                  /* @__PURE__ */ e(Cr, { value: "dark", children: "Dark" })
                ]
              }
            )
          ] }, "theme")
        ],
        /* @__PURE__ */ e(Ce, {}),
        /* @__PURE__ */ h(
          Se,
          {
            onClick: A(_),
            sx: {
              color: b === "dark" ? "hsl(0, 90%, 65%)" : "error.main"
            },
            children: [
              /* @__PURE__ */ e(ae, { sx: { color: "inherit" }, children: /* @__PURE__ */ e(jr, { fontSize: "small" }) }),
              /* @__PURE__ */ e(We, { children: "Log out" })
            ]
          }
        )
      ]
    }
  );
}, lo = 64, Mn = 2, st = ({
  label: t,
  icon: r,
  onClick: o,
  active: n,
  color: a,
  activeColor: u,
  activeBackground: s,
  ariaLabel: l,
  haspopup: d,
  isPage: c = !1,
  testId: f
}) => /* @__PURE__ */ h(
  Ge,
  {
    onClick: o,
    "aria-label": l ?? t,
    "aria-haspopup": d,
    "aria-expanded": d ? n : void 0,
    "aria-current": c && n ? "page" : void 0,
    "data-testid": f,
    sx: {
      flex: "1 1 0",
      minWidth: 0,
      height: "100%",
      flexDirection: "column",
      gap: 0.25,
      color: n ? u : a,
      "&.Mui-focusVisible": {
        outline: "2px solid",
        outlineColor: u,
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
), Bn = ({
  onMenuClick: t,
  menuOpen: r,
  onSearchClick: o,
  searchOpen: n,
  showAssistant: a,
  onAssistantClick: u,
  assistantActive: s,
  showProfile: l,
  background: d,
  color: c,
  activeColor: f,
  activeBackground: v,
  pinnedLinks: m = [],
  activePath: g,
  onLinkClick: I,
  ...b
}) => {
  const E = m.filter((k) => k.path).slice(0, Mn), [_, A] = p.useState(
    null
  ), { userName: C = "User", userAvatar: y, avatarColor: $ } = b, B = { color: c, activeColor: f, activeBackground: v };
  return /* @__PURE__ */ h(
    qt,
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
        height: `calc(${lo}px + env(safe-area-inset-bottom, 0px))`,
        pb: "env(safe-area-inset-bottom, 0px)",
        bgcolor: d,
        borderTop: "1px solid",
        borderColor: "divider"
      },
      children: [
        t && /* @__PURE__ */ e(
          st,
          {
            label: "Menu",
            icon: /* @__PURE__ */ e(Kr, {}),
            onClick: t,
            active: r,
            haspopup: "dialog",
            testId: "mobile-nav-menu",
            ...B
          }
        ),
        E.map((k) => /* @__PURE__ */ e(
          st,
          {
            label: k.text,
            icon: k.icon,
            onClick: () => I == null ? void 0 : I(k.path),
            active: Ke(k, g),
            isPage: !0,
            testId: `mobile-nav-link-${k.text}`,
            ...B
          },
          k.path
        )),
        a && /* @__PURE__ */ e(
          st,
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
                children: /* @__PURE__ */ e(yt, { size: 18 })
              }
            ),
            onClick: u,
            active: s,
            testId: "mobile-nav-nexa",
            ...B
          }
        ),
        o && /* @__PURE__ */ e(
          st,
          {
            label: "Search",
            icon: /* @__PURE__ */ e(Gr, {}),
            onClick: o,
            active: n,
            haspopup: "dialog",
            testId: "mobile-nav-search",
            ...B
          }
        ),
        l && /* @__PURE__ */ h(Pe, { children: [
          /* @__PURE__ */ e(
            st,
            {
              label: "Account",
              ariaLabel: `Account menu for ${C}`,
              icon: /* @__PURE__ */ e(
                Jt,
                {
                  name: C,
                  avatar: y,
                  color: $,
                  size: 26
                }
              ),
              onClick: (k) => A(k.currentTarget),
              active: !!_,
              haspopup: "menu",
              testId: "mobile-nav-account",
              ...B
            }
          ),
          /* @__PURE__ */ e(
            so,
            {
              anchorEl: _,
              onClose: () => A(null),
              placement: "above-end",
              width: 280,
              ...b
            }
          )
        ] })
      ]
    }
  );
}, Hn = ({
  open: t,
  onClose: r,
  search: o
}) => /* @__PURE__ */ e(
  qo,
  {
    anchor: "top",
    open: t,
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
      se,
      {
        direction: "row",
        spacing: 1,
        "data-testid": "mobile-search-sheet",
        sx: { alignItems: "center" },
        children: [
          /* @__PURE__ */ e(x, { sx: { flex: "1 1 auto", minWidth: 0 }, children: o }),
          /* @__PURE__ */ e(
            Ur,
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
), Fn = ({
  height: t,
  onMenuClick: r,
  appName: o,
  logo: n,
  onBrandClick: a,
  background: u,
  color: s,
  brandColor: l = s,
  endContent: d
}) => /* @__PURE__ */ e(
  Jo,
  {
    position: "fixed",
    elevation: 0,
    sx: {
      height: t,
      background: u,
      color: s,
      borderBottom: "1px solid",
      borderColor: "divider"
    },
    children: /* @__PURE__ */ h(Zo, { sx: { minHeight: `${t}px !important`, gap: 1, px: 1 }, children: [
      r && /* @__PURE__ */ e(
        Oe,
        {
          "aria-label": "Open navigation menu",
          onClick: r,
          sx: { color: s },
          children: /* @__PURE__ */ e(Kr, {})
        }
      ),
      /* @__PURE__ */ e(
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
      d ? /* @__PURE__ */ e(x, { sx: { ml: "auto", display: "flex", alignItems: "center" }, children: d }) : null
    ] })
  }
), Zt = ({
  count: t,
  onClick: r,
  color: o,
  hoverColor: n,
  tooltipPlacement: a,
  testId: u
}) => {
  const s = t ? `Notifications, ${t} unread` : "Notifications";
  return /* @__PURE__ */ e(ve, { title: s, placement: a, arrow: !0, children: /* @__PURE__ */ e(
    Oe,
    {
      onClick: r,
      "aria-label": s,
      "data-testid": u,
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
        Yr,
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
          children: /* @__PURE__ */ e(Xr, {})
        }
      )
    }
  ) });
}, co = ({
  title: t,
  subtitle: r,
  testId: o,
  width: n,
  sx: a,
  footer: u,
  children: s
}) => {
  const l = p.useId();
  return /* @__PURE__ */ h(
    x,
    {
      role: "dialog",
      "aria-modal": "false",
      "aria-labelledby": l,
      "data-testid": o,
      sx: [
        { width: n, minWidth: n },
        ...Array.isArray(a) ? a : [a]
      ],
      children: [
        /* @__PURE__ */ h(x, { sx: { px: 2, pt: 1.5, pb: 1 }, children: [
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
        u ? /* @__PURE__ */ h(Pe, { children: [
          /* @__PURE__ */ e(Ce, {}),
          u
        ] }) : null
      ]
    }
  );
}, Pn = 5, $n = 56, Un = ({
  platforms: t,
  currentPlatformKey: r,
  onSelect: o,
  accentColor: n,
  tint: a,
  width: u,
  sx: s
}) => /* @__PURE__ */ e(
  co,
  {
    title: "Lumora Platforms",
    subtitle: "Choose where you want to work.",
    testId: "platforms-panel",
    width: u,
    sx: s,
    footer: /* @__PURE__ */ h(
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
          /* @__PURE__ */ e(an, { fontSize: "small" }),
          /* @__PURE__ */ e(z, { variant: "body2", children: "Platforms available to your account" })
        ]
      }
    ),
    children: /* @__PURE__ */ e(
      Ct,
      {
        autoFocusItem: !0,
        "aria-label": "Platforms",
        sx: {
          px: 1,
          py: 0.5,
          maxHeight: Pn * $n,
          overflowY: "auto"
        },
        children: t.map((l) => {
          const d = l.key === r;
          return /* @__PURE__ */ h(
            Se,
            {
              "data-testid": `platform-item-${l.key}`,
              "aria-current": d ? "true" : void 0,
              onClick: () => {
                d || o(l);
              },
              sx: {
                borderRadius: "10px",
                px: 1.5,
                py: 1.25,
                mb: 0.5,
                gap: 1,
                // The current row is inert: keeps its wash on hover
                // and shows no pointer.
                bgcolor: d ? a : "transparent",
                cursor: d ? "default" : "pointer",
                "&:hover": {
                  bgcolor: d ? a : "action.hover"
                }
              },
              children: [
                /* @__PURE__ */ h(x, { sx: { flex: 1, minWidth: 0 }, children: [
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
                d ? /* @__PURE__ */ h(
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
                      /* @__PURE__ */ e(nn, { sx: { fontSize: 16 } })
                    ]
                  }
                ) : /* @__PURE__ */ e(
                  on,
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
), Br = (t) => t.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, ""), Kn = ({
  sections: t,
  onItemClick: r,
  width: o,
  sx: n
}) => {
  const [a, u] = p.useState({}), s = (d) => a[d.title] ?? d.defaultOpen ?? !0, l = (d) => u((c) => ({
    ...c,
    [d.title]: !s(d)
  }));
  return /* @__PURE__ */ e(
    co,
    {
      title: "Settings",
      testId: "settings-panel",
      width: o,
      sx: n,
      children: /* @__PURE__ */ e(
        Ct,
        {
          autoFocusItem: !0,
          "aria-label": "Settings",
          sx: { px: 1, py: 0.5, maxHeight: "60vh", overflowY: "auto" },
          children: t.flatMap((d) => {
            const c = s(d), f = Br(d.title), v = /* @__PURE__ */ h(
              Se,
              {
                onClick: () => l(d),
                "aria-expanded": c,
                "data-testid": `settings-section-${f}`,
                sx: {
                  borderRadius: "8px",
                  py: 0.75,
                  gap: 1,
                  fontWeight: 600
                },
                children: [
                  /* @__PURE__ */ e(x, { component: "span", sx: { flex: 1, minWidth: 0 }, children: d.title }),
                  /* @__PURE__ */ e(
                    sn,
                    {
                      "data-testid": `settings-section-${f}-chevron`,
                      sx: {
                        fontSize: 20,
                        color: "text.secondary",
                        flexShrink: 0,
                        transform: c ? "none" : "rotate(-90deg)",
                        transition: "transform 150ms ease"
                      }
                    }
                  )
                ]
              },
              `section-${d.title}`
            );
            return c ? [
              v,
              ...d.items.map((m) => /* @__PURE__ */ e(
                Se,
                {
                  onClick: () => r(m, d),
                  disabled: m.disabled,
                  "data-testid": `settings-item-${m.key ?? Br(m.text)}`,
                  sx: {
                    borderRadius: "8px",
                    py: 0.75,
                    // Indented under the header, no bullet.
                    pl: 3.5
                  },
                  children: m.text
                },
                `item-${d.title}-${m.key ?? m.text}`
              ))
            ] : [v];
          })
        }
      )
    }
  );
}, Gn = 288, jn = 300, uo = {
  "&:focus, &:focus-visible": { outline: "none" }
}, ho = {
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
  ...ho,
  "@keyframes sub-panel-in": {
    from: { opacity: 0, transform: "translateX(-6px)" },
    to: { opacity: 1, transform: "none" }
  },
  animation: "sub-panel-in 150ms ease-out",
  "@media (prefers-reduced-motion: reduce)": { animation: "none" }
}, Xn = ({ mode: t, onToggle: r, accentColor: o, tint: n }) => {
  const a = p.useRef(null), u = p.useRef(null), s = (c) => {
    var f;
    c !== t && (r == null || r()), (f = (c === "light" ? a : u).current) == null || f.focus();
  }, l = (c) => {
    if (!(c.key === "Tab" || c.key === "Escape"))
      switch (c.stopPropagation(), c.key) {
        case "ArrowLeft":
        case "ArrowRight":
        case "ArrowUp":
        case "ArrowDown":
          c.preventDefault(), s(t === "light" ? "dark" : "light");
          break;
        case "Home":
          c.preventDefault(), s("light");
          break;
        case "End":
          c.preventDefault(), s("dark");
          break;
      }
  }, d = (c, f, v, m) => {
    const g = t === c;
    return /* @__PURE__ */ e(
      Ge,
      {
        ref: m,
        role: "radio",
        "aria-checked": g,
        "aria-label": f,
        tabIndex: g ? 0 : -1,
        onClick: () => s(c),
        "data-testid": `theme-segment-${c}`,
        sx: {
          width: 36,
          height: 26,
          borderRadius: "999px",
          color: g ? o : "text.secondary",
          bgcolor: g ? n : "transparent",
          transition: "background-color 150ms ease, color 150ms ease",
          "&.Mui-focusVisible": {
            boxShadow: `0 0 0 2px ${Fe(o, 0.6)}`
          },
          ...uo
        },
        children: /* @__PURE__ */ e(v, { sx: { fontSize: 18 } })
      }
    );
  };
  return /* @__PURE__ */ h(
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
        d("light", "Light", tn, a),
        d("dark", "Dark", Qo, u)
      ]
    }
  );
}, Vn = ({
  open: t,
  anchorEl: r,
  onClose: o,
  width: n,
  renderAvatar: a,
  userName: u,
  userEmail: s,
  roleLabel: l,
  accentColor: d,
  tint: c,
  showThemeToggler: f,
  theme: v,
  onThemeToggle: m,
  onProfileClick: g,
  showSettings: I,
  onSettingsClick: b,
  settingsSections: E,
  onSettingsItemClick: _,
  onLinkClick: A,
  platforms: C,
  currentPlatformKey: y,
  onPlatformSelect: $,
  onLogout: B
}) => {
  const le = It().palette.mode === "dark", Y = p.useRef(null), [D, U] = p.useState(null), R = p.useRef(null), N = p.useRef(null), ee = p.useRef(null), [K, ke] = p.useState(
    null
  ), [j, me] = p.useState(0), [H, xe] = p.useState(null), ce = !!(C != null && C.length), te = I && !!(E != null && E.length), _e = I && (te || !!b), re = p.useCallback(() => {
    const i = R.current, S = H === "platforms" ? N.current : H === "settings" ? ee.current : null;
    if (!t || !i || !S || !K) {
      me(0);
      return;
    }
    const O = i.getBoundingClientRect(), w = S.getBoundingClientRect().top, F = K.getBoundingClientRect().height, W = O.bottom - (w + F), oe = Math.max(0, O.height - F), G = Math.round(Math.min(Math.max(W, 0), oe));
    me((Z) => Z === G ? Z : G);
  }, [t, H, K]);
  p.useLayoutEffect(() => {
    re();
  }, [re]), p.useEffect(() => {
    if (!D || typeof ResizeObserver > "u")
      return;
    const i = new ResizeObserver(() => {
      var S;
      (S = Y.current) == null || S.updatePosition(), re();
    });
    return i.observe(D), () => i.disconnect();
  }, [D, re]);
  const Ee = () => {
    xe(null);
  }, L = (i) => {
    o(), i == null || i();
  }, Te = () => {
    var S;
    const i = H === "platforms" ? N : ee;
    xe(null), (S = i.current) == null || S.focus();
  }, de = (i) => {
    xe((S) => S === i ? null : i);
  }, Le = (i) => {
    i.key !== y && (o(), $ ? $(i) : ln(i.url));
  }, Ae = (i, S) => {
    o(), i.onClick ? i.onClick() : _ ? _(i, S) : i.path && (A == null || A(i.path));
  }, ye = (i) => {
    i.key === "Escape" && H && (i.stopPropagation(), Te());
  }, q = { borderRadius: "8px", py: 1, gap: 0.5 }, we = { color: "text.secondary", fontSize: 20 }, J = {
    color: d,
    bgcolor: c,
    "& .MuiListItemIcon-root": { color: d },
    "& .MuiSvgIcon-root": { color: d },
    "&:hover": { bgcolor: Fe(d, 0.22) }
  }, ge = H === "settings", ue = H === "platforms", Q = /* @__PURE__ */ h(se, { direction: "row", sx: { alignItems: "center", gap: 1.5, p: 2 }, children: [
    a(44),
    /* @__PURE__ */ h(x, { sx: { minWidth: 0, flex: 1 }, children: [
      /* @__PURE__ */ e(z, { noWrap: !0, sx: { fontWeight: 600 }, children: u }),
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
            color: d,
            textDecoration: "underline",
            textUnderlineOffset: "2px"
          },
          children: "View profile"
        }
      ) : null
    ] })
  ] });
  return /* @__PURE__ */ h(
    qr,
    {
      open: t,
      anchorEl: r,
      onClose: o,
      action: Y,
      anchorOrigin: { vertical: "top", horizontal: "left" },
      transformOrigin: { vertical: "bottom", horizontal: "left" },
      slotProps: {
        transition: { onExited: Ee },
        paper: {
          ref: U,
          onKeyDown: ye,
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
        /* @__PURE__ */ h(
          x,
          {
            ref: R,
            "data-testid": "account-menu",
            sx: { ...ho, width: n, minWidth: n },
            children: [
              g ? /* @__PURE__ */ e(
                Ge,
                {
                  onClick: () => L(g),
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
                    ...uo
                  },
                  children: Q
                }
              ) : /* @__PURE__ */ e(x, { "data-testid": "account-menu-header", children: Q }),
              /* @__PURE__ */ e(Ce, {}),
              f ? /* @__PURE__ */ h(
                x,
                {
                  "data-testid": "menu-item-theme",
                  sx: {
                    ...q,
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
                    /* @__PURE__ */ e(ae, { children: /* @__PURE__ */ e(rn, { fontSize: "small" }) }),
                    /* @__PURE__ */ e(z, { sx: { flex: 1 }, children: "Theme" }),
                    /* @__PURE__ */ e(
                      Xn,
                      {
                        mode: v,
                        onToggle: m,
                        accentColor: d,
                        tint: c
                      }
                    )
                  ]
                }
              ) : null,
              /* @__PURE__ */ h(
                Ct,
                {
                  autoFocusItem: t,
                  sx: { px: 1, pt: f ? 0 : 0.5, pb: 0.5 },
                  children: [
                    _e ? /* @__PURE__ */ h(
                      Se,
                      {
                        ref: ee,
                        onClick: te ? () => de("settings") : () => L(b),
                        "aria-haspopup": te ? "dialog" : void 0,
                        "aria-expanded": te ? ge : void 0,
                        "data-active": ge ? "true" : "false",
                        "data-testid": "menu-item-settings",
                        sx: ge ? { ...q, ...J } : q,
                        children: [
                          /* @__PURE__ */ e(ae, { children: /* @__PURE__ */ e(Vr, { fontSize: "small" }) }),
                          /* @__PURE__ */ e(z, { sx: { flex: 1 }, children: "Settings" }),
                          /* @__PURE__ */ e(Gt, { sx: we })
                        ]
                      }
                    ) : null,
                    ce ? /* @__PURE__ */ e(Ce, { component: "li", sx: { my: 0.5 } }) : null,
                    ce ? /* @__PURE__ */ h(
                      Se,
                      {
                        ref: N,
                        onClick: () => de("platforms"),
                        "aria-haspopup": "dialog",
                        "aria-expanded": ue,
                        "data-active": ue ? "true" : "false",
                        "data-testid": "menu-item-platforms",
                        sx: ue ? { ...q, ...J } : q,
                        children: [
                          /* @__PURE__ */ e(ae, { children: /* @__PURE__ */ e(en, { fontSize: "small" }) }),
                          /* @__PURE__ */ e(z, { sx: { flex: 1 }, children: "Lumora Platforms" }),
                          /* @__PURE__ */ e(Gt, { sx: we })
                        ]
                      }
                    ) : null,
                    B ? /* @__PURE__ */ e(Ce, { component: "li", sx: { my: 0.5 } }) : null,
                    B ? /* @__PURE__ */ h(
                      Se,
                      {
                        onClick: () => L(B),
                        "data-testid": "menu-item-logout",
                        sx: {
                          ...q,
                          color: le ? "error.light" : "error.main"
                        },
                        children: [
                          /* @__PURE__ */ e(ae, { sx: { color: "inherit" }, children: /* @__PURE__ */ e(jr, { fontSize: "small" }) }),
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
        ce && H === "platforms" || te && H === "settings" ? /* @__PURE__ */ e(
          x,
          {
            ref: ke,
            "data-testid": "account-menu-subcard",
            style: { marginBottom: j },
            sx: { display: "flex" },
            children: H === "platforms" ? /* @__PURE__ */ e(
              Un,
              {
                platforms: C,
                currentPlatformKey: y,
                onSelect: Le,
                accentColor: d,
                tint: c,
                width: Gn,
                sx: Hr
              }
            ) : /* @__PURE__ */ e(
              Kn,
              {
                sections: E,
                onItemClick: Ae,
                width: jn,
                sx: Hr
              }
            )
          }
        ) : null
      ]
    }
  );
}, Yn = {
  "&:focus, &:focus-visible": { outline: "none" }
}, qn = ({
  mainLinks: t,
  secondaryLinks: r = [],
  activePath: o,
  onLinkClick: n,
  logo: a,
  title: u,
  onBrandClick: s,
  brandColor: l,
  headerBackgroundColor: d,
  headerForegroundColor: c,
  activeAccentColor: f = "#01584f",
  groupAccentColor: v,
  activeForegroundColor: m,
  foregroundColor: g,
  surfaceBackgroundColor: I,
  collapsed: b,
  expandedWidth: E,
  collapsedWidth: _,
  topContent: A,
  color: C,
  hoverColor: y,
  avatarColor: $,
  showProfile: B = !0,
  userName: k = "User",
  userEmail: le,
  userRole: Y,
  userAvatar: D,
  showNotifications: U = !0,
  notificationCount: R = 0,
  onNotificationsClick: N,
  whatsNewCount: ee = 0,
  onProfileClick: K,
  showSettings: ke = !0,
  onSettingsClick: j,
  settingsSections: me,
  onSettingsItemClick: H,
  platforms: xe,
  currentPlatformKey: ce,
  onPlatformSelect: te,
  onLogout: _e,
  theme: re = "light",
  showThemeToggler: Ee = !0,
  onThemeToggle: L
}) => {
  const Te = It(), de = Te.palette.mode === "dark", Le = I ?? (de ? Te.palette.background.paper : "#ffffff"), Ae = C ?? g ?? (de ? Te.palette.text.primary : f), ye = y ?? v ?? Rt(f), q = $ ?? f, we = p.useRef(null), [J, ge] = p.useState(!1), ue = Y ? Qr(Y) : void 0, Q = (W) => /* @__PURE__ */ e(
    Jt,
    {
      name: k,
      avatar: D,
      color: q,
      size: W
    }
  ), i = R + ee, S = U ? /* @__PURE__ */ e(
    Zt,
    {
      count: i,
      onClick: N,
      color: Ae,
      hoverColor: ye,
      tooltipPlacement: "right",
      testId: "panel-notifications"
    }
  ) : null, O = B ? /* @__PURE__ */ h(
    Ge,
    {
      ref: we,
      onClick: () => ge(!0),
      "aria-haspopup": "menu",
      "aria-expanded": J,
      "aria-label": "Account menu",
      "data-testid": "panel-user-button",
      sx: {
        flex: b ? "0 0 auto" : 1,
        minWidth: 0,
        justifyContent: "flex-start",
        gap: 1.25,
        p: 0.75,
        borderRadius: "10px",
        bgcolor: J ? ye : "transparent",
        "&:hover": { bgcolor: ye },
        ...Yn
      },
      children: [
        b && U ? (
          // Collapsed: no room for the bell, so unread shows as a dot
          /* @__PURE__ */ e(
            Yr,
            {
              color: "error",
              variant: "dot",
              overlap: "circular",
              invisible: !i,
              children: Q(36)
            }
          )
        ) : Q(b ? 36 : 40),
        b ? null : /* @__PURE__ */ h(x, { sx: { minWidth: 0, textAlign: "left" }, children: [
          /* @__PURE__ */ e(
            z,
            {
              noWrap: !0,
              sx: { fontWeight: 600, color: Ae, lineHeight: 1.3 },
              children: k
            }
          ),
          ue ? /* @__PURE__ */ e(
            z,
            {
              noWrap: !0,
              variant: "caption",
              "data-testid": "panel-user-role",
              sx: {
                display: "block",
                color: Ae,
                opacity: 0.85,
                letterSpacing: "0.02em",
                lineHeight: 1.3
              },
              children: ue
            }
          ) : null
        ] })
      ]
    }
  ) : null, w = !!S && (!b || !O);
  return /* @__PURE__ */ h(
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
          Xt,
          {
            mainLinks: t,
            secondaryLinks: r,
            activePath: o,
            onLinkClick: n,
            showHeaderBar: !0,
            logo: a,
            title: u,
            onBrandClick: s,
            brandColor: l,
            headerBackgroundColor: d,
            headerForegroundColor: c,
            activeAccentColor: f,
            groupAccentColor: v,
            activeForegroundColor: m,
            foregroundColor: g,
            surfaceBackgroundColor: Le,
            collapsed: b,
            expandedWidth: E,
            collapsedWidth: _,
            topContent: A,
            footer: O || w ? /* @__PURE__ */ h(
              se,
              {
                direction: "row",
                sx: {
                  alignItems: "center",
                  gap: 0.5,
                  justifyContent: "center"
                },
                children: [
                  O,
                  w ? S : null
                ]
              }
            ) : void 0
          }
        ),
        B ? /* @__PURE__ */ e(
          Vn,
          {
            open: J,
            anchorEl: we.current,
            onClose: () => ge(!1),
            width: Math.max(E - 16, 240),
            renderAvatar: Q,
            userName: k,
            userEmail: le,
            roleLabel: ue,
            accentColor: f,
            tint: ye,
            showThemeToggler: Ee,
            theme: re,
            onThemeToggle: L,
            onProfileClick: K,
            showSettings: ke,
            onSettingsClick: j,
            settingsSections: me,
            onSettingsItemClick: H,
            onLinkClick: n,
            platforms: xe,
            currentPlatformKey: ce,
            onPlatformSelect: te,
            onLogout: _e
          }
        ) : null
      ]
    }
  );
}, Jn = ({
  compact: t,
  color: r,
  hoverColor: o,
  showProfile: n,
  whatsNewCount: a = 0,
  ...u
}) => {
  var A;
  const {
    avatarColor: s,
    showNotifications: l,
    notificationCount: d,
    onNotificationsClick: c,
    userName: f = "User",
    userRole: v,
    userAvatar: m
  } = u, g = p.useRef(null), [I, b] = p.useState(
    null
  ), E = !!I;
  if (!l && !n)
    return null;
  const _ = {
    "&.Mui-focusVisible": { outline: "2px solid", outlineColor: r }
  };
  return /* @__PURE__ */ h(Pe, { children: [
    /* @__PURE__ */ h(
      se,
      {
        ref: g,
        direction: t ? "column" : "row",
        spacing: 0.5,
        "data-testid": "sidebar-footer",
        sx: { width: "100%", alignItems: "center" },
        children: [
          n && /* @__PURE__ */ e(
            ve,
            {
              title: t ? f : "",
              placement: "right",
              arrow: !0,
              children: /* @__PURE__ */ e(
                Ge,
                {
                  onClick: () => b(g.current),
                  "aria-label": `Account menu for ${f}`,
                  "aria-haspopup": "menu",
                  "aria-expanded": E,
                  "data-testid": "sidebar-user",
                  sx: {
                    flex: t ? "0 0 auto" : "1 1 auto",
                    minWidth: 0,
                    gap: 1.25,
                    p: t ? 0.5 : "6px 8px",
                    justifyContent: "flex-start",
                    borderRadius: "8px",
                    color: r,
                    bgcolor: E ? o : "transparent",
                    "&:hover": { bgcolor: o },
                    ..._
                  },
                  children: /* @__PURE__ */ e(
                    ao,
                    {
                      name: f,
                      role: v,
                      avatar: m,
                      avatarColor: s,
                      showText: !t
                    }
                  )
                }
              )
            }
          ),
          l && /* @__PURE__ */ e(
            Zt,
            {
              count: d + a,
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
      so,
      {
        anchorEl: I,
        onClose: () => b(null),
        placement: t ? "beside" : "above",
        width: t || (A = g.current) == null ? void 0 : A.clientWidth,
        ...u
      }
    )
  ] });
}, Zn = 'input, textarea, [contenteditable="true"]', Fr = (t) => {
  var r;
  (r = t == null ? void 0 : t.querySelector(Zn)) == null || r.focus();
}, Qn = ({
  search: t,
  mode: r,
  onExpand: o,
  autoFocus: n = !1,
  onAutoFocused: a,
  color: u,
  hoverColor: s
}) => {
  const l = p.useRef(null), [d, c] = p.useState(null);
  return p.useEffect(() => {
    r === "full" && n && (Fr(l.current), a == null || a());
  }, [r, n, a]), r === "full" ? /* @__PURE__ */ e(
    x,
    {
      ref: l,
      "data-testid": "sidebar-search",
      sx: { width: "100%" },
      children: t
    }
  ) : /* @__PURE__ */ h(
    x,
    {
      "data-testid": "sidebar-search",
      sx: { width: "100%", display: "flex", justifyContent: "center" },
      children: [
        /* @__PURE__ */ e(ve, { title: "Search", placement: "right", arrow: !0, children: /* @__PURE__ */ e(
          Oe,
          {
            "aria-label": "Search",
            onClick: (f) => r === "expand" ? o == null ? void 0 : o() : c(f.currentTarget),
            sx: {
              width: 44,
              height: 44,
              color: u,
              borderRadius: "8px",
              "&:hover": { bgcolor: s }
            },
            children: /* @__PURE__ */ e(Gr, {})
          }
        ) }),
        /* @__PURE__ */ e(
          qr,
          {
            open: !!d,
            anchorEl: d,
            onClose: () => c(null),
            anchorOrigin: { vertical: "top", horizontal: "right" },
            transformOrigin: { vertical: "top", horizontal: "left" },
            TransitionProps: {
              onEntered: (f) => Fr(f)
            },
            slotProps: { paper: { sx: { ml: 1, p: 1.5, width: 360 } } },
            children: t
          }
        )
      ]
    }
  );
}, ei = 100, ti = () => {
  const t = p.useRef(null), r = p.useRef(void 0), o = p.useRef(/* @__PURE__ */ new WeakSet()), [n, a] = p.useState(!1), [u, s] = p.useState(!1), l = () => {
    clearTimeout(r.current), r.current = void 0;
  };
  return p.useEffect(() => {
    const c = (v) => {
      o.current.has(v) || (l(), a(!1));
    }, f = () => {
      l(), a(!1);
    };
    return document.addEventListener("mouseover", c), document.documentElement.addEventListener("mouseleave", f), () => {
      l(), document.removeEventListener("mouseover", c), document.documentElement.removeEventListener(
        "mouseleave",
        f
      );
    };
  }, []), p.useEffect(() => {
    if (!u)
      return;
    const c = (f) => {
      var v;
      (v = t.current) != null && v.contains(f.target) || s(!1);
    };
    return document.addEventListener("pointerdown", c), () => document.removeEventListener("pointerdown", c);
  }, [u]), {
    expanded: n || u,
    pin: () => s(!0),
    rootProps: {
      ref: t,
      onMouseOver: (c) => {
        o.current.add(c.nativeEvent), !n && r.current === void 0 && (r.current = setTimeout(() => {
          r.current = void 0, a(!0);
        }, ei));
      },
      // Focus moving to an element outside unpins; a null target (the
      // focused element unmounted as the panel swapped layouts) does not.
      onBlur: (c) => {
        const f = c.relatedTarget;
        f && !c.currentTarget.contains(f) && s(!1);
      },
      onKeyDown: (c) => {
        c.key === "Escape" && s(!1);
      }
    }
  };
}, ri = 100, Pr = 80, Ut = 56, oi = 300, Kt = 288, Ze = 72, ni = "width 220ms cubic-bezier(0.4, 0, 0.2, 1), box-shadow 220ms ease", ii = 68, ai = { xs: 2, md: 5 }, si = () => typeof navigator < "u" && /Mac|iPhone|iPad/.test(navigator.platform || navigator.userAgent), li = (t, r) => {
  const o = (n) => typeof n == "number" ? r.spacing(n) : n;
  return typeof t == "object" ? Object.fromEntries(
    Object.entries(t).map(([n, a]) => [n, o(a)])
  ) : o(t);
}, ca = ({
  children: t,
  sidebarLinks: r = [],
  secondarySidebarLinks: o = [],
  appName: n = "Dashboard",
  showSidebar: a = !0,
  showSidebarRailTitles: u = !1,
  sidebarVariant: s = "rail",
  mobileNavigation: l = "bottom-bar",
  mobileBottomBarLinks: d,
  logo: c,
  onBrandClick: f,
  searchComponent: v,
  brandColor: m,
  contentPadding: g = ai,
  userMenuItems: I,
  sidebarBackgroundColor: b,
  sidebarHeaderBackgroundColor: E,
  groupAccentColor: _,
  activeSidebarForegroundColor: A,
  enableRefreshToken: C = !1,
  activePath: y,
  onLinkClick: $,
  showProfile: B = !0,
  userName: k,
  userRole: le,
  userAvatar: Y,
  userEmail: D,
  onLogout: U,
  showSettings: R = !0,
  onSettingsClick: N,
  onProfileClick: ee,
  settingsSections: K,
  onSettingsItemClick: ke,
  showNotifications: j = !0,
  notificationCount: me = 0,
  NotificationSidebarContent: H,
  whatsNewCount: xe = 0,
  onNotificationsClick: ce,
  platforms: te,
  currentPlatformKey: _e,
  onPlatformSelect: re,
  onVerify: Ee,
  alertProps: L,
  style: Te,
  sidebarStyles: de,
  contentStyles: Le,
  accentColor: Ae,
  sidebarAccentColor: ye,
  sidebarForegroundColor: q,
  contentBackgroundColor: we,
  theme: J = "light",
  showThemeToggler: ge = !1,
  onThemeToggle: ue,
  GlobalChatSidebar: Q,
  useChatSidebar: i,
  chatPanelMode: S = "docked",
  chatPanelPosition: O = "right",
  chatPanelWidth: w = 420,
  onChatClose: F,
  showAssistant: W = !1,
  assistantPlacement: oe = "sidebar",
  assistantShortcut: G = "j",
  onAssistantClick: Z,
  assistantActive: et = !1,
  assistantBusy: Qt = !1,
  customNavbar: er,
  customNavbarProps: fo,
  redirectToLogin: ut,
  apiBaseUrl: tr
}) => {
  const rr = ko(), he = Lo(rr.breakpoints.down("md")), or = wr(
    () => $r(En(J)),
    [J]
  ), ht = J === "dark", nr = Ae ?? "#01584f", ze = ye ?? nr, Ot = we ?? (ht ? "hsl(220, 35%, 9%)" : "#f2f9fc"), je = s === "collapsible", _t = s === "panel", po = _t && a && !he, Me = s === "rail-labeled", mo = je || Me, $e = b ?? (ht ? "hsl(220, 30%, 7%)" : "#ffffff"), ft = E ?? $e, De = q ?? (ht ? "#ffffff" : ze), tt = _ ?? Rt(De), rt = E ? jt(ft) : De, ir = (T) => /* @__PURE__ */ e(
    ie,
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
  ), pt = m ?? rt, Tt = c ?? ir(pt), xo = c ?? ir(m ?? De), At = ti(), Re = !At.expanded, [go, ar] = Xe(!1), bo = Wo(() => ar(!1), []);
  let Ie = 0;
  a && !he && (Me ? Ie = Pr : je || _t ? Ie = Ze : Ie = ri);
  const [sr, Ue] = Xe(!1), [lr, Dt] = Xe(!1), ne = he && l === "bottom-bar", cr = `calc(${lo}px + env(safe-area-inset-bottom, 0px))`, [Nt, dr] = Xe({ open: !1, tab: "notifications" }), ur = () => dr((T) => ({ ...T, open: !1 })), So = j && !!H, [vo, Eo] = Xe(!0), [yo, wo] = Xe(!1), Wt = i == null ? void 0 : i(), hr = (Wt == null ? void 0 : Wt.isOpen) ?? !1, fr = S === "floating" ? "floating" : "docked", Ro = fr === "docked" && hr && Q && !he ? w : 0, mt = Bt(Ee), pr = Bt(!1), mr = wr(
    () => vn(tr),
    [tr]
  );
  bt(() => {
    mt.current = Ee;
  }, [Ee]);
  const kt = Bt(Z);
  kt.current = Z;
  const ot = W && G ? G.toLowerCase() : null;
  bt(() => {
    if (!ot)
      return;
    const T = (X) => {
      (X.metaKey || X.ctrlKey) && !X.altKey && !X.shiftKey && X.key.toLowerCase() === ot && kt.current && (X.preventDefault(), kt.current());
    };
    return window.addEventListener("keydown", T), () => window.removeEventListener("keydown", T);
  }, [ot]);
  const xr = (T) => {
    const X = U(T);
    X instanceof Promise && X.catch((Be) => {
      console.error("Error in logout handler:", Be);
    });
  };
  if (bt(() => {
    (() => {
      var X;
      try {
        const { isAuthenticated: Be } = bn();
        if (!Be) {
          console.log("No session found, redirecting to login"), dt(), ut();
          return;
        }
        if (!pr.current) {
          const { user: it, error: Mt } = Sn();
          if (it && !Mt) {
            const Ao = {
              name: it.name || "",
              email: it.email || "",
              profilePicture: it.profilePicture || "",
              role: it.role || ""
            };
            pr.current = !0, (X = mt.current) == null || X.call(mt, Ao);
          } else
            Mt && console.error("Error getting user data:", Mt);
        }
        wo(!0);
      } catch (Be) {
        console.error("Error checking session:", Be), dt(), ut();
      } finally {
        Eo(!1);
      }
    })();
  }, [ut]), bt(() => {
    C && yn(mr, ut);
  }, [C, mr]), vo)
    return /* @__PURE__ */ e(yr, { theme: or, children: /* @__PURE__ */ h(
      ie,
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
            zo,
            {
              size: 60,
              thickness: 4,
              sx: { color: nr }
            }
          ),
          /* @__PURE__ */ e(ie, { sx: { mt: 2, color: "text.secondary" }, children: "Checking session..." })
        ]
      }
    ) });
  if (!yo)
    return null;
  const nt = v ?? (er ? /* @__PURE__ */ e(er, { ...fo }) : null), Io = (T) => {
    Ue(!1), Dt(!1), dr({ open: !0, tab: T });
  }, Lt = H && (() => Io("notifications")), Co = me + xe, gr = {
    avatarColor: ze,
    menuItems: I,
    showNotifications: j,
    notificationCount: me,
    whatsNewCount: xe,
    onNotificationsClick: Lt,
    showProfile: B,
    userName: k,
    userRole: le,
    userAvatar: Y,
    showSettings: R,
    onSettingsClick: N,
    showThemeToggler: ge,
    theme: J,
    onThemeToggle: ue,
    onLogout: xr
  }, zt = (T) => /* @__PURE__ */ e(
    Jn,
    {
      ...gr,
      compact: T,
      color: De,
      hoverColor: tt
    }
  ), br = ot ? [si() ? "⌘" : "Ctrl", ot.toUpperCase()] : void 0, Oo = (T) => W && oe === "sidebar" ? /* @__PURE__ */ e(
    Nr,
    {
      variant: T ? "sidebar-icon" : "sidebar",
      onClick: Z,
      active: et,
      busy: Qt,
      shortcutKeys: br,
      accentColor: De
    }
  ) : null, _o = (T) => nt ? /* @__PURE__ */ e(
    Qn,
    {
      search: nt,
      mode: T,
      onExpand: () => {
        At.pin(), ar(!0);
      },
      autoFocus: go,
      onAutoFocused: bo,
      color: De,
      hoverColor: tt
    }
  ) : null, xt = (T) => {
    const X = Oo(T !== "full"), Be = _o(T);
    return X || Be ? /* @__PURE__ */ h(
      Ho,
      {
        spacing: 1.5,
        sx: { alignItems: T === "full" ? "stretch" : "center" },
        children: [
          X,
          Be
        ]
      }
    ) : void 0;
  }, Sr = () => /* @__PURE__ */ e(
    Xt,
    {
      mainLinks: r,
      secondaryLinks: o,
      activePath: y,
      onLinkClick: $,
      showHeaderBar: je,
      logo: Tt,
      title: n,
      onBrandClick: f,
      brandColor: pt,
      headerBackgroundColor: je ? ft : void 0,
      headerForegroundColor: je ? rt : void 0,
      activeAccentColor: ze,
      groupAccentColor: _,
      activeForegroundColor: A,
      foregroundColor: q,
      surfaceBackgroundColor: $e,
      collapsed: Me || Re,
      showLabels: Me,
      expandedWidth: Kt,
      collapsedWidth: Me ? Pr : Ze,
      topContent: xt(
        Me ? "popover" : Re ? "expand" : "full"
      ),
      footer: zt(Me || Re)
    }
  ), vr = (T) => /* @__PURE__ */ e(
    ie,
    {
      component: "aside",
      sx: {
        width: Ze,
        minWidth: Ze,
        flexShrink: 0,
        // Above the page, including its sticky app bars
        zIndex: (X) => X.zIndex.appBar + 1,
        position: "sticky",
        top: 0,
        alignSelf: "flex-start",
        height: "100vh"
      },
      children: /* @__PURE__ */ e(
        ie,
        {
          ...At.rootProps,
          "data-testid": "sidebar-hover-panel",
          "data-expanded": Re ? "false" : "true",
          sx: {
            position: "absolute",
            top: 0,
            left: 0,
            height: "100%",
            width: Re ? Ze : Kt,
            // Flex column so the sidebar shrinks to fit siblings (the
            // alert card) instead of pushing them off-screen.
            display: "flex",
            flexDirection: "column",
            overflow: "hidden",
            bgcolor: $e,
            borderRight: "1px solid",
            borderColor: "divider",
            boxShadow: Re ? "none" : `4px 0 24px rgba(0, 0, 0, ${ht ? 0.5 : 0.12})`,
            transition: ni,
            ...de
          },
          children: T
        }
      )
    }
  ), To = li(
    g,
    rr
  );
  return /* @__PURE__ */ e(yr, { theme: or, children: /* @__PURE__ */ h(
    ie,
    {
      sx: {
        display: "flex",
        minHeight: "100vh",
        ...Te
      },
      children: [
        /* @__PURE__ */ e(Mo, {}),
        he && /* @__PURE__ */ e(
          Fn,
          {
            height: Ut,
            onMenuClick: a && !ne ? () => Ue(!0) : void 0,
            appName: n,
            logo: Tt,
            onBrandClick: f,
            background: ft,
            color: rt,
            brandColor: pt,
            endContent: j ? /* @__PURE__ */ e(
              Zt,
              {
                count: Co,
                onClick: Lt,
                color: rt,
                hoverColor: tt,
                tooltipPlacement: "bottom",
                testId: "mobile-notifications"
              }
            ) : void 0
          }
        ),
        a && !he && Me && /* @__PURE__ */ e(
          ie,
          {
            component: "aside",
            sx: {
              width: Ie,
              minWidth: Ie,
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
              ...de
            },
            children: Sr()
          }
        ),
        a && !he && je && vr(
          /* @__PURE__ */ h(Pe, { children: [
            Sr(),
            (L == null ? void 0 : L.show) && !Re && /* @__PURE__ */ e(vt, { ...L })
          ] })
        ),
        po && vr(
          /* @__PURE__ */ h(Pe, { children: [
            /* @__PURE__ */ e(
              qn,
              {
                mainLinks: r,
                secondaryLinks: o,
                activePath: y,
                onLinkClick: $,
                logo: Tt,
                title: n,
                onBrandClick: f,
                brandColor: pt,
                headerBackgroundColor: ft,
                headerForegroundColor: rt,
                activeAccentColor: ze,
                groupAccentColor: _,
                activeForegroundColor: A,
                foregroundColor: q,
                surfaceBackgroundColor: $e,
                collapsed: Re,
                expandedWidth: Kt,
                collapsedWidth: Ze,
                topContent: xt(
                  Re ? "expand" : "full"
                ),
                color: De,
                hoverColor: tt,
                avatarColor: ze,
                showProfile: B,
                userName: k,
                userEmail: D,
                userRole: le,
                userAvatar: Y,
                showNotifications: j,
                notificationCount: me,
                onNotificationsClick: So ? Lt : ce,
                whatsNewCount: xe,
                onProfileClick: ee,
                showSettings: R,
                onSettingsClick: N,
                settingsSections: K,
                onSettingsItemClick: ke,
                platforms: te,
                currentPlatformKey: _e,
                onPlatformSelect: re,
                onLogout: xr,
                theme: J,
                showThemeToggler: ge,
                onThemeToggle: ue
              }
            ),
            (L == null ? void 0 : L.show) && !Re && /* @__PURE__ */ e(vt, { ...L })
          ] })
        ),
        a && !he && !mo && !_t && /* @__PURE__ */ e(
          Rr,
          {
            variant: "permanent",
            sx: {
              width: Ie,
              flexShrink: 0,
              zIndex: 2,
              "& .MuiDrawer-paper": {
                width: Ie,
                boxSizing: "border-box",
                bgcolor: Ot,
                borderRight: "none"
              },
              ...de
            },
            children: /* @__PURE__ */ h(
              ie,
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
                    ie,
                    {
                      sx: {
                        display: "flex",
                        justifyContent: "center",
                        mb: 1.5
                      },
                      children: /* @__PURE__ */ e(
                        wt,
                        {
                          logo: xo,
                          appName: n,
                          onClick: f,
                          color: m ?? De,
                          testId: "sidebar-header-brand"
                        }
                      )
                    }
                  ),
                  xt("popover"),
                  /* @__PURE__ */ h(
                    ie,
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
                          kn,
                          {
                            mainLinks: r,
                            secondaryLinks: o,
                            activePath: y,
                            onLinkClick: $,
                            accentColor: ze,
                            surfaceBackgroundColor: Ot,
                            railShowTitles: u
                          }
                        ),
                        (L == null ? void 0 : L.show) && /* @__PURE__ */ e(vt, { ...L })
                      ]
                    }
                  ),
                  /* @__PURE__ */ e(ie, { sx: { py: 1.5 }, children: zt(!0) })
                ]
              }
            )
          }
        ),
        a && he && /* @__PURE__ */ h(
          Bo,
          {
            anchor: ne ? "bottom" : "left",
            open: sr,
            onOpen: () => Ue(!0),
            onClose: () => Ue(!1),
            disableSwipeToOpen: !0,
            sx: { zIndex: (T) => T.zIndex.drawer + 1 },
            slotProps: {
              paper: {
                "aria-label": "Navigation",
                sx: {
                  bgcolor: $e,
                  backgroundImage: "none",
                  ...ne ? {
                    maxHeight: "min(80vh, 640px)",
                    borderTopLeftRadius: "16px",
                    borderTopRightRadius: "16px",
                    pb: "env(safe-area-inset-bottom, 0px)"
                  } : { maxWidth: "85vw" }
                }
              }
            },
            children: [
              ne && // Grab handle: the sheet can be swiped down to close
              /* @__PURE__ */ e(
                ie,
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
                Xt,
                {
                  mainLinks: r,
                  secondaryLinks: o,
                  activePath: y,
                  onLinkClick: (T) => {
                    $ == null || $(T), Ue(!1);
                  },
                  onLinkAction: () => Ue(!1),
                  collapsed: !1,
                  expandedWidth: ne ? "100%" : oi,
                  activeAccentColor: ze,
                  groupAccentColor: _,
                  activeForegroundColor: A,
                  foregroundColor: q,
                  surfaceBackgroundColor: $e,
                  topInsetPx: ne ? 8 : 0,
                  topContent: ne ? void 0 : xt("full"),
                  footer: ne ? void 0 : zt(!1)
                }
              ),
              (L == null ? void 0 : L.show) && /* @__PURE__ */ e(vt, { ...L })
            ]
          }
        ),
        ne && nt && /* @__PURE__ */ e(
          Hn,
          {
            open: lr,
            onClose: () => Dt(!1),
            search: nt
          }
        ),
        ne && /* @__PURE__ */ e(
          Bn,
          {
            ...gr,
            pinnedLinks: d,
            activePath: y,
            onLinkClick: $,
            onMenuClick: a ? () => Ue(!0) : void 0,
            menuOpen: sr,
            onSearchClick: nt ? () => Dt(!0) : void 0,
            searchOpen: lr,
            showAssistant: W,
            onAssistantClick: Z,
            assistantActive: et,
            showProfile: B,
            background: $e,
            color: De,
            activeColor: ze,
            activeBackground: tt
          }
        ),
        /* @__PURE__ */ e(
          ie,
          {
            component: "main",
            sx: {
              flexGrow: 1,
              "--lumora-content-padding": To,
              // Where sticky page elements should pin (below the mobile bar)
              "--lumora-sticky-top": he ? `${Ut}px` : "0px",
              p: "var(--lumora-content-padding)",
              width: Ie ? `calc(100% - ${Ie}px)` : "100%",
              mt: he ? `${Ut}px` : 0,
              // Keep the last content clear of the bottom bar
              ...ne && {
                pb: `calc(var(--lumora-content-padding) + ${cr})`
              },
              backgroundColor: Ot,
              ...Le
            },
            children: t
          }
        ),
        Q && /* @__PURE__ */ e(
          Cn,
          {
            open: hr,
            variant: fr,
            position: O,
            width: w,
            sidebarWidthPx: Ie,
            bottomOffsetPx: W && oe === "floating" ? ii : 0,
            fullScreen: he,
            fullScreenBottom: ne ? cr : "0px",
            onClose: F,
            children: /* @__PURE__ */ e(Q, {})
          }
        ),
        W && oe === "floating" && !ne && /* @__PURE__ */ e(
          Nr,
          {
            variant: "floating",
            rightOffsetPx: Ro,
            shortcutKeys: br,
            onClick: Z,
            active: et,
            busy: Qt
          }
        ),
        j && H && /* @__PURE__ */ e(
          Rr,
          {
            anchor: "right",
            open: Nt.open,
            onClose: ur,
            slotProps: {
              paper: { sx: { width: 380, maxWidth: "100vw" } }
            },
            children: /* @__PURE__ */ e(
              H,
              {
                onClose: ur,
                initialTab: Nt.tab
              },
              Nt.tab
            )
          }
        )
      ]
    }
  ) });
};
export {
  P as AUTH_ERROR_CODES,
  M as AuthError,
  Xt as CollapsibleSidebar,
  sa as FullBleedSection,
  xn as Kbd,
  ca as LumoraWrapper,
  dt as clearAuthTokens,
  ca as default,
  la as getAuthErrorMessage,
  ct as getAuthTokens,
  Sn as getCurrentUser,
  En as getDesignTokens,
  bn as isAuthenticated,
  Yt as logAuthError,
  to as storeAuthTokens
};
