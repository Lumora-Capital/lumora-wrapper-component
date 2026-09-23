import { jsx as t, jsxs as c, Fragment as he } from "react/jsx-runtime";
import Ir from "@mui/icons-material/KeyboardArrowDownRounded";
import Tr from "@mui/icons-material/KeyboardArrowUpRounded";
import bt from "@mui/icons-material/MenuRounded";
import x from "@mui/material/Box";
import rt from "@mui/material/Collapse";
import We from "@mui/material/Divider";
import ue from "@mui/material/IconButton";
import xe from "@mui/material/ListItemButton";
import Q from "@mui/material/ListItemIcon";
import ee from "@mui/material/ListItemText";
import q from "@mui/material/Stack";
import se from "@mui/material/Tooltip";
import ne from "@mui/material/Typography";
import { useTheme as vt, createTheme as tr, alpha as Te, ThemeProvider as Dt } from "@mui/material/styles";
import * as S from "react";
import { useMemo as Nt, useState as Oe, useCallback as Or, useRef as Wt, useEffect as xt } from "react";
import wt from "@mui/material/ButtonBase";
import { useTheme as _r, useMediaQuery as Ar, Box as oe, CircularProgress as Cr, CssBaseline as Dr, Drawer as Ft, Grid as mt } from "@mui/material";
import zt from "axios";
import Nr from "@mui/material/Card";
import Wr from "@mui/material/CardContent";
import Fr from "@mui/material/Button";
import zr from "@mui/icons-material/AutoAwesomeRounded";
import Bt from "@mui/icons-material/ExpandLess";
import Mt from "@mui/icons-material/ExpandMore";
import Br from "@mui/material/ListSubheader";
import tt from "@mui/material/MenuItem";
import Mr from "@mui/material/MenuList";
import Lr from "@mui/material/Paper";
import Hr from "@mui/material/Popper";
import Ur from "@mui/material/Drawer";
import Kr from "@mui/material/AppBar";
import $r from "@mui/material/Toolbar";
import Gr from "@mui/icons-material/DarkModeOutlined";
import Pr from "@mui/icons-material/LogoutRounded";
import jr from "@mui/icons-material/NotificationsOutlined";
import Xr from "@mui/icons-material/SettingsOutlined";
import kr from "@mui/icons-material/UnfoldMoreRounded";
import Vr from "@mui/material/Avatar";
import Yr from "@mui/material/Badge";
import Jr from "@mui/material/Menu";
import Zr from "@mui/material/Switch";
import qr from "@mui/icons-material/SearchRounded";
import Qr from "@mui/material/Popover";
const ot = ({
  logo: e,
  title: r,
  appName: o,
  onClick: s,
  color: a,
  testId: d
}) => {
  const l = {
    alignItems: "center",
    gap: 1,
    minWidth: 0,
    flexShrink: 0,
    color: a,
    // Consumer SVG logos pick up the brand color
    "& svg": { color: "inherit", fill: "currentColor" }
  }, i = /* @__PURE__ */ c(he, { children: [
    r ? /* @__PURE__ */ t(
      ne,
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
  return s ? /* @__PURE__ */ t(
    wt,
    {
      onClick: s,
      "aria-label": `${o} home`,
      "data-testid": d,
      focusRipple: !0,
      sx: {
        ...l,
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
      children: i
    }
  ) : /* @__PURE__ */ t(q, { direction: "row", "data-testid": d, sx: l, children: i });
}, Ee = (e) => {
  var r;
  return !!((r = e.subitems) != null && r.length);
}, Ne = (e, r) => e ? `${e}/${r.text}` : r.text, me = (e, r) => {
  var o;
  return r ? e.path && r === e.path ? !0 : ((o = e.subitems) == null ? void 0 : o.some((s) => me(s, r))) ?? !1 : !1;
}, ce = (e, r) => !!(r && e.path === r), rr = (e, r) => (e ?? []).flatMap((o) => {
  const s = o.icon ?? r;
  return Ee(o) ? rr(o.subitems, s) : o.path ? [{ sub: o, icon: s }] : [];
}), nt = (e) => {
  const r = or(e);
  if (!r)
    return "#ffffff";
  const [o, s, a] = r.map((l) => {
    const i = l / 255;
    return i <= 0.03928 ? i / 12.92 : ((i + 0.055) / 1.055) ** 2.4;
  });
  return 0.2126 * o + 0.7152 * s + 0.0722 * a > 0.5 ? "#0b1f1c" : "#ffffff";
}, st = (e) => {
  const r = or(e);
  if (!r)
    return "rgba(1, 88, 79, 0.12)";
  const [o, s, a] = r;
  return `rgba(${o}, ${s}, ${a}, 0.14)`;
}, or = (e) => {
  let r = e.trim().replace(/^#/, "");
  if (r.length === 3 && (r = r.split("").map((s) => s + s).join("")), r.length !== 6 || /[^0-9a-fA-F]/.test(r))
    return null;
  const o = parseInt(r, 16);
  return [o >> 16 & 255, o >> 8 & 255, o & 255];
}, nr = () => typeof window < "u" && !!window.localStorage, sr = (e) => {
  if (!nr())
    return null;
  try {
    const r = window.localStorage.getItem(e);
    return r === null ? null : r === "true";
  } catch (r) {
    return console.warn("Failed to read sidebar collapsed state:", r), null;
  }
}, ir = (e, r) => {
  if (nr())
    try {
      window.localStorage.setItem(e, r ? "true" : "false");
    } catch (o) {
      console.warn("Failed to persist sidebar collapsed state:", o);
    }
}, eo = 264, to = 72, ro = "lumora:sidebar-collapsed", oo = "width 200ms ease", Lt = 60, Qe = {
  "&:focus, &:focus-visible": { outline: "none" }
}, no = 16, so = 14, io = 4, ao = 2.5, Ht = "0.7rem", Ut = 22, _e = ({ text: e, variant: r = "body1", center: o = !1, fontSize: s }) => {
  const a = S.useRef(null), [d, l] = S.useState(!1), i = S.useCallback(() => {
    const h = a.current;
    h && l(h.scrollWidth > h.clientWidth + 0.5);
  }, []);
  return S.useLayoutEffect(() => {
    i();
  }, [i, e]), S.useEffect(() => {
    const h = a.current;
    if (!h)
      return;
    const b = new ResizeObserver(() => i());
    return b.observe(h), () => b.disconnect();
  }, [i]), /* @__PURE__ */ t(
    se,
    {
      title: e,
      placement: "right",
      arrow: !0,
      enterDelay: 400,
      disableHoverListener: !d,
      disableFocusListener: !d,
      disableTouchListener: !d,
      children: /* @__PURE__ */ t(
        ne,
        {
          ref: a,
          component: "span",
          variant: r,
          sx: {
            display: "block",
            width: o ? "100%" : void 0,
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
            color: "inherit",
            ...s ? { fontSize: s } : {},
            ...o ? { textAlign: "center", lineHeight: 1.1 } : {}
          },
          children: e
        }
      )
    }
  );
}, gt = ({
  open: e,
  size: r = no
}) => e ? /* @__PURE__ */ t(Tr, { sx: { fontSize: r, opacity: 0.75 } }) : /* @__PURE__ */ t(Ir, { sx: { fontSize: r, opacity: 0.75 } }), lo = ({
  mainLinks: e,
  secondaryLinks: r = [],
  activePath: o,
  onLinkClick: s,
  logo: a,
  title: d,
  onBrandClick: l,
  showHeaderBar: i = !1,
  headerBackgroundColor: h,
  headerForegroundColor: b,
  activeAccentColor: u = "#01584f",
  groupAccentColor: D,
  activeForegroundColor: w,
  foregroundColor: m,
  surfaceBackgroundColor: T,
  collapsed: E,
  defaultCollapsed: f = !1,
  onCollapsedChange: O,
  persistKey: p = ro,
  expandedWidth: W = eo,
  collapsedWidth: F = to,
  showLabels: g = !1,
  topInsetPx: $ = 0,
  search: X,
  footer: H
}) => {
  const G = vt(), y = G.palette.mode === "dark", B = E !== void 0, [R, M] = S.useState(
    () => sr(p) ?? f
  ), N = B ? !!E : R, [Fe, it] = S.useState(
    {}
  ), k = w ?? nt(u), ze = {
    bgcolor: u,
    color: k,
    "& .MuiListItemIcon-root": { color: k }
  }, at = {
    bgcolor: u,
    color: k,
    borderRadius: "8px"
  }, V = D ?? st(u), Xe = T ?? (y ? G.palette.background.paper : "#ffffff"), ge = m ?? (y ? "text.primary" : u), be = h ?? Xe, fe = b ?? (h ? nt(be) : m ?? (y ? G.palette.text.primary : u)), ke = st(fe), we = (n) => {
    s == null || s(n);
  }, lt = () => {
    const n = !N;
    B || (M(n), ir(p, n)), O == null || O(n);
  }, Be = (n, v) => {
    it((z) => ({ ...z, [n]: !v }));
  }, ye = (n, v) => Fe[v] ?? me(n, o), Re = (n, v, z) => ({
    color: n ? k : ge,
    bgcolor: n ? u : "transparent",
    "& .MuiListItemIcon-root": {
      color: n ? k : ge,
      minWidth: z
    },
    "&:hover": n || g ? ze : { bgcolor: v }
  }), Se = {
    "&.Mui-selected": {
      bgcolor: u
    },
    "&.Mui-selected:hover": ze
  }, Ve = (n) => {
    const v = ce(n, o);
    return /* @__PURE__ */ c(
      xe,
      {
        disabled: !n.path,
        selected: v,
        onClick: () => n.path && we(n.path),
        "data-testid": `sidebar-item-${n.text}`,
        "data-active": v ? "true" : "false",
        sx: {
          borderRadius: "8px",
          py: 1,
          px: 1.5,
          ...Re(v, V, 36),
          ...Se
        },
        children: [
          /* @__PURE__ */ t(Q, { children: n.icon }),
          /* @__PURE__ */ t(
            ee,
            {
              disableTypography: !0,
              primary: /* @__PURE__ */ t(_e, { text: n.text })
            }
          )
        ]
      },
      n.text
    );
  }, ct = (n) => {
    const v = me(n, o), z = ce(n, o), _ = Ne("", n), L = ye(n, _);
    return /* @__PURE__ */ c(
      x,
      {
        "data-testid": `sidebar-group-${n.text}`,
        sx: {
          borderRadius: "8px",
          bgcolor: v ? V : "transparent"
        },
        children: [
          /* @__PURE__ */ c(
            xe,
            {
              onClick: () => Be(_, L),
              "data-testid": `sidebar-item-${n.text}`,
              "data-active": z ? "true" : "false",
              "aria-expanded": L,
              sx: {
                borderRadius: "8px",
                py: 1,
                px: 1.5,
                ...Re(z, V, 36)
              },
              children: [
                /* @__PURE__ */ t(Q, { children: n.icon }),
                /* @__PURE__ */ t(
                  ee,
                  {
                    disableTypography: !0,
                    primary: /* @__PURE__ */ t(_e, { text: n.text })
                  }
                ),
                /* @__PURE__ */ t(gt, { open: L })
              ]
            }
          ),
          /* @__PURE__ */ t(rt, { in: L, timeout: "auto", unmountOnExit: !0, children: /* @__PURE__ */ t(
            x,
            {
              "data-testid": `sidebar-children-${n.text}`,
              sx: { pb: 0.5 },
              children: n.subitems.map(
                (A) => ie(A, _, 1)
              )
            }
          ) })
        ]
      },
      n.text
    );
  }, ie = (n, v, z) => {
    const _ = Ne(v, n), L = io + (z - 1) * ao;
    if (Ee(n)) {
      const ae = me(n, o), K = ce(n, o), pe = ye(n, _);
      return /* @__PURE__ */ c(x, { "data-testid": `sidebar-group-${n.text}`, children: [
        /* @__PURE__ */ c(
          xe,
          {
            onClick: () => Be(_, pe),
            "data-testid": `sidebar-subitem-${n.text}`,
            "data-active": ae ? "true" : "false",
            "aria-expanded": pe,
            sx: {
              borderRadius: "8px",
              mx: 0.5,
              py: 0.75,
              pl: L,
              ...Re(K, "action.hover", 32)
            },
            children: [
              n.icon ? /* @__PURE__ */ t(Q, { children: n.icon }) : null,
              /* @__PURE__ */ t(
                ee,
                {
                  disableTypography: !0,
                  primary: /* @__PURE__ */ t(_e, { text: n.text })
                }
              ),
              /* @__PURE__ */ t(gt, { open: pe })
            ]
          }
        ),
        /* @__PURE__ */ t(rt, { in: pe, timeout: "auto", unmountOnExit: !0, children: /* @__PURE__ */ t(x, { "data-testid": `sidebar-children-${n.text}`, children: n.subitems.map(
          (Ze) => ie(Ze, _, z + 1)
        ) }) })
      ] }, _);
    }
    const A = ce(n, o);
    return /* @__PURE__ */ c(
      xe,
      {
        selected: A,
        disabled: !n.path,
        onClick: () => n.path && we(n.path),
        "data-testid": `sidebar-subitem-${n.text}`,
        "data-active": A ? "true" : "false",
        sx: {
          borderRadius: "8px",
          mx: 0.5,
          py: 0.75,
          pl: L,
          ...Re(A, "action.hover", 32),
          ...Se
        },
        children: [
          n.icon ? /* @__PURE__ */ t(Q, { children: n.icon }) : null,
          /* @__PURE__ */ t(
            ee,
            {
              disableTypography: !0,
              primary: /* @__PURE__ */ t(_e, { text: n.text })
            }
          )
        ]
      },
      _
    );
  }, Me = (n, v, z, _, L, A) => {
    const ae = !L, K = /* @__PURE__ */ c(
      ue,
      {
        "aria-label": v,
        disabled: ae,
        onClick: L,
        "data-testid": (A == null ? void 0 : A.testId) ?? `sidebar-item-${v}`,
        "data-active": _ ? "true" : "false",
        sx: g ? {
          display: "flex",
          flexDirection: "column",
          gap: 0.25,
          width: "100%",
          maxWidth: "100%",
          height: "auto",
          // 8px padding on all sides of the item container.
          p: 1,
          borderRadius: "8px",
          color: _ ? k : ge,
          bgcolor: _ ? u : "transparent",
          "& .MuiSvgIcon-root": {
            fontSize: Ut
          },
          "&:hover": at,
          ...Qe
        } : {
          // Icon-only collapsed rail (collapsible variant):
          // original hover — accent when active, else a subtle
          // tint; no foreground change.
          width: 44,
          height: 44,
          color: _ ? k : ge,
          bgcolor: _ ? u : "transparent",
          borderRadius: _ ? "8px" : "50%",
          "&:hover": {
            bgcolor: _ ? u : A != null && A.insideGroup ? "action.hover" : V,
            borderRadius: "8px"
          },
          ...Qe
        },
        children: [
          z,
          g ? /* @__PURE__ */ t(
            _e,
            {
              text: v,
              variant: "caption",
              center: !0,
              fontSize: Ht
            }
          ) : null
        ]
      }
    );
    return g ? ae ? /* @__PURE__ */ t("span", { children: K }, n) : /* @__PURE__ */ t(S.Fragment, { children: K }, n) : /* @__PURE__ */ t(se, { title: v, placement: "right", arrow: !0, children: ae ? /* @__PURE__ */ t("span", { children: K }) : K }, n);
  }, Le = (n) => {
    const v = me(n, o), z = ce(n, o), _ = Ne("", n), L = ye(n, _), A = /* @__PURE__ */ c(
      ue,
      {
        "aria-label": n.text,
        "aria-expanded": L,
        onClick: () => Be(_, L),
        "data-testid": `sidebar-item-${n.text}`,
        "data-active": z ? "true" : "false",
        sx: {
          display: "flex",
          flexDirection: "column",
          gap: g ? 0.25 : 0,
          width: g ? "100%" : 44,
          maxWidth: "100%",
          // 8px padding on all sides of the labeled item container.
          ...g ? { p: 1 } : { py: 0.75 },
          borderRadius: "10px",
          color: z ? k : ge,
          bgcolor: z ? u : "transparent",
          // rail-labeled: active AND hover share the highlight. collapsible:
          // original behavior — accent only when active; the outer pill
          // supplies the idle-hover tint, so the button stays transparent.
          "&:hover": g ? { bgcolor: u, color: k } : {
            bgcolor: z ? u : "transparent"
          },
          ...Qe
        },
        children: [
          g ? /* @__PURE__ */ t(
            x,
            {
              sx: {
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                "& .MuiSvgIcon-root": {
                  fontSize: Ut
                }
              },
              children: n.icon
            }
          ) : n.icon,
          g ? /* @__PURE__ */ t(
            _e,
            {
              text: n.text,
              variant: "caption",
              center: !0,
              fontSize: Ht
            }
          ) : null,
          /* @__PURE__ */ t(gt, { open: L, size: so })
        ]
      }
    ), ae = g ? A : /* @__PURE__ */ t(se, { title: n.text, placement: "right", arrow: !0, children: A });
    return /* @__PURE__ */ c(
      x,
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
          bgcolor: v ? V : "transparent",
          ...g ? {} : { "&:hover": { bgcolor: V } }
        },
        children: [
          ae,
          L ? rr(n.subitems, n.icon).map(
            ({ sub: K, icon: pe }) => Me(
              K.path,
              K.text,
              pe,
              ce(K, o),
              () => we(K.path),
              {
                insideGroup: !0,
                testId: `sidebar-subitem-${K.text}`
              }
            )
          ) : null
        ]
      },
      n.text
    );
  }, Ye = (n) => /* @__PURE__ */ t(
    x,
    {
      sx: {
        width: "100%",
        display: "flex",
        justifyContent: "center"
      },
      children: Me(
        n.text,
        n.text,
        n.icon,
        ce(n, o),
        n.path ? () => we(n.path) : void 0
      )
    },
    n.text
  ), ve = (n) => Ee(n) ? N ? Le(n) : ct(n) : N ? Ye(n) : Ve(n), Ie = (n) => /* @__PURE__ */ t(
    q,
    {
      spacing: 0.5,
      sx: {
        width: "100%",
        alignItems: N ? "center" : "stretch"
      },
      children: n.map(ve)
    }
  ), te = N ? F : W, Y = N ? "Expand sidebar" : "Collapse sidebar", Je = N && a ? /* @__PURE__ */ c(he, { children: [
    /* @__PURE__ */ t(x, { className: "toggle-logo", sx: { display: "flex" }, children: a }),
    /* @__PURE__ */ t(bt, { className: "toggle-icon", sx: { display: "none" } })
  ] }) : /* @__PURE__ */ t(bt, {}), He = i ? /* @__PURE__ */ c(
    x,
    {
      "data-testid": "sidebar-header",
      sx: {
        height: Lt,
        minHeight: Lt,
        flexShrink: 0,
        display: "flex",
        alignItems: "center",
        gap: 1.5,
        bgcolor: be,
        borderBottom: `1px solid ${ke}`,
        justifyContent: N ? "center" : "flex-start",
        // Expanded: 20px inset centers the hamburger glyph on the item
        // icon column (16px list padding + 12px row padding + half of
        // the 24px icon = 40px, minus the button's 8px + 12px to its
        // own center). Collapsed: centered like the rail icons.
        px: N ? 0 : 2.5
      },
      children: [
        /* @__PURE__ */ t(se, { title: Y, placement: "right", arrow: !0, children: /* @__PURE__ */ t(
          ue,
          {
            "aria-label": Y,
            "aria-expanded": !N,
            onClick: lt,
            "data-testid": "sidebar-collapse-toggle",
            disableFocusRipple: !0,
            sx: {
              color: fe,
              "& svg": { color: "inherit", fill: "currentColor" },
              "&:hover, &.Mui-focusVisible": {
                "& .toggle-logo": { display: "none" },
                "& .toggle-icon": { display: "block" }
              },
              ...Qe
            },
            children: Je
          }
        ) }),
        !N && (a || d) ? /* @__PURE__ */ t(
          ot,
          {
            logo: a,
            title: d,
            appName: d || "App",
            onClick: l,
            color: fe,
            testId: "sidebar-header-brand"
          }
        ) : null
      ]
    }
  ) : null, Ue = !i && a ? /* @__PURE__ */ t(
    x,
    {
      sx: {
        display: "flex",
        justifyContent: "center",
        flexShrink: 0,
        pt: 2,
        pb: 1
      },
      children: /* @__PURE__ */ t(
        ot,
        {
          logo: a,
          appName: d || "App",
          onClick: l,
          color: fe,
          testId: "sidebar-header-brand"
        }
      )
    }
  ) : null, re = g ? 0.5 : N ? 1 : 2;
  return /* @__PURE__ */ c(
    x,
    {
      component: "nav",
      "aria-label": "Main sidebar",
      "data-testid": "collapsible-sidebar",
      "data-collapsed": N ? "true" : "false",
      "data-labeled": g ? "true" : "false",
      sx: {
        width: te,
        minWidth: te,
        height: "100%",
        boxSizing: "border-box",
        bgcolor: Xe,
        display: "flex",
        flexDirection: "column",
        // Lets the sidebar shrink inside a flex-column host so siblings
        // (e.g. an alert card below it) stay within the viewport.
        flex: "1 1 auto",
        minHeight: 0,
        overflow: "hidden",
        transition: oo
      },
      children: [
        He ?? Ue,
        X ? /* @__PURE__ */ t(x, { sx: { flexShrink: 0, px: re, pt: 1.5 }, children: X }) : null,
        /* @__PURE__ */ c(
          x,
          {
            sx: {
              flex: "1 1 auto",
              minHeight: 0,
              display: "flex",
              flexDirection: "column",
              overflowY: "auto",
              overflowX: "hidden",
              px: re,
              pt: $ && !i ? `${$}px` : 1,
              pb: 2
            },
            children: [
              Ie(e),
              r.length > 0 ? /* @__PURE__ */ c(x, { sx: { mt: "auto", pt: 2 }, children: [
                /* @__PURE__ */ t(We, { sx: { mb: 1, borderColor: "divider" } }),
                Ie(r)
              ] }) : null
            ]
          }
        ),
        H ? /* @__PURE__ */ t(
          x,
          {
            sx: {
              flexShrink: 0,
              px: re,
              py: 1.5,
              borderTop: `1px solid ${ke}`
            },
            children: H
          }
        ) : null
      ]
    }
  );
};
class I extends Error {
  constructor(r, o, s = null) {
    super(r), this.name = "AuthError", this.code = o, this.originalError = s, this.timestamp = (/* @__PURE__ */ new Date()).toISOString();
  }
}
const C = {
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
}, de = {
  ACCESS_TOKEN: "accessToken",
  REFRESH_TOKEN: "refreshToken",
  USER: "user"
}, co = () => {
  if (!(typeof window > "u" || !window.localStorage))
    try {
      const e = localStorage.getItem(
        de.ACCESS_TOKEN
      ), r = localStorage.getItem(
        de.REFRESH_TOKEN
      ), o = localStorage.getItem(de.USER);
      e && !localStorage.getItem(U.ACCESS_TOKEN) && localStorage.setItem(U.ACCESS_TOKEN, e), r && !localStorage.getItem(U.REFRESH_TOKEN) && localStorage.setItem(
        U.REFRESH_TOKEN,
        r
      ), o && !localStorage.getItem(U.USER) && localStorage.setItem(U.USER, o), (e || r || o) && (localStorage.removeItem(de.ACCESS_TOKEN), localStorage.removeItem(de.REFRESH_TOKEN), localStorage.removeItem(de.USER));
    } catch (e) {
      console.warn("Failed to migrate legacy localStorage keys:", e);
    }
}, St = (e) => {
  try {
    if (typeof window > "u")
      return console.warn("localStorage access attempted on server side"), null;
    if (!window.localStorage)
      throw new I(
        "localStorage is not available",
        C.STORAGE_ACCESS_DENIED
      );
    return window.localStorage.getItem(e);
  } catch (r) {
    throw r.name === "QuotaExceededError" ? (console.error("Storage quota exceeded"), new I(
      "Storage quota exceeded. Please clear browser data.",
      C.STORAGE_ACCESS_DENIED,
      r
    )) : r.name === "SecurityError" ? (console.error(
      "localStorage access denied (private browsing or security settings)"
    ), new I(
      "Access to localStorage is denied. Please check browser settings.",
      C.STORAGE_ACCESS_DENIED,
      r
    )) : (console.error(
      "Unexpected error accessing localStorage:",
      r.name
    ), new I(
      "Failed to access storage",
      C.STORAGE_ACCESS_DENIED,
      r
    ));
  }
}, Et = (e, r) => {
  try {
    if (typeof window > "u")
      return console.warn("localStorage write attempted on server side"), !1;
    if (!window.localStorage)
      throw new I(
        "localStorage is not available",
        C.STORAGE_ACCESS_DENIED
      );
    return window.localStorage.setItem(e, r), !0;
  } catch (o) {
    throw o.name === "QuotaExceededError" ? (console.error("Storage quota exceeded"), new I(
      "Storage quota exceeded. Please clear browser data.",
      C.STORAGE_ACCESS_DENIED,
      o
    )) : o.name === "SecurityError" ? (console.error(
      "localStorage write denied (private browsing or security settings)"
    ), new I(
      "Access to localStorage is denied. Please check browser settings.",
      C.STORAGE_ACCESS_DENIED,
      o
    )) : (console.error(
      "Unexpected error writing to localStorage:",
      o.name
    ), new I(
      "Failed to write to storage",
      C.STORAGE_ACCESS_DENIED,
      o
    ));
  }
}, ar = (e) => {
  try {
    return typeof window > "u" ? (console.warn("localStorage removal attempted on server side"), !1) : window.localStorage ? (window.localStorage.removeItem(e), !0) : (console.warn("localStorage is not available"), !1);
  } catch (r) {
    return r.name !== "SecurityError" && console.warn(`Could not remove localStorage key "${e}"`), !1;
  }
}, Pe = () => {
  try {
    co();
    const e = St(U.ACCESS_TOKEN), r = St(U.REFRESH_TOKEN), o = St(U.USER);
    let s = null;
    if (o)
      try {
        s = JSON.parse(o);
      } catch {
        o && o !== "null" && o !== "undefined" && console.warn(
          "Invalid user data in localStorage, clearing:",
          o.substring(0, 50)
        ), ar(U.USER);
      }
    return {
      accessToken: e,
      refreshToken: r,
      user: s
    };
  } catch (e) {
    throw e instanceof I ? e : new I(
      "Failed to retrieve authentication tokens",
      C.UNKNOWN_ERROR,
      e
    );
  }
}, ho = () => {
  try {
    const { accessToken: e, refreshToken: r } = Pe();
    return !(e || r) ? {
      isAuthenticated: !1,
      error: new I(
        "No authentication tokens found",
        C.TOKEN_NOT_FOUND
      )
    } : {
      isAuthenticated: !0,
      error: null
    };
  } catch (e) {
    return console.error("Authentication check failed:", e), {
      isAuthenticated: !1,
      error: e instanceof I ? e : new I(
        "Authentication check failed",
        C.UNKNOWN_ERROR,
        e
      )
    };
  }
}, lr = (e, r, o = null) => {
  try {
    if (!e && !r)
      throw new I(
        "At least one token must be provided",
        C.TOKEN_INVALID
      );
    return e && Et(U.ACCESS_TOKEN, e), r && Et(U.REFRESH_TOKEN, r), o && Et(U.USER, JSON.stringify(o)), {
      success: !0,
      error: null
    };
  } catch (s) {
    return console.error("Failed to store authentication tokens:", s), {
      success: !1,
      error: s instanceof I ? s : new I(
        "Failed to store tokens",
        C.UNKNOWN_ERROR,
        s
      )
    };
  }
}, je = () => {
  try {
    return [
      U.ACCESS_TOKEN,
      U.REFRESH_TOKEN,
      U.USER,
      // Also clear legacy keys for complete cleanup
      de.ACCESS_TOKEN,
      de.REFRESH_TOKEN,
      de.USER
    ].map((s) => ar(s)).every((s) => s) || console.warn("Some tokens could not be removed from localStorage"), {
      success: !0,
      error: null
    };
  } catch (e) {
    return console.error("Failed to clear authentication tokens:", e), {
      success: !1,
      error: e instanceof I ? e : new I(
        "Failed to clear tokens",
        C.LOGOUT_FAILED,
        e
      )
    };
  }
}, uo = () => {
  try {
    const { user: e } = Pe();
    return {
      user: e,
      error: null
    };
  } catch (e) {
    return console.error("Failed to get current user:", e), {
      user: null,
      error: e instanceof I ? e : new I(
        "Failed to retrieve user data",
        C.UNKNOWN_ERROR,
        e
      )
    };
  }
}, yn = (e) => {
  if (!(e instanceof I))
    return "An unexpected error occurred. Please try again.";
  switch (e.code) {
    case C.STORAGE_ACCESS_DENIED:
      return "Unable to access browser storage. Please check your browser settings and disable private browsing if enabled.";
    case C.TOKEN_NOT_FOUND:
      return "You are not logged in. Please sign in to continue.";
    case C.TOKEN_INVALID:
      return "Your session is invalid. Please sign in again.";
    case C.TOKEN_EXPIRED:
      return "Your session has expired. Please sign in again.";
    case C.LOGOUT_FAILED:
      return "Failed to log out properly. Please clear your browser cache and try again.";
    case C.UNKNOWN_ERROR:
    default:
      return "An unexpected error occurred. Please try again or contact support if the problem persists.";
  }
}, yt = (e, r = "Unknown") => {
  const o = {
    context: r,
    message: e.message,
    code: e instanceof I ? e.code : "UNKNOWN",
    timestamp: e instanceof I ? e.timestamp : (/* @__PURE__ */ new Date()).toISOString(),
    stack: e.stack
  };
  e instanceof I && e.originalError && (o.originalError = {
    name: e.originalError.name,
    message: e.originalError.message
  }), console.warn("[Auth Error]", o);
}, fo = (e) => {
  if (!e)
    throw new Error("API base URL is required to create axios client");
  const r = zt.create({
    baseURL: e,
    headers: {
      "Content-Type": "application/json"
    }
  });
  let o = !1, s = null, a = [];
  const d = (l, i) => {
    a.forEach(({ resolve: h, reject: b }) => {
      l ? b(l) : i && h(i);
    }), a = [];
  };
  return r.interceptors.request.use(
    (l) => {
      const { accessToken: i } = Pe();
      return i && l.headers && (l.headers.Authorization = `Bearer ${i}`), l;
    },
    (l) => Promise.reject(l)
  ), r.interceptors.response.use(
    (l) => l,
    async (l) => {
      var w;
      const i = l.config, h = (w = l.response) == null ? void 0 : w.status, b = (i == null ? void 0 : i.url) || "", u = b.includes("/auth/refresh");
      if (h !== 401 || i._retry || u)
        return Promise.reject(l);
      i._retry = !0;
      const { refreshToken: D } = Pe();
      if (!D) {
        const m = new Error(
          "No refresh token available for token refresh"
        );
        return yt(m, "AxiosClient - Token Refresh"), je(), typeof window < "u" && (window.location.href = "/login"), Promise.reject(l);
      }
      if (o && s)
        return new Promise((m, T) => {
          a.push({ resolve: m, reject: T });
        }).then((m) => {
          const {
            accessToken: T,
            refreshToken: E
          } = m;
          if (i.headers && (i.headers.Authorization = `Bearer ${T}`), b.includes("/auth/logout"))
            try {
              if (typeof i.data == "string") {
                const f = JSON.parse(
                  i.data || "{}"
                );
                f.refresh_token = E, i.data = JSON.stringify(f);
              } else
                i.data && typeof i.data == "object" ? i.data.refresh_token = E : i.data = JSON.stringify({
                  refresh_token: E
                });
            } catch {
              i.data = JSON.stringify({
                refresh_token: E
              });
            }
          return r(i);
        }).catch((m) => Promise.reject(m));
      o = !0, s = zt.post(
        `${e}/auth/refresh`,
        {
          refresh_token: D
        }
      );
      try {
        const m = await s, { accessToken: T, refreshToken: E } = m.data;
        if (lr(T, E, null), d(null, {
          accessToken: T,
          refreshToken: E
        }), i.headers && (i.headers.Authorization = `Bearer ${T}`), b.includes("/auth/logout"))
          try {
            if (typeof i.data == "string") {
              const f = JSON.parse(
                i.data || "{}"
              );
              f.refresh_token = E, i.data = JSON.stringify(f);
            } else
              i.data && typeof i.data == "object" ? i.data.refresh_token = E : i.data = JSON.stringify({
                refresh_token: E
              });
          } catch {
            i.data = JSON.stringify({
              refresh_token: E
            });
          }
        return r(i);
      } catch (m) {
        return yt(
          m,
          "AxiosClient - Token Refresh Failed"
        ), d(m), je(), typeof window < "u" && (window.location.href = "/login"), Promise.reject(m);
      } finally {
        o = !1, s = null;
      }
    }
  ), r;
}, P = {
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
}, j = {
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
}, Ae = {
  300: "hsl(120, 61%, 77%)",
  400: "hsl(120, 44%, 53%)",
  500: "hsl(120, 59%, 30%)",
  700: "hsl(120, 75%, 16%)",
  800: "hsl(120, 84%, 10%)"
}, Ce = {
  300: "hsl(45, 90%, 65%)",
  400: "hsl(45, 90%, 40%)",
  500: "hsl(45, 90%, 35%)",
  700: "hsl(45, 94%, 20%)",
  800: "hsl(45, 95%, 16%)"
}, De = {
  300: "hsl(0, 90%, 65%)",
  400: "hsl(0, 90%, 40%)",
  500: "hsl(0, 90%, 30%)",
  700: "hsl(0, 94%, 18%)",
  800: "hsl(0, 95%, 12%)"
}, cr = tr(), Z = cr.typography.pxToRem, po = (e) => {
  const r = e === "dark", o = [...cr.shadows];
  return o[1] = r ? "hsla(220, 30%, 5%, 0.7) 0px 4px 16px 0px, hsla(220, 25%, 10%, 0.8) 0px 8px 16px -5px" : "hsla(220, 30%, 5%, 0.07) 0px 4px 16px 0px, hsla(220, 25%, 10%, 0.07) 0px 8px 16px -5px", {
    palette: {
      mode: e,
      primary: {
        light: r ? P[300] : P[200],
        main: P[400],
        dark: P[700],
        contrastText: P[50]
      },
      info: r ? {
        light: P[500],
        main: P[700],
        dark: P[900],
        contrastText: P[300]
      } : {
        light: P[100],
        main: P[300],
        dark: P[600],
        contrastText: j[50]
      },
      warning: r ? { light: Ce[400], main: Ce[500], dark: Ce[700] } : { light: Ce[300], main: Ce[400], dark: Ce[800] },
      error: r ? { light: De[400], main: De[500], dark: De[700] } : { light: De[300], main: De[400], dark: De[800] },
      success: r ? { light: Ae[400], main: Ae[500], dark: Ae[700] } : { light: Ae[300], main: Ae[400], dark: Ae[800] },
      grey: j,
      divider: r ? Te(j[700], 0.6) : Te(j[300], 0.4),
      background: r ? { default: j[900], paper: "hsl(220, 30%, 7%)" } : { default: "hsl(0, 0%, 99%)", paper: "hsl(220, 35%, 97%)" },
      text: r ? { primary: "hsl(0, 0%, 100%)", secondary: j[400] } : { primary: j[800], secondary: j[600] },
      action: r ? {
        hover: Te(j[600], 0.2),
        selected: Te(j[600], 0.3)
      } : {
        hover: Te(j[200], 0.2),
        selected: Te(j[200], 0.3)
      }
    },
    typography: {
      fontFamily: "Inter, sans-serif",
      h1: {
        fontSize: Z(48),
        fontWeight: 600,
        lineHeight: 1.2,
        letterSpacing: -0.5
      },
      h2: { fontSize: Z(36), fontWeight: 600, lineHeight: 1.2 },
      h3: { fontSize: Z(30), lineHeight: 1.2 },
      h4: { fontSize: Z(24), fontWeight: 600, lineHeight: 1.5 },
      h5: { fontSize: Z(20), fontWeight: 600 },
      h6: { fontSize: Z(18), fontWeight: 600 },
      subtitle1: { fontSize: Z(18) },
      subtitle2: { fontSize: Z(14), fontWeight: 500 },
      body1: { fontSize: Z(14) },
      body2: { fontSize: Z(14), fontWeight: 400 },
      caption: { fontSize: Z(12), fontWeight: 400 }
    },
    shape: {
      borderRadius: 8
    },
    shadows: o
  };
}, xo = async (e, r) => {
  const { accessToken: o, refreshToken: s } = Pe();
  if (o)
    return !0;
  if (s)
    try {
      const a = await e.post("/auth/refresh", {
        refresh_token: s
      });
      if (a.data.success && a.data.accessToken)
        return lr(
          a.data.accessToken,
          a.data.refreshToken || null,
          null
        ), !0;
    } catch (a) {
      yt(a, "TokenValidator - Refresh Failed");
    }
  return je(), r ? r() : window.location.href = "/login", !1;
}, mo = ({ size: e = 20 }) => /* @__PURE__ */ c(
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
), Kt = 52, $t = 16, go = ({
  onClick: e,
  active: r = !1,
  busy: o = !1
}) => /* @__PURE__ */ t(se, { title: "Nexa", placement: "left", children: /* @__PURE__ */ t(
  ue,
  {
    onClick: e,
    "aria-label": "Toggle Nexa assistant",
    "aria-pressed": r,
    disableFocusRipple: !0,
    "data-testid": "assistant-button",
    sx: {
      position: "fixed",
      right: 24,
      bottom: 24,
      // Above page content, below drawers and menus (1200+)
      zIndex: 1150,
      width: Kt,
      height: Kt,
      p: 0,
      borderRadius: `${$t}px`,
      overflow: "hidden",
      bgcolor: "background.paper",
      boxShadow: 4,
      outline: r ? "2px solid #09C1AE" : "none",
      outlineOffset: 2,
      "&:hover": { bgcolor: "background.paper", boxShadow: 6 },
      "&.Mui-focusVisible": { outline: "2px solid #09C1AE" },
      // Animated "beam" border — rendered ONLY while a chat is ongoing.
      ...o && {
        "&::before": {
          content: '""',
          position: "absolute",
          inset: "-50%",
          background: "conic-gradient(from 0deg, rgba(9, 193, 174, 0.25) 0deg 250deg, #09C1AE 300deg, #0DD4BF 330deg, rgba(9, 193, 174, 0.25) 360deg)",
          animation: "nexa-beam 3s linear infinite",
          zIndex: 0
        },
        // Opaque inner cover so only the ~2px border line is visible
        "&::after": {
          content: '""',
          position: "absolute",
          inset: "2px",
          borderRadius: `${$t - 2}px`,
          bgcolor: "background.paper",
          zIndex: 1
        },
        "@keyframes nexa-beam": {
          to: { transform: "rotate(360deg)" }
        },
        "@media (prefers-reduced-motion: reduce)": {
          "&::before": { animation: "none" }
        }
      }
    },
    children: /* @__PURE__ */ t(
      x,
      {
        sx: {
          position: "relative",
          zIndex: 2,
          display: "flex",
          alignItems: "center"
        },
        children: /* @__PURE__ */ t(mo, { size: 26 })
      }
    )
  }
) }), Rt = ({
  title: e = "",
  message: r = "",
  buttonText: o = "",
  onButtonClick: s,
  show: a = !0
}) => a ? /* @__PURE__ */ t(Nr, { variant: "outlined", sx: { m: 1.5, flexShrink: 0 }, children: /* @__PURE__ */ c(Wr, { children: [
  /* @__PURE__ */ t(zr, { fontSize: "small" }),
  /* @__PURE__ */ t(ne, { gutterBottom: !0, sx: { fontWeight: 600 }, children: e }),
  /* @__PURE__ */ t(
    ne,
    {
      variant: "body2",
      sx: { mb: 2, color: "text.secondary" },
      children: r
    }
  ),
  /* @__PURE__ */ t(
    Fr,
    {
      variant: "contained",
      size: "small",
      fullWidth: !0,
      onClick: s,
      children: o
    }
  )
] }) }) : null, So = 180, Gt = 250, dr = "#01584F", Eo = ({
  text: e,
  testId: r
}) => {
  const o = S.useRef(null), [s, a] = S.useState(!1), d = S.useCallback(() => {
    const l = o.current;
    l && a(l.scrollWidth > l.clientWidth + 0.5);
  }, []);
  return S.useLayoutEffect(() => {
    d();
  }, [d, e]), S.useEffect(() => {
    const l = o.current;
    if (!l)
      return;
    const i = new ResizeObserver(() => d());
    return i.observe(l), () => i.disconnect();
  }, [d]), /* @__PURE__ */ t(
    se,
    {
      title: e,
      placement: "right",
      arrow: !0,
      enterDelay: 400,
      disableHoverListener: !s,
      disableFocusListener: !s,
      disableTouchListener: !s,
      children: /* @__PURE__ */ t(
        ne,
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
}, hr = (e, r, o, s) => {
  const a = e ? 48 : 44, d = e ? "text.secondary" : r, l = e ? dr : r;
  return { activeBg: l, sx: s ? {
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
    backgroundColor: o ? l : "transparent",
    "&:hover": {
      backgroundColor: o ? l : "action.hover",
      borderRadius: "4px",
      color: o ? "#ffffff" : d
    }
  } : {
    width: a,
    height: a,
    color: o ? "#ffffff" : d,
    backgroundColor: o ? l : "transparent",
    borderRadius: o ? "4px" : "50%",
    "&:hover": {
      backgroundColor: o ? l : "action.hover",
      borderRadius: "4px"
    }
  } };
}, ur = ({ link: e }) => /* @__PURE__ */ c(q, { alignItems: "center", spacing: 1, sx: { width: "100%" }, children: [
  /* @__PURE__ */ t(
    x,
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
    Eo,
    {
      text: e.text,
      testId: `rail-item-caption-${e.text}`
    }
  )
] }), fr = (e, r, o) => o ? e : /* @__PURE__ */ t(se, { title: r, placement: "right", arrow: !0, children: e }), bo = ({
  link: e,
  activePath: r,
  onLinkClick: o,
  accentColor: s,
  isSecondary: a,
  surfaceBackgroundColor: d,
  railShowTitles: l
}) => {
  const i = vt(), [h, b] = S.useState(null), [u, D] = S.useState(!1), w = S.useRef(
    null
  ), m = S.useRef(null), T = S.useRef(null), E = S.useRef(!1), f = S.useRef(!1), O = S.useId(), p = () => {
    w.current && (clearTimeout(w.current), w.current = null);
  }, W = () => {
    p(), w.current = setTimeout(() => {
      D(!1), w.current = null;
    }, So);
  }, F = () => {
    p(), D(!0);
  };
  S.useEffect(() => {
    if (!u)
      return;
    const y = (B) => {
      var R;
      B.key === "Escape" && (D(!1), (R = T.current) == null || R.focus());
    };
    return document.addEventListener("keydown", y), () => document.removeEventListener("keydown", y);
  }, [u]), S.useEffect(() => {
    if (!u || !f.current)
      return;
    const y = globalThis.requestAnimationFrame(() => {
      var R;
      const B = (R = m.current) == null ? void 0 : R.querySelector(
        '[role="menuitem"]'
      );
      B == null || B.focus(), f.current = !1;
    });
    return () => cancelAnimationFrame(y);
  }, [u]);
  const g = me(e, r), { activeBg: $, sx: X } = hr(
    a,
    s,
    g,
    l
  ), H = /* @__PURE__ */ t(
    ue,
    {
      ref: T,
      component: e.path ? "a" : "button",
      href: e.path || void 0,
      "aria-label": e.text,
      onFocus: () => {
        E.current || F();
      },
      onBlur: (y) => {
        var R;
        const B = y.relatedTarget;
        B && ((R = m.current) != null && R.contains(B)) || W();
      },
      onKeyDown: (y) => {
        y.key === "ArrowDown" && (y.preventDefault(), f.current = !0, F());
      },
      onClick: (y) => {
        y.preventDefault(), y.stopPropagation(), e.path && (o == null || o(e.path));
      },
      "aria-haspopup": "menu",
      "aria-expanded": u,
      "aria-controls": u ? O : void 0,
      "data-testid": `rail-submenu-trigger-${e.text}`,
      sx: X,
      children: l ? /* @__PURE__ */ t(ur, { link: e }) : e.icon
    }
  );
  return /* @__PURE__ */ c(
    x,
    {
      sx: {
        width: "100%",
        display: "flex",
        justifyContent: "center"
      },
      children: [
        /* @__PURE__ */ t(
          x,
          {
            ref: b,
            "data-testid": `rail-submenu-anchor-${e.text}`,
            sx: { display: "inline-flex", maxWidth: "100%" },
            onMouseEnter: () => {
              E.current = !0, F();
            },
            onMouseLeave: () => {
              E.current = !1, W();
            },
            children: fr(H, e.text, l)
          }
        ),
        /* @__PURE__ */ t(
          Hr,
          {
            open: u && !!h,
            anchorEl: h,
            placement: "right-start",
            modifiers: [{ name: "offset", options: { offset: [8, 0] } }],
            sx: { zIndex: (y) => y.zIndex.modal },
            children: /* @__PURE__ */ t(
              Lr,
              {
                ref: m,
                elevation: 0,
                onMouseEnter: p,
                onMouseLeave: W,
                "data-testid": `rail-submenu-panel-${e.text}`,
                sx: {
                  bgcolor: d,
                  backgroundImage: "none",
                  borderRadius: "4px",
                  border: "1px solid",
                  borderColor: "divider",
                  boxShadow: i.shadows[8],
                  maxWidth: Gt,
                  minWidth: 0,
                  py: 0.5,
                  boxSizing: "border-box"
                },
                children: /* @__PURE__ */ t(
                  Mr,
                  {
                    id: O,
                    dense: !0,
                    autoFocus: !1,
                    role: "menu",
                    sx: {
                      bgcolor: "transparent",
                      py: 0,
                      maxWidth: Gt
                    },
                    children: G(e.subitems, e.text, 0)
                  }
                )
              }
            )
          }
        )
      ]
    }
  );
  function G(y, B, R) {
    return y.flatMap((M) => {
      const N = Ne(B, M);
      return Ee(M) ? [
        /* @__PURE__ */ t(
          Br,
          {
            disableSticky: !0,
            title: M.text,
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
            children: M.text
          },
          N
        ),
        ...G(M.subitems, N, R + 1)
      ] : [
        /* @__PURE__ */ c(
          tt,
          {
            role: "menuitem",
            title: M.text,
            disabled: !M.path,
            selected: ce(M, r),
            onClick: (Fe) => {
              Fe.preventDefault(), M.path && (o == null || o(M.path)), D(!1);
            },
            sx: {
              borderRadius: "4px",
              mx: 0.5,
              my: 0.125,
              pl: 2 + R * 1.5,
              maxWidth: "100%",
              overflow: "hidden",
              color: a ? "text.secondary" : s,
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
              M.icon ? /* @__PURE__ */ t(Q, { children: M.icon }) : null,
              /* @__PURE__ */ t(
                ee,
                {
                  primary: M.text,
                  primaryTypographyProps: {
                    noWrap: !0
                  }
                }
              )
            ]
          },
          N
        )
      ];
    });
  }
}, wo = ({
  link: e,
  activePath: r,
  onLinkClick: o,
  accentColor: s,
  isSecondary: a,
  railShowTitles: d
}) => {
  const l = !!(e.path && r === e.path), { sx: i } = hr(
    a,
    s,
    l,
    d
  );
  return fr(
    /* @__PURE__ */ t(
      ue,
      {
        component: e.path ? "a" : "button",
        href: e.path || void 0,
        "aria-label": e.text,
        onClick: (h) => {
          h.preventDefault(), h.stopPropagation(), e.path && (o == null || o(e.path));
        },
        disabled: !e.path,
        sx: i,
        children: d ? /* @__PURE__ */ t(ur, { link: e }) : e.icon
      }
    ),
    e.text,
    d
  );
}, pr = (e, r) => {
  const o = vt().palette.mode === "dark";
  return { inactiveColor: e ? "text.secondary" : o ? "text.primary" : r, activeBg: e ? dr : r };
}, yo = ({
  link: e,
  expanded: r,
  onToggle: o,
  activePath: s,
  onLinkClick: a,
  accentColor: d,
  groupTint: l,
  activeFg: i,
  isSecondary: h
}) => {
  const b = me(e, s), u = !!(e.path && s === e.path), { inactiveColor: D, activeBg: w } = pr(
    h,
    d
  ), [m, T] = S.useState({}), E = (p, W) => m[W] ?? me(p, s), f = (p, W) => T((F) => ({ ...F, [p]: !W })), O = (p, W, F) => {
    const g = Ne(W, p), $ = ce(p, s), X = {
      pl: 4 + (F - 1) * 2,
      py: 1,
      color: $ ? i : D,
      bgcolor: $ ? w : "transparent",
      "& .MuiListItemIcon-root": { color: "inherit" },
      "&:hover": {
        bgcolor: $ ? w : "action.hover"
      }
    }, H = /* @__PURE__ */ c(he, { children: [
      p.icon ? /* @__PURE__ */ t(Q, { sx: { minWidth: 36 }, children: p.icon }) : null,
      /* @__PURE__ */ t(ee, { primary: p.text })
    ] });
    if (Ee(p)) {
      const G = E(p, g);
      return /* @__PURE__ */ c(x, { children: [
        /* @__PURE__ */ c(
          xe,
          {
            onClick: () => f(g, G),
            "aria-expanded": G,
            "data-testid": `drawer-section-trigger-${p.text}`,
            sx: X,
            children: [
              H,
              G ? /* @__PURE__ */ t(Bt, {}) : /* @__PURE__ */ t(Mt, {})
            ]
          }
        ),
        /* @__PURE__ */ t(rt, { in: G, timeout: "auto", unmountOnExit: !0, children: /* @__PURE__ */ t(x, { component: "nav", "aria-label": p.text, children: p.subitems.map(
          (y) => O(y, g, F + 1)
        ) }) })
      ] }, g);
    }
    return /* @__PURE__ */ t(
      xe,
      {
        disabled: !p.path,
        onClick: () => p.path && (a == null ? void 0 : a(p.path)),
        sx: X,
        children: H
      },
      g
    );
  };
  return /* @__PURE__ */ c(
    x,
    {
      sx: {
        borderRadius: "6px",
        bgcolor: b ? l : "transparent"
      },
      children: [
        /* @__PURE__ */ c(
          xe,
          {
            onClick: () => e.path ? a == null ? void 0 : a(e.path) : o(),
            sx: {
              py: 1.5,
              px: 2,
              color: u ? i : D,
              bgcolor: u ? w : "transparent",
              "&:hover": {
                bgcolor: u ? w : l
              }
            },
            "data-testid": `drawer-expand-trigger-${e.text}`,
            children: [
              /* @__PURE__ */ t(Q, { sx: { color: "inherit", minWidth: 40 }, children: e.icon }),
              /* @__PURE__ */ t(ee, { primary: e.text }),
              /* @__PURE__ */ t(
                ue,
                {
                  size: "small",
                  edge: "end",
                  "aria-label": r ? `Collapse ${e.text}` : `Expand ${e.text}`,
                  onClick: (p) => {
                    p.stopPropagation(), o();
                  },
                  sx: { color: "inherit" },
                  "data-testid": `drawer-expand-chevron-${e.text}`,
                  children: r ? /* @__PURE__ */ t(Bt, {}) : /* @__PURE__ */ t(Mt, {})
                }
              )
            ]
          }
        ),
        /* @__PURE__ */ t(rt, { in: r, timeout: "auto", unmountOnExit: !0, children: /* @__PURE__ */ t(x, { component: "nav", "aria-label": e.text, children: e.subitems.map(
          (p) => O(p, Ne("", e), 1)
        ) }) })
      ]
    }
  );
}, Ro = ({
  link: e,
  activePath: r,
  onLinkClick: o,
  accentColor: s,
  groupTint: a,
  activeFg: d,
  isSecondary: l
}) => {
  const i = !!(e.path && r === e.path), { inactiveColor: h, activeBg: b } = pr(
    l,
    s
  );
  return /* @__PURE__ */ c(
    xe,
    {
      disabled: !e.path,
      onClick: () => e.path && (o == null ? void 0 : o(e.path)),
      sx: {
        py: 1.5,
        px: 2,
        color: i ? d : h,
        bgcolor: i ? b : "transparent",
        "&:hover": {
          bgcolor: i ? b : a
        }
      },
      children: [
        /* @__PURE__ */ t(Q, { sx: { color: "inherit", minWidth: 40 }, children: e.icon }),
        /* @__PURE__ */ t(ee, { primary: e.text })
      ]
    }
  );
}, vo = () => /* @__PURE__ */ t(
  x,
  {
    sx: {
      width: "100%",
      display: "flex",
      justifyContent: "center"
    },
    children: /* @__PURE__ */ t(We, { sx: { width: "60%", borderColor: "divider" } })
  }
), Pt = () => /* @__PURE__ */ t(
  x,
  {
    sx: {
      width: "100%",
      my: 2,
      display: "flex",
      justifyContent: "center"
    },
    children: /* @__PURE__ */ t(We, { sx: { width: "60%", borderColor: "divider" } })
  }
), et = (e, r) => e.map((o, s) => /* @__PURE__ */ c(S.Fragment, { children: [
  r(o, s),
  s < e.length - 1 ? /* @__PURE__ */ t(vo, {}) : null
] }, s)), xr = ({
  variant: e,
  mainLinks: r,
  secondaryLinks: o = [],
  activePath: s,
  onLinkClick: a,
  accentColor: d = "#01584f",
  groupAccentColor: l,
  surfaceBackgroundColor: i,
  railShowTitles: h = !1
}) => {
  const b = nt(d), u = l ?? st(d), [D, w] = S.useState({}), m = (f, O) => Ee(f) ? /* @__PURE__ */ t(
    bo,
    {
      link: f,
      activePath: s,
      onLinkClick: a,
      accentColor: d,
      isSecondary: O,
      surfaceBackgroundColor: i,
      railShowTitles: h
    }
  ) : /* @__PURE__ */ t(
    wo,
    {
      link: f,
      activePath: s,
      onLinkClick: a,
      accentColor: d,
      isSecondary: O,
      railShowTitles: h
    }
  ), T = (f, O, p) => {
    const W = {
      link: f,
      activePath: s,
      onLinkClick: a,
      accentColor: d,
      groupTint: u,
      activeFg: b,
      isSecondary: p
    };
    if (Ee(f)) {
      const F = `${p ? "secondary" : "main"}-${O}`;
      return /* @__PURE__ */ t(
        yo,
        {
          ...W,
          expanded: !!D[F],
          onToggle: () => w((g) => ({
            ...g,
            [F]: !g[F]
          }))
        }
      );
    }
    return /* @__PURE__ */ t(Ro, { ...W });
  };
  if (e === "drawer")
    return /* @__PURE__ */ c(
      q,
      {
        sx: {
          flexGrow: 1,
          width: "100%",
          alignItems: "stretch",
          pt: 2,
          gap: 0
        },
        children: [
          /* @__PURE__ */ t(q, { sx: { width: "100%" }, children: et(
            r,
            (f, O) => T(f, O, !1)
          ) }),
          o.length > 0 ? /* @__PURE__ */ c(he, { children: [
            /* @__PURE__ */ t(Pt, {}),
            /* @__PURE__ */ t(x, { sx: { mt: "auto", pb: 2 }, children: /* @__PURE__ */ t(q, { sx: { width: "100%" }, children: et(
              o,
              (f, O) => T(f, O, !0)
            ) }) })
          ] }) : null
        ]
      }
    );
  const E = h ? 1.25 : 1;
  return /* @__PURE__ */ c(
    q,
    {
      sx: {
        flexGrow: 1,
        width: "100%",
        boxSizing: "border-box",
        justifyContent: "flex-start",
        alignItems: "center",
        pt: 2,
        gap: E
      },
      children: [
        et(r, (f) => m(f, !1)),
        o.length > 0 ? /* @__PURE__ */ c(he, { children: [
          /* @__PURE__ */ t(Pt, {}),
          /* @__PURE__ */ t(x, { sx: { mt: "auto", pb: 2 }, children: /* @__PURE__ */ t(q, { gap: E, alignItems: "center", children: et(
            o,
            (f) => m(f, !0)
          ) }) })
        ] }) : null
      ]
    }
  );
}, Io = ({
  open: e,
  onClose: r,
  mainLinks: o,
  secondaryLinks: s = [],
  activePath: a,
  onLinkClick: d,
  search: l,
  footer: i,
  alertProps: h,
  accentColor: b = "#01584f",
  groupAccentColor: u
}) => /* @__PURE__ */ t(
  Ur,
  {
    anchor: "left",
    open: e,
    onClose: r,
    sx: {
      zIndex: (w) => w.zIndex.drawer + 1,
      "& .MuiDrawer-paper": {
        backgroundImage: "none",
        backgroundColor: "background.paper"
      }
    },
    children: /* @__PURE__ */ c(q, { sx: { width: 300, maxWidth: "85dvw", height: "100%" }, children: [
      l ? /* @__PURE__ */ t(x, { sx: { p: 2, pb: 1 }, children: l }) : null,
      /* @__PURE__ */ t(q, { sx: { flexGrow: 1, minHeight: 0, overflowY: "auto" }, children: /* @__PURE__ */ t(
        xr,
        {
          variant: "drawer",
          mainLinks: o,
          secondaryLinks: s,
          activePath: a,
          onLinkClick: (w) => {
            d == null || d(w), r();
          },
          accentColor: b,
          groupAccentColor: u
        }
      ) }),
      (h == null ? void 0 : h.show) && /* @__PURE__ */ t(Rt, { ...h }),
      i ? /* @__PURE__ */ c(he, { children: [
        /* @__PURE__ */ t(We, {}),
        /* @__PURE__ */ t(x, { sx: { p: 1.5 }, children: i })
      ] }) : null
    ] })
  }
), To = ({
  height: e,
  onMenuClick: r,
  appName: o,
  logo: s,
  onBrandClick: a,
  background: d,
  color: l
}) => /* @__PURE__ */ t(
  Kr,
  {
    position: "fixed",
    elevation: 0,
    sx: {
      height: e,
      background: d,
      color: l,
      borderBottom: "1px solid",
      borderColor: "divider"
    },
    children: /* @__PURE__ */ c($r, { sx: { minHeight: `${e}px !important`, gap: 1, px: 1 }, children: [
      r && /* @__PURE__ */ t(
        ue,
        {
          "aria-label": "Open navigation menu",
          onClick: r,
          sx: { color: l },
          children: /* @__PURE__ */ t(bt, {})
        }
      ),
      /* @__PURE__ */ t(
        ot,
        {
          title: o,
          appName: o,
          logo: s,
          onClick: a,
          color: l,
          testId: "mobile-brand"
        }
      )
    ] })
  }
), jt = (e) => e ? e.charAt(0).toUpperCase() + e.slice(1).toLowerCase() : "User", Xt = {
  overflow: "hidden",
  textOverflow: "ellipsis",
  whiteSpace: "nowrap"
}, kt = ({
  compact: e,
  color: r,
  hoverColor: o,
  showNotifications: s,
  notificationCount: a,
  onNotificationsClick: d,
  showProfile: l,
  userName: i = "User",
  userRole: h,
  userAvatar: b,
  showSettings: u,
  onSettingsClick: D,
  showThemeToggler: w,
  theme: m,
  onThemeToggle: T,
  onLogout: E
}) => {
  const [f, O] = S.useState(
    null
  ), p = () => O(null), W = (H) => () => {
    p(), H == null || H();
  };
  if (!s && !l)
    return null;
  const F = a ? `Notifications, ${a} unread` : "Notifications", g = {
    width: "100%",
    gap: 1.5,
    borderRadius: "8px",
    color: r,
    justifyContent: e ? "center" : "flex-start",
    p: e ? 1 : "8px 12px",
    "&:hover": { bgcolor: o },
    "&.Mui-focusVisible": { outline: "2px solid", outlineColor: r }
  }, $ = /* @__PURE__ */ t(
    Yr,
    {
      color: "error",
      badgeContent: a,
      invisible: !e || a === 0,
      max: 99,
      children: /* @__PURE__ */ t(jr, {})
    }
  ), X = /* @__PURE__ */ t(
    Vr,
    {
      src: b,
      alt: i,
      sx: { width: 32, height: 32, flexShrink: 0, fontSize: 14 },
      children: i.charAt(0).toUpperCase()
    }
  );
  return /* @__PURE__ */ c(
    q,
    {
      spacing: 0.5,
      "data-testid": "sidebar-footer",
      sx: { width: "100%" },
      children: [
        s && /* @__PURE__ */ t(
          se,
          {
            title: e ? F : "",
            placement: "right",
            arrow: !0,
            children: /* @__PURE__ */ c(
              wt,
              {
                onClick: d,
                "aria-label": F,
                "data-testid": "sidebar-notifications",
                sx: g,
                children: [
                  $,
                  !e && /* @__PURE__ */ c(he, { children: [
                    /* @__PURE__ */ t(
                      ne,
                      {
                        variant: "body1",
                        sx: { flexGrow: 1, textAlign: "left" },
                        children: "Notifications"
                      }
                    ),
                    a > 0 && /* @__PURE__ */ t(
                      x,
                      {
                        component: "span",
                        sx: {
                          minWidth: 20,
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
                        children: a > 99 ? "99+" : a
                      }
                    )
                  ] })
                ]
              }
            )
          }
        ),
        l && /* @__PURE__ */ c(he, { children: [
          /* @__PURE__ */ t(
            se,
            {
              title: e ? i : "",
              placement: "right",
              arrow: !0,
              children: /* @__PURE__ */ c(
                wt,
                {
                  onClick: (H) => O(H.currentTarget),
                  "aria-label": `Account menu for ${i}`,
                  "aria-haspopup": "menu",
                  "aria-expanded": !!f,
                  "data-testid": "sidebar-user",
                  sx: g,
                  children: [
                    X,
                    !e && /* @__PURE__ */ c(he, { children: [
                      /* @__PURE__ */ c(
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
                            /* @__PURE__ */ t(
                              ne,
                              {
                                variant: "body2",
                                sx: {
                                  ...Xt,
                                  maxWidth: "100%",
                                  fontWeight: 600
                                },
                                children: i
                              }
                            ),
                            /* @__PURE__ */ t(
                              ne,
                              {
                                variant: "caption",
                                sx: {
                                  ...Xt,
                                  maxWidth: "100%",
                                  opacity: 0.8
                                },
                                children: jt(h)
                              }
                            )
                          ]
                        }
                      ),
                      /* @__PURE__ */ t(
                        kr,
                        {
                          fontSize: "small",
                          sx: { opacity: 0.7 }
                        }
                      )
                    ] })
                  ]
                }
              )
            }
          ),
          /* @__PURE__ */ c(
            Jr,
            {
              anchorEl: f,
              open: !!f,
              onClose: p,
              anchorOrigin: e ? { vertical: "bottom", horizontal: "right" } : { vertical: "top", horizontal: "left" },
              transformOrigin: {
                vertical: "bottom",
                horizontal: "left"
              },
              slotProps: {
                paper: {
                  sx: { minWidth: 220, ml: e ? 1 : 0 }
                }
              },
              children: [
                /* @__PURE__ */ c(x, { sx: { px: 2, py: 1 }, children: [
                  /* @__PURE__ */ t(
                    ne,
                    {
                      variant: "body2",
                      sx: { fontWeight: 600 },
                      children: i
                    }
                  ),
                  /* @__PURE__ */ t(
                    ne,
                    {
                      variant: "caption",
                      sx: { color: "text.secondary" },
                      children: jt(h)
                    }
                  )
                ] }),
                /* @__PURE__ */ t(We, {}),
                u && /* @__PURE__ */ c(tt, { onClick: W(D), children: [
                  /* @__PURE__ */ t(Q, { children: /* @__PURE__ */ t(Xr, { fontSize: "small" }) }),
                  /* @__PURE__ */ t(ee, { children: "Settings" })
                ] }),
                w && // Stays open so the switch visibly flips
                /* @__PURE__ */ c(
                  tt,
                  {
                    onClick: T,
                    disabled: !T,
                    role: "menuitemcheckbox",
                    "aria-checked": m === "dark",
                    children: [
                      /* @__PURE__ */ t(Q, { children: /* @__PURE__ */ t(Gr, { fontSize: "small" }) }),
                      /* @__PURE__ */ t(ee, { children: "Dark mode" }),
                      /* @__PURE__ */ t(
                        Zr,
                        {
                          size: "small",
                          edge: "end",
                          checked: m === "dark",
                          tabIndex: -1,
                          inputProps: { "aria-hidden": !0 },
                          sx: { pointerEvents: "none" }
                        }
                      )
                    ]
                  }
                ),
                (u || w) && /* @__PURE__ */ t(We, {}),
                /* @__PURE__ */ c(
                  tt,
                  {
                    onClick: W(E),
                    sx: {
                      color: m === "dark" ? "hsl(0, 90%, 65%)" : "error.main"
                    },
                    children: [
                      /* @__PURE__ */ t(Q, { sx: { color: "inherit" }, children: /* @__PURE__ */ t(Pr, { fontSize: "small" }) }),
                      /* @__PURE__ */ t(ee, { children: "Logout" })
                    ]
                  }
                )
              ]
            }
          )
        ] })
      ]
    }
  );
}, Oo = 'input, textarea, [contenteditable="true"]', Vt = (e) => {
  var r;
  (r = e == null ? void 0 : e.querySelector(Oo)) == null || r.focus();
}, _o = ({
  search: e,
  mode: r,
  onExpand: o,
  autoFocus: s = !1,
  onAutoFocused: a,
  color: d,
  hoverColor: l
}) => {
  const i = S.useRef(null), [h, b] = S.useState(null);
  return S.useEffect(() => {
    r === "full" && s && (Vt(i.current), a == null || a());
  }, [r, s, a]), r === "full" ? /* @__PURE__ */ t(
    x,
    {
      ref: i,
      "data-testid": "sidebar-search",
      sx: { width: "100%" },
      children: e
    }
  ) : /* @__PURE__ */ c(
    x,
    {
      "data-testid": "sidebar-search",
      sx: { width: "100%", display: "flex", justifyContent: "center" },
      children: [
        /* @__PURE__ */ t(se, { title: "Search", placement: "right", arrow: !0, children: /* @__PURE__ */ t(
          ue,
          {
            "aria-label": "Search",
            onClick: (u) => r === "expand" ? o == null ? void 0 : o() : b(u.currentTarget),
            sx: {
              width: 44,
              height: 44,
              color: d,
              borderRadius: "8px",
              "&:hover": { bgcolor: l }
            },
            children: /* @__PURE__ */ t(qr, {})
          }
        ) }),
        /* @__PURE__ */ t(
          Qr,
          {
            open: !!h,
            anchorEl: h,
            onClose: () => b(null),
            anchorOrigin: { vertical: "top", horizontal: "right" },
            transformOrigin: { vertical: "top", horizontal: "left" },
            TransitionProps: {
              onEntered: (u) => Vt(u)
            },
            slotProps: { paper: { sx: { ml: 1, p: 1.5, width: 360 } } },
            children: e
          }
        )
      ]
    }
  );
}, Ao = 100, Yt = 80, Jt = 56, Zt = 264, qt = 72, Qt = "lumora:sidebar-collapsed", er = "width 200ms ease, left 200ms ease", Rn = ({
  children: e,
  sidebarLinks: r = [],
  secondarySidebarLinks: o = [],
  appName: s = "Dashboard",
  showSidebar: a = !0,
  showSidebarRailTitles: d = !1,
  sidebarVariant: l = "rail",
  logo: i,
  onBrandClick: h,
  searchComponent: b,
  sidebarBackgroundColor: u,
  sidebarHeaderBackgroundColor: D,
  groupAccentColor: w,
  activeSidebarForegroundColor: m,
  enableRefreshToken: T = !1,
  activePath: E,
  onLinkClick: f,
  showProfile: O = !0,
  userName: p,
  userRole: W,
  userAvatar: F,
  onLogout: g,
  showSettings: $ = !0,
  onSettingsClick: X,
  showNotifications: H = !0,
  notificationCount: G = 0,
  NotificationSidebarContent: y,
  onVerify: B,
  alertProps: R,
  style: M,
  sidebarStyles: N,
  contentStyles: Fe,
  accentColor: it,
  sidebarAccentColor: k,
  sidebarForegroundColor: ze,
  contentBackgroundColor: at,
  theme: V = "light",
  showThemeToggler: Xe = !1,
  onThemeToggle: ge,
  GlobalChatSidebar: be,
  useChatSidebar: fe,
  showAssistant: ke = !1,
  onAssistantClick: we,
  assistantActive: lt = !1,
  assistantBusy: Be = !1,
  customNavbar: ye,
  customNavbarProps: Re,
  redirectToLogin: Se,
  apiBaseUrl: Ve
}) => {
  const ct = _r(), ie = Ar(ct.breakpoints.down("md")), Me = Nt(
    () => tr(po(V)),
    [V]
  ), Le = V === "dark", Ye = it ?? "#01584f", ve = k ?? Ye, Ie = at ?? (Le ? "hsl(220, 35%, 9%)" : "#f2f9fc"), te = l === "collapsible", Y = l === "rail-labeled", Je = te || Y, He = u ?? (Le ? "hsl(220, 30%, 7%)" : "#ffffff"), Ue = D ?? He, re = ze ?? (Le ? "#ffffff" : ve), n = st(re), v = D ? nt(Ue) : re, z = (J) => /* @__PURE__ */ t(
    oe,
    {
      role: "img",
      "aria-label": `${s} logo`,
      sx: {
        width: 28,
        height: 28,
        flexShrink: 0,
        bgcolor: J,
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
  ), _ = i ?? z(v), L = i ?? z(re), [A, ae] = Oe(
    () => sr(Qt) ?? !1
  ), K = (J) => {
    ae(J), ir(Qt, J);
  }, [pe, Ze] = Oe(!1), mr = Or(() => Ze(!1), []);
  let le = 0;
  a && !ie && (Y ? le = Yt : te ? le = A ? qt : Zt : le = Ao);
  const [gr, dt] = Oe(!1), [Sr, ht] = Oe(!1), [Er, br] = Oe(!0), [wr, yr] = Oe(!1), ut = fe == null ? void 0 : fe(), It = (ut == null ? void 0 : ut.isOpen) ?? !1, qe = Wt(B), Tt = Wt(!1), Ot = Nt(
    () => fo(Ve),
    [Ve]
  );
  xt(() => {
    qe.current = B;
  }, [B]);
  const Rr = (J) => {
    const Ke = g(J);
    Ke instanceof Promise && Ke.catch(($e) => {
      console.error("Error in logout handler:", $e);
    });
  };
  if (xt(() => {
    (() => {
      var Ke;
      try {
        const { isAuthenticated: $e } = ho();
        if (!$e) {
          console.log("No session found, redirecting to login"), je(), Se();
          return;
        }
        if (!Tt.current) {
          const { user: Ge, error: pt } = uo();
          if (Ge && !pt) {
            const vr = {
              name: Ge.name || "",
              email: Ge.email || "",
              profilePicture: Ge.profilePicture || "",
              role: Ge.role || ""
            };
            Tt.current = !0, (Ke = qe.current) == null || Ke.call(qe, vr);
          } else
            pt && console.error("Error getting user data:", pt);
        }
        yr(!0);
      } catch ($e) {
        console.error("Error checking session:", $e), je(), Se();
      } finally {
        br(!1);
      }
    })();
  }, [Se]), xt(() => {
    T && xo(Ot, Se);
  }, [T, Ot]), Er)
    return /* @__PURE__ */ t(Dt, { theme: Me, children: /* @__PURE__ */ c(
      oe,
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
            Cr,
            {
              size: 60,
              thickness: 4,
              sx: { color: Ye }
            }
          ),
          /* @__PURE__ */ t(oe, { sx: { mt: 2, color: "text.secondary" }, children: "Checking session..." })
        ]
      }
    ) });
  if (!wr)
    return null;
  const ft = b ?? (ye ? /* @__PURE__ */ t(ye, { ...Re }) : null), _t = {
    showNotifications: H,
    notificationCount: G,
    onNotificationsClick: y && (() => {
      dt(!1), ht(!0);
    }),
    showProfile: O,
    userName: p,
    userRole: W,
    userAvatar: F,
    showSettings: $,
    onSettingsClick: X,
    showThemeToggler: Xe,
    theme: V,
    onThemeToggle: ge,
    onLogout: Rr
  }, At = (J) => /* @__PURE__ */ t(
    kt,
    {
      ..._t,
      compact: J,
      color: re,
      hoverColor: n
    }
  ), Ct = (J) => ft ? /* @__PURE__ */ t(
    _o,
    {
      search: ft,
      mode: J,
      onExpand: () => {
        K(!1), Ze(!0);
      },
      autoFocus: pe,
      onAutoFocused: mr,
      color: re,
      hoverColor: n
    }
  ) : void 0;
  return /* @__PURE__ */ t(Dt, { theme: Me, children: /* @__PURE__ */ c(
    oe,
    {
      sx: {
        display: "flex",
        minHeight: "100vh",
        ...M
      },
      children: [
        /* @__PURE__ */ t(Dr, {}),
        ie && /* @__PURE__ */ t(
          To,
          {
            height: Jt,
            onMenuClick: a ? () => dt(!0) : void 0,
            appName: s,
            logo: _,
            onBrandClick: h,
            background: Ue,
            color: v
          }
        ),
        a && !ie && Je && /* @__PURE__ */ c(
          oe,
          {
            component: "aside",
            sx: {
              width: le,
              minWidth: le,
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
              bgcolor: te ? He : void 0,
              transition: er,
              ...N
            },
            children: [
              /* @__PURE__ */ t(
                lo,
                {
                  mainLinks: r,
                  secondaryLinks: o,
                  activePath: E,
                  onLinkClick: f,
                  showHeaderBar: te,
                  logo: _,
                  title: s,
                  onBrandClick: h,
                  headerBackgroundColor: te ? Ue : void 0,
                  headerForegroundColor: te ? v : void 0,
                  activeAccentColor: ve,
                  groupAccentColor: w,
                  activeForegroundColor: m,
                  foregroundColor: ze,
                  surfaceBackgroundColor: He,
                  collapsed: Y ? !0 : A,
                  onCollapsedChange: Y ? void 0 : K,
                  showLabels: Y,
                  expandedWidth: Zt,
                  collapsedWidth: Y ? Yt : qt,
                  search: Ct(
                    Y ? "popover" : A ? "expand" : "full"
                  ),
                  footer: At(
                    Y || A
                  )
                }
              ),
              te && (R == null ? void 0 : R.show) && !A && /* @__PURE__ */ t(Rt, { ...R })
            ]
          }
        ),
        a && !ie && !Je && /* @__PURE__ */ t(
          Ft,
          {
            variant: "permanent",
            sx: {
              width: le,
              flexShrink: 0,
              zIndex: 2,
              "& .MuiDrawer-paper": {
                width: le,
                boxSizing: "border-box",
                bgcolor: Ie,
                borderRight: "none"
              },
              ...N
            },
            children: /* @__PURE__ */ c(
              oe,
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
                    oe,
                    {
                      sx: {
                        display: "flex",
                        justifyContent: "center",
                        mb: 1.5
                      },
                      children: /* @__PURE__ */ t(
                        ot,
                        {
                          logo: L,
                          appName: s,
                          onClick: h,
                          color: re,
                          testId: "sidebar-header-brand"
                        }
                      )
                    }
                  ),
                  Ct("popover"),
                  /* @__PURE__ */ c(
                    oe,
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
                          xr,
                          {
                            variant: "rail",
                            mainLinks: r,
                            secondaryLinks: o,
                            activePath: E,
                            onLinkClick: f,
                            accentColor: ve,
                            surfaceBackgroundColor: Ie,
                            railShowTitles: d
                          }
                        ),
                        (R == null ? void 0 : R.show) && /* @__PURE__ */ t(Rt, { ...R })
                      ]
                    }
                  ),
                  /* @__PURE__ */ t(oe, { sx: { py: 1.5 }, children: At(!0) })
                ]
              }
            )
          }
        ),
        a && ie && /* @__PURE__ */ t(
          Io,
          {
            open: gr,
            onClose: () => dt(!1),
            mainLinks: r,
            secondaryLinks: o,
            activePath: E,
            onLinkClick: f,
            search: ft,
            footer: (
              // The drawer sits on the theme paper, not the sidebar surface
              /* @__PURE__ */ t(
                kt,
                {
                  ..._t,
                  compact: !1,
                  color: "text.primary",
                  hoverColor: "action.hover"
                }
              )
            ),
            alertProps: R,
            accentColor: ve,
            groupAccentColor: w
          }
        ),
        /* @__PURE__ */ t(
          oe,
          {
            component: "main",
            sx: {
              flexGrow: 1,
              p: 3,
              width: le ? `calc(100% - ${le}px)` : "100%",
              transition: er,
              mt: ie ? `${Jt}px` : 0,
              backgroundColor: Ie,
              ...Fe
            },
            children: /* @__PURE__ */ c(mt, { container: !0, spacing: 3, children: [
              /* @__PURE__ */ t(
                mt,
                {
                  size: {
                    xs: 12,
                    md: It && be ? 8.5 : 12
                  },
                  sx: {
                    display: "flex",
                    flexDirection: "column"
                  },
                  children: e
                }
              ),
              It && be && /* @__PURE__ */ t(
                mt,
                {
                  size: { xs: 12, md: 3.5 },
                  sx: {
                    display: "flex",
                    flexDirection: "column",
                    // Sticks in view and fills the viewport minus the
                    // main area's 24px padding above and below
                    position: { xs: "static", md: "sticky" },
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
                  children: /* @__PURE__ */ t(be, {})
                }
              )
            ] })
          }
        ),
        ke && /* @__PURE__ */ t(
          go,
          {
            onClick: we,
            active: lt,
            busy: Be
          }
        ),
        H && y && /* @__PURE__ */ t(
          Ft,
          {
            anchor: "right",
            open: Sr,
            onClose: () => ht(!1),
            slotProps: {
              paper: { sx: { width: 380, maxWidth: "100vw" } }
            },
            children: /* @__PURE__ */ t(
              y,
              {
                onClose: () => ht(!1)
              }
            )
          }
        )
      ]
    }
  ) });
};
export {
  C as AUTH_ERROR_CODES,
  I as AuthError,
  lo as CollapsibleSidebar,
  Rn as LumoraWrapper,
  je as clearAuthTokens,
  Rn as default,
  yn as getAuthErrorMessage,
  Pe as getAuthTokens,
  uo as getCurrentUser,
  po as getDesignTokens,
  ho as isAuthenticated,
  yt as logAuthError,
  lr as storeAuthTokens
};
