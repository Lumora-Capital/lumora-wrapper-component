import { jsx as t, jsxs as d, Fragment as et } from "react/jsx-runtime";
import so from "@mui/icons-material/KeyboardArrowDownRounded";
import lo from "@mui/icons-material/KeyboardArrowUpRounded";
import co from "@mui/icons-material/ChevronRightRounded";
import uo from "@mui/icons-material/ViewSidebarOutlined";
import m from "@mui/material/Box";
import er from "@mui/material/Collapse";
import ze from "@mui/material/Divider";
import ee from "@mui/material/IconButton";
import dt from "@mui/material/ListItemButton";
import ce from "@mui/material/ListItemIcon";
import de from "@mui/material/ListItemText";
import ge from "@mui/material/Stack";
import J from "@mui/material/Tooltip";
import ae from "@mui/material/Typography";
import { useTheme as Rr, createTheme as Ir, alpha as Ae, ThemeProvider as tr } from "@mui/material/styles";
import * as b from "react";
import { useMemo as rr, useState as Re, useCallback as ho, useRef as Ot, useEffect as ut } from "react";
import xt from "@mui/material/ButtonBase";
import { useTheme as fo, useMediaQuery as po, Box as Z, CircularProgress as mo, CssBaseline as go, Drawer as or, SwipeableDrawer as xo, Stack as bo } from "@mui/material";
import nr from "axios";
import So from "@mui/material/Card";
import Eo from "@mui/material/CardContent";
import Cr from "@mui/material/Button";
import wo from "@mui/icons-material/AutoAwesomeRounded";
import vo from "@mui/material/Grow";
import Mt from "@mui/material/Paper";
import yo from "@mui/material/Slide";
import Ro from "@mui/material/ListSubheader";
import qe from "@mui/material/MenuItem";
import Io from "@mui/material/MenuList";
import Co from "@mui/material/Popper";
import Tr from "@mui/icons-material/MenuRounded";
import _r from "@mui/icons-material/SearchRounded";
import To from "@mui/icons-material/LogoutRounded";
import Or from "@mui/icons-material/NotificationsNoneOutlined";
import _o from "@mui/icons-material/SettingsOutlined";
import Oo from "@mui/material/Avatar";
import Ao from "@mui/material/Menu";
import ir from "@mui/material/ToggleButton";
import No from "@mui/material/ToggleButtonGroup";
import Do from "@mui/material/Drawer";
import Wo from "@mui/material/AppBar";
import ko from "@mui/material/Toolbar";
import Lo from "@mui/material/Badge";
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
  }, l = /* @__PURE__ */ d(et, { children: [
    r ? /* @__PURE__ */ t(
      ae,
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
  ) : /* @__PURE__ */ t(ge, { direction: "row", "data-testid": c, sx: s, children: l });
}, Je = (e) => {
  var r;
  return !!((r = e.subitems) != null && r.length);
}, pt = (e, r) => e ? `${e}/${r.text}` : r.text, Ie = (e, r) => {
  var o;
  return r ? e.path && r === e.path ? !0 : ((o = e.subitems) == null ? void 0 : o.some((n) => Ie(n, r))) ?? !1 : !1;
}, me = (e, r) => !!(r && e.path === r), Ar = (e, r) => (e ?? []).flatMap((o) => {
  const n = o.icon ?? r;
  return Je(o) ? Ar(o.subitems, n) : o.path ? [{ sub: o, icon: n }] : [];
}), Lt = (e) => {
  const r = Nr(e);
  if (!r)
    return "#ffffff";
  const [o, n, a] = r.map((s) => {
    const l = s / 255;
    return l <= 0.03928 ? l / 12.92 : ((l + 0.055) / 1.055) ** 2.4;
  });
  return 0.2126 * o + 0.7152 * n + 0.0722 * a > 0.5 ? "#0b1f1c" : "#ffffff";
}, zt = (e) => {
  const r = Nr(e);
  if (!r)
    return "rgba(1, 88, 79, 0.12)";
  const [o, n, a] = r;
  return `rgba(${o}, ${n}, ${a}, 0.14)`;
}, Nr = (e) => {
  let r = e.trim().replace(/^#/, "");
  if (r.length === 3 && (r = r.split("").map((n) => n + n).join("")), r.length !== 6 || /[^0-9a-fA-F]/.test(r))
    return null;
  const o = parseInt(r, 16);
  return [o >> 16 & 255, o >> 8 & 255, o & 255];
}, Dr = () => typeof window < "u" && !!window.localStorage, Wr = (e) => {
  if (!Dr())
    return null;
  try {
    const r = window.localStorage.getItem(e);
    return r === null ? null : r === "true";
  } catch (r) {
    return console.warn("Failed to read sidebar collapsed state:", r), null;
  }
}, kr = (e, r) => {
  if (Dr())
    try {
      window.localStorage.setItem(e, r ? "true" : "false");
    } catch (o) {
      console.warn("Failed to persist sidebar collapsed state:", o);
    }
}, Bo = 264, Fo = 72, Mo = "lumora:sidebar-collapsed", Ho = "width 200ms ease", ar = 64, ht = {
  "&:focus, &:focus-visible": { outline: "none" }
}, Ko = 16, Uo = 14, $o = 4, Po = 2.5, sr = "0.7rem", lr = 22, Ne = ({ text: e, variant: r = "body1", center: o = !1, fontSize: n, fontWeight: a }) => {
  const c = b.useRef(null), [s, l] = b.useState(!1), h = b.useCallback(() => {
    const u = c.current;
    u && l(u.scrollWidth > u.clientWidth + 0.5);
  }, []);
  return b.useLayoutEffect(() => {
    h();
  }, [h, e]), b.useEffect(() => {
    const u = c.current;
    if (!u)
      return;
    const p = new ResizeObserver(() => h());
    return p.observe(u), () => p.disconnect();
  }, [h]), /* @__PURE__ */ t(
    J,
    {
      title: e,
      placement: "right",
      arrow: !0,
      enterDelay: 400,
      disableHoverListener: !s,
      disableFocusListener: !s,
      disableTouchListener: !s,
      children: /* @__PURE__ */ t(
        ae,
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
}, Go = ({
  open: e,
  size: r = Ko
}) => e ? /* @__PURE__ */ t(lo, { sx: { fontSize: r, opacity: 0.75 } }) : /* @__PURE__ */ t(so, { sx: { fontSize: r, opacity: 0.75 } }), cr = ({ open: e }) => /* @__PURE__ */ t(
  co,
  {
    sx: {
      fontSize: 20,
      opacity: 0.75,
      transition: "transform 150ms ease",
      transform: e ? "rotate(90deg)" : "none"
    }
  }
), jo = () => /* @__PURE__ */ t(uo, { sx: { transform: "scaleX(-1)" } }), ft = 600, dr = ({
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
  brandColor: N,
  activeAccentColor: f = "#01584f",
  groupAccentColor: x,
  activeForegroundColor: v,
  foregroundColor: g,
  surfaceBackgroundColor: I,
  collapsed: z,
  defaultCollapsed: B = !1,
  onCollapsedChange: y,
  persistKey: F = Mo,
  expandedWidth: X = Bo,
  collapsedWidth: G = Fo,
  showLabels: S = !1,
  topInsetPx: Ce = 0,
  topContent: xe,
  footer: A
}) => {
  const M = Rr(), L = M.palette.mode === "dark", W = z !== void 0, [ue, be] = b.useState(
    () => Wr(F) ?? B
  ), K = W ? !!z : ue, [$, bt] = b.useState(
    {}
  ), P = v ?? Lt(f), tt = {
    bgcolor: f,
    color: P,
    "& .MuiListItemIcon-root": { color: P }
  }, St = {
    bgcolor: f,
    color: P,
    borderRadius: "8px"
  }, te = x ?? zt(f), Te = I ?? (L ? M.palette.background.paper : "#ffffff"), se = g ?? (L ? "text.primary" : f), Se = u ?? Te, _e = p ?? (u ? Lt(Se) : g ?? (L ? M.palette.text.primary : f)), Et = zt(_e), he = (i) => {
    n == null || n(i);
  }, Be = () => {
    const i = !K;
    W || (be(i), kr(F, i)), y == null || y(i);
  }, Fe = (i, w) => {
    bt((R) => ({ ...R, [i]: !w }));
  }, Me = (i, w) => $[w] ?? Ie(i, o), Ee = (i, w, R) => ({
    color: i ? P : se,
    bgcolor: i ? f : "transparent",
    "& .MuiListItemIcon-root": {
      color: i ? P : se,
      minWidth: R
    },
    "&:hover": i || S ? tt : { bgcolor: w }
  }), rt = {
    "&.Mui-selected": {
      bgcolor: f
    },
    "&.Mui-selected:hover": tt
  }, we = (i) => {
    const w = me(i, o), R = /* @__PURE__ */ d(
      dt,
      {
        disabled: !i.path,
        selected: w,
        onClick: () => i.path && he(i.path),
        "data-testid": `sidebar-item-${i.text}`,
        "data-active": w ? "true" : "false",
        sx: {
          borderRadius: "8px",
          py: 1.25,
          px: 1.5,
          // Room for the action button laid over the row's end
          ...i.action && { pr: 6 },
          ...Ee(w, te, 36),
          ...rt
        },
        children: [
          /* @__PURE__ */ t(ce, { children: i.icon }),
          /* @__PURE__ */ t(
            de,
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
      return R;
    const { action: E } = i;
    return /* @__PURE__ */ d(m, { sx: { position: "relative" }, children: [
      R,
      /* @__PURE__ */ t(J, { title: E.label, placement: "right", arrow: !0, children: /* @__PURE__ */ t(
        ee,
        {
          "aria-label": E.label,
          "data-testid": `sidebar-action-${i.text}`,
          onClick: () => {
            E.onClick(), a == null || a();
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
            borderColor: w ? "rgba(255, 255, 255, 0.35)" : te,
            color: w ? P : se,
            "&:hover": {
              bgcolor: w ? "rgba(255, 255, 255, 0.15)" : te
            },
            "& .MuiSvgIcon-root": { fontSize: 18 },
            // No lingering outline after a click; a clear ring for keyboard focus
            "&:focus:not(.Mui-focusVisible)": {
              outline: "none"
            },
            "&.Mui-focusVisible": {
              outline: "2px solid",
              outlineColor: w ? P : se,
              outlineOffset: 1
            }
          },
          children: E.icon
        }
      ) })
    ] }, i.text);
  }, He = (i) => {
    const w = Ie(i, o), R = me(i, o), E = pt("", i), O = Me(i, E);
    return /* @__PURE__ */ d(
      m,
      {
        "data-testid": `sidebar-group-${i.text}`,
        sx: {
          borderRadius: "8px",
          bgcolor: w ? te : "transparent"
        },
        children: [
          /* @__PURE__ */ d(
            dt,
            {
              onClick: () => Fe(E, O),
              "data-testid": `sidebar-item-${i.text}`,
              "data-active": R ? "true" : "false",
              "aria-expanded": O,
              sx: {
                borderRadius: "8px",
                py: 1.25,
                px: 1.5,
                ...Ee(R, te, 36)
              },
              children: [
                /* @__PURE__ */ t(ce, { children: i.icon }),
                /* @__PURE__ */ t(
                  de,
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
                /* @__PURE__ */ t(cr, { open: O })
              ]
            }
          ),
          /* @__PURE__ */ t(er, { in: O, timeout: "auto", unmountOnExit: !0, children: /* @__PURE__ */ t(
            m,
            {
              "data-testid": `sidebar-children-${i.text}`,
              sx: { pb: 0.5 },
              children: i.subitems.map(
                (C) => Ke(C, E, 1)
              )
            }
          ) })
        ]
      },
      i.text
    );
  }, Ke = (i, w, R) => {
    const E = pt(w, i), O = $o + (R - 1) * Po;
    if (Je(i)) {
      const re = Ie(i, o), k = me(i, o), oe = Me(i, E);
      return /* @__PURE__ */ d(m, { "data-testid": `sidebar-group-${i.text}`, children: [
        /* @__PURE__ */ d(
          dt,
          {
            onClick: () => Fe(E, oe),
            "data-testid": `sidebar-subitem-${i.text}`,
            "data-active": re ? "true" : "false",
            "aria-expanded": oe,
            sx: {
              borderRadius: "8px",
              mx: 0.5,
              py: 0.75,
              pl: O,
              ...Ee(k, "action.hover", 32)
            },
            children: [
              i.icon ? /* @__PURE__ */ t(ce, { children: i.icon }) : null,
              /* @__PURE__ */ t(
                de,
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
              /* @__PURE__ */ t(cr, { open: oe })
            ]
          }
        ),
        /* @__PURE__ */ t(er, { in: oe, timeout: "auto", unmountOnExit: !0, children: /* @__PURE__ */ t(m, { "data-testid": `sidebar-children-${i.text}`, children: i.subitems.map(
          (ne) => Ke(ne, E, R + 1)
        ) }) })
      ] }, E);
    }
    const C = me(i, o);
    return /* @__PURE__ */ d(
      dt,
      {
        selected: C,
        disabled: !i.path,
        onClick: () => i.path && he(i.path),
        "data-testid": `sidebar-subitem-${i.text}`,
        "data-active": C ? "true" : "false",
        sx: {
          borderRadius: "8px",
          mx: 0.5,
          py: 0.75,
          pl: O,
          ...Ee(C, "action.hover", 32),
          ...rt
        },
        children: [
          i.icon ? /* @__PURE__ */ t(ce, { children: i.icon }) : null,
          /* @__PURE__ */ t(
            de,
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
      E
    );
  }, fe = (i, w, R, E, O, C) => {
    const re = !O, k = /* @__PURE__ */ d(
      ee,
      {
        "aria-label": w,
        disabled: re,
        onClick: O,
        "data-testid": (C == null ? void 0 : C.testId) ?? `sidebar-item-${w}`,
        "data-active": E ? "true" : "false",
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
          color: E ? P : se,
          bgcolor: E ? f : "transparent",
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
          color: E ? P : se,
          bgcolor: E ? f : "transparent",
          borderRadius: E ? "8px" : "50%",
          "&:hover": {
            bgcolor: E ? f : C != null && C.insideGroup ? "action.hover" : te,
            borderRadius: "8px"
          },
          ...ht
        },
        children: [
          R,
          S ? /* @__PURE__ */ t(
            Ne,
            {
              text: w,
              variant: "caption",
              center: !0,
              fontSize: sr
            }
          ) : null
        ]
      }
    );
    return S ? re ? /* @__PURE__ */ t("span", { children: k }, i) : /* @__PURE__ */ t(b.Fragment, { children: k }, i) : /* @__PURE__ */ t(J, { title: w, placement: "right", arrow: !0, children: re ? /* @__PURE__ */ t("span", { children: k }) : k }, i);
  }, Ue = (i) => {
    const w = Ie(i, o), R = me(i, o), E = pt("", i), O = Me(i, E), C = /* @__PURE__ */ d(
      ee,
      {
        "aria-label": i.text,
        "aria-expanded": O,
        onClick: () => Fe(E, O),
        "data-testid": `sidebar-item-${i.text}`,
        "data-active": R ? "true" : "false",
        sx: {
          display: "flex",
          flexDirection: "column",
          gap: S ? 0.25 : 0,
          width: S ? "100%" : 44,
          maxWidth: "100%",
          // 8px padding on all sides of the labeled item container.
          ...S ? { p: 1 } : { py: 0.75 },
          borderRadius: "10px",
          color: R ? P : se,
          bgcolor: R ? f : "transparent",
          // rail-labeled: active AND hover share the highlight. collapsible:
          // original behavior — accent only when active; the outer pill
          // supplies the idle-hover tint, so the button stays transparent.
          "&:hover": S ? { bgcolor: f, color: P } : {
            bgcolor: R ? f : "transparent"
          },
          ...ht
        },
        children: [
          S ? /* @__PURE__ */ t(
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
          S ? /* @__PURE__ */ t(
            Ne,
            {
              text: i.text,
              variant: "caption",
              center: !0,
              fontSize: sr
            }
          ) : null,
          /* @__PURE__ */ t(Go, { open: O, size: Uo })
        ]
      }
    ), re = S ? C : /* @__PURE__ */ t(J, { title: i.text, placement: "right", arrow: !0, children: C });
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
          bgcolor: w ? te : "transparent",
          ...S ? {} : { "&:hover": { bgcolor: te } }
        },
        children: [
          re,
          O ? Ar(i.subitems, i.icon).map(
            ({ sub: k, icon: oe }) => fe(
              k.path,
              k.text,
              oe,
              me(k, o),
              () => he(k.path),
              {
                insideGroup: !0,
                testId: `sidebar-subitem-${k.text}`
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
      children: fe(
        i.text,
        i.text,
        i.icon,
        me(i, o),
        i.path ? () => he(i.path) : void 0
      )
    },
    i.text
  ), nt = (i) => Je(i) ? K ? Ue(i) : He(i) : K ? ot(i) : we(i), it = (i) => /* @__PURE__ */ t(
    ge,
    {
      spacing: 0.5,
      sx: {
        width: "100%",
        alignItems: K ? "center" : "stretch"
      },
      children: i.map(nt)
    }
  ), ve = K ? G : X, $e = K ? "Expand sidebar" : "Collapse sidebar", at = h ? /* @__PURE__ */ d(
    m,
    {
      "data-testid": "sidebar-header",
      sx: {
        minHeight: ar,
        flexShrink: 0,
        display: "flex",
        alignItems: "center",
        bgcolor: Se,
        ...K ? {
          // Toggle on top, the brand logo (its own link) below it
          flexDirection: "column",
          justifyContent: "center",
          gap: 1,
          py: 1.5
        } : {
          height: ar,
          gap: 1.5,
          // Lines the toggle glyph up with the row icons below
          // (12px panel padding + 12px row padding = 24px, minus
          // the button's own 8px)
          px: 2
        }
      },
      children: [
        /* @__PURE__ */ t(J, { title: $e, placement: "right", arrow: !0, children: /* @__PURE__ */ t(
          ee,
          {
            "aria-label": $e,
            "aria-expanded": !K,
            onClick: Be,
            "data-testid": "sidebar-collapse-toggle",
            disableFocusRipple: !0,
            sx: { color: _e, ...ht },
            children: /* @__PURE__ */ t(jo, {})
          }
        ) }),
        c || s ? /* @__PURE__ */ t(
          gt,
          {
            logo: c,
            title: K ? void 0 : s,
            appName: s || "App",
            onClick: l,
            color: N ?? _e,
            testId: "sidebar-header-brand"
          }
        ) : null
      ]
    }
  ) : null, V = !h && c ? /* @__PURE__ */ t(
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
          color: N ?? _e,
          testId: "sidebar-header-brand"
        }
      )
    }
  ) : null, Oe = S ? 0.5 : K ? 1 : 1.5;
  return /* @__PURE__ */ d(
    m,
    {
      component: "nav",
      "aria-label": "Main sidebar",
      "data-testid": "collapsible-sidebar",
      "data-collapsed": K ? "true" : "false",
      "data-labeled": S ? "true" : "false",
      sx: {
        width: ve,
        minWidth: ve,
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
        transition: Ho
      },
      children: [
        at ?? V,
        xe ? /* @__PURE__ */ t(
          m,
          {
            sx: { flexShrink: 0, px: Oe, pt: 1, pb: 1 },
            children: xe
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
              px: Oe,
              pt: Ce && !h ? `${Ce}px` : 1,
              pb: 2
            },
            children: [
              it(e),
              r.length > 0 ? /* @__PURE__ */ d(m, { sx: { mt: "auto", pt: 2 }, children: [
                A ? null : /* @__PURE__ */ t(ze, { sx: { mb: 1, borderColor: "divider" } }),
                it(r)
              ] }) : null
            ]
          }
        ),
        A ? /* @__PURE__ */ t(m, { sx: { flexShrink: 0, px: Oe, pb: 1.5 }, children: /* @__PURE__ */ t(
          m,
          {
            sx: {
              borderTop: `1px solid ${Et}`,
              pt: 1.5
            },
            children: A
          }
        ) }) : null
      ]
    }
  );
}, Bt = "var(--lumora-content-padding, 0px)", ur = `calc(${Bt} * -1)`, Si = ({
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
        mx: ur,
        mt: r ? ur : 0,
        // Space below it, like any other block on the page
        mb: Bt,
        px: c ? Bt : 0,
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
class _ extends Error {
  constructor(r, o, n = null) {
    super(r), this.name = "AuthError", this.code = o, this.originalError = n, this.timestamp = (/* @__PURE__ */ new Date()).toISOString();
  }
}
const D = {
  STORAGE_ACCESS_DENIED: "STORAGE_ACCESS_DENIED",
  TOKEN_NOT_FOUND: "TOKEN_NOT_FOUND",
  TOKEN_INVALID: "TOKEN_INVALID",
  TOKEN_EXPIRED: "TOKEN_EXPIRED",
  LOGOUT_FAILED: "LOGOUT_FAILED",
  UNKNOWN_ERROR: "UNKNOWN_ERROR"
}, H = {
  ACCESS_TOKEN: "lumoraAccessToken",
  REFRESH_TOKEN: "lumoraRefreshToken",
  USER: "lumoraUser"
}, le = {
  ACCESS_TOKEN: "accessToken",
  REFRESH_TOKEN: "refreshToken",
  USER: "user"
}, Vo = () => {
  if (!(typeof window > "u" || !window.localStorage))
    try {
      const e = localStorage.getItem(
        le.ACCESS_TOKEN
      ), r = localStorage.getItem(
        le.REFRESH_TOKEN
      ), o = localStorage.getItem(le.USER);
      e && !localStorage.getItem(H.ACCESS_TOKEN) && localStorage.setItem(H.ACCESS_TOKEN, e), r && !localStorage.getItem(H.REFRESH_TOKEN) && localStorage.setItem(
        H.REFRESH_TOKEN,
        r
      ), o && !localStorage.getItem(H.USER) && localStorage.setItem(H.USER, o), (e || r || o) && (localStorage.removeItem(le.ACCESS_TOKEN), localStorage.removeItem(le.REFRESH_TOKEN), localStorage.removeItem(le.USER));
    } catch (e) {
      console.warn("Failed to migrate legacy localStorage keys:", e);
    }
}, At = (e) => {
  try {
    if (typeof window > "u")
      return console.warn("localStorage access attempted on server side"), null;
    if (!window.localStorage)
      throw new _(
        "localStorage is not available",
        D.STORAGE_ACCESS_DENIED
      );
    return window.localStorage.getItem(e);
  } catch (r) {
    throw r.name === "QuotaExceededError" ? (console.error("Storage quota exceeded"), new _(
      "Storage quota exceeded. Please clear browser data.",
      D.STORAGE_ACCESS_DENIED,
      r
    )) : r.name === "SecurityError" ? (console.error(
      "localStorage access denied (private browsing or security settings)"
    ), new _(
      "Access to localStorage is denied. Please check browser settings.",
      D.STORAGE_ACCESS_DENIED,
      r
    )) : (console.error(
      "Unexpected error accessing localStorage:",
      r.name
    ), new _(
      "Failed to access storage",
      D.STORAGE_ACCESS_DENIED,
      r
    ));
  }
}, Nt = (e, r) => {
  try {
    if (typeof window > "u")
      return console.warn("localStorage write attempted on server side"), !1;
    if (!window.localStorage)
      throw new _(
        "localStorage is not available",
        D.STORAGE_ACCESS_DENIED
      );
    return window.localStorage.setItem(e, r), !0;
  } catch (o) {
    throw o.name === "QuotaExceededError" ? (console.error("Storage quota exceeded"), new _(
      "Storage quota exceeded. Please clear browser data.",
      D.STORAGE_ACCESS_DENIED,
      o
    )) : o.name === "SecurityError" ? (console.error(
      "localStorage write denied (private browsing or security settings)"
    ), new _(
      "Access to localStorage is denied. Please check browser settings.",
      D.STORAGE_ACCESS_DENIED,
      o
    )) : (console.error(
      "Unexpected error writing to localStorage:",
      o.name
    ), new _(
      "Failed to write to storage",
      D.STORAGE_ACCESS_DENIED,
      o
    ));
  }
}, Lr = (e) => {
  try {
    return typeof window > "u" ? (console.warn("localStorage removal attempted on server side"), !1) : window.localStorage ? (window.localStorage.removeItem(e), !0) : (console.warn("localStorage is not available"), !1);
  } catch (r) {
    return r.name !== "SecurityError" && console.warn(`Could not remove localStorage key "${e}"`), !1;
  }
}, Ze = () => {
  try {
    Vo();
    const e = At(H.ACCESS_TOKEN), r = At(H.REFRESH_TOKEN), o = At(H.USER);
    let n = null;
    if (o)
      try {
        n = JSON.parse(o);
      } catch {
        o && o !== "null" && o !== "undefined" && console.warn(
          "Invalid user data in localStorage, clearing:",
          o.substring(0, 50)
        ), Lr(H.USER);
      }
    return {
      accessToken: e,
      refreshToken: r,
      user: n
    };
  } catch (e) {
    throw e instanceof _ ? e : new _(
      "Failed to retrieve authentication tokens",
      D.UNKNOWN_ERROR,
      e
    );
  }
}, Yo = () => {
  try {
    const { accessToken: e, refreshToken: r } = Ze();
    return !(e || r) ? {
      isAuthenticated: !1,
      error: new _(
        "No authentication tokens found",
        D.TOKEN_NOT_FOUND
      )
    } : {
      isAuthenticated: !0,
      error: null
    };
  } catch (e) {
    return console.error("Authentication check failed:", e), {
      isAuthenticated: !1,
      error: e instanceof _ ? e : new _(
        "Authentication check failed",
        D.UNKNOWN_ERROR,
        e
      )
    };
  }
}, zr = (e, r, o = null) => {
  try {
    if (!e && !r)
      throw new _(
        "At least one token must be provided",
        D.TOKEN_INVALID
      );
    return e && Nt(H.ACCESS_TOKEN, e), r && Nt(H.REFRESH_TOKEN, r), o && Nt(H.USER, JSON.stringify(o)), {
      success: !0,
      error: null
    };
  } catch (n) {
    return console.error("Failed to store authentication tokens:", n), {
      success: !1,
      error: n instanceof _ ? n : new _(
        "Failed to store tokens",
        D.UNKNOWN_ERROR,
        n
      )
    };
  }
}, Qe = () => {
  try {
    return [
      H.ACCESS_TOKEN,
      H.REFRESH_TOKEN,
      H.USER,
      // Also clear legacy keys for complete cleanup
      le.ACCESS_TOKEN,
      le.REFRESH_TOKEN,
      le.USER
    ].map((n) => Lr(n)).every((n) => n) || console.warn("Some tokens could not be removed from localStorage"), {
      success: !0,
      error: null
    };
  } catch (e) {
    return console.error("Failed to clear authentication tokens:", e), {
      success: !1,
      error: e instanceof _ ? e : new _(
        "Failed to clear tokens",
        D.LOGOUT_FAILED,
        e
      )
    };
  }
}, qo = () => {
  try {
    const { user: e } = Ze();
    return {
      user: e,
      error: null
    };
  } catch (e) {
    return console.error("Failed to get current user:", e), {
      user: null,
      error: e instanceof _ ? e : new _(
        "Failed to retrieve user data",
        D.UNKNOWN_ERROR,
        e
      )
    };
  }
}, Ei = (e) => {
  if (!(e instanceof _))
    return "An unexpected error occurred. Please try again.";
  switch (e.code) {
    case D.STORAGE_ACCESS_DENIED:
      return "Unable to access browser storage. Please check your browser settings and disable private browsing if enabled.";
    case D.TOKEN_NOT_FOUND:
      return "You are not logged in. Please sign in to continue.";
    case D.TOKEN_INVALID:
      return "Your session is invalid. Please sign in again.";
    case D.TOKEN_EXPIRED:
      return "Your session has expired. Please sign in again.";
    case D.LOGOUT_FAILED:
      return "Failed to log out properly. Please clear your browser cache and try again.";
    case D.UNKNOWN_ERROR:
    default:
      return "An unexpected error occurred. Please try again or contact support if the problem persists.";
  }
}, Ft = (e, r = "Unknown") => {
  const o = {
    context: r,
    message: e.message,
    code: e instanceof _ ? e.code : "UNKNOWN",
    timestamp: e instanceof _ ? e.timestamp : (/* @__PURE__ */ new Date()).toISOString(),
    stack: e.stack
  };
  e instanceof _ && e.originalError && (o.originalError = {
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
      const { accessToken: l } = Ze();
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
      const { refreshToken: N } = Ze();
      if (!N) {
        const x = new Error(
          "No refresh token available for token refresh"
        );
        return Ft(x, "AxiosClient - Token Refresh"), Qe(), typeof window < "u" && (window.location.href = "/login"), Promise.reject(s);
      }
      if (o && n)
        return new Promise((x, v) => {
          a.push({ resolve: x, reject: v });
        }).then((x) => {
          const {
            accessToken: v,
            refreshToken: g
          } = x;
          if (l.headers && (l.headers.Authorization = `Bearer ${v}`), u.includes("/auth/logout"))
            try {
              if (typeof l.data == "string") {
                const I = JSON.parse(
                  l.data || "{}"
                );
                I.refresh_token = g, l.data = JSON.stringify(I);
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
      o = !0, n = nr.post(
        `${e}/auth/refresh`,
        {
          refresh_token: N
        }
      );
      try {
        const x = await n, { accessToken: v, refreshToken: g } = x.data;
        if (zr(v, g, null), c(null, {
          accessToken: v,
          refreshToken: g
        }), l.headers && (l.headers.Authorization = `Bearer ${v}`), u.includes("/auth/logout"))
          try {
            if (typeof l.data == "string") {
              const I = JSON.parse(
                l.data || "{}"
              );
              I.refresh_token = g, l.data = JSON.stringify(I);
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
        return Ft(
          x,
          "AxiosClient - Token Refresh Failed"
        ), c(x), Qe(), typeof window < "u" && (window.location.href = "/login"), Promise.reject(x);
      } finally {
        o = !1, n = null;
      }
    }
  ), r;
}, Y = {
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
}, q = {
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
}, Br = Ir(), Q = Br.typography.pxToRem, Zo = (e) => {
  const r = e === "dark", o = [...Br.shadows];
  return o[1] = r ? "hsla(220, 30%, 5%, 0.7) 0px 4px 16px 0px, hsla(220, 25%, 10%, 0.8) 0px 8px 16px -5px" : "hsla(220, 30%, 5%, 0.07) 0px 4px 16px 0px, hsla(220, 25%, 10%, 0.07) 0px 8px 16px -5px", {
    palette: {
      mode: e,
      primary: {
        light: r ? Y[300] : Y[200],
        main: Y[400],
        dark: Y[700],
        contrastText: Y[50]
      },
      info: r ? {
        light: Y[500],
        main: Y[700],
        dark: Y[900],
        contrastText: Y[300]
      } : {
        light: Y[100],
        main: Y[300],
        dark: Y[600],
        contrastText: q[50]
      },
      warning: r ? { light: We[400], main: We[500], dark: We[700] } : { light: We[300], main: We[400], dark: We[800] },
      error: r ? { light: ke[400], main: ke[500], dark: ke[700] } : { light: ke[300], main: ke[400], dark: ke[800] },
      success: r ? { light: De[400], main: De[500], dark: De[700] } : { light: De[300], main: De[400], dark: De[800] },
      grey: q,
      divider: r ? Ae(q[700], 0.6) : Ae(q[300], 0.4),
      background: r ? { default: q[900], paper: "hsl(220, 30%, 7%)" } : { default: "hsl(0, 0%, 99%)", paper: "hsl(220, 35%, 97%)" },
      text: r ? { primary: "hsl(0, 0%, 100%)", secondary: q[400] } : { primary: q[800], secondary: q[600] },
      action: r ? {
        hover: Ae(q[600], 0.2),
        selected: Ae(q[600], 0.3)
      } : {
        hover: Ae(q[200], 0.2),
        selected: Ae(q[200], 0.3)
      }
    },
    typography: {
      fontFamily: "Inter, sans-serif",
      h1: {
        fontSize: Q(48),
        fontWeight: 600,
        lineHeight: 1.2,
        letterSpacing: -0.5
      },
      h2: { fontSize: Q(36), fontWeight: 600, lineHeight: 1.2 },
      h3: { fontSize: Q(30), lineHeight: 1.2 },
      h4: { fontSize: Q(24), fontWeight: 600, lineHeight: 1.5 },
      h5: { fontSize: Q(20), fontWeight: 600 },
      h6: { fontSize: Q(18), fontWeight: 600 },
      subtitle1: { fontSize: Q(18) },
      subtitle2: { fontSize: Q(14), fontWeight: 500 },
      body1: { fontSize: Q(14) },
      body2: { fontSize: Q(14), fontWeight: 400 },
      caption: { fontSize: Q(12), fontWeight: 400 }
    },
    shape: {
      borderRadius: 8
    },
    shadows: o
  };
}, Qo = async (e, r) => {
  const { accessToken: o, refreshToken: n } = Ze();
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
      Ft(a, "TokenValidator - Refresh Failed");
    }
  return Qe(), r ? r() : window.location.href = "/login", !1;
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
}), hr = ({
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
          ae,
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
  ) : e === "sidebar-icon" ? /* @__PURE__ */ t(J, { title: l, placement: "right", arrow: !0, children: /* @__PURE__ */ t(
    ee,
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
  ) }) : /* @__PURE__ */ t(J, { title: l, placement: "left", children: /* @__PURE__ */ t(
    ee,
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
}) => a ? /* @__PURE__ */ t(So, { variant: "outlined", sx: { m: 1.5, flexShrink: 0 }, children: /* @__PURE__ */ d(Eo, { children: [
  /* @__PURE__ */ t(wo, { fontSize: "small" }),
  /* @__PURE__ */ t(ae, { gutterBottom: !0, sx: { fontWeight: 600 }, children: e }),
  /* @__PURE__ */ t(
    ae,
    {
      variant: "body2",
      sx: { mb: 2, color: "text.secondary" },
      children: r
    }
  ),
  /* @__PURE__ */ t(
    Cr,
    {
      variant: "contained",
      size: "small",
      fullWidth: !0,
      onClick: n,
      children: o
    }
  )
] }) }) : null, Ve = 24, en = 720, tn = 1140, rn = 1250, on = ({
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
  b.useEffect(() => {
    if (!e || !u)
      return;
    const v = (g) => {
      g.key === "Escape" && u();
    };
    return window.addEventListener("keydown", v), () => window.removeEventListener("keydown", v);
  }, [e, u]);
  const p = o === "docked", N = Ve + s;
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
    bottom: N,
    ...n === "left" ? { left: c + Ve } : { right: Ve },
    width: a,
    maxWidth: `calc(100vw - ${Ve * 2}px)`,
    height: `min(${en}px, calc(100vh - ${N + Ve}px))`,
    borderRadius: "12px"
  };
  const x = /* @__PURE__ */ t(
    Mt,
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
  return p ? /* @__PURE__ */ t(yo, { direction: "left", in: e, mountOnEnter: !0, children: x }) : /* @__PURE__ */ t(
    vo,
    {
      in: e,
      mountOnEnter: !0,
      style: {
        transformOrigin: n === "left" ? "bottom left" : "bottom right"
      },
      children: x
    }
  );
}, nn = 180, fr = 250, an = "#01584F", sn = ({
  text: e,
  testId: r
}) => {
  const o = b.useRef(null), [n, a] = b.useState(!1), c = b.useCallback(() => {
    const s = o.current;
    s && a(s.scrollWidth > s.clientWidth + 0.5);
  }, []);
  return b.useLayoutEffect(() => {
    c();
  }, [c, e]), b.useEffect(() => {
    const s = o.current;
    if (!s)
      return;
    const l = new ResizeObserver(() => c());
    return l.observe(s), () => l.disconnect();
  }, [c]), /* @__PURE__ */ t(
    J,
    {
      title: e,
      placement: "right",
      arrow: !0,
      enterDelay: 400,
      disableHoverListener: !n,
      disableFocusListener: !n,
      disableTouchListener: !n,
      children: /* @__PURE__ */ t(
        ae,
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
}, Mr = ({ link: e }) => /* @__PURE__ */ d(ge, { alignItems: "center", spacing: 1, sx: { width: "100%" }, children: [
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
] }), Hr = (e, r, o) => o ? e : /* @__PURE__ */ t(J, { title: r, placement: "right", arrow: !0, children: e }), ln = ({
  link: e,
  activePath: r,
  onLinkClick: o,
  accentColor: n,
  isSecondary: a,
  surfaceBackgroundColor: c,
  railShowTitles: s
}) => {
  const l = Rr(), [h, u] = b.useState(null), [p, N] = b.useState(!1), f = b.useRef(
    null
  ), x = b.useRef(null), v = b.useRef(null), g = b.useRef(!1), I = b.useRef(!1), z = b.useId(), B = () => {
    f.current && (clearTimeout(f.current), f.current = null);
  }, y = () => {
    B(), f.current = setTimeout(() => {
      N(!1), f.current = null;
    }, nn);
  }, F = () => {
    B(), N(!0);
  };
  b.useEffect(() => {
    if (!p)
      return;
    const A = (M) => {
      var L;
      M.key === "Escape" && (N(!1), (L = v.current) == null || L.focus());
    };
    return document.addEventListener("keydown", A), () => document.removeEventListener("keydown", A);
  }, [p]), b.useEffect(() => {
    if (!p || !I.current)
      return;
    const A = globalThis.requestAnimationFrame(() => {
      var L;
      const M = (L = x.current) == null ? void 0 : L.querySelector(
        '[role="menuitem"]'
      );
      M == null || M.focus(), I.current = !1;
    });
    return () => cancelAnimationFrame(A);
  }, [p]);
  const X = Ie(e, r), { activeBg: G, sx: S } = Fr(
    a,
    n,
    X,
    s
  ), Ce = /* @__PURE__ */ t(
    ee,
    {
      ref: v,
      component: e.path ? "a" : "button",
      href: e.path || void 0,
      "aria-label": e.text,
      onFocus: () => {
        g.current || F();
      },
      onBlur: (A) => {
        var L;
        const M = A.relatedTarget;
        M && ((L = x.current) != null && L.contains(M)) || y();
      },
      onKeyDown: (A) => {
        A.key === "ArrowDown" && (A.preventDefault(), I.current = !0, F());
      },
      onClick: (A) => {
        A.preventDefault(), A.stopPropagation(), e.path && (o == null || o(e.path));
      },
      "aria-haspopup": "menu",
      "aria-expanded": p,
      "aria-controls": p ? z : void 0,
      "data-testid": `rail-submenu-trigger-${e.text}`,
      sx: S,
      children: s ? /* @__PURE__ */ t(Mr, { link: e }) : e.icon
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
              g.current = !0, F();
            },
            onMouseLeave: () => {
              g.current = !1, y();
            },
            children: Hr(Ce, e.text, s)
          }
        ),
        /* @__PURE__ */ t(
          Co,
          {
            open: p && !!h,
            anchorEl: h,
            placement: "right-start",
            modifiers: [{ name: "offset", options: { offset: [8, 0] } }],
            sx: { zIndex: (A) => A.zIndex.modal },
            children: /* @__PURE__ */ t(
              Mt,
              {
                ref: x,
                elevation: 0,
                onMouseEnter: B,
                onMouseLeave: y,
                "data-testid": `rail-submenu-panel-${e.text}`,
                sx: {
                  bgcolor: c,
                  backgroundImage: "none",
                  borderRadius: "4px",
                  border: "1px solid",
                  borderColor: "divider",
                  boxShadow: l.shadows[8],
                  maxWidth: fr,
                  minWidth: 0,
                  py: 0.5,
                  boxSizing: "border-box"
                },
                children: /* @__PURE__ */ t(
                  Io,
                  {
                    id: z,
                    dense: !0,
                    autoFocus: !1,
                    role: "menu",
                    sx: {
                      bgcolor: "transparent",
                      py: 0,
                      maxWidth: fr
                    },
                    children: xe(e.subitems, e.text, 0)
                  }
                )
              }
            )
          }
        )
      ]
    }
  );
  function xe(A, M, L) {
    return A.flatMap((W) => {
      const ue = pt(M, W);
      return Je(W) ? [
        /* @__PURE__ */ t(
          Ro,
          {
            disableSticky: !0,
            title: W.text,
            sx: {
              bgcolor: "transparent",
              lineHeight: "28px",
              pl: 2 + L * 1.5,
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
          ue
        ),
        ...xe(W.subitems, ue, L + 1)
      ] : [
        /* @__PURE__ */ d(
          qe,
          {
            role: "menuitem",
            title: W.text,
            disabled: !W.path,
            selected: me(W, r),
            onClick: (be) => {
              be.preventDefault(), W.path && (o == null || o(W.path)), N(!1);
            },
            sx: {
              borderRadius: "4px",
              mx: 0.5,
              my: 0.125,
              pl: 2 + L * 1.5,
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
                bgcolor: G,
                color: "#ffffff",
                "&:hover": {
                  bgcolor: G
                }
              },
              "&.Mui-focusVisible": {
                bgcolor: "action.focus"
              }
            },
            children: [
              W.icon ? /* @__PURE__ */ t(ce, { children: W.icon }) : null,
              /* @__PURE__ */ t(
                de,
                {
                  primary: W.text,
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
  return Hr(
    /* @__PURE__ */ t(
      ee,
      {
        component: e.path ? "a" : "button",
        href: e.path || void 0,
        "aria-label": e.text,
        onClick: (h) => {
          h.preventDefault(), h.stopPropagation(), e.path && (o == null || o(e.path));
        },
        disabled: !e.path,
        sx: l,
        children: c ? /* @__PURE__ */ t(Mr, { link: e }) : e.icon
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
    children: /* @__PURE__ */ t(ze, { sx: { width: "60%", borderColor: "divider" } })
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
    children: /* @__PURE__ */ t(ze, { sx: { width: "60%", borderColor: "divider" } })
  }
), pr = (e, r) => e.map((o, n) => /* @__PURE__ */ d(b.Fragment, { children: [
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
  const l = (u, p) => Je(u) ? /* @__PURE__ */ t(
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
    ge,
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
        pr(e, (u) => l(u, !1)),
        r.length > 0 ? /* @__PURE__ */ d(et, { children: [
          /* @__PURE__ */ t(un, {}),
          /* @__PURE__ */ t(m, { sx: { mt: "auto", pb: 2 }, children: /* @__PURE__ */ t(ge, { gap: h, alignItems: "center", children: pr(
            r,
            (u) => l(u, !0)
          ) }) })
        ] }) : null
      ]
    }
  );
}, fn = (e) => e ? e.charAt(0).toUpperCase() + e.slice(1).toLowerCase() : "User", pn = (e) => e.split(/\s+/).filter(Boolean).slice(0, 2).map((r) => r.charAt(0).toUpperCase()).join(""), mr = {
  overflow: "hidden",
  textOverflow: "ellipsis",
  whiteSpace: "nowrap",
  maxWidth: "100%"
}, gr = ({ count: e }) => e ? /* @__PURE__ */ t(
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
) : null, Kr = ({ name: e, avatar: r, color: o, size: n = 36 }) => /* @__PURE__ */ t(
  Oo,
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
), Ur = ({ name: e, role: r, avatar: o, avatarColor: n, showText: a }) => /* @__PURE__ */ d(et, { children: [
  /* @__PURE__ */ t(Kr, { name: e, avatar: o, color: n }),
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
          ae,
          {
            variant: "body2",
            sx: { ...mr, fontWeight: 600, color: "inherit" },
            children: e
          }
        ),
        /* @__PURE__ */ t(
          ae,
          {
            variant: "caption",
            sx: { ...mr, opacity: 0.8, color: "inherit" },
            children: fn(r)
          }
        )
      ]
    }
  )
] }), xr = {
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
}, $r = ({
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
  menuItems: N = [],
  showSettings: f,
  onSettingsClick: x,
  showThemeToggler: v,
  theme: g,
  onThemeToggle: I,
  onLogout: z
}) => {
  const B = (y) => () => {
    r(), y == null || y();
  };
  return /* @__PURE__ */ d(
    Ao,
    {
      anchorEl: e,
      open: !!e,
      onClose: r,
      anchorOrigin: xr[o].anchor,
      transformOrigin: xr[o].transform,
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
          ge,
          {
            direction: "row",
            spacing: 1.25,
            sx: { px: 1.5, py: 1, alignItems: "center" },
            children: /* @__PURE__ */ t(
              Ur,
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
        /* @__PURE__ */ t(ze, {}),
        c && /* @__PURE__ */ d(qe, { onClick: B(l), children: [
          /* @__PURE__ */ t(ce, { children: /* @__PURE__ */ t(Or, { fontSize: "small" }) }),
          /* @__PURE__ */ t(de, { children: "Notifications" }),
          /* @__PURE__ */ t(gr, { count: s })
        ] }),
        N.map((y) => /* @__PURE__ */ d(qe, { onClick: B(y.onClick), children: [
          y.icon && /* @__PURE__ */ t(ce, { children: y.icon }),
          /* @__PURE__ */ t(de, { inset: !y.icon, children: y.label }),
          /* @__PURE__ */ t(gr, { count: y.badge })
        ] }, y.key)),
        f && /* @__PURE__ */ d(qe, { onClick: B(x), children: [
          /* @__PURE__ */ t(ce, { children: /* @__PURE__ */ t(_o, { fontSize: "small" }) }),
          /* @__PURE__ */ t(de, { children: "Settings" })
        ] }),
        v && [
          /* @__PURE__ */ t(ze, {}, "theme-divider"),
          /* @__PURE__ */ d(m, { sx: { px: 1.5, py: 1 }, children: [
            /* @__PURE__ */ t(
              ae,
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
              No,
              {
                exclusive: !0,
                fullWidth: !0,
                size: "small",
                "aria-label": "Theme",
                value: g,
                onChange: (y, F) => F && F !== g && (I == null ? void 0 : I()),
                disabled: !I,
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
        /* @__PURE__ */ t(ze, {}),
        /* @__PURE__ */ d(
          qe,
          {
            onClick: B(z),
            sx: {
              color: g === "dark" ? "hsl(0, 90%, 65%)" : "error.main"
            },
            children: [
              /* @__PURE__ */ t(ce, { sx: { color: "inherit" }, children: /* @__PURE__ */ t(To, { fontSize: "small" }) }),
              /* @__PURE__ */ t(de, { children: "Log out" })
            ]
          }
        )
      ]
    }
  );
}, Pr = 64, mn = 2, Ye = ({
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
        ae,
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
  activeBackground: N,
  pinnedLinks: f = [],
  activePath: x,
  onLinkClick: v,
  ...g
}) => {
  const I = f.filter((S) => S.path).slice(0, mn), [z, B] = b.useState(
    null
  ), { userName: y = "User", userAvatar: F, avatarColor: X } = g, G = { color: u, activeColor: p, activeBackground: N };
  return /* @__PURE__ */ d(
    Mt,
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
        height: `calc(${Pr}px + env(safe-area-inset-bottom, 0px))`,
        pb: "env(safe-area-inset-bottom, 0px)",
        bgcolor: h,
        borderTop: "1px solid",
        borderColor: "divider"
      },
      children: [
        e && /* @__PURE__ */ t(
          Ye,
          {
            label: "Menu",
            icon: /* @__PURE__ */ t(Tr, {}),
            onClick: e,
            active: r,
            haspopup: "dialog",
            testId: "mobile-nav-menu",
            ...G
          }
        ),
        I.map((S) => /* @__PURE__ */ t(
          Ye,
          {
            label: S.text,
            icon: S.icon,
            onClick: () => v == null ? void 0 : v(S.path),
            active: Ie(S, x),
            isPage: !0,
            testId: `mobile-nav-link-${S.text}`,
            ...G
          },
          S.path
        )),
        a && /* @__PURE__ */ t(
          Ye,
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
            ...G
          }
        ),
        o && /* @__PURE__ */ t(
          Ye,
          {
            label: "Search",
            icon: /* @__PURE__ */ t(_r, {}),
            onClick: o,
            active: n,
            haspopup: "dialog",
            testId: "mobile-nav-search",
            ...G
          }
        ),
        l && /* @__PURE__ */ d(et, { children: [
          /* @__PURE__ */ t(
            Ye,
            {
              label: "Account",
              ariaLabel: `Account menu for ${y}`,
              icon: /* @__PURE__ */ t(
                Kr,
                {
                  name: y,
                  avatar: F,
                  color: X,
                  size: 26
                }
              ),
              onClick: (S) => B(S.currentTarget),
              active: !!z,
              haspopup: "menu",
              testId: "mobile-nav-account",
              ...G
            }
          ),
          /* @__PURE__ */ t(
            $r,
            {
              anchorEl: z,
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
}, xn = ({
  open: e,
  onClose: r,
  search: o
}) => /* @__PURE__ */ t(
  Do,
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
      ge,
      {
        direction: "row",
        spacing: 1,
        "data-testid": "mobile-search-sheet",
        sx: { alignItems: "center" },
        children: [
          /* @__PURE__ */ t(m, { sx: { flex: "1 1 auto", minWidth: 0 }, children: o }),
          /* @__PURE__ */ t(
            Cr,
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
  Wo,
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
    children: /* @__PURE__ */ d(ko, { sx: { minHeight: `${e}px !important`, gap: 1, px: 1 }, children: [
      r && /* @__PURE__ */ t(
        ee,
        {
          "aria-label": "Open navigation menu",
          onClick: r,
          sx: { color: s },
          children: /* @__PURE__ */ t(Tr, {})
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
), Gr = ({
  count: e,
  onClick: r,
  color: o,
  hoverColor: n,
  tooltipPlacement: a,
  testId: c
}) => {
  const s = e ? `Notifications, ${e} unread` : "Notifications";
  return /* @__PURE__ */ t(J, { title: s, placement: a, arrow: !0, children: /* @__PURE__ */ t(
    ee,
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
        Lo,
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
          children: /* @__PURE__ */ t(Or, {})
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
  var z;
  const {
    avatarColor: c,
    showNotifications: s,
    notificationCount: l,
    onNotificationsClick: h,
    userName: u = "User",
    userRole: p,
    userAvatar: N
  } = a, f = b.useRef(null), [x, v] = b.useState(
    null
  ), g = !!x;
  if (!s && !n)
    return null;
  const I = {
    "&.Mui-focusVisible": { outline: "2px solid", outlineColor: r }
  };
  return /* @__PURE__ */ d(et, { children: [
    /* @__PURE__ */ d(
      ge,
      {
        ref: f,
        direction: e ? "column" : "row",
        spacing: 0.5,
        "data-testid": "sidebar-footer",
        sx: { width: "100%", alignItems: "center" },
        children: [
          n && /* @__PURE__ */ t(
            J,
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
                  "aria-expanded": g,
                  "data-testid": "sidebar-user",
                  sx: {
                    flex: e ? "0 0 auto" : "1 1 auto",
                    minWidth: 0,
                    gap: 1.25,
                    p: e ? 0.5 : "6px 8px",
                    justifyContent: "flex-start",
                    borderRadius: "8px",
                    color: r,
                    bgcolor: g ? o : "transparent",
                    "&:hover": { bgcolor: o },
                    ...I
                  },
                  children: /* @__PURE__ */ t(
                    Ur,
                    {
                      name: u,
                      role: p,
                      avatar: N,
                      avatarColor: c,
                      showText: !e
                    }
                  )
                }
              )
            }
          ),
          s && /* @__PURE__ */ t(
            Gr,
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
      $r,
      {
        anchorEl: x,
        onClose: () => v(null),
        placement: e ? "beside" : "above",
        width: e || (z = f.current) == null ? void 0 : z.clientWidth,
        ...a
      }
    )
  ] });
}, En = 'input, textarea, [contenteditable="true"]', br = (e) => {
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
  const l = b.useRef(null), [h, u] = b.useState(null);
  return b.useEffect(() => {
    r === "full" && n && (br(l.current), a == null || a());
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
        /* @__PURE__ */ t(J, { title: "Search", placement: "right", arrow: !0, children: /* @__PURE__ */ t(
          ee,
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
            children: /* @__PURE__ */ t(_r, {})
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
              onEntered: (p) => br(p)
            },
            slotProps: { paper: { sx: { ml: 1, p: 1.5, width: 360 } } },
            children: e
          }
        )
      ]
    }
  );
}, vn = 100, Sr = 80, kt = 56, yn = 300, Er = 288, wr = 72, vr = "lumora:sidebar-collapsed", yr = "width 200ms ease, left 200ms ease", Rn = 68, In = { xs: 2, md: 5 }, Cn = () => typeof navigator < "u" && /Mac|iPhone|iPad/.test(navigator.platform || navigator.userAgent), Tn = (e, r) => {
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
  searchComponent: N,
  brandColor: f,
  contentPadding: x = In,
  userMenuItems: v,
  sidebarBackgroundColor: g,
  sidebarHeaderBackgroundColor: I,
  groupAccentColor: z,
  activeSidebarForegroundColor: B,
  enableRefreshToken: y = !1,
  activePath: F,
  onLinkClick: X,
  showProfile: G = !0,
  userName: S,
  userRole: Ce,
  userAvatar: xe,
  onLogout: A,
  showSettings: M = !0,
  onSettingsClick: L,
  showNotifications: W = !0,
  notificationCount: ue = 0,
  NotificationSidebarContent: be,
  onVerify: K,
  alertProps: $,
  style: bt,
  sidebarStyles: P,
  contentStyles: tt,
  accentColor: St,
  sidebarAccentColor: te,
  sidebarForegroundColor: Te,
  contentBackgroundColor: se,
  theme: Se = "light",
  showThemeToggler: _e = !1,
  onThemeToggle: Et,
  GlobalChatSidebar: he,
  useChatSidebar: Be,
  chatPanelMode: Fe = "docked",
  chatPanelPosition: Me = "right",
  chatPanelWidth: Ee = 420,
  onChatClose: rt,
  showAssistant: we = !1,
  assistantPlacement: He = "sidebar",
  assistantShortcut: Ke = "j",
  onAssistantClick: fe,
  assistantActive: Ue = !1,
  assistantBusy: ot = !1,
  customNavbar: nt,
  customNavbarProps: it,
  redirectToLogin: ve,
  apiBaseUrl: $e
}) => {
  const at = fo(), V = po(at.breakpoints.down("md")), Oe = rr(
    () => Ir(Zo(Se)),
    [Se]
  ), i = Se === "dark", w = St ?? "#01584f", R = te ?? w, E = se ?? (i ? "hsl(220, 35%, 9%)" : "#f2f9fc"), O = s === "collapsible", C = s === "rail-labeled", re = O || C, k = g ?? (i ? "hsl(220, 30%, 7%)" : "#ffffff"), oe = I ?? k, ne = Te ?? (i ? "#ffffff" : R), st = z ?? zt(ne), lt = I ? Lt(oe) : ne, Ht = (T) => /* @__PURE__ */ t(
    Z,
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
  ), wt = f ?? lt, Kt = u ?? Ht(wt), jr = u ?? Ht(f ?? ne), [Pe, Xr] = Re(
    () => Wr(vr) ?? !1
  ), Ut = (T) => {
    Xr(T), kr(vr, T);
  }, [Vr, $t] = Re(!1), Yr = ho(() => $t(!1), []);
  let ie = 0;
  a && !V && (C ? ie = Sr : O ? ie = Pe ? wr : Er : ie = vn);
  const [Pt, ye] = Re(!1), [Gt, vt] = Re(!1), j = V && l === "bottom-bar", jt = `calc(${Pr}px + env(safe-area-inset-bottom, 0px))`, [qr, yt] = Re(!1), [Jr, Zr] = Re(!0), [Qr, eo] = Re(!1), Rt = Be == null ? void 0 : Be(), Xt = (Rt == null ? void 0 : Rt.isOpen) ?? !1, Vt = Fe === "floating" ? "floating" : "docked", to = Vt === "docked" && Xt && he && !V ? Ee : 0, ct = Ot(K), Yt = Ot(!1), qt = rr(
    () => Jo($e),
    [$e]
  );
  ut(() => {
    ct.current = K;
  }, [K]);
  const It = Ot(fe);
  It.current = fe;
  const Ge = we && Ke ? Ke.toLowerCase() : null;
  ut(() => {
    if (!Ge)
      return;
    const T = (U) => {
      (U.metaKey || U.ctrlKey) && !U.altKey && !U.shiftKey && U.key.toLowerCase() === Ge && It.current && (U.preventDefault(), It.current());
    };
    return window.addEventListener("keydown", T), () => window.removeEventListener("keydown", T);
  }, [Ge]);
  const ro = (T) => {
    const U = A(T);
    U instanceof Promise && U.catch((pe) => {
      console.error("Error in logout handler:", pe);
    });
  };
  if (ut(() => {
    (() => {
      var U;
      try {
        const { isAuthenticated: pe } = Yo();
        if (!pe) {
          console.log("No session found, redirecting to login"), Qe(), ve();
          return;
        }
        if (!Yt.current) {
          const { user: Xe, error: _t } = qo();
          if (Xe && !_t) {
            const ao = {
              name: Xe.name || "",
              email: Xe.email || "",
              profilePicture: Xe.profilePicture || "",
              role: Xe.role || ""
            };
            Yt.current = !0, (U = ct.current) == null || U.call(ct, ao);
          } else
            _t && console.error("Error getting user data:", _t);
        }
        eo(!0);
      } catch (pe) {
        console.error("Error checking session:", pe), Qe(), ve();
      } finally {
        Zr(!1);
      }
    })();
  }, [ve]), ut(() => {
    y && Qo(qt, ve);
  }, [y, qt]), Jr)
    return /* @__PURE__ */ t(tr, { theme: Oe, children: /* @__PURE__ */ d(
      Z,
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
            mo,
            {
              size: 60,
              thickness: 4,
              sx: { color: w }
            }
          ),
          /* @__PURE__ */ t(Z, { sx: { mt: 2, color: "text.secondary" }, children: "Checking session..." })
        ]
      }
    ) });
  if (!Qr)
    return null;
  const je = N ?? (nt ? /* @__PURE__ */ t(nt, { ...it }) : null), Jt = be && (() => {
    ye(!1), vt(!1), yt(!0);
  }), Zt = {
    avatarColor: R,
    menuItems: v,
    showNotifications: W,
    notificationCount: ue,
    onNotificationsClick: Jt,
    showProfile: G,
    userName: S,
    userRole: Ce,
    userAvatar: xe,
    showSettings: M,
    onSettingsClick: L,
    showThemeToggler: _e,
    theme: Se,
    onThemeToggle: Et,
    onLogout: ro
  }, Ct = (T) => /* @__PURE__ */ t(
    Sn,
    {
      ...Zt,
      compact: T,
      color: ne,
      hoverColor: st
    }
  ), Qt = Ge ? [Cn() ? "⌘" : "Ctrl", Ge.toUpperCase()] : void 0, oo = (T) => we && He === "sidebar" ? /* @__PURE__ */ t(
    hr,
    {
      variant: T ? "sidebar-icon" : "sidebar",
      onClick: fe,
      active: Ue,
      busy: ot,
      shortcutKeys: Qt,
      accentColor: ne
    }
  ) : null, no = (T) => je ? /* @__PURE__ */ t(
    wn,
    {
      search: je,
      mode: T,
      onExpand: () => {
        Ut(!1), $t(!0);
      },
      autoFocus: Vr,
      onAutoFocused: Yr,
      color: ne,
      hoverColor: st
    }
  ) : null, Tt = (T) => {
    const U = oo(T !== "full"), pe = no(T);
    return U || pe ? /* @__PURE__ */ d(
      bo,
      {
        spacing: 1.5,
        sx: { alignItems: T === "full" ? "stretch" : "center" },
        children: [
          U,
          pe
        ]
      }
    ) : void 0;
  }, io = Tn(
    x,
    at
  );
  return /* @__PURE__ */ t(tr, { theme: Oe, children: /* @__PURE__ */ d(
    Z,
    {
      sx: {
        display: "flex",
        minHeight: "100vh",
        ...bt
      },
      children: [
        /* @__PURE__ */ t(go, {}),
        V && /* @__PURE__ */ t(
          bn,
          {
            height: kt,
            onMenuClick: a && !j ? () => ye(!0) : void 0,
            appName: n,
            logo: Kt,
            onBrandClick: p,
            background: oe,
            color: lt,
            brandColor: wt,
            endContent: W ? /* @__PURE__ */ t(
              Gr,
              {
                count: ue,
                onClick: Jt,
                color: lt,
                hoverColor: st,
                tooltipPlacement: "bottom",
                testId: "mobile-notifications"
              }
            ) : void 0
          }
        ),
        a && !V && re && /* @__PURE__ */ d(
          Z,
          {
            component: "aside",
            sx: {
              width: ie,
              minWidth: ie,
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
              bgcolor: O ? k : void 0,
              borderRight: "1px solid",
              borderColor: "divider",
              transition: yr,
              ...P
            },
            children: [
              /* @__PURE__ */ t(
                dr,
                {
                  mainLinks: r,
                  secondaryLinks: o,
                  activePath: F,
                  onLinkClick: X,
                  showHeaderBar: O,
                  logo: Kt,
                  title: n,
                  onBrandClick: p,
                  brandColor: wt,
                  headerBackgroundColor: O ? oe : void 0,
                  headerForegroundColor: O ? lt : void 0,
                  activeAccentColor: R,
                  groupAccentColor: z,
                  activeForegroundColor: B,
                  foregroundColor: Te,
                  surfaceBackgroundColor: k,
                  collapsed: C ? !0 : Pe,
                  onCollapsedChange: C ? void 0 : Ut,
                  showLabels: C,
                  expandedWidth: Er,
                  collapsedWidth: C ? Sr : wr,
                  topContent: Tt(
                    C ? "popover" : Pe ? "expand" : "full"
                  ),
                  footer: Ct(
                    C || Pe
                  )
                }
              ),
              O && ($ == null ? void 0 : $.show) && !Pe && /* @__PURE__ */ t(Wt, { ...$ })
            ]
          }
        ),
        a && !V && !re && /* @__PURE__ */ t(
          or,
          {
            variant: "permanent",
            sx: {
              width: ie,
              flexShrink: 0,
              zIndex: 2,
              "& .MuiDrawer-paper": {
                width: ie,
                boxSizing: "border-box",
                bgcolor: E,
                borderRight: "none"
              },
              ...P
            },
            children: /* @__PURE__ */ d(
              Z,
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
                    Z,
                    {
                      sx: {
                        display: "flex",
                        justifyContent: "center",
                        mb: 1.5
                      },
                      children: /* @__PURE__ */ t(
                        gt,
                        {
                          logo: jr,
                          appName: n,
                          onClick: p,
                          color: f ?? ne,
                          testId: "sidebar-header-brand"
                        }
                      )
                    }
                  ),
                  Tt("popover"),
                  /* @__PURE__ */ d(
                    Z,
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
                            activePath: F,
                            onLinkClick: X,
                            accentColor: R,
                            surfaceBackgroundColor: E,
                            railShowTitles: c
                          }
                        ),
                        ($ == null ? void 0 : $.show) && /* @__PURE__ */ t(Wt, { ...$ })
                      ]
                    }
                  ),
                  /* @__PURE__ */ t(Z, { sx: { py: 1.5 }, children: Ct(!0) })
                ]
              }
            )
          }
        ),
        a && V && /* @__PURE__ */ d(
          xo,
          {
            anchor: j ? "bottom" : "left",
            open: Pt,
            onOpen: () => ye(!0),
            onClose: () => ye(!1),
            disableSwipeToOpen: !0,
            sx: { zIndex: (T) => T.zIndex.drawer + 1 },
            slotProps: {
              paper: {
                "aria-label": "Navigation",
                sx: {
                  bgcolor: k,
                  backgroundImage: "none",
                  ...j ? {
                    maxHeight: "min(80vh, 640px)",
                    borderTopLeftRadius: "16px",
                    borderTopRightRadius: "16px",
                    pb: "env(safe-area-inset-bottom, 0px)"
                  } : { maxWidth: "85vw" }
                }
              }
            },
            children: [
              j && // Grab handle: the sheet can be swiped down to close
              /* @__PURE__ */ t(
                Z,
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
                dr,
                {
                  mainLinks: r,
                  secondaryLinks: o,
                  activePath: F,
                  onLinkClick: (T) => {
                    X == null || X(T), ye(!1);
                  },
                  onLinkAction: () => ye(!1),
                  collapsed: !1,
                  expandedWidth: j ? "100%" : yn,
                  activeAccentColor: R,
                  groupAccentColor: z,
                  activeForegroundColor: B,
                  foregroundColor: Te,
                  surfaceBackgroundColor: k,
                  topInsetPx: j ? 8 : 0,
                  topContent: j ? void 0 : Tt("full"),
                  footer: j ? void 0 : Ct(!1)
                }
              ),
              ($ == null ? void 0 : $.show) && /* @__PURE__ */ t(Wt, { ...$ })
            ]
          }
        ),
        j && je && /* @__PURE__ */ t(
          xn,
          {
            open: Gt,
            onClose: () => vt(!1),
            search: je
          }
        ),
        j && /* @__PURE__ */ t(
          gn,
          {
            ...Zt,
            pinnedLinks: h,
            activePath: F,
            onLinkClick: X,
            onMenuClick: a ? () => ye(!0) : void 0,
            menuOpen: Pt,
            onSearchClick: je ? () => vt(!0) : void 0,
            searchOpen: Gt,
            showAssistant: we,
            onAssistantClick: fe,
            assistantActive: Ue,
            showProfile: G,
            background: k,
            color: ne,
            activeColor: R,
            activeBackground: st
          }
        ),
        /* @__PURE__ */ t(
          Z,
          {
            component: "main",
            sx: {
              flexGrow: 1,
              "--lumora-content-padding": io,
              // Where sticky page elements should pin (below the mobile bar)
              "--lumora-sticky-top": V ? `${kt}px` : "0px",
              p: "var(--lumora-content-padding)",
              width: ie ? `calc(100% - ${ie}px)` : "100%",
              transition: yr,
              mt: V ? `${kt}px` : 0,
              // Keep the last content clear of the bottom bar
              ...j && {
                pb: `calc(var(--lumora-content-padding) + ${jt})`
              },
              backgroundColor: E,
              ...tt
            },
            children: e
          }
        ),
        he && /* @__PURE__ */ t(
          on,
          {
            open: Xt,
            variant: Vt,
            position: Me,
            width: Ee,
            sidebarWidthPx: ie,
            bottomOffsetPx: we && He === "floating" ? Rn : 0,
            fullScreen: V,
            fullScreenBottom: j ? jt : "0px",
            onClose: rt,
            children: /* @__PURE__ */ t(he, {})
          }
        ),
        we && He === "floating" && !j && /* @__PURE__ */ t(
          hr,
          {
            variant: "floating",
            rightOffsetPx: to,
            shortcutKeys: Qt,
            onClick: fe,
            active: Ue,
            busy: ot
          }
        ),
        W && be && /* @__PURE__ */ t(
          or,
          {
            anchor: "right",
            open: qr,
            onClose: () => yt(!1),
            slotProps: {
              paper: { sx: { width: 380, maxWidth: "100vw" } }
            },
            children: /* @__PURE__ */ t(
              be,
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
  D as AUTH_ERROR_CODES,
  _ as AuthError,
  dr as CollapsibleSidebar,
  Si as FullBleedSection,
  Xo as Kbd,
  wi as LumoraWrapper,
  Qe as clearAuthTokens,
  wi as default,
  Ei as getAuthErrorMessage,
  Ze as getAuthTokens,
  qo as getCurrentUser,
  Zo as getDesignTokens,
  Yo as isAuthenticated,
  Ft as logAuthError,
  zr as storeAuthTokens
};
