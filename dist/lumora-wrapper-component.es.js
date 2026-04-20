import { jsx as r, jsxs as u, Fragment as ce } from "react/jsx-runtime";
import { useTheme as lr, useMediaQuery as cr, Box as X, CircularProgress as dr, CssBaseline as ur, Drawer as Ue, Grid as we } from "@mui/material";
import * as R from "react";
import { useState as Y, useRef as We, useMemo as fr, useEffect as Ee } from "react";
import Be from "axios";
import ze from "@mui/icons-material/AccountCircleRounded";
import He from "@mui/icons-material/LogoutRounded";
import hr from "@mui/icons-material/MenuRounded";
import pr from "@mui/icons-material/NotificationsOutlined";
import mr from "@mui/icons-material/SearchRounded";
import gr from "@mui/material/AppBar";
import ve from "@mui/material/Avatar";
import Pe from "@mui/material/Badge";
import F from "@mui/material/Box";
import G from "@mui/material/Divider";
import j from "@mui/material/IconButton";
import xr from "@mui/material/InputAdornment";
import wr from "@mui/material/Menu";
import ye from "@mui/material/MenuItem";
import _ from "@mui/material/Stack";
import { styled as Er, useTheme as je } from "@mui/material/styles";
import Sr from "@mui/material/TextField";
import Rr from "@mui/material/Toolbar";
import W from "@mui/material/Typography";
import vr from "@mui/material/useMediaQuery";
import yr from "@mui/material/Card";
import br from "@mui/material/CardContent";
import $e from "@mui/material/Button";
import Or from "@mui/icons-material/AutoAwesomeRounded";
import Ir from "@mui/icons-material/ExpandLess";
import Tr from "@mui/icons-material/ExpandMore";
import Nr from "@mui/material/Collapse";
import le from "@mui/material/ListItemButton";
import de from "@mui/material/ListItemIcon";
import V from "@mui/material/ListItemText";
import _r from "@mui/material/MenuList";
import Dr from "@mui/material/Paper";
import Ar from "@mui/material/Popper";
import Oe from "@mui/material/Tooltip";
import Cr from "@mui/icons-material/NotificationsRounded";
import Mr from "@mui/material/Drawer";
class w extends Error {
  constructor(o, t, a = null) {
    super(o), this.name = "AuthError", this.code = t, this.originalError = a, this.timestamp = (/* @__PURE__ */ new Date()).toISOString();
  }
}
const y = {
  STORAGE_ACCESS_DENIED: "STORAGE_ACCESS_DENIED",
  TOKEN_NOT_FOUND: "TOKEN_NOT_FOUND",
  TOKEN_INVALID: "TOKEN_INVALID",
  TOKEN_EXPIRED: "TOKEN_EXPIRED",
  LOGOUT_FAILED: "LOGOUT_FAILED",
  UNKNOWN_ERROR: "UNKNOWN_ERROR"
}, D = {
  ACCESS_TOKEN: "lumoraAccessToken",
  REFRESH_TOKEN: "lumoraRefreshToken",
  USER: "lumoraUser"
}, z = {
  ACCESS_TOKEN: "accessToken",
  REFRESH_TOKEN: "refreshToken",
  USER: "user"
}, Fr = () => {
  if (!(typeof window > "u" || !window.localStorage))
    try {
      const e = localStorage.getItem(z.ACCESS_TOKEN), o = localStorage.getItem(z.REFRESH_TOKEN), t = localStorage.getItem(z.USER);
      e && !localStorage.getItem(D.ACCESS_TOKEN) && localStorage.setItem(D.ACCESS_TOKEN, e), o && !localStorage.getItem(D.REFRESH_TOKEN) && localStorage.setItem(D.REFRESH_TOKEN, o), t && !localStorage.getItem(D.USER) && localStorage.setItem(D.USER, t), (e || o || t) && (localStorage.removeItem(z.ACCESS_TOKEN), localStorage.removeItem(z.REFRESH_TOKEN), localStorage.removeItem(z.USER));
    } catch (e) {
      console.warn("Failed to migrate legacy localStorage keys:", e);
    }
}, Se = (e) => {
  try {
    if (typeof window > "u")
      return console.warn("localStorage access attempted on server side"), null;
    if (!window.localStorage)
      throw new w("localStorage is not available", y.STORAGE_ACCESS_DENIED);
    return window.localStorage.getItem(e);
  } catch (o) {
    throw o.name === "QuotaExceededError" ? (console.error("Storage quota exceeded"), new w(
      "Storage quota exceeded. Please clear browser data.",
      y.STORAGE_ACCESS_DENIED,
      o
    )) : o.name === "SecurityError" ? (console.error("localStorage access denied (private browsing or security settings)"), new w(
      "Access to localStorage is denied. Please check browser settings.",
      y.STORAGE_ACCESS_DENIED,
      o
    )) : (console.error("Unexpected error accessing localStorage:", o.name), new w("Failed to access storage", y.STORAGE_ACCESS_DENIED, o));
  }
}, Re = (e, o) => {
  try {
    if (typeof window > "u")
      return console.warn("localStorage write attempted on server side"), !1;
    if (!window.localStorage)
      throw new w("localStorage is not available", y.STORAGE_ACCESS_DENIED);
    return window.localStorage.setItem(e, o), !0;
  } catch (t) {
    throw t.name === "QuotaExceededError" ? (console.error("Storage quota exceeded"), new w(
      "Storage quota exceeded. Please clear browser data.",
      y.STORAGE_ACCESS_DENIED,
      t
    )) : t.name === "SecurityError" ? (console.error("localStorage write denied (private browsing or security settings)"), new w(
      "Access to localStorage is denied. Please check browser settings.",
      y.STORAGE_ACCESS_DENIED,
      t
    )) : (console.error("Unexpected error writing to localStorage:", t.name), new w("Failed to write to storage", y.STORAGE_ACCESS_DENIED, t));
  }
}, Je = (e) => {
  try {
    return typeof window > "u" ? (console.warn("localStorage removal attempted on server side"), !1) : window.localStorage ? (window.localStorage.removeItem(e), !0) : (console.warn("localStorage is not available"), !1);
  } catch (o) {
    return o.name !== "SecurityError" && console.warn(`Could not remove localStorage key "${e}"`), !1;
  }
}, Z = () => {
  try {
    Fr();
    const e = Se(D.ACCESS_TOKEN), o = Se(D.REFRESH_TOKEN), t = Se(D.USER);
    let a = null;
    if (t)
      try {
        a = JSON.parse(t);
      } catch {
        t && t !== "null" && t !== "undefined" && console.warn("Invalid user data in localStorage, clearing:", t.substring(0, 50)), Je(D.USER);
      }
    return {
      accessToken: e,
      refreshToken: o,
      user: a
    };
  } catch (e) {
    throw e instanceof w ? e : new w("Failed to retrieve authentication tokens", y.UNKNOWN_ERROR, e);
  }
}, Kr = () => {
  try {
    const { accessToken: e, refreshToken: o } = Z();
    return !(e || o) ? {
      isAuthenticated: !1,
      error: new w("No authentication tokens found", y.TOKEN_NOT_FOUND)
    } : {
      isAuthenticated: !0,
      error: null
    };
  } catch (e) {
    return console.error("Authentication check failed:", e), {
      isAuthenticated: !1,
      error: e instanceof w ? e : new w("Authentication check failed", y.UNKNOWN_ERROR, e)
    };
  }
}, Le = (e, o, t = null) => {
  try {
    if (!e && !o)
      throw new w("At least one token must be provided", y.TOKEN_INVALID);
    return e && Re(D.ACCESS_TOKEN, e), o && Re(D.REFRESH_TOKEN, o), t && Re(D.USER, JSON.stringify(t)), {
      success: !0,
      error: null
    };
  } catch (a) {
    return console.error("Failed to store authentication tokens:", a), {
      success: !1,
      error: a instanceof w ? a : new w("Failed to store tokens", y.UNKNOWN_ERROR, a)
    };
  }
}, k = () => {
  try {
    return [
      D.ACCESS_TOKEN,
      D.REFRESH_TOKEN,
      D.USER,
      // Also clear legacy keys for complete cleanup
      z.ACCESS_TOKEN,
      z.REFRESH_TOKEN,
      z.USER
    ].map((a) => Je(a)).every((a) => a) || console.warn("Some tokens could not be removed from localStorage"), {
      success: !0,
      error: null
    };
  } catch (e) {
    return console.error("Failed to clear authentication tokens:", e), {
      success: !1,
      error: e instanceof w ? e : new w("Failed to clear tokens", y.LOGOUT_FAILED, e)
    };
  }
}, Ur = () => {
  try {
    const { user: e } = Z();
    return {
      user: e,
      error: null
    };
  } catch (e) {
    return console.error("Failed to get current user:", e), {
      user: null,
      error: e instanceof w ? e : new w("Failed to retrieve user data", y.UNKNOWN_ERROR, e)
    };
  }
}, Kt = (e) => {
  if (!(e instanceof w))
    return "An unexpected error occurred. Please try again.";
  switch (e.code) {
    case y.STORAGE_ACCESS_DENIED:
      return "Unable to access browser storage. Please check your browser settings and disable private browsing if enabled.";
    case y.TOKEN_NOT_FOUND:
      return "You are not logged in. Please sign in to continue.";
    case y.TOKEN_INVALID:
      return "Your session is invalid. Please sign in again.";
    case y.TOKEN_EXPIRED:
      return "Your session has expired. Please sign in again.";
    case y.LOGOUT_FAILED:
      return "Failed to log out properly. Please clear your browser cache and try again.";
    case y.UNKNOWN_ERROR:
    default:
      return "An unexpected error occurred. Please try again or contact support if the problem persists.";
  }
}, be = (e, o = "Unknown") => {
  const t = {
    context: o,
    message: e.message,
    code: e instanceof w ? e.code : "UNKNOWN",
    timestamp: e instanceof w ? e.timestamp : (/* @__PURE__ */ new Date()).toISOString(),
    stack: e.stack
  };
  e instanceof w && e.originalError && (t.originalError = {
    name: e.originalError.name,
    message: e.originalError.message
  }), console.warn("[Auth Error]", t);
}, Wr = (e) => {
  if (!e)
    throw new Error("API base URL is required to create axios client");
  const o = Be.create({
    baseURL: e,
    headers: {
      "Content-Type": "application/json"
    }
  });
  let t = !1, a = null, i = [];
  const c = (s, n) => {
    i.forEach(({ resolve: b, reject: E }) => {
      s ? E(s) : n && b(n);
    }), i = [];
  };
  return o.interceptors.request.use(
    (s) => {
      const { accessToken: n } = Z();
      return n && s.headers && (s.headers.Authorization = `Bearer ${n}`), s;
    },
    (s) => Promise.reject(s)
  ), o.interceptors.response.use(
    (s) => s,
    async (s) => {
      var x;
      const n = s.config, b = (x = s.response) == null ? void 0 : x.status, E = (n == null ? void 0 : n.url) || "", h = E.includes("/auth/refresh");
      if (b !== 401 || n._retry || h)
        return Promise.reject(s);
      n._retry = !0;
      const { refreshToken: I } = Z();
      if (!I) {
        const m = new Error(
          "No refresh token available for token refresh"
        );
        return be(m, "AxiosClient - Token Refresh"), k(), typeof window < "u" && (window.location.href = "/login"), Promise.reject(s);
      }
      if (t && a)
        return new Promise((m, v) => {
          i.push({ resolve: m, reject: v });
        }).then((m) => {
          const {
            accessToken: v,
            refreshToken: g
          } = m;
          if (n.headers && (n.headers.Authorization = `Bearer ${v}`), E.includes("/auth/logout"))
            try {
              if (typeof n.data == "string") {
                const N = JSON.parse(
                  n.data || "{}"
                );
                N.refresh_token = g, n.data = JSON.stringify(N);
              } else
                n.data && typeof n.data == "object" ? n.data.refresh_token = g : n.data = JSON.stringify({
                  refresh_token: g
                });
            } catch {
              n.data = JSON.stringify({
                refresh_token: g
              });
            }
          return o(n);
        }).catch((m) => Promise.reject(m));
      t = !0, a = Be.post(
        `${e}/auth/refresh`,
        {
          refresh_token: I
        }
      );
      try {
        const m = await a, { accessToken: v, refreshToken: g } = m.data;
        if (Le(v, g, null), c(null, {
          accessToken: v,
          refreshToken: g
        }), n.headers && (n.headers.Authorization = `Bearer ${v}`), E.includes("/auth/logout"))
          try {
            if (typeof n.data == "string") {
              const N = JSON.parse(
                n.data || "{}"
              );
              N.refresh_token = g, n.data = JSON.stringify(N);
            } else
              n.data && typeof n.data == "object" ? n.data.refresh_token = g : n.data = JSON.stringify({
                refresh_token: g
              });
          } catch {
            n.data = JSON.stringify({
              refresh_token: g
            });
          }
        return o(n);
      } catch (m) {
        return be(
          m,
          "AxiosClient - Token Refresh Failed"
        ), c(m), k(), typeof window < "u" && (window.location.href = "/login"), Promise.reject(m);
      } finally {
        t = !1, a = null;
      }
    }
  ), o;
}, Br = async (e, o) => {
  const { accessToken: t, refreshToken: a } = Z();
  if (t)
    return !0;
  if (a)
    try {
      const i = await e.post("/auth/refresh", {
        refresh_token: a
      });
      if (i.data.success && i.data.accessToken)
        return Le(i.data.accessToken, i.data.refreshToken || null, null), !0;
    } catch (i) {
      be(i, "TokenValidator - Refresh Failed");
    }
  return k(), o ? o() : window.location.href = "/login", !1;
}, zr = Er(Rr)({
  width: "100%",
  padding: "8px 16px",
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
  gap: "16px",
  flexShrink: 0
}), Gr = ({
  appName: e = "Dashboard",
  pageName: o = "Home",
  onMenuClick: t,
  showMenuButton: a = !0,
  headerStyles: i,
  userName: c = "User Name",
  userEmail: s,
  userAvatar: n,
  onProfileClick: b,
  onAccountClick: E,
  onSettingsClick: h,
  showSettings: I = !0,
  onLogout: x,
  showNotifications: m = !1,
  notificationCount: v = 0,
  onNotificationBellClick: g,
  showSearchbar: N = !0,
  searchValue: C,
  onSearchChange: M,
  onSearchSubmit: d,
  showProfile: l = !0,
  userRole: S,
  accentColor: K = "#01584f",
  contentBackgroundColor: B = "#f2f9fc",
  navbarBackground: U = "#ff0000",
  navbarAccentColor: A = "#000000",
  rightExtraContent: H = [],
  customNavbar: f,
  customNavbarProps: T
}) => {
  const O = vr((p) => p.breakpoints.up("md")), [ee, re] = R.useState(null), ue = !!ee, fe = (p) => {
    M == null || M(p.target.value);
  }, $ = (p) => {
    p.key === "Enter" && d && C && d(C);
  }, J = (p) => p ? p.charAt(0).toUpperCase() + p.slice(1).toLowerCase() : "User", he = (p) => {
    re(p.currentTarget);
  }, te = () => {
    re(null);
  }, L = (p) => {
    p == null || p(), te();
  };
  return /* @__PURE__ */ r(
    gr,
    {
      position: "fixed",
      sx: {
        boxShadow: 0,
        background: U,
        top: "var(--template-frame-height, 0px)",
        left: 0,
        width: "100%",
        zIndex: 1,
        height: "60px",
        ...i
      },
      children: /* @__PURE__ */ u(zr, { variant: "dense", sx: { height: "100%" }, children: [
        /* @__PURE__ */ u(
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
              a && !O && /* @__PURE__ */ r(
                j,
                {
                  "aria-label": "menu",
                  onClick: t,
                  sx: {
                    color: A,
                    "&:hover": {
                      backgroundColor: "action.hover"
                    }
                  },
                  children: /* @__PURE__ */ r(hr, {})
                }
              ),
              /* @__PURE__ */ u(
                _,
                {
                  direction: "row",
                  sx: {
                    alignItems: "center",
                    gap: 1,
                    flexShrink: 0
                  },
                  children: [
                    /* @__PURE__ */ r(
                      W,
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
                    /* @__PURE__ */ r(
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
              f ? /* @__PURE__ */ r(f, { ...T || {} }) : N && O && /* @__PURE__ */ r(
                Sr,
                {
                  placeholder: "Search for deals or documents...",
                  value: C || "",
                  onChange: fe,
                  onKeyDown: $,
                  size: "small",
                  sx: {
                    width: "400px",
                    "& .MuiOutlinedInput-root": {
                      backgroundColor: B,
                      borderRadius: "8px",
                      "& fieldset": {
                        borderColor: "transparent"
                      },
                      "&:hover fieldset": {
                        borderColor: "transparent"
                      },
                      "&.Mui-focused fieldset": {
                        borderColor: K
                      }
                    }
                  },
                  InputProps: {
                    startAdornment: /* @__PURE__ */ r(xr, { position: "start", children: /* @__PURE__ */ r(
                      mr,
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
        /* @__PURE__ */ u(
          _,
          {
            direction: "row",
            sx: {
              alignItems: "center",
              gap: 1.5,
              flexShrink: 0
            },
            children: [
              m && /* @__PURE__ */ r(
                Pe,
                {
                  color: "error",
                  badgeContent: v,
                  invisible: v === 0,
                  sx: {
                    "& .MuiBadge-badge": {
                      right: 2,
                      top: 2
                    }
                  },
                  children: /* @__PURE__ */ r(
                    j,
                    {
                      size: "small",
                      onClick: g,
                      "aria-label": v ? `Notifications, ${v} unread` : "Notifications",
                      sx: { color: A },
                      children: /* @__PURE__ */ r(pr, {})
                    }
                  )
                }
              ),
              m && l && /* @__PURE__ */ r(
                G,
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
              l && /* @__PURE__ */ u(ce, { children: [
                /* @__PURE__ */ u(
                  _,
                  {
                    direction: "row",
                    onClick: he,
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
                      n ? /* @__PURE__ */ r(
                        ve,
                        {
                          src: n,
                          sx: { width: 32, height: 32 }
                        }
                      ) : /* @__PURE__ */ r(
                        ze,
                        {
                          sx: {
                            width: 32,
                            height: 32,
                            color: A
                          }
                        }
                      ),
                      /* @__PURE__ */ u(
                        F,
                        {
                          sx: {
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "flex-start",
                            minWidth: 0
                          },
                          children: [
                            /* @__PURE__ */ r(
                              W,
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
                                children: c
                              }
                            ),
                            /* @__PURE__ */ r(
                              W,
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
                                children: J(S)
                              }
                            )
                          ]
                        }
                      )
                    ]
                  }
                ),
                /* @__PURE__ */ u(
                  wr,
                  {
                    anchorEl: ee,
                    open: ue,
                    onClose: te,
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
                      I && [
                        /* @__PURE__ */ r(
                          ye,
                          {
                            onClick: () => L(h),
                            children: "Settings"
                          },
                          "settings"
                        ),
                        /* @__PURE__ */ r(G, {}, "settings-divider")
                      ],
                      /* @__PURE__ */ u(
                        ye,
                        {
                          onClick: () => L(x),
                          sx: {
                            color: "error.main",
                            "&:hover": {
                              color: "error.dark"
                            }
                          },
                          children: [
                            /* @__PURE__ */ r(W, { sx: { flexGrow: 1 }, children: "Logout" }),
                            /* @__PURE__ */ r(He, { fontSize: "small" })
                          ]
                        }
                      )
                    ]
                  }
                )
              ] }),
              H.length !== 0 && H.map((p) => p.type === "divider" ? /* @__PURE__ */ r(
                G,
                {
                  orientation: "vertical",
                  flexItem: !0,
                  sx: {
                    borderColor: "rgba(0, 0, 0, 0.12)",
                    height: "24px",
                    alignSelf: "center"
                  }
                },
                p.key
              ) : p.type === "profile" ? /* @__PURE__ */ u(
                _,
                {
                  direction: "row",
                  onClick: p.onClick,
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
                    p.avatar ? /* @__PURE__ */ r(
                      ve,
                      {
                        src: p.avatar,
                        sx: { width: 32, height: 32 }
                      }
                    ) : /* @__PURE__ */ r(
                      ze,
                      {
                        sx: {
                          width: 32,
                          height: 32,
                          color: A
                        }
                      }
                    ),
                    /* @__PURE__ */ u(
                      F,
                      {
                        sx: {
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "flex-start",
                          minWidth: 0
                        },
                        children: [
                          /* @__PURE__ */ r(
                            W,
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
                              children: p.name
                            }
                          ),
                          /* @__PURE__ */ r(
                            W,
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
                              children: p.role
                            }
                          )
                        ]
                      }
                    )
                  ]
                },
                p.key
              ) : null)
            ]
          }
        )
      ] })
    }
  );
}, qe = ({
  title: e = "",
  message: o = "",
  buttonText: t = "",
  onButtonClick: a,
  show: i = !0
}) => i ? /* @__PURE__ */ r(yr, { variant: "outlined", sx: { m: 1.5, flexShrink: 0 }, children: /* @__PURE__ */ u(br, { children: [
  /* @__PURE__ */ r(Or, { fontSize: "small" }),
  /* @__PURE__ */ r(W, { gutterBottom: !0, sx: { fontWeight: 600 }, children: e }),
  /* @__PURE__ */ r(
    W,
    {
      variant: "body2",
      sx: { mb: 2, color: "text.secondary" },
      children: o
    }
  ),
  /* @__PURE__ */ r(
    $e,
    {
      variant: "contained",
      size: "small",
      fullWidth: !0,
      onClick: a,
      children: t
    }
  )
] }) }) : null, Hr = 180, Ge = 250, Qe = (e, o) => {
  var t;
  return o ? e.path && o === e.path ? !0 : ((t = e.subitems) == null ? void 0 : t.some((a) => a.path === o)) ?? !1 : !1;
}, Xe = (e, o) => !!(o && e.path === o), Ye = ({
  text: e,
  testId: o
}) => {
  const t = R.useRef(null), [a, i] = R.useState(!1), c = R.useCallback(() => {
    const s = t.current;
    s && i(s.scrollWidth > s.clientWidth + 0.5);
  }, []);
  return R.useLayoutEffect(() => {
    c();
  }, [c, e]), R.useEffect(() => {
    const s = t.current;
    if (!s)
      return;
    const n = new ResizeObserver(() => c());
    return n.observe(s), () => n.disconnect();
  }, [c]), /* @__PURE__ */ r(
    Oe,
    {
      title: e,
      placement: "right",
      arrow: !0,
      enterDelay: 400,
      disableHoverListener: !a,
      disableFocusListener: !a,
      disableTouchListener: !a,
      children: /* @__PURE__ */ r(
        W,
        {
          ref: t,
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
}, Pr = ({
  link: e,
  activePath: o,
  onLinkClick: t,
  accentColor: a,
  isSecondary: i,
  surfaceBackgroundColor: c,
  railShowTitles: s = !1
}) => {
  const n = je(), [b, E] = R.useState(null), [h, I] = R.useState(!1), x = R.useRef(
    null
  ), m = R.useRef(null), v = R.useRef(null), g = R.useRef(!1), N = R.useRef(!1), C = R.useId(), M = () => {
    x.current && (clearTimeout(x.current), x.current = null);
  }, d = () => {
    M(), x.current = setTimeout(() => {
      I(!1), x.current = null;
    }, Hr);
  }, l = () => {
    M(), I(!0);
  };
  R.useEffect(() => {
    if (!h)
      return;
    const f = (T) => {
      var O;
      T.key === "Escape" && (I(!1), (O = v.current) == null || O.focus());
    };
    return document.addEventListener("keydown", f), () => document.removeEventListener("keydown", f);
  }, [h]), R.useEffect(() => {
    if (!h || !N.current)
      return;
    const f = globalThis.requestAnimationFrame(() => {
      var O;
      const T = (O = m.current) == null ? void 0 : O.querySelector(
        '[role="menuitem"]'
      );
      T == null || T.focus(), N.current = !1;
    });
    return () => cancelAnimationFrame(f);
  }, [h]);
  const S = Qe(e, o), K = i ? 48 : 44, B = i ? "text.secondary" : a, U = i ? "#01584F" : a, A = {
    width: "100%",
    maxWidth: "100%",
    minWidth: K,
    height: "auto",
    minHeight: K,
    flexDirection: "column",
    py: 0.5,
    px: 0.25,
    borderRadius: "4px",
    color: S ? "#ffffff" : B,
    backgroundColor: S ? U : "transparent",
    "&:hover": {
      backgroundColor: S ? U : "action.hover",
      borderRadius: "4px",
      color: S ? "#ffffff" : B
    }
  }, H = s ? /* @__PURE__ */ r(
    j,
    {
      ref: v,
      component: e.path ? "a" : "button",
      href: e.path || void 0,
      "aria-label": e.text,
      onFocus: () => {
        g.current || l();
      },
      onBlur: (f) => {
        var O;
        const T = f.relatedTarget;
        T && ((O = m.current) != null && O.contains(T)) || d();
      },
      onKeyDown: (f) => {
        f.key === "ArrowDown" && (f.preventDefault(), N.current = !0, l());
      },
      onClick: (f) => {
        f.preventDefault(), f.stopPropagation(), e.path && (t == null || t(e.path));
      },
      "aria-haspopup": "menu",
      "aria-expanded": h,
      "aria-controls": h ? C : void 0,
      "data-testid": `rail-submenu-trigger-${e.text}`,
      sx: A,
      children: /* @__PURE__ */ u(_, { alignItems: "center", spacing: 1, sx: { width: "100%" }, children: [
        /* @__PURE__ */ r(
          F,
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
        /* @__PURE__ */ r(
          Ye,
          {
            text: e.text,
            testId: `rail-item-caption-${e.text}`
          }
        )
      ] })
    }
  ) : /* @__PURE__ */ r(
    j,
    {
      ref: v,
      component: e.path ? "a" : "button",
      href: e.path || void 0,
      "aria-label": e.text,
      onFocus: () => {
        g.current || l();
      },
      onBlur: (f) => {
        var O;
        const T = f.relatedTarget;
        T && ((O = m.current) != null && O.contains(T)) || d();
      },
      onKeyDown: (f) => {
        f.key === "ArrowDown" && (f.preventDefault(), N.current = !0, l());
      },
      onClick: (f) => {
        f.preventDefault(), f.stopPropagation(), e.path && (t == null || t(e.path));
      },
      "aria-haspopup": "menu",
      "aria-expanded": h,
      "aria-controls": h ? C : void 0,
      "data-testid": `rail-submenu-trigger-${e.text}`,
      sx: {
        width: K,
        height: K,
        color: S ? "#ffffff" : B,
        backgroundColor: S ? U : "transparent",
        borderRadius: S ? "4px" : "50%",
        "&:hover": {
          backgroundColor: S ? U : "action.hover",
          borderRadius: "4px"
        }
      },
      children: e.icon
    }
  );
  return /* @__PURE__ */ u(
    F,
    {
      sx: {
        width: "100%",
        display: "flex",
        justifyContent: "center"
      },
      children: [
        /* @__PURE__ */ r(
          F,
          {
            ref: E,
            "data-testid": `rail-submenu-anchor-${e.text}`,
            sx: { display: "inline-flex", maxWidth: "100%" },
            onMouseEnter: () => {
              g.current = !0, l();
            },
            onMouseLeave: () => {
              g.current = !1, d();
            },
            children: s ? H : /* @__PURE__ */ r(Oe, { title: e.text, placement: "right", arrow: !0, children: H })
          }
        ),
        /* @__PURE__ */ r(
          Ar,
          {
            open: h && !!b,
            anchorEl: b,
            placement: "right-start",
            modifiers: [{ name: "offset", options: { offset: [8, 0] } }],
            sx: { zIndex: (f) => f.zIndex.modal },
            children: /* @__PURE__ */ r(
              Dr,
              {
                ref: m,
                elevation: 0,
                onMouseEnter: () => {
                  M();
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
                  maxWidth: Ge,
                  minWidth: 0,
                  py: 0.5,
                  boxSizing: "border-box"
                },
                children: /* @__PURE__ */ r(
                  _r,
                  {
                    id: C,
                    dense: !0,
                    autoFocus: !1,
                    role: "menu",
                    sx: {
                      bgcolor: "transparent",
                      py: 0,
                      maxWidth: Ge
                    },
                    children: e.subitems.map((f) => /* @__PURE__ */ u(
                      ye,
                      {
                        role: "menuitem",
                        title: f.text,
                        selected: Xe(f, o),
                        onClick: (T) => {
                          T.preventDefault(), t == null || t(f.path), I(!1);
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
                            bgcolor: U,
                            color: "#ffffff",
                            "&:hover": {
                              bgcolor: U
                            }
                          },
                          "&.Mui-focusVisible": {
                            bgcolor: "action.focus"
                          }
                        },
                        children: [
                          f.icon ? /* @__PURE__ */ r(de, { children: f.icon }) : null,
                          /* @__PURE__ */ r(
                            V,
                            {
                              primary: f.text,
                              primaryTypographyProps: {
                                noWrap: !0
                              }
                            }
                          )
                        ]
                      },
                      f.path
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
}, jr = ({
  link: e,
  activePath: o,
  onLinkClick: t,
  accentColor: a,
  isSecondary: i,
  railShowTitles: c = !1
}) => {
  const s = !!(e.path && o === e.path), n = i ? 48 : 44, b = i ? "text.secondary" : a, E = i ? "#01584F" : a, h = {
    width: "100%",
    maxWidth: "100%",
    minWidth: n,
    height: "auto",
    minHeight: n,
    flexDirection: "column",
    py: 0.5,
    px: 0.25,
    borderRadius: "4px",
    color: s ? "#ffffff" : b,
    backgroundColor: s ? E : "transparent",
    "&:hover": {
      backgroundColor: s ? E : "action.hover",
      borderRadius: "4px",
      color: s ? "#ffffff" : b
    }
  }, I = c ? /* @__PURE__ */ r(
    j,
    {
      component: e.path ? "a" : "button",
      href: e.path || void 0,
      "aria-label": e.text,
      onClick: (x) => {
        x.preventDefault(), x.stopPropagation(), e.path && (t == null || t(e.path));
      },
      disabled: !e.path,
      sx: h,
      children: /* @__PURE__ */ u(_, { alignItems: "center", spacing: 1, sx: { width: "100%" }, children: [
        /* @__PURE__ */ r(
          F,
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
        /* @__PURE__ */ r(
          Ye,
          {
            text: e.text,
            testId: `rail-item-caption-${e.text}`
          }
        )
      ] })
    }
  ) : /* @__PURE__ */ r(
    j,
    {
      component: e.path ? "a" : "button",
      href: e.path || void 0,
      "aria-label": e.text,
      onClick: (x) => {
        x.preventDefault(), x.stopPropagation(), e.path && (t == null || t(e.path));
      },
      disabled: !e.path,
      sx: {
        width: n,
        height: n,
        color: s ? "#ffffff" : b,
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
  return c ? I : /* @__PURE__ */ r(Oe, { title: e.text, placement: "right", arrow: !0, children: I });
}, $r = ({
  link: e,
  expanded: o,
  onToggle: t,
  activePath: a,
  onLinkClick: i,
  accentColor: c,
  isSecondary: s
}) => {
  const n = Qe(e, a), b = s ? "text.secondary" : c, E = s ? "#01584F" : c;
  return /* @__PURE__ */ u(ce, { children: [
    /* @__PURE__ */ u(
      le,
      {
        onClick: t,
        sx: {
          py: 1.5,
          px: 2,
          color: n ? "#ffffff" : b,
          bgcolor: n ? E : "transparent",
          "&:hover": {
            bgcolor: n ? E : "action.hover"
          }
        },
        "data-testid": `drawer-expand-trigger-${e.text}`,
        children: [
          /* @__PURE__ */ r(de, { sx: { color: "inherit", minWidth: 40 }, children: e.icon }),
          /* @__PURE__ */ r(V, { primary: e.text }),
          o ? /* @__PURE__ */ r(Ir, {}) : /* @__PURE__ */ r(Tr, {})
        ]
      }
    ),
    /* @__PURE__ */ r(Nr, { in: o, timeout: "auto", unmountOnExit: !0, children: /* @__PURE__ */ u(F, { component: "nav", "aria-label": e.text, children: [
      e.path ? /* @__PURE__ */ r(
        le,
        {
          sx: { pl: 4, py: 1 },
          onClick: () => e.path && (i == null ? void 0 : i(e.path)),
          selected: !!(a && a === e.path),
          "data-testid": `drawer-parent-path-${e.text}`,
          children: /* @__PURE__ */ r(V, { primary: e.text })
        }
      ) : null,
      e.subitems.map((h) => /* @__PURE__ */ u(
        le,
        {
          sx: { pl: 4, py: 1 },
          onClick: () => i == null ? void 0 : i(h.path),
          selected: Xe(h, a),
          children: [
            h.icon ? /* @__PURE__ */ r(de, { sx: { minWidth: 36 }, children: h.icon }) : null,
            /* @__PURE__ */ r(V, { primary: h.text })
          ]
        },
        h.path
      ))
    ] }) })
  ] });
}, Jr = ({
  link: e,
  activePath: o,
  onLinkClick: t,
  accentColor: a,
  isSecondary: i
}) => {
  const c = !!(e.path && o === e.path), s = i ? "text.secondary" : a, n = i ? "#01584F" : a;
  return /* @__PURE__ */ u(
    le,
    {
      disabled: !e.path,
      onClick: () => e.path && (t == null ? void 0 : t(e.path)),
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
        /* @__PURE__ */ r(de, { sx: { color: "inherit", minWidth: 40 }, children: e.icon }),
        /* @__PURE__ */ r(V, { primary: e.text })
      ]
    }
  );
}, ie = () => /* @__PURE__ */ r(
  F,
  {
    sx: {
      width: "100%",
      display: "flex",
      justifyContent: "center"
    },
    children: /* @__PURE__ */ r(G, { sx: { width: "60%", borderColor: "divider" } })
  }
), Ve = ({
  variant: e,
  mainLinks: o,
  secondaryLinks: t = [],
  activePath: a,
  onLinkClick: i,
  accentColor: c = "#01584f",
  surfaceBackgroundColor: s,
  railShowTitles: n = !1
}) => {
  const b = je(), E = s ?? b.palette.background.paper, h = (d) => {
    i && i(d);
  }, [I, x] = R.useState({}), [m, v] = R.useState({}), g = (d) => {
    x((l) => ({
      ...l,
      [d]: !l[d]
    }));
  }, N = (d) => {
    v((l) => ({
      ...l,
      [d]: !l[d]
    }));
  }, C = (d, l) => {
    var S;
    return (S = d.subitems) != null && S.length ? /* @__PURE__ */ r(
      Pr,
      {
        link: d,
        activePath: a,
        onLinkClick: h,
        accentColor: c,
        isSecondary: l,
        surfaceBackgroundColor: E,
        railShowTitles: n
      }
    ) : /* @__PURE__ */ r(
      jr,
      {
        link: d,
        activePath: a,
        onLinkClick: h,
        accentColor: c,
        isSecondary: l,
        railShowTitles: n
      }
    );
  }, M = (d, l, S) => {
    var K;
    if ((K = d.subitems) != null && K.length) {
      const B = S ? !!m[l] : !!I[l];
      return /* @__PURE__ */ r(
        $r,
        {
          link: d,
          expanded: B,
          onToggle: () => S ? N(l) : g(l),
          activePath: a,
          onLinkClick: h,
          accentColor: c,
          isSecondary: S
        }
      );
    }
    return /* @__PURE__ */ r(
      Jr,
      {
        link: d,
        activePath: a,
        onLinkClick: h,
        accentColor: c,
        isSecondary: S
      }
    );
  };
  return e === "drawer" ? /* @__PURE__ */ u(
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
        /* @__PURE__ */ r(_, { sx: { width: "100%" }, children: o.map((d, l) => /* @__PURE__ */ u(R.Fragment, { children: [
          M(d, l, !1),
          l < o.length - 1 ? /* @__PURE__ */ r(ie, {}) : null
        ] }, l)) }),
        t.length > 0 ? /* @__PURE__ */ u(ce, { children: [
          /* @__PURE__ */ r(
            F,
            {
              sx: {
                width: "100%",
                my: 2,
                display: "flex",
                justifyContent: "center"
              },
              children: /* @__PURE__ */ r(
                G,
                {
                  sx: { width: "60%", borderColor: "divider" }
                }
              )
            }
          ),
          /* @__PURE__ */ r(F, { sx: { mt: "auto", pb: 2 }, children: /* @__PURE__ */ r(_, { sx: { width: "100%" }, children: t.map((d, l) => /* @__PURE__ */ u(R.Fragment, { children: [
            M(d, l, !0),
            l < t.length - 1 ? /* @__PURE__ */ r(ie, {}) : null
          ] }, l)) }) })
        ] }) : null
      ]
    }
  ) : /* @__PURE__ */ u(
    _,
    {
      sx: {
        flexGrow: 1,
        justifyContent: "flex-start",
        alignItems: "center",
        pt: 2,
        gap: n ? 1.25 : 1
      },
      children: [
        o.map((d, l) => /* @__PURE__ */ u(R.Fragment, { children: [
          C(d, !1),
          l < o.length - 1 ? /* @__PURE__ */ r(ie, {}) : null
        ] }, l)),
        t.length > 0 ? /* @__PURE__ */ u(ce, { children: [
          /* @__PURE__ */ r(
            F,
            {
              sx: {
                width: "100%",
                my: 2,
                display: "flex",
                justifyContent: "center"
              },
              children: /* @__PURE__ */ r(
                G,
                {
                  sx: { width: "60%", borderColor: "divider" }
                }
              )
            }
          ),
          /* @__PURE__ */ r(F, { sx: { mt: "auto", pb: 2 }, children: /* @__PURE__ */ r(
            _,
            {
              gap: n ? 1.25 : 1,
              alignItems: "center",
              children: t.map((d, l) => /* @__PURE__ */ u(R.Fragment, { children: [
                C(d, !0),
                l < t.length - 1 ? /* @__PURE__ */ r(ie, {}) : null
              ] }, l))
            }
          ) })
        ] }) : null
      ]
    }
  );
}, Lr = ({
  open: e,
  onClose: o,
  mainLinks: t,
  secondaryLinks: a = [],
  activePath: i,
  onLinkClick: c,
  userName: s = "User Name",
  userAvatar: n,
  onLogout: b,
  showNotifications: E = !1,
  notificationCount: h = 0,
  onNotificationBellClick: I,
  alertProps: x,
  accentColor: m = "#01584f"
}) => /* @__PURE__ */ r(
  Mr,
  {
    anchor: "right",
    open: e,
    onClose: o,
    sx: {
      zIndex: (g) => g.zIndex.drawer + 1,
      "& .MuiDrawer-paper": {
        backgroundImage: "none",
        backgroundColor: "background.paper"
      }
    },
    children: /* @__PURE__ */ u(
      _,
      {
        sx: {
          maxWidth: "70dvw",
          height: "100%"
        },
        children: [
          /* @__PURE__ */ u(_, { direction: "row", sx: { p: 2, pb: 0, gap: 1 }, children: [
            /* @__PURE__ */ u(
              _,
              {
                direction: "row",
                sx: { gap: 1, alignItems: "center", flexGrow: 1, p: 1 },
                children: [
                  /* @__PURE__ */ r(
                    ve,
                    {
                      sizes: "small",
                      alt: s,
                      src: n,
                      sx: { width: 24, height: 24 }
                    }
                  ),
                  /* @__PURE__ */ r(W, { component: "p", variant: "h6", children: s })
                ]
              }
            ),
            E && /* @__PURE__ */ r(
              Pe,
              {
                color: "error",
                badgeContent: h,
                invisible: h === 0,
                sx: { "& .MuiBadge-badge": { right: 2, top: 2 } },
                children: /* @__PURE__ */ r(
                  j,
                  {
                    size: "small",
                    onClick: I,
                    "aria-label": "Notifications",
                    children: /* @__PURE__ */ r(Cr, {})
                  }
                )
              }
            )
          ] }),
          /* @__PURE__ */ r(G, {}),
          /* @__PURE__ */ u(_, { sx: { flexGrow: 1 }, children: [
            /* @__PURE__ */ r(
              Ve,
              {
                variant: "drawer",
                mainLinks: t,
                secondaryLinks: a,
                activePath: i,
                onLinkClick: (g) => {
                  c == null || c(g), o();
                },
                accentColor: m
              }
            ),
            /* @__PURE__ */ r(G, {})
          ] }),
          (x == null ? void 0 : x.show) && /* @__PURE__ */ r(qe, { ...x }),
          /* @__PURE__ */ r(_, { sx: { p: 2 }, children: /* @__PURE__ */ r(
            $e,
            {
              variant: "outlined",
              fullWidth: !0,
              startIcon: /* @__PURE__ */ r(He, {}),
              onClick: b,
              children: "Logout"
            }
          ) })
        ]
      }
    )
  }
), qr = 100, Ut = ({
  children: e,
  sidebarLinks: o = [],
  secondarySidebarLinks: t = [],
  appName: a = "Dashboard",
  pageName: i = "Home",
  showHeader: c = !0,
  showSidebar: s = !0,
  showSidebarRailTitles: n = !1,
  enableRefreshToken: b = !1,
  activePath: E,
  onLinkClick: h,
  userName: I,
  userEmail: x,
  userAvatar: m,
  onLogout: v,
  onProfileClick: g,
  onAccountClick: N,
  onSettingsClick: C,
  showSettings: M = !0,
  showNotifications: d = !0,
  notificationCount: l = 0,
  NotificationSidebarContent: S,
  showSearchbar: K = !0,
  searchValue: B,
  onSearchChange: U,
  onSearchSubmit: A,
  showProfile: H = !0,
  userRole: f,
  onVerify: T,
  alertProps: O,
  style: ee,
  headerStyles: re,
  sidebarStyles: ue,
  contentStyles: fe,
  accentColor: $ = "#01584f",
  contentBackgroundColor: J = "#f2f9fc",
  navbarBackground: he = "#ffffff",
  navbarAccentColor: te = "#000000",
  GlobalChatSidebar: L,
  useChatSidebar: p,
  rightExtraContent: Ze,
  customNavbar: Ie,
  customNavbarProps: ke,
  redirectToLogin: oe,
  apiBaseUrl: Te
}) => {
  const er = lr(), P = cr(er.breakpoints.down("md"));
  let ne = 0;
  s && !P && (ne = qr);
  const [Ne, pe] = Y(!1), [rr, ae] = Y(!1), [tr, or] = Y(!0), [nr, ar] = Y(!1), [Qr, se] = Y(null), me = p == null ? void 0 : p(), _e = (me == null ? void 0 : me.isOpen) ?? !1, ge = We(T), De = We(!1), Ae = fr(
    () => Wr(Te),
    [Te]
  );
  Ee(() => {
    ge.current = T;
  }, [T]);
  const sr = () => {
    pe(!Ne);
  }, ir = () => {
    pe(!1);
  }, Ce = (Me) => {
    const q = v(Me);
    q instanceof Promise ? q.then(() => {
      se(null);
    }).catch((Fe) => {
      console.error("Error in logout handler:", Fe), se(null);
    }) : se(null);
  };
  return Ee(() => {
    (() => {
      try {
        const { isAuthenticated: q, error: Fe } = Kr();
        if (!q) {
          console.log("No session found, redirecting to login"), k(), oe();
          return;
        }
        if (!De.current) {
          const { user: Q, error: xe } = Ur();
          if (Q && !xe) {
            const Ke = {
              name: Q.name || "",
              email: Q.email || "",
              profilePicture: Q.profilePicture || "",
              role: Q.role || ""
            };
            se(Ke), De.current = !0, ge.current && ge.current(Ke);
          } else
            xe && console.error("Error getting user data:", xe);
        }
        ar(!0);
      } catch (q) {
        console.error("Error checking session:", q), k(), oe();
      } finally {
        or(!1);
      }
    })();
  }, [oe]), Ee(() => {
    b && Br(Ae, oe);
  }, [b, Ae]), tr ? /* @__PURE__ */ u(
    X,
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
        /* @__PURE__ */ r(
          dr,
          {
            size: 60,
            thickness: 4,
            sx: { color: $ }
          }
        ),
        /* @__PURE__ */ r(X, { sx: { mt: 2, color: "text.secondary" }, children: "Checking session..." })
      ]
    }
  ) : nr ? /* @__PURE__ */ u(
    X,
    {
      sx: {
        display: "flex",
        minHeight: "100vh",
        ...ee
      },
      children: [
        /* @__PURE__ */ r(ur, {}),
        c && /* @__PURE__ */ r(
          Gr,
          {
            appName: a,
            pageName: i,
            onMenuClick: P && s ? sr : void 0,
            showMenuButton: P && s,
            headerStyles: re,
            userName: I,
            userEmail: x,
            userAvatar: m,
            onProfileClick: g,
            onAccountClick: N,
            onSettingsClick: C,
            showSettings: M,
            onLogout: Ce,
            showNotifications: d,
            notificationCount: l,
            onNotificationBellClick: d && S ? () => ae(!0) : void 0,
            showSearchbar: K && !Ie,
            searchValue: B,
            onSearchChange: U,
            onSearchSubmit: A,
            showProfile: H,
            userRole: f,
            accentColor: $,
            contentBackgroundColor: J,
            navbarBackground: he,
            navbarAccentColor: te,
            rightExtraContent: Ze,
            customNavbar: Ie,
            customNavbarProps: ke
          }
        ),
        s && !P && /* @__PURE__ */ r(
          Ue,
          {
            variant: "permanent",
            sx: {
              width: ne,
              flexShrink: 0,
              zIndex: 2,
              // Higher z-index than app bar
              "& .MuiDrawer-paper": {
                width: ne,
                boxSizing: "border-box",
                bgcolor: J,
                borderRight: "none",
                top: c ? "60px" : 0,
                // Position below header
                height: c ? "calc(100vh - 60px)" : "100vh"
              },
              ...ue
            },
            children: /* @__PURE__ */ u(
              X,
              {
                sx: {
                  overflow: "auto",
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  pt: 2
                },
                children: [
                  /* @__PURE__ */ r(
                    Ve,
                    {
                      variant: "rail",
                      mainLinks: o,
                      secondaryLinks: t,
                      activePath: E,
                      onLinkClick: h,
                      accentColor: $,
                      surfaceBackgroundColor: J,
                      railShowTitles: n
                    }
                  ),
                  (O == null ? void 0 : O.show) && /* @__PURE__ */ r(qe, { ...O })
                ]
              }
            )
          }
        ),
        s && P && /* @__PURE__ */ r(
          Lr,
          {
            open: Ne,
            onClose: ir,
            mainLinks: o,
            secondaryLinks: t,
            activePath: E,
            onLinkClick: h,
            userName: I,
            userEmail: x,
            userAvatar: m,
            onLogout: Ce,
            onProfileClick: g,
            showNotifications: d,
            notificationCount: l,
            onNotificationBellClick: d && S ? () => {
              pe(!1), ae(!0);
            } : void 0,
            alertProps: O,
            accentColor: $
          }
        ),
        /* @__PURE__ */ r(
          X,
          {
            component: "main",
            sx: {
              flexGrow: 1,
              p: 3,
              m: 1,
              width: P ? "100%" : s ? `calc(100% - ${ne}px)` : "100%",
              mt: c ? "60px" : 0,
              // Account for AppNavbar height (60px)
              ml: 0,
              // Offset for sidebar on desktop
              backgroundColor: J,
              // White background for main content
              ...fe
            },
            children: /* @__PURE__ */ u(we, { container: !0, spacing: 3, children: [
              /* @__PURE__ */ r(
                we,
                {
                  size: {
                    xs: 12,
                    md: _e && L ? 8.5 : 12
                  },
                  sx: {
                    display: "flex",
                    flexDirection: "column"
                  },
                  children: e
                }
              ),
              _e && L && /* @__PURE__ */ r(
                we,
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
                  children: /* @__PURE__ */ r(L, {})
                }
              )
            ] })
          }
        ),
        d && S && /* @__PURE__ */ r(
          Ue,
          {
            anchor: "right",
            open: rr,
            onClose: () => ae(!1),
            slotProps: {
              paper: { sx: { width: 380, maxWidth: "100vw" } }
            },
            children: /* @__PURE__ */ r(
              S,
              {
                onClose: () => ae(!1)
              }
            )
          }
        )
      ]
    }
  ) : null;
};
export {
  y as AUTH_ERROR_CODES,
  w as AuthError,
  Ut as LumoraWrapper,
  k as clearAuthTokens,
  Ut as default,
  Kt as getAuthErrorMessage,
  Z as getAuthTokens,
  Ur as getCurrentUser,
  Kr as isAuthenticated,
  be as logAuthError,
  Le as storeAuthTokens
};
