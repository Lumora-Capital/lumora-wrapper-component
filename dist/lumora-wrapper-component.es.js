import { jsx as t, jsxs as h, Fragment as Re } from "react/jsx-runtime";
import { useTheme as Nt, useMediaQuery as Dt, Box as re, CircularProgress as _t, CssBaseline as At, Drawer as Ye, Grid as ze } from "@mui/material";
import { createTheme as at, alpha as F, styled as Ct, useTheme as st, ThemeProvider as Ve } from "@mui/material/styles";
import * as T from "react";
import { useMemo as Ze, useState as oe, useRef as et, useEffect as Me } from "react";
import tt from "axios";
import rt from "@mui/icons-material/AccountCircleRounded";
import Wt from "@mui/icons-material/DarkMode";
import zt from "@mui/icons-material/LightMode";
import it from "@mui/icons-material/LogoutRounded";
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
import be from "@mui/material/Tooltip";
import $ from "@mui/material/Typography";
import Pt from "@mui/material/useMediaQuery";
import $t from "@mui/material/Card";
import jt from "@mui/material/CardContent";
import ct from "@mui/material/Button";
import Lt from "@mui/icons-material/AutoAwesomeRounded";
import Jt from "@mui/icons-material/ExpandLess";
import qt from "@mui/icons-material/ExpandMore";
import Qt from "@mui/material/Collapse";
import ye from "@mui/material/ListItemButton";
import ve from "@mui/material/ListItemIcon";
import ne from "@mui/material/ListItemText";
import Xt from "@mui/material/MenuList";
import Yt from "@mui/material/Paper";
import Vt from "@mui/material/Popper";
import Zt from "@mui/icons-material/NotificationsRounded";
import er from "@mui/material/Drawer";
const R = at(), ot = [...R.shadows], p = {
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
}, y = {
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
      contrastText: y[50],
      ...e === "dark" && {
        contrastText: p[300],
        light: p[500],
        main: p[700],
        dark: p[900]
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
      ...y
    },
    divider: e === "dark" ? F(y[700], 0.6) : F(y[300], 0.4),
    background: {
      default: "hsl(0, 0%, 99%)",
      paper: "hsl(220, 35%, 97%)",
      ...e === "dark" && {
        default: y[900],
        paper: "hsl(220, 30%, 7%)"
      }
    },
    text: {
      primary: y[800],
      secondary: y[600],
      warning: z[400],
      ...e === "dark" && {
        primary: "hsl(0, 0%, 100%)",
        secondary: y[400]
      }
    },
    action: {
      hover: F(y[200], 0.2),
      selected: `${F(y[200], 0.3)}`,
      ...e === "dark" && {
        hover: F(y[600], 0.2),
        selected: F(y[600], 0.3)
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
p[200], p[400], p[700], p[50], p[100], p[300], p[600], y[50], z[300], z[400], z[800], k[300], k[400], k[800], K[300], K[400], K[800], {
  ...y
}, F(y[300], 0.4), y[800], y[600], z[400], F(y[200], 0.2), `${F(y[200], 0.3)}`, p[50], p[300], p[400], p[700], p[300], p[500], p[700], p[900], z[400], z[500], z[700], k[400], k[500], k[700], K[400], K[500], K[700], {
  ...y
}, F(y[700], 0.6), y[900], y[400], F(y[600], 0.2), F(y[600], 0.3);
R.typography.pxToRem(48), R.typography.pxToRem(36), R.typography.pxToRem(30), R.typography.pxToRem(24), R.typography.pxToRem(20), R.typography.pxToRem(18), R.typography.pxToRem(18), R.typography.pxToRem(14), R.typography.pxToRem(14), R.typography.pxToRem(14), R.typography.pxToRem(12);
[
  ...R.shadows.slice(2)
];
class v extends Error {
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
      throw new v("localStorage is not available", I.STORAGE_ACCESS_DENIED);
    return window.localStorage.getItem(e);
  } catch (o) {
    throw o.name === "QuotaExceededError" ? (console.error("Storage quota exceeded"), new v(
      "Storage quota exceeded. Please clear browser data.",
      I.STORAGE_ACCESS_DENIED,
      o
    )) : o.name === "SecurityError" ? (console.error("localStorage access denied (private browsing or security settings)"), new v(
      "Access to localStorage is denied. Please check browser settings.",
      I.STORAGE_ACCESS_DENIED,
      o
    )) : (console.error("Unexpected error accessing localStorage:", o.name), new v("Failed to access storage", I.STORAGE_ACCESS_DENIED, o));
  }
}, Ke = (e, o) => {
  try {
    if (typeof window > "u")
      return console.warn("localStorage write attempted on server side"), !1;
    if (!window.localStorage)
      throw new v("localStorage is not available", I.STORAGE_ACCESS_DENIED);
    return window.localStorage.setItem(e, o), !0;
  } catch (r) {
    throw r.name === "QuotaExceededError" ? (console.error("Storage quota exceeded"), new v(
      "Storage quota exceeded. Please clear browser data.",
      I.STORAGE_ACCESS_DENIED,
      r
    )) : r.name === "SecurityError" ? (console.error("localStorage write denied (private browsing or security settings)"), new v(
      "Access to localStorage is denied. Please check browser settings.",
      I.STORAGE_ACCESS_DENIED,
      r
    )) : (console.error("Unexpected error writing to localStorage:", r.name), new v("Failed to write to storage", I.STORAGE_ACCESS_DENIED, r));
  }
}, ht = (e) => {
  try {
    return typeof window > "u" ? (console.warn("localStorage removal attempted on server side"), !1) : window.localStorage ? (window.localStorage.removeItem(e), !0) : (console.warn("localStorage is not available"), !1);
  } catch (o) {
    return o.name !== "SecurityError" && console.warn(`Could not remove localStorage key "${e}"`), !1;
  }
}, ae = () => {
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
    throw e instanceof v ? e : new v("Failed to retrieve authentication tokens", I.UNKNOWN_ERROR, e);
  }
}, or = () => {
  try {
    const { accessToken: e, refreshToken: o } = ae();
    return !(e || o) ? {
      isAuthenticated: !1,
      error: new v("No authentication tokens found", I.TOKEN_NOT_FOUND)
    } : {
      isAuthenticated: !0,
      error: null
    };
  } catch (e) {
    return console.error("Authentication check failed:", e), {
      isAuthenticated: !1,
      error: e instanceof v ? e : new v("Authentication check failed", I.UNKNOWN_ERROR, e)
    };
  }
}, dt = (e, o, r = null) => {
  try {
    if (!e && !o)
      throw new v("At least one token must be provided", I.TOKEN_INVALID);
    return e && Ke(W.ACCESS_TOKEN, e), o && Ke(W.REFRESH_TOKEN, o), r && Ke(W.USER, JSON.stringify(r)), {
      success: !0,
      error: null
    };
  } catch (a) {
    return console.error("Failed to store authentication tokens:", a), {
      success: !1,
      error: a instanceof v ? a : new v("Failed to store tokens", I.UNKNOWN_ERROR, a)
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
      error: e instanceof v ? e : new v("Failed to clear tokens", I.LOGOUT_FAILED, e)
    };
  }
}, nr = () => {
  try {
    const { user: e } = ae();
    return {
      user: e,
      error: null
    };
  } catch (e) {
    return console.error("Failed to get current user:", e), {
      user: null,
      error: e instanceof v ? e : new v("Failed to retrieve user data", I.UNKNOWN_ERROR, e)
    };
  }
}, ao = (e) => {
  if (!(e instanceof v))
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
    code: e instanceof v ? e.code : "UNKNOWN",
    timestamp: e instanceof v ? e.timestamp : (/* @__PURE__ */ new Date()).toISOString(),
    stack: e.stack
  };
  e instanceof v && e.originalError && (r.originalError = {
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
  let r = !1, a = null, i = [];
  const c = (s, n) => {
    i.forEach(({ resolve: N, reject: b }) => {
      s ? b(s) : n && N(n);
    }), i = [];
  };
  return o.interceptors.request.use(
    (s) => {
      const { accessToken: n } = ae();
      return n && s.headers && (s.headers.Authorization = `Bearer ${n}`), s;
    },
    (s) => Promise.reject(s)
  ), o.interceptors.response.use(
    (s) => s,
    async (s) => {
      var S;
      const n = s.config, N = (S = s.response) == null ? void 0 : S.status, b = (n == null ? void 0 : n.url) || "", f = b.includes("/auth/refresh");
      if (N !== 401 || n._retry || f)
        return Promise.reject(s);
      n._retry = !0;
      const { refreshToken: _ } = ae();
      if (!_) {
        const m = new Error(
          "No refresh token available for token refresh"
        );
        return Be(m, "AxiosClient - Token Refresh"), se(), typeof window < "u" && (window.location.href = "/login"), Promise.reject(s);
      }
      if (r && a)
        return new Promise((m, O) => {
          i.push({ resolve: m, reject: O });
        }).then((m) => {
          const {
            accessToken: O,
            refreshToken: w
          } = m;
          if (n.headers && (n.headers.Authorization = `Bearer ${O}`), b.includes("/auth/logout"))
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
        }).catch((m) => Promise.reject(m));
      r = !0, a = tt.post(
        `${e}/auth/refresh`,
        {
          refresh_token: _
        }
      );
      try {
        const m = await a, { accessToken: O, refreshToken: w } = m.data;
        if (dt(O, w, null), c(null, {
          accessToken: O,
          refreshToken: w
        }), n.headers && (n.headers.Authorization = `Bearer ${O}`), b.includes("/auth/logout"))
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
      } catch (m) {
        return Be(
          m,
          "AxiosClient - Token Refresh Failed"
        ), c(m), se(), typeof window < "u" && (window.location.href = "/login"), Promise.reject(m);
      } finally {
        r = !1, a = null;
      }
    }
  ), o;
}, sr = async (e, o) => {
  const { accessToken: r, refreshToken: a } = ae();
  if (r)
    return !0;
  if (a)
    try {
      const i = await e.post("/auth/refresh", {
        refresh_token: a
      });
      if (i.data.success && i.data.accessToken)
        return dt(i.data.accessToken, i.data.refreshToken || null, null), !0;
    } catch (i) {
      Be(i, "TokenValidator - Refresh Failed");
    }
  return se(), o ? o() : window.location.href = "/login", !1;
}, ir = Ct(Gt)({
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
  headerStyles: i,
  userName: c = "User Name",
  userEmail: s,
  userAvatar: n,
  onProfileClick: N,
  onAccountClick: b,
  onSettingsClick: f,
  showSettings: _ = !0,
  onLogout: S,
  showNotifications: m = !1,
  notificationCount: O = 0,
  onNotificationBellClick: w,
  theme: A = "light",
  showThemeToggler: G = !1,
  onThemeToggle: B,
  showSearchbar: d = !0,
  searchValue: l,
  onSearchChange: E,
  onSearchSubmit: M,
  showProfile: P = !0,
  userRole: H,
  accentColor: Z = "#01584f",
  contentBackgroundColor: Q = "#f2f9fc",
  navbarBackground: u = "#ff0000",
  navbarAccentColor: g = "#000000",
  rightExtraContent: D = [],
  customNavbar: ie,
  customNavbarProps: Te
}) => {
  const le = Pt((x) => x.breakpoints.up("md")), [ce, he] = T.useState(null), Oe = !!ce, de = A === "dark", ue = de ? "Switch to light mode" : "Switch to dark mode", X = (x) => {
    E == null || E(x.target.value);
  }, Ie = (x) => {
    x.key === "Enter" && M && l && M(l);
  }, Ne = (x) => x ? x.charAt(0).toUpperCase() + x.slice(1).toLowerCase() : "User", ee = (x) => {
    he(x.currentTarget);
  }, Y = () => {
    he(null);
  }, fe = (x) => {
    x == null || x(), Y();
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
        ...i
      },
      children: /* @__PURE__ */ h(ir, { variant: "dense", sx: { height: "100%" }, children: [
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
              a && !le && /* @__PURE__ */ t(
                J,
                {
                  "aria-label": "menu",
                  onClick: r,
                  sx: {
                    color: g,
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
                          color: g,
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
              ie ? /* @__PURE__ */ t(ie, { ...Te || {} }) : d && le && /* @__PURE__ */ t(
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
                          color: g
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
              G && /* @__PURE__ */ t(be, { title: ue, placement: "bottom", children: /* @__PURE__ */ t("span", { children: /* @__PURE__ */ t(
                J,
                {
                  size: "small",
                  onClick: B,
                  disabled: !B,
                  "aria-label": ue,
                  sx: {
                    color: g,
                    "&:hover": {
                      backgroundColor: "action.hover"
                    }
                  },
                  children: de ? /* @__PURE__ */ t(zt, { fontSize: "small" }) : /* @__PURE__ */ t(Wt, { fontSize: "small" })
                }
              ) }) }),
              m && /* @__PURE__ */ t(
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
                      sx: { color: g },
                      children: /* @__PURE__ */ t(Ft, {})
                    }
                  )
                }
              ),
              m && P && /* @__PURE__ */ t(
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
              P && /* @__PURE__ */ h(Re, { children: [
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
                            color: g
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
                                  color: g,
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
                                  color: g,
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
                    anchorEl: ce,
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
                            onClick: () => fe(f),
                            children: "Settings"
                          },
                          "settings"
                        ),
                        /* @__PURE__ */ t(L, {}, "settings-divider")
                      ],
                      /* @__PURE__ */ h(
                        Ue,
                        {
                          onClick: () => fe(S),
                          sx: {
                            color: "error.main",
                            "&:hover": {
                              color: "error.dark"
                            }
                          },
                          children: [
                            /* @__PURE__ */ t($, { sx: { flexGrow: 1 }, children: "Logout" }),
                            /* @__PURE__ */ t(it, { fontSize: "small" })
                          ]
                        }
                      )
                    ]
                  }
                )
              ] }),
              D.length !== 0 && D.map((x) => x.type === "divider" ? /* @__PURE__ */ t(
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
                x.key
              ) : x.type === "profile" ? /* @__PURE__ */ h(
                C,
                {
                  direction: "row",
                  onClick: x.onClick,
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
                    x.avatar ? /* @__PURE__ */ t(
                      ke,
                      {
                        src: x.avatar,
                        sx: { width: 32, height: 32 }
                      }
                    ) : /* @__PURE__ */ t(
                      rt,
                      {
                        sx: {
                          width: 32,
                          height: 32,
                          color: g
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
                                color: g,
                                fontWeight: 500,
                                lineHeight: 1.2,
                                overflow: "hidden",
                                textOverflow: "ellipsis",
                                whiteSpace: "nowrap",
                                maxWidth: "150px"
                              },
                              children: x.name
                            }
                          ),
                          /* @__PURE__ */ t(
                            $,
                            {
                              variant: "caption",
                              sx: {
                                color: g,
                                lineHeight: 1.2,
                                overflow: "hidden",
                                textOverflow: "ellipsis",
                                whiteSpace: "nowrap",
                                maxWidth: "150px"
                              },
                              children: x.role
                            }
                          )
                        ]
                      }
                    )
                  ]
                },
                x.key
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
  show: i = !0
}) => i ? /* @__PURE__ */ t($t, { variant: "outlined", sx: { m: 1.5, flexShrink: 0 }, children: /* @__PURE__ */ h(jt, { children: [
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
  const r = T.useRef(null), [a, i] = T.useState(!1), c = T.useCallback(() => {
    const s = r.current;
    s && i(s.scrollWidth > s.clientWidth + 0.5);
  }, []);
  return T.useLayoutEffect(() => {
    c();
  }, [c, e]), T.useEffect(() => {
    const s = r.current;
    if (!s)
      return;
    const n = new ResizeObserver(() => c());
    return n.observe(s), () => n.disconnect();
  }, [c]), /* @__PURE__ */ t(
    be,
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
  isSecondary: i,
  surfaceBackgroundColor: c,
  railShowTitles: s = !1
}) => {
  const n = st(), [N, b] = T.useState(null), [f, _] = T.useState(!1), S = T.useRef(
    null
  ), m = T.useRef(null), O = T.useRef(null), w = T.useRef(!1), A = T.useRef(!1), G = T.useId(), B = () => {
    S.current && (clearTimeout(S.current), S.current = null);
  }, d = () => {
    B(), S.current = setTimeout(() => {
      _(!1), S.current = null;
    }, cr);
  }, l = () => {
    B(), _(!0);
  };
  T.useEffect(() => {
    if (!f)
      return;
    const u = (g) => {
      var D;
      g.key === "Escape" && (_(!1), (D = O.current) == null || D.focus());
    };
    return document.addEventListener("keydown", u), () => document.removeEventListener("keydown", u);
  }, [f]), T.useEffect(() => {
    if (!f || !A.current)
      return;
    const u = globalThis.requestAnimationFrame(() => {
      var D;
      const g = (D = m.current) == null ? void 0 : D.querySelector(
        '[role="menuitem"]'
      );
      g == null || g.focus(), A.current = !1;
    });
    return () => cancelAnimationFrame(u);
  }, [f]);
  const E = ft(e, o), M = i ? 48 : 44, P = i ? "text.secondary" : a, H = i ? "#01584F" : a, Z = {
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
    color: E ? "#ffffff" : P,
    backgroundColor: E ? H : "transparent",
    "&:hover": {
      backgroundColor: E ? H : "action.hover",
      borderRadius: "4px",
      color: E ? "#ffffff" : P
    }
  }, Q = s ? /* @__PURE__ */ t(
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
        const g = u.relatedTarget;
        g && ((D = m.current) != null && D.contains(g)) || d();
      },
      onKeyDown: (u) => {
        u.key === "ArrowDown" && (u.preventDefault(), A.current = !0, l());
      },
      onClick: (u) => {
        u.preventDefault(), u.stopPropagation(), e.path && (r == null || r(e.path));
      },
      "aria-haspopup": "menu",
      "aria-expanded": f,
      "aria-controls": f ? G : void 0,
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
        const g = u.relatedTarget;
        g && ((D = m.current) != null && D.contains(g)) || d();
      },
      onKeyDown: (u) => {
        u.key === "ArrowDown" && (u.preventDefault(), A.current = !0, l());
      },
      onClick: (u) => {
        u.preventDefault(), u.stopPropagation(), e.path && (r == null || r(e.path));
      },
      "aria-haspopup": "menu",
      "aria-expanded": f,
      "aria-controls": f ? G : void 0,
      "data-testid": `rail-submenu-trigger-${e.text}`,
      sx: {
        width: M,
        height: M,
        color: E ? "#ffffff" : P,
        backgroundColor: E ? H : "transparent",
        borderRadius: E ? "4px" : "50%",
        "&:hover": {
          backgroundColor: E ? H : "action.hover",
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
            ref: b,
            "data-testid": `rail-submenu-anchor-${e.text}`,
            sx: { display: "inline-flex", maxWidth: "100%" },
            onMouseEnter: () => {
              w.current = !0, l();
            },
            onMouseLeave: () => {
              w.current = !1, d();
            },
            children: s ? Q : /* @__PURE__ */ t(be, { title: e.text, placement: "right", arrow: !0, children: Q })
          }
        ),
        /* @__PURE__ */ t(
          Vt,
          {
            open: f && !!N,
            anchorEl: N,
            placement: "right-start",
            modifiers: [{ name: "offset", options: { offset: [8, 0] } }],
            sx: { zIndex: (u) => u.zIndex.modal },
            children: /* @__PURE__ */ t(
              Yt,
              {
                ref: m,
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
                        onClick: (g) => {
                          g.preventDefault(), r == null || r(u.path), _(!1);
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
  isSecondary: i,
  railShowTitles: c = !1
}) => {
  const s = !!(e.path && o === e.path), n = i ? 48 : 44, N = i ? "text.secondary" : a, b = i ? "#01584F" : a, f = {
    width: "100%",
    maxWidth: "100%",
    minWidth: n,
    height: "auto",
    minHeight: n,
    flexDirection: "column",
    py: 0.5,
    px: 1,
    borderRadius: "4px",
    color: s ? "#ffffff" : N,
    backgroundColor: s ? b : "transparent",
    "&:hover": {
      backgroundColor: s ? b : "action.hover",
      borderRadius: "4px",
      color: s ? "#ffffff" : N
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
      sx: f,
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
        color: s ? "#ffffff" : N,
        backgroundColor: s ? b : "transparent",
        borderRadius: s ? "4px" : "50%",
        "&:hover": {
          backgroundColor: s ? b : "action.hover",
          borderRadius: "4px"
        }
      },
      children: e.icon
    }
  );
  return c ? _ : /* @__PURE__ */ t(be, { title: e.text, placement: "right", arrow: !0, children: _ });
}, ur = ({
  link: e,
  expanded: o,
  onToggle: r,
  activePath: a,
  onLinkClick: i,
  accentColor: c,
  isSecondary: s
}) => {
  const n = ft(e, a), N = s ? "text.secondary" : c, b = s ? "#01584F" : c;
  return /* @__PURE__ */ h(Re, { children: [
    /* @__PURE__ */ h(
      ye,
      {
        onClick: r,
        sx: {
          py: 1.5,
          px: 2,
          color: n ? "#ffffff" : N,
          bgcolor: n ? b : "transparent",
          "&:hover": {
            bgcolor: n ? b : "action.hover"
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
        ye,
        {
          sx: { pl: 4, py: 1 },
          onClick: () => e.path && (i == null ? void 0 : i(e.path)),
          selected: !!(a && a === e.path),
          "data-testid": `drawer-parent-path-${e.text}`,
          children: /* @__PURE__ */ t(ne, { primary: e.text })
        }
      ) : null,
      e.subitems.map((f) => /* @__PURE__ */ h(
        ye,
        {
          sx: { pl: 4, py: 1 },
          onClick: () => i == null ? void 0 : i(f.path),
          selected: pt(f, a),
          children: [
            f.icon ? /* @__PURE__ */ t(ve, { sx: { minWidth: 36 }, children: f.icon }) : null,
            /* @__PURE__ */ t(ne, { primary: f.text })
          ]
        },
        f.path
      ))
    ] }) })
  ] });
}, fr = ({
  link: e,
  activePath: o,
  onLinkClick: r,
  accentColor: a,
  isSecondary: i
}) => {
  const c = !!(e.path && o === e.path), s = i ? "text.secondary" : a, n = i ? "#01584F" : a;
  return /* @__PURE__ */ h(
    ye,
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
  onLinkClick: i,
  accentColor: c = "#01584f",
  surfaceBackgroundColor: s,
  railShowTitles: n = !1
}) => {
  const N = st(), b = s ?? N.palette.background.paper, f = (d) => {
    i && i(d);
  }, [_, S] = T.useState({}), [m, O] = T.useState({}), w = (d) => {
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
    var E;
    return (E = d.subitems) != null && E.length ? /* @__PURE__ */ t(
      hr,
      {
        link: d,
        activePath: a,
        onLinkClick: f,
        accentColor: c,
        isSecondary: l,
        surfaceBackgroundColor: b,
        railShowTitles: n
      }
    ) : /* @__PURE__ */ t(
      dr,
      {
        link: d,
        activePath: a,
        onLinkClick: f,
        accentColor: c,
        isSecondary: l,
        railShowTitles: n
      }
    );
  }, B = (d, l, E) => {
    var M;
    if ((M = d.subitems) != null && M.length) {
      const P = E ? !!m[l] : !!_[l];
      return /* @__PURE__ */ t(
        ur,
        {
          link: d,
          expanded: P,
          onToggle: () => E ? A(l) : w(l),
          activePath: a,
          onLinkClick: f,
          accentColor: c,
          isSecondary: E
        }
      );
    }
    return /* @__PURE__ */ t(
      fr,
      {
        link: d,
        activePath: a,
        onLinkClick: f,
        accentColor: c,
        isSecondary: E
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
        r.length > 0 ? /* @__PURE__ */ h(Re, { children: [
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
        r.length > 0 ? /* @__PURE__ */ h(Re, { children: [
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
  activePath: i,
  onLinkClick: c,
  userName: s = "User Name",
  userAvatar: n,
  onLogout: N,
  showNotifications: b = !1,
  notificationCount: f = 0,
  onNotificationBellClick: _,
  alertProps: S,
  accentColor: m = "#01584f"
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
                      alt: s,
                      src: n,
                      sx: { width: 24, height: 24 }
                    }
                  ),
                  /* @__PURE__ */ t($, { component: "p", variant: "h6", children: s })
                ]
              }
            ),
            b && /* @__PURE__ */ t(
              lt,
              {
                color: "error",
                badgeContent: f,
                invisible: f === 0,
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
                activePath: i,
                onLinkClick: (w) => {
                  c == null || c(w), o();
                },
                accentColor: m
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
              startIcon: /* @__PURE__ */ t(it, {}),
              onClick: N,
              children: "Logout"
            }
          ) })
        ]
      }
    )
  }
), gr = 100, so = ({
  children: e,
  sidebarLinks: o = [],
  secondarySidebarLinks: r = [],
  appName: a = "Dashboard",
  pageName: i = "Home",
  showHeader: c = !0,
  showSidebar: s = !0,
  showSidebarRailTitles: n = !1,
  enableRefreshToken: N = !1,
  activePath: b,
  onLinkClick: f,
  userName: _,
  userEmail: S,
  userAvatar: m,
  onLogout: O,
  onProfileClick: w,
  onAccountClick: A,
  onSettingsClick: G,
  showSettings: B = !0,
  showNotifications: d = !0,
  notificationCount: l = 0,
  NotificationSidebarContent: E,
  showSearchbar: M = !0,
  searchValue: P,
  onSearchChange: H,
  onSearchSubmit: Z,
  showProfile: Q = !0,
  userRole: u,
  onVerify: g,
  alertProps: D,
  style: ie,
  headerStyles: Te,
  sidebarStyles: le,
  contentStyles: ce,
  accentColor: he,
  contentBackgroundColor: Oe,
  navbarBackground: de,
  navbarAccentColor: ue,
  theme: X = "light",
  showThemeToggler: Ie = !1,
  onThemeToggle: Ne,
  GlobalChatSidebar: ee,
  useChatSidebar: Y,
  rightExtraContent: fe,
  customNavbar: x,
  customNavbarProps: xt,
  redirectToLogin: pe,
  apiBaseUrl: He
}) => {
  const wt = Nt(), q = Dt(wt.breakpoints.down("md")), Ge = Ze(
    () => at(tr(X)),
    [X]
  ), De = X === "dark", ge = he ?? "#01584f", me = Oe ?? (De ? "hsl(220, 35%, 9%)" : "#f2f9fc"), St = de ?? (De ? "hsl(220, 30%, 7%)" : "#ffffff"), Et = ue ?? (De ? "#ffffff" : "#000000");
  let xe = 0;
  s && !q && (xe = gr);
  const [Pe, _e] = oe(!1), [yt, we] = oe(!1), [Rt, vt] = oe(!0), [bt, Tt] = oe(!1), [mr, Se] = oe(null), Ae = Y == null ? void 0 : Y(), $e = (Ae == null ? void 0 : Ae.isOpen) ?? !1, Ce = et(g), je = et(!1), Le = Ze(
    () => ar(He),
    [He]
  );
  Me(() => {
    Ce.current = g;
  }, [g]);
  const Ot = () => {
    _e(!Pe);
  }, It = () => {
    _e(!1);
  }, Je = (qe) => {
    const V = O(qe);
    V instanceof Promise ? V.then(() => {
      Se(null);
    }).catch((Qe) => {
      console.error("Error in logout handler:", Qe), Se(null);
    }) : Se(null);
  };
  return Me(() => {
    (() => {
      try {
        const { isAuthenticated: V, error: Qe } = or();
        if (!V) {
          console.log("No session found, redirecting to login"), se(), pe();
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
            Se(Xe), je.current = !0, Ce.current && Ce.current(Xe);
          } else
            We && console.error("Error getting user data:", We);
        }
        Tt(!0);
      } catch (V) {
        console.error("Error checking session:", V), se(), pe();
      } finally {
        vt(!1);
      }
    })();
  }, [pe]), Me(() => {
    N && sr(Le, pe);
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
            sx: { color: ge }
          }
        ),
        /* @__PURE__ */ t(re, { sx: { mt: 2, color: "text.secondary" }, children: "Checking session..." })
      ]
    }
  ) }) : bt ? /* @__PURE__ */ t(Ve, { theme: Ge, children: /* @__PURE__ */ h(
    re,
    {
      sx: {
        display: "flex",
        minHeight: "100vh",
        ...ie
      },
      children: [
        /* @__PURE__ */ t(At, {}),
        c && /* @__PURE__ */ t(
          lr,
          {
            appName: a,
            pageName: i,
            onMenuClick: q && s ? Ot : void 0,
            showMenuButton: q && s,
            headerStyles: Te,
            userName: _,
            userEmail: S,
            userAvatar: m,
            onProfileClick: w,
            onAccountClick: A,
            onSettingsClick: G,
            showSettings: B,
            onLogout: Je,
            showNotifications: d,
            notificationCount: l,
            onNotificationBellClick: d && E ? () => we(!0) : void 0,
            showSearchbar: M && !x,
            searchValue: P,
            onSearchChange: H,
            onSearchSubmit: Z,
            showProfile: Q,
            userRole: u,
            accentColor: ge,
            contentBackgroundColor: me,
            navbarBackground: St,
            navbarAccentColor: Et,
            theme: X,
            showThemeToggler: Ie,
            onThemeToggle: Ne,
            rightExtraContent: fe,
            customNavbar: x,
            customNavbarProps: xt
          }
        ),
        s && !q && /* @__PURE__ */ t(
          Ye,
          {
            variant: "permanent",
            sx: {
              width: xe,
              flexShrink: 0,
              zIndex: 2,
              // Higher z-index than app bar
              "& .MuiDrawer-paper": {
                width: xe,
                boxSizing: "border-box",
                bgcolor: me,
                borderRight: "none",
                top: c ? "60px" : 0,
                // Position below header
                height: c ? "calc(100vh - 60px)" : "100vh"
              },
              ...le
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
                      activePath: b,
                      onLinkClick: f,
                      accentColor: ge,
                      surfaceBackgroundColor: me,
                      railShowTitles: n
                    }
                  ),
                  (D == null ? void 0 : D.show) && /* @__PURE__ */ t(ut, { ...D })
                ]
              }
            )
          }
        ),
        s && q && /* @__PURE__ */ t(
          pr,
          {
            open: Pe,
            onClose: It,
            mainLinks: o,
            secondaryLinks: r,
            activePath: b,
            onLinkClick: f,
            userName: _,
            userEmail: S,
            userAvatar: m,
            onLogout: Je,
            onProfileClick: w,
            showNotifications: d,
            notificationCount: l,
            onNotificationBellClick: d && E ? () => {
              _e(!1), we(!0);
            } : void 0,
            alertProps: D,
            accentColor: ge
          }
        ),
        /* @__PURE__ */ t(
          re,
          {
            component: "main",
            sx: {
              flexGrow: 1,
              p: 3,
              width: q ? "100%" : s ? `calc(100% - ${xe}px)` : "100%",
              mt: c ? "60px" : 0,
              // Account for AppNavbar height (60px)
              ml: 0,
              // Offset for sidebar on desktop
              backgroundColor: me,
              mb: 0,
              mr: 0,
              ...ce
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
        d && E && /* @__PURE__ */ t(
          Ye,
          {
            anchor: "right",
            open: yt,
            onClose: () => we(!1),
            slotProps: {
              paper: { sx: { width: 380, maxWidth: "100vw" } }
            },
            children: /* @__PURE__ */ t(
              E,
              {
                onClose: () => we(!1)
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
  v as AuthError,
  so as LumoraWrapper,
  se as clearAuthTokens,
  so as default,
  ao as getAuthErrorMessage,
  ae as getAuthTokens,
  nr as getCurrentUser,
  or as isAuthenticated,
  Be as logAuthError,
  dt as storeAuthTokens
};
