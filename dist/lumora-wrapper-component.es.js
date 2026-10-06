import { jsx as t, jsxs as u, Fragment as Pe } from "react/jsx-runtime";
import Io from "@mui/icons-material/KeyboardArrowDownRounded";
import Oo from "@mui/icons-material/KeyboardArrowUpRounded";
import Mr from "@mui/icons-material/ChevronRightRounded";
import b from "@mui/material/Box";
import Sr from "@mui/material/Collapse";
import we from "@mui/material/Divider";
import Re from "@mui/material/IconButton";
import gt from "@mui/material/ListItemButton";
import ne from "@mui/material/ListItemIcon";
import We from "@mui/material/ListItemText";
import ie from "@mui/material/Stack";
import ge from "@mui/material/Tooltip";
import z from "@mui/material/Typography";
import { useTheme as It, createTheme as Br, alpha as Fe, ThemeProvider as vr } from "@mui/material/styles";
import * as p from "react";
import { useMemo as Er, useState as Ve, useCallback as Co, useRef as Mt, useEffect as bt } from "react";
import je from "@mui/material/ButtonBase";
import { useTheme as _o, useMediaQuery as To, Box as oe, CircularProgress as Ao, CssBaseline as Do, Drawer as yr, SwipeableDrawer as No, Stack as Wo } from "@mui/material";
import wr from "axios";
import ko from "@mui/material/Card";
import zo from "@mui/material/CardContent";
import Hr from "@mui/material/Button";
import Lo from "@mui/icons-material/AutoAwesomeRounded";
import Mo from "@mui/material/Grow";
import Yt from "@mui/material/Paper";
import Bo from "@mui/material/Slide";
import Ho from "@mui/material/ListSubheader";
import ke from "@mui/material/MenuItem";
import qt from "@mui/material/MenuList";
import Fo from "@mui/material/Popper";
import Fr from "@mui/icons-material/MenuRounded";
import Pr from "@mui/icons-material/SearchRounded";
import Ur from "@mui/icons-material/LogoutRounded";
import $r from "@mui/icons-material/NotificationsNoneOutlined";
import Po from "@mui/icons-material/SettingsOutlined";
import Uo from "@mui/material/Avatar";
import $o from "@mui/material/Menu";
import Rr from "@mui/material/ToggleButton";
import Ko from "@mui/material/ToggleButtonGroup";
import Go from "@mui/material/Drawer";
import jo from "@mui/material/AppBar";
import Xo from "@mui/material/Toolbar";
import Kr from "@mui/material/Badge";
import Vo from "@mui/icons-material/DarkModeOutlined";
import Yo from "@mui/icons-material/LayersOutlined";
import qo from "@mui/icons-material/LightModeOutlined";
import Jo from "@mui/icons-material/SettingsBrightnessOutlined";
import Gr from "@mui/material/Popover";
import Zo from "@mui/icons-material/ArrowOutwardRounded";
import Qo from "@mui/icons-material/CheckRounded";
import en from "@mui/icons-material/ShieldOutlined";
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
  }, l = /* @__PURE__ */ u(Pe, { children: [
    r ? /* @__PURE__ */ t(
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
    e
  ] });
  return n ? /* @__PURE__ */ t(
    je,
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
  ) : /* @__PURE__ */ t(ie, { direction: "row", "data-testid": d, sx: s, children: l });
}, st = (e) => {
  var r;
  return !!((r = e.subitems) != null && r.length);
}, Et = (e, r) => e ? `${e}/${r.text}` : r.text, Ge = (e, r) => {
  var o;
  return r ? e.path && r === e.path ? !0 : ((o = e.subitems) == null ? void 0 : o.some((n) => Ge(n, r))) ?? !1 : !1;
}, He = (e, r) => !!(r && e.path === r), jr = (e, r) => (e ?? []).flatMap((o) => {
  const n = o.icon ?? r;
  return st(o) ? jr(o.subitems, n) : o.path ? [{ sub: o, icon: n }] : [];
}), Kt = (e) => {
  const r = Xr(e);
  if (!r)
    return "#ffffff";
  const [o, n, a] = r.map((s) => {
    const l = s / 255;
    return l <= 0.03928 ? l / 12.92 : ((l + 0.055) / 1.055) ** 2.4;
  });
  return 0.2126 * o + 0.7152 * n + 0.0722 * a > 0.5 ? "#0b1f1c" : "#ffffff";
}, Rt = (e) => {
  const r = Xr(e);
  if (!r)
    return "rgba(1, 88, 79, 0.12)";
  const [o, n, a] = r;
  return `rgba(${o}, ${n}, ${a}, 0.14)`;
}, Xr = (e) => {
  let r = e.trim().replace(/^#/, "");
  if (r.length === 3 && (r = r.split("").map((n) => n + n).join("")), r.length !== 6 || /[^0-9a-fA-F]/.test(r))
    return null;
  const o = parseInt(r, 16);
  return [o >> 16 & 255, o >> 8 & 255, o & 255];
}, tn = (e) => {
  typeof window > "u" || window.open(e, "_blank", "noopener,noreferrer");
}, Vr = (e) => e.replace(/_/g, " ").split(/\s+/).filter(Boolean).join(" ").toUpperCase(), rn = 264, on = 72, Ir = 64, Bt = {
  "&:focus, &:focus-visible": { outline: "none" }
}, nn = 16, an = 14, sn = 4, ln = 2.5, Or = "0.7rem", Cr = 22, Ke = ({ text: e, variant: r = "body1", center: o = !1, fontSize: n, fontWeight: a }) => {
  const d = p.useRef(null), [s, l] = p.useState(!1), h = p.useCallback(() => {
    const f = d.current;
    f && l(f.scrollWidth > f.clientWidth + 0.5);
  }, []);
  return p.useLayoutEffect(() => {
    h();
  }, [h, e]), p.useEffect(() => {
    const f = d.current;
    if (!f)
      return;
    const c = new ResizeObserver(() => h());
    return c.observe(f), () => c.disconnect();
  }, [h]), /* @__PURE__ */ t(
    ge,
    {
      title: e,
      placement: "right",
      arrow: !0,
      enterDelay: 400,
      disableHoverListener: !s,
      disableFocusListener: !s,
      disableTouchListener: !s,
      children: /* @__PURE__ */ t(
        z,
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
}, cn = ({
  open: e,
  size: r = nn
}) => e ? /* @__PURE__ */ t(Oo, { sx: { fontSize: r, opacity: 0.75 } }) : /* @__PURE__ */ t(Io, { sx: { fontSize: r, opacity: 0.75 } }), _r = ({ open: e }) => /* @__PURE__ */ t(
  Mr,
  {
    sx: {
      fontSize: 20,
      opacity: 0.75,
      transition: "transform 150ms ease",
      transform: e ? "rotate(90deg)" : "none"
    }
  }
), St = 600, Gt = ({
  mainLinks: e,
  secondaryLinks: r = [],
  activePath: o,
  onLinkClick: n,
  onLinkAction: a,
  logo: d,
  title: s,
  onBrandClick: l,
  showHeaderBar: h = !1,
  headerBackgroundColor: f,
  headerForegroundColor: c,
  brandColor: E,
  activeAccentColor: m = "#01584f",
  groupAccentColor: x,
  activeForegroundColor: v,
  foregroundColor: g,
  surfaceBackgroundColor: y,
  collapsed: T = !1,
  expandedWidth: W = rn,
  collapsedWidth: O = on,
  showLabels: R = !1,
  topInsetPx: H = 0,
  topContent: F,
  footer: A
}) => {
  const ae = It(), Y = ae.palette.mode === "dark", [N, P] = p.useState(
    {}
  ), C = v ?? Kt(m), B = {
    bgcolor: m,
    color: C,
    "& .MuiListItemIcon-root": { color: C }
  }, se = {
    bgcolor: m,
    color: C,
    borderRadius: "8px"
  }, k = x ?? Rt(m), le = y ?? (Y ? ae.palette.background.paper : "#ffffff"), K = g ?? (Y ? "text.primary" : m), J = f ?? le, Ie = c ?? (f ? Kt(J) : g ?? (Y ? ae.palette.text.primary : m)), ze = Rt(Ie), be = (i) => {
    n == null || n(i);
  }, Oe = (i, _) => {
    P((M) => ({ ...M, [i]: !_ }));
  }, pe = (i, _) => N[_] ?? Ge(i, o), D = (i, _, M) => ({
    color: i ? C : K,
    bgcolor: i ? m : "transparent",
    "& .MuiListItemIcon-root": {
      color: i ? C : K,
      minWidth: M
    },
    "&:hover": i || R ? B : { bgcolor: _ }
  }), Z = {
    "&.Mui-selected": {
      bgcolor: m
    },
    "&.Mui-selected:hover": B
  }, Ce = (i) => {
    const _ = He(i, o), M = /* @__PURE__ */ u(
      gt,
      {
        disabled: !i.path,
        selected: _,
        onClick: () => i.path && be(i.path),
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
          ...D(
            _,
            k,
            i.subtitle ? 48 : 36
          ),
          ...Z
        },
        children: [
          /* @__PURE__ */ t(ne, { children: i.icon }),
          /* @__PURE__ */ t(
            We,
            {
              disableTypography: !0,
              primary: /* @__PURE__ */ t(
                Ke,
                {
                  text: i.text,
                  fontWeight: St
                }
              ),
              secondary: i.subtitle ? /* @__PURE__ */ t(
                b,
                {
                  component: "span",
                  sx: { display: "block", opacity: 0.85 },
                  children: /* @__PURE__ */ t(
                    Ke,
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
      return M;
    const { action: I } = i;
    return /* @__PURE__ */ u(b, { sx: { position: "relative" }, children: [
      M,
      /* @__PURE__ */ t(ge, { title: I.label, placement: "right", arrow: !0, children: /* @__PURE__ */ t(
        Re,
        {
          "aria-label": I.label,
          "data-testid": `sidebar-action-${i.text}`,
          onClick: () => {
            I.onClick(), a == null || a();
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
            borderColor: _ ? "rgba(255, 255, 255, 0.35)" : k,
            color: _ ? C : K,
            "&:hover": {
              bgcolor: _ ? "rgba(255, 255, 255, 0.15)" : k
            },
            "& .MuiSvgIcon-root": { fontSize: 18 },
            // No lingering outline after a click; a clear ring for keyboard focus
            "&:focus:not(.Mui-focusVisible)": {
              outline: "none"
            },
            "&.Mui-focusVisible": {
              outline: "2px solid",
              outlineColor: _ ? C : K,
              outlineOffset: 1
            }
          },
          children: I.icon
        }
      ) })
    ] }, i.text);
  }, _e = (i) => {
    const _ = Ge(i, o), M = He(i, o), I = Et("", i), $ = pe(i, I);
    return /* @__PURE__ */ u(
      b,
      {
        "data-testid": `sidebar-group-${i.text}`,
        sx: {
          borderRadius: "8px",
          bgcolor: _ ? k : "transparent"
        },
        children: [
          /* @__PURE__ */ u(
            gt,
            {
              onClick: () => Oe(I, $),
              "data-testid": `sidebar-item-${i.text}`,
              "data-active": M ? "true" : "false",
              "aria-expanded": $,
              sx: {
                borderRadius: "8px",
                py: 1.25,
                px: 1.5,
                ...D(M, k, 36)
              },
              children: [
                /* @__PURE__ */ t(ne, { children: i.icon }),
                /* @__PURE__ */ t(
                  We,
                  {
                    disableTypography: !0,
                    primary: /* @__PURE__ */ t(
                      Ke,
                      {
                        text: i.text,
                        fontWeight: St
                      }
                    )
                  }
                ),
                /* @__PURE__ */ t(_r, { open: $ })
              ]
            }
          ),
          /* @__PURE__ */ t(Sr, { in: $, timeout: "auto", unmountOnExit: !0, children: /* @__PURE__ */ t(
            b,
            {
              "data-testid": `sidebar-children-${i.text}`,
              sx: { pb: 0.5 },
              children: i.subitems.map(
                (G) => Q(G, I, 1)
              )
            }
          ) })
        ]
      },
      i.text
    );
  }, Q = (i, _, M) => {
    const I = Et(_, i), $ = sn + (M - 1) * ln;
    if (st(i)) {
      const te = Ge(i, o), X = He(i, o), Ae = pe(i, I);
      return /* @__PURE__ */ u(b, { "data-testid": `sidebar-group-${i.text}`, children: [
        /* @__PURE__ */ u(
          gt,
          {
            onClick: () => Oe(I, Ae),
            "data-testid": `sidebar-subitem-${i.text}`,
            "data-active": te ? "true" : "false",
            "aria-expanded": Ae,
            sx: {
              borderRadius: "8px",
              mx: 0.5,
              py: 0.75,
              pl: $,
              ...D(X, "action.hover", 32)
            },
            children: [
              i.icon ? /* @__PURE__ */ t(ne, { children: i.icon }) : null,
              /* @__PURE__ */ t(
                We,
                {
                  disableTypography: !0,
                  primary: /* @__PURE__ */ t(
                    Ke,
                    {
                      text: i.text,
                      fontWeight: St
                    }
                  )
                }
              ),
              /* @__PURE__ */ t(_r, { open: Ae })
            ]
          }
        ),
        /* @__PURE__ */ t(Sr, { in: Ae, timeout: "auto", unmountOnExit: !0, children: /* @__PURE__ */ t(b, { "data-testid": `sidebar-children-${i.text}`, children: i.subitems.map(
          (dt) => Q(dt, I, M + 1)
        ) }) })
      ] }, I);
    }
    const G = He(i, o);
    return /* @__PURE__ */ u(
      gt,
      {
        selected: G,
        disabled: !i.path,
        onClick: () => i.path && be(i.path),
        "data-testid": `sidebar-subitem-${i.text}`,
        "data-active": G ? "true" : "false",
        sx: {
          borderRadius: "8px",
          mx: 0.5,
          py: 0.75,
          pl: $,
          ...D(G, "action.hover", 32),
          ...Z
        },
        children: [
          i.icon ? /* @__PURE__ */ t(ne, { children: i.icon }) : null,
          /* @__PURE__ */ t(
            We,
            {
              disableTypography: !0,
              primary: /* @__PURE__ */ t(
                Ke,
                {
                  text: i.text,
                  fontWeight: St
                }
              )
            }
          )
        ]
      },
      I
    );
  }, Te = (i, _, M, I, $, G) => {
    const te = !$, X = /* @__PURE__ */ u(
      Re,
      {
        "aria-label": _,
        disabled: te,
        onClick: $,
        "data-testid": (G == null ? void 0 : G.testId) ?? `sidebar-item-${_}`,
        "data-active": I ? "true" : "false",
        sx: R ? {
          display: "flex",
          flexDirection: "column",
          gap: 0.25,
          width: "100%",
          maxWidth: "100%",
          height: "auto",
          // 8px padding on all sides of the item container.
          p: 1,
          borderRadius: "8px",
          color: I ? C : K,
          bgcolor: I ? m : "transparent",
          "& .MuiSvgIcon-root": {
            fontSize: Cr
          },
          "&:hover": se,
          ...Bt
        } : {
          // Icon-only collapsed rail (collapsible variant):
          // original hover — accent when active, else a subtle
          // tint; no foreground change.
          width: 44,
          height: 44,
          color: I ? C : K,
          bgcolor: I ? m : "transparent",
          borderRadius: I ? "8px" : "50%",
          "&:hover": {
            bgcolor: I ? m : G != null && G.insideGroup ? "action.hover" : k,
            borderRadius: "8px"
          },
          ...Bt
        },
        children: [
          M,
          R ? /* @__PURE__ */ t(
            Ke,
            {
              text: _,
              variant: "caption",
              center: !0,
              fontSize: Or
            }
          ) : null
        ]
      }
    );
    return R ? te ? /* @__PURE__ */ t("span", { children: X }, i) : /* @__PURE__ */ t(p.Fragment, { children: X }, i) : /* @__PURE__ */ t(ge, { title: _, placement: "right", arrow: !0, children: te ? /* @__PURE__ */ t("span", { children: X }) : X }, i);
  }, S = (i) => {
    const _ = Ge(i, o), M = He(i, o), I = Et("", i), $ = pe(i, I), G = /* @__PURE__ */ u(
      Re,
      {
        "aria-label": i.text,
        "aria-expanded": $,
        onClick: () => Oe(I, $),
        "data-testid": `sidebar-item-${i.text}`,
        "data-active": M ? "true" : "false",
        sx: {
          display: "flex",
          flexDirection: "column",
          gap: R ? 0.25 : 0,
          width: R ? "100%" : 44,
          maxWidth: "100%",
          // 8px padding on all sides of the labeled item container.
          ...R ? { p: 1 } : { py: 0.75 },
          borderRadius: "10px",
          color: M ? C : K,
          bgcolor: M ? m : "transparent",
          // rail-labeled: active AND hover share the highlight. collapsible:
          // original behavior — accent only when active; the outer pill
          // supplies the idle-hover tint, so the button stays transparent.
          "&:hover": R ? { bgcolor: m, color: C } : {
            bgcolor: M ? m : "transparent"
          },
          ...Bt
        },
        children: [
          R ? /* @__PURE__ */ t(
            b,
            {
              sx: {
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                "& .MuiSvgIcon-root": {
                  fontSize: Cr
                }
              },
              children: i.icon
            }
          ) : i.icon,
          R ? /* @__PURE__ */ t(
            Ke,
            {
              text: i.text,
              variant: "caption",
              center: !0,
              fontSize: Or
            }
          ) : null,
          /* @__PURE__ */ t(cn, { open: $, size: an })
        ]
      }
    ), te = R ? G : /* @__PURE__ */ t(ge, { title: i.text, placement: "right", arrow: !0, children: G });
    return /* @__PURE__ */ u(
      b,
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
          bgcolor: _ ? k : "transparent",
          ...R ? {} : { "&:hover": { bgcolor: k } }
        },
        children: [
          te,
          $ ? jr(i.subitems, i.icon).map(
            ({ sub: X, icon: Ae }) => Te(
              X.path,
              X.text,
              Ae,
              He(X, o),
              () => be(X.path),
              {
                insideGroup: !0,
                testId: `sidebar-subitem-${X.text}`
              }
            )
          ) : null
        ]
      },
      i.text
    );
  }, ee = (i) => /* @__PURE__ */ t(
    b,
    {
      sx: {
        width: "100%",
        display: "flex",
        justifyContent: "center"
      },
      children: Te(
        i.text,
        i.subtitle ? `${i.text} · ${i.subtitle}` : i.text,
        i.icon,
        He(i, o),
        i.path ? () => be(i.path) : void 0,
        { testId: `sidebar-item-${i.text}` }
      )
    },
    i.text
  ), q = (i) => st(i) ? T ? S(i) : _e(i) : T ? ee(i) : Ce(i), me = (i) => /* @__PURE__ */ t(
    ie,
    {
      spacing: 0.5,
      sx: {
        width: "100%",
        alignItems: T ? "center" : "stretch"
      },
      children: i.map(q)
    }
  ), ce = T ? O : W, Se = h ? /* @__PURE__ */ t(
    b,
    {
      "data-testid": "sidebar-header",
      sx: {
        height: Ir,
        minHeight: Ir,
        flexShrink: 0,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        bgcolor: J
      },
      children: d || s ? /* @__PURE__ */ t(
        wt,
        {
          logo: d,
          title: T ? void 0 : s,
          appName: s || "App",
          onClick: l,
          color: E ?? Ie,
          testId: "sidebar-header-brand"
        }
      ) : null
    }
  ) : null, ve = !h && d ? /* @__PURE__ */ t(
    b,
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
          color: E ?? Ie,
          testId: "sidebar-header-brand"
        }
      )
    }
  ) : null, de = R ? 0.5 : T ? 1 : 1.5;
  return /* @__PURE__ */ u(
    b,
    {
      component: "nav",
      "aria-label": "Main sidebar",
      "data-testid": "collapsible-sidebar",
      "data-collapsed": T ? "true" : "false",
      "data-labeled": R ? "true" : "false",
      sx: {
        width: ce,
        minWidth: ce,
        height: "100%",
        boxSizing: "border-box",
        bgcolor: le,
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
        Se ?? ve,
        F ? /* @__PURE__ */ t(
          b,
          {
            sx: { flexShrink: 0, px: de, pt: 1, pb: 1 },
            children: F
          }
        ) : null,
        /* @__PURE__ */ u(
          b,
          {
            sx: {
              flex: "1 1 auto",
              minHeight: 0,
              display: "flex",
              flexDirection: "column",
              overflowY: "auto",
              overflowX: "hidden",
              px: de,
              pt: H && !h ? `${H}px` : 1,
              pb: 2
            },
            children: [
              me(e),
              r.length > 0 ? /* @__PURE__ */ u(b, { sx: { mt: "auto", pt: 2 }, children: [
                A ? null : /* @__PURE__ */ t(we, { sx: { mb: 1, borderColor: "divider" } }),
                me(r)
              ] }) : null
            ]
          }
        ),
        A ? /* @__PURE__ */ t(b, { sx: { flexShrink: 0, px: de, pb: 1.5 }, children: /* @__PURE__ */ t(
          b,
          {
            sx: {
              borderTop: `1px solid ${ze}`,
              pt: 1.5
            },
            children: A
          }
        ) }) : null
      ]
    }
  );
}, jt = "var(--lumora-content-padding, 0px)", Tr = `calc(${jt} * -1)`, ea = ({
  children: e,
  flushTop: r = !0,
  sticky: o = !1,
  background: n = "background.paper",
  divider: a = !0,
  inset: d = !0,
  sx: s
}) => /* @__PURE__ */ t(
  b,
  {
    "data-testid": "full-bleed-section",
    sx: [
      {
        mx: Tr,
        mt: r ? Tr : 0,
        // Space below it, like any other block on the page
        mb: jt,
        px: d ? jt : 0,
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
), dn = ({ keys: e }) => /* @__PURE__ */ t(
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
    children: e.map((r) => /* @__PURE__ */ t("span", { children: r }, r))
  }
);
class L extends Error {
  constructor(r, o, n = null) {
    super(r), this.name = "AuthError", this.code = o, this.originalError = n, this.timestamp = (/* @__PURE__ */ new Date()).toISOString();
  }
}
const U = {
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
}, un = () => {
  if (!(typeof window > "u" || !window.localStorage))
    try {
      const e = localStorage.getItem(
        Ne.ACCESS_TOKEN
      ), r = localStorage.getItem(
        Ne.REFRESH_TOKEN
      ), o = localStorage.getItem(Ne.USER);
      e && !localStorage.getItem(V.ACCESS_TOKEN) && localStorage.setItem(V.ACCESS_TOKEN, e), r && !localStorage.getItem(V.REFRESH_TOKEN) && localStorage.setItem(
        V.REFRESH_TOKEN,
        r
      ), o && !localStorage.getItem(V.USER) && localStorage.setItem(V.USER, o), (e || r || o) && (localStorage.removeItem(Ne.ACCESS_TOKEN), localStorage.removeItem(Ne.REFRESH_TOKEN), localStorage.removeItem(Ne.USER));
    } catch (e) {
      console.warn("Failed to migrate legacy localStorage keys:", e);
    }
}, Ht = (e) => {
  try {
    if (typeof window > "u")
      return console.warn("localStorage access attempted on server side"), null;
    if (!window.localStorage)
      throw new L(
        "localStorage is not available",
        U.STORAGE_ACCESS_DENIED
      );
    return window.localStorage.getItem(e);
  } catch (r) {
    throw r.name === "QuotaExceededError" ? (console.error("Storage quota exceeded"), new L(
      "Storage quota exceeded. Please clear browser data.",
      U.STORAGE_ACCESS_DENIED,
      r
    )) : r.name === "SecurityError" ? (console.error(
      "localStorage access denied (private browsing or security settings)"
    ), new L(
      "Access to localStorage is denied. Please check browser settings.",
      U.STORAGE_ACCESS_DENIED,
      r
    )) : (console.error(
      "Unexpected error accessing localStorage:",
      r.name
    ), new L(
      "Failed to access storage",
      U.STORAGE_ACCESS_DENIED,
      r
    ));
  }
}, Ft = (e, r) => {
  try {
    if (typeof window > "u")
      return console.warn("localStorage write attempted on server side"), !1;
    if (!window.localStorage)
      throw new L(
        "localStorage is not available",
        U.STORAGE_ACCESS_DENIED
      );
    return window.localStorage.setItem(e, r), !0;
  } catch (o) {
    throw o.name === "QuotaExceededError" ? (console.error("Storage quota exceeded"), new L(
      "Storage quota exceeded. Please clear browser data.",
      U.STORAGE_ACCESS_DENIED,
      o
    )) : o.name === "SecurityError" ? (console.error(
      "localStorage write denied (private browsing or security settings)"
    ), new L(
      "Access to localStorage is denied. Please check browser settings.",
      U.STORAGE_ACCESS_DENIED,
      o
    )) : (console.error(
      "Unexpected error writing to localStorage:",
      o.name
    ), new L(
      "Failed to write to storage",
      U.STORAGE_ACCESS_DENIED,
      o
    ));
  }
}, Yr = (e) => {
  try {
    return typeof window > "u" ? (console.warn("localStorage removal attempted on server side"), !1) : window.localStorage ? (window.localStorage.removeItem(e), !0) : (console.warn("localStorage is not available"), !1);
  } catch (r) {
    return r.name !== "SecurityError" && console.warn(`Could not remove localStorage key "${e}"`), !1;
  }
}, lt = () => {
  try {
    un();
    const e = Ht(V.ACCESS_TOKEN), r = Ht(V.REFRESH_TOKEN), o = Ht(V.USER);
    let n = null;
    if (o)
      try {
        n = JSON.parse(o);
      } catch {
        o && o !== "null" && o !== "undefined" && console.warn(
          "Invalid user data in localStorage, clearing:",
          o.substring(0, 50)
        ), Yr(V.USER);
      }
    return {
      accessToken: e,
      refreshToken: r,
      user: n
    };
  } catch (e) {
    throw e instanceof L ? e : new L(
      "Failed to retrieve authentication tokens",
      U.UNKNOWN_ERROR,
      e
    );
  }
}, hn = () => {
  try {
    const { accessToken: e, refreshToken: r } = lt();
    return !(e || r) ? {
      isAuthenticated: !1,
      error: new L(
        "No authentication tokens found",
        U.TOKEN_NOT_FOUND
      )
    } : {
      isAuthenticated: !0,
      error: null
    };
  } catch (e) {
    return console.error("Authentication check failed:", e), {
      isAuthenticated: !1,
      error: e instanceof L ? e : new L(
        "Authentication check failed",
        U.UNKNOWN_ERROR,
        e
      )
    };
  }
}, qr = (e, r, o = null) => {
  try {
    if (!e && !r)
      throw new L(
        "At least one token must be provided",
        U.TOKEN_INVALID
      );
    return e && Ft(V.ACCESS_TOKEN, e), r && Ft(V.REFRESH_TOKEN, r), o && Ft(V.USER, JSON.stringify(o)), {
      success: !0,
      error: null
    };
  } catch (n) {
    return console.error("Failed to store authentication tokens:", n), {
      success: !1,
      error: n instanceof L ? n : new L(
        "Failed to store tokens",
        U.UNKNOWN_ERROR,
        n
      )
    };
  }
}, ct = () => {
  try {
    return [
      V.ACCESS_TOKEN,
      V.REFRESH_TOKEN,
      V.USER,
      // Also clear legacy keys for complete cleanup
      Ne.ACCESS_TOKEN,
      Ne.REFRESH_TOKEN,
      Ne.USER
    ].map((n) => Yr(n)).every((n) => n) || console.warn("Some tokens could not be removed from localStorage"), {
      success: !0,
      error: null
    };
  } catch (e) {
    return console.error("Failed to clear authentication tokens:", e), {
      success: !1,
      error: e instanceof L ? e : new L(
        "Failed to clear tokens",
        U.LOGOUT_FAILED,
        e
      )
    };
  }
}, fn = () => {
  try {
    const { user: e } = lt();
    return {
      user: e,
      error: null
    };
  } catch (e) {
    return console.error("Failed to get current user:", e), {
      user: null,
      error: e instanceof L ? e : new L(
        "Failed to retrieve user data",
        U.UNKNOWN_ERROR,
        e
      )
    };
  }
}, ta = (e) => {
  if (!(e instanceof L))
    return "An unexpected error occurred. Please try again.";
  switch (e.code) {
    case U.STORAGE_ACCESS_DENIED:
      return "Unable to access browser storage. Please check your browser settings and disable private browsing if enabled.";
    case U.TOKEN_NOT_FOUND:
      return "You are not logged in. Please sign in to continue.";
    case U.TOKEN_INVALID:
      return "Your session is invalid. Please sign in again.";
    case U.TOKEN_EXPIRED:
      return "Your session has expired. Please sign in again.";
    case U.LOGOUT_FAILED:
      return "Failed to log out properly. Please clear your browser cache and try again.";
    case U.UNKNOWN_ERROR:
    default:
      return "An unexpected error occurred. Please try again or contact support if the problem persists.";
  }
}, Xt = (e, r = "Unknown") => {
  const o = {
    context: r,
    message: e.message,
    code: e instanceof L ? e.code : "UNKNOWN",
    timestamp: e instanceof L ? e.timestamp : (/* @__PURE__ */ new Date()).toISOString(),
    stack: e.stack
  };
  e instanceof L && e.originalError && (o.originalError = {
    name: e.originalError.name,
    message: e.originalError.message
  }), console.warn("[Auth Error]", o);
}, pn = (e) => {
  if (!e)
    throw new Error("API base URL is required to create axios client");
  const r = wr.create({
    baseURL: e,
    headers: {
      "Content-Type": "application/json"
    }
  });
  let o = !1, n = null, a = [];
  const d = (s, l) => {
    a.forEach(({ resolve: h, reject: f }) => {
      s ? f(s) : l && h(l);
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
      const l = s.config, h = (m = s.response) == null ? void 0 : m.status, f = (l == null ? void 0 : l.url) || "", c = f.includes("/auth/refresh");
      if (h !== 401 || l._retry || c)
        return Promise.reject(s);
      l._retry = !0;
      const { refreshToken: E } = lt();
      if (!E) {
        const x = new Error(
          "No refresh token available for token refresh"
        );
        return Xt(x, "AxiosClient - Token Refresh"), ct(), typeof window < "u" && (window.location.href = "/login"), Promise.reject(s);
      }
      if (o && n)
        return new Promise((x, v) => {
          a.push({ resolve: x, reject: v });
        }).then((x) => {
          const {
            accessToken: v,
            refreshToken: g
          } = x;
          if (l.headers && (l.headers.Authorization = `Bearer ${v}`), f.includes("/auth/logout"))
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
      o = !0, n = wr.post(
        `${e}/auth/refresh`,
        {
          refresh_token: E
        }
      );
      try {
        const x = await n, { accessToken: v, refreshToken: g } = x.data;
        if (qr(v, g, null), d(null, {
          accessToken: v,
          refreshToken: g
        }), l.headers && (l.headers.Authorization = `Bearer ${v}`), f.includes("/auth/logout"))
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
        return Xt(
          x,
          "AxiosClient - Token Refresh Failed"
        ), d(x), ct(), typeof window < "u" && (window.location.href = "/login"), Promise.reject(x);
      } finally {
        o = !1, n = null;
      }
    }
  ), r;
}, he = {
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
}, fe = {
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
}, Jr = Br(), xe = Jr.typography.pxToRem, mn = (e) => {
  const r = e === "dark", o = [...Jr.shadows];
  return o[1] = r ? "hsla(220, 30%, 5%, 0.7) 0px 4px 16px 0px, hsla(220, 25%, 10%, 0.8) 0px 8px 16px -5px" : "hsla(220, 30%, 5%, 0.07) 0px 4px 16px 0px, hsla(220, 25%, 10%, 0.07) 0px 8px 16px -5px", {
    palette: {
      mode: e,
      primary: {
        light: r ? he[300] : he[200],
        main: he[400],
        dark: he[700],
        contrastText: he[50]
      },
      info: r ? {
        light: he[500],
        main: he[700],
        dark: he[900],
        contrastText: he[300]
      } : {
        light: he[100],
        main: he[300],
        dark: he[600],
        contrastText: fe[50]
      },
      warning: r ? { light: qe[400], main: qe[500], dark: qe[700] } : { light: qe[300], main: qe[400], dark: qe[800] },
      error: r ? { light: Je[400], main: Je[500], dark: Je[700] } : { light: Je[300], main: Je[400], dark: Je[800] },
      success: r ? { light: Ye[400], main: Ye[500], dark: Ye[700] } : { light: Ye[300], main: Ye[400], dark: Ye[800] },
      grey: fe,
      divider: r ? Fe(fe[700], 0.6) : Fe(fe[300], 0.4),
      background: r ? { default: fe[900], paper: "hsl(220, 30%, 7%)" } : { default: "hsl(0, 0%, 99%)", paper: "hsl(220, 35%, 97%)" },
      text: r ? { primary: "hsl(0, 0%, 100%)", secondary: fe[400] } : { primary: fe[800], secondary: fe[600] },
      action: r ? {
        hover: Fe(fe[600], 0.2),
        selected: Fe(fe[600], 0.3)
      } : {
        hover: Fe(fe[200], 0.2),
        selected: Fe(fe[200], 0.3)
      }
    },
    typography: {
      fontFamily: "Inter, sans-serif",
      h1: {
        fontSize: xe(48),
        fontWeight: 600,
        lineHeight: 1.2,
        letterSpacing: -0.5
      },
      h2: { fontSize: xe(36), fontWeight: 600, lineHeight: 1.2 },
      h3: { fontSize: xe(30), lineHeight: 1.2 },
      h4: { fontSize: xe(24), fontWeight: 600, lineHeight: 1.5 },
      h5: { fontSize: xe(20), fontWeight: 600 },
      h6: { fontSize: xe(18), fontWeight: 600 },
      subtitle1: { fontSize: xe(18) },
      subtitle2: { fontSize: xe(14), fontWeight: 500 },
      body1: { fontSize: xe(14) },
      body2: { fontSize: xe(14), fontWeight: 400 },
      caption: { fontSize: xe(12), fontWeight: 400 }
    },
    shape: {
      borderRadius: 8
    },
    shadows: o
  };
}, xn = async (e, r) => {
  const { accessToken: o, refreshToken: n } = lt();
  if (o)
    return !0;
  if (n)
    try {
      const a = await e.post("/auth/refresh", {
        refresh_token: n
      });
      if (a.data.success && a.data.accessToken)
        return qr(
          a.data.accessToken,
          a.data.refreshToken || null,
          null
        ), !0;
    } catch (a) {
      Xt(a, "TokenValidator - Refresh Failed");
    }
  return ct(), r ? r() : window.location.href = "/login", !1;
}, yt = ({ size: e = 20 }) => /* @__PURE__ */ u(
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
), Qe = "#09C1AE", Pt = (e, r) => ({
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
    borderRadius: `${e - 2}px`,
    bgcolor: r,
    zIndex: 1
  },
  "& > *": { position: "relative", zIndex: 2 },
  "@keyframes nexa-beam": { to: { transform: "rotate(360deg)" } },
  "@media (prefers-reduced-motion: reduce)": {
    "&::before": { animation: "none" }
  }
}), Ar = ({
  variant: e,
  onClick: r,
  active: o = !1,
  busy: n = !1,
  shortcutKeys: a,
  accentColor: d = "#01584f",
  rightOffsetPx: s = 0
}) => {
  const l = a ? `Ask Nexa (${a.join("")})` : "Ask Nexa", h = {
    onClick: r,
    "aria-label": "Ask Nexa",
    "aria-pressed": o,
    "data-testid": "assistant-button"
  };
  return e === "sidebar" ? /* @__PURE__ */ u(
    je,
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
        borderColor: o ? Qe : "rgba(9, 193, 174, 0.45)",
        bgcolor: "rgba(9, 193, 174, 0.08)",
        color: d,
        transition: "border-color 150ms, background-color 150ms",
        "&:hover": { bgcolor: "rgba(9, 193, 174, 0.14)" },
        "&.Mui-focusVisible": {
          outline: `2px solid ${Qe}`,
          outlineOffset: 2
        },
        ...n && Pt(8, "background.paper")
      },
      children: [
        /* @__PURE__ */ t(yt, { size: 20 }),
        /* @__PURE__ */ t(
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
        a && /* @__PURE__ */ t(dn, { keys: a })
      ]
    }
  ) : e === "sidebar-icon" ? /* @__PURE__ */ t(ge, { title: l, placement: "right", arrow: !0, children: /* @__PURE__ */ t(
    Re,
    {
      ...h,
      "data-variant": "sidebar-icon",
      sx: {
        width: 44,
        height: 44,
        borderRadius: "8px",
        border: "1px solid",
        borderColor: o ? Qe : "rgba(9, 193, 174, 0.45)",
        bgcolor: "rgba(9, 193, 174, 0.08)",
        "&:hover": { bgcolor: "rgba(9, 193, 174, 0.14)" },
        ...n && Pt(8, "background.paper")
      },
      children: /* @__PURE__ */ t(yt, { size: 20 })
    }
  ) }) : /* @__PURE__ */ t(ge, { title: l, placement: "left", children: /* @__PURE__ */ t(
    Re,
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
        outline: o ? `2px solid ${Qe}` : "none",
        outlineOffset: 2,
        "&:hover": { bgcolor: "background.paper", boxShadow: 6 },
        "&.Mui-focusVisible": { outline: `2px solid ${Qe}` },
        ...n && Pt(16, "background.paper")
      },
      children: /* @__PURE__ */ t(b, { sx: { display: "flex", alignItems: "center" }, children: /* @__PURE__ */ t(yt, { size: 26 }) })
    }
  ) });
}, vt = ({
  title: e = "",
  message: r = "",
  buttonText: o = "",
  onButtonClick: n,
  show: a = !0
}) => a ? /* @__PURE__ */ t(ko, { variant: "outlined", sx: { m: 1.5, flexShrink: 0 }, children: /* @__PURE__ */ u(zo, { children: [
  /* @__PURE__ */ t(Lo, { fontSize: "small" }),
  /* @__PURE__ */ t(z, { gutterBottom: !0, sx: { fontWeight: 600 }, children: e }),
  /* @__PURE__ */ t(
    z,
    {
      variant: "body2",
      sx: { mb: 2, color: "text.secondary" },
      children: r
    }
  ),
  /* @__PURE__ */ t(
    Hr,
    {
      variant: "contained",
      size: "small",
      fullWidth: !0,
      onClick: n,
      children: o
    }
  )
] }) }) : null, it = 24, gn = 720, bn = 1140, Sn = 1250, vn = ({
  open: e,
  children: r,
  variant: o,
  position: n,
  width: a,
  sidebarWidthPx: d,
  bottomOffsetPx: s,
  fullScreen: l,
  fullScreenBottom: h = "0px",
  onClose: f
}) => {
  p.useEffect(() => {
    if (!e || !f)
      return;
    const v = (g) => {
      g.key === "Escape" && f();
    };
    return window.addEventListener("keydown", v), () => window.removeEventListener("keydown", v);
  }, [e, f]);
  const c = o === "docked", E = it + s;
  let m;
  l ? m = {
    top: 0,
    left: 0,
    right: 0,
    bottom: h,
    borderRadius: 0
  } : c ? m = {
    top: 0,
    right: 0,
    bottom: 0,
    width: a,
    maxWidth: "100vw",
    borderRadius: 0,
    borderWidth: "0 0 0 1px"
  } : m = {
    bottom: E,
    ...n === "left" ? { left: d + it } : { right: it },
    width: a,
    maxWidth: `calc(100vw - ${it * 2}px)`,
    height: `min(${gn}px, calc(100vh - ${E + it}px))`,
    borderRadius: "12px"
  };
  const x = /* @__PURE__ */ t(
    Yt,
    {
      role: c ? "complementary" : "dialog",
      "aria-label": "Nexa chat",
      "data-testid": "chat-panel",
      "data-variant": o,
      elevation: 8,
      sx: {
        position: "fixed",
        zIndex: c ? bn : Sn,
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
  return c ? /* @__PURE__ */ t(Bo, { direction: "left", in: e, mountOnEnter: !0, children: x }) : /* @__PURE__ */ t(
    Mo,
    {
      in: e,
      mountOnEnter: !0,
      style: {
        transformOrigin: n === "left" ? "bottom left" : "bottom right"
      },
      children: x
    }
  );
}, En = 180, Dr = 250, yn = "#01584F", wn = ({
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
    ge,
    {
      title: e,
      placement: "right",
      arrow: !0,
      enterDelay: 400,
      disableHoverListener: !n,
      disableFocusListener: !n,
      disableTouchListener: !n,
      children: /* @__PURE__ */ t(
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
          children: e
        }
      )
    }
  );
}, Zr = (e, r, o, n) => {
  const a = e ? 48 : 44, d = e ? "text.secondary" : r, s = e ? yn : r;
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
}, Qr = ({ link: e }) => /* @__PURE__ */ u(ie, { alignItems: "center", spacing: 1, sx: { width: "100%" }, children: [
  /* @__PURE__ */ t(
    b,
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
    wn,
    {
      text: e.text,
      testId: `rail-item-caption-${e.text}`
    }
  )
] }), eo = (e, r, o) => o ? e : /* @__PURE__ */ t(ge, { title: r, placement: "right", arrow: !0, children: e }), Rn = ({
  link: e,
  activePath: r,
  onLinkClick: o,
  accentColor: n,
  isSecondary: a,
  surfaceBackgroundColor: d,
  railShowTitles: s
}) => {
  const l = It(), [h, f] = p.useState(null), [c, E] = p.useState(!1), m = p.useRef(
    null
  ), x = p.useRef(null), v = p.useRef(null), g = p.useRef(!1), y = p.useRef(!1), T = p.useId(), W = () => {
    m.current && (clearTimeout(m.current), m.current = null);
  }, O = () => {
    W(), m.current = setTimeout(() => {
      E(!1), m.current = null;
    }, En);
  }, R = () => {
    W(), E(!0);
  };
  p.useEffect(() => {
    if (!c)
      return;
    const N = (P) => {
      var C;
      P.key === "Escape" && (E(!1), (C = v.current) == null || C.focus());
    };
    return document.addEventListener("keydown", N), () => document.removeEventListener("keydown", N);
  }, [c]), p.useEffect(() => {
    if (!c || !y.current)
      return;
    const N = globalThis.requestAnimationFrame(() => {
      var C;
      const P = (C = x.current) == null ? void 0 : C.querySelector(
        '[role="menuitem"]'
      );
      P == null || P.focus(), y.current = !1;
    });
    return () => cancelAnimationFrame(N);
  }, [c]);
  const H = Ge(e, r), { activeBg: F, sx: A } = Zr(
    a,
    n,
    H,
    s
  ), ae = /* @__PURE__ */ t(
    Re,
    {
      ref: v,
      component: e.path ? "a" : "button",
      href: e.path || void 0,
      "aria-label": e.text,
      onFocus: () => {
        g.current || R();
      },
      onBlur: (N) => {
        var C;
        const P = N.relatedTarget;
        P && ((C = x.current) != null && C.contains(P)) || O();
      },
      onKeyDown: (N) => {
        N.key === "ArrowDown" && (N.preventDefault(), y.current = !0, R());
      },
      onClick: (N) => {
        N.preventDefault(), N.stopPropagation(), e.path && (o == null || o(e.path));
      },
      "aria-haspopup": "menu",
      "aria-expanded": c,
      "aria-controls": c ? T : void 0,
      "data-testid": `rail-submenu-trigger-${e.text}`,
      sx: A,
      children: s ? /* @__PURE__ */ t(Qr, { link: e }) : e.icon
    }
  );
  return /* @__PURE__ */ u(
    b,
    {
      sx: {
        width: "100%",
        display: "flex",
        justifyContent: "center"
      },
      children: [
        /* @__PURE__ */ t(
          b,
          {
            ref: f,
            "data-testid": `rail-submenu-anchor-${e.text}`,
            sx: { display: "inline-flex", maxWidth: "100%" },
            onMouseEnter: () => {
              g.current = !0, R();
            },
            onMouseLeave: () => {
              g.current = !1, O();
            },
            children: eo(ae, e.text, s)
          }
        ),
        /* @__PURE__ */ t(
          Fo,
          {
            open: c && !!h,
            anchorEl: h,
            placement: "right-start",
            modifiers: [{ name: "offset", options: { offset: [8, 0] } }],
            sx: { zIndex: (N) => N.zIndex.modal },
            children: /* @__PURE__ */ t(
              Yt,
              {
                ref: x,
                elevation: 0,
                onMouseEnter: W,
                onMouseLeave: O,
                "data-testid": `rail-submenu-panel-${e.text}`,
                sx: {
                  bgcolor: d,
                  backgroundImage: "none",
                  borderRadius: "4px",
                  border: "1px solid",
                  borderColor: "divider",
                  boxShadow: l.shadows[8],
                  maxWidth: Dr,
                  minWidth: 0,
                  py: 0.5,
                  boxSizing: "border-box"
                },
                children: /* @__PURE__ */ t(
                  qt,
                  {
                    id: T,
                    dense: !0,
                    autoFocus: !1,
                    role: "menu",
                    sx: {
                      bgcolor: "transparent",
                      py: 0,
                      maxWidth: Dr
                    },
                    children: Y(e.subitems, e.text, 0)
                  }
                )
              }
            )
          }
        )
      ]
    }
  );
  function Y(N, P, C) {
    return N.flatMap((B) => {
      const se = Et(P, B);
      return st(B) ? [
        /* @__PURE__ */ t(
          Ho,
          {
            disableSticky: !0,
            title: B.text,
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
            children: B.text
          },
          se
        ),
        ...Y(B.subitems, se, C + 1)
      ] : [
        /* @__PURE__ */ u(
          ke,
          {
            role: "menuitem",
            title: B.text,
            disabled: !B.path,
            selected: He(B, r),
            onClick: (k) => {
              k.preventDefault(), B.path && (o == null || o(B.path)), E(!1);
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
              B.icon ? /* @__PURE__ */ t(ne, { children: B.icon }) : null,
              /* @__PURE__ */ t(
                We,
                {
                  primary: B.text,
                  primaryTypographyProps: {
                    noWrap: !0
                  }
                }
              )
            ]
          },
          se
        )
      ];
    });
  }
}, In = ({
  link: e,
  activePath: r,
  onLinkClick: o,
  accentColor: n,
  isSecondary: a,
  railShowTitles: d
}) => {
  const s = !!(e.path && r === e.path), { sx: l } = Zr(
    a,
    n,
    s,
    d
  );
  return eo(
    /* @__PURE__ */ t(
      Re,
      {
        component: e.path ? "a" : "button",
        href: e.path || void 0,
        "aria-label": e.text,
        onClick: (h) => {
          h.preventDefault(), h.stopPropagation(), e.path && (o == null || o(e.path));
        },
        disabled: !e.path,
        sx: l,
        children: d ? /* @__PURE__ */ t(Qr, { link: e }) : e.icon
      }
    ),
    e.text,
    d
  );
}, On = () => /* @__PURE__ */ t(
  b,
  {
    sx: {
      width: "100%",
      display: "flex",
      justifyContent: "center"
    },
    children: /* @__PURE__ */ t(we, { sx: { width: "60%", borderColor: "divider" } })
  }
), Cn = () => /* @__PURE__ */ t(
  b,
  {
    sx: {
      width: "100%",
      my: 2,
      display: "flex",
      justifyContent: "center"
    },
    children: /* @__PURE__ */ t(we, { sx: { width: "60%", borderColor: "divider" } })
  }
), Nr = (e, r) => e.map((o, n) => /* @__PURE__ */ u(p.Fragment, { children: [
  r(o, n),
  n < e.length - 1 ? /* @__PURE__ */ t(On, {}) : null
] }, n)), _n = ({
  mainLinks: e,
  secondaryLinks: r = [],
  activePath: o,
  onLinkClick: n,
  accentColor: a = "#01584f",
  surfaceBackgroundColor: d,
  railShowTitles: s = !1
}) => {
  const l = (f, c) => st(f) ? /* @__PURE__ */ t(
    Rn,
    {
      link: f,
      activePath: o,
      onLinkClick: n,
      accentColor: a,
      isSecondary: c,
      surfaceBackgroundColor: d,
      railShowTitles: s
    }
  ) : /* @__PURE__ */ t(
    In,
    {
      link: f,
      activePath: o,
      onLinkClick: n,
      accentColor: a,
      isSecondary: c,
      railShowTitles: s
    }
  ), h = s ? 1.25 : 1;
  return /* @__PURE__ */ u(
    ie,
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
        Nr(e, (f) => l(f, !1)),
        r.length > 0 ? /* @__PURE__ */ u(Pe, { children: [
          /* @__PURE__ */ t(Cn, {}),
          /* @__PURE__ */ t(b, { sx: { mt: "auto", pb: 2 }, children: /* @__PURE__ */ t(ie, { gap: h, alignItems: "center", children: Nr(
            r,
            (f) => l(f, !0)
          ) }) })
        ] }) : null
      ]
    }
  );
}, Tn = (e) => e ? Vr(e) : "USER", An = (e) => e.split(/\s+/).filter(Boolean).slice(0, 2).map((r) => r.charAt(0).toUpperCase()).join(""), Wr = {
  overflow: "hidden",
  textOverflow: "ellipsis",
  whiteSpace: "nowrap",
  maxWidth: "100%"
}, Vt = ({ count: e }) => e ? /* @__PURE__ */ t(
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
    children: e > 99 ? "99+" : e
  }
) : null, Jt = ({ name: e, avatar: r, color: o, size: n = 36 }) => /* @__PURE__ */ t(
  Uo,
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
    children: An(e)
  }
), to = ({ name: e, role: r, avatar: o, avatarColor: n, showText: a }) => /* @__PURE__ */ u(Pe, { children: [
  /* @__PURE__ */ t(Jt, { name: e, avatar: o, color: n }),
  a && /* @__PURE__ */ u(
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
        /* @__PURE__ */ t(
          z,
          {
            variant: "body2",
            sx: { ...Wr, fontWeight: 600, color: "inherit" },
            children: e
          }
        ),
        /* @__PURE__ */ t(
          z,
          {
            variant: "caption",
            sx: { ...Wr, opacity: 0.8, color: "inherit" },
            children: Tn(r)
          }
        )
      ]
    }
  )
] }), kr = {
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
}, ro = ({
  anchorEl: e,
  onClose: r,
  placement: o,
  width: n,
  avatarColor: a,
  showNotifications: d,
  notificationCount: s,
  onNotificationsClick: l,
  userName: h = "User",
  userRole: f,
  userAvatar: c,
  menuItems: E = [],
  showSettings: m,
  onSettingsClick: x,
  showThemeToggler: v,
  theme: g,
  onThemeToggle: y,
  onLogout: T
}) => {
  const W = (O) => () => {
    r(), O == null || O();
  };
  return /* @__PURE__ */ u(
    $o,
    {
      anchorEl: e,
      open: !!e,
      onClose: r,
      anchorOrigin: kr[o].anchor,
      transformOrigin: kr[o].transform,
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
          ie,
          {
            direction: "row",
            spacing: 1.25,
            sx: { px: 1.5, py: 1, alignItems: "center" },
            children: /* @__PURE__ */ t(
              to,
              {
                name: h,
                role: f,
                avatar: c,
                avatarColor: a,
                showText: !0
              }
            )
          }
        ),
        /* @__PURE__ */ t(we, {}),
        d && /* @__PURE__ */ u(ke, { onClick: W(l), children: [
          /* @__PURE__ */ t(ne, { children: /* @__PURE__ */ t($r, { fontSize: "small" }) }),
          /* @__PURE__ */ t(We, { children: "Notifications" }),
          /* @__PURE__ */ t(Vt, { count: s })
        ] }),
        E.map((O) => /* @__PURE__ */ u(ke, { onClick: W(O.onClick), children: [
          O.icon && /* @__PURE__ */ t(ne, { children: O.icon }),
          /* @__PURE__ */ t(We, { inset: !O.icon, children: O.label }),
          /* @__PURE__ */ t(Vt, { count: O.badge })
        ] }, O.key)),
        m && /* @__PURE__ */ u(ke, { onClick: W(x), children: [
          /* @__PURE__ */ t(ne, { children: /* @__PURE__ */ t(Po, { fontSize: "small" }) }),
          /* @__PURE__ */ t(We, { children: "Settings" })
        ] }),
        v && [
          /* @__PURE__ */ t(we, {}, "theme-divider"),
          /* @__PURE__ */ u(b, { sx: { px: 1.5, py: 1 }, children: [
            /* @__PURE__ */ t(
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
              Ko,
              {
                exclusive: !0,
                fullWidth: !0,
                size: "small",
                "aria-label": "Theme",
                value: g,
                onChange: (O, R) => R && R !== g && (y == null ? void 0 : y()),
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
                  /* @__PURE__ */ t(Rr, { value: "light", children: "Light" }),
                  /* @__PURE__ */ t(Rr, { value: "dark", children: "Dark" })
                ]
              }
            )
          ] }, "theme")
        ],
        /* @__PURE__ */ t(we, {}),
        /* @__PURE__ */ u(
          ke,
          {
            onClick: W(T),
            sx: {
              color: g === "dark" ? "hsl(0, 90%, 65%)" : "error.main"
            },
            children: [
              /* @__PURE__ */ t(ne, { sx: { color: "inherit" }, children: /* @__PURE__ */ t(Ur, { fontSize: "small" }) }),
              /* @__PURE__ */ t(We, { children: "Log out" })
            ]
          }
        )
      ]
    }
  );
}, oo = 64, Dn = 2, at = ({
  label: e,
  icon: r,
  onClick: o,
  active: n,
  color: a,
  activeColor: d,
  activeBackground: s,
  ariaLabel: l,
  haspopup: h,
  isPage: f = !1,
  testId: c
}) => /* @__PURE__ */ u(
  je,
  {
    onClick: o,
    "aria-label": l ?? e,
    "aria-haspopup": h,
    "aria-expanded": h ? n : void 0,
    "aria-current": f && n ? "page" : void 0,
    "data-testid": c,
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
        b,
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
        z,
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
), Nn = ({
  onMenuClick: e,
  menuOpen: r,
  onSearchClick: o,
  searchOpen: n,
  showAssistant: a,
  onAssistantClick: d,
  assistantActive: s,
  showProfile: l,
  background: h,
  color: f,
  activeColor: c,
  activeBackground: E,
  pinnedLinks: m = [],
  activePath: x,
  onLinkClick: v,
  ...g
}) => {
  const y = m.filter((A) => A.path).slice(0, Dn), [T, W] = p.useState(
    null
  ), { userName: O = "User", userAvatar: R, avatarColor: H } = g, F = { color: f, activeColor: c, activeBackground: E };
  return /* @__PURE__ */ u(
    Yt,
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
        height: `calc(${oo}px + env(safe-area-inset-bottom, 0px))`,
        pb: "env(safe-area-inset-bottom, 0px)",
        bgcolor: h,
        borderTop: "1px solid",
        borderColor: "divider"
      },
      children: [
        e && /* @__PURE__ */ t(
          at,
          {
            label: "Menu",
            icon: /* @__PURE__ */ t(Fr, {}),
            onClick: e,
            active: r,
            haspopup: "dialog",
            testId: "mobile-nav-menu",
            ...F
          }
        ),
        y.map((A) => /* @__PURE__ */ t(
          at,
          {
            label: A.text,
            icon: A.icon,
            onClick: () => v == null ? void 0 : v(A.path),
            active: Ge(A, x),
            isPage: !0,
            testId: `mobile-nav-link-${A.text}`,
            ...F
          },
          A.path
        )),
        a && /* @__PURE__ */ t(
          at,
          {
            label: "Nexa",
            ariaLabel: "Ask Nexa",
            icon: /* @__PURE__ */ t(
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
                children: /* @__PURE__ */ t(yt, { size: 18 })
              }
            ),
            onClick: d,
            active: s,
            testId: "mobile-nav-nexa",
            ...F
          }
        ),
        o && /* @__PURE__ */ t(
          at,
          {
            label: "Search",
            icon: /* @__PURE__ */ t(Pr, {}),
            onClick: o,
            active: n,
            haspopup: "dialog",
            testId: "mobile-nav-search",
            ...F
          }
        ),
        l && /* @__PURE__ */ u(Pe, { children: [
          /* @__PURE__ */ t(
            at,
            {
              label: "Account",
              ariaLabel: `Account menu for ${O}`,
              icon: /* @__PURE__ */ t(
                Jt,
                {
                  name: O,
                  avatar: R,
                  color: H,
                  size: 26
                }
              ),
              onClick: (A) => W(A.currentTarget),
              active: !!T,
              haspopup: "menu",
              testId: "mobile-nav-account",
              ...F
            }
          ),
          /* @__PURE__ */ t(
            ro,
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
}, Wn = ({
  open: e,
  onClose: r,
  search: o
}) => /* @__PURE__ */ t(
  Go,
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
    children: /* @__PURE__ */ u(
      ie,
      {
        direction: "row",
        spacing: 1,
        "data-testid": "mobile-search-sheet",
        sx: { alignItems: "center" },
        children: [
          /* @__PURE__ */ t(b, { sx: { flex: "1 1 auto", minWidth: 0 }, children: o }),
          /* @__PURE__ */ t(
            Hr,
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
), kn = ({
  height: e,
  onMenuClick: r,
  appName: o,
  logo: n,
  onBrandClick: a,
  background: d,
  color: s,
  brandColor: l = s,
  endContent: h
}) => /* @__PURE__ */ t(
  jo,
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
    children: /* @__PURE__ */ u(Xo, { sx: { minHeight: `${e}px !important`, gap: 1, px: 1 }, children: [
      r && /* @__PURE__ */ t(
        Re,
        {
          "aria-label": "Open navigation menu",
          onClick: r,
          sx: { color: s },
          children: /* @__PURE__ */ t(Fr, {})
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
      h ? /* @__PURE__ */ t(b, { sx: { ml: "auto", display: "flex", alignItems: "center" }, children: h }) : null
    ] })
  }
), Zt = ({
  count: e,
  onClick: r,
  color: o,
  hoverColor: n,
  tooltipPlacement: a,
  testId: d
}) => {
  const s = e ? `Notifications, ${e} unread` : "Notifications";
  return /* @__PURE__ */ t(ge, { title: s, placement: a, arrow: !0, children: /* @__PURE__ */ t(
    Re,
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
        Kr,
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
          children: /* @__PURE__ */ t($r, {})
        }
      )
    }
  ) });
}, zn = ({
  title: e,
  subtitle: r,
  testId: o,
  width: n,
  sx: a,
  footer: d,
  children: s
}) => {
  const l = p.useId();
  return /* @__PURE__ */ u(
    b,
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
        /* @__PURE__ */ u(b, { sx: { px: 2, pt: 1.5, pb: 1 }, children: [
          /* @__PURE__ */ t(z, { id: l, sx: { fontWeight: 600 }, children: e }),
          r ? /* @__PURE__ */ t(
            z,
            {
              variant: "body2",
              sx: { mt: 0.25, color: "text.secondary" },
              children: r
            }
          ) : null
        ] }),
        s,
        d ? /* @__PURE__ */ u(Pe, { children: [
          /* @__PURE__ */ t(we, {}),
          d
        ] }) : null
      ]
    }
  );
}, Ln = 5, Mn = 56, Bn = ({
  platforms: e,
  currentPlatformKey: r,
  onSelect: o,
  accentColor: n,
  tint: a,
  width: d,
  sx: s
}) => /* @__PURE__ */ t(
  zn,
  {
    title: "Lumora Platforms",
    subtitle: "Choose where you want to work.",
    testId: "platforms-panel",
    width: d,
    sx: s,
    footer: /* @__PURE__ */ u(
      ie,
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
          /* @__PURE__ */ t(en, { fontSize: "small" }),
          /* @__PURE__ */ t(z, { variant: "body2", children: "Platforms available to your account" })
        ]
      }
    ),
    children: /* @__PURE__ */ t(
      qt,
      {
        autoFocusItem: !0,
        "aria-label": "Platforms",
        sx: {
          px: 1,
          py: 0.5,
          maxHeight: Ln * Mn,
          overflowY: "auto"
        },
        children: e.map((l) => {
          const h = l.key === r;
          return /* @__PURE__ */ u(
            ke,
            {
              "data-testid": `platform-item-${l.key}`,
              "aria-current": h ? "true" : void 0,
              onClick: () => {
                h || o(l);
              },
              sx: {
                borderRadius: "10px",
                px: 1.5,
                py: 1.25,
                mb: 0.5,
                gap: 1,
                // The current row is inert: keeps its wash on hover
                // and shows no pointer.
                bgcolor: h ? a : "transparent",
                cursor: h ? "default" : "pointer",
                "&:hover": {
                  bgcolor: h ? a : "action.hover"
                }
              },
              children: [
                /* @__PURE__ */ u(b, { sx: { flex: 1, minWidth: 0 }, children: [
                  /* @__PURE__ */ t(z, { noWrap: !0, sx: { fontWeight: 500 }, children: l.name }),
                  l.description ? /* @__PURE__ */ t(
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
                h ? /* @__PURE__ */ u(
                  ie,
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
                      /* @__PURE__ */ t(Qo, { sx: { fontSize: 16 } })
                    ]
                  }
                ) : /* @__PURE__ */ t(
                  Zo,
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
), Hn = 288, no = {
  "&:focus, &:focus-visible": { outline: "none" }
}, io = {
  pointerEvents: "auto",
  bgcolor: "background.paper",
  border: "1px solid",
  borderColor: "divider",
  borderRadius: "12px",
  boxShadow: "0 8px 24px rgba(0, 0, 0, 0.12)",
  overflow: "hidden",
  display: "flex",
  flexDirection: "column"
}, Fn = {
  ...io,
  "@keyframes sub-panel-in": {
    from: { opacity: 0, transform: "translateX(-6px)" },
    to: { opacity: 1, transform: "none" }
  },
  animation: "sub-panel-in 150ms ease-out",
  "@media (prefers-reduced-motion: reduce)": { animation: "none" }
}, Pn = ({ mode: e, onToggle: r, accentColor: o, tint: n }) => {
  const a = p.useRef(null), d = p.useRef(null), s = (f) => {
    var c;
    f !== e && (r == null || r()), (c = (f === "light" ? a : d).current) == null || c.focus();
  }, l = (f) => {
    if (!(f.key === "Tab" || f.key === "Escape"))
      switch (f.stopPropagation(), f.key) {
        case "ArrowLeft":
        case "ArrowRight":
        case "ArrowUp":
        case "ArrowDown":
          f.preventDefault(), s(e === "light" ? "dark" : "light");
          break;
        case "Home":
          f.preventDefault(), s("light");
          break;
        case "End":
          f.preventDefault(), s("dark");
          break;
      }
  }, h = (f, c, E, m) => {
    const x = e === f;
    return /* @__PURE__ */ t(
      je,
      {
        ref: m,
        role: "radio",
        "aria-checked": x,
        "aria-label": c,
        tabIndex: x ? 0 : -1,
        onClick: () => s(f),
        "data-testid": `theme-segment-${f}`,
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
          ...no
        },
        children: /* @__PURE__ */ t(E, { sx: { fontSize: 18 } })
      }
    );
  };
  return /* @__PURE__ */ u(
    ie,
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
        h("light", "Light", qo, a),
        h("dark", "Dark", Vo, d)
      ]
    }
  );
}, Un = ({
  open: e,
  anchorEl: r,
  onClose: o,
  width: n,
  renderAvatar: a,
  userName: d,
  userEmail: s,
  roleLabel: l,
  accentColor: h,
  tint: f,
  showThemeToggler: c,
  theme: E,
  onThemeToggle: m,
  onProfileClick: x,
  onLinkClick: v,
  menuItems: g = [],
  platforms: y,
  currentPlatformKey: T,
  onPlatformSelect: W,
  onLogout: O
}) => {
  const H = It().palette.mode === "dark", F = p.useRef(null), [A, ae] = p.useState(null), Y = p.useRef(null), N = p.useRef(null), [P, C] = p.useState(
    null
  ), [B, se] = p.useState(0), [k, le] = p.useState(!1), K = !!(y != null && y.length), J = p.useCallback(() => {
    const S = Y.current, ee = k ? N.current : null;
    if (!e || !S || !ee || !P) {
      se(0);
      return;
    }
    const q = S.getBoundingClientRect(), me = ee.getBoundingClientRect().top, ce = P.getBoundingClientRect().height, Se = q.bottom - (me + ce), ve = Math.max(0, q.height - ce), de = Math.round(Math.min(Math.max(Se, 0), ve));
    se((i) => i === de ? i : de);
  }, [e, k, P]);
  p.useLayoutEffect(() => {
    J();
  }, [J]), p.useEffect(() => {
    if (!A || typeof ResizeObserver > "u")
      return;
    const S = new ResizeObserver(() => {
      var ee;
      (ee = F.current) == null || ee.updatePosition(), J();
    });
    return S.observe(A), () => S.disconnect();
  }, [A, J]);
  const Ie = () => {
    le(!1);
  }, ze = (S) => {
    o(), S == null || S();
  }, be = () => {
    var S;
    le(!1), (S = N.current) == null || S.focus();
  }, Oe = (S) => {
    S.key !== T && (o(), W ? W(S) : tn(S.url));
  }, pe = (S) => {
    o(), S.onClick ? S.onClick() : S.path && (v == null || v(S.path));
  }, D = (S) => {
    S.key === "Escape" && k && (S.stopPropagation(), be());
  }, Z = { borderRadius: "8px", py: 1, gap: 0.5 }, Ce = { color: "text.secondary", fontSize: 20 }, _e = {
    color: h,
    bgcolor: f,
    "& .MuiListItemIcon-root": { color: h },
    "& .MuiSvgIcon-root": { color: h },
    "&:hover": { bgcolor: Fe(h, 0.22) }
  }, Q = k, Te = /* @__PURE__ */ u(ie, { direction: "row", sx: { alignItems: "center", gap: 1.5, p: 2 }, children: [
    a(44),
    /* @__PURE__ */ u(b, { sx: { minWidth: 0, flex: 1 }, children: [
      /* @__PURE__ */ t(z, { noWrap: !0, sx: { fontWeight: 600 }, children: d }),
      s ? /* @__PURE__ */ t(
        z,
        {
          noWrap: !0,
          variant: "body2",
          "data-testid": "account-menu-email",
          sx: { color: "text.secondary" },
          children: s
        }
      ) : null,
      l ? /* @__PURE__ */ t(
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
      x ? /* @__PURE__ */ t(
        z,
        {
          noWrap: !0,
          variant: "caption",
          "data-hint": !0,
          "data-testid": "account-menu-view-profile",
          sx: {
            letterSpacing: "0.02em",
            fontWeight: 600,
            color: h,
            textDecoration: "underline",
            textUnderlineOffset: "2px"
          },
          children: "View profile"
        }
      ) : null
    ] })
  ] });
  return /* @__PURE__ */ u(
    Gr,
    {
      open: e,
      anchorEl: r,
      onClose: o,
      action: F,
      anchorOrigin: { vertical: "top", horizontal: "left" },
      transformOrigin: { vertical: "bottom", horizontal: "left" },
      slotProps: {
        transition: { onExited: Ie },
        paper: {
          ref: ae,
          onKeyDown: D,
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
          b,
          {
            ref: Y,
            "data-testid": "account-menu",
            sx: { ...io, width: n, minWidth: n },
            children: [
              x ? /* @__PURE__ */ t(
                je,
                {
                  onClick: () => ze(x),
                  "data-testid": "account-menu-header",
                  sx: {
                    display: "block",
                    width: "100%",
                    textAlign: "left",
                    transition: "background-color 150ms ease",
                    "& [data-hint]": { display: "none" },
                    "&:hover, &.Mui-focusVisible": {
                      bgcolor: f,
                      "& [data-hint]": { display: "block" },
                      "& [data-role]": { display: "none" }
                    },
                    ...no
                  },
                  children: Te
                }
              ) : /* @__PURE__ */ t(b, { "data-testid": "account-menu-header", children: Te }),
              /* @__PURE__ */ t(we, {}),
              c ? /* @__PURE__ */ u(
                b,
                {
                  "data-testid": "menu-item-theme",
                  sx: {
                    ...Z,
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
                    /* @__PURE__ */ t(ne, { children: /* @__PURE__ */ t(Jo, { fontSize: "small" }) }),
                    /* @__PURE__ */ t(z, { sx: { flex: 1 }, children: "Theme" }),
                    /* @__PURE__ */ t(
                      Pn,
                      {
                        mode: E,
                        onToggle: m,
                        accentColor: h,
                        tint: f
                      }
                    )
                  ]
                }
              ) : null,
              /* @__PURE__ */ u(
                qt,
                {
                  autoFocusItem: e,
                  sx: { px: 1, pt: c ? 0 : 0.5, pb: 0.5 },
                  children: [
                    g.map((S) => /* @__PURE__ */ u(
                      ke,
                      {
                        onClick: () => pe(S),
                        "data-testid": `menu-item-${S.key}`,
                        sx: Z,
                        children: [
                          /* @__PURE__ */ t(ne, { children: S.icon }),
                          /* @__PURE__ */ t(z, { sx: { flex: 1 }, children: S.label }),
                          /* @__PURE__ */ t(Vt, { count: S.badge })
                        ]
                      },
                      S.key
                    )),
                    K ? /* @__PURE__ */ t(we, { component: "li", sx: { my: 0.5 } }) : null,
                    K ? /* @__PURE__ */ u(
                      ke,
                      {
                        ref: N,
                        onClick: () => le((S) => !S),
                        "aria-haspopup": "dialog",
                        "aria-expanded": Q,
                        "data-active": Q ? "true" : "false",
                        "data-testid": "menu-item-platforms",
                        sx: Q ? { ...Z, ..._e } : Z,
                        children: [
                          /* @__PURE__ */ t(ne, { children: /* @__PURE__ */ t(Yo, { fontSize: "small" }) }),
                          /* @__PURE__ */ t(z, { sx: { flex: 1 }, children: "Lumora Platforms" }),
                          /* @__PURE__ */ t(Mr, { sx: Ce })
                        ]
                      }
                    ) : null,
                    O ? /* @__PURE__ */ t(we, { component: "li", sx: { my: 0.5 } }) : null,
                    O ? /* @__PURE__ */ u(
                      ke,
                      {
                        onClick: () => ze(O),
                        "data-testid": "menu-item-logout",
                        sx: {
                          ...Z,
                          color: H ? "error.light" : "error.main"
                        },
                        children: [
                          /* @__PURE__ */ t(ne, { sx: { color: "inherit" }, children: /* @__PURE__ */ t(Ur, { fontSize: "small" }) }),
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
        K && k ? /* @__PURE__ */ t(
          b,
          {
            ref: C,
            "data-testid": "account-menu-subcard",
            style: { marginBottom: B },
            sx: { display: "flex" },
            children: /* @__PURE__ */ t(
              Bn,
              {
                platforms: y,
                currentPlatformKey: T,
                onSelect: Oe,
                accentColor: h,
                tint: f,
                width: Hn,
                sx: Fn
              }
            )
          }
        ) : null
      ]
    }
  );
}, $n = {
  "&:focus, &:focus-visible": { outline: "none" }
}, Kn = ({
  mainLinks: e,
  secondaryLinks: r = [],
  activePath: o,
  onLinkClick: n,
  logo: a,
  title: d,
  onBrandClick: s,
  brandColor: l,
  headerBackgroundColor: h,
  headerForegroundColor: f,
  activeAccentColor: c = "#01584f",
  groupAccentColor: E,
  activeForegroundColor: m,
  foregroundColor: x,
  surfaceBackgroundColor: v,
  collapsed: g,
  expandedWidth: y,
  collapsedWidth: T,
  topContent: W,
  color: O,
  hoverColor: R,
  avatarColor: H,
  showProfile: F = !0,
  userName: A = "User",
  userEmail: ae,
  userRole: Y,
  userAvatar: N,
  showNotifications: P = !0,
  notificationCount: C = 0,
  onNotificationsClick: B,
  whatsNewCount: se = 0,
  onProfileClick: k,
  menuItems: le,
  platforms: K,
  currentPlatformKey: J,
  onPlatformSelect: Ie,
  onLogout: ze,
  theme: be = "light",
  showThemeToggler: Oe = !0,
  onThemeToggle: pe
}) => {
  const D = It(), Z = D.palette.mode === "dark", Ce = v ?? (Z ? D.palette.background.paper : "#ffffff"), _e = O ?? x ?? (Z ? D.palette.text.primary : c), Q = R ?? E ?? Rt(c), Te = H ?? c, S = p.useRef(null), [ee, q] = p.useState(!1);
  p.useEffect(() => {
    g && q(!1);
  }, [g]);
  const me = Y ? Vr(Y) : void 0, ce = (M) => /* @__PURE__ */ t(
    Jt,
    {
      name: A,
      avatar: N,
      color: Te,
      size: M
    }
  ), Se = C + se, ve = P ? /* @__PURE__ */ t(
    Zt,
    {
      count: Se,
      onClick: B,
      color: _e,
      hoverColor: Q,
      tooltipPlacement: "right",
      testId: "panel-notifications"
    }
  ) : null, de = F ? /* @__PURE__ */ u(
    je,
    {
      ref: S,
      onClick: () => q(!0),
      "aria-haspopup": "menu",
      "aria-expanded": ee,
      "aria-label": "Account menu",
      "data-testid": "panel-user-button",
      sx: {
        flex: g ? "0 0 auto" : 1,
        minWidth: 0,
        justifyContent: "flex-start",
        gap: 1.25,
        p: 0.75,
        borderRadius: "10px",
        bgcolor: ee ? Q : "transparent",
        "&:hover": { bgcolor: Q },
        ...$n
      },
      children: [
        g && P ? (
          // Collapsed: no room for the bell, so unread shows as a dot
          /* @__PURE__ */ t(
            Kr,
            {
              color: "error",
              variant: "dot",
              overlap: "circular",
              invisible: !Se,
              children: ce(36)
            }
          )
        ) : ce(g ? 36 : 40),
        g ? null : /* @__PURE__ */ u(b, { sx: { minWidth: 0, textAlign: "left" }, children: [
          /* @__PURE__ */ t(
            z,
            {
              noWrap: !0,
              sx: { fontWeight: 600, color: _e, lineHeight: 1.3 },
              children: A
            }
          ),
          me ? /* @__PURE__ */ t(
            z,
            {
              noWrap: !0,
              variant: "caption",
              "data-testid": "panel-user-role",
              sx: {
                display: "block",
                color: _e,
                opacity: 0.85,
                letterSpacing: "0.02em",
                lineHeight: 1.3
              },
              children: me
            }
          ) : null
        ] })
      ]
    }
  ) : null, i = !!ve && (!g || !de);
  return /* @__PURE__ */ u(
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
        /* @__PURE__ */ t(
          Gt,
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
            headerBackgroundColor: h,
            headerForegroundColor: f,
            activeAccentColor: c,
            groupAccentColor: E,
            activeForegroundColor: m,
            foregroundColor: x,
            surfaceBackgroundColor: Ce,
            collapsed: g,
            expandedWidth: y,
            collapsedWidth: T,
            topContent: W,
            footer: de || i ? /* @__PURE__ */ u(
              ie,
              {
                direction: "row",
                sx: {
                  alignItems: "center",
                  gap: 0.5,
                  justifyContent: "center"
                },
                children: [
                  de,
                  i ? ve : null
                ]
              }
            ) : void 0
          }
        ),
        F ? /* @__PURE__ */ t(
          Un,
          {
            open: ee,
            anchorEl: S.current,
            onClose: () => q(!1),
            width: Math.max(y - 16, 240),
            renderAvatar: ce,
            userName: A,
            userEmail: ae,
            roleLabel: me,
            accentColor: c,
            tint: Q,
            showThemeToggler: Oe,
            theme: be,
            onThemeToggle: pe,
            onProfileClick: k,
            onLinkClick: n,
            menuItems: le,
            platforms: K,
            currentPlatformKey: J,
            onPlatformSelect: Ie,
            onLogout: ze
          }
        ) : null
      ]
    }
  );
}, Gn = ({
  compact: e,
  color: r,
  hoverColor: o,
  showProfile: n,
  whatsNewCount: a = 0,
  ...d
}) => {
  var W;
  const {
    avatarColor: s,
    showNotifications: l,
    notificationCount: h,
    onNotificationsClick: f,
    userName: c = "User",
    userRole: E,
    userAvatar: m
  } = d, x = p.useRef(null), [v, g] = p.useState(
    null
  ), y = !!v;
  if (!l && !n)
    return null;
  const T = {
    "&.Mui-focusVisible": { outline: "2px solid", outlineColor: r }
  };
  return /* @__PURE__ */ u(Pe, { children: [
    /* @__PURE__ */ u(
      ie,
      {
        ref: x,
        direction: e ? "column" : "row",
        spacing: 0.5,
        "data-testid": "sidebar-footer",
        sx: { width: "100%", alignItems: "center" },
        children: [
          n && /* @__PURE__ */ t(
            ge,
            {
              title: e ? c : "",
              placement: "right",
              arrow: !0,
              children: /* @__PURE__ */ t(
                je,
                {
                  onClick: () => g(x.current),
                  "aria-label": `Account menu for ${c}`,
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
                    ...T
                  },
                  children: /* @__PURE__ */ t(
                    to,
                    {
                      name: c,
                      role: E,
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
            Zt,
            {
              count: h + a,
              onClick: f,
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
      ro,
      {
        anchorEl: v,
        onClose: () => g(null),
        placement: e ? "beside" : "above",
        width: e || (W = x.current) == null ? void 0 : W.clientWidth,
        ...d
      }
    )
  ] });
}, jn = 'input, textarea, [contenteditable="true"]', zr = (e) => {
  var r;
  (r = e == null ? void 0 : e.querySelector(jn)) == null || r.focus();
}, Xn = ({
  search: e,
  mode: r,
  onExpand: o,
  autoFocus: n = !1,
  onAutoFocused: a,
  color: d,
  hoverColor: s
}) => {
  const l = p.useRef(null), [h, f] = p.useState(null);
  return p.useEffect(() => {
    r === "full" && n && (zr(l.current), a == null || a());
  }, [r, n, a]), r === "full" ? /* @__PURE__ */ t(
    b,
    {
      ref: l,
      "data-testid": "sidebar-search",
      sx: { width: "100%" },
      children: e
    }
  ) : /* @__PURE__ */ u(
    b,
    {
      "data-testid": "sidebar-search",
      sx: { width: "100%", display: "flex", justifyContent: "center" },
      children: [
        /* @__PURE__ */ t(ge, { title: "Search", placement: "right", arrow: !0, children: /* @__PURE__ */ t(
          Re,
          {
            "aria-label": "Search",
            onClick: (c) => r === "expand" ? o == null ? void 0 : o() : f(c.currentTarget),
            sx: {
              width: 44,
              height: 44,
              color: d,
              borderRadius: "8px",
              "&:hover": { bgcolor: s }
            },
            children: /* @__PURE__ */ t(Pr, {})
          }
        ) }),
        /* @__PURE__ */ t(
          Gr,
          {
            open: !!h,
            anchorEl: h,
            onClose: () => f(null),
            anchorOrigin: { vertical: "top", horizontal: "right" },
            transformOrigin: { vertical: "top", horizontal: "left" },
            TransitionProps: {
              onEntered: (c) => zr(c)
            },
            slotProps: { paper: { sx: { ml: 1, p: 1.5, width: 360 } } },
            children: e
          }
        )
      ]
    }
  );
}, Vn = 100, Yn = () => {
  const e = p.useRef(null), r = p.useRef(void 0), o = p.useRef(/* @__PURE__ */ new WeakSet()), [n, a] = p.useState(!1), [d, s] = p.useState(!1), l = () => {
    clearTimeout(r.current), r.current = void 0;
  };
  p.useEffect(() => {
    const c = (m) => {
      o.current.has(m) || (l(), a(!1));
    }, E = () => {
      l(), a(!1);
    };
    return document.addEventListener("mouseover", c), document.addEventListener("mousemove", c), document.documentElement.addEventListener("mouseleave", E), () => {
      l(), document.removeEventListener("mouseover", c), document.removeEventListener("mousemove", c), document.documentElement.removeEventListener(
        "mouseleave",
        E
      );
    };
  }, []), p.useEffect(() => {
    if (!d)
      return;
    const c = (E) => {
      var m;
      (m = e.current) != null && m.contains(E.target) || s(!1);
    };
    return document.addEventListener("pointerdown", c), () => document.removeEventListener("pointerdown", c);
  }, [d]);
  const h = (c) => {
    var m, x;
    if ((m = c.target.classList) != null && m.contains("MuiBackdrop-root")) {
      const v = (x = e.current) == null ? void 0 : x.getBoundingClientRect();
      if (!(v && c.clientX >= v.left && c.clientX <= v.right && c.clientY >= v.top && c.clientY <= v.bottom))
        return;
    }
    o.current.add(c.nativeEvent), !n && r.current === void 0 && (r.current = setTimeout(() => {
      r.current = void 0, a(!0);
    }, Vn));
  };
  return {
    expanded: n || d,
    pin: () => s(!0),
    rootProps: {
      ref: e,
      onMouseOver: h,
      onMouseMove: h,
      // Focus moving to an element outside unpins; a null target (the
      // focused element unmounted as the panel swapped layouts) does not.
      onBlur: (c) => {
        const E = c.relatedTarget;
        E && !c.currentTarget.contains(E) && s(!1);
      },
      onKeyDown: (c) => {
        c.key === "Escape" && s(!1);
      }
    }
  };
}, qn = 100, Lr = 80, Ut = 56, Jn = 300, $t = 288, Ze = 72, Zn = "width 220ms cubic-bezier(0.4, 0, 0.2, 1), box-shadow 220ms ease", Qn = 68, ei = { xs: 2, md: 5 }, ti = () => typeof navigator < "u" && /Mac|iPhone|iPad/.test(navigator.platform || navigator.userAgent), ri = (e, r) => {
  const o = (n) => typeof n == "number" ? r.spacing(n) : n;
  return typeof e == "object" ? Object.fromEntries(
    Object.entries(e).map(([n, a]) => [n, o(a)])
  ) : o(e);
}, ra = ({
  children: e,
  sidebarLinks: r = [],
  secondarySidebarLinks: o = [],
  appName: n = "Dashboard",
  showSidebar: a = !0,
  showSidebarRailTitles: d = !1,
  sidebarVariant: s = "rail",
  mobileNavigation: l = "bottom-bar",
  mobileBottomBarLinks: h,
  logo: f,
  onBrandClick: c,
  searchComponent: E,
  brandColor: m,
  contentPadding: x = ei,
  userMenuItems: v,
  sidebarBackgroundColor: g,
  sidebarHeaderBackgroundColor: y,
  groupAccentColor: T,
  activeSidebarForegroundColor: W,
  enableRefreshToken: O = !1,
  activePath: R,
  onLinkClick: H,
  showProfile: F = !0,
  userName: A,
  userRole: ae,
  userAvatar: Y,
  userEmail: N,
  onLogout: P,
  showSettings: C = !0,
  onSettingsClick: B,
  onProfileClick: se,
  showNotifications: k = !0,
  notificationCount: le = 0,
  NotificationSidebarContent: K,
  whatsNewCount: J = 0,
  onNotificationsClick: Ie,
  platforms: ze,
  currentPlatformKey: be,
  onPlatformSelect: Oe,
  onVerify: pe,
  alertProps: D,
  style: Z,
  sidebarStyles: Ce,
  contentStyles: _e,
  accentColor: Q,
  sidebarAccentColor: Te,
  sidebarForegroundColor: S,
  contentBackgroundColor: ee,
  theme: q = "light",
  showThemeToggler: me = !1,
  onThemeToggle: ce,
  GlobalChatSidebar: Se,
  useChatSidebar: ve,
  chatPanelMode: de = "docked",
  chatPanelPosition: i = "right",
  chatPanelWidth: _ = 420,
  onChatClose: M,
  showAssistant: I = !1,
  assistantPlacement: $ = "sidebar",
  assistantShortcut: G = "j",
  onAssistantClick: te,
  assistantActive: X = !1,
  assistantBusy: Ae = !1,
  customNavbar: dt,
  customNavbarProps: ao,
  redirectToLogin: ut,
  apiBaseUrl: Qt
}) => {
  const er = _o(), ue = To(er.breakpoints.down("md")), tr = Er(
    () => Br(mn(q)),
    [q]
  ), ht = q === "dark", rr = Q ?? "#01584f", Le = Te ?? rr, Ot = ee ?? (ht ? "hsl(220, 35%, 9%)" : "#f2f9fc"), Xe = s === "collapsible", Ct = s === "panel", so = Ct && a && !ue, Me = s === "rail-labeled", lo = Xe || Me, Ue = g ?? (ht ? "hsl(220, 30%, 7%)" : "#ffffff"), ft = y ?? Ue, De = S ?? (ht ? "#ffffff" : Le), et = T ?? Rt(De), tt = y ? Kt(ft) : De, or = (w) => /* @__PURE__ */ t(
    oe,
    {
      role: "img",
      "aria-label": `${n} logo`,
      sx: {
        width: 28,
        height: 28,
        flexShrink: 0,
        bgcolor: w,
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
  ), pt = m ?? tt, _t = f ?? or(pt), co = f ?? or(m ?? De), Tt = Yn(), Ee = !Tt.expanded, [uo, nr] = Ve(!1), ho = Co(() => nr(!1), []);
  let ye = 0;
  a && !ue && (Me ? ye = Lr : Xe || Ct ? ye = Ze : ye = qn);
  const [ir, $e] = Ve(!1), [ar, At] = Ve(!1), re = ue && l === "bottom-bar", sr = `calc(${oo}px + env(safe-area-inset-bottom, 0px))`, [Dt, lr] = Ve({ open: !1, tab: "notifications" }), cr = () => lr((w) => ({ ...w, open: !1 })), fo = k && !!K, [po, mo] = Ve(!0), [xo, go] = Ve(!1), Nt = ve == null ? void 0 : ve(), dr = (Nt == null ? void 0 : Nt.isOpen) ?? !1, ur = de === "floating" ? "floating" : "docked", bo = ur === "docked" && dr && Se && !ue ? _ : 0, mt = Mt(pe), hr = Mt(!1), fr = Er(
    () => pn(Qt),
    [Qt]
  );
  bt(() => {
    mt.current = pe;
  }, [pe]);
  const Wt = Mt(te);
  Wt.current = te;
  const rt = I && G ? G.toLowerCase() : null;
  bt(() => {
    if (!rt)
      return;
    const w = (j) => {
      (j.metaKey || j.ctrlKey) && !j.altKey && !j.shiftKey && j.key.toLowerCase() === rt && Wt.current && (j.preventDefault(), Wt.current());
    };
    return window.addEventListener("keydown", w), () => window.removeEventListener("keydown", w);
  }, [rt]);
  const pr = (w) => {
    const j = P(w);
    j instanceof Promise && j.catch((Be) => {
      console.error("Error in logout handler:", Be);
    });
  };
  if (bt(() => {
    (() => {
      var j;
      try {
        const { isAuthenticated: Be } = hn();
        if (!Be) {
          console.log("No session found, redirecting to login"), ct(), ut();
          return;
        }
        if (!hr.current) {
          const { user: nt, error: Lt } = fn();
          if (nt && !Lt) {
            const Ro = {
              name: nt.name || "",
              email: nt.email || "",
              profilePicture: nt.profilePicture || "",
              role: nt.role || ""
            };
            hr.current = !0, (j = mt.current) == null || j.call(mt, Ro);
          } else
            Lt && console.error("Error getting user data:", Lt);
        }
        go(!0);
      } catch (Be) {
        console.error("Error checking session:", Be), ct(), ut();
      } finally {
        mo(!1);
      }
    })();
  }, [ut]), bt(() => {
    O && xn(fr, ut);
  }, [O, fr]), po)
    return /* @__PURE__ */ t(vr, { theme: tr, children: /* @__PURE__ */ u(
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
            Ao,
            {
              size: 60,
              thickness: 4,
              sx: { color: rr }
            }
          ),
          /* @__PURE__ */ t(oe, { sx: { mt: 2, color: "text.secondary" }, children: "Checking session..." })
        ]
      }
    ) });
  if (!xo)
    return null;
  const ot = E ?? (dt ? /* @__PURE__ */ t(dt, { ...ao }) : null), So = (w) => {
    $e(!1), At(!1), lr({ open: !0, tab: w });
  }, kt = K && (() => So("notifications")), vo = le + J, mr = {
    avatarColor: Le,
    // The standard menu only runs `onClick`, so path rows navigate here.
    menuItems: v == null ? void 0 : v.map(
      (w) => w.onClick || !w.path ? w : { ...w, onClick: () => H == null ? void 0 : H(w.path) }
    ),
    showNotifications: k,
    notificationCount: le,
    whatsNewCount: J,
    onNotificationsClick: kt,
    showProfile: F,
    userName: A,
    userRole: ae,
    userAvatar: Y,
    showSettings: C,
    onSettingsClick: B,
    showThemeToggler: me,
    theme: q,
    onThemeToggle: ce,
    onLogout: pr
  }, zt = (w) => /* @__PURE__ */ t(
    Gn,
    {
      ...mr,
      compact: w,
      color: De,
      hoverColor: et
    }
  ), xr = rt ? [ti() ? "⌘" : "Ctrl", rt.toUpperCase()] : void 0, Eo = (w) => I && $ === "sidebar" ? /* @__PURE__ */ t(
    Ar,
    {
      variant: w ? "sidebar-icon" : "sidebar",
      onClick: te,
      active: X,
      busy: Ae,
      shortcutKeys: xr,
      accentColor: De
    }
  ) : null, yo = (w) => ot ? /* @__PURE__ */ t(
    Xn,
    {
      search: ot,
      mode: w,
      onExpand: () => {
        Tt.pin(), nr(!0);
      },
      autoFocus: uo,
      onAutoFocused: ho,
      color: De,
      hoverColor: et
    }
  ) : null, xt = (w) => {
    const j = Eo(w !== "full"), Be = yo(w);
    return j || Be ? /* @__PURE__ */ u(
      Wo,
      {
        spacing: 1.5,
        sx: { alignItems: w === "full" ? "stretch" : "center" },
        children: [
          j,
          Be
        ]
      }
    ) : void 0;
  }, gr = () => /* @__PURE__ */ t(
    Gt,
    {
      mainLinks: r,
      secondaryLinks: o,
      activePath: R,
      onLinkClick: H,
      showHeaderBar: Xe,
      logo: _t,
      title: n,
      onBrandClick: c,
      brandColor: pt,
      headerBackgroundColor: Xe ? ft : void 0,
      headerForegroundColor: Xe ? tt : void 0,
      activeAccentColor: Le,
      groupAccentColor: T,
      activeForegroundColor: W,
      foregroundColor: S,
      surfaceBackgroundColor: Ue,
      collapsed: Me || Ee,
      showLabels: Me,
      expandedWidth: $t,
      collapsedWidth: Me ? Lr : Ze,
      topContent: xt(
        Me ? "popover" : Ee ? "expand" : "full"
      ),
      footer: zt(Me || Ee)
    }
  ), br = (w) => /* @__PURE__ */ t(
    oe,
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
      children: /* @__PURE__ */ t(
        oe,
        {
          ...Tt.rootProps,
          "data-testid": "sidebar-hover-panel",
          "data-expanded": Ee ? "false" : "true",
          sx: {
            position: "absolute",
            top: 0,
            left: 0,
            height: "100%",
            width: Ee ? Ze : $t,
            // Flex column so the sidebar shrinks to fit siblings (the
            // alert card) instead of pushing them off-screen.
            display: "flex",
            flexDirection: "column",
            overflow: "hidden",
            bgcolor: Ue,
            borderRight: "1px solid",
            borderColor: "divider",
            boxShadow: Ee ? "none" : `4px 0 24px rgba(0, 0, 0, ${ht ? 0.5 : 0.12})`,
            transition: Zn,
            ...Ce
          },
          children: w
        }
      )
    }
  ), wo = ri(
    x,
    er
  );
  return /* @__PURE__ */ t(vr, { theme: tr, children: /* @__PURE__ */ u(
    oe,
    {
      sx: {
        display: "flex",
        minHeight: "100vh",
        ...Z
      },
      children: [
        /* @__PURE__ */ t(Do, {}),
        ue && /* @__PURE__ */ t(
          kn,
          {
            height: Ut,
            onMenuClick: a && !re ? () => $e(!0) : void 0,
            appName: n,
            logo: _t,
            onBrandClick: c,
            background: ft,
            color: tt,
            brandColor: pt,
            endContent: k ? /* @__PURE__ */ t(
              Zt,
              {
                count: vo,
                onClick: kt,
                color: tt,
                hoverColor: et,
                tooltipPlacement: "bottom",
                testId: "mobile-notifications"
              }
            ) : void 0
          }
        ),
        a && !ue && Me && /* @__PURE__ */ t(
          oe,
          {
            component: "aside",
            sx: {
              width: ye,
              minWidth: ye,
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
              ...Ce
            },
            children: gr()
          }
        ),
        a && !ue && Xe && br(
          /* @__PURE__ */ u(Pe, { children: [
            gr(),
            (D == null ? void 0 : D.show) && !Ee && /* @__PURE__ */ t(vt, { ...D })
          ] })
        ),
        so && br(
          /* @__PURE__ */ u(Pe, { children: [
            /* @__PURE__ */ t(
              Kn,
              {
                mainLinks: r,
                secondaryLinks: o,
                activePath: R,
                onLinkClick: H,
                logo: _t,
                title: n,
                onBrandClick: c,
                brandColor: pt,
                headerBackgroundColor: ft,
                headerForegroundColor: tt,
                activeAccentColor: Le,
                groupAccentColor: T,
                activeForegroundColor: W,
                foregroundColor: S,
                surfaceBackgroundColor: Ue,
                collapsed: Ee,
                expandedWidth: $t,
                collapsedWidth: Ze,
                topContent: xt(
                  Ee ? "expand" : "full"
                ),
                color: De,
                hoverColor: et,
                avatarColor: Le,
                showProfile: F,
                userName: A,
                userEmail: N,
                userRole: ae,
                userAvatar: Y,
                showNotifications: k,
                notificationCount: le,
                onNotificationsClick: fo ? kt : Ie,
                whatsNewCount: J,
                onProfileClick: se,
                menuItems: v,
                platforms: ze,
                currentPlatformKey: be,
                onPlatformSelect: Oe,
                onLogout: pr,
                theme: q,
                showThemeToggler: me,
                onThemeToggle: ce
              }
            ),
            (D == null ? void 0 : D.show) && !Ee && /* @__PURE__ */ t(vt, { ...D })
          ] })
        ),
        a && !ue && !lo && !Ct && /* @__PURE__ */ t(
          yr,
          {
            variant: "permanent",
            sx: {
              width: ye,
              flexShrink: 0,
              zIndex: 2,
              "& .MuiDrawer-paper": {
                width: ye,
                boxSizing: "border-box",
                bgcolor: Ot,
                borderRight: "none"
              },
              ...Ce
            },
            children: /* @__PURE__ */ u(
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
                        wt,
                        {
                          logo: co,
                          appName: n,
                          onClick: c,
                          color: m ?? De,
                          testId: "sidebar-header-brand"
                        }
                      )
                    }
                  ),
                  xt("popover"),
                  /* @__PURE__ */ u(
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
                          _n,
                          {
                            mainLinks: r,
                            secondaryLinks: o,
                            activePath: R,
                            onLinkClick: H,
                            accentColor: Le,
                            surfaceBackgroundColor: Ot,
                            railShowTitles: d
                          }
                        ),
                        (D == null ? void 0 : D.show) && /* @__PURE__ */ t(vt, { ...D })
                      ]
                    }
                  ),
                  /* @__PURE__ */ t(oe, { sx: { py: 1.5 }, children: zt(!0) })
                ]
              }
            )
          }
        ),
        a && ue && /* @__PURE__ */ u(
          No,
          {
            anchor: re ? "bottom" : "left",
            open: ir,
            onOpen: () => $e(!0),
            onClose: () => $e(!1),
            disableSwipeToOpen: !0,
            sx: { zIndex: (w) => w.zIndex.drawer + 1 },
            slotProps: {
              paper: {
                "aria-label": "Navigation",
                sx: {
                  bgcolor: Ue,
                  backgroundImage: "none",
                  ...re ? {
                    maxHeight: "min(80vh, 640px)",
                    borderTopLeftRadius: "16px",
                    borderTopRightRadius: "16px",
                    pb: "env(safe-area-inset-bottom, 0px)"
                  } : { maxWidth: "85vw" }
                }
              }
            },
            children: [
              re && // Grab handle: the sheet can be swiped down to close
              /* @__PURE__ */ t(
                oe,
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
                Gt,
                {
                  mainLinks: r,
                  secondaryLinks: o,
                  activePath: R,
                  onLinkClick: (w) => {
                    H == null || H(w), $e(!1);
                  },
                  onLinkAction: () => $e(!1),
                  collapsed: !1,
                  expandedWidth: re ? "100%" : Jn,
                  activeAccentColor: Le,
                  groupAccentColor: T,
                  activeForegroundColor: W,
                  foregroundColor: S,
                  surfaceBackgroundColor: Ue,
                  topInsetPx: re ? 8 : 0,
                  topContent: re ? void 0 : xt("full"),
                  footer: re ? void 0 : zt(!1)
                }
              ),
              (D == null ? void 0 : D.show) && /* @__PURE__ */ t(vt, { ...D })
            ]
          }
        ),
        re && ot && /* @__PURE__ */ t(
          Wn,
          {
            open: ar,
            onClose: () => At(!1),
            search: ot
          }
        ),
        re && /* @__PURE__ */ t(
          Nn,
          {
            ...mr,
            pinnedLinks: h,
            activePath: R,
            onLinkClick: H,
            onMenuClick: a ? () => $e(!0) : void 0,
            menuOpen: ir,
            onSearchClick: ot ? () => At(!0) : void 0,
            searchOpen: ar,
            showAssistant: I,
            onAssistantClick: te,
            assistantActive: X,
            showProfile: F,
            background: Ue,
            color: De,
            activeColor: Le,
            activeBackground: et
          }
        ),
        /* @__PURE__ */ t(
          oe,
          {
            component: "main",
            sx: {
              flexGrow: 1,
              "--lumora-content-padding": wo,
              // Where sticky page elements should pin (below the mobile bar)
              "--lumora-sticky-top": ue ? `${Ut}px` : "0px",
              p: "var(--lumora-content-padding)",
              width: ye ? `calc(100% - ${ye}px)` : "100%",
              mt: ue ? `${Ut}px` : 0,
              // Keep the last content clear of the bottom bar
              ...re && {
                pb: `calc(var(--lumora-content-padding) + ${sr})`
              },
              backgroundColor: Ot,
              ..._e
            },
            children: e
          }
        ),
        Se && /* @__PURE__ */ t(
          vn,
          {
            open: dr,
            variant: ur,
            position: i,
            width: _,
            sidebarWidthPx: ye,
            bottomOffsetPx: I && $ === "floating" ? Qn : 0,
            fullScreen: ue,
            fullScreenBottom: re ? sr : "0px",
            onClose: M,
            children: /* @__PURE__ */ t(Se, {})
          }
        ),
        I && $ === "floating" && !re && /* @__PURE__ */ t(
          Ar,
          {
            variant: "floating",
            rightOffsetPx: bo,
            shortcutKeys: xr,
            onClick: te,
            active: X,
            busy: Ae
          }
        ),
        k && K && /* @__PURE__ */ t(
          yr,
          {
            anchor: "right",
            open: Dt.open,
            onClose: cr,
            slotProps: {
              paper: { sx: { width: 380, maxWidth: "100vw" } }
            },
            children: /* @__PURE__ */ t(
              K,
              {
                onClose: cr,
                initialTab: Dt.tab
              },
              Dt.tab
            )
          }
        )
      ]
    }
  ) });
};
export {
  U as AUTH_ERROR_CODES,
  L as AuthError,
  Gt as CollapsibleSidebar,
  ea as FullBleedSection,
  dn as Kbd,
  ra as LumoraWrapper,
  ct as clearAuthTokens,
  ra as default,
  ta as getAuthErrorMessage,
  lt as getAuthTokens,
  fn as getCurrentUser,
  mn as getDesignTokens,
  hn as isAuthenticated,
  Xt as logAuthError,
  qr as storeAuthTokens
};
