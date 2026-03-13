import { jsx as r, jsxs as l, Fragment as Ke } from "react/jsx-runtime";
import { useTheme as Xe, useMediaQuery as Ve, Box as j, CircularProgress as Ze, CssBaseline as er, Drawer as Ie, Grid as ue } from "@mui/material";
import * as ge from "react";
import { useState as H, useRef as Ce, useMemo as rr, useEffect as he } from "react";
import ve from "axios";
import Ae from "@mui/icons-material/AccountCircleRounded";
import Ue from "@mui/icons-material/LogoutRounded";
import tr from "@mui/icons-material/MenuRounded";
import or from "@mui/icons-material/NotificationsOutlined";
import nr from "@mui/icons-material/SearchRounded";
import ir from "@mui/material/AppBar";
import me from "@mui/material/Avatar";
import Fe from "@mui/material/Badge";
import M from "@mui/material/Box";
import I from "@mui/material/Divider";
import P from "@mui/material/IconButton";
import sr from "@mui/material/InputAdornment";
import ar from "@mui/material/Menu";
import De from "@mui/material/MenuItem";
import w from "@mui/material/Stack";
import { styled as lr } from "@mui/material/styles";
import cr from "@mui/material/TextField";
import dr from "@mui/material/Toolbar";
import _ from "@mui/material/Typography";
import ur from "@mui/material/useMediaQuery";
import hr from "@mui/material/Card";
import fr from "@mui/material/CardContent";
import Me from "@mui/material/Button";
import pr from "@mui/icons-material/AutoAwesomeRounded";
import be from "@mui/material/Tooltip";
import gr from "@mui/icons-material/NotificationsRounded";
import mr from "@mui/material/Drawer";
class c extends Error {
  constructor(o, t, s = null) {
    super(o), this.name = "AuthError", this.code = t, this.originalError = s, this.timestamp = (/* @__PURE__ */ new Date()).toISOString();
  }
}
const d = {
  STORAGE_ACCESS_DENIED: "STORAGE_ACCESS_DENIED",
  TOKEN_NOT_FOUND: "TOKEN_NOT_FOUND",
  TOKEN_INVALID: "TOKEN_INVALID",
  TOKEN_EXPIRED: "TOKEN_EXPIRED",
  LOGOUT_FAILED: "LOGOUT_FAILED",
  UNKNOWN_ERROR: "UNKNOWN_ERROR"
}, m = {
  ACCESS_TOKEN: "lumoraAccessToken",
  REFRESH_TOKEN: "lumoraRefreshToken",
  USER: "lumoraUser"
}, k = {
  ACCESS_TOKEN: "accessToken",
  REFRESH_TOKEN: "refreshToken",
  USER: "user"
}, xr = () => {
  if (!(typeof window > "u" || !window.localStorage))
    try {
      const e = localStorage.getItem(k.ACCESS_TOKEN), o = localStorage.getItem(k.REFRESH_TOKEN), t = localStorage.getItem(k.USER);
      e && !localStorage.getItem(m.ACCESS_TOKEN) && localStorage.setItem(m.ACCESS_TOKEN, e), o && !localStorage.getItem(m.REFRESH_TOKEN) && localStorage.setItem(m.REFRESH_TOKEN, o), t && !localStorage.getItem(m.USER) && localStorage.setItem(m.USER, t), (e || o || t) && (localStorage.removeItem(k.ACCESS_TOKEN), localStorage.removeItem(k.REFRESH_TOKEN), localStorage.removeItem(k.USER));
    } catch (e) {
      console.warn("Failed to migrate legacy localStorage keys:", e);
    }
}, fe = (e) => {
  try {
    if (typeof window > "u")
      return console.warn("localStorage access attempted on server side"), null;
    if (!window.localStorage)
      throw new c("localStorage is not available", d.STORAGE_ACCESS_DENIED);
    return window.localStorage.getItem(e);
  } catch (o) {
    throw o.name === "QuotaExceededError" ? (console.error("Storage quota exceeded"), new c(
      "Storage quota exceeded. Please clear browser data.",
      d.STORAGE_ACCESS_DENIED,
      o
    )) : o.name === "SecurityError" ? (console.error("localStorage access denied (private browsing or security settings)"), new c(
      "Access to localStorage is denied. Please check browser settings.",
      d.STORAGE_ACCESS_DENIED,
      o
    )) : (console.error("Unexpected error accessing localStorage:", o.name), new c("Failed to access storage", d.STORAGE_ACCESS_DENIED, o));
  }
}, pe = (e, o) => {
  try {
    if (typeof window > "u")
      return console.warn("localStorage write attempted on server side"), !1;
    if (!window.localStorage)
      throw new c("localStorage is not available", d.STORAGE_ACCESS_DENIED);
    return window.localStorage.setItem(e, o), !0;
  } catch (t) {
    throw t.name === "QuotaExceededError" ? (console.error("Storage quota exceeded"), new c(
      "Storage quota exceeded. Please clear browser data.",
      d.STORAGE_ACCESS_DENIED,
      t
    )) : t.name === "SecurityError" ? (console.error("localStorage write denied (private browsing or security settings)"), new c(
      "Access to localStorage is denied. Please check browser settings.",
      d.STORAGE_ACCESS_DENIED,
      t
    )) : (console.error("Unexpected error writing to localStorage:", t.name), new c("Failed to write to storage", d.STORAGE_ACCESS_DENIED, t));
  }
}, Ge = (e) => {
  try {
    return typeof window > "u" ? (console.warn("localStorage removal attempted on server side"), !1) : window.localStorage ? (window.localStorage.removeItem(e), !0) : (console.warn("localStorage is not available"), !1);
  } catch (o) {
    return o.name !== "SecurityError" && console.warn(`Could not remove localStorage key "${e}"`), !1;
  }
}, B = () => {
  try {
    xr();
    const e = fe(m.ACCESS_TOKEN), o = fe(m.REFRESH_TOKEN), t = fe(m.USER);
    let s = null;
    if (t)
      try {
        s = JSON.parse(t);
      } catch {
        t && t !== "null" && t !== "undefined" && console.warn("Invalid user data in localStorage, clearing:", t.substring(0, 50)), Ge(m.USER);
      }
    return {
      accessToken: e,
      refreshToken: o,
      user: s
    };
  } catch (e) {
    throw e instanceof c ? e : new c("Failed to retrieve authentication tokens", d.UNKNOWN_ERROR, e);
  }
}, Er = () => {
  try {
    const { accessToken: e, refreshToken: o } = B();
    return !(e || o) ? {
      isAuthenticated: !1,
      error: new c("No authentication tokens found", d.TOKEN_NOT_FOUND)
    } : {
      isAuthenticated: !0,
      error: null
    };
  } catch (e) {
    return console.error("Authentication check failed:", e), {
      isAuthenticated: !1,
      error: e instanceof c ? e : new c("Authentication check failed", d.UNKNOWN_ERROR, e)
    };
  }
}, We = (e, o, t = null) => {
  try {
    if (!e && !o)
      throw new c("At least one token must be provided", d.TOKEN_INVALID);
    return e && pe(m.ACCESS_TOKEN, e), o && pe(m.REFRESH_TOKEN, o), t && pe(m.USER, JSON.stringify(t)), {
      success: !0,
      error: null
    };
  } catch (s) {
    return console.error("Failed to store authentication tokens:", s), {
      success: !1,
      error: s instanceof c ? s : new c("Failed to store tokens", d.UNKNOWN_ERROR, s)
    };
  }
}, J = () => {
  try {
    return [
      m.ACCESS_TOKEN,
      m.REFRESH_TOKEN,
      m.USER,
      // Also clear legacy keys for complete cleanup
      k.ACCESS_TOKEN,
      k.REFRESH_TOKEN,
      k.USER
    ].map((s) => Ge(s)).every((s) => s) || console.warn("Some tokens could not be removed from localStorage"), {
      success: !0,
      error: null
    };
  } catch (e) {
    return console.error("Failed to clear authentication tokens:", e), {
      success: !1,
      error: e instanceof c ? e : new c("Failed to clear tokens", d.LOGOUT_FAILED, e)
    };
  }
}, Sr = () => {
  try {
    const { user: e } = B();
    return {
      user: e,
      error: null
    };
  } catch (e) {
    return console.error("Failed to get current user:", e), {
      user: null,
      error: e instanceof c ? e : new c("Failed to retrieve user data", d.UNKNOWN_ERROR, e)
    };
  }
}, ot = (e) => {
  if (!(e instanceof c))
    return "An unexpected error occurred. Please try again.";
  switch (e.code) {
    case d.STORAGE_ACCESS_DENIED:
      return "Unable to access browser storage. Please check your browser settings and disable private browsing if enabled.";
    case d.TOKEN_NOT_FOUND:
      return "You are not logged in. Please sign in to continue.";
    case d.TOKEN_INVALID:
      return "Your session is invalid. Please sign in again.";
    case d.TOKEN_EXPIRED:
      return "Your session has expired. Please sign in again.";
    case d.LOGOUT_FAILED:
      return "Failed to log out properly. Please clear your browser cache and try again.";
    case d.UNKNOWN_ERROR:
    default:
      return "An unexpected error occurred. Please try again or contact support if the problem persists.";
  }
}, xe = (e, o = "Unknown") => {
  const t = {
    context: o,
    message: e.message,
    code: e instanceof c ? e.code : "UNKNOWN",
    timestamp: e instanceof c ? e.timestamp : (/* @__PURE__ */ new Date()).toISOString(),
    stack: e.stack
  };
  e instanceof c && e.originalError && (t.originalError = {
    name: e.originalError.name,
    message: e.originalError.message
  }), console.warn("[Auth Error]", t);
}, wr = (e) => {
  if (!e)
    throw new Error("API base URL is required to create axios client");
  const o = ve.create({
    baseURL: e,
    headers: {
      "Content-Type": "application/json"
    }
  });
  let t = !1, s = null, p = [];
  const h = (i, n) => {
    p.forEach(({ resolve: x, reject: O }) => {
      i ? O(i) : n && x(n);
    }), p = [];
  };
  return o.interceptors.request.use(
    (i) => {
      const { accessToken: n } = B();
      return n && i.headers && (i.headers.Authorization = `Bearer ${n}`), i;
    },
    (i) => Promise.reject(i)
  ), o.interceptors.response.use(
    (i) => i,
    async (i) => {
      var E;
      const n = i.config, x = (E = i.response) == null ? void 0 : E.status, O = (n == null ? void 0 : n.url) || "", y = O.includes("/auth/refresh");
      if (x !== 401 || n._retry || y)
        return Promise.reject(i);
      n._retry = !0;
      const { refreshToken: N } = B();
      if (!N) {
        const u = new Error(
          "No refresh token available for token refresh"
        );
        return xe(u, "AxiosClient - Token Refresh"), J(), typeof window < "u" && (window.location.href = "/login"), Promise.reject(i);
      }
      if (t && s)
        return new Promise((u, g) => {
          p.push({ resolve: u, reject: g });
        }).then((u) => {
          const {
            accessToken: g,
            refreshToken: f
          } = u;
          if (n.headers && (n.headers.Authorization = `Bearer ${g}`), O.includes("/auth/logout"))
            try {
              if (typeof n.data == "string") {
                const R = JSON.parse(
                  n.data || "{}"
                );
                R.refresh_token = f, n.data = JSON.stringify(R);
              } else
                n.data && typeof n.data == "object" ? n.data.refresh_token = f : n.data = JSON.stringify({
                  refresh_token: f
                });
            } catch {
              n.data = JSON.stringify({
                refresh_token: f
              });
            }
          return o(n);
        }).catch((u) => Promise.reject(u));
      t = !0, s = ve.post(
        `${e}/auth/refresh`,
        {
          refresh_token: N
        }
      );
      try {
        const u = await s, { accessToken: g, refreshToken: f } = u.data;
        if (We(g, f, null), h(null, {
          accessToken: g,
          refreshToken: f
        }), n.headers && (n.headers.Authorization = `Bearer ${g}`), O.includes("/auth/logout"))
          try {
            if (typeof n.data == "string") {
              const R = JSON.parse(
                n.data || "{}"
              );
              R.refresh_token = f, n.data = JSON.stringify(R);
            } else
              n.data && typeof n.data == "object" ? n.data.refresh_token = f : n.data = JSON.stringify({
                refresh_token: f
              });
          } catch {
            n.data = JSON.stringify({
              refresh_token: f
            });
          }
        return o(n);
      } catch (u) {
        return xe(
          u,
          "AxiosClient - Token Refresh Failed"
        ), h(u), J(), typeof window < "u" && (window.location.href = "/login"), Promise.reject(u);
      } finally {
        t = !1, s = null;
      }
    }
  ), o;
}, Or = async (e) => {
  const { accessToken: o, refreshToken: t } = B();
  if (o)
    return !0;
  if (t)
    try {
      const s = await e.post("/auth/refresh", {
        refresh_token: t
      });
      if (s.data.success && s.data.accessToken)
        return We(s.data.accessToken, s.data.refreshToken || null, null), !0;
    } catch (s) {
      xe(s, "TokenValidator - Refresh Failed");
    }
  return J(), window.location.href = "/login", !1;
}, Rr = lr(dr)({
  width: "100%",
  padding: "8px 16px",
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
  gap: "16px",
  flexShrink: 0
}), yr = ({
  appName: e = "Dashboard",
  pageName: o = "Home",
  onMenuClick: t,
  showMenuButton: s = !0,
  headerStyles: p,
  userName: h = "User Name",
  userEmail: i,
  userAvatar: n,
  onProfileClick: x,
  onAccountClick: O,
  onSettingsClick: y,
  showSettings: N = !0,
  onLogout: E,
  showNotifications: u = !1,
  notificationCount: g = 0,
  onNotificationBellClick: f,
  showSearchbar: R = !0,
  searchValue: G,
  onSearchChange: T,
  onSearchSubmit: W,
  showProfile: C = !0,
  userRole: Z,
  accentColor: ee = "#01584f",
  contentBackgroundColor: re = "#f2f9fc",
  navbarBackground: te = "#ff0000",
  navbarAccentColor: S = "#000000",
  rightExtraContent: $ = [],
  customNavbar: A,
  customNavbarProps: v
}) => {
  const Q = ur((a) => a.breakpoints.up("md")), [Y, q] = ge.useState(null), oe = !!Y, D = (a) => {
    T == null || T(a.target.value);
  }, L = (a) => {
    a.key === "Enter" && W && G && W(G);
  }, ne = (a) => a ? a.charAt(0).toUpperCase() + a.slice(1).toLowerCase() : "User", ie = (a) => {
    q(a.currentTarget);
  }, b = () => {
    q(null);
  }, K = (a) => {
    a == null || a(), b();
  };
  return /* @__PURE__ */ r(
    ir,
    {
      position: "fixed",
      sx: {
        boxShadow: 0,
        background: te,
        top: "var(--template-frame-height, 0px)",
        left: 0,
        width: "100%",
        zIndex: 1,
        height: "60px",
        ...p
      },
      children: /* @__PURE__ */ l(Rr, { variant: "dense", sx: { height: "100%" }, children: [
        /* @__PURE__ */ l(
          w,
          {
            direction: "row",
            sx: {
              alignItems: "center",
              gap: 2,
              flexShrink: 0,
              flexGrow: 1
            },
            children: [
              s && !Q && /* @__PURE__ */ r(
                P,
                {
                  "aria-label": "menu",
                  onClick: t,
                  sx: {
                    color: S,
                    "&:hover": {
                      backgroundColor: "action.hover"
                    }
                  },
                  children: /* @__PURE__ */ r(tr, {})
                }
              ),
              /* @__PURE__ */ l(
                w,
                {
                  direction: "row",
                  sx: {
                    alignItems: "center",
                    gap: 1,
                    flexShrink: 0
                  },
                  children: [
                    /* @__PURE__ */ r(
                      _,
                      {
                        variant: "h6",
                        sx: {
                          color: S,
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
              A ? /* @__PURE__ */ r(A, { ...v || {} }) : R && Q && /* @__PURE__ */ r(
                cr,
                {
                  placeholder: "Search for deals or documents...",
                  value: G || "",
                  onChange: D,
                  onKeyDown: L,
                  size: "small",
                  sx: {
                    width: "400px",
                    "& .MuiOutlinedInput-root": {
                      backgroundColor: re,
                      borderRadius: "8px",
                      "& fieldset": {
                        borderColor: "transparent"
                      },
                      "&:hover fieldset": {
                        borderColor: "transparent"
                      },
                      "&.Mui-focused fieldset": {
                        borderColor: ee
                      }
                    }
                  },
                  InputProps: {
                    startAdornment: /* @__PURE__ */ r(sr, { position: "start", children: /* @__PURE__ */ r(
                      nr,
                      {
                        sx: {
                          color: S
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
          w,
          {
            direction: "row",
            sx: {
              alignItems: "center",
              gap: 1.5,
              flexShrink: 0
            },
            children: [
              u && /* @__PURE__ */ r(
                Fe,
                {
                  color: "error",
                  badgeContent: g,
                  invisible: g === 0,
                  sx: {
                    "& .MuiBadge-badge": {
                      right: 2,
                      top: 2
                    }
                  },
                  children: /* @__PURE__ */ r(
                    P,
                    {
                      size: "small",
                      onClick: f,
                      "aria-label": g ? `Notifications, ${g} unread` : "Notifications",
                      sx: { color: S },
                      children: /* @__PURE__ */ r(or, {})
                    }
                  )
                }
              ),
              u && C && /* @__PURE__ */ r(
                I,
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
              C && /* @__PURE__ */ l(Ke, { children: [
                /* @__PURE__ */ l(
                  w,
                  {
                    direction: "row",
                    onClick: ie,
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
                        me,
                        {
                          src: n,
                          sx: { width: 32, height: 32 }
                        }
                      ) : /* @__PURE__ */ r(
                        Ae,
                        {
                          sx: {
                            width: 32,
                            height: 32,
                            color: S
                          }
                        }
                      ),
                      /* @__PURE__ */ l(
                        M,
                        {
                          sx: {
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "flex-start",
                            minWidth: 0
                          },
                          children: [
                            /* @__PURE__ */ r(
                              _,
                              {
                                variant: "body2",
                                sx: {
                                  color: S,
                                  fontWeight: 500,
                                  lineHeight: 1.2,
                                  overflow: "hidden",
                                  textOverflow: "ellipsis",
                                  whiteSpace: "nowrap",
                                  maxWidth: "150px"
                                },
                                children: h
                              }
                            ),
                            /* @__PURE__ */ r(
                              _,
                              {
                                variant: "caption",
                                sx: {
                                  color: S,
                                  lineHeight: 1.2,
                                  overflow: "hidden",
                                  textOverflow: "ellipsis",
                                  whiteSpace: "nowrap",
                                  maxWidth: "150px"
                                },
                                children: ne(Z)
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
                    anchorEl: Y,
                    open: oe,
                    onClose: b,
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
                      N && [
                        /* @__PURE__ */ r(
                          De,
                          {
                            onClick: () => K(y),
                            children: "Settings"
                          },
                          "settings"
                        ),
                        /* @__PURE__ */ r(I, {}, "settings-divider")
                      ],
                      /* @__PURE__ */ l(
                        De,
                        {
                          onClick: () => K(E),
                          sx: {
                            color: "error.main",
                            "&:hover": {
                              color: "error.dark"
                            }
                          },
                          children: [
                            /* @__PURE__ */ r(_, { sx: { flexGrow: 1 }, children: "Logout" }),
                            /* @__PURE__ */ r(Ue, { fontSize: "small" })
                          ]
                        }
                      )
                    ]
                  }
                )
              ] }),
              $.length !== 0 && $.map((a) => a.type === "divider" ? /* @__PURE__ */ r(
                I,
                {
                  orientation: "vertical",
                  flexItem: !0,
                  sx: {
                    borderColor: "rgba(0, 0, 0, 0.12)",
                    height: "24px",
                    alignSelf: "center"
                  }
                },
                a.key
              ) : a.type === "profile" ? /* @__PURE__ */ l(
                w,
                {
                  direction: "row",
                  onClick: a.onClick,
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
                    a.avatar ? /* @__PURE__ */ r(
                      me,
                      {
                        src: a.avatar,
                        sx: { width: 32, height: 32 }
                      }
                    ) : /* @__PURE__ */ r(
                      Ae,
                      {
                        sx: {
                          width: 32,
                          height: 32,
                          color: S
                        }
                      }
                    ),
                    /* @__PURE__ */ l(
                      M,
                      {
                        sx: {
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "flex-start",
                          minWidth: 0
                        },
                        children: [
                          /* @__PURE__ */ r(
                            _,
                            {
                              variant: "body2",
                              sx: {
                                color: S,
                                fontWeight: 500,
                                lineHeight: 1.2,
                                overflow: "hidden",
                                textOverflow: "ellipsis",
                                whiteSpace: "nowrap",
                                maxWidth: "150px"
                              },
                              children: a.name
                            }
                          ),
                          /* @__PURE__ */ r(
                            _,
                            {
                              variant: "caption",
                              sx: {
                                color: S,
                                lineHeight: 1.2,
                                overflow: "hidden",
                                textOverflow: "ellipsis",
                                whiteSpace: "nowrap",
                                maxWidth: "150px"
                              },
                              children: a.role
                            }
                          )
                        ]
                      }
                    )
                  ]
                },
                a.key
              ) : null)
            ]
          }
        )
      ] })
    }
  );
}, Le = ({
  title: e = "",
  message: o = "",
  buttonText: t = "",
  onButtonClick: s,
  show: p = !0
}) => p ? /* @__PURE__ */ r(hr, { variant: "outlined", sx: { m: 1.5, flexShrink: 0 }, children: /* @__PURE__ */ l(fr, { children: [
  /* @__PURE__ */ r(pr, { fontSize: "small" }),
  /* @__PURE__ */ r(_, { gutterBottom: !0, sx: { fontWeight: 600 }, children: e }),
  /* @__PURE__ */ r(
    _,
    {
      variant: "body2",
      sx: { mb: 2, color: "text.secondary" },
      children: o
    }
  ),
  /* @__PURE__ */ r(
    Me,
    {
      variant: "contained",
      size: "small",
      fullWidth: !0,
      onClick: s,
      children: t
    }
  )
] }) }) : null, ze = ({
  mainLinks: e,
  secondaryLinks: o = [],
  activePath: t,
  onLinkClick: s,
  accentColor: p = "#01584f"
}) => {
  const h = (i) => {
    s && s(i);
  };
  return /* @__PURE__ */ l(
    w,
    {
      sx: {
        flexGrow: 1,
        justifyContent: "flex-start",
        alignItems: "center",
        pt: 2,
        gap: 1
      },
      children: [
        e.map((i, n) => /* @__PURE__ */ l(ge.Fragment, { children: [
          /* @__PURE__ */ r(be, { title: i.text, placement: "right", arrow: !0, children: /* @__PURE__ */ r(
            P,
            {
              component: "a",
              href: i.path,
              onClick: (x) => {
                x.preventDefault(), x.stopPropagation(), h(i.path);
              },
              sx: {
                width: 44,
                height: 44,
                color: t === i.path ? "#ffffff" : p,
                backgroundColor: t === i.path ? p : "transparent",
                borderRadius: t === i.path ? "4px" : "50%",
                "&:hover": {
                  backgroundColor: t === i.path ? p : "action.hover",
                  borderRadius: "4px"
                }
              },
              children: i.icon
            }
          ) }),
          n < e.length - 1 && /* @__PURE__ */ r(
            M,
            {
              sx: {
                width: "100%",
                display: "flex",
                justifyContent: "center"
              },
              children: /* @__PURE__ */ r(
                I,
                {
                  sx: { width: "60%", borderColor: "divider" }
                }
              )
            }
          )
        ] }, n)),
        o.length > 0 && /* @__PURE__ */ l(Ke, { children: [
          /* @__PURE__ */ r(
            M,
            {
              sx: {
                width: "100%",
                my: 2,
                display: "flex",
                justifyContent: "center"
              },
              children: /* @__PURE__ */ r(
                I,
                {
                  sx: { width: "60%", borderColor: "divider" }
                }
              )
            }
          ),
          /* @__PURE__ */ r(M, { sx: { mt: "auto", pb: 2 }, children: /* @__PURE__ */ r(w, { gap: 1, alignItems: "center", children: o.map((i, n) => /* @__PURE__ */ l(ge.Fragment, { children: [
            /* @__PURE__ */ r(
              be,
              {
                title: i.text,
                placement: "right",
                arrow: !0,
                children: /* @__PURE__ */ r(
                  P,
                  {
                    component: "a",
                    href: i.path,
                    onClick: (x) => {
                      x.preventDefault(), x.stopPropagation(), h(i.path);
                    },
                    sx: {
                      width: 48,
                      height: 48,
                      color: t === i.path ? "#ffffff" : "text.secondary",
                      backgroundColor: t === i.path ? "#01584F" : "transparent",
                      borderRadius: t === i.path ? "4px" : "50%",
                      "&:hover": {
                        backgroundColor: t === i.path ? "#01584F" : "action.hover",
                        borderRadius: "4px"
                      }
                    },
                    children: i.icon
                  }
                )
              }
            ),
            n < o.length - 1 && /* @__PURE__ */ r(
              M,
              {
                sx: {
                  width: "100%",
                  display: "flex",
                  justifyContent: "center"
                },
                children: /* @__PURE__ */ r(
                  I,
                  {
                    sx: {
                      width: "60%",
                      borderColor: "divider"
                    }
                  }
                )
              }
            )
          ] }, n)) }) })
        ] })
      ]
    }
  );
}, Nr = ({
  open: e,
  onClose: o,
  mainLinks: t,
  secondaryLinks: s = [],
  activePath: p,
  onLinkClick: h,
  userName: i = "User Name",
  userAvatar: n,
  onLogout: x,
  showNotifications: O = !1,
  notificationCount: y = 0,
  onNotificationBellClick: N,
  alertProps: E,
  accentColor: u = "#01584f"
}) => /* @__PURE__ */ r(
  mr,
  {
    anchor: "right",
    open: e,
    onClose: o,
    sx: {
      zIndex: (f) => f.zIndex.drawer + 1,
      "& .MuiDrawer-paper": {
        backgroundImage: "none",
        backgroundColor: "background.paper"
      }
    },
    children: /* @__PURE__ */ l(
      w,
      {
        sx: {
          maxWidth: "70dvw",
          height: "100%"
        },
        children: [
          /* @__PURE__ */ l(w, { direction: "row", sx: { p: 2, pb: 0, gap: 1 }, children: [
            /* @__PURE__ */ l(
              w,
              {
                direction: "row",
                sx: { gap: 1, alignItems: "center", flexGrow: 1, p: 1 },
                children: [
                  /* @__PURE__ */ r(
                    me,
                    {
                      sizes: "small",
                      alt: i,
                      src: n,
                      sx: { width: 24, height: 24 }
                    }
                  ),
                  /* @__PURE__ */ r(_, { component: "p", variant: "h6", children: i })
                ]
              }
            ),
            O && /* @__PURE__ */ r(
              Fe,
              {
                color: "error",
                badgeContent: y,
                invisible: y === 0,
                sx: { "& .MuiBadge-badge": { right: 2, top: 2 } },
                children: /* @__PURE__ */ r(
                  P,
                  {
                    size: "small",
                    onClick: N,
                    "aria-label": "Notifications",
                    children: /* @__PURE__ */ r(gr, {})
                  }
                )
              }
            )
          ] }),
          /* @__PURE__ */ r(I, {}),
          /* @__PURE__ */ l(w, { sx: { flexGrow: 1 }, children: [
            /* @__PURE__ */ r(
              ze,
              {
                mainLinks: t,
                secondaryLinks: s,
                activePath: p,
                onLinkClick: (f) => {
                  h == null || h(f), o();
                },
                accentColor: u
              }
            ),
            /* @__PURE__ */ r(I, {})
          ] }),
          (E == null ? void 0 : E.show) && /* @__PURE__ */ r(Le, { ...E }),
          /* @__PURE__ */ r(w, { sx: { p: 2 }, children: /* @__PURE__ */ r(
            Me,
            {
              variant: "outlined",
              fullWidth: !0,
              startIcon: /* @__PURE__ */ r(Ue, {}),
              onClick: x,
              children: "Logout"
            }
          ) })
        ]
      }
    )
  }
), nt = ({
  children: e,
  sidebarLinks: o = [],
  secondarySidebarLinks: t = [],
  appName: s = "Dashboard",
  pageName: p = "Home",
  showHeader: h = !0,
  showSidebar: i = !0,
  enableRefreshToken: n = !1,
  activePath: x,
  onLinkClick: O,
  userName: y,
  userEmail: N,
  userAvatar: E,
  onLogout: u,
  onProfileClick: g,
  onAccountClick: f,
  onSettingsClick: R,
  showSettings: G = !0,
  showNotifications: T = !0,
  notificationCount: W = 0,
  NotificationSidebarContent: C,
  showSearchbar: Z = !0,
  searchValue: ee,
  onSearchChange: re,
  onSearchSubmit: te,
  showProfile: S = !0,
  userRole: $,
  onVerify: A,
  alertProps: v,
  style: Q,
  headerStyles: Y,
  sidebarStyles: q,
  contentStyles: oe,
  accentColor: D = "#01584f",
  contentBackgroundColor: L = "#f2f9fc",
  navbarBackground: ne = "#ffffff",
  navbarAccentColor: ie = "#000000",
  GlobalChatSidebar: b,
  useChatSidebar: K,
  rightExtraContent: a,
  customNavbar: Ee,
  customNavbarProps: je,
  redirectToLogin: se,
  apiBaseUrl: Se
}) => {
  const He = Xe(), U = Ve(He.breakpoints.down("md")), [we, ae] = H(!1), [Pe, X] = H(!1), [Be, Je] = H(!0), [$e, Qe] = H(!1), [Tr, V] = H(null), le = K == null ? void 0 : K(), Oe = (le == null ? void 0 : le.isOpen) ?? !1, ce = Ce(A), Re = Ce(!1), ye = rr(
    () => wr(Se),
    [Se]
  );
  he(() => {
    ce.current = A;
  }, [A]);
  const Ye = () => {
    ae(!we);
  }, qe = () => {
    ae(!1);
  }, Ne = (Te) => {
    const F = u(Te);
    F instanceof Promise ? F.then(() => {
      V(null);
    }).catch((_e) => {
      console.error("Error in logout handler:", _e), V(null);
    }) : V(null);
  };
  return he(() => {
    (() => {
      try {
        const { isAuthenticated: F, error: _e } = Er();
        if (!F) {
          console.log("No session found, redirecting to login"), J(), se();
          return;
        }
        if (!Re.current) {
          const { user: z, error: de } = Sr();
          if (z && !de) {
            const ke = {
              name: z.name || "",
              email: z.email || "",
              profilePicture: z.profilePicture || "",
              role: z.role || ""
            };
            V(ke), Re.current = !0, ce.current && ce.current(ke);
          } else
            de && console.error("Error getting user data:", de);
        }
        Qe(!0);
      } catch (F) {
        console.error("Error checking session:", F), J(), se();
      } finally {
        Je(!1);
      }
    })();
  }, [se]), he(() => {
    n && Or(ye);
  }, [n, ye]), Be ? /* @__PURE__ */ l(
    j,
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
          Ze,
          {
            size: 60,
            thickness: 4,
            sx: { color: D }
          }
        ),
        /* @__PURE__ */ r(j, { sx: { mt: 2, color: "text.secondary" }, children: "Checking session..." })
      ]
    }
  ) : $e ? /* @__PURE__ */ l(
    j,
    {
      sx: {
        display: "flex",
        minHeight: "100vh",
        ...Q
      },
      children: [
        /* @__PURE__ */ r(er, {}),
        h && /* @__PURE__ */ r(
          yr,
          {
            appName: s,
            pageName: p,
            onMenuClick: U && i ? Ye : void 0,
            showMenuButton: U && i,
            headerStyles: Y,
            userName: y,
            userEmail: N,
            userAvatar: E,
            onProfileClick: g,
            onAccountClick: f,
            onSettingsClick: R,
            showSettings: G,
            onLogout: Ne,
            showNotifications: T,
            notificationCount: W,
            onNotificationBellClick: T && C ? () => X(!0) : void 0,
            showSearchbar: Z && !Ee,
            searchValue: ee,
            onSearchChange: re,
            onSearchSubmit: te,
            showProfile: S,
            userRole: $,
            accentColor: D,
            contentBackgroundColor: L,
            navbarBackground: ne,
            navbarAccentColor: ie,
            rightExtraContent: a,
            customNavbar: Ee,
            customNavbarProps: je
          }
        ),
        i && !U && /* @__PURE__ */ r(
          Ie,
          {
            variant: "permanent",
            sx: {
              width: 80,
              flexShrink: 0,
              zIndex: 2,
              // Higher z-index than app bar
              "& .MuiDrawer-paper": {
                width: 80,
                boxSizing: "border-box",
                bgcolor: L,
                borderRight: "none",
                top: h ? "60px" : 0,
                // Position below header
                height: h ? "calc(100vh - 60px)" : "100vh"
              },
              ...q
            },
            children: /* @__PURE__ */ l(
              j,
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
                    ze,
                    {
                      mainLinks: o,
                      secondaryLinks: t,
                      activePath: x,
                      onLinkClick: O,
                      accentColor: D
                    }
                  ),
                  (v == null ? void 0 : v.show) && /* @__PURE__ */ r(Le, { ...v })
                ]
              }
            )
          }
        ),
        i && U && /* @__PURE__ */ r(
          Nr,
          {
            open: we,
            onClose: qe,
            mainLinks: o,
            secondaryLinks: t,
            activePath: x,
            onLinkClick: O,
            userName: y,
            userEmail: N,
            userAvatar: E,
            onLogout: Ne,
            onProfileClick: g,
            showNotifications: T,
            notificationCount: W,
            onNotificationBellClick: T && C ? () => {
              ae(!1), X(!0);
            } : void 0,
            alertProps: v,
            accentColor: D
          }
        ),
        /* @__PURE__ */ r(
          j,
          {
            component: "main",
            sx: {
              flexGrow: 1,
              p: 3,
              m: 1,
              width: U ? "100%" : i ? "calc(100% - 80px)" : "100%",
              mt: h ? "60px" : 0,
              // Account for AppNavbar height (60px)
              ml: 0,
              // Offset for sidebar on desktop
              backgroundColor: L,
              // White background for main content
              ...oe
            },
            children: /* @__PURE__ */ l(ue, { container: !0, spacing: 3, children: [
              /* @__PURE__ */ r(
                ue,
                {
                  size: {
                    xs: 12,
                    md: Oe && b ? 8.5 : 12
                  },
                  sx: {
                    display: "flex",
                    flexDirection: "column"
                  },
                  children: e
                }
              ),
              Oe && b && /* @__PURE__ */ r(
                ue,
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
                  children: /* @__PURE__ */ r(b, {})
                }
              )
            ] })
          }
        ),
        T && C && /* @__PURE__ */ r(
          Ie,
          {
            anchor: "right",
            open: Pe,
            onClose: () => X(!1),
            slotProps: {
              paper: { sx: { width: 380, maxWidth: "100vw" } }
            },
            children: /* @__PURE__ */ r(
              C,
              {
                onClose: () => X(!1)
              }
            )
          }
        )
      ]
    }
  ) : null;
};
export {
  d as AUTH_ERROR_CODES,
  c as AuthError,
  nt as LumoraWrapper,
  J as clearAuthTokens,
  nt as default,
  ot as getAuthErrorMessage,
  B as getAuthTokens,
  Sr as getCurrentUser,
  Er as isAuthenticated,
  xe as logAuthError,
  We as storeAuthTokens
};
