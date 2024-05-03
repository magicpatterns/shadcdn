import * as n from "react";
import mt from "react";
import * as B from "@radix-ui/react-accordion";
import { ChevronDown as Oe, ChevronLeft as va, ChevronRight as ne, Check as ie, X as Me, Search as ya, Circle as xe, GripVertical as ha, Dot as Na, MoreHorizontal as wa } from "lucide-react";
import { clsx as ja } from "clsx";
import { twMerge as Ra } from "tailwind-merge";
import * as C from "@radix-ui/react-alert-dialog";
import { Slot as Ae } from "@radix-ui/react-slot";
import { cva as F } from "class-variance-authority";
import * as Ca from "@radix-ui/react-aspect-ratio";
import * as J from "@radix-ui/react-avatar";
import { DayPicker as Ta } from "react-day-picker";
import * as Pe from "@radix-ui/react-checkbox";
import * as Fe from "@radix-ui/react-collapsible";
import { Command as k } from "cmdk";
import * as b from "@radix-ui/react-dialog";
import * as v from "@radix-ui/react-context-menu";
import * as y from "@radix-ui/react-dropdown-menu";
import { FormProvider as Sa, Controller as _a, useFormContext as ka } from "react-hook-form";
import * as pt from "@radix-ui/react-label";
import * as be from "@radix-ui/react-hover-card";
import * as g from "@radix-ui/react-menubar";
import * as P from "@radix-ui/react-navigation-menu";
import * as re from "@radix-ui/react-popover";
import * as Ie from "@radix-ui/react-progress";
import * as oe from "@radix-ui/react-radio-group";
import * as $ from "@radix-ui/react-scroll-area";
import * as j from "@radix-ui/react-select";
import * as gt from "@radix-ui/react-separator";
import * as te from "@radix-ui/react-slider";
import * as Ee from "@radix-ui/react-switch";
import * as W from "@radix-ui/react-tabs";
import * as E from "@radix-ui/react-toast";
import * as xt from "@radix-ui/react-toggle";
import * as de from "@radix-ui/react-tooltip";
import * as ze from "react-resizable-panels";
import { OTPInput as Pa } from "input-otp";
var De = { exports: {} }, Z = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ct;
function Ia() {
  if (ct)
    return Z;
  ct = 1;
  var e = mt, t = Symbol.for("react.element"), a = Symbol.for("react.fragment"), i = Object.prototype.hasOwnProperty, c = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, h = { key: !0, ref: !0, __self: !0, __source: !0 };
  function O(z, T, Y) {
    var I, A = {}, L = null, le = null;
    Y !== void 0 && (L = "" + Y), T.key !== void 0 && (L = "" + T.key), T.ref !== void 0 && (le = T.ref);
    for (I in T)
      i.call(T, I) && !h.hasOwnProperty(I) && (A[I] = T[I]);
    if (z && z.defaultProps)
      for (I in T = z.defaultProps, T)
        A[I] === void 0 && (A[I] = T[I]);
    return { $$typeof: t, type: z, key: L, ref: le, props: A, _owner: c.current };
  }
  return Z.Fragment = a, Z.jsx = O, Z.jsxs = O, Z;
}
var ee = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ut;
function Ea() {
  return ut || (ut = 1, process.env.NODE_ENV !== "production" && function() {
    var e = mt, t = Symbol.for("react.element"), a = Symbol.for("react.portal"), i = Symbol.for("react.fragment"), c = Symbol.for("react.strict_mode"), h = Symbol.for("react.profiler"), O = Symbol.for("react.provider"), z = Symbol.for("react.context"), T = Symbol.for("react.forward_ref"), Y = Symbol.for("react.suspense"), I = Symbol.for("react.suspense_list"), A = Symbol.for("react.memo"), L = Symbol.for("react.lazy"), le = Symbol.for("react.offscreen"), Le = Symbol.iterator, Mt = "@@iterator";
    function At(o) {
      if (o === null || typeof o != "object")
        return null;
      var d = Le && o[Le] || o[Mt];
      return typeof d == "function" ? d : null;
    }
    var H = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function R(o) {
      {
        for (var d = arguments.length, l = new Array(d > 1 ? d - 1 : 0), u = 1; u < d; u++)
          l[u - 1] = arguments[u];
        Ft("error", o, l);
      }
    }
    function Ft(o, d, l) {
      {
        var u = H.ReactDebugCurrentFrame, p = u.getStackAddendum();
        p !== "" && (d += "%s", l = l.concat([p]));
        var x = l.map(function(m) {
          return String(m);
        });
        x.unshift("Warning: " + d), Function.prototype.apply.call(console[o], console, x);
      }
    }
    var zt = !1, Lt = !1, Vt = !1, Gt = !1, $t = !1, Ve;
    Ve = Symbol.for("react.module.reference");
    function Bt(o) {
      return !!(typeof o == "string" || typeof o == "function" || o === i || o === h || $t || o === c || o === Y || o === I || Gt || o === le || zt || Lt || Vt || typeof o == "object" && o !== null && (o.$$typeof === L || o.$$typeof === A || o.$$typeof === O || o.$$typeof === z || o.$$typeof === T || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      o.$$typeof === Ve || o.getModuleId !== void 0));
    }
    function Wt(o, d, l) {
      var u = o.displayName;
      if (u)
        return u;
      var p = d.displayName || d.name || "";
      return p !== "" ? l + "(" + p + ")" : l;
    }
    function Ge(o) {
      return o.displayName || "Context";
    }
    function M(o) {
      if (o == null)
        return null;
      if (typeof o.tag == "number" && R("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof o == "function")
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
        case Y:
          return "Suspense";
        case I:
          return "SuspenseList";
      }
      if (typeof o == "object")
        switch (o.$$typeof) {
          case z:
            var d = o;
            return Ge(d) + ".Consumer";
          case O:
            var l = o;
            return Ge(l._context) + ".Provider";
          case T:
            return Wt(o, o.render, "ForwardRef");
          case A:
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
    var V = Object.assign, K = 0, $e, Be, We, Ye, He, Ue, qe;
    function Je() {
    }
    Je.__reactDisabledLog = !0;
    function Yt() {
      {
        if (K === 0) {
          $e = console.log, Be = console.info, We = console.warn, Ye = console.error, He = console.group, Ue = console.groupCollapsed, qe = console.groupEnd;
          var o = {
            configurable: !0,
            enumerable: !0,
            value: Je,
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
        K++;
      }
    }
    function Ht() {
      {
        if (K--, K === 0) {
          var o = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: V({}, o, {
              value: $e
            }),
            info: V({}, o, {
              value: Be
            }),
            warn: V({}, o, {
              value: We
            }),
            error: V({}, o, {
              value: Ye
            }),
            group: V({}, o, {
              value: He
            }),
            groupCollapsed: V({}, o, {
              value: Ue
            }),
            groupEnd: V({}, o, {
              value: qe
            })
          });
        }
        K < 0 && R("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var ye = H.ReactCurrentDispatcher, he;
    function ce(o, d, l) {
      {
        if (he === void 0)
          try {
            throw Error();
          } catch (p) {
            var u = p.stack.trim().match(/\n( *(at )?)/);
            he = u && u[1] || "";
          }
        return `
` + he + o;
      }
    }
    var Ne = !1, ue;
    {
      var Ut = typeof WeakMap == "function" ? WeakMap : Map;
      ue = new Ut();
    }
    function Ke(o, d) {
      if (!o || Ne)
        return "";
      {
        var l = ue.get(o);
        if (l !== void 0)
          return l;
      }
      var u;
      Ne = !0;
      var p = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var x;
      x = ye.current, ye.current = null, Yt();
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
            } catch (_) {
              u = _;
            }
            Reflect.construct(o, [], m);
          } else {
            try {
              m.call();
            } catch (_) {
              u = _;
            }
            o.call(m.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (_) {
            u = _;
          }
          o();
        }
      } catch (_) {
        if (_ && u && typeof _.stack == "string") {
          for (var f = _.stack.split(`
`), S = u.stack.split(`
`), N = f.length - 1, w = S.length - 1; N >= 1 && w >= 0 && f[N] !== S[w]; )
            w--;
          for (; N >= 1 && w >= 0; N--, w--)
            if (f[N] !== S[w]) {
              if (N !== 1 || w !== 1)
                do
                  if (N--, w--, w < 0 || f[N] !== S[w]) {
                    var D = `
` + f[N].replace(" at new ", " at ");
                    return o.displayName && D.includes("<anonymous>") && (D = D.replace("<anonymous>", o.displayName)), typeof o == "function" && ue.set(o, D), D;
                  }
                while (N >= 1 && w >= 0);
              break;
            }
        }
      } finally {
        Ne = !1, ye.current = x, Ht(), Error.prepareStackTrace = p;
      }
      var q = o ? o.displayName || o.name : "", G = q ? ce(q) : "";
      return typeof o == "function" && ue.set(o, G), G;
    }
    function qt(o, d, l) {
      return Ke(o, !1);
    }
    function Jt(o) {
      var d = o.prototype;
      return !!(d && d.isReactComponent);
    }
    function fe(o, d, l) {
      if (o == null)
        return "";
      if (typeof o == "function")
        return Ke(o, Jt(o));
      if (typeof o == "string")
        return ce(o);
      switch (o) {
        case Y:
          return ce("Suspense");
        case I:
          return ce("SuspenseList");
      }
      if (typeof o == "object")
        switch (o.$$typeof) {
          case T:
            return qt(o.render);
          case A:
            return fe(o.type, d, l);
          case L: {
            var u = o, p = u._payload, x = u._init;
            try {
              return fe(x(p), d, l);
            } catch {
            }
          }
        }
      return "";
    }
    var X = Object.prototype.hasOwnProperty, Xe = {}, Qe = H.ReactDebugCurrentFrame;
    function me(o) {
      if (o) {
        var d = o._owner, l = fe(o.type, o._source, d ? d.type : null);
        Qe.setExtraStackFrame(l);
      } else
        Qe.setExtraStackFrame(null);
    }
    function Kt(o, d, l, u, p) {
      {
        var x = Function.call.bind(X);
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
            f && !(f instanceof Error) && (me(p), R("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", u || "React class", l, m, typeof f), me(null)), f instanceof Error && !(f.message in Xe) && (Xe[f.message] = !0, me(p), R("Failed %s type: %s", l, f.message), me(null));
          }
      }
    }
    var Xt = Array.isArray;
    function we(o) {
      return Xt(o);
    }
    function Qt(o) {
      {
        var d = typeof Symbol == "function" && Symbol.toStringTag, l = d && o[Symbol.toStringTag] || o.constructor.name || "Object";
        return l;
      }
    }
    function Zt(o) {
      try {
        return Ze(o), !1;
      } catch {
        return !0;
      }
    }
    function Ze(o) {
      return "" + o;
    }
    function et(o) {
      if (Zt(o))
        return R("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Qt(o)), Ze(o);
    }
    var Q = H.ReactCurrentOwner, ea = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, tt, at, je;
    je = {};
    function ta(o) {
      if (X.call(o, "ref")) {
        var d = Object.getOwnPropertyDescriptor(o, "ref").get;
        if (d && d.isReactWarning)
          return !1;
      }
      return o.ref !== void 0;
    }
    function aa(o) {
      if (X.call(o, "key")) {
        var d = Object.getOwnPropertyDescriptor(o, "key").get;
        if (d && d.isReactWarning)
          return !1;
      }
      return o.key !== void 0;
    }
    function ra(o, d) {
      if (typeof o.ref == "string" && Q.current && d && Q.current.stateNode !== d) {
        var l = M(Q.current.type);
        je[l] || (R('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', M(Q.current.type), o.ref), je[l] = !0);
      }
    }
    function oa(o, d) {
      {
        var l = function() {
          tt || (tt = !0, R("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", d));
        };
        l.isReactWarning = !0, Object.defineProperty(o, "key", {
          get: l,
          configurable: !0
        });
      }
    }
    function sa(o, d) {
      {
        var l = function() {
          at || (at = !0, R("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", d));
        };
        l.isReactWarning = !0, Object.defineProperty(o, "ref", {
          get: l,
          configurable: !0
        });
      }
    }
    var na = function(o, d, l, u, p, x, m) {
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
    function ia(o, d, l, u, p) {
      {
        var x, m = {}, f = null, S = null;
        l !== void 0 && (et(l), f = "" + l), aa(d) && (et(d.key), f = "" + d.key), ta(d) && (S = d.ref, ra(d, p));
        for (x in d)
          X.call(d, x) && !ea.hasOwnProperty(x) && (m[x] = d[x]);
        if (o && o.defaultProps) {
          var N = o.defaultProps;
          for (x in N)
            m[x] === void 0 && (m[x] = N[x]);
        }
        if (f || S) {
          var w = typeof o == "function" ? o.displayName || o.name || "Unknown" : o;
          f && oa(m, w), S && sa(m, w);
        }
        return na(o, f, S, p, u, Q.current, m);
      }
    }
    var Re = H.ReactCurrentOwner, rt = H.ReactDebugCurrentFrame;
    function U(o) {
      if (o) {
        var d = o._owner, l = fe(o.type, o._source, d ? d.type : null);
        rt.setExtraStackFrame(l);
      } else
        rt.setExtraStackFrame(null);
    }
    var Ce;
    Ce = !1;
    function Te(o) {
      return typeof o == "object" && o !== null && o.$$typeof === t;
    }
    function ot() {
      {
        if (Re.current) {
          var o = M(Re.current.type);
          if (o)
            return `

Check the render method of \`` + o + "`.";
        }
        return "";
      }
    }
    function da(o) {
      {
        if (o !== void 0) {
          var d = o.fileName.replace(/^.*[\\\/]/, ""), l = o.lineNumber;
          return `

Check your code at ` + d + ":" + l + ".";
        }
        return "";
      }
    }
    var st = {};
    function la(o) {
      {
        var d = ot();
        if (!d) {
          var l = typeof o == "string" ? o : o.displayName || o.name;
          l && (d = `

Check the top-level render call using <` + l + ">.");
        }
        return d;
      }
    }
    function nt(o, d) {
      {
        if (!o._store || o._store.validated || o.key != null)
          return;
        o._store.validated = !0;
        var l = la(d);
        if (st[l])
          return;
        st[l] = !0;
        var u = "";
        o && o._owner && o._owner !== Re.current && (u = " It was passed a child from " + M(o._owner.type) + "."), U(o), R('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', l, u), U(null);
      }
    }
    function it(o, d) {
      {
        if (typeof o != "object")
          return;
        if (we(o))
          for (var l = 0; l < o.length; l++) {
            var u = o[l];
            Te(u) && nt(u, d);
          }
        else if (Te(o))
          o._store && (o._store.validated = !0);
        else if (o) {
          var p = At(o);
          if (typeof p == "function" && p !== o.entries)
            for (var x = p.call(o), m; !(m = x.next()).done; )
              Te(m.value) && nt(m.value, d);
        }
      }
    }
    function ca(o) {
      {
        var d = o.type;
        if (d == null || typeof d == "string")
          return;
        var l;
        if (typeof d == "function")
          l = d.propTypes;
        else if (typeof d == "object" && (d.$$typeof === T || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        d.$$typeof === A))
          l = d.propTypes;
        else
          return;
        if (l) {
          var u = M(d);
          Kt(l, o.props, "prop", u, o);
        } else if (d.PropTypes !== void 0 && !Ce) {
          Ce = !0;
          var p = M(d);
          R("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", p || "Unknown");
        }
        typeof d.getDefaultProps == "function" && !d.getDefaultProps.isReactClassApproved && R("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function ua(o) {
      {
        for (var d = Object.keys(o.props), l = 0; l < d.length; l++) {
          var u = d[l];
          if (u !== "children" && u !== "key") {
            U(o), R("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", u), U(null);
            break;
          }
        }
        o.ref !== null && (U(o), R("Invalid attribute `ref` supplied to `React.Fragment`."), U(null));
      }
    }
    var dt = {};
    function lt(o, d, l, u, p, x) {
      {
        var m = Bt(o);
        if (!m) {
          var f = "";
          (o === void 0 || typeof o == "object" && o !== null && Object.keys(o).length === 0) && (f += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var S = da(p);
          S ? f += S : f += ot();
          var N;
          o === null ? N = "null" : we(o) ? N = "array" : o !== void 0 && o.$$typeof === t ? (N = "<" + (M(o.type) || "Unknown") + " />", f = " Did you accidentally export a JSX literal instead of a component?") : N = typeof o, R("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", N, f);
        }
        var w = ia(o, d, l, p, x);
        if (w == null)
          return w;
        if (m) {
          var D = d.children;
          if (D !== void 0)
            if (u)
              if (we(D)) {
                for (var q = 0; q < D.length; q++)
                  it(D[q], o);
                Object.freeze && Object.freeze(D);
              } else
                R("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              it(D, o);
        }
        if (X.call(d, "key")) {
          var G = M(o), _ = Object.keys(d).filter(function(ba) {
            return ba !== "key";
          }), Se = _.length > 0 ? "{key: someKey, " + _.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!dt[G + Se]) {
            var xa = _.length > 0 ? "{" + _.join(": ..., ") + ": ...}" : "{}";
            R(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, Se, G, xa, G), dt[G + Se] = !0;
          }
        }
        return o === i ? ua(w) : ca(w), w;
      }
    }
    function fa(o, d, l) {
      return lt(o, d, l, !0);
    }
    function ma(o, d, l) {
      return lt(o, d, l, !1);
    }
    var pa = ma, ga = fa;
    ee.Fragment = i, ee.jsx = pa, ee.jsxs = ga;
  }()), ee;
}
process.env.NODE_ENV === "production" ? De.exports = Ia() : De.exports = Ea();
var r = De.exports;
function s(...e) {
  return Ra(ja(e));
}
const vs = B.Root, Da = n.forwardRef(({ className: e, ...t }, a) => /* @__PURE__ */ r.jsx(
  B.Item,
  {
    ref: a,
    className: s("border-b", e),
    ...t
  }
));
Da.displayName = "AccordionItem";
const Oa = n.forwardRef(({ className: e, children: t, ...a }, i) => /* @__PURE__ */ r.jsx(B.Header, { className: "flex", children: /* @__PURE__ */ r.jsxs(
  B.Trigger,
  {
    ref: i,
    className: s(
      "flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180",
      e
    ),
    ...a,
    children: [
      t,
      /* @__PURE__ */ r.jsx(Oe, { className: "h-4 w-4 shrink-0 transition-transform duration-200" })
    ]
  }
) }));
Oa.displayName = B.Trigger.displayName;
const Ma = n.forwardRef(({ className: e, children: t, ...a }, i) => /* @__PURE__ */ r.jsx(
  B.Content,
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
Ma.displayName = B.Content.displayName;
const se = F(
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
), Aa = n.forwardRef(
  ({ className: e, variant: t, size: a, asChild: i = !1, ...c }, h) => {
    const O = i ? Ae : "button";
    return /* @__PURE__ */ r.jsx(
      O,
      {
        className: s(se({ variant: t, size: a, className: e })),
        ref: h,
        ...c
      }
    );
  }
);
Aa.displayName = "Button";
const ys = C.Root, hs = C.Trigger, bt = ({
  ...e
}) => /* @__PURE__ */ r.jsx(C.Portal, { ...e });
bt.displayName = C.Portal.displayName;
const vt = n.forwardRef(({ className: e, ...t }, a) => /* @__PURE__ */ r.jsx(
  C.Overlay,
  {
    className: s(
      "fixed inset-0 z-50 bg-background/80 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      e
    ),
    ...t,
    ref: a
  }
));
vt.displayName = C.Overlay.displayName;
const Fa = n.forwardRef(({ className: e, ...t }, a) => /* @__PURE__ */ r.jsxs(bt, { children: [
  /* @__PURE__ */ r.jsx(vt, {}),
  /* @__PURE__ */ r.jsx(
    C.Content,
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
Fa.displayName = C.Content.displayName;
const za = ({
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
za.displayName = "AlertDialogHeader";
const La = ({
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
La.displayName = "AlertDialogFooter";
const Va = n.forwardRef(({ className: e, ...t }, a) => /* @__PURE__ */ r.jsx(
  C.Title,
  {
    ref: a,
    className: s("text-lg font-semibold", e),
    ...t
  }
));
Va.displayName = C.Title.displayName;
const Ga = n.forwardRef(({ className: e, ...t }, a) => /* @__PURE__ */ r.jsx(
  C.Description,
  {
    ref: a,
    className: s("text-sm text-muted-foreground", e),
    ...t
  }
));
Ga.displayName = C.Description.displayName;
const $a = n.forwardRef(({ className: e, ...t }, a) => /* @__PURE__ */ r.jsx(
  C.Action,
  {
    ref: a,
    className: s(se(), e),
    ...t
  }
));
$a.displayName = C.Action.displayName;
const Ba = n.forwardRef(({ className: e, ...t }, a) => /* @__PURE__ */ r.jsx(
  C.Cancel,
  {
    ref: a,
    className: s(
      se({ variant: "outline" }),
      "mt-2 sm:mt-0",
      e
    ),
    ...t
  }
));
Ba.displayName = C.Cancel.displayName;
const Wa = F(
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
), Ya = n.forwardRef(({ className: e, variant: t, ...a }, i) => /* @__PURE__ */ r.jsx(
  "div",
  {
    ref: i,
    role: "alert",
    className: s(Wa({ variant: t }), e),
    ...a
  }
));
Ya.displayName = "Alert";
const Ha = n.forwardRef(({ className: e, ...t }, a) => /* @__PURE__ */ r.jsx(
  "h5",
  {
    ref: a,
    className: s("mb-1 font-medium leading-none tracking-tight", e),
    ...t
  }
));
Ha.displayName = "AlertTitle";
const Ua = n.forwardRef(({ className: e, ...t }, a) => /* @__PURE__ */ r.jsx(
  "div",
  {
    ref: a,
    className: s("text-sm [&_p]:leading-relaxed", e),
    ...t
  }
));
Ua.displayName = "AlertDescription";
const Ns = Ca.Root, qa = n.forwardRef(({ className: e, ...t }, a) => /* @__PURE__ */ r.jsx(
  J.Root,
  {
    ref: a,
    className: s(
      "relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full",
      e
    ),
    ...t
  }
));
qa.displayName = J.Root.displayName;
const Ja = n.forwardRef(({ className: e, ...t }, a) => /* @__PURE__ */ r.jsx(
  J.Image,
  {
    ref: a,
    className: s("aspect-square h-full w-full", e),
    ...t
  }
));
Ja.displayName = J.Image.displayName;
const Ka = n.forwardRef(({ className: e, ...t }, a) => /* @__PURE__ */ r.jsx(
  J.Fallback,
  {
    ref: a,
    className: s(
      "flex h-full w-full items-center justify-center rounded-full bg-muted",
      e
    ),
    ...t
  }
));
Ka.displayName = J.Fallback.displayName;
const Xa = F(
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
function ws({ className: e, variant: t, ...a }) {
  return /* @__PURE__ */ r.jsx("div", { className: s(Xa({ variant: t }), e), ...a });
}
function Qa({
  className: e,
  classNames: t,
  showOutsideDays: a = !0,
  ...i
}) {
  return /* @__PURE__ */ r.jsx(
    Ta,
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
          se({ variant: "outline" }),
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
          se({ variant: "ghost" }),
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
        IconLeft: () => /* @__PURE__ */ r.jsx(va, { className: "h-4 w-4" }),
        IconRight: () => /* @__PURE__ */ r.jsx(ne, { className: "h-4 w-4" })
      },
      ...i
    }
  );
}
Qa.displayName = "Calendar";
const Za = n.forwardRef(({ className: e, ...t }, a) => /* @__PURE__ */ r.jsx(
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
Za.displayName = "Card";
const er = n.forwardRef(({ className: e, ...t }, a) => /* @__PURE__ */ r.jsx(
  "div",
  {
    ref: a,
    className: s("flex flex-col space-y-1.5 p-6", e),
    ...t
  }
));
er.displayName = "CardHeader";
const tr = n.forwardRef(({ className: e, ...t }, a) => /* @__PURE__ */ r.jsx(
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
tr.displayName = "CardTitle";
const ar = n.forwardRef(({ className: e, ...t }, a) => /* @__PURE__ */ r.jsx(
  "p",
  {
    ref: a,
    className: s("text-sm text-muted-foreground", e),
    ...t
  }
));
ar.displayName = "CardDescription";
const rr = n.forwardRef(({ className: e, ...t }, a) => /* @__PURE__ */ r.jsx("div", { ref: a, className: s("p-6 pt-0", e), ...t }));
rr.displayName = "CardContent";
const or = n.forwardRef(({ className: e, ...t }, a) => /* @__PURE__ */ r.jsx(
  "div",
  {
    ref: a,
    className: s("flex items-center p-6 pt-0", e),
    ...t
  }
));
or.displayName = "CardFooter";
const sr = n.forwardRef(({ className: e, ...t }, a) => /* @__PURE__ */ r.jsx(
  Pe.Root,
  {
    ref: a,
    className: s(
      "peer h-4 w-4 shrink-0 rounded-sm border border-primary ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground",
      e
    ),
    ...t,
    children: /* @__PURE__ */ r.jsx(
      Pe.Indicator,
      {
        className: s("flex items-center justify-center text-current"),
        children: /* @__PURE__ */ r.jsx(ie, { className: "h-4 w-4" })
      }
    )
  }
));
sr.displayName = Pe.Root.displayName;
const js = Fe.Root, Rs = Fe.CollapsibleTrigger, Cs = Fe.CollapsibleContent, nr = b.Root, Ts = b.Trigger, yt = ({ ...e }) => /* @__PURE__ */ r.jsx(b.Portal, { ...e });
yt.displayName = b.Portal.displayName;
const ht = n.forwardRef(({ className: e, ...t }, a) => /* @__PURE__ */ r.jsx(
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
ht.displayName = b.Overlay.displayName;
const Nt = n.forwardRef(({ className: e, children: t, ...a }, i) => /* @__PURE__ */ r.jsxs(yt, { children: [
  /* @__PURE__ */ r.jsx(ht, {}),
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
          /* @__PURE__ */ r.jsx(Me, { className: "h-4 w-4" }),
          /* @__PURE__ */ r.jsx("span", { className: "sr-only", children: "Close" })
        ] })
      ]
    }
  )
] }));
Nt.displayName = b.Content.displayName;
const ir = ({
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
ir.displayName = "DialogHeader";
const dr = ({
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
dr.displayName = "DialogFooter";
const lr = n.forwardRef(({ className: e, ...t }, a) => /* @__PURE__ */ r.jsx(
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
lr.displayName = b.Title.displayName;
const cr = n.forwardRef(({ className: e, ...t }, a) => /* @__PURE__ */ r.jsx(
  b.Description,
  {
    ref: a,
    className: s("text-sm text-muted-foreground", e),
    ...t
  }
));
cr.displayName = b.Description.displayName;
const wt = n.forwardRef(({ className: e, ...t }, a) => /* @__PURE__ */ r.jsx(
  k,
  {
    ref: a,
    className: s(
      "flex h-full w-full flex-col overflow-hidden rounded-md bg-popover text-popover-foreground",
      e
    ),
    ...t
  }
));
wt.displayName = k.displayName;
const Ss = ({ children: e, ...t }) => /* @__PURE__ */ r.jsx(nr, { ...t, children: /* @__PURE__ */ r.jsx(Nt, { className: "overflow-hidden p-0 shadow-lg", children: /* @__PURE__ */ r.jsx(wt, { className: "[&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground [&_[cmdk-group]:not([hidden])_~[cmdk-group]]:pt-0 [&_[cmdk-group]]:px-2 [&_[cmdk-input-wrapper]_svg]:h-5 [&_[cmdk-input-wrapper]_svg]:w-5 [&_[cmdk-input]]:h-12 [&_[cmdk-item]]:px-2 [&_[cmdk-item]]:py-3 [&_[cmdk-item]_svg]:h-5 [&_[cmdk-item]_svg]:w-5", children: e }) }) }), ur = n.forwardRef(({ className: e, ...t }, a) => /* @__PURE__ */ r.jsxs("div", { className: "flex items-center border-b px-3", "cmdk-input-wrapper": "", children: [
  /* @__PURE__ */ r.jsx(ya, { className: "mr-2 h-4 w-4 shrink-0 opacity-50" }),
  /* @__PURE__ */ r.jsx(
    k.Input,
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
ur.displayName = k.Input.displayName;
const fr = n.forwardRef(({ className: e, ...t }, a) => /* @__PURE__ */ r.jsx(
  k.List,
  {
    ref: a,
    className: s("max-h-[300px] overflow-y-auto overflow-x-hidden", e),
    ...t
  }
));
fr.displayName = k.List.displayName;
const mr = n.forwardRef((e, t) => /* @__PURE__ */ r.jsx(
  k.Empty,
  {
    ref: t,
    className: "py-6 text-center text-sm",
    ...e
  }
));
mr.displayName = k.Empty.displayName;
const pr = n.forwardRef(({ className: e, ...t }, a) => /* @__PURE__ */ r.jsx(
  k.Group,
  {
    ref: a,
    className: s(
      "overflow-hidden p-1 text-foreground [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground",
      e
    ),
    ...t
  }
));
pr.displayName = k.Group.displayName;
const gr = n.forwardRef(({ className: e, ...t }, a) => /* @__PURE__ */ r.jsx(
  k.Separator,
  {
    ref: a,
    className: s("-mx-1 h-px bg-border", e),
    ...t
  }
));
gr.displayName = k.Separator.displayName;
const xr = n.forwardRef(({ className: e, ...t }, a) => /* @__PURE__ */ r.jsx(
  k.Item,
  {
    ref: a,
    className: s(
      "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none aria-selected:bg-accent aria-selected:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      e
    ),
    ...t
  }
));
xr.displayName = k.Item.displayName;
const br = ({
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
br.displayName = "CommandShortcut";
const _s = v.Root, ks = v.Trigger, Ps = v.Group, Is = v.Portal, Es = v.Sub, Ds = v.RadioGroup, vr = n.forwardRef(({ className: e, inset: t, children: a, ...i }, c) => /* @__PURE__ */ r.jsxs(
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
      /* @__PURE__ */ r.jsx(ne, { className: "ml-auto h-4 w-4" })
    ]
  }
));
vr.displayName = v.SubTrigger.displayName;
const yr = n.forwardRef(({ className: e, ...t }, a) => /* @__PURE__ */ r.jsx(
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
yr.displayName = v.SubContent.displayName;
const hr = n.forwardRef(({ className: e, ...t }, a) => /* @__PURE__ */ r.jsx(v.Portal, { children: /* @__PURE__ */ r.jsx(
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
hr.displayName = v.Content.displayName;
const Nr = n.forwardRef(({ className: e, inset: t, ...a }, i) => /* @__PURE__ */ r.jsx(
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
Nr.displayName = v.Item.displayName;
const wr = n.forwardRef(({ className: e, children: t, checked: a, ...i }, c) => /* @__PURE__ */ r.jsxs(
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
      /* @__PURE__ */ r.jsx("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ r.jsx(v.ItemIndicator, { children: /* @__PURE__ */ r.jsx(ie, { className: "h-4 w-4" }) }) }),
      t
    ]
  }
));
wr.displayName = v.CheckboxItem.displayName;
const jr = n.forwardRef(({ className: e, children: t, ...a }, i) => /* @__PURE__ */ r.jsxs(
  v.RadioItem,
  {
    ref: i,
    className: s(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      e
    ),
    ...a,
    children: [
      /* @__PURE__ */ r.jsx("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ r.jsx(v.ItemIndicator, { children: /* @__PURE__ */ r.jsx(xe, { className: "h-2 w-2 fill-current" }) }) }),
      t
    ]
  }
));
jr.displayName = v.RadioItem.displayName;
const Rr = n.forwardRef(({ className: e, inset: t, ...a }, i) => /* @__PURE__ */ r.jsx(
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
Rr.displayName = v.Label.displayName;
const Cr = n.forwardRef(({ className: e, ...t }, a) => /* @__PURE__ */ r.jsx(
  v.Separator,
  {
    ref: a,
    className: s("-mx-1 my-1 h-px bg-border", e),
    ...t
  }
));
Cr.displayName = v.Separator.displayName;
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
Tr.displayName = "ContextMenuShortcut";
const Os = y.Root, Ms = y.Trigger, As = y.Group, Fs = y.Portal, zs = y.Sub, Ls = y.RadioGroup, Sr = n.forwardRef(({ className: e, inset: t, children: a, ...i }, c) => /* @__PURE__ */ r.jsxs(
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
      /* @__PURE__ */ r.jsx(ne, { className: "ml-auto h-4 w-4" })
    ]
  }
));
Sr.displayName = y.SubTrigger.displayName;
const _r = n.forwardRef(({ className: e, ...t }, a) => /* @__PURE__ */ r.jsx(
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
_r.displayName = y.SubContent.displayName;
const kr = n.forwardRef(({ className: e, sideOffset: t = 4, ...a }, i) => /* @__PURE__ */ r.jsx(y.Portal, { children: /* @__PURE__ */ r.jsx(
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
kr.displayName = y.Content.displayName;
const Pr = n.forwardRef(({ className: e, inset: t, ...a }, i) => /* @__PURE__ */ r.jsx(
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
Pr.displayName = y.Item.displayName;
const Ir = n.forwardRef(({ className: e, children: t, checked: a, ...i }, c) => /* @__PURE__ */ r.jsxs(
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
      /* @__PURE__ */ r.jsx("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ r.jsx(y.ItemIndicator, { children: /* @__PURE__ */ r.jsx(ie, { className: "h-4 w-4" }) }) }),
      t
    ]
  }
));
Ir.displayName = y.CheckboxItem.displayName;
const Er = n.forwardRef(({ className: e, children: t, ...a }, i) => /* @__PURE__ */ r.jsxs(
  y.RadioItem,
  {
    ref: i,
    className: s(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      e
    ),
    ...a,
    children: [
      /* @__PURE__ */ r.jsx("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ r.jsx(y.ItemIndicator, { children: /* @__PURE__ */ r.jsx(xe, { className: "h-2 w-2 fill-current" }) }) }),
      t
    ]
  }
));
Er.displayName = y.RadioItem.displayName;
const Dr = n.forwardRef(({ className: e, inset: t, ...a }, i) => /* @__PURE__ */ r.jsx(
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
Dr.displayName = y.Label.displayName;
const Or = n.forwardRef(({ className: e, ...t }, a) => /* @__PURE__ */ r.jsx(
  y.Separator,
  {
    ref: a,
    className: s("-mx-1 my-1 h-px bg-muted", e),
    ...t
  }
));
Or.displayName = y.Separator.displayName;
const Mr = ({
  className: e,
  ...t
}) => /* @__PURE__ */ r.jsx(
  "span",
  {
    className: s("ml-auto text-xs tracking-widest opacity-60", e),
    ...t
  }
);
Mr.displayName = "DropdownMenuShortcut";
const Ar = F(
  "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
), jt = n.forwardRef(({ className: e, ...t }, a) => /* @__PURE__ */ r.jsx(
  pt.Root,
  {
    ref: a,
    className: s(Ar(), e),
    ...t
  }
));
jt.displayName = pt.Root.displayName;
const Vs = Sa, Rt = n.createContext(
  {}
), Gs = ({
  ...e
}) => /* @__PURE__ */ r.jsx(Rt.Provider, { value: { name: e.name }, children: /* @__PURE__ */ r.jsx(_a, { ...e }) }), ve = () => {
  const e = n.useContext(Rt), t = n.useContext(Ct), { getFieldState: a, formState: i } = ka(), c = a(e.name, i);
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
}, Ct = n.createContext(
  {}
), Fr = n.forwardRef(({ className: e, ...t }, a) => {
  const i = n.useId();
  return /* @__PURE__ */ r.jsx(Ct.Provider, { value: { id: i }, children: /* @__PURE__ */ r.jsx("div", { ref: a, className: s("space-y-2", e), ...t }) });
});
Fr.displayName = "FormItem";
const zr = n.forwardRef(({ className: e, ...t }, a) => {
  const { error: i, formItemId: c } = ve();
  return /* @__PURE__ */ r.jsx(
    jt,
    {
      ref: a,
      className: s(i && "text-destructive", e),
      htmlFor: c,
      ...t
    }
  );
});
zr.displayName = "FormLabel";
const Lr = n.forwardRef(({ ...e }, t) => {
  const { error: a, formItemId: i, formDescriptionId: c, formMessageId: h } = ve();
  return /* @__PURE__ */ r.jsx(
    Ae,
    {
      ref: t,
      id: i,
      "aria-describedby": a ? `${c} ${h}` : `${c}`,
      "aria-invalid": !!a,
      ...e
    }
  );
});
Lr.displayName = "FormControl";
const Vr = n.forwardRef(({ className: e, ...t }, a) => {
  const { formDescriptionId: i } = ve();
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
Vr.displayName = "FormDescription";
const Gr = n.forwardRef(({ className: e, children: t, ...a }, i) => {
  const { error: c, formMessageId: h } = ve(), O = c ? String(c == null ? void 0 : c.message) : t;
  return O ? /* @__PURE__ */ r.jsx(
    "p",
    {
      ref: i,
      id: h,
      className: s("text-sm font-medium text-destructive", e),
      ...a,
      children: O
    }
  ) : null;
});
Gr.displayName = "FormMessage";
const $s = be.Root, Bs = be.Trigger, $r = n.forwardRef(({ className: e, align: t = "center", sideOffset: a = 4, ...i }, c) => /* @__PURE__ */ r.jsx(
  be.Content,
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
$r.displayName = be.Content.displayName;
const Br = n.forwardRef(
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
Br.displayName = "Input";
const Ws = g.Menu, Ys = g.Group, Hs = g.Portal, Us = g.Sub, qs = g.RadioGroup, Wr = n.forwardRef(({ className: e, ...t }, a) => /* @__PURE__ */ r.jsx(
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
Wr.displayName = g.Root.displayName;
const Yr = n.forwardRef(({ className: e, ...t }, a) => /* @__PURE__ */ r.jsx(
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
Yr.displayName = g.Trigger.displayName;
const Hr = n.forwardRef(({ className: e, inset: t, children: a, ...i }, c) => /* @__PURE__ */ r.jsxs(
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
      /* @__PURE__ */ r.jsx(ne, { className: "ml-auto h-4 w-4" })
    ]
  }
));
Hr.displayName = g.SubTrigger.displayName;
const Ur = n.forwardRef(({ className: e, ...t }, a) => /* @__PURE__ */ r.jsx(
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
Ur.displayName = g.SubContent.displayName;
const qr = n.forwardRef(
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
qr.displayName = g.Content.displayName;
const Jr = n.forwardRef(({ className: e, inset: t, ...a }, i) => /* @__PURE__ */ r.jsx(
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
Jr.displayName = g.Item.displayName;
const Kr = n.forwardRef(({ className: e, children: t, checked: a, ...i }, c) => /* @__PURE__ */ r.jsxs(
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
      /* @__PURE__ */ r.jsx("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ r.jsx(g.ItemIndicator, { children: /* @__PURE__ */ r.jsx(ie, { className: "h-4 w-4" }) }) }),
      t
    ]
  }
));
Kr.displayName = g.CheckboxItem.displayName;
const Xr = n.forwardRef(({ className: e, children: t, ...a }, i) => /* @__PURE__ */ r.jsxs(
  g.RadioItem,
  {
    ref: i,
    className: s(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      e
    ),
    ...a,
    children: [
      /* @__PURE__ */ r.jsx("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ r.jsx(g.ItemIndicator, { children: /* @__PURE__ */ r.jsx(xe, { className: "h-2 w-2 fill-current" }) }) }),
      t
    ]
  }
));
Xr.displayName = g.RadioItem.displayName;
const Qr = n.forwardRef(({ className: e, inset: t, ...a }, i) => /* @__PURE__ */ r.jsx(
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
Qr.displayName = g.Label.displayName;
const Zr = n.forwardRef(({ className: e, ...t }, a) => /* @__PURE__ */ r.jsx(
  g.Separator,
  {
    ref: a,
    className: s("-mx-1 my-1 h-px bg-muted", e),
    ...t
  }
));
Zr.displayName = g.Separator.displayName;
const eo = ({
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
eo.displayname = "MenubarShortcut";
const to = n.forwardRef(({ className: e, children: t, ...a }, i) => /* @__PURE__ */ r.jsxs(
  P.Root,
  {
    ref: i,
    className: s(
      "relative z-10 flex max-w-max flex-1 items-center justify-center",
      e
    ),
    ...a,
    children: [
      t,
      /* @__PURE__ */ r.jsx(Tt, {})
    ]
  }
));
to.displayName = P.Root.displayName;
const ao = n.forwardRef(({ className: e, ...t }, a) => /* @__PURE__ */ r.jsx(
  P.List,
  {
    ref: a,
    className: s(
      "group flex flex-1 list-none items-center justify-center space-x-1",
      e
    ),
    ...t
  }
));
ao.displayName = P.List.displayName;
const Js = P.Item, ro = F(
  "group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
), oo = n.forwardRef(({ className: e, children: t, ...a }, i) => /* @__PURE__ */ r.jsxs(
  P.Trigger,
  {
    ref: i,
    className: s(ro(), "group", e),
    ...a,
    children: [
      t,
      " ",
      /* @__PURE__ */ r.jsx(
        Oe,
        {
          className: "relative top-[1px] ml-1 h-3 w-3 transition duration-200 group-data-[state=open]:rotate-180",
          "aria-hidden": "true"
        }
      )
    ]
  }
));
oo.displayName = P.Trigger.displayName;
const so = n.forwardRef(({ className: e, ...t }, a) => /* @__PURE__ */ r.jsx(
  P.Content,
  {
    ref: a,
    className: s(
      "left-0 top-0 w-full data-[motion^=from-]:animate-in data-[motion^=to-]:animate-out data-[motion^=from-]:fade-in data-[motion^=to-]:fade-out data-[motion=from-end]:slide-in-from-right-52 data-[motion=from-start]:slide-in-from-left-52 data-[motion=to-end]:slide-out-to-right-52 data-[motion=to-start]:slide-out-to-left-52 md:absolute md:w-auto ",
      e
    ),
    ...t
  }
));
so.displayName = P.Content.displayName;
const Ks = P.Link, Tt = n.forwardRef(({ className: e, ...t }, a) => /* @__PURE__ */ r.jsx("div", { className: s("absolute left-0 top-full flex justify-center"), children: /* @__PURE__ */ r.jsx(
  P.Viewport,
  {
    className: s(
      "origin-top-center relative mt-1.5 h-[var(--radix-navigation-menu-viewport-height)] w-full overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-90 md:w-[var(--radix-navigation-menu-viewport-width)]",
      e
    ),
    ref: a,
    ...t
  }
) }));
Tt.displayName = P.Viewport.displayName;
const no = n.forwardRef(({ className: e, ...t }, a) => /* @__PURE__ */ r.jsx(
  P.Indicator,
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
no.displayName = P.Indicator.displayName;
const Xs = re.Root, Qs = re.Trigger, io = n.forwardRef(({ className: e, align: t = "center", sideOffset: a = 4, ...i }, c) => /* @__PURE__ */ r.jsx(re.Portal, { children: /* @__PURE__ */ r.jsx(
  re.Content,
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
io.displayName = re.Content.displayName;
const lo = n.forwardRef(({ className: e, value: t, ...a }, i) => /* @__PURE__ */ r.jsx(
  Ie.Root,
  {
    ref: i,
    className: s(
      "relative h-4 w-full overflow-hidden rounded-full bg-secondary",
      e
    ),
    ...a,
    children: /* @__PURE__ */ r.jsx(
      Ie.Indicator,
      {
        className: "h-full w-full flex-1 bg-primary transition-all",
        style: { transform: `translateX(-${100 - (t || 0)}%)` }
      }
    )
  }
));
lo.displayName = Ie.Root.displayName;
const co = n.forwardRef(({ className: e, ...t }, a) => /* @__PURE__ */ r.jsx(
  oe.Root,
  {
    className: s("grid gap-2", e),
    ...t,
    ref: a
  }
));
co.displayName = oe.Root.displayName;
const uo = n.forwardRef(({ className: e, children: t, ...a }, i) => /* @__PURE__ */ r.jsx(
  oe.Item,
  {
    ref: i,
    className: s(
      "aspect-square h-4 w-4 rounded-full border border-primary text-primary ring-offset-background focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
      e
    ),
    ...a,
    children: /* @__PURE__ */ r.jsx(oe.Indicator, { className: "flex items-center justify-center", children: /* @__PURE__ */ r.jsx(xe, { className: "h-2.5 w-2.5 fill-current text-current" }) })
  }
));
uo.displayName = oe.Item.displayName;
const fo = n.forwardRef(({ className: e, children: t, ...a }, i) => /* @__PURE__ */ r.jsxs(
  $.Root,
  {
    ref: i,
    className: s("relative overflow-hidden", e),
    ...a,
    children: [
      /* @__PURE__ */ r.jsx($.Viewport, { className: "h-full w-full rounded-[inherit]", children: t }),
      /* @__PURE__ */ r.jsx(St, {}),
      /* @__PURE__ */ r.jsx($.Corner, {})
    ]
  }
));
fo.displayName = $.Root.displayName;
const St = n.forwardRef(({ className: e, orientation: t = "vertical", ...a }, i) => /* @__PURE__ */ r.jsx(
  $.ScrollAreaScrollbar,
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
      $.ScrollAreaThumb,
      {
        className: s(
          "relative rounded-full bg-border",
          t === "vertical" && "flex-1"
        )
      }
    )
  }
));
St.displayName = $.ScrollAreaScrollbar.displayName;
const Zs = j.Root, en = j.Group, tn = j.Value, mo = n.forwardRef(({ className: e, children: t, ...a }, i) => /* @__PURE__ */ r.jsxs(
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
      /* @__PURE__ */ r.jsx(j.Icon, { asChild: !0, children: /* @__PURE__ */ r.jsx(Oe, { className: "h-4 w-4 opacity-50" }) })
    ]
  }
));
mo.displayName = j.Trigger.displayName;
const po = n.forwardRef(({ className: e, children: t, position: a = "popper", ...i }, c) => /* @__PURE__ */ r.jsx(j.Portal, { children: /* @__PURE__ */ r.jsx(
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
po.displayName = j.Content.displayName;
const go = n.forwardRef(({ className: e, ...t }, a) => /* @__PURE__ */ r.jsx(
  j.Label,
  {
    ref: a,
    className: s("py-1.5 pl-8 pr-2 text-sm font-semibold", e),
    ...t
  }
));
go.displayName = j.Label.displayName;
const xo = n.forwardRef(({ className: e, children: t, ...a }, i) => /* @__PURE__ */ r.jsxs(
  j.Item,
  {
    ref: i,
    className: s(
      "relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      e
    ),
    ...a,
    children: [
      /* @__PURE__ */ r.jsx("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ r.jsx(j.ItemIndicator, { children: /* @__PURE__ */ r.jsx(ie, { className: "h-4 w-4" }) }) }),
      /* @__PURE__ */ r.jsx(j.ItemText, { children: t })
    ]
  }
));
xo.displayName = j.Item.displayName;
const bo = n.forwardRef(({ className: e, ...t }, a) => /* @__PURE__ */ r.jsx(
  j.Separator,
  {
    ref: a,
    className: s("-mx-1 my-1 h-px bg-muted", e),
    ...t
  }
));
bo.displayName = j.Separator.displayName;
const vo = n.forwardRef(
  ({ className: e, orientation: t = "horizontal", decorative: a = !0, ...i }, c) => /* @__PURE__ */ r.jsx(
    gt.Root,
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
vo.displayName = gt.Root.displayName;
const an = b.Root, rn = b.Trigger, on = b.Close, _t = ({ ...e }) => /* @__PURE__ */ r.jsx(b.Portal, { ...e });
_t.displayName = b.Portal.displayName;
const kt = n.forwardRef(({ className: e, ...t }, a) => /* @__PURE__ */ r.jsx(
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
kt.displayName = b.Overlay.displayName;
const yo = F(
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
), ho = n.forwardRef(({ side: e = "right", className: t, children: a, ...i }, c) => /* @__PURE__ */ r.jsxs(_t, { children: [
  /* @__PURE__ */ r.jsx(kt, {}),
  /* @__PURE__ */ r.jsxs(
    b.Content,
    {
      ref: c,
      className: s(yo({ side: e }), t),
      ...i,
      children: [
        a,
        /* @__PURE__ */ r.jsxs(b.Close, { className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary", children: [
          /* @__PURE__ */ r.jsx(Me, { className: "h-4 w-4" }),
          /* @__PURE__ */ r.jsx("span", { className: "sr-only", children: "Close" })
        ] })
      ]
    }
  )
] }));
ho.displayName = b.Content.displayName;
const No = ({
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
No.displayName = "SheetHeader";
const wo = ({
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
wo.displayName = "SheetFooter";
const jo = n.forwardRef(({ className: e, ...t }, a) => /* @__PURE__ */ r.jsx(
  b.Title,
  {
    ref: a,
    className: s("text-lg font-semibold text-foreground", e),
    ...t
  }
));
jo.displayName = b.Title.displayName;
const Ro = n.forwardRef(({ className: e, ...t }, a) => /* @__PURE__ */ r.jsx(
  b.Description,
  {
    ref: a,
    className: s("text-sm text-muted-foreground", e),
    ...t
  }
));
Ro.displayName = b.Description.displayName;
function sn({
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
const Co = n.forwardRef(({ className: e, ...t }, a) => /* @__PURE__ */ r.jsxs(
  te.Root,
  {
    ref: a,
    className: s(
      "relative flex w-full touch-none select-none items-center",
      e
    ),
    ...t,
    children: [
      /* @__PURE__ */ r.jsx(te.Track, { className: "relative h-2 w-full grow overflow-hidden rounded-full bg-secondary", children: /* @__PURE__ */ r.jsx(te.Range, { className: "absolute h-full bg-primary" }) }),
      /* @__PURE__ */ r.jsx(te.Thumb, { className: "block h-5 w-5 rounded-full border-2 border-primary bg-background ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50" })
    ]
  }
));
Co.displayName = te.Root.displayName;
const To = n.forwardRef(({ className: e, ...t }, a) => /* @__PURE__ */ r.jsx(
  Ee.Root,
  {
    className: s(
      "peer inline-flex h-[24px] w-[44px] shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=unchecked]:bg-input",
      e
    ),
    ...t,
    ref: a,
    children: /* @__PURE__ */ r.jsx(
      Ee.Thumb,
      {
        className: s(
          "pointer-events-none block h-5 w-5 rounded-full bg-background shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0"
        )
      }
    )
  }
));
To.displayName = Ee.Root.displayName;
const So = n.forwardRef(({ className: e, ...t }, a) => /* @__PURE__ */ r.jsx("div", { className: "relative w-full overflow-auto", children: /* @__PURE__ */ r.jsx(
  "table",
  {
    ref: a,
    className: s("w-full caption-bottom text-sm", e),
    ...t
  }
) }));
So.displayName = "Table";
const _o = n.forwardRef(({ className: e, ...t }, a) => /* @__PURE__ */ r.jsx("thead", { ref: a, className: s("[&_tr]:border-b", e), ...t }));
_o.displayName = "TableHeader";
const ko = n.forwardRef(({ className: e, ...t }, a) => /* @__PURE__ */ r.jsx(
  "tbody",
  {
    ref: a,
    className: s("[&_tr:last-child]:border-0", e),
    ...t
  }
));
ko.displayName = "TableBody";
const Po = n.forwardRef(({ className: e, ...t }, a) => /* @__PURE__ */ r.jsx(
  "tfoot",
  {
    ref: a,
    className: s("bg-primary font-medium text-primary-foreground", e),
    ...t
  }
));
Po.displayName = "TableFooter";
const Io = n.forwardRef(({ className: e, ...t }, a) => /* @__PURE__ */ r.jsx(
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
Io.displayName = "TableRow";
const Eo = n.forwardRef(({ className: e, ...t }, a) => /* @__PURE__ */ r.jsx(
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
Eo.displayName = "TableHead";
const Do = n.forwardRef(({ className: e, ...t }, a) => /* @__PURE__ */ r.jsx(
  "td",
  {
    ref: a,
    className: s("p-4 align-middle [&:has([role=checkbox])]:pr-0", e),
    ...t
  }
));
Do.displayName = "TableCell";
const Oo = n.forwardRef(({ className: e, ...t }, a) => /* @__PURE__ */ r.jsx(
  "caption",
  {
    ref: a,
    className: s("mt-4 text-sm text-muted-foreground", e),
    ...t
  }
));
Oo.displayName = "TableCaption";
const nn = W.Root, Mo = n.forwardRef(({ className: e, ...t }, a) => /* @__PURE__ */ r.jsx(
  W.List,
  {
    ref: a,
    className: s(
      "inline-flex h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground",
      e
    ),
    ...t
  }
));
Mo.displayName = W.List.displayName;
const Ao = n.forwardRef(({ className: e, ...t }, a) => /* @__PURE__ */ r.jsx(
  W.Trigger,
  {
    ref: a,
    className: s(
      "inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm",
      e
    ),
    ...t
  }
));
Ao.displayName = W.Trigger.displayName;
const Fo = n.forwardRef(({ className: e, ...t }, a) => /* @__PURE__ */ r.jsx(
  W.Content,
  {
    ref: a,
    className: s(
      "mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
      e
    ),
    ...t
  }
));
Fo.displayName = W.Content.displayName;
const zo = n.forwardRef(
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
zo.displayName = "Textarea";
const Lo = E.Provider, Pt = n.forwardRef(({ className: e, ...t }, a) => /* @__PURE__ */ r.jsx(
  E.Viewport,
  {
    ref: a,
    className: s(
      "fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]",
      e
    ),
    ...t
  }
));
Pt.displayName = E.Viewport.displayName;
const Vo = F(
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
), It = n.forwardRef(({ className: e, variant: t, ...a }, i) => /* @__PURE__ */ r.jsx(
  E.Root,
  {
    ref: i,
    className: s(Vo({ variant: t }), e),
    ...a
  }
));
It.displayName = E.Root.displayName;
const Go = n.forwardRef(({ className: e, ...t }, a) => /* @__PURE__ */ r.jsx(
  E.Action,
  {
    ref: a,
    className: s(
      "inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium ring-offset-background transition-colors hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 group-[.destructive]:border-muted/40 group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground group-[.destructive]:focus:ring-destructive",
      e
    ),
    ...t
  }
));
Go.displayName = E.Action.displayName;
const Et = n.forwardRef(({ className: e, ...t }, a) => /* @__PURE__ */ r.jsx(
  E.Close,
  {
    ref: a,
    className: s(
      "absolute right-2 top-2 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity hover:text-foreground focus:opacity-100 focus:outline-none focus:ring-2 group-hover:opacity-100 group-[.destructive]:text-red-300 group-[.destructive]:hover:text-red-50 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600",
      e
    ),
    "toast-close": "",
    ...t,
    children: /* @__PURE__ */ r.jsx(Me, { className: "h-4 w-4" })
  }
));
Et.displayName = E.Close.displayName;
const Dt = n.forwardRef(({ className: e, ...t }, a) => /* @__PURE__ */ r.jsx(
  E.Title,
  {
    ref: a,
    className: s("text-sm font-semibold", e),
    ...t
  }
));
Dt.displayName = E.Title.displayName;
const Ot = n.forwardRef(({ className: e, ...t }, a) => /* @__PURE__ */ r.jsx(
  E.Description,
  {
    ref: a,
    className: s("text-sm opacity-90", e),
    ...t
  }
));
Ot.displayName = E.Description.displayName;
const $o = 1, Bo = 1e6;
let _e = 0;
function Wo() {
  return _e = (_e + 1) % Number.MAX_VALUE, _e.toString();
}
const ke = /* @__PURE__ */ new Map(), ft = (e) => {
  if (ke.has(e))
    return;
  const t = setTimeout(() => {
    ke.delete(e), ae({
      type: "REMOVE_TOAST",
      toastId: e
    });
  }, Bo);
  ke.set(e, t);
}, Yo = (e, t) => {
  switch (t.type) {
    case "ADD_TOAST":
      return {
        ...e,
        toasts: [t.toast, ...e.toasts].slice(0, $o)
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
      return a ? ft(a) : e.toasts.forEach((i) => {
        ft(i.id);
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
}, pe = [];
let ge = { toasts: [] };
function ae(e) {
  ge = Yo(ge, e), pe.forEach((t) => {
    t(ge);
  });
}
function Ho({ ...e }) {
  const t = Wo(), a = (c) => ae({
    type: "UPDATE_TOAST",
    toast: { ...c, id: t }
  }), i = () => ae({ type: "DISMISS_TOAST", toastId: t });
  return ae({
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
function Uo() {
  const [e, t] = n.useState(ge);
  return n.useEffect(() => (pe.push(t), () => {
    const a = pe.indexOf(t);
    a > -1 && pe.splice(a, 1);
  }), [e]), {
    ...e,
    toast: Ho,
    dismiss: (a) => ae({ type: "DISMISS_TOAST", toastId: a })
  };
}
function dn() {
  const { toasts: e } = Uo();
  return /* @__PURE__ */ r.jsxs(Lo, { children: [
    e.map(function({ id: t, title: a, description: i, action: c, ...h }) {
      return /* @__PURE__ */ r.jsxs(It, { ...h, children: [
        /* @__PURE__ */ r.jsxs("div", { className: "grid gap-1", children: [
          a && /* @__PURE__ */ r.jsx(Dt, { children: a }),
          i && /* @__PURE__ */ r.jsx(Ot, { children: i })
        ] }),
        c,
        /* @__PURE__ */ r.jsx(Et, {})
      ] }, t);
    }),
    /* @__PURE__ */ r.jsx(Pt, {})
  ] });
}
const qo = F(
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
), Jo = n.forwardRef(({ className: e, variant: t, size: a, ...i }, c) => /* @__PURE__ */ r.jsx(
  xt.Root,
  {
    ref: c,
    className: s(qo({ variant: t, size: a, className: e })),
    ...i
  }
));
Jo.displayName = xt.Root.displayName;
const ln = de.Provider, cn = de.Root, un = de.Trigger, Ko = n.forwardRef(({ className: e, sideOffset: t = 4, ...a }, i) => /* @__PURE__ */ r.jsx(
  de.Content,
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
Ko.displayName = de.Content.displayName;
const fn = ({
  className: e,
  ...t
}) => /* @__PURE__ */ r.jsx(
  ze.PanelGroup,
  {
    className: s(
      "flex h-full w-full data-[panel-group-direction=vertical]:flex-col",
      e
    ),
    ...t
  }
), mn = ze.Panel, pn = ({
  withHandle: e,
  className: t,
  ...a
}) => /* @__PURE__ */ r.jsx(
  ze.PanelResizeHandle,
  {
    className: s(
      "relative flex w-px items-center justify-center bg-border after:absolute after:inset-y-0 after:left-1/2 after:w-1 after:-translate-x-1/2 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring focus-visible:ring-offset-1 data-[panel-group-direction=vertical]:h-px data-[panel-group-direction=vertical]:w-full data-[panel-group-direction=vertical]:after:left-0 data-[panel-group-direction=vertical]:after:h-1 data-[panel-group-direction=vertical]:after:w-full data-[panel-group-direction=vertical]:after:-translate-y-1/2 data-[panel-group-direction=vertical]:after:translate-x-0 [&[data-panel-group-direction=vertical]>div]:rotate-90",
      t
    ),
    ...a,
    children: e && /* @__PURE__ */ r.jsx("div", { className: "z-10 flex h-4 w-3 items-center justify-center rounded-sm border bg-border", children: /* @__PURE__ */ r.jsx(ha, { className: "h-2.5 w-2.5" }) })
  }
), Xo = n.forwardRef(({ className: e, ...t }, a) => /* @__PURE__ */ r.jsx(
  Pa,
  {
    ref: a,
    containerClassName: s("flex items-center gap-2", e),
    ...t
  }
));
Xo.displayName = "InputOTP";
const Qo = n.forwardRef(({ className: e, ...t }, a) => /* @__PURE__ */ r.jsx("div", { ref: a, className: s("flex items-center", e), ...t }));
Qo.displayName = "InputOTPGroup";
const Zo = n.forwardRef(({ char: e, hasFakeCaret: t, isActive: a, className: i, ...c }, h) => /* @__PURE__ */ r.jsxs(
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
Zo.displayName = "InputOTPSlot";
const es = n.forwardRef(({ ...e }, t) => /* @__PURE__ */ r.jsx("div", { ref: t, role: "separator", ...e, children: /* @__PURE__ */ r.jsx(Na, {}) }));
es.displayName = "InputOTPSeparator";
const ts = n.forwardRef(({ ...e }, t) => /* @__PURE__ */ r.jsx("nav", { ref: t, "aria-label": "breadcrumb", ...e }));
ts.displayName = "Breadcrumb";
const as = n.forwardRef(({ className: e, ...t }, a) => /* @__PURE__ */ r.jsx(
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
as.displayName = "BreadcrumbList";
const rs = n.forwardRef(({ className: e, ...t }, a) => /* @__PURE__ */ r.jsx(
  "li",
  {
    ref: a,
    className: s("inline-flex items-center gap-1.5", e),
    ...t
  }
));
rs.displayName = "BreadcrumbItem";
const os = n.forwardRef(({ asChild: e, className: t, ...a }, i) => {
  const c = e ? Ae : "a";
  return /* @__PURE__ */ r.jsx(
    c,
    {
      ref: i,
      className: s("transition-colors hover:text-foreground", t),
      ...a
    }
  );
});
os.displayName = "BreadcrumbLink";
const ss = n.forwardRef(({ className: e, ...t }, a) => /* @__PURE__ */ r.jsx(
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
ss.displayName = "BreadcrumbPage";
const ns = ({
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
    children: e || /* @__PURE__ */ r.jsx(ne, {})
  }
);
ns.displayName = "BreadcrumbSeparator";
const is = ({
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
      /* @__PURE__ */ r.jsx(wa, { className: "h-4 w-4" }),
      /* @__PURE__ */ r.jsx("span", { className: "sr-only", children: "More" })
    ]
  }
);
is.displayName = "BreadcrumbElipssis";
export {
  vs as Accordion,
  Ma as AccordionContent,
  Da as AccordionItem,
  Oa as AccordionTrigger,
  Ya as Alert,
  Ua as AlertDescription,
  ys as AlertDialog,
  $a as AlertDialogAction,
  Ba as AlertDialogCancel,
  Fa as AlertDialogContent,
  Ga as AlertDialogDescription,
  La as AlertDialogFooter,
  za as AlertDialogHeader,
  Va as AlertDialogTitle,
  hs as AlertDialogTrigger,
  Ha as AlertTitle,
  Ns as AspectRatio,
  qa as Avatar,
  Ka as AvatarFallback,
  Ja as AvatarImage,
  ws as Badge,
  ts as Breadcrumb,
  is as BreadcrumbEllipsis,
  rs as BreadcrumbItem,
  os as BreadcrumbLink,
  as as BreadcrumbList,
  ss as BreadcrumbPage,
  ns as BreadcrumbSeparator,
  Aa as Button,
  Qa as Calendar,
  Za as Card,
  rr as CardContent,
  ar as CardDescription,
  or as CardFooter,
  er as CardHeader,
  tr as CardTitle,
  sr as Checkbox,
  js as Collapsible,
  Cs as CollapsibleContent,
  Rs as CollapsibleTrigger,
  wt as Command,
  Ss as CommandDialog,
  mr as CommandEmpty,
  pr as CommandGroup,
  ur as CommandInput,
  xr as CommandItem,
  fr as CommandList,
  gr as CommandSeparator,
  br as CommandShortcut,
  _s as ContextMenu,
  wr as ContextMenuCheckboxItem,
  hr as ContextMenuContent,
  Ps as ContextMenuGroup,
  Nr as ContextMenuItem,
  Rr as ContextMenuLabel,
  Is as ContextMenuPortal,
  Ds as ContextMenuRadioGroup,
  jr as ContextMenuRadioItem,
  Cr as ContextMenuSeparator,
  Tr as ContextMenuShortcut,
  Es as ContextMenuSub,
  yr as ContextMenuSubContent,
  vr as ContextMenuSubTrigger,
  ks as ContextMenuTrigger,
  nr as Dialog,
  Nt as DialogContent,
  cr as DialogDescription,
  dr as DialogFooter,
  ir as DialogHeader,
  lr as DialogTitle,
  Ts as DialogTrigger,
  Os as DropdownMenu,
  Ir as DropdownMenuCheckboxItem,
  kr as DropdownMenuContent,
  As as DropdownMenuGroup,
  Pr as DropdownMenuItem,
  Dr as DropdownMenuLabel,
  Fs as DropdownMenuPortal,
  Ls as DropdownMenuRadioGroup,
  Er as DropdownMenuRadioItem,
  Or as DropdownMenuSeparator,
  Mr as DropdownMenuShortcut,
  zs as DropdownMenuSub,
  _r as DropdownMenuSubContent,
  Sr as DropdownMenuSubTrigger,
  Ms as DropdownMenuTrigger,
  Vs as Form,
  Lr as FormControl,
  Vr as FormDescription,
  Gs as FormField,
  Fr as FormItem,
  zr as FormLabel,
  Gr as FormMessage,
  $s as HoverCard,
  $r as HoverCardContent,
  Bs as HoverCardTrigger,
  Br as Input,
  Xo as InputOTP,
  Qo as InputOTPGroup,
  es as InputOTPSeparator,
  Zo as InputOTPSlot,
  jt as Label,
  Wr as Menubar,
  Kr as MenubarCheckboxItem,
  qr as MenubarContent,
  Ys as MenubarGroup,
  Jr as MenubarItem,
  Qr as MenubarLabel,
  Ws as MenubarMenu,
  Hs as MenubarPortal,
  qs as MenubarRadioGroup,
  Xr as MenubarRadioItem,
  Zr as MenubarSeparator,
  eo as MenubarShortcut,
  Us as MenubarSub,
  Ur as MenubarSubContent,
  Hr as MenubarSubTrigger,
  Yr as MenubarTrigger,
  to as NavigationMenu,
  so as NavigationMenuContent,
  no as NavigationMenuIndicator,
  Js as NavigationMenuItem,
  Ks as NavigationMenuLink,
  ao as NavigationMenuList,
  oo as NavigationMenuTrigger,
  Tt as NavigationMenuViewport,
  Xs as Popover,
  io as PopoverContent,
  Qs as PopoverTrigger,
  lo as Progress,
  co as RadioGroup,
  uo as RadioGroupItem,
  pn as ResizableHandle,
  mn as ResizablePanel,
  fn as ResizablePanelGroup,
  fo as ScrollArea,
  St as ScrollBar,
  Zs as Select,
  po as SelectContent,
  en as SelectGroup,
  xo as SelectItem,
  go as SelectLabel,
  bo as SelectSeparator,
  mo as SelectTrigger,
  tn as SelectValue,
  vo as Separator,
  an as Sheet,
  on as SheetClose,
  ho as SheetContent,
  Ro as SheetDescription,
  wo as SheetFooter,
  No as SheetHeader,
  jo as SheetTitle,
  rn as SheetTrigger,
  sn as Skeleton,
  Co as Slider,
  To as Switch,
  So as Table,
  ko as TableBody,
  Oo as TableCaption,
  Do as TableCell,
  Po as TableFooter,
  Eo as TableHead,
  _o as TableHeader,
  Io as TableRow,
  nn as Tabs,
  Fo as TabsContent,
  Mo as TabsList,
  Ao as TabsTrigger,
  zo as Textarea,
  It as Toast,
  Go as ToastAction,
  Et as ToastClose,
  Ot as ToastDescription,
  Lo as ToastProvider,
  Dt as ToastTitle,
  Pt as ToastViewport,
  dn as Toaster,
  Jo as Toggle,
  cn as Tooltip,
  Ko as TooltipContent,
  ln as TooltipProvider,
  un as TooltipTrigger,
  Xa as badgeVariants,
  se as buttonVariants,
  s as cn,
  ro as navigationMenuTriggerStyle,
  Yo as reducer,
  Ho as toast,
  qo as toggleVariants,
  ve as useFormField,
  Uo as useToast
};
