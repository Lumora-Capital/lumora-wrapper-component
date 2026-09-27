import { jsx as t, jsxs as d, Fragment as Fe } from "react/jsx-runtime";
import lo from "@mui/icons-material/KeyboardArrowDownRounded";
import co from "@mui/icons-material/KeyboardArrowUpRounded";
import uo from "@mui/icons-material/ChevronRightRounded";
import ho from "@mui/icons-material/ViewSidebarOutlined";
import m from "@mui/material/Box";
import tr from "@mui/material/Collapse";
import ke from "@mui/material/Divider";
import re from "@mui/material/IconButton";
import dt from "@mui/material/ListItemButton";
import ce from "@mui/material/ListItemIcon";
import de from "@mui/material/ListItemText";
import me from "@mui/material/Stack";
import Z from "@mui/material/Tooltip";
import ae from "@mui/material/Typography";
import { useTheme as Cr, createTheme as Tr, alpha as Ne, ThemeProvider as rr } from "@mui/material/styles";
import * as b from "react";
import { useMemo as or, useState as Re, useCallback as fo, useRef as Ot, useEffect as ut } from "react";
import gt from "@mui/material/ButtonBase";
import { useTheme as po, useMediaQuery as mo, Box as ee, CircularProgress as xo, CssBaseline as go, Drawer as nr, SwipeableDrawer as bo, Grid as At, Stack as So } from "@mui/material";
import ir from "axios";
import Eo from "@mui/material/Card";
import wo from "@mui/material/CardContent";
import _r from "@mui/material/Button";
import vo from "@mui/icons-material/AutoAwesomeRounded";
import yo from "@mui/material/Grow";
import Ht from "@mui/material/Paper";
import Ro from "@mui/material/ListSubheader";
import Je from "@mui/material/MenuItem";
import Io from "@mui/material/MenuList";
import Co from "@mui/material/Popper";
import Or from "@mui/icons-material/MenuRounded";
import Ar from "@mui/icons-material/SearchRounded";
import To from "@mui/icons-material/LogoutRounded";
import Nr from "@mui/icons-material/NotificationsNoneOutlined";
import _o from "@mui/icons-material/SettingsOutlined";
import Oo from "@mui/material/Avatar";
import Ao from "@mui/material/Menu";
import ar from "@mui/material/ToggleButton";
import No from "@mui/material/ToggleButtonGroup";
import Do from "@mui/material/Drawer";
import Wo from "@mui/material/AppBar";
import Lo from "@mui/material/Toolbar";
import zo from "@mui/material/Badge";
import Bo from "@mui/material/Popover";
const xt = ({
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
  }, l = /* @__PURE__ */ d(Fe, { children: [
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
    gt,
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
}, pe = (e, r) => !!(r && e.path === r), Dr = (e, r) => (e ?? []).flatMap((o) => {
  const n = o.icon ?? r;
  return Ze(o) ? Dr(o.subitems, n) : o.path ? [{ sub: o, icon: n }] : [];
}), Bt = (e) => {
  const r = Wr(e);
  if (!r)
    return "#ffffff";
  const [o, n, a] = r.map((s) => {
    const l = s / 255;
    return l <= 0.03928 ? l / 12.92 : ((l + 0.055) / 1.055) ** 2.4;
  });
  return 0.2126 * o + 0.7152 * n + 0.0722 * a > 0.5 ? "#0b1f1c" : "#ffffff";
}, kt = (e) => {
  const r = Wr(e);
  if (!r)
    return "rgba(1, 88, 79, 0.12)";
  const [o, n, a] = r;
  return `rgba(${o}, ${n}, ${a}, 0.14)`;
}, Wr = (e) => {
  let r = e.trim().replace(/^#/, "");
  if (r.length === 3 && (r = r.split("").map((n) => n + n).join("")), r.length !== 6 || /[^0-9a-fA-F]/.test(r))
    return null;
  const o = parseInt(r, 16);
  return [o >> 16 & 255, o >> 8 & 255, o & 255];
}, Lr = () => typeof window < "u" && !!window.localStorage, zr = (e) => {
  if (!Lr())
    return null;
  try {
    const r = window.localStorage.getItem(e);
    return r === null ? null : r === "true";
  } catch (r) {
    return console.warn("Failed to read sidebar collapsed state:", r), null;
  }
}, Br = (e, r) => {
  if (Lr())
    try {
      window.localStorage.setItem(e, r ? "true" : "false");
    } catch (o) {
      console.warn("Failed to persist sidebar collapsed state:", o);
    }
}, ko = 264, Fo = 72, Mo = "lumora:sidebar-collapsed", Ho = "width 200ms ease", sr = 64, ht = {
  "&:focus, &:focus-visible": { outline: "none" }
}, Uo = 16, $o = 14, Ko = 4, Po = 2.5, lr = "0.7rem", cr = 22, De = ({ text: e, variant: r = "body1", center: o = !1, fontSize: n, fontWeight: a }) => {
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
    Z,
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
  size: r = Uo
}) => e ? /* @__PURE__ */ t(co, { sx: { fontSize: r, opacity: 0.75 } }) : /* @__PURE__ */ t(lo, { sx: { fontSize: r, opacity: 0.75 } }), dr = ({ open: e }) => /* @__PURE__ */ t(
  uo,
  {
    sx: {
      fontSize: 20,
      opacity: 0.75,
      transition: "transform 150ms ease",
      transform: e ? "rotate(90deg)" : "none"
    }
  }
), ur = ({
  className: e,
  hidden: r = !1
}) => /* @__PURE__ */ t(
  ho,
  {
    className: e,
    sx: { transform: "scaleX(-1)", display: r ? "none" : void 0 }
  }
), ft = 600, hr = ({
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
  groupAccentColor: w,
  activeForegroundColor: T,
  foregroundColor: S,
  surfaceBackgroundColor: y,
  collapsed: z,
  defaultCollapsed: k = !1,
  onCollapsedChange: v,
  persistKey: F = Mo,
  expandedWidth: Y = ko,
  collapsedWidth: X = Fo,
  showLabels: E = !1,
  topInsetPx: Ce = 0,
  topContent: xe,
  footer: O
}) => {
  const M = Cr(), W = M.palette.mode === "dark", D = z !== void 0, [ue, ge] = b.useState(
    () => zr(F) ?? k
  ), B = D ? !!z : ue, [P, bt] = b.useState(
    {}
  ), G = T ?? Bt(f), tt = {
    bgcolor: f,
    color: G,
    "& .MuiListItemIcon-root": { color: G }
  }, St = {
    bgcolor: f,
    color: G,
    borderRadius: "8px"
  }, oe = w ?? kt(f), Te = y ?? (W ? M.palette.background.paper : "#ffffff"), se = S ?? (W ? "text.primary" : f), be = u ?? Te, _e = p ?? (u ? Bt(be) : S ?? (W ? M.palette.text.primary : f)), Et = kt(_e), ne = (i) => {
    n == null || n(i);
  }, Me = () => {
    const i = !B;
    D || (ge(i), Br(F, i)), v == null || v(i);
  }, Se = (i, g) => {
    bt((_) => ({ ..._, [i]: !g }));
  }, He = (i, g) => P[g] ?? Ie(i, o), Oe = (i, g, _) => ({
    color: i ? G : se,
    bgcolor: i ? f : "transparent",
    "& .MuiListItemIcon-root": {
      color: i ? G : se,
      minWidth: _
    },
    "&:hover": i || E ? tt : { bgcolor: g }
  }), rt = {
    "&.Mui-selected": {
      bgcolor: f
    },
    "&.Mui-selected:hover": tt
  }, Ee = (i) => {
    const g = pe(i, o), _ = /* @__PURE__ */ d(
      dt,
      {
        disabled: !i.path,
        selected: g,
        onClick: () => i.path && ne(i.path),
        "data-testid": `sidebar-item-${i.text}`,
        "data-active": g ? "true" : "false",
        sx: {
          borderRadius: "8px",
          py: 1.25,
          px: 1.5,
          // Room for the action button laid over the row's end
          ...i.action && { pr: 6 },
          ...Oe(g, oe, 36),
          ...rt
        },
        children: [
          /* @__PURE__ */ t(ce, { children: i.icon }),
          /* @__PURE__ */ t(
            de,
            {
              disableTypography: !0,
              primary: /* @__PURE__ */ t(
                De,
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
    const { action: x } = i;
    return /* @__PURE__ */ d(m, { sx: { position: "relative" }, children: [
      _,
      /* @__PURE__ */ t(Z, { title: x.label, placement: "right", arrow: !0, children: /* @__PURE__ */ t(
        re,
        {
          "aria-label": x.label,
          "data-testid": `sidebar-action-${i.text}`,
          onClick: () => {
            x.onClick(), a == null || a();
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
            borderColor: g ? "rgba(255, 255, 255, 0.35)" : oe,
            color: g ? G : se,
            "&:hover": {
              bgcolor: g ? "rgba(255, 255, 255, 0.15)" : oe
            },
            "& .MuiSvgIcon-root": { fontSize: 18 },
            // No lingering outline after a click; a clear ring for keyboard focus
            "&:focus:not(.Mui-focusVisible)": {
              outline: "none"
            },
            "&.Mui-focusVisible": {
              outline: "2px solid",
              outlineColor: g ? G : se,
              outlineOffset: 1
            }
          },
          children: x.icon
        }
      ) })
    ] }, i.text);
  }, Ue = (i) => {
    const g = Ie(i, o), _ = pe(i, o), x = pt("", i), R = He(i, x);
    return /* @__PURE__ */ d(
      m,
      {
        "data-testid": `sidebar-group-${i.text}`,
        sx: {
          borderRadius: "8px",
          bgcolor: g ? oe : "transparent"
        },
        children: [
          /* @__PURE__ */ d(
            dt,
            {
              onClick: () => Se(x, R),
              "data-testid": `sidebar-item-${i.text}`,
              "data-active": _ ? "true" : "false",
              "aria-expanded": R,
              sx: {
                borderRadius: "8px",
                py: 1.25,
                px: 1.5,
                ...Oe(_, oe, 36)
              },
              children: [
                /* @__PURE__ */ t(ce, { children: i.icon }),
                /* @__PURE__ */ t(
                  de,
                  {
                    disableTypography: !0,
                    primary: /* @__PURE__ */ t(
                      De,
                      {
                        text: i.text,
                        fontWeight: ft
                      }
                    )
                  }
                ),
                /* @__PURE__ */ t(dr, { open: R })
              ]
            }
          ),
          /* @__PURE__ */ t(tr, { in: R, timeout: "auto", unmountOnExit: !0, children: /* @__PURE__ */ t(
            m,
            {
              "data-testid": `sidebar-children-${i.text}`,
              sx: { pb: 0.5 },
              children: i.subitems.map(
                (L) => $e(L, x, 1)
              )
            }
          ) })
        ]
      },
      i.text
    );
  }, $e = (i, g, _) => {
    const x = pt(g, i), R = Ko + (_ - 1) * Po;
    if (Ze(i)) {
      const j = Ie(i, o), H = pe(i, o), $ = He(i, x);
      return /* @__PURE__ */ d(m, { "data-testid": `sidebar-group-${i.text}`, children: [
        /* @__PURE__ */ d(
          dt,
          {
            onClick: () => Se(x, $),
            "data-testid": `sidebar-subitem-${i.text}`,
            "data-active": j ? "true" : "false",
            "aria-expanded": $,
            sx: {
              borderRadius: "8px",
              mx: 0.5,
              py: 0.75,
              pl: R,
              ...Oe(H, "action.hover", 32)
            },
            children: [
              i.icon ? /* @__PURE__ */ t(ce, { children: i.icon }) : null,
              /* @__PURE__ */ t(
                de,
                {
                  disableTypography: !0,
                  primary: /* @__PURE__ */ t(
                    De,
                    {
                      text: i.text,
                      fontWeight: ft
                    }
                  )
                }
              ),
              /* @__PURE__ */ t(dr, { open: $ })
            ]
          }
        ),
        /* @__PURE__ */ t(tr, { in: $, timeout: "auto", unmountOnExit: !0, children: /* @__PURE__ */ t(m, { "data-testid": `sidebar-children-${i.text}`, children: i.subitems.map(
          (Ae) => $e(Ae, x, _ + 1)
        ) }) })
      ] }, x);
    }
    const L = pe(i, o);
    return /* @__PURE__ */ d(
      dt,
      {
        selected: L,
        disabled: !i.path,
        onClick: () => i.path && ne(i.path),
        "data-testid": `sidebar-subitem-${i.text}`,
        "data-active": L ? "true" : "false",
        sx: {
          borderRadius: "8px",
          mx: 0.5,
          py: 0.75,
          pl: R,
          ...Oe(L, "action.hover", 32),
          ...rt
        },
        children: [
          i.icon ? /* @__PURE__ */ t(ce, { children: i.icon }) : null,
          /* @__PURE__ */ t(
            de,
            {
              disableTypography: !0,
              primary: /* @__PURE__ */ t(
                De,
                {
                  text: i.text,
                  fontWeight: ft
                }
              )
            }
          )
        ]
      },
      x
    );
  }, he = (i, g, _, x, R, L) => {
    const j = !R, H = /* @__PURE__ */ d(
      re,
      {
        "aria-label": g,
        disabled: j,
        onClick: R,
        "data-testid": (L == null ? void 0 : L.testId) ?? `sidebar-item-${g}`,
        "data-active": x ? "true" : "false",
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
          color: x ? G : se,
          bgcolor: x ? f : "transparent",
          "& .MuiSvgIcon-root": {
            fontSize: cr
          },
          "&:hover": St,
          ...ht
        } : {
          // Icon-only collapsed rail (collapsible variant):
          // original hover — accent when active, else a subtle
          // tint; no foreground change.
          width: 44,
          height: 44,
          color: x ? G : se,
          bgcolor: x ? f : "transparent",
          borderRadius: x ? "8px" : "50%",
          "&:hover": {
            bgcolor: x ? f : L != null && L.insideGroup ? "action.hover" : oe,
            borderRadius: "8px"
          },
          ...ht
        },
        children: [
          _,
          E ? /* @__PURE__ */ t(
            De,
            {
              text: g,
              variant: "caption",
              center: !0,
              fontSize: lr
            }
          ) : null
        ]
      }
    );
    return E ? j ? /* @__PURE__ */ t("span", { children: H }, i) : /* @__PURE__ */ t(b.Fragment, { children: H }, i) : /* @__PURE__ */ t(Z, { title: g, placement: "right", arrow: !0, children: j ? /* @__PURE__ */ t("span", { children: H }) : H }, i);
  }, Ke = (i) => {
    const g = Ie(i, o), _ = pe(i, o), x = pt("", i), R = He(i, x), L = /* @__PURE__ */ d(
      re,
      {
        "aria-label": i.text,
        "aria-expanded": R,
        onClick: () => Se(x, R),
        "data-testid": `sidebar-item-${i.text}`,
        "data-active": _ ? "true" : "false",
        sx: {
          display: "flex",
          flexDirection: "column",
          gap: E ? 0.25 : 0,
          width: E ? "100%" : 44,
          maxWidth: "100%",
          // 8px padding on all sides of the labeled item container.
          ...E ? { p: 1 } : { py: 0.75 },
          borderRadius: "10px",
          color: _ ? G : se,
          bgcolor: _ ? f : "transparent",
          // rail-labeled: active AND hover share the highlight. collapsible:
          // original behavior — accent only when active; the outer pill
          // supplies the idle-hover tint, so the button stays transparent.
          "&:hover": E ? { bgcolor: f, color: G } : {
            bgcolor: _ ? f : "transparent"
          },
          ...ht
        },
        children: [
          E ? /* @__PURE__ */ t(
            m,
            {
              sx: {
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                "& .MuiSvgIcon-root": {
                  fontSize: cr
                }
              },
              children: i.icon
            }
          ) : i.icon,
          E ? /* @__PURE__ */ t(
            De,
            {
              text: i.text,
              variant: "caption",
              center: !0,
              fontSize: lr
            }
          ) : null,
          /* @__PURE__ */ t(Go, { open: R, size: $o })
        ]
      }
    ), j = E ? L : /* @__PURE__ */ t(Z, { title: i.text, placement: "right", arrow: !0, children: L });
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
          bgcolor: g ? oe : "transparent",
          ...E ? {} : { "&:hover": { bgcolor: oe } }
        },
        children: [
          j,
          R ? Dr(i.subitems, i.icon).map(
            ({ sub: H, icon: $ }) => he(
              H.path,
              H.text,
              $,
              pe(H, o),
              () => ne(H.path),
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
        i.path ? () => ne(i.path) : void 0
      )
    },
    i.text
  ), nt = (i) => Ze(i) ? B ? Ke(i) : Ue(i) : B ? ot(i) : Ee(i), it = (i) => /* @__PURE__ */ t(
    me,
    {
      spacing: 0.5,
      sx: {
        width: "100%",
        alignItems: B ? "center" : "stretch"
      },
      children: i.map(nt)
    }
  ), we = B ? X : Y, Pe = B ? "Expand sidebar" : "Collapse sidebar", at = B && c ? /* @__PURE__ */ d(Fe, { children: [
    /* @__PURE__ */ t(m, { className: "toggle-logo", sx: { display: "flex" }, children: c }),
    /* @__PURE__ */ t(ur, { className: "toggle-icon", hidden: !0 })
  ] }) : /* @__PURE__ */ t(ur, {}), Q = h ? /* @__PURE__ */ d(
    m,
    {
      "data-testid": "sidebar-header",
      sx: {
        height: sr,
        minHeight: sr,
        flexShrink: 0,
        display: "flex",
        alignItems: "center",
        gap: 1.5,
        bgcolor: be,
        justifyContent: B ? "center" : "flex-start",
        // Expanded: lines the toggle glyph up with the row icons below
        // (12px panel padding + 12px row padding = 24px, minus the
        // button's own 8px). Collapsed: centered like the rail icons.
        px: B ? 0 : 2
      },
      children: [
        /* @__PURE__ */ t(Z, { title: Pe, placement: "right", arrow: !0, children: /* @__PURE__ */ t(
          re,
          {
            "aria-label": Pe,
            "aria-expanded": !B,
            onClick: Me,
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
        !B && (c || s) ? /* @__PURE__ */ t(
          xt,
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
        xt,
        {
          logo: c,
          appName: s || "App",
          onClick: l,
          color: A ?? _e,
          testId: "sidebar-header-brand"
        }
      )
    }
  ) : null, ve = E ? 0.5 : B ? 1 : 1.5;
  return /* @__PURE__ */ d(
    m,
    {
      component: "nav",
      "aria-label": "Main sidebar",
      "data-testid": "collapsible-sidebar",
      "data-collapsed": B ? "true" : "false",
      "data-labeled": E ? "true" : "false",
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
        transition: Ho
      },
      children: [
        Q ?? st,
        xe ? /* @__PURE__ */ t(
          m,
          {
            sx: { flexShrink: 0, px: ve, pt: 1, pb: 1 },
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
              px: ve,
              pt: Ce && !h ? `${Ce}px` : 1,
              pb: 2
            },
            children: [
              it(e),
              r.length > 0 ? /* @__PURE__ */ d(m, { sx: { mt: "auto", pt: 2 }, children: [
                O ? null : /* @__PURE__ */ t(ke, { sx: { mb: 1, borderColor: "divider" } }),
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
}, Ft = "var(--lumora-content-padding, 0px)", fr = `calc(${Ft} * -1)`, mi = ({
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
        mx: fr,
        mt: r ? fr : 0,
        // Space below it, like any other block on the page
        mb: Ft,
        px: c ? Ft : 0,
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
), jo = ({ keys: e }) => /* @__PURE__ */ t(
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
class C extends Error {
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
}, U = {
  ACCESS_TOKEN: "lumoraAccessToken",
  REFRESH_TOKEN: "lumoraRefreshToken",
  USER: "lumoraUser"
}, le = {
  ACCESS_TOKEN: "accessToken",
  REFRESH_TOKEN: "refreshToken",
  USER: "user"
}, Xo = () => {
  if (!(typeof window > "u" || !window.localStorage))
    try {
      const e = localStorage.getItem(
        le.ACCESS_TOKEN
      ), r = localStorage.getItem(
        le.REFRESH_TOKEN
      ), o = localStorage.getItem(le.USER);
      e && !localStorage.getItem(U.ACCESS_TOKEN) && localStorage.setItem(U.ACCESS_TOKEN, e), r && !localStorage.getItem(U.REFRESH_TOKEN) && localStorage.setItem(
        U.REFRESH_TOKEN,
        r
      ), o && !localStorage.getItem(U.USER) && localStorage.setItem(U.USER, o), (e || r || o) && (localStorage.removeItem(le.ACCESS_TOKEN), localStorage.removeItem(le.REFRESH_TOKEN), localStorage.removeItem(le.USER));
    } catch (e) {
      console.warn("Failed to migrate legacy localStorage keys:", e);
    }
}, Nt = (e) => {
  try {
    if (typeof window > "u")
      return console.warn("localStorage access attempted on server side"), null;
    if (!window.localStorage)
      throw new C(
        "localStorage is not available",
        N.STORAGE_ACCESS_DENIED
      );
    return window.localStorage.getItem(e);
  } catch (r) {
    throw r.name === "QuotaExceededError" ? (console.error("Storage quota exceeded"), new C(
      "Storage quota exceeded. Please clear browser data.",
      N.STORAGE_ACCESS_DENIED,
      r
    )) : r.name === "SecurityError" ? (console.error(
      "localStorage access denied (private browsing or security settings)"
    ), new C(
      "Access to localStorage is denied. Please check browser settings.",
      N.STORAGE_ACCESS_DENIED,
      r
    )) : (console.error(
      "Unexpected error accessing localStorage:",
      r.name
    ), new C(
      "Failed to access storage",
      N.STORAGE_ACCESS_DENIED,
      r
    ));
  }
}, Dt = (e, r) => {
  try {
    if (typeof window > "u")
      return console.warn("localStorage write attempted on server side"), !1;
    if (!window.localStorage)
      throw new C(
        "localStorage is not available",
        N.STORAGE_ACCESS_DENIED
      );
    return window.localStorage.setItem(e, r), !0;
  } catch (o) {
    throw o.name === "QuotaExceededError" ? (console.error("Storage quota exceeded"), new C(
      "Storage quota exceeded. Please clear browser data.",
      N.STORAGE_ACCESS_DENIED,
      o
    )) : o.name === "SecurityError" ? (console.error(
      "localStorage write denied (private browsing or security settings)"
    ), new C(
      "Access to localStorage is denied. Please check browser settings.",
      N.STORAGE_ACCESS_DENIED,
      o
    )) : (console.error(
      "Unexpected error writing to localStorage:",
      o.name
    ), new C(
      "Failed to write to storage",
      N.STORAGE_ACCESS_DENIED,
      o
    ));
  }
}, kr = (e) => {
  try {
    return typeof window > "u" ? (console.warn("localStorage removal attempted on server side"), !1) : window.localStorage ? (window.localStorage.removeItem(e), !0) : (console.warn("localStorage is not available"), !1);
  } catch (r) {
    return r.name !== "SecurityError" && console.warn(`Could not remove localStorage key "${e}"`), !1;
  }
}, Qe = () => {
  try {
    Xo();
    const e = Nt(U.ACCESS_TOKEN), r = Nt(U.REFRESH_TOKEN), o = Nt(U.USER);
    let n = null;
    if (o)
      try {
        n = JSON.parse(o);
      } catch {
        o && o !== "null" && o !== "undefined" && console.warn(
          "Invalid user data in localStorage, clearing:",
          o.substring(0, 50)
        ), kr(U.USER);
      }
    return {
      accessToken: e,
      refreshToken: r,
      user: n
    };
  } catch (e) {
    throw e instanceof C ? e : new C(
      "Failed to retrieve authentication tokens",
      N.UNKNOWN_ERROR,
      e
    );
  }
}, Vo = () => {
  try {
    const { accessToken: e, refreshToken: r } = Qe();
    return !(e || r) ? {
      isAuthenticated: !1,
      error: new C(
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
      error: e instanceof C ? e : new C(
        "Authentication check failed",
        N.UNKNOWN_ERROR,
        e
      )
    };
  }
}, Fr = (e, r, o = null) => {
  try {
    if (!e && !r)
      throw new C(
        "At least one token must be provided",
        N.TOKEN_INVALID
      );
    return e && Dt(U.ACCESS_TOKEN, e), r && Dt(U.REFRESH_TOKEN, r), o && Dt(U.USER, JSON.stringify(o)), {
      success: !0,
      error: null
    };
  } catch (n) {
    return console.error("Failed to store authentication tokens:", n), {
      success: !1,
      error: n instanceof C ? n : new C(
        "Failed to store tokens",
        N.UNKNOWN_ERROR,
        n
      )
    };
  }
}, et = () => {
  try {
    return [
      U.ACCESS_TOKEN,
      U.REFRESH_TOKEN,
      U.USER,
      // Also clear legacy keys for complete cleanup
      le.ACCESS_TOKEN,
      le.REFRESH_TOKEN,
      le.USER
    ].map((n) => kr(n)).every((n) => n) || console.warn("Some tokens could not be removed from localStorage"), {
      success: !0,
      error: null
    };
  } catch (e) {
    return console.error("Failed to clear authentication tokens:", e), {
      success: !1,
      error: e instanceof C ? e : new C(
        "Failed to clear tokens",
        N.LOGOUT_FAILED,
        e
      )
    };
  }
}, Yo = () => {
  try {
    const { user: e } = Qe();
    return {
      user: e,
      error: null
    };
  } catch (e) {
    return console.error("Failed to get current user:", e), {
      user: null,
      error: e instanceof C ? e : new C(
        "Failed to retrieve user data",
        N.UNKNOWN_ERROR,
        e
      )
    };
  }
}, xi = (e) => {
  if (!(e instanceof C))
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
}, Mt = (e, r = "Unknown") => {
  const o = {
    context: r,
    message: e.message,
    code: e instanceof C ? e.code : "UNKNOWN",
    timestamp: e instanceof C ? e.timestamp : (/* @__PURE__ */ new Date()).toISOString(),
    stack: e.stack
  };
  e instanceof C && e.originalError && (o.originalError = {
    name: e.originalError.name,
    message: e.originalError.message
  }), console.warn("[Auth Error]", o);
}, qo = (e) => {
  if (!e)
    throw new Error("API base URL is required to create axios client");
  const r = ir.create({
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
        const w = new Error(
          "No refresh token available for token refresh"
        );
        return Mt(w, "AxiosClient - Token Refresh"), et(), typeof window < "u" && (window.location.href = "/login"), Promise.reject(s);
      }
      if (o && n)
        return new Promise((w, T) => {
          a.push({ resolve: w, reject: T });
        }).then((w) => {
          const {
            accessToken: T,
            refreshToken: S
          } = w;
          if (l.headers && (l.headers.Authorization = `Bearer ${T}`), u.includes("/auth/logout"))
            try {
              if (typeof l.data == "string") {
                const y = JSON.parse(
                  l.data || "{}"
                );
                y.refresh_token = S, l.data = JSON.stringify(y);
              } else
                l.data && typeof l.data == "object" ? l.data.refresh_token = S : l.data = JSON.stringify({
                  refresh_token: S
                });
            } catch {
              l.data = JSON.stringify({
                refresh_token: S
              });
            }
          return r(l);
        }).catch((w) => Promise.reject(w));
      o = !0, n = ir.post(
        `${e}/auth/refresh`,
        {
          refresh_token: A
        }
      );
      try {
        const w = await n, { accessToken: T, refreshToken: S } = w.data;
        if (Fr(T, S, null), c(null, {
          accessToken: T,
          refreshToken: S
        }), l.headers && (l.headers.Authorization = `Bearer ${T}`), u.includes("/auth/logout"))
          try {
            if (typeof l.data == "string") {
              const y = JSON.parse(
                l.data || "{}"
              );
              y.refresh_token = S, l.data = JSON.stringify(y);
            } else
              l.data && typeof l.data == "object" ? l.data.refresh_token = S : l.data = JSON.stringify({
                refresh_token: S
              });
          } catch {
            l.data = JSON.stringify({
              refresh_token: S
            });
          }
        return r(l);
      } catch (w) {
        return Mt(
          w,
          "AxiosClient - Token Refresh Failed"
        ), c(w), et(), typeof window < "u" && (window.location.href = "/login"), Promise.reject(w);
      } finally {
        o = !1, n = null;
      }
    }
  ), r;
}, q = {
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
}, J = {
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
}, We = {
  300: "hsl(120, 61%, 77%)",
  400: "hsl(120, 44%, 53%)",
  500: "hsl(120, 59%, 30%)",
  700: "hsl(120, 75%, 16%)",
  800: "hsl(120, 84%, 10%)"
}, Le = {
  300: "hsl(45, 90%, 65%)",
  400: "hsl(45, 90%, 40%)",
  500: "hsl(45, 90%, 35%)",
  700: "hsl(45, 94%, 20%)",
  800: "hsl(45, 95%, 16%)"
}, ze = {
  300: "hsl(0, 90%, 65%)",
  400: "hsl(0, 90%, 40%)",
  500: "hsl(0, 90%, 30%)",
  700: "hsl(0, 94%, 18%)",
  800: "hsl(0, 95%, 12%)"
}, Mr = Tr(), te = Mr.typography.pxToRem, Jo = (e) => {
  const r = e === "dark", o = [...Mr.shadows];
  return o[1] = r ? "hsla(220, 30%, 5%, 0.7) 0px 4px 16px 0px, hsla(220, 25%, 10%, 0.8) 0px 8px 16px -5px" : "hsla(220, 30%, 5%, 0.07) 0px 4px 16px 0px, hsla(220, 25%, 10%, 0.07) 0px 8px 16px -5px", {
    palette: {
      mode: e,
      primary: {
        light: r ? q[300] : q[200],
        main: q[400],
        dark: q[700],
        contrastText: q[50]
      },
      info: r ? {
        light: q[500],
        main: q[700],
        dark: q[900],
        contrastText: q[300]
      } : {
        light: q[100],
        main: q[300],
        dark: q[600],
        contrastText: J[50]
      },
      warning: r ? { light: Le[400], main: Le[500], dark: Le[700] } : { light: Le[300], main: Le[400], dark: Le[800] },
      error: r ? { light: ze[400], main: ze[500], dark: ze[700] } : { light: ze[300], main: ze[400], dark: ze[800] },
      success: r ? { light: We[400], main: We[500], dark: We[700] } : { light: We[300], main: We[400], dark: We[800] },
      grey: J,
      divider: r ? Ne(J[700], 0.6) : Ne(J[300], 0.4),
      background: r ? { default: J[900], paper: "hsl(220, 30%, 7%)" } : { default: "hsl(0, 0%, 99%)", paper: "hsl(220, 35%, 97%)" },
      text: r ? { primary: "hsl(0, 0%, 100%)", secondary: J[400] } : { primary: J[800], secondary: J[600] },
      action: r ? {
        hover: Ne(J[600], 0.2),
        selected: Ne(J[600], 0.3)
      } : {
        hover: Ne(J[200], 0.2),
        selected: Ne(J[200], 0.3)
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
}, Zo = async (e, r) => {
  const { accessToken: o, refreshToken: n } = Qe();
  if (o)
    return !0;
  if (n)
    try {
      const a = await e.post("/auth/refresh", {
        refresh_token: n
      });
      if (a.data.success && a.data.accessToken)
        return Fr(
          a.data.accessToken,
          a.data.refreshToken || null,
          null
        ), !0;
    } catch (a) {
      Mt(a, "TokenValidator - Refresh Failed");
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
), Be = "#09C1AE", Wt = (e, r) => ({
  position: "relative",
  overflow: "hidden",
  "&::before": {
    content: '""',
    position: "absolute",
    inset: "-50%",
    background: `conic-gradient(from 0deg, rgba(9, 193, 174, 0.25) 0deg 250deg, ${Be} 300deg, #0DD4BF 330deg, rgba(9, 193, 174, 0.25) 360deg)`,
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
}), pr = ({
  variant: e,
  onClick: r,
  active: o = !1,
  busy: n = !1,
  shortcutKeys: a,
  accentColor: c = "#01584f"
}) => {
  const s = a ? `Ask Nexa (${a.join("")})` : "Ask Nexa", l = {
    onClick: r,
    "aria-label": "Ask Nexa",
    "aria-pressed": o,
    "data-testid": "assistant-button"
  };
  return e === "sidebar" ? /* @__PURE__ */ d(
    gt,
    {
      ...l,
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
        borderColor: o ? Be : "rgba(9, 193, 174, 0.45)",
        bgcolor: "rgba(9, 193, 174, 0.08)",
        color: c,
        transition: "border-color 150ms, background-color 150ms",
        "&:hover": { bgcolor: "rgba(9, 193, 174, 0.14)" },
        "&.Mui-focusVisible": {
          outline: `2px solid ${Be}`,
          outlineOffset: 2
        },
        ...n && Wt(8, "background.paper")
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
        a && /* @__PURE__ */ t(jo, { keys: a })
      ]
    }
  ) : e === "sidebar-icon" ? /* @__PURE__ */ t(Z, { title: s, placement: "right", arrow: !0, children: /* @__PURE__ */ t(
    re,
    {
      ...l,
      "data-variant": "sidebar-icon",
      sx: {
        width: 44,
        height: 44,
        borderRadius: "8px",
        border: "1px solid",
        borderColor: o ? Be : "rgba(9, 193, 174, 0.45)",
        bgcolor: "rgba(9, 193, 174, 0.08)",
        "&:hover": { bgcolor: "rgba(9, 193, 174, 0.14)" },
        ...n && Wt(8, "background.paper")
      },
      children: /* @__PURE__ */ t(mt, { size: 20 })
    }
  ) }) : /* @__PURE__ */ t(Z, { title: s, placement: "left", children: /* @__PURE__ */ t(
    re,
    {
      ...l,
      disableFocusRipple: !0,
      "data-variant": "floating",
      sx: {
        position: "fixed",
        right: 24,
        bottom: 24,
        // Above page content, below drawers and menus (1200+)
        zIndex: 1150,
        width: 52,
        height: 52,
        p: 0,
        borderRadius: "16px",
        bgcolor: "background.paper",
        boxShadow: 4,
        outline: o ? `2px solid ${Be}` : "none",
        outlineOffset: 2,
        "&:hover": { bgcolor: "background.paper", boxShadow: 6 },
        "&.Mui-focusVisible": { outline: `2px solid ${Be}` },
        ...n && Wt(16, "background.paper")
      },
      children: /* @__PURE__ */ t(m, { sx: { display: "flex", alignItems: "center" }, children: /* @__PURE__ */ t(mt, { size: 26 }) })
    }
  ) });
}, Lt = ({
  title: e = "",
  message: r = "",
  buttonText: o = "",
  onButtonClick: n,
  show: a = !0
}) => a ? /* @__PURE__ */ t(Eo, { variant: "outlined", sx: { m: 1.5, flexShrink: 0 }, children: /* @__PURE__ */ d(wo, { children: [
  /* @__PURE__ */ t(vo, { fontSize: "small" }),
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
    _r,
    {
      variant: "contained",
      size: "small",
      fullWidth: !0,
      onClick: n,
      children: o
    }
  )
] }) }) : null, Ye = 24, Qo = 720, en = ({
  open: e,
  children: r,
  position: o,
  width: n,
  sidebarWidthPx: a,
  bottomOffsetPx: c,
  fullScreen: s,
  fullScreenBottom: l = "0px",
  onClose: h
}) => {
  b.useEffect(() => {
    if (!e || !h)
      return;
    const A = (f) => {
      f.key === "Escape" && h();
    };
    return window.addEventListener("keydown", A), () => window.removeEventListener("keydown", A);
  }, [e, h]);
  const u = Ye + c, p = s ? {
    top: 0,
    left: 0,
    right: 0,
    bottom: l,
    borderRadius: 0
  } : {
    bottom: u,
    ...o === "left" ? { left: a + Ye } : { right: Ye },
    width: n,
    maxWidth: `calc(100vw - ${Ye * 2}px)`,
    height: `min(${Qo}px, calc(100vh - ${u + Ye}px))`,
    borderRadius: "12px"
  };
  return /* @__PURE__ */ t(
    yo,
    {
      in: e,
      mountOnEnter: !0,
      style: {
        transformOrigin: o === "left" ? "bottom left" : "bottom right"
      },
      children: /* @__PURE__ */ t(
        Ht,
        {
          role: "dialog",
          "aria-label": "Nexa chat",
          "data-testid": "chat-popup",
          elevation: 8,
          sx: {
            position: "fixed",
            // Above the page and the floating Nexa button, below menus
            zIndex: 1250,
            display: "flex",
            flexDirection: "column",
            overflow: "hidden",
            border: "1px solid",
            borderColor: "divider",
            ...p
          },
          children: r
        }
      )
    }
  );
}, tn = 180, mr = 250, rn = "#01584F", on = ({
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
    Z,
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
}, Hr = (e, r, o, n) => {
  const a = e ? 48 : 44, c = e ? "text.secondary" : r, s = e ? rn : r;
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
}, Ur = ({ link: e }) => /* @__PURE__ */ d(me, { alignItems: "center", spacing: 1, sx: { width: "100%" }, children: [
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
    on,
    {
      text: e.text,
      testId: `rail-item-caption-${e.text}`
    }
  )
] }), $r = (e, r, o) => o ? e : /* @__PURE__ */ t(Z, { title: r, placement: "right", arrow: !0, children: e }), nn = ({
  link: e,
  activePath: r,
  onLinkClick: o,
  accentColor: n,
  isSecondary: a,
  surfaceBackgroundColor: c,
  railShowTitles: s
}) => {
  const l = Cr(), [h, u] = b.useState(null), [p, A] = b.useState(!1), f = b.useRef(
    null
  ), w = b.useRef(null), T = b.useRef(null), S = b.useRef(!1), y = b.useRef(!1), z = b.useId(), k = () => {
    f.current && (clearTimeout(f.current), f.current = null);
  }, v = () => {
    k(), f.current = setTimeout(() => {
      A(!1), f.current = null;
    }, tn);
  }, F = () => {
    k(), A(!0);
  };
  b.useEffect(() => {
    if (!p)
      return;
    const O = (M) => {
      var W;
      M.key === "Escape" && (A(!1), (W = T.current) == null || W.focus());
    };
    return document.addEventListener("keydown", O), () => document.removeEventListener("keydown", O);
  }, [p]), b.useEffect(() => {
    if (!p || !y.current)
      return;
    const O = globalThis.requestAnimationFrame(() => {
      var W;
      const M = (W = w.current) == null ? void 0 : W.querySelector(
        '[role="menuitem"]'
      );
      M == null || M.focus(), y.current = !1;
    });
    return () => cancelAnimationFrame(O);
  }, [p]);
  const Y = Ie(e, r), { activeBg: X, sx: E } = Hr(
    a,
    n,
    Y,
    s
  ), Ce = /* @__PURE__ */ t(
    re,
    {
      ref: T,
      component: e.path ? "a" : "button",
      href: e.path || void 0,
      "aria-label": e.text,
      onFocus: () => {
        S.current || F();
      },
      onBlur: (O) => {
        var W;
        const M = O.relatedTarget;
        M && ((W = w.current) != null && W.contains(M)) || v();
      },
      onKeyDown: (O) => {
        O.key === "ArrowDown" && (O.preventDefault(), y.current = !0, F());
      },
      onClick: (O) => {
        O.preventDefault(), O.stopPropagation(), e.path && (o == null || o(e.path));
      },
      "aria-haspopup": "menu",
      "aria-expanded": p,
      "aria-controls": p ? z : void 0,
      "data-testid": `rail-submenu-trigger-${e.text}`,
      sx: E,
      children: s ? /* @__PURE__ */ t(Ur, { link: e }) : e.icon
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
              S.current = !0, F();
            },
            onMouseLeave: () => {
              S.current = !1, v();
            },
            children: $r(Ce, e.text, s)
          }
        ),
        /* @__PURE__ */ t(
          Co,
          {
            open: p && !!h,
            anchorEl: h,
            placement: "right-start",
            modifiers: [{ name: "offset", options: { offset: [8, 0] } }],
            sx: { zIndex: (O) => O.zIndex.modal },
            children: /* @__PURE__ */ t(
              Ht,
              {
                ref: w,
                elevation: 0,
                onMouseEnter: k,
                onMouseLeave: v,
                "data-testid": `rail-submenu-panel-${e.text}`,
                sx: {
                  bgcolor: c,
                  backgroundImage: "none",
                  borderRadius: "4px",
                  border: "1px solid",
                  borderColor: "divider",
                  boxShadow: l.shadows[8],
                  maxWidth: mr,
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
                      maxWidth: mr
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
  function xe(O, M, W) {
    return O.flatMap((D) => {
      const ue = pt(M, D);
      return Ze(D) ? [
        /* @__PURE__ */ t(
          Ro,
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
          ue
        ),
        ...xe(D.subitems, ue, W + 1)
      ] : [
        /* @__PURE__ */ d(
          Je,
          {
            role: "menuitem",
            title: D.text,
            disabled: !D.path,
            selected: pe(D, r),
            onClick: (ge) => {
              ge.preventDefault(), D.path && (o == null || o(D.path)), A(!1);
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
              D.icon ? /* @__PURE__ */ t(ce, { children: D.icon }) : null,
              /* @__PURE__ */ t(
                de,
                {
                  primary: D.text,
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
}, an = ({
  link: e,
  activePath: r,
  onLinkClick: o,
  accentColor: n,
  isSecondary: a,
  railShowTitles: c
}) => {
  const s = !!(e.path && r === e.path), { sx: l } = Hr(
    a,
    n,
    s,
    c
  );
  return $r(
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
        children: c ? /* @__PURE__ */ t(Ur, { link: e }) : e.icon
      }
    ),
    e.text,
    c
  );
}, sn = () => /* @__PURE__ */ t(
  m,
  {
    sx: {
      width: "100%",
      display: "flex",
      justifyContent: "center"
    },
    children: /* @__PURE__ */ t(ke, { sx: { width: "60%", borderColor: "divider" } })
  }
), ln = () => /* @__PURE__ */ t(
  m,
  {
    sx: {
      width: "100%",
      my: 2,
      display: "flex",
      justifyContent: "center"
    },
    children: /* @__PURE__ */ t(ke, { sx: { width: "60%", borderColor: "divider" } })
  }
), xr = (e, r) => e.map((o, n) => /* @__PURE__ */ d(b.Fragment, { children: [
  r(o, n),
  n < e.length - 1 ? /* @__PURE__ */ t(sn, {}) : null
] }, n)), cn = ({
  mainLinks: e,
  secondaryLinks: r = [],
  activePath: o,
  onLinkClick: n,
  accentColor: a = "#01584f",
  surfaceBackgroundColor: c,
  railShowTitles: s = !1
}) => {
  const l = (u, p) => Ze(u) ? /* @__PURE__ */ t(
    nn,
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
    an,
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
        xr(e, (u) => l(u, !1)),
        r.length > 0 ? /* @__PURE__ */ d(Fe, { children: [
          /* @__PURE__ */ t(ln, {}),
          /* @__PURE__ */ t(m, { sx: { mt: "auto", pb: 2 }, children: /* @__PURE__ */ t(me, { gap: h, alignItems: "center", children: xr(
            r,
            (u) => l(u, !0)
          ) }) })
        ] }) : null
      ]
    }
  );
}, dn = (e) => e ? e.charAt(0).toUpperCase() + e.slice(1).toLowerCase() : "User", un = (e) => e.split(/\s+/).filter(Boolean).slice(0, 2).map((r) => r.charAt(0).toUpperCase()).join(""), gr = {
  overflow: "hidden",
  textOverflow: "ellipsis",
  whiteSpace: "nowrap",
  maxWidth: "100%"
}, br = ({ count: e }) => e ? /* @__PURE__ */ t(
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
    children: un(e)
  }
), Pr = ({ name: e, role: r, avatar: o, avatarColor: n, showText: a }) => /* @__PURE__ */ d(Fe, { children: [
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
            sx: { ...gr, fontWeight: 600, color: "inherit" },
            children: e
          }
        ),
        /* @__PURE__ */ t(
          ae,
          {
            variant: "caption",
            sx: { ...gr, opacity: 0.8, color: "inherit" },
            children: dn(r)
          }
        )
      ]
    }
  )
] }), Sr = {
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
}, Gr = ({
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
  onSettingsClick: w,
  showThemeToggler: T,
  theme: S,
  onThemeToggle: y,
  onLogout: z
}) => {
  const k = (v) => () => {
    r(), v == null || v();
  };
  return /* @__PURE__ */ d(
    Ao,
    {
      anchorEl: e,
      open: !!e,
      onClose: r,
      anchorOrigin: Sr[o].anchor,
      transformOrigin: Sr[o].transform,
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
              Pr,
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
        /* @__PURE__ */ t(ke, {}),
        c && /* @__PURE__ */ d(Je, { onClick: k(l), children: [
          /* @__PURE__ */ t(ce, { children: /* @__PURE__ */ t(Nr, { fontSize: "small" }) }),
          /* @__PURE__ */ t(de, { children: "Notifications" }),
          /* @__PURE__ */ t(br, { count: s })
        ] }),
        A.map((v) => /* @__PURE__ */ d(Je, { onClick: k(v.onClick), children: [
          v.icon && /* @__PURE__ */ t(ce, { children: v.icon }),
          /* @__PURE__ */ t(de, { inset: !v.icon, children: v.label }),
          /* @__PURE__ */ t(br, { count: v.badge })
        ] }, v.key)),
        f && /* @__PURE__ */ d(Je, { onClick: k(w), children: [
          /* @__PURE__ */ t(ce, { children: /* @__PURE__ */ t(_o, { fontSize: "small" }) }),
          /* @__PURE__ */ t(de, { children: "Settings" })
        ] }),
        T && [
          /* @__PURE__ */ t(ke, {}, "theme-divider"),
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
                value: S,
                onChange: (v, F) => F && F !== S && (y == null ? void 0 : y()),
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
                  /* @__PURE__ */ t(ar, { value: "light", children: "Light" }),
                  /* @__PURE__ */ t(ar, { value: "dark", children: "Dark" })
                ]
              }
            )
          ] }, "theme")
        ],
        /* @__PURE__ */ t(ke, {}),
        /* @__PURE__ */ d(
          Je,
          {
            onClick: k(z),
            sx: {
              color: S === "dark" ? "hsl(0, 90%, 65%)" : "error.main"
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
}, jr = 64, hn = 2, qe = ({
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
  gt,
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
), fn = ({
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
  activePath: w,
  onLinkClick: T,
  ...S
}) => {
  const y = f.filter((E) => E.path).slice(0, hn), [z, k] = b.useState(
    null
  ), { userName: v = "User", userAvatar: F, avatarColor: Y } = S, X = { color: u, activeColor: p, activeBackground: A };
  return /* @__PURE__ */ d(
    Ht,
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
        height: `calc(${jr}px + env(safe-area-inset-bottom, 0px))`,
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
            icon: /* @__PURE__ */ t(Or, {}),
            onClick: e,
            active: r,
            haspopup: "dialog",
            testId: "mobile-nav-menu",
            ...X
          }
        ),
        y.map((E) => /* @__PURE__ */ t(
          qe,
          {
            label: E.text,
            icon: E.icon,
            onClick: () => T == null ? void 0 : T(E.path),
            active: Ie(E, w),
            isPage: !0,
            testId: `mobile-nav-link-${E.text}`,
            ...X
          },
          E.path
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
            icon: /* @__PURE__ */ t(Ar, {}),
            onClick: o,
            active: n,
            haspopup: "dialog",
            testId: "mobile-nav-search",
            ...X
          }
        ),
        l && /* @__PURE__ */ d(Fe, { children: [
          /* @__PURE__ */ t(
            qe,
            {
              label: "Account",
              ariaLabel: `Account menu for ${v}`,
              icon: /* @__PURE__ */ t(
                Kr,
                {
                  name: v,
                  avatar: F,
                  color: Y,
                  size: 26
                }
              ),
              onClick: (E) => k(E.currentTarget),
              active: !!z,
              haspopup: "menu",
              testId: "mobile-nav-account",
              ...X
            }
          ),
          /* @__PURE__ */ t(
            Gr,
            {
              anchorEl: z,
              onClose: () => k(null),
              placement: "above-end",
              width: 280,
              ...S
            }
          )
        ] })
      ]
    }
  );
}, pn = ({
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
      me,
      {
        direction: "row",
        spacing: 1,
        "data-testid": "mobile-search-sheet",
        sx: { alignItems: "center" },
        children: [
          /* @__PURE__ */ t(m, { sx: { flex: "1 1 auto", minWidth: 0 }, children: o }),
          /* @__PURE__ */ t(
            _r,
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
), mn = ({
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
    children: /* @__PURE__ */ d(Lo, { sx: { minHeight: `${e}px !important`, gap: 1, px: 1 }, children: [
      r && /* @__PURE__ */ t(
        re,
        {
          "aria-label": "Open navigation menu",
          onClick: r,
          sx: { color: s },
          children: /* @__PURE__ */ t(Or, {})
        }
      ),
      /* @__PURE__ */ t(
        xt,
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
), Xr = ({
  count: e,
  onClick: r,
  color: o,
  hoverColor: n,
  tooltipPlacement: a,
  testId: c
}) => {
  const s = e ? `Notifications, ${e} unread` : "Notifications";
  return /* @__PURE__ */ t(Z, { title: s, placement: a, arrow: !0, children: /* @__PURE__ */ t(
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
        zo,
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
          children: /* @__PURE__ */ t(Nr, {})
        }
      )
    }
  ) });
}, xn = ({
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
    userAvatar: A
  } = a, f = b.useRef(null), [w, T] = b.useState(
    null
  ), S = !!w;
  if (!s && !n)
    return null;
  const y = {
    "&.Mui-focusVisible": { outline: "2px solid", outlineColor: r }
  };
  return /* @__PURE__ */ d(Fe, { children: [
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
            Z,
            {
              title: e ? u : "",
              placement: "right",
              arrow: !0,
              children: /* @__PURE__ */ t(
                gt,
                {
                  onClick: () => T(f.current),
                  "aria-label": `Account menu for ${u}`,
                  "aria-haspopup": "menu",
                  "aria-expanded": S,
                  "data-testid": "sidebar-user",
                  sx: {
                    flex: e ? "0 0 auto" : "1 1 auto",
                    minWidth: 0,
                    gap: 1.25,
                    p: e ? 0.5 : "6px 8px",
                    justifyContent: "flex-start",
                    borderRadius: "8px",
                    color: r,
                    bgcolor: S ? o : "transparent",
                    "&:hover": { bgcolor: o },
                    ...y
                  },
                  children: /* @__PURE__ */ t(
                    Pr,
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
            Xr,
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
      Gr,
      {
        anchorEl: w,
        onClose: () => T(null),
        placement: e ? "beside" : "above",
        width: e || (z = f.current) == null ? void 0 : z.clientWidth,
        ...a
      }
    )
  ] });
}, gn = 'input, textarea, [contenteditable="true"]', Er = (e) => {
  var r;
  (r = e == null ? void 0 : e.querySelector(gn)) == null || r.focus();
}, bn = ({
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
    r === "full" && n && (Er(l.current), a == null || a());
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
        /* @__PURE__ */ t(Z, { title: "Search", placement: "right", arrow: !0, children: /* @__PURE__ */ t(
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
            children: /* @__PURE__ */ t(Ar, {})
          }
        ) }),
        /* @__PURE__ */ t(
          Bo,
          {
            open: !!h,
            anchorEl: h,
            onClose: () => u(null),
            anchorOrigin: { vertical: "top", horizontal: "right" },
            transformOrigin: { vertical: "top", horizontal: "left" },
            TransitionProps: {
              onEntered: (p) => Er(p)
            },
            slotProps: { paper: { sx: { ml: 1, p: 1.5, width: 360 } } },
            children: e
          }
        )
      ]
    }
  );
}, Sn = 100, wr = 80, zt = 56, En = 300, vr = 288, yr = 72, Rr = "lumora:sidebar-collapsed", Ir = "width 200ms ease, left 200ms ease", wn = 68, vn = { xs: 2, md: 5 }, yn = () => typeof navigator < "u" && /Mac|iPhone|iPad/.test(navigator.platform || navigator.userAgent), Rn = (e, r) => {
  const o = (n) => typeof n == "number" ? r.spacing(n) : n;
  return typeof e == "object" ? Object.fromEntries(
    Object.entries(e).map(([n, a]) => [n, o(a)])
  ) : o(e);
}, gi = ({
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
  contentPadding: w = vn,
  userMenuItems: T,
  sidebarBackgroundColor: S,
  sidebarHeaderBackgroundColor: y,
  groupAccentColor: z,
  activeSidebarForegroundColor: k,
  enableRefreshToken: v = !1,
  activePath: F,
  onLinkClick: Y,
  showProfile: X = !0,
  userName: E,
  userRole: Ce,
  userAvatar: xe,
  onLogout: O,
  showSettings: M = !0,
  onSettingsClick: W,
  showNotifications: D = !0,
  notificationCount: ue = 0,
  NotificationSidebarContent: ge,
  onVerify: B,
  alertProps: P,
  style: bt,
  sidebarStyles: G,
  contentStyles: tt,
  accentColor: St,
  sidebarAccentColor: oe,
  sidebarForegroundColor: Te,
  contentBackgroundColor: se,
  theme: be = "light",
  showThemeToggler: _e = !1,
  onThemeToggle: Et,
  GlobalChatSidebar: ne,
  useChatSidebar: Me,
  chatPanelMode: Se = "floating",
  chatPanelPosition: He = "right",
  chatPanelWidth: Oe = 420,
  onChatClose: rt,
  showAssistant: Ee = !1,
  assistantPlacement: Ue = "sidebar",
  assistantShortcut: $e = "j",
  onAssistantClick: he,
  assistantActive: Ke = !1,
  assistantBusy: ot = !1,
  customNavbar: nt,
  customNavbarProps: it,
  redirectToLogin: we,
  apiBaseUrl: Pe
}) => {
  const at = po(), Q = mo(at.breakpoints.down("md")), st = or(
    () => Tr(Jo(be)),
    [be]
  ), ve = be === "dark", i = St ?? "#01584f", g = oe ?? i, _ = se ?? (ve ? "hsl(220, 35%, 9%)" : "#f2f9fc"), x = s === "collapsible", R = s === "rail-labeled", L = x || R, j = S ?? (ve ? "hsl(220, 30%, 7%)" : "#ffffff"), H = y ?? j, $ = Te ?? (ve ? "#ffffff" : g), Ae = z ?? kt($), lt = y ? Bt(H) : $, Ut = (I) => /* @__PURE__ */ t(
    ee,
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
  ), wt = f ?? lt, $t = u ?? Ut(wt), Vr = u ?? Ut(f ?? $), [Ge, Yr] = Re(
    () => zr(Rr) ?? !1
  ), Kt = (I) => {
    Yr(I), Br(Rr, I);
  }, [qr, Pt] = Re(!1), Jr = fo(() => Pt(!1), []);
  let ie = 0;
  a && !Q && (R ? ie = wr : x ? ie = Ge ? yr : vr : ie = Sn);
  const [Gt, ye] = Re(!1), [jt, vt] = Re(!1), V = Q && l === "bottom-bar", Xt = `calc(${jr}px + env(safe-area-inset-bottom, 0px))`, [Zr, yt] = Re(!1), [Qr, eo] = Re(!0), [to, ro] = Re(!1), Rt = Me == null ? void 0 : Me(), Vt = (Rt == null ? void 0 : Rt.isOpen) ?? !1, Yt = Se === "inline" && Vt && !!ne, ct = Ot(B), qt = Ot(!1), Jt = or(
    () => qo(Pe),
    [Pe]
  );
  ut(() => {
    ct.current = B;
  }, [B]);
  const It = Ot(he);
  It.current = he;
  const je = Ee && $e ? $e.toLowerCase() : null;
  ut(() => {
    if (!je)
      return;
    const I = (K) => {
      (K.metaKey || K.ctrlKey) && !K.altKey && !K.shiftKey && K.key.toLowerCase() === je && It.current && (K.preventDefault(), It.current());
    };
    return window.addEventListener("keydown", I), () => window.removeEventListener("keydown", I);
  }, [je]);
  const oo = (I) => {
    const K = O(I);
    K instanceof Promise && K.catch((fe) => {
      console.error("Error in logout handler:", fe);
    });
  };
  if (ut(() => {
    (() => {
      var K;
      try {
        const { isAuthenticated: fe } = Vo();
        if (!fe) {
          console.log("No session found, redirecting to login"), et(), we();
          return;
        }
        if (!qt.current) {
          const { user: Ve, error: _t } = Yo();
          if (Ve && !_t) {
            const so = {
              name: Ve.name || "",
              email: Ve.email || "",
              profilePicture: Ve.profilePicture || "",
              role: Ve.role || ""
            };
            qt.current = !0, (K = ct.current) == null || K.call(ct, so);
          } else
            _t && console.error("Error getting user data:", _t);
        }
        ro(!0);
      } catch (fe) {
        console.error("Error checking session:", fe), et(), we();
      } finally {
        eo(!1);
      }
    })();
  }, [we]), ut(() => {
    v && Zo(Jt, we);
  }, [v, Jt]), Qr)
    return /* @__PURE__ */ t(rr, { theme: st, children: /* @__PURE__ */ d(
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
            xo,
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
  if (!to)
    return null;
  const Xe = A ?? (nt ? /* @__PURE__ */ t(nt, { ...it }) : null), Zt = ge && (() => {
    ye(!1), vt(!1), yt(!0);
  }), Qt = {
    avatarColor: g,
    menuItems: T,
    showNotifications: D,
    notificationCount: ue,
    onNotificationsClick: Zt,
    showProfile: X,
    userName: E,
    userRole: Ce,
    userAvatar: xe,
    showSettings: M,
    onSettingsClick: W,
    showThemeToggler: _e,
    theme: be,
    onThemeToggle: Et,
    onLogout: oo
  }, Ct = (I) => /* @__PURE__ */ t(
    xn,
    {
      ...Qt,
      compact: I,
      color: $,
      hoverColor: Ae
    }
  ), er = je ? [yn() ? "⌘" : "Ctrl", je.toUpperCase()] : void 0, no = (I) => Ee && Ue === "sidebar" ? /* @__PURE__ */ t(
    pr,
    {
      variant: I ? "sidebar-icon" : "sidebar",
      onClick: he,
      active: Ke,
      busy: ot,
      shortcutKeys: er,
      accentColor: $
    }
  ) : null, io = (I) => Xe ? /* @__PURE__ */ t(
    bn,
    {
      search: Xe,
      mode: I,
      onExpand: () => {
        Kt(!1), Pt(!0);
      },
      autoFocus: qr,
      onAutoFocused: Jr,
      color: $,
      hoverColor: Ae
    }
  ) : null, Tt = (I) => {
    const K = no(I !== "full"), fe = io(I);
    return K || fe ? /* @__PURE__ */ d(
      So,
      {
        spacing: 1.5,
        sx: { alignItems: I === "full" ? "stretch" : "center" },
        children: [
          K,
          fe
        ]
      }
    ) : void 0;
  }, ao = Rn(
    w,
    at
  );
  return /* @__PURE__ */ t(rr, { theme: st, children: /* @__PURE__ */ d(
    ee,
    {
      sx: {
        display: "flex",
        minHeight: "100vh",
        ...bt
      },
      children: [
        /* @__PURE__ */ t(go, {}),
        Q && /* @__PURE__ */ t(
          mn,
          {
            height: zt,
            onMenuClick: a && !V ? () => ye(!0) : void 0,
            appName: n,
            logo: $t,
            onBrandClick: p,
            background: H,
            color: lt,
            brandColor: wt,
            endContent: D ? /* @__PURE__ */ t(
              Xr,
              {
                count: ue,
                onClick: Zt,
                color: lt,
                hoverColor: Ae,
                tooltipPlacement: "bottom",
                testId: "mobile-notifications"
              }
            ) : void 0
          }
        ),
        a && !Q && L && /* @__PURE__ */ d(
          ee,
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
              bgcolor: x ? j : void 0,
              borderRight: "1px solid",
              borderColor: "divider",
              transition: Ir,
              ...G
            },
            children: [
              /* @__PURE__ */ t(
                hr,
                {
                  mainLinks: r,
                  secondaryLinks: o,
                  activePath: F,
                  onLinkClick: Y,
                  showHeaderBar: x,
                  logo: $t,
                  title: n,
                  onBrandClick: p,
                  brandColor: wt,
                  headerBackgroundColor: x ? H : void 0,
                  headerForegroundColor: x ? lt : void 0,
                  activeAccentColor: g,
                  groupAccentColor: z,
                  activeForegroundColor: k,
                  foregroundColor: Te,
                  surfaceBackgroundColor: j,
                  collapsed: R ? !0 : Ge,
                  onCollapsedChange: R ? void 0 : Kt,
                  showLabels: R,
                  expandedWidth: vr,
                  collapsedWidth: R ? wr : yr,
                  topContent: Tt(
                    R ? "popover" : Ge ? "expand" : "full"
                  ),
                  footer: Ct(
                    R || Ge
                  )
                }
              ),
              x && (P == null ? void 0 : P.show) && !Ge && /* @__PURE__ */ t(Lt, { ...P })
            ]
          }
        ),
        a && !Q && !L && /* @__PURE__ */ t(
          nr,
          {
            variant: "permanent",
            sx: {
              width: ie,
              flexShrink: 0,
              zIndex: 2,
              "& .MuiDrawer-paper": {
                width: ie,
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
                        xt,
                        {
                          logo: Vr,
                          appName: n,
                          onClick: p,
                          color: f ?? $,
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
                          cn,
                          {
                            mainLinks: r,
                            secondaryLinks: o,
                            activePath: F,
                            onLinkClick: Y,
                            accentColor: g,
                            surfaceBackgroundColor: _,
                            railShowTitles: c
                          }
                        ),
                        (P == null ? void 0 : P.show) && /* @__PURE__ */ t(Lt, { ...P })
                      ]
                    }
                  ),
                  /* @__PURE__ */ t(ee, { sx: { py: 1.5 }, children: Ct(!0) })
                ]
              }
            )
          }
        ),
        a && Q && /* @__PURE__ */ d(
          bo,
          {
            anchor: V ? "bottom" : "left",
            open: Gt,
            onOpen: () => ye(!0),
            onClose: () => ye(!1),
            disableSwipeToOpen: !0,
            sx: { zIndex: (I) => I.zIndex.drawer + 1 },
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
                hr,
                {
                  mainLinks: r,
                  secondaryLinks: o,
                  activePath: F,
                  onLinkClick: (I) => {
                    Y == null || Y(I), ye(!1);
                  },
                  onLinkAction: () => ye(!1),
                  collapsed: !1,
                  expandedWidth: V ? "100%" : En,
                  activeAccentColor: g,
                  groupAccentColor: z,
                  activeForegroundColor: k,
                  foregroundColor: Te,
                  surfaceBackgroundColor: j,
                  topInsetPx: V ? 8 : 0,
                  topContent: V ? void 0 : Tt("full"),
                  footer: V ? void 0 : Ct(!1)
                }
              ),
              (P == null ? void 0 : P.show) && /* @__PURE__ */ t(Lt, { ...P })
            ]
          }
        ),
        V && Xe && /* @__PURE__ */ t(
          pn,
          {
            open: jt,
            onClose: () => vt(!1),
            search: Xe
          }
        ),
        V && /* @__PURE__ */ t(
          fn,
          {
            ...Qt,
            pinnedLinks: h,
            activePath: F,
            onLinkClick: Y,
            onMenuClick: a ? () => ye(!0) : void 0,
            menuOpen: Gt,
            onSearchClick: Xe ? () => vt(!0) : void 0,
            searchOpen: jt,
            showAssistant: Ee,
            onAssistantClick: he,
            assistantActive: Ke,
            showProfile: X,
            background: j,
            color: $,
            activeColor: g,
            activeBackground: Ae
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
              "--lumora-sticky-top": Q ? `${zt}px` : "0px",
              p: "var(--lumora-content-padding)",
              width: ie ? `calc(100% - ${ie}px)` : "100%",
              transition: Ir,
              mt: Q ? `${zt}px` : 0,
              // Keep the last content clear of the bottom bar
              ...V && {
                pb: `calc(var(--lumora-content-padding) + ${Xt})`
              },
              backgroundColor: _,
              ...tt
            },
            children: Se === "inline" ? /* @__PURE__ */ d(At, { container: !0, spacing: 3, children: [
              /* @__PURE__ */ t(
                At,
                {
                  size: {
                    xs: 12,
                    md: Yt ? 8.5 : 12
                  },
                  sx: {
                    display: "flex",
                    flexDirection: "column"
                  },
                  children: e
                }
              ),
              Yt && ne && /* @__PURE__ */ t(
                At,
                {
                  size: { xs: 12, md: 3.5 },
                  sx: {
                    display: "flex",
                    flexDirection: "column",
                    // Sticks in view and fills the viewport minus the
                    // main area's 24px padding above and below
                    position: {
                      xs: "static",
                      md: "sticky"
                    },
                    top: { xs: "auto", md: "24px" },
                    alignSelf: "flex-start",
                    height: {
                      xs: "auto",
                      md: "calc(100vh - 48px)"
                    },
                    maxHeight: {
                      xs: "none",
                      md: "calc(100vh - 48px)"
                    }
                  },
                  children: /* @__PURE__ */ t(ne, {})
                }
              )
            ] }) : e
          }
        ),
        Se === "floating" && ne && /* @__PURE__ */ t(
          en,
          {
            open: Vt,
            position: He,
            width: Oe,
            sidebarWidthPx: ie,
            bottomOffsetPx: Ee && Ue === "floating" ? wn : 0,
            fullScreen: Q,
            fullScreenBottom: V ? Xt : "0px",
            onClose: rt,
            children: /* @__PURE__ */ t(ne, {})
          }
        ),
        Ee && Ue === "floating" && !V && /* @__PURE__ */ t(
          pr,
          {
            variant: "floating",
            shortcutKeys: er,
            onClick: he,
            active: Ke,
            busy: ot
          }
        ),
        D && ge && /* @__PURE__ */ t(
          nr,
          {
            anchor: "right",
            open: Zr,
            onClose: () => yt(!1),
            slotProps: {
              paper: { sx: { width: 380, maxWidth: "100vw" } }
            },
            children: /* @__PURE__ */ t(
              ge,
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
  C as AuthError,
  hr as CollapsibleSidebar,
  mi as FullBleedSection,
  jo as Kbd,
  gi as LumoraWrapper,
  et as clearAuthTokens,
  gi as default,
  xi as getAuthErrorMessage,
  Qe as getAuthTokens,
  Yo as getCurrentUser,
  Jo as getDesignTokens,
  Vo as isAuthenticated,
  Mt as logAuthError,
  Fr as storeAuthTokens
};
