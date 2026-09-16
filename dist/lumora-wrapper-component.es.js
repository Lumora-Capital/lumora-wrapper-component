import { jsxs as d, jsx as t, Fragment as Oe } from "react/jsx-runtime";
import { useTheme as Cr, useMediaQuery as Ar, Box as Ne, CircularProgress as Dr, CssBaseline as Nr, Drawer as Mt, Grid as ht } from "@mui/material";
import { createTheme as Qt, alpha as se, styled as Wr, useTheme as Ze, ThemeProvider as zt } from "@mui/material/styles";
import * as E from "react";
import { useMemo as Bt, useState as Ke, useRef as Ht, useEffect as pt } from "react";
import Ut from "axios";
import Kt from "@mui/icons-material/AccountCircleRounded";
import er from "@mui/icons-material/DarkMode";
import tr from "@mui/icons-material/LightMode";
import rr from "@mui/icons-material/LogoutRounded";
import or from "@mui/icons-material/MenuRounded";
import Fr from "@mui/icons-material/NotificationsOutlined";
import Mr from "@mui/icons-material/SearchRounded";
import zr from "@mui/material/AppBar";
import mt from "@mui/material/Avatar";
import Br from "@mui/material/Badge";
import _ from "@mui/material/Box";
import nr from "@mui/material/ButtonBase";
import ue from "@mui/material/Divider";
import ae from "@mui/material/IconButton";
import Hr from "@mui/material/InputAdornment";
import Ur from "@mui/material/Menu";
import xt from "@mui/material/MenuItem";
import G from "@mui/material/Stack";
import Kr from "@mui/material/TextField";
import Lr from "@mui/material/Toolbar";
import de from "@mui/material/Tooltip";
import ne from "@mui/material/Typography";
import $r from "@mui/material/useMediaQuery";
import Gr from "@mui/material/useScrollTrigger";
import kr from "@mui/material/Card";
import jr from "@mui/material/CardContent";
import ar from "@mui/material/Button";
import Pr from "@mui/icons-material/AutoAwesomeRounded";
import Xr from "@mui/icons-material/KeyboardArrowDownRounded";
import Vr from "@mui/icons-material/KeyboardArrowUpRounded";
import ot from "@mui/material/Collapse";
import Ie from "@mui/material/ListItemButton";
import be from "@mui/material/ListItemIcon";
import Se from "@mui/material/ListItemText";
import Lt from "@mui/icons-material/ExpandLess";
import $t from "@mui/icons-material/ExpandMore";
import Yr from "@mui/material/ListSubheader";
import Jr from "@mui/material/MenuList";
import Zr from "@mui/material/Paper";
import qr from "@mui/material/Popper";
import Qr from "@mui/material/Drawer";
const W = Qt(), Gt = [...W.shadows], I = {
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
}, N = {
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
}, le = {
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
}, ee = {
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
}, ce = {
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
}, eo = (e) => (Gt[1] = e === "dark" ? "hsla(220, 30%, 5%, 0.7) 0px 4px 16px 0px, hsla(220, 25%, 10%, 0.8) 0px 8px 16px -5px" : "hsla(220, 30%, 5%, 0.07) 0px 4px 16px 0px, hsla(220, 25%, 10%, 0.07) 0px 8px 16px -5px", {
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
      contrastText: N[50],
      ...e === "dark" && {
        contrastText: I[300],
        light: I[500],
        main: I[700],
        dark: I[900]
      }
    },
    warning: {
      light: ee[300],
      main: ee[400],
      dark: ee[800],
      ...e === "dark" && {
        light: ee[400],
        main: ee[500],
        dark: ee[700]
      }
    },
    error: {
      light: ce[300],
      main: ce[400],
      dark: ce[800],
      ...e === "dark" && {
        light: ce[400],
        main: ce[500],
        dark: ce[700]
      }
    },
    success: {
      light: le[300],
      main: le[400],
      dark: le[800],
      ...e === "dark" && {
        light: le[400],
        main: le[500],
        dark: le[700]
      }
    },
    grey: {
      ...N
    },
    divider: e === "dark" ? se(N[700], 0.6) : se(N[300], 0.4),
    background: {
      default: "hsl(0, 0%, 99%)",
      paper: "hsl(220, 35%, 97%)",
      ...e === "dark" && {
        default: N[900],
        paper: "hsl(220, 30%, 7%)"
      }
    },
    text: {
      primary: N[800],
      secondary: N[600],
      warning: ee[400],
      ...e === "dark" && {
        primary: "hsl(0, 0%, 100%)",
        secondary: N[400]
      }
    },
    action: {
      hover: se(N[200], 0.2),
      selected: `${se(N[200], 0.3)}`,
      ...e === "dark" && {
        hover: se(N[600], 0.2),
        selected: se(N[600], 0.3)
      }
    }
  },
  typography: {
    fontFamily: "Inter, sans-serif",
    h1: {
      fontSize: W.typography.pxToRem(48),
      fontWeight: 600,
      lineHeight: 1.2,
      letterSpacing: -0.5
    },
    h2: {
      fontSize: W.typography.pxToRem(36),
      fontWeight: 600,
      lineHeight: 1.2
    },
    h3: {
      fontSize: W.typography.pxToRem(30),
      lineHeight: 1.2
    },
    h4: {
      fontSize: W.typography.pxToRem(24),
      fontWeight: 600,
      lineHeight: 1.5
    },
    h5: {
      fontSize: W.typography.pxToRem(20),
      fontWeight: 600
    },
    h6: {
      fontSize: W.typography.pxToRem(18),
      fontWeight: 600
    },
    subtitle1: {
      fontSize: W.typography.pxToRem(18)
    },
    subtitle2: {
      fontSize: W.typography.pxToRem(14),
      fontWeight: 500
    },
    body1: {
      fontSize: W.typography.pxToRem(14)
    },
    body2: {
      fontSize: W.typography.pxToRem(14),
      fontWeight: 400
    },
    caption: {
      fontSize: W.typography.pxToRem(12),
      fontWeight: 400
    }
  },
  shape: {
    borderRadius: 8
  },
  shadows: Gt
});
I[200], I[400], I[700], I[50], I[100], I[300], I[600], N[50], ee[300], ee[400], ee[800], ce[300], ce[400], ce[800], le[300], le[400], le[800], {
  ...N
}, se(N[300], 0.4), N[800], N[600], ee[400], se(N[200], 0.2), `${se(N[200], 0.3)}`, I[50], I[300], I[400], I[700], I[300], I[500], I[700], I[900], ee[400], ee[500], ee[700], ce[400], ce[500], ce[700], le[400], le[500], le[700], {
  ...N
}, se(N[700], 0.6), N[900], N[400], se(N[600], 0.2), se(N[600], 0.3);
W.typography.pxToRem(48), W.typography.pxToRem(36), W.typography.pxToRem(30), W.typography.pxToRem(24), W.typography.pxToRem(20), W.typography.pxToRem(18), W.typography.pxToRem(18), W.typography.pxToRem(14), W.typography.pxToRem(14), W.typography.pxToRem(14), W.typography.pxToRem(12);
[
  ...W.shadows.slice(2)
];
class F extends Error {
  constructor(o, r, a = null) {
    super(o), this.name = "AuthError", this.code = r, this.originalError = a, this.timestamp = (/* @__PURE__ */ new Date()).toISOString();
  }
}
const K = {
  STORAGE_ACCESS_DENIED: "STORAGE_ACCESS_DENIED",
  TOKEN_NOT_FOUND: "TOKEN_NOT_FOUND",
  TOKEN_INVALID: "TOKEN_INVALID",
  TOKEN_EXPIRED: "TOKEN_EXPIRED",
  LOGOUT_FAILED: "LOGOUT_FAILED",
  UNKNOWN_ERROR: "UNKNOWN_ERROR"
}, V = {
  ACCESS_TOKEN: "lumoraAccessToken",
  REFRESH_TOKEN: "lumoraRefreshToken",
  USER: "lumoraUser"
}, xe = {
  ACCESS_TOKEN: "accessToken",
  REFRESH_TOKEN: "refreshToken",
  USER: "user"
}, to = () => {
  if (!(typeof window > "u" || !window.localStorage))
    try {
      const e = localStorage.getItem(xe.ACCESS_TOKEN), o = localStorage.getItem(xe.REFRESH_TOKEN), r = localStorage.getItem(xe.USER);
      e && !localStorage.getItem(V.ACCESS_TOKEN) && localStorage.setItem(V.ACCESS_TOKEN, e), o && !localStorage.getItem(V.REFRESH_TOKEN) && localStorage.setItem(V.REFRESH_TOKEN, o), r && !localStorage.getItem(V.USER) && localStorage.setItem(V.USER, r), (e || o || r) && (localStorage.removeItem(xe.ACCESS_TOKEN), localStorage.removeItem(xe.REFRESH_TOKEN), localStorage.removeItem(xe.USER));
    } catch (e) {
      console.warn("Failed to migrate legacy localStorage keys:", e);
    }
}, ut = (e) => {
  try {
    if (typeof window > "u")
      return console.warn("localStorage access attempted on server side"), null;
    if (!window.localStorage)
      throw new F("localStorage is not available", K.STORAGE_ACCESS_DENIED);
    return window.localStorage.getItem(e);
  } catch (o) {
    throw o.name === "QuotaExceededError" ? (console.error("Storage quota exceeded"), new F(
      "Storage quota exceeded. Please clear browser data.",
      K.STORAGE_ACCESS_DENIED,
      o
    )) : o.name === "SecurityError" ? (console.error("localStorage access denied (private browsing or security settings)"), new F(
      "Access to localStorage is denied. Please check browser settings.",
      K.STORAGE_ACCESS_DENIED,
      o
    )) : (console.error("Unexpected error accessing localStorage:", o.name), new F("Failed to access storage", K.STORAGE_ACCESS_DENIED, o));
  }
}, ft = (e, o) => {
  try {
    if (typeof window > "u")
      return console.warn("localStorage write attempted on server side"), !1;
    if (!window.localStorage)
      throw new F("localStorage is not available", K.STORAGE_ACCESS_DENIED);
    return window.localStorage.setItem(e, o), !0;
  } catch (r) {
    throw r.name === "QuotaExceededError" ? (console.error("Storage quota exceeded"), new F(
      "Storage quota exceeded. Please clear browser data.",
      K.STORAGE_ACCESS_DENIED,
      r
    )) : r.name === "SecurityError" ? (console.error("localStorage write denied (private browsing or security settings)"), new F(
      "Access to localStorage is denied. Please check browser settings.",
      K.STORAGE_ACCESS_DENIED,
      r
    )) : (console.error("Unexpected error writing to localStorage:", r.name), new F("Failed to write to storage", K.STORAGE_ACCESS_DENIED, r));
  }
}, ir = (e) => {
  try {
    return typeof window > "u" ? (console.warn("localStorage removal attempted on server side"), !1) : window.localStorage ? (window.localStorage.removeItem(e), !0) : (console.warn("localStorage is not available"), !1);
  } catch (o) {
    return o.name !== "SecurityError" && console.warn(`Could not remove localStorage key "${e}"`), !1;
  }
}, Ye = () => {
  try {
    to();
    const e = ut(V.ACCESS_TOKEN), o = ut(V.REFRESH_TOKEN), r = ut(V.USER);
    let a = null;
    if (r)
      try {
        a = JSON.parse(r);
      } catch {
        r && r !== "null" && r !== "undefined" && console.warn("Invalid user data in localStorage, clearing:", r.substring(0, 50)), ir(V.USER);
      }
    return {
      accessToken: e,
      refreshToken: o,
      user: a
    };
  } catch (e) {
    throw e instanceof F ? e : new F("Failed to retrieve authentication tokens", K.UNKNOWN_ERROR, e);
  }
}, ro = () => {
  try {
    const { accessToken: e, refreshToken: o } = Ye();
    return !(e || o) ? {
      isAuthenticated: !1,
      error: new F("No authentication tokens found", K.TOKEN_NOT_FOUND)
    } : {
      isAuthenticated: !0,
      error: null
    };
  } catch (e) {
    return console.error("Authentication check failed:", e), {
      isAuthenticated: !1,
      error: e instanceof F ? e : new F("Authentication check failed", K.UNKNOWN_ERROR, e)
    };
  }
}, sr = (e, o, r = null) => {
  try {
    if (!e && !o)
      throw new F("At least one token must be provided", K.TOKEN_INVALID);
    return e && ft(V.ACCESS_TOKEN, e), o && ft(V.REFRESH_TOKEN, o), r && ft(V.USER, JSON.stringify(r)), {
      success: !0,
      error: null
    };
  } catch (a) {
    return console.error("Failed to store authentication tokens:", a), {
      success: !1,
      error: a instanceof F ? a : new F("Failed to store tokens", K.UNKNOWN_ERROR, a)
    };
  }
}, Je = () => {
  try {
    return [
      V.ACCESS_TOKEN,
      V.REFRESH_TOKEN,
      V.USER,
      // Also clear legacy keys for complete cleanup
      xe.ACCESS_TOKEN,
      xe.REFRESH_TOKEN,
      xe.USER
    ].map((a) => ir(a)).every((a) => a) || console.warn("Some tokens could not be removed from localStorage"), {
      success: !0,
      error: null
    };
  } catch (e) {
    return console.error("Failed to clear authentication tokens:", e), {
      success: !1,
      error: e instanceof F ? e : new F("Failed to clear tokens", K.LOGOUT_FAILED, e)
    };
  }
}, oo = () => {
  try {
    const { user: e } = Ye();
    return {
      user: e,
      error: null
    };
  } catch (e) {
    return console.error("Failed to get current user:", e), {
      user: null,
      error: e instanceof F ? e : new F("Failed to retrieve user data", K.UNKNOWN_ERROR, e)
    };
  }
}, En = (e) => {
  if (!(e instanceof F))
    return "An unexpected error occurred. Please try again.";
  switch (e.code) {
    case K.STORAGE_ACCESS_DENIED:
      return "Unable to access browser storage. Please check your browser settings and disable private browsing if enabled.";
    case K.TOKEN_NOT_FOUND:
      return "You are not logged in. Please sign in to continue.";
    case K.TOKEN_INVALID:
      return "Your session is invalid. Please sign in again.";
    case K.TOKEN_EXPIRED:
      return "Your session has expired. Please sign in again.";
    case K.LOGOUT_FAILED:
      return "Failed to log out properly. Please clear your browser cache and try again.";
    case K.UNKNOWN_ERROR:
    default:
      return "An unexpected error occurred. Please try again or contact support if the problem persists.";
  }
}, bt = (e, o = "Unknown") => {
  const r = {
    context: o,
    message: e.message,
    code: e instanceof F ? e.code : "UNKNOWN",
    timestamp: e instanceof F ? e.timestamp : (/* @__PURE__ */ new Date()).toISOString(),
    stack: e.stack
  };
  e instanceof F && e.originalError && (r.originalError = {
    name: e.originalError.name,
    message: e.originalError.message
  }), console.warn("[Auth Error]", r);
}, no = (e) => {
  if (!e)
    throw new Error("API base URL is required to create axios client");
  const o = Ut.create({
    baseURL: e,
    headers: {
      "Content-Type": "application/json"
    }
  });
  let r = !1, a = null, c = [];
  const h = (s, i) => {
    c.forEach(({ resolve: x, reject: w }) => {
      s ? w(s) : i && x(i);
    }), c = [];
  };
  return o.interceptors.request.use(
    (s) => {
      const { accessToken: i } = Ye();
      return i && s.headers && (s.headers.Authorization = `Bearer ${i}`), s;
    },
    (s) => Promise.reject(s)
  ), o.interceptors.response.use(
    (s) => s,
    async (s) => {
      var R;
      const i = s.config, x = (R = s.response) == null ? void 0 : R.status, w = (i == null ? void 0 : i.url) || "", v = w.includes("/auth/refresh");
      if (x !== 401 || i._retry || v)
        return Promise.reject(s);
      i._retry = !0;
      const { refreshToken: M } = Ye();
      if (!M) {
        const u = new Error(
          "No refresh token available for token refresh"
        );
        return bt(u, "AxiosClient - Token Refresh"), Je(), typeof window < "u" && (window.location.href = "/login"), Promise.reject(s);
      }
      if (r && a)
        return new Promise((u, B) => {
          c.push({ resolve: u, reject: B });
        }).then((u) => {
          const {
            accessToken: B,
            refreshToken: T
          } = u;
          if (i.headers && (i.headers.Authorization = `Bearer ${B}`), w.includes("/auth/logout"))
            try {
              if (typeof i.data == "string") {
                const C = JSON.parse(
                  i.data || "{}"
                );
                C.refresh_token = T, i.data = JSON.stringify(C);
              } else
                i.data && typeof i.data == "object" ? i.data.refresh_token = T : i.data = JSON.stringify({
                  refresh_token: T
                });
            } catch {
              i.data = JSON.stringify({
                refresh_token: T
              });
            }
          return o(i);
        }).catch((u) => Promise.reject(u));
      r = !0, a = Ut.post(
        `${e}/auth/refresh`,
        {
          refresh_token: M
        }
      );
      try {
        const u = await a, { accessToken: B, refreshToken: T } = u.data;
        if (sr(B, T, null), h(null, {
          accessToken: B,
          refreshToken: T
        }), i.headers && (i.headers.Authorization = `Bearer ${B}`), w.includes("/auth/logout"))
          try {
            if (typeof i.data == "string") {
              const C = JSON.parse(
                i.data || "{}"
              );
              C.refresh_token = T, i.data = JSON.stringify(C);
            } else
              i.data && typeof i.data == "object" ? i.data.refresh_token = T : i.data = JSON.stringify({
                refresh_token: T
              });
          } catch {
            i.data = JSON.stringify({
              refresh_token: T
            });
          }
        return o(i);
      } catch (u) {
        return bt(
          u,
          "AxiosClient - Token Refresh Failed"
        ), h(u), Je(), typeof window < "u" && (window.location.href = "/login"), Promise.reject(u);
      } finally {
        r = !1, a = null;
      }
    }
  ), o;
}, ao = async (e, o) => {
  const { accessToken: r, refreshToken: a } = Ye();
  if (r)
    return !0;
  if (a)
    try {
      const c = await e.post("/auth/refresh", {
        refresh_token: a
      });
      if (c.data.success && c.data.accessToken)
        return sr(c.data.accessToken, c.data.refreshToken || null, null), !0;
    } catch (c) {
      bt(c, "TokenValidator - Refresh Failed");
    }
  return Je(), o ? o() : window.location.href = "/login", !1;
}, io = ({ size: e = 20, style: o }) => /* @__PURE__ */ d(
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
), so = ({
  onClick: e,
  active: o = !1,
  busy: r = !1,
  navbarBackground: a = "#ffffff"
}) => /* @__PURE__ */ t(de, { title: "Nexa", placement: "bottom", children: /* @__PURE__ */ t(
  ae,
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
      _,
      {
        sx: {
          position: "relative",
          zIndex: 2,
          display: "flex",
          alignItems: "center"
        },
        children: /* @__PURE__ */ t(io, { size: 20 })
      }
    )
  }
) }), lo = Wr(Lr)({
  width: "100%",
  padding: "8px 16px",
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
  gap: "16px",
  flexShrink: 0
}), co = ({
  appName: e = "Dashboard",
  pageName: o = "Home",
  onMenuClick: r,
  showMenuButton: a = !0,
  isMobile: c = !1,
  sidebarCollapsed: h,
  showBrand: s = !0,
  logo: i,
  onBrandClick: x,
  leftOffsetPx: w = 0,
  headerStyles: v,
  userName: M = "User Name",
  userEmail: R,
  userAvatar: u,
  onProfileClick: B,
  onAccountClick: T,
  onSettingsClick: C,
  showSettings: L = !0,
  onLogout: k,
  showNotifications: f = !1,
  notificationCount: y = 0,
  onNotificationBellClick: b,
  theme: g = "light",
  showThemeToggler: m = !1,
  onThemeToggle: A,
  showSearchbar: X = !0,
  searchValue: j,
  onSearchChange: te,
  onSearchSubmit: p,
  showProfile: $ = !0,
  userRole: U,
  accentColor: S = "#01584f",
  contentBackgroundColor: z = "#f2f9fc",
  navbarBackground: re = "#ff0000",
  navbarAccentColor: q = "#000000",
  rightExtraContent: oe = [],
  customNavbar: Y,
  customNavbarProps: J,
  showAssistant: We = !1,
  onAssistantClick: he,
  assistantActive: ke = !1,
  assistantBusy: we = !1
}) => {
  const je = $r((l) => l.breakpoints.up("md")), ye = Gr({
    disableHysteresis: !0,
    threshold: 0
  }), [Ee, Fe] = E.useState(null), Pe = !!Ee, ie = g === "dark", pe = ie ? "text.primary" : S, _e = /* @__PURE__ */ d(Oe, { children: [
    /* @__PURE__ */ t(
      ne,
      {
        variant: "h6",
        sx: {
          color: pe,
          fontWeight: 600,
          fontSize: "20px",
          lineHeight: 1,
          textTransform: "uppercase"
        },
        children: e
      }
    ),
    i ? /* @__PURE__ */ t(
      _,
      {
        sx: {
          display: "flex",
          alignItems: "center",
          flexShrink: 0,
          color: pe,
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
  ] }), ve = ie ? "Switch to light mode" : "Switch to dark mode", fe = h === void 0 ? "Open navigation menu" : h ? "Expand sidebar" : "Collapse sidebar", Me = (l) => {
    te == null || te(l.target.value);
  }, ze = (l) => {
    l.key === "Enter" && p && j && p(j);
  }, Be = (l) => l ? l.charAt(0).toUpperCase() + l.slice(1).toLowerCase() : "User", Xe = (l) => {
    Fe(l.currentTarget);
  }, Ce = () => {
    Fe(null);
  }, n = (l) => {
    l == null || l(), Ce();
  };
  return /* @__PURE__ */ t(
    zr,
    {
      position: "fixed",
      sx: {
        boxShadow: ye ? "0 2px 8px rgba(0, 0, 0, 0.12)" : "none",
        // left/width animate in step with the collapsible sidebar's
        // 200ms width transition so the bar tracks the panel edge.
        transition: "box-shadow 0.2s ease-in-out, left 200ms ease, width 200ms ease",
        background: re,
        top: "var(--template-frame-height, 0px)",
        // Inset from the left so the bar starts at the edge of a
        // full-height sidebar; full width otherwise.
        left: w,
        width: w ? `calc(100% - ${w}px)` : "100%",
        zIndex: 1,
        height: "60px",
        ...v
      },
      children: /* @__PURE__ */ d(lo, { variant: "dense", sx: { height: "100%" }, children: [
        /* @__PURE__ */ d(
          G,
          {
            direction: "row",
            sx: {
              alignItems: "center",
              gap: 2,
              flexShrink: 0,
              flexGrow: 1
            },
            children: [
              a && /* @__PURE__ */ t(de, { title: fe, placement: "bottom", children: /* @__PURE__ */ t(
                ae,
                {
                  "aria-label": fe,
                  onClick: r,
                  disableFocusRipple: !0,
                  sx: {
                    // Nudge left so the icon centers on the sidebar
                    // icon rail (72px wide → 36px center) below it.
                    ml: -1,
                    color: pe,
                    "&:hover": {
                      backgroundColor: "action.hover"
                    },
                    "&:focus, &:focus-visible": {
                      outline: "none"
                    }
                  },
                  children: /* @__PURE__ */ t(or, {})
                }
              ) }),
              s && (x ? /* @__PURE__ */ t(
                nr,
                {
                  onClick: x,
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
                      outlineColor: pe,
                      outlineOffset: 2
                    }
                  },
                  children: _e
                }
              ) : /* @__PURE__ */ t(
                G,
                {
                  direction: "row",
                  "data-testid": "navbar-brand",
                  sx: {
                    alignItems: "center",
                    gap: 1,
                    flexShrink: 0
                  },
                  children: _e
                }
              )),
              Y ? /* @__PURE__ */ t(Y, { ...J || {} }) : X && je && /* @__PURE__ */ t(
                Kr,
                {
                  placeholder: "Search for deals or documents...",
                  value: j || "",
                  onChange: Me,
                  onKeyDown: ze,
                  size: "small",
                  sx: {
                    width: "400px",
                    "& .MuiOutlinedInput-root": {
                      backgroundColor: z,
                      borderRadius: "8px",
                      "& fieldset": {
                        borderColor: "transparent"
                      },
                      "&:hover fieldset": {
                        borderColor: "transparent"
                      },
                      "&.Mui-focused fieldset": {
                        borderColor: S
                      }
                    }
                  },
                  InputProps: {
                    startAdornment: /* @__PURE__ */ t(Hr, { position: "start", children: /* @__PURE__ */ t(
                      Mr,
                      {
                        sx: {
                          color: q
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
          G,
          {
            direction: "row",
            sx: {
              alignItems: "center",
              gap: 1.5,
              flexShrink: 0
            },
            children: [
              m && !c && /* @__PURE__ */ t(de, { title: ve, placement: "bottom", children: /* @__PURE__ */ t("span", { children: /* @__PURE__ */ t(
                ae,
                {
                  size: "small",
                  onClick: A,
                  disabled: !A,
                  "aria-label": ve,
                  sx: {
                    color: q,
                    "&:hover": {
                      backgroundColor: "action.hover"
                    }
                  },
                  children: ie ? /* @__PURE__ */ t(tr, { fontSize: "small" }) : /* @__PURE__ */ t(er, { fontSize: "small" })
                }
              ) }) }),
              f && /* @__PURE__ */ t(
                Br,
                {
                  color: "error",
                  badgeContent: y,
                  invisible: y === 0,
                  sx: {
                    "& .MuiBadge-badge": {
                      right: 2,
                      top: 2
                    }
                  },
                  children: /* @__PURE__ */ t(
                    ae,
                    {
                      size: "small",
                      onClick: b,
                      "aria-label": y ? `Notifications, ${y} unread` : "Notifications",
                      sx: { color: q },
                      children: /* @__PURE__ */ t(Fr, {})
                    }
                  )
                }
              ),
              We && !c && /* @__PURE__ */ d(Oe, { children: [
                /* @__PURE__ */ t(
                  ue,
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
                  so,
                  {
                    onClick: he,
                    active: ke,
                    busy: we,
                    navbarBackground: re
                  }
                )
              ] }),
              f && $ && !c && /* @__PURE__ */ t(
                ue,
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
              $ && !c && /* @__PURE__ */ d(Oe, { children: [
                /* @__PURE__ */ d(
                  G,
                  {
                    direction: "row",
                    onClick: Xe,
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
                        mt,
                        {
                          src: u,
                          sx: { width: 32, height: 32 }
                        }
                      ) : /* @__PURE__ */ t(
                        Kt,
                        {
                          sx: {
                            width: 32,
                            height: 32,
                            color: q
                          }
                        }
                      ),
                      /* @__PURE__ */ d(
                        _,
                        {
                          sx: {
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "flex-start",
                            minWidth: 0
                          },
                          children: [
                            /* @__PURE__ */ t(
                              ne,
                              {
                                variant: "body2",
                                sx: {
                                  color: q,
                                  fontWeight: 500,
                                  lineHeight: 1.2,
                                  overflow: "hidden",
                                  textOverflow: "ellipsis",
                                  whiteSpace: "nowrap",
                                  maxWidth: "150px"
                                },
                                children: M
                              }
                            ),
                            /* @__PURE__ */ t(
                              ne,
                              {
                                variant: "caption",
                                sx: {
                                  color: q,
                                  lineHeight: 1.2,
                                  overflow: "hidden",
                                  textOverflow: "ellipsis",
                                  whiteSpace: "nowrap",
                                  maxWidth: "150px"
                                },
                                children: Be(U)
                              }
                            )
                          ]
                        }
                      )
                    ]
                  }
                ),
                /* @__PURE__ */ d(
                  Ur,
                  {
                    anchorEl: Ee,
                    open: Pe,
                    onClose: Ce,
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
                      L && [
                        /* @__PURE__ */ t(
                          xt,
                          {
                            onClick: () => n(C),
                            children: "Settings"
                          },
                          "settings"
                        ),
                        /* @__PURE__ */ t(ue, {}, "settings-divider")
                      ],
                      /* @__PURE__ */ d(
                        xt,
                        {
                          onClick: () => n(k),
                          sx: {
                            color: "error.main",
                            "&:hover": {
                              color: "error.dark"
                            }
                          },
                          children: [
                            /* @__PURE__ */ t(ne, { sx: { flexGrow: 1 }, children: "Logout" }),
                            /* @__PURE__ */ t(rr, { fontSize: "small" })
                          ]
                        }
                      )
                    ]
                  }
                )
              ] }),
              oe.length !== 0 && oe.map((l) => l.type === "divider" ? /* @__PURE__ */ t(
                ue,
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
                de,
                {
                  title: l.tooltip || "",
                  disableHoverListener: !l.tooltip,
                  arrow: !0,
                  children: /* @__PURE__ */ d(
                    G,
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
                          mt,
                          {
                            src: l.avatar,
                            sx: {
                              width: 32,
                              height: 32
                            }
                          }
                        ) : /* @__PURE__ */ t(
                          Kt,
                          {
                            sx: {
                              width: 32,
                              height: 32,
                              color: q
                            }
                          }
                        ),
                        /* @__PURE__ */ d(
                          _,
                          {
                            sx: {
                              display: "flex",
                              flexDirection: "column",
                              alignItems: "flex-start",
                              minWidth: 0
                            },
                            children: [
                              /* @__PURE__ */ t(
                                ne,
                                {
                                  variant: "body2",
                                  sx: {
                                    color: q,
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
                                ne,
                                {
                                  variant: "caption",
                                  sx: {
                                    color: q,
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
}, St = ({
  title: e = "",
  message: o = "",
  buttonText: r = "",
  onButtonClick: a,
  show: c = !0
}) => c ? /* @__PURE__ */ t(kr, { variant: "outlined", sx: { m: 1.5, flexShrink: 0 }, children: /* @__PURE__ */ d(jr, { children: [
  /* @__PURE__ */ t(Pr, { fontSize: "small" }),
  /* @__PURE__ */ t(ne, { gutterBottom: !0, sx: { fontWeight: 600 }, children: e }),
  /* @__PURE__ */ t(
    ne,
    {
      variant: "body2",
      sx: { mb: 2, color: "text.secondary" },
      children: o
    }
  ),
  /* @__PURE__ */ t(
    ar,
    {
      variant: "contained",
      size: "small",
      fullWidth: !0,
      onClick: a,
      children: r
    }
  )
] }) }) : null, at = (e) => {
  var o;
  return !!((o = e.subitems) != null && o.length);
}, $e = (e, o) => e ? `${e}/${o.text}` : o.text, Te = (e, o) => {
  var r;
  return o ? e.path && o === e.path ? !0 : ((r = e.subitems) == null ? void 0 : r.some((a) => Te(a, o))) ?? !1 : !1;
}, Ge = (e, o) => !!(o && e.path === o), lr = (e, o) => (e ?? []).flatMap((r) => {
  const a = r.icon ?? o;
  return at(r) ? lr(r.subitems, a) : r.path ? [{ sub: r, icon: a }] : [];
}), nt = (e) => {
  const o = cr(e);
  if (!o)
    return "#ffffff";
  const [r, a, c] = o.map((s) => {
    const i = s / 255;
    return i <= 0.03928 ? i / 12.92 : ((i + 0.055) / 1.055) ** 2.4;
  });
  return 0.2126 * r + 0.7152 * a + 0.0722 * c > 0.5 ? "#0b1f1c" : "#ffffff";
}, wt = (e) => {
  const o = cr(e);
  if (!o)
    return "rgba(1, 88, 79, 0.12)";
  const [r, a, c] = o;
  return `rgba(${r}, ${a}, ${c}, 0.14)`;
}, cr = (e) => {
  let o = e.trim().replace(/^#/, "");
  if (o.length === 3 && (o = o.split("").map((a) => a + a).join("")), o.length !== 6 || /[^0-9a-fA-F]/.test(o))
    return null;
  const r = parseInt(o, 16);
  return [r >> 16 & 255, r >> 8 & 255, r & 255];
}, dr = () => typeof window < "u" && !!window.localStorage, hr = (e) => {
  if (!dr())
    return null;
  try {
    const o = window.localStorage.getItem(e);
    return o === null ? null : o === "true";
  } catch (o) {
    return console.warn("Failed to read sidebar collapsed state:", o), null;
  }
}, pr = (e, o) => {
  if (dr())
    try {
      window.localStorage.setItem(e, o ? "true" : "false");
    } catch (r) {
      console.warn("Failed to persist sidebar collapsed state:", r);
    }
}, ho = 264, po = 72, uo = "lumora:sidebar-collapsed", fo = "width 200ms ease", kt = 60, tt = {
  "&:focus, &:focus-visible": { outline: "none" }
}, go = 16, mo = 14, xo = 4, bo = 2.5, jt = "0.7rem", Pt = 22, Le = ({ text: e, variant: o = "body1", center: r = !1, fontSize: a }) => {
  const c = E.useRef(null), [h, s] = E.useState(!1), i = E.useCallback(() => {
    const x = c.current;
    x && s(x.scrollWidth > x.clientWidth + 0.5);
  }, []);
  return E.useLayoutEffect(() => {
    i();
  }, [i, e]), E.useEffect(() => {
    const x = c.current;
    if (!x)
      return;
    const w = new ResizeObserver(() => i());
    return w.observe(x), () => w.disconnect();
  }, [i]), /* @__PURE__ */ t(
    de,
    {
      title: e,
      placement: "right",
      arrow: !0,
      enterDelay: 400,
      disableHoverListener: !h,
      disableFocusListener: !h,
      disableTouchListener: !h,
      children: /* @__PURE__ */ t(
        ne,
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
}, gt = ({
  open: e,
  size: o = go
}) => e ? /* @__PURE__ */ t(Vr, { sx: { fontSize: o, opacity: 0.75 } }) : /* @__PURE__ */ t(Xr, { sx: { fontSize: o, opacity: 0.75 } }), So = ({
  mainLinks: e,
  secondaryLinks: o = [],
  activePath: r,
  onLinkClick: a,
  logo: c,
  title: h,
  onBrandClick: s,
  showHeaderBar: i = !1,
  headerBackgroundColor: x,
  headerForegroundColor: w,
  activeAccentColor: v = "#01584f",
  groupAccentColor: M,
  activeForegroundColor: R,
  foregroundColor: u,
  surfaceBackgroundColor: B,
  collapsed: T,
  defaultCollapsed: C = !1,
  onCollapsedChange: L,
  persistKey: k = uo,
  expandedWidth: f = ho,
  collapsedWidth: y = po,
  showLabels: b = !1,
  topInsetPx: g = 0
}) => {
  const m = Ze(), A = m.palette.mode === "dark", X = T !== void 0, [j, te] = E.useState(
    () => hr(k) ?? C
  ), p = X ? !!T : j, [$, U] = E.useState(
    {}
  ), S = v, z = R ?? nt(S), re = {
    bgcolor: S,
    color: z,
    "& .MuiListItemIcon-root": { color: z }
  }, q = {
    bgcolor: S,
    color: z,
    borderRadius: "8px"
  }, oe = M ?? wt(S), Y = B ?? (A ? m.palette.background.paper : "#ffffff"), J = u ?? (A ? "text.primary" : S), We = x ?? Y, he = w ?? (x ? nt(We) : u ?? (A ? m.palette.text.primary : S)), ke = wt(he), we = (n) => {
    a == null || a(n);
  }, je = () => {
    const n = !p;
    X || (te(n), pr(k, n)), L == null || L(n);
  }, ye = (n, l) => {
    U((H) => ({ ...H, [n]: !l }));
  }, Ee = (n, l) => $[l] ?? Te(n, r), Fe = (n) => {
    const l = !!(n.path && r === n.path);
    return /* @__PURE__ */ d(
      Ie,
      {
        disabled: !n.path,
        selected: l,
        onClick: () => n.path && we(n.path),
        "data-testid": `sidebar-item-${n.text}`,
        "data-active": l ? "true" : "false",
        sx: {
          borderRadius: "8px",
          py: 1,
          px: 1.5,
          color: l ? z : J,
          bgcolor: l ? S : "transparent",
          "& .MuiListItemIcon-root": {
            color: l ? z : J,
            minWidth: 36
          },
          // rail-labeled: active AND hover share the highlight. collapsible:
          // keep the original subtle idle-hover tint (accent only if active).
          "&:hover": l || b ? re : { bgcolor: oe },
          "&.Mui-selected": {
            bgcolor: S
          },
          "&.Mui-selected:hover": re
        },
        children: [
          /* @__PURE__ */ t(be, { children: n.icon }),
          /* @__PURE__ */ t(
            Se,
            {
              disableTypography: !0,
              primary: /* @__PURE__ */ t(Le, { text: n.text })
            }
          )
        ]
      },
      n.text
    );
  }, Pe = (n) => {
    const l = Te(n, r), H = !!(n.path && r === n.path), D = $e("", n), Z = Ee(n, D);
    return /* @__PURE__ */ d(
      _,
      {
        "data-testid": `sidebar-group-${n.text}`,
        sx: {
          borderRadius: "8px",
          bgcolor: l ? oe : "transparent"
        },
        children: [
          /* @__PURE__ */ d(
            Ie,
            {
              onClick: () => ye(D, Z),
              "data-testid": `sidebar-item-${n.text}`,
              "data-active": H ? "true" : "false",
              "aria-expanded": Z,
              sx: {
                borderRadius: "8px",
                py: 1,
                px: 1.5,
                color: H ? z : J,
                bgcolor: H ? S : "transparent",
                "& .MuiListItemIcon-root": {
                  color: H ? z : J,
                  minWidth: 36
                },
                // rail-labeled highlights on hover; collapsible keeps the
                // subtle idle tint (accent only when the parent is active).
                "&:hover": H || b ? re : { bgcolor: oe }
              },
              children: [
                /* @__PURE__ */ t(be, { children: n.icon }),
                /* @__PURE__ */ t(
                  Se,
                  {
                    disableTypography: !0,
                    primary: /* @__PURE__ */ t(Le, { text: n.text })
                  }
                ),
                /* @__PURE__ */ t(gt, { open: Z })
              ]
            }
          ),
          /* @__PURE__ */ t(ot, { in: Z, timeout: "auto", unmountOnExit: !0, children: /* @__PURE__ */ t(
            _,
            {
              "data-testid": `sidebar-children-${n.text}`,
              sx: { pb: 0.5 },
              children: n.subitems.map(
                (O) => ie(O, D, 1)
              )
            }
          ) })
        ]
      },
      n.text
    );
  }, ie = (n, l, H) => {
    const D = $e(l, n), Z = xo + (H - 1) * bo;
    if (at(n)) {
      const Q = Te(n, r), P = Ge(n, r), ge = Ee(n, D);
      return /* @__PURE__ */ d(_, { "data-testid": `sidebar-group-${n.text}`, children: [
        /* @__PURE__ */ d(
          Ie,
          {
            onClick: () => ye(D, ge),
            "data-testid": `sidebar-subitem-${n.text}`,
            "data-active": Q ? "true" : "false",
            "aria-expanded": ge,
            sx: {
              borderRadius: "8px",
              mx: 0.5,
              py: 0.75,
              pl: Z,
              color: P ? z : J,
              bgcolor: P ? S : "transparent",
              "& .MuiListItemIcon-root": {
                color: P ? z : J,
                minWidth: 32
              },
              "&:hover": P || b ? re : { bgcolor: "action.hover" }
            },
            children: [
              n.icon ? /* @__PURE__ */ t(be, { children: n.icon }) : null,
              /* @__PURE__ */ t(
                Se,
                {
                  disableTypography: !0,
                  primary: /* @__PURE__ */ t(Le, { text: n.text })
                }
              ),
              /* @__PURE__ */ t(gt, { open: ge })
            ]
          }
        ),
        /* @__PURE__ */ t(ot, { in: ge, timeout: "auto", unmountOnExit: !0, children: /* @__PURE__ */ t(_, { "data-testid": `sidebar-children-${n.text}`, children: n.subitems.map(
          (He) => ie(He, D, H + 1)
        ) }) })
      ] }, D);
    }
    const O = Ge(n, r);
    return /* @__PURE__ */ d(
      Ie,
      {
        selected: O,
        disabled: !n.path,
        onClick: () => n.path && we(n.path),
        "data-testid": `sidebar-subitem-${n.text}`,
        "data-active": O ? "true" : "false",
        sx: {
          borderRadius: "8px",
          mx: 0.5,
          py: 0.75,
          pl: Z,
          color: O ? z : J,
          bgcolor: O ? S : "transparent",
          "& .MuiListItemIcon-root": {
            color: O ? z : J,
            minWidth: 32
          },
          // rail-labeled: active AND hover share the highlight. collapsible:
          // keep the original subtle idle-hover tint (accent only if active).
          "&:hover": O || b ? re : { bgcolor: "action.hover" },
          "&.Mui-selected": {
            bgcolor: S
          },
          "&.Mui-selected:hover": re
        },
        children: [
          n.icon ? /* @__PURE__ */ t(be, { children: n.icon }) : null,
          /* @__PURE__ */ t(
            Se,
            {
              disableTypography: !0,
              primary: /* @__PURE__ */ t(Le, { text: n.text })
            }
          )
        ]
      },
      D
    );
  }, pe = (n, l, H, D, Z, O) => {
    const Q = !Z, P = /* @__PURE__ */ d(
      ae,
      {
        "aria-label": l,
        disabled: Q,
        onClick: Z,
        "data-testid": (O == null ? void 0 : O.testId) ?? `sidebar-item-${l}`,
        "data-active": D ? "true" : "false",
        sx: b ? {
          display: "flex",
          flexDirection: "column",
          gap: 0.25,
          width: "100%",
          maxWidth: "100%",
          height: "auto",
          // 8px padding on all sides of the item container.
          p: 1,
          borderRadius: "8px",
          color: D ? z : J,
          bgcolor: D ? S : "transparent",
          "& .MuiSvgIcon-root": {
            fontSize: Pt
          },
          "&:hover": q,
          ...tt
        } : {
          // Icon-only collapsed rail (collapsible variant):
          // original hover — accent when active, else a subtle
          // tint; no foreground change.
          width: 44,
          height: 44,
          color: D ? z : J,
          bgcolor: D ? S : "transparent",
          borderRadius: D ? "8px" : "50%",
          "&:hover": {
            bgcolor: D ? S : O != null && O.insideGroup ? "action.hover" : oe,
            borderRadius: "8px"
          },
          ...tt
        },
        children: [
          H,
          b ? /* @__PURE__ */ t(
            Le,
            {
              text: l,
              variant: "caption",
              center: !0,
              fontSize: jt
            }
          ) : null
        ]
      }
    );
    return b ? Q ? /* @__PURE__ */ t("span", { children: P }, n) : /* @__PURE__ */ t(E.Fragment, { children: P }, n) : /* @__PURE__ */ t(de, { title: l, placement: "right", arrow: !0, children: Q ? /* @__PURE__ */ t("span", { children: P }) : P }, n);
  }, _e = (n, l) => {
    const H = Te(n, r), D = !!(n.path && r === n.path), Z = /* @__PURE__ */ d(
      ae,
      {
        "aria-label": n.text,
        "aria-expanded": l,
        onClick: () => ye(n.text, l),
        "data-testid": `sidebar-item-${n.text}`,
        "data-active": D ? "true" : "false",
        sx: {
          display: "flex",
          flexDirection: "column",
          gap: b ? 0.25 : 0,
          width: b ? "100%" : 44,
          maxWidth: "100%",
          // 8px padding on all sides of the labeled item container.
          ...b ? { p: 1 } : { py: 0.75 },
          borderRadius: "10px",
          color: D ? z : J,
          bgcolor: D ? S : "transparent",
          // rail-labeled: active AND hover share the highlight. collapsible:
          // original behavior — accent only when active; the outer pill
          // supplies the idle-hover tint, so the button stays transparent.
          "&:hover": b ? { bgcolor: S, color: z } : {
            bgcolor: D ? S : "transparent"
          },
          ...tt
        },
        children: [
          b ? /* @__PURE__ */ t(
            _,
            {
              sx: {
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                "& .MuiSvgIcon-root": {
                  fontSize: Pt
                }
              },
              children: n.icon
            }
          ) : n.icon,
          b ? /* @__PURE__ */ t(
            Le,
            {
              text: n.text,
              variant: "caption",
              center: !0,
              fontSize: jt
            }
          ) : null,
          /* @__PURE__ */ t(gt, { open: l, size: mo })
        ]
      }
    ), O = b ? Z : /* @__PURE__ */ t(de, { title: n.text, placement: "right", arrow: !0, children: Z });
    return /* @__PURE__ */ d(
      _,
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
          bgcolor: H ? oe : "transparent",
          ...b ? {} : { "&:hover": { bgcolor: oe } }
        },
        children: [
          O,
          l ? lr(n.subitems, n.icon).map(
            ({ sub: Q, icon: P }) => pe(
              Q.path,
              Q.text,
              P,
              Ge(Q, r),
              () => we(Q.path),
              {
                insideGroup: !0,
                testId: `sidebar-subitem-${Q.text}`
              }
            )
          ) : null
        ]
      }
    );
  }, ve = (n) => {
    var H;
    return (H = n.subitems) != null && H.length ? /* @__PURE__ */ t(E.Fragment, { children: _e(
      n,
      Ee(n, $e("", n))
    ) }, n.text) : /* @__PURE__ */ t(
      _,
      {
        sx: {
          width: "100%",
          display: "flex",
          justifyContent: "center"
        },
        children: pe(
          n.text,
          n.text,
          n.icon,
          !!(n.path && r === n.path),
          n.path ? () => we(n.path) : void 0
        )
      },
      n.text
    );
  }, fe = (n) => {
    var l;
    return p ? ve(n) : (l = n.subitems) != null && l.length ? Pe(n) : Fe(n);
  }, Me = p ? y : f, ze = {
    gap: 1,
    minWidth: 0,
    color: he,
    // Consumer SVG logos pick up the header foreground.
    "& svg": { color: "inherit", fill: "currentColor" }
  }, Be = /* @__PURE__ */ d(Oe, { children: [
    h ? /* @__PURE__ */ t(
      ne,
      {
        variant: "h6",
        noWrap: !0,
        sx: {
          color: he,
          fontWeight: 600,
          fontSize: "18px",
          lineHeight: 1,
          textTransform: "uppercase"
        },
        children: h
      }
    ) : null,
    c
  ] }), Xe = i ? /* @__PURE__ */ d(
    _,
    {
      "data-testid": "sidebar-header",
      sx: {
        height: kt,
        minHeight: kt,
        flexShrink: 0,
        display: "flex",
        alignItems: "center",
        gap: 1.5,
        bgcolor: We,
        borderBottom: `1px solid ${ke}`,
        justifyContent: p ? "center" : "flex-start",
        // Expanded: 20px inset centers the hamburger glyph on the item
        // icon column (16px list padding + 12px row padding + half of
        // the 24px icon = 40px, minus the button's 8px + 12px to its
        // own center). Collapsed: centered like the rail icons.
        px: p ? 0 : 2.5
      },
      children: [
        /* @__PURE__ */ t(
          de,
          {
            title: p ? "Expand sidebar" : "Collapse sidebar",
            placement: "right",
            arrow: !0,
            children: /* @__PURE__ */ t(
              ae,
              {
                "aria-label": p ? "Expand sidebar" : "Collapse sidebar",
                "aria-expanded": !p,
                onClick: je,
                "data-testid": "sidebar-collapse-toggle",
                disableFocusRipple: !0,
                sx: { color: he, ...tt },
                children: /* @__PURE__ */ t(or, {})
              }
            )
          }
        ),
        !p && (c || h) ? s ? /* @__PURE__ */ t(
          nr,
          {
            onClick: s,
            "aria-label": `${h || "App"} home`,
            "data-testid": "sidebar-header-brand",
            focusRipple: !0,
            sx: {
              ...ze,
              borderRadius: 1,
              px: 0.5,
              mx: -0.5,
              "&:hover": { backgroundColor: "action.hover" },
              "&.Mui-focusVisible": {
                outline: "2px solid",
                outlineColor: he,
                outlineOffset: 2
              }
            },
            children: Be
          }
        ) : /* @__PURE__ */ t(
          G,
          {
            direction: "row",
            "data-testid": "sidebar-header-brand",
            sx: { alignItems: "center", ...ze },
            children: Be
          }
        ) : null
      ]
    }
  ) : null, Ce = /* @__PURE__ */ d(Oe, { children: [
    /* @__PURE__ */ t(
      G,
      {
        spacing: 0.5,
        sx: {
          width: "100%",
          alignItems: p ? "center" : "stretch"
        },
        children: e.map((n) => fe(n))
      }
    ),
    o.length > 0 ? /* @__PURE__ */ d(_, { sx: { mt: "auto", pt: 2 }, children: [
      /* @__PURE__ */ t(ue, { sx: { mb: 1, borderColor: "divider" } }),
      /* @__PURE__ */ t(
        G,
        {
          spacing: 0.5,
          sx: {
            width: "100%",
            alignItems: p ? "center" : "stretch"
          },
          children: o.map((n) => fe(n))
        }
      )
    ] }) : null
  ] });
  return /* @__PURE__ */ t(
    _,
    {
      component: "nav",
      "aria-label": "Main sidebar",
      "data-testid": "collapsible-sidebar",
      "data-collapsed": p ? "true" : "false",
      "data-labeled": b ? "true" : "false",
      sx: {
        width: Me,
        minWidth: Me,
        height: "100%",
        boxSizing: "border-box",
        bgcolor: Y,
        display: "flex",
        flexDirection: "column",
        // Lets the sidebar shrink inside a flex-column host so siblings
        // (e.g. an alert card below it) stay within the viewport.
        flex: "1 1 auto",
        minHeight: 0,
        transition: fo,
        ...i ? { overflow: "hidden", p: 0 } : {
          overflowX: "hidden",
          overflowY: "auto",
          px: b ? 0.5 : p ? 1 : 2,
          pt: g ? `${g}px` : 1,
          pb: 2
        }
      },
      children: i ? /* @__PURE__ */ d(Oe, { children: [
        Xe,
        /* @__PURE__ */ t(
          _,
          {
            sx: {
              flex: "1 1 auto",
              minHeight: 0,
              display: "flex",
              flexDirection: "column",
              overflowY: "auto",
              overflowX: "hidden",
              px: p ? 1 : 2,
              pt: 1,
              pb: 2
            },
            children: Ce
          }
        )
      ] }) : Ce
    }
  );
}, wo = 180, Xt = 250, ur = ({
  text: e,
  testId: o
}) => {
  const r = E.useRef(null), [a, c] = E.useState(!1), h = E.useCallback(() => {
    const s = r.current;
    s && c(s.scrollWidth > s.clientWidth + 0.5);
  }, []);
  return E.useLayoutEffect(() => {
    h();
  }, [h, e]), E.useEffect(() => {
    const s = r.current;
    if (!s)
      return;
    const i = new ResizeObserver(() => h());
    return i.observe(s), () => i.disconnect();
  }, [h]), /* @__PURE__ */ t(
    de,
    {
      title: e,
      placement: "right",
      arrow: !0,
      enterDelay: 400,
      disableHoverListener: !a,
      disableFocusListener: !a,
      disableTouchListener: !a,
      children: /* @__PURE__ */ t(
        ne,
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
}, yo = ({
  link: e,
  activePath: o,
  onLinkClick: r,
  accentColor: a,
  isSecondary: c,
  surfaceBackgroundColor: h,
  railShowTitles: s = !1
}) => {
  const i = Ze(), [x, w] = E.useState(null), [v, M] = E.useState(!1), R = E.useRef(
    null
  ), u = E.useRef(null), B = E.useRef(null), T = E.useRef(!1), C = E.useRef(!1), L = E.useId(), k = () => {
    R.current && (clearTimeout(R.current), R.current = null);
  }, f = () => {
    k(), R.current = setTimeout(() => {
      M(!1), R.current = null;
    }, wo);
  }, y = () => {
    k(), M(!0);
  };
  E.useEffect(() => {
    if (!v)
      return;
    const p = ($) => {
      var U;
      $.key === "Escape" && (M(!1), (U = B.current) == null || U.focus());
    };
    return document.addEventListener("keydown", p), () => document.removeEventListener("keydown", p);
  }, [v]), E.useEffect(() => {
    if (!v || !C.current)
      return;
    const p = globalThis.requestAnimationFrame(() => {
      var U;
      const $ = (U = u.current) == null ? void 0 : U.querySelector(
        '[role="menuitem"]'
      );
      $ == null || $.focus(), C.current = !1;
    });
    return () => cancelAnimationFrame(p);
  }, [v]);
  const b = Te(e, o), g = c ? 48 : 44, m = c ? "text.secondary" : a, A = c ? "#01584F" : a, X = {
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
    color: b ? "#ffffff" : m,
    backgroundColor: b ? A : "transparent",
    "&:hover": {
      backgroundColor: b ? A : "action.hover",
      borderRadius: "4px",
      color: b ? "#ffffff" : m
    }
  }, j = s ? /* @__PURE__ */ t(
    ae,
    {
      ref: B,
      component: e.path ? "a" : "button",
      href: e.path || void 0,
      "aria-label": e.text,
      onFocus: () => {
        T.current || y();
      },
      onBlur: (p) => {
        var U;
        const $ = p.relatedTarget;
        $ && ((U = u.current) != null && U.contains($)) || f();
      },
      onKeyDown: (p) => {
        p.key === "ArrowDown" && (p.preventDefault(), C.current = !0, y());
      },
      onClick: (p) => {
        p.preventDefault(), p.stopPropagation(), e.path && (r == null || r(e.path));
      },
      "aria-haspopup": "menu",
      "aria-expanded": v,
      "aria-controls": v ? L : void 0,
      "data-testid": `rail-submenu-trigger-${e.text}`,
      sx: X,
      children: /* @__PURE__ */ d(G, { alignItems: "center", spacing: 1, sx: { width: "100%" }, children: [
        /* @__PURE__ */ t(
          _,
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
          ur,
          {
            text: e.text,
            testId: `rail-item-caption-${e.text}`
          }
        )
      ] })
    }
  ) : /* @__PURE__ */ t(
    ae,
    {
      ref: B,
      component: e.path ? "a" : "button",
      href: e.path || void 0,
      "aria-label": e.text,
      onFocus: () => {
        T.current || y();
      },
      onBlur: (p) => {
        var U;
        const $ = p.relatedTarget;
        $ && ((U = u.current) != null && U.contains($)) || f();
      },
      onKeyDown: (p) => {
        p.key === "ArrowDown" && (p.preventDefault(), C.current = !0, y());
      },
      onClick: (p) => {
        p.preventDefault(), p.stopPropagation(), e.path && (r == null || r(e.path));
      },
      "aria-haspopup": "menu",
      "aria-expanded": v,
      "aria-controls": v ? L : void 0,
      "data-testid": `rail-submenu-trigger-${e.text}`,
      sx: {
        width: g,
        height: g,
        color: b ? "#ffffff" : m,
        backgroundColor: b ? A : "transparent",
        borderRadius: b ? "4px" : "50%",
        "&:hover": {
          backgroundColor: b ? A : "action.hover",
          borderRadius: "4px"
        }
      },
      children: e.icon
    }
  );
  return /* @__PURE__ */ d(
    _,
    {
      sx: {
        width: "100%",
        display: "flex",
        justifyContent: "center"
      },
      children: [
        /* @__PURE__ */ t(
          _,
          {
            ref: w,
            "data-testid": `rail-submenu-anchor-${e.text}`,
            sx: { display: "inline-flex", maxWidth: "100%" },
            onMouseEnter: () => {
              T.current = !0, y();
            },
            onMouseLeave: () => {
              T.current = !1, f();
            },
            children: s ? j : /* @__PURE__ */ t(de, { title: e.text, placement: "right", arrow: !0, children: j })
          }
        ),
        /* @__PURE__ */ t(
          qr,
          {
            open: v && !!x,
            anchorEl: x,
            placement: "right-start",
            modifiers: [{ name: "offset", options: { offset: [8, 0] } }],
            sx: { zIndex: (p) => p.zIndex.modal },
            children: /* @__PURE__ */ t(
              Zr,
              {
                ref: u,
                elevation: 0,
                onMouseEnter: () => {
                  k();
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
                  maxWidth: Xt,
                  minWidth: 0,
                  py: 0.5,
                  boxSizing: "border-box"
                },
                children: /* @__PURE__ */ t(
                  Jr,
                  {
                    id: L,
                    dense: !0,
                    autoFocus: !1,
                    role: "menu",
                    sx: {
                      bgcolor: "transparent",
                      py: 0,
                      maxWidth: Xt
                    },
                    children: te(e.subitems, e.text, 0)
                  }
                )
              }
            )
          }
        )
      ]
    }
  );
  function te(p, $, U) {
    return p.flatMap((S) => {
      const z = $e($, S);
      return at(S) ? [
        /* @__PURE__ */ t(
          Yr,
          {
            disableSticky: !0,
            title: S.text,
            sx: {
              bgcolor: "transparent",
              lineHeight: "28px",
              pl: 2 + U * 1.5,
              fontSize: "0.7rem",
              letterSpacing: "0.06em",
              textTransform: "uppercase",
              color: "text.secondary",
              overflow: "hidden",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap"
            },
            children: S.text
          },
          z
        ),
        ...te(S.subitems, z, U + 1)
      ] : [
        /* @__PURE__ */ d(
          xt,
          {
            role: "menuitem",
            title: S.text,
            disabled: !S.path,
            selected: Ge(S, o),
            onClick: (re) => {
              re.preventDefault(), S.path && (r == null || r(S.path)), M(!1);
            },
            sx: {
              borderRadius: "4px",
              mx: 0.5,
              my: 0.125,
              pl: 2 + U * 1.5,
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
                bgcolor: A,
                color: "#ffffff",
                "&:hover": {
                  bgcolor: A
                }
              },
              "&.Mui-focusVisible": {
                bgcolor: "action.focus"
              }
            },
            children: [
              S.icon ? /* @__PURE__ */ t(be, { children: S.icon }) : null,
              /* @__PURE__ */ t(
                Se,
                {
                  primary: S.text,
                  primaryTypographyProps: {
                    noWrap: !0
                  }
                }
              )
            ]
          },
          z
        )
      ];
    });
  }
}, Eo = ({
  link: e,
  activePath: o,
  onLinkClick: r,
  accentColor: a,
  isSecondary: c,
  railShowTitles: h = !1
}) => {
  const s = !!(e.path && o === e.path), i = c ? 48 : 44, x = c ? "text.secondary" : a, w = c ? "#01584F" : a, v = {
    width: "100%",
    maxWidth: "100%",
    minWidth: i,
    height: "auto",
    minHeight: i,
    flexDirection: "column",
    py: 0.5,
    px: 1,
    borderRadius: "4px",
    color: s ? "#ffffff" : x,
    backgroundColor: s ? w : "transparent",
    "&:hover": {
      backgroundColor: s ? w : "action.hover",
      borderRadius: "4px",
      color: s ? "#ffffff" : x
    }
  }, M = h ? /* @__PURE__ */ t(
    ae,
    {
      component: e.path ? "a" : "button",
      href: e.path || void 0,
      "aria-label": e.text,
      onClick: (R) => {
        R.preventDefault(), R.stopPropagation(), e.path && (r == null || r(e.path));
      },
      disabled: !e.path,
      sx: v,
      children: /* @__PURE__ */ d(G, { alignItems: "center", spacing: 1, sx: { width: "100%" }, children: [
        /* @__PURE__ */ t(
          _,
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
          ur,
          {
            text: e.text,
            testId: `rail-item-caption-${e.text}`
          }
        )
      ] })
    }
  ) : /* @__PURE__ */ t(
    ae,
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
        color: s ? "#ffffff" : x,
        backgroundColor: s ? w : "transparent",
        borderRadius: s ? "4px" : "50%",
        "&:hover": {
          backgroundColor: s ? w : "action.hover",
          borderRadius: "4px"
        }
      },
      children: e.icon
    }
  );
  return h ? M : /* @__PURE__ */ t(de, { title: e.text, placement: "right", arrow: !0, children: M });
}, vo = ({
  link: e,
  expanded: o,
  onToggle: r,
  activePath: a,
  onLinkClick: c,
  accentColor: h,
  groupTint: s,
  activeFg: i,
  isSecondary: x
}) => {
  const w = Te(e, a), v = !!(e.path && a === e.path), M = Ze().palette.mode === "dark", R = x ? "text.secondary" : M ? "text.primary" : h, u = x ? "#01584F" : h, [B, T] = E.useState({}), C = (f, y) => B[y] ?? Te(f, a), L = (f, y) => T((b) => ({ ...b, [f]: !y })), k = (f, y, b) => {
    const g = $e(y, f), m = 4 + (b - 1) * 2;
    if (at(f)) {
      const X = C(f, g), j = Ge(f, a);
      return /* @__PURE__ */ d(_, { children: [
        /* @__PURE__ */ d(
          Ie,
          {
            onClick: () => L(g, X),
            "aria-expanded": X,
            "data-testid": `drawer-section-trigger-${f.text}`,
            sx: {
              pl: m,
              py: 1,
              color: j ? i : R,
              bgcolor: j ? u : "transparent",
              "& .MuiListItemIcon-root": { color: "inherit" },
              "&:hover": {
                bgcolor: j ? u : "action.hover"
              }
            },
            children: [
              f.icon ? /* @__PURE__ */ t(be, { sx: { minWidth: 36 }, children: f.icon }) : null,
              /* @__PURE__ */ t(Se, { primary: f.text }),
              X ? /* @__PURE__ */ t(Lt, {}) : /* @__PURE__ */ t($t, {})
            ]
          }
        ),
        /* @__PURE__ */ t(ot, { in: X, timeout: "auto", unmountOnExit: !0, children: /* @__PURE__ */ t(_, { component: "nav", "aria-label": f.text, children: f.subitems.map(
          (te) => k(te, g, b + 1)
        ) }) })
      ] }, g);
    }
    const A = Ge(f, a);
    return /* @__PURE__ */ d(
      Ie,
      {
        disabled: !f.path,
        onClick: () => f.path && (c == null ? void 0 : c(f.path)),
        sx: {
          pl: m,
          py: 1,
          color: A ? i : R,
          bgcolor: A ? u : "transparent",
          "& .MuiListItemIcon-root": {
            color: "inherit"
          },
          "&:hover": {
            bgcolor: A ? u : "action.hover"
          }
        },
        children: [
          f.icon ? /* @__PURE__ */ t(be, { sx: { minWidth: 36 }, children: f.icon }) : null,
          /* @__PURE__ */ t(Se, { primary: f.text })
        ]
      },
      g
    );
  };
  return /* @__PURE__ */ d(
    _,
    {
      sx: {
        borderRadius: "6px",
        bgcolor: w ? s : "transparent"
      },
      children: [
        /* @__PURE__ */ d(
          Ie,
          {
            onClick: () => e.path ? c == null ? void 0 : c(e.path) : r(),
            sx: {
              py: 1.5,
              px: 2,
              color: v ? i : R,
              bgcolor: v ? u : "transparent",
              "&:hover": {
                bgcolor: v ? u : s
              }
            },
            "data-testid": `drawer-expand-trigger-${e.text}`,
            children: [
              /* @__PURE__ */ t(be, { sx: { color: "inherit", minWidth: 40 }, children: e.icon }),
              /* @__PURE__ */ t(Se, { primary: e.text }),
              /* @__PURE__ */ t(
                ae,
                {
                  size: "small",
                  edge: "end",
                  "aria-label": o ? `Collapse ${e.text}` : `Expand ${e.text}`,
                  onClick: (f) => {
                    f.stopPropagation(), r();
                  },
                  sx: { color: "inherit" },
                  "data-testid": `drawer-expand-chevron-${e.text}`,
                  children: o ? /* @__PURE__ */ t(Lt, {}) : /* @__PURE__ */ t($t, {})
                }
              )
            ]
          }
        ),
        /* @__PURE__ */ t(ot, { in: o, timeout: "auto", unmountOnExit: !0, children: /* @__PURE__ */ t(_, { component: "nav", "aria-label": e.text, children: e.subitems.map(
          (f) => k(f, $e("", e), 1)
        ) }) })
      ]
    }
  );
}, Ro = ({
  link: e,
  activePath: o,
  onLinkClick: r,
  accentColor: a,
  groupTint: c,
  activeFg: h,
  isSecondary: s
}) => {
  const i = !!(e.path && o === e.path), x = Ze().palette.mode === "dark", w = s ? "text.secondary" : x ? "text.primary" : a, v = s ? "#01584F" : a;
  return /* @__PURE__ */ d(
    Ie,
    {
      disabled: !e.path,
      onClick: () => e.path && (r == null ? void 0 : r(e.path)),
      sx: {
        py: 1.5,
        px: 2,
        color: i ? h : w,
        bgcolor: i ? v : "transparent",
        "&:hover": {
          bgcolor: i ? v : c
        }
      },
      children: [
        /* @__PURE__ */ t(be, { sx: { color: "inherit", minWidth: 40 }, children: e.icon }),
        /* @__PURE__ */ t(Se, { primary: e.text })
      ]
    }
  );
}, rt = () => /* @__PURE__ */ t(
  _,
  {
    sx: {
      width: "100%",
      display: "flex",
      justifyContent: "center"
    },
    children: /* @__PURE__ */ t(ue, { sx: { width: "60%", borderColor: "divider" } })
  }
), fr = ({
  variant: e,
  mainLinks: o,
  secondaryLinks: r = [],
  activePath: a,
  onLinkClick: c,
  accentColor: h = "#01584f",
  groupAccentColor: s,
  surfaceBackgroundColor: i,
  railShowTitles: x = !1
}) => {
  const w = Ze(), v = i ?? w.palette.background.paper, M = nt(h), R = s ?? wt(h), u = (g) => {
    c && c(g);
  }, [B, T] = E.useState({}), [C, L] = E.useState({}), k = (g) => {
    T((m) => ({
      ...m,
      [g]: !m[g]
    }));
  }, f = (g) => {
    L((m) => ({
      ...m,
      [g]: !m[g]
    }));
  }, y = (g, m) => {
    var A;
    return (A = g.subitems) != null && A.length ? /* @__PURE__ */ t(
      yo,
      {
        link: g,
        activePath: a,
        onLinkClick: u,
        accentColor: h,
        isSecondary: m,
        surfaceBackgroundColor: v,
        railShowTitles: x
      }
    ) : /* @__PURE__ */ t(
      Eo,
      {
        link: g,
        activePath: a,
        onLinkClick: u,
        accentColor: h,
        isSecondary: m,
        railShowTitles: x
      }
    );
  }, b = (g, m, A) => {
    var X;
    if ((X = g.subitems) != null && X.length) {
      const j = A ? !!C[m] : !!B[m];
      return /* @__PURE__ */ t(
        vo,
        {
          link: g,
          expanded: j,
          onToggle: () => A ? f(m) : k(m),
          activePath: a,
          onLinkClick: u,
          accentColor: h,
          groupTint: R,
          activeFg: M,
          isSecondary: A
        }
      );
    }
    return /* @__PURE__ */ t(
      Ro,
      {
        link: g,
        activePath: a,
        onLinkClick: u,
        accentColor: h,
        groupTint: R,
        activeFg: M,
        isSecondary: A
      }
    );
  };
  return e === "drawer" ? /* @__PURE__ */ d(
    G,
    {
      sx: {
        flexGrow: 1,
        width: "100%",
        alignItems: "stretch",
        pt: 2,
        gap: 0
      },
      children: [
        /* @__PURE__ */ t(G, { sx: { width: "100%" }, children: o.map((g, m) => /* @__PURE__ */ d(E.Fragment, { children: [
          b(g, m, !1),
          m < o.length - 1 ? /* @__PURE__ */ t(rt, {}) : null
        ] }, m)) }),
        r.length > 0 ? /* @__PURE__ */ d(Oe, { children: [
          /* @__PURE__ */ t(
            _,
            {
              sx: {
                width: "100%",
                my: 2,
                display: "flex",
                justifyContent: "center"
              },
              children: /* @__PURE__ */ t(
                ue,
                {
                  sx: { width: "60%", borderColor: "divider" }
                }
              )
            }
          ),
          /* @__PURE__ */ t(_, { sx: { mt: "auto", pb: 2 }, children: /* @__PURE__ */ t(G, { sx: { width: "100%" }, children: r.map((g, m) => /* @__PURE__ */ d(E.Fragment, { children: [
            b(g, m, !0),
            m < r.length - 1 ? /* @__PURE__ */ t(rt, {}) : null
          ] }, m)) }) })
        ] }) : null
      ]
    }
  ) : /* @__PURE__ */ d(
    G,
    {
      sx: {
        flexGrow: 1,
        width: "100%",
        boxSizing: "border-box",
        justifyContent: "flex-start",
        alignItems: "center",
        pt: 2,
        gap: x ? 1.25 : 1
      },
      children: [
        o.map((g, m) => /* @__PURE__ */ d(E.Fragment, { children: [
          y(g, !1),
          m < o.length - 1 ? /* @__PURE__ */ t(rt, {}) : null
        ] }, m)),
        r.length > 0 ? /* @__PURE__ */ d(Oe, { children: [
          /* @__PURE__ */ t(
            _,
            {
              sx: {
                width: "100%",
                my: 2,
                display: "flex",
                justifyContent: "center"
              },
              children: /* @__PURE__ */ t(
                ue,
                {
                  sx: { width: "60%", borderColor: "divider" }
                }
              )
            }
          ),
          /* @__PURE__ */ t(_, { sx: { mt: "auto", pb: 2 }, children: /* @__PURE__ */ t(
            G,
            {
              gap: x ? 1.25 : 1,
              alignItems: "center",
              children: r.map((g, m) => /* @__PURE__ */ d(E.Fragment, { children: [
                y(g, !0),
                m < r.length - 1 ? /* @__PURE__ */ t(rt, {}) : null
              ] }, m))
            }
          ) })
        ] }) : null
      ]
    }
  );
}, Io = ({
  open: e,
  onClose: o,
  mainLinks: r,
  secondaryLinks: a = [],
  activePath: c,
  onLinkClick: h,
  userName: s = "User Name",
  userAvatar: i,
  userRole: x,
  onLogout: w,
  theme: v = "light",
  showThemeToggler: M = !1,
  onThemeToggle: R,
  alertProps: u,
  accentColor: B = "#01584f",
  groupAccentColor: T
}) => {
  const C = v === "dark", L = C ? "Switch to light mode" : "Switch to dark mode", k = (y) => y ? y.charAt(0).toUpperCase() + y.slice(1).toLowerCase() : "User", f = (y) => {
    h == null || h(y), o();
  };
  return /* @__PURE__ */ t(
    Qr,
    {
      anchor: "left",
      open: e,
      onClose: o,
      sx: {
        zIndex: (y) => y.zIndex.drawer + 1,
        "& .MuiDrawer-paper": {
          backgroundImage: "none",
          backgroundColor: "background.paper"
        }
      },
      children: /* @__PURE__ */ d(
        G,
        {
          sx: {
            maxWidth: "70dvw",
            height: "100%"
          },
          children: [
            /* @__PURE__ */ d(
              G,
              {
                direction: "row",
                sx: { p: 2, gap: 1, alignItems: "center" },
                children: [
                  /* @__PURE__ */ d(
                    G,
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
                          mt,
                          {
                            sizes: "small",
                            alt: s,
                            src: i,
                            sx: { width: 40, height: 40, flexShrink: 0 }
                          }
                        ),
                        /* @__PURE__ */ d(
                          _,
                          {
                            sx: {
                              display: "flex",
                              flexDirection: "column",
                              minWidth: 0
                            },
                            children: [
                              /* @__PURE__ */ t(
                                ne,
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
                                ne,
                                {
                                  variant: "caption",
                                  sx: {
                                    color: "text.secondary",
                                    lineHeight: 1.2,
                                    overflow: "hidden",
                                    textOverflow: "ellipsis",
                                    whiteSpace: "nowrap"
                                  },
                                  children: k(x)
                                }
                              )
                            ]
                          }
                        )
                      ]
                    }
                  ),
                  M && /* @__PURE__ */ t(de, { title: L, placement: "bottom", children: /* @__PURE__ */ t("span", { children: /* @__PURE__ */ t(
                    ae,
                    {
                      size: "small",
                      onClick: R,
                      disabled: !R,
                      "aria-label": L,
                      children: C ? /* @__PURE__ */ t(tr, { fontSize: "small" }) : /* @__PURE__ */ t(er, { fontSize: "small" })
                    }
                  ) }) })
                ]
              }
            ),
            /* @__PURE__ */ t(ue, {}),
            /* @__PURE__ */ d(G, { sx: { flexGrow: 1 }, children: [
              /* @__PURE__ */ t(
                fr,
                {
                  variant: "drawer",
                  mainLinks: r,
                  secondaryLinks: a,
                  activePath: c,
                  onLinkClick: f,
                  accentColor: B,
                  groupAccentColor: T
                }
              ),
              /* @__PURE__ */ t(ue, {})
            ] }),
            (u == null ? void 0 : u.show) && /* @__PURE__ */ t(St, { ...u }),
            /* @__PURE__ */ t(G, { sx: { p: 2 }, children: /* @__PURE__ */ t(
              ar,
              {
                variant: "outlined",
                fullWidth: !0,
                startIcon: /* @__PURE__ */ t(rr, {}),
                onClick: w,
                children: "Logout"
              }
            ) })
          ]
        }
      )
    }
  );
}, To = 100, Vt = 80, Oo = 60, Yt = 264, Jt = 72, Zt = "lumora:sidebar-collapsed", qt = "width 200ms ease, left 200ms ease", vn = ({
  children: e,
  sidebarLinks: o = [],
  secondarySidebarLinks: r = [],
  appName: a = "Dashboard",
  pageName: c = "Home",
  showHeader: h = !0,
  showSidebar: s = !0,
  showSidebarRailTitles: i = !1,
  sidebarVariant: x = "rail",
  logo: w,
  onBrandClick: v,
  sidebarBackgroundColor: M,
  sidebarHeaderBackgroundColor: R,
  groupAccentColor: u,
  activeSidebarForegroundColor: B,
  enableRefreshToken: T = !1,
  activePath: C,
  onLinkClick: L,
  userName: k,
  userEmail: f,
  userAvatar: y,
  onLogout: b,
  onProfileClick: g,
  onAccountClick: m,
  onSettingsClick: A,
  showSettings: X = !0,
  showNotifications: j = !0,
  notificationCount: te = 0,
  NotificationSidebarContent: p,
  showSearchbar: $ = !0,
  searchValue: U,
  onSearchChange: S,
  onSearchSubmit: z,
  showProfile: re = !0,
  userRole: q,
  onVerify: oe,
  alertProps: Y,
  style: J,
  headerStyles: We,
  sidebarStyles: he,
  contentStyles: ke,
  accentColor: we,
  sidebarAccentColor: je,
  sidebarForegroundColor: ye,
  contentBackgroundColor: Ee,
  navbarBackground: Fe,
  navbarAccentColor: Pe,
  theme: ie = "light",
  showThemeToggler: pe = !1,
  onThemeToggle: _e,
  GlobalChatSidebar: ve,
  useChatSidebar: fe,
  showAssistant: Me = !1,
  onAssistantClick: ze,
  assistantActive: Be = !1,
  assistantBusy: Xe = !1,
  rightExtraContent: Ce,
  customNavbar: n,
  customNavbarProps: l,
  redirectToLogin: H,
  apiBaseUrl: D
}) => {
  const Z = Cr(), O = Ar(Z.breakpoints.down("md")), Q = Bt(
    () => Qt(eo(ie)),
    [ie]
  ), P = ie === "dark", ge = we ?? "#01584f", He = je ?? ge, qe = Ee ?? (P ? "hsl(220, 35%, 9%)" : "#f2f9fc"), gr = Fe ?? (P ? "hsl(220, 30%, 7%)" : "#ffffff"), mr = Pe ?? (P ? "#ffffff" : "#000000"), Re = x === "collapsible", Ae = x === "rail-labeled", yt = Re || Ae, Et = Ae && s && !O, vt = Re && s && !O, xr = Et || vt, it = M ?? (P ? "hsl(220, 30%, 7%)" : "#ffffff"), Rt = R ?? it, It = R ? nt(Rt) : ye ?? (P ? "#ffffff" : He), Tt = (De) => /* @__PURE__ */ t(
    Ne,
    {
      role: "img",
      "aria-label": `${a} logo`,
      sx: {
        width: 28,
        height: 28,
        flexShrink: 0,
        bgcolor: De,
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
  ), br = w ?? Tt(P ? "#ffffff" : ge), Sr = w ?? Tt(It), [Qe, wr] = Ke(
    () => hr(Zt) ?? !1
  ), yr = (De) => {
    wr(De), pr(Zt, De);
  };
  let me = 0;
  s && !O && (Ae ? me = Vt : Re ? me = Qe ? Jt : Yt : me = To);
  const [Ot, _t] = Ke(!1), [Er, st] = Ke(!1), [vr, Rr] = Ke(!0), [Ir, Tr] = Ke(!1), [_o, et] = Ke(null), lt = fe == null ? void 0 : fe(), Ct = (lt == null ? void 0 : lt.isOpen) ?? !1, ct = Ht(oe), At = Ht(!1), Dt = Bt(
    () => no(D),
    [D]
  );
  pt(() => {
    ct.current = oe;
  }, [oe]);
  const Or = () => {
    _t(!Ot);
  }, _r = () => {
    _t(!1);
  }, Nt = (De) => {
    const Ue = b(De);
    Ue instanceof Promise ? Ue.then(() => {
      et(null);
    }).catch((Wt) => {
      console.error("Error in logout handler:", Wt), et(null);
    }) : et(null);
  };
  return pt(() => {
    (() => {
      try {
        const { isAuthenticated: Ue, error: Wt } = ro();
        if (!Ue) {
          console.log("No session found, redirecting to login"), Je(), H();
          return;
        }
        if (!At.current) {
          const { user: Ve, error: dt } = oo();
          if (Ve && !dt) {
            const Ft = {
              name: Ve.name || "",
              email: Ve.email || "",
              profilePicture: Ve.profilePicture || "",
              role: Ve.role || ""
            };
            et(Ft), At.current = !0, ct.current && ct.current(Ft);
          } else
            dt && console.error("Error getting user data:", dt);
        }
        Tr(!0);
      } catch (Ue) {
        console.error("Error checking session:", Ue), Je(), H();
      } finally {
        Rr(!1);
      }
    })();
  }, [H]), pt(() => {
    T && ao(Dt, H);
  }, [T, Dt]), vr ? /* @__PURE__ */ t(zt, { theme: Q, children: /* @__PURE__ */ d(
    Ne,
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
          Dr,
          {
            size: 60,
            thickness: 4,
            sx: { color: ge }
          }
        ),
        /* @__PURE__ */ t(Ne, { sx: { mt: 2, color: "text.secondary" }, children: "Checking session..." })
      ]
    }
  ) }) : Ir ? /* @__PURE__ */ t(zt, { theme: Q, children: /* @__PURE__ */ d(
    Ne,
    {
      sx: {
        display: "flex",
        minHeight: "100vh",
        ...J
      },
      children: [
        /* @__PURE__ */ t(Nr, {}),
        h && /* @__PURE__ */ t(
          co,
          {
            appName: a,
            pageName: c,
            isMobile: O,
            onMenuClick: O && s ? Or : void 0,
            showMenuButton: s && O,
            showBrand: !(vt && !Qe),
            leftOffsetPx: xr ? me : 0,
            logo: br,
            onBrandClick: v,
            headerStyles: We,
            userName: k,
            userEmail: f,
            userAvatar: y,
            onProfileClick: g,
            onAccountClick: m,
            onSettingsClick: A,
            showSettings: X,
            onLogout: Nt,
            showNotifications: j,
            notificationCount: te,
            onNotificationBellClick: j && p ? () => st(!0) : void 0,
            showSearchbar: $ && !n,
            searchValue: U,
            onSearchChange: S,
            onSearchSubmit: z,
            showProfile: re,
            userRole: q,
            accentColor: ge,
            contentBackgroundColor: qe,
            navbarBackground: gr,
            navbarAccentColor: mr,
            theme: ie,
            showThemeToggler: pe,
            onThemeToggle: _e,
            rightExtraContent: Ce,
            customNavbar: n,
            customNavbarProps: l,
            showAssistant: Me,
            onAssistantClick: ze,
            assistantActive: Be,
            assistantBusy: Xe
          }
        ),
        s && !O && yt && /* @__PURE__ */ d(
          Ne,
          {
            component: "aside",
            sx: {
              width: me,
              minWidth: me,
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
              bgcolor: Re ? it : void 0,
              transition: qt,
              ...he
            },
            children: [
              /* @__PURE__ */ t(
                So,
                {
                  mainLinks: o,
                  secondaryLinks: r,
                  activePath: C,
                  onLinkClick: L,
                  showHeaderBar: Re,
                  logo: Sr,
                  title: a,
                  onBrandClick: v,
                  headerBackgroundColor: Re ? Rt : void 0,
                  headerForegroundColor: Re ? It : void 0,
                  activeAccentColor: He,
                  groupAccentColor: u,
                  activeForegroundColor: B,
                  foregroundColor: ye,
                  surfaceBackgroundColor: it,
                  collapsed: Ae ? !0 : Qe,
                  onCollapsedChange: Ae ? void 0 : yr,
                  showLabels: Ae,
                  topInsetPx: Et && h ? Oo : 0,
                  expandedWidth: Yt,
                  collapsedWidth: Ae ? Vt : Jt
                }
              ),
              Re && (Y == null ? void 0 : Y.show) && !Qe && /* @__PURE__ */ t(St, { ...Y })
            ]
          }
        ),
        s && !O && !yt && /* @__PURE__ */ t(
          Mt,
          {
            variant: "permanent",
            sx: {
              width: me,
              flexShrink: 0,
              zIndex: 2,
              // Higher z-index than app bar
              "& .MuiDrawer-paper": {
                width: me,
                boxSizing: "border-box",
                bgcolor: qe,
                borderRight: "none",
                top: h ? "60px" : 0,
                // Position below header
                height: h ? "calc(100vh - 60px)" : "100vh"
              },
              ...he
            },
            children: /* @__PURE__ */ d(
              Ne,
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
                    fr,
                    {
                      variant: "rail",
                      mainLinks: o,
                      secondaryLinks: r,
                      activePath: C,
                      onLinkClick: L,
                      accentColor: He,
                      surfaceBackgroundColor: qe,
                      railShowTitles: i
                    }
                  ),
                  (Y == null ? void 0 : Y.show) && /* @__PURE__ */ t(St, { ...Y })
                ]
              }
            )
          }
        ),
        s && O && /* @__PURE__ */ t(
          Io,
          {
            open: Ot,
            onClose: _r,
            mainLinks: o,
            secondaryLinks: r,
            activePath: C,
            onLinkClick: L,
            userName: k,
            userEmail: f,
            userAvatar: y,
            userRole: q,
            onLogout: Nt,
            onProfileClick: g,
            theme: ie,
            showThemeToggler: pe,
            onThemeToggle: _e,
            alertProps: Y,
            accentColor: He,
            groupAccentColor: u
          }
        ),
        /* @__PURE__ */ t(
          Ne,
          {
            component: "main",
            sx: {
              flexGrow: 1,
              p: 3,
              width: O ? "100%" : s ? `calc(100% - ${me}px)` : "100%",
              transition: qt,
              mt: h ? "60px" : 0,
              // Account for AppNavbar height (60px)
              ml: 0,
              // Offset for sidebar on desktop
              backgroundColor: qe,
              mb: 0,
              mr: 0,
              ...ke
            },
            children: /* @__PURE__ */ d(ht, { container: !0, spacing: 3, children: [
              /* @__PURE__ */ t(
                ht,
                {
                  size: {
                    xs: 12,
                    md: Ct && ve ? 8.5 : 12
                  },
                  sx: {
                    display: "flex",
                    flexDirection: "column"
                  },
                  children: e
                }
              ),
              Ct && ve && /* @__PURE__ */ t(
                ht,
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
                  children: /* @__PURE__ */ t(ve, {})
                }
              )
            ] })
          }
        ),
        j && p && /* @__PURE__ */ t(
          Mt,
          {
            anchor: "right",
            open: Er,
            onClose: () => st(!1),
            slotProps: {
              paper: { sx: { width: 380, maxWidth: "100vw" } }
            },
            children: /* @__PURE__ */ t(
              p,
              {
                onClose: () => st(!1)
              }
            )
          }
        )
      ]
    }
  ) }) : null;
};
export {
  K as AUTH_ERROR_CODES,
  F as AuthError,
  So as CollapsibleSidebar,
  vn as LumoraWrapper,
  Je as clearAuthTokens,
  vn as default,
  En as getAuthErrorMessage,
  Ye as getAuthTokens,
  oo as getCurrentUser,
  ro as isAuthenticated,
  bt as logAuthError,
  sr as storeAuthTokens
};
