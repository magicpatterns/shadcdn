import * as n from "react";
import ht from "react";
import * as U from "@radix-ui/react-accordion";
import { ChevronDown as Ve, ChevronLeft as Nt, ChevronRight as Z, Check as fe, X as Ge, Search as ka, Circle as he, GripVertical as _a, Dot as Ia, MoreHorizontal as wt, ArrowLeft as Da, ArrowRight as Ea } from "lucide-react";
import { clsx as Oa } from "clsx";
import { twMerge as Ma } from "tailwind-merge";
import * as P from "@radix-ui/react-alert-dialog";
import { Slot as $e } from "@radix-ui/react-slot";
import { cva as B } from "class-variance-authority";
import * as Aa from "@radix-ui/react-aspect-ratio";
import * as ee from "@radix-ui/react-avatar";
import { DayPicker as za } from "react-day-picker";
import * as Ae from "@radix-ui/react-checkbox";
import * as Be from "@radix-ui/react-collapsible";
import { Command as D } from "cmdk";
import * as y from "@radix-ui/react-dialog";
import * as N from "@radix-ui/react-context-menu";
import * as w from "@radix-ui/react-dropdown-menu";
import { FormProvider as Fa, Controller as La, useFormContext as Va } from "react-hook-form";
import * as jt from "@radix-ui/react-label";
import * as Ne from "@radix-ui/react-hover-card";
import * as x from "@radix-ui/react-menubar";
import * as E from "@radix-ui/react-navigation-menu";
import * as ce from "@radix-ui/react-popover";
import * as ze from "@radix-ui/react-progress";
import * as ue from "@radix-ui/react-radio-group";
import * as Y from "@radix-ui/react-scroll-area";
import * as T from "@radix-ui/react-select";
import * as Rt from "@radix-ui/react-separator";
import * as le from "@radix-ui/react-slider";
import * as Fe from "@radix-ui/react-switch";
import * as K from "@radix-ui/react-tabs";
import * as M from "@radix-ui/react-toast";
import * as Ct from "@radix-ui/react-toggle";
import * as me from "@radix-ui/react-tooltip";
import * as He from "react-resizable-panels";
import { OTPInput as Ga } from "input-otp";
import * as we from "@radix-ui/react-toggle-group";
import { useTheme as $a } from "next-themes";
import { Toaster as Ba } from "sonner";
import { Drawer as F } from "vaul";
import Ha from "embla-carousel-react";
var Le = { exports: {} }, ne = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var bt;
function Wa() {
  if (bt)
    return ne;
  bt = 1;
  var e = ht, t = Symbol.for("react.element"), a = Symbol.for("react.fragment"), i = Object.prototype.hasOwnProperty, c = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, p = { key: !0, ref: !0, __self: !0, __source: !0 };
  function C(O, S, b) {
    var k, z = {}, V = null, q = null;
    b !== void 0 && (V = "" + b), S.key !== void 0 && (V = "" + S.key), S.ref !== void 0 && (q = S.ref);
    for (k in S)
      i.call(S, k) && !p.hasOwnProperty(k) && (z[k] = S[k]);
    if (O && O.defaultProps)
      for (k in S = O.defaultProps, S)
        z[k] === void 0 && (z[k] = S[k]);
    return { $$typeof: t, type: O, key: V, ref: q, props: z, _owner: c.current };
  }
  return ne.Fragment = a, ne.jsx = C, ne.jsxs = C, ne;
}
var ie = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var vt;
function Ya() {
  return vt || (vt = 1, process.env.NODE_ENV !== "production" && function() {
    var e = ht, t = Symbol.for("react.element"), a = Symbol.for("react.portal"), i = Symbol.for("react.fragment"), c = Symbol.for("react.strict_mode"), p = Symbol.for("react.profiler"), C = Symbol.for("react.provider"), O = Symbol.for("react.context"), S = Symbol.for("react.forward_ref"), b = Symbol.for("react.suspense"), k = Symbol.for("react.suspense_list"), z = Symbol.for("react.memo"), V = Symbol.for("react.lazy"), q = Symbol.for("react.offscreen"), G = Symbol.iterator, te = "@@iterator";
    function ae(o) {
      if (o === null || typeof o != "object")
        return null;
      var l = G && o[G] || o[te];
      return typeof l == "function" ? l : null;
    }
    var $ = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function h(o) {
      {
        for (var l = arguments.length, d = new Array(l > 1 ? l - 1 : 0), u = 1; u < l; u++)
          d[u - 1] = arguments[u];
        Kt("error", o, d);
      }
    }
    function Kt(o, l, d) {
      {
        var u = $.ReactDebugCurrentFrame, g = u.getStackAddendum();
        g !== "" && (l += "%s", d = d.concat([g]));
        var v = d.map(function(m) {
          return String(m);
        });
        v.unshift("Warning: " + l), Function.prototype.apply.call(console[o], console, v);
      }
    }
    var qt = !1, Jt = !1, Xt = !1, Qt = !1, Zt = !1, Ue;
    Ue = Symbol.for("react.module.reference");
    function ea(o) {
      return !!(typeof o == "string" || typeof o == "function" || o === i || o === p || Zt || o === c || o === b || o === k || Qt || o === q || qt || Jt || Xt || typeof o == "object" && o !== null && (o.$$typeof === V || o.$$typeof === z || o.$$typeof === C || o.$$typeof === O || o.$$typeof === S || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      o.$$typeof === Ue || o.getModuleId !== void 0));
    }
    function ta(o, l, d) {
      var u = o.displayName;
      if (u)
        return u;
      var g = l.displayName || l.name || "";
      return g !== "" ? d + "(" + g + ")" : d;
    }
    function Ke(o) {
      return o.displayName || "Context";
    }
    function L(o) {
      if (o == null)
        return null;
      if (typeof o.tag == "number" && h("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof o == "function")
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
          case O:
            var l = o;
            return Ke(l) + ".Consumer";
          case C:
            var d = o;
            return Ke(d._context) + ".Provider";
          case S:
            return ta(o, o.render, "ForwardRef");
          case z:
            var u = o.displayName || null;
            return u !== null ? u : L(o.type) || "Memo";
          case V: {
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
    var H = Object.assign, re = 0, qe, Je, Xe, Qe, Ze, et, tt;
    function at() {
    }
    at.__reactDisabledLog = !0;
    function aa() {
      {
        if (re === 0) {
          qe = console.log, Je = console.info, Xe = console.warn, Qe = console.error, Ze = console.group, et = console.groupCollapsed, tt = console.groupEnd;
          var o = {
            configurable: !0,
            enumerable: !0,
            value: at,
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
        re++;
      }
    }
    function ra() {
      {
        if (re--, re === 0) {
          var o = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: H({}, o, {
              value: qe
            }),
            info: H({}, o, {
              value: Je
            }),
            warn: H({}, o, {
              value: Xe
            }),
            error: H({}, o, {
              value: Qe
            }),
            group: H({}, o, {
              value: Ze
            }),
            groupCollapsed: H({}, o, {
              value: et
            }),
            groupEnd: H({}, o, {
              value: tt
            })
          });
        }
        re < 0 && h("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var Ce = $.ReactCurrentDispatcher, Te;
    function pe(o, l, d) {
      {
        if (Te === void 0)
          try {
            throw Error();
          } catch (g) {
            var u = g.stack.trim().match(/\n( *(at )?)/);
            Te = u && u[1] || "";
          }
        return `
` + Te + o;
      }
    }
    var Se = !1, ge;
    {
      var oa = typeof WeakMap == "function" ? WeakMap : Map;
      ge = new oa();
    }
    function rt(o, l) {
      if (!o || Se)
        return "";
      {
        var d = ge.get(o);
        if (d !== void 0)
          return d;
      }
      var u;
      Se = !0;
      var g = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var v;
      v = Ce.current, Ce.current = null, aa();
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
            } catch (I) {
              u = I;
            }
            Reflect.construct(o, [], m);
          } else {
            try {
              m.call();
            } catch (I) {
              u = I;
            }
            o.call(m.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (I) {
            u = I;
          }
          o();
        }
      } catch (I) {
        if (I && u && typeof I.stack == "string") {
          for (var f = I.stack.split(`
`), _ = u.stack.split(`
`), j = f.length - 1, R = _.length - 1; j >= 1 && R >= 0 && f[j] !== _[R]; )
            R--;
          for (; j >= 1 && R >= 0; j--, R--)
            if (f[j] !== _[R]) {
              if (j !== 1 || R !== 1)
                do
                  if (j--, R--, R < 0 || f[j] !== _[R]) {
                    var A = `
` + f[j].replace(" at new ", " at ");
                    return o.displayName && A.includes("<anonymous>") && (A = A.replace("<anonymous>", o.displayName)), typeof o == "function" && ge.set(o, A), A;
                  }
                while (j >= 1 && R >= 0);
              break;
            }
        }
      } finally {
        Se = !1, Ce.current = v, ra(), Error.prepareStackTrace = g;
      }
      var X = o ? o.displayName || o.name : "", W = X ? pe(X) : "";
      return typeof o == "function" && ge.set(o, W), W;
    }
    function sa(o, l, d) {
      return rt(o, !1);
    }
    function na(o) {
      var l = o.prototype;
      return !!(l && l.isReactComponent);
    }
    function xe(o, l, d) {
      if (o == null)
        return "";
      if (typeof o == "function")
        return rt(o, na(o));
      if (typeof o == "string")
        return pe(o);
      switch (o) {
        case b:
          return pe("Suspense");
        case k:
          return pe("SuspenseList");
      }
      if (typeof o == "object")
        switch (o.$$typeof) {
          case S:
            return sa(o.render);
          case z:
            return xe(o.type, l, d);
          case V: {
            var u = o, g = u._payload, v = u._init;
            try {
              return xe(v(g), l, d);
            } catch {
            }
          }
        }
      return "";
    }
    var oe = Object.prototype.hasOwnProperty, ot = {}, st = $.ReactDebugCurrentFrame;
    function be(o) {
      if (o) {
        var l = o._owner, d = xe(o.type, o._source, l ? l.type : null);
        st.setExtraStackFrame(d);
      } else
        st.setExtraStackFrame(null);
    }
    function ia(o, l, d, u, g) {
      {
        var v = Function.call.bind(oe);
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
            f && !(f instanceof Error) && (be(g), h("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", u || "React class", d, m, typeof f), be(null)), f instanceof Error && !(f.message in ot) && (ot[f.message] = !0, be(g), h("Failed %s type: %s", d, f.message), be(null));
          }
      }
    }
    var la = Array.isArray;
    function Pe(o) {
      return la(o);
    }
    function da(o) {
      {
        var l = typeof Symbol == "function" && Symbol.toStringTag, d = l && o[Symbol.toStringTag] || o.constructor.name || "Object";
        return d;
      }
    }
    function ca(o) {
      try {
        return nt(o), !1;
      } catch {
        return !0;
      }
    }
    function nt(o) {
      return "" + o;
    }
    function it(o) {
      if (ca(o))
        return h("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", da(o)), nt(o);
    }
    var se = $.ReactCurrentOwner, ua = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, lt, dt, ke;
    ke = {};
    function fa(o) {
      if (oe.call(o, "ref")) {
        var l = Object.getOwnPropertyDescriptor(o, "ref").get;
        if (l && l.isReactWarning)
          return !1;
      }
      return o.ref !== void 0;
    }
    function ma(o) {
      if (oe.call(o, "key")) {
        var l = Object.getOwnPropertyDescriptor(o, "key").get;
        if (l && l.isReactWarning)
          return !1;
      }
      return o.key !== void 0;
    }
    function pa(o, l) {
      if (typeof o.ref == "string" && se.current && l && se.current.stateNode !== l) {
        var d = L(se.current.type);
        ke[d] || (h('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', L(se.current.type), o.ref), ke[d] = !0);
      }
    }
    function ga(o, l) {
      {
        var d = function() {
          lt || (lt = !0, h("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", l));
        };
        d.isReactWarning = !0, Object.defineProperty(o, "key", {
          get: d,
          configurable: !0
        });
      }
    }
    function xa(o, l) {
      {
        var d = function() {
          dt || (dt = !0, h("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", l));
        };
        d.isReactWarning = !0, Object.defineProperty(o, "ref", {
          get: d,
          configurable: !0
        });
      }
    }
    var ba = function(o, l, d, u, g, v, m) {
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
    function va(o, l, d, u, g) {
      {
        var v, m = {}, f = null, _ = null;
        d !== void 0 && (it(d), f = "" + d), ma(l) && (it(l.key), f = "" + l.key), fa(l) && (_ = l.ref, pa(l, g));
        for (v in l)
          oe.call(l, v) && !ua.hasOwnProperty(v) && (m[v] = l[v]);
        if (o && o.defaultProps) {
          var j = o.defaultProps;
          for (v in j)
            m[v] === void 0 && (m[v] = j[v]);
        }
        if (f || _) {
          var R = typeof o == "function" ? o.displayName || o.name || "Unknown" : o;
          f && ga(m, R), _ && xa(m, R);
        }
        return ba(o, f, _, g, u, se.current, m);
      }
    }
    var _e = $.ReactCurrentOwner, ct = $.ReactDebugCurrentFrame;
    function J(o) {
      if (o) {
        var l = o._owner, d = xe(o.type, o._source, l ? l.type : null);
        ct.setExtraStackFrame(d);
      } else
        ct.setExtraStackFrame(null);
    }
    var Ie;
    Ie = !1;
    function De(o) {
      return typeof o == "object" && o !== null && o.$$typeof === t;
    }
    function ut() {
      {
        if (_e.current) {
          var o = L(_e.current.type);
          if (o)
            return `

Check the render method of \`` + o + "`.";
        }
        return "";
      }
    }
    function ya(o) {
      {
        if (o !== void 0) {
          var l = o.fileName.replace(/^.*[\\\/]/, ""), d = o.lineNumber;
          return `

Check your code at ` + l + ":" + d + ".";
        }
        return "";
      }
    }
    var ft = {};
    function ha(o) {
      {
        var l = ut();
        if (!l) {
          var d = typeof o == "string" ? o : o.displayName || o.name;
          d && (l = `

Check the top-level render call using <` + d + ">.");
        }
        return l;
      }
    }
    function mt(o, l) {
      {
        if (!o._store || o._store.validated || o.key != null)
          return;
        o._store.validated = !0;
        var d = ha(l);
        if (ft[d])
          return;
        ft[d] = !0;
        var u = "";
        o && o._owner && o._owner !== _e.current && (u = " It was passed a child from " + L(o._owner.type) + "."), J(o), h('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', d, u), J(null);
      }
    }
    function pt(o, l) {
      {
        if (typeof o != "object")
          return;
        if (Pe(o))
          for (var d = 0; d < o.length; d++) {
            var u = o[d];
            De(u) && mt(u, l);
          }
        else if (De(o))
          o._store && (o._store.validated = !0);
        else if (o) {
          var g = ae(o);
          if (typeof g == "function" && g !== o.entries)
            for (var v = g.call(o), m; !(m = v.next()).done; )
              De(m.value) && mt(m.value, l);
        }
      }
    }
    function Na(o) {
      {
        var l = o.type;
        if (l == null || typeof l == "string")
          return;
        var d;
        if (typeof l == "function")
          d = l.propTypes;
        else if (typeof l == "object" && (l.$$typeof === S || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        l.$$typeof === z))
          d = l.propTypes;
        else
          return;
        if (d) {
          var u = L(l);
          ia(d, o.props, "prop", u, o);
        } else if (l.PropTypes !== void 0 && !Ie) {
          Ie = !0;
          var g = L(l);
          h("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", g || "Unknown");
        }
        typeof l.getDefaultProps == "function" && !l.getDefaultProps.isReactClassApproved && h("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function wa(o) {
      {
        for (var l = Object.keys(o.props), d = 0; d < l.length; d++) {
          var u = l[d];
          if (u !== "children" && u !== "key") {
            J(o), h("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", u), J(null);
            break;
          }
        }
        o.ref !== null && (J(o), h("Invalid attribute `ref` supplied to `React.Fragment`."), J(null));
      }
    }
    var gt = {};
    function xt(o, l, d, u, g, v) {
      {
        var m = ea(o);
        if (!m) {
          var f = "";
          (o === void 0 || typeof o == "object" && o !== null && Object.keys(o).length === 0) && (f += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var _ = ya(g);
          _ ? f += _ : f += ut();
          var j;
          o === null ? j = "null" : Pe(o) ? j = "array" : o !== void 0 && o.$$typeof === t ? (j = "<" + (L(o.type) || "Unknown") + " />", f = " Did you accidentally export a JSX literal instead of a component?") : j = typeof o, h("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", j, f);
        }
        var R = va(o, l, d, g, v);
        if (R == null)
          return R;
        if (m) {
          var A = l.children;
          if (A !== void 0)
            if (u)
              if (Pe(A)) {
                for (var X = 0; X < A.length; X++)
                  pt(A[X], o);
                Object.freeze && Object.freeze(A);
              } else
                h("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              pt(A, o);
        }
        if (oe.call(l, "key")) {
          var W = L(o), I = Object.keys(l).filter(function(Pa) {
            return Pa !== "key";
          }), Ee = I.length > 0 ? "{key: someKey, " + I.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!gt[W + Ee]) {
            var Sa = I.length > 0 ? "{" + I.join(": ..., ") + ": ...}" : "{}";
            h(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, Ee, W, Sa, W), gt[W + Ee] = !0;
          }
        }
        return o === i ? wa(R) : Na(R), R;
      }
    }
    function ja(o, l, d) {
      return xt(o, l, d, !0);
    }
    function Ra(o, l, d) {
      return xt(o, l, d, !1);
    }
    var Ca = Ra, Ta = ja;
    ie.Fragment = i, ie.jsx = Ca, ie.jsxs = Ta;
  }()), ie;
}
process.env.NODE_ENV === "production" ? Le.exports = Wa() : Le.exports = Ya();
var r = Le.exports;
function s(...e) {
  return Ma(Oa(e));
}
const en = U.Root, Ua = n.forwardRef(({ className: e, ...t }, a) => /* @__PURE__ */ r.jsx(
  U.Item,
  {
    ref: a,
    className: s("border-b", e),
    ...t
  }
));
Ua.displayName = "AccordionItem";
const Ka = n.forwardRef(({ className: e, children: t, ...a }, i) => /* @__PURE__ */ r.jsx(U.Header, { className: "flex", children: /* @__PURE__ */ r.jsxs(
  U.Trigger,
  {
    ref: i,
    className: s(
      "flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180",
      e
    ),
    ...a,
    children: [
      t,
      /* @__PURE__ */ r.jsx(Ve, { className: "h-4 w-4 shrink-0 transition-transform duration-200" })
    ]
  }
) }));
Ka.displayName = U.Trigger.displayName;
const qa = n.forwardRef(({ className: e, children: t, ...a }, i) => /* @__PURE__ */ r.jsx(
  U.Content,
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
qa.displayName = U.Content.displayName;
const Q = B(
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
), We = n.forwardRef(
  ({ className: e, variant: t, size: a, asChild: i = !1, ...c }, p) => {
    const C = i ? $e : "button";
    return /* @__PURE__ */ r.jsx(
      C,
      {
        className: s(Q({ variant: t, size: a, className: e })),
        ref: p,
        ...c
      }
    );
  }
);
We.displayName = "Button";
const tn = P.Root, an = P.Trigger, Tt = ({
  ...e
}) => /* @__PURE__ */ r.jsx(P.Portal, { ...e });
Tt.displayName = P.Portal.displayName;
const St = n.forwardRef(({ className: e, ...t }, a) => /* @__PURE__ */ r.jsx(
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
St.displayName = P.Overlay.displayName;
const Ja = n.forwardRef(({ className: e, ...t }, a) => /* @__PURE__ */ r.jsxs(Tt, { children: [
  /* @__PURE__ */ r.jsx(St, {}),
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
Ja.displayName = P.Content.displayName;
const Xa = ({
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
Xa.displayName = "AlertDialogHeader";
const Qa = ({
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
Qa.displayName = "AlertDialogFooter";
const Za = n.forwardRef(({ className: e, ...t }, a) => /* @__PURE__ */ r.jsx(
  P.Title,
  {
    ref: a,
    className: s("text-lg font-semibold", e),
    ...t
  }
));
Za.displayName = P.Title.displayName;
const er = n.forwardRef(({ className: e, ...t }, a) => /* @__PURE__ */ r.jsx(
  P.Description,
  {
    ref: a,
    className: s("text-sm text-muted-foreground", e),
    ...t
  }
));
er.displayName = P.Description.displayName;
const tr = n.forwardRef(({ className: e, ...t }, a) => /* @__PURE__ */ r.jsx(
  P.Action,
  {
    ref: a,
    className: s(Q(), e),
    ...t
  }
));
tr.displayName = P.Action.displayName;
const ar = n.forwardRef(({ className: e, ...t }, a) => /* @__PURE__ */ r.jsx(
  P.Cancel,
  {
    ref: a,
    className: s(
      Q({ variant: "outline" }),
      "mt-2 sm:mt-0",
      e
    ),
    ...t
  }
));
ar.displayName = P.Cancel.displayName;
const rr = B(
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
), or = n.forwardRef(({ className: e, variant: t, ...a }, i) => /* @__PURE__ */ r.jsx(
  "div",
  {
    ref: i,
    role: "alert",
    className: s(rr({ variant: t }), e),
    ...a
  }
));
or.displayName = "Alert";
const sr = n.forwardRef(({ className: e, ...t }, a) => /* @__PURE__ */ r.jsx(
  "h5",
  {
    ref: a,
    className: s("mb-1 font-medium leading-none tracking-tight", e),
    ...t
  }
));
sr.displayName = "AlertTitle";
const nr = n.forwardRef(({ className: e, ...t }, a) => /* @__PURE__ */ r.jsx(
  "div",
  {
    ref: a,
    className: s("text-sm [&_p]:leading-relaxed", e),
    ...t
  }
));
nr.displayName = "AlertDescription";
const rn = Aa.Root, ir = n.forwardRef(({ className: e, ...t }, a) => /* @__PURE__ */ r.jsx(
  ee.Root,
  {
    ref: a,
    className: s(
      "relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full",
      e
    ),
    ...t
  }
));
ir.displayName = ee.Root.displayName;
const lr = n.forwardRef(({ className: e, ...t }, a) => /* @__PURE__ */ r.jsx(
  ee.Image,
  {
    ref: a,
    className: s("aspect-square h-full w-full", e),
    ...t
  }
));
lr.displayName = ee.Image.displayName;
const dr = n.forwardRef(({ className: e, ...t }, a) => /* @__PURE__ */ r.jsx(
  ee.Fallback,
  {
    ref: a,
    className: s(
      "flex h-full w-full items-center justify-center rounded-full bg-muted",
      e
    ),
    ...t
  }
));
dr.displayName = ee.Fallback.displayName;
const cr = B(
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
function on({ className: e, variant: t, ...a }) {
  return /* @__PURE__ */ r.jsx("div", { className: s(cr({ variant: t }), e), ...a });
}
function ur({
  className: e,
  classNames: t,
  showOutsideDays: a = !0,
  ...i
}) {
  return /* @__PURE__ */ r.jsx(
    za,
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
          Q({ variant: "outline" }),
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
          Q({ variant: "ghost" }),
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
        IconLeft: () => /* @__PURE__ */ r.jsx(Nt, { className: "h-4 w-4" }),
        IconRight: () => /* @__PURE__ */ r.jsx(Z, { className: "h-4 w-4" })
      },
      ...i
    }
  );
}
ur.displayName = "Calendar";
const fr = n.forwardRef(({ className: e, ...t }, a) => /* @__PURE__ */ r.jsx(
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
fr.displayName = "Card";
const mr = n.forwardRef(({ className: e, ...t }, a) => /* @__PURE__ */ r.jsx(
  "div",
  {
    ref: a,
    className: s("flex flex-col space-y-1.5 p-6", e),
    ...t
  }
));
mr.displayName = "CardHeader";
const pr = n.forwardRef(({ className: e, ...t }, a) => /* @__PURE__ */ r.jsx(
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
pr.displayName = "CardTitle";
const gr = n.forwardRef(({ className: e, ...t }, a) => /* @__PURE__ */ r.jsx(
  "p",
  {
    ref: a,
    className: s("text-sm text-muted-foreground", e),
    ...t
  }
));
gr.displayName = "CardDescription";
const xr = n.forwardRef(({ className: e, ...t }, a) => /* @__PURE__ */ r.jsx("div", { ref: a, className: s("p-6 pt-0", e), ...t }));
xr.displayName = "CardContent";
const br = n.forwardRef(({ className: e, ...t }, a) => /* @__PURE__ */ r.jsx(
  "div",
  {
    ref: a,
    className: s("flex items-center p-6 pt-0", e),
    ...t
  }
));
br.displayName = "CardFooter";
const vr = n.forwardRef(({ className: e, ...t }, a) => /* @__PURE__ */ r.jsx(
  Ae.Root,
  {
    ref: a,
    className: s(
      "peer h-4 w-4 shrink-0 rounded-sm border border-primary ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground",
      e
    ),
    ...t,
    children: /* @__PURE__ */ r.jsx(
      Ae.Indicator,
      {
        className: s("flex items-center justify-center text-current"),
        children: /* @__PURE__ */ r.jsx(fe, { className: "h-4 w-4" })
      }
    )
  }
));
vr.displayName = Ae.Root.displayName;
const sn = Be.Root, nn = Be.CollapsibleTrigger, ln = Be.CollapsibleContent, yr = y.Root, dn = y.Trigger, Pt = ({ ...e }) => /* @__PURE__ */ r.jsx(y.Portal, { ...e });
Pt.displayName = y.Portal.displayName;
const kt = n.forwardRef(({ className: e, ...t }, a) => /* @__PURE__ */ r.jsx(
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
kt.displayName = y.Overlay.displayName;
const _t = n.forwardRef(({ className: e, children: t, ...a }, i) => /* @__PURE__ */ r.jsxs(Pt, { children: [
  /* @__PURE__ */ r.jsx(kt, {}),
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
          /* @__PURE__ */ r.jsx(Ge, { className: "h-4 w-4" }),
          /* @__PURE__ */ r.jsx("span", { className: "sr-only", children: "Close" })
        ] })
      ]
    }
  )
] }));
_t.displayName = y.Content.displayName;
const hr = ({
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
hr.displayName = "DialogHeader";
const Nr = ({
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
Nr.displayName = "DialogFooter";
const wr = n.forwardRef(({ className: e, ...t }, a) => /* @__PURE__ */ r.jsx(
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
wr.displayName = y.Title.displayName;
const jr = n.forwardRef(({ className: e, ...t }, a) => /* @__PURE__ */ r.jsx(
  y.Description,
  {
    ref: a,
    className: s("text-sm text-muted-foreground", e),
    ...t
  }
));
jr.displayName = y.Description.displayName;
const It = n.forwardRef(({ className: e, ...t }, a) => /* @__PURE__ */ r.jsx(
  D,
  {
    ref: a,
    className: s(
      "flex h-full w-full flex-col overflow-hidden rounded-md bg-popover text-popover-foreground",
      e
    ),
    ...t
  }
));
It.displayName = D.displayName;
const cn = ({ children: e, ...t }) => /* @__PURE__ */ r.jsx(yr, { ...t, children: /* @__PURE__ */ r.jsx(_t, { className: "overflow-hidden p-0 shadow-lg", children: /* @__PURE__ */ r.jsx(It, { className: "[&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground [&_[cmdk-group]:not([hidden])_~[cmdk-group]]:pt-0 [&_[cmdk-group]]:px-2 [&_[cmdk-input-wrapper]_svg]:h-5 [&_[cmdk-input-wrapper]_svg]:w-5 [&_[cmdk-input]]:h-12 [&_[cmdk-item]]:px-2 [&_[cmdk-item]]:py-3 [&_[cmdk-item]_svg]:h-5 [&_[cmdk-item]_svg]:w-5", children: e }) }) }), Rr = n.forwardRef(({ className: e, ...t }, a) => /* @__PURE__ */ r.jsxs("div", { className: "flex items-center border-b px-3", "cmdk-input-wrapper": "", children: [
  /* @__PURE__ */ r.jsx(ka, { className: "mr-2 h-4 w-4 shrink-0 opacity-50" }),
  /* @__PURE__ */ r.jsx(
    D.Input,
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
Rr.displayName = D.Input.displayName;
const Cr = n.forwardRef(({ className: e, ...t }, a) => /* @__PURE__ */ r.jsx(
  D.List,
  {
    ref: a,
    className: s("max-h-[300px] overflow-y-auto overflow-x-hidden", e),
    ...t
  }
));
Cr.displayName = D.List.displayName;
const Tr = n.forwardRef((e, t) => /* @__PURE__ */ r.jsx(
  D.Empty,
  {
    ref: t,
    className: "py-6 text-center text-sm",
    ...e
  }
));
Tr.displayName = D.Empty.displayName;
const Sr = n.forwardRef(({ className: e, ...t }, a) => /* @__PURE__ */ r.jsx(
  D.Group,
  {
    ref: a,
    className: s(
      "overflow-hidden p-1 text-foreground [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground",
      e
    ),
    ...t
  }
));
Sr.displayName = D.Group.displayName;
const Pr = n.forwardRef(({ className: e, ...t }, a) => /* @__PURE__ */ r.jsx(
  D.Separator,
  {
    ref: a,
    className: s("-mx-1 h-px bg-border", e),
    ...t
  }
));
Pr.displayName = D.Separator.displayName;
const kr = n.forwardRef(({ className: e, ...t }, a) => /* @__PURE__ */ r.jsx(
  D.Item,
  {
    ref: a,
    className: s(
      "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none aria-selected:bg-accent aria-selected:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      e
    ),
    ...t
  }
));
kr.displayName = D.Item.displayName;
const _r = ({
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
_r.displayName = "CommandShortcut";
const un = N.Root, fn = N.Trigger, mn = N.Group, pn = N.Portal, gn = N.Sub, xn = N.RadioGroup, Ir = n.forwardRef(({ className: e, inset: t, children: a, ...i }, c) => /* @__PURE__ */ r.jsxs(
  N.SubTrigger,
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
      /* @__PURE__ */ r.jsx(Z, { className: "ml-auto h-4 w-4" })
    ]
  }
));
Ir.displayName = N.SubTrigger.displayName;
const Dr = n.forwardRef(({ className: e, ...t }, a) => /* @__PURE__ */ r.jsx(
  N.SubContent,
  {
    ref: a,
    className: s(
      "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      e
    ),
    ...t
  }
));
Dr.displayName = N.SubContent.displayName;
const Er = n.forwardRef(({ className: e, ...t }, a) => /* @__PURE__ */ r.jsx(N.Portal, { children: /* @__PURE__ */ r.jsx(
  N.Content,
  {
    ref: a,
    className: s(
      "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md animate-in fade-in-80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      e
    ),
    ...t
  }
) }));
Er.displayName = N.Content.displayName;
const Or = n.forwardRef(({ className: e, inset: t, ...a }, i) => /* @__PURE__ */ r.jsx(
  N.Item,
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
Or.displayName = N.Item.displayName;
const Mr = n.forwardRef(({ className: e, children: t, checked: a, ...i }, c) => /* @__PURE__ */ r.jsxs(
  N.CheckboxItem,
  {
    ref: c,
    className: s(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      e
    ),
    checked: a,
    ...i,
    children: [
      /* @__PURE__ */ r.jsx("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ r.jsx(N.ItemIndicator, { children: /* @__PURE__ */ r.jsx(fe, { className: "h-4 w-4" }) }) }),
      t
    ]
  }
));
Mr.displayName = N.CheckboxItem.displayName;
const Ar = n.forwardRef(({ className: e, children: t, ...a }, i) => /* @__PURE__ */ r.jsxs(
  N.RadioItem,
  {
    ref: i,
    className: s(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      e
    ),
    ...a,
    children: [
      /* @__PURE__ */ r.jsx("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ r.jsx(N.ItemIndicator, { children: /* @__PURE__ */ r.jsx(he, { className: "h-2 w-2 fill-current" }) }) }),
      t
    ]
  }
));
Ar.displayName = N.RadioItem.displayName;
const zr = n.forwardRef(({ className: e, inset: t, ...a }, i) => /* @__PURE__ */ r.jsx(
  N.Label,
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
zr.displayName = N.Label.displayName;
const Fr = n.forwardRef(({ className: e, ...t }, a) => /* @__PURE__ */ r.jsx(
  N.Separator,
  {
    ref: a,
    className: s("-mx-1 my-1 h-px bg-border", e),
    ...t
  }
));
Fr.displayName = N.Separator.displayName;
const Lr = ({
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
Lr.displayName = "ContextMenuShortcut";
const bn = w.Root, vn = w.Trigger, yn = w.Group, hn = w.Portal, Nn = w.Sub, wn = w.RadioGroup, Vr = n.forwardRef(({ className: e, inset: t, children: a, ...i }, c) => /* @__PURE__ */ r.jsxs(
  w.SubTrigger,
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
      /* @__PURE__ */ r.jsx(Z, { className: "ml-auto h-4 w-4" })
    ]
  }
));
Vr.displayName = w.SubTrigger.displayName;
const Gr = n.forwardRef(({ className: e, ...t }, a) => /* @__PURE__ */ r.jsx(
  w.SubContent,
  {
    ref: a,
    className: s(
      "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      e
    ),
    ...t
  }
));
Gr.displayName = w.SubContent.displayName;
const $r = n.forwardRef(({ className: e, sideOffset: t = 4, ...a }, i) => /* @__PURE__ */ r.jsx(w.Portal, { children: /* @__PURE__ */ r.jsx(
  w.Content,
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
$r.displayName = w.Content.displayName;
const Br = n.forwardRef(({ className: e, inset: t, ...a }, i) => /* @__PURE__ */ r.jsx(
  w.Item,
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
Br.displayName = w.Item.displayName;
const Hr = n.forwardRef(({ className: e, children: t, checked: a, ...i }, c) => /* @__PURE__ */ r.jsxs(
  w.CheckboxItem,
  {
    ref: c,
    className: s(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      e
    ),
    checked: a,
    ...i,
    children: [
      /* @__PURE__ */ r.jsx("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ r.jsx(w.ItemIndicator, { children: /* @__PURE__ */ r.jsx(fe, { className: "h-4 w-4" }) }) }),
      t
    ]
  }
));
Hr.displayName = w.CheckboxItem.displayName;
const Wr = n.forwardRef(({ className: e, children: t, ...a }, i) => /* @__PURE__ */ r.jsxs(
  w.RadioItem,
  {
    ref: i,
    className: s(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      e
    ),
    ...a,
    children: [
      /* @__PURE__ */ r.jsx("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ r.jsx(w.ItemIndicator, { children: /* @__PURE__ */ r.jsx(he, { className: "h-2 w-2 fill-current" }) }) }),
      t
    ]
  }
));
Wr.displayName = w.RadioItem.displayName;
const Yr = n.forwardRef(({ className: e, inset: t, ...a }, i) => /* @__PURE__ */ r.jsx(
  w.Label,
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
Yr.displayName = w.Label.displayName;
const Ur = n.forwardRef(({ className: e, ...t }, a) => /* @__PURE__ */ r.jsx(
  w.Separator,
  {
    ref: a,
    className: s("-mx-1 my-1 h-px bg-muted", e),
    ...t
  }
));
Ur.displayName = w.Separator.displayName;
const Kr = ({
  className: e,
  ...t
}) => /* @__PURE__ */ r.jsx(
  "span",
  {
    className: s("ml-auto text-xs tracking-widest opacity-60", e),
    ...t
  }
);
Kr.displayName = "DropdownMenuShortcut";
const qr = B(
  "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
), Dt = n.forwardRef(({ className: e, ...t }, a) => /* @__PURE__ */ r.jsx(
  jt.Root,
  {
    ref: a,
    className: s(qr(), e),
    ...t
  }
));
Dt.displayName = jt.Root.displayName;
const jn = Fa, Et = n.createContext(
  {}
), Rn = ({
  ...e
}) => /* @__PURE__ */ r.jsx(Et.Provider, { value: { name: e.name }, children: /* @__PURE__ */ r.jsx(La, { ...e }) }), je = () => {
  const e = n.useContext(Et), t = n.useContext(Ot), { getFieldState: a, formState: i } = Va(), c = a(e.name, i);
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
}, Ot = n.createContext(
  {}
), Jr = n.forwardRef(({ className: e, ...t }, a) => {
  const i = n.useId();
  return /* @__PURE__ */ r.jsx(Ot.Provider, { value: { id: i }, children: /* @__PURE__ */ r.jsx("div", { ref: a, className: s("space-y-2", e), ...t }) });
});
Jr.displayName = "FormItem";
const Xr = n.forwardRef(({ className: e, ...t }, a) => {
  const { error: i, formItemId: c } = je();
  return /* @__PURE__ */ r.jsx(
    Dt,
    {
      ref: a,
      className: s(i && "text-destructive", e),
      htmlFor: c,
      ...t
    }
  );
});
Xr.displayName = "FormLabel";
const Qr = n.forwardRef(({ ...e }, t) => {
  const { error: a, formItemId: i, formDescriptionId: c, formMessageId: p } = je();
  return /* @__PURE__ */ r.jsx(
    $e,
    {
      ref: t,
      id: i,
      "aria-describedby": a ? `${c} ${p}` : `${c}`,
      "aria-invalid": !!a,
      ...e
    }
  );
});
Qr.displayName = "FormControl";
const Zr = n.forwardRef(({ className: e, ...t }, a) => {
  const { formDescriptionId: i } = je();
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
Zr.displayName = "FormDescription";
const eo = n.forwardRef(({ className: e, children: t, ...a }, i) => {
  const { error: c, formMessageId: p } = je(), C = c ? String(c == null ? void 0 : c.message) : t;
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
eo.displayName = "FormMessage";
const Cn = Ne.Root, Tn = Ne.Trigger, to = n.forwardRef(({ className: e, align: t = "center", sideOffset: a = 4, ...i }, c) => /* @__PURE__ */ r.jsx(
  Ne.Content,
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
to.displayName = Ne.Content.displayName;
const ao = n.forwardRef(
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
ao.displayName = "Input";
const Sn = x.Menu, Pn = x.Group, kn = x.Portal, _n = x.Sub, In = x.RadioGroup, ro = n.forwardRef(({ className: e, ...t }, a) => /* @__PURE__ */ r.jsx(
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
ro.displayName = x.Root.displayName;
const oo = n.forwardRef(({ className: e, ...t }, a) => /* @__PURE__ */ r.jsx(
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
oo.displayName = x.Trigger.displayName;
const so = n.forwardRef(({ className: e, inset: t, children: a, ...i }, c) => /* @__PURE__ */ r.jsxs(
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
      /* @__PURE__ */ r.jsx(Z, { className: "ml-auto h-4 w-4" })
    ]
  }
));
so.displayName = x.SubTrigger.displayName;
const no = n.forwardRef(({ className: e, ...t }, a) => /* @__PURE__ */ r.jsx(
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
no.displayName = x.SubContent.displayName;
const io = n.forwardRef(
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
io.displayName = x.Content.displayName;
const lo = n.forwardRef(({ className: e, inset: t, ...a }, i) => /* @__PURE__ */ r.jsx(
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
lo.displayName = x.Item.displayName;
const co = n.forwardRef(({ className: e, children: t, checked: a, ...i }, c) => /* @__PURE__ */ r.jsxs(
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
      /* @__PURE__ */ r.jsx("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ r.jsx(x.ItemIndicator, { children: /* @__PURE__ */ r.jsx(fe, { className: "h-4 w-4" }) }) }),
      t
    ]
  }
));
co.displayName = x.CheckboxItem.displayName;
const uo = n.forwardRef(({ className: e, children: t, ...a }, i) => /* @__PURE__ */ r.jsxs(
  x.RadioItem,
  {
    ref: i,
    className: s(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      e
    ),
    ...a,
    children: [
      /* @__PURE__ */ r.jsx("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ r.jsx(x.ItemIndicator, { children: /* @__PURE__ */ r.jsx(he, { className: "h-2 w-2 fill-current" }) }) }),
      t
    ]
  }
));
uo.displayName = x.RadioItem.displayName;
const fo = n.forwardRef(({ className: e, inset: t, ...a }, i) => /* @__PURE__ */ r.jsx(
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
fo.displayName = x.Label.displayName;
const mo = n.forwardRef(({ className: e, ...t }, a) => /* @__PURE__ */ r.jsx(
  x.Separator,
  {
    ref: a,
    className: s("-mx-1 my-1 h-px bg-muted", e),
    ...t
  }
));
mo.displayName = x.Separator.displayName;
const po = ({
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
po.displayname = "MenubarShortcut";
const go = n.forwardRef(({ className: e, children: t, ...a }, i) => /* @__PURE__ */ r.jsxs(
  E.Root,
  {
    ref: i,
    className: s(
      "relative z-10 flex max-w-max flex-1 items-center justify-center",
      e
    ),
    ...a,
    children: [
      t,
      /* @__PURE__ */ r.jsx(Mt, {})
    ]
  }
));
go.displayName = E.Root.displayName;
const xo = n.forwardRef(({ className: e, ...t }, a) => /* @__PURE__ */ r.jsx(
  E.List,
  {
    ref: a,
    className: s(
      "group flex flex-1 list-none items-center justify-center space-x-1",
      e
    ),
    ...t
  }
));
xo.displayName = E.List.displayName;
const Dn = E.Item, bo = B(
  "group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
), vo = n.forwardRef(({ className: e, children: t, ...a }, i) => /* @__PURE__ */ r.jsxs(
  E.Trigger,
  {
    ref: i,
    className: s(bo(), "group", e),
    ...a,
    children: [
      t,
      " ",
      /* @__PURE__ */ r.jsx(
        Ve,
        {
          className: "relative top-[1px] ml-1 h-3 w-3 transition duration-200 group-data-[state=open]:rotate-180",
          "aria-hidden": "true"
        }
      )
    ]
  }
));
vo.displayName = E.Trigger.displayName;
const yo = n.forwardRef(({ className: e, ...t }, a) => /* @__PURE__ */ r.jsx(
  E.Content,
  {
    ref: a,
    className: s(
      "left-0 top-0 w-full data-[motion^=from-]:animate-in data-[motion^=to-]:animate-out data-[motion^=from-]:fade-in data-[motion^=to-]:fade-out data-[motion=from-end]:slide-in-from-right-52 data-[motion=from-start]:slide-in-from-left-52 data-[motion=to-end]:slide-out-to-right-52 data-[motion=to-start]:slide-out-to-left-52 md:absolute md:w-auto ",
      e
    ),
    ...t
  }
));
yo.displayName = E.Content.displayName;
const En = E.Link, Mt = n.forwardRef(({ className: e, ...t }, a) => /* @__PURE__ */ r.jsx("div", { className: s("absolute left-0 top-full flex justify-center"), children: /* @__PURE__ */ r.jsx(
  E.Viewport,
  {
    className: s(
      "origin-top-center relative mt-1.5 h-[var(--radix-navigation-menu-viewport-height)] w-full overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-90 md:w-[var(--radix-navigation-menu-viewport-width)]",
      e
    ),
    ref: a,
    ...t
  }
) }));
Mt.displayName = E.Viewport.displayName;
const ho = n.forwardRef(({ className: e, ...t }, a) => /* @__PURE__ */ r.jsx(
  E.Indicator,
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
ho.displayName = E.Indicator.displayName;
const On = ce.Root, Mn = ce.Trigger, No = n.forwardRef(({ className: e, align: t = "center", sideOffset: a = 4, ...i }, c) => /* @__PURE__ */ r.jsx(ce.Portal, { children: /* @__PURE__ */ r.jsx(
  ce.Content,
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
No.displayName = ce.Content.displayName;
const wo = n.forwardRef(({ className: e, value: t, ...a }, i) => /* @__PURE__ */ r.jsx(
  ze.Root,
  {
    ref: i,
    className: s(
      "relative h-4 w-full overflow-hidden rounded-full bg-secondary",
      e
    ),
    ...a,
    children: /* @__PURE__ */ r.jsx(
      ze.Indicator,
      {
        className: "h-full w-full flex-1 bg-primary transition-all",
        style: { transform: `translateX(-${100 - (t || 0)}%)` }
      }
    )
  }
));
wo.displayName = ze.Root.displayName;
const jo = n.forwardRef(({ className: e, ...t }, a) => /* @__PURE__ */ r.jsx(
  ue.Root,
  {
    className: s("grid gap-2", e),
    ...t,
    ref: a
  }
));
jo.displayName = ue.Root.displayName;
const Ro = n.forwardRef(({ className: e, children: t, ...a }, i) => /* @__PURE__ */ r.jsx(
  ue.Item,
  {
    ref: i,
    className: s(
      "aspect-square h-4 w-4 rounded-full border border-primary text-primary ring-offset-background focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
      e
    ),
    ...a,
    children: /* @__PURE__ */ r.jsx(ue.Indicator, { className: "flex items-center justify-center", children: /* @__PURE__ */ r.jsx(he, { className: "h-2.5 w-2.5 fill-current text-current" }) })
  }
));
Ro.displayName = ue.Item.displayName;
const Co = n.forwardRef(({ className: e, children: t, ...a }, i) => /* @__PURE__ */ r.jsxs(
  Y.Root,
  {
    ref: i,
    className: s("relative overflow-hidden", e),
    ...a,
    children: [
      /* @__PURE__ */ r.jsx(Y.Viewport, { className: "h-full w-full rounded-[inherit]", children: t }),
      /* @__PURE__ */ r.jsx(At, {}),
      /* @__PURE__ */ r.jsx(Y.Corner, {})
    ]
  }
));
Co.displayName = Y.Root.displayName;
const At = n.forwardRef(({ className: e, orientation: t = "vertical", ...a }, i) => /* @__PURE__ */ r.jsx(
  Y.ScrollAreaScrollbar,
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
      Y.ScrollAreaThumb,
      {
        className: s(
          "relative rounded-full bg-border",
          t === "vertical" && "flex-1"
        )
      }
    )
  }
));
At.displayName = Y.ScrollAreaScrollbar.displayName;
const An = T.Root, zn = T.Group, Fn = T.Value, To = n.forwardRef(({ className: e, children: t, ...a }, i) => /* @__PURE__ */ r.jsxs(
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
      /* @__PURE__ */ r.jsx(T.Icon, { asChild: !0, children: /* @__PURE__ */ r.jsx(Ve, { className: "h-4 w-4 opacity-50" }) })
    ]
  }
));
To.displayName = T.Trigger.displayName;
const So = n.forwardRef(({ className: e, children: t, position: a = "popper", ...i }, c) => /* @__PURE__ */ r.jsx(T.Portal, { children: /* @__PURE__ */ r.jsx(
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
So.displayName = T.Content.displayName;
const Po = n.forwardRef(({ className: e, ...t }, a) => /* @__PURE__ */ r.jsx(
  T.Label,
  {
    ref: a,
    className: s("py-1.5 pl-8 pr-2 text-sm font-semibold", e),
    ...t
  }
));
Po.displayName = T.Label.displayName;
const ko = n.forwardRef(({ className: e, children: t, ...a }, i) => /* @__PURE__ */ r.jsxs(
  T.Item,
  {
    ref: i,
    className: s(
      "relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      e
    ),
    ...a,
    children: [
      /* @__PURE__ */ r.jsx("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ r.jsx(T.ItemIndicator, { children: /* @__PURE__ */ r.jsx(fe, { className: "h-4 w-4" }) }) }),
      /* @__PURE__ */ r.jsx(T.ItemText, { children: t })
    ]
  }
));
ko.displayName = T.Item.displayName;
const _o = n.forwardRef(({ className: e, ...t }, a) => /* @__PURE__ */ r.jsx(
  T.Separator,
  {
    ref: a,
    className: s("-mx-1 my-1 h-px bg-muted", e),
    ...t
  }
));
_o.displayName = T.Separator.displayName;
const Io = n.forwardRef(
  ({ className: e, orientation: t = "horizontal", decorative: a = !0, ...i }, c) => /* @__PURE__ */ r.jsx(
    Rt.Root,
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
Io.displayName = Rt.Root.displayName;
const Ln = y.Root, Vn = y.Trigger, Gn = y.Close, zt = ({ ...e }) => /* @__PURE__ */ r.jsx(y.Portal, { ...e });
zt.displayName = y.Portal.displayName;
const Ft = n.forwardRef(({ className: e, ...t }, a) => /* @__PURE__ */ r.jsx(
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
Ft.displayName = y.Overlay.displayName;
const Do = B(
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
), Eo = n.forwardRef(({ side: e = "right", className: t, children: a, ...i }, c) => /* @__PURE__ */ r.jsxs(zt, { children: [
  /* @__PURE__ */ r.jsx(Ft, {}),
  /* @__PURE__ */ r.jsxs(
    y.Content,
    {
      ref: c,
      className: s(Do({ side: e }), t),
      ...i,
      children: [
        a,
        /* @__PURE__ */ r.jsxs(y.Close, { className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary", children: [
          /* @__PURE__ */ r.jsx(Ge, { className: "h-4 w-4" }),
          /* @__PURE__ */ r.jsx("span", { className: "sr-only", children: "Close" })
        ] })
      ]
    }
  )
] }));
Eo.displayName = y.Content.displayName;
const Oo = ({
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
Oo.displayName = "SheetHeader";
const Mo = ({
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
Mo.displayName = "SheetFooter";
const Ao = n.forwardRef(({ className: e, ...t }, a) => /* @__PURE__ */ r.jsx(
  y.Title,
  {
    ref: a,
    className: s("text-lg font-semibold text-foreground", e),
    ...t
  }
));
Ao.displayName = y.Title.displayName;
const zo = n.forwardRef(({ className: e, ...t }, a) => /* @__PURE__ */ r.jsx(
  y.Description,
  {
    ref: a,
    className: s("text-sm text-muted-foreground", e),
    ...t
  }
));
zo.displayName = y.Description.displayName;
function $n({
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
const Fo = n.forwardRef(({ className: e, ...t }, a) => /* @__PURE__ */ r.jsxs(
  le.Root,
  {
    ref: a,
    className: s(
      "relative flex w-full touch-none select-none items-center",
      e
    ),
    ...t,
    children: [
      /* @__PURE__ */ r.jsx(le.Track, { className: "relative h-2 w-full grow overflow-hidden rounded-full bg-secondary", children: /* @__PURE__ */ r.jsx(le.Range, { className: "absolute h-full bg-primary" }) }),
      /* @__PURE__ */ r.jsx(le.Thumb, { className: "block h-5 w-5 rounded-full border-2 border-primary bg-background ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50" })
    ]
  }
));
Fo.displayName = le.Root.displayName;
const Lo = n.forwardRef(({ className: e, ...t }, a) => /* @__PURE__ */ r.jsx(
  Fe.Root,
  {
    className: s(
      "peer inline-flex h-[24px] w-[44px] shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=unchecked]:bg-input",
      e
    ),
    ...t,
    ref: a,
    children: /* @__PURE__ */ r.jsx(
      Fe.Thumb,
      {
        className: s(
          "pointer-events-none block h-5 w-5 rounded-full bg-background shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0"
        )
      }
    )
  }
));
Lo.displayName = Fe.Root.displayName;
const Vo = n.forwardRef(({ className: e, ...t }, a) => /* @__PURE__ */ r.jsx("div", { className: "relative w-full overflow-auto", children: /* @__PURE__ */ r.jsx(
  "table",
  {
    ref: a,
    className: s("w-full caption-bottom text-sm", e),
    ...t
  }
) }));
Vo.displayName = "Table";
const Go = n.forwardRef(({ className: e, ...t }, a) => /* @__PURE__ */ r.jsx("thead", { ref: a, className: s("[&_tr]:border-b", e), ...t }));
Go.displayName = "TableHeader";
const $o = n.forwardRef(({ className: e, ...t }, a) => /* @__PURE__ */ r.jsx(
  "tbody",
  {
    ref: a,
    className: s("[&_tr:last-child]:border-0", e),
    ...t
  }
));
$o.displayName = "TableBody";
const Bo = n.forwardRef(({ className: e, ...t }, a) => /* @__PURE__ */ r.jsx(
  "tfoot",
  {
    ref: a,
    className: s("bg-primary font-medium text-primary-foreground", e),
    ...t
  }
));
Bo.displayName = "TableFooter";
const Ho = n.forwardRef(({ className: e, ...t }, a) => /* @__PURE__ */ r.jsx(
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
Ho.displayName = "TableRow";
const Wo = n.forwardRef(({ className: e, ...t }, a) => /* @__PURE__ */ r.jsx(
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
Wo.displayName = "TableHead";
const Yo = n.forwardRef(({ className: e, ...t }, a) => /* @__PURE__ */ r.jsx(
  "td",
  {
    ref: a,
    className: s("p-4 align-middle [&:has([role=checkbox])]:pr-0", e),
    ...t
  }
));
Yo.displayName = "TableCell";
const Uo = n.forwardRef(({ className: e, ...t }, a) => /* @__PURE__ */ r.jsx(
  "caption",
  {
    ref: a,
    className: s("mt-4 text-sm text-muted-foreground", e),
    ...t
  }
));
Uo.displayName = "TableCaption";
const Bn = K.Root, Ko = n.forwardRef(({ className: e, ...t }, a) => /* @__PURE__ */ r.jsx(
  K.List,
  {
    ref: a,
    className: s(
      "inline-flex h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground",
      e
    ),
    ...t
  }
));
Ko.displayName = K.List.displayName;
const qo = n.forwardRef(({ className: e, ...t }, a) => /* @__PURE__ */ r.jsx(
  K.Trigger,
  {
    ref: a,
    className: s(
      "inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm",
      e
    ),
    ...t
  }
));
qo.displayName = K.Trigger.displayName;
const Jo = n.forwardRef(({ className: e, ...t }, a) => /* @__PURE__ */ r.jsx(
  K.Content,
  {
    ref: a,
    className: s(
      "mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
      e
    ),
    ...t
  }
));
Jo.displayName = K.Content.displayName;
const Xo = n.forwardRef(
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
Xo.displayName = "Textarea";
const Qo = M.Provider, Lt = n.forwardRef(({ className: e, ...t }, a) => /* @__PURE__ */ r.jsx(
  M.Viewport,
  {
    ref: a,
    className: s(
      "fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]",
      e
    ),
    ...t
  }
));
Lt.displayName = M.Viewport.displayName;
const Zo = B(
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
), Vt = n.forwardRef(({ className: e, variant: t, ...a }, i) => /* @__PURE__ */ r.jsx(
  M.Root,
  {
    ref: i,
    className: s(Zo({ variant: t }), e),
    ...a
  }
));
Vt.displayName = M.Root.displayName;
const es = n.forwardRef(({ className: e, ...t }, a) => /* @__PURE__ */ r.jsx(
  M.Action,
  {
    ref: a,
    className: s(
      "inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium ring-offset-background transition-colors hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 group-[.destructive]:border-muted/40 group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground group-[.destructive]:focus:ring-destructive",
      e
    ),
    ...t
  }
));
es.displayName = M.Action.displayName;
const Gt = n.forwardRef(({ className: e, ...t }, a) => /* @__PURE__ */ r.jsx(
  M.Close,
  {
    ref: a,
    className: s(
      "absolute right-2 top-2 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity hover:text-foreground focus:opacity-100 focus:outline-none focus:ring-2 group-hover:opacity-100 group-[.destructive]:text-red-300 group-[.destructive]:hover:text-red-50 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600",
      e
    ),
    "toast-close": "",
    ...t,
    children: /* @__PURE__ */ r.jsx(Ge, { className: "h-4 w-4" })
  }
));
Gt.displayName = M.Close.displayName;
const $t = n.forwardRef(({ className: e, ...t }, a) => /* @__PURE__ */ r.jsx(
  M.Title,
  {
    ref: a,
    className: s("text-sm font-semibold", e),
    ...t
  }
));
$t.displayName = M.Title.displayName;
const Bt = n.forwardRef(({ className: e, ...t }, a) => /* @__PURE__ */ r.jsx(
  M.Description,
  {
    ref: a,
    className: s("text-sm opacity-90", e),
    ...t
  }
));
Bt.displayName = M.Description.displayName;
const ts = 1, as = 1e6;
let Oe = 0;
function rs() {
  return Oe = (Oe + 1) % Number.MAX_VALUE, Oe.toString();
}
const Me = /* @__PURE__ */ new Map(), yt = (e) => {
  if (Me.has(e))
    return;
  const t = setTimeout(() => {
    Me.delete(e), de({
      type: "REMOVE_TOAST",
      toastId: e
    });
  }, as);
  Me.set(e, t);
}, os = (e, t) => {
  switch (t.type) {
    case "ADD_TOAST":
      return {
        ...e,
        toasts: [t.toast, ...e.toasts].slice(0, ts)
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
      return a ? yt(a) : e.toasts.forEach((i) => {
        yt(i.id);
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
}, ve = [];
let ye = { toasts: [] };
function de(e) {
  ye = os(ye, e), ve.forEach((t) => {
    t(ye);
  });
}
function ss({ ...e }) {
  const t = rs(), a = (c) => de({
    type: "UPDATE_TOAST",
    toast: { ...c, id: t }
  }), i = () => de({ type: "DISMISS_TOAST", toastId: t });
  return de({
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
function ns() {
  const [e, t] = n.useState(ye);
  return n.useEffect(() => (ve.push(t), () => {
    const a = ve.indexOf(t);
    a > -1 && ve.splice(a, 1);
  }), [e]), {
    ...e,
    toast: ss,
    dismiss: (a) => de({ type: "DISMISS_TOAST", toastId: a })
  };
}
function Hn() {
  const { toasts: e } = ns();
  return /* @__PURE__ */ r.jsxs(Qo, { children: [
    e.map(function({ id: t, title: a, description: i, action: c, ...p }) {
      return /* @__PURE__ */ r.jsxs(Vt, { ...p, children: [
        /* @__PURE__ */ r.jsxs("div", { className: "grid gap-1", children: [
          a && /* @__PURE__ */ r.jsx($t, { children: a }),
          i && /* @__PURE__ */ r.jsx(Bt, { children: i })
        ] }),
        c,
        /* @__PURE__ */ r.jsx(Gt, {})
      ] }, t);
    }),
    /* @__PURE__ */ r.jsx(Lt, {})
  ] });
}
const Ht = B(
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
), is = n.forwardRef(({ className: e, variant: t, size: a, ...i }, c) => /* @__PURE__ */ r.jsx(
  Ct.Root,
  {
    ref: c,
    className: s(Ht({ variant: t, size: a, className: e })),
    ...i
  }
));
is.displayName = Ct.Root.displayName;
const Wn = me.Provider, Yn = me.Root, Un = me.Trigger, ls = n.forwardRef(({ className: e, sideOffset: t = 4, ...a }, i) => /* @__PURE__ */ r.jsx(
  me.Content,
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
ls.displayName = me.Content.displayName;
const Kn = ({
  className: e,
  ...t
}) => /* @__PURE__ */ r.jsx(
  He.PanelGroup,
  {
    className: s(
      "flex h-full w-full data-[panel-group-direction=vertical]:flex-col",
      e
    ),
    ...t
  }
), qn = He.Panel, Jn = ({
  withHandle: e,
  className: t,
  ...a
}) => /* @__PURE__ */ r.jsx(
  He.PanelResizeHandle,
  {
    className: s(
      "relative flex w-px items-center justify-center bg-border after:absolute after:inset-y-0 after:left-1/2 after:w-1 after:-translate-x-1/2 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring focus-visible:ring-offset-1 data-[panel-group-direction=vertical]:h-px data-[panel-group-direction=vertical]:w-full data-[panel-group-direction=vertical]:after:left-0 data-[panel-group-direction=vertical]:after:h-1 data-[panel-group-direction=vertical]:after:w-full data-[panel-group-direction=vertical]:after:-translate-y-1/2 data-[panel-group-direction=vertical]:after:translate-x-0 [&[data-panel-group-direction=vertical]>div]:rotate-90",
      t
    ),
    ...a,
    children: e && /* @__PURE__ */ r.jsx("div", { className: "z-10 flex h-4 w-3 items-center justify-center rounded-sm border bg-border", children: /* @__PURE__ */ r.jsx(_a, { className: "h-2.5 w-2.5" }) })
  }
), ds = n.forwardRef(({ className: e, ...t }, a) => /* @__PURE__ */ r.jsx(
  Ga,
  {
    ref: a,
    containerClassName: s("flex items-center gap-2", e),
    ...t
  }
));
ds.displayName = "InputOTP";
const cs = n.forwardRef(({ className: e, ...t }, a) => /* @__PURE__ */ r.jsx("div", { ref: a, className: s("flex items-center", e), ...t }));
cs.displayName = "InputOTPGroup";
const us = n.forwardRef(({ char: e, hasFakeCaret: t, isActive: a, className: i, ...c }, p) => /* @__PURE__ */ r.jsxs(
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
us.displayName = "InputOTPSlot";
const fs = n.forwardRef(({ ...e }, t) => /* @__PURE__ */ r.jsx("div", { ref: t, role: "separator", ...e, children: /* @__PURE__ */ r.jsx(Ia, {}) }));
fs.displayName = "InputOTPSeparator";
const ms = n.forwardRef(({ ...e }, t) => /* @__PURE__ */ r.jsx("nav", { ref: t, "aria-label": "breadcrumb", ...e }));
ms.displayName = "Breadcrumb";
const ps = n.forwardRef(({ className: e, ...t }, a) => /* @__PURE__ */ r.jsx(
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
ps.displayName = "BreadcrumbList";
const gs = n.forwardRef(({ className: e, ...t }, a) => /* @__PURE__ */ r.jsx(
  "li",
  {
    ref: a,
    className: s("inline-flex items-center gap-1.5", e),
    ...t
  }
));
gs.displayName = "BreadcrumbItem";
const xs = n.forwardRef(({ asChild: e, className: t, ...a }, i) => {
  const c = e ? $e : "a";
  return /* @__PURE__ */ r.jsx(
    c,
    {
      ref: i,
      className: s("transition-colors hover:text-foreground", t),
      ...a
    }
  );
});
xs.displayName = "BreadcrumbLink";
const bs = n.forwardRef(({ className: e, ...t }, a) => /* @__PURE__ */ r.jsx(
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
bs.displayName = "BreadcrumbPage";
const vs = ({
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
    children: e || /* @__PURE__ */ r.jsx(Z, {})
  }
);
vs.displayName = "BreadcrumbSeparator";
const ys = ({
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
      /* @__PURE__ */ r.jsx(wt, { className: "h-4 w-4" }),
      /* @__PURE__ */ r.jsx("span", { className: "sr-only", children: "More" })
    ]
  }
);
ys.displayName = "BreadcrumbElipssis";
const Wt = n.createContext({
  size: "default",
  variant: "default"
}), hs = n.forwardRef(({ className: e, variant: t, size: a, children: i, ...c }, p) => /* @__PURE__ */ r.jsx(
  we.Root,
  {
    ref: p,
    className: s("flex items-center justify-center gap-1", e),
    ...c,
    children: /* @__PURE__ */ r.jsx(Wt.Provider, { value: { variant: t, size: a }, children: i })
  }
));
hs.displayName = we.Root.displayName;
const Ns = n.forwardRef(({ className: e, children: t, variant: a, size: i, ...c }, p) => {
  const C = n.useContext(Wt);
  return /* @__PURE__ */ r.jsx(
    we.Item,
    {
      ref: p,
      className: s(
        Ht({
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
Ns.displayName = we.Item.displayName;
const Xn = ({ ...e }) => {
  const { theme: t = "system" } = $a();
  return /* @__PURE__ */ r.jsx(
    Ba,
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
}, ws = ({ className: e, ...t }) => /* @__PURE__ */ r.jsx(
  "nav",
  {
    role: "navigation",
    "aria-label": "pagination",
    className: s("mx-auto flex w-full justify-center", e),
    ...t
  }
);
ws.displayName = "Pagination";
const js = n.forwardRef(({ className: e, ...t }, a) => /* @__PURE__ */ r.jsx(
  "ul",
  {
    ref: a,
    className: s("flex flex-row items-center gap-1", e),
    ...t
  }
));
js.displayName = "PaginationContent";
const Rs = n.forwardRef(({ className: e, ...t }, a) => /* @__PURE__ */ r.jsx("li", { ref: a, className: s("", e), ...t }));
Rs.displayName = "PaginationItem";
const Ye = ({
  className: e,
  isActive: t,
  size: a = "icon",
  ...i
}) => /* @__PURE__ */ r.jsx(
  "a",
  {
    "aria-current": t ? "page" : void 0,
    className: s(
      Q({
        variant: t ? "outline" : "ghost",
        size: a
      }),
      e
    ),
    ...i
  }
);
Ye.displayName = "PaginationLink";
const Cs = ({
  className: e,
  ...t
}) => /* @__PURE__ */ r.jsxs(
  Ye,
  {
    "aria-label": "Go to previous page",
    size: "default",
    className: s("gap-1 pl-2.5", e),
    ...t,
    children: [
      /* @__PURE__ */ r.jsx(Nt, { className: "h-4 w-4" }),
      /* @__PURE__ */ r.jsx("span", { children: "Previous" })
    ]
  }
);
Cs.displayName = "PaginationPrevious";
const Ts = ({
  className: e,
  ...t
}) => /* @__PURE__ */ r.jsxs(
  Ye,
  {
    "aria-label": "Go to next page",
    size: "default",
    className: s("gap-1 pr-2.5", e),
    ...t,
    children: [
      /* @__PURE__ */ r.jsx("span", { children: "Next" }),
      /* @__PURE__ */ r.jsx(Z, { className: "h-4 w-4" })
    ]
  }
);
Ts.displayName = "PaginationNext";
const Ss = ({
  className: e,
  ...t
}) => /* @__PURE__ */ r.jsxs(
  "span",
  {
    "aria-hidden": !0,
    className: s("flex h-9 w-9 items-center justify-center", e),
    ...t,
    children: [
      /* @__PURE__ */ r.jsx(wt, { className: "h-4 w-4" }),
      /* @__PURE__ */ r.jsx("span", { className: "sr-only", children: "More pages" })
    ]
  }
);
Ss.displayName = "PaginationEllipsis";
const Ps = ({
  shouldScaleBackground: e = !0,
  ...t
}) => /* @__PURE__ */ r.jsx(
  F.Root,
  {
    shouldScaleBackground: e,
    ...t
  }
);
Ps.displayName = "Drawer";
const Qn = F.Trigger, ks = F.Portal, Zn = F.Close, Yt = n.forwardRef(({ className: e, ...t }, a) => /* @__PURE__ */ r.jsx(
  F.Overlay,
  {
    ref: a,
    className: s("fixed inset-0 z-50 bg-black/80", e),
    ...t
  }
));
Yt.displayName = F.Overlay.displayName;
const _s = n.forwardRef(({ className: e, children: t, ...a }, i) => /* @__PURE__ */ r.jsxs(ks, { children: [
  /* @__PURE__ */ r.jsx(Yt, {}),
  /* @__PURE__ */ r.jsxs(
    F.Content,
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
_s.displayName = "DrawerContent";
const Is = ({
  className: e,
  ...t
}) => /* @__PURE__ */ r.jsx(
  "div",
  {
    className: s("grid gap-1.5 p-4 text-center sm:text-left", e),
    ...t
  }
);
Is.displayName = "DrawerHeader";
const Ds = ({
  className: e,
  ...t
}) => /* @__PURE__ */ r.jsx(
  "div",
  {
    className: s("mt-auto flex flex-col gap-2 p-4", e),
    ...t
  }
);
Ds.displayName = "DrawerFooter";
const Es = n.forwardRef(({ className: e, ...t }, a) => /* @__PURE__ */ r.jsx(
  F.Title,
  {
    ref: a,
    className: s(
      "text-lg font-semibold leading-none tracking-tight",
      e
    ),
    ...t
  }
));
Es.displayName = F.Title.displayName;
const Os = n.forwardRef(({ className: e, ...t }, a) => /* @__PURE__ */ r.jsx(
  F.Description,
  {
    ref: a,
    className: s("text-sm text-muted-foreground", e),
    ...t
  }
));
Os.displayName = F.Description.displayName;
const Ut = n.createContext(null);
function Re() {
  const e = n.useContext(Ut);
  if (!e)
    throw new Error("useCarousel must be used within a <Carousel />");
  return e;
}
const Ms = n.forwardRef(
  ({
    orientation: e = "horizontal",
    opts: t,
    setApi: a,
    plugins: i,
    className: c,
    children: p,
    ...C
  }, O) => {
    const [S, b] = Ha(
      {
        ...t,
        axis: e === "horizontal" ? "x" : "y"
      },
      i
    ), [k, z] = n.useState(!1), [V, q] = n.useState(!1), G = n.useCallback((h) => {
      h && (z(h.canScrollPrev()), q(h.canScrollNext()));
    }, []), te = n.useCallback(() => {
      b == null || b.scrollPrev();
    }, [b]), ae = n.useCallback(() => {
      b == null || b.scrollNext();
    }, [b]), $ = n.useCallback(
      (h) => {
        h.key === "ArrowLeft" ? (h.preventDefault(), te()) : h.key === "ArrowRight" && (h.preventDefault(), ae());
      },
      [te, ae]
    );
    return n.useEffect(() => {
      !b || !a || a(b);
    }, [b, a]), n.useEffect(() => {
      if (b)
        return G(b), b.on("reInit", G), b.on("select", G), () => {
          b == null || b.off("select", G);
        };
    }, [b, G]), /* @__PURE__ */ r.jsx(
      Ut.Provider,
      {
        value: {
          carouselRef: S,
          api: b,
          opts: t,
          orientation: e || ((t == null ? void 0 : t.axis) === "y" ? "vertical" : "horizontal"),
          scrollPrev: te,
          scrollNext: ae,
          canScrollPrev: k,
          canScrollNext: V
        },
        children: /* @__PURE__ */ r.jsx(
          "div",
          {
            ref: O,
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
Ms.displayName = "Carousel";
const As = n.forwardRef(({ className: e, ...t }, a) => {
  const { carouselRef: i, orientation: c } = Re();
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
As.displayName = "CarouselContent";
const zs = n.forwardRef(({ className: e, ...t }, a) => {
  const { orientation: i } = Re();
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
zs.displayName = "CarouselItem";
const Fs = n.forwardRef(({ className: e, variant: t = "outline", size: a = "icon", ...i }, c) => {
  const { orientation: p, scrollPrev: C, canScrollPrev: O } = Re();
  return /* @__PURE__ */ r.jsxs(
    We,
    {
      ref: c,
      variant: t,
      size: a,
      className: s(
        "absolute  h-8 w-8 rounded-full",
        p === "horizontal" ? "-left-12 top-1/2 -translate-y-1/2" : "-top-12 left-1/2 -translate-x-1/2 rotate-90",
        e
      ),
      disabled: !O,
      onClick: C,
      ...i,
      children: [
        /* @__PURE__ */ r.jsx(Da, { className: "h-4 w-4" }),
        /* @__PURE__ */ r.jsx("span", { className: "sr-only", children: "Previous slide" })
      ]
    }
  );
});
Fs.displayName = "CarouselPrevious";
const Ls = n.forwardRef(({ className: e, variant: t = "outline", size: a = "icon", ...i }, c) => {
  const { orientation: p, scrollNext: C, canScrollNext: O } = Re();
  return /* @__PURE__ */ r.jsxs(
    We,
    {
      ref: c,
      variant: t,
      size: a,
      className: s(
        "absolute h-8 w-8 rounded-full",
        p === "horizontal" ? "-right-12 top-1/2 -translate-y-1/2" : "-bottom-12 left-1/2 -translate-x-1/2 rotate-90",
        e
      ),
      disabled: !O,
      onClick: C,
      ...i,
      children: [
        /* @__PURE__ */ r.jsx(Ea, { className: "h-4 w-4" }),
        /* @__PURE__ */ r.jsx("span", { className: "sr-only", children: "Next slide" })
      ]
    }
  );
});
Ls.displayName = "CarouselNext";
export {
  en as Accordion,
  qa as AccordionContent,
  Ua as AccordionItem,
  Ka as AccordionTrigger,
  or as Alert,
  nr as AlertDescription,
  tn as AlertDialog,
  tr as AlertDialogAction,
  ar as AlertDialogCancel,
  Ja as AlertDialogContent,
  er as AlertDialogDescription,
  Qa as AlertDialogFooter,
  Xa as AlertDialogHeader,
  Za as AlertDialogTitle,
  an as AlertDialogTrigger,
  sr as AlertTitle,
  rn as AspectRatio,
  ir as Avatar,
  dr as AvatarFallback,
  lr as AvatarImage,
  on as Badge,
  ms as Breadcrumb,
  ys as BreadcrumbEllipsis,
  gs as BreadcrumbItem,
  xs as BreadcrumbLink,
  ps as BreadcrumbList,
  bs as BreadcrumbPage,
  vs as BreadcrumbSeparator,
  We as Button,
  ur as Calendar,
  fr as Card,
  xr as CardContent,
  gr as CardDescription,
  br as CardFooter,
  mr as CardHeader,
  pr as CardTitle,
  Ms as Carousel,
  As as CarouselContent,
  zs as CarouselItem,
  Ls as CarouselNext,
  Fs as CarouselPrevious,
  vr as Checkbox,
  sn as Collapsible,
  ln as CollapsibleContent,
  nn as CollapsibleTrigger,
  It as Command,
  cn as CommandDialog,
  Tr as CommandEmpty,
  Sr as CommandGroup,
  Rr as CommandInput,
  kr as CommandItem,
  Cr as CommandList,
  Pr as CommandSeparator,
  _r as CommandShortcut,
  un as ContextMenu,
  Mr as ContextMenuCheckboxItem,
  Er as ContextMenuContent,
  mn as ContextMenuGroup,
  Or as ContextMenuItem,
  zr as ContextMenuLabel,
  pn as ContextMenuPortal,
  xn as ContextMenuRadioGroup,
  Ar as ContextMenuRadioItem,
  Fr as ContextMenuSeparator,
  Lr as ContextMenuShortcut,
  gn as ContextMenuSub,
  Dr as ContextMenuSubContent,
  Ir as ContextMenuSubTrigger,
  fn as ContextMenuTrigger,
  yr as Dialog,
  _t as DialogContent,
  jr as DialogDescription,
  Nr as DialogFooter,
  hr as DialogHeader,
  wr as DialogTitle,
  dn as DialogTrigger,
  Ps as Drawer,
  Zn as DrawerClose,
  _s as DrawerContent,
  Os as DrawerDescription,
  Ds as DrawerFooter,
  Is as DrawerHeader,
  Yt as DrawerOverlay,
  ks as DrawerPortal,
  Es as DrawerTitle,
  Qn as DrawerTrigger,
  bn as DropdownMenu,
  Hr as DropdownMenuCheckboxItem,
  $r as DropdownMenuContent,
  yn as DropdownMenuGroup,
  Br as DropdownMenuItem,
  Yr as DropdownMenuLabel,
  hn as DropdownMenuPortal,
  wn as DropdownMenuRadioGroup,
  Wr as DropdownMenuRadioItem,
  Ur as DropdownMenuSeparator,
  Kr as DropdownMenuShortcut,
  Nn as DropdownMenuSub,
  Gr as DropdownMenuSubContent,
  Vr as DropdownMenuSubTrigger,
  vn as DropdownMenuTrigger,
  jn as Form,
  Qr as FormControl,
  Zr as FormDescription,
  Rn as FormField,
  Jr as FormItem,
  Xr as FormLabel,
  eo as FormMessage,
  Cn as HoverCard,
  to as HoverCardContent,
  Tn as HoverCardTrigger,
  ao as Input,
  ds as InputOTP,
  cs as InputOTPGroup,
  fs as InputOTPSeparator,
  us as InputOTPSlot,
  Dt as Label,
  ro as Menubar,
  co as MenubarCheckboxItem,
  io as MenubarContent,
  Pn as MenubarGroup,
  lo as MenubarItem,
  fo as MenubarLabel,
  Sn as MenubarMenu,
  kn as MenubarPortal,
  In as MenubarRadioGroup,
  uo as MenubarRadioItem,
  mo as MenubarSeparator,
  po as MenubarShortcut,
  _n as MenubarSub,
  no as MenubarSubContent,
  so as MenubarSubTrigger,
  oo as MenubarTrigger,
  go as NavigationMenu,
  yo as NavigationMenuContent,
  ho as NavigationMenuIndicator,
  Dn as NavigationMenuItem,
  En as NavigationMenuLink,
  xo as NavigationMenuList,
  vo as NavigationMenuTrigger,
  Mt as NavigationMenuViewport,
  ws as Pagination,
  js as PaginationContent,
  Ss as PaginationEllipsis,
  Rs as PaginationItem,
  Ye as PaginationLink,
  Ts as PaginationNext,
  Cs as PaginationPrevious,
  On as Popover,
  No as PopoverContent,
  Mn as PopoverTrigger,
  wo as Progress,
  jo as RadioGroup,
  Ro as RadioGroupItem,
  Jn as ResizableHandle,
  qn as ResizablePanel,
  Kn as ResizablePanelGroup,
  Co as ScrollArea,
  At as ScrollBar,
  An as Select,
  So as SelectContent,
  zn as SelectGroup,
  ko as SelectItem,
  Po as SelectLabel,
  _o as SelectSeparator,
  To as SelectTrigger,
  Fn as SelectValue,
  Io as Separator,
  Ln as Sheet,
  Gn as SheetClose,
  Eo as SheetContent,
  zo as SheetDescription,
  Mo as SheetFooter,
  Oo as SheetHeader,
  Ao as SheetTitle,
  Vn as SheetTrigger,
  $n as Skeleton,
  Fo as Slider,
  Xn as Sonner,
  Lo as Switch,
  Vo as Table,
  $o as TableBody,
  Uo as TableCaption,
  Yo as TableCell,
  Bo as TableFooter,
  Wo as TableHead,
  Go as TableHeader,
  Ho as TableRow,
  Bn as Tabs,
  Jo as TabsContent,
  Ko as TabsList,
  qo as TabsTrigger,
  Xo as Textarea,
  Vt as Toast,
  es as ToastAction,
  Gt as ToastClose,
  Bt as ToastDescription,
  Qo as ToastProvider,
  $t as ToastTitle,
  Lt as ToastViewport,
  Hn as Toaster,
  is as Toggle,
  hs as ToggleGroup,
  Ns as ToggleGroupItem,
  Yn as Tooltip,
  ls as TooltipContent,
  Wn as TooltipProvider,
  Un as TooltipTrigger,
  cr as badgeVariants,
  Q as buttonVariants,
  s as cn,
  bo as navigationMenuTriggerStyle,
  os as reducer,
  ss as toast,
  Ht as toggleVariants,
  je as useFormField,
  ns as useToast
};
