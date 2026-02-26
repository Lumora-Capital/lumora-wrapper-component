import { jsx as r, jsxs as l, Fragment as he } from "react/jsx-runtime";
import { useTheme as $e, useMediaQuery as Qe, Box as z, CircularProgress as Ye, CssBaseline as qe, Drawer as Xe, Grid as le } from "@mui/material";
import * as fe from "react";
import { useState as q, useRef as Ie, useMemo as Ve, useEffect as ce } from "react";
import ke from "axios";
import Ae from "@mui/icons-material/AccountCircleRounded";
import be from "@mui/icons-material/LogoutRounded";
import Ze from "@mui/icons-material/MenuRounded";
import er from "@mui/icons-material/NotificationsOutlined";
import rr from "@mui/icons-material/SearchRounded";
import tr from "@mui/material/AppBar";
import pe from "@mui/material/Avatar";
import De from "@mui/material/Badge";
import U from "@mui/material/Box";
import I from "@mui/material/Divider";
import j from "@mui/material/IconButton";
import or from "@mui/material/InputAdornment";
import nr from "@mui/material/Menu";
import Ce from "@mui/material/MenuItem";
import R from "@mui/material/Stack";
import { styled as ir } from "@mui/material/styles";
import sr from "@mui/material/TextField";
import ar from "@mui/material/Toolbar";
import y from "@mui/material/Typography";
import lr from "@mui/material/useMediaQuery";
import cr from "@mui/material/Card";
import dr from "@mui/material/CardContent";
import Ke from "@mui/material/Button";
import ur from "@mui/icons-material/AutoAwesomeRounded";
import ve from "@mui/material/Tooltip";
import hr from "@mui/icons-material/NotificationsRounded";
import fr from "@mui/material/Drawer";
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
}, g = {
  ACCESS_TOKEN: "lumoraAccessToken",
  REFRESH_TOKEN: "lumoraRefreshToken",
  USER: "lumoraUser"
}, T = {
  ACCESS_TOKEN: "accessToken",
  REFRESH_TOKEN: "refreshToken",
  USER: "user"
}, pr = () => {
  if (!(typeof window > "u" || !window.localStorage))
    try {
      const e = localStorage.getItem(T.ACCESS_TOKEN), o = localStorage.getItem(T.REFRESH_TOKEN), t = localStorage.getItem(T.USER);
      e && !localStorage.getItem(g.ACCESS_TOKEN) && localStorage.setItem(g.ACCESS_TOKEN, e), o && !localStorage.getItem(g.REFRESH_TOKEN) && localStorage.setItem(g.REFRESH_TOKEN, o), t && !localStorage.getItem(g.USER) && localStorage.setItem(g.USER, t), (e || o || t) && (localStorage.removeItem(T.ACCESS_TOKEN), localStorage.removeItem(T.REFRESH_TOKEN), localStorage.removeItem(T.USER));
    } catch (e) {
      console.warn("Failed to migrate legacy localStorage keys:", e);
    }
}, de = (e) => {
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
}, ue = (e, o) => {
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
}, Ue = (e) => {
  try {
    return typeof window > "u" ? (console.warn("localStorage removal attempted on server side"), !1) : window.localStorage ? (window.localStorage.removeItem(e), !0) : (console.warn("localStorage is not available"), !1);
  } catch (o) {
    return o.name !== "SecurityError" && console.warn(`Could not remove localStorage key "${e}"`), !1;
  }
}, H = () => {
  try {
    pr();
    const e = de(g.ACCESS_TOKEN), o = de(g.REFRESH_TOKEN), t = de(g.USER);
    let s = null;
    if (t)
      try {
        s = JSON.parse(t);
      } catch {
        t && t !== "null" && t !== "undefined" && console.warn("Invalid user data in localStorage, clearing:", t.substring(0, 50)), Ue(g.USER);
      }
    return {
      accessToken: e,
      refreshToken: o,
      user: s
    };
  } catch (e) {
    throw e instanceof c ? e : new c("Failed to retrieve authentication tokens", d.UNKNOWN_ERROR, e);
  }
}, gr = () => {
  try {
    const { accessToken: e, refreshToken: o } = H();
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
}, Fe = (e, o, t = null) => {
  try {
    if (!e && !o)
      throw new c("At least one token must be provided", d.TOKEN_INVALID);
    return e && ue(g.ACCESS_TOKEN, e), o && ue(g.REFRESH_TOKEN, o), t && ue(g.USER, JSON.stringify(t)), {
      success: !0,
      error: null
    };
  } catch (s) {
    return console.error("Failed to store authentication tokens:", s), {
      success: !1,
      error: s instanceof c ? s : new c("Failed to store tokens", d.UNKNOWN_ERROR, s)
    };
  }
}, P = () => {
  try {
    return [
      g.ACCESS_TOKEN,
      g.REFRESH_TOKEN,
      g.USER,
      // Also clear legacy keys for complete cleanup
      T.ACCESS_TOKEN,
      T.REFRESH_TOKEN,
      T.USER
    ].map((s) => Ue(s)).every((s) => s) || console.warn("Some tokens could not be removed from localStorage"), {
      success: !0,
      error: null
    };
  } catch (e) {
    return console.error("Failed to clear authentication tokens:", e), {
      success: !1,
      error: e instanceof c ? e : new c("Failed to clear tokens", d.LOGOUT_FAILED, e)
    };
  }
}, mr = () => {
  try {
    const { user: e } = H();
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
}, et = (e) => {
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
}, ge = (e, o = "Unknown") => {
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
}, xr = (e) => {
  if (!e)
    throw new Error("API base URL is required to create axios client");
  const o = ke.create({
    baseURL: e,
    headers: {
      "Content-Type": "application/json"
    }
  });
  let t = !1, s = null, f = [];
  const u = (i, n) => {
    f.forEach(({ resolve: m, reject: O }) => {
      i ? O(i) : n && m(n);
    }), f = [];
  };
  return o.interceptors.request.use(
    (i) => {
      const { accessToken: n } = H();
      return n && i.headers && (i.headers.Authorization = `Bearer ${n}`), i;
    },
    (i) => Promise.reject(i)
  ), o.interceptors.response.use(
    (i) => i,
    async (i) => {
      var N;
      const n = i.config, m = (N = i.response) == null ? void 0 : N.status, O = (n == null ? void 0 : n.url) || "", _ = O.includes("/auth/refresh");
      if (m !== 401 || n._retry || _)
        return Promise.reject(i);
      n._retry = !0;
      const { refreshToken: S } = H();
      if (!S) {
        const h = new Error(
          "No refresh token available for token refresh"
        );
        return ge(h, "AxiosClient - Token Refresh"), P(), typeof window < "u" && (window.location.href = "/login"), Promise.reject(i);
      }
      if (t && s)
        return new Promise((h, p) => {
          f.push({ resolve: h, reject: p });
        }).then((h) => {
          const {
            accessToken: p,
            refreshToken: x
          } = h;
          if (n.headers && (n.headers.Authorization = `Bearer ${p}`), O.includes("/auth/logout"))
            try {
              if (typeof n.data == "string") {
                const E = JSON.parse(
                  n.data || "{}"
                );
                E.refresh_token = x, n.data = JSON.stringify(E);
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
        }).catch((h) => Promise.reject(h));
      t = !0, s = ke.post(
        `${e}/auth/refresh`,
        {
          refresh_token: S
        }
      );
      try {
        const h = await s, { accessToken: p, refreshToken: x } = h.data;
        if (Fe(p, x, null), u(null, {
          accessToken: p,
          refreshToken: x
        }), n.headers && (n.headers.Authorization = `Bearer ${p}`), O.includes("/auth/logout"))
          try {
            if (typeof n.data == "string") {
              const E = JSON.parse(
                n.data || "{}"
              );
              E.refresh_token = x, n.data = JSON.stringify(E);
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
      } catch (h) {
        return ge(
          h,
          "AxiosClient - Token Refresh Failed"
        ), u(h), P(), typeof window < "u" && (window.location.href = "/login"), Promise.reject(h);
      } finally {
        t = !1, s = null;
      }
    }
  ), o;
}, Er = async (e) => {
  const { accessToken: o, refreshToken: t } = H();
  if (o)
    return !0;
  if (t)
    try {
      const s = await e.post("/auth/refresh", {
        refresh_token: t
      });
      if (s.data.success && s.data.accessToken)
        return Fe(s.data.accessToken, s.data.refreshToken || null, null), !0;
    } catch (s) {
      ge(s, "TokenValidator - Refresh Failed");
    }
  return P(), window.location.href = "/login", !1;
}, Sr = ir(ar)({
  width: "100%",
  padding: "8px 16px",
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
  gap: "16px",
  flexShrink: 0
}), wr = ({
  appName: e = "Dashboard",
  pageName: o = "Home",
  onMenuClick: t,
  showMenuButton: s = !0,
  headerStyles: f,
  userName: u = "User Name",
  userEmail: i,
  userAvatar: n,
  onProfileClick: m,
  onAccountClick: O,
  onSettingsClick: _,
  showSettings: S = !0,
  onLogout: N,
  showNotifications: h = !1,
  notificationCount: p = 0,
  showSearchbar: x = !0,
  searchValue: E,
  onSearchChange: F,
  onSearchSubmit: M,
  showProfile: G = !0,
  userRole: X,
  accentColor: V = "#01584f",
  contentBackgroundColor: Z = "#f2f9fc",
  navbarBackground: ee = "#ff0000",
  navbarAccentColor: w = "#000000",
  rightExtraContent: B = [],
  customNavbar: A,
  customNavbarProps: k
}) => {
  const J = lr((a) => a.breakpoints.up("md")), [$, Q] = fe.useState(null), re = !!$, C = (a) => {
    F == null || F(a.target.value);
  }, L = (a) => {
    a.key === "Enter" && M && E && M(E);
  }, te = (a) => a ? a.charAt(0).toUpperCase() + a.slice(1).toLowerCase() : "User", oe = (a) => {
    Q(a.currentTarget);
  }, v = () => {
    Q(null);
  }, b = (a) => {
    a == null || a(), v();
  };
  return /* @__PURE__ */ r(
    tr,
    {
      position: "fixed",
      sx: {
        boxShadow: 0,
        background: ee,
        top: "var(--template-frame-height, 0px)",
        left: 0,
        width: "100%",
        zIndex: 1,
        height: "60px",
        ...f
      },
      children: /* @__PURE__ */ l(Sr, { variant: "dense", sx: { height: "100%" }, children: [
        /* @__PURE__ */ l(
          R,
          {
            direction: "row",
            sx: {
              alignItems: "center",
              gap: 2,
              flexShrink: 0,
              flexGrow: 1
            },
            children: [
              s && !J && /* @__PURE__ */ r(
                j,
                {
                  "aria-label": "menu",
                  onClick: t,
                  sx: {
                    color: w,
                    "&:hover": {
                      backgroundColor: "action.hover"
                    }
                  },
                  children: /* @__PURE__ */ r(Ze, {})
                }
              ),
              /* @__PURE__ */ l(
                R,
                {
                  direction: "row",
                  sx: {
                    alignItems: "center",
                    gap: 1,
                    flexShrink: 0
                  },
                  children: [
                    /* @__PURE__ */ r(
                      y,
                      {
                        variant: "h6",
                        sx: {
                          color: w,
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
              A ? /* @__PURE__ */ r(A, { ...k || {} }) : x && J && /* @__PURE__ */ r(
                sr,
                {
                  placeholder: "Search for deals or documents...",
                  value: E || "",
                  onChange: C,
                  onKeyDown: L,
                  size: "small",
                  sx: {
                    width: "400px",
                    "& .MuiOutlinedInput-root": {
                      backgroundColor: Z,
                      borderRadius: "8px",
                      "& fieldset": {
                        borderColor: "transparent"
                      },
                      "&:hover fieldset": {
                        borderColor: "transparent"
                      },
                      "&.Mui-focused fieldset": {
                        borderColor: V
                      }
                    }
                  },
                  InputProps: {
                    startAdornment: /* @__PURE__ */ r(or, { position: "start", children: /* @__PURE__ */ r(
                      rr,
                      {
                        sx: {
                          color: w
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
          R,
          {
            direction: "row",
            sx: {
              alignItems: "center",
              gap: 1.5,
              flexShrink: 0
            },
            children: [
              h && /* @__PURE__ */ r(
                De,
                {
                  color: "error",
                  variant: "dot",
                  invisible: p === 0,
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
                      sx: { color: w },
                      children: /* @__PURE__ */ r(er, {})
                    }
                  )
                }
              ),
              h && G && /* @__PURE__ */ r(
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
              G && /* @__PURE__ */ l(he, { children: [
                /* @__PURE__ */ l(
                  R,
                  {
                    direction: "row",
                    onClick: oe,
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
                        pe,
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
                            color: w
                          }
                        }
                      ),
                      /* @__PURE__ */ l(
                        U,
                        {
                          sx: {
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "flex-start",
                            minWidth: 0
                          },
                          children: [
                            /* @__PURE__ */ r(
                              y,
                              {
                                variant: "body2",
                                sx: {
                                  color: w,
                                  fontWeight: 500,
                                  lineHeight: 1.2,
                                  overflow: "hidden",
                                  textOverflow: "ellipsis",
                                  whiteSpace: "nowrap",
                                  maxWidth: "150px"
                                },
                                children: u
                              }
                            ),
                            /* @__PURE__ */ r(
                              y,
                              {
                                variant: "caption",
                                sx: {
                                  color: w,
                                  lineHeight: 1.2,
                                  overflow: "hidden",
                                  textOverflow: "ellipsis",
                                  whiteSpace: "nowrap",
                                  maxWidth: "150px"
                                },
                                children: te(X)
                              }
                            )
                          ]
                        }
                      )
                    ]
                  }
                ),
                /* @__PURE__ */ l(
                  nr,
                  {
                    anchorEl: $,
                    open: re,
                    onClose: v,
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
                      S && /* @__PURE__ */ l(he, { children: [
                        /* @__PURE__ */ r(
                          Ce,
                          {
                            onClick: () => b(_),
                            children: "Settings"
                          }
                        ),
                        /* @__PURE__ */ r(I, {})
                      ] }),
                      /* @__PURE__ */ l(
                        Ce,
                        {
                          onClick: () => b(N),
                          sx: {
                            color: "error.main",
                            "&:hover": {
                              color: "error.dark"
                            }
                          },
                          children: [
                            /* @__PURE__ */ r(y, { sx: { flexGrow: 1 }, children: "Logout" }),
                            /* @__PURE__ */ r(be, { fontSize: "small" })
                          ]
                        }
                      )
                    ]
                  }
                )
              ] }),
              B.length !== 0 && B.map((a) => a.type === "divider" ? /* @__PURE__ */ r(
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
              ) : a.type === "profile" ? /* @__PURE__ */ l(
                R,
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
                      pe,
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
                          color: w
                        }
                      }
                    ),
                    /* @__PURE__ */ l(
                      U,
                      {
                        sx: {
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "flex-start",
                          minWidth: 0
                        },
                        children: [
                          /* @__PURE__ */ r(
                            y,
                            {
                              variant: "body2",
                              sx: {
                                color: w,
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
                            y,
                            {
                              variant: "caption",
                              sx: {
                                color: w,
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
                }
              ) : null)
            ]
          }
        )
      ] })
    }
  );
}, Me = ({
  title: e = "",
  message: o = "",
  buttonText: t = "",
  onButtonClick: s,
  show: f = !0
}) => f ? /* @__PURE__ */ r(cr, { variant: "outlined", sx: { m: 1.5, flexShrink: 0 }, children: /* @__PURE__ */ l(dr, { children: [
  /* @__PURE__ */ r(ur, { fontSize: "small" }),
  /* @__PURE__ */ r(y, { gutterBottom: !0, sx: { fontWeight: 600 }, children: e }),
  /* @__PURE__ */ r(
    y,
    {
      variant: "body2",
      sx: { mb: 2, color: "text.secondary" },
      children: o
    }
  ),
  /* @__PURE__ */ r(
    Ke,
    {
      variant: "contained",
      size: "small",
      fullWidth: !0,
      onClick: s,
      children: t
    }
  )
] }) }) : null, Ge = ({
  mainLinks: e,
  secondaryLinks: o = [],
  activePath: t,
  onLinkClick: s,
  accentColor: f = "#01584f"
}) => {
  const u = (i) => {
    s && s(i);
  };
  return /* @__PURE__ */ l(
    R,
    {
      sx: {
        flexGrow: 1,
        justifyContent: "flex-start",
        alignItems: "center",
        pt: 2,
        gap: 1
      },
      children: [
        e.map((i, n) => /* @__PURE__ */ l(fe.Fragment, { children: [
          /* @__PURE__ */ r(ve, { title: i.text, placement: "right", arrow: !0, children: /* @__PURE__ */ r(
            j,
            {
              component: "a",
              href: i.path,
              onClick: (m) => {
                m.preventDefault(), m.stopPropagation(), u(i.path);
              },
              sx: {
                width: 44,
                height: 44,
                color: t === i.path ? "#ffffff" : f,
                backgroundColor: t === i.path ? f : "transparent",
                borderRadius: t === i.path ? "4px" : "50%",
                "&:hover": {
                  backgroundColor: t === i.path ? f : "action.hover",
                  borderRadius: "4px"
                }
              },
              children: i.icon
            }
          ) }),
          n < e.length - 1 && /* @__PURE__ */ r(
            U,
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
        o.length > 0 && /* @__PURE__ */ l(he, { children: [
          /* @__PURE__ */ r(
            U,
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
          /* @__PURE__ */ r(U, { sx: { mt: "auto", pb: 2 }, children: /* @__PURE__ */ r(R, { gap: 1, alignItems: "center", children: o.map((i, n) => /* @__PURE__ */ l(fe.Fragment, { children: [
            /* @__PURE__ */ r(
              ve,
              {
                title: i.text,
                placement: "right",
                arrow: !0,
                children: /* @__PURE__ */ r(
                  j,
                  {
                    component: "a",
                    href: i.path,
                    onClick: (m) => {
                      m.preventDefault(), m.stopPropagation(), u(i.path);
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
              U,
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
}, Rr = ({
  open: e,
  onClose: o,
  mainLinks: t,
  secondaryLinks: s = [],
  activePath: f,
  onLinkClick: u,
  userName: i = "User Name",
  userAvatar: n,
  onLogout: m,
  showNotifications: O = !1,
  notificationCount: _ = 0,
  alertProps: S,
  accentColor: N = "#01584f"
}) => /* @__PURE__ */ r(
  fr,
  {
    anchor: "right",
    open: e,
    onClose: o,
    sx: {
      zIndex: (p) => p.zIndex.drawer + 1,
      "& .MuiDrawer-paper": {
        backgroundImage: "none",
        backgroundColor: "background.paper"
      }
    },
    children: /* @__PURE__ */ l(
      R,
      {
        sx: {
          maxWidth: "70dvw",
          height: "100%"
        },
        children: [
          /* @__PURE__ */ l(R, { direction: "row", sx: { p: 2, pb: 0, gap: 1 }, children: [
            /* @__PURE__ */ l(
              R,
              {
                direction: "row",
                sx: { gap: 1, alignItems: "center", flexGrow: 1, p: 1 },
                children: [
                  /* @__PURE__ */ r(
                    pe,
                    {
                      sizes: "small",
                      alt: i,
                      src: n,
                      sx: { width: 24, height: 24 }
                    }
                  ),
                  /* @__PURE__ */ r(y, { component: "p", variant: "h6", children: i })
                ]
              }
            ),
            O && /* @__PURE__ */ r(
              De,
              {
                color: "error",
                variant: "dot",
                invisible: _ === 0,
                sx: { "& .MuiBadge-badge": { right: 2, top: 2 } },
                children: /* @__PURE__ */ r(j, { size: "small", children: /* @__PURE__ */ r(hr, {}) })
              }
            )
          ] }),
          /* @__PURE__ */ r(I, {}),
          /* @__PURE__ */ l(R, { sx: { flexGrow: 1 }, children: [
            /* @__PURE__ */ r(
              Ge,
              {
                mainLinks: t,
                secondaryLinks: s,
                activePath: f,
                onLinkClick: (p) => {
                  u == null || u(p), o();
                },
                accentColor: N
              }
            ),
            /* @__PURE__ */ r(I, {})
          ] }),
          (S == null ? void 0 : S.show) && /* @__PURE__ */ r(Me, { ...S }),
          /* @__PURE__ */ r(R, { sx: { p: 2 }, children: /* @__PURE__ */ r(
            Ke,
            {
              variant: "outlined",
              fullWidth: !0,
              startIcon: /* @__PURE__ */ r(be, {}),
              onClick: m,
              children: "Logout"
            }
          ) })
        ]
      }
    )
  }
), rt = ({
  children: e,
  sidebarLinks: o = [],
  secondarySidebarLinks: t = [],
  appName: s = "Dashboard",
  pageName: f = "Home",
  showHeader: u = !0,
  showSidebar: i = !0,
  enableRefreshToken: n = !1,
  activePath: m,
  onLinkClick: O,
  userName: _,
  userEmail: S,
  userAvatar: N,
  onLogout: h,
  onProfileClick: p,
  onAccountClick: x,
  onSettingsClick: E,
  showSettings: F = !0,
  showNotifications: M = !0,
  notificationCount: G = 0,
  showSearchbar: X = !0,
  searchValue: V,
  onSearchChange: Z,
  onSearchSubmit: ee,
  showProfile: w = !0,
  userRole: B,
  onVerify: A,
  alertProps: k,
  style: J,
  headerStyles: $,
  sidebarStyles: Q,
  contentStyles: re,
  accentColor: C = "#01584f",
  contentBackgroundColor: L = "#f2f9fc",
  navbarBackground: te = "#ffffff",
  navbarAccentColor: oe = "#000000",
  GlobalChatSidebar: v,
  useChatSidebar: b,
  rightExtraContent: a,
  customNavbar: me,
  customNavbarProps: Le,
  redirectToLogin: ne,
  apiBaseUrl: xe
}) => {
  const We = $e(), D = Qe(We.breakpoints.down("md")), [Ee, Se] = q(!1), [ze, je] = q(!0), [He, Pe] = q(!1), [Or, Y] = q(null), ie = b == null ? void 0 : b(), we = (ie == null ? void 0 : ie.isOpen) ?? !1, se = Ie(A), Re = Ie(!1), Oe = Ve(() => xr(xe), [xe]);
  ce(() => {
    se.current = A;
  }, [A]);
  const Be = () => {
    Se(!Ee);
  }, Je = () => {
    Se(!1);
  }, Ne = (ye) => {
    const K = h(ye);
    K instanceof Promise ? K.then(() => {
      Y(null);
    }).catch((Te) => {
      console.error("Error in logout handler:", Te), Y(null);
    }) : Y(null);
  };
  return ce(() => {
    (() => {
      try {
        const { isAuthenticated: K, error: Te } = gr();
        if (!K) {
          console.log("No session found, redirecting to login"), P(), ne();
          return;
        }
        if (!Re.current) {
          const { user: W, error: ae } = mr();
          if (W && !ae) {
            const _e = {
              name: W.name || "",
              email: W.email || "",
              profilePicture: W.profilePicture || "",
              role: W.role || ""
            };
            Y(_e), Re.current = !0, se.current && se.current(_e);
          } else
            ae && console.error("Error getting user data:", ae);
        }
        Pe(!0);
      } catch (K) {
        console.error("Error checking session:", K), P(), ne();
      } finally {
        je(!1);
      }
    })();
  }, [ne]), ce(() => {
    n && Er(Oe);
  }, [n, Oe]), ze ? /* @__PURE__ */ l(
    z,
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
        /* @__PURE__ */ r(Ye, { size: 60, thickness: 4, sx: { color: C } }),
        /* @__PURE__ */ r(z, { sx: { mt: 2, color: "text.secondary" }, children: "Checking session..." })
      ]
    }
  ) : He ? /* @__PURE__ */ l(
    z,
    {
      sx: {
        display: "flex",
        minHeight: "100vh",
        ...J
      },
      children: [
        /* @__PURE__ */ r(qe, {}),
        u && /* @__PURE__ */ r(
          wr,
          {
            appName: s,
            pageName: f,
            onMenuClick: D && i ? Be : void 0,
            showMenuButton: D && i,
            headerStyles: $,
            userName: _,
            userEmail: S,
            userAvatar: N,
            onProfileClick: p,
            onAccountClick: x,
            onSettingsClick: E,
            showSettings: F,
            onLogout: Ne,
            showNotifications: M,
            notificationCount: G,
            showSearchbar: X && !me,
            searchValue: V,
            onSearchChange: Z,
            onSearchSubmit: ee,
            showProfile: w,
            userRole: B,
            accentColor: C,
            contentBackgroundColor: L,
            navbarBackground: te,
            navbarAccentColor: oe,
            rightExtraContent: a,
            customNavbar: me,
            customNavbarProps: Le
          }
        ),
        i && !D && /* @__PURE__ */ r(
          Xe,
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
                top: u ? "60px" : 0,
                // Position below header
                height: u ? "calc(100vh - 60px)" : "100vh"
              },
              ...Q
            },
            children: /* @__PURE__ */ l(
              z,
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
                    Ge,
                    {
                      mainLinks: o,
                      secondaryLinks: t,
                      activePath: m,
                      onLinkClick: O,
                      accentColor: C
                    }
                  ),
                  (k == null ? void 0 : k.show) && /* @__PURE__ */ r(Me, { ...k })
                ]
              }
            )
          }
        ),
        i && D && /* @__PURE__ */ r(
          Rr,
          {
            open: Ee,
            onClose: Je,
            mainLinks: o,
            secondaryLinks: t,
            activePath: m,
            onLinkClick: O,
            userName: _,
            userEmail: S,
            userAvatar: N,
            onLogout: Ne,
            onProfileClick: p,
            showNotifications: M,
            notificationCount: G,
            alertProps: k,
            accentColor: C
          }
        ),
        /* @__PURE__ */ r(
          z,
          {
            component: "main",
            sx: {
              flexGrow: 1,
              p: 3,
              m: 1,
              width: D ? "100%" : i ? "calc(100% - 80px)" : "100%",
              mt: u ? "60px" : 0,
              // Account for AppNavbar height (60px)
              ml: 0,
              // Offset for sidebar on desktop
              backgroundColor: L,
              // White background for main content
              ...re
            },
            children: /* @__PURE__ */ l(le, { container: !0, spacing: 3, children: [
              /* @__PURE__ */ r(
                le,
                {
                  size: {
                    xs: 12,
                    md: we && v ? 8.5 : 12
                  },
                  sx: {
                    display: "flex",
                    flexDirection: "column"
                  },
                  children: e
                }
              ),
              we && v && /* @__PURE__ */ r(
                le,
                {
                  size: { xs: 12, md: 3.5 },
                  sx: {
                    display: "flex",
                    flexDirection: "column",
                    position: { xs: "static", md: "sticky" },
                    top: {
                      xs: "auto",
                      md: u ? "60px" : "0px"
                    },
                    // Stick below navbar
                    alignSelf: "flex-start",
                    height: {
                      xs: "auto",
                      md: u ? "calc(100vh - 60px - 24px - 8px)" : "calc(100vh - 24px - 8px)"
                    },
                    // Viewport - navbar - top padding - top margin
                    maxHeight: {
                      xs: "none",
                      md: u ? "calc(100vh - 60px - 24px - 8px)" : "calc(100vh - 24px - 8px)"
                    }
                    // Viewport - navbar - top padding - top margin
                  },
                  children: /* @__PURE__ */ r(v, {})
                }
              )
            ] })
          }
        )
      ]
    }
  ) : null;
};
export {
  d as AUTH_ERROR_CODES,
  c as AuthError,
  rt as LumoraWrapper,
  P as clearAuthTokens,
  rt as default,
  et as getAuthErrorMessage,
  H as getAuthTokens,
  mr as getCurrentUser,
  gr as isAuthenticated,
  ge as logAuthError,
  Fe as storeAuthTokens
};
