import { jsx as t, jsxs as c, Fragment as Me } from "react/jsx-runtime";
import { useTheme as Yt, useMediaQuery as qt, Box as le, CircularProgress as Qt, CssBaseline as Vt, Drawer as dt, Grid as $e } from "@mui/material";
import { createTheme as yt, alpha as j, styled as Zt, useTheme as Ze, ThemeProvider as ht } from "@mui/material/styles";
import * as b from "react";
import { useMemo as pt, useState as be, useRef as ut, useEffect as Ge } from "react";
import ft from "axios";
import gt from "@mui/icons-material/AccountCircleRounded";
import er from "@mui/icons-material/DarkMode";
import tr from "@mui/icons-material/LightMode";
import vt from "@mui/icons-material/LogoutRounded";
import rr from "@mui/icons-material/MenuRounded";
import or from "@mui/icons-material/NotificationsOutlined";
import nr from "@mui/icons-material/SearchRounded";
import ar from "@mui/material/AppBar";
import Ye from "@mui/material/Avatar";
import Rt from "@mui/material/Badge";
import W from "@mui/material/Box";
import ee from "@mui/material/Divider";
import J from "@mui/material/IconButton";
import ir from "@mui/material/InputAdornment";
import sr from "@mui/material/Menu";
import qe from "@mui/material/MenuItem";
import N from "@mui/material/Stack";
import lr from "@mui/material/TextField";
import cr from "@mui/material/Toolbar";
import te from "@mui/material/Tooltip";
import P from "@mui/material/Typography";
import dr from "@mui/material/useMediaQuery";
import hr from "@mui/material/Card";
import pr from "@mui/material/CardContent";
import Ct from "@mui/material/Button";
import ur from "@mui/icons-material/AutoAwesomeRounded";
import fr from "@mui/icons-material/KeyboardArrowDownRounded";
import gr from "@mui/icons-material/KeyboardArrowUpRounded";
import mr from "@mui/icons-material/KeyboardDoubleArrowLeftRounded";
import xr from "@mui/icons-material/KeyboardDoubleArrowRightRounded";
import Tt from "@mui/material/Collapse";
import de from "@mui/material/ListItemButton";
import he from "@mui/material/ListItemIcon";
import ae from "@mui/material/ListItemText";
import br from "@mui/icons-material/ExpandLess";
import wr from "@mui/icons-material/ExpandMore";
import Sr from "@mui/material/MenuList";
import Er from "@mui/material/Paper";
import yr from "@mui/material/Popper";
import vr from "@mui/icons-material/NotificationsRounded";
import Rr from "@mui/material/Drawer";
const C = yt(), mt = [...C.shadows], B = {
  50: "hsl(210, 100%, 95%)",
  100: "hsl(210, 100%, 92%)",
  200: "hsl(210, 100%, 80%)",
  300: "hsl(210, 100%, 65%)",
  400: "hsl(210, 98%, 48%)",
  500: "hsl(210, 98%, 42%)",
  600: "hsl(210, 98%, 55%)",
  700: "hsl(210, 100%, 35%)",
  900: "hsl(210, 100%, 21%)"
}, L = {
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
}, we = {
  300: "hsl(120, 61%, 77%)",
  400: "hsl(120, 44%, 53%)",
  500: "hsl(120, 59%, 30%)",
  700: "hsl(120, 75%, 16%)",
  800: "hsl(120, 84%, 10%)"
}, ce = {
  300: "hsl(45, 90%, 65%)",
  400: "hsl(45, 90%, 40%)",
  500: "hsl(45, 90%, 35%)",
  700: "hsl(45, 94%, 20%)",
  800: "hsl(45, 95%, 16%)"
}, Se = {
  300: "hsl(0, 90%, 65%)",
  400: "hsl(0, 90%, 40%)",
  500: "hsl(0, 90%, 30%)",
  700: "hsl(0, 94%, 18%)",
  800: "hsl(0, 95%, 12%)"
}, Cr = (e) => (mt[1] = e === "dark" ? "hsla(220, 30%, 5%, 0.7) 0px 4px 16px 0px, hsla(220, 25%, 10%, 0.8) 0px 8px 16px -5px" : "hsla(220, 30%, 5%, 0.07) 0px 4px 16px 0px, hsla(220, 25%, 10%, 0.07) 0px 8px 16px -5px", {
  palette: {
    mode: e,
    primary: {
      light: B[200],
      main: B[400],
      dark: B[700],
      contrastText: B[50],
      ...e === "dark" && {
        contrastText: B[50],
        light: B[300],
        main: B[400],
        dark: B[700]
      }
    },
    info: {
      light: B[100],
      main: B[300],
      dark: B[600],
      contrastText: L[50],
      ...e === "dark" && {
        contrastText: B[300],
        light: B[500],
        main: B[700],
        dark: B[900]
      }
    },
    warning: {
      light: ce[300],
      main: ce[400],
      dark: ce[800],
      ...e === "dark" && {
        light: ce[400],
        main: ce[500],
        dark: ce[700]
      }
    },
    error: {
      light: Se[300],
      main: Se[400],
      dark: Se[800],
      ...e === "dark" && {
        light: Se[400],
        main: Se[500],
        dark: Se[700]
      }
    },
    success: {
      light: we[300],
      main: we[400],
      dark: we[800],
      ...e === "dark" && {
        light: we[400],
        main: we[500],
        dark: we[700]
      }
    },
    grey: {
      ...L
    },
    divider: e === "dark" ? j(L[700], 0.6) : j(L[300], 0.4),
    background: {
      default: "hsl(0, 0%, 99%)",
      paper: "hsl(220, 35%, 97%)",
      ...e === "dark" && {
        default: L[900],
        paper: "hsl(220, 30%, 7%)"
      }
    },
    text: {
      primary: L[800],
      secondary: L[600],
      warning: ce[400],
      ...e === "dark" && {
        primary: "hsl(0, 0%, 100%)",
        secondary: L[400]
      }
    },
    action: {
      hover: j(L[200], 0.2),
      selected: `${j(L[200], 0.3)}`,
      ...e === "dark" && {
        hover: j(L[600], 0.2),
        selected: j(L[600], 0.3)
      }
    }
  },
  typography: {
    fontFamily: "Inter, sans-serif",
    h1: {
      fontSize: C.typography.pxToRem(48),
      fontWeight: 600,
      lineHeight: 1.2,
      letterSpacing: -0.5
    },
    h2: {
      fontSize: C.typography.pxToRem(36),
      fontWeight: 600,
      lineHeight: 1.2
    },
    h3: {
      fontSize: C.typography.pxToRem(30),
      lineHeight: 1.2
    },
    h4: {
      fontSize: C.typography.pxToRem(24),
      fontWeight: 600,
      lineHeight: 1.5
    },
    h5: {
      fontSize: C.typography.pxToRem(20),
      fontWeight: 600
    },
    h6: {
      fontSize: C.typography.pxToRem(18),
      fontWeight: 600
    },
    subtitle1: {
      fontSize: C.typography.pxToRem(18)
    },
    subtitle2: {
      fontSize: C.typography.pxToRem(14),
      fontWeight: 500
    },
    body1: {
      fontSize: C.typography.pxToRem(14)
    },
    body2: {
      fontSize: C.typography.pxToRem(14),
      fontWeight: 400
    },
    caption: {
      fontSize: C.typography.pxToRem(12),
      fontWeight: 400
    }
  },
  shape: {
    borderRadius: 8
  },
  shadows: mt
});
j(L[300], 0.4), j(L[200], 0.2), `${j(L[200], 0.3)}`, j(L[700], 0.6), j(L[600], 0.2), j(L[600], 0.3);
C.typography.pxToRem(48), C.typography.pxToRem(36), C.typography.pxToRem(30), C.typography.pxToRem(24), C.typography.pxToRem(20), C.typography.pxToRem(18), C.typography.pxToRem(18), C.typography.pxToRem(14), C.typography.pxToRem(14), C.typography.pxToRem(14), C.typography.pxToRem(12);
[
  ...C.shadows.slice(2)
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
}, F = {
  ACCESS_TOKEN: "lumoraAccessToken",
  REFRESH_TOKEN: "lumoraRefreshToken",
  USER: "lumoraUser"
}, Z = {
  ACCESS_TOKEN: "accessToken",
  REFRESH_TOKEN: "refreshToken",
  USER: "user"
}, Tr = () => {
  if (!(typeof window > "u" || !window.localStorage))
    try {
      const e = localStorage.getItem(Z.ACCESS_TOKEN), r = localStorage.getItem(Z.REFRESH_TOKEN), o = localStorage.getItem(Z.USER);
      e && !localStorage.getItem(F.ACCESS_TOKEN) && localStorage.setItem(F.ACCESS_TOKEN, e), r && !localStorage.getItem(F.REFRESH_TOKEN) && localStorage.setItem(F.REFRESH_TOKEN, r), o && !localStorage.getItem(F.USER) && localStorage.setItem(F.USER, o), (e || r || o) && (localStorage.removeItem(Z.ACCESS_TOKEN), localStorage.removeItem(Z.REFRESH_TOKEN), localStorage.removeItem(Z.USER));
    } catch (e) {
      console.warn("Failed to migrate legacy localStorage keys:", e);
    }
}, Pe = (e) => {
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
}, je = (e, r) => {
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
}, It = (e) => {
  try {
    return typeof window > "u" ? (console.warn("localStorage removal attempted on server side"), !1) : window.localStorage ? (window.localStorage.removeItem(e), !0) : (console.warn("localStorage is not available"), !1);
  } catch (r) {
    return r.name !== "SecurityError" && console.warn(`Could not remove localStorage key "${e}"`), !1;
  }
}, Ie = () => {
  try {
    Tr();
    const e = Pe(F.ACCESS_TOKEN), r = Pe(F.REFRESH_TOKEN), o = Pe(F.USER);
    let a = null;
    if (o)
      try {
        a = JSON.parse(o);
      } catch {
        o && o !== "null" && o !== "undefined" && console.warn("Invalid user data in localStorage, clearing:", o.substring(0, 50)), It(F.USER);
      }
    return {
      accessToken: e,
      refreshToken: r,
      user: a
    };
  } catch (e) {
    throw e instanceof T ? e : new T("Failed to retrieve authentication tokens", A.UNKNOWN_ERROR, e);
  }
}, Ir = () => {
  try {
    const { accessToken: e, refreshToken: r } = Ie();
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
}, Ot = (e, r, o = null) => {
  try {
    if (!e && !r)
      throw new T("At least one token must be provided", A.TOKEN_INVALID);
    return e && je(F.ACCESS_TOKEN, e), r && je(F.REFRESH_TOKEN, r), o && je(F.USER, JSON.stringify(o)), {
      success: !0,
      error: null
    };
  } catch (a) {
    return console.error("Failed to store authentication tokens:", a), {
      success: !1,
      error: a instanceof T ? a : new T("Failed to store tokens", A.UNKNOWN_ERROR, a)
    };
  }
}, Oe = () => {
  try {
    return [
      F.ACCESS_TOKEN,
      F.REFRESH_TOKEN,
      F.USER,
      // Also clear legacy keys for complete cleanup
      Z.ACCESS_TOKEN,
      Z.REFRESH_TOKEN,
      Z.USER
    ].map((a) => It(a)).every((a) => a) || console.warn("Some tokens could not be removed from localStorage"), {
      success: !0,
      error: null
    };
  } catch (e) {
    return console.error("Failed to clear authentication tokens:", e), {
      success: !1,
      error: e instanceof T ? e : new T("Failed to clear tokens", A.LOGOUT_FAILED, e)
    };
  }
}, Or = () => {
  try {
    const { user: e } = Ie();
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
}, Go = (e) => {
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
}, Qe = (e, r = "Unknown") => {
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
}, Dr = (e) => {
  if (!e)
    throw new Error("API base URL is required to create axios client");
  const r = ft.create({
    baseURL: e,
    headers: {
      "Content-Type": "application/json"
    }
  });
  let o = !1, a = null, l = [];
  const d = (i, s) => {
    l.forEach(({ resolve: I, reject: v }) => {
      i ? v(i) : s && I(s);
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
      const s = i.config, I = i.response?.status, v = s?.url || "", m = v.includes("/auth/refresh");
      if (I !== 401 || s._retry || m)
        return Promise.reject(i);
      s._retry = !0;
      const { refreshToken: _ } = Ie();
      if (!_) {
        const g = new Error(
          "No refresh token available for token refresh"
        );
        return Qe(g, "AxiosClient - Token Refresh"), Oe(), typeof window < "u" && (window.location.href = "/login"), Promise.reject(i);
      }
      if (o && a)
        return new Promise((g, O) => {
          l.push({ resolve: g, reject: O });
        }).then((g) => {
          const {
            accessToken: O,
            refreshToken: S
          } = g;
          if (s.headers && (s.headers.Authorization = `Bearer ${O}`), v.includes("/auth/logout"))
            try {
              if (typeof s.data == "string") {
                const w = JSON.parse(
                  s.data || "{}"
                );
                w.refresh_token = S, s.data = JSON.stringify(w);
              } else s.data && typeof s.data == "object" ? s.data.refresh_token = S : s.data = JSON.stringify({
                refresh_token: S
              });
            } catch {
              s.data = JSON.stringify({
                refresh_token: S
              });
            }
          return r(s);
        }).catch((g) => Promise.reject(g));
      o = !0, a = ft.post(
        `${e}/auth/refresh`,
        {
          refresh_token: _
        }
      );
      try {
        const g = await a, { accessToken: O, refreshToken: S } = g.data;
        if (Ot(O, S, null), d(null, {
          accessToken: O,
          refreshToken: S
        }), s.headers && (s.headers.Authorization = `Bearer ${O}`), v.includes("/auth/logout"))
          try {
            if (typeof s.data == "string") {
              const w = JSON.parse(
                s.data || "{}"
              );
              w.refresh_token = S, s.data = JSON.stringify(w);
            } else s.data && typeof s.data == "object" ? s.data.refresh_token = S : s.data = JSON.stringify({
              refresh_token: S
            });
          } catch {
            s.data = JSON.stringify({
              refresh_token: S
            });
          }
        return r(s);
      } catch (g) {
        return Qe(
          g,
          "AxiosClient - Token Refresh Failed"
        ), d(g), Oe(), typeof window < "u" && (window.location.href = "/login"), Promise.reject(g);
      } finally {
        o = !1, a = null;
      }
    }
  ), r;
}, _r = async (e, r) => {
  const { accessToken: o, refreshToken: a } = Ie();
  if (o)
    return !0;
  if (a)
    try {
      const l = await e.post("/auth/refresh", {
        refresh_token: a
      });
      if (l.data.success && l.data.accessToken)
        return Ot(l.data.accessToken, l.data.refreshToken || null, null), !0;
    } catch (l) {
      Qe(l, "TokenValidator - Refresh Failed");
    }
  return Oe(), r ? r() : window.location.href = "/login", !1;
}, Ar = Zt(cr)({
  width: "100%",
  padding: "8px 16px",
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
  gap: "16px",
  flexShrink: 0
}), Nr = ({
  appName: e = "Dashboard",
  pageName: r = "Home",
  onMenuClick: o,
  showMenuButton: a = !0,
  showBrand: l = !0,
  headerStyles: d,
  userName: i = "User Name",
  userEmail: s,
  userAvatar: I,
  onProfileClick: v,
  onAccountClick: m,
  onSettingsClick: _,
  showSettings: g = !0,
  onLogout: O,
  showNotifications: S = !1,
  notificationCount: w = 0,
  onNotificationBellClick: K,
  theme: U = "light",
  showThemeToggler: H = !1,
  onThemeToggle: f,
  showSearchbar: u = !0,
  searchValue: D,
  onSearchChange: R,
  onSearchSubmit: X,
  showProfile: $ = !0,
  userRole: y,
  accentColor: z = "#01584f",
  contentBackgroundColor: p = "#f2f9fc",
  navbarBackground: M = "#ff0000",
  navbarAccentColor: E = "#000000",
  rightExtraContent: pe = [],
  customNavbar: Q,
  customNavbarProps: ue
}) => {
  const ie = dr((h) => h.breakpoints.up("md")), [re, Y] = b.useState(null), Ee = !!re, oe = U === "dark", se = oe ? "Switch to light mode" : "Switch to dark mode", ye = (h) => {
    R?.(h.target.value);
  }, fe = (h) => {
    h.key === "Enter" && X && D && X(D);
  }, ge = (h) => h ? h.charAt(0).toUpperCase() + h.slice(1).toLowerCase() : "User", n = (h) => {
    Y(h.currentTarget);
  }, x = () => {
    Y(null);
  }, k = (h) => {
    h?.(), x();
  };
  return /* @__PURE__ */ t(
    ar,
    {
      position: "fixed",
      sx: {
        boxShadow: 0,
        background: M,
        top: "var(--template-frame-height, 0px)",
        left: 0,
        width: "100%",
        zIndex: 1,
        height: "60px",
        ...d
      },
      children: /* @__PURE__ */ c(Ar, { variant: "dense", sx: { height: "100%" }, children: [
        /* @__PURE__ */ c(
          N,
          {
            direction: "row",
            sx: {
              alignItems: "center",
              gap: 2,
              flexShrink: 0,
              flexGrow: 1
            },
            children: [
              a && !ie && /* @__PURE__ */ t(
                J,
                {
                  "aria-label": "menu",
                  onClick: o,
                  sx: {
                    color: E,
                    "&:hover": {
                      backgroundColor: "action.hover"
                    }
                  },
                  children: /* @__PURE__ */ t(rr, {})
                }
              ),
              l && /* @__PURE__ */ c(
                N,
                {
                  direction: "row",
                  sx: {
                    alignItems: "center",
                    gap: 1,
                    flexShrink: 0
                  },
                  children: [
                    /* @__PURE__ */ t(
                      P,
                      {
                        variant: "h6",
                        sx: {
                          color: E,
                          fontWeight: 600,
                          fontSize: "20px",
                          lineHeight: 1,
                          textTransform: "uppercase"
                        },
                        children: e
                      }
                    ),
                    /* @__PURE__ */ t(
                      "img",
                      {
                        src: "/lumora-logo.svg",
                        alt: "NEXA Logo",
                        width: 24,
                        height: 24,
                        style: { flexShrink: 0 }
                      }
                    )
                  ]
                }
              ),
              Q ? /* @__PURE__ */ t(Q, { ...ue || {} }) : u && ie && /* @__PURE__ */ t(
                lr,
                {
                  placeholder: "Search for deals or documents...",
                  value: D || "",
                  onChange: ye,
                  onKeyDown: fe,
                  size: "small",
                  sx: {
                    width: "400px",
                    "& .MuiOutlinedInput-root": {
                      backgroundColor: p,
                      borderRadius: "8px",
                      "& fieldset": {
                        borderColor: "transparent"
                      },
                      "&:hover fieldset": {
                        borderColor: "transparent"
                      },
                      "&.Mui-focused fieldset": {
                        borderColor: z
                      }
                    }
                  },
                  InputProps: {
                    startAdornment: /* @__PURE__ */ t(ir, { position: "start", children: /* @__PURE__ */ t(
                      nr,
                      {
                        sx: {
                          color: E
                        }
                      }
                    ) })
                  }
                }
              )
            ]
          }
        ),
        /* @__PURE__ */ c(
          N,
          {
            direction: "row",
            sx: {
              alignItems: "center",
              gap: 1.5,
              flexShrink: 0
            },
            children: [
              H && /* @__PURE__ */ t(te, { title: se, placement: "bottom", children: /* @__PURE__ */ t("span", { children: /* @__PURE__ */ t(
                J,
                {
                  size: "small",
                  onClick: f,
                  disabled: !f,
                  "aria-label": se,
                  sx: {
                    color: E,
                    "&:hover": {
                      backgroundColor: "action.hover"
                    }
                  },
                  children: oe ? /* @__PURE__ */ t(tr, { fontSize: "small" }) : /* @__PURE__ */ t(er, { fontSize: "small" })
                }
              ) }) }),
              S && /* @__PURE__ */ t(
                Rt,
                {
                  color: "error",
                  badgeContent: w,
                  invisible: w === 0,
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
                      onClick: K,
                      "aria-label": w ? `Notifications, ${w} unread` : "Notifications",
                      sx: { color: E },
                      children: /* @__PURE__ */ t(or, {})
                    }
                  )
                }
              ),
              S && $ && /* @__PURE__ */ t(
                ee,
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
              $ && /* @__PURE__ */ c(Me, { children: [
                /* @__PURE__ */ c(
                  N,
                  {
                    direction: "row",
                    onClick: n,
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
                      I ? /* @__PURE__ */ t(
                        Ye,
                        {
                          src: I,
                          sx: { width: 32, height: 32 }
                        }
                      ) : /* @__PURE__ */ t(
                        gt,
                        {
                          sx: {
                            width: 32,
                            height: 32,
                            color: E
                          }
                        }
                      ),
                      /* @__PURE__ */ c(
                        W,
                        {
                          sx: {
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "flex-start",
                            minWidth: 0
                          },
                          children: [
                            /* @__PURE__ */ t(
                              P,
                              {
                                variant: "body2",
                                sx: {
                                  color: E,
                                  fontWeight: 500,
                                  lineHeight: 1.2,
                                  overflow: "hidden",
                                  textOverflow: "ellipsis",
                                  whiteSpace: "nowrap",
                                  maxWidth: "150px"
                                },
                                children: i
                              }
                            ),
                            /* @__PURE__ */ t(
                              P,
                              {
                                variant: "caption",
                                sx: {
                                  color: E,
                                  lineHeight: 1.2,
                                  overflow: "hidden",
                                  textOverflow: "ellipsis",
                                  whiteSpace: "nowrap",
                                  maxWidth: "150px"
                                },
                                children: ge(y)
                              }
                            )
                          ]
                        }
                      )
                    ]
                  }
                ),
                /* @__PURE__ */ c(
                  sr,
                  {
                    anchorEl: re,
                    open: Ee,
                    onClose: x,
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
                      g && [
                        /* @__PURE__ */ t(
                          qe,
                          {
                            onClick: () => k(_),
                            children: "Settings"
                          },
                          "settings"
                        ),
                        /* @__PURE__ */ t(ee, {}, "settings-divider")
                      ],
                      /* @__PURE__ */ c(
                        qe,
                        {
                          onClick: () => k(O),
                          sx: {
                            color: "error.main",
                            "&:hover": {
                              color: "error.dark"
                            }
                          },
                          children: [
                            /* @__PURE__ */ t(P, { sx: { flexGrow: 1 }, children: "Logout" }),
                            /* @__PURE__ */ t(vt, { fontSize: "small" })
                          ]
                        }
                      )
                    ]
                  }
                )
              ] }),
              pe.length !== 0 && pe.map((h) => h.type === "divider" ? /* @__PURE__ */ t(
                ee,
                {
                  orientation: "vertical",
                  flexItem: !0,
                  sx: {
                    borderColor: "rgba(0, 0, 0, 0.12)",
                    height: "24px",
                    alignSelf: "center"
                  }
                },
                h.key
              ) : h.type === "profile" ? /* @__PURE__ */ t(
                te,
                {
                  title: h.tooltip || "",
                  disableHoverListener: !h.tooltip,
                  arrow: !0,
                  children: /* @__PURE__ */ c(
                    N,
                    {
                      direction: "row",
                      onClick: h.disabled ? void 0 : h.onClick,
                      sx: {
                        alignItems: "center",
                        gap: 1,
                        cursor: h.disabled ? "not-allowed" : "pointer",
                        borderRadius: "8px",
                        padding: "4px 8px",
                        opacity: h.disabled ? 0.5 : 1,
                        transition: "opacity 0.2s",
                        ...!h.disabled && {
                          "&:hover": {
                            backgroundColor: "action.hover"
                          }
                        }
                      },
                      children: [
                        h.avatar ? /* @__PURE__ */ t(
                          Ye,
                          {
                            src: h.avatar,
                            sx: {
                              width: 32,
                              height: 32
                            }
                          }
                        ) : /* @__PURE__ */ t(
                          gt,
                          {
                            sx: {
                              width: 32,
                              height: 32,
                              color: E
                            }
                          }
                        ),
                        /* @__PURE__ */ c(
                          W,
                          {
                            sx: {
                              display: "flex",
                              flexDirection: "column",
                              alignItems: "flex-start",
                              minWidth: 0
                            },
                            children: [
                              /* @__PURE__ */ t(
                                P,
                                {
                                  variant: "body2",
                                  sx: {
                                    color: E,
                                    fontWeight: 500,
                                    lineHeight: 1.2,
                                    overflow: "hidden",
                                    textOverflow: "ellipsis",
                                    whiteSpace: "nowrap",
                                    maxWidth: "150px"
                                  },
                                  children: h.name
                                }
                              ),
                              /* @__PURE__ */ t(
                                P,
                                {
                                  variant: "caption",
                                  sx: {
                                    color: E,
                                    lineHeight: 1.2,
                                    overflow: "hidden",
                                    textOverflow: "ellipsis",
                                    whiteSpace: "nowrap",
                                    maxWidth: "150px"
                                  },
                                  children: h.role
                                }
                              )
                            ]
                          }
                        )
                      ]
                    }
                  )
                },
                h.key
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
}) => l ? /* @__PURE__ */ t(hr, { variant: "outlined", sx: { m: 1.5, flexShrink: 0 }, children: /* @__PURE__ */ c(pr, { children: [
  /* @__PURE__ */ t(ur, { fontSize: "small" }),
  /* @__PURE__ */ t(P, { gutterBottom: !0, sx: { fontWeight: 600 }, children: e }),
  /* @__PURE__ */ t(
    P,
    {
      variant: "body2",
      sx: { mb: 2, color: "text.secondary" },
      children: r
    }
  ),
  /* @__PURE__ */ t(
    Ct,
    {
      variant: "contained",
      size: "small",
      fullWidth: !0,
      onClick: a,
      children: o
    }
  )
] }) }) : null, Te = (e, r) => r ? e.path && r === e.path ? !0 : e.subitems?.some((o) => o.path === r) ?? !1 : !1, Fe = (e, r) => !!(r && e.path === r), kr = (e) => {
  const r = Dt(e);
  if (!r)
    return "#ffffff";
  const [o, a, l] = r.map((i) => {
    const s = i / 255;
    return s <= 0.03928 ? s / 12.92 : ((s + 0.055) / 1.055) ** 2.4;
  });
  return 0.2126 * o + 0.7152 * a + 0.0722 * l > 0.5 ? "#0b1f1c" : "#ffffff";
}, Lr = (e) => {
  const r = Dt(e);
  if (!r)
    return "rgba(1, 88, 79, 0.12)";
  const [o, a, l] = r;
  return `rgba(${o}, ${a}, ${l}, 0.14)`;
}, Dt = (e) => {
  let r = e.trim().replace(/^#/, "");
  if (r.length === 3 && (r = r.split("").map((a) => a + a).join("")), r.length !== 6 || /[^0-9a-fA-F]/.test(r))
    return null;
  const o = parseInt(r, 16);
  return [o >> 16 & 255, o >> 8 & 255, o & 255];
}, _t = () => typeof window < "u" && !!window.localStorage, At = (e) => {
  if (!_t())
    return null;
  try {
    const r = window.localStorage.getItem(e);
    return r === null ? null : r === "true";
  } catch (r) {
    return console.warn("Failed to read sidebar collapsed state:", r), null;
  }
}, Nt = (e, r) => {
  if (_t())
    try {
      window.localStorage.setItem(e, r ? "true" : "false");
    } catch (o) {
      console.warn("Failed to persist sidebar collapsed state:", o);
    }
}, Wr = 264, zr = 72, Mr = "lumora:sidebar-collapsed", Fr = "width 200ms ease", Br = 16, Kr = 14, Xe = ({ text: e }) => {
  const r = b.useRef(null), [o, a] = b.useState(!1), l = b.useCallback(() => {
    const d = r.current;
    d && a(d.scrollWidth > d.clientWidth + 0.5);
  }, []);
  return b.useLayoutEffect(() => {
    l();
  }, [l, e]), b.useEffect(() => {
    const d = r.current;
    if (!d)
      return;
    const i = new ResizeObserver(() => l());
    return i.observe(d), () => i.disconnect();
  }, [l]), /* @__PURE__ */ t(
    te,
    {
      title: e,
      placement: "right",
      arrow: !0,
      enterDelay: 400,
      disableHoverListener: !o,
      disableFocusListener: !o,
      disableTouchListener: !o,
      children: /* @__PURE__ */ t(
        P,
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
  size: r = Br
}) => e ? /* @__PURE__ */ t(gr, { sx: { fontSize: r, opacity: 0.75 } }) : /* @__PURE__ */ t(fr, { sx: { fontSize: r, opacity: 0.75 } }), Ur = ({
  mainLinks: e,
  secondaryLinks: r = [],
  activePath: o,
  onLinkClick: a,
  logo: l,
  title: d,
  sectionTitle: i,
  activeAccentColor: s = "#01584f",
  groupAccentColor: I,
  activeForegroundColor: v,
  surfaceBackgroundColor: m,
  collapsed: _,
  defaultCollapsed: g = !1,
  onCollapsedChange: O,
  persistKey: S = Mr,
  expandedWidth: w = Wr,
  collapsedWidth: K = zr
}) => {
  const U = Ze(), H = U.palette.mode === "dark", f = _ !== void 0, [u, D] = b.useState(
    () => At(S) ?? g
  ), R = f ? !!_ : u, [X, $] = b.useState(
    {}
  ), y = s, z = v ?? kr(y), p = I ?? Lr(y), M = m ?? (H ? U.palette.background.paper : "#ffffff"), E = H ? "text.primary" : y, pe = (n) => {
    f || (D(n), Nt(S, n)), O?.(n);
  }, Q = (n) => {
    a?.(n);
  }, ue = (n, x) => {
    $((k) => ({ ...k, [n]: !x }));
  }, ie = (n) => X[n.text] ?? Te(n, o), re = (n) => {
    const x = !!(n.path && o === n.path);
    return /* @__PURE__ */ c(
      de,
      {
        disabled: !n.path,
        selected: x,
        onClick: () => n.path && Q(n.path),
        "data-testid": `sidebar-item-${n.text}`,
        "data-active": x ? "true" : "false",
        sx: {
          borderRadius: "6px",
          py: 1,
          px: 1.5,
          color: x ? z : E,
          bgcolor: x ? y : "transparent",
          "& .MuiListItemIcon-root": {
            color: x ? z : E,
            minWidth: 36
          },
          "&:hover": {
            bgcolor: x ? y : p
          },
          "&.Mui-selected, &.Mui-selected:hover": {
            bgcolor: y
          }
        },
        children: [
          /* @__PURE__ */ t(he, { children: n.icon }),
          /* @__PURE__ */ t(
            ae,
            {
              disableTypography: !0,
              primary: /* @__PURE__ */ t(Xe, { text: n.text })
            }
          )
        ]
      },
      n.text
    );
  }, Y = (n) => {
    const x = Te(n, o), k = !!(n.path && o === n.path), h = ie(n);
    return /* @__PURE__ */ c(
      W,
      {
        "data-testid": `sidebar-group-${n.text}`,
        sx: {
          borderRadius: "6px",
          bgcolor: x ? p : "transparent"
        },
        children: [
          /* @__PURE__ */ c(
            de,
            {
              onClick: () => ue(n.text, h),
              "data-testid": `sidebar-item-${n.text}`,
              "data-active": k ? "true" : "false",
              "aria-expanded": h,
              sx: {
                borderRadius: "6px",
                py: 1,
                px: 1.5,
                color: k ? z : E,
                bgcolor: k ? y : "transparent",
                "& .MuiListItemIcon-root": {
                  color: k ? z : E,
                  minWidth: 36
                },
                "&:hover": {
                  bgcolor: k ? y : p
                }
              },
              children: [
                /* @__PURE__ */ t(he, { children: n.icon }),
                /* @__PURE__ */ t(
                  ae,
                  {
                    disableTypography: !0,
                    primary: /* @__PURE__ */ t(Xe, { text: n.text })
                  }
                ),
                /* @__PURE__ */ t(xt, { open: h })
              ]
            }
          ),
          /* @__PURE__ */ t(Tt, { in: h, timeout: "auto", unmountOnExit: !0, children: /* @__PURE__ */ t(
            W,
            {
              "data-testid": `sidebar-children-${n.text}`,
              sx: { pb: 0.5 },
              children: n.subitems.map((ne) => Ee(ne))
            }
          ) })
        ]
      },
      n.text
    );
  }, Ee = (n) => {
    const x = Fe(n, o);
    return /* @__PURE__ */ c(
      de,
      {
        selected: x,
        onClick: () => Q(n.path),
        "data-testid": `sidebar-subitem-${n.text}`,
        "data-active": x ? "true" : "false",
        sx: {
          borderRadius: "6px",
          mx: 0.5,
          py: 0.75,
          pl: 4,
          color: x ? z : E,
          bgcolor: x ? y : "transparent",
          "& .MuiListItemIcon-root": {
            color: x ? z : E,
            minWidth: 32
          },
          "&:hover": {
            bgcolor: x ? y : "action.hover"
          },
          "&.Mui-selected, &.Mui-selected:hover": {
            bgcolor: y
          }
        },
        children: [
          n.icon ? /* @__PURE__ */ t(he, { children: n.icon }) : null,
          /* @__PURE__ */ t(
            ae,
            {
              disableTypography: !0,
              primary: /* @__PURE__ */ t(Xe, { text: n.text })
            }
          )
        ]
      },
      n.path
    );
  }, oe = (n, x, k, h, ne, G) => {
    const De = !ne, _e = /* @__PURE__ */ t(
      J,
      {
        "aria-label": x,
        disabled: De,
        onClick: ne,
        "data-testid": G?.testId ?? `sidebar-item-${x}`,
        "data-active": h ? "true" : "false",
        sx: {
          width: 44,
          height: 44,
          color: h ? z : E,
          bgcolor: h ? y : "transparent",
          borderRadius: h ? "8px" : "50%",
          "&:hover": {
            bgcolor: h ? y : G?.insideGroup ? "action.hover" : p,
            borderRadius: "8px"
          }
        },
        children: k
      }
    );
    return /* @__PURE__ */ t(te, { title: x, placement: "right", arrow: !0, children: De ? /* @__PURE__ */ t("span", { children: _e }) : _e }, n);
  }, se = (n, x) => {
    const k = Te(n, o), h = !!(n.path && o === n.path), ne = /* @__PURE__ */ t(te, { title: n.text, placement: "right", arrow: !0, children: /* @__PURE__ */ c(
      J,
      {
        "aria-label": n.text,
        "aria-expanded": x,
        onClick: () => ue(n.text, x),
        "data-testid": `sidebar-item-${n.text}`,
        "data-active": h ? "true" : "false",
        sx: {
          display: "flex",
          flexDirection: "column",
          gap: 0,
          width: 44,
          py: 0.75,
          borderRadius: "10px",
          color: h ? z : E,
          bgcolor: h ? y : "transparent",
          // The outer pill supplies the hover tint; keep only the
          // solid active fill on the button itself.
          "&:hover": {
            bgcolor: h ? y : "transparent"
          }
        },
        children: [
          n.icon,
          /* @__PURE__ */ t(
            xt,
            {
              open: x,
              size: Kr
            }
          )
        ]
      }
    ) });
    return /* @__PURE__ */ c(
      W,
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
          bgcolor: k ? p : "transparent",
          "&:hover": { bgcolor: p }
        },
        children: [
          ne,
          x ? n.subitems.map(
            (G) => oe(
              G.path,
              G.text,
              G.icon ?? n.icon,
              Fe(G, o),
              () => Q(G.path),
              {
                insideGroup: !0,
                testId: `sidebar-subitem-${G.text}`
              }
            )
          ) : null
        ]
      }
    );
  }, ye = (n) => n.subitems?.length ? /* @__PURE__ */ t(b.Fragment, { children: se(n, ie(n)) }, n.text) : oe(
    n.text,
    n.text,
    n.icon,
    !!(n.path && o === n.path),
    n.path ? () => Q(n.path) : void 0
  ), fe = (n) => R ? ye(n) : n.subitems?.length ? Y(n) : re(n), ge = R ? K : w;
  return /* @__PURE__ */ c(
    W,
    {
      component: "nav",
      "aria-label": "Main sidebar",
      "data-testid": "collapsible-sidebar",
      "data-collapsed": R ? "true" : "false",
      sx: {
        width: ge,
        minWidth: ge,
        height: "100%",
        boxSizing: "border-box",
        bgcolor: M,
        display: "flex",
        flexDirection: "column",
        overflowX: "hidden",
        overflowY: "auto",
        transition: Fr,
        px: R ? 1 : 2,
        py: 2
      },
      children: [
        /* @__PURE__ */ c(
          N,
          {
            direction: "row",
            alignItems: "center",
            justifyContent: R ? "center" : "flex-start",
            spacing: 1.5,
            sx: { minHeight: 40, px: R ? 0 : 0.5 },
            children: [
              !R && d ? /* @__PURE__ */ t(
                P,
                {
                  "data-testid": "sidebar-title",
                  variant: "h6",
                  sx: {
                    fontWeight: 700,
                    fontSize: "20px",
                    lineHeight: 1,
                    textTransform: "uppercase",
                    color: E,
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    textOverflow: "ellipsis"
                  },
                  children: d
                }
              ) : null,
              l ? /* @__PURE__ */ t(
                W,
                {
                  "data-testid": "sidebar-logo",
                  sx: {
                    display: "flex",
                    alignItems: "center",
                    flexShrink: 0,
                    color: E,
                    "& svg": { color: "inherit", fill: "currentColor" }
                  },
                  children: l
                }
              ) : null
            ]
          }
        ),
        /* @__PURE__ */ c(
          N,
          {
            direction: "row",
            alignItems: "center",
            justifyContent: R ? "center" : "space-between",
            sx: { mt: 2, mb: 1, minHeight: 32 },
            children: [
              !R && i ? /* @__PURE__ */ t(
                P,
                {
                  "data-testid": "sidebar-section-title",
                  variant: "caption",
                  sx: {
                    px: 0.5,
                    fontWeight: 600,
                    letterSpacing: "0.06em",
                    textTransform: "uppercase",
                    color: E
                  },
                  children: i
                }
              ) : null,
              /* @__PURE__ */ t(
                te,
                {
                  title: R ? "Expand sidebar" : "Collapse sidebar",
                  placement: "right",
                  arrow: !0,
                  children: /* @__PURE__ */ t(
                    J,
                    {
                      size: "small",
                      "aria-label": R ? "Expand sidebar" : "Collapse sidebar",
                      "data-testid": "sidebar-toggle",
                      onClick: () => pe(!R),
                      disableFocusRipple: !0,
                      sx: {
                        color: E,
                        "&:focus, &:focus-visible": { outline: "none" }
                      },
                      children: R ? /* @__PURE__ */ t(xr, { fontSize: "small" }) : /* @__PURE__ */ t(mr, { fontSize: "small" })
                    }
                  )
                }
              )
            ]
          }
        ),
        /* @__PURE__ */ t(N, { spacing: 0.5, sx: { width: "100%" }, children: e.map((n) => fe(n)) }),
        r.length > 0 ? /* @__PURE__ */ c(W, { sx: { mt: "auto", pt: 2 }, children: [
          /* @__PURE__ */ t(ee, { sx: { mb: 1, borderColor: "divider" } }),
          /* @__PURE__ */ t(N, { spacing: 0.5, sx: { width: "100%" }, children: r.map((n) => fe(n)) })
        ] }) : null
      ]
    }
  );
}, Hr = 180, bt = 250, kt = ({
  text: e,
  testId: r
}) => {
  const o = b.useRef(null), [a, l] = b.useState(!1), d = b.useCallback(() => {
    const i = o.current;
    i && l(i.scrollWidth > i.clientWidth + 0.5);
  }, []);
  return b.useLayoutEffect(() => {
    d();
  }, [d, e]), b.useEffect(() => {
    const i = o.current;
    if (!i)
      return;
    const s = new ResizeObserver(() => d());
    return s.observe(i), () => s.disconnect();
  }, [d]), /* @__PURE__ */ t(
    te,
    {
      title: e,
      placement: "right",
      arrow: !0,
      enterDelay: 400,
      disableHoverListener: !a,
      disableFocusListener: !a,
      disableTouchListener: !a,
      children: /* @__PURE__ */ t(
        P,
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
}, $r = ({
  link: e,
  activePath: r,
  onLinkClick: o,
  accentColor: a,
  isSecondary: l,
  surfaceBackgroundColor: d,
  railShowTitles: i = !1
}) => {
  const s = Ze(), [I, v] = b.useState(null), [m, _] = b.useState(!1), g = b.useRef(
    null
  ), O = b.useRef(null), S = b.useRef(null), w = b.useRef(!1), K = b.useRef(!1), U = b.useId(), H = () => {
    g.current && (clearTimeout(g.current), g.current = null);
  }, f = () => {
    H(), g.current = setTimeout(() => {
      _(!1), g.current = null;
    }, Hr);
  }, u = () => {
    H(), _(!0);
  };
  b.useEffect(() => {
    if (!m)
      return;
    const p = (M) => {
      M.key === "Escape" && (_(!1), S.current?.focus());
    };
    return document.addEventListener("keydown", p), () => document.removeEventListener("keydown", p);
  }, [m]), b.useEffect(() => {
    if (!m || !K.current)
      return;
    const p = globalThis.requestAnimationFrame(() => {
      O.current?.querySelector(
        '[role="menuitem"]'
      )?.focus(), K.current = !1;
    });
    return () => cancelAnimationFrame(p);
  }, [m]);
  const D = Te(e, r), R = l ? 48 : 44, X = l ? "text.secondary" : a, $ = l ? "#01584F" : a, y = {
    width: "100%",
    maxWidth: "100%",
    minWidth: R,
    height: "auto",
    minHeight: R,
    flexDirection: "column",
    py: 0.5,
    // Horizontal padding so labels (esp. active fill) do not touch the box edges
    px: 1,
    borderRadius: "4px",
    color: D ? "#ffffff" : X,
    backgroundColor: D ? $ : "transparent",
    "&:hover": {
      backgroundColor: D ? $ : "action.hover",
      borderRadius: "4px",
      color: D ? "#ffffff" : X
    }
  }, z = i ? /* @__PURE__ */ t(
    J,
    {
      ref: S,
      component: e.path ? "a" : "button",
      href: e.path || void 0,
      "aria-label": e.text,
      onFocus: () => {
        w.current || u();
      },
      onBlur: (p) => {
        const M = p.relatedTarget;
        M && O.current?.contains(M) || f();
      },
      onKeyDown: (p) => {
        p.key === "ArrowDown" && (p.preventDefault(), K.current = !0, u());
      },
      onClick: (p) => {
        p.preventDefault(), p.stopPropagation(), e.path && o?.(e.path);
      },
      "aria-haspopup": "menu",
      "aria-expanded": m,
      "aria-controls": m ? U : void 0,
      "data-testid": `rail-submenu-trigger-${e.text}`,
      sx: y,
      children: /* @__PURE__ */ c(N, { alignItems: "center", spacing: 1, sx: { width: "100%" }, children: [
        /* @__PURE__ */ t(
          W,
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
          kt,
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
      ref: S,
      component: e.path ? "a" : "button",
      href: e.path || void 0,
      "aria-label": e.text,
      onFocus: () => {
        w.current || u();
      },
      onBlur: (p) => {
        const M = p.relatedTarget;
        M && O.current?.contains(M) || f();
      },
      onKeyDown: (p) => {
        p.key === "ArrowDown" && (p.preventDefault(), K.current = !0, u());
      },
      onClick: (p) => {
        p.preventDefault(), p.stopPropagation(), e.path && o?.(e.path);
      },
      "aria-haspopup": "menu",
      "aria-expanded": m,
      "aria-controls": m ? U : void 0,
      "data-testid": `rail-submenu-trigger-${e.text}`,
      sx: {
        width: R,
        height: R,
        color: D ? "#ffffff" : X,
        backgroundColor: D ? $ : "transparent",
        borderRadius: D ? "4px" : "50%",
        "&:hover": {
          backgroundColor: D ? $ : "action.hover",
          borderRadius: "4px"
        }
      },
      children: e.icon
    }
  );
  return /* @__PURE__ */ c(
    W,
    {
      sx: {
        width: "100%",
        display: "flex",
        justifyContent: "center"
      },
      children: [
        /* @__PURE__ */ t(
          W,
          {
            ref: v,
            "data-testid": `rail-submenu-anchor-${e.text}`,
            sx: { display: "inline-flex", maxWidth: "100%" },
            onMouseEnter: () => {
              w.current = !0, u();
            },
            onMouseLeave: () => {
              w.current = !1, f();
            },
            children: i ? z : /* @__PURE__ */ t(te, { title: e.text, placement: "right", arrow: !0, children: z })
          }
        ),
        /* @__PURE__ */ t(
          yr,
          {
            open: m && !!I,
            anchorEl: I,
            placement: "right-start",
            modifiers: [{ name: "offset", options: { offset: [8, 0] } }],
            sx: { zIndex: (p) => p.zIndex.modal },
            children: /* @__PURE__ */ t(
              Er,
              {
                ref: O,
                elevation: 0,
                onMouseEnter: () => {
                  H();
                },
                onMouseLeave: f,
                "data-testid": `rail-submenu-panel-${e.text}`,
                sx: {
                  bgcolor: d,
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
                  Sr,
                  {
                    id: U,
                    dense: !0,
                    autoFocus: !1,
                    role: "menu",
                    sx: {
                      bgcolor: "transparent",
                      py: 0,
                      maxWidth: bt
                    },
                    children: e.subitems.map((p) => /* @__PURE__ */ c(
                      qe,
                      {
                        role: "menuitem",
                        title: p.text,
                        selected: Fe(p, r),
                        onClick: (M) => {
                          M.preventDefault(), o?.(p.path), _(!1);
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
                          p.icon ? /* @__PURE__ */ t(he, { children: p.icon }) : null,
                          /* @__PURE__ */ t(
                            ae,
                            {
                              primary: p.text,
                              primaryTypographyProps: {
                                noWrap: !0
                              }
                            }
                          )
                        ]
                      },
                      p.path
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
}, Gr = ({
  link: e,
  activePath: r,
  onLinkClick: o,
  accentColor: a,
  isSecondary: l,
  railShowTitles: d = !1
}) => {
  const i = !!(e.path && r === e.path), s = l ? 48 : 44, I = l ? "text.secondary" : a, v = l ? "#01584F" : a, m = {
    width: "100%",
    maxWidth: "100%",
    minWidth: s,
    height: "auto",
    minHeight: s,
    flexDirection: "column",
    py: 0.5,
    px: 1,
    borderRadius: "4px",
    color: i ? "#ffffff" : I,
    backgroundColor: i ? v : "transparent",
    "&:hover": {
      backgroundColor: i ? v : "action.hover",
      borderRadius: "4px",
      color: i ? "#ffffff" : I
    }
  }, _ = d ? /* @__PURE__ */ t(
    J,
    {
      component: e.path ? "a" : "button",
      href: e.path || void 0,
      "aria-label": e.text,
      onClick: (g) => {
        g.preventDefault(), g.stopPropagation(), e.path && o?.(e.path);
      },
      disabled: !e.path,
      sx: m,
      children: /* @__PURE__ */ c(N, { alignItems: "center", spacing: 1, sx: { width: "100%" }, children: [
        /* @__PURE__ */ t(
          W,
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
          kt,
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
      onClick: (g) => {
        g.preventDefault(), g.stopPropagation(), e.path && o?.(e.path);
      },
      disabled: !e.path,
      sx: {
        width: s,
        height: s,
        color: i ? "#ffffff" : I,
        backgroundColor: i ? v : "transparent",
        borderRadius: i ? "4px" : "50%",
        "&:hover": {
          backgroundColor: i ? v : "action.hover",
          borderRadius: "4px"
        }
      },
      children: e.icon
    }
  );
  return d ? _ : /* @__PURE__ */ t(te, { title: e.text, placement: "right", arrow: !0, children: _ });
}, Pr = ({
  link: e,
  expanded: r,
  onToggle: o,
  activePath: a,
  onLinkClick: l,
  accentColor: d,
  isSecondary: i
}) => {
  const s = Te(e, a), I = i ? "text.secondary" : d, v = i ? "#01584F" : d;
  return /* @__PURE__ */ c(Me, { children: [
    /* @__PURE__ */ c(
      de,
      {
        onClick: o,
        sx: {
          py: 1.5,
          px: 2,
          color: s ? "#ffffff" : I,
          bgcolor: s ? v : "transparent",
          "&:hover": {
            bgcolor: s ? v : "action.hover"
          }
        },
        "data-testid": `drawer-expand-trigger-${e.text}`,
        children: [
          /* @__PURE__ */ t(he, { sx: { color: "inherit", minWidth: 40 }, children: e.icon }),
          /* @__PURE__ */ t(ae, { primary: e.text }),
          r ? /* @__PURE__ */ t(br, {}) : /* @__PURE__ */ t(wr, {})
        ]
      }
    ),
    /* @__PURE__ */ t(Tt, { in: r, timeout: "auto", unmountOnExit: !0, children: /* @__PURE__ */ c(W, { component: "nav", "aria-label": e.text, children: [
      e.path ? /* @__PURE__ */ t(
        de,
        {
          sx: { pl: 4, py: 1 },
          onClick: () => e.path && l?.(e.path),
          selected: !!(a && a === e.path),
          "data-testid": `drawer-parent-path-${e.text}`,
          children: /* @__PURE__ */ t(ae, { primary: e.text })
        }
      ) : null,
      e.subitems.map((m) => /* @__PURE__ */ c(
        de,
        {
          sx: { pl: 4, py: 1 },
          onClick: () => l?.(m.path),
          selected: Fe(m, a),
          children: [
            m.icon ? /* @__PURE__ */ t(he, { sx: { minWidth: 36 }, children: m.icon }) : null,
            /* @__PURE__ */ t(ae, { primary: m.text })
          ]
        },
        m.path
      ))
    ] }) })
  ] });
}, jr = ({
  link: e,
  activePath: r,
  onLinkClick: o,
  accentColor: a,
  isSecondary: l
}) => {
  const d = !!(e.path && r === e.path), i = l ? "text.secondary" : a, s = l ? "#01584F" : a;
  return /* @__PURE__ */ c(
    de,
    {
      disabled: !e.path,
      onClick: () => e.path && o?.(e.path),
      sx: {
        py: 1.5,
        px: 2,
        color: d ? "#ffffff" : i,
        bgcolor: d ? s : "transparent",
        "&:hover": {
          bgcolor: d ? s : "action.hover"
        }
      },
      children: [
        /* @__PURE__ */ t(he, { sx: { color: "inherit", minWidth: 40 }, children: e.icon }),
        /* @__PURE__ */ t(ae, { primary: e.text })
      ]
    }
  );
}, ze = () => /* @__PURE__ */ t(
  W,
  {
    sx: {
      width: "100%",
      display: "flex",
      justifyContent: "center"
    },
    children: /* @__PURE__ */ t(ee, { sx: { width: "60%", borderColor: "divider" } })
  }
), Lt = ({
  variant: e,
  mainLinks: r,
  secondaryLinks: o = [],
  activePath: a,
  onLinkClick: l,
  accentColor: d = "#01584f",
  surfaceBackgroundColor: i,
  railShowTitles: s = !1
}) => {
  const I = Ze(), v = i ?? I.palette.background.paper, m = (f) => {
    l && l(f);
  }, [_, g] = b.useState({}), [O, S] = b.useState({}), w = (f) => {
    g((u) => ({
      ...u,
      [f]: !u[f]
    }));
  }, K = (f) => {
    S((u) => ({
      ...u,
      [f]: !u[f]
    }));
  }, U = (f, u) => f.subitems?.length ? /* @__PURE__ */ t(
    $r,
    {
      link: f,
      activePath: a,
      onLinkClick: m,
      accentColor: d,
      isSecondary: u,
      surfaceBackgroundColor: v,
      railShowTitles: s
    }
  ) : /* @__PURE__ */ t(
    Gr,
    {
      link: f,
      activePath: a,
      onLinkClick: m,
      accentColor: d,
      isSecondary: u,
      railShowTitles: s
    }
  ), H = (f, u, D) => {
    if (f.subitems?.length) {
      const R = D ? !!O[u] : !!_[u];
      return /* @__PURE__ */ t(
        Pr,
        {
          link: f,
          expanded: R,
          onToggle: () => D ? K(u) : w(u),
          activePath: a,
          onLinkClick: m,
          accentColor: d,
          isSecondary: D
        }
      );
    }
    return /* @__PURE__ */ t(
      jr,
      {
        link: f,
        activePath: a,
        onLinkClick: m,
        accentColor: d,
        isSecondary: D
      }
    );
  };
  return e === "drawer" ? /* @__PURE__ */ c(
    N,
    {
      sx: {
        flexGrow: 1,
        width: "100%",
        alignItems: "stretch",
        pt: 2,
        gap: 0
      },
      children: [
        /* @__PURE__ */ t(N, { sx: { width: "100%" }, children: r.map((f, u) => /* @__PURE__ */ c(b.Fragment, { children: [
          H(f, u, !1),
          u < r.length - 1 ? /* @__PURE__ */ t(ze, {}) : null
        ] }, u)) }),
        o.length > 0 ? /* @__PURE__ */ c(Me, { children: [
          /* @__PURE__ */ t(
            W,
            {
              sx: {
                width: "100%",
                my: 2,
                display: "flex",
                justifyContent: "center"
              },
              children: /* @__PURE__ */ t(
                ee,
                {
                  sx: { width: "60%", borderColor: "divider" }
                }
              )
            }
          ),
          /* @__PURE__ */ t(W, { sx: { mt: "auto", pb: 2 }, children: /* @__PURE__ */ t(N, { sx: { width: "100%" }, children: o.map((f, u) => /* @__PURE__ */ c(b.Fragment, { children: [
            H(f, u, !0),
            u < o.length - 1 ? /* @__PURE__ */ t(ze, {}) : null
          ] }, u)) }) })
        ] }) : null
      ]
    }
  ) : /* @__PURE__ */ c(
    N,
    {
      sx: {
        flexGrow: 1,
        width: "100%",
        boxSizing: "border-box",
        justifyContent: "flex-start",
        alignItems: "center",
        pt: 2,
        gap: s ? 1.25 : 1
      },
      children: [
        r.map((f, u) => /* @__PURE__ */ c(b.Fragment, { children: [
          U(f, !1),
          u < r.length - 1 ? /* @__PURE__ */ t(ze, {}) : null
        ] }, u)),
        o.length > 0 ? /* @__PURE__ */ c(Me, { children: [
          /* @__PURE__ */ t(
            W,
            {
              sx: {
                width: "100%",
                my: 2,
                display: "flex",
                justifyContent: "center"
              },
              children: /* @__PURE__ */ t(
                ee,
                {
                  sx: { width: "60%", borderColor: "divider" }
                }
              )
            }
          ),
          /* @__PURE__ */ t(W, { sx: { mt: "auto", pb: 2 }, children: /* @__PURE__ */ t(
            N,
            {
              gap: s ? 1.25 : 1,
              alignItems: "center",
              children: o.map((f, u) => /* @__PURE__ */ c(b.Fragment, { children: [
                U(f, !0),
                u < o.length - 1 ? /* @__PURE__ */ t(ze, {}) : null
              ] }, u))
            }
          ) })
        ] }) : null
      ]
    }
  );
}, Xr = ({
  open: e,
  onClose: r,
  mainLinks: o,
  secondaryLinks: a = [],
  activePath: l,
  onLinkClick: d,
  userName: i = "User Name",
  userAvatar: s,
  onLogout: I,
  showNotifications: v = !1,
  notificationCount: m = 0,
  onNotificationBellClick: _,
  alertProps: g,
  accentColor: O = "#01584f"
}) => /* @__PURE__ */ t(
  Rr,
  {
    anchor: "right",
    open: e,
    onClose: r,
    sx: {
      zIndex: (w) => w.zIndex.drawer + 1,
      "& .MuiDrawer-paper": {
        backgroundImage: "none",
        backgroundColor: "background.paper"
      }
    },
    children: /* @__PURE__ */ c(
      N,
      {
        sx: {
          maxWidth: "70dvw",
          height: "100%"
        },
        children: [
          /* @__PURE__ */ c(N, { direction: "row", sx: { p: 2, pb: 0, gap: 1 }, children: [
            /* @__PURE__ */ c(
              N,
              {
                direction: "row",
                sx: { gap: 1, alignItems: "center", flexGrow: 1, p: 1 },
                children: [
                  /* @__PURE__ */ t(
                    Ye,
                    {
                      sizes: "small",
                      alt: i,
                      src: s,
                      sx: { width: 24, height: 24 }
                    }
                  ),
                  /* @__PURE__ */ t(P, { component: "p", variant: "h6", children: i })
                ]
              }
            ),
            v && /* @__PURE__ */ t(
              Rt,
              {
                color: "error",
                badgeContent: m,
                invisible: m === 0,
                sx: { "& .MuiBadge-badge": { right: 2, top: 2 } },
                children: /* @__PURE__ */ t(
                  J,
                  {
                    size: "small",
                    onClick: _,
                    "aria-label": "Notifications",
                    children: /* @__PURE__ */ t(vr, {})
                  }
                )
              }
            )
          ] }),
          /* @__PURE__ */ t(ee, {}),
          /* @__PURE__ */ c(N, { sx: { flexGrow: 1 }, children: [
            /* @__PURE__ */ t(
              Lt,
              {
                variant: "drawer",
                mainLinks: o,
                secondaryLinks: a,
                activePath: l,
                onLinkClick: (w) => {
                  d?.(w), r();
                },
                accentColor: O
              }
            ),
            /* @__PURE__ */ t(ee, {})
          ] }),
          g?.show && /* @__PURE__ */ t(Ve, { ...g }),
          /* @__PURE__ */ t(N, { sx: { p: 2 }, children: /* @__PURE__ */ t(
            Ct,
            {
              variant: "outlined",
              fullWidth: !0,
              startIcon: /* @__PURE__ */ t(vt, {}),
              onClick: I,
              children: "Logout"
            }
          ) })
        ]
      }
    )
  }
), Jr = 100, wt = 264, St = 72, Et = "lumora:sidebar-collapsed", Je = "width 200ms ease, left 200ms ease", Po = ({
  children: e,
  sidebarLinks: r = [],
  secondarySidebarLinks: o = [],
  appName: a = "Dashboard",
  pageName: l = "Home",
  showHeader: d = !0,
  showSidebar: i = !0,
  showSidebarRailTitles: s = !1,
  sidebarVariant: I = "rail",
  logo: v,
  sidebarSectionTitle: m,
  sidebarBackgroundColor: _,
  groupAccentColor: g,
  activeSidebarForegroundColor: O,
  enableRefreshToken: S = !1,
  activePath: w,
  onLinkClick: K,
  userName: U,
  userEmail: H,
  userAvatar: f,
  onLogout: u,
  onProfileClick: D,
  onAccountClick: R,
  onSettingsClick: X,
  showSettings: $ = !0,
  showNotifications: y = !0,
  notificationCount: z = 0,
  NotificationSidebarContent: p,
  showSearchbar: M = !0,
  searchValue: E,
  onSearchChange: pe,
  onSearchSubmit: Q,
  showProfile: ue = !0,
  userRole: ie,
  onVerify: re,
  alertProps: Y,
  style: Ee,
  headerStyles: oe,
  sidebarStyles: se,
  contentStyles: ye,
  accentColor: fe,
  contentBackgroundColor: ge,
  navbarBackground: n,
  navbarAccentColor: x,
  theme: k = "light",
  showThemeToggler: h = !1,
  onThemeToggle: ne,
  GlobalChatSidebar: G,
  useChatSidebar: De,
  rightExtraContent: _e,
  customNavbar: et,
  customNavbarProps: Wt,
  redirectToLogin: Ae,
  apiBaseUrl: tt
}) => {
  const zt = Yt(), q = qt(zt.breakpoints.down("md")), rt = pt(
    () => yt(Cr(k)),
    [k]
  ), Ne = k === "dark", me = fe ?? "#01584f", ke = ge ?? (Ne ? "hsl(220, 35%, 9%)" : "#f2f9fc"), Mt = n ?? (Ne ? "hsl(220, 30%, 7%)" : "#ffffff"), Ft = x ?? (Ne ? "#ffffff" : "#000000"), ve = I === "collapsible", Bt = v ?? /* @__PURE__ */ t(
    le,
    {
      role: "img",
      "aria-label": `${a} logo`,
      sx: {
        width: 28,
        height: 28,
        flexShrink: 0,
        // Accent in light mode; a legible light fill in dark mode.
        bgcolor: Ne ? "#ffffff" : me,
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
  ), [Be, Kt] = be(
    () => At(Et) ?? !1
  ), Ut = (Re) => {
    Kt(Re), Nt(Et, Re);
  };
  let V = 0;
  i && !q && (ve ? V = Be ? St : wt : V = Jr);
  const [ot, Ke] = be(!1), [Ht, Le] = be(!1), [$t, Gt] = be(!0), [Pt, jt] = be(!1), [Yr, We] = be(null), nt = De?.()?.isOpen ?? !1, Ue = ut(re), at = ut(!1), it = pt(
    () => Dr(tt),
    [tt]
  );
  Ge(() => {
    Ue.current = re;
  }, [re]);
  const Xt = () => {
    Ke(!ot);
  }, Jt = () => {
    Ke(!1);
  }, st = (Re) => {
    const xe = u(Re);
    xe instanceof Promise ? xe.then(() => {
      We(null);
    }).catch((lt) => {
      console.error("Error in logout handler:", lt), We(null);
    }) : We(null);
  };
  return Ge(() => {
    (() => {
      try {
        const { isAuthenticated: xe, error: lt } = Ir();
        if (!xe) {
          console.log("No session found, redirecting to login"), Oe(), Ae();
          return;
        }
        if (!at.current) {
          const { user: Ce, error: He } = Or();
          if (Ce && !He) {
            const ct = {
              name: Ce.name || "",
              email: Ce.email || "",
              profilePicture: Ce.profilePicture || "",
              role: Ce.role || ""
            };
            We(ct), at.current = !0, Ue.current && Ue.current(ct);
          } else He && console.error("Error getting user data:", He);
        }
        jt(!0);
      } catch (xe) {
        console.error("Error checking session:", xe), Oe(), Ae();
      } finally {
        Gt(!1);
      }
    })();
  }, [Ae]), Ge(() => {
    S && _r(it, Ae);
  }, [S, it]), $t ? /* @__PURE__ */ t(ht, { theme: rt, children: /* @__PURE__ */ c(
    le,
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
          Qt,
          {
            size: 60,
            thickness: 4,
            sx: { color: me }
          }
        ),
        /* @__PURE__ */ t(le, { sx: { mt: 2, color: "text.secondary" }, children: "Checking session..." })
      ]
    }
  ) }) : Pt ? /* @__PURE__ */ t(ht, { theme: rt, children: /* @__PURE__ */ c(
    le,
    {
      sx: {
        display: "flex",
        minHeight: "100vh",
        ...Ee
      },
      children: [
        /* @__PURE__ */ t(Vt, {}),
        d && /* @__PURE__ */ t(
          Nr,
          {
            appName: a,
            pageName: l,
            onMenuClick: q && i ? Xt : void 0,
            showMenuButton: q && i,
            showBrand: !(ve && !q),
            headerStyles: ve && !q && i ? {
              left: `${V}px`,
              width: `calc(100% - ${V}px)`,
              transition: Je,
              ...oe
            } : oe,
            userName: U,
            userEmail: H,
            userAvatar: f,
            onProfileClick: D,
            onAccountClick: R,
            onSettingsClick: X,
            showSettings: $,
            onLogout: st,
            showNotifications: y,
            notificationCount: z,
            onNotificationBellClick: y && p ? () => Le(!0) : void 0,
            showSearchbar: M && !et,
            searchValue: E,
            onSearchChange: pe,
            onSearchSubmit: Q,
            showProfile: ue,
            userRole: ie,
            accentColor: me,
            contentBackgroundColor: ke,
            navbarBackground: Mt,
            navbarAccentColor: Ft,
            theme: k,
            showThemeToggler: h,
            onThemeToggle: ne,
            rightExtraContent: _e,
            customNavbar: et,
            customNavbarProps: Wt
          }
        ),
        i && !q && ve && /* @__PURE__ */ c(
          le,
          {
            component: "aside",
            sx: {
              width: V,
              minWidth: V,
              flexShrink: 0,
              zIndex: 2,
              // Higher z-index than app bar
              position: "sticky",
              top: 0,
              alignSelf: "flex-start",
              height: "100vh",
              transition: Je,
              ...se
            },
            children: [
              /* @__PURE__ */ t(
                Ur,
                {
                  mainLinks: r,
                  secondaryLinks: o,
                  activePath: w,
                  onLinkClick: K,
                  logo: Bt,
                  title: a,
                  sectionTitle: m,
                  activeAccentColor: me,
                  groupAccentColor: g,
                  activeForegroundColor: O,
                  surfaceBackgroundColor: _,
                  collapsed: Be,
                  onCollapsedChange: Ut,
                  expandedWidth: wt,
                  collapsedWidth: St
                }
              ),
              Y?.show && !Be && /* @__PURE__ */ t(Ve, { ...Y })
            ]
          }
        ),
        i && !q && !ve && /* @__PURE__ */ t(
          dt,
          {
            variant: "permanent",
            sx: {
              width: V,
              flexShrink: 0,
              zIndex: 2,
              // Higher z-index than app bar
              "& .MuiDrawer-paper": {
                width: V,
                boxSizing: "border-box",
                bgcolor: ke,
                borderRight: "none",
                top: d ? "60px" : 0,
                // Position below header
                height: d ? "calc(100vh - 60px)" : "100vh"
              },
              ...se
            },
            children: /* @__PURE__ */ c(
              le,
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
                    Lt,
                    {
                      variant: "rail",
                      mainLinks: r,
                      secondaryLinks: o,
                      activePath: w,
                      onLinkClick: K,
                      accentColor: me,
                      surfaceBackgroundColor: ke,
                      railShowTitles: s
                    }
                  ),
                  Y?.show && /* @__PURE__ */ t(Ve, { ...Y })
                ]
              }
            )
          }
        ),
        i && q && /* @__PURE__ */ t(
          Xr,
          {
            open: ot,
            onClose: Jt,
            mainLinks: r,
            secondaryLinks: o,
            activePath: w,
            onLinkClick: K,
            userName: U,
            userEmail: H,
            userAvatar: f,
            onLogout: st,
            onProfileClick: D,
            showNotifications: y,
            notificationCount: z,
            onNotificationBellClick: y && p ? () => {
              Ke(!1), Le(!0);
            } : void 0,
            alertProps: Y,
            accentColor: me
          }
        ),
        /* @__PURE__ */ t(
          le,
          {
            component: "main",
            sx: {
              flexGrow: 1,
              p: 3,
              width: q ? "100%" : i ? `calc(100% - ${V}px)` : "100%",
              transition: Je,
              mt: d ? "60px" : 0,
              // Account for AppNavbar height (60px)
              ml: 0,
              // Offset for sidebar on desktop
              backgroundColor: ke,
              mb: 0,
              mr: 0,
              ...ye
            },
            children: /* @__PURE__ */ c($e, { container: !0, spacing: 3, children: [
              /* @__PURE__ */ t(
                $e,
                {
                  size: {
                    xs: 12,
                    md: nt && G ? 8.5 : 12
                  },
                  sx: {
                    display: "flex",
                    flexDirection: "column"
                  },
                  children: e
                }
              ),
              nt && G && /* @__PURE__ */ t(
                $e,
                {
                  size: { xs: 12, md: 3.5 },
                  sx: {
                    display: "flex",
                    flexDirection: "column",
                    position: { xs: "static", md: "sticky" },
                    top: {
                      xs: "auto",
                      md: d ? "60px" : "0px"
                    },
                    // Stick below navbar
                    alignSelf: "flex-start",
                    height: {
                      xs: "auto",
                      md: d ? "calc(100vh - 60px - 24px - 8px)" : "calc(100vh - 24px - 8px)"
                    },
                    // Viewport - navbar - top padding - top margin
                    maxHeight: {
                      xs: "none",
                      md: d ? "calc(100vh - 60px - 24px - 8px)" : "calc(100vh - 24px - 8px)"
                    }
                    // Viewport - navbar - top padding - top margin
                  },
                  children: /* @__PURE__ */ t(G, {})
                }
              )
            ] })
          }
        ),
        y && p && /* @__PURE__ */ t(
          dt,
          {
            anchor: "right",
            open: Ht,
            onClose: () => Le(!1),
            slotProps: {
              paper: { sx: { width: 380, maxWidth: "100vw" } }
            },
            children: /* @__PURE__ */ t(
              p,
              {
                onClose: () => Le(!1)
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
  Ur as CollapsibleSidebar,
  Po as LumoraWrapper,
  Oe as clearAuthTokens,
  Po as default,
  Go as getAuthErrorMessage,
  Ie as getAuthTokens,
  Or as getCurrentUser,
  Ir as isAuthenticated,
  Qe as logAuthError,
  Ot as storeAuthTokens
};
