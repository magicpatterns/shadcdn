import * as n from "react";
import Tt from "react";
import * as Z from "@radix-ui/react-accordion";
import { ChevronDown as je, ChevronLeft as St, ChevronRight as oe, Check as ge, X as Ye, Search as Ea, Circle as Re, ChevronUp as Oa, GripVertical as Ma, Dot as Aa, MoreHorizontal as _t, ArrowLeft as za, ArrowRight as Fa } from "lucide-react";
import { clsx as La } from "clsx";
import { twMerge as Va } from "tailwind-merge";
import * as D from "@radix-ui/react-alert-dialog";
import { Slot as Ue } from "@radix-ui/react-slot";
import { cva as U } from "class-variance-authority";
import * as $a from "@radix-ui/react-aspect-ratio";
import * as se from "@radix-ui/react-avatar";
import { DayPicker as Ba } from "react-day-picker";
import * as $e from "@radix-ui/react-checkbox";
import * as Ke from "@radix-ui/react-collapsible";
import { Command as O } from "cmdk";
import * as R from "@radix-ui/react-dialog";
import * as C from "@radix-ui/react-context-menu";
import * as T from "@radix-ui/react-dropdown-menu";
import { FormProvider as Ga, Controller as Ha, useFormContext as Wa } from "react-hook-form";
import * as kt from "@radix-ui/react-label";
import * as Ce from "@radix-ui/react-hover-card";
import * as N from "@radix-ui/react-menubar";
import * as M from "@radix-ui/react-navigation-menu";
import * as me from "@radix-ui/react-popover";
import * as Be from "@radix-ui/react-progress";
import * as pe from "@radix-ui/react-radio-group";
import * as Q from "@radix-ui/react-scroll-area";
import * as S from "@radix-ui/react-select";
import * as Pt from "@radix-ui/react-separator";
import * as ue from "@radix-ui/react-slider";
import * as Ge from "@radix-ui/react-switch";
import * as ee from "@radix-ui/react-tabs";
import * as V from "@radix-ui/react-toast";
import * as It from "@radix-ui/react-toggle";
import * as xe from "@radix-ui/react-tooltip";
import * as qe from "react-resizable-panels";
import { OTPInput as Ya, OTPInputContext as Ua } from "input-otp";
import * as Te from "@radix-ui/react-toggle-group";
import { useTheme as Ka } from "next-themes";
import { Toaster as qa } from "sonner";
import { Drawer as B } from "vaul";
import Ja from "embla-carousel-react";
import * as Je from "recharts";
var He = { exports: {} }, de = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var jt;
function Xa() {
  if (jt)
    return de;
  jt = 1;
  var t = Tt, e = Symbol.for("react.element"), a = Symbol.for("react.fragment"), i = Object.prototype.hasOwnProperty, d = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, f = { key: !0, ref: !0, __self: !0, __source: !0 };
  function x(v, j, m) {
    var P, A = {}, z = null, W = null;
    m !== void 0 && (z = "" + m), j.key !== void 0 && (z = "" + j.key), j.ref !== void 0 && (W = j.ref);
    for (P in j)
      i.call(j, P) && !f.hasOwnProperty(P) && (A[P] = j[P]);
    if (v && v.defaultProps)
      for (P in j = v.defaultProps, j)
        A[P] === void 0 && (A[P] = j[P]);
    return { $$typeof: e, type: v, key: z, ref: W, props: A, _owner: d.current };
  }
  return de.Fragment = a, de.jsx = x, de.jsxs = x, de;
}
var ce = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Rt;
function Qa() {
  return Rt || (Rt = 1, process.env.NODE_ENV !== "production" && function() {
    var t = Tt, e = Symbol.for("react.element"), a = Symbol.for("react.portal"), i = Symbol.for("react.fragment"), d = Symbol.for("react.strict_mode"), f = Symbol.for("react.profiler"), x = Symbol.for("react.provider"), v = Symbol.for("react.context"), j = Symbol.for("react.forward_ref"), m = Symbol.for("react.suspense"), P = Symbol.for("react.suspense_list"), A = Symbol.for("react.memo"), z = Symbol.for("react.lazy"), W = Symbol.for("react.offscreen"), F = Symbol.iterator, Y = "@@iterator";
    function G(o) {
      if (o === null || typeof o != "object")
        return null;
      var l = F && o[F] || o[Y];
      return typeof l == "function" ? l : null;
    }
    var h = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function y(o) {
      {
        for (var l = arguments.length, c = new Array(l > 1 ? l - 1 : 0), u = 1; u < l; u++)
          c[u - 1] = arguments[u];
        K("error", o, c);
      }
    }
    function K(o, l, c) {
      {
        var u = h.ReactDebugCurrentFrame, b = u.getStackAddendum();
        b !== "" && (l += "%s", c = c.concat([b]));
        var w = c.map(function(g) {
          return String(g);
        });
        w.unshift("Warning: " + l), Function.prototype.apply.call(console[o], console, w);
      }
    }
    var L = !1, q = !1, ta = !1, aa = !1, ra = !1, Ze;
    Ze = Symbol.for("react.module.reference");
    function oa(o) {
      return !!(typeof o == "string" || typeof o == "function" || o === i || o === f || ra || o === d || o === m || o === P || aa || o === W || L || q || ta || typeof o == "object" && o !== null && (o.$$typeof === z || o.$$typeof === A || o.$$typeof === x || o.$$typeof === v || o.$$typeof === j || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      o.$$typeof === Ze || o.getModuleId !== void 0));
    }
    function sa(o, l, c) {
      var u = o.displayName;
      if (u)
        return u;
      var b = l.displayName || l.name || "";
      return b !== "" ? c + "(" + b + ")" : c;
    }
    function et(o) {
      return o.displayName || "Context";
    }
    function H(o) {
      if (o == null)
        return null;
      if (typeof o.tag == "number" && y("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof o == "function")
        return o.displayName || o.name || null;
      if (typeof o == "string")
        return o;
      switch (o) {
        case i:
          return "Fragment";
        case a:
          return "Portal";
        case f:
          return "Profiler";
        case d:
          return "StrictMode";
        case m:
          return "Suspense";
        case P:
          return "SuspenseList";
      }
      if (typeof o == "object")
        switch (o.$$typeof) {
          case v:
            var l = o;
            return et(l) + ".Consumer";
          case x:
            var c = o;
            return et(c._context) + ".Provider";
          case j:
            return sa(o, o.render, "ForwardRef");
          case A:
            var u = o.displayName || null;
            return u !== null ? u : H(o.type) || "Memo";
          case z: {
            var b = o, w = b._payload, g = b._init;
            try {
              return H(g(w));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var J = Object.assign, ne = 0, tt, at, rt, ot, st, nt, it;
    function lt() {
    }
    lt.__reactDisabledLog = !0;
    function na() {
      {
        if (ne === 0) {
          tt = console.log, at = console.info, rt = console.warn, ot = console.error, st = console.group, nt = console.groupCollapsed, it = console.groupEnd;
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
        ne++;
      }
    }
    function ia() {
      {
        if (ne--, ne === 0) {
          var o = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: J({}, o, {
              value: tt
            }),
            info: J({}, o, {
              value: at
            }),
            warn: J({}, o, {
              value: rt
            }),
            error: J({}, o, {
              value: ot
            }),
            group: J({}, o, {
              value: st
            }),
            groupCollapsed: J({}, o, {
              value: nt
            }),
            groupEnd: J({}, o, {
              value: it
            })
          });
        }
        ne < 0 && y("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var ke = h.ReactCurrentDispatcher, Pe;
    function be(o, l, c) {
      {
        if (Pe === void 0)
          try {
            throw Error();
          } catch (b) {
            var u = b.stack.trim().match(/\n( *(at )?)/);
            Pe = u && u[1] || "";
          }
        return `
` + Pe + o;
      }
    }
    var Ie = !1, ve;
    {
      var la = typeof WeakMap == "function" ? WeakMap : Map;
      ve = new la();
    }
    function dt(o, l) {
      if (!o || Ie)
        return "";
      {
        var c = ve.get(o);
        if (c !== void 0)
          return c;
      }
      var u;
      Ie = !0;
      var b = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var w;
      w = ke.current, ke.current = null, na();
      try {
        if (l) {
          var g = function() {
            throw Error();
          };
          if (Object.defineProperty(g.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(g, []);
            } catch (E) {
              u = E;
            }
            Reflect.construct(o, [], g);
          } else {
            try {
              g.call();
            } catch (E) {
              u = E;
            }
            o.call(g.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (E) {
            u = E;
          }
          o();
        }
      } catch (E) {
        if (E && u && typeof E.stack == "string") {
          for (var p = E.stack.split(`
`), I = u.stack.split(`
`), _ = p.length - 1, k = I.length - 1; _ >= 1 && k >= 0 && p[_] !== I[k]; )
            k--;
          for (; _ >= 1 && k >= 0; _--, k--)
            if (p[_] !== I[k]) {
              if (_ !== 1 || k !== 1)
                do
                  if (_--, k--, k < 0 || p[_] !== I[k]) {
                    var $ = `
` + p[_].replace(" at new ", " at ");
                    return o.displayName && $.includes("<anonymous>") && ($ = $.replace("<anonymous>", o.displayName)), typeof o == "function" && ve.set(o, $), $;
                  }
                while (_ >= 1 && k >= 0);
              break;
            }
        }
      } finally {
        Ie = !1, ke.current = w, ia(), Error.prepareStackTrace = b;
      }
      var ae = o ? o.displayName || o.name : "", X = ae ? be(ae) : "";
      return typeof o == "function" && ve.set(o, X), X;
    }
    function da(o, l, c) {
      return dt(o, !1);
    }
    function ca(o) {
      var l = o.prototype;
      return !!(l && l.isReactComponent);
    }
    function he(o, l, c) {
      if (o == null)
        return "";
      if (typeof o == "function")
        return dt(o, ca(o));
      if (typeof o == "string")
        return be(o);
      switch (o) {
        case m:
          return be("Suspense");
        case P:
          return be("SuspenseList");
      }
      if (typeof o == "object")
        switch (o.$$typeof) {
          case j:
            return da(o.render);
          case A:
            return he(o.type, l, c);
          case z: {
            var u = o, b = u._payload, w = u._init;
            try {
              return he(w(b), l, c);
            } catch {
            }
          }
        }
      return "";
    }
    var ie = Object.prototype.hasOwnProperty, ct = {}, ut = h.ReactDebugCurrentFrame;
    function ye(o) {
      if (o) {
        var l = o._owner, c = he(o.type, o._source, l ? l.type : null);
        ut.setExtraStackFrame(c);
      } else
        ut.setExtraStackFrame(null);
    }
    function ua(o, l, c, u, b) {
      {
        var w = Function.call.bind(ie);
        for (var g in o)
          if (w(o, g)) {
            var p = void 0;
            try {
              if (typeof o[g] != "function") {
                var I = Error((u || "React class") + ": " + c + " type `" + g + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof o[g] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw I.name = "Invariant Violation", I;
              }
              p = o[g](l, g, u, c, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (_) {
              p = _;
            }
            p && !(p instanceof Error) && (ye(b), y("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", u || "React class", c, g, typeof p), ye(null)), p instanceof Error && !(p.message in ct) && (ct[p.message] = !0, ye(b), y("Failed %s type: %s", c, p.message), ye(null));
          }
      }
    }
    var fa = Array.isArray;
    function De(o) {
      return fa(o);
    }
    function ma(o) {
      {
        var l = typeof Symbol == "function" && Symbol.toStringTag, c = l && o[Symbol.toStringTag] || o.constructor.name || "Object";
        return c;
      }
    }
    function pa(o) {
      try {
        return ft(o), !1;
      } catch {
        return !0;
      }
    }
    function ft(o) {
      return "" + o;
    }
    function mt(o) {
      if (pa(o))
        return y("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", ma(o)), ft(o);
    }
    var le = h.ReactCurrentOwner, ga = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, pt, gt, Ee;
    Ee = {};
    function xa(o) {
      if (ie.call(o, "ref")) {
        var l = Object.getOwnPropertyDescriptor(o, "ref").get;
        if (l && l.isReactWarning)
          return !1;
      }
      return o.ref !== void 0;
    }
    function ba(o) {
      if (ie.call(o, "key")) {
        var l = Object.getOwnPropertyDescriptor(o, "key").get;
        if (l && l.isReactWarning)
          return !1;
      }
      return o.key !== void 0;
    }
    function va(o, l) {
      if (typeof o.ref == "string" && le.current && l && le.current.stateNode !== l) {
        var c = H(le.current.type);
        Ee[c] || (y('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', H(le.current.type), o.ref), Ee[c] = !0);
      }
    }
    function ha(o, l) {
      {
        var c = function() {
          pt || (pt = !0, y("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", l));
        };
        c.isReactWarning = !0, Object.defineProperty(o, "key", {
          get: c,
          configurable: !0
        });
      }
    }
    function ya(o, l) {
      {
        var c = function() {
          gt || (gt = !0, y("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", l));
        };
        c.isReactWarning = !0, Object.defineProperty(o, "ref", {
          get: c,
          configurable: !0
        });
      }
    }
    var Na = function(o, l, c, u, b, w, g) {
      var p = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: e,
        // Built-in properties that belong on the element
        type: o,
        key: l,
        ref: c,
        props: g,
        // Record the component responsible for creating this element.
        _owner: w
      };
      return p._store = {}, Object.defineProperty(p._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(p, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: u
      }), Object.defineProperty(p, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: b
      }), Object.freeze && (Object.freeze(p.props), Object.freeze(p)), p;
    };
    function wa(o, l, c, u, b) {
      {
        var w, g = {}, p = null, I = null;
        c !== void 0 && (mt(c), p = "" + c), ba(l) && (mt(l.key), p = "" + l.key), xa(l) && (I = l.ref, va(l, b));
        for (w in l)
          ie.call(l, w) && !ga.hasOwnProperty(w) && (g[w] = l[w]);
        if (o && o.defaultProps) {
          var _ = o.defaultProps;
          for (w in _)
            g[w] === void 0 && (g[w] = _[w]);
        }
        if (p || I) {
          var k = typeof o == "function" ? o.displayName || o.name || "Unknown" : o;
          p && ha(g, k), I && ya(g, k);
        }
        return Na(o, p, I, b, u, le.current, g);
      }
    }
    var Oe = h.ReactCurrentOwner, xt = h.ReactDebugCurrentFrame;
    function te(o) {
      if (o) {
        var l = o._owner, c = he(o.type, o._source, l ? l.type : null);
        xt.setExtraStackFrame(c);
      } else
        xt.setExtraStackFrame(null);
    }
    var Me;
    Me = !1;
    function Ae(o) {
      return typeof o == "object" && o !== null && o.$$typeof === e;
    }
    function bt() {
      {
        if (Oe.current) {
          var o = H(Oe.current.type);
          if (o)
            return `

Check the render method of \`` + o + "`.";
        }
        return "";
      }
    }
    function ja(o) {
      {
        if (o !== void 0) {
          var l = o.fileName.replace(/^.*[\\\/]/, ""), c = o.lineNumber;
          return `

Check your code at ` + l + ":" + c + ".";
        }
        return "";
      }
    }
    var vt = {};
    function Ra(o) {
      {
        var l = bt();
        if (!l) {
          var c = typeof o == "string" ? o : o.displayName || o.name;
          c && (l = `

Check the top-level render call using <` + c + ">.");
        }
        return l;
      }
    }
    function ht(o, l) {
      {
        if (!o._store || o._store.validated || o.key != null)
          return;
        o._store.validated = !0;
        var c = Ra(l);
        if (vt[c])
          return;
        vt[c] = !0;
        var u = "";
        o && o._owner && o._owner !== Oe.current && (u = " It was passed a child from " + H(o._owner.type) + "."), te(o), y('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', c, u), te(null);
      }
    }
    function yt(o, l) {
      {
        if (typeof o != "object")
          return;
        if (De(o))
          for (var c = 0; c < o.length; c++) {
            var u = o[c];
            Ae(u) && ht(u, l);
          }
        else if (Ae(o))
          o._store && (o._store.validated = !0);
        else if (o) {
          var b = G(o);
          if (typeof b == "function" && b !== o.entries)
            for (var w = b.call(o), g; !(g = w.next()).done; )
              Ae(g.value) && ht(g.value, l);
        }
      }
    }
    function Ca(o) {
      {
        var l = o.type;
        if (l == null || typeof l == "string")
          return;
        var c;
        if (typeof l == "function")
          c = l.propTypes;
        else if (typeof l == "object" && (l.$$typeof === j || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        l.$$typeof === A))
          c = l.propTypes;
        else
          return;
        if (c) {
          var u = H(l);
          ua(c, o.props, "prop", u, o);
        } else if (l.PropTypes !== void 0 && !Me) {
          Me = !0;
          var b = H(l);
          y("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", b || "Unknown");
        }
        typeof l.getDefaultProps == "function" && !l.getDefaultProps.isReactClassApproved && y("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Ta(o) {
      {
        for (var l = Object.keys(o.props), c = 0; c < l.length; c++) {
          var u = l[c];
          if (u !== "children" && u !== "key") {
            te(o), y("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", u), te(null);
            break;
          }
        }
        o.ref !== null && (te(o), y("Invalid attribute `ref` supplied to `React.Fragment`."), te(null));
      }
    }
    var Nt = {};
    function wt(o, l, c, u, b, w) {
      {
        var g = oa(o);
        if (!g) {
          var p = "";
          (o === void 0 || typeof o == "object" && o !== null && Object.keys(o).length === 0) && (p += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var I = ja(b);
          I ? p += I : p += bt();
          var _;
          o === null ? _ = "null" : De(o) ? _ = "array" : o !== void 0 && o.$$typeof === e ? (_ = "<" + (H(o.type) || "Unknown") + " />", p = " Did you accidentally export a JSX literal instead of a component?") : _ = typeof o, y("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", _, p);
        }
        var k = wa(o, l, c, b, w);
        if (k == null)
          return k;
        if (g) {
          var $ = l.children;
          if ($ !== void 0)
            if (u)
              if (De($)) {
                for (var ae = 0; ae < $.length; ae++)
                  yt($[ae], o);
                Object.freeze && Object.freeze($);
              } else
                y("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              yt($, o);
        }
        if (ie.call(l, "key")) {
          var X = H(o), E = Object.keys(l).filter(function(Da) {
            return Da !== "key";
          }), ze = E.length > 0 ? "{key: someKey, " + E.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!Nt[X + ze]) {
            var Ia = E.length > 0 ? "{" + E.join(": ..., ") + ": ...}" : "{}";
            y(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, ze, X, Ia, X), Nt[X + ze] = !0;
          }
        }
        return o === i ? Ta(k) : Ca(k), k;
      }
    }
    function Sa(o, l, c) {
      return wt(o, l, c, !0);
    }
    function _a(o, l, c) {
      return wt(o, l, c, !1);
    }
    var ka = _a, Pa = Sa;
    ce.Fragment = i, ce.jsx = ka, ce.jsxs = Pa;
  }()), ce;
}
process.env.NODE_ENV === "production" ? He.exports = Xa() : He.exports = Qa();
var r = He.exports;
function s(...t) {
  return Va(La(t));
}
const gn = Z.Root, Za = n.forwardRef(({ className: t, ...e }, a) => /* @__PURE__ */ r.jsx(
  Z.Item,
  {
    ref: a,
    className: s("border-b", t),
    ...e
  }
));
Za.displayName = "AccordionItem";
const er = n.forwardRef(({ className: t, children: e, ...a }, i) => /* @__PURE__ */ r.jsx(Z.Header, { className: "flex", children: /* @__PURE__ */ r.jsxs(
  Z.Trigger,
  {
    ref: i,
    className: s(
      "flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180",
      t
    ),
    ...a,
    children: [
      e,
      /* @__PURE__ */ r.jsx(je, { className: "h-4 w-4 shrink-0 transition-transform duration-200" })
    ]
  }
) }));
er.displayName = Z.Trigger.displayName;
const tr = n.forwardRef(({ className: t, children: e, ...a }, i) => /* @__PURE__ */ r.jsx(
  Z.Content,
  {
    ref: i,
    className: "overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down",
    ...a,
    children: /* @__PURE__ */ r.jsx("div", { className: s("pb-4 pt-0", t), children: e })
  }
));
tr.displayName = Z.Content.displayName;
const re = U(
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
), Xe = n.forwardRef(
  ({ className: t, variant: e, size: a, asChild: i = !1, ...d }, f) => {
    const x = i ? Ue : "button";
    return /* @__PURE__ */ r.jsx(
      x,
      {
        className: s(re({ variant: e, size: a, className: t })),
        ref: f,
        ...d
      }
    );
  }
);
Xe.displayName = "Button";
const xn = D.Root, bn = D.Trigger, ar = D.Portal, Dt = n.forwardRef(({ className: t, ...e }, a) => /* @__PURE__ */ r.jsx(
  D.Overlay,
  {
    className: s(
      "fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      t
    ),
    ...e,
    ref: a
  }
));
Dt.displayName = D.Overlay.displayName;
const rr = n.forwardRef(({ className: t, ...e }, a) => /* @__PURE__ */ r.jsxs(ar, { children: [
  /* @__PURE__ */ r.jsx(Dt, {}),
  /* @__PURE__ */ r.jsx(
    D.Content,
    {
      ref: a,
      className: s(
        "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",
        t
      ),
      ...e
    }
  )
] }));
rr.displayName = D.Content.displayName;
const or = ({
  className: t,
  ...e
}) => /* @__PURE__ */ r.jsx(
  "div",
  {
    className: s(
      "flex flex-col space-y-2 text-center sm:text-left",
      t
    ),
    ...e
  }
);
or.displayName = "AlertDialogHeader";
const sr = ({
  className: t,
  ...e
}) => /* @__PURE__ */ r.jsx(
  "div",
  {
    className: s(
      "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",
      t
    ),
    ...e
  }
);
sr.displayName = "AlertDialogFooter";
const nr = n.forwardRef(({ className: t, ...e }, a) => /* @__PURE__ */ r.jsx(
  D.Title,
  {
    ref: a,
    className: s("text-lg font-semibold", t),
    ...e
  }
));
nr.displayName = D.Title.displayName;
const ir = n.forwardRef(({ className: t, ...e }, a) => /* @__PURE__ */ r.jsx(
  D.Description,
  {
    ref: a,
    className: s("text-sm text-muted-foreground", t),
    ...e
  }
));
ir.displayName = D.Description.displayName;
const lr = n.forwardRef(({ className: t, ...e }, a) => /* @__PURE__ */ r.jsx(
  D.Action,
  {
    ref: a,
    className: s(re(), t),
    ...e
  }
));
lr.displayName = D.Action.displayName;
const dr = n.forwardRef(({ className: t, ...e }, a) => /* @__PURE__ */ r.jsx(
  D.Cancel,
  {
    ref: a,
    className: s(
      re({ variant: "outline" }),
      "mt-2 sm:mt-0",
      t
    ),
    ...e
  }
));
dr.displayName = D.Cancel.displayName;
const cr = U(
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
), ur = n.forwardRef(({ className: t, variant: e, ...a }, i) => /* @__PURE__ */ r.jsx(
  "div",
  {
    ref: i,
    role: "alert",
    className: s(cr({ variant: e }), t),
    ...a
  }
));
ur.displayName = "Alert";
const fr = n.forwardRef(({ className: t, ...e }, a) => /* @__PURE__ */ r.jsx(
  "h5",
  {
    ref: a,
    className: s(
      "mb-1 font-medium leading-none tracking-tight",
      t
    ),
    ...e
  }
));
fr.displayName = "AlertTitle";
const mr = n.forwardRef(({ className: t, ...e }, a) => /* @__PURE__ */ r.jsx(
  "div",
  {
    ref: a,
    className: s("text-sm [&_p]:leading-relaxed", t),
    ...e
  }
));
mr.displayName = "AlertDescription";
const vn = $a.Root, pr = n.forwardRef(({ className: t, ...e }, a) => /* @__PURE__ */ r.jsx(
  se.Root,
  {
    ref: a,
    className: s(
      "relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full",
      t
    ),
    ...e
  }
));
pr.displayName = se.Root.displayName;
const gr = n.forwardRef(({ className: t, ...e }, a) => /* @__PURE__ */ r.jsx(
  se.Image,
  {
    ref: a,
    className: s("aspect-square h-full w-full", t),
    ...e
  }
));
gr.displayName = se.Image.displayName;
const xr = n.forwardRef(({ className: t, ...e }, a) => /* @__PURE__ */ r.jsx(
  se.Fallback,
  {
    ref: a,
    className: s(
      "flex h-full w-full items-center justify-center rounded-full bg-muted",
      t
    ),
    ...e
  }
));
xr.displayName = se.Fallback.displayName;
const br = U(
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
function hn({ className: t, variant: e, ...a }) {
  return /* @__PURE__ */ r.jsx("div", { className: s(br({ variant: e }), t), ...a });
}
function vr({
  className: t,
  classNames: e,
  showOutsideDays: a = !0,
  ...i
}) {
  return /* @__PURE__ */ r.jsx(
    Ba,
    {
      showOutsideDays: a,
      className: s("p-3", t),
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
        cell: "h-9 w-9 text-center text-sm p-0 relative [&:has([aria-selected].day-range-end)]:rounded-r-md [&:has([aria-selected].day-outside)]:bg-accent/50 [&:has([aria-selected])]:bg-accent first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20",
        day: s(
          re({ variant: "ghost" }),
          "h-9 w-9 p-0 font-normal aria-selected:opacity-100"
        ),
        day_range_end: "day-range-end",
        day_selected: "bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground focus:bg-primary focus:text-primary-foreground",
        day_today: "bg-accent text-accent-foreground",
        day_outside: "day-outside text-muted-foreground aria-selected:bg-accent/50 aria-selected:text-muted-foreground",
        day_disabled: "text-muted-foreground opacity-50",
        day_range_middle: "aria-selected:bg-accent aria-selected:text-accent-foreground",
        day_hidden: "invisible",
        ...e
      },
      components: {
        IconLeft: ({ className: d, ...f }) => /* @__PURE__ */ r.jsx(
          St,
          {
            className: s("h-4 w-4", d),
            ...f
          }
        ),
        IconRight: ({ className: d, ...f }) => /* @__PURE__ */ r.jsx(
          oe,
          {
            className: s("h-4 w-4", d),
            ...f
          }
        )
      },
      ...i
    }
  );
}
vr.displayName = "Calendar";
const hr = n.forwardRef(({ className: t, ...e }, a) => /* @__PURE__ */ r.jsx(
  "div",
  {
    ref: a,
    className: s(
      "rounded-lg border bg-card text-card-foreground shadow-sm",
      t
    ),
    ...e
  }
));
hr.displayName = "Card";
const yr = n.forwardRef(({ className: t, ...e }, a) => /* @__PURE__ */ r.jsx(
  "div",
  {
    ref: a,
    className: s("flex flex-col space-y-1.5 p-6", t),
    ...e
  }
));
yr.displayName = "CardHeader";
const Nr = n.forwardRef(({ className: t, ...e }, a) => /* @__PURE__ */ r.jsx(
  "div",
  {
    ref: a,
    className: s(
      "text-2xl font-semibold leading-none tracking-tight",
      t
    ),
    ...e
  }
));
Nr.displayName = "CardTitle";
const wr = n.forwardRef(({ className: t, ...e }, a) => /* @__PURE__ */ r.jsx(
  "div",
  {
    ref: a,
    className: s("text-sm text-muted-foreground", t),
    ...e
  }
));
wr.displayName = "CardDescription";
const jr = n.forwardRef(({ className: t, ...e }, a) => /* @__PURE__ */ r.jsx("div", { ref: a, className: s("p-6 pt-0", t), ...e }));
jr.displayName = "CardContent";
const Rr = n.forwardRef(({ className: t, ...e }, a) => /* @__PURE__ */ r.jsx(
  "div",
  {
    ref: a,
    className: s("flex items-center p-6 pt-0", t),
    ...e
  }
));
Rr.displayName = "CardFooter";
const Cr = n.forwardRef(({ className: t, ...e }, a) => /* @__PURE__ */ r.jsx(
  $e.Root,
  {
    ref: a,
    className: s(
      "peer h-4 w-4 shrink-0 rounded-sm border border-primary ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground",
      t
    ),
    ...e,
    children: /* @__PURE__ */ r.jsx(
      $e.Indicator,
      {
        className: s("flex items-center justify-center text-current"),
        children: /* @__PURE__ */ r.jsx(ge, { className: "h-4 w-4" })
      }
    )
  }
));
Cr.displayName = $e.Root.displayName;
const yn = Ke.Root, Nn = Ke.CollapsibleTrigger, wn = Ke.CollapsibleContent, Tr = R.Root, jn = R.Trigger, Sr = R.Portal, Rn = R.Close, Et = n.forwardRef(({ className: t, ...e }, a) => /* @__PURE__ */ r.jsx(
  R.Overlay,
  {
    ref: a,
    className: s(
      "fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      t
    ),
    ...e
  }
));
Et.displayName = R.Overlay.displayName;
const Ot = n.forwardRef(({ className: t, children: e, ...a }, i) => /* @__PURE__ */ r.jsxs(Sr, { children: [
  /* @__PURE__ */ r.jsx(Et, {}),
  /* @__PURE__ */ r.jsxs(
    R.Content,
    {
      ref: i,
      className: s(
        "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",
        t
      ),
      ...a,
      children: [
        e,
        /* @__PURE__ */ r.jsxs(R.Close, { className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground", children: [
          /* @__PURE__ */ r.jsx(Ye, { className: "h-4 w-4" }),
          /* @__PURE__ */ r.jsx("span", { className: "sr-only", children: "Close" })
        ] })
      ]
    }
  )
] }));
Ot.displayName = R.Content.displayName;
const _r = ({
  className: t,
  ...e
}) => /* @__PURE__ */ r.jsx(
  "div",
  {
    className: s(
      "flex flex-col space-y-1.5 text-center sm:text-left",
      t
    ),
    ...e
  }
);
_r.displayName = "DialogHeader";
const kr = ({
  className: t,
  ...e
}) => /* @__PURE__ */ r.jsx(
  "div",
  {
    className: s(
      "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",
      t
    ),
    ...e
  }
);
kr.displayName = "DialogFooter";
const Pr = n.forwardRef(({ className: t, ...e }, a) => /* @__PURE__ */ r.jsx(
  R.Title,
  {
    ref: a,
    className: s(
      "text-lg font-semibold leading-none tracking-tight",
      t
    ),
    ...e
  }
));
Pr.displayName = R.Title.displayName;
const Ir = n.forwardRef(({ className: t, ...e }, a) => /* @__PURE__ */ r.jsx(
  R.Description,
  {
    ref: a,
    className: s("text-sm text-muted-foreground", t),
    ...e
  }
));
Ir.displayName = R.Description.displayName;
const Mt = n.forwardRef(({ className: t, ...e }, a) => /* @__PURE__ */ r.jsx(
  O,
  {
    ref: a,
    className: s(
      "flex h-full w-full flex-col overflow-hidden rounded-md bg-popover text-popover-foreground",
      t
    ),
    ...e
  }
));
Mt.displayName = O.displayName;
const Cn = ({ children: t, ...e }) => /* @__PURE__ */ r.jsx(Tr, { ...e, children: /* @__PURE__ */ r.jsx(Ot, { className: "overflow-hidden p-0 shadow-lg", children: /* @__PURE__ */ r.jsx(Mt, { className: "[&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground [&_[cmdk-group]:not([hidden])_~[cmdk-group]]:pt-0 [&_[cmdk-group]]:px-2 [&_[cmdk-input-wrapper]_svg]:h-5 [&_[cmdk-input-wrapper]_svg]:w-5 [&_[cmdk-input]]:h-12 [&_[cmdk-item]]:px-2 [&_[cmdk-item]]:py-3 [&_[cmdk-item]_svg]:h-5 [&_[cmdk-item]_svg]:w-5", children: t }) }) }), Dr = n.forwardRef(({ className: t, ...e }, a) => /* @__PURE__ */ r.jsxs("div", { className: "flex items-center border-b px-3", "cmdk-input-wrapper": "", children: [
  /* @__PURE__ */ r.jsx(Ea, { className: "mr-2 h-4 w-4 shrink-0 opacity-50" }),
  /* @__PURE__ */ r.jsx(
    O.Input,
    {
      ref: a,
      className: s(
        "flex h-11 w-full rounded-md bg-transparent py-3 text-sm outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50",
        t
      ),
      ...e
    }
  )
] }));
Dr.displayName = O.Input.displayName;
const Er = n.forwardRef(({ className: t, ...e }, a) => /* @__PURE__ */ r.jsx(
  O.List,
  {
    ref: a,
    className: s(
      "max-h-[300px] overflow-y-auto overflow-x-hidden",
      t
    ),
    ...e
  }
));
Er.displayName = O.List.displayName;
const Or = n.forwardRef((t, e) => /* @__PURE__ */ r.jsx(
  O.Empty,
  {
    ref: e,
    className: "py-6 text-center text-sm",
    ...t
  }
));
Or.displayName = O.Empty.displayName;
const Mr = n.forwardRef(({ className: t, ...e }, a) => /* @__PURE__ */ r.jsx(
  O.Group,
  {
    ref: a,
    className: s(
      "overflow-hidden p-1 text-foreground [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground",
      t
    ),
    ...e
  }
));
Mr.displayName = O.Group.displayName;
const Ar = n.forwardRef(({ className: t, ...e }, a) => /* @__PURE__ */ r.jsx(
  O.Separator,
  {
    ref: a,
    className: s("-mx-1 h-px bg-border", t),
    ...e
  }
));
Ar.displayName = O.Separator.displayName;
const zr = n.forwardRef(({ className: t, ...e }, a) => /* @__PURE__ */ r.jsx(
  O.Item,
  {
    ref: a,
    className: s(
      "relative flex cursor-default gap-2 select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none data-[disabled=true]:pointer-events-none data-[selected='true']:bg-accent data-[selected=true]:text-accent-foreground data-[disabled=true]:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
      t
    ),
    ...e
  }
));
zr.displayName = O.Item.displayName;
const Fr = ({
  className: t,
  ...e
}) => /* @__PURE__ */ r.jsx(
  "span",
  {
    className: s(
      "ml-auto text-xs tracking-widest text-muted-foreground",
      t
    ),
    ...e
  }
);
Fr.displayName = "CommandShortcut";
const Tn = C.Root, Sn = C.Trigger, _n = C.Group, kn = C.Portal, Pn = C.Sub, In = C.RadioGroup, Lr = n.forwardRef(({ className: t, inset: e, children: a, ...i }, d) => /* @__PURE__ */ r.jsxs(
  C.SubTrigger,
  {
    ref: d,
    className: s(
      "flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground",
      e && "pl-8",
      t
    ),
    ...i,
    children: [
      a,
      /* @__PURE__ */ r.jsx(oe, { className: "ml-auto h-4 w-4" })
    ]
  }
));
Lr.displayName = C.SubTrigger.displayName;
const Vr = n.forwardRef(({ className: t, ...e }, a) => /* @__PURE__ */ r.jsx(
  C.SubContent,
  {
    ref: a,
    className: s(
      "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      t
    ),
    ...e
  }
));
Vr.displayName = C.SubContent.displayName;
const $r = n.forwardRef(({ className: t, ...e }, a) => /* @__PURE__ */ r.jsx(C.Portal, { children: /* @__PURE__ */ r.jsx(
  C.Content,
  {
    ref: a,
    className: s(
      "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md animate-in fade-in-80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      t
    ),
    ...e
  }
) }));
$r.displayName = C.Content.displayName;
const Br = n.forwardRef(({ className: t, inset: e, ...a }, i) => /* @__PURE__ */ r.jsx(
  C.Item,
  {
    ref: i,
    className: s(
      "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      e && "pl-8",
      t
    ),
    ...a
  }
));
Br.displayName = C.Item.displayName;
const Gr = n.forwardRef(({ className: t, children: e, checked: a, ...i }, d) => /* @__PURE__ */ r.jsxs(
  C.CheckboxItem,
  {
    ref: d,
    className: s(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      t
    ),
    checked: a,
    ...i,
    children: [
      /* @__PURE__ */ r.jsx("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ r.jsx(C.ItemIndicator, { children: /* @__PURE__ */ r.jsx(ge, { className: "h-4 w-4" }) }) }),
      e
    ]
  }
));
Gr.displayName = C.CheckboxItem.displayName;
const Hr = n.forwardRef(({ className: t, children: e, ...a }, i) => /* @__PURE__ */ r.jsxs(
  C.RadioItem,
  {
    ref: i,
    className: s(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      t
    ),
    ...a,
    children: [
      /* @__PURE__ */ r.jsx("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ r.jsx(C.ItemIndicator, { children: /* @__PURE__ */ r.jsx(Re, { className: "h-2 w-2 fill-current" }) }) }),
      e
    ]
  }
));
Hr.displayName = C.RadioItem.displayName;
const Wr = n.forwardRef(({ className: t, inset: e, ...a }, i) => /* @__PURE__ */ r.jsx(
  C.Label,
  {
    ref: i,
    className: s(
      "px-2 py-1.5 text-sm font-semibold text-foreground",
      e && "pl-8",
      t
    ),
    ...a
  }
));
Wr.displayName = C.Label.displayName;
const Yr = n.forwardRef(({ className: t, ...e }, a) => /* @__PURE__ */ r.jsx(
  C.Separator,
  {
    ref: a,
    className: s("-mx-1 my-1 h-px bg-border", t),
    ...e
  }
));
Yr.displayName = C.Separator.displayName;
const Ur = ({
  className: t,
  ...e
}) => /* @__PURE__ */ r.jsx(
  "span",
  {
    className: s(
      "ml-auto text-xs tracking-widest text-muted-foreground",
      t
    ),
    ...e
  }
);
Ur.displayName = "ContextMenuShortcut";
const Dn = T.Root, En = T.Trigger, On = T.Group, Mn = T.Portal, An = T.Sub, zn = T.RadioGroup, Kr = n.forwardRef(({ className: t, inset: e, children: a, ...i }, d) => /* @__PURE__ */ r.jsxs(
  T.SubTrigger,
  {
    ref: d,
    className: s(
      "flex cursor-default gap-2 select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent data-[state=open]:bg-accent [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
      e && "pl-8",
      t
    ),
    ...i,
    children: [
      a,
      /* @__PURE__ */ r.jsx(oe, { className: "ml-auto" })
    ]
  }
));
Kr.displayName = T.SubTrigger.displayName;
const qr = n.forwardRef(({ className: t, ...e }, a) => /* @__PURE__ */ r.jsx(
  T.SubContent,
  {
    ref: a,
    className: s(
      "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      t
    ),
    ...e
  }
));
qr.displayName = T.SubContent.displayName;
const Jr = n.forwardRef(({ className: t, sideOffset: e = 4, ...a }, i) => /* @__PURE__ */ r.jsx(T.Portal, { children: /* @__PURE__ */ r.jsx(
  T.Content,
  {
    ref: i,
    sideOffset: e,
    className: s(
      "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      t
    ),
    ...a
  }
) }));
Jr.displayName = T.Content.displayName;
const Xr = n.forwardRef(({ className: t, inset: e, ...a }, i) => /* @__PURE__ */ r.jsx(
  T.Item,
  {
    ref: i,
    className: s(
      "relative flex cursor-default select-none items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
      e && "pl-8",
      t
    ),
    ...a
  }
));
Xr.displayName = T.Item.displayName;
const Qr = n.forwardRef(({ className: t, children: e, checked: a, ...i }, d) => /* @__PURE__ */ r.jsxs(
  T.CheckboxItem,
  {
    ref: d,
    className: s(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      t
    ),
    checked: a,
    ...i,
    children: [
      /* @__PURE__ */ r.jsx("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ r.jsx(T.ItemIndicator, { children: /* @__PURE__ */ r.jsx(ge, { className: "h-4 w-4" }) }) }),
      e
    ]
  }
));
Qr.displayName = T.CheckboxItem.displayName;
const Zr = n.forwardRef(({ className: t, children: e, ...a }, i) => /* @__PURE__ */ r.jsxs(
  T.RadioItem,
  {
    ref: i,
    className: s(
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
Zr.displayName = T.RadioItem.displayName;
const eo = n.forwardRef(({ className: t, inset: e, ...a }, i) => /* @__PURE__ */ r.jsx(
  T.Label,
  {
    ref: i,
    className: s(
      "px-2 py-1.5 text-sm font-semibold",
      e && "pl-8",
      t
    ),
    ...a
  }
));
eo.displayName = T.Label.displayName;
const to = n.forwardRef(({ className: t, ...e }, a) => /* @__PURE__ */ r.jsx(
  T.Separator,
  {
    ref: a,
    className: s("-mx-1 my-1 h-px bg-muted", t),
    ...e
  }
));
to.displayName = T.Separator.displayName;
const ao = ({
  className: t,
  ...e
}) => /* @__PURE__ */ r.jsx(
  "span",
  {
    className: s(
      "ml-auto text-xs tracking-widest opacity-60",
      t
    ),
    ...e
  }
);
ao.displayName = "DropdownMenuShortcut";
const ro = U(
  "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
), At = n.forwardRef(({ className: t, ...e }, a) => /* @__PURE__ */ r.jsx(
  kt.Root,
  {
    ref: a,
    className: s(ro(), t),
    ...e
  }
));
At.displayName = kt.Root.displayName;
const Fn = Ga, zt = n.createContext(
  {}
), Ln = ({
  ...t
}) => /* @__PURE__ */ r.jsx(zt.Provider, { value: { name: t.name }, children: /* @__PURE__ */ r.jsx(Ha, { ...t }) }), Se = () => {
  const t = n.useContext(zt), e = n.useContext(Ft), { getFieldState: a, formState: i } = Wa(), d = a(t.name, i);
  if (!t)
    throw new Error("useFormField should be used within <FormField>");
  const { id: f } = e;
  return {
    id: f,
    name: t.name,
    formItemId: `${f}-form-item`,
    formDescriptionId: `${f}-form-item-description`,
    formMessageId: `${f}-form-item-message`,
    ...d
  };
}, Ft = n.createContext(
  {}
), oo = n.forwardRef(({ className: t, ...e }, a) => {
  const i = n.useId();
  return /* @__PURE__ */ r.jsx(Ft.Provider, { value: { id: i }, children: /* @__PURE__ */ r.jsx("div", { ref: a, className: s("space-y-2", t), ...e }) });
});
oo.displayName = "FormItem";
const so = n.forwardRef(({ className: t, ...e }, a) => {
  const { error: i, formItemId: d } = Se();
  return /* @__PURE__ */ r.jsx(
    At,
    {
      ref: a,
      className: s(i && "text-destructive", t),
      htmlFor: d,
      ...e
    }
  );
});
so.displayName = "FormLabel";
const no = n.forwardRef(({ ...t }, e) => {
  const { error: a, formItemId: i, formDescriptionId: d, formMessageId: f } = Se();
  return /* @__PURE__ */ r.jsx(
    Ue,
    {
      ref: e,
      id: i,
      "aria-describedby": a ? `${d} ${f}` : `${d}`,
      "aria-invalid": !!a,
      ...t
    }
  );
});
no.displayName = "FormControl";
const io = n.forwardRef(({ className: t, ...e }, a) => {
  const { formDescriptionId: i } = Se();
  return /* @__PURE__ */ r.jsx(
    "p",
    {
      ref: a,
      id: i,
      className: s("text-sm text-muted-foreground", t),
      ...e
    }
  );
});
io.displayName = "FormDescription";
const lo = n.forwardRef(({ className: t, children: e, ...a }, i) => {
  const { error: d, formMessageId: f } = Se(), x = d ? String(d == null ? void 0 : d.message) : e;
  return x ? /* @__PURE__ */ r.jsx(
    "p",
    {
      ref: i,
      id: f,
      className: s("text-sm font-medium text-destructive", t),
      ...a,
      children: x
    }
  ) : null;
});
lo.displayName = "FormMessage";
const Vn = Ce.Root, $n = Ce.Trigger, co = n.forwardRef(({ className: t, align: e = "center", sideOffset: a = 4, ...i }, d) => /* @__PURE__ */ r.jsx(
  Ce.Content,
  {
    ref: d,
    align: e,
    sideOffset: a,
    className: s(
      "z-50 w-64 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      t
    ),
    ...i
  }
));
co.displayName = Ce.Content.displayName;
const uo = n.forwardRef(
  ({ className: t, type: e, ...a }, i) => /* @__PURE__ */ r.jsx(
    "input",
    {
      type: e,
      className: s(
        "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
        t
      ),
      ref: i,
      ...a
    }
  )
);
uo.displayName = "Input";
const Bn = N.Menu, Gn = N.Group, Hn = N.Portal, Wn = N.Sub, Yn = N.RadioGroup, fo = n.forwardRef(({ className: t, ...e }, a) => /* @__PURE__ */ r.jsx(
  N.Root,
  {
    ref: a,
    className: s(
      "flex h-10 items-center space-x-1 rounded-md border bg-background p-1",
      t
    ),
    ...e
  }
));
fo.displayName = N.Root.displayName;
const mo = n.forwardRef(({ className: t, ...e }, a) => /* @__PURE__ */ r.jsx(
  N.Trigger,
  {
    ref: a,
    className: s(
      "flex cursor-default select-none items-center rounded-sm px-3 py-1.5 text-sm font-medium outline-none focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground",
      t
    ),
    ...e
  }
));
mo.displayName = N.Trigger.displayName;
const po = n.forwardRef(({ className: t, inset: e, children: a, ...i }, d) => /* @__PURE__ */ r.jsxs(
  N.SubTrigger,
  {
    ref: d,
    className: s(
      "flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground",
      e && "pl-8",
      t
    ),
    ...i,
    children: [
      a,
      /* @__PURE__ */ r.jsx(oe, { className: "ml-auto h-4 w-4" })
    ]
  }
));
po.displayName = N.SubTrigger.displayName;
const go = n.forwardRef(({ className: t, ...e }, a) => /* @__PURE__ */ r.jsx(
  N.SubContent,
  {
    ref: a,
    className: s(
      "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      t
    ),
    ...e
  }
));
go.displayName = N.SubContent.displayName;
const xo = n.forwardRef(
  ({
    className: t,
    align: e = "start",
    alignOffset: a = -4,
    sideOffset: i = 8,
    ...d
  }, f) => /* @__PURE__ */ r.jsx(N.Portal, { children: /* @__PURE__ */ r.jsx(
    N.Content,
    {
      ref: f,
      align: e,
      alignOffset: a,
      sideOffset: i,
      className: s(
        "z-50 min-w-[12rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
        t
      ),
      ...d
    }
  ) })
);
xo.displayName = N.Content.displayName;
const bo = n.forwardRef(({ className: t, inset: e, ...a }, i) => /* @__PURE__ */ r.jsx(
  N.Item,
  {
    ref: i,
    className: s(
      "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      e && "pl-8",
      t
    ),
    ...a
  }
));
bo.displayName = N.Item.displayName;
const vo = n.forwardRef(({ className: t, children: e, checked: a, ...i }, d) => /* @__PURE__ */ r.jsxs(
  N.CheckboxItem,
  {
    ref: d,
    className: s(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      t
    ),
    checked: a,
    ...i,
    children: [
      /* @__PURE__ */ r.jsx("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ r.jsx(N.ItemIndicator, { children: /* @__PURE__ */ r.jsx(ge, { className: "h-4 w-4" }) }) }),
      e
    ]
  }
));
vo.displayName = N.CheckboxItem.displayName;
const ho = n.forwardRef(({ className: t, children: e, ...a }, i) => /* @__PURE__ */ r.jsxs(
  N.RadioItem,
  {
    ref: i,
    className: s(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      t
    ),
    ...a,
    children: [
      /* @__PURE__ */ r.jsx("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ r.jsx(N.ItemIndicator, { children: /* @__PURE__ */ r.jsx(Re, { className: "h-2 w-2 fill-current" }) }) }),
      e
    ]
  }
));
ho.displayName = N.RadioItem.displayName;
const yo = n.forwardRef(({ className: t, inset: e, ...a }, i) => /* @__PURE__ */ r.jsx(
  N.Label,
  {
    ref: i,
    className: s(
      "px-2 py-1.5 text-sm font-semibold",
      e && "pl-8",
      t
    ),
    ...a
  }
));
yo.displayName = N.Label.displayName;
const No = n.forwardRef(({ className: t, ...e }, a) => /* @__PURE__ */ r.jsx(
  N.Separator,
  {
    ref: a,
    className: s("-mx-1 my-1 h-px bg-muted", t),
    ...e
  }
));
No.displayName = N.Separator.displayName;
const wo = ({
  className: t,
  ...e
}) => /* @__PURE__ */ r.jsx(
  "span",
  {
    className: s(
      "ml-auto text-xs tracking-widest text-muted-foreground",
      t
    ),
    ...e
  }
);
wo.displayname = "MenubarShortcut";
const jo = n.forwardRef(({ className: t, children: e, ...a }, i) => /* @__PURE__ */ r.jsxs(
  M.Root,
  {
    ref: i,
    className: s(
      "relative z-10 flex max-w-max flex-1 items-center justify-center",
      t
    ),
    ...a,
    children: [
      e,
      /* @__PURE__ */ r.jsx(Lt, {})
    ]
  }
));
jo.displayName = M.Root.displayName;
const Ro = n.forwardRef(({ className: t, ...e }, a) => /* @__PURE__ */ r.jsx(
  M.List,
  {
    ref: a,
    className: s(
      "group flex flex-1 list-none items-center justify-center space-x-1",
      t
    ),
    ...e
  }
));
Ro.displayName = M.List.displayName;
const Un = M.Item, Co = U(
  "group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
), To = n.forwardRef(({ className: t, children: e, ...a }, i) => /* @__PURE__ */ r.jsxs(
  M.Trigger,
  {
    ref: i,
    className: s(Co(), "group", t),
    ...a,
    children: [
      e,
      " ",
      /* @__PURE__ */ r.jsx(
        je,
        {
          className: "relative top-[1px] ml-1 h-3 w-3 transition duration-200 group-data-[state=open]:rotate-180",
          "aria-hidden": "true"
        }
      )
    ]
  }
));
To.displayName = M.Trigger.displayName;
const So = n.forwardRef(({ className: t, ...e }, a) => /* @__PURE__ */ r.jsx(
  M.Content,
  {
    ref: a,
    className: s(
      "left-0 top-0 w-full data-[motion^=from-]:animate-in data-[motion^=to-]:animate-out data-[motion^=from-]:fade-in data-[motion^=to-]:fade-out data-[motion=from-end]:slide-in-from-right-52 data-[motion=from-start]:slide-in-from-left-52 data-[motion=to-end]:slide-out-to-right-52 data-[motion=to-start]:slide-out-to-left-52 md:absolute md:w-auto ",
      t
    ),
    ...e
  }
));
So.displayName = M.Content.displayName;
const Kn = M.Link, Lt = n.forwardRef(({ className: t, ...e }, a) => /* @__PURE__ */ r.jsx("div", { className: s("absolute left-0 top-full flex justify-center"), children: /* @__PURE__ */ r.jsx(
  M.Viewport,
  {
    className: s(
      "origin-top-center relative mt-1.5 h-[var(--radix-navigation-menu-viewport-height)] w-full overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-90 md:w-[var(--radix-navigation-menu-viewport-width)]",
      t
    ),
    ref: a,
    ...e
  }
) }));
Lt.displayName = M.Viewport.displayName;
const _o = n.forwardRef(({ className: t, ...e }, a) => /* @__PURE__ */ r.jsx(
  M.Indicator,
  {
    ref: a,
    className: s(
      "top-full z-[1] flex h-1.5 items-end justify-center overflow-hidden data-[state=visible]:animate-in data-[state=hidden]:animate-out data-[state=hidden]:fade-out data-[state=visible]:fade-in",
      t
    ),
    ...e,
    children: /* @__PURE__ */ r.jsx("div", { className: "relative top-[60%] h-2 w-2 rotate-45 rounded-tl-sm bg-border shadow-md" })
  }
));
_o.displayName = M.Indicator.displayName;
const qn = me.Root, Jn = me.Trigger, ko = n.forwardRef(({ className: t, align: e = "center", sideOffset: a = 4, ...i }, d) => /* @__PURE__ */ r.jsx(me.Portal, { children: /* @__PURE__ */ r.jsx(
  me.Content,
  {
    ref: d,
    align: e,
    sideOffset: a,
    className: s(
      "z-50 w-72 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      t
    ),
    ...i
  }
) }));
ko.displayName = me.Content.displayName;
const Po = n.forwardRef(({ className: t, value: e, ...a }, i) => /* @__PURE__ */ r.jsx(
  Be.Root,
  {
    ref: i,
    className: s(
      "relative h-4 w-full overflow-hidden rounded-full bg-secondary",
      t
    ),
    ...a,
    children: /* @__PURE__ */ r.jsx(
      Be.Indicator,
      {
        className: "h-full w-full flex-1 bg-primary transition-all",
        style: { transform: `translateX(-${100 - (e || 0)}%)` }
      }
    )
  }
));
Po.displayName = Be.Root.displayName;
const Io = n.forwardRef(({ className: t, ...e }, a) => /* @__PURE__ */ r.jsx(
  pe.Root,
  {
    className: s("grid gap-2", t),
    ...e,
    ref: a
  }
));
Io.displayName = pe.Root.displayName;
const Do = n.forwardRef(({ className: t, ...e }, a) => /* @__PURE__ */ r.jsx(
  pe.Item,
  {
    ref: a,
    className: s(
      "aspect-square h-4 w-4 rounded-full border border-primary text-primary ring-offset-background focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
      t
    ),
    ...e,
    children: /* @__PURE__ */ r.jsx(pe.Indicator, { className: "flex items-center justify-center", children: /* @__PURE__ */ r.jsx(Re, { className: "h-2.5 w-2.5 fill-current text-current" }) })
  }
));
Do.displayName = pe.Item.displayName;
const Eo = n.forwardRef(({ className: t, children: e, ...a }, i) => /* @__PURE__ */ r.jsxs(
  Q.Root,
  {
    ref: i,
    className: s("relative overflow-hidden", t),
    ...a,
    children: [
      /* @__PURE__ */ r.jsx(Q.Viewport, { className: "h-full w-full rounded-[inherit]", children: e }),
      /* @__PURE__ */ r.jsx(Vt, {}),
      /* @__PURE__ */ r.jsx(Q.Corner, {})
    ]
  }
));
Eo.displayName = Q.Root.displayName;
const Vt = n.forwardRef(({ className: t, orientation: e = "vertical", ...a }, i) => /* @__PURE__ */ r.jsx(
  Q.ScrollAreaScrollbar,
  {
    ref: i,
    orientation: e,
    className: s(
      "flex touch-none select-none transition-colors",
      e === "vertical" && "h-full w-2.5 border-l border-l-transparent p-[1px]",
      e === "horizontal" && "h-2.5 flex-col border-t border-t-transparent p-[1px]",
      t
    ),
    ...a,
    children: /* @__PURE__ */ r.jsx(Q.ScrollAreaThumb, { className: "relative flex-1 rounded-full bg-border" })
  }
));
Vt.displayName = Q.ScrollAreaScrollbar.displayName;
const Xn = S.Root, Qn = S.Group, Zn = S.Value, Oo = n.forwardRef(({ className: t, children: e, ...a }, i) => /* @__PURE__ */ r.jsxs(
  S.Trigger,
  {
    ref: i,
    className: s(
      "flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1",
      t
    ),
    ...a,
    children: [
      e,
      /* @__PURE__ */ r.jsx(S.Icon, { asChild: !0, children: /* @__PURE__ */ r.jsx(je, { className: "h-4 w-4 opacity-50" }) })
    ]
  }
));
Oo.displayName = S.Trigger.displayName;
const $t = n.forwardRef(({ className: t, ...e }, a) => /* @__PURE__ */ r.jsx(
  S.ScrollUpButton,
  {
    ref: a,
    className: s(
      "flex cursor-default items-center justify-center py-1",
      t
    ),
    ...e,
    children: /* @__PURE__ */ r.jsx(Oa, { className: "h-4 w-4" })
  }
));
$t.displayName = S.ScrollUpButton.displayName;
const Bt = n.forwardRef(({ className: t, ...e }, a) => /* @__PURE__ */ r.jsx(
  S.ScrollDownButton,
  {
    ref: a,
    className: s(
      "flex cursor-default items-center justify-center py-1",
      t
    ),
    ...e,
    children: /* @__PURE__ */ r.jsx(je, { className: "h-4 w-4" })
  }
));
Bt.displayName = S.ScrollDownButton.displayName;
const Mo = n.forwardRef(({ className: t, children: e, position: a = "popper", ...i }, d) => /* @__PURE__ */ r.jsx(S.Portal, { children: /* @__PURE__ */ r.jsxs(
  S.Content,
  {
    ref: d,
    className: s(
      "relative z-50 max-h-96 min-w-[8rem] overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      a === "popper" && "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",
      t
    ),
    position: a,
    ...i,
    children: [
      /* @__PURE__ */ r.jsx($t, {}),
      /* @__PURE__ */ r.jsx(
        S.Viewport,
        {
          className: s(
            "p-1",
            a === "popper" && "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"
          ),
          children: e
        }
      ),
      /* @__PURE__ */ r.jsx(Bt, {})
    ]
  }
) }));
Mo.displayName = S.Content.displayName;
const Ao = n.forwardRef(({ className: t, ...e }, a) => /* @__PURE__ */ r.jsx(
  S.Label,
  {
    ref: a,
    className: s("py-1.5 pl-8 pr-2 text-sm font-semibold", t),
    ...e
  }
));
Ao.displayName = S.Label.displayName;
const zo = n.forwardRef(({ className: t, children: e, ...a }, i) => /* @__PURE__ */ r.jsxs(
  S.Item,
  {
    ref: i,
    className: s(
      "relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      t
    ),
    ...a,
    children: [
      /* @__PURE__ */ r.jsx("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ r.jsx(S.ItemIndicator, { children: /* @__PURE__ */ r.jsx(ge, { className: "h-4 w-4" }) }) }),
      /* @__PURE__ */ r.jsx(S.ItemText, { children: e })
    ]
  }
));
zo.displayName = S.Item.displayName;
const Fo = n.forwardRef(({ className: t, ...e }, a) => /* @__PURE__ */ r.jsx(
  S.Separator,
  {
    ref: a,
    className: s("-mx-1 my-1 h-px bg-muted", t),
    ...e
  }
));
Fo.displayName = S.Separator.displayName;
const Lo = n.forwardRef(
  ({ className: t, orientation: e = "horizontal", decorative: a = !0, ...i }, d) => /* @__PURE__ */ r.jsx(
    Pt.Root,
    {
      ref: d,
      decorative: a,
      orientation: e,
      className: s(
        "shrink-0 bg-border",
        e === "horizontal" ? "h-[1px] w-full" : "h-full w-[1px]",
        t
      ),
      ...i
    }
  )
);
Lo.displayName = Pt.Root.displayName;
const ei = R.Root, ti = R.Trigger, ai = R.Close, Vo = R.Portal, Gt = n.forwardRef(({ className: t, ...e }, a) => /* @__PURE__ */ r.jsx(
  R.Overlay,
  {
    className: s(
      "fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      t
    ),
    ...e,
    ref: a
  }
));
Gt.displayName = R.Overlay.displayName;
const $o = U(
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
), Bo = n.forwardRef(({ side: t = "right", className: e, children: a, ...i }, d) => /* @__PURE__ */ r.jsxs(Vo, { children: [
  /* @__PURE__ */ r.jsx(Gt, {}),
  /* @__PURE__ */ r.jsxs(
    R.Content,
    {
      ref: d,
      className: s($o({ side: t }), e),
      ...i,
      children: [
        a,
        /* @__PURE__ */ r.jsxs(R.Close, { className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary", children: [
          /* @__PURE__ */ r.jsx(Ye, { className: "h-4 w-4" }),
          /* @__PURE__ */ r.jsx("span", { className: "sr-only", children: "Close" })
        ] })
      ]
    }
  )
] }));
Bo.displayName = R.Content.displayName;
const Go = ({
  className: t,
  ...e
}) => /* @__PURE__ */ r.jsx(
  "div",
  {
    className: s(
      "flex flex-col space-y-2 text-center sm:text-left",
      t
    ),
    ...e
  }
);
Go.displayName = "SheetHeader";
const Ho = ({
  className: t,
  ...e
}) => /* @__PURE__ */ r.jsx(
  "div",
  {
    className: s(
      "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",
      t
    ),
    ...e
  }
);
Ho.displayName = "SheetFooter";
const Wo = n.forwardRef(({ className: t, ...e }, a) => /* @__PURE__ */ r.jsx(
  R.Title,
  {
    ref: a,
    className: s("text-lg font-semibold text-foreground", t),
    ...e
  }
));
Wo.displayName = R.Title.displayName;
const Yo = n.forwardRef(({ className: t, ...e }, a) => /* @__PURE__ */ r.jsx(
  R.Description,
  {
    ref: a,
    className: s("text-sm text-muted-foreground", t),
    ...e
  }
));
Yo.displayName = R.Description.displayName;
function ri({
  className: t,
  ...e
}) {
  return /* @__PURE__ */ r.jsx(
    "div",
    {
      className: s("animate-pulse rounded-md bg-muted", t),
      ...e
    }
  );
}
const Uo = n.forwardRef(({ className: t, ...e }, a) => /* @__PURE__ */ r.jsxs(
  ue.Root,
  {
    ref: a,
    className: s(
      "relative flex w-full touch-none select-none items-center",
      t
    ),
    ...e,
    children: [
      /* @__PURE__ */ r.jsx(ue.Track, { className: "relative h-2 w-full grow overflow-hidden rounded-full bg-secondary", children: /* @__PURE__ */ r.jsx(ue.Range, { className: "absolute h-full bg-primary" }) }),
      /* @__PURE__ */ r.jsx(ue.Thumb, { className: "block h-5 w-5 rounded-full border-2 border-primary bg-background ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50" })
    ]
  }
));
Uo.displayName = ue.Root.displayName;
const Ko = n.forwardRef(({ className: t, ...e }, a) => /* @__PURE__ */ r.jsx(
  Ge.Root,
  {
    className: s(
      "peer inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=unchecked]:bg-input",
      t
    ),
    ...e,
    ref: a,
    children: /* @__PURE__ */ r.jsx(
      Ge.Thumb,
      {
        className: s(
          "pointer-events-none block h-5 w-5 rounded-full bg-background shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0"
        )
      }
    )
  }
));
Ko.displayName = Ge.Root.displayName;
const qo = n.forwardRef(({ className: t, ...e }, a) => /* @__PURE__ */ r.jsx("div", { className: "relative w-full overflow-auto", children: /* @__PURE__ */ r.jsx(
  "table",
  {
    ref: a,
    className: s("w-full caption-bottom text-sm", t),
    ...e
  }
) }));
qo.displayName = "Table";
const Jo = n.forwardRef(({ className: t, ...e }, a) => /* @__PURE__ */ r.jsx("thead", { ref: a, className: s("[&_tr]:border-b", t), ...e }));
Jo.displayName = "TableHeader";
const Xo = n.forwardRef(({ className: t, ...e }, a) => /* @__PURE__ */ r.jsx(
  "tbody",
  {
    ref: a,
    className: s("[&_tr:last-child]:border-0", t),
    ...e
  }
));
Xo.displayName = "TableBody";
const Qo = n.forwardRef(({ className: t, ...e }, a) => /* @__PURE__ */ r.jsx(
  "tfoot",
  {
    ref: a,
    className: s(
      "border-t bg-muted/50 font-medium [&>tr]:last:border-b-0",
      t
    ),
    ...e
  }
));
Qo.displayName = "TableFooter";
const Zo = n.forwardRef(({ className: t, ...e }, a) => /* @__PURE__ */ r.jsx(
  "tr",
  {
    ref: a,
    className: s(
      "border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted",
      t
    ),
    ...e
  }
));
Zo.displayName = "TableRow";
const es = n.forwardRef(({ className: t, ...e }, a) => /* @__PURE__ */ r.jsx(
  "th",
  {
    ref: a,
    className: s(
      "h-12 px-4 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0",
      t
    ),
    ...e
  }
));
es.displayName = "TableHead";
const ts = n.forwardRef(({ className: t, ...e }, a) => /* @__PURE__ */ r.jsx(
  "td",
  {
    ref: a,
    className: s(
      "p-4 align-middle [&:has([role=checkbox])]:pr-0",
      t
    ),
    ...e
  }
));
ts.displayName = "TableCell";
const as = n.forwardRef(({ className: t, ...e }, a) => /* @__PURE__ */ r.jsx(
  "caption",
  {
    ref: a,
    className: s("mt-4 text-sm text-muted-foreground", t),
    ...e
  }
));
as.displayName = "TableCaption";
const oi = ee.Root, rs = n.forwardRef(({ className: t, ...e }, a) => /* @__PURE__ */ r.jsx(
  ee.List,
  {
    ref: a,
    className: s(
      "inline-flex h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground",
      t
    ),
    ...e
  }
));
rs.displayName = ee.List.displayName;
const os = n.forwardRef(({ className: t, ...e }, a) => /* @__PURE__ */ r.jsx(
  ee.Trigger,
  {
    ref: a,
    className: s(
      "inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm",
      t
    ),
    ...e
  }
));
os.displayName = ee.Trigger.displayName;
const ss = n.forwardRef(({ className: t, ...e }, a) => /* @__PURE__ */ r.jsx(
  ee.Content,
  {
    ref: a,
    className: s(
      "mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
      t
    ),
    ...e
  }
));
ss.displayName = ee.Content.displayName;
const ns = n.forwardRef(({ className: t, ...e }, a) => /* @__PURE__ */ r.jsx(
  "textarea",
  {
    className: s(
      "flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
      t
    ),
    ref: a,
    ...e
  }
));
ns.displayName = "Textarea";
const is = V.Provider, Ht = n.forwardRef(({ className: t, ...e }, a) => /* @__PURE__ */ r.jsx(
  V.Viewport,
  {
    ref: a,
    className: s(
      "fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]",
      t
    ),
    ...e
  }
));
Ht.displayName = V.Viewport.displayName;
const ls = U(
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
), Wt = n.forwardRef(({ className: t, variant: e, ...a }, i) => /* @__PURE__ */ r.jsx(
  V.Root,
  {
    ref: i,
    className: s(ls({ variant: e }), t),
    ...a
  }
));
Wt.displayName = V.Root.displayName;
const ds = n.forwardRef(({ className: t, ...e }, a) => /* @__PURE__ */ r.jsx(
  V.Action,
  {
    ref: a,
    className: s(
      "inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium ring-offset-background transition-colors hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 group-[.destructive]:border-muted/40 group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground group-[.destructive]:focus:ring-destructive",
      t
    ),
    ...e
  }
));
ds.displayName = V.Action.displayName;
const Yt = n.forwardRef(({ className: t, ...e }, a) => /* @__PURE__ */ r.jsx(
  V.Close,
  {
    ref: a,
    className: s(
      "absolute right-2 top-2 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity hover:text-foreground focus:opacity-100 focus:outline-none focus:ring-2 group-hover:opacity-100 group-[.destructive]:text-red-300 group-[.destructive]:hover:text-red-50 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600",
      t
    ),
    "toast-close": "",
    ...e,
    children: /* @__PURE__ */ r.jsx(Ye, { className: "h-4 w-4" })
  }
));
Yt.displayName = V.Close.displayName;
const Ut = n.forwardRef(({ className: t, ...e }, a) => /* @__PURE__ */ r.jsx(
  V.Title,
  {
    ref: a,
    className: s("text-sm font-semibold", t),
    ...e
  }
));
Ut.displayName = V.Title.displayName;
const Kt = n.forwardRef(({ className: t, ...e }, a) => /* @__PURE__ */ r.jsx(
  V.Description,
  {
    ref: a,
    className: s("text-sm opacity-90", t),
    ...e
  }
));
Kt.displayName = V.Description.displayName;
const cs = 1, us = 1e6;
let Fe = 0;
function fs() {
  return Fe = (Fe + 1) % Number.MAX_SAFE_INTEGER, Fe.toString();
}
const Le = /* @__PURE__ */ new Map(), Ct = (t) => {
  if (Le.has(t))
    return;
  const e = setTimeout(() => {
    Le.delete(t), fe({
      type: "REMOVE_TOAST",
      toastId: t
    });
  }, us);
  Le.set(t, e);
}, ms = (t, e) => {
  switch (e.type) {
    case "ADD_TOAST":
      return {
        ...t,
        toasts: [e.toast, ...t.toasts].slice(0, cs)
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
      return a ? Ct(a) : t.toasts.forEach((i) => {
        Ct(i.id);
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
}, Ne = [];
let we = { toasts: [] };
function fe(t) {
  we = ms(we, t), Ne.forEach((e) => {
    e(we);
  });
}
function ps({ ...t }) {
  const e = fs(), a = (d) => fe({
    type: "UPDATE_TOAST",
    toast: { ...d, id: e }
  }), i = () => fe({ type: "DISMISS_TOAST", toastId: e });
  return fe({
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
function gs() {
  const [t, e] = n.useState(we);
  return n.useEffect(() => (Ne.push(e), () => {
    const a = Ne.indexOf(e);
    a > -1 && Ne.splice(a, 1);
  }), [t]), {
    ...t,
    toast: ps,
    dismiss: (a) => fe({ type: "DISMISS_TOAST", toastId: a })
  };
}
function si() {
  const { toasts: t } = gs();
  return /* @__PURE__ */ r.jsxs(is, { children: [
    t.map(function({
      id: e,
      title: a,
      description: i,
      action: d,
      ...f
    }) {
      return /* @__PURE__ */ r.jsxs(Wt, { ...f, children: [
        /* @__PURE__ */ r.jsxs("div", { className: "grid gap-1", children: [
          a && /* @__PURE__ */ r.jsx(Ut, { children: a }),
          i && /* @__PURE__ */ r.jsx(Kt, { children: i })
        ] }),
        d,
        /* @__PURE__ */ r.jsx(Yt, {})
      ] }, e);
    }),
    /* @__PURE__ */ r.jsx(Ht, {})
  ] });
}
const qt = U(
  "inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors hover:bg-muted hover:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=on]:bg-accent data-[state=on]:text-accent-foreground [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 gap-2",
  {
    variants: {
      variant: {
        default: "bg-transparent",
        outline: "border border-input bg-transparent hover:bg-accent hover:text-accent-foreground"
      },
      size: {
        default: "h-10 px-3 min-w-10",
        sm: "h-9 px-2.5 min-w-9",
        lg: "h-11 px-5 min-w-11"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
), xs = n.forwardRef(({ className: t, variant: e, size: a, ...i }, d) => /* @__PURE__ */ r.jsx(
  It.Root,
  {
    ref: d,
    className: s(qt({ variant: e, size: a, className: t })),
    ...i
  }
));
xs.displayName = It.Root.displayName;
const ni = xe.Provider, ii = xe.Root, li = xe.Trigger, bs = n.forwardRef(({ className: t, sideOffset: e = 4, ...a }, i) => /* @__PURE__ */ r.jsx(
  xe.Content,
  {
    ref: i,
    sideOffset: e,
    className: s(
      "z-50 overflow-hidden rounded-md border bg-popover px-3 py-1.5 text-sm text-popover-foreground shadow-md animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      t
    ),
    ...a
  }
));
bs.displayName = xe.Content.displayName;
const di = ({
  className: t,
  ...e
}) => /* @__PURE__ */ r.jsx(
  qe.PanelGroup,
  {
    className: s(
      "flex h-full w-full data-[panel-group-direction=vertical]:flex-col",
      t
    ),
    ...e
  }
), ci = qe.Panel, ui = ({
  withHandle: t,
  className: e,
  ...a
}) => /* @__PURE__ */ r.jsx(
  qe.PanelResizeHandle,
  {
    className: s(
      "relative flex w-px items-center justify-center bg-border after:absolute after:inset-y-0 after:left-1/2 after:w-1 after:-translate-x-1/2 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring focus-visible:ring-offset-1 data-[panel-group-direction=vertical]:h-px data-[panel-group-direction=vertical]:w-full data-[panel-group-direction=vertical]:after:left-0 data-[panel-group-direction=vertical]:after:h-1 data-[panel-group-direction=vertical]:after:w-full data-[panel-group-direction=vertical]:after:-translate-y-1/2 data-[panel-group-direction=vertical]:after:translate-x-0 [&[data-panel-group-direction=vertical]>div]:rotate-90",
      e
    ),
    ...a,
    children: t && /* @__PURE__ */ r.jsx("div", { className: "z-10 flex h-4 w-3 items-center justify-center rounded-sm border bg-border", children: /* @__PURE__ */ r.jsx(Ma, { className: "h-2.5 w-2.5" }) })
  }
), vs = n.forwardRef(({ className: t, containerClassName: e, ...a }, i) => /* @__PURE__ */ r.jsx(
  Ya,
  {
    ref: i,
    containerClassName: s(
      "flex items-center gap-2 has-[:disabled]:opacity-50",
      e
    ),
    className: s("disabled:cursor-not-allowed", t),
    ...a
  }
));
vs.displayName = "InputOTP";
const hs = n.forwardRef(({ className: t, ...e }, a) => /* @__PURE__ */ r.jsx("div", { ref: a, className: s("flex items-center", t), ...e }));
hs.displayName = "InputOTPGroup";
const ys = n.forwardRef(({ index: t, className: e, ...a }, i) => {
  const d = n.useContext(Ua), { char: f, hasFakeCaret: x, isActive: v } = d.slots[t];
  return /* @__PURE__ */ r.jsxs(
    "div",
    {
      ref: i,
      className: s(
        "relative flex h-10 w-10 items-center justify-center border-y border-r border-input text-sm transition-all first:rounded-l-md first:border-l last:rounded-r-md",
        v && "z-10 ring-2 ring-ring ring-offset-background",
        e
      ),
      ...a,
      children: [
        f,
        x && /* @__PURE__ */ r.jsx("div", { className: "pointer-events-none absolute inset-0 flex items-center justify-center", children: /* @__PURE__ */ r.jsx("div", { className: "h-4 w-px animate-caret-blink bg-foreground duration-1000" }) })
      ]
    }
  );
});
ys.displayName = "InputOTPSlot";
const Ns = n.forwardRef(({ ...t }, e) => /* @__PURE__ */ r.jsx("div", { ref: e, role: "separator", ...t, children: /* @__PURE__ */ r.jsx(Aa, {}) }));
Ns.displayName = "InputOTPSeparator";
const ws = n.forwardRef(({ ...t }, e) => /* @__PURE__ */ r.jsx("nav", { ref: e, "aria-label": "breadcrumb", ...t }));
ws.displayName = "Breadcrumb";
const js = n.forwardRef(({ className: t, ...e }, a) => /* @__PURE__ */ r.jsx(
  "ol",
  {
    ref: a,
    className: s(
      "flex flex-wrap items-center gap-1.5 break-words text-sm text-muted-foreground sm:gap-2.5",
      t
    ),
    ...e
  }
));
js.displayName = "BreadcrumbList";
const Rs = n.forwardRef(({ className: t, ...e }, a) => /* @__PURE__ */ r.jsx(
  "li",
  {
    ref: a,
    className: s("inline-flex items-center gap-1.5", t),
    ...e
  }
));
Rs.displayName = "BreadcrumbItem";
const Cs = n.forwardRef(({ asChild: t, className: e, ...a }, i) => {
  const d = t ? Ue : "a";
  return /* @__PURE__ */ r.jsx(
    d,
    {
      ref: i,
      className: s("transition-colors hover:text-foreground", e),
      ...a
    }
  );
});
Cs.displayName = "BreadcrumbLink";
const Ts = n.forwardRef(({ className: t, ...e }, a) => /* @__PURE__ */ r.jsx(
  "span",
  {
    ref: a,
    role: "link",
    "aria-disabled": "true",
    "aria-current": "page",
    className: s("font-normal text-foreground", t),
    ...e
  }
));
Ts.displayName = "BreadcrumbPage";
const Ss = ({
  children: t,
  className: e,
  ...a
}) => /* @__PURE__ */ r.jsx(
  "li",
  {
    role: "presentation",
    "aria-hidden": "true",
    className: s("[&>svg]:w-3.5 [&>svg]:h-3.5", e),
    ...a,
    children: t ?? /* @__PURE__ */ r.jsx(oe, {})
  }
);
Ss.displayName = "BreadcrumbSeparator";
const _s = ({
  className: t,
  ...e
}) => /* @__PURE__ */ r.jsxs(
  "span",
  {
    role: "presentation",
    "aria-hidden": "true",
    className: s("flex h-9 w-9 items-center justify-center", t),
    ...e,
    children: [
      /* @__PURE__ */ r.jsx(_t, { className: "h-4 w-4" }),
      /* @__PURE__ */ r.jsx("span", { className: "sr-only", children: "More" })
    ]
  }
);
_s.displayName = "BreadcrumbElipssis";
const Jt = n.createContext({
  size: "default",
  variant: "default"
}), ks = n.forwardRef(({ className: t, variant: e, size: a, children: i, ...d }, f) => /* @__PURE__ */ r.jsx(
  Te.Root,
  {
    ref: f,
    className: s("flex items-center justify-center gap-1", t),
    ...d,
    children: /* @__PURE__ */ r.jsx(Jt.Provider, { value: { variant: e, size: a }, children: i })
  }
));
ks.displayName = Te.Root.displayName;
const Ps = n.forwardRef(({ className: t, children: e, variant: a, size: i, ...d }, f) => {
  const x = n.useContext(Jt);
  return /* @__PURE__ */ r.jsx(
    Te.Item,
    {
      ref: f,
      className: s(
        qt({
          variant: x.variant || a,
          size: x.size || i
        }),
        t
      ),
      ...d,
      children: e
    }
  );
});
Ps.displayName = Te.Item.displayName;
const fi = ({ ...t }) => {
  const { theme: e = "system" } = Ka();
  return /* @__PURE__ */ r.jsx(
    qa,
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
}, Is = ({ className: t, ...e }) => /* @__PURE__ */ r.jsx(
  "nav",
  {
    role: "navigation",
    "aria-label": "pagination",
    className: s("mx-auto flex w-full justify-center", t),
    ...e
  }
);
Is.displayName = "Pagination";
const Ds = n.forwardRef(({ className: t, ...e }, a) => /* @__PURE__ */ r.jsx(
  "ul",
  {
    ref: a,
    className: s("flex flex-row items-center gap-1", t),
    ...e
  }
));
Ds.displayName = "PaginationContent";
const Es = n.forwardRef(({ className: t, ...e }, a) => /* @__PURE__ */ r.jsx("li", { ref: a, className: s("", t), ...e }));
Es.displayName = "PaginationItem";
const Qe = ({
  className: t,
  isActive: e,
  size: a = "icon",
  ...i
}) => /* @__PURE__ */ r.jsx(
  "a",
  {
    "aria-current": e ? "page" : void 0,
    className: s(
      re({
        variant: e ? "outline" : "ghost",
        size: a
      }),
      t
    ),
    ...i
  }
);
Qe.displayName = "PaginationLink";
const Os = ({
  className: t,
  ...e
}) => /* @__PURE__ */ r.jsxs(
  Qe,
  {
    "aria-label": "Go to previous page",
    size: "default",
    className: s("gap-1 pl-2.5", t),
    ...e,
    children: [
      /* @__PURE__ */ r.jsx(St, { className: "h-4 w-4" }),
      /* @__PURE__ */ r.jsx("span", { children: "Previous" })
    ]
  }
);
Os.displayName = "PaginationPrevious";
const Ms = ({
  className: t,
  ...e
}) => /* @__PURE__ */ r.jsxs(
  Qe,
  {
    "aria-label": "Go to next page",
    size: "default",
    className: s("gap-1 pr-2.5", t),
    ...e,
    children: [
      /* @__PURE__ */ r.jsx("span", { children: "Next" }),
      /* @__PURE__ */ r.jsx(oe, { className: "h-4 w-4" })
    ]
  }
);
Ms.displayName = "PaginationNext";
const As = ({
  className: t,
  ...e
}) => /* @__PURE__ */ r.jsxs(
  "span",
  {
    "aria-hidden": !0,
    className: s("flex h-9 w-9 items-center justify-center", t),
    ...e,
    children: [
      /* @__PURE__ */ r.jsx(_t, { className: "h-4 w-4" }),
      /* @__PURE__ */ r.jsx("span", { className: "sr-only", children: "More pages" })
    ]
  }
);
As.displayName = "PaginationEllipsis";
const zs = ({
  shouldScaleBackground: t = !0,
  ...e
}) => /* @__PURE__ */ r.jsx(
  B.Root,
  {
    shouldScaleBackground: t,
    ...e
  }
);
zs.displayName = "Drawer";
const mi = B.Trigger, Fs = B.Portal, pi = B.Close, Xt = n.forwardRef(({ className: t, ...e }, a) => /* @__PURE__ */ r.jsx(
  B.Overlay,
  {
    ref: a,
    className: s("fixed inset-0 z-50 bg-black/80", t),
    ...e
  }
));
Xt.displayName = B.Overlay.displayName;
const Ls = n.forwardRef(({ className: t, children: e, ...a }, i) => /* @__PURE__ */ r.jsxs(Fs, { children: [
  /* @__PURE__ */ r.jsx(Xt, {}),
  /* @__PURE__ */ r.jsxs(
    B.Content,
    {
      ref: i,
      className: s(
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
Ls.displayName = "DrawerContent";
const Vs = ({
  className: t,
  ...e
}) => /* @__PURE__ */ r.jsx(
  "div",
  {
    className: s("grid gap-1.5 p-4 text-center sm:text-left", t),
    ...e
  }
);
Vs.displayName = "DrawerHeader";
const $s = ({
  className: t,
  ...e
}) => /* @__PURE__ */ r.jsx(
  "div",
  {
    className: s("mt-auto flex flex-col gap-2 p-4", t),
    ...e
  }
);
$s.displayName = "DrawerFooter";
const Bs = n.forwardRef(({ className: t, ...e }, a) => /* @__PURE__ */ r.jsx(
  B.Title,
  {
    ref: a,
    className: s(
      "text-lg font-semibold leading-none tracking-tight",
      t
    ),
    ...e
  }
));
Bs.displayName = B.Title.displayName;
const Gs = n.forwardRef(({ className: t, ...e }, a) => /* @__PURE__ */ r.jsx(
  B.Description,
  {
    ref: a,
    className: s("text-sm text-muted-foreground", t),
    ...e
  }
));
Gs.displayName = B.Description.displayName;
const Qt = n.createContext(null);
function _e() {
  const t = n.useContext(Qt);
  if (!t)
    throw new Error("useCarousel must be used within a <Carousel />");
  return t;
}
const Hs = n.forwardRef(
  ({
    orientation: t = "horizontal",
    opts: e,
    setApi: a,
    plugins: i,
    className: d,
    children: f,
    ...x
  }, v) => {
    const [j, m] = Ja(
      {
        ...e,
        axis: t === "horizontal" ? "x" : "y"
      },
      i
    ), [P, A] = n.useState(!1), [z, W] = n.useState(!1), F = n.useCallback((y) => {
      y && (A(y.canScrollPrev()), W(y.canScrollNext()));
    }, []), Y = n.useCallback(() => {
      m == null || m.scrollPrev();
    }, [m]), G = n.useCallback(() => {
      m == null || m.scrollNext();
    }, [m]), h = n.useCallback(
      (y) => {
        y.key === "ArrowLeft" ? (y.preventDefault(), Y()) : y.key === "ArrowRight" && (y.preventDefault(), G());
      },
      [Y, G]
    );
    return n.useEffect(() => {
      !m || !a || a(m);
    }, [m, a]), n.useEffect(() => {
      if (m)
        return F(m), m.on("reInit", F), m.on("select", F), () => {
          m == null || m.off("select", F);
        };
    }, [m, F]), /* @__PURE__ */ r.jsx(
      Qt.Provider,
      {
        value: {
          carouselRef: j,
          api: m,
          opts: e,
          orientation: t || ((e == null ? void 0 : e.axis) === "y" ? "vertical" : "horizontal"),
          scrollPrev: Y,
          scrollNext: G,
          canScrollPrev: P,
          canScrollNext: z
        },
        children: /* @__PURE__ */ r.jsx(
          "div",
          {
            ref: v,
            onKeyDownCapture: h,
            className: s("relative", d),
            role: "region",
            "aria-roledescription": "carousel",
            ...x,
            children: f
          }
        )
      }
    );
  }
);
Hs.displayName = "Carousel";
const Ws = n.forwardRef(({ className: t, ...e }, a) => {
  const { carouselRef: i, orientation: d } = _e();
  return /* @__PURE__ */ r.jsx("div", { ref: i, className: "overflow-hidden", children: /* @__PURE__ */ r.jsx(
    "div",
    {
      ref: a,
      className: s(
        "flex",
        d === "horizontal" ? "-ml-4" : "-mt-4 flex-col",
        t
      ),
      ...e
    }
  ) });
});
Ws.displayName = "CarouselContent";
const Ys = n.forwardRef(({ className: t, ...e }, a) => {
  const { orientation: i } = _e();
  return /* @__PURE__ */ r.jsx(
    "div",
    {
      ref: a,
      role: "group",
      "aria-roledescription": "slide",
      className: s(
        "min-w-0 shrink-0 grow-0 basis-full",
        i === "horizontal" ? "pl-4" : "pt-4",
        t
      ),
      ...e
    }
  );
});
Ys.displayName = "CarouselItem";
const Us = n.forwardRef(({ className: t, variant: e = "outline", size: a = "icon", ...i }, d) => {
  const { orientation: f, scrollPrev: x, canScrollPrev: v } = _e();
  return /* @__PURE__ */ r.jsxs(
    Xe,
    {
      ref: d,
      variant: e,
      size: a,
      className: s(
        "absolute  h-8 w-8 rounded-full",
        f === "horizontal" ? "-left-12 top-1/2 -translate-y-1/2" : "-top-12 left-1/2 -translate-x-1/2 rotate-90",
        t
      ),
      disabled: !v,
      onClick: x,
      ...i,
      children: [
        /* @__PURE__ */ r.jsx(za, { className: "h-4 w-4" }),
        /* @__PURE__ */ r.jsx("span", { className: "sr-only", children: "Previous slide" })
      ]
    }
  );
});
Us.displayName = "CarouselPrevious";
const Ks = n.forwardRef(({ className: t, variant: e = "outline", size: a = "icon", ...i }, d) => {
  const { orientation: f, scrollNext: x, canScrollNext: v } = _e();
  return /* @__PURE__ */ r.jsxs(
    Xe,
    {
      ref: d,
      variant: e,
      size: a,
      className: s(
        "absolute h-8 w-8 rounded-full",
        f === "horizontal" ? "-right-12 top-1/2 -translate-y-1/2" : "-bottom-12 left-1/2 -translate-x-1/2 rotate-90",
        t
      ),
      disabled: !v,
      onClick: x,
      ...i,
      children: [
        /* @__PURE__ */ r.jsx(Fa, { className: "h-4 w-4" }),
        /* @__PURE__ */ r.jsx("span", { className: "sr-only", children: "Next slide" })
      ]
    }
  );
});
Ks.displayName = "CarouselNext";
const qs = { light: "", dark: ".dark" }, Zt = n.createContext(null);
function ea() {
  const t = n.useContext(Zt);
  if (!t)
    throw new Error("useChart must be used within a <ChartContainer />");
  return t;
}
const Js = n.forwardRef(({ id: t, className: e, children: a, config: i, ...d }, f) => {
  const x = n.useId(), v = `chart-${t || x.replace(/:/g, "")}`;
  return /* @__PURE__ */ r.jsx(Zt.Provider, { value: { config: i }, children: /* @__PURE__ */ r.jsxs(
    "div",
    {
      "data-chart": v,
      ref: f,
      className: s(
        "flex aspect-video justify-center text-xs [&_.recharts-cartesian-axis-tick_text]:fill-muted-foreground [&_.recharts-cartesian-grid_line[stroke='#ccc']]:stroke-border/50 [&_.recharts-curve.recharts-tooltip-cursor]:stroke-border [&_.recharts-dot[stroke='#fff']]:stroke-transparent [&_.recharts-layer]:outline-none [&_.recharts-polar-grid_[stroke='#ccc']]:stroke-border [&_.recharts-radial-bar-background-sector]:fill-muted [&_.recharts-rectangle.recharts-tooltip-cursor]:fill-muted [&_.recharts-reference-line_[stroke='#ccc']]:stroke-border [&_.recharts-sector[stroke='#fff']]:stroke-transparent [&_.recharts-sector]:outline-none [&_.recharts-surface]:outline-none",
        e
      ),
      ...d,
      children: [
        /* @__PURE__ */ r.jsx(Xs, { id: v, config: i }),
        /* @__PURE__ */ r.jsx(Je.ResponsiveContainer, { children: a })
      ]
    }
  ) });
});
Js.displayName = "Chart";
const Xs = ({ id: t, config: e }) => {
  const a = Object.entries(e).filter(
    ([, i]) => i.theme || i.color
  );
  return a.length ? /* @__PURE__ */ r.jsx(
    "style",
    {
      dangerouslySetInnerHTML: {
        __html: Object.entries(qs).map(
          ([i, d]) => `
${d} [data-chart=${t}] {
${a.map(([f, x]) => {
            var j;
            const v = ((j = x.theme) == null ? void 0 : j[i]) || x.color;
            return v ? `  --color-${f}: ${v};` : null;
          }).join(`
`)}
}
`
        ).join(`
`)
      }
    }
  ) : null;
}, gi = Je.Tooltip, Qs = n.forwardRef(
  ({
    active: t,
    payload: e,
    className: a,
    indicator: i = "dot",
    hideLabel: d = !1,
    hideIndicator: f = !1,
    label: x,
    labelFormatter: v,
    labelClassName: j,
    formatter: m,
    color: P,
    nameKey: A,
    labelKey: z
  }, W) => {
    const { config: F } = ea(), Y = n.useMemo(() => {
      var q;
      if (d || !(e != null && e.length))
        return null;
      const [h] = e, y = `${z || h.dataKey || h.name || "value"}`, K = We(F, h, y), L = !z && typeof x == "string" ? ((q = F[x]) == null ? void 0 : q.label) || x : K == null ? void 0 : K.label;
      return v ? /* @__PURE__ */ r.jsx("div", { className: s("font-medium", j), children: v(L, e) }) : L ? /* @__PURE__ */ r.jsx("div", { className: s("font-medium", j), children: L }) : null;
    }, [
      x,
      v,
      e,
      d,
      j,
      F,
      z
    ]);
    if (!t || !(e != null && e.length))
      return null;
    const G = e.length === 1 && i !== "dot";
    return /* @__PURE__ */ r.jsxs(
      "div",
      {
        ref: W,
        className: s(
          "grid min-w-[8rem] items-start gap-1.5 rounded-lg border border-border/50 bg-background px-2.5 py-1.5 text-xs shadow-xl",
          a
        ),
        children: [
          G ? null : Y,
          /* @__PURE__ */ r.jsx("div", { className: "grid gap-1.5", children: e.map((h, y) => {
            const K = `${A || h.name || h.dataKey || "value"}`, L = We(
              F,
              h,
              K
            ), q = P || h.payload.fill || h.color;
            return /* @__PURE__ */ r.jsx(
              "div",
              {
                className: s(
                  "flex w-full flex-wrap items-stretch gap-2 [&>svg]:h-2.5 [&>svg]:w-2.5 [&>svg]:text-muted-foreground",
                  i === "dot" && "items-center"
                ),
                children: m && (h == null ? void 0 : h.value) !== void 0 && h.name ? m(
                  h.value,
                  h.name,
                  h,
                  y,
                  h.payload
                ) : /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
                  L != null && L.icon ? /* @__PURE__ */ r.jsx(L.icon, {}) : !f && /* @__PURE__ */ r.jsx(
                    "div",
                    {
                      className: s(
                        "shrink-0 rounded-[2px] border-[--color-border] bg-[--color-bg]",
                        {
                          "h-2.5 w-2.5": i === "dot",
                          "w-1": i === "line",
                          "w-0 border-[1.5px] border-dashed bg-transparent": i === "dashed",
                          "my-0.5": G && i === "dashed"
                        }
                      ),
                      style: {
                        "--color-bg": q,
                        "--color-border": q
                      }
                    }
                  ),
                  /* @__PURE__ */ r.jsxs(
                    "div",
                    {
                      className: s(
                        "flex flex-1 justify-between leading-none",
                        G ? "items-end" : "items-center"
                      ),
                      children: [
                        /* @__PURE__ */ r.jsxs("div", { className: "grid gap-1.5", children: [
                          G ? Y : null,
                          /* @__PURE__ */ r.jsx("span", { className: "text-muted-foreground", children: (L == null ? void 0 : L.label) || h.name })
                        ] }),
                        h.value && /* @__PURE__ */ r.jsx("span", { className: "font-mono font-medium tabular-nums text-foreground", children: h.value.toLocaleString() })
                      ]
                    }
                  )
                ] })
              },
              h.dataKey
            );
          }) })
        ]
      }
    );
  }
);
Qs.displayName = "ChartTooltip";
const xi = Je.Legend, Zs = n.forwardRef(
  ({
    className: t,
    hideIcon: e = !1,
    payload: a,
    verticalAlign: i = "bottom",
    nameKey: d
  }, f) => {
    const { config: x } = ea();
    return a != null && a.length ? /* @__PURE__ */ r.jsx(
      "div",
      {
        ref: f,
        className: s(
          "flex items-center justify-center gap-4",
          i === "top" ? "pb-3" : "pt-3",
          t
        ),
        children: a.map((v) => {
          const j = `${d || v.dataKey || "value"}`, m = We(
            x,
            v,
            j
          );
          return /* @__PURE__ */ r.jsxs(
            "div",
            {
              className: s(
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
Zs.displayName = "ChartLegend";
function We(t, e, a) {
  if (typeof e != "object" || e === null)
    return;
  const i = "payload" in e && typeof e.payload == "object" && e.payload !== null ? e.payload : void 0;
  let d = a;
  return a in e && typeof e[a] == "string" ? d = e[a] : i && a in i && typeof i[a] == "string" && (d = i[a]), d in t ? t[d] : t[a];
}
const Ve = 768;
function bi() {
  const [t, e] = n.useState(
    void 0
  );
  return n.useEffect(() => {
    const a = window.matchMedia(
      `(max-width: ${Ve - 1}px)`
    ), i = () => {
      e(window.innerWidth < Ve);
    };
    return a.addEventListener("change", i), e(window.innerWidth < Ve), () => a.removeEventListener("change", i);
  }, []), !!t;
}
export {
  gn as Accordion,
  tr as AccordionContent,
  Za as AccordionItem,
  er as AccordionTrigger,
  ur as Alert,
  mr as AlertDescription,
  xn as AlertDialog,
  lr as AlertDialogAction,
  dr as AlertDialogCancel,
  rr as AlertDialogContent,
  ir as AlertDialogDescription,
  sr as AlertDialogFooter,
  or as AlertDialogHeader,
  Dt as AlertDialogOverlay,
  ar as AlertDialogPortal,
  nr as AlertDialogTitle,
  bn as AlertDialogTrigger,
  fr as AlertTitle,
  vn as AspectRatio,
  pr as Avatar,
  xr as AvatarFallback,
  gr as AvatarImage,
  hn as Badge,
  ws as Breadcrumb,
  _s as BreadcrumbEllipsis,
  Rs as BreadcrumbItem,
  Cs as BreadcrumbLink,
  js as BreadcrumbList,
  Ts as BreadcrumbPage,
  Ss as BreadcrumbSeparator,
  Xe as Button,
  vr as Calendar,
  hr as Card,
  jr as CardContent,
  wr as CardDescription,
  Rr as CardFooter,
  yr as CardHeader,
  Nr as CardTitle,
  Hs as Carousel,
  Ws as CarouselContent,
  Ys as CarouselItem,
  Ks as CarouselNext,
  Us as CarouselPrevious,
  Js as ChartContainer,
  xi as ChartLegend,
  Zs as ChartLegendContent,
  Xs as ChartStyle,
  gi as ChartTooltip,
  Qs as ChartTooltipContent,
  Cr as Checkbox,
  yn as Collapsible,
  wn as CollapsibleContent,
  Nn as CollapsibleTrigger,
  Mt as Command,
  Cn as CommandDialog,
  Or as CommandEmpty,
  Mr as CommandGroup,
  Dr as CommandInput,
  zr as CommandItem,
  Er as CommandList,
  Ar as CommandSeparator,
  Fr as CommandShortcut,
  Tn as ContextMenu,
  Gr as ContextMenuCheckboxItem,
  $r as ContextMenuContent,
  _n as ContextMenuGroup,
  Br as ContextMenuItem,
  Wr as ContextMenuLabel,
  kn as ContextMenuPortal,
  In as ContextMenuRadioGroup,
  Hr as ContextMenuRadioItem,
  Yr as ContextMenuSeparator,
  Ur as ContextMenuShortcut,
  Pn as ContextMenuSub,
  Vr as ContextMenuSubContent,
  Lr as ContextMenuSubTrigger,
  Sn as ContextMenuTrigger,
  Tr as Dialog,
  Rn as DialogClose,
  Ot as DialogContent,
  Ir as DialogDescription,
  kr as DialogFooter,
  _r as DialogHeader,
  Et as DialogOverlay,
  Sr as DialogPortal,
  Pr as DialogTitle,
  jn as DialogTrigger,
  zs as Drawer,
  pi as DrawerClose,
  Ls as DrawerContent,
  Gs as DrawerDescription,
  $s as DrawerFooter,
  Vs as DrawerHeader,
  Xt as DrawerOverlay,
  Fs as DrawerPortal,
  Bs as DrawerTitle,
  mi as DrawerTrigger,
  Dn as DropdownMenu,
  Qr as DropdownMenuCheckboxItem,
  Jr as DropdownMenuContent,
  On as DropdownMenuGroup,
  Xr as DropdownMenuItem,
  eo as DropdownMenuLabel,
  Mn as DropdownMenuPortal,
  zn as DropdownMenuRadioGroup,
  Zr as DropdownMenuRadioItem,
  to as DropdownMenuSeparator,
  ao as DropdownMenuShortcut,
  An as DropdownMenuSub,
  qr as DropdownMenuSubContent,
  Kr as DropdownMenuSubTrigger,
  En as DropdownMenuTrigger,
  Fn as Form,
  no as FormControl,
  io as FormDescription,
  Ln as FormField,
  oo as FormItem,
  so as FormLabel,
  lo as FormMessage,
  Vn as HoverCard,
  co as HoverCardContent,
  $n as HoverCardTrigger,
  uo as Input,
  vs as InputOTP,
  hs as InputOTPGroup,
  Ns as InputOTPSeparator,
  ys as InputOTPSlot,
  At as Label,
  fo as Menubar,
  vo as MenubarCheckboxItem,
  xo as MenubarContent,
  Gn as MenubarGroup,
  bo as MenubarItem,
  yo as MenubarLabel,
  Bn as MenubarMenu,
  Hn as MenubarPortal,
  Yn as MenubarRadioGroup,
  ho as MenubarRadioItem,
  No as MenubarSeparator,
  wo as MenubarShortcut,
  Wn as MenubarSub,
  go as MenubarSubContent,
  po as MenubarSubTrigger,
  mo as MenubarTrigger,
  jo as NavigationMenu,
  So as NavigationMenuContent,
  _o as NavigationMenuIndicator,
  Un as NavigationMenuItem,
  Kn as NavigationMenuLink,
  Ro as NavigationMenuList,
  To as NavigationMenuTrigger,
  Lt as NavigationMenuViewport,
  Is as Pagination,
  Ds as PaginationContent,
  As as PaginationEllipsis,
  Es as PaginationItem,
  Qe as PaginationLink,
  Ms as PaginationNext,
  Os as PaginationPrevious,
  qn as Popover,
  ko as PopoverContent,
  Jn as PopoverTrigger,
  Po as Progress,
  Io as RadioGroup,
  Do as RadioGroupItem,
  ui as ResizableHandle,
  ci as ResizablePanel,
  di as ResizablePanelGroup,
  Eo as ScrollArea,
  Vt as ScrollBar,
  Xn as Select,
  Mo as SelectContent,
  Qn as SelectGroup,
  zo as SelectItem,
  Ao as SelectLabel,
  Bt as SelectScrollDownButton,
  $t as SelectScrollUpButton,
  Fo as SelectSeparator,
  Oo as SelectTrigger,
  Zn as SelectValue,
  Lo as Separator,
  ei as Sheet,
  ai as SheetClose,
  Bo as SheetContent,
  Yo as SheetDescription,
  Ho as SheetFooter,
  Go as SheetHeader,
  Gt as SheetOverlay,
  Vo as SheetPortal,
  Wo as SheetTitle,
  ti as SheetTrigger,
  ri as Skeleton,
  Uo as Slider,
  fi as SonnerToast,
  Ko as Switch,
  qo as Table,
  Xo as TableBody,
  as as TableCaption,
  ts as TableCell,
  Qo as TableFooter,
  es as TableHead,
  Jo as TableHeader,
  Zo as TableRow,
  oi as Tabs,
  ss as TabsContent,
  rs as TabsList,
  os as TabsTrigger,
  ns as Textarea,
  Wt as Toast,
  ds as ToastAction,
  Yt as ToastClose,
  Kt as ToastDescription,
  is as ToastProvider,
  Ut as ToastTitle,
  Ht as ToastViewport,
  si as Toaster,
  xs as Toggle,
  ks as ToggleGroup,
  Ps as ToggleGroupItem,
  ii as Tooltip,
  bs as TooltipContent,
  ni as TooltipProvider,
  li as TooltipTrigger,
  br as badgeVariants,
  re as buttonVariants,
  s as cn,
  Co as navigationMenuTriggerStyle,
  ms as reducer,
  ps as toast,
  qt as toggleVariants,
  Se as useFormField,
  bi as useIsMobile,
  gs as useToast
};
