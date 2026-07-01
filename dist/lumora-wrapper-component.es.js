import { jsx as t, jsxs as l, Fragment as We } from "react/jsx-runtime";
import { useTheme as Xt, useMediaQuery as Jt, Box as le, CircularProgress as Yt, CssBaseline as qt, Drawer as st, Grid as Ue } from "@mui/material";
import { createTheme as wt, alpha as j, styled as Qt, useTheme as qe, ThemeProvider as lt } from "@mui/material/styles";
import * as v from "react";
import { useMemo as ct, useState as we, useRef as dt, useEffect as He } from "react";
import ht from "axios";
import pt from "@mui/icons-material/AccountCircleRounded";
import Vt from "@mui/icons-material/DarkMode";
import Zt from "@mui/icons-material/LightMode";
import St from "@mui/icons-material/LogoutRounded";
import er from "@mui/icons-material/MenuRounded";
import tr from "@mui/icons-material/NotificationsOutlined";
import rr from "@mui/icons-material/SearchRounded";
import or from "@mui/material/AppBar";
import je from "@mui/material/Avatar";
import bt from "@mui/material/Badge";
import W from "@mui/material/Box";
import te from "@mui/material/Divider";
import V from "@mui/material/IconButton";
import nr from "@mui/material/InputAdornment";
import ar from "@mui/material/Menu";
import Xe from "@mui/material/MenuItem";
import N from "@mui/material/Stack";
import ir from "@mui/material/TextField";
import sr from "@mui/material/Toolbar";
import pe from "@mui/material/Tooltip";
import X from "@mui/material/Typography";
import lr from "@mui/material/useMediaQuery";
import cr from "@mui/material/Card";
import dr from "@mui/material/CardContent";
import Et from "@mui/material/Button";
import hr from "@mui/icons-material/AutoAwesomeRounded";
import pr from "@mui/icons-material/KeyboardDoubleArrowLeftRounded";
import ur from "@mui/icons-material/KeyboardDoubleArrowRightRounded";
import yt from "@mui/material/Collapse";
import de from "@mui/material/ListItemButton";
import he from "@mui/material/ListItemIcon";
import ne from "@mui/material/ListItemText";
import fr from "@mui/icons-material/ExpandLess";
import mr from "@mui/icons-material/ExpandMore";
import gr from "@mui/material/MenuList";
import xr from "@mui/material/Paper";
import wr from "@mui/material/Popper";
import Sr from "@mui/icons-material/NotificationsRounded";
import br from "@mui/material/Drawer";
const y = wt(), ut = [...y.shadows], F = {
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
}, Se = {
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
}, be = {
  300: "hsl(0, 90%, 65%)",
  400: "hsl(0, 90%, 40%)",
  500: "hsl(0, 90%, 30%)",
  700: "hsl(0, 94%, 18%)",
  800: "hsl(0, 95%, 12%)"
}, Er = (e) => (ut[1] = e === "dark" ? "hsla(220, 30%, 5%, 0.7) 0px 4px 16px 0px, hsla(220, 25%, 10%, 0.8) 0px 8px 16px -5px" : "hsla(220, 30%, 5%, 0.07) 0px 4px 16px 0px, hsla(220, 25%, 10%, 0.07) 0px 8px 16px -5px", {
  palette: {
    mode: e,
    primary: {
      light: F[200],
      main: F[400],
      dark: F[700],
      contrastText: F[50],
      ...e === "dark" && {
        contrastText: F[50],
        light: F[300],
        main: F[400],
        dark: F[700]
      }
    },
    info: {
      light: F[100],
      main: F[300],
      dark: F[600],
      contrastText: k[50],
      ...e === "dark" && {
        contrastText: F[300],
        light: F[500],
        main: F[700],
        dark: F[900]
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
      ...k
    },
    divider: e === "dark" ? j(k[700], 0.6) : j(k[300], 0.4),
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
      warning: ce[400],
      ...e === "dark" && {
        primary: "hsl(0, 0%, 100%)",
        secondary: k[400]
      }
    },
    action: {
      hover: j(k[200], 0.2),
      selected: `${j(k[200], 0.3)}`,
      ...e === "dark" && {
        hover: j(k[600], 0.2),
        selected: j(k[600], 0.3)
      }
    }
  },
  typography: {
    fontFamily: "Inter, sans-serif",
    h1: {
      fontSize: y.typography.pxToRem(48),
      fontWeight: 600,
      lineHeight: 1.2,
      letterSpacing: -0.5
    },
    h2: {
      fontSize: y.typography.pxToRem(36),
      fontWeight: 600,
      lineHeight: 1.2
    },
    h3: {
      fontSize: y.typography.pxToRem(30),
      lineHeight: 1.2
    },
    h4: {
      fontSize: y.typography.pxToRem(24),
      fontWeight: 600,
      lineHeight: 1.5
    },
    h5: {
      fontSize: y.typography.pxToRem(20),
      fontWeight: 600
    },
    h6: {
      fontSize: y.typography.pxToRem(18),
      fontWeight: 600
    },
    subtitle1: {
      fontSize: y.typography.pxToRem(18)
    },
    subtitle2: {
      fontSize: y.typography.pxToRem(14),
      fontWeight: 500
    },
    body1: {
      fontSize: y.typography.pxToRem(14)
    },
    body2: {
      fontSize: y.typography.pxToRem(14),
      fontWeight: 400
    },
    caption: {
      fontSize: y.typography.pxToRem(12),
      fontWeight: 400
    }
  },
  shape: {
    borderRadius: 8
  },
  shadows: ut
});
j(k[300], 0.4), j(k[200], 0.2), `${j(k[200], 0.3)}`, j(k[700], 0.6), j(k[600], 0.2), j(k[600], 0.3);
y.typography.pxToRem(48), y.typography.pxToRem(36), y.typography.pxToRem(30), y.typography.pxToRem(24), y.typography.pxToRem(20), y.typography.pxToRem(18), y.typography.pxToRem(18), y.typography.pxToRem(14), y.typography.pxToRem(14), y.typography.pxToRem(14), y.typography.pxToRem(12);
[
  ...y.shadows.slice(2)
];
class R extends Error {
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
}, M = {
  ACCESS_TOKEN: "lumoraAccessToken",
  REFRESH_TOKEN: "lumoraRefreshToken",
  USER: "lumoraUser"
}, ee = {
  ACCESS_TOKEN: "accessToken",
  REFRESH_TOKEN: "refreshToken",
  USER: "user"
}, yr = () => {
  if (!(typeof window > "u" || !window.localStorage))
    try {
      const e = localStorage.getItem(ee.ACCESS_TOKEN), r = localStorage.getItem(ee.REFRESH_TOKEN), o = localStorage.getItem(ee.USER);
      e && !localStorage.getItem(M.ACCESS_TOKEN) && localStorage.setItem(M.ACCESS_TOKEN, e), r && !localStorage.getItem(M.REFRESH_TOKEN) && localStorage.setItem(M.REFRESH_TOKEN, r), o && !localStorage.getItem(M.USER) && localStorage.setItem(M.USER, o), (e || r || o) && (localStorage.removeItem(ee.ACCESS_TOKEN), localStorage.removeItem(ee.REFRESH_TOKEN), localStorage.removeItem(ee.USER));
    } catch (e) {
      console.warn("Failed to migrate legacy localStorage keys:", e);
    }
}, Pe = (e) => {
  try {
    if (typeof window > "u")
      return console.warn("localStorage access attempted on server side"), null;
    if (!window.localStorage)
      throw new R("localStorage is not available", _.STORAGE_ACCESS_DENIED);
    return window.localStorage.getItem(e);
  } catch (r) {
    throw r.name === "QuotaExceededError" ? (console.error("Storage quota exceeded"), new R(
      "Storage quota exceeded. Please clear browser data.",
      _.STORAGE_ACCESS_DENIED,
      r
    )) : r.name === "SecurityError" ? (console.error("localStorage access denied (private browsing or security settings)"), new R(
      "Access to localStorage is denied. Please check browser settings.",
      _.STORAGE_ACCESS_DENIED,
      r
    )) : (console.error("Unexpected error accessing localStorage:", r.name), new R("Failed to access storage", _.STORAGE_ACCESS_DENIED, r));
  }
}, $e = (e, r) => {
  try {
    if (typeof window > "u")
      return console.warn("localStorage write attempted on server side"), !1;
    if (!window.localStorage)
      throw new R("localStorage is not available", _.STORAGE_ACCESS_DENIED);
    return window.localStorage.setItem(e, r), !0;
  } catch (o) {
    throw o.name === "QuotaExceededError" ? (console.error("Storage quota exceeded"), new R(
      "Storage quota exceeded. Please clear browser data.",
      _.STORAGE_ACCESS_DENIED,
      o
    )) : o.name === "SecurityError" ? (console.error("localStorage write denied (private browsing or security settings)"), new R(
      "Access to localStorage is denied. Please check browser settings.",
      _.STORAGE_ACCESS_DENIED,
      o
    )) : (console.error("Unexpected error writing to localStorage:", o.name), new R("Failed to write to storage", _.STORAGE_ACCESS_DENIED, o));
  }
}, vt = (e) => {
  try {
    return typeof window > "u" ? (console.warn("localStorage removal attempted on server side"), !1) : window.localStorage ? (window.localStorage.removeItem(e), !0) : (console.warn("localStorage is not available"), !1);
  } catch (r) {
    return r.name !== "SecurityError" && console.warn(`Could not remove localStorage key "${e}"`), !1;
  }
}, Ce = () => {
  try {
    yr();
    const e = Pe(M.ACCESS_TOKEN), r = Pe(M.REFRESH_TOKEN), o = Pe(M.USER);
    let a = null;
    if (o)
      try {
        a = JSON.parse(o);
      } catch {
        o && o !== "null" && o !== "undefined" && console.warn("Invalid user data in localStorage, clearing:", o.substring(0, 50)), vt(M.USER);
      }
    return {
      accessToken: e,
      refreshToken: r,
      user: a
    };
  } catch (e) {
    throw e instanceof R ? e : new R("Failed to retrieve authentication tokens", _.UNKNOWN_ERROR, e);
  }
}, vr = () => {
  try {
    const { accessToken: e, refreshToken: r } = Ce();
    return !(e || r) ? {
      isAuthenticated: !1,
      error: new R("No authentication tokens found", _.TOKEN_NOT_FOUND)
    } : {
      isAuthenticated: !0,
      error: null
    };
  } catch (e) {
    return console.error("Authentication check failed:", e), {
      isAuthenticated: !1,
      error: e instanceof R ? e : new R("Authentication check failed", _.UNKNOWN_ERROR, e)
    };
  }
}, Rt = (e, r, o = null) => {
  try {
    if (!e && !r)
      throw new R("At least one token must be provided", _.TOKEN_INVALID);
    return e && $e(M.ACCESS_TOKEN, e), r && $e(M.REFRESH_TOKEN, r), o && $e(M.USER, JSON.stringify(o)), {
      success: !0,
      error: null
    };
  } catch (a) {
    return console.error("Failed to store authentication tokens:", a), {
      success: !1,
      error: a instanceof R ? a : new R("Failed to store tokens", _.UNKNOWN_ERROR, a)
    };
  }
}, Te = () => {
  try {
    return [
      M.ACCESS_TOKEN,
      M.REFRESH_TOKEN,
      M.USER,
      // Also clear legacy keys for complete cleanup
      ee.ACCESS_TOKEN,
      ee.REFRESH_TOKEN,
      ee.USER
    ].map((a) => vt(a)).every((a) => a) || console.warn("Some tokens could not be removed from localStorage"), {
      success: !0,
      error: null
    };
  } catch (e) {
    return console.error("Failed to clear authentication tokens:", e), {
      success: !1,
      error: e instanceof R ? e : new R("Failed to clear tokens", _.LOGOUT_FAILED, e)
    };
  }
}, Rr = () => {
  try {
    const { user: e } = Ce();
    return {
      user: e,
      error: null
    };
  } catch (e) {
    return console.error("Failed to get current user:", e), {
      user: null,
      error: e instanceof R ? e : new R("Failed to retrieve user data", _.UNKNOWN_ERROR, e)
    };
  }
}, Mo = (e) => {
  if (!(e instanceof R))
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
}, Je = (e, r = "Unknown") => {
  const o = {
    context: r,
    message: e.message,
    code: e instanceof R ? e.code : "UNKNOWN",
    timestamp: e instanceof R ? e.timestamp : (/* @__PURE__ */ new Date()).toISOString(),
    stack: e.stack
  };
  e instanceof R && e.originalError && (o.originalError = {
    name: e.originalError.name,
    message: e.originalError.message
  }), console.warn("[Auth Error]", o);
}, Cr = (e) => {
  if (!e)
    throw new Error("API base URL is required to create axios client");
  const r = ht.create({
    baseURL: e,
    headers: {
      "Content-Type": "application/json"
    }
  });
  let o = !1, a = null, c = [];
  const p = (s, i) => {
    c.forEach(({ resolve: C, reject: b }) => {
      s ? b(s) : i && C(i);
    }), c = [];
  };
  return r.interceptors.request.use(
    (s) => {
      const { accessToken: i } = Ce();
      return i && s.headers && (s.headers.Authorization = `Bearer ${i}`), s;
    },
    (s) => Promise.reject(s)
  ), r.interceptors.response.use(
    (s) => s,
    async (s) => {
      const i = s.config, C = s.response?.status, b = i?.url || "", g = b.includes("/auth/refresh");
      if (C !== 401 || i._retry || g)
        return Promise.reject(s);
      i._retry = !0;
      const { refreshToken: D } = Ce();
      if (!D) {
        const m = new Error(
          "No refresh token available for token refresh"
        );
        return Je(m, "AxiosClient - Token Refresh"), Te(), typeof window < "u" && (window.location.href = "/login"), Promise.reject(s);
      }
      if (o && a)
        return new Promise((m, I) => {
          c.push({ resolve: m, reject: I });
        }).then((m) => {
          const {
            accessToken: I,
            refreshToken: S
          } = m;
          if (i.headers && (i.headers.Authorization = `Bearer ${I}`), b.includes("/auth/logout"))
            try {
              if (typeof i.data == "string") {
                const x = JSON.parse(
                  i.data || "{}"
                );
                x.refresh_token = S, i.data = JSON.stringify(x);
              } else i.data && typeof i.data == "object" ? i.data.refresh_token = S : i.data = JSON.stringify({
                refresh_token: S
              });
            } catch {
              i.data = JSON.stringify({
                refresh_token: S
              });
            }
          return r(i);
        }).catch((m) => Promise.reject(m));
      o = !0, a = ht.post(
        `${e}/auth/refresh`,
        {
          refresh_token: D
        }
      );
      try {
        const m = await a, { accessToken: I, refreshToken: S } = m.data;
        if (Rt(I, S, null), p(null, {
          accessToken: I,
          refreshToken: S
        }), i.headers && (i.headers.Authorization = `Bearer ${I}`), b.includes("/auth/logout"))
          try {
            if (typeof i.data == "string") {
              const x = JSON.parse(
                i.data || "{}"
              );
              x.refresh_token = S, i.data = JSON.stringify(x);
            } else i.data && typeof i.data == "object" ? i.data.refresh_token = S : i.data = JSON.stringify({
              refresh_token: S
            });
          } catch {
            i.data = JSON.stringify({
              refresh_token: S
            });
          }
        return r(i);
      } catch (m) {
        return Je(
          m,
          "AxiosClient - Token Refresh Failed"
        ), p(m), Te(), typeof window < "u" && (window.location.href = "/login"), Promise.reject(m);
      } finally {
        o = !1, a = null;
      }
    }
  ), r;
}, Tr = async (e, r) => {
  const { accessToken: o, refreshToken: a } = Ce();
  if (o)
    return !0;
  if (a)
    try {
      const c = await e.post("/auth/refresh", {
        refresh_token: a
      });
      if (c.data.success && c.data.accessToken)
        return Rt(c.data.accessToken, c.data.refreshToken || null, null), !0;
    } catch (c) {
      Je(c, "TokenValidator - Refresh Failed");
    }
  return Te(), r ? r() : window.location.href = "/login", !1;
}, Ir = Qt(sr)({
  width: "100%",
  padding: "8px 16px",
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
  gap: "16px",
  flexShrink: 0
}), Or = ({
  appName: e = "Dashboard",
  pageName: r = "Home",
  onMenuClick: o,
  showMenuButton: a = !0,
  showBrand: c = !0,
  headerStyles: p,
  userName: s = "User Name",
  userEmail: i,
  userAvatar: C,
  onProfileClick: b,
  onAccountClick: g,
  onSettingsClick: D,
  showSettings: m = !0,
  onLogout: I,
  showNotifications: S = !1,
  notificationCount: x = 0,
  onNotificationBellClick: B,
  theme: K = "light",
  showThemeToggler: U = !1,
  onThemeToggle: f,
  showSearchbar: u = !0,
  searchValue: O,
  onSearchChange: E,
  onSearchSubmit: J,
  showProfile: $ = !0,
  userRole: T,
  accentColor: z = "#01584f",
  contentBackgroundColor: d = "#f2f9fc",
  navbarBackground: L = "#ff0000",
  navbarAccentColor: A = "#000000",
  rightExtraContent: ae = [],
  customNavbar: Y,
  customNavbarProps: Ee
}) => {
  const ue = lr((h) => h.breakpoints.up("md")), [re, q] = v.useState(null), ie = !!re, se = K === "dark", oe = se ? "Switch to light mode" : "Switch to dark mode", fe = (h) => {
    E?.(h.target.value);
  }, n = (h) => {
    h.key === "Enter" && J && O && J(O);
  }, w = (h) => h ? h.charAt(0).toUpperCase() + h.slice(1).toLowerCase() : "User", G = (h) => {
    q(h.currentTarget);
  }, H = () => {
    q(null);
  }, P = (h) => {
    h?.(), H();
  };
  return /* @__PURE__ */ t(
    or,
    {
      position: "fixed",
      sx: {
        boxShadow: 0,
        background: L,
        top: "var(--template-frame-height, 0px)",
        left: 0,
        width: "100%",
        zIndex: 1,
        height: "60px",
        ...p
      },
      children: /* @__PURE__ */ l(Ir, { variant: "dense", sx: { height: "100%" }, children: [
        /* @__PURE__ */ l(
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
              a && !ue && /* @__PURE__ */ t(
                V,
                {
                  "aria-label": "menu",
                  onClick: o,
                  sx: {
                    color: A,
                    "&:hover": {
                      backgroundColor: "action.hover"
                    }
                  },
                  children: /* @__PURE__ */ t(er, {})
                }
              ),
              c && /* @__PURE__ */ l(
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
                      X,
                      {
                        variant: "h6",
                        sx: {
                          color: A,
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
              Y ? /* @__PURE__ */ t(Y, { ...Ee || {} }) : u && ue && /* @__PURE__ */ t(
                ir,
                {
                  placeholder: "Search for deals or documents...",
                  value: O || "",
                  onChange: fe,
                  onKeyDown: n,
                  size: "small",
                  sx: {
                    width: "400px",
                    "& .MuiOutlinedInput-root": {
                      backgroundColor: d,
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
                    startAdornment: /* @__PURE__ */ t(nr, { position: "start", children: /* @__PURE__ */ t(
                      rr,
                      {
                        sx: {
                          color: A
                        }
                      }
                    ) })
                  }
                }
              )
            ]
          }
        ),
        /* @__PURE__ */ l(
          N,
          {
            direction: "row",
            sx: {
              alignItems: "center",
              gap: 1.5,
              flexShrink: 0
            },
            children: [
              U && /* @__PURE__ */ t(pe, { title: oe, placement: "bottom", children: /* @__PURE__ */ t("span", { children: /* @__PURE__ */ t(
                V,
                {
                  size: "small",
                  onClick: f,
                  disabled: !f,
                  "aria-label": oe,
                  sx: {
                    color: A,
                    "&:hover": {
                      backgroundColor: "action.hover"
                    }
                  },
                  children: se ? /* @__PURE__ */ t(Zt, { fontSize: "small" }) : /* @__PURE__ */ t(Vt, { fontSize: "small" })
                }
              ) }) }),
              S && /* @__PURE__ */ t(
                bt,
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
                      onClick: B,
                      "aria-label": x ? `Notifications, ${x} unread` : "Notifications",
                      sx: { color: A },
                      children: /* @__PURE__ */ t(tr, {})
                    }
                  )
                }
              ),
              S && $ && /* @__PURE__ */ t(
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
              $ && /* @__PURE__ */ l(We, { children: [
                /* @__PURE__ */ l(
                  N,
                  {
                    direction: "row",
                    onClick: G,
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
                      C ? /* @__PURE__ */ t(
                        je,
                        {
                          src: C,
                          sx: { width: 32, height: 32 }
                        }
                      ) : /* @__PURE__ */ t(
                        pt,
                        {
                          sx: {
                            width: 32,
                            height: 32,
                            color: A
                          }
                        }
                      ),
                      /* @__PURE__ */ l(
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
                              X,
                              {
                                variant: "body2",
                                sx: {
                                  color: A,
                                  fontWeight: 500,
                                  lineHeight: 1.2,
                                  overflow: "hidden",
                                  textOverflow: "ellipsis",
                                  whiteSpace: "nowrap",
                                  maxWidth: "150px"
                                },
                                children: s
                              }
                            ),
                            /* @__PURE__ */ t(
                              X,
                              {
                                variant: "caption",
                                sx: {
                                  color: A,
                                  lineHeight: 1.2,
                                  overflow: "hidden",
                                  textOverflow: "ellipsis",
                                  whiteSpace: "nowrap",
                                  maxWidth: "150px"
                                },
                                children: w(T)
                              }
                            )
                          ]
                        }
                      )
                    ]
                  }
                ),
                /* @__PURE__ */ l(
                  ar,
                  {
                    anchorEl: re,
                    open: ie,
                    onClose: H,
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
                      m && [
                        /* @__PURE__ */ t(
                          Xe,
                          {
                            onClick: () => P(D),
                            children: "Settings"
                          },
                          "settings"
                        ),
                        /* @__PURE__ */ t(te, {}, "settings-divider")
                      ],
                      /* @__PURE__ */ l(
                        Xe,
                        {
                          onClick: () => P(I),
                          sx: {
                            color: "error.main",
                            "&:hover": {
                              color: "error.dark"
                            }
                          },
                          children: [
                            /* @__PURE__ */ t(X, { sx: { flexGrow: 1 }, children: "Logout" }),
                            /* @__PURE__ */ t(St, { fontSize: "small" })
                          ]
                        }
                      )
                    ]
                  }
                )
              ] }),
              ae.length !== 0 && ae.map((h) => h.type === "divider" ? /* @__PURE__ */ t(
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
                h.key
              ) : h.type === "profile" ? /* @__PURE__ */ t(
                pe,
                {
                  title: h.tooltip || "",
                  disableHoverListener: !h.tooltip,
                  arrow: !0,
                  children: /* @__PURE__ */ l(
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
                          je,
                          {
                            src: h.avatar,
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
                              color: A
                            }
                          }
                        ),
                        /* @__PURE__ */ l(
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
                                X,
                                {
                                  variant: "body2",
                                  sx: {
                                    color: A,
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
                                X,
                                {
                                  variant: "caption",
                                  sx: {
                                    color: A,
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
}, Ye = ({
  title: e = "",
  message: r = "",
  buttonText: o = "",
  onButtonClick: a,
  show: c = !0
}) => c ? /* @__PURE__ */ t(cr, { variant: "outlined", sx: { m: 1.5, flexShrink: 0 }, children: /* @__PURE__ */ l(dr, { children: [
  /* @__PURE__ */ t(hr, { fontSize: "small" }),
  /* @__PURE__ */ t(X, { gutterBottom: !0, sx: { fontWeight: 600 }, children: e }),
  /* @__PURE__ */ t(
    X,
    {
      variant: "body2",
      sx: { mb: 2, color: "text.secondary" },
      children: r
    }
  ),
  /* @__PURE__ */ t(
    Et,
    {
      variant: "contained",
      size: "small",
      fullWidth: !0,
      onClick: a,
      children: o
    }
  )
] }) }) : null, Le = (e, r) => r ? e.path && r === e.path ? !0 : e.subitems?.some((o) => o.path === r) ?? !1 : !1, Me = (e, r) => !!(r && e.path === r), Dr = (e) => {
  const r = Ct(e);
  if (!r)
    return "#ffffff";
  const [o, a, c] = r.map((s) => {
    const i = s / 255;
    return i <= 0.03928 ? i / 12.92 : ((i + 0.055) / 1.055) ** 2.4;
  });
  return 0.2126 * o + 0.7152 * a + 0.0722 * c > 0.5 ? "#0b1f1c" : "#ffffff";
}, Ar = (e) => {
  const r = Ct(e);
  if (!r)
    return "rgba(1, 88, 79, 0.12)";
  const [o, a, c] = r;
  return `rgba(${o}, ${a}, ${c}, 0.14)`;
}, Ct = (e) => {
  let r = e.trim().replace(/^#/, "");
  if (r.length === 3 && (r = r.split("").map((a) => a + a).join("")), r.length !== 6 || /[^0-9a-fA-F]/.test(r))
    return null;
  const o = parseInt(r, 16);
  return [o >> 16 & 255, o >> 8 & 255, o & 255];
}, Tt = () => typeof window < "u" && !!window.localStorage, It = (e) => {
  if (!Tt())
    return null;
  try {
    const r = window.localStorage.getItem(e);
    return r === null ? null : r === "true";
  } catch (r) {
    return console.warn("Failed to read sidebar collapsed state:", r), null;
  }
}, Ot = (e, r) => {
  if (Tt())
    try {
      window.localStorage.setItem(e, r ? "true" : "false");
    } catch (o) {
      console.warn("Failed to persist sidebar collapsed state:", o);
    }
}, _r = 264, Nr = 72, kr = "lumora:sidebar-collapsed", Wr = "width 200ms ease", Lr = ({
  mainLinks: e,
  secondaryLinks: r = [],
  activePath: o,
  onLinkClick: a,
  logo: c,
  title: p,
  sectionTitle: s,
  activeAccentColor: i = "#01584f",
  groupAccentColor: C,
  activeForegroundColor: b,
  surfaceBackgroundColor: g,
  collapsed: D,
  defaultCollapsed: m = !1,
  onCollapsedChange: I,
  persistKey: S = kr,
  expandedWidth: x = _r,
  collapsedWidth: B = Nr
}) => {
  const K = qe(), U = K.palette.mode === "dark", f = D !== void 0, [u, O] = v.useState(
    () => It(S) ?? m
  ), E = f ? !!D : u, [J, $] = v.useState(
    {}
  ), T = i, z = b ?? Dr(T), d = C ?? Ar(T), L = g ?? (U ? K.palette.background.paper : "#ffffff"), A = U ? "text.primary" : T, ae = (n) => {
    f || (O(n), Ot(S, n)), I?.(n);
  }, Y = (n) => {
    a?.(n);
  }, Ee = (n) => {
    $((w) => ({ ...w, [n]: !w[n] }));
  }, ue = (n) => {
    const w = !!(n.path && o === n.path);
    return /* @__PURE__ */ l(
      de,
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
          color: w ? z : "text.primary",
          bgcolor: w ? T : "transparent",
          "& .MuiListItemIcon-root": {
            color: w ? z : A,
            minWidth: 36
          },
          "&:hover": {
            bgcolor: w ? T : d
          },
          "&.Mui-selected, &.Mui-selected:hover": {
            bgcolor: T
          }
        },
        children: [
          /* @__PURE__ */ t(he, { children: n.icon }),
          /* @__PURE__ */ t(
            ne,
            {
              primary: n.text,
              primaryTypographyProps: { noWrap: !0 }
            }
          )
        ]
      },
      n.text
    );
  }, re = (n) => {
    const w = Le(n, o), G = !!(n.path && o === n.path), H = w || !!J[n.text];
    return /* @__PURE__ */ l(W, { "data-testid": `sidebar-group-${n.text}`, children: [
      /* @__PURE__ */ l(
        de,
        {
          onClick: () => n.path ? Y(n.path) : Ee(n.text),
          "data-testid": `sidebar-item-${n.text}`,
          "data-active": G ? "true" : "false",
          sx: {
            borderRadius: "6px",
            py: 1,
            px: 1.5,
            color: G ? z : "text.primary",
            bgcolor: G ? T : "transparent",
            "& .MuiListItemIcon-root": {
              color: G ? z : A,
              minWidth: 36
            },
            "&:hover": {
              bgcolor: G ? T : d
            }
          },
          children: [
            /* @__PURE__ */ t(he, { children: n.icon }),
            /* @__PURE__ */ t(
              ne,
              {
                primary: n.text,
                primaryTypographyProps: { noWrap: !0 }
              }
            )
          ]
        }
      ),
      /* @__PURE__ */ t(yt, { in: H, timeout: "auto", unmountOnExit: !0, children: /* @__PURE__ */ t(
        W,
        {
          "data-testid": `sidebar-children-${n.text}`,
          sx: {
            mt: 0.5,
            borderRadius: "6px",
            bgcolor: d,
            py: 0.5
          },
          children: n.subitems.map((P) => q(P))
        }
      ) })
    ] }, n.text);
  }, q = (n) => {
    const w = Me(n, o);
    return /* @__PURE__ */ l(
      de,
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
          color: w ? z : "text.primary",
          bgcolor: w ? T : "transparent",
          "& .MuiListItemIcon-root": {
            color: w ? z : A,
            minWidth: 32
          },
          "&:hover": {
            bgcolor: w ? T : "action.hover"
          },
          "&.Mui-selected, &.Mui-selected:hover": {
            bgcolor: T
          }
        },
        children: [
          n.icon ? /* @__PURE__ */ t(he, { children: n.icon }) : null,
          /* @__PURE__ */ t(
            ne,
            {
              primary: n.text,
              primaryTypographyProps: { noWrap: !0 }
            }
          )
        ]
      },
      n.path
    );
  }, ie = (n, w, G, H, P, h) => {
    const Ie = !P, me = /* @__PURE__ */ t(
      V,
      {
        "aria-label": w,
        disabled: Ie,
        onClick: P,
        "data-testid": h?.testId ?? `sidebar-item-${w}`,
        "data-active": H ? "true" : "false",
        sx: {
          width: 44,
          height: 44,
          color: H ? z : A,
          bgcolor: H ? T : "transparent",
          borderRadius: H ? "8px" : "50%",
          "&:hover": {
            bgcolor: H ? T : h?.insideGroup ? "action.hover" : d,
            borderRadius: "8px"
          }
        },
        children: G
      }
    );
    return /* @__PURE__ */ t(pe, { title: w, placement: "right", arrow: !0, children: Ie ? /* @__PURE__ */ t("span", { children: me }) : me }, n);
  }, se = (n) => {
    const w = !!n.subitems?.length, G = Le(n, o);
    if (w && G) {
      const P = !!(n.path && o === n.path);
      return /* @__PURE__ */ l(
        W,
        {
          "data-testid": `sidebar-group-${n.text}`,
          sx: {
            width: "100%",
            borderRadius: "10px",
            bgcolor: d,
            py: 0.5,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 0.5
          },
          children: [
            ie(
              n.text,
              n.text,
              n.icon,
              P,
              n.path ? () => Y(n.path) : void 0,
              { insideGroup: !0 }
            ),
            n.subitems.map(
              (h) => ie(
                h.path,
                h.text,
                h.icon ?? n.icon,
                Me(h, o),
                () => Y(h.path),
                {
                  insideGroup: !0,
                  testId: `sidebar-subitem-${h.text}`
                }
              )
            )
          ]
        },
        n.text
      );
    }
    const H = n.path ? () => Y(n.path) : w ? () => ae(!1) : void 0;
    return ie(
      n.text,
      n.text,
      n.icon,
      !!(n.path && o === n.path),
      H
    );
  }, oe = (n) => E ? se(n) : n.subitems?.length ? re(n) : ue(n), fe = E ? B : x;
  return /* @__PURE__ */ l(
    W,
    {
      component: "nav",
      "aria-label": "Main sidebar",
      "data-testid": "collapsible-sidebar",
      "data-collapsed": E ? "true" : "false",
      sx: {
        width: fe,
        minWidth: fe,
        height: "100%",
        boxSizing: "border-box",
        bgcolor: L,
        display: "flex",
        flexDirection: "column",
        overflowX: "hidden",
        overflowY: "auto",
        transition: Wr,
        px: E ? 1 : 2,
        py: 2
      },
      children: [
        /* @__PURE__ */ l(
          N,
          {
            direction: "row",
            alignItems: "center",
            justifyContent: E ? "center" : "flex-start",
            spacing: 1.5,
            sx: { minHeight: 40, px: E ? 0 : 0.5 },
            children: [
              !E && p ? /* @__PURE__ */ t(
                X,
                {
                  "data-testid": "sidebar-title",
                  variant: "h6",
                  sx: {
                    fontWeight: 700,
                    fontSize: "20px",
                    lineHeight: 1,
                    textTransform: "uppercase",
                    color: A,
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    textOverflow: "ellipsis"
                  },
                  children: p
                }
              ) : null,
              c ? /* @__PURE__ */ t(
                W,
                {
                  "data-testid": "sidebar-logo",
                  sx: {
                    display: "flex",
                    alignItems: "center",
                    flexShrink: 0,
                    color: A,
                    "& svg": { color: "inherit", fill: "currentColor" }
                  },
                  children: c
                }
              ) : null
            ]
          }
        ),
        /* @__PURE__ */ l(
          N,
          {
            direction: "row",
            alignItems: "center",
            justifyContent: E ? "center" : "space-between",
            sx: { mt: 2, mb: 1, minHeight: 32 },
            children: [
              !E && s ? /* @__PURE__ */ t(
                X,
                {
                  "data-testid": "sidebar-section-title",
                  variant: "caption",
                  sx: {
                    px: 0.5,
                    fontWeight: 600,
                    letterSpacing: "0.06em",
                    textTransform: "uppercase",
                    color: "text.primary"
                  },
                  children: s
                }
              ) : null,
              /* @__PURE__ */ t(
                pe,
                {
                  title: E ? "Expand sidebar" : "Collapse sidebar",
                  placement: "right",
                  arrow: !0,
                  children: /* @__PURE__ */ t(
                    V,
                    {
                      size: "small",
                      "aria-label": E ? "Expand sidebar" : "Collapse sidebar",
                      "data-testid": "sidebar-toggle",
                      onClick: () => ae(!E),
                      sx: { color: A },
                      children: E ? /* @__PURE__ */ t(ur, { fontSize: "small" }) : /* @__PURE__ */ t(pr, { fontSize: "small" })
                    }
                  )
                }
              )
            ]
          }
        ),
        /* @__PURE__ */ t(N, { spacing: 0.5, sx: { width: "100%" }, children: e.map((n) => oe(n)) }),
        r.length > 0 ? /* @__PURE__ */ l(W, { sx: { mt: "auto", pt: 2 }, children: [
          /* @__PURE__ */ t(te, { sx: { mb: 1, borderColor: "divider" } }),
          /* @__PURE__ */ t(N, { spacing: 0.5, sx: { width: "100%" }, children: r.map((n) => oe(n)) })
        ] }) : null
      ]
    }
  );
}, Mr = 180, ft = 250, Dt = ({
  text: e,
  testId: r
}) => {
  const o = v.useRef(null), [a, c] = v.useState(!1), p = v.useCallback(() => {
    const s = o.current;
    s && c(s.scrollWidth > s.clientWidth + 0.5);
  }, []);
  return v.useLayoutEffect(() => {
    p();
  }, [p, e]), v.useEffect(() => {
    const s = o.current;
    if (!s)
      return;
    const i = new ResizeObserver(() => p());
    return i.observe(s), () => i.disconnect();
  }, [p]), /* @__PURE__ */ t(
    pe,
    {
      title: e,
      placement: "right",
      arrow: !0,
      enterDelay: 400,
      disableHoverListener: !a,
      disableFocusListener: !a,
      disableTouchListener: !a,
      children: /* @__PURE__ */ t(
        X,
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
}, zr = ({
  link: e,
  activePath: r,
  onLinkClick: o,
  accentColor: a,
  isSecondary: c,
  surfaceBackgroundColor: p,
  railShowTitles: s = !1
}) => {
  const i = qe(), [C, b] = v.useState(null), [g, D] = v.useState(!1), m = v.useRef(
    null
  ), I = v.useRef(null), S = v.useRef(null), x = v.useRef(!1), B = v.useRef(!1), K = v.useId(), U = () => {
    m.current && (clearTimeout(m.current), m.current = null);
  }, f = () => {
    U(), m.current = setTimeout(() => {
      D(!1), m.current = null;
    }, Mr);
  }, u = () => {
    U(), D(!0);
  };
  v.useEffect(() => {
    if (!g)
      return;
    const d = (L) => {
      L.key === "Escape" && (D(!1), S.current?.focus());
    };
    return document.addEventListener("keydown", d), () => document.removeEventListener("keydown", d);
  }, [g]), v.useEffect(() => {
    if (!g || !B.current)
      return;
    const d = globalThis.requestAnimationFrame(() => {
      I.current?.querySelector(
        '[role="menuitem"]'
      )?.focus(), B.current = !1;
    });
    return () => cancelAnimationFrame(d);
  }, [g]);
  const O = Le(e, r), E = c ? 48 : 44, J = c ? "text.secondary" : a, $ = c ? "#01584F" : a, T = {
    width: "100%",
    maxWidth: "100%",
    minWidth: E,
    height: "auto",
    minHeight: E,
    flexDirection: "column",
    py: 0.5,
    // Horizontal padding so labels (esp. active fill) do not touch the box edges
    px: 1,
    borderRadius: "4px",
    color: O ? "#ffffff" : J,
    backgroundColor: O ? $ : "transparent",
    "&:hover": {
      backgroundColor: O ? $ : "action.hover",
      borderRadius: "4px",
      color: O ? "#ffffff" : J
    }
  }, z = s ? /* @__PURE__ */ t(
    V,
    {
      ref: S,
      component: e.path ? "a" : "button",
      href: e.path || void 0,
      "aria-label": e.text,
      onFocus: () => {
        x.current || u();
      },
      onBlur: (d) => {
        const L = d.relatedTarget;
        L && I.current?.contains(L) || f();
      },
      onKeyDown: (d) => {
        d.key === "ArrowDown" && (d.preventDefault(), B.current = !0, u());
      },
      onClick: (d) => {
        d.preventDefault(), d.stopPropagation(), e.path && o?.(e.path);
      },
      "aria-haspopup": "menu",
      "aria-expanded": g,
      "aria-controls": g ? K : void 0,
      "data-testid": `rail-submenu-trigger-${e.text}`,
      sx: T,
      children: /* @__PURE__ */ l(N, { alignItems: "center", spacing: 1, sx: { width: "100%" }, children: [
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
          Dt,
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
        x.current || u();
      },
      onBlur: (d) => {
        const L = d.relatedTarget;
        L && I.current?.contains(L) || f();
      },
      onKeyDown: (d) => {
        d.key === "ArrowDown" && (d.preventDefault(), B.current = !0, u());
      },
      onClick: (d) => {
        d.preventDefault(), d.stopPropagation(), e.path && o?.(e.path);
      },
      "aria-haspopup": "menu",
      "aria-expanded": g,
      "aria-controls": g ? K : void 0,
      "data-testid": `rail-submenu-trigger-${e.text}`,
      sx: {
        width: E,
        height: E,
        color: O ? "#ffffff" : J,
        backgroundColor: O ? $ : "transparent",
        borderRadius: O ? "4px" : "50%",
        "&:hover": {
          backgroundColor: O ? $ : "action.hover",
          borderRadius: "4px"
        }
      },
      children: e.icon
    }
  );
  return /* @__PURE__ */ l(
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
            ref: b,
            "data-testid": `rail-submenu-anchor-${e.text}`,
            sx: { display: "inline-flex", maxWidth: "100%" },
            onMouseEnter: () => {
              x.current = !0, u();
            },
            onMouseLeave: () => {
              x.current = !1, f();
            },
            children: s ? z : /* @__PURE__ */ t(pe, { title: e.text, placement: "right", arrow: !0, children: z })
          }
        ),
        /* @__PURE__ */ t(
          wr,
          {
            open: g && !!C,
            anchorEl: C,
            placement: "right-start",
            modifiers: [{ name: "offset", options: { offset: [8, 0] } }],
            sx: { zIndex: (d) => d.zIndex.modal },
            children: /* @__PURE__ */ t(
              xr,
              {
                ref: I,
                elevation: 0,
                onMouseEnter: () => {
                  U();
                },
                onMouseLeave: f,
                "data-testid": `rail-submenu-panel-${e.text}`,
                sx: {
                  bgcolor: p,
                  backgroundImage: "none",
                  borderRadius: "4px",
                  border: "1px solid",
                  borderColor: "divider",
                  boxShadow: i.shadows[8],
                  maxWidth: ft,
                  minWidth: 0,
                  py: 0.5,
                  boxSizing: "border-box"
                },
                children: /* @__PURE__ */ t(
                  gr,
                  {
                    id: K,
                    dense: !0,
                    autoFocus: !1,
                    role: "menu",
                    sx: {
                      bgcolor: "transparent",
                      py: 0,
                      maxWidth: ft
                    },
                    children: e.subitems.map((d) => /* @__PURE__ */ l(
                      Xe,
                      {
                        role: "menuitem",
                        title: d.text,
                        selected: Me(d, r),
                        onClick: (L) => {
                          L.preventDefault(), o?.(d.path), D(!1);
                        },
                        sx: {
                          borderRadius: "4px",
                          mx: 0.5,
                          my: 0.125,
                          maxWidth: "100%",
                          overflow: "hidden",
                          color: c ? "text.secondary" : a,
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
                          d.icon ? /* @__PURE__ */ t(he, { children: d.icon }) : null,
                          /* @__PURE__ */ t(
                            ne,
                            {
                              primary: d.text,
                              primaryTypographyProps: {
                                noWrap: !0
                              }
                            }
                          )
                        ]
                      },
                      d.path
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
}, Fr = ({
  link: e,
  activePath: r,
  onLinkClick: o,
  accentColor: a,
  isSecondary: c,
  railShowTitles: p = !1
}) => {
  const s = !!(e.path && r === e.path), i = c ? 48 : 44, C = c ? "text.secondary" : a, b = c ? "#01584F" : a, g = {
    width: "100%",
    maxWidth: "100%",
    minWidth: i,
    height: "auto",
    minHeight: i,
    flexDirection: "column",
    py: 0.5,
    px: 1,
    borderRadius: "4px",
    color: s ? "#ffffff" : C,
    backgroundColor: s ? b : "transparent",
    "&:hover": {
      backgroundColor: s ? b : "action.hover",
      borderRadius: "4px",
      color: s ? "#ffffff" : C
    }
  }, D = p ? /* @__PURE__ */ t(
    V,
    {
      component: e.path ? "a" : "button",
      href: e.path || void 0,
      "aria-label": e.text,
      onClick: (m) => {
        m.preventDefault(), m.stopPropagation(), e.path && o?.(e.path);
      },
      disabled: !e.path,
      sx: g,
      children: /* @__PURE__ */ l(N, { alignItems: "center", spacing: 1, sx: { width: "100%" }, children: [
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
          Dt,
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
      onClick: (m) => {
        m.preventDefault(), m.stopPropagation(), e.path && o?.(e.path);
      },
      disabled: !e.path,
      sx: {
        width: i,
        height: i,
        color: s ? "#ffffff" : C,
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
  return p ? D : /* @__PURE__ */ t(pe, { title: e.text, placement: "right", arrow: !0, children: D });
}, Br = ({
  link: e,
  expanded: r,
  onToggle: o,
  activePath: a,
  onLinkClick: c,
  accentColor: p,
  isSecondary: s
}) => {
  const i = Le(e, a), C = s ? "text.secondary" : p, b = s ? "#01584F" : p;
  return /* @__PURE__ */ l(We, { children: [
    /* @__PURE__ */ l(
      de,
      {
        onClick: o,
        sx: {
          py: 1.5,
          px: 2,
          color: i ? "#ffffff" : C,
          bgcolor: i ? b : "transparent",
          "&:hover": {
            bgcolor: i ? b : "action.hover"
          }
        },
        "data-testid": `drawer-expand-trigger-${e.text}`,
        children: [
          /* @__PURE__ */ t(he, { sx: { color: "inherit", minWidth: 40 }, children: e.icon }),
          /* @__PURE__ */ t(ne, { primary: e.text }),
          r ? /* @__PURE__ */ t(fr, {}) : /* @__PURE__ */ t(mr, {})
        ]
      }
    ),
    /* @__PURE__ */ t(yt, { in: r, timeout: "auto", unmountOnExit: !0, children: /* @__PURE__ */ l(W, { component: "nav", "aria-label": e.text, children: [
      e.path ? /* @__PURE__ */ t(
        de,
        {
          sx: { pl: 4, py: 1 },
          onClick: () => e.path && c?.(e.path),
          selected: !!(a && a === e.path),
          "data-testid": `drawer-parent-path-${e.text}`,
          children: /* @__PURE__ */ t(ne, { primary: e.text })
        }
      ) : null,
      e.subitems.map((g) => /* @__PURE__ */ l(
        de,
        {
          sx: { pl: 4, py: 1 },
          onClick: () => c?.(g.path),
          selected: Me(g, a),
          children: [
            g.icon ? /* @__PURE__ */ t(he, { sx: { minWidth: 36 }, children: g.icon }) : null,
            /* @__PURE__ */ t(ne, { primary: g.text })
          ]
        },
        g.path
      ))
    ] }) })
  ] });
}, Kr = ({
  link: e,
  activePath: r,
  onLinkClick: o,
  accentColor: a,
  isSecondary: c
}) => {
  const p = !!(e.path && r === e.path), s = c ? "text.secondary" : a, i = c ? "#01584F" : a;
  return /* @__PURE__ */ l(
    de,
    {
      disabled: !e.path,
      onClick: () => e.path && o?.(e.path),
      sx: {
        py: 1.5,
        px: 2,
        color: p ? "#ffffff" : s,
        bgcolor: p ? i : "transparent",
        "&:hover": {
          bgcolor: p ? i : "action.hover"
        }
      },
      children: [
        /* @__PURE__ */ t(he, { sx: { color: "inherit", minWidth: 40 }, children: e.icon }),
        /* @__PURE__ */ t(ne, { primary: e.text })
      ]
    }
  );
}, ke = () => /* @__PURE__ */ t(
  W,
  {
    sx: {
      width: "100%",
      display: "flex",
      justifyContent: "center"
    },
    children: /* @__PURE__ */ t(te, { sx: { width: "60%", borderColor: "divider" } })
  }
), At = ({
  variant: e,
  mainLinks: r,
  secondaryLinks: o = [],
  activePath: a,
  onLinkClick: c,
  accentColor: p = "#01584f",
  surfaceBackgroundColor: s,
  railShowTitles: i = !1
}) => {
  const C = qe(), b = s ?? C.palette.background.paper, g = (f) => {
    c && c(f);
  }, [D, m] = v.useState({}), [I, S] = v.useState({}), x = (f) => {
    m((u) => ({
      ...u,
      [f]: !u[f]
    }));
  }, B = (f) => {
    S((u) => ({
      ...u,
      [f]: !u[f]
    }));
  }, K = (f, u) => f.subitems?.length ? /* @__PURE__ */ t(
    zr,
    {
      link: f,
      activePath: a,
      onLinkClick: g,
      accentColor: p,
      isSecondary: u,
      surfaceBackgroundColor: b,
      railShowTitles: i
    }
  ) : /* @__PURE__ */ t(
    Fr,
    {
      link: f,
      activePath: a,
      onLinkClick: g,
      accentColor: p,
      isSecondary: u,
      railShowTitles: i
    }
  ), U = (f, u, O) => {
    if (f.subitems?.length) {
      const E = O ? !!I[u] : !!D[u];
      return /* @__PURE__ */ t(
        Br,
        {
          link: f,
          expanded: E,
          onToggle: () => O ? B(u) : x(u),
          activePath: a,
          onLinkClick: g,
          accentColor: p,
          isSecondary: O
        }
      );
    }
    return /* @__PURE__ */ t(
      Kr,
      {
        link: f,
        activePath: a,
        onLinkClick: g,
        accentColor: p,
        isSecondary: O
      }
    );
  };
  return e === "drawer" ? /* @__PURE__ */ l(
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
        /* @__PURE__ */ t(N, { sx: { width: "100%" }, children: r.map((f, u) => /* @__PURE__ */ l(v.Fragment, { children: [
          U(f, u, !1),
          u < r.length - 1 ? /* @__PURE__ */ t(ke, {}) : null
        ] }, u)) }),
        o.length > 0 ? /* @__PURE__ */ l(We, { children: [
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
                te,
                {
                  sx: { width: "60%", borderColor: "divider" }
                }
              )
            }
          ),
          /* @__PURE__ */ t(W, { sx: { mt: "auto", pb: 2 }, children: /* @__PURE__ */ t(N, { sx: { width: "100%" }, children: o.map((f, u) => /* @__PURE__ */ l(v.Fragment, { children: [
            U(f, u, !0),
            u < o.length - 1 ? /* @__PURE__ */ t(ke, {}) : null
          ] }, u)) }) })
        ] }) : null
      ]
    }
  ) : /* @__PURE__ */ l(
    N,
    {
      sx: {
        flexGrow: 1,
        width: "100%",
        boxSizing: "border-box",
        justifyContent: "flex-start",
        alignItems: "center",
        pt: 2,
        gap: i ? 1.25 : 1
      },
      children: [
        r.map((f, u) => /* @__PURE__ */ l(v.Fragment, { children: [
          K(f, !1),
          u < r.length - 1 ? /* @__PURE__ */ t(ke, {}) : null
        ] }, u)),
        o.length > 0 ? /* @__PURE__ */ l(We, { children: [
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
                te,
                {
                  sx: { width: "60%", borderColor: "divider" }
                }
              )
            }
          ),
          /* @__PURE__ */ t(W, { sx: { mt: "auto", pb: 2 }, children: /* @__PURE__ */ t(
            N,
            {
              gap: i ? 1.25 : 1,
              alignItems: "center",
              children: o.map((f, u) => /* @__PURE__ */ l(v.Fragment, { children: [
                K(f, !0),
                u < o.length - 1 ? /* @__PURE__ */ t(ke, {}) : null
              ] }, u))
            }
          ) })
        ] }) : null
      ]
    }
  );
}, Ur = ({
  open: e,
  onClose: r,
  mainLinks: o,
  secondaryLinks: a = [],
  activePath: c,
  onLinkClick: p,
  userName: s = "User Name",
  userAvatar: i,
  onLogout: C,
  showNotifications: b = !1,
  notificationCount: g = 0,
  onNotificationBellClick: D,
  alertProps: m,
  accentColor: I = "#01584f"
}) => /* @__PURE__ */ t(
  br,
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
    children: /* @__PURE__ */ l(
      N,
      {
        sx: {
          maxWidth: "70dvw",
          height: "100%"
        },
        children: [
          /* @__PURE__ */ l(N, { direction: "row", sx: { p: 2, pb: 0, gap: 1 }, children: [
            /* @__PURE__ */ l(
              N,
              {
                direction: "row",
                sx: { gap: 1, alignItems: "center", flexGrow: 1, p: 1 },
                children: [
                  /* @__PURE__ */ t(
                    je,
                    {
                      sizes: "small",
                      alt: s,
                      src: i,
                      sx: { width: 24, height: 24 }
                    }
                  ),
                  /* @__PURE__ */ t(X, { component: "p", variant: "h6", children: s })
                ]
              }
            ),
            b && /* @__PURE__ */ t(
              bt,
              {
                color: "error",
                badgeContent: g,
                invisible: g === 0,
                sx: { "& .MuiBadge-badge": { right: 2, top: 2 } },
                children: /* @__PURE__ */ t(
                  V,
                  {
                    size: "small",
                    onClick: D,
                    "aria-label": "Notifications",
                    children: /* @__PURE__ */ t(Sr, {})
                  }
                )
              }
            )
          ] }),
          /* @__PURE__ */ t(te, {}),
          /* @__PURE__ */ l(N, { sx: { flexGrow: 1 }, children: [
            /* @__PURE__ */ t(
              At,
              {
                variant: "drawer",
                mainLinks: o,
                secondaryLinks: a,
                activePath: c,
                onLinkClick: (x) => {
                  p?.(x), r();
                },
                accentColor: I
              }
            ),
            /* @__PURE__ */ t(te, {})
          ] }),
          m?.show && /* @__PURE__ */ t(Ye, { ...m }),
          /* @__PURE__ */ t(N, { sx: { p: 2 }, children: /* @__PURE__ */ t(
            Et,
            {
              variant: "outlined",
              fullWidth: !0,
              startIcon: /* @__PURE__ */ t(St, {}),
              onClick: C,
              children: "Logout"
            }
          ) })
        ]
      }
    )
  }
), Hr = 100, mt = 264, gt = 72, xt = "lumora:sidebar-collapsed", Ge = "width 200ms ease, left 200ms ease", zo = ({
  children: e,
  sidebarLinks: r = [],
  secondarySidebarLinks: o = [],
  appName: a = "Dashboard",
  pageName: c = "Home",
  showHeader: p = !0,
  showSidebar: s = !0,
  showSidebarRailTitles: i = !1,
  sidebarVariant: C = "rail",
  logo: b,
  sidebarSectionTitle: g,
  sidebarBackgroundColor: D,
  groupAccentColor: m,
  activeSidebarForegroundColor: I,
  enableRefreshToken: S = !1,
  activePath: x,
  onLinkClick: B,
  userName: K,
  userEmail: U,
  userAvatar: f,
  onLogout: u,
  onProfileClick: O,
  onAccountClick: E,
  onSettingsClick: J,
  showSettings: $ = !0,
  showNotifications: T = !0,
  notificationCount: z = 0,
  NotificationSidebarContent: d,
  showSearchbar: L = !0,
  searchValue: A,
  onSearchChange: ae,
  onSearchSubmit: Y,
  showProfile: Ee = !0,
  userRole: ue,
  onVerify: re,
  alertProps: q,
  style: ie,
  headerStyles: se,
  sidebarStyles: oe,
  contentStyles: fe,
  accentColor: n,
  contentBackgroundColor: w,
  navbarBackground: G,
  navbarAccentColor: H,
  theme: P = "light",
  showThemeToggler: h = !1,
  onThemeToggle: Ie,
  GlobalChatSidebar: me,
  useChatSidebar: _t,
  rightExtraContent: Nt,
  customNavbar: Qe,
  customNavbarProps: kt,
  redirectToLogin: Oe,
  apiBaseUrl: Ve
}) => {
  const Wt = Xt(), Q = Jt(Wt.breakpoints.down("md")), Ze = ct(
    () => wt(Er(P)),
    [P]
  ), De = P === "dark", ge = n ?? "#01584f", Ae = w ?? (De ? "hsl(220, 35%, 9%)" : "#f2f9fc"), Lt = G ?? (De ? "hsl(220, 30%, 7%)" : "#ffffff"), Mt = H ?? (De ? "#ffffff" : "#000000"), ye = C === "collapsible", zt = b ?? /* @__PURE__ */ t(
    le,
    {
      role: "img",
      "aria-label": `${a} logo`,
      sx: {
        width: 28,
        height: 28,
        flexShrink: 0,
        // Accent in light mode; a legible light fill in dark mode.
        bgcolor: De ? "#ffffff" : ge,
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
  ), [ze, Ft] = we(
    () => It(xt) ?? !1
  ), Bt = (ve) => {
    Ft(ve), Ot(xt, ve);
  };
  let Z = 0;
  s && !Q && (ye ? Z = ze ? gt : mt : Z = Hr);
  const [et, Fe] = we(!1), [Kt, _e] = we(!1), [Ut, Ht] = we(!0), [Pt, $t] = we(!1), [Pr, Ne] = we(null), tt = _t?.()?.isOpen ?? !1, Be = dt(re), rt = dt(!1), ot = ct(
    () => Cr(Ve),
    [Ve]
  );
  He(() => {
    Be.current = re;
  }, [re]);
  const Gt = () => {
    Fe(!et);
  }, jt = () => {
    Fe(!1);
  }, nt = (ve) => {
    const xe = u(ve);
    xe instanceof Promise ? xe.then(() => {
      Ne(null);
    }).catch((at) => {
      console.error("Error in logout handler:", at), Ne(null);
    }) : Ne(null);
  };
  return He(() => {
    (() => {
      try {
        const { isAuthenticated: xe, error: at } = vr();
        if (!xe) {
          console.log("No session found, redirecting to login"), Te(), Oe();
          return;
        }
        if (!rt.current) {
          const { user: Re, error: Ke } = Rr();
          if (Re && !Ke) {
            const it = {
              name: Re.name || "",
              email: Re.email || "",
              profilePicture: Re.profilePicture || "",
              role: Re.role || ""
            };
            Ne(it), rt.current = !0, Be.current && Be.current(it);
          } else Ke && console.error("Error getting user data:", Ke);
        }
        $t(!0);
      } catch (xe) {
        console.error("Error checking session:", xe), Te(), Oe();
      } finally {
        Ht(!1);
      }
    })();
  }, [Oe]), He(() => {
    S && Tr(ot, Oe);
  }, [S, ot]), Ut ? /* @__PURE__ */ t(lt, { theme: Ze, children: /* @__PURE__ */ l(
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
          Yt,
          {
            size: 60,
            thickness: 4,
            sx: { color: ge }
          }
        ),
        /* @__PURE__ */ t(le, { sx: { mt: 2, color: "text.secondary" }, children: "Checking session..." })
      ]
    }
  ) }) : Pt ? /* @__PURE__ */ t(lt, { theme: Ze, children: /* @__PURE__ */ l(
    le,
    {
      sx: {
        display: "flex",
        minHeight: "100vh",
        ...ie
      },
      children: [
        /* @__PURE__ */ t(qt, {}),
        p && /* @__PURE__ */ t(
          Or,
          {
            appName: a,
            pageName: c,
            onMenuClick: Q && s ? Gt : void 0,
            showMenuButton: Q && s,
            showBrand: !(ye && !Q),
            headerStyles: ye && !Q && s ? {
              left: `${Z}px`,
              width: `calc(100% - ${Z}px)`,
              transition: Ge,
              ...se
            } : se,
            userName: K,
            userEmail: U,
            userAvatar: f,
            onProfileClick: O,
            onAccountClick: E,
            onSettingsClick: J,
            showSettings: $,
            onLogout: nt,
            showNotifications: T,
            notificationCount: z,
            onNotificationBellClick: T && d ? () => _e(!0) : void 0,
            showSearchbar: L && !Qe,
            searchValue: A,
            onSearchChange: ae,
            onSearchSubmit: Y,
            showProfile: Ee,
            userRole: ue,
            accentColor: ge,
            contentBackgroundColor: Ae,
            navbarBackground: Lt,
            navbarAccentColor: Mt,
            theme: P,
            showThemeToggler: h,
            onThemeToggle: Ie,
            rightExtraContent: Nt,
            customNavbar: Qe,
            customNavbarProps: kt
          }
        ),
        s && !Q && ye && /* @__PURE__ */ l(
          le,
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
              transition: Ge,
              ...oe
            },
            children: [
              /* @__PURE__ */ t(
                Lr,
                {
                  mainLinks: r,
                  secondaryLinks: o,
                  activePath: x,
                  onLinkClick: B,
                  logo: zt,
                  title: a,
                  sectionTitle: g,
                  activeAccentColor: ge,
                  groupAccentColor: m,
                  activeForegroundColor: I,
                  surfaceBackgroundColor: D,
                  collapsed: ze,
                  onCollapsedChange: Bt,
                  expandedWidth: mt,
                  collapsedWidth: gt
                }
              ),
              q?.show && !ze && /* @__PURE__ */ t(Ye, { ...q })
            ]
          }
        ),
        s && !Q && !ye && /* @__PURE__ */ t(
          st,
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
                top: p ? "60px" : 0,
                // Position below header
                height: p ? "calc(100vh - 60px)" : "100vh"
              },
              ...oe
            },
            children: /* @__PURE__ */ l(
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
                    At,
                    {
                      variant: "rail",
                      mainLinks: r,
                      secondaryLinks: o,
                      activePath: x,
                      onLinkClick: B,
                      accentColor: ge,
                      surfaceBackgroundColor: Ae,
                      railShowTitles: i
                    }
                  ),
                  q?.show && /* @__PURE__ */ t(Ye, { ...q })
                ]
              }
            )
          }
        ),
        s && Q && /* @__PURE__ */ t(
          Ur,
          {
            open: et,
            onClose: jt,
            mainLinks: r,
            secondaryLinks: o,
            activePath: x,
            onLinkClick: B,
            userName: K,
            userEmail: U,
            userAvatar: f,
            onLogout: nt,
            onProfileClick: O,
            showNotifications: T,
            notificationCount: z,
            onNotificationBellClick: T && d ? () => {
              Fe(!1), _e(!0);
            } : void 0,
            alertProps: q,
            accentColor: ge
          }
        ),
        /* @__PURE__ */ t(
          le,
          {
            component: "main",
            sx: {
              flexGrow: 1,
              p: 3,
              width: Q ? "100%" : s ? `calc(100% - ${Z}px)` : "100%",
              transition: Ge,
              mt: p ? "60px" : 0,
              // Account for AppNavbar height (60px)
              ml: 0,
              // Offset for sidebar on desktop
              backgroundColor: Ae,
              mb: 0,
              mr: 0,
              ...fe
            },
            children: /* @__PURE__ */ l(Ue, { container: !0, spacing: 3, children: [
              /* @__PURE__ */ t(
                Ue,
                {
                  size: {
                    xs: 12,
                    md: tt && me ? 8.5 : 12
                  },
                  sx: {
                    display: "flex",
                    flexDirection: "column"
                  },
                  children: e
                }
              ),
              tt && me && /* @__PURE__ */ t(
                Ue,
                {
                  size: { xs: 12, md: 3.5 },
                  sx: {
                    display: "flex",
                    flexDirection: "column",
                    position: { xs: "static", md: "sticky" },
                    top: {
                      xs: "auto",
                      md: p ? "60px" : "0px"
                    },
                    // Stick below navbar
                    alignSelf: "flex-start",
                    height: {
                      xs: "auto",
                      md: p ? "calc(100vh - 60px - 24px - 8px)" : "calc(100vh - 24px - 8px)"
                    },
                    // Viewport - navbar - top padding - top margin
                    maxHeight: {
                      xs: "none",
                      md: p ? "calc(100vh - 60px - 24px - 8px)" : "calc(100vh - 24px - 8px)"
                    }
                    // Viewport - navbar - top padding - top margin
                  },
                  children: /* @__PURE__ */ t(me, {})
                }
              )
            ] })
          }
        ),
        T && d && /* @__PURE__ */ t(
          st,
          {
            anchor: "right",
            open: Kt,
            onClose: () => _e(!1),
            slotProps: {
              paper: { sx: { width: 380, maxWidth: "100vw" } }
            },
            children: /* @__PURE__ */ t(
              d,
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
  R as AuthError,
  Lr as CollapsibleSidebar,
  zo as LumoraWrapper,
  Te as clearAuthTokens,
  zo as default,
  Mo as getAuthErrorMessage,
  Ce as getAuthTokens,
  Rr as getCurrentUser,
  vr as isAuthenticated,
  Je as logAuthError,
  Rt as storeAuthTokens
};
