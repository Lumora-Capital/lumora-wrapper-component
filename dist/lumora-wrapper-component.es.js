import { jsxs as d, jsx as t, Fragment as be } from "react/jsx-runtime";
import { useTheme as Rr, useMediaQuery as Ir, Box as Ie, CircularProgress as Tr, CssBaseline as Or, Drawer as At, Grid as lt } from "@mui/material";
import { createTheme as Xt, alpha as te, styled as _r, useTheme as Xe, ThemeProvider as Dt } from "@mui/material/styles";
import * as y from "react";
import { useMemo as Nt, useState as ze, useRef as Wt, useEffect as ct } from "react";
import Ft from "axios";
import zt from "@mui/icons-material/AccountCircleRounded";
import Vt from "@mui/icons-material/DarkMode";
import Yt from "@mui/icons-material/LightMode";
import Jt from "@mui/icons-material/LogoutRounded";
import Zt from "@mui/icons-material/MenuRounded";
import Cr from "@mui/icons-material/NotificationsOutlined";
import Ar from "@mui/icons-material/SearchRounded";
import Dr from "@mui/material/AppBar";
import ut from "@mui/material/Avatar";
import Nr from "@mui/material/Badge";
import C from "@mui/material/Box";
import qt from "@mui/material/ButtonBase";
import he from "@mui/material/Divider";
import ee from "@mui/material/IconButton";
import Wr from "@mui/material/InputAdornment";
import Fr from "@mui/material/Menu";
import pt from "@mui/material/MenuItem";
import H from "@mui/material/Stack";
import zr from "@mui/material/TextField";
import Mr from "@mui/material/Toolbar";
import ne from "@mui/material/Tooltip";
import Q from "@mui/material/Typography";
import Br from "@mui/material/useMediaQuery";
import Hr from "@mui/material/useScrollTrigger";
import Ur from "@mui/material/Card";
import Kr from "@mui/material/CardContent";
import Qt from "@mui/material/Button";
import Lr from "@mui/icons-material/AutoAwesomeRounded";
import $r from "@mui/icons-material/KeyboardArrowDownRounded";
import Gr from "@mui/icons-material/KeyboardArrowUpRounded";
import er from "@mui/material/Collapse";
import Me from "@mui/material/ListItemButton";
import Te from "@mui/material/ListItemIcon";
import Oe from "@mui/material/ListItemText";
import kr from "@mui/icons-material/ExpandLess";
import Pr from "@mui/icons-material/ExpandMore";
import jr from "@mui/material/MenuList";
import Xr from "@mui/material/Paper";
import Vr from "@mui/material/Popper";
import Yr from "@mui/material/Drawer";
const A = Xt(), Mt = [...A.shadows], v = {
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
}, re = {
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
}, Y = {
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
}, oe = {
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
}, Jr = (e) => (Mt[1] = e === "dark" ? "hsla(220, 30%, 5%, 0.7) 0px 4px 16px 0px, hsla(220, 25%, 10%, 0.8) 0px 8px 16px -5px" : "hsla(220, 30%, 5%, 0.07) 0px 4px 16px 0px, hsla(220, 25%, 10%, 0.07) 0px 8px 16px -5px", {
  palette: {
    mode: e,
    primary: {
      light: v[200],
      main: v[400],
      dark: v[700],
      contrastText: v[50],
      ...e === "dark" && {
        contrastText: v[50],
        light: v[300],
        main: v[400],
        dark: v[700]
      }
    },
    info: {
      light: v[100],
      main: v[300],
      dark: v[600],
      contrastText: _[50],
      ...e === "dark" && {
        contrastText: v[300],
        light: v[500],
        main: v[700],
        dark: v[900]
      }
    },
    warning: {
      light: Y[300],
      main: Y[400],
      dark: Y[800],
      ...e === "dark" && {
        light: Y[400],
        main: Y[500],
        dark: Y[700]
      }
    },
    error: {
      light: oe[300],
      main: oe[400],
      dark: oe[800],
      ...e === "dark" && {
        light: oe[400],
        main: oe[500],
        dark: oe[700]
      }
    },
    success: {
      light: re[300],
      main: re[400],
      dark: re[800],
      ...e === "dark" && {
        light: re[400],
        main: re[500],
        dark: re[700]
      }
    },
    grey: {
      ..._
    },
    divider: e === "dark" ? te(_[700], 0.6) : te(_[300], 0.4),
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
      warning: Y[400],
      ...e === "dark" && {
        primary: "hsl(0, 0%, 100%)",
        secondary: _[400]
      }
    },
    action: {
      hover: te(_[200], 0.2),
      selected: `${te(_[200], 0.3)}`,
      ...e === "dark" && {
        hover: te(_[600], 0.2),
        selected: te(_[600], 0.3)
      }
    }
  },
  typography: {
    fontFamily: "Inter, sans-serif",
    h1: {
      fontSize: A.typography.pxToRem(48),
      fontWeight: 600,
      lineHeight: 1.2,
      letterSpacing: -0.5
    },
    h2: {
      fontSize: A.typography.pxToRem(36),
      fontWeight: 600,
      lineHeight: 1.2
    },
    h3: {
      fontSize: A.typography.pxToRem(30),
      lineHeight: 1.2
    },
    h4: {
      fontSize: A.typography.pxToRem(24),
      fontWeight: 600,
      lineHeight: 1.5
    },
    h5: {
      fontSize: A.typography.pxToRem(20),
      fontWeight: 600
    },
    h6: {
      fontSize: A.typography.pxToRem(18),
      fontWeight: 600
    },
    subtitle1: {
      fontSize: A.typography.pxToRem(18)
    },
    subtitle2: {
      fontSize: A.typography.pxToRem(14),
      fontWeight: 500
    },
    body1: {
      fontSize: A.typography.pxToRem(14)
    },
    body2: {
      fontSize: A.typography.pxToRem(14),
      fontWeight: 400
    },
    caption: {
      fontSize: A.typography.pxToRem(12),
      fontWeight: 400
    }
  },
  shape: {
    borderRadius: 8
  },
  shadows: Mt
});
v[200], v[400], v[700], v[50], v[100], v[300], v[600], _[50], Y[300], Y[400], Y[800], oe[300], oe[400], oe[800], re[300], re[400], re[800], {
  ..._
}, te(_[300], 0.4), _[800], _[600], Y[400], te(_[200], 0.2), `${te(_[200], 0.3)}`, v[50], v[300], v[400], v[700], v[300], v[500], v[700], v[900], Y[400], Y[500], Y[700], oe[400], oe[500], oe[700], re[400], re[500], re[700], {
  ..._
}, te(_[700], 0.6), _[900], _[400], te(_[600], 0.2), te(_[600], 0.3);
A.typography.pxToRem(48), A.typography.pxToRem(36), A.typography.pxToRem(30), A.typography.pxToRem(24), A.typography.pxToRem(20), A.typography.pxToRem(18), A.typography.pxToRem(18), A.typography.pxToRem(14), A.typography.pxToRem(14), A.typography.pxToRem(14), A.typography.pxToRem(12);
[
  ...A.shadows.slice(2)
];
class D extends Error {
  constructor(o, r, a = null) {
    super(o), this.name = "AuthError", this.code = r, this.originalError = a, this.timestamp = (/* @__PURE__ */ new Date()).toISOString();
  }
}
const z = {
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
}, ge = {
  ACCESS_TOKEN: "accessToken",
  REFRESH_TOKEN: "refreshToken",
  USER: "user"
}, Zr = () => {
  if (!(typeof window > "u" || !window.localStorage))
    try {
      const e = localStorage.getItem(ge.ACCESS_TOKEN), o = localStorage.getItem(ge.REFRESH_TOKEN), r = localStorage.getItem(ge.USER);
      e && !localStorage.getItem(k.ACCESS_TOKEN) && localStorage.setItem(k.ACCESS_TOKEN, e), o && !localStorage.getItem(k.REFRESH_TOKEN) && localStorage.setItem(k.REFRESH_TOKEN, o), r && !localStorage.getItem(k.USER) && localStorage.setItem(k.USER, r), (e || o || r) && (localStorage.removeItem(ge.ACCESS_TOKEN), localStorage.removeItem(ge.REFRESH_TOKEN), localStorage.removeItem(ge.USER));
    } catch (e) {
      console.warn("Failed to migrate legacy localStorage keys:", e);
    }
}, dt = (e) => {
  try {
    if (typeof window > "u")
      return console.warn("localStorage access attempted on server side"), null;
    if (!window.localStorage)
      throw new D("localStorage is not available", z.STORAGE_ACCESS_DENIED);
    return window.localStorage.getItem(e);
  } catch (o) {
    throw o.name === "QuotaExceededError" ? (console.error("Storage quota exceeded"), new D(
      "Storage quota exceeded. Please clear browser data.",
      z.STORAGE_ACCESS_DENIED,
      o
    )) : o.name === "SecurityError" ? (console.error("localStorage access denied (private browsing or security settings)"), new D(
      "Access to localStorage is denied. Please check browser settings.",
      z.STORAGE_ACCESS_DENIED,
      o
    )) : (console.error("Unexpected error accessing localStorage:", o.name), new D("Failed to access storage", z.STORAGE_ACCESS_DENIED, o));
  }
}, ht = (e, o) => {
  try {
    if (typeof window > "u")
      return console.warn("localStorage write attempted on server side"), !1;
    if (!window.localStorage)
      throw new D("localStorage is not available", z.STORAGE_ACCESS_DENIED);
    return window.localStorage.setItem(e, o), !0;
  } catch (r) {
    throw r.name === "QuotaExceededError" ? (console.error("Storage quota exceeded"), new D(
      "Storage quota exceeded. Please clear browser data.",
      z.STORAGE_ACCESS_DENIED,
      r
    )) : r.name === "SecurityError" ? (console.error("localStorage write denied (private browsing or security settings)"), new D(
      "Access to localStorage is denied. Please check browser settings.",
      z.STORAGE_ACCESS_DENIED,
      r
    )) : (console.error("Unexpected error writing to localStorage:", r.name), new D("Failed to write to storage", z.STORAGE_ACCESS_DENIED, r));
  }
}, tr = (e) => {
  try {
    return typeof window > "u" ? (console.warn("localStorage removal attempted on server side"), !1) : window.localStorage ? (window.localStorage.removeItem(e), !0) : (console.warn("localStorage is not available"), !1);
  } catch (o) {
    return o.name !== "SecurityError" && console.warn(`Could not remove localStorage key "${e}"`), !1;
  }
}, Pe = () => {
  try {
    Zr();
    const e = dt(k.ACCESS_TOKEN), o = dt(k.REFRESH_TOKEN), r = dt(k.USER);
    let a = null;
    if (r)
      try {
        a = JSON.parse(r);
      } catch {
        r && r !== "null" && r !== "undefined" && console.warn("Invalid user data in localStorage, clearing:", r.substring(0, 50)), tr(k.USER);
      }
    return {
      accessToken: e,
      refreshToken: o,
      user: a
    };
  } catch (e) {
    throw e instanceof D ? e : new D("Failed to retrieve authentication tokens", z.UNKNOWN_ERROR, e);
  }
}, qr = () => {
  try {
    const { accessToken: e, refreshToken: o } = Pe();
    return !(e || o) ? {
      isAuthenticated: !1,
      error: new D("No authentication tokens found", z.TOKEN_NOT_FOUND)
    } : {
      isAuthenticated: !0,
      error: null
    };
  } catch (e) {
    return console.error("Authentication check failed:", e), {
      isAuthenticated: !1,
      error: e instanceof D ? e : new D("Authentication check failed", z.UNKNOWN_ERROR, e)
    };
  }
}, rr = (e, o, r = null) => {
  try {
    if (!e && !o)
      throw new D("At least one token must be provided", z.TOKEN_INVALID);
    return e && ht(k.ACCESS_TOKEN, e), o && ht(k.REFRESH_TOKEN, o), r && ht(k.USER, JSON.stringify(r)), {
      success: !0,
      error: null
    };
  } catch (a) {
    return console.error("Failed to store authentication tokens:", a), {
      success: !1,
      error: a instanceof D ? a : new D("Failed to store tokens", z.UNKNOWN_ERROR, a)
    };
  }
}, je = () => {
  try {
    return [
      k.ACCESS_TOKEN,
      k.REFRESH_TOKEN,
      k.USER,
      // Also clear legacy keys for complete cleanup
      ge.ACCESS_TOKEN,
      ge.REFRESH_TOKEN,
      ge.USER
    ].map((a) => tr(a)).every((a) => a) || console.warn("Some tokens could not be removed from localStorage"), {
      success: !0,
      error: null
    };
  } catch (e) {
    return console.error("Failed to clear authentication tokens:", e), {
      success: !1,
      error: e instanceof D ? e : new D("Failed to clear tokens", z.LOGOUT_FAILED, e)
    };
  }
}, Qr = () => {
  try {
    const { user: e } = Pe();
    return {
      user: e,
      error: null
    };
  } catch (e) {
    return console.error("Failed to get current user:", e), {
      user: null,
      error: e instanceof D ? e : new D("Failed to retrieve user data", z.UNKNOWN_ERROR, e)
    };
  }
}, gn = (e) => {
  if (!(e instanceof D))
    return "An unexpected error occurred. Please try again.";
  switch (e.code) {
    case z.STORAGE_ACCESS_DENIED:
      return "Unable to access browser storage. Please check your browser settings and disable private browsing if enabled.";
    case z.TOKEN_NOT_FOUND:
      return "You are not logged in. Please sign in to continue.";
    case z.TOKEN_INVALID:
      return "Your session is invalid. Please sign in again.";
    case z.TOKEN_EXPIRED:
      return "Your session has expired. Please sign in again.";
    case z.LOGOUT_FAILED:
      return "Failed to log out properly. Please clear your browser cache and try again.";
    case z.UNKNOWN_ERROR:
    default:
      return "An unexpected error occurred. Please try again or contact support if the problem persists.";
  }
}, ft = (e, o = "Unknown") => {
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
}, eo = (e) => {
  if (!e)
    throw new Error("API base URL is required to create axios client");
  const o = Ft.create({
    baseURL: e,
    headers: {
      "Content-Type": "application/json"
    }
  });
  let r = !1, a = null, c = [];
  const h = (s, i) => {
    c.forEach(({ resolve: g, reject: b }) => {
      s ? b(s) : i && g(i);
    }), c = [];
  };
  return o.interceptors.request.use(
    (s) => {
      const { accessToken: i } = Pe();
      return i && s.headers && (s.headers.Authorization = `Bearer ${i}`), s;
    },
    (s) => Promise.reject(s)
  ), o.interceptors.response.use(
    (s) => s,
    async (s) => {
      var I;
      const i = s.config, g = (I = s.response) == null ? void 0 : I.status, b = (i == null ? void 0 : i.url) || "", w = b.includes("/auth/refresh");
      if (g !== 401 || i._retry || w)
        return Promise.reject(s);
      i._retry = !0;
      const { refreshToken: N } = Pe();
      if (!N) {
        const u = new Error(
          "No refresh token available for token refresh"
        );
        return ft(u, "AxiosClient - Token Refresh"), je(), typeof window < "u" && (window.location.href = "/login"), Promise.reject(s);
      }
      if (r && a)
        return new Promise((u, R) => {
          c.push({ resolve: u, reject: R });
        }).then((u) => {
          const {
            accessToken: R,
            refreshToken: E
          } = u;
          if (i.headers && (i.headers.Authorization = `Bearer ${R}`), b.includes("/auth/logout"))
            try {
              if (typeof i.data == "string") {
                const O = JSON.parse(
                  i.data || "{}"
                );
                O.refresh_token = E, i.data = JSON.stringify(O);
              } else
                i.data && typeof i.data == "object" ? i.data.refresh_token = E : i.data = JSON.stringify({
                  refresh_token: E
                });
            } catch {
              i.data = JSON.stringify({
                refresh_token: E
              });
            }
          return o(i);
        }).catch((u) => Promise.reject(u));
      r = !0, a = Ft.post(
        `${e}/auth/refresh`,
        {
          refresh_token: N
        }
      );
      try {
        const u = await a, { accessToken: R, refreshToken: E } = u.data;
        if (rr(R, E, null), h(null, {
          accessToken: R,
          refreshToken: E
        }), i.headers && (i.headers.Authorization = `Bearer ${R}`), b.includes("/auth/logout"))
          try {
            if (typeof i.data == "string") {
              const O = JSON.parse(
                i.data || "{}"
              );
              O.refresh_token = E, i.data = JSON.stringify(O);
            } else
              i.data && typeof i.data == "object" ? i.data.refresh_token = E : i.data = JSON.stringify({
                refresh_token: E
              });
          } catch {
            i.data = JSON.stringify({
              refresh_token: E
            });
          }
        return o(i);
      } catch (u) {
        return ft(
          u,
          "AxiosClient - Token Refresh Failed"
        ), h(u), je(), typeof window < "u" && (window.location.href = "/login"), Promise.reject(u);
      } finally {
        r = !1, a = null;
      }
    }
  ), o;
}, to = async (e, o) => {
  const { accessToken: r, refreshToken: a } = Pe();
  if (r)
    return !0;
  if (a)
    try {
      const c = await e.post("/auth/refresh", {
        refresh_token: a
      });
      if (c.data.success && c.data.accessToken)
        return rr(c.data.accessToken, c.data.refreshToken || null, null), !0;
    } catch (c) {
      ft(c, "TokenValidator - Refresh Failed");
    }
  return je(), o ? o() : window.location.href = "/login", !1;
}, ro = ({ size: e = 20, style: o }) => /* @__PURE__ */ d(
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
), oo = ({
  onClick: e,
  active: o = !1,
  busy: r = !1,
  navbarBackground: a = "#ffffff"
}) => /* @__PURE__ */ t(ne, { title: "Nexa", placement: "bottom", children: /* @__PURE__ */ t(
  ee,
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
      C,
      {
        sx: {
          position: "relative",
          zIndex: 2,
          display: "flex",
          alignItems: "center"
        },
        children: /* @__PURE__ */ t(ro, { size: 20 })
      }
    )
  }
) }), no = _r(Mr)({
  width: "100%",
  padding: "8px 16px",
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
  gap: "16px",
  flexShrink: 0
}), ao = ({
  appName: e = "Dashboard",
  pageName: o = "Home",
  onMenuClick: r,
  showMenuButton: a = !0,
  isMobile: c = !1,
  sidebarCollapsed: h,
  showBrand: s = !0,
  logo: i,
  onBrandClick: g,
  leftOffsetPx: b = 0,
  headerStyles: w,
  userName: N = "User Name",
  userEmail: I,
  userAvatar: u,
  onProfileClick: R,
  onAccountClick: E,
  onSettingsClick: O,
  showSettings: K = !0,
  onLogout: P,
  showNotifications: G = !1,
  notificationCount: T = 0,
  onNotificationBellClick: S,
  theme: m = "light",
  showThemeToggler: f = !1,
  onThemeToggle: W,
  showSearchbar: ae = !0,
  searchValue: X,
  onSearchChange: p,
  onSearchSubmit: x,
  showProfile: L = !0,
  userRole: Be,
  accentColor: F = "#01584f",
  contentBackgroundColor: $ = "#f2f9fc",
  navbarBackground: se = "#ff0000",
  navbarAccentColor: V = "#000000",
  rightExtraContent: J = [],
  customNavbar: j,
  customNavbarProps: Z,
  showAssistant: _e = !1,
  onAssistantClick: le,
  assistantActive: He = !1,
  assistantBusy: me = !1
}) => {
  const Ue = Br((l) => l.breakpoints.up("md")), Ce = Hr({
    disableHysteresis: !0,
    threshold: 0
  }), [Se, Ae] = y.useState(null), Ke = !!Se, ie = m === "dark", ce = ie ? "text.primary" : F, we = /* @__PURE__ */ d(be, { children: [
    /* @__PURE__ */ t(
      Q,
      {
        variant: "h6",
        sx: {
          color: ce,
          fontWeight: 600,
          fontSize: "20px",
          lineHeight: 1,
          textTransform: "uppercase"
        },
        children: e
      }
    ),
    i ? /* @__PURE__ */ t(
      C,
      {
        sx: {
          display: "flex",
          alignItems: "center",
          flexShrink: 0,
          color: ce,
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
  ] }), xe = ie ? "Switch to light mode" : "Switch to dark mode", ue = h === void 0 ? "Open navigation menu" : h ? "Expand sidebar" : "Collapse sidebar", De = (l) => {
    p == null || p(l.target.value);
  }, Ne = (l) => {
    l.key === "Enter" && x && X && x(X);
  }, We = (l) => l ? l.charAt(0).toUpperCase() + l.slice(1).toLowerCase() : "User", Le = (l) => {
    Ae(l.currentTarget);
  }, Ee = () => {
    Ae(null);
  }, n = (l) => {
    l == null || l(), Ee();
  };
  return /* @__PURE__ */ t(
    Dr,
    {
      position: "fixed",
      sx: {
        boxShadow: Ce ? "0 2px 8px rgba(0, 0, 0, 0.12)" : "none",
        // left/width animate in step with the collapsible sidebar's
        // 200ms width transition so the bar tracks the panel edge.
        transition: "box-shadow 0.2s ease-in-out, left 200ms ease, width 200ms ease",
        background: se,
        top: "var(--template-frame-height, 0px)",
        // Inset from the left so the bar starts at the edge of a
        // full-height sidebar; full width otherwise.
        left: b,
        width: b ? `calc(100% - ${b}px)` : "100%",
        zIndex: 1,
        height: "60px",
        ...w
      },
      children: /* @__PURE__ */ d(no, { variant: "dense", sx: { height: "100%" }, children: [
        /* @__PURE__ */ d(
          H,
          {
            direction: "row",
            sx: {
              alignItems: "center",
              gap: 2,
              flexShrink: 0,
              flexGrow: 1
            },
            children: [
              a && /* @__PURE__ */ t(ne, { title: ue, placement: "bottom", children: /* @__PURE__ */ t(
                ee,
                {
                  "aria-label": ue,
                  onClick: r,
                  disableFocusRipple: !0,
                  sx: {
                    // Nudge left so the icon centers on the sidebar
                    // icon rail (72px wide → 36px center) below it.
                    ml: -1,
                    color: ce,
                    "&:hover": {
                      backgroundColor: "action.hover"
                    },
                    "&:focus, &:focus-visible": {
                      outline: "none"
                    }
                  },
                  children: /* @__PURE__ */ t(Zt, {})
                }
              ) }),
              s && (g ? /* @__PURE__ */ t(
                qt,
                {
                  onClick: g,
                  "aria-label": `${e} home`,
                  "data-testid": "navbar-brand",
                  focusRipple: !0,
                  sx: {
                    gap: 1,
                    flexShrink: 0,
                    borderRadius: 1,
                    px: 0.5,
                    mx: -0.5,
                    "&:hover": {
                      backgroundColor: "action.hover"
                    },
                    "&.Mui-focusVisible": {
                      outline: "2px solid",
                      outlineColor: ce,
                      outlineOffset: 2
                    }
                  },
                  children: we
                }
              ) : /* @__PURE__ */ t(
                H,
                {
                  direction: "row",
                  "data-testid": "navbar-brand",
                  sx: {
                    alignItems: "center",
                    gap: 1,
                    flexShrink: 0
                  },
                  children: we
                }
              )),
              j ? /* @__PURE__ */ t(j, { ...Z || {} }) : ae && Ue && /* @__PURE__ */ t(
                zr,
                {
                  placeholder: "Search for deals or documents...",
                  value: X || "",
                  onChange: De,
                  onKeyDown: Ne,
                  size: "small",
                  sx: {
                    width: "400px",
                    "& .MuiOutlinedInput-root": {
                      backgroundColor: $,
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
                    startAdornment: /* @__PURE__ */ t(Wr, { position: "start", children: /* @__PURE__ */ t(
                      Ar,
                      {
                        sx: {
                          color: V
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
          H,
          {
            direction: "row",
            sx: {
              alignItems: "center",
              gap: 1.5,
              flexShrink: 0
            },
            children: [
              f && !c && /* @__PURE__ */ t(ne, { title: xe, placement: "bottom", children: /* @__PURE__ */ t("span", { children: /* @__PURE__ */ t(
                ee,
                {
                  size: "small",
                  onClick: W,
                  disabled: !W,
                  "aria-label": xe,
                  sx: {
                    color: V,
                    "&:hover": {
                      backgroundColor: "action.hover"
                    }
                  },
                  children: ie ? /* @__PURE__ */ t(Yt, { fontSize: "small" }) : /* @__PURE__ */ t(Vt, { fontSize: "small" })
                }
              ) }) }),
              G && /* @__PURE__ */ t(
                Nr,
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
                    ee,
                    {
                      size: "small",
                      onClick: S,
                      "aria-label": T ? `Notifications, ${T} unread` : "Notifications",
                      sx: { color: V },
                      children: /* @__PURE__ */ t(Cr, {})
                    }
                  )
                }
              ),
              _e && !c && /* @__PURE__ */ d(be, { children: [
                /* @__PURE__ */ t(
                  he,
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
                  oo,
                  {
                    onClick: le,
                    active: He,
                    busy: me,
                    navbarBackground: se
                  }
                )
              ] }),
              G && L && !c && /* @__PURE__ */ t(
                he,
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
              L && !c && /* @__PURE__ */ d(be, { children: [
                /* @__PURE__ */ d(
                  H,
                  {
                    direction: "row",
                    onClick: Le,
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
                      u ? /* @__PURE__ */ t(
                        ut,
                        {
                          src: u,
                          sx: { width: 32, height: 32 }
                        }
                      ) : /* @__PURE__ */ t(
                        zt,
                        {
                          sx: {
                            width: 32,
                            height: 32,
                            color: V
                          }
                        }
                      ),
                      /* @__PURE__ */ d(
                        C,
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
                                  color: V,
                                  fontWeight: 500,
                                  lineHeight: 1.2,
                                  overflow: "hidden",
                                  textOverflow: "ellipsis",
                                  whiteSpace: "nowrap",
                                  maxWidth: "150px"
                                },
                                children: N
                              }
                            ),
                            /* @__PURE__ */ t(
                              Q,
                              {
                                variant: "caption",
                                sx: {
                                  color: V,
                                  lineHeight: 1.2,
                                  overflow: "hidden",
                                  textOverflow: "ellipsis",
                                  whiteSpace: "nowrap",
                                  maxWidth: "150px"
                                },
                                children: We(Be)
                              }
                            )
                          ]
                        }
                      )
                    ]
                  }
                ),
                /* @__PURE__ */ d(
                  Fr,
                  {
                    anchorEl: Se,
                    open: Ke,
                    onClose: Ee,
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
                      K && [
                        /* @__PURE__ */ t(
                          pt,
                          {
                            onClick: () => n(O),
                            children: "Settings"
                          },
                          "settings"
                        ),
                        /* @__PURE__ */ t(he, {}, "settings-divider")
                      ],
                      /* @__PURE__ */ d(
                        pt,
                        {
                          onClick: () => n(P),
                          sx: {
                            color: "error.main",
                            "&:hover": {
                              color: "error.dark"
                            }
                          },
                          children: [
                            /* @__PURE__ */ t(Q, { sx: { flexGrow: 1 }, children: "Logout" }),
                            /* @__PURE__ */ t(Jt, { fontSize: "small" })
                          ]
                        }
                      )
                    ]
                  }
                )
              ] }),
              J.length !== 0 && J.map((l) => l.type === "divider" ? /* @__PURE__ */ t(
                he,
                {
                  orientation: "vertical",
                  flexItem: !0,
                  sx: {
                    borderColor: "rgba(0, 0, 0, 0.12)",
                    height: "24px",
                    alignSelf: "center"
                  }
                },
                l.key
              ) : l.type === "profile" ? /* @__PURE__ */ t(
                ne,
                {
                  title: l.tooltip || "",
                  disableHoverListener: !l.tooltip,
                  arrow: !0,
                  children: /* @__PURE__ */ d(
                    H,
                    {
                      direction: "row",
                      onClick: l.disabled ? void 0 : l.onClick,
                      sx: {
                        alignItems: "center",
                        gap: 1,
                        cursor: l.disabled ? "not-allowed" : "pointer",
                        borderRadius: "8px",
                        padding: "4px 8px",
                        opacity: l.disabled ? 0.5 : 1,
                        transition: "opacity 0.2s",
                        ...!l.disabled && {
                          "&:hover": {
                            backgroundColor: "action.hover"
                          }
                        }
                      },
                      children: [
                        l.avatar ? /* @__PURE__ */ t(
                          ut,
                          {
                            src: l.avatar,
                            sx: {
                              width: 32,
                              height: 32
                            }
                          }
                        ) : /* @__PURE__ */ t(
                          zt,
                          {
                            sx: {
                              width: 32,
                              height: 32,
                              color: V
                            }
                          }
                        ),
                        /* @__PURE__ */ d(
                          C,
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
                                    color: V,
                                    fontWeight: 500,
                                    lineHeight: 1.2,
                                    overflow: "hidden",
                                    textOverflow: "ellipsis",
                                    whiteSpace: "nowrap",
                                    maxWidth: "150px"
                                  },
                                  children: l.name
                                }
                              ),
                              /* @__PURE__ */ t(
                                Q,
                                {
                                  variant: "caption",
                                  sx: {
                                    color: V,
                                    lineHeight: 1.2,
                                    overflow: "hidden",
                                    textOverflow: "ellipsis",
                                    whiteSpace: "nowrap",
                                    maxWidth: "150px"
                                  },
                                  children: l.role
                                }
                              )
                            ]
                          }
                        )
                      ]
                    }
                  )
                },
                l.key
              ) : null)
            ]
          }
        )
      ] })
    }
  );
}, gt = ({
  title: e = "",
  message: o = "",
  buttonText: r = "",
  onButtonClick: a,
  show: c = !0
}) => c ? /* @__PURE__ */ t(Ur, { variant: "outlined", sx: { m: 1.5, flexShrink: 0 }, children: /* @__PURE__ */ d(Kr, { children: [
  /* @__PURE__ */ t(Lr, { fontSize: "small" }),
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
    Qt,
    {
      variant: "contained",
      size: "small",
      fullWidth: !0,
      onClick: a,
      children: r
    }
  )
] }) }) : null, ke = (e, o) => {
  var r;
  return o ? e.path && o === e.path ? !0 : ((r = e.subitems) == null ? void 0 : r.some((a) => a.path === o)) ?? !1 : !1;
}, et = (e, o) => !!(o && e.path === o), tt = (e) => {
  const o = or(e);
  if (!o)
    return "#ffffff";
  const [r, a, c] = o.map((s) => {
    const i = s / 255;
    return i <= 0.03928 ? i / 12.92 : ((i + 0.055) / 1.055) ** 2.4;
  });
  return 0.2126 * r + 0.7152 * a + 0.0722 * c > 0.5 ? "#0b1f1c" : "#ffffff";
}, mt = (e) => {
  const o = or(e);
  if (!o)
    return "rgba(1, 88, 79, 0.12)";
  const [r, a, c] = o;
  return `rgba(${r}, ${a}, ${c}, 0.14)`;
}, or = (e) => {
  let o = e.trim().replace(/^#/, "");
  if (o.length === 3 && (o = o.split("").map((a) => a + a).join("")), o.length !== 6 || /[^0-9a-fA-F]/.test(o))
    return null;
  const r = parseInt(o, 16);
  return [r >> 16 & 255, r >> 8 & 255, r & 255];
}, nr = () => typeof window < "u" && !!window.localStorage, ar = (e) => {
  if (!nr())
    return null;
  try {
    const o = window.localStorage.getItem(e);
    return o === null ? null : o === "true";
  } catch (o) {
    return console.warn("Failed to read sidebar collapsed state:", o), null;
  }
}, ir = (e, o) => {
  if (nr())
    try {
      window.localStorage.setItem(e, o ? "true" : "false");
    } catch (r) {
      console.warn("Failed to persist sidebar collapsed state:", r);
    }
}, io = 264, so = 72, lo = "lumora:sidebar-collapsed", co = "width 200ms ease", Bt = 60, qe = {
  "&:focus, &:focus-visible": { outline: "none" }
}, ho = 16, uo = 14, Ht = "0.7rem", Ut = 22, Ge = ({ text: e, variant: o = "body1", center: r = !1, fontSize: a }) => {
  const c = y.useRef(null), [h, s] = y.useState(!1), i = y.useCallback(() => {
    const g = c.current;
    g && s(g.scrollWidth > g.clientWidth + 0.5);
  }, []);
  return y.useLayoutEffect(() => {
    i();
  }, [i, e]), y.useEffect(() => {
    const g = c.current;
    if (!g)
      return;
    const b = new ResizeObserver(() => i());
    return b.observe(g), () => b.disconnect();
  }, [i]), /* @__PURE__ */ t(
    ne,
    {
      title: e,
      placement: "right",
      arrow: !0,
      enterDelay: 400,
      disableHoverListener: !h,
      disableFocusListener: !h,
      disableTouchListener: !h,
      children: /* @__PURE__ */ t(
        Q,
        {
          ref: c,
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
}, Kt = ({
  open: e,
  size: o = ho
}) => e ? /* @__PURE__ */ t(Gr, { sx: { fontSize: o, opacity: 0.75 } }) : /* @__PURE__ */ t($r, { sx: { fontSize: o, opacity: 0.75 } }), po = ({
  mainLinks: e,
  secondaryLinks: o = [],
  activePath: r,
  onLinkClick: a,
  logo: c,
  title: h,
  onBrandClick: s,
  showHeaderBar: i = !1,
  headerBackgroundColor: g,
  headerForegroundColor: b,
  activeAccentColor: w = "#01584f",
  groupAccentColor: N,
  activeForegroundColor: I,
  foregroundColor: u,
  surfaceBackgroundColor: R,
  collapsed: E,
  defaultCollapsed: O = !1,
  onCollapsedChange: K,
  persistKey: P = lo,
  expandedWidth: G = io,
  collapsedWidth: T = so,
  showLabels: S = !1,
  topInsetPx: m = 0
}) => {
  const f = Xe(), W = f.palette.mode === "dark", ae = E !== void 0, [X, p] = y.useState(
    () => ar(P) ?? O
  ), x = ae ? !!E : X, [L, Be] = y.useState(
    {}
  ), F = w, $ = I ?? tt(F), se = {
    bgcolor: F,
    color: $,
    "& .MuiListItemIcon-root": { color: $ }
  }, V = {
    bgcolor: F,
    color: $,
    borderRadius: "8px"
  }, J = N ?? mt(F), j = R ?? (W ? f.palette.background.paper : "#ffffff"), Z = u ?? (W ? "text.primary" : F), _e = g ?? j, le = b ?? tt(_e), He = mt(le), me = (n) => {
    a == null || a(n);
  }, Ue = () => {
    const n = !x;
    ae || (p(n), ir(P, n)), K == null || K(n);
  }, Ce = (n, l) => {
    Be((U) => ({ ...U, [n]: !l }));
  }, Se = (n) => L[n.text] ?? ke(n, r), Ae = (n) => {
    const l = !!(n.path && r === n.path);
    return /* @__PURE__ */ d(
      Me,
      {
        disabled: !n.path,
        selected: l,
        onClick: () => n.path && me(n.path),
        "data-testid": `sidebar-item-${n.text}`,
        "data-active": l ? "true" : "false",
        sx: {
          borderRadius: "8px",
          py: 1,
          px: 1.5,
          color: l ? $ : Z,
          bgcolor: l ? F : "transparent",
          "& .MuiListItemIcon-root": {
            color: l ? $ : Z,
            minWidth: 36
          },
          // rail-labeled: active AND hover share the highlight. collapsible:
          // keep the original subtle idle-hover tint (accent only if active).
          "&:hover": l || S ? se : { bgcolor: J },
          "&.Mui-selected": {
            bgcolor: F
          },
          "&.Mui-selected:hover": se
        },
        children: [
          /* @__PURE__ */ t(Te, { children: n.icon }),
          /* @__PURE__ */ t(
            Oe,
            {
              disableTypography: !0,
              primary: /* @__PURE__ */ t(Ge, { text: n.text })
            }
          )
        ]
      },
      n.text
    );
  }, Ke = (n) => {
    const l = ke(n, r), U = !!(n.path && r === n.path), M = Se(n);
    return /* @__PURE__ */ d(
      C,
      {
        "data-testid": `sidebar-group-${n.text}`,
        sx: {
          borderRadius: "8px",
          bgcolor: l ? J : "transparent"
        },
        children: [
          /* @__PURE__ */ d(
            Me,
            {
              onClick: () => Ce(n.text, M),
              "data-testid": `sidebar-item-${n.text}`,
              "data-active": U ? "true" : "false",
              "aria-expanded": M,
              sx: {
                borderRadius: "8px",
                py: 1,
                px: 1.5,
                color: U ? $ : Z,
                bgcolor: U ? F : "transparent",
                "& .MuiListItemIcon-root": {
                  color: U ? $ : Z,
                  minWidth: 36
                },
                // rail-labeled highlights on hover; collapsible keeps the
                // subtle idle tint (accent only when the parent is active).
                "&:hover": U || S ? se : { bgcolor: J }
              },
              children: [
                /* @__PURE__ */ t(Te, { children: n.icon }),
                /* @__PURE__ */ t(
                  Oe,
                  {
                    disableTypography: !0,
                    primary: /* @__PURE__ */ t(Ge, { text: n.text })
                  }
                ),
                /* @__PURE__ */ t(Kt, { open: M })
              ]
            }
          ),
          /* @__PURE__ */ t(er, { in: M, timeout: "auto", unmountOnExit: !0, children: /* @__PURE__ */ t(
            C,
            {
              "data-testid": `sidebar-children-${n.text}`,
              sx: { pb: 0.5 },
              children: n.subitems.map((pe) => ie(pe))
            }
          ) })
        ]
      },
      n.text
    );
  }, ie = (n) => {
    const l = et(n, r);
    return /* @__PURE__ */ d(
      Me,
      {
        selected: l,
        onClick: () => me(n.path),
        "data-testid": `sidebar-subitem-${n.text}`,
        "data-active": l ? "true" : "false",
        sx: {
          borderRadius: "8px",
          mx: 0.5,
          py: 0.75,
          pl: 4,
          color: l ? $ : Z,
          bgcolor: l ? F : "transparent",
          "& .MuiListItemIcon-root": {
            color: l ? $ : Z,
            minWidth: 32
          },
          // rail-labeled: active AND hover share the highlight. collapsible:
          // keep the original subtle idle-hover tint (accent only if active).
          "&:hover": l || S ? se : { bgcolor: "action.hover" },
          "&.Mui-selected": {
            bgcolor: F
          },
          "&.Mui-selected:hover": se
        },
        children: [
          n.icon ? /* @__PURE__ */ t(Te, { children: n.icon }) : null,
          /* @__PURE__ */ t(
            Oe,
            {
              disableTypography: !0,
              primary: /* @__PURE__ */ t(Ge, { text: n.text })
            }
          )
        ]
      },
      n.path
    );
  }, ce = (n, l, U, M, pe, B) => {
    const q = !pe, de = /* @__PURE__ */ d(
      ee,
      {
        "aria-label": l,
        disabled: q,
        onClick: pe,
        "data-testid": (B == null ? void 0 : B.testId) ?? `sidebar-item-${l}`,
        "data-active": M ? "true" : "false",
        sx: S ? {
          display: "flex",
          flexDirection: "column",
          gap: 0.25,
          width: "100%",
          maxWidth: "100%",
          height: "auto",
          // 8px padding on all sides of the item container.
          p: 1,
          borderRadius: "8px",
          color: M ? $ : Z,
          bgcolor: M ? F : "transparent",
          "& .MuiSvgIcon-root": {
            fontSize: Ut
          },
          "&:hover": V,
          ...qe
        } : {
          // Icon-only collapsed rail (collapsible variant):
          // original hover — accent when active, else a subtle
          // tint; no foreground change.
          width: 44,
          height: 44,
          color: M ? $ : Z,
          bgcolor: M ? F : "transparent",
          borderRadius: M ? "8px" : "50%",
          "&:hover": {
            bgcolor: M ? F : B != null && B.insideGroup ? "action.hover" : J,
            borderRadius: "8px"
          },
          ...qe
        },
        children: [
          U,
          S ? /* @__PURE__ */ t(
            Ge,
            {
              text: l,
              variant: "caption",
              center: !0,
              fontSize: Ht
            }
          ) : null
        ]
      }
    );
    return S ? q ? /* @__PURE__ */ t("span", { children: de }, n) : /* @__PURE__ */ t(y.Fragment, { children: de }, n) : /* @__PURE__ */ t(ne, { title: l, placement: "right", arrow: !0, children: q ? /* @__PURE__ */ t("span", { children: de }) : de }, n);
  }, we = (n, l) => {
    const U = ke(n, r), M = !!(n.path && r === n.path), pe = /* @__PURE__ */ d(
      ee,
      {
        "aria-label": n.text,
        "aria-expanded": l,
        onClick: () => Ce(n.text, l),
        "data-testid": `sidebar-item-${n.text}`,
        "data-active": M ? "true" : "false",
        sx: {
          display: "flex",
          flexDirection: "column",
          gap: S ? 0.25 : 0,
          width: S ? "100%" : 44,
          maxWidth: "100%",
          // 8px padding on all sides of the labeled item container.
          ...S ? { p: 1 } : { py: 0.75 },
          borderRadius: "10px",
          color: M ? $ : Z,
          bgcolor: M ? F : "transparent",
          // rail-labeled: active AND hover share the highlight. collapsible:
          // original behavior — accent only when active; the outer pill
          // supplies the idle-hover tint, so the button stays transparent.
          "&:hover": S ? { bgcolor: F, color: $ } : {
            bgcolor: M ? F : "transparent"
          },
          ...qe
        },
        children: [
          S ? /* @__PURE__ */ t(
            C,
            {
              sx: {
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                "& .MuiSvgIcon-root": {
                  fontSize: Ut
                }
              },
              children: n.icon
            }
          ) : n.icon,
          S ? /* @__PURE__ */ t(
            Ge,
            {
              text: n.text,
              variant: "caption",
              center: !0,
              fontSize: Ht
            }
          ) : null,
          /* @__PURE__ */ t(Kt, { open: l, size: uo })
        ]
      }
    ), B = S ? pe : /* @__PURE__ */ t(ne, { title: n.text, placement: "right", arrow: !0, children: pe });
    return /* @__PURE__ */ d(
      C,
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
          bgcolor: U ? J : "transparent",
          ...S ? {} : { "&:hover": { bgcolor: J } }
        },
        children: [
          B,
          l ? n.subitems.map(
            (q) => ce(
              q.path,
              q.text,
              q.icon ?? n.icon,
              et(q, r),
              () => me(q.path),
              {
                insideGroup: !0,
                testId: `sidebar-subitem-${q.text}`
              }
            )
          ) : null
        ]
      }
    );
  }, xe = (n) => {
    var U;
    return (U = n.subitems) != null && U.length ? /* @__PURE__ */ t(y.Fragment, { children: we(n, Se(n)) }, n.text) : /* @__PURE__ */ t(
      C,
      {
        sx: {
          width: "100%",
          display: "flex",
          justifyContent: "center"
        },
        children: ce(
          n.text,
          n.text,
          n.icon,
          !!(n.path && r === n.path),
          n.path ? () => me(n.path) : void 0
        )
      },
      n.text
    );
  }, ue = (n) => {
    var l;
    return x ? xe(n) : (l = n.subitems) != null && l.length ? Ke(n) : Ae(n);
  }, De = x ? T : G, Ne = {
    gap: 1,
    minWidth: 0,
    color: le,
    // Consumer SVG logos pick up the header foreground.
    "& svg": { color: "inherit", fill: "currentColor" }
  }, We = /* @__PURE__ */ d(be, { children: [
    h ? /* @__PURE__ */ t(
      Q,
      {
        variant: "h6",
        noWrap: !0,
        sx: {
          color: le,
          fontWeight: 600,
          fontSize: "18px",
          lineHeight: 1,
          textTransform: "uppercase"
        },
        children: h
      }
    ) : null,
    c
  ] }), Le = i ? /* @__PURE__ */ d(
    C,
    {
      "data-testid": "sidebar-header",
      sx: {
        height: Bt,
        minHeight: Bt,
        flexShrink: 0,
        display: "flex",
        alignItems: "center",
        gap: 1.5,
        bgcolor: _e,
        borderBottom: `1px solid ${He}`,
        justifyContent: x ? "center" : "flex-start",
        // Expanded: 20px inset centers the hamburger glyph on the item
        // icon column (16px list padding + 12px row padding + half of
        // the 24px icon = 40px, minus the button's 8px + 12px to its
        // own center). Collapsed: centered like the rail icons.
        px: x ? 0 : 2.5
      },
      children: [
        /* @__PURE__ */ t(
          ne,
          {
            title: x ? "Expand sidebar" : "Collapse sidebar",
            placement: "right",
            arrow: !0,
            children: /* @__PURE__ */ t(
              ee,
              {
                "aria-label": x ? "Expand sidebar" : "Collapse sidebar",
                "aria-expanded": !x,
                onClick: Ue,
                "data-testid": "sidebar-collapse-toggle",
                disableFocusRipple: !0,
                sx: { color: le, ...qe },
                children: /* @__PURE__ */ t(Zt, {})
              }
            )
          }
        ),
        !x && (c || h) ? s ? /* @__PURE__ */ t(
          qt,
          {
            onClick: s,
            "aria-label": `${h || "App"} home`,
            "data-testid": "sidebar-header-brand",
            focusRipple: !0,
            sx: {
              ...Ne,
              borderRadius: 1,
              px: 0.5,
              mx: -0.5,
              "&:hover": { backgroundColor: "action.hover" },
              "&.Mui-focusVisible": {
                outline: "2px solid",
                outlineColor: le,
                outlineOffset: 2
              }
            },
            children: We
          }
        ) : /* @__PURE__ */ t(
          H,
          {
            direction: "row",
            "data-testid": "sidebar-header-brand",
            sx: { alignItems: "center", ...Ne },
            children: We
          }
        ) : null
      ]
    }
  ) : null, Ee = /* @__PURE__ */ d(be, { children: [
    /* @__PURE__ */ t(
      H,
      {
        spacing: 0.5,
        sx: {
          width: "100%",
          alignItems: x ? "center" : "stretch"
        },
        children: e.map((n) => ue(n))
      }
    ),
    o.length > 0 ? /* @__PURE__ */ d(C, { sx: { mt: "auto", pt: 2 }, children: [
      /* @__PURE__ */ t(he, { sx: { mb: 1, borderColor: "divider" } }),
      /* @__PURE__ */ t(
        H,
        {
          spacing: 0.5,
          sx: {
            width: "100%",
            alignItems: x ? "center" : "stretch"
          },
          children: o.map((n) => ue(n))
        }
      )
    ] }) : null
  ] });
  return /* @__PURE__ */ t(
    C,
    {
      component: "nav",
      "aria-label": "Main sidebar",
      "data-testid": "collapsible-sidebar",
      "data-collapsed": x ? "true" : "false",
      "data-labeled": S ? "true" : "false",
      sx: {
        width: De,
        minWidth: De,
        height: "100%",
        boxSizing: "border-box",
        bgcolor: j,
        display: "flex",
        flexDirection: "column",
        // Lets the sidebar shrink inside a flex-column host so siblings
        // (e.g. an alert card below it) stay within the viewport.
        flex: "1 1 auto",
        minHeight: 0,
        transition: co,
        ...i ? { overflow: "hidden", p: 0 } : {
          overflowX: "hidden",
          overflowY: "auto",
          px: S ? 0.5 : x ? 1 : 2,
          pt: m ? `${m}px` : 1,
          pb: 2
        }
      },
      children: i ? /* @__PURE__ */ d(be, { children: [
        Le,
        /* @__PURE__ */ t(
          C,
          {
            sx: {
              flex: "1 1 auto",
              minHeight: 0,
              display: "flex",
              flexDirection: "column",
              overflowY: "auto",
              overflowX: "hidden",
              px: x ? 1 : 2,
              pt: 1,
              pb: 2
            },
            children: Ee
          }
        )
      ] }) : Ee
    }
  );
}, fo = 180, Lt = 250, sr = ({
  text: e,
  testId: o
}) => {
  const r = y.useRef(null), [a, c] = y.useState(!1), h = y.useCallback(() => {
    const s = r.current;
    s && c(s.scrollWidth > s.clientWidth + 0.5);
  }, []);
  return y.useLayoutEffect(() => {
    h();
  }, [h, e]), y.useEffect(() => {
    const s = r.current;
    if (!s)
      return;
    const i = new ResizeObserver(() => h());
    return i.observe(s), () => i.disconnect();
  }, [h]), /* @__PURE__ */ t(
    ne,
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
}, go = ({
  link: e,
  activePath: o,
  onLinkClick: r,
  accentColor: a,
  isSecondary: c,
  surfaceBackgroundColor: h,
  railShowTitles: s = !1
}) => {
  const i = Xe(), [g, b] = y.useState(null), [w, N] = y.useState(!1), I = y.useRef(
    null
  ), u = y.useRef(null), R = y.useRef(null), E = y.useRef(!1), O = y.useRef(!1), K = y.useId(), P = () => {
    I.current && (clearTimeout(I.current), I.current = null);
  }, G = () => {
    P(), I.current = setTimeout(() => {
      N(!1), I.current = null;
    }, fo);
  }, T = () => {
    P(), N(!0);
  };
  y.useEffect(() => {
    if (!w)
      return;
    const p = (x) => {
      var L;
      x.key === "Escape" && (N(!1), (L = R.current) == null || L.focus());
    };
    return document.addEventListener("keydown", p), () => document.removeEventListener("keydown", p);
  }, [w]), y.useEffect(() => {
    if (!w || !O.current)
      return;
    const p = globalThis.requestAnimationFrame(() => {
      var L;
      const x = (L = u.current) == null ? void 0 : L.querySelector(
        '[role="menuitem"]'
      );
      x == null || x.focus(), O.current = !1;
    });
    return () => cancelAnimationFrame(p);
  }, [w]);
  const S = ke(e, o), m = c ? 48 : 44, f = c ? "text.secondary" : a, W = c ? "#01584F" : a, ae = {
    width: "100%",
    maxWidth: "100%",
    minWidth: m,
    height: "auto",
    minHeight: m,
    flexDirection: "column",
    py: 0.5,
    // Horizontal padding so labels (esp. active fill) do not touch the box edges
    px: 1,
    borderRadius: "4px",
    color: S ? "#ffffff" : f,
    backgroundColor: S ? W : "transparent",
    "&:hover": {
      backgroundColor: S ? W : "action.hover",
      borderRadius: "4px",
      color: S ? "#ffffff" : f
    }
  }, X = s ? /* @__PURE__ */ t(
    ee,
    {
      ref: R,
      component: e.path ? "a" : "button",
      href: e.path || void 0,
      "aria-label": e.text,
      onFocus: () => {
        E.current || T();
      },
      onBlur: (p) => {
        var L;
        const x = p.relatedTarget;
        x && ((L = u.current) != null && L.contains(x)) || G();
      },
      onKeyDown: (p) => {
        p.key === "ArrowDown" && (p.preventDefault(), O.current = !0, T());
      },
      onClick: (p) => {
        p.preventDefault(), p.stopPropagation(), e.path && (r == null || r(e.path));
      },
      "aria-haspopup": "menu",
      "aria-expanded": w,
      "aria-controls": w ? K : void 0,
      "data-testid": `rail-submenu-trigger-${e.text}`,
      sx: ae,
      children: /* @__PURE__ */ d(H, { alignItems: "center", spacing: 1, sx: { width: "100%" }, children: [
        /* @__PURE__ */ t(
          C,
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
          sr,
          {
            text: e.text,
            testId: `rail-item-caption-${e.text}`
          }
        )
      ] })
    }
  ) : /* @__PURE__ */ t(
    ee,
    {
      ref: R,
      component: e.path ? "a" : "button",
      href: e.path || void 0,
      "aria-label": e.text,
      onFocus: () => {
        E.current || T();
      },
      onBlur: (p) => {
        var L;
        const x = p.relatedTarget;
        x && ((L = u.current) != null && L.contains(x)) || G();
      },
      onKeyDown: (p) => {
        p.key === "ArrowDown" && (p.preventDefault(), O.current = !0, T());
      },
      onClick: (p) => {
        p.preventDefault(), p.stopPropagation(), e.path && (r == null || r(e.path));
      },
      "aria-haspopup": "menu",
      "aria-expanded": w,
      "aria-controls": w ? K : void 0,
      "data-testid": `rail-submenu-trigger-${e.text}`,
      sx: {
        width: m,
        height: m,
        color: S ? "#ffffff" : f,
        backgroundColor: S ? W : "transparent",
        borderRadius: S ? "4px" : "50%",
        "&:hover": {
          backgroundColor: S ? W : "action.hover",
          borderRadius: "4px"
        }
      },
      children: e.icon
    }
  );
  return /* @__PURE__ */ d(
    C,
    {
      sx: {
        width: "100%",
        display: "flex",
        justifyContent: "center"
      },
      children: [
        /* @__PURE__ */ t(
          C,
          {
            ref: b,
            "data-testid": `rail-submenu-anchor-${e.text}`,
            sx: { display: "inline-flex", maxWidth: "100%" },
            onMouseEnter: () => {
              E.current = !0, T();
            },
            onMouseLeave: () => {
              E.current = !1, G();
            },
            children: s ? X : /* @__PURE__ */ t(ne, { title: e.text, placement: "right", arrow: !0, children: X })
          }
        ),
        /* @__PURE__ */ t(
          Vr,
          {
            open: w && !!g,
            anchorEl: g,
            placement: "right-start",
            modifiers: [{ name: "offset", options: { offset: [8, 0] } }],
            sx: { zIndex: (p) => p.zIndex.modal },
            children: /* @__PURE__ */ t(
              Xr,
              {
                ref: u,
                elevation: 0,
                onMouseEnter: () => {
                  P();
                },
                onMouseLeave: G,
                "data-testid": `rail-submenu-panel-${e.text}`,
                sx: {
                  bgcolor: h,
                  backgroundImage: "none",
                  borderRadius: "4px",
                  border: "1px solid",
                  borderColor: "divider",
                  boxShadow: i.shadows[8],
                  maxWidth: Lt,
                  minWidth: 0,
                  py: 0.5,
                  boxSizing: "border-box"
                },
                children: /* @__PURE__ */ t(
                  jr,
                  {
                    id: K,
                    dense: !0,
                    autoFocus: !1,
                    role: "menu",
                    sx: {
                      bgcolor: "transparent",
                      py: 0,
                      maxWidth: Lt
                    },
                    children: e.subitems.map((p) => /* @__PURE__ */ d(
                      pt,
                      {
                        role: "menuitem",
                        title: p.text,
                        selected: et(p, o),
                        onClick: (x) => {
                          x.preventDefault(), r == null || r(p.path), N(!1);
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
                            bgcolor: W,
                            color: "#ffffff",
                            "&:hover": {
                              bgcolor: W
                            }
                          },
                          "&.Mui-focusVisible": {
                            bgcolor: "action.focus"
                          }
                        },
                        children: [
                          p.icon ? /* @__PURE__ */ t(Te, { children: p.icon }) : null,
                          /* @__PURE__ */ t(
                            Oe,
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
}, mo = ({
  link: e,
  activePath: o,
  onLinkClick: r,
  accentColor: a,
  isSecondary: c,
  railShowTitles: h = !1
}) => {
  const s = !!(e.path && o === e.path), i = c ? 48 : 44, g = c ? "text.secondary" : a, b = c ? "#01584F" : a, w = {
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
    backgroundColor: s ? b : "transparent",
    "&:hover": {
      backgroundColor: s ? b : "action.hover",
      borderRadius: "4px",
      color: s ? "#ffffff" : g
    }
  }, N = h ? /* @__PURE__ */ t(
    ee,
    {
      component: e.path ? "a" : "button",
      href: e.path || void 0,
      "aria-label": e.text,
      onClick: (I) => {
        I.preventDefault(), I.stopPropagation(), e.path && (r == null || r(e.path));
      },
      disabled: !e.path,
      sx: w,
      children: /* @__PURE__ */ d(H, { alignItems: "center", spacing: 1, sx: { width: "100%" }, children: [
        /* @__PURE__ */ t(
          C,
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
          sr,
          {
            text: e.text,
            testId: `rail-item-caption-${e.text}`
          }
        )
      ] })
    }
  ) : /* @__PURE__ */ t(
    ee,
    {
      component: e.path ? "a" : "button",
      href: e.path || void 0,
      "aria-label": e.text,
      onClick: (I) => {
        I.preventDefault(), I.stopPropagation(), e.path && (r == null || r(e.path));
      },
      disabled: !e.path,
      sx: {
        width: i,
        height: i,
        color: s ? "#ffffff" : g,
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
  return h ? N : /* @__PURE__ */ t(ne, { title: e.text, placement: "right", arrow: !0, children: N });
}, xo = ({
  link: e,
  expanded: o,
  onToggle: r,
  activePath: a,
  onLinkClick: c,
  accentColor: h,
  groupTint: s,
  activeFg: i,
  isSecondary: g
}) => {
  const b = ke(e, a), w = !!(e.path && a === e.path), N = Xe().palette.mode === "dark", I = g ? "text.secondary" : N ? "text.primary" : h, u = g ? "#01584F" : h;
  return /* @__PURE__ */ d(
    C,
    {
      sx: {
        borderRadius: "6px",
        bgcolor: b ? s : "transparent"
      },
      children: [
        /* @__PURE__ */ d(
          Me,
          {
            onClick: () => e.path ? c == null ? void 0 : c(e.path) : r(),
            sx: {
              py: 1.5,
              px: 2,
              color: w ? i : I,
              bgcolor: w ? u : "transparent",
              "&:hover": {
                bgcolor: w ? u : s
              }
            },
            "data-testid": `drawer-expand-trigger-${e.text}`,
            children: [
              /* @__PURE__ */ t(Te, { sx: { color: "inherit", minWidth: 40 }, children: e.icon }),
              /* @__PURE__ */ t(Oe, { primary: e.text }),
              /* @__PURE__ */ t(
                ee,
                {
                  size: "small",
                  edge: "end",
                  "aria-label": o ? `Collapse ${e.text}` : `Expand ${e.text}`,
                  onClick: (R) => {
                    R.stopPropagation(), r();
                  },
                  sx: { color: "inherit" },
                  "data-testid": `drawer-expand-chevron-${e.text}`,
                  children: o ? /* @__PURE__ */ t(kr, {}) : /* @__PURE__ */ t(Pr, {})
                }
              )
            ]
          }
        ),
        /* @__PURE__ */ t(er, { in: o, timeout: "auto", unmountOnExit: !0, children: /* @__PURE__ */ t(C, { component: "nav", "aria-label": e.text, children: e.subitems.map((R) => {
          const E = et(R, a);
          return /* @__PURE__ */ d(
            Me,
            {
              onClick: () => c == null ? void 0 : c(R.path),
              sx: {
                pl: 4,
                py: 1,
                color: E ? i : I,
                bgcolor: E ? u : "transparent",
                "& .MuiListItemIcon-root": {
                  color: "inherit"
                },
                "&:hover": {
                  bgcolor: E ? u : "action.hover"
                }
              },
              children: [
                R.icon ? /* @__PURE__ */ t(Te, { sx: { minWidth: 36 }, children: R.icon }) : null,
                /* @__PURE__ */ t(Oe, { primary: R.text })
              ]
            },
            R.path
          );
        }) }) })
      ]
    }
  );
}, bo = ({
  link: e,
  activePath: o,
  onLinkClick: r,
  accentColor: a,
  groupTint: c,
  activeFg: h,
  isSecondary: s
}) => {
  const i = !!(e.path && o === e.path), g = Xe().palette.mode === "dark", b = s ? "text.secondary" : g ? "text.primary" : a, w = s ? "#01584F" : a;
  return /* @__PURE__ */ d(
    Me,
    {
      disabled: !e.path,
      onClick: () => e.path && (r == null ? void 0 : r(e.path)),
      sx: {
        py: 1.5,
        px: 2,
        color: i ? h : b,
        bgcolor: i ? w : "transparent",
        "&:hover": {
          bgcolor: i ? w : c
        }
      },
      children: [
        /* @__PURE__ */ t(Te, { sx: { color: "inherit", minWidth: 40 }, children: e.icon }),
        /* @__PURE__ */ t(Oe, { primary: e.text })
      ]
    }
  );
}, Qe = () => /* @__PURE__ */ t(
  C,
  {
    sx: {
      width: "100%",
      display: "flex",
      justifyContent: "center"
    },
    children: /* @__PURE__ */ t(he, { sx: { width: "60%", borderColor: "divider" } })
  }
), lr = ({
  variant: e,
  mainLinks: o,
  secondaryLinks: r = [],
  activePath: a,
  onLinkClick: c,
  accentColor: h = "#01584f",
  groupAccentColor: s,
  surfaceBackgroundColor: i,
  railShowTitles: g = !1
}) => {
  const b = Xe(), w = i ?? b.palette.background.paper, N = tt(h), I = s ?? mt(h), u = (m) => {
    c && c(m);
  }, [R, E] = y.useState({}), [O, K] = y.useState({}), P = (m) => {
    E((f) => ({
      ...f,
      [m]: !f[m]
    }));
  }, G = (m) => {
    K((f) => ({
      ...f,
      [m]: !f[m]
    }));
  }, T = (m, f) => {
    var W;
    return (W = m.subitems) != null && W.length ? /* @__PURE__ */ t(
      go,
      {
        link: m,
        activePath: a,
        onLinkClick: u,
        accentColor: h,
        isSecondary: f,
        surfaceBackgroundColor: w,
        railShowTitles: g
      }
    ) : /* @__PURE__ */ t(
      mo,
      {
        link: m,
        activePath: a,
        onLinkClick: u,
        accentColor: h,
        isSecondary: f,
        railShowTitles: g
      }
    );
  }, S = (m, f, W) => {
    var ae;
    if ((ae = m.subitems) != null && ae.length) {
      const X = W ? !!O[f] : !!R[f];
      return /* @__PURE__ */ t(
        xo,
        {
          link: m,
          expanded: X,
          onToggle: () => W ? G(f) : P(f),
          activePath: a,
          onLinkClick: u,
          accentColor: h,
          groupTint: I,
          activeFg: N,
          isSecondary: W
        }
      );
    }
    return /* @__PURE__ */ t(
      bo,
      {
        link: m,
        activePath: a,
        onLinkClick: u,
        accentColor: h,
        groupTint: I,
        activeFg: N,
        isSecondary: W
      }
    );
  };
  return e === "drawer" ? /* @__PURE__ */ d(
    H,
    {
      sx: {
        flexGrow: 1,
        width: "100%",
        alignItems: "stretch",
        pt: 2,
        gap: 0
      },
      children: [
        /* @__PURE__ */ t(H, { sx: { width: "100%" }, children: o.map((m, f) => /* @__PURE__ */ d(y.Fragment, { children: [
          S(m, f, !1),
          f < o.length - 1 ? /* @__PURE__ */ t(Qe, {}) : null
        ] }, f)) }),
        r.length > 0 ? /* @__PURE__ */ d(be, { children: [
          /* @__PURE__ */ t(
            C,
            {
              sx: {
                width: "100%",
                my: 2,
                display: "flex",
                justifyContent: "center"
              },
              children: /* @__PURE__ */ t(
                he,
                {
                  sx: { width: "60%", borderColor: "divider" }
                }
              )
            }
          ),
          /* @__PURE__ */ t(C, { sx: { mt: "auto", pb: 2 }, children: /* @__PURE__ */ t(H, { sx: { width: "100%" }, children: r.map((m, f) => /* @__PURE__ */ d(y.Fragment, { children: [
            S(m, f, !0),
            f < r.length - 1 ? /* @__PURE__ */ t(Qe, {}) : null
          ] }, f)) }) })
        ] }) : null
      ]
    }
  ) : /* @__PURE__ */ d(
    H,
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
        o.map((m, f) => /* @__PURE__ */ d(y.Fragment, { children: [
          T(m, !1),
          f < o.length - 1 ? /* @__PURE__ */ t(Qe, {}) : null
        ] }, f)),
        r.length > 0 ? /* @__PURE__ */ d(be, { children: [
          /* @__PURE__ */ t(
            C,
            {
              sx: {
                width: "100%",
                my: 2,
                display: "flex",
                justifyContent: "center"
              },
              children: /* @__PURE__ */ t(
                he,
                {
                  sx: { width: "60%", borderColor: "divider" }
                }
              )
            }
          ),
          /* @__PURE__ */ t(C, { sx: { mt: "auto", pb: 2 }, children: /* @__PURE__ */ t(
            H,
            {
              gap: g ? 1.25 : 1,
              alignItems: "center",
              children: r.map((m, f) => /* @__PURE__ */ d(y.Fragment, { children: [
                T(m, !0),
                f < r.length - 1 ? /* @__PURE__ */ t(Qe, {}) : null
              ] }, f))
            }
          ) })
        ] }) : null
      ]
    }
  );
}, So = ({
  open: e,
  onClose: o,
  mainLinks: r,
  secondaryLinks: a = [],
  activePath: c,
  onLinkClick: h,
  userName: s = "User Name",
  userAvatar: i,
  userRole: g,
  onLogout: b,
  theme: w = "light",
  showThemeToggler: N = !1,
  onThemeToggle: I,
  alertProps: u,
  accentColor: R = "#01584f",
  groupAccentColor: E
}) => {
  const O = w === "dark", K = O ? "Switch to light mode" : "Switch to dark mode", P = (T) => T ? T.charAt(0).toUpperCase() + T.slice(1).toLowerCase() : "User", G = (T) => {
    h == null || h(T), o();
  };
  return /* @__PURE__ */ t(
    Yr,
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
      children: /* @__PURE__ */ d(
        H,
        {
          sx: {
            maxWidth: "70dvw",
            height: "100%"
          },
          children: [
            /* @__PURE__ */ d(
              H,
              {
                direction: "row",
                sx: { p: 2, gap: 1, alignItems: "center" },
                children: [
                  /* @__PURE__ */ d(
                    H,
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
                          ut,
                          {
                            sizes: "small",
                            alt: s,
                            src: i,
                            sx: { width: 40, height: 40, flexShrink: 0 }
                          }
                        ),
                        /* @__PURE__ */ d(
                          C,
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
                                  children: P(g)
                                }
                              )
                            ]
                          }
                        )
                      ]
                    }
                  ),
                  N && /* @__PURE__ */ t(ne, { title: K, placement: "bottom", children: /* @__PURE__ */ t("span", { children: /* @__PURE__ */ t(
                    ee,
                    {
                      size: "small",
                      onClick: I,
                      disabled: !I,
                      "aria-label": K,
                      children: O ? /* @__PURE__ */ t(Yt, { fontSize: "small" }) : /* @__PURE__ */ t(Vt, { fontSize: "small" })
                    }
                  ) }) })
                ]
              }
            ),
            /* @__PURE__ */ t(he, {}),
            /* @__PURE__ */ d(H, { sx: { flexGrow: 1 }, children: [
              /* @__PURE__ */ t(
                lr,
                {
                  variant: "drawer",
                  mainLinks: r,
                  secondaryLinks: a,
                  activePath: c,
                  onLinkClick: G,
                  accentColor: R,
                  groupAccentColor: E
                }
              ),
              /* @__PURE__ */ t(he, {})
            ] }),
            (u == null ? void 0 : u.show) && /* @__PURE__ */ t(gt, { ...u }),
            /* @__PURE__ */ t(H, { sx: { p: 2 }, children: /* @__PURE__ */ t(
              Qt,
              {
                variant: "outlined",
                fullWidth: !0,
                startIcon: /* @__PURE__ */ t(Jt, {}),
                onClick: b,
                children: "Logout"
              }
            ) })
          ]
        }
      )
    }
  );
}, wo = 100, $t = 80, Eo = 60, Gt = 264, kt = 72, Pt = "lumora:sidebar-collapsed", jt = "width 200ms ease, left 200ms ease", mn = ({
  children: e,
  sidebarLinks: o = [],
  secondarySidebarLinks: r = [],
  appName: a = "Dashboard",
  pageName: c = "Home",
  showHeader: h = !0,
  showSidebar: s = !0,
  showSidebarRailTitles: i = !1,
  sidebarVariant: g = "rail",
  logo: b,
  onBrandClick: w,
  sidebarBackgroundColor: N,
  sidebarHeaderBackgroundColor: I,
  groupAccentColor: u,
  activeSidebarForegroundColor: R,
  enableRefreshToken: E = !1,
  activePath: O,
  onLinkClick: K,
  userName: P,
  userEmail: G,
  userAvatar: T,
  onLogout: S,
  onProfileClick: m,
  onAccountClick: f,
  onSettingsClick: W,
  showSettings: ae = !0,
  showNotifications: X = !0,
  notificationCount: p = 0,
  NotificationSidebarContent: x,
  showSearchbar: L = !0,
  searchValue: Be,
  onSearchChange: F,
  onSearchSubmit: $,
  showProfile: se = !0,
  userRole: V,
  onVerify: J,
  alertProps: j,
  style: Z,
  headerStyles: _e,
  sidebarStyles: le,
  contentStyles: He,
  accentColor: me,
  sidebarAccentColor: Ue,
  sidebarForegroundColor: Ce,
  contentBackgroundColor: Se,
  navbarBackground: Ae,
  navbarAccentColor: Ke,
  theme: ie = "light",
  showThemeToggler: ce = !1,
  onThemeToggle: we,
  GlobalChatSidebar: xe,
  useChatSidebar: ue,
  showAssistant: De = !1,
  onAssistantClick: Ne,
  assistantActive: We = !1,
  assistantBusy: Le = !1,
  rightExtraContent: Ee,
  customNavbar: n,
  customNavbarProps: l,
  redirectToLogin: U,
  apiBaseUrl: M
}) => {
  const pe = Rr(), B = Ir(pe.breakpoints.down("md")), q = Nt(
    () => Xt(Jr(ie)),
    [ie]
  ), de = ie === "dark", Ve = me ?? "#01584f", rt = Ue ?? Ve, Ye = Se ?? (de ? "hsl(220, 35%, 9%)" : "#f2f9fc"), cr = Ae ?? (de ? "hsl(220, 30%, 7%)" : "#ffffff"), dr = Ke ?? (de ? "#ffffff" : "#000000"), ye = g === "collapsible", ve = g === "rail-labeled", xt = ye || ve, bt = ve && s && !B, St = ye && s && !B, hr = bt || St, ot = N ?? (de ? "hsl(220, 30%, 7%)" : "#ffffff"), wt = I ?? ot, ur = tt(wt), Et = (Re) => /* @__PURE__ */ t(
    Ie,
    {
      role: "img",
      "aria-label": `${a} logo`,
      sx: {
        width: 28,
        height: 28,
        flexShrink: 0,
        bgcolor: Re,
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
  ), pr = b ?? Et(de ? "#ffffff" : Ve), fr = b ?? Et(ur), [Je, gr] = ze(
    () => ar(Pt) ?? !1
  ), mr = (Re) => {
    gr(Re), ir(Pt, Re);
  };
  let fe = 0;
  s && !B && (ve ? fe = $t : ye ? fe = Je ? kt : Gt : fe = wo);
  const [yt, vt] = ze(!1), [xr, nt] = ze(!1), [br, Sr] = ze(!0), [wr, Er] = ze(!1), [yo, Ze] = ze(null), at = ue == null ? void 0 : ue(), Rt = (at == null ? void 0 : at.isOpen) ?? !1, it = Wt(J), It = Wt(!1), Tt = Nt(
    () => eo(M),
    [M]
  );
  ct(() => {
    it.current = J;
  }, [J]);
  const yr = () => {
    vt(!yt);
  }, vr = () => {
    vt(!1);
  }, Ot = (Re) => {
    const Fe = S(Re);
    Fe instanceof Promise ? Fe.then(() => {
      Ze(null);
    }).catch((_t) => {
      console.error("Error in logout handler:", _t), Ze(null);
    }) : Ze(null);
  };
  return ct(() => {
    (() => {
      try {
        const { isAuthenticated: Fe, error: _t } = qr();
        if (!Fe) {
          console.log("No session found, redirecting to login"), je(), U();
          return;
        }
        if (!It.current) {
          const { user: $e, error: st } = Qr();
          if ($e && !st) {
            const Ct = {
              name: $e.name || "",
              email: $e.email || "",
              profilePicture: $e.profilePicture || "",
              role: $e.role || ""
            };
            Ze(Ct), It.current = !0, it.current && it.current(Ct);
          } else
            st && console.error("Error getting user data:", st);
        }
        Er(!0);
      } catch (Fe) {
        console.error("Error checking session:", Fe), je(), U();
      } finally {
        Sr(!1);
      }
    })();
  }, [U]), ct(() => {
    E && to(Tt, U);
  }, [E, Tt]), br ? /* @__PURE__ */ t(Dt, { theme: q, children: /* @__PURE__ */ d(
    Ie,
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
          Tr,
          {
            size: 60,
            thickness: 4,
            sx: { color: Ve }
          }
        ),
        /* @__PURE__ */ t(Ie, { sx: { mt: 2, color: "text.secondary" }, children: "Checking session..." })
      ]
    }
  ) }) : wr ? /* @__PURE__ */ t(Dt, { theme: q, children: /* @__PURE__ */ d(
    Ie,
    {
      sx: {
        display: "flex",
        minHeight: "100vh",
        ...Z
      },
      children: [
        /* @__PURE__ */ t(Or, {}),
        h && /* @__PURE__ */ t(
          ao,
          {
            appName: a,
            pageName: c,
            isMobile: B,
            onMenuClick: B && s ? yr : void 0,
            showMenuButton: s && B,
            showBrand: !(St && !Je),
            leftOffsetPx: hr ? fe : 0,
            logo: pr,
            onBrandClick: w,
            headerStyles: _e,
            userName: P,
            userEmail: G,
            userAvatar: T,
            onProfileClick: m,
            onAccountClick: f,
            onSettingsClick: W,
            showSettings: ae,
            onLogout: Ot,
            showNotifications: X,
            notificationCount: p,
            onNotificationBellClick: X && x ? () => nt(!0) : void 0,
            showSearchbar: L && !n,
            searchValue: Be,
            onSearchChange: F,
            onSearchSubmit: $,
            showProfile: se,
            userRole: V,
            accentColor: Ve,
            contentBackgroundColor: Ye,
            navbarBackground: cr,
            navbarAccentColor: dr,
            theme: ie,
            showThemeToggler: ce,
            onThemeToggle: we,
            rightExtraContent: Ee,
            customNavbar: n,
            customNavbarProps: l,
            showAssistant: De,
            onAssistantClick: Ne,
            assistantActive: We,
            assistantBusy: Le
          }
        ),
        s && !B && xt && /* @__PURE__ */ d(
          Ie,
          {
            component: "aside",
            sx: {
              width: fe,
              minWidth: fe,
              flexShrink: 0,
              zIndex: 2,
              position: "sticky",
              top: 0,
              mt: 0,
              alignSelf: "flex-start",
              height: "100vh",
              // Flex column so the sidebar shrinks to fit siblings
              // (the alert card) instead of pushing them off-screen.
              display: "flex",
              flexDirection: "column",
              // Keep the strip behind any bottom sibling on-brand.
              bgcolor: ye ? ot : void 0,
              transition: jt,
              ...le
            },
            children: [
              /* @__PURE__ */ t(
                po,
                {
                  mainLinks: o,
                  secondaryLinks: r,
                  activePath: O,
                  onLinkClick: K,
                  showHeaderBar: ye,
                  logo: fr,
                  title: a,
                  onBrandClick: w,
                  headerBackgroundColor: ye ? wt : void 0,
                  activeAccentColor: rt,
                  groupAccentColor: u,
                  activeForegroundColor: R,
                  foregroundColor: Ce,
                  surfaceBackgroundColor: ot,
                  collapsed: ve ? !0 : Je,
                  onCollapsedChange: ve ? void 0 : mr,
                  showLabels: ve,
                  topInsetPx: bt && h ? Eo : 0,
                  expandedWidth: Gt,
                  collapsedWidth: ve ? $t : kt
                }
              ),
              ye && (j == null ? void 0 : j.show) && !Je && /* @__PURE__ */ t(gt, { ...j })
            ]
          }
        ),
        s && !B && !xt && /* @__PURE__ */ t(
          At,
          {
            variant: "permanent",
            sx: {
              width: fe,
              flexShrink: 0,
              zIndex: 2,
              // Higher z-index than app bar
              "& .MuiDrawer-paper": {
                width: fe,
                boxSizing: "border-box",
                bgcolor: Ye,
                borderRight: "none",
                top: h ? "60px" : 0,
                // Position below header
                height: h ? "calc(100vh - 60px)" : "100vh"
              },
              ...le
            },
            children: /* @__PURE__ */ d(
              Ie,
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
                    lr,
                    {
                      variant: "rail",
                      mainLinks: o,
                      secondaryLinks: r,
                      activePath: O,
                      onLinkClick: K,
                      accentColor: rt,
                      surfaceBackgroundColor: Ye,
                      railShowTitles: i
                    }
                  ),
                  (j == null ? void 0 : j.show) && /* @__PURE__ */ t(gt, { ...j })
                ]
              }
            )
          }
        ),
        s && B && /* @__PURE__ */ t(
          So,
          {
            open: yt,
            onClose: vr,
            mainLinks: o,
            secondaryLinks: r,
            activePath: O,
            onLinkClick: K,
            userName: P,
            userEmail: G,
            userAvatar: T,
            userRole: V,
            onLogout: Ot,
            onProfileClick: m,
            theme: ie,
            showThemeToggler: ce,
            onThemeToggle: we,
            alertProps: j,
            accentColor: rt,
            groupAccentColor: u
          }
        ),
        /* @__PURE__ */ t(
          Ie,
          {
            component: "main",
            sx: {
              flexGrow: 1,
              p: 3,
              width: B ? "100%" : s ? `calc(100% - ${fe}px)` : "100%",
              transition: jt,
              mt: h ? "60px" : 0,
              // Account for AppNavbar height (60px)
              ml: 0,
              // Offset for sidebar on desktop
              backgroundColor: Ye,
              mb: 0,
              mr: 0,
              ...He
            },
            children: /* @__PURE__ */ d(lt, { container: !0, spacing: 3, children: [
              /* @__PURE__ */ t(
                lt,
                {
                  size: {
                    xs: 12,
                    md: Rt && xe ? 8.5 : 12
                  },
                  sx: {
                    display: "flex",
                    flexDirection: "column"
                  },
                  children: e
                }
              ),
              Rt && xe && /* @__PURE__ */ t(
                lt,
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
                  children: /* @__PURE__ */ t(xe, {})
                }
              )
            ] })
          }
        ),
        X && x && /* @__PURE__ */ t(
          At,
          {
            anchor: "right",
            open: xr,
            onClose: () => nt(!1),
            slotProps: {
              paper: { sx: { width: 380, maxWidth: "100vw" } }
            },
            children: /* @__PURE__ */ t(
              x,
              {
                onClose: () => nt(!1)
              }
            )
          }
        )
      ]
    }
  ) }) : null;
};
export {
  z as AUTH_ERROR_CODES,
  D as AuthError,
  po as CollapsibleSidebar,
  mn as LumoraWrapper,
  je as clearAuthTokens,
  mn as default,
  gn as getAuthErrorMessage,
  Pe as getAuthTokens,
  Qr as getCurrentUser,
  qr as isAuthenticated,
  ft as logAuthError,
  rr as storeAuthTokens
};
