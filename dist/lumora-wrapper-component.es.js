import { jsx as t, jsxs as d, Fragment as me } from "react/jsx-runtime";
import { useTheme as Ot, useMediaQuery as It, Box as ee, CircularProgress as Nt, CssBaseline as _t, Drawer as qe, Grid as _e } from "@mui/material";
import { createTheme as rt, alpha as U, styled as Dt, useTheme as ot, ThemeProvider as Qe } from "@mui/material/styles";
import * as b from "react";
import { useMemo as Xe, useState as te, useRef as Ye, useEffect as De } from "react";
import Ve from "axios";
import Ze from "@mui/icons-material/AccountCircleRounded";
import nt from "@mui/icons-material/LogoutRounded";
import At from "@mui/icons-material/MenuRounded";
import Ct from "@mui/icons-material/NotificationsOutlined";
import Wt from "@mui/icons-material/SearchRounded";
import zt from "@mui/material/AppBar";
import We from "@mui/material/Avatar";
import at from "@mui/material/Badge";
import H from "@mui/material/Box";
import L from "@mui/material/Divider";
import X from "@mui/material/IconButton";
import Ft from "@mui/material/InputAdornment";
import Mt from "@mui/material/Menu";
import ze from "@mui/material/MenuItem";
import C from "@mui/material/Stack";
import Kt from "@mui/material/TextField";
import Ut from "@mui/material/Toolbar";
import $ from "@mui/material/Typography";
import kt from "@mui/material/useMediaQuery";
import Bt from "@mui/material/Card";
import Ht from "@mui/material/CardContent";
import st from "@mui/material/Button";
import Gt from "@mui/icons-material/AutoAwesomeRounded";
import Pt from "@mui/icons-material/ExpandLess";
import $t from "@mui/icons-material/ExpandMore";
import jt from "@mui/material/Collapse";
import ge from "@mui/material/ListItemButton";
import xe from "@mui/material/ListItemIcon";
import re from "@mui/material/ListItemText";
import Jt from "@mui/material/MenuList";
import Lt from "@mui/material/Paper";
import qt from "@mui/material/Popper";
import Me from "@mui/material/Tooltip";
import Qt from "@mui/icons-material/NotificationsRounded";
import Xt from "@mui/material/Drawer";
const E = rt(), et = [...E.shadows], p = {
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
}, S = {
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
}, k = {
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
}, F = {
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
}, B = {
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
}, Yt = (e) => (et[1] = e === "dark" ? "hsla(220, 30%, 5%, 0.7) 0px 4px 16px 0px, hsla(220, 25%, 10%, 0.8) 0px 8px 16px -5px" : "hsla(220, 30%, 5%, 0.07) 0px 4px 16px 0px, hsla(220, 25%, 10%, 0.07) 0px 8px 16px -5px", {
  palette: {
    mode: e,
    primary: {
      light: p[200],
      main: p[400],
      dark: p[700],
      contrastText: p[50],
      ...e === "dark" && {
        contrastText: p[50],
        light: p[300],
        main: p[400],
        dark: p[700]
      }
    },
    info: {
      light: p[100],
      main: p[300],
      dark: p[600],
      contrastText: S[50],
      ...e === "dark" && {
        contrastText: p[300],
        light: p[500],
        main: p[700],
        dark: p[900]
      }
    },
    warning: {
      light: F[300],
      main: F[400],
      dark: F[800],
      ...e === "dark" && {
        light: F[400],
        main: F[500],
        dark: F[700]
      }
    },
    error: {
      light: B[300],
      main: B[400],
      dark: B[800],
      ...e === "dark" && {
        light: B[400],
        main: B[500],
        dark: B[700]
      }
    },
    success: {
      light: k[300],
      main: k[400],
      dark: k[800],
      ...e === "dark" && {
        light: k[400],
        main: k[500],
        dark: k[700]
      }
    },
    grey: {
      ...S
    },
    divider: e === "dark" ? U(S[700], 0.6) : U(S[300], 0.4),
    background: {
      default: "hsl(0, 0%, 99%)",
      paper: "hsl(220, 35%, 97%)",
      ...e === "dark" && {
        default: S[900],
        paper: "hsl(220, 30%, 7%)"
      }
    },
    text: {
      primary: S[800],
      secondary: S[600],
      warning: F[400],
      ...e === "dark" && {
        primary: "hsl(0, 0%, 100%)",
        secondary: S[400]
      }
    },
    action: {
      hover: U(S[200], 0.2),
      selected: `${U(S[200], 0.3)}`,
      ...e === "dark" && {
        hover: U(S[600], 0.2),
        selected: U(S[600], 0.3)
      }
    }
  },
  typography: {
    fontFamily: "Inter, sans-serif",
    h1: {
      fontSize: E.typography.pxToRem(48),
      fontWeight: 600,
      lineHeight: 1.2,
      letterSpacing: -0.5
    },
    h2: {
      fontSize: E.typography.pxToRem(36),
      fontWeight: 600,
      lineHeight: 1.2
    },
    h3: {
      fontSize: E.typography.pxToRem(30),
      lineHeight: 1.2
    },
    h4: {
      fontSize: E.typography.pxToRem(24),
      fontWeight: 600,
      lineHeight: 1.5
    },
    h5: {
      fontSize: E.typography.pxToRem(20),
      fontWeight: 600
    },
    h6: {
      fontSize: E.typography.pxToRem(18),
      fontWeight: 600
    },
    subtitle1: {
      fontSize: E.typography.pxToRem(18)
    },
    subtitle2: {
      fontSize: E.typography.pxToRem(14),
      fontWeight: 500
    },
    body1: {
      fontSize: E.typography.pxToRem(14)
    },
    body2: {
      fontSize: E.typography.pxToRem(14),
      fontWeight: 400
    },
    caption: {
      fontSize: E.typography.pxToRem(12),
      fontWeight: 400
    }
  },
  shape: {
    borderRadius: 8
  },
  shadows: et
});
p[200], p[400], p[700], p[50], p[100], p[300], p[600], S[50], F[300], F[400], F[800], B[300], B[400], B[800], k[300], k[400], k[800], {
  ...S
}, U(S[300], 0.4), S[800], S[600], F[400], U(S[200], 0.2), `${U(S[200], 0.3)}`, p[50], p[300], p[400], p[700], p[300], p[500], p[700], p[900], F[400], F[500], F[700], B[400], B[500], B[700], k[400], k[500], k[700], {
  ...S
}, U(S[700], 0.6), S[900], S[400], U(S[600], 0.2), U(S[600], 0.3);
E.typography.pxToRem(48), E.typography.pxToRem(36), E.typography.pxToRem(30), E.typography.pxToRem(24), E.typography.pxToRem(20), E.typography.pxToRem(18), E.typography.pxToRem(18), E.typography.pxToRem(14), E.typography.pxToRem(14), E.typography.pxToRem(14), E.typography.pxToRem(12);
[
  ...E.shadows.slice(2)
];
class y extends Error {
  constructor(o, r, a = null) {
    super(o), this.name = "AuthError", this.code = r, this.originalError = a, this.timestamp = (/* @__PURE__ */ new Date()).toISOString();
  }
}
const O = {
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
}, J = {
  ACCESS_TOKEN: "accessToken",
  REFRESH_TOKEN: "refreshToken",
  USER: "user"
}, Vt = () => {
  if (!(typeof window > "u" || !window.localStorage))
    try {
      const e = localStorage.getItem(J.ACCESS_TOKEN), o = localStorage.getItem(J.REFRESH_TOKEN), r = localStorage.getItem(J.USER);
      e && !localStorage.getItem(W.ACCESS_TOKEN) && localStorage.setItem(W.ACCESS_TOKEN, e), o && !localStorage.getItem(W.REFRESH_TOKEN) && localStorage.setItem(W.REFRESH_TOKEN, o), r && !localStorage.getItem(W.USER) && localStorage.setItem(W.USER, r), (e || o || r) && (localStorage.removeItem(J.ACCESS_TOKEN), localStorage.removeItem(J.REFRESH_TOKEN), localStorage.removeItem(J.USER));
    } catch (e) {
      console.warn("Failed to migrate legacy localStorage keys:", e);
    }
}, Ae = (e) => {
  try {
    if (typeof window > "u")
      return console.warn("localStorage access attempted on server side"), null;
    if (!window.localStorage)
      throw new y("localStorage is not available", O.STORAGE_ACCESS_DENIED);
    return window.localStorage.getItem(e);
  } catch (o) {
    throw o.name === "QuotaExceededError" ? (console.error("Storage quota exceeded"), new y(
      "Storage quota exceeded. Please clear browser data.",
      O.STORAGE_ACCESS_DENIED,
      o
    )) : o.name === "SecurityError" ? (console.error("localStorage access denied (private browsing or security settings)"), new y(
      "Access to localStorage is denied. Please check browser settings.",
      O.STORAGE_ACCESS_DENIED,
      o
    )) : (console.error("Unexpected error accessing localStorage:", o.name), new y("Failed to access storage", O.STORAGE_ACCESS_DENIED, o));
  }
}, Ce = (e, o) => {
  try {
    if (typeof window > "u")
      return console.warn("localStorage write attempted on server side"), !1;
    if (!window.localStorage)
      throw new y("localStorage is not available", O.STORAGE_ACCESS_DENIED);
    return window.localStorage.setItem(e, o), !0;
  } catch (r) {
    throw r.name === "QuotaExceededError" ? (console.error("Storage quota exceeded"), new y(
      "Storage quota exceeded. Please clear browser data.",
      O.STORAGE_ACCESS_DENIED,
      r
    )) : r.name === "SecurityError" ? (console.error("localStorage write denied (private browsing or security settings)"), new y(
      "Access to localStorage is denied. Please check browser settings.",
      O.STORAGE_ACCESS_DENIED,
      r
    )) : (console.error("Unexpected error writing to localStorage:", r.name), new y("Failed to write to storage", O.STORAGE_ACCESS_DENIED, r));
  }
}, it = (e) => {
  try {
    return typeof window > "u" ? (console.warn("localStorage removal attempted on server side"), !1) : window.localStorage ? (window.localStorage.removeItem(e), !0) : (console.warn("localStorage is not available"), !1);
  } catch (o) {
    return o.name !== "SecurityError" && console.warn(`Could not remove localStorage key "${e}"`), !1;
  }
}, oe = () => {
  try {
    Vt();
    const e = Ae(W.ACCESS_TOKEN), o = Ae(W.REFRESH_TOKEN), r = Ae(W.USER);
    let a = null;
    if (r)
      try {
        a = JSON.parse(r);
      } catch {
        r && r !== "null" && r !== "undefined" && console.warn("Invalid user data in localStorage, clearing:", r.substring(0, 50)), it(W.USER);
      }
    return {
      accessToken: e,
      refreshToken: o,
      user: a
    };
  } catch (e) {
    throw e instanceof y ? e : new y("Failed to retrieve authentication tokens", O.UNKNOWN_ERROR, e);
  }
}, Zt = () => {
  try {
    const { accessToken: e, refreshToken: o } = oe();
    return !(e || o) ? {
      isAuthenticated: !1,
      error: new y("No authentication tokens found", O.TOKEN_NOT_FOUND)
    } : {
      isAuthenticated: !0,
      error: null
    };
  } catch (e) {
    return console.error("Authentication check failed:", e), {
      isAuthenticated: !1,
      error: e instanceof y ? e : new y("Authentication check failed", O.UNKNOWN_ERROR, e)
    };
  }
}, lt = (e, o, r = null) => {
  try {
    if (!e && !o)
      throw new y("At least one token must be provided", O.TOKEN_INVALID);
    return e && Ce(W.ACCESS_TOKEN, e), o && Ce(W.REFRESH_TOKEN, o), r && Ce(W.USER, JSON.stringify(r)), {
      success: !0,
      error: null
    };
  } catch (a) {
    return console.error("Failed to store authentication tokens:", a), {
      success: !1,
      error: a instanceof y ? a : new y("Failed to store tokens", O.UNKNOWN_ERROR, a)
    };
  }
}, ne = () => {
  try {
    return [
      W.ACCESS_TOKEN,
      W.REFRESH_TOKEN,
      W.USER,
      // Also clear legacy keys for complete cleanup
      J.ACCESS_TOKEN,
      J.REFRESH_TOKEN,
      J.USER
    ].map((a) => it(a)).every((a) => a) || console.warn("Some tokens could not be removed from localStorage"), {
      success: !0,
      error: null
    };
  } catch (e) {
    return console.error("Failed to clear authentication tokens:", e), {
      success: !1,
      error: e instanceof y ? e : new y("Failed to clear tokens", O.LOGOUT_FAILED, e)
    };
  }
}, er = () => {
  try {
    const { user: e } = oe();
    return {
      user: e,
      error: null
    };
  } catch (e) {
    return console.error("Failed to get current user:", e), {
      user: null,
      error: e instanceof y ? e : new y("Failed to retrieve user data", O.UNKNOWN_ERROR, e)
    };
  }
}, Zr = (e) => {
  if (!(e instanceof y))
    return "An unexpected error occurred. Please try again.";
  switch (e.code) {
    case O.STORAGE_ACCESS_DENIED:
      return "Unable to access browser storage. Please check your browser settings and disable private browsing if enabled.";
    case O.TOKEN_NOT_FOUND:
      return "You are not logged in. Please sign in to continue.";
    case O.TOKEN_INVALID:
      return "Your session is invalid. Please sign in again.";
    case O.TOKEN_EXPIRED:
      return "Your session has expired. Please sign in again.";
    case O.LOGOUT_FAILED:
      return "Failed to log out properly. Please clear your browser cache and try again.";
    case O.UNKNOWN_ERROR:
    default:
      return "An unexpected error occurred. Please try again or contact support if the problem persists.";
  }
}, Fe = (e, o = "Unknown") => {
  const r = {
    context: o,
    message: e.message,
    code: e instanceof y ? e.code : "UNKNOWN",
    timestamp: e instanceof y ? e.timestamp : (/* @__PURE__ */ new Date()).toISOString(),
    stack: e.stack
  };
  e instanceof y && e.originalError && (r.originalError = {
    name: e.originalError.name,
    message: e.originalError.message
  }), console.warn("[Auth Error]", r);
}, tr = (e) => {
  if (!e)
    throw new Error("API base URL is required to create axios client");
  const o = Ve.create({
    baseURL: e,
    headers: {
      "Content-Type": "application/json"
    }
  });
  let r = !1, a = null, i = [];
  const c = (s, n) => {
    i.forEach(({ resolve: I, reject: R }) => {
      s ? R(s) : n && I(n);
    }), i = [];
  };
  return o.interceptors.request.use(
    (s) => {
      const { accessToken: n } = oe();
      return n && s.headers && (s.headers.Authorization = `Bearer ${n}`), s;
    },
    (s) => Promise.reject(s)
  ), o.interceptors.response.use(
    (s) => s,
    async (s) => {
      var w;
      const n = s.config, I = (w = s.response) == null ? void 0 : w.status, R = (n == null ? void 0 : n.url) || "", f = R.includes("/auth/refresh");
      if (I !== 401 || n._retry || f)
        return Promise.reject(s);
      n._retry = !0;
      const { refreshToken: _ } = oe();
      if (!_) {
        const m = new Error(
          "No refresh token available for token refresh"
        );
        return Fe(m, "AxiosClient - Token Refresh"), ne(), typeof window < "u" && (window.location.href = "/login"), Promise.reject(s);
      }
      if (r && a)
        return new Promise((m, T) => {
          i.push({ resolve: m, reject: T });
        }).then((m) => {
          const {
            accessToken: T,
            refreshToken: x
          } = m;
          if (n.headers && (n.headers.Authorization = `Bearer ${T}`), R.includes("/auth/logout"))
            try {
              if (typeof n.data == "string") {
                const A = JSON.parse(
                  n.data || "{}"
                );
                A.refresh_token = x, n.data = JSON.stringify(A);
              } else
                n.data && typeof n.data == "object" ? n.data.refresh_token = x : n.data = JSON.stringify({
                  refresh_token: x
                });
            } catch {
              n.data = JSON.stringify({
                refresh_token: x
              });
            }
          return o(n);
        }).catch((m) => Promise.reject(m));
      r = !0, a = Ve.post(
        `${e}/auth/refresh`,
        {
          refresh_token: _
        }
      );
      try {
        const m = await a, { accessToken: T, refreshToken: x } = m.data;
        if (lt(T, x, null), c(null, {
          accessToken: T,
          refreshToken: x
        }), n.headers && (n.headers.Authorization = `Bearer ${T}`), R.includes("/auth/logout"))
          try {
            if (typeof n.data == "string") {
              const A = JSON.parse(
                n.data || "{}"
              );
              A.refresh_token = x, n.data = JSON.stringify(A);
            } else
              n.data && typeof n.data == "object" ? n.data.refresh_token = x : n.data = JSON.stringify({
                refresh_token: x
              });
          } catch {
            n.data = JSON.stringify({
              refresh_token: x
            });
          }
        return o(n);
      } catch (m) {
        return Fe(
          m,
          "AxiosClient - Token Refresh Failed"
        ), c(m), ne(), typeof window < "u" && (window.location.href = "/login"), Promise.reject(m);
      } finally {
        r = !1, a = null;
      }
    }
  ), o;
}, rr = async (e, o) => {
  const { accessToken: r, refreshToken: a } = oe();
  if (r)
    return !0;
  if (a)
    try {
      const i = await e.post("/auth/refresh", {
        refresh_token: a
      });
      if (i.data.success && i.data.accessToken)
        return lt(i.data.accessToken, i.data.refreshToken || null, null), !0;
    } catch (i) {
      Fe(i, "TokenValidator - Refresh Failed");
    }
  return ne(), o ? o() : window.location.href = "/login", !1;
}, or = Dt(Ut)({
  width: "100%",
  padding: "8px 16px",
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
  gap: "16px",
  flexShrink: 0
}), nr = ({
  appName: e = "Dashboard",
  pageName: o = "Home",
  onMenuClick: r,
  showMenuButton: a = !0,
  headerStyles: i,
  userName: c = "User Name",
  userEmail: s,
  userAvatar: n,
  onProfileClick: I,
  onAccountClick: R,
  onSettingsClick: f,
  showSettings: _ = !0,
  onLogout: w,
  showNotifications: m = !1,
  notificationCount: T = 0,
  onNotificationBellClick: x,
  showSearchbar: A = !0,
  searchValue: M,
  onSearchChange: K,
  onSearchSubmit: h,
  showProfile: l = !0,
  userRole: v,
  accentColor: G = "#01584f",
  contentBackgroundColor: j = "#f2f9fc",
  navbarBackground: P = "#ff0000",
  navbarAccentColor: z = "#000000",
  rightExtraContent: q = [],
  customNavbar: u,
  customNavbarProps: D
}) => {
  const N = kt((g) => g.breakpoints.up("md")), [ae, se] = b.useState(null), we = !!ae, Se = (g) => {
    K == null || K(g.target.value);
  }, Ee = (g) => {
    g.key === "Enter" && h && M && h(M);
  }, ye = (g) => g ? g.charAt(0).toUpperCase() + g.slice(1).toLowerCase() : "User", Re = (g) => {
    se(g.currentTarget);
  }, ie = () => {
    se(null);
  }, Y = (g) => {
    g == null || g(), ie();
  };
  return /* @__PURE__ */ t(
    zt,
    {
      position: "fixed",
      sx: {
        boxShadow: 0,
        background: P,
        top: "var(--template-frame-height, 0px)",
        left: 0,
        width: "100%",
        zIndex: 1,
        height: "60px",
        ...i
      },
      children: /* @__PURE__ */ d(or, { variant: "dense", sx: { height: "100%" }, children: [
        /* @__PURE__ */ d(
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
              a && !N && /* @__PURE__ */ t(
                X,
                {
                  "aria-label": "menu",
                  onClick: r,
                  sx: {
                    color: z,
                    "&:hover": {
                      backgroundColor: "action.hover"
                    }
                  },
                  children: /* @__PURE__ */ t(At, {})
                }
              ),
              /* @__PURE__ */ d(
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
                          color: z,
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
              u ? /* @__PURE__ */ t(u, { ...D || {} }) : A && N && /* @__PURE__ */ t(
                Kt,
                {
                  placeholder: "Search for deals or documents...",
                  value: M || "",
                  onChange: Se,
                  onKeyDown: Ee,
                  size: "small",
                  sx: {
                    width: "400px",
                    "& .MuiOutlinedInput-root": {
                      backgroundColor: j,
                      borderRadius: "8px",
                      "& fieldset": {
                        borderColor: "transparent"
                      },
                      "&:hover fieldset": {
                        borderColor: "transparent"
                      },
                      "&.Mui-focused fieldset": {
                        borderColor: G
                      }
                    }
                  },
                  InputProps: {
                    startAdornment: /* @__PURE__ */ t(Ft, { position: "start", children: /* @__PURE__ */ t(
                      Wt,
                      {
                        sx: {
                          color: z
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
          C,
          {
            direction: "row",
            sx: {
              alignItems: "center",
              gap: 1.5,
              flexShrink: 0
            },
            children: [
              m && /* @__PURE__ */ t(
                at,
                {
                  color: "error",
                  badgeContent: T,
                  invisible: T === 0,
                  sx: {
                    "& .MuiBadge-badge": {
                      right: 2,
                      top: 2
                    }
                  },
                  children: /* @__PURE__ */ t(
                    X,
                    {
                      size: "small",
                      onClick: x,
                      "aria-label": T ? `Notifications, ${T} unread` : "Notifications",
                      sx: { color: z },
                      children: /* @__PURE__ */ t(Ct, {})
                    }
                  )
                }
              ),
              m && l && /* @__PURE__ */ t(
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
              l && /* @__PURE__ */ d(me, { children: [
                /* @__PURE__ */ d(
                  C,
                  {
                    direction: "row",
                    onClick: Re,
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
                        We,
                        {
                          src: n,
                          sx: { width: 32, height: 32 }
                        }
                      ) : /* @__PURE__ */ t(
                        Ze,
                        {
                          sx: {
                            width: 32,
                            height: 32,
                            color: z
                          }
                        }
                      ),
                      /* @__PURE__ */ d(
                        H,
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
                                  color: z,
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
                                  color: z,
                                  lineHeight: 1.2,
                                  overflow: "hidden",
                                  textOverflow: "ellipsis",
                                  whiteSpace: "nowrap",
                                  maxWidth: "150px"
                                },
                                children: ye(v)
                              }
                            )
                          ]
                        }
                      )
                    ]
                  }
                ),
                /* @__PURE__ */ d(
                  Mt,
                  {
                    anchorEl: ae,
                    open: we,
                    onClose: ie,
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
                          ze,
                          {
                            onClick: () => Y(f),
                            children: "Settings"
                          },
                          "settings"
                        ),
                        /* @__PURE__ */ t(L, {}, "settings-divider")
                      ],
                      /* @__PURE__ */ d(
                        ze,
                        {
                          onClick: () => Y(w),
                          sx: {
                            color: "error.main",
                            "&:hover": {
                              color: "error.dark"
                            }
                          },
                          children: [
                            /* @__PURE__ */ t($, { sx: { flexGrow: 1 }, children: "Logout" }),
                            /* @__PURE__ */ t(nt, { fontSize: "small" })
                          ]
                        }
                      )
                    ]
                  }
                )
              ] }),
              q.length !== 0 && q.map((g) => g.type === "divider" ? /* @__PURE__ */ t(
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
                g.key
              ) : g.type === "profile" ? /* @__PURE__ */ d(
                C,
                {
                  direction: "row",
                  onClick: g.onClick,
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
                    g.avatar ? /* @__PURE__ */ t(
                      We,
                      {
                        src: g.avatar,
                        sx: { width: 32, height: 32 }
                      }
                    ) : /* @__PURE__ */ t(
                      Ze,
                      {
                        sx: {
                          width: 32,
                          height: 32,
                          color: z
                        }
                      }
                    ),
                    /* @__PURE__ */ d(
                      H,
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
                                color: z,
                                fontWeight: 500,
                                lineHeight: 1.2,
                                overflow: "hidden",
                                textOverflow: "ellipsis",
                                whiteSpace: "nowrap",
                                maxWidth: "150px"
                              },
                              children: g.name
                            }
                          ),
                          /* @__PURE__ */ t(
                            $,
                            {
                              variant: "caption",
                              sx: {
                                color: z,
                                lineHeight: 1.2,
                                overflow: "hidden",
                                textOverflow: "ellipsis",
                                whiteSpace: "nowrap",
                                maxWidth: "150px"
                              },
                              children: g.role
                            }
                          )
                        ]
                      }
                    )
                  ]
                },
                g.key
              ) : null)
            ]
          }
        )
      ] })
    }
  );
}, ct = ({
  title: e = "",
  message: o = "",
  buttonText: r = "",
  onButtonClick: a,
  show: i = !0
}) => i ? /* @__PURE__ */ t(Bt, { variant: "outlined", sx: { m: 1.5, flexShrink: 0 }, children: /* @__PURE__ */ d(Ht, { children: [
  /* @__PURE__ */ t(Gt, { fontSize: "small" }),
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
    st,
    {
      variant: "contained",
      size: "small",
      fullWidth: !0,
      onClick: a,
      children: r
    }
  )
] }) }) : null, ar = 180, tt = 250, ht = (e, o) => {
  var r;
  return o ? e.path && o === e.path ? !0 : ((r = e.subitems) == null ? void 0 : r.some((a) => a.path === o)) ?? !1 : !1;
}, dt = (e, o) => !!(o && e.path === o), ut = ({
  text: e,
  testId: o
}) => {
  const r = b.useRef(null), [a, i] = b.useState(!1), c = b.useCallback(() => {
    const s = r.current;
    s && i(s.scrollWidth > s.clientWidth + 0.5);
  }, []);
  return b.useLayoutEffect(() => {
    c();
  }, [c, e]), b.useEffect(() => {
    const s = r.current;
    if (!s)
      return;
    const n = new ResizeObserver(() => c());
    return n.observe(s), () => n.disconnect();
  }, [c]), /* @__PURE__ */ t(
    Me,
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
}, sr = ({
  link: e,
  activePath: o,
  onLinkClick: r,
  accentColor: a,
  isSecondary: i,
  surfaceBackgroundColor: c,
  railShowTitles: s = !1
}) => {
  const n = ot(), [I, R] = b.useState(null), [f, _] = b.useState(!1), w = b.useRef(
    null
  ), m = b.useRef(null), T = b.useRef(null), x = b.useRef(!1), A = b.useRef(!1), M = b.useId(), K = () => {
    w.current && (clearTimeout(w.current), w.current = null);
  }, h = () => {
    K(), w.current = setTimeout(() => {
      _(!1), w.current = null;
    }, ar);
  }, l = () => {
    K(), _(!0);
  };
  b.useEffect(() => {
    if (!f)
      return;
    const u = (D) => {
      var N;
      D.key === "Escape" && (_(!1), (N = T.current) == null || N.focus());
    };
    return document.addEventListener("keydown", u), () => document.removeEventListener("keydown", u);
  }, [f]), b.useEffect(() => {
    if (!f || !A.current)
      return;
    const u = globalThis.requestAnimationFrame(() => {
      var N;
      const D = (N = m.current) == null ? void 0 : N.querySelector(
        '[role="menuitem"]'
      );
      D == null || D.focus(), A.current = !1;
    });
    return () => cancelAnimationFrame(u);
  }, [f]);
  const v = ht(e, o), G = i ? 48 : 44, j = i ? "text.secondary" : a, P = i ? "#01584F" : a, z = {
    width: "100%",
    maxWidth: "100%",
    minWidth: G,
    height: "auto",
    minHeight: G,
    flexDirection: "column",
    py: 0.5,
    // Horizontal padding so labels (esp. active fill) do not touch the box edges
    px: 1,
    borderRadius: "4px",
    color: v ? "#ffffff" : j,
    backgroundColor: v ? P : "transparent",
    "&:hover": {
      backgroundColor: v ? P : "action.hover",
      borderRadius: "4px",
      color: v ? "#ffffff" : j
    }
  }, q = s ? /* @__PURE__ */ t(
    X,
    {
      ref: T,
      component: e.path ? "a" : "button",
      href: e.path || void 0,
      "aria-label": e.text,
      onFocus: () => {
        x.current || l();
      },
      onBlur: (u) => {
        var N;
        const D = u.relatedTarget;
        D && ((N = m.current) != null && N.contains(D)) || h();
      },
      onKeyDown: (u) => {
        u.key === "ArrowDown" && (u.preventDefault(), A.current = !0, l());
      },
      onClick: (u) => {
        u.preventDefault(), u.stopPropagation(), e.path && (r == null || r(e.path));
      },
      "aria-haspopup": "menu",
      "aria-expanded": f,
      "aria-controls": f ? M : void 0,
      "data-testid": `rail-submenu-trigger-${e.text}`,
      sx: z,
      children: /* @__PURE__ */ d(C, { alignItems: "center", spacing: 1, sx: { width: "100%" }, children: [
        /* @__PURE__ */ t(
          H,
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
          ut,
          {
            text: e.text,
            testId: `rail-item-caption-${e.text}`
          }
        )
      ] })
    }
  ) : /* @__PURE__ */ t(
    X,
    {
      ref: T,
      component: e.path ? "a" : "button",
      href: e.path || void 0,
      "aria-label": e.text,
      onFocus: () => {
        x.current || l();
      },
      onBlur: (u) => {
        var N;
        const D = u.relatedTarget;
        D && ((N = m.current) != null && N.contains(D)) || h();
      },
      onKeyDown: (u) => {
        u.key === "ArrowDown" && (u.preventDefault(), A.current = !0, l());
      },
      onClick: (u) => {
        u.preventDefault(), u.stopPropagation(), e.path && (r == null || r(e.path));
      },
      "aria-haspopup": "menu",
      "aria-expanded": f,
      "aria-controls": f ? M : void 0,
      "data-testid": `rail-submenu-trigger-${e.text}`,
      sx: {
        width: G,
        height: G,
        color: v ? "#ffffff" : j,
        backgroundColor: v ? P : "transparent",
        borderRadius: v ? "4px" : "50%",
        "&:hover": {
          backgroundColor: v ? P : "action.hover",
          borderRadius: "4px"
        }
      },
      children: e.icon
    }
  );
  return /* @__PURE__ */ d(
    H,
    {
      sx: {
        width: "100%",
        display: "flex",
        justifyContent: "center"
      },
      children: [
        /* @__PURE__ */ t(
          H,
          {
            ref: R,
            "data-testid": `rail-submenu-anchor-${e.text}`,
            sx: { display: "inline-flex", maxWidth: "100%" },
            onMouseEnter: () => {
              x.current = !0, l();
            },
            onMouseLeave: () => {
              x.current = !1, h();
            },
            children: s ? q : /* @__PURE__ */ t(Me, { title: e.text, placement: "right", arrow: !0, children: q })
          }
        ),
        /* @__PURE__ */ t(
          qt,
          {
            open: f && !!I,
            anchorEl: I,
            placement: "right-start",
            modifiers: [{ name: "offset", options: { offset: [8, 0] } }],
            sx: { zIndex: (u) => u.zIndex.modal },
            children: /* @__PURE__ */ t(
              Lt,
              {
                ref: m,
                elevation: 0,
                onMouseEnter: () => {
                  K();
                },
                onMouseLeave: h,
                "data-testid": `rail-submenu-panel-${e.text}`,
                sx: {
                  bgcolor: c,
                  backgroundImage: "none",
                  borderRadius: "4px",
                  border: "1px solid",
                  borderColor: "divider",
                  boxShadow: n.shadows[8],
                  maxWidth: tt,
                  minWidth: 0,
                  py: 0.5,
                  boxSizing: "border-box"
                },
                children: /* @__PURE__ */ t(
                  Jt,
                  {
                    id: M,
                    dense: !0,
                    autoFocus: !1,
                    role: "menu",
                    sx: {
                      bgcolor: "transparent",
                      py: 0,
                      maxWidth: tt
                    },
                    children: e.subitems.map((u) => /* @__PURE__ */ d(
                      ze,
                      {
                        role: "menuitem",
                        title: u.text,
                        selected: dt(u, o),
                        onClick: (D) => {
                          D.preventDefault(), r == null || r(u.path), _(!1);
                        },
                        sx: {
                          borderRadius: "4px",
                          mx: 0.5,
                          my: 0.125,
                          maxWidth: "100%",
                          overflow: "hidden",
                          color: i ? "text.secondary" : a,
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
                            bgcolor: P,
                            color: "#ffffff",
                            "&:hover": {
                              bgcolor: P
                            }
                          },
                          "&.Mui-focusVisible": {
                            bgcolor: "action.focus"
                          }
                        },
                        children: [
                          u.icon ? /* @__PURE__ */ t(xe, { children: u.icon }) : null,
                          /* @__PURE__ */ t(
                            re,
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
}, ir = ({
  link: e,
  activePath: o,
  onLinkClick: r,
  accentColor: a,
  isSecondary: i,
  railShowTitles: c = !1
}) => {
  const s = !!(e.path && o === e.path), n = i ? 48 : 44, I = i ? "text.secondary" : a, R = i ? "#01584F" : a, f = {
    width: "100%",
    maxWidth: "100%",
    minWidth: n,
    height: "auto",
    minHeight: n,
    flexDirection: "column",
    py: 0.5,
    px: 1,
    borderRadius: "4px",
    color: s ? "#ffffff" : I,
    backgroundColor: s ? R : "transparent",
    "&:hover": {
      backgroundColor: s ? R : "action.hover",
      borderRadius: "4px",
      color: s ? "#ffffff" : I
    }
  }, _ = c ? /* @__PURE__ */ t(
    X,
    {
      component: e.path ? "a" : "button",
      href: e.path || void 0,
      "aria-label": e.text,
      onClick: (w) => {
        w.preventDefault(), w.stopPropagation(), e.path && (r == null || r(e.path));
      },
      disabled: !e.path,
      sx: f,
      children: /* @__PURE__ */ d(C, { alignItems: "center", spacing: 1, sx: { width: "100%" }, children: [
        /* @__PURE__ */ t(
          H,
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
          ut,
          {
            text: e.text,
            testId: `rail-item-caption-${e.text}`
          }
        )
      ] })
    }
  ) : /* @__PURE__ */ t(
    X,
    {
      component: e.path ? "a" : "button",
      href: e.path || void 0,
      "aria-label": e.text,
      onClick: (w) => {
        w.preventDefault(), w.stopPropagation(), e.path && (r == null || r(e.path));
      },
      disabled: !e.path,
      sx: {
        width: n,
        height: n,
        color: s ? "#ffffff" : I,
        backgroundColor: s ? R : "transparent",
        borderRadius: s ? "4px" : "50%",
        "&:hover": {
          backgroundColor: s ? R : "action.hover",
          borderRadius: "4px"
        }
      },
      children: e.icon
    }
  );
  return c ? _ : /* @__PURE__ */ t(Me, { title: e.text, placement: "right", arrow: !0, children: _ });
}, lr = ({
  link: e,
  expanded: o,
  onToggle: r,
  activePath: a,
  onLinkClick: i,
  accentColor: c,
  isSecondary: s
}) => {
  const n = ht(e, a), I = s ? "text.secondary" : c, R = s ? "#01584F" : c;
  return /* @__PURE__ */ d(me, { children: [
    /* @__PURE__ */ d(
      ge,
      {
        onClick: r,
        sx: {
          py: 1.5,
          px: 2,
          color: n ? "#ffffff" : I,
          bgcolor: n ? R : "transparent",
          "&:hover": {
            bgcolor: n ? R : "action.hover"
          }
        },
        "data-testid": `drawer-expand-trigger-${e.text}`,
        children: [
          /* @__PURE__ */ t(xe, { sx: { color: "inherit", minWidth: 40 }, children: e.icon }),
          /* @__PURE__ */ t(re, { primary: e.text }),
          o ? /* @__PURE__ */ t(Pt, {}) : /* @__PURE__ */ t($t, {})
        ]
      }
    ),
    /* @__PURE__ */ t(jt, { in: o, timeout: "auto", unmountOnExit: !0, children: /* @__PURE__ */ d(H, { component: "nav", "aria-label": e.text, children: [
      e.path ? /* @__PURE__ */ t(
        ge,
        {
          sx: { pl: 4, py: 1 },
          onClick: () => e.path && (i == null ? void 0 : i(e.path)),
          selected: !!(a && a === e.path),
          "data-testid": `drawer-parent-path-${e.text}`,
          children: /* @__PURE__ */ t(re, { primary: e.text })
        }
      ) : null,
      e.subitems.map((f) => /* @__PURE__ */ d(
        ge,
        {
          sx: { pl: 4, py: 1 },
          onClick: () => i == null ? void 0 : i(f.path),
          selected: dt(f, a),
          children: [
            f.icon ? /* @__PURE__ */ t(xe, { sx: { minWidth: 36 }, children: f.icon }) : null,
            /* @__PURE__ */ t(re, { primary: f.text })
          ]
        },
        f.path
      ))
    ] }) })
  ] });
}, cr = ({
  link: e,
  activePath: o,
  onLinkClick: r,
  accentColor: a,
  isSecondary: i
}) => {
  const c = !!(e.path && o === e.path), s = i ? "text.secondary" : a, n = i ? "#01584F" : a;
  return /* @__PURE__ */ d(
    ge,
    {
      disabled: !e.path,
      onClick: () => e.path && (r == null ? void 0 : r(e.path)),
      sx: {
        py: 1.5,
        px: 2,
        color: c ? "#ffffff" : s,
        bgcolor: c ? n : "transparent",
        "&:hover": {
          bgcolor: c ? n : "action.hover"
        }
      },
      children: [
        /* @__PURE__ */ t(xe, { sx: { color: "inherit", minWidth: 40 }, children: e.icon }),
        /* @__PURE__ */ t(re, { primary: e.text })
      ]
    }
  );
}, pe = () => /* @__PURE__ */ t(
  H,
  {
    sx: {
      width: "100%",
      display: "flex",
      justifyContent: "center"
    },
    children: /* @__PURE__ */ t(L, { sx: { width: "60%", borderColor: "divider" } })
  }
), ft = ({
  variant: e,
  mainLinks: o,
  secondaryLinks: r = [],
  activePath: a,
  onLinkClick: i,
  accentColor: c = "#01584f",
  surfaceBackgroundColor: s,
  railShowTitles: n = !1
}) => {
  const I = ot(), R = s ?? I.palette.background.paper, f = (h) => {
    i && i(h);
  }, [_, w] = b.useState({}), [m, T] = b.useState({}), x = (h) => {
    w((l) => ({
      ...l,
      [h]: !l[h]
    }));
  }, A = (h) => {
    T((l) => ({
      ...l,
      [h]: !l[h]
    }));
  }, M = (h, l) => {
    var v;
    return (v = h.subitems) != null && v.length ? /* @__PURE__ */ t(
      sr,
      {
        link: h,
        activePath: a,
        onLinkClick: f,
        accentColor: c,
        isSecondary: l,
        surfaceBackgroundColor: R,
        railShowTitles: n
      }
    ) : /* @__PURE__ */ t(
      ir,
      {
        link: h,
        activePath: a,
        onLinkClick: f,
        accentColor: c,
        isSecondary: l,
        railShowTitles: n
      }
    );
  }, K = (h, l, v) => {
    var G;
    if ((G = h.subitems) != null && G.length) {
      const j = v ? !!m[l] : !!_[l];
      return /* @__PURE__ */ t(
        lr,
        {
          link: h,
          expanded: j,
          onToggle: () => v ? A(l) : x(l),
          activePath: a,
          onLinkClick: f,
          accentColor: c,
          isSecondary: v
        }
      );
    }
    return /* @__PURE__ */ t(
      cr,
      {
        link: h,
        activePath: a,
        onLinkClick: f,
        accentColor: c,
        isSecondary: v
      }
    );
  };
  return e === "drawer" ? /* @__PURE__ */ d(
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
        /* @__PURE__ */ t(C, { sx: { width: "100%" }, children: o.map((h, l) => /* @__PURE__ */ d(b.Fragment, { children: [
          K(h, l, !1),
          l < o.length - 1 ? /* @__PURE__ */ t(pe, {}) : null
        ] }, l)) }),
        r.length > 0 ? /* @__PURE__ */ d(me, { children: [
          /* @__PURE__ */ t(
            H,
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
          /* @__PURE__ */ t(H, { sx: { mt: "auto", pb: 2 }, children: /* @__PURE__ */ t(C, { sx: { width: "100%" }, children: r.map((h, l) => /* @__PURE__ */ d(b.Fragment, { children: [
            K(h, l, !0),
            l < r.length - 1 ? /* @__PURE__ */ t(pe, {}) : null
          ] }, l)) }) })
        ] }) : null
      ]
    }
  ) : /* @__PURE__ */ d(
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
        o.map((h, l) => /* @__PURE__ */ d(b.Fragment, { children: [
          M(h, !1),
          l < o.length - 1 ? /* @__PURE__ */ t(pe, {}) : null
        ] }, l)),
        r.length > 0 ? /* @__PURE__ */ d(me, { children: [
          /* @__PURE__ */ t(
            H,
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
          /* @__PURE__ */ t(H, { sx: { mt: "auto", pb: 2 }, children: /* @__PURE__ */ t(
            C,
            {
              gap: n ? 1.25 : 1,
              alignItems: "center",
              children: r.map((h, l) => /* @__PURE__ */ d(b.Fragment, { children: [
                M(h, !0),
                l < r.length - 1 ? /* @__PURE__ */ t(pe, {}) : null
              ] }, l))
            }
          ) })
        ] }) : null
      ]
    }
  );
}, hr = ({
  open: e,
  onClose: o,
  mainLinks: r,
  secondaryLinks: a = [],
  activePath: i,
  onLinkClick: c,
  userName: s = "User Name",
  userAvatar: n,
  onLogout: I,
  showNotifications: R = !1,
  notificationCount: f = 0,
  onNotificationBellClick: _,
  alertProps: w,
  accentColor: m = "#01584f"
}) => /* @__PURE__ */ t(
  Xt,
  {
    anchor: "right",
    open: e,
    onClose: o,
    sx: {
      zIndex: (x) => x.zIndex.drawer + 1,
      "& .MuiDrawer-paper": {
        backgroundImage: "none",
        backgroundColor: "background.paper"
      }
    },
    children: /* @__PURE__ */ d(
      C,
      {
        sx: {
          maxWidth: "70dvw",
          height: "100%"
        },
        children: [
          /* @__PURE__ */ d(C, { direction: "row", sx: { p: 2, pb: 0, gap: 1 }, children: [
            /* @__PURE__ */ d(
              C,
              {
                direction: "row",
                sx: { gap: 1, alignItems: "center", flexGrow: 1, p: 1 },
                children: [
                  /* @__PURE__ */ t(
                    We,
                    {
                      sizes: "small",
                      alt: s,
                      src: n,
                      sx: { width: 24, height: 24 }
                    }
                  ),
                  /* @__PURE__ */ t($, { component: "p", variant: "h6", children: s })
                ]
              }
            ),
            R && /* @__PURE__ */ t(
              at,
              {
                color: "error",
                badgeContent: f,
                invisible: f === 0,
                sx: { "& .MuiBadge-badge": { right: 2, top: 2 } },
                children: /* @__PURE__ */ t(
                  X,
                  {
                    size: "small",
                    onClick: _,
                    "aria-label": "Notifications",
                    children: /* @__PURE__ */ t(Qt, {})
                  }
                )
              }
            )
          ] }),
          /* @__PURE__ */ t(L, {}),
          /* @__PURE__ */ d(C, { sx: { flexGrow: 1 }, children: [
            /* @__PURE__ */ t(
              ft,
              {
                variant: "drawer",
                mainLinks: r,
                secondaryLinks: a,
                activePath: i,
                onLinkClick: (x) => {
                  c == null || c(x), o();
                },
                accentColor: m
              }
            ),
            /* @__PURE__ */ t(L, {})
          ] }),
          (w == null ? void 0 : w.show) && /* @__PURE__ */ t(ct, { ...w }),
          /* @__PURE__ */ t(C, { sx: { p: 2 }, children: /* @__PURE__ */ t(
            st,
            {
              variant: "outlined",
              fullWidth: !0,
              startIcon: /* @__PURE__ */ t(nt, {}),
              onClick: I,
              children: "Logout"
            }
          ) })
        ]
      }
    )
  }
), dr = 100, eo = ({
  children: e,
  sidebarLinks: o = [],
  secondarySidebarLinks: r = [],
  appName: a = "Dashboard",
  pageName: i = "Home",
  showHeader: c = !0,
  showSidebar: s = !0,
  showSidebarRailTitles: n = !1,
  enableRefreshToken: I = !1,
  activePath: R,
  onLinkClick: f,
  userName: _,
  userEmail: w,
  userAvatar: m,
  onLogout: T,
  onProfileClick: x,
  onAccountClick: A,
  onSettingsClick: M,
  showSettings: K = !0,
  showNotifications: h = !0,
  notificationCount: l = 0,
  NotificationSidebarContent: v,
  showSearchbar: G = !0,
  searchValue: j,
  onSearchChange: P,
  onSearchSubmit: z,
  showProfile: q = !0,
  userRole: u,
  onVerify: D,
  alertProps: N,
  style: ae,
  headerStyles: se,
  sidebarStyles: we,
  contentStyles: Se,
  accentColor: Ee,
  contentBackgroundColor: ye,
  navbarBackground: Re,
  navbarAccentColor: ie,
  theme: Y = "light",
  GlobalChatSidebar: g,
  useChatSidebar: ve,
  rightExtraContent: pt,
  customNavbar: Ke,
  customNavbarProps: gt,
  redirectToLogin: le,
  apiBaseUrl: Ue
}) => {
  const mt = Ot(), Q = It(mt.breakpoints.down("md")), ke = Xe(() => rt(Yt(Y)), [Y]), be = Y === "dark", ce = Ee ?? "#01584f", he = ye ?? (be ? "hsl(220, 35%, 9%)" : "#f2f9fc"), xt = Re ?? (be ? "hsl(220, 30%, 7%)" : "#ffffff"), wt = ie ?? (be ? "#ffffff" : "#000000");
  let de = 0;
  s && !Q && (de = dr);
  const [Be, Te] = te(!1), [St, ue] = te(!1), [Et, yt] = te(!0), [Rt, vt] = te(!1), [ur, fe] = te(null), Oe = ve == null ? void 0 : ve(), He = (Oe == null ? void 0 : Oe.isOpen) ?? !1, Ie = Ye(D), Ge = Ye(!1), Pe = Xe(
    () => tr(Ue),
    [Ue]
  );
  De(() => {
    Ie.current = D;
  }, [D]);
  const bt = () => {
    Te(!Be);
  }, Tt = () => {
    Te(!1);
  }, $e = (je) => {
    const V = T(je);
    V instanceof Promise ? V.then(() => {
      fe(null);
    }).catch((Je) => {
      console.error("Error in logout handler:", Je), fe(null);
    }) : fe(null);
  };
  return De(() => {
    (() => {
      try {
        const { isAuthenticated: V, error: Je } = Zt();
        if (!V) {
          console.log("No session found, redirecting to login"), ne(), le();
          return;
        }
        if (!Ge.current) {
          const { user: Z, error: Ne } = er();
          if (Z && !Ne) {
            const Le = {
              name: Z.name || "",
              email: Z.email || "",
              profilePicture: Z.profilePicture || "",
              role: Z.role || ""
            };
            fe(Le), Ge.current = !0, Ie.current && Ie.current(Le);
          } else
            Ne && console.error("Error getting user data:", Ne);
        }
        vt(!0);
      } catch (V) {
        console.error("Error checking session:", V), ne(), le();
      } finally {
        yt(!1);
      }
    })();
  }, [le]), De(() => {
    I && rr(Pe, le);
  }, [I, Pe]), Et ? /* @__PURE__ */ t(Qe, { theme: ke, children: /* @__PURE__ */ d(
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
          Nt,
          {
            size: 60,
            thickness: 4,
            sx: { color: ce }
          }
        ),
        /* @__PURE__ */ t(ee, { sx: { mt: 2, color: "text.secondary" }, children: "Checking session..." })
      ]
    }
  ) }) : Rt ? /* @__PURE__ */ t(Qe, { theme: ke, children: /* @__PURE__ */ d(
    ee,
    {
      sx: {
        display: "flex",
        minHeight: "100vh",
        ...ae
      },
      children: [
        /* @__PURE__ */ t(_t, {}),
        c && /* @__PURE__ */ t(
          nr,
          {
            appName: a,
            pageName: i,
            onMenuClick: Q && s ? bt : void 0,
            showMenuButton: Q && s,
            headerStyles: se,
            userName: _,
            userEmail: w,
            userAvatar: m,
            onProfileClick: x,
            onAccountClick: A,
            onSettingsClick: M,
            showSettings: K,
            onLogout: $e,
            showNotifications: h,
            notificationCount: l,
            onNotificationBellClick: h && v ? () => ue(!0) : void 0,
            showSearchbar: G && !Ke,
            searchValue: j,
            onSearchChange: P,
            onSearchSubmit: z,
            showProfile: q,
            userRole: u,
            accentColor: ce,
            contentBackgroundColor: he,
            navbarBackground: xt,
            navbarAccentColor: wt,
            rightExtraContent: pt,
            customNavbar: Ke,
            customNavbarProps: gt
          }
        ),
        s && !Q && /* @__PURE__ */ t(
          qe,
          {
            variant: "permanent",
            sx: {
              width: de,
              flexShrink: 0,
              zIndex: 2,
              // Higher z-index than app bar
              "& .MuiDrawer-paper": {
                width: de,
                boxSizing: "border-box",
                bgcolor: he,
                borderRight: "none",
                top: c ? "60px" : 0,
                // Position below header
                height: c ? "calc(100vh - 60px)" : "100vh"
              },
              ...we
            },
            children: /* @__PURE__ */ d(
              ee,
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
                    ft,
                    {
                      variant: "rail",
                      mainLinks: o,
                      secondaryLinks: r,
                      activePath: R,
                      onLinkClick: f,
                      accentColor: ce,
                      surfaceBackgroundColor: he,
                      railShowTitles: n
                    }
                  ),
                  (N == null ? void 0 : N.show) && /* @__PURE__ */ t(ct, { ...N })
                ]
              }
            )
          }
        ),
        s && Q && /* @__PURE__ */ t(
          hr,
          {
            open: Be,
            onClose: Tt,
            mainLinks: o,
            secondaryLinks: r,
            activePath: R,
            onLinkClick: f,
            userName: _,
            userEmail: w,
            userAvatar: m,
            onLogout: $e,
            onProfileClick: x,
            showNotifications: h,
            notificationCount: l,
            onNotificationBellClick: h && v ? () => {
              Te(!1), ue(!0);
            } : void 0,
            alertProps: N,
            accentColor: ce
          }
        ),
        /* @__PURE__ */ t(
          ee,
          {
            component: "main",
            sx: {
              flexGrow: 1,
              p: 3,
              m: 1,
              width: Q ? "100%" : s ? `calc(100% - ${de}px)` : "100%",
              mt: c ? "60px" : 0,
              // Account for AppNavbar height (60px)
              ml: 0,
              // Offset for sidebar on desktop
              backgroundColor: he,
              ...Se
            },
            children: /* @__PURE__ */ d(_e, { container: !0, spacing: 3, children: [
              /* @__PURE__ */ t(
                _e,
                {
                  size: {
                    xs: 12,
                    md: He && g ? 8.5 : 12
                  },
                  sx: {
                    display: "flex",
                    flexDirection: "column"
                  },
                  children: e
                }
              ),
              He && g && /* @__PURE__ */ t(
                _e,
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
                  children: /* @__PURE__ */ t(g, {})
                }
              )
            ] })
          }
        ),
        h && v && /* @__PURE__ */ t(
          qe,
          {
            anchor: "right",
            open: St,
            onClose: () => ue(!1),
            slotProps: {
              paper: { sx: { width: 380, maxWidth: "100vw" } }
            },
            children: /* @__PURE__ */ t(
              v,
              {
                onClose: () => ue(!1)
              }
            )
          }
        )
      ]
    }
  ) }) : null;
};
export {
  O as AUTH_ERROR_CODES,
  y as AuthError,
  eo as LumoraWrapper,
  ne as clearAuthTokens,
  eo as default,
  Zr as getAuthErrorMessage,
  oe as getAuthTokens,
  er as getCurrentUser,
  Zt as isAuthenticated,
  Fe as logAuthError,
  lt as storeAuthTokens
};
