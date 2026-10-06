import { jsx as e, jsxs as f, Fragment as Fe } from "react/jsx-runtime";
import Do from "@mui/icons-material/KeyboardArrowDownRounded";
import No from "@mui/icons-material/KeyboardArrowUpRounded";
import Gt from "@mui/icons-material/ChevronRightRounded";
import b from "@mui/material/Box";
import Er from "@mui/material/Collapse";
import Ce from "@mui/material/Divider";
import Oe from "@mui/material/IconButton";
import gt from "@mui/material/ListItemButton";
import ae from "@mui/material/ListItemIcon";
import We from "@mui/material/ListItemText";
import se from "@mui/material/Stack";
import ve from "@mui/material/Tooltip";
import M from "@mui/material/Typography";
import { useTheme as It, createTheme as $r, alpha as Pe, ThemeProvider as yr } from "@mui/material/styles";
import * as m from "react";
import { useMemo as wr, useState as Ve, useCallback as Wo, useRef as Bt, useEffect as bt } from "react";
import Xe from "@mui/material/ButtonBase";
import { useTheme as ko, useMediaQuery as Lo, Box as ie, CircularProgress as Mo, CssBaseline as zo, Drawer as Rr, SwipeableDrawer as Bo, Stack as Ho } from "@mui/material";
import Ir from "axios";
import Po from "@mui/material/Card";
import Fo from "@mui/material/CardContent";
import Ur from "@mui/material/Button";
import $o from "@mui/icons-material/AutoAwesomeRounded";
import Uo from "@mui/material/Grow";
import qt from "@mui/material/Paper";
import Ko from "@mui/material/Slide";
import Go from "@mui/material/ListSubheader";
import Se from "@mui/material/MenuItem";
import Ct from "@mui/material/MenuList";
import Xo from "@mui/material/Popper";
import Kr from "@mui/icons-material/MenuRounded";
import Gr from "@mui/icons-material/SearchRounded";
import Xr from "@mui/icons-material/LogoutRounded";
import jr from "@mui/icons-material/NotificationsNoneOutlined";
import Vr from "@mui/icons-material/SettingsOutlined";
import jo from "@mui/material/Avatar";
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
  onClick: i,
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
  }, l = /* @__PURE__ */ f(Fe, { children: [
    r ? /* @__PURE__ */ e(
      M,
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
  return i ? /* @__PURE__ */ e(
    Xe,
    {
      onClick: i,
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
}, Et = (t, r) => t ? `${t}/${r.text}` : r.text, Ge = (t, r) => {
  var o;
  return r ? t.path && r === t.path ? !0 : ((o = t.subitems) == null ? void 0 : o.some((i) => Ge(i, r))) ?? !1 : !1;
}, He = (t, r) => !!(r && t.path === r), Jr = (t, r) => (t ?? []).flatMap((o) => {
  const i = o.icon ?? r;
  return lt(o) ? Jr(o.subitems, i) : o.path ? [{ sub: o, icon: i }] : [];
}), Xt = (t) => {
  const r = Zr(t);
  if (!r)
    return "#ffffff";
  const [o, i, a] = r.map((s) => {
    const l = s / 255;
    return l <= 0.03928 ? l / 12.92 : ((l + 0.055) / 1.055) ** 2.4;
  });
  return 0.2126 * o + 0.7152 * i + 0.0722 * a > 0.5 ? "#0b1f1c" : "#ffffff";
}, Rt = (t) => {
  const r = Zr(t);
  if (!r)
    return "rgba(1, 88, 79, 0.12)";
  const [o, i, a] = r;
  return `rgba(${o}, ${i}, ${a}, 0.14)`;
}, Zr = (t) => {
  let r = t.trim().replace(/^#/, "");
  if (r.length === 3 && (r = r.split("").map((i) => i + i).join("")), r.length !== 6 || /[^0-9a-fA-F]/.test(r))
    return null;
  const o = parseInt(r, 16);
  return [o >> 16 & 255, o >> 8 & 255, o & 255];
}, ln = (t) => {
  typeof window > "u" || window.open(t, "_blank", "noopener,noreferrer");
}, Qr = (t) => t.replace(/_/g, " ").split(/\s+/).filter(Boolean).join(" ").toUpperCase(), cn = 264, dn = 72, Or = 64, Ht = {
  "&:focus, &:focus-visible": { outline: "none" }
}, un = 16, hn = 14, fn = 4, pn = 2.5, _r = "0.7rem", Tr = 22, Ke = ({ text: t, variant: r = "body1", center: o = !1, fontSize: i, fontWeight: a }) => {
  const u = m.useRef(null), [s, l] = m.useState(!1), c = m.useCallback(() => {
    const h = u.current;
    h && l(h.scrollWidth > h.clientWidth + 0.5);
  }, []);
  return m.useLayoutEffect(() => {
    c();
  }, [c, t]), m.useEffect(() => {
    const h = u.current;
    if (!h)
      return;
    const d = new ResizeObserver(() => c());
    return d.observe(h), () => d.disconnect();
  }, [c]), /* @__PURE__ */ e(
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
        M,
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
            ...i ? { fontSize: i } : {},
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
), St = 600, jt = ({
  mainLinks: t,
  secondaryLinks: r = [],
  activePath: o,
  onLinkClick: i,
  onLinkAction: a,
  logo: u,
  title: s,
  onBrandClick: l,
  showHeaderBar: c = !1,
  headerBackgroundColor: h,
  headerForegroundColor: d,
  brandColor: v,
  activeAccentColor: p = "#01584f",
  groupAccentColor: x,
  activeForegroundColor: E,
  foregroundColor: g,
  surfaceBackgroundColor: y,
  collapsed: _ = !1,
  expandedWidth: A = cn,
  collapsedWidth: C = dn,
  showLabels: w = !1,
  topInsetPx: $ = 0,
  topContent: B,
  footer: k
}) => {
  const le = It(), Y = le.palette.mode === "dark", [D, U] = m.useState(
    {}
  ), I = E ?? Xt(p), N = {
    bgcolor: p,
    color: I,
    "& .MuiListItemIcon-root": { color: I }
  }, ee = {
    bgcolor: p,
    color: I,
    borderRadius: "8px"
  }, K = x ?? Rt(p), ke = y ?? (Y ? le.palette.background.paper : "#ffffff"), X = g ?? (Y ? "text.primary" : p), xe = h ?? ke, H = d ?? (h ? Xt(xe) : g ?? (Y ? le.palette.text.primary : p)), ge = Rt(H), ce = (n) => {
    i == null || i(n);
  }, te = (n, S) => {
    U((O) => ({ ...O, [n]: !S }));
  }, _e = (n, S) => D[S] ?? Ge(n, o), re = (n, S, O) => ({
    color: n ? I : X,
    bgcolor: n ? p : "transparent",
    "& .MuiListItemIcon-root": {
      color: n ? I : X,
      minWidth: O
    },
    "&:hover": n || w ? N : { bgcolor: S }
  }), Ee = {
    "&.Mui-selected": {
      bgcolor: p
    },
    "&.Mui-selected:hover": N
  }, L = (n) => {
    const S = He(n, o), O = /* @__PURE__ */ f(
      gt,
      {
        disabled: !n.path,
        selected: S,
        onClick: () => n.path && ce(n.path),
        "data-testid": `sidebar-item-${n.text}`,
        "data-active": S ? "true" : "false",
        sx: {
          borderRadius: "8px",
          py: 1.25,
          px: 1.5,
          // Room for the action button laid over the row's end
          ...n.action && { pr: 6 },
          ...n.subtitle && { py: 1 },
          // A two-line row usually leads with a larger avatar; give it room
          ...re(
            S,
            K,
            n.subtitle ? 48 : 36
          ),
          ...Ee
        },
        children: [
          /* @__PURE__ */ e(ae, { children: n.icon }),
          /* @__PURE__ */ e(
            We,
            {
              disableTypography: !0,
              primary: /* @__PURE__ */ e(
                Ke,
                {
                  text: n.text,
                  fontWeight: St
                }
              ),
              secondary: n.subtitle ? /* @__PURE__ */ e(
                b,
                {
                  component: "span",
                  sx: { display: "block", opacity: 0.85 },
                  children: /* @__PURE__ */ e(
                    Ke,
                    {
                      text: n.subtitle,
                      fontSize: "0.8125rem"
                    }
                  )
                }
              ) : void 0,
              sx: n.subtitle ? { my: 0 } : void 0
            }
          )
        ]
      },
      n.text
    );
    if (!n.action)
      return O;
    const { action: R } = n;
    return /* @__PURE__ */ f(b, { sx: { position: "relative" }, children: [
      O,
      /* @__PURE__ */ e(ve, { title: R.label, placement: "right", arrow: !0, children: /* @__PURE__ */ e(
        Oe,
        {
          "aria-label": R.label,
          "data-testid": `sidebar-action-${n.text}`,
          onClick: () => {
            R.onClick(), a == null || a();
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
            color: S ? I : X,
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
              outlineColor: S ? I : X,
              outlineOffset: 1
            }
          },
          children: R.icon
        }
      ) })
    ] }, n.text);
  }, Te = (n) => {
    const S = Ge(n, o), O = He(n, o), R = Et("", n), P = _e(n, R);
    return /* @__PURE__ */ f(
      b,
      {
        "data-testid": `sidebar-group-${n.text}`,
        sx: {
          borderRadius: "8px",
          bgcolor: S ? K : "transparent"
        },
        children: [
          /* @__PURE__ */ f(
            gt,
            {
              onClick: () => te(R, P),
              "data-testid": `sidebar-item-${n.text}`,
              "data-active": O ? "true" : "false",
              "aria-expanded": P,
              sx: {
                borderRadius: "8px",
                py: 1.25,
                px: 1.5,
                ...re(O, K, 36)
              },
              children: [
                /* @__PURE__ */ e(ae, { children: n.icon }),
                /* @__PURE__ */ e(
                  We,
                  {
                    disableTypography: !0,
                    primary: /* @__PURE__ */ e(
                      Ke,
                      {
                        text: n.text,
                        fontWeight: St
                      }
                    )
                  }
                ),
                /* @__PURE__ */ e(Ar, { open: P })
              ]
            }
          ),
          /* @__PURE__ */ e(Er, { in: P, timeout: "auto", unmountOnExit: !0, children: /* @__PURE__ */ e(
            b,
            {
              "data-testid": `sidebar-children-${n.text}`,
              sx: { pb: 0.5 },
              children: n.subitems.map(
                (W) => de(W, R, 1)
              )
            }
          ) })
        ]
      },
      n.text
    );
  }, de = (n, S, O) => {
    const R = Et(S, n), P = fn + (O - 1) * pn;
    if (lt(n)) {
      const oe = Ge(n, o), G = He(n, o), Z = _e(n, R);
      return /* @__PURE__ */ f(b, { "data-testid": `sidebar-group-${n.text}`, children: [
        /* @__PURE__ */ f(
          gt,
          {
            onClick: () => te(R, Z),
            "data-testid": `sidebar-subitem-${n.text}`,
            "data-active": oe ? "true" : "false",
            "aria-expanded": Z,
            sx: {
              borderRadius: "8px",
              mx: 0.5,
              py: 0.75,
              pl: P,
              ...re(G, "action.hover", 32)
            },
            children: [
              n.icon ? /* @__PURE__ */ e(ae, { children: n.icon }) : null,
              /* @__PURE__ */ e(
                We,
                {
                  disableTypography: !0,
                  primary: /* @__PURE__ */ e(
                    Ke,
                    {
                      text: n.text,
                      fontWeight: St
                    }
                  )
                }
              ),
              /* @__PURE__ */ e(Ar, { open: Z })
            ]
          }
        ),
        /* @__PURE__ */ e(Er, { in: Z, timeout: "auto", unmountOnExit: !0, children: /* @__PURE__ */ e(b, { "data-testid": `sidebar-children-${n.text}`, children: n.subitems.map(
          (et) => de(et, R, O + 1)
        ) }) })
      ] }, R);
    }
    const W = He(n, o);
    return /* @__PURE__ */ f(
      gt,
      {
        selected: W,
        disabled: !n.path,
        onClick: () => n.path && ce(n.path),
        "data-testid": `sidebar-subitem-${n.text}`,
        "data-active": W ? "true" : "false",
        sx: {
          borderRadius: "8px",
          mx: 0.5,
          py: 0.75,
          pl: P,
          ...re(W, "action.hover", 32),
          ...Ee
        },
        children: [
          n.icon ? /* @__PURE__ */ e(ae, { children: n.icon }) : null,
          /* @__PURE__ */ e(
            We,
            {
              disableTypography: !0,
              primary: /* @__PURE__ */ e(
                Ke,
                {
                  text: n.text,
                  fontWeight: St
                }
              )
            }
          )
        ]
      },
      R
    );
  }, Le = (n, S, O, R, P, W) => {
    const oe = !P, G = /* @__PURE__ */ f(
      Oe,
      {
        "aria-label": S,
        disabled: oe,
        onClick: P,
        "data-testid": (W == null ? void 0 : W.testId) ?? `sidebar-item-${S}`,
        "data-active": R ? "true" : "false",
        sx: w ? {
          display: "flex",
          flexDirection: "column",
          gap: 0.25,
          width: "100%",
          maxWidth: "100%",
          height: "auto",
          // 8px padding on all sides of the item container.
          p: 1,
          borderRadius: "8px",
          color: R ? I : X,
          bgcolor: R ? p : "transparent",
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
          color: R ? I : X,
          bgcolor: R ? p : "transparent",
          borderRadius: R ? "8px" : "50%",
          "&:hover": {
            bgcolor: R ? p : W != null && W.insideGroup ? "action.hover" : K,
            borderRadius: "8px"
          },
          ...Ht
        },
        children: [
          O,
          w ? /* @__PURE__ */ e(
            Ke,
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
    return w ? oe ? /* @__PURE__ */ e("span", { children: G }, n) : /* @__PURE__ */ e(m.Fragment, { children: G }, n) : /* @__PURE__ */ e(ve, { title: S, placement: "right", arrow: !0, children: oe ? /* @__PURE__ */ e("span", { children: G }) : G }, n);
  }, Ae = (n) => {
    const S = Ge(n, o), O = He(n, o), R = Et("", n), P = _e(n, R), W = /* @__PURE__ */ f(
      Oe,
      {
        "aria-label": n.text,
        "aria-expanded": P,
        onClick: () => te(R, P),
        "data-testid": `sidebar-item-${n.text}`,
        "data-active": O ? "true" : "false",
        sx: {
          display: "flex",
          flexDirection: "column",
          gap: w ? 0.25 : 0,
          width: w ? "100%" : 44,
          maxWidth: "100%",
          // 8px padding on all sides of the labeled item container.
          ...w ? { p: 1 } : { py: 0.75 },
          borderRadius: "10px",
          color: O ? I : X,
          bgcolor: O ? p : "transparent",
          // rail-labeled: active AND hover share the highlight. collapsible:
          // original behavior — accent only when active; the outer pill
          // supplies the idle-hover tint, so the button stays transparent.
          "&:hover": w ? { bgcolor: p, color: I } : {
            bgcolor: O ? p : "transparent"
          },
          ...Ht
        },
        children: [
          w ? /* @__PURE__ */ e(
            b,
            {
              sx: {
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                "& .MuiSvgIcon-root": {
                  fontSize: Tr
                }
              },
              children: n.icon
            }
          ) : n.icon,
          w ? /* @__PURE__ */ e(
            Ke,
            {
              text: n.text,
              variant: "caption",
              center: !0,
              fontSize: _r
            }
          ) : null,
          /* @__PURE__ */ e(mn, { open: P, size: hn })
        ]
      }
    ), oe = w ? W : /* @__PURE__ */ e(ve, { title: n.text, placement: "right", arrow: !0, children: W });
    return /* @__PURE__ */ f(
      b,
      {
        "data-testid": `sidebar-group-${n.text}`,
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
          ...w ? {} : { "&:hover": { bgcolor: K } }
        },
        children: [
          oe,
          P ? Jr(n.subitems, n.icon).map(
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
      n.text
    );
  }, ye = (n) => /* @__PURE__ */ e(
    b,
    {
      sx: {
        width: "100%",
        display: "flex",
        justifyContent: "center"
      },
      children: Le(
        n.text,
        n.subtitle ? `${n.text} · ${n.subtitle}` : n.text,
        n.icon,
        He(n, o),
        n.path ? () => ce(n.path) : void 0,
        { testId: `sidebar-item-${n.text}` }
      )
    },
    n.text
  ), q = (n) => lt(n) ? _ ? Ae(n) : Te(n) : _ ? ye(n) : L(n), we = (n) => /* @__PURE__ */ e(
    se,
    {
      spacing: 0.5,
      sx: {
        width: "100%",
        alignItems: _ ? "center" : "stretch"
      },
      children: n.map(q)
    }
  ), J = _ ? C : A, ue = c ? /* @__PURE__ */ e(
    b,
    {
      "data-testid": "sidebar-header",
      sx: {
        height: Or,
        minHeight: Or,
        flexShrink: 0,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        bgcolor: xe
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
  ) : null, he = !c && u ? /* @__PURE__ */ e(
    b,
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
  ) : null, Q = w ? 0.5 : _ ? 1 : 1.5;
  return /* @__PURE__ */ f(
    b,
    {
      component: "nav",
      "aria-label": "Main sidebar",
      "data-testid": "collapsible-sidebar",
      "data-collapsed": _ ? "true" : "false",
      "data-labeled": w ? "true" : "false",
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
        ue ?? he,
        B ? /* @__PURE__ */ e(
          b,
          {
            sx: { flexShrink: 0, px: Q, pt: 1, pb: 1 },
            children: B
          }
        ) : null,
        /* @__PURE__ */ f(
          b,
          {
            sx: {
              flex: "1 1 auto",
              minHeight: 0,
              display: "flex",
              flexDirection: "column",
              overflowY: "auto",
              overflowX: "hidden",
              px: Q,
              pt: $ && !c ? `${$}px` : 1,
              pb: 2
            },
            children: [
              we(t),
              r.length > 0 ? /* @__PURE__ */ f(b, { sx: { mt: "auto", pt: 2 }, children: [
                k ? null : /* @__PURE__ */ e(Ce, { sx: { mb: 1, borderColor: "divider" } }),
                we(r)
              ] }) : null
            ]
          }
        ),
        k ? /* @__PURE__ */ e(b, { sx: { flexShrink: 0, px: Q, pb: 1.5 }, children: /* @__PURE__ */ e(
          b,
          {
            sx: {
              borderTop: `1px solid ${ge}`,
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
  background: i = "background.paper",
  divider: a = !0,
  inset: u = !0,
  sx: s
}) => /* @__PURE__ */ e(
  b,
  {
    "data-testid": "full-bleed-section",
    sx: [
      {
        mx: Dr,
        mt: r ? Dr : 0,
        // Space below it, like any other block on the page
        mb: Vt,
        px: u ? Vt : 0,
        bgcolor: i,
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
  b,
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
  constructor(r, o, i = null) {
    super(r), this.name = "AuthError", this.code = o, this.originalError = i, this.timestamp = (/* @__PURE__ */ new Date()).toISOString();
  }
}
const F = {
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
}, Pt = (t) => {
  try {
    if (typeof window > "u")
      return console.warn("localStorage access attempted on server side"), null;
    if (!window.localStorage)
      throw new z(
        "localStorage is not available",
        F.STORAGE_ACCESS_DENIED
      );
    return window.localStorage.getItem(t);
  } catch (r) {
    throw r.name === "QuotaExceededError" ? (console.error("Storage quota exceeded"), new z(
      "Storage quota exceeded. Please clear browser data.",
      F.STORAGE_ACCESS_DENIED,
      r
    )) : r.name === "SecurityError" ? (console.error(
      "localStorage access denied (private browsing or security settings)"
    ), new z(
      "Access to localStorage is denied. Please check browser settings.",
      F.STORAGE_ACCESS_DENIED,
      r
    )) : (console.error(
      "Unexpected error accessing localStorage:",
      r.name
    ), new z(
      "Failed to access storage",
      F.STORAGE_ACCESS_DENIED,
      r
    ));
  }
}, Ft = (t, r) => {
  try {
    if (typeof window > "u")
      return console.warn("localStorage write attempted on server side"), !1;
    if (!window.localStorage)
      throw new z(
        "localStorage is not available",
        F.STORAGE_ACCESS_DENIED
      );
    return window.localStorage.setItem(t, r), !0;
  } catch (o) {
    throw o.name === "QuotaExceededError" ? (console.error("Storage quota exceeded"), new z(
      "Storage quota exceeded. Please clear browser data.",
      F.STORAGE_ACCESS_DENIED,
      o
    )) : o.name === "SecurityError" ? (console.error(
      "localStorage write denied (private browsing or security settings)"
    ), new z(
      "Access to localStorage is denied. Please check browser settings.",
      F.STORAGE_ACCESS_DENIED,
      o
    )) : (console.error(
      "Unexpected error writing to localStorage:",
      o.name
    ), new z(
      "Failed to write to storage",
      F.STORAGE_ACCESS_DENIED,
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
    const t = Pt(V.ACCESS_TOKEN), r = Pt(V.REFRESH_TOKEN), o = Pt(V.USER);
    let i = null;
    if (o)
      try {
        i = JSON.parse(o);
      } catch {
        o && o !== "null" && o !== "undefined" && console.warn(
          "Invalid user data in localStorage, clearing:",
          o.substring(0, 50)
        ), eo(V.USER);
      }
    return {
      accessToken: t,
      refreshToken: r,
      user: i
    };
  } catch (t) {
    throw t instanceof z ? t : new z(
      "Failed to retrieve authentication tokens",
      F.UNKNOWN_ERROR,
      t
    );
  }
}, bn = () => {
  try {
    const { accessToken: t, refreshToken: r } = ct();
    return !(t || r) ? {
      isAuthenticated: !1,
      error: new z(
        "No authentication tokens found",
        F.TOKEN_NOT_FOUND
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
        F.UNKNOWN_ERROR,
        t
      )
    };
  }
}, to = (t, r, o = null) => {
  try {
    if (!t && !r)
      throw new z(
        "At least one token must be provided",
        F.TOKEN_INVALID
      );
    return t && Ft(V.ACCESS_TOKEN, t), r && Ft(V.REFRESH_TOKEN, r), o && Ft(V.USER, JSON.stringify(o)), {
      success: !0,
      error: null
    };
  } catch (i) {
    return console.error("Failed to store authentication tokens:", i), {
      success: !1,
      error: i instanceof z ? i : new z(
        "Failed to store tokens",
        F.UNKNOWN_ERROR,
        i
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
    ].map((i) => eo(i)).every((i) => i) || console.warn("Some tokens could not be removed from localStorage"), {
      success: !0,
      error: null
    };
  } catch (t) {
    return console.error("Failed to clear authentication tokens:", t), {
      success: !1,
      error: t instanceof z ? t : new z(
        "Failed to clear tokens",
        F.LOGOUT_FAILED,
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
      error: t instanceof z ? t : new z(
        "Failed to retrieve user data",
        F.UNKNOWN_ERROR,
        t
      )
    };
  }
}, la = (t) => {
  if (!(t instanceof z))
    return "An unexpected error occurred. Please try again.";
  switch (t.code) {
    case F.STORAGE_ACCESS_DENIED:
      return "Unable to access browser storage. Please check your browser settings and disable private browsing if enabled.";
    case F.TOKEN_NOT_FOUND:
      return "You are not logged in. Please sign in to continue.";
    case F.TOKEN_INVALID:
      return "Your session is invalid. Please sign in again.";
    case F.TOKEN_EXPIRED:
      return "Your session has expired. Please sign in again.";
    case F.LOGOUT_FAILED:
      return "Failed to log out properly. Please clear your browser cache and try again.";
    case F.UNKNOWN_ERROR:
    default:
      return "An unexpected error occurred. Please try again or contact support if the problem persists.";
  }
}, Yt = (t, r = "Unknown") => {
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
}, vn = (t) => {
  if (!t)
    throw new Error("API base URL is required to create axios client");
  const r = Ir.create({
    baseURL: t,
    headers: {
      "Content-Type": "application/json"
    }
  });
  let o = !1, i = null, a = [];
  const u = (s, l) => {
    a.forEach(({ resolve: c, reject: h }) => {
      s ? h(s) : l && c(l);
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
      var p;
      const l = s.config, c = (p = s.response) == null ? void 0 : p.status, h = (l == null ? void 0 : l.url) || "", d = h.includes("/auth/refresh");
      if (c !== 401 || l._retry || d)
        return Promise.reject(s);
      l._retry = !0;
      const { refreshToken: v } = ct();
      if (!v) {
        const x = new Error(
          "No refresh token available for token refresh"
        );
        return Yt(x, "AxiosClient - Token Refresh"), dt(), typeof window < "u" && (window.location.href = "/login"), Promise.reject(s);
      }
      if (o && i)
        return new Promise((x, E) => {
          a.push({ resolve: x, reject: E });
        }).then((x) => {
          const {
            accessToken: E,
            refreshToken: g
          } = x;
          if (l.headers && (l.headers.Authorization = `Bearer ${E}`), h.includes("/auth/logout"))
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
      o = !0, i = Ir.post(
        `${t}/auth/refresh`,
        {
          refresh_token: v
        }
      );
      try {
        const x = await i, { accessToken: E, refreshToken: g } = x.data;
        if (to(E, g, null), u(null, {
          accessToken: E,
          refreshToken: g
        }), l.headers && (l.headers.Authorization = `Bearer ${E}`), h.includes("/auth/logout"))
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
        return Yt(
          x,
          "AxiosClient - Token Refresh Failed"
        ), u(x), dt(), typeof window < "u" && (window.location.href = "/login"), Promise.reject(x);
      } finally {
        o = !1, i = null;
      }
    }
  ), r;
}, pe = {
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
        light: r ? pe[300] : pe[200],
        main: pe[400],
        dark: pe[700],
        contrastText: pe[50]
      },
      info: r ? {
        light: pe[500],
        main: pe[700],
        dark: pe[900],
        contrastText: pe[300]
      } : {
        light: pe[100],
        main: pe[300],
        dark: pe[600],
        contrastText: me[50]
      },
      warning: r ? { light: qe[400], main: qe[500], dark: qe[700] } : { light: qe[300], main: qe[400], dark: qe[800] },
      error: r ? { light: Je[400], main: Je[500], dark: Je[700] } : { light: Je[300], main: Je[400], dark: Je[800] },
      success: r ? { light: Ye[400], main: Ye[500], dark: Ye[700] } : { light: Ye[300], main: Ye[400], dark: Ye[800] },
      grey: me,
      divider: r ? Pe(me[700], 0.6) : Pe(me[300], 0.4),
      background: r ? { default: me[900], paper: "hsl(220, 30%, 7%)" } : { default: "hsl(0, 0%, 99%)", paper: "hsl(220, 35%, 97%)" },
      text: r ? { primary: "hsl(0, 0%, 100%)", secondary: me[400] } : { primary: me[800], secondary: me[600] },
      action: r ? {
        hover: Pe(me[600], 0.2),
        selected: Pe(me[600], 0.3)
      } : {
        hover: Pe(me[200], 0.2),
        selected: Pe(me[200], 0.3)
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
  const { accessToken: o, refreshToken: i } = ct();
  if (o)
    return !0;
  if (i)
    try {
      const a = await t.post("/auth/refresh", {
        refresh_token: i
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
}, yt = ({ size: t = 20 }) => /* @__PURE__ */ f(
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
  busy: i = !1,
  shortcutKeys: a,
  accentColor: u = "#01584f",
  rightOffsetPx: s = 0
}) => {
  const l = a ? `Ask Nexa (${a.join("")})` : "Ask Nexa", c = {
    onClick: r,
    "aria-label": "Ask Nexa",
    "aria-pressed": o,
    "data-testid": "assistant-button"
  };
  return t === "sidebar" ? /* @__PURE__ */ f(
    Xe,
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
        borderColor: o ? Qe : "rgba(9, 193, 174, 0.45)",
        bgcolor: "rgba(9, 193, 174, 0.08)",
        color: u,
        transition: "border-color 150ms, background-color 150ms",
        "&:hover": { bgcolor: "rgba(9, 193, 174, 0.14)" },
        "&.Mui-focusVisible": {
          outline: `2px solid ${Qe}`,
          outlineOffset: 2
        },
        ...i && $t(8, "background.paper")
      },
      children: [
        /* @__PURE__ */ e(yt, { size: 20 }),
        /* @__PURE__ */ e(
          M,
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
      ...c,
      "data-variant": "sidebar-icon",
      sx: {
        width: 44,
        height: 44,
        borderRadius: "8px",
        border: "1px solid",
        borderColor: o ? Qe : "rgba(9, 193, 174, 0.45)",
        bgcolor: "rgba(9, 193, 174, 0.08)",
        "&:hover": { bgcolor: "rgba(9, 193, 174, 0.14)" },
        ...i && $t(8, "background.paper")
      },
      children: /* @__PURE__ */ e(yt, { size: 20 })
    }
  ) }) : /* @__PURE__ */ e(ve, { title: l, placement: "left", children: /* @__PURE__ */ e(
    Oe,
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
        outline: o ? `2px solid ${Qe}` : "none",
        outlineOffset: 2,
        "&:hover": { bgcolor: "background.paper", boxShadow: 6 },
        "&.Mui-focusVisible": { outline: `2px solid ${Qe}` },
        ...i && $t(16, "background.paper")
      },
      children: /* @__PURE__ */ e(b, { sx: { display: "flex", alignItems: "center" }, children: /* @__PURE__ */ e(yt, { size: 26 }) })
    }
  ) });
}, vt = ({
  title: t = "",
  message: r = "",
  buttonText: o = "",
  onButtonClick: i,
  show: a = !0
}) => a ? /* @__PURE__ */ e(Po, { variant: "outlined", sx: { m: 1.5, flexShrink: 0 }, children: /* @__PURE__ */ f(Fo, { children: [
  /* @__PURE__ */ e($o, { fontSize: "small" }),
  /* @__PURE__ */ e(M, { gutterBottom: !0, sx: { fontWeight: 600 }, children: t }),
  /* @__PURE__ */ e(
    M,
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
      onClick: i,
      children: o
    }
  )
] }) }) : null, at = 24, wn = 720, Rn = 1140, In = 1250, Cn = ({
  open: t,
  children: r,
  variant: o,
  position: i,
  width: a,
  sidebarWidthPx: u,
  bottomOffsetPx: s,
  fullScreen: l,
  fullScreenBottom: c = "0px",
  onClose: h
}) => {
  m.useEffect(() => {
    if (!t || !h)
      return;
    const E = (g) => {
      g.key === "Escape" && h();
    };
    return window.addEventListener("keydown", E), () => window.removeEventListener("keydown", E);
  }, [t, h]);
  const d = o === "docked", v = at + s;
  let p;
  l ? p = {
    top: 0,
    left: 0,
    right: 0,
    bottom: c,
    borderRadius: 0
  } : d ? p = {
    top: 0,
    right: 0,
    bottom: 0,
    width: a,
    maxWidth: "100vw",
    borderRadius: 0,
    borderWidth: "0 0 0 1px"
  } : p = {
    bottom: v,
    ...i === "left" ? { left: u + at } : { right: at },
    width: a,
    maxWidth: `calc(100vw - ${at * 2}px)`,
    height: `min(${wn}px, calc(100vh - ${v + at}px))`,
    borderRadius: "12px"
  };
  const x = /* @__PURE__ */ e(
    qt,
    {
      role: d ? "complementary" : "dialog",
      "aria-label": "Nexa chat",
      "data-testid": "chat-panel",
      "data-variant": o,
      elevation: 8,
      sx: {
        position: "fixed",
        zIndex: d ? Rn : In,
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
  return d ? /* @__PURE__ */ e(Ko, { direction: "left", in: t, mountOnEnter: !0, children: x }) : /* @__PURE__ */ e(
    Uo,
    {
      in: t,
      mountOnEnter: !0,
      style: {
        transformOrigin: i === "left" ? "bottom left" : "bottom right"
      },
      children: x
    }
  );
}, On = 180, Wr = 250, _n = "#01584F", Tn = ({
  text: t,
  testId: r
}) => {
  const o = m.useRef(null), [i, a] = m.useState(!1), u = m.useCallback(() => {
    const s = o.current;
    s && a(s.scrollWidth > s.clientWidth + 0.5);
  }, []);
  return m.useLayoutEffect(() => {
    u();
  }, [u, t]), m.useEffect(() => {
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
      disableHoverListener: !i,
      disableFocusListener: !i,
      disableTouchListener: !i,
      children: /* @__PURE__ */ e(
        M,
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
}, oo = (t, r, o, i) => {
  const a = t ? 48 : 44, u = t ? "text.secondary" : r, s = t ? _n : r;
  return { activeBg: s, sx: i ? {
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
}, no = ({ link: t }) => /* @__PURE__ */ f(se, { alignItems: "center", spacing: 1, sx: { width: "100%" }, children: [
  /* @__PURE__ */ e(
    b,
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
  accentColor: i,
  isSecondary: a,
  surfaceBackgroundColor: u,
  railShowTitles: s
}) => {
  const l = It(), [c, h] = m.useState(null), [d, v] = m.useState(!1), p = m.useRef(
    null
  ), x = m.useRef(null), E = m.useRef(null), g = m.useRef(!1), y = m.useRef(!1), _ = m.useId(), A = () => {
    p.current && (clearTimeout(p.current), p.current = null);
  }, C = () => {
    A(), p.current = setTimeout(() => {
      v(!1), p.current = null;
    }, On);
  }, w = () => {
    A(), v(!0);
  };
  m.useEffect(() => {
    if (!d)
      return;
    const D = (U) => {
      var I;
      U.key === "Escape" && (v(!1), (I = E.current) == null || I.focus());
    };
    return document.addEventListener("keydown", D), () => document.removeEventListener("keydown", D);
  }, [d]), m.useEffect(() => {
    if (!d || !y.current)
      return;
    const D = globalThis.requestAnimationFrame(() => {
      var I;
      const U = (I = x.current) == null ? void 0 : I.querySelector(
        '[role="menuitem"]'
      );
      U == null || U.focus(), y.current = !1;
    });
    return () => cancelAnimationFrame(D);
  }, [d]);
  const $ = Ge(t, r), { activeBg: B, sx: k } = oo(
    a,
    i,
    $,
    s
  ), le = /* @__PURE__ */ e(
    Oe,
    {
      ref: E,
      component: t.path ? "a" : "button",
      href: t.path || void 0,
      "aria-label": t.text,
      onFocus: () => {
        g.current || w();
      },
      onBlur: (D) => {
        var I;
        const U = D.relatedTarget;
        U && ((I = x.current) != null && I.contains(U)) || C();
      },
      onKeyDown: (D) => {
        D.key === "ArrowDown" && (D.preventDefault(), y.current = !0, w());
      },
      onClick: (D) => {
        D.preventDefault(), D.stopPropagation(), t.path && (o == null || o(t.path));
      },
      "aria-haspopup": "menu",
      "aria-expanded": d,
      "aria-controls": d ? _ : void 0,
      "data-testid": `rail-submenu-trigger-${t.text}`,
      sx: k,
      children: s ? /* @__PURE__ */ e(no, { link: t }) : t.icon
    }
  );
  return /* @__PURE__ */ f(
    b,
    {
      sx: {
        width: "100%",
        display: "flex",
        justifyContent: "center"
      },
      children: [
        /* @__PURE__ */ e(
          b,
          {
            ref: h,
            "data-testid": `rail-submenu-anchor-${t.text}`,
            sx: { display: "inline-flex", maxWidth: "100%" },
            onMouseEnter: () => {
              g.current = !0, w();
            },
            onMouseLeave: () => {
              g.current = !1, C();
            },
            children: io(le, t.text, s)
          }
        ),
        /* @__PURE__ */ e(
          Xo,
          {
            open: d && !!c,
            anchorEl: c,
            placement: "right-start",
            modifiers: [{ name: "offset", options: { offset: [8, 0] } }],
            sx: { zIndex: (D) => D.zIndex.modal },
            children: /* @__PURE__ */ e(
              qt,
              {
                ref: x,
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
  function Y(D, U, I) {
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
              pl: 2 + I * 1.5,
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
        ...Y(N.subitems, ee, I + 1)
      ] : [
        /* @__PURE__ */ f(
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
              pl: 2 + I * 1.5,
              maxWidth: "100%",
              overflow: "hidden",
              color: a ? "text.secondary" : i,
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
  accentColor: i,
  isSecondary: a,
  railShowTitles: u
}) => {
  const s = !!(t.path && r === t.path), { sx: l } = oo(
    a,
    i,
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
        onClick: (c) => {
          c.preventDefault(), c.stopPropagation(), t.path && (o == null || o(t.path));
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
  b,
  {
    sx: {
      width: "100%",
      display: "flex",
      justifyContent: "center"
    },
    children: /* @__PURE__ */ e(Ce, { sx: { width: "60%", borderColor: "divider" } })
  }
), Wn = () => /* @__PURE__ */ e(
  b,
  {
    sx: {
      width: "100%",
      my: 2,
      display: "flex",
      justifyContent: "center"
    },
    children: /* @__PURE__ */ e(Ce, { sx: { width: "60%", borderColor: "divider" } })
  }
), kr = (t, r) => t.map((o, i) => /* @__PURE__ */ f(m.Fragment, { children: [
  r(o, i),
  i < t.length - 1 ? /* @__PURE__ */ e(Nn, {}) : null
] }, i)), kn = ({
  mainLinks: t,
  secondaryLinks: r = [],
  activePath: o,
  onLinkClick: i,
  accentColor: a = "#01584f",
  surfaceBackgroundColor: u,
  railShowTitles: s = !1
}) => {
  const l = (h, d) => lt(h) ? /* @__PURE__ */ e(
    An,
    {
      link: h,
      activePath: o,
      onLinkClick: i,
      accentColor: a,
      isSecondary: d,
      surfaceBackgroundColor: u,
      railShowTitles: s
    }
  ) : /* @__PURE__ */ e(
    Dn,
    {
      link: h,
      activePath: o,
      onLinkClick: i,
      accentColor: a,
      isSecondary: d,
      railShowTitles: s
    }
  ), c = s ? 1.25 : 1;
  return /* @__PURE__ */ f(
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
        kr(t, (h) => l(h, !1)),
        r.length > 0 ? /* @__PURE__ */ f(Fe, { children: [
          /* @__PURE__ */ e(Wn, {}),
          /* @__PURE__ */ e(b, { sx: { mt: "auto", pb: 2 }, children: /* @__PURE__ */ e(se, { gap: c, alignItems: "center", children: kr(
            r,
            (h) => l(h, !0)
          ) }) })
        ] }) : null
      ]
    }
  );
}, Ln = (t) => t ? Qr(t) : "USER", Mn = (t) => t.split(/\s+/).filter(Boolean).slice(0, 2).map((r) => r.charAt(0).toUpperCase()).join(""), Lr = {
  overflow: "hidden",
  textOverflow: "ellipsis",
  whiteSpace: "nowrap",
  maxWidth: "100%"
}, Mr = ({ count: t }) => t ? /* @__PURE__ */ e(
  b,
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
) : null, Jt = ({ name: t, avatar: r, color: o, size: i = 36 }) => /* @__PURE__ */ e(
  jo,
  {
    src: r,
    alt: t,
    sx: {
      width: i,
      height: i,
      flexShrink: 0,
      fontSize: i * 0.36,
      fontWeight: 600,
      bgcolor: o,
      color: "#ffffff"
    },
    children: Mn(t)
  }
), ao = ({ name: t, role: r, avatar: o, avatarColor: i, showText: a }) => /* @__PURE__ */ f(Fe, { children: [
  /* @__PURE__ */ e(Jt, { name: t, avatar: o, color: i }),
  a && /* @__PURE__ */ f(
    b,
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
          M,
          {
            variant: "body2",
            sx: { ...Lr, fontWeight: 600, color: "inherit" },
            children: t
          }
        ),
        /* @__PURE__ */ e(
          M,
          {
            variant: "caption",
            sx: { ...Lr, opacity: 0.8, color: "inherit" },
            children: Ln(r)
          }
        )
      ]
    }
  )
] }), zr = {
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
  width: i,
  avatarColor: a,
  showNotifications: u,
  notificationCount: s,
  onNotificationsClick: l,
  userName: c = "User",
  userRole: h,
  userAvatar: d,
  menuItems: v = [],
  showSettings: p,
  onSettingsClick: x,
  showThemeToggler: E,
  theme: g,
  onThemeToggle: y,
  onLogout: _
}) => {
  const A = (C) => () => {
    r(), C == null || C();
  };
  return /* @__PURE__ */ f(
    Vo,
    {
      anchorEl: t,
      open: !!t,
      onClose: r,
      anchorOrigin: zr[o].anchor,
      transformOrigin: zr[o].transform,
      slotProps: {
        paper: {
          sx: {
            width: i ?? 240,
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
                name: c,
                role: h,
                avatar: d,
                avatarColor: a,
                showText: !0
              }
            )
          }
        ),
        /* @__PURE__ */ e(Ce, {}),
        u && /* @__PURE__ */ f(Se, { onClick: A(l), children: [
          /* @__PURE__ */ e(ae, { children: /* @__PURE__ */ e(jr, { fontSize: "small" }) }),
          /* @__PURE__ */ e(We, { children: "Notifications" }),
          /* @__PURE__ */ e(Mr, { count: s })
        ] }),
        v.map((C) => /* @__PURE__ */ f(Se, { onClick: A(C.onClick), children: [
          C.icon && /* @__PURE__ */ e(ae, { children: C.icon }),
          /* @__PURE__ */ e(We, { inset: !C.icon, children: C.label }),
          /* @__PURE__ */ e(Mr, { count: C.badge })
        ] }, C.key)),
        p && /* @__PURE__ */ f(Se, { onClick: A(x), children: [
          /* @__PURE__ */ e(ae, { children: /* @__PURE__ */ e(Vr, { fontSize: "small" }) }),
          /* @__PURE__ */ e(We, { children: "Settings" })
        ] }),
        E && [
          /* @__PURE__ */ e(Ce, {}, "theme-divider"),
          /* @__PURE__ */ f(b, { sx: { px: 1.5, py: 1 }, children: [
            /* @__PURE__ */ e(
              M,
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
            /* @__PURE__ */ f(
              Yo,
              {
                exclusive: !0,
                fullWidth: !0,
                size: "small",
                "aria-label": "Theme",
                value: g,
                onChange: (C, w) => w && w !== g && (y == null ? void 0 : y()),
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
                  /* @__PURE__ */ e(Cr, { value: "light", children: "Light" }),
                  /* @__PURE__ */ e(Cr, { value: "dark", children: "Dark" })
                ]
              }
            )
          ] }, "theme")
        ],
        /* @__PURE__ */ e(Ce, {}),
        /* @__PURE__ */ f(
          Se,
          {
            onClick: A(_),
            sx: {
              color: g === "dark" ? "hsl(0, 90%, 65%)" : "error.main"
            },
            children: [
              /* @__PURE__ */ e(ae, { sx: { color: "inherit" }, children: /* @__PURE__ */ e(Xr, { fontSize: "small" }) }),
              /* @__PURE__ */ e(We, { children: "Log out" })
            ]
          }
        )
      ]
    }
  );
}, lo = 64, zn = 2, st = ({
  label: t,
  icon: r,
  onClick: o,
  active: i,
  color: a,
  activeColor: u,
  activeBackground: s,
  ariaLabel: l,
  haspopup: c,
  isPage: h = !1,
  testId: d
}) => /* @__PURE__ */ f(
  Xe,
  {
    onClick: o,
    "aria-label": l ?? t,
    "aria-haspopup": c,
    "aria-expanded": c ? i : void 0,
    "aria-current": h && i ? "page" : void 0,
    "data-testid": d,
    sx: {
      flex: "1 1 0",
      minWidth: 0,
      height: "100%",
      flexDirection: "column",
      gap: 0.25,
      color: i ? u : a,
      "&.Mui-focusVisible": {
        outline: "2px solid",
        outlineColor: u,
        outlineOffset: -4
      }
    },
    children: [
      /* @__PURE__ */ e(
        b,
        {
          sx: {
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: 28,
            minWidth: 48,
            borderRadius: "14px",
            bgcolor: i ? s : "transparent",
            transition: "background-color 150ms"
          },
          children: r
        }
      ),
      /* @__PURE__ */ e(
        M,
        {
          component: "span",
          sx: {
            fontSize: 11,
            fontWeight: i ? 600 : 500,
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
  searchOpen: i,
  showAssistant: a,
  onAssistantClick: u,
  assistantActive: s,
  showProfile: l,
  background: c,
  color: h,
  activeColor: d,
  activeBackground: v,
  pinnedLinks: p = [],
  activePath: x,
  onLinkClick: E,
  ...g
}) => {
  const y = p.filter((k) => k.path).slice(0, zn), [_, A] = m.useState(
    null
  ), { userName: C = "User", userAvatar: w, avatarColor: $ } = g, B = { color: h, activeColor: d, activeBackground: v };
  return /* @__PURE__ */ f(
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
        bgcolor: c,
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
        y.map((k) => /* @__PURE__ */ e(
          st,
          {
            label: k.text,
            icon: k.icon,
            onClick: () => E == null ? void 0 : E(k.path),
            active: Ge(k, x),
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
              b,
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
            active: i,
            haspopup: "dialog",
            testId: "mobile-nav-search",
            ...B
          }
        ),
        l && /* @__PURE__ */ f(Fe, { children: [
          /* @__PURE__ */ e(
            st,
            {
              label: "Account",
              ariaLabel: `Account menu for ${C}`,
              icon: /* @__PURE__ */ e(
                Jt,
                {
                  name: C,
                  avatar: w,
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
              ...g
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
      onEntered: (i) => {
        var a;
        return (a = i.querySelector(
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
    children: /* @__PURE__ */ f(
      se,
      {
        direction: "row",
        spacing: 1,
        "data-testid": "mobile-search-sheet",
        sx: { alignItems: "center" },
        children: [
          /* @__PURE__ */ e(b, { sx: { flex: "1 1 auto", minWidth: 0 }, children: o }),
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
), Pn = ({
  height: t,
  onMenuClick: r,
  appName: o,
  logo: i,
  onBrandClick: a,
  background: u,
  color: s,
  brandColor: l = s,
  endContent: c
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
    children: /* @__PURE__ */ f(Zo, { sx: { minHeight: `${t}px !important`, gap: 1, px: 1 }, children: [
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
          logo: i,
          onClick: a,
          color: l,
          testId: "mobile-brand"
        }
      ),
      c ? /* @__PURE__ */ e(b, { sx: { ml: "auto", display: "flex", alignItems: "center" }, children: c }) : null
    ] })
  }
), Zt = ({
  count: t,
  onClick: r,
  color: o,
  hoverColor: i,
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
        "&:hover": { bgcolor: i },
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
          children: /* @__PURE__ */ e(jr, {})
        }
      )
    }
  ) });
}, co = ({
  title: t,
  subtitle: r,
  testId: o,
  width: i,
  sx: a,
  footer: u,
  children: s
}) => {
  const l = m.useId();
  return /* @__PURE__ */ f(
    b,
    {
      role: "dialog",
      "aria-modal": "false",
      "aria-labelledby": l,
      "data-testid": o,
      sx: [
        { width: i, minWidth: i },
        ...Array.isArray(a) ? a : [a]
      ],
      children: [
        /* @__PURE__ */ f(b, { sx: { px: 2, pt: 1.5, pb: 1 }, children: [
          /* @__PURE__ */ e(M, { id: l, sx: { fontWeight: 600 }, children: t }),
          r ? /* @__PURE__ */ e(
            M,
            {
              variant: "body2",
              sx: { mt: 0.25, color: "text.secondary" },
              children: r
            }
          ) : null
        ] }),
        s,
        u ? /* @__PURE__ */ f(Fe, { children: [
          /* @__PURE__ */ e(Ce, {}),
          u
        ] }) : null
      ]
    }
  );
}, Fn = 5, $n = 56, Un = ({
  platforms: t,
  currentPlatformKey: r,
  onSelect: o,
  accentColor: i,
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
    footer: /* @__PURE__ */ f(
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
          /* @__PURE__ */ e(M, { variant: "body2", children: "Platforms available to your account" })
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
          maxHeight: Fn * $n,
          overflowY: "auto"
        },
        children: t.map((l) => {
          const c = l.key === r;
          return /* @__PURE__ */ f(
            Se,
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
                bgcolor: c ? a : "transparent",
                cursor: c ? "default" : "pointer",
                "&:hover": {
                  bgcolor: c ? a : "action.hover"
                }
              },
              children: [
                /* @__PURE__ */ f(b, { sx: { flex: 1, minWidth: 0 }, children: [
                  /* @__PURE__ */ e(M, { noWrap: !0, sx: { fontWeight: 500 }, children: l.name }),
                  l.description ? /* @__PURE__ */ e(
                    M,
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
                c ? /* @__PURE__ */ f(
                  se,
                  {
                    direction: "row",
                    sx: {
                      alignItems: "center",
                      gap: 0.5,
                      flexShrink: 0,
                      color: i,
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
  sx: i
}) => {
  const [a, u] = m.useState({}), s = (c) => a[c.title] ?? c.defaultOpen ?? !0, l = (c) => u((h) => ({
    ...h,
    [c.title]: !s(c)
  }));
  return /* @__PURE__ */ e(
    co,
    {
      title: "Settings",
      testId: "settings-panel",
      width: o,
      sx: i,
      children: /* @__PURE__ */ e(
        Ct,
        {
          autoFocusItem: !0,
          "aria-label": "Settings",
          sx: { px: 1, py: 0.5, maxHeight: "60vh", overflowY: "auto" },
          children: t.flatMap((c) => {
            const h = s(c), d = Br(c.title), v = /* @__PURE__ */ f(
              Se,
              {
                onClick: () => l(c),
                "aria-expanded": h,
                "data-testid": `settings-section-${d}`,
                sx: {
                  borderRadius: "8px",
                  py: 0.75,
                  gap: 1,
                  fontWeight: 600
                },
                children: [
                  /* @__PURE__ */ e(b, { component: "span", sx: { flex: 1, minWidth: 0 }, children: c.title }),
                  /* @__PURE__ */ e(
                    sn,
                    {
                      "data-testid": `settings-section-${d}-chevron`,
                      sx: {
                        fontSize: 20,
                        color: "text.secondary",
                        flexShrink: 0,
                        transform: h ? "none" : "rotate(-90deg)",
                        transition: "transform 150ms ease"
                      }
                    }
                  )
                ]
              },
              `section-${c.title}`
            );
            return h ? [
              v,
              ...c.items.map((p) => /* @__PURE__ */ e(
                Se,
                {
                  onClick: () => r(p, c),
                  disabled: p.disabled,
                  "data-testid": `settings-item-${p.key ?? Br(p.text)}`,
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
            ] : [v];
          })
        }
      )
    }
  );
}, Gn = 288, Xn = 300, uo = {
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
}, jn = ({ mode: t, onToggle: r, accentColor: o, tint: i }) => {
  const a = m.useRef(null), u = m.useRef(null), s = (h) => {
    var d;
    h !== t && (r == null || r()), (d = (h === "light" ? a : u).current) == null || d.focus();
  }, l = (h) => {
    if (!(h.key === "Tab" || h.key === "Escape"))
      switch (h.stopPropagation(), h.key) {
        case "ArrowLeft":
        case "ArrowRight":
        case "ArrowUp":
        case "ArrowDown":
          h.preventDefault(), s(t === "light" ? "dark" : "light");
          break;
        case "Home":
          h.preventDefault(), s("light");
          break;
        case "End":
          h.preventDefault(), s("dark");
          break;
      }
  }, c = (h, d, v, p) => {
    const x = t === h;
    return /* @__PURE__ */ e(
      Xe,
      {
        ref: p,
        role: "radio",
        "aria-checked": x,
        "aria-label": d,
        tabIndex: x ? 0 : -1,
        onClick: () => s(h),
        "data-testid": `theme-segment-${h}`,
        sx: {
          width: 36,
          height: 26,
          borderRadius: "999px",
          color: x ? o : "text.secondary",
          bgcolor: x ? i : "transparent",
          transition: "background-color 150ms ease, color 150ms ease",
          "&.Mui-focusVisible": {
            boxShadow: `0 0 0 2px ${Pe(o, 0.6)}`
          },
          ...uo
        },
        children: /* @__PURE__ */ e(v, { sx: { fontSize: 18 } })
      }
    );
  };
  return /* @__PURE__ */ f(
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
        c("light", "Light", tn, a),
        c("dark", "Dark", Qo, u)
      ]
    }
  );
}, Vn = ({
  open: t,
  anchorEl: r,
  onClose: o,
  width: i,
  renderAvatar: a,
  userName: u,
  userEmail: s,
  roleLabel: l,
  accentColor: c,
  tint: h,
  showThemeToggler: d,
  theme: v,
  onThemeToggle: p,
  onProfileClick: x,
  showSettings: E,
  onSettingsClick: g,
  settingsSections: y,
  onSettingsItemClick: _,
  onLinkClick: A,
  platforms: C,
  currentPlatformKey: w,
  onPlatformSelect: $,
  onLogout: B
}) => {
  const le = It().palette.mode === "dark", Y = m.useRef(null), [D, U] = m.useState(null), I = m.useRef(null), N = m.useRef(null), ee = m.useRef(null), [K, ke] = m.useState(
    null
  ), [X, xe] = m.useState(0), [H, ge] = m.useState(null), ce = !!(C != null && C.length), te = E && !!(y != null && y.length), _e = E && (te || !!g), re = m.useCallback(() => {
    const n = I.current, S = H === "platforms" ? N.current : H === "settings" ? ee.current : null;
    if (!t || !n || !S || !K) {
      xe(0);
      return;
    }
    const O = n.getBoundingClientRect(), R = S.getBoundingClientRect().top, P = K.getBoundingClientRect().height, W = O.bottom - (R + P), oe = Math.max(0, O.height - P), G = Math.round(Math.min(Math.max(W, 0), oe));
    xe((Z) => Z === G ? Z : G);
  }, [t, H, K]);
  m.useLayoutEffect(() => {
    re();
  }, [re]), m.useEffect(() => {
    if (!D || typeof ResizeObserver > "u")
      return;
    const n = new ResizeObserver(() => {
      var S;
      (S = Y.current) == null || S.updatePosition(), re();
    });
    return n.observe(D), () => n.disconnect();
  }, [D, re]);
  const Ee = () => {
    ge(null);
  }, L = (n) => {
    o(), n == null || n();
  }, Te = () => {
    var S;
    const n = H === "platforms" ? N : ee;
    ge(null), (S = n.current) == null || S.focus();
  }, de = (n) => {
    ge((S) => S === n ? null : n);
  }, Le = (n) => {
    n.key !== w && (o(), $ ? $(n) : ln(n.url));
  }, Ae = (n, S) => {
    o(), n.onClick ? n.onClick() : _ ? _(n, S) : n.path && (A == null || A(n.path));
  }, ye = (n) => {
    n.key === "Escape" && H && (n.stopPropagation(), Te());
  }, q = { borderRadius: "8px", py: 1, gap: 0.5 }, we = { color: "text.secondary", fontSize: 20 }, J = {
    color: c,
    bgcolor: h,
    "& .MuiListItemIcon-root": { color: c },
    "& .MuiSvgIcon-root": { color: c },
    "&:hover": { bgcolor: Pe(c, 0.22) }
  }, ue = H === "settings", he = H === "platforms", Q = /* @__PURE__ */ f(se, { direction: "row", sx: { alignItems: "center", gap: 1.5, p: 2 }, children: [
    a(44),
    /* @__PURE__ */ f(b, { sx: { minWidth: 0, flex: 1 }, children: [
      /* @__PURE__ */ e(M, { noWrap: !0, sx: { fontWeight: 600 }, children: u }),
      s ? /* @__PURE__ */ e(
        M,
        {
          noWrap: !0,
          variant: "body2",
          "data-testid": "account-menu-email",
          sx: { color: "text.secondary" },
          children: s
        }
      ) : null,
      l ? /* @__PURE__ */ e(
        M,
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
      x ? /* @__PURE__ */ e(
        M,
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
  return /* @__PURE__ */ f(
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
        /* @__PURE__ */ f(
          b,
          {
            ref: I,
            "data-testid": "account-menu",
            sx: { ...ho, width: i, minWidth: i },
            children: [
              x ? /* @__PURE__ */ e(
                Xe,
                {
                  onClick: () => L(x),
                  "data-testid": "account-menu-header",
                  sx: {
                    display: "block",
                    width: "100%",
                    textAlign: "left",
                    transition: "background-color 150ms ease",
                    "& [data-hint]": { display: "none" },
                    "&:hover, &.Mui-focusVisible": {
                      bgcolor: h,
                      "& [data-hint]": { display: "block" },
                      "& [data-role]": { display: "none" }
                    },
                    ...uo
                  },
                  children: Q
                }
              ) : /* @__PURE__ */ e(b, { "data-testid": "account-menu-header", children: Q }),
              /* @__PURE__ */ e(Ce, {}),
              d ? /* @__PURE__ */ f(
                b,
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
                    /* @__PURE__ */ e(M, { sx: { flex: 1 }, children: "Theme" }),
                    /* @__PURE__ */ e(
                      jn,
                      {
                        mode: v,
                        onToggle: p,
                        accentColor: c,
                        tint: h
                      }
                    )
                  ]
                }
              ) : null,
              /* @__PURE__ */ f(
                Ct,
                {
                  autoFocusItem: t,
                  sx: { px: 1, pt: d ? 0 : 0.5, pb: 0.5 },
                  children: [
                    _e ? /* @__PURE__ */ f(
                      Se,
                      {
                        ref: ee,
                        onClick: te ? () => de("settings") : () => L(g),
                        "aria-haspopup": te ? "dialog" : void 0,
                        "aria-expanded": te ? ue : void 0,
                        "data-active": ue ? "true" : "false",
                        "data-testid": "menu-item-settings",
                        sx: ue ? { ...q, ...J } : q,
                        children: [
                          /* @__PURE__ */ e(ae, { children: /* @__PURE__ */ e(Vr, { fontSize: "small" }) }),
                          /* @__PURE__ */ e(M, { sx: { flex: 1 }, children: "Settings" }),
                          /* @__PURE__ */ e(Gt, { sx: we })
                        ]
                      }
                    ) : null,
                    ce ? /* @__PURE__ */ e(Ce, { component: "li", sx: { my: 0.5 } }) : null,
                    ce ? /* @__PURE__ */ f(
                      Se,
                      {
                        ref: N,
                        onClick: () => de("platforms"),
                        "aria-haspopup": "dialog",
                        "aria-expanded": he,
                        "data-active": he ? "true" : "false",
                        "data-testid": "menu-item-platforms",
                        sx: he ? { ...q, ...J } : q,
                        children: [
                          /* @__PURE__ */ e(ae, { children: /* @__PURE__ */ e(en, { fontSize: "small" }) }),
                          /* @__PURE__ */ e(M, { sx: { flex: 1 }, children: "Lumora Platforms" }),
                          /* @__PURE__ */ e(Gt, { sx: we })
                        ]
                      }
                    ) : null,
                    B ? /* @__PURE__ */ e(Ce, { component: "li", sx: { my: 0.5 } }) : null,
                    B ? /* @__PURE__ */ f(
                      Se,
                      {
                        onClick: () => L(B),
                        "data-testid": "menu-item-logout",
                        sx: {
                          ...q,
                          color: le ? "error.light" : "error.main"
                        },
                        children: [
                          /* @__PURE__ */ e(ae, { sx: { color: "inherit" }, children: /* @__PURE__ */ e(Xr, { fontSize: "small" }) }),
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
          b,
          {
            ref: ke,
            "data-testid": "account-menu-subcard",
            style: { marginBottom: X },
            sx: { display: "flex" },
            children: H === "platforms" ? /* @__PURE__ */ e(
              Un,
              {
                platforms: C,
                currentPlatformKey: w,
                onSelect: Le,
                accentColor: c,
                tint: h,
                width: Gn,
                sx: Hr
              }
            ) : /* @__PURE__ */ e(
              Kn,
              {
                sections: y,
                onItemClick: Ae,
                width: Xn,
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
  onLinkClick: i,
  logo: a,
  title: u,
  onBrandClick: s,
  brandColor: l,
  headerBackgroundColor: c,
  headerForegroundColor: h,
  activeAccentColor: d = "#01584f",
  groupAccentColor: v,
  activeForegroundColor: p,
  foregroundColor: x,
  surfaceBackgroundColor: E,
  collapsed: g,
  expandedWidth: y,
  collapsedWidth: _,
  topContent: A,
  color: C,
  hoverColor: w,
  avatarColor: $,
  showProfile: B = !0,
  userName: k = "User",
  userEmail: le,
  userRole: Y,
  userAvatar: D,
  showNotifications: U = !0,
  notificationCount: I = 0,
  onNotificationsClick: N,
  whatsNewCount: ee = 0,
  onProfileClick: K,
  showSettings: ke = !0,
  onSettingsClick: X,
  settingsSections: xe,
  onSettingsItemClick: H,
  platforms: ge,
  currentPlatformKey: ce,
  onPlatformSelect: te,
  onLogout: _e,
  theme: re = "light",
  showThemeToggler: Ee = !0,
  onThemeToggle: L
}) => {
  const Te = It(), de = Te.palette.mode === "dark", Le = E ?? (de ? Te.palette.background.paper : "#ffffff"), Ae = C ?? x ?? (de ? Te.palette.text.primary : d), ye = w ?? v ?? Rt(d), q = $ ?? d, we = m.useRef(null), [J, ue] = m.useState(!1);
  m.useEffect(() => {
    g && ue(!1);
  }, [g]);
  const he = Y ? Qr(Y) : void 0, Q = (W) => /* @__PURE__ */ e(
    Jt,
    {
      name: k,
      avatar: D,
      color: q,
      size: W
    }
  ), n = I + ee, S = U ? /* @__PURE__ */ e(
    Zt,
    {
      count: n,
      onClick: N,
      color: Ae,
      hoverColor: ye,
      tooltipPlacement: "right",
      testId: "panel-notifications"
    }
  ) : null, O = B ? /* @__PURE__ */ f(
    Xe,
    {
      ref: we,
      onClick: () => ue(!0),
      "aria-haspopup": "menu",
      "aria-expanded": J,
      "aria-label": "Account menu",
      "data-testid": "panel-user-button",
      sx: {
        flex: g ? "0 0 auto" : 1,
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
        g && U ? (
          // Collapsed: no room for the bell, so unread shows as a dot
          /* @__PURE__ */ e(
            Yr,
            {
              color: "error",
              variant: "dot",
              overlap: "circular",
              invisible: !n,
              children: Q(36)
            }
          )
        ) : Q(g ? 36 : 40),
        g ? null : /* @__PURE__ */ f(b, { sx: { minWidth: 0, textAlign: "left" }, children: [
          /* @__PURE__ */ e(
            M,
            {
              noWrap: !0,
              sx: { fontWeight: 600, color: Ae, lineHeight: 1.3 },
              children: k
            }
          ),
          he ? /* @__PURE__ */ e(
            M,
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
              children: he
            }
          ) : null
        ] })
      ]
    }
  ) : null, R = !!S && (!g || !O);
  return /* @__PURE__ */ f(
    b,
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
          jt,
          {
            mainLinks: t,
            secondaryLinks: r,
            activePath: o,
            onLinkClick: i,
            showHeaderBar: !0,
            logo: a,
            title: u,
            onBrandClick: s,
            brandColor: l,
            headerBackgroundColor: c,
            headerForegroundColor: h,
            activeAccentColor: d,
            groupAccentColor: v,
            activeForegroundColor: p,
            foregroundColor: x,
            surfaceBackgroundColor: Le,
            collapsed: g,
            expandedWidth: y,
            collapsedWidth: _,
            topContent: A,
            footer: O || R ? /* @__PURE__ */ f(
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
                  R ? S : null
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
            onClose: () => ue(!1),
            width: Math.max(y - 16, 240),
            renderAvatar: Q,
            userName: k,
            userEmail: le,
            roleLabel: he,
            accentColor: d,
            tint: ye,
            showThemeToggler: Ee,
            theme: re,
            onThemeToggle: L,
            onProfileClick: K,
            showSettings: ke,
            onSettingsClick: X,
            settingsSections: xe,
            onSettingsItemClick: H,
            onLinkClick: i,
            platforms: ge,
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
  showProfile: i,
  whatsNewCount: a = 0,
  ...u
}) => {
  var A;
  const {
    avatarColor: s,
    showNotifications: l,
    notificationCount: c,
    onNotificationsClick: h,
    userName: d = "User",
    userRole: v,
    userAvatar: p
  } = u, x = m.useRef(null), [E, g] = m.useState(
    null
  ), y = !!E;
  if (!l && !i)
    return null;
  const _ = {
    "&.Mui-focusVisible": { outline: "2px solid", outlineColor: r }
  };
  return /* @__PURE__ */ f(Fe, { children: [
    /* @__PURE__ */ f(
      se,
      {
        ref: x,
        direction: t ? "column" : "row",
        spacing: 0.5,
        "data-testid": "sidebar-footer",
        sx: { width: "100%", alignItems: "center" },
        children: [
          i && /* @__PURE__ */ e(
            ve,
            {
              title: t ? d : "",
              placement: "right",
              arrow: !0,
              children: /* @__PURE__ */ e(
                Xe,
                {
                  onClick: () => g(x.current),
                  "aria-label": `Account menu for ${d}`,
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
                    ..._
                  },
                  children: /* @__PURE__ */ e(
                    ao,
                    {
                      name: d,
                      role: v,
                      avatar: p,
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
              count: c + a,
              onClick: h,
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
        anchorEl: E,
        onClose: () => g(null),
        placement: t ? "beside" : "above",
        width: t || (A = x.current) == null ? void 0 : A.clientWidth,
        ...u
      }
    )
  ] });
}, Zn = 'input, textarea, [contenteditable="true"]', Pr = (t) => {
  var r;
  (r = t == null ? void 0 : t.querySelector(Zn)) == null || r.focus();
}, Qn = ({
  search: t,
  mode: r,
  onExpand: o,
  autoFocus: i = !1,
  onAutoFocused: a,
  color: u,
  hoverColor: s
}) => {
  const l = m.useRef(null), [c, h] = m.useState(null);
  return m.useEffect(() => {
    r === "full" && i && (Pr(l.current), a == null || a());
  }, [r, i, a]), r === "full" ? /* @__PURE__ */ e(
    b,
    {
      ref: l,
      "data-testid": "sidebar-search",
      sx: { width: "100%" },
      children: t
    }
  ) : /* @__PURE__ */ f(
    b,
    {
      "data-testid": "sidebar-search",
      sx: { width: "100%", display: "flex", justifyContent: "center" },
      children: [
        /* @__PURE__ */ e(ve, { title: "Search", placement: "right", arrow: !0, children: /* @__PURE__ */ e(
          Oe,
          {
            "aria-label": "Search",
            onClick: (d) => r === "expand" ? o == null ? void 0 : o() : h(d.currentTarget),
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
            open: !!c,
            anchorEl: c,
            onClose: () => h(null),
            anchorOrigin: { vertical: "top", horizontal: "right" },
            transformOrigin: { vertical: "top", horizontal: "left" },
            TransitionProps: {
              onEntered: (d) => Pr(d)
            },
            slotProps: { paper: { sx: { ml: 1, p: 1.5, width: 360 } } },
            children: t
          }
        )
      ]
    }
  );
}, ei = 100, ti = () => {
  const t = m.useRef(null), r = m.useRef(void 0), o = m.useRef(/* @__PURE__ */ new WeakSet()), [i, a] = m.useState(!1), [u, s] = m.useState(!1), l = () => {
    clearTimeout(r.current), r.current = void 0;
  };
  m.useEffect(() => {
    const d = (p) => {
      o.current.has(p) || (l(), a(!1));
    }, v = () => {
      l(), a(!1);
    };
    return document.addEventListener("mouseover", d), document.addEventListener("mousemove", d), document.documentElement.addEventListener("mouseleave", v), () => {
      l(), document.removeEventListener("mouseover", d), document.removeEventListener("mousemove", d), document.documentElement.removeEventListener(
        "mouseleave",
        v
      );
    };
  }, []), m.useEffect(() => {
    if (!u)
      return;
    const d = (v) => {
      var p;
      (p = t.current) != null && p.contains(v.target) || s(!1);
    };
    return document.addEventListener("pointerdown", d), () => document.removeEventListener("pointerdown", d);
  }, [u]);
  const c = (d) => {
    var p, x;
    if ((p = d.target.classList) != null && p.contains("MuiBackdrop-root")) {
      const E = (x = t.current) == null ? void 0 : x.getBoundingClientRect();
      if (!(E && d.clientX >= E.left && d.clientX <= E.right && d.clientY >= E.top && d.clientY <= E.bottom))
        return;
    }
    o.current.add(d.nativeEvent), !i && r.current === void 0 && (r.current = setTimeout(() => {
      r.current = void 0, a(!0);
    }, ei));
  };
  return {
    expanded: i || u,
    pin: () => s(!0),
    rootProps: {
      ref: t,
      onMouseOver: c,
      onMouseMove: c,
      // Focus moving to an element outside unpins; a null target (the
      // focused element unmounted as the panel swapped layouts) does not.
      onBlur: (d) => {
        const v = d.relatedTarget;
        v && !d.currentTarget.contains(v) && s(!1);
      },
      onKeyDown: (d) => {
        d.key === "Escape" && s(!1);
      }
    }
  };
}, ri = 100, Fr = 80, Ut = 56, oi = 300, Kt = 288, Ze = 72, ni = "width 220ms cubic-bezier(0.4, 0, 0.2, 1), box-shadow 220ms ease", ii = 68, ai = { xs: 2, md: 5 }, si = () => typeof navigator < "u" && /Mac|iPhone|iPad/.test(navigator.platform || navigator.userAgent), li = (t, r) => {
  const o = (i) => typeof i == "number" ? r.spacing(i) : i;
  return typeof t == "object" ? Object.fromEntries(
    Object.entries(t).map(([i, a]) => [i, o(a)])
  ) : o(t);
}, ca = ({
  children: t,
  sidebarLinks: r = [],
  secondarySidebarLinks: o = [],
  appName: i = "Dashboard",
  showSidebar: a = !0,
  showSidebarRailTitles: u = !1,
  sidebarVariant: s = "rail",
  mobileNavigation: l = "bottom-bar",
  mobileBottomBarLinks: c,
  logo: h,
  onBrandClick: d,
  searchComponent: v,
  brandColor: p,
  contentPadding: x = ai,
  userMenuItems: E,
  sidebarBackgroundColor: g,
  sidebarHeaderBackgroundColor: y,
  groupAccentColor: _,
  activeSidebarForegroundColor: A,
  enableRefreshToken: C = !1,
  activePath: w,
  onLinkClick: $,
  showProfile: B = !0,
  userName: k,
  userRole: le,
  userAvatar: Y,
  userEmail: D,
  onLogout: U,
  showSettings: I = !0,
  onSettingsClick: N,
  onProfileClick: ee,
  settingsSections: K,
  onSettingsItemClick: ke,
  showNotifications: X = !0,
  notificationCount: xe = 0,
  NotificationSidebarContent: H,
  whatsNewCount: ge = 0,
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
  showThemeToggler: ue = !1,
  onThemeToggle: he,
  GlobalChatSidebar: Q,
  useChatSidebar: n,
  chatPanelMode: S = "docked",
  chatPanelPosition: O = "right",
  chatPanelWidth: R = 420,
  onChatClose: P,
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
  const rr = ko(), fe = Lo(rr.breakpoints.down("md")), or = wr(
    () => $r(En(J)),
    [J]
  ), ht = J === "dark", nr = Ae ?? "#01584f", Me = ye ?? nr, Ot = we ?? (ht ? "hsl(220, 35%, 9%)" : "#f2f9fc"), je = s === "collapsible", _t = s === "panel", po = _t && a && !fe, ze = s === "rail-labeled", mo = je || ze, $e = g ?? (ht ? "hsl(220, 30%, 7%)" : "#ffffff"), ft = y ?? $e, De = q ?? (ht ? "#ffffff" : Me), tt = _ ?? Rt(De), rt = y ? Xt(ft) : De, ir = (T) => /* @__PURE__ */ e(
    ie,
    {
      role: "img",
      "aria-label": `${i} logo`,
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
  ), pt = p ?? rt, Tt = h ?? ir(pt), xo = h ?? ir(p ?? De), At = ti(), Re = !At.expanded, [go, ar] = Ve(!1), bo = Wo(() => ar(!1), []);
  let Ie = 0;
  a && !fe && (ze ? Ie = Fr : je || _t ? Ie = Ze : Ie = ri);
  const [sr, Ue] = Ve(!1), [lr, Dt] = Ve(!1), ne = fe && l === "bottom-bar", cr = `calc(${lo}px + env(safe-area-inset-bottom, 0px))`, [Nt, dr] = Ve({ open: !1, tab: "notifications" }), ur = () => dr((T) => ({ ...T, open: !1 })), So = X && !!H, [vo, Eo] = Ve(!0), [yo, wo] = Ve(!1), Wt = n == null ? void 0 : n(), hr = (Wt == null ? void 0 : Wt.isOpen) ?? !1, fr = S === "floating" ? "floating" : "docked", Ro = fr === "docked" && hr && Q && !fe ? R : 0, mt = Bt(Ee), pr = Bt(!1), mr = wr(
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
    const T = (j) => {
      (j.metaKey || j.ctrlKey) && !j.altKey && !j.shiftKey && j.key.toLowerCase() === ot && kt.current && (j.preventDefault(), kt.current());
    };
    return window.addEventListener("keydown", T), () => window.removeEventListener("keydown", T);
  }, [ot]);
  const xr = (T) => {
    const j = U(T);
    j instanceof Promise && j.catch((Be) => {
      console.error("Error in logout handler:", Be);
    });
  };
  if (bt(() => {
    (() => {
      var j;
      try {
        const { isAuthenticated: Be } = bn();
        if (!Be) {
          console.log("No session found, redirecting to login"), dt(), ut();
          return;
        }
        if (!pr.current) {
          const { user: it, error: zt } = Sn();
          if (it && !zt) {
            const Ao = {
              name: it.name || "",
              email: it.email || "",
              profilePicture: it.profilePicture || "",
              role: it.role || ""
            };
            pr.current = !0, (j = mt.current) == null || j.call(mt, Ao);
          } else
            zt && console.error("Error getting user data:", zt);
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
    return /* @__PURE__ */ e(yr, { theme: or, children: /* @__PURE__ */ f(
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
            Mo,
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
  }, Lt = H && (() => Io("notifications")), Co = xe + ge, gr = {
    avatarColor: Me,
    menuItems: E,
    showNotifications: X,
    notificationCount: xe,
    whatsNewCount: ge,
    onNotificationsClick: Lt,
    showProfile: B,
    userName: k,
    userRole: le,
    userAvatar: Y,
    showSettings: I,
    onSettingsClick: N,
    showThemeToggler: ue,
    theme: J,
    onThemeToggle: he,
    onLogout: xr
  }, Mt = (T) => /* @__PURE__ */ e(
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
    const j = Oo(T !== "full"), Be = _o(T);
    return j || Be ? /* @__PURE__ */ f(
      Ho,
      {
        spacing: 1.5,
        sx: { alignItems: T === "full" ? "stretch" : "center" },
        children: [
          j,
          Be
        ]
      }
    ) : void 0;
  }, Sr = () => /* @__PURE__ */ e(
    jt,
    {
      mainLinks: r,
      secondaryLinks: o,
      activePath: w,
      onLinkClick: $,
      showHeaderBar: je,
      logo: Tt,
      title: i,
      onBrandClick: d,
      brandColor: pt,
      headerBackgroundColor: je ? ft : void 0,
      headerForegroundColor: je ? rt : void 0,
      activeAccentColor: Me,
      groupAccentColor: _,
      activeForegroundColor: A,
      foregroundColor: q,
      surfaceBackgroundColor: $e,
      collapsed: ze || Re,
      showLabels: ze,
      expandedWidth: Kt,
      collapsedWidth: ze ? Fr : Ze,
      topContent: xt(
        ze ? "popover" : Re ? "expand" : "full"
      ),
      footer: Mt(ze || Re)
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
        zIndex: (j) => j.zIndex.appBar + 1,
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
    x,
    rr
  );
  return /* @__PURE__ */ e(yr, { theme: or, children: /* @__PURE__ */ f(
    ie,
    {
      sx: {
        display: "flex",
        minHeight: "100vh",
        ...Te
      },
      children: [
        /* @__PURE__ */ e(zo, {}),
        fe && /* @__PURE__ */ e(
          Pn,
          {
            height: Ut,
            onMenuClick: a && !ne ? () => Ue(!0) : void 0,
            appName: i,
            logo: Tt,
            onBrandClick: d,
            background: ft,
            color: rt,
            brandColor: pt,
            endContent: X ? /* @__PURE__ */ e(
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
        a && !fe && ze && /* @__PURE__ */ e(
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
        a && !fe && je && vr(
          /* @__PURE__ */ f(Fe, { children: [
            Sr(),
            (L == null ? void 0 : L.show) && !Re && /* @__PURE__ */ e(vt, { ...L })
          ] })
        ),
        po && vr(
          /* @__PURE__ */ f(Fe, { children: [
            /* @__PURE__ */ e(
              qn,
              {
                mainLinks: r,
                secondaryLinks: o,
                activePath: w,
                onLinkClick: $,
                logo: Tt,
                title: i,
                onBrandClick: d,
                brandColor: pt,
                headerBackgroundColor: ft,
                headerForegroundColor: rt,
                activeAccentColor: Me,
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
                avatarColor: Me,
                showProfile: B,
                userName: k,
                userEmail: D,
                userRole: le,
                userAvatar: Y,
                showNotifications: X,
                notificationCount: xe,
                onNotificationsClick: So ? Lt : ce,
                whatsNewCount: ge,
                onProfileClick: ee,
                showSettings: I,
                onSettingsClick: N,
                settingsSections: K,
                onSettingsItemClick: ke,
                platforms: te,
                currentPlatformKey: _e,
                onPlatformSelect: re,
                onLogout: xr,
                theme: J,
                showThemeToggler: ue,
                onThemeToggle: he
              }
            ),
            (L == null ? void 0 : L.show) && !Re && /* @__PURE__ */ e(vt, { ...L })
          ] })
        ),
        a && !fe && !mo && !_t && /* @__PURE__ */ e(
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
            children: /* @__PURE__ */ f(
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
                          appName: i,
                          onClick: d,
                          color: p ?? De,
                          testId: "sidebar-header-brand"
                        }
                      )
                    }
                  ),
                  xt("popover"),
                  /* @__PURE__ */ f(
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
                            activePath: w,
                            onLinkClick: $,
                            accentColor: Me,
                            surfaceBackgroundColor: Ot,
                            railShowTitles: u
                          }
                        ),
                        (L == null ? void 0 : L.show) && /* @__PURE__ */ e(vt, { ...L })
                      ]
                    }
                  ),
                  /* @__PURE__ */ e(ie, { sx: { py: 1.5 }, children: Mt(!0) })
                ]
              }
            )
          }
        ),
        a && fe && /* @__PURE__ */ f(
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
                jt,
                {
                  mainLinks: r,
                  secondaryLinks: o,
                  activePath: w,
                  onLinkClick: (T) => {
                    $ == null || $(T), Ue(!1);
                  },
                  onLinkAction: () => Ue(!1),
                  collapsed: !1,
                  expandedWidth: ne ? "100%" : oi,
                  activeAccentColor: Me,
                  groupAccentColor: _,
                  activeForegroundColor: A,
                  foregroundColor: q,
                  surfaceBackgroundColor: $e,
                  topInsetPx: ne ? 8 : 0,
                  topContent: ne ? void 0 : xt("full"),
                  footer: ne ? void 0 : Mt(!1)
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
            pinnedLinks: c,
            activePath: w,
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
            activeColor: Me,
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
              "--lumora-sticky-top": fe ? `${Ut}px` : "0px",
              p: "var(--lumora-content-padding)",
              width: Ie ? `calc(100% - ${Ie}px)` : "100%",
              mt: fe ? `${Ut}px` : 0,
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
            width: R,
            sidebarWidthPx: Ie,
            bottomOffsetPx: W && oe === "floating" ? ii : 0,
            fullScreen: fe,
            fullScreenBottom: ne ? cr : "0px",
            onClose: P,
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
        X && H && /* @__PURE__ */ e(
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
  F as AUTH_ERROR_CODES,
  z as AuthError,
  jt as CollapsibleSidebar,
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
