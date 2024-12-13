import * as n from "react";
import Bt from "react";
import * as V from "@radix-ui/react-accordion";
import { ChevronDown as De, ChevronLeft as ct, ChevronRight as U, Check as oe, X as ze, Search as $t, Circle as ce, GripVertical as Yt, Dot as Ut, MoreHorizontal as mt, ArrowLeft as Wt, ArrowRight as qt } from "lucide-react";
import { clsx as Jt } from "clsx";
import { twMerge as Xt } from "tailwind-merge";
import * as j from "@radix-ui/react-alert-dialog";
import { Slot as Oe } from "@radix-ui/react-slot";
import { cva as D } from "class-variance-authority";
import * as Kt from "@radix-ui/react-aspect-ratio";
import * as W from "@radix-ui/react-avatar";
import { DayPicker as Qt } from "react-day-picker";
import * as _e from "@radix-ui/react-checkbox";
import * as Fe from "@radix-ui/react-collapsible";
import { Command as C } from "cmdk";
import * as x from "@radix-ui/react-dialog";
import * as g from "@radix-ui/react-context-menu";
import * as b from "@radix-ui/react-dropdown-menu";
import { FormProvider as Zt, Controller as ea, useFormContext as ta } from "react-hook-form";
import * as ut from "@radix-ui/react-label";
import * as me from "@radix-ui/react-hover-card";
import * as p from "@radix-ui/react-menubar";
import * as T from "@radix-ui/react-navigation-menu";
import * as te from "@radix-ui/react-popover";
import * as Ae from "@radix-ui/react-progress";
import * as ae from "@radix-ui/react-radio-group";
import * as G from "@radix-ui/react-scroll-area";
import * as h from "@radix-ui/react-select";
import * as ft from "@radix-ui/react-separator";
import * as Z from "@radix-ui/react-slider";
import * as Me from "@radix-ui/react-switch";
import * as H from "@radix-ui/react-tabs";
import * as S from "@radix-ui/react-toast";
import * as pt from "@radix-ui/react-toggle";
import * as re from "@radix-ui/react-tooltip";
import * as Le from "react-resizable-panels";
import { OTPInput as aa } from "input-otp";
import * as ue from "@radix-ui/react-toggle-group";
import { useTheme as oa } from "next-themes";
import { Toaster as ra } from "sonner";
import { Drawer as P } from "vaul";
import sa from "embla-carousel-react";
var ie = { exports: {} }, K = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var nt;
function na() {
  if (nt) return K;
  nt = 1;
  var e = Symbol.for("react.transitional.element"), t = Symbol.for("react.fragment");
  function a(i, d, u) {
    var v = null;
    if (u !== void 0 && (v = "" + u), d.key !== void 0 && (v = "" + d.key), "key" in d) {
      u = {};
      for (var k in d)
        k !== "key" && (u[k] = d[k]);
    } else u = d;
    return d = u.ref, {
      $$typeof: e,
      type: i,
      key: v,
      ref: d !== void 0 ? d : null,
      props: u
    };
  }
  return K.Fragment = t, K.jsx = a, K.jsxs = a, K;
}
var Q = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var it;
function ia() {
  return it || (it = 1, process.env.NODE_ENV !== "production" && function() {
    function e(r) {
      if (r == null) return null;
      if (typeof r == "function")
        return r.$$typeof === Gt ? null : r.displayName || r.name || null;
      if (typeof r == "string") return r;
      switch (r) {
        case ve:
          return "Fragment";
        case Ft:
          return "Portal";
        case Be:
          return "Profiler";
        case He:
          return "StrictMode";
        case we:
          return "Suspense";
        case je:
          return "SuspenseList";
      }
      if (typeof r == "object")
        switch (typeof r.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), r.$$typeof) {
          case Ye:
            return (r.displayName || "Context") + ".Provider";
          case $e:
            return (r._context.displayName || "Context") + ".Consumer";
          case he:
            var l = r.render;
            return r = r.displayName, r || (r = l.displayName || l.name || "", r = r !== "" ? "ForwardRef(" + r + ")" : "ForwardRef"), r;
          case Re:
            return l = r.displayName || null, l !== null ? l : e(r.type) || "Memo";
          case Ce:
            l = r._payload, r = r._init;
            try {
              return e(r(l));
            } catch {
            }
        }
      return null;
    }
    function t(r) {
      return "" + r;
    }
    function a(r) {
      try {
        t(r);
        var l = !1;
      } catch {
        l = !0;
      }
      if (l) {
        l = console;
        var c = l.error, f = typeof Symbol == "function" && Symbol.toStringTag && r[Symbol.toStringTag] || r.constructor.name || "Object";
        return c.call(
          l,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          f
        ), t(r);
      }
    }
    function i() {
    }
    function d() {
      if (J === 0) {
        qe = console.log, Je = console.info, Xe = console.warn, Ke = console.error, Qe = console.group, Ze = console.groupCollapsed, et = console.groupEnd;
        var r = {
          configurable: !0,
          enumerable: !0,
          value: i,
          writable: !0
        };
        Object.defineProperties(console, {
          info: r,
          log: r,
          warn: r,
          error: r,
          group: r,
          groupCollapsed: r,
          groupEnd: r
        });
      }
      J++;
    }
    function u() {
      if (J--, J === 0) {
        var r = { configurable: !0, enumerable: !0, writable: !0 };
        Object.defineProperties(console, {
          log: F({}, r, { value: qe }),
          info: F({}, r, { value: Je }),
          warn: F({}, r, { value: Xe }),
          error: F({}, r, { value: Ke }),
          group: F({}, r, { value: Qe }),
          groupCollapsed: F({}, r, { value: Ze }),
          groupEnd: F({}, r, { value: et })
        });
      }
      0 > J && console.error(
        "disabledDepth fell below zero. This is a bug in React. Please file an issue."
      );
    }
    function v(r) {
      if (Se === void 0)
        try {
          throw Error();
        } catch (c) {
          var l = c.stack.trim().match(/\n( *(at )?)/);
          Se = l && l[1] || "", tt = -1 < c.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < c.stack.indexOf("@") ? "@unknown:0:0" : "";
        }
      return `
` + Se + r + tt;
    }
    function k(r, l) {
      if (!r || ke) return "";
      var c = Pe.get(r);
      if (c !== void 0) return c;
      ke = !0, c = Error.prepareStackTrace, Error.prepareStackTrace = void 0;
      var f = null;
      f = O.H, O.H = null, d();
      try {
        var w = {
          DetermineComponentFrameRoot: function() {
            try {
              if (l) {
                var M = function() {
                  throw Error();
                };
                if (Object.defineProperty(M.prototype, "props", {
                  set: function() {
                    throw Error();
                  }
                }), typeof Reflect == "object" && Reflect.construct) {
                  try {
                    Reflect.construct(M, []);
                  } catch (_) {
                    var ne = _;
                  }
                  Reflect.construct(r, [], M);
                } else {
                  try {
                    M.call();
                  } catch (_) {
                    ne = _;
                  }
                  r.call(M.prototype);
                }
              } else {
                try {
                  throw Error();
                } catch (_) {
                  ne = _;
                }
                (M = r()) && typeof M.catch == "function" && M.catch(function() {
                });
              }
            } catch (_) {
              if (_ && ne && typeof _.stack == "string")
                return [_.stack, ne.stack];
            }
            return [null, null];
          }
        };
        w.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
        var y = Object.getOwnPropertyDescriptor(
          w.DetermineComponentFrameRoot,
          "name"
        );
        y && y.configurable && Object.defineProperty(
          w.DetermineComponentFrameRoot,
          "name",
          { value: "DetermineComponentFrameRoot" }
        );
        var m = w.DetermineComponentFrameRoot(), I = m[0], $ = m[1];
        if (I && $) {
          var R = I.split(`
`), L = $.split(`
`);
          for (m = y = 0; y < R.length && !R[y].includes(
            "DetermineComponentFrameRoot"
          ); )
            y++;
          for (; m < L.length && !L[m].includes(
            "DetermineComponentFrameRoot"
          ); )
            m++;
          if (y === R.length || m === L.length)
            for (y = R.length - 1, m = L.length - 1; 1 <= y && 0 <= m && R[y] !== L[m]; )
              m--;
          for (; 1 <= y && 0 <= m; y--, m--)
            if (R[y] !== L[m]) {
              if (y !== 1 || m !== 1)
                do
                  if (y--, m--, 0 > m || R[y] !== L[m]) {
                    var X = `
` + R[y].replace(
                      " at new ",
                      " at "
                    );
                    return r.displayName && X.includes("<anonymous>") && (X = X.replace("<anonymous>", r.displayName)), typeof r == "function" && Pe.set(r, X), X;
                  }
                while (1 <= y && 0 <= m);
              break;
            }
        }
      } finally {
        ke = !1, O.H = f, u(), Error.prepareStackTrace = c;
      }
      return R = (R = r ? r.displayName || r.name : "") ? v(R) : "", typeof r == "function" && Pe.set(r, R), R;
    }
    function q(r) {
      if (r == null) return "";
      if (typeof r == "function") {
        var l = r.prototype;
        return k(
          r,
          !(!l || !l.isReactComponent)
        );
      }
      if (typeof r == "string") return v(r);
      switch (r) {
        case we:
          return v("Suspense");
        case je:
          return v("SuspenseList");
      }
      if (typeof r == "object")
        switch (r.$$typeof) {
          case he:
            return r = k(r.render, !1), r;
          case Re:
            return q(r.type);
          case Ce:
            l = r._payload, r = r._init;
            try {
              return q(r(l));
            } catch {
            }
        }
      return "";
    }
    function N() {
      var r = O.A;
      return r === null ? null : r.getOwner();
    }
    function xe(r) {
      if (We.call(r, "key")) {
        var l = Object.getOwnPropertyDescriptor(r, "key").get;
        if (l && l.isReactWarning) return !1;
      }
      return r.key !== void 0;
    }
    function ge(r, l) {
      function c() {
        at || (at = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          l
        ));
      }
      c.isReactWarning = !0, Object.defineProperty(r, "key", {
        get: c,
        configurable: !0
      });
    }
    function be() {
      var r = e(this.type);
      return ot[r] || (ot[r] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), r = this.props.ref, r !== void 0 ? r : null;
    }
    function Ne(r, l, c, f, w, y) {
      return c = y.ref, r = {
        $$typeof: ye,
        type: r,
        key: l,
        props: y,
        _owner: w
      }, (c !== void 0 ? c : null) !== null ? Object.defineProperty(r, "ref", {
        enumerable: !1,
        get: be
      }) : Object.defineProperty(r, "ref", { enumerable: !1, value: null }), r._store = {}, Object.defineProperty(r._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      }), Object.defineProperty(r, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      }), Object.freeze && (Object.freeze(r.props), Object.freeze(r)), r;
    }
    function A(r, l, c, f, w, y) {
      if (typeof r == "string" || typeof r == "function" || r === ve || r === Be || r === He || r === we || r === je || r === Lt || typeof r == "object" && r !== null && (r.$$typeof === Ce || r.$$typeof === Re || r.$$typeof === Ye || r.$$typeof === $e || r.$$typeof === he || r.$$typeof === Vt || r.getModuleId !== void 0)) {
        var m = l.children;
        if (m !== void 0)
          if (f)
            if (Te(m)) {
              for (f = 0; f < m.length; f++)
                B(m[f], r);
              Object.freeze && Object.freeze(m);
            } else
              console.error(
                "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
              );
          else B(m, r);
      } else
        m = "", (r === void 0 || typeof r == "object" && r !== null && Object.keys(r).length === 0) && (m += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports."), r === null ? f = "null" : Te(r) ? f = "array" : r !== void 0 && r.$$typeof === ye ? (f = "<" + (e(r.type) || "Unknown") + " />", m = " Did you accidentally export a JSX literal instead of a component?") : f = typeof r, console.error(
          "React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s",
          f,
          m
        );
      if (We.call(l, "key")) {
        m = e(r);
        var I = Object.keys(l).filter(function(R) {
          return R !== "key";
        });
        f = 0 < I.length ? "{key: someKey, " + I.join(": ..., ") + ": ...}" : "{key: someKey}", rt[m + f] || (I = 0 < I.length ? "{" + I.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          f,
          m,
          I,
          m
        ), rt[m + f] = !0);
      }
      if (m = null, c !== void 0 && (a(c), m = "" + c), xe(l) && (a(l.key), m = "" + l.key), "key" in l) {
        c = {};
        for (var $ in l)
          $ !== "key" && (c[$] = l[$]);
      } else c = l;
      return m && ge(
        c,
        typeof r == "function" ? r.displayName || r.name || "Unknown" : r
      ), Ne(r, m, y, w, N(), c);
    }
    function B(r, l) {
      if (typeof r == "object" && r && r.$$typeof !== Ht) {
        if (Te(r))
          for (var c = 0; c < r.length; c++) {
            var f = r[c];
            z(f) && se(f, l);
          }
        else if (z(r))
          r._store && (r._store.validated = 1);
        else if (r === null || typeof r != "object" ? c = null : (c = Ue && r[Ue] || r["@@iterator"], c = typeof c == "function" ? c : null), typeof c == "function" && c !== r.entries && (c = c.call(r), c !== r))
          for (; !(r = c.next()).done; )
            z(r.value) && se(r.value, l);
      }
    }
    function z(r) {
      return typeof r == "object" && r !== null && r.$$typeof === ye;
    }
    function se(r, l) {
      if (r._store && !r._store.validated && r.key == null && (r._store.validated = 1, l = E(l), !st[l])) {
        st[l] = !0;
        var c = "";
        r && r._owner != null && r._owner !== N() && (c = null, typeof r._owner.tag == "number" ? c = e(r._owner.type) : typeof r._owner.name == "string" && (c = r._owner.name), c = " It was passed a child from " + c + ".");
        var f = O.getCurrentStack;
        O.getCurrentStack = function() {
          var w = q(r.type);
          return f && (w += f() || ""), w;
        }, console.error(
          'Each child in a list should have a unique "key" prop.%s%s See https://react.dev/link/warning-keys for more information.',
          l,
          c
        ), O.getCurrentStack = f;
      }
    }
    function E(r) {
      var l = "", c = N();
      return c && (c = e(c.type)) && (l = `

Check the render method of \`` + c + "`."), l || (r = e(r)) && (l = `

Check the top-level render call using <` + r + ">."), l;
    }
    var Ot = Bt, ye = Symbol.for("react.transitional.element"), Ft = Symbol.for("react.portal"), ve = Symbol.for("react.fragment"), He = Symbol.for("react.strict_mode"), Be = Symbol.for("react.profiler"), $e = Symbol.for("react.consumer"), Ye = Symbol.for("react.context"), he = Symbol.for("react.forward_ref"), we = Symbol.for("react.suspense"), je = Symbol.for("react.suspense_list"), Re = Symbol.for("react.memo"), Ce = Symbol.for("react.lazy"), Lt = Symbol.for("react.offscreen"), Ue = Symbol.iterator, Gt = Symbol.for("react.client.reference"), O = Ot.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, We = Object.prototype.hasOwnProperty, F = Object.assign, Vt = Symbol.for("react.client.reference"), Te = Array.isArray, J = 0, qe, Je, Xe, Ke, Qe, Ze, et;
    i.__reactDisabledLog = !0;
    var Se, tt, ke = !1, Pe = new (typeof WeakMap == "function" ? WeakMap : Map)(), Ht = Symbol.for("react.client.reference"), at, ot = {}, rt = {}, st = {};
    Q.Fragment = ve, Q.jsx = function(r, l, c, f, w) {
      return A(r, l, c, !1, f, w);
    }, Q.jsxs = function(r, l, c, f, w) {
      return A(r, l, c, !0, f, w);
    };
  }()), Q;
}
var dt;
function da() {
  return dt || (dt = 1, process.env.NODE_ENV === "production" ? ie.exports = na() : ie.exports = ia()), ie.exports;
}
var o = da();
function s(...e) {
  return Xt(Jt(e));
}
const gs = V.Root, la = n.forwardRef(({ className: e, ...t }, a) => /* @__PURE__ */ o.jsx(
  V.Item,
  {
    ref: a,
    className: s("border-b", e),
    ...t
  }
));
la.displayName = "AccordionItem";
const ca = n.forwardRef(({ className: e, children: t, ...a }, i) => /* @__PURE__ */ o.jsx(V.Header, { className: "flex", children: /* @__PURE__ */ o.jsxs(
  V.Trigger,
  {
    ref: i,
    className: s(
      "flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180",
      e
    ),
    ...a,
    children: [
      t,
      /* @__PURE__ */ o.jsx(De, { className: "h-4 w-4 shrink-0 transition-transform duration-200" })
    ]
  }
) }));
ca.displayName = V.Trigger.displayName;
const ma = n.forwardRef(({ className: e, children: t, ...a }, i) => /* @__PURE__ */ o.jsx(
  V.Content,
  {
    ref: i,
    className: s(
      "overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down",
      e
    ),
    ...a,
    children: /* @__PURE__ */ o.jsx("div", { className: "pb-4 pt-0", children: t })
  }
));
ma.displayName = V.Content.displayName;
const Y = D(
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
), Ge = n.forwardRef(
  ({ className: e, variant: t, size: a, asChild: i = !1, ...d }, u) => {
    const v = i ? Oe : "button";
    return /* @__PURE__ */ o.jsx(
      v,
      {
        className: s(Y({ variant: t, size: a, className: e })),
        ref: u,
        ...d
      }
    );
  }
);
Ge.displayName = "Button";
const bs = j.Root, Ns = j.Trigger, xt = ({
  ...e
}) => /* @__PURE__ */ o.jsx(j.Portal, { ...e });
xt.displayName = j.Portal.displayName;
const gt = n.forwardRef(({ className: e, ...t }, a) => /* @__PURE__ */ o.jsx(
  j.Overlay,
  {
    className: s(
      "fixed inset-0 z-50 bg-background/80 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      e
    ),
    ...t,
    ref: a
  }
));
gt.displayName = j.Overlay.displayName;
const ua = n.forwardRef(({ className: e, ...t }, a) => /* @__PURE__ */ o.jsxs(xt, { children: [
  /* @__PURE__ */ o.jsx(gt, {}),
  /* @__PURE__ */ o.jsx(
    j.Content,
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
ua.displayName = j.Content.displayName;
const fa = ({
  className: e,
  ...t
}) => /* @__PURE__ */ o.jsx(
  "div",
  {
    className: s(
      "flex flex-col space-y-2 text-center sm:text-left",
      e
    ),
    ...t
  }
);
fa.displayName = "AlertDialogHeader";
const pa = ({
  className: e,
  ...t
}) => /* @__PURE__ */ o.jsx(
  "div",
  {
    className: s(
      "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",
      e
    ),
    ...t
  }
);
pa.displayName = "AlertDialogFooter";
const xa = n.forwardRef(({ className: e, ...t }, a) => /* @__PURE__ */ o.jsx(
  j.Title,
  {
    ref: a,
    className: s("text-lg font-semibold", e),
    ...t
  }
));
xa.displayName = j.Title.displayName;
const ga = n.forwardRef(({ className: e, ...t }, a) => /* @__PURE__ */ o.jsx(
  j.Description,
  {
    ref: a,
    className: s("text-sm text-muted-foreground", e),
    ...t
  }
));
ga.displayName = j.Description.displayName;
const ba = n.forwardRef(({ className: e, ...t }, a) => /* @__PURE__ */ o.jsx(
  j.Action,
  {
    ref: a,
    className: s(Y(), e),
    ...t
  }
));
ba.displayName = j.Action.displayName;
const Na = n.forwardRef(({ className: e, ...t }, a) => /* @__PURE__ */ o.jsx(
  j.Cancel,
  {
    ref: a,
    className: s(
      Y({ variant: "outline" }),
      "mt-2 sm:mt-0",
      e
    ),
    ...t
  }
));
Na.displayName = j.Cancel.displayName;
const ya = D(
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
), va = n.forwardRef(({ className: e, variant: t, ...a }, i) => /* @__PURE__ */ o.jsx(
  "div",
  {
    ref: i,
    role: "alert",
    className: s(ya({ variant: t }), e),
    ...a
  }
));
va.displayName = "Alert";
const ha = n.forwardRef(({ className: e, ...t }, a) => /* @__PURE__ */ o.jsx(
  "h5",
  {
    ref: a,
    className: s("mb-1 font-medium leading-none tracking-tight", e),
    ...t
  }
));
ha.displayName = "AlertTitle";
const wa = n.forwardRef(({ className: e, ...t }, a) => /* @__PURE__ */ o.jsx(
  "div",
  {
    ref: a,
    className: s("text-sm [&_p]:leading-relaxed", e),
    ...t
  }
));
wa.displayName = "AlertDescription";
const ys = Kt.Root, ja = n.forwardRef(({ className: e, ...t }, a) => /* @__PURE__ */ o.jsx(
  W.Root,
  {
    ref: a,
    className: s(
      "relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full",
      e
    ),
    ...t
  }
));
ja.displayName = W.Root.displayName;
const Ra = n.forwardRef(({ className: e, ...t }, a) => /* @__PURE__ */ o.jsx(
  W.Image,
  {
    ref: a,
    className: s("aspect-square h-full w-full", e),
    ...t
  }
));
Ra.displayName = W.Image.displayName;
const Ca = n.forwardRef(({ className: e, ...t }, a) => /* @__PURE__ */ o.jsx(
  W.Fallback,
  {
    ref: a,
    className: s(
      "flex h-full w-full items-center justify-center rounded-full bg-muted",
      e
    ),
    ...t
  }
));
Ca.displayName = W.Fallback.displayName;
const Ta = D(
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
  return /* @__PURE__ */ o.jsx("div", { className: s(Ta({ variant: t }), e), ...a });
}
function Sa({
  className: e,
  classNames: t,
  showOutsideDays: a = !0,
  ...i
}) {
  return /* @__PURE__ */ o.jsx(
    Qt,
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
          Y({ variant: "outline" }),
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
          Y({ variant: "ghost" }),
          "h-9 w-9 p-0 font-normal aria-selected:opacity-100"
        ),
        day_range_end: "day-range-end",
        day_selected: "bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground focus:bg-primary focus:text-primary-foreground",
        day_today: "bg-accent text-accent-foreground",
        day_outside: "day-outside text-muted-foreground aria-selected:bg-accent/50 aria-selected:text-muted-foreground",
        day_disabled: "text-muted-foreground opacity-50",
        day_range_middle: "aria-selected:bg-accent aria-selected:text-accent-foreground",
        day_hidden: "invisible",
        ...t
      },
      components: {
        IconLeft: () => /* @__PURE__ */ o.jsx(ct, { className: "h-4 w-4" }),
        IconRight: () => /* @__PURE__ */ o.jsx(U, { className: "h-4 w-4" })
      },
      ...i
    }
  );
}
Sa.displayName = "Calendar";
const ka = n.forwardRef(({ className: e, ...t }, a) => /* @__PURE__ */ o.jsx(
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
ka.displayName = "Card";
const Pa = n.forwardRef(({ className: e, ...t }, a) => /* @__PURE__ */ o.jsx(
  "div",
  {
    ref: a,
    className: s("flex flex-col space-y-1.5 p-6", e),
    ...t
  }
));
Pa.displayName = "CardHeader";
const Ea = n.forwardRef(({ className: e, ...t }, a) => /* @__PURE__ */ o.jsx(
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
Ea.displayName = "CardTitle";
const Ia = n.forwardRef(({ className: e, ...t }, a) => /* @__PURE__ */ o.jsx(
  "p",
  {
    ref: a,
    className: s("text-sm text-muted-foreground", e),
    ...t
  }
));
Ia.displayName = "CardDescription";
const _a = n.forwardRef(({ className: e, ...t }, a) => /* @__PURE__ */ o.jsx("div", { ref: a, className: s("p-6 pt-0", e), ...t }));
_a.displayName = "CardContent";
const Aa = n.forwardRef(({ className: e, ...t }, a) => /* @__PURE__ */ o.jsx(
  "div",
  {
    ref: a,
    className: s("flex items-center p-6 pt-0", e),
    ...t
  }
));
Aa.displayName = "CardFooter";
const Ma = n.forwardRef(({ className: e, ...t }, a) => /* @__PURE__ */ o.jsx(
  _e.Root,
  {
    ref: a,
    className: s(
      "peer h-4 w-4 shrink-0 rounded-sm border border-primary ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground",
      e
    ),
    ...t,
    children: /* @__PURE__ */ o.jsx(
      _e.Indicator,
      {
        className: s("flex items-center justify-center text-current"),
        children: /* @__PURE__ */ o.jsx(oe, { className: "h-4 w-4" })
      }
    )
  }
));
Ma.displayName = _e.Root.displayName;
const hs = Fe.Root, ws = Fe.CollapsibleTrigger, js = Fe.CollapsibleContent, Da = x.Root, Rs = x.Trigger, bt = ({ ...e }) => /* @__PURE__ */ o.jsx(x.Portal, { ...e });
bt.displayName = x.Portal.displayName;
const Nt = n.forwardRef(({ className: e, ...t }, a) => /* @__PURE__ */ o.jsx(
  x.Overlay,
  {
    ref: a,
    className: s(
      "fixed inset-0 z-50 bg-background/80 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      e
    ),
    ...t
  }
));
Nt.displayName = x.Overlay.displayName;
const yt = n.forwardRef(({ className: e, children: t, ...a }, i) => /* @__PURE__ */ o.jsxs(bt, { children: [
  /* @__PURE__ */ o.jsx(Nt, {}),
  /* @__PURE__ */ o.jsxs(
    x.Content,
    {
      ref: i,
      className: s(
        "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg md:w-full",
        e
      ),
      ...a,
      children: [
        t,
        /* @__PURE__ */ o.jsxs(x.Close, { className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground", children: [
          /* @__PURE__ */ o.jsx(ze, { className: "h-4 w-4" }),
          /* @__PURE__ */ o.jsx("span", { className: "sr-only", children: "Close" })
        ] })
      ]
    }
  )
] }));
yt.displayName = x.Content.displayName;
const za = ({
  className: e,
  ...t
}) => /* @__PURE__ */ o.jsx(
  "div",
  {
    className: s(
      "flex flex-col space-y-1.5 text-center sm:text-left",
      e
    ),
    ...t
  }
);
za.displayName = "DialogHeader";
const Oa = ({
  className: e,
  ...t
}) => /* @__PURE__ */ o.jsx(
  "div",
  {
    className: s(
      "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",
      e
    ),
    ...t
  }
);
Oa.displayName = "DialogFooter";
const Fa = n.forwardRef(({ className: e, ...t }, a) => /* @__PURE__ */ o.jsx(
  x.Title,
  {
    ref: a,
    className: s(
      "text-lg font-semibold leading-none tracking-tight",
      e
    ),
    ...t
  }
));
Fa.displayName = x.Title.displayName;
const La = n.forwardRef(({ className: e, ...t }, a) => /* @__PURE__ */ o.jsx(
  x.Description,
  {
    ref: a,
    className: s("text-sm text-muted-foreground", e),
    ...t
  }
));
La.displayName = x.Description.displayName;
const vt = n.forwardRef(({ className: e, ...t }, a) => /* @__PURE__ */ o.jsx(
  C,
  {
    ref: a,
    className: s(
      "flex h-full w-full flex-col overflow-hidden rounded-md bg-popover text-popover-foreground",
      e
    ),
    ...t
  }
));
vt.displayName = C.displayName;
const Cs = ({ children: e, ...t }) => /* @__PURE__ */ o.jsx(Da, { ...t, children: /* @__PURE__ */ o.jsx(yt, { className: "overflow-hidden p-0 shadow-lg", children: /* @__PURE__ */ o.jsx(vt, { className: "[&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground [&_[cmdk-group]:not([hidden])_~[cmdk-group]]:pt-0 [&_[cmdk-group]]:px-2 [&_[cmdk-input-wrapper]_svg]:h-5 [&_[cmdk-input-wrapper]_svg]:w-5 [&_[cmdk-input]]:h-12 [&_[cmdk-item]]:px-2 [&_[cmdk-item]]:py-3 [&_[cmdk-item]_svg]:h-5 [&_[cmdk-item]_svg]:w-5", children: e }) }) }), Ga = n.forwardRef(({ className: e, ...t }, a) => /* @__PURE__ */ o.jsxs("div", { className: "flex items-center border-b px-3", "cmdk-input-wrapper": "", children: [
  /* @__PURE__ */ o.jsx($t, { className: "mr-2 h-4 w-4 shrink-0 opacity-50" }),
  /* @__PURE__ */ o.jsx(
    C.Input,
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
Ga.displayName = C.Input.displayName;
const Va = n.forwardRef(({ className: e, ...t }, a) => /* @__PURE__ */ o.jsx(
  C.List,
  {
    ref: a,
    className: s("max-h-[300px] overflow-y-auto overflow-x-hidden", e),
    ...t
  }
));
Va.displayName = C.List.displayName;
const Ha = n.forwardRef((e, t) => /* @__PURE__ */ o.jsx(
  C.Empty,
  {
    ref: t,
    className: "py-6 text-center text-sm",
    ...e
  }
));
Ha.displayName = C.Empty.displayName;
const Ba = n.forwardRef(({ className: e, ...t }, a) => /* @__PURE__ */ o.jsx(
  C.Group,
  {
    ref: a,
    className: s(
      "overflow-hidden p-1 text-foreground [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground",
      e
    ),
    ...t
  }
));
Ba.displayName = C.Group.displayName;
const $a = n.forwardRef(({ className: e, ...t }, a) => /* @__PURE__ */ o.jsx(
  C.Separator,
  {
    ref: a,
    className: s("-mx-1 h-px bg-border", e),
    ...t
  }
));
$a.displayName = C.Separator.displayName;
const Ya = n.forwardRef(({ className: e, ...t }, a) => /* @__PURE__ */ o.jsx(
  C.Item,
  {
    ref: a,
    className: s(
      "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none aria-selected:bg-accent aria-selected:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      e
    ),
    ...t
  }
));
Ya.displayName = C.Item.displayName;
const Ua = ({
  className: e,
  ...t
}) => /* @__PURE__ */ o.jsx(
  "span",
  {
    className: s(
      "ml-auto text-xs tracking-widest text-muted-foreground",
      e
    ),
    ...t
  }
);
Ua.displayName = "CommandShortcut";
const Ts = g.Root, Ss = g.Trigger, ks = g.Group, Ps = g.Portal, Es = g.Sub, Is = g.RadioGroup, Wa = n.forwardRef(({ className: e, inset: t, children: a, ...i }, d) => /* @__PURE__ */ o.jsxs(
  g.SubTrigger,
  {
    ref: d,
    className: s(
      "flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground",
      t && "pl-8",
      e
    ),
    ...i,
    children: [
      a,
      /* @__PURE__ */ o.jsx(U, { className: "ml-auto h-4 w-4" })
    ]
  }
));
Wa.displayName = g.SubTrigger.displayName;
const qa = n.forwardRef(({ className: e, ...t }, a) => /* @__PURE__ */ o.jsx(
  g.SubContent,
  {
    ref: a,
    className: s(
      "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      e
    ),
    ...t
  }
));
qa.displayName = g.SubContent.displayName;
const Ja = n.forwardRef(({ className: e, ...t }, a) => /* @__PURE__ */ o.jsx(g.Portal, { children: /* @__PURE__ */ o.jsx(
  g.Content,
  {
    ref: a,
    className: s(
      "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md animate-in fade-in-80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      e
    ),
    ...t
  }
) }));
Ja.displayName = g.Content.displayName;
const Xa = n.forwardRef(({ className: e, inset: t, ...a }, i) => /* @__PURE__ */ o.jsx(
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
Xa.displayName = g.Item.displayName;
const Ka = n.forwardRef(({ className: e, children: t, checked: a, ...i }, d) => /* @__PURE__ */ o.jsxs(
  g.CheckboxItem,
  {
    ref: d,
    className: s(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      e
    ),
    checked: a,
    ...i,
    children: [
      /* @__PURE__ */ o.jsx("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ o.jsx(g.ItemIndicator, { children: /* @__PURE__ */ o.jsx(oe, { className: "h-4 w-4" }) }) }),
      t
    ]
  }
));
Ka.displayName = g.CheckboxItem.displayName;
const Qa = n.forwardRef(({ className: e, children: t, ...a }, i) => /* @__PURE__ */ o.jsxs(
  g.RadioItem,
  {
    ref: i,
    className: s(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      e
    ),
    ...a,
    children: [
      /* @__PURE__ */ o.jsx("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ o.jsx(g.ItemIndicator, { children: /* @__PURE__ */ o.jsx(ce, { className: "h-2 w-2 fill-current" }) }) }),
      t
    ]
  }
));
Qa.displayName = g.RadioItem.displayName;
const Za = n.forwardRef(({ className: e, inset: t, ...a }, i) => /* @__PURE__ */ o.jsx(
  g.Label,
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
Za.displayName = g.Label.displayName;
const eo = n.forwardRef(({ className: e, ...t }, a) => /* @__PURE__ */ o.jsx(
  g.Separator,
  {
    ref: a,
    className: s("-mx-1 my-1 h-px bg-border", e),
    ...t
  }
));
eo.displayName = g.Separator.displayName;
const to = ({
  className: e,
  ...t
}) => /* @__PURE__ */ o.jsx(
  "span",
  {
    className: s(
      "ml-auto text-xs tracking-widest text-muted-foreground",
      e
    ),
    ...t
  }
);
to.displayName = "ContextMenuShortcut";
const _s = b.Root, As = b.Trigger, Ms = b.Group, Ds = b.Portal, zs = b.Sub, Os = b.RadioGroup, ao = n.forwardRef(({ className: e, inset: t, children: a, ...i }, d) => /* @__PURE__ */ o.jsxs(
  b.SubTrigger,
  {
    ref: d,
    className: s(
      "flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent data-[state=open]:bg-accent",
      t && "pl-8",
      e
    ),
    ...i,
    children: [
      a,
      /* @__PURE__ */ o.jsx(U, { className: "ml-auto h-4 w-4" })
    ]
  }
));
ao.displayName = b.SubTrigger.displayName;
const oo = n.forwardRef(({ className: e, ...t }, a) => /* @__PURE__ */ o.jsx(
  b.SubContent,
  {
    ref: a,
    className: s(
      "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      e
    ),
    ...t
  }
));
oo.displayName = b.SubContent.displayName;
const ro = n.forwardRef(({ className: e, sideOffset: t = 4, ...a }, i) => /* @__PURE__ */ o.jsx(b.Portal, { children: /* @__PURE__ */ o.jsx(
  b.Content,
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
ro.displayName = b.Content.displayName;
const so = n.forwardRef(({ className: e, inset: t, ...a }, i) => /* @__PURE__ */ o.jsx(
  b.Item,
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
so.displayName = b.Item.displayName;
const no = n.forwardRef(({ className: e, children: t, checked: a, ...i }, d) => /* @__PURE__ */ o.jsxs(
  b.CheckboxItem,
  {
    ref: d,
    className: s(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      e
    ),
    checked: a,
    ...i,
    children: [
      /* @__PURE__ */ o.jsx("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ o.jsx(b.ItemIndicator, { children: /* @__PURE__ */ o.jsx(oe, { className: "h-4 w-4" }) }) }),
      t
    ]
  }
));
no.displayName = b.CheckboxItem.displayName;
const io = n.forwardRef(({ className: e, children: t, ...a }, i) => /* @__PURE__ */ o.jsxs(
  b.RadioItem,
  {
    ref: i,
    className: s(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      e
    ),
    ...a,
    children: [
      /* @__PURE__ */ o.jsx("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ o.jsx(b.ItemIndicator, { children: /* @__PURE__ */ o.jsx(ce, { className: "h-2 w-2 fill-current" }) }) }),
      t
    ]
  }
));
io.displayName = b.RadioItem.displayName;
const lo = n.forwardRef(({ className: e, inset: t, ...a }, i) => /* @__PURE__ */ o.jsx(
  b.Label,
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
lo.displayName = b.Label.displayName;
const co = n.forwardRef(({ className: e, ...t }, a) => /* @__PURE__ */ o.jsx(
  b.Separator,
  {
    ref: a,
    className: s("-mx-1 my-1 h-px bg-muted", e),
    ...t
  }
));
co.displayName = b.Separator.displayName;
const mo = ({
  className: e,
  ...t
}) => /* @__PURE__ */ o.jsx(
  "span",
  {
    className: s("ml-auto text-xs tracking-widest opacity-60", e),
    ...t
  }
);
mo.displayName = "DropdownMenuShortcut";
const uo = D(
  "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
), ht = n.forwardRef(({ className: e, ...t }, a) => /* @__PURE__ */ o.jsx(
  ut.Root,
  {
    ref: a,
    className: s(uo(), e),
    ...t
  }
));
ht.displayName = ut.Root.displayName;
const Fs = Zt, wt = n.createContext(
  {}
), Ls = ({
  ...e
}) => /* @__PURE__ */ o.jsx(wt.Provider, { value: { name: e.name }, children: /* @__PURE__ */ o.jsx(ea, { ...e }) }), fe = () => {
  const e = n.useContext(wt), t = n.useContext(jt), { getFieldState: a, formState: i } = ta(), d = a(e.name, i);
  if (!e)
    throw new Error("useFormField should be used within <FormField>");
  const { id: u } = t;
  return {
    id: u,
    name: e.name,
    formItemId: `${u}-form-item`,
    formDescriptionId: `${u}-form-item-description`,
    formMessageId: `${u}-form-item-message`,
    ...d
  };
}, jt = n.createContext(
  {}
), fo = n.forwardRef(({ className: e, ...t }, a) => {
  const i = n.useId();
  return /* @__PURE__ */ o.jsx(jt.Provider, { value: { id: i }, children: /* @__PURE__ */ o.jsx("div", { ref: a, className: s("space-y-2", e), ...t }) });
});
fo.displayName = "FormItem";
const po = n.forwardRef(({ className: e, ...t }, a) => {
  const { error: i, formItemId: d } = fe();
  return /* @__PURE__ */ o.jsx(
    ht,
    {
      ref: a,
      className: s(i && "text-destructive", e),
      htmlFor: d,
      ...t
    }
  );
});
po.displayName = "FormLabel";
const xo = n.forwardRef(({ ...e }, t) => {
  const { error: a, formItemId: i, formDescriptionId: d, formMessageId: u } = fe();
  return /* @__PURE__ */ o.jsx(
    Oe,
    {
      ref: t,
      id: i,
      "aria-describedby": a ? `${d} ${u}` : `${d}`,
      "aria-invalid": !!a,
      ...e
    }
  );
});
xo.displayName = "FormControl";
const go = n.forwardRef(({ className: e, ...t }, a) => {
  const { formDescriptionId: i } = fe();
  return /* @__PURE__ */ o.jsx(
    "p",
    {
      ref: a,
      id: i,
      className: s("text-sm text-muted-foreground", e),
      ...t
    }
  );
});
go.displayName = "FormDescription";
const bo = n.forwardRef(({ className: e, children: t, ...a }, i) => {
  const { error: d, formMessageId: u } = fe(), v = d ? String(d == null ? void 0 : d.message) : t;
  return v ? /* @__PURE__ */ o.jsx(
    "p",
    {
      ref: i,
      id: u,
      className: s("text-sm font-medium text-destructive", e),
      ...a,
      children: v
    }
  ) : null;
});
bo.displayName = "FormMessage";
const Gs = me.Root, Vs = me.Trigger, No = n.forwardRef(({ className: e, align: t = "center", sideOffset: a = 4, ...i }, d) => /* @__PURE__ */ o.jsx(
  me.Content,
  {
    ref: d,
    align: t,
    sideOffset: a,
    className: s(
      "z-50 w-64 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      e
    ),
    ...i
  }
));
No.displayName = me.Content.displayName;
const yo = n.forwardRef(
  ({ className: e, type: t, ...a }, i) => /* @__PURE__ */ o.jsx(
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
yo.displayName = "Input";
const Hs = p.Menu, Bs = p.Group, $s = p.Portal, Ys = p.Sub, Us = p.RadioGroup, vo = n.forwardRef(({ className: e, ...t }, a) => /* @__PURE__ */ o.jsx(
  p.Root,
  {
    ref: a,
    className: s(
      "flex h-10 items-center space-x-1 rounded-md border bg-background p-1",
      e
    ),
    ...t
  }
));
vo.displayName = p.Root.displayName;
const ho = n.forwardRef(({ className: e, ...t }, a) => /* @__PURE__ */ o.jsx(
  p.Trigger,
  {
    ref: a,
    className: s(
      "flex cursor-default select-none items-center rounded-sm px-3 py-1.5 text-sm font-medium outline-none focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground",
      e
    ),
    ...t
  }
));
ho.displayName = p.Trigger.displayName;
const wo = n.forwardRef(({ className: e, inset: t, children: a, ...i }, d) => /* @__PURE__ */ o.jsxs(
  p.SubTrigger,
  {
    ref: d,
    className: s(
      "flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground",
      t && "pl-8",
      e
    ),
    ...i,
    children: [
      a,
      /* @__PURE__ */ o.jsx(U, { className: "ml-auto h-4 w-4" })
    ]
  }
));
wo.displayName = p.SubTrigger.displayName;
const jo = n.forwardRef(({ className: e, ...t }, a) => /* @__PURE__ */ o.jsx(
  p.SubContent,
  {
    ref: a,
    className: s(
      "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      e
    ),
    ...t
  }
));
jo.displayName = p.SubContent.displayName;
const Ro = n.forwardRef(
  ({ className: e, align: t = "start", alignOffset: a = -4, sideOffset: i = 8, ...d }, u) => /* @__PURE__ */ o.jsx(p.Portal, { children: /* @__PURE__ */ o.jsx(
    p.Content,
    {
      ref: u,
      align: t,
      alignOffset: a,
      sideOffset: i,
      className: s(
        "z-50 min-w-[12rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
        e
      ),
      ...d
    }
  ) })
);
Ro.displayName = p.Content.displayName;
const Co = n.forwardRef(({ className: e, inset: t, ...a }, i) => /* @__PURE__ */ o.jsx(
  p.Item,
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
Co.displayName = p.Item.displayName;
const To = n.forwardRef(({ className: e, children: t, checked: a, ...i }, d) => /* @__PURE__ */ o.jsxs(
  p.CheckboxItem,
  {
    ref: d,
    className: s(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      e
    ),
    checked: a,
    ...i,
    children: [
      /* @__PURE__ */ o.jsx("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ o.jsx(p.ItemIndicator, { children: /* @__PURE__ */ o.jsx(oe, { className: "h-4 w-4" }) }) }),
      t
    ]
  }
));
To.displayName = p.CheckboxItem.displayName;
const So = n.forwardRef(({ className: e, children: t, ...a }, i) => /* @__PURE__ */ o.jsxs(
  p.RadioItem,
  {
    ref: i,
    className: s(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      e
    ),
    ...a,
    children: [
      /* @__PURE__ */ o.jsx("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ o.jsx(p.ItemIndicator, { children: /* @__PURE__ */ o.jsx(ce, { className: "h-2 w-2 fill-current" }) }) }),
      t
    ]
  }
));
So.displayName = p.RadioItem.displayName;
const ko = n.forwardRef(({ className: e, inset: t, ...a }, i) => /* @__PURE__ */ o.jsx(
  p.Label,
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
ko.displayName = p.Label.displayName;
const Po = n.forwardRef(({ className: e, ...t }, a) => /* @__PURE__ */ o.jsx(
  p.Separator,
  {
    ref: a,
    className: s("-mx-1 my-1 h-px bg-muted", e),
    ...t
  }
));
Po.displayName = p.Separator.displayName;
const Eo = ({
  className: e,
  ...t
}) => /* @__PURE__ */ o.jsx(
  "span",
  {
    className: s(
      "ml-auto text-xs tracking-widest text-muted-foreground",
      e
    ),
    ...t
  }
);
Eo.displayname = "MenubarShortcut";
const Io = n.forwardRef(({ className: e, children: t, ...a }, i) => /* @__PURE__ */ o.jsxs(
  T.Root,
  {
    ref: i,
    className: s(
      "relative z-10 flex max-w-max flex-1 items-center justify-center",
      e
    ),
    ...a,
    children: [
      t,
      /* @__PURE__ */ o.jsx(Rt, {})
    ]
  }
));
Io.displayName = T.Root.displayName;
const _o = n.forwardRef(({ className: e, ...t }, a) => /* @__PURE__ */ o.jsx(
  T.List,
  {
    ref: a,
    className: s(
      "group flex flex-1 list-none items-center justify-center space-x-1",
      e
    ),
    ...t
  }
));
_o.displayName = T.List.displayName;
const Ws = T.Item, Ao = D(
  "group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
), Mo = n.forwardRef(({ className: e, children: t, ...a }, i) => /* @__PURE__ */ o.jsxs(
  T.Trigger,
  {
    ref: i,
    className: s(Ao(), "group", e),
    ...a,
    children: [
      t,
      " ",
      /* @__PURE__ */ o.jsx(
        De,
        {
          className: "relative top-[1px] ml-1 h-3 w-3 transition duration-200 group-data-[state=open]:rotate-180",
          "aria-hidden": "true"
        }
      )
    ]
  }
));
Mo.displayName = T.Trigger.displayName;
const Do = n.forwardRef(({ className: e, ...t }, a) => /* @__PURE__ */ o.jsx(
  T.Content,
  {
    ref: a,
    className: s(
      "left-0 top-0 w-full data-[motion^=from-]:animate-in data-[motion^=to-]:animate-out data-[motion^=from-]:fade-in data-[motion^=to-]:fade-out data-[motion=from-end]:slide-in-from-right-52 data-[motion=from-start]:slide-in-from-left-52 data-[motion=to-end]:slide-out-to-right-52 data-[motion=to-start]:slide-out-to-left-52 md:absolute md:w-auto ",
      e
    ),
    ...t
  }
));
Do.displayName = T.Content.displayName;
const qs = T.Link, Rt = n.forwardRef(({ className: e, ...t }, a) => /* @__PURE__ */ o.jsx("div", { className: s("absolute left-0 top-full flex justify-center"), children: /* @__PURE__ */ o.jsx(
  T.Viewport,
  {
    className: s(
      "origin-top-center relative mt-1.5 h-[var(--radix-navigation-menu-viewport-height)] w-full overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-90 md:w-[var(--radix-navigation-menu-viewport-width)]",
      e
    ),
    ref: a,
    ...t
  }
) }));
Rt.displayName = T.Viewport.displayName;
const zo = n.forwardRef(({ className: e, ...t }, a) => /* @__PURE__ */ o.jsx(
  T.Indicator,
  {
    ref: a,
    className: s(
      "top-full z-[1] flex h-1.5 items-end justify-center overflow-hidden data-[state=visible]:animate-in data-[state=hidden]:animate-out data-[state=hidden]:fade-out data-[state=visible]:fade-in",
      e
    ),
    ...t,
    children: /* @__PURE__ */ o.jsx("div", { className: "relative top-[60%] h-2 w-2 rotate-45 rounded-tl-sm bg-border shadow-md" })
  }
));
zo.displayName = T.Indicator.displayName;
const Js = te.Root, Xs = te.Trigger, Oo = n.forwardRef(({ className: e, align: t = "center", sideOffset: a = 4, ...i }, d) => /* @__PURE__ */ o.jsx(te.Portal, { children: /* @__PURE__ */ o.jsx(
  te.Content,
  {
    ref: d,
    align: t,
    sideOffset: a,
    className: s(
      "z-50 w-72 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      e
    ),
    ...i
  }
) }));
Oo.displayName = te.Content.displayName;
const Fo = n.forwardRef(({ className: e, value: t, ...a }, i) => /* @__PURE__ */ o.jsx(
  Ae.Root,
  {
    ref: i,
    className: s(
      "relative h-4 w-full overflow-hidden rounded-full bg-secondary",
      e
    ),
    ...a,
    children: /* @__PURE__ */ o.jsx(
      Ae.Indicator,
      {
        className: "h-full w-full flex-1 bg-primary transition-all",
        style: { transform: `translateX(-${100 - (t || 0)}%)` }
      }
    )
  }
));
Fo.displayName = Ae.Root.displayName;
const Lo = n.forwardRef(({ className: e, ...t }, a) => /* @__PURE__ */ o.jsx(
  ae.Root,
  {
    className: s("grid gap-2", e),
    ...t,
    ref: a
  }
));
Lo.displayName = ae.Root.displayName;
const Go = n.forwardRef(({ className: e, children: t, ...a }, i) => /* @__PURE__ */ o.jsx(
  ae.Item,
  {
    ref: i,
    className: s(
      "aspect-square h-4 w-4 rounded-full border border-primary text-primary ring-offset-background focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
      e
    ),
    ...a,
    children: /* @__PURE__ */ o.jsx(ae.Indicator, { className: "flex items-center justify-center", children: /* @__PURE__ */ o.jsx(ce, { className: "h-2.5 w-2.5 fill-current text-current" }) })
  }
));
Go.displayName = ae.Item.displayName;
const Vo = n.forwardRef(({ className: e, children: t, ...a }, i) => /* @__PURE__ */ o.jsxs(
  G.Root,
  {
    ref: i,
    className: s("relative overflow-hidden", e),
    ...a,
    children: [
      /* @__PURE__ */ o.jsx(G.Viewport, { className: "h-full w-full rounded-[inherit]", children: t }),
      /* @__PURE__ */ o.jsx(Ct, {}),
      /* @__PURE__ */ o.jsx(G.Corner, {})
    ]
  }
));
Vo.displayName = G.Root.displayName;
const Ct = n.forwardRef(({ className: e, orientation: t = "vertical", ...a }, i) => /* @__PURE__ */ o.jsx(
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
    children: /* @__PURE__ */ o.jsx(
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
const Ks = h.Root, Qs = h.Group, Zs = h.Value, Ho = n.forwardRef(({ className: e, children: t, ...a }, i) => /* @__PURE__ */ o.jsxs(
  h.Trigger,
  {
    ref: i,
    className: s(
      "flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
      e
    ),
    ...a,
    children: [
      t,
      /* @__PURE__ */ o.jsx(h.Icon, { asChild: !0, children: /* @__PURE__ */ o.jsx(De, { className: "h-4 w-4 opacity-50" }) })
    ]
  }
));
Ho.displayName = h.Trigger.displayName;
const Bo = n.forwardRef(({ className: e, children: t, position: a = "popper", ...i }, d) => /* @__PURE__ */ o.jsx(h.Portal, { children: /* @__PURE__ */ o.jsx(
  h.Content,
  {
    ref: d,
    className: s(
      "relative z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      a === "popper" && "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",
      e
    ),
    position: a,
    ...i,
    children: /* @__PURE__ */ o.jsx(
      h.Viewport,
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
Bo.displayName = h.Content.displayName;
const $o = n.forwardRef(({ className: e, ...t }, a) => /* @__PURE__ */ o.jsx(
  h.Label,
  {
    ref: a,
    className: s("py-1.5 pl-8 pr-2 text-sm font-semibold", e),
    ...t
  }
));
$o.displayName = h.Label.displayName;
const Yo = n.forwardRef(({ className: e, children: t, ...a }, i) => /* @__PURE__ */ o.jsxs(
  h.Item,
  {
    ref: i,
    className: s(
      "relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      e
    ),
    ...a,
    children: [
      /* @__PURE__ */ o.jsx("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ o.jsx(h.ItemIndicator, { children: /* @__PURE__ */ o.jsx(oe, { className: "h-4 w-4" }) }) }),
      /* @__PURE__ */ o.jsx(h.ItemText, { children: t })
    ]
  }
));
Yo.displayName = h.Item.displayName;
const Uo = n.forwardRef(({ className: e, ...t }, a) => /* @__PURE__ */ o.jsx(
  h.Separator,
  {
    ref: a,
    className: s("-mx-1 my-1 h-px bg-muted", e),
    ...t
  }
));
Uo.displayName = h.Separator.displayName;
const Wo = n.forwardRef(
  ({ className: e, orientation: t = "horizontal", decorative: a = !0, ...i }, d) => /* @__PURE__ */ o.jsx(
    ft.Root,
    {
      ref: d,
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
Wo.displayName = ft.Root.displayName;
const en = x.Root, tn = x.Trigger, an = x.Close, Tt = ({ ...e }) => /* @__PURE__ */ o.jsx(x.Portal, { ...e });
Tt.displayName = x.Portal.displayName;
const St = n.forwardRef(({ className: e, ...t }, a) => /* @__PURE__ */ o.jsx(
  x.Overlay,
  {
    className: s(
      "fixed inset-0 z-50 bg-background/80 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      e
    ),
    ...t,
    ref: a
  }
));
St.displayName = x.Overlay.displayName;
const qo = D(
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
), Jo = n.forwardRef(({ side: e = "right", className: t, children: a, ...i }, d) => /* @__PURE__ */ o.jsxs(Tt, { children: [
  /* @__PURE__ */ o.jsx(St, {}),
  /* @__PURE__ */ o.jsxs(
    x.Content,
    {
      ref: d,
      className: s(qo({ side: e }), t),
      ...i,
      children: [
        a,
        /* @__PURE__ */ o.jsxs(x.Close, { className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary", children: [
          /* @__PURE__ */ o.jsx(ze, { className: "h-4 w-4" }),
          /* @__PURE__ */ o.jsx("span", { className: "sr-only", children: "Close" })
        ] })
      ]
    }
  )
] }));
Jo.displayName = x.Content.displayName;
const Xo = ({
  className: e,
  ...t
}) => /* @__PURE__ */ o.jsx(
  "div",
  {
    className: s(
      "flex flex-col space-y-2 text-center sm:text-left",
      e
    ),
    ...t
  }
);
Xo.displayName = "SheetHeader";
const Ko = ({
  className: e,
  ...t
}) => /* @__PURE__ */ o.jsx(
  "div",
  {
    className: s(
      "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",
      e
    ),
    ...t
  }
);
Ko.displayName = "SheetFooter";
const Qo = n.forwardRef(({ className: e, ...t }, a) => /* @__PURE__ */ o.jsx(
  x.Title,
  {
    ref: a,
    className: s("text-lg font-semibold text-foreground", e),
    ...t
  }
));
Qo.displayName = x.Title.displayName;
const Zo = n.forwardRef(({ className: e, ...t }, a) => /* @__PURE__ */ o.jsx(
  x.Description,
  {
    ref: a,
    className: s("text-sm text-muted-foreground", e),
    ...t
  }
));
Zo.displayName = x.Description.displayName;
function on({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ o.jsx(
    "div",
    {
      className: s("animate-pulse rounded-md bg-muted", e),
      ...t
    }
  );
}
const er = n.forwardRef(({ className: e, ...t }, a) => /* @__PURE__ */ o.jsxs(
  Z.Root,
  {
    ref: a,
    className: s(
      "relative flex w-full touch-none select-none items-center",
      e
    ),
    ...t,
    children: [
      /* @__PURE__ */ o.jsx(Z.Track, { className: "relative h-2 w-full grow overflow-hidden rounded-full bg-secondary", children: /* @__PURE__ */ o.jsx(Z.Range, { className: "absolute h-full bg-primary" }) }),
      /* @__PURE__ */ o.jsx(Z.Thumb, { className: "block h-5 w-5 rounded-full border-2 border-primary bg-background ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50" })
    ]
  }
));
er.displayName = Z.Root.displayName;
const tr = n.forwardRef(({ className: e, ...t }, a) => /* @__PURE__ */ o.jsx(
  Me.Root,
  {
    className: s(
      "peer inline-flex h-[24px] w-[44px] shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=unchecked]:bg-input",
      e
    ),
    ...t,
    ref: a,
    children: /* @__PURE__ */ o.jsx(
      Me.Thumb,
      {
        className: s(
          "pointer-events-none block h-5 w-5 rounded-full bg-background shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0"
        )
      }
    )
  }
));
tr.displayName = Me.Root.displayName;
const ar = n.forwardRef(({ className: e, ...t }, a) => /* @__PURE__ */ o.jsx("div", { className: "relative w-full overflow-auto", children: /* @__PURE__ */ o.jsx(
  "table",
  {
    ref: a,
    className: s("w-full caption-bottom text-sm", e),
    ...t
  }
) }));
ar.displayName = "Table";
const or = n.forwardRef(({ className: e, ...t }, a) => /* @__PURE__ */ o.jsx("thead", { ref: a, className: s("[&_tr]:border-b", e), ...t }));
or.displayName = "TableHeader";
const rr = n.forwardRef(({ className: e, ...t }, a) => /* @__PURE__ */ o.jsx(
  "tbody",
  {
    ref: a,
    className: s("[&_tr:last-child]:border-0", e),
    ...t
  }
));
rr.displayName = "TableBody";
const sr = n.forwardRef(({ className: e, ...t }, a) => /* @__PURE__ */ o.jsx(
  "tfoot",
  {
    ref: a,
    className: s("bg-primary font-medium text-primary-foreground", e),
    ...t
  }
));
sr.displayName = "TableFooter";
const nr = n.forwardRef(({ className: e, ...t }, a) => /* @__PURE__ */ o.jsx(
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
nr.displayName = "TableRow";
const ir = n.forwardRef(({ className: e, ...t }, a) => /* @__PURE__ */ o.jsx(
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
ir.displayName = "TableHead";
const dr = n.forwardRef(({ className: e, ...t }, a) => /* @__PURE__ */ o.jsx(
  "td",
  {
    ref: a,
    className: s("p-4 align-middle [&:has([role=checkbox])]:pr-0", e),
    ...t
  }
));
dr.displayName = "TableCell";
const lr = n.forwardRef(({ className: e, ...t }, a) => /* @__PURE__ */ o.jsx(
  "caption",
  {
    ref: a,
    className: s("mt-4 text-sm text-muted-foreground", e),
    ...t
  }
));
lr.displayName = "TableCaption";
const rn = H.Root, cr = n.forwardRef(({ className: e, ...t }, a) => /* @__PURE__ */ o.jsx(
  H.List,
  {
    ref: a,
    className: s(
      "inline-flex h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground",
      e
    ),
    ...t
  }
));
cr.displayName = H.List.displayName;
const mr = n.forwardRef(({ className: e, ...t }, a) => /* @__PURE__ */ o.jsx(
  H.Trigger,
  {
    ref: a,
    className: s(
      "inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm",
      e
    ),
    ...t
  }
));
mr.displayName = H.Trigger.displayName;
const ur = n.forwardRef(({ className: e, ...t }, a) => /* @__PURE__ */ o.jsx(
  H.Content,
  {
    ref: a,
    className: s(
      "mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
      e
    ),
    ...t
  }
));
ur.displayName = H.Content.displayName;
const fr = n.forwardRef(
  ({ className: e, ...t }, a) => /* @__PURE__ */ o.jsx(
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
fr.displayName = "Textarea";
const pr = S.Provider, kt = n.forwardRef(({ className: e, ...t }, a) => /* @__PURE__ */ o.jsx(
  S.Viewport,
  {
    ref: a,
    className: s(
      "fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]",
      e
    ),
    ...t
  }
));
kt.displayName = S.Viewport.displayName;
const xr = D(
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
), Pt = n.forwardRef(({ className: e, variant: t, ...a }, i) => /* @__PURE__ */ o.jsx(
  S.Root,
  {
    ref: i,
    className: s(xr({ variant: t }), e),
    ...a
  }
));
Pt.displayName = S.Root.displayName;
const gr = n.forwardRef(({ className: e, ...t }, a) => /* @__PURE__ */ o.jsx(
  S.Action,
  {
    ref: a,
    className: s(
      "inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium ring-offset-background transition-colors hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 group-[.destructive]:border-muted/40 group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground group-[.destructive]:focus:ring-destructive",
      e
    ),
    ...t
  }
));
gr.displayName = S.Action.displayName;
const Et = n.forwardRef(({ className: e, ...t }, a) => /* @__PURE__ */ o.jsx(
  S.Close,
  {
    ref: a,
    className: s(
      "absolute right-2 top-2 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity hover:text-foreground focus:opacity-100 focus:outline-none focus:ring-2 group-hover:opacity-100 group-[.destructive]:text-red-300 group-[.destructive]:hover:text-red-50 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600",
      e
    ),
    "toast-close": "",
    ...t,
    children: /* @__PURE__ */ o.jsx(ze, { className: "h-4 w-4" })
  }
));
Et.displayName = S.Close.displayName;
const It = n.forwardRef(({ className: e, ...t }, a) => /* @__PURE__ */ o.jsx(
  S.Title,
  {
    ref: a,
    className: s("text-sm font-semibold", e),
    ...t
  }
));
It.displayName = S.Title.displayName;
const _t = n.forwardRef(({ className: e, ...t }, a) => /* @__PURE__ */ o.jsx(
  S.Description,
  {
    ref: a,
    className: s("text-sm opacity-90", e),
    ...t
  }
));
_t.displayName = S.Description.displayName;
const br = 1, Nr = 1e6;
let Ee = 0;
function yr() {
  return Ee = (Ee + 1) % Number.MAX_VALUE, Ee.toString();
}
const Ie = /* @__PURE__ */ new Map(), lt = (e) => {
  if (Ie.has(e))
    return;
  const t = setTimeout(() => {
    Ie.delete(e), ee({
      type: "REMOVE_TOAST",
      toastId: e
    });
  }, Nr);
  Ie.set(e, t);
}, vr = (e, t) => {
  switch (t.type) {
    case "ADD_TOAST":
      return {
        ...e,
        toasts: [t.toast, ...e.toasts].slice(0, br)
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
      return a ? lt(a) : e.toasts.forEach((i) => {
        lt(i.id);
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
}, de = [];
let le = { toasts: [] };
function ee(e) {
  le = vr(le, e), de.forEach((t) => {
    t(le);
  });
}
function hr({ ...e }) {
  const t = yr(), a = (d) => ee({
    type: "UPDATE_TOAST",
    toast: { ...d, id: t }
  }), i = () => ee({ type: "DISMISS_TOAST", toastId: t });
  return ee({
    type: "ADD_TOAST",
    toast: {
      ...e,
      id: t,
      open: !0,
      onOpenChange: (d) => {
        d || i();
      }
    }
  }), {
    id: t,
    dismiss: i,
    update: a
  };
}
function wr() {
  const [e, t] = n.useState(le);
  return n.useEffect(() => (de.push(t), () => {
    const a = de.indexOf(t);
    a > -1 && de.splice(a, 1);
  }), [e]), {
    ...e,
    toast: hr,
    dismiss: (a) => ee({ type: "DISMISS_TOAST", toastId: a })
  };
}
function sn() {
  const { toasts: e } = wr();
  return /* @__PURE__ */ o.jsxs(pr, { children: [
    e.map(function({ id: t, title: a, description: i, action: d, ...u }) {
      return /* @__PURE__ */ o.jsxs(Pt, { ...u, children: [
        /* @__PURE__ */ o.jsxs("div", { className: "grid gap-1", children: [
          a && /* @__PURE__ */ o.jsx(It, { children: a }),
          i && /* @__PURE__ */ o.jsx(_t, { children: i })
        ] }),
        d,
        /* @__PURE__ */ o.jsx(Et, {})
      ] }, t);
    }),
    /* @__PURE__ */ o.jsx(kt, {})
  ] });
}
const At = D(
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
), jr = n.forwardRef(({ className: e, variant: t, size: a, ...i }, d) => /* @__PURE__ */ o.jsx(
  pt.Root,
  {
    ref: d,
    className: s(At({ variant: t, size: a, className: e })),
    ...i
  }
));
jr.displayName = pt.Root.displayName;
const nn = re.Provider, dn = re.Root, ln = re.Trigger, Rr = n.forwardRef(({ className: e, sideOffset: t = 4, ...a }, i) => /* @__PURE__ */ o.jsx(
  re.Content,
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
Rr.displayName = re.Content.displayName;
const cn = ({
  className: e,
  ...t
}) => /* @__PURE__ */ o.jsx(
  Le.PanelGroup,
  {
    className: s(
      "flex h-full w-full data-[panel-group-direction=vertical]:flex-col",
      e
    ),
    ...t
  }
), mn = Le.Panel, un = ({
  withHandle: e,
  className: t,
  ...a
}) => /* @__PURE__ */ o.jsx(
  Le.PanelResizeHandle,
  {
    className: s(
      "relative flex w-px items-center justify-center bg-border after:absolute after:inset-y-0 after:left-1/2 after:w-1 after:-translate-x-1/2 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring focus-visible:ring-offset-1 data-[panel-group-direction=vertical]:h-px data-[panel-group-direction=vertical]:w-full data-[panel-group-direction=vertical]:after:left-0 data-[panel-group-direction=vertical]:after:h-1 data-[panel-group-direction=vertical]:after:w-full data-[panel-group-direction=vertical]:after:-translate-y-1/2 data-[panel-group-direction=vertical]:after:translate-x-0 [&[data-panel-group-direction=vertical]>div]:rotate-90",
      t
    ),
    ...a,
    children: e && /* @__PURE__ */ o.jsx("div", { className: "z-10 flex h-4 w-3 items-center justify-center rounded-sm border bg-border", children: /* @__PURE__ */ o.jsx(Yt, { className: "h-2.5 w-2.5" }) })
  }
), Cr = n.forwardRef(({ className: e, ...t }, a) => /* @__PURE__ */ o.jsx(
  aa,
  {
    ref: a,
    containerClassName: s("flex items-center gap-2", e),
    ...t
  }
));
Cr.displayName = "InputOTP";
const Tr = n.forwardRef(({ className: e, ...t }, a) => /* @__PURE__ */ o.jsx("div", { ref: a, className: s("flex items-center", e), ...t }));
Tr.displayName = "InputOTPGroup";
const Sr = n.forwardRef(({ char: e, hasFakeCaret: t, isActive: a, className: i, ...d }, u) => /* @__PURE__ */ o.jsxs(
  "div",
  {
    ref: u,
    className: s(
      "relative flex h-10 w-10 items-center justify-center border-y border-r border-input text-sm transition-all first:rounded-l-md first:border-l last:rounded-r-md",
      a && "z-10 ring-2 ring-offset-background ring-ring",
      i
    ),
    ...d,
    children: [
      e,
      t && /* @__PURE__ */ o.jsx("div", { className: "pointer-events-none absolute inset-0 flex items-center justify-center", children: /* @__PURE__ */ o.jsx("div", { className: "animate-caret-blink h-4 w-px bg-foreground duration-1000" }) })
    ]
  }
));
Sr.displayName = "InputOTPSlot";
const kr = n.forwardRef(({ ...e }, t) => /* @__PURE__ */ o.jsx("div", { ref: t, role: "separator", ...e, children: /* @__PURE__ */ o.jsx(Ut, {}) }));
kr.displayName = "InputOTPSeparator";
const Pr = n.forwardRef(({ ...e }, t) => /* @__PURE__ */ o.jsx("nav", { ref: t, "aria-label": "breadcrumb", ...e }));
Pr.displayName = "Breadcrumb";
const Er = n.forwardRef(({ className: e, ...t }, a) => /* @__PURE__ */ o.jsx(
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
Er.displayName = "BreadcrumbList";
const Ir = n.forwardRef(({ className: e, ...t }, a) => /* @__PURE__ */ o.jsx(
  "li",
  {
    ref: a,
    className: s("inline-flex items-center gap-1.5", e),
    ...t
  }
));
Ir.displayName = "BreadcrumbItem";
const _r = n.forwardRef(({ asChild: e, className: t, ...a }, i) => {
  const d = e ? Oe : "a";
  return /* @__PURE__ */ o.jsx(
    d,
    {
      ref: i,
      className: s("transition-colors hover:text-foreground", t),
      ...a
    }
  );
});
_r.displayName = "BreadcrumbLink";
const Ar = n.forwardRef(({ className: e, ...t }, a) => /* @__PURE__ */ o.jsx(
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
Ar.displayName = "BreadcrumbPage";
const Mr = ({
  children: e,
  className: t,
  ...a
}) => /* @__PURE__ */ o.jsx(
  "li",
  {
    role: "presentation",
    "aria-hidden": "true",
    className: s("[&>svg]:size-3.5", t),
    ...a,
    children: e || /* @__PURE__ */ o.jsx(U, {})
  }
);
Mr.displayName = "BreadcrumbSeparator";
const Dr = ({
  className: e,
  ...t
}) => /* @__PURE__ */ o.jsxs(
  "span",
  {
    role: "presentation",
    "aria-hidden": "true",
    className: s("flex h-9 w-9 items-center justify-center", e),
    ...t,
    children: [
      /* @__PURE__ */ o.jsx(mt, { className: "h-4 w-4" }),
      /* @__PURE__ */ o.jsx("span", { className: "sr-only", children: "More" })
    ]
  }
);
Dr.displayName = "BreadcrumbElipssis";
const Mt = n.createContext({
  size: "default",
  variant: "default"
}), zr = n.forwardRef(({ className: e, variant: t, size: a, children: i, ...d }, u) => /* @__PURE__ */ o.jsx(
  ue.Root,
  {
    ref: u,
    className: s("flex items-center justify-center gap-1", e),
    ...d,
    children: /* @__PURE__ */ o.jsx(Mt.Provider, { value: { variant: t, size: a }, children: i })
  }
));
zr.displayName = ue.Root.displayName;
const Or = n.forwardRef(({ className: e, children: t, variant: a, size: i, ...d }, u) => {
  const v = n.useContext(Mt);
  return /* @__PURE__ */ o.jsx(
    ue.Item,
    {
      ref: u,
      className: s(
        At({
          variant: v.variant || a,
          size: v.size || i
        }),
        e
      ),
      ...d,
      children: t
    }
  );
});
Or.displayName = ue.Item.displayName;
const fn = ({ ...e }) => {
  const { theme: t = "system" } = oa();
  return /* @__PURE__ */ o.jsx(
    ra,
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
}, Fr = ({ className: e, ...t }) => /* @__PURE__ */ o.jsx(
  "nav",
  {
    role: "navigation",
    "aria-label": "pagination",
    className: s("mx-auto flex w-full justify-center", e),
    ...t
  }
);
Fr.displayName = "Pagination";
const Lr = n.forwardRef(({ className: e, ...t }, a) => /* @__PURE__ */ o.jsx(
  "ul",
  {
    ref: a,
    className: s("flex flex-row items-center gap-1", e),
    ...t
  }
));
Lr.displayName = "PaginationContent";
const Gr = n.forwardRef(({ className: e, ...t }, a) => /* @__PURE__ */ o.jsx("li", { ref: a, className: s("", e), ...t }));
Gr.displayName = "PaginationItem";
const Ve = ({
  className: e,
  isActive: t,
  size: a = "icon",
  ...i
}) => /* @__PURE__ */ o.jsx(
  "a",
  {
    "aria-current": t ? "page" : void 0,
    className: s(
      Y({
        variant: t ? "outline" : "ghost",
        size: a
      }),
      e
    ),
    ...i
  }
);
Ve.displayName = "PaginationLink";
const Vr = ({
  className: e,
  ...t
}) => /* @__PURE__ */ o.jsxs(
  Ve,
  {
    "aria-label": "Go to previous page",
    size: "default",
    className: s("gap-1 pl-2.5", e),
    ...t,
    children: [
      /* @__PURE__ */ o.jsx(ct, { className: "h-4 w-4" }),
      /* @__PURE__ */ o.jsx("span", { children: "Previous" })
    ]
  }
);
Vr.displayName = "PaginationPrevious";
const Hr = ({
  className: e,
  ...t
}) => /* @__PURE__ */ o.jsxs(
  Ve,
  {
    "aria-label": "Go to next page",
    size: "default",
    className: s("gap-1 pr-2.5", e),
    ...t,
    children: [
      /* @__PURE__ */ o.jsx("span", { children: "Next" }),
      /* @__PURE__ */ o.jsx(U, { className: "h-4 w-4" })
    ]
  }
);
Hr.displayName = "PaginationNext";
const Br = ({
  className: e,
  ...t
}) => /* @__PURE__ */ o.jsxs(
  "span",
  {
    "aria-hidden": !0,
    className: s("flex h-9 w-9 items-center justify-center", e),
    ...t,
    children: [
      /* @__PURE__ */ o.jsx(mt, { className: "h-4 w-4" }),
      /* @__PURE__ */ o.jsx("span", { className: "sr-only", children: "More pages" })
    ]
  }
);
Br.displayName = "PaginationEllipsis";
const $r = ({
  shouldScaleBackground: e = !0,
  ...t
}) => /* @__PURE__ */ o.jsx(
  P.Root,
  {
    shouldScaleBackground: e,
    ...t
  }
);
$r.displayName = "Drawer";
const pn = P.Trigger, Yr = P.Portal, xn = P.Close, Dt = n.forwardRef(({ className: e, ...t }, a) => /* @__PURE__ */ o.jsx(
  P.Overlay,
  {
    ref: a,
    className: s("fixed inset-0 z-50 bg-black/80", e),
    ...t
  }
));
Dt.displayName = P.Overlay.displayName;
const Ur = n.forwardRef(({ className: e, children: t, ...a }, i) => /* @__PURE__ */ o.jsxs(Yr, { children: [
  /* @__PURE__ */ o.jsx(Dt, {}),
  /* @__PURE__ */ o.jsxs(
    P.Content,
    {
      ref: i,
      className: s(
        "fixed inset-x-0 bottom-0 z-50 mt-24 flex h-auto flex-col rounded-t-[10px] border bg-background",
        e
      ),
      ...a,
      children: [
        /* @__PURE__ */ o.jsx("div", { className: "mx-auto mt-4 h-2 w-[100px] rounded-full bg-muted" }),
        t
      ]
    }
  )
] }));
Ur.displayName = "DrawerContent";
const Wr = ({
  className: e,
  ...t
}) => /* @__PURE__ */ o.jsx(
  "div",
  {
    className: s("grid gap-1.5 p-4 text-center sm:text-left", e),
    ...t
  }
);
Wr.displayName = "DrawerHeader";
const qr = ({
  className: e,
  ...t
}) => /* @__PURE__ */ o.jsx(
  "div",
  {
    className: s("mt-auto flex flex-col gap-2 p-4", e),
    ...t
  }
);
qr.displayName = "DrawerFooter";
const Jr = n.forwardRef(({ className: e, ...t }, a) => /* @__PURE__ */ o.jsx(
  P.Title,
  {
    ref: a,
    className: s(
      "text-lg font-semibold leading-none tracking-tight",
      e
    ),
    ...t
  }
));
Jr.displayName = P.Title.displayName;
const Xr = n.forwardRef(({ className: e, ...t }, a) => /* @__PURE__ */ o.jsx(
  P.Description,
  {
    ref: a,
    className: s("text-sm text-muted-foreground", e),
    ...t
  }
));
Xr.displayName = P.Description.displayName;
const zt = n.createContext(null);
function pe() {
  const e = n.useContext(zt);
  if (!e)
    throw new Error("useCarousel must be used within a <Carousel />");
  return e;
}
const Kr = n.forwardRef(
  ({
    orientation: e = "horizontal",
    opts: t,
    setApi: a,
    plugins: i,
    className: d,
    children: u,
    ...v
  }, k) => {
    const [q, N] = sa(
      {
        ...t,
        axis: e === "horizontal" ? "x" : "y"
      },
      i
    ), [xe, ge] = n.useState(!1), [be, Ne] = n.useState(!1), A = n.useCallback((E) => {
      E && (ge(E.canScrollPrev()), Ne(E.canScrollNext()));
    }, []), B = n.useCallback(() => {
      N == null || N.scrollPrev();
    }, [N]), z = n.useCallback(() => {
      N == null || N.scrollNext();
    }, [N]), se = n.useCallback(
      (E) => {
        E.key === "ArrowLeft" ? (E.preventDefault(), B()) : E.key === "ArrowRight" && (E.preventDefault(), z());
      },
      [B, z]
    );
    return n.useEffect(() => {
      !N || !a || a(N);
    }, [N, a]), n.useEffect(() => {
      if (N)
        return A(N), N.on("reInit", A), N.on("select", A), () => {
          N == null || N.off("select", A);
        };
    }, [N, A]), /* @__PURE__ */ o.jsx(
      zt.Provider,
      {
        value: {
          carouselRef: q,
          api: N,
          opts: t,
          orientation: e || ((t == null ? void 0 : t.axis) === "y" ? "vertical" : "horizontal"),
          scrollPrev: B,
          scrollNext: z,
          canScrollPrev: xe,
          canScrollNext: be
        },
        children: /* @__PURE__ */ o.jsx(
          "div",
          {
            ref: k,
            onKeyDownCapture: se,
            className: s("relative", d),
            role: "region",
            "aria-roledescription": "carousel",
            ...v,
            children: u
          }
        )
      }
    );
  }
);
Kr.displayName = "Carousel";
const Qr = n.forwardRef(({ className: e, ...t }, a) => {
  const { carouselRef: i, orientation: d } = pe();
  return /* @__PURE__ */ o.jsx("div", { ref: i, className: "overflow-hidden", children: /* @__PURE__ */ o.jsx(
    "div",
    {
      ref: a,
      className: s(
        "flex",
        d === "horizontal" ? "-ml-4" : "-mt-4 flex-col",
        e
      ),
      ...t
    }
  ) });
});
Qr.displayName = "CarouselContent";
const Zr = n.forwardRef(({ className: e, ...t }, a) => {
  const { orientation: i } = pe();
  return /* @__PURE__ */ o.jsx(
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
Zr.displayName = "CarouselItem";
const es = n.forwardRef(({ className: e, variant: t = "outline", size: a = "icon", ...i }, d) => {
  const { orientation: u, scrollPrev: v, canScrollPrev: k } = pe();
  return /* @__PURE__ */ o.jsxs(
    Ge,
    {
      ref: d,
      variant: t,
      size: a,
      className: s(
        "absolute  h-8 w-8 rounded-full",
        u === "horizontal" ? "-left-12 top-1/2 -translate-y-1/2" : "-top-12 left-1/2 -translate-x-1/2 rotate-90",
        e
      ),
      disabled: !k,
      onClick: v,
      ...i,
      children: [
        /* @__PURE__ */ o.jsx(Wt, { className: "h-4 w-4" }),
        /* @__PURE__ */ o.jsx("span", { className: "sr-only", children: "Previous slide" })
      ]
    }
  );
});
es.displayName = "CarouselPrevious";
const ts = n.forwardRef(({ className: e, variant: t = "outline", size: a = "icon", ...i }, d) => {
  const { orientation: u, scrollNext: v, canScrollNext: k } = pe();
  return /* @__PURE__ */ o.jsxs(
    Ge,
    {
      ref: d,
      variant: t,
      size: a,
      className: s(
        "absolute h-8 w-8 rounded-full",
        u === "horizontal" ? "-right-12 top-1/2 -translate-y-1/2" : "-bottom-12 left-1/2 -translate-x-1/2 rotate-90",
        e
      ),
      disabled: !k,
      onClick: v,
      ...i,
      children: [
        /* @__PURE__ */ o.jsx(qt, { className: "h-4 w-4" }),
        /* @__PURE__ */ o.jsx("span", { className: "sr-only", children: "Next slide" })
      ]
    }
  );
});
ts.displayName = "CarouselNext";
export {
  gs as Accordion,
  ma as AccordionContent,
  la as AccordionItem,
  ca as AccordionTrigger,
  va as Alert,
  wa as AlertDescription,
  bs as AlertDialog,
  ba as AlertDialogAction,
  Na as AlertDialogCancel,
  ua as AlertDialogContent,
  ga as AlertDialogDescription,
  pa as AlertDialogFooter,
  fa as AlertDialogHeader,
  xa as AlertDialogTitle,
  Ns as AlertDialogTrigger,
  ha as AlertTitle,
  ys as AspectRatio,
  ja as Avatar,
  Ca as AvatarFallback,
  Ra as AvatarImage,
  vs as Badge,
  Pr as Breadcrumb,
  Dr as BreadcrumbEllipsis,
  Ir as BreadcrumbItem,
  _r as BreadcrumbLink,
  Er as BreadcrumbList,
  Ar as BreadcrumbPage,
  Mr as BreadcrumbSeparator,
  Ge as Button,
  Sa as Calendar,
  ka as Card,
  _a as CardContent,
  Ia as CardDescription,
  Aa as CardFooter,
  Pa as CardHeader,
  Ea as CardTitle,
  Kr as Carousel,
  Qr as CarouselContent,
  Zr as CarouselItem,
  ts as CarouselNext,
  es as CarouselPrevious,
  Ma as Checkbox,
  hs as Collapsible,
  js as CollapsibleContent,
  ws as CollapsibleTrigger,
  vt as Command,
  Cs as CommandDialog,
  Ha as CommandEmpty,
  Ba as CommandGroup,
  Ga as CommandInput,
  Ya as CommandItem,
  Va as CommandList,
  $a as CommandSeparator,
  Ua as CommandShortcut,
  Ts as ContextMenu,
  Ka as ContextMenuCheckboxItem,
  Ja as ContextMenuContent,
  ks as ContextMenuGroup,
  Xa as ContextMenuItem,
  Za as ContextMenuLabel,
  Ps as ContextMenuPortal,
  Is as ContextMenuRadioGroup,
  Qa as ContextMenuRadioItem,
  eo as ContextMenuSeparator,
  to as ContextMenuShortcut,
  Es as ContextMenuSub,
  qa as ContextMenuSubContent,
  Wa as ContextMenuSubTrigger,
  Ss as ContextMenuTrigger,
  Da as Dialog,
  yt as DialogContent,
  La as DialogDescription,
  Oa as DialogFooter,
  za as DialogHeader,
  Fa as DialogTitle,
  Rs as DialogTrigger,
  $r as Drawer,
  xn as DrawerClose,
  Ur as DrawerContent,
  Xr as DrawerDescription,
  qr as DrawerFooter,
  Wr as DrawerHeader,
  Dt as DrawerOverlay,
  Yr as DrawerPortal,
  Jr as DrawerTitle,
  pn as DrawerTrigger,
  _s as DropdownMenu,
  no as DropdownMenuCheckboxItem,
  ro as DropdownMenuContent,
  Ms as DropdownMenuGroup,
  so as DropdownMenuItem,
  lo as DropdownMenuLabel,
  Ds as DropdownMenuPortal,
  Os as DropdownMenuRadioGroup,
  io as DropdownMenuRadioItem,
  co as DropdownMenuSeparator,
  mo as DropdownMenuShortcut,
  zs as DropdownMenuSub,
  oo as DropdownMenuSubContent,
  ao as DropdownMenuSubTrigger,
  As as DropdownMenuTrigger,
  Fs as Form,
  xo as FormControl,
  go as FormDescription,
  Ls as FormField,
  fo as FormItem,
  po as FormLabel,
  bo as FormMessage,
  Gs as HoverCard,
  No as HoverCardContent,
  Vs as HoverCardTrigger,
  yo as Input,
  Cr as InputOTP,
  Tr as InputOTPGroup,
  kr as InputOTPSeparator,
  Sr as InputOTPSlot,
  ht as Label,
  vo as Menubar,
  To as MenubarCheckboxItem,
  Ro as MenubarContent,
  Bs as MenubarGroup,
  Co as MenubarItem,
  ko as MenubarLabel,
  Hs as MenubarMenu,
  $s as MenubarPortal,
  Us as MenubarRadioGroup,
  So as MenubarRadioItem,
  Po as MenubarSeparator,
  Eo as MenubarShortcut,
  Ys as MenubarSub,
  jo as MenubarSubContent,
  wo as MenubarSubTrigger,
  ho as MenubarTrigger,
  Io as NavigationMenu,
  Do as NavigationMenuContent,
  zo as NavigationMenuIndicator,
  Ws as NavigationMenuItem,
  qs as NavigationMenuLink,
  _o as NavigationMenuList,
  Mo as NavigationMenuTrigger,
  Rt as NavigationMenuViewport,
  Fr as Pagination,
  Lr as PaginationContent,
  Br as PaginationEllipsis,
  Gr as PaginationItem,
  Ve as PaginationLink,
  Hr as PaginationNext,
  Vr as PaginationPrevious,
  Js as Popover,
  Oo as PopoverContent,
  Xs as PopoverTrigger,
  Fo as Progress,
  Lo as RadioGroup,
  Go as RadioGroupItem,
  un as ResizableHandle,
  mn as ResizablePanel,
  cn as ResizablePanelGroup,
  Vo as ScrollArea,
  Ct as ScrollBar,
  Ks as Select,
  Bo as SelectContent,
  Qs as SelectGroup,
  Yo as SelectItem,
  $o as SelectLabel,
  Uo as SelectSeparator,
  Ho as SelectTrigger,
  Zs as SelectValue,
  Wo as Separator,
  en as Sheet,
  an as SheetClose,
  Jo as SheetContent,
  Zo as SheetDescription,
  Ko as SheetFooter,
  Xo as SheetHeader,
  Qo as SheetTitle,
  tn as SheetTrigger,
  on as Skeleton,
  er as Slider,
  fn as Sonner,
  tr as Switch,
  ar as Table,
  rr as TableBody,
  lr as TableCaption,
  dr as TableCell,
  sr as TableFooter,
  ir as TableHead,
  or as TableHeader,
  nr as TableRow,
  rn as Tabs,
  ur as TabsContent,
  cr as TabsList,
  mr as TabsTrigger,
  fr as Textarea,
  Pt as Toast,
  gr as ToastAction,
  Et as ToastClose,
  _t as ToastDescription,
  pr as ToastProvider,
  It as ToastTitle,
  kt as ToastViewport,
  sn as Toaster,
  jr as Toggle,
  zr as ToggleGroup,
  Or as ToggleGroupItem,
  dn as Tooltip,
  Rr as TooltipContent,
  nn as TooltipProvider,
  ln as TooltipTrigger,
  Ta as badgeVariants,
  Y as buttonVariants,
  s as cn,
  Ao as navigationMenuTriggerStyle,
  vr as reducer,
  hr as toast,
  At as toggleVariants,
  fe as useFormField,
  wr as useToast
};
