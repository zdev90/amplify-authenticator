/*! Version: 1.0.14 */
!function(e, a) {
  if ("object" == typeof exports && "object" == typeof module)
      module.exports = a();
  else if ("function" == typeof define && define.amd)
      define([], a);
  else {
      var n = a();
      for (var i in n)
          ("object" == typeof exports ? exports : e)[i] = n[i]
  }
}(window, (function() {
  return function(e) {
      var a = {};
      function n(i) {
          if (a[i])
              return a[i].exports;
          var t = a[i] = {
              i: i,
              l: !1,
              exports: {}
          };
          return e[i].call(t.exports, t, t.exports, n),
          t.l = !0,
          t.exports
      }
      return n.m = e,
      n.c = a,
      n.d = function(e, a, i) {
          n.o(e, a) || Object.defineProperty(e, a, {
              enumerable: !0,
              get: i
          })
      }
      ,
      n.r = function(e) {
          "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
              value: "Module"
          }),
          Object.defineProperty(e, "__esModule", {
              value: !0
          })
      }
      ,
      n.t = function(e, a) {
          if (1 & a && (e = n(e)),
          8 & a)
              return e;
          if (4 & a && "object" == typeof e && e && e.__esModule)
              return e;
          var i = Object.create(null);
          if (n.r(i),
          Object.defineProperty(i, "default", {
              enumerable: !0,
              value: e
          }),
          2 & a && "string" != typeof e)
              for (var t in e)
                  n.d(i, t, function(a) {
                      return e[a]
                  }
                  .bind(null, t));
          return i
      }
      ,
      n.n = function(e) {
          var a = e && e.__esModule ? function() {
              return e.default
          }
          : function() {
              return e
          }
          ;
          return n.d(a, "a", a),
          a
      }
      ,
      n.o = function(e, a) {
          return Object.prototype.hasOwnProperty.call(e, a)
      }
      ,
      n.p = "",
      n(n.s = 11)
  }([function(e, a, n) {
      "use strict";
      var i = this && this.__assign || function() {
          return (i = Object.assign || function(e) {
              for (var a, n = 1, i = arguments.length; n < i; n++)
                  for (var t in a = arguments[n])
                      Object.prototype.hasOwnProperty.call(a, t) && (e[t] = a[t]);
              return e
          }
          ).apply(this, arguments)
      }
      ;
      function t(e, a, n, i) {
          var t;
          if ("svg" === n || function e(a) {
              return !!a && ("svg" === a.tagName || e(a.parentNode))
          }(a))
              t = e.createElementNS("http://www.w3.org/2000/svg", n);
          else {
              if ("string" != typeof n)
                  throw Error("Unrecognized type " + n);
              t = e.createElement(n)
          }
          return function(e, a) {
              if (null === a)
                  return;
              Object.keys(a).forEach((function(n) {
                  if ("style" === n)
                      (Object.keys(a.style) || []).forEach((function(n) {
                          e.style[n] = a.style[n]
                      }
                      ));
                  else if ("events" === n) {
                      var i = a.events;
                      Object.keys(i).forEach((function(a) {
                          e[a] = i[a]
                      }
                      ))
                  } else {
                      var t = a[n];
                      e.setAttribute(n, t)
                  }
              }
              ))
          }(t, i),
          t
      }
      Object.defineProperty(a, "__esModule", {
          value: !0
      }),
      a.render = a.act = void 0,
      a.act = function(e, a) {
          for (var n = [], t = 2; t < arguments.length; t++)
              n[t - 2] = arguments[t];
          if ("string" == typeof e)
              return {
                  type: e,
                  props: a,
                  children: n
              };
          if ("function" == typeof e)
              return e(a, n);
          if (e.type)
              return {
                  type: e.type,
                  props: i(i({}, e.props), a),
                  children: n
              };
          throw Error("Unsupported tag type " + e)
      }
      ,
      a.render = function e(a, n, i, o) {
          void 0 === i && (i = document);
          var r = n.type
            , c = n.props
            , s = n.children
            , l = t(i, a, r, c);
          return s && s.length > 0 && s.forEach((function(a) {
              if ("string" == typeof a)
                  l.appendChild(i.createTextNode(a));
              else if ("number" == typeof a)
                  l.appendChild(i.createTextNode(s.toString()));
              else {
                  if (null === a)
                      throw Error("Unsupported child type " + a);
                  e(l, a, i, !0)
              }
          }
          )),
          o ? a.appendChild(l) : a.insertBefore(l, a.firstChild)
      }
  }
  , function(e, a, n) {
      "use strict";
      Object.defineProperty(a, "__esModule", {
          value: !0
      }),
      a.ERROR_MESSAGE_MODAL_TABTRAP_ID = a.TABTRAP_ID = a.ERROR_MESSAGE_MODAL_DISMISS_BTN_ID = a.CUSTOMIZE_SAVE_BTN_ID = a.CUSTOMIZE_CANCEL_BTN_ID = a.ERROR_MESSAGE_MODAL_ID = a.CUSTOMIZE_ID = a.BANNER_ACCEPT_BTN_ID = a.BANNER_CONTINUE_BTN_ID = a.BANNER_CUSTOMIZE_BTN_ID = a.BANNER_ID = a.APP_ID = a.CONTAINER_ID = void 0,
      a.CONTAINER_ID = "awsccc-sb-ux-c",
      a.APP_ID = "awsccc-sb-a",
      a.BANNER_ID = "awsccc-cb",
      a.BANNER_CUSTOMIZE_BTN_ID = "awsccc-cb-btn-customize",
      a.BANNER_CONTINUE_BTN_ID = "awsccc-cb-btn-continue",
      a.BANNER_ACCEPT_BTN_ID = "awsccc-cb-btn-accept",
      a.CUSTOMIZE_ID = "awsccc-cs",
      a.ERROR_MESSAGE_MODAL_ID = "awsccc-em-modal",
      a.CUSTOMIZE_CANCEL_BTN_ID = "awsccc-cs-btn-cancel",
      a.CUSTOMIZE_SAVE_BTN_ID = "awsccc-cs-btn-save",
      a.ERROR_MESSAGE_MODAL_DISMISS_BTN_ID = "awsccc-em-btn-dismiss",
      a.TABTRAP_ID = "awsccc-cs-tabtrap",
      a.ERROR_MESSAGE_MODAL_TABTRAP_ID = "awsccc-em-tabtrap"
  }
  , function(e, a, n) {
      "use strict";
      var i = this && this.__assign || function() {
          return (i = Object.assign || function(e) {
              for (var a, n = 1, i = arguments.length; n < i; n++)
                  for (var t in a = arguments[n])
                      Object.prototype.hasOwnProperty.call(a, t) && (e[t] = a[t]);
              return e
          }
          ).apply(this, arguments)
      }
      ;
      Object.defineProperty(a, "__esModule", {
          value: !0
      });
      var t = n(0);
      n(15),
      a.default = function(e) {
          var a = e.dataId
            , n = e.variant
            , o = e.text
            , r = e.events
            , c = e.props
            , s = void 0 === c ? {} : c;
          return t.act("button", i({
              tabindex: "0",
              "data-id": a,
              type: "submit",
              events: r || {}
          }, s, {
              class: "awsccc-u-btn " + ("primary" === n ? "awsccc-u-btn-primary" : "awsccc-u-btn-secondary")
          }), t.act("span", null, o))
      }
  }
  , function(e, a, n) {
      "use strict";
      Object.defineProperty(a, "__esModule", {
          value: !0
      }),
      a.CONSENT_COOKIE_CHANGED_EVENT = a.DEFAULT_TANGERINEBOX_DEV_DOMAIN = a.DEFAULT_DOMAIN = a.DEFAULT_LANGUAGE = a.ALL_ALLOWED = a.DEFAULT_COOKIE = a.DEFAULT_COOKIE_AGE = a.COOKIE_VERSION = void 0,
      a.COOKIE_VERSION = "1",
      a.DEFAULT_COOKIE_AGE = 31536e3,
      a.DEFAULT_COOKIE = {
          essential: !0,
          functional: !1,
          performance: !1,
          advertising: !1
      },
      a.ALL_ALLOWED = {
          essential: !0,
          functional: !0,
          performance: !0,
          advertising: !0
      },
      a.DEFAULT_LANGUAGE = "en-us",
      a.DEFAULT_DOMAIN = ".aws.amazon.com",
      a.DEFAULT_TANGERINEBOX_DEV_DOMAIN = ".aws-dev.amazon.com",
      a.CONSENT_COOKIE_CHANGED_EVENT = "cookie-consent-changed"
  }
  , function(e, a, n) {
      "use strict";
      var i = this && this.__assign || function() {
          return (i = Object.assign || function(e) {
              for (var a, n = 1, i = arguments.length; n < i; n++)
                  for (var t in a = arguments[n])
                      Object.prototype.hasOwnProperty.call(a, t) && (e[t] = a[t]);
              return e
          }
          ).apply(this, arguments)
      }
      ;
      Object.defineProperty(a, "__esModule", {
          value: !0
      }),
      a.setConsentCookie = a.getId = a.getConsentCookie = a.validateConfiguration = void 0;
      var t = n(8)
        , o = n(3);
      function r(e, a) {
          var n = e.domain
            , i = void 0 === n ? o.DEFAULT_DOMAIN : n
            , t = e.log
            , r = function(e) {
              return "." === e.charAt(0) && (e = e.slice(1)),
              e
          }(i)
            , c = window.location.hostname;
          return !!c.endsWith(r) || ((t ? t("error") : function() {}
          )("domainMismatch", {
              detail: "Domain mismatch",
              source: a,
              configuredDomain: i,
              actualDomain: c
          }),
          console.error("Shortbread failed to set user's cookie preference because the domain name that was passed in does not match the hostname of the application. \n        Configured domain: " + i + ".\n        Actual domain: " + c + ".\n        As a fallback, Shortbread is only allowing 'essential' cookies to be used."),
          !1)
      }
      function c(e, a) {
          var n, i, t = e.match("(^|;)\\s*awsccc\\s*=\\s*([^;]+)"), o = a ? a("error") : function() {}
          ;
          if (t && t.length > 0)
              try {
                  var r = JSON.parse(atob(t[t.length - 1]));
                  return 1 === (i = r).e && "number" == typeof i.p && "number" == typeof i.f && "number" == typeof i.a && "string" == typeof i.i && "string" == typeof i.v ? {
                      essential: 1 === (n = r).e,
                      performance: 1 === n.p,
                      functional: 1 === n.f,
                      advertising: 1 === n.a,
                      id: n.i,
                      version: n.v
                  } : void o("getCookie", {
                      detail: "Cookie format is not valid",
                      cookie: r
                  })
              } catch (e) {
                  return void o("getCookie", {
                      detail: "Error parsing cookie",
                      cookie: t[t.length - 1]
                  })
              }
      }
      function s(e) {
          void 0 === e && (e = function() {
              return document.cookie
          }
          );
          var a = c(e());
          if (a && a.id)
              return a.id
      }
      function l(e) {
          document.cookie = e
      }
      a.validateConfiguration = r,
      a.getConsentCookie = function(e, a) {
          void 0 === e && (e = function() {
              return document.cookie
          }
          );
          var n = c(e(), a);
          if (n)
              return {
                  essential: n.essential,
                  performance: n.performance,
                  functional: n.functional,
                  advertising: n.advertising
              }
      }
      ,
      a.getId = s,
      a.setConsentCookie = function(e, a, n, c, u, d, p, k, m) {
          void 0 === a && (a = o.DEFAULT_DOMAIN),
          void 0 === n && (n = o.DEFAULT_COOKIE_AGE),
          void 0 === c && (c = t.default),
          void 0 === u && (u = l),
          void 0 === d && (d = r),
          d({
              domain: a,
              log: p
          }, "customize");
          var b, h = s() || c(p, k, m), f = i(i({}, e), {
              id: h,
              version: o.COOKIE_VERSION
          }), g = {
              e: (b = f).essential ? 1 : 0,
              p: b.performance ? 1 : 0,
              f: b.functional ? 1 : 0,
              a: b.advertising ? 1 : 0,
              i: b.id,
              v: b.version
          };
          // Doesn't accept localhost domain name in cookies. Removed domain setting below for local test.
          return u("awsccc=" + btoa(JSON.stringify(g)) + "; path=/; max-age=" + n + "; secure=true; SameSite=Lax"),
          f
      }
  }
  , function(e, a, n) {
      "use strict";
      Object.defineProperty(a, "__esModule", {
          value: !0
      }),
      a.isChecked = void 0;
      var i = n(0)
        , t = n(14)
        , o = n(17)
        , r = n(6)
        , c = n(1)
        , s = n(7);
      n(31);
      var l = n(32)
        , u = n(3)
        , d = n(33)
        , p = n(34)
        , k = n(4);
      function m(e) {
          return "" === document.querySelector("label[data-id=awsccc-u-cb-" + e + "-label] input").getAttribute("checked")
      }
      function b(e) {
          var a = s.localizationDictionary[e.language]
            , n = s.localizationRtl.indexOf(e.language) > -1 ? "awsccc-Rtl" : "";
          function b() {
              return document.querySelector("div[data-id=" + c.BANNER_ID + "]")
          }
          function h() {
              return document.querySelector("div[data-id=" + c.CUSTOMIZE_ID + "]")
          }
          function f() {
              return document.querySelector("div[data-id=" + c.ERROR_MESSAGE_MODAL_ID + "]")
          }
          function g(e, a) {
              var n = document.querySelector("label[data-id=awsccc-u-cb-" + e + "-label]")
                , i = n.classList
                , t = n.querySelector("input");
              a ? (t.setAttribute("checked", ""),
              i.add("awsccc-u-cb-checkbox-active")) : (i.remove("awsccc-u-cb-checkbox-active"),
              t.removeAttribute("checked")),
              t.setAttribute("aria-checked", "" + a)
          }
          var v = function(e) {
              var a = e.event
                , n = e.category;
              "checkbox" !== a.target.getAttribute("type") && "awsccc-cs-s-title" !== a.target.getAttribute("class") || g(n, !m(n))
          }
            , z = function(a) {
              return function(n, i) {
                  var t = b().querySelector("div[data-id=awsccc-cb-tabstart]");
                  document.querySelector("div[data-id=" + c.CUSTOMIZE_ID + "]").style.display = "none",
                  b().style.display = "none",
                  t.setAttribute("tabindex", "-1"),
                  document.body.classList.remove("awsccc-cs-modal-open"),
                  e.handleValidation({
                      domain: e.domain
                  }, "saveBtnClick") ? (e.onSaveConsent(n),
                  e.log("info")(a, {
                      detail: "Save Consent Clicked",
                      source: i,
                      cookie: e.getConsentCookie(),
                      uuid: k.getId()
                  })) : E()
              }
          }
            , y = function(a) {
              return function(n) {
                  e.log("info")(a, {
                      detail: "Customize Modal Cancel Button Clicked",
                      source: n,
                      cookie: e.getConsentCookie(),
                      uuid: k.getId()
                  }),
                  w()
              }
          }
            , C = function() {
              O()
          }
            , A = function(e) {
              "Escape" === e.key && y("cancel")
          }
            , S = function() {
              return e.getConsentCookie() || u.DEFAULT_COOKIE
          }
            , _ = function(a) {
              var n;
              n = S(),
              r.COOKIE_CATEGORIES.filter((function(e) {
                  return e !== r.ESSENTIAL
              }
              )).forEach((function(e) {
                  g(e, n[e])
              }
              )),
              h().addEventListener("keydown", A),
              h().style.display = "block",
              document.body.classList.add("awsccc-cs-modal-open");
              var i = document.querySelectorAll("div[data-id=" + c.TABTRAP_ID + "]");
              l.convertToArray(i).forEach((function(e, a) {
                  0 === a && e.focus({
                      preventScroll: !0
                  }),
                  e.setAttribute("tabindex", "0")
              }
              )),
              e.log("info")("customizeCookies", {
                  detail: "Customize Consent Clicked",
                  source: a,
                  cookie: e.getConsentCookie(),
                  uuid: k.getId()
              })
          }
            , E = function() {
              f().addEventListener("keydown", A),
              f().style.display = "block",
              document.body.classList.add("awsccc-em-modal-open");
              var e = document.querySelectorAll("div[data-id=" + c.ERROR_MESSAGE_MODAL_TABTRAP_ID + "]");
              l.convertToArray(e).forEach((function(e, a) {
                  e.setAttribute("tabindex", "0")
              }
              ))
          }
            , w = function() {
              h().removeEventListener("keydown", A),
              h().style.display = "none",
              document.body.classList.remove("awsccc-cs-modal-open");
              var a = h().querySelectorAll("div[data-id=" + c.TABTRAP_ID + "]");
              (l.convertToArray(a).forEach((function(e) {
                  e.setAttribute("tabindex", "-1")
              }
              )),
              "block" === b().style.display) && b().querySelector("div[data-id=awsccc-cb-tabstart]").focus({
                  preventScroll: !0
              });
              e.onModalClose && e.onModalClose()
          }
            , O = function() {
              f().removeEventListener("keydown", A),
              f().style.display = "none",
              document.body.classList.remove("awsccc-em-modal-open");
              var e = h().querySelectorAll("div[data-id=" + c.ERROR_MESSAGE_MODAL_TABTRAP_ID + "]");
              l.convertToArray(e).forEach((function(e) {
                  e.setAttribute("tabindex", "-1")
              }
              ))
          };
          return d.default((function() {
              document.querySelector("#" + c.CONTAINER_ID) || i.render(e.parent || document.body, i.act("div", {
                  id: c.CONTAINER_ID
              }, i.act("div", {
                  id: c.APP_ID,
                  class: n
              }, i.act(t.default, {
                  showConsentSelector: _,
                  handleSaveClick: z("acceptAll"),
                  localizedText: a.consentBanner,
                  hasConsoleNavFooter: e.hasConsoleNavFooter,
                  runtimeEnvironment: e.runtimeEnvironment
              }), i.act(o.default, {
                  consentState: S(),
                  handleSaveClick: z("customize"),
                  handleCancelClick: y("cancel"),
                  handleCheckboxToggle: v,
                  localizedText: a.consentSelector,
                  closeConsentSelector: w,
                  darkModeEnabled: e.hasConsoleNavFooter,
                  runtimeEnvironment: e.runtimeEnvironment
              }), i.act(p.default, {
                  darkModeEnabled: e.hasConsoleNavFooter,
                  handleDismissClick: C,
                  localizedText: a.errorMessage
              }))))
          }
          )),
          {
              showConsentSelector: function(e) {
                  d.default((function() {
                      _(e)
                  }
                  ))
              },
              showBanner: function(e) {
                  d.default((function() {
                      var a;
                      a = b().querySelector("div[data-id=awsccc-cb-tabstart]"),
                      b().style.display = "block",
                      a.setAttribute("tabindex", "0"),
                      a.focus({
                          preventScroll: !0
                      }),
                      e()
                  }
                  ))
              },
              showErrorMessage: function() {
                  d.default((function() {
                      E()
                  }
                  ))
              }
          }
      }
      a.isChecked = m,
      a.default = {
          createShortbreadUi: function(e) {
              return b(e)
          }
      }
  }
  , function(e, a, n) {
      "use strict";
      Object.defineProperty(a, "__esModule", {
          value: !0
      }),
      a.COOKIE_CATEGORIES = a.ESSENTIAL = void 0,
      a.ESSENTIAL = "essential",
      a.COOKIE_CATEGORIES = [a.ESSENTIAL, "performance", "functional", "advertising"]
  }
  , function(e, a, n) {
      "use strict";
      Object.defineProperty(a, "__esModule", {
          value: !0
      }),
      a.localizationDictionary = a.localizationRtl = void 0;
      var i = n(0)
        , t = n(29)
        , o = "https://aws.amazon.com/legal/cookies/";
      a.localizationRtl = ["ar-sa"],
      a.localizationDictionary = {
          "ar-sa": {
              consentBanner: {
                  title: "تحديد تفضيلات ملفات تعريف الارتباط",
                  paragraph: i.act("span", null, "إننا نستخدم ملفات تعريف الارتباط الأساسية والأدوات المماثلة الضرورية لتوفير موقعنا وخدماتنا. إننا نستخدم ملفات تعريف الارتباط الخاصة بالأداء لجمع إحصاءات مجهولة الهوية حتى نتمكن من فهم كيفية استخدام العملاء لموقعنا وإجراء تحسينات. لا يمكن إلغاء تنشيط ملفات تعريف الارتباط الأساسية، ولكن يمكنك النقر فوق Customize cookies (تخصيص ملفات تعريف الارتباط) لرفض ملفات تعريف الارتباط الخاصة بالأداء. <br /> إذا وافقت، فستستخدم AWS والجهات الخارجية المعتمدة أيضًا ملفات تعريف الارتباط لتوفير ميزات مفيدة للموقع وتذكر تفضيلاتك وعرض المحتوى ذي الصلة، بما في ذلك الإعلانات ذات الصلة. للمتابعة بدون قبول ملفات تعريف الارتباط هذه، انقر فوق Continue without accepting (متابعة بدون قبول). لإجراء خيارات أكثر تفصيلاً أو لمعرفة المزيد، انقر فوق Customize cookies (تخصيص ملفات تعريف الارتباط)."),
                  "paragraph-mobile": i.act("span", null, "إننا نستخدم ملفات تعريف الارتباط الأساسية والأدوات المماثلة الضرورية لتوفير موقعنا وخدماتنا. إننا نستخدم ملفات تعريف الارتباط الخاصة بالأداء لجمع إحصاءات مجهولة الهوية حتى نتمكن من فهم كيفية استخدام العملاء لموقعنا وإجراء تحسينات. لا يمكن إلغاء تنشيط ملفات تعريف الارتباط الأساسية، ولكن يمكنك النقر فوق Customize cookies (تخصيص ملفات تعريف الارتباط) لرفض ملفات تعريف الارتباط الخاصة بالأداء. <br /> إذا وافقت، فستستخدم AWS والجهات الخارجية المعتمدة أيضًا ملفات تعريف الارتباط لتوفير ميزات مفيدة للموقع وتذكر تفضيلاتك وعرض المحتوى ذي الصلة، بما في ذلك الإعلانات ذات الصلة. للمتابعة بدون قبول ملفات تعريف الارتباط هذه، انقر فوق Continue without accepting (متابعة بدون قبول). لإجراء خيارات أكثر تفصيلاً أو لمعرفة المزيد، انقر فوق Customize cookies (تخصيص ملفات تعريف الارتباط). لا يقدم تطبيق AWS Console للأجهزة المحمولة ملفات تعريف الارتباط الخاصة بالجهات الخارجية أو ملفات تعريف الارتباط المستخدمة في الإعلان."),
                  "button-customize": "تخصيص ملفات الارتباط",
                  "button-accept": "قبول جميع ملفات تعريف الارتباط",
                  "button-continue": "متابعة بدون قبول",
                  "button-continue-aria-label": "متابعة بدون قبول",
                  "button-customize-aria-label": "تخصيص تفضيلات ملفات تعريف الارتباط",
                  "button-accept-aria-label": "قبول جميع ملفات تعريف الارتباط"
              },
              consentSelector: {
                  header: "تخصيص تفضيلات ملفات تعريف الارتباط",
                  intro: "إننا نستخدم ملفات تعريف الارتباط والأدوات المشابهة (يطلق عليها مجتمعة «ملفات تعريف الارتباط») للأغراض التالية.",
                  "checkbox-label": "مسموح بها",
                  "button-cancel": "إلغاء",
                  "button-save": "حفظ التفضيلات",
                  "button-cancel-aria-label": "إلغاء تخصيص تفضيلات ملفات تعريف الارتباط",
                  "button-save-aria-label": "حفظ تفضيلات ملفات تعريف الارتباط المخصصة",
                  footer: i.act("span", null, "قد يؤثر حظر بعض أنواع ملفات تعريف الارتباط على تجربتك في مواقعنا. يمكنك تغيير تفضيلات ملفات تعريف الارتباط الخاصة بك في أي وقت من خلال النقر فوق تفضيلات ملفات تعريف الارتباط في تذييل هذا الموقع. لمعرفة المزيد حول طريقتنا والأطراف الثالثة في استخدام ملفات تعريف الارتباط في مواقعنا، يرجى قراءة ", i.act("a", {
                      "data-id": "awsccc-cs-f-notice",
                      href: o,
                      target: "_blank",
                      rel: "noopener noreferrer",
                      title: "الفتح في نافذة جديدة"
                  }, i.act("span", null, "إشعار ملفات تعريف الارتباط لخدمة AWS‏", i.act(t.default, {
                      size: "10px"
                  }))), " الخاصة بنا"),
                  "footer-mobile": i.act("span", null, "قد يؤثر حظر بعض أنواع ملفات تعريف الارتباط على تجربتك لمواقعنا. يمكنك مراجعة اختياراتك وتغييرها في أي وقت بالنقر فوق تفضيلات ملفات تعريف الارتباط في تذييل هذا الموقع. نستخدم نحن وجهات خارجية مختارة ملفات تعريف الارتباط، أو التقنيات المشابهة كما هو محدد في ", i.act("a", {
                      "data-id": "awsccc-cs-f-notice",
                      href: o,
                      target: "_blank",
                      rel: "noopener noreferrer",
                      title: "إشعار ملفات تعريف الارتباط AWS "
                  }, i.act("span", null, "فتح في نافذة جديدة", i.act(t.default, {
                      size: "10px"
                  }))), ". لا يقدم تطبيق الهاتف المحمول لوحدة تحكم AWS ملفات تعريف الارتباط الخاصة بالجهة الخارجية، أو ملفات تعريف الارتباط المستخدمة للإعلان."),
                  "section-essential": {
                      title: "أساسي",
                      paragraph: "ملفات تعريف الارتباط الأساسية هذه ضرورية من أجل إتاحة موقعنا وخدماتنا ولا يمكن إلغاء تنشيطها. ويتم تعيينها عادةً فقط استجابة لإجراءاتك على الموقع، مثل تعيين تفضيلات خصوصيتك، أو تسجيل الدخول، أو ملء النماذج. ",
                      "checkbox-description": "السماح بالفئة الأساسية"
                  },
                  "section-performance": {
                      title: "الأداء",
                      paragraph: "توفر ملفات تعريف الارتباط الخاصة بالأداء إحصائيات مجهولة حول طريقة تنقل العملاء في موقعنا، وذلك ليتسنى لنا تحسين تجربة الموقع وأدائه. وقد تقوم أطراف ثالثة معتمدة بإجراء تحليل نيابة عنا، لكن لا يمكنها استخدام البيانات لأغراضها الخاصة.",
                      "checkbox-description": "السماح بفئة الأداء"
                  },
                  "section-functional": {
                      title: "الوظيفية",
                      paragraph: "تساعدنا ملفات تعريف الارتباط الوظيفية على تقديم ميزات موقع مفيدة، وتذكر تفضيلاتك، وعرض محتوى ذي صلة. قد تقوم أطراف ثالثة معتمدة بتعيين ملفات تعريف الارتباط هذه لتقديم ميزات معينة للموقع. إذا لم تسمح بملفات تعريف الارتباط هذه، فقد لا تعمل بعض أو كل من هذه الخدمات على نحو صحيح.",
                      "checkbox-description": "السماح بالفئة الوظيفية"
                  },
                  "section-advertising": {
                      title: "الإعلان",
                      paragraph: "قد نقوم نحن أو شركاؤنا في مجال الإعلانات بتعيين ملفات تعريف الارتباط الإعلانية خلال موقعنا وهي تساعدنا على تقديم محتوى تسويقي ذي صلة. فإذا لم تسمح بوجود ملفات تعريف الارتباط هذه، فستشاهد إعلانات أقل صلة.",
                      "checkbox-description": "السماح بالفئة الإعلانية"
                  }
              },
              errorMessage: {
                  header: "تعذر حفظ تفضيلات ملفات تعريف الارتباط",
                  paragraph: i.act("span", null, "إننا سنقوم بتخزين ملفات تعريف الارتباط الأساسية في هذه المرة فقط، لأنه تعذر علينا حفظ تفضيلات ملفات تعريف الارتباط الخاصة بك.", i.act("br", null), i.act("br", null), "إذا كنت تريد تغيير تفضيلات ملفات تعريف الارتباط الخاصة بك، فحاول مرةً أخرى لاحقًا باستخدام الرابط الموجود في تذييل وحدة تحكم AWS، أو اتصل بالدعم إن استمرت المشكلة."),
                  "button-dismiss": "تجاهل",
                  "button-dismiss-aria-label": "تجاهل رسالة الخطأ"
              }
          },
          "en-us": {
              consentBanner: {
                  title: "Select your cookie preferences",
                  paragraph: i.act("span", null, "We use essential cookies and similar tools that are necessary to provide our site and services. We use performance cookies to collect anonymous statistics so we can understand how customers use our site and make improvements. Essential cookies cannot be deactivated, but you can click “Customize cookies” to decline performance cookies. ", i.act("br", null), i.act("br", null), " If you agree, AWS and approved third parties will also use cookies to provide useful site features, remember your preferences, and display relevant content, including relevant advertising. To continue without accepting these cookies, click “Continue without accepting.” To make more detailed choices or learn more, click “Customize cookies.”"),
                  "paragraph-mobile": i.act("span", null, "We use essential cookies and similar tools that are necessary to provide our site and services. We use performance cookies to collect anonymous statistics so we can understand how customers use our site and make improvements. Essential cookies cannot be deactivated, but you can click “Customize cookies” to decline performance cookies. ", i.act("br", null), i.act("br", null), " If you agree, AWS and approved third parties will also use cookies to provide useful site features, remember your preferences, and display relevant content, including relevant advertising. To continue without accepting these cookies, click “Continue without accepting.” To make more detailed choices or learn more, click “Customize cookies.”. The AWS Console Mobile App does not deliver third party cookies or cookies used for advertising."),
                  "button-customize": "Customize cookies",
                  "button-accept": "Accept all cookies",
                  "button-continue": "Continue without accepting",
                  "button-continue-aria-label": "Continue without accepting",
                  "button-customize-aria-label": "Customize cookie preferences",
                  "button-accept-aria-label": "Accept all cookies"
              },
              consentSelector: {
                  header: "Customize cookie preferences",
                  intro: 'We use cookies and similar tools (collectively, "cookies") for the following purposes.',
                  "checkbox-label": "Allowed",
                  "button-cancel": "Cancel",
                  "button-save": "Save preferences",
                  "button-cancel-aria-label": "Cancel customizing cookie preferences",
                  "button-save-aria-label": "Save customized cookie preferences",
                  footer: i.act("span", null, "Blocking some types of cookies may impact your experience of our sites. You may review and change your choices at any time by clicking Cookie preferences in the footer of this site. We and selected third-parties use cookies or similar technologies as specified in the ", i.act("a", {
                      "data-id": "awsccc-cs-f-notice",
                      href: o,
                      target: "_blank",
                      rel: "noopener noreferrer",
                      title: "Opens in a new Window"
                  }, i.act("span", null, "AWS Cookie Notice", i.act(t.default, {
                      size: "10px"
                  }))), "."),
                  "footer-mobile": i.act("span", null, "Blocking some types of cookies may impact your experience of our sites. You may review and change your choices at any time by clicking Cookie preferences in the footer of this site. We and selected third-parties use cookies or similar technologies as specified in the ", i.act("a", {
                      "data-id": "awsccc-cs-f-notice",
                      href: o,
                      target: "_blank",
                      rel: "noopener noreferrer",
                      title: "Opens in a new Window"
                  }, i.act("span", null, "AWS Cookie Notice", i.act(t.default, {
                      size: "10px"
                  }))), ". The AWS Console Mobile App does not deliver third party cookies or cookies used for advertising."),
                  "section-essential": {
                      title: "Essential",
                      paragraph: "Essential cookies are necessary to provide our site and services and cannot be deactivated. They are usually set in response to your actions on the site, such as setting your privacy preferences, signing in, or filling in forms. ",
                      "checkbox-description": "Allow essential category"
                  },
                  "section-performance": {
                      title: "Performance",
                      paragraph: "Performance cookies provide anonymous statistics about how customers navigate our site so we can improve site experience and performance. Approved third parties may perform analytics on our behalf, but they cannot use the data for their own purposes.",
                      "checkbox-description": "Allow performance category"
                  },
                  "section-functional": {
                      title: "Functional",
                      paragraph: "Functional cookies help us provide useful site features, remember your preferences, and display relevant content. Approved third parties may set these cookies to provide certain site features. If you do not allow these cookies, then some or all of these services may not function properly.",
                      "checkbox-description": "Allow functional category"
                  },
                  "section-advertising": {
                      title: "Advertising",
                      paragraph: "Advertising cookies may be set through our site by us or our advertising partners and help us deliver relevant marketing content. If you do not allow these cookies, you will experience less relevant advertising.",
                      "checkbox-description": "Allow advertising category"
                  }
              },
              errorMessage: {
                  header: "Unable to save cookie preferences",
                  paragraph: i.act("span", null, "We will only store essential cookies at this time, because we were unable to save your cookie preferences.", i.act("br", null), i.act("br", null), "If you want to change your cookie preferences, try again later using the link in the AWS console footer, or contact support if the problem persists."),
                  "button-dismiss": "Dismiss",
                  "button-dismiss-aria-label": "Dismiss error message modal"
              }
          },
          "de-de": {
              consentBanner: {
                  title: "Wählen Sie Ihre Cookie-Einstellungen aus",
                  paragraph: i.act("span", null, "Wir verwenden wichtige Cookies und ähnliche Tools, die für die Bereitstellung unserer Website und Dienste erforderlich sind. Wir verwenden Performance-Cookies, um anonyme Statistiken zu sammeln, damit wir verstehen, wie Kunden unsere Website nutzen, und Verbesserungen vornehmen können. Essentielle Cookies können nicht deaktiviert werden, aber Sie können auf „Cookies anpassen“ klicken, um Performance-Cookies abzulehnen. ", i.act("br", null), i.act("br", null), " Wenn Sie zustimmen, verwenden AWS und zugelassene Dritte ebenfalls Cookies, um nützliche Website-Funktionen bereitzustellen, Ihre Präferenzen zu speichern und relevante Inhalte, einschließlich relevanter Werbung, anzuzeigen. Um fortzufahren, ohne diese Cookies zu akzeptieren, klicken Sie auf „Weiter ohne zu akzeptieren“. Um detailliertere Entscheidungen zu treffen oder mehr zu erfahren, klicken Sie auf „Cookies anpassen“."),
                  "paragraph-mobile": i.act("span", null, "Wir verwenden wichtige Cookies und ähnliche Tools, die für die Bereitstellung unserer Website und Dienste erforderlich sind. Wir verwenden Performance-Cookies, um anonyme Statistiken zu sammeln, damit wir verstehen, wie Kunden unsere Website nutzen, und Verbesserungen vornehmen können. Essentielle Cookies können nicht deaktiviert werden, aber Sie können auf „Cookies anpassen“ klicken, um Performance-Cookies abzulehnen. ", i.act("br", null), i.act("br", null), " Wenn Sie zustimmen, verwenden AWS und zugelassene Dritte ebenfalls Cookies, um nützliche Website-Funktionen bereitzustellen, Ihre Präferenzen zu speichern und relevante Inhalte, einschließlich relevanter Werbung, anzuzeigen. Um fortzufahren, ohne diese Cookies zu akzeptieren, klicken Sie auf „Weiter ohne zu akzeptieren“. Um detailliertere Entscheidungen zu treffen oder mehr zu erfahren, klicken Sie auf „Cookies anpassen“. Die AWS Console Mobile App liefert keine Cookies oder Cookies von Drittanbietern, die für Werbung verwendet werden."),
                  "button-customize": "Anpassen von Cookies",
                  "button-accept": "Alle Cookies akzeptieren",
                  "button-continue": "Ohne Akzeptieren fortfahren",
                  "button-continue-aria-label": "Ohne Akzeptieren fortfahren",
                  "button-customize-aria-label": "Cookie-Einstellungen anpassen",
                  "button-accept-aria-label": "Alle Cookies akzeptieren"
              },
              consentSelector: {
                  header: "Cookie-Einstellungen anpassen",
                  intro: 'Wir verwenden Cookies und ähnliche Tools (zusammen "Cookies") für folgende Zwecke.',
                  "checkbox-label": "Erlaubt",
                  "button-cancel": "Abbrechen",
                  "button-save": "Einstellungen speichern",
                  "button-cancel-aria-label": "Anpassen der Cookie-Einstellungen abbrechen",
                  "button-save-aria-label": "Benutzerdefinierte Cookie-Einstellungen speichern",
                  footer: i.act("span", null, "Das Blockieren einiger Arten von Cookies kann sich auf Ihre Erfahrung auf unseren Websites auswirken. Sie können Ihre Cookie-Einstellungen jederzeit ändern, indem Sie in der Fußzeile dieser Website auf Cookie-Einstellungen klicken. Um mehr darüber zu erfahren, wie wir und zugelassene Dritte Cookies auf unseren Websites verwenden, lesen Sie bitte unseren ", i.act("a", {
                      "data-id": "awsccc-cs-f-notice",
                      href: o,
                      target: "_blank",
                      rel: "noopener noreferrer",
                      title: "Wird in einem neuen Fenster geöffnet."
                  }, i.act("span", null, "AWS-Cookie-Hinweis.", i.act(t.default, {
                      size: "10px"
                  })))),
                  "footer-mobile": i.act("span", null, "Das Blockieren einiger Arten von Cookies kann sich auf Ihre Erfahrung mit unseren Websites auswirken. Sie können Ihre Auswahl jederzeit überprüfen und ändern, indem Sie in der Fußzeile dieser Website auf Cookie-Präferenzen klicken. Wir und ausgewählte Drittanbieter verwenden Cookies oder ähnliche Technologien, wie im Abschnitt ", i.act("a", {
                      "data-id": "awsccc-cs-f-notice",
                      href: o,
                      target: "_blank",
                      rel: "noopener noreferrer",
                      title: "Öffnet sich in einem neuen Fenster"
                  }, " der ", i.act("span", null, "AWS-Cookie-Benachrichtigung", i.act(t.default, {
                      size: "10px"
                  }))), " angegeben. Die mobile App AWS-Konsole beinhaltet keine Cookies von Drittanbietern oder Cookies, die für die Werbung verwendet werden."),
                  "section-essential": {
                      title: "Essenziell",
                      paragraph: "Diese Cookies sind erforderlich, um unsere Website und Services bereitzustellen und können nicht deaktiviert werden. Sie werden in der Regel als Reaktion auf Ihre Aktionen auf der Website festgelegt, z. B. die Festlegung Ihrer Datenschutzeinstellungen, die Anmeldung oder das Ausfüllen von Formularen. ",
                      "checkbox-description": "Essenziell Cookies zulassen"
                  },
                  "section-performance": {
                      title: "Leistung",
                      paragraph: "Leistungs-Cookies stellen anonyme Statistiken darüber bereit, wie Kunden auf unserer Website navigieren, damit wir die Website-Erfahrung und -Leistung verbessern können. Zugelassene Dritte können Analysen in unserem Namen durchführen, die Daten aber nicht für ihre eigenen Zwecke verwenden.",
                      "checkbox-description": "Lesitungs-Cookies zulassen"
                  },
                  "section-functional": {
                      title: "Funktional",
                      paragraph: "Funktionale Cookies helfen uns dabei, nützliche Website-Funktionen bereitzustellen, Ihre Präferenzen zu speichern und relevante Inhalte anzuzeigen. Zugelassene Dritte können diese Cookies so einrichten, dass bestimmte Website-Funktionen bereitgestellt werden. Wenn Sie diese Cookies nicht zulassen, funktionieren einige oder alle dieser Services möglicherweise nicht ordnungsgemäß.",
                      "checkbox-description": "Funktionale Cookies zulassen"
                  },
                  "section-advertising": {
                      title: "Werbung",
                      paragraph: "Diese Cookies können von uns oder unseren Werbepartnern über unsere Website gesetzt werden und uns helfen, relevante Marketinginhalte bereitzustellen. Wenn Sie diese Cookies nicht zulassen, werden Sie weniger relevante Werbung erleben.",
                      "checkbox-description": "Werbe-Cookies zulassen"
                  }
              },
              errorMessage: {
                  header: "Cookie-Einstellungen konnten nicht gespeichert werden",
                  paragraph: i.act("span", null, "Wir speichern derzeit nur wichtige Cookies, da wir Ihre Cookie-Einstellungen nicht speichern konnten.", i.act("br", null), i.act("br", null), "Wenn Sie Ihre Cookie-Einstellungen ändern möchten, versuchen Sie es später erneut über den Link in der Fußzeile der AWS-Konsole oder wenden Sie sich an den Support, wenn das Problem weiterhin besteht."),
                  "button-dismiss": "Verwerfen",
                  "button-dismiss-aria-label": "Fehlermeldung verwerfen"
              }
          },
          "es-es": {
              consentBanner: {
                  title: "Seleccione sus preferencias de cookies",
                  paragraph: i.act("span", null, "Utilizamos cookies esenciales y herramientas similares que son necesarias para suministrar tanto nuestro sitio como nuestros servicios. Utilizamos cookies de rendimiento a fin de recopilar estadísticas anónimas y así comprender la forma en que los clientes utilizan nuestro sitio con el objetivo de realizar mejoras. Las cookies esenciales no se pueden desactivar, pero puede hacer clic en “Personalizar cookies” para rechazar las cookies de rendimiento. ", i.act("br", null), i.act("br", null), " Si está de acuerdo, AWS y terceros autorizados también utilizarán cookies para suministrar características útiles del sitio, recordar las preferencias y mostrar contenido relevante, incluida publicidad pertinente. Para continuar sin aceptar estas cookies, haga clic en “Continuar sin aceptar”. Para elegir de forma más detallada u obtener más información, haga clic en “Personalizar cookies”."),
                  "paragraph-mobile": i.act("span", null, "Utilizamos cookies esenciales y herramientas similares que son necesarias para suministrar tanto nuestro sitio como nuestros servicios. Utilizamos cookies de rendimiento a fin de recopilar estadísticas anónimas y así comprender la forma en que los clientes utilizan nuestro sitio con el objetivo de realizar mejoras. Las cookies esenciales no se pueden desactivar, pero puede hacer clic en “Personalizar cookies” para rechazar las cookies de rendimiento. ", i.act("br", null), i.act("br", null), " Si está de acuerdo, AWS y terceros autorizados también utilizarán cookies para suministrar características útiles del sitio, recordar las preferencias y mostrar contenido relevante, incluida publicidad pertinente. Para continuar sin aceptar estas cookies, haga clic en “Continuar sin aceptar”. Para elegir de forma más detallada u obtener más información, haga clic en “Personalizar cookies”. La aplicación móvil de la Consola de AWS no utiliza cookies de terceros ni cookies utilizadas para la publicidad."),
                  "button-customize": "Personalizar cookies",
                  "button-accept": "Aceptar todas las cookies",
                  "button-continue": "Continuar sin aceptar",
                  "button-continue-aria-label": "Continuar sin aceptar",
                  "button-customize-aria-label": "Personalizar preferencias de cookies",
                  "button-accept-aria-label": "Aceptar todas las cookies"
              },
              consentSelector: {
                  header: "Personalizar preferencias de cookies",
                  intro: "Utilizamos cookies y herramientas similares (de forma conjunta, “cookies”) para los siguientes fines.",
                  "checkbox-label": "Permitidas",
                  "button-cancel": "Cancelar",
                  "button-save": "Guardar preferencias",
                  "button-cancel-aria-label": "Cancelar la personalización de las preferencias de cookies",
                  "button-save-aria-label": "Guardar preferencias personalizadas de cookies",
                  footer: i.act("span", null, "El bloqueo de algunos tipos de cookies puede afectar a su experiencia al navegar por nuestros sitios. Puede cambiar las preferencias de cookies en cualquier momento haciendo clic en Preferencias de cookies en el pie de página de este sitio. Para obtener más información sobre la forma en que nosotros y algunos terceros aprobados usamos las cookies en nuestros sitios, lea el ", i.act("a", {
                      "data-id": "awsccc-cs-f-notice",
                      href: o,
                      target: "_blank",
                      rel: "noopener noreferrer",
                      title: "Se abre en una ventana nueva"
                  }, i.act("span", null, "Aviso de AWS sobre cookies.", i.act(t.default, {
                      size: "10px"
                  })))),
                  "footer-mobile": i.act("span", null, "El bloqueo de algunos tipos de cookies puede afectar a su experiencia de nuestros sitios. Puede revisar y cambiar sus opciones en cualquier momento haciendo clic en Preferencias de cookies en el pie de página de este sitio. Nosotros y terceros seleccionados usamos cookies o tecnologías similares tal y como se especifica en el ", i.act("a", {
                      "data-id": "awsccc-cs-f-notice",
                      href: o,
                      target: "_blank",
                      rel: "noopener noreferrer",
                      title: "Opens in a new Window"
                  }, i.act("span", null, ", el aviso sobre cookies de AWS", i.act(t.default, {
                      size: "10px"
                  }))), ". La aplicación móvil de la consola de AWS no entrega cookies de terceros ni cookies utilizadas para publicidad."),
                  "section-essential": {
                      title: "Esenciales",
                      paragraph: "Estas cookies son necesarias para poder ofrecer nuestro sitio y nuestros servicios, y no se pueden desactivar. Por lo general, solo se emplean en respuesta a las acciones que lleve a cabo en el sitio, por ejemplo, al configurar sus preferencias de privacidad, al iniciar sesión o al completar formularios. ",
                      "checkbox-description": "Permitir categoría esencial"
                  },
                  "section-performance": {
                      title: "De rendimiento",
                      paragraph: "Las cookies de rendimiento proporcionan estadísticas anónimas sobre la forma en que los clientes navegan por nuestro sitio para que podamos mejorar la experiencia y el rendimiento del sitio. Los terceros aprobados pueden realizar análisis en nuestro nombre, pero no pueden utilizar los datos para sus propios fines.",
                      "checkbox-description": "Permitir categoría de rendimiento"
                  },
                  "section-functional": {
                      title: "Funcionales",
                      paragraph: "Las cookies funcionales nos ayudan a proporcionar características útiles del sitio, recordar sus preferencias y mostrar contenido relevante. Es posible que algunos terceros aprobados empleen estas cookies para proporcionar determinadas características del sitio. Si no permite estas cookies, es posible que algunos de estos servicios (o todos ellos) no funcionen correctamente.",
                      "checkbox-description": "Permitir categoría funcional"
                  },
                  "section-advertising": {
                      title: "De publicidad",
                      paragraph: "AWS o nuestros socios publicitarios podemos emplear cookies de publicidad en el sitio para ayudarnos a ofrecer contenido de marketing personalizado. Si no habilita estas cookies, verá publicidad menos relevante.",
                      "checkbox-description": "Permitir categoría de publicidad"
                  }
              },
              errorMessage: {
                  header: "No se pueden guardar las preferencias de cookies",
                  paragraph: i.act("span", null, "En este momento, solo almacenaremos las cookies esenciales, ya que no hemos podido guardar sus preferencias de cookies.", i.act("br", null), i.act("br", null), "Si desea cambiar sus preferencias de cookies, inténtelo de nuevo más tarde a través del enlace del pie de página de la Consola de AWS o póngase en contacto con el servicio de asistencia si el problema persiste."),
                  "button-dismiss": "Descartar",
                  "button-dismiss-aria-label": "Descartar el mensaje de error"
              }
          },
          "fr-fr": {
              consentBanner: {
                  title: "Sélectionner vos préférences de cookies",
                  paragraph: i.act("span", null, "Nous utilisons des cookies essentiels et des outils similaires qui sont nécessaires pour mettre notre site et nos services à votre disposition. Nous utilisons des cookies de performance pour collecter des statistiques anonymes afin de comprendre comment les clients utilisent notre site et y apporter des améliorations. Les cookies essentiels ne peuvent pas être désactivés, mais vous pouvez cliquer sur « Personnaliser les cookies » pour refuser les cookies de performance. ", i.act("br", null), i.act("br", null), " Si vous êtes d'accord, AWS et les tiers approuvés utiliseront également des cookies pour fournir des fonctionnalités utiles au site, mémoriser vos préférences et proposer du contenu pertinent, y compris des publicités pertinentes. Pour continuer sans accepter ces cookies, cliquez sur « Continuer sans accepter ». Pour faire des choix plus détaillés ou en savoir plus, cliquez sur « Personnaliser les cookies »"),
                  "paragraph-mobile": i.act("span", null, "Nous utilisons des cookies essentiels et des outils similaires qui sont nécessaires pour mettre notre site et nos services à votre disposition. Nous utilisons des cookies de performance pour collecter des statistiques anonymes afin de comprendre comment les clients utilisent notre site et y apporter des améliorations. Les cookies essentiels ne peuvent pas être désactivés, mais vous pouvez cliquer sur « Personnaliser les cookies » pour refuser les cookies de performance. ", i.act("br", null), i.act("br", null), " Si vous êtes d'accord, AWS et les tiers approuvés utiliseront également des cookies pour fournir des fonctionnalités utiles au site, mémoriser vos préférences et proposer du contenu pertinent, y compris des publicités pertinentes. Pour continuer sans accepter ces cookies, cliquez sur « Continuer sans accepter ». Pour faire des choix plus détaillés ou en savoir plus, cliquez sur « Personnaliser les cookies ». L'application mobile de la console AWS n'utilise pas de cookies tiers ni de cookies utilisés à des fins publicitaires."),
                  "button-customize": "Personnaliser les cookies",
                  "button-accept": "Accepter tous les cookies",
                  "button-continue": "Continuer sans accepter",
                  "button-continue-aria-label": "Continuer sans accepter",
                  "button-customize-aria-label": "Personnaliser les préférences de cookies",
                  "button-accept-aria-label": "Accepter tous les cookies"
              },
              consentSelector: {
                  header: "Personnaliser les préférences de cookies",
                  intro: "Nous utilisons des cookies et des outils similaires (collectivement, « cookies ») pour les raisons suivantes.",
                  "checkbox-label": "Autorisé",
                  "button-cancel": "Annuler",
                  "button-save": "Enregistrer les préférences",
                  "button-cancel-aria-label": "Annuler la personnalisation des préférences de cookies",
                  "button-save-aria-label": "Enregistrer les préférences de cookies personnalisées",
                  footer: i.act("span", null, "Le blocage de certains types de cookies peut affecter votre expérience sur nos sites. Vous pouvez modifier vos préférences de cookies à tout moment en cliquant sur Préférences de cookies en bas de la page de ce site. Pour en savoir plus sur la façon dont nous-mêmes et des tiers approuvés utilisons les cookies sur nos sites, veuillez lire la", i.act("a", {
                      "data-id": "awsccc-cs-f-notice",
                      href: o,
                      target: "_blank",
                      rel: "noopener noreferrer",
                      title: "Politique AWS relative aux cookies"
                  }, i.act("span", null, "S’ouvre dans une nouvelle fenêtre.", i.act(t.default, {
                      size: "10px"
                  })))),
                  "footer-mobile": i.act("span", null, "Le blocage de certains types de cookies peut affecter votre expérience sur nos sites. Vous pouvez modifier vos préférences de cookies à tout moment en cliquant sur Préférences de cookies en bas de la page de ce site. Pour en savoir plus sur la façon dont nous-mêmes et des tiers approuvés utilisons les cookies sur nos sites, veuillez lire la", i.act("a", {
                      "data-id": "awsccc-cs-f-notice",
                      href: o,
                      target: "_blank",
                      rel: "noopener noreferrer",
                      title: "Politique AWS relative aux cookies"
                  }, i.act("span", null, "S’ouvre dans une nouvelle fenêtre.", i.act(t.default, {
                      size: "10px"
                  }))), ". L'application mobile de la console AWS ne fournit pas de cookies tiers ou de cookies utilisés pour la publicité."),
                  "section-essential": {
                      title: "Essentiels",
                      paragraph: "Les cookies essentiels sont nécessaires pour vous proposer notre site et nos services et ne peuvent pas être désactivés. Ils sont généralement définis en réponse à vos actions sur le site, telles que la définition de vos préférences de confidentialité, la connexion ou le remplissage de formulaires. ",
                      "checkbox-description": "Autoriser la catégorie Essentiels"
                  },
                  "section-performance": {
                      title: "Performances",
                      paragraph: "Les cookies performances fournissent des statistiques anonymes sur la façon dont les clients naviguent sur notre site afin que nous puissions améliorer l'expérience et les performances du site. Les tiers autorisés peuvent effectuer des analyses en notre nom, mais ils ne peuvent pas utiliser les données à leurs propres fins.",
                      "checkbox-description": "Autoriser la catégorie Performances"
                  },
                  "section-functional": {
                      title: "Fonctionnels",
                      paragraph: "Les cookies fonctionnels nous aident à fournir des fonctionnalités utiles du site, à mémoriser vos préférences et à afficher du contenu pertinent. Des tiers approuvés peuvent configurer ces cookies pour fournir certaines fonctionnalités du site. Si vous n'autorisez pas ces cookies, certains ou tous ces services peuvent ne pas fonctionner correctement.",
                      "checkbox-description": "Autoriser la catégorie Fonctionnels"
                  },
                  "section-advertising": {
                      title: "Publicitaires",
                      paragraph: "Les cookies publicitaires peuvent être installés sur notre site par nous ou nos partenaires publicitaires et nous aide à diffuser du contenu marketing pertinent. Si vous n’autorisez pas ces cookies, la publicité que vous verrez s’afficher sera moins pertinente.",
                      "checkbox-description": "Autoriser la catégorie Publicitaires"
                  }
              },
              errorMessage: {
                  header: "Impossible d'enregistrer les préférences concernant les cookies",
                  paragraph: "<span>Nous stockerons uniquement les cookies essentiels pour le moment, car nous n'avons pas pu enregistrer vos préférences concernant les cookies.<br /><br />Si vous souhaitez modifier vos préférences concernant les cookies, réessayez ultérieurement en utilisant le lien situé dans le pied de page de la console AWS ou contactez l'équipe de support si le problème persiste.</span>",
                  "button-dismiss": "Ignorer",
                  "button-dismiss-aria-label": "Ignorer le message d'erreur"
              }
          },
          "id-id": {
              consentBanner: {
                  title: "Pilih preferensi cookie Anda",
                  paragraph: i.act("span", null, "Kami menggunakan cookie penting dan alat serupa yang diperlukan untuk menyediakan situs dan layanan. Kami menggunakan cookie performa untuk mengumpulkan statistik anonim agar kami dapat memahami bagaimana pelanggan menggunakan situs serta melakukan peningkatan. Cookie penting tidak dapat dinonaktifkan, tetapi Anda dapat mengeklik “Sesuaikan cookie” untuk menolak cookie performa. ", i.act("br", null), i.act("br", null), "  Jika Anda setuju, AWS dan pihak ketiga yang disetujui juga akan menggunakan cookie untuk menyediakan fitur situs yang bermanfaat, mengingat preferensi Anda, dan menampilkan konten yang relevan, termasuk iklan yang relevan. Untuk melanjutkan tanpa menerima cookie ini, klik “Lanjutkan tanpa menerima.” Untuk membuat pilihan yang lebih detail atau mempelajari lebih lanjut, klik “Sesuaikan cookie.”"),
                  "paragraph-mobile": i.act("span", null, "Kami menggunakan cookie penting dan alat serupa yang diperlukan untuk menyediakan situs dan layanan. Kami menggunakan cookie performa untuk mengumpulkan statistik anonim agar kami dapat memahami bagaimana pelanggan menggunakan situs serta melakukan peningkatan. Cookie penting tidak dapat dinonaktifkan, tetapi Anda dapat mengeklik “Sesuaikan cookie” untuk menolak cookie performa. ", i.act("br", null), " ", i.act("br", null), " Jika Anda setuju, AWS dan pihak ketiga yang disetujui juga akan menggunakan cookie untuk menyediakan fitur situs yang bermanfaat, mengingat preferensi Anda, dan menampilkan konten yang relevan, termasuk iklan yang relevan. Untuk melanjutkan tanpa menerima cookie ini, klik “Lanjutkan tanpa menerima.” Untuk membuat pilihan yang lebih detail atau mempelajari lebih lanjut, klik “Sesuaikan cookie.”. Aplikasi Seluler Konsol AWS tidak mengirimkan cookie pihak ketiga atau cookie yang digunakan untuk iklan."),
                  "button-customize": "Sesuaikan cookie",
                  "button-accept": "Terima semua cookie",
                  "button-continue": "Lanjutkan tanpa menerima",
                  "button-continue-aria-label": "Lanjutkan tanpa menerima",
                  "button-customize-aria-label": "Sesuaikan preferensi cookie",
                  "button-accept-aria-label": "Terima semua cookie"
              },
              consentSelector: {
                  header: "Sesuaikan preferensi cookie",
                  intro: "Kami menggunakan cookie dan alat yang serupa (secara kolektif, “cookie”) untuk tujuan berikut.",
                  "checkbox-label": "Diizinkan",
                  "button-cancel": "Batalkan",
                  "button-save": "Simpan preferensi",
                  "button-cancel-aria-label": "Batalkan penyesuaian preferensi cookie",
                  "button-save-aria-label": "Simpan preferensi cookie yang disesuaikan",
                  footer: i.act("span", null, "Memblokir beberapa jenis cookie dapat memengaruhi pengalaman Anda di situs kami. Anda dapat mengubah preferensi cookie kapan saja dengan mengklik Preferensi cookie di footer situs ini. Untuk mempelajari lebih lanjut tentang bagaimana kami dan pihak ketiga yang disetujui menggunakan cookie di situs kami, silakan baca ", i.act("a", {
                      "data-id": "awsccc-cs-f-notice",
                      href: o,
                      target: "_blank",
                      rel: "noopener noreferrer",
                      title: "Membuka AWS Cookie Notice"
                  }, i.act("span", null, " di jendela baru.", i.act(t.default, {
                      size: "10px"
                  })))),
                  "footer-mobile": i.act("span", null, "Pemblokiran beberapa jenis cookie dapat memengaruhi pengalaman Anda di situs kami. Anda dapat meninjau dan mengubah pilihan Anda kapan pun dengan mengklik preferensi Cookie di footer situs ini. Kami dan pihak ketiga terpilih menggunakan cookie atau teknologi serupa seperti yang ditentukan dalam ", i.act("a", {
                      "data-id": "awsccc-cs-f-notice",
                      href: o,
                      target: "_blank",
                      rel: "noopener noreferrer",
                      title: "Buka di Jendela Baru"
                  }, i.act("span", null, "Pemberitahuan Cookie AWS", i.act(t.default, {
                      size: "10px"
                  }))), ". Aplikasi Seluler Konsol AWS tidak mengirimkan cookie pihak ketiga atau cookie yang digunakan untuk iklan."),
                  "section-essential": {
                      title: "Penting",
                      paragraph: "Cookie ini diperlukan untuk menjalankan situs dan layanan kami dan tidak dapat dinonaktifkan. Cookie biasanya tersusun hanya sebagai tanggapan atas tindakan Anda di situs, seperti mengatur preferensi privasi, masuk, atau mengisi formulir. ",
                      "checkbox-description": "Izinkan kategori penting"
                  },
                  "section-performance": {
                      title: "Kinerja",
                      paragraph: "Cookie kinerja menyediakan statistik anonim tentang cara pelanggan menavigasi situs kami sehingga kami dapat menyempurnakan pengalaman dan kinerja situs. Pihak ketiga yang disetujui dapat melakukan analisis atas nama kami, tetapi tidak dapat menggunakan data untuk tujuannya sendiri.",
                      "checkbox-description": "Izinkan kategori kinerja"
                  },
                  "section-functional": {
                      title: "Fungsional",
                      paragraph: "Cookie fungsional membantu kami menyediakan berbagai fitur bermanfaat, mengingat preferensi Anda, dan menampilkan konten yang relevan pada situs. Pihak ketiga yang disetujui dapat mengatur cookie ini untuk menyediakan fitur tertentu pada situs. Jika Anda tidak mengizinkan cookie ini, maka beberapa atau semua layanan ini mungkin tidak berjalan dengan baik.",
                      "checkbox-description": "Izinkan kategori fungsional"
                  },
                  "section-advertising": {
                      title: "Iklan",
                      paragraph: "Cookie ini dapat diatur melalui situs kami oleh mitra iklan dan membantu kami mempersonalisasi konten pemasaran. Jika Anda tidak mengizinkan cookie, Anda akan mendapatkan iklan yang kurang relevan.",
                      "checkbox-description": "Izinkan kategori iklan"
                  }
              },
              errorMessage: {
                  header: "Tidak dapat menyimpan preferensi cookie",
                  paragraph: i.act("span", null, "Kami hanya akan menyimpan cookie penting saat ini, karena kami tidak dapat menyimpan preferensi cookie Anda.", i.act("br", null), i.act("br", null), "Jika Anda ingin mengubah preferensi cookie, coba lagi nanti menggunakan tautan di footer konsol AWS, atau hubungi dukungan jika masalah berlanjut."),
                  "button-dismiss": "Hentikan",
                  "button-dismiss-aria-label": "Hentikan pesan kesalahan"
              }
          },
          "it-it": {
              consentBanner: {
                  title: "Seleziona le tue preferenze relative ai cookie",
                  paragraph: i.act("span", null, 'Utilizziamo i cookie essenziali e strumenti simili che sono necessari per fornire il nostro sito e i nostri servizi. Utilizziamo i cookie di prestazioni per raccogliere statistiche anonime per poter capire come i clienti utilizzano il nostro sito e apportare miglioramenti. I cookie essenziali non possono essere disattivati, ma è possibile fare clic su "Personalizza cookie" per rifiutare i cookie di prestazioni. ', i.act("br", null), i.act("br", null), ' Se accetti, AWS e le terze parti autorizzate utilizzeranno i cookie anche per fornire utili funzionalità del sito, ricordare le tue preferenze e visualizzare contenuti pertinenti, inclusa la pubblicità. Per continuare senza accettare questi cookie, fai clic su "Continua senza accettare". Per fare scelte più dettagliate o saperne di più, fai clic su "Personalizza i cookie".'),
                  "paragraph-mobile": i.act("span", null, 'Utilizziamo i cookie essenziali e strumenti simili che sono necessari per fornire il nostro sito e i nostri servizi. Utilizziamo i cookie di prestazioni per raccogliere statistiche anonime per poter capire come i clienti utilizzano il nostro sito e apportare miglioramenti. I cookie essenziali non possono essere disattivati, ma è possibile fare clic su "Personalizza cookie" per rifiutare i cookie di prestazioni. ', i.act("br", null), i.act("br", null), ' Se accetti, AWS e le terze parti autorizzate utilizzeranno i cookie anche per fornire utili funzionalità del sito, ricordare le tue preferenze e visualizzare contenuti pertinenti, inclusa la pubblicità. Per continuare senza accettare questi cookie, fai clic su "Continua senza accettare". Per fare scelte più dettagliate o saperne di più, fai clic su "Personalizza i cookie".L\'app mobile della console AWS non fornisce cookie di terze parti o cookie utilizzati per la pubblicità.'),
                  "button-customize": "Personalizzazione dei cookie",
                  "button-accept": "Accetta tutti i cookie",
                  "button-continue": "Continua senza accettare",
                  "button-continue-aria-label": "Continua senza accettare",
                  "button-customize-aria-label": "Personalizza le tue preferenze relative ai cookie",
                  "button-accept-aria-label": "Accetta tutti i cookie"
              },
              consentSelector: {
                  header: "Personalizza le tue preferenze relative ai cookie",
                  intro: 'Utilizziamo cookie e strumenti simili (collettivamente, "cookie") per le seguenti finalità.',
                  "checkbox-label": "Consentiti",
                  "button-cancel": "Annulla",
                  "button-save": "Salva preferenze",
                  "button-cancel-aria-label": "Annulla la personalizzazione delle preferenze relative ai cookie",
                  "button-save-aria-label": "Salva le preferenze personalizzate relative ai cookie",
                  footer: i.act("span", null, "Il blocco di alcuni tipi di cookie può influire sulla tua esperienza dei nostri siti. Puoi modificare le tue preferenze relative ai cookie in qualsiasi momento facendo clic su Preferenze cookie, nel piè di pagina di questo sito. Per ulteriori informazioni su come noi e le terze parti approvate utilizziamo i cookie sui nostri siti, leggi la nostra ", i.act("a", {
                      "data-id": "awsccc-cs-f-notice",
                      href: o,
                      target: "_blank",
                      rel: "noopener noreferrer",
                      title: "Apertura in una nuova finestra"
                  }, i.act("span", null, "Informativa sui cookie di AWS.", i.act(t.default, {
                      size: "10px"
                  })))),
                  "footer-mobile": i.act("span", null, "Il blocco di alcuni tipi di cookie può influire sulla tua esperienza con i nostri siti. Puoi rivedere e modificare le tue scelte in qualsiasi momento facendo clic su Cookie preferences (Preferenze cookie) nel piè di pagina di questo sito. Noi e le terze parti selezionate utilizziamo cookie o tecnologie simili come specificato nella sezione ", i.act("a", {
                      "data-id": "awsccc-cs-f-notice",
                      href: o,
                      target: "_blank",
                      rel: "noopener noreferrer",
                      title: "Apre in una nuova finestra"
                  }, i.act("span", null, "AWS Cookie Notice", i.act(t.default, {
                      size: "10px"
                  }))), " (Informativa sui cookie AWS). L'app per dispositivi mobili di AWS Console non fornisce cookie di terze parti o cookie utilizzati per la pubblicità."),
                  "section-essential": {
                      title: "Essenziali",
                      paragraph: "I cookie essenziali sono necessari per fornire il nostro sito e i nostri servizi e non possono essere disattivati. In genere vengono impostati in risposta alle tue azioni sul sito, come l'impostazione delle tue preferenze sulla privacy, l'accesso o la compilazione di moduli. ",
                      "checkbox-description": "Consenti i cookie essenziali"
                  },
                  "section-performance": {
                      title: "Prestazione",
                      paragraph: "I cookie di prestazione forniscono statistiche anonime sul modo in cui i clienti navigano nel nostro sito in modo da migliorare l'esperienza e le prestazioni del sito. Le terze parti approvate possono eseguire analisi per conto nostro, ma non possono utilizzare i dati per le proprie finalità.",
                      "checkbox-description": "Consenti i cookie di prestazione"
                  },
                  "section-functional": {
                      title: "Funzionali",
                      paragraph: "I cookie funzionali ci aiutano a fornire funzionalità utili del sito, a ricordare le tue preferenze e a mostrare contenuti pertinenti. Le terze parti approvate possono impostare questi cookie per fornire determinate funzionalità del sito. Se non permetti l'installazione di questi cookie, alcuni o tutti questi servizi potrebbero non funzionare correttamente.",
                      "checkbox-description": "Consenti i cookie funzionali"
                  },
                  "section-advertising": {
                      title: "Pubblicitari",
                      paragraph: "I cookie pubblicitari possono essere impostati tramite il nostro sito da noi o dai nostri partner pubblicitari e ci aiutano a distribuire contenuti di marketing personalizzati. Se non permetti l'installazione di questi cookie, visualizzerai pubblicità meno pertinenti.",
                      "checkbox-description": "Consenti i cookie pubblicitari"
                  }
              },
              errorMessage: {
                  header: "Impossibile salvare le preferenze dei cookie",
                  paragraph: "<span>Al momento archivieremo solo i cookie essenziali, perché non siamo stati in grado di salvare le tue preferenze relative ai cookie.<br /><br />Se desideri modificare le preferenze dei cookie, riprova più tardi utilizzando il link nel piè di pagina della Console AWS oppure contatta il supporto se il problema persiste.</span>",
                  "button-dismiss": "Ignora",
                  "button-dismiss-aria-label": "Messaggio di errore di mancato recapito"
              }
          },
          "ja-jp": {
              consentBanner: {
                  title: "Cookie の設定を選択する",
                  paragraph: i.act("span", null, "当社は、当社のサイトおよびサービスを提供するために必要なエッセンシャルクッキーおよび類似のツールを使用します。当社は、お客様が当社サイトをどのように使用しているかを理解し、改善を行えるように、匿名の統計情報を収集するためにパフォーマンスクッキーを使用します。エッセンシャルクッキーを無効にすることはできませんが、「クッキーをカスタマイズ」をクリックしてパフォーマンスクッキーを拒否することができます。", i.act("br", null), i.act("br", null), " お客様が同意した場合、AWS および承認された第三者も Cookie を使用して、便利なサイト機能を提供し、お客様の好みを記憶し、関連する広告を含む関連コンテンツを表示します。これらの Cookie を受け入れずに続行するには、[承諾せずに続行] をクリックします。より詳細な選択を行うか、詳細を確認するには、[Cookie のカスタマイズ] をクリックします。"),
                  "paragraph-mobile": i.act("span", null, "当社は、当社のサイトおよびサービスを提供するために必要なエッセンシャルクッキーおよび類似のツールを使用します。当社は、お客様が当社サイトをどのように使用しているかを理解し、改善を行えるように、匿名の統計情報を収集するためにパフォーマンスクッキーを使用します。エッセンシャルクッキーを無効にすることはできませんが、「クッキーをカスタマイズ」をクリックしてパフォーマンスクッキーを拒否することができます。", i.act("br", null), i.act("br", null), " お客様が同意した場合、AWS および承認された第三者も Cookie を使用して、便利なサイト機能を提供し、お客様の好みを記憶し、関連する広告を含む関連コンテンツを表示します。これらの Cookie を受け入れずに続行するには、[承諾せずに続行] をクリックします。より詳細な選択を行うか、詳細を確認するには、[Cookieのカスタマイズ] をクリックします。AWS コンソールモバイルアプリでは、サードパーティ Cookie や広告に使用される Cookie は配信されません。"),
                  "button-customize": "Cookie をカスタマイズ",
                  "button-accept": "すべての Cookie を受け入れる",
                  "button-continue": "承諾せずに続行する",
                  "button-continue-aria-label": "承諾せずに続行する",
                  "button-customize-aria-label": "Cookie の設定をカスタマイズする",
                  "button-accept-aria-label": "すべての Cookie を受け入れる"
              },
              consentSelector: {
                  header: "Cookie の設定をカスタマイズする",
                  intro: "当社は、以下の目的で Cookie および同様のツール (以下総称して「Cookie」) を使用いたします。",
                  "checkbox-label": "許可",
                  "button-cancel": "キャンセル",
                  "button-save": "設定を保存",
                  "button-cancel-aria-label": "Cookie 設定のカスタマイズをキャンセルする",
                  "button-save-aria-label": "カスタマイズした Cookie 設定を保存する",
                  footer: i.act("span", null, "一部の種類の Cookie をブロックすると、サイトの操作に影響する可能性があります。Cookie の設定は、このサイトのフッターにある [Cookie preferences] をクリックすることで、いつでも変更できます。当社および承認された第三者が Cookie をどのように使用しているかについては、「", i.act("a", {
                      "data-id": "awsccc-cs-f-notice",
                      href: o,
                      target: "_blank",
                      rel: "noopener noreferrer",
                      title: "Open in a new Window"
                  }, i.act("span", null, "AWS Cookie Notice」をお読みください。", i.act(t.default, {
                      size: "10px"
                  })))),
                  "footer-mobile": i.act("span", null, "一部の種類の cookie をブロックすると、サイトの操作に影響する可能性があります。お客様は、本サイトのフッターにある [cookie の詳細設定] をクリックすることで、いつでも選択内容を確認および変更できます。当社および選定されたサードパーティーは、", i.act("a", {
                      "data-id": "awsccc-cs-f-notice",
                      href: o,
                      target: "_blank",
                      rel: "noopener noreferrer",
                      title: "新しいウィンドウで開きます"
                  }, i.act("span", null, "AWS の Cookie に関する通知", i.act(t.default, {
                      size: "10px"
                  }))), "に記載されている cookie または類似の技術を利用します。AWS コンソールモバイルアプリケーションは、サードパーティー cookie や広告のために使用される cookie を配信しません。"),
                  "section-essential": {
                      title: "Essential",
                      paragraph: "Essential Cookie は、当社のサイトおよびサービスを提供するために必要であり、無効にすることはできません。通常、プライバシー設定の選択、サインイン、フォームへの入力など、サイトでのアクションに応じてのみ設定されます。",
                      "checkbox-description": "Essential カテゴリを許可する"
                  },
                  "section-performance": {
                      title: "Performance",
                      paragraph: "Performance Cookie は、お客様によるサイトの操作方法に関する匿名の統計を提供するため、サイトのエクスペリエンスとパフォーマンスを向上させることができます。承認された第三者は、当社に代わって分析を行う場合がありますが、データを独自の目的で使用することはできません。",
                      "checkbox-description": "Performance カテゴリを許可する"
                  },
                  "section-functional": {
                      title: "Functional",
                      paragraph: "Functional Cookie は、有用なサイト機能の提供、ユーザーの嗜好の記憶、関連コンテンツの表示に役立ちます。承認された第三者は、特定のサイト機能を提供するためにこれらのクッキーを設定する場合があります。これらのクッキーを許可しない場合、サービスの一部またはすべてが適切に機能しない可能性があります。",
                      "checkbox-description": "Functional カテゴリを許可する"
                  },
                  "section-advertising": {
                      title: "Advertising",
                      paragraph: "Advertising Cookie は、当社の広告パートナーによって当社のサイトを通じて設定され、関連するマーケティングコンテンツの配信に役立ちます。これらの Cookie を許可しないと、広告の関連性が低くなります。",
                      "checkbox-description": "Advertising カテゴリを許可する"
                  }
              },
              errorMessage: {
                  header: "Cookie の設定を保存できません",
                  paragraph: i.act("span", null, "Cookie の設定を保存できなかったため、現時点では不可欠な Cookie のみを保存します。", i.act("br", null), i.act("br", null), "Cookie の設定を変更する場合は、AWS コンソールのフッターにあるリンクを使用して後でもう一度お試しください。問題が解決しない場合は、サポートにお問い合わせください。"),
                  "button-dismiss": "閉じる",
                  "button-dismiss-aria-label": "エラーメッセージを閉じる"
              }
          },
          "ko-kr": {
              consentBanner: {
                  title: "쿠키 기본 설정 선택",
                  paragraph: i.act("span", null, "AWS는 사이트 및 서비스를 제공하는 데 필요한 필수 쿠키 및 그와 유사한 도구를 사용합니다. 성능 쿠키는 익명 통계를 수집하여 고객이 사이트를 어떻게 이용하는지 파악하고 개선할 수 있게 해줍니다. 필수 쿠키는 비활성화할 수 없지만 성능 쿠키는 ‘쿠키 사용자 지정’을 클릭하여 거부할 수 있습니다. ", i.act("br", null), i.act("br", null), " 귀하가 동의하는 경우, AWS와 승인을 받은 서드 파티가 유용한 사이트 기능을 제공하고, 기본 설정을 저장하고, 관련 광고를 비롯한 관련 콘텐츠를 표시하는 데 쿠키를 사용하게 됩니다. 이러한 쿠키를 허용하지 않고 계속하려면 ‘수락하지 않고 계속하기’를 클릭하세요. 세부 옵션을 선택을 하거나 자세히 알아보려면 ‘쿠키 사용자 지정’을 클릭하세요."),
                  "paragraph-mobile": i.act("span", null, "AWS는 사이트 및 서비스를 제공하는 데 필요한 필수 쿠키 및 그와 유사한 도구를 사용합니다. 성능 쿠키는 익명 통계를 수집하여 고객이 사이트를 어떻게 이용하는지 파악하고 개선할 수 있게 해줍니다. 필수 쿠키는 비활성화할 수 없지만 성능 쿠키는 ‘쿠키 사용자 지정’을 클릭하여 거부할 수 있습니다. ", i.act("br", null), i.act("br", null), " 귀하가 동의하는 경우, AWS와 승인을 받은 서드 파티가 유용한 사이트 기능을 제공하고, 기본 설정을 저장하고, 관련 광고를 비롯한 관련 콘텐츠를 표시하는 데 쿠키를 사용하게 됩니다. 이러한 쿠키를 허용하지 않고 계속하려면 ‘수락하지 않고 계속하기’를 클릭하세요. 세부 옵션을 선택을 하거나 자세히 알아보려면 ‘쿠키 사용자 지정’을 클릭하세요. AWS Console 모바일 앱은 서드 파티 쿠키 또는 광고에 사용되는 AWS 쿠키를 전송하지 않습니다."),
                  "button-customize": "쿠키 사용자 지정",
                  "button-accept": "모든 쿠키 수락",
                  "button-continue": "수락하지 않고 계속하기",
                  "button-continue-aria-label": "수락하지 않고 계속하기",
                  "button-customize-aria-label": "쿠키 기본 설정 사용자 지정",
                  "button-accept-aria-label": "모든 쿠키 수락"
              },
              consentSelector: {
                  header: "쿠키 기본 설정 사용자 지정",
                  intro: 'AWS는 다음과 같은 목적으로 쿠키 및 유사한 도구(총칭하여 "쿠키")를 사용합니다.',
                  "checkbox-label": "허용됨",
                  "button-cancel": "취소",
                  "button-save": "기본 설정 저장",
                  "button-cancel-aria-label": "쿠키 기본 설정 사용자 지정 취소",
                  "button-save-aria-label": "사용자 지정된 쿠키 기본 설정 저장",
                  footer: i.act("span", null, "일부 유형의 쿠키를 차단하면 AWS 사이트 경험이 영향을 받을 수 있습니다. 언제든지 이 사이트의 바닥글에서 [쿠키 기본 설정]을 클릭하여 해당하는 쿠키 기본 설정을 변경할 수 있습니다. AWS 사이트에서 AWS 및 승인된 제 3자가 쿠키를 사용하는 방법에 대한 자세한 내용은 ", i.act("a", {
                      "data-id": "awsccc-cs-f-notice",
                      href: o,
                      target: "_blank",
                      rel: "noopener noreferrer",
                      title: "새 창에서 열기"
                  }, i.act("span", null, "AWS 쿠키 공지 사항", i.act(t.default, {
                      size: "10px"
                  }))), "을 참조하십시오."),
                  "footer-mobile": i.act("span", null, "일부 쿠키 유형을 차단하면 사이트 환경에 영향을 미칠 수 있습니다. 사용자는 언제든지 이 사이트의 하단에 표시되는 쿠키 기본 설정을 클릭하여 선택 사항을 검토하고 변경할 수 있습니다. AWS와 엄선된 서드 파티는 ", i.act("a", {
                      "data-id": "awsccc-cs-f-notice",
                      href: o,
                      target: "_blank",
                      rel: "noopener noreferrer",
                      title: "새 창에서 열림"
                  }, i.act("span", null, "AWS 쿠키 고지", i.act(t.default, {
                      size: "10px"
                  }))), "에 명시된 쿠키 또는 유사한 기술을 사용합니다. AWS 콘솔 모바일 앱은 서드 파티 쿠키 또는 광고 목적의 쿠키를 제공하지 않습니다."),
                  "section-essential": {
                      title: "필수",
                      paragraph: "필수 쿠키는 AWS 사이트 및 서비스를 제공하는 데 필요하며, 비활성화할 수 없습니다. 일반적으로 개인 정보 보호 기본 설정, 로그인 또는 양식 작성 등 사이트 내에서 사용자가 수행한 작업에 상응하는 쿠키가 설정됩니다. ",
                      "checkbox-description": "필수 범주 허용"
                  },
                  "section-performance": {
                      title: "성능",
                      paragraph: "성능 쿠키는 AWS에서 사이트 경험 및 성능을 개선할 수 있도록 고객이 AWS 사이트를 탐색하는 방법에 대한 익명의 통계를 제공합니다. 승인된 제3자가 AWS를 대신하여 분석을 수행할 수 있지만, 해당 데이터를 다른 특정 목적으로 사용할 수는 없습니다.",
                      "checkbox-description": "성능 범주 허용"
                  },
                  "section-functional": {
                      title: "기능",
                      paragraph: "기능 쿠키는 유용한 사이트 기능을 제공하고, 사용자의 기본 설정을 기억하며, 관련 콘텐츠를 표시하는 데 도움을 줍니다. 승인된 제3자가 이러한 쿠키를 설정하여 특정 사이트 기능을 제공할 수 있습니다. 이러한 쿠키를 허용하지 않으면 이러한 서비스 중 일부 또는 전체가 제대로 작동하지 않을 수 있습니다.",
                      "checkbox-description": "기능 범주 허용"
                  },
                  "section-advertising": {
                      title: "광고",
                      paragraph: "광고 쿠키는 AWS의 광고 파트너가 AWS 사이트를 통해 설정할 수 있으며, 관련 마케팅 콘텐츠를 제공하는 데 도움을 줍니다. 이러한 쿠키를 허용하지 않으면 관련성이 낮은 광고가 표시됩니다.",
                      "checkbox-description": "광고 범주 허용"
                  }
              },
              errorMessage: {
                  header: "쿠키 기본 설정을 저장할 수 없음",
                  paragraph: i.act("span", null, "쿠키 기본 설정을 저장할 수 없어 지금은 필수 쿠키만 저장합니다.", i.act("br", null), i.act("br", null), "쿠키 기본 설정을 변경하려면 나중에 AWS Console 바닥글의 링크를 사용하여 다시 시도하세요. 문제가 지속될 경우 지원 센터에 문의하세요."),
                  "button-dismiss": "무시",
                  "button-dismiss-aria-label": "오류 메시지 무시"
              }
          },
          "pt-br": {
              consentBanner: {
                  title: "Selecione suas preferências de cookies",
                  paragraph: i.act("span", null, "Usamos cookies essenciais e ferramentas semelhantes que são necessárias para a oferta de nosso site e de nossos serviços. Usamos cookies de desempenho para coletar estatísticas anônimas que nos permitam entender como os clientes usam nosso site e fazer melhorias. Não é possível desativar os cookies essenciais, mas você pode clicar em “Personalizar cookies” para recusar os cookies de desempenho. ", i.act("br", null), i.act("br", null), " Se você concordar, a AWS e terceiros aprovados também usarão cookies para fornecer recursos úteis do site, lembrar suas preferências e exibir conteúdo relevante, incluindo publicidade relevante. Para continuar sem aceitar esses cookies, clique em “Continuar sem aceitar”. Para fazer escolhas mais detalhadas ou saber mais, clique em “Personalizar cookies”."),
                  "paragraph-mobile": i.act("span", null, "Usamos cookies essenciais e ferramentas semelhantes que são necessárias para a oferta de nosso site e de nossos serviços. Usamos cookies de desempenho para coletar estatísticas anônimas que nos permitam entender como os clientes usam nosso site e fazer melhorias. Não é possível desativar os cookies essenciais, mas você pode clicar em “Personalizar cookies” para recusar os cookies de desempenho. ", i.act("br", null), i.act("br", null), " Se você concordar, a AWS e terceiros aprovados também usarão cookies para fornecer recursos úteis do site, lembrar suas preferências e exibir conteúdo relevante, incluindo publicidade relevante. Para continuar sem aceitar esses cookies, clique em “Continuar sem aceitar”. Para fazer escolhas mais detalhadas ou saber mais, clique em “Personalizar cookies”. O aplicativo móvel do Console da AWS não fornece cookies de terceiros ou cookies usados para publicidade."),
                  "button-customize": "Personalizar cookies",
                  "button-accept": "Aceitar todos os cookies",
                  "button-continue": "Continuar sem aceitar",
                  "button-continue-aria-label": "Continuar sem aceitar",
                  "button-customize-aria-label": "Personalizar preferências de cookies",
                  "button-accept-aria-label": "Aceitar todos os cookies"
              },
              consentSelector: {
                  header: "Personalizar preferências de cookies",
                  intro: 'Usamos cookies e ferramentas semelhantes (coletivamente, "cookies") para as seguintes finalidades.',
                  "checkbox-label": "Permitido",
                  "button-cancel": "Cancelar",
                  "button-save": "Salvar preferências",
                  "button-cancel-aria-label": "Cancelar personalização de preferências de cookies",
                  "button-save-aria-label": "Salvar preferências de cookies personalizadas",
                  footer: i.act("span", null, "Bloquear alguns tipos de cookies pode afetar sua experiência em nossos sites. Você pode alterar suas preferências de cookies a qualquer momento, clicando em Preferências de cookies no rodapé deste site. Para saber mais sobre como nós e terceiros aprovados usamos cookies em nossos sites, leia nosso ", i.act("a", {
                      "data-id": "awsccc-cs-f-notice",
                      href: o,
                      target: "_blank",
                      rel: "noopener noreferrer",
                      title: "Abre em uma nova janela"
                  }, i.act("span", null, "Aviso sobre cookies da AWS.", i.act(t.default, {
                      size: "10px"
                  })))),
                  "footer-mobile": i.act("span", null, "O bloqueio de alguns tipos de cookies pode afetar sua experiência em nossos sites. É possível conferir e alterar as opções a qualquer momento clicando em Preferências de cookies no rodapé do site. Nós e terceiros selecionados usamos cookies ou tecnologias semelhantes, conforme especificado no ", i.act("a", {
                      "data-id": "awsccc-cs-f-notice",
                      href: o,
                      target: "_blank",
                      rel: "noopener noreferrer",
                      title: "Abre em nova janela"
                  }, i.act("span", null, "Aviso sobre cookies da AWS", i.act(t.default, {
                      size: "10px"
                  }))), ". A aplicação móvel da Console AWS não utiliza cookies de terceiros nem cookies usados para publicidade."),
                  "section-essential": {
                      title: "Essenciais",
                      paragraph: "Cookies essenciais são necessários para fornecer nosso site e serviços e não podem ser desativados. Geralmente, eles são definidos em resposta às suas ações no site, como definir suas preferências de privacidade, fazer login ou preencher formulários. ",
                      "checkbox-description": "Permitir a categoria Essenciais"
                  },
                  "section-performance": {
                      title: "Desempenho",
                      paragraph: "Os cookies de desempenho fornecem estatísticas anônimas sobre como os clientes navegam em nosso site, para que possamos melhorar a experiência e o desempenho do site. Terceiros aprovados podem realizar análises em nosso nome, mas não podem usar os dados para seus próprios propósitos.",
                      "checkbox-description": "Permitir a categoria Desempenho"
                  },
                  "section-functional": {
                      title: "Funcionais",
                      paragraph: "Cookies funcionais nos ajudam a fornecer recursos úteis do site, lembrar suas preferências e exibir conteúdo relevante. Terceiros aprovados podem definir esses cookies para fornecer determinados recursos do site. Se você não permitir esses cookies, alguns ou todos esses serviços talvez não funcionem corretamente.",
                      "checkbox-description": "Permitir a categoria Funcionais"
                  },
                  "section-advertising": {
                      title: "Publicidade",
                      paragraph: "Cookies de publicidade podem ser configurados em nosso site por nós ou nossos parceiros de publicidade e nos ajudar a distribuir conteúdo de marketing relevante. Se você não permitir esses cookies, receberá publicidade menos relevante.",
                      "checkbox-description": "Permitir a categoria Publicidade"
                  }
              },
              errorMessage: {
                  header: "Não foi possível salvar as preferências de cookie",
                  paragraph: i.act("span", null, "No momento, só armazenaremos cookies essenciais, pois não foi possível salvar suas preferências.", i.act("br", null), i.act("br", null), "Se você quiser alterá-las, tente novamente mais tarde usando o link no rodapé do Console da AWS ou entre em contato com o suporte se o problema persistir."),
                  "button-dismiss": "Descartar",
                  "button-dismiss-aria-label": "Descartar mensagem de erro"
              }
          },
          "ru-ru": {
              consentBanner: {
                  title: "Выберите настройки файлов cookie",
                  paragraph: i.act("span", null, "Мы используем основные файлы cookie и аналогичные инструменты, необходимые для предоставления нашего сайта и услуг. Мы используем эксплуатационные файлы cookie для сбора анонимной статистики, чтобы понять, как клиенты используют наш сайт, и вносить улучшения. Основные файлы cookie нельзя деактивировать, но вы можете нажать «Настроить файлы cookie», чтобы отказаться от эксплуатационных файлов cookie. ", i.act("br", null), i.act("br", null), " Если вы согласитесь, AWS и одобренные третьи стороны также будут использовать файлы cookie для предоставления полезных функций сайта, запоминания ваших предпочтений и отображения релевантного контента, включая релевантную рекламу. Чтобы продолжить без принятия этих файлов cookie, нажмите «Продолжить, не принимая». Чтобы сделать более подробный выбор или узнать больше, нажмите «Настроить файлы cookie»."),
                  "paragraph-mobile": i.act("span", null, "Мы используем основные файлы cookie и аналогичные инструменты, необходимые для предоставления нашего сайта и услуг. Мы используем эксплуатационные файлы cookie для сбора анонимной статистики, чтобы понять, как клиенты используют наш сайт, и вносить улучшения. Основные файлы cookie нельзя деактивировать, но вы можете нажать «Настроить файлы cookie», чтобы отказаться от эксплуатационных файлов cookie. ", i.act("br", null), i.act("br", null), " Если вы согласитесь, AWS и одобренные третьи стороны также будут использовать файлы cookie для предоставления полезных функций сайта, запоминания ваших предпочтений и отображения релевантного контента, включая релевантную рекламу. Чтобы продолжить без принятия этих файлов cookie, нажмите «Продолжить, не принимая». Чтобы сделать более подробный выбор или узнать больше, нажмите «Настроить файлы cookie». Мобильное приложение консоли AWS не содержит файлов cookie третьих лиц или файлов cookie, используемых для рекламы."),
                  "button-customize": "Настройка файлов cookie",
                  "button-accept": "Принять все файлы cookie",
                  "button-continue": "Продолжить, не принимая",
                  "button-continue-aria-label": "Продолжить, не принимая",
                  "button-customize-aria-label": "Настроить параметры файлов cookie",
                  "button-accept-aria-label": "Принять все файлы cookie"
              },
              consentSelector: {
                  header: "Настроить параметры файлов cookie",
                  intro: "Мы используем файлы cookie и аналогичные инструменты (совместно именуемые «файлы cookie») для следующих целей.",
                  "checkbox-label": "Разрешенные",
                  "button-cancel": "Отмена",
                  "button-save": "Сохранить настройки",
                  "button-cancel-aria-label": "Отменить настройку параметров файлов cookie",
                  "button-save-aria-label": "Сохранить измененные параметры файлов cookie",
                  footer: i.act("span", null, "Блокировка некоторых типов файлов cookie может повлиять на вашу работу с нашими сайтами. Вы можете в любое время изменить настройки файлов cookie, нажав «Параметры файлов cookie» в нижнем колонтитуле этого сайта. Чтобы узнать больше о том, как файлы cookie на наших сайтах используются нами и одобренными третьими сторонами, прочитайте ", i.act("a", {
                      "data-id": "awsccc-cs-f-notice",
                      href: o,
                      target: "_blank",
                      rel: "noopener noreferrer",
                      title: "Откроется в новом окне"
                  }, i.act("span", null, "Уведомление AWS о файлах cookie.", i.act(t.default, {
                      size: "10px"
                  })))),
                  "footer-mobile": i.act("span", null, "Блокировка некоторых типов файлов cookie может повлиять на работу с нашими сайтами. Вы можете просмотреть и изменить свой выбор в любое время, нажав «Настройки файлов cookie» в нижней части этого сайта. Мы и некоторые третьи стороны используем файлы cookie или аналогичные технологии, как указано в ", i.act("a", {
                      "data-id": "awsccc-cs-f-notice",
                      href: o,
                      target: "_blank",
                      rel: "noopener noreferrer",
                      title: "(открывается в новом окне)"
                  }, i.act("span", null, " Уведомлении AWS о файлах cookie", i.act(t.default, {
                      size: "10px"
                  }))), ". Мобильное приложение «Консоль AWS» не предоставляет файлы cookie третьих сторон или используемые для рекламы."),
                  "section-essential": {
                      title: "Необходимые",
                      paragraph: "Необходимые файлы cookie требуется для работы нашего сайта и служб, и их нельзя отключить. Обычно они устанавливаются при выборе параметров конфиденциальности, входе в аккаунт, заполнении форм и других действиях на сайте. ",
                      "checkbox-description": "Разрешить категорию «Необходимые»"
                  },
                  "section-performance": {
                      title: "Связанные с производительностью",
                      paragraph: "Файлы cookie, связанные с производительностью, предоставляют анонимную статистику о том, как клиенты просматривают наш сайт, чтобы мы могли улучшить его работу и повысить производительность. Одобренные третьи стороны могут проводить анализ от нашего имени, но не имеют право использовать данные в своих целях.",
                      "checkbox-description": "Разрешить категорию «Связанные с производительностью»"
                  },
                  "section-functional": {
                      title: "Функциональные",
                      paragraph: "Функциональные файлы cookie помогают нам предоставлять полезные функции сайта, запоминать ваши предпочтения и отображать соответствующий контент. Одобренные третьи стороны могут устанавливать эти файлы cookie для предоставления определенных функций сайта. Если вы не разрешаете применять эти файлы cookie, некоторые (или все) эти сервисы могут работать неправильно.",
                      "checkbox-description": "Разрешить категорию «Функциональные»"
                  },
                  "section-advertising": {
                      title: "Рекламные",
                      paragraph: "Эти файлы cookie устанавливаются на наш сайт нами или нашими рекламными партнерами. Они помогают нам персонализировать рекламу. Если вы отключите эти файлы cookie, реклама станет менее релевантной.",
                      "checkbox-description": "Разрешить категорию «Рекламные»"
                  }
              },
              errorMessage: {
                  header: "Не удалось сохранить настройки файлов cookie",
                  paragraph: i.act("span", null, "В настоящее время мы будем хранить только необходимые файлы cookie, потому что нам не удалось сохранить ваши предпочтения в отношении файлов cookie.", i.act("br", null), i.act("br", null), "Если вы хотите изменить настройки файлов cookie, повторите попытку позже, перейдя по ссылке в нижнем колонтитуле консоли AWS, или обратитесь в службу поддержки, если проблема не исчезнет. "),
                  "button-dismiss": "Отклонить",
                  "button-dismiss-aria-label": "Отклонить сообщение об ошибке"
              }
          },
          "th-th": {
              consentBanner: {
                  title: "เลือกค่ากำหนดคุกกี้ของคุณ",
                  paragraph: i.act("span", null, 'เราใช้คุกกี้และเครื่องมือที่คล้ายกันที่จำเป็นต่อการให้บริการเว็บไซต์และบริการต่าง ๆ ของเรา เราใช้คุกกี้ประสิทธิภาพเพื่อรวบรวมสถิตินิรนามซึ่งจะสามารถทำให้เราเข้าใจถึงวิธีที่ลูกค้าใช้เว็บไซต์ของเราและทำการปรับปรุงเว็บไซต์เหล่านั้นได้ คุณจะไม่สามารถเปิดใช้งานคุกกี้ที่จำเป็นได้แต่คุณสามารถคลิก "ปรับแต่งคุกกี้" เพื่อปฏิเสธคุกกี้ประสิทธิภาพได้ ', i.act("br", null), i.act("br", null), ' หากคุณยินยอม ทาง AWS และบุคคลที่สามที่ได้รับอนุมัติจะใช้คุกกี้เพื่อให้บริการฟีเจอร์ที่มีประโยชน์ของเว็บไซต์ จดจำการตั้งค่าของคุณ และแสดงเนื้อหาที่เกี่ยวข้อง รวมถึงการโฆษณาที่เกี่ยวข้อง หากต้องการดำเนินการต่อโดยไม่ยอมรับคุกกี้เหล่านี้ ให้คลิก "ดำเนินการต่อโดยไม่ยอมรับ" หากต้องการเลือกรายละเอียดเพิ่มเติมหรือเรียนรู้เพิ่มเติม ให้คลิก "ปรับแต่งคุกกี้"'),
                  "paragraph-mobile": i.act("span", null, 'เราใช้คุกกี้และเครื่องมือที่คล้ายกันที่จำเป็นต่อการให้บริการเว็บไซต์และบริการต่าง ๆ ของเรา เราใช้คุกกี้ประสิทธิภาพเพื่อรวบรวมสถิตินิรนามซึ่งจะสามารถทำให้เราเข้าใจถึงวิธีที่ลูกค้าใช้เว็บไซต์ของเราและทำการปรับปรุงเว็บไซต์เหล่านั้นได้ คุณจะไม่สามารถเปิดใช้งานคุกกี้ที่จำเป็นได้แต่คุณสามารถคลิก "ปรับแต่งคุกกี้" เพื่อปฏิเสธคุกกี้ประสิทธิภาพได้ ', i.act("br", null), i.act("br", null), ' หากคุณยินยอม AWS และบุคคลที่สามที่ได้รับอนุมัติจะใช้คุกกี้เพื่อให้บริการฟีเจอร์ที่มีประโยชน์ของเว็บไซต์ จดจำการตั้งค่าของคุณ และแสดงเนื้อหาที่เกี่ยวข้อง รวมถึงการโฆษณาที่เกี่ยวข้อง หากต้องการดำเนินการต่อโดยไม่ยอมรับคุกกี้เหล่านี้ ให้คลิก "ดำเนินการต่อโดยไม่ยอมรับ" หากต้องการเลือกรายละเอียดเพิ่มเติมหรือเรียนรู้เพิ่มเติม ให้คลิก "ปรับแต่งคุกกี้" แอปคอนโซล AWS บนมือถือจะไม่ส่งมอบคุกกี้ของบุคคลที่สามหรือคุกกี้ที่ใช้สำหรับการโฆษณา'),
                  "button-customize": "ปรับแต่งคุกกี้",
                  "button-accept": "ยอมรับคุกกี้ทั้งหมด",
                  "button-continue": "ดำเนินการต่อโดยไม่ยอมรับ",
                  "button-continue-aria-label": "ดำเนินการต่อโดยไม่ยอมรับ",
                  "button-customize-aria-label": "ปรับแต่งค่ากำหนดของคุกกี้",
                  "button-accept-aria-label": "ยอมรับคุกกี้ทั้งหมด"
              },
              consentSelector: {
                  header: "ปรับแต่งค่ากำหนดของคุกกี้",
                  intro: 'เราใช้คุกกี้และเครื่องมือที่คล้ายคลึงกัน (เรียกโดยรวมว่า "คุกกี้") เพื่อวัตถุประสงค์ต่อไปนี้',
                  "checkbox-label": "อนุญาตแล้ว",
                  "button-cancel": "ยกเลิก",
                  "button-save": "บันทึกค่ากำหนด",
                  "button-cancel-aria-label": "ยกเลิกการปรับแต่งค่ากำหนดของคุกกี้",
                  "button-save-aria-label": "บันทึกค่ากำหนดของคุกกี้ที่ปรับแต่ง",
                  footer: i.act("span", null, "การบล็อกคุกกี้บางประเภทอาจส่งผลต่อประสบการณ์ในการใช้งานเว็บไซต์ของเรา คุณสามารถเปลี่ยนแปลงค่ากำหนดของคุกกี้ได้ทุกเมื่อ โดยคลิกที่ค่ากำหนดของคุกกี้ในส่วนล่างของเว็บไซต์นี้ หากต้องการเรียนรู้เพิ่มเติมเกี่ยวกับวิธีการที่เราและบุคคลภายนอกที่ได้รับอนุญาตใช้คุกกี้บนเว็บไซต์ของเรา โปรดอ่าน", i.act("a", {
                      "data-id": "awsccc-cs-f-notice",
                      href: o,
                      target: "_blank",
                      rel: "noopener noreferrer",
                      title: "เปิดในหน้าต่างบานใหม่"
                  }, i.act("span", null, "ประกาศเกี่ยวกับคุกกี้ของ AWS", i.act(t.default, {
                      size: "10px"
                  })))),
                  "footer-mobile": i.act("span", null, "การบล็อกคุกกี้บางประเภทอาจส่งผลต่อประสบการณ์การใช้งานเว็บไซต์ของเรา คุณสามารถตรวจสอบและเปลี่ยนแปลงการตั้งค่าที่คุณเลือกได้ทุกเมื่อ โดยคลิกการตั้งค่าคุกกี้ในส่วนท้ายของเว็บไซต์นี้ เราและบุคคลที่สามที่เลือกจะใช้คุกกี้หรือเทคโนโลยีที่คล้ายกันตามที่ระบุไว้ใน", i.act("a", {
                      "data-id": "awsccc-cs-f-notice",
                      href: o,
                      target: "_blank",
                      rel: "noopener noreferrer",
                      title: "ประกาศเกี่ยวกับคุกกี้ของ AWS"
                  }, i.act("span", null, " ซึ่งจะเปิดในหน้าต่างใหม่", i.act(t.default, {
                      size: "10px"
                  }))), " แอปคอนโซล AWS บนมือถือจะไม่ส่งคุกกี้หรือคุกกี้ที่ใช้สำหรับการโฆษณาให้บุคคลที่สาม"),
                  "section-essential": {
                      title: "คุกกี้ที่จำเป็น",
                      paragraph: "คุกกี้เหล่านี้จำเป็นต่อการให้บริการของเว็บไซต์และบริการของเรา และไม่สามารถปิดการใช้งานได้ โดยปกติแล้วจะมีการตั้งค่าให้ตอบสนองต่อการใช้งานของคุณบนเว็บไซต์ เช่น การตั้งค่ากำหนดความเป็นส่วนตัวของคุณ การลงชื่อเข้าใช้ หรือการกรอกแบบฟอร์มต่างๆ ",
                      "checkbox-description": "อนุญาตให้ใช้คุกกี้ที่จำเป็น"
                  },
                  "section-performance": {
                      title: "คุกกี้ด้านประสิทธิภาพ",
                      paragraph: "คุกกี้ด้านประสิทธิภาพจะให้ข้อมูลสถิติแบบไม่ระบุชื่อเกี่ยวกับลักษณะการเยี่ยมชมส่วนต่างๆ ของเว็บไซต์ของลูกค้า เพื่อที่เราจะได้นำไปปรับปรุงประสบการณ์และประสิทธิภาพของเว็บไซต์ บุคคลภายนอกที่ได้รับอนุญาตอาจทำการวิเคราะห์ข้อมูลในนามของเรา แต่จะไม่สามารถนำข้อมูลไปใช้เพื่อวัตถุประสงค์ของตัวเองได้",
                      "checkbox-description": "อนุญาตให้ใช้คุกกี้ด้านประสิทธิภาพ"
                  },
                  "section-functional": {
                      title: "คุกกี้เพื่อช่วยในการใช้งาน",
                      paragraph: "คุกกี้เพื่อช่วยในการใช้งานจะช่วยให้เรามอบคุณสมบัติที่มีประโยชน์ของเว็บไซต์ จดจำค่ากำหนดของคุณ และแสดงเนื้อหาที่เกี่ยวข้อง บุคคลภายนอกที่ได้รับอนุญาตอาจตั้งค่าคุกกี้เหล่านี้เพื่อมอบคุณสมบัติบางอย่างของเว็บไซต์ หากคุณไม่อนุญาตให้ใช้คุกกี้เหล่านี้ บริการบางอย่างหรือทั้งหมดเหล่านี้อาจทำงานไม่เหมาะสม",
                      "checkbox-description": "อนุญาตให้ใช้คุกกี้เพื่อช่วยในการใช้งาน"
                  },
                  "section-advertising": {
                      title: "คุกกี้เพื่อการโฆษณา",
                      paragraph: "คุกกี้เพื่อการโฆษณาอาจได้รับการตั้งค่าผ่านเว็บไซต์โดยเราหรือคู่ค้าด้านโฆษณาของเรา และช่วยเราในการส่งมอบเนื้อหาทางการตลาดที่เกี่ยวข้อง หากคุณไม่อนุญาตคุกกี้เหล่านี้ คุณจะพบโฆษณาที่เกี่ยวข้องน้อยลง",
                      "checkbox-description": "อนุญาตให้ใช้คุกกี้เพื่อการโฆษณา"
                  }
              },
              errorMessage: {
                  header: "ไม่สามารถบันทึกค่ากำหนดของคุกกี้ได้",
                  paragraph: i.act("span", null, "เราจะจัดเก็บเฉพาะคุกกี้ที่จำเป็นในขณะนี้เท่านั้น เนื่องจากเราไม่สามารถบันทึกค่ากำหนดของคุกกี้ของคุณได้", i.act("br", null), i.act("br", null), "หากคุณต้องการเปลี่ยนค่ากำหนดของคุกกี้ โปรดลองอีกครั้งโดยใช้ลิงก์ในส่วนท้ายของคอนโซล AWS หรือติดต่อฝ่ายสนับสนุนหากปัญหานี้ยังคงเกิดขึ้นอยู่"),
                  "button-dismiss": "ปิด",
                  "button-dismiss-aria-label": "ปิดข้อความแสดงข้อผิดพลาด"
              }
          },
          "tr-tr": {
              consentBanner: {
                  title: "Çerez tercihlerinizi seçme",
                  paragraph: i.act("span", null, 'Sitemizi ve hizmetlerimizi sağlamak için gerekli olan temel çerezleri ve benzer araçları kullanıyoruz. Müşterilerin sitemizi nasıl kullandığını anlayabilmemiz ve iyileştirmeler yapabilmemiz için anonim istatistikler toplamak üzere performans çerezleri kullanıyoruz. Temel çerezler devre dışı bırakılamaz ancak performans çerezlerini reddetmek için "Çerezleri özelleştir" seçeneğine tıklayabilirsiniz. ', i.act("br", null), i.act("br", null), ' Kabul ettiğinizde, AWS ve onaylı üçüncü taraflar da yararlı site özellikleri sağlamak, tercihlerinizi hatırlamak ve alakalı reklamlar dahil olmak üzere alakalı içerikler göstermek için çerezleri kullanacaktır. Bu çerezleri kabul etmeden devam etmek için "Kabul etmeden devam et" seçeneğine tıklayın. Daha ayrıntılı seçimler yapmak veya daha fazla bilgi edinmek için "Çerezleri özelleştir" seçeneğine tıklayın.'),
                  "paragraph-mobile": i.act("span", null, 'Sitemizi ve hizmetlerimizi sağlamak için gerekli olan temel çerezleri ve benzer araçları kullanıyoruz. Müşterilerin sitemizi nasıl kullandığını anlayabilmemiz ve iyileştirmeler yapabilmemiz için anonim istatistikler toplamak üzere performans çerezleri kullanıyoruz. Temel çerezler devre dışı bırakılamaz ancak performans çerezlerini reddetmek için "Çerezleri özelleştir" seçeneğine tıklayabilirsiniz. ', i.act("br", null), i.act("br", null), ' Kabul ettiğinizde, AWS ve onaylı üçüncü taraflar da yararlı site özellikleri sağlamak, tercihlerinizi hatırlamak ve alakalı reklamlar dahil olmak üzere alakalı içerikler göstermek için çerezleri kullanacaktır. Bu çerezleri kabul etmeden devam etmek için "Kabul etmeden devam et" seçeneğine tıklayın. Daha ayrıntılı seçimler yapmak veya daha fazla bilgi edinmek için "Çerezleri özelleştir" seçeneğine tıklayın. AWS Konsolu Mobil Uygulaması, üçüncü taraf çerezleri veya reklam amaçlı kullanılan çerezler teslim etmez.'),
                  "button-customize": "Çerezleri özelleştir",
                  "button-accept": "Tüm çerezleri kabul et",
                  "button-continue": "Kabul etmeden devam et",
                  "button-continue-aria-label": "Kabul etmeden devam et",
                  "button-customize-aria-label": "Çerez tercihlerini özelleştir",
                  "button-accept-aria-label": "Tüm çerezleri kabul et"
              },
              consentSelector: {
                  header: "Çerez tercihlerini özelleştir",
                  intro: 'Çerezleri ve benzer araçları (topluca "çerezler") aşağıdaki amaçlar için kullanırız.',
                  "checkbox-label": "İzin verildi",
                  "button-cancel": "İptal",
                  "button-save": "Tercihleri kaydet",
                  "button-cancel-aria-label": "Çerez tercihlerini özelleştirmeyi iptal et",
                  "button-save-aria-label": "Özelleştirilmiş çerez tercihlerini kaydet",
                  footer: i.act("span", null, "Bazı çerez türlerini engellemek, sitelerimizle ilgili deneyiminizi etkileyebilir. Bu sitenin alt bilgisindeki Çerez tercihleri bağlantısına tıklayarak dilediğiniz zaman seçimlerinizi değiştirebilirsiniz. Bizim ve onaylı üçüncü tarafların, çerezleri sitelerimizde nasıl kullandığımız hakkında daha fazla bilgi edinmek için lütfen ", i.act("a", {
                      "data-id": "awsccc-cs-f-notice",
                      href: o,
                      target: "_blank",
                      rel: "noopener noreferrer",
                      title: "Yeni Bir Pencerede Açılır"
                  }, i.act("span", null, "AWS Çerez Bildirimimizi", i.act(t.default, {
                      size: "10px"
                  }))), " okuyun."),
                  "footer-mobile": i.act("span", null, "Bazı çerez türlerini engellemek, sitelerimizle ilgili deneyiminizi etkileyebilir. Bu sitenin alt bilgisindeki Çerez tercihleri bağlantısına tıklayarak dilediğiniz zaman seçimlerinizi değiştirebilirsiniz. Bizim ve onaylı üçüncü tarafların, çerezleri sitelerimizde nasıl kullandığımız hakkında daha fazla bilgi edinmek için lütfen ", i.act("a", {
                      "data-id": "awsccc-cs-f-notice",
                      href: o,
                      target: "_blank",
                      rel: "noopener noreferrer",
                      title: "Yeni Bir Pencerede Açılır"
                  }, i.act("span", null, "AWS Çerez Bildirimimizi", i.act(t.default, {
                      size: "10px"
                  }))), " okuyun. AWS Console Mobil Uygulaması, üçüncü taraf çerezleri veya reklamcılık için kullanılan çerezleri sunmaz. "),
                  "section-essential": {
                      title: "Temel",
                      paragraph: "Temel çerezler, sitemizi ve hizmetlerimizi sunmak için gerekli olup devre dışı bırakılamaz. Bunlar genellikle sitede gizlilik tercihlerinizi ayarlama, oturum açma veya formları doldurma gibi eylemlerde bulunduğunuzda yerleştirilir. ",
                      "checkbox-description": "Temel kategoriye izin ver"
                  },
                  "section-performance": {
                      title: "Performans",
                      paragraph: "Performans çerezleri, site deneyimini ve performansını iyileştirebilmemiz için müşterilerin sitemizde nasıl gezindiği hakkında anonim istatistikler sağlar. Onaylı üçüncü taraflar bizim adımıza analiz yapabilir ancak verileri kendi amaçları için kullanamazlar.",
                      "checkbox-description": "Performans kategorisine izin ver"
                  },
                  "section-functional": {
                      title: "İşlevsellik",
                      paragraph: "İşlevsellik çerezleri yararlı site özellikleri sunmamıza, tercihlerinizi hatırlamamıza ve alakalı içerikler göstermemize yardımcı olur. Onaylı üçüncü taraflar bu çerezleri belirli site özelliklerini sağlamak için yerleştirebilir. Bu çerezlere izin vermezseniz, bu hizmetlerin bir kısmı veya tamamı düzgün çalışmayabilir.",
                      "checkbox-description": "İşlevsellik kategorisine izin ver"
                  },
                  "section-advertising": {
                      title: "Reklam",
                      paragraph: "Reklam çerezleri, sitemiz aracılığıyla bizim tarafımızdan ya da reklam çözüm ortaklarımız tarafından yerleştirilebilir ve alakalı pazarlama içerikleri yayınlamamıza yardımcı olur. Bu çerezlere izin vermezseniz, daha az alakalı reklamlarla karşılaşırsınız.",
                      "checkbox-description": "Reklam kategorisine izin ver"
                  }
              },
              errorMessage: {
                  header: "Çerez tercihleri kaydedilemiyor",
                  paragraph: i.act("span", null, "Çerez tercihlerinizi kaydedemediğimizden şimdilik yalnızca temel çerezleri saklayacağız.", i.act("br", null), i.act("br", null), "Çerez tercihlerinizi değiştirmek istiyorsanız AWS konsolu alt bilgisindeki bağlantıyı kullanarak daha sonra tekrar deneyin veya sorunun devam etmesi durumunda destek ekibiyle iletişime geçin."),
                  "button-dismiss": "Yok say",
                  "button-dismiss-aria-label": "Hata mesajını yok say"
              }
          },
          "vi-vn": {
              consentBanner: {
                  title: "Chọn tùy chọn cookie của bạn",
                  paragraph: i.act("span", null, "Chúng tôi sử dụng các cookie thiết yếu và các công cụ tương tự cần thiết để cung cấp trang web và các dịch vụ của chúng tôi. Chúng tôi sử dụng cookie hiệu suất để thu thập số liệu thống kê dạng ẩn danh để có thể thấu hiểu cách thức khách hàng sử dụng trang web của chúng tôi và đưa ra các cải tiến. Không thể tắt các cookie thiết yếu, nhưng bạn có thể nhấp vào “Tùy chỉnh cookie” để từ chối cookie hiệu suất. ", i.act("br", null), i.act("br", null), " Nếu bạn đồng ý, AWS và các bên thứ ba được phê duyệt cũng sẽ sử dụng cookie để cung cấp các tính năng hữu ích của trang web, ghi nhớ các tùy chọn của bạn và hiển thị nội dung liên quan, bao gồm cả quảng cáo liên quan. Để tiếp tục mà không chấp nhận các cookie này, hãy nhấp vào “Tiếp tục mà không chấp nhận”. Để thực hiện các lựa chọn chi tiết hơn hoặc tìm hiểu thêm, hãy nhấp vào “Tùy chỉnh cookie”."),
                  "paragraph-mobile": i.act("span", null, "Chúng tôi sử dụng các cookie thiết yếu và các công cụ tương tự cần thiết để cung cấp trang web và các dịch vụ của chúng tôi. Chúng tôi sử dụng cookie hiệu suất để thu thập số liệu thống kê dạng ẩn danh để có thể thấu hiểu cách thức khách hàng sử dụng trang web của chúng tôi và đưa ra các cải tiến. Không thể tắt các cookie thiết yếu, nhưng bạn có thể nhấp vào “Tùy chỉnh cookie” để từ chối cookie hiệu suất. ", i.act("br", null), i.act("br", null), " Nếu bạn đồng ý, AWS và các bên thứ ba được phê duyệt cũng sẽ sử dụng cookie để cung cấp các tính năng hữu ích của trang web, ghi nhớ các tùy chọn của bạn và hiển thị nội dung liên quan, bao gồm cả quảng cáo liên quan. Để tiếp tục mà không chấp nhận các cookie này, hãy nhấp vào “Tiếp tục mà không chấp nhận”. Để thực hiện các lựa chọn chi tiết hơn hoặc tìm hiểu thêm, hãy nhấp vào “Tùy chỉnh cookie”. Ứng dụng di động của Bảng điều khiển AWS không phân phối cookie của bên thứ ba hoặc cookie được dùng cho quảng cáo."),
                  "button-customize": "Tùy chỉnh cookie",
                  "button-accept": "Chấp nhận tất cả cookie",
                  "button-continue": "Tiếp tục mà không chấp nhận",
                  "button-continue-aria-label": "Tiếp tục mà không chấp nhận",
                  "button-customize-aria-label": "Tùy chỉnh tùy chọn cookie",
                  "button-accept-aria-label": "Chấp nhận tất cả cookie"
              },
              consentSelector: {
                  header: "Tùy chỉnh tùy chọn cookie",
                  intro: "Chúng tôi sử dụng cookie và các công cụ tương tự (gọi chung là “cookie”) để phục vụ các mục đích sau.",
                  "checkbox-label": "Đã cho phép",
                  "button-cancel": "Hủy",
                  "button-save": "Lưu tùy chọn",
                  "button-cancel-aria-label": "Hủy tùy chỉnh tùy chọn cookie",
                  "button-save-aria-label": "Lưu tùy chọn cookie đã tùy chỉnh",
                  footer: i.act("span", null, "Việc chặn một số loại cookie có thể ảnh hưởng đến trải nghiệm của bạn trên trang của chúng tôi. Bạn có thể thay đổi tùy chọn cookie của mình bất cứ lúc nào bằng cách nhấp vào Tùy chọn cookie ở chân của trang này. Để tìm hiểu thêm về cách chúng tôi và các bên thứ ba được chấp thuận sử dụng cookie trên trang của chúng tôi, vui lòng đọc ", i.act("a", {
                      "data-id": "awsccc-cs-f-notice",
                      href: o,
                      target: "_blank",
                      rel: "noopener noreferrer",
                      title: "Mở trong cửa sổ mới"
                  }, i.act("span", null, "Thông báo về cookie của AWS.", i.act(t.default, {
                      size: "10px"
                  })))),
                  "footer-mobile": i.act("span", null, "Việc chặn một số loại cookie có thể ảnh hưởng đến trải nghiệm bạn duyệt các trang web của chúng tôi. Bạn có thể xem xét và thay đổi lựa chọn của mình bất cứ lúc nào bằng cách nhấp vào Tùy chọn cookie ở chân trang của trang web này. Chúng tôi và các bên thứ ba được chọn sử dụng cookie hoặc các công nghệ tương tự như được chỉ định trong phần ", i.act("a", {
                      "data-id": "awsccc-cs-f-notice",
                      href: o,
                      target: "_blank",
                      rel: "noopener noreferrer",
                      title: "Mở trong một Cửa sổ mới"
                  }, i.act("span", null, "Thông báo về cookie của AWS", i.act(t.default, {
                      size: "10px"
                  }))), ". Console Mobile App của AWS không cung cấp cookie của bên thứ ba hoặc cookie dùng cho quảng cáo."),
                  "section-essential": {
                      title: "Thiết yếu",
                      paragraph: "Cookie thiết yếu đóng vai trò cần thiết trong việc cung cấp trang cũng như dịch vụ của chúng tôi và không thể bị vô hiệu hóa. Thông thường, cookie được thiết lập để phản hồi các hành động của bạn trên trang, chẳng hạn như thiết lập tùy chọn quyền riêng tư, đăng nhập hoặc điền vào biểu mẫu. ",
                      "checkbox-description": "Cho phép hạng mục thiết yếu"
                  },
                  "section-performance": {
                      title: "Hiệu suất",
                      paragraph: "Cookie hiệu suất cung cấp số liệu thống kê ẩn danh về cách khách hàng điều hướng trang của chúng tôi nhằm giúp chúng tôi cải thiện trải nghiệm và hiệu suất của trang. Các bên thứ ba được chấp thuận có thể thực hiện phân tích thay mặt chúng tôi nhưng không thể sử dụng dữ liệu cho mục đích riêng của mình.",
                      "checkbox-description": "Cho phép hạng mục hiệu suất"
                  },
                  "section-functional": {
                      title: "Chức năng",
                      paragraph: "Cookie chức năng giúp chúng tôi cung cấp các tính năng có ích trên trang, ghi nhớ tùy chọn của bạn và hiển thị nội dung phù hợp. Các bên thứ ba được chấp thuận có thể thiết lập các cookie này để cung cấp một số tính năng trên site. Nếu bạn không cho phép các cookie này thì một số hoặc toàn bộ các dịch vụ này có thể không hoạt động đúng cách.",
                      "checkbox-description": "Cho phép hạng mục chức năng"
                  },
                  "section-advertising": {
                      title: "Quảng cáo",
                      paragraph: "Chúng tôi hoặc các đối tác quảng cáo của chúng tôi có thể thiết lập cookie quảng cáo thông qua trang của chúng tôi. Các cookie này giúp chúng tôi phân phối nội dung tiếp thị phù hợp. Nếu bạn không cho phép các cookie này, bạn sẽ nhận được quảng cáo ít phù hợp hơn.",
                      "checkbox-description": "Cho phép hạng mục quảng cáo"
                  }
              },
              errorMessage: {
                  header: "Không thể lưu tùy chọn cookie",
                  paragraph: i.act("span", null, "Chúng tôi sẽ chỉ lưu trữ các cookie thiết yếu tại thời điểm này, vì chúng tôi không thể lưu tùy chọn cookie của bạn.", i.act("br", null), i.act("br", null), "Nếu bạn muốn thay đổi tùy chọn cookie của mình, hãy thử lại sau bằng cách sử dụng liên kết ở chân trang của bảng điều khiển AWS hoặc liên hệ với bộ phận hỗ trợ nếu vẫn xảy ra lỗi."),
                  "button-dismiss": "Đóng",
                  "button-dismiss-aria-label": "Đóng thông báo lỗi"
              }
          },
          "zh-cn": {
              consentBanner: {
                  title: "选择您的 Cookie 首选项",
                  paragraph: i.act("span", null, "我们使用必要的基本 Cookie 和类似工具来提供网站和服务。我们使用性能 Cookie 来收集匿名统计信息，以便了解客户如何使用我们的网站并进行改进。您无法停用基本 Cookie，但可以单击“自定义 Cookie”以拒绝性能 Cookie。", i.act("br", null), i.act("br", null), " 如果您同意，AWS 和经批准的第三方还将使用 Cookie 来提供有用的网站功能、记住您的偏好并显示相关内容，包括相关广告。要继续而不接受这些 Cookie，请单击“继续而不接受”。要做出更详细的选择或了解更多信息，请单击“自定义 Cookie”。"),
                  "paragraph-mobile": i.act("span", null, "我们使用必要的基本 Cookie 和类似工具来提供网站和服务。我们使用性能 Cookie 来收集匿名统计信息，以便了解客户如何使用我们的网站并进行改进。您无法停用基本 Cookie，但可以单击“自定义 Cookie”以拒绝性能 Cookie。", i.act("br", null), i.act("br", null), " 如果您同意，AWS 和经批准的第三方还将使用 Cookie 来提供有用的网站功能、记住您的偏好并显示相关内容，包括相关广告。要继续而不接受这些 Cookie，请单击“继续而不接受”。要做出更详细的选择或了解更多信息，请单击“自定义 Cookie”。AWS 控制台移动应用程序不提供第三方 Cookie 或用于广告的 Cookie。"),
                  "button-customize": "自定义 Cookie",
                  "button-accept": "接受所有 Cookie",
                  "button-continue": "继续而不接受",
                  "button-continue-aria-label": "继续而不接受",
                  "button-customize-aria-label": "自定义 Cookie 首选项",
                  "button-accept-aria-label": "接受所有 Cookie"
              },
              consentSelector: {
                  header: "自定义 Cookie 首选项",
                  intro: "Cookie 及类似工具(统称为“Cookie”)的用途包括以下几种。",
                  "checkbox-label": "允许",
                  "button-cancel": "取消",
                  "button-save": "保存首选项",
                  "button-cancel-aria-label": "取消自定义 Cookie 首选项",
                  "button-save-aria-label": "保存自定义的 Cookie 首选项",
                  footer: i.act("span", null, "阻止某些类型的 Cookie 的话，可能会影响到您的网站体验。您可以随时单击此网站页脚中的 Cookie 首选项来对您的 Cookie 首选项进行更改。要了解有关我们及经批准的第三方如何在网站上使用 Cookie 的更多信息，请阅读 ", i.act("a", {
                      "data-id": "awsccc-cs-f-notice",
                      href: o,
                      target: "_blank",
                      rel: "noopener noreferrer",
                      title: "在新窗口中打开"
                  }, i.act("span", null, "AWS Cookie 声明。", i.act(t.default, {
                      size: "10px"
                  })))),
                  "footer-mobile": i.act("span", null, "封锁某些类型的 Cookie 可能会影响您对我们网站的体验。您可以随时单击此网站页脚中的“Cookie 首选项”来审核和更改您的选择。我们和选择的第三方使用 Cookie 或类似技术，如", i.act("a", {
                      "data-id": "awsccc-cs-f-notice",
                      href: o,
                      target: "_blank",
                      rel: "noopener noreferrer",
                      title: "在新窗口中打开"
                  }, i.act("span", null, "AWS Cookie 声明", i.act(t.default, {
                      size: "10px"
                  }))), "中指定。AWS 控制台移动应用程序不会提供第三方 Cookie 或用于广告的 Cookie。"),
                  "section-essential": {
                      title: "关键",
                      paragraph: "关键 Cookie 对我们提供网站和服务来说绝对必要，不可将其禁用。关键 Cookie 通常是根据您在网站上的操作(例如，设置您的隐私首选项，登录或填写表格)来设置的。",
                      "checkbox-description": "允许关键类别"
                  },
                  "section-performance": {
                      title: "性能",
                      paragraph: "性能 Cookie 可为我们提供有关客户使用网站情况的匿名统计信息，以便我们改善用户的网站体验及网站性能。经批准的第三方可为我们执行分析，但不可将数据用于其自身目的。",
                      "checkbox-description": "允许性能类别"
                  },
                  "section-functional": {
                      title: "功能",
                      paragraph: "功能 Cookie 有助于我们提供有用的网站功能，记住您的首选项及显示有针对性的内容。经批准的第三方可对功能 Cookie 进行设置以提供某些网站功能。如果您不允许功能 Cookie，则某些或所有这些服务可能无法正常提供。",
                      "checkbox-description": "允许功能类别"
                  },
                  "section-advertising": {
                      title: "广告",
                      paragraph: "广告 Cookie 可由我们或我们的广告合作伙伴通过我们的网站进行设置，有助于我们推送有针对性的营销内容。如果您不允许广告 Cookie，则您所接收到的广告的针对性将会有所降低。",
                      "checkbox-description": "允许广告类别"
                  }
              },
              errorMessage: {
                  header: "无法保存 Cookie 首选项",
                  paragraph: i.act("span", null, "我们目前只会存储基本 Cookie，因为我们无法保存您的 Cookie 首选项。", i.act("br", null), i.act("br", null), "如果您想要更改 Cookie 首选项，请稍后使用 AWS 控制台页脚中的链接重试，如果问题仍然存在，请联系技术支持。"),
                  "button-dismiss": "关闭",
                  "button-dismiss-aria-label": "关闭错误消息"
              }
          },
          "zh-tw": {
              consentBanner: {
                  title: "選取您的 Cookie 偏好設定",
                  paragraph: i.act("span", null, "我們使用必要的 Cookie 和類似工具，這些是提供我們的網站和服務所必需的工具。我們使用效能 Cookie 收集匿名統計資訊，以便了解客戶如何使用我們的網站並進行改進。基本 Cookie 無法停用，但您可以按一下「自訂 Cookie」來拒絕效能 Cookie。", i.act("br", null), i.act("br", null), " 如果您同意，AWS 和核准的第三方也會使用 Cookie 來提供有用的網站功能、記住您的偏好設定，以及顯示相關內容，包括相關廣告。若要繼續而不接受這些 Cookie，請按一下「繼續而不接受」。要做出更詳細的選擇或了解更多資訊，請按一下「自訂 Cookie」。"),
                  "paragraph-mobile": i.act("span", null, "我們使用必要的 Cookie 和類似工具，這些是提供我們的網站和服務所必需的工具。我們使用效能 Cookie 收集匿名統計資訊，以便了解客戶如何使用我們的網站並進行改進。基本 Cookie 無法停用，但您可以按一下「自訂 Cookie」來拒絕效能 Cookie。", i.act("br", null), i.act("br", null), " 如果您同意，AWS 和核准的第三方也會使用 Cookie 來提供有用的網站功能、記住您的偏好設定，以及顯示相關內容，包括相關廣告。若要繼續而不接受這些 Cookie，請按一下「繼續而不接受」。要做出更詳細的選擇或了解更多資訊，請按一下「自訂 Cookie」。AWS 主控台行動應用程式不會交付第三方 Cookie 或用於廣告的 Cookie。"),
                  "button-customize": "自訂 Cookie",
                  "button-accept": "接受所有 Cookie",
                  "button-continue": "繼續而不接受",
                  "button-continue-aria-label": "繼續而不接受",
                  "button-customize-aria-label": "自訂 Cookie 偏好設定",
                  "button-accept-aria-label": "接受所有 Cookie"
              },
              consentSelector: {
                  header: "自訂 Cookie 偏好設定",
                  intro: '我們會將 Cookie 和類似工具 (統稱為 "Cookie") 用於以下目的。',
                  "checkbox-label": "已允許",
                  "button-cancel": "取消",
                  "button-save": "儲存偏好設定",
                  "button-cancel-aria-label": "取消自訂 Cookie 偏好設定",
                  "button-save-aria-label": "儲存自訂的 Cookie 偏好設定",
                  footer: i.act("span", null, "封鎖部分類型的 Cookie 可能會影響您在使用我們的網站時的體驗。您可以隨時在本網站頁尾按一下「Cookie 偏好設定」來變更您的 Cookie 偏好設定。若要進一步了解我們和獲核准的第三方如何在我們的網站上使用 Cookie，請閱讀我們的 ", i.act("a", {
                      "data-id": "awsccc-cs-f-notice",
                      href: o,
                      target: "_blank",
                      rel: "noopener noreferrer",
                      title: "(在新視窗中開啟) "
                  }, i.act("span", null, "AWS Cookie 通知。", i.act(t.default, {
                      size: "10px"
                  })))),
                  "footer-mobile": i.act("span", null, "封鎖某些類型的 Cookie 可能會影響您對我們網站的體驗。您可以隨時按一下此網站頁尾中的「Cookie 偏好設定」來檢閱和變更您的選擇。我們和選取的第三方使用 Cookie 或類似技術，如", i.act("a", {
                      "data-id": "awsccc-cs-f-notice",
                      href: o,
                      target: "_blank",
                      rel: "noopener noreferrer",
                      title: "(在新視窗中開啟) "
                  }, i.act("span", null, "AWS Cookie 聲明", i.act(t.default, {
                      size: "10px"
                  }))), "中指定。AWS 主控台行動應用程式不會提供第三方 Cookie 或用於廣告的 Cookie。"),
                  "section-essential": {
                      title: "必要",
                      paragraph: "必要 Cookie 對於我們所提供的網站和服務而是必要的，而且無法停用。它們的設定通常是對您在網站上的動作的回應，例如，設定您的隱私偏好、登入或填寫表單。",
                      "checkbox-description": "允許必要類別"
                  },
                  "section-performance": {
                      title: "效能",
                      paragraph: "效能 Cookie 提供有關客戶如何瀏覽我們網站的匿名統計資料，以便我們改善網站體驗和效能。獲核准的第三方可代表我們執行分析，但他們無法將資料用於自己的用途。",
                      "checkbox-description": "允許效能類別"
                  },
                  "section-functional": {
                      title: "功能",
                      paragraph: "功能 Cookie 可協助我們提供實用的網站功能、記住您的偏好設定，以及顯示相關內容，獲核准的第三方可能會設定這些 Cookie 以提供特定網站功能。若您不允許這些 Cookie，則部分或全部服務可能無法正常運作。",
                      "checkbox-description": "允許功能類別"
                  },
                  "section-advertising": {
                      title: "廣告",
                      paragraph: "我們或我們的廣告合作夥伴可以透過網站對廣告 Cookie 進行設定，協助我們提供相關的行銷內容。若您不允許這些 Cookie，您將看到相關程度較低的廣告。",
                      "checkbox-description": "允許廣告類別"
                  }
              },
              errorMessage: {
                  header: "無法儲存 Cookie 偏好設定",
                  paragraph: i.act("span", null, "我們目前只會儲存基本 Cookie，因為我們無法儲存您的 Cookie 偏好設定。", i.act("br", null), i.act("br", null), "如果您想要變更 Cookie 偏好設定，請稍後使用 AWS 主控台頁尾中的連結重試，如果問題仍存在，請聯絡支援部門。"),
                  "button-dismiss": "關閉",
                  "button-dismiss-aria-label": "關閉錯誤訊息"
              }
          }
      }
  }
  , function(e, a, n) {
      "use strict";
      Object.defineProperty(a, "__esModule", {
          value: !0
      });
      var i = n(36);
      a.default = function(e, a, n) {
          void 0 === a && (a = i.v4),
          void 0 === n && (n = function() {
              return "ts-" + Date.now().toString()
          }
          );
          var t = e ? e("error") : function() {}
          ;
          try {
              return a()
          } catch (e) {
              return t("uuid", {
                  detail: "Error generating UUID",
                  errorMessage: e.message || ""
              }),
              n()
          }
      }
  }
  , function(e, a, n) {
      "use strict";
      Object.defineProperty(a, "__esModule", {
          value: !0
      }),
      a.queryGeolocationByHttpGetRequest = a.timestampUrl = a.QUERY_PARAM_KEY = a.DEFAULT_CONSOLE_INTEGRATION_GEOLOCATION_URL = a.DEFAULT_GEOLOCATION_URL = void 0;
      var i = n(10);
      a.DEFAULT_GEOLOCATION_URL = "https://prod.tools.shortbread.aws.dev/1x1.png",
      a.DEFAULT_CONSOLE_INTEGRATION_GEOLOCATION_URL = "https://prod.tools.shortbread.analytics.console.aws.a2z.com/ping",
      a.QUERY_PARAM_KEY = "awsccc",
      a.timestampUrl = function(e) {
          if (-1 !== e.indexOf("?")) {
              var n = e.split("?");
              e = n[0] + "?" + a.QUERY_PARAM_KEY + "=" + Date.now() + "&" + n[1]
          } else {
              if (-1 === e.indexOf("#"))
                  return e + "?" + a.QUERY_PARAM_KEY + "=" + Date.now();
              n = e.split("#");
              e = n[0] + "?" + a.QUERY_PARAM_KEY + "=" + Date.now() + "#" + n[1]
          }
          return e
      }
      ,
      a.queryGeolocationByHttpGetRequest = function(e, n, t, o) {
          function r(e, a, i, t, o) {
              e("info")("geolocationLatency", {
                  metric: a,
                  region: i,
                  detail: t,
                  url: n,
                  status: o
              })
          }
          return void 0 === e && (e = !1),
          void 0 === n && (n = a.DEFAULT_GEOLOCATION_URL),
          void 0 === t && (t = 5e3),
          void 0 === o && (o = i.DEFAULT_LOGGER),
          function(c, s) {
              void 0 === s && (s = o || i.DEFAULT_LOGGER);
              var l = Date.now()
                , u = new XMLHttpRequest
                , d = "EU"
                , p = 200;
              e && u.overrideMimeType("application/json"),
              u.addEventListener("load", (function() {
                  if (p = u.status,
                  e && 304 !== p)
                      try {
                          var a = JSON.parse(u.response);
                          403 === (p = a.status) && (d = "NON-EU")
                      } catch (e) {
                          s("error")("geolocationResponseError", {
                              url: n,
                              detail: "Failed to Parse the Received Geolocation Response"
                          })
                      }
                  else
                      d = 403 === p ? "NON-EU" : "EU";
                  r(s, Date.now() - l, d, "Geolocation Response Received", p),
                  c(d)
              }
              )),
              u.addEventListener("timeout", (function() {
                  c("EU");
                  var e = "Geolocation Request Timed out";
                  r(s, t, "EU", e, u.status),
                  s("error")("geolocationRequestTimeout", {
                      url: n,
                      timeoutSetting: t,
                      detail: e
                  })
              }
              )),
              u.open("GET", a.timestampUrl(n)),
              u.timeout = t,
              u.send()
          }
      }
      ,
      a.default = a.queryGeolocationByHttpGetRequest
  }
  , function(e, a, n) {
      "use strict";
      var i = this && this.__assign || function() {
          return (i = Object.assign || function(e) {
              for (var a, n = 1, i = arguments.length; n < i; n++)
                  for (var t in a = arguments[n])
                      Object.prototype.hasOwnProperty.call(a, t) && (e[t] = a[t]);
              return e
          }
          ).apply(this, arguments)
      }
      ;
      Object.defineProperty(a, "__esModule", {
          value: !0
      }),
      a.DEFAULT_LOGGER = a.createLogger = a.DEFAULT_CONSOLE_INTEGRATION_LOGGER_PIXEL_URL = a.DEFAULT_LOGGER_PIXEL_URL = void 0,
      a.DEFAULT_LOGGER_PIXEL_URL = "https://prod.log.shortbread.aws.dev/1x1.png",
      a.DEFAULT_CONSOLE_INTEGRATION_LOGGER_PIXEL_URL = "https://prod.log.shortbread.analytics.console.aws.a2z.com/1x1.png";
      a.createLogger = function(e) {
          var n = e.baseUrl
            , t = void 0 === n ? a.DEFAULT_LOGGER_PIXEL_URL : n
            , o = e.timeout
            , r = void 0 === o ? 5e3 : o;
          return function(e) {
              return function(a, n) {
                  void 0 === n && (n = {}),
                  function(e, a) {
                      try {
                          var n = new XMLHttpRequest;
                          n.onreadystatechange = function() {}
                          ,
                          n.ontimeout = function() {}
                          ,
                          n.onerror = function() {}
                          ,
                          n.open("HEAD", e),
                          n.timeout = a,
                          n.send()
                      } catch (e) {
                          console.log("Error attempting to post a log message: {e}")
                      }
                  }(function(e, a, n, t) {
                      void 0 === t && (t = {});
                      var o = i({
                          timestamp: Date.now(),
                          logVersion: "1",
                          domain: window.location.host,
                          url: window.location.href
                      }, t);
                      return e + "?" + ("severity=" + encodeURIComponent(a) + "&message=" + encodeURIComponent(n) + "&payload=" + encodeURIComponent(JSON.stringify(o)))
                  }(t, e, a, n), r)
              }
          }
      }
      ,
      a.DEFAULT_LOGGER = a.createLogger({
          baseUrl: "https://prod.log.shortbread.aws.dev/1x1.png"
      }),
      a.default = a.createLogger
  }
  , function(e, a, n) {
      e.exports = n(12)
  }
  , function(e, a, n) {
      "use strict";
      var i = this && this.__createBinding || (Object.create ? function(e, a, n, i) {
          void 0 === i && (i = n),
          Object.defineProperty(e, i, {
              enumerable: !0,
              get: function() {
                  return a[n]
              }
          })
      }
      : function(e, a, n, i) {
          void 0 === i && (i = n),
          e[i] = a[n]
      }
      )
        , t = this && this.__exportStar || function(e, a) {
          for (var n in e)
              "default" === n || a.hasOwnProperty(n) || i(a, e, n)
      }
      ;
      Object.defineProperty(a, "__esModule", {
          value: !0
      });
      var o = n(13);
      Object.defineProperty(a, "AWSCShortbread", {
          enumerable: !0,
          get: function() {
              return o.AWSCShortbread
          }
      }),
      t(n(9), a),
      t(n(4), a)
  }
  , function(e, a, n) {
      "use strict";
      var i = this && this.__assign || function() {
          return (i = Object.assign || function(e) {
              for (var a, n = 1, i = arguments.length; n < i; n++)
                  for (var t in a = arguments[n])
                      Object.prototype.hasOwnProperty.call(a, t) && (e[t] = a[t]);
              return e
          }
          ).apply(this, arguments)
      }
      ;
      Object.defineProperty(a, "__esModule", {
          value: !0
      }),
      a.AWSCShortbread = void 0;
      var t = n(5)
        , o = n(4)
        , r = n(3)
        , c = n(6)
        , s = n(7)
        , l = n(9)
        , u = n(8)
        , d = n(10)
        , p = {};
      function k(e) {
          Object.keys(p).forEach((function(a) {
              if (e[a]) {
                  var n = p[a];
                  n && n.forEach((function(e) {
                      e()
                  }
                  ))
              }
          }
          )),
          c.COOKIE_CATEGORIES.filter((function(a) {
              return e[a]
          }
          )).forEach((function(e) {
              p[e] = []
          }
          ))
      }
      function m(e) {
          var a = document.createEvent("CustomEvent");
          a.initCustomEvent(r.CONSENT_COOKIE_CHANGED_EVENT, !1, !1, e),
          document.dispatchEvent(a)
      }
      var b = function(e, a) {
          return function(n) {
              o.setConsentCookie(n, e.domain, r.DEFAULT_COOKIE_AGE, u.default, e.__storeWriter, e.__configurationValidator, a, e.__uuidGenerator, e.__uuidFallback),
              m(n)
          }
      };
      function h(e, a, n) {
          if (!e)
              throw n("error")("checkNameIsInRegistry", {
                  detail: "AWSCC: No registry configured"
              }),
              Error("AWSCC: No registry configured");
          if (!e[a])
              throw n("error")("checkNameIsInRegistry", {
                  detail: "AWSCC: No such entry " + a + " is in the registry"
              }),
              Error("AWSCC: No such entry " + a + " is in the registry")
      }
      function f(e) {
          if (e && "string" == typeof e) {
              var a = e.toLowerCase().replace(/[–_]/, "-");
              return s.localizationDictionary[a] ? a : r.DEFAULT_LANGUAGE
          }
          return r.DEFAULT_LANGUAGE
      }
      a.AWSCShortbread = function(e) {
          void 0 === e && (e = {});
          var a = e
            , n = a.log || d.createLogger({
              baseUrl: a.hasConsoleNavFooter ? d.DEFAULT_CONSOLE_INTEGRATION_LOGGER_PIXEL_URL : d.DEFAULT_LOGGER_PIXEL_URL
          });
          void 0 !== a.domain && "string" == typeof a.domain && -1 !== a.domain.indexOf("aws.amazon.com") ? a.domain = r.DEFAULT_DOMAIN : null == a.domain && -1 !== window.location.hostname.indexOf("aws-dev.amazon.com") && (a.domain = r.DEFAULT_TANGERINEBOX_DEV_DOMAIN);
          var c = a.__configurationValidator || o.validateConfiguration;
          c({
              domain: a.domain,
              log: n
          }, "sbInit");
          var s = t.default.createShortbreadUi({
              domain: a.domain,
              parent: a.parent,
              language: f(a.language),
              onSaveConsent: b(a, n),
              getConsentCookie: function() {
                  return o.getConsentCookie(a.__storeReader, n)
              },
              log: n,
              onModalClose: a.onModalClose,
              hasConsoleNavFooter: a.hasConsoleNavFooter || !1,
              runtimeEnvironment: a.runtimeEnvironment || "default",
              handleValidation: c
          });
          function g() {
              var e = o.getConsentCookie(a.__storeReader, n);
              return e ? (m(e),
              e) : e
          }
          var v, z, y = (v = a.onConsentChanged,
          z = function(e) {
              var a = e.detail;
              k(a),
              v && v(a)
          }
          ,
          document.addEventListener(r.CONSENT_COOKIE_CHANGED_EVENT, z),
          z);
          return {
              checkForCookieConsent: function() {
                  var e = g();
                  if (n("info")("checkForCookieConsent", e ? {
                      cookie: e,
                      uuid: o.getId()
                  } : {
                      status: "Consent cookie not present"
                  }),
                  !e) {
                      var t = a.hasConsoleNavFooter ? l.DEFAULT_CONSOLE_INTEGRATION_GEOLOCATION_URL : l.DEFAULT_GEOLOCATION_URL;
                      (a.queryGeolocation || l.default(a.hasConsoleNavFooter, t))((function(e) {
                          if (!g())
                              if ("EU" === e)
                                  s.showBanner((function() {
                                      n("info")("bannerShown", {
                                          region: e
                                      }),
                                      a.onBannerShown && a.onBannerShown()
                                  }
                                  ));
                              else {
                                  m(o.setConsentCookie(i({}, r.ALL_ALLOWED), a.domain, 86400, u.default, a.__storeWriter, a.__configurationValidator, n, a.__uuidGenerator, a.__uuidFallback))
                              }
                      }
                      ), n)
                  }
              },
              customizeCookies: function() {
                  s.showConsentSelector("manualTrigger")
              },
              getConsentCookie: function() {
                  return o.getConsentCookie(a.__storeReader, n)
              },
              access: function(e, i) {
                  h(a.registry, e, n);
                  var t = a.registry[e].category;
                  p[t] || (p[t] = []),
                  p[t].push((function() {
                      return i(e, a.registry[e])
                  }
                  ));
                  var r = o.getConsentCookie(a.__storeReader, n);
                  r && k(r)
              },
              hasConsent: function(e) {
                  return h(a.registry, e, n),
                  (o.getConsentCookie(a.__storeReader, n) || i({}, r.DEFAULT_COOKIE))[a.registry[e].category]
              },
              __close: function() {
                  document.removeEventListener(r.CONSENT_COOKIE_CHANGED_EVENT, y)
              }
          }
      }
      ,
      a.default = a.AWSCShortbread
  }
  , function(e, a, n) {
      "use strict";
      Object.defineProperty(a, "__esModule", {
          value: !0
      });
      var i = n(0)
        , t = n(2)
        , o = n(1);
      n(16),
      a.default = function(e) {
          var a = e.showConsentSelector
            , n = e.handleSaveClick
            , r = e.localizedText
            , c = e.hasConsoleNavFooter
            , s = void 0 !== c && c
            , l = e.runtimeEnvironment
            , u = void 0 === l ? "default" : l
            , d = {
              essential: !0,
              functional: !0,
              performance: !0,
              advertising: !0
          }
            , p = {
              essential: !0,
              functional: !1,
              performance: !0,
              advertising: !1
          }
            , k = !0 === s ? "awsccc-tab-helper awsc-bot-above-f-imp" : "awsccc-tab-helper";
          return i.act("div", {
              "data-id": o.BANNER_ID,
              style: {
                  display: "none"
              }
          }, i.act("div", {
              id: "awsccc-cb-c",
              "data-id": "awsccc-cb-tabstart",
              class: k,
              tabindex: "-1"
          }, i.act("div", {
              id: "awsccc-cb-content"
          }, i.act("div", {
              id: "awsccc-cb-text-section"
          }, i.act("h2", {
              id: "awsccc-cb-title"
          }, r.title), i.act("p", {
              id: "awsccc-cb-text"
          }, "mobile" === u ? r["paragraph-mobile"] : r.paragraph)), i.act("div", {
              id: "awsccc-cb-actions"
          }, i.act("div", {
              id: "awsccc-cb-buttons"
          }, i.act(t.default, {
              dataId: o.BANNER_ACCEPT_BTN_ID,
              variant: "primary",
              text: r["button-accept"],
              events: {
                  onclick: function() {
                      return n(d, "consentBanner")
                  }
              },
              props: {
                  "aria-label": r["button-accept-aria-label"]
              }
          }), i.act(t.default, {
              dataId: o.BANNER_CONTINUE_BTN_ID,
              variant: "secondary",
              text: r["button-continue"],
              events: {
                  onclick: function() {
                      return n(p, "consentBanner")
                  }
              },
              props: {
                  "aria-label": r["button-customize-aria-label"]
              }
          }), i.act(t.default, {
              dataId: o.BANNER_CUSTOMIZE_BTN_ID,
              variant: "secondary",
              text: r["button-customize"],
              events: {
                  onclick: function() {
                      return a("consentBanner")
                  }
              },
              props: {
                  "aria-label": r["button-customize-aria-label"]
              }
          }))))))
      }
  }
  , function(e, a, n) {
      "use strict";
      n.r(a)
  }
  , function(e, a, n) {
      "use strict";
      n.r(a)
  }
  , function(e, a, n) {
      "use strict";
      Object.defineProperty(a, "__esModule", {
          value: !0
      });
      var i = n(0)
        , t = n(18)
        , o = n(20)
        , r = n(24)
        , c = n(26)
        , s = n(1);
      n(28),
      a.default = function(e) {
          var a = e.handleSaveClick
            , n = e.handleCancelClick
            , l = e.handleCheckboxToggle
            , u = e.localizedText
            , d = (e.closeConsentSelector,
          e.consentState)
            , p = e.darkModeEnabled
            , k = void 0 !== p && p
            , m = e.runtimeEnvironment
            , b = void 0 === m ? "default" : m;
          return i.act("div", {
              "data-id": s.CUSTOMIZE_ID,
              style: {
                  display: "none"
              },
              tabindex: "0",
              events: {
                  onfocus: function() {
                      document.querySelector("button[data-id=" + s.CUSTOMIZE_SAVE_BTN_ID + "]").focus({
                          preventScroll: !0
                      })
                  }
              },
              class: !0 === k ? "dark-mode-enabled" : ""
          }, i.act("div", {
              id: "awsccc-cs-container",
              role: "dialog",
              "aria-modal": "true",
              "aria-label": u.header,
              "data-awsccc-modal-toggle": !0,
              events: {
                  onclick: function(e) {
                      e.target.hasAttribute("data-awsccc-modal-toggle") && n("preferencesModal")
                  }
              },
              "data-id": s.TABTRAP_ID,
              tabindex: "-1"
          }, i.act("div", {
              id: "awsccc-cs-container-inner"
          }, i.act("div", {
              id: "awsccc-cs-content"
          }, i.act("div", {
              id: "awsccc-cs-header"
          }, i.act("div", {
              id: "awsccc-cs-title"
          }, i.act("h2", null, u.header))), i.act("div", {
              id: "awsccc-cs-modalBody"
          }, i.act(t.default, {
              localizedText: u.intro
          }), i.act(o.default, {
              category: "essential",
              content: u["section-essential"],
              isDisabled: !0,
              isChecked: d.essential,
              handleCheckboxToggle: l,
              localizedLabelText: u["checkbox-label"]
          }), i.act(o.default, {
              category: "performance",
              content: u["section-performance"],
              isChecked: d.performance,
              handleCheckboxToggle: l,
              localizedLabelText: u["checkbox-label"]
          }), i.act(o.default, {
              category: "functional",
              content: u["section-functional"],
              isChecked: d.functional,
              handleCheckboxToggle: l,
              localizedLabelText: u["checkbox-label"]
          }), i.act(o.default, {
              category: "advertising",
              content: u["section-advertising"],
              isChecked: d.advertising,
              handleCheckboxToggle: l,
              localizedLabelText: u["checkbox-label"]
          }), i.act(r.default, {
              localizedText: "mobile" === b ? u["footer-mobile"] : u.footer
          })), i.act(c.default, {
              handleSaveClick: a,
              handleCancelClick: n,
              localizedText: u
          })))), i.act("div", {
              id: "awsccc-cs-modalOverlay"
          }), i.act("div", {
              "data-id": s.TABTRAP_ID,
              tabindex: "-1",
              class: "awsccc-tab-helper",
              events: {
                  onfocus: function() {
                      document.querySelector("div[data-id=" + s.TABTRAP_ID + "]").focus({
                          preventScroll: !0
                      })
                  }
              }
          }))
      }
  }
  , function(e, a, n) {
      "use strict";
      Object.defineProperty(a, "__esModule", {
          value: !0
      });
      var i = n(0);
      n(19),
      a.default = function(e) {
          var a = e.localizedText;
          return i.act("div", {
              id: "awsccc-cs-i-container"
          }, i.act("span", null, a))
      }
  }
  , function(e, a, n) {
      "use strict";
      n.r(a)
  }
  , function(e, a, n) {
      "use strict";
      Object.defineProperty(a, "__esModule", {
          value: !0
      });
      var i = n(0)
        , t = n(21);
      n(23),
      a.default = function(e) {
          var a = e.category
            , n = e.content
            , o = e.isDisabled
            , r = e.handleCheckboxToggle
            , c = e.localizedLabelText
            , s = e.isChecked;
          return i.act("div", {
              "data-category": a,
              class: "awsccc-cs-s-container"
          }, o ? i.act("h3", {
              class: "awsccc-cs-s-title"
          }, n.title) : i.act("h3", {
              class: "awsccc-cs-s-title",
              events: {
                  onclick: function(e) {
                      return r({
                          event: e,
                          category: a
                      })
                  }
              }
          }, n.title), i.act("div", {
              class: "awsccc-cs-s-text"
          }, i.act("p", {
              class: "awsccc-cs-s-paragraph"
          }, n.paragraph)), o ? i.act("div", {
              class: "awsccc-cs-s-action"
          }) : i.act("div", {
              class: "awsccc-cs-s-action"
          }, i.act(t.default, {
              id: a,
              events: {
                  onclick: function(e) {
                      return r({
                          event: e,
                          category: a
                      })
                  }
              },
              isChecked: s,
              localizedDescription: n["checkbox-description"],
              localizedLabelText: c
          })))
      }
  }
  , function(e, a, n) {
      "use strict";
      var i = this && this.__assign || function() {
          return (i = Object.assign || function(e) {
              for (var a, n = 1, i = arguments.length; n < i; n++)
                  for (var t in a = arguments[n])
                      Object.prototype.hasOwnProperty.call(a, t) && (e[t] = a[t]);
              return e
          }
          ).apply(this, arguments)
      }
      ;
      Object.defineProperty(a, "__esModule", {
          value: !0
      });
      var t = n(0);
      n(22),
      a.default = function(e) {
          var a = e.id
            , n = e.events
            , o = e.isChecked
            , r = e.localizedLabelText
            , c = e.localizedDescription;
          return t.act("div", null, t.act("div", {
              class: "awsccc-cs-s-cb-outer"
          }, t.act("div", {
              class: "awscc-u-cb-checkbox-container",
              "data-id": "awsccc-u-cb-" + a + "-container"
          }, t.act("label", {
              "data-id": "awsccc-u-cb-" + a + "-label",
              class: "awsccc-u-cb-label" + (o ? " awsccc-u-cb-checkbox-active" : ""),
              events: n
          }, t.act("input", i({
              id: "awsccc-u-cb-" + a,
              class: "awsccc-u-cb-input",
              type: "checkbox",
              "aria-checked": "" + o
          }, function(e) {
              return e ? {
                  checked: ""
              } : {}
          }(o), {
              events: {
                  onfocus: function() {
                      document.querySelector("div[data-id=awsccc-u-cb-" + a + "-container]").classList.add("awsccc-u-cb-focused")
                  },
                  onblur: function() {
                      document.querySelector("div[data-id=awsccc-u-cb-" + a + "-container]").classList.remove("awsccc-u-cb-focused")
                  }
              }
          })), t.act("span", {
              class: "awsccc-cs-s-cb-hidden"
          }, c), t.act("svg", {
              viewBox: "0 0 14 14",
              "aria-hidden": "true",
              focusable: "false",
              class: "awscc-u-cb-checkbox"
          }, t.act("rect", {
              class: "awscc-u-cb-checkbox-rect",
              x: "0.5",
              y: "0.5",
              rx: "1.5",
              ry: "1.5",
              width: "13",
              height: "13"
          }), t.act("polyline", {
              class: "awscc-u-cb-checkbox-poly-line ",
              points: "2.5,7 6,10 11,3"
          }))))), t.act("span", {
              class: "awsccc-u-cb-text",
              events: n
          }, r))
      }
  }
  , function(e, a, n) {
      "use strict";
      n.r(a)
  }
  , function(e, a, n) {
      "use strict";
      n.r(a)
  }
  , function(e, a, n) {
      "use strict";
      Object.defineProperty(a, "__esModule", {
          value: !0
      });
      var i = n(0);
      n(25),
      a.default = function(e) {
          var a = e.localizedText;
          return i.act("div", {
              id: "awsccc-cs-l-container"
          }, i.act("p", null, a))
      }
  }
  , function(e, a, n) {
      "use strict";
      n.r(a)
  }
  , function(e, a, n) {
      "use strict";
      Object.defineProperty(a, "__esModule", {
          value: !0
      });
      var i = n(0)
        , t = n(2)
        , o = n(1);
      n(27);
      var r = n(5);
      a.default = function(e) {
          var a = e.handleSaveClick
            , n = e.handleCancelClick
            , c = e.localizedText;
          return i.act("div", {
              id: "awsccc-cs-f-c"
          }, i.act(t.default, {
              dataId: o.CUSTOMIZE_CANCEL_BTN_ID,
              variant: "secondary",
              events: {
                  onclick: function() {
                      n("preferencesModal")
                  }
              },
              text: c["button-cancel"],
              props: {
                  "aria-label": c["button-cancel-aria-label"]
              }
          }), i.act(t.default, {
              dataId: o.CUSTOMIZE_SAVE_BTN_ID,
              variant: "primary",
              events: {
                  onclick: function() {
                      a({
                          essential: !0,
                          performance: r.isChecked("performance"),
                          functional: r.isChecked("functional"),
                          advertising: r.isChecked("advertising")
                      }, "preferencesModal")
                  }
              },
              text: c["button-save"],
              props: {
                  "aria-label": c["button-save-aria-label"]
              }
          }))
      }
  }
  , function(e, a, n) {
      "use strict";
      n.r(a)
  }
  , function(e, a, n) {
      "use strict";
      n.r(a)
  }
  , function(e, a, n) {
      "use strict";
      Object.defineProperty(a, "__esModule", {
          value: !0
      });
      var i = n(0);
      n(30),
      a.default = function() {
          return i.act("div", {
              class: "awsccc-u-i-open-c"
          }, i.act("svg", {
              class: "awsccc-u-i-open",
              viewBox: "0 0 16 16",
              focusable: "false",
              "aria-hidden": "true"
          }, i.act("path", {
              class: "awsccc-stroke-linecap-square",
              d: "M10 2h4v4"
          }), i.act("path", {
              d: "M6 10l8-8"
          }), i.act("path", {
              class: "awsccc-stroke-linejoin-round",
              d: "M14 9.048V14H2V2h5"
          })))
      }
  }
  , function(e, a, n) {
      "use strict";
      n.r(a)
  }
  , function(e, a, n) {
      "use strict";
      n.r(a)
  }
  , function(e, a, n) {
      "use strict";
      Object.defineProperty(a, "__esModule", {
          value: !0
      }),
      a.convertToArray = a.update = void 0,
      a.update = function(e, a) {
          return Object.keys(a).forEach((function(n) {
              e[n] = a[n]
          }
          )),
          e
      }
      ,
      a.convertToArray = function(e) {
          return Array.prototype.slice.call(e)
      }
  }
  , function(e, a, n) {
      "use strict";
      Object.defineProperty(a, "__esModule", {
          value: !0
      });
      a.default = function(e, a, n) {
          function i() {
              a.removeEventListener("DOMContentLoaded", i),
              n.removeEventListener("load", i),
              e()
          }
          void 0 === a && (a = document),
          void 0 === n && (n = window),
          "loading" !== a.readyState ? n.setTimeout(e) : (a.addEventListener("DOMContentLoaded", i),
          n.addEventListener("load", i))
      }
  }
  , function(e, a, n) {
      "use strict";
      Object.defineProperty(a, "__esModule", {
          value: !0
      });
      var i = n(0)
        , t = n(1)
        , o = n(2);
      n(35),
      a.default = function(e) {
          var a = e.localizedText
            , n = e.handleDismissClick
            , r = e.darkModeEnabled;
          return i.act("div", {
              "data-id": t.ERROR_MESSAGE_MODAL_ID,
              style: {
                  display: "none"
              },
              tabindex: "0",
              events: {
                  onfocus: function() {
                      document.querySelector("button[data-id=" + t.ERROR_MESSAGE_MODAL_DISMISS_BTN_ID + "]").focus({
                          preventScroll: !0
                      })
                  }
              },
              class: !0 === r ? "dark-mode-enabled" : ""
          }, i.act("div", {
              id: "awsccc-em-container",
              role: "dialog",
              "aria-modal": "true",
              "data-awsccc-emm-modal-toggle": !0,
              events: {
                  onclick: function(e) {
                      e.target.hasAttribute("data-awsccc-emm-modal-toggle") && n()
                  }
              },
              "data-id": t.ERROR_MESSAGE_MODAL_TABTRAP_ID,
              tabindex: "-1"
          }, i.act("div", {
              id: "awsccc-em-container-inner"
          }, i.act("div", {
              id: "awsccc-em-content"
          }, i.act("div", {
              id: "awsccc-em-header"
          }, i.act("div", {
              id: "awsccc-em-title"
          }, i.act("h2", null, a.header))), i.act("div", {
              id: "awsccc-em-modalBody"
          }, i.act("p", {
              id: "awsccc-emm-paragraph"
          }, a.paragraph)), i.act("div", {
              id: "awsccc-em-f-c"
          }, i.act(o.default, {
              dataId: t.ERROR_MESSAGE_MODAL_DISMISS_BTN_ID,
              variant: "primary",
              events: {
                  onclick: function() {
                      n()
                  }
              },
              text: a["button-dismiss"],
              props: {
                  "aria-label": a["button-dismiss-aria-label"]
              }
          }))))), i.act("div", {
              id: "awsccc-em-modalOverlay"
          }), i.act("div", {
              "data-id": t.ERROR_MESSAGE_MODAL_TABTRAP_ID,
              tabindex: "-1",
              class: "awsccc-tab-helper",
              events: {
                  onfocus: function() {
                      document.querySelector("div[data-id=" + t.ERROR_MESSAGE_MODAL_TABTRAP_ID + "]").focus({
                          preventScroll: !0
                      })
                  }
              }
          }))
      }
  }
  , function(e, a, n) {
      "use strict";
      n.r(a)
  }
  , function(e, a, n) {
      "use strict";
      n.r(a),
      n.d(a, "v1", (function() {
          return k
      }
      )),
      n.d(a, "v3", (function() {
          return C
      }
      )),
      n.d(a, "v4", (function() {
          return A
      }
      )),
      n.d(a, "v5", (function() {
          return E
      }
      ));
      var i = "undefined" != typeof crypto && crypto.getRandomValues && crypto.getRandomValues.bind(crypto) || "undefined" != typeof msCrypto && "function" == typeof msCrypto.getRandomValues && msCrypto.getRandomValues.bind(msCrypto)
        , t = new Uint8Array(16);
      function o() {
          if (!i)
              throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
          return i(t)
      }
      for (var r = [], c = 0; c < 256; ++c)
          r.push((c + 256).toString(16).substr(1));
      var s, l, u = function(e, a) {
          var n = a || 0
            , i = r;
          return (i[e[n + 0]] + i[e[n + 1]] + i[e[n + 2]] + i[e[n + 3]] + "-" + i[e[n + 4]] + i[e[n + 5]] + "-" + i[e[n + 6]] + i[e[n + 7]] + "-" + i[e[n + 8]] + i[e[n + 9]] + "-" + i[e[n + 10]] + i[e[n + 11]] + i[e[n + 12]] + i[e[n + 13]] + i[e[n + 14]] + i[e[n + 15]]).toLowerCase()
      }, d = 0, p = 0;
      var k = function(e, a, n) {
          var i = a && n || 0
            , t = a || []
            , r = (e = e || {}).node || s
            , c = void 0 !== e.clockseq ? e.clockseq : l;
          if (null == r || null == c) {
              var k = e.random || (e.rng || o)();
              null == r && (r = s = [1 | k[0], k[1], k[2], k[3], k[4], k[5]]),
              null == c && (c = l = 16383 & (k[6] << 8 | k[7]))
          }
          var m = void 0 !== e.msecs ? e.msecs : Date.now()
            , b = void 0 !== e.nsecs ? e.nsecs : p + 1
            , h = m - d + (b - p) / 1e4;
          if (h < 0 && void 0 === e.clockseq && (c = c + 1 & 16383),
          (h < 0 || m > d) && void 0 === e.nsecs && (b = 0),
          b >= 1e4)
              throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");
          d = m,
          p = b,
          l = c;
          var f = (1e4 * (268435455 & (m += 122192928e5)) + b) % 4294967296;
          t[i++] = f >>> 24 & 255,
          t[i++] = f >>> 16 & 255,
          t[i++] = f >>> 8 & 255,
          t[i++] = 255 & f;
          var g = m / 4294967296 * 1e4 & 268435455;
          t[i++] = g >>> 8 & 255,
          t[i++] = 255 & g,
          t[i++] = g >>> 24 & 15 | 16,
          t[i++] = g >>> 16 & 255,
          t[i++] = c >>> 8 | 128,
          t[i++] = 255 & c;
          for (var v = 0; v < 6; ++v)
              t[i + v] = r[v];
          return a || u(t)
      };
      var m = function(e, a, n) {
          function i(e, i, t, o) {
              var r = t && o || 0;
              if ("string" == typeof e && (e = function(e) {
                  e = unescape(encodeURIComponent(e));
                  for (var a = [], n = 0; n < e.length; ++n)
                      a.push(e.charCodeAt(n));
                  return a
              }(e)),
              "string" == typeof i && (i = function(e) {
                  var a = [];
                  return e.replace(/[a-fA-F0-9]{2}/g, (function(e) {
                      a.push(parseInt(e, 16))
                  }
                  )),
                  a
              }(i)),
              !Array.isArray(e))
                  throw TypeError("value must be an array of bytes");
              if (!Array.isArray(i) || 16 !== i.length)
                  throw TypeError("namespace must be uuid string or an Array of 16 byte values");
              var c = n(i.concat(e));
              if (c[6] = 15 & c[6] | a,
              c[8] = 63 & c[8] | 128,
              t)
                  for (var s = 0; s < 16; ++s)
                      t[r + s] = c[s];
              return t || u(c)
          }
          try {
              i.name = e
          } catch (e) {}
          return i.DNS = "6ba7b810-9dad-11d1-80b4-00c04fd430c8",
          i.URL = "6ba7b811-9dad-11d1-80b4-00c04fd430c8",
          i
      };
      function b(e) {
          return 14 + (e + 64 >>> 9 << 4) + 1
      }
      function h(e, a) {
          var n = (65535 & e) + (65535 & a);
          return (e >> 16) + (a >> 16) + (n >> 16) << 16 | 65535 & n
      }
      function f(e, a, n, i, t, o) {
          return h((r = h(h(a, e), h(i, o))) << (c = t) | r >>> 32 - c, n);
          var r, c
      }
      function g(e, a, n, i, t, o, r) {
          return f(a & n | ~a & i, e, a, t, o, r)
      }
      function v(e, a, n, i, t, o, r) {
          return f(a & i | n & ~i, e, a, t, o, r)
      }
      function z(e, a, n, i, t, o, r) {
          return f(a ^ n ^ i, e, a, t, o, r)
      }
      function y(e, a, n, i, t, o, r) {
          return f(n ^ (a | ~i), e, a, t, o, r)
      }
      var C = m("v3", 48, (function(e) {
          if ("string" == typeof e) {
              var a = unescape(encodeURIComponent(e));
              e = new Uint8Array(a.length);
              for (var n = 0; n < a.length; ++n)
                  e[n] = a.charCodeAt(n)
          }
          return function(e) {
              for (var a = [], n = 32 * e.length, i = 0; i < n; i += 8) {
                  var t = e[i >> 5] >>> i % 32 & 255
                    , o = parseInt("0123456789abcdef".charAt(t >>> 4 & 15) + "0123456789abcdef".charAt(15 & t), 16);
                  a.push(o)
              }
              return a
          }(function(e, a) {
              e[a >> 5] |= 128 << a % 32,
              e[b(a) - 1] = a;
              for (var n = 1732584193, i = -271733879, t = -1732584194, o = 271733878, r = 0; r < e.length; r += 16) {
                  var c = n
                    , s = i
                    , l = t
                    , u = o;
                  n = g(n, i, t, o, e[r], 7, -680876936),
                  o = g(o, n, i, t, e[r + 1], 12, -389564586),
                  t = g(t, o, n, i, e[r + 2], 17, 606105819),
                  i = g(i, t, o, n, e[r + 3], 22, -1044525330),
                  n = g(n, i, t, o, e[r + 4], 7, -176418897),
                  o = g(o, n, i, t, e[r + 5], 12, 1200080426),
                  t = g(t, o, n, i, e[r + 6], 17, -1473231341),
                  i = g(i, t, o, n, e[r + 7], 22, -45705983),
                  n = g(n, i, t, o, e[r + 8], 7, 1770035416),
                  o = g(o, n, i, t, e[r + 9], 12, -1958414417),
                  t = g(t, o, n, i, e[r + 10], 17, -42063),
                  i = g(i, t, o, n, e[r + 11], 22, -1990404162),
                  n = g(n, i, t, o, e[r + 12], 7, 1804603682),
                  o = g(o, n, i, t, e[r + 13], 12, -40341101),
                  t = g(t, o, n, i, e[r + 14], 17, -1502002290),
                  i = g(i, t, o, n, e[r + 15], 22, 1236535329),
                  n = v(n, i, t, o, e[r + 1], 5, -165796510),
                  o = v(o, n, i, t, e[r + 6], 9, -1069501632),
                  t = v(t, o, n, i, e[r + 11], 14, 643717713),
                  i = v(i, t, o, n, e[r], 20, -373897302),
                  n = v(n, i, t, o, e[r + 5], 5, -701558691),
                  o = v(o, n, i, t, e[r + 10], 9, 38016083),
                  t = v(t, o, n, i, e[r + 15], 14, -660478335),
                  i = v(i, t, o, n, e[r + 4], 20, -405537848),
                  n = v(n, i, t, o, e[r + 9], 5, 568446438),
                  o = v(o, n, i, t, e[r + 14], 9, -1019803690),
                  t = v(t, o, n, i, e[r + 3], 14, -187363961),
                  i = v(i, t, o, n, e[r + 8], 20, 1163531501),
                  n = v(n, i, t, o, e[r + 13], 5, -1444681467),
                  o = v(o, n, i, t, e[r + 2], 9, -51403784),
                  t = v(t, o, n, i, e[r + 7], 14, 1735328473),
                  i = v(i, t, o, n, e[r + 12], 20, -1926607734),
                  n = z(n, i, t, o, e[r + 5], 4, -378558),
                  o = z(o, n, i, t, e[r + 8], 11, -2022574463),
                  t = z(t, o, n, i, e[r + 11], 16, 1839030562),
                  i = z(i, t, o, n, e[r + 14], 23, -35309556),
                  n = z(n, i, t, o, e[r + 1], 4, -1530992060),
                  o = z(o, n, i, t, e[r + 4], 11, 1272893353),
                  t = z(t, o, n, i, e[r + 7], 16, -155497632),
                  i = z(i, t, o, n, e[r + 10], 23, -1094730640),
                  n = z(n, i, t, o, e[r + 13], 4, 681279174),
                  o = z(o, n, i, t, e[r], 11, -358537222),
                  t = z(t, o, n, i, e[r + 3], 16, -722521979),
                  i = z(i, t, o, n, e[r + 6], 23, 76029189),
                  n = z(n, i, t, o, e[r + 9], 4, -640364487),
                  o = z(o, n, i, t, e[r + 12], 11, -421815835),
                  t = z(t, o, n, i, e[r + 15], 16, 530742520),
                  i = z(i, t, o, n, e[r + 2], 23, -995338651),
                  n = y(n, i, t, o, e[r], 6, -198630844),
                  o = y(o, n, i, t, e[r + 7], 10, 1126891415),
                  t = y(t, o, n, i, e[r + 14], 15, -1416354905),
                  i = y(i, t, o, n, e[r + 5], 21, -57434055),
                  n = y(n, i, t, o, e[r + 12], 6, 1700485571),
                  o = y(o, n, i, t, e[r + 3], 10, -1894986606),
                  t = y(t, o, n, i, e[r + 10], 15, -1051523),
                  i = y(i, t, o, n, e[r + 1], 21, -2054922799),
                  n = y(n, i, t, o, e[r + 8], 6, 1873313359),
                  o = y(o, n, i, t, e[r + 15], 10, -30611744),
                  t = y(t, o, n, i, e[r + 6], 15, -1560198380),
                  i = y(i, t, o, n, e[r + 13], 21, 1309151649),
                  n = y(n, i, t, o, e[r + 4], 6, -145523070),
                  o = y(o, n, i, t, e[r + 11], 10, -1120210379),
                  t = y(t, o, n, i, e[r + 2], 15, 718787259),
                  i = y(i, t, o, n, e[r + 9], 21, -343485551),
                  n = h(n, c),
                  i = h(i, s),
                  t = h(t, l),
                  o = h(o, u)
              }
              return [n, i, t, o]
          }(function(e) {
              if (0 === e.length)
                  return [];
              for (var a = 8 * e.length, n = new Uint32Array(b(a)), i = 0; i < a; i += 8)
                  n[i >> 5] |= (255 & e[i / 8]) << i % 32;
              return n
          }(e), 8 * e.length))
      }
      ));
      var A = function(e, a, n) {
          "string" == typeof e && (a = "binary" === e ? new Uint8Array(16) : null,
          e = null);
          var i = (e = e || {}).random || (e.rng || o)();
          if (i[6] = 15 & i[6] | 64,
          i[8] = 63 & i[8] | 128,
          a) {
              for (var t = n || 0, r = 0; r < 16; ++r)
                  a[t + r] = i[r];
              return a
          }
          return u(i)
      };
      function S(e, a, n, i) {
          switch (e) {
          case 0:
              return a & n ^ ~a & i;
          case 1:
              return a ^ n ^ i;
          case 2:
              return a & n ^ a & i ^ n & i;
          case 3:
              return a ^ n ^ i
          }
      }
      function _(e, a) {
          return e << a | e >>> 32 - a
      }
      var E = m("v5", 80, (function(e) {
          var a = [1518500249, 1859775393, 2400959708, 3395469782]
            , n = [1732584193, 4023233417, 2562383102, 271733878, 3285377520];
          if ("string" == typeof e) {
              var i = unescape(encodeURIComponent(e));
              e = [];
              for (var t = 0; t < i.length; ++t)
                  e.push(i.charCodeAt(t))
          }
          e.push(128);
          for (var o = e.length / 4 + 2, r = Math.ceil(o / 16), c = new Array(r), s = 0; s < r; ++s) {
              for (var l = new Uint32Array(16), u = 0; u < 16; ++u)
                  l[u] = e[64 * s + 4 * u] << 24 | e[64 * s + 4 * u + 1] << 16 | e[64 * s + 4 * u + 2] << 8 | e[64 * s + 4 * u + 3];
              c[s] = l
          }
          c[r - 1][14] = 8 * (e.length - 1) / Math.pow(2, 32),
          c[r - 1][14] = Math.floor(c[r - 1][14]),
          c[r - 1][15] = 8 * (e.length - 1) & 4294967295;
          for (var d = 0; d < r; ++d) {
              for (var p = new Uint32Array(80), k = 0; k < 16; ++k)
                  p[k] = c[d][k];
              for (var m = 16; m < 80; ++m)
                  p[m] = _(p[m - 3] ^ p[m - 8] ^ p[m - 14] ^ p[m - 16], 1);
              for (var b = n[0], h = n[1], f = n[2], g = n[3], v = n[4], z = 0; z < 80; ++z) {
                  var y = Math.floor(z / 20)
                    , C = _(b, 5) + S(y, h, f, g) + v + a[y] + p[z] >>> 0;
                  v = g,
                  g = f,
                  f = _(h, 30) >>> 0,
                  h = b,
                  b = C
              }
              n[0] = n[0] + b >>> 0,
              n[1] = n[1] + h >>> 0,
              n[2] = n[2] + f >>> 0,
              n[3] = n[3] + g >>> 0,
              n[4] = n[4] + v >>> 0
          }
          return [n[0] >> 24 & 255, n[0] >> 16 & 255, n[0] >> 8 & 255, 255 & n[0], n[1] >> 24 & 255, n[1] >> 16 & 255, n[1] >> 8 & 255, 255 & n[1], n[2] >> 24 & 255, n[2] >> 16 & 255, n[2] >> 8 & 255, 255 & n[2], n[3] >> 24 & 255, n[3] >> 16 & 255, n[3] >> 8 & 255, 255 & n[3], n[4] >> 24 & 255, n[4] >> 16 & 255, n[4] >> 8 & 255, 255 & n[4]]
      }
      ))
  }
  ])
}
));
//# sourceMappingURL=shortbread.js.map
