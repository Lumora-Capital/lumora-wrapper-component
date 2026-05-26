import { jsx as t, jsxs as h, Fragment as be } from "react/jsx-runtime";
import { useTheme as Nt, useMediaQuery as Dt, Box as re, CircularProgress as _t, CssBaseline as At, Drawer as Ye, Grid as ze } from "@mui/material";
import { createTheme as at, alpha as F, styled as Ct, useTheme as it, ThemeProvider as Ve } from "@mui/material/styles";
import * as T from "react";
import { useMemo as Ze, useState as oe, useRef as et, useEffect as Me } from "react";
import tt from "axios";
import rt from "@mui/icons-material/AccountCircleRounded";
import Wt from "@mui/icons-material/DarkMode";
import zt from "@mui/icons-material/LightMode";
import st from "@mui/icons-material/LogoutRounded";
import Mt from "@mui/icons-material/MenuRounded";
import Ft from "@mui/icons-material/NotificationsOutlined";
import Kt from "@mui/icons-material/SearchRounded";
import kt from "@mui/material/AppBar";
import ke from "@mui/material/Avatar";
import lt from "@mui/material/Badge";
import U from "@mui/material/Box";
import L from "@mui/material/Divider";
import J from "@mui/material/IconButton";
import Ut from "@mui/material/InputAdornment";
import Bt from "@mui/material/Menu";
import Ue from "@mui/material/MenuItem";
import C from "@mui/material/Stack";
import Ht from "@mui/material/TextField";
import Gt from "@mui/material/Toolbar";
import ae from "@mui/material/Tooltip";
import $ from "@mui/material/Typography";
import Pt from "@mui/material/useMediaQuery";
import $t from "@mui/material/Card";
import jt from "@mui/material/CardContent";
import ct from "@mui/material/Button";
import Lt from "@mui/icons-material/AutoAwesomeRounded";
import Jt from "@mui/icons-material/ExpandLess";
import qt from "@mui/icons-material/ExpandMore";
import Qt from "@mui/material/Collapse";
import Re from "@mui/material/ListItemButton";
import ve from "@mui/material/ListItemIcon";
import ne from "@mui/material/ListItemText";
import Xt from "@mui/material/MenuList";
import Yt from "@mui/material/Paper";
import Vt from "@mui/material/Popper";
import Zt from "@mui/icons-material/NotificationsRounded";
import er from "@mui/material/Drawer";
const R = at(), ot = [...R.shadows], g = {
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
}, E = {
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
}, K = {
  50: "hsl(120, 80%, 98%)",
  100: "hsl(120, 75%, 94%)",
  200: "hsl(120, 75%, 87%)",
  300: "hsl(120, 61%, 77%)",
  400: "hsl(120, 44%, 53%)",
  500: "hsl(120, 59%, 30%)",
  600: "hsl(120, 70%, 25%)",
  700: "hsl(120, 75%, 16%)",
  800: "hsl(120, 84%, 10%)",
  900: "hsl(120, 87%, 6%)"
}, z = {
  50: "hsl(45, 100%, 97%)",
  100: "hsl(45, 92%, 90%)",
  200: "hsl(45, 94%, 80%)",
  300: "hsl(45, 90%, 65%)",
  400: "hsl(45, 90%, 40%)",
  500: "hsl(45, 90%, 35%)",
  600: "hsl(45, 91%, 25%)",
  700: "hsl(45, 94%, 20%)",
  800: "hsl(45, 95%, 16%)",
  900: "hsl(45, 93%, 12%)"
}, k = {
  50: "hsl(0, 100%, 97%)",
  100: "hsl(0, 92%, 90%)",
  200: "hsl(0, 94%, 80%)",
  300: "hsl(0, 90%, 65%)",
  400: "hsl(0, 90%, 40%)",
  500: "hsl(0, 90%, 30%)",
  600: "hsl(0, 91%, 25%)",
  700: "hsl(0, 94%, 18%)",
  800: "hsl(0, 95%, 12%)",
  900: "hsl(0, 93%, 6%)"
}, tr = (e) => (ot[1] = e === "dark" ? "hsla(220, 30%, 5%, 0.7) 0px 4px 16px 0px, hsla(220, 25%, 10%, 0.8) 0px 8px 16px -5px" : "hsla(220, 30%, 5%, 0.07) 0px 4px 16px 0px, hsla(220, 25%, 10%, 0.07) 0px 8px 16px -5px", {
  palette: {
    mode: e,
    primary: {
      light: g[200],
      main: g[400],
      dark: g[700],
      contrastText: g[50],
      ...e === "dark" && {
        contrastText: g[50],
        light: g[300],
        main: g[400],
        dark: g[700]
      }
    },
    info: {
      light: g[100],
      main: g[300],
      dark: g[600],
      contrastText: E[50],
      ...e === "dark" && {
        contrastText: g[300],
        light: g[500],
        main: g[700],
        dark: g[900]
      }
    },
    warning: {
      light: z[300],
      main: z[400],
      dark: z[800],
      ...e === "dark" && {
        light: z[400],
        main: z[500],
        dark: z[700]
      }
    },
    error: {
      light: k[300],
      main: k[400],
      dark: k[800],
      ...e === "dark" && {
        light: k[400],
        main: k[500],
        dark: k[700]
      }
    },
    success: {
      light: K[300],
      main: K[400],
      dark: K[800],
      ...e === "dark" && {
        light: K[400],
        main: K[500],
        dark: K[700]
      }
    },
    grey: {
      ...E
    },
    divider: e === "dark" ? F(E[700], 0.6) : F(E[300], 0.4),
    background: {
      default: "hsl(0, 0%, 99%)",
      paper: "hsl(220, 35%, 97%)",
      ...e === "dark" && {
        default: E[900],
        paper: "hsl(220, 30%, 7%)"
      }
    },
    text: {
      primary: E[800],
      secondary: E[600],
      warning: z[400],
      ...e === "dark" && {
        primary: "hsl(0, 0%, 100%)",
        secondary: E[400]
      }
    },
    action: {
      hover: F(E[200], 0.2),
      selected: `${F(E[200], 0.3)}`,
      ...e === "dark" && {
        hover: F(E[600], 0.2),
        selected: F(E[600], 0.3)
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
  shadows: ot
});
g[200], g[400], g[700], g[50], g[100], g[300], g[600], E[50], z[300], z[400], z[800], k[300], k[400], k[800], K[300], K[400], K[800], {
  ...E
}, F(E[300], 0.4), E[800], E[600], z[400], F(E[200], 0.2), `${F(E[200], 0.3)}`, g[50], g[300], g[400], g[700], g[300], g[500], g[700], g[900], z[400], z[500], z[700], k[400], k[500], k[700], K[400], K[500], K[700], {
  ...E
}, F(E[700], 0.6), E[900], E[400], F(E[600], 0.2), F(E[600], 0.3);
R.typography.pxToRem(48), R.typography.pxToRem(36), R.typography.pxToRem(30), R.typography.pxToRem(24), R.typography.pxToRem(20), R.typography.pxToRem(18), R.typography.pxToRem(18), R.typography.pxToRem(14), R.typography.pxToRem(14), R.typography.pxToRem(14), R.typography.pxToRem(12);
[
  ...R.shadows.slice(2)
];
class b extends Error {
  constructor(o, r, a = null) {
    super(o), this.name = "AuthError", this.code = r, this.originalError = a, this.timestamp = (/* @__PURE__ */ new Date()).toISOString();
  }
}
const I = {
  STORAGE_ACCESS_DENIED: "STORAGE_ACCESS_DENIED",
  TOKEN_NOT_FOUND: "TOKEN_NOT_FOUND",
  TOKEN_INVALID: "TOKEN_INVALID",
  TOKEN_EXPIRED: "TOKEN_EXPIRED",
  LOGOUT_FAILED: "LOGOUT_FAILED",
  UNKNOWN_ERROR: "UNKNOWN_ERROR"
}, W = {
  ACCESS_TOKEN: "lumoraAccessToken",
  REFRESH_TOKEN: "lumoraRefreshToken",
  USER: "lumoraUser"
}, j = {
  ACCESS_TOKEN: "accessToken",
  REFRESH_TOKEN: "refreshToken",
  USER: "user"
}, rr = () => {
  if (!(typeof window > "u" || !window.localStorage))
    try {
      const e = localStorage.getItem(j.ACCESS_TOKEN), o = localStorage.getItem(j.REFRESH_TOKEN), r = localStorage.getItem(j.USER);
      e && !localStorage.getItem(W.ACCESS_TOKEN) && localStorage.setItem(W.ACCESS_TOKEN, e), o && !localStorage.getItem(W.REFRESH_TOKEN) && localStorage.setItem(W.REFRESH_TOKEN, o), r && !localStorage.getItem(W.USER) && localStorage.setItem(W.USER, r), (e || o || r) && (localStorage.removeItem(j.ACCESS_TOKEN), localStorage.removeItem(j.REFRESH_TOKEN), localStorage.removeItem(j.USER));
    } catch (e) {
      console.warn("Failed to migrate legacy localStorage keys:", e);
    }
}, Fe = (e) => {
  try {
    if (typeof window > "u")
      return console.warn("localStorage access attempted on server side"), null;
    if (!window.localStorage)
      throw new b("localStorage is not available", I.STORAGE_ACCESS_DENIED);
    return window.localStorage.getItem(e);
  } catch (o) {
    throw o.name === "QuotaExceededError" ? (console.error("Storage quota exceeded"), new b(
      "Storage quota exceeded. Please clear browser data.",
      I.STORAGE_ACCESS_DENIED,
      o
    )) : o.name === "SecurityError" ? (console.error("localStorage access denied (private browsing or security settings)"), new b(
      "Access to localStorage is denied. Please check browser settings.",
      I.STORAGE_ACCESS_DENIED,
      o
    )) : (console.error("Unexpected error accessing localStorage:", o.name), new b("Failed to access storage", I.STORAGE_ACCESS_DENIED, o));
  }
}, Ke = (e, o) => {
  try {
    if (typeof window > "u")
      return console.warn("localStorage write attempted on server side"), !1;
    if (!window.localStorage)
      throw new b("localStorage is not available", I.STORAGE_ACCESS_DENIED);
    return window.localStorage.setItem(e, o), !0;
  } catch (r) {
    throw r.name === "QuotaExceededError" ? (console.error("Storage quota exceeded"), new b(
      "Storage quota exceeded. Please clear browser data.",
      I.STORAGE_ACCESS_DENIED,
      r
    )) : r.name === "SecurityError" ? (console.error("localStorage write denied (private browsing or security settings)"), new b(
      "Access to localStorage is denied. Please check browser settings.",
      I.STORAGE_ACCESS_DENIED,
      r
    )) : (console.error("Unexpected error writing to localStorage:", r.name), new b("Failed to write to storage", I.STORAGE_ACCESS_DENIED, r));
  }
}, ht = (e) => {
  try {
    return typeof window > "u" ? (console.warn("localStorage removal attempted on server side"), !1) : window.localStorage ? (window.localStorage.removeItem(e), !0) : (console.warn("localStorage is not available"), !1);
  } catch (o) {
    return o.name !== "SecurityError" && console.warn(`Could not remove localStorage key "${e}"`), !1;
  }
}, ie = () => {
  try {
    rr();
    const e = Fe(W.ACCESS_TOKEN), o = Fe(W.REFRESH_TOKEN), r = Fe(W.USER);
    let a = null;
    if (r)
      try {
        a = JSON.parse(r);
      } catch {
        r && r !== "null" && r !== "undefined" && console.warn("Invalid user data in localStorage, clearing:", r.substring(0, 50)), ht(W.USER);
      }
    return {
      accessToken: e,
      refreshToken: o,
      user: a
    };
  } catch (e) {
    throw e instanceof b ? e : new b("Failed to retrieve authentication tokens", I.UNKNOWN_ERROR, e);
  }
}, or = () => {
  try {
    const { accessToken: e, refreshToken: o } = ie();
    return !(e || o) ? {
      isAuthenticated: !1,
      error: new b("No authentication tokens found", I.TOKEN_NOT_FOUND)
    } : {
      isAuthenticated: !0,
      error: null
    };
  } catch (e) {
    return console.error("Authentication check failed:", e), {
      isAuthenticated: !1,
      error: e instanceof b ? e : new b("Authentication check failed", I.UNKNOWN_ERROR, e)
    };
  }
}, dt = (e, o, r = null) => {
  try {
    if (!e && !o)
      throw new b("At least one token must be provided", I.TOKEN_INVALID);
    return e && Ke(W.ACCESS_TOKEN, e), o && Ke(W.REFRESH_TOKEN, o), r && Ke(W.USER, JSON.stringify(r)), {
      success: !0,
      error: null
    };
  } catch (a) {
    return console.error("Failed to store authentication tokens:", a), {
      success: !1,
      error: a instanceof b ? a : new b("Failed to store tokens", I.UNKNOWN_ERROR, a)
    };
  }
}, se = () => {
  try {
    return [
      W.ACCESS_TOKEN,
      W.REFRESH_TOKEN,
      W.USER,
      // Also clear legacy keys for complete cleanup
      j.ACCESS_TOKEN,
      j.REFRESH_TOKEN,
      j.USER
    ].map((a) => ht(a)).every((a) => a) || console.warn("Some tokens could not be removed from localStorage"), {
      success: !0,
      error: null
    };
  } catch (e) {
    return console.error("Failed to clear authentication tokens:", e), {
      success: !1,
      error: e instanceof b ? e : new b("Failed to clear tokens", I.LOGOUT_FAILED, e)
    };
  }
}, nr = () => {
  try {
    const { user: e } = ie();
    return {
      user: e,
      error: null
    };
  } catch (e) {
    return console.error("Failed to get current user:", e), {
      user: null,
      error: e instanceof b ? e : new b("Failed to retrieve user data", I.UNKNOWN_ERROR, e)
    };
  }
}, ao = (e) => {
  if (!(e instanceof b))
    return "An unexpected error occurred. Please try again.";
  switch (e.code) {
    case I.STORAGE_ACCESS_DENIED:
      return "Unable to access browser storage. Please check your browser settings and disable private browsing if enabled.";
    case I.TOKEN_NOT_FOUND:
      return "You are not logged in. Please sign in to continue.";
    case I.TOKEN_INVALID:
      return "Your session is invalid. Please sign in again.";
    case I.TOKEN_EXPIRED:
      return "Your session has expired. Please sign in again.";
    case I.LOGOUT_FAILED:
      return "Failed to log out properly. Please clear your browser cache and try again.";
    case I.UNKNOWN_ERROR:
    default:
      return "An unexpected error occurred. Please try again or contact support if the problem persists.";
  }
}, Be = (e, o = "Unknown") => {
  const r = {
    context: o,
    message: e.message,
    code: e instanceof b ? e.code : "UNKNOWN",
    timestamp: e instanceof b ? e.timestamp : (/* @__PURE__ */ new Date()).toISOString(),
    stack: e.stack
  };
  e instanceof b && e.originalError && (r.originalError = {
    name: e.originalError.name,
    message: e.originalError.message
  }), console.warn("[Auth Error]", r);
}, ar = (e) => {
  if (!e)
    throw new Error("API base URL is required to create axios client");
  const o = tt.create({
    baseURL: e,
    headers: {
      "Content-Type": "application/json"
    }
  });
  let r = !1, a = null, s = [];
  const c = (i, n) => {
    s.forEach(({ resolve: N, reject: v }) => {
      i ? v(i) : n && N(n);
    }), s = [];
  };
  return o.interceptors.request.use(
    (i) => {
      const { accessToken: n } = ie();
      return n && i.headers && (i.headers.Authorization = `Bearer ${n}`), i;
    },
    (i) => Promise.reject(i)
  ), o.interceptors.response.use(
    (i) => i,
    async (i) => {
      var S;
      const n = i.config, N = (S = i.response) == null ? void 0 : S.status, v = (n == null ? void 0 : n.url) || "", p = v.includes("/auth/refresh");
      if (N !== 401 || n._retry || p)
        return Promise.reject(i);
      n._retry = !0;
      const { refreshToken: _ } = ie();
      if (!_) {
        const x = new Error(
          "No refresh token available for token refresh"
        );
        return Be(x, "AxiosClient - Token Refresh"), se(), typeof window < "u" && (window.location.href = "/login"), Promise.reject(i);
      }
      if (r && a)
        return new Promise((x, O) => {
          s.push({ resolve: x, reject: O });
        }).then((x) => {
          const {
            accessToken: O,
            refreshToken: w
          } = x;
          if (n.headers && (n.headers.Authorization = `Bearer ${O}`), v.includes("/auth/logout"))
            try {
              if (typeof n.data == "string") {
                const A = JSON.parse(
                  n.data || "{}"
                );
                A.refresh_token = w, n.data = JSON.stringify(A);
              } else
                n.data && typeof n.data == "object" ? n.data.refresh_token = w : n.data = JSON.stringify({
                  refresh_token: w
                });
            } catch {
              n.data = JSON.stringify({
                refresh_token: w
              });
            }
          return o(n);
        }).catch((x) => Promise.reject(x));
      r = !0, a = tt.post(
        `${e}/auth/refresh`,
        {
          refresh_token: _
        }
      );
      try {
        const x = await a, { accessToken: O, refreshToken: w } = x.data;
        if (dt(O, w, null), c(null, {
          accessToken: O,
          refreshToken: w
        }), n.headers && (n.headers.Authorization = `Bearer ${O}`), v.includes("/auth/logout"))
          try {
            if (typeof n.data == "string") {
              const A = JSON.parse(
                n.data || "{}"
              );
              A.refresh_token = w, n.data = JSON.stringify(A);
            } else
              n.data && typeof n.data == "object" ? n.data.refresh_token = w : n.data = JSON.stringify({
                refresh_token: w
              });
          } catch {
            n.data = JSON.stringify({
              refresh_token: w
            });
          }
        return o(n);
      } catch (x) {
        return Be(
          x,
          "AxiosClient - Token Refresh Failed"
        ), c(x), se(), typeof window < "u" && (window.location.href = "/login"), Promise.reject(x);
      } finally {
        r = !1, a = null;
      }
    }
  ), o;
}, ir = async (e, o) => {
  const { accessToken: r, refreshToken: a } = ie();
  if (r)
    return !0;
  if (a)
    try {
      const s = await e.post("/auth/refresh", {
        refresh_token: a
      });
      if (s.data.success && s.data.accessToken)
        return dt(s.data.accessToken, s.data.refreshToken || null, null), !0;
    } catch (s) {
      Be(s, "TokenValidator - Refresh Failed");
    }
  return se(), o ? o() : window.location.href = "/login", !1;
}, sr = Ct(Gt)({
  width: "100%",
  padding: "8px 16px",
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
  gap: "16px",
  flexShrink: 0
}), lr = ({
  appName: e = "Dashboard",
  pageName: o = "Home",
  onMenuClick: r,
  showMenuButton: a = !0,
  headerStyles: s,
  userName: c = "User Name",
  userEmail: i,
  userAvatar: n,
  onProfileClick: N,
  onAccountClick: v,
  onSettingsClick: p,
  showSettings: _ = !0,
  onLogout: S,
  showNotifications: x = !1,
  notificationCount: O = 0,
  onNotificationBellClick: w,
  theme: A = "light",
  showThemeToggler: G = !1,
  onThemeToggle: B,
  showSearchbar: d = !0,
  searchValue: l,
  onSearchChange: y,
  onSearchSubmit: M,
  showProfile: P = !0,
  userRole: H,
  accentColor: Z = "#01584f",
  contentBackgroundColor: Q = "#f2f9fc",
  navbarBackground: u = "#ff0000",
  navbarAccentColor: m = "#000000",
  rightExtraContent: D = [],
  customNavbar: le,
  customNavbarProps: Te
}) => {
  const ce = Pt((f) => f.breakpoints.up("md")), [he, de] = T.useState(null), Oe = !!he, ue = A === "dark", fe = ue ? "Switch to light mode" : "Switch to dark mode", X = (f) => {
    y == null || y(f.target.value);
  }, Ie = (f) => {
    f.key === "Enter" && M && l && M(l);
  }, Ne = (f) => f ? f.charAt(0).toUpperCase() + f.slice(1).toLowerCase() : "User", ee = (f) => {
    de(f.currentTarget);
  }, Y = () => {
    de(null);
  }, pe = (f) => {
    f == null || f(), Y();
  };
  return /* @__PURE__ */ t(
    kt,
    {
      position: "fixed",
      sx: {
        boxShadow: 0,
        background: u,
        top: "var(--template-frame-height, 0px)",
        left: 0,
        width: "100%",
        zIndex: 1,
        height: "60px",
        ...s
      },
      children: /* @__PURE__ */ h(sr, { variant: "dense", sx: { height: "100%" }, children: [
        /* @__PURE__ */ h(
          C,
          {
            direction: "row",
            sx: {
              alignItems: "center",
              gap: 2,
              flexShrink: 0,
              flexGrow: 1
            },
            children: [
              a && !ce && /* @__PURE__ */ t(
                J,
                {
                  "aria-label": "menu",
                  onClick: r,
                  sx: {
                    color: m,
                    "&:hover": {
                      backgroundColor: "action.hover"
                    }
                  },
                  children: /* @__PURE__ */ t(Mt, {})
                }
              ),
              /* @__PURE__ */ h(
                C,
                {
                  direction: "row",
                  sx: {
                    alignItems: "center",
                    gap: 1,
                    flexShrink: 0
                  },
                  children: [
                    /* @__PURE__ */ t(
                      $,
                      {
                        variant: "h6",
                        sx: {
                          color: m,
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
              le ? /* @__PURE__ */ t(le, { ...Te || {} }) : d && ce && /* @__PURE__ */ t(
                Ht,
                {
                  placeholder: "Search for deals or documents...",
                  value: l || "",
                  onChange: X,
                  onKeyDown: Ie,
                  size: "small",
                  sx: {
                    width: "400px",
                    "& .MuiOutlinedInput-root": {
                      backgroundColor: Q,
                      borderRadius: "8px",
                      "& fieldset": {
                        borderColor: "transparent"
                      },
                      "&:hover fieldset": {
                        borderColor: "transparent"
                      },
                      "&.Mui-focused fieldset": {
                        borderColor: Z
                      }
                    }
                  },
                  InputProps: {
                    startAdornment: /* @__PURE__ */ t(Ut, { position: "start", children: /* @__PURE__ */ t(
                      Kt,
                      {
                        sx: {
                          color: m
                        }
                      }
                    ) })
                  }
                }
              )
            ]
          }
        ),
        /* @__PURE__ */ h(
          C,
          {
            direction: "row",
            sx: {
              alignItems: "center",
              gap: 1.5,
              flexShrink: 0
            },
            children: [
              G && /* @__PURE__ */ t(ae, { title: fe, placement: "bottom", children: /* @__PURE__ */ t("span", { children: /* @__PURE__ */ t(
                J,
                {
                  size: "small",
                  onClick: B,
                  disabled: !B,
                  "aria-label": fe,
                  sx: {
                    color: m,
                    "&:hover": {
                      backgroundColor: "action.hover"
                    }
                  },
                  children: ue ? /* @__PURE__ */ t(zt, { fontSize: "small" }) : /* @__PURE__ */ t(Wt, { fontSize: "small" })
                }
              ) }) }),
              x && /* @__PURE__ */ t(
                lt,
                {
                  color: "error",
                  badgeContent: O,
                  invisible: O === 0,
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
                      onClick: w,
                      "aria-label": O ? `Notifications, ${O} unread` : "Notifications",
                      sx: { color: m },
                      children: /* @__PURE__ */ t(Ft, {})
                    }
                  )
                }
              ),
              x && P && /* @__PURE__ */ t(
                L,
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
              P && /* @__PURE__ */ h(be, { children: [
                /* @__PURE__ */ h(
                  C,
                  {
                    direction: "row",
                    onClick: ee,
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
                      n ? /* @__PURE__ */ t(
                        ke,
                        {
                          src: n,
                          sx: { width: 32, height: 32 }
                        }
                      ) : /* @__PURE__ */ t(
                        rt,
                        {
                          sx: {
                            width: 32,
                            height: 32,
                            color: m
                          }
                        }
                      ),
                      /* @__PURE__ */ h(
                        U,
                        {
                          sx: {
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "flex-start",
                            minWidth: 0
                          },
                          children: [
                            /* @__PURE__ */ t(
                              $,
                              {
                                variant: "body2",
                                sx: {
                                  color: m,
                                  fontWeight: 500,
                                  lineHeight: 1.2,
                                  overflow: "hidden",
                                  textOverflow: "ellipsis",
                                  whiteSpace: "nowrap",
                                  maxWidth: "150px"
                                },
                                children: c
                              }
                            ),
                            /* @__PURE__ */ t(
                              $,
                              {
                                variant: "caption",
                                sx: {
                                  color: m,
                                  lineHeight: 1.2,
                                  overflow: "hidden",
                                  textOverflow: "ellipsis",
                                  whiteSpace: "nowrap",
                                  maxWidth: "150px"
                                },
                                children: Ne(H)
                              }
                            )
                          ]
                        }
                      )
                    ]
                  }
                ),
                /* @__PURE__ */ h(
                  Bt,
                  {
                    anchorEl: he,
                    open: Oe,
                    onClose: Y,
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
                      _ && [
                        /* @__PURE__ */ t(
                          Ue,
                          {
                            onClick: () => pe(p),
                            children: "Settings"
                          },
                          "settings"
                        ),
                        /* @__PURE__ */ t(L, {}, "settings-divider")
                      ],
                      /* @__PURE__ */ h(
                        Ue,
                        {
                          onClick: () => pe(S),
                          sx: {
                            color: "error.main",
                            "&:hover": {
                              color: "error.dark"
                            }
                          },
                          children: [
                            /* @__PURE__ */ t($, { sx: { flexGrow: 1 }, children: "Logout" }),
                            /* @__PURE__ */ t(st, { fontSize: "small" })
                          ]
                        }
                      )
                    ]
                  }
                )
              ] }),
              D.length !== 0 && D.map((f) => f.type === "divider" ? /* @__PURE__ */ t(
                L,
                {
                  orientation: "vertical",
                  flexItem: !0,
                  sx: {
                    borderColor: "rgba(0, 0, 0, 0.12)",
                    height: "24px",
                    alignSelf: "center"
                  }
                },
                f.key
              ) : f.type === "profile" ? /* @__PURE__ */ t(
                ae,
                {
                  title: f.tooltip || "",
                  disableHoverListener: !f.tooltip,
                  arrow: !0,
                  children: /* @__PURE__ */ h(
                    C,
                    {
                      direction: "row",
                      onClick: f.disabled ? void 0 : f.onClick,
                      sx: {
                        alignItems: "center",
                        gap: 1,
                        cursor: f.disabled ? "not-allowed" : "pointer",
                        borderRadius: "8px",
                        padding: "4px 8px",
                        opacity: f.disabled ? 0.5 : 1,
                        transition: "opacity 0.2s",
                        ...!f.disabled && {
                          "&:hover": {
                            backgroundColor: "action.hover"
                          }
                        }
                      },
                      children: [
                        f.avatar ? /* @__PURE__ */ t(
                          ke,
                          {
                            src: f.avatar,
                            sx: { width: 32, height: 32 }
                          }
                        ) : /* @__PURE__ */ t(
                          rt,
                          {
                            sx: {
                              width: 32,
                              height: 32,
                              color: m
                            }
                          }
                        ),
                        /* @__PURE__ */ h(
                          U,
                          {
                            sx: {
                              display: "flex",
                              flexDirection: "column",
                              alignItems: "flex-start",
                              minWidth: 0
                            },
                            children: [
                              /* @__PURE__ */ t(
                                $,
                                {
                                  variant: "body2",
                                  sx: {
                                    color: m,
                                    fontWeight: 500,
                                    lineHeight: 1.2,
                                    overflow: "hidden",
                                    textOverflow: "ellipsis",
                                    whiteSpace: "nowrap",
                                    maxWidth: "150px"
                                  },
                                  children: f.name
                                }
                              ),
                              /* @__PURE__ */ t(
                                $,
                                {
                                  variant: "caption",
                                  sx: {
                                    color: m,
                                    lineHeight: 1.2,
                                    overflow: "hidden",
                                    textOverflow: "ellipsis",
                                    whiteSpace: "nowrap",
                                    maxWidth: "150px"
                                  },
                                  children: f.role
                                }
                              )
                            ]
                          }
                        )
                      ]
                    }
                  )
                },
                f.key
              ) : null)
            ]
          }
        )
      ] })
    }
  );
}, ut = ({
  title: e = "",
  message: o = "",
  buttonText: r = "",
  onButtonClick: a,
  show: s = !0
}) => s ? /* @__PURE__ */ t($t, { variant: "outlined", sx: { m: 1.5, flexShrink: 0 }, children: /* @__PURE__ */ h(jt, { children: [
  /* @__PURE__ */ t(Lt, { fontSize: "small" }),
  /* @__PURE__ */ t($, { gutterBottom: !0, sx: { fontWeight: 600 }, children: e }),
  /* @__PURE__ */ t(
    $,
    {
      variant: "body2",
      sx: { mb: 2, color: "text.secondary" },
      children: o
    }
  ),
  /* @__PURE__ */ t(
    ct,
    {
      variant: "contained",
      size: "small",
      fullWidth: !0,
      onClick: a,
      children: r
    }
  )
] }) }) : null, cr = 180, nt = 250, ft = (e, o) => {
  var r;
  return o ? e.path && o === e.path ? !0 : ((r = e.subitems) == null ? void 0 : r.some((a) => a.path === o)) ?? !1 : !1;
}, pt = (e, o) => !!(o && e.path === o), gt = ({
  text: e,
  testId: o
}) => {
  const r = T.useRef(null), [a, s] = T.useState(!1), c = T.useCallback(() => {
    const i = r.current;
    i && s(i.scrollWidth > i.clientWidth + 0.5);
  }, []);
  return T.useLayoutEffect(() => {
    c();
  }, [c, e]), T.useEffect(() => {
    const i = r.current;
    if (!i)
      return;
    const n = new ResizeObserver(() => c());
    return n.observe(i), () => n.disconnect();
  }, [c]), /* @__PURE__ */ t(
    ae,
    {
      title: e,
      placement: "right",
      arrow: !0,
      enterDelay: 400,
      disableHoverListener: !a,
      disableFocusListener: !a,
      disableTouchListener: !a,
      children: /* @__PURE__ */ t(
        $,
        {
          ref: r,
          variant: "caption",
          component: "span",
          "aria-hidden": !0,
          "data-testid": o,
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
}, hr = ({
  link: e,
  activePath: o,
  onLinkClick: r,
  accentColor: a,
  isSecondary: s,
  surfaceBackgroundColor: c,
  railShowTitles: i = !1
}) => {
  const n = it(), [N, v] = T.useState(null), [p, _] = T.useState(!1), S = T.useRef(
    null
  ), x = T.useRef(null), O = T.useRef(null), w = T.useRef(!1), A = T.useRef(!1), G = T.useId(), B = () => {
    S.current && (clearTimeout(S.current), S.current = null);
  }, d = () => {
    B(), S.current = setTimeout(() => {
      _(!1), S.current = null;
    }, cr);
  }, l = () => {
    B(), _(!0);
  };
  T.useEffect(() => {
    if (!p)
      return;
    const u = (m) => {
      var D;
      m.key === "Escape" && (_(!1), (D = O.current) == null || D.focus());
    };
    return document.addEventListener("keydown", u), () => document.removeEventListener("keydown", u);
  }, [p]), T.useEffect(() => {
    if (!p || !A.current)
      return;
    const u = globalThis.requestAnimationFrame(() => {
      var D;
      const m = (D = x.current) == null ? void 0 : D.querySelector(
        '[role="menuitem"]'
      );
      m == null || m.focus(), A.current = !1;
    });
    return () => cancelAnimationFrame(u);
  }, [p]);
  const y = ft(e, o), M = s ? 48 : 44, P = s ? "text.secondary" : a, H = s ? "#01584F" : a, Z = {
    width: "100%",
    maxWidth: "100%",
    minWidth: M,
    height: "auto",
    minHeight: M,
    flexDirection: "column",
    py: 0.5,
    // Horizontal padding so labels (esp. active fill) do not touch the box edges
    px: 1,
    borderRadius: "4px",
    color: y ? "#ffffff" : P,
    backgroundColor: y ? H : "transparent",
    "&:hover": {
      backgroundColor: y ? H : "action.hover",
      borderRadius: "4px",
      color: y ? "#ffffff" : P
    }
  }, Q = i ? /* @__PURE__ */ t(
    J,
    {
      ref: O,
      component: e.path ? "a" : "button",
      href: e.path || void 0,
      "aria-label": e.text,
      onFocus: () => {
        w.current || l();
      },
      onBlur: (u) => {
        var D;
        const m = u.relatedTarget;
        m && ((D = x.current) != null && D.contains(m)) || d();
      },
      onKeyDown: (u) => {
        u.key === "ArrowDown" && (u.preventDefault(), A.current = !0, l());
      },
      onClick: (u) => {
        u.preventDefault(), u.stopPropagation(), e.path && (r == null || r(e.path));
      },
      "aria-haspopup": "menu",
      "aria-expanded": p,
      "aria-controls": p ? G : void 0,
      "data-testid": `rail-submenu-trigger-${e.text}`,
      sx: Z,
      children: /* @__PURE__ */ h(C, { alignItems: "center", spacing: 1, sx: { width: "100%" }, children: [
        /* @__PURE__ */ t(
          U,
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
          gt,
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
      ref: O,
      component: e.path ? "a" : "button",
      href: e.path || void 0,
      "aria-label": e.text,
      onFocus: () => {
        w.current || l();
      },
      onBlur: (u) => {
        var D;
        const m = u.relatedTarget;
        m && ((D = x.current) != null && D.contains(m)) || d();
      },
      onKeyDown: (u) => {
        u.key === "ArrowDown" && (u.preventDefault(), A.current = !0, l());
      },
      onClick: (u) => {
        u.preventDefault(), u.stopPropagation(), e.path && (r == null || r(e.path));
      },
      "aria-haspopup": "menu",
      "aria-expanded": p,
      "aria-controls": p ? G : void 0,
      "data-testid": `rail-submenu-trigger-${e.text}`,
      sx: {
        width: M,
        height: M,
        color: y ? "#ffffff" : P,
        backgroundColor: y ? H : "transparent",
        borderRadius: y ? "4px" : "50%",
        "&:hover": {
          backgroundColor: y ? H : "action.hover",
          borderRadius: "4px"
        }
      },
      children: e.icon
    }
  );
  return /* @__PURE__ */ h(
    U,
    {
      sx: {
        width: "100%",
        display: "flex",
        justifyContent: "center"
      },
      children: [
        /* @__PURE__ */ t(
          U,
          {
            ref: v,
            "data-testid": `rail-submenu-anchor-${e.text}`,
            sx: { display: "inline-flex", maxWidth: "100%" },
            onMouseEnter: () => {
              w.current = !0, l();
            },
            onMouseLeave: () => {
              w.current = !1, d();
            },
            children: i ? Q : /* @__PURE__ */ t(ae, { title: e.text, placement: "right", arrow: !0, children: Q })
          }
        ),
        /* @__PURE__ */ t(
          Vt,
          {
            open: p && !!N,
            anchorEl: N,
            placement: "right-start",
            modifiers: [{ name: "offset", options: { offset: [8, 0] } }],
            sx: { zIndex: (u) => u.zIndex.modal },
            children: /* @__PURE__ */ t(
              Yt,
              {
                ref: x,
                elevation: 0,
                onMouseEnter: () => {
                  B();
                },
                onMouseLeave: d,
                "data-testid": `rail-submenu-panel-${e.text}`,
                sx: {
                  bgcolor: c,
                  backgroundImage: "none",
                  borderRadius: "4px",
                  border: "1px solid",
                  borderColor: "divider",
                  boxShadow: n.shadows[8],
                  maxWidth: nt,
                  minWidth: 0,
                  py: 0.5,
                  boxSizing: "border-box"
                },
                children: /* @__PURE__ */ t(
                  Xt,
                  {
                    id: G,
                    dense: !0,
                    autoFocus: !1,
                    role: "menu",
                    sx: {
                      bgcolor: "transparent",
                      py: 0,
                      maxWidth: nt
                    },
                    children: e.subitems.map((u) => /* @__PURE__ */ h(
                      Ue,
                      {
                        role: "menuitem",
                        title: u.text,
                        selected: pt(u, o),
                        onClick: (m) => {
                          m.preventDefault(), r == null || r(u.path), _(!1);
                        },
                        sx: {
                          borderRadius: "4px",
                          mx: 0.5,
                          my: 0.125,
                          maxWidth: "100%",
                          overflow: "hidden",
                          color: s ? "text.secondary" : a,
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
                            bgcolor: H,
                            color: "#ffffff",
                            "&:hover": {
                              bgcolor: H
                            }
                          },
                          "&.Mui-focusVisible": {
                            bgcolor: "action.focus"
                          }
                        },
                        children: [
                          u.icon ? /* @__PURE__ */ t(ve, { children: u.icon }) : null,
                          /* @__PURE__ */ t(
                            ne,
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
}, dr = ({
  link: e,
  activePath: o,
  onLinkClick: r,
  accentColor: a,
  isSecondary: s,
  railShowTitles: c = !1
}) => {
  const i = !!(e.path && o === e.path), n = s ? 48 : 44, N = s ? "text.secondary" : a, v = s ? "#01584F" : a, p = {
    width: "100%",
    maxWidth: "100%",
    minWidth: n,
    height: "auto",
    minHeight: n,
    flexDirection: "column",
    py: 0.5,
    px: 1,
    borderRadius: "4px",
    color: i ? "#ffffff" : N,
    backgroundColor: i ? v : "transparent",
    "&:hover": {
      backgroundColor: i ? v : "action.hover",
      borderRadius: "4px",
      color: i ? "#ffffff" : N
    }
  }, _ = c ? /* @__PURE__ */ t(
    J,
    {
      component: e.path ? "a" : "button",
      href: e.path || void 0,
      "aria-label": e.text,
      onClick: (S) => {
        S.preventDefault(), S.stopPropagation(), e.path && (r == null || r(e.path));
      },
      disabled: !e.path,
      sx: p,
      children: /* @__PURE__ */ h(C, { alignItems: "center", spacing: 1, sx: { width: "100%" }, children: [
        /* @__PURE__ */ t(
          U,
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
          gt,
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
      onClick: (S) => {
        S.preventDefault(), S.stopPropagation(), e.path && (r == null || r(e.path));
      },
      disabled: !e.path,
      sx: {
        width: n,
        height: n,
        color: i ? "#ffffff" : N,
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
  return c ? _ : /* @__PURE__ */ t(ae, { title: e.text, placement: "right", arrow: !0, children: _ });
}, ur = ({
  link: e,
  expanded: o,
  onToggle: r,
  activePath: a,
  onLinkClick: s,
  accentColor: c,
  isSecondary: i
}) => {
  const n = ft(e, a), N = i ? "text.secondary" : c, v = i ? "#01584F" : c;
  return /* @__PURE__ */ h(be, { children: [
    /* @__PURE__ */ h(
      Re,
      {
        onClick: r,
        sx: {
          py: 1.5,
          px: 2,
          color: n ? "#ffffff" : N,
          bgcolor: n ? v : "transparent",
          "&:hover": {
            bgcolor: n ? v : "action.hover"
          }
        },
        "data-testid": `drawer-expand-trigger-${e.text}`,
        children: [
          /* @__PURE__ */ t(ve, { sx: { color: "inherit", minWidth: 40 }, children: e.icon }),
          /* @__PURE__ */ t(ne, { primary: e.text }),
          o ? /* @__PURE__ */ t(Jt, {}) : /* @__PURE__ */ t(qt, {})
        ]
      }
    ),
    /* @__PURE__ */ t(Qt, { in: o, timeout: "auto", unmountOnExit: !0, children: /* @__PURE__ */ h(U, { component: "nav", "aria-label": e.text, children: [
      e.path ? /* @__PURE__ */ t(
        Re,
        {
          sx: { pl: 4, py: 1 },
          onClick: () => e.path && (s == null ? void 0 : s(e.path)),
          selected: !!(a && a === e.path),
          "data-testid": `drawer-parent-path-${e.text}`,
          children: /* @__PURE__ */ t(ne, { primary: e.text })
        }
      ) : null,
      e.subitems.map((p) => /* @__PURE__ */ h(
        Re,
        {
          sx: { pl: 4, py: 1 },
          onClick: () => s == null ? void 0 : s(p.path),
          selected: pt(p, a),
          children: [
            p.icon ? /* @__PURE__ */ t(ve, { sx: { minWidth: 36 }, children: p.icon }) : null,
            /* @__PURE__ */ t(ne, { primary: p.text })
          ]
        },
        p.path
      ))
    ] }) })
  ] });
}, fr = ({
  link: e,
  activePath: o,
  onLinkClick: r,
  accentColor: a,
  isSecondary: s
}) => {
  const c = !!(e.path && o === e.path), i = s ? "text.secondary" : a, n = s ? "#01584F" : a;
  return /* @__PURE__ */ h(
    Re,
    {
      disabled: !e.path,
      onClick: () => e.path && (r == null ? void 0 : r(e.path)),
      sx: {
        py: 1.5,
        px: 2,
        color: c ? "#ffffff" : i,
        bgcolor: c ? n : "transparent",
        "&:hover": {
          bgcolor: c ? n : "action.hover"
        }
      },
      children: [
        /* @__PURE__ */ t(ve, { sx: { color: "inherit", minWidth: 40 }, children: e.icon }),
        /* @__PURE__ */ t(ne, { primary: e.text })
      ]
    }
  );
}, Ee = () => /* @__PURE__ */ t(
  U,
  {
    sx: {
      width: "100%",
      display: "flex",
      justifyContent: "center"
    },
    children: /* @__PURE__ */ t(L, { sx: { width: "60%", borderColor: "divider" } })
  }
), mt = ({
  variant: e,
  mainLinks: o,
  secondaryLinks: r = [],
  activePath: a,
  onLinkClick: s,
  accentColor: c = "#01584f",
  surfaceBackgroundColor: i,
  railShowTitles: n = !1
}) => {
  const N = it(), v = i ?? N.palette.background.paper, p = (d) => {
    s && s(d);
  }, [_, S] = T.useState({}), [x, O] = T.useState({}), w = (d) => {
    S((l) => ({
      ...l,
      [d]: !l[d]
    }));
  }, A = (d) => {
    O((l) => ({
      ...l,
      [d]: !l[d]
    }));
  }, G = (d, l) => {
    var y;
    return (y = d.subitems) != null && y.length ? /* @__PURE__ */ t(
      hr,
      {
        link: d,
        activePath: a,
        onLinkClick: p,
        accentColor: c,
        isSecondary: l,
        surfaceBackgroundColor: v,
        railShowTitles: n
      }
    ) : /* @__PURE__ */ t(
      dr,
      {
        link: d,
        activePath: a,
        onLinkClick: p,
        accentColor: c,
        isSecondary: l,
        railShowTitles: n
      }
    );
  }, B = (d, l, y) => {
    var M;
    if ((M = d.subitems) != null && M.length) {
      const P = y ? !!x[l] : !!_[l];
      return /* @__PURE__ */ t(
        ur,
        {
          link: d,
          expanded: P,
          onToggle: () => y ? A(l) : w(l),
          activePath: a,
          onLinkClick: p,
          accentColor: c,
          isSecondary: y
        }
      );
    }
    return /* @__PURE__ */ t(
      fr,
      {
        link: d,
        activePath: a,
        onLinkClick: p,
        accentColor: c,
        isSecondary: y
      }
    );
  };
  return e === "drawer" ? /* @__PURE__ */ h(
    C,
    {
      sx: {
        flexGrow: 1,
        width: "100%",
        alignItems: "stretch",
        pt: 2,
        gap: 0
      },
      children: [
        /* @__PURE__ */ t(C, { sx: { width: "100%" }, children: o.map((d, l) => /* @__PURE__ */ h(T.Fragment, { children: [
          B(d, l, !1),
          l < o.length - 1 ? /* @__PURE__ */ t(Ee, {}) : null
        ] }, l)) }),
        r.length > 0 ? /* @__PURE__ */ h(be, { children: [
          /* @__PURE__ */ t(
            U,
            {
              sx: {
                width: "100%",
                my: 2,
                display: "flex",
                justifyContent: "center"
              },
              children: /* @__PURE__ */ t(
                L,
                {
                  sx: { width: "60%", borderColor: "divider" }
                }
              )
            }
          ),
          /* @__PURE__ */ t(U, { sx: { mt: "auto", pb: 2 }, children: /* @__PURE__ */ t(C, { sx: { width: "100%" }, children: r.map((d, l) => /* @__PURE__ */ h(T.Fragment, { children: [
            B(d, l, !0),
            l < r.length - 1 ? /* @__PURE__ */ t(Ee, {}) : null
          ] }, l)) }) })
        ] }) : null
      ]
    }
  ) : /* @__PURE__ */ h(
    C,
    {
      sx: {
        flexGrow: 1,
        width: "100%",
        boxSizing: "border-box",
        justifyContent: "flex-start",
        alignItems: "center",
        pt: 2,
        gap: n ? 1.25 : 1
      },
      children: [
        o.map((d, l) => /* @__PURE__ */ h(T.Fragment, { children: [
          G(d, !1),
          l < o.length - 1 ? /* @__PURE__ */ t(Ee, {}) : null
        ] }, l)),
        r.length > 0 ? /* @__PURE__ */ h(be, { children: [
          /* @__PURE__ */ t(
            U,
            {
              sx: {
                width: "100%",
                my: 2,
                display: "flex",
                justifyContent: "center"
              },
              children: /* @__PURE__ */ t(
                L,
                {
                  sx: { width: "60%", borderColor: "divider" }
                }
              )
            }
          ),
          /* @__PURE__ */ t(U, { sx: { mt: "auto", pb: 2 }, children: /* @__PURE__ */ t(
            C,
            {
              gap: n ? 1.25 : 1,
              alignItems: "center",
              children: r.map((d, l) => /* @__PURE__ */ h(T.Fragment, { children: [
                G(d, !0),
                l < r.length - 1 ? /* @__PURE__ */ t(Ee, {}) : null
              ] }, l))
            }
          ) })
        ] }) : null
      ]
    }
  );
}, pr = ({
  open: e,
  onClose: o,
  mainLinks: r,
  secondaryLinks: a = [],
  activePath: s,
  onLinkClick: c,
  userName: i = "User Name",
  userAvatar: n,
  onLogout: N,
  showNotifications: v = !1,
  notificationCount: p = 0,
  onNotificationBellClick: _,
  alertProps: S,
  accentColor: x = "#01584f"
}) => /* @__PURE__ */ t(
  er,
  {
    anchor: "right",
    open: e,
    onClose: o,
    sx: {
      zIndex: (w) => w.zIndex.drawer + 1,
      "& .MuiDrawer-paper": {
        backgroundImage: "none",
        backgroundColor: "background.paper"
      }
    },
    children: /* @__PURE__ */ h(
      C,
      {
        sx: {
          maxWidth: "70dvw",
          height: "100%"
        },
        children: [
          /* @__PURE__ */ h(C, { direction: "row", sx: { p: 2, pb: 0, gap: 1 }, children: [
            /* @__PURE__ */ h(
              C,
              {
                direction: "row",
                sx: { gap: 1, alignItems: "center", flexGrow: 1, p: 1 },
                children: [
                  /* @__PURE__ */ t(
                    ke,
                    {
                      sizes: "small",
                      alt: i,
                      src: n,
                      sx: { width: 24, height: 24 }
                    }
                  ),
                  /* @__PURE__ */ t($, { component: "p", variant: "h6", children: i })
                ]
              }
            ),
            v && /* @__PURE__ */ t(
              lt,
              {
                color: "error",
                badgeContent: p,
                invisible: p === 0,
                sx: { "& .MuiBadge-badge": { right: 2, top: 2 } },
                children: /* @__PURE__ */ t(
                  J,
                  {
                    size: "small",
                    onClick: _,
                    "aria-label": "Notifications",
                    children: /* @__PURE__ */ t(Zt, {})
                  }
                )
              }
            )
          ] }),
          /* @__PURE__ */ t(L, {}),
          /* @__PURE__ */ h(C, { sx: { flexGrow: 1 }, children: [
            /* @__PURE__ */ t(
              mt,
              {
                variant: "drawer",
                mainLinks: r,
                secondaryLinks: a,
                activePath: s,
                onLinkClick: (w) => {
                  c == null || c(w), o();
                },
                accentColor: x
              }
            ),
            /* @__PURE__ */ t(L, {})
          ] }),
          (S == null ? void 0 : S.show) && /* @__PURE__ */ t(ut, { ...S }),
          /* @__PURE__ */ t(C, { sx: { p: 2 }, children: /* @__PURE__ */ t(
            ct,
            {
              variant: "outlined",
              fullWidth: !0,
              startIcon: /* @__PURE__ */ t(st, {}),
              onClick: N,
              children: "Logout"
            }
          ) })
        ]
      }
    )
  }
), gr = 100, io = ({
  children: e,
  sidebarLinks: o = [],
  secondarySidebarLinks: r = [],
  appName: a = "Dashboard",
  pageName: s = "Home",
  showHeader: c = !0,
  showSidebar: i = !0,
  showSidebarRailTitles: n = !1,
  enableRefreshToken: N = !1,
  activePath: v,
  onLinkClick: p,
  userName: _,
  userEmail: S,
  userAvatar: x,
  onLogout: O,
  onProfileClick: w,
  onAccountClick: A,
  onSettingsClick: G,
  showSettings: B = !0,
  showNotifications: d = !0,
  notificationCount: l = 0,
  NotificationSidebarContent: y,
  showSearchbar: M = !0,
  searchValue: P,
  onSearchChange: H,
  onSearchSubmit: Z,
  showProfile: Q = !0,
  userRole: u,
  onVerify: m,
  alertProps: D,
  style: le,
  headerStyles: Te,
  sidebarStyles: ce,
  contentStyles: he,
  accentColor: de,
  contentBackgroundColor: Oe,
  navbarBackground: ue,
  navbarAccentColor: fe,
  theme: X = "light",
  showThemeToggler: Ie = !1,
  onThemeToggle: Ne,
  GlobalChatSidebar: ee,
  useChatSidebar: Y,
  rightExtraContent: pe,
  customNavbar: f,
  customNavbarProps: xt,
  redirectToLogin: ge,
  apiBaseUrl: He
}) => {
  const wt = Nt(), q = Dt(wt.breakpoints.down("md")), Ge = Ze(
    () => at(tr(X)),
    [X]
  ), De = X === "dark", me = de ?? "#01584f", xe = Oe ?? (De ? "hsl(220, 35%, 9%)" : "#f2f9fc"), St = ue ?? (De ? "hsl(220, 30%, 7%)" : "#ffffff"), yt = fe ?? (De ? "#ffffff" : "#000000");
  let we = 0;
  i && !q && (we = gr);
  const [Pe, _e] = oe(!1), [Et, Se] = oe(!1), [Rt, bt] = oe(!0), [vt, Tt] = oe(!1), [mr, ye] = oe(null), Ae = Y == null ? void 0 : Y(), $e = (Ae == null ? void 0 : Ae.isOpen) ?? !1, Ce = et(m), je = et(!1), Le = Ze(
    () => ar(He),
    [He]
  );
  Me(() => {
    Ce.current = m;
  }, [m]);
  const Ot = () => {
    _e(!Pe);
  }, It = () => {
    _e(!1);
  }, Je = (qe) => {
    const V = O(qe);
    V instanceof Promise ? V.then(() => {
      ye(null);
    }).catch((Qe) => {
      console.error("Error in logout handler:", Qe), ye(null);
    }) : ye(null);
  };
  return Me(() => {
    (() => {
      try {
        const { isAuthenticated: V, error: Qe } = or();
        if (!V) {
          console.log("No session found, redirecting to login"), se(), ge();
          return;
        }
        if (!je.current) {
          const { user: te, error: We } = nr();
          if (te && !We) {
            const Xe = {
              name: te.name || "",
              email: te.email || "",
              profilePicture: te.profilePicture || "",
              role: te.role || ""
            };
            ye(Xe), je.current = !0, Ce.current && Ce.current(Xe);
          } else
            We && console.error("Error getting user data:", We);
        }
        Tt(!0);
      } catch (V) {
        console.error("Error checking session:", V), se(), ge();
      } finally {
        bt(!1);
      }
    })();
  }, [ge]), Me(() => {
    N && ir(Le, ge);
  }, [N, Le]), Rt ? /* @__PURE__ */ t(Ve, { theme: Ge, children: /* @__PURE__ */ h(
    re,
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
          _t,
          {
            size: 60,
            thickness: 4,
            sx: { color: me }
          }
        ),
        /* @__PURE__ */ t(re, { sx: { mt: 2, color: "text.secondary" }, children: "Checking session..." })
      ]
    }
  ) }) : vt ? /* @__PURE__ */ t(Ve, { theme: Ge, children: /* @__PURE__ */ h(
    re,
    {
      sx: {
        display: "flex",
        minHeight: "100vh",
        ...le
      },
      children: [
        /* @__PURE__ */ t(At, {}),
        c && /* @__PURE__ */ t(
          lr,
          {
            appName: a,
            pageName: s,
            onMenuClick: q && i ? Ot : void 0,
            showMenuButton: q && i,
            headerStyles: Te,
            userName: _,
            userEmail: S,
            userAvatar: x,
            onProfileClick: w,
            onAccountClick: A,
            onSettingsClick: G,
            showSettings: B,
            onLogout: Je,
            showNotifications: d,
            notificationCount: l,
            onNotificationBellClick: d && y ? () => Se(!0) : void 0,
            showSearchbar: M && !f,
            searchValue: P,
            onSearchChange: H,
            onSearchSubmit: Z,
            showProfile: Q,
            userRole: u,
            accentColor: me,
            contentBackgroundColor: xe,
            navbarBackground: St,
            navbarAccentColor: yt,
            theme: X,
            showThemeToggler: Ie,
            onThemeToggle: Ne,
            rightExtraContent: pe,
            customNavbar: f,
            customNavbarProps: xt
          }
        ),
        i && !q && /* @__PURE__ */ t(
          Ye,
          {
            variant: "permanent",
            sx: {
              width: we,
              flexShrink: 0,
              zIndex: 2,
              // Higher z-index than app bar
              "& .MuiDrawer-paper": {
                width: we,
                boxSizing: "border-box",
                bgcolor: xe,
                borderRight: "none",
                top: c ? "60px" : 0,
                // Position below header
                height: c ? "calc(100vh - 60px)" : "100vh"
              },
              ...ce
            },
            children: /* @__PURE__ */ h(
              re,
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
                    mt,
                    {
                      variant: "rail",
                      mainLinks: o,
                      secondaryLinks: r,
                      activePath: v,
                      onLinkClick: p,
                      accentColor: me,
                      surfaceBackgroundColor: xe,
                      railShowTitles: n
                    }
                  ),
                  (D == null ? void 0 : D.show) && /* @__PURE__ */ t(ut, { ...D })
                ]
              }
            )
          }
        ),
        i && q && /* @__PURE__ */ t(
          pr,
          {
            open: Pe,
            onClose: It,
            mainLinks: o,
            secondaryLinks: r,
            activePath: v,
            onLinkClick: p,
            userName: _,
            userEmail: S,
            userAvatar: x,
            onLogout: Je,
            onProfileClick: w,
            showNotifications: d,
            notificationCount: l,
            onNotificationBellClick: d && y ? () => {
              _e(!1), Se(!0);
            } : void 0,
            alertProps: D,
            accentColor: me
          }
        ),
        /* @__PURE__ */ t(
          re,
          {
            component: "main",
            sx: {
              flexGrow: 1,
              p: 3,
              width: q ? "100%" : i ? `calc(100% - ${we}px)` : "100%",
              mt: c ? "60px" : 0,
              // Account for AppNavbar height (60px)
              ml: 0,
              // Offset for sidebar on desktop
              backgroundColor: xe,
              mb: 0,
              mr: 0,
              ...he
            },
            children: /* @__PURE__ */ h(ze, { container: !0, spacing: 3, children: [
              /* @__PURE__ */ t(
                ze,
                {
                  size: {
                    xs: 12,
                    md: $e && ee ? 8.5 : 12
                  },
                  sx: {
                    display: "flex",
                    flexDirection: "column"
                  },
                  children: e
                }
              ),
              $e && ee && /* @__PURE__ */ t(
                ze,
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
                  children: /* @__PURE__ */ t(ee, {})
                }
              )
            ] })
          }
        ),
        d && y && /* @__PURE__ */ t(
          Ye,
          {
            anchor: "right",
            open: Et,
            onClose: () => Se(!1),
            slotProps: {
              paper: { sx: { width: 380, maxWidth: "100vw" } }
            },
            children: /* @__PURE__ */ t(
              y,
              {
                onClose: () => Se(!1)
              }
            )
          }
        )
      ]
    }
  ) }) : null;
};
export {
  I as AUTH_ERROR_CODES,
  b as AuthError,
  io as LumoraWrapper,
  se as clearAuthTokens,
  io as default,
  ao as getAuthErrorMessage,
  ie as getAuthTokens,
  nr as getCurrentUser,
  or as isAuthenticated,
  Be as logAuthError,
  dt as storeAuthTokens
};
