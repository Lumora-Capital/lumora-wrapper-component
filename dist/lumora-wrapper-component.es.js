import { jsxs as h, jsx as t, Fragment as Pe } from "react/jsx-runtime";
import { useTheme as dr, useMediaQuery as hr, Box as pe, CircularProgress as pr, CssBaseline as ur, Drawer as yt, Grid as et } from "@mui/material";
import { createTheme as Mt, alpha as q, styled as fr, useTheme as Fe, ThemeProvider as Et } from "@mui/material/styles";
import * as y from "react";
import { useMemo as vt, useState as ve, useRef as Rt, useEffect as tt } from "react";
import It from "axios";
import Tt from "@mui/icons-material/AccountCircleRounded";
import Bt from "@mui/icons-material/DarkMode";
import Kt from "@mui/icons-material/LightMode";
import Ut from "@mui/icons-material/LogoutRounded";
import gr from "@mui/icons-material/MenuRounded";
import mr from "@mui/icons-material/NotificationsOutlined";
import xr from "@mui/icons-material/SearchRounded";
import br from "@mui/material/AppBar";
import at from "@mui/material/Avatar";
import Sr from "@mui/material/Badge";
import W from "@mui/material/Box";
import ie from "@mui/material/Divider";
import re from "@mui/material/IconButton";
import wr from "@mui/material/InputAdornment";
import yr from "@mui/material/Menu";
import it from "@mui/material/MenuItem";
import K from "@mui/material/Stack";
import Er from "@mui/material/TextField";
import vr from "@mui/material/Toolbar";
import ae from "@mui/material/Tooltip";
import Q from "@mui/material/Typography";
import Rr from "@mui/material/useMediaQuery";
import Ir from "@mui/material/Card";
import Tr from "@mui/material/CardContent";
import Ht from "@mui/material/Button";
import Or from "@mui/icons-material/AutoAwesomeRounded";
import Ar from "@mui/icons-material/KeyboardArrowDownRounded";
import _r from "@mui/icons-material/KeyboardArrowUpRounded";
import Lt from "@mui/material/Collapse";
import Re from "@mui/material/ListItemButton";
import ue from "@mui/material/ListItemIcon";
import fe from "@mui/material/ListItemText";
import Cr from "@mui/icons-material/ExpandLess";
import Dr from "@mui/icons-material/ExpandMore";
import Nr from "@mui/material/MenuList";
import Wr from "@mui/material/Paper";
import zr from "@mui/material/Popper";
import Fr from "@mui/material/Drawer";
const C = Mt(), Ot = [...C.shadows], I = {
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
}, _ = {
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
}, ee = {
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
}, Z = {
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
}, te = {
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
}, Mr = (e) => (Ot[1] = e === "dark" ? "hsla(220, 30%, 5%, 0.7) 0px 4px 16px 0px, hsla(220, 25%, 10%, 0.8) 0px 8px 16px -5px" : "hsla(220, 30%, 5%, 0.07) 0px 4px 16px 0px, hsla(220, 25%, 10%, 0.07) 0px 8px 16px -5px", {
  palette: {
    mode: e,
    primary: {
      light: I[200],
      main: I[400],
      dark: I[700],
      contrastText: I[50],
      ...e === "dark" && {
        contrastText: I[50],
        light: I[300],
        main: I[400],
        dark: I[700]
      }
    },
    info: {
      light: I[100],
      main: I[300],
      dark: I[600],
      contrastText: _[50],
      ...e === "dark" && {
        contrastText: I[300],
        light: I[500],
        main: I[700],
        dark: I[900]
      }
    },
    warning: {
      light: Z[300],
      main: Z[400],
      dark: Z[800],
      ...e === "dark" && {
        light: Z[400],
        main: Z[500],
        dark: Z[700]
      }
    },
    error: {
      light: te[300],
      main: te[400],
      dark: te[800],
      ...e === "dark" && {
        light: te[400],
        main: te[500],
        dark: te[700]
      }
    },
    success: {
      light: ee[300],
      main: ee[400],
      dark: ee[800],
      ...e === "dark" && {
        light: ee[400],
        main: ee[500],
        dark: ee[700]
      }
    },
    grey: {
      ..._
    },
    divider: e === "dark" ? q(_[700], 0.6) : q(_[300], 0.4),
    background: {
      default: "hsl(0, 0%, 99%)",
      paper: "hsl(220, 35%, 97%)",
      ...e === "dark" && {
        default: _[900],
        paper: "hsl(220, 30%, 7%)"
      }
    },
    text: {
      primary: _[800],
      secondary: _[600],
      warning: Z[400],
      ...e === "dark" && {
        primary: "hsl(0, 0%, 100%)",
        secondary: _[400]
      }
    },
    action: {
      hover: q(_[200], 0.2),
      selected: `${q(_[200], 0.3)}`,
      ...e === "dark" && {
        hover: q(_[600], 0.2),
        selected: q(_[600], 0.3)
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
  shadows: Ot
});
I[200], I[400], I[700], I[50], I[100], I[300], I[600], _[50], Z[300], Z[400], Z[800], te[300], te[400], te[800], ee[300], ee[400], ee[800], {
  ..._
}, q(_[300], 0.4), _[800], _[600], Z[400], q(_[200], 0.2), `${q(_[200], 0.3)}`, I[50], I[300], I[400], I[700], I[300], I[500], I[700], I[900], Z[400], Z[500], Z[700], te[400], te[500], te[700], ee[400], ee[500], ee[700], {
  ..._
}, q(_[700], 0.6), _[900], _[400], q(_[600], 0.2), q(_[600], 0.3);
C.typography.pxToRem(48), C.typography.pxToRem(36), C.typography.pxToRem(30), C.typography.pxToRem(24), C.typography.pxToRem(20), C.typography.pxToRem(18), C.typography.pxToRem(18), C.typography.pxToRem(14), C.typography.pxToRem(14), C.typography.pxToRem(14), C.typography.pxToRem(12);
[
  ...C.shadows.slice(2)
];
class D extends Error {
  constructor(o, r, a = null) {
    super(o), this.name = "AuthError", this.code = r, this.originalError = a, this.timestamp = (/* @__PURE__ */ new Date()).toISOString();
  }
}
const F = {
  STORAGE_ACCESS_DENIED: "STORAGE_ACCESS_DENIED",
  TOKEN_NOT_FOUND: "TOKEN_NOT_FOUND",
  TOKEN_INVALID: "TOKEN_INVALID",
  TOKEN_EXPIRED: "TOKEN_EXPIRED",
  LOGOUT_FAILED: "LOGOUT_FAILED",
  UNKNOWN_ERROR: "UNKNOWN_ERROR"
}, k = {
  ACCESS_TOKEN: "lumoraAccessToken",
  REFRESH_TOKEN: "lumoraRefreshToken",
  USER: "lumoraUser"
}, le = {
  ACCESS_TOKEN: "accessToken",
  REFRESH_TOKEN: "refreshToken",
  USER: "user"
}, Br = () => {
  if (!(typeof window > "u" || !window.localStorage))
    try {
      const e = localStorage.getItem(le.ACCESS_TOKEN), o = localStorage.getItem(le.REFRESH_TOKEN), r = localStorage.getItem(le.USER);
      e && !localStorage.getItem(k.ACCESS_TOKEN) && localStorage.setItem(k.ACCESS_TOKEN, e), o && !localStorage.getItem(k.REFRESH_TOKEN) && localStorage.setItem(k.REFRESH_TOKEN, o), r && !localStorage.getItem(k.USER) && localStorage.setItem(k.USER, r), (e || o || r) && (localStorage.removeItem(le.ACCESS_TOKEN), localStorage.removeItem(le.REFRESH_TOKEN), localStorage.removeItem(le.USER));
    } catch (e) {
      console.warn("Failed to migrate legacy localStorage keys:", e);
    }
}, rt = (e) => {
  try {
    if (typeof window > "u")
      return console.warn("localStorage access attempted on server side"), null;
    if (!window.localStorage)
      throw new D("localStorage is not available", F.STORAGE_ACCESS_DENIED);
    return window.localStorage.getItem(e);
  } catch (o) {
    throw o.name === "QuotaExceededError" ? (console.error("Storage quota exceeded"), new D(
      "Storage quota exceeded. Please clear browser data.",
      F.STORAGE_ACCESS_DENIED,
      o
    )) : o.name === "SecurityError" ? (console.error("localStorage access denied (private browsing or security settings)"), new D(
      "Access to localStorage is denied. Please check browser settings.",
      F.STORAGE_ACCESS_DENIED,
      o
    )) : (console.error("Unexpected error accessing localStorage:", o.name), new D("Failed to access storage", F.STORAGE_ACCESS_DENIED, o));
  }
}, ot = (e, o) => {
  try {
    if (typeof window > "u")
      return console.warn("localStorage write attempted on server side"), !1;
    if (!window.localStorage)
      throw new D("localStorage is not available", F.STORAGE_ACCESS_DENIED);
    return window.localStorage.setItem(e, o), !0;
  } catch (r) {
    throw r.name === "QuotaExceededError" ? (console.error("Storage quota exceeded"), new D(
      "Storage quota exceeded. Please clear browser data.",
      F.STORAGE_ACCESS_DENIED,
      r
    )) : r.name === "SecurityError" ? (console.error("localStorage write denied (private browsing or security settings)"), new D(
      "Access to localStorage is denied. Please check browser settings.",
      F.STORAGE_ACCESS_DENIED,
      r
    )) : (console.error("Unexpected error writing to localStorage:", r.name), new D("Failed to write to storage", F.STORAGE_ACCESS_DENIED, r));
  }
}, $t = (e) => {
  try {
    return typeof window > "u" ? (console.warn("localStorage removal attempted on server side"), !1) : window.localStorage ? (window.localStorage.removeItem(e), !0) : (console.warn("localStorage is not available"), !1);
  } catch (o) {
    return o.name !== "SecurityError" && console.warn(`Could not remove localStorage key "${e}"`), !1;
  }
}, We = () => {
  try {
    Br();
    const e = rt(k.ACCESS_TOKEN), o = rt(k.REFRESH_TOKEN), r = rt(k.USER);
    let a = null;
    if (r)
      try {
        a = JSON.parse(r);
      } catch {
        r && r !== "null" && r !== "undefined" && console.warn("Invalid user data in localStorage, clearing:", r.substring(0, 50)), $t(k.USER);
      }
    return {
      accessToken: e,
      refreshToken: o,
      user: a
    };
  } catch (e) {
    throw e instanceof D ? e : new D("Failed to retrieve authentication tokens", F.UNKNOWN_ERROR, e);
  }
}, Kr = () => {
  try {
    const { accessToken: e, refreshToken: o } = We();
    return !(e || o) ? {
      isAuthenticated: !1,
      error: new D("No authentication tokens found", F.TOKEN_NOT_FOUND)
    } : {
      isAuthenticated: !0,
      error: null
    };
  } catch (e) {
    return console.error("Authentication check failed:", e), {
      isAuthenticated: !1,
      error: e instanceof D ? e : new D("Authentication check failed", F.UNKNOWN_ERROR, e)
    };
  }
}, Gt = (e, o, r = null) => {
  try {
    if (!e && !o)
      throw new D("At least one token must be provided", F.TOKEN_INVALID);
    return e && ot(k.ACCESS_TOKEN, e), o && ot(k.REFRESH_TOKEN, o), r && ot(k.USER, JSON.stringify(r)), {
      success: !0,
      error: null
    };
  } catch (a) {
    return console.error("Failed to store authentication tokens:", a), {
      success: !1,
      error: a instanceof D ? a : new D("Failed to store tokens", F.UNKNOWN_ERROR, a)
    };
  }
}, ze = () => {
  try {
    return [
      k.ACCESS_TOKEN,
      k.REFRESH_TOKEN,
      k.USER,
      // Also clear legacy keys for complete cleanup
      le.ACCESS_TOKEN,
      le.REFRESH_TOKEN,
      le.USER
    ].map((a) => $t(a)).every((a) => a) || console.warn("Some tokens could not be removed from localStorage"), {
      success: !0,
      error: null
    };
  } catch (e) {
    return console.error("Failed to clear authentication tokens:", e), {
      success: !1,
      error: e instanceof D ? e : new D("Failed to clear tokens", F.LOGOUT_FAILED, e)
    };
  }
}, Ur = () => {
  try {
    const { user: e } = We();
    return {
      user: e,
      error: null
    };
  } catch (e) {
    return console.error("Failed to get current user:", e), {
      user: null,
      error: e instanceof D ? e : new D("Failed to retrieve user data", F.UNKNOWN_ERROR, e)
    };
  }
}, Qo = (e) => {
  if (!(e instanceof D))
    return "An unexpected error occurred. Please try again.";
  switch (e.code) {
    case F.STORAGE_ACCESS_DENIED:
      return "Unable to access browser storage. Please check your browser settings and disable private browsing if enabled.";
    case F.TOKEN_NOT_FOUND:
      return "You are not logged in. Please sign in to continue.";
    case F.TOKEN_INVALID:
      return "Your session is invalid. Please sign in again.";
    case F.TOKEN_EXPIRED:
      return "Your session has expired. Please sign in again.";
    case F.LOGOUT_FAILED:
      return "Failed to log out properly. Please clear your browser cache and try again.";
    case F.UNKNOWN_ERROR:
    default:
      return "An unexpected error occurred. Please try again or contact support if the problem persists.";
  }
}, st = (e, o = "Unknown") => {
  const r = {
    context: o,
    message: e.message,
    code: e instanceof D ? e.code : "UNKNOWN",
    timestamp: e instanceof D ? e.timestamp : (/* @__PURE__ */ new Date()).toISOString(),
    stack: e.stack
  };
  e instanceof D && e.originalError && (r.originalError = {
    name: e.originalError.name,
    message: e.originalError.message
  }), console.warn("[Auth Error]", r);
}, Hr = (e) => {
  if (!e)
    throw new Error("API base URL is required to create axios client");
  const o = It.create({
    baseURL: e,
    headers: {
      "Content-Type": "application/json"
    }
  });
  let r = !1, a = null, l = [];
  const d = (s, i) => {
    l.forEach(({ resolve: g, reject: E }) => {
      s ? E(s) : i && g(i);
    }), l = [];
  };
  return o.interceptors.request.use(
    (s) => {
      const { accessToken: i } = We();
      return i && s.headers && (s.headers.Authorization = `Bearer ${i}`), s;
    },
    (s) => Promise.reject(s)
  ), o.interceptors.response.use(
    (s) => s,
    async (s) => {
      var R;
      const i = s.config, g = (R = s.response) == null ? void 0 : R.status, E = (i == null ? void 0 : i.url) || "", v = E.includes("/auth/refresh");
      if (g !== 401 || i._retry || v)
        return Promise.reject(s);
      i._retry = !0;
      const { refreshToken: N } = We();
      if (!N) {
        const f = new Error(
          "No refresh token available for token refresh"
        );
        return st(f, "AxiosClient - Token Refresh"), ze(), typeof window < "u" && (window.location.href = "/login"), Promise.reject(s);
      }
      if (r && a)
        return new Promise((f, p) => {
          l.push({ resolve: f, reject: p });
        }).then((f) => {
          const {
            accessToken: p,
            refreshToken: w
          } = f;
          if (i.headers && (i.headers.Authorization = `Bearer ${p}`), E.includes("/auth/logout"))
            try {
              if (typeof i.data == "string") {
                const O = JSON.parse(
                  i.data || "{}"
                );
                O.refresh_token = w, i.data = JSON.stringify(O);
              } else
                i.data && typeof i.data == "object" ? i.data.refresh_token = w : i.data = JSON.stringify({
                  refresh_token: w
                });
            } catch {
              i.data = JSON.stringify({
                refresh_token: w
              });
            }
          return o(i);
        }).catch((f) => Promise.reject(f));
      r = !0, a = It.post(
        `${e}/auth/refresh`,
        {
          refresh_token: N
        }
      );
      try {
        const f = await a, { accessToken: p, refreshToken: w } = f.data;
        if (Gt(p, w, null), d(null, {
          accessToken: p,
          refreshToken: w
        }), i.headers && (i.headers.Authorization = `Bearer ${p}`), E.includes("/auth/logout"))
          try {
            if (typeof i.data == "string") {
              const O = JSON.parse(
                i.data || "{}"
              );
              O.refresh_token = w, i.data = JSON.stringify(O);
            } else
              i.data && typeof i.data == "object" ? i.data.refresh_token = w : i.data = JSON.stringify({
                refresh_token: w
              });
          } catch {
            i.data = JSON.stringify({
              refresh_token: w
            });
          }
        return o(i);
      } catch (f) {
        return st(
          f,
          "AxiosClient - Token Refresh Failed"
        ), d(f), ze(), typeof window < "u" && (window.location.href = "/login"), Promise.reject(f);
      } finally {
        r = !1, a = null;
      }
    }
  ), o;
}, Lr = async (e, o) => {
  const { accessToken: r, refreshToken: a } = We();
  if (r)
    return !0;
  if (a)
    try {
      const l = await e.post("/auth/refresh", {
        refresh_token: a
      });
      if (l.data.success && l.data.accessToken)
        return Gt(l.data.accessToken, l.data.refreshToken || null, null), !0;
    } catch (l) {
      st(l, "TokenValidator - Refresh Failed");
    }
  return ze(), o ? o() : window.location.href = "/login", !1;
}, $r = ({ size: e = 20, style: o }) => /* @__PURE__ */ h(
  "svg",
  {
    width: e,
    height: e * 30 / 33,
    viewBox: "0 0 33 30",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    "aria-hidden": "true",
    focusable: "false",
    style: o,
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
), Gr = ({
  onClick: e,
  active: o = !1,
  busy: r = !1,
  navbarBackground: a = "#ffffff"
}) => /* @__PURE__ */ t(ae, { title: "Nexa", placement: "bottom", children: /* @__PURE__ */ t(
  re,
  {
    onClick: e,
    "aria-label": "Toggle Nexa assistant",
    "aria-pressed": o,
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
      ...r && {
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
      W,
      {
        sx: {
          position: "relative",
          zIndex: 2,
          display: "flex",
          alignItems: "center"
        },
        children: /* @__PURE__ */ t($r, { size: 20 })
      }
    )
  }
) }), Pr = fr(vr)({
  width: "100%",
  padding: "8px 16px",
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
  gap: "16px",
  flexShrink: 0
}), kr = ({
  appName: e = "Dashboard",
  pageName: o = "Home",
  onMenuClick: r,
  showMenuButton: a = !0,
  isMobile: l = !1,
  sidebarCollapsed: d,
  showBrand: s = !0,
  logo: i,
  leftOffsetPx: g = 0,
  headerStyles: E,
  userName: v = "User Name",
  userEmail: N,
  userAvatar: R,
  onProfileClick: f,
  onAccountClick: p,
  onSettingsClick: w,
  showSettings: O = !0,
  onLogout: $,
  showNotifications: j = !1,
  notificationCount: U = 0,
  onNotificationBellClick: T,
  theme: H = "light",
  showThemeToggler: x = !1,
  onThemeToggle: c,
  showSearchbar: b = !0,
  searchValue: G,
  onSearchChange: J,
  onSearchSubmit: u,
  showProfile: M = !0,
  userRole: A,
  accentColor: se = "#01584f",
  contentBackgroundColor: ge = "#f2f9fc",
  navbarBackground: ce = "#ff0000",
  navbarAccentColor: X = "#000000",
  rightExtraContent: Y = [],
  customNavbar: me,
  customNavbarProps: xe,
  showAssistant: be = !1,
  onAssistantClick: Ie,
  assistantActive: Se = !1,
  assistantBusy: we = !1
}) => {
  const n = Rr((S) => S.breakpoints.up("md")), [m, B] = y.useState(null), z = !!m, L = H === "dark", V = L ? "text.primary" : se, P = L ? "Switch to light mode" : "Switch to dark mode", oe = d === void 0 ? "Open navigation menu" : d ? "Expand sidebar" : "Collapse sidebar", Te = (S) => {
    J == null || J(S.target.value);
  }, je = (S) => {
    S.key === "Enter" && u && G && u(G);
  }, Xe = (S) => S ? S.charAt(0).toUpperCase() + S.slice(1).toLowerCase() : "User", Ve = (S) => {
    B(S.currentTarget);
  }, Me = () => {
    B(null);
  }, Be = (S) => {
    S == null || S(), Me();
  };
  return /* @__PURE__ */ t(
    br,
    {
      position: "fixed",
      sx: {
        boxShadow: 0,
        background: ce,
        top: "var(--template-frame-height, 0px)",
        // Inset from the left so the bar starts at the edge of a
        // full-height sidebar; full width otherwise.
        left: g,
        width: g ? `calc(100% - ${g}px)` : "100%",
        zIndex: 1,
        height: "60px",
        ...E
      },
      children: /* @__PURE__ */ h(Pr, { variant: "dense", sx: { height: "100%" }, children: [
        /* @__PURE__ */ h(
          K,
          {
            direction: "row",
            sx: {
              alignItems: "center",
              gap: 2,
              flexShrink: 0,
              flexGrow: 1
            },
            children: [
              a && /* @__PURE__ */ t(ae, { title: oe, placement: "bottom", children: /* @__PURE__ */ t(
                re,
                {
                  "aria-label": oe,
                  onClick: r,
                  disableFocusRipple: !0,
                  sx: {
                    // Nudge left so the icon centers on the sidebar
                    // icon rail (72px wide → 36px center) below it.
                    ml: -1,
                    color: V,
                    "&:hover": {
                      backgroundColor: "action.hover"
                    },
                    "&:focus, &:focus-visible": {
                      outline: "none"
                    }
                  },
                  children: /* @__PURE__ */ t(gr, {})
                }
              ) }),
              s && /* @__PURE__ */ h(
                K,
                {
                  direction: "row",
                  sx: {
                    alignItems: "center",
                    gap: 1,
                    flexShrink: 0
                  },
                  children: [
                    /* @__PURE__ */ t(
                      Q,
                      {
                        variant: "h6",
                        sx: {
                          color: V,
                          fontWeight: 600,
                          fontSize: "20px",
                          lineHeight: 1,
                          textTransform: "uppercase"
                        },
                        children: e
                      }
                    ),
                    i ? /* @__PURE__ */ t(
                      W,
                      {
                        sx: {
                          display: "flex",
                          alignItems: "center",
                          flexShrink: 0,
                          color: V,
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
              me ? /* @__PURE__ */ t(me, { ...xe || {} }) : b && n && /* @__PURE__ */ t(
                Er,
                {
                  placeholder: "Search for deals or documents...",
                  value: G || "",
                  onChange: Te,
                  onKeyDown: je,
                  size: "small",
                  sx: {
                    width: "400px",
                    "& .MuiOutlinedInput-root": {
                      backgroundColor: ge,
                      borderRadius: "8px",
                      "& fieldset": {
                        borderColor: "transparent"
                      },
                      "&:hover fieldset": {
                        borderColor: "transparent"
                      },
                      "&.Mui-focused fieldset": {
                        borderColor: se
                      }
                    }
                  },
                  InputProps: {
                    startAdornment: /* @__PURE__ */ t(wr, { position: "start", children: /* @__PURE__ */ t(
                      xr,
                      {
                        sx: {
                          color: X
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
          K,
          {
            direction: "row",
            sx: {
              alignItems: "center",
              gap: 1.5,
              flexShrink: 0
            },
            children: [
              x && !l && /* @__PURE__ */ t(ae, { title: P, placement: "bottom", children: /* @__PURE__ */ t("span", { children: /* @__PURE__ */ t(
                re,
                {
                  size: "small",
                  onClick: c,
                  disabled: !c,
                  "aria-label": P,
                  sx: {
                    color: X,
                    "&:hover": {
                      backgroundColor: "action.hover"
                    }
                  },
                  children: L ? /* @__PURE__ */ t(Kt, { fontSize: "small" }) : /* @__PURE__ */ t(Bt, { fontSize: "small" })
                }
              ) }) }),
              j && /* @__PURE__ */ t(
                Sr,
                {
                  color: "error",
                  badgeContent: U,
                  invisible: U === 0,
                  sx: {
                    "& .MuiBadge-badge": {
                      right: 2,
                      top: 2
                    }
                  },
                  children: /* @__PURE__ */ t(
                    re,
                    {
                      size: "small",
                      onClick: T,
                      "aria-label": U ? `Notifications, ${U} unread` : "Notifications",
                      sx: { color: X },
                      children: /* @__PURE__ */ t(mr, {})
                    }
                  )
                }
              ),
              be && !l && /* @__PURE__ */ h(Pe, { children: [
                /* @__PURE__ */ t(
                  ie,
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
                  Gr,
                  {
                    onClick: Ie,
                    active: Se,
                    busy: we,
                    navbarBackground: ce
                  }
                )
              ] }),
              j && M && !l && /* @__PURE__ */ t(
                ie,
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
              M && !l && /* @__PURE__ */ h(Pe, { children: [
                /* @__PURE__ */ h(
                  K,
                  {
                    direction: "row",
                    onClick: Ve,
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
                      R ? /* @__PURE__ */ t(
                        at,
                        {
                          src: R,
                          sx: { width: 32, height: 32 }
                        }
                      ) : /* @__PURE__ */ t(
                        Tt,
                        {
                          sx: {
                            width: 32,
                            height: 32,
                            color: X
                          }
                        }
                      ),
                      /* @__PURE__ */ h(
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
                              Q,
                              {
                                variant: "body2",
                                sx: {
                                  color: X,
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
                              Q,
                              {
                                variant: "caption",
                                sx: {
                                  color: X,
                                  lineHeight: 1.2,
                                  overflow: "hidden",
                                  textOverflow: "ellipsis",
                                  whiteSpace: "nowrap",
                                  maxWidth: "150px"
                                },
                                children: Xe(A)
                              }
                            )
                          ]
                        }
                      )
                    ]
                  }
                ),
                /* @__PURE__ */ h(
                  yr,
                  {
                    anchorEl: m,
                    open: z,
                    onClose: Me,
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
                      O && [
                        /* @__PURE__ */ t(
                          it,
                          {
                            onClick: () => Be(w),
                            children: "Settings"
                          },
                          "settings"
                        ),
                        /* @__PURE__ */ t(ie, {}, "settings-divider")
                      ],
                      /* @__PURE__ */ h(
                        it,
                        {
                          onClick: () => Be($),
                          sx: {
                            color: "error.main",
                            "&:hover": {
                              color: "error.dark"
                            }
                          },
                          children: [
                            /* @__PURE__ */ t(Q, { sx: { flexGrow: 1 }, children: "Logout" }),
                            /* @__PURE__ */ t(Ut, { fontSize: "small" })
                          ]
                        }
                      )
                    ]
                  }
                )
              ] }),
              Y.length !== 0 && Y.map((S) => S.type === "divider" ? /* @__PURE__ */ t(
                ie,
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
                ae,
                {
                  title: S.tooltip || "",
                  disableHoverListener: !S.tooltip,
                  arrow: !0,
                  children: /* @__PURE__ */ h(
                    K,
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
                          at,
                          {
                            src: S.avatar,
                            sx: {
                              width: 32,
                              height: 32
                            }
                          }
                        ) : /* @__PURE__ */ t(
                          Tt,
                          {
                            sx: {
                              width: 32,
                              height: 32,
                              color: X
                            }
                          }
                        ),
                        /* @__PURE__ */ h(
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
                                Q,
                                {
                                  variant: "body2",
                                  sx: {
                                    color: X,
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
                                Q,
                                {
                                  variant: "caption",
                                  sx: {
                                    color: X,
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
}, lt = ({
  title: e = "",
  message: o = "",
  buttonText: r = "",
  onButtonClick: a,
  show: l = !0
}) => l ? /* @__PURE__ */ t(Ir, { variant: "outlined", sx: { m: 1.5, flexShrink: 0 }, children: /* @__PURE__ */ h(Tr, { children: [
  /* @__PURE__ */ t(Or, { fontSize: "small" }),
  /* @__PURE__ */ t(Q, { gutterBottom: !0, sx: { fontWeight: 600 }, children: e }),
  /* @__PURE__ */ t(
    Q,
    {
      variant: "body2",
      sx: { mb: 2, color: "text.secondary" },
      children: o
    }
  ),
  /* @__PURE__ */ t(
    Ht,
    {
      variant: "contained",
      size: "small",
      fullWidth: !0,
      onClick: a,
      children: r
    }
  )
] }) }) : null, Ne = (e, o) => {
  var r;
  return o ? e.path && o === e.path ? !0 : ((r = e.subitems) == null ? void 0 : r.some((a) => a.path === o)) ?? !1 : !1;
}, ke = (e, o) => !!(o && e.path === o), Pt = (e) => {
  const o = jt(e);
  if (!o)
    return "#ffffff";
  const [r, a, l] = o.map((s) => {
    const i = s / 255;
    return i <= 0.03928 ? i / 12.92 : ((i + 0.055) / 1.055) ** 2.4;
  });
  return 0.2126 * r + 0.7152 * a + 0.0722 * l > 0.5 ? "#0b1f1c" : "#ffffff";
}, kt = (e) => {
  const o = jt(e);
  if (!o)
    return "rgba(1, 88, 79, 0.12)";
  const [r, a, l] = o;
  return `rgba(${r}, ${a}, ${l}, 0.14)`;
}, jt = (e) => {
  let o = e.trim().replace(/^#/, "");
  if (o.length === 3 && (o = o.split("").map((a) => a + a).join("")), o.length !== 6 || /[^0-9a-fA-F]/.test(o))
    return null;
  const r = parseInt(o, 16);
  return [r >> 16 & 255, r >> 8 & 255, r & 255];
}, Xt = () => typeof window < "u" && !!window.localStorage, Vt = (e) => {
  if (!Xt())
    return null;
  try {
    const o = window.localStorage.getItem(e);
    return o === null ? null : o === "true";
  } catch (o) {
    return console.warn("Failed to read sidebar collapsed state:", o), null;
  }
}, jr = (e, o) => {
  if (Xt())
    try {
      window.localStorage.setItem(e, o ? "true" : "false");
    } catch (r) {
      console.warn("Failed to persist sidebar collapsed state:", r);
    }
}, Xr = 264, Vr = 72, Jr = "lumora:sidebar-collapsed", Yr = "width 200ms ease", Zr = 16, qr = 14, At = "0.7rem", _t = 22, De = ({ text: e, variant: o = "body1", center: r = !1, fontSize: a }) => {
  const l = y.useRef(null), [d, s] = y.useState(!1), i = y.useCallback(() => {
    const g = l.current;
    g && s(g.scrollWidth > g.clientWidth + 0.5);
  }, []);
  return y.useLayoutEffect(() => {
    i();
  }, [i, e]), y.useEffect(() => {
    const g = l.current;
    if (!g)
      return;
    const E = new ResizeObserver(() => i());
    return E.observe(g), () => E.disconnect();
  }, [i]), /* @__PURE__ */ t(
    ae,
    {
      title: e,
      placement: "right",
      arrow: !0,
      enterDelay: 400,
      disableHoverListener: !d,
      disableFocusListener: !d,
      disableTouchListener: !d,
      children: /* @__PURE__ */ t(
        Q,
        {
          ref: l,
          component: "span",
          variant: o,
          sx: {
            display: "block",
            width: r ? "100%" : void 0,
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
            color: "inherit",
            ...a ? { fontSize: a } : {},
            ...r ? { textAlign: "center", lineHeight: 1.1 } : {}
          },
          children: e
        }
      )
    }
  );
}, Ct = ({
  open: e,
  size: o = Zr
}) => e ? /* @__PURE__ */ t(_r, { sx: { fontSize: o, opacity: 0.75 } }) : /* @__PURE__ */ t(Ar, { sx: { fontSize: o, opacity: 0.75 } }), Qr = ({
  mainLinks: e,
  secondaryLinks: o = [],
  activePath: r,
  onLinkClick: a,
  activeAccentColor: l = "#01584f",
  groupAccentColor: d,
  activeForegroundColor: s,
  foregroundColor: i,
  surfaceBackgroundColor: g,
  collapsed: E,
  defaultCollapsed: v = !1,
  persistKey: N = Jr,
  expandedWidth: R = Xr,
  collapsedWidth: f = Vr,
  showLabels: p = !1,
  topInsetPx: w = 0
}) => {
  const O = Fe(), $ = O.palette.mode === "dark", j = E !== void 0, [U] = y.useState(
    () => Vt(N) ?? v
  ), T = j ? !!E : U, [H, x] = y.useState(
    {}
  ), c = l, b = s ?? Pt(c), G = {
    bgcolor: c,
    color: b,
    "& .MuiListItemIcon-root": { color: b }
  }, J = {
    bgcolor: c,
    color: b,
    borderRadius: "8px"
  }, u = d ?? kt(c), M = g ?? ($ ? O.palette.background.paper : "#ffffff"), A = i ?? ($ ? "text.primary" : c), se = (n) => {
    a == null || a(n);
  }, ge = (n, m) => {
    x((B) => ({ ...B, [n]: !m }));
  }, ce = (n) => H[n.text] ?? Ne(n, r), X = (n) => {
    const m = !!(n.path && r === n.path);
    return /* @__PURE__ */ h(
      Re,
      {
        disabled: !n.path,
        selected: m,
        onClick: () => n.path && se(n.path),
        "data-testid": `sidebar-item-${n.text}`,
        "data-active": m ? "true" : "false",
        sx: {
          borderRadius: "6px",
          py: 1,
          px: 1.5,
          color: m ? b : A,
          bgcolor: m ? c : "transparent",
          "& .MuiListItemIcon-root": {
            color: m ? b : A,
            minWidth: 36
          },
          // rail-labeled: active AND hover share the highlight. collapsible:
          // keep the original subtle idle-hover tint (accent only if active).
          "&:hover": m || p ? G : { bgcolor: u },
          "&.Mui-selected": {
            bgcolor: c
          },
          "&.Mui-selected:hover": G
        },
        children: [
          /* @__PURE__ */ t(ue, { children: n.icon }),
          /* @__PURE__ */ t(
            fe,
            {
              disableTypography: !0,
              primary: /* @__PURE__ */ t(De, { text: n.text })
            }
          )
        ]
      },
      n.text
    );
  }, Y = (n) => {
    const m = Ne(n, r), B = !!(n.path && r === n.path), z = ce(n);
    return /* @__PURE__ */ h(
      W,
      {
        "data-testid": `sidebar-group-${n.text}`,
        sx: {
          borderRadius: "6px",
          bgcolor: m ? u : "transparent"
        },
        children: [
          /* @__PURE__ */ h(
            Re,
            {
              onClick: () => ge(n.text, z),
              "data-testid": `sidebar-item-${n.text}`,
              "data-active": B ? "true" : "false",
              "aria-expanded": z,
              sx: {
                borderRadius: "6px",
                py: 1,
                px: 1.5,
                color: B ? b : A,
                bgcolor: B ? c : "transparent",
                "& .MuiListItemIcon-root": {
                  color: B ? b : A,
                  minWidth: 36
                },
                // rail-labeled highlights on hover; collapsible keeps the
                // subtle idle tint (accent only when the parent is active).
                "&:hover": B || p ? G : { bgcolor: u }
              },
              children: [
                /* @__PURE__ */ t(ue, { children: n.icon }),
                /* @__PURE__ */ t(
                  fe,
                  {
                    disableTypography: !0,
                    primary: /* @__PURE__ */ t(De, { text: n.text })
                  }
                ),
                /* @__PURE__ */ t(Ct, { open: z })
              ]
            }
          ),
          /* @__PURE__ */ t(Lt, { in: z, timeout: "auto", unmountOnExit: !0, children: /* @__PURE__ */ t(
            W,
            {
              "data-testid": `sidebar-children-${n.text}`,
              sx: { pb: 0.5 },
              children: n.subitems.map((L) => me(L))
            }
          ) })
        ]
      },
      n.text
    );
  }, me = (n) => {
    const m = ke(n, r);
    return /* @__PURE__ */ h(
      Re,
      {
        selected: m,
        onClick: () => se(n.path),
        "data-testid": `sidebar-subitem-${n.text}`,
        "data-active": m ? "true" : "false",
        sx: {
          borderRadius: "6px",
          mx: 0.5,
          py: 0.75,
          pl: 4,
          color: m ? b : A,
          bgcolor: m ? c : "transparent",
          "& .MuiListItemIcon-root": {
            color: m ? b : A,
            minWidth: 32
          },
          // rail-labeled: active AND hover share the highlight. collapsible:
          // keep the original subtle idle-hover tint (accent only if active).
          "&:hover": m || p ? G : { bgcolor: "action.hover" },
          "&.Mui-selected": {
            bgcolor: c
          },
          "&.Mui-selected:hover": G
        },
        children: [
          n.icon ? /* @__PURE__ */ t(ue, { children: n.icon }) : null,
          /* @__PURE__ */ t(
            fe,
            {
              disableTypography: !0,
              primary: /* @__PURE__ */ t(De, { text: n.text })
            }
          )
        ]
      },
      n.path
    );
  }, xe = (n, m, B, z, L, V) => {
    const P = !L, oe = /* @__PURE__ */ h(
      re,
      {
        "aria-label": m,
        disabled: P,
        onClick: L,
        "data-testid": (V == null ? void 0 : V.testId) ?? `sidebar-item-${m}`,
        "data-active": z ? "true" : "false",
        sx: p ? {
          display: "flex",
          flexDirection: "column",
          gap: 0.25,
          width: "100%",
          maxWidth: "100%",
          height: "auto",
          // 8px padding on all sides of the item container.
          p: 1,
          borderRadius: "8px",
          color: z ? b : A,
          bgcolor: z ? c : "transparent",
          "& .MuiSvgIcon-root": {
            fontSize: _t
          },
          "&:hover": J
        } : {
          // Icon-only collapsed rail (collapsible variant):
          // original hover — accent when active, else a subtle
          // tint; no foreground change.
          width: 44,
          height: 44,
          color: z ? b : A,
          bgcolor: z ? c : "transparent",
          borderRadius: z ? "8px" : "50%",
          "&:hover": {
            bgcolor: z ? c : V != null && V.insideGroup ? "action.hover" : u,
            borderRadius: "8px"
          }
        },
        children: [
          B,
          p ? /* @__PURE__ */ t(
            De,
            {
              text: m,
              variant: "caption",
              center: !0,
              fontSize: At
            }
          ) : null
        ]
      }
    );
    return p ? P ? /* @__PURE__ */ t("span", { children: oe }, n) : /* @__PURE__ */ t(y.Fragment, { children: oe }, n) : /* @__PURE__ */ t(ae, { title: m, placement: "right", arrow: !0, children: P ? /* @__PURE__ */ t("span", { children: oe }) : oe }, n);
  }, be = (n, m) => {
    const B = Ne(n, r), z = !!(n.path && r === n.path), L = /* @__PURE__ */ h(
      re,
      {
        "aria-label": n.text,
        "aria-expanded": m,
        onClick: () => ge(n.text, m),
        "data-testid": `sidebar-item-${n.text}`,
        "data-active": z ? "true" : "false",
        sx: {
          display: "flex",
          flexDirection: "column",
          gap: p ? 0.25 : 0,
          width: p ? "100%" : 44,
          maxWidth: "100%",
          // 8px padding on all sides of the labeled item container.
          ...p ? { p: 1 } : { py: 0.75 },
          borderRadius: "10px",
          color: z ? b : A,
          bgcolor: z ? c : "transparent",
          // rail-labeled: active AND hover share the highlight. collapsible:
          // original behavior — accent only when active; the outer pill
          // supplies the idle-hover tint, so the button stays transparent.
          "&:hover": p ? { bgcolor: c, color: b } : {
            bgcolor: z ? c : "transparent"
          }
        },
        children: [
          p ? /* @__PURE__ */ t(
            W,
            {
              sx: {
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                "& .MuiSvgIcon-root": {
                  fontSize: _t
                }
              },
              children: n.icon
            }
          ) : n.icon,
          p ? /* @__PURE__ */ t(
            De,
            {
              text: n.text,
              variant: "caption",
              center: !0,
              fontSize: At
            }
          ) : null,
          /* @__PURE__ */ t(Ct, { open: m, size: qr })
        ]
      }
    ), V = p ? L : /* @__PURE__ */ t(ae, { title: n.text, placement: "right", arrow: !0, children: L });
    return /* @__PURE__ */ h(
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
          // The active group's container stays tinted. collapsible tints
          // the whole group on hover (original); rail-labeled leaves hover
          // highlighting to the individual items.
          bgcolor: B ? u : "transparent",
          ...p ? {} : { "&:hover": { bgcolor: u } }
        },
        children: [
          V,
          m ? n.subitems.map(
            (P) => xe(
              P.path,
              P.text,
              P.icon ?? n.icon,
              ke(P, r),
              () => se(P.path),
              {
                insideGroup: !0,
                testId: `sidebar-subitem-${P.text}`
              }
            )
          ) : null
        ]
      }
    );
  }, Ie = (n) => {
    var B;
    return (B = n.subitems) != null && B.length ? /* @__PURE__ */ t(y.Fragment, { children: be(n, ce(n)) }, n.text) : /* @__PURE__ */ t(
      W,
      {
        sx: {
          width: "100%",
          display: "flex",
          justifyContent: "center"
        },
        children: xe(
          n.text,
          n.text,
          n.icon,
          !!(n.path && r === n.path),
          n.path ? () => se(n.path) : void 0
        )
      },
      n.text
    );
  }, Se = (n) => {
    var m;
    return T ? Ie(n) : (m = n.subitems) != null && m.length ? Y(n) : X(n);
  }, we = T ? f : R;
  return /* @__PURE__ */ h(
    W,
    {
      component: "nav",
      "aria-label": "Main sidebar",
      "data-testid": "collapsible-sidebar",
      "data-collapsed": T ? "true" : "false",
      "data-labeled": p ? "true" : "false",
      sx: {
        width: we,
        minWidth: we,
        height: "100%",
        boxSizing: "border-box",
        bgcolor: M,
        display: "flex",
        flexDirection: "column",
        overflowX: "hidden",
        overflowY: "auto",
        transition: Yr,
        px: p ? 0.5 : T ? 1 : 2,
        pt: w ? `${w}px` : 1,
        pb: 2
      },
      children: [
        /* @__PURE__ */ t(
          K,
          {
            spacing: 0.5,
            sx: {
              width: "100%",
              alignItems: T ? "center" : "stretch"
            },
            children: e.map((n) => Se(n))
          }
        ),
        o.length > 0 ? /* @__PURE__ */ h(W, { sx: { mt: "auto", pt: 2 }, children: [
          /* @__PURE__ */ t(ie, { sx: { mb: 1, borderColor: "divider" } }),
          /* @__PURE__ */ t(
            K,
            {
              spacing: 0.5,
              sx: {
                width: "100%",
                alignItems: T ? "center" : "stretch"
              },
              children: o.map((n) => Se(n))
            }
          )
        ] }) : null
      ]
    }
  );
}, eo = 180, Dt = 250, Jt = ({
  text: e,
  testId: o
}) => {
  const r = y.useRef(null), [a, l] = y.useState(!1), d = y.useCallback(() => {
    const s = r.current;
    s && l(s.scrollWidth > s.clientWidth + 0.5);
  }, []);
  return y.useLayoutEffect(() => {
    d();
  }, [d, e]), y.useEffect(() => {
    const s = r.current;
    if (!s)
      return;
    const i = new ResizeObserver(() => d());
    return i.observe(s), () => i.disconnect();
  }, [d]), /* @__PURE__ */ t(
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
        Q,
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
}, to = ({
  link: e,
  activePath: o,
  onLinkClick: r,
  accentColor: a,
  isSecondary: l,
  surfaceBackgroundColor: d,
  railShowTitles: s = !1
}) => {
  const i = Fe(), [g, E] = y.useState(null), [v, N] = y.useState(!1), R = y.useRef(
    null
  ), f = y.useRef(null), p = y.useRef(null), w = y.useRef(!1), O = y.useRef(!1), $ = y.useId(), j = () => {
    R.current && (clearTimeout(R.current), R.current = null);
  }, U = () => {
    j(), R.current = setTimeout(() => {
      N(!1), R.current = null;
    }, eo);
  }, T = () => {
    j(), N(!0);
  };
  y.useEffect(() => {
    if (!v)
      return;
    const u = (M) => {
      var A;
      M.key === "Escape" && (N(!1), (A = p.current) == null || A.focus());
    };
    return document.addEventListener("keydown", u), () => document.removeEventListener("keydown", u);
  }, [v]), y.useEffect(() => {
    if (!v || !O.current)
      return;
    const u = globalThis.requestAnimationFrame(() => {
      var A;
      const M = (A = f.current) == null ? void 0 : A.querySelector(
        '[role="menuitem"]'
      );
      M == null || M.focus(), O.current = !1;
    });
    return () => cancelAnimationFrame(u);
  }, [v]);
  const H = Ne(e, o), x = l ? 48 : 44, c = l ? "text.secondary" : a, b = l ? "#01584F" : a, G = {
    width: "100%",
    maxWidth: "100%",
    minWidth: x,
    height: "auto",
    minHeight: x,
    flexDirection: "column",
    py: 0.5,
    // Horizontal padding so labels (esp. active fill) do not touch the box edges
    px: 1,
    borderRadius: "4px",
    color: H ? "#ffffff" : c,
    backgroundColor: H ? b : "transparent",
    "&:hover": {
      backgroundColor: H ? b : "action.hover",
      borderRadius: "4px",
      color: H ? "#ffffff" : c
    }
  }, J = s ? /* @__PURE__ */ t(
    re,
    {
      ref: p,
      component: e.path ? "a" : "button",
      href: e.path || void 0,
      "aria-label": e.text,
      onFocus: () => {
        w.current || T();
      },
      onBlur: (u) => {
        var A;
        const M = u.relatedTarget;
        M && ((A = f.current) != null && A.contains(M)) || U();
      },
      onKeyDown: (u) => {
        u.key === "ArrowDown" && (u.preventDefault(), O.current = !0, T());
      },
      onClick: (u) => {
        u.preventDefault(), u.stopPropagation(), e.path && (r == null || r(e.path));
      },
      "aria-haspopup": "menu",
      "aria-expanded": v,
      "aria-controls": v ? $ : void 0,
      "data-testid": `rail-submenu-trigger-${e.text}`,
      sx: G,
      children: /* @__PURE__ */ h(K, { alignItems: "center", spacing: 1, sx: { width: "100%" }, children: [
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
          Jt,
          {
            text: e.text,
            testId: `rail-item-caption-${e.text}`
          }
        )
      ] })
    }
  ) : /* @__PURE__ */ t(
    re,
    {
      ref: p,
      component: e.path ? "a" : "button",
      href: e.path || void 0,
      "aria-label": e.text,
      onFocus: () => {
        w.current || T();
      },
      onBlur: (u) => {
        var A;
        const M = u.relatedTarget;
        M && ((A = f.current) != null && A.contains(M)) || U();
      },
      onKeyDown: (u) => {
        u.key === "ArrowDown" && (u.preventDefault(), O.current = !0, T());
      },
      onClick: (u) => {
        u.preventDefault(), u.stopPropagation(), e.path && (r == null || r(e.path));
      },
      "aria-haspopup": "menu",
      "aria-expanded": v,
      "aria-controls": v ? $ : void 0,
      "data-testid": `rail-submenu-trigger-${e.text}`,
      sx: {
        width: x,
        height: x,
        color: H ? "#ffffff" : c,
        backgroundColor: H ? b : "transparent",
        borderRadius: H ? "4px" : "50%",
        "&:hover": {
          backgroundColor: H ? b : "action.hover",
          borderRadius: "4px"
        }
      },
      children: e.icon
    }
  );
  return /* @__PURE__ */ h(
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
              w.current = !0, T();
            },
            onMouseLeave: () => {
              w.current = !1, U();
            },
            children: s ? J : /* @__PURE__ */ t(ae, { title: e.text, placement: "right", arrow: !0, children: J })
          }
        ),
        /* @__PURE__ */ t(
          zr,
          {
            open: v && !!g,
            anchorEl: g,
            placement: "right-start",
            modifiers: [{ name: "offset", options: { offset: [8, 0] } }],
            sx: { zIndex: (u) => u.zIndex.modal },
            children: /* @__PURE__ */ t(
              Wr,
              {
                ref: f,
                elevation: 0,
                onMouseEnter: () => {
                  j();
                },
                onMouseLeave: U,
                "data-testid": `rail-submenu-panel-${e.text}`,
                sx: {
                  bgcolor: d,
                  backgroundImage: "none",
                  borderRadius: "4px",
                  border: "1px solid",
                  borderColor: "divider",
                  boxShadow: i.shadows[8],
                  maxWidth: Dt,
                  minWidth: 0,
                  py: 0.5,
                  boxSizing: "border-box"
                },
                children: /* @__PURE__ */ t(
                  Nr,
                  {
                    id: $,
                    dense: !0,
                    autoFocus: !1,
                    role: "menu",
                    sx: {
                      bgcolor: "transparent",
                      py: 0,
                      maxWidth: Dt
                    },
                    children: e.subitems.map((u) => /* @__PURE__ */ h(
                      it,
                      {
                        role: "menuitem",
                        title: u.text,
                        selected: ke(u, o),
                        onClick: (M) => {
                          M.preventDefault(), r == null || r(u.path), N(!1);
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
                            bgcolor: b,
                            color: "#ffffff",
                            "&:hover": {
                              bgcolor: b
                            }
                          },
                          "&.Mui-focusVisible": {
                            bgcolor: "action.focus"
                          }
                        },
                        children: [
                          u.icon ? /* @__PURE__ */ t(ue, { children: u.icon }) : null,
                          /* @__PURE__ */ t(
                            fe,
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
}, ro = ({
  link: e,
  activePath: o,
  onLinkClick: r,
  accentColor: a,
  isSecondary: l,
  railShowTitles: d = !1
}) => {
  const s = !!(e.path && o === e.path), i = l ? 48 : 44, g = l ? "text.secondary" : a, E = l ? "#01584F" : a, v = {
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
  }, N = d ? /* @__PURE__ */ t(
    re,
    {
      component: e.path ? "a" : "button",
      href: e.path || void 0,
      "aria-label": e.text,
      onClick: (R) => {
        R.preventDefault(), R.stopPropagation(), e.path && (r == null || r(e.path));
      },
      disabled: !e.path,
      sx: v,
      children: /* @__PURE__ */ h(K, { alignItems: "center", spacing: 1, sx: { width: "100%" }, children: [
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
          Jt,
          {
            text: e.text,
            testId: `rail-item-caption-${e.text}`
          }
        )
      ] })
    }
  ) : /* @__PURE__ */ t(
    re,
    {
      component: e.path ? "a" : "button",
      href: e.path || void 0,
      "aria-label": e.text,
      onClick: (R) => {
        R.preventDefault(), R.stopPropagation(), e.path && (r == null || r(e.path));
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
  return d ? N : /* @__PURE__ */ t(ae, { title: e.text, placement: "right", arrow: !0, children: N });
}, oo = ({
  link: e,
  expanded: o,
  onToggle: r,
  activePath: a,
  onLinkClick: l,
  accentColor: d,
  groupTint: s,
  activeFg: i,
  isSecondary: g
}) => {
  const E = Ne(e, a), v = !!(e.path && a === e.path), N = Fe().palette.mode === "dark", R = g ? "text.secondary" : N ? "text.primary" : d, f = g ? "#01584F" : d;
  return /* @__PURE__ */ h(
    W,
    {
      sx: {
        borderRadius: "6px",
        bgcolor: E ? s : "transparent"
      },
      children: [
        /* @__PURE__ */ h(
          Re,
          {
            onClick: () => e.path ? l == null ? void 0 : l(e.path) : r(),
            sx: {
              py: 1.5,
              px: 2,
              color: v ? i : R,
              bgcolor: v ? f : "transparent",
              "&:hover": {
                bgcolor: v ? f : s
              }
            },
            "data-testid": `drawer-expand-trigger-${e.text}`,
            children: [
              /* @__PURE__ */ t(ue, { sx: { color: "inherit", minWidth: 40 }, children: e.icon }),
              /* @__PURE__ */ t(fe, { primary: e.text }),
              /* @__PURE__ */ t(
                re,
                {
                  size: "small",
                  edge: "end",
                  "aria-label": o ? `Collapse ${e.text}` : `Expand ${e.text}`,
                  onClick: (p) => {
                    p.stopPropagation(), r();
                  },
                  sx: { color: "inherit" },
                  "data-testid": `drawer-expand-chevron-${e.text}`,
                  children: o ? /* @__PURE__ */ t(Cr, {}) : /* @__PURE__ */ t(Dr, {})
                }
              )
            ]
          }
        ),
        /* @__PURE__ */ t(Lt, { in: o, timeout: "auto", unmountOnExit: !0, children: /* @__PURE__ */ t(W, { component: "nav", "aria-label": e.text, children: e.subitems.map((p) => {
          const w = ke(p, a);
          return /* @__PURE__ */ h(
            Re,
            {
              onClick: () => l == null ? void 0 : l(p.path),
              sx: {
                pl: 4,
                py: 1,
                color: w ? i : R,
                bgcolor: w ? f : "transparent",
                "& .MuiListItemIcon-root": {
                  color: "inherit"
                },
                "&:hover": {
                  bgcolor: w ? f : "action.hover"
                }
              },
              children: [
                p.icon ? /* @__PURE__ */ t(ue, { sx: { minWidth: 36 }, children: p.icon }) : null,
                /* @__PURE__ */ t(fe, { primary: p.text })
              ]
            },
            p.path
          );
        }) }) })
      ]
    }
  );
}, no = ({
  link: e,
  activePath: o,
  onLinkClick: r,
  accentColor: a,
  groupTint: l,
  activeFg: d,
  isSecondary: s
}) => {
  const i = !!(e.path && o === e.path), g = Fe().palette.mode === "dark", E = s ? "text.secondary" : g ? "text.primary" : a, v = s ? "#01584F" : a;
  return /* @__PURE__ */ h(
    Re,
    {
      disabled: !e.path,
      onClick: () => e.path && (r == null ? void 0 : r(e.path)),
      sx: {
        py: 1.5,
        px: 2,
        color: i ? d : E,
        bgcolor: i ? v : "transparent",
        "&:hover": {
          bgcolor: i ? v : l
        }
      },
      children: [
        /* @__PURE__ */ t(ue, { sx: { color: "inherit", minWidth: 40 }, children: e.icon }),
        /* @__PURE__ */ t(fe, { primary: e.text })
      ]
    }
  );
}, Ge = () => /* @__PURE__ */ t(
  W,
  {
    sx: {
      width: "100%",
      display: "flex",
      justifyContent: "center"
    },
    children: /* @__PURE__ */ t(ie, { sx: { width: "60%", borderColor: "divider" } })
  }
), Yt = ({
  variant: e,
  mainLinks: o,
  secondaryLinks: r = [],
  activePath: a,
  onLinkClick: l,
  accentColor: d = "#01584f",
  groupAccentColor: s,
  surfaceBackgroundColor: i,
  railShowTitles: g = !1
}) => {
  const E = Fe(), v = i ?? E.palette.background.paper, N = Pt(d), R = s ?? kt(d), f = (x) => {
    l && l(x);
  }, [p, w] = y.useState({}), [O, $] = y.useState({}), j = (x) => {
    w((c) => ({
      ...c,
      [x]: !c[x]
    }));
  }, U = (x) => {
    $((c) => ({
      ...c,
      [x]: !c[x]
    }));
  }, T = (x, c) => {
    var b;
    return (b = x.subitems) != null && b.length ? /* @__PURE__ */ t(
      to,
      {
        link: x,
        activePath: a,
        onLinkClick: f,
        accentColor: d,
        isSecondary: c,
        surfaceBackgroundColor: v,
        railShowTitles: g
      }
    ) : /* @__PURE__ */ t(
      ro,
      {
        link: x,
        activePath: a,
        onLinkClick: f,
        accentColor: d,
        isSecondary: c,
        railShowTitles: g
      }
    );
  }, H = (x, c, b) => {
    var G;
    if ((G = x.subitems) != null && G.length) {
      const J = b ? !!O[c] : !!p[c];
      return /* @__PURE__ */ t(
        oo,
        {
          link: x,
          expanded: J,
          onToggle: () => b ? U(c) : j(c),
          activePath: a,
          onLinkClick: f,
          accentColor: d,
          groupTint: R,
          activeFg: N,
          isSecondary: b
        }
      );
    }
    return /* @__PURE__ */ t(
      no,
      {
        link: x,
        activePath: a,
        onLinkClick: f,
        accentColor: d,
        groupTint: R,
        activeFg: N,
        isSecondary: b
      }
    );
  };
  return e === "drawer" ? /* @__PURE__ */ h(
    K,
    {
      sx: {
        flexGrow: 1,
        width: "100%",
        alignItems: "stretch",
        pt: 2,
        gap: 0
      },
      children: [
        /* @__PURE__ */ t(K, { sx: { width: "100%" }, children: o.map((x, c) => /* @__PURE__ */ h(y.Fragment, { children: [
          H(x, c, !1),
          c < o.length - 1 ? /* @__PURE__ */ t(Ge, {}) : null
        ] }, c)) }),
        r.length > 0 ? /* @__PURE__ */ h(Pe, { children: [
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
                ie,
                {
                  sx: { width: "60%", borderColor: "divider" }
                }
              )
            }
          ),
          /* @__PURE__ */ t(W, { sx: { mt: "auto", pb: 2 }, children: /* @__PURE__ */ t(K, { sx: { width: "100%" }, children: r.map((x, c) => /* @__PURE__ */ h(y.Fragment, { children: [
            H(x, c, !0),
            c < r.length - 1 ? /* @__PURE__ */ t(Ge, {}) : null
          ] }, c)) }) })
        ] }) : null
      ]
    }
  ) : /* @__PURE__ */ h(
    K,
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
        o.map((x, c) => /* @__PURE__ */ h(y.Fragment, { children: [
          T(x, !1),
          c < o.length - 1 ? /* @__PURE__ */ t(Ge, {}) : null
        ] }, c)),
        r.length > 0 ? /* @__PURE__ */ h(Pe, { children: [
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
                ie,
                {
                  sx: { width: "60%", borderColor: "divider" }
                }
              )
            }
          ),
          /* @__PURE__ */ t(W, { sx: { mt: "auto", pb: 2 }, children: /* @__PURE__ */ t(
            K,
            {
              gap: g ? 1.25 : 1,
              alignItems: "center",
              children: r.map((x, c) => /* @__PURE__ */ h(y.Fragment, { children: [
                T(x, !0),
                c < r.length - 1 ? /* @__PURE__ */ t(Ge, {}) : null
              ] }, c))
            }
          ) })
        ] }) : null
      ]
    }
  );
}, ao = ({
  open: e,
  onClose: o,
  mainLinks: r,
  secondaryLinks: a = [],
  activePath: l,
  onLinkClick: d,
  userName: s = "User Name",
  userAvatar: i,
  userRole: g,
  onLogout: E,
  theme: v = "light",
  showThemeToggler: N = !1,
  onThemeToggle: R,
  alertProps: f,
  accentColor: p = "#01584f",
  groupAccentColor: w
}) => {
  const O = v === "dark", $ = O ? "Switch to light mode" : "Switch to dark mode", j = (T) => T ? T.charAt(0).toUpperCase() + T.slice(1).toLowerCase() : "User", U = (T) => {
    d == null || d(T), o();
  };
  return /* @__PURE__ */ t(
    Fr,
    {
      anchor: "left",
      open: e,
      onClose: o,
      sx: {
        zIndex: (T) => T.zIndex.drawer + 1,
        "& .MuiDrawer-paper": {
          backgroundImage: "none",
          backgroundColor: "background.paper"
        }
      },
      children: /* @__PURE__ */ h(
        K,
        {
          sx: {
            maxWidth: "70dvw",
            height: "100%"
          },
          children: [
            /* @__PURE__ */ h(
              K,
              {
                direction: "row",
                sx: { p: 2, gap: 1, alignItems: "center" },
                children: [
                  /* @__PURE__ */ h(
                    K,
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
                          at,
                          {
                            sizes: "small",
                            alt: s,
                            src: i,
                            sx: { width: 40, height: 40, flexShrink: 0 }
                          }
                        ),
                        /* @__PURE__ */ h(
                          W,
                          {
                            sx: {
                              display: "flex",
                              flexDirection: "column",
                              minWidth: 0
                            },
                            children: [
                              /* @__PURE__ */ t(
                                Q,
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
                                Q,
                                {
                                  variant: "caption",
                                  sx: {
                                    color: "text.secondary",
                                    lineHeight: 1.2,
                                    overflow: "hidden",
                                    textOverflow: "ellipsis",
                                    whiteSpace: "nowrap"
                                  },
                                  children: j(g)
                                }
                              )
                            ]
                          }
                        )
                      ]
                    }
                  ),
                  N && /* @__PURE__ */ t(ae, { title: $, placement: "bottom", children: /* @__PURE__ */ t("span", { children: /* @__PURE__ */ t(
                    re,
                    {
                      size: "small",
                      onClick: R,
                      disabled: !R,
                      "aria-label": $,
                      children: O ? /* @__PURE__ */ t(Kt, { fontSize: "small" }) : /* @__PURE__ */ t(Bt, { fontSize: "small" })
                    }
                  ) }) })
                ]
              }
            ),
            /* @__PURE__ */ t(ie, {}),
            /* @__PURE__ */ h(K, { sx: { flexGrow: 1 }, children: [
              /* @__PURE__ */ t(
                Yt,
                {
                  variant: "drawer",
                  mainLinks: r,
                  secondaryLinks: a,
                  activePath: l,
                  onLinkClick: U,
                  accentColor: p,
                  groupAccentColor: w
                }
              ),
              /* @__PURE__ */ t(ie, {})
            ] }),
            (f == null ? void 0 : f.show) && /* @__PURE__ */ t(lt, { ...f }),
            /* @__PURE__ */ t(K, { sx: { p: 2 }, children: /* @__PURE__ */ t(
              Ht,
              {
                variant: "outlined",
                fullWidth: !0,
                startIcon: /* @__PURE__ */ t(Ut, {}),
                onClick: E,
                children: "Logout"
              }
            ) })
          ]
        }
      )
    }
  );
}, io = 100, nt = 80, so = 60, Nt = 264, Wt = 72, zt = "lumora:sidebar-collapsed", Ft = "width 200ms ease, left 200ms ease", en = ({
  children: e,
  sidebarLinks: o = [],
  secondarySidebarLinks: r = [],
  appName: a = "Dashboard",
  pageName: l = "Home",
  showHeader: d = !0,
  showSidebar: s = !0,
  showSidebarRailTitles: i = !1,
  sidebarVariant: g = "rail",
  logo: E,
  sidebarBackgroundColor: v,
  groupAccentColor: N,
  activeSidebarForegroundColor: R,
  enableRefreshToken: f = !1,
  activePath: p,
  onLinkClick: w,
  userName: O,
  userEmail: $,
  userAvatar: j,
  onLogout: U,
  onProfileClick: T,
  onAccountClick: H,
  onSettingsClick: x,
  showSettings: c = !0,
  showNotifications: b = !0,
  notificationCount: G = 0,
  NotificationSidebarContent: J,
  showSearchbar: u = !0,
  searchValue: M,
  onSearchChange: A,
  onSearchSubmit: se,
  showProfile: ge = !0,
  userRole: ce,
  onVerify: X,
  alertProps: Y,
  style: me,
  headerStyles: xe,
  sidebarStyles: be,
  contentStyles: Ie,
  accentColor: Se,
  sidebarAccentColor: we,
  sidebarForegroundColor: n,
  contentBackgroundColor: m,
  navbarBackground: B,
  navbarAccentColor: z,
  theme: L = "light",
  showThemeToggler: V = !1,
  onThemeToggle: P,
  GlobalChatSidebar: oe,
  useChatSidebar: Te,
  showAssistant: je = !1,
  onAssistantClick: Xe,
  assistantActive: Ve = !1,
  assistantBusy: Me = !1,
  rightExtraContent: Be,
  customNavbar: S,
  customNavbarProps: Zt,
  redirectToLogin: Ke,
  apiBaseUrl: ct
}) => {
  const qt = dr(), ne = hr(qt.breakpoints.down("md")), dt = vt(
    () => Mt(Mr(L)),
    [L]
  ), Ue = L === "dark", He = Se ?? "#01584f", Je = we ?? He, Le = m ?? (Ue ? "hsl(220, 35%, 9%)" : "#f2f9fc"), Qt = B ?? (Ue ? "hsl(220, 30%, 7%)" : "#ffffff"), er = z ?? (Ue ? "#ffffff" : "#000000"), ye = g === "collapsible", he = g === "rail-labeled", ht = ye || he, Oe = he && s && !ne, tr = E ?? /* @__PURE__ */ t(
    pe,
    {
      role: "img",
      "aria-label": `${a} logo`,
      sx: {
        width: 28,
        height: 28,
        flexShrink: 0,
        // Accent in light mode; a legible light fill in dark mode.
        bgcolor: Ue ? "#ffffff" : He,
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
  ), [Ae, rr] = ve(
    () => Vt(zt) ?? !1
  ), pt = (_e) => {
    rr(_e), jr(zt, _e);
  };
  let de = 0;
  s && !ne && (he ? de = nt : ye ? de = Ae ? Wt : Nt : de = io);
  const [ut, ft] = ve(!1), [or, Ye] = ve(!1), [nr, ar] = ve(!0), [ir, sr] = ve(!1), [lo, $e] = ve(null), Ze = Te == null ? void 0 : Te(), gt = (Ze == null ? void 0 : Ze.isOpen) ?? !1, qe = Rt(X), mt = Rt(!1), xt = vt(
    () => Hr(ct),
    [ct]
  );
  tt(() => {
    qe.current = X;
  }, [X]);
  const lr = () => {
    ft(!ut);
  }, cr = () => {
    ft(!1);
  }, bt = (_e) => {
    const Ee = U(_e);
    Ee instanceof Promise ? Ee.then(() => {
      $e(null);
    }).catch((St) => {
      console.error("Error in logout handler:", St), $e(null);
    }) : $e(null);
  };
  return tt(() => {
    (() => {
      try {
        const { isAuthenticated: Ee, error: St } = Kr();
        if (!Ee) {
          console.log("No session found, redirecting to login"), ze(), Ke();
          return;
        }
        if (!mt.current) {
          const { user: Ce, error: Qe } = Ur();
          if (Ce && !Qe) {
            const wt = {
              name: Ce.name || "",
              email: Ce.email || "",
              profilePicture: Ce.profilePicture || "",
              role: Ce.role || ""
            };
            $e(wt), mt.current = !0, qe.current && qe.current(wt);
          } else
            Qe && console.error("Error getting user data:", Qe);
        }
        sr(!0);
      } catch (Ee) {
        console.error("Error checking session:", Ee), ze(), Ke();
      } finally {
        ar(!1);
      }
    })();
  }, [Ke]), tt(() => {
    f && Lr(xt, Ke);
  }, [f, xt]), nr ? /* @__PURE__ */ t(Et, { theme: dt, children: /* @__PURE__ */ h(
    pe,
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
          pr,
          {
            size: 60,
            thickness: 4,
            sx: { color: He }
          }
        ),
        /* @__PURE__ */ t(pe, { sx: { mt: 2, color: "text.secondary" }, children: "Checking session..." })
      ]
    }
  ) }) : ir ? /* @__PURE__ */ t(Et, { theme: dt, children: /* @__PURE__ */ h(
    pe,
    {
      sx: {
        display: "flex",
        minHeight: "100vh",
        ...me
      },
      children: [
        /* @__PURE__ */ t(ur, {}),
        d && /* @__PURE__ */ t(
          kr,
          {
            appName: a,
            pageName: l,
            isMobile: ne,
            onMenuClick: ne ? s ? lr : void 0 : ye && s ? () => pt(
              !Ae
            ) : void 0,
            showMenuButton: s && (ne || ye),
            sidebarCollapsed: !ne && ye ? Ae : void 0,
            showBrand: !0,
            leftOffsetPx: Oe ? nt : 0,
            logo: tr,
            headerStyles: xe,
            userName: O,
            userEmail: $,
            userAvatar: j,
            onProfileClick: T,
            onAccountClick: H,
            onSettingsClick: x,
            showSettings: c,
            onLogout: bt,
            showNotifications: b,
            notificationCount: G,
            onNotificationBellClick: b && J ? () => Ye(!0) : void 0,
            showSearchbar: u && !S,
            searchValue: M,
            onSearchChange: A,
            onSearchSubmit: se,
            showProfile: ge,
            userRole: ce,
            accentColor: He,
            contentBackgroundColor: Le,
            navbarBackground: Qt,
            navbarAccentColor: er,
            theme: L,
            showThemeToggler: V,
            onThemeToggle: P,
            rightExtraContent: Be,
            customNavbar: S,
            customNavbarProps: Zt,
            showAssistant: je,
            onAssistantClick: Xe,
            assistantActive: Ve,
            assistantBusy: Me
          }
        ),
        s && !ne && ht && /* @__PURE__ */ h(
          pe,
          {
            component: "aside",
            sx: {
              width: de,
              minWidth: de,
              flexShrink: 0,
              zIndex: 2,
              position: "sticky",
              // rail-labeled spans the full viewport height with the
              // navbar inset to its right; the collapsible panel sits
              // below the fixed 60px navbar.
              top: Oe ? 0 : d ? "60px" : 0,
              mt: Oe ? 0 : d ? "60px" : 0,
              alignSelf: "flex-start",
              height: Oe ? "100vh" : d ? "calc(100vh - 60px)" : "100vh",
              transition: Ft,
              ...be
            },
            children: [
              /* @__PURE__ */ t(
                Qr,
                {
                  mainLinks: o,
                  secondaryLinks: r,
                  activePath: p,
                  onLinkClick: w,
                  activeAccentColor: Je,
                  groupAccentColor: N,
                  activeForegroundColor: R,
                  foregroundColor: n,
                  surfaceBackgroundColor: v,
                  collapsed: he ? !0 : Ae,
                  onCollapsedChange: he ? void 0 : pt,
                  showLabels: he,
                  topInsetPx: Oe && d ? so : 0,
                  expandedWidth: Nt,
                  collapsedWidth: he ? nt : Wt
                }
              ),
              ye && (Y == null ? void 0 : Y.show) && !Ae && /* @__PURE__ */ t(lt, { ...Y })
            ]
          }
        ),
        s && !ne && !ht && /* @__PURE__ */ t(
          yt,
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
                bgcolor: Le,
                borderRight: "none",
                top: d ? "60px" : 0,
                // Position below header
                height: d ? "calc(100vh - 60px)" : "100vh"
              },
              ...be
            },
            children: /* @__PURE__ */ h(
              pe,
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
                    Yt,
                    {
                      variant: "rail",
                      mainLinks: o,
                      secondaryLinks: r,
                      activePath: p,
                      onLinkClick: w,
                      accentColor: Je,
                      surfaceBackgroundColor: Le,
                      railShowTitles: i
                    }
                  ),
                  (Y == null ? void 0 : Y.show) && /* @__PURE__ */ t(lt, { ...Y })
                ]
              }
            )
          }
        ),
        s && ne && /* @__PURE__ */ t(
          ao,
          {
            open: ut,
            onClose: cr,
            mainLinks: o,
            secondaryLinks: r,
            activePath: p,
            onLinkClick: w,
            userName: O,
            userEmail: $,
            userAvatar: j,
            userRole: ce,
            onLogout: bt,
            onProfileClick: T,
            theme: L,
            showThemeToggler: V,
            onThemeToggle: P,
            alertProps: Y,
            accentColor: Je,
            groupAccentColor: N
          }
        ),
        /* @__PURE__ */ t(
          pe,
          {
            component: "main",
            sx: {
              flexGrow: 1,
              p: 3,
              width: ne ? "100%" : s ? `calc(100% - ${de}px)` : "100%",
              transition: Ft,
              mt: d ? "60px" : 0,
              // Account for AppNavbar height (60px)
              ml: 0,
              // Offset for sidebar on desktop
              backgroundColor: Le,
              mb: 0,
              mr: 0,
              ...Ie
            },
            children: /* @__PURE__ */ h(et, { container: !0, spacing: 3, children: [
              /* @__PURE__ */ t(
                et,
                {
                  size: {
                    xs: 12,
                    md: gt && oe ? 8.5 : 12
                  },
                  sx: {
                    display: "flex",
                    flexDirection: "column"
                  },
                  children: e
                }
              ),
              gt && oe && /* @__PURE__ */ t(
                et,
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
                  children: /* @__PURE__ */ t(oe, {})
                }
              )
            ] })
          }
        ),
        b && J && /* @__PURE__ */ t(
          yt,
          {
            anchor: "right",
            open: or,
            onClose: () => Ye(!1),
            slotProps: {
              paper: { sx: { width: 380, maxWidth: "100vw" } }
            },
            children: /* @__PURE__ */ t(
              J,
              {
                onClose: () => Ye(!1)
              }
            )
          }
        )
      ]
    }
  ) }) : null;
};
export {
  F as AUTH_ERROR_CODES,
  D as AuthError,
  Qr as CollapsibleSidebar,
  en as LumoraWrapper,
  ze as clearAuthTokens,
  en as default,
  Qo as getAuthErrorMessage,
  We as getAuthTokens,
  Ur as getCurrentUser,
  Kr as isAuthenticated,
  st as logAuthError,
  Gt as storeAuthTokens
};
