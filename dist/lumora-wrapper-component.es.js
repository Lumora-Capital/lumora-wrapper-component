import { jsx as t, jsxs as c, Fragment as _e } from "react/jsx-runtime";
import { useTheme as Xt, useMediaQuery as Jt, Box as se, CircularProgress as Yt, CssBaseline as qt, Drawer as at, Grid as Ke } from "@mui/material";
import { createTheme as gt, alpha as j, styled as Qt, useTheme as xt, ThemeProvider as it } from "@mui/material/styles";
import * as v from "react";
import { useMemo as st, useState as xe, useRef as lt, useEffect as Ue } from "react";
import ct from "axios";
import dt from "@mui/icons-material/AccountCircleRounded";
import Vt from "@mui/icons-material/DarkMode";
import Zt from "@mui/icons-material/LightMode";
import wt from "@mui/icons-material/LogoutRounded";
import er from "@mui/icons-material/MenuRounded";
import tr from "@mui/icons-material/NotificationsOutlined";
import rr from "@mui/icons-material/SearchRounded";
import or from "@mui/material/AppBar";
import Ge from "@mui/material/Avatar";
import St from "@mui/material/Badge";
import W from "@mui/material/Box";
import re from "@mui/material/Divider";
import V from "@mui/material/IconButton";
import nr from "@mui/material/InputAdornment";
import ar from "@mui/material/Menu";
import je from "@mui/material/MenuItem";
import _ from "@mui/material/Stack";
import ir from "@mui/material/TextField";
import sr from "@mui/material/Toolbar";
import he from "@mui/material/Tooltip";
import X from "@mui/material/Typography";
import lr from "@mui/material/useMediaQuery";
import cr from "@mui/material/Card";
import dr from "@mui/material/CardContent";
import bt from "@mui/material/Button";
import hr from "@mui/icons-material/AutoAwesomeRounded";
import pr from "@mui/icons-material/KeyboardDoubleArrowLeftRounded";
import ur from "@mui/icons-material/KeyboardDoubleArrowRightRounded";
import Et from "@mui/material/Collapse";
import ce from "@mui/material/ListItemButton";
import de from "@mui/material/ListItemIcon";
import ae from "@mui/material/ListItemText";
import fr from "@mui/icons-material/ExpandLess";
import mr from "@mui/icons-material/ExpandMore";
import gr from "@mui/material/MenuList";
import xr from "@mui/material/Paper";
import wr from "@mui/material/Popper";
import Sr from "@mui/icons-material/NotificationsRounded";
import br from "@mui/material/Drawer";
const y = gt(), ht = [...y.shadows], F = {
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
}, we = {
  300: "hsl(120, 61%, 77%)",
  400: "hsl(120, 44%, 53%)",
  500: "hsl(120, 59%, 30%)",
  700: "hsl(120, 75%, 16%)",
  800: "hsl(120, 84%, 10%)"
}, le = {
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
}, Er = (e) => (ht[1] = e === "dark" ? "hsla(220, 30%, 5%, 0.7) 0px 4px 16px 0px, hsla(220, 25%, 10%, 0.8) 0px 8px 16px -5px" : "hsla(220, 30%, 5%, 0.07) 0px 4px 16px 0px, hsla(220, 25%, 10%, 0.07) 0px 8px 16px -5px", {
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
      light: le[300],
      main: le[400],
      dark: le[800],
      ...e === "dark" && {
        light: le[400],
        main: le[500],
        dark: le[700]
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
      warning: le[400],
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
  shadows: ht
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
const A = {
  STORAGE_ACCESS_DENIED: "STORAGE_ACCESS_DENIED",
  TOKEN_NOT_FOUND: "TOKEN_NOT_FOUND",
  TOKEN_INVALID: "TOKEN_INVALID",
  TOKEN_EXPIRED: "TOKEN_EXPIRED",
  LOGOUT_FAILED: "LOGOUT_FAILED",
  UNKNOWN_ERROR: "UNKNOWN_ERROR"
}, L = {
  ACCESS_TOKEN: "lumoraAccessToken",
  REFRESH_TOKEN: "lumoraRefreshToken",
  USER: "lumoraUser"
}, te = {
  ACCESS_TOKEN: "accessToken",
  REFRESH_TOKEN: "refreshToken",
  USER: "user"
}, yr = () => {
  if (!(typeof window > "u" || !window.localStorage))
    try {
      const e = localStorage.getItem(te.ACCESS_TOKEN), r = localStorage.getItem(te.REFRESH_TOKEN), o = localStorage.getItem(te.USER);
      e && !localStorage.getItem(L.ACCESS_TOKEN) && localStorage.setItem(L.ACCESS_TOKEN, e), r && !localStorage.getItem(L.REFRESH_TOKEN) && localStorage.setItem(L.REFRESH_TOKEN, r), o && !localStorage.getItem(L.USER) && localStorage.setItem(L.USER, o), (e || r || o) && (localStorage.removeItem(te.ACCESS_TOKEN), localStorage.removeItem(te.REFRESH_TOKEN), localStorage.removeItem(te.USER));
    } catch (e) {
      console.warn("Failed to migrate legacy localStorage keys:", e);
    }
}, He = (e) => {
  try {
    if (typeof window > "u")
      return console.warn("localStorage access attempted on server side"), null;
    if (!window.localStorage)
      throw new R("localStorage is not available", A.STORAGE_ACCESS_DENIED);
    return window.localStorage.getItem(e);
  } catch (r) {
    throw r.name === "QuotaExceededError" ? (console.error("Storage quota exceeded"), new R(
      "Storage quota exceeded. Please clear browser data.",
      A.STORAGE_ACCESS_DENIED,
      r
    )) : r.name === "SecurityError" ? (console.error("localStorage access denied (private browsing or security settings)"), new R(
      "Access to localStorage is denied. Please check browser settings.",
      A.STORAGE_ACCESS_DENIED,
      r
    )) : (console.error("Unexpected error accessing localStorage:", r.name), new R("Failed to access storage", A.STORAGE_ACCESS_DENIED, r));
  }
}, Pe = (e, r) => {
  try {
    if (typeof window > "u")
      return console.warn("localStorage write attempted on server side"), !1;
    if (!window.localStorage)
      throw new R("localStorage is not available", A.STORAGE_ACCESS_DENIED);
    return window.localStorage.setItem(e, r), !0;
  } catch (o) {
    throw o.name === "QuotaExceededError" ? (console.error("Storage quota exceeded"), new R(
      "Storage quota exceeded. Please clear browser data.",
      A.STORAGE_ACCESS_DENIED,
      o
    )) : o.name === "SecurityError" ? (console.error("localStorage write denied (private browsing or security settings)"), new R(
      "Access to localStorage is denied. Please check browser settings.",
      A.STORAGE_ACCESS_DENIED,
      o
    )) : (console.error("Unexpected error writing to localStorage:", o.name), new R("Failed to write to storage", A.STORAGE_ACCESS_DENIED, o));
  }
}, yt = (e) => {
  try {
    return typeof window > "u" ? (console.warn("localStorage removal attempted on server side"), !1) : window.localStorage ? (window.localStorage.removeItem(e), !0) : (console.warn("localStorage is not available"), !1);
  } catch (r) {
    return r.name !== "SecurityError" && console.warn(`Could not remove localStorage key "${e}"`), !1;
  }
}, Re = () => {
  try {
    yr();
    const e = He(L.ACCESS_TOKEN), r = He(L.REFRESH_TOKEN), o = He(L.USER);
    let a = null;
    if (o)
      try {
        a = JSON.parse(o);
      } catch {
        o && o !== "null" && o !== "undefined" && console.warn("Invalid user data in localStorage, clearing:", o.substring(0, 50)), yt(L.USER);
      }
    return {
      accessToken: e,
      refreshToken: r,
      user: a
    };
  } catch (e) {
    throw e instanceof R ? e : new R("Failed to retrieve authentication tokens", A.UNKNOWN_ERROR, e);
  }
}, vr = () => {
  try {
    const { accessToken: e, refreshToken: r } = Re();
    return !(e || r) ? {
      isAuthenticated: !1,
      error: new R("No authentication tokens found", A.TOKEN_NOT_FOUND)
    } : {
      isAuthenticated: !0,
      error: null
    };
  } catch (e) {
    return console.error("Authentication check failed:", e), {
      isAuthenticated: !1,
      error: e instanceof R ? e : new R("Authentication check failed", A.UNKNOWN_ERROR, e)
    };
  }
}, vt = (e, r, o = null) => {
  try {
    if (!e && !r)
      throw new R("At least one token must be provided", A.TOKEN_INVALID);
    return e && Pe(L.ACCESS_TOKEN, e), r && Pe(L.REFRESH_TOKEN, r), o && Pe(L.USER, JSON.stringify(o)), {
      success: !0,
      error: null
    };
  } catch (a) {
    return console.error("Failed to store authentication tokens:", a), {
      success: !1,
      error: a instanceof R ? a : new R("Failed to store tokens", A.UNKNOWN_ERROR, a)
    };
  }
}, Ce = () => {
  try {
    return [
      L.ACCESS_TOKEN,
      L.REFRESH_TOKEN,
      L.USER,
      // Also clear legacy keys for complete cleanup
      te.ACCESS_TOKEN,
      te.REFRESH_TOKEN,
      te.USER
    ].map((a) => yt(a)).every((a) => a) || console.warn("Some tokens could not be removed from localStorage"), {
      success: !0,
      error: null
    };
  } catch (e) {
    return console.error("Failed to clear authentication tokens:", e), {
      success: !1,
      error: e instanceof R ? e : new R("Failed to clear tokens", A.LOGOUT_FAILED, e)
    };
  }
}, Rr = () => {
  try {
    const { user: e } = Re();
    return {
      user: e,
      error: null
    };
  } catch (e) {
    return console.error("Failed to get current user:", e), {
      user: null,
      error: e instanceof R ? e : new R("Failed to retrieve user data", A.UNKNOWN_ERROR, e)
    };
  }
}, Mo = (e) => {
  if (!(e instanceof R))
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
}, Xe = (e, r = "Unknown") => {
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
  const r = ct.create({
    baseURL: e,
    headers: {
      "Content-Type": "application/json"
    }
  });
  let o = !1, a = null, d = [];
  const h = (s, i) => {
    d.forEach(({ resolve: C, reject: E }) => {
      s ? E(s) : i && C(i);
    }), d = [];
  };
  return r.interceptors.request.use(
    (s) => {
      const { accessToken: i } = Re();
      return i && s.headers && (s.headers.Authorization = `Bearer ${i}`), s;
    },
    (s) => Promise.reject(s)
  ), r.interceptors.response.use(
    (s) => s,
    async (s) => {
      const i = s.config, C = s.response?.status, E = i?.url || "", m = E.includes("/auth/refresh");
      if (C !== 401 || i._retry || m)
        return Promise.reject(s);
      i._retry = !0;
      const { refreshToken: O } = Re();
      if (!O) {
        const u = new Error(
          "No refresh token available for token refresh"
        );
        return Xe(u, "AxiosClient - Token Refresh"), Ce(), typeof window < "u" && (window.location.href = "/login"), Promise.reject(s);
      }
      if (o && a)
        return new Promise((u, T) => {
          d.push({ resolve: u, reject: T });
        }).then((u) => {
          const {
            accessToken: T,
            refreshToken: b
          } = u;
          if (i.headers && (i.headers.Authorization = `Bearer ${T}`), E.includes("/auth/logout"))
            try {
              if (typeof i.data == "string") {
                const w = JSON.parse(
                  i.data || "{}"
                );
                w.refresh_token = b, i.data = JSON.stringify(w);
              } else i.data && typeof i.data == "object" ? i.data.refresh_token = b : i.data = JSON.stringify({
                refresh_token: b
              });
            } catch {
              i.data = JSON.stringify({
                refresh_token: b
              });
            }
          return r(i);
        }).catch((u) => Promise.reject(u));
      o = !0, a = ct.post(
        `${e}/auth/refresh`,
        {
          refresh_token: O
        }
      );
      try {
        const u = await a, { accessToken: T, refreshToken: b } = u.data;
        if (vt(T, b, null), h(null, {
          accessToken: T,
          refreshToken: b
        }), i.headers && (i.headers.Authorization = `Bearer ${T}`), E.includes("/auth/logout"))
          try {
            if (typeof i.data == "string") {
              const w = JSON.parse(
                i.data || "{}"
              );
              w.refresh_token = b, i.data = JSON.stringify(w);
            } else i.data && typeof i.data == "object" ? i.data.refresh_token = b : i.data = JSON.stringify({
              refresh_token: b
            });
          } catch {
            i.data = JSON.stringify({
              refresh_token: b
            });
          }
        return r(i);
      } catch (u) {
        return Xe(
          u,
          "AxiosClient - Token Refresh Failed"
        ), h(u), Ce(), typeof window < "u" && (window.location.href = "/login"), Promise.reject(u);
      } finally {
        o = !1, a = null;
      }
    }
  ), r;
}, Tr = async (e, r) => {
  const { accessToken: o, refreshToken: a } = Re();
  if (o)
    return !0;
  if (a)
    try {
      const d = await e.post("/auth/refresh", {
        refresh_token: a
      });
      if (d.data.success && d.data.accessToken)
        return vt(d.data.accessToken, d.data.refreshToken || null, null), !0;
    } catch (d) {
      Xe(d, "TokenValidator - Refresh Failed");
    }
  return Ce(), r ? r() : window.location.href = "/login", !1;
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
  showBrand: d = !0,
  headerStyles: h,
  userName: s = "User Name",
  userEmail: i,
  userAvatar: C,
  onProfileClick: E,
  onAccountClick: m,
  onSettingsClick: O,
  showSettings: u = !0,
  onLogout: T,
  showNotifications: b = !1,
  notificationCount: w = 0,
  onNotificationBellClick: B,
  theme: K = "light",
  showThemeToggler: U = !1,
  onThemeToggle: f,
  showSearchbar: l = !0,
  searchValue: I,
  onSearchChange: G,
  onSearchSubmit: S,
  showProfile: N = !0,
  userRole: M,
  accentColor: Z = "#01584f",
  contentBackgroundColor: p = "#f2f9fc",
  navbarBackground: D = "#ff0000",
  navbarAccentColor: z = "#000000",
  rightExtraContent: pe = [],
  customNavbar: ue,
  customNavbarProps: be
}) => {
  const oe = lr((x) => x.breakpoints.up("md")), [ne, J] = v.useState(null), fe = !!ne, n = K === "dark", g = n ? "Switch to light mode" : "Switch to dark mode", H = (x) => {
    G?.(x.target.value);
  }, P = (x) => {
    x.key === "Enter" && S && I && S(I);
  }, Y = (x) => x ? x.charAt(0).toUpperCase() + x.slice(1).toLowerCase() : "User", $ = (x) => {
    J(x.currentTarget);
  }, ie = () => {
    J(null);
  }, q = (x) => {
    x?.(), ie();
  };
  return /* @__PURE__ */ t(
    or,
    {
      position: "fixed",
      sx: {
        boxShadow: 0,
        background: D,
        top: "var(--template-frame-height, 0px)",
        left: 0,
        width: "100%",
        zIndex: 1,
        height: "60px",
        ...h
      },
      children: /* @__PURE__ */ c(Ir, { variant: "dense", sx: { height: "100%" }, children: [
        /* @__PURE__ */ c(
          _,
          {
            direction: "row",
            sx: {
              alignItems: "center",
              gap: 2,
              flexShrink: 0,
              flexGrow: 1
            },
            children: [
              a && !oe && /* @__PURE__ */ t(
                V,
                {
                  "aria-label": "menu",
                  onClick: o,
                  sx: {
                    color: z,
                    "&:hover": {
                      backgroundColor: "action.hover"
                    }
                  },
                  children: /* @__PURE__ */ t(er, {})
                }
              ),
              d && /* @__PURE__ */ c(
                _,
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
              ue ? /* @__PURE__ */ t(ue, { ...be || {} }) : l && oe && /* @__PURE__ */ t(
                ir,
                {
                  placeholder: "Search for deals or documents...",
                  value: I || "",
                  onChange: H,
                  onKeyDown: P,
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
                        borderColor: Z
                      }
                    }
                  },
                  InputProps: {
                    startAdornment: /* @__PURE__ */ t(nr, { position: "start", children: /* @__PURE__ */ t(
                      rr,
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
        /* @__PURE__ */ c(
          _,
          {
            direction: "row",
            sx: {
              alignItems: "center",
              gap: 1.5,
              flexShrink: 0
            },
            children: [
              U && /* @__PURE__ */ t(he, { title: g, placement: "bottom", children: /* @__PURE__ */ t("span", { children: /* @__PURE__ */ t(
                V,
                {
                  size: "small",
                  onClick: f,
                  disabled: !f,
                  "aria-label": g,
                  sx: {
                    color: z,
                    "&:hover": {
                      backgroundColor: "action.hover"
                    }
                  },
                  children: n ? /* @__PURE__ */ t(Zt, { fontSize: "small" }) : /* @__PURE__ */ t(Vt, { fontSize: "small" })
                }
              ) }) }),
              b && /* @__PURE__ */ t(
                St,
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
                      onClick: B,
                      "aria-label": w ? `Notifications, ${w} unread` : "Notifications",
                      sx: { color: z },
                      children: /* @__PURE__ */ t(tr, {})
                    }
                  )
                }
              ),
              b && N && /* @__PURE__ */ t(
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
              N && /* @__PURE__ */ c(_e, { children: [
                /* @__PURE__ */ c(
                  _,
                  {
                    direction: "row",
                    onClick: $,
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
                        Ge,
                        {
                          src: C,
                          sx: { width: 32, height: 32 }
                        }
                      ) : /* @__PURE__ */ t(
                        dt,
                        {
                          sx: {
                            width: 32,
                            height: 32,
                            color: z
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
                              X,
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
                                children: s
                              }
                            ),
                            /* @__PURE__ */ t(
                              X,
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
                                children: Y(M)
                              }
                            )
                          ]
                        }
                      )
                    ]
                  }
                ),
                /* @__PURE__ */ c(
                  ar,
                  {
                    anchorEl: ne,
                    open: fe,
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
                      u && [
                        /* @__PURE__ */ t(
                          je,
                          {
                            onClick: () => q(O),
                            children: "Settings"
                          },
                          "settings"
                        ),
                        /* @__PURE__ */ t(re, {}, "settings-divider")
                      ],
                      /* @__PURE__ */ c(
                        je,
                        {
                          onClick: () => q(T),
                          sx: {
                            color: "error.main",
                            "&:hover": {
                              color: "error.dark"
                            }
                          },
                          children: [
                            /* @__PURE__ */ t(X, { sx: { flexGrow: 1 }, children: "Logout" }),
                            /* @__PURE__ */ t(wt, { fontSize: "small" })
                          ]
                        }
                      )
                    ]
                  }
                )
              ] }),
              pe.length !== 0 && pe.map((x) => x.type === "divider" ? /* @__PURE__ */ t(
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
                x.key
              ) : x.type === "profile" ? /* @__PURE__ */ t(
                he,
                {
                  title: x.tooltip || "",
                  disableHoverListener: !x.tooltip,
                  arrow: !0,
                  children: /* @__PURE__ */ c(
                    _,
                    {
                      direction: "row",
                      onClick: x.disabled ? void 0 : x.onClick,
                      sx: {
                        alignItems: "center",
                        gap: 1,
                        cursor: x.disabled ? "not-allowed" : "pointer",
                        borderRadius: "8px",
                        padding: "4px 8px",
                        opacity: x.disabled ? 0.5 : 1,
                        transition: "opacity 0.2s",
                        ...!x.disabled && {
                          "&:hover": {
                            backgroundColor: "action.hover"
                          }
                        }
                      },
                      children: [
                        x.avatar ? /* @__PURE__ */ t(
                          Ge,
                          {
                            src: x.avatar,
                            sx: {
                              width: 32,
                              height: 32
                            }
                          }
                        ) : /* @__PURE__ */ t(
                          dt,
                          {
                            sx: {
                              width: 32,
                              height: 32,
                              color: z
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
                                X,
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
                                  children: x.name
                                }
                              ),
                              /* @__PURE__ */ t(
                                X,
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
                                  children: x.role
                                }
                              )
                            ]
                          }
                        )
                      ]
                    }
                  )
                },
                x.key
              ) : null)
            ]
          }
        )
      ] })
    }
  );
}, Je = ({
  title: e = "",
  message: r = "",
  buttonText: o = "",
  onButtonClick: a,
  show: d = !0
}) => d ? /* @__PURE__ */ t(cr, { variant: "outlined", sx: { m: 1.5, flexShrink: 0 }, children: /* @__PURE__ */ c(dr, { children: [
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
    bt,
    {
      variant: "contained",
      size: "small",
      fullWidth: !0,
      onClick: a,
      children: o
    }
  )
] }) }) : null, Ne = (e, r) => r ? e.path && r === e.path ? !0 : e.subitems?.some((o) => o.path === r) ?? !1 : !1, ke = (e, r) => !!(r && e.path === r), Dr = (e) => {
  const r = Rt(e);
  if (!r)
    return "#ffffff";
  const [o, a, d] = r.map((s) => {
    const i = s / 255;
    return i <= 0.03928 ? i / 12.92 : ((i + 0.055) / 1.055) ** 2.4;
  });
  return 0.2126 * o + 0.7152 * a + 0.0722 * d > 0.5 ? "#0b1f1c" : "#ffffff";
}, Ar = (e) => {
  const r = Rt(e);
  if (!r)
    return "rgba(1, 88, 79, 0.12)";
  const [o, a, d] = r;
  return `rgba(${o}, ${a}, ${d}, 0.14)`;
}, Rt = (e) => {
  let r = e.trim().replace(/^#/, "");
  if (r.length === 3 && (r = r.split("").map((a) => a + a).join("")), r.length !== 6 || /[^0-9a-fA-F]/.test(r))
    return null;
  const o = parseInt(r, 16);
  return [o >> 16 & 255, o >> 8 & 255, o & 255];
}, Ct = () => typeof window < "u" && !!window.localStorage, Tt = (e) => {
  if (!Ct())
    return null;
  try {
    const r = window.localStorage.getItem(e);
    return r === null ? null : r === "true";
  } catch (r) {
    return console.warn("Failed to read sidebar collapsed state:", r), null;
  }
}, It = (e, r) => {
  if (Ct())
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
  logo: d,
  title: h,
  sectionTitle: s,
  activeAccentColor: i = "#01584f",
  groupAccentColor: C,
  activeForegroundColor: E,
  surfaceBackgroundColor: m,
  collapsed: O,
  defaultCollapsed: u = !1,
  onCollapsedChange: T,
  persistKey: b = kr,
  expandedWidth: w = _r,
  collapsedWidth: B = Nr
}) => {
  const K = O !== void 0, [U, f] = v.useState(
    () => Tt(b) ?? u
  ), l = K ? !!O : U, [I, G] = v.useState(
    {}
  ), S = i, N = E ?? Dr(S), M = C ?? Ar(S), Z = m ?? "#ffffff", p = (n) => {
    K || (f(n), It(b, n)), T?.(n);
  }, D = (n) => {
    a?.(n);
  }, z = (n) => {
    G((g) => ({ ...g, [n]: !g[n] }));
  }, pe = (n) => {
    const g = !!(n.path && o === n.path);
    return /* @__PURE__ */ c(
      ce,
      {
        disabled: !n.path,
        selected: g,
        onClick: () => n.path && D(n.path),
        "data-testid": `sidebar-item-${n.text}`,
        "data-active": g ? "true" : "false",
        sx: {
          borderRadius: "6px",
          py: 1,
          px: 1.5,
          color: g ? N : "text.primary",
          bgcolor: g ? S : "transparent",
          "& .MuiListItemIcon-root": {
            color: g ? N : S,
            minWidth: 36
          },
          "&:hover": {
            bgcolor: g ? S : M
          },
          "&.Mui-selected, &.Mui-selected:hover": {
            bgcolor: S
          }
        },
        children: [
          /* @__PURE__ */ t(de, { children: n.icon }),
          /* @__PURE__ */ t(
            ae,
            {
              primary: n.text,
              primaryTypographyProps: { noWrap: !0 }
            }
          )
        ]
      },
      n.text
    );
  }, ue = (n) => {
    const g = Ne(n, o), H = !!(n.path && o === n.path), P = g || !!I[n.text];
    return /* @__PURE__ */ c(W, { "data-testid": `sidebar-group-${n.text}`, children: [
      /* @__PURE__ */ c(
        ce,
        {
          onClick: () => n.path ? D(n.path) : z(n.text),
          "data-testid": `sidebar-item-${n.text}`,
          "data-active": H ? "true" : "false",
          sx: {
            borderRadius: "6px",
            py: 1,
            px: 1.5,
            color: H ? N : "text.primary",
            bgcolor: H ? S : "transparent",
            "& .MuiListItemIcon-root": {
              color: H ? N : S,
              minWidth: 36
            },
            "&:hover": {
              bgcolor: H ? S : M
            }
          },
          children: [
            /* @__PURE__ */ t(de, { children: n.icon }),
            /* @__PURE__ */ t(
              ae,
              {
                primary: n.text,
                primaryTypographyProps: { noWrap: !0 }
              }
            )
          ]
        }
      ),
      /* @__PURE__ */ t(Et, { in: P, timeout: "auto", unmountOnExit: !0, children: /* @__PURE__ */ t(
        W,
        {
          "data-testid": `sidebar-children-${n.text}`,
          sx: {
            mt: 0.5,
            borderRadius: "6px",
            bgcolor: M,
            py: 0.5
          },
          children: n.subitems.map((Y) => be(Y))
        }
      ) })
    ] }, n.text);
  }, be = (n) => {
    const g = ke(n, o);
    return /* @__PURE__ */ c(
      ce,
      {
        selected: g,
        onClick: () => D(n.path),
        "data-testid": `sidebar-subitem-${n.text}`,
        "data-active": g ? "true" : "false",
        sx: {
          borderRadius: "6px",
          mx: 0.5,
          py: 0.75,
          pl: 4,
          color: g ? N : "text.primary",
          bgcolor: g ? S : "transparent",
          "& .MuiListItemIcon-root": {
            color: g ? N : S,
            minWidth: 32
          },
          "&:hover": {
            bgcolor: g ? S : "action.hover"
          },
          "&.Mui-selected, &.Mui-selected:hover": {
            bgcolor: S
          }
        },
        children: [
          n.icon ? /* @__PURE__ */ t(de, { children: n.icon }) : null,
          /* @__PURE__ */ t(
            ae,
            {
              primary: n.text,
              primaryTypographyProps: { noWrap: !0 }
            }
          )
        ]
      },
      n.path
    );
  }, oe = (n, g, H, P, Y, $) => {
    const ie = !Y, q = /* @__PURE__ */ t(
      V,
      {
        "aria-label": g,
        disabled: ie,
        onClick: Y,
        "data-testid": $?.testId ?? `sidebar-item-${g}`,
        "data-active": P ? "true" : "false",
        sx: {
          width: 44,
          height: 44,
          color: P ? N : S,
          bgcolor: P ? S : "transparent",
          borderRadius: P ? "8px" : "50%",
          "&:hover": {
            bgcolor: P ? S : $?.insideGroup ? "action.hover" : M,
            borderRadius: "8px"
          }
        },
        children: H
      }
    );
    return /* @__PURE__ */ t(he, { title: g, placement: "right", arrow: !0, children: ie ? /* @__PURE__ */ t("span", { children: q }) : q }, n);
  }, ne = (n) => {
    const g = !!n.subitems?.length, H = Ne(n, o);
    if (g && H) {
      const Y = !!(n.path && o === n.path);
      return /* @__PURE__ */ c(
        W,
        {
          "data-testid": `sidebar-group-${n.text}`,
          sx: {
            width: "100%",
            borderRadius: "10px",
            bgcolor: M,
            py: 0.5,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 0.5
          },
          children: [
            oe(
              n.text,
              n.text,
              n.icon,
              Y,
              n.path ? () => D(n.path) : void 0,
              { insideGroup: !0 }
            ),
            n.subitems.map(
              ($) => oe(
                $.path,
                $.text,
                $.icon ?? n.icon,
                ke($, o),
                () => D($.path),
                {
                  insideGroup: !0,
                  testId: `sidebar-subitem-${$.text}`
                }
              )
            )
          ]
        },
        n.text
      );
    }
    const P = n.path ? () => D(n.path) : g ? () => p(!1) : void 0;
    return oe(
      n.text,
      n.text,
      n.icon,
      !!(n.path && o === n.path),
      P
    );
  }, J = (n) => l ? ne(n) : n.subitems?.length ? ue(n) : pe(n), fe = l ? B : w;
  return /* @__PURE__ */ c(
    W,
    {
      component: "nav",
      "aria-label": "Main sidebar",
      "data-testid": "collapsible-sidebar",
      "data-collapsed": l ? "true" : "false",
      sx: {
        width: fe,
        minWidth: fe,
        height: "100%",
        boxSizing: "border-box",
        bgcolor: Z,
        display: "flex",
        flexDirection: "column",
        overflowX: "hidden",
        overflowY: "auto",
        transition: Wr,
        px: l ? 1 : 2,
        py: 2
      },
      children: [
        /* @__PURE__ */ c(
          _,
          {
            direction: "row",
            alignItems: "center",
            justifyContent: l ? "center" : "flex-start",
            spacing: 1.5,
            sx: { minHeight: 40, px: l ? 0 : 0.5 },
            children: [
              !l && h ? /* @__PURE__ */ t(
                X,
                {
                  "data-testid": "sidebar-title",
                  variant: "h6",
                  sx: {
                    fontWeight: 700,
                    fontSize: "20px",
                    lineHeight: 1,
                    textTransform: "uppercase",
                    color: S,
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    textOverflow: "ellipsis"
                  },
                  children: h
                }
              ) : null,
              d ? /* @__PURE__ */ t(
                W,
                {
                  "data-testid": "sidebar-logo",
                  sx: {
                    display: "flex",
                    alignItems: "center",
                    flexShrink: 0,
                    color: S,
                    "& svg": { color: "inherit", fill: "currentColor" }
                  },
                  children: d
                }
              ) : null
            ]
          }
        ),
        /* @__PURE__ */ c(
          _,
          {
            direction: "row",
            alignItems: "center",
            justifyContent: l ? "center" : "space-between",
            sx: { mt: 2, mb: 1, minHeight: 32 },
            children: [
              !l && s ? /* @__PURE__ */ t(
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
                he,
                {
                  title: l ? "Expand sidebar" : "Collapse sidebar",
                  placement: "right",
                  arrow: !0,
                  children: /* @__PURE__ */ t(
                    V,
                    {
                      size: "small",
                      "aria-label": l ? "Expand sidebar" : "Collapse sidebar",
                      "data-testid": "sidebar-toggle",
                      onClick: () => p(!l),
                      sx: { color: S },
                      children: l ? /* @__PURE__ */ t(ur, { fontSize: "small" }) : /* @__PURE__ */ t(pr, { fontSize: "small" })
                    }
                  )
                }
              )
            ]
          }
        ),
        /* @__PURE__ */ t(_, { spacing: 0.5, sx: { width: "100%" }, children: e.map((n) => J(n)) }),
        r.length > 0 ? /* @__PURE__ */ c(W, { sx: { mt: "auto", pt: 2 }, children: [
          /* @__PURE__ */ t(re, { sx: { mb: 1, borderColor: "divider" } }),
          /* @__PURE__ */ t(_, { spacing: 0.5, sx: { width: "100%" }, children: r.map((n) => J(n)) })
        ] }) : null
      ]
    }
  );
}, Mr = 180, pt = 250, Ot = ({
  text: e,
  testId: r
}) => {
  const o = v.useRef(null), [a, d] = v.useState(!1), h = v.useCallback(() => {
    const s = o.current;
    s && d(s.scrollWidth > s.clientWidth + 0.5);
  }, []);
  return v.useLayoutEffect(() => {
    h();
  }, [h, e]), v.useEffect(() => {
    const s = o.current;
    if (!s)
      return;
    const i = new ResizeObserver(() => h());
    return i.observe(s), () => i.disconnect();
  }, [h]), /* @__PURE__ */ t(
    he,
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
  isSecondary: d,
  surfaceBackgroundColor: h,
  railShowTitles: s = !1
}) => {
  const i = xt(), [C, E] = v.useState(null), [m, O] = v.useState(!1), u = v.useRef(
    null
  ), T = v.useRef(null), b = v.useRef(null), w = v.useRef(!1), B = v.useRef(!1), K = v.useId(), U = () => {
    u.current && (clearTimeout(u.current), u.current = null);
  }, f = () => {
    U(), u.current = setTimeout(() => {
      O(!1), u.current = null;
    }, Mr);
  }, l = () => {
    U(), O(!0);
  };
  v.useEffect(() => {
    if (!m)
      return;
    const p = (D) => {
      D.key === "Escape" && (O(!1), b.current?.focus());
    };
    return document.addEventListener("keydown", p), () => document.removeEventListener("keydown", p);
  }, [m]), v.useEffect(() => {
    if (!m || !B.current)
      return;
    const p = globalThis.requestAnimationFrame(() => {
      T.current?.querySelector(
        '[role="menuitem"]'
      )?.focus(), B.current = !1;
    });
    return () => cancelAnimationFrame(p);
  }, [m]);
  const I = Ne(e, r), G = d ? 48 : 44, S = d ? "text.secondary" : a, N = d ? "#01584F" : a, M = {
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
    color: I ? "#ffffff" : S,
    backgroundColor: I ? N : "transparent",
    "&:hover": {
      backgroundColor: I ? N : "action.hover",
      borderRadius: "4px",
      color: I ? "#ffffff" : S
    }
  }, Z = s ? /* @__PURE__ */ t(
    V,
    {
      ref: b,
      component: e.path ? "a" : "button",
      href: e.path || void 0,
      "aria-label": e.text,
      onFocus: () => {
        w.current || l();
      },
      onBlur: (p) => {
        const D = p.relatedTarget;
        D && T.current?.contains(D) || f();
      },
      onKeyDown: (p) => {
        p.key === "ArrowDown" && (p.preventDefault(), B.current = !0, l());
      },
      onClick: (p) => {
        p.preventDefault(), p.stopPropagation(), e.path && o?.(e.path);
      },
      "aria-haspopup": "menu",
      "aria-expanded": m,
      "aria-controls": m ? K : void 0,
      "data-testid": `rail-submenu-trigger-${e.text}`,
      sx: M,
      children: /* @__PURE__ */ c(_, { alignItems: "center", spacing: 1, sx: { width: "100%" }, children: [
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
          Ot,
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
      ref: b,
      component: e.path ? "a" : "button",
      href: e.path || void 0,
      "aria-label": e.text,
      onFocus: () => {
        w.current || l();
      },
      onBlur: (p) => {
        const D = p.relatedTarget;
        D && T.current?.contains(D) || f();
      },
      onKeyDown: (p) => {
        p.key === "ArrowDown" && (p.preventDefault(), B.current = !0, l());
      },
      onClick: (p) => {
        p.preventDefault(), p.stopPropagation(), e.path && o?.(e.path);
      },
      "aria-haspopup": "menu",
      "aria-expanded": m,
      "aria-controls": m ? K : void 0,
      "data-testid": `rail-submenu-trigger-${e.text}`,
      sx: {
        width: G,
        height: G,
        color: I ? "#ffffff" : S,
        backgroundColor: I ? N : "transparent",
        borderRadius: I ? "4px" : "50%",
        "&:hover": {
          backgroundColor: I ? N : "action.hover",
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
            ref: E,
            "data-testid": `rail-submenu-anchor-${e.text}`,
            sx: { display: "inline-flex", maxWidth: "100%" },
            onMouseEnter: () => {
              w.current = !0, l();
            },
            onMouseLeave: () => {
              w.current = !1, f();
            },
            children: s ? Z : /* @__PURE__ */ t(he, { title: e.text, placement: "right", arrow: !0, children: Z })
          }
        ),
        /* @__PURE__ */ t(
          wr,
          {
            open: m && !!C,
            anchorEl: C,
            placement: "right-start",
            modifiers: [{ name: "offset", options: { offset: [8, 0] } }],
            sx: { zIndex: (p) => p.zIndex.modal },
            children: /* @__PURE__ */ t(
              xr,
              {
                ref: T,
                elevation: 0,
                onMouseEnter: () => {
                  U();
                },
                onMouseLeave: f,
                "data-testid": `rail-submenu-panel-${e.text}`,
                sx: {
                  bgcolor: h,
                  backgroundImage: "none",
                  borderRadius: "4px",
                  border: "1px solid",
                  borderColor: "divider",
                  boxShadow: i.shadows[8],
                  maxWidth: pt,
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
                      maxWidth: pt
                    },
                    children: e.subitems.map((p) => /* @__PURE__ */ c(
                      je,
                      {
                        role: "menuitem",
                        title: p.text,
                        selected: ke(p, r),
                        onClick: (D) => {
                          D.preventDefault(), o?.(p.path), O(!1);
                        },
                        sx: {
                          borderRadius: "4px",
                          mx: 0.5,
                          my: 0.125,
                          maxWidth: "100%",
                          overflow: "hidden",
                          color: d ? "text.secondary" : a,
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
                            bgcolor: N,
                            color: "#ffffff",
                            "&:hover": {
                              bgcolor: N
                            }
                          },
                          "&.Mui-focusVisible": {
                            bgcolor: "action.focus"
                          }
                        },
                        children: [
                          p.icon ? /* @__PURE__ */ t(de, { children: p.icon }) : null,
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
}, Fr = ({
  link: e,
  activePath: r,
  onLinkClick: o,
  accentColor: a,
  isSecondary: d,
  railShowTitles: h = !1
}) => {
  const s = !!(e.path && r === e.path), i = d ? 48 : 44, C = d ? "text.secondary" : a, E = d ? "#01584F" : a, m = {
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
    backgroundColor: s ? E : "transparent",
    "&:hover": {
      backgroundColor: s ? E : "action.hover",
      borderRadius: "4px",
      color: s ? "#ffffff" : C
    }
  }, O = h ? /* @__PURE__ */ t(
    V,
    {
      component: e.path ? "a" : "button",
      href: e.path || void 0,
      "aria-label": e.text,
      onClick: (u) => {
        u.preventDefault(), u.stopPropagation(), e.path && o?.(e.path);
      },
      disabled: !e.path,
      sx: m,
      children: /* @__PURE__ */ c(_, { alignItems: "center", spacing: 1, sx: { width: "100%" }, children: [
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
          Ot,
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
      onClick: (u) => {
        u.preventDefault(), u.stopPropagation(), e.path && o?.(e.path);
      },
      disabled: !e.path,
      sx: {
        width: i,
        height: i,
        color: s ? "#ffffff" : C,
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
  return h ? O : /* @__PURE__ */ t(he, { title: e.text, placement: "right", arrow: !0, children: O });
}, Br = ({
  link: e,
  expanded: r,
  onToggle: o,
  activePath: a,
  onLinkClick: d,
  accentColor: h,
  isSecondary: s
}) => {
  const i = Ne(e, a), C = s ? "text.secondary" : h, E = s ? "#01584F" : h;
  return /* @__PURE__ */ c(_e, { children: [
    /* @__PURE__ */ c(
      ce,
      {
        onClick: o,
        sx: {
          py: 1.5,
          px: 2,
          color: i ? "#ffffff" : C,
          bgcolor: i ? E : "transparent",
          "&:hover": {
            bgcolor: i ? E : "action.hover"
          }
        },
        "data-testid": `drawer-expand-trigger-${e.text}`,
        children: [
          /* @__PURE__ */ t(de, { sx: { color: "inherit", minWidth: 40 }, children: e.icon }),
          /* @__PURE__ */ t(ae, { primary: e.text }),
          r ? /* @__PURE__ */ t(fr, {}) : /* @__PURE__ */ t(mr, {})
        ]
      }
    ),
    /* @__PURE__ */ t(Et, { in: r, timeout: "auto", unmountOnExit: !0, children: /* @__PURE__ */ c(W, { component: "nav", "aria-label": e.text, children: [
      e.path ? /* @__PURE__ */ t(
        ce,
        {
          sx: { pl: 4, py: 1 },
          onClick: () => e.path && d?.(e.path),
          selected: !!(a && a === e.path),
          "data-testid": `drawer-parent-path-${e.text}`,
          children: /* @__PURE__ */ t(ae, { primary: e.text })
        }
      ) : null,
      e.subitems.map((m) => /* @__PURE__ */ c(
        ce,
        {
          sx: { pl: 4, py: 1 },
          onClick: () => d?.(m.path),
          selected: ke(m, a),
          children: [
            m.icon ? /* @__PURE__ */ t(de, { sx: { minWidth: 36 }, children: m.icon }) : null,
            /* @__PURE__ */ t(ae, { primary: m.text })
          ]
        },
        m.path
      ))
    ] }) })
  ] });
}, Kr = ({
  link: e,
  activePath: r,
  onLinkClick: o,
  accentColor: a,
  isSecondary: d
}) => {
  const h = !!(e.path && r === e.path), s = d ? "text.secondary" : a, i = d ? "#01584F" : a;
  return /* @__PURE__ */ c(
    ce,
    {
      disabled: !e.path,
      onClick: () => e.path && o?.(e.path),
      sx: {
        py: 1.5,
        px: 2,
        color: h ? "#ffffff" : s,
        bgcolor: h ? i : "transparent",
        "&:hover": {
          bgcolor: h ? i : "action.hover"
        }
      },
      children: [
        /* @__PURE__ */ t(de, { sx: { color: "inherit", minWidth: 40 }, children: e.icon }),
        /* @__PURE__ */ t(ae, { primary: e.text })
      ]
    }
  );
}, Ae = () => /* @__PURE__ */ t(
  W,
  {
    sx: {
      width: "100%",
      display: "flex",
      justifyContent: "center"
    },
    children: /* @__PURE__ */ t(re, { sx: { width: "60%", borderColor: "divider" } })
  }
), Dt = ({
  variant: e,
  mainLinks: r,
  secondaryLinks: o = [],
  activePath: a,
  onLinkClick: d,
  accentColor: h = "#01584f",
  surfaceBackgroundColor: s,
  railShowTitles: i = !1
}) => {
  const C = xt(), E = s ?? C.palette.background.paper, m = (f) => {
    d && d(f);
  }, [O, u] = v.useState({}), [T, b] = v.useState({}), w = (f) => {
    u((l) => ({
      ...l,
      [f]: !l[f]
    }));
  }, B = (f) => {
    b((l) => ({
      ...l,
      [f]: !l[f]
    }));
  }, K = (f, l) => f.subitems?.length ? /* @__PURE__ */ t(
    zr,
    {
      link: f,
      activePath: a,
      onLinkClick: m,
      accentColor: h,
      isSecondary: l,
      surfaceBackgroundColor: E,
      railShowTitles: i
    }
  ) : /* @__PURE__ */ t(
    Fr,
    {
      link: f,
      activePath: a,
      onLinkClick: m,
      accentColor: h,
      isSecondary: l,
      railShowTitles: i
    }
  ), U = (f, l, I) => {
    if (f.subitems?.length) {
      const G = I ? !!T[l] : !!O[l];
      return /* @__PURE__ */ t(
        Br,
        {
          link: f,
          expanded: G,
          onToggle: () => I ? B(l) : w(l),
          activePath: a,
          onLinkClick: m,
          accentColor: h,
          isSecondary: I
        }
      );
    }
    return /* @__PURE__ */ t(
      Kr,
      {
        link: f,
        activePath: a,
        onLinkClick: m,
        accentColor: h,
        isSecondary: I
      }
    );
  };
  return e === "drawer" ? /* @__PURE__ */ c(
    _,
    {
      sx: {
        flexGrow: 1,
        width: "100%",
        alignItems: "stretch",
        pt: 2,
        gap: 0
      },
      children: [
        /* @__PURE__ */ t(_, { sx: { width: "100%" }, children: r.map((f, l) => /* @__PURE__ */ c(v.Fragment, { children: [
          U(f, l, !1),
          l < r.length - 1 ? /* @__PURE__ */ t(Ae, {}) : null
        ] }, l)) }),
        o.length > 0 ? /* @__PURE__ */ c(_e, { children: [
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
                re,
                {
                  sx: { width: "60%", borderColor: "divider" }
                }
              )
            }
          ),
          /* @__PURE__ */ t(W, { sx: { mt: "auto", pb: 2 }, children: /* @__PURE__ */ t(_, { sx: { width: "100%" }, children: o.map((f, l) => /* @__PURE__ */ c(v.Fragment, { children: [
            U(f, l, !0),
            l < o.length - 1 ? /* @__PURE__ */ t(Ae, {}) : null
          ] }, l)) }) })
        ] }) : null
      ]
    }
  ) : /* @__PURE__ */ c(
    _,
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
        r.map((f, l) => /* @__PURE__ */ c(v.Fragment, { children: [
          K(f, !1),
          l < r.length - 1 ? /* @__PURE__ */ t(Ae, {}) : null
        ] }, l)),
        o.length > 0 ? /* @__PURE__ */ c(_e, { children: [
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
                re,
                {
                  sx: { width: "60%", borderColor: "divider" }
                }
              )
            }
          ),
          /* @__PURE__ */ t(W, { sx: { mt: "auto", pb: 2 }, children: /* @__PURE__ */ t(
            _,
            {
              gap: i ? 1.25 : 1,
              alignItems: "center",
              children: o.map((f, l) => /* @__PURE__ */ c(v.Fragment, { children: [
                K(f, !0),
                l < o.length - 1 ? /* @__PURE__ */ t(Ae, {}) : null
              ] }, l))
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
  activePath: d,
  onLinkClick: h,
  userName: s = "User Name",
  userAvatar: i,
  onLogout: C,
  showNotifications: E = !1,
  notificationCount: m = 0,
  onNotificationBellClick: O,
  alertProps: u,
  accentColor: T = "#01584f"
}) => /* @__PURE__ */ t(
  br,
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
      _,
      {
        sx: {
          maxWidth: "70dvw",
          height: "100%"
        },
        children: [
          /* @__PURE__ */ c(_, { direction: "row", sx: { p: 2, pb: 0, gap: 1 }, children: [
            /* @__PURE__ */ c(
              _,
              {
                direction: "row",
                sx: { gap: 1, alignItems: "center", flexGrow: 1, p: 1 },
                children: [
                  /* @__PURE__ */ t(
                    Ge,
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
            E && /* @__PURE__ */ t(
              St,
              {
                color: "error",
                badgeContent: m,
                invisible: m === 0,
                sx: { "& .MuiBadge-badge": { right: 2, top: 2 } },
                children: /* @__PURE__ */ t(
                  V,
                  {
                    size: "small",
                    onClick: O,
                    "aria-label": "Notifications",
                    children: /* @__PURE__ */ t(Sr, {})
                  }
                )
              }
            )
          ] }),
          /* @__PURE__ */ t(re, {}),
          /* @__PURE__ */ c(_, { sx: { flexGrow: 1 }, children: [
            /* @__PURE__ */ t(
              Dt,
              {
                variant: "drawer",
                mainLinks: o,
                secondaryLinks: a,
                activePath: d,
                onLinkClick: (w) => {
                  h?.(w), r();
                },
                accentColor: T
              }
            ),
            /* @__PURE__ */ t(re, {})
          ] }),
          u?.show && /* @__PURE__ */ t(Je, { ...u }),
          /* @__PURE__ */ t(_, { sx: { p: 2 }, children: /* @__PURE__ */ t(
            bt,
            {
              variant: "outlined",
              fullWidth: !0,
              startIcon: /* @__PURE__ */ t(wt, {}),
              onClick: C,
              children: "Logout"
            }
          ) })
        ]
      }
    )
  }
), Hr = 100, ut = 264, ft = 72, mt = "lumora:sidebar-collapsed", $e = "width 200ms ease, left 200ms ease", zo = ({
  children: e,
  sidebarLinks: r = [],
  secondarySidebarLinks: o = [],
  appName: a = "Dashboard",
  pageName: d = "Home",
  showHeader: h = !0,
  showSidebar: s = !0,
  showSidebarRailTitles: i = !1,
  sidebarVariant: C = "rail",
  logo: E,
  sidebarSectionTitle: m,
  sidebarBackgroundColor: O,
  groupAccentColor: u,
  activeSidebarForegroundColor: T,
  enableRefreshToken: b = !1,
  activePath: w,
  onLinkClick: B,
  userName: K,
  userEmail: U,
  userAvatar: f,
  onLogout: l,
  onProfileClick: I,
  onAccountClick: G,
  onSettingsClick: S,
  showSettings: N = !0,
  showNotifications: M = !0,
  notificationCount: Z = 0,
  NotificationSidebarContent: p,
  showSearchbar: D = !0,
  searchValue: z,
  onSearchChange: pe,
  onSearchSubmit: ue,
  showProfile: be = !0,
  userRole: oe,
  onVerify: ne,
  alertProps: J,
  style: fe,
  headerStyles: n,
  sidebarStyles: g,
  contentStyles: H,
  accentColor: P,
  contentBackgroundColor: Y,
  navbarBackground: $,
  navbarAccentColor: ie,
  theme: q = "light",
  showThemeToggler: x = !1,
  onThemeToggle: At,
  GlobalChatSidebar: We,
  useChatSidebar: _t,
  rightExtraContent: Nt,
  customNavbar: Ye,
  customNavbarProps: kt,
  redirectToLogin: Te,
  apiBaseUrl: qe
}) => {
  const Wt = Xt(), Q = Jt(Wt.breakpoints.down("md")), Qe = st(
    () => gt(Er(q)),
    [q]
  ), Le = q === "dark", me = P ?? "#01584f", Ie = Y ?? (Le ? "hsl(220, 35%, 9%)" : "#f2f9fc"), Lt = $ ?? (Le ? "hsl(220, 30%, 7%)" : "#ffffff"), Mt = ie ?? (Le ? "#ffffff" : "#000000"), Ee = C === "collapsible", zt = E ?? /* @__PURE__ */ t(
    se,
    {
      role: "img",
      "aria-label": `${a} logo`,
      sx: {
        width: 28,
        height: 28,
        flexShrink: 0,
        bgcolor: me,
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
  ), [Me, Ft] = xe(
    () => Tt(mt) ?? !1
  ), Bt = (ye) => {
    Ft(ye), It(mt, ye);
  };
  let ee = 0;
  s && !Q && (Ee ? ee = Me ? ft : ut : ee = Hr);
  const [Ve, ze] = xe(!1), [Kt, Oe] = xe(!1), [Ut, Ht] = xe(!0), [Pt, $t] = xe(!1), [Pr, De] = xe(null), Ze = _t?.()?.isOpen ?? !1, Fe = lt(ne), et = lt(!1), tt = st(
    () => Cr(qe),
    [qe]
  );
  Ue(() => {
    Fe.current = ne;
  }, [ne]);
  const Gt = () => {
    ze(!Ve);
  }, jt = () => {
    ze(!1);
  }, rt = (ye) => {
    const ge = l(ye);
    ge instanceof Promise ? ge.then(() => {
      De(null);
    }).catch((ot) => {
      console.error("Error in logout handler:", ot), De(null);
    }) : De(null);
  };
  return Ue(() => {
    (() => {
      try {
        const { isAuthenticated: ge, error: ot } = vr();
        if (!ge) {
          console.log("No session found, redirecting to login"), Ce(), Te();
          return;
        }
        if (!et.current) {
          const { user: ve, error: Be } = Rr();
          if (ve && !Be) {
            const nt = {
              name: ve.name || "",
              email: ve.email || "",
              profilePicture: ve.profilePicture || "",
              role: ve.role || ""
            };
            De(nt), et.current = !0, Fe.current && Fe.current(nt);
          } else Be && console.error("Error getting user data:", Be);
        }
        $t(!0);
      } catch (ge) {
        console.error("Error checking session:", ge), Ce(), Te();
      } finally {
        Ht(!1);
      }
    })();
  }, [Te]), Ue(() => {
    b && Tr(tt, Te);
  }, [b, tt]), Ut ? /* @__PURE__ */ t(it, { theme: Qe, children: /* @__PURE__ */ c(
    se,
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
            sx: { color: me }
          }
        ),
        /* @__PURE__ */ t(se, { sx: { mt: 2, color: "text.secondary" }, children: "Checking session..." })
      ]
    }
  ) }) : Pt ? /* @__PURE__ */ t(it, { theme: Qe, children: /* @__PURE__ */ c(
    se,
    {
      sx: {
        display: "flex",
        minHeight: "100vh",
        ...fe
      },
      children: [
        /* @__PURE__ */ t(qt, {}),
        h && /* @__PURE__ */ t(
          Or,
          {
            appName: a,
            pageName: d,
            onMenuClick: Q && s ? Gt : void 0,
            showMenuButton: Q && s,
            showBrand: !(Ee && !Q),
            headerStyles: Ee && !Q && s ? {
              left: `${ee}px`,
              width: `calc(100% - ${ee}px)`,
              transition: $e,
              ...n
            } : n,
            userName: K,
            userEmail: U,
            userAvatar: f,
            onProfileClick: I,
            onAccountClick: G,
            onSettingsClick: S,
            showSettings: N,
            onLogout: rt,
            showNotifications: M,
            notificationCount: Z,
            onNotificationBellClick: M && p ? () => Oe(!0) : void 0,
            showSearchbar: D && !Ye,
            searchValue: z,
            onSearchChange: pe,
            onSearchSubmit: ue,
            showProfile: be,
            userRole: oe,
            accentColor: me,
            contentBackgroundColor: Ie,
            navbarBackground: Lt,
            navbarAccentColor: Mt,
            theme: q,
            showThemeToggler: x,
            onThemeToggle: At,
            rightExtraContent: Nt,
            customNavbar: Ye,
            customNavbarProps: kt
          }
        ),
        s && !Q && Ee && /* @__PURE__ */ c(
          se,
          {
            component: "aside",
            sx: {
              width: ee,
              minWidth: ee,
              flexShrink: 0,
              zIndex: 2,
              // Higher z-index than app bar
              position: "sticky",
              top: 0,
              alignSelf: "flex-start",
              height: "100vh",
              transition: $e,
              ...g
            },
            children: [
              /* @__PURE__ */ t(
                Lr,
                {
                  mainLinks: r,
                  secondaryLinks: o,
                  activePath: w,
                  onLinkClick: B,
                  logo: zt,
                  title: a,
                  sectionTitle: m,
                  activeAccentColor: me,
                  groupAccentColor: u,
                  activeForegroundColor: T,
                  surfaceBackgroundColor: O,
                  collapsed: Me,
                  onCollapsedChange: Bt,
                  expandedWidth: ut,
                  collapsedWidth: ft
                }
              ),
              J?.show && !Me && /* @__PURE__ */ t(Je, { ...J })
            ]
          }
        ),
        s && !Q && !Ee && /* @__PURE__ */ t(
          at,
          {
            variant: "permanent",
            sx: {
              width: ee,
              flexShrink: 0,
              zIndex: 2,
              // Higher z-index than app bar
              "& .MuiDrawer-paper": {
                width: ee,
                boxSizing: "border-box",
                bgcolor: Ie,
                borderRight: "none",
                top: h ? "60px" : 0,
                // Position below header
                height: h ? "calc(100vh - 60px)" : "100vh"
              },
              ...g
            },
            children: /* @__PURE__ */ c(
              se,
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
                    Dt,
                    {
                      variant: "rail",
                      mainLinks: r,
                      secondaryLinks: o,
                      activePath: w,
                      onLinkClick: B,
                      accentColor: me,
                      surfaceBackgroundColor: Ie,
                      railShowTitles: i
                    }
                  ),
                  J?.show && /* @__PURE__ */ t(Je, { ...J })
                ]
              }
            )
          }
        ),
        s && Q && /* @__PURE__ */ t(
          Ur,
          {
            open: Ve,
            onClose: jt,
            mainLinks: r,
            secondaryLinks: o,
            activePath: w,
            onLinkClick: B,
            userName: K,
            userEmail: U,
            userAvatar: f,
            onLogout: rt,
            onProfileClick: I,
            showNotifications: M,
            notificationCount: Z,
            onNotificationBellClick: M && p ? () => {
              ze(!1), Oe(!0);
            } : void 0,
            alertProps: J,
            accentColor: me
          }
        ),
        /* @__PURE__ */ t(
          se,
          {
            component: "main",
            sx: {
              flexGrow: 1,
              p: 3,
              width: Q ? "100%" : s ? `calc(100% - ${ee}px)` : "100%",
              transition: $e,
              mt: h ? "60px" : 0,
              // Account for AppNavbar height (60px)
              ml: 0,
              // Offset for sidebar on desktop
              backgroundColor: Ie,
              mb: 0,
              mr: 0,
              ...H
            },
            children: /* @__PURE__ */ c(Ke, { container: !0, spacing: 3, children: [
              /* @__PURE__ */ t(
                Ke,
                {
                  size: {
                    xs: 12,
                    md: Ze && We ? 8.5 : 12
                  },
                  sx: {
                    display: "flex",
                    flexDirection: "column"
                  },
                  children: e
                }
              ),
              Ze && We && /* @__PURE__ */ t(
                Ke,
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
                  children: /* @__PURE__ */ t(We, {})
                }
              )
            ] })
          }
        ),
        M && p && /* @__PURE__ */ t(
          at,
          {
            anchor: "right",
            open: Kt,
            onClose: () => Oe(!1),
            slotProps: {
              paper: { sx: { width: 380, maxWidth: "100vw" } }
            },
            children: /* @__PURE__ */ t(
              p,
              {
                onClose: () => Oe(!1)
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
  R as AuthError,
  Lr as CollapsibleSidebar,
  zo as LumoraWrapper,
  Ce as clearAuthTokens,
  zo as default,
  Mo as getAuthErrorMessage,
  Re as getAuthTokens,
  Rr as getCurrentUser,
  vr as isAuthenticated,
  Xe as logAuthError,
  vt as storeAuthTokens
};
