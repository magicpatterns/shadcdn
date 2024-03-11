import * as n from "react";
import ut from "react";
import * as $ from "@radix-ui/react-accordion";
import { ChevronDown as Ee, ChevronLeft as pa, ChevronRight as oe, Check as se, X as De, Search as ga, Circle as ge, GripVertical as xa, Dot as ba, MoreHorizontal as va } from "lucide-react";
import { clsx as ya } from "clsx";
import { twMerge as ha } from "tailwind-merge";
import * as R from "@radix-ui/react-alert-dialog";
import { Slot as Oe } from "@radix-ui/react-slot";
import { cva as F } from "class-variance-authority";
import * as Na from "@radix-ui/react-aspect-ratio";
import * as q from "@radix-ui/react-avatar";
import { DayPicker as wa } from "react-day-picker";
import * as _e from "@radix-ui/react-checkbox";
import * as Me from "@radix-ui/react-collapsible";
import { Command as _ } from "cmdk";
import * as b from "@radix-ui/react-dialog";
import * as v from "@radix-ui/react-context-menu";
import * as y from "@radix-ui/react-dropdown-menu";
import { FormProvider as ja, Controller as Ra, useFormContext as Ca } from "react-hook-form";
import * as ft from "@radix-ui/react-label";
import * as xe from "@radix-ui/react-hover-card";
import * as g from "@radix-ui/react-menubar";
import * as k from "@radix-ui/react-navigation-menu";
import * as te from "@radix-ui/react-popover";
import * as ke from "@radix-ui/react-progress";
import * as ae from "@radix-ui/react-radio-group";
import * as G from "@radix-ui/react-scroll-area";
import * as j from "@radix-ui/react-select";
import * as mt from "@radix-ui/react-separator";
import * as Z from "@radix-ui/react-slider";
import * as Pe from "@radix-ui/react-switch";
import * as B from "@radix-ui/react-tabs";
import * as I from "@radix-ui/react-toast";
import * as pt from "@radix-ui/react-toggle";
import * as ne from "@radix-ui/react-tooltip";
import * as Ae from "react-resizable-panels";
import { OTPInput as Ta } from "input-otp";
var Ie = { exports: {} }, K = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var dt;
function Sa() {
  if (dt)
    return K;
  dt = 1;
  var e = ut, t = Symbol.for("react.element"), a = Symbol.for("react.fragment"), i = Object.prototype.hasOwnProperty, c = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, h = { key: !0, ref: !0, __self: !0, __source: !0 };
  function D(z, C, W) {
    var P, O = {}, L = null, ie = null;
    W !== void 0 && (L = "" + W), C.key !== void 0 && (L = "" + C.key), C.ref !== void 0 && (ie = C.ref);
    for (P in C)
      i.call(C, P) && !h.hasOwnProperty(P) && (O[P] = C[P]);
    if (z && z.defaultProps)
      for (P in C = z.defaultProps, C)
        O[P] === void 0 && (O[P] = C[P]);
    return { $$typeof: t, type: z, key: L, ref: ie, props: O, _owner: c.current };
  }
  return K.Fragment = a, K.jsx = D, K.jsxs = D, K;
}
var Q = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var lt;
function _a() {
  return lt || (lt = 1, process.env.NODE_ENV !== "production" && function() {
    var e = ut, t = Symbol.for("react.element"), a = Symbol.for("react.portal"), i = Symbol.for("react.fragment"), c = Symbol.for("react.strict_mode"), h = Symbol.for("react.profiler"), D = Symbol.for("react.provider"), z = Symbol.for("react.context"), C = Symbol.for("react.forward_ref"), W = Symbol.for("react.suspense"), P = Symbol.for("react.suspense_list"), O = Symbol.for("react.memo"), L = Symbol.for("react.lazy"), ie = Symbol.for("react.offscreen"), Fe = Symbol.iterator, Dt = "@@iterator";
    function Ot(o) {
      if (o === null || typeof o != "object")
        return null;
      var d = Fe && o[Fe] || o[Dt];
      return typeof d == "function" ? d : null;
    }
    var Y = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function T(o) {
      {
        for (var d = arguments.length, l = new Array(d > 1 ? d - 1 : 0), u = 1; u < d; u++)
          l[u - 1] = arguments[u];
        Mt("error", o, l);
      }
    }
    function Mt(o, d, l) {
      {
        var u = Y.ReactDebugCurrentFrame, p = u.getStackAddendum();
        p !== "" && (d += "%s", l = l.concat([p]));
        var x = l.map(function(m) {
          return String(m);
        });
        x.unshift("Warning: " + d), Function.prototype.apply.call(console[o], console, x);
      }
    }
    var At = !1, Ft = !1, zt = !1, Lt = !1, Vt = !1, ze;
    ze = Symbol.for("react.module.reference");
    function Gt(o) {
      return !!(typeof o == "string" || typeof o == "function" || o === i || o === h || Vt || o === c || o === W || o === P || Lt || o === ie || At || Ft || zt || typeof o == "object" && o !== null && (o.$$typeof === L || o.$$typeof === O || o.$$typeof === D || o.$$typeof === z || o.$$typeof === C || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      o.$$typeof === ze || o.getModuleId !== void 0));
    }
    function $t(o, d, l) {
      var u = o.displayName;
      if (u)
        return u;
      var p = d.displayName || d.name || "";
      return p !== "" ? l + "(" + p + ")" : l;
    }
    function Le(o) {
      return o.displayName || "Context";
    }
    function M(o) {
      if (o == null)
        return null;
      if (typeof o.tag == "number" && T("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof o == "function")
        return o.displayName || o.name || null;
      if (typeof o == "string")
        return o;
      switch (o) {
        case i:
          return "Fragment";
        case a:
          return "Portal";
        case h:
          return "Profiler";
        case c:
          return "StrictMode";
        case W:
          return "Suspense";
        case P:
          return "SuspenseList";
      }
      if (typeof o == "object")
        switch (o.$$typeof) {
          case z:
            var d = o;
            return Le(d) + ".Consumer";
          case D:
            var l = o;
            return Le(l._context) + ".Provider";
          case C:
            return $t(o, o.render, "ForwardRef");
          case O:
            var u = o.displayName || null;
            return u !== null ? u : M(o.type) || "Memo";
          case L: {
            var p = o, x = p._payload, m = p._init;
            try {
              return M(m(x));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var V = Object.assign, J = 0, Ve, Ge, $e, Be, We, Ye, He;
    function Ue() {
    }
    Ue.__reactDisabledLog = !0;
    function Bt() {
      {
        if (J === 0) {
          Ve = console.log, Ge = console.info, $e = console.warn, Be = console.error, We = console.group, Ye = console.groupCollapsed, He = console.groupEnd;
          var o = {
            configurable: !0,
            enumerable: !0,
            value: Ue,
            writable: !0
          };
          Object.defineProperties(console, {
            info: o,
            log: o,
            warn: o,
            error: o,
            group: o,
            groupCollapsed: o,
            groupEnd: o
          });
        }
        J++;
      }
    }
    function Wt() {
      {
        if (J--, J === 0) {
          var o = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: V({}, o, {
              value: Ve
            }),
            info: V({}, o, {
              value: Ge
            }),
            warn: V({}, o, {
              value: $e
            }),
            error: V({}, o, {
              value: Be
            }),
            group: V({}, o, {
              value: We
            }),
            groupCollapsed: V({}, o, {
              value: Ye
            }),
            groupEnd: V({}, o, {
              value: He
            })
          });
        }
        J < 0 && T("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var ve = Y.ReactCurrentDispatcher, ye;
    function de(o, d, l) {
      {
        if (ye === void 0)
          try {
            throw Error();
          } catch (p) {
            var u = p.stack.trim().match(/\n( *(at )?)/);
            ye = u && u[1] || "";
          }
        return `
` + ye + o;
      }
    }
    var he = !1, le;
    {
      var Yt = typeof WeakMap == "function" ? WeakMap : Map;
      le = new Yt();
    }
    function qe(o, d) {
      if (!o || he)
        return "";
      {
        var l = le.get(o);
        if (l !== void 0)
          return l;
      }
      var u;
      he = !0;
      var p = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var x;
      x = ve.current, ve.current = null, Bt();
      try {
        if (d) {
          var m = function() {
            throw Error();
          };
          if (Object.defineProperty(m.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(m, []);
            } catch (A) {
              u = A;
            }
            Reflect.construct(o, [], m);
          } else {
            try {
              m.call();
            } catch (A) {
              u = A;
            }
            o.call(m.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (A) {
            u = A;
          }
          o();
        }
      } catch (A) {
        if (A && u && typeof A.stack == "string") {
          for (var f = A.stack.split(`
`), S = u.stack.split(`
`), N = f.length - 1, w = S.length - 1; N >= 1 && w >= 0 && f[N] !== S[w]; )
            w--;
          for (; N >= 1 && w >= 0; N--, w--)
            if (f[N] !== S[w]) {
              if (N !== 1 || w !== 1)
                do
                  if (N--, w--, w < 0 || f[N] !== S[w]) {
                    var E = `
` + f[N].replace(" at new ", " at ");
                    return o.displayName && E.includes("<anonymous>") && (E = E.replace("<anonymous>", o.displayName)), typeof o == "function" && le.set(o, E), E;
                  }
                while (N >= 1 && w >= 0);
              break;
            }
        }
      } finally {
        he = !1, ve.current = x, Wt(), Error.prepareStackTrace = p;
      }
      var U = o ? o.displayName || o.name : "", it = U ? de(U) : "";
      return typeof o == "function" && le.set(o, it), it;
    }
    function Ht(o, d, l) {
      return qe(o, !1);
    }
    function Ut(o) {
      var d = o.prototype;
      return !!(d && d.isReactComponent);
    }
    function ce(o, d, l) {
      if (o == null)
        return "";
      if (typeof o == "function")
        return qe(o, Ut(o));
      if (typeof o == "string")
        return de(o);
      switch (o) {
        case W:
          return de("Suspense");
        case P:
          return de("SuspenseList");
      }
      if (typeof o == "object")
        switch (o.$$typeof) {
          case C:
            return Ht(o.render);
          case O:
            return ce(o.type, d, l);
          case L: {
            var u = o, p = u._payload, x = u._init;
            try {
              return ce(x(p), d, l);
            } catch {
            }
          }
        }
      return "";
    }
    var ue = Object.prototype.hasOwnProperty, Je = {}, Xe = Y.ReactDebugCurrentFrame;
    function fe(o) {
      if (o) {
        var d = o._owner, l = ce(o.type, o._source, d ? d.type : null);
        Xe.setExtraStackFrame(l);
      } else
        Xe.setExtraStackFrame(null);
    }
    function qt(o, d, l, u, p) {
      {
        var x = Function.call.bind(ue);
        for (var m in o)
          if (x(o, m)) {
            var f = void 0;
            try {
              if (typeof o[m] != "function") {
                var S = Error((u || "React class") + ": " + l + " type `" + m + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof o[m] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw S.name = "Invariant Violation", S;
              }
              f = o[m](d, m, u, l, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (N) {
              f = N;
            }
            f && !(f instanceof Error) && (fe(p), T("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", u || "React class", l, m, typeof f), fe(null)), f instanceof Error && !(f.message in Je) && (Je[f.message] = !0, fe(p), T("Failed %s type: %s", l, f.message), fe(null));
          }
      }
    }
    var Jt = Array.isArray;
    function Ne(o) {
      return Jt(o);
    }
    function Xt(o) {
      {
        var d = typeof Symbol == "function" && Symbol.toStringTag, l = d && o[Symbol.toStringTag] || o.constructor.name || "Object";
        return l;
      }
    }
    function Kt(o) {
      try {
        return Ke(o), !1;
      } catch {
        return !0;
      }
    }
    function Ke(o) {
      return "" + o;
    }
    function Qe(o) {
      if (Kt(o))
        return T("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Xt(o)), Ke(o);
    }
    var X = Y.ReactCurrentOwner, Qt = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Ze, et, we;
    we = {};
    function Zt(o) {
      if (ue.call(o, "ref")) {
        var d = Object.getOwnPropertyDescriptor(o, "ref").get;
        if (d && d.isReactWarning)
          return !1;
      }
      return o.ref !== void 0;
    }
    function ea(o) {
      if (ue.call(o, "key")) {
        var d = Object.getOwnPropertyDescriptor(o, "key").get;
        if (d && d.isReactWarning)
          return !1;
      }
      return o.key !== void 0;
    }
    function ta(o, d) {
      if (typeof o.ref == "string" && X.current && d && X.current.stateNode !== d) {
        var l = M(X.current.type);
        we[l] || (T('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', M(X.current.type), o.ref), we[l] = !0);
      }
    }
    function aa(o, d) {
      {
        var l = function() {
          Ze || (Ze = !0, T("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", d));
        };
        l.isReactWarning = !0, Object.defineProperty(o, "key", {
          get: l,
          configurable: !0
        });
      }
    }
    function ra(o, d) {
      {
        var l = function() {
          et || (et = !0, T("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", d));
        };
        l.isReactWarning = !0, Object.defineProperty(o, "ref", {
          get: l,
          configurable: !0
        });
      }
    }
    var oa = function(o, d, l, u, p, x, m) {
      var f = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: t,
        // Built-in properties that belong on the element
        type: o,
        key: d,
        ref: l,
        props: m,
        // Record the component responsible for creating this element.
        _owner: x
      };
      return f._store = {}, Object.defineProperty(f._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(f, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: u
      }), Object.defineProperty(f, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: p
      }), Object.freeze && (Object.freeze(f.props), Object.freeze(f)), f;
    };
    function sa(o, d, l, u, p) {
      {
        var x, m = {}, f = null, S = null;
        l !== void 0 && (Qe(l), f = "" + l), ea(d) && (Qe(d.key), f = "" + d.key), Zt(d) && (S = d.ref, ta(d, p));
        for (x in d)
          ue.call(d, x) && !Qt.hasOwnProperty(x) && (m[x] = d[x]);
        if (o && o.defaultProps) {
          var N = o.defaultProps;
          for (x in N)
            m[x] === void 0 && (m[x] = N[x]);
        }
        if (f || S) {
          var w = typeof o == "function" ? o.displayName || o.name || "Unknown" : o;
          f && aa(m, w), S && ra(m, w);
        }
        return oa(o, f, S, p, u, X.current, m);
      }
    }
    var je = Y.ReactCurrentOwner, tt = Y.ReactDebugCurrentFrame;
    function H(o) {
      if (o) {
        var d = o._owner, l = ce(o.type, o._source, d ? d.type : null);
        tt.setExtraStackFrame(l);
      } else
        tt.setExtraStackFrame(null);
    }
    var Re;
    Re = !1;
    function Ce(o) {
      return typeof o == "object" && o !== null && o.$$typeof === t;
    }
    function at() {
      {
        if (je.current) {
          var o = M(je.current.type);
          if (o)
            return `

Check the render method of \`` + o + "`.";
        }
        return "";
      }
    }
    function na(o) {
      {
        if (o !== void 0) {
          var d = o.fileName.replace(/^.*[\\\/]/, ""), l = o.lineNumber;
          return `

Check your code at ` + d + ":" + l + ".";
        }
        return "";
      }
    }
    var rt = {};
    function ia(o) {
      {
        var d = at();
        if (!d) {
          var l = typeof o == "string" ? o : o.displayName || o.name;
          l && (d = `

Check the top-level render call using <` + l + ">.");
        }
        return d;
      }
    }
    function ot(o, d) {
      {
        if (!o._store || o._store.validated || o.key != null)
          return;
        o._store.validated = !0;
        var l = ia(d);
        if (rt[l])
          return;
        rt[l] = !0;
        var u = "";
        o && o._owner && o._owner !== je.current && (u = " It was passed a child from " + M(o._owner.type) + "."), H(o), T('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', l, u), H(null);
      }
    }
    function st(o, d) {
      {
        if (typeof o != "object")
          return;
        if (Ne(o))
          for (var l = 0; l < o.length; l++) {
            var u = o[l];
            Ce(u) && ot(u, d);
          }
        else if (Ce(o))
          o._store && (o._store.validated = !0);
        else if (o) {
          var p = Ot(o);
          if (typeof p == "function" && p !== o.entries)
            for (var x = p.call(o), m; !(m = x.next()).done; )
              Ce(m.value) && ot(m.value, d);
        }
      }
    }
    function da(o) {
      {
        var d = o.type;
        if (d == null || typeof d == "string")
          return;
        var l;
        if (typeof d == "function")
          l = d.propTypes;
        else if (typeof d == "object" && (d.$$typeof === C || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        d.$$typeof === O))
          l = d.propTypes;
        else
          return;
        if (l) {
          var u = M(d);
          qt(l, o.props, "prop", u, o);
        } else if (d.PropTypes !== void 0 && !Re) {
          Re = !0;
          var p = M(d);
          T("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", p || "Unknown");
        }
        typeof d.getDefaultProps == "function" && !d.getDefaultProps.isReactClassApproved && T("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function la(o) {
      {
        for (var d = Object.keys(o.props), l = 0; l < d.length; l++) {
          var u = d[l];
          if (u !== "children" && u !== "key") {
            H(o), T("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", u), H(null);
            break;
          }
        }
        o.ref !== null && (H(o), T("Invalid attribute `ref` supplied to `React.Fragment`."), H(null));
      }
    }
    function nt(o, d, l, u, p, x) {
      {
        var m = Gt(o);
        if (!m) {
          var f = "";
          (o === void 0 || typeof o == "object" && o !== null && Object.keys(o).length === 0) && (f += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var S = na(p);
          S ? f += S : f += at();
          var N;
          o === null ? N = "null" : Ne(o) ? N = "array" : o !== void 0 && o.$$typeof === t ? (N = "<" + (M(o.type) || "Unknown") + " />", f = " Did you accidentally export a JSX literal instead of a component?") : N = typeof o, T("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", N, f);
        }
        var w = sa(o, d, l, p, x);
        if (w == null)
          return w;
        if (m) {
          var E = d.children;
          if (E !== void 0)
            if (u)
              if (Ne(E)) {
                for (var U = 0; U < E.length; U++)
                  st(E[U], o);
                Object.freeze && Object.freeze(E);
              } else
                T("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              st(E, o);
        }
        return o === i ? la(w) : da(w), w;
      }
    }
    function ca(o, d, l) {
      return nt(o, d, l, !0);
    }
    function ua(o, d, l) {
      return nt(o, d, l, !1);
    }
    var fa = ua, ma = ca;
    Q.Fragment = i, Q.jsx = fa, Q.jsxs = ma;
  }()), Q;
}
process.env.NODE_ENV === "production" ? Ie.exports = Sa() : Ie.exports = _a();
var r = Ie.exports;
function s(...e) {
  return ha(ya(e));
}
const ps = $.Root, ka = n.forwardRef(({ className: e, ...t }, a) => /* @__PURE__ */ r.jsx(
  $.Item,
  {
    ref: a,
    className: s("border-b", e),
    ...t
  }
));
ka.displayName = "AccordionItem";
const Pa = n.forwardRef(({ className: e, children: t, ...a }, i) => /* @__PURE__ */ r.jsx($.Header, { className: "flex", children: /* @__PURE__ */ r.jsxs(
  $.Trigger,
  {
    ref: i,
    className: s(
      "flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180",
      e
    ),
    ...a,
    children: [
      t,
      /* @__PURE__ */ r.jsx(Ee, { className: "h-4 w-4 shrink-0 transition-transform duration-200" })
    ]
  }
) }));
Pa.displayName = $.Trigger.displayName;
const Ia = n.forwardRef(({ className: e, children: t, ...a }, i) => /* @__PURE__ */ r.jsx(
  $.Content,
  {
    ref: i,
    className: s(
      "overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down",
      e
    ),
    ...a,
    children: /* @__PURE__ */ r.jsx("div", { className: "pb-4 pt-0", children: t })
  }
));
Ia.displayName = $.Content.displayName;
const re = F(
  "inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline"
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
), Ea = n.forwardRef(
  ({ className: e, variant: t, size: a, asChild: i = !1, ...c }, h) => {
    const D = i ? Oe : "button";
    return /* @__PURE__ */ r.jsx(
      D,
      {
        className: s(re({ variant: t, size: a, className: e })),
        ref: h,
        ...c
      }
    );
  }
);
Ea.displayName = "Button";
const gs = R.Root, xs = R.Trigger, gt = ({
  ...e
}) => /* @__PURE__ */ r.jsx(R.Portal, { ...e });
gt.displayName = R.Portal.displayName;
const xt = n.forwardRef(({ className: e, ...t }, a) => /* @__PURE__ */ r.jsx(
  R.Overlay,
  {
    className: s(
      "fixed inset-0 z-50 bg-background/80 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      e
    ),
    ...t,
    ref: a
  }
));
xt.displayName = R.Overlay.displayName;
const Da = n.forwardRef(({ className: e, ...t }, a) => /* @__PURE__ */ r.jsxs(gt, { children: [
  /* @__PURE__ */ r.jsx(xt, {}),
  /* @__PURE__ */ r.jsx(
    R.Content,
    {
      ref: a,
      className: s(
        "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg md:w-full",
        e
      ),
      ...t
    }
  )
] }));
Da.displayName = R.Content.displayName;
const Oa = ({
  className: e,
  ...t
}) => /* @__PURE__ */ r.jsx(
  "div",
  {
    className: s(
      "flex flex-col space-y-2 text-center sm:text-left",
      e
    ),
    ...t
  }
);
Oa.displayName = "AlertDialogHeader";
const Ma = ({
  className: e,
  ...t
}) => /* @__PURE__ */ r.jsx(
  "div",
  {
    className: s(
      "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",
      e
    ),
    ...t
  }
);
Ma.displayName = "AlertDialogFooter";
const Aa = n.forwardRef(({ className: e, ...t }, a) => /* @__PURE__ */ r.jsx(
  R.Title,
  {
    ref: a,
    className: s("text-lg font-semibold", e),
    ...t
  }
));
Aa.displayName = R.Title.displayName;
const Fa = n.forwardRef(({ className: e, ...t }, a) => /* @__PURE__ */ r.jsx(
  R.Description,
  {
    ref: a,
    className: s("text-sm text-muted-foreground", e),
    ...t
  }
));
Fa.displayName = R.Description.displayName;
const za = n.forwardRef(({ className: e, ...t }, a) => /* @__PURE__ */ r.jsx(
  R.Action,
  {
    ref: a,
    className: s(re(), e),
    ...t
  }
));
za.displayName = R.Action.displayName;
const La = n.forwardRef(({ className: e, ...t }, a) => /* @__PURE__ */ r.jsx(
  R.Cancel,
  {
    ref: a,
    className: s(
      re({ variant: "outline" }),
      "mt-2 sm:mt-0",
      e
    ),
    ...t
  }
));
La.displayName = R.Cancel.displayName;
const Va = F(
  "relative w-full rounded-lg border p-4 [&>svg~*]:pl-7 [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-foreground",
  {
    variants: {
      variant: {
        default: "bg-background text-foreground",
        destructive: "border-destructive/50 text-destructive dark:border-destructive [&>svg]:text-destructive"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
), Ga = n.forwardRef(({ className: e, variant: t, ...a }, i) => /* @__PURE__ */ r.jsx(
  "div",
  {
    ref: i,
    role: "alert",
    className: s(Va({ variant: t }), e),
    ...a
  }
));
Ga.displayName = "Alert";
const $a = n.forwardRef(({ className: e, ...t }, a) => /* @__PURE__ */ r.jsx(
  "h5",
  {
    ref: a,
    className: s("mb-1 font-medium leading-none tracking-tight", e),
    ...t
  }
));
$a.displayName = "AlertTitle";
const Ba = n.forwardRef(({ className: e, ...t }, a) => /* @__PURE__ */ r.jsx(
  "div",
  {
    ref: a,
    className: s("text-sm [&_p]:leading-relaxed", e),
    ...t
  }
));
Ba.displayName = "AlertDescription";
const bs = Na.Root, Wa = n.forwardRef(({ className: e, ...t }, a) => /* @__PURE__ */ r.jsx(
  q.Root,
  {
    ref: a,
    className: s(
      "relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full",
      e
    ),
    ...t
  }
));
Wa.displayName = q.Root.displayName;
const Ya = n.forwardRef(({ className: e, ...t }, a) => /* @__PURE__ */ r.jsx(
  q.Image,
  {
    ref: a,
    className: s("aspect-square h-full w-full", e),
    ...t
  }
));
Ya.displayName = q.Image.displayName;
const Ha = n.forwardRef(({ className: e, ...t }, a) => /* @__PURE__ */ r.jsx(
  q.Fallback,
  {
    ref: a,
    className: s(
      "flex h-full w-full items-center justify-center rounded-full bg-muted",
      e
    ),
    ...t
  }
));
Ha.displayName = q.Fallback.displayName;
const Ua = F(
  "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default: "border-transparent bg-primary text-primary-foreground hover:bg-primary/80",
        secondary: "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
        destructive: "border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",
        outline: "text-foreground"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
);
function vs({ className: e, variant: t, ...a }) {
  return /* @__PURE__ */ r.jsx("div", { className: s(Ua({ variant: t }), e), ...a });
}
function qa({
  className: e,
  classNames: t,
  showOutsideDays: a = !0,
  ...i
}) {
  return /* @__PURE__ */ r.jsx(
    wa,
    {
      showOutsideDays: a,
      className: s("p-3", e),
      classNames: {
        months: "flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0",
        month: "space-y-4",
        caption: "flex justify-center pt-1 relative items-center",
        caption_label: "text-sm font-medium",
        nav: "space-x-1 flex items-center",
        nav_button: s(
          re({ variant: "outline" }),
          "h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100"
        ),
        nav_button_previous: "absolute left-1",
        nav_button_next: "absolute right-1",
        table: "w-full border-collapse space-y-1",
        head_row: "flex",
        head_cell: "text-muted-foreground rounded-md w-9 font-normal text-[0.8rem]",
        row: "flex w-full mt-2",
        cell: "text-center text-sm p-0 relative [&:has([aria-selected])]:bg-accent first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20",
        day: s(
          re({ variant: "ghost" }),
          "h-9 w-9 p-0 font-normal aria-selected:opacity-100"
        ),
        day_selected: "bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground focus:bg-primary focus:text-primary-foreground",
        day_today: "bg-accent text-accent-foreground",
        day_outside: "text-muted-foreground opacity-50",
        day_disabled: "text-muted-foreground opacity-50",
        day_range_middle: "aria-selected:bg-accent aria-selected:text-accent-foreground",
        day_hidden: "invisible",
        ...t
      },
      components: {
        IconLeft: () => /* @__PURE__ */ r.jsx(pa, { className: "h-4 w-4" }),
        IconRight: () => /* @__PURE__ */ r.jsx(oe, { className: "h-4 w-4" })
      },
      ...i
    }
  );
}
qa.displayName = "Calendar";
const Ja = n.forwardRef(({ className: e, ...t }, a) => /* @__PURE__ */ r.jsx(
  "div",
  {
    ref: a,
    className: s(
      "rounded-lg border bg-card text-card-foreground shadow-sm",
      e
    ),
    ...t
  }
));
Ja.displayName = "Card";
const Xa = n.forwardRef(({ className: e, ...t }, a) => /* @__PURE__ */ r.jsx(
  "div",
  {
    ref: a,
    className: s("flex flex-col space-y-1.5 p-6", e),
    ...t
  }
));
Xa.displayName = "CardHeader";
const Ka = n.forwardRef(({ className: e, ...t }, a) => /* @__PURE__ */ r.jsx(
  "h3",
  {
    ref: a,
    className: s(
      "text-2xl font-semibold leading-none tracking-tight",
      e
    ),
    ...t
  }
));
Ka.displayName = "CardTitle";
const Qa = n.forwardRef(({ className: e, ...t }, a) => /* @__PURE__ */ r.jsx(
  "p",
  {
    ref: a,
    className: s("text-sm text-muted-foreground", e),
    ...t
  }
));
Qa.displayName = "CardDescription";
const Za = n.forwardRef(({ className: e, ...t }, a) => /* @__PURE__ */ r.jsx("div", { ref: a, className: s("p-6 pt-0", e), ...t }));
Za.displayName = "CardContent";
const er = n.forwardRef(({ className: e, ...t }, a) => /* @__PURE__ */ r.jsx(
  "div",
  {
    ref: a,
    className: s("flex items-center p-6 pt-0", e),
    ...t
  }
));
er.displayName = "CardFooter";
const tr = n.forwardRef(({ className: e, ...t }, a) => /* @__PURE__ */ r.jsx(
  _e.Root,
  {
    ref: a,
    className: s(
      "peer h-4 w-4 shrink-0 rounded-sm border border-primary ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground",
      e
    ),
    ...t,
    children: /* @__PURE__ */ r.jsx(
      _e.Indicator,
      {
        className: s("flex items-center justify-center text-current"),
        children: /* @__PURE__ */ r.jsx(se, { className: "h-4 w-4" })
      }
    )
  }
));
tr.displayName = _e.Root.displayName;
const ys = Me.Root, hs = Me.CollapsibleTrigger, Ns = Me.CollapsibleContent, ar = b.Root, ws = b.Trigger, bt = ({ ...e }) => /* @__PURE__ */ r.jsx(b.Portal, { ...e });
bt.displayName = b.Portal.displayName;
const vt = n.forwardRef(({ className: e, ...t }, a) => /* @__PURE__ */ r.jsx(
  b.Overlay,
  {
    ref: a,
    className: s(
      "fixed inset-0 z-50 bg-background/80 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      e
    ),
    ...t
  }
));
vt.displayName = b.Overlay.displayName;
const yt = n.forwardRef(({ className: e, children: t, ...a }, i) => /* @__PURE__ */ r.jsxs(bt, { children: [
  /* @__PURE__ */ r.jsx(vt, {}),
  /* @__PURE__ */ r.jsxs(
    b.Content,
    {
      ref: i,
      className: s(
        "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg md:w-full",
        e
      ),
      ...a,
      children: [
        t,
        /* @__PURE__ */ r.jsxs(b.Close, { className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground", children: [
          /* @__PURE__ */ r.jsx(De, { className: "h-4 w-4" }),
          /* @__PURE__ */ r.jsx("span", { className: "sr-only", children: "Close" })
        ] })
      ]
    }
  )
] }));
yt.displayName = b.Content.displayName;
const rr = ({
  className: e,
  ...t
}) => /* @__PURE__ */ r.jsx(
  "div",
  {
    className: s(
      "flex flex-col space-y-1.5 text-center sm:text-left",
      e
    ),
    ...t
  }
);
rr.displayName = "DialogHeader";
const or = ({
  className: e,
  ...t
}) => /* @__PURE__ */ r.jsx(
  "div",
  {
    className: s(
      "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",
      e
    ),
    ...t
  }
);
or.displayName = "DialogFooter";
const sr = n.forwardRef(({ className: e, ...t }, a) => /* @__PURE__ */ r.jsx(
  b.Title,
  {
    ref: a,
    className: s(
      "text-lg font-semibold leading-none tracking-tight",
      e
    ),
    ...t
  }
));
sr.displayName = b.Title.displayName;
const nr = n.forwardRef(({ className: e, ...t }, a) => /* @__PURE__ */ r.jsx(
  b.Description,
  {
    ref: a,
    className: s("text-sm text-muted-foreground", e),
    ...t
  }
));
nr.displayName = b.Description.displayName;
const ht = n.forwardRef(({ className: e, ...t }, a) => /* @__PURE__ */ r.jsx(
  _,
  {
    ref: a,
    className: s(
      "flex h-full w-full flex-col overflow-hidden rounded-md bg-popover text-popover-foreground",
      e
    ),
    ...t
  }
));
ht.displayName = _.displayName;
const js = ({ children: e, ...t }) => /* @__PURE__ */ r.jsx(ar, { ...t, children: /* @__PURE__ */ r.jsx(yt, { className: "overflow-hidden p-0 shadow-lg", children: /* @__PURE__ */ r.jsx(ht, { className: "[&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground [&_[cmdk-group]:not([hidden])_~[cmdk-group]]:pt-0 [&_[cmdk-group]]:px-2 [&_[cmdk-input-wrapper]_svg]:h-5 [&_[cmdk-input-wrapper]_svg]:w-5 [&_[cmdk-input]]:h-12 [&_[cmdk-item]]:px-2 [&_[cmdk-item]]:py-3 [&_[cmdk-item]_svg]:h-5 [&_[cmdk-item]_svg]:w-5", children: e }) }) }), ir = n.forwardRef(({ className: e, ...t }, a) => /* @__PURE__ */ r.jsxs("div", { className: "flex items-center border-b px-3", "cmdk-input-wrapper": "", children: [
  /* @__PURE__ */ r.jsx(ga, { className: "mr-2 h-4 w-4 shrink-0 opacity-50" }),
  /* @__PURE__ */ r.jsx(
    _.Input,
    {
      ref: a,
      className: s(
        "flex h-11 w-full rounded-md bg-transparent py-3 text-sm outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50",
        e
      ),
      ...t
    }
  )
] }));
ir.displayName = _.Input.displayName;
const dr = n.forwardRef(({ className: e, ...t }, a) => /* @__PURE__ */ r.jsx(
  _.List,
  {
    ref: a,
    className: s("max-h-[300px] overflow-y-auto overflow-x-hidden", e),
    ...t
  }
));
dr.displayName = _.List.displayName;
const lr = n.forwardRef((e, t) => /* @__PURE__ */ r.jsx(
  _.Empty,
  {
    ref: t,
    className: "py-6 text-center text-sm",
    ...e
  }
));
lr.displayName = _.Empty.displayName;
const cr = n.forwardRef(({ className: e, ...t }, a) => /* @__PURE__ */ r.jsx(
  _.Group,
  {
    ref: a,
    className: s(
      "overflow-hidden p-1 text-foreground [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground",
      e
    ),
    ...t
  }
));
cr.displayName = _.Group.displayName;
const ur = n.forwardRef(({ className: e, ...t }, a) => /* @__PURE__ */ r.jsx(
  _.Separator,
  {
    ref: a,
    className: s("-mx-1 h-px bg-border", e),
    ...t
  }
));
ur.displayName = _.Separator.displayName;
const fr = n.forwardRef(({ className: e, ...t }, a) => /* @__PURE__ */ r.jsx(
  _.Item,
  {
    ref: a,
    className: s(
      "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none aria-selected:bg-accent aria-selected:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      e
    ),
    ...t
  }
));
fr.displayName = _.Item.displayName;
const mr = ({
  className: e,
  ...t
}) => /* @__PURE__ */ r.jsx(
  "span",
  {
    className: s(
      "ml-auto text-xs tracking-widest text-muted-foreground",
      e
    ),
    ...t
  }
);
mr.displayName = "CommandShortcut";
const Rs = v.Root, Cs = v.Trigger, Ts = v.Group, Ss = v.Portal, _s = v.Sub, ks = v.RadioGroup, pr = n.forwardRef(({ className: e, inset: t, children: a, ...i }, c) => /* @__PURE__ */ r.jsxs(
  v.SubTrigger,
  {
    ref: c,
    className: s(
      "flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground",
      t && "pl-8",
      e
    ),
    ...i,
    children: [
      a,
      /* @__PURE__ */ r.jsx(oe, { className: "ml-auto h-4 w-4" })
    ]
  }
));
pr.displayName = v.SubTrigger.displayName;
const gr = n.forwardRef(({ className: e, ...t }, a) => /* @__PURE__ */ r.jsx(
  v.SubContent,
  {
    ref: a,
    className: s(
      "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      e
    ),
    ...t
  }
));
gr.displayName = v.SubContent.displayName;
const xr = n.forwardRef(({ className: e, ...t }, a) => /* @__PURE__ */ r.jsx(v.Portal, { children: /* @__PURE__ */ r.jsx(
  v.Content,
  {
    ref: a,
    className: s(
      "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md animate-in fade-in-80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      e
    ),
    ...t
  }
) }));
xr.displayName = v.Content.displayName;
const br = n.forwardRef(({ className: e, inset: t, ...a }, i) => /* @__PURE__ */ r.jsx(
  v.Item,
  {
    ref: i,
    className: s(
      "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      t && "pl-8",
      e
    ),
    ...a
  }
));
br.displayName = v.Item.displayName;
const vr = n.forwardRef(({ className: e, children: t, checked: a, ...i }, c) => /* @__PURE__ */ r.jsxs(
  v.CheckboxItem,
  {
    ref: c,
    className: s(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      e
    ),
    checked: a,
    ...i,
    children: [
      /* @__PURE__ */ r.jsx("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ r.jsx(v.ItemIndicator, { children: /* @__PURE__ */ r.jsx(se, { className: "h-4 w-4" }) }) }),
      t
    ]
  }
));
vr.displayName = v.CheckboxItem.displayName;
const yr = n.forwardRef(({ className: e, children: t, ...a }, i) => /* @__PURE__ */ r.jsxs(
  v.RadioItem,
  {
    ref: i,
    className: s(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      e
    ),
    ...a,
    children: [
      /* @__PURE__ */ r.jsx("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ r.jsx(v.ItemIndicator, { children: /* @__PURE__ */ r.jsx(ge, { className: "h-2 w-2 fill-current" }) }) }),
      t
    ]
  }
));
yr.displayName = v.RadioItem.displayName;
const hr = n.forwardRef(({ className: e, inset: t, ...a }, i) => /* @__PURE__ */ r.jsx(
  v.Label,
  {
    ref: i,
    className: s(
      "px-2 py-1.5 text-sm font-semibold text-foreground",
      t && "pl-8",
      e
    ),
    ...a
  }
));
hr.displayName = v.Label.displayName;
const Nr = n.forwardRef(({ className: e, ...t }, a) => /* @__PURE__ */ r.jsx(
  v.Separator,
  {
    ref: a,
    className: s("-mx-1 my-1 h-px bg-border", e),
    ...t
  }
));
Nr.displayName = v.Separator.displayName;
const wr = ({
  className: e,
  ...t
}) => /* @__PURE__ */ r.jsx(
  "span",
  {
    className: s(
      "ml-auto text-xs tracking-widest text-muted-foreground",
      e
    ),
    ...t
  }
);
wr.displayName = "ContextMenuShortcut";
const Ps = y.Root, Is = y.Trigger, Es = y.Group, Ds = y.Portal, Os = y.Sub, Ms = y.RadioGroup, jr = n.forwardRef(({ className: e, inset: t, children: a, ...i }, c) => /* @__PURE__ */ r.jsxs(
  y.SubTrigger,
  {
    ref: c,
    className: s(
      "flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent data-[state=open]:bg-accent",
      t && "pl-8",
      e
    ),
    ...i,
    children: [
      a,
      /* @__PURE__ */ r.jsx(oe, { className: "ml-auto h-4 w-4" })
    ]
  }
));
jr.displayName = y.SubTrigger.displayName;
const Rr = n.forwardRef(({ className: e, ...t }, a) => /* @__PURE__ */ r.jsx(
  y.SubContent,
  {
    ref: a,
    className: s(
      "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      e
    ),
    ...t
  }
));
Rr.displayName = y.SubContent.displayName;
const Cr = n.forwardRef(({ className: e, sideOffset: t = 4, ...a }, i) => /* @__PURE__ */ r.jsx(y.Portal, { children: /* @__PURE__ */ r.jsx(
  y.Content,
  {
    ref: i,
    sideOffset: t,
    className: s(
      "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      e
    ),
    ...a
  }
) }));
Cr.displayName = y.Content.displayName;
const Tr = n.forwardRef(({ className: e, inset: t, ...a }, i) => /* @__PURE__ */ r.jsx(
  y.Item,
  {
    ref: i,
    className: s(
      "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      t && "pl-8",
      e
    ),
    ...a
  }
));
Tr.displayName = y.Item.displayName;
const Sr = n.forwardRef(({ className: e, children: t, checked: a, ...i }, c) => /* @__PURE__ */ r.jsxs(
  y.CheckboxItem,
  {
    ref: c,
    className: s(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      e
    ),
    checked: a,
    ...i,
    children: [
      /* @__PURE__ */ r.jsx("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ r.jsx(y.ItemIndicator, { children: /* @__PURE__ */ r.jsx(se, { className: "h-4 w-4" }) }) }),
      t
    ]
  }
));
Sr.displayName = y.CheckboxItem.displayName;
const _r = n.forwardRef(({ className: e, children: t, ...a }, i) => /* @__PURE__ */ r.jsxs(
  y.RadioItem,
  {
    ref: i,
    className: s(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      e
    ),
    ...a,
    children: [
      /* @__PURE__ */ r.jsx("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ r.jsx(y.ItemIndicator, { children: /* @__PURE__ */ r.jsx(ge, { className: "h-2 w-2 fill-current" }) }) }),
      t
    ]
  }
));
_r.displayName = y.RadioItem.displayName;
const kr = n.forwardRef(({ className: e, inset: t, ...a }, i) => /* @__PURE__ */ r.jsx(
  y.Label,
  {
    ref: i,
    className: s(
      "px-2 py-1.5 text-sm font-semibold",
      t && "pl-8",
      e
    ),
    ...a
  }
));
kr.displayName = y.Label.displayName;
const Pr = n.forwardRef(({ className: e, ...t }, a) => /* @__PURE__ */ r.jsx(
  y.Separator,
  {
    ref: a,
    className: s("-mx-1 my-1 h-px bg-muted", e),
    ...t
  }
));
Pr.displayName = y.Separator.displayName;
const Ir = ({
  className: e,
  ...t
}) => /* @__PURE__ */ r.jsx(
  "span",
  {
    className: s("ml-auto text-xs tracking-widest opacity-60", e),
    ...t
  }
);
Ir.displayName = "DropdownMenuShortcut";
const Er = F(
  "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
), Nt = n.forwardRef(({ className: e, ...t }, a) => /* @__PURE__ */ r.jsx(
  ft.Root,
  {
    ref: a,
    className: s(Er(), e),
    ...t
  }
));
Nt.displayName = ft.Root.displayName;
const As = ja, wt = n.createContext(
  {}
), Fs = ({
  ...e
}) => /* @__PURE__ */ r.jsx(wt.Provider, { value: { name: e.name }, children: /* @__PURE__ */ r.jsx(Ra, { ...e }) }), be = () => {
  const e = n.useContext(wt), t = n.useContext(jt), { getFieldState: a, formState: i } = Ca(), c = a(e.name, i);
  if (!e)
    throw new Error("useFormField should be used within <FormField>");
  const { id: h } = t;
  return {
    id: h,
    name: e.name,
    formItemId: `${h}-form-item`,
    formDescriptionId: `${h}-form-item-description`,
    formMessageId: `${h}-form-item-message`,
    ...c
  };
}, jt = n.createContext(
  {}
), Dr = n.forwardRef(({ className: e, ...t }, a) => {
  const i = n.useId();
  return /* @__PURE__ */ r.jsx(jt.Provider, { value: { id: i }, children: /* @__PURE__ */ r.jsx("div", { ref: a, className: s("space-y-2", e), ...t }) });
});
Dr.displayName = "FormItem";
const Or = n.forwardRef(({ className: e, ...t }, a) => {
  const { error: i, formItemId: c } = be();
  return /* @__PURE__ */ r.jsx(
    Nt,
    {
      ref: a,
      className: s(i && "text-destructive", e),
      htmlFor: c,
      ...t
    }
  );
});
Or.displayName = "FormLabel";
const Mr = n.forwardRef(({ ...e }, t) => {
  const { error: a, formItemId: i, formDescriptionId: c, formMessageId: h } = be();
  return /* @__PURE__ */ r.jsx(
    Oe,
    {
      ref: t,
      id: i,
      "aria-describedby": a ? `${c} ${h}` : `${c}`,
      "aria-invalid": !!a,
      ...e
    }
  );
});
Mr.displayName = "FormControl";
const Ar = n.forwardRef(({ className: e, ...t }, a) => {
  const { formDescriptionId: i } = be();
  return /* @__PURE__ */ r.jsx(
    "p",
    {
      ref: a,
      id: i,
      className: s("text-sm text-muted-foreground", e),
      ...t
    }
  );
});
Ar.displayName = "FormDescription";
const Fr = n.forwardRef(({ className: e, children: t, ...a }, i) => {
  const { error: c, formMessageId: h } = be(), D = c ? String(c == null ? void 0 : c.message) : t;
  return D ? /* @__PURE__ */ r.jsx(
    "p",
    {
      ref: i,
      id: h,
      className: s("text-sm font-medium text-destructive", e),
      ...a,
      children: D
    }
  ) : null;
});
Fr.displayName = "FormMessage";
const zs = xe.Root, Ls = xe.Trigger, zr = n.forwardRef(({ className: e, align: t = "center", sideOffset: a = 4, ...i }, c) => /* @__PURE__ */ r.jsx(
  xe.Content,
  {
    ref: c,
    align: t,
    sideOffset: a,
    className: s(
      "z-50 w-64 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      e
    ),
    ...i
  }
));
zr.displayName = xe.Content.displayName;
const Lr = n.forwardRef(
  ({ className: e, type: t, ...a }, i) => /* @__PURE__ */ r.jsx(
    "input",
    {
      type: t,
      className: s(
        "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
        e
      ),
      ref: i,
      ...a
    }
  )
);
Lr.displayName = "Input";
const Vs = g.Menu, Gs = g.Group, $s = g.Portal, Bs = g.Sub, Ws = g.RadioGroup, Vr = n.forwardRef(({ className: e, ...t }, a) => /* @__PURE__ */ r.jsx(
  g.Root,
  {
    ref: a,
    className: s(
      "flex h-10 items-center space-x-1 rounded-md border bg-background p-1",
      e
    ),
    ...t
  }
));
Vr.displayName = g.Root.displayName;
const Gr = n.forwardRef(({ className: e, ...t }, a) => /* @__PURE__ */ r.jsx(
  g.Trigger,
  {
    ref: a,
    className: s(
      "flex cursor-default select-none items-center rounded-sm px-3 py-1.5 text-sm font-medium outline-none focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground",
      e
    ),
    ...t
  }
));
Gr.displayName = g.Trigger.displayName;
const $r = n.forwardRef(({ className: e, inset: t, children: a, ...i }, c) => /* @__PURE__ */ r.jsxs(
  g.SubTrigger,
  {
    ref: c,
    className: s(
      "flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground",
      t && "pl-8",
      e
    ),
    ...i,
    children: [
      a,
      /* @__PURE__ */ r.jsx(oe, { className: "ml-auto h-4 w-4" })
    ]
  }
));
$r.displayName = g.SubTrigger.displayName;
const Br = n.forwardRef(({ className: e, ...t }, a) => /* @__PURE__ */ r.jsx(
  g.SubContent,
  {
    ref: a,
    className: s(
      "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      e
    ),
    ...t
  }
));
Br.displayName = g.SubContent.displayName;
const Wr = n.forwardRef(
  ({ className: e, align: t = "start", alignOffset: a = -4, sideOffset: i = 8, ...c }, h) => /* @__PURE__ */ r.jsx(g.Portal, { children: /* @__PURE__ */ r.jsx(
    g.Content,
    {
      ref: h,
      align: t,
      alignOffset: a,
      sideOffset: i,
      className: s(
        "z-50 min-w-[12rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
        e
      ),
      ...c
    }
  ) })
);
Wr.displayName = g.Content.displayName;
const Yr = n.forwardRef(({ className: e, inset: t, ...a }, i) => /* @__PURE__ */ r.jsx(
  g.Item,
  {
    ref: i,
    className: s(
      "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      t && "pl-8",
      e
    ),
    ...a
  }
));
Yr.displayName = g.Item.displayName;
const Hr = n.forwardRef(({ className: e, children: t, checked: a, ...i }, c) => /* @__PURE__ */ r.jsxs(
  g.CheckboxItem,
  {
    ref: c,
    className: s(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      e
    ),
    checked: a,
    ...i,
    children: [
      /* @__PURE__ */ r.jsx("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ r.jsx(g.ItemIndicator, { children: /* @__PURE__ */ r.jsx(se, { className: "h-4 w-4" }) }) }),
      t
    ]
  }
));
Hr.displayName = g.CheckboxItem.displayName;
const Ur = n.forwardRef(({ className: e, children: t, ...a }, i) => /* @__PURE__ */ r.jsxs(
  g.RadioItem,
  {
    ref: i,
    className: s(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      e
    ),
    ...a,
    children: [
      /* @__PURE__ */ r.jsx("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ r.jsx(g.ItemIndicator, { children: /* @__PURE__ */ r.jsx(ge, { className: "h-2 w-2 fill-current" }) }) }),
      t
    ]
  }
));
Ur.displayName = g.RadioItem.displayName;
const qr = n.forwardRef(({ className: e, inset: t, ...a }, i) => /* @__PURE__ */ r.jsx(
  g.Label,
  {
    ref: i,
    className: s(
      "px-2 py-1.5 text-sm font-semibold",
      t && "pl-8",
      e
    ),
    ...a
  }
));
qr.displayName = g.Label.displayName;
const Jr = n.forwardRef(({ className: e, ...t }, a) => /* @__PURE__ */ r.jsx(
  g.Separator,
  {
    ref: a,
    className: s("-mx-1 my-1 h-px bg-muted", e),
    ...t
  }
));
Jr.displayName = g.Separator.displayName;
const Xr = ({
  className: e,
  ...t
}) => /* @__PURE__ */ r.jsx(
  "span",
  {
    className: s(
      "ml-auto text-xs tracking-widest text-muted-foreground",
      e
    ),
    ...t
  }
);
Xr.displayname = "MenubarShortcut";
const Kr = n.forwardRef(({ className: e, children: t, ...a }, i) => /* @__PURE__ */ r.jsxs(
  k.Root,
  {
    ref: i,
    className: s(
      "relative z-10 flex max-w-max flex-1 items-center justify-center",
      e
    ),
    ...a,
    children: [
      t,
      /* @__PURE__ */ r.jsx(Rt, {})
    ]
  }
));
Kr.displayName = k.Root.displayName;
const Qr = n.forwardRef(({ className: e, ...t }, a) => /* @__PURE__ */ r.jsx(
  k.List,
  {
    ref: a,
    className: s(
      "group flex flex-1 list-none items-center justify-center space-x-1",
      e
    ),
    ...t
  }
));
Qr.displayName = k.List.displayName;
const Ys = k.Item, Zr = F(
  "group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
), eo = n.forwardRef(({ className: e, children: t, ...a }, i) => /* @__PURE__ */ r.jsxs(
  k.Trigger,
  {
    ref: i,
    className: s(Zr(), "group", e),
    ...a,
    children: [
      t,
      " ",
      /* @__PURE__ */ r.jsx(
        Ee,
        {
          className: "relative top-[1px] ml-1 h-3 w-3 transition duration-200 group-data-[state=open]:rotate-180",
          "aria-hidden": "true"
        }
      )
    ]
  }
));
eo.displayName = k.Trigger.displayName;
const to = n.forwardRef(({ className: e, ...t }, a) => /* @__PURE__ */ r.jsx(
  k.Content,
  {
    ref: a,
    className: s(
      "left-0 top-0 w-full data-[motion^=from-]:animate-in data-[motion^=to-]:animate-out data-[motion^=from-]:fade-in data-[motion^=to-]:fade-out data-[motion=from-end]:slide-in-from-right-52 data-[motion=from-start]:slide-in-from-left-52 data-[motion=to-end]:slide-out-to-right-52 data-[motion=to-start]:slide-out-to-left-52 md:absolute md:w-auto ",
      e
    ),
    ...t
  }
));
to.displayName = k.Content.displayName;
const Hs = k.Link, Rt = n.forwardRef(({ className: e, ...t }, a) => /* @__PURE__ */ r.jsx("div", { className: s("absolute left-0 top-full flex justify-center"), children: /* @__PURE__ */ r.jsx(
  k.Viewport,
  {
    className: s(
      "origin-top-center relative mt-1.5 h-[var(--radix-navigation-menu-viewport-height)] w-full overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-90 md:w-[var(--radix-navigation-menu-viewport-width)]",
      e
    ),
    ref: a,
    ...t
  }
) }));
Rt.displayName = k.Viewport.displayName;
const ao = n.forwardRef(({ className: e, ...t }, a) => /* @__PURE__ */ r.jsx(
  k.Indicator,
  {
    ref: a,
    className: s(
      "top-full z-[1] flex h-1.5 items-end justify-center overflow-hidden data-[state=visible]:animate-in data-[state=hidden]:animate-out data-[state=hidden]:fade-out data-[state=visible]:fade-in",
      e
    ),
    ...t,
    children: /* @__PURE__ */ r.jsx("div", { className: "relative top-[60%] h-2 w-2 rotate-45 rounded-tl-sm bg-border shadow-md" })
  }
));
ao.displayName = k.Indicator.displayName;
const Us = te.Root, qs = te.Trigger, ro = n.forwardRef(({ className: e, align: t = "center", sideOffset: a = 4, ...i }, c) => /* @__PURE__ */ r.jsx(te.Portal, { children: /* @__PURE__ */ r.jsx(
  te.Content,
  {
    ref: c,
    align: t,
    sideOffset: a,
    className: s(
      "z-50 w-72 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      e
    ),
    ...i
  }
) }));
ro.displayName = te.Content.displayName;
const oo = n.forwardRef(({ className: e, value: t, ...a }, i) => /* @__PURE__ */ r.jsx(
  ke.Root,
  {
    ref: i,
    className: s(
      "relative h-4 w-full overflow-hidden rounded-full bg-secondary",
      e
    ),
    ...a,
    children: /* @__PURE__ */ r.jsx(
      ke.Indicator,
      {
        className: "h-full w-full flex-1 bg-primary transition-all",
        style: { transform: `translateX(-${100 - (t || 0)}%)` }
      }
    )
  }
));
oo.displayName = ke.Root.displayName;
const so = n.forwardRef(({ className: e, ...t }, a) => /* @__PURE__ */ r.jsx(
  ae.Root,
  {
    className: s("grid gap-2", e),
    ...t,
    ref: a
  }
));
so.displayName = ae.Root.displayName;
const no = n.forwardRef(({ className: e, children: t, ...a }, i) => /* @__PURE__ */ r.jsx(
  ae.Item,
  {
    ref: i,
    className: s(
      "aspect-square h-4 w-4 rounded-full border border-primary text-primary ring-offset-background focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
      e
    ),
    ...a,
    children: /* @__PURE__ */ r.jsx(ae.Indicator, { className: "flex items-center justify-center", children: /* @__PURE__ */ r.jsx(ge, { className: "h-2.5 w-2.5 fill-current text-current" }) })
  }
));
no.displayName = ae.Item.displayName;
const io = n.forwardRef(({ className: e, children: t, ...a }, i) => /* @__PURE__ */ r.jsxs(
  G.Root,
  {
    ref: i,
    className: s("relative overflow-hidden", e),
    ...a,
    children: [
      /* @__PURE__ */ r.jsx(G.Viewport, { className: "h-full w-full rounded-[inherit]", children: t }),
      /* @__PURE__ */ r.jsx(Ct, {}),
      /* @__PURE__ */ r.jsx(G.Corner, {})
    ]
  }
));
io.displayName = G.Root.displayName;
const Ct = n.forwardRef(({ className: e, orientation: t = "vertical", ...a }, i) => /* @__PURE__ */ r.jsx(
  G.ScrollAreaScrollbar,
  {
    ref: i,
    orientation: t,
    className: s(
      "flex touch-none select-none transition-colors",
      t === "vertical" && "h-full w-2.5 border-l border-l-transparent p-[1px]",
      t === "horizontal" && "h-2.5 border-t border-t-transparent p-[1px]",
      e
    ),
    ...a,
    children: /* @__PURE__ */ r.jsx(
      G.ScrollAreaThumb,
      {
        className: s(
          "relative rounded-full bg-border",
          t === "vertical" && "flex-1"
        )
      }
    )
  }
));
Ct.displayName = G.ScrollAreaScrollbar.displayName;
const Js = j.Root, Xs = j.Group, Ks = j.Value, lo = n.forwardRef(({ className: e, children: t, ...a }, i) => /* @__PURE__ */ r.jsxs(
  j.Trigger,
  {
    ref: i,
    className: s(
      "flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
      e
    ),
    ...a,
    children: [
      t,
      /* @__PURE__ */ r.jsx(j.Icon, { asChild: !0, children: /* @__PURE__ */ r.jsx(Ee, { className: "h-4 w-4 opacity-50" }) })
    ]
  }
));
lo.displayName = j.Trigger.displayName;
const co = n.forwardRef(({ className: e, children: t, position: a = "popper", ...i }, c) => /* @__PURE__ */ r.jsx(j.Portal, { children: /* @__PURE__ */ r.jsx(
  j.Content,
  {
    ref: c,
    className: s(
      "relative z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      a === "popper" && "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",
      e
    ),
    position: a,
    ...i,
    children: /* @__PURE__ */ r.jsx(
      j.Viewport,
      {
        className: s(
          "p-1",
          a === "popper" && "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"
        ),
        children: t
      }
    )
  }
) }));
co.displayName = j.Content.displayName;
const uo = n.forwardRef(({ className: e, ...t }, a) => /* @__PURE__ */ r.jsx(
  j.Label,
  {
    ref: a,
    className: s("py-1.5 pl-8 pr-2 text-sm font-semibold", e),
    ...t
  }
));
uo.displayName = j.Label.displayName;
const fo = n.forwardRef(({ className: e, children: t, ...a }, i) => /* @__PURE__ */ r.jsxs(
  j.Item,
  {
    ref: i,
    className: s(
      "relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      e
    ),
    ...a,
    children: [
      /* @__PURE__ */ r.jsx("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ r.jsx(j.ItemIndicator, { children: /* @__PURE__ */ r.jsx(se, { className: "h-4 w-4" }) }) }),
      /* @__PURE__ */ r.jsx(j.ItemText, { children: t })
    ]
  }
));
fo.displayName = j.Item.displayName;
const mo = n.forwardRef(({ className: e, ...t }, a) => /* @__PURE__ */ r.jsx(
  j.Separator,
  {
    ref: a,
    className: s("-mx-1 my-1 h-px bg-muted", e),
    ...t
  }
));
mo.displayName = j.Separator.displayName;
const po = n.forwardRef(
  ({ className: e, orientation: t = "horizontal", decorative: a = !0, ...i }, c) => /* @__PURE__ */ r.jsx(
    mt.Root,
    {
      ref: c,
      decorative: a,
      orientation: t,
      className: s(
        "shrink-0 bg-border",
        t === "horizontal" ? "h-[1px] w-full" : "h-full w-[1px]",
        e
      ),
      ...i
    }
  )
);
po.displayName = mt.Root.displayName;
const Qs = b.Root, Zs = b.Trigger, en = b.Close, Tt = ({ ...e }) => /* @__PURE__ */ r.jsx(b.Portal, { ...e });
Tt.displayName = b.Portal.displayName;
const St = n.forwardRef(({ className: e, ...t }, a) => /* @__PURE__ */ r.jsx(
  b.Overlay,
  {
    className: s(
      "fixed inset-0 z-50 bg-background/80 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      e
    ),
    ...t,
    ref: a
  }
));
St.displayName = b.Overlay.displayName;
const go = F(
  "fixed z-50 gap-4 bg-background p-6 shadow-lg transition ease-in-out data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:duration-300 data-[state=open]:duration-500",
  {
    variants: {
      side: {
        top: "inset-x-0 top-0 border-b data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top",
        bottom: "inset-x-0 bottom-0 border-t data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom",
        left: "inset-y-0 left-0 h-full w-3/4 border-r data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left sm:max-w-sm",
        right: "inset-y-0 right-0 h-full w-3/4  border-l data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right sm:max-w-sm"
      }
    },
    defaultVariants: {
      side: "right"
    }
  }
), xo = n.forwardRef(({ side: e = "right", className: t, children: a, ...i }, c) => /* @__PURE__ */ r.jsxs(Tt, { children: [
  /* @__PURE__ */ r.jsx(St, {}),
  /* @__PURE__ */ r.jsxs(
    b.Content,
    {
      ref: c,
      className: s(go({ side: e }), t),
      ...i,
      children: [
        a,
        /* @__PURE__ */ r.jsxs(b.Close, { className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary", children: [
          /* @__PURE__ */ r.jsx(De, { className: "h-4 w-4" }),
          /* @__PURE__ */ r.jsx("span", { className: "sr-only", children: "Close" })
        ] })
      ]
    }
  )
] }));
xo.displayName = b.Content.displayName;
const bo = ({
  className: e,
  ...t
}) => /* @__PURE__ */ r.jsx(
  "div",
  {
    className: s(
      "flex flex-col space-y-2 text-center sm:text-left",
      e
    ),
    ...t
  }
);
bo.displayName = "SheetHeader";
const vo = ({
  className: e,
  ...t
}) => /* @__PURE__ */ r.jsx(
  "div",
  {
    className: s(
      "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",
      e
    ),
    ...t
  }
);
vo.displayName = "SheetFooter";
const yo = n.forwardRef(({ className: e, ...t }, a) => /* @__PURE__ */ r.jsx(
  b.Title,
  {
    ref: a,
    className: s("text-lg font-semibold text-foreground", e),
    ...t
  }
));
yo.displayName = b.Title.displayName;
const ho = n.forwardRef(({ className: e, ...t }, a) => /* @__PURE__ */ r.jsx(
  b.Description,
  {
    ref: a,
    className: s("text-sm text-muted-foreground", e),
    ...t
  }
));
ho.displayName = b.Description.displayName;
function tn({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ r.jsx(
    "div",
    {
      className: s("animate-pulse rounded-md bg-muted", e),
      ...t
    }
  );
}
const No = n.forwardRef(({ className: e, ...t }, a) => /* @__PURE__ */ r.jsxs(
  Z.Root,
  {
    ref: a,
    className: s(
      "relative flex w-full touch-none select-none items-center",
      e
    ),
    ...t,
    children: [
      /* @__PURE__ */ r.jsx(Z.Track, { className: "relative h-2 w-full grow overflow-hidden rounded-full bg-secondary", children: /* @__PURE__ */ r.jsx(Z.Range, { className: "absolute h-full bg-primary" }) }),
      /* @__PURE__ */ r.jsx(Z.Thumb, { className: "block h-5 w-5 rounded-full border-2 border-primary bg-background ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50" })
    ]
  }
));
No.displayName = Z.Root.displayName;
const wo = n.forwardRef(({ className: e, ...t }, a) => /* @__PURE__ */ r.jsx(
  Pe.Root,
  {
    className: s(
      "peer inline-flex h-[24px] w-[44px] shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=unchecked]:bg-input",
      e
    ),
    ...t,
    ref: a,
    children: /* @__PURE__ */ r.jsx(
      Pe.Thumb,
      {
        className: s(
          "pointer-events-none block h-5 w-5 rounded-full bg-background shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0"
        )
      }
    )
  }
));
wo.displayName = Pe.Root.displayName;
const jo = n.forwardRef(({ className: e, ...t }, a) => /* @__PURE__ */ r.jsx("div", { className: "relative w-full overflow-auto", children: /* @__PURE__ */ r.jsx(
  "table",
  {
    ref: a,
    className: s("w-full caption-bottom text-sm", e),
    ...t
  }
) }));
jo.displayName = "Table";
const Ro = n.forwardRef(({ className: e, ...t }, a) => /* @__PURE__ */ r.jsx("thead", { ref: a, className: s("[&_tr]:border-b", e), ...t }));
Ro.displayName = "TableHeader";
const Co = n.forwardRef(({ className: e, ...t }, a) => /* @__PURE__ */ r.jsx(
  "tbody",
  {
    ref: a,
    className: s("[&_tr:last-child]:border-0", e),
    ...t
  }
));
Co.displayName = "TableBody";
const To = n.forwardRef(({ className: e, ...t }, a) => /* @__PURE__ */ r.jsx(
  "tfoot",
  {
    ref: a,
    className: s("bg-primary font-medium text-primary-foreground", e),
    ...t
  }
));
To.displayName = "TableFooter";
const So = n.forwardRef(({ className: e, ...t }, a) => /* @__PURE__ */ r.jsx(
  "tr",
  {
    ref: a,
    className: s(
      "border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted",
      e
    ),
    ...t
  }
));
So.displayName = "TableRow";
const _o = n.forwardRef(({ className: e, ...t }, a) => /* @__PURE__ */ r.jsx(
  "th",
  {
    ref: a,
    className: s(
      "h-12 px-4 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0",
      e
    ),
    ...t
  }
));
_o.displayName = "TableHead";
const ko = n.forwardRef(({ className: e, ...t }, a) => /* @__PURE__ */ r.jsx(
  "td",
  {
    ref: a,
    className: s("p-4 align-middle [&:has([role=checkbox])]:pr-0", e),
    ...t
  }
));
ko.displayName = "TableCell";
const Po = n.forwardRef(({ className: e, ...t }, a) => /* @__PURE__ */ r.jsx(
  "caption",
  {
    ref: a,
    className: s("mt-4 text-sm text-muted-foreground", e),
    ...t
  }
));
Po.displayName = "TableCaption";
const an = B.Root, Io = n.forwardRef(({ className: e, ...t }, a) => /* @__PURE__ */ r.jsx(
  B.List,
  {
    ref: a,
    className: s(
      "inline-flex h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground",
      e
    ),
    ...t
  }
));
Io.displayName = B.List.displayName;
const Eo = n.forwardRef(({ className: e, ...t }, a) => /* @__PURE__ */ r.jsx(
  B.Trigger,
  {
    ref: a,
    className: s(
      "inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm",
      e
    ),
    ...t
  }
));
Eo.displayName = B.Trigger.displayName;
const Do = n.forwardRef(({ className: e, ...t }, a) => /* @__PURE__ */ r.jsx(
  B.Content,
  {
    ref: a,
    className: s(
      "mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
      e
    ),
    ...t
  }
));
Do.displayName = B.Content.displayName;
const Oo = n.forwardRef(
  ({ className: e, ...t }, a) => /* @__PURE__ */ r.jsx(
    "textarea",
    {
      className: s(
        "flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
        e
      ),
      ref: a,
      ...t
    }
  )
);
Oo.displayName = "Textarea";
const Mo = I.Provider, _t = n.forwardRef(({ className: e, ...t }, a) => /* @__PURE__ */ r.jsx(
  I.Viewport,
  {
    ref: a,
    className: s(
      "fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]",
      e
    ),
    ...t
  }
));
_t.displayName = I.Viewport.displayName;
const Ao = F(
  "group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border p-6 pr-8 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full",
  {
    variants: {
      variant: {
        default: "border bg-background text-foreground",
        destructive: "destructive group border-destructive bg-destructive text-destructive-foreground"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
), kt = n.forwardRef(({ className: e, variant: t, ...a }, i) => /* @__PURE__ */ r.jsx(
  I.Root,
  {
    ref: i,
    className: s(Ao({ variant: t }), e),
    ...a
  }
));
kt.displayName = I.Root.displayName;
const Fo = n.forwardRef(({ className: e, ...t }, a) => /* @__PURE__ */ r.jsx(
  I.Action,
  {
    ref: a,
    className: s(
      "inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium ring-offset-background transition-colors hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 group-[.destructive]:border-muted/40 group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground group-[.destructive]:focus:ring-destructive",
      e
    ),
    ...t
  }
));
Fo.displayName = I.Action.displayName;
const Pt = n.forwardRef(({ className: e, ...t }, a) => /* @__PURE__ */ r.jsx(
  I.Close,
  {
    ref: a,
    className: s(
      "absolute right-2 top-2 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity hover:text-foreground focus:opacity-100 focus:outline-none focus:ring-2 group-hover:opacity-100 group-[.destructive]:text-red-300 group-[.destructive]:hover:text-red-50 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600",
      e
    ),
    "toast-close": "",
    ...t,
    children: /* @__PURE__ */ r.jsx(De, { className: "h-4 w-4" })
  }
));
Pt.displayName = I.Close.displayName;
const It = n.forwardRef(({ className: e, ...t }, a) => /* @__PURE__ */ r.jsx(
  I.Title,
  {
    ref: a,
    className: s("text-sm font-semibold", e),
    ...t
  }
));
It.displayName = I.Title.displayName;
const Et = n.forwardRef(({ className: e, ...t }, a) => /* @__PURE__ */ r.jsx(
  I.Description,
  {
    ref: a,
    className: s("text-sm opacity-90", e),
    ...t
  }
));
Et.displayName = I.Description.displayName;
const zo = 1, Lo = 1e6;
let Te = 0;
function Vo() {
  return Te = (Te + 1) % Number.MAX_VALUE, Te.toString();
}
const Se = /* @__PURE__ */ new Map(), ct = (e) => {
  if (Se.has(e))
    return;
  const t = setTimeout(() => {
    Se.delete(e), ee({
      type: "REMOVE_TOAST",
      toastId: e
    });
  }, Lo);
  Se.set(e, t);
}, Go = (e, t) => {
  switch (t.type) {
    case "ADD_TOAST":
      return {
        ...e,
        toasts: [t.toast, ...e.toasts].slice(0, zo)
      };
    case "UPDATE_TOAST":
      return {
        ...e,
        toasts: e.toasts.map(
          (a) => a.id === t.toast.id ? { ...a, ...t.toast } : a
        )
      };
    case "DISMISS_TOAST": {
      const { toastId: a } = t;
      return a ? ct(a) : e.toasts.forEach((i) => {
        ct(i.id);
      }), {
        ...e,
        toasts: e.toasts.map(
          (i) => i.id === a || a === void 0 ? {
            ...i,
            open: !1
          } : i
        )
      };
    }
    case "REMOVE_TOAST":
      return t.toastId === void 0 ? {
        ...e,
        toasts: []
      } : {
        ...e,
        toasts: e.toasts.filter((a) => a.id !== t.toastId)
      };
  }
}, me = [];
let pe = { toasts: [] };
function ee(e) {
  pe = Go(pe, e), me.forEach((t) => {
    t(pe);
  });
}
function $o({ ...e }) {
  const t = Vo(), a = (c) => ee({
    type: "UPDATE_TOAST",
    toast: { ...c, id: t }
  }), i = () => ee({ type: "DISMISS_TOAST", toastId: t });
  return ee({
    type: "ADD_TOAST",
    toast: {
      ...e,
      id: t,
      open: !0,
      onOpenChange: (c) => {
        c || i();
      }
    }
  }), {
    id: t,
    dismiss: i,
    update: a
  };
}
function Bo() {
  const [e, t] = n.useState(pe);
  return n.useEffect(() => (me.push(t), () => {
    const a = me.indexOf(t);
    a > -1 && me.splice(a, 1);
  }), [e]), {
    ...e,
    toast: $o,
    dismiss: (a) => ee({ type: "DISMISS_TOAST", toastId: a })
  };
}
function rn() {
  const { toasts: e } = Bo();
  return /* @__PURE__ */ r.jsxs(Mo, { children: [
    e.map(function({ id: t, title: a, description: i, action: c, ...h }) {
      return /* @__PURE__ */ r.jsxs(kt, { ...h, children: [
        /* @__PURE__ */ r.jsxs("div", { className: "grid gap-1", children: [
          a && /* @__PURE__ */ r.jsx(It, { children: a }),
          i && /* @__PURE__ */ r.jsx(Et, { children: i })
        ] }),
        c,
        /* @__PURE__ */ r.jsx(Pt, {})
      ] }, t);
    }),
    /* @__PURE__ */ r.jsx(_t, {})
  ] });
}
const Wo = F(
  "inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors hover:bg-muted hover:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=on]:bg-accent data-[state=on]:text-accent-foreground",
  {
    variants: {
      variant: {
        default: "bg-transparent",
        outline: "border border-input bg-transparent hover:bg-accent hover:text-accent-foreground"
      },
      size: {
        default: "h-10 px-3",
        sm: "h-9 px-2.5",
        lg: "h-11 px-5"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
), Yo = n.forwardRef(({ className: e, variant: t, size: a, ...i }, c) => /* @__PURE__ */ r.jsx(
  pt.Root,
  {
    ref: c,
    className: s(Wo({ variant: t, size: a, className: e })),
    ...i
  }
));
Yo.displayName = pt.Root.displayName;
const on = ne.Provider, sn = ne.Root, nn = ne.Trigger, Ho = n.forwardRef(({ className: e, sideOffset: t = 4, ...a }, i) => /* @__PURE__ */ r.jsx(
  ne.Content,
  {
    ref: i,
    sideOffset: t,
    className: s(
      "z-50 overflow-hidden rounded-md border bg-popover px-3 py-1.5 text-sm text-popover-foreground shadow-md animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      e
    ),
    ...a
  }
));
Ho.displayName = ne.Content.displayName;
const dn = ({
  className: e,
  ...t
}) => /* @__PURE__ */ r.jsx(
  Ae.PanelGroup,
  {
    className: s(
      "flex h-full w-full data-[panel-group-direction=vertical]:flex-col",
      e
    ),
    ...t
  }
), ln = Ae.Panel, cn = ({
  withHandle: e,
  className: t,
  ...a
}) => /* @__PURE__ */ r.jsx(
  Ae.PanelResizeHandle,
  {
    className: s(
      "relative flex w-px items-center justify-center bg-border after:absolute after:inset-y-0 after:left-1/2 after:w-1 after:-translate-x-1/2 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring focus-visible:ring-offset-1 data-[panel-group-direction=vertical]:h-px data-[panel-group-direction=vertical]:w-full data-[panel-group-direction=vertical]:after:left-0 data-[panel-group-direction=vertical]:after:h-1 data-[panel-group-direction=vertical]:after:w-full data-[panel-group-direction=vertical]:after:-translate-y-1/2 data-[panel-group-direction=vertical]:after:translate-x-0 [&[data-panel-group-direction=vertical]>div]:rotate-90",
      t
    ),
    ...a,
    children: e && /* @__PURE__ */ r.jsx("div", { className: "z-10 flex h-4 w-3 items-center justify-center rounded-sm border bg-border", children: /* @__PURE__ */ r.jsx(xa, { className: "h-2.5 w-2.5" }) })
  }
), Uo = n.forwardRef(({ className: e, ...t }, a) => /* @__PURE__ */ r.jsx(
  Ta,
  {
    ref: a,
    containerClassName: s("flex items-center gap-2", e),
    ...t
  }
));
Uo.displayName = "InputOTP";
const qo = n.forwardRef(({ className: e, ...t }, a) => /* @__PURE__ */ r.jsx("div", { ref: a, className: s("flex items-center", e), ...t }));
qo.displayName = "InputOTPGroup";
const Jo = n.forwardRef(({ char: e, hasFakeCaret: t, isActive: a, className: i, ...c }, h) => /* @__PURE__ */ r.jsxs(
  "div",
  {
    ref: h,
    className: s(
      "relative flex h-10 w-10 items-center justify-center border-y border-r border-input text-sm transition-all first:rounded-l-md first:border-l last:rounded-r-md",
      a && "z-10 ring-2 ring-offset-background ring-ring",
      i
    ),
    ...c,
    children: [
      e,
      t && /* @__PURE__ */ r.jsx("div", { className: "pointer-events-none absolute inset-0 flex items-center justify-center", children: /* @__PURE__ */ r.jsx("div", { className: "animate-caret-blink h-4 w-px bg-foreground duration-1000" }) })
    ]
  }
));
Jo.displayName = "InputOTPSlot";
const Xo = n.forwardRef(({ ...e }, t) => /* @__PURE__ */ r.jsx("div", { ref: t, role: "separator", ...e, children: /* @__PURE__ */ r.jsx(ba, {}) }));
Xo.displayName = "InputOTPSeparator";
const Ko = n.forwardRef(({ ...e }, t) => /* @__PURE__ */ r.jsx("nav", { ref: t, "aria-label": "breadcrumb", ...e }));
Ko.displayName = "Breadcrumb";
const Qo = n.forwardRef(({ className: e, ...t }, a) => /* @__PURE__ */ r.jsx(
  "ol",
  {
    ref: a,
    className: s(
      "flex flex-wrap items-center gap-1.5 break-words text-sm text-muted-foreground sm:gap-2.5",
      e
    ),
    ...t
  }
));
Qo.displayName = "BreadcrumbList";
const Zo = n.forwardRef(({ className: e, ...t }, a) => /* @__PURE__ */ r.jsx(
  "li",
  {
    ref: a,
    className: s("inline-flex items-center gap-1.5", e),
    ...t
  }
));
Zo.displayName = "BreadcrumbItem";
const es = n.forwardRef(({ asChild: e, className: t, ...a }, i) => {
  const c = e ? Oe : "a";
  return /* @__PURE__ */ r.jsx(
    c,
    {
      ref: i,
      className: s("transition-colors hover:text-foreground", t),
      ...a
    }
  );
});
es.displayName = "BreadcrumbLink";
const ts = n.forwardRef(({ className: e, ...t }, a) => /* @__PURE__ */ r.jsx(
  "span",
  {
    ref: a,
    role: "link",
    "aria-disabled": "true",
    "aria-current": "page",
    className: s("font-normal text-foreground", e),
    ...t
  }
));
ts.displayName = "BreadcrumbPage";
const as = ({
  children: e,
  className: t,
  ...a
}) => /* @__PURE__ */ r.jsx(
  "li",
  {
    role: "presentation",
    "aria-hidden": "true",
    className: s("[&>svg]:size-3.5", t),
    ...a,
    children: e || /* @__PURE__ */ r.jsx(oe, {})
  }
);
as.displayName = "BreadcrumbSeparator";
const rs = ({
  className: e,
  ...t
}) => /* @__PURE__ */ r.jsxs(
  "span",
  {
    role: "presentation",
    "aria-hidden": "true",
    className: s("flex h-9 w-9 items-center justify-center", e),
    ...t,
    children: [
      /* @__PURE__ */ r.jsx(va, { className: "h-4 w-4" }),
      /* @__PURE__ */ r.jsx("span", { className: "sr-only", children: "More" })
    ]
  }
);
rs.displayName = "BreadcrumbElipssis";
export {
  ps as Accordion,
  Ia as AccordionContent,
  ka as AccordionItem,
  Pa as AccordionTrigger,
  Ga as Alert,
  Ba as AlertDescription,
  gs as AlertDialog,
  za as AlertDialogAction,
  La as AlertDialogCancel,
  Da as AlertDialogContent,
  Fa as AlertDialogDescription,
  Ma as AlertDialogFooter,
  Oa as AlertDialogHeader,
  Aa as AlertDialogTitle,
  xs as AlertDialogTrigger,
  $a as AlertTitle,
  bs as AspectRatio,
  Wa as Avatar,
  Ha as AvatarFallback,
  Ya as AvatarImage,
  vs as Badge,
  Ko as Breadcrumb,
  rs as BreadcrumbEllipsis,
  Zo as BreadcrumbItem,
  es as BreadcrumbLink,
  Qo as BreadcrumbList,
  ts as BreadcrumbPage,
  as as BreadcrumbSeparator,
  Ea as Button,
  qa as Calendar,
  Ja as Card,
  Za as CardContent,
  Qa as CardDescription,
  er as CardFooter,
  Xa as CardHeader,
  Ka as CardTitle,
  tr as Checkbox,
  ys as Collapsible,
  Ns as CollapsibleContent,
  hs as CollapsibleTrigger,
  ht as Command,
  js as CommandDialog,
  lr as CommandEmpty,
  cr as CommandGroup,
  ir as CommandInput,
  fr as CommandItem,
  dr as CommandList,
  ur as CommandSeparator,
  mr as CommandShortcut,
  Rs as ContextMenu,
  vr as ContextMenuCheckboxItem,
  xr as ContextMenuContent,
  Ts as ContextMenuGroup,
  br as ContextMenuItem,
  hr as ContextMenuLabel,
  Ss as ContextMenuPortal,
  ks as ContextMenuRadioGroup,
  yr as ContextMenuRadioItem,
  Nr as ContextMenuSeparator,
  wr as ContextMenuShortcut,
  _s as ContextMenuSub,
  gr as ContextMenuSubContent,
  pr as ContextMenuSubTrigger,
  Cs as ContextMenuTrigger,
  ar as Dialog,
  yt as DialogContent,
  nr as DialogDescription,
  or as DialogFooter,
  rr as DialogHeader,
  sr as DialogTitle,
  ws as DialogTrigger,
  Ps as DropdownMenu,
  Sr as DropdownMenuCheckboxItem,
  Cr as DropdownMenuContent,
  Es as DropdownMenuGroup,
  Tr as DropdownMenuItem,
  kr as DropdownMenuLabel,
  Ds as DropdownMenuPortal,
  Ms as DropdownMenuRadioGroup,
  _r as DropdownMenuRadioItem,
  Pr as DropdownMenuSeparator,
  Ir as DropdownMenuShortcut,
  Os as DropdownMenuSub,
  Rr as DropdownMenuSubContent,
  jr as DropdownMenuSubTrigger,
  Is as DropdownMenuTrigger,
  As as Form,
  Mr as FormControl,
  Ar as FormDescription,
  Fs as FormField,
  Dr as FormItem,
  Or as FormLabel,
  Fr as FormMessage,
  zs as HoverCard,
  zr as HoverCardContent,
  Ls as HoverCardTrigger,
  Lr as Input,
  Uo as InputOTP,
  qo as InputOTPGroup,
  Xo as InputOTPSeparator,
  Jo as InputOTPSlot,
  Nt as Label,
  Vr as Menubar,
  Hr as MenubarCheckboxItem,
  Wr as MenubarContent,
  Gs as MenubarGroup,
  Yr as MenubarItem,
  qr as MenubarLabel,
  Vs as MenubarMenu,
  $s as MenubarPortal,
  Ws as MenubarRadioGroup,
  Ur as MenubarRadioItem,
  Jr as MenubarSeparator,
  Xr as MenubarShortcut,
  Bs as MenubarSub,
  Br as MenubarSubContent,
  $r as MenubarSubTrigger,
  Gr as MenubarTrigger,
  Kr as NavigationMenu,
  to as NavigationMenuContent,
  ao as NavigationMenuIndicator,
  Ys as NavigationMenuItem,
  Hs as NavigationMenuLink,
  Qr as NavigationMenuList,
  eo as NavigationMenuTrigger,
  Rt as NavigationMenuViewport,
  Us as Popover,
  ro as PopoverContent,
  qs as PopoverTrigger,
  oo as Progress,
  so as RadioGroup,
  no as RadioGroupItem,
  cn as ResizableHandle,
  ln as ResizablePanel,
  dn as ResizablePanelGroup,
  io as ScrollArea,
  Ct as ScrollBar,
  Js as Select,
  co as SelectContent,
  Xs as SelectGroup,
  fo as SelectItem,
  uo as SelectLabel,
  mo as SelectSeparator,
  lo as SelectTrigger,
  Ks as SelectValue,
  po as Separator,
  Qs as Sheet,
  en as SheetClose,
  xo as SheetContent,
  ho as SheetDescription,
  vo as SheetFooter,
  bo as SheetHeader,
  yo as SheetTitle,
  Zs as SheetTrigger,
  tn as Skeleton,
  No as Slider,
  wo as Switch,
  jo as Table,
  Co as TableBody,
  Po as TableCaption,
  ko as TableCell,
  To as TableFooter,
  _o as TableHead,
  Ro as TableHeader,
  So as TableRow,
  an as Tabs,
  Do as TabsContent,
  Io as TabsList,
  Eo as TabsTrigger,
  Oo as Textarea,
  kt as Toast,
  Fo as ToastAction,
  Pt as ToastClose,
  Et as ToastDescription,
  Mo as ToastProvider,
  It as ToastTitle,
  _t as ToastViewport,
  rn as Toaster,
  Yo as Toggle,
  sn as Tooltip,
  Ho as TooltipContent,
  on as TooltipProvider,
  nn as TooltipTrigger,
  Ua as badgeVariants,
  re as buttonVariants,
  s as cn,
  Zr as navigationMenuTriggerStyle,
  Go as reducer,
  $o as toast,
  Wo as toggleVariants,
  be as useFormField,
  Bo as useToast
};
