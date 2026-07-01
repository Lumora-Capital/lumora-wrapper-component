import { jsx as t, jsxs as d, Fragment as Le } from "react/jsx-runtime";
import { useTheme as Jt, useMediaQuery as Yt, Box as ce, CircularProgress as qt, CssBaseline as Qt, Drawer as lt, Grid as Ue } from "@mui/material";
import { createTheme as bt, alpha as X, styled as Vt, useTheme as Qe, ThemeProvider as ct } from "@mui/material/styles";
import * as b from "react";
import { useMemo as dt, useState as we, useRef as ht, useEffect as He } from "react";
import ut from "axios";
import pt from "@mui/icons-material/AccountCircleRounded";
import Zt from "@mui/icons-material/DarkMode";
import er from "@mui/icons-material/LightMode";
import St from "@mui/icons-material/LogoutRounded";
import tr from "@mui/icons-material/MenuRounded";
import rr from "@mui/icons-material/NotificationsOutlined";
import or from "@mui/icons-material/SearchRounded";
import nr from "@mui/material/AppBar";
import Xe from "@mui/material/Avatar";
import Et from "@mui/material/Badge";
import L from "@mui/material/Box";
import te from "@mui/material/Divider";
import V from "@mui/material/IconButton";
import ar from "@mui/material/InputAdornment";
import ir from "@mui/material/Menu";
import Je from "@mui/material/MenuItem";
import N from "@mui/material/Stack";
import sr from "@mui/material/TextField";
import lr from "@mui/material/Toolbar";
import ae from "@mui/material/Tooltip";
import j from "@mui/material/Typography";
import cr from "@mui/material/useMediaQuery";
import dr from "@mui/material/Card";
import hr from "@mui/material/CardContent";
import yt from "@mui/material/Button";
import ur from "@mui/icons-material/AutoAwesomeRounded";
import pr from "@mui/icons-material/KeyboardDoubleArrowLeftRounded";
import fr from "@mui/icons-material/KeyboardDoubleArrowRightRounded";
import vt from "@mui/material/Collapse";
import he from "@mui/material/ListItemButton";
import ue from "@mui/material/ListItemIcon";
import ne from "@mui/material/ListItemText";
import gr from "@mui/icons-material/ExpandLess";
import mr from "@mui/icons-material/ExpandMore";
import xr from "@mui/material/MenuList";
import wr from "@mui/material/Paper";
import br from "@mui/material/Popper";
import Sr from "@mui/icons-material/NotificationsRounded";
import Er from "@mui/material/Drawer";
const R = bt(), ft = [...R.shadows], B = {
  50: "hsl(210, 100%, 95%)",
  100: "hsl(210, 100%, 92%)",
  200: "hsl(210, 100%, 80%)",
  300: "hsl(210, 100%, 65%)",
  400: "hsl(210, 98%, 48%)",
  500: "hsl(210, 98%, 42%)",
  600: "hsl(210, 98%, 55%)",
  700: "hsl(210, 100%, 35%)",
  900: "hsl(210, 100%, 21%)"
}, k = {
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
}, be = {
  300: "hsl(120, 61%, 77%)",
  400: "hsl(120, 44%, 53%)",
  500: "hsl(120, 59%, 30%)",
  700: "hsl(120, 75%, 16%)",
  800: "hsl(120, 84%, 10%)"
}, de = {
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
}, yr = (e) => (ft[1] = e === "dark" ? "hsla(220, 30%, 5%, 0.7) 0px 4px 16px 0px, hsla(220, 25%, 10%, 0.8) 0px 8px 16px -5px" : "hsla(220, 30%, 5%, 0.07) 0px 4px 16px 0px, hsla(220, 25%, 10%, 0.07) 0px 8px 16px -5px", {
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
      contrastText: k[50],
      ...e === "dark" && {
        contrastText: B[300],
        light: B[500],
        main: B[700],
        dark: B[900]
      }
    },
    warning: {
      light: de[300],
      main: de[400],
      dark: de[800],
      ...e === "dark" && {
        light: de[400],
        main: de[500],
        dark: de[700]
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
      light: be[300],
      main: be[400],
      dark: be[800],
      ...e === "dark" && {
        light: be[400],
        main: be[500],
        dark: be[700]
      }
    },
    grey: {
      ...k
    },
    divider: e === "dark" ? X(k[700], 0.6) : X(k[300], 0.4),
    background: {
      default: "hsl(0, 0%, 99%)",
      paper: "hsl(220, 35%, 97%)",
      ...e === "dark" && {
        default: k[900],
        paper: "hsl(220, 30%, 7%)"
      }
    },
    text: {
      primary: k[800],
      secondary: k[600],
      warning: de[400],
      ...e === "dark" && {
        primary: "hsl(0, 0%, 100%)",
        secondary: k[400]
      }
    },
    action: {
      hover: X(k[200], 0.2),
      selected: `${X(k[200], 0.3)}`,
      ...e === "dark" && {
        hover: X(k[600], 0.2),
        selected: X(k[600], 0.3)
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
  shadows: ft
});
X(k[300], 0.4), X(k[200], 0.2), `${X(k[200], 0.3)}`, X(k[700], 0.6), X(k[600], 0.2), X(k[600], 0.3);
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
const _ = {
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
}, vr = () => {
  if (!(typeof window > "u" || !window.localStorage))
    try {
      const e = localStorage.getItem(ee.ACCESS_TOKEN), r = localStorage.getItem(ee.REFRESH_TOKEN), o = localStorage.getItem(ee.USER);
      e && !localStorage.getItem(z.ACCESS_TOKEN) && localStorage.setItem(z.ACCESS_TOKEN, e), r && !localStorage.getItem(z.REFRESH_TOKEN) && localStorage.setItem(z.REFRESH_TOKEN, r), o && !localStorage.getItem(z.USER) && localStorage.setItem(z.USER, o), (e || r || o) && (localStorage.removeItem(ee.ACCESS_TOKEN), localStorage.removeItem(ee.REFRESH_TOKEN), localStorage.removeItem(ee.USER));
    } catch (e) {
      console.warn("Failed to migrate legacy localStorage keys:", e);
    }
}, $e = (e) => {
  try {
    if (typeof window > "u")
      return console.warn("localStorage access attempted on server side"), null;
    if (!window.localStorage)
      throw new C("localStorage is not available", _.STORAGE_ACCESS_DENIED);
    return window.localStorage.getItem(e);
  } catch (r) {
    throw r.name === "QuotaExceededError" ? (console.error("Storage quota exceeded"), new C(
      "Storage quota exceeded. Please clear browser data.",
      _.STORAGE_ACCESS_DENIED,
      r
    )) : r.name === "SecurityError" ? (console.error("localStorage access denied (private browsing or security settings)"), new C(
      "Access to localStorage is denied. Please check browser settings.",
      _.STORAGE_ACCESS_DENIED,
      r
    )) : (console.error("Unexpected error accessing localStorage:", r.name), new C("Failed to access storage", _.STORAGE_ACCESS_DENIED, r));
  }
}, Ge = (e, r) => {
  try {
    if (typeof window > "u")
      return console.warn("localStorage write attempted on server side"), !1;
    if (!window.localStorage)
      throw new C("localStorage is not available", _.STORAGE_ACCESS_DENIED);
    return window.localStorage.setItem(e, r), !0;
  } catch (o) {
    throw o.name === "QuotaExceededError" ? (console.error("Storage quota exceeded"), new C(
      "Storage quota exceeded. Please clear browser data.",
      _.STORAGE_ACCESS_DENIED,
      o
    )) : o.name === "SecurityError" ? (console.error("localStorage write denied (private browsing or security settings)"), new C(
      "Access to localStorage is denied. Please check browser settings.",
      _.STORAGE_ACCESS_DENIED,
      o
    )) : (console.error("Unexpected error writing to localStorage:", o.name), new C("Failed to write to storage", _.STORAGE_ACCESS_DENIED, o));
  }
}, Rt = (e) => {
  try {
    return typeof window > "u" ? (console.warn("localStorage removal attempted on server side"), !1) : window.localStorage ? (window.localStorage.removeItem(e), !0) : (console.warn("localStorage is not available"), !1);
  } catch (r) {
    return r.name !== "SecurityError" && console.warn(`Could not remove localStorage key "${e}"`), !1;
  }
}, Ce = () => {
  try {
    vr();
    const e = $e(z.ACCESS_TOKEN), r = $e(z.REFRESH_TOKEN), o = $e(z.USER);
    let a = null;
    if (o)
      try {
        a = JSON.parse(o);
      } catch {
        o && o !== "null" && o !== "undefined" && console.warn("Invalid user data in localStorage, clearing:", o.substring(0, 50)), Rt(z.USER);
      }
    return {
      accessToken: e,
      refreshToken: r,
      user: a
    };
  } catch (e) {
    throw e instanceof C ? e : new C("Failed to retrieve authentication tokens", _.UNKNOWN_ERROR, e);
  }
}, Rr = () => {
  try {
    const { accessToken: e, refreshToken: r } = Ce();
    return !(e || r) ? {
      isAuthenticated: !1,
      error: new C("No authentication tokens found", _.TOKEN_NOT_FOUND)
    } : {
      isAuthenticated: !0,
      error: null
    };
  } catch (e) {
    return console.error("Authentication check failed:", e), {
      isAuthenticated: !1,
      error: e instanceof C ? e : new C("Authentication check failed", _.UNKNOWN_ERROR, e)
    };
  }
}, Ct = (e, r, o = null) => {
  try {
    if (!e && !r)
      throw new C("At least one token must be provided", _.TOKEN_INVALID);
    return e && Ge(z.ACCESS_TOKEN, e), r && Ge(z.REFRESH_TOKEN, r), o && Ge(z.USER, JSON.stringify(o)), {
      success: !0,
      error: null
    };
  } catch (a) {
    return console.error("Failed to store authentication tokens:", a), {
      success: !1,
      error: a instanceof C ? a : new C("Failed to store tokens", _.UNKNOWN_ERROR, a)
    };
  }
}, Te = () => {
  try {
    return [
      z.ACCESS_TOKEN,
      z.REFRESH_TOKEN,
      z.USER,
      // Also clear legacy keys for complete cleanup
      ee.ACCESS_TOKEN,
      ee.REFRESH_TOKEN,
      ee.USER
    ].map((a) => Rt(a)).every((a) => a) || console.warn("Some tokens could not be removed from localStorage"), {
      success: !0,
      error: null
    };
  } catch (e) {
    return console.error("Failed to clear authentication tokens:", e), {
      success: !1,
      error: e instanceof C ? e : new C("Failed to clear tokens", _.LOGOUT_FAILED, e)
    };
  }
}, Cr = () => {
  try {
    const { user: e } = Ce();
    return {
      user: e,
      error: null
    };
  } catch (e) {
    return console.error("Failed to get current user:", e), {
      user: null,
      error: e instanceof C ? e : new C("Failed to retrieve user data", _.UNKNOWN_ERROR, e)
    };
  }
}, zo = (e) => {
  if (!(e instanceof C))
    return "An unexpected error occurred. Please try again.";
  switch (e.code) {
    case _.STORAGE_ACCESS_DENIED:
      return "Unable to access browser storage. Please check your browser settings and disable private browsing if enabled.";
    case _.TOKEN_NOT_FOUND:
      return "You are not logged in. Please sign in to continue.";
    case _.TOKEN_INVALID:
      return "Your session is invalid. Please sign in again.";
    case _.TOKEN_EXPIRED:
      return "Your session has expired. Please sign in again.";
    case _.LOGOUT_FAILED:
      return "Failed to log out properly. Please clear your browser cache and try again.";
    case _.UNKNOWN_ERROR:
    default:
      return "An unexpected error occurred. Please try again or contact support if the problem persists.";
  }
}, Ye = (e, r = "Unknown") => {
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
}, Tr = (e) => {
  if (!e)
    throw new Error("API base URL is required to create axios client");
  const r = ut.create({
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
      const { accessToken: s } = Ce();
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
      const { refreshToken: A } = Ce();
      if (!A) {
        const g = new Error(
          "No refresh token available for token refresh"
        );
        return Ye(g, "AxiosClient - Token Refresh"), Te(), typeof window < "u" && (window.location.href = "/login"), Promise.reject(i);
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
                const x = JSON.parse(
                  s.data || "{}"
                );
                x.refresh_token = S, s.data = JSON.stringify(x);
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
      o = !0, a = ut.post(
        `${e}/auth/refresh`,
        {
          refresh_token: A
        }
      );
      try {
        const g = await a, { accessToken: O, refreshToken: S } = g.data;
        if (Ct(O, S, null), c(null, {
          accessToken: O,
          refreshToken: S
        }), s.headers && (s.headers.Authorization = `Bearer ${O}`), y.includes("/auth/logout"))
          try {
            if (typeof s.data == "string") {
              const x = JSON.parse(
                s.data || "{}"
              );
              x.refresh_token = S, s.data = JSON.stringify(x);
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
        return Ye(
          g,
          "AxiosClient - Token Refresh Failed"
        ), c(g), Te(), typeof window < "u" && (window.location.href = "/login"), Promise.reject(g);
      } finally {
        o = !1, a = null;
      }
    }
  ), r;
}, Ir = async (e, r) => {
  const { accessToken: o, refreshToken: a } = Ce();
  if (o)
    return !0;
  if (a)
    try {
      const l = await e.post("/auth/refresh", {
        refresh_token: a
      });
      if (l.data.success && l.data.accessToken)
        return Ct(l.data.accessToken, l.data.refreshToken || null, null), !0;
    } catch (l) {
      Ye(l, "TokenValidator - Refresh Failed");
    }
  return Te(), r ? r() : window.location.href = "/login", !1;
}, Or = Vt(lr)({
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
  showBrand: l = !0,
  headerStyles: c,
  userName: i = "User Name",
  userEmail: s,
  userAvatar: T,
  onProfileClick: y,
  onAccountClick: m,
  onSettingsClick: A,
  showSettings: g = !0,
  onLogout: O,
  showNotifications: S = !1,
  notificationCount: x = 0,
  onNotificationBellClick: K,
  theme: U = "light",
  showThemeToggler: H = !1,
  onThemeToggle: f,
  showSearchbar: p = !0,
  searchValue: D,
  onSearchChange: v,
  onSearchSubmit: J,
  showProfile: G = !0,
  userRole: I,
  accentColor: F = "#01584f",
  contentBackgroundColor: h = "#f2f9fc",
  navbarBackground: W = "#ff0000",
  navbarAccentColor: E = "#000000",
  rightExtraContent: ie = [],
  customNavbar: Y,
  customNavbarProps: Ee
}) => {
  const pe = cr((u) => u.breakpoints.up("md")), [re, q] = b.useState(null), se = !!re, le = U === "dark", oe = le ? "Switch to light mode" : "Switch to dark mode", fe = (u) => {
    v?.(u.target.value);
  }, n = (u) => {
    u.key === "Enter" && J && D && J(D);
  }, w = (u) => u ? u.charAt(0).toUpperCase() + u.slice(1).toLowerCase() : "User", P = (u) => {
    q(u.currentTarget);
  }, M = () => {
    q(null);
  }, $ = (u) => {
    u?.(), M();
  };
  return /* @__PURE__ */ t(
    nr,
    {
      position: "fixed",
      sx: {
        boxShadow: 0,
        background: W,
        top: "var(--template-frame-height, 0px)",
        left: 0,
        width: "100%",
        zIndex: 1,
        height: "60px",
        ...c
      },
      children: /* @__PURE__ */ d(Or, { variant: "dense", sx: { height: "100%" }, children: [
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
              a && !pe && /* @__PURE__ */ t(
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
                  children: /* @__PURE__ */ t(tr, {})
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
                      j,
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
              Y ? /* @__PURE__ */ t(Y, { ...Ee || {} }) : p && pe && /* @__PURE__ */ t(
                sr,
                {
                  placeholder: "Search for deals or documents...",
                  value: D || "",
                  onChange: fe,
                  onKeyDown: n,
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
                    startAdornment: /* @__PURE__ */ t(ar, { position: "start", children: /* @__PURE__ */ t(
                      or,
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
              H && /* @__PURE__ */ t(ae, { title: oe, placement: "bottom", children: /* @__PURE__ */ t("span", { children: /* @__PURE__ */ t(
                V,
                {
                  size: "small",
                  onClick: f,
                  disabled: !f,
                  "aria-label": oe,
                  sx: {
                    color: E,
                    "&:hover": {
                      backgroundColor: "action.hover"
                    }
                  },
                  children: le ? /* @__PURE__ */ t(er, { fontSize: "small" }) : /* @__PURE__ */ t(Zt, { fontSize: "small" })
                }
              ) }) }),
              S && /* @__PURE__ */ t(
                Et,
                {
                  color: "error",
                  badgeContent: x,
                  invisible: x === 0,
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
                      onClick: K,
                      "aria-label": x ? `Notifications, ${x} unread` : "Notifications",
                      sx: { color: E },
                      children: /* @__PURE__ */ t(rr, {})
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
              G && /* @__PURE__ */ d(Le, { children: [
                /* @__PURE__ */ d(
                  N,
                  {
                    direction: "row",
                    onClick: P,
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
                        Xe,
                        {
                          src: T,
                          sx: { width: 32, height: 32 }
                        }
                      ) : /* @__PURE__ */ t(
                        pt,
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
                              j,
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
                              j,
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
                                children: w(I)
                              }
                            )
                          ]
                        }
                      )
                    ]
                  }
                ),
                /* @__PURE__ */ d(
                  ir,
                  {
                    anchorEl: re,
                    open: se,
                    onClose: M,
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
                            onClick: () => $(A),
                            children: "Settings"
                          },
                          "settings"
                        ),
                        /* @__PURE__ */ t(te, {}, "settings-divider")
                      ],
                      /* @__PURE__ */ d(
                        Je,
                        {
                          onClick: () => $(O),
                          sx: {
                            color: "error.main",
                            "&:hover": {
                              color: "error.dark"
                            }
                          },
                          children: [
                            /* @__PURE__ */ t(j, { sx: { flexGrow: 1 }, children: "Logout" }),
                            /* @__PURE__ */ t(St, { fontSize: "small" })
                          ]
                        }
                      )
                    ]
                  }
                )
              ] }),
              ie.length !== 0 && ie.map((u) => u.type === "divider" ? /* @__PURE__ */ t(
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
                ae,
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
                          Xe,
                          {
                            src: u.avatar,
                            sx: {
                              width: 32,
                              height: 32
                            }
                          }
                        ) : /* @__PURE__ */ t(
                          pt,
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
                                j,
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
                                j,
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
}, qe = ({
  title: e = "",
  message: r = "",
  buttonText: o = "",
  onButtonClick: a,
  show: l = !0
}) => l ? /* @__PURE__ */ t(dr, { variant: "outlined", sx: { m: 1.5, flexShrink: 0 }, children: /* @__PURE__ */ d(hr, { children: [
  /* @__PURE__ */ t(ur, { fontSize: "small" }),
  /* @__PURE__ */ t(j, { gutterBottom: !0, sx: { fontWeight: 600 }, children: e }),
  /* @__PURE__ */ t(
    j,
    {
      variant: "body2",
      sx: { mb: 2, color: "text.secondary" },
      children: r
    }
  ),
  /* @__PURE__ */ t(
    yt,
    {
      variant: "contained",
      size: "small",
      fullWidth: !0,
      onClick: a,
      children: o
    }
  )
] }) }) : null, We = (e, r) => r ? e.path && r === e.path ? !0 : e.subitems?.some((o) => o.path === r) ?? !1 : !1, Me = (e, r) => !!(r && e.path === r), Ar = (e) => {
  const r = Tt(e);
  if (!r)
    return "#ffffff";
  const [o, a, l] = r.map((i) => {
    const s = i / 255;
    return s <= 0.03928 ? s / 12.92 : ((s + 0.055) / 1.055) ** 2.4;
  });
  return 0.2126 * o + 0.7152 * a + 0.0722 * l > 0.5 ? "#0b1f1c" : "#ffffff";
}, _r = (e) => {
  const r = Tt(e);
  if (!r)
    return "rgba(1, 88, 79, 0.12)";
  const [o, a, l] = r;
  return `rgba(${o}, ${a}, ${l}, 0.14)`;
}, Tt = (e) => {
  let r = e.trim().replace(/^#/, "");
  if (r.length === 3 && (r = r.split("").map((a) => a + a).join("")), r.length !== 6 || /[^0-9a-fA-F]/.test(r))
    return null;
  const o = parseInt(r, 16);
  return [o >> 16 & 255, o >> 8 & 255, o & 255];
}, It = () => typeof window < "u" && !!window.localStorage, Ot = (e) => {
  if (!It())
    return null;
  try {
    const r = window.localStorage.getItem(e);
    return r === null ? null : r === "true";
  } catch (r) {
    return console.warn("Failed to read sidebar collapsed state:", r), null;
  }
}, Dt = (e, r) => {
  if (It())
    try {
      window.localStorage.setItem(e, r ? "true" : "false");
    } catch (o) {
      console.warn("Failed to persist sidebar collapsed state:", o);
    }
}, Nr = 264, kr = 72, Lr = "lumora:sidebar-collapsed", Wr = "width 200ms ease", Pe = ({ text: e }) => {
  const r = b.useRef(null), [o, a] = b.useState(!1), l = b.useCallback(() => {
    const c = r.current;
    c && a(c.scrollWidth > c.clientWidth + 0.5);
  }, []);
  return b.useLayoutEffect(() => {
    l();
  }, [l, e]), b.useEffect(() => {
    const c = r.current;
    if (!c)
      return;
    const i = new ResizeObserver(() => l());
    return i.observe(c), () => i.disconnect();
  }, [l]), /* @__PURE__ */ t(
    ae,
    {
      title: e,
      placement: "right",
      arrow: !0,
      enterDelay: 400,
      disableHoverListener: !o,
      disableFocusListener: !o,
      disableTouchListener: !o,
      children: /* @__PURE__ */ t(
        j,
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
}, Mr = ({
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
  collapsed: A,
  defaultCollapsed: g = !1,
  onCollapsedChange: O,
  persistKey: S = Lr,
  expandedWidth: x = Nr,
  collapsedWidth: K = kr
}) => {
  const U = Qe(), H = U.palette.mode === "dark", f = A !== void 0, [p, D] = b.useState(
    () => Ot(S) ?? g
  ), v = f ? !!A : p, [J, G] = b.useState(
    {}
  ), I = s, F = y ?? Ar(I), h = T ?? _r(I), W = m ?? (H ? U.palette.background.paper : "#ffffff"), E = H ? "text.primary" : I, ie = (n) => {
    f || (D(n), Dt(S, n)), O?.(n);
  }, Y = (n) => {
    a?.(n);
  }, Ee = (n) => {
    G((w) => ({ ...w, [n]: !w[n] }));
  }, pe = (n) => {
    const w = !!(n.path && o === n.path);
    return /* @__PURE__ */ d(
      he,
      {
        disabled: !n.path,
        selected: w,
        onClick: () => n.path && Y(n.path),
        "data-testid": `sidebar-item-${n.text}`,
        "data-active": w ? "true" : "false",
        sx: {
          borderRadius: "6px",
          py: 1,
          px: 1.5,
          color: w ? F : E,
          bgcolor: w ? I : "transparent",
          "& .MuiListItemIcon-root": {
            color: w ? F : E,
            minWidth: 36
          },
          "&:hover": {
            bgcolor: w ? I : h
          },
          "&.Mui-selected, &.Mui-selected:hover": {
            bgcolor: I
          }
        },
        children: [
          /* @__PURE__ */ t(ue, { children: n.icon }),
          /* @__PURE__ */ t(
            ne,
            {
              disableTypography: !0,
              primary: /* @__PURE__ */ t(Pe, { text: n.text })
            }
          )
        ]
      },
      n.text
    );
  }, re = (n) => {
    const w = We(n, o), P = !!(n.path && o === n.path), M = w || !!J[n.text];
    return /* @__PURE__ */ d(
      L,
      {
        "data-testid": `sidebar-group-${n.text}`,
        sx: {
          borderRadius: "6px",
          bgcolor: M ? h : "transparent"
        },
        children: [
          /* @__PURE__ */ d(
            he,
            {
              onClick: () => n.path ? Y(n.path) : Ee(n.text),
              "data-testid": `sidebar-item-${n.text}`,
              "data-active": P ? "true" : "false",
              sx: {
                borderRadius: "6px",
                py: 1,
                px: 1.5,
                color: P ? F : E,
                bgcolor: P ? I : "transparent",
                "& .MuiListItemIcon-root": {
                  color: P ? F : E,
                  minWidth: 36
                },
                "&:hover": {
                  bgcolor: P ? I : M ? "transparent" : h
                }
              },
              children: [
                /* @__PURE__ */ t(ue, { children: n.icon }),
                /* @__PURE__ */ t(
                  ne,
                  {
                    disableTypography: !0,
                    primary: /* @__PURE__ */ t(Pe, { text: n.text })
                  }
                )
              ]
            }
          ),
          /* @__PURE__ */ t(vt, { in: M, timeout: "auto", unmountOnExit: !0, children: /* @__PURE__ */ t(
            L,
            {
              "data-testid": `sidebar-children-${n.text}`,
              sx: { pb: 0.5 },
              children: n.subitems.map(($) => q($))
            }
          ) })
        ]
      },
      n.text
    );
  }, q = (n) => {
    const w = Me(n, o);
    return /* @__PURE__ */ d(
      he,
      {
        selected: w,
        onClick: () => Y(n.path),
        "data-testid": `sidebar-subitem-${n.text}`,
        "data-active": w ? "true" : "false",
        sx: {
          borderRadius: "6px",
          mx: 0.5,
          py: 0.75,
          pl: 4,
          color: w ? F : E,
          bgcolor: w ? I : "transparent",
          "& .MuiListItemIcon-root": {
            color: w ? F : E,
            minWidth: 32
          },
          "&:hover": {
            bgcolor: w ? I : "action.hover"
          },
          "&.Mui-selected, &.Mui-selected:hover": {
            bgcolor: I
          }
        },
        children: [
          n.icon ? /* @__PURE__ */ t(ue, { children: n.icon }) : null,
          /* @__PURE__ */ t(
            ne,
            {
              disableTypography: !0,
              primary: /* @__PURE__ */ t(Pe, { text: n.text })
            }
          )
        ]
      },
      n.path
    );
  }, se = (n, w, P, M, $, u) => {
    const Ie = !$, ge = /* @__PURE__ */ t(
      V,
      {
        "aria-label": w,
        disabled: Ie,
        onClick: $,
        "data-testid": u?.testId ?? `sidebar-item-${w}`,
        "data-active": M ? "true" : "false",
        sx: {
          width: 44,
          height: 44,
          color: M ? F : E,
          bgcolor: M ? I : "transparent",
          borderRadius: M ? "8px" : "50%",
          "&:hover": {
            bgcolor: M ? I : u?.insideGroup ? "action.hover" : h,
            borderRadius: "8px"
          }
        },
        children: P
      }
    );
    return /* @__PURE__ */ t(ae, { title: w, placement: "right", arrow: !0, children: Ie ? /* @__PURE__ */ t("span", { children: ge }) : ge }, n);
  }, le = (n) => {
    const w = !!n.subitems?.length, P = We(n, o);
    if (w && P) {
      const $ = !!(n.path && o === n.path);
      return /* @__PURE__ */ d(
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
            se(
              n.text,
              n.text,
              n.icon,
              $,
              n.path ? () => Y(n.path) : void 0,
              { insideGroup: !0 }
            ),
            n.subitems.map(
              (u) => se(
                u.path,
                u.text,
                u.icon ?? n.icon,
                Me(u, o),
                () => Y(u.path),
                {
                  insideGroup: !0,
                  testId: `sidebar-subitem-${u.text}`
                }
              )
            )
          ]
        },
        n.text
      );
    }
    const M = n.path ? () => Y(n.path) : w ? () => ie(!1) : void 0;
    return se(
      n.text,
      n.text,
      n.icon,
      !!(n.path && o === n.path),
      M
    );
  }, oe = (n) => v ? le(n) : n.subitems?.length ? re(n) : pe(n), fe = v ? K : x;
  return /* @__PURE__ */ d(
    L,
    {
      component: "nav",
      "aria-label": "Main sidebar",
      "data-testid": "collapsible-sidebar",
      "data-collapsed": v ? "true" : "false",
      sx: {
        width: fe,
        minWidth: fe,
        height: "100%",
        boxSizing: "border-box",
        bgcolor: W,
        display: "flex",
        flexDirection: "column",
        overflowX: "hidden",
        overflowY: "auto",
        transition: Wr,
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
                j,
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
                j,
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
                ae,
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
                      onClick: () => ie(!v),
                      disableFocusRipple: !0,
                      sx: {
                        color: E,
                        "&:focus, &:focus-visible": { outline: "none" }
                      },
                      children: v ? /* @__PURE__ */ t(fr, { fontSize: "small" }) : /* @__PURE__ */ t(pr, { fontSize: "small" })
                    }
                  )
                }
              )
            ]
          }
        ),
        /* @__PURE__ */ t(N, { spacing: 0.5, sx: { width: "100%" }, children: e.map((n) => oe(n)) }),
        r.length > 0 ? /* @__PURE__ */ d(L, { sx: { mt: "auto", pt: 2 }, children: [
          /* @__PURE__ */ t(te, { sx: { mb: 1, borderColor: "divider" } }),
          /* @__PURE__ */ t(N, { spacing: 0.5, sx: { width: "100%" }, children: r.map((n) => oe(n)) })
        ] }) : null
      ]
    }
  );
}, zr = 180, gt = 250, At = ({
  text: e,
  testId: r
}) => {
  const o = b.useRef(null), [a, l] = b.useState(!1), c = b.useCallback(() => {
    const i = o.current;
    i && l(i.scrollWidth > i.clientWidth + 0.5);
  }, []);
  return b.useLayoutEffect(() => {
    c();
  }, [c, e]), b.useEffect(() => {
    const i = o.current;
    if (!i)
      return;
    const s = new ResizeObserver(() => c());
    return s.observe(i), () => s.disconnect();
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
        j,
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
}, Fr = ({
  link: e,
  activePath: r,
  onLinkClick: o,
  accentColor: a,
  isSecondary: l,
  surfaceBackgroundColor: c,
  railShowTitles: i = !1
}) => {
  const s = Qe(), [T, y] = b.useState(null), [m, A] = b.useState(!1), g = b.useRef(
    null
  ), O = b.useRef(null), S = b.useRef(null), x = b.useRef(!1), K = b.useRef(!1), U = b.useId(), H = () => {
    g.current && (clearTimeout(g.current), g.current = null);
  }, f = () => {
    H(), g.current = setTimeout(() => {
      A(!1), g.current = null;
    }, zr);
  }, p = () => {
    H(), A(!0);
  };
  b.useEffect(() => {
    if (!m)
      return;
    const h = (W) => {
      W.key === "Escape" && (A(!1), S.current?.focus());
    };
    return document.addEventListener("keydown", h), () => document.removeEventListener("keydown", h);
  }, [m]), b.useEffect(() => {
    if (!m || !K.current)
      return;
    const h = globalThis.requestAnimationFrame(() => {
      O.current?.querySelector(
        '[role="menuitem"]'
      )?.focus(), K.current = !1;
    });
    return () => cancelAnimationFrame(h);
  }, [m]);
  const D = We(e, r), v = l ? 48 : 44, J = l ? "text.secondary" : a, G = l ? "#01584F" : a, I = {
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
    color: D ? "#ffffff" : J,
    backgroundColor: D ? G : "transparent",
    "&:hover": {
      backgroundColor: D ? G : "action.hover",
      borderRadius: "4px",
      color: D ? "#ffffff" : J
    }
  }, F = i ? /* @__PURE__ */ t(
    V,
    {
      ref: S,
      component: e.path ? "a" : "button",
      href: e.path || void 0,
      "aria-label": e.text,
      onFocus: () => {
        x.current || p();
      },
      onBlur: (h) => {
        const W = h.relatedTarget;
        W && O.current?.contains(W) || f();
      },
      onKeyDown: (h) => {
        h.key === "ArrowDown" && (h.preventDefault(), K.current = !0, p());
      },
      onClick: (h) => {
        h.preventDefault(), h.stopPropagation(), e.path && o?.(e.path);
      },
      "aria-haspopup": "menu",
      "aria-expanded": m,
      "aria-controls": m ? U : void 0,
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
          At,
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
        x.current || p();
      },
      onBlur: (h) => {
        const W = h.relatedTarget;
        W && O.current?.contains(W) || f();
      },
      onKeyDown: (h) => {
        h.key === "ArrowDown" && (h.preventDefault(), K.current = !0, p());
      },
      onClick: (h) => {
        h.preventDefault(), h.stopPropagation(), e.path && o?.(e.path);
      },
      "aria-haspopup": "menu",
      "aria-expanded": m,
      "aria-controls": m ? U : void 0,
      "data-testid": `rail-submenu-trigger-${e.text}`,
      sx: {
        width: v,
        height: v,
        color: D ? "#ffffff" : J,
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
              x.current = !0, p();
            },
            onMouseLeave: () => {
              x.current = !1, f();
            },
            children: i ? F : /* @__PURE__ */ t(ae, { title: e.text, placement: "right", arrow: !0, children: F })
          }
        ),
        /* @__PURE__ */ t(
          br,
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
                  H();
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
                  maxWidth: gt,
                  minWidth: 0,
                  py: 0.5,
                  boxSizing: "border-box"
                },
                children: /* @__PURE__ */ t(
                  xr,
                  {
                    id: U,
                    dense: !0,
                    autoFocus: !1,
                    role: "menu",
                    sx: {
                      bgcolor: "transparent",
                      py: 0,
                      maxWidth: gt
                    },
                    children: e.subitems.map((h) => /* @__PURE__ */ d(
                      Je,
                      {
                        role: "menuitem",
                        title: h.text,
                        selected: Me(h, r),
                        onClick: (W) => {
                          W.preventDefault(), o?.(h.path), A(!1);
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
                          h.icon ? /* @__PURE__ */ t(ue, { children: h.icon }) : null,
                          /* @__PURE__ */ t(
                            ne,
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
}, Br = ({
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
  }, A = c ? /* @__PURE__ */ t(
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
          At,
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
  return c ? A : /* @__PURE__ */ t(ae, { title: e.text, placement: "right", arrow: !0, children: A });
}, Kr = ({
  link: e,
  expanded: r,
  onToggle: o,
  activePath: a,
  onLinkClick: l,
  accentColor: c,
  isSecondary: i
}) => {
  const s = We(e, a), T = i ? "text.secondary" : c, y = i ? "#01584F" : c;
  return /* @__PURE__ */ d(Le, { children: [
    /* @__PURE__ */ d(
      he,
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
          /* @__PURE__ */ t(ue, { sx: { color: "inherit", minWidth: 40 }, children: e.icon }),
          /* @__PURE__ */ t(ne, { primary: e.text }),
          r ? /* @__PURE__ */ t(gr, {}) : /* @__PURE__ */ t(mr, {})
        ]
      }
    ),
    /* @__PURE__ */ t(vt, { in: r, timeout: "auto", unmountOnExit: !0, children: /* @__PURE__ */ d(L, { component: "nav", "aria-label": e.text, children: [
      e.path ? /* @__PURE__ */ t(
        he,
        {
          sx: { pl: 4, py: 1 },
          onClick: () => e.path && l?.(e.path),
          selected: !!(a && a === e.path),
          "data-testid": `drawer-parent-path-${e.text}`,
          children: /* @__PURE__ */ t(ne, { primary: e.text })
        }
      ) : null,
      e.subitems.map((m) => /* @__PURE__ */ d(
        he,
        {
          sx: { pl: 4, py: 1 },
          onClick: () => l?.(m.path),
          selected: Me(m, a),
          children: [
            m.icon ? /* @__PURE__ */ t(ue, { sx: { minWidth: 36 }, children: m.icon }) : null,
            /* @__PURE__ */ t(ne, { primary: m.text })
          ]
        },
        m.path
      ))
    ] }) })
  ] });
}, Ur = ({
  link: e,
  activePath: r,
  onLinkClick: o,
  accentColor: a,
  isSecondary: l
}) => {
  const c = !!(e.path && r === e.path), i = l ? "text.secondary" : a, s = l ? "#01584F" : a;
  return /* @__PURE__ */ d(
    he,
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
        /* @__PURE__ */ t(ue, { sx: { color: "inherit", minWidth: 40 }, children: e.icon }),
        /* @__PURE__ */ t(ne, { primary: e.text })
      ]
    }
  );
}, ke = () => /* @__PURE__ */ t(
  L,
  {
    sx: {
      width: "100%",
      display: "flex",
      justifyContent: "center"
    },
    children: /* @__PURE__ */ t(te, { sx: { width: "60%", borderColor: "divider" } })
  }
), _t = ({
  variant: e,
  mainLinks: r,
  secondaryLinks: o = [],
  activePath: a,
  onLinkClick: l,
  accentColor: c = "#01584f",
  surfaceBackgroundColor: i,
  railShowTitles: s = !1
}) => {
  const T = Qe(), y = i ?? T.palette.background.paper, m = (f) => {
    l && l(f);
  }, [A, g] = b.useState({}), [O, S] = b.useState({}), x = (f) => {
    g((p) => ({
      ...p,
      [f]: !p[f]
    }));
  }, K = (f) => {
    S((p) => ({
      ...p,
      [f]: !p[f]
    }));
  }, U = (f, p) => f.subitems?.length ? /* @__PURE__ */ t(
    Fr,
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
    Br,
    {
      link: f,
      activePath: a,
      onLinkClick: m,
      accentColor: c,
      isSecondary: p,
      railShowTitles: s
    }
  ), H = (f, p, D) => {
    if (f.subitems?.length) {
      const v = D ? !!O[p] : !!A[p];
      return /* @__PURE__ */ t(
        Kr,
        {
          link: f,
          expanded: v,
          onToggle: () => D ? K(p) : x(p),
          activePath: a,
          onLinkClick: m,
          accentColor: c,
          isSecondary: D
        }
      );
    }
    return /* @__PURE__ */ t(
      Ur,
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
        /* @__PURE__ */ t(N, { sx: { width: "100%" }, children: r.map((f, p) => /* @__PURE__ */ d(b.Fragment, { children: [
          H(f, p, !1),
          p < r.length - 1 ? /* @__PURE__ */ t(ke, {}) : null
        ] }, p)) }),
        o.length > 0 ? /* @__PURE__ */ d(Le, { children: [
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
          /* @__PURE__ */ t(L, { sx: { mt: "auto", pb: 2 }, children: /* @__PURE__ */ t(N, { sx: { width: "100%" }, children: o.map((f, p) => /* @__PURE__ */ d(b.Fragment, { children: [
            H(f, p, !0),
            p < o.length - 1 ? /* @__PURE__ */ t(ke, {}) : null
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
        r.map((f, p) => /* @__PURE__ */ d(b.Fragment, { children: [
          U(f, !1),
          p < r.length - 1 ? /* @__PURE__ */ t(ke, {}) : null
        ] }, p)),
        o.length > 0 ? /* @__PURE__ */ d(Le, { children: [
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
              children: o.map((f, p) => /* @__PURE__ */ d(b.Fragment, { children: [
                U(f, !0),
                p < o.length - 1 ? /* @__PURE__ */ t(ke, {}) : null
              ] }, p))
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
  onLogout: T,
  showNotifications: y = !1,
  notificationCount: m = 0,
  onNotificationBellClick: A,
  alertProps: g,
  accentColor: O = "#01584f"
}) => /* @__PURE__ */ t(
  Er,
  {
    anchor: "right",
    open: e,
    onClose: r,
    sx: {
      zIndex: (x) => x.zIndex.drawer + 1,
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
                    Xe,
                    {
                      sizes: "small",
                      alt: i,
                      src: s,
                      sx: { width: 24, height: 24 }
                    }
                  ),
                  /* @__PURE__ */ t(j, { component: "p", variant: "h6", children: i })
                ]
              }
            ),
            y && /* @__PURE__ */ t(
              Et,
              {
                color: "error",
                badgeContent: m,
                invisible: m === 0,
                sx: { "& .MuiBadge-badge": { right: 2, top: 2 } },
                children: /* @__PURE__ */ t(
                  V,
                  {
                    size: "small",
                    onClick: A,
                    "aria-label": "Notifications",
                    children: /* @__PURE__ */ t(Sr, {})
                  }
                )
              }
            )
          ] }),
          /* @__PURE__ */ t(te, {}),
          /* @__PURE__ */ d(N, { sx: { flexGrow: 1 }, children: [
            /* @__PURE__ */ t(
              _t,
              {
                variant: "drawer",
                mainLinks: o,
                secondaryLinks: a,
                activePath: l,
                onLinkClick: (x) => {
                  c?.(x), r();
                },
                accentColor: O
              }
            ),
            /* @__PURE__ */ t(te, {})
          ] }),
          g?.show && /* @__PURE__ */ t(qe, { ...g }),
          /* @__PURE__ */ t(N, { sx: { p: 2 }, children: /* @__PURE__ */ t(
            yt,
            {
              variant: "outlined",
              fullWidth: !0,
              startIcon: /* @__PURE__ */ t(St, {}),
              onClick: T,
              children: "Logout"
            }
          ) })
        ]
      }
    )
  }
), $r = 100, mt = 264, xt = 72, wt = "lumora:sidebar-collapsed", je = "width 200ms ease, left 200ms ease", Fo = ({
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
  sidebarBackgroundColor: A,
  groupAccentColor: g,
  activeSidebarForegroundColor: O,
  enableRefreshToken: S = !1,
  activePath: x,
  onLinkClick: K,
  userName: U,
  userEmail: H,
  userAvatar: f,
  onLogout: p,
  onProfileClick: D,
  onAccountClick: v,
  onSettingsClick: J,
  showSettings: G = !0,
  showNotifications: I = !0,
  notificationCount: F = 0,
  NotificationSidebarContent: h,
  showSearchbar: W = !0,
  searchValue: E,
  onSearchChange: ie,
  onSearchSubmit: Y,
  showProfile: Ee = !0,
  userRole: pe,
  onVerify: re,
  alertProps: q,
  style: se,
  headerStyles: le,
  sidebarStyles: oe,
  contentStyles: fe,
  accentColor: n,
  contentBackgroundColor: w,
  navbarBackground: P,
  navbarAccentColor: M,
  theme: $ = "light",
  showThemeToggler: u = !1,
  onThemeToggle: Ie,
  GlobalChatSidebar: ge,
  useChatSidebar: Nt,
  rightExtraContent: kt,
  customNavbar: Ve,
  customNavbarProps: Lt,
  redirectToLogin: Oe,
  apiBaseUrl: Ze
}) => {
  const Wt = Jt(), Q = Yt(Wt.breakpoints.down("md")), et = dt(
    () => bt(yr($)),
    [$]
  ), De = $ === "dark", me = n ?? "#01584f", Ae = w ?? (De ? "hsl(220, 35%, 9%)" : "#f2f9fc"), Mt = P ?? (De ? "hsl(220, 30%, 7%)" : "#ffffff"), zt = M ?? (De ? "#ffffff" : "#000000"), ye = T === "collapsible", Ft = y ?? /* @__PURE__ */ t(
    ce,
    {
      role: "img",
      "aria-label": `${a} logo`,
      sx: {
        width: 28,
        height: 28,
        flexShrink: 0,
        // Accent in light mode; a legible light fill in dark mode.
        bgcolor: De ? "#ffffff" : me,
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
  ), [ze, Bt] = we(
    () => Ot(wt) ?? !1
  ), Kt = (ve) => {
    Bt(ve), Dt(wt, ve);
  };
  let Z = 0;
  i && !Q && (ye ? Z = ze ? xt : mt : Z = $r);
  const [tt, Fe] = we(!1), [Ut, _e] = we(!1), [Ht, $t] = we(!0), [Gt, Pt] = we(!1), [Gr, Ne] = we(null), rt = Nt?.()?.isOpen ?? !1, Be = ht(re), ot = ht(!1), nt = dt(
    () => Tr(Ze),
    [Ze]
  );
  He(() => {
    Be.current = re;
  }, [re]);
  const jt = () => {
    Fe(!tt);
  }, Xt = () => {
    Fe(!1);
  }, at = (ve) => {
    const xe = p(ve);
    xe instanceof Promise ? xe.then(() => {
      Ne(null);
    }).catch((it) => {
      console.error("Error in logout handler:", it), Ne(null);
    }) : Ne(null);
  };
  return He(() => {
    (() => {
      try {
        const { isAuthenticated: xe, error: it } = Rr();
        if (!xe) {
          console.log("No session found, redirecting to login"), Te(), Oe();
          return;
        }
        if (!ot.current) {
          const { user: Re, error: Ke } = Cr();
          if (Re && !Ke) {
            const st = {
              name: Re.name || "",
              email: Re.email || "",
              profilePicture: Re.profilePicture || "",
              role: Re.role || ""
            };
            Ne(st), ot.current = !0, Be.current && Be.current(st);
          } else Ke && console.error("Error getting user data:", Ke);
        }
        Pt(!0);
      } catch (xe) {
        console.error("Error checking session:", xe), Te(), Oe();
      } finally {
        $t(!1);
      }
    })();
  }, [Oe]), He(() => {
    S && Ir(nt, Oe);
  }, [S, nt]), Ht ? /* @__PURE__ */ t(ct, { theme: et, children: /* @__PURE__ */ d(
    ce,
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
          qt,
          {
            size: 60,
            thickness: 4,
            sx: { color: me }
          }
        ),
        /* @__PURE__ */ t(ce, { sx: { mt: 2, color: "text.secondary" }, children: "Checking session..." })
      ]
    }
  ) }) : Gt ? /* @__PURE__ */ t(ct, { theme: et, children: /* @__PURE__ */ d(
    ce,
    {
      sx: {
        display: "flex",
        minHeight: "100vh",
        ...se
      },
      children: [
        /* @__PURE__ */ t(Qt, {}),
        c && /* @__PURE__ */ t(
          Dr,
          {
            appName: a,
            pageName: l,
            onMenuClick: Q && i ? jt : void 0,
            showMenuButton: Q && i,
            showBrand: !(ye && !Q),
            headerStyles: ye && !Q && i ? {
              left: `${Z}px`,
              width: `calc(100% - ${Z}px)`,
              transition: je,
              ...le
            } : le,
            userName: U,
            userEmail: H,
            userAvatar: f,
            onProfileClick: D,
            onAccountClick: v,
            onSettingsClick: J,
            showSettings: G,
            onLogout: at,
            showNotifications: I,
            notificationCount: F,
            onNotificationBellClick: I && h ? () => _e(!0) : void 0,
            showSearchbar: W && !Ve,
            searchValue: E,
            onSearchChange: ie,
            onSearchSubmit: Y,
            showProfile: Ee,
            userRole: pe,
            accentColor: me,
            contentBackgroundColor: Ae,
            navbarBackground: Mt,
            navbarAccentColor: zt,
            theme: $,
            showThemeToggler: u,
            onThemeToggle: Ie,
            rightExtraContent: kt,
            customNavbar: Ve,
            customNavbarProps: Lt
          }
        ),
        i && !Q && ye && /* @__PURE__ */ d(
          ce,
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
              transition: je,
              ...oe
            },
            children: [
              /* @__PURE__ */ t(
                Mr,
                {
                  mainLinks: r,
                  secondaryLinks: o,
                  activePath: x,
                  onLinkClick: K,
                  logo: Ft,
                  title: a,
                  sectionTitle: m,
                  activeAccentColor: me,
                  groupAccentColor: g,
                  activeForegroundColor: O,
                  surfaceBackgroundColor: A,
                  collapsed: ze,
                  onCollapsedChange: Kt,
                  expandedWidth: mt,
                  collapsedWidth: xt
                }
              ),
              q?.show && !ze && /* @__PURE__ */ t(qe, { ...q })
            ]
          }
        ),
        i && !Q && !ye && /* @__PURE__ */ t(
          lt,
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
              ...oe
            },
            children: /* @__PURE__ */ d(
              ce,
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
                    _t,
                    {
                      variant: "rail",
                      mainLinks: r,
                      secondaryLinks: o,
                      activePath: x,
                      onLinkClick: K,
                      accentColor: me,
                      surfaceBackgroundColor: Ae,
                      railShowTitles: s
                    }
                  ),
                  q?.show && /* @__PURE__ */ t(qe, { ...q })
                ]
              }
            )
          }
        ),
        i && Q && /* @__PURE__ */ t(
          Hr,
          {
            open: tt,
            onClose: Xt,
            mainLinks: r,
            secondaryLinks: o,
            activePath: x,
            onLinkClick: K,
            userName: U,
            userEmail: H,
            userAvatar: f,
            onLogout: at,
            onProfileClick: D,
            showNotifications: I,
            notificationCount: F,
            onNotificationBellClick: I && h ? () => {
              Fe(!1), _e(!0);
            } : void 0,
            alertProps: q,
            accentColor: me
          }
        ),
        /* @__PURE__ */ t(
          ce,
          {
            component: "main",
            sx: {
              flexGrow: 1,
              p: 3,
              width: Q ? "100%" : i ? `calc(100% - ${Z}px)` : "100%",
              transition: je,
              mt: c ? "60px" : 0,
              // Account for AppNavbar height (60px)
              ml: 0,
              // Offset for sidebar on desktop
              backgroundColor: Ae,
              mb: 0,
              mr: 0,
              ...fe
            },
            children: /* @__PURE__ */ d(Ue, { container: !0, spacing: 3, children: [
              /* @__PURE__ */ t(
                Ue,
                {
                  size: {
                    xs: 12,
                    md: rt && ge ? 8.5 : 12
                  },
                  sx: {
                    display: "flex",
                    flexDirection: "column"
                  },
                  children: e
                }
              ),
              rt && ge && /* @__PURE__ */ t(
                Ue,
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
                  children: /* @__PURE__ */ t(ge, {})
                }
              )
            ] })
          }
        ),
        I && h && /* @__PURE__ */ t(
          lt,
          {
            anchor: "right",
            open: Ut,
            onClose: () => _e(!1),
            slotProps: {
              paper: { sx: { width: 380, maxWidth: "100vw" } }
            },
            children: /* @__PURE__ */ t(
              h,
              {
                onClose: () => _e(!1)
              }
            )
          }
        )
      ]
    }
  ) }) : null;
};
export {
  _ as AUTH_ERROR_CODES,
  C as AuthError,
  Mr as CollapsibleSidebar,
  Fo as LumoraWrapper,
  Te as clearAuthTokens,
  Fo as default,
  zo as getAuthErrorMessage,
  Ce as getAuthTokens,
  Cr as getCurrentUser,
  Rr as isAuthenticated,
  Ye as logAuthError,
  Ct as storeAuthTokens
};
