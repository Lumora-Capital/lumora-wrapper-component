import { jsxs as d, jsx as t, Fragment as ke } from "react/jsx-runtime";
import { useTheme as Er, useMediaQuery as yr, Box as be, CircularProgress as vr, CssBaseline as Rr, Drawer as Ot, Grid as at } from "@mui/material";
import { createTheme as Gt, alpha as Q, styled as Cr, useTheme as Ge, ThemeProvider as _t } from "@mui/material/styles";
import * as w from "react";
import { useMemo as At, useState as _e, useRef as Dt, useEffect as it } from "react";
import Nt from "axios";
import kt from "@mui/icons-material/AccountCircleRounded";
import jt from "@mui/icons-material/DarkMode";
import Xt from "@mui/icons-material/LightMode";
import Vt from "@mui/icons-material/LogoutRounded";
import Yt from "@mui/icons-material/MenuRounded";
import Ir from "@mui/icons-material/NotificationsOutlined";
import Tr from "@mui/icons-material/SearchRounded";
import Or from "@mui/material/AppBar";
import ct from "@mui/material/Avatar";
import _r from "@mui/material/Badge";
import C from "@mui/material/Box";
import ne from "@mui/material/Divider";
import J from "@mui/material/IconButton";
import Ar from "@mui/material/InputAdornment";
import Dr from "@mui/material/Menu";
import dt from "@mui/material/MenuItem";
import D from "@mui/material/Stack";
import Nr from "@mui/material/TextField";
import kr from "@mui/material/Toolbar";
import ee from "@mui/material/Tooltip";
import Y from "@mui/material/Typography";
import Lr from "@mui/material/useMediaQuery";
import Wr from "@mui/material/useScrollTrigger";
import Fr from "@mui/material/Card";
import zr from "@mui/material/CardContent";
import Jt from "@mui/material/Button";
import Mr from "@mui/icons-material/AutoAwesomeRounded";
import Br from "@mui/icons-material/KeyboardArrowDownRounded";
import Hr from "@mui/icons-material/KeyboardArrowUpRounded";
import qt from "@mui/material/Collapse";
import Ne from "@mui/material/ListItemButton";
import we from "@mui/material/ListItemIcon";
import Ee from "@mui/material/ListItemText";
import Ur from "@mui/icons-material/ExpandLess";
import Kr from "@mui/icons-material/ExpandMore";
import $r from "@mui/material/MenuList";
import Pr from "@mui/material/Paper";
import Gr from "@mui/material/Popper";
import jr from "@mui/material/Drawer";
const I = Gt(), Lt = [...I.shadows], P = {
  50: "hsl(210, 100%, 95%)",
  100: "hsl(210, 100%, 92%)",
  200: "hsl(210, 100%, 80%)",
  300: "hsl(210, 100%, 65%)",
  400: "hsl(210, 98%, 48%)",
  500: "hsl(210, 98%, 42%)",
  600: "hsl(210, 98%, 55%)",
  700: "hsl(210, 100%, 35%)",
  900: "hsl(210, 100%, 21%)"
}, F = {
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
}, Se = {
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
}, Xr = (e) => (Lt[1] = e === "dark" ? "hsla(220, 30%, 5%, 0.7) 0px 4px 16px 0px, hsla(220, 25%, 10%, 0.8) 0px 8px 16px -5px" : "hsla(220, 30%, 5%, 0.07) 0px 4px 16px 0px, hsla(220, 25%, 10%, 0.07) 0px 8px 16px -5px", {
  palette: {
    mode: e,
    primary: {
      light: P[200],
      main: P[400],
      dark: P[700],
      contrastText: P[50],
      ...e === "dark" && {
        contrastText: P[50],
        light: P[300],
        main: P[400],
        dark: P[700]
      }
    },
    info: {
      light: P[100],
      main: P[300],
      dark: P[600],
      contrastText: F[50],
      ...e === "dark" && {
        contrastText: P[300],
        light: P[500],
        main: P[700],
        dark: P[900]
      }
    },
    warning: {
      light: Se[300],
      main: Se[400],
      dark: Se[800],
      ...e === "dark" && {
        light: Se[400],
        main: Se[500],
        dark: Se[700]
      }
    },
    error: {
      light: De[300],
      main: De[400],
      dark: De[800],
      ...e === "dark" && {
        light: De[400],
        main: De[500],
        dark: De[700]
      }
    },
    success: {
      light: Ae[300],
      main: Ae[400],
      dark: Ae[800],
      ...e === "dark" && {
        light: Ae[400],
        main: Ae[500],
        dark: Ae[700]
      }
    },
    grey: {
      ...F
    },
    divider: e === "dark" ? Q(F[700], 0.6) : Q(F[300], 0.4),
    background: {
      default: "hsl(0, 0%, 99%)",
      paper: "hsl(220, 35%, 97%)",
      ...e === "dark" && {
        default: F[900],
        paper: "hsl(220, 30%, 7%)"
      }
    },
    text: {
      primary: F[800],
      secondary: F[600],
      warning: Se[400],
      ...e === "dark" && {
        primary: "hsl(0, 0%, 100%)",
        secondary: F[400]
      }
    },
    action: {
      hover: Q(F[200], 0.2),
      selected: `${Q(F[200], 0.3)}`,
      ...e === "dark" && {
        hover: Q(F[600], 0.2),
        selected: Q(F[600], 0.3)
      }
    }
  },
  typography: {
    fontFamily: "Inter, sans-serif",
    h1: {
      fontSize: I.typography.pxToRem(48),
      fontWeight: 600,
      lineHeight: 1.2,
      letterSpacing: -0.5
    },
    h2: {
      fontSize: I.typography.pxToRem(36),
      fontWeight: 600,
      lineHeight: 1.2
    },
    h3: {
      fontSize: I.typography.pxToRem(30),
      lineHeight: 1.2
    },
    h4: {
      fontSize: I.typography.pxToRem(24),
      fontWeight: 600,
      lineHeight: 1.5
    },
    h5: {
      fontSize: I.typography.pxToRem(20),
      fontWeight: 600
    },
    h6: {
      fontSize: I.typography.pxToRem(18),
      fontWeight: 600
    },
    subtitle1: {
      fontSize: I.typography.pxToRem(18)
    },
    subtitle2: {
      fontSize: I.typography.pxToRem(14),
      fontWeight: 500
    },
    body1: {
      fontSize: I.typography.pxToRem(14)
    },
    body2: {
      fontSize: I.typography.pxToRem(14),
      fontWeight: 400
    },
    caption: {
      fontSize: I.typography.pxToRem(12),
      fontWeight: 400
    }
  },
  shape: {
    borderRadius: 8
  },
  shadows: Lt
});
Q(F[300], 0.4), Q(F[200], 0.2), `${Q(F[200], 0.3)}`, Q(F[700], 0.6), Q(F[600], 0.2), Q(F[600], 0.3);
I.typography.pxToRem(48), I.typography.pxToRem(36), I.typography.pxToRem(30), I.typography.pxToRem(24), I.typography.pxToRem(20), I.typography.pxToRem(18), I.typography.pxToRem(18), I.typography.pxToRem(14), I.typography.pxToRem(14), I.typography.pxToRem(14), I.typography.pxToRem(12);
[
  ...I.shadows.slice(2)
];
class T extends Error {
  code;
  originalError;
  timestamp;
  constructor(r, o, a = null) {
    super(r), this.name = "AuthError", this.code = o, this.originalError = a, this.timestamp = (/* @__PURE__ */ new Date()).toISOString();
  }
}
const A = {
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
}, ce = {
  ACCESS_TOKEN: "accessToken",
  REFRESH_TOKEN: "refreshToken",
  USER: "user"
}, Vr = () => {
  if (!(typeof window > "u" || !window.localStorage))
    try {
      const e = localStorage.getItem(ce.ACCESS_TOKEN), r = localStorage.getItem(ce.REFRESH_TOKEN), o = localStorage.getItem(ce.USER);
      e && !localStorage.getItem(K.ACCESS_TOKEN) && localStorage.setItem(K.ACCESS_TOKEN, e), r && !localStorage.getItem(K.REFRESH_TOKEN) && localStorage.setItem(K.REFRESH_TOKEN, r), o && !localStorage.getItem(K.USER) && localStorage.setItem(K.USER, o), (e || r || o) && (localStorage.removeItem(ce.ACCESS_TOKEN), localStorage.removeItem(ce.REFRESH_TOKEN), localStorage.removeItem(ce.USER));
    } catch (e) {
      console.warn("Failed to migrate legacy localStorage keys:", e);
    }
}, st = (e) => {
  try {
    if (typeof window > "u")
      return console.warn("localStorage access attempted on server side"), null;
    if (!window.localStorage)
      throw new T("localStorage is not available", A.STORAGE_ACCESS_DENIED);
    return window.localStorage.getItem(e);
  } catch (r) {
    throw r.name === "QuotaExceededError" ? (console.error("Storage quota exceeded"), new T(
      "Storage quota exceeded. Please clear browser data.",
      A.STORAGE_ACCESS_DENIED,
      r
    )) : r.name === "SecurityError" ? (console.error("localStorage access denied (private browsing or security settings)"), new T(
      "Access to localStorage is denied. Please check browser settings.",
      A.STORAGE_ACCESS_DENIED,
      r
    )) : (console.error("Unexpected error accessing localStorage:", r.name), new T("Failed to access storage", A.STORAGE_ACCESS_DENIED, r));
  }
}, lt = (e, r) => {
  try {
    if (typeof window > "u")
      return console.warn("localStorage write attempted on server side"), !1;
    if (!window.localStorage)
      throw new T("localStorage is not available", A.STORAGE_ACCESS_DENIED);
    return window.localStorage.setItem(e, r), !0;
  } catch (o) {
    throw o.name === "QuotaExceededError" ? (console.error("Storage quota exceeded"), new T(
      "Storage quota exceeded. Please clear browser data.",
      A.STORAGE_ACCESS_DENIED,
      o
    )) : o.name === "SecurityError" ? (console.error("localStorage write denied (private browsing or security settings)"), new T(
      "Access to localStorage is denied. Please check browser settings.",
      A.STORAGE_ACCESS_DENIED,
      o
    )) : (console.error("Unexpected error writing to localStorage:", o.name), new T("Failed to write to storage", A.STORAGE_ACCESS_DENIED, o));
  }
}, Zt = (e) => {
  try {
    return typeof window > "u" ? (console.warn("localStorage removal attempted on server side"), !1) : window.localStorage ? (window.localStorage.removeItem(e), !0) : (console.warn("localStorage is not available"), !1);
  } catch (r) {
    return r.name !== "SecurityError" && console.warn(`Could not remove localStorage key "${e}"`), !1;
  }
}, $e = () => {
  try {
    Vr();
    const e = st(K.ACCESS_TOKEN), r = st(K.REFRESH_TOKEN), o = st(K.USER);
    let a = null;
    if (o)
      try {
        a = JSON.parse(o);
      } catch {
        o && o !== "null" && o !== "undefined" && console.warn("Invalid user data in localStorage, clearing:", o.substring(0, 50)), Zt(K.USER);
      }
    return {
      accessToken: e,
      refreshToken: r,
      user: a
    };
  } catch (e) {
    throw e instanceof T ? e : new T("Failed to retrieve authentication tokens", A.UNKNOWN_ERROR, e);
  }
}, Yr = () => {
  try {
    const { accessToken: e, refreshToken: r } = $e();
    return !(e || r) ? {
      isAuthenticated: !1,
      error: new T("No authentication tokens found", A.TOKEN_NOT_FOUND)
    } : {
      isAuthenticated: !0,
      error: null
    };
  } catch (e) {
    return console.error("Authentication check failed:", e), {
      isAuthenticated: !1,
      error: e instanceof T ? e : new T("Authentication check failed", A.UNKNOWN_ERROR, e)
    };
  }
}, Qt = (e, r, o = null) => {
  try {
    if (!e && !r)
      throw new T("At least one token must be provided", A.TOKEN_INVALID);
    return e && lt(K.ACCESS_TOKEN, e), r && lt(K.REFRESH_TOKEN, r), o && lt(K.USER, JSON.stringify(o)), {
      success: !0,
      error: null
    };
  } catch (a) {
    return console.error("Failed to store authentication tokens:", a), {
      success: !1,
      error: a instanceof T ? a : new T("Failed to store tokens", A.UNKNOWN_ERROR, a)
    };
  }
}, Pe = () => {
  try {
    return [
      K.ACCESS_TOKEN,
      K.REFRESH_TOKEN,
      K.USER,
      // Also clear legacy keys for complete cleanup
      ce.ACCESS_TOKEN,
      ce.REFRESH_TOKEN,
      ce.USER
    ].map((a) => Zt(a)).every((a) => a) || console.warn("Some tokens could not be removed from localStorage"), {
      success: !0,
      error: null
    };
  } catch (e) {
    return console.error("Failed to clear authentication tokens:", e), {
      success: !1,
      error: e instanceof T ? e : new T("Failed to clear tokens", A.LOGOUT_FAILED, e)
    };
  }
}, Jr = () => {
  try {
    const { user: e } = $e();
    return {
      user: e,
      error: null
    };
  } catch (e) {
    return console.error("Failed to get current user:", e), {
      user: null,
      error: e instanceof T ? e : new T("Failed to retrieve user data", A.UNKNOWN_ERROR, e)
    };
  }
}, pn = (e) => {
  if (!(e instanceof T))
    return "An unexpected error occurred. Please try again.";
  switch (e.code) {
    case A.STORAGE_ACCESS_DENIED:
      return "Unable to access browser storage. Please check your browser settings and disable private browsing if enabled.";
    case A.TOKEN_NOT_FOUND:
      return "You are not logged in. Please sign in to continue.";
    case A.TOKEN_INVALID:
      return "Your session is invalid. Please sign in again.";
    case A.TOKEN_EXPIRED:
      return "Your session has expired. Please sign in again.";
    case A.LOGOUT_FAILED:
      return "Failed to log out properly. Please clear your browser cache and try again.";
    case A.UNKNOWN_ERROR:
    default:
      return "An unexpected error occurred. Please try again or contact support if the problem persists.";
  }
}, ht = (e, r = "Unknown") => {
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
}, qr = (e) => {
  if (!e)
    throw new Error("API base URL is required to create axios client");
  const r = Nt.create({
    baseURL: e,
    headers: {
      "Content-Type": "application/json"
    }
  });
  let o = !1, a = null, l = [];
  const h = (s, i) => {
    l.forEach(({ resolve: g, reject: E }) => {
      s ? E(s) : i && g(i);
    }), l = [];
  };
  return r.interceptors.request.use(
    (s) => {
      const { accessToken: i } = $e();
      return i && s.headers && (s.headers.Authorization = `Bearer ${i}`), s;
    },
    (s) => Promise.reject(s)
  ), r.interceptors.response.use(
    (s) => s,
    async (s) => {
      const i = s.config, g = s.response?.status, E = i?.url || "", y = E.includes("/auth/refresh");
      if (g !== 401 || i._retry || y)
        return Promise.reject(s);
      i._retry = !0;
      const { refreshToken: O } = $e();
      if (!O) {
        const u = new Error(
          "No refresh token available for token refresh"
        );
        return ht(u, "AxiosClient - Token Refresh"), Pe(), typeof window < "u" && (window.location.href = "/login"), Promise.reject(s);
      }
      if (o && a)
        return new Promise((u, v) => {
          l.push({ resolve: u, reject: v });
        }).then((u) => {
          const {
            accessToken: v,
            refreshToken: x
          } = u;
          if (i.headers && (i.headers.Authorization = `Bearer ${v}`), E.includes("/auth/logout"))
            try {
              if (typeof i.data == "string") {
                const R = JSON.parse(
                  i.data || "{}"
                );
                R.refresh_token = x, i.data = JSON.stringify(R);
              } else i.data && typeof i.data == "object" ? i.data.refresh_token = x : i.data = JSON.stringify({
                refresh_token: x
              });
            } catch {
              i.data = JSON.stringify({
                refresh_token: x
              });
            }
          return r(i);
        }).catch((u) => Promise.reject(u));
      o = !0, a = Nt.post(
        `${e}/auth/refresh`,
        {
          refresh_token: O
        }
      );
      try {
        const u = await a, { accessToken: v, refreshToken: x } = u.data;
        if (Qt(v, x, null), h(null, {
          accessToken: v,
          refreshToken: x
        }), i.headers && (i.headers.Authorization = `Bearer ${v}`), E.includes("/auth/logout"))
          try {
            if (typeof i.data == "string") {
              const R = JSON.parse(
                i.data || "{}"
              );
              R.refresh_token = x, i.data = JSON.stringify(R);
            } else i.data && typeof i.data == "object" ? i.data.refresh_token = x : i.data = JSON.stringify({
              refresh_token: x
            });
          } catch {
            i.data = JSON.stringify({
              refresh_token: x
            });
          }
        return r(i);
      } catch (u) {
        return ht(
          u,
          "AxiosClient - Token Refresh Failed"
        ), h(u), Pe(), typeof window < "u" && (window.location.href = "/login"), Promise.reject(u);
      } finally {
        o = !1, a = null;
      }
    }
  ), r;
}, Zr = async (e, r) => {
  const { accessToken: o, refreshToken: a } = $e();
  if (o)
    return !0;
  if (a)
    try {
      const l = await e.post("/auth/refresh", {
        refresh_token: a
      });
      if (l.data.success && l.data.accessToken)
        return Qt(l.data.accessToken, l.data.refreshToken || null, null), !0;
    } catch (l) {
      ht(l, "TokenValidator - Refresh Failed");
    }
  return Pe(), r ? r() : window.location.href = "/login", !1;
}, Qr = ({ size: e = 20, style: r }) => /* @__PURE__ */ d(
  "svg",
  {
    width: e,
    height: e * 30 / 33,
    viewBox: "0 0 33 30",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    "aria-hidden": "true",
    focusable: "false",
    style: r,
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
), eo = ({
  onClick: e,
  active: r = !1,
  busy: o = !1,
  navbarBackground: a = "#ffffff"
}) => /* @__PURE__ */ t(ee, { title: "Nexa", placement: "bottom", children: /* @__PURE__ */ t(
  J,
  {
    onClick: e,
    "aria-label": "Toggle Nexa assistant",
    "aria-pressed": r,
    disableFocusRipple: !0,
    sx: {
      position: "relative",
      width: 38,
      height: 38,
      p: 0,
      flexShrink: 0,
      borderRadius: "11px",
      overflow: "hidden",
      // No interior fill in any state — just the logo (plus the animated
      // border line when busy). Only a standard transient hover.
      backgroundColor: "transparent",
      "&:hover": { backgroundColor: "action.hover" },
      "&:focus, &:focus-visible": { outline: "none" },
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
        // Opaque inner cover so only the ~2px border line is visible;
        // interior matches the navbar (never a filled tint).
        "&::after": {
          content: '""',
          position: "absolute",
          inset: "2px",
          borderRadius: "9px",
          backgroundColor: a,
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
      C,
      {
        sx: {
          position: "relative",
          zIndex: 2,
          display: "flex",
          alignItems: "center"
        },
        children: /* @__PURE__ */ t(Qr, { size: 20 })
      }
    )
  }
) }), to = Cr(kr)({
  width: "100%",
  padding: "8px 16px",
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
  gap: "16px",
  flexShrink: 0
}), ro = ({
  appName: e = "Dashboard",
  pageName: r = "Home",
  onMenuClick: o,
  showMenuButton: a = !0,
  isMobile: l = !1,
  sidebarCollapsed: h,
  showBrand: s = !0,
  logo: i,
  leftOffsetPx: g = 0,
  headerStyles: E,
  userName: y = "User Name",
  userEmail: O,
  userAvatar: u,
  onProfileClick: v,
  onAccountClick: x,
  onSettingsClick: R,
  showSettings: z = !0,
  onLogout: H,
  showNotifications: $ = !1,
  notificationCount: L = 0,
  onNotificationBellClick: m,
  theme: N = "light",
  showThemeToggler: b = !1,
  onThemeToggle: f,
  showSearchbar: W = !0,
  searchValue: j,
  onSearchChange: ae,
  onSearchSubmit: c,
  showProfile: M = !0,
  userRole: Le,
  accentColor: _ = "#01584f",
  contentBackgroundColor: B = "#f2f9fc",
  navbarBackground: oe = "#ff0000",
  navbarAccentColor: G = "#000000",
  rightExtraContent: X = [],
  customNavbar: te,
  customNavbarProps: V,
  showAssistant: ye = !1,
  onAssistantClick: ie,
  assistantActive: We = !1,
  assistantBusy: de = !1
}) => {
  const Fe = Lr((p) => p.breakpoints.up("md")), ve = Wr({
    disableHysteresis: !0,
    threshold: 0
  }), [pe, Re] = w.useState(null), ze = !!pe, re = N === "dark", se = re ? "text.primary" : _, ue = re ? "Switch to light mode" : "Switch to dark mode", he = h === void 0 ? "Open navigation menu" : h ? "Expand sidebar" : "Collapse sidebar", Ce = (p) => {
    ae?.(p.target.value);
  }, Ie = (p) => {
    p.key === "Enter" && c && j && c(j);
  }, Me = (p) => p ? p.charAt(0).toUpperCase() + p.slice(1).toLowerCase() : "User", Te = (p) => {
    Re(p.currentTarget);
  }, n = () => {
    Re(null);
  }, S = (p) => {
    p?.(), n();
  };
  return /* @__PURE__ */ t(
    Or,
    {
      position: "fixed",
      sx: {
        boxShadow: ve ? "0 2px 8px rgba(0, 0, 0, 0.12)" : "none",
        // left/width animate in step with the collapsible sidebar's
        // 200ms width transition so the bar tracks the panel edge.
        transition: "box-shadow 0.2s ease-in-out, left 200ms ease, width 200ms ease",
        background: oe,
        top: "var(--template-frame-height, 0px)",
        // Inset from the left so the bar starts at the edge of a
        // full-height sidebar; full width otherwise.
        left: g,
        width: g ? `calc(100% - ${g}px)` : "100%",
        zIndex: 1,
        height: "60px",
        ...E
      },
      children: /* @__PURE__ */ d(to, { variant: "dense", sx: { height: "100%" }, children: [
        /* @__PURE__ */ d(
          D,
          {
            direction: "row",
            sx: {
              alignItems: "center",
              gap: 2,
              flexShrink: 0,
              flexGrow: 1
            },
            children: [
              a && /* @__PURE__ */ t(ee, { title: he, placement: "bottom", children: /* @__PURE__ */ t(
                J,
                {
                  "aria-label": he,
                  onClick: o,
                  disableFocusRipple: !0,
                  sx: {
                    // Nudge left so the icon centers on the sidebar
                    // icon rail (72px wide → 36px center) below it.
                    ml: -1,
                    color: se,
                    "&:hover": {
                      backgroundColor: "action.hover"
                    },
                    "&:focus, &:focus-visible": {
                      outline: "none"
                    }
                  },
                  children: /* @__PURE__ */ t(Yt, {})
                }
              ) }),
              s && /* @__PURE__ */ d(
                D,
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
                          color: se,
                          fontWeight: 600,
                          fontSize: "20px",
                          lineHeight: 1,
                          textTransform: "uppercase"
                        },
                        children: e
                      }
                    ),
                    i ? /* @__PURE__ */ t(
                      C,
                      {
                        sx: {
                          display: "flex",
                          alignItems: "center",
                          flexShrink: 0,
                          color: se,
                          "& svg": {
                            color: "inherit",
                            fill: "currentColor"
                          }
                        },
                        children: i
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
              te ? /* @__PURE__ */ t(te, { ...V || {} }) : W && Fe && /* @__PURE__ */ t(
                Nr,
                {
                  placeholder: "Search for deals or documents...",
                  value: j || "",
                  onChange: Ce,
                  onKeyDown: Ie,
                  size: "small",
                  sx: {
                    width: "400px",
                    "& .MuiOutlinedInput-root": {
                      backgroundColor: B,
                      borderRadius: "8px",
                      "& fieldset": {
                        borderColor: "transparent"
                      },
                      "&:hover fieldset": {
                        borderColor: "transparent"
                      },
                      "&.Mui-focused fieldset": {
                        borderColor: _
                      }
                    }
                  },
                  InputProps: {
                    startAdornment: /* @__PURE__ */ t(Ar, { position: "start", children: /* @__PURE__ */ t(
                      Tr,
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
          D,
          {
            direction: "row",
            sx: {
              alignItems: "center",
              gap: 1.5,
              flexShrink: 0
            },
            children: [
              b && !l && /* @__PURE__ */ t(ee, { title: ue, placement: "bottom", children: /* @__PURE__ */ t("span", { children: /* @__PURE__ */ t(
                J,
                {
                  size: "small",
                  onClick: f,
                  disabled: !f,
                  "aria-label": ue,
                  sx: {
                    color: G,
                    "&:hover": {
                      backgroundColor: "action.hover"
                    }
                  },
                  children: re ? /* @__PURE__ */ t(Xt, { fontSize: "small" }) : /* @__PURE__ */ t(jt, { fontSize: "small" })
                }
              ) }) }),
              $ && /* @__PURE__ */ t(
                _r,
                {
                  color: "error",
                  badgeContent: L,
                  invisible: L === 0,
                  sx: {
                    "& .MuiBadge-badge": {
                      right: 2,
                      top: 2
                    }
                  },
                  children: /* @__PURE__ */ t(
                    J,
                    {
                      size: "small",
                      onClick: m,
                      "aria-label": L ? `Notifications, ${L} unread` : "Notifications",
                      sx: { color: G },
                      children: /* @__PURE__ */ t(Ir, {})
                    }
                  )
                }
              ),
              ye && !l && /* @__PURE__ */ d(ke, { children: [
                /* @__PURE__ */ t(
                  ne,
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
                /* @__PURE__ */ t(
                  eo,
                  {
                    onClick: ie,
                    active: We,
                    busy: de,
                    navbarBackground: oe
                  }
                )
              ] }),
              $ && M && !l && /* @__PURE__ */ t(
                ne,
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
              M && !l && /* @__PURE__ */ d(ke, { children: [
                /* @__PURE__ */ d(
                  D,
                  {
                    direction: "row",
                    onClick: Te,
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
                      u ? /* @__PURE__ */ t(
                        ct,
                        {
                          src: u,
                          sx: { width: 32, height: 32 }
                        }
                      ) : /* @__PURE__ */ t(
                        kt,
                        {
                          sx: {
                            width: 32,
                            height: 32,
                            color: G
                          }
                        }
                      ),
                      /* @__PURE__ */ d(
                        C,
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
                                children: y
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
                                children: Me(Le)
                              }
                            )
                          ]
                        }
                      )
                    ]
                  }
                ),
                /* @__PURE__ */ d(
                  Dr,
                  {
                    anchorEl: pe,
                    open: ze,
                    onClose: n,
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
                      z && [
                        /* @__PURE__ */ t(
                          dt,
                          {
                            onClick: () => S(R),
                            children: "Settings"
                          },
                          "settings"
                        ),
                        /* @__PURE__ */ t(ne, {}, "settings-divider")
                      ],
                      /* @__PURE__ */ d(
                        dt,
                        {
                          onClick: () => S(H),
                          sx: {
                            color: "error.main",
                            "&:hover": {
                              color: "error.dark"
                            }
                          },
                          children: [
                            /* @__PURE__ */ t(Y, { sx: { flexGrow: 1 }, children: "Logout" }),
                            /* @__PURE__ */ t(Vt, { fontSize: "small" })
                          ]
                        }
                      )
                    ]
                  }
                )
              ] }),
              X.length !== 0 && X.map((p) => p.type === "divider" ? /* @__PURE__ */ t(
                ne,
                {
                  orientation: "vertical",
                  flexItem: !0,
                  sx: {
                    borderColor: "rgba(0, 0, 0, 0.12)",
                    height: "24px",
                    alignSelf: "center"
                  }
                },
                p.key
              ) : p.type === "profile" ? /* @__PURE__ */ t(
                ee,
                {
                  title: p.tooltip || "",
                  disableHoverListener: !p.tooltip,
                  arrow: !0,
                  children: /* @__PURE__ */ d(
                    D,
                    {
                      direction: "row",
                      onClick: p.disabled ? void 0 : p.onClick,
                      sx: {
                        alignItems: "center",
                        gap: 1,
                        cursor: p.disabled ? "not-allowed" : "pointer",
                        borderRadius: "8px",
                        padding: "4px 8px",
                        opacity: p.disabled ? 0.5 : 1,
                        transition: "opacity 0.2s",
                        ...!p.disabled && {
                          "&:hover": {
                            backgroundColor: "action.hover"
                          }
                        }
                      },
                      children: [
                        p.avatar ? /* @__PURE__ */ t(
                          ct,
                          {
                            src: p.avatar,
                            sx: {
                              width: 32,
                              height: 32
                            }
                          }
                        ) : /* @__PURE__ */ t(
                          kt,
                          {
                            sx: {
                              width: 32,
                              height: 32,
                              color: G
                            }
                          }
                        ),
                        /* @__PURE__ */ d(
                          C,
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
                                  children: p.name
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
                                  children: p.role
                                }
                              )
                            ]
                          }
                        )
                      ]
                    }
                  )
                },
                p.key
              ) : null)
            ]
          }
        )
      ] })
    }
  );
}, pt = ({
  title: e = "",
  message: r = "",
  buttonText: o = "",
  onButtonClick: a,
  show: l = !0
}) => l ? /* @__PURE__ */ t(Fr, { variant: "outlined", sx: { m: 1.5, flexShrink: 0 }, children: /* @__PURE__ */ d(zr, { children: [
  /* @__PURE__ */ t(Mr, { fontSize: "small" }),
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
    Jt,
    {
      variant: "contained",
      size: "small",
      fullWidth: !0,
      onClick: a,
      children: o
    }
  )
] }) }) : null, Ke = (e, r) => r ? e.path && r === e.path ? !0 : e.subitems?.some((o) => o.path === r) ?? !1 : !1, Ze = (e, r) => !!(r && e.path === r), Qe = (e) => {
  const r = er(e);
  if (!r)
    return "#ffffff";
  const [o, a, l] = r.map((s) => {
    const i = s / 255;
    return i <= 0.03928 ? i / 12.92 : ((i + 0.055) / 1.055) ** 2.4;
  });
  return 0.2126 * o + 0.7152 * a + 0.0722 * l > 0.5 ? "#0b1f1c" : "#ffffff";
}, ut = (e) => {
  const r = er(e);
  if (!r)
    return "rgba(1, 88, 79, 0.12)";
  const [o, a, l] = r;
  return `rgba(${o}, ${a}, ${l}, 0.14)`;
}, er = (e) => {
  let r = e.trim().replace(/^#/, "");
  if (r.length === 3 && (r = r.split("").map((a) => a + a).join("")), r.length !== 6 || /[^0-9a-fA-F]/.test(r))
    return null;
  const o = parseInt(r, 16);
  return [o >> 16 & 255, o >> 8 & 255, o & 255];
}, tr = () => typeof window < "u" && !!window.localStorage, rr = (e) => {
  if (!tr())
    return null;
  try {
    const r = window.localStorage.getItem(e);
    return r === null ? null : r === "true";
  } catch (r) {
    return console.warn("Failed to read sidebar collapsed state:", r), null;
  }
}, or = (e, r) => {
  if (tr())
    try {
      window.localStorage.setItem(e, r ? "true" : "false");
    } catch (o) {
      console.warn("Failed to persist sidebar collapsed state:", o);
    }
}, oo = 264, no = 72, ao = "lumora:sidebar-collapsed", io = "width 200ms ease", Wt = 60, Je = {
  "&:focus, &:focus-visible": { outline: "none" }
}, so = 16, lo = 14, Ft = "0.7rem", zt = 22, Ue = ({ text: e, variant: r = "body1", center: o = !1, fontSize: a }) => {
  const l = w.useRef(null), [h, s] = w.useState(!1), i = w.useCallback(() => {
    const g = l.current;
    g && s(g.scrollWidth > g.clientWidth + 0.5);
  }, []);
  return w.useLayoutEffect(() => {
    i();
  }, [i, e]), w.useEffect(() => {
    const g = l.current;
    if (!g)
      return;
    const E = new ResizeObserver(() => i());
    return E.observe(g), () => E.disconnect();
  }, [i]), /* @__PURE__ */ t(
    ee,
    {
      title: e,
      placement: "right",
      arrow: !0,
      enterDelay: 400,
      disableHoverListener: !h,
      disableFocusListener: !h,
      disableTouchListener: !h,
      children: /* @__PURE__ */ t(
        Y,
        {
          ref: l,
          component: "span",
          variant: r,
          sx: {
            display: "block",
            width: o ? "100%" : void 0,
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
            color: "inherit",
            ...a ? { fontSize: a } : {},
            ...o ? { textAlign: "center", lineHeight: 1.1 } : {}
          },
          children: e
        }
      )
    }
  );
}, Mt = ({
  open: e,
  size: r = so
}) => e ? /* @__PURE__ */ t(Hr, { sx: { fontSize: r, opacity: 0.75 } }) : /* @__PURE__ */ t(Br, { sx: { fontSize: r, opacity: 0.75 } }), co = ({
  mainLinks: e,
  secondaryLinks: r = [],
  activePath: o,
  onLinkClick: a,
  logo: l,
  title: h,
  showHeaderBar: s = !1,
  headerBackgroundColor: i,
  headerForegroundColor: g,
  activeAccentColor: E = "#01584f",
  groupAccentColor: y,
  activeForegroundColor: O,
  foregroundColor: u,
  surfaceBackgroundColor: v,
  collapsed: x,
  defaultCollapsed: R = !1,
  onCollapsedChange: z,
  persistKey: H = ao,
  expandedWidth: $ = oo,
  collapsedWidth: L = no,
  showLabels: m = !1,
  topInsetPx: N = 0
}) => {
  const b = Ge(), f = b.palette.mode === "dark", W = x !== void 0, [j, ae] = w.useState(
    () => rr(H) ?? R
  ), c = W ? !!x : j, [M, Le] = w.useState(
    {}
  ), _ = E, B = O ?? Qe(_), oe = {
    bgcolor: _,
    color: B,
    "& .MuiListItemIcon-root": { color: B }
  }, G = {
    bgcolor: _,
    color: B,
    borderRadius: "8px"
  }, X = y ?? ut(_), te = v ?? (f ? b.palette.background.paper : "#ffffff"), V = u ?? (f ? "text.primary" : _), ye = i ?? te, ie = g ?? Qe(ye), We = ut(ie), de = (n) => {
    a?.(n);
  }, Fe = () => {
    const n = !c;
    W || (ae(n), or(H, n)), z?.(n);
  }, ve = (n, S) => {
    Le((p) => ({ ...p, [n]: !S }));
  }, pe = (n) => M[n.text] ?? Ke(n, o), Re = (n) => {
    const S = !!(n.path && o === n.path);
    return /* @__PURE__ */ d(
      Ne,
      {
        disabled: !n.path,
        selected: S,
        onClick: () => n.path && de(n.path),
        "data-testid": `sidebar-item-${n.text}`,
        "data-active": S ? "true" : "false",
        sx: {
          borderRadius: "8px",
          py: 1,
          px: 1.5,
          color: S ? B : V,
          bgcolor: S ? _ : "transparent",
          "& .MuiListItemIcon-root": {
            color: S ? B : V,
            minWidth: 36
          },
          // rail-labeled: active AND hover share the highlight. collapsible:
          // keep the original subtle idle-hover tint (accent only if active).
          "&:hover": S || m ? oe : { bgcolor: X },
          "&.Mui-selected": {
            bgcolor: _
          },
          "&.Mui-selected:hover": oe
        },
        children: [
          /* @__PURE__ */ t(we, { children: n.icon }),
          /* @__PURE__ */ t(
            Ee,
            {
              disableTypography: !0,
              primary: /* @__PURE__ */ t(Ue, { text: n.text })
            }
          )
        ]
      },
      n.text
    );
  }, ze = (n) => {
    const S = Ke(n, o), p = !!(n.path && o === n.path), k = pe(n);
    return /* @__PURE__ */ d(
      C,
      {
        "data-testid": `sidebar-group-${n.text}`,
        sx: {
          borderRadius: "8px",
          bgcolor: S ? X : "transparent"
        },
        children: [
          /* @__PURE__ */ d(
            Ne,
            {
              onClick: () => ve(n.text, k),
              "data-testid": `sidebar-item-${n.text}`,
              "data-active": p ? "true" : "false",
              "aria-expanded": k,
              sx: {
                borderRadius: "8px",
                py: 1,
                px: 1.5,
                color: p ? B : V,
                bgcolor: p ? _ : "transparent",
                "& .MuiListItemIcon-root": {
                  color: p ? B : V,
                  minWidth: 36
                },
                // rail-labeled highlights on hover; collapsible keeps the
                // subtle idle tint (accent only when the parent is active).
                "&:hover": p || m ? oe : { bgcolor: X }
              },
              children: [
                /* @__PURE__ */ t(we, { children: n.icon }),
                /* @__PURE__ */ t(
                  Ee,
                  {
                    disableTypography: !0,
                    primary: /* @__PURE__ */ t(Ue, { text: n.text })
                  }
                ),
                /* @__PURE__ */ t(Mt, { open: k })
              ]
            }
          ),
          /* @__PURE__ */ t(qt, { in: k, timeout: "auto", unmountOnExit: !0, children: /* @__PURE__ */ t(
            C,
            {
              "data-testid": `sidebar-children-${n.text}`,
              sx: { pb: 0.5 },
              children: n.subitems.map((q) => re(q))
            }
          ) })
        ]
      },
      n.text
    );
  }, re = (n) => {
    const S = Ze(n, o);
    return /* @__PURE__ */ d(
      Ne,
      {
        selected: S,
        onClick: () => de(n.path),
        "data-testid": `sidebar-subitem-${n.text}`,
        "data-active": S ? "true" : "false",
        sx: {
          borderRadius: "8px",
          mx: 0.5,
          py: 0.75,
          pl: 4,
          color: S ? B : V,
          bgcolor: S ? _ : "transparent",
          "& .MuiListItemIcon-root": {
            color: S ? B : V,
            minWidth: 32
          },
          // rail-labeled: active AND hover share the highlight. collapsible:
          // keep the original subtle idle-hover tint (accent only if active).
          "&:hover": S || m ? oe : { bgcolor: "action.hover" },
          "&.Mui-selected": {
            bgcolor: _
          },
          "&.Mui-selected:hover": oe
        },
        children: [
          n.icon ? /* @__PURE__ */ t(we, { children: n.icon }) : null,
          /* @__PURE__ */ t(
            Ee,
            {
              disableTypography: !0,
              primary: /* @__PURE__ */ t(Ue, { text: n.text })
            }
          )
        ]
      },
      n.path
    );
  }, se = (n, S, p, k, q, fe) => {
    const Z = !q, U = /* @__PURE__ */ d(
      J,
      {
        "aria-label": S,
        disabled: Z,
        onClick: q,
        "data-testid": fe?.testId ?? `sidebar-item-${S}`,
        "data-active": k ? "true" : "false",
        sx: m ? {
          display: "flex",
          flexDirection: "column",
          gap: 0.25,
          width: "100%",
          maxWidth: "100%",
          height: "auto",
          // 8px padding on all sides of the item container.
          p: 1,
          borderRadius: "8px",
          color: k ? B : V,
          bgcolor: k ? _ : "transparent",
          "& .MuiSvgIcon-root": {
            fontSize: zt
          },
          "&:hover": G,
          ...Je
        } : {
          // Icon-only collapsed rail (collapsible variant):
          // original hover — accent when active, else a subtle
          // tint; no foreground change.
          width: 44,
          height: 44,
          color: k ? B : V,
          bgcolor: k ? _ : "transparent",
          borderRadius: k ? "8px" : "50%",
          "&:hover": {
            bgcolor: k ? _ : fe?.insideGroup ? "action.hover" : X,
            borderRadius: "8px"
          },
          ...Je
        },
        children: [
          p,
          m ? /* @__PURE__ */ t(
            Ue,
            {
              text: S,
              variant: "caption",
              center: !0,
              fontSize: Ft
            }
          ) : null
        ]
      }
    );
    return m ? Z ? /* @__PURE__ */ t("span", { children: U }, n) : /* @__PURE__ */ t(w.Fragment, { children: U }, n) : /* @__PURE__ */ t(ee, { title: S, placement: "right", arrow: !0, children: Z ? /* @__PURE__ */ t("span", { children: U }) : U }, n);
  }, ue = (n, S) => {
    const p = Ke(n, o), k = !!(n.path && o === n.path), q = /* @__PURE__ */ d(
      J,
      {
        "aria-label": n.text,
        "aria-expanded": S,
        onClick: () => ve(n.text, S),
        "data-testid": `sidebar-item-${n.text}`,
        "data-active": k ? "true" : "false",
        sx: {
          display: "flex",
          flexDirection: "column",
          gap: m ? 0.25 : 0,
          width: m ? "100%" : 44,
          maxWidth: "100%",
          // 8px padding on all sides of the labeled item container.
          ...m ? { p: 1 } : { py: 0.75 },
          borderRadius: "10px",
          color: k ? B : V,
          bgcolor: k ? _ : "transparent",
          // rail-labeled: active AND hover share the highlight. collapsible:
          // original behavior — accent only when active; the outer pill
          // supplies the idle-hover tint, so the button stays transparent.
          "&:hover": m ? { bgcolor: _, color: B } : {
            bgcolor: k ? _ : "transparent"
          },
          ...Je
        },
        children: [
          m ? /* @__PURE__ */ t(
            C,
            {
              sx: {
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                "& .MuiSvgIcon-root": {
                  fontSize: zt
                }
              },
              children: n.icon
            }
          ) : n.icon,
          m ? /* @__PURE__ */ t(
            Ue,
            {
              text: n.text,
              variant: "caption",
              center: !0,
              fontSize: Ft
            }
          ) : null,
          /* @__PURE__ */ t(Mt, { open: S, size: lo })
        ]
      }
    ), fe = m ? q : /* @__PURE__ */ t(ee, { title: n.text, placement: "right", arrow: !0, children: q });
    return /* @__PURE__ */ d(
      C,
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
          bgcolor: p ? X : "transparent",
          ...m ? {} : { "&:hover": { bgcolor: X } }
        },
        children: [
          fe,
          S ? n.subitems.map(
            (Z) => se(
              Z.path,
              Z.text,
              Z.icon ?? n.icon,
              Ze(Z, o),
              () => de(Z.path),
              {
                insideGroup: !0,
                testId: `sidebar-subitem-${Z.text}`
              }
            )
          ) : null
        ]
      }
    );
  }, he = (n) => n.subitems?.length ? /* @__PURE__ */ t(w.Fragment, { children: ue(n, pe(n)) }, n.text) : /* @__PURE__ */ t(
    C,
    {
      sx: {
        width: "100%",
        display: "flex",
        justifyContent: "center"
      },
      children: se(
        n.text,
        n.text,
        n.icon,
        !!(n.path && o === n.path),
        n.path ? () => de(n.path) : void 0
      )
    },
    n.text
  ), Ce = (n) => c ? he(n) : n.subitems?.length ? ze(n) : Re(n), Ie = c ? L : $, Me = s ? /* @__PURE__ */ d(
    C,
    {
      "data-testid": "sidebar-header",
      sx: {
        height: Wt,
        minHeight: Wt,
        flexShrink: 0,
        display: "flex",
        alignItems: "center",
        gap: 1.5,
        bgcolor: ye,
        borderBottom: `1px solid ${We}`,
        justifyContent: c ? "center" : "flex-start",
        // Expanded: 20px inset centers the hamburger glyph on the item
        // icon column (16px list padding + 12px row padding + half of
        // the 24px icon = 40px, minus the button's 8px + 12px to its
        // own center). Collapsed: centered like the rail icons.
        px: c ? 0 : 2.5
      },
      children: [
        /* @__PURE__ */ t(
          ee,
          {
            title: c ? "Expand sidebar" : "Collapse sidebar",
            placement: "right",
            arrow: !0,
            children: /* @__PURE__ */ t(
              J,
              {
                "aria-label": c ? "Expand sidebar" : "Collapse sidebar",
                "aria-expanded": !c,
                onClick: Fe,
                "data-testid": "sidebar-collapse-toggle",
                disableFocusRipple: !0,
                sx: { color: ie, ...Je },
                children: /* @__PURE__ */ t(Yt, {})
              }
            )
          }
        ),
        !c && (l || h) ? /* @__PURE__ */ d(
          D,
          {
            direction: "row",
            "data-testid": "sidebar-header-brand",
            sx: {
              alignItems: "center",
              gap: 1,
              minWidth: 0,
              color: ie,
              // Consumer SVG logos pick up the header foreground.
              "& svg": { color: "inherit", fill: "currentColor" }
            },
            children: [
              h ? /* @__PURE__ */ t(
                Y,
                {
                  variant: "h6",
                  noWrap: !0,
                  sx: {
                    color: ie,
                    fontWeight: 600,
                    fontSize: "18px",
                    lineHeight: 1,
                    textTransform: "uppercase"
                  },
                  children: h
                }
              ) : null,
              l
            ]
          }
        ) : null
      ]
    }
  ) : null, Te = /* @__PURE__ */ d(ke, { children: [
    /* @__PURE__ */ t(
      D,
      {
        spacing: 0.5,
        sx: {
          width: "100%",
          alignItems: c ? "center" : "stretch"
        },
        children: e.map((n) => Ce(n))
      }
    ),
    r.length > 0 ? /* @__PURE__ */ d(C, { sx: { mt: "auto", pt: 2 }, children: [
      /* @__PURE__ */ t(ne, { sx: { mb: 1, borderColor: "divider" } }),
      /* @__PURE__ */ t(
        D,
        {
          spacing: 0.5,
          sx: {
            width: "100%",
            alignItems: c ? "center" : "stretch"
          },
          children: r.map((n) => Ce(n))
        }
      )
    ] }) : null
  ] });
  return /* @__PURE__ */ t(
    C,
    {
      component: "nav",
      "aria-label": "Main sidebar",
      "data-testid": "collapsible-sidebar",
      "data-collapsed": c ? "true" : "false",
      "data-labeled": m ? "true" : "false",
      sx: {
        width: Ie,
        minWidth: Ie,
        height: "100%",
        boxSizing: "border-box",
        bgcolor: te,
        display: "flex",
        flexDirection: "column",
        // Lets the sidebar shrink inside a flex-column host so siblings
        // (e.g. an alert card below it) stay within the viewport.
        flex: "1 1 auto",
        minHeight: 0,
        transition: io,
        ...s ? { overflow: "hidden", p: 0 } : {
          overflowX: "hidden",
          overflowY: "auto",
          px: m ? 0.5 : c ? 1 : 2,
          pt: N ? `${N}px` : 1,
          pb: 2
        }
      },
      children: s ? /* @__PURE__ */ d(ke, { children: [
        Me,
        /* @__PURE__ */ t(
          C,
          {
            sx: {
              flex: "1 1 auto",
              minHeight: 0,
              display: "flex",
              flexDirection: "column",
              overflowY: "auto",
              overflowX: "hidden",
              px: c ? 1 : 2,
              pt: 1,
              pb: 2
            },
            children: Te
          }
        )
      ] }) : Te
    }
  );
}, ho = 180, Bt = 250, nr = ({
  text: e,
  testId: r
}) => {
  const o = w.useRef(null), [a, l] = w.useState(!1), h = w.useCallback(() => {
    const s = o.current;
    s && l(s.scrollWidth > s.clientWidth + 0.5);
  }, []);
  return w.useLayoutEffect(() => {
    h();
  }, [h, e]), w.useEffect(() => {
    const s = o.current;
    if (!s)
      return;
    const i = new ResizeObserver(() => h());
    return i.observe(s), () => i.disconnect();
  }, [h]), /* @__PURE__ */ t(
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
}, po = ({
  link: e,
  activePath: r,
  onLinkClick: o,
  accentColor: a,
  isSecondary: l,
  surfaceBackgroundColor: h,
  railShowTitles: s = !1
}) => {
  const i = Ge(), [g, E] = w.useState(null), [y, O] = w.useState(!1), u = w.useRef(
    null
  ), v = w.useRef(null), x = w.useRef(null), R = w.useRef(!1), z = w.useRef(!1), H = w.useId(), $ = () => {
    u.current && (clearTimeout(u.current), u.current = null);
  }, L = () => {
    $(), u.current = setTimeout(() => {
      O(!1), u.current = null;
    }, ho);
  }, m = () => {
    $(), O(!0);
  };
  w.useEffect(() => {
    if (!y)
      return;
    const c = (M) => {
      M.key === "Escape" && (O(!1), x.current?.focus());
    };
    return document.addEventListener("keydown", c), () => document.removeEventListener("keydown", c);
  }, [y]), w.useEffect(() => {
    if (!y || !z.current)
      return;
    const c = globalThis.requestAnimationFrame(() => {
      v.current?.querySelector(
        '[role="menuitem"]'
      )?.focus(), z.current = !1;
    });
    return () => cancelAnimationFrame(c);
  }, [y]);
  const N = Ke(e, r), b = l ? 48 : 44, f = l ? "text.secondary" : a, W = l ? "#01584F" : a, j = {
    width: "100%",
    maxWidth: "100%",
    minWidth: b,
    height: "auto",
    minHeight: b,
    flexDirection: "column",
    py: 0.5,
    // Horizontal padding so labels (esp. active fill) do not touch the box edges
    px: 1,
    borderRadius: "4px",
    color: N ? "#ffffff" : f,
    backgroundColor: N ? W : "transparent",
    "&:hover": {
      backgroundColor: N ? W : "action.hover",
      borderRadius: "4px",
      color: N ? "#ffffff" : f
    }
  }, ae = s ? /* @__PURE__ */ t(
    J,
    {
      ref: x,
      component: e.path ? "a" : "button",
      href: e.path || void 0,
      "aria-label": e.text,
      onFocus: () => {
        R.current || m();
      },
      onBlur: (c) => {
        const M = c.relatedTarget;
        M && v.current?.contains(M) || L();
      },
      onKeyDown: (c) => {
        c.key === "ArrowDown" && (c.preventDefault(), z.current = !0, m());
      },
      onClick: (c) => {
        c.preventDefault(), c.stopPropagation(), e.path && o?.(e.path);
      },
      "aria-haspopup": "menu",
      "aria-expanded": y,
      "aria-controls": y ? H : void 0,
      "data-testid": `rail-submenu-trigger-${e.text}`,
      sx: j,
      children: /* @__PURE__ */ d(D, { alignItems: "center", spacing: 1, sx: { width: "100%" }, children: [
        /* @__PURE__ */ t(
          C,
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
          nr,
          {
            text: e.text,
            testId: `rail-item-caption-${e.text}`
          }
        )
      ] })
    }
  ) : /* @__PURE__ */ t(
    J,
    {
      ref: x,
      component: e.path ? "a" : "button",
      href: e.path || void 0,
      "aria-label": e.text,
      onFocus: () => {
        R.current || m();
      },
      onBlur: (c) => {
        const M = c.relatedTarget;
        M && v.current?.contains(M) || L();
      },
      onKeyDown: (c) => {
        c.key === "ArrowDown" && (c.preventDefault(), z.current = !0, m());
      },
      onClick: (c) => {
        c.preventDefault(), c.stopPropagation(), e.path && o?.(e.path);
      },
      "aria-haspopup": "menu",
      "aria-expanded": y,
      "aria-controls": y ? H : void 0,
      "data-testid": `rail-submenu-trigger-${e.text}`,
      sx: {
        width: b,
        height: b,
        color: N ? "#ffffff" : f,
        backgroundColor: N ? W : "transparent",
        borderRadius: N ? "4px" : "50%",
        "&:hover": {
          backgroundColor: N ? W : "action.hover",
          borderRadius: "4px"
        }
      },
      children: e.icon
    }
  );
  return /* @__PURE__ */ d(
    C,
    {
      sx: {
        width: "100%",
        display: "flex",
        justifyContent: "center"
      },
      children: [
        /* @__PURE__ */ t(
          C,
          {
            ref: E,
            "data-testid": `rail-submenu-anchor-${e.text}`,
            sx: { display: "inline-flex", maxWidth: "100%" },
            onMouseEnter: () => {
              R.current = !0, m();
            },
            onMouseLeave: () => {
              R.current = !1, L();
            },
            children: s ? ae : /* @__PURE__ */ t(ee, { title: e.text, placement: "right", arrow: !0, children: ae })
          }
        ),
        /* @__PURE__ */ t(
          Gr,
          {
            open: y && !!g,
            anchorEl: g,
            placement: "right-start",
            modifiers: [{ name: "offset", options: { offset: [8, 0] } }],
            sx: { zIndex: (c) => c.zIndex.modal },
            children: /* @__PURE__ */ t(
              Pr,
              {
                ref: v,
                elevation: 0,
                onMouseEnter: () => {
                  $();
                },
                onMouseLeave: L,
                "data-testid": `rail-submenu-panel-${e.text}`,
                sx: {
                  bgcolor: h,
                  backgroundImage: "none",
                  borderRadius: "4px",
                  border: "1px solid",
                  borderColor: "divider",
                  boxShadow: i.shadows[8],
                  maxWidth: Bt,
                  minWidth: 0,
                  py: 0.5,
                  boxSizing: "border-box"
                },
                children: /* @__PURE__ */ t(
                  $r,
                  {
                    id: H,
                    dense: !0,
                    autoFocus: !1,
                    role: "menu",
                    sx: {
                      bgcolor: "transparent",
                      py: 0,
                      maxWidth: Bt
                    },
                    children: e.subitems.map((c) => /* @__PURE__ */ d(
                      dt,
                      {
                        role: "menuitem",
                        title: c.text,
                        selected: Ze(c, r),
                        onClick: (M) => {
                          M.preventDefault(), o?.(c.path), O(!1);
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
                            bgcolor: W,
                            color: "#ffffff",
                            "&:hover": {
                              bgcolor: W
                            }
                          },
                          "&.Mui-focusVisible": {
                            bgcolor: "action.focus"
                          }
                        },
                        children: [
                          c.icon ? /* @__PURE__ */ t(we, { children: c.icon }) : null,
                          /* @__PURE__ */ t(
                            Ee,
                            {
                              primary: c.text,
                              primaryTypographyProps: {
                                noWrap: !0
                              }
                            }
                          )
                        ]
                      },
                      c.path
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
}, uo = ({
  link: e,
  activePath: r,
  onLinkClick: o,
  accentColor: a,
  isSecondary: l,
  railShowTitles: h = !1
}) => {
  const s = !!(e.path && r === e.path), i = l ? 48 : 44, g = l ? "text.secondary" : a, E = l ? "#01584F" : a, y = {
    width: "100%",
    maxWidth: "100%",
    minWidth: i,
    height: "auto",
    minHeight: i,
    flexDirection: "column",
    py: 0.5,
    px: 1,
    borderRadius: "4px",
    color: s ? "#ffffff" : g,
    backgroundColor: s ? E : "transparent",
    "&:hover": {
      backgroundColor: s ? E : "action.hover",
      borderRadius: "4px",
      color: s ? "#ffffff" : g
    }
  }, O = h ? /* @__PURE__ */ t(
    J,
    {
      component: e.path ? "a" : "button",
      href: e.path || void 0,
      "aria-label": e.text,
      onClick: (u) => {
        u.preventDefault(), u.stopPropagation(), e.path && o?.(e.path);
      },
      disabled: !e.path,
      sx: y,
      children: /* @__PURE__ */ d(D, { alignItems: "center", spacing: 1, sx: { width: "100%" }, children: [
        /* @__PURE__ */ t(
          C,
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
          nr,
          {
            text: e.text,
            testId: `rail-item-caption-${e.text}`
          }
        )
      ] })
    }
  ) : /* @__PURE__ */ t(
    J,
    {
      component: e.path ? "a" : "button",
      href: e.path || void 0,
      "aria-label": e.text,
      onClick: (u) => {
        u.preventDefault(), u.stopPropagation(), e.path && o?.(e.path);
      },
      disabled: !e.path,
      sx: {
        width: i,
        height: i,
        color: s ? "#ffffff" : g,
        backgroundColor: s ? E : "transparent",
        borderRadius: s ? "4px" : "50%",
        "&:hover": {
          backgroundColor: s ? E : "action.hover",
          borderRadius: "4px"
        }
      },
      children: e.icon
    }
  );
  return h ? O : /* @__PURE__ */ t(ee, { title: e.text, placement: "right", arrow: !0, children: O });
}, fo = ({
  link: e,
  expanded: r,
  onToggle: o,
  activePath: a,
  onLinkClick: l,
  accentColor: h,
  groupTint: s,
  activeFg: i,
  isSecondary: g
}) => {
  const E = Ke(e, a), y = !!(e.path && a === e.path), O = Ge().palette.mode === "dark", u = g ? "text.secondary" : O ? "text.primary" : h, v = g ? "#01584F" : h;
  return /* @__PURE__ */ d(
    C,
    {
      sx: {
        borderRadius: "6px",
        bgcolor: E ? s : "transparent"
      },
      children: [
        /* @__PURE__ */ d(
          Ne,
          {
            onClick: () => e.path ? l?.(e.path) : o(),
            sx: {
              py: 1.5,
              px: 2,
              color: y ? i : u,
              bgcolor: y ? v : "transparent",
              "&:hover": {
                bgcolor: y ? v : s
              }
            },
            "data-testid": `drawer-expand-trigger-${e.text}`,
            children: [
              /* @__PURE__ */ t(we, { sx: { color: "inherit", minWidth: 40 }, children: e.icon }),
              /* @__PURE__ */ t(Ee, { primary: e.text }),
              /* @__PURE__ */ t(
                J,
                {
                  size: "small",
                  edge: "end",
                  "aria-label": r ? `Collapse ${e.text}` : `Expand ${e.text}`,
                  onClick: (x) => {
                    x.stopPropagation(), o();
                  },
                  sx: { color: "inherit" },
                  "data-testid": `drawer-expand-chevron-${e.text}`,
                  children: r ? /* @__PURE__ */ t(Ur, {}) : /* @__PURE__ */ t(Kr, {})
                }
              )
            ]
          }
        ),
        /* @__PURE__ */ t(qt, { in: r, timeout: "auto", unmountOnExit: !0, children: /* @__PURE__ */ t(C, { component: "nav", "aria-label": e.text, children: e.subitems.map((x) => {
          const R = Ze(x, a);
          return /* @__PURE__ */ d(
            Ne,
            {
              onClick: () => l?.(x.path),
              sx: {
                pl: 4,
                py: 1,
                color: R ? i : u,
                bgcolor: R ? v : "transparent",
                "& .MuiListItemIcon-root": {
                  color: "inherit"
                },
                "&:hover": {
                  bgcolor: R ? v : "action.hover"
                }
              },
              children: [
                x.icon ? /* @__PURE__ */ t(we, { sx: { minWidth: 36 }, children: x.icon }) : null,
                /* @__PURE__ */ t(Ee, { primary: x.text })
              ]
            },
            x.path
          );
        }) }) })
      ]
    }
  );
}, go = ({
  link: e,
  activePath: r,
  onLinkClick: o,
  accentColor: a,
  groupTint: l,
  activeFg: h,
  isSecondary: s
}) => {
  const i = !!(e.path && r === e.path), g = Ge().palette.mode === "dark", E = s ? "text.secondary" : g ? "text.primary" : a, y = s ? "#01584F" : a;
  return /* @__PURE__ */ d(
    Ne,
    {
      disabled: !e.path,
      onClick: () => e.path && o?.(e.path),
      sx: {
        py: 1.5,
        px: 2,
        color: i ? h : E,
        bgcolor: i ? y : "transparent",
        "&:hover": {
          bgcolor: i ? y : l
        }
      },
      children: [
        /* @__PURE__ */ t(we, { sx: { color: "inherit", minWidth: 40 }, children: e.icon }),
        /* @__PURE__ */ t(Ee, { primary: e.text })
      ]
    }
  );
}, qe = () => /* @__PURE__ */ t(
  C,
  {
    sx: {
      width: "100%",
      display: "flex",
      justifyContent: "center"
    },
    children: /* @__PURE__ */ t(ne, { sx: { width: "60%", borderColor: "divider" } })
  }
), ar = ({
  variant: e,
  mainLinks: r,
  secondaryLinks: o = [],
  activePath: a,
  onLinkClick: l,
  accentColor: h = "#01584f",
  groupAccentColor: s,
  surfaceBackgroundColor: i,
  railShowTitles: g = !1
}) => {
  const E = Ge(), y = i ?? E.palette.background.paper, O = Qe(h), u = s ?? ut(h), v = (b) => {
    l && l(b);
  }, [x, R] = w.useState({}), [z, H] = w.useState({}), $ = (b) => {
    R((f) => ({
      ...f,
      [b]: !f[b]
    }));
  }, L = (b) => {
    H((f) => ({
      ...f,
      [b]: !f[b]
    }));
  }, m = (b, f) => b.subitems?.length ? /* @__PURE__ */ t(
    po,
    {
      link: b,
      activePath: a,
      onLinkClick: v,
      accentColor: h,
      isSecondary: f,
      surfaceBackgroundColor: y,
      railShowTitles: g
    }
  ) : /* @__PURE__ */ t(
    uo,
    {
      link: b,
      activePath: a,
      onLinkClick: v,
      accentColor: h,
      isSecondary: f,
      railShowTitles: g
    }
  ), N = (b, f, W) => {
    if (b.subitems?.length) {
      const j = W ? !!z[f] : !!x[f];
      return /* @__PURE__ */ t(
        fo,
        {
          link: b,
          expanded: j,
          onToggle: () => W ? L(f) : $(f),
          activePath: a,
          onLinkClick: v,
          accentColor: h,
          groupTint: u,
          activeFg: O,
          isSecondary: W
        }
      );
    }
    return /* @__PURE__ */ t(
      go,
      {
        link: b,
        activePath: a,
        onLinkClick: v,
        accentColor: h,
        groupTint: u,
        activeFg: O,
        isSecondary: W
      }
    );
  };
  return e === "drawer" ? /* @__PURE__ */ d(
    D,
    {
      sx: {
        flexGrow: 1,
        width: "100%",
        alignItems: "stretch",
        pt: 2,
        gap: 0
      },
      children: [
        /* @__PURE__ */ t(D, { sx: { width: "100%" }, children: r.map((b, f) => /* @__PURE__ */ d(w.Fragment, { children: [
          N(b, f, !1),
          f < r.length - 1 ? /* @__PURE__ */ t(qe, {}) : null
        ] }, f)) }),
        o.length > 0 ? /* @__PURE__ */ d(ke, { children: [
          /* @__PURE__ */ t(
            C,
            {
              sx: {
                width: "100%",
                my: 2,
                display: "flex",
                justifyContent: "center"
              },
              children: /* @__PURE__ */ t(
                ne,
                {
                  sx: { width: "60%", borderColor: "divider" }
                }
              )
            }
          ),
          /* @__PURE__ */ t(C, { sx: { mt: "auto", pb: 2 }, children: /* @__PURE__ */ t(D, { sx: { width: "100%" }, children: o.map((b, f) => /* @__PURE__ */ d(w.Fragment, { children: [
            N(b, f, !0),
            f < o.length - 1 ? /* @__PURE__ */ t(qe, {}) : null
          ] }, f)) }) })
        ] }) : null
      ]
    }
  ) : /* @__PURE__ */ d(
    D,
    {
      sx: {
        flexGrow: 1,
        width: "100%",
        boxSizing: "border-box",
        justifyContent: "flex-start",
        alignItems: "center",
        pt: 2,
        gap: g ? 1.25 : 1
      },
      children: [
        r.map((b, f) => /* @__PURE__ */ d(w.Fragment, { children: [
          m(b, !1),
          f < r.length - 1 ? /* @__PURE__ */ t(qe, {}) : null
        ] }, f)),
        o.length > 0 ? /* @__PURE__ */ d(ke, { children: [
          /* @__PURE__ */ t(
            C,
            {
              sx: {
                width: "100%",
                my: 2,
                display: "flex",
                justifyContent: "center"
              },
              children: /* @__PURE__ */ t(
                ne,
                {
                  sx: { width: "60%", borderColor: "divider" }
                }
              )
            }
          ),
          /* @__PURE__ */ t(C, { sx: { mt: "auto", pb: 2 }, children: /* @__PURE__ */ t(
            D,
            {
              gap: g ? 1.25 : 1,
              alignItems: "center",
              children: o.map((b, f) => /* @__PURE__ */ d(w.Fragment, { children: [
                m(b, !0),
                f < o.length - 1 ? /* @__PURE__ */ t(qe, {}) : null
              ] }, f))
            }
          ) })
        ] }) : null
      ]
    }
  );
}, mo = ({
  open: e,
  onClose: r,
  mainLinks: o,
  secondaryLinks: a = [],
  activePath: l,
  onLinkClick: h,
  userName: s = "User Name",
  userAvatar: i,
  userRole: g,
  onLogout: E,
  theme: y = "light",
  showThemeToggler: O = !1,
  onThemeToggle: u,
  alertProps: v,
  accentColor: x = "#01584f",
  groupAccentColor: R
}) => {
  const z = y === "dark", H = z ? "Switch to light mode" : "Switch to dark mode", $ = (m) => m ? m.charAt(0).toUpperCase() + m.slice(1).toLowerCase() : "User", L = (m) => {
    h?.(m), r();
  };
  return /* @__PURE__ */ t(
    jr,
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
        D,
        {
          sx: {
            maxWidth: "70dvw",
            height: "100%"
          },
          children: [
            /* @__PURE__ */ d(
              D,
              {
                direction: "row",
                sx: { p: 2, gap: 1, alignItems: "center" },
                children: [
                  /* @__PURE__ */ d(
                    D,
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
                          ct,
                          {
                            sizes: "small",
                            alt: s,
                            src: i,
                            sx: { width: 40, height: 40, flexShrink: 0 }
                          }
                        ),
                        /* @__PURE__ */ d(
                          C,
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
                                  children: s
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
                                  children: $(g)
                                }
                              )
                            ]
                          }
                        )
                      ]
                    }
                  ),
                  O && /* @__PURE__ */ t(ee, { title: H, placement: "bottom", children: /* @__PURE__ */ t("span", { children: /* @__PURE__ */ t(
                    J,
                    {
                      size: "small",
                      onClick: u,
                      disabled: !u,
                      "aria-label": H,
                      children: z ? /* @__PURE__ */ t(Xt, { fontSize: "small" }) : /* @__PURE__ */ t(jt, { fontSize: "small" })
                    }
                  ) }) })
                ]
              }
            ),
            /* @__PURE__ */ t(ne, {}),
            /* @__PURE__ */ d(D, { sx: { flexGrow: 1 }, children: [
              /* @__PURE__ */ t(
                ar,
                {
                  variant: "drawer",
                  mainLinks: o,
                  secondaryLinks: a,
                  activePath: l,
                  onLinkClick: L,
                  accentColor: x,
                  groupAccentColor: R
                }
              ),
              /* @__PURE__ */ t(ne, {})
            ] }),
            v?.show && /* @__PURE__ */ t(pt, { ...v }),
            /* @__PURE__ */ t(D, { sx: { p: 2 }, children: /* @__PURE__ */ t(
              Jt,
              {
                variant: "outlined",
                fullWidth: !0,
                startIcon: /* @__PURE__ */ t(Vt, {}),
                onClick: E,
                children: "Logout"
              }
            ) })
          ]
        }
      )
    }
  );
}, xo = 100, Ht = 80, bo = 60, Ut = 264, Kt = 72, $t = "lumora:sidebar-collapsed", Pt = "width 200ms ease, left 200ms ease", un = ({
  children: e,
  sidebarLinks: r = [],
  secondarySidebarLinks: o = [],
  appName: a = "Dashboard",
  pageName: l = "Home",
  showHeader: h = !0,
  showSidebar: s = !0,
  showSidebarRailTitles: i = !1,
  sidebarVariant: g = "rail",
  logo: E,
  sidebarBackgroundColor: y,
  sidebarHeaderBackgroundColor: O,
  groupAccentColor: u,
  activeSidebarForegroundColor: v,
  enableRefreshToken: x = !1,
  activePath: R,
  onLinkClick: z,
  userName: H,
  userEmail: $,
  userAvatar: L,
  onLogout: m,
  onProfileClick: N,
  onAccountClick: b,
  onSettingsClick: f,
  showSettings: W = !0,
  showNotifications: j = !0,
  notificationCount: ae = 0,
  NotificationSidebarContent: c,
  showSearchbar: M = !0,
  searchValue: Le,
  onSearchChange: _,
  onSearchSubmit: B,
  showProfile: oe = !0,
  userRole: G,
  onVerify: X,
  alertProps: te,
  style: V,
  headerStyles: ye,
  sidebarStyles: ie,
  contentStyles: We,
  accentColor: de,
  sidebarAccentColor: Fe,
  sidebarForegroundColor: ve,
  contentBackgroundColor: pe,
  navbarBackground: Re,
  navbarAccentColor: ze,
  theme: re = "light",
  showThemeToggler: se = !1,
  onThemeToggle: ue,
  GlobalChatSidebar: he,
  useChatSidebar: Ce,
  showAssistant: Ie = !1,
  onAssistantClick: Me,
  assistantActive: Te = !1,
  assistantBusy: n = !1,
  rightExtraContent: S,
  customNavbar: p,
  customNavbarProps: k,
  redirectToLogin: q,
  apiBaseUrl: fe
}) => {
  const Z = Er(), U = yr(Z.breakpoints.down("md")), ft = At(
    () => Gt(Xr(re)),
    [re]
  ), Be = re === "dark", je = de ?? "#01584f", et = Fe ?? je, Xe = pe ?? (Be ? "hsl(220, 35%, 9%)" : "#f2f9fc"), ir = Re ?? (Be ? "hsl(220, 30%, 7%)" : "#ffffff"), sr = ze ?? (Be ? "#ffffff" : "#000000"), ge = g === "collapsible", me = g === "rail-labeled", gt = ge || me, mt = me && s && !U, xt = ge && s && !U, lr = mt || xt, tt = y ?? (Be ? "hsl(220, 30%, 7%)" : "#ffffff"), bt = O ?? tt, cr = Qe(bt), St = (xe) => /* @__PURE__ */ t(
    be,
    {
      role: "img",
      "aria-label": `${a} logo`,
      sx: {
        width: 28,
        height: 28,
        flexShrink: 0,
        bgcolor: xe,
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
  ), dr = E ?? St(Be ? "#ffffff" : je), hr = E ?? St(cr), [Ve, pr] = _e(
    () => rr($t) ?? !1
  ), ur = (xe) => {
    pr(xe), or($t, xe);
  };
  let le = 0;
  s && !U && (me ? le = Ht : ge ? le = Ve ? Kt : Ut : le = xo);
  const [wt, Et] = _e(!1), [fr, rt] = _e(!1), [gr, mr] = _e(!0), [xr, br] = _e(!1), [So, Ye] = _e(null), yt = Ce?.()?.isOpen ?? !1, ot = Dt(X), vt = Dt(!1), Rt = At(
    () => qr(fe),
    [fe]
  );
  it(() => {
    ot.current = X;
  }, [X]);
  const Sr = () => {
    Et(!wt);
  }, wr = () => {
    Et(!1);
  }, Ct = (xe) => {
    const Oe = m(xe);
    Oe instanceof Promise ? Oe.then(() => {
      Ye(null);
    }).catch((It) => {
      console.error("Error in logout handler:", It), Ye(null);
    }) : Ye(null);
  };
  return it(() => {
    (() => {
      try {
        const { isAuthenticated: Oe, error: It } = Yr();
        if (!Oe) {
          console.log("No session found, redirecting to login"), Pe(), q();
          return;
        }
        if (!vt.current) {
          const { user: He, error: nt } = Jr();
          if (He && !nt) {
            const Tt = {
              name: He.name || "",
              email: He.email || "",
              profilePicture: He.profilePicture || "",
              role: He.role || ""
            };
            Ye(Tt), vt.current = !0, ot.current && ot.current(Tt);
          } else nt && console.error("Error getting user data:", nt);
        }
        br(!0);
      } catch (Oe) {
        console.error("Error checking session:", Oe), Pe(), q();
      } finally {
        mr(!1);
      }
    })();
  }, [q]), it(() => {
    x && Zr(Rt, q);
  }, [x, Rt]), gr ? /* @__PURE__ */ t(_t, { theme: ft, children: /* @__PURE__ */ d(
    be,
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
          vr,
          {
            size: 60,
            thickness: 4,
            sx: { color: je }
          }
        ),
        /* @__PURE__ */ t(be, { sx: { mt: 2, color: "text.secondary" }, children: "Checking session..." })
      ]
    }
  ) }) : xr ? /* @__PURE__ */ t(_t, { theme: ft, children: /* @__PURE__ */ d(
    be,
    {
      sx: {
        display: "flex",
        minHeight: "100vh",
        ...V
      },
      children: [
        /* @__PURE__ */ t(Rr, {}),
        h && /* @__PURE__ */ t(
          ro,
          {
            appName: a,
            pageName: l,
            isMobile: U,
            onMenuClick: U && s ? Sr : void 0,
            showMenuButton: s && U,
            showBrand: !(xt && !Ve),
            leftOffsetPx: lr ? le : 0,
            logo: dr,
            headerStyles: ye,
            userName: H,
            userEmail: $,
            userAvatar: L,
            onProfileClick: N,
            onAccountClick: b,
            onSettingsClick: f,
            showSettings: W,
            onLogout: Ct,
            showNotifications: j,
            notificationCount: ae,
            onNotificationBellClick: j && c ? () => rt(!0) : void 0,
            showSearchbar: M && !p,
            searchValue: Le,
            onSearchChange: _,
            onSearchSubmit: B,
            showProfile: oe,
            userRole: G,
            accentColor: je,
            contentBackgroundColor: Xe,
            navbarBackground: ir,
            navbarAccentColor: sr,
            theme: re,
            showThemeToggler: se,
            onThemeToggle: ue,
            rightExtraContent: S,
            customNavbar: p,
            customNavbarProps: k,
            showAssistant: Ie,
            onAssistantClick: Me,
            assistantActive: Te,
            assistantBusy: n
          }
        ),
        s && !U && gt && /* @__PURE__ */ d(
          be,
          {
            component: "aside",
            sx: {
              width: le,
              minWidth: le,
              flexShrink: 0,
              zIndex: 2,
              position: "sticky",
              top: 0,
              mt: 0,
              alignSelf: "flex-start",
              height: "100vh",
              // Flex column so the sidebar shrinks to fit siblings
              // (the alert card) instead of pushing them off-screen.
              display: "flex",
              flexDirection: "column",
              // Keep the strip behind any bottom sibling on-brand.
              bgcolor: ge ? tt : void 0,
              transition: Pt,
              ...ie
            },
            children: [
              /* @__PURE__ */ t(
                co,
                {
                  mainLinks: r,
                  secondaryLinks: o,
                  activePath: R,
                  onLinkClick: z,
                  showHeaderBar: ge,
                  logo: hr,
                  title: a,
                  headerBackgroundColor: ge ? bt : void 0,
                  activeAccentColor: et,
                  groupAccentColor: u,
                  activeForegroundColor: v,
                  foregroundColor: ve,
                  surfaceBackgroundColor: tt,
                  collapsed: me ? !0 : Ve,
                  onCollapsedChange: me ? void 0 : ur,
                  showLabels: me,
                  topInsetPx: mt && h ? bo : 0,
                  expandedWidth: Ut,
                  collapsedWidth: me ? Ht : Kt
                }
              ),
              ge && te?.show && !Ve && /* @__PURE__ */ t(pt, { ...te })
            ]
          }
        ),
        s && !U && !gt && /* @__PURE__ */ t(
          Ot,
          {
            variant: "permanent",
            sx: {
              width: le,
              flexShrink: 0,
              zIndex: 2,
              // Higher z-index than app bar
              "& .MuiDrawer-paper": {
                width: le,
                boxSizing: "border-box",
                bgcolor: Xe,
                borderRight: "none",
                top: h ? "60px" : 0,
                // Position below header
                height: h ? "calc(100vh - 60px)" : "100vh"
              },
              ...ie
            },
            children: /* @__PURE__ */ d(
              be,
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
                    ar,
                    {
                      variant: "rail",
                      mainLinks: r,
                      secondaryLinks: o,
                      activePath: R,
                      onLinkClick: z,
                      accentColor: et,
                      surfaceBackgroundColor: Xe,
                      railShowTitles: i
                    }
                  ),
                  te?.show && /* @__PURE__ */ t(pt, { ...te })
                ]
              }
            )
          }
        ),
        s && U && /* @__PURE__ */ t(
          mo,
          {
            open: wt,
            onClose: wr,
            mainLinks: r,
            secondaryLinks: o,
            activePath: R,
            onLinkClick: z,
            userName: H,
            userEmail: $,
            userAvatar: L,
            userRole: G,
            onLogout: Ct,
            onProfileClick: N,
            theme: re,
            showThemeToggler: se,
            onThemeToggle: ue,
            alertProps: te,
            accentColor: et,
            groupAccentColor: u
          }
        ),
        /* @__PURE__ */ t(
          be,
          {
            component: "main",
            sx: {
              flexGrow: 1,
              p: 3,
              width: U ? "100%" : s ? `calc(100% - ${le}px)` : "100%",
              transition: Pt,
              mt: h ? "60px" : 0,
              // Account for AppNavbar height (60px)
              ml: 0,
              // Offset for sidebar on desktop
              backgroundColor: Xe,
              mb: 0,
              mr: 0,
              ...We
            },
            children: /* @__PURE__ */ d(at, { container: !0, spacing: 3, children: [
              /* @__PURE__ */ t(
                at,
                {
                  size: {
                    xs: 12,
                    md: yt && he ? 8.5 : 12
                  },
                  sx: {
                    display: "flex",
                    flexDirection: "column"
                  },
                  children: e
                }
              ),
              yt && he && /* @__PURE__ */ t(
                at,
                {
                  size: { xs: 12, md: 3.5 },
                  sx: {
                    display: "flex",
                    flexDirection: "column",
                    position: { xs: "static", md: "sticky" },
                    top: {
                      xs: "auto",
                      md: h ? "60px" : "0px"
                    },
                    // Stick below navbar
                    alignSelf: "flex-start",
                    height: {
                      xs: "auto",
                      md: h ? "calc(100vh - 60px - 24px - 8px)" : "calc(100vh - 24px - 8px)"
                    },
                    // Viewport - navbar - top padding - top margin
                    maxHeight: {
                      xs: "none",
                      md: h ? "calc(100vh - 60px - 24px - 8px)" : "calc(100vh - 24px - 8px)"
                    }
                    // Viewport - navbar - top padding - top margin
                  },
                  children: /* @__PURE__ */ t(he, {})
                }
              )
            ] })
          }
        ),
        j && c && /* @__PURE__ */ t(
          Ot,
          {
            anchor: "right",
            open: fr,
            onClose: () => rt(!1),
            slotProps: {
              paper: { sx: { width: 380, maxWidth: "100vw" } }
            },
            children: /* @__PURE__ */ t(
              c,
              {
                onClose: () => rt(!1)
              }
            )
          }
        )
      ]
    }
  ) }) : null;
};
export {
  A as AUTH_ERROR_CODES,
  T as AuthError,
  co as CollapsibleSidebar,
  un as LumoraWrapper,
  Pe as clearAuthTokens,
  un as default,
  pn as getAuthErrorMessage,
  $e as getAuthTokens,
  Jr as getCurrentUser,
  Yr as isAuthenticated,
  ht as logAuthError,
  Qt as storeAuthTokens
};
