import { jsx as t, jsxs as d, Fragment as Je } from "react/jsx-runtime";
import { useTheme as qt, useMediaQuery as Qt, Box as ie, CircularProgress as Vt, CssBaseline as Zt, Drawer as dt, Grid as He } from "@mui/material";
import { createTheme as vt, alpha as J, styled as er, useTheme as De, ThemeProvider as ht } from "@mui/material/styles";
import * as S from "react";
import { useMemo as pt, useState as ge, useRef as ut, useEffect as Ge } from "react";
import ft from "axios";
import mt from "@mui/icons-material/AccountCircleRounded";
import Rt from "@mui/icons-material/DarkMode";
import Ct from "@mui/icons-material/LightMode";
import Tt from "@mui/icons-material/LogoutRounded";
import tr from "@mui/icons-material/MenuRounded";
import rr from "@mui/icons-material/NotificationsOutlined";
import or from "@mui/icons-material/SearchRounded";
import nr from "@mui/material/AppBar";
import Ye from "@mui/material/Avatar";
import ar from "@mui/material/Badge";
import A from "@mui/material/Box";
import re from "@mui/material/Divider";
import V from "@mui/material/IconButton";
import ir from "@mui/material/InputAdornment";
import sr from "@mui/material/Menu";
import qe from "@mui/material/MenuItem";
import L from "@mui/material/Stack";
import lr from "@mui/material/TextField";
import cr from "@mui/material/Toolbar";
import ee from "@mui/material/Tooltip";
import Y from "@mui/material/Typography";
import dr from "@mui/material/useMediaQuery";
import hr from "@mui/material/Card";
import pr from "@mui/material/CardContent";
import It from "@mui/material/Button";
import ur from "@mui/icons-material/AutoAwesomeRounded";
import fr from "@mui/icons-material/KeyboardArrowDownRounded";
import mr from "@mui/icons-material/KeyboardArrowUpRounded";
import Ot from "@mui/material/Collapse";
import we from "@mui/material/ListItemButton";
import le from "@mui/material/ListItemIcon";
import ce from "@mui/material/ListItemText";
import gr from "@mui/icons-material/ExpandLess";
import xr from "@mui/icons-material/ExpandMore";
import br from "@mui/material/MenuList";
import wr from "@mui/material/Paper";
import Sr from "@mui/material/Popper";
import Er from "@mui/material/Drawer";
const O = vt(), gt = [...O.shadows], $ = {
  50: "hsl(210, 100%, 95%)",
  100: "hsl(210, 100%, 92%)",
  200: "hsl(210, 100%, 80%)",
  300: "hsl(210, 100%, 65%)",
  400: "hsl(210, 98%, 48%)",
  500: "hsl(210, 98%, 42%)",
  600: "hsl(210, 98%, 55%)",
  700: "hsl(210, 100%, 35%)",
  900: "hsl(210, 100%, 21%)"
}, W = {
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
}, xe = {
  300: "hsl(120, 61%, 77%)",
  400: "hsl(120, 44%, 53%)",
  500: "hsl(120, 59%, 30%)",
  700: "hsl(120, 75%, 16%)",
  800: "hsl(120, 84%, 10%)"
}, se = {
  300: "hsl(45, 90%, 65%)",
  400: "hsl(45, 90%, 40%)",
  500: "hsl(45, 90%, 35%)",
  700: "hsl(45, 94%, 20%)",
  800: "hsl(45, 95%, 16%)"
}, be = {
  300: "hsl(0, 90%, 65%)",
  400: "hsl(0, 90%, 40%)",
  500: "hsl(0, 90%, 30%)",
  700: "hsl(0, 94%, 18%)",
  800: "hsl(0, 95%, 12%)"
}, yr = (e) => (gt[1] = e === "dark" ? "hsla(220, 30%, 5%, 0.7) 0px 4px 16px 0px, hsla(220, 25%, 10%, 0.8) 0px 8px 16px -5px" : "hsla(220, 30%, 5%, 0.07) 0px 4px 16px 0px, hsla(220, 25%, 10%, 0.07) 0px 8px 16px -5px", {
  palette: {
    mode: e,
    primary: {
      light: $[200],
      main: $[400],
      dark: $[700],
      contrastText: $[50],
      ...e === "dark" && {
        contrastText: $[50],
        light: $[300],
        main: $[400],
        dark: $[700]
      }
    },
    info: {
      light: $[100],
      main: $[300],
      dark: $[600],
      contrastText: W[50],
      ...e === "dark" && {
        contrastText: $[300],
        light: $[500],
        main: $[700],
        dark: $[900]
      }
    },
    warning: {
      light: se[300],
      main: se[400],
      dark: se[800],
      ...e === "dark" && {
        light: se[400],
        main: se[500],
        dark: se[700]
      }
    },
    error: {
      light: be[300],
      main: be[400],
      dark: be[800],
      ...e === "dark" && {
        light: be[400],
        main: be[500],
        dark: be[700]
      }
    },
    success: {
      light: xe[300],
      main: xe[400],
      dark: xe[800],
      ...e === "dark" && {
        light: xe[400],
        main: xe[500],
        dark: xe[700]
      }
    },
    grey: {
      ...W
    },
    divider: e === "dark" ? J(W[700], 0.6) : J(W[300], 0.4),
    background: {
      default: "hsl(0, 0%, 99%)",
      paper: "hsl(220, 35%, 97%)",
      ...e === "dark" && {
        default: W[900],
        paper: "hsl(220, 30%, 7%)"
      }
    },
    text: {
      primary: W[800],
      secondary: W[600],
      warning: se[400],
      ...e === "dark" && {
        primary: "hsl(0, 0%, 100%)",
        secondary: W[400]
      }
    },
    action: {
      hover: J(W[200], 0.2),
      selected: `${J(W[200], 0.3)}`,
      ...e === "dark" && {
        hover: J(W[600], 0.2),
        selected: J(W[600], 0.3)
      }
    }
  },
  typography: {
    fontFamily: "Inter, sans-serif",
    h1: {
      fontSize: O.typography.pxToRem(48),
      fontWeight: 600,
      lineHeight: 1.2,
      letterSpacing: -0.5
    },
    h2: {
      fontSize: O.typography.pxToRem(36),
      fontWeight: 600,
      lineHeight: 1.2
    },
    h3: {
      fontSize: O.typography.pxToRem(30),
      lineHeight: 1.2
    },
    h4: {
      fontSize: O.typography.pxToRem(24),
      fontWeight: 600,
      lineHeight: 1.5
    },
    h5: {
      fontSize: O.typography.pxToRem(20),
      fontWeight: 600
    },
    h6: {
      fontSize: O.typography.pxToRem(18),
      fontWeight: 600
    },
    subtitle1: {
      fontSize: O.typography.pxToRem(18)
    },
    subtitle2: {
      fontSize: O.typography.pxToRem(14),
      fontWeight: 500
    },
    body1: {
      fontSize: O.typography.pxToRem(14)
    },
    body2: {
      fontSize: O.typography.pxToRem(14),
      fontWeight: 400
    },
    caption: {
      fontSize: O.typography.pxToRem(12),
      fontWeight: 400
    }
  },
  shape: {
    borderRadius: 8
  },
  shadows: gt
});
J(W[300], 0.4), J(W[200], 0.2), `${J(W[200], 0.3)}`, J(W[700], 0.6), J(W[600], 0.2), J(W[600], 0.3);
O.typography.pxToRem(48), O.typography.pxToRem(36), O.typography.pxToRem(30), O.typography.pxToRem(24), O.typography.pxToRem(20), O.typography.pxToRem(18), O.typography.pxToRem(18), O.typography.pxToRem(14), O.typography.pxToRem(14), O.typography.pxToRem(14), O.typography.pxToRem(12);
[
  ...O.shadows.slice(2)
];
class D extends Error {
  code;
  originalError;
  timestamp;
  constructor(r, o, a = null) {
    super(r), this.name = "AuthError", this.code = o, this.originalError = a, this.timestamp = (/* @__PURE__ */ new Date()).toISOString();
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
}, te = {
  ACCESS_TOKEN: "accessToken",
  REFRESH_TOKEN: "refreshToken",
  USER: "user"
}, vr = () => {
  if (!(typeof window > "u" || !window.localStorage))
    try {
      const e = localStorage.getItem(te.ACCESS_TOKEN), r = localStorage.getItem(te.REFRESH_TOKEN), o = localStorage.getItem(te.USER);
      e && !localStorage.getItem(K.ACCESS_TOKEN) && localStorage.setItem(K.ACCESS_TOKEN, e), r && !localStorage.getItem(K.REFRESH_TOKEN) && localStorage.setItem(K.REFRESH_TOKEN, r), o && !localStorage.getItem(K.USER) && localStorage.setItem(K.USER, o), (e || r || o) && (localStorage.removeItem(te.ACCESS_TOKEN), localStorage.removeItem(te.REFRESH_TOKEN), localStorage.removeItem(te.USER));
    } catch (e) {
      console.warn("Failed to migrate legacy localStorage keys:", e);
    }
}, Pe = (e) => {
  try {
    if (typeof window > "u")
      return console.warn("localStorage access attempted on server side"), null;
    if (!window.localStorage)
      throw new D("localStorage is not available", N.STORAGE_ACCESS_DENIED);
    return window.localStorage.getItem(e);
  } catch (r) {
    throw r.name === "QuotaExceededError" ? (console.error("Storage quota exceeded"), new D(
      "Storage quota exceeded. Please clear browser data.",
      N.STORAGE_ACCESS_DENIED,
      r
    )) : r.name === "SecurityError" ? (console.error("localStorage access denied (private browsing or security settings)"), new D(
      "Access to localStorage is denied. Please check browser settings.",
      N.STORAGE_ACCESS_DENIED,
      r
    )) : (console.error("Unexpected error accessing localStorage:", r.name), new D("Failed to access storage", N.STORAGE_ACCESS_DENIED, r));
  }
}, je = (e, r) => {
  try {
    if (typeof window > "u")
      return console.warn("localStorage write attempted on server side"), !1;
    if (!window.localStorage)
      throw new D("localStorage is not available", N.STORAGE_ACCESS_DENIED);
    return window.localStorage.setItem(e, r), !0;
  } catch (o) {
    throw o.name === "QuotaExceededError" ? (console.error("Storage quota exceeded"), new D(
      "Storage quota exceeded. Please clear browser data.",
      N.STORAGE_ACCESS_DENIED,
      o
    )) : o.name === "SecurityError" ? (console.error("localStorage write denied (private browsing or security settings)"), new D(
      "Access to localStorage is denied. Please check browser settings.",
      N.STORAGE_ACCESS_DENIED,
      o
    )) : (console.error("Unexpected error writing to localStorage:", o.name), new D("Failed to write to storage", N.STORAGE_ACCESS_DENIED, o));
  }
}, Dt = (e) => {
  try {
    return typeof window > "u" ? (console.warn("localStorage removal attempted on server side"), !1) : window.localStorage ? (window.localStorage.removeItem(e), !0) : (console.warn("localStorage is not available"), !1);
  } catch (r) {
    return r.name !== "SecurityError" && console.warn(`Could not remove localStorage key "${e}"`), !1;
  }
}, Ie = () => {
  try {
    vr();
    const e = Pe(K.ACCESS_TOKEN), r = Pe(K.REFRESH_TOKEN), o = Pe(K.USER);
    let a = null;
    if (o)
      try {
        a = JSON.parse(o);
      } catch {
        o && o !== "null" && o !== "undefined" && console.warn("Invalid user data in localStorage, clearing:", o.substring(0, 50)), Dt(K.USER);
      }
    return {
      accessToken: e,
      refreshToken: r,
      user: a
    };
  } catch (e) {
    throw e instanceof D ? e : new D("Failed to retrieve authentication tokens", N.UNKNOWN_ERROR, e);
  }
}, Rr = () => {
  try {
    const { accessToken: e, refreshToken: r } = Ie();
    return !(e || r) ? {
      isAuthenticated: !1,
      error: new D("No authentication tokens found", N.TOKEN_NOT_FOUND)
    } : {
      isAuthenticated: !0,
      error: null
    };
  } catch (e) {
    return console.error("Authentication check failed:", e), {
      isAuthenticated: !1,
      error: e instanceof D ? e : new D("Authentication check failed", N.UNKNOWN_ERROR, e)
    };
  }
}, _t = (e, r, o = null) => {
  try {
    if (!e && !r)
      throw new D("At least one token must be provided", N.TOKEN_INVALID);
    return e && je(K.ACCESS_TOKEN, e), r && je(K.REFRESH_TOKEN, r), o && je(K.USER, JSON.stringify(o)), {
      success: !0,
      error: null
    };
  } catch (a) {
    return console.error("Failed to store authentication tokens:", a), {
      success: !1,
      error: a instanceof D ? a : new D("Failed to store tokens", N.UNKNOWN_ERROR, a)
    };
  }
}, Oe = () => {
  try {
    return [
      K.ACCESS_TOKEN,
      K.REFRESH_TOKEN,
      K.USER,
      // Also clear legacy keys for complete cleanup
      te.ACCESS_TOKEN,
      te.REFRESH_TOKEN,
      te.USER
    ].map((a) => Dt(a)).every((a) => a) || console.warn("Some tokens could not be removed from localStorage"), {
      success: !0,
      error: null
    };
  } catch (e) {
    return console.error("Failed to clear authentication tokens:", e), {
      success: !1,
      error: e instanceof D ? e : new D("Failed to clear tokens", N.LOGOUT_FAILED, e)
    };
  }
}, Cr = () => {
  try {
    const { user: e } = Ie();
    return {
      user: e,
      error: null
    };
  } catch (e) {
    return console.error("Failed to get current user:", e), {
      user: null,
      error: e instanceof D ? e : new D("Failed to retrieve user data", N.UNKNOWN_ERROR, e)
    };
  }
}, Fo = (e) => {
  if (!(e instanceof D))
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
}, Qe = (e, r = "Unknown") => {
  const o = {
    context: r,
    message: e.message,
    code: e instanceof D ? e.code : "UNKNOWN",
    timestamp: e instanceof D ? e.timestamp : (/* @__PURE__ */ new Date()).toISOString(),
    stack: e.stack
  };
  e instanceof D && e.originalError && (o.originalError = {
    name: e.originalError.name,
    message: e.originalError.message
  }), console.warn("[Auth Error]", o);
}, Tr = (e) => {
  if (!e)
    throw new Error("API base URL is required to create axios client");
  const r = ft.create({
    baseURL: e,
    headers: {
      "Content-Type": "application/json"
    }
  });
  let o = !1, a = null, l = [];
  const c = (i, s) => {
    l.forEach(({ resolve: E, reject: C }) => {
      i ? C(i) : s && E(s);
    }), l = [];
  };
  return r.interceptors.request.use(
    (i) => {
      const { accessToken: s } = Ie();
      return s && i.headers && (i.headers.Authorization = `Bearer ${s}`), i;
    },
    (i) => Promise.reject(i)
  ), r.interceptors.response.use(
    (i) => i,
    async (i) => {
      const s = i.config, E = i.response?.status, C = s?.url || "", y = C.includes("/auth/refresh");
      if (E !== 401 || s._retry || y)
        return Promise.reject(i);
      s._retry = !0;
      const { refreshToken: T } = Ie();
      if (!T) {
        const p = new Error(
          "No refresh token available for token refresh"
        );
        return Qe(p, "AxiosClient - Token Refresh"), Oe(), typeof window < "u" && (window.location.href = "/login"), Promise.reject(i);
      }
      if (o && a)
        return new Promise((p, b) => {
          l.push({ resolve: p, reject: b });
        }).then((p) => {
          const {
            accessToken: b,
            refreshToken: f
          } = p;
          if (s.headers && (s.headers.Authorization = `Bearer ${b}`), C.includes("/auth/logout"))
            try {
              if (typeof s.data == "string") {
                const v = JSON.parse(
                  s.data || "{}"
                );
                v.refresh_token = f, s.data = JSON.stringify(v);
              } else s.data && typeof s.data == "object" ? s.data.refresh_token = f : s.data = JSON.stringify({
                refresh_token: f
              });
            } catch {
              s.data = JSON.stringify({
                refresh_token: f
              });
            }
          return r(s);
        }).catch((p) => Promise.reject(p));
      o = !0, a = ft.post(
        `${e}/auth/refresh`,
        {
          refresh_token: T
        }
      );
      try {
        const p = await a, { accessToken: b, refreshToken: f } = p.data;
        if (_t(b, f, null), c(null, {
          accessToken: b,
          refreshToken: f
        }), s.headers && (s.headers.Authorization = `Bearer ${b}`), C.includes("/auth/logout"))
          try {
            if (typeof s.data == "string") {
              const v = JSON.parse(
                s.data || "{}"
              );
              v.refresh_token = f, s.data = JSON.stringify(v);
            } else s.data && typeof s.data == "object" ? s.data.refresh_token = f : s.data = JSON.stringify({
              refresh_token: f
            });
          } catch {
            s.data = JSON.stringify({
              refresh_token: f
            });
          }
        return r(s);
      } catch (p) {
        return Qe(
          p,
          "AxiosClient - Token Refresh Failed"
        ), c(p), Oe(), typeof window < "u" && (window.location.href = "/login"), Promise.reject(p);
      } finally {
        o = !1, a = null;
      }
    }
  ), r;
}, Ir = async (e, r) => {
  const { accessToken: o, refreshToken: a } = Ie();
  if (o)
    return !0;
  if (a)
    try {
      const l = await e.post("/auth/refresh", {
        refresh_token: a
      });
      if (l.data.success && l.data.accessToken)
        return _t(l.data.accessToken, l.data.refreshToken || null, null), !0;
    } catch (l) {
      Qe(l, "TokenValidator - Refresh Failed");
    }
  return Oe(), r ? r() : window.location.href = "/login", !1;
}, Or = er(cr)({
  width: "100%",
  padding: "8px 16px",
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
  gap: "16px",
  flexShrink: 0
}), Dr = ({
  appName: e = "Dashboard",
  pageName: r = "Home",
  onMenuClick: o,
  showMenuButton: a = !0,
  isMobile: l = !1,
  sidebarCollapsed: c,
  showBrand: i = !0,
  logo: s,
  headerStyles: E,
  userName: C = "User Name",
  userEmail: y,
  userAvatar: T,
  onProfileClick: p,
  onAccountClick: b,
  onSettingsClick: f,
  showSettings: v = !0,
  onLogout: F,
  showNotifications: _ = !1,
  notificationCount: z = 0,
  onNotificationBellClick: H,
  theme: m = "light",
  showThemeToggler: I = !1,
  onThemeToggle: h,
  showSearchbar: g = !0,
  searchValue: R,
  onSearchChange: j,
  onSearchSubmit: P,
  showProfile: u = !0,
  userRole: M,
  accentColor: de = "#01584f",
  contentBackgroundColor: Se = "#f2f9fc",
  navbarBackground: he = "#ff0000",
  navbarAccentColor: G = "#000000",
  rightExtraContent: oe = [],
  customNavbar: q,
  customNavbarProps: pe
}) => {
  const n = dr((w) => w.breakpoints.up("md")), [x, B] = S.useState(null), k = !!x, X = m === "dark", U = X ? "text.primary" : de, ne = X ? "Switch to light mode" : "Switch to dark mode", Q = c === void 0 ? "Open navigation menu" : c ? "Expand sidebar" : "Collapse sidebar", _e = (w) => {
    j?.(w.target.value);
  }, Ae = (w) => {
    w.key === "Enter" && P && R && P(R);
  }, Ee = (w) => w ? w.charAt(0).toUpperCase() + w.slice(1).toLowerCase() : "User", Be = (w) => {
    B(w.currentTarget);
  }, Ne = () => {
    B(null);
  }, ye = (w) => {
    w?.(), Ne();
  };
  return /* @__PURE__ */ t(
    nr,
    {
      position: "fixed",
      sx: {
        boxShadow: 0,
        background: he,
        top: "var(--template-frame-height, 0px)",
        left: 0,
        width: "100%",
        zIndex: 1,
        height: "60px",
        ...E
      },
      children: /* @__PURE__ */ d(Or, { variant: "dense", sx: { height: "100%" }, children: [
        /* @__PURE__ */ d(
          L,
          {
            direction: "row",
            sx: {
              alignItems: "center",
              gap: 2,
              flexShrink: 0,
              flexGrow: 1
            },
            children: [
              a && /* @__PURE__ */ t(ee, { title: Q, placement: "bottom", children: /* @__PURE__ */ t(
                V,
                {
                  "aria-label": Q,
                  onClick: o,
                  disableFocusRipple: !0,
                  sx: {
                    // Nudge left so the icon centers on the sidebar
                    // icon rail (72px wide → 36px center) below it.
                    ml: -1,
                    color: U,
                    "&:hover": {
                      backgroundColor: "action.hover"
                    },
                    "&:focus, &:focus-visible": {
                      outline: "none"
                    }
                  },
                  children: /* @__PURE__ */ t(tr, {})
                }
              ) }),
              i && /* @__PURE__ */ d(
                L,
                {
                  direction: "row",
                  sx: {
                    alignItems: "center",
                    gap: 1,
                    flexShrink: 0
                  },
                  children: [
                    /* @__PURE__ */ t(
                      Y,
                      {
                        variant: "h6",
                        sx: {
                          color: U,
                          fontWeight: 600,
                          fontSize: "20px",
                          lineHeight: 1,
                          textTransform: "uppercase"
                        },
                        children: e
                      }
                    ),
                    s ? /* @__PURE__ */ t(
                      A,
                      {
                        sx: {
                          display: "flex",
                          alignItems: "center",
                          flexShrink: 0,
                          color: U,
                          "& svg": {
                            color: "inherit",
                            fill: "currentColor"
                          }
                        },
                        children: s
                      }
                    ) : /* @__PURE__ */ t(
                      "img",
                      {
                        src: "/lumora-logo.svg",
                        alt: `${e} logo`,
                        width: 24,
                        height: 24,
                        style: { flexShrink: 0 }
                      }
                    )
                  ]
                }
              ),
              q ? /* @__PURE__ */ t(q, { ...pe || {} }) : g && n && /* @__PURE__ */ t(
                lr,
                {
                  placeholder: "Search for deals or documents...",
                  value: R || "",
                  onChange: _e,
                  onKeyDown: Ae,
                  size: "small",
                  sx: {
                    width: "400px",
                    "& .MuiOutlinedInput-root": {
                      backgroundColor: Se,
                      borderRadius: "8px",
                      "& fieldset": {
                        borderColor: "transparent"
                      },
                      "&:hover fieldset": {
                        borderColor: "transparent"
                      },
                      "&.Mui-focused fieldset": {
                        borderColor: de
                      }
                    }
                  },
                  InputProps: {
                    startAdornment: /* @__PURE__ */ t(ir, { position: "start", children: /* @__PURE__ */ t(
                      or,
                      {
                        sx: {
                          color: G
                        }
                      }
                    ) })
                  }
                }
              )
            ]
          }
        ),
        /* @__PURE__ */ d(
          L,
          {
            direction: "row",
            sx: {
              alignItems: "center",
              gap: 1.5,
              flexShrink: 0
            },
            children: [
              I && !l && /* @__PURE__ */ t(ee, { title: ne, placement: "bottom", children: /* @__PURE__ */ t("span", { children: /* @__PURE__ */ t(
                V,
                {
                  size: "small",
                  onClick: h,
                  disabled: !h,
                  "aria-label": ne,
                  sx: {
                    color: G,
                    "&:hover": {
                      backgroundColor: "action.hover"
                    }
                  },
                  children: X ? /* @__PURE__ */ t(Ct, { fontSize: "small" }) : /* @__PURE__ */ t(Rt, { fontSize: "small" })
                }
              ) }) }),
              _ && /* @__PURE__ */ t(
                ar,
                {
                  color: "error",
                  badgeContent: z,
                  invisible: z === 0,
                  sx: {
                    "& .MuiBadge-badge": {
                      right: 2,
                      top: 2
                    }
                  },
                  children: /* @__PURE__ */ t(
                    V,
                    {
                      size: "small",
                      onClick: H,
                      "aria-label": z ? `Notifications, ${z} unread` : "Notifications",
                      sx: { color: G },
                      children: /* @__PURE__ */ t(rr, {})
                    }
                  )
                }
              ),
              _ && u && !l && /* @__PURE__ */ t(
                re,
                {
                  orientation: "vertical",
                  flexItem: !0,
                  sx: {
                    borderColor: "rgba(0, 0, 0, 0.12)",
                    height: "24px",
                    alignSelf: "center"
                  }
                }
              ),
              u && !l && /* @__PURE__ */ d(Je, { children: [
                /* @__PURE__ */ d(
                  L,
                  {
                    direction: "row",
                    onClick: Be,
                    sx: {
                      alignItems: "center",
                      gap: 1,
                      cursor: "pointer",
                      borderRadius: "8px",
                      padding: "4px 8px",
                      "&:hover": {
                        backgroundColor: "action.hover"
                      }
                    },
                    children: [
                      T ? /* @__PURE__ */ t(
                        Ye,
                        {
                          src: T,
                          sx: { width: 32, height: 32 }
                        }
                      ) : /* @__PURE__ */ t(
                        mt,
                        {
                          sx: {
                            width: 32,
                            height: 32,
                            color: G
                          }
                        }
                      ),
                      /* @__PURE__ */ d(
                        A,
                        {
                          sx: {
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "flex-start",
                            minWidth: 0
                          },
                          children: [
                            /* @__PURE__ */ t(
                              Y,
                              {
                                variant: "body2",
                                sx: {
                                  color: G,
                                  fontWeight: 500,
                                  lineHeight: 1.2,
                                  overflow: "hidden",
                                  textOverflow: "ellipsis",
                                  whiteSpace: "nowrap",
                                  maxWidth: "150px"
                                },
                                children: C
                              }
                            ),
                            /* @__PURE__ */ t(
                              Y,
                              {
                                variant: "caption",
                                sx: {
                                  color: G,
                                  lineHeight: 1.2,
                                  overflow: "hidden",
                                  textOverflow: "ellipsis",
                                  whiteSpace: "nowrap",
                                  maxWidth: "150px"
                                },
                                children: Ee(M)
                              }
                            )
                          ]
                        }
                      )
                    ]
                  }
                ),
                /* @__PURE__ */ d(
                  sr,
                  {
                    anchorEl: x,
                    open: k,
                    onClose: Ne,
                    transformOrigin: {
                      horizontal: "right",
                      vertical: "top"
                    },
                    anchorOrigin: {
                      horizontal: "right",
                      vertical: "bottom"
                    },
                    sx: {
                      "& .MuiList-root": {
                        padding: "4px"
                      },
                      "& .MuiPaper-root": {
                        padding: 0
                      },
                      "& .MuiDivider-root": {
                        margin: "4px -4px"
                      }
                    },
                    children: [
                      v && [
                        /* @__PURE__ */ t(
                          qe,
                          {
                            onClick: () => ye(f),
                            children: "Settings"
                          },
                          "settings"
                        ),
                        /* @__PURE__ */ t(re, {}, "settings-divider")
                      ],
                      /* @__PURE__ */ d(
                        qe,
                        {
                          onClick: () => ye(F),
                          sx: {
                            color: "error.main",
                            "&:hover": {
                              color: "error.dark"
                            }
                          },
                          children: [
                            /* @__PURE__ */ t(Y, { sx: { flexGrow: 1 }, children: "Logout" }),
                            /* @__PURE__ */ t(Tt, { fontSize: "small" })
                          ]
                        }
                      )
                    ]
                  }
                )
              ] }),
              oe.length !== 0 && oe.map((w) => w.type === "divider" ? /* @__PURE__ */ t(
                re,
                {
                  orientation: "vertical",
                  flexItem: !0,
                  sx: {
                    borderColor: "rgba(0, 0, 0, 0.12)",
                    height: "24px",
                    alignSelf: "center"
                  }
                },
                w.key
              ) : w.type === "profile" ? /* @__PURE__ */ t(
                ee,
                {
                  title: w.tooltip || "",
                  disableHoverListener: !w.tooltip,
                  arrow: !0,
                  children: /* @__PURE__ */ d(
                    L,
                    {
                      direction: "row",
                      onClick: w.disabled ? void 0 : w.onClick,
                      sx: {
                        alignItems: "center",
                        gap: 1,
                        cursor: w.disabled ? "not-allowed" : "pointer",
                        borderRadius: "8px",
                        padding: "4px 8px",
                        opacity: w.disabled ? 0.5 : 1,
                        transition: "opacity 0.2s",
                        ...!w.disabled && {
                          "&:hover": {
                            backgroundColor: "action.hover"
                          }
                        }
                      },
                      children: [
                        w.avatar ? /* @__PURE__ */ t(
                          Ye,
                          {
                            src: w.avatar,
                            sx: {
                              width: 32,
                              height: 32
                            }
                          }
                        ) : /* @__PURE__ */ t(
                          mt,
                          {
                            sx: {
                              width: 32,
                              height: 32,
                              color: G
                            }
                          }
                        ),
                        /* @__PURE__ */ d(
                          A,
                          {
                            sx: {
                              display: "flex",
                              flexDirection: "column",
                              alignItems: "flex-start",
                              minWidth: 0
                            },
                            children: [
                              /* @__PURE__ */ t(
                                Y,
                                {
                                  variant: "body2",
                                  sx: {
                                    color: G,
                                    fontWeight: 500,
                                    lineHeight: 1.2,
                                    overflow: "hidden",
                                    textOverflow: "ellipsis",
                                    whiteSpace: "nowrap",
                                    maxWidth: "150px"
                                  },
                                  children: w.name
                                }
                              ),
                              /* @__PURE__ */ t(
                                Y,
                                {
                                  variant: "caption",
                                  sx: {
                                    color: G,
                                    lineHeight: 1.2,
                                    overflow: "hidden",
                                    textOverflow: "ellipsis",
                                    whiteSpace: "nowrap",
                                    maxWidth: "150px"
                                  },
                                  children: w.role
                                }
                              )
                            ]
                          }
                        )
                      ]
                    }
                  )
                },
                w.key
              ) : null)
            ]
          }
        )
      ] })
    }
  );
}, Ve = ({
  title: e = "",
  message: r = "",
  buttonText: o = "",
  onButtonClick: a,
  show: l = !0
}) => l ? /* @__PURE__ */ t(hr, { variant: "outlined", sx: { m: 1.5, flexShrink: 0 }, children: /* @__PURE__ */ d(pr, { children: [
  /* @__PURE__ */ t(ur, { fontSize: "small" }),
  /* @__PURE__ */ t(Y, { gutterBottom: !0, sx: { fontWeight: 600 }, children: e }),
  /* @__PURE__ */ t(
    Y,
    {
      variant: "body2",
      sx: { mb: 2, color: "text.secondary" },
      children: r
    }
  ),
  /* @__PURE__ */ t(
    It,
    {
      variant: "contained",
      size: "small",
      fullWidth: !0,
      onClick: a,
      children: o
    }
  )
] }) }) : null, Te = (e, r) => r ? e.path && r === e.path ? !0 : e.subitems?.some((o) => o.path === r) ?? !1 : !1, Me = (e, r) => !!(r && e.path === r), At = (e) => {
  const r = kt(e);
  if (!r)
    return "#ffffff";
  const [o, a, l] = r.map((i) => {
    const s = i / 255;
    return s <= 0.03928 ? s / 12.92 : ((s + 0.055) / 1.055) ** 2.4;
  });
  return 0.2126 * o + 0.7152 * a + 0.0722 * l > 0.5 ? "#0b1f1c" : "#ffffff";
}, Nt = (e) => {
  const r = kt(e);
  if (!r)
    return "rgba(1, 88, 79, 0.12)";
  const [o, a, l] = r;
  return `rgba(${o}, ${a}, ${l}, 0.14)`;
}, kt = (e) => {
  let r = e.trim().replace(/^#/, "");
  if (r.length === 3 && (r = r.split("").map((a) => a + a).join("")), r.length !== 6 || /[^0-9a-fA-F]/.test(r))
    return null;
  const o = parseInt(r, 16);
  return [o >> 16 & 255, o >> 8 & 255, o & 255];
}, Lt = () => typeof window < "u" && !!window.localStorage, Wt = (e) => {
  if (!Lt())
    return null;
  try {
    const r = window.localStorage.getItem(e);
    return r === null ? null : r === "true";
  } catch (r) {
    return console.warn("Failed to read sidebar collapsed state:", r), null;
  }
}, _r = (e, r) => {
  if (Lt())
    try {
      window.localStorage.setItem(e, r ? "true" : "false");
    } catch (o) {
      console.warn("Failed to persist sidebar collapsed state:", o);
    }
}, Ar = 264, Nr = 72, kr = "lumora:sidebar-collapsed", Lr = "width 200ms ease", Wr = 16, zr = 14, Xe = ({ text: e }) => {
  const r = S.useRef(null), [o, a] = S.useState(!1), l = S.useCallback(() => {
    const c = r.current;
    c && a(c.scrollWidth > c.clientWidth + 0.5);
  }, []);
  return S.useLayoutEffect(() => {
    l();
  }, [l, e]), S.useEffect(() => {
    const c = r.current;
    if (!c)
      return;
    const i = new ResizeObserver(() => l());
    return i.observe(c), () => i.disconnect();
  }, [l]), /* @__PURE__ */ t(
    ee,
    {
      title: e,
      placement: "right",
      arrow: !0,
      enterDelay: 400,
      disableHoverListener: !o,
      disableFocusListener: !o,
      disableTouchListener: !o,
      children: /* @__PURE__ */ t(
        Y,
        {
          ref: r,
          component: "span",
          variant: "body1",
          sx: {
            display: "block",
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
}, xt = ({
  open: e,
  size: r = Wr
}) => e ? /* @__PURE__ */ t(mr, { sx: { fontSize: r, opacity: 0.75 } }) : /* @__PURE__ */ t(fr, { sx: { fontSize: r, opacity: 0.75 } }), Fr = ({
  mainLinks: e,
  secondaryLinks: r = [],
  activePath: o,
  onLinkClick: a,
  activeAccentColor: l = "#01584f",
  groupAccentColor: c,
  activeForegroundColor: i,
  surfaceBackgroundColor: s,
  collapsed: E,
  defaultCollapsed: C = !1,
  persistKey: y = kr,
  expandedWidth: T = Ar,
  collapsedWidth: p = Nr
}) => {
  const b = De(), f = b.palette.mode === "dark", v = E !== void 0, [F] = S.useState(
    () => Wt(y) ?? C
  ), _ = v ? !!E : F, [z, H] = S.useState(
    {}
  ), m = l, I = i ?? At(m), h = c ?? Nt(m), g = s ?? (f ? b.palette.background.paper : "#ffffff"), R = f ? "text.primary" : m, j = (n) => {
    a?.(n);
  }, P = (n, x) => {
    H((B) => ({ ...B, [n]: !x }));
  }, u = (n) => z[n.text] ?? Te(n, o), M = (n) => {
    const x = !!(n.path && o === n.path);
    return /* @__PURE__ */ d(
      we,
      {
        disabled: !n.path,
        selected: x,
        onClick: () => n.path && j(n.path),
        "data-testid": `sidebar-item-${n.text}`,
        "data-active": x ? "true" : "false",
        sx: {
          borderRadius: "6px",
          py: 1,
          px: 1.5,
          color: x ? I : R,
          bgcolor: x ? m : "transparent",
          "& .MuiListItemIcon-root": {
            color: x ? I : R,
            minWidth: 36
          },
          "&:hover": {
            bgcolor: x ? m : h
          },
          "&.Mui-selected, &.Mui-selected:hover": {
            bgcolor: m
          }
        },
        children: [
          /* @__PURE__ */ t(le, { children: n.icon }),
          /* @__PURE__ */ t(
            ce,
            {
              disableTypography: !0,
              primary: /* @__PURE__ */ t(Xe, { text: n.text })
            }
          )
        ]
      },
      n.text
    );
  }, de = (n) => {
    const x = Te(n, o), B = !!(n.path && o === n.path), k = u(n);
    return /* @__PURE__ */ d(
      A,
      {
        "data-testid": `sidebar-group-${n.text}`,
        sx: {
          borderRadius: "6px",
          bgcolor: x ? h : "transparent"
        },
        children: [
          /* @__PURE__ */ d(
            we,
            {
              onClick: () => P(n.text, k),
              "data-testid": `sidebar-item-${n.text}`,
              "data-active": B ? "true" : "false",
              "aria-expanded": k,
              sx: {
                borderRadius: "6px",
                py: 1,
                px: 1.5,
                color: B ? I : R,
                bgcolor: B ? m : "transparent",
                "& .MuiListItemIcon-root": {
                  color: B ? I : R,
                  minWidth: 36
                },
                "&:hover": {
                  bgcolor: B ? m : h
                }
              },
              children: [
                /* @__PURE__ */ t(le, { children: n.icon }),
                /* @__PURE__ */ t(
                  ce,
                  {
                    disableTypography: !0,
                    primary: /* @__PURE__ */ t(Xe, { text: n.text })
                  }
                ),
                /* @__PURE__ */ t(xt, { open: k })
              ]
            }
          ),
          /* @__PURE__ */ t(Ot, { in: k, timeout: "auto", unmountOnExit: !0, children: /* @__PURE__ */ t(
            A,
            {
              "data-testid": `sidebar-children-${n.text}`,
              sx: { pb: 0.5 },
              children: n.subitems.map((X) => Se(X))
            }
          ) })
        ]
      },
      n.text
    );
  }, Se = (n) => {
    const x = Me(n, o);
    return /* @__PURE__ */ d(
      we,
      {
        selected: x,
        onClick: () => j(n.path),
        "data-testid": `sidebar-subitem-${n.text}`,
        "data-active": x ? "true" : "false",
        sx: {
          borderRadius: "6px",
          mx: 0.5,
          py: 0.75,
          pl: 4,
          color: x ? I : R,
          bgcolor: x ? m : "transparent",
          "& .MuiListItemIcon-root": {
            color: x ? I : R,
            minWidth: 32
          },
          "&:hover": {
            bgcolor: x ? m : "action.hover"
          },
          "&.Mui-selected, &.Mui-selected:hover": {
            bgcolor: m
          }
        },
        children: [
          n.icon ? /* @__PURE__ */ t(le, { children: n.icon }) : null,
          /* @__PURE__ */ t(
            ce,
            {
              disableTypography: !0,
              primary: /* @__PURE__ */ t(Xe, { text: n.text })
            }
          )
        ]
      },
      n.path
    );
  }, he = (n, x, B, k, X, U) => {
    const ne = !X, Q = /* @__PURE__ */ t(
      V,
      {
        "aria-label": x,
        disabled: ne,
        onClick: X,
        "data-testid": U?.testId ?? `sidebar-item-${x}`,
        "data-active": k ? "true" : "false",
        sx: {
          width: 44,
          height: 44,
          color: k ? I : R,
          bgcolor: k ? m : "transparent",
          borderRadius: k ? "8px" : "50%",
          "&:hover": {
            bgcolor: k ? m : U?.insideGroup ? "action.hover" : h,
            borderRadius: "8px"
          }
        },
        children: B
      }
    );
    return /* @__PURE__ */ t(ee, { title: x, placement: "right", arrow: !0, children: ne ? /* @__PURE__ */ t("span", { children: Q }) : Q }, n);
  }, G = (n, x) => {
    const B = Te(n, o), k = !!(n.path && o === n.path), X = /* @__PURE__ */ t(ee, { title: n.text, placement: "right", arrow: !0, children: /* @__PURE__ */ d(
      V,
      {
        "aria-label": n.text,
        "aria-expanded": x,
        onClick: () => P(n.text, x),
        "data-testid": `sidebar-item-${n.text}`,
        "data-active": k ? "true" : "false",
        sx: {
          display: "flex",
          flexDirection: "column",
          gap: 0,
          width: 44,
          py: 0.75,
          borderRadius: "10px",
          color: k ? I : R,
          bgcolor: k ? m : "transparent",
          // The outer pill supplies the hover tint; keep only the
          // solid active fill on the button itself.
          "&:hover": {
            bgcolor: k ? m : "transparent"
          }
        },
        children: [
          n.icon,
          /* @__PURE__ */ t(
            xt,
            {
              open: x,
              size: zr
            }
          )
        ]
      }
    ) });
    return /* @__PURE__ */ d(
      A,
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
          // The active group's pill stays tinted; any group tints on hover.
          bgcolor: B ? h : "transparent",
          "&:hover": { bgcolor: h }
        },
        children: [
          X,
          x ? n.subitems.map(
            (U) => he(
              U.path,
              U.text,
              U.icon ?? n.icon,
              Me(U, o),
              () => j(U.path),
              {
                insideGroup: !0,
                testId: `sidebar-subitem-${U.text}`
              }
            )
          ) : null
        ]
      }
    );
  }, oe = (n) => n.subitems?.length ? /* @__PURE__ */ t(S.Fragment, { children: G(n, u(n)) }, n.text) : /* @__PURE__ */ t(
    A,
    {
      sx: {
        width: "100%",
        display: "flex",
        justifyContent: "center"
      },
      children: he(
        n.text,
        n.text,
        n.icon,
        !!(n.path && o === n.path),
        n.path ? () => j(n.path) : void 0
      )
    },
    n.text
  ), q = (n) => _ ? oe(n) : n.subitems?.length ? de(n) : M(n), pe = _ ? p : T;
  return /* @__PURE__ */ d(
    A,
    {
      component: "nav",
      "aria-label": "Main sidebar",
      "data-testid": "collapsible-sidebar",
      "data-collapsed": _ ? "true" : "false",
      sx: {
        width: pe,
        minWidth: pe,
        height: "100%",
        boxSizing: "border-box",
        bgcolor: g,
        display: "flex",
        flexDirection: "column",
        overflowX: "hidden",
        overflowY: "auto",
        transition: Lr,
        px: _ ? 1 : 2,
        pt: 1,
        pb: 2
      },
      children: [
        /* @__PURE__ */ t(
          L,
          {
            spacing: 0.5,
            sx: {
              width: "100%",
              alignItems: _ ? "center" : "stretch"
            },
            children: e.map((n) => q(n))
          }
        ),
        r.length > 0 ? /* @__PURE__ */ d(A, { sx: { mt: "auto", pt: 2 }, children: [
          /* @__PURE__ */ t(re, { sx: { mb: 1, borderColor: "divider" } }),
          /* @__PURE__ */ t(
            L,
            {
              spacing: 0.5,
              sx: {
                width: "100%",
                alignItems: _ ? "center" : "stretch"
              },
              children: r.map((n) => q(n))
            }
          )
        ] }) : null
      ]
    }
  );
}, Mr = 180, bt = 250, zt = ({
  text: e,
  testId: r
}) => {
  const o = S.useRef(null), [a, l] = S.useState(!1), c = S.useCallback(() => {
    const i = o.current;
    i && l(i.scrollWidth > i.clientWidth + 0.5);
  }, []);
  return S.useLayoutEffect(() => {
    c();
  }, [c, e]), S.useEffect(() => {
    const i = o.current;
    if (!i)
      return;
    const s = new ResizeObserver(() => c());
    return s.observe(i), () => s.disconnect();
  }, [c]), /* @__PURE__ */ t(
    ee,
    {
      title: e,
      placement: "right",
      arrow: !0,
      enterDelay: 400,
      disableHoverListener: !a,
      disableFocusListener: !a,
      disableTouchListener: !a,
      children: /* @__PURE__ */ t(
        Y,
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
}, Br = ({
  link: e,
  activePath: r,
  onLinkClick: o,
  accentColor: a,
  isSecondary: l,
  surfaceBackgroundColor: c,
  railShowTitles: i = !1
}) => {
  const s = De(), [E, C] = S.useState(null), [y, T] = S.useState(!1), p = S.useRef(
    null
  ), b = S.useRef(null), f = S.useRef(null), v = S.useRef(!1), F = S.useRef(!1), _ = S.useId(), z = () => {
    p.current && (clearTimeout(p.current), p.current = null);
  }, H = () => {
    z(), p.current = setTimeout(() => {
      T(!1), p.current = null;
    }, Mr);
  }, m = () => {
    z(), T(!0);
  };
  S.useEffect(() => {
    if (!y)
      return;
    const u = (M) => {
      M.key === "Escape" && (T(!1), f.current?.focus());
    };
    return document.addEventListener("keydown", u), () => document.removeEventListener("keydown", u);
  }, [y]), S.useEffect(() => {
    if (!y || !F.current)
      return;
    const u = globalThis.requestAnimationFrame(() => {
      b.current?.querySelector(
        '[role="menuitem"]'
      )?.focus(), F.current = !1;
    });
    return () => cancelAnimationFrame(u);
  }, [y]);
  const I = Te(e, r), h = l ? 48 : 44, g = l ? "text.secondary" : a, R = l ? "#01584F" : a, j = {
    width: "100%",
    maxWidth: "100%",
    minWidth: h,
    height: "auto",
    minHeight: h,
    flexDirection: "column",
    py: 0.5,
    // Horizontal padding so labels (esp. active fill) do not touch the box edges
    px: 1,
    borderRadius: "4px",
    color: I ? "#ffffff" : g,
    backgroundColor: I ? R : "transparent",
    "&:hover": {
      backgroundColor: I ? R : "action.hover",
      borderRadius: "4px",
      color: I ? "#ffffff" : g
    }
  }, P = i ? /* @__PURE__ */ t(
    V,
    {
      ref: f,
      component: e.path ? "a" : "button",
      href: e.path || void 0,
      "aria-label": e.text,
      onFocus: () => {
        v.current || m();
      },
      onBlur: (u) => {
        const M = u.relatedTarget;
        M && b.current?.contains(M) || H();
      },
      onKeyDown: (u) => {
        u.key === "ArrowDown" && (u.preventDefault(), F.current = !0, m());
      },
      onClick: (u) => {
        u.preventDefault(), u.stopPropagation(), e.path && o?.(e.path);
      },
      "aria-haspopup": "menu",
      "aria-expanded": y,
      "aria-controls": y ? _ : void 0,
      "data-testid": `rail-submenu-trigger-${e.text}`,
      sx: j,
      children: /* @__PURE__ */ d(L, { alignItems: "center", spacing: 1, sx: { width: "100%" }, children: [
        /* @__PURE__ */ t(
          A,
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
          zt,
          {
            text: e.text,
            testId: `rail-item-caption-${e.text}`
          }
        )
      ] })
    }
  ) : /* @__PURE__ */ t(
    V,
    {
      ref: f,
      component: e.path ? "a" : "button",
      href: e.path || void 0,
      "aria-label": e.text,
      onFocus: () => {
        v.current || m();
      },
      onBlur: (u) => {
        const M = u.relatedTarget;
        M && b.current?.contains(M) || H();
      },
      onKeyDown: (u) => {
        u.key === "ArrowDown" && (u.preventDefault(), F.current = !0, m());
      },
      onClick: (u) => {
        u.preventDefault(), u.stopPropagation(), e.path && o?.(e.path);
      },
      "aria-haspopup": "menu",
      "aria-expanded": y,
      "aria-controls": y ? _ : void 0,
      "data-testid": `rail-submenu-trigger-${e.text}`,
      sx: {
        width: h,
        height: h,
        color: I ? "#ffffff" : g,
        backgroundColor: I ? R : "transparent",
        borderRadius: I ? "4px" : "50%",
        "&:hover": {
          backgroundColor: I ? R : "action.hover",
          borderRadius: "4px"
        }
      },
      children: e.icon
    }
  );
  return /* @__PURE__ */ d(
    A,
    {
      sx: {
        width: "100%",
        display: "flex",
        justifyContent: "center"
      },
      children: [
        /* @__PURE__ */ t(
          A,
          {
            ref: C,
            "data-testid": `rail-submenu-anchor-${e.text}`,
            sx: { display: "inline-flex", maxWidth: "100%" },
            onMouseEnter: () => {
              v.current = !0, m();
            },
            onMouseLeave: () => {
              v.current = !1, H();
            },
            children: i ? P : /* @__PURE__ */ t(ee, { title: e.text, placement: "right", arrow: !0, children: P })
          }
        ),
        /* @__PURE__ */ t(
          Sr,
          {
            open: y && !!E,
            anchorEl: E,
            placement: "right-start",
            modifiers: [{ name: "offset", options: { offset: [8, 0] } }],
            sx: { zIndex: (u) => u.zIndex.modal },
            children: /* @__PURE__ */ t(
              wr,
              {
                ref: b,
                elevation: 0,
                onMouseEnter: () => {
                  z();
                },
                onMouseLeave: H,
                "data-testid": `rail-submenu-panel-${e.text}`,
                sx: {
                  bgcolor: c,
                  backgroundImage: "none",
                  borderRadius: "4px",
                  border: "1px solid",
                  borderColor: "divider",
                  boxShadow: s.shadows[8],
                  maxWidth: bt,
                  minWidth: 0,
                  py: 0.5,
                  boxSizing: "border-box"
                },
                children: /* @__PURE__ */ t(
                  br,
                  {
                    id: _,
                    dense: !0,
                    autoFocus: !1,
                    role: "menu",
                    sx: {
                      bgcolor: "transparent",
                      py: 0,
                      maxWidth: bt
                    },
                    children: e.subitems.map((u) => /* @__PURE__ */ d(
                      qe,
                      {
                        role: "menuitem",
                        title: u.text,
                        selected: Me(u, r),
                        onClick: (M) => {
                          M.preventDefault(), o?.(u.path), T(!1);
                        },
                        sx: {
                          borderRadius: "4px",
                          mx: 0.5,
                          my: 0.125,
                          maxWidth: "100%",
                          overflow: "hidden",
                          color: l ? "text.secondary" : a,
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
                            bgcolor: R,
                            color: "#ffffff",
                            "&:hover": {
                              bgcolor: R
                            }
                          },
                          "&.Mui-focusVisible": {
                            bgcolor: "action.focus"
                          }
                        },
                        children: [
                          u.icon ? /* @__PURE__ */ t(le, { children: u.icon }) : null,
                          /* @__PURE__ */ t(
                            ce,
                            {
                              primary: u.text,
                              primaryTypographyProps: {
                                noWrap: !0
                              }
                            }
                          )
                        ]
                      },
                      u.path
                    ))
                  }
                )
              }
            )
          }
        )
      ]
    }
  );
}, Kr = ({
  link: e,
  activePath: r,
  onLinkClick: o,
  accentColor: a,
  isSecondary: l,
  railShowTitles: c = !1
}) => {
  const i = !!(e.path && r === e.path), s = l ? 48 : 44, E = l ? "text.secondary" : a, C = l ? "#01584F" : a, y = {
    width: "100%",
    maxWidth: "100%",
    minWidth: s,
    height: "auto",
    minHeight: s,
    flexDirection: "column",
    py: 0.5,
    px: 1,
    borderRadius: "4px",
    color: i ? "#ffffff" : E,
    backgroundColor: i ? C : "transparent",
    "&:hover": {
      backgroundColor: i ? C : "action.hover",
      borderRadius: "4px",
      color: i ? "#ffffff" : E
    }
  }, T = c ? /* @__PURE__ */ t(
    V,
    {
      component: e.path ? "a" : "button",
      href: e.path || void 0,
      "aria-label": e.text,
      onClick: (p) => {
        p.preventDefault(), p.stopPropagation(), e.path && o?.(e.path);
      },
      disabled: !e.path,
      sx: y,
      children: /* @__PURE__ */ d(L, { alignItems: "center", spacing: 1, sx: { width: "100%" }, children: [
        /* @__PURE__ */ t(
          A,
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
          zt,
          {
            text: e.text,
            testId: `rail-item-caption-${e.text}`
          }
        )
      ] })
    }
  ) : /* @__PURE__ */ t(
    V,
    {
      component: e.path ? "a" : "button",
      href: e.path || void 0,
      "aria-label": e.text,
      onClick: (p) => {
        p.preventDefault(), p.stopPropagation(), e.path && o?.(e.path);
      },
      disabled: !e.path,
      sx: {
        width: s,
        height: s,
        color: i ? "#ffffff" : E,
        backgroundColor: i ? C : "transparent",
        borderRadius: i ? "4px" : "50%",
        "&:hover": {
          backgroundColor: i ? C : "action.hover",
          borderRadius: "4px"
        }
      },
      children: e.icon
    }
  );
  return c ? T : /* @__PURE__ */ t(ee, { title: e.text, placement: "right", arrow: !0, children: T });
}, Ur = ({
  link: e,
  expanded: r,
  onToggle: o,
  activePath: a,
  onLinkClick: l,
  accentColor: c,
  groupTint: i,
  activeFg: s,
  isSecondary: E
}) => {
  const C = Te(e, a), y = !!(e.path && a === e.path), T = De().palette.mode === "dark", p = E ? "text.secondary" : T ? "text.primary" : c, b = E ? "#01584F" : c;
  return /* @__PURE__ */ d(
    A,
    {
      sx: {
        borderRadius: "6px",
        bgcolor: C ? i : "transparent"
      },
      children: [
        /* @__PURE__ */ d(
          we,
          {
            onClick: () => e.path ? l?.(e.path) : o(),
            sx: {
              py: 1.5,
              px: 2,
              color: y ? s : p,
              bgcolor: y ? b : "transparent",
              "&:hover": {
                bgcolor: y ? b : i
              }
            },
            "data-testid": `drawer-expand-trigger-${e.text}`,
            children: [
              /* @__PURE__ */ t(le, { sx: { color: "inherit", minWidth: 40 }, children: e.icon }),
              /* @__PURE__ */ t(ce, { primary: e.text }),
              /* @__PURE__ */ t(
                V,
                {
                  size: "small",
                  edge: "end",
                  "aria-label": r ? `Collapse ${e.text}` : `Expand ${e.text}`,
                  onClick: (f) => {
                    f.stopPropagation(), o();
                  },
                  sx: { color: "inherit" },
                  "data-testid": `drawer-expand-chevron-${e.text}`,
                  children: r ? /* @__PURE__ */ t(gr, {}) : /* @__PURE__ */ t(xr, {})
                }
              )
            ]
          }
        ),
        /* @__PURE__ */ t(Ot, { in: r, timeout: "auto", unmountOnExit: !0, children: /* @__PURE__ */ t(A, { component: "nav", "aria-label": e.text, children: e.subitems.map((f) => {
          const v = Me(f, a);
          return /* @__PURE__ */ d(
            we,
            {
              onClick: () => l?.(f.path),
              sx: {
                pl: 4,
                py: 1,
                color: v ? s : p,
                bgcolor: v ? b : "transparent",
                "& .MuiListItemIcon-root": {
                  color: "inherit"
                },
                "&:hover": {
                  bgcolor: v ? b : "action.hover"
                }
              },
              children: [
                f.icon ? /* @__PURE__ */ t(le, { sx: { minWidth: 36 }, children: f.icon }) : null,
                /* @__PURE__ */ t(ce, { primary: f.text })
              ]
            },
            f.path
          );
        }) }) })
      ]
    }
  );
}, $r = ({
  link: e,
  activePath: r,
  onLinkClick: o,
  accentColor: a,
  groupTint: l,
  activeFg: c,
  isSecondary: i
}) => {
  const s = !!(e.path && r === e.path), E = De().palette.mode === "dark", C = i ? "text.secondary" : E ? "text.primary" : a, y = i ? "#01584F" : a;
  return /* @__PURE__ */ d(
    we,
    {
      disabled: !e.path,
      onClick: () => e.path && o?.(e.path),
      sx: {
        py: 1.5,
        px: 2,
        color: s ? c : C,
        bgcolor: s ? y : "transparent",
        "&:hover": {
          bgcolor: s ? y : l
        }
      },
      children: [
        /* @__PURE__ */ t(le, { sx: { color: "inherit", minWidth: 40 }, children: e.icon }),
        /* @__PURE__ */ t(ce, { primary: e.text })
      ]
    }
  );
}, Fe = () => /* @__PURE__ */ t(
  A,
  {
    sx: {
      width: "100%",
      display: "flex",
      justifyContent: "center"
    },
    children: /* @__PURE__ */ t(re, { sx: { width: "60%", borderColor: "divider" } })
  }
), Ft = ({
  variant: e,
  mainLinks: r,
  secondaryLinks: o = [],
  activePath: a,
  onLinkClick: l,
  accentColor: c = "#01584f",
  groupAccentColor: i,
  surfaceBackgroundColor: s,
  railShowTitles: E = !1
}) => {
  const C = De(), y = s ?? C.palette.background.paper, T = At(c), p = i ?? Nt(c), b = (h) => {
    l && l(h);
  }, [f, v] = S.useState({}), [F, _] = S.useState({}), z = (h) => {
    v((g) => ({
      ...g,
      [h]: !g[h]
    }));
  }, H = (h) => {
    _((g) => ({
      ...g,
      [h]: !g[h]
    }));
  }, m = (h, g) => h.subitems?.length ? /* @__PURE__ */ t(
    Br,
    {
      link: h,
      activePath: a,
      onLinkClick: b,
      accentColor: c,
      isSecondary: g,
      surfaceBackgroundColor: y,
      railShowTitles: E
    }
  ) : /* @__PURE__ */ t(
    Kr,
    {
      link: h,
      activePath: a,
      onLinkClick: b,
      accentColor: c,
      isSecondary: g,
      railShowTitles: E
    }
  ), I = (h, g, R) => {
    if (h.subitems?.length) {
      const j = R ? !!F[g] : !!f[g];
      return /* @__PURE__ */ t(
        Ur,
        {
          link: h,
          expanded: j,
          onToggle: () => R ? H(g) : z(g),
          activePath: a,
          onLinkClick: b,
          accentColor: c,
          groupTint: p,
          activeFg: T,
          isSecondary: R
        }
      );
    }
    return /* @__PURE__ */ t(
      $r,
      {
        link: h,
        activePath: a,
        onLinkClick: b,
        accentColor: c,
        groupTint: p,
        activeFg: T,
        isSecondary: R
      }
    );
  };
  return e === "drawer" ? /* @__PURE__ */ d(
    L,
    {
      sx: {
        flexGrow: 1,
        width: "100%",
        alignItems: "stretch",
        pt: 2,
        gap: 0
      },
      children: [
        /* @__PURE__ */ t(L, { sx: { width: "100%" }, children: r.map((h, g) => /* @__PURE__ */ d(S.Fragment, { children: [
          I(h, g, !1),
          g < r.length - 1 ? /* @__PURE__ */ t(Fe, {}) : null
        ] }, g)) }),
        o.length > 0 ? /* @__PURE__ */ d(Je, { children: [
          /* @__PURE__ */ t(
            A,
            {
              sx: {
                width: "100%",
                my: 2,
                display: "flex",
                justifyContent: "center"
              },
              children: /* @__PURE__ */ t(
                re,
                {
                  sx: { width: "60%", borderColor: "divider" }
                }
              )
            }
          ),
          /* @__PURE__ */ t(A, { sx: { mt: "auto", pb: 2 }, children: /* @__PURE__ */ t(L, { sx: { width: "100%" }, children: o.map((h, g) => /* @__PURE__ */ d(S.Fragment, { children: [
            I(h, g, !0),
            g < o.length - 1 ? /* @__PURE__ */ t(Fe, {}) : null
          ] }, g)) }) })
        ] }) : null
      ]
    }
  ) : /* @__PURE__ */ d(
    L,
    {
      sx: {
        flexGrow: 1,
        width: "100%",
        boxSizing: "border-box",
        justifyContent: "flex-start",
        alignItems: "center",
        pt: 2,
        gap: E ? 1.25 : 1
      },
      children: [
        r.map((h, g) => /* @__PURE__ */ d(S.Fragment, { children: [
          m(h, !1),
          g < r.length - 1 ? /* @__PURE__ */ t(Fe, {}) : null
        ] }, g)),
        o.length > 0 ? /* @__PURE__ */ d(Je, { children: [
          /* @__PURE__ */ t(
            A,
            {
              sx: {
                width: "100%",
                my: 2,
                display: "flex",
                justifyContent: "center"
              },
              children: /* @__PURE__ */ t(
                re,
                {
                  sx: { width: "60%", borderColor: "divider" }
                }
              )
            }
          ),
          /* @__PURE__ */ t(A, { sx: { mt: "auto", pb: 2 }, children: /* @__PURE__ */ t(
            L,
            {
              gap: E ? 1.25 : 1,
              alignItems: "center",
              children: o.map((h, g) => /* @__PURE__ */ d(S.Fragment, { children: [
                m(h, !0),
                g < o.length - 1 ? /* @__PURE__ */ t(Fe, {}) : null
              ] }, g))
            }
          ) })
        ] }) : null
      ]
    }
  );
}, Hr = ({
  open: e,
  onClose: r,
  mainLinks: o,
  secondaryLinks: a = [],
  activePath: l,
  onLinkClick: c,
  userName: i = "User Name",
  userAvatar: s,
  userRole: E,
  onLogout: C,
  theme: y = "light",
  showThemeToggler: T = !1,
  onThemeToggle: p,
  alertProps: b,
  accentColor: f = "#01584f",
  groupAccentColor: v
}) => {
  const F = y === "dark", _ = F ? "Switch to light mode" : "Switch to dark mode", z = (m) => m ? m.charAt(0).toUpperCase() + m.slice(1).toLowerCase() : "User", H = (m) => {
    c?.(m), r();
  };
  return /* @__PURE__ */ t(
    Er,
    {
      anchor: "left",
      open: e,
      onClose: r,
      sx: {
        zIndex: (m) => m.zIndex.drawer + 1,
        "& .MuiDrawer-paper": {
          backgroundImage: "none",
          backgroundColor: "background.paper"
        }
      },
      children: /* @__PURE__ */ d(
        L,
        {
          sx: {
            maxWidth: "70dvw",
            height: "100%"
          },
          children: [
            /* @__PURE__ */ d(
              L,
              {
                direction: "row",
                sx: { p: 2, gap: 1, alignItems: "center" },
                children: [
                  /* @__PURE__ */ d(
                    L,
                    {
                      direction: "row",
                      sx: {
                        gap: 1,
                        alignItems: "center",
                        flexGrow: 1,
                        p: 1,
                        minWidth: 0
                      },
                      children: [
                        /* @__PURE__ */ t(
                          Ye,
                          {
                            sizes: "small",
                            alt: i,
                            src: s,
                            sx: { width: 40, height: 40, flexShrink: 0 }
                          }
                        ),
                        /* @__PURE__ */ d(
                          A,
                          {
                            sx: {
                              display: "flex",
                              flexDirection: "column",
                              minWidth: 0
                            },
                            children: [
                              /* @__PURE__ */ t(
                                Y,
                                {
                                  component: "p",
                                  variant: "subtitle1",
                                  sx: {
                                    fontWeight: 600,
                                    lineHeight: 1.2,
                                    overflow: "hidden",
                                    textOverflow: "ellipsis",
                                    whiteSpace: "nowrap"
                                  },
                                  children: i
                                }
                              ),
                              /* @__PURE__ */ t(
                                Y,
                                {
                                  variant: "caption",
                                  sx: {
                                    color: "text.secondary",
                                    lineHeight: 1.2,
                                    overflow: "hidden",
                                    textOverflow: "ellipsis",
                                    whiteSpace: "nowrap"
                                  },
                                  children: z(E)
                                }
                              )
                            ]
                          }
                        )
                      ]
                    }
                  ),
                  T && /* @__PURE__ */ t(ee, { title: _, placement: "bottom", children: /* @__PURE__ */ t("span", { children: /* @__PURE__ */ t(
                    V,
                    {
                      size: "small",
                      onClick: p,
                      disabled: !p,
                      "aria-label": _,
                      children: F ? /* @__PURE__ */ t(Ct, { fontSize: "small" }) : /* @__PURE__ */ t(Rt, { fontSize: "small" })
                    }
                  ) }) })
                ]
              }
            ),
            /* @__PURE__ */ t(re, {}),
            /* @__PURE__ */ d(L, { sx: { flexGrow: 1 }, children: [
              /* @__PURE__ */ t(
                Ft,
                {
                  variant: "drawer",
                  mainLinks: o,
                  secondaryLinks: a,
                  activePath: l,
                  onLinkClick: H,
                  accentColor: f,
                  groupAccentColor: v
                }
              ),
              /* @__PURE__ */ t(re, {})
            ] }),
            b?.show && /* @__PURE__ */ t(Ve, { ...b }),
            /* @__PURE__ */ t(L, { sx: { p: 2 }, children: /* @__PURE__ */ t(
              It,
              {
                variant: "outlined",
                fullWidth: !0,
                startIcon: /* @__PURE__ */ t(Tt, {}),
                onClick: C,
                children: "Logout"
              }
            ) })
          ]
        }
      )
    }
  );
}, Gr = 100, wt = 264, St = 72, Et = "lumora:sidebar-collapsed", yt = "width 200ms ease, left 200ms ease", Mo = ({
  children: e,
  sidebarLinks: r = [],
  secondarySidebarLinks: o = [],
  appName: a = "Dashboard",
  pageName: l = "Home",
  showHeader: c = !0,
  showSidebar: i = !0,
  showSidebarRailTitles: s = !1,
  sidebarVariant: E = "rail",
  logo: C,
  sidebarBackgroundColor: y,
  groupAccentColor: T,
  activeSidebarForegroundColor: p,
  enableRefreshToken: b = !1,
  activePath: f,
  onLinkClick: v,
  userName: F,
  userEmail: _,
  userAvatar: z,
  onLogout: H,
  onProfileClick: m,
  onAccountClick: I,
  onSettingsClick: h,
  showSettings: g = !0,
  showNotifications: R = !0,
  notificationCount: j = 0,
  NotificationSidebarContent: P,
  showSearchbar: u = !0,
  searchValue: M,
  onSearchChange: de,
  onSearchSubmit: Se,
  showProfile: he = !0,
  userRole: G,
  onVerify: oe,
  alertProps: q,
  style: pe,
  headerStyles: n,
  sidebarStyles: x,
  contentStyles: B,
  accentColor: k,
  contentBackgroundColor: X,
  navbarBackground: U,
  navbarAccentColor: ne,
  theme: Q = "light",
  showThemeToggler: _e = !1,
  onThemeToggle: Ae,
  GlobalChatSidebar: Ee,
  useChatSidebar: Be,
  rightExtraContent: Ne,
  customNavbar: ye,
  customNavbarProps: w,
  redirectToLogin: ke,
  apiBaseUrl: Ze
}) => {
  const Mt = qt(), Z = Qt(Mt.breakpoints.down("md")), et = pt(
    () => vt(yr(Q)),
    [Q]
  ), Le = Q === "dark", ue = k ?? "#01584f", We = X ?? (Le ? "hsl(220, 35%, 9%)" : "#f2f9fc"), Bt = U ?? (Le ? "hsl(220, 30%, 7%)" : "#ffffff"), Kt = ne ?? (Le ? "#ffffff" : "#000000"), fe = E === "collapsible", Ut = C ?? /* @__PURE__ */ t(
    ie,
    {
      role: "img",
      "aria-label": `${a} logo`,
      sx: {
        width: 28,
        height: 28,
        flexShrink: 0,
        // Accent in light mode; a legible light fill in dark mode.
        bgcolor: Le ? "#ffffff" : ue,
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
  ), [ve, $t] = ge(
    () => Wt(Et) ?? !1
  ), tt = (Re) => {
    $t(Re), _r(Et, Re);
  };
  let ae = 0;
  i && !Z && (fe ? ae = ve ? St : wt : ae = Gr);
  const [rt, ot] = ge(!1), [Ht, Ke] = ge(!1), [Gt, Pt] = ge(!0), [jt, Xt] = ge(!1), [Pr, ze] = ge(null), nt = Be?.()?.isOpen ?? !1, Ue = ut(oe), at = ut(!1), it = pt(
    () => Tr(Ze),
    [Ze]
  );
  Ge(() => {
    Ue.current = oe;
  }, [oe]);
  const Jt = () => {
    ot(!rt);
  }, Yt = () => {
    ot(!1);
  }, st = (Re) => {
    const me = H(Re);
    me instanceof Promise ? me.then(() => {
      ze(null);
    }).catch((lt) => {
      console.error("Error in logout handler:", lt), ze(null);
    }) : ze(null);
  };
  return Ge(() => {
    (() => {
      try {
        const { isAuthenticated: me, error: lt } = Rr();
        if (!me) {
          console.log("No session found, redirecting to login"), Oe(), ke();
          return;
        }
        if (!at.current) {
          const { user: Ce, error: $e } = Cr();
          if (Ce && !$e) {
            const ct = {
              name: Ce.name || "",
              email: Ce.email || "",
              profilePicture: Ce.profilePicture || "",
              role: Ce.role || ""
            };
            ze(ct), at.current = !0, Ue.current && Ue.current(ct);
          } else $e && console.error("Error getting user data:", $e);
        }
        Xt(!0);
      } catch (me) {
        console.error("Error checking session:", me), Oe(), ke();
      } finally {
        Pt(!1);
      }
    })();
  }, [ke]), Ge(() => {
    b && Ir(it, ke);
  }, [b, it]), Gt ? /* @__PURE__ */ t(ht, { theme: et, children: /* @__PURE__ */ d(
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
        /* @__PURE__ */ t(
          Vt,
          {
            size: 60,
            thickness: 4,
            sx: { color: ue }
          }
        ),
        /* @__PURE__ */ t(ie, { sx: { mt: 2, color: "text.secondary" }, children: "Checking session..." })
      ]
    }
  ) }) : jt ? /* @__PURE__ */ t(ht, { theme: et, children: /* @__PURE__ */ d(
    ie,
    {
      sx: {
        display: "flex",
        minHeight: "100vh",
        ...pe
      },
      children: [
        /* @__PURE__ */ t(Zt, {}),
        c && /* @__PURE__ */ t(
          Dr,
          {
            appName: a,
            pageName: l,
            isMobile: Z,
            onMenuClick: Z ? i ? Jt : void 0 : fe && i ? () => tt(
              !ve
            ) : void 0,
            showMenuButton: i && (Z || fe),
            sidebarCollapsed: !Z && fe ? ve : void 0,
            showBrand: !0,
            logo: Ut,
            headerStyles: n,
            userName: F,
            userEmail: _,
            userAvatar: z,
            onProfileClick: m,
            onAccountClick: I,
            onSettingsClick: h,
            showSettings: g,
            onLogout: st,
            showNotifications: R,
            notificationCount: j,
            onNotificationBellClick: R && P ? () => Ke(!0) : void 0,
            showSearchbar: u && !ye,
            searchValue: M,
            onSearchChange: de,
            onSearchSubmit: Se,
            showProfile: he,
            userRole: G,
            accentColor: ue,
            contentBackgroundColor: We,
            navbarBackground: Bt,
            navbarAccentColor: Kt,
            theme: Q,
            showThemeToggler: _e,
            onThemeToggle: Ae,
            rightExtraContent: Ne,
            customNavbar: ye,
            customNavbarProps: w
          }
        ),
        i && !Z && fe && /* @__PURE__ */ d(
          ie,
          {
            component: "aside",
            sx: {
              width: ae,
              minWidth: ae,
              flexShrink: 0,
              zIndex: 2,
              position: "sticky",
              // Sit below the fixed 60px navbar (which now spans full width).
              top: c ? "60px" : 0,
              mt: c ? "60px" : 0,
              alignSelf: "flex-start",
              height: c ? "calc(100vh - 60px)" : "100vh",
              transition: yt,
              ...x
            },
            children: [
              /* @__PURE__ */ t(
                Fr,
                {
                  mainLinks: r,
                  secondaryLinks: o,
                  activePath: f,
                  onLinkClick: v,
                  activeAccentColor: ue,
                  groupAccentColor: T,
                  activeForegroundColor: p,
                  surfaceBackgroundColor: y,
                  collapsed: ve,
                  onCollapsedChange: tt,
                  expandedWidth: wt,
                  collapsedWidth: St
                }
              ),
              q?.show && !ve && /* @__PURE__ */ t(Ve, { ...q })
            ]
          }
        ),
        i && !Z && !fe && /* @__PURE__ */ t(
          dt,
          {
            variant: "permanent",
            sx: {
              width: ae,
              flexShrink: 0,
              zIndex: 2,
              // Higher z-index than app bar
              "& .MuiDrawer-paper": {
                width: ae,
                boxSizing: "border-box",
                bgcolor: We,
                borderRight: "none",
                top: c ? "60px" : 0,
                // Position below header
                height: c ? "calc(100vh - 60px)" : "100vh"
              },
              ...x
            },
            children: /* @__PURE__ */ d(
              ie,
              {
                sx: {
                  overflow: "auto",
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
                    Ft,
                    {
                      variant: "rail",
                      mainLinks: r,
                      secondaryLinks: o,
                      activePath: f,
                      onLinkClick: v,
                      accentColor: ue,
                      surfaceBackgroundColor: We,
                      railShowTitles: s
                    }
                  ),
                  q?.show && /* @__PURE__ */ t(Ve, { ...q })
                ]
              }
            )
          }
        ),
        i && Z && /* @__PURE__ */ t(
          Hr,
          {
            open: rt,
            onClose: Yt,
            mainLinks: r,
            secondaryLinks: o,
            activePath: f,
            onLinkClick: v,
            userName: F,
            userEmail: _,
            userAvatar: z,
            userRole: G,
            onLogout: st,
            onProfileClick: m,
            theme: Q,
            showThemeToggler: _e,
            onThemeToggle: Ae,
            alertProps: q,
            accentColor: ue,
            groupAccentColor: T
          }
        ),
        /* @__PURE__ */ t(
          ie,
          {
            component: "main",
            sx: {
              flexGrow: 1,
              p: 3,
              width: Z ? "100%" : i ? `calc(100% - ${ae}px)` : "100%",
              transition: yt,
              mt: c ? "60px" : 0,
              // Account for AppNavbar height (60px)
              ml: 0,
              // Offset for sidebar on desktop
              backgroundColor: We,
              mb: 0,
              mr: 0,
              ...B
            },
            children: /* @__PURE__ */ d(He, { container: !0, spacing: 3, children: [
              /* @__PURE__ */ t(
                He,
                {
                  size: {
                    xs: 12,
                    md: nt && Ee ? 8.5 : 12
                  },
                  sx: {
                    display: "flex",
                    flexDirection: "column"
                  },
                  children: e
                }
              ),
              nt && Ee && /* @__PURE__ */ t(
                He,
                {
                  size: { xs: 12, md: 3.5 },
                  sx: {
                    display: "flex",
                    flexDirection: "column",
                    position: { xs: "static", md: "sticky" },
                    top: {
                      xs: "auto",
                      md: c ? "60px" : "0px"
                    },
                    // Stick below navbar
                    alignSelf: "flex-start",
                    height: {
                      xs: "auto",
                      md: c ? "calc(100vh - 60px - 24px - 8px)" : "calc(100vh - 24px - 8px)"
                    },
                    // Viewport - navbar - top padding - top margin
                    maxHeight: {
                      xs: "none",
                      md: c ? "calc(100vh - 60px - 24px - 8px)" : "calc(100vh - 24px - 8px)"
                    }
                    // Viewport - navbar - top padding - top margin
                  },
                  children: /* @__PURE__ */ t(Ee, {})
                }
              )
            ] })
          }
        ),
        R && P && /* @__PURE__ */ t(
          dt,
          {
            anchor: "right",
            open: Ht,
            onClose: () => Ke(!1),
            slotProps: {
              paper: { sx: { width: 380, maxWidth: "100vw" } }
            },
            children: /* @__PURE__ */ t(
              P,
              {
                onClose: () => Ke(!1)
              }
            )
          }
        )
      ]
    }
  ) }) : null;
};
export {
  N as AUTH_ERROR_CODES,
  D as AuthError,
  Fr as CollapsibleSidebar,
  Mo as LumoraWrapper,
  Oe as clearAuthTokens,
  Mo as default,
  Fo as getAuthErrorMessage,
  Ie as getAuthTokens,
  Cr as getCurrentUser,
  Rr as isAuthenticated,
  Qe as logAuthError,
  _t as storeAuthTokens
};
