import * as n from "react";
import vt from "react";
import * as Y from "@radix-ui/react-accordion";
import { ChevronDown as Fe, ChevronLeft as yt, ChevronRight as Q, Check as ce, X as Le, Search as Ca, Circle as ye, GripVertical as Ta, Dot as Sa, MoreHorizontal as ht, ArrowLeft as Pa, ArrowRight as ka } from "lucide-react";
import { clsx as _a } from "clsx";
import { twMerge as Ia } from "tailwind-merge";
import * as P from "@radix-ui/react-alert-dialog";
import { Slot as Ve } from "@radix-ui/react-slot";
import { cva as B } from "class-variance-authority";
import * as Da from "@radix-ui/react-aspect-ratio";
import * as Z from "@radix-ui/react-avatar";
import { DayPicker as Ea } from "react-day-picker";
import * as Oe from "@radix-ui/react-checkbox";
import * as Ge from "@radix-ui/react-collapsible";
import { Command as I } from "cmdk";
import * as y from "@radix-ui/react-dialog";
import * as h from "@radix-ui/react-context-menu";
import * as N from "@radix-ui/react-dropdown-menu";
import { FormProvider as Oa, Controller as Ma, useFormContext as Aa } from "react-hook-form";
import * as Nt from "@radix-ui/react-label";
import * as he from "@radix-ui/react-hover-card";
import * as x from "@radix-ui/react-menubar";
import * as D from "@radix-ui/react-navigation-menu";
import * as le from "@radix-ui/react-popover";
import * as Me from "@radix-ui/react-progress";
import * as de from "@radix-ui/react-radio-group";
import * as W from "@radix-ui/react-scroll-area";
import * as T from "@radix-ui/react-select";
import * as wt from "@radix-ui/react-separator";
import * as ne from "@radix-ui/react-slider";
import * as Ae from "@radix-ui/react-switch";
import * as U from "@radix-ui/react-tabs";
import * as O from "@radix-ui/react-toast";
import * as jt from "@radix-ui/react-toggle";
import * as ue from "@radix-ui/react-tooltip";
import * as $e from "react-resizable-panels";
import { OTPInput as za } from "input-otp";
import * as Ne from "@radix-ui/react-toggle-group";
import { useTheme as Fa } from "next-themes";
import { Toaster as La } from "sonner";
import { Drawer as z } from "vaul";
import Va from "embla-carousel-react";
var ze = { exports: {} }, oe = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var gt;
function Ga() {
  if (gt)
    return oe;
  gt = 1;
  var e = vt, t = Symbol.for("react.element"), a = Symbol.for("react.fragment"), i = Object.prototype.hasOwnProperty, c = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, p = { key: !0, ref: !0, __self: !0, __source: !0 };
  function C(E, S, b) {
    var k, A = {}, F = null, q = null;
    b !== void 0 && (F = "" + b), S.key !== void 0 && (F = "" + S.key), S.ref !== void 0 && (q = S.ref);
    for (k in S)
      i.call(S, k) && !p.hasOwnProperty(k) && (A[k] = S[k]);
    if (E && E.defaultProps)
      for (k in S = E.defaultProps, S)
        A[k] === void 0 && (A[k] = S[k]);
    return { $$typeof: t, type: E, key: F, ref: q, props: A, _owner: c.current };
  }
  return oe.Fragment = a, oe.jsx = C, oe.jsxs = C, oe;
}
var se = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var xt;
function $a() {
  return xt || (xt = 1, process.env.NODE_ENV !== "production" && function() {
    var e = vt, t = Symbol.for("react.element"), a = Symbol.for("react.portal"), i = Symbol.for("react.fragment"), c = Symbol.for("react.strict_mode"), p = Symbol.for("react.profiler"), C = Symbol.for("react.provider"), E = Symbol.for("react.context"), S = Symbol.for("react.forward_ref"), b = Symbol.for("react.suspense"), k = Symbol.for("react.suspense_list"), A = Symbol.for("react.memo"), F = Symbol.for("react.lazy"), q = Symbol.for("react.offscreen"), G = Symbol.iterator, ee = "@@iterator";
    function te(o) {
      if (o === null || typeof o != "object")
        return null;
      var l = G && o[G] || o[ee];
      return typeof l == "function" ? l : null;
    }
    var $ = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function w(o) {
      {
        for (var l = arguments.length, d = new Array(l > 1 ? l - 1 : 0), u = 1; u < l; u++)
          d[u - 1] = arguments[u];
        Yt("error", o, d);
      }
    }
    function Yt(o, l, d) {
      {
        var u = $.ReactDebugCurrentFrame, g = u.getStackAddendum();
        g !== "" && (l += "%s", d = d.concat([g]));
        var v = d.map(function(m) {
          return String(m);
        });
        v.unshift("Warning: " + l), Function.prototype.apply.call(console[o], console, v);
      }
    }
    var Ut = !1, qt = !1, Jt = !1, Kt = !1, Xt = !1, We;
    We = Symbol.for("react.module.reference");
    function Qt(o) {
      return !!(typeof o == "string" || typeof o == "function" || o === i || o === p || Xt || o === c || o === b || o === k || Kt || o === q || Ut || qt || Jt || typeof o == "object" && o !== null && (o.$$typeof === F || o.$$typeof === A || o.$$typeof === C || o.$$typeof === E || o.$$typeof === S || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      o.$$typeof === We || o.getModuleId !== void 0));
    }
    function Zt(o, l, d) {
      var u = o.displayName;
      if (u)
        return u;
      var g = l.displayName || l.name || "";
      return g !== "" ? d + "(" + g + ")" : d;
    }
    function Ye(o) {
      return o.displayName || "Context";
    }
    function L(o) {
      if (o == null)
        return null;
      if (typeof o.tag == "number" && w("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof o == "function")
        return o.displayName || o.name || null;
      if (typeof o == "string")
        return o;
      switch (o) {
        case i:
          return "Fragment";
        case a:
          return "Portal";
        case p:
          return "Profiler";
        case c:
          return "StrictMode";
        case b:
          return "Suspense";
        case k:
          return "SuspenseList";
      }
      if (typeof o == "object")
        switch (o.$$typeof) {
          case E:
            var l = o;
            return Ye(l) + ".Consumer";
          case C:
            var d = o;
            return Ye(d._context) + ".Provider";
          case S:
            return Zt(o, o.render, "ForwardRef");
          case A:
            var u = o.displayName || null;
            return u !== null ? u : L(o.type) || "Memo";
          case F: {
            var g = o, v = g._payload, m = g._init;
            try {
              return L(m(v));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var H = Object.assign, ae = 0, Ue, qe, Je, Ke, Xe, Qe, Ze;
    function et() {
    }
    et.__reactDisabledLog = !0;
    function ea() {
      {
        if (ae === 0) {
          Ue = console.log, qe = console.info, Je = console.warn, Ke = console.error, Xe = console.group, Qe = console.groupCollapsed, Ze = console.groupEnd;
          var o = {
            configurable: !0,
            enumerable: !0,
            value: et,
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
        ae++;
      }
    }
    function ta() {
      {
        if (ae--, ae === 0) {
          var o = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: H({}, o, {
              value: Ue
            }),
            info: H({}, o, {
              value: qe
            }),
            warn: H({}, o, {
              value: Je
            }),
            error: H({}, o, {
              value: Ke
            }),
            group: H({}, o, {
              value: Xe
            }),
            groupCollapsed: H({}, o, {
              value: Qe
            }),
            groupEnd: H({}, o, {
              value: Ze
            })
          });
        }
        ae < 0 && w("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var Re = $.ReactCurrentDispatcher, Ce;
    function fe(o, l, d) {
      {
        if (Ce === void 0)
          try {
            throw Error();
          } catch (g) {
            var u = g.stack.trim().match(/\n( *(at )?)/);
            Ce = u && u[1] || "";
          }
        return `
` + Ce + o;
      }
    }
    var Te = !1, me;
    {
      var aa = typeof WeakMap == "function" ? WeakMap : Map;
      me = new aa();
    }
    function tt(o, l) {
      if (!o || Te)
        return "";
      {
        var d = me.get(o);
        if (d !== void 0)
          return d;
      }
      var u;
      Te = !0;
      var g = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var v;
      v = Re.current, Re.current = null, ea();
      try {
        if (l) {
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
            } catch (V) {
              u = V;
            }
            Reflect.construct(o, [], m);
          } else {
            try {
              m.call();
            } catch (V) {
              u = V;
            }
            o.call(m.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (V) {
            u = V;
          }
          o();
        }
      } catch (V) {
        if (V && u && typeof V.stack == "string") {
          for (var f = V.stack.split(`
`), _ = u.stack.split(`
`), j = f.length - 1, R = _.length - 1; j >= 1 && R >= 0 && f[j] !== _[R]; )
            R--;
          for (; j >= 1 && R >= 0; j--, R--)
            if (f[j] !== _[R]) {
              if (j !== 1 || R !== 1)
                do
                  if (j--, R--, R < 0 || f[j] !== _[R]) {
                    var M = `
` + f[j].replace(" at new ", " at ");
                    return o.displayName && M.includes("<anonymous>") && (M = M.replace("<anonymous>", o.displayName)), typeof o == "function" && me.set(o, M), M;
                  }
                while (j >= 1 && R >= 0);
              break;
            }
        }
      } finally {
        Te = !1, Re.current = v, ta(), Error.prepareStackTrace = g;
      }
      var K = o ? o.displayName || o.name : "", pt = K ? fe(K) : "";
      return typeof o == "function" && me.set(o, pt), pt;
    }
    function ra(o, l, d) {
      return tt(o, !1);
    }
    function oa(o) {
      var l = o.prototype;
      return !!(l && l.isReactComponent);
    }
    function pe(o, l, d) {
      if (o == null)
        return "";
      if (typeof o == "function")
        return tt(o, oa(o));
      if (typeof o == "string")
        return fe(o);
      switch (o) {
        case b:
          return fe("Suspense");
        case k:
          return fe("SuspenseList");
      }
      if (typeof o == "object")
        switch (o.$$typeof) {
          case S:
            return ra(o.render);
          case A:
            return pe(o.type, l, d);
          case F: {
            var u = o, g = u._payload, v = u._init;
            try {
              return pe(v(g), l, d);
            } catch {
            }
          }
        }
      return "";
    }
    var ge = Object.prototype.hasOwnProperty, at = {}, rt = $.ReactDebugCurrentFrame;
    function xe(o) {
      if (o) {
        var l = o._owner, d = pe(o.type, o._source, l ? l.type : null);
        rt.setExtraStackFrame(d);
      } else
        rt.setExtraStackFrame(null);
    }
    function sa(o, l, d, u, g) {
      {
        var v = Function.call.bind(ge);
        for (var m in o)
          if (v(o, m)) {
            var f = void 0;
            try {
              if (typeof o[m] != "function") {
                var _ = Error((u || "React class") + ": " + d + " type `" + m + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof o[m] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw _.name = "Invariant Violation", _;
              }
              f = o[m](l, m, u, d, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (j) {
              f = j;
            }
            f && !(f instanceof Error) && (xe(g), w("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", u || "React class", d, m, typeof f), xe(null)), f instanceof Error && !(f.message in at) && (at[f.message] = !0, xe(g), w("Failed %s type: %s", d, f.message), xe(null));
          }
      }
    }
    var na = Array.isArray;
    function Se(o) {
      return na(o);
    }
    function ia(o) {
      {
        var l = typeof Symbol == "function" && Symbol.toStringTag, d = l && o[Symbol.toStringTag] || o.constructor.name || "Object";
        return d;
      }
    }
    function la(o) {
      try {
        return ot(o), !1;
      } catch {
        return !0;
      }
    }
    function ot(o) {
      return "" + o;
    }
    function st(o) {
      if (la(o))
        return w("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", ia(o)), ot(o);
    }
    var re = $.ReactCurrentOwner, da = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, nt, it, Pe;
    Pe = {};
    function ca(o) {
      if (ge.call(o, "ref")) {
        var l = Object.getOwnPropertyDescriptor(o, "ref").get;
        if (l && l.isReactWarning)
          return !1;
      }
      return o.ref !== void 0;
    }
    function ua(o) {
      if (ge.call(o, "key")) {
        var l = Object.getOwnPropertyDescriptor(o, "key").get;
        if (l && l.isReactWarning)
          return !1;
      }
      return o.key !== void 0;
    }
    function fa(o, l) {
      if (typeof o.ref == "string" && re.current && l && re.current.stateNode !== l) {
        var d = L(re.current.type);
        Pe[d] || (w('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', L(re.current.type), o.ref), Pe[d] = !0);
      }
    }
    function ma(o, l) {
      {
        var d = function() {
          nt || (nt = !0, w("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", l));
        };
        d.isReactWarning = !0, Object.defineProperty(o, "key", {
          get: d,
          configurable: !0
        });
      }
    }
    function pa(o, l) {
      {
        var d = function() {
          it || (it = !0, w("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", l));
        };
        d.isReactWarning = !0, Object.defineProperty(o, "ref", {
          get: d,
          configurable: !0
        });
      }
    }
    var ga = function(o, l, d, u, g, v, m) {
      var f = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: t,
        // Built-in properties that belong on the element
        type: o,
        key: l,
        ref: d,
        props: m,
        // Record the component responsible for creating this element.
        _owner: v
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
        value: g
      }), Object.freeze && (Object.freeze(f.props), Object.freeze(f)), f;
    };
    function xa(o, l, d, u, g) {
      {
        var v, m = {}, f = null, _ = null;
        d !== void 0 && (st(d), f = "" + d), ua(l) && (st(l.key), f = "" + l.key), ca(l) && (_ = l.ref, fa(l, g));
        for (v in l)
          ge.call(l, v) && !da.hasOwnProperty(v) && (m[v] = l[v]);
        if (o && o.defaultProps) {
          var j = o.defaultProps;
          for (v in j)
            m[v] === void 0 && (m[v] = j[v]);
        }
        if (f || _) {
          var R = typeof o == "function" ? o.displayName || o.name || "Unknown" : o;
          f && ma(m, R), _ && pa(m, R);
        }
        return ga(o, f, _, g, u, re.current, m);
      }
    }
    var ke = $.ReactCurrentOwner, lt = $.ReactDebugCurrentFrame;
    function J(o) {
      if (o) {
        var l = o._owner, d = pe(o.type, o._source, l ? l.type : null);
        lt.setExtraStackFrame(d);
      } else
        lt.setExtraStackFrame(null);
    }
    var _e;
    _e = !1;
    function Ie(o) {
      return typeof o == "object" && o !== null && o.$$typeof === t;
    }
    function dt() {
      {
        if (ke.current) {
          var o = L(ke.current.type);
          if (o)
            return `

Check the render method of \`` + o + "`.";
        }
        return "";
      }
    }
    function ba(o) {
      {
        if (o !== void 0) {
          var l = o.fileName.replace(/^.*[\\\/]/, ""), d = o.lineNumber;
          return `

Check your code at ` + l + ":" + d + ".";
        }
        return "";
      }
    }
    var ct = {};
    function va(o) {
      {
        var l = dt();
        if (!l) {
          var d = typeof o == "string" ? o : o.displayName || o.name;
          d && (l = `

Check the top-level render call using <` + d + ">.");
        }
        return l;
      }
    }
    function ut(o, l) {
      {
        if (!o._store || o._store.validated || o.key != null)
          return;
        o._store.validated = !0;
        var d = va(l);
        if (ct[d])
          return;
        ct[d] = !0;
        var u = "";
        o && o._owner && o._owner !== ke.current && (u = " It was passed a child from " + L(o._owner.type) + "."), J(o), w('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', d, u), J(null);
      }
    }
    function ft(o, l) {
      {
        if (typeof o != "object")
          return;
        if (Se(o))
          for (var d = 0; d < o.length; d++) {
            var u = o[d];
            Ie(u) && ut(u, l);
          }
        else if (Ie(o))
          o._store && (o._store.validated = !0);
        else if (o) {
          var g = te(o);
          if (typeof g == "function" && g !== o.entries)
            for (var v = g.call(o), m; !(m = v.next()).done; )
              Ie(m.value) && ut(m.value, l);
        }
      }
    }
    function ya(o) {
      {
        var l = o.type;
        if (l == null || typeof l == "string")
          return;
        var d;
        if (typeof l == "function")
          d = l.propTypes;
        else if (typeof l == "object" && (l.$$typeof === S || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        l.$$typeof === A))
          d = l.propTypes;
        else
          return;
        if (d) {
          var u = L(l);
          sa(d, o.props, "prop", u, o);
        } else if (l.PropTypes !== void 0 && !_e) {
          _e = !0;
          var g = L(l);
          w("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", g || "Unknown");
        }
        typeof l.getDefaultProps == "function" && !l.getDefaultProps.isReactClassApproved && w("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function ha(o) {
      {
        for (var l = Object.keys(o.props), d = 0; d < l.length; d++) {
          var u = l[d];
          if (u !== "children" && u !== "key") {
            J(o), w("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", u), J(null);
            break;
          }
        }
        o.ref !== null && (J(o), w("Invalid attribute `ref` supplied to `React.Fragment`."), J(null));
      }
    }
    function mt(o, l, d, u, g, v) {
      {
        var m = Qt(o);
        if (!m) {
          var f = "";
          (o === void 0 || typeof o == "object" && o !== null && Object.keys(o).length === 0) && (f += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var _ = ba(g);
          _ ? f += _ : f += dt();
          var j;
          o === null ? j = "null" : Se(o) ? j = "array" : o !== void 0 && o.$$typeof === t ? (j = "<" + (L(o.type) || "Unknown") + " />", f = " Did you accidentally export a JSX literal instead of a component?") : j = typeof o, w("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", j, f);
        }
        var R = xa(o, l, d, g, v);
        if (R == null)
          return R;
        if (m) {
          var M = l.children;
          if (M !== void 0)
            if (u)
              if (Se(M)) {
                for (var K = 0; K < M.length; K++)
                  ft(M[K], o);
                Object.freeze && Object.freeze(M);
              } else
                w("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              ft(M, o);
        }
        return o === i ? ha(R) : ya(R), R;
      }
    }
    function Na(o, l, d) {
      return mt(o, l, d, !0);
    }
    function wa(o, l, d) {
      return mt(o, l, d, !1);
    }
    var ja = wa, Ra = Na;
    se.Fragment = i, se.jsx = ja, se.jsxs = Ra;
  }()), se;
}
process.env.NODE_ENV === "production" ? ze.exports = Ga() : ze.exports = $a();
var r = ze.exports;
function s(...e) {
  return Ia(_a(e));
}
const Ks = Y.Root, Ba = n.forwardRef(({ className: e, ...t }, a) => /* @__PURE__ */ r.jsx(
  Y.Item,
  {
    ref: a,
    className: s("border-b", e),
    ...t
  }
));
Ba.displayName = "AccordionItem";
const Ha = n.forwardRef(({ className: e, children: t, ...a }, i) => /* @__PURE__ */ r.jsx(Y.Header, { className: "flex", children: /* @__PURE__ */ r.jsxs(
  Y.Trigger,
  {
    ref: i,
    className: s(
      "flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180",
      e
    ),
    ...a,
    children: [
      t,
      /* @__PURE__ */ r.jsx(Fe, { className: "h-4 w-4 shrink-0 transition-transform duration-200" })
    ]
  }
) }));
Ha.displayName = Y.Trigger.displayName;
const Wa = n.forwardRef(({ className: e, children: t, ...a }, i) => /* @__PURE__ */ r.jsx(
  Y.Content,
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
Wa.displayName = Y.Content.displayName;
const X = B(
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
), Be = n.forwardRef(
  ({ className: e, variant: t, size: a, asChild: i = !1, ...c }, p) => {
    const C = i ? Ve : "button";
    return /* @__PURE__ */ r.jsx(
      C,
      {
        className: s(X({ variant: t, size: a, className: e })),
        ref: p,
        ...c
      }
    );
  }
);
Be.displayName = "Button";
const Xs = P.Root, Qs = P.Trigger, Rt = ({
  ...e
}) => /* @__PURE__ */ r.jsx(P.Portal, { ...e });
Rt.displayName = P.Portal.displayName;
const Ct = n.forwardRef(({ className: e, ...t }, a) => /* @__PURE__ */ r.jsx(
  P.Overlay,
  {
    className: s(
      "fixed inset-0 z-50 bg-background/80 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      e
    ),
    ...t,
    ref: a
  }
));
Ct.displayName = P.Overlay.displayName;
const Ya = n.forwardRef(({ className: e, ...t }, a) => /* @__PURE__ */ r.jsxs(Rt, { children: [
  /* @__PURE__ */ r.jsx(Ct, {}),
  /* @__PURE__ */ r.jsx(
    P.Content,
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
Ya.displayName = P.Content.displayName;
const Ua = ({
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
Ua.displayName = "AlertDialogHeader";
const qa = ({
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
qa.displayName = "AlertDialogFooter";
const Ja = n.forwardRef(({ className: e, ...t }, a) => /* @__PURE__ */ r.jsx(
  P.Title,
  {
    ref: a,
    className: s("text-lg font-semibold", e),
    ...t
  }
));
Ja.displayName = P.Title.displayName;
const Ka = n.forwardRef(({ className: e, ...t }, a) => /* @__PURE__ */ r.jsx(
  P.Description,
  {
    ref: a,
    className: s("text-sm text-muted-foreground", e),
    ...t
  }
));
Ka.displayName = P.Description.displayName;
const Xa = n.forwardRef(({ className: e, ...t }, a) => /* @__PURE__ */ r.jsx(
  P.Action,
  {
    ref: a,
    className: s(X(), e),
    ...t
  }
));
Xa.displayName = P.Action.displayName;
const Qa = n.forwardRef(({ className: e, ...t }, a) => /* @__PURE__ */ r.jsx(
  P.Cancel,
  {
    ref: a,
    className: s(
      X({ variant: "outline" }),
      "mt-2 sm:mt-0",
      e
    ),
    ...t
  }
));
Qa.displayName = P.Cancel.displayName;
const Za = B(
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
), er = n.forwardRef(({ className: e, variant: t, ...a }, i) => /* @__PURE__ */ r.jsx(
  "div",
  {
    ref: i,
    role: "alert",
    className: s(Za({ variant: t }), e),
    ...a
  }
));
er.displayName = "Alert";
const tr = n.forwardRef(({ className: e, ...t }, a) => /* @__PURE__ */ r.jsx(
  "h5",
  {
    ref: a,
    className: s("mb-1 font-medium leading-none tracking-tight", e),
    ...t
  }
));
tr.displayName = "AlertTitle";
const ar = n.forwardRef(({ className: e, ...t }, a) => /* @__PURE__ */ r.jsx(
  "div",
  {
    ref: a,
    className: s("text-sm [&_p]:leading-relaxed", e),
    ...t
  }
));
ar.displayName = "AlertDescription";
const Zs = Da.Root, rr = n.forwardRef(({ className: e, ...t }, a) => /* @__PURE__ */ r.jsx(
  Z.Root,
  {
    ref: a,
    className: s(
      "relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full",
      e
    ),
    ...t
  }
));
rr.displayName = Z.Root.displayName;
const or = n.forwardRef(({ className: e, ...t }, a) => /* @__PURE__ */ r.jsx(
  Z.Image,
  {
    ref: a,
    className: s("aspect-square h-full w-full", e),
    ...t
  }
));
or.displayName = Z.Image.displayName;
const sr = n.forwardRef(({ className: e, ...t }, a) => /* @__PURE__ */ r.jsx(
  Z.Fallback,
  {
    ref: a,
    className: s(
      "flex h-full w-full items-center justify-center rounded-full bg-muted",
      e
    ),
    ...t
  }
));
sr.displayName = Z.Fallback.displayName;
const nr = B(
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
function en({ className: e, variant: t, ...a }) {
  return /* @__PURE__ */ r.jsx("div", { className: s(nr({ variant: t }), e), ...a });
}
function ir({
  className: e,
  classNames: t,
  showOutsideDays: a = !0,
  ...i
}) {
  return /* @__PURE__ */ r.jsx(
    Ea,
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
          X({ variant: "outline" }),
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
          X({ variant: "ghost" }),
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
        IconLeft: () => /* @__PURE__ */ r.jsx(yt, { className: "h-4 w-4" }),
        IconRight: () => /* @__PURE__ */ r.jsx(Q, { className: "h-4 w-4" })
      },
      ...i
    }
  );
}
ir.displayName = "Calendar";
const lr = n.forwardRef(({ className: e, ...t }, a) => /* @__PURE__ */ r.jsx(
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
lr.displayName = "Card";
const dr = n.forwardRef(({ className: e, ...t }, a) => /* @__PURE__ */ r.jsx(
  "div",
  {
    ref: a,
    className: s("flex flex-col space-y-1.5 p-6", e),
    ...t
  }
));
dr.displayName = "CardHeader";
const cr = n.forwardRef(({ className: e, ...t }, a) => /* @__PURE__ */ r.jsx(
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
cr.displayName = "CardTitle";
const ur = n.forwardRef(({ className: e, ...t }, a) => /* @__PURE__ */ r.jsx(
  "p",
  {
    ref: a,
    className: s("text-sm text-muted-foreground", e),
    ...t
  }
));
ur.displayName = "CardDescription";
const fr = n.forwardRef(({ className: e, ...t }, a) => /* @__PURE__ */ r.jsx("div", { ref: a, className: s("p-6 pt-0", e), ...t }));
fr.displayName = "CardContent";
const mr = n.forwardRef(({ className: e, ...t }, a) => /* @__PURE__ */ r.jsx(
  "div",
  {
    ref: a,
    className: s("flex items-center p-6 pt-0", e),
    ...t
  }
));
mr.displayName = "CardFooter";
const pr = n.forwardRef(({ className: e, ...t }, a) => /* @__PURE__ */ r.jsx(
  Oe.Root,
  {
    ref: a,
    className: s(
      "peer h-4 w-4 shrink-0 rounded-sm border border-primary ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground",
      e
    ),
    ...t,
    children: /* @__PURE__ */ r.jsx(
      Oe.Indicator,
      {
        className: s("flex items-center justify-center text-current"),
        children: /* @__PURE__ */ r.jsx(ce, { className: "h-4 w-4" })
      }
    )
  }
));
pr.displayName = Oe.Root.displayName;
const tn = Ge.Root, an = Ge.CollapsibleTrigger, rn = Ge.CollapsibleContent, gr = y.Root, on = y.Trigger, Tt = ({ ...e }) => /* @__PURE__ */ r.jsx(y.Portal, { ...e });
Tt.displayName = y.Portal.displayName;
const St = n.forwardRef(({ className: e, ...t }, a) => /* @__PURE__ */ r.jsx(
  y.Overlay,
  {
    ref: a,
    className: s(
      "fixed inset-0 z-50 bg-background/80 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      e
    ),
    ...t
  }
));
St.displayName = y.Overlay.displayName;
const Pt = n.forwardRef(({ className: e, children: t, ...a }, i) => /* @__PURE__ */ r.jsxs(Tt, { children: [
  /* @__PURE__ */ r.jsx(St, {}),
  /* @__PURE__ */ r.jsxs(
    y.Content,
    {
      ref: i,
      className: s(
        "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg md:w-full",
        e
      ),
      ...a,
      children: [
        t,
        /* @__PURE__ */ r.jsxs(y.Close, { className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground", children: [
          /* @__PURE__ */ r.jsx(Le, { className: "h-4 w-4" }),
          /* @__PURE__ */ r.jsx("span", { className: "sr-only", children: "Close" })
        ] })
      ]
    }
  )
] }));
Pt.displayName = y.Content.displayName;
const xr = ({
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
xr.displayName = "DialogHeader";
const br = ({
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
br.displayName = "DialogFooter";
const vr = n.forwardRef(({ className: e, ...t }, a) => /* @__PURE__ */ r.jsx(
  y.Title,
  {
    ref: a,
    className: s(
      "text-lg font-semibold leading-none tracking-tight",
      e
    ),
    ...t
  }
));
vr.displayName = y.Title.displayName;
const yr = n.forwardRef(({ className: e, ...t }, a) => /* @__PURE__ */ r.jsx(
  y.Description,
  {
    ref: a,
    className: s("text-sm text-muted-foreground", e),
    ...t
  }
));
yr.displayName = y.Description.displayName;
const kt = n.forwardRef(({ className: e, ...t }, a) => /* @__PURE__ */ r.jsx(
  I,
  {
    ref: a,
    className: s(
      "flex h-full w-full flex-col overflow-hidden rounded-md bg-popover text-popover-foreground",
      e
    ),
    ...t
  }
));
kt.displayName = I.displayName;
const sn = ({ children: e, ...t }) => /* @__PURE__ */ r.jsx(gr, { ...t, children: /* @__PURE__ */ r.jsx(Pt, { className: "overflow-hidden p-0 shadow-lg", children: /* @__PURE__ */ r.jsx(kt, { className: "[&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground [&_[cmdk-group]:not([hidden])_~[cmdk-group]]:pt-0 [&_[cmdk-group]]:px-2 [&_[cmdk-input-wrapper]_svg]:h-5 [&_[cmdk-input-wrapper]_svg]:w-5 [&_[cmdk-input]]:h-12 [&_[cmdk-item]]:px-2 [&_[cmdk-item]]:py-3 [&_[cmdk-item]_svg]:h-5 [&_[cmdk-item]_svg]:w-5", children: e }) }) }), hr = n.forwardRef(({ className: e, ...t }, a) => /* @__PURE__ */ r.jsxs("div", { className: "flex items-center border-b px-3", "cmdk-input-wrapper": "", children: [
  /* @__PURE__ */ r.jsx(Ca, { className: "mr-2 h-4 w-4 shrink-0 opacity-50" }),
  /* @__PURE__ */ r.jsx(
    I.Input,
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
hr.displayName = I.Input.displayName;
const Nr = n.forwardRef(({ className: e, ...t }, a) => /* @__PURE__ */ r.jsx(
  I.List,
  {
    ref: a,
    className: s("max-h-[300px] overflow-y-auto overflow-x-hidden", e),
    ...t
  }
));
Nr.displayName = I.List.displayName;
const wr = n.forwardRef((e, t) => /* @__PURE__ */ r.jsx(
  I.Empty,
  {
    ref: t,
    className: "py-6 text-center text-sm",
    ...e
  }
));
wr.displayName = I.Empty.displayName;
const jr = n.forwardRef(({ className: e, ...t }, a) => /* @__PURE__ */ r.jsx(
  I.Group,
  {
    ref: a,
    className: s(
      "overflow-hidden p-1 text-foreground [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground",
      e
    ),
    ...t
  }
));
jr.displayName = I.Group.displayName;
const Rr = n.forwardRef(({ className: e, ...t }, a) => /* @__PURE__ */ r.jsx(
  I.Separator,
  {
    ref: a,
    className: s("-mx-1 h-px bg-border", e),
    ...t
  }
));
Rr.displayName = I.Separator.displayName;
const Cr = n.forwardRef(({ className: e, ...t }, a) => /* @__PURE__ */ r.jsx(
  I.Item,
  {
    ref: a,
    className: s(
      "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none aria-selected:bg-accent aria-selected:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      e
    ),
    ...t
  }
));
Cr.displayName = I.Item.displayName;
const Tr = ({
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
Tr.displayName = "CommandShortcut";
const nn = h.Root, ln = h.Trigger, dn = h.Group, cn = h.Portal, un = h.Sub, fn = h.RadioGroup, Sr = n.forwardRef(({ className: e, inset: t, children: a, ...i }, c) => /* @__PURE__ */ r.jsxs(
  h.SubTrigger,
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
      /* @__PURE__ */ r.jsx(Q, { className: "ml-auto h-4 w-4" })
    ]
  }
));
Sr.displayName = h.SubTrigger.displayName;
const Pr = n.forwardRef(({ className: e, ...t }, a) => /* @__PURE__ */ r.jsx(
  h.SubContent,
  {
    ref: a,
    className: s(
      "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      e
    ),
    ...t
  }
));
Pr.displayName = h.SubContent.displayName;
const kr = n.forwardRef(({ className: e, ...t }, a) => /* @__PURE__ */ r.jsx(h.Portal, { children: /* @__PURE__ */ r.jsx(
  h.Content,
  {
    ref: a,
    className: s(
      "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md animate-in fade-in-80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      e
    ),
    ...t
  }
) }));
kr.displayName = h.Content.displayName;
const _r = n.forwardRef(({ className: e, inset: t, ...a }, i) => /* @__PURE__ */ r.jsx(
  h.Item,
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
_r.displayName = h.Item.displayName;
const Ir = n.forwardRef(({ className: e, children: t, checked: a, ...i }, c) => /* @__PURE__ */ r.jsxs(
  h.CheckboxItem,
  {
    ref: c,
    className: s(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      e
    ),
    checked: a,
    ...i,
    children: [
      /* @__PURE__ */ r.jsx("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ r.jsx(h.ItemIndicator, { children: /* @__PURE__ */ r.jsx(ce, { className: "h-4 w-4" }) }) }),
      t
    ]
  }
));
Ir.displayName = h.CheckboxItem.displayName;
const Dr = n.forwardRef(({ className: e, children: t, ...a }, i) => /* @__PURE__ */ r.jsxs(
  h.RadioItem,
  {
    ref: i,
    className: s(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      e
    ),
    ...a,
    children: [
      /* @__PURE__ */ r.jsx("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ r.jsx(h.ItemIndicator, { children: /* @__PURE__ */ r.jsx(ye, { className: "h-2 w-2 fill-current" }) }) }),
      t
    ]
  }
));
Dr.displayName = h.RadioItem.displayName;
const Er = n.forwardRef(({ className: e, inset: t, ...a }, i) => /* @__PURE__ */ r.jsx(
  h.Label,
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
Er.displayName = h.Label.displayName;
const Or = n.forwardRef(({ className: e, ...t }, a) => /* @__PURE__ */ r.jsx(
  h.Separator,
  {
    ref: a,
    className: s("-mx-1 my-1 h-px bg-border", e),
    ...t
  }
));
Or.displayName = h.Separator.displayName;
const Mr = ({
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
Mr.displayName = "ContextMenuShortcut";
const mn = N.Root, pn = N.Trigger, gn = N.Group, xn = N.Portal, bn = N.Sub, vn = N.RadioGroup, Ar = n.forwardRef(({ className: e, inset: t, children: a, ...i }, c) => /* @__PURE__ */ r.jsxs(
  N.SubTrigger,
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
      /* @__PURE__ */ r.jsx(Q, { className: "ml-auto h-4 w-4" })
    ]
  }
));
Ar.displayName = N.SubTrigger.displayName;
const zr = n.forwardRef(({ className: e, ...t }, a) => /* @__PURE__ */ r.jsx(
  N.SubContent,
  {
    ref: a,
    className: s(
      "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      e
    ),
    ...t
  }
));
zr.displayName = N.SubContent.displayName;
const Fr = n.forwardRef(({ className: e, sideOffset: t = 4, ...a }, i) => /* @__PURE__ */ r.jsx(N.Portal, { children: /* @__PURE__ */ r.jsx(
  N.Content,
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
Fr.displayName = N.Content.displayName;
const Lr = n.forwardRef(({ className: e, inset: t, ...a }, i) => /* @__PURE__ */ r.jsx(
  N.Item,
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
Lr.displayName = N.Item.displayName;
const Vr = n.forwardRef(({ className: e, children: t, checked: a, ...i }, c) => /* @__PURE__ */ r.jsxs(
  N.CheckboxItem,
  {
    ref: c,
    className: s(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      e
    ),
    checked: a,
    ...i,
    children: [
      /* @__PURE__ */ r.jsx("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ r.jsx(N.ItemIndicator, { children: /* @__PURE__ */ r.jsx(ce, { className: "h-4 w-4" }) }) }),
      t
    ]
  }
));
Vr.displayName = N.CheckboxItem.displayName;
const Gr = n.forwardRef(({ className: e, children: t, ...a }, i) => /* @__PURE__ */ r.jsxs(
  N.RadioItem,
  {
    ref: i,
    className: s(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      e
    ),
    ...a,
    children: [
      /* @__PURE__ */ r.jsx("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ r.jsx(N.ItemIndicator, { children: /* @__PURE__ */ r.jsx(ye, { className: "h-2 w-2 fill-current" }) }) }),
      t
    ]
  }
));
Gr.displayName = N.RadioItem.displayName;
const $r = n.forwardRef(({ className: e, inset: t, ...a }, i) => /* @__PURE__ */ r.jsx(
  N.Label,
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
$r.displayName = N.Label.displayName;
const Br = n.forwardRef(({ className: e, ...t }, a) => /* @__PURE__ */ r.jsx(
  N.Separator,
  {
    ref: a,
    className: s("-mx-1 my-1 h-px bg-muted", e),
    ...t
  }
));
Br.displayName = N.Separator.displayName;
const Hr = ({
  className: e,
  ...t
}) => /* @__PURE__ */ r.jsx(
  "span",
  {
    className: s("ml-auto text-xs tracking-widest opacity-60", e),
    ...t
  }
);
Hr.displayName = "DropdownMenuShortcut";
const Wr = B(
  "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
), _t = n.forwardRef(({ className: e, ...t }, a) => /* @__PURE__ */ r.jsx(
  Nt.Root,
  {
    ref: a,
    className: s(Wr(), e),
    ...t
  }
));
_t.displayName = Nt.Root.displayName;
const yn = Oa, It = n.createContext(
  {}
), hn = ({
  ...e
}) => /* @__PURE__ */ r.jsx(It.Provider, { value: { name: e.name }, children: /* @__PURE__ */ r.jsx(Ma, { ...e }) }), we = () => {
  const e = n.useContext(It), t = n.useContext(Dt), { getFieldState: a, formState: i } = Aa(), c = a(e.name, i);
  if (!e)
    throw new Error("useFormField should be used within <FormField>");
  const { id: p } = t;
  return {
    id: p,
    name: e.name,
    formItemId: `${p}-form-item`,
    formDescriptionId: `${p}-form-item-description`,
    formMessageId: `${p}-form-item-message`,
    ...c
  };
}, Dt = n.createContext(
  {}
), Yr = n.forwardRef(({ className: e, ...t }, a) => {
  const i = n.useId();
  return /* @__PURE__ */ r.jsx(Dt.Provider, { value: { id: i }, children: /* @__PURE__ */ r.jsx("div", { ref: a, className: s("space-y-2", e), ...t }) });
});
Yr.displayName = "FormItem";
const Ur = n.forwardRef(({ className: e, ...t }, a) => {
  const { error: i, formItemId: c } = we();
  return /* @__PURE__ */ r.jsx(
    _t,
    {
      ref: a,
      className: s(i && "text-destructive", e),
      htmlFor: c,
      ...t
    }
  );
});
Ur.displayName = "FormLabel";
const qr = n.forwardRef(({ ...e }, t) => {
  const { error: a, formItemId: i, formDescriptionId: c, formMessageId: p } = we();
  return /* @__PURE__ */ r.jsx(
    Ve,
    {
      ref: t,
      id: i,
      "aria-describedby": a ? `${c} ${p}` : `${c}`,
      "aria-invalid": !!a,
      ...e
    }
  );
});
qr.displayName = "FormControl";
const Jr = n.forwardRef(({ className: e, ...t }, a) => {
  const { formDescriptionId: i } = we();
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
Jr.displayName = "FormDescription";
const Kr = n.forwardRef(({ className: e, children: t, ...a }, i) => {
  const { error: c, formMessageId: p } = we(), C = c ? String(c == null ? void 0 : c.message) : t;
  return C ? /* @__PURE__ */ r.jsx(
    "p",
    {
      ref: i,
      id: p,
      className: s("text-sm font-medium text-destructive", e),
      ...a,
      children: C
    }
  ) : null;
});
Kr.displayName = "FormMessage";
const Nn = he.Root, wn = he.Trigger, Xr = n.forwardRef(({ className: e, align: t = "center", sideOffset: a = 4, ...i }, c) => /* @__PURE__ */ r.jsx(
  he.Content,
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
Xr.displayName = he.Content.displayName;
const Qr = n.forwardRef(
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
Qr.displayName = "Input";
const jn = x.Menu, Rn = x.Group, Cn = x.Portal, Tn = x.Sub, Sn = x.RadioGroup, Zr = n.forwardRef(({ className: e, ...t }, a) => /* @__PURE__ */ r.jsx(
  x.Root,
  {
    ref: a,
    className: s(
      "flex h-10 items-center space-x-1 rounded-md border bg-background p-1",
      e
    ),
    ...t
  }
));
Zr.displayName = x.Root.displayName;
const eo = n.forwardRef(({ className: e, ...t }, a) => /* @__PURE__ */ r.jsx(
  x.Trigger,
  {
    ref: a,
    className: s(
      "flex cursor-default select-none items-center rounded-sm px-3 py-1.5 text-sm font-medium outline-none focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground",
      e
    ),
    ...t
  }
));
eo.displayName = x.Trigger.displayName;
const to = n.forwardRef(({ className: e, inset: t, children: a, ...i }, c) => /* @__PURE__ */ r.jsxs(
  x.SubTrigger,
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
      /* @__PURE__ */ r.jsx(Q, { className: "ml-auto h-4 w-4" })
    ]
  }
));
to.displayName = x.SubTrigger.displayName;
const ao = n.forwardRef(({ className: e, ...t }, a) => /* @__PURE__ */ r.jsx(
  x.SubContent,
  {
    ref: a,
    className: s(
      "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      e
    ),
    ...t
  }
));
ao.displayName = x.SubContent.displayName;
const ro = n.forwardRef(
  ({ className: e, align: t = "start", alignOffset: a = -4, sideOffset: i = 8, ...c }, p) => /* @__PURE__ */ r.jsx(x.Portal, { children: /* @__PURE__ */ r.jsx(
    x.Content,
    {
      ref: p,
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
ro.displayName = x.Content.displayName;
const oo = n.forwardRef(({ className: e, inset: t, ...a }, i) => /* @__PURE__ */ r.jsx(
  x.Item,
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
oo.displayName = x.Item.displayName;
const so = n.forwardRef(({ className: e, children: t, checked: a, ...i }, c) => /* @__PURE__ */ r.jsxs(
  x.CheckboxItem,
  {
    ref: c,
    className: s(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      e
    ),
    checked: a,
    ...i,
    children: [
      /* @__PURE__ */ r.jsx("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ r.jsx(x.ItemIndicator, { children: /* @__PURE__ */ r.jsx(ce, { className: "h-4 w-4" }) }) }),
      t
    ]
  }
));
so.displayName = x.CheckboxItem.displayName;
const no = n.forwardRef(({ className: e, children: t, ...a }, i) => /* @__PURE__ */ r.jsxs(
  x.RadioItem,
  {
    ref: i,
    className: s(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      e
    ),
    ...a,
    children: [
      /* @__PURE__ */ r.jsx("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ r.jsx(x.ItemIndicator, { children: /* @__PURE__ */ r.jsx(ye, { className: "h-2 w-2 fill-current" }) }) }),
      t
    ]
  }
));
no.displayName = x.RadioItem.displayName;
const io = n.forwardRef(({ className: e, inset: t, ...a }, i) => /* @__PURE__ */ r.jsx(
  x.Label,
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
io.displayName = x.Label.displayName;
const lo = n.forwardRef(({ className: e, ...t }, a) => /* @__PURE__ */ r.jsx(
  x.Separator,
  {
    ref: a,
    className: s("-mx-1 my-1 h-px bg-muted", e),
    ...t
  }
));
lo.displayName = x.Separator.displayName;
const co = ({
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
co.displayname = "MenubarShortcut";
const uo = n.forwardRef(({ className: e, children: t, ...a }, i) => /* @__PURE__ */ r.jsxs(
  D.Root,
  {
    ref: i,
    className: s(
      "relative z-10 flex max-w-max flex-1 items-center justify-center",
      e
    ),
    ...a,
    children: [
      t,
      /* @__PURE__ */ r.jsx(Et, {})
    ]
  }
));
uo.displayName = D.Root.displayName;
const fo = n.forwardRef(({ className: e, ...t }, a) => /* @__PURE__ */ r.jsx(
  D.List,
  {
    ref: a,
    className: s(
      "group flex flex-1 list-none items-center justify-center space-x-1",
      e
    ),
    ...t
  }
));
fo.displayName = D.List.displayName;
const Pn = D.Item, mo = B(
  "group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
), po = n.forwardRef(({ className: e, children: t, ...a }, i) => /* @__PURE__ */ r.jsxs(
  D.Trigger,
  {
    ref: i,
    className: s(mo(), "group", e),
    ...a,
    children: [
      t,
      " ",
      /* @__PURE__ */ r.jsx(
        Fe,
        {
          className: "relative top-[1px] ml-1 h-3 w-3 transition duration-200 group-data-[state=open]:rotate-180",
          "aria-hidden": "true"
        }
      )
    ]
  }
));
po.displayName = D.Trigger.displayName;
const go = n.forwardRef(({ className: e, ...t }, a) => /* @__PURE__ */ r.jsx(
  D.Content,
  {
    ref: a,
    className: s(
      "left-0 top-0 w-full data-[motion^=from-]:animate-in data-[motion^=to-]:animate-out data-[motion^=from-]:fade-in data-[motion^=to-]:fade-out data-[motion=from-end]:slide-in-from-right-52 data-[motion=from-start]:slide-in-from-left-52 data-[motion=to-end]:slide-out-to-right-52 data-[motion=to-start]:slide-out-to-left-52 md:absolute md:w-auto ",
      e
    ),
    ...t
  }
));
go.displayName = D.Content.displayName;
const kn = D.Link, Et = n.forwardRef(({ className: e, ...t }, a) => /* @__PURE__ */ r.jsx("div", { className: s("absolute left-0 top-full flex justify-center"), children: /* @__PURE__ */ r.jsx(
  D.Viewport,
  {
    className: s(
      "origin-top-center relative mt-1.5 h-[var(--radix-navigation-menu-viewport-height)] w-full overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-90 md:w-[var(--radix-navigation-menu-viewport-width)]",
      e
    ),
    ref: a,
    ...t
  }
) }));
Et.displayName = D.Viewport.displayName;
const xo = n.forwardRef(({ className: e, ...t }, a) => /* @__PURE__ */ r.jsx(
  D.Indicator,
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
xo.displayName = D.Indicator.displayName;
const _n = le.Root, In = le.Trigger, bo = n.forwardRef(({ className: e, align: t = "center", sideOffset: a = 4, ...i }, c) => /* @__PURE__ */ r.jsx(le.Portal, { children: /* @__PURE__ */ r.jsx(
  le.Content,
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
bo.displayName = le.Content.displayName;
const vo = n.forwardRef(({ className: e, value: t, ...a }, i) => /* @__PURE__ */ r.jsx(
  Me.Root,
  {
    ref: i,
    className: s(
      "relative h-4 w-full overflow-hidden rounded-full bg-secondary",
      e
    ),
    ...a,
    children: /* @__PURE__ */ r.jsx(
      Me.Indicator,
      {
        className: "h-full w-full flex-1 bg-primary transition-all",
        style: { transform: `translateX(-${100 - (t || 0)}%)` }
      }
    )
  }
));
vo.displayName = Me.Root.displayName;
const yo = n.forwardRef(({ className: e, ...t }, a) => /* @__PURE__ */ r.jsx(
  de.Root,
  {
    className: s("grid gap-2", e),
    ...t,
    ref: a
  }
));
yo.displayName = de.Root.displayName;
const ho = n.forwardRef(({ className: e, children: t, ...a }, i) => /* @__PURE__ */ r.jsx(
  de.Item,
  {
    ref: i,
    className: s(
      "aspect-square h-4 w-4 rounded-full border border-primary text-primary ring-offset-background focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
      e
    ),
    ...a,
    children: /* @__PURE__ */ r.jsx(de.Indicator, { className: "flex items-center justify-center", children: /* @__PURE__ */ r.jsx(ye, { className: "h-2.5 w-2.5 fill-current text-current" }) })
  }
));
ho.displayName = de.Item.displayName;
const No = n.forwardRef(({ className: e, children: t, ...a }, i) => /* @__PURE__ */ r.jsxs(
  W.Root,
  {
    ref: i,
    className: s("relative overflow-hidden", e),
    ...a,
    children: [
      /* @__PURE__ */ r.jsx(W.Viewport, { className: "h-full w-full rounded-[inherit]", children: t }),
      /* @__PURE__ */ r.jsx(Ot, {}),
      /* @__PURE__ */ r.jsx(W.Corner, {})
    ]
  }
));
No.displayName = W.Root.displayName;
const Ot = n.forwardRef(({ className: e, orientation: t = "vertical", ...a }, i) => /* @__PURE__ */ r.jsx(
  W.ScrollAreaScrollbar,
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
      W.ScrollAreaThumb,
      {
        className: s(
          "relative rounded-full bg-border",
          t === "vertical" && "flex-1"
        )
      }
    )
  }
));
Ot.displayName = W.ScrollAreaScrollbar.displayName;
const Dn = T.Root, En = T.Group, On = T.Value, wo = n.forwardRef(({ className: e, children: t, ...a }, i) => /* @__PURE__ */ r.jsxs(
  T.Trigger,
  {
    ref: i,
    className: s(
      "flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
      e
    ),
    ...a,
    children: [
      t,
      /* @__PURE__ */ r.jsx(T.Icon, { asChild: !0, children: /* @__PURE__ */ r.jsx(Fe, { className: "h-4 w-4 opacity-50" }) })
    ]
  }
));
wo.displayName = T.Trigger.displayName;
const jo = n.forwardRef(({ className: e, children: t, position: a = "popper", ...i }, c) => /* @__PURE__ */ r.jsx(T.Portal, { children: /* @__PURE__ */ r.jsx(
  T.Content,
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
      T.Viewport,
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
jo.displayName = T.Content.displayName;
const Ro = n.forwardRef(({ className: e, ...t }, a) => /* @__PURE__ */ r.jsx(
  T.Label,
  {
    ref: a,
    className: s("py-1.5 pl-8 pr-2 text-sm font-semibold", e),
    ...t
  }
));
Ro.displayName = T.Label.displayName;
const Co = n.forwardRef(({ className: e, children: t, ...a }, i) => /* @__PURE__ */ r.jsxs(
  T.Item,
  {
    ref: i,
    className: s(
      "relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      e
    ),
    ...a,
    children: [
      /* @__PURE__ */ r.jsx("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ r.jsx(T.ItemIndicator, { children: /* @__PURE__ */ r.jsx(ce, { className: "h-4 w-4" }) }) }),
      /* @__PURE__ */ r.jsx(T.ItemText, { children: t })
    ]
  }
));
Co.displayName = T.Item.displayName;
const To = n.forwardRef(({ className: e, ...t }, a) => /* @__PURE__ */ r.jsx(
  T.Separator,
  {
    ref: a,
    className: s("-mx-1 my-1 h-px bg-muted", e),
    ...t
  }
));
To.displayName = T.Separator.displayName;
const So = n.forwardRef(
  ({ className: e, orientation: t = "horizontal", decorative: a = !0, ...i }, c) => /* @__PURE__ */ r.jsx(
    wt.Root,
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
So.displayName = wt.Root.displayName;
const Mn = y.Root, An = y.Trigger, zn = y.Close, Mt = ({ ...e }) => /* @__PURE__ */ r.jsx(y.Portal, { ...e });
Mt.displayName = y.Portal.displayName;
const At = n.forwardRef(({ className: e, ...t }, a) => /* @__PURE__ */ r.jsx(
  y.Overlay,
  {
    className: s(
      "fixed inset-0 z-50 bg-background/80 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      e
    ),
    ...t,
    ref: a
  }
));
At.displayName = y.Overlay.displayName;
const Po = B(
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
), ko = n.forwardRef(({ side: e = "right", className: t, children: a, ...i }, c) => /* @__PURE__ */ r.jsxs(Mt, { children: [
  /* @__PURE__ */ r.jsx(At, {}),
  /* @__PURE__ */ r.jsxs(
    y.Content,
    {
      ref: c,
      className: s(Po({ side: e }), t),
      ...i,
      children: [
        a,
        /* @__PURE__ */ r.jsxs(y.Close, { className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary", children: [
          /* @__PURE__ */ r.jsx(Le, { className: "h-4 w-4" }),
          /* @__PURE__ */ r.jsx("span", { className: "sr-only", children: "Close" })
        ] })
      ]
    }
  )
] }));
ko.displayName = y.Content.displayName;
const _o = ({
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
_o.displayName = "SheetHeader";
const Io = ({
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
Io.displayName = "SheetFooter";
const Do = n.forwardRef(({ className: e, ...t }, a) => /* @__PURE__ */ r.jsx(
  y.Title,
  {
    ref: a,
    className: s("text-lg font-semibold text-foreground", e),
    ...t
  }
));
Do.displayName = y.Title.displayName;
const Eo = n.forwardRef(({ className: e, ...t }, a) => /* @__PURE__ */ r.jsx(
  y.Description,
  {
    ref: a,
    className: s("text-sm text-muted-foreground", e),
    ...t
  }
));
Eo.displayName = y.Description.displayName;
function Fn({
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
const Oo = n.forwardRef(({ className: e, ...t }, a) => /* @__PURE__ */ r.jsxs(
  ne.Root,
  {
    ref: a,
    className: s(
      "relative flex w-full touch-none select-none items-center",
      e
    ),
    ...t,
    children: [
      /* @__PURE__ */ r.jsx(ne.Track, { className: "relative h-2 w-full grow overflow-hidden rounded-full bg-secondary", children: /* @__PURE__ */ r.jsx(ne.Range, { className: "absolute h-full bg-primary" }) }),
      /* @__PURE__ */ r.jsx(ne.Thumb, { className: "block h-5 w-5 rounded-full border-2 border-primary bg-background ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50" })
    ]
  }
));
Oo.displayName = ne.Root.displayName;
const Mo = n.forwardRef(({ className: e, ...t }, a) => /* @__PURE__ */ r.jsx(
  Ae.Root,
  {
    className: s(
      "peer inline-flex h-[24px] w-[44px] shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=unchecked]:bg-input",
      e
    ),
    ...t,
    ref: a,
    children: /* @__PURE__ */ r.jsx(
      Ae.Thumb,
      {
        className: s(
          "pointer-events-none block h-5 w-5 rounded-full bg-background shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0"
        )
      }
    )
  }
));
Mo.displayName = Ae.Root.displayName;
const Ao = n.forwardRef(({ className: e, ...t }, a) => /* @__PURE__ */ r.jsx("div", { className: "relative w-full overflow-auto", children: /* @__PURE__ */ r.jsx(
  "table",
  {
    ref: a,
    className: s("w-full caption-bottom text-sm", e),
    ...t
  }
) }));
Ao.displayName = "Table";
const zo = n.forwardRef(({ className: e, ...t }, a) => /* @__PURE__ */ r.jsx("thead", { ref: a, className: s("[&_tr]:border-b", e), ...t }));
zo.displayName = "TableHeader";
const Fo = n.forwardRef(({ className: e, ...t }, a) => /* @__PURE__ */ r.jsx(
  "tbody",
  {
    ref: a,
    className: s("[&_tr:last-child]:border-0", e),
    ...t
  }
));
Fo.displayName = "TableBody";
const Lo = n.forwardRef(({ className: e, ...t }, a) => /* @__PURE__ */ r.jsx(
  "tfoot",
  {
    ref: a,
    className: s("bg-primary font-medium text-primary-foreground", e),
    ...t
  }
));
Lo.displayName = "TableFooter";
const Vo = n.forwardRef(({ className: e, ...t }, a) => /* @__PURE__ */ r.jsx(
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
Vo.displayName = "TableRow";
const Go = n.forwardRef(({ className: e, ...t }, a) => /* @__PURE__ */ r.jsx(
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
Go.displayName = "TableHead";
const $o = n.forwardRef(({ className: e, ...t }, a) => /* @__PURE__ */ r.jsx(
  "td",
  {
    ref: a,
    className: s("p-4 align-middle [&:has([role=checkbox])]:pr-0", e),
    ...t
  }
));
$o.displayName = "TableCell";
const Bo = n.forwardRef(({ className: e, ...t }, a) => /* @__PURE__ */ r.jsx(
  "caption",
  {
    ref: a,
    className: s("mt-4 text-sm text-muted-foreground", e),
    ...t
  }
));
Bo.displayName = "TableCaption";
const Ln = U.Root, Ho = n.forwardRef(({ className: e, ...t }, a) => /* @__PURE__ */ r.jsx(
  U.List,
  {
    ref: a,
    className: s(
      "inline-flex h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground",
      e
    ),
    ...t
  }
));
Ho.displayName = U.List.displayName;
const Wo = n.forwardRef(({ className: e, ...t }, a) => /* @__PURE__ */ r.jsx(
  U.Trigger,
  {
    ref: a,
    className: s(
      "inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm",
      e
    ),
    ...t
  }
));
Wo.displayName = U.Trigger.displayName;
const Yo = n.forwardRef(({ className: e, ...t }, a) => /* @__PURE__ */ r.jsx(
  U.Content,
  {
    ref: a,
    className: s(
      "mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
      e
    ),
    ...t
  }
));
Yo.displayName = U.Content.displayName;
const Uo = n.forwardRef(
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
Uo.displayName = "Textarea";
const qo = O.Provider, zt = n.forwardRef(({ className: e, ...t }, a) => /* @__PURE__ */ r.jsx(
  O.Viewport,
  {
    ref: a,
    className: s(
      "fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]",
      e
    ),
    ...t
  }
));
zt.displayName = O.Viewport.displayName;
const Jo = B(
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
), Ft = n.forwardRef(({ className: e, variant: t, ...a }, i) => /* @__PURE__ */ r.jsx(
  O.Root,
  {
    ref: i,
    className: s(Jo({ variant: t }), e),
    ...a
  }
));
Ft.displayName = O.Root.displayName;
const Ko = n.forwardRef(({ className: e, ...t }, a) => /* @__PURE__ */ r.jsx(
  O.Action,
  {
    ref: a,
    className: s(
      "inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium ring-offset-background transition-colors hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 group-[.destructive]:border-muted/40 group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground group-[.destructive]:focus:ring-destructive",
      e
    ),
    ...t
  }
));
Ko.displayName = O.Action.displayName;
const Lt = n.forwardRef(({ className: e, ...t }, a) => /* @__PURE__ */ r.jsx(
  O.Close,
  {
    ref: a,
    className: s(
      "absolute right-2 top-2 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity hover:text-foreground focus:opacity-100 focus:outline-none focus:ring-2 group-hover:opacity-100 group-[.destructive]:text-red-300 group-[.destructive]:hover:text-red-50 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600",
      e
    ),
    "toast-close": "",
    ...t,
    children: /* @__PURE__ */ r.jsx(Le, { className: "h-4 w-4" })
  }
));
Lt.displayName = O.Close.displayName;
const Vt = n.forwardRef(({ className: e, ...t }, a) => /* @__PURE__ */ r.jsx(
  O.Title,
  {
    ref: a,
    className: s("text-sm font-semibold", e),
    ...t
  }
));
Vt.displayName = O.Title.displayName;
const Gt = n.forwardRef(({ className: e, ...t }, a) => /* @__PURE__ */ r.jsx(
  O.Description,
  {
    ref: a,
    className: s("text-sm opacity-90", e),
    ...t
  }
));
Gt.displayName = O.Description.displayName;
const Xo = 1, Qo = 1e6;
let De = 0;
function Zo() {
  return De = (De + 1) % Number.MAX_VALUE, De.toString();
}
const Ee = /* @__PURE__ */ new Map(), bt = (e) => {
  if (Ee.has(e))
    return;
  const t = setTimeout(() => {
    Ee.delete(e), ie({
      type: "REMOVE_TOAST",
      toastId: e
    });
  }, Qo);
  Ee.set(e, t);
}, es = (e, t) => {
  switch (t.type) {
    case "ADD_TOAST":
      return {
        ...e,
        toasts: [t.toast, ...e.toasts].slice(0, Xo)
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
      return a ? bt(a) : e.toasts.forEach((i) => {
        bt(i.id);
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
}, be = [];
let ve = { toasts: [] };
function ie(e) {
  ve = es(ve, e), be.forEach((t) => {
    t(ve);
  });
}
function ts({ ...e }) {
  const t = Zo(), a = (c) => ie({
    type: "UPDATE_TOAST",
    toast: { ...c, id: t }
  }), i = () => ie({ type: "DISMISS_TOAST", toastId: t });
  return ie({
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
function as() {
  const [e, t] = n.useState(ve);
  return n.useEffect(() => (be.push(t), () => {
    const a = be.indexOf(t);
    a > -1 && be.splice(a, 1);
  }), [e]), {
    ...e,
    toast: ts,
    dismiss: (a) => ie({ type: "DISMISS_TOAST", toastId: a })
  };
}
function Vn() {
  const { toasts: e } = as();
  return /* @__PURE__ */ r.jsxs(qo, { children: [
    e.map(function({ id: t, title: a, description: i, action: c, ...p }) {
      return /* @__PURE__ */ r.jsxs(Ft, { ...p, children: [
        /* @__PURE__ */ r.jsxs("div", { className: "grid gap-1", children: [
          a && /* @__PURE__ */ r.jsx(Vt, { children: a }),
          i && /* @__PURE__ */ r.jsx(Gt, { children: i })
        ] }),
        c,
        /* @__PURE__ */ r.jsx(Lt, {})
      ] }, t);
    }),
    /* @__PURE__ */ r.jsx(zt, {})
  ] });
}
const $t = B(
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
), rs = n.forwardRef(({ className: e, variant: t, size: a, ...i }, c) => /* @__PURE__ */ r.jsx(
  jt.Root,
  {
    ref: c,
    className: s($t({ variant: t, size: a, className: e })),
    ...i
  }
));
rs.displayName = jt.Root.displayName;
const Gn = ue.Provider, $n = ue.Root, Bn = ue.Trigger, os = n.forwardRef(({ className: e, sideOffset: t = 4, ...a }, i) => /* @__PURE__ */ r.jsx(
  ue.Content,
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
os.displayName = ue.Content.displayName;
const Hn = ({
  className: e,
  ...t
}) => /* @__PURE__ */ r.jsx(
  $e.PanelGroup,
  {
    className: s(
      "flex h-full w-full data-[panel-group-direction=vertical]:flex-col",
      e
    ),
    ...t
  }
), Wn = $e.Panel, Yn = ({
  withHandle: e,
  className: t,
  ...a
}) => /* @__PURE__ */ r.jsx(
  $e.PanelResizeHandle,
  {
    className: s(
      "relative flex w-px items-center justify-center bg-border after:absolute after:inset-y-0 after:left-1/2 after:w-1 after:-translate-x-1/2 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring focus-visible:ring-offset-1 data-[panel-group-direction=vertical]:h-px data-[panel-group-direction=vertical]:w-full data-[panel-group-direction=vertical]:after:left-0 data-[panel-group-direction=vertical]:after:h-1 data-[panel-group-direction=vertical]:after:w-full data-[panel-group-direction=vertical]:after:-translate-y-1/2 data-[panel-group-direction=vertical]:after:translate-x-0 [&[data-panel-group-direction=vertical]>div]:rotate-90",
      t
    ),
    ...a,
    children: e && /* @__PURE__ */ r.jsx("div", { className: "z-10 flex h-4 w-3 items-center justify-center rounded-sm border bg-border", children: /* @__PURE__ */ r.jsx(Ta, { className: "h-2.5 w-2.5" }) })
  }
), ss = n.forwardRef(({ className: e, ...t }, a) => /* @__PURE__ */ r.jsx(
  za,
  {
    ref: a,
    containerClassName: s("flex items-center gap-2", e),
    ...t
  }
));
ss.displayName = "InputOTP";
const ns = n.forwardRef(({ className: e, ...t }, a) => /* @__PURE__ */ r.jsx("div", { ref: a, className: s("flex items-center", e), ...t }));
ns.displayName = "InputOTPGroup";
const is = n.forwardRef(({ char: e, hasFakeCaret: t, isActive: a, className: i, ...c }, p) => /* @__PURE__ */ r.jsxs(
  "div",
  {
    ref: p,
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
is.displayName = "InputOTPSlot";
const ls = n.forwardRef(({ ...e }, t) => /* @__PURE__ */ r.jsx("div", { ref: t, role: "separator", ...e, children: /* @__PURE__ */ r.jsx(Sa, {}) }));
ls.displayName = "InputOTPSeparator";
const ds = n.forwardRef(({ ...e }, t) => /* @__PURE__ */ r.jsx("nav", { ref: t, "aria-label": "breadcrumb", ...e }));
ds.displayName = "Breadcrumb";
const cs = n.forwardRef(({ className: e, ...t }, a) => /* @__PURE__ */ r.jsx(
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
cs.displayName = "BreadcrumbList";
const us = n.forwardRef(({ className: e, ...t }, a) => /* @__PURE__ */ r.jsx(
  "li",
  {
    ref: a,
    className: s("inline-flex items-center gap-1.5", e),
    ...t
  }
));
us.displayName = "BreadcrumbItem";
const fs = n.forwardRef(({ asChild: e, className: t, ...a }, i) => {
  const c = e ? Ve : "a";
  return /* @__PURE__ */ r.jsx(
    c,
    {
      ref: i,
      className: s("transition-colors hover:text-foreground", t),
      ...a
    }
  );
});
fs.displayName = "BreadcrumbLink";
const ms = n.forwardRef(({ className: e, ...t }, a) => /* @__PURE__ */ r.jsx(
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
ms.displayName = "BreadcrumbPage";
const ps = ({
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
    children: e || /* @__PURE__ */ r.jsx(Q, {})
  }
);
ps.displayName = "BreadcrumbSeparator";
const gs = ({
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
      /* @__PURE__ */ r.jsx(ht, { className: "h-4 w-4" }),
      /* @__PURE__ */ r.jsx("span", { className: "sr-only", children: "More" })
    ]
  }
);
gs.displayName = "BreadcrumbElipssis";
const Bt = n.createContext({
  size: "default",
  variant: "default"
}), xs = n.forwardRef(({ className: e, variant: t, size: a, children: i, ...c }, p) => /* @__PURE__ */ r.jsx(
  Ne.Root,
  {
    ref: p,
    className: s("flex items-center justify-center gap-1", e),
    ...c,
    children: /* @__PURE__ */ r.jsx(Bt.Provider, { value: { variant: t, size: a }, children: i })
  }
));
xs.displayName = Ne.Root.displayName;
const bs = n.forwardRef(({ className: e, children: t, variant: a, size: i, ...c }, p) => {
  const C = n.useContext(Bt);
  return /* @__PURE__ */ r.jsx(
    Ne.Item,
    {
      ref: p,
      className: s(
        $t({
          variant: C.variant || a,
          size: C.size || i
        }),
        e
      ),
      ...c,
      children: t
    }
  );
});
bs.displayName = Ne.Item.displayName;
const Un = ({ ...e }) => {
  const { theme: t = "system" } = Fa();
  return /* @__PURE__ */ r.jsx(
    La,
    {
      theme: t,
      className: "toaster group",
      toastOptions: {
        classNames: {
          toast: "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",
          description: "group-[.toast]:text-muted-foreground",
          actionButton: "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
          cancelButton: "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground"
        }
      },
      ...e
    }
  );
}, vs = ({ className: e, ...t }) => /* @__PURE__ */ r.jsx(
  "nav",
  {
    role: "navigation",
    "aria-label": "pagination",
    className: s("mx-auto flex w-full justify-center", e),
    ...t
  }
);
vs.displayName = "Pagination";
const ys = n.forwardRef(({ className: e, ...t }, a) => /* @__PURE__ */ r.jsx(
  "ul",
  {
    ref: a,
    className: s("flex flex-row items-center gap-1", e),
    ...t
  }
));
ys.displayName = "PaginationContent";
const hs = n.forwardRef(({ className: e, ...t }, a) => /* @__PURE__ */ r.jsx("li", { ref: a, className: s("", e), ...t }));
hs.displayName = "PaginationItem";
const He = ({
  className: e,
  isActive: t,
  size: a = "icon",
  ...i
}) => /* @__PURE__ */ r.jsx(
  "a",
  {
    "aria-current": t ? "page" : void 0,
    className: s(
      X({
        variant: t ? "outline" : "ghost",
        size: a
      }),
      e
    ),
    ...i
  }
);
He.displayName = "PaginationLink";
const Ns = ({
  className: e,
  ...t
}) => /* @__PURE__ */ r.jsxs(
  He,
  {
    "aria-label": "Go to previous page",
    size: "default",
    className: s("gap-1 pl-2.5", e),
    ...t,
    children: [
      /* @__PURE__ */ r.jsx(yt, { className: "h-4 w-4" }),
      /* @__PURE__ */ r.jsx("span", { children: "Previous" })
    ]
  }
);
Ns.displayName = "PaginationPrevious";
const ws = ({
  className: e,
  ...t
}) => /* @__PURE__ */ r.jsxs(
  He,
  {
    "aria-label": "Go to next page",
    size: "default",
    className: s("gap-1 pr-2.5", e),
    ...t,
    children: [
      /* @__PURE__ */ r.jsx("span", { children: "Next" }),
      /* @__PURE__ */ r.jsx(Q, { className: "h-4 w-4" })
    ]
  }
);
ws.displayName = "PaginationNext";
const js = ({
  className: e,
  ...t
}) => /* @__PURE__ */ r.jsxs(
  "span",
  {
    "aria-hidden": !0,
    className: s("flex h-9 w-9 items-center justify-center", e),
    ...t,
    children: [
      /* @__PURE__ */ r.jsx(ht, { className: "h-4 w-4" }),
      /* @__PURE__ */ r.jsx("span", { className: "sr-only", children: "More pages" })
    ]
  }
);
js.displayName = "PaginationEllipsis";
const Rs = ({
  shouldScaleBackground: e = !0,
  ...t
}) => /* @__PURE__ */ r.jsx(
  z.Root,
  {
    shouldScaleBackground: e,
    ...t
  }
);
Rs.displayName = "Drawer";
const qn = z.Trigger, Cs = z.Portal, Jn = z.Close, Ht = n.forwardRef(({ className: e, ...t }, a) => /* @__PURE__ */ r.jsx(
  z.Overlay,
  {
    ref: a,
    className: s("fixed inset-0 z-50 bg-black/80", e),
    ...t
  }
));
Ht.displayName = z.Overlay.displayName;
const Ts = n.forwardRef(({ className: e, children: t, ...a }, i) => /* @__PURE__ */ r.jsxs(Cs, { children: [
  /* @__PURE__ */ r.jsx(Ht, {}),
  /* @__PURE__ */ r.jsxs(
    z.Content,
    {
      ref: i,
      className: s(
        "fixed inset-x-0 bottom-0 z-50 mt-24 flex h-auto flex-col rounded-t-[10px] border bg-background",
        e
      ),
      ...a,
      children: [
        /* @__PURE__ */ r.jsx("div", { className: "mx-auto mt-4 h-2 w-[100px] rounded-full bg-muted" }),
        t
      ]
    }
  )
] }));
Ts.displayName = "DrawerContent";
const Ss = ({
  className: e,
  ...t
}) => /* @__PURE__ */ r.jsx(
  "div",
  {
    className: s("grid gap-1.5 p-4 text-center sm:text-left", e),
    ...t
  }
);
Ss.displayName = "DrawerHeader";
const Ps = ({
  className: e,
  ...t
}) => /* @__PURE__ */ r.jsx(
  "div",
  {
    className: s("mt-auto flex flex-col gap-2 p-4", e),
    ...t
  }
);
Ps.displayName = "DrawerFooter";
const ks = n.forwardRef(({ className: e, ...t }, a) => /* @__PURE__ */ r.jsx(
  z.Title,
  {
    ref: a,
    className: s(
      "text-lg font-semibold leading-none tracking-tight",
      e
    ),
    ...t
  }
));
ks.displayName = z.Title.displayName;
const _s = n.forwardRef(({ className: e, ...t }, a) => /* @__PURE__ */ r.jsx(
  z.Description,
  {
    ref: a,
    className: s("text-sm text-muted-foreground", e),
    ...t
  }
));
_s.displayName = z.Description.displayName;
const Wt = n.createContext(null);
function je() {
  const e = n.useContext(Wt);
  if (!e)
    throw new Error("useCarousel must be used within a <Carousel />");
  return e;
}
const Is = n.forwardRef(
  ({
    orientation: e = "horizontal",
    opts: t,
    setApi: a,
    plugins: i,
    className: c,
    children: p,
    ...C
  }, E) => {
    const [S, b] = Va(
      {
        ...t,
        axis: e === "horizontal" ? "x" : "y"
      },
      i
    ), [k, A] = n.useState(!1), [F, q] = n.useState(!1), G = n.useCallback((w) => {
      w && (A(w.canScrollPrev()), q(w.canScrollNext()));
    }, []), ee = n.useCallback(() => {
      b == null || b.scrollPrev();
    }, [b]), te = n.useCallback(() => {
      b == null || b.scrollNext();
    }, [b]), $ = n.useCallback(
      (w) => {
        w.key === "ArrowLeft" ? (w.preventDefault(), ee()) : w.key === "ArrowRight" && (w.preventDefault(), te());
      },
      [ee, te]
    );
    return n.useEffect(() => {
      !b || !a || a(b);
    }, [b, a]), n.useEffect(() => {
      if (b)
        return G(b), b.on("reInit", G), b.on("select", G), () => {
          b == null || b.off("select", G);
        };
    }, [b, G]), /* @__PURE__ */ r.jsx(
      Wt.Provider,
      {
        value: {
          carouselRef: S,
          api: b,
          opts: t,
          orientation: e || ((t == null ? void 0 : t.axis) === "y" ? "vertical" : "horizontal"),
          scrollPrev: ee,
          scrollNext: te,
          canScrollPrev: k,
          canScrollNext: F
        },
        children: /* @__PURE__ */ r.jsx(
          "div",
          {
            ref: E,
            onKeyDownCapture: $,
            className: s("relative", c),
            role: "region",
            "aria-roledescription": "carousel",
            ...C,
            children: p
          }
        )
      }
    );
  }
);
Is.displayName = "Carousel";
const Ds = n.forwardRef(({ className: e, ...t }, a) => {
  const { carouselRef: i, orientation: c } = je();
  return /* @__PURE__ */ r.jsx("div", { ref: i, className: "overflow-hidden", children: /* @__PURE__ */ r.jsx(
    "div",
    {
      ref: a,
      className: s(
        "flex",
        c === "horizontal" ? "-ml-4" : "-mt-4 flex-col",
        e
      ),
      ...t
    }
  ) });
});
Ds.displayName = "CarouselContent";
const Es = n.forwardRef(({ className: e, ...t }, a) => {
  const { orientation: i } = je();
  return /* @__PURE__ */ r.jsx(
    "div",
    {
      ref: a,
      role: "group",
      "aria-roledescription": "slide",
      className: s(
        "min-w-0 shrink-0 grow-0 basis-full",
        i === "horizontal" ? "pl-4" : "pt-4",
        e
      ),
      ...t
    }
  );
});
Es.displayName = "CarouselItem";
const Os = n.forwardRef(({ className: e, variant: t = "outline", size: a = "icon", ...i }, c) => {
  const { orientation: p, scrollPrev: C, canScrollPrev: E } = je();
  return /* @__PURE__ */ r.jsxs(
    Be,
    {
      ref: c,
      variant: t,
      size: a,
      className: s(
        "absolute  h-8 w-8 rounded-full",
        p === "horizontal" ? "-left-12 top-1/2 -translate-y-1/2" : "-top-12 left-1/2 -translate-x-1/2 rotate-90",
        e
      ),
      disabled: !E,
      onClick: C,
      ...i,
      children: [
        /* @__PURE__ */ r.jsx(Pa, { className: "h-4 w-4" }),
        /* @__PURE__ */ r.jsx("span", { className: "sr-only", children: "Previous slide" })
      ]
    }
  );
});
Os.displayName = "CarouselPrevious";
const Ms = n.forwardRef(({ className: e, variant: t = "outline", size: a = "icon", ...i }, c) => {
  const { orientation: p, scrollNext: C, canScrollNext: E } = je();
  return /* @__PURE__ */ r.jsxs(
    Be,
    {
      ref: c,
      variant: t,
      size: a,
      className: s(
        "absolute h-8 w-8 rounded-full",
        p === "horizontal" ? "-right-12 top-1/2 -translate-y-1/2" : "-bottom-12 left-1/2 -translate-x-1/2 rotate-90",
        e
      ),
      disabled: !E,
      onClick: C,
      ...i,
      children: [
        /* @__PURE__ */ r.jsx(ka, { className: "h-4 w-4" }),
        /* @__PURE__ */ r.jsx("span", { className: "sr-only", children: "Next slide" })
      ]
    }
  );
});
Ms.displayName = "CarouselNext";
export {
  Ks as Accordion,
  Wa as AccordionContent,
  Ba as AccordionItem,
  Ha as AccordionTrigger,
  er as Alert,
  ar as AlertDescription,
  Xs as AlertDialog,
  Xa as AlertDialogAction,
  Qa as AlertDialogCancel,
  Ya as AlertDialogContent,
  Ka as AlertDialogDescription,
  qa as AlertDialogFooter,
  Ua as AlertDialogHeader,
  Ja as AlertDialogTitle,
  Qs as AlertDialogTrigger,
  tr as AlertTitle,
  Zs as AspectRatio,
  rr as Avatar,
  sr as AvatarFallback,
  or as AvatarImage,
  en as Badge,
  ds as Breadcrumb,
  gs as BreadcrumbEllipsis,
  us as BreadcrumbItem,
  fs as BreadcrumbLink,
  cs as BreadcrumbList,
  ms as BreadcrumbPage,
  ps as BreadcrumbSeparator,
  Be as Button,
  ir as Calendar,
  lr as Card,
  fr as CardContent,
  ur as CardDescription,
  mr as CardFooter,
  dr as CardHeader,
  cr as CardTitle,
  Is as Carousel,
  Ds as CarouselContent,
  Es as CarouselItem,
  Ms as CarouselNext,
  Os as CarouselPrevious,
  pr as Checkbox,
  tn as Collapsible,
  rn as CollapsibleContent,
  an as CollapsibleTrigger,
  kt as Command,
  sn as CommandDialog,
  wr as CommandEmpty,
  jr as CommandGroup,
  hr as CommandInput,
  Cr as CommandItem,
  Nr as CommandList,
  Rr as CommandSeparator,
  Tr as CommandShortcut,
  nn as ContextMenu,
  Ir as ContextMenuCheckboxItem,
  kr as ContextMenuContent,
  dn as ContextMenuGroup,
  _r as ContextMenuItem,
  Er as ContextMenuLabel,
  cn as ContextMenuPortal,
  fn as ContextMenuRadioGroup,
  Dr as ContextMenuRadioItem,
  Or as ContextMenuSeparator,
  Mr as ContextMenuShortcut,
  un as ContextMenuSub,
  Pr as ContextMenuSubContent,
  Sr as ContextMenuSubTrigger,
  ln as ContextMenuTrigger,
  gr as Dialog,
  Pt as DialogContent,
  yr as DialogDescription,
  br as DialogFooter,
  xr as DialogHeader,
  vr as DialogTitle,
  on as DialogTrigger,
  Rs as Drawer,
  Jn as DrawerClose,
  Ts as DrawerContent,
  _s as DrawerDescription,
  Ps as DrawerFooter,
  Ss as DrawerHeader,
  Ht as DrawerOverlay,
  Cs as DrawerPortal,
  ks as DrawerTitle,
  qn as DrawerTrigger,
  mn as DropdownMenu,
  Vr as DropdownMenuCheckboxItem,
  Fr as DropdownMenuContent,
  gn as DropdownMenuGroup,
  Lr as DropdownMenuItem,
  $r as DropdownMenuLabel,
  xn as DropdownMenuPortal,
  vn as DropdownMenuRadioGroup,
  Gr as DropdownMenuRadioItem,
  Br as DropdownMenuSeparator,
  Hr as DropdownMenuShortcut,
  bn as DropdownMenuSub,
  zr as DropdownMenuSubContent,
  Ar as DropdownMenuSubTrigger,
  pn as DropdownMenuTrigger,
  yn as Form,
  qr as FormControl,
  Jr as FormDescription,
  hn as FormField,
  Yr as FormItem,
  Ur as FormLabel,
  Kr as FormMessage,
  Nn as HoverCard,
  Xr as HoverCardContent,
  wn as HoverCardTrigger,
  Qr as Input,
  ss as InputOTP,
  ns as InputOTPGroup,
  ls as InputOTPSeparator,
  is as InputOTPSlot,
  _t as Label,
  Zr as Menubar,
  so as MenubarCheckboxItem,
  ro as MenubarContent,
  Rn as MenubarGroup,
  oo as MenubarItem,
  io as MenubarLabel,
  jn as MenubarMenu,
  Cn as MenubarPortal,
  Sn as MenubarRadioGroup,
  no as MenubarRadioItem,
  lo as MenubarSeparator,
  co as MenubarShortcut,
  Tn as MenubarSub,
  ao as MenubarSubContent,
  to as MenubarSubTrigger,
  eo as MenubarTrigger,
  uo as NavigationMenu,
  go as NavigationMenuContent,
  xo as NavigationMenuIndicator,
  Pn as NavigationMenuItem,
  kn as NavigationMenuLink,
  fo as NavigationMenuList,
  po as NavigationMenuTrigger,
  Et as NavigationMenuViewport,
  vs as Pagination,
  ys as PaginationContent,
  js as PaginationEllipsis,
  hs as PaginationItem,
  He as PaginationLink,
  ws as PaginationNext,
  Ns as PaginationPrevious,
  _n as Popover,
  bo as PopoverContent,
  In as PopoverTrigger,
  vo as Progress,
  yo as RadioGroup,
  ho as RadioGroupItem,
  Yn as ResizableHandle,
  Wn as ResizablePanel,
  Hn as ResizablePanelGroup,
  No as ScrollArea,
  Ot as ScrollBar,
  Dn as Select,
  jo as SelectContent,
  En as SelectGroup,
  Co as SelectItem,
  Ro as SelectLabel,
  To as SelectSeparator,
  wo as SelectTrigger,
  On as SelectValue,
  So as Separator,
  Mn as Sheet,
  zn as SheetClose,
  ko as SheetContent,
  Eo as SheetDescription,
  Io as SheetFooter,
  _o as SheetHeader,
  Do as SheetTitle,
  An as SheetTrigger,
  Fn as Skeleton,
  Oo as Slider,
  Un as Sonner,
  Mo as Switch,
  Ao as Table,
  Fo as TableBody,
  Bo as TableCaption,
  $o as TableCell,
  Lo as TableFooter,
  Go as TableHead,
  zo as TableHeader,
  Vo as TableRow,
  Ln as Tabs,
  Yo as TabsContent,
  Ho as TabsList,
  Wo as TabsTrigger,
  Uo as Textarea,
  Ft as Toast,
  Ko as ToastAction,
  Lt as ToastClose,
  Gt as ToastDescription,
  qo as ToastProvider,
  Vt as ToastTitle,
  zt as ToastViewport,
  Vn as Toaster,
  rs as Toggle,
  xs as ToggleGroup,
  bs as ToggleGroupItem,
  $n as Tooltip,
  os as TooltipContent,
  Gn as TooltipProvider,
  Bn as TooltipTrigger,
  nr as badgeVariants,
  X as buttonVariants,
  s as cn,
  mo as navigationMenuTriggerStyle,
  es as reducer,
  ts as toast,
  $t as toggleVariants,
  we as useFormField,
  as as useToast
};
