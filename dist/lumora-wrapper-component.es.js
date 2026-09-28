import { jsx as t, jsxs as d, Fragment as ze } from "react/jsx-runtime";
import lo from "@mui/icons-material/KeyboardArrowDownRounded";
import co from "@mui/icons-material/KeyboardArrowUpRounded";
import uo from "@mui/icons-material/ChevronRightRounded";
import ho from "@mui/icons-material/ViewSidebarOutlined";
import m from "@mui/material/Box";
import er from "@mui/material/Collapse";
import Me from "@mui/material/Divider";
import re from "@mui/material/IconButton";
import dt from "@mui/material/ListItemButton";
import le from "@mui/material/ListItemIcon";
import ce from "@mui/material/ListItemText";
import me from "@mui/material/Stack";
import Q from "@mui/material/Tooltip";
import ie from "@mui/material/Typography";
import { useTheme as Ir, createTheme as Cr, alpha as Ae, ThemeProvider as tr } from "@mui/material/styles";
import * as E from "react";
import { useMemo as rr, useState as Re, useCallback as fo, useRef as Ot, useEffect as ut } from "react";
import xt from "@mui/material/ButtonBase";
import { useTheme as po, useMediaQuery as mo, Box as ee, CircularProgress as go, CssBaseline as xo, Drawer as or, SwipeableDrawer as bo, Stack as So } from "@mui/material";
import nr from "axios";
import Eo from "@mui/material/Card";
import wo from "@mui/material/CardContent";
import Tr from "@mui/material/Button";
import vo from "@mui/icons-material/AutoAwesomeRounded";
import yo from "@mui/material/Grow";
import Ft from "@mui/material/Paper";
import Ro from "@mui/material/Slide";
import Io from "@mui/material/ListSubheader";
import Je from "@mui/material/MenuItem";
import Co from "@mui/material/MenuList";
import To from "@mui/material/Popper";
import _r from "@mui/icons-material/MenuRounded";
import Or from "@mui/icons-material/SearchRounded";
import _o from "@mui/icons-material/LogoutRounded";
import Ar from "@mui/icons-material/NotificationsNoneOutlined";
import Oo from "@mui/icons-material/SettingsOutlined";
import Ao from "@mui/material/Avatar";
import No from "@mui/material/Menu";
import ir from "@mui/material/ToggleButton";
import Do from "@mui/material/ToggleButtonGroup";
import Wo from "@mui/material/Drawer";
import ko from "@mui/material/AppBar";
import Lo from "@mui/material/Toolbar";
import Mo from "@mui/material/Badge";
import zo from "@mui/material/Popover";
const gt = ({
  logo: e,
  title: r,
  appName: o,
  onClick: n,
  color: a,
  testId: c
}) => {
  const s = {
    alignItems: "center",
    gap: 1,
    minWidth: 0,
    flexShrink: 0,
    color: a,
    // Consumer SVG logos pick up the brand color
    "& svg": { color: "inherit", fill: "currentColor" }
  }, l = /* @__PURE__ */ d(ze, { children: [
    r ? /* @__PURE__ */ t(
      ie,
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
    xt,
    {
      onClick: n,
      "aria-label": `${o} home`,
      "data-testid": c,
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
  ) : /* @__PURE__ */ t(me, { direction: "row", "data-testid": c, sx: s, children: l });
}, Ze = (e) => {
  var r;
  return !!((r = e.subitems) != null && r.length);
}, pt = (e, r) => e ? `${e}/${r.text}` : r.text, Ie = (e, r) => {
  var o;
  return r ? e.path && r === e.path ? !0 : ((o = e.subitems) == null ? void 0 : o.some((n) => Ie(n, r))) ?? !1 : !1;
}, pe = (e, r) => !!(r && e.path === r), Nr = (e, r) => (e ?? []).flatMap((o) => {
  const n = o.icon ?? r;
  return Ze(o) ? Nr(o.subitems, n) : o.path ? [{ sub: o, icon: n }] : [];
}), Lt = (e) => {
  const r = Dr(e);
  if (!r)
    return "#ffffff";
  const [o, n, a] = r.map((s) => {
    const l = s / 255;
    return l <= 0.03928 ? l / 12.92 : ((l + 0.055) / 1.055) ** 2.4;
  });
  return 0.2126 * o + 0.7152 * n + 0.0722 * a > 0.5 ? "#0b1f1c" : "#ffffff";
}, Mt = (e) => {
  const r = Dr(e);
  if (!r)
    return "rgba(1, 88, 79, 0.12)";
  const [o, n, a] = r;
  return `rgba(${o}, ${n}, ${a}, 0.14)`;
}, Dr = (e) => {
  let r = e.trim().replace(/^#/, "");
  if (r.length === 3 && (r = r.split("").map((n) => n + n).join("")), r.length !== 6 || /[^0-9a-fA-F]/.test(r))
    return null;
  const o = parseInt(r, 16);
  return [o >> 16 & 255, o >> 8 & 255, o & 255];
}, Wr = () => typeof window < "u" && !!window.localStorage, kr = (e) => {
  if (!Wr())
    return null;
  try {
    const r = window.localStorage.getItem(e);
    return r === null ? null : r === "true";
  } catch (r) {
    return console.warn("Failed to read sidebar collapsed state:", r), null;
  }
}, Lr = (e, r) => {
  if (Wr())
    try {
      window.localStorage.setItem(e, r ? "true" : "false");
    } catch (o) {
      console.warn("Failed to persist sidebar collapsed state:", o);
    }
}, Bo = 264, Fo = 72, Ho = "lumora:sidebar-collapsed", Ko = "width 200ms ease", ar = 64, ht = {
  "&:focus, &:focus-visible": { outline: "none" }
}, Uo = 16, $o = 14, Po = 4, Go = 2.5, sr = "0.7rem", lr = 22, Ne = ({ text: e, variant: r = "body1", center: o = !1, fontSize: n, fontWeight: a }) => {
  const c = E.useRef(null), [s, l] = E.useState(!1), h = E.useCallback(() => {
    const u = c.current;
    u && l(u.scrollWidth > u.clientWidth + 0.5);
  }, []);
  return E.useLayoutEffect(() => {
    h();
  }, [h, e]), E.useEffect(() => {
    const u = c.current;
    if (!u)
      return;
    const p = new ResizeObserver(() => h());
    return p.observe(u), () => p.disconnect();
  }, [h]), /* @__PURE__ */ t(
    Q,
    {
      title: e,
      placement: "right",
      arrow: !0,
      enterDelay: 400,
      disableHoverListener: !s,
      disableFocusListener: !s,
      disableTouchListener: !s,
      children: /* @__PURE__ */ t(
        ie,
        {
          ref: c,
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
}, jo = ({
  open: e,
  size: r = Uo
}) => e ? /* @__PURE__ */ t(co, { sx: { fontSize: r, opacity: 0.75 } }) : /* @__PURE__ */ t(lo, { sx: { fontSize: r, opacity: 0.75 } }), cr = ({ open: e }) => /* @__PURE__ */ t(
  uo,
  {
    sx: {
      fontSize: 20,
      opacity: 0.75,
      transition: "transform 150ms ease",
      transform: e ? "rotate(90deg)" : "none"
    }
  }
), dr = ({
  className: e,
  hidden: r = !1
}) => /* @__PURE__ */ t(
  ho,
  {
    className: e,
    sx: { transform: "scaleX(-1)", display: r ? "none" : void 0 }
  }
), ft = 600, ur = ({
  mainLinks: e,
  secondaryLinks: r = [],
  activePath: o,
  onLinkClick: n,
  onLinkAction: a,
  logo: c,
  title: s,
  onBrandClick: l,
  showHeaderBar: h = !1,
  headerBackgroundColor: u,
  headerForegroundColor: p,
  brandColor: A,
  activeAccentColor: f = "#01584f",
  groupAccentColor: b,
  activeForegroundColor: v,
  foregroundColor: x,
  surfaceBackgroundColor: R,
  collapsed: L,
  defaultCollapsed: z = !1,
  onCollapsedChange: y,
  persistKey: B = Ho,
  expandedWidth: Y = Bo,
  collapsedWidth: X = Fo,
  showLabels: w = !1,
  topInsetPx: Ce = 0,
  topContent: ge,
  footer: O
}) => {
  const F = Ir(), W = F.palette.mode === "dark", D = L !== void 0, [de, xe] = E.useState(
    () => kr(B) ?? z
  ), M = D ? !!L : de, [P, bt] = E.useState(
    {}
  ), G = v ?? Lt(f), tt = {
    bgcolor: f,
    color: G,
    "& .MuiListItemIcon-root": { color: G }
  }, St = {
    bgcolor: f,
    color: G,
    borderRadius: "8px"
  }, oe = b ?? Mt(f), Te = R ?? (W ? F.palette.background.paper : "#ffffff"), ae = x ?? (W ? "text.primary" : f), be = u ?? Te, _e = p ?? (u ? Lt(be) : x ?? (W ? F.palette.text.primary : f)), Et = Mt(_e), ue = (i) => {
    n == null || n(i);
  }, Be = () => {
    const i = !M;
    D || (xe(i), Lr(B, i)), y == null || y(i);
  }, Fe = (i, S) => {
    bt((_) => ({ ..._, [i]: !S }));
  }, He = (i, S) => P[S] ?? Ie(i, o), Se = (i, S, _) => ({
    color: i ? G : ae,
    bgcolor: i ? f : "transparent",
    "& .MuiListItemIcon-root": {
      color: i ? G : ae,
      minWidth: _
    },
    "&:hover": i || w ? tt : { bgcolor: S }
  }), rt = {
    "&.Mui-selected": {
      bgcolor: f
    },
    "&.Mui-selected:hover": tt
  }, Ee = (i) => {
    const S = pe(i, o), _ = /* @__PURE__ */ d(
      dt,
      {
        disabled: !i.path,
        selected: S,
        onClick: () => i.path && ue(i.path),
        "data-testid": `sidebar-item-${i.text}`,
        "data-active": S ? "true" : "false",
        sx: {
          borderRadius: "8px",
          py: 1.25,
          px: 1.5,
          // Room for the action button laid over the row's end
          ...i.action && { pr: 6 },
          ...Se(S, oe, 36),
          ...rt
        },
        children: [
          /* @__PURE__ */ t(le, { children: i.icon }),
          /* @__PURE__ */ t(
            ce,
            {
              disableTypography: !0,
              primary: /* @__PURE__ */ t(
                Ne,
                {
                  text: i.text,
                  fontWeight: ft
                }
              )
            }
          )
        ]
      },
      i.text
    );
    if (!i.action)
      return _;
    const { action: g } = i;
    return /* @__PURE__ */ d(m, { sx: { position: "relative" }, children: [
      _,
      /* @__PURE__ */ t(Q, { title: g.label, placement: "right", arrow: !0, children: /* @__PURE__ */ t(
        re,
        {
          "aria-label": g.label,
          "data-testid": `sidebar-action-${i.text}`,
          onClick: () => {
            g.onClick(), a == null || a();
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
            borderColor: S ? "rgba(255, 255, 255, 0.35)" : oe,
            color: S ? G : ae,
            "&:hover": {
              bgcolor: S ? "rgba(255, 255, 255, 0.15)" : oe
            },
            "& .MuiSvgIcon-root": { fontSize: 18 },
            // No lingering outline after a click; a clear ring for keyboard focus
            "&:focus:not(.Mui-focusVisible)": {
              outline: "none"
            },
            "&.Mui-focusVisible": {
              outline: "2px solid",
              outlineColor: S ? G : ae,
              outlineOffset: 1
            }
          },
          children: g.icon
        }
      ) })
    ] }, i.text);
  }, Ke = (i) => {
    const S = Ie(i, o), _ = pe(i, o), g = pt("", i), I = He(i, g);
    return /* @__PURE__ */ d(
      m,
      {
        "data-testid": `sidebar-group-${i.text}`,
        sx: {
          borderRadius: "8px",
          bgcolor: S ? oe : "transparent"
        },
        children: [
          /* @__PURE__ */ d(
            dt,
            {
              onClick: () => Fe(g, I),
              "data-testid": `sidebar-item-${i.text}`,
              "data-active": _ ? "true" : "false",
              "aria-expanded": I,
              sx: {
                borderRadius: "8px",
                py: 1.25,
                px: 1.5,
                ...Se(_, oe, 36)
              },
              children: [
                /* @__PURE__ */ t(le, { children: i.icon }),
                /* @__PURE__ */ t(
                  ce,
                  {
                    disableTypography: !0,
                    primary: /* @__PURE__ */ t(
                      Ne,
                      {
                        text: i.text,
                        fontWeight: ft
                      }
                    )
                  }
                ),
                /* @__PURE__ */ t(cr, { open: I })
              ]
            }
          ),
          /* @__PURE__ */ t(er, { in: I, timeout: "auto", unmountOnExit: !0, children: /* @__PURE__ */ t(
            m,
            {
              "data-testid": `sidebar-children-${i.text}`,
              sx: { pb: 0.5 },
              children: i.subitems.map(
                (k) => Ue(k, g, 1)
              )
            }
          ) })
        ]
      },
      i.text
    );
  }, Ue = (i, S, _) => {
    const g = pt(S, i), I = Po + (_ - 1) * Go;
    if (Ze(i)) {
      const j = Ie(i, o), H = pe(i, o), U = He(i, g);
      return /* @__PURE__ */ d(m, { "data-testid": `sidebar-group-${i.text}`, children: [
        /* @__PURE__ */ d(
          dt,
          {
            onClick: () => Fe(g, U),
            "data-testid": `sidebar-subitem-${i.text}`,
            "data-active": j ? "true" : "false",
            "aria-expanded": U,
            sx: {
              borderRadius: "8px",
              mx: 0.5,
              py: 0.75,
              pl: I,
              ...Se(H, "action.hover", 32)
            },
            children: [
              i.icon ? /* @__PURE__ */ t(le, { children: i.icon }) : null,
              /* @__PURE__ */ t(
                ce,
                {
                  disableTypography: !0,
                  primary: /* @__PURE__ */ t(
                    Ne,
                    {
                      text: i.text,
                      fontWeight: ft
                    }
                  )
                }
              ),
              /* @__PURE__ */ t(cr, { open: U })
            ]
          }
        ),
        /* @__PURE__ */ t(er, { in: U, timeout: "auto", unmountOnExit: !0, children: /* @__PURE__ */ t(m, { "data-testid": `sidebar-children-${i.text}`, children: i.subitems.map(
          (Oe) => Ue(Oe, g, _ + 1)
        ) }) })
      ] }, g);
    }
    const k = pe(i, o);
    return /* @__PURE__ */ d(
      dt,
      {
        selected: k,
        disabled: !i.path,
        onClick: () => i.path && ue(i.path),
        "data-testid": `sidebar-subitem-${i.text}`,
        "data-active": k ? "true" : "false",
        sx: {
          borderRadius: "8px",
          mx: 0.5,
          py: 0.75,
          pl: I,
          ...Se(k, "action.hover", 32),
          ...rt
        },
        children: [
          i.icon ? /* @__PURE__ */ t(le, { children: i.icon }) : null,
          /* @__PURE__ */ t(
            ce,
            {
              disableTypography: !0,
              primary: /* @__PURE__ */ t(
                Ne,
                {
                  text: i.text,
                  fontWeight: ft
                }
              )
            }
          )
        ]
      },
      g
    );
  }, he = (i, S, _, g, I, k) => {
    const j = !I, H = /* @__PURE__ */ d(
      re,
      {
        "aria-label": S,
        disabled: j,
        onClick: I,
        "data-testid": (k == null ? void 0 : k.testId) ?? `sidebar-item-${S}`,
        "data-active": g ? "true" : "false",
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
          color: g ? G : ae,
          bgcolor: g ? f : "transparent",
          "& .MuiSvgIcon-root": {
            fontSize: lr
          },
          "&:hover": St,
          ...ht
        } : {
          // Icon-only collapsed rail (collapsible variant):
          // original hover — accent when active, else a subtle
          // tint; no foreground change.
          width: 44,
          height: 44,
          color: g ? G : ae,
          bgcolor: g ? f : "transparent",
          borderRadius: g ? "8px" : "50%",
          "&:hover": {
            bgcolor: g ? f : k != null && k.insideGroup ? "action.hover" : oe,
            borderRadius: "8px"
          },
          ...ht
        },
        children: [
          _,
          w ? /* @__PURE__ */ t(
            Ne,
            {
              text: S,
              variant: "caption",
              center: !0,
              fontSize: sr
            }
          ) : null
        ]
      }
    );
    return w ? j ? /* @__PURE__ */ t("span", { children: H }, i) : /* @__PURE__ */ t(E.Fragment, { children: H }, i) : /* @__PURE__ */ t(Q, { title: S, placement: "right", arrow: !0, children: j ? /* @__PURE__ */ t("span", { children: H }) : H }, i);
  }, $e = (i) => {
    const S = Ie(i, o), _ = pe(i, o), g = pt("", i), I = He(i, g), k = /* @__PURE__ */ d(
      re,
      {
        "aria-label": i.text,
        "aria-expanded": I,
        onClick: () => Fe(g, I),
        "data-testid": `sidebar-item-${i.text}`,
        "data-active": _ ? "true" : "false",
        sx: {
          display: "flex",
          flexDirection: "column",
          gap: w ? 0.25 : 0,
          width: w ? "100%" : 44,
          maxWidth: "100%",
          // 8px padding on all sides of the labeled item container.
          ...w ? { p: 1 } : { py: 0.75 },
          borderRadius: "10px",
          color: _ ? G : ae,
          bgcolor: _ ? f : "transparent",
          // rail-labeled: active AND hover share the highlight. collapsible:
          // original behavior — accent only when active; the outer pill
          // supplies the idle-hover tint, so the button stays transparent.
          "&:hover": w ? { bgcolor: f, color: G } : {
            bgcolor: _ ? f : "transparent"
          },
          ...ht
        },
        children: [
          w ? /* @__PURE__ */ t(
            m,
            {
              sx: {
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                "& .MuiSvgIcon-root": {
                  fontSize: lr
                }
              },
              children: i.icon
            }
          ) : i.icon,
          w ? /* @__PURE__ */ t(
            Ne,
            {
              text: i.text,
              variant: "caption",
              center: !0,
              fontSize: sr
            }
          ) : null,
          /* @__PURE__ */ t(jo, { open: I, size: $o })
        ]
      }
    ), j = w ? k : /* @__PURE__ */ t(Q, { title: i.text, placement: "right", arrow: !0, children: k });
    return /* @__PURE__ */ d(
      m,
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
          bgcolor: S ? oe : "transparent",
          ...w ? {} : { "&:hover": { bgcolor: oe } }
        },
        children: [
          j,
          I ? Nr(i.subitems, i.icon).map(
            ({ sub: H, icon: U }) => he(
              H.path,
              H.text,
              U,
              pe(H, o),
              () => ue(H.path),
              {
                insideGroup: !0,
                testId: `sidebar-subitem-${H.text}`
              }
            )
          ) : null
        ]
      },
      i.text
    );
  }, ot = (i) => /* @__PURE__ */ t(
    m,
    {
      sx: {
        width: "100%",
        display: "flex",
        justifyContent: "center"
      },
      children: he(
        i.text,
        i.text,
        i.icon,
        pe(i, o),
        i.path ? () => ue(i.path) : void 0
      )
    },
    i.text
  ), nt = (i) => Ze(i) ? M ? $e(i) : Ke(i) : M ? ot(i) : Ee(i), it = (i) => /* @__PURE__ */ t(
    me,
    {
      spacing: 0.5,
      sx: {
        width: "100%",
        alignItems: M ? "center" : "stretch"
      },
      children: i.map(nt)
    }
  ), we = M ? X : Y, Pe = M ? "Expand sidebar" : "Collapse sidebar", at = M && c ? /* @__PURE__ */ d(ze, { children: [
    /* @__PURE__ */ t(m, { className: "toggle-logo", sx: { display: "flex" }, children: c }),
    /* @__PURE__ */ t(dr, { className: "toggle-icon", hidden: !0 })
  ] }) : /* @__PURE__ */ t(dr, {}), q = h ? /* @__PURE__ */ d(
    m,
    {
      "data-testid": "sidebar-header",
      sx: {
        height: ar,
        minHeight: ar,
        flexShrink: 0,
        display: "flex",
        alignItems: "center",
        gap: 1.5,
        bgcolor: be,
        justifyContent: M ? "center" : "flex-start",
        // Expanded: lines the toggle glyph up with the row icons below
        // (12px panel padding + 12px row padding = 24px, minus the
        // button's own 8px). Collapsed: centered like the rail icons.
        px: M ? 0 : 2
      },
      children: [
        /* @__PURE__ */ t(Q, { title: Pe, placement: "right", arrow: !0, children: /* @__PURE__ */ t(
          re,
          {
            "aria-label": Pe,
            "aria-expanded": !M,
            onClick: Be,
            "data-testid": "sidebar-collapse-toggle",
            disableFocusRipple: !0,
            sx: {
              color: _e,
              "& svg": { color: "inherit", fill: "currentColor" },
              "&:hover, &.Mui-focusVisible": {
                "& .toggle-logo": { display: "none" },
                "& .toggle-icon": { display: "block" }
              },
              ...ht
            },
            children: at
          }
        ) }),
        !M && (c || s) ? /* @__PURE__ */ t(
          gt,
          {
            logo: c,
            title: s,
            appName: s || "App",
            onClick: l,
            color: A ?? _e,
            testId: "sidebar-header-brand"
          }
        ) : null
      ]
    }
  ) : null, st = !h && c ? /* @__PURE__ */ t(
    m,
    {
      sx: {
        display: "flex",
        justifyContent: "center",
        flexShrink: 0,
        pt: 2,
        pb: 1
      },
      children: /* @__PURE__ */ t(
        gt,
        {
          logo: c,
          appName: s || "App",
          onClick: l,
          color: A ?? _e,
          testId: "sidebar-header-brand"
        }
      )
    }
  ) : null, ve = w ? 0.5 : M ? 1 : 1.5;
  return /* @__PURE__ */ d(
    m,
    {
      component: "nav",
      "aria-label": "Main sidebar",
      "data-testid": "collapsible-sidebar",
      "data-collapsed": M ? "true" : "false",
      "data-labeled": w ? "true" : "false",
      sx: {
        width: we,
        minWidth: we,
        height: "100%",
        boxSizing: "border-box",
        bgcolor: Te,
        display: "flex",
        flexDirection: "column",
        // Lets the sidebar shrink inside a flex-column host so siblings
        // (e.g. an alert card below it) stay within the viewport.
        flex: "1 1 auto",
        minHeight: 0,
        overflow: "hidden",
        transition: Ko
      },
      children: [
        q ?? st,
        ge ? /* @__PURE__ */ t(
          m,
          {
            sx: { flexShrink: 0, px: ve, pt: 1, pb: 1 },
            children: ge
          }
        ) : null,
        /* @__PURE__ */ d(
          m,
          {
            sx: {
              flex: "1 1 auto",
              minHeight: 0,
              display: "flex",
              flexDirection: "column",
              overflowY: "auto",
              overflowX: "hidden",
              px: ve,
              pt: Ce && !h ? `${Ce}px` : 1,
              pb: 2
            },
            children: [
              it(e),
              r.length > 0 ? /* @__PURE__ */ d(m, { sx: { mt: "auto", pt: 2 }, children: [
                O ? null : /* @__PURE__ */ t(Me, { sx: { mb: 1, borderColor: "divider" } }),
                it(r)
              ] }) : null
            ]
          }
        ),
        O ? /* @__PURE__ */ t(m, { sx: { flexShrink: 0, px: ve, pb: 1.5 }, children: /* @__PURE__ */ t(
          m,
          {
            sx: {
              borderTop: `1px solid ${Et}`,
              pt: 1.5
            },
            children: O
          }
        ) }) : null
      ]
    }
  );
}, zt = "var(--lumora-content-padding, 0px)", hr = `calc(${zt} * -1)`, Si = ({
  children: e,
  flushTop: r = !0,
  sticky: o = !1,
  background: n = "background.paper",
  divider: a = !0,
  inset: c = !0,
  sx: s
}) => /* @__PURE__ */ t(
  m,
  {
    "data-testid": "full-bleed-section",
    sx: [
      {
        mx: hr,
        mt: r ? hr : 0,
        // Space below it, like any other block on the page
        mb: zt,
        px: c ? zt : 0,
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
), Xo = ({ keys: e }) => /* @__PURE__ */ t(
  m,
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
class T extends Error {
  constructor(r, o, n = null) {
    super(r), this.name = "AuthError", this.code = o, this.originalError = n, this.timestamp = (/* @__PURE__ */ new Date()).toISOString();
  }
}
const N = {
  STORAGE_ACCESS_DENIED: "STORAGE_ACCESS_DENIED",
  TOKEN_NOT_FOUND: "TOKEN_NOT_FOUND",
  TOKEN_INVALID: "TOKEN_INVALID",
  TOKEN_EXPIRED: "TOKEN_EXPIRED",
  LOGOUT_FAILED: "LOGOUT_FAILED",
  UNKNOWN_ERROR: "UNKNOWN_ERROR"
}, K = {
  ACCESS_TOKEN: "lumoraAccessToken",
  REFRESH_TOKEN: "lumoraRefreshToken",
  USER: "lumoraUser"
}, se = {
  ACCESS_TOKEN: "accessToken",
  REFRESH_TOKEN: "refreshToken",
  USER: "user"
}, Vo = () => {
  if (!(typeof window > "u" || !window.localStorage))
    try {
      const e = localStorage.getItem(
        se.ACCESS_TOKEN
      ), r = localStorage.getItem(
        se.REFRESH_TOKEN
      ), o = localStorage.getItem(se.USER);
      e && !localStorage.getItem(K.ACCESS_TOKEN) && localStorage.setItem(K.ACCESS_TOKEN, e), r && !localStorage.getItem(K.REFRESH_TOKEN) && localStorage.setItem(
        K.REFRESH_TOKEN,
        r
      ), o && !localStorage.getItem(K.USER) && localStorage.setItem(K.USER, o), (e || r || o) && (localStorage.removeItem(se.ACCESS_TOKEN), localStorage.removeItem(se.REFRESH_TOKEN), localStorage.removeItem(se.USER));
    } catch (e) {
      console.warn("Failed to migrate legacy localStorage keys:", e);
    }
}, At = (e) => {
  try {
    if (typeof window > "u")
      return console.warn("localStorage access attempted on server side"), null;
    if (!window.localStorage)
      throw new T(
        "localStorage is not available",
        N.STORAGE_ACCESS_DENIED
      );
    return window.localStorage.getItem(e);
  } catch (r) {
    throw r.name === "QuotaExceededError" ? (console.error("Storage quota exceeded"), new T(
      "Storage quota exceeded. Please clear browser data.",
      N.STORAGE_ACCESS_DENIED,
      r
    )) : r.name === "SecurityError" ? (console.error(
      "localStorage access denied (private browsing or security settings)"
    ), new T(
      "Access to localStorage is denied. Please check browser settings.",
      N.STORAGE_ACCESS_DENIED,
      r
    )) : (console.error(
      "Unexpected error accessing localStorage:",
      r.name
    ), new T(
      "Failed to access storage",
      N.STORAGE_ACCESS_DENIED,
      r
    ));
  }
}, Nt = (e, r) => {
  try {
    if (typeof window > "u")
      return console.warn("localStorage write attempted on server side"), !1;
    if (!window.localStorage)
      throw new T(
        "localStorage is not available",
        N.STORAGE_ACCESS_DENIED
      );
    return window.localStorage.setItem(e, r), !0;
  } catch (o) {
    throw o.name === "QuotaExceededError" ? (console.error("Storage quota exceeded"), new T(
      "Storage quota exceeded. Please clear browser data.",
      N.STORAGE_ACCESS_DENIED,
      o
    )) : o.name === "SecurityError" ? (console.error(
      "localStorage write denied (private browsing or security settings)"
    ), new T(
      "Access to localStorage is denied. Please check browser settings.",
      N.STORAGE_ACCESS_DENIED,
      o
    )) : (console.error(
      "Unexpected error writing to localStorage:",
      o.name
    ), new T(
      "Failed to write to storage",
      N.STORAGE_ACCESS_DENIED,
      o
    ));
  }
}, Mr = (e) => {
  try {
    return typeof window > "u" ? (console.warn("localStorage removal attempted on server side"), !1) : window.localStorage ? (window.localStorage.removeItem(e), !0) : (console.warn("localStorage is not available"), !1);
  } catch (r) {
    return r.name !== "SecurityError" && console.warn(`Could not remove localStorage key "${e}"`), !1;
  }
}, Qe = () => {
  try {
    Vo();
    const e = At(K.ACCESS_TOKEN), r = At(K.REFRESH_TOKEN), o = At(K.USER);
    let n = null;
    if (o)
      try {
        n = JSON.parse(o);
      } catch {
        o && o !== "null" && o !== "undefined" && console.warn(
          "Invalid user data in localStorage, clearing:",
          o.substring(0, 50)
        ), Mr(K.USER);
      }
    return {
      accessToken: e,
      refreshToken: r,
      user: n
    };
  } catch (e) {
    throw e instanceof T ? e : new T(
      "Failed to retrieve authentication tokens",
      N.UNKNOWN_ERROR,
      e
    );
  }
}, Yo = () => {
  try {
    const { accessToken: e, refreshToken: r } = Qe();
    return !(e || r) ? {
      isAuthenticated: !1,
      error: new T(
        "No authentication tokens found",
        N.TOKEN_NOT_FOUND
      )
    } : {
      isAuthenticated: !0,
      error: null
    };
  } catch (e) {
    return console.error("Authentication check failed:", e), {
      isAuthenticated: !1,
      error: e instanceof T ? e : new T(
        "Authentication check failed",
        N.UNKNOWN_ERROR,
        e
      )
    };
  }
}, zr = (e, r, o = null) => {
  try {
    if (!e && !r)
      throw new T(
        "At least one token must be provided",
        N.TOKEN_INVALID
      );
    return e && Nt(K.ACCESS_TOKEN, e), r && Nt(K.REFRESH_TOKEN, r), o && Nt(K.USER, JSON.stringify(o)), {
      success: !0,
      error: null
    };
  } catch (n) {
    return console.error("Failed to store authentication tokens:", n), {
      success: !1,
      error: n instanceof T ? n : new T(
        "Failed to store tokens",
        N.UNKNOWN_ERROR,
        n
      )
    };
  }
}, et = () => {
  try {
    return [
      K.ACCESS_TOKEN,
      K.REFRESH_TOKEN,
      K.USER,
      // Also clear legacy keys for complete cleanup
      se.ACCESS_TOKEN,
      se.REFRESH_TOKEN,
      se.USER
    ].map((n) => Mr(n)).every((n) => n) || console.warn("Some tokens could not be removed from localStorage"), {
      success: !0,
      error: null
    };
  } catch (e) {
    return console.error("Failed to clear authentication tokens:", e), {
      success: !1,
      error: e instanceof T ? e : new T(
        "Failed to clear tokens",
        N.LOGOUT_FAILED,
        e
      )
    };
  }
}, qo = () => {
  try {
    const { user: e } = Qe();
    return {
      user: e,
      error: null
    };
  } catch (e) {
    return console.error("Failed to get current user:", e), {
      user: null,
      error: e instanceof T ? e : new T(
        "Failed to retrieve user data",
        N.UNKNOWN_ERROR,
        e
      )
    };
  }
}, Ei = (e) => {
  if (!(e instanceof T))
    return "An unexpected error occurred. Please try again.";
  switch (e.code) {
    case N.STORAGE_ACCESS_DENIED:
      return "Unable to access browser storage. Please check your browser settings and disable private browsing if enabled.";
    case N.TOKEN_NOT_FOUND:
      return "You are not logged in. Please sign in to continue.";
    case N.TOKEN_INVALID:
      return "Your session is invalid. Please sign in again.";
    case N.TOKEN_EXPIRED:
      return "Your session has expired. Please sign in again.";
    case N.LOGOUT_FAILED:
      return "Failed to log out properly. Please clear your browser cache and try again.";
    case N.UNKNOWN_ERROR:
    default:
      return "An unexpected error occurred. Please try again or contact support if the problem persists.";
  }
}, Bt = (e, r = "Unknown") => {
  const o = {
    context: r,
    message: e.message,
    code: e instanceof T ? e.code : "UNKNOWN",
    timestamp: e instanceof T ? e.timestamp : (/* @__PURE__ */ new Date()).toISOString(),
    stack: e.stack
  };
  e instanceof T && e.originalError && (o.originalError = {
    name: e.originalError.name,
    message: e.originalError.message
  }), console.warn("[Auth Error]", o);
}, Jo = (e) => {
  if (!e)
    throw new Error("API base URL is required to create axios client");
  const r = nr.create({
    baseURL: e,
    headers: {
      "Content-Type": "application/json"
    }
  });
  let o = !1, n = null, a = [];
  const c = (s, l) => {
    a.forEach(({ resolve: h, reject: u }) => {
      s ? u(s) : l && h(l);
    }), a = [];
  };
  return r.interceptors.request.use(
    (s) => {
      const { accessToken: l } = Qe();
      return l && s.headers && (s.headers.Authorization = `Bearer ${l}`), s;
    },
    (s) => Promise.reject(s)
  ), r.interceptors.response.use(
    (s) => s,
    async (s) => {
      var f;
      const l = s.config, h = (f = s.response) == null ? void 0 : f.status, u = (l == null ? void 0 : l.url) || "", p = u.includes("/auth/refresh");
      if (h !== 401 || l._retry || p)
        return Promise.reject(s);
      l._retry = !0;
      const { refreshToken: A } = Qe();
      if (!A) {
        const b = new Error(
          "No refresh token available for token refresh"
        );
        return Bt(b, "AxiosClient - Token Refresh"), et(), typeof window < "u" && (window.location.href = "/login"), Promise.reject(s);
      }
      if (o && n)
        return new Promise((b, v) => {
          a.push({ resolve: b, reject: v });
        }).then((b) => {
          const {
            accessToken: v,
            refreshToken: x
          } = b;
          if (l.headers && (l.headers.Authorization = `Bearer ${v}`), u.includes("/auth/logout"))
            try {
              if (typeof l.data == "string") {
                const R = JSON.parse(
                  l.data || "{}"
                );
                R.refresh_token = x, l.data = JSON.stringify(R);
              } else
                l.data && typeof l.data == "object" ? l.data.refresh_token = x : l.data = JSON.stringify({
                  refresh_token: x
                });
            } catch {
              l.data = JSON.stringify({
                refresh_token: x
              });
            }
          return r(l);
        }).catch((b) => Promise.reject(b));
      o = !0, n = nr.post(
        `${e}/auth/refresh`,
        {
          refresh_token: A
        }
      );
      try {
        const b = await n, { accessToken: v, refreshToken: x } = b.data;
        if (zr(v, x, null), c(null, {
          accessToken: v,
          refreshToken: x
        }), l.headers && (l.headers.Authorization = `Bearer ${v}`), u.includes("/auth/logout"))
          try {
            if (typeof l.data == "string") {
              const R = JSON.parse(
                l.data || "{}"
              );
              R.refresh_token = x, l.data = JSON.stringify(R);
            } else
              l.data && typeof l.data == "object" ? l.data.refresh_token = x : l.data = JSON.stringify({
                refresh_token: x
              });
          } catch {
            l.data = JSON.stringify({
              refresh_token: x
            });
          }
        return r(l);
      } catch (b) {
        return Bt(
          b,
          "AxiosClient - Token Refresh Failed"
        ), c(b), et(), typeof window < "u" && (window.location.href = "/login"), Promise.reject(b);
      } finally {
        o = !1, n = null;
      }
    }
  ), r;
}, J = {
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
}, Z = {
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
}, De = {
  300: "hsl(120, 61%, 77%)",
  400: "hsl(120, 44%, 53%)",
  500: "hsl(120, 59%, 30%)",
  700: "hsl(120, 75%, 16%)",
  800: "hsl(120, 84%, 10%)"
}, We = {
  300: "hsl(45, 90%, 65%)",
  400: "hsl(45, 90%, 40%)",
  500: "hsl(45, 90%, 35%)",
  700: "hsl(45, 94%, 20%)",
  800: "hsl(45, 95%, 16%)"
}, ke = {
  300: "hsl(0, 90%, 65%)",
  400: "hsl(0, 90%, 40%)",
  500: "hsl(0, 90%, 30%)",
  700: "hsl(0, 94%, 18%)",
  800: "hsl(0, 95%, 12%)"
}, Br = Cr(), te = Br.typography.pxToRem, Zo = (e) => {
  const r = e === "dark", o = [...Br.shadows];
  return o[1] = r ? "hsla(220, 30%, 5%, 0.7) 0px 4px 16px 0px, hsla(220, 25%, 10%, 0.8) 0px 8px 16px -5px" : "hsla(220, 30%, 5%, 0.07) 0px 4px 16px 0px, hsla(220, 25%, 10%, 0.07) 0px 8px 16px -5px", {
    palette: {
      mode: e,
      primary: {
        light: r ? J[300] : J[200],
        main: J[400],
        dark: J[700],
        contrastText: J[50]
      },
      info: r ? {
        light: J[500],
        main: J[700],
        dark: J[900],
        contrastText: J[300]
      } : {
        light: J[100],
        main: J[300],
        dark: J[600],
        contrastText: Z[50]
      },
      warning: r ? { light: We[400], main: We[500], dark: We[700] } : { light: We[300], main: We[400], dark: We[800] },
      error: r ? { light: ke[400], main: ke[500], dark: ke[700] } : { light: ke[300], main: ke[400], dark: ke[800] },
      success: r ? { light: De[400], main: De[500], dark: De[700] } : { light: De[300], main: De[400], dark: De[800] },
      grey: Z,
      divider: r ? Ae(Z[700], 0.6) : Ae(Z[300], 0.4),
      background: r ? { default: Z[900], paper: "hsl(220, 30%, 7%)" } : { default: "hsl(0, 0%, 99%)", paper: "hsl(220, 35%, 97%)" },
      text: r ? { primary: "hsl(0, 0%, 100%)", secondary: Z[400] } : { primary: Z[800], secondary: Z[600] },
      action: r ? {
        hover: Ae(Z[600], 0.2),
        selected: Ae(Z[600], 0.3)
      } : {
        hover: Ae(Z[200], 0.2),
        selected: Ae(Z[200], 0.3)
      }
    },
    typography: {
      fontFamily: "Inter, sans-serif",
      h1: {
        fontSize: te(48),
        fontWeight: 600,
        lineHeight: 1.2,
        letterSpacing: -0.5
      },
      h2: { fontSize: te(36), fontWeight: 600, lineHeight: 1.2 },
      h3: { fontSize: te(30), lineHeight: 1.2 },
      h4: { fontSize: te(24), fontWeight: 600, lineHeight: 1.5 },
      h5: { fontSize: te(20), fontWeight: 600 },
      h6: { fontSize: te(18), fontWeight: 600 },
      subtitle1: { fontSize: te(18) },
      subtitle2: { fontSize: te(14), fontWeight: 500 },
      body1: { fontSize: te(14) },
      body2: { fontSize: te(14), fontWeight: 400 },
      caption: { fontSize: te(12), fontWeight: 400 }
    },
    shape: {
      borderRadius: 8
    },
    shadows: o
  };
}, Qo = async (e, r) => {
  const { accessToken: o, refreshToken: n } = Qe();
  if (o)
    return !0;
  if (n)
    try {
      const a = await e.post("/auth/refresh", {
        refresh_token: n
      });
      if (a.data.success && a.data.accessToken)
        return zr(
          a.data.accessToken,
          a.data.refreshToken || null,
          null
        ), !0;
    } catch (a) {
      Bt(a, "TokenValidator - Refresh Failed");
    }
  return et(), r ? r() : window.location.href = "/login", !1;
}, mt = ({ size: e = 20 }) => /* @__PURE__ */ d(
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
), Le = "#09C1AE", Dt = (e, r) => ({
  position: "relative",
  overflow: "hidden",
  "&::before": {
    content: '""',
    position: "absolute",
    inset: "-50%",
    background: `conic-gradient(from 0deg, rgba(9, 193, 174, 0.25) 0deg 250deg, ${Le} 300deg, #0DD4BF 330deg, rgba(9, 193, 174, 0.25) 360deg)`,
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
}), fr = ({
  variant: e,
  onClick: r,
  active: o = !1,
  busy: n = !1,
  shortcutKeys: a,
  accentColor: c = "#01584f",
  rightOffsetPx: s = 0
}) => {
  const l = a ? `Ask Nexa (${a.join("")})` : "Ask Nexa", h = {
    onClick: r,
    "aria-label": "Ask Nexa",
    "aria-pressed": o,
    "data-testid": "assistant-button"
  };
  return e === "sidebar" ? /* @__PURE__ */ d(
    xt,
    {
      ...h,
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
        borderColor: o ? Le : "rgba(9, 193, 174, 0.45)",
        bgcolor: "rgba(9, 193, 174, 0.08)",
        color: c,
        transition: "border-color 150ms, background-color 150ms",
        "&:hover": { bgcolor: "rgba(9, 193, 174, 0.14)" },
        "&.Mui-focusVisible": {
          outline: `2px solid ${Le}`,
          outlineOffset: 2
        },
        ...n && Dt(8, "background.paper")
      },
      children: [
        /* @__PURE__ */ t(mt, { size: 20 }),
        /* @__PURE__ */ t(
          ie,
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
        a && /* @__PURE__ */ t(Xo, { keys: a })
      ]
    }
  ) : e === "sidebar-icon" ? /* @__PURE__ */ t(Q, { title: l, placement: "right", arrow: !0, children: /* @__PURE__ */ t(
    re,
    {
      ...h,
      "data-variant": "sidebar-icon",
      sx: {
        width: 44,
        height: 44,
        borderRadius: "8px",
        border: "1px solid",
        borderColor: o ? Le : "rgba(9, 193, 174, 0.45)",
        bgcolor: "rgba(9, 193, 174, 0.08)",
        "&:hover": { bgcolor: "rgba(9, 193, 174, 0.14)" },
        ...n && Dt(8, "background.paper")
      },
      children: /* @__PURE__ */ t(mt, { size: 20 })
    }
  ) }) : /* @__PURE__ */ t(Q, { title: l, placement: "left", children: /* @__PURE__ */ t(
    re,
    {
      ...h,
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
        outline: o ? `2px solid ${Le}` : "none",
        outlineOffset: 2,
        "&:hover": { bgcolor: "background.paper", boxShadow: 6 },
        "&.Mui-focusVisible": { outline: `2px solid ${Le}` },
        ...n && Dt(16, "background.paper")
      },
      children: /* @__PURE__ */ t(m, { sx: { display: "flex", alignItems: "center" }, children: /* @__PURE__ */ t(mt, { size: 26 }) })
    }
  ) });
}, Wt = ({
  title: e = "",
  message: r = "",
  buttonText: o = "",
  onButtonClick: n,
  show: a = !0
}) => a ? /* @__PURE__ */ t(Eo, { variant: "outlined", sx: { m: 1.5, flexShrink: 0 }, children: /* @__PURE__ */ d(wo, { children: [
  /* @__PURE__ */ t(vo, { fontSize: "small" }),
  /* @__PURE__ */ t(ie, { gutterBottom: !0, sx: { fontWeight: 600 }, children: e }),
  /* @__PURE__ */ t(
    ie,
    {
      variant: "body2",
      sx: { mb: 2, color: "text.secondary" },
      children: r
    }
  ),
  /* @__PURE__ */ t(
    Tr,
    {
      variant: "contained",
      size: "small",
      fullWidth: !0,
      onClick: n,
      children: o
    }
  )
] }) }) : null, Ye = 24, en = 720, tn = 1140, rn = 1250, on = ({
  open: e,
  children: r,
  variant: o,
  position: n,
  width: a,
  sidebarWidthPx: c,
  bottomOffsetPx: s,
  fullScreen: l,
  fullScreenBottom: h = "0px",
  onClose: u
}) => {
  E.useEffect(() => {
    if (!e || !u)
      return;
    const v = (x) => {
      x.key === "Escape" && u();
    };
    return window.addEventListener("keydown", v), () => window.removeEventListener("keydown", v);
  }, [e, u]);
  const p = o === "docked", A = Ye + s;
  let f;
  l ? f = {
    top: 0,
    left: 0,
    right: 0,
    bottom: h,
    borderRadius: 0
  } : p ? f = {
    top: 0,
    right: 0,
    bottom: 0,
    width: a,
    maxWidth: "100vw",
    borderRadius: 0,
    borderWidth: "0 0 0 1px"
  } : f = {
    bottom: A,
    ...n === "left" ? { left: c + Ye } : { right: Ye },
    width: a,
    maxWidth: `calc(100vw - ${Ye * 2}px)`,
    height: `min(${en}px, calc(100vh - ${A + Ye}px))`,
    borderRadius: "12px"
  };
  const b = /* @__PURE__ */ t(
    Ft,
    {
      role: p ? "complementary" : "dialog",
      "aria-label": "Nexa chat",
      "data-testid": "chat-panel",
      "data-variant": o,
      elevation: 8,
      sx: {
        position: "fixed",
        zIndex: p ? tn : rn,
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
  return p ? /* @__PURE__ */ t(Ro, { direction: "left", in: e, mountOnEnter: !0, children: b }) : /* @__PURE__ */ t(
    yo,
    {
      in: e,
      mountOnEnter: !0,
      style: {
        transformOrigin: n === "left" ? "bottom left" : "bottom right"
      },
      children: b
    }
  );
}, nn = 180, pr = 250, an = "#01584F", sn = ({
  text: e,
  testId: r
}) => {
  const o = E.useRef(null), [n, a] = E.useState(!1), c = E.useCallback(() => {
    const s = o.current;
    s && a(s.scrollWidth > s.clientWidth + 0.5);
  }, []);
  return E.useLayoutEffect(() => {
    c();
  }, [c, e]), E.useEffect(() => {
    const s = o.current;
    if (!s)
      return;
    const l = new ResizeObserver(() => c());
    return l.observe(s), () => l.disconnect();
  }, [c]), /* @__PURE__ */ t(
    Q,
    {
      title: e,
      placement: "right",
      arrow: !0,
      enterDelay: 400,
      disableHoverListener: !n,
      disableFocusListener: !n,
      disableTouchListener: !n,
      children: /* @__PURE__ */ t(
        ie,
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
}, Fr = (e, r, o, n) => {
  const a = e ? 48 : 44, c = e ? "text.secondary" : r, s = e ? an : r;
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
    color: o ? "#ffffff" : c,
    backgroundColor: o ? s : "transparent",
    "&:hover": {
      backgroundColor: o ? s : "action.hover",
      borderRadius: "4px",
      color: o ? "#ffffff" : c
    }
  } : {
    width: a,
    height: a,
    color: o ? "#ffffff" : c,
    backgroundColor: o ? s : "transparent",
    borderRadius: o ? "4px" : "50%",
    "&:hover": {
      backgroundColor: o ? s : "action.hover",
      borderRadius: "4px"
    }
  } };
}, Hr = ({ link: e }) => /* @__PURE__ */ d(me, { alignItems: "center", spacing: 1, sx: { width: "100%" }, children: [
  /* @__PURE__ */ t(
    m,
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
    sn,
    {
      text: e.text,
      testId: `rail-item-caption-${e.text}`
    }
  )
] }), Kr = (e, r, o) => o ? e : /* @__PURE__ */ t(Q, { title: r, placement: "right", arrow: !0, children: e }), ln = ({
  link: e,
  activePath: r,
  onLinkClick: o,
  accentColor: n,
  isSecondary: a,
  surfaceBackgroundColor: c,
  railShowTitles: s
}) => {
  const l = Ir(), [h, u] = E.useState(null), [p, A] = E.useState(!1), f = E.useRef(
    null
  ), b = E.useRef(null), v = E.useRef(null), x = E.useRef(!1), R = E.useRef(!1), L = E.useId(), z = () => {
    f.current && (clearTimeout(f.current), f.current = null);
  }, y = () => {
    z(), f.current = setTimeout(() => {
      A(!1), f.current = null;
    }, nn);
  }, B = () => {
    z(), A(!0);
  };
  E.useEffect(() => {
    if (!p)
      return;
    const O = (F) => {
      var W;
      F.key === "Escape" && (A(!1), (W = v.current) == null || W.focus());
    };
    return document.addEventListener("keydown", O), () => document.removeEventListener("keydown", O);
  }, [p]), E.useEffect(() => {
    if (!p || !R.current)
      return;
    const O = globalThis.requestAnimationFrame(() => {
      var W;
      const F = (W = b.current) == null ? void 0 : W.querySelector(
        '[role="menuitem"]'
      );
      F == null || F.focus(), R.current = !1;
    });
    return () => cancelAnimationFrame(O);
  }, [p]);
  const Y = Ie(e, r), { activeBg: X, sx: w } = Fr(
    a,
    n,
    Y,
    s
  ), Ce = /* @__PURE__ */ t(
    re,
    {
      ref: v,
      component: e.path ? "a" : "button",
      href: e.path || void 0,
      "aria-label": e.text,
      onFocus: () => {
        x.current || B();
      },
      onBlur: (O) => {
        var W;
        const F = O.relatedTarget;
        F && ((W = b.current) != null && W.contains(F)) || y();
      },
      onKeyDown: (O) => {
        O.key === "ArrowDown" && (O.preventDefault(), R.current = !0, B());
      },
      onClick: (O) => {
        O.preventDefault(), O.stopPropagation(), e.path && (o == null || o(e.path));
      },
      "aria-haspopup": "menu",
      "aria-expanded": p,
      "aria-controls": p ? L : void 0,
      "data-testid": `rail-submenu-trigger-${e.text}`,
      sx: w,
      children: s ? /* @__PURE__ */ t(Hr, { link: e }) : e.icon
    }
  );
  return /* @__PURE__ */ d(
    m,
    {
      sx: {
        width: "100%",
        display: "flex",
        justifyContent: "center"
      },
      children: [
        /* @__PURE__ */ t(
          m,
          {
            ref: u,
            "data-testid": `rail-submenu-anchor-${e.text}`,
            sx: { display: "inline-flex", maxWidth: "100%" },
            onMouseEnter: () => {
              x.current = !0, B();
            },
            onMouseLeave: () => {
              x.current = !1, y();
            },
            children: Kr(Ce, e.text, s)
          }
        ),
        /* @__PURE__ */ t(
          To,
          {
            open: p && !!h,
            anchorEl: h,
            placement: "right-start",
            modifiers: [{ name: "offset", options: { offset: [8, 0] } }],
            sx: { zIndex: (O) => O.zIndex.modal },
            children: /* @__PURE__ */ t(
              Ft,
              {
                ref: b,
                elevation: 0,
                onMouseEnter: z,
                onMouseLeave: y,
                "data-testid": `rail-submenu-panel-${e.text}`,
                sx: {
                  bgcolor: c,
                  backgroundImage: "none",
                  borderRadius: "4px",
                  border: "1px solid",
                  borderColor: "divider",
                  boxShadow: l.shadows[8],
                  maxWidth: pr,
                  minWidth: 0,
                  py: 0.5,
                  boxSizing: "border-box"
                },
                children: /* @__PURE__ */ t(
                  Co,
                  {
                    id: L,
                    dense: !0,
                    autoFocus: !1,
                    role: "menu",
                    sx: {
                      bgcolor: "transparent",
                      py: 0,
                      maxWidth: pr
                    },
                    children: ge(e.subitems, e.text, 0)
                  }
                )
              }
            )
          }
        )
      ]
    }
  );
  function ge(O, F, W) {
    return O.flatMap((D) => {
      const de = pt(F, D);
      return Ze(D) ? [
        /* @__PURE__ */ t(
          Io,
          {
            disableSticky: !0,
            title: D.text,
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
            children: D.text
          },
          de
        ),
        ...ge(D.subitems, de, W + 1)
      ] : [
        /* @__PURE__ */ d(
          Je,
          {
            role: "menuitem",
            title: D.text,
            disabled: !D.path,
            selected: pe(D, r),
            onClick: (xe) => {
              xe.preventDefault(), D.path && (o == null || o(D.path)), A(!1);
            },
            sx: {
              borderRadius: "4px",
              mx: 0.5,
              my: 0.125,
              pl: 2 + W * 1.5,
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
                bgcolor: X,
                color: "#ffffff",
                "&:hover": {
                  bgcolor: X
                }
              },
              "&.Mui-focusVisible": {
                bgcolor: "action.focus"
              }
            },
            children: [
              D.icon ? /* @__PURE__ */ t(le, { children: D.icon }) : null,
              /* @__PURE__ */ t(
                ce,
                {
                  primary: D.text,
                  primaryTypographyProps: {
                    noWrap: !0
                  }
                }
              )
            ]
          },
          de
        )
      ];
    });
  }
}, cn = ({
  link: e,
  activePath: r,
  onLinkClick: o,
  accentColor: n,
  isSecondary: a,
  railShowTitles: c
}) => {
  const s = !!(e.path && r === e.path), { sx: l } = Fr(
    a,
    n,
    s,
    c
  );
  return Kr(
    /* @__PURE__ */ t(
      re,
      {
        component: e.path ? "a" : "button",
        href: e.path || void 0,
        "aria-label": e.text,
        onClick: (h) => {
          h.preventDefault(), h.stopPropagation(), e.path && (o == null || o(e.path));
        },
        disabled: !e.path,
        sx: l,
        children: c ? /* @__PURE__ */ t(Hr, { link: e }) : e.icon
      }
    ),
    e.text,
    c
  );
}, dn = () => /* @__PURE__ */ t(
  m,
  {
    sx: {
      width: "100%",
      display: "flex",
      justifyContent: "center"
    },
    children: /* @__PURE__ */ t(Me, { sx: { width: "60%", borderColor: "divider" } })
  }
), un = () => /* @__PURE__ */ t(
  m,
  {
    sx: {
      width: "100%",
      my: 2,
      display: "flex",
      justifyContent: "center"
    },
    children: /* @__PURE__ */ t(Me, { sx: { width: "60%", borderColor: "divider" } })
  }
), mr = (e, r) => e.map((o, n) => /* @__PURE__ */ d(E.Fragment, { children: [
  r(o, n),
  n < e.length - 1 ? /* @__PURE__ */ t(dn, {}) : null
] }, n)), hn = ({
  mainLinks: e,
  secondaryLinks: r = [],
  activePath: o,
  onLinkClick: n,
  accentColor: a = "#01584f",
  surfaceBackgroundColor: c,
  railShowTitles: s = !1
}) => {
  const l = (u, p) => Ze(u) ? /* @__PURE__ */ t(
    ln,
    {
      link: u,
      activePath: o,
      onLinkClick: n,
      accentColor: a,
      isSecondary: p,
      surfaceBackgroundColor: c,
      railShowTitles: s
    }
  ) : /* @__PURE__ */ t(
    cn,
    {
      link: u,
      activePath: o,
      onLinkClick: n,
      accentColor: a,
      isSecondary: p,
      railShowTitles: s
    }
  ), h = s ? 1.25 : 1;
  return /* @__PURE__ */ d(
    me,
    {
      sx: {
        flexGrow: 1,
        width: "100%",
        boxSizing: "border-box",
        justifyContent: "flex-start",
        alignItems: "center",
        pt: 2,
        gap: h
      },
      children: [
        mr(e, (u) => l(u, !1)),
        r.length > 0 ? /* @__PURE__ */ d(ze, { children: [
          /* @__PURE__ */ t(un, {}),
          /* @__PURE__ */ t(m, { sx: { mt: "auto", pb: 2 }, children: /* @__PURE__ */ t(me, { gap: h, alignItems: "center", children: mr(
            r,
            (u) => l(u, !0)
          ) }) })
        ] }) : null
      ]
    }
  );
}, fn = (e) => e ? e.charAt(0).toUpperCase() + e.slice(1).toLowerCase() : "User", pn = (e) => e.split(/\s+/).filter(Boolean).slice(0, 2).map((r) => r.charAt(0).toUpperCase()).join(""), gr = {
  overflow: "hidden",
  textOverflow: "ellipsis",
  whiteSpace: "nowrap",
  maxWidth: "100%"
}, xr = ({ count: e }) => e ? /* @__PURE__ */ t(
  m,
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
) : null, Ur = ({ name: e, avatar: r, color: o, size: n = 36 }) => /* @__PURE__ */ t(
  Ao,
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
    children: pn(e)
  }
), $r = ({ name: e, role: r, avatar: o, avatarColor: n, showText: a }) => /* @__PURE__ */ d(ze, { children: [
  /* @__PURE__ */ t(Ur, { name: e, avatar: o, color: n }),
  a && /* @__PURE__ */ d(
    m,
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
          ie,
          {
            variant: "body2",
            sx: { ...gr, fontWeight: 600, color: "inherit" },
            children: e
          }
        ),
        /* @__PURE__ */ t(
          ie,
          {
            variant: "caption",
            sx: { ...gr, opacity: 0.8, color: "inherit" },
            children: fn(r)
          }
        )
      ]
    }
  )
] }), br = {
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
}, Pr = ({
  anchorEl: e,
  onClose: r,
  placement: o,
  width: n,
  avatarColor: a,
  showNotifications: c,
  notificationCount: s,
  onNotificationsClick: l,
  userName: h = "User",
  userRole: u,
  userAvatar: p,
  menuItems: A = [],
  showSettings: f,
  onSettingsClick: b,
  showThemeToggler: v,
  theme: x,
  onThemeToggle: R,
  onLogout: L
}) => {
  const z = (y) => () => {
    r(), y == null || y();
  };
  return /* @__PURE__ */ d(
    No,
    {
      anchorEl: e,
      open: !!e,
      onClose: r,
      anchorOrigin: br[o].anchor,
      transformOrigin: br[o].transform,
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
          me,
          {
            direction: "row",
            spacing: 1.25,
            sx: { px: 1.5, py: 1, alignItems: "center" },
            children: /* @__PURE__ */ t(
              $r,
              {
                name: h,
                role: u,
                avatar: p,
                avatarColor: a,
                showText: !0
              }
            )
          }
        ),
        /* @__PURE__ */ t(Me, {}),
        c && /* @__PURE__ */ d(Je, { onClick: z(l), children: [
          /* @__PURE__ */ t(le, { children: /* @__PURE__ */ t(Ar, { fontSize: "small" }) }),
          /* @__PURE__ */ t(ce, { children: "Notifications" }),
          /* @__PURE__ */ t(xr, { count: s })
        ] }),
        A.map((y) => /* @__PURE__ */ d(Je, { onClick: z(y.onClick), children: [
          y.icon && /* @__PURE__ */ t(le, { children: y.icon }),
          /* @__PURE__ */ t(ce, { inset: !y.icon, children: y.label }),
          /* @__PURE__ */ t(xr, { count: y.badge })
        ] }, y.key)),
        f && /* @__PURE__ */ d(Je, { onClick: z(b), children: [
          /* @__PURE__ */ t(le, { children: /* @__PURE__ */ t(Oo, { fontSize: "small" }) }),
          /* @__PURE__ */ t(ce, { children: "Settings" })
        ] }),
        v && [
          /* @__PURE__ */ t(Me, {}, "theme-divider"),
          /* @__PURE__ */ d(m, { sx: { px: 1.5, py: 1 }, children: [
            /* @__PURE__ */ t(
              ie,
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
              Do,
              {
                exclusive: !0,
                fullWidth: !0,
                size: "small",
                "aria-label": "Theme",
                value: x,
                onChange: (y, B) => B && B !== x && (R == null ? void 0 : R()),
                disabled: !R,
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
                  /* @__PURE__ */ t(ir, { value: "light", children: "Light" }),
                  /* @__PURE__ */ t(ir, { value: "dark", children: "Dark" })
                ]
              }
            )
          ] }, "theme")
        ],
        /* @__PURE__ */ t(Me, {}),
        /* @__PURE__ */ d(
          Je,
          {
            onClick: z(L),
            sx: {
              color: x === "dark" ? "hsl(0, 90%, 65%)" : "error.main"
            },
            children: [
              /* @__PURE__ */ t(le, { sx: { color: "inherit" }, children: /* @__PURE__ */ t(_o, { fontSize: "small" }) }),
              /* @__PURE__ */ t(ce, { children: "Log out" })
            ]
          }
        )
      ]
    }
  );
}, Gr = 64, mn = 2, qe = ({
  label: e,
  icon: r,
  onClick: o,
  active: n,
  color: a,
  activeColor: c,
  activeBackground: s,
  ariaLabel: l,
  haspopup: h,
  isPage: u = !1,
  testId: p
}) => /* @__PURE__ */ d(
  xt,
  {
    onClick: o,
    "aria-label": l ?? e,
    "aria-haspopup": h,
    "aria-expanded": h ? n : void 0,
    "aria-current": u && n ? "page" : void 0,
    "data-testid": p,
    sx: {
      flex: "1 1 0",
      minWidth: 0,
      height: "100%",
      flexDirection: "column",
      gap: 0.25,
      color: n ? c : a,
      "&.Mui-focusVisible": {
        outline: "2px solid",
        outlineColor: c,
        outlineOffset: -4
      }
    },
    children: [
      /* @__PURE__ */ t(
        m,
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
        ie,
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
), gn = ({
  onMenuClick: e,
  menuOpen: r,
  onSearchClick: o,
  searchOpen: n,
  showAssistant: a,
  onAssistantClick: c,
  assistantActive: s,
  showProfile: l,
  background: h,
  color: u,
  activeColor: p,
  activeBackground: A,
  pinnedLinks: f = [],
  activePath: b,
  onLinkClick: v,
  ...x
}) => {
  const R = f.filter((w) => w.path).slice(0, mn), [L, z] = E.useState(
    null
  ), { userName: y = "User", userAvatar: B, avatarColor: Y } = x, X = { color: u, activeColor: p, activeBackground: A };
  return /* @__PURE__ */ d(
    Ft,
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
        height: `calc(${Gr}px + env(safe-area-inset-bottom, 0px))`,
        pb: "env(safe-area-inset-bottom, 0px)",
        bgcolor: h,
        borderTop: "1px solid",
        borderColor: "divider"
      },
      children: [
        e && /* @__PURE__ */ t(
          qe,
          {
            label: "Menu",
            icon: /* @__PURE__ */ t(_r, {}),
            onClick: e,
            active: r,
            haspopup: "dialog",
            testId: "mobile-nav-menu",
            ...X
          }
        ),
        R.map((w) => /* @__PURE__ */ t(
          qe,
          {
            label: w.text,
            icon: w.icon,
            onClick: () => v == null ? void 0 : v(w.path),
            active: Ie(w, b),
            isPage: !0,
            testId: `mobile-nav-link-${w.text}`,
            ...X
          },
          w.path
        )),
        a && /* @__PURE__ */ t(
          qe,
          {
            label: "Nexa",
            ariaLabel: "Ask Nexa",
            icon: /* @__PURE__ */ t(
              m,
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
                children: /* @__PURE__ */ t(mt, { size: 18 })
              }
            ),
            onClick: c,
            active: s,
            testId: "mobile-nav-nexa",
            ...X
          }
        ),
        o && /* @__PURE__ */ t(
          qe,
          {
            label: "Search",
            icon: /* @__PURE__ */ t(Or, {}),
            onClick: o,
            active: n,
            haspopup: "dialog",
            testId: "mobile-nav-search",
            ...X
          }
        ),
        l && /* @__PURE__ */ d(ze, { children: [
          /* @__PURE__ */ t(
            qe,
            {
              label: "Account",
              ariaLabel: `Account menu for ${y}`,
              icon: /* @__PURE__ */ t(
                Ur,
                {
                  name: y,
                  avatar: B,
                  color: Y,
                  size: 26
                }
              ),
              onClick: (w) => z(w.currentTarget),
              active: !!L,
              haspopup: "menu",
              testId: "mobile-nav-account",
              ...X
            }
          ),
          /* @__PURE__ */ t(
            Pr,
            {
              anchorEl: L,
              onClose: () => z(null),
              placement: "above-end",
              width: 280,
              ...x
            }
          )
        ] })
      ]
    }
  );
}, xn = ({
  open: e,
  onClose: r,
  search: o
}) => /* @__PURE__ */ t(
  Wo,
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
    children: /* @__PURE__ */ d(
      me,
      {
        direction: "row",
        spacing: 1,
        "data-testid": "mobile-search-sheet",
        sx: { alignItems: "center" },
        children: [
          /* @__PURE__ */ t(m, { sx: { flex: "1 1 auto", minWidth: 0 }, children: o }),
          /* @__PURE__ */ t(
            Tr,
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
), bn = ({
  height: e,
  onMenuClick: r,
  appName: o,
  logo: n,
  onBrandClick: a,
  background: c,
  color: s,
  brandColor: l = s,
  endContent: h
}) => /* @__PURE__ */ t(
  ko,
  {
    position: "fixed",
    elevation: 0,
    sx: {
      height: e,
      background: c,
      color: s,
      borderBottom: "1px solid",
      borderColor: "divider"
    },
    children: /* @__PURE__ */ d(Lo, { sx: { minHeight: `${e}px !important`, gap: 1, px: 1 }, children: [
      r && /* @__PURE__ */ t(
        re,
        {
          "aria-label": "Open navigation menu",
          onClick: r,
          sx: { color: s },
          children: /* @__PURE__ */ t(_r, {})
        }
      ),
      /* @__PURE__ */ t(
        gt,
        {
          title: o,
          appName: o,
          logo: n,
          onClick: a,
          color: l,
          testId: "mobile-brand"
        }
      ),
      h ? /* @__PURE__ */ t(m, { sx: { ml: "auto", display: "flex", alignItems: "center" }, children: h }) : null
    ] })
  }
), jr = ({
  count: e,
  onClick: r,
  color: o,
  hoverColor: n,
  tooltipPlacement: a,
  testId: c
}) => {
  const s = e ? `Notifications, ${e} unread` : "Notifications";
  return /* @__PURE__ */ t(Q, { title: s, placement: a, arrow: !0, children: /* @__PURE__ */ t(
    re,
    {
      onClick: r,
      "aria-label": s,
      "data-testid": c,
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
        Mo,
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
          children: /* @__PURE__ */ t(Ar, {})
        }
      )
    }
  ) });
}, Sn = ({
  compact: e,
  color: r,
  hoverColor: o,
  showProfile: n,
  ...a
}) => {
  var L;
  const {
    avatarColor: c,
    showNotifications: s,
    notificationCount: l,
    onNotificationsClick: h,
    userName: u = "User",
    userRole: p,
    userAvatar: A
  } = a, f = E.useRef(null), [b, v] = E.useState(
    null
  ), x = !!b;
  if (!s && !n)
    return null;
  const R = {
    "&.Mui-focusVisible": { outline: "2px solid", outlineColor: r }
  };
  return /* @__PURE__ */ d(ze, { children: [
    /* @__PURE__ */ d(
      me,
      {
        ref: f,
        direction: e ? "column" : "row",
        spacing: 0.5,
        "data-testid": "sidebar-footer",
        sx: { width: "100%", alignItems: "center" },
        children: [
          n && /* @__PURE__ */ t(
            Q,
            {
              title: e ? u : "",
              placement: "right",
              arrow: !0,
              children: /* @__PURE__ */ t(
                xt,
                {
                  onClick: () => v(f.current),
                  "aria-label": `Account menu for ${u}`,
                  "aria-haspopup": "menu",
                  "aria-expanded": x,
                  "data-testid": "sidebar-user",
                  sx: {
                    flex: e ? "0 0 auto" : "1 1 auto",
                    minWidth: 0,
                    gap: 1.25,
                    p: e ? 0.5 : "6px 8px",
                    justifyContent: "flex-start",
                    borderRadius: "8px",
                    color: r,
                    bgcolor: x ? o : "transparent",
                    "&:hover": { bgcolor: o },
                    ...R
                  },
                  children: /* @__PURE__ */ t(
                    $r,
                    {
                      name: u,
                      role: p,
                      avatar: A,
                      avatarColor: c,
                      showText: !e
                    }
                  )
                }
              )
            }
          ),
          s && /* @__PURE__ */ t(
            jr,
            {
              count: l,
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
    /* @__PURE__ */ t(
      Pr,
      {
        anchorEl: b,
        onClose: () => v(null),
        placement: e ? "beside" : "above",
        width: e || (L = f.current) == null ? void 0 : L.clientWidth,
        ...a
      }
    )
  ] });
}, En = 'input, textarea, [contenteditable="true"]', Sr = (e) => {
  var r;
  (r = e == null ? void 0 : e.querySelector(En)) == null || r.focus();
}, wn = ({
  search: e,
  mode: r,
  onExpand: o,
  autoFocus: n = !1,
  onAutoFocused: a,
  color: c,
  hoverColor: s
}) => {
  const l = E.useRef(null), [h, u] = E.useState(null);
  return E.useEffect(() => {
    r === "full" && n && (Sr(l.current), a == null || a());
  }, [r, n, a]), r === "full" ? /* @__PURE__ */ t(
    m,
    {
      ref: l,
      "data-testid": "sidebar-search",
      sx: { width: "100%" },
      children: e
    }
  ) : /* @__PURE__ */ d(
    m,
    {
      "data-testid": "sidebar-search",
      sx: { width: "100%", display: "flex", justifyContent: "center" },
      children: [
        /* @__PURE__ */ t(Q, { title: "Search", placement: "right", arrow: !0, children: /* @__PURE__ */ t(
          re,
          {
            "aria-label": "Search",
            onClick: (p) => r === "expand" ? o == null ? void 0 : o() : u(p.currentTarget),
            sx: {
              width: 44,
              height: 44,
              color: c,
              borderRadius: "8px",
              "&:hover": { bgcolor: s }
            },
            children: /* @__PURE__ */ t(Or, {})
          }
        ) }),
        /* @__PURE__ */ t(
          zo,
          {
            open: !!h,
            anchorEl: h,
            onClose: () => u(null),
            anchorOrigin: { vertical: "top", horizontal: "right" },
            transformOrigin: { vertical: "top", horizontal: "left" },
            TransitionProps: {
              onEntered: (p) => Sr(p)
            },
            slotProps: { paper: { sx: { ml: 1, p: 1.5, width: 360 } } },
            children: e
          }
        )
      ]
    }
  );
}, vn = 100, Er = 80, kt = 56, yn = 300, wr = 288, vr = 72, yr = "lumora:sidebar-collapsed", Rr = "width 200ms ease, left 200ms ease", Rn = 68, In = { xs: 2, md: 5 }, Cn = () => typeof navigator < "u" && /Mac|iPhone|iPad/.test(navigator.platform || navigator.userAgent), Tn = (e, r) => {
  const o = (n) => typeof n == "number" ? r.spacing(n) : n;
  return typeof e == "object" ? Object.fromEntries(
    Object.entries(e).map(([n, a]) => [n, o(a)])
  ) : o(e);
}, wi = ({
  children: e,
  sidebarLinks: r = [],
  secondarySidebarLinks: o = [],
  appName: n = "Dashboard",
  showSidebar: a = !0,
  showSidebarRailTitles: c = !1,
  sidebarVariant: s = "rail",
  mobileNavigation: l = "bottom-bar",
  mobileBottomBarLinks: h,
  logo: u,
  onBrandClick: p,
  searchComponent: A,
  brandColor: f,
  contentPadding: b = In,
  userMenuItems: v,
  sidebarBackgroundColor: x,
  sidebarHeaderBackgroundColor: R,
  groupAccentColor: L,
  activeSidebarForegroundColor: z,
  enableRefreshToken: y = !1,
  activePath: B,
  onLinkClick: Y,
  showProfile: X = !0,
  userName: w,
  userRole: Ce,
  userAvatar: ge,
  onLogout: O,
  showSettings: F = !0,
  onSettingsClick: W,
  showNotifications: D = !0,
  notificationCount: de = 0,
  NotificationSidebarContent: xe,
  onVerify: M,
  alertProps: P,
  style: bt,
  sidebarStyles: G,
  contentStyles: tt,
  accentColor: St,
  sidebarAccentColor: oe,
  sidebarForegroundColor: Te,
  contentBackgroundColor: ae,
  theme: be = "light",
  showThemeToggler: _e = !1,
  onThemeToggle: Et,
  GlobalChatSidebar: ue,
  useChatSidebar: Be,
  chatPanelMode: Fe = "docked",
  chatPanelPosition: He = "right",
  chatPanelWidth: Se = 420,
  onChatClose: rt,
  showAssistant: Ee = !1,
  assistantPlacement: Ke = "sidebar",
  assistantShortcut: Ue = "j",
  onAssistantClick: he,
  assistantActive: $e = !1,
  assistantBusy: ot = !1,
  customNavbar: nt,
  customNavbarProps: it,
  redirectToLogin: we,
  apiBaseUrl: Pe
}) => {
  const at = po(), q = mo(at.breakpoints.down("md")), st = rr(
    () => Cr(Zo(be)),
    [be]
  ), ve = be === "dark", i = St ?? "#01584f", S = oe ?? i, _ = ae ?? (ve ? "hsl(220, 35%, 9%)" : "#f2f9fc"), g = s === "collapsible", I = s === "rail-labeled", k = g || I, j = x ?? (ve ? "hsl(220, 30%, 7%)" : "#ffffff"), H = R ?? j, U = Te ?? (ve ? "#ffffff" : S), Oe = L ?? Mt(U), lt = R ? Lt(H) : U, Ht = (C) => /* @__PURE__ */ t(
    ee,
    {
      role: "img",
      "aria-label": `${n} logo`,
      sx: {
        width: 28,
        height: 28,
        flexShrink: 0,
        bgcolor: C,
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
  ), wt = f ?? lt, Kt = u ?? Ht(wt), Xr = u ?? Ht(f ?? U), [Ge, Vr] = Re(
    () => kr(yr) ?? !1
  ), Ut = (C) => {
    Vr(C), Lr(yr, C);
  }, [Yr, $t] = Re(!1), qr = fo(() => $t(!1), []);
  let ne = 0;
  a && !q && (I ? ne = Er : g ? ne = Ge ? vr : wr : ne = vn);
  const [Pt, ye] = Re(!1), [Gt, vt] = Re(!1), V = q && l === "bottom-bar", jt = `calc(${Gr}px + env(safe-area-inset-bottom, 0px))`, [Jr, yt] = Re(!1), [Zr, Qr] = Re(!0), [eo, to] = Re(!1), Rt = Be == null ? void 0 : Be(), Xt = (Rt == null ? void 0 : Rt.isOpen) ?? !1, Vt = Fe === "floating" ? "floating" : "docked", ro = Vt === "docked" && Xt && ue && !q ? Se : 0, ct = Ot(M), Yt = Ot(!1), qt = rr(
    () => Jo(Pe),
    [Pe]
  );
  ut(() => {
    ct.current = M;
  }, [M]);
  const It = Ot(he);
  It.current = he;
  const je = Ee && Ue ? Ue.toLowerCase() : null;
  ut(() => {
    if (!je)
      return;
    const C = ($) => {
      ($.metaKey || $.ctrlKey) && !$.altKey && !$.shiftKey && $.key.toLowerCase() === je && It.current && ($.preventDefault(), It.current());
    };
    return window.addEventListener("keydown", C), () => window.removeEventListener("keydown", C);
  }, [je]);
  const oo = (C) => {
    const $ = O(C);
    $ instanceof Promise && $.catch((fe) => {
      console.error("Error in logout handler:", fe);
    });
  };
  if (ut(() => {
    (() => {
      var $;
      try {
        const { isAuthenticated: fe } = Yo();
        if (!fe) {
          console.log("No session found, redirecting to login"), et(), we();
          return;
        }
        if (!Yt.current) {
          const { user: Ve, error: _t } = qo();
          if (Ve && !_t) {
            const so = {
              name: Ve.name || "",
              email: Ve.email || "",
              profilePicture: Ve.profilePicture || "",
              role: Ve.role || ""
            };
            Yt.current = !0, ($ = ct.current) == null || $.call(ct, so);
          } else
            _t && console.error("Error getting user data:", _t);
        }
        to(!0);
      } catch (fe) {
        console.error("Error checking session:", fe), et(), we();
      } finally {
        Qr(!1);
      }
    })();
  }, [we]), ut(() => {
    y && Qo(qt, we);
  }, [y, qt]), Zr)
    return /* @__PURE__ */ t(tr, { theme: st, children: /* @__PURE__ */ d(
      ee,
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
            go,
            {
              size: 60,
              thickness: 4,
              sx: { color: i }
            }
          ),
          /* @__PURE__ */ t(ee, { sx: { mt: 2, color: "text.secondary" }, children: "Checking session..." })
        ]
      }
    ) });
  if (!eo)
    return null;
  const Xe = A ?? (nt ? /* @__PURE__ */ t(nt, { ...it }) : null), Jt = xe && (() => {
    ye(!1), vt(!1), yt(!0);
  }), Zt = {
    avatarColor: S,
    menuItems: v,
    showNotifications: D,
    notificationCount: de,
    onNotificationsClick: Jt,
    showProfile: X,
    userName: w,
    userRole: Ce,
    userAvatar: ge,
    showSettings: F,
    onSettingsClick: W,
    showThemeToggler: _e,
    theme: be,
    onThemeToggle: Et,
    onLogout: oo
  }, Ct = (C) => /* @__PURE__ */ t(
    Sn,
    {
      ...Zt,
      compact: C,
      color: U,
      hoverColor: Oe
    }
  ), Qt = je ? [Cn() ? "⌘" : "Ctrl", je.toUpperCase()] : void 0, no = (C) => Ee && Ke === "sidebar" ? /* @__PURE__ */ t(
    fr,
    {
      variant: C ? "sidebar-icon" : "sidebar",
      onClick: he,
      active: $e,
      busy: ot,
      shortcutKeys: Qt,
      accentColor: U
    }
  ) : null, io = (C) => Xe ? /* @__PURE__ */ t(
    wn,
    {
      search: Xe,
      mode: C,
      onExpand: () => {
        Ut(!1), $t(!0);
      },
      autoFocus: Yr,
      onAutoFocused: qr,
      color: U,
      hoverColor: Oe
    }
  ) : null, Tt = (C) => {
    const $ = no(C !== "full"), fe = io(C);
    return $ || fe ? /* @__PURE__ */ d(
      So,
      {
        spacing: 1.5,
        sx: { alignItems: C === "full" ? "stretch" : "center" },
        children: [
          $,
          fe
        ]
      }
    ) : void 0;
  }, ao = Tn(
    b,
    at
  );
  return /* @__PURE__ */ t(tr, { theme: st, children: /* @__PURE__ */ d(
    ee,
    {
      sx: {
        display: "flex",
        minHeight: "100vh",
        ...bt
      },
      children: [
        /* @__PURE__ */ t(xo, {}),
        q && /* @__PURE__ */ t(
          bn,
          {
            height: kt,
            onMenuClick: a && !V ? () => ye(!0) : void 0,
            appName: n,
            logo: Kt,
            onBrandClick: p,
            background: H,
            color: lt,
            brandColor: wt,
            endContent: D ? /* @__PURE__ */ t(
              jr,
              {
                count: de,
                onClick: Jt,
                color: lt,
                hoverColor: Oe,
                tooltipPlacement: "bottom",
                testId: "mobile-notifications"
              }
            ) : void 0
          }
        ),
        a && !q && k && /* @__PURE__ */ d(
          ee,
          {
            component: "aside",
            sx: {
              width: ne,
              minWidth: ne,
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
              bgcolor: g ? j : void 0,
              borderRight: "1px solid",
              borderColor: "divider",
              transition: Rr,
              ...G
            },
            children: [
              /* @__PURE__ */ t(
                ur,
                {
                  mainLinks: r,
                  secondaryLinks: o,
                  activePath: B,
                  onLinkClick: Y,
                  showHeaderBar: g,
                  logo: Kt,
                  title: n,
                  onBrandClick: p,
                  brandColor: wt,
                  headerBackgroundColor: g ? H : void 0,
                  headerForegroundColor: g ? lt : void 0,
                  activeAccentColor: S,
                  groupAccentColor: L,
                  activeForegroundColor: z,
                  foregroundColor: Te,
                  surfaceBackgroundColor: j,
                  collapsed: I ? !0 : Ge,
                  onCollapsedChange: I ? void 0 : Ut,
                  showLabels: I,
                  expandedWidth: wr,
                  collapsedWidth: I ? Er : vr,
                  topContent: Tt(
                    I ? "popover" : Ge ? "expand" : "full"
                  ),
                  footer: Ct(
                    I || Ge
                  )
                }
              ),
              g && (P == null ? void 0 : P.show) && !Ge && /* @__PURE__ */ t(Wt, { ...P })
            ]
          }
        ),
        a && !q && !k && /* @__PURE__ */ t(
          or,
          {
            variant: "permanent",
            sx: {
              width: ne,
              flexShrink: 0,
              zIndex: 2,
              "& .MuiDrawer-paper": {
                width: ne,
                boxSizing: "border-box",
                bgcolor: _,
                borderRight: "none"
              },
              ...G
            },
            children: /* @__PURE__ */ d(
              ee,
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
                    ee,
                    {
                      sx: {
                        display: "flex",
                        justifyContent: "center",
                        mb: 1.5
                      },
                      children: /* @__PURE__ */ t(
                        gt,
                        {
                          logo: Xr,
                          appName: n,
                          onClick: p,
                          color: f ?? U,
                          testId: "sidebar-header-brand"
                        }
                      )
                    }
                  ),
                  Tt("popover"),
                  /* @__PURE__ */ d(
                    ee,
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
                          hn,
                          {
                            mainLinks: r,
                            secondaryLinks: o,
                            activePath: B,
                            onLinkClick: Y,
                            accentColor: S,
                            surfaceBackgroundColor: _,
                            railShowTitles: c
                          }
                        ),
                        (P == null ? void 0 : P.show) && /* @__PURE__ */ t(Wt, { ...P })
                      ]
                    }
                  ),
                  /* @__PURE__ */ t(ee, { sx: { py: 1.5 }, children: Ct(!0) })
                ]
              }
            )
          }
        ),
        a && q && /* @__PURE__ */ d(
          bo,
          {
            anchor: V ? "bottom" : "left",
            open: Pt,
            onOpen: () => ye(!0),
            onClose: () => ye(!1),
            disableSwipeToOpen: !0,
            sx: { zIndex: (C) => C.zIndex.drawer + 1 },
            slotProps: {
              paper: {
                "aria-label": "Navigation",
                sx: {
                  bgcolor: j,
                  backgroundImage: "none",
                  ...V ? {
                    maxHeight: "min(80vh, 640px)",
                    borderTopLeftRadius: "16px",
                    borderTopRightRadius: "16px",
                    pb: "env(safe-area-inset-bottom, 0px)"
                  } : { maxWidth: "85vw" }
                }
              }
            },
            children: [
              V && // Grab handle: the sheet can be swiped down to close
              /* @__PURE__ */ t(
                ee,
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
                ur,
                {
                  mainLinks: r,
                  secondaryLinks: o,
                  activePath: B,
                  onLinkClick: (C) => {
                    Y == null || Y(C), ye(!1);
                  },
                  onLinkAction: () => ye(!1),
                  collapsed: !1,
                  expandedWidth: V ? "100%" : yn,
                  activeAccentColor: S,
                  groupAccentColor: L,
                  activeForegroundColor: z,
                  foregroundColor: Te,
                  surfaceBackgroundColor: j,
                  topInsetPx: V ? 8 : 0,
                  topContent: V ? void 0 : Tt("full"),
                  footer: V ? void 0 : Ct(!1)
                }
              ),
              (P == null ? void 0 : P.show) && /* @__PURE__ */ t(Wt, { ...P })
            ]
          }
        ),
        V && Xe && /* @__PURE__ */ t(
          xn,
          {
            open: Gt,
            onClose: () => vt(!1),
            search: Xe
          }
        ),
        V && /* @__PURE__ */ t(
          gn,
          {
            ...Zt,
            pinnedLinks: h,
            activePath: B,
            onLinkClick: Y,
            onMenuClick: a ? () => ye(!0) : void 0,
            menuOpen: Pt,
            onSearchClick: Xe ? () => vt(!0) : void 0,
            searchOpen: Gt,
            showAssistant: Ee,
            onAssistantClick: he,
            assistantActive: $e,
            showProfile: X,
            background: j,
            color: U,
            activeColor: S,
            activeBackground: Oe
          }
        ),
        /* @__PURE__ */ t(
          ee,
          {
            component: "main",
            sx: {
              flexGrow: 1,
              "--lumora-content-padding": ao,
              // Where sticky page elements should pin (below the mobile bar)
              "--lumora-sticky-top": q ? `${kt}px` : "0px",
              p: "var(--lumora-content-padding)",
              width: ne ? `calc(100% - ${ne}px)` : "100%",
              transition: Rr,
              mt: q ? `${kt}px` : 0,
              // Keep the last content clear of the bottom bar
              ...V && {
                pb: `calc(var(--lumora-content-padding) + ${jt})`
              },
              backgroundColor: _,
              ...tt
            },
            children: e
          }
        ),
        ue && /* @__PURE__ */ t(
          on,
          {
            open: Xt,
            variant: Vt,
            position: He,
            width: Se,
            sidebarWidthPx: ne,
            bottomOffsetPx: Ee && Ke === "floating" ? Rn : 0,
            fullScreen: q,
            fullScreenBottom: V ? jt : "0px",
            onClose: rt,
            children: /* @__PURE__ */ t(ue, {})
          }
        ),
        Ee && Ke === "floating" && !V && /* @__PURE__ */ t(
          fr,
          {
            variant: "floating",
            rightOffsetPx: ro,
            shortcutKeys: Qt,
            onClick: he,
            active: $e,
            busy: ot
          }
        ),
        D && xe && /* @__PURE__ */ t(
          or,
          {
            anchor: "right",
            open: Jr,
            onClose: () => yt(!1),
            slotProps: {
              paper: { sx: { width: 380, maxWidth: "100vw" } }
            },
            children: /* @__PURE__ */ t(
              xe,
              {
                onClose: () => yt(!1)
              }
            )
          }
        )
      ]
    }
  ) });
};
export {
  N as AUTH_ERROR_CODES,
  T as AuthError,
  ur as CollapsibleSidebar,
  Si as FullBleedSection,
  Xo as Kbd,
  wi as LumoraWrapper,
  et as clearAuthTokens,
  wi as default,
  Ei as getAuthErrorMessage,
  Qe as getAuthTokens,
  qo as getCurrentUser,
  Zo as getDesignTokens,
  Yo as isAuthenticated,
  Bt as logAuthError,
  zr as storeAuthTokens
};
