import { jsx as r, jsxs as f, Fragment as le } from "react/jsx-runtime";
import { useTheme as sr, useMediaQuery as ar, Box as q, CircularProgress as ir, CssBaseline as lr, Drawer as Fe, Grid as xe } from "@mui/material";
import * as b from "react";
import { useState as Q, useRef as Ke, useMemo as cr, useEffect as Ee } from "react";
import Ue from "axios";
import We from "@mui/icons-material/AccountCircleRounded";
import ke from "@mui/icons-material/LogoutRounded";
import dr from "@mui/icons-material/MenuRounded";
import ur from "@mui/icons-material/NotificationsOutlined";
import fr from "@mui/icons-material/SearchRounded";
import hr from "@mui/material/AppBar";
import Re from "@mui/material/Avatar";
import ze from "@mui/material/Badge";
import C from "@mui/material/Box";
import W from "@mui/material/Divider";
import X from "@mui/material/IconButton";
import pr from "@mui/material/InputAdornment";
import mr from "@mui/material/Menu";
import ye from "@mui/material/MenuItem";
import A from "@mui/material/Stack";
import { styled as gr, useTheme as Ge } from "@mui/material/styles";
import xr from "@mui/material/TextField";
import Er from "@mui/material/Toolbar";
import K from "@mui/material/Typography";
import wr from "@mui/material/useMediaQuery";
import Sr from "@mui/material/Card";
import Rr from "@mui/material/CardContent";
import je from "@mui/material/Button";
import yr from "@mui/icons-material/AutoAwesomeRounded";
import vr from "@mui/icons-material/ExpandLess";
import Or from "@mui/icons-material/ExpandMore";
import Tr from "@mui/material/Collapse";
import ie from "@mui/material/ListItemButton";
import ce from "@mui/material/ListItemIcon";
import Y from "@mui/material/ListItemText";
import br from "@mui/material/MenuList";
import Ir from "@mui/material/Paper";
import Nr from "@mui/material/Popper";
import He from "@mui/material/Tooltip";
import _r from "@mui/icons-material/NotificationsRounded";
import Ar from "@mui/material/Drawer";
class E extends Error {
  constructor(o, t, s = null) {
    super(o), this.name = "AuthError", this.code = t, this.originalError = s, this.timestamp = (/* @__PURE__ */ new Date()).toISOString();
  }
}
const S = {
  STORAGE_ACCESS_DENIED: "STORAGE_ACCESS_DENIED",
  TOKEN_NOT_FOUND: "TOKEN_NOT_FOUND",
  TOKEN_INVALID: "TOKEN_INVALID",
  TOKEN_EXPIRED: "TOKEN_EXPIRED",
  LOGOUT_FAILED: "LOGOUT_FAILED",
  UNKNOWN_ERROR: "UNKNOWN_ERROR"
}, I = {
  ACCESS_TOKEN: "lumoraAccessToken",
  REFRESH_TOKEN: "lumoraRefreshToken",
  USER: "lumoraUser"
}, U = {
  ACCESS_TOKEN: "accessToken",
  REFRESH_TOKEN: "refreshToken",
  USER: "user"
}, Dr = () => {
  if (!(typeof window > "u" || !window.localStorage))
    try {
      const e = localStorage.getItem(U.ACCESS_TOKEN), o = localStorage.getItem(U.REFRESH_TOKEN), t = localStorage.getItem(U.USER);
      e && !localStorage.getItem(I.ACCESS_TOKEN) && localStorage.setItem(I.ACCESS_TOKEN, e), o && !localStorage.getItem(I.REFRESH_TOKEN) && localStorage.setItem(I.REFRESH_TOKEN, o), t && !localStorage.getItem(I.USER) && localStorage.setItem(I.USER, t), (e || o || t) && (localStorage.removeItem(U.ACCESS_TOKEN), localStorage.removeItem(U.REFRESH_TOKEN), localStorage.removeItem(U.USER));
    } catch (e) {
      console.warn("Failed to migrate legacy localStorage keys:", e);
    }
}, we = (e) => {
  try {
    if (typeof window > "u")
      return console.warn("localStorage access attempted on server side"), null;
    if (!window.localStorage)
      throw new E("localStorage is not available", S.STORAGE_ACCESS_DENIED);
    return window.localStorage.getItem(e);
  } catch (o) {
    throw o.name === "QuotaExceededError" ? (console.error("Storage quota exceeded"), new E(
      "Storage quota exceeded. Please clear browser data.",
      S.STORAGE_ACCESS_DENIED,
      o
    )) : o.name === "SecurityError" ? (console.error("localStorage access denied (private browsing or security settings)"), new E(
      "Access to localStorage is denied. Please check browser settings.",
      S.STORAGE_ACCESS_DENIED,
      o
    )) : (console.error("Unexpected error accessing localStorage:", o.name), new E("Failed to access storage", S.STORAGE_ACCESS_DENIED, o));
  }
}, Se = (e, o) => {
  try {
    if (typeof window > "u")
      return console.warn("localStorage write attempted on server side"), !1;
    if (!window.localStorage)
      throw new E("localStorage is not available", S.STORAGE_ACCESS_DENIED);
    return window.localStorage.setItem(e, o), !0;
  } catch (t) {
    throw t.name === "QuotaExceededError" ? (console.error("Storage quota exceeded"), new E(
      "Storage quota exceeded. Please clear browser data.",
      S.STORAGE_ACCESS_DENIED,
      t
    )) : t.name === "SecurityError" ? (console.error("localStorage write denied (private browsing or security settings)"), new E(
      "Access to localStorage is denied. Please check browser settings.",
      S.STORAGE_ACCESS_DENIED,
      t
    )) : (console.error("Unexpected error writing to localStorage:", t.name), new E("Failed to write to storage", S.STORAGE_ACCESS_DENIED, t));
  }
}, Pe = (e) => {
  try {
    return typeof window > "u" ? (console.warn("localStorage removal attempted on server side"), !1) : window.localStorage ? (window.localStorage.removeItem(e), !0) : (console.warn("localStorage is not available"), !1);
  } catch (o) {
    return o.name !== "SecurityError" && console.warn(`Could not remove localStorage key "${e}"`), !1;
  }
}, V = () => {
  try {
    Dr();
    const e = we(I.ACCESS_TOKEN), o = we(I.REFRESH_TOKEN), t = we(I.USER);
    let s = null;
    if (t)
      try {
        s = JSON.parse(t);
      } catch {
        t && t !== "null" && t !== "undefined" && console.warn("Invalid user data in localStorage, clearing:", t.substring(0, 50)), Pe(I.USER);
      }
    return {
      accessToken: e,
      refreshToken: o,
      user: s
    };
  } catch (e) {
    throw e instanceof E ? e : new E("Failed to retrieve authentication tokens", S.UNKNOWN_ERROR, e);
  }
}, Cr = () => {
  try {
    const { accessToken: e, refreshToken: o } = V();
    return !(e || o) ? {
      isAuthenticated: !1,
      error: new E("No authentication tokens found", S.TOKEN_NOT_FOUND)
    } : {
      isAuthenticated: !0,
      error: null
    };
  } catch (e) {
    return console.error("Authentication check failed:", e), {
      isAuthenticated: !1,
      error: e instanceof E ? e : new E("Authentication check failed", S.UNKNOWN_ERROR, e)
    };
  }
}, $e = (e, o, t = null) => {
  try {
    if (!e && !o)
      throw new E("At least one token must be provided", S.TOKEN_INVALID);
    return e && Se(I.ACCESS_TOKEN, e), o && Se(I.REFRESH_TOKEN, o), t && Se(I.USER, JSON.stringify(t)), {
      success: !0,
      error: null
    };
  } catch (s) {
    return console.error("Failed to store authentication tokens:", s), {
      success: !1,
      error: s instanceof E ? s : new E("Failed to store tokens", S.UNKNOWN_ERROR, s)
    };
  }
}, Z = () => {
  try {
    return [
      I.ACCESS_TOKEN,
      I.REFRESH_TOKEN,
      I.USER,
      // Also clear legacy keys for complete cleanup
      U.ACCESS_TOKEN,
      U.REFRESH_TOKEN,
      U.USER
    ].map((s) => Pe(s)).every((s) => s) || console.warn("Some tokens could not be removed from localStorage"), {
      success: !0,
      error: null
    };
  } catch (e) {
    return console.error("Failed to clear authentication tokens:", e), {
      success: !1,
      error: e instanceof E ? e : new E("Failed to clear tokens", S.LOGOUT_FAILED, e)
    };
  }
}, Mr = () => {
  try {
    const { user: e } = V();
    return {
      user: e,
      error: null
    };
  } catch (e) {
    return console.error("Failed to get current user:", e), {
      user: null,
      error: e instanceof E ? e : new E("Failed to retrieve user data", S.UNKNOWN_ERROR, e)
    };
  }
}, Dt = (e) => {
  if (!(e instanceof E))
    return "An unexpected error occurred. Please try again.";
  switch (e.code) {
    case S.STORAGE_ACCESS_DENIED:
      return "Unable to access browser storage. Please check your browser settings and disable private browsing if enabled.";
    case S.TOKEN_NOT_FOUND:
      return "You are not logged in. Please sign in to continue.";
    case S.TOKEN_INVALID:
      return "Your session is invalid. Please sign in again.";
    case S.TOKEN_EXPIRED:
      return "Your session has expired. Please sign in again.";
    case S.LOGOUT_FAILED:
      return "Failed to log out properly. Please clear your browser cache and try again.";
    case S.UNKNOWN_ERROR:
    default:
      return "An unexpected error occurred. Please try again or contact support if the problem persists.";
  }
}, ve = (e, o = "Unknown") => {
  const t = {
    context: o,
    message: e.message,
    code: e instanceof E ? e.code : "UNKNOWN",
    timestamp: e instanceof E ? e.timestamp : (/* @__PURE__ */ new Date()).toISOString(),
    stack: e.stack
  };
  e instanceof E && e.originalError && (t.originalError = {
    name: e.originalError.name,
    message: e.originalError.message
  }), console.warn("[Auth Error]", t);
}, Fr = (e) => {
  if (!e)
    throw new Error("API base URL is required to create axios client");
  const o = Ue.create({
    baseURL: e,
    headers: {
      "Content-Type": "application/json"
    }
  });
  let t = !1, s = null, a = [];
  const d = (i, n) => {
    a.forEach(({ resolve: y, reject: h }) => {
      i ? h(i) : n && y(n);
    }), a = [];
  };
  return o.interceptors.request.use(
    (i) => {
      const { accessToken: n } = V();
      return n && i.headers && (i.headers.Authorization = `Bearer ${n}`), i;
    },
    (i) => Promise.reject(i)
  ), o.interceptors.response.use(
    (i) => i,
    async (i) => {
      var v;
      const n = i.config, y = (v = i.response) == null ? void 0 : v.status, h = (n == null ? void 0 : n.url) || "", m = h.includes("/auth/refresh");
      if (y !== 401 || n._retry || m)
        return Promise.reject(i);
      n._retry = !0;
      const { refreshToken: O } = V();
      if (!O) {
        const g = new Error(
          "No refresh token available for token refresh"
        );
        return ve(g, "AxiosClient - Token Refresh"), Z(), typeof window < "u" && (window.location.href = "/login"), Promise.reject(i);
      }
      if (t && s)
        return new Promise((g, w) => {
          a.push({ resolve: g, reject: w });
        }).then((g) => {
          const {
            accessToken: w,
            refreshToken: x
          } = g;
          if (n.headers && (n.headers.Authorization = `Bearer ${w}`), h.includes("/auth/logout"))
            try {
              if (typeof n.data == "string") {
                const T = JSON.parse(
                  n.data || "{}"
                );
                T.refresh_token = x, n.data = JSON.stringify(T);
              } else
                n.data && typeof n.data == "object" ? n.data.refresh_token = x : n.data = JSON.stringify({
                  refresh_token: x
                });
            } catch {
              n.data = JSON.stringify({
                refresh_token: x
              });
            }
          return o(n);
        }).catch((g) => Promise.reject(g));
      t = !0, s = Ue.post(
        `${e}/auth/refresh`,
        {
          refresh_token: O
        }
      );
      try {
        const g = await s, { accessToken: w, refreshToken: x } = g.data;
        if ($e(w, x, null), d(null, {
          accessToken: w,
          refreshToken: x
        }), n.headers && (n.headers.Authorization = `Bearer ${w}`), h.includes("/auth/logout"))
          try {
            if (typeof n.data == "string") {
              const T = JSON.parse(
                n.data || "{}"
              );
              T.refresh_token = x, n.data = JSON.stringify(T);
            } else
              n.data && typeof n.data == "object" ? n.data.refresh_token = x : n.data = JSON.stringify({
                refresh_token: x
              });
          } catch {
            n.data = JSON.stringify({
              refresh_token: x
            });
          }
        return o(n);
      } catch (g) {
        return ve(
          g,
          "AxiosClient - Token Refresh Failed"
        ), d(g), Z(), typeof window < "u" && (window.location.href = "/login"), Promise.reject(g);
      } finally {
        t = !1, s = null;
      }
    }
  ), o;
}, Kr = async (e, o) => {
  const { accessToken: t, refreshToken: s } = V();
  if (t)
    return !0;
  if (s)
    try {
      const a = await e.post("/auth/refresh", {
        refresh_token: s
      });
      if (a.data.success && a.data.accessToken)
        return $e(a.data.accessToken, a.data.refreshToken || null, null), !0;
    } catch (a) {
      ve(a, "TokenValidator - Refresh Failed");
    }
  return Z(), o ? o() : window.location.href = "/login", !1;
}, Ur = gr(Er)({
  width: "100%",
  padding: "8px 16px",
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
  gap: "16px",
  flexShrink: 0
}), Wr = ({
  appName: e = "Dashboard",
  pageName: o = "Home",
  onMenuClick: t,
  showMenuButton: s = !0,
  headerStyles: a,
  userName: d = "User Name",
  userEmail: i,
  userAvatar: n,
  onProfileClick: y,
  onAccountClick: h,
  onSettingsClick: m,
  showSettings: O = !0,
  onLogout: v,
  showNotifications: g = !1,
  notificationCount: w = 0,
  onNotificationBellClick: x,
  showSearchbar: T = !0,
  searchValue: D,
  onSearchChange: l,
  onSearchSubmit: c,
  showProfile: R = !0,
  userRole: M,
  accentColor: B = "#01584f",
  contentBackgroundColor: F = "#f2f9fc",
  navbarBackground: L = "#ff0000",
  navbarAccentColor: u = "#000000",
  rightExtraContent: N = [],
  customNavbar: _,
  customNavbarProps: k
}) => {
  const ee = wr((p) => p.breakpoints.up("md")), [re, te] = b.useState(null), de = !!re, z = (p) => {
    l == null || l(p.target.value);
  }, G = (p) => {
    p.key === "Enter" && c && D && c(D);
  }, ue = (p) => p ? p.charAt(0).toUpperCase() + p.slice(1).toLowerCase() : "User", fe = (p) => {
    te(p.currentTarget);
  }, j = () => {
    te(null);
  }, H = (p) => {
    p == null || p(), j();
  };
  return /* @__PURE__ */ r(
    hr,
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
        ...a
      },
      children: /* @__PURE__ */ f(Ur, { variant: "dense", sx: { height: "100%" }, children: [
        /* @__PURE__ */ f(
          A,
          {
            direction: "row",
            sx: {
              alignItems: "center",
              gap: 2,
              flexShrink: 0,
              flexGrow: 1
            },
            children: [
              s && !ee && /* @__PURE__ */ r(
                X,
                {
                  "aria-label": "menu",
                  onClick: t,
                  sx: {
                    color: u,
                    "&:hover": {
                      backgroundColor: "action.hover"
                    }
                  },
                  children: /* @__PURE__ */ r(dr, {})
                }
              ),
              /* @__PURE__ */ f(
                A,
                {
                  direction: "row",
                  sx: {
                    alignItems: "center",
                    gap: 1,
                    flexShrink: 0
                  },
                  children: [
                    /* @__PURE__ */ r(
                      K,
                      {
                        variant: "h6",
                        sx: {
                          color: u,
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
              _ ? /* @__PURE__ */ r(_, { ...k || {} }) : T && ee && /* @__PURE__ */ r(
                xr,
                {
                  placeholder: "Search for deals or documents...",
                  value: D || "",
                  onChange: z,
                  onKeyDown: G,
                  size: "small",
                  sx: {
                    width: "400px",
                    "& .MuiOutlinedInput-root": {
                      backgroundColor: F,
                      borderRadius: "8px",
                      "& fieldset": {
                        borderColor: "transparent"
                      },
                      "&:hover fieldset": {
                        borderColor: "transparent"
                      },
                      "&.Mui-focused fieldset": {
                        borderColor: B
                      }
                    }
                  },
                  InputProps: {
                    startAdornment: /* @__PURE__ */ r(pr, { position: "start", children: /* @__PURE__ */ r(
                      fr,
                      {
                        sx: {
                          color: u
                        }
                      }
                    ) })
                  }
                }
              )
            ]
          }
        ),
        /* @__PURE__ */ f(
          A,
          {
            direction: "row",
            sx: {
              alignItems: "center",
              gap: 1.5,
              flexShrink: 0
            },
            children: [
              g && /* @__PURE__ */ r(
                ze,
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
                  children: /* @__PURE__ */ r(
                    X,
                    {
                      size: "small",
                      onClick: x,
                      "aria-label": w ? `Notifications, ${w} unread` : "Notifications",
                      sx: { color: u },
                      children: /* @__PURE__ */ r(ur, {})
                    }
                  )
                }
              ),
              g && R && /* @__PURE__ */ r(
                W,
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
              R && /* @__PURE__ */ f(le, { children: [
                /* @__PURE__ */ f(
                  A,
                  {
                    direction: "row",
                    onClick: fe,
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
                        Re,
                        {
                          src: n,
                          sx: { width: 32, height: 32 }
                        }
                      ) : /* @__PURE__ */ r(
                        We,
                        {
                          sx: {
                            width: 32,
                            height: 32,
                            color: u
                          }
                        }
                      ),
                      /* @__PURE__ */ f(
                        C,
                        {
                          sx: {
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "flex-start",
                            minWidth: 0
                          },
                          children: [
                            /* @__PURE__ */ r(
                              K,
                              {
                                variant: "body2",
                                sx: {
                                  color: u,
                                  fontWeight: 500,
                                  lineHeight: 1.2,
                                  overflow: "hidden",
                                  textOverflow: "ellipsis",
                                  whiteSpace: "nowrap",
                                  maxWidth: "150px"
                                },
                                children: d
                              }
                            ),
                            /* @__PURE__ */ r(
                              K,
                              {
                                variant: "caption",
                                sx: {
                                  color: u,
                                  lineHeight: 1.2,
                                  overflow: "hidden",
                                  textOverflow: "ellipsis",
                                  whiteSpace: "nowrap",
                                  maxWidth: "150px"
                                },
                                children: ue(M)
                              }
                            )
                          ]
                        }
                      )
                    ]
                  }
                ),
                /* @__PURE__ */ f(
                  mr,
                  {
                    anchorEl: re,
                    open: de,
                    onClose: j,
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
                        /* @__PURE__ */ r(
                          ye,
                          {
                            onClick: () => H(m),
                            children: "Settings"
                          },
                          "settings"
                        ),
                        /* @__PURE__ */ r(W, {}, "settings-divider")
                      ],
                      /* @__PURE__ */ f(
                        ye,
                        {
                          onClick: () => H(v),
                          sx: {
                            color: "error.main",
                            "&:hover": {
                              color: "error.dark"
                            }
                          },
                          children: [
                            /* @__PURE__ */ r(K, { sx: { flexGrow: 1 }, children: "Logout" }),
                            /* @__PURE__ */ r(ke, { fontSize: "small" })
                          ]
                        }
                      )
                    ]
                  }
                )
              ] }),
              N.length !== 0 && N.map((p) => p.type === "divider" ? /* @__PURE__ */ r(
                W,
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
              ) : p.type === "profile" ? /* @__PURE__ */ f(
                A,
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
                      Re,
                      {
                        src: p.avatar,
                        sx: { width: 32, height: 32 }
                      }
                    ) : /* @__PURE__ */ r(
                      We,
                      {
                        sx: {
                          width: 32,
                          height: 32,
                          color: u
                        }
                      }
                    ),
                    /* @__PURE__ */ f(
                      C,
                      {
                        sx: {
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "flex-start",
                          minWidth: 0
                        },
                        children: [
                          /* @__PURE__ */ r(
                            K,
                            {
                              variant: "body2",
                              sx: {
                                color: u,
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
                            K,
                            {
                              variant: "caption",
                              sx: {
                                color: u,
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
}, Le = ({
  title: e = "",
  message: o = "",
  buttonText: t = "",
  onButtonClick: s,
  show: a = !0
}) => a ? /* @__PURE__ */ r(Sr, { variant: "outlined", sx: { m: 1.5, flexShrink: 0 }, children: /* @__PURE__ */ f(Rr, { children: [
  /* @__PURE__ */ r(yr, { fontSize: "small" }),
  /* @__PURE__ */ r(K, { gutterBottom: !0, sx: { fontWeight: 600 }, children: e }),
  /* @__PURE__ */ r(
    K,
    {
      variant: "body2",
      sx: { mb: 2, color: "text.secondary" },
      children: o
    }
  ),
  /* @__PURE__ */ r(
    je,
    {
      variant: "contained",
      size: "small",
      fullWidth: !0,
      onClick: s,
      children: t
    }
  )
] }) }) : null, Br = 180, Be = 250, Je = (e, o) => {
  var t;
  return o ? e.path && o === e.path ? !0 : ((t = e.subitems) == null ? void 0 : t.some((s) => s.path === o)) ?? !1 : !1;
}, qe = (e, o) => !!(o && e.path === o), kr = ({
  link: e,
  activePath: o,
  onLinkClick: t,
  accentColor: s,
  isSecondary: a,
  surfaceBackgroundColor: d
}) => {
  const i = Ge(), [n, y] = b.useState(null), [h, m] = b.useState(!1), O = b.useRef(
    null
  ), v = b.useRef(null), g = b.useRef(null), w = b.useRef(!1), x = b.useRef(!1), T = b.useId(), D = () => {
    O.current && (clearTimeout(O.current), O.current = null);
  }, l = () => {
    D(), O.current = setTimeout(() => {
      m(!1), O.current = null;
    }, Br);
  }, c = () => {
    D(), m(!0);
  };
  b.useEffect(() => {
    if (!h)
      return;
    const u = (N) => {
      var _;
      N.key === "Escape" && (m(!1), (_ = g.current) == null || _.focus());
    };
    return document.addEventListener("keydown", u), () => document.removeEventListener("keydown", u);
  }, [h]), b.useEffect(() => {
    if (!h || !x.current)
      return;
    const u = globalThis.requestAnimationFrame(() => {
      var _;
      const N = (_ = v.current) == null ? void 0 : _.querySelector(
        '[role="menuitem"]'
      );
      N == null || N.focus(), x.current = !1;
    });
    return () => cancelAnimationFrame(u);
  }, [h]);
  const R = Je(e, o), M = a ? 48 : 44, B = a ? "text.secondary" : s, F = a ? "#01584F" : s, L = /* @__PURE__ */ r(
    X,
    {
      ref: g,
      component: e.path ? "a" : "button",
      href: e.path || void 0,
      "aria-label": e.text,
      onFocus: () => {
        w.current || c();
      },
      onBlur: (u) => {
        var _;
        const N = u.relatedTarget;
        N && ((_ = v.current) != null && _.contains(N)) || l();
      },
      onKeyDown: (u) => {
        u.key === "ArrowDown" && (u.preventDefault(), x.current = !0, c());
      },
      onClick: (u) => {
        u.preventDefault(), u.stopPropagation(), e.path && (t == null || t(e.path));
      },
      "aria-haspopup": "menu",
      "aria-expanded": h,
      "aria-controls": h ? T : void 0,
      "data-testid": `rail-submenu-trigger-${e.text}`,
      sx: {
        width: M,
        height: M,
        color: R ? "#ffffff" : B,
        backgroundColor: R ? F : "transparent",
        borderRadius: R ? "4px" : "50%",
        "&:hover": {
          backgroundColor: R ? F : "action.hover",
          borderRadius: "4px"
        }
      },
      children: e.icon
    }
  );
  return /* @__PURE__ */ f(
    C,
    {
      sx: {
        width: "100%",
        display: "flex",
        justifyContent: "center"
      },
      children: [
        /* @__PURE__ */ r(
          C,
          {
            ref: y,
            "data-testid": `rail-submenu-anchor-${e.text}`,
            sx: { display: "inline-flex" },
            onMouseEnter: () => {
              w.current = !0, c();
            },
            onMouseLeave: () => {
              w.current = !1, l();
            },
            children: /* @__PURE__ */ r(He, { title: e.text, placement: "right", arrow: !0, children: L })
          }
        ),
        /* @__PURE__ */ r(
          Nr,
          {
            open: h && !!n,
            anchorEl: n,
            placement: "right-start",
            modifiers: [{ name: "offset", options: { offset: [8, 0] } }],
            sx: { zIndex: (u) => u.zIndex.modal },
            children: /* @__PURE__ */ r(
              Ir,
              {
                ref: v,
                elevation: 0,
                onMouseEnter: () => {
                  D();
                },
                onMouseLeave: l,
                "data-testid": `rail-submenu-panel-${e.text}`,
                sx: {
                  bgcolor: d,
                  backgroundImage: "none",
                  borderRadius: "4px",
                  border: "1px solid",
                  borderColor: "divider",
                  boxShadow: i.shadows[8],
                  maxWidth: Be,
                  minWidth: 0,
                  py: 0.5,
                  boxSizing: "border-box"
                },
                children: /* @__PURE__ */ r(
                  br,
                  {
                    id: T,
                    dense: !0,
                    autoFocus: !1,
                    role: "menu",
                    sx: {
                      bgcolor: "transparent",
                      py: 0,
                      maxWidth: Be
                    },
                    children: e.subitems.map((u) => /* @__PURE__ */ f(
                      ye,
                      {
                        role: "menuitem",
                        title: u.text,
                        selected: qe(u, o),
                        onClick: (N) => {
                          N.preventDefault(), t == null || t(u.path), m(!1);
                        },
                        sx: {
                          borderRadius: "4px",
                          mx: 0.5,
                          my: 0.125,
                          maxWidth: "100%",
                          overflow: "hidden",
                          color: a ? "text.secondary" : s,
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
                            bgcolor: F,
                            color: "#ffffff",
                            "&:hover": {
                              bgcolor: F
                            }
                          },
                          "&.Mui-focusVisible": {
                            bgcolor: "action.focus"
                          }
                        },
                        children: [
                          u.icon ? /* @__PURE__ */ r(ce, { children: u.icon }) : null,
                          /* @__PURE__ */ r(
                            Y,
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
}, zr = ({
  link: e,
  activePath: o,
  onLinkClick: t,
  accentColor: s,
  isSecondary: a
}) => {
  const d = !!(e.path && o === e.path), i = a ? 48 : 44, n = a ? "text.secondary" : s, y = a ? "#01584F" : s, h = /* @__PURE__ */ r(
    X,
    {
      component: e.path ? "a" : "button",
      href: e.path || void 0,
      "aria-label": e.text,
      onClick: (m) => {
        m.preventDefault(), m.stopPropagation(), e.path && (t == null || t(e.path));
      },
      disabled: !e.path,
      sx: {
        width: i,
        height: i,
        color: d ? "#ffffff" : n,
        backgroundColor: d ? y : "transparent",
        borderRadius: d ? "4px" : "50%",
        "&:hover": {
          backgroundColor: d ? y : "action.hover",
          borderRadius: "4px"
        }
      },
      children: e.icon
    }
  );
  return /* @__PURE__ */ r(He, { title: e.text, placement: "right", arrow: !0, children: h });
}, Gr = ({
  link: e,
  expanded: o,
  onToggle: t,
  activePath: s,
  onLinkClick: a,
  accentColor: d,
  isSecondary: i
}) => {
  const n = Je(e, s), y = i ? "text.secondary" : d, h = i ? "#01584F" : d;
  return /* @__PURE__ */ f(le, { children: [
    /* @__PURE__ */ f(
      ie,
      {
        onClick: t,
        sx: {
          py: 1.5,
          px: 2,
          color: n ? "#ffffff" : y,
          bgcolor: n ? h : "transparent",
          "&:hover": {
            bgcolor: n ? h : "action.hover"
          }
        },
        "data-testid": `drawer-expand-trigger-${e.text}`,
        children: [
          /* @__PURE__ */ r(ce, { sx: { color: "inherit", minWidth: 40 }, children: e.icon }),
          /* @__PURE__ */ r(Y, { primary: e.text }),
          o ? /* @__PURE__ */ r(vr, {}) : /* @__PURE__ */ r(Or, {})
        ]
      }
    ),
    /* @__PURE__ */ r(Tr, { in: o, timeout: "auto", unmountOnExit: !0, children: /* @__PURE__ */ f(C, { component: "nav", "aria-label": e.text, children: [
      e.path ? /* @__PURE__ */ r(
        ie,
        {
          sx: { pl: 4, py: 1 },
          onClick: () => e.path && (a == null ? void 0 : a(e.path)),
          selected: !!(s && s === e.path),
          "data-testid": `drawer-parent-path-${e.text}`,
          children: /* @__PURE__ */ r(Y, { primary: e.text })
        }
      ) : null,
      e.subitems.map((m) => /* @__PURE__ */ f(
        ie,
        {
          sx: { pl: 4, py: 1 },
          onClick: () => a == null ? void 0 : a(m.path),
          selected: qe(m, s),
          children: [
            m.icon ? /* @__PURE__ */ r(ce, { sx: { minWidth: 36 }, children: m.icon }) : null,
            /* @__PURE__ */ r(Y, { primary: m.text })
          ]
        },
        m.path
      ))
    ] }) })
  ] });
}, jr = ({
  link: e,
  activePath: o,
  onLinkClick: t,
  accentColor: s,
  isSecondary: a
}) => {
  const d = !!(e.path && o === e.path), i = a ? "text.secondary" : s, n = a ? "#01584F" : s;
  return /* @__PURE__ */ f(
    ie,
    {
      disabled: !e.path,
      onClick: () => e.path && (t == null ? void 0 : t(e.path)),
      sx: {
        py: 1.5,
        px: 2,
        color: d ? "#ffffff" : i,
        bgcolor: d ? n : "transparent",
        "&:hover": {
          bgcolor: d ? n : "action.hover"
        }
      },
      children: [
        /* @__PURE__ */ r(ce, { sx: { color: "inherit", minWidth: 40 }, children: e.icon }),
        /* @__PURE__ */ r(Y, { primary: e.text })
      ]
    }
  );
}, ae = () => /* @__PURE__ */ r(
  C,
  {
    sx: {
      width: "100%",
      display: "flex",
      justifyContent: "center"
    },
    children: /* @__PURE__ */ r(W, { sx: { width: "60%", borderColor: "divider" } })
  }
), Qe = ({
  variant: e,
  mainLinks: o,
  secondaryLinks: t = [],
  activePath: s,
  onLinkClick: a,
  accentColor: d = "#01584f",
  surfaceBackgroundColor: i
}) => {
  const n = Ge(), y = i ?? n.palette.background.paper, h = (l) => {
    a && a(l);
  }, [m, O] = b.useState({}), [v, g] = b.useState({}), w = (l) => {
    O((c) => ({
      ...c,
      [l]: !c[l]
    }));
  }, x = (l) => {
    g((c) => ({
      ...c,
      [l]: !c[l]
    }));
  }, T = (l, c) => {
    var R;
    return (R = l.subitems) != null && R.length ? /* @__PURE__ */ r(
      kr,
      {
        link: l,
        activePath: s,
        onLinkClick: h,
        accentColor: d,
        isSecondary: c,
        surfaceBackgroundColor: y
      }
    ) : /* @__PURE__ */ r(
      zr,
      {
        link: l,
        activePath: s,
        onLinkClick: h,
        accentColor: d,
        isSecondary: c
      }
    );
  }, D = (l, c, R) => {
    var M;
    if ((M = l.subitems) != null && M.length) {
      const B = R ? !!v[c] : !!m[c];
      return /* @__PURE__ */ r(
        Gr,
        {
          link: l,
          expanded: B,
          onToggle: () => R ? x(c) : w(c),
          activePath: s,
          onLinkClick: h,
          accentColor: d,
          isSecondary: R
        }
      );
    }
    return /* @__PURE__ */ r(
      jr,
      {
        link: l,
        activePath: s,
        onLinkClick: h,
        accentColor: d,
        isSecondary: R
      }
    );
  };
  return e === "drawer" ? /* @__PURE__ */ f(
    A,
    {
      sx: {
        flexGrow: 1,
        width: "100%",
        alignItems: "stretch",
        pt: 2,
        gap: 0
      },
      children: [
        /* @__PURE__ */ r(A, { sx: { width: "100%" }, children: o.map((l, c) => /* @__PURE__ */ f(b.Fragment, { children: [
          D(l, c, !1),
          c < o.length - 1 ? /* @__PURE__ */ r(ae, {}) : null
        ] }, c)) }),
        t.length > 0 ? /* @__PURE__ */ f(le, { children: [
          /* @__PURE__ */ r(
            C,
            {
              sx: {
                width: "100%",
                my: 2,
                display: "flex",
                justifyContent: "center"
              },
              children: /* @__PURE__ */ r(
                W,
                {
                  sx: { width: "60%", borderColor: "divider" }
                }
              )
            }
          ),
          /* @__PURE__ */ r(C, { sx: { mt: "auto", pb: 2 }, children: /* @__PURE__ */ r(A, { sx: { width: "100%" }, children: t.map((l, c) => /* @__PURE__ */ f(b.Fragment, { children: [
            D(l, c, !0),
            c < t.length - 1 ? /* @__PURE__ */ r(ae, {}) : null
          ] }, c)) }) })
        ] }) : null
      ]
    }
  ) : /* @__PURE__ */ f(
    A,
    {
      sx: {
        flexGrow: 1,
        justifyContent: "flex-start",
        alignItems: "center",
        pt: 2,
        gap: 1
      },
      children: [
        o.map((l, c) => /* @__PURE__ */ f(b.Fragment, { children: [
          T(l, !1),
          c < o.length - 1 ? /* @__PURE__ */ r(ae, {}) : null
        ] }, c)),
        t.length > 0 ? /* @__PURE__ */ f(le, { children: [
          /* @__PURE__ */ r(
            C,
            {
              sx: {
                width: "100%",
                my: 2,
                display: "flex",
                justifyContent: "center"
              },
              children: /* @__PURE__ */ r(
                W,
                {
                  sx: { width: "60%", borderColor: "divider" }
                }
              )
            }
          ),
          /* @__PURE__ */ r(C, { sx: { mt: "auto", pb: 2 }, children: /* @__PURE__ */ r(A, { gap: 1, alignItems: "center", children: t.map((l, c) => /* @__PURE__ */ f(b.Fragment, { children: [
            T(l, !0),
            c < t.length - 1 ? /* @__PURE__ */ r(ae, {}) : null
          ] }, c)) }) })
        ] }) : null
      ]
    }
  );
}, Hr = ({
  open: e,
  onClose: o,
  mainLinks: t,
  secondaryLinks: s = [],
  activePath: a,
  onLinkClick: d,
  userName: i = "User Name",
  userAvatar: n,
  onLogout: y,
  showNotifications: h = !1,
  notificationCount: m = 0,
  onNotificationBellClick: O,
  alertProps: v,
  accentColor: g = "#01584f"
}) => /* @__PURE__ */ r(
  Ar,
  {
    anchor: "right",
    open: e,
    onClose: o,
    sx: {
      zIndex: (x) => x.zIndex.drawer + 1,
      "& .MuiDrawer-paper": {
        backgroundImage: "none",
        backgroundColor: "background.paper"
      }
    },
    children: /* @__PURE__ */ f(
      A,
      {
        sx: {
          maxWidth: "70dvw",
          height: "100%"
        },
        children: [
          /* @__PURE__ */ f(A, { direction: "row", sx: { p: 2, pb: 0, gap: 1 }, children: [
            /* @__PURE__ */ f(
              A,
              {
                direction: "row",
                sx: { gap: 1, alignItems: "center", flexGrow: 1, p: 1 },
                children: [
                  /* @__PURE__ */ r(
                    Re,
                    {
                      sizes: "small",
                      alt: i,
                      src: n,
                      sx: { width: 24, height: 24 }
                    }
                  ),
                  /* @__PURE__ */ r(K, { component: "p", variant: "h6", children: i })
                ]
              }
            ),
            h && /* @__PURE__ */ r(
              ze,
              {
                color: "error",
                badgeContent: m,
                invisible: m === 0,
                sx: { "& .MuiBadge-badge": { right: 2, top: 2 } },
                children: /* @__PURE__ */ r(
                  X,
                  {
                    size: "small",
                    onClick: O,
                    "aria-label": "Notifications",
                    children: /* @__PURE__ */ r(_r, {})
                  }
                )
              }
            )
          ] }),
          /* @__PURE__ */ r(W, {}),
          /* @__PURE__ */ f(A, { sx: { flexGrow: 1 }, children: [
            /* @__PURE__ */ r(
              Qe,
              {
                variant: "drawer",
                mainLinks: t,
                secondaryLinks: s,
                activePath: a,
                onLinkClick: (x) => {
                  d == null || d(x), o();
                },
                accentColor: g
              }
            ),
            /* @__PURE__ */ r(W, {})
          ] }),
          (v == null ? void 0 : v.show) && /* @__PURE__ */ r(Le, { ...v }),
          /* @__PURE__ */ r(A, { sx: { p: 2 }, children: /* @__PURE__ */ r(
            je,
            {
              variant: "outlined",
              fullWidth: !0,
              startIcon: /* @__PURE__ */ r(ke, {}),
              onClick: y,
              children: "Logout"
            }
          ) })
        ]
      }
    )
  }
), Ct = ({
  children: e,
  sidebarLinks: o = [],
  secondarySidebarLinks: t = [],
  appName: s = "Dashboard",
  pageName: a = "Home",
  showHeader: d = !0,
  showSidebar: i = !0,
  enableRefreshToken: n = !1,
  activePath: y,
  onLinkClick: h,
  userName: m,
  userEmail: O,
  userAvatar: v,
  onLogout: g,
  onProfileClick: w,
  onAccountClick: x,
  onSettingsClick: T,
  showSettings: D = !0,
  showNotifications: l = !0,
  notificationCount: c = 0,
  NotificationSidebarContent: R,
  showSearchbar: M = !0,
  searchValue: B,
  onSearchChange: F,
  onSearchSubmit: L,
  showProfile: u = !0,
  userRole: N,
  onVerify: _,
  alertProps: k,
  style: ee,
  headerStyles: re,
  sidebarStyles: te,
  contentStyles: de,
  accentColor: z = "#01584f",
  contentBackgroundColor: G = "#f2f9fc",
  navbarBackground: ue = "#ffffff",
  navbarAccentColor: fe = "#000000",
  GlobalChatSidebar: j,
  useChatSidebar: H,
  rightExtraContent: p,
  customNavbar: Oe,
  customNavbarProps: Ye,
  redirectToLogin: oe,
  apiBaseUrl: Te
}) => {
  const Xe = sr(), P = ar(Xe.breakpoints.down("md")), [be, he] = Q(!1), [Ve, ne] = Q(!1), [Ze, er] = Q(!0), [rr, tr] = Q(!1), [Pr, se] = Q(null), pe = H == null ? void 0 : H(), Ie = (pe == null ? void 0 : pe.isOpen) ?? !1, me = Ke(_), Ne = Ke(!1), _e = cr(
    () => Fr(Te),
    [Te]
  );
  Ee(() => {
    me.current = _;
  }, [_]);
  const or = () => {
    he(!be);
  }, nr = () => {
    he(!1);
  }, Ae = (De) => {
    const $ = g(De);
    $ instanceof Promise ? $.then(() => {
      se(null);
    }).catch((Ce) => {
      console.error("Error in logout handler:", Ce), se(null);
    }) : se(null);
  };
  return Ee(() => {
    (() => {
      try {
        const { isAuthenticated: $, error: Ce } = Cr();
        if (!$) {
          console.log("No session found, redirecting to login"), Z(), oe();
          return;
        }
        if (!Ne.current) {
          const { user: J, error: ge } = Mr();
          if (J && !ge) {
            const Me = {
              name: J.name || "",
              email: J.email || "",
              profilePicture: J.profilePicture || "",
              role: J.role || ""
            };
            se(Me), Ne.current = !0, me.current && me.current(Me);
          } else
            ge && console.error("Error getting user data:", ge);
        }
        tr(!0);
      } catch ($) {
        console.error("Error checking session:", $), Z(), oe();
      } finally {
        er(!1);
      }
    })();
  }, [oe]), Ee(() => {
    n && Kr(_e, oe);
  }, [n, _e]), Ze ? /* @__PURE__ */ f(
    q,
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
          ir,
          {
            size: 60,
            thickness: 4,
            sx: { color: z }
          }
        ),
        /* @__PURE__ */ r(q, { sx: { mt: 2, color: "text.secondary" }, children: "Checking session..." })
      ]
    }
  ) : rr ? /* @__PURE__ */ f(
    q,
    {
      sx: {
        display: "flex",
        minHeight: "100vh",
        ...ee
      },
      children: [
        /* @__PURE__ */ r(lr, {}),
        d && /* @__PURE__ */ r(
          Wr,
          {
            appName: s,
            pageName: a,
            onMenuClick: P && i ? or : void 0,
            showMenuButton: P && i,
            headerStyles: re,
            userName: m,
            userEmail: O,
            userAvatar: v,
            onProfileClick: w,
            onAccountClick: x,
            onSettingsClick: T,
            showSettings: D,
            onLogout: Ae,
            showNotifications: l,
            notificationCount: c,
            onNotificationBellClick: l && R ? () => ne(!0) : void 0,
            showSearchbar: M && !Oe,
            searchValue: B,
            onSearchChange: F,
            onSearchSubmit: L,
            showProfile: u,
            userRole: N,
            accentColor: z,
            contentBackgroundColor: G,
            navbarBackground: ue,
            navbarAccentColor: fe,
            rightExtraContent: p,
            customNavbar: Oe,
            customNavbarProps: Ye
          }
        ),
        i && !P && /* @__PURE__ */ r(
          Fe,
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
                bgcolor: G,
                borderRight: "none",
                top: d ? "60px" : 0,
                // Position below header
                height: d ? "calc(100vh - 60px)" : "100vh"
              },
              ...te
            },
            children: /* @__PURE__ */ f(
              q,
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
                    Qe,
                    {
                      variant: "rail",
                      mainLinks: o,
                      secondaryLinks: t,
                      activePath: y,
                      onLinkClick: h,
                      accentColor: z,
                      surfaceBackgroundColor: G
                    }
                  ),
                  (k == null ? void 0 : k.show) && /* @__PURE__ */ r(Le, { ...k })
                ]
              }
            )
          }
        ),
        i && P && /* @__PURE__ */ r(
          Hr,
          {
            open: be,
            onClose: nr,
            mainLinks: o,
            secondaryLinks: t,
            activePath: y,
            onLinkClick: h,
            userName: m,
            userEmail: O,
            userAvatar: v,
            onLogout: Ae,
            onProfileClick: w,
            showNotifications: l,
            notificationCount: c,
            onNotificationBellClick: l && R ? () => {
              he(!1), ne(!0);
            } : void 0,
            alertProps: k,
            accentColor: z
          }
        ),
        /* @__PURE__ */ r(
          q,
          {
            component: "main",
            sx: {
              flexGrow: 1,
              p: 3,
              m: 1,
              width: P ? "100%" : i ? "calc(100% - 80px)" : "100%",
              mt: d ? "60px" : 0,
              // Account for AppNavbar height (60px)
              ml: 0,
              // Offset for sidebar on desktop
              backgroundColor: G,
              // White background for main content
              ...de
            },
            children: /* @__PURE__ */ f(xe, { container: !0, spacing: 3, children: [
              /* @__PURE__ */ r(
                xe,
                {
                  size: {
                    xs: 12,
                    md: Ie && j ? 8.5 : 12
                  },
                  sx: {
                    display: "flex",
                    flexDirection: "column"
                  },
                  children: e
                }
              ),
              Ie && j && /* @__PURE__ */ r(
                xe,
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
                  children: /* @__PURE__ */ r(j, {})
                }
              )
            ] })
          }
        ),
        l && R && /* @__PURE__ */ r(
          Fe,
          {
            anchor: "right",
            open: Ve,
            onClose: () => ne(!1),
            slotProps: {
              paper: { sx: { width: 380, maxWidth: "100vw" } }
            },
            children: /* @__PURE__ */ r(
              R,
              {
                onClose: () => ne(!1)
              }
            )
          }
        )
      ]
    }
  ) : null;
};
export {
  S as AUTH_ERROR_CODES,
  E as AuthError,
  Ct as LumoraWrapper,
  Z as clearAuthTokens,
  Ct as default,
  Dt as getAuthErrorMessage,
  V as getAuthTokens,
  Mr as getCurrentUser,
  Cr as isAuthenticated,
  ve as logAuthError,
  $e as storeAuthTokens
};
