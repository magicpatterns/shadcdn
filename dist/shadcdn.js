import * as s from "react";
import _t from "react";
import * as ee from "@radix-ui/react-accordion";
import { ChevronDown as Ue, ChevronLeft as kt, ChevronRight as se, Check as be, X as qe, Search as Ba, Circle as Re, GripVertical as Va, Dot as $a, MoreHorizontal as Pt, ArrowLeft as Ga, ArrowRight as Ha, PanelLeft as Wa } from "lucide-react";
import { clsx as Ya } from "clsx";
import { twMerge as Ka } from "tailwind-merge";
import * as M from "@radix-ui/react-alert-dialog";
import { Slot as q } from "@radix-ui/react-slot";
import { cva as U } from "class-variance-authority";
import * as Ua from "@radix-ui/react-aspect-ratio";
import * as ne from "@radix-ui/react-avatar";
import { DayPicker as qa } from "react-day-picker";
import * as Ge from "@radix-ui/react-checkbox";
import * as Je from "@radix-ui/react-collapsible";
import { Command as L } from "cmdk";
import * as C from "@radix-ui/react-dialog";
import * as S from "@radix-ui/react-context-menu";
import * as T from "@radix-ui/react-dropdown-menu";
import { FormProvider as Ja, Controller as Xa, useFormContext as Qa } from "react-hook-form";
import * as It from "@radix-ui/react-label";
import * as Ce from "@radix-ui/react-hover-card";
import * as w from "@radix-ui/react-menubar";
import * as B from "@radix-ui/react-navigation-menu";
import * as pe from "@radix-ui/react-popover";
import * as He from "@radix-ui/react-progress";
import * as ge from "@radix-ui/react-radio-group";
import * as Z from "@radix-ui/react-scroll-area";
import * as E from "@radix-ui/react-select";
import * as Et from "@radix-ui/react-separator";
import * as fe from "@radix-ui/react-slider";
import * as We from "@radix-ui/react-switch";
import * as te from "@radix-ui/react-tabs";
import * as H from "@radix-ui/react-toast";
import * as Dt from "@radix-ui/react-toggle";
import * as xe from "@radix-ui/react-tooltip";
import * as Xe from "react-resizable-panels";
import { OTPInput as Za } from "input-otp";
import * as Se from "@radix-ui/react-toggle-group";
import { useTheme as er } from "next-themes";
import { Toaster as tr } from "sonner";
import { Drawer as Y } from "vaul";
import ar from "embla-carousel-react";
import * as Qe from "recharts";
var Ye = { exports: {} }, ce = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Rt;
function rr() {
  if (Rt)
    return ce;
  Rt = 1;
  var t = _t, e = Symbol.for("react.element"), a = Symbol.for("react.fragment"), i = Object.prototype.hasOwnProperty, d = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, u = { key: !0, ref: !0, __self: !0, __source: !0 };
  function p(v, b, m) {
    var R, P = {}, O = null, z = null;
    m !== void 0 && (O = "" + m), b.key !== void 0 && (O = "" + b.key), b.ref !== void 0 && (z = b.ref);
    for (R in b)
      i.call(b, R) && !u.hasOwnProperty(R) && (P[R] = b[R]);
    if (v && v.defaultProps)
      for (R in b = v.defaultProps, b)
        P[R] === void 0 && (P[R] = b[R]);
    return { $$typeof: e, type: v, key: O, ref: z, props: P, _owner: d.current };
  }
  return ce.Fragment = a, ce.jsx = p, ce.jsxs = p, ce;
}
var ue = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ct;
function or() {
  return Ct || (Ct = 1, process.env.NODE_ENV !== "production" && function() {
    var t = _t, e = Symbol.for("react.element"), a = Symbol.for("react.portal"), i = Symbol.for("react.fragment"), d = Symbol.for("react.strict_mode"), u = Symbol.for("react.profiler"), p = Symbol.for("react.provider"), v = Symbol.for("react.context"), b = Symbol.for("react.forward_ref"), m = Symbol.for("react.suspense"), R = Symbol.for("react.suspense_list"), P = Symbol.for("react.memo"), O = Symbol.for("react.lazy"), z = Symbol.for("react.offscreen"), I = Symbol.iterator, V = "@@iterator";
    function $(o) {
      if (o === null || typeof o != "object")
        return null;
      var l = I && o[I] || o[V];
      return typeof l == "function" ? l : null;
    }
    var y = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function g(o) {
      {
        for (var l = arguments.length, c = new Array(l > 1 ? l - 1 : 0), f = 1; f < l; f++)
          c[f - 1] = arguments[f];
        D("error", o, c);
      }
    }
    function D(o, l, c) {
      {
        var f = y.ReactDebugCurrentFrame, N = f.getStackAddendum();
        N !== "" && (l += "%s", c = c.concat([N]));
        var j = c.map(function(h) {
          return String(h);
        });
        j.unshift("Warning: " + l), Function.prototype.apply.call(console[o], console, j);
      }
    }
    var G = !1, J = !1, da = !1, la = !1, ca = !1, et;
    et = Symbol.for("react.module.reference");
    function ua(o) {
      return !!(typeof o == "string" || typeof o == "function" || o === i || o === u || ca || o === d || o === m || o === R || la || o === z || G || J || da || typeof o == "object" && o !== null && (o.$$typeof === O || o.$$typeof === P || o.$$typeof === p || o.$$typeof === v || o.$$typeof === b || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      o.$$typeof === et || o.getModuleId !== void 0));
    }
    function fa(o, l, c) {
      var f = o.displayName;
      if (f)
        return f;
      var N = l.displayName || l.name || "";
      return N !== "" ? c + "(" + N + ")" : c;
    }
    function tt(o) {
      return o.displayName || "Context";
    }
    function K(o) {
      if (o == null)
        return null;
      if (typeof o.tag == "number" && g("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof o == "function")
        return o.displayName || o.name || null;
      if (typeof o == "string")
        return o;
      switch (o) {
        case i:
          return "Fragment";
        case a:
          return "Portal";
        case u:
          return "Profiler";
        case d:
          return "StrictMode";
        case m:
          return "Suspense";
        case R:
          return "SuspenseList";
      }
      if (typeof o == "object")
        switch (o.$$typeof) {
          case v:
            var l = o;
            return tt(l) + ".Consumer";
          case p:
            var c = o;
            return tt(c._context) + ".Provider";
          case b:
            return fa(o, o.render, "ForwardRef");
          case P:
            var f = o.displayName || null;
            return f !== null ? f : K(o.type) || "Memo";
          case O: {
            var N = o, j = N._payload, h = N._init;
            try {
              return K(h(j));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var X = Object.assign, ie = 0, at, rt, ot, st, nt, it, dt;
    function lt() {
    }
    lt.__reactDisabledLog = !0;
    function ma() {
      {
        if (ie === 0) {
          at = console.log, rt = console.info, ot = console.warn, st = console.error, nt = console.group, it = console.groupCollapsed, dt = console.groupEnd;
          var o = {
            configurable: !0,
            enumerable: !0,
            value: lt,
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
        ie++;
      }
    }
    function pa() {
      {
        if (ie--, ie === 0) {
          var o = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: X({}, o, {
              value: at
            }),
            info: X({}, o, {
              value: rt
            }),
            warn: X({}, o, {
              value: ot
            }),
            error: X({}, o, {
              value: st
            }),
            group: X({}, o, {
              value: nt
            }),
            groupCollapsed: X({}, o, {
              value: it
            }),
            groupEnd: X({}, o, {
              value: dt
            })
          });
        }
        ie < 0 && g("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var Ie = y.ReactCurrentDispatcher, Ee;
    function ve(o, l, c) {
      {
        if (Ee === void 0)
          try {
            throw Error();
          } catch (N) {
            var f = N.stack.trim().match(/\n( *(at )?)/);
            Ee = f && f[1] || "";
          }
        return `
` + Ee + o;
      }
    }
    var De = !1, he;
    {
      var ga = typeof WeakMap == "function" ? WeakMap : Map;
      he = new ga();
    }
    function ct(o, l) {
      if (!o || De)
        return "";
      {
        var c = he.get(o);
        if (c !== void 0)
          return c;
      }
      var f;
      De = !0;
      var N = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var j;
      j = Ie.current, Ie.current = null, ma();
      try {
        if (l) {
          var h = function() {
            throw Error();
          };
          if (Object.defineProperty(h.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(h, []);
            } catch (F) {
              f = F;
            }
            Reflect.construct(o, [], h);
          } else {
            try {
              h.call();
            } catch (F) {
              f = F;
            }
            o.call(h.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (F) {
            f = F;
          }
          o();
        }
      } catch (F) {
        if (F && f && typeof F.stack == "string") {
          for (var x = F.stack.split(`
`), A = f.stack.split(`
`), _ = x.length - 1, k = A.length - 1; _ >= 1 && k >= 0 && x[_] !== A[k]; )
            k--;
          for (; _ >= 1 && k >= 0; _--, k--)
            if (x[_] !== A[k]) {
              if (_ !== 1 || k !== 1)
                do
                  if (_--, k--, k < 0 || x[_] !== A[k]) {
                    var W = `
` + x[_].replace(" at new ", " at ");
                    return o.displayName && W.includes("<anonymous>") && (W = W.replace("<anonymous>", o.displayName)), typeof o == "function" && he.set(o, W), W;
                  }
                while (_ >= 1 && k >= 0);
              break;
            }
        }
      } finally {
        De = !1, Ie.current = j, pa(), Error.prepareStackTrace = N;
      }
      var re = o ? o.displayName || o.name : "", Q = re ? ve(re) : "";
      return typeof o == "function" && he.set(o, Q), Q;
    }
    function ba(o, l, c) {
      return ct(o, !1);
    }
    function xa(o) {
      var l = o.prototype;
      return !!(l && l.isReactComponent);
    }
    function ye(o, l, c) {
      if (o == null)
        return "";
      if (typeof o == "function")
        return ct(o, xa(o));
      if (typeof o == "string")
        return ve(o);
      switch (o) {
        case m:
          return ve("Suspense");
        case R:
          return ve("SuspenseList");
      }
      if (typeof o == "object")
        switch (o.$$typeof) {
          case b:
            return ba(o.render);
          case P:
            return ye(o.type, l, c);
          case O: {
            var f = o, N = f._payload, j = f._init;
            try {
              return ye(j(N), l, c);
            } catch {
            }
          }
        }
      return "";
    }
    var de = Object.prototype.hasOwnProperty, ut = {}, ft = y.ReactDebugCurrentFrame;
    function Ne(o) {
      if (o) {
        var l = o._owner, c = ye(o.type, o._source, l ? l.type : null);
        ft.setExtraStackFrame(c);
      } else
        ft.setExtraStackFrame(null);
    }
    function va(o, l, c, f, N) {
      {
        var j = Function.call.bind(de);
        for (var h in o)
          if (j(o, h)) {
            var x = void 0;
            try {
              if (typeof o[h] != "function") {
                var A = Error((f || "React class") + ": " + c + " type `" + h + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof o[h] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw A.name = "Invariant Violation", A;
              }
              x = o[h](l, h, f, c, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (_) {
              x = _;
            }
            x && !(x instanceof Error) && (Ne(N), g("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", f || "React class", c, h, typeof x), Ne(null)), x instanceof Error && !(x.message in ut) && (ut[x.message] = !0, Ne(N), g("Failed %s type: %s", c, x.message), Ne(null));
          }
      }
    }
    var ha = Array.isArray;
    function Me(o) {
      return ha(o);
    }
    function ya(o) {
      {
        var l = typeof Symbol == "function" && Symbol.toStringTag, c = l && o[Symbol.toStringTag] || o.constructor.name || "Object";
        return c;
      }
    }
    function Na(o) {
      try {
        return mt(o), !1;
      } catch {
        return !0;
      }
    }
    function mt(o) {
      return "" + o;
    }
    function pt(o) {
      if (Na(o))
        return g("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", ya(o)), mt(o);
    }
    var le = y.ReactCurrentOwner, wa = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, gt, bt, Oe;
    Oe = {};
    function ja(o) {
      if (de.call(o, "ref")) {
        var l = Object.getOwnPropertyDescriptor(o, "ref").get;
        if (l && l.isReactWarning)
          return !1;
      }
      return o.ref !== void 0;
    }
    function Ra(o) {
      if (de.call(o, "key")) {
        var l = Object.getOwnPropertyDescriptor(o, "key").get;
        if (l && l.isReactWarning)
          return !1;
      }
      return o.key !== void 0;
    }
    function Ca(o, l) {
      if (typeof o.ref == "string" && le.current && l && le.current.stateNode !== l) {
        var c = K(le.current.type);
        Oe[c] || (g('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', K(le.current.type), o.ref), Oe[c] = !0);
      }
    }
    function Sa(o, l) {
      {
        var c = function() {
          gt || (gt = !0, g("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", l));
        };
        c.isReactWarning = !0, Object.defineProperty(o, "key", {
          get: c,
          configurable: !0
        });
      }
    }
    function Ta(o, l) {
      {
        var c = function() {
          bt || (bt = !0, g("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", l));
        };
        c.isReactWarning = !0, Object.defineProperty(o, "ref", {
          get: c,
          configurable: !0
        });
      }
    }
    var _a = function(o, l, c, f, N, j, h) {
      var x = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: e,
        // Built-in properties that belong on the element
        type: o,
        key: l,
        ref: c,
        props: h,
        // Record the component responsible for creating this element.
        _owner: j
      };
      return x._store = {}, Object.defineProperty(x._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(x, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: f
      }), Object.defineProperty(x, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: N
      }), Object.freeze && (Object.freeze(x.props), Object.freeze(x)), x;
    };
    function ka(o, l, c, f, N) {
      {
        var j, h = {}, x = null, A = null;
        c !== void 0 && (pt(c), x = "" + c), Ra(l) && (pt(l.key), x = "" + l.key), ja(l) && (A = l.ref, Ca(l, N));
        for (j in l)
          de.call(l, j) && !wa.hasOwnProperty(j) && (h[j] = l[j]);
        if (o && o.defaultProps) {
          var _ = o.defaultProps;
          for (j in _)
            h[j] === void 0 && (h[j] = _[j]);
        }
        if (x || A) {
          var k = typeof o == "function" ? o.displayName || o.name || "Unknown" : o;
          x && Sa(h, k), A && Ta(h, k);
        }
        return _a(o, x, A, N, f, le.current, h);
      }
    }
    var Ae = y.ReactCurrentOwner, xt = y.ReactDebugCurrentFrame;
    function ae(o) {
      if (o) {
        var l = o._owner, c = ye(o.type, o._source, l ? l.type : null);
        xt.setExtraStackFrame(c);
      } else
        xt.setExtraStackFrame(null);
    }
    var ze;
    ze = !1;
    function Fe(o) {
      return typeof o == "object" && o !== null && o.$$typeof === e;
    }
    function vt() {
      {
        if (Ae.current) {
          var o = K(Ae.current.type);
          if (o)
            return `

Check the render method of \`` + o + "`.";
        }
        return "";
      }
    }
    function Pa(o) {
      {
        if (o !== void 0) {
          var l = o.fileName.replace(/^.*[\\\/]/, ""), c = o.lineNumber;
          return `

Check your code at ` + l + ":" + c + ".";
        }
        return "";
      }
    }
    var ht = {};
    function Ia(o) {
      {
        var l = vt();
        if (!l) {
          var c = typeof o == "string" ? o : o.displayName || o.name;
          c && (l = `

Check the top-level render call using <` + c + ">.");
        }
        return l;
      }
    }
    function yt(o, l) {
      {
        if (!o._store || o._store.validated || o.key != null)
          return;
        o._store.validated = !0;
        var c = Ia(l);
        if (ht[c])
          return;
        ht[c] = !0;
        var f = "";
        o && o._owner && o._owner !== Ae.current && (f = " It was passed a child from " + K(o._owner.type) + "."), ae(o), g('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', c, f), ae(null);
      }
    }
    function Nt(o, l) {
      {
        if (typeof o != "object")
          return;
        if (Me(o))
          for (var c = 0; c < o.length; c++) {
            var f = o[c];
            Fe(f) && yt(f, l);
          }
        else if (Fe(o))
          o._store && (o._store.validated = !0);
        else if (o) {
          var N = $(o);
          if (typeof N == "function" && N !== o.entries)
            for (var j = N.call(o), h; !(h = j.next()).done; )
              Fe(h.value) && yt(h.value, l);
        }
      }
    }
    function Ea(o) {
      {
        var l = o.type;
        if (l == null || typeof l == "string")
          return;
        var c;
        if (typeof l == "function")
          c = l.propTypes;
        else if (typeof l == "object" && (l.$$typeof === b || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        l.$$typeof === P))
          c = l.propTypes;
        else
          return;
        if (c) {
          var f = K(l);
          va(c, o.props, "prop", f, o);
        } else if (l.PropTypes !== void 0 && !ze) {
          ze = !0;
          var N = K(l);
          g("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", N || "Unknown");
        }
        typeof l.getDefaultProps == "function" && !l.getDefaultProps.isReactClassApproved && g("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Da(o) {
      {
        for (var l = Object.keys(o.props), c = 0; c < l.length; c++) {
          var f = l[c];
          if (f !== "children" && f !== "key") {
            ae(o), g("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", f), ae(null);
            break;
          }
        }
        o.ref !== null && (ae(o), g("Invalid attribute `ref` supplied to `React.Fragment`."), ae(null));
      }
    }
    var wt = {};
    function jt(o, l, c, f, N, j) {
      {
        var h = ua(o);
        if (!h) {
          var x = "";
          (o === void 0 || typeof o == "object" && o !== null && Object.keys(o).length === 0) && (x += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var A = Pa(N);
          A ? x += A : x += vt();
          var _;
          o === null ? _ = "null" : Me(o) ? _ = "array" : o !== void 0 && o.$$typeof === e ? (_ = "<" + (K(o.type) || "Unknown") + " />", x = " Did you accidentally export a JSX literal instead of a component?") : _ = typeof o, g("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", _, x);
        }
        var k = ka(o, l, c, N, j);
        if (k == null)
          return k;
        if (h) {
          var W = l.children;
          if (W !== void 0)
            if (f)
              if (Me(W)) {
                for (var re = 0; re < W.length; re++)
                  Nt(W[re], o);
                Object.freeze && Object.freeze(W);
              } else
                g("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Nt(W, o);
        }
        if (de.call(l, "key")) {
          var Q = K(o), F = Object.keys(l).filter(function(La) {
            return La !== "key";
          }), Le = F.length > 0 ? "{key: someKey, " + F.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!wt[Q + Le]) {
            var Fa = F.length > 0 ? "{" + F.join(": ..., ") + ": ...}" : "{}";
            g(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, Le, Q, Fa, Q), wt[Q + Le] = !0;
          }
        }
        return o === i ? Da(k) : Ea(k), k;
      }
    }
    function Ma(o, l, c) {
      return jt(o, l, c, !0);
    }
    function Oa(o, l, c) {
      return jt(o, l, c, !1);
    }
    var Aa = Oa, za = Ma;
    ue.Fragment = i, ue.jsx = Aa, ue.jsxs = za;
  }()), ue;
}
process.env.NODE_ENV === "production" ? Ye.exports = rr() : Ye.exports = or();
var r = Ye.exports;
function n(...t) {
  return Ka(Ya(t));
}
const Jn = ee.Root, sr = s.forwardRef(({ className: t, ...e }, a) => /* @__PURE__ */ r.jsx(
  ee.Item,
  {
    ref: a,
    className: n("border-b", t),
    ...e
  }
));
sr.displayName = "AccordionItem";
const nr = s.forwardRef(({ className: t, children: e, ...a }, i) => /* @__PURE__ */ r.jsx(ee.Header, { className: "flex", children: /* @__PURE__ */ r.jsxs(
  ee.Trigger,
  {
    ref: i,
    className: n(
      "flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180",
      t
    ),
    ...a,
    children: [
      e,
      /* @__PURE__ */ r.jsx(Ue, { className: "h-4 w-4 shrink-0 transition-transform duration-200" })
    ]
  }
) }));
nr.displayName = ee.Trigger.displayName;
const ir = s.forwardRef(({ className: t, children: e, ...a }, i) => /* @__PURE__ */ r.jsx(
  ee.Content,
  {
    ref: i,
    className: n(
      "overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down",
      t
    ),
    ...a,
    children: /* @__PURE__ */ r.jsx("div", { className: "pb-4 pt-0", children: e })
  }
));
ir.displayName = ee.Content.displayName;
const oe = U(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
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
), Te = s.forwardRef(
  ({ className: t, variant: e, size: a, asChild: i = !1, ...d }, u) => {
    const p = i ? q : "button";
    return /* @__PURE__ */ r.jsx(
      p,
      {
        className: n(oe({ variant: e, size: a, className: t })),
        ref: u,
        ...d
      }
    );
  }
);
Te.displayName = "Button";
const Xn = M.Root, Qn = M.Trigger, Mt = ({
  ...t
}) => /* @__PURE__ */ r.jsx(M.Portal, { ...t });
Mt.displayName = M.Portal.displayName;
const Ot = s.forwardRef(({ className: t, ...e }, a) => /* @__PURE__ */ r.jsx(
  M.Overlay,
  {
    className: n(
      "fixed inset-0 z-50 bg-background/80 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      t
    ),
    ...e,
    ref: a
  }
));
Ot.displayName = M.Overlay.displayName;
const dr = s.forwardRef(({ className: t, ...e }, a) => /* @__PURE__ */ r.jsxs(Mt, { children: [
  /* @__PURE__ */ r.jsx(Ot, {}),
  /* @__PURE__ */ r.jsx(
    M.Content,
    {
      ref: a,
      className: n(
        "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg md:w-full",
        t
      ),
      ...e
    }
  )
] }));
dr.displayName = M.Content.displayName;
const lr = ({
  className: t,
  ...e
}) => /* @__PURE__ */ r.jsx(
  "div",
  {
    className: n(
      "flex flex-col space-y-2 text-center sm:text-left",
      t
    ),
    ...e
  }
);
lr.displayName = "AlertDialogHeader";
const cr = ({
  className: t,
  ...e
}) => /* @__PURE__ */ r.jsx(
  "div",
  {
    className: n(
      "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",
      t
    ),
    ...e
  }
);
cr.displayName = "AlertDialogFooter";
const ur = s.forwardRef(({ className: t, ...e }, a) => /* @__PURE__ */ r.jsx(
  M.Title,
  {
    ref: a,
    className: n("text-lg font-semibold", t),
    ...e
  }
));
ur.displayName = M.Title.displayName;
const fr = s.forwardRef(({ className: t, ...e }, a) => /* @__PURE__ */ r.jsx(
  M.Description,
  {
    ref: a,
    className: n("text-sm text-muted-foreground", t),
    ...e
  }
));
fr.displayName = M.Description.displayName;
const mr = s.forwardRef(({ className: t, ...e }, a) => /* @__PURE__ */ r.jsx(
  M.Action,
  {
    ref: a,
    className: n(oe(), t),
    ...e
  }
));
mr.displayName = M.Action.displayName;
const pr = s.forwardRef(({ className: t, ...e }, a) => /* @__PURE__ */ r.jsx(
  M.Cancel,
  {
    ref: a,
    className: n(
      oe({ variant: "outline" }),
      "mt-2 sm:mt-0",
      t
    ),
    ...e
  }
));
pr.displayName = M.Cancel.displayName;
const gr = U(
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
), br = s.forwardRef(({ className: t, variant: e, ...a }, i) => /* @__PURE__ */ r.jsx(
  "div",
  {
    ref: i,
    role: "alert",
    className: n(gr({ variant: e }), t),
    ...a
  }
));
br.displayName = "Alert";
const xr = s.forwardRef(({ className: t, ...e }, a) => /* @__PURE__ */ r.jsx(
  "h5",
  {
    ref: a,
    className: n("mb-1 font-medium leading-none tracking-tight", t),
    ...e
  }
));
xr.displayName = "AlertTitle";
const vr = s.forwardRef(({ className: t, ...e }, a) => /* @__PURE__ */ r.jsx(
  "div",
  {
    ref: a,
    className: n("text-sm [&_p]:leading-relaxed", t),
    ...e
  }
));
vr.displayName = "AlertDescription";
const Zn = Ua.Root, hr = s.forwardRef(({ className: t, ...e }, a) => /* @__PURE__ */ r.jsx(
  ne.Root,
  {
    ref: a,
    className: n(
      "relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full",
      t
    ),
    ...e
  }
));
hr.displayName = ne.Root.displayName;
const yr = s.forwardRef(({ className: t, ...e }, a) => /* @__PURE__ */ r.jsx(
  ne.Image,
  {
    ref: a,
    className: n("aspect-square h-full w-full", t),
    ...e
  }
));
yr.displayName = ne.Image.displayName;
const Nr = s.forwardRef(({ className: t, ...e }, a) => /* @__PURE__ */ r.jsx(
  ne.Fallback,
  {
    ref: a,
    className: n(
      "flex h-full w-full items-center justify-center rounded-full bg-muted",
      t
    ),
    ...e
  }
));
Nr.displayName = ne.Fallback.displayName;
const wr = U(
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
function ei({ className: t, variant: e, ...a }) {
  return /* @__PURE__ */ r.jsx("div", { className: n(wr({ variant: e }), t), ...a });
}
function jr({
  className: t,
  classNames: e,
  showOutsideDays: a = !0,
  ...i
}) {
  return /* @__PURE__ */ r.jsx(
    qa,
    {
      showOutsideDays: a,
      className: n("p-3", t),
      classNames: {
        months: "flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0",
        month: "space-y-4",
        caption: "flex justify-center pt-1 relative items-center",
        caption_label: "text-sm font-medium",
        nav: "space-x-1 flex items-center",
        nav_button: n(
          oe({ variant: "outline" }),
          "h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100"
        ),
        nav_button_previous: "absolute left-1",
        nav_button_next: "absolute right-1",
        table: "w-full border-collapse space-y-1",
        head_row: "flex",
        head_cell: "text-muted-foreground rounded-md w-9 font-normal text-[0.8rem]",
        row: "flex w-full mt-2",
        cell: "text-center text-sm p-0 relative [&:has([aria-selected])]:bg-accent first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20",
        day: n(
          oe({ variant: "ghost" }),
          "h-9 w-9 p-0 font-normal aria-selected:opacity-100"
        ),
        day_selected: "bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground focus:bg-primary focus:text-primary-foreground",
        day_today: "bg-accent text-accent-foreground",
        day_outside: "text-muted-foreground opacity-50",
        day_disabled: "text-muted-foreground opacity-50",
        day_range_middle: "aria-selected:bg-accent aria-selected:text-accent-foreground",
        day_hidden: "invisible",
        ...e
      },
      components: {
        IconLeft: () => /* @__PURE__ */ r.jsx(kt, { className: "h-4 w-4" }),
        IconRight: () => /* @__PURE__ */ r.jsx(se, { className: "h-4 w-4" })
      },
      ...i
    }
  );
}
jr.displayName = "Calendar";
const Rr = s.forwardRef(({ className: t, ...e }, a) => /* @__PURE__ */ r.jsx(
  "div",
  {
    ref: a,
    className: n(
      "rounded-lg border bg-card text-card-foreground shadow-sm",
      t
    ),
    ...e
  }
));
Rr.displayName = "Card";
const Cr = s.forwardRef(({ className: t, ...e }, a) => /* @__PURE__ */ r.jsx(
  "div",
  {
    ref: a,
    className: n("flex flex-col space-y-1.5 p-6", t),
    ...e
  }
));
Cr.displayName = "CardHeader";
const Sr = s.forwardRef(({ className: t, ...e }, a) => /* @__PURE__ */ r.jsx(
  "div",
  {
    ref: a,
    className: n(
      "text-2xl font-semibold leading-none tracking-tight",
      t
    ),
    ...e
  }
));
Sr.displayName = "CardTitle";
const Tr = s.forwardRef(({ className: t, ...e }, a) => /* @__PURE__ */ r.jsx(
  "div",
  {
    ref: a,
    className: n("text-sm text-muted-foreground", t),
    ...e
  }
));
Tr.displayName = "CardDescription";
const _r = s.forwardRef(({ className: t, ...e }, a) => /* @__PURE__ */ r.jsx("div", { ref: a, className: n("p-6 pt-0", t), ...e }));
_r.displayName = "CardContent";
const kr = s.forwardRef(({ className: t, ...e }, a) => /* @__PURE__ */ r.jsx(
  "div",
  {
    ref: a,
    className: n("flex items-center p-6 pt-0", t),
    ...e
  }
));
kr.displayName = "CardFooter";
const Pr = s.forwardRef(({ className: t, ...e }, a) => /* @__PURE__ */ r.jsx(
  Ge.Root,
  {
    ref: a,
    className: n(
      "peer h-4 w-4 shrink-0 rounded-sm border border-primary ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground",
      t
    ),
    ...e,
    children: /* @__PURE__ */ r.jsx(
      Ge.Indicator,
      {
        className: n("flex items-center justify-center text-current"),
        children: /* @__PURE__ */ r.jsx(be, { className: "h-4 w-4" })
      }
    )
  }
));
Pr.displayName = Ge.Root.displayName;
const ti = Je.Root, ai = Je.CollapsibleTrigger, ri = Je.CollapsibleContent, Ir = C.Root, oi = C.Trigger, At = ({ ...t }) => /* @__PURE__ */ r.jsx(C.Portal, { ...t });
At.displayName = C.Portal.displayName;
const zt = s.forwardRef(({ className: t, ...e }, a) => /* @__PURE__ */ r.jsx(
  C.Overlay,
  {
    ref: a,
    className: n(
      "fixed inset-0 z-50 bg-background/80 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      t
    ),
    ...e
  }
));
zt.displayName = C.Overlay.displayName;
const Ft = s.forwardRef(({ className: t, children: e, ...a }, i) => /* @__PURE__ */ r.jsxs(At, { children: [
  /* @__PURE__ */ r.jsx(zt, {}),
  /* @__PURE__ */ r.jsxs(
    C.Content,
    {
      ref: i,
      className: n(
        "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg md:w-full",
        t
      ),
      ...a,
      children: [
        e,
        /* @__PURE__ */ r.jsxs(C.Close, { className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground", children: [
          /* @__PURE__ */ r.jsx(qe, { className: "h-4 w-4" }),
          /* @__PURE__ */ r.jsx("span", { className: "sr-only", children: "Close" })
        ] })
      ]
    }
  )
] }));
Ft.displayName = C.Content.displayName;
const Er = ({
  className: t,
  ...e
}) => /* @__PURE__ */ r.jsx(
  "div",
  {
    className: n(
      "flex flex-col space-y-1.5 text-center sm:text-left",
      t
    ),
    ...e
  }
);
Er.displayName = "DialogHeader";
const Dr = ({
  className: t,
  ...e
}) => /* @__PURE__ */ r.jsx(
  "div",
  {
    className: n(
      "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",
      t
    ),
    ...e
  }
);
Dr.displayName = "DialogFooter";
const Mr = s.forwardRef(({ className: t, ...e }, a) => /* @__PURE__ */ r.jsx(
  C.Title,
  {
    ref: a,
    className: n(
      "text-lg font-semibold leading-none tracking-tight",
      t
    ),
    ...e
  }
));
Mr.displayName = C.Title.displayName;
const Or = s.forwardRef(({ className: t, ...e }, a) => /* @__PURE__ */ r.jsx(
  C.Description,
  {
    ref: a,
    className: n("text-sm text-muted-foreground", t),
    ...e
  }
));
Or.displayName = C.Description.displayName;
const Lt = s.forwardRef(({ className: t, ...e }, a) => /* @__PURE__ */ r.jsx(
  L,
  {
    ref: a,
    className: n(
      "flex h-full w-full flex-col overflow-hidden rounded-md bg-popover text-popover-foreground",
      t
    ),
    ...e
  }
));
Lt.displayName = L.displayName;
const si = ({ children: t, ...e }) => /* @__PURE__ */ r.jsx(Ir, { ...e, children: /* @__PURE__ */ r.jsx(Ft, { className: "overflow-hidden p-0 shadow-lg", children: /* @__PURE__ */ r.jsx(Lt, { className: "[&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground [&_[cmdk-group]:not([hidden])_~[cmdk-group]]:pt-0 [&_[cmdk-group]]:px-2 [&_[cmdk-input-wrapper]_svg]:h-5 [&_[cmdk-input-wrapper]_svg]:w-5 [&_[cmdk-input]]:h-12 [&_[cmdk-item]]:px-2 [&_[cmdk-item]]:py-3 [&_[cmdk-item]_svg]:h-5 [&_[cmdk-item]_svg]:w-5", children: t }) }) }), Ar = s.forwardRef(({ className: t, ...e }, a) => /* @__PURE__ */ r.jsxs("div", { className: "flex items-center border-b px-3", "cmdk-input-wrapper": "", children: [
  /* @__PURE__ */ r.jsx(Ba, { className: "mr-2 h-4 w-4 shrink-0 opacity-50" }),
  /* @__PURE__ */ r.jsx(
    L.Input,
    {
      ref: a,
      className: n(
        "flex h-11 w-full rounded-md bg-transparent py-3 text-sm outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50",
        t
      ),
      ...e
    }
  )
] }));
Ar.displayName = L.Input.displayName;
const zr = s.forwardRef(({ className: t, ...e }, a) => /* @__PURE__ */ r.jsx(
  L.List,
  {
    ref: a,
    className: n("max-h-[300px] overflow-y-auto overflow-x-hidden", t),
    ...e
  }
));
zr.displayName = L.List.displayName;
const Fr = s.forwardRef((t, e) => /* @__PURE__ */ r.jsx(
  L.Empty,
  {
    ref: e,
    className: "py-6 text-center text-sm",
    ...t
  }
));
Fr.displayName = L.Empty.displayName;
const Lr = s.forwardRef(({ className: t, ...e }, a) => /* @__PURE__ */ r.jsx(
  L.Group,
  {
    ref: a,
    className: n(
      "overflow-hidden p-1 text-foreground [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground",
      t
    ),
    ...e
  }
));
Lr.displayName = L.Group.displayName;
const Br = s.forwardRef(({ className: t, ...e }, a) => /* @__PURE__ */ r.jsx(
  L.Separator,
  {
    ref: a,
    className: n("-mx-1 h-px bg-border", t),
    ...e
  }
));
Br.displayName = L.Separator.displayName;
const Vr = s.forwardRef(({ className: t, ...e }, a) => /* @__PURE__ */ r.jsx(
  L.Item,
  {
    ref: a,
    className: n(
      "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none aria-selected:bg-accent aria-selected:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      t
    ),
    ...e
  }
));
Vr.displayName = L.Item.displayName;
const $r = ({
  className: t,
  ...e
}) => /* @__PURE__ */ r.jsx(
  "span",
  {
    className: n(
      "ml-auto text-xs tracking-widest text-muted-foreground",
      t
    ),
    ...e
  }
);
$r.displayName = "CommandShortcut";
const ni = S.Root, ii = S.Trigger, di = S.Group, li = S.Portal, ci = S.Sub, ui = S.RadioGroup, Gr = s.forwardRef(({ className: t, inset: e, children: a, ...i }, d) => /* @__PURE__ */ r.jsxs(
  S.SubTrigger,
  {
    ref: d,
    className: n(
      "flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground",
      e && "pl-8",
      t
    ),
    ...i,
    children: [
      a,
      /* @__PURE__ */ r.jsx(se, { className: "ml-auto h-4 w-4" })
    ]
  }
));
Gr.displayName = S.SubTrigger.displayName;
const Hr = s.forwardRef(({ className: t, ...e }, a) => /* @__PURE__ */ r.jsx(
  S.SubContent,
  {
    ref: a,
    className: n(
      "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      t
    ),
    ...e
  }
));
Hr.displayName = S.SubContent.displayName;
const Wr = s.forwardRef(({ className: t, ...e }, a) => /* @__PURE__ */ r.jsx(S.Portal, { children: /* @__PURE__ */ r.jsx(
  S.Content,
  {
    ref: a,
    className: n(
      "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md animate-in fade-in-80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      t
    ),
    ...e
  }
) }));
Wr.displayName = S.Content.displayName;
const Yr = s.forwardRef(({ className: t, inset: e, ...a }, i) => /* @__PURE__ */ r.jsx(
  S.Item,
  {
    ref: i,
    className: n(
      "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      e && "pl-8",
      t
    ),
    ...a
  }
));
Yr.displayName = S.Item.displayName;
const Kr = s.forwardRef(({ className: t, children: e, checked: a, ...i }, d) => /* @__PURE__ */ r.jsxs(
  S.CheckboxItem,
  {
    ref: d,
    className: n(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      t
    ),
    checked: a,
    ...i,
    children: [
      /* @__PURE__ */ r.jsx("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ r.jsx(S.ItemIndicator, { children: /* @__PURE__ */ r.jsx(be, { className: "h-4 w-4" }) }) }),
      e
    ]
  }
));
Kr.displayName = S.CheckboxItem.displayName;
const Ur = s.forwardRef(({ className: t, children: e, ...a }, i) => /* @__PURE__ */ r.jsxs(
  S.RadioItem,
  {
    ref: i,
    className: n(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      t
    ),
    ...a,
    children: [
      /* @__PURE__ */ r.jsx("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ r.jsx(S.ItemIndicator, { children: /* @__PURE__ */ r.jsx(Re, { className: "h-2 w-2 fill-current" }) }) }),
      e
    ]
  }
));
Ur.displayName = S.RadioItem.displayName;
const qr = s.forwardRef(({ className: t, inset: e, ...a }, i) => /* @__PURE__ */ r.jsx(
  S.Label,
  {
    ref: i,
    className: n(
      "px-2 py-1.5 text-sm font-semibold text-foreground",
      e && "pl-8",
      t
    ),
    ...a
  }
));
qr.displayName = S.Label.displayName;
const Jr = s.forwardRef(({ className: t, ...e }, a) => /* @__PURE__ */ r.jsx(
  S.Separator,
  {
    ref: a,
    className: n("-mx-1 my-1 h-px bg-border", t),
    ...e
  }
));
Jr.displayName = S.Separator.displayName;
const Xr = ({
  className: t,
  ...e
}) => /* @__PURE__ */ r.jsx(
  "span",
  {
    className: n(
      "ml-auto text-xs tracking-widest text-muted-foreground",
      t
    ),
    ...e
  }
);
Xr.displayName = "ContextMenuShortcut";
const fi = T.Root, mi = T.Trigger, pi = T.Group, gi = T.Portal, bi = T.Sub, xi = T.RadioGroup, Qr = s.forwardRef(({ className: t, inset: e, children: a, ...i }, d) => /* @__PURE__ */ r.jsxs(
  T.SubTrigger,
  {
    ref: d,
    className: n(
      "flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent data-[state=open]:bg-accent",
      e && "pl-8",
      t
    ),
    ...i,
    children: [
      a,
      /* @__PURE__ */ r.jsx(se, { className: "ml-auto h-4 w-4" })
    ]
  }
));
Qr.displayName = T.SubTrigger.displayName;
const Zr = s.forwardRef(({ className: t, ...e }, a) => /* @__PURE__ */ r.jsx(
  T.SubContent,
  {
    ref: a,
    className: n(
      "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      t
    ),
    ...e
  }
));
Zr.displayName = T.SubContent.displayName;
const eo = s.forwardRef(({ className: t, sideOffset: e = 4, ...a }, i) => /* @__PURE__ */ r.jsx(T.Portal, { children: /* @__PURE__ */ r.jsx(
  T.Content,
  {
    ref: i,
    sideOffset: e,
    className: n(
      "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      t
    ),
    ...a
  }
) }));
eo.displayName = T.Content.displayName;
const to = s.forwardRef(({ className: t, inset: e, ...a }, i) => /* @__PURE__ */ r.jsx(
  T.Item,
  {
    ref: i,
    className: n(
      "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      e && "pl-8",
      t
    ),
    ...a
  }
));
to.displayName = T.Item.displayName;
const ao = s.forwardRef(({ className: t, children: e, checked: a, ...i }, d) => /* @__PURE__ */ r.jsxs(
  T.CheckboxItem,
  {
    ref: d,
    className: n(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      t
    ),
    checked: a,
    ...i,
    children: [
      /* @__PURE__ */ r.jsx("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ r.jsx(T.ItemIndicator, { children: /* @__PURE__ */ r.jsx(be, { className: "h-4 w-4" }) }) }),
      e
    ]
  }
));
ao.displayName = T.CheckboxItem.displayName;
const ro = s.forwardRef(({ className: t, children: e, ...a }, i) => /* @__PURE__ */ r.jsxs(
  T.RadioItem,
  {
    ref: i,
    className: n(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      t
    ),
    ...a,
    children: [
      /* @__PURE__ */ r.jsx("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ r.jsx(T.ItemIndicator, { children: /* @__PURE__ */ r.jsx(Re, { className: "h-2 w-2 fill-current" }) }) }),
      e
    ]
  }
));
ro.displayName = T.RadioItem.displayName;
const oo = s.forwardRef(({ className: t, inset: e, ...a }, i) => /* @__PURE__ */ r.jsx(
  T.Label,
  {
    ref: i,
    className: n(
      "px-2 py-1.5 text-sm font-semibold",
      e && "pl-8",
      t
    ),
    ...a
  }
));
oo.displayName = T.Label.displayName;
const so = s.forwardRef(({ className: t, ...e }, a) => /* @__PURE__ */ r.jsx(
  T.Separator,
  {
    ref: a,
    className: n("-mx-1 my-1 h-px bg-muted", t),
    ...e
  }
));
so.displayName = T.Separator.displayName;
const no = ({
  className: t,
  ...e
}) => /* @__PURE__ */ r.jsx(
  "span",
  {
    className: n("ml-auto text-xs tracking-widest opacity-60", t),
    ...e
  }
);
no.displayName = "DropdownMenuShortcut";
const io = U(
  "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
), Bt = s.forwardRef(({ className: t, ...e }, a) => /* @__PURE__ */ r.jsx(
  It.Root,
  {
    ref: a,
    className: n(io(), t),
    ...e
  }
));
Bt.displayName = It.Root.displayName;
const vi = Ja, Vt = s.createContext(
  {}
), hi = ({
  ...t
}) => /* @__PURE__ */ r.jsx(Vt.Provider, { value: { name: t.name }, children: /* @__PURE__ */ r.jsx(Xa, { ...t }) }), _e = () => {
  const t = s.useContext(Vt), e = s.useContext($t), { getFieldState: a, formState: i } = Qa(), d = a(t.name, i);
  if (!t)
    throw new Error("useFormField should be used within <FormField>");
  const { id: u } = e;
  return {
    id: u,
    name: t.name,
    formItemId: `${u}-form-item`,
    formDescriptionId: `${u}-form-item-description`,
    formMessageId: `${u}-form-item-message`,
    ...d
  };
}, $t = s.createContext(
  {}
), lo = s.forwardRef(({ className: t, ...e }, a) => {
  const i = s.useId();
  return /* @__PURE__ */ r.jsx($t.Provider, { value: { id: i }, children: /* @__PURE__ */ r.jsx("div", { ref: a, className: n("space-y-2", t), ...e }) });
});
lo.displayName = "FormItem";
const co = s.forwardRef(({ className: t, ...e }, a) => {
  const { error: i, formItemId: d } = _e();
  return /* @__PURE__ */ r.jsx(
    Bt,
    {
      ref: a,
      className: n(i && "text-destructive", t),
      htmlFor: d,
      ...e
    }
  );
});
co.displayName = "FormLabel";
const uo = s.forwardRef(({ ...t }, e) => {
  const { error: a, formItemId: i, formDescriptionId: d, formMessageId: u } = _e();
  return /* @__PURE__ */ r.jsx(
    q,
    {
      ref: e,
      id: i,
      "aria-describedby": a ? `${d} ${u}` : `${d}`,
      "aria-invalid": !!a,
      ...t
    }
  );
});
uo.displayName = "FormControl";
const fo = s.forwardRef(({ className: t, ...e }, a) => {
  const { formDescriptionId: i } = _e();
  return /* @__PURE__ */ r.jsx(
    "p",
    {
      ref: a,
      id: i,
      className: n("text-sm text-muted-foreground", t),
      ...e
    }
  );
});
fo.displayName = "FormDescription";
const mo = s.forwardRef(({ className: t, children: e, ...a }, i) => {
  const { error: d, formMessageId: u } = _e(), p = d ? String(d == null ? void 0 : d.message) : e;
  return p ? /* @__PURE__ */ r.jsx(
    "p",
    {
      ref: i,
      id: u,
      className: n("text-sm font-medium text-destructive", t),
      ...a,
      children: p
    }
  ) : null;
});
mo.displayName = "FormMessage";
const yi = Ce.Root, Ni = Ce.Trigger, po = s.forwardRef(({ className: t, align: e = "center", sideOffset: a = 4, ...i }, d) => /* @__PURE__ */ r.jsx(
  Ce.Content,
  {
    ref: d,
    align: e,
    sideOffset: a,
    className: n(
      "z-50 w-64 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      t
    ),
    ...i
  }
));
po.displayName = Ce.Content.displayName;
const Gt = s.forwardRef(
  ({ className: t, type: e, ...a }, i) => /* @__PURE__ */ r.jsx(
    "input",
    {
      type: e,
      className: n(
        "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
        t
      ),
      ref: i,
      ...a
    }
  )
);
Gt.displayName = "Input";
const wi = w.Menu, ji = w.Group, Ri = w.Portal, Ci = w.Sub, Si = w.RadioGroup, go = s.forwardRef(({ className: t, ...e }, a) => /* @__PURE__ */ r.jsx(
  w.Root,
  {
    ref: a,
    className: n(
      "flex h-10 items-center space-x-1 rounded-md border bg-background p-1",
      t
    ),
    ...e
  }
));
go.displayName = w.Root.displayName;
const bo = s.forwardRef(({ className: t, ...e }, a) => /* @__PURE__ */ r.jsx(
  w.Trigger,
  {
    ref: a,
    className: n(
      "flex cursor-default select-none items-center rounded-sm px-3 py-1.5 text-sm font-medium outline-none focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground",
      t
    ),
    ...e
  }
));
bo.displayName = w.Trigger.displayName;
const xo = s.forwardRef(({ className: t, inset: e, children: a, ...i }, d) => /* @__PURE__ */ r.jsxs(
  w.SubTrigger,
  {
    ref: d,
    className: n(
      "flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground",
      e && "pl-8",
      t
    ),
    ...i,
    children: [
      a,
      /* @__PURE__ */ r.jsx(se, { className: "ml-auto h-4 w-4" })
    ]
  }
));
xo.displayName = w.SubTrigger.displayName;
const vo = s.forwardRef(({ className: t, ...e }, a) => /* @__PURE__ */ r.jsx(
  w.SubContent,
  {
    ref: a,
    className: n(
      "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      t
    ),
    ...e
  }
));
vo.displayName = w.SubContent.displayName;
const ho = s.forwardRef(
  ({ className: t, align: e = "start", alignOffset: a = -4, sideOffset: i = 8, ...d }, u) => /* @__PURE__ */ r.jsx(w.Portal, { children: /* @__PURE__ */ r.jsx(
    w.Content,
    {
      ref: u,
      align: e,
      alignOffset: a,
      sideOffset: i,
      className: n(
        "z-50 min-w-[12rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
        t
      ),
      ...d
    }
  ) })
);
ho.displayName = w.Content.displayName;
const yo = s.forwardRef(({ className: t, inset: e, ...a }, i) => /* @__PURE__ */ r.jsx(
  w.Item,
  {
    ref: i,
    className: n(
      "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      e && "pl-8",
      t
    ),
    ...a
  }
));
yo.displayName = w.Item.displayName;
const No = s.forwardRef(({ className: t, children: e, checked: a, ...i }, d) => /* @__PURE__ */ r.jsxs(
  w.CheckboxItem,
  {
    ref: d,
    className: n(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      t
    ),
    checked: a,
    ...i,
    children: [
      /* @__PURE__ */ r.jsx("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ r.jsx(w.ItemIndicator, { children: /* @__PURE__ */ r.jsx(be, { className: "h-4 w-4" }) }) }),
      e
    ]
  }
));
No.displayName = w.CheckboxItem.displayName;
const wo = s.forwardRef(({ className: t, children: e, ...a }, i) => /* @__PURE__ */ r.jsxs(
  w.RadioItem,
  {
    ref: i,
    className: n(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      t
    ),
    ...a,
    children: [
      /* @__PURE__ */ r.jsx("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ r.jsx(w.ItemIndicator, { children: /* @__PURE__ */ r.jsx(Re, { className: "h-2 w-2 fill-current" }) }) }),
      e
    ]
  }
));
wo.displayName = w.RadioItem.displayName;
const jo = s.forwardRef(({ className: t, inset: e, ...a }, i) => /* @__PURE__ */ r.jsx(
  w.Label,
  {
    ref: i,
    className: n(
      "px-2 py-1.5 text-sm font-semibold",
      e && "pl-8",
      t
    ),
    ...a
  }
));
jo.displayName = w.Label.displayName;
const Ro = s.forwardRef(({ className: t, ...e }, a) => /* @__PURE__ */ r.jsx(
  w.Separator,
  {
    ref: a,
    className: n("-mx-1 my-1 h-px bg-muted", t),
    ...e
  }
));
Ro.displayName = w.Separator.displayName;
const Co = ({
  className: t,
  ...e
}) => /* @__PURE__ */ r.jsx(
  "span",
  {
    className: n(
      "ml-auto text-xs tracking-widest text-muted-foreground",
      t
    ),
    ...e
  }
);
Co.displayname = "MenubarShortcut";
const So = s.forwardRef(({ className: t, children: e, ...a }, i) => /* @__PURE__ */ r.jsxs(
  B.Root,
  {
    ref: i,
    className: n(
      "relative z-10 flex max-w-max flex-1 items-center justify-center",
      t
    ),
    ...a,
    children: [
      e,
      /* @__PURE__ */ r.jsx(Ht, {})
    ]
  }
));
So.displayName = B.Root.displayName;
const To = s.forwardRef(({ className: t, ...e }, a) => /* @__PURE__ */ r.jsx(
  B.List,
  {
    ref: a,
    className: n(
      "group flex flex-1 list-none items-center justify-center space-x-1",
      t
    ),
    ...e
  }
));
To.displayName = B.List.displayName;
const Ti = B.Item, _o = U(
  "group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
), ko = s.forwardRef(({ className: t, children: e, ...a }, i) => /* @__PURE__ */ r.jsxs(
  B.Trigger,
  {
    ref: i,
    className: n(_o(), "group", t),
    ...a,
    children: [
      e,
      " ",
      /* @__PURE__ */ r.jsx(
        Ue,
        {
          className: "relative top-[1px] ml-1 h-3 w-3 transition duration-200 group-data-[state=open]:rotate-180",
          "aria-hidden": "true"
        }
      )
    ]
  }
));
ko.displayName = B.Trigger.displayName;
const Po = s.forwardRef(({ className: t, ...e }, a) => /* @__PURE__ */ r.jsx(
  B.Content,
  {
    ref: a,
    className: n(
      "left-0 top-0 w-full data-[motion^=from-]:animate-in data-[motion^=to-]:animate-out data-[motion^=from-]:fade-in data-[motion^=to-]:fade-out data-[motion=from-end]:slide-in-from-right-52 data-[motion=from-start]:slide-in-from-left-52 data-[motion=to-end]:slide-out-to-right-52 data-[motion=to-start]:slide-out-to-left-52 md:absolute md:w-auto ",
      t
    ),
    ...e
  }
));
Po.displayName = B.Content.displayName;
const _i = B.Link, Ht = s.forwardRef(({ className: t, ...e }, a) => /* @__PURE__ */ r.jsx("div", { className: n("absolute left-0 top-full flex justify-center"), children: /* @__PURE__ */ r.jsx(
  B.Viewport,
  {
    className: n(
      "origin-top-center relative mt-1.5 h-[var(--radix-navigation-menu-viewport-height)] w-full overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-90 md:w-[var(--radix-navigation-menu-viewport-width)]",
      t
    ),
    ref: a,
    ...e
  }
) }));
Ht.displayName = B.Viewport.displayName;
const Io = s.forwardRef(({ className: t, ...e }, a) => /* @__PURE__ */ r.jsx(
  B.Indicator,
  {
    ref: a,
    className: n(
      "top-full z-[1] flex h-1.5 items-end justify-center overflow-hidden data-[state=visible]:animate-in data-[state=hidden]:animate-out data-[state=hidden]:fade-out data-[state=visible]:fade-in",
      t
    ),
    ...e,
    children: /* @__PURE__ */ r.jsx("div", { className: "relative top-[60%] h-2 w-2 rotate-45 rounded-tl-sm bg-border shadow-md" })
  }
));
Io.displayName = B.Indicator.displayName;
const ki = pe.Root, Pi = pe.Trigger, Eo = s.forwardRef(({ className: t, align: e = "center", sideOffset: a = 4, ...i }, d) => /* @__PURE__ */ r.jsx(pe.Portal, { children: /* @__PURE__ */ r.jsx(
  pe.Content,
  {
    ref: d,
    align: e,
    sideOffset: a,
    className: n(
      "z-50 w-72 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      t
    ),
    ...i
  }
) }));
Eo.displayName = pe.Content.displayName;
const Do = s.forwardRef(({ className: t, value: e, ...a }, i) => /* @__PURE__ */ r.jsx(
  He.Root,
  {
    ref: i,
    className: n(
      "relative h-4 w-full overflow-hidden rounded-full bg-secondary",
      t
    ),
    ...a,
    children: /* @__PURE__ */ r.jsx(
      He.Indicator,
      {
        className: "h-full w-full flex-1 bg-primary transition-all",
        style: { transform: `translateX(-${100 - (e || 0)}%)` }
      }
    )
  }
));
Do.displayName = He.Root.displayName;
const Mo = s.forwardRef(({ className: t, ...e }, a) => /* @__PURE__ */ r.jsx(
  ge.Root,
  {
    className: n("grid gap-2", t),
    ...e,
    ref: a
  }
));
Mo.displayName = ge.Root.displayName;
const Oo = s.forwardRef(({ className: t, children: e, ...a }, i) => /* @__PURE__ */ r.jsx(
  ge.Item,
  {
    ref: i,
    className: n(
      "aspect-square h-4 w-4 rounded-full border border-primary text-primary ring-offset-background focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
      t
    ),
    ...a,
    children: /* @__PURE__ */ r.jsx(ge.Indicator, { className: "flex items-center justify-center", children: /* @__PURE__ */ r.jsx(Re, { className: "h-2.5 w-2.5 fill-current text-current" }) })
  }
));
Oo.displayName = ge.Item.displayName;
const Ao = s.forwardRef(({ className: t, children: e, ...a }, i) => /* @__PURE__ */ r.jsxs(
  Z.Root,
  {
    ref: i,
    className: n("relative overflow-hidden", t),
    ...a,
    children: [
      /* @__PURE__ */ r.jsx(Z.Viewport, { className: "h-full w-full rounded-[inherit]", children: e }),
      /* @__PURE__ */ r.jsx(Wt, {}),
      /* @__PURE__ */ r.jsx(Z.Corner, {})
    ]
  }
));
Ao.displayName = Z.Root.displayName;
const Wt = s.forwardRef(({ className: t, orientation: e = "vertical", ...a }, i) => /* @__PURE__ */ r.jsx(
  Z.ScrollAreaScrollbar,
  {
    ref: i,
    orientation: e,
    className: n(
      "flex touch-none select-none transition-colors",
      e === "vertical" && "h-full w-2.5 border-l border-l-transparent p-[1px]",
      e === "horizontal" && "h-2.5 border-t border-t-transparent p-[1px]",
      t
    ),
    ...a,
    children: /* @__PURE__ */ r.jsx(
      Z.ScrollAreaThumb,
      {
        className: n(
          "relative rounded-full bg-border",
          e === "vertical" && "flex-1"
        )
      }
    )
  }
));
Wt.displayName = Z.ScrollAreaScrollbar.displayName;
const Ii = E.Root, Ei = E.Group, Di = E.Value, zo = s.forwardRef(({ className: t, children: e, ...a }, i) => /* @__PURE__ */ r.jsxs(
  E.Trigger,
  {
    ref: i,
    className: n(
      "flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
      t
    ),
    ...a,
    children: [
      e,
      /* @__PURE__ */ r.jsx(E.Icon, { asChild: !0, children: /* @__PURE__ */ r.jsx(Ue, { className: "h-4 w-4 opacity-50" }) })
    ]
  }
));
zo.displayName = E.Trigger.displayName;
const Fo = s.forwardRef(({ className: t, children: e, position: a = "popper", ...i }, d) => /* @__PURE__ */ r.jsx(E.Portal, { children: /* @__PURE__ */ r.jsx(
  E.Content,
  {
    ref: d,
    className: n(
      "relative z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      a === "popper" && "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",
      t
    ),
    position: a,
    ...i,
    children: /* @__PURE__ */ r.jsx(
      E.Viewport,
      {
        className: n(
          "p-1",
          a === "popper" && "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"
        ),
        children: e
      }
    )
  }
) }));
Fo.displayName = E.Content.displayName;
const Lo = s.forwardRef(({ className: t, ...e }, a) => /* @__PURE__ */ r.jsx(
  E.Label,
  {
    ref: a,
    className: n("py-1.5 pl-8 pr-2 text-sm font-semibold", t),
    ...e
  }
));
Lo.displayName = E.Label.displayName;
const Bo = s.forwardRef(({ className: t, children: e, ...a }, i) => /* @__PURE__ */ r.jsxs(
  E.Item,
  {
    ref: i,
    className: n(
      "relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      t
    ),
    ...a,
    children: [
      /* @__PURE__ */ r.jsx("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ r.jsx(E.ItemIndicator, { children: /* @__PURE__ */ r.jsx(be, { className: "h-4 w-4" }) }) }),
      /* @__PURE__ */ r.jsx(E.ItemText, { children: e })
    ]
  }
));
Bo.displayName = E.Item.displayName;
const Vo = s.forwardRef(({ className: t, ...e }, a) => /* @__PURE__ */ r.jsx(
  E.Separator,
  {
    ref: a,
    className: n("-mx-1 my-1 h-px bg-muted", t),
    ...e
  }
));
Vo.displayName = E.Separator.displayName;
const Yt = s.forwardRef(
  ({ className: t, orientation: e = "horizontal", decorative: a = !0, ...i }, d) => /* @__PURE__ */ r.jsx(
    Et.Root,
    {
      ref: d,
      decorative: a,
      orientation: e,
      className: n(
        "shrink-0 bg-border",
        e === "horizontal" ? "h-[1px] w-full" : "h-full w-[1px]",
        t
      ),
      ...i
    }
  )
);
Yt.displayName = Et.Root.displayName;
const $o = C.Root, Mi = C.Trigger, Oi = C.Close, Go = C.Portal, Kt = s.forwardRef(({ className: t, ...e }, a) => /* @__PURE__ */ r.jsx(
  C.Overlay,
  {
    className: n(
      "fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      t
    ),
    ...e,
    ref: a
  }
));
Kt.displayName = C.Overlay.displayName;
const Ho = U(
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
), Ut = s.forwardRef(({ side: t = "right", className: e, children: a, ...i }, d) => /* @__PURE__ */ r.jsxs(Go, { children: [
  /* @__PURE__ */ r.jsx(Kt, {}),
  /* @__PURE__ */ r.jsxs(
    C.Content,
    {
      ref: d,
      className: n(Ho({ side: t }), e),
      ...i,
      children: [
        a,
        /* @__PURE__ */ r.jsxs(C.Close, { className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary", children: [
          /* @__PURE__ */ r.jsx(qe, { className: "h-4 w-4" }),
          /* @__PURE__ */ r.jsx("span", { className: "sr-only", children: "Close" })
        ] })
      ]
    }
  )
] }));
Ut.displayName = C.Content.displayName;
const Wo = ({
  className: t,
  ...e
}) => /* @__PURE__ */ r.jsx(
  "div",
  {
    className: n(
      "flex flex-col space-y-2 text-center sm:text-left",
      t
    ),
    ...e
  }
);
Wo.displayName = "SheetHeader";
const Yo = ({
  className: t,
  ...e
}) => /* @__PURE__ */ r.jsx(
  "div",
  {
    className: n(
      "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",
      t
    ),
    ...e
  }
);
Yo.displayName = "SheetFooter";
const Ko = s.forwardRef(({ className: t, ...e }, a) => /* @__PURE__ */ r.jsx(
  C.Title,
  {
    ref: a,
    className: n("text-lg font-semibold text-foreground", t),
    ...e
  }
));
Ko.displayName = C.Title.displayName;
const Uo = s.forwardRef(({ className: t, ...e }, a) => /* @__PURE__ */ r.jsx(
  C.Description,
  {
    ref: a,
    className: n("text-sm text-muted-foreground", t),
    ...e
  }
));
Uo.displayName = C.Description.displayName;
function St({
  className: t,
  ...e
}) {
  return /* @__PURE__ */ r.jsx(
    "div",
    {
      className: n("animate-pulse rounded-md bg-muted", t),
      ...e
    }
  );
}
const qo = s.forwardRef(({ className: t, ...e }, a) => /* @__PURE__ */ r.jsxs(
  fe.Root,
  {
    ref: a,
    className: n(
      "relative flex w-full touch-none select-none items-center",
      t
    ),
    ...e,
    children: [
      /* @__PURE__ */ r.jsx(fe.Track, { className: "relative h-2 w-full grow overflow-hidden rounded-full bg-secondary", children: /* @__PURE__ */ r.jsx(fe.Range, { className: "absolute h-full bg-primary" }) }),
      /* @__PURE__ */ r.jsx(fe.Thumb, { className: "block h-5 w-5 rounded-full border-2 border-primary bg-background ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50" })
    ]
  }
));
qo.displayName = fe.Root.displayName;
const Jo = s.forwardRef(({ className: t, ...e }, a) => /* @__PURE__ */ r.jsx(
  We.Root,
  {
    className: n(
      "peer inline-flex h-[24px] w-[44px] shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=unchecked]:bg-input",
      t
    ),
    ...e,
    ref: a,
    children: /* @__PURE__ */ r.jsx(
      We.Thumb,
      {
        className: n(
          "pointer-events-none block h-5 w-5 rounded-full bg-background shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0"
        )
      }
    )
  }
));
Jo.displayName = We.Root.displayName;
const Xo = s.forwardRef(({ className: t, ...e }, a) => /* @__PURE__ */ r.jsx("div", { className: "relative w-full overflow-auto", children: /* @__PURE__ */ r.jsx(
  "table",
  {
    ref: a,
    className: n("w-full caption-bottom text-sm", t),
    ...e
  }
) }));
Xo.displayName = "Table";
const Qo = s.forwardRef(({ className: t, ...e }, a) => /* @__PURE__ */ r.jsx("thead", { ref: a, className: n("[&_tr]:border-b", t), ...e }));
Qo.displayName = "TableHeader";
const Zo = s.forwardRef(({ className: t, ...e }, a) => /* @__PURE__ */ r.jsx(
  "tbody",
  {
    ref: a,
    className: n("[&_tr:last-child]:border-0", t),
    ...e
  }
));
Zo.displayName = "TableBody";
const es = s.forwardRef(({ className: t, ...e }, a) => /* @__PURE__ */ r.jsx(
  "tfoot",
  {
    ref: a,
    className: n("bg-primary font-medium text-primary-foreground", t),
    ...e
  }
));
es.displayName = "TableFooter";
const ts = s.forwardRef(({ className: t, ...e }, a) => /* @__PURE__ */ r.jsx(
  "tr",
  {
    ref: a,
    className: n(
      "border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted",
      t
    ),
    ...e
  }
));
ts.displayName = "TableRow";
const as = s.forwardRef(({ className: t, ...e }, a) => /* @__PURE__ */ r.jsx(
  "th",
  {
    ref: a,
    className: n(
      "h-12 px-4 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0",
      t
    ),
    ...e
  }
));
as.displayName = "TableHead";
const rs = s.forwardRef(({ className: t, ...e }, a) => /* @__PURE__ */ r.jsx(
  "td",
  {
    ref: a,
    className: n("p-4 align-middle [&:has([role=checkbox])]:pr-0", t),
    ...e
  }
));
rs.displayName = "TableCell";
const os = s.forwardRef(({ className: t, ...e }, a) => /* @__PURE__ */ r.jsx(
  "caption",
  {
    ref: a,
    className: n("mt-4 text-sm text-muted-foreground", t),
    ...e
  }
));
os.displayName = "TableCaption";
const Ai = te.Root, ss = s.forwardRef(({ className: t, ...e }, a) => /* @__PURE__ */ r.jsx(
  te.List,
  {
    ref: a,
    className: n(
      "inline-flex h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground",
      t
    ),
    ...e
  }
));
ss.displayName = te.List.displayName;
const ns = s.forwardRef(({ className: t, ...e }, a) => /* @__PURE__ */ r.jsx(
  te.Trigger,
  {
    ref: a,
    className: n(
      "inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm",
      t
    ),
    ...e
  }
));
ns.displayName = te.Trigger.displayName;
const is = s.forwardRef(({ className: t, ...e }, a) => /* @__PURE__ */ r.jsx(
  te.Content,
  {
    ref: a,
    className: n(
      "mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
      t
    ),
    ...e
  }
));
is.displayName = te.Content.displayName;
const ds = s.forwardRef(
  ({ className: t, ...e }, a) => /* @__PURE__ */ r.jsx(
    "textarea",
    {
      className: n(
        "flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
        t
      ),
      ref: a,
      ...e
    }
  )
);
ds.displayName = "Textarea";
const ls = H.Provider, qt = s.forwardRef(({ className: t, ...e }, a) => /* @__PURE__ */ r.jsx(
  H.Viewport,
  {
    ref: a,
    className: n(
      "fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]",
      t
    ),
    ...e
  }
));
qt.displayName = H.Viewport.displayName;
const cs = U(
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
), Jt = s.forwardRef(({ className: t, variant: e, ...a }, i) => /* @__PURE__ */ r.jsx(
  H.Root,
  {
    ref: i,
    className: n(cs({ variant: e }), t),
    ...a
  }
));
Jt.displayName = H.Root.displayName;
const us = s.forwardRef(({ className: t, ...e }, a) => /* @__PURE__ */ r.jsx(
  H.Action,
  {
    ref: a,
    className: n(
      "inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium ring-offset-background transition-colors hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 group-[.destructive]:border-muted/40 group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground group-[.destructive]:focus:ring-destructive",
      t
    ),
    ...e
  }
));
us.displayName = H.Action.displayName;
const Xt = s.forwardRef(({ className: t, ...e }, a) => /* @__PURE__ */ r.jsx(
  H.Close,
  {
    ref: a,
    className: n(
      "absolute right-2 top-2 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity hover:text-foreground focus:opacity-100 focus:outline-none focus:ring-2 group-hover:opacity-100 group-[.destructive]:text-red-300 group-[.destructive]:hover:text-red-50 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600",
      t
    ),
    "toast-close": "",
    ...e,
    children: /* @__PURE__ */ r.jsx(qe, { className: "h-4 w-4" })
  }
));
Xt.displayName = H.Close.displayName;
const Qt = s.forwardRef(({ className: t, ...e }, a) => /* @__PURE__ */ r.jsx(
  H.Title,
  {
    ref: a,
    className: n("text-sm font-semibold", t),
    ...e
  }
));
Qt.displayName = H.Title.displayName;
const Zt = s.forwardRef(({ className: t, ...e }, a) => /* @__PURE__ */ r.jsx(
  H.Description,
  {
    ref: a,
    className: n("text-sm opacity-90", t),
    ...e
  }
));
Zt.displayName = H.Description.displayName;
const fs = 1, ms = 1e6;
let Be = 0;
function ps() {
  return Be = (Be + 1) % Number.MAX_VALUE, Be.toString();
}
const Ve = /* @__PURE__ */ new Map(), Tt = (t) => {
  if (Ve.has(t))
    return;
  const e = setTimeout(() => {
    Ve.delete(t), me({
      type: "REMOVE_TOAST",
      toastId: t
    });
  }, ms);
  Ve.set(t, e);
}, gs = (t, e) => {
  switch (e.type) {
    case "ADD_TOAST":
      return {
        ...t,
        toasts: [e.toast, ...t.toasts].slice(0, fs)
      };
    case "UPDATE_TOAST":
      return {
        ...t,
        toasts: t.toasts.map(
          (a) => a.id === e.toast.id ? { ...a, ...e.toast } : a
        )
      };
    case "DISMISS_TOAST": {
      const { toastId: a } = e;
      return a ? Tt(a) : t.toasts.forEach((i) => {
        Tt(i.id);
      }), {
        ...t,
        toasts: t.toasts.map(
          (i) => i.id === a || a === void 0 ? {
            ...i,
            open: !1
          } : i
        )
      };
    }
    case "REMOVE_TOAST":
      return e.toastId === void 0 ? {
        ...t,
        toasts: []
      } : {
        ...t,
        toasts: t.toasts.filter((a) => a.id !== e.toastId)
      };
  }
}, we = [];
let je = { toasts: [] };
function me(t) {
  je = gs(je, t), we.forEach((e) => {
    e(je);
  });
}
function bs({ ...t }) {
  const e = ps(), a = (d) => me({
    type: "UPDATE_TOAST",
    toast: { ...d, id: e }
  }), i = () => me({ type: "DISMISS_TOAST", toastId: e });
  return me({
    type: "ADD_TOAST",
    toast: {
      ...t,
      id: e,
      open: !0,
      onOpenChange: (d) => {
        d || i();
      }
    }
  }), {
    id: e,
    dismiss: i,
    update: a
  };
}
function xs() {
  const [t, e] = s.useState(je);
  return s.useEffect(() => (we.push(e), () => {
    const a = we.indexOf(e);
    a > -1 && we.splice(a, 1);
  }), [t]), {
    ...t,
    toast: bs,
    dismiss: (a) => me({ type: "DISMISS_TOAST", toastId: a })
  };
}
function zi() {
  const { toasts: t } = xs();
  return /* @__PURE__ */ r.jsxs(ls, { children: [
    t.map(function({ id: e, title: a, description: i, action: d, ...u }) {
      return /* @__PURE__ */ r.jsxs(Jt, { ...u, children: [
        /* @__PURE__ */ r.jsxs("div", { className: "grid gap-1", children: [
          a && /* @__PURE__ */ r.jsx(Qt, { children: a }),
          i && /* @__PURE__ */ r.jsx(Zt, { children: i })
        ] }),
        d,
        /* @__PURE__ */ r.jsx(Xt, {})
      ] }, e);
    }),
    /* @__PURE__ */ r.jsx(qt, {})
  ] });
}
const ea = U(
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
), vs = s.forwardRef(({ className: t, variant: e, size: a, ...i }, d) => /* @__PURE__ */ r.jsx(
  Dt.Root,
  {
    ref: d,
    className: n(ea({ variant: e, size: a, className: t })),
    ...i
  }
));
vs.displayName = Dt.Root.displayName;
const hs = xe.Provider, ys = xe.Root, Ns = xe.Trigger, ta = s.forwardRef(({ className: t, sideOffset: e = 4, ...a }, i) => /* @__PURE__ */ r.jsx(
  xe.Content,
  {
    ref: i,
    sideOffset: e,
    className: n(
      "z-50 overflow-hidden rounded-md border bg-popover px-3 py-1.5 text-sm text-popover-foreground shadow-md animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      t
    ),
    ...a
  }
));
ta.displayName = xe.Content.displayName;
const Fi = ({
  className: t,
  ...e
}) => /* @__PURE__ */ r.jsx(
  Xe.PanelGroup,
  {
    className: n(
      "flex h-full w-full data-[panel-group-direction=vertical]:flex-col",
      t
    ),
    ...e
  }
), Li = Xe.Panel, Bi = ({
  withHandle: t,
  className: e,
  ...a
}) => /* @__PURE__ */ r.jsx(
  Xe.PanelResizeHandle,
  {
    className: n(
      "relative flex w-px items-center justify-center bg-border after:absolute after:inset-y-0 after:left-1/2 after:w-1 after:-translate-x-1/2 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring focus-visible:ring-offset-1 data-[panel-group-direction=vertical]:h-px data-[panel-group-direction=vertical]:w-full data-[panel-group-direction=vertical]:after:left-0 data-[panel-group-direction=vertical]:after:h-1 data-[panel-group-direction=vertical]:after:w-full data-[panel-group-direction=vertical]:after:-translate-y-1/2 data-[panel-group-direction=vertical]:after:translate-x-0 [&[data-panel-group-direction=vertical]>div]:rotate-90",
      e
    ),
    ...a,
    children: t && /* @__PURE__ */ r.jsx("div", { className: "z-10 flex h-4 w-3 items-center justify-center rounded-sm border bg-border", children: /* @__PURE__ */ r.jsx(Va, { className: "h-2.5 w-2.5" }) })
  }
), ws = s.forwardRef(({ className: t, ...e }, a) => /* @__PURE__ */ r.jsx(
  Za,
  {
    ref: a,
    containerClassName: n("flex items-center gap-2", t),
    ...e
  }
));
ws.displayName = "InputOTP";
const js = s.forwardRef(({ className: t, ...e }, a) => /* @__PURE__ */ r.jsx("div", { ref: a, className: n("flex items-center", t), ...e }));
js.displayName = "InputOTPGroup";
const Rs = s.forwardRef(({ char: t, hasFakeCaret: e, isActive: a, className: i, ...d }, u) => /* @__PURE__ */ r.jsxs(
  "div",
  {
    ref: u,
    className: n(
      "relative flex h-10 w-10 items-center justify-center border-y border-r border-input text-sm transition-all first:rounded-l-md first:border-l last:rounded-r-md",
      a && "z-10 ring-2 ring-offset-background ring-ring",
      i
    ),
    ...d,
    children: [
      t,
      e && /* @__PURE__ */ r.jsx("div", { className: "pointer-events-none absolute inset-0 flex items-center justify-center", children: /* @__PURE__ */ r.jsx("div", { className: "animate-caret-blink h-4 w-px bg-foreground duration-1000" }) })
    ]
  }
));
Rs.displayName = "InputOTPSlot";
const Cs = s.forwardRef(({ ...t }, e) => /* @__PURE__ */ r.jsx("div", { ref: e, role: "separator", ...t, children: /* @__PURE__ */ r.jsx($a, {}) }));
Cs.displayName = "InputOTPSeparator";
const Ss = s.forwardRef(({ ...t }, e) => /* @__PURE__ */ r.jsx("nav", { ref: e, "aria-label": "breadcrumb", ...t }));
Ss.displayName = "Breadcrumb";
const Ts = s.forwardRef(({ className: t, ...e }, a) => /* @__PURE__ */ r.jsx(
  "ol",
  {
    ref: a,
    className: n(
      "flex flex-wrap items-center gap-1.5 break-words text-sm text-muted-foreground sm:gap-2.5",
      t
    ),
    ...e
  }
));
Ts.displayName = "BreadcrumbList";
const _s = s.forwardRef(({ className: t, ...e }, a) => /* @__PURE__ */ r.jsx(
  "li",
  {
    ref: a,
    className: n("inline-flex items-center gap-1.5", t),
    ...e
  }
));
_s.displayName = "BreadcrumbItem";
const ks = s.forwardRef(({ asChild: t, className: e, ...a }, i) => {
  const d = t ? q : "a";
  return /* @__PURE__ */ r.jsx(
    d,
    {
      ref: i,
      className: n("transition-colors hover:text-foreground", e),
      ...a
    }
  );
});
ks.displayName = "BreadcrumbLink";
const Ps = s.forwardRef(({ className: t, ...e }, a) => /* @__PURE__ */ r.jsx(
  "span",
  {
    ref: a,
    role: "link",
    "aria-disabled": "true",
    "aria-current": "page",
    className: n("font-normal text-foreground", t),
    ...e
  }
));
Ps.displayName = "BreadcrumbPage";
const Is = ({
  children: t,
  className: e,
  ...a
}) => /* @__PURE__ */ r.jsx(
  "li",
  {
    role: "presentation",
    "aria-hidden": "true",
    className: n("[&>svg]:size-3.5", e),
    ...a,
    children: t || /* @__PURE__ */ r.jsx(se, {})
  }
);
Is.displayName = "BreadcrumbSeparator";
const Es = ({
  className: t,
  ...e
}) => /* @__PURE__ */ r.jsxs(
  "span",
  {
    role: "presentation",
    "aria-hidden": "true",
    className: n("flex h-9 w-9 items-center justify-center", t),
    ...e,
    children: [
      /* @__PURE__ */ r.jsx(Pt, { className: "h-4 w-4" }),
      /* @__PURE__ */ r.jsx("span", { className: "sr-only", children: "More" })
    ]
  }
);
Es.displayName = "BreadcrumbElipssis";
const aa = s.createContext({
  size: "default",
  variant: "default"
}), Ds = s.forwardRef(({ className: t, variant: e, size: a, children: i, ...d }, u) => /* @__PURE__ */ r.jsx(
  Se.Root,
  {
    ref: u,
    className: n("flex items-center justify-center gap-1", t),
    ...d,
    children: /* @__PURE__ */ r.jsx(aa.Provider, { value: { variant: e, size: a }, children: i })
  }
));
Ds.displayName = Se.Root.displayName;
const Ms = s.forwardRef(({ className: t, children: e, variant: a, size: i, ...d }, u) => {
  const p = s.useContext(aa);
  return /* @__PURE__ */ r.jsx(
    Se.Item,
    {
      ref: u,
      className: n(
        ea({
          variant: p.variant || a,
          size: p.size || i
        }),
        t
      ),
      ...d,
      children: e
    }
  );
});
Ms.displayName = Se.Item.displayName;
const Vi = ({ ...t }) => {
  const { theme: e = "system" } = er();
  return /* @__PURE__ */ r.jsx(
    tr,
    {
      theme: e,
      className: "toaster group",
      toastOptions: {
        classNames: {
          toast: "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",
          description: "group-[.toast]:text-muted-foreground",
          actionButton: "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
          cancelButton: "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground"
        }
      },
      ...t
    }
  );
}, Os = ({ className: t, ...e }) => /* @__PURE__ */ r.jsx(
  "nav",
  {
    role: "navigation",
    "aria-label": "pagination",
    className: n("mx-auto flex w-full justify-center", t),
    ...e
  }
);
Os.displayName = "Pagination";
const As = s.forwardRef(({ className: t, ...e }, a) => /* @__PURE__ */ r.jsx(
  "ul",
  {
    ref: a,
    className: n("flex flex-row items-center gap-1", t),
    ...e
  }
));
As.displayName = "PaginationContent";
const zs = s.forwardRef(({ className: t, ...e }, a) => /* @__PURE__ */ r.jsx("li", { ref: a, className: n("", t), ...e }));
zs.displayName = "PaginationItem";
const Ze = ({
  className: t,
  isActive: e,
  size: a = "icon",
  ...i
}) => /* @__PURE__ */ r.jsx(
  "a",
  {
    "aria-current": e ? "page" : void 0,
    className: n(
      oe({
        variant: e ? "outline" : "ghost",
        size: a
      }),
      t
    ),
    ...i
  }
);
Ze.displayName = "PaginationLink";
const Fs = ({
  className: t,
  ...e
}) => /* @__PURE__ */ r.jsxs(
  Ze,
  {
    "aria-label": "Go to previous page",
    size: "default",
    className: n("gap-1 pl-2.5", t),
    ...e,
    children: [
      /* @__PURE__ */ r.jsx(kt, { className: "h-4 w-4" }),
      /* @__PURE__ */ r.jsx("span", { children: "Previous" })
    ]
  }
);
Fs.displayName = "PaginationPrevious";
const Ls = ({
  className: t,
  ...e
}) => /* @__PURE__ */ r.jsxs(
  Ze,
  {
    "aria-label": "Go to next page",
    size: "default",
    className: n("gap-1 pr-2.5", t),
    ...e,
    children: [
      /* @__PURE__ */ r.jsx("span", { children: "Next" }),
      /* @__PURE__ */ r.jsx(se, { className: "h-4 w-4" })
    ]
  }
);
Ls.displayName = "PaginationNext";
const Bs = ({
  className: t,
  ...e
}) => /* @__PURE__ */ r.jsxs(
  "span",
  {
    "aria-hidden": !0,
    className: n("flex h-9 w-9 items-center justify-center", t),
    ...e,
    children: [
      /* @__PURE__ */ r.jsx(Pt, { className: "h-4 w-4" }),
      /* @__PURE__ */ r.jsx("span", { className: "sr-only", children: "More pages" })
    ]
  }
);
Bs.displayName = "PaginationEllipsis";
const Vs = ({
  shouldScaleBackground: t = !0,
  ...e
}) => /* @__PURE__ */ r.jsx(
  Y.Root,
  {
    shouldScaleBackground: t,
    ...e
  }
);
Vs.displayName = "Drawer";
const $i = Y.Trigger, $s = Y.Portal, Gi = Y.Close, ra = s.forwardRef(({ className: t, ...e }, a) => /* @__PURE__ */ r.jsx(
  Y.Overlay,
  {
    ref: a,
    className: n("fixed inset-0 z-50 bg-black/80", t),
    ...e
  }
));
ra.displayName = Y.Overlay.displayName;
const Gs = s.forwardRef(({ className: t, children: e, ...a }, i) => /* @__PURE__ */ r.jsxs($s, { children: [
  /* @__PURE__ */ r.jsx(ra, {}),
  /* @__PURE__ */ r.jsxs(
    Y.Content,
    {
      ref: i,
      className: n(
        "fixed inset-x-0 bottom-0 z-50 mt-24 flex h-auto flex-col rounded-t-[10px] border bg-background",
        t
      ),
      ...a,
      children: [
        /* @__PURE__ */ r.jsx("div", { className: "mx-auto mt-4 h-2 w-[100px] rounded-full bg-muted" }),
        e
      ]
    }
  )
] }));
Gs.displayName = "DrawerContent";
const Hs = ({
  className: t,
  ...e
}) => /* @__PURE__ */ r.jsx(
  "div",
  {
    className: n("grid gap-1.5 p-4 text-center sm:text-left", t),
    ...e
  }
);
Hs.displayName = "DrawerHeader";
const Ws = ({
  className: t,
  ...e
}) => /* @__PURE__ */ r.jsx(
  "div",
  {
    className: n("mt-auto flex flex-col gap-2 p-4", t),
    ...e
  }
);
Ws.displayName = "DrawerFooter";
const Ys = s.forwardRef(({ className: t, ...e }, a) => /* @__PURE__ */ r.jsx(
  Y.Title,
  {
    ref: a,
    className: n(
      "text-lg font-semibold leading-none tracking-tight",
      t
    ),
    ...e
  }
));
Ys.displayName = Y.Title.displayName;
const Ks = s.forwardRef(({ className: t, ...e }, a) => /* @__PURE__ */ r.jsx(
  Y.Description,
  {
    ref: a,
    className: n("text-sm text-muted-foreground", t),
    ...e
  }
));
Ks.displayName = Y.Description.displayName;
const oa = s.createContext(null);
function ke() {
  const t = s.useContext(oa);
  if (!t)
    throw new Error("useCarousel must be used within a <Carousel />");
  return t;
}
const Us = s.forwardRef(
  ({
    orientation: t = "horizontal",
    opts: e,
    setApi: a,
    plugins: i,
    className: d,
    children: u,
    ...p
  }, v) => {
    const [b, m] = ar(
      {
        ...e,
        axis: t === "horizontal" ? "x" : "y"
      },
      i
    ), [R, P] = s.useState(!1), [O, z] = s.useState(!1), I = s.useCallback((g) => {
      g && (P(g.canScrollPrev()), z(g.canScrollNext()));
    }, []), V = s.useCallback(() => {
      m == null || m.scrollPrev();
    }, [m]), $ = s.useCallback(() => {
      m == null || m.scrollNext();
    }, [m]), y = s.useCallback(
      (g) => {
        g.key === "ArrowLeft" ? (g.preventDefault(), V()) : g.key === "ArrowRight" && (g.preventDefault(), $());
      },
      [V, $]
    );
    return s.useEffect(() => {
      !m || !a || a(m);
    }, [m, a]), s.useEffect(() => {
      if (m)
        return I(m), m.on("reInit", I), m.on("select", I), () => {
          m == null || m.off("select", I);
        };
    }, [m, I]), /* @__PURE__ */ r.jsx(
      oa.Provider,
      {
        value: {
          carouselRef: b,
          api: m,
          opts: e,
          orientation: t || ((e == null ? void 0 : e.axis) === "y" ? "vertical" : "horizontal"),
          scrollPrev: V,
          scrollNext: $,
          canScrollPrev: R,
          canScrollNext: O
        },
        children: /* @__PURE__ */ r.jsx(
          "div",
          {
            ref: v,
            onKeyDownCapture: y,
            className: n("relative", d),
            role: "region",
            "aria-roledescription": "carousel",
            ...p,
            children: u
          }
        )
      }
    );
  }
);
Us.displayName = "Carousel";
const qs = s.forwardRef(({ className: t, ...e }, a) => {
  const { carouselRef: i, orientation: d } = ke();
  return /* @__PURE__ */ r.jsx("div", { ref: i, className: "overflow-hidden", children: /* @__PURE__ */ r.jsx(
    "div",
    {
      ref: a,
      className: n(
        "flex",
        d === "horizontal" ? "-ml-4" : "-mt-4 flex-col",
        t
      ),
      ...e
    }
  ) });
});
qs.displayName = "CarouselContent";
const Js = s.forwardRef(({ className: t, ...e }, a) => {
  const { orientation: i } = ke();
  return /* @__PURE__ */ r.jsx(
    "div",
    {
      ref: a,
      role: "group",
      "aria-roledescription": "slide",
      className: n(
        "min-w-0 shrink-0 grow-0 basis-full",
        i === "horizontal" ? "pl-4" : "pt-4",
        t
      ),
      ...e
    }
  );
});
Js.displayName = "CarouselItem";
const Xs = s.forwardRef(({ className: t, variant: e = "outline", size: a = "icon", ...i }, d) => {
  const { orientation: u, scrollPrev: p, canScrollPrev: v } = ke();
  return /* @__PURE__ */ r.jsxs(
    Te,
    {
      ref: d,
      variant: e,
      size: a,
      className: n(
        "absolute  h-8 w-8 rounded-full",
        u === "horizontal" ? "-left-12 top-1/2 -translate-y-1/2" : "-top-12 left-1/2 -translate-x-1/2 rotate-90",
        t
      ),
      disabled: !v,
      onClick: p,
      ...i,
      children: [
        /* @__PURE__ */ r.jsx(Ga, { className: "h-4 w-4" }),
        /* @__PURE__ */ r.jsx("span", { className: "sr-only", children: "Previous slide" })
      ]
    }
  );
});
Xs.displayName = "CarouselPrevious";
const Qs = s.forwardRef(({ className: t, variant: e = "outline", size: a = "icon", ...i }, d) => {
  const { orientation: u, scrollNext: p, canScrollNext: v } = ke();
  return /* @__PURE__ */ r.jsxs(
    Te,
    {
      ref: d,
      variant: e,
      size: a,
      className: n(
        "absolute h-8 w-8 rounded-full",
        u === "horizontal" ? "-right-12 top-1/2 -translate-y-1/2" : "-bottom-12 left-1/2 -translate-x-1/2 rotate-90",
        t
      ),
      disabled: !v,
      onClick: p,
      ...i,
      children: [
        /* @__PURE__ */ r.jsx(Ha, { className: "h-4 w-4" }),
        /* @__PURE__ */ r.jsx("span", { className: "sr-only", children: "Next slide" })
      ]
    }
  );
});
Qs.displayName = "CarouselNext";
const $e = 768;
function Zs() {
  const [t, e] = s.useState(
    void 0
  );
  return s.useEffect(() => {
    const a = window.matchMedia(`(max-width: ${$e - 1}px)`), i = () => {
      e(window.innerWidth < $e);
    };
    return a.addEventListener("change", i), e(window.innerWidth < $e), () => a.removeEventListener("change", i);
  }, []), !!t;
}
const en = "sidebar:state", tn = 60 * 60 * 24 * 7, an = "16rem", rn = "18rem", on = "3rem", sn = "b", sa = s.createContext(null);
function Pe() {
  const t = s.useContext(sa);
  if (!t)
    throw new Error("useSidebar must be used within a SidebarProvider.");
  return t;
}
const nn = s.forwardRef(
  ({
    defaultOpen: t = !0,
    open: e,
    onOpenChange: a,
    className: i,
    style: d,
    children: u,
    ...p
  }, v) => {
    const b = Zs(), [m, R] = s.useState(!1), [P, O] = s.useState(t), z = e ?? P, I = s.useCallback(
      (g) => {
        const D = typeof g == "function" ? g(z) : g;
        a ? a(D) : O(D), document.cookie = `${en}=${D}; path=/; max-age=${tn}`;
      },
      [a, z]
    ), V = s.useCallback(() => b ? R((g) => !g) : I((g) => !g), [b, I, R]);
    s.useEffect(() => {
      const g = (D) => {
        D.key === sn && (D.metaKey || D.ctrlKey) && (D.preventDefault(), V());
      };
      return window.addEventListener("keydown", g), () => window.removeEventListener("keydown", g);
    }, [V]);
    const $ = z ? "expanded" : "collapsed", y = s.useMemo(
      () => ({
        state: $,
        open: z,
        setOpen: I,
        isMobile: b,
        openMobile: m,
        setOpenMobile: R,
        toggleSidebar: V
      }),
      [$, z, I, b, m, R, V]
    );
    return /* @__PURE__ */ r.jsx(sa.Provider, { value: y, children: /* @__PURE__ */ r.jsx(hs, { delayDuration: 0, children: /* @__PURE__ */ r.jsx(
      "div",
      {
        style: {
          "--sidebar-width": an,
          "--sidebar-width-icon": on,
          ...d
        },
        className: n(
          "group/sidebar-wrapper flex min-h-svh w-full has-[[data-variant=inset]]:bg-sidebar",
          i
        ),
        ref: v,
        ...p,
        children: u
      }
    ) }) });
  }
);
nn.displayName = "SidebarProvider";
const dn = s.forwardRef(
  ({
    side: t = "left",
    variant: e = "sidebar",
    collapsible: a = "offcanvas",
    className: i,
    children: d,
    ...u
  }, p) => {
    const { isMobile: v, state: b, openMobile: m, setOpenMobile: R } = Pe();
    return a === "none" ? /* @__PURE__ */ r.jsx(
      "div",
      {
        className: n(
          "flex h-full w-[--sidebar-width] flex-col bg-sidebar text-sidebar-foreground",
          i
        ),
        ref: p,
        ...u,
        children: d
      }
    ) : v ? /* @__PURE__ */ r.jsx($o, { open: m, onOpenChange: R, ...u, children: /* @__PURE__ */ r.jsx(
      Ut,
      {
        "data-sidebar": "sidebar",
        "data-mobile": "true",
        className: "w-[--sidebar-width] bg-sidebar p-0 text-sidebar-foreground [&>button]:hidden",
        style: {
          "--sidebar-width": rn
        },
        side: t,
        children: /* @__PURE__ */ r.jsx("div", { className: "flex h-full w-full flex-col", children: d })
      }
    ) }) : /* @__PURE__ */ r.jsxs(
      "div",
      {
        ref: p,
        className: "group peer hidden md:block text-sidebar-foreground",
        "data-state": b,
        "data-collapsible": b === "collapsed" ? a : "",
        "data-variant": e,
        "data-side": t,
        children: [
          /* @__PURE__ */ r.jsx(
            "div",
            {
              className: n(
                "duration-200 relative h-svh w-[--sidebar-width] bg-transparent transition-[width] ease-linear",
                "group-data-[collapsible=offcanvas]:w-0",
                "group-data-[side=right]:rotate-180",
                e === "floating" || e === "inset" ? "group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)_+_theme(spacing.4))]" : "group-data-[collapsible=icon]:w-[--sidebar-width-icon]"
              )
            }
          ),
          /* @__PURE__ */ r.jsx(
            "div",
            {
              className: n(
                "duration-200 fixed inset-y-0 z-10 hidden h-svh w-[--sidebar-width] transition-[left,right,width] ease-linear md:flex",
                t === "left" ? "left-0 group-data-[collapsible=offcanvas]:left-[calc(var(--sidebar-width)*-1)]" : "right-0 group-data-[collapsible=offcanvas]:right-[calc(var(--sidebar-width)*-1)]",
                // Adjust the padding for floating and inset variants.
                e === "floating" || e === "inset" ? "p-2 group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)_+_theme(spacing.4)_+2px)]" : "group-data-[collapsible=icon]:w-[--sidebar-width-icon] group-data-[side=left]:border-r group-data-[side=right]:border-l",
                i
              ),
              ...u,
              children: /* @__PURE__ */ r.jsx(
                "div",
                {
                  "data-sidebar": "sidebar",
                  className: "flex h-full w-full flex-col bg-sidebar group-data-[variant=floating]:rounded-lg group-data-[variant=floating]:border group-data-[variant=floating]:border-sidebar-border group-data-[variant=floating]:shadow",
                  children: d
                }
              )
            }
          )
        ]
      }
    );
  }
);
dn.displayName = "Sidebar";
const ln = s.forwardRef(({ className: t, onClick: e, ...a }, i) => {
  const { toggleSidebar: d } = Pe();
  return /* @__PURE__ */ r.jsxs(
    Te,
    {
      ref: i,
      "data-sidebar": "trigger",
      variant: "ghost",
      size: "icon",
      className: n("h-7 w-7", t),
      onClick: (u) => {
        e == null || e(u), d();
      },
      ...a,
      children: [
        /* @__PURE__ */ r.jsx(Wa, {}),
        /* @__PURE__ */ r.jsx("span", { className: "sr-only", children: "Toggle Sidebar" })
      ]
    }
  );
});
ln.displayName = "SidebarTrigger";
const cn = s.forwardRef(({ className: t, ...e }, a) => {
  const { toggleSidebar: i } = Pe();
  return /* @__PURE__ */ r.jsx(
    "button",
    {
      ref: a,
      "data-sidebar": "rail",
      "aria-label": "Toggle Sidebar",
      tabIndex: -1,
      onClick: i,
      title: "Toggle Sidebar",
      className: n(
        "absolute inset-y-0 z-20 hidden w-4 -translate-x-1/2 transition-all ease-linear after:absolute after:inset-y-0 after:left-1/2 after:w-[2px] hover:after:bg-sidebar-border group-data-[side=left]:-right-4 group-data-[side=right]:left-0 sm:flex",
        "[[data-side=left]_&]:cursor-w-resize [[data-side=right]_&]:cursor-e-resize",
        "[[data-side=left][data-state=collapsed]_&]:cursor-e-resize [[data-side=right][data-state=collapsed]_&]:cursor-w-resize",
        "group-data-[collapsible=offcanvas]:translate-x-0 group-data-[collapsible=offcanvas]:after:left-full group-data-[collapsible=offcanvas]:hover:bg-sidebar",
        "[[data-side=left][data-collapsible=offcanvas]_&]:-right-2",
        "[[data-side=right][data-collapsible=offcanvas]_&]:-left-2",
        t
      ),
      ...e
    }
  );
});
cn.displayName = "SidebarRail";
const un = s.forwardRef(({ className: t, ...e }, a) => /* @__PURE__ */ r.jsx(
  "main",
  {
    ref: a,
    className: n(
      "relative flex min-h-svh flex-1 flex-col bg-background",
      "peer-data-[variant=inset]:min-h-[calc(100svh-theme(spacing.4))] md:peer-data-[variant=inset]:m-2 md:peer-data-[state=collapsed]:peer-data-[variant=inset]:ml-2 md:peer-data-[variant=inset]:ml-0 md:peer-data-[variant=inset]:rounded-xl md:peer-data-[variant=inset]:shadow",
      t
    ),
    ...e
  }
));
un.displayName = "SidebarInset";
const fn = s.forwardRef(({ className: t, ...e }, a) => /* @__PURE__ */ r.jsx(
  Gt,
  {
    ref: a,
    "data-sidebar": "input",
    className: n(
      "h-8 w-full bg-background shadow-none focus-visible:ring-2 focus-visible:ring-sidebar-ring",
      t
    ),
    ...e
  }
));
fn.displayName = "SidebarInput";
const mn = s.forwardRef(({ className: t, ...e }, a) => /* @__PURE__ */ r.jsx(
  "div",
  {
    ref: a,
    "data-sidebar": "header",
    className: n("flex flex-col gap-2 p-2", t),
    ...e
  }
));
mn.displayName = "SidebarHeader";
const pn = s.forwardRef(({ className: t, ...e }, a) => /* @__PURE__ */ r.jsx(
  "div",
  {
    ref: a,
    "data-sidebar": "footer",
    className: n("flex flex-col gap-2 p-2", t),
    ...e
  }
));
pn.displayName = "SidebarFooter";
const gn = s.forwardRef(({ className: t, ...e }, a) => /* @__PURE__ */ r.jsx(
  Yt,
  {
    ref: a,
    "data-sidebar": "separator",
    className: n("mx-2 w-auto bg-sidebar-border", t),
    ...e
  }
));
gn.displayName = "SidebarSeparator";
const bn = s.forwardRef(({ className: t, ...e }, a) => /* @__PURE__ */ r.jsx(
  "div",
  {
    ref: a,
    "data-sidebar": "content",
    className: n(
      "flex min-h-0 flex-1 flex-col gap-2 overflow-auto group-data-[collapsible=icon]:overflow-hidden",
      t
    ),
    ...e
  }
));
bn.displayName = "SidebarContent";
const xn = s.forwardRef(({ className: t, ...e }, a) => /* @__PURE__ */ r.jsx(
  "div",
  {
    ref: a,
    "data-sidebar": "group",
    className: n("relative flex w-full min-w-0 flex-col p-2", t),
    ...e
  }
));
xn.displayName = "SidebarGroup";
const vn = s.forwardRef(({ className: t, asChild: e = !1, ...a }, i) => {
  const d = e ? q : "div";
  return /* @__PURE__ */ r.jsx(
    d,
    {
      ref: i,
      "data-sidebar": "group-label",
      className: n(
        "duration-200 flex h-8 shrink-0 items-center rounded-md px-2 text-xs font-medium text-sidebar-foreground/70 outline-none ring-sidebar-ring transition-[margin,opa] ease-linear focus-visible:ring-2 [&>svg]:size-4 [&>svg]:shrink-0",
        "group-data-[collapsible=icon]:-mt-8 group-data-[collapsible=icon]:opacity-0",
        t
      ),
      ...a
    }
  );
});
vn.displayName = "SidebarGroupLabel";
const hn = s.forwardRef(({ className: t, asChild: e = !1, ...a }, i) => {
  const d = e ? q : "button";
  return /* @__PURE__ */ r.jsx(
    d,
    {
      ref: i,
      "data-sidebar": "group-action",
      className: n(
        "absolute right-3 top-3.5 flex aspect-square w-5 items-center justify-center rounded-md p-0 text-sidebar-foreground outline-none ring-sidebar-ring transition-transform hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 [&>svg]:size-4 [&>svg]:shrink-0",
        // Increases the hit area of the button on mobile.
        "after:absolute after:-inset-2 after:md:hidden",
        "group-data-[collapsible=icon]:hidden",
        t
      ),
      ...a
    }
  );
});
hn.displayName = "SidebarGroupAction";
const yn = s.forwardRef(({ className: t, ...e }, a) => /* @__PURE__ */ r.jsx(
  "div",
  {
    ref: a,
    "data-sidebar": "group-content",
    className: n("w-full text-sm", t),
    ...e
  }
));
yn.displayName = "SidebarGroupContent";
const Nn = s.forwardRef(({ className: t, ...e }, a) => /* @__PURE__ */ r.jsx(
  "ul",
  {
    ref: a,
    "data-sidebar": "menu",
    className: n("flex w-full min-w-0 flex-col gap-1", t),
    ...e
  }
));
Nn.displayName = "SidebarMenu";
const wn = s.forwardRef(({ className: t, ...e }, a) => /* @__PURE__ */ r.jsx(
  "li",
  {
    ref: a,
    "data-sidebar": "menu-item",
    className: n("group/menu-item relative", t),
    ...e
  }
));
wn.displayName = "SidebarMenuItem";
const jn = U(
  "peer/menu-button flex w-full items-center gap-2 overflow-hidden rounded-md p-2 text-left text-sm outline-none ring-sidebar-ring transition-[width,height,padding] hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 active:bg-sidebar-accent active:text-sidebar-accent-foreground disabled:pointer-events-none disabled:opacity-50 group-has-[[data-sidebar=menu-action]]/menu-item:pr-8 aria-disabled:pointer-events-none aria-disabled:opacity-50 data-[active=true]:bg-sidebar-accent data-[active=true]:font-medium data-[active=true]:text-sidebar-accent-foreground data-[state=open]:hover:bg-sidebar-accent data-[state=open]:hover:text-sidebar-accent-foreground group-data-[collapsible=icon]:!size-8 group-data-[collapsible=icon]:!p-2 [&>span:last-child]:truncate [&>svg]:size-4 [&>svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "hover:bg-sidebar-accent hover:text-sidebar-accent-foreground",
        outline: "bg-background shadow-[0_0_0_1px_hsl(var(--sidebar-border))] hover:bg-sidebar-accent hover:text-sidebar-accent-foreground hover:shadow-[0_0_0_1px_hsl(var(--sidebar-accent))]"
      },
      size: {
        default: "h-8 text-sm",
        sm: "h-7 text-xs",
        lg: "h-12 text-sm group-data-[collapsible=icon]:!p-0"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
), Rn = s.forwardRef(
  ({
    asChild: t = !1,
    isActive: e = !1,
    variant: a = "default",
    size: i = "default",
    tooltip: d,
    className: u,
    ...p
  }, v) => {
    const b = t ? q : "button", { isMobile: m, state: R } = Pe(), P = /* @__PURE__ */ r.jsx(
      b,
      {
        ref: v,
        "data-sidebar": "menu-button",
        "data-size": i,
        "data-active": e,
        className: n(jn({ variant: a, size: i }), u),
        ...p
      }
    );
    return d ? (typeof d == "string" && (d = {
      children: d
    }), /* @__PURE__ */ r.jsxs(ys, { children: [
      /* @__PURE__ */ r.jsx(Ns, { asChild: !0, children: P }),
      /* @__PURE__ */ r.jsx(
        ta,
        {
          side: "right",
          align: "center",
          hidden: R !== "collapsed" || m,
          ...d
        }
      )
    ] })) : P;
  }
);
Rn.displayName = "SidebarMenuButton";
const Cn = s.forwardRef(({ className: t, asChild: e = !1, showOnHover: a = !1, ...i }, d) => {
  const u = e ? q : "button";
  return /* @__PURE__ */ r.jsx(
    u,
    {
      ref: d,
      "data-sidebar": "menu-action",
      className: n(
        "absolute right-1 top-1.5 flex aspect-square w-5 items-center justify-center rounded-md p-0 text-sidebar-foreground outline-none ring-sidebar-ring transition-transform hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 peer-hover/menu-button:text-sidebar-accent-foreground [&>svg]:size-4 [&>svg]:shrink-0",
        // Increases the hit area of the button on mobile.
        "after:absolute after:-inset-2 after:md:hidden",
        "peer-data-[size=sm]/menu-button:top-1",
        "peer-data-[size=default]/menu-button:top-1.5",
        "peer-data-[size=lg]/menu-button:top-2.5",
        "group-data-[collapsible=icon]:hidden",
        a && "group-focus-within/menu-item:opacity-100 group-hover/menu-item:opacity-100 data-[state=open]:opacity-100 peer-data-[active=true]/menu-button:text-sidebar-accent-foreground md:opacity-0",
        t
      ),
      ...i
    }
  );
});
Cn.displayName = "SidebarMenuAction";
const Sn = s.forwardRef(({ className: t, ...e }, a) => /* @__PURE__ */ r.jsx(
  "div",
  {
    ref: a,
    "data-sidebar": "menu-badge",
    className: n(
      "absolute right-1 flex h-5 min-w-5 items-center justify-center rounded-md px-1 text-xs font-medium tabular-nums text-sidebar-foreground select-none pointer-events-none",
      "peer-hover/menu-button:text-sidebar-accent-foreground peer-data-[active=true]/menu-button:text-sidebar-accent-foreground",
      "peer-data-[size=sm]/menu-button:top-1",
      "peer-data-[size=default]/menu-button:top-1.5",
      "peer-data-[size=lg]/menu-button:top-2.5",
      "group-data-[collapsible=icon]:hidden",
      t
    ),
    ...e
  }
));
Sn.displayName = "SidebarMenuBadge";
const Tn = s.forwardRef(({ className: t, showIcon: e = !1, ...a }, i) => {
  const d = s.useMemo(() => `${Math.floor(Math.random() * 40) + 50}%`, []);
  return /* @__PURE__ */ r.jsxs(
    "div",
    {
      ref: i,
      "data-sidebar": "menu-skeleton",
      className: n("rounded-md h-8 flex gap-2 px-2 items-center", t),
      ...a,
      children: [
        e && /* @__PURE__ */ r.jsx(
          St,
          {
            className: "size-4 rounded-md",
            "data-sidebar": "menu-skeleton-icon"
          }
        ),
        /* @__PURE__ */ r.jsx(
          St,
          {
            className: "h-4 flex-1 max-w-[--skeleton-width]",
            "data-sidebar": "menu-skeleton-text",
            style: {
              "--skeleton-width": d
            }
          }
        )
      ]
    }
  );
});
Tn.displayName = "SidebarMenuSkeleton";
const _n = s.forwardRef(({ className: t, ...e }, a) => /* @__PURE__ */ r.jsx(
  "ul",
  {
    ref: a,
    "data-sidebar": "menu-sub",
    className: n(
      "mx-3.5 flex min-w-0 translate-x-px flex-col gap-1 border-l border-sidebar-border px-2.5 py-0.5",
      "group-data-[collapsible=icon]:hidden",
      t
    ),
    ...e
  }
));
_n.displayName = "SidebarMenuSub";
const kn = s.forwardRef(({ ...t }, e) => /* @__PURE__ */ r.jsx("li", { ref: e, ...t }));
kn.displayName = "SidebarMenuSubItem";
const Pn = s.forwardRef(({ asChild: t = !1, size: e = "md", isActive: a, className: i, ...d }, u) => {
  const p = t ? q : "a";
  return /* @__PURE__ */ r.jsx(
    p,
    {
      ref: u,
      "data-sidebar": "menu-sub-button",
      "data-size": e,
      "data-active": a,
      className: n(
        "flex h-7 min-w-0 -translate-x-px items-center gap-2 overflow-hidden rounded-md px-2 text-sidebar-foreground outline-none ring-sidebar-ring hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 active:bg-sidebar-accent active:text-sidebar-accent-foreground disabled:pointer-events-none disabled:opacity-50 aria-disabled:pointer-events-none aria-disabled:opacity-50 [&>span:last-child]:truncate [&>svg]:size-4 [&>svg]:shrink-0 [&>svg]:text-sidebar-accent-foreground",
        "data-[active=true]:bg-sidebar-accent data-[active=true]:text-sidebar-accent-foreground",
        e === "sm" && "text-xs",
        e === "md" && "text-sm",
        "group-data-[collapsible=icon]:hidden",
        i
      ),
      ...d
    }
  );
});
Pn.displayName = "SidebarMenuSubButton";
const In = { light: "", dark: ".dark" }, na = s.createContext(null);
function ia() {
  const t = s.useContext(na);
  if (!t)
    throw new Error("useChart must be used within a <ChartContainer />");
  return t;
}
const En = s.forwardRef(({ id: t, className: e, children: a, config: i, ...d }, u) => {
  const p = s.useId(), v = `chart-${t || p.replace(/:/g, "")}`;
  return /* @__PURE__ */ r.jsx(na.Provider, { value: { config: i }, children: /* @__PURE__ */ r.jsxs(
    "div",
    {
      "data-chart": v,
      ref: u,
      className: n(
        "flex aspect-video justify-center text-xs [&_.recharts-cartesian-axis-tick_text]:fill-muted-foreground [&_.recharts-cartesian-grid_line[stroke='#ccc']]:stroke-border/50 [&_.recharts-curve.recharts-tooltip-cursor]:stroke-border [&_.recharts-dot[stroke='#fff']]:stroke-transparent [&_.recharts-layer]:outline-none [&_.recharts-polar-grid_[stroke='#ccc']]:stroke-border [&_.recharts-radial-bar-background-sector]:fill-muted [&_.recharts-rectangle.recharts-tooltip-cursor]:fill-muted [&_.recharts-reference-line_[stroke='#ccc']]:stroke-border [&_.recharts-sector[stroke='#fff']]:stroke-transparent [&_.recharts-sector]:outline-none [&_.recharts-surface]:outline-none",
        e
      ),
      ...d,
      children: [
        /* @__PURE__ */ r.jsx(Dn, { id: v, config: i }),
        /* @__PURE__ */ r.jsx(Qe.ResponsiveContainer, { children: a })
      ]
    }
  ) });
});
En.displayName = "Chart";
const Dn = ({ id: t, config: e }) => {
  const a = Object.entries(e).filter(
    ([, i]) => i.theme || i.color
  );
  return a.length ? /* @__PURE__ */ r.jsx(
    "style",
    {
      dangerouslySetInnerHTML: {
        __html: Object.entries(In).map(
          ([i, d]) => `
${d} [data-chart=${t}] {
${a.map(([u, p]) => {
            var b;
            const v = ((b = p.theme) == null ? void 0 : b[i]) || p.color;
            return v ? `  --color-${u}: ${v};` : null;
          }).join(`
`)}
}
`
        ).join(`
`)
      }
    }
  ) : null;
}, Hi = Qe.Tooltip, Mn = s.forwardRef(
  ({
    active: t,
    payload: e,
    className: a,
    indicator: i = "dot",
    hideLabel: d = !1,
    hideIndicator: u = !1,
    label: p,
    labelFormatter: v,
    labelClassName: b,
    formatter: m,
    color: R,
    nameKey: P,
    labelKey: O
  }, z) => {
    const { config: I } = ia(), V = s.useMemo(() => {
      var J;
      if (d || !(e != null && e.length))
        return null;
      const [y] = e, g = `${O || y.dataKey || y.name || "value"}`, D = Ke(I, y, g), G = !O && typeof p == "string" ? ((J = I[p]) == null ? void 0 : J.label) || p : D == null ? void 0 : D.label;
      return v ? /* @__PURE__ */ r.jsx("div", { className: n("font-medium", b), children: v(G, e) }) : G ? /* @__PURE__ */ r.jsx("div", { className: n("font-medium", b), children: G }) : null;
    }, [
      p,
      v,
      e,
      d,
      b,
      I,
      O
    ]);
    if (!t || !(e != null && e.length))
      return null;
    const $ = e.length === 1 && i !== "dot";
    return /* @__PURE__ */ r.jsxs(
      "div",
      {
        ref: z,
        className: n(
          "grid min-w-[8rem] items-start gap-1.5 rounded-lg border border-border/50 bg-background px-2.5 py-1.5 text-xs shadow-xl",
          a
        ),
        children: [
          $ ? null : V,
          /* @__PURE__ */ r.jsx("div", { className: "grid gap-1.5", children: e.map((y, g) => {
            const D = `${P || y.name || y.dataKey || "value"}`, G = Ke(I, y, D), J = R || y.payload.fill || y.color;
            return /* @__PURE__ */ r.jsx(
              "div",
              {
                className: n(
                  "flex w-full flex-wrap items-stretch gap-2 [&>svg]:h-2.5 [&>svg]:w-2.5 [&>svg]:text-muted-foreground",
                  i === "dot" && "items-center"
                ),
                children: m && (y == null ? void 0 : y.value) !== void 0 && y.name ? m(y.value, y.name, y, g, y.payload) : /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
                  G != null && G.icon ? /* @__PURE__ */ r.jsx(G.icon, {}) : !u && /* @__PURE__ */ r.jsx(
                    "div",
                    {
                      className: n(
                        "shrink-0 rounded-[2px] border-[--color-border] bg-[--color-bg]",
                        {
                          "h-2.5 w-2.5": i === "dot",
                          "w-1": i === "line",
                          "w-0 border-[1.5px] border-dashed bg-transparent": i === "dashed",
                          "my-0.5": $ && i === "dashed"
                        }
                      ),
                      style: {
                        "--color-bg": J,
                        "--color-border": J
                      }
                    }
                  ),
                  /* @__PURE__ */ r.jsxs(
                    "div",
                    {
                      className: n(
                        "flex flex-1 justify-between leading-none",
                        $ ? "items-end" : "items-center"
                      ),
                      children: [
                        /* @__PURE__ */ r.jsxs("div", { className: "grid gap-1.5", children: [
                          $ ? V : null,
                          /* @__PURE__ */ r.jsx("span", { className: "text-muted-foreground", children: (G == null ? void 0 : G.label) || y.name })
                        ] }),
                        y.value && /* @__PURE__ */ r.jsx("span", { className: "font-mono font-medium tabular-nums text-foreground", children: y.value.toLocaleString() })
                      ]
                    }
                  )
                ] })
              },
              y.dataKey
            );
          }) })
        ]
      }
    );
  }
);
Mn.displayName = "ChartTooltip";
const Wi = Qe.Legend, On = s.forwardRef(
  ({ className: t, hideIcon: e = !1, payload: a, verticalAlign: i = "bottom", nameKey: d }, u) => {
    const { config: p } = ia();
    return a != null && a.length ? /* @__PURE__ */ r.jsx(
      "div",
      {
        ref: u,
        className: n(
          "flex items-center justify-center gap-4",
          i === "top" ? "pb-3" : "pt-3",
          t
        ),
        children: a.map((v) => {
          const b = `${d || v.dataKey || "value"}`, m = Ke(p, v, b);
          return /* @__PURE__ */ r.jsxs(
            "div",
            {
              className: n(
                "flex items-center gap-1.5 [&>svg]:h-3 [&>svg]:w-3 [&>svg]:text-muted-foreground"
              ),
              children: [
                m != null && m.icon && !e ? /* @__PURE__ */ r.jsx(m.icon, {}) : /* @__PURE__ */ r.jsx(
                  "div",
                  {
                    className: "h-2 w-2 shrink-0 rounded-[2px]",
                    style: {
                      backgroundColor: v.color
                    }
                  }
                ),
                m == null ? void 0 : m.label
              ]
            },
            v.value
          );
        })
      }
    ) : null;
  }
);
On.displayName = "ChartLegend";
function Ke(t, e, a) {
  if (typeof e != "object" || e === null)
    return;
  const i = "payload" in e && typeof e.payload == "object" && e.payload !== null ? e.payload : void 0;
  let d = a;
  return a in e && typeof e[a] == "string" ? d = e[a] : i && a in i && typeof i[a] == "string" && (d = i[a]), d in t ? t[d] : t[a];
}
export {
  Jn as Accordion,
  ir as AccordionContent,
  sr as AccordionItem,
  nr as AccordionTrigger,
  br as Alert,
  vr as AlertDescription,
  Xn as AlertDialog,
  mr as AlertDialogAction,
  pr as AlertDialogCancel,
  dr as AlertDialogContent,
  fr as AlertDialogDescription,
  cr as AlertDialogFooter,
  lr as AlertDialogHeader,
  ur as AlertDialogTitle,
  Qn as AlertDialogTrigger,
  xr as AlertTitle,
  Zn as AspectRatio,
  hr as Avatar,
  Nr as AvatarFallback,
  yr as AvatarImage,
  ei as Badge,
  Ss as Breadcrumb,
  Es as BreadcrumbEllipsis,
  _s as BreadcrumbItem,
  ks as BreadcrumbLink,
  Ts as BreadcrumbList,
  Ps as BreadcrumbPage,
  Is as BreadcrumbSeparator,
  Te as Button,
  jr as Calendar,
  Rr as Card,
  _r as CardContent,
  Tr as CardDescription,
  kr as CardFooter,
  Cr as CardHeader,
  Sr as CardTitle,
  Us as Carousel,
  qs as CarouselContent,
  Js as CarouselItem,
  Qs as CarouselNext,
  Xs as CarouselPrevious,
  En as ChartContainer,
  Wi as ChartLegend,
  On as ChartLegendContent,
  Dn as ChartStyle,
  Hi as ChartTooltip,
  Mn as ChartTooltipContent,
  Pr as Checkbox,
  ti as Collapsible,
  ri as CollapsibleContent,
  ai as CollapsibleTrigger,
  Lt as Command,
  si as CommandDialog,
  Fr as CommandEmpty,
  Lr as CommandGroup,
  Ar as CommandInput,
  Vr as CommandItem,
  zr as CommandList,
  Br as CommandSeparator,
  $r as CommandShortcut,
  ni as ContextMenu,
  Kr as ContextMenuCheckboxItem,
  Wr as ContextMenuContent,
  di as ContextMenuGroup,
  Yr as ContextMenuItem,
  qr as ContextMenuLabel,
  li as ContextMenuPortal,
  ui as ContextMenuRadioGroup,
  Ur as ContextMenuRadioItem,
  Jr as ContextMenuSeparator,
  Xr as ContextMenuShortcut,
  ci as ContextMenuSub,
  Hr as ContextMenuSubContent,
  Gr as ContextMenuSubTrigger,
  ii as ContextMenuTrigger,
  Ir as Dialog,
  Ft as DialogContent,
  Or as DialogDescription,
  Dr as DialogFooter,
  Er as DialogHeader,
  Mr as DialogTitle,
  oi as DialogTrigger,
  Vs as Drawer,
  Gi as DrawerClose,
  Gs as DrawerContent,
  Ks as DrawerDescription,
  Ws as DrawerFooter,
  Hs as DrawerHeader,
  ra as DrawerOverlay,
  $s as DrawerPortal,
  Ys as DrawerTitle,
  $i as DrawerTrigger,
  fi as DropdownMenu,
  ao as DropdownMenuCheckboxItem,
  eo as DropdownMenuContent,
  pi as DropdownMenuGroup,
  to as DropdownMenuItem,
  oo as DropdownMenuLabel,
  gi as DropdownMenuPortal,
  xi as DropdownMenuRadioGroup,
  ro as DropdownMenuRadioItem,
  so as DropdownMenuSeparator,
  no as DropdownMenuShortcut,
  bi as DropdownMenuSub,
  Zr as DropdownMenuSubContent,
  Qr as DropdownMenuSubTrigger,
  mi as DropdownMenuTrigger,
  vi as Form,
  uo as FormControl,
  fo as FormDescription,
  hi as FormField,
  lo as FormItem,
  co as FormLabel,
  mo as FormMessage,
  yi as HoverCard,
  po as HoverCardContent,
  Ni as HoverCardTrigger,
  Gt as Input,
  ws as InputOTP,
  js as InputOTPGroup,
  Cs as InputOTPSeparator,
  Rs as InputOTPSlot,
  Bt as Label,
  go as Menubar,
  No as MenubarCheckboxItem,
  ho as MenubarContent,
  ji as MenubarGroup,
  yo as MenubarItem,
  jo as MenubarLabel,
  wi as MenubarMenu,
  Ri as MenubarPortal,
  Si as MenubarRadioGroup,
  wo as MenubarRadioItem,
  Ro as MenubarSeparator,
  Co as MenubarShortcut,
  Ci as MenubarSub,
  vo as MenubarSubContent,
  xo as MenubarSubTrigger,
  bo as MenubarTrigger,
  So as NavigationMenu,
  Po as NavigationMenuContent,
  Io as NavigationMenuIndicator,
  Ti as NavigationMenuItem,
  _i as NavigationMenuLink,
  To as NavigationMenuList,
  ko as NavigationMenuTrigger,
  Ht as NavigationMenuViewport,
  Os as Pagination,
  As as PaginationContent,
  Bs as PaginationEllipsis,
  zs as PaginationItem,
  Ze as PaginationLink,
  Ls as PaginationNext,
  Fs as PaginationPrevious,
  ki as Popover,
  Eo as PopoverContent,
  Pi as PopoverTrigger,
  Do as Progress,
  Mo as RadioGroup,
  Oo as RadioGroupItem,
  Bi as ResizableHandle,
  Li as ResizablePanel,
  Fi as ResizablePanelGroup,
  Ao as ScrollArea,
  Wt as ScrollBar,
  Ii as Select,
  Fo as SelectContent,
  Ei as SelectGroup,
  Bo as SelectItem,
  Lo as SelectLabel,
  Vo as SelectSeparator,
  zo as SelectTrigger,
  Di as SelectValue,
  Yt as Separator,
  $o as Sheet,
  Oi as SheetClose,
  Ut as SheetContent,
  Uo as SheetDescription,
  Yo as SheetFooter,
  Wo as SheetHeader,
  Kt as SheetOverlay,
  Go as SheetPortal,
  Ko as SheetTitle,
  Mi as SheetTrigger,
  dn as Sidebar,
  bn as SidebarContent,
  pn as SidebarFooter,
  xn as SidebarGroup,
  hn as SidebarGroupAction,
  yn as SidebarGroupContent,
  vn as SidebarGroupLabel,
  mn as SidebarHeader,
  fn as SidebarInput,
  un as SidebarInset,
  Nn as SidebarMenu,
  Cn as SidebarMenuAction,
  Sn as SidebarMenuBadge,
  Rn as SidebarMenuButton,
  wn as SidebarMenuItem,
  Tn as SidebarMenuSkeleton,
  _n as SidebarMenuSub,
  Pn as SidebarMenuSubButton,
  kn as SidebarMenuSubItem,
  nn as SidebarProvider,
  cn as SidebarRail,
  gn as SidebarSeparator,
  ln as SidebarTrigger,
  St as Skeleton,
  qo as Slider,
  Vi as Sonner,
  Jo as Switch,
  Xo as Table,
  Zo as TableBody,
  os as TableCaption,
  rs as TableCell,
  es as TableFooter,
  as as TableHead,
  Qo as TableHeader,
  ts as TableRow,
  Ai as Tabs,
  is as TabsContent,
  ss as TabsList,
  ns as TabsTrigger,
  ds as Textarea,
  Jt as Toast,
  us as ToastAction,
  Xt as ToastClose,
  Zt as ToastDescription,
  ls as ToastProvider,
  Qt as ToastTitle,
  qt as ToastViewport,
  zi as Toaster,
  vs as Toggle,
  Ds as ToggleGroup,
  Ms as ToggleGroupItem,
  ys as Tooltip,
  ta as TooltipContent,
  hs as TooltipProvider,
  Ns as TooltipTrigger,
  wr as badgeVariants,
  oe as buttonVariants,
  n as cn,
  _o as navigationMenuTriggerStyle,
  gs as reducer,
  bs as toast,
  ea as toggleVariants,
  _e as useFormField,
  Pe as useSidebar,
  xs as useToast
};
