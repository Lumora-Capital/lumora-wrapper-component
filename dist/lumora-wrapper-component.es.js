import { jsx as t, jsxs as d, Fragment as We } from "react/jsx-runtime";
import { useTheme as Jt, useMediaQuery as qt, Box as de, CircularProgress as Qt, CssBaseline as Vt, Drawer as ct, Grid as He } from "@mui/material";
import { createTheme as Et, alpha as j, styled as Zt, useTheme as Ve, ThemeProvider as dt } from "@mui/material/styles";
import * as x from "react";
import { useMemo as ht, useState as we, useRef as ut, useEffect as $e } from "react";
import pt from "axios";
import ft from "@mui/icons-material/AccountCircleRounded";
import er from "@mui/icons-material/DarkMode";
import tr from "@mui/icons-material/LightMode";
import yt from "@mui/icons-material/LogoutRounded";
import rr from "@mui/icons-material/MenuRounded";
import or from "@mui/icons-material/NotificationsOutlined";
import nr from "@mui/icons-material/SearchRounded";
import ar from "@mui/material/AppBar";
import Ye from "@mui/material/Avatar";
import vt from "@mui/material/Badge";
import L from "@mui/material/Box";
import te from "@mui/material/Divider";
import V from "@mui/material/IconButton";
import ir from "@mui/material/InputAdornment";
import sr from "@mui/material/Menu";
import Je from "@mui/material/MenuItem";
import N from "@mui/material/Stack";
import lr from "@mui/material/TextField";
import cr from "@mui/material/Toolbar";
import ie from "@mui/material/Tooltip";
import P from "@mui/material/Typography";
import dr from "@mui/material/useMediaQuery";
import hr from "@mui/material/Card";
import ur from "@mui/material/CardContent";
import Rt from "@mui/material/Button";
import pr from "@mui/icons-material/AutoAwesomeRounded";
import fr from "@mui/icons-material/KeyboardDoubleArrowLeftRounded";
import gr from "@mui/icons-material/KeyboardDoubleArrowRightRounded";
import Ct from "@mui/material/Collapse";
import ue from "@mui/material/ListItemButton";
import pe from "@mui/material/ListItemIcon";
import ae from "@mui/material/ListItemText";
import mr from "@mui/icons-material/ExpandLess";
import xr from "@mui/icons-material/ExpandMore";
import br from "@mui/material/MenuList";
import wr from "@mui/material/Paper";
import Sr from "@mui/material/Popper";
import Er from "@mui/icons-material/NotificationsRounded";
import yr from "@mui/material/Drawer";
const R = Et(), gt = [...R.shadows], K = {
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
}, Se = {
  300: "hsl(120, 61%, 77%)",
  400: "hsl(120, 44%, 53%)",
  500: "hsl(120, 59%, 30%)",
  700: "hsl(120, 75%, 16%)",
  800: "hsl(120, 84%, 10%)"
}, he = {
  300: "hsl(45, 90%, 65%)",
  400: "hsl(45, 90%, 40%)",
  500: "hsl(45, 90%, 35%)",
  700: "hsl(45, 94%, 20%)",
  800: "hsl(45, 95%, 16%)"
}, Ee = {
  300: "hsl(0, 90%, 65%)",
  400: "hsl(0, 90%, 40%)",
  500: "hsl(0, 90%, 30%)",
  700: "hsl(0, 94%, 18%)",
  800: "hsl(0, 95%, 12%)"
}, vr = (e) => (gt[1] = e === "dark" ? "hsla(220, 30%, 5%, 0.7) 0px 4px 16px 0px, hsla(220, 25%, 10%, 0.8) 0px 8px 16px -5px" : "hsla(220, 30%, 5%, 0.07) 0px 4px 16px 0px, hsla(220, 25%, 10%, 0.07) 0px 8px 16px -5px", {
  palette: {
    mode: e,
    primary: {
      light: K[200],
      main: K[400],
      dark: K[700],
      contrastText: K[50],
      ...e === "dark" && {
        contrastText: K[50],
        light: K[300],
        main: K[400],
        dark: K[700]
      }
    },
    info: {
      light: K[100],
      main: K[300],
      dark: K[600],
      contrastText: W[50],
      ...e === "dark" && {
        contrastText: K[300],
        light: K[500],
        main: K[700],
        dark: K[900]
      }
    },
    warning: {
      light: he[300],
      main: he[400],
      dark: he[800],
      ...e === "dark" && {
        light: he[400],
        main: he[500],
        dark: he[700]
      }
    },
    error: {
      light: Ee[300],
      main: Ee[400],
      dark: Ee[800],
      ...e === "dark" && {
        light: Ee[400],
        main: Ee[500],
        dark: Ee[700]
      }
    },
    success: {
      light: Se[300],
      main: Se[400],
      dark: Se[800],
      ...e === "dark" && {
        light: Se[400],
        main: Se[500],
        dark: Se[700]
      }
    },
    grey: {
      ...W
    },
    divider: e === "dark" ? j(W[700], 0.6) : j(W[300], 0.4),
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
      warning: he[400],
      ...e === "dark" && {
        primary: "hsl(0, 0%, 100%)",
        secondary: W[400]
      }
    },
    action: {
      hover: j(W[200], 0.2),
      selected: `${j(W[200], 0.3)}`,
      ...e === "dark" && {
        hover: j(W[600], 0.2),
        selected: j(W[600], 0.3)
      }
    }
  },
  typography: {
    fontFamily: "Inter, sans-serif",
    h1: {
      fontSize: R.typography.pxToRem(48),
      fontWeight: 600,
      lineHeight: 1.2,
      letterSpacing: -0.5
    },
    h2: {
      fontSize: R.typography.pxToRem(36),
      fontWeight: 600,
      lineHeight: 1.2
    },
    h3: {
      fontSize: R.typography.pxToRem(30),
      lineHeight: 1.2
    },
    h4: {
      fontSize: R.typography.pxToRem(24),
      fontWeight: 600,
      lineHeight: 1.5
    },
    h5: {
      fontSize: R.typography.pxToRem(20),
      fontWeight: 600
    },
    h6: {
      fontSize: R.typography.pxToRem(18),
      fontWeight: 600
    },
    subtitle1: {
      fontSize: R.typography.pxToRem(18)
    },
    subtitle2: {
      fontSize: R.typography.pxToRem(14),
      fontWeight: 500
    },
    body1: {
      fontSize: R.typography.pxToRem(14)
    },
    body2: {
      fontSize: R.typography.pxToRem(14),
      fontWeight: 400
    },
    caption: {
      fontSize: R.typography.pxToRem(12),
      fontWeight: 400
    }
  },
  shape: {
    borderRadius: 8
  },
  shadows: gt
});
j(W[300], 0.4), j(W[200], 0.2), `${j(W[200], 0.3)}`, j(W[700], 0.6), j(W[600], 0.2), j(W[600], 0.3);
R.typography.pxToRem(48), R.typography.pxToRem(36), R.typography.pxToRem(30), R.typography.pxToRem(24), R.typography.pxToRem(20), R.typography.pxToRem(18), R.typography.pxToRem(18), R.typography.pxToRem(14), R.typography.pxToRem(14), R.typography.pxToRem(14), R.typography.pxToRem(12);
[
  ...R.shadows.slice(2)
];
class C extends Error {
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
}, z = {
  ACCESS_TOKEN: "lumoraAccessToken",
  REFRESH_TOKEN: "lumoraRefreshToken",
  USER: "lumoraUser"
}, ee = {
  ACCESS_TOKEN: "accessToken",
  REFRESH_TOKEN: "refreshToken",
  USER: "user"
}, Rr = () => {
  if (!(typeof window > "u" || !window.localStorage))
    try {
      const e = localStorage.getItem(ee.ACCESS_TOKEN), r = localStorage.getItem(ee.REFRESH_TOKEN), o = localStorage.getItem(ee.USER);
      e && !localStorage.getItem(z.ACCESS_TOKEN) && localStorage.setItem(z.ACCESS_TOKEN, e), r && !localStorage.getItem(z.REFRESH_TOKEN) && localStorage.setItem(z.REFRESH_TOKEN, r), o && !localStorage.getItem(z.USER) && localStorage.setItem(z.USER, o), (e || r || o) && (localStorage.removeItem(ee.ACCESS_TOKEN), localStorage.removeItem(ee.REFRESH_TOKEN), localStorage.removeItem(ee.USER));
    } catch (e) {
      console.warn("Failed to migrate legacy localStorage keys:", e);
    }
}, Ge = (e) => {
  try {
    if (typeof window > "u")
      return console.warn("localStorage access attempted on server side"), null;
    if (!window.localStorage)
      throw new C("localStorage is not available", A.STORAGE_ACCESS_DENIED);
    return window.localStorage.getItem(e);
  } catch (r) {
    throw r.name === "QuotaExceededError" ? (console.error("Storage quota exceeded"), new C(
      "Storage quota exceeded. Please clear browser data.",
      A.STORAGE_ACCESS_DENIED,
      r
    )) : r.name === "SecurityError" ? (console.error("localStorage access denied (private browsing or security settings)"), new C(
      "Access to localStorage is denied. Please check browser settings.",
      A.STORAGE_ACCESS_DENIED,
      r
    )) : (console.error("Unexpected error accessing localStorage:", r.name), new C("Failed to access storage", A.STORAGE_ACCESS_DENIED, r));
  }
}, Pe = (e, r) => {
  try {
    if (typeof window > "u")
      return console.warn("localStorage write attempted on server side"), !1;
    if (!window.localStorage)
      throw new C("localStorage is not available", A.STORAGE_ACCESS_DENIED);
    return window.localStorage.setItem(e, r), !0;
  } catch (o) {
    throw o.name === "QuotaExceededError" ? (console.error("Storage quota exceeded"), new C(
      "Storage quota exceeded. Please clear browser data.",
      A.STORAGE_ACCESS_DENIED,
      o
    )) : o.name === "SecurityError" ? (console.error("localStorage write denied (private browsing or security settings)"), new C(
      "Access to localStorage is denied. Please check browser settings.",
      A.STORAGE_ACCESS_DENIED,
      o
    )) : (console.error("Unexpected error writing to localStorage:", o.name), new C("Failed to write to storage", A.STORAGE_ACCESS_DENIED, o));
  }
}, Tt = (e) => {
  try {
    return typeof window > "u" ? (console.warn("localStorage removal attempted on server side"), !1) : window.localStorage ? (window.localStorage.removeItem(e), !0) : (console.warn("localStorage is not available"), !1);
  } catch (r) {
    return r.name !== "SecurityError" && console.warn(`Could not remove localStorage key "${e}"`), !1;
  }
}, Te = () => {
  try {
    Rr();
    const e = Ge(z.ACCESS_TOKEN), r = Ge(z.REFRESH_TOKEN), o = Ge(z.USER);
    let a = null;
    if (o)
      try {
        a = JSON.parse(o);
      } catch {
        o && o !== "null" && o !== "undefined" && console.warn("Invalid user data in localStorage, clearing:", o.substring(0, 50)), Tt(z.USER);
      }
    return {
      accessToken: e,
      refreshToken: r,
      user: a
    };
  } catch (e) {
    throw e instanceof C ? e : new C("Failed to retrieve authentication tokens", A.UNKNOWN_ERROR, e);
  }
}, Cr = () => {
  try {
    const { accessToken: e, refreshToken: r } = Te();
    return !(e || r) ? {
      isAuthenticated: !1,
      error: new C("No authentication tokens found", A.TOKEN_NOT_FOUND)
    } : {
      isAuthenticated: !0,
      error: null
    };
  } catch (e) {
    return console.error("Authentication check failed:", e), {
      isAuthenticated: !1,
      error: e instanceof C ? e : new C("Authentication check failed", A.UNKNOWN_ERROR, e)
    };
  }
}, It = (e, r, o = null) => {
  try {
    if (!e && !r)
      throw new C("At least one token must be provided", A.TOKEN_INVALID);
    return e && Pe(z.ACCESS_TOKEN, e), r && Pe(z.REFRESH_TOKEN, r), o && Pe(z.USER, JSON.stringify(o)), {
      success: !0,
      error: null
    };
  } catch (a) {
    return console.error("Failed to store authentication tokens:", a), {
      success: !1,
      error: a instanceof C ? a : new C("Failed to store tokens", A.UNKNOWN_ERROR, a)
    };
  }
}, Ie = () => {
  try {
    return [
      z.ACCESS_TOKEN,
      z.REFRESH_TOKEN,
      z.USER,
      // Also clear legacy keys for complete cleanup
      ee.ACCESS_TOKEN,
      ee.REFRESH_TOKEN,
      ee.USER
    ].map((a) => Tt(a)).every((a) => a) || console.warn("Some tokens could not be removed from localStorage"), {
      success: !0,
      error: null
    };
  } catch (e) {
    return console.error("Failed to clear authentication tokens:", e), {
      success: !1,
      error: e instanceof C ? e : new C("Failed to clear tokens", A.LOGOUT_FAILED, e)
    };
  }
}, Tr = () => {
  try {
    const { user: e } = Te();
    return {
      user: e,
      error: null
    };
  } catch (e) {
    return console.error("Failed to get current user:", e), {
      user: null,
      error: e instanceof C ? e : new C("Failed to retrieve user data", A.UNKNOWN_ERROR, e)
    };
  }
}, Bo = (e) => {
  if (!(e instanceof C))
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
}, qe = (e, r = "Unknown") => {
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
}, Ir = (e) => {
  if (!e)
    throw new Error("API base URL is required to create axios client");
  const r = pt.create({
    baseURL: e,
    headers: {
      "Content-Type": "application/json"
    }
  });
  let o = !1, a = null, l = [];
  const c = (i, s) => {
    l.forEach(({ resolve: T, reject: y }) => {
      i ? y(i) : s && T(s);
    }), l = [];
  };
  return r.interceptors.request.use(
    (i) => {
      const { accessToken: s } = Te();
      return s && i.headers && (i.headers.Authorization = `Bearer ${s}`), i;
    },
    (i) => Promise.reject(i)
  ), r.interceptors.response.use(
    (i) => i,
    async (i) => {
      const s = i.config, T = i.response?.status, y = s?.url || "", m = y.includes("/auth/refresh");
      if (T !== 401 || s._retry || m)
        return Promise.reject(i);
      s._retry = !0;
      const { refreshToken: _ } = Te();
      if (!_) {
        const g = new Error(
          "No refresh token available for token refresh"
        );
        return qe(g, "AxiosClient - Token Refresh"), Ie(), typeof window < "u" && (window.location.href = "/login"), Promise.reject(i);
      }
      if (o && a)
        return new Promise((g, O) => {
          l.push({ resolve: g, reject: O });
        }).then((g) => {
          const {
            accessToken: O,
            refreshToken: S
          } = g;
          if (s.headers && (s.headers.Authorization = `Bearer ${O}`), y.includes("/auth/logout"))
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
      o = !0, a = pt.post(
        `${e}/auth/refresh`,
        {
          refresh_token: _
        }
      );
      try {
        const g = await a, { accessToken: O, refreshToken: S } = g.data;
        if (It(O, S, null), c(null, {
          accessToken: O,
          refreshToken: S
        }), s.headers && (s.headers.Authorization = `Bearer ${O}`), y.includes("/auth/logout"))
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
        return qe(
          g,
          "AxiosClient - Token Refresh Failed"
        ), c(g), Ie(), typeof window < "u" && (window.location.href = "/login"), Promise.reject(g);
      } finally {
        o = !1, a = null;
      }
    }
  ), r;
}, Or = async (e, r) => {
  const { accessToken: o, refreshToken: a } = Te();
  if (o)
    return !0;
  if (a)
    try {
      const l = await e.post("/auth/refresh", {
        refresh_token: a
      });
      if (l.data.success && l.data.accessToken)
        return It(l.data.accessToken, l.data.refreshToken || null, null), !0;
    } catch (l) {
      qe(l, "TokenValidator - Refresh Failed");
    }
  return Ie(), r ? r() : window.location.href = "/login", !1;
}, Dr = Zt(cr)({
  width: "100%",
  padding: "8px 16px",
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
  gap: "16px",
  flexShrink: 0
}), _r = ({
  appName: e = "Dashboard",
  pageName: r = "Home",
  onMenuClick: o,
  showMenuButton: a = !0,
  showBrand: l = !0,
  headerStyles: c,
  userName: i = "User Name",
  userEmail: s,
  userAvatar: T,
  onProfileClick: y,
  onAccountClick: m,
  onSettingsClick: _,
  showSettings: g = !0,
  onLogout: O,
  showNotifications: S = !1,
  notificationCount: w = 0,
  onNotificationBellClick: U,
  theme: H = "light",
  showThemeToggler: $ = !1,
  onThemeToggle: f,
  showSearchbar: p = !0,
  searchValue: D,
  onSearchChange: v,
  onSearchSubmit: X,
  showProfile: G = !0,
  userRole: I,
  accentColor: F = "#01584f",
  contentBackgroundColor: h = "#f2f9fc",
  navbarBackground: M = "#ff0000",
  navbarAccentColor: E = "#000000",
  rightExtraContent: se = [],
  customNavbar: Y,
  customNavbarProps: ye
}) => {
  const fe = dr((u) => u.breakpoints.up("md")), [re, J] = x.useState(null), le = !!re, oe = H === "dark", ce = oe ? "Switch to light mode" : "Switch to dark mode", ge = (u) => {
    v?.(u.target.value);
  }, me = (u) => {
    u.key === "Enter" && X && D && X(D);
  }, n = (u) => u ? u.charAt(0).toUpperCase() + u.slice(1).toLowerCase() : "User", b = (u) => {
    J(u.currentTarget);
  }, B = () => {
    J(null);
  }, k = (u) => {
    u?.(), B();
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
        ...c
      },
      children: /* @__PURE__ */ d(Dr, { variant: "dense", sx: { height: "100%" }, children: [
        /* @__PURE__ */ d(
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
              a && !fe && /* @__PURE__ */ t(
                V,
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
              l && /* @__PURE__ */ d(
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
              Y ? /* @__PURE__ */ t(Y, { ...ye || {} }) : p && fe && /* @__PURE__ */ t(
                lr,
                {
                  placeholder: "Search for deals or documents...",
                  value: D || "",
                  onChange: ge,
                  onKeyDown: me,
                  size: "small",
                  sx: {
                    width: "400px",
                    "& .MuiOutlinedInput-root": {
                      backgroundColor: h,
                      borderRadius: "8px",
                      "& fieldset": {
                        borderColor: "transparent"
                      },
                      "&:hover fieldset": {
                        borderColor: "transparent"
                      },
                      "&.Mui-focused fieldset": {
                        borderColor: F
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
        /* @__PURE__ */ d(
          N,
          {
            direction: "row",
            sx: {
              alignItems: "center",
              gap: 1.5,
              flexShrink: 0
            },
            children: [
              $ && /* @__PURE__ */ t(ie, { title: ce, placement: "bottom", children: /* @__PURE__ */ t("span", { children: /* @__PURE__ */ t(
                V,
                {
                  size: "small",
                  onClick: f,
                  disabled: !f,
                  "aria-label": ce,
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
                vt,
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
                    V,
                    {
                      size: "small",
                      onClick: U,
                      "aria-label": w ? `Notifications, ${w} unread` : "Notifications",
                      sx: { color: E },
                      children: /* @__PURE__ */ t(or, {})
                    }
                  )
                }
              ),
              S && G && /* @__PURE__ */ t(
                te,
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
              G && /* @__PURE__ */ d(We, { children: [
                /* @__PURE__ */ d(
                  N,
                  {
                    direction: "row",
                    onClick: b,
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
                        ft,
                        {
                          sx: {
                            width: 32,
                            height: 32,
                            color: E
                          }
                        }
                      ),
                      /* @__PURE__ */ d(
                        L,
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
                                children: n(I)
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
                    anchorEl: re,
                    open: le,
                    onClose: B,
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
                          Je,
                          {
                            onClick: () => k(_),
                            children: "Settings"
                          },
                          "settings"
                        ),
                        /* @__PURE__ */ t(te, {}, "settings-divider")
                      ],
                      /* @__PURE__ */ d(
                        Je,
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
                            /* @__PURE__ */ t(yt, { fontSize: "small" })
                          ]
                        }
                      )
                    ]
                  }
                )
              ] }),
              se.length !== 0 && se.map((u) => u.type === "divider" ? /* @__PURE__ */ t(
                te,
                {
                  orientation: "vertical",
                  flexItem: !0,
                  sx: {
                    borderColor: "rgba(0, 0, 0, 0.12)",
                    height: "24px",
                    alignSelf: "center"
                  }
                },
                u.key
              ) : u.type === "profile" ? /* @__PURE__ */ t(
                ie,
                {
                  title: u.tooltip || "",
                  disableHoverListener: !u.tooltip,
                  arrow: !0,
                  children: /* @__PURE__ */ d(
                    N,
                    {
                      direction: "row",
                      onClick: u.disabled ? void 0 : u.onClick,
                      sx: {
                        alignItems: "center",
                        gap: 1,
                        cursor: u.disabled ? "not-allowed" : "pointer",
                        borderRadius: "8px",
                        padding: "4px 8px",
                        opacity: u.disabled ? 0.5 : 1,
                        transition: "opacity 0.2s",
                        ...!u.disabled && {
                          "&:hover": {
                            backgroundColor: "action.hover"
                          }
                        }
                      },
                      children: [
                        u.avatar ? /* @__PURE__ */ t(
                          Ye,
                          {
                            src: u.avatar,
                            sx: {
                              width: 32,
                              height: 32
                            }
                          }
                        ) : /* @__PURE__ */ t(
                          ft,
                          {
                            sx: {
                              width: 32,
                              height: 32,
                              color: E
                            }
                          }
                        ),
                        /* @__PURE__ */ d(
                          L,
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
                                  children: u.name
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
                                  children: u.role
                                }
                              )
                            ]
                          }
                        )
                      ]
                    }
                  )
                },
                u.key
              ) : null)
            ]
          }
        )
      ] })
    }
  );
}, Qe = ({
  title: e = "",
  message: r = "",
  buttonText: o = "",
  onButtonClick: a,
  show: l = !0
}) => l ? /* @__PURE__ */ t(hr, { variant: "outlined", sx: { m: 1.5, flexShrink: 0 }, children: /* @__PURE__ */ d(ur, { children: [
  /* @__PURE__ */ t(pr, { fontSize: "small" }),
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
    Rt,
    {
      variant: "contained",
      size: "small",
      fullWidth: !0,
      onClick: a,
      children: o
    }
  )
] }) }) : null, Me = (e, r) => r ? e.path && r === e.path ? !0 : e.subitems?.some((o) => o.path === r) ?? !1 : !1, ze = (e, r) => !!(r && e.path === r), Ar = (e) => {
  const r = Ot(e);
  if (!r)
    return "#ffffff";
  const [o, a, l] = r.map((i) => {
    const s = i / 255;
    return s <= 0.03928 ? s / 12.92 : ((s + 0.055) / 1.055) ** 2.4;
  });
  return 0.2126 * o + 0.7152 * a + 0.0722 * l > 0.5 ? "#0b1f1c" : "#ffffff";
}, Nr = (e) => {
  const r = Ot(e);
  if (!r)
    return "rgba(1, 88, 79, 0.12)";
  const [o, a, l] = r;
  return `rgba(${o}, ${a}, ${l}, 0.14)`;
}, Ot = (e) => {
  let r = e.trim().replace(/^#/, "");
  if (r.length === 3 && (r = r.split("").map((a) => a + a).join("")), r.length !== 6 || /[^0-9a-fA-F]/.test(r))
    return null;
  const o = parseInt(r, 16);
  return [o >> 16 & 255, o >> 8 & 255, o & 255];
}, Dt = () => typeof window < "u" && !!window.localStorage, _t = (e) => {
  if (!Dt())
    return null;
  try {
    const r = window.localStorage.getItem(e);
    return r === null ? null : r === "true";
  } catch (r) {
    return console.warn("Failed to read sidebar collapsed state:", r), null;
  }
}, At = (e, r) => {
  if (Dt())
    try {
      window.localStorage.setItem(e, r ? "true" : "false");
    } catch (o) {
      console.warn("Failed to persist sidebar collapsed state:", o);
    }
}, kr = 264, Lr = 72, Wr = "lumora:sidebar-collapsed", Mr = "width 200ms ease", zr = 180, je = ({ text: e }) => {
  const r = x.useRef(null), [o, a] = x.useState(!1), l = x.useCallback(() => {
    const c = r.current;
    c && a(c.scrollWidth > c.clientWidth + 0.5);
  }, []);
  return x.useLayoutEffect(() => {
    l();
  }, [l, e]), x.useEffect(() => {
    const c = r.current;
    if (!c)
      return;
    const i = new ResizeObserver(() => l());
    return i.observe(c), () => i.disconnect();
  }, [l]), /* @__PURE__ */ t(
    ie,
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
}, mt = ({ testId: e, children: r }) => {
  const [o, a] = x.useState(!1), l = x.useRef(
    null
  ), c = () => {
    l.current && (clearTimeout(l.current), l.current = null);
  }, i = () => {
    c(), a(!0);
  }, s = () => {
    c(), l.current = setTimeout(() => {
      a(!1), l.current = null;
    }, zr);
  };
  return x.useEffect(() => c, []), /* @__PURE__ */ t(
    L,
    {
      "data-testid": e,
      sx: { width: "100%" },
      onMouseEnter: i,
      onMouseLeave: s,
      onFocus: i,
      onBlur: s,
      children: r(o)
    }
  );
}, Fr = ({
  mainLinks: e,
  secondaryLinks: r = [],
  activePath: o,
  onLinkClick: a,
  logo: l,
  title: c,
  sectionTitle: i,
  activeAccentColor: s = "#01584f",
  groupAccentColor: T,
  activeForegroundColor: y,
  surfaceBackgroundColor: m,
  collapsed: _,
  defaultCollapsed: g = !1,
  onCollapsedChange: O,
  persistKey: S = Wr,
  expandedWidth: w = kr,
  collapsedWidth: U = Lr
}) => {
  const H = Ve(), $ = H.palette.mode === "dark", f = _ !== void 0, [p, D] = x.useState(
    () => _t(S) ?? g
  ), v = f ? !!_ : p, [X, G] = x.useState(
    {}
  ), I = s, F = y ?? Ar(I), h = T ?? Nr(I), M = m ?? ($ ? H.palette.background.paper : "#ffffff"), E = $ ? "text.primary" : I, se = (n) => {
    f || (D(n), At(S, n)), O?.(n);
  }, Y = (n) => {
    a?.(n);
  }, ye = (n) => {
    G((b) => ({ ...b, [n]: !b[n] }));
  }, fe = (n) => {
    const b = !!(n.path && o === n.path);
    return /* @__PURE__ */ d(
      ue,
      {
        disabled: !n.path,
        selected: b,
        onClick: () => n.path && Y(n.path),
        "data-testid": `sidebar-item-${n.text}`,
        "data-active": b ? "true" : "false",
        sx: {
          borderRadius: "6px",
          py: 1,
          px: 1.5,
          color: b ? F : E,
          bgcolor: b ? I : "transparent",
          "& .MuiListItemIcon-root": {
            color: b ? F : E,
            minWidth: 36
          },
          "&:hover": {
            bgcolor: b ? I : h
          },
          "&.Mui-selected, &.Mui-selected:hover": {
            bgcolor: I
          }
        },
        children: [
          /* @__PURE__ */ t(pe, { children: n.icon }),
          /* @__PURE__ */ t(
            ae,
            {
              disableTypography: !0,
              primary: /* @__PURE__ */ t(je, { text: n.text })
            }
          )
        ]
      },
      n.text
    );
  }, re = (n) => {
    const b = Me(n, o), B = !!(n.path && o === n.path), k = b || !!X[n.text], u = (q) => /* @__PURE__ */ d(
      L,
      {
        "data-testid": `sidebar-group-${n.text}`,
        sx: {
          borderRadius: "6px",
          bgcolor: q ? h : "transparent"
        },
        children: [
          /* @__PURE__ */ d(
            ue,
            {
              onClick: () => n.path ? Y(n.path) : ye(n.text),
              "data-testid": `sidebar-item-${n.text}`,
              "data-active": B ? "true" : "false",
              sx: {
                borderRadius: "6px",
                py: 1,
                px: 1.5,
                color: B ? F : E,
                bgcolor: B ? I : "transparent",
                "& .MuiListItemIcon-root": {
                  color: B ? F : E,
                  minWidth: 36
                },
                "&:hover": {
                  bgcolor: B ? I : q ? "transparent" : h
                }
              },
              children: [
                /* @__PURE__ */ t(pe, { children: n.icon }),
                /* @__PURE__ */ t(
                  ae,
                  {
                    disableTypography: !0,
                    primary: /* @__PURE__ */ t(je, { text: n.text })
                  }
                )
              ]
            }
          ),
          /* @__PURE__ */ t(Ct, { in: q, timeout: "auto", unmountOnExit: !0, children: /* @__PURE__ */ t(
            L,
            {
              "data-testid": `sidebar-children-${n.text}`,
              sx: { pb: 0.5 },
              children: n.subitems.map((ne) => J(ne))
            }
          ) })
        ]
      }
    );
    return /* @__PURE__ */ t(
      mt,
      {
        testId: `sidebar-group-hover-${n.text}`,
        children: (q) => u(k || q)
      },
      n.text
    );
  }, J = (n) => {
    const b = ze(n, o);
    return /* @__PURE__ */ d(
      ue,
      {
        selected: b,
        onClick: () => Y(n.path),
        "data-testid": `sidebar-subitem-${n.text}`,
        "data-active": b ? "true" : "false",
        sx: {
          borderRadius: "6px",
          mx: 0.5,
          py: 0.75,
          pl: 4,
          color: b ? F : E,
          bgcolor: b ? I : "transparent",
          "& .MuiListItemIcon-root": {
            color: b ? F : E,
            minWidth: 32
          },
          "&:hover": {
            bgcolor: b ? I : "action.hover"
          },
          "&.Mui-selected, &.Mui-selected:hover": {
            bgcolor: I
          }
        },
        children: [
          n.icon ? /* @__PURE__ */ t(pe, { children: n.icon }) : null,
          /* @__PURE__ */ t(
            ae,
            {
              disableTypography: !0,
              primary: /* @__PURE__ */ t(je, { text: n.text })
            }
          )
        ]
      },
      n.path
    );
  }, le = (n, b, B, k, u, q) => {
    const ne = !u, Oe = /* @__PURE__ */ t(
      V,
      {
        "aria-label": b,
        disabled: ne,
        onClick: u,
        "data-testid": q?.testId ?? `sidebar-item-${b}`,
        "data-active": k ? "true" : "false",
        sx: {
          width: 44,
          height: 44,
          color: k ? F : E,
          bgcolor: k ? I : "transparent",
          borderRadius: k ? "8px" : "50%",
          "&:hover": {
            bgcolor: k ? I : q?.insideGroup ? "action.hover" : h,
            borderRadius: "8px"
          }
        },
        children: B
      }
    );
    return /* @__PURE__ */ t(ie, { title: b, placement: "right", arrow: !0, children: ne ? /* @__PURE__ */ t("span", { children: Oe }) : Oe }, n);
  }, oe = (n, b) => {
    const B = !!(n.path && o === n.path), k = le(
      n.text,
      n.text,
      n.icon,
      B,
      n.path ? () => Y(n.path) : b ? void 0 : () => se(!1),
      { insideGroup: !0 }
    );
    return b ? /* @__PURE__ */ d(
      L,
      {
        "data-testid": `sidebar-group-${n.text}`,
        sx: {
          width: "100%",
          borderRadius: "10px",
          bgcolor: h,
          py: 0.5,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 0.5
        },
        children: [
          k,
          n.subitems.map(
            (u) => le(
              u.path,
              u.text,
              u.icon ?? n.icon,
              ze(u, o),
              () => Y(u.path),
              {
                insideGroup: !0,
                testId: `sidebar-subitem-${u.text}`
              }
            )
          )
        ]
      }
    ) : k;
  }, ce = (n) => n.subitems?.length ? Me(n, o) ? /* @__PURE__ */ t(x.Fragment, { children: oe(n, !0) }, n.text) : /* @__PURE__ */ t(
    mt,
    {
      testId: `sidebar-group-hover-${n.text}`,
      children: (k) => oe(n, k)
    },
    n.text
  ) : le(
    n.text,
    n.text,
    n.icon,
    !!(n.path && o === n.path),
    n.path ? () => Y(n.path) : void 0
  ), ge = (n) => v ? ce(n) : n.subitems?.length ? re(n) : fe(n), me = v ? U : w;
  return /* @__PURE__ */ d(
    L,
    {
      component: "nav",
      "aria-label": "Main sidebar",
      "data-testid": "collapsible-sidebar",
      "data-collapsed": v ? "true" : "false",
      sx: {
        width: me,
        minWidth: me,
        height: "100%",
        boxSizing: "border-box",
        bgcolor: M,
        display: "flex",
        flexDirection: "column",
        overflowX: "hidden",
        overflowY: "auto",
        transition: Mr,
        px: v ? 1 : 2,
        py: 2
      },
      children: [
        /* @__PURE__ */ d(
          N,
          {
            direction: "row",
            alignItems: "center",
            justifyContent: v ? "center" : "flex-start",
            spacing: 1.5,
            sx: { minHeight: 40, px: v ? 0 : 0.5 },
            children: [
              !v && c ? /* @__PURE__ */ t(
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
                  children: c
                }
              ) : null,
              l ? /* @__PURE__ */ t(
                L,
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
        /* @__PURE__ */ d(
          N,
          {
            direction: "row",
            alignItems: "center",
            justifyContent: v ? "center" : "space-between",
            sx: { mt: 2, mb: 1, minHeight: 32 },
            children: [
              !v && i ? /* @__PURE__ */ t(
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
                ie,
                {
                  title: v ? "Expand sidebar" : "Collapse sidebar",
                  placement: "right",
                  arrow: !0,
                  children: /* @__PURE__ */ t(
                    V,
                    {
                      size: "small",
                      "aria-label": v ? "Expand sidebar" : "Collapse sidebar",
                      "data-testid": "sidebar-toggle",
                      onClick: () => se(!v),
                      disableFocusRipple: !0,
                      sx: {
                        color: E,
                        "&:focus, &:focus-visible": { outline: "none" }
                      },
                      children: v ? /* @__PURE__ */ t(gr, { fontSize: "small" }) : /* @__PURE__ */ t(fr, { fontSize: "small" })
                    }
                  )
                }
              )
            ]
          }
        ),
        /* @__PURE__ */ t(N, { spacing: 0.5, sx: { width: "100%" }, children: e.map((n) => ge(n)) }),
        r.length > 0 ? /* @__PURE__ */ d(L, { sx: { mt: "auto", pt: 2 }, children: [
          /* @__PURE__ */ t(te, { sx: { mb: 1, borderColor: "divider" } }),
          /* @__PURE__ */ t(N, { spacing: 0.5, sx: { width: "100%" }, children: r.map((n) => ge(n)) })
        ] }) : null
      ]
    }
  );
}, Br = 180, xt = 250, Nt = ({
  text: e,
  testId: r
}) => {
  const o = x.useRef(null), [a, l] = x.useState(!1), c = x.useCallback(() => {
    const i = o.current;
    i && l(i.scrollWidth > i.clientWidth + 0.5);
  }, []);
  return x.useLayoutEffect(() => {
    c();
  }, [c, e]), x.useEffect(() => {
    const i = o.current;
    if (!i)
      return;
    const s = new ResizeObserver(() => c());
    return s.observe(i), () => s.disconnect();
  }, [c]), /* @__PURE__ */ t(
    ie,
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
}, Kr = ({
  link: e,
  activePath: r,
  onLinkClick: o,
  accentColor: a,
  isSecondary: l,
  surfaceBackgroundColor: c,
  railShowTitles: i = !1
}) => {
  const s = Ve(), [T, y] = x.useState(null), [m, _] = x.useState(!1), g = x.useRef(
    null
  ), O = x.useRef(null), S = x.useRef(null), w = x.useRef(!1), U = x.useRef(!1), H = x.useId(), $ = () => {
    g.current && (clearTimeout(g.current), g.current = null);
  }, f = () => {
    $(), g.current = setTimeout(() => {
      _(!1), g.current = null;
    }, Br);
  }, p = () => {
    $(), _(!0);
  };
  x.useEffect(() => {
    if (!m)
      return;
    const h = (M) => {
      M.key === "Escape" && (_(!1), S.current?.focus());
    };
    return document.addEventListener("keydown", h), () => document.removeEventListener("keydown", h);
  }, [m]), x.useEffect(() => {
    if (!m || !U.current)
      return;
    const h = globalThis.requestAnimationFrame(() => {
      O.current?.querySelector(
        '[role="menuitem"]'
      )?.focus(), U.current = !1;
    });
    return () => cancelAnimationFrame(h);
  }, [m]);
  const D = Me(e, r), v = l ? 48 : 44, X = l ? "text.secondary" : a, G = l ? "#01584F" : a, I = {
    width: "100%",
    maxWidth: "100%",
    minWidth: v,
    height: "auto",
    minHeight: v,
    flexDirection: "column",
    py: 0.5,
    // Horizontal padding so labels (esp. active fill) do not touch the box edges
    px: 1,
    borderRadius: "4px",
    color: D ? "#ffffff" : X,
    backgroundColor: D ? G : "transparent",
    "&:hover": {
      backgroundColor: D ? G : "action.hover",
      borderRadius: "4px",
      color: D ? "#ffffff" : X
    }
  }, F = i ? /* @__PURE__ */ t(
    V,
    {
      ref: S,
      component: e.path ? "a" : "button",
      href: e.path || void 0,
      "aria-label": e.text,
      onFocus: () => {
        w.current || p();
      },
      onBlur: (h) => {
        const M = h.relatedTarget;
        M && O.current?.contains(M) || f();
      },
      onKeyDown: (h) => {
        h.key === "ArrowDown" && (h.preventDefault(), U.current = !0, p());
      },
      onClick: (h) => {
        h.preventDefault(), h.stopPropagation(), e.path && o?.(e.path);
      },
      "aria-haspopup": "menu",
      "aria-expanded": m,
      "aria-controls": m ? H : void 0,
      "data-testid": `rail-submenu-trigger-${e.text}`,
      sx: I,
      children: /* @__PURE__ */ d(N, { alignItems: "center", spacing: 1, sx: { width: "100%" }, children: [
        /* @__PURE__ */ t(
          L,
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
          Nt,
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
      ref: S,
      component: e.path ? "a" : "button",
      href: e.path || void 0,
      "aria-label": e.text,
      onFocus: () => {
        w.current || p();
      },
      onBlur: (h) => {
        const M = h.relatedTarget;
        M && O.current?.contains(M) || f();
      },
      onKeyDown: (h) => {
        h.key === "ArrowDown" && (h.preventDefault(), U.current = !0, p());
      },
      onClick: (h) => {
        h.preventDefault(), h.stopPropagation(), e.path && o?.(e.path);
      },
      "aria-haspopup": "menu",
      "aria-expanded": m,
      "aria-controls": m ? H : void 0,
      "data-testid": `rail-submenu-trigger-${e.text}`,
      sx: {
        width: v,
        height: v,
        color: D ? "#ffffff" : X,
        backgroundColor: D ? G : "transparent",
        borderRadius: D ? "4px" : "50%",
        "&:hover": {
          backgroundColor: D ? G : "action.hover",
          borderRadius: "4px"
        }
      },
      children: e.icon
    }
  );
  return /* @__PURE__ */ d(
    L,
    {
      sx: {
        width: "100%",
        display: "flex",
        justifyContent: "center"
      },
      children: [
        /* @__PURE__ */ t(
          L,
          {
            ref: y,
            "data-testid": `rail-submenu-anchor-${e.text}`,
            sx: { display: "inline-flex", maxWidth: "100%" },
            onMouseEnter: () => {
              w.current = !0, p();
            },
            onMouseLeave: () => {
              w.current = !1, f();
            },
            children: i ? F : /* @__PURE__ */ t(ie, { title: e.text, placement: "right", arrow: !0, children: F })
          }
        ),
        /* @__PURE__ */ t(
          Sr,
          {
            open: m && !!T,
            anchorEl: T,
            placement: "right-start",
            modifiers: [{ name: "offset", options: { offset: [8, 0] } }],
            sx: { zIndex: (h) => h.zIndex.modal },
            children: /* @__PURE__ */ t(
              wr,
              {
                ref: O,
                elevation: 0,
                onMouseEnter: () => {
                  $();
                },
                onMouseLeave: f,
                "data-testid": `rail-submenu-panel-${e.text}`,
                sx: {
                  bgcolor: c,
                  backgroundImage: "none",
                  borderRadius: "4px",
                  border: "1px solid",
                  borderColor: "divider",
                  boxShadow: s.shadows[8],
                  maxWidth: xt,
                  minWidth: 0,
                  py: 0.5,
                  boxSizing: "border-box"
                },
                children: /* @__PURE__ */ t(
                  br,
                  {
                    id: H,
                    dense: !0,
                    autoFocus: !1,
                    role: "menu",
                    sx: {
                      bgcolor: "transparent",
                      py: 0,
                      maxWidth: xt
                    },
                    children: e.subitems.map((h) => /* @__PURE__ */ d(
                      Je,
                      {
                        role: "menuitem",
                        title: h.text,
                        selected: ze(h, r),
                        onClick: (M) => {
                          M.preventDefault(), o?.(h.path), _(!1);
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
                          h.icon ? /* @__PURE__ */ t(pe, { children: h.icon }) : null,
                          /* @__PURE__ */ t(
                            ae,
                            {
                              primary: h.text,
                              primaryTypographyProps: {
                                noWrap: !0
                              }
                            }
                          )
                        ]
                      },
                      h.path
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
}, Ur = ({
  link: e,
  activePath: r,
  onLinkClick: o,
  accentColor: a,
  isSecondary: l,
  railShowTitles: c = !1
}) => {
  const i = !!(e.path && r === e.path), s = l ? 48 : 44, T = l ? "text.secondary" : a, y = l ? "#01584F" : a, m = {
    width: "100%",
    maxWidth: "100%",
    minWidth: s,
    height: "auto",
    minHeight: s,
    flexDirection: "column",
    py: 0.5,
    px: 1,
    borderRadius: "4px",
    color: i ? "#ffffff" : T,
    backgroundColor: i ? y : "transparent",
    "&:hover": {
      backgroundColor: i ? y : "action.hover",
      borderRadius: "4px",
      color: i ? "#ffffff" : T
    }
  }, _ = c ? /* @__PURE__ */ t(
    V,
    {
      component: e.path ? "a" : "button",
      href: e.path || void 0,
      "aria-label": e.text,
      onClick: (g) => {
        g.preventDefault(), g.stopPropagation(), e.path && o?.(e.path);
      },
      disabled: !e.path,
      sx: m,
      children: /* @__PURE__ */ d(N, { alignItems: "center", spacing: 1, sx: { width: "100%" }, children: [
        /* @__PURE__ */ t(
          L,
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
          Nt,
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
      onClick: (g) => {
        g.preventDefault(), g.stopPropagation(), e.path && o?.(e.path);
      },
      disabled: !e.path,
      sx: {
        width: s,
        height: s,
        color: i ? "#ffffff" : T,
        backgroundColor: i ? y : "transparent",
        borderRadius: i ? "4px" : "50%",
        "&:hover": {
          backgroundColor: i ? y : "action.hover",
          borderRadius: "4px"
        }
      },
      children: e.icon
    }
  );
  return c ? _ : /* @__PURE__ */ t(ie, { title: e.text, placement: "right", arrow: !0, children: _ });
}, Hr = ({
  link: e,
  expanded: r,
  onToggle: o,
  activePath: a,
  onLinkClick: l,
  accentColor: c,
  isSecondary: i
}) => {
  const s = Me(e, a), T = i ? "text.secondary" : c, y = i ? "#01584F" : c;
  return /* @__PURE__ */ d(We, { children: [
    /* @__PURE__ */ d(
      ue,
      {
        onClick: o,
        sx: {
          py: 1.5,
          px: 2,
          color: s ? "#ffffff" : T,
          bgcolor: s ? y : "transparent",
          "&:hover": {
            bgcolor: s ? y : "action.hover"
          }
        },
        "data-testid": `drawer-expand-trigger-${e.text}`,
        children: [
          /* @__PURE__ */ t(pe, { sx: { color: "inherit", minWidth: 40 }, children: e.icon }),
          /* @__PURE__ */ t(ae, { primary: e.text }),
          r ? /* @__PURE__ */ t(mr, {}) : /* @__PURE__ */ t(xr, {})
        ]
      }
    ),
    /* @__PURE__ */ t(Ct, { in: r, timeout: "auto", unmountOnExit: !0, children: /* @__PURE__ */ d(L, { component: "nav", "aria-label": e.text, children: [
      e.path ? /* @__PURE__ */ t(
        ue,
        {
          sx: { pl: 4, py: 1 },
          onClick: () => e.path && l?.(e.path),
          selected: !!(a && a === e.path),
          "data-testid": `drawer-parent-path-${e.text}`,
          children: /* @__PURE__ */ t(ae, { primary: e.text })
        }
      ) : null,
      e.subitems.map((m) => /* @__PURE__ */ d(
        ue,
        {
          sx: { pl: 4, py: 1 },
          onClick: () => l?.(m.path),
          selected: ze(m, a),
          children: [
            m.icon ? /* @__PURE__ */ t(pe, { sx: { minWidth: 36 }, children: m.icon }) : null,
            /* @__PURE__ */ t(ae, { primary: m.text })
          ]
        },
        m.path
      ))
    ] }) })
  ] });
}, $r = ({
  link: e,
  activePath: r,
  onLinkClick: o,
  accentColor: a,
  isSecondary: l
}) => {
  const c = !!(e.path && r === e.path), i = l ? "text.secondary" : a, s = l ? "#01584F" : a;
  return /* @__PURE__ */ d(
    ue,
    {
      disabled: !e.path,
      onClick: () => e.path && o?.(e.path),
      sx: {
        py: 1.5,
        px: 2,
        color: c ? "#ffffff" : i,
        bgcolor: c ? s : "transparent",
        "&:hover": {
          bgcolor: c ? s : "action.hover"
        }
      },
      children: [
        /* @__PURE__ */ t(pe, { sx: { color: "inherit", minWidth: 40 }, children: e.icon }),
        /* @__PURE__ */ t(ae, { primary: e.text })
      ]
    }
  );
}, Le = () => /* @__PURE__ */ t(
  L,
  {
    sx: {
      width: "100%",
      display: "flex",
      justifyContent: "center"
    },
    children: /* @__PURE__ */ t(te, { sx: { width: "60%", borderColor: "divider" } })
  }
), kt = ({
  variant: e,
  mainLinks: r,
  secondaryLinks: o = [],
  activePath: a,
  onLinkClick: l,
  accentColor: c = "#01584f",
  surfaceBackgroundColor: i,
  railShowTitles: s = !1
}) => {
  const T = Ve(), y = i ?? T.palette.background.paper, m = (f) => {
    l && l(f);
  }, [_, g] = x.useState({}), [O, S] = x.useState({}), w = (f) => {
    g((p) => ({
      ...p,
      [f]: !p[f]
    }));
  }, U = (f) => {
    S((p) => ({
      ...p,
      [f]: !p[f]
    }));
  }, H = (f, p) => f.subitems?.length ? /* @__PURE__ */ t(
    Kr,
    {
      link: f,
      activePath: a,
      onLinkClick: m,
      accentColor: c,
      isSecondary: p,
      surfaceBackgroundColor: y,
      railShowTitles: s
    }
  ) : /* @__PURE__ */ t(
    Ur,
    {
      link: f,
      activePath: a,
      onLinkClick: m,
      accentColor: c,
      isSecondary: p,
      railShowTitles: s
    }
  ), $ = (f, p, D) => {
    if (f.subitems?.length) {
      const v = D ? !!O[p] : !!_[p];
      return /* @__PURE__ */ t(
        Hr,
        {
          link: f,
          expanded: v,
          onToggle: () => D ? U(p) : w(p),
          activePath: a,
          onLinkClick: m,
          accentColor: c,
          isSecondary: D
        }
      );
    }
    return /* @__PURE__ */ t(
      $r,
      {
        link: f,
        activePath: a,
        onLinkClick: m,
        accentColor: c,
        isSecondary: D
      }
    );
  };
  return e === "drawer" ? /* @__PURE__ */ d(
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
        /* @__PURE__ */ t(N, { sx: { width: "100%" }, children: r.map((f, p) => /* @__PURE__ */ d(x.Fragment, { children: [
          $(f, p, !1),
          p < r.length - 1 ? /* @__PURE__ */ t(Le, {}) : null
        ] }, p)) }),
        o.length > 0 ? /* @__PURE__ */ d(We, { children: [
          /* @__PURE__ */ t(
            L,
            {
              sx: {
                width: "100%",
                my: 2,
                display: "flex",
                justifyContent: "center"
              },
              children: /* @__PURE__ */ t(
                te,
                {
                  sx: { width: "60%", borderColor: "divider" }
                }
              )
            }
          ),
          /* @__PURE__ */ t(L, { sx: { mt: "auto", pb: 2 }, children: /* @__PURE__ */ t(N, { sx: { width: "100%" }, children: o.map((f, p) => /* @__PURE__ */ d(x.Fragment, { children: [
            $(f, p, !0),
            p < o.length - 1 ? /* @__PURE__ */ t(Le, {}) : null
          ] }, p)) }) })
        ] }) : null
      ]
    }
  ) : /* @__PURE__ */ d(
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
        r.map((f, p) => /* @__PURE__ */ d(x.Fragment, { children: [
          H(f, !1),
          p < r.length - 1 ? /* @__PURE__ */ t(Le, {}) : null
        ] }, p)),
        o.length > 0 ? /* @__PURE__ */ d(We, { children: [
          /* @__PURE__ */ t(
            L,
            {
              sx: {
                width: "100%",
                my: 2,
                display: "flex",
                justifyContent: "center"
              },
              children: /* @__PURE__ */ t(
                te,
                {
                  sx: { width: "60%", borderColor: "divider" }
                }
              )
            }
          ),
          /* @__PURE__ */ t(L, { sx: { mt: "auto", pb: 2 }, children: /* @__PURE__ */ t(
            N,
            {
              gap: s ? 1.25 : 1,
              alignItems: "center",
              children: o.map((f, p) => /* @__PURE__ */ d(x.Fragment, { children: [
                H(f, !0),
                p < o.length - 1 ? /* @__PURE__ */ t(Le, {}) : null
              ] }, p))
            }
          ) })
        ] }) : null
      ]
    }
  );
}, Gr = ({
  open: e,
  onClose: r,
  mainLinks: o,
  secondaryLinks: a = [],
  activePath: l,
  onLinkClick: c,
  userName: i = "User Name",
  userAvatar: s,
  onLogout: T,
  showNotifications: y = !1,
  notificationCount: m = 0,
  onNotificationBellClick: _,
  alertProps: g,
  accentColor: O = "#01584f"
}) => /* @__PURE__ */ t(
  yr,
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
    children: /* @__PURE__ */ d(
      N,
      {
        sx: {
          maxWidth: "70dvw",
          height: "100%"
        },
        children: [
          /* @__PURE__ */ d(N, { direction: "row", sx: { p: 2, pb: 0, gap: 1 }, children: [
            /* @__PURE__ */ d(
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
            y && /* @__PURE__ */ t(
              vt,
              {
                color: "error",
                badgeContent: m,
                invisible: m === 0,
                sx: { "& .MuiBadge-badge": { right: 2, top: 2 } },
                children: /* @__PURE__ */ t(
                  V,
                  {
                    size: "small",
                    onClick: _,
                    "aria-label": "Notifications",
                    children: /* @__PURE__ */ t(Er, {})
                  }
                )
              }
            )
          ] }),
          /* @__PURE__ */ t(te, {}),
          /* @__PURE__ */ d(N, { sx: { flexGrow: 1 }, children: [
            /* @__PURE__ */ t(
              kt,
              {
                variant: "drawer",
                mainLinks: o,
                secondaryLinks: a,
                activePath: l,
                onLinkClick: (w) => {
                  c?.(w), r();
                },
                accentColor: O
              }
            ),
            /* @__PURE__ */ t(te, {})
          ] }),
          g?.show && /* @__PURE__ */ t(Qe, { ...g }),
          /* @__PURE__ */ t(N, { sx: { p: 2 }, children: /* @__PURE__ */ t(
            Rt,
            {
              variant: "outlined",
              fullWidth: !0,
              startIcon: /* @__PURE__ */ t(yt, {}),
              onClick: T,
              children: "Logout"
            }
          ) })
        ]
      }
    )
  }
), Pr = 100, bt = 264, wt = 72, St = "lumora:sidebar-collapsed", Xe = "width 200ms ease, left 200ms ease", Ko = ({
  children: e,
  sidebarLinks: r = [],
  secondarySidebarLinks: o = [],
  appName: a = "Dashboard",
  pageName: l = "Home",
  showHeader: c = !0,
  showSidebar: i = !0,
  showSidebarRailTitles: s = !1,
  sidebarVariant: T = "rail",
  logo: y,
  sidebarSectionTitle: m,
  sidebarBackgroundColor: _,
  groupAccentColor: g,
  activeSidebarForegroundColor: O,
  enableRefreshToken: S = !1,
  activePath: w,
  onLinkClick: U,
  userName: H,
  userEmail: $,
  userAvatar: f,
  onLogout: p,
  onProfileClick: D,
  onAccountClick: v,
  onSettingsClick: X,
  showSettings: G = !0,
  showNotifications: I = !0,
  notificationCount: F = 0,
  NotificationSidebarContent: h,
  showSearchbar: M = !0,
  searchValue: E,
  onSearchChange: se,
  onSearchSubmit: Y,
  showProfile: ye = !0,
  userRole: fe,
  onVerify: re,
  alertProps: J,
  style: le,
  headerStyles: oe,
  sidebarStyles: ce,
  contentStyles: ge,
  accentColor: me,
  contentBackgroundColor: n,
  navbarBackground: b,
  navbarAccentColor: B,
  theme: k = "light",
  showThemeToggler: u = !1,
  onThemeToggle: q,
  GlobalChatSidebar: ne,
  useChatSidebar: Oe,
  rightExtraContent: Lt,
  customNavbar: Ze,
  customNavbarProps: Wt,
  redirectToLogin: De,
  apiBaseUrl: et
}) => {
  const Mt = Jt(), Q = qt(Mt.breakpoints.down("md")), tt = ht(
    () => Et(vr(k)),
    [k]
  ), _e = k === "dark", xe = me ?? "#01584f", Ae = n ?? (_e ? "hsl(220, 35%, 9%)" : "#f2f9fc"), zt = b ?? (_e ? "hsl(220, 30%, 7%)" : "#ffffff"), Ft = B ?? (_e ? "#ffffff" : "#000000"), ve = T === "collapsible", Bt = y ?? /* @__PURE__ */ t(
    de,
    {
      role: "img",
      "aria-label": `${a} logo`,
      sx: {
        width: 28,
        height: 28,
        flexShrink: 0,
        // Accent in light mode; a legible light fill in dark mode.
        bgcolor: _e ? "#ffffff" : xe,
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
  ), [Fe, Kt] = we(
    () => _t(St) ?? !1
  ), Ut = (Re) => {
    Kt(Re), At(St, Re);
  };
  let Z = 0;
  i && !Q && (ve ? Z = Fe ? wt : bt : Z = Pr);
  const [rt, Be] = we(!1), [Ht, Ne] = we(!1), [$t, Gt] = we(!0), [Pt, jt] = we(!1), [jr, ke] = we(null), ot = Oe?.()?.isOpen ?? !1, Ke = ut(re), nt = ut(!1), at = ht(
    () => Ir(et),
    [et]
  );
  $e(() => {
    Ke.current = re;
  }, [re]);
  const Xt = () => {
    Be(!rt);
  }, Yt = () => {
    Be(!1);
  }, it = (Re) => {
    const be = p(Re);
    be instanceof Promise ? be.then(() => {
      ke(null);
    }).catch((st) => {
      console.error("Error in logout handler:", st), ke(null);
    }) : ke(null);
  };
  return $e(() => {
    (() => {
      try {
        const { isAuthenticated: be, error: st } = Cr();
        if (!be) {
          console.log("No session found, redirecting to login"), Ie(), De();
          return;
        }
        if (!nt.current) {
          const { user: Ce, error: Ue } = Tr();
          if (Ce && !Ue) {
            const lt = {
              name: Ce.name || "",
              email: Ce.email || "",
              profilePicture: Ce.profilePicture || "",
              role: Ce.role || ""
            };
            ke(lt), nt.current = !0, Ke.current && Ke.current(lt);
          } else Ue && console.error("Error getting user data:", Ue);
        }
        jt(!0);
      } catch (be) {
        console.error("Error checking session:", be), Ie(), De();
      } finally {
        Gt(!1);
      }
    })();
  }, [De]), $e(() => {
    S && Or(at, De);
  }, [S, at]), $t ? /* @__PURE__ */ t(dt, { theme: tt, children: /* @__PURE__ */ d(
    de,
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
            sx: { color: xe }
          }
        ),
        /* @__PURE__ */ t(de, { sx: { mt: 2, color: "text.secondary" }, children: "Checking session..." })
      ]
    }
  ) }) : Pt ? /* @__PURE__ */ t(dt, { theme: tt, children: /* @__PURE__ */ d(
    de,
    {
      sx: {
        display: "flex",
        minHeight: "100vh",
        ...le
      },
      children: [
        /* @__PURE__ */ t(Vt, {}),
        c && /* @__PURE__ */ t(
          _r,
          {
            appName: a,
            pageName: l,
            onMenuClick: Q && i ? Xt : void 0,
            showMenuButton: Q && i,
            showBrand: !(ve && !Q),
            headerStyles: ve && !Q && i ? {
              left: `${Z}px`,
              width: `calc(100% - ${Z}px)`,
              transition: Xe,
              ...oe
            } : oe,
            userName: H,
            userEmail: $,
            userAvatar: f,
            onProfileClick: D,
            onAccountClick: v,
            onSettingsClick: X,
            showSettings: G,
            onLogout: it,
            showNotifications: I,
            notificationCount: F,
            onNotificationBellClick: I && h ? () => Ne(!0) : void 0,
            showSearchbar: M && !Ze,
            searchValue: E,
            onSearchChange: se,
            onSearchSubmit: Y,
            showProfile: ye,
            userRole: fe,
            accentColor: xe,
            contentBackgroundColor: Ae,
            navbarBackground: zt,
            navbarAccentColor: Ft,
            theme: k,
            showThemeToggler: u,
            onThemeToggle: q,
            rightExtraContent: Lt,
            customNavbar: Ze,
            customNavbarProps: Wt
          }
        ),
        i && !Q && ve && /* @__PURE__ */ d(
          de,
          {
            component: "aside",
            sx: {
              width: Z,
              minWidth: Z,
              flexShrink: 0,
              zIndex: 2,
              // Higher z-index than app bar
              position: "sticky",
              top: 0,
              alignSelf: "flex-start",
              height: "100vh",
              transition: Xe,
              ...ce
            },
            children: [
              /* @__PURE__ */ t(
                Fr,
                {
                  mainLinks: r,
                  secondaryLinks: o,
                  activePath: w,
                  onLinkClick: U,
                  logo: Bt,
                  title: a,
                  sectionTitle: m,
                  activeAccentColor: xe,
                  groupAccentColor: g,
                  activeForegroundColor: O,
                  surfaceBackgroundColor: _,
                  collapsed: Fe,
                  onCollapsedChange: Ut,
                  expandedWidth: bt,
                  collapsedWidth: wt
                }
              ),
              J?.show && !Fe && /* @__PURE__ */ t(Qe, { ...J })
            ]
          }
        ),
        i && !Q && !ve && /* @__PURE__ */ t(
          ct,
          {
            variant: "permanent",
            sx: {
              width: Z,
              flexShrink: 0,
              zIndex: 2,
              // Higher z-index than app bar
              "& .MuiDrawer-paper": {
                width: Z,
                boxSizing: "border-box",
                bgcolor: Ae,
                borderRight: "none",
                top: c ? "60px" : 0,
                // Position below header
                height: c ? "calc(100vh - 60px)" : "100vh"
              },
              ...ce
            },
            children: /* @__PURE__ */ d(
              de,
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
                    kt,
                    {
                      variant: "rail",
                      mainLinks: r,
                      secondaryLinks: o,
                      activePath: w,
                      onLinkClick: U,
                      accentColor: xe,
                      surfaceBackgroundColor: Ae,
                      railShowTitles: s
                    }
                  ),
                  J?.show && /* @__PURE__ */ t(Qe, { ...J })
                ]
              }
            )
          }
        ),
        i && Q && /* @__PURE__ */ t(
          Gr,
          {
            open: rt,
            onClose: Yt,
            mainLinks: r,
            secondaryLinks: o,
            activePath: w,
            onLinkClick: U,
            userName: H,
            userEmail: $,
            userAvatar: f,
            onLogout: it,
            onProfileClick: D,
            showNotifications: I,
            notificationCount: F,
            onNotificationBellClick: I && h ? () => {
              Be(!1), Ne(!0);
            } : void 0,
            alertProps: J,
            accentColor: xe
          }
        ),
        /* @__PURE__ */ t(
          de,
          {
            component: "main",
            sx: {
              flexGrow: 1,
              p: 3,
              width: Q ? "100%" : i ? `calc(100% - ${Z}px)` : "100%",
              transition: Xe,
              mt: c ? "60px" : 0,
              // Account for AppNavbar height (60px)
              ml: 0,
              // Offset for sidebar on desktop
              backgroundColor: Ae,
              mb: 0,
              mr: 0,
              ...ge
            },
            children: /* @__PURE__ */ d(He, { container: !0, spacing: 3, children: [
              /* @__PURE__ */ t(
                He,
                {
                  size: {
                    xs: 12,
                    md: ot && ne ? 8.5 : 12
                  },
                  sx: {
                    display: "flex",
                    flexDirection: "column"
                  },
                  children: e
                }
              ),
              ot && ne && /* @__PURE__ */ t(
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
                  children: /* @__PURE__ */ t(ne, {})
                }
              )
            ] })
          }
        ),
        I && h && /* @__PURE__ */ t(
          ct,
          {
            anchor: "right",
            open: Ht,
            onClose: () => Ne(!1),
            slotProps: {
              paper: { sx: { width: 380, maxWidth: "100vw" } }
            },
            children: /* @__PURE__ */ t(
              h,
              {
                onClose: () => Ne(!1)
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
  C as AuthError,
  Fr as CollapsibleSidebar,
  Ko as LumoraWrapper,
  Ie as clearAuthTokens,
  Ko as default,
  Bo as getAuthErrorMessage,
  Te as getAuthTokens,
  Tr as getCurrentUser,
  Cr as isAuthenticated,
  qe as logAuthError,
  It as storeAuthTokens
};
