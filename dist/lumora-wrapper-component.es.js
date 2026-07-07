import { jsx as t, jsxs as p, Fragment as Ze } from "react/jsx-runtime";
import { useTheme as ar, useMediaQuery as ir, Box as de, CircularProgress as sr, CssBaseline as lr, Drawer as gt, Grid as Je } from "@mui/material";
import { createTheme as Dt, alpha as J, styled as cr, useTheme as We, ThemeProvider as xt } from "@mui/material/styles";
import * as E from "react";
import { useMemo as St, useState as ye, useRef as bt, useEffect as Ye } from "react";
import wt from "axios";
import Et from "@mui/icons-material/AccountCircleRounded";
import Nt from "@mui/icons-material/DarkMode";
import kt from "@mui/icons-material/LightMode";
import Wt from "@mui/icons-material/LogoutRounded";
import dr from "@mui/icons-material/MenuRounded";
import hr from "@mui/icons-material/NotificationsOutlined";
import pr from "@mui/icons-material/SearchRounded";
import ur from "@mui/material/AppBar";
import et from "@mui/material/Avatar";
import fr from "@mui/material/Badge";
import A from "@mui/material/Box";
import ae from "@mui/material/Divider";
import V from "@mui/material/IconButton";
import mr from "@mui/material/InputAdornment";
import gr from "@mui/material/Menu";
import tt from "@mui/material/MenuItem";
import N from "@mui/material/Stack";
import xr from "@mui/material/TextField";
import Sr from "@mui/material/Toolbar";
import te from "@mui/material/Tooltip";
import Y from "@mui/material/Typography";
import br from "@mui/material/useMediaQuery";
import wr from "@mui/material/Card";
import Er from "@mui/material/CardContent";
import Lt from "@mui/material/Button";
import yr from "@mui/icons-material/AutoAwesomeRounded";
import vr from "@mui/icons-material/KeyboardArrowDownRounded";
import Rr from "@mui/icons-material/KeyboardArrowUpRounded";
import zt from "@mui/material/Collapse";
import Ce from "@mui/material/ListItemButton";
import pe from "@mui/material/ListItemIcon";
import ue from "@mui/material/ListItemText";
import Cr from "@mui/icons-material/ExpandLess";
import Ir from "@mui/icons-material/ExpandMore";
import Tr from "@mui/material/MenuList";
import Or from "@mui/material/Paper";
import _r from "@mui/material/Popper";
import Ar from "@mui/material/Drawer";
const I = Dt(), yt = [...I.shadows], j = {
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
}, ve = {
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
}, Re = {
  300: "hsl(0, 90%, 65%)",
  400: "hsl(0, 90%, 40%)",
  500: "hsl(0, 90%, 30%)",
  700: "hsl(0, 94%, 18%)",
  800: "hsl(0, 95%, 12%)"
}, Dr = (e) => (yt[1] = e === "dark" ? "hsla(220, 30%, 5%, 0.7) 0px 4px 16px 0px, hsla(220, 25%, 10%, 0.8) 0px 8px 16px -5px" : "hsla(220, 30%, 5%, 0.07) 0px 4px 16px 0px, hsla(220, 25%, 10%, 0.07) 0px 8px 16px -5px", {
  palette: {
    mode: e,
    primary: {
      light: j[200],
      main: j[400],
      dark: j[700],
      contrastText: j[50],
      ...e === "dark" && {
        contrastText: j[50],
        light: j[300],
        main: j[400],
        dark: j[700]
      }
    },
    info: {
      light: j[100],
      main: j[300],
      dark: j[600],
      contrastText: k[50],
      ...e === "dark" && {
        contrastText: j[300],
        light: j[500],
        main: j[700],
        dark: j[900]
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
      light: Re[300],
      main: Re[400],
      dark: Re[800],
      ...e === "dark" && {
        light: Re[400],
        main: Re[500],
        dark: Re[700]
      }
    },
    success: {
      light: ve[300],
      main: ve[400],
      dark: ve[800],
      ...e === "dark" && {
        light: ve[400],
        main: ve[500],
        dark: ve[700]
      }
    },
    grey: {
      ...k
    },
    divider: e === "dark" ? J(k[700], 0.6) : J(k[300], 0.4),
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
      warning: he[400],
      ...e === "dark" && {
        primary: "hsl(0, 0%, 100%)",
        secondary: k[400]
      }
    },
    action: {
      hover: J(k[200], 0.2),
      selected: `${J(k[200], 0.3)}`,
      ...e === "dark" && {
        hover: J(k[600], 0.2),
        selected: J(k[600], 0.3)
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
  shadows: yt
});
J(k[300], 0.4), J(k[200], 0.2), `${J(k[200], 0.3)}`, J(k[700], 0.6), J(k[600], 0.2), J(k[600], 0.3);
I.typography.pxToRem(48), I.typography.pxToRem(36), I.typography.pxToRem(30), I.typography.pxToRem(24), I.typography.pxToRem(20), I.typography.pxToRem(18), I.typography.pxToRem(18), I.typography.pxToRem(14), I.typography.pxToRem(14), I.typography.pxToRem(14), I.typography.pxToRem(12);
[
  ...I.shadows.slice(2)
];
class T extends Error {
  code;
  originalError;
  timestamp;
  constructor(r, o, i = null) {
    super(r), this.name = "AuthError", this.code = o, this.originalError = i, this.timestamp = (/* @__PURE__ */ new Date()).toISOString();
  }
}
const D = {
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
}, ne = {
  ACCESS_TOKEN: "accessToken",
  REFRESH_TOKEN: "refreshToken",
  USER: "user"
}, Nr = () => {
  if (!(typeof window > "u" || !window.localStorage))
    try {
      const e = localStorage.getItem(ne.ACCESS_TOKEN), r = localStorage.getItem(ne.REFRESH_TOKEN), o = localStorage.getItem(ne.USER);
      e && !localStorage.getItem(K.ACCESS_TOKEN) && localStorage.setItem(K.ACCESS_TOKEN, e), r && !localStorage.getItem(K.REFRESH_TOKEN) && localStorage.setItem(K.REFRESH_TOKEN, r), o && !localStorage.getItem(K.USER) && localStorage.setItem(K.USER, o), (e || r || o) && (localStorage.removeItem(ne.ACCESS_TOKEN), localStorage.removeItem(ne.REFRESH_TOKEN), localStorage.removeItem(ne.USER));
    } catch (e) {
      console.warn("Failed to migrate legacy localStorage keys:", e);
    }
}, qe = (e) => {
  try {
    if (typeof window > "u")
      return console.warn("localStorage access attempted on server side"), null;
    if (!window.localStorage)
      throw new T("localStorage is not available", D.STORAGE_ACCESS_DENIED);
    return window.localStorage.getItem(e);
  } catch (r) {
    throw r.name === "QuotaExceededError" ? (console.error("Storage quota exceeded"), new T(
      "Storage quota exceeded. Please clear browser data.",
      D.STORAGE_ACCESS_DENIED,
      r
    )) : r.name === "SecurityError" ? (console.error("localStorage access denied (private browsing or security settings)"), new T(
      "Access to localStorage is denied. Please check browser settings.",
      D.STORAGE_ACCESS_DENIED,
      r
    )) : (console.error("Unexpected error accessing localStorage:", r.name), new T("Failed to access storage", D.STORAGE_ACCESS_DENIED, r));
  }
}, Qe = (e, r) => {
  try {
    if (typeof window > "u")
      return console.warn("localStorage write attempted on server side"), !1;
    if (!window.localStorage)
      throw new T("localStorage is not available", D.STORAGE_ACCESS_DENIED);
    return window.localStorage.setItem(e, r), !0;
  } catch (o) {
    throw o.name === "QuotaExceededError" ? (console.error("Storage quota exceeded"), new T(
      "Storage quota exceeded. Please clear browser data.",
      D.STORAGE_ACCESS_DENIED,
      o
    )) : o.name === "SecurityError" ? (console.error("localStorage write denied (private browsing or security settings)"), new T(
      "Access to localStorage is denied. Please check browser settings.",
      D.STORAGE_ACCESS_DENIED,
      o
    )) : (console.error("Unexpected error writing to localStorage:", o.name), new T("Failed to write to storage", D.STORAGE_ACCESS_DENIED, o));
  }
}, Ft = (e) => {
  try {
    return typeof window > "u" ? (console.warn("localStorage removal attempted on server side"), !1) : window.localStorage ? (window.localStorage.removeItem(e), !0) : (console.warn("localStorage is not available"), !1);
  } catch (r) {
    return r.name !== "SecurityError" && console.warn(`Could not remove localStorage key "${e}"`), !1;
  }
}, Ne = () => {
  try {
    Nr();
    const e = qe(K.ACCESS_TOKEN), r = qe(K.REFRESH_TOKEN), o = qe(K.USER);
    let i = null;
    if (o)
      try {
        i = JSON.parse(o);
      } catch {
        o && o !== "null" && o !== "undefined" && console.warn("Invalid user data in localStorage, clearing:", o.substring(0, 50)), Ft(K.USER);
      }
    return {
      accessToken: e,
      refreshToken: r,
      user: i
    };
  } catch (e) {
    throw e instanceof T ? e : new T("Failed to retrieve authentication tokens", D.UNKNOWN_ERROR, e);
  }
}, kr = () => {
  try {
    const { accessToken: e, refreshToken: r } = Ne();
    return !(e || r) ? {
      isAuthenticated: !1,
      error: new T("No authentication tokens found", D.TOKEN_NOT_FOUND)
    } : {
      isAuthenticated: !0,
      error: null
    };
  } catch (e) {
    return console.error("Authentication check failed:", e), {
      isAuthenticated: !1,
      error: e instanceof T ? e : new T("Authentication check failed", D.UNKNOWN_ERROR, e)
    };
  }
}, Mt = (e, r, o = null) => {
  try {
    if (!e && !r)
      throw new T("At least one token must be provided", D.TOKEN_INVALID);
    return e && Qe(K.ACCESS_TOKEN, e), r && Qe(K.REFRESH_TOKEN, r), o && Qe(K.USER, JSON.stringify(o)), {
      success: !0,
      error: null
    };
  } catch (i) {
    return console.error("Failed to store authentication tokens:", i), {
      success: !1,
      error: i instanceof T ? i : new T("Failed to store tokens", D.UNKNOWN_ERROR, i)
    };
  }
}, ke = () => {
  try {
    return [
      K.ACCESS_TOKEN,
      K.REFRESH_TOKEN,
      K.USER,
      // Also clear legacy keys for complete cleanup
      ne.ACCESS_TOKEN,
      ne.REFRESH_TOKEN,
      ne.USER
    ].map((i) => Ft(i)).every((i) => i) || console.warn("Some tokens could not be removed from localStorage"), {
      success: !0,
      error: null
    };
  } catch (e) {
    return console.error("Failed to clear authentication tokens:", e), {
      success: !1,
      error: e instanceof T ? e : new T("Failed to clear tokens", D.LOGOUT_FAILED, e)
    };
  }
}, Wr = () => {
  try {
    const { user: e } = Ne();
    return {
      user: e,
      error: null
    };
  } catch (e) {
    return console.error("Failed to get current user:", e), {
      user: null,
      error: e instanceof T ? e : new T("Failed to retrieve user data", D.UNKNOWN_ERROR, e)
    };
  }
}, Xo = (e) => {
  if (!(e instanceof T))
    return "An unexpected error occurred. Please try again.";
  switch (e.code) {
    case D.STORAGE_ACCESS_DENIED:
      return "Unable to access browser storage. Please check your browser settings and disable private browsing if enabled.";
    case D.TOKEN_NOT_FOUND:
      return "You are not logged in. Please sign in to continue.";
    case D.TOKEN_INVALID:
      return "Your session is invalid. Please sign in again.";
    case D.TOKEN_EXPIRED:
      return "Your session has expired. Please sign in again.";
    case D.LOGOUT_FAILED:
      return "Failed to log out properly. Please clear your browser cache and try again.";
    case D.UNKNOWN_ERROR:
    default:
      return "An unexpected error occurred. Please try again or contact support if the problem persists.";
  }
}, rt = (e, r = "Unknown") => {
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
}, Lr = (e) => {
  if (!e)
    throw new Error("API base URL is required to create axios client");
  const r = wt.create({
    baseURL: e,
    headers: {
      "Content-Type": "application/json"
    }
  });
  let o = !1, i = null, c = [];
  const h = (s, a) => {
    c.forEach(({ resolve: m, reject: y }) => {
      s ? y(s) : a && m(a);
    }), c = [];
  };
  return r.interceptors.request.use(
    (s) => {
      const { accessToken: a } = Ne();
      return a && s.headers && (s.headers.Authorization = `Bearer ${a}`), s;
    },
    (s) => Promise.reject(s)
  ), r.interceptors.response.use(
    (s) => s,
    async (s) => {
      const a = s.config, m = s.response?.status, y = a?.url || "", v = y.includes("/auth/refresh");
      if (m !== 401 || a._retry || v)
        return Promise.reject(s);
      a._retry = !0;
      const { refreshToken: O } = Ne();
      if (!O) {
        const f = new Error(
          "No refresh token available for token refresh"
        );
        return rt(f, "AxiosClient - Token Refresh"), ke(), typeof window < "u" && (window.location.href = "/login"), Promise.reject(s);
      }
      if (o && i)
        return new Promise((f, b) => {
          c.push({ resolve: f, reject: b });
        }).then((f) => {
          const {
            accessToken: b,
            refreshToken: d
          } = f;
          if (a.headers && (a.headers.Authorization = `Bearer ${b}`), y.includes("/auth/logout"))
            try {
              if (typeof a.data == "string") {
                const R = JSON.parse(
                  a.data || "{}"
                );
                R.refresh_token = d, a.data = JSON.stringify(R);
              } else a.data && typeof a.data == "object" ? a.data.refresh_token = d : a.data = JSON.stringify({
                refresh_token: d
              });
            } catch {
              a.data = JSON.stringify({
                refresh_token: d
              });
            }
          return r(a);
        }).catch((f) => Promise.reject(f));
      o = !0, i = wt.post(
        `${e}/auth/refresh`,
        {
          refresh_token: O
        }
      );
      try {
        const f = await i, { accessToken: b, refreshToken: d } = f.data;
        if (Mt(b, d, null), h(null, {
          accessToken: b,
          refreshToken: d
        }), a.headers && (a.headers.Authorization = `Bearer ${b}`), y.includes("/auth/logout"))
          try {
            if (typeof a.data == "string") {
              const R = JSON.parse(
                a.data || "{}"
              );
              R.refresh_token = d, a.data = JSON.stringify(R);
            } else a.data && typeof a.data == "object" ? a.data.refresh_token = d : a.data = JSON.stringify({
              refresh_token: d
            });
          } catch {
            a.data = JSON.stringify({
              refresh_token: d
            });
          }
        return r(a);
      } catch (f) {
        return rt(
          f,
          "AxiosClient - Token Refresh Failed"
        ), h(f), ke(), typeof window < "u" && (window.location.href = "/login"), Promise.reject(f);
      } finally {
        o = !1, i = null;
      }
    }
  ), r;
}, zr = async (e, r) => {
  const { accessToken: o, refreshToken: i } = Ne();
  if (o)
    return !0;
  if (i)
    try {
      const c = await e.post("/auth/refresh", {
        refresh_token: i
      });
      if (c.data.success && c.data.accessToken)
        return Mt(c.data.accessToken, c.data.refreshToken || null, null), !0;
    } catch (c) {
      rt(c, "TokenValidator - Refresh Failed");
    }
  return ke(), r ? r() : window.location.href = "/login", !1;
}, Fr = cr(Sr)({
  width: "100%",
  padding: "8px 16px",
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
  gap: "16px",
  flexShrink: 0
}), Mr = ({
  appName: e = "Dashboard",
  pageName: r = "Home",
  onMenuClick: o,
  showMenuButton: i = !0,
  isMobile: c = !1,
  sidebarCollapsed: h,
  showBrand: s = !0,
  logo: a,
  leftOffsetPx: m = 0,
  headerStyles: y,
  userName: v = "User Name",
  userEmail: O,
  userAvatar: f,
  onProfileClick: b,
  onAccountClick: d,
  onSettingsClick: R,
  showSettings: W = !0,
  onLogout: M,
  showNotifications: U = !1,
  notificationCount: L = 0,
  onNotificationBellClick: C,
  theme: z = "light",
  showThemeToggler: g = !1,
  onThemeToggle: l,
  showSearchbar: w = !0,
  searchValue: H,
  onSearchChange: q,
  onSearchSubmit: u,
  showProfile: F = !0,
  userRole: X,
  accentColor: re = "#01584f",
  contentBackgroundColor: fe = "#f2f9fc",
  navbarBackground: se = "#ff0000",
  navbarAccentColor: $ = "#000000",
  rightExtraContent: Z = [],
  customNavbar: me,
  customNavbarProps: ge
}) => {
  const xe = br((S) => S.breakpoints.up("md")), [Se, le] = E.useState(null), be = !!Se, n = z === "dark", x = n ? "text.primary" : re, B = n ? "Switch to light mode" : "Switch to dark mode", _ = h === void 0 ? "Open navigation menu" : h ? "Expand sidebar" : "Collapse sidebar", P = (S) => {
    q?.(S.target.value);
  }, oe = (S) => {
    S.key === "Enter" && u && H && u(H);
  }, G = (S) => S ? S.charAt(0).toUpperCase() + S.slice(1).toLowerCase() : "User", ee = (S) => {
    le(S.currentTarget);
  }, Le = () => {
    le(null);
  }, ze = (S) => {
    S?.(), Le();
  };
  return /* @__PURE__ */ t(
    ur,
    {
      position: "fixed",
      sx: {
        boxShadow: 0,
        background: se,
        top: "var(--template-frame-height, 0px)",
        // Inset from the left so the bar starts at the edge of a
        // full-height sidebar; full width otherwise.
        left: m,
        width: m ? `calc(100% - ${m}px)` : "100%",
        zIndex: 1,
        height: "60px",
        ...y
      },
      children: /* @__PURE__ */ p(Fr, { variant: "dense", sx: { height: "100%" }, children: [
        /* @__PURE__ */ p(
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
              i && /* @__PURE__ */ t(te, { title: _, placement: "bottom", children: /* @__PURE__ */ t(
                V,
                {
                  "aria-label": _,
                  onClick: o,
                  disableFocusRipple: !0,
                  sx: {
                    // Nudge left so the icon centers on the sidebar
                    // icon rail (72px wide → 36px center) below it.
                    ml: -1,
                    color: x,
                    "&:hover": {
                      backgroundColor: "action.hover"
                    },
                    "&:focus, &:focus-visible": {
                      outline: "none"
                    }
                  },
                  children: /* @__PURE__ */ t(dr, {})
                }
              ) }),
              s && /* @__PURE__ */ p(
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
                      Y,
                      {
                        variant: "h6",
                        sx: {
                          color: x,
                          fontWeight: 600,
                          fontSize: "20px",
                          lineHeight: 1,
                          textTransform: "uppercase"
                        },
                        children: e
                      }
                    ),
                    a ? /* @__PURE__ */ t(
                      A,
                      {
                        sx: {
                          display: "flex",
                          alignItems: "center",
                          flexShrink: 0,
                          color: x,
                          "& svg": {
                            color: "inherit",
                            fill: "currentColor"
                          }
                        },
                        children: a
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
              me ? /* @__PURE__ */ t(me, { ...ge || {} }) : w && xe && /* @__PURE__ */ t(
                xr,
                {
                  placeholder: "Search for deals or documents...",
                  value: H || "",
                  onChange: P,
                  onKeyDown: oe,
                  size: "small",
                  sx: {
                    width: "400px",
                    "& .MuiOutlinedInput-root": {
                      backgroundColor: fe,
                      borderRadius: "8px",
                      "& fieldset": {
                        borderColor: "transparent"
                      },
                      "&:hover fieldset": {
                        borderColor: "transparent"
                      },
                      "&.Mui-focused fieldset": {
                        borderColor: re
                      }
                    }
                  },
                  InputProps: {
                    startAdornment: /* @__PURE__ */ t(mr, { position: "start", children: /* @__PURE__ */ t(
                      pr,
                      {
                        sx: {
                          color: $
                        }
                      }
                    ) })
                  }
                }
              )
            ]
          }
        ),
        /* @__PURE__ */ p(
          N,
          {
            direction: "row",
            sx: {
              alignItems: "center",
              gap: 1.5,
              flexShrink: 0
            },
            children: [
              g && !c && /* @__PURE__ */ t(te, { title: B, placement: "bottom", children: /* @__PURE__ */ t("span", { children: /* @__PURE__ */ t(
                V,
                {
                  size: "small",
                  onClick: l,
                  disabled: !l,
                  "aria-label": B,
                  sx: {
                    color: $,
                    "&:hover": {
                      backgroundColor: "action.hover"
                    }
                  },
                  children: n ? /* @__PURE__ */ t(kt, { fontSize: "small" }) : /* @__PURE__ */ t(Nt, { fontSize: "small" })
                }
              ) }) }),
              U && /* @__PURE__ */ t(
                fr,
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
                    V,
                    {
                      size: "small",
                      onClick: C,
                      "aria-label": L ? `Notifications, ${L} unread` : "Notifications",
                      sx: { color: $ },
                      children: /* @__PURE__ */ t(hr, {})
                    }
                  )
                }
              ),
              U && F && !c && /* @__PURE__ */ t(
                ae,
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
              F && !c && /* @__PURE__ */ p(Ze, { children: [
                /* @__PURE__ */ p(
                  N,
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
                      f ? /* @__PURE__ */ t(
                        et,
                        {
                          src: f,
                          sx: { width: 32, height: 32 }
                        }
                      ) : /* @__PURE__ */ t(
                        Et,
                        {
                          sx: {
                            width: 32,
                            height: 32,
                            color: $
                          }
                        }
                      ),
                      /* @__PURE__ */ p(
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
                                  color: $,
                                  fontWeight: 500,
                                  lineHeight: 1.2,
                                  overflow: "hidden",
                                  textOverflow: "ellipsis",
                                  whiteSpace: "nowrap",
                                  maxWidth: "150px"
                                },
                                children: v
                              }
                            ),
                            /* @__PURE__ */ t(
                              Y,
                              {
                                variant: "caption",
                                sx: {
                                  color: $,
                                  lineHeight: 1.2,
                                  overflow: "hidden",
                                  textOverflow: "ellipsis",
                                  whiteSpace: "nowrap",
                                  maxWidth: "150px"
                                },
                                children: G(X)
                              }
                            )
                          ]
                        }
                      )
                    ]
                  }
                ),
                /* @__PURE__ */ p(
                  gr,
                  {
                    anchorEl: Se,
                    open: be,
                    onClose: Le,
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
                      W && [
                        /* @__PURE__ */ t(
                          tt,
                          {
                            onClick: () => ze(R),
                            children: "Settings"
                          },
                          "settings"
                        ),
                        /* @__PURE__ */ t(ae, {}, "settings-divider")
                      ],
                      /* @__PURE__ */ p(
                        tt,
                        {
                          onClick: () => ze(M),
                          sx: {
                            color: "error.main",
                            "&:hover": {
                              color: "error.dark"
                            }
                          },
                          children: [
                            /* @__PURE__ */ t(Y, { sx: { flexGrow: 1 }, children: "Logout" }),
                            /* @__PURE__ */ t(Wt, { fontSize: "small" })
                          ]
                        }
                      )
                    ]
                  }
                )
              ] }),
              Z.length !== 0 && Z.map((S) => S.type === "divider" ? /* @__PURE__ */ t(
                ae,
                {
                  orientation: "vertical",
                  flexItem: !0,
                  sx: {
                    borderColor: "rgba(0, 0, 0, 0.12)",
                    height: "24px",
                    alignSelf: "center"
                  }
                },
                S.key
              ) : S.type === "profile" ? /* @__PURE__ */ t(
                te,
                {
                  title: S.tooltip || "",
                  disableHoverListener: !S.tooltip,
                  arrow: !0,
                  children: /* @__PURE__ */ p(
                    N,
                    {
                      direction: "row",
                      onClick: S.disabled ? void 0 : S.onClick,
                      sx: {
                        alignItems: "center",
                        gap: 1,
                        cursor: S.disabled ? "not-allowed" : "pointer",
                        borderRadius: "8px",
                        padding: "4px 8px",
                        opacity: S.disabled ? 0.5 : 1,
                        transition: "opacity 0.2s",
                        ...!S.disabled && {
                          "&:hover": {
                            backgroundColor: "action.hover"
                          }
                        }
                      },
                      children: [
                        S.avatar ? /* @__PURE__ */ t(
                          et,
                          {
                            src: S.avatar,
                            sx: {
                              width: 32,
                              height: 32
                            }
                          }
                        ) : /* @__PURE__ */ t(
                          Et,
                          {
                            sx: {
                              width: 32,
                              height: 32,
                              color: $
                            }
                          }
                        ),
                        /* @__PURE__ */ p(
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
                                    color: $,
                                    fontWeight: 500,
                                    lineHeight: 1.2,
                                    overflow: "hidden",
                                    textOverflow: "ellipsis",
                                    whiteSpace: "nowrap",
                                    maxWidth: "150px"
                                  },
                                  children: S.name
                                }
                              ),
                              /* @__PURE__ */ t(
                                Y,
                                {
                                  variant: "caption",
                                  sx: {
                                    color: $,
                                    lineHeight: 1.2,
                                    overflow: "hidden",
                                    textOverflow: "ellipsis",
                                    whiteSpace: "nowrap",
                                    maxWidth: "150px"
                                  },
                                  children: S.role
                                }
                              )
                            ]
                          }
                        )
                      ]
                    }
                  )
                },
                S.key
              ) : null)
            ]
          }
        )
      ] })
    }
  );
}, ot = ({
  title: e = "",
  message: r = "",
  buttonText: o = "",
  onButtonClick: i,
  show: c = !0
}) => c ? /* @__PURE__ */ t(wr, { variant: "outlined", sx: { m: 1.5, flexShrink: 0 }, children: /* @__PURE__ */ p(Er, { children: [
  /* @__PURE__ */ t(yr, { fontSize: "small" }),
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
    Lt,
    {
      variant: "contained",
      size: "small",
      fullWidth: !0,
      onClick: i,
      children: o
    }
  )
] }) }) : null, De = (e, r) => r ? e.path && r === e.path ? !0 : e.subitems?.some((o) => o.path === r) ?? !1 : !1, $e = (e, r) => !!(r && e.path === r), Bt = (e) => {
  const r = Ut(e);
  if (!r)
    return "#ffffff";
  const [o, i, c] = r.map((s) => {
    const a = s / 255;
    return a <= 0.03928 ? a / 12.92 : ((a + 0.055) / 1.055) ** 2.4;
  });
  return 0.2126 * o + 0.7152 * i + 0.0722 * c > 0.5 ? "#0b1f1c" : "#ffffff";
}, Kt = (e) => {
  const r = Ut(e);
  if (!r)
    return "rgba(1, 88, 79, 0.12)";
  const [o, i, c] = r;
  return `rgba(${o}, ${i}, ${c}, 0.14)`;
}, Ut = (e) => {
  let r = e.trim().replace(/^#/, "");
  if (r.length === 3 && (r = r.split("").map((i) => i + i).join("")), r.length !== 6 || /[^0-9a-fA-F]/.test(r))
    return null;
  const o = parseInt(r, 16);
  return [o >> 16 & 255, o >> 8 & 255, o & 255];
}, Ht = () => typeof window < "u" && !!window.localStorage, $t = (e) => {
  if (!Ht())
    return null;
  try {
    const r = window.localStorage.getItem(e);
    return r === null ? null : r === "true";
  } catch (r) {
    return console.warn("Failed to read sidebar collapsed state:", r), null;
  }
}, Br = (e, r) => {
  if (Ht())
    try {
      window.localStorage.setItem(e, r ? "true" : "false");
    } catch (o) {
      console.warn("Failed to persist sidebar collapsed state:", o);
    }
}, Kr = 264, Ur = 72, Hr = "lumora:sidebar-collapsed", $r = "width 200ms ease", Pr = 16, Gr = 14, vt = "0.7rem", Rt = 22, Ae = ({ text: e, variant: r = "body1", center: o = !1, fontSize: i }) => {
  const c = E.useRef(null), [h, s] = E.useState(!1), a = E.useCallback(() => {
    const m = c.current;
    m && s(m.scrollWidth > m.clientWidth + 0.5);
  }, []);
  return E.useLayoutEffect(() => {
    a();
  }, [a, e]), E.useEffect(() => {
    const m = c.current;
    if (!m)
      return;
    const y = new ResizeObserver(() => a());
    return y.observe(m), () => y.disconnect();
  }, [a]), /* @__PURE__ */ t(
    te,
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
          ref: c,
          component: "span",
          variant: r,
          sx: {
            display: "block",
            width: o ? "100%" : void 0,
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
            color: "inherit",
            ...i ? { fontSize: i } : {},
            ...o ? { textAlign: "center", lineHeight: 1.1 } : {}
          },
          children: e
        }
      )
    }
  );
}, Ct = ({
  open: e,
  size: r = Pr
}) => e ? /* @__PURE__ */ t(Rr, { sx: { fontSize: r, opacity: 0.75 } }) : /* @__PURE__ */ t(vr, { sx: { fontSize: r, opacity: 0.75 } }), jr = ({
  mainLinks: e,
  secondaryLinks: r = [],
  activePath: o,
  onLinkClick: i,
  activeAccentColor: c = "#01584f",
  groupAccentColor: h,
  activeForegroundColor: s,
  foregroundColor: a,
  surfaceBackgroundColor: m,
  collapsed: y,
  defaultCollapsed: v = !1,
  persistKey: O = Hr,
  expandedWidth: f = Kr,
  collapsedWidth: b = Ur,
  showLabels: d = !1,
  topInsetPx: R = 0
}) => {
  const W = We(), M = W.palette.mode === "dark", U = y !== void 0, [L] = E.useState(
    () => $t(O) ?? v
  ), C = U ? !!y : L, [z, g] = E.useState(
    {}
  ), l = c, w = s ?? Bt(l), H = {
    bgcolor: l,
    color: w,
    "& .MuiListItemIcon-root": { color: w }
  }, q = {
    bgcolor: l,
    color: w,
    borderRadius: "8px"
  }, u = h ?? Kt(l), F = m ?? (M ? W.palette.background.paper : "#ffffff"), X = a ?? (M ? "text.primary" : l), re = (n) => {
    i?.(n);
  }, fe = (n, x) => {
    g((B) => ({ ...B, [n]: !x }));
  }, se = (n) => z[n.text] ?? De(n, o), $ = (n) => {
    const x = !!(n.path && o === n.path);
    return /* @__PURE__ */ p(
      Ce,
      {
        disabled: !n.path,
        selected: x,
        onClick: () => n.path && re(n.path),
        "data-testid": `sidebar-item-${n.text}`,
        "data-active": x ? "true" : "false",
        sx: {
          borderRadius: "6px",
          py: 1,
          px: 1.5,
          color: x ? w : X,
          bgcolor: x ? l : "transparent",
          "& .MuiListItemIcon-root": {
            color: x ? w : X,
            minWidth: 36
          },
          // rail-labeled: active AND hover share the highlight. collapsible:
          // keep the original subtle idle-hover tint (accent only if active).
          "&:hover": x || d ? H : { bgcolor: u },
          "&.Mui-selected": {
            bgcolor: l
          },
          "&.Mui-selected:hover": H
        },
        children: [
          /* @__PURE__ */ t(pe, { children: n.icon }),
          /* @__PURE__ */ t(
            ue,
            {
              disableTypography: !0,
              primary: /* @__PURE__ */ t(Ae, { text: n.text })
            }
          )
        ]
      },
      n.text
    );
  }, Z = (n) => {
    const x = De(n, o), B = !!(n.path && o === n.path), _ = se(n);
    return /* @__PURE__ */ p(
      A,
      {
        "data-testid": `sidebar-group-${n.text}`,
        sx: {
          borderRadius: "6px",
          bgcolor: x ? u : "transparent"
        },
        children: [
          /* @__PURE__ */ p(
            Ce,
            {
              onClick: () => fe(n.text, _),
              "data-testid": `sidebar-item-${n.text}`,
              "data-active": B ? "true" : "false",
              "aria-expanded": _,
              sx: {
                borderRadius: "6px",
                py: 1,
                px: 1.5,
                color: B ? w : X,
                bgcolor: B ? l : "transparent",
                "& .MuiListItemIcon-root": {
                  color: B ? w : X,
                  minWidth: 36
                },
                // rail-labeled highlights on hover; collapsible keeps the
                // subtle idle tint (accent only when the parent is active).
                "&:hover": B || d ? H : { bgcolor: u }
              },
              children: [
                /* @__PURE__ */ t(pe, { children: n.icon }),
                /* @__PURE__ */ t(
                  ue,
                  {
                    disableTypography: !0,
                    primary: /* @__PURE__ */ t(Ae, { text: n.text })
                  }
                ),
                /* @__PURE__ */ t(Ct, { open: _ })
              ]
            }
          ),
          /* @__PURE__ */ t(zt, { in: _, timeout: "auto", unmountOnExit: !0, children: /* @__PURE__ */ t(
            A,
            {
              "data-testid": `sidebar-children-${n.text}`,
              sx: { pb: 0.5 },
              children: n.subitems.map((P) => me(P))
            }
          ) })
        ]
      },
      n.text
    );
  }, me = (n) => {
    const x = $e(n, o);
    return /* @__PURE__ */ p(
      Ce,
      {
        selected: x,
        onClick: () => re(n.path),
        "data-testid": `sidebar-subitem-${n.text}`,
        "data-active": x ? "true" : "false",
        sx: {
          borderRadius: "6px",
          mx: 0.5,
          py: 0.75,
          pl: 4,
          color: x ? w : X,
          bgcolor: x ? l : "transparent",
          "& .MuiListItemIcon-root": {
            color: x ? w : X,
            minWidth: 32
          },
          // rail-labeled: active AND hover share the highlight. collapsible:
          // keep the original subtle idle-hover tint (accent only if active).
          "&:hover": x || d ? H : { bgcolor: "action.hover" },
          "&.Mui-selected": {
            bgcolor: l
          },
          "&.Mui-selected:hover": H
        },
        children: [
          n.icon ? /* @__PURE__ */ t(pe, { children: n.icon }) : null,
          /* @__PURE__ */ t(
            ue,
            {
              disableTypography: !0,
              primary: /* @__PURE__ */ t(Ae, { text: n.text })
            }
          )
        ]
      },
      n.path
    );
  }, ge = (n, x, B, _, P, oe) => {
    const G = !P, ee = /* @__PURE__ */ p(
      V,
      {
        "aria-label": x,
        disabled: G,
        onClick: P,
        "data-testid": oe?.testId ?? `sidebar-item-${x}`,
        "data-active": _ ? "true" : "false",
        sx: d ? {
          display: "flex",
          flexDirection: "column",
          gap: 0.25,
          width: "100%",
          maxWidth: "100%",
          height: "auto",
          // 8px padding on all sides of the item container.
          p: 1,
          borderRadius: "8px",
          color: _ ? w : X,
          bgcolor: _ ? l : "transparent",
          "& .MuiSvgIcon-root": {
            fontSize: Rt
          },
          "&:hover": q
        } : {
          // Icon-only collapsed rail (collapsible variant):
          // original hover — accent when active, else a subtle
          // tint; no foreground change.
          width: 44,
          height: 44,
          color: _ ? w : X,
          bgcolor: _ ? l : "transparent",
          borderRadius: _ ? "8px" : "50%",
          "&:hover": {
            bgcolor: _ ? l : oe?.insideGroup ? "action.hover" : u,
            borderRadius: "8px"
          }
        },
        children: [
          B,
          d ? /* @__PURE__ */ t(
            Ae,
            {
              text: x,
              variant: "caption",
              center: !0,
              fontSize: vt
            }
          ) : null
        ]
      }
    );
    return d ? G ? /* @__PURE__ */ t("span", { children: ee }, n) : /* @__PURE__ */ t(E.Fragment, { children: ee }, n) : /* @__PURE__ */ t(te, { title: x, placement: "right", arrow: !0, children: G ? /* @__PURE__ */ t("span", { children: ee }) : ee }, n);
  }, xe = (n, x) => {
    const B = De(n, o), _ = !!(n.path && o === n.path), P = /* @__PURE__ */ p(
      V,
      {
        "aria-label": n.text,
        "aria-expanded": x,
        onClick: () => fe(n.text, x),
        "data-testid": `sidebar-item-${n.text}`,
        "data-active": _ ? "true" : "false",
        sx: {
          display: "flex",
          flexDirection: "column",
          gap: d ? 0.25 : 0,
          width: d ? "100%" : 44,
          maxWidth: "100%",
          // 8px padding on all sides of the labeled item container.
          ...d ? { p: 1 } : { py: 0.75 },
          borderRadius: "10px",
          color: _ ? w : X,
          bgcolor: _ ? l : "transparent",
          // rail-labeled: active AND hover share the highlight. collapsible:
          // original behavior — accent only when active; the outer pill
          // supplies the idle-hover tint, so the button stays transparent.
          "&:hover": d ? { bgcolor: l, color: w } : {
            bgcolor: _ ? l : "transparent"
          }
        },
        children: [
          d ? /* @__PURE__ */ t(
            A,
            {
              sx: {
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                "& .MuiSvgIcon-root": {
                  fontSize: Rt
                }
              },
              children: n.icon
            }
          ) : n.icon,
          d ? /* @__PURE__ */ t(
            Ae,
            {
              text: n.text,
              variant: "caption",
              center: !0,
              fontSize: vt
            }
          ) : null,
          /* @__PURE__ */ t(Ct, { open: x, size: Gr })
        ]
      }
    ), oe = d ? P : /* @__PURE__ */ t(te, { title: n.text, placement: "right", arrow: !0, children: P });
    return /* @__PURE__ */ p(
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
          // The active group's container stays tinted. collapsible tints
          // the whole group on hover (original); rail-labeled leaves hover
          // highlighting to the individual items.
          bgcolor: B ? u : "transparent",
          ...d ? {} : { "&:hover": { bgcolor: u } }
        },
        children: [
          oe,
          x ? n.subitems.map(
            (G) => ge(
              G.path,
              G.text,
              G.icon ?? n.icon,
              $e(G, o),
              () => re(G.path),
              {
                insideGroup: !0,
                testId: `sidebar-subitem-${G.text}`
              }
            )
          ) : null
        ]
      }
    );
  }, Se = (n) => n.subitems?.length ? /* @__PURE__ */ t(E.Fragment, { children: xe(n, se(n)) }, n.text) : /* @__PURE__ */ t(
    A,
    {
      sx: {
        width: "100%",
        display: "flex",
        justifyContent: "center"
      },
      children: ge(
        n.text,
        n.text,
        n.icon,
        !!(n.path && o === n.path),
        n.path ? () => re(n.path) : void 0
      )
    },
    n.text
  ), le = (n) => C ? Se(n) : n.subitems?.length ? Z(n) : $(n), be = C ? b : f;
  return /* @__PURE__ */ p(
    A,
    {
      component: "nav",
      "aria-label": "Main sidebar",
      "data-testid": "collapsible-sidebar",
      "data-collapsed": C ? "true" : "false",
      "data-labeled": d ? "true" : "false",
      sx: {
        width: be,
        minWidth: be,
        height: "100%",
        boxSizing: "border-box",
        bgcolor: F,
        display: "flex",
        flexDirection: "column",
        overflowX: "hidden",
        overflowY: "auto",
        transition: $r,
        px: d ? 0.5 : C ? 1 : 2,
        pt: R ? `${R}px` : 1,
        pb: 2
      },
      children: [
        /* @__PURE__ */ t(
          N,
          {
            spacing: 0.5,
            sx: {
              width: "100%",
              alignItems: C ? "center" : "stretch"
            },
            children: e.map((n) => le(n))
          }
        ),
        r.length > 0 ? /* @__PURE__ */ p(A, { sx: { mt: "auto", pt: 2 }, children: [
          /* @__PURE__ */ t(ae, { sx: { mb: 1, borderColor: "divider" } }),
          /* @__PURE__ */ t(
            N,
            {
              spacing: 0.5,
              sx: {
                width: "100%",
                alignItems: C ? "center" : "stretch"
              },
              children: r.map((n) => le(n))
            }
          )
        ] }) : null
      ]
    }
  );
}, Xr = 180, It = 250, Pt = ({
  text: e,
  testId: r
}) => {
  const o = E.useRef(null), [i, c] = E.useState(!1), h = E.useCallback(() => {
    const s = o.current;
    s && c(s.scrollWidth > s.clientWidth + 0.5);
  }, []);
  return E.useLayoutEffect(() => {
    h();
  }, [h, e]), E.useEffect(() => {
    const s = o.current;
    if (!s)
      return;
    const a = new ResizeObserver(() => h());
    return a.observe(s), () => a.disconnect();
  }, [h]), /* @__PURE__ */ t(
    te,
    {
      title: e,
      placement: "right",
      arrow: !0,
      enterDelay: 400,
      disableHoverListener: !i,
      disableFocusListener: !i,
      disableTouchListener: !i,
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
}, Jr = ({
  link: e,
  activePath: r,
  onLinkClick: o,
  accentColor: i,
  isSecondary: c,
  surfaceBackgroundColor: h,
  railShowTitles: s = !1
}) => {
  const a = We(), [m, y] = E.useState(null), [v, O] = E.useState(!1), f = E.useRef(
    null
  ), b = E.useRef(null), d = E.useRef(null), R = E.useRef(!1), W = E.useRef(!1), M = E.useId(), U = () => {
    f.current && (clearTimeout(f.current), f.current = null);
  }, L = () => {
    U(), f.current = setTimeout(() => {
      O(!1), f.current = null;
    }, Xr);
  }, C = () => {
    U(), O(!0);
  };
  E.useEffect(() => {
    if (!v)
      return;
    const u = (F) => {
      F.key === "Escape" && (O(!1), d.current?.focus());
    };
    return document.addEventListener("keydown", u), () => document.removeEventListener("keydown", u);
  }, [v]), E.useEffect(() => {
    if (!v || !W.current)
      return;
    const u = globalThis.requestAnimationFrame(() => {
      b.current?.querySelector(
        '[role="menuitem"]'
      )?.focus(), W.current = !1;
    });
    return () => cancelAnimationFrame(u);
  }, [v]);
  const z = De(e, r), g = c ? 48 : 44, l = c ? "text.secondary" : i, w = c ? "#01584F" : i, H = {
    width: "100%",
    maxWidth: "100%",
    minWidth: g,
    height: "auto",
    minHeight: g,
    flexDirection: "column",
    py: 0.5,
    // Horizontal padding so labels (esp. active fill) do not touch the box edges
    px: 1,
    borderRadius: "4px",
    color: z ? "#ffffff" : l,
    backgroundColor: z ? w : "transparent",
    "&:hover": {
      backgroundColor: z ? w : "action.hover",
      borderRadius: "4px",
      color: z ? "#ffffff" : l
    }
  }, q = s ? /* @__PURE__ */ t(
    V,
    {
      ref: d,
      component: e.path ? "a" : "button",
      href: e.path || void 0,
      "aria-label": e.text,
      onFocus: () => {
        R.current || C();
      },
      onBlur: (u) => {
        const F = u.relatedTarget;
        F && b.current?.contains(F) || L();
      },
      onKeyDown: (u) => {
        u.key === "ArrowDown" && (u.preventDefault(), W.current = !0, C());
      },
      onClick: (u) => {
        u.preventDefault(), u.stopPropagation(), e.path && o?.(e.path);
      },
      "aria-haspopup": "menu",
      "aria-expanded": v,
      "aria-controls": v ? M : void 0,
      "data-testid": `rail-submenu-trigger-${e.text}`,
      sx: H,
      children: /* @__PURE__ */ p(N, { alignItems: "center", spacing: 1, sx: { width: "100%" }, children: [
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
          Pt,
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
      ref: d,
      component: e.path ? "a" : "button",
      href: e.path || void 0,
      "aria-label": e.text,
      onFocus: () => {
        R.current || C();
      },
      onBlur: (u) => {
        const F = u.relatedTarget;
        F && b.current?.contains(F) || L();
      },
      onKeyDown: (u) => {
        u.key === "ArrowDown" && (u.preventDefault(), W.current = !0, C());
      },
      onClick: (u) => {
        u.preventDefault(), u.stopPropagation(), e.path && o?.(e.path);
      },
      "aria-haspopup": "menu",
      "aria-expanded": v,
      "aria-controls": v ? M : void 0,
      "data-testid": `rail-submenu-trigger-${e.text}`,
      sx: {
        width: g,
        height: g,
        color: z ? "#ffffff" : l,
        backgroundColor: z ? w : "transparent",
        borderRadius: z ? "4px" : "50%",
        "&:hover": {
          backgroundColor: z ? w : "action.hover",
          borderRadius: "4px"
        }
      },
      children: e.icon
    }
  );
  return /* @__PURE__ */ p(
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
            ref: y,
            "data-testid": `rail-submenu-anchor-${e.text}`,
            sx: { display: "inline-flex", maxWidth: "100%" },
            onMouseEnter: () => {
              R.current = !0, C();
            },
            onMouseLeave: () => {
              R.current = !1, L();
            },
            children: s ? q : /* @__PURE__ */ t(te, { title: e.text, placement: "right", arrow: !0, children: q })
          }
        ),
        /* @__PURE__ */ t(
          _r,
          {
            open: v && !!m,
            anchorEl: m,
            placement: "right-start",
            modifiers: [{ name: "offset", options: { offset: [8, 0] } }],
            sx: { zIndex: (u) => u.zIndex.modal },
            children: /* @__PURE__ */ t(
              Or,
              {
                ref: b,
                elevation: 0,
                onMouseEnter: () => {
                  U();
                },
                onMouseLeave: L,
                "data-testid": `rail-submenu-panel-${e.text}`,
                sx: {
                  bgcolor: h,
                  backgroundImage: "none",
                  borderRadius: "4px",
                  border: "1px solid",
                  borderColor: "divider",
                  boxShadow: a.shadows[8],
                  maxWidth: It,
                  minWidth: 0,
                  py: 0.5,
                  boxSizing: "border-box"
                },
                children: /* @__PURE__ */ t(
                  Tr,
                  {
                    id: M,
                    dense: !0,
                    autoFocus: !1,
                    role: "menu",
                    sx: {
                      bgcolor: "transparent",
                      py: 0,
                      maxWidth: It
                    },
                    children: e.subitems.map((u) => /* @__PURE__ */ p(
                      tt,
                      {
                        role: "menuitem",
                        title: u.text,
                        selected: $e(u, r),
                        onClick: (F) => {
                          F.preventDefault(), o?.(u.path), O(!1);
                        },
                        sx: {
                          borderRadius: "4px",
                          mx: 0.5,
                          my: 0.125,
                          maxWidth: "100%",
                          overflow: "hidden",
                          color: c ? "text.secondary" : i,
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
                            bgcolor: w,
                            color: "#ffffff",
                            "&:hover": {
                              bgcolor: w
                            }
                          },
                          "&.Mui-focusVisible": {
                            bgcolor: "action.focus"
                          }
                        },
                        children: [
                          u.icon ? /* @__PURE__ */ t(pe, { children: u.icon }) : null,
                          /* @__PURE__ */ t(
                            ue,
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
}, Yr = ({
  link: e,
  activePath: r,
  onLinkClick: o,
  accentColor: i,
  isSecondary: c,
  railShowTitles: h = !1
}) => {
  const s = !!(e.path && r === e.path), a = c ? 48 : 44, m = c ? "text.secondary" : i, y = c ? "#01584F" : i, v = {
    width: "100%",
    maxWidth: "100%",
    minWidth: a,
    height: "auto",
    minHeight: a,
    flexDirection: "column",
    py: 0.5,
    px: 1,
    borderRadius: "4px",
    color: s ? "#ffffff" : m,
    backgroundColor: s ? y : "transparent",
    "&:hover": {
      backgroundColor: s ? y : "action.hover",
      borderRadius: "4px",
      color: s ? "#ffffff" : m
    }
  }, O = h ? /* @__PURE__ */ t(
    V,
    {
      component: e.path ? "a" : "button",
      href: e.path || void 0,
      "aria-label": e.text,
      onClick: (f) => {
        f.preventDefault(), f.stopPropagation(), e.path && o?.(e.path);
      },
      disabled: !e.path,
      sx: v,
      children: /* @__PURE__ */ p(N, { alignItems: "center", spacing: 1, sx: { width: "100%" }, children: [
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
          Pt,
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
      onClick: (f) => {
        f.preventDefault(), f.stopPropagation(), e.path && o?.(e.path);
      },
      disabled: !e.path,
      sx: {
        width: a,
        height: a,
        color: s ? "#ffffff" : m,
        backgroundColor: s ? y : "transparent",
        borderRadius: s ? "4px" : "50%",
        "&:hover": {
          backgroundColor: s ? y : "action.hover",
          borderRadius: "4px"
        }
      },
      children: e.icon
    }
  );
  return h ? O : /* @__PURE__ */ t(te, { title: e.text, placement: "right", arrow: !0, children: O });
}, qr = ({
  link: e,
  expanded: r,
  onToggle: o,
  activePath: i,
  onLinkClick: c,
  accentColor: h,
  groupTint: s,
  activeFg: a,
  isSecondary: m
}) => {
  const y = De(e, i), v = !!(e.path && i === e.path), O = We().palette.mode === "dark", f = m ? "text.secondary" : O ? "text.primary" : h, b = m ? "#01584F" : h;
  return /* @__PURE__ */ p(
    A,
    {
      sx: {
        borderRadius: "6px",
        bgcolor: y ? s : "transparent"
      },
      children: [
        /* @__PURE__ */ p(
          Ce,
          {
            onClick: () => e.path ? c?.(e.path) : o(),
            sx: {
              py: 1.5,
              px: 2,
              color: v ? a : f,
              bgcolor: v ? b : "transparent",
              "&:hover": {
                bgcolor: v ? b : s
              }
            },
            "data-testid": `drawer-expand-trigger-${e.text}`,
            children: [
              /* @__PURE__ */ t(pe, { sx: { color: "inherit", minWidth: 40 }, children: e.icon }),
              /* @__PURE__ */ t(ue, { primary: e.text }),
              /* @__PURE__ */ t(
                V,
                {
                  size: "small",
                  edge: "end",
                  "aria-label": r ? `Collapse ${e.text}` : `Expand ${e.text}`,
                  onClick: (d) => {
                    d.stopPropagation(), o();
                  },
                  sx: { color: "inherit" },
                  "data-testid": `drawer-expand-chevron-${e.text}`,
                  children: r ? /* @__PURE__ */ t(Cr, {}) : /* @__PURE__ */ t(Ir, {})
                }
              )
            ]
          }
        ),
        /* @__PURE__ */ t(zt, { in: r, timeout: "auto", unmountOnExit: !0, children: /* @__PURE__ */ t(A, { component: "nav", "aria-label": e.text, children: e.subitems.map((d) => {
          const R = $e(d, i);
          return /* @__PURE__ */ p(
            Ce,
            {
              onClick: () => c?.(d.path),
              sx: {
                pl: 4,
                py: 1,
                color: R ? a : f,
                bgcolor: R ? b : "transparent",
                "& .MuiListItemIcon-root": {
                  color: "inherit"
                },
                "&:hover": {
                  bgcolor: R ? b : "action.hover"
                }
              },
              children: [
                d.icon ? /* @__PURE__ */ t(pe, { sx: { minWidth: 36 }, children: d.icon }) : null,
                /* @__PURE__ */ t(ue, { primary: d.text })
              ]
            },
            d.path
          );
        }) }) })
      ]
    }
  );
}, Qr = ({
  link: e,
  activePath: r,
  onLinkClick: o,
  accentColor: i,
  groupTint: c,
  activeFg: h,
  isSecondary: s
}) => {
  const a = !!(e.path && r === e.path), m = We().palette.mode === "dark", y = s ? "text.secondary" : m ? "text.primary" : i, v = s ? "#01584F" : i;
  return /* @__PURE__ */ p(
    Ce,
    {
      disabled: !e.path,
      onClick: () => e.path && o?.(e.path),
      sx: {
        py: 1.5,
        px: 2,
        color: a ? h : y,
        bgcolor: a ? v : "transparent",
        "&:hover": {
          bgcolor: a ? v : c
        }
      },
      children: [
        /* @__PURE__ */ t(pe, { sx: { color: "inherit", minWidth: 40 }, children: e.icon }),
        /* @__PURE__ */ t(ue, { primary: e.text })
      ]
    }
  );
}, He = () => /* @__PURE__ */ t(
  A,
  {
    sx: {
      width: "100%",
      display: "flex",
      justifyContent: "center"
    },
    children: /* @__PURE__ */ t(ae, { sx: { width: "60%", borderColor: "divider" } })
  }
), Gt = ({
  variant: e,
  mainLinks: r,
  secondaryLinks: o = [],
  activePath: i,
  onLinkClick: c,
  accentColor: h = "#01584f",
  groupAccentColor: s,
  surfaceBackgroundColor: a,
  railShowTitles: m = !1
}) => {
  const y = We(), v = a ?? y.palette.background.paper, O = Bt(h), f = s ?? Kt(h), b = (g) => {
    c && c(g);
  }, [d, R] = E.useState({}), [W, M] = E.useState({}), U = (g) => {
    R((l) => ({
      ...l,
      [g]: !l[g]
    }));
  }, L = (g) => {
    M((l) => ({
      ...l,
      [g]: !l[g]
    }));
  }, C = (g, l) => g.subitems?.length ? /* @__PURE__ */ t(
    Jr,
    {
      link: g,
      activePath: i,
      onLinkClick: b,
      accentColor: h,
      isSecondary: l,
      surfaceBackgroundColor: v,
      railShowTitles: m
    }
  ) : /* @__PURE__ */ t(
    Yr,
    {
      link: g,
      activePath: i,
      onLinkClick: b,
      accentColor: h,
      isSecondary: l,
      railShowTitles: m
    }
  ), z = (g, l, w) => {
    if (g.subitems?.length) {
      const H = w ? !!W[l] : !!d[l];
      return /* @__PURE__ */ t(
        qr,
        {
          link: g,
          expanded: H,
          onToggle: () => w ? L(l) : U(l),
          activePath: i,
          onLinkClick: b,
          accentColor: h,
          groupTint: f,
          activeFg: O,
          isSecondary: w
        }
      );
    }
    return /* @__PURE__ */ t(
      Qr,
      {
        link: g,
        activePath: i,
        onLinkClick: b,
        accentColor: h,
        groupTint: f,
        activeFg: O,
        isSecondary: w
      }
    );
  };
  return e === "drawer" ? /* @__PURE__ */ p(
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
        /* @__PURE__ */ t(N, { sx: { width: "100%" }, children: r.map((g, l) => /* @__PURE__ */ p(E.Fragment, { children: [
          z(g, l, !1),
          l < r.length - 1 ? /* @__PURE__ */ t(He, {}) : null
        ] }, l)) }),
        o.length > 0 ? /* @__PURE__ */ p(Ze, { children: [
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
                ae,
                {
                  sx: { width: "60%", borderColor: "divider" }
                }
              )
            }
          ),
          /* @__PURE__ */ t(A, { sx: { mt: "auto", pb: 2 }, children: /* @__PURE__ */ t(N, { sx: { width: "100%" }, children: o.map((g, l) => /* @__PURE__ */ p(E.Fragment, { children: [
            z(g, l, !0),
            l < o.length - 1 ? /* @__PURE__ */ t(He, {}) : null
          ] }, l)) }) })
        ] }) : null
      ]
    }
  ) : /* @__PURE__ */ p(
    N,
    {
      sx: {
        flexGrow: 1,
        width: "100%",
        boxSizing: "border-box",
        justifyContent: "flex-start",
        alignItems: "center",
        pt: 2,
        gap: m ? 1.25 : 1
      },
      children: [
        r.map((g, l) => /* @__PURE__ */ p(E.Fragment, { children: [
          C(g, !1),
          l < r.length - 1 ? /* @__PURE__ */ t(He, {}) : null
        ] }, l)),
        o.length > 0 ? /* @__PURE__ */ p(Ze, { children: [
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
                ae,
                {
                  sx: { width: "60%", borderColor: "divider" }
                }
              )
            }
          ),
          /* @__PURE__ */ t(A, { sx: { mt: "auto", pb: 2 }, children: /* @__PURE__ */ t(
            N,
            {
              gap: m ? 1.25 : 1,
              alignItems: "center",
              children: o.map((g, l) => /* @__PURE__ */ p(E.Fragment, { children: [
                C(g, !0),
                l < o.length - 1 ? /* @__PURE__ */ t(He, {}) : null
              ] }, l))
            }
          ) })
        ] }) : null
      ]
    }
  );
}, Vr = ({
  open: e,
  onClose: r,
  mainLinks: o,
  secondaryLinks: i = [],
  activePath: c,
  onLinkClick: h,
  userName: s = "User Name",
  userAvatar: a,
  userRole: m,
  onLogout: y,
  theme: v = "light",
  showThemeToggler: O = !1,
  onThemeToggle: f,
  alertProps: b,
  accentColor: d = "#01584f",
  groupAccentColor: R
}) => {
  const W = v === "dark", M = W ? "Switch to light mode" : "Switch to dark mode", U = (C) => C ? C.charAt(0).toUpperCase() + C.slice(1).toLowerCase() : "User", L = (C) => {
    h?.(C), r();
  };
  return /* @__PURE__ */ t(
    Ar,
    {
      anchor: "left",
      open: e,
      onClose: r,
      sx: {
        zIndex: (C) => C.zIndex.drawer + 1,
        "& .MuiDrawer-paper": {
          backgroundImage: "none",
          backgroundColor: "background.paper"
        }
      },
      children: /* @__PURE__ */ p(
        N,
        {
          sx: {
            maxWidth: "70dvw",
            height: "100%"
          },
          children: [
            /* @__PURE__ */ p(
              N,
              {
                direction: "row",
                sx: { p: 2, gap: 1, alignItems: "center" },
                children: [
                  /* @__PURE__ */ p(
                    N,
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
                          et,
                          {
                            sizes: "small",
                            alt: s,
                            src: a,
                            sx: { width: 40, height: 40, flexShrink: 0 }
                          }
                        ),
                        /* @__PURE__ */ p(
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
                                  children: U(m)
                                }
                              )
                            ]
                          }
                        )
                      ]
                    }
                  ),
                  O && /* @__PURE__ */ t(te, { title: M, placement: "bottom", children: /* @__PURE__ */ t("span", { children: /* @__PURE__ */ t(
                    V,
                    {
                      size: "small",
                      onClick: f,
                      disabled: !f,
                      "aria-label": M,
                      children: W ? /* @__PURE__ */ t(kt, { fontSize: "small" }) : /* @__PURE__ */ t(Nt, { fontSize: "small" })
                    }
                  ) }) })
                ]
              }
            ),
            /* @__PURE__ */ t(ae, {}),
            /* @__PURE__ */ p(N, { sx: { flexGrow: 1 }, children: [
              /* @__PURE__ */ t(
                Gt,
                {
                  variant: "drawer",
                  mainLinks: o,
                  secondaryLinks: i,
                  activePath: c,
                  onLinkClick: L,
                  accentColor: d,
                  groupAccentColor: R
                }
              ),
              /* @__PURE__ */ t(ae, {})
            ] }),
            b?.show && /* @__PURE__ */ t(ot, { ...b }),
            /* @__PURE__ */ t(N, { sx: { p: 2 }, children: /* @__PURE__ */ t(
              Lt,
              {
                variant: "outlined",
                fullWidth: !0,
                startIcon: /* @__PURE__ */ t(Wt, {}),
                onClick: y,
                children: "Logout"
              }
            ) })
          ]
        }
      )
    }
  );
}, Zr = 100, Ve = 80, eo = 60, Tt = 264, Ot = 72, _t = "lumora:sidebar-collapsed", At = "width 200ms ease, left 200ms ease", Jo = ({
  children: e,
  sidebarLinks: r = [],
  secondarySidebarLinks: o = [],
  appName: i = "Dashboard",
  pageName: c = "Home",
  showHeader: h = !0,
  showSidebar: s = !0,
  showSidebarRailTitles: a = !1,
  sidebarVariant: m = "rail",
  logo: y,
  sidebarBackgroundColor: v,
  groupAccentColor: O,
  activeSidebarForegroundColor: f,
  enableRefreshToken: b = !1,
  activePath: d,
  onLinkClick: R,
  userName: W,
  userEmail: M,
  userAvatar: U,
  onLogout: L,
  onProfileClick: C,
  onAccountClick: z,
  onSettingsClick: g,
  showSettings: l = !0,
  showNotifications: w = !0,
  notificationCount: H = 0,
  NotificationSidebarContent: q,
  showSearchbar: u = !0,
  searchValue: F,
  onSearchChange: X,
  onSearchSubmit: re,
  showProfile: fe = !0,
  userRole: se,
  onVerify: $,
  alertProps: Z,
  style: me,
  headerStyles: ge,
  sidebarStyles: xe,
  contentStyles: Se,
  accentColor: le,
  sidebarAccentColor: be,
  sidebarForegroundColor: n,
  contentBackgroundColor: x,
  navbarBackground: B,
  navbarAccentColor: _,
  theme: P = "light",
  showThemeToggler: oe = !1,
  onThemeToggle: G,
  GlobalChatSidebar: ee,
  useChatSidebar: Le,
  rightExtraContent: ze,
  customNavbar: S,
  customNavbarProps: jt,
  redirectToLogin: Fe,
  apiBaseUrl: nt
}) => {
  const Xt = ar(), Q = ir(Xt.breakpoints.down("md")), at = St(
    () => Dt(Dr(P)),
    [P]
  ), Me = P === "dark", Be = le ?? "#01584f", Pe = be ?? Be, Ke = x ?? (Me ? "hsl(220, 35%, 9%)" : "#f2f9fc"), Jt = B ?? (Me ? "hsl(220, 30%, 7%)" : "#ffffff"), Yt = _ ?? (Me ? "#ffffff" : "#000000"), we = m === "collapsible", ce = m === "rail-labeled", it = we || ce, Ie = ce && s && !Q, qt = y ?? /* @__PURE__ */ t(
    de,
    {
      role: "img",
      "aria-label": `${i} logo`,
      sx: {
        width: 28,
        height: 28,
        flexShrink: 0,
        // Accent in light mode; a legible light fill in dark mode.
        bgcolor: Me ? "#ffffff" : Be,
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
  ), [Te, Qt] = ye(
    () => $t(_t) ?? !1
  ), st = (Oe) => {
    Qt(Oe), Br(_t, Oe);
  };
  let ie = 0;
  s && !Q && (ce ? ie = Ve : we ? ie = Te ? Ot : Tt : ie = Zr);
  const [lt, ct] = ye(!1), [Vt, Ge] = ye(!1), [Zt, er] = ye(!0), [tr, rr] = ye(!1), [to, Ue] = ye(null), dt = Le?.()?.isOpen ?? !1, je = bt($), ht = bt(!1), pt = St(
    () => Lr(nt),
    [nt]
  );
  Ye(() => {
    je.current = $;
  }, [$]);
  const or = () => {
    ct(!lt);
  }, nr = () => {
    ct(!1);
  }, ut = (Oe) => {
    const Ee = L(Oe);
    Ee instanceof Promise ? Ee.then(() => {
      Ue(null);
    }).catch((ft) => {
      console.error("Error in logout handler:", ft), Ue(null);
    }) : Ue(null);
  };
  return Ye(() => {
    (() => {
      try {
        const { isAuthenticated: Ee, error: ft } = kr();
        if (!Ee) {
          console.log("No session found, redirecting to login"), ke(), Fe();
          return;
        }
        if (!ht.current) {
          const { user: _e, error: Xe } = Wr();
          if (_e && !Xe) {
            const mt = {
              name: _e.name || "",
              email: _e.email || "",
              profilePicture: _e.profilePicture || "",
              role: _e.role || ""
            };
            Ue(mt), ht.current = !0, je.current && je.current(mt);
          } else Xe && console.error("Error getting user data:", Xe);
        }
        rr(!0);
      } catch (Ee) {
        console.error("Error checking session:", Ee), ke(), Fe();
      } finally {
        er(!1);
      }
    })();
  }, [Fe]), Ye(() => {
    b && zr(pt, Fe);
  }, [b, pt]), Zt ? /* @__PURE__ */ t(xt, { theme: at, children: /* @__PURE__ */ p(
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
          sr,
          {
            size: 60,
            thickness: 4,
            sx: { color: Be }
          }
        ),
        /* @__PURE__ */ t(de, { sx: { mt: 2, color: "text.secondary" }, children: "Checking session..." })
      ]
    }
  ) }) : tr ? /* @__PURE__ */ t(xt, { theme: at, children: /* @__PURE__ */ p(
    de,
    {
      sx: {
        display: "flex",
        minHeight: "100vh",
        ...me
      },
      children: [
        /* @__PURE__ */ t(lr, {}),
        h && /* @__PURE__ */ t(
          Mr,
          {
            appName: i,
            pageName: c,
            isMobile: Q,
            onMenuClick: Q ? s ? or : void 0 : we && s ? () => st(
              !Te
            ) : void 0,
            showMenuButton: s && (Q || we),
            sidebarCollapsed: !Q && we ? Te : void 0,
            showBrand: !0,
            leftOffsetPx: Ie ? Ve : 0,
            logo: qt,
            headerStyles: ge,
            userName: W,
            userEmail: M,
            userAvatar: U,
            onProfileClick: C,
            onAccountClick: z,
            onSettingsClick: g,
            showSettings: l,
            onLogout: ut,
            showNotifications: w,
            notificationCount: H,
            onNotificationBellClick: w && q ? () => Ge(!0) : void 0,
            showSearchbar: u && !S,
            searchValue: F,
            onSearchChange: X,
            onSearchSubmit: re,
            showProfile: fe,
            userRole: se,
            accentColor: Be,
            contentBackgroundColor: Ke,
            navbarBackground: Jt,
            navbarAccentColor: Yt,
            theme: P,
            showThemeToggler: oe,
            onThemeToggle: G,
            rightExtraContent: ze,
            customNavbar: S,
            customNavbarProps: jt
          }
        ),
        s && !Q && it && /* @__PURE__ */ p(
          de,
          {
            component: "aside",
            sx: {
              width: ie,
              minWidth: ie,
              flexShrink: 0,
              zIndex: 2,
              position: "sticky",
              // rail-labeled spans the full viewport height with the
              // navbar inset to its right; the collapsible panel sits
              // below the fixed 60px navbar.
              top: Ie ? 0 : h ? "60px" : 0,
              mt: Ie ? 0 : h ? "60px" : 0,
              alignSelf: "flex-start",
              height: Ie ? "100vh" : h ? "calc(100vh - 60px)" : "100vh",
              transition: At,
              ...xe
            },
            children: [
              /* @__PURE__ */ t(
                jr,
                {
                  mainLinks: r,
                  secondaryLinks: o,
                  activePath: d,
                  onLinkClick: R,
                  activeAccentColor: Pe,
                  groupAccentColor: O,
                  activeForegroundColor: f,
                  foregroundColor: n,
                  surfaceBackgroundColor: v,
                  collapsed: ce ? !0 : Te,
                  onCollapsedChange: ce ? void 0 : st,
                  showLabels: ce,
                  topInsetPx: Ie && h ? eo : 0,
                  expandedWidth: Tt,
                  collapsedWidth: ce ? Ve : Ot
                }
              ),
              we && Z?.show && !Te && /* @__PURE__ */ t(ot, { ...Z })
            ]
          }
        ),
        s && !Q && !it && /* @__PURE__ */ t(
          gt,
          {
            variant: "permanent",
            sx: {
              width: ie,
              flexShrink: 0,
              zIndex: 2,
              // Higher z-index than app bar
              "& .MuiDrawer-paper": {
                width: ie,
                boxSizing: "border-box",
                bgcolor: Ke,
                borderRight: "none",
                top: h ? "60px" : 0,
                // Position below header
                height: h ? "calc(100vh - 60px)" : "100vh"
              },
              ...xe
            },
            children: /* @__PURE__ */ p(
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
                    Gt,
                    {
                      variant: "rail",
                      mainLinks: r,
                      secondaryLinks: o,
                      activePath: d,
                      onLinkClick: R,
                      accentColor: Pe,
                      surfaceBackgroundColor: Ke,
                      railShowTitles: a
                    }
                  ),
                  Z?.show && /* @__PURE__ */ t(ot, { ...Z })
                ]
              }
            )
          }
        ),
        s && Q && /* @__PURE__ */ t(
          Vr,
          {
            open: lt,
            onClose: nr,
            mainLinks: r,
            secondaryLinks: o,
            activePath: d,
            onLinkClick: R,
            userName: W,
            userEmail: M,
            userAvatar: U,
            userRole: se,
            onLogout: ut,
            onProfileClick: C,
            theme: P,
            showThemeToggler: oe,
            onThemeToggle: G,
            alertProps: Z,
            accentColor: Pe,
            groupAccentColor: O
          }
        ),
        /* @__PURE__ */ t(
          de,
          {
            component: "main",
            sx: {
              flexGrow: 1,
              p: 3,
              width: Q ? "100%" : s ? `calc(100% - ${ie}px)` : "100%",
              transition: At,
              mt: h ? "60px" : 0,
              // Account for AppNavbar height (60px)
              ml: 0,
              // Offset for sidebar on desktop
              backgroundColor: Ke,
              mb: 0,
              mr: 0,
              ...Se
            },
            children: /* @__PURE__ */ p(Je, { container: !0, spacing: 3, children: [
              /* @__PURE__ */ t(
                Je,
                {
                  size: {
                    xs: 12,
                    md: dt && ee ? 8.5 : 12
                  },
                  sx: {
                    display: "flex",
                    flexDirection: "column"
                  },
                  children: e
                }
              ),
              dt && ee && /* @__PURE__ */ t(
                Je,
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
                  children: /* @__PURE__ */ t(ee, {})
                }
              )
            ] })
          }
        ),
        w && q && /* @__PURE__ */ t(
          gt,
          {
            anchor: "right",
            open: Vt,
            onClose: () => Ge(!1),
            slotProps: {
              paper: { sx: { width: 380, maxWidth: "100vw" } }
            },
            children: /* @__PURE__ */ t(
              q,
              {
                onClose: () => Ge(!1)
              }
            )
          }
        )
      ]
    }
  ) }) : null;
};
export {
  D as AUTH_ERROR_CODES,
  T as AuthError,
  jr as CollapsibleSidebar,
  Jo as LumoraWrapper,
  ke as clearAuthTokens,
  Jo as default,
  Xo as getAuthErrorMessage,
  Ne as getAuthTokens,
  Wr as getCurrentUser,
  kr as isAuthenticated,
  rt as logAuthError,
  Mt as storeAuthTokens
};
