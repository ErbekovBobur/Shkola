(function () {
  var aa;
  function ba(a) {
    var b = 0;
    return function () {
      return b < a.length ? { done: !1, value: a[b++] } : { done: !0 };
    };
  }
  function p(a) {
    var b = "undefined" != typeof Symbol && Symbol.iterator && a[Symbol.iterator];
    if (b) return b.call(a);
    if ("number" == typeof a.length) return { next: ba(a) };
    throw Error(String(a) + " is not an iterable or ArrayLike");
  }
  function ca(a) {
    for (var b, c = []; !(b = a.next()).done; ) c.push(b.value);
    return c;
  }
  function da(a) {
    return a instanceof Array ? a : ca(p(a));
  }
  var ea =
      "function" == typeof Object.create
        ? Object.create
        : function (a) {
            function b() {}
            b.prototype = a;
            return new b();
          },
    fa;
  if ("function" == typeof Object.setPrototypeOf) fa = Object.setPrototypeOf;
  else {
    var ha;
    a: {
      var ia = { a: !0 },
        ja = {};
      try {
        ja.__proto__ = ia;
        ha = ja.a;
        break a;
      } catch (a) {}
      ha = !1;
    }
    fa = ha
      ? function (a, b) {
          a.__proto__ = b;
          if (a.__proto__ !== b) throw new TypeError(a + " is not extensible");
          return a;
        }
      : null;
  }
  var ka = fa,
    la = { construct: "Metrika2", callbackPostfix: "2", version: "1nvs8u56fxkj9hhnzuewm4zfke8i", host: "mc.yandex.ru" };
  function ma(a, b) {
    return b(a);
  }
  function r(a) {
    return function (b) {
      return function (c) {
        return a(b, c);
      };
    };
  }
  function na(a) {
    return function (b) {
      return function (c) {
        return a(c, b);
      };
    };
  }
  var oa = r(function (a, b) {
      return a === b;
    }),
    pa = r(function (a, b) {
      a(b);
      return b;
    }),
    qa = r(ma);
  function t() {}
  var ra = [];
  function sa(a, b) {
    if (!b || "function" !== typeof b) return !1;
    try {
      var c = "" + b;
    } catch (h) {
      return !1;
    }
    var d = c.length;
    if (d > 35 + a.length) return !1;
    for (var e = d - 13, f = 0, g = 8; g < d; g += 1) {
      f = "[native code]"[f] === c[g] || (7 === f && "-" === c[g]) ? f + 1 : 0;
      if (12 === f) return !0;
      if (!f && g > e) break;
    }
    return !1;
  }
  function ta(a, b) {
    var c = sa(a, b);
    b && !c && ra.push([a, b]);
    return c;
  }
  function ua(a, b) {
    return ta(b, a) && a;
  }
  function va(a, b) {
    for (var c = 0; c < b.length; c += 1) if (b[c] === a) return c;
    return -1;
  }
  var wa;
  function xa(a) {
    if (wa) return wa;
    var b = !1;
    try {
      b = [].indexOf && 0 === [void 0].indexOf(void 0);
    } catch (d) {}
    var c = a.Array && a.Array.prototype && ua(a.Array.prototype.indexOf, "indexOf");
    return (wa = a =
      b && c
        ? function (d, e) {
            return c.call(e, d);
          }
        : va);
  }
  var ya = xa(window),
    za = na(ya);
  function w(a) {
    return a;
  }
  function Aa(a, b) {
    return b;
  }
  function Ba(a) {
    return !a;
  }
  var Ca = ua(Array.from, "from");
  function Da(a) {
    for (var b = a.length, c = [], d = 0; d < b; d += 1) c.push(a[d]);
    return c;
  }
  function Ea(a) {
    if (Ca)
      try {
        return Ca(a);
      } catch (b) {}
    return Da(a);
  }
  function x(a, b) {
    var c = [],
      d = [];
    var e = b ? b : w;
    return function () {
      var f = Ea(arguments),
        g = e.apply(null, da(f)),
        h = ya(g, d);
      if (-1 !== h) return c[h];
      f = a.apply(null, da(f));
      c.push(f);
      d.push(g);
      return f;
    };
  }
  var Fa = /\./g;
  function Ga(a) {
    return "string" === typeof a;
  }
  var Ha = ua(String.prototype.indexOf, "indexOf");
  function Ia(a, b) {
    for (var c = 0, d = a.length - b.length, e = 0; e < a.length; e += 1) {
      c = a[e] === b[c] ? c + 1 : 0;
      if (c === b.length) return e - b.length + 1;
      if (!c && e > d) break;
    }
    return -1;
  }
  var Ja = Ha
    ? function (a, b) {
        return Ha.call(a, b);
      }
    : Ia;
  function Ka(a, b) {
    return Ja(a, b);
  }
  function La(a, b) {
    return !(!a || -1 === Ja(a, b));
  }
  function Ma(a) {
    return a
      .replace(/\^/g, "\\^")
      .replace(/\$/g, "\\$")
      .replace(Fa, "\\.")
      .replace(/\[/g, "\\[")
      .replace(/\]/g, "\\]")
      .replace(/\|/g, "\\|")
      .replace(/\(/g, "\\(")
      .replace(/\)/g, "\\)")
      .replace(/\?/g, "\\?")
      .replace(/\*/g, "\\*")
      .replace(/\+/g, "\\+")
      .replace(/\{/g, "\\{")
      .replace(/\}/g, "\\}");
  }
  var Na = oa(null);
  function z(a) {
    return "function" === typeof a;
  }
  var A = oa(void 0);
  function Oa(a) {
    return A(a) || Na(a);
  }
  function Pa(a) {
    return !Na(a) && !A(a) && "[object Object]" === Object.prototype.toString.call(a);
  }
  function Qa(a, b, c) {
    b = void 0 === b ? [] : b;
    c = c || {};
    var d = b.length,
      e = a;
    z(e) && ((e = "d"), (c[e] = a));
    var f;
    d
      ? 1 === d
        ? (f = c[e](b[0]))
        : 2 === d
        ? (f = c[e](b[0], b[1]))
        : 3 === d
        ? (f = c[e](b[0], b[1], b[2]))
        : 4 === d && (f = c[e](b[0], b[1], b[2], b[3]))
      : (f = c[e]());
    return f;
  }
  var Ra = ua(Function.prototype.bind, "bind");
  function Sa() {
    var a = Ea(arguments);
    a = p(a);
    var b = a.next().value,
      c = a.next().value,
      d = ca(a);
    return function () {
      var e = [].concat(da(d), da(Ea(arguments)));
      if (Function.prototype.call) return Function.prototype.call.apply(b, [c].concat(da(e)));
      if (c) {
        for (var f = "_b"; c[f]; ) f += "_" + f.length;
        c[f] = b;
        e = c[f] && Qa(f, e, c);
        delete c[f];
        return e;
      }
      return Qa(b, e);
    };
  }
  var Ta = Ra
    ? function () {
        var a = Ea(arguments),
          b = p(a);
        a = b.next().value;
        var c = b.next().value;
        b = ca(b);
        return Ra.apply(a, [c].concat(b));
      }
    : Sa;
  function B(a, b) {
    return Ta.apply(null, [b, null].concat(da(a)));
  }
  function E(a, b) {
    return Ta(b, null, a);
  }
  function Ua(a, b) {
    return Ta(b[a], b);
  }
  function Va(a) {
    return Ua("test", a);
  }
  var Wa = ua(Array.prototype.reduce, "reduce");
  function Xa(a, b, c) {
    for (var d = 0, e = c.length; d < e; ) (b = a(b, c[d], d)), (d += 1);
    return b;
  }
  var F = Wa
    ? function (a, b, c) {
        return Wa.call(c, a, b);
      }
    : Xa;
  function Ya(a, b) {
    return B([a, b], F);
  }
  function G() {
    var a = Ea(arguments),
      b = a.shift();
    return function () {
      var c = b.apply(null, arguments);
      return F(ma, c, a);
    };
  }
  var Za = r(B),
    $a = r(Ua),
    ab = Object.prototype.hasOwnProperty;
  function bb(a, b) {
    return Oa(a) ? !1 : ab.call(a, b);
  }
  function H(a, b) {
    return a
      ? F(
          function (c, d) {
            if (Oa(c)) return c;
            try {
              return c[d];
            } catch (e) {}
            return null;
          },
          a,
          b.split(".")
        )
      : null;
  }
  var I = na(H),
    cb = I("length");
  function db(a) {
    var b = void 0 === b ? {} : b;
    if (!a || 1 > a.length) return b;
    F(
      function (c, d, e) {
        if (e === a.length - 1) return c;
        e === a.length - 2 ? (c[d] = a[e + 1]) : bb(c, d) || (c[d] = {});
        return c[d];
      },
      b,
      a
    );
    return b;
  }
  function eb(a, b) {
    var c = H(b, a),
      d = H(b, "constructor.prototype." + a) || c;
    try {
      if (d && d.apply)
        return function () {
          return d.apply(b, arguments);
        };
    } catch (e) {
      return c;
    }
    return d;
  }
  function fb(a, b, c) {
    return c ? a : b;
  }
  var gb = B([1, null], fb),
    hb = B([1, 0], fb),
    ib = Boolean,
    jb = ua(Array.prototype.filter, "filter");
  function kb(a, b) {
    return Xa(
      function (c, d, e) {
        a(d, e) && c.push(d);
        return c;
      },
      [],
      b
    );
  }
  var lb = jb
      ? function (a, b) {
          return jb.call(b, a);
        }
      : kb,
    mb = E(ib, lb),
    nb = r(lb);
  function J(a, b, c) {
    return Array.prototype.includes.call(b, a, c);
  }
  var ob = na(J);
  function pb(a) {
    return "[object Array]" === Object.prototype.toString.call(a);
  }
  var qb = ua(Array.isArray, "isArray"),
    rb = qb
      ? function (a) {
          return qb(a);
        }
      : pb;
  function sb(a) {
    return a ? (rb(a) ? a : Ca ? Ca(a) : "number" === typeof a.length && 0 <= a.length ? Da(a) : []) : [];
  }
  var tb = x(xa),
    ub = I("0");
  function vb(a) {
    return a.splice(0, a.length);
  }
  var wb = x(function (a) {
      var b = H(a, "navigator") || {};
      a = H(b, "userAgent") || "";
      b = H(b, "vendor") || "";
      return { vb: -1 < Ja(b, "Apple"), Wb: a };
    }),
    xb = x(I("navigator.userAgent")),
    yb = /Firefox\/([0-9]+)/i,
    zb = x(function (a) {
      var b = H(a, "document.documentElement.style"),
        c = H(a, "InstallTrigger");
      a = -1 !== (H(a, "navigator.userAgent") || "").toLowerCase().search(yb);
      yb.lastIndex = 0;
      return !(!(b && "MozAppearance" in b) || Oa(c)) || a;
    });
  function Ab() {
    var a = Array.prototype.map;
    if (!zb(window)) return !0;
    try {
      a.call({ 0: !0, length: -Math.pow(2, 32) + 1 }, function () {
        throw 1;
      });
    } catch (b) {
      return !1;
    }
    return !0;
  }
  var Bb = ua(Array.prototype.map, "map");
  function Cb(a, b) {
    return F(
      function (c, d, e) {
        c.push(a(d, e));
        return c;
      },
      [],
      b
    );
  }
  var K =
      Bb && Ab()
        ? function (a, b) {
            return b && 0 < b.length ? Bb.call(b, a) : [];
          }
        : Cb,
    Db = r(K),
    Eb = na(K),
    Fb = ua(Array.prototype.some, "some");
  function Gb(a, b) {
    for (var c = 0; c < b.length; c += 1) if (c in b && a.call(b, b[c], c)) return !0;
    return !1;
  }
  var Hb = Fb
    ? function (a, b) {
        return Fb.call(b, a);
      }
    : Gb;
  function Ib(a) {
    try {
      return parseInt(a, 10);
    } catch (b) {
      return null;
    }
  }
  var Jb = na(parseInt),
    Kb = Jb(10),
    Lb = Jb(2),
    Mb = ua(Object.keys, "keys");
  function Nb(a) {
    var b = [],
      c;
    for (c in a) bb(a, c) && b.push(c);
    return b;
  }
  var Pb = (function (a) {
      return function (b) {
        return b ? a(b) : [];
      };
    })(Object.entries),
    M = Mb
      ? function (a) {
          return Mb(a);
        }
      : Nb,
    N = Object.assign,
    Qb = r(function (a, b) {
      return N({}, a, b);
    }),
    Rb = x(G(I("String.fromCharCode"), E("fromCharCode", ta), Ba)),
    Sb = x(G(xb, Va(/ipad|iphone|ipod/i))),
    Tb = x(function (a) {
      return H(a, "navigator.platform") || "";
    }),
    Ub = x(function (a) {
      a = wb(a);
      var b = a.Wb;
      return a.vb && !b.match("CriOS");
    }),
    Vb = Va(
      /Android.*Version\/[0-9][0-9.]*\sChrome\/[0-9][0-9.]|Android.*Version\/[0-9][0-9.]*\s(?:Mobile\s)?Safari\/[0-9][0-9.]*\sChrome\/[0-9][0-9.]*|; wv\).*Chrome\/[0-9][0-9.]*\sMobile/
    ),
    Wb = Va(/; wv\)/),
    Xb = x(function (a) {
      a = xb(a);
      return Wb(a) || Vb(a);
    }),
    Yb = x(function (a) {
      a = (xb(a) || "").toLowerCase();
      return La(a, "android") && La(a, "mobile");
    }),
    Zb = "other none unknown wifi ethernet bluetooth cellular wimax mixed".split(" "),
    $b = x(function (a) {
      var b = H(a, "navigator.connection.type");
      if (A(b)) return null;
      a = tb(a)(b, Zb);
      return -1 === a ? b : "" + a;
    }),
    ac = x(G(I("document.addEventListener"), Ba)),
    bc = x(function (a) {
      var b = H(a, "navigator") || {};
      return F(
        function (c, d) {
          return c || H(b, d);
        },
        "",
        ["language", "userLanguage", "browserLanguage", "systemLanguage"]
      );
    }),
    cc = x(function (a) {
      var b = H(a, "navigator") || {};
      a = bc(a);
      Ga(a) || ((a = ""), (b = H(b, "languages.0")), Ga(b) && (a = b));
      return a.toLowerCase().split("-")[0];
    }),
    dc = x(function (a) {
      return (H(a, "top") || a) !== a;
    }),
    ec = x(I("top.contentWindow")),
    fc = x(function (a) {
      var b = !1;
      try {
        b = a.navigator.javaEnabled();
      } catch (c) {}
      return b;
    });
  function gc(a) {
    return J("prerender", K(E(H(a, "document"), H), ["webkitVisibilityState", "visibilityState"]));
  }
  var hc = x(function (a) {
      var b = xb(a) || "",
        c = b.match(/Mac OS X ([0-9]+)_([0-9]+)/);
      c = c ? [+c[1], +c[2]] : [0, 0];
      b = b.match(/iPhone OS ([1-9]+)_([0-9]+)/);
      return 14 <= (b ? +b[1] : 0) ? !0 : (Sb(a) || 10 < c[0] || (10 === c[0] && 13 <= c[1])) && Ub(a);
    }),
    ic = /Edg\/(\d+)\./,
    jc = x(function (a) {
      var b;
      if (!(b = hc(a)))
        a: {
          if (zb(a) && (b = xb(a).match(yb)) && b.length) {
            b = 68 <= +b[1];
            break a;
          }
          b = !1;
        }
      if (!b)
        a: {
          if ((a = xb(a)) && (a = a.match(ic)) && 1 < a.length) {
            b = 79 <= Kb(a[1]);
            break a;
          }
          b = !1;
        }
      return b;
    }),
    kc = la.construct,
    lc = la.host,
    mc = ac(window),
    O = {
      ec: 24226447,
      $b: 26302566,
      hc: 51533966,
      cd: 65446441,
      fa: "https:",
      ea: "1650",
      kc: kc,
      dc: mc ? 512 : 2048,
      bc: mc ? 512 : 2048,
      cc: mc ? 100 : 400,
      dd: 100,
      fc: "noindex",
    },
    nc = oa("1");
  function oc(a, b, c, d) {
    var e = {};
    return Pa(a) ? a : ((e.id = a), (e.type = c), (e.defer = d), (e.params = b), e);
  }
  function pc(a) {
    return F(
      function (b, c) {
        var d = p(c),
          e = d.next().value,
          f = d.next().value;
        d = f.$a;
        f = a[f.W];
        b[e] = d ? d(f) : f;
        return b;
      },
      {},
      Pb(qc)
    );
  }
  var P = x(function (a) {
    return a.id + ":" + a.L;
  });
  function rc(a) {
    a = a.Ya = a.Ya || {};
    var b = (a._metrika = a._metrika || {});
    return {
      O: function (c, d) {
        bb(b, c) || (b[c] = d);
        return this;
      },
      A: function (c, d) {
        b[c] = d;
        return this;
      },
      m: function (c, d) {
        var e = b[c];
        return bb(b, c) || A(d) ? e : d;
      },
    };
  }
  var Q = x(rc),
    R = window.Promise,
    sc = ["http.0.st..rt.", "network error occurred", "send beacon", "Content Security Policy", "DOM Exception 18"],
    tc;
  function uc(a) {
    this.message = a;
  }
  var vc = (function (a) {
      return function (b, c) {
        c = void 0 === c ? !1 : c;
        if (tc) var d = new tc(b);
        else ta("Error", a.Error) ? ((tc = a.Error), (d = new a.Error(b))) : ((tc = uc), (d = new tc(b)));
        c && (d.unk = !0);
        return d;
      };
    })(window),
    wc = Va(RegExp("^http."));
  function xc(a) {
    throw a;
  }
  function yc(a, b) {
    for (var c = "", d = 0; d < b.length; d += 1) c += "" + (d ? a : "") + b[d];
    return c;
  }
  var zc = ua(Array.prototype.join, "join"),
    S = zc
      ? function (a, b) {
          return zc.call(b, a);
        }
      : yc,
    Ac = r(S),
    Bc = x(function (a) {
      a = !(!a.addEventListener || !a.removeEventListener);
      return { Oc: a, D: a ? "addEventListener" : "attachEvent", Fa: a ? "removeEventListener" : "detachEvent" };
    });
  function Cc(a, b, c, d, e, f) {
    a = Bc(a);
    var g = a.D,
      h = a.Fa;
    f = f ? h : g;
    if (b[f])
      if (a.Oc)
        if (e) b[f](c, d, e);
        else b[f](c, d);
      else b[f]("on" + c, d);
  }
  var Dc = x(function (a) {
      var b = !1;
      if (!a.addEventListener) return b;
      try {
        var c = Object.defineProperty({}, "passive", {
          get: function () {
            b = !0;
            return 1;
          },
        });
        a.addEventListener("test", t, c);
      } catch (d) {}
      return b;
    }),
    Ec = r(function (a, b) {
      if (null !== b) return a ? N({ capture: !0, passive: !0 }, b || {}) : !!b;
    }),
    Fc = x(function (a) {
      var b = Dc(a),
        c = Ec(b),
        d = {};
      return N(d, {
        D: function (e, f, g, h) {
          K(function (k) {
            var l = c(h);
            Cc(a, e, k, g, l, !1);
          }, f);
          return Ta(d.va, d, e, f, g, h);
        },
        va: function (e, f, g, h) {
          K(function (k) {
            var l = c(h);
            Cc(a, e, k, g, l, !0);
          }, f);
        },
      });
    });
  function Gc(a) {
    return H(a, "performance") || H(a, "webkitPerformance");
  }
  function Hc(a) {
    a = Gc(a);
    var b = H(a, "timing.navigationStart"),
      c = H(a, "now");
    c && (c = Ta(c, a));
    return [b, c];
  }
  function Ic(a, b) {
    var c = p(b || Hc(a)),
      d = c.next().value;
    c = c.next().value;
    return !isNaN(d) && z(c) ? Math.round(c() + d) : a.Date.now ? a.Date.now() : new a.Date().getTime();
  }
  function Jc(a) {
    return (10 > a ? "0" : "") + a;
  }
  function Kc(a) {
    var b = Fc(a),
      c = Hc(a),
      d = { l: a, ib: 0, T: c, wc: Ic(a, c) },
      e = p(c);
    c = e.next().value;
    e = e.next().value;
    (c && e) ||
      b.D(a, ["beforeunload", "unload"], function () {
        0 === d.ib && (d.ib = Ic(a, d.T));
      });
    return qa(d);
  }
  function T(a) {
    var b = a.ib;
    return 0 !== b ? b : Ic(a.l, a.T);
  }
  function Lc(a) {
    return Math.floor(T(a) / 1e3 / 60);
  }
  function Mc(a) {
    return Math.round(T(a) / 1e3);
  }
  function Nc(a) {
    var b = p(a.T),
      c = b.next().value;
    b = b.next().value;
    a = c && b ? b() : T(a) - a.wc;
    return Math.round(a);
  }
  var U = x(Kc);
  function Oc(a) {
    return a.fb || a.Ca.length <= a.R;
  }
  function Pc(a) {
    a.R = a.Ca.length;
  }
  function Qc(a) {
    a.fb = !0;
  }
  function Rc(a) {
    a.fb = !1;
  }
  function Sc(a) {
    Oc(a) && xc(vc("i"));
    var b = a.yb(a.Ca[a.R]);
    a.R += 1;
    return b;
  }
  var Tc = r(function (a, b) {
    for (var c = []; !Oc(b); ) {
      var d = Sc(b);
      a(d, function (e) {
        return e(b);
      });
      c.push(d);
    }
    return c;
  });
  function Uc(a, b) {
    return function (c) {
      var d = U(a),
        e = d(T);
      return Tc(function (f, g) {
        d(T) - e >= b && g(Qc);
      })(c);
    };
  }
  function Vc(a) {
    for (var b = !0, c = {}; !Oc(a) && b; c = { Za: void 0 })
      (b = !1),
        (c.Za = function () {
          b = !0;
          a.R += 1;
        }),
        a.yb(
          a.Ca[a.R],
          (function (d) {
            return function () {
              (0, d.Za)();
            };
          })(c)
        ),
        b || ((a.R += 1), (c.Za = E(a, Vc)));
  }
  function Wc(a, b) {
    return qa({ Ca: a, yb: b || w, fb: !1, R: 0 });
  }
  function Xc(a, b, c) {
    c = void 0 === c ? !1 : c;
    return new R(function (d, e) {
      function f(k, l) {
        l();
        d();
      }
      var g = a.slice();
      g.push({ I: f, da: f });
      var h = Wc(g, function (k, l) {
        var m = c ? k.I : k.da;
        if (m)
          try {
            m(b, l);
          } catch (n) {
            h(Pc), e(n);
          }
        else l();
      });
      h(Vc);
    });
  }
  function Yc(a) {
    try {
      return encodeURIComponent(a);
    } catch (b) {}
    a = S(
      "",
      lb(function (b) {
        return 55296 >= b.charCodeAt(0);
      }, a.split(""))
    );
    return encodeURIComponent(a);
  }
  function Zc(a) {
    var b = "";
    try {
      b = decodeURIComponent(a);
    } catch (c) {}
    return b;
  }
  function $c(a) {
    return a
      ? G(
          Db(function (b) {
            var c = p(b.split("="));
            b = c.next().value;
            c = c.next().value;
            return [b, Oa(c) ? void 0 : Zc(c)];
          }),
          Ya(function (b, c) {
            var d = p(c),
              e = d.next().value;
            d = d.next().value;
            b[e] = d;
            return b;
          }, {})
        )(a.split("&"))
      : {};
  }
  function ad(a) {
    return a
      ? G(
          Pb,
          Ya(function (b, c) {
            var d = p(c),
              e = d.next().value;
            d = d.next().value;
            A(d) || Oa(d) || b.push(e + "=" + Yc(d));
            return b;
          }, []),
          Ac("&")
        )(a)
      : "";
  }
  function bd(a, b, c) {
    var d = A(c);
    A(b) && d ? ((d = 1), (b = 1073741824)) : d ? (d = 1) : ((d = b), (b = c));
    return a.Math.floor(a.Math.random() * (b - d)) + d;
  }
  function cd(a, b, c) {
    return function () {
      var d = Q(arguments[0]),
        e = c ? "global" : "m1650",
        f = d.m(e, {}),
        g = H(f, a);
      g || ((g = x(b)), (f[a] = g), d.A(e, f));
      return g.apply(null, arguments);
    };
  }
  var dd = ob([26812653]),
    ed = x(G(I("id"), dd), P),
    fd = "hash host hostname href pathname port protocol search".split(" ");
  function V(a) {
    return F(
      function (b, c) {
        var d = H(a, "location." + c);
        b[c] = d ? "" + d : "";
        return b;
      },
      {},
      fd
    );
  }
  var gd = "ru by kz az kg lv md tj tm uz ee fr lt com co.il com.ge com.am com.tr com.ru".split(" "),
    hd = /(?:^|\.)(?:(ya\.ru)|(?:yandex)\.(\w+|com?\.\w+))$/,
    id = x(function (a) {
      return (a ? a.replace(/^www\./, "") : "").toLowerCase();
    }),
    jd = x(function (a) {
      a = V(a).hostname;
      var b = !1;
      a && (b = -1 !== a.search(hd));
      return b;
    }),
    kd = /^\s+|\s+$/g,
    ld = ua(String.prototype.trim, "trim");
  function md(a) {
    return a ? (ld ? ld.call(a) : ("" + a).replace(kd, "")) : "";
  }
  var nd = r(function (a, b) {
      return b.replace(a, "");
    })(/\D/g),
    od = ["metrika_enabled"],
    pd = [];
  function qd(a, b) {
    var c = rd;
    return !pd.length || J(b, od)
      ? !0
      : F(
          function (d, e) {
            return d && e(a, c, b);
          },
          !0,
          pd
        );
  }
  function sd(a) {
    try {
      var b = a.document.cookie;
      if (!Oa(b)) {
        var c = {};
        K(function (d) {
          var e = p(d.split("="));
          d = e.next().value;
          e = e.next().value;
          c[md(d)] = md(Zc(e));
        }, (b || "").split(";"));
        return c;
      }
    } catch (d) {}
    return null;
  }
  var td = cd("gsc", sd);
  function rd(a, b) {
    var c = td(a);
    return c ? c[b] || null : null;
  }
  var ud = /:\d+$/;
  function vd(a, b, c, d, e, f, g) {
    g = void 0 === g ? !1 : g;
    if (qd(a, b)) {
      var h = b + "=" + encodeURIComponent(c) + ";";
      if (d) {
        var k = new Date();
        k.setTime(k.getTime() + 6e4 * d);
        h += "expires=" + k.toUTCString() + ";";
      }
      e && ((d = e.replace(ud, "")), (h += "domain=" + d + ";"));
      try {
        (a.document.cookie = h + ("path=" + (f || "/"))), g || (td(a)[b] = c);
      } catch (l) {}
    }
  }
  var wd = x(function (a) {
    var b = (V(a).host || "").split(".");
    return 1 === b.length
      ? b[0]
      : F(
          function (c, d, e) {
            e += 1;
            2 <= e &&
              !c &&
              ((e = S(".", b.slice(-e))),
              vd(a, "metrika_enabled", "1", 0, e, void 0, !0),
              (d = (d = sd(a)) && d.metrika_enabled) && vd(a, "metrika_enabled", "", -100, e, void 0, !0),
              d && (c = e));
            return c;
          },
          "",
          b
        );
  });
  function xd(a, b, c) {
    b = void 0 === b ? "_ym_" : b;
    c = void 0 === c ? "" : c;
    var d = wd(a),
      e = 1 === (d || "").split(".").length ? d : "." + d,
      f = c ? "_" + c : "";
    return {
      ya: function (g, h, k) {
        vd(a, "" + b + g + f, "", -100, h || e, k, !1);
        return this;
      },
      m: function (g) {
        return rd(a, "" + b + g + f);
      },
      A: function (g, h, k, l, m) {
        vd(a, "" + b + g + f, h, k, l || e, m);
        return this;
      },
    };
  }
  var yd = x(xd),
    zd = x(function (a) {
      var b = yd(a),
        c = "1" === b.m("debug"),
        d = -1 < Ka(V(a).href, "_ym_debug=1") || -1 < Ka(V(a).href, "_ym_debug=2"),
        e = a._ym_debug;
      (!e && !d) || c || ((a = V(a)), b.A("debug", "1", void 0, a.host));
      return !!(c || e || d);
    });
  function Ad() {
    return {};
  }
  function Bd() {
    return [];
  }
  var Cd = cd("debuggerEvents", Bd, !0);
  function Dd(a, b) {
    if (zd(a)) {
      var c = b.counterKey;
      if (c) {
        var d = p(c.split(":"));
        c = d.next().value;
        d = d.next().value;
        c = dd(Ib(c));
        if ("1" === d || c) return;
      }
      c = Cd(a);
      1e3 === c.length && c.shift();
      c.push(b);
    }
  }
  function Ed(a, b, c) {
    var d = bd(a),
      e = c.Z,
      f = c.K,
      g = c.ia,
      h = c.Ha;
    c = c.kb;
    var k = {},
      l = {},
      m = {};
    Dd(
      a,
      ((m.name = "request"),
      (m.data =
        ((l.url = b),
        (l.requestId = d),
        (l.senderParams = ((k.rBody = f), (k.debugStack = e), (k.rHeaders = g), (k.rQuery = h), (k.verb = c), k)),
        l)),
      m)
    );
    return d;
  }
  function Fd(a, b) {
    return Array.prototype.find.call(b, a);
  }
  var Gd = r(function (a, b) {
      var c = b || {};
      return {
        l: E(c, w),
        m: function (d, e) {
          var f = c[d];
          return A(f) && !A(e) ? e : f;
        },
        A: function (d, e) {
          c[d] = e;
          return this;
        },
        eb: function (d, e) {
          return "" === e || Oa(e) ? this : this.A(d, e);
        },
        Ka: E(c, a),
      };
    }),
    Id = Gd(function (a) {
      var b = "";
      a = F(
        function (c, d) {
          var e = p(d),
            f = e.next().value;
          e = e.next().value;
          e = "" + f + ":" + e;
          "t" === f ? (b = e) : c.push(e);
          return c;
        },
        [],
        Pb(a)
      );
      b && a.push(b);
      return S(":", a);
    });
  function Jd(a, b, c) {
    var d = N({}, b.B);
    a = U(a);
    b.C && (d["browser-info"] = Id(b.C.l()).A("st", a(Mc)).Ka());
    !d.t && (b = b.Y) && (b.A("ti", c), (d.t = b.Ka()));
    return d;
  }
  function Kd(a, b, c, d, e, f) {
    e = void 0 === e ? 0 : e;
    f = void 0 === f ? 0 : f;
    var g = N({ Z: [] }, d.H),
      h = p(b[f]),
      k = h.next().value;
    h = h.next().value;
    var l = c[e];
    if ((!g.ia || !g.ia["Content-Type"]) && g.K) {
      var m = {};
      g.ia = N({}, g.ia, ((m["Content-Type"] = "application/x-www-form-urlencoded"), m));
      g.K = "site-info=" + Yc(g.K);
    }
    g.kb = g.K ? "POST" : "GET";
    g.Ha = Jd(a, d, k);
    g.U = (d.aa || {}).U;
    g.Z.push(k);
    N(d.H, g);
    k = "" + l + (d.Ga && d.Ga.Dc ? "/1" : "");
    var n = 0;
    n = Ed(a, k, g);
    return h(k, g)
      .then(function (u) {
        var q = n,
          v = {},
          y = {};
        Dd(a, ((y.name = "requestSuccess"), (y.data = ((v.body = u), (v.requestId = q), v)), y));
        return { Ib: u, Vb: e };
      })
      ["catch"](function (u) {
        var q = n,
          v = {},
          y = {};
        Dd(a, ((y.name = "requestFail"), (y.data = ((v.error = u), (v.requestId = q), v)), y));
        q = f + 1 >= b.length;
        v = e + 1 >= c.length;
        q && v && xc(u);
        return Kd(a, b, c, d, !v && q ? e + 1 : e, q ? 0 : f + 1);
      });
  }
  function Ld(a, b) {
    return function (c, d) {
      return Kd(a, b, d, c);
    };
  }
  function Md(a, b) {
    K(G(w, Ua("push", a)), b);
    return a;
  }
  function Nd(a, b) {
    return b ? a(b) : a();
  }
  var Od = G(w, Nd),
    Pd = { id: "id", Yb: "ut", L: "type", Wa: "ldc", Da: "nck", Qa: "url", tc: "referrer" },
    Qd = /^\d+$/,
    Rd = {
      id: function (a) {
        a = "" + (a || "0");
        Qd.test(a) || (a = "0");
        try {
          var b = Kb(a);
        } catch (c) {
          b = 0;
        }
        return b;
      },
      L: function (a) {
        return "" + (a || 0 === a ? a : "0");
      },
      Da: ib,
      Yb: ib,
    };
  Pd.Ma = "defer";
  Rd.Ma = ib;
  Pd.G = "params";
  Rd.G = function (a) {
    return Pa(a) || rb(a) ? a : null;
  };
  Pd.Tb = "trackLinks";
  var qc = F(
    function (a, b) {
      var c = p(b),
        d = c.next().value;
      c = c.next().value;
      a[d] = { W: c, $a: Rd[d] };
      return a;
    },
    {},
    Pb(Pd)
  );
  function Sd(a) {
    return F(
      function (b, c) {
        var d = p(c),
          e = d.next().value;
        d = d.next().value;
        b[qc[e].W] = d;
        return b;
      },
      {},
      Pb(a)
    );
  }
  function Td(a, b, c) {
    for (var d = [b, c], e = -1e4, f = 0; f < a.length; f += 1) {
      var g = p(a[f]),
        h = g.next().value;
      g = g.next().value;
      if (c === g && h === b) return;
      if (c < g && c >= e) {
        a.splice(f, 0, d);
        return;
      }
      e = g;
    }
    a.push(d);
  }
  var Ud = {},
    Vd =
      ((Ud.w = [
        [
          function (a, b) {
            return {
              I: function (c, d) {
                var e = c.B,
                  f = {};
                e = ((f["page-url"] = (e && e["page-url"]) || ""), (f.charset = "utf-8"), f);
                "0" !== b.L && (e["cnt-class"] = b.L);
                c.C || (c.C = Id());
                f = c.C;
                e = {
                  aa: { U: "watch/" + b.id },
                  H: N(void 0 === c.H ? {} : c.H, { Zb: !!f.m("pv") && !f.m("ar") && !f.m("wh") }),
                  B: N(c.B || {}, e),
                };
                N(c, e);
                d();
              },
            };
          },
          1,
        ],
      ]),
      Ud);
  function Wd(a, b, c) {
    var d = Ld(a, b);
    return function (e) {
      return Xc(c, e, !0)
        .then(function () {
          var f = e.aa || {},
            g = void 0 === f.vc ? "" : f.vc,
            h = void 0 === f.U ? "" : f.U;
          f = K(
            function (k) {
              return O.fa + "//" + ("" + g + k || lc) + "/" + h;
            },
            void 0 === f.tb ? [lc] : f.tb
          );
          return d(e, f);
        })
        .then(function (f) {
          var g = f.Ib;
          f = f.Vb;
          e.md = g;
          e.nd = f;
          return Xc(c, e).then(E(g, w));
        });
    };
  }
  function Xd(a) {
    return function (b, c, d) {
      return function (e, f) {
        var g = K(G(ub, Za([b, f]), Nd), Vd[a] || []);
        g = Md(g, d);
        return Wd(b, c, g)(e);
      };
    };
  }
  var Yd = Xd("w"),
    Zd = ["webkitvisibilitychange", "visibilitychange"];
  function $d(a) {
    return {
      I: function (b, c) {
        var d = a.document,
          e = b.C;
        if (e && gc(a)) {
          var f = Fc(a),
            g = function (h) {
              gc(a) || (f.va(d, Zd, g), c());
              return h;
            };
          f.D(d, Zd, g);
          e.A("pr", "1");
        } else c();
      },
    };
  }
  function ae(a) {
    var b = "";
    rb(a) ? (b = S(".", a)) : Ga(a) && (b = a);
    return vc("err.kn(" + O.ea + ")" + b);
  }
  function be() {
    var a = Ea(arguments);
    xc(ae(a));
  }
  var ce = Va(RegExp("^err.kn")),
    de = [];
  function ee(a, b, c) {
    var d = "u.a.e",
      e = "";
    c &&
      ("object" === typeof c
        ? (c.unk && xc(c),
          (d = c.message),
          (e = ("string" === typeof c.stack && c.stack.replace(/\n/g, "\\n")) || "n.s.e.s"))
        : (d = "" + c));
    ce(d) || Hb(E(d, La), sc) || (wc(d) && 0.1 <= a.Math.random()) || K(G(w, Za(["jserrs", d, b, e]), Nd), de);
  }
  function W(a, b, c, d) {
    var e = c || xc;
    return function () {
      var f = d;
      try {
        f = e.apply(null, arguments);
      } catch (g) {
        ee(a, b, g);
      }
      return f;
    };
  }
  function X(a, b, c) {
    return function () {
      return W(arguments[0], a, b, c).apply(this, arguments);
    };
  }
  var fe = Gd(function (a) {
    a = Pb(a);
    return S(
      "",
      K(function (b) {
        var c = p(b);
        b = c.next().value;
        c = c.next().value;
        return Na(c) ? "" : b + "(" + c + ")";
      }, a)
    );
  });
  function ge(a, b, c) {
    c = void 0 === c ? null : c;
    a.Y || (a.Y = fe());
    b && a.Y.eb(b, c);
    return a.Y;
  }
  var he = [],
    ie = /^\s*(data|javascript):/i,
    je = new RegExp(
      S("", [
        "\\.(" +
          S(
            "|",
            "3gp 7z aac ac3 acs ai avi ape apk asf bmp bz2 cab cdr crc32 css csv cue divx dmg djvu? doc(x|m|b)? emf eps exe flac? flv iso swf gif t?gz jpe?g? js m3u8? m4a mp(3|4|e?g?) m4v md5 mkv mov msi ods og(g|m|v) psd rar rss rtf sea sfv sit sha1 svg tar tif?f torrent ts txt vob wave? wma wmv wmf webm ppt(x|m|b)? xls(x|m|b)? pdf phps png xpi g?zip".split(
              " "
            )
          ) +
          ")$",
      ]),
      "i"
    ),
    ke = {},
    le =
      ((ke.hit = "h"),
      (ke.params = "p"),
      (ke.reachGoal = "g"),
      (ke.userParams = "up"),
      (ke.trackHash = "th"),
      (ke.accurateTrackBounce = "atb"),
      (ke.notBounce = "nb"),
      (ke.addFileExtension = "fe"),
      (ke.extLink = "el"),
      (ke.file = "fc"),
      (ke.trackLinks = "tl"),
      (ke.destruct = "d"),
      (ke.setUserID = "ui"),
      (ke.getClientID = "ci"),
      (ke.clickmap = "cm"),
      (ke.enableAll = "ea"),
      ke),
    me = {
      mc: function (a) {
        a = rc(a).m("mt", {});
        a = Pb(a);
        return a.length
          ? F(
              function (b, c, d) {
                var e = p(c);
                c = e.next().value;
                e = e.next().value;
                return "" + b + (d ? "-" : "") + c + "-" + e;
              },
              "",
              a
            )
          : null;
      },
    };
  function ne(a, b) {
    if (!b) return null;
    try {
      return a.JSON.parse(b);
    } catch (c) {
      return null;
    }
  }
  function oe(a, b) {
    try {
      return a.JSON.stringify(b, null, void 0);
    } catch (c) {
      return null;
    }
  }
  function pe(a) {
    try {
      return a.localStorage;
    } catch (b) {}
    return null;
  }
  function qe(a, b) {
    var c = pe(a);
    try {
      c.removeItem(b);
    } catch (d) {}
  }
  function re(a, b) {
    var c = pe(a);
    try {
      return ne(a, c.getItem(b));
    } catch (d) {}
    return null;
  }
  function se(a, b, c) {
    var d = pe(a);
    a = oe(a, c);
    if (!Na(a))
      try {
        d.setItem(b, a);
      } catch (e) {}
  }
  var te = x(function (a) {
    se(a, "_ymBRC", "1");
    var b = "1" !== re(a, "_ymBRC");
    b || qe(a, "_ymBRC");
    return b;
  });
  function ue(a, b, c) {
    var d = "" + (void 0 === c ? "_ym" : c) + (void 0 === b ? "" : b);
    d && (d += "_");
    return {
      xc: te(a),
      m: function (e, f) {
        var g = re(a, "" + d + e);
        return Na(g) && !A(f) ? f : g;
      },
      A: function (e, f) {
        se(a, "" + d + e, f);
        return this;
      },
      ya: function (e) {
        qe(a, "" + d + e);
        return this;
      },
    };
  }
  var ve = x(ue),
    we = x(ue, function (a, b, c) {
      return "" + b + c;
    });
  function xe(a) {
    if (Oa(a)) return !1;
    a = a.nodeType;
    return 3 === a || 8 === a;
  }
  function ye(a) {
    return a ? a.innerText || "" : "";
  }
  var ze = x(function (a) {
      a = H(a, "document") || {};
      return ("" + (a.characterSet || a.charset || "")).toLowerCase();
    }),
    Ae = x(G(I("document"), E("createElement", eb)));
  function Be(a) {
    var b = a && a.parentNode;
    b && b.removeChild(a);
  }
  function Ce(a, b) {
    try {
      return new RegExp("(?:^|\\s)" + a + "(?:\\s|$)").test(b.className);
    } catch (c) {
      return !1;
    }
  }
  var De = x(function (a) {
    var b = H(a, "Element.prototype");
    return b
      ? (a = Fd(
          function (c) {
            var d = b[c];
            return !!d && ta(c, d);
          },
          ["matches", "webkitMatchesSelector", "mozMatchesSelector", "msMatchesSelector", "oMatchesSelector"]
        ))
        ? b[a]
        : null
      : null;
  });
  function Ee(a) {
    a = H(a, "document");
    try {
      return a.getElementsByTagName("body")[0];
    } catch (b) {
      return null;
    }
  }
  function Fe(a) {
    var b = H(a, "document") || {},
      c = b.documentElement;
    return "CSS1Compat" === b.compatMode ? c : Ee(a) || c;
  }
  function Ge(a) {
    var b = H(a, "visualViewport.width"),
      c = H(a, "visualViewport.height");
    a = H(a, "visualViewport.scale");
    return Oa(b) || Oa(c) ? null : [Math.floor(b), Math.floor(c), a];
  }
  function He(a) {
    var b = Ge(a);
    if (b) {
      var c = p(b);
      b = c.next().value;
      var d = c.next().value;
      c = c.next().value;
      return [a.Math.round(b * c), a.Math.round(d * c)];
    }
    b = Fe(a);
    return [H(b, "clientWidth") || a.innerWidth, H(b, "clientHeight") || a.innerHeight];
  }
  function Ie(a) {
    try {
      return a.getBoundingClientRect && a.getBoundingClientRect();
    } catch (b) {
      return (
        (a = b),
        "object" === typeof a && null !== a && 16389 === (a.Ec && a.Ec & 65535)
          ? { top: 0, bottom: 0, left: 0, width: 0, height: 0, right: 0 }
          : null
      );
    }
  }
  var Je = /\/$/;
  function Ke(a) {
    var b = Q(a),
      c = b.m("hitId");
    c || ((c = bd(a)), b.A("hitId", c));
    return c;
  }
  function Le(a, b) {
    var c = ve(a),
      d = yd(a),
      e = b.Wa || "uid";
    return [c.m(e), d.m(e)];
  }
  var Me = cd("r", function (a, b) {
    var c = p(Le(a, b)),
      d = c.next().value;
    return !c.next().value && d;
  });
  function Ne(a, b) {
    var c = b.Wa,
      d = c || "uid";
    c = c ? a.location.hostname : void 0;
    var e = yd(a),
      f = ve(a),
      g = U(a)(Mc),
      h = p(Le(a, b)),
      k = h.next().value;
    h = h.next().value;
    var l = e.m("d");
    Me(a, b);
    var m = !1;
    !h && k && ((h = k), (m = !0));
    if (!h) (h = S("", [g, bd(a, 1e6, 999999999)])), (m = !0);
    else if (!l || 15768e3 < g - Kb(l)) m = !0;
    m && !b.Da && (e.A(d, h, 525600, c), e.A("d", "" + g, 525600, c));
    f.A(d, h);
    return h;
  }
  function Oe(a, b, c) {
    return eb("setTimeout", a)(b, c);
  }
  function Pe(a, b) {
    return eb("clearTimeout", a)(b);
  }
  function Qe(a, b, c, d) {
    return Oe(a, W(a, "d.err." + (d || "def"), b), c);
  }
  function Re(a, b) {
    return function (c) {
      return c(a, b);
    };
  }
  function Se(a) {
    var b = [],
      c = !1;
    return qa(function (d, e) {
      function f(g) {
        b.push(g) === a.length && d(b);
      }
      K(function (g) {
        g(
          Re(f, function (h) {
            if (!c)
              try {
                e(h), (c = !0);
              } catch (k) {
                f(k);
              }
          })
        );
      }, a);
    });
  }
  function Te(a) {
    return qa(function (b, c) {
      a.then(c, b);
    });
  }
  function Ue(a) {
    return qa(function (b, c) {
      c(a);
    });
  }
  function Ve(a) {
    function b(e) {
      H(c, d) ? e() : Qe(a, E(e, b), 100);
    }
    var c = void 0 === c ? a : c;
    var d = (c.nodeType ? "contentWindow." : "") + "document.body";
    return qa(function (e, f) {
      b(f);
    });
  }
  function We(a) {
    var b = [],
      c = { kd: b };
    c.D = G(Ua("push", b), E(c, w));
    c.Fa = G(na(xa(a))(b), na(Ua("splice", b))(1), E(c, w));
    c.N = G(w, na(Nd), Eb(b));
    return c;
  }
  function Xe(a) {
    var b = {};
    return {
      D: function (c, d) {
        K(function (e) {
          H(b, e) || (b[e] = We(a));
          b[e].D(d);
        }, c);
        return this;
      },
      Fa: function (c, d) {
        K(function (e) {
          H(b, e) && b[e].Fa(d);
        }, c);
        return this;
      },
      N: function (c, d) {
        return H(b, c) ? W(a, "e." + c, b[c].N, [])(d) : [];
      },
    };
  }
  var Ye = x(function () {
      return { X: {}, pending: {}, children: {} };
    }),
    Ze = I("postMessage");
  function $e(a, b) {
    return function (c, d) {
      var e = { Na: U(a)(T), key: a.Math.random(), dir: 0 };
      c.length && ((e.Na = Kb(c[0])), (e.key = parseFloat(c[1])), (e.dir = Kb(c[2])));
      N(d, b);
      var f = {};
      f = ((f.data = d), (f.__yminfo = S(":", ["__yminfo", e.Na, e.key, e.dir])), f);
      return { meta: e, Qb: oe(a, f) || "" };
    };
  }
  var af = X("s.f", function (a, b, c, d, e) {
    b = b(d);
    var f = Ye(a),
      g = S(":", [b.meta.Na, b.meta.key]);
    if (Ze(c)) {
      f.pending[g] = e;
      try {
        c.postMessage(b.Qb, "*");
      } catch (h) {
        delete f.pending[g];
        return;
      }
      Qe(
        a,
        function () {
          delete f.pending[g];
        },
        5e3,
        "if.s"
      );
    }
  });
  function bf(a) {
    if (ta("MutationObserver", a.MutationObserver)) {
      var b = Ye(a).children,
        c = new a.MutationObserver(function () {
          K(function (d) {
            H(b[d], "window.window") || delete b[d];
          }, M(b));
        });
      Ve(a)(
        Re(t, function () {
          c.observe(a.document.body, { subtree: !0, childList: !0 });
        })
      );
    }
  }
  function cf(a, b) {
    var c = Ye(a);
    b.D(["initToParent"], function (d) {
      var e = p(d);
      d = e.next().value;
      e = e.next().value;
      window.window && (c.children[e.counterId] = { info: e, window: d.source });
    })
      .D(["initToChild"], function (d) {
        var e = p(d);
        d = e.next().value;
        e = e.next().value;
        d.source === a.parent && b.N("parentConnect", [d, e]);
      })
      .D(["parentConnect"], function (d) {
        var e = p(d);
        d = e.next().value;
        e = e.next().value;
        e.counterId && (c.X[e.counterId] = { info: e, window: d.source });
      });
  }
  var df = X("s.fh", function (a, b, c, d, e, f) {
      var g = null,
        h = null,
        k = Ye(a),
        l = null;
      try {
        (g = ne(a, f.data)), (h = g.__yminfo), (l = g.data);
      } catch (m) {
        return;
      }
      if (!Oa(h) && h.substring && "__yminfo" === h.substring(0, 8) && !Oa(l) && ((a = h.split(":")), 4 === a.length))
        if (
          ((g = b.id),
          (h = p(a)),
          h.next(),
          (b = h.next().value),
          (a = h.next().value),
          (h = h.next().value),
          !rb(l) && l.type && "0" === h && l.counterId)
        ) {
          if (!l.toCounter || l.toCounter == g) {
            k = null;
            try {
              k = f.source;
            } catch (m) {}
            !Na(k) &&
              Ze(k) &&
              ((f = d.N(l.type, [f, l])),
              (e = K(G(w, Qb(e)), f.concat([void 0]))),
              (l = c([b, a, l.counterId], e)),
              k.postMessage(l.Qb, "*"));
          }
        } else
          h === "" + g &&
            rb(l) &&
            lb(function (m) {
              return !(!m.hid || !m.counterId);
            }, l).length === l.length &&
            (c = k.pending[S(":", [b, a])]) &&
            c.apply(null, [f].concat(l));
    }),
    ef = x(function (a, b) {
      var c = eb("getElementsByTagName", H(a, "document")),
        d = Ye(a),
        e = Ze(a),
        f = Xe(a),
        g = Fc(a);
      if (!c || !e) return null;
      c = c.call(a.document, "iframe");
      e = {};
      e = ((e.counterId = b.id), (e.hid = "" + Ke(a)), e);
      jc(a) && (e.duid = Ne(a, b));
      cf(a, f);
      bf(a);
      var h = $e(a, e),
        k = B([a, E([], h)], af);
      K(function (l) {
        var m = null;
        try {
          m = l.contentWindow;
        } catch (n) {}
        m &&
          k(m, { type: "initToChild" }, function (n, u) {
            f.N("initToParent", [n, u]);
          });
      }, c);
      dc(a) &&
        k(a.parent, { type: "initToParent" }, function (l, m) {
          f.N("parentConnect", [l, m]);
        });
      g.D(a, ["message"], B([a, b, h, f, e], df));
      return { ba: f, X: d.X, children: d.children, Lb: k };
    }, G(Aa, P)),
    ff = x(
      function (a, b) {
        if (!jc(a) || !dc(a)) return Ne(a, b);
        var c = ef(a, b);
        return c && c.X[b.id] ? c.X[b.id].info.duid || Ne(a, b) : Ne(a, b);
      },
      function (a, b) {
        return "" + b.Wa + b.Da;
      }
    ),
    gf = x(
      G(
        U,
        qa(function (a) {
          return -new a.l.Date().getTimezoneOffset();
        })
      )
    ),
    hf = G(
      U,
      qa(function (a) {
        a = new a.l.Date();
        return S(
          "",
          K(Jc, [a.getFullYear(), a.getMonth() + 1, a.getDate(), a.getHours(), a.getMinutes(), a.getSeconds()])
        );
      })
    ),
    jf = G(U, qa(Mc)),
    kf = x(
      G(
        U,
        qa(function (a) {
          return p(a.T).next().value;
        })
      )
    ),
    lf = x(function (a) {
      a = Q(a);
      var b = a.m("counterNum", 0) + 1;
      a.A("counterNum", b);
      return b;
    }, G(Aa, P)),
    Y = {},
    mf =
      ((Y.vf = E(la.version, w)),
      (Y.nt = $b),
      (Y.fu = function (a, b, c) {
        var d = c.B;
        if (!d) return null;
        b = (H(a, "document.referrer") || "").replace(Je, "");
        c = (d["page-ref"] || "").replace(Je, "");
        d = d["page-url"];
        a = V(a).href !== d;
        b = b !== c;
        c = 0;
        a && b ? (c = 3) : b ? (c = 1) : a && (c = 2);
        return c;
      }),
      (Y.en = ze),
      (Y.la = bc),
      (Y.ut = function (a, b, c) {
        var d = c.F;
        c = c.B;
        d = d && d.Ea;
        c && (jd(a) || b.Yb || d) && (c.ut = O.fc);
        return null;
      }),
      (Y.v = E(O.ea, w)),
      (Y.cn = lf),
      (Y.dp = function (a) {
        var b = Q(a),
          c = b.m("bt", {});
        if (A(b.m("bt"))) {
          var d = H(a, "navigator.getBattery");
          try {
            c.p = d && d.call(a.navigator);
          } catch (e) {}
          b.A("bt", c);
          c.p &&
            c.p.then &&
            c.p.then(
              W(a, "bi:dp.p", function (e) {
                c.Yc = H(e, "charging") && 0 === H(e, "chargingTime");
              })
            );
        }
        return hb(c.Yc);
      }),
      (Y.ls = x(function (a, b) {
        var c = we(a, b.id),
          d = U(a),
          e = c.m("lsid");
        return +e ? e : ((d = bd(a, 0, d(T))), c.A("lsid", d), d);
      }, Aa)),
      (Y.hid = Ke),
      (Y.phid = function (a, b) {
        if (!dc(a)) return null;
        var c = ef(a, b);
        if (!c) return null;
        var d = M(c.X);
        return d.length ? c.X[d[0]].info.hid : null;
      }),
      (Y.z = gf),
      (Y.i = hf),
      (Y.et = jf),
      (Y.c = G(I("navigator.cookieEnabled"), gb)),
      (Y.rn = G(w, bd)),
      (Y.rqn = function (a, b, c) {
        c = c.B;
        if (!c || c.nohit) return null;
        b = P(b);
        a = we(a, b);
        b = (a.m("reqNum", 0) || 0) + 1;
        a.A("reqNum", b);
        if (a.m("reqNum") === b) return b;
        a.ya("reqNum");
        return null;
      }),
      (Y.u = ff),
      (Y.w = function (a) {
        var b = p(He(a));
        a = b.next().value;
        b = b.next().value;
        return a + "x" + b;
      }),
      (Y.s = function (a) {
        var b = H(a, "screen");
        if (b) {
          a = H(b, "width");
          var c = H(b, "height");
          b = H(b, "colorDepth") || H(b, "pixelDepth");
          return S("x", [a, c, b]);
        }
        return null;
      }),
      (Y.sk = I("devicePixelRatio")),
      (Y.ifr = G(dc, gb)),
      (Y.j = G(fc, gb)),
      (Y.sti = function (a) {
        return dc(a) && ec(a) ? "1" : null;
      }),
      Y),
    nf = x(function () {
      return Md(M(mf), M(me));
    });
  function of(a) {
    return function (b, c) {
      return {
        I: function (d, e) {
          var f = d.C,
            g = d.B;
          f &&
            g &&
            K(function (h) {
              var k = mf[h],
                l = "bi",
                m = f;
              k || ((k = me[h]), (l = "tel"), (m = ge(d)));
              k && ((k = X(l + ":" + h, k, null)(b, c, d)), m.eb(h, k));
            }, a || nf());
          e();
        },
      };
    };
  }
  function pf(a) {
    return {
      I: function (b, c) {
        var d = b.C;
        if (d) {
          var e = a.document.title;
          b.F && b.F.title && (e = b.F.title);
          var f = eb("getElementsByTagName", a.document);
          "string" !== typeof e && f && ((e = f("title")), (e = (e = H(e, "0.innerHtml")) ? e : ""));
          e = e.slice(0, O.cc);
          d.A("t", e);
        }
        c();
      },
    };
  }
  var qf = x(Ad, P);
  function rf(a, b, c) {
    if (jc(a) && dc(a)) {
      var d = qf(b);
      if (!d.yc) {
        d.yc = !0;
        b = ef(a, b);
        if (!b) {
          c();
          return;
        }
        d.P = [];
        var e = function () {
          d.P && (K(Nd, d.P), (d.P = null));
        };
        Qe(a, e, 3e3);
        b.ba.D(["initToChild"], e);
      }
      d.P ? d.P.push(c) : c();
    } else c();
  }
  var sf = x(function () {
    return { sb: null, P: [] };
  }, P);
  function tf(a) {
    return (a = a.C) && a.m("pv") && !a.m("ar");
  }
  function uf(a, b, c) {
    var d = a.C;
    d ? (tf(a) ? ((b.sb = d), c()) : b.P ? b.P.push(c) : c()) : c();
  }
  function vf(a, b) {
    return {
      I: function (c, d) {
        var e = sf(b);
        e = B([c, e, d], uf);
        rf(a, b, e);
      },
      da: function (c, d) {
        var e = c.C,
          f = sf(b);
        if (e) {
          var g = f.P;
          f.sb === e && g && (K(Nd, g), (f.P = null));
        }
        d();
      },
    };
  }
  var wf = /^[a-z][\w.+-]+:/i;
  function xf(a, b) {
    var c = V(a),
      d = c.href,
      e = c.host,
      f = -1;
    if (!Ga(b) || A(b)) return d;
    c = b.replace(kd, "");
    if (-1 !== c.search(wf)) return c;
    var g = c.charAt(0);
    if (("?" === g && ((f = d.search(/\?/)), -1 === f)) || ("#" === g && ((f = d.search(/#/)), -1 === f))) return d + c;
    if (-1 !== f) return d.substr(0, f) + c;
    if ("/" === g) {
      if (((f = Ja(d, e)), -1 !== f)) return d.substr(0, f + e.length) + c;
    } else return (d = d.split("/")), (d[d.length - 1] = c), S("/", d);
    return "";
  }
  function yf(a) {
    return {
      I: function (b, c) {
        var d = b.B;
        if (!b.C || !d) return c();
        var e = d["page-ref"],
          f = d["page-url"];
        e && f !== e ? (d["page-ref"] = xf(a, e)) : delete d["page-ref"];
        d["page-url"] = xf(a, f).slice(0, O.dc);
        return c();
      },
    };
  }
  var zf = [
      [$d, 1],
      [vf, 2],
      [of(), 3],
      [pf, 4],
    ],
    Af = [],
    Bf = E(zf, Td),
    Cf = {},
    Df = ((Cf.h = zf), Cf),
    Z = E(Df, function (a, b, c, d) {
      a[b] || (a[b] = []);
      c && !Oa(d) && Td(a[b], c, d);
    });
  Bf(yf, -100);
  function Ef(a, b, c) {
    b = rb(b) ? b : Df[b] || zf;
    var d = K(ub, b);
    K(function (e) {
      return d.unshift(e);
    }, Af);
    return K(G(Za([a, c]), Nd), d);
  }
  function Ff(a, b) {
    var c = Ae(a);
    if (c) {
      var d = a.document,
        e = c("script");
      e.src = b.src;
      e.type = b.type || "text/javascript";
      e.charset = b.charset || "utf-8";
      e.async = b.async || !0;
      try {
        var f = d.getElementsByTagName("head")[0];
        if (!f) {
          var g = d.getElementsByTagName("html")[0];
          f = c("head");
          g && g.appendChild(f);
        }
        f.insertBefore(e, f.firstChild);
        return e;
      } catch (h) {}
    }
  }
  var Gf = x(function (a) {
    if ((a = Ae(a))) return a("a");
  });
  function Hf(a, b) {
    var c = Gf(a);
    return c
      ? ((c.href = b),
        {
          protocol: c.protocol,
          host: c.host,
          port: c.port,
          hostname: c.hostname,
          hash: c.hash,
          search: c.search,
          query: c.search.replace(/^\?/, ""),
          pathname: c.pathname || "/",
          path: (c.pathname || "/") + c.search,
          href: c.href,
        })
      : {};
  }
  function If(a) {
    return (a.split(":")[1] || "")
      .replace(/^\/*/, "")
      .replace(/^www\./, "")
      .split("/")[0];
  }
  function Jf(a, b) {
    if (!b || !b.length) return a;
    var c = p(a.split("#")),
      d = c.next().value;
    c = ca(c);
    c = (c = S("#", c)) ? "#" + c : "";
    return La(a, "?") ? d + "&" + b + c : d + "?" + b + c;
  }
  var Kf = /[^a-z0-9.:-]/;
  function Lf(a, b, c, d, e, f, g, h) {
    if (4 === b.readyState)
      if ((200 === b.status || e || g(c), e))
        200 === b.status
          ? f(b.responseText)
          : g(vc("http." + b.status + ".st." + b.statusText + ".rt." + ("" + b.responseText).substring(0, 50)));
      else {
        e = null;
        if (d)
          try {
            (e = ne(a, b.responseText)) || g(c);
          } catch (k) {
            g(c);
          }
        f(e);
      }
    return h;
  }
  function Mf(a, b, c) {
    var d = new a.XMLHttpRequest(),
      e = c.K,
      f = {},
      g = N(c.Zb ? ((f.wmode = "7"), f) : {}, c.Ha);
    return new R(function (h, k) {
      d.open(c.kb || "GET", Jf(b, ad(g)), !0);
      d.withCredentials = !1 !== c.$c;
      c.gb && (d.timeout = c.gb);
      G(
        Pb,
        Db(function (m) {
          var n = p(m);
          m = n.next().value;
          n = n.next().value;
          d.setRequestHeader(m, n);
        })
      )(c.ia);
      var l = B([a, d, ae(c.Z), c.Zb, c.Ic, h, k], Lf);
      d.onreadystatechange = l;
      try {
        d.send(e);
      } catch (m) {}
    });
  }
  function Of(a, b, c, d) {
    return new R(function (e, f) {
      var g = Fe(a),
        h = b("img"),
        k = G(E(h, Be), E(ae(d.Z), f)),
        l = Oe(a, k, d.gb || 3e3);
      h.onerror = k;
      h.onload = G(E(h, Be), E(null, e), B([a, l], Pe));
      l = N({}, d.Ha);
      delete l.wmode;
      k = c;
      (l = ad(l)) && (k = Jf(k, l));
      d.K && (k = Jf(k, d.K));
      h.src = k;
      Ub(a) &&
        (N(h.style, { position: "absolute", visibility: "hidden", width: "0px", height: "0px" }), g.appendChild(h));
    });
  }
  var Pf = {},
    Qf =
      ((Pf.x = {
        id: 2,
        check: function (a) {
          var b;
          if ((b = H(a, "XMLHttpRequest")))
            if ((b = "withCredentials" in new a.XMLHttpRequest())) {
              a: {
                if (
                  Kf.test(a.location.host) &&
                  a.opera &&
                  z(a.opera.version) &&
                  ((b = a.opera.version()), "string" === typeof b && "12" === b.split(".")[0])
                ) {
                  b = !0;
                  break a;
                }
                b = !1;
              }
              b = !b;
            }
          return b ? E(a, Mf) : !1;
        },
      }),
      (Pf.i = {
        id: 4,
        check: function (a) {
          var b = Ae(a);
          return b ? B([a, b], Of) : !1;
        },
      }),
      Pf),
    Rf = {};
  function Sf(a) {
    if (a)
      return F(
        function (b, c) {
          var d = Qf[c];
          d && b.push(d);
          return b;
        },
        [],
        a
      );
  }
  function Tf(a) {
    return Rf["*"] ? Sf(Rf["*"]) : a ? Sf(Rf[a]) : void 0;
  }
  var Uf = ["b", "f", "x", "j", "i"],
    Vf = ["x"],
    Wf = ["i"],
    Xf = {},
    Yf = ((Xf.h = Vf), Xf),
    Zf = x(function (a, b, c) {
      (c = Tf(b) || Sf(c)) || (c = Sf(b ? Yf[b] : Uf));
      b = F(
        function (d, e) {
          var f = e.check,
            g = e.id;
          (f = f(a)) && d.push([g, f]);
          return d;
        },
        [],
        c || []
      );
      b.length || be();
      return b;
    }, Aa),
    $f = Ta(R.reject, R, ae()),
    ag = {},
    bg = ((ag.h = Yd), ag),
    cg = X(
      "g.sen",
      function (a, b, c) {
        var d = Zf(a, b);
        c = c ? Ef(a, b, c) : [];
        var e = bg[b],
          f = e ? e(a, d, c) : Yd(a, d, c);
        return function () {
          var g = p(Ea(arguments)),
            h = g.next().value;
          g = ca(g);
          h = N(h, { H: N(void 0 === h.H ? {} : h.H, { Z: [b] }) });
          return f.apply(null, [h].concat(g));
        };
      },
      $f
    );
  function dg(a, b) {
    return function (c) {
      var d = c[a];
      d ? ((d.Hb = !0), d.Gb(b)) : (c[a] = { promise: R.resolve(b), Hb: !0, Gb: t });
    };
  }
  var eg = r(function (a, b) {
      if (!b[a]) {
        var c,
          d = new R(function (e) {
            c = e;
          });
        b[a] = { Gb: c, promise: d, Hb: !1 };
      }
      return b[a].promise;
    }),
    fg = x(G(Ad, qa));
  function gg(a, b, c) {
    b = P(b);
    var d = Kc(a);
    c = N({ rc: d(T) }, c);
    d = {};
    var e = {};
    Dd(a, ((e.counterKey = b), (e.name = "counterSettings"), (e.data = ((d.settings = c), d)), e));
    return fg()(dg(b, c));
  }
  function hg(a, b) {
    var c = P(a);
    return fg()(eg(c)).then(b);
  }
  function ig(a, b) {
    function c(d, e, f) {
      var g = {},
        h = {};
      Dd(
        a,
        ((h.name = "log"),
        (h.counterKey = b),
        (h.data = ((g.args = rb(e) ? e : [e]), (g.type = d), (g.variables = f), g)),
        h)
      );
    }
    return { log: E("log", c), error: E("error", c), warn: E("warn", c) };
  }
  var jg = x(
    X("dc.init", function (a, b) {
      return b && dd(Ib(b.split(":")[0])) ? { log: t, warn: t, error: t } : ig(a, b);
    }),
    Aa
  );
  function kg(a, b, c, d) {
    jg(a, b).log(c, d);
  }
  function lg(a, b, c, d, e) {
    return B([a, P(b), e ? [c + ".p", e] : c, d], kg);
  }
  function mg(a, b) {
    if (a.postMessage && !a.attachEvent) {
      var c = Fc(a),
        d = "__ym__promise_" + bd(a) + "_" + bd(a),
        e = t;
      e = c.D(
        a,
        ["message"],
        W(a, "as", function (f) {
          try {
            var g = f.data;
          } catch (h) {
            return;
          }
          g === d && (e(), f.stopPropagation && f.stopPropagation(), b());
        })
      );
      a.postMessage(d, "*");
    } else Qe(a, b, 0, "as");
  }
  var ng = X("h.p", function (a, b) {
    var c = cg(a, "h", b),
      d = b.Qa || "" + V(a).href,
      e = b.tc || a.document.referrer,
      f = {},
      g = {};
    f = { C: Id(((f.pv = 1), f)), B: ((g["page-url"] = d), (g["page-ref"] = e), g), F: {} };
    f.F.G = b.G;
    b.Ma && f.B && (f.B.nohit = "1");
    return c(f, b)
      .then(function (h) {
        if (h) {
          if (!b.Ma) {
            var k = {};
            lg(a, b, "h", ((k.id = b.id), (k.url = d), (k.ref = e), k), b.G)();
          }
          mg(a, B([a, b, h], gg));
        }
      })
      ["catch"](W(a, "h.g.s"));
  });
  function og(a, b, c) {
    try {
      if (z(b)) {
        var d = p(Ea(arguments));
        d.next();
        d.next();
        d.next();
        var e = ca(d);
        b.apply(Oa(c) ? null : c, e);
      }
    } catch (f) {
      Oe(a, E(f, xc), 0);
    }
  }
  var pg = ["yandex_metrika_callback" + la.callbackPostfix, "yandex_metrika_callbacks" + la.callbackPostfix],
    qg = X("cb.i", function (a) {
      var b = p(pg),
        c = b.next().value,
        d = b.next().value;
      if (z(a[c])) a[c]();
      "object" === typeof a[d] &&
        K(function (e, f) {
          a[d][f] = null;
          og(a, e);
        }, a[d]);
      K(function (e) {
        try {
          delete a[e];
        } catch (f) {
          a[e] = void 0;
        }
      }, pg);
    });
  function rg(a, b) {
    var c = Q(a).m("counters", {}),
      d = P(b);
    return c[d];
  }
  function sg(a, b, c, d) {
    var e = le[c];
    return e
      ? function () {
          var f = Ea(arguments);
          f = d.apply(null, da(f));
          var g = Q(a);
          g.O("mt", {});
          g = g.m("mt");
          var h = g[e];
          g[e] = h ? h + 1 : 1;
          return f;
        }
      : d;
  }
  var tg = [],
    ug = [],
    vg = [],
    wg = [],
    xg = [],
    yg = [];
  function zg(a) {
    a = Q(a);
    var b = a.m("dsjf") || qa({});
    a.O("dsjf", b);
    return b;
  }
  function Ag(a, b, c) {
    zg(a)(function (d) {
      d[b] = N(d[b] || {}, c);
    });
  }
  function Bg(a, b) {
    zg(a)(function (c) {
      delete c[b];
    });
  }
  function Cg(a, b) {
    return function (c) {
      Ag(a, b, c);
    };
  }
  var Dg = r(function (a, b) {
      var c = {};
      zg(a)(function (d) {
        c = d[b] || {};
      });
      return c;
    }),
    Eg = X("c.c.cc", function (a) {
      var b = Q(a),
        c = G(Dg(a), function (d) {
          var e = {};
          e = ((e.clickmap = !!d.clickmap), e);
          return N({}, d, e);
        });
      return W(a, "g.c.cc", G(Ta(b.m, b, "counters", {}), M, Db(c)));
    }),
    Fg = X("gt.c.rs", function (a, b) {
      var c = P(b),
        d = b.id,
        e = b.L,
        f = b.ed,
        g = b.pd,
        h = B([a, c], Bg),
        k = {};
      Ag(a, c, ((k.id = d), (k.type = +e), (k.clickmap = f), (k.trackHash = !!g), k));
      return h;
    }),
    Gg = {};
  function Hg(a, b) {
    var c = P(a),
      d = H(b, "__ym.turbo_page"),
      e = H(b, "__ym.turbo_page_id");
    Gg[c] || (Gg[c] = {});
    if (d || e) (Gg[c].Tc = d), (Gg[c].Uc = e);
  }
  function Ig(a) {
    a = P(a);
    return Gg[a] && Gg[a].Tc;
  }
  var Jg = x(Bd);
  function Kg(a, b) {
    return {
      I: function (c, d) {
        var e = (c.F || {}).G,
          f = void 0 === c.H ? {} : c.H;
        if (e && (Hg(b, e), !f.K && c.C && c.B)) {
          var g = oe(a, e),
            h = Jg(a),
            k = c.C.m("pv");
          if (g && !c.B.nohit) {
            var l = {},
              m = {};
            Dd(a, ((m.counterKey = P(b)), (m.name = "params"), (m.data = ((l.val = e), l)), m));
            k
              ? encodeURIComponent(g).length > O.bc
                ? h.push([c.C, e])
                : (c.B["site-info"] = g)
              : ((f.K = g), (c.H = f), c.Ga || (c.Ga = {}), (c.Ga.Dc = !0));
          }
        }
        d();
      },
      da: function (c, d) {
        var e = Jg(a),
          f = rg(a, b),
          g = f && f.params;
        g &&
          ((f = lb(G(ub, oa(c.C)), e)),
          K(function (h) {
            var k = p(h);
            k.next();
            k = k.next().value;
            g(k);
            h = tb(a)(h, e);
            e.splice(h, 1);
          }, f));
        d();
      },
    };
  }
  function Lg(a, b, c, d, e) {
    var f = B([a, d, e], og);
    return c.then(f, function (g) {
      f();
      ee(a, b, g);
    });
  }
  var Mg = x(Ad, P);
  function Ng(a) {
    var b = t,
      c = null,
      d = a.length;
    if (0 !== a.length && a[0]) {
      var e = a.slice(-1)[0];
      z(e) && ((b = e), (d = a.length + -1));
      var f = a.slice(-2)[0];
      z(f) && ((b = f), (c = e), (d = a.length + -2));
      d = a.slice(0, d);
      return { pc: c, xa: b, G: 1 === d.length ? a[0] : db(d) };
    }
  }
  var Og = X("pa.int", function (a, b) {
    var c = {};
    return (
      (c.params = function () {
        var d = Ea(arguments),
          e = Ng(d);
        if (!e) return null;
        d = e.pc;
        var f = e.G;
        e = e.xa;
        if (!Pa(f) && !rb(f)) return null;
        var g = cg(a, "1", b),
          h = Mg(b).url,
          k = !ed(b),
          l = {};
        l = ((l.id = b.id), l);
        var m = f;
        m.__ym &&
          ((m = N({}, f)),
          (m.__ym = F(
            function (u, q) {
              var v = H(f, "__ym." + q);
              v && (u[q] = v);
              return u;
            },
            {},
            he
          )),
          M(m.__ym).length || delete m.__ym,
          (k = !!M(m).length));
        m = JSON.stringify(m);
        l = lg(a, b, "pa", l, m);
        m = {};
        var n = {};
        g = g({ F: { G: f }, C: Id(((m.pa = 1), (m.ar = 1), m)), B: ((n["page-url"] = h || V(a).href), n) }, b).then(
          k ? l : t
        );
        return Lg(a, "p.s", g, e, d);
      }),
      c
    );
  });
  function Pg(a, b, c, d, e) {
    return new R(function (f, g) {
      var h = M(c),
        k = G(d.resolve || w, pa(f)),
        l = G(d.reject || w, pa(g));
      d.resolve = k;
      d.reject = l;
      K(function (m) {
        d.hb.push(+m);
        var n = c[m],
          u = Qe(a, E(ae(), l), 5100, "is.m"),
          q = {};
        b(n.window, N(e, ((q.toCounter = Kb(m)), q)), function (v, y) {
          Pe(a, u);
          d.Ob.push(m);
          d.resolve && d.resolve(y);
        });
      }, h);
    })["catch"](W(a, "if.b"));
  }
  function Qg(a, b, c) {
    b = lb(function (d) {
      return !J(c.info.counterId, d.hb);
    }, b);
    K(function (d) {
      if (c.info.counterId) {
        var e = {};
        a(((e[c.info.counterId] = c), e), d, d.data);
      }
    }, b);
  }
  function Rg(a, b) {
    var c = ef(a, b),
      d = [],
      e = [];
    if (!c) return null;
    var f = B([a, c.Lb], Pg),
      g = E(f, Qg);
    c.ba
      .D(["initToParent"], function (h) {
        h = p(h);
        h.next();
        h = h.next().value;
        g(d, c.children[h.counterId]);
      })
      .D(["parentConnect"], function (h) {
        h = p(h);
        h.next();
        h = h.next().value;
        g(e, c.X[h.counterId]);
      });
    return {
      ba: c.ba,
      od: function (h, k) {
        return new R(function (l, m) {
          c.Lb(h, k, function (n, u) {
            l([n, u]);
          });
          Qe(a, E(ae(), m), 5100, "is.o");
        });
      },
      Kb: function (h) {
        var k = { Ob: [], hb: [], data: h };
        d.push(k);
        return f(c.children, k, h);
      },
      Mb: function (h) {
        var k = { Ob: [], hb: [], data: h };
        e.push(k);
        return f(c.X, k, h);
      },
    };
  }
  var Sg = x(Rg, G(Aa, P));
  function Tg(a, b) {
    if (!J(b, K(I("ymetrikaEvent.type"), a))) {
      var c = {},
        d = {};
      a.push(((d.ymetrikaEvent = ((c.type = b), c)), d));
    }
  }
  function Ug(a) {
    a = Q(a);
    var b = a.m("dataLayer", []);
    a.A("dataLayer", b);
    return b;
  }
  function Vg(a, b, c) {
    c = void 0 === c ? t : c;
    var d = void 0 === d ? !1 : d;
    var e = We(a);
    if (b && z(b.push)) {
      var f = b.push;
      b.push = function () {
        var g = Ea(arguments),
          h = p(g).next().value;
        d && e.N(h);
        g = f.apply(b, g);
        d || e.N(h);
        return g;
      };
      a = {
        ab: e,
        unsubscribe: function () {
          b.push = f;
        },
      };
      c(a);
      K(e.N, b);
      return a;
    }
  }
  function Wg(a, b) {
    var c = H(b, "ymetrikaEvent");
    c && a.N(H(c, "type"), c);
  }
  function Xg(a, b, c) {
    c = void 0 === c ? w : c;
    var d = Xe(a);
    c(d);
    var e = E(d, Wg);
    Vg(a, b, function (f) {
      f.ab.D(e);
    });
    return d;
  }
  function Yg(a, b, c, d) {
    var e = rg(a, c);
    if (e) {
      a = d.data;
      c = "" + c.id;
      var f = d.sended || [];
      d.sended || (d.sended = f);
      J(c, f) ||
        !e.params ||
        (d.counter && "" + d.counter !== c) ||
        (e.params(a), f.push(c), d.parent && ((d = {}), b.Mb(((d.type = "params"), (d.data = a), d))));
    }
  }
  var Zg = X("y.p", function (a, b) {
    var c = Rg(a, b);
    if (c) {
      var d = Ug(a),
        e = B([a, c, b], Yg);
      Xg(a, d, function (f) {
        f.D(["params"], e);
      });
      c.ba.D(["params"], G(I("1"), e));
    }
  });
  function $g(a, b, c, d) {
    var e = V(a),
      f = e.hostname;
    e = e.href;
    if ((b = Mg(b).url)) (a = Hf(a, b)), (f = a.hostname), (e = a.href);
    return [d + "://" + f + "/" + c, e || ""];
  }
  var ah = { hd: Va(/[/&=?#]/) },
    bh = X("go.in", function (a, b, c, d) {
      c = void 0 === c ? "goal" : c;
      var e = {};
      return (
        (e.reachGoal = function (f, g, h, k) {
          if (!f || (ah[c] && ah[c](f))) return null;
          var l = g,
            m = h || t;
          z(g) && ((m = g), (l = void 0), (k = h));
          g = {};
          var n = lg(a, b, "gr", ((g.id = b.id), (g.goal = f), g), l),
            u = "goal" === c;
          g = cg(a, "g", b);
          var q = p($g(a, b, f, c));
          h = q.next().value;
          q = q.next().value;
          var v = {},
            y = {};
          g = g({ F: { G: l }, C: Id(((v.ar = 1), v)), B: ((y["page-url"] = h), (y["page-ref"] = q), y) }, b).then(
            function () {
              u && n();
              var D = {},
                C = {};
              Dd(
                a,
                ((C.counterKey = P(b)),
                (C.name = "event"),
                (C.data = ((D.schema = c), (D.name = f), (D.params = l), D)),
                C)
              );
              d && d();
            }
          );
          return Lg(a, "g.s", g, m, k);
        }),
        e
      );
    });
  function ch(a) {
    var b = null;
    try {
      b = a.target || a.srcElement;
    } catch (c) {}
    if (b) {
      3 === b.nodeType && (b = b.parentNode);
      for (
        a = b && b.nodeName && ("" + b.nodeName).toLowerCase();
        H(b, "parentNode.nodeName") && (("a" !== a && "area" !== a) || (!b.href && !b.getAttribute("xlink:href")));

      )
        a = (b = b.parentNode) && b.nodeName && ("" + b.nodeName).toLowerCase();
      return b.href ? b : null;
    }
    return null;
  }
  function dh(a, b) {
    var c = {};
    c = ((c.string = !0), (c.object = !0), (c["boolean"] = b), c)[typeof b] || !1;
    var d = {};
    a(((d.trackLinks = c), d));
  }
  function eh(a, b, c) {
    var d = Id();
    void 0 !== c.Ba && d.A("ite", hb(c.Ba));
    c.za && d.A("dl", 1);
    c.ha && d.A("ln", 1);
    var e = c.Xb || {},
      f = {};
    d = {
      C: d,
      F: { title: e.title || c.title, Ea: !!c.Ea, G: e.params },
      B: ((f["page-url"] = c.url), (f["page-ref"] = b.Qa || V(a).href), f),
    };
    f = "Link";
    c.za ? (f = c.ha ? "Ext link - File" : "File") : c.ha && (f = "Ext link");
    var g = {},
      h = {};
    Dd(
      a,
      ((h.counterKey = P(b)),
      (h.name = "event"),
      (h.data = ((g.schema = "Link click"), (g.name = (c.ha ? "external" : "internal") + " url: " + c.url), g)),
      h)
    );
    g = {};
    b = c.sender(d, b).then(lg(a, b, "lcl", ((g.prefix = f), (g.id = b.id), (g.url = c.url), g), c.Xb));
    Lg(a, "cl.p.s", b, e.callback || t, e.ctx);
  }
  function fh(a, b) {
    if (a.Vc()) {
      var c = ch(b);
      if (c && !Ce("ym-disable-tracklink", c)) {
        var d = a.l,
          e = a.oc,
          f = a.qa,
          g = a.sender,
          h = a.qc,
          k = f.Qa,
          l = c.href;
        var m = md(c.innerHTML && c.innerHTML.replace(/<\/?[^>]+>/gi, ""));
        m || (m = (m = c.querySelector("img")) ? md(m.getAttribute("title") || m.getAttribute("alt")) : "");
        m = l === m ? "" : m;
        var n = H(b, "isTrusted");
        if (Ce("ym-external-link", c)) eh(d, f, { url: l, ha: !0, title: m, Ba: n, sender: g });
        else {
          k = k ? Hf(d, k).hostname : V(d).hostname;
          h = RegExp("\\.(" + S("|", K(Ma, h)) + ")$", "i");
          var u = c.protocol + "//" + c.hostname + c.pathname;
          h = je.test(u) || je.test(l) || h.test(l) || h.test(u);
          c = c.hostname;
          id(k) === id(c)
            ? h
              ? eh(d, f, { url: l, za: !0, Ba: n, title: m, sender: g })
              : m && e.A("il", md(m).slice(0, 100))
            : (l && ie.test(l)) || eh(d, f, { url: l, Ea: !0, ha: !0, za: h, Ba: n, title: m, sender: g });
        }
      }
    }
  }
  var gh = r(function (a, b) {
      Ga(b) ? a.push(b) : K(G(w, Ua("push", a)), b);
    }),
    hh = cd(
      "retryReqs",
      function (a) {
        var b = ve(a),
          c = b.m("retryReqs", {}),
          d = U(a)(T);
        K(function (e) {
          var f = p(e);
          e = f.next().value;
          f = f.next().value;
          (!f || !f.time || f.time + 864e5 < d) && delete c[e];
        }, Pb(c));
        b.A("retryReqs", c);
        return c;
      },
      !0
    );
  function ih(a) {
    var b = hh(a);
    ve(a).A("retryReqs", b);
  }
  function jh(a, b) {
    var c = hh(a);
    b.C && !Na(c) && b.F && (delete c[b.F.ta], ih(a));
  }
  function kh(a, b) {
    return {
      I: function (c, d) {
        var e = c.C,
          f = c.Y,
          g = c.B,
          h = void 0 === c.H ? {} : c.H;
        if (e && g) {
          var k = U(a);
          e.eb("rqnl", 1);
          for (var l = hh(a), m = 1; l[m]; ) m += 1;
          c.F || (c.F = {});
          c.F.ta = m;
          var n = {};
          l[m] =
            ((n.protocol = O.fa),
            (n.host = lc),
            (n.resource = c.aa.U),
            (n.postParams = h.K),
            (n.time = k(T)),
            (n.counterType = b.L),
            (n.params = g),
            (n.browserInfo = e.l()),
            (n.counterId = b.id),
            (n.ghid = Ke(a)),
            n);
          f && (l[m].telemetry = f.l());
          ih(a);
        }
        d();
      },
      da: function (c, d) {
        jh(a, c);
        d();
      },
    };
  }
  var lh = G(Ka, oa(0)),
    mh = na(lh),
    nh = [mh("watch"), mh("clmap")],
    oh = X("g.r", function (a) {
      var b = U(a),
        c = hh(a),
        d = b(T),
        e = Ke(a);
      return F(
        function (f, g) {
          var h = p(g),
            k = h.next().value;
          (h = h.next().value) &&
            Hb(qa(h.resource), nh) &&
            !h.d &&
            h.ghid &&
            h.ghid !== e &&
            h.time &&
            500 < d - h.time &&
            h.time + 864e5 > d &&
            2 >= h.browserInfo.rqnl &&
            ((h.d = 1),
            (k = {
              protocol: h.protocol,
              host: h.host,
              U: h.resource,
              Fc: h.postParams,
              G: h.params,
              ic: h.browserInfo,
              fd: h.ghid,
              time: h.time,
              ta: Kb(k),
              nc: h.counterId,
              L: h.counterType,
            }),
            h.telemetry && (k.Y = h.telemetry),
            f.push(k));
          return f;
        },
        [],
        Pb(c)
      );
    });
  function ph(a, b, c) {
    function d() {
      q || ((u = !0), (v = !1), (q = !0), f());
    }
    function e() {
      m = !0;
      k(!1);
      b();
    }
    function f() {
      Pe(a, l);
      if (m) k(!1);
      else {
        var L = Math.max(0, c - (v ? y : y + n(T) - D));
        L ? (l = Qe(a, e, L, "u.t.d.c")) : e();
      }
    }
    function g() {
      v = u = q = !0;
      y += n(T) - D;
      D = n(T);
      f();
    }
    function h() {
      u || q || (y = 0);
      D = n(T);
      u = q = !0;
      v = !1;
      f();
    }
    function k(L) {
      L = L ? C.D : C.va;
      L(a, ["blur"], g);
      L(a, ["focus"], h);
      L(a.document, ["click", "mousemove", "keydown", "scroll"], d);
    }
    var l = 0,
      m = !1;
    if (ac(a)) return (l = Qe(a, b, c, "u.t.d")), B([a, l], Pe);
    var n = U(a),
      u = !1,
      q = !1,
      v = !0,
      y = 0,
      D = n(T),
      C = Fc(a);
    k(!0);
    f();
    return function () {
      Pe(a, l);
      k(!1);
    };
  }
  var qh = X("nb.p", function (a, b) {
    function c(y) {
      h() || ((y = "number" === typeof y ? y : 15e3), (v = ph(a, d(!1), y)), l());
    }
    function d(y) {
      return function (D) {
        var C = {};
        D = void 0 === D ? ((C.ctx = {}), (C.callback = t), C) : D;
        if (y || (!u && !g.xc)) {
          u = !0;
          l();
          v && v();
          var L = m(T);
          C = (Kb(g.m("lastHit")) || 0) < L - 18e5;
          var Ob = 0.1 > Math.random();
          g.A("lastHit", L);
          L = {};
          L = Id(((L.nb = 1), (L.cl = q), (L.ar = 1), L));
          var Hd = Mg(b),
            Nf = {};
          L = { B: ((Nf["page-url"] = Hd.url || V(a).href), Nf), C: L, F: { force: y } };
          Hd = jg(a, P(b)).warn;
          !D.callback && D.ctx && Hd("nbnc");
          (C = y || C || Ob) ||
            ((C = a.location.href), (Ob = a.document.referrer), (C = !(C && Ob ? If(C) === If(Ob) : !C && !Ob)));
          if (C) return (C = e(L, b)), Lg(a, "l.o.l", C, D.callback, D.ctx);
        }
        return null;
      };
    }
    var e = cg(a, "n", b),
      f = P(b),
      g = we(a, b.id),
      h = E(E(f, Dg(a)), G(Nd, I("accurateTrackBounce"))),
      k = {},
      l = E(((k.accurateTrackBounce = !0), k), Cg(a, f)),
      m = U(a),
      n = m(T),
      u = !1,
      q = 0,
      v;
    hg(b, function (y) {
      q = y.rc - n;
    });
    b.lb && c(b.lb);
    f = {};
    return (f.notBounce = d(!0)), (f.u = v), f;
  });
  function rh(a) {
    return !(!ta("querySelectorAll", H(a, "Element.prototype.querySelectorAll")) || !a.document.querySelectorAll);
  }
  function sh(a, b) {
    if (!b || !b.querySelectorAll) return [];
    var c = b.querySelectorAll(a);
    return c ? sb(c) : [];
  }
  function th(a, b) {
    if (b.querySelector) return b.querySelector(a);
    var c = sh(a, b);
    return c && c.length ? c[0] : null;
  }
  function uh(a, b, c) {
    if (!(b && b.Element && b.Element.prototype && b.document && c)) return null;
    if (b.Element.prototype.closest && ta("closest", b.Element.prototype.closest) && c.closest) return c.closest(a);
    var d = De(b);
    if (d) {
      for (b = c; b && 1 === b.nodeType && !d.call(b, a); ) b = b.parentElement || b.parentNode;
      return b && 1 === b.nodeType ? b : null;
    }
    if (rh(b)) {
      for (a = sb((b.document || b.ownerDocument).querySelectorAll(a)); c && 1 === c.nodeType && -1 === xa(b)(c, a); )
        c = c.parentElement || c.parentNode;
      return c && 1 === c.nodeType ? c : null;
    }
    return null;
  }
  function vh(a) {
    a = "" + a;
    for (var b = 2166136261, c = a.length, d = 0; d < c; d += 1)
      (b ^= a.charCodeAt(d)), (b += (b << 1) + (b << 4) + (b << 7) + (b << 8) + (b << 24));
    return b >>> 0;
  }
  function wh(a, b, c, d) {
    return function () {
      if (rg(a, b)) {
        var e = Ea(arguments);
        return d.apply(null, da(e));
      }
    };
  }
  S(
    ",",
    K(
      function (a) {
        return 'input[type="' + a + '"]';
      },
      ["button", "submit", "reset", "file"]
    )
  );
  var xh = {},
    yh =
      ((xh.transaction_id = "id"),
      (xh.item_brand = "brand"),
      (xh.index = "position"),
      (xh.item_variant = "variant"),
      (xh.value = "revenue"),
      (xh.item_category = "category"),
      (xh.item_list_name = "list"),
      xh),
    zh = {},
    Ah = ((zh.item_id = "id"), (zh.item_name = "name"), (zh.promotion_name = "coupon"), zh),
    Bh = {},
    Ch = ((Bh.promotion_name = "name"), Bh),
    Dh = {},
    Eh =
      ((Dh.promotion_name = "name"),
      (Dh.promotion_id = "id"),
      (Dh.item_id = "product_id"),
      (Dh.item_name = "product_name"),
      Dh),
    Fh = "currencyCode add delete remove purchase checkout detail impressions click promoView promoClick".split(" "),
    Gh = {},
    Hh =
      ((Gh.view_item = { event: "detail", V: Ah, $: "products" }),
      (Gh.add_to_cart = { event: "add", V: Ah, $: "products" }),
      (Gh.remove_from_cart = { event: "remove", V: Ah, $: "products" }),
      (Gh.begin_checkout = { event: "checkout", V: Ah, $: "products" }),
      (Gh.purchase = { event: "purchase", V: Ah, $: "products" }),
      (Gh.view_item_list = { event: "impressions", V: Ah }),
      (Gh.select_item = { event: "click", $: "products", V: Ah }),
      (Gh.view_promotion = { event: "promoView", $: "promotions", V: Eh }),
      (Gh.select_promotion = { event: "promoClick", $: "promotions", V: Eh }),
      Gh);
  function Ih(a, b) {
    var c = {};
    K(function (d) {
      var e = a[d] || yh[d] || d;
      -1 !== Ja(d, "item_category")
        ? ((e = yh.item_category), (c[e] = c[e] ? c[e] + ("/" + b[d]) : b[d]))
        : (c[e] = b[d]);
    }, M(b));
    return c;
  }
  function Jh(a, b) {
    var c = Ga(a) ? Hh[a] : a;
    if (c) {
      var d = c.event,
        e = c.$,
        f = void 0 === c.uc ? "items" : c.uc,
        g = b.purchase || b,
        h = g[f];
      if (h) {
        c = K(E(c.V, Ih), h);
        h = {};
        var k = {},
          l = ((k[d] = e ? ((h[e] = c), h) : c), k);
        c = M(g);
        e &&
          1 < c.length &&
          (l[d].actionField = F(
            function (m, n) {
              if (n === f) return m;
              if ("currency" === n) return (l.currencyCode = g.currency), m;
              m[Ch[n] || yh[n] || n] = g[n];
              return m;
            },
            {},
            c
          ));
        return l;
      }
    }
  }
  var Kh = X("dl.w", function (a, b, c) {
    function d() {
      var g = H(a, b);
      (e = rb(g) && Vg(a, g, c)) || (f = Qe(a, d, 1e3, "ec.dl"));
    }
    var e,
      f = 0;
    d();
    return function () {
      return Pe(a, f);
    };
  });
  function Lh(a) {
    var b = H(a, "ecommerce");
    if (Pa(b))
      return (
        (a = lb(ob(Fh), M(b))),
        (a = F(
          function (c, d) {
            c[d] = b[d];
            return c;
          },
          {},
          a
        )),
        0 === M(a).length ? void 0 : a
      );
  }
  function Mh(a, b, c, d) {
    if (c) {
      var e = H(d, "ecommerce") || {};
      var f = H(d, "event") || "";
      e = Pa(e) && Ga(f) ? Jh(f, e) : void 0;
      if (!e)
        a: {
          e = d;
          if ((f = !rb(d)))
            (f = cb(d)), (f = a.isFinite(f) && !a.isNaN(f) && "[object Number]" === Object.prototype.toString.call(f));
          f && (e = Ea(e));
          if (rb(e)) {
            var g = p(e);
            e = g.next().value;
            f = g.next().value;
            g = g.next().value;
            if (Ga(f) && Pa(g) && "event" === e) {
              e = Jh(f, g);
              break a;
            }
          }
          e = void 0;
        }
      if ((d = e || Lh(d)))
        (e = {}),
          Dd(a, ((e.counterKey = b), (e.name = "ecommerce"), (e.data = d), e)),
          (a = {}),
          (b = {}),
          c(((b.__ym = ((a.ecommerce = [d]), a)), b));
    }
  }
  function Nh(a, b, c) {
    var d;
    a = [
      Kh(a, b, function (e) {
        d = e;
        e.ab.D(c);
      }),
      function () {
        d && d.unsubscribe();
      },
    ];
    return B([Od, a], K);
  }
  var Oh = X("p.e", function (a, b) {
    var c = rg(a, b);
    if (c) {
      var d = Q(a);
      c = c.params;
      var e = W(a, "h.ee", B([a, P(b), c], Mh));
      return b.ob
        ? (d.A("ecs", 0), Nh(a, b.ob, e))
        : hg(b, function (f) {
            if ((f = H(f, "settings.ecommerce")) && Ga(f)) return d.A("ecs", 1), Nh(a, f, e);
          });
    }
  });
  function Ph(a, b, c, d, e) {
    function f(k) {
      return z(d) ? (d(k) ? a.NodeFilter.FILTER_ACCEPT : a.NodeFilter.FILTER_REJECT) : a.NodeFilter.FILTER_ACCEPT;
    }
    e = void 0 === e ? -1 : e;
    var g = void 0 === g ? !1 : g;
    var h = f(b);
    if (z(c) && (g || h === a.NodeFilter.FILTER_ACCEPT) && (h && c(b), !xe(b)))
      for (
        b = a.document.createTreeWalker(b, e, d ? { acceptNode: f } : null, !1);
        b.nextNode() && !1 !== c(b.currentNode);

      );
  }
  var Qh = x(function (a) {
      return S("[^\\d<>]*", a.split(""));
    }),
    Rh = x(function (a) {
      return new RegExp(Qh(a), "g");
    });
  function Sh(a) {
    return new RegExp("(?:" + S("|", K(Qh, M(a))) + ")");
  }
  function Th(a) {
    var b = { 7: "8", 8: "7" };
    return 11 === a.length && b[a[0]] ? "" + b[a[0]] + a.slice(1) : a;
  }
  function Uh(a, b) {
    for (var c = [], d = a.split(""), e = b.split(""), f = 0, g = 0; g < a.length && !(f >= e.length); g += 1) {
      var h = d[g];
      "0" <= h && "9" >= h ? (c.push(e[f]), (f += 1)) : c.push(d[g]);
    }
    return S("", c) + b.slice(f + 1);
  }
  function Vh() {
    return Ya(function (a, b) {
      var c = p(K(nd, b)),
        d = c.next().value;
      c = c.next().value;
      a[d] = { ca: c, La: b };
      var e = Th(d);
      e !== d && (a[e] = { ca: Th(c), La: b });
      return a;
    }, {});
  }
  function Wh(a, b, c) {
    if (!c) return [];
    var d = [],
      e = Sh(b),
      f = ["script", "style"];
    Ph(
      a,
      c,
      function (g) {
        var h = H(g, "parentNode.nodeName") || "";
        g === c ||
          J(h.toLowerCase(), f) ||
          ((h = mb(e.exec(g.textContent || "") || [])),
          K(function (k) {
            var l = nd(k);
            A(b[l]) || d.push({ Fb: "text", sa: g, Ia: l, ca: Uh(k, b[l].ca), Rc: g.textContent || "" });
          }, h));
      },
      function (g) {
        return e.test(g.textContent || "") ? 1 : 0;
      },
      a.NodeFilter.SHOW_TEXT
    );
    return d;
  }
  function Xh(a, b) {
    var c = a.document.body;
    if (!c) return [];
    var d = Sh(b);
    return F(
      function (e, f) {
        var g = H(f, "href");
        try {
          var h = decodeURI(g || "");
        } catch (n) {
          h = "";
        }
        var k = h;
        if ("tel:" === k.slice(0, 4)) {
          var l = p(d.exec(k) || []).next().value;
          h = l ? nd(l) : "";
          var m = b[h];
          A(m) ||
            (!h && "*" !== m.La[0]) ||
            (e.push({ Fb: "href", sa: f, Ia: h, ca: Uh(l, b[h].ca), Rc: g }),
            (g = nd(k.slice(4))),
            (g = Vh()([h ? m.La : [g, ""]])),
            Md(e, Wh(a, g, f)));
        }
        return e;
      },
      [],
      sb(c.querySelectorAll("a"))
    );
  }
  function Yh(a, b) {
    Ve(a)(
      Re(t, function () {
        var c = a.document.body,
          d = {};
        d = ((d.attributes = !0), (d.childList = !0), (d.subtree = !0), d);
        ta("MutationObserver", a.MutationObserver) && new MutationObserver(b.N).observe(c, d);
      })
    );
  }
  function Zh(a, b) {
    function c() {
      e = 0;
      f && ((f = !1), (e = Qe(a, c, 1e3)), d.N(g));
    }
    var d = We(a),
      e,
      f = !1,
      g;
    b.D(function (h) {
      f = !0;
      g = h;
      e || c();
      return t;
    });
    return d;
  }
  var $h = x(function (a) {
      return Rb(a) || !rh(a);
    }),
    ai = x(function (a) {
      a = V(a);
      a = $c(a.search.substring(1));
      return { id: Kb(a["_ym_status-check"] || ""), lang: a._ym_lang || "ru" };
    }),
    bi = /[\*\.\?\(\)]/g,
    ci = x(function (a, b, c) {
      try {
        var d = c.replace("\\s", " ").replace(bi, "");
        b = {};
        jg(a, "").warn("nnw", ((b.name = d), b));
      } catch (e) {}
    }, Aa),
    di = X("r.nn", function (a) {
      zd(a) &&
        Vg(a, ra, function (b) {
          b.ab.D(function (c) {
            var d = p(c);
            c = d.next().value;
            d = d.next().value;
            ci(a, d, c);
            ra.splice(100);
          });
        });
    });
  function ei(a, b) {
    return {
      I: function (c, d) {
        tf(c)
          ? d()
          : hg(b, function (e) {
              if ((e = H(e, "settings.hittoken"))) {
                var f = {};
                e = ((f.hittoken = e), f);
                c.B = N(c.B || {}, e);
              }
              d();
            });
      },
    };
  }
  var fi = x(Ad, P),
    gi = X("fpi", function (a) {
      var b = Gc(a);
      if (b && !a.document.hidden) {
        var c = Q(a).O;
        c("fpe", 1);
        var d = Fc(a).D(a, ["visibilitychange", "webkitvisibilitychange"], function () {
          a.document.hidden && (c("fht", b.now()), d());
        });
      }
    }),
    hi = "FB_IAB FBAV OKApp GSA/ yandex yango uber EatsKit YKeyboard iOSAppUslugi YangoEats PassportSDK".split(" "),
    ii = x(function (a) {
      var b = wb(a);
      a = b.Wb;
      if (!b.vb) return !1;
      b = Ua("indexOf", a);
      b = Hb(G(b, oa(-1), Ba), hi);
      var c = /CFNetwork\/[0-9][0-9.]*.*Darwin\/[0-9][0-9.]*/.test(a),
        d = /YaBrowser\/[\d.]+/.test(a),
        e = /Mobile/.test(a);
      return b || c || (d && e) || (!/Safari/.test(a) && e);
    }),
    ji = x(function (a) {
      var b = xb(a);
      return b ? La(b, "YangoEats") || Xb(a) : !1;
    }),
    ki = [],
    li = !1,
    mi = !1;
  function ni(a) {
    if (ki.length) {
      var b = ki.shift();
      mi ? b() : Qe(a, b, 100);
    } else li = !1;
  }
  function oi(a, b, c) {
    c = void 0 === c ? 1 : c;
    var d = void 0 === d ? Uc : d;
    mi = Infinity === c;
    return qa(function (e, f) {
      function g() {
        try {
          var k = b(d(a, c));
          h = h.concat(k);
        } catch (l) {
          return e(l);
        }
        b(Rc);
        if (b(Oc)) return f(h), ni(a);
        mi ? (b(d(a, 1e4)), f(h), ni(a)) : Qe(a, g, 100);
      }
      var h = [];
      li ? ki.push(g) : ((li = !0), g());
    });
  }
  function pi(a) {
    var b = Pb(qc);
    return Array.prototype.sort.call(b, a);
  }
  var qi = r(function (a, b) {
    return Q(b).m(a, null);
  });
  function ri(a, b) {
    var c = H(b, "__ym.turbo_uid");
    c && Q(a).O("tpuid", c);
  }
  var si = x(function (a) {
      return z(H(a, "yandex.getSiteUid")) ? a.yandex.getSiteUid() : null;
    }),
    ti = [
      ["domainLookupEnd", "domainLookupStart"],
      ["connectEnd", "connectStart"],
      ["responseStart", "requestStart"],
      ["responseEnd", "responseStart"],
      ["fetchStart", "navigationStart"],
      ["redirectEnd", "redirectStart"],
      [
        function (a, b) {
          return H(b, "redirectCount") || H(a, "navigation.redirectCount");
        },
      ],
      ["domInteractive", "domLoading"],
      ["domContentLoadedEventEnd", "domContentLoadedEventStart"],
      ["domComplete", "navigationStart"],
      ["loadEventStart", "navigationStart"],
      ["loadEventEnd", "loadEventStart"],
      ["domContentLoadedEventStart", "navigationStart"],
    ],
    ui = [
      ["domainLookupEnd", "domainLookupStart"],
      ["connectEnd", "connectStart"],
      ["responseStart", "requestStart"],
      ["responseEnd", "responseStart"],
      ["fetchStart"],
      ["redirectEnd", "redirectStart"],
      ["redirectCount"],
      ["domInteractive", "responseEnd"],
      ["domContentLoadedEventEnd", "domContentLoadedEventStart"],
      ["domComplete"],
      ["loadEventStart"],
      ["loadEventEnd", "loadEventStart"],
      ["domContentLoadedEventStart"],
    ],
    vi = {},
    wi =
      ((vi.responseEnd = 1),
      (vi.domInteractive = 1),
      (vi.domContentLoadedEventStart = 1),
      (vi.domContentLoadedEventEnd = 1),
      (vi.domComplete = 1),
      (vi.loadEventStart = 1),
      (vi.loadEventEnd = 1),
      (vi.unloadEventStart = 1),
      (vi.unloadEventEnd = 1),
      (vi.secureConnectionStart = 1),
      vi),
    xi = x(Bd);
  function yi(a, b, c) {
    return K(function (d) {
      var e = p(d),
        f = e.next().value;
      e = e.next().value;
      if (z(f)) return f(a, b) || null;
      if (1 === d.length) return b[f] ? Math.round(b[f]) : null;
      var g;
      !(g = b[f] && b[e]) &&
        (g = 0 === b[f] && 0 === b[e]) &&
        ((g = p(d)), (d = g.next().value), (g = g.next().value), (g = !(wi[d] || wi[g])));
      if (!g) return null;
      f = Math.round(b[f]) - Math.round(b[e]);
      return 0 > f || 36e5 < f ? null : f;
    }, c);
  }
  function zi(a, b) {
    var c = a.length
      ? K(function (d, e) {
          var f = b[e];
          return f === d ? null : f;
        }, a)
      : b;
    a.length = 0;
    K(G(w, Ua("push", a)), b);
    return lb(oa(null), c).length === a.length ? null : c;
  }
  var Ai = [
      [
        ["'(-$&$&$'", 30102, 0],
        ["'(-$&$&$'", 29009, 0],
      ],
      [
        ["oWdZ[nc[jh_YW$Yec", 30103, 1],
        ["oWdZ[nc[jh_YW$Yec", 29010, 1],
      ],
    ],
    Bi = [[["oWdZ[nc[jh_YW$Yec", 30103, 1]], [["oWdZ[nc[jh_YW$Yec", 29010, 1]]],
    Ci = { B: { t: 'UV|L7,!"T[rwe&D_>ZIb\\aW#98Y.PC6k' } },
    Di = { Rb: 60, error: 15 },
    Ei = { Rb: 5, error: 1 },
    Fi = { id: 42822899, L: "0" },
    Gi = {},
    Hi =
      ((Gi.am = "com.am"),
      (Gi.tr = "com.tr"),
      (Gi.ge = "com.ge"),
      (Gi.il = "co.il"),
      (Gi["\u0440\u0444"] = "ru"),
      (Gi["xn--p1ai"] = "ru"),
      (Gi["\u0431\u0435\u043b"] = "by"),
      (Gi["xn--90ais"] = "by"),
      Gi),
    Ii = {
      "mc.edadeal.ru": /^([^/]+\.)?edadeal\.ru$/,
      "mc.yandexsport.ru": /^([^/]+\.)?yandexsport\.ru$/,
      "mc.kinopoisk.ru": /^([^/]+\.)?kinopoisk\.ru$/,
    },
    Ji = {},
    Ki =
      ((Ji.ka = "ge"),
      (Ji.ro = "md"),
      (Ji.tg = "tj"),
      (Ji.tk = "tm"),
      (Ji.et = "ee"),
      (Ji.hy = "com.am"),
      (Ji.he = "co.li"),
      (Ji.ky = "kg"),
      (Ji.be = "by"),
      (Ji.tr = "com.tr"),
      (Ji.kk = "kz"),
      Ji);
  function Li(a, b) {
    var c = pi(function (d, e) {
      return d[1].W > e[1].W ? 1 : -1;
    });
    c = K(function (d) {
      var e = p(d);
      d = e.next().value;
      var f = e.next().value.$a;
      e = bb(b, d) && !Oa(b[d]);
      d = b[d] !== (f || w)(void 0);
      return hb(e && d);
    }, c);
    return Lb(S("", c));
  }
  var Mi = /^https?:\/\//,
    Ni = {
      1882689622: 1,
      2318205080: 1,
      3115871109: 1,
      3604875100: 1,
      339366994: 1,
      849340123: 1,
      3735661796: 1,
      3082499531: 1,
      2343947156: 1,
      655012937: 1,
      3724710748: 1,
      3364370932: 1,
      1996539654: 1,
      2065498185: 1,
      823651274: 1,
      12282461: 1,
      1555719328: 1,
      1417229093: 1,
      138396985: 1,
      3015043526: 1,
    },
    Oi = x(function () {
      return F(
        function (a, b) {
          a[vh(b + "/tag_turbo.js")] = 1;
          return a;
        },
        {},
        ["mc.yandex.ru/metrika", "mc.yandex.com/metrika", "cdn.jsdelivr.net/npm/yandex-metrica-watch"]
      );
    }),
    Pi = "ar:1:pv:1:v:" + O.ea + ":vf:" + la.version,
    Qi = O.fa + "//" + lc + "/watch/" + O.$b;
  function Ri(a, b) {
    try {
      var c = p(b),
        d = p(c.next().value);
      d.next();
      var e = d.next().value;
    } catch (f) {
      return function () {
        return R.resolve();
      };
    }
    return function (f) {
      var g = {};
      g = ((g["browser-info"] = Pi), (g["page-url"] = a.location && "" + a.location.href), g);
      return e && (f = oe(a, f)) ? e(Qi, { Ha: g, Z: [], K: "site-info=" + Yc(f) })["catch"](t) : R.resolve();
    };
  }
  var Si = {},
    Ti = X("exps.int", function (a, b) {
      var c = {};
      return (
        (c.experiments = function (d, e, f) {
          if (Ga(d) && !(0 >= d.length)) {
            var g = cg(a, "e", b),
              h = Mg(b).url,
              k = {},
              l = {};
            d = g({ C: Id(((k.ex = 1), (k.ar = 1), k)), B: ((l["page-url"] = h || V(a).href), (l.exp = d), l) }, b);
            return Lg(a, "exps.s", d, e || t, f);
          }
        }),
        c
      );
    }),
    Ui = X("p.tpg", function (a, b) {
      ri(a, b.G);
    }),
    Vi = [],
    Wi = X("p.fh", function (a, b) {
      b = void 0 === b ? !0 : b;
      var c = ve(a),
        d = U(a),
        e = c.m("wasSynced"),
        f = { id: 3, L: "0" };
      if (b && e && e.time + 864e5 > d(T)) return R.resolve(e);
      e = {};
      var g = {};
      return cg(
        a,
        "f",
        f
      )({ C: Id(((e.pv = 1), e)), B: ((g["page-url"] = V(a).href), (g["page-ref"] = a.document.referrer), g) }, f)
        .then(function (h) {
          var k = {};
          h = ((k.time = d(T)), (k.params = H(h, "settings")), (k.bkParams = H(h, "userData")), k);
          c.A("wasSynced", h);
          return h;
        })
        ["catch"](W(a, "f.h"));
    }),
    Xi = G(I("settings.pcs"), oa("1"));
  function Yi(a, b, c) {
    var d = b || {},
      e = cg(a, "u", c),
      f = ve(a);
    return {
      m: function (g, h) {
        return A(d[g]) ? f.m(g, h) : d[g];
      },
      A: function (g, h) {
        var k = "" + h;
        d[g] = k;
        f.A(g, k);
        var l = {};
        return e({ B: ((l.key = g), (l.value = k), l) }, [O.fa + "//" + lc + "/user_storage_set"], {})["catch"](
          W(a, "u.d.s.s")
        );
      },
    };
  }
  var Zi = x(function (a) {
      a = V(a).hostname.split(".");
      return a[a.length - 1];
    }),
    $i = x(function (a) {
      return -1 !== V(a).hostname.search(/(?:^|\.)(?:ya|yandex|beru|kinopoisk|edadeal)\.(?:\w+|com?\.\w+)$/);
    }),
    aj = RegExp(
      "^(.*\\.)?((yandex(-team)?)\\.(com?\\.)?[a-z]+|(auto|kinopoisk|beru|bringly)\\.ru|ya\\.(ru|cc)|yadi\\.sk|yastatic\\.net|.*\\.yandex|turbopages\\.org|turbo\\.site|diplodoc\\.(com|tech)|datalens\\.tech|white-label\\.yango-tech\\.com|al-sadhan\\.com|spar\\.sa)$"
    ),
    bj = x(function (a) {
      a = V(a).hostname;
      var b = !1;
      a && (b = -1 !== a.search(aj));
      return b;
    }),
    cj = RegExp(
      "^(.*\\.)?((yandex(-team)?)\\.(com?\\.)?[a-z]+|(auto|kinopoisk|beru|bringly)\\.ru|ya\\.(ru|cc)|yadi\\.sk|.*\\.yandex|turbopages\\.org|turbo\\.site)$"
    ),
    dj = x(function (a) {
      a = V(a).hostname;
      var b = !1;
      a && (b = -1 !== a.search(cj));
      return b;
    }),
    ej = {},
    fj = ((ej.s = "p"), (ej["8"] = "i"), ej),
    gj = cd("csp", function (a, b) {
      return cg(a, "s", b)({}, ["https://ymetrica1.com/watch/3/1"]);
    });
  function hj(a, b, c) {
    var d = c.Gc,
      e = c.data,
      f = cg(a, d, c.qa);
    a = N({}, Ci);
    e && N(a.B, e);
    return Se(
      K(function (g) {
        return Te(
          f(
            N({ H: { $c: !1, Ic: !0 } }, Ci),
            K(function (h) {
              var k = p(h),
                l = k.next().value;
              h = k.next().value;
              k = k.next().value;
              l = S(
                "",
                K(function (m) {
                  return String.fromCharCode(m.charCodeAt(0) + 10);
                }, l.split(""))
              );
              return "http" + (k ? "s" : "") + "://" + l + ":" + h + "/" + fj[d];
            }, g)
          ).then(function (h) {
            return N({}, h, { host: g[h.Vb] });
          })
        );
      }, b)
    );
  }
  function ij(a, b, c, d, e, f) {
    var g = f.Bb,
      h = f.qa,
      k = f.ja;
    return new R(function (l, m) {
      var n = c.m(g, 0);
      n = parseInt("" + n, 10);
      return b(Lc) - n <= e.Rb
        ? (k(3), m())
        : dj(a)
        ? l(void 0)
        : Xi(d)
        ? (k(4), m())
        : l(gj(a, h)["catch"](G(pa(E(5, k)), xc)));
    });
  }
  function jj(a, b, c, d, e) {
    var f = void 0 === e.Sb ? t : e.Sb,
      g = e.Bb,
      h = void 0 === e.ja ? t : e.ja,
      k = d(T);
    return hj(
      a,
      b,
      e
    )(
      Re(
        function (l) {
          h(6);
          K(function (m) {
            m && ee(a, g + ".s", m);
          }, l);
          l = d(Lc);
          c.A(g, l).then(E(7, h));
        },
        function (l) {
          h(8);
          c.A(g, d(Lc)).then(E(9, h));
          f(l, d, k);
        }
      )
    );
  }
  function kj(a) {
    var b = Yb(a);
    a = G(Tb, ob(["iPhone", "iPad"]))(a);
    return b ? Ai : a ? Bi : [];
  }
  function lj(a, b, c) {
    var d = c.qa,
      e = void 0 === c.ja ? t : c.ja,
      f = U(a),
      g = Yi(a, b.userData, d),
      h = kj(a),
      k = G(jd, B([Ei, Di], fb))(a),
      l = H(b, "settings.sbp");
    c.ja = e;
    if (l) {
      var m = {};
      c.data = N({}, l, ((m.c = d.id), m));
    }
    return h.length
      ? ij(a, f, g, b, k, c).then(function () {
          return jj(a, h, g, f, c);
        }, t)
      : (e(2), R.resolve());
  }
  function mj(a, b) {
    this.l = a;
    this.type = b;
  }
  mj.isEnabled = function (a) {
    return !!a.JSON;
  };
  mj.prototype.Ka = function (a) {
    return Ue(oe(this.l, a));
  };
  function nj(a, b) {
    return {
      I: function (c, d) {
        var e = c.B;
        e.wmode = "0";
        e["wv-hit"] = e["wv-hit"] || "" + Ke(a);
        e["page-url"] = e["page-url"] || V(a).href;
        var f = {};
        e = {
          aa: { U: "webvisor/" + b.id },
          H: N(c.H || {}, { ia: ((f["Content-Type"] = "text/plain"), f), kb: "POST" }),
          B: e,
        };
        N(c, e);
        d();
      },
    };
  }
  var oj =
      "resize scroll mousemove mousedown click windowfocus keydown orientationchange change focus touchmove touchstart".split(
        " "
      ),
    pj = "id pageTitle stamp chars authors updateDate publicationDate pageUrlCanonical topics rubric".split(" ");
  function qj(a, b, c, d, e) {
    var f = this;
    this.Aa = !1;
    this.meta = {};
    this.scroll = { x: 0, y: 0 };
    this.involvedTime = this.Ab = 0;
    this.Xa = this.Db = "";
    this.J = [];
    this.cb = this.Sc = 0;
    this.ma = { h: 0, w: 0 };
    this.buffer = [];
    this.ac = pj;
    this.flush = function () {
      f.cb = Qe(f.l, f.flush, 2500);
      var g = f.Sa();
      if (f.buffer.length || g) {
        var h = vb(f.buffer);
        g && h.push(g);
        f.Db = f.Xa;
        f.Mc.Ka(h)(
          Re(W(f.l, "p.b.st"), function (k) {
            k && f.Lc(k);
          })
        );
      }
    };
    this.Lc = d;
    this.Mc = c;
    this.wa = Ta(this.wa, this);
    this.Sa = Ta(this.Sa, this);
    this.flush = Ta(this.flush, this);
    this.l = a;
    this.ga = e;
    this.Ja = b;
    this.Va = "pai" + b.id;
    rj(this);
    this.pb = Fc(this.l);
    this.time = U(this.l);
    sj(this);
    this.Ta = Q(this.l);
    this.jb = null;
  }
  aa = qj.prototype;
  aa.start = function () {
    this.cb = Qe(this.l, this.flush, 2500);
    if (!this.Aa) {
      this.pb.D(this.l, oj, this.wa);
      var a = this.Ta.m(this.Va, []),
        b = !a.length;
      a.push(Ta(this.zc, this));
      this.Ta.O(this.Va, a);
      b && this.Jb();
      this.jb = Fc(this.l).D(this.l, ["click"], Ta(this.Nc, this));
      this.wa({ type: "page", target: this.l });
    }
  };
  aa.stop = function () {
    this.jb && this.jb();
    this.pb.va(this.l, oj, this.wa);
    this.Aa = !0;
    this.flush();
    Pe(this.l, this.cb);
  };
  aa.Jb = function () {
    var a = this;
    W(this.l, "p.ic" + this.Ja.id, function () {
      if (!a.Aa) {
        var b = a.Ta.m(a.Va),
          c = tj(a.Ja);
        K(function (d) {
          var e = K(function (f) {
            return N({}, f);
          }, c);
          z(d) && d(e);
        }, b);
        a.Sc = Qe(a.l, Ta(a.Jb, a), 1e3, "p");
      }
    })();
  };
  aa.zc = function (a) {
    this.Aa || (uj(this, a), vj(this), wj(this));
  };
  aa.jc = function (a, b) {
    return (a.bb || 0) <= (b.bb || 0) ? b : a;
  };
  aa.Nc = function (a) {
    if (this.J.length) {
      a = ch(a);
      var b = V(this.l).hostname;
      a &&
        id(a.hostname) === id(b) &&
        ((a = F(this.jc, this.J[0], this.J).id),
        (b = Ke(this.l)),
        we(this.l, this.ga.split(":")[0]).A("pai", a + "-" + b));
    }
  };
  aa.wa = function (a) {
    var b = this;
    W(this.l, "p.ec." + this.Ja.id, function () {
      try {
        var c = a.type;
        var d = a.target;
      } catch (k) {
        return;
      }
      var e = "page" === c;
      if ("scroll" === c || e) {
        var f = [b.l, b.l.document, b.l.document.documentElement, Ee(b.l)];
        J(d, f) && rj(b);
      }
      ("resize" === c || e) && sj(b);
      c = b.time(T);
      var g = Math.min(c - b.Ab, 5e3);
      b.involvedTime += Math.round(g);
      b.Ab = c;
      if (b.meta && b.scroll && b.ma) {
        var h = b.ma.h * b.ma.w;
        b.J = K(function (k) {
          var l = N({}, k),
            m = b.meta[l.id],
            n = Ie(k.oa);
          if (!m || uh("html", b.l, l.element) !== b.l.document.documentElement || !n) return l;
          k = b.l.Math;
          m = k.max((b.scroll.y + b.ma.h - m.y) / m.height, 0);
          var u = n.height * n.width,
            q = b.ma,
            v = n.top,
            y = n.bottom,
            D = n.left,
            C = q.w;
          q = q.h;
          var L = b.l.Math;
          n = L.min(L.max(n.right, 0), C) - L.min(L.max(D, 0), C);
          n *= L.min(L.max(y, 0), q) - L.min(L.max(v, 0), q);
          l.bb = n / h;
          l.visibility = n / u;
          if (0.9 <= l.visibility || 0.1 <= l.bb) l.involvedTime += g;
          l.maxScrolled = k.round(1e4 * m) / 1e4;
          return l;
        }, b.J);
        c = {};
        d = {};
        Dd(
          b.l,
          ((d.name = "publishers"),
          (d.counterKey = b.ga),
          (d.data =
            ((c.involvedTime = b.involvedTime),
            (c.contentItems = K(function (k) {
              var l = {};
              return N(((l.contentElement = k.oa), l), k);
            }, b.J)),
            c)),
          d)
        );
      }
    })();
  };
  function uj(a, b) {
    var c = K(function (d) {
      return d.id;
    }, a.J);
    a.J = a.J.concat(
      lb(function (d) {
        return !J(d.id, c);
      }, b)
    );
  }
  function sj(a) {
    var b = p(Ge(a.l) || He(a.l)),
      c = b.next().value;
    b = b.next().value;
    a.ma = { w: c, h: b };
  }
  function vj(a) {
    W(a.l, "p.um." + a.Ja.id, function () {
      var b = [];
      rj(a);
      a.meta = F(
        function (c, d) {
          if (uh("html", a.l, d.element) !== a.l.document.documentElement) return b.push(d), delete c[d.id], c;
          var e = {};
          e =
            ((e.id = d.id),
            (e.involvedTime = Math.max(d.involvedTime, 0)),
            (e.maxScrolled = d.maxScrolled || 0),
            (e.chars = d.update ? d.update("chars") || 0 : 0),
            e);
          if (d.oa) {
            var f = Ie(d.oa);
            f &&
              ((e.x = Math.max(Math.round(f.left) + a.scroll.x, 0)),
              (e.y = Math.max(Math.round(f.top) + a.scroll.y, 0)),
              (e.width = Math.round(f.width)),
              (e.height = Math.round(f.height)));
          }
          c[d.id] = e;
          return c;
        },
        {},
        a.J
      );
      K(function (c) {
        c = tb(a.l)(c, a.J);
        a.J.splice(c, 1);
      }, b);
    })();
  }
  aa.Sa = function () {
    var a = K(E(this.meta, H), M(this.meta));
    if (a.length && ((this.Xa = oe(this.l, a)), this.Db !== this.Xa)) {
      var b = {},
        c = {};
      return (
        (c.type = "publishersHeader"),
        (c.data = ((b.articleMeta = a || []), (b.involvedTime = this.involvedTime), b)),
        c
      );
    }
    return null;
  };
  function wj(a) {
    if (a.J.length) {
      var b = K(
        function (c) {
          var d = F(
            function (f, g) {
              c[g] && (f[g] = c[g]);
              return f;
            },
            {},
            a.ac
          );
          c.Nb = !0;
          var e = {};
          return (e.type = "articleInfo"), (e.stamp = d.stamp), (e.data = d), e;
        },
        lb(function (c) {
          return !c.Nb;
        }, a.J)
      );
      b.length && ((a.buffer = a.buffer.concat(b)), kg(a.l, a.ga, ["pdf", b]));
    }
  }
  function rj(a) {
    a.scroll = {
      x: a.l.pageXOffset || H(a.l, "document.documentElement.scrollLeft") || 0,
      y: a.l.pageYOffset || H(a.l, "document.documentElement.scrollLeft") || 0,
    };
  }
  var xj = {},
    yj = ((xj[1] = 500), (xj[2] = 500), (xj[3] = 0), xj);
  function zj(a, b, c) {
    var d = b.getAttribute("itemtype");
    c = sh('[itemprop~="' + c + '"]', b);
    return d
      ? lb(function (e) {
          return e.parentNode && uh("[itemtype]", a, e.parentNode) === b;
        }, c)
      : c;
  }
  function Aj(a, b, c) {
    return (a = zj(a, b, c)) && a.length ? a[0] : null;
  }
  function Bj(a) {
    if (!a) return "";
    a = rb(a) ? a : [a];
    return a.length ? a[0].getAttribute("content") || ye(a[0]) : "";
  }
  function Cj(a) {
    return a ? (a.attributes && a.getAttribute("datetime") ? a.getAttribute("datetime") : Bj(a)) : "";
  }
  var Dj = ["topics", "rubric", "authors"];
  function Ej(a, b) {
    var c = this;
    this.id = "a";
    this.wb = !1;
    this.Oa = {};
    this.Jc = {
      "schema.org": "Article NewsArticle Movie BlogPosting Review Recipe Answer".split(" "),
      ld: ["article"],
    };
    var d = {};
    this.Ub = ((d.Answer = 3), (d.Review = 2), d);
    this.qb = x(
      function (e, f, g) {
        var h = {};
        kg(c.l, c.ga, "pfi", ((h.field = e), (h.itemField = f), (h.value = g), h));
      },
      function (e, f, g) {
        return "" + e + f + g;
      }
    );
    this.Zc = function (e) {
      K(function (f) {
        e[f] &&
          (e[f] = F(
            function (g, h) {
              var k = h.name,
                l = h.position;
              if (!k) return c.qb(f, "name", k), g;
              if ("string" === typeof l) {
                k = Ib(l);
                if (null === k || c.l.isNaN(k)) return c.qb(f, "position", l), g;
                h.position = k;
              }
              g.push(h);
              return g;
            },
            [],
            e[f]
          ));
      }, Dj);
      return e;
    };
    this.lc = x(function (e, f) {
      var g = {};
      kg(c.l, c.ga, ["pcs", f], ((g.chars = f.chars), (g.limit = yj[f.type]), g));
    });
    this.l = a;
    this.root = Fe(a);
    this.ga = b;
  }
  function Fj(a, b, c) {
    var d;
    W(a.l, "P.s." + c, function () {
      d = a.Oa[c].call(a, b);
    })();
    return d;
  }
  function Gj(a, b) {
    var c = N({}, b);
    if (a.wb && !c.id && J(b.type, [3, 2])) {
      var d = S(", ", K(I("name"), c.authors || []));
      c.pageTitle = d + ": " + c.pageTitle;
    }
    if (!c.pageTitle) {
      a: {
        d = c.oa;
        for (var e = 1; 5 >= e; e += 1) {
          var f = Bj(th("h" + e, d));
          if (f) {
            d = f;
            break a;
          }
        }
        d = void 0;
      }
      c.pageTitle = d;
    }
    c.pageUrlCanonical ||
      ((d = c.id),
      (d = ("string" !== typeof d ? 0 : /^(https?:)\/\//.test(d))
        ? c.id
        : (d = th('[rel="canonical"]', a.root))
        ? d.href
        : void 0),
      (c.pageUrlCanonical = d));
    c.id || (c.id = c.pageTitle || c.pageUrlCanonical);
    return c;
  }
  Ej.prototype.Ra = function (a) {
    var b = this,
      c = {},
      d = a.element;
    if (!d) return null;
    c.type = a.type;
    K(function (f) {
      c[f] = Fj(b, a, f);
    }, M(this.Oa));
    var e = U(this.l);
    c.stamp = e(Nc);
    c.element = a.element;
    c.oa = d;
    c = this.Zc(Gj(this, c));
    c.id = c.id ? vh(c.id) : 1;
    c.update = function (f) {
      return a.element ? Fj(b, a, f) : void 0;
    };
    return c;
  };
  Ej.prototype.getType = function () {
    return 1;
  };
  Ej.prototype.rb = function () {
    return [];
  };
  function tj(a) {
    var b = a.rb(),
      c = 1;
    return F(
      function (d, e) {
        var f = a.Ra({ element: e, type: a.getType(e) }) || [];
        rb(f) || (f = [f]);
        f = F(
          function (g, h) {
            var k = g.values,
              l = g.ub;
            h && h.chars > yj[h.type] && !J(h.id, l)
              ? (k.push(h), l.push(h.id))
              : h && h.chars <= yj[h.type] && a.lc(h.id, h);
            return { values: k, ub: l };
          },
          { values: [], ub: K(I("id"), d) },
          f
        ).values;
        return d.concat(
          K(function (g) {
            var h = {};
            g = N(((h.index = c), (h.Nb = !1), (h.involvedTime = 0), h), g);
            c += 1;
            return g;
          }, f)
        );
      },
      [],
      b
    );
  }
  function Hj() {
    Ej.apply(this, arguments);
    this.id = "s";
    this.wb = !0;
    this.Xc = Ua("exec", new RegExp("schema.org\\/(" + S("|", M(this.Ub)) + ")$"));
    var a = {};
    this.Oa =
      ((a.id = function (b) {
        b = b.element;
        var c = Aj(this.l, b, "identifier");
        return c
          ? Bj(c)
          : (c = Aj(this.l, b, "mainEntityOfPage")) && c.getAttribute("itemid")
          ? c.getAttribute("itemid")
          : null;
      }),
      (a.chars = function (b) {
        var c = 0;
        b = b.element;
        for (
          var d = ["articleBody", "reviewBody", "recipeInstructions", "description", "text"], e = 0;
          e < d.length;
          e += 1
        ) {
          var f = Aj(this.l, b, d[e]);
          if (f) {
            c = Bj(f).length;
            break;
          }
        }
        b = ye(b);
        0 === c && b && (c += b.length);
        return c;
      }),
      (a.topics = function (b) {
        var c = this,
          d = zj(this.l, b.element, "about");
        return K(function (e) {
          var f = { name: Bj(e) };
          if ((d = Aj(c.l, e, "name"))) f.name = Bj(d);
          return f;
        }, d);
      }),
      (a.rubric = function (b) {
        var c = this;
        (b = th('[itemtype$="schema.org/BreadcrumbList"]', b.element)) ||
          (b = th('[itemtype$="schema.org/BreadcrumbList"]', this.root));
        return b
          ? K(function (d) {
              return { name: Bj(Aj(c.l, d, "name")), position: Bj(Aj(c.l, d, "position")) };
            }, zj(this.l, b, "itemListElement"))
          : [];
      }),
      (a.updateDate = function (b) {
        return (b = Aj(this.l, b.element, "dateModified")) ? Cj(b) : "";
      }),
      (a.publicationDate = function (b) {
        return (b = Aj(this.l, b.element, "datePublished")) ? Cj(b) : "";
      }),
      (a.pageUrlCanonical = function (b) {
        b = zj(this.l, b.element, "url");
        if (b.length) {
          var c = b[0];
          return c.href ? c.href : Bj(b);
        }
        return null;
      }),
      (a.pageTitle = function (b) {
        var c = "",
          d = b.element,
          e = Aj(this.l, d, "headline");
        e && (c += Bj(e));
        (e = Aj(this.l, d, "alternativeHeadline")) && (c += " " + Bj(e));
        "" === c && ((e = Aj(this.l, d, "name")) || (e = Aj(this.l, d, "itemReviewed")), e && (c += Bj(e)));
        3 === b.type &&
          (b = uh('[itemtype$="schema.org/Question"]', this.l, d)) &&
          (b = Aj(this.l, b, "text")) &&
          (c += Bj(b));
        return c;
      }),
      (a.authors = function (b) {
        var c = this;
        b = zj(this.l, b.element, "author");
        return K(function (d) {
          var e = {};
          e = ((e.name = ""), e);
          if (/.+schema.org\/(Person|Organization)/.test(d.getAttribute("itemtype") || "")) {
            var f = Aj(c.l, d, "name");
            f && (e.name = Bj(f));
          }
          e.name || (e.name = d.getAttribute("content") || ye(d) || d.getAttribute("href"));
          return e;
        }, b);
      }),
      a);
  }
  Hj.prototype = ea(Ej.prototype);
  Hj.prototype.constructor = Hj;
  if (ka) ka(Hj, Ej);
  else
    for (var Ij in Ej)
      if ("prototype" != Ij)
        if (Object.defineProperties) {
          var Jj = Object.getOwnPropertyDescriptor(Ej, Ij);
          Jj && Object.defineProperty(Hj, Ij, Jj);
        } else Hj[Ij] = Ej[Ij];
  Hj.prototype.getType = function (a) {
    a = a.getAttribute("itemtype") || "";
    return (a = this.Xc(a)) ? this.Ub[a[1]] : 1;
  };
  Hj.prototype.Ra = function (a) {
    return a.element && ye(a.element).length ? Ej.prototype.Ra.call(this, a) : null;
  };
  Hj.prototype.rb = function () {
    var a = S(
      ",",
      K(function (b) {
        return '[itemtype$="schema.org/' + b + '"]';
      }, this.Jc["schema.org"])
    );
    return sh(a, this.root);
  };
  function Kj(a, b, c, d, e) {
    d = Zf(a, c, d);
    b = Ef(a, e || c, b);
    var f = Wd(a, d, b);
    return function (g) {
      g = N({ H: { Z: ["mms." + c] } }, g);
      return f(g);
    };
  }
  var Lj = "et w v z i u vf".split(" "),
    Mj = {};
  Hj && ((Mj.schema = Hj), (Mj.microdata = Hj));
  var Nj = X("p.p", function (a, b) {
    function c(l) {
      var m = N({}, k);
      m.H.K = l;
      return e(m)["catch"](W(a, "s.ww.p"));
    }
    var d = mj.isEnabled(a) ? new mj(a, "8") : void 0;
    if (!ta("querySelectorAll", a.document.querySelectorAll) || !d) return R.resolve();
    var e = Kj(
        a,
        b,
        "p",
        ["f", "x"],
        [
          [of(Lj), 1],
          [nj, 1],
        ]
      ),
      f = Id(),
      g = we(a, b.id),
      h = g.m("pai");
    h && (g.ya("pai"), f.A("pai", h));
    g = {};
    var k = { B: ((g["wv-type"] = d.type), g), C: f, H: {} };
    return hg(
      b,
      W(a, "ps.s", function (l) {
        if ((l = H(l, "settings.publisher.schema"))) {
          Ig(b) && (l = "microdata");
          var m = Mj[l];
          if (m && d) {
            var n = P(b);
            m = new m(a, n);
            m = new qj(a, m, d, c, n);
            m.start();
            var u = {};
            kg(a, n, "ps", ((u.schema = l), u));
            return Ta(m.stop, m);
          }
        }
      })
    );
  });
  function Oj(a, b, c, d, e) {
    d = void 0 === d ? 1 : d;
    e = void 0 === e ? "itc" : e;
    b = Wc(b, c);
    oi(a, b, d)(Re(W(a, e), t));
  }
  function Pj() {
    return Math.floor(65536 * (1 + Math.random()))
      .toString(16)
      .substring(1);
  }
  var Qj = x(
      function (a) {
        var b = Q(a),
          c = b.m("isEU");
        if (A(c)) {
          var d = Kb(rd(a, "is_gdpr") || "");
          if (J(d, [0, 1])) b.A("isEU", d), (c = !!d);
          else if (((a = ve(a).m("wasSynced")), (a = H(a, "params.eu")))) b.A("isEU", a), (c = !!a);
        }
        return c;
      },
      function (a) {
        return Q(a).m("isEU");
      }
    ),
    Rj = X("i.ep", function (a) {
      Qj(a);
    }),
    Sj = O.fa + "//" + lc + "/metrika";
  function Tj(a) {
    return {
      I: function (b, c) {
        var d = b.C;
        if (d) {
          var e = Q(a).m("adBlockEnabled");
          e && d.A("adb", e);
        }
        c();
      },
    };
  }
  function Uj(a, b) {
    var c = a.document;
    if (J(c.readyState, ["interactive", "complete"])) mg(a, b);
    else {
      var d = Fc(a),
        e = d.D,
        f = d.va,
        g = function () {
          f(c, ["DOMContentLoaded"], g);
          f(a, ["load"], g);
          b();
        };
      e(c, ["DOMContentLoaded"], g);
      e(a, ["load"], g);
    }
  }
  var Vj = E("9-d5ve+.r%7", w),
    Wj = X("ad", function (a, b) {
      if (!b.Da) {
        var c = Q(a);
        if (!c.m("adBlockEnabled")) {
          var d = function (m) {
              J(m, ["2", "1"]) && c.A("adBlockEnabled", m);
            },
            e = yd(a),
            f = e.m("isad");
          if (f) d(f);
          else {
            var g = E("adStatus", c.A),
              h = function (m) {
                m = m ? "1" : "2";
                d(m);
                g("complete");
                e.A("isad", m, 1200);
                return m;
              },
              k = cg(a, "adb", b);
            if (!c.m("adStatus")) {
              g("process");
              var l = "metrika/a" + Vj().replace(/[^a-v]+/g, "") + "t.gif";
              Uj(a, function () {
                return k({ aa: { U: l } })
                  .then(E(!1, h))
                  ["catch"](E(!0, h));
              });
            }
          }
        }
      }
    }),
    Xj = x(Ad);
  function Yj(a) {
    var b = Xj();
    b.Qc || (b.Qc = a);
  }
  E(ae("ccf"), xc);
  function Zj(a, b, c, d, e) {
    if (
      b.na &&
      b.ra &&
      ((b.na === a.na && b.ra === a.ra) || N(a, b, { M: {}, Pa: !0 }),
      0 < e && Md(a.T, [e]),
      K(function (f) {
        var g = p(f);
        f = g.next().value;
        g = g.next().value;
        var h = {},
          k = {};
        N(a.M, ((k[f] = ((h[g] = +(a.M[f] && a.M[f][g] ? a.M[f][g] : 0)), h)), k));
      }, d),
      K(function (f) {
        var g = p(f);
        f = g.next().value;
        g = g.next().value;
        var h = {},
          k = {};
        N(a.M, ((k[f] = ((h[g] = 1 + (a.M[f] ? a.M[f][g] : 0)), h)), k));
      }, c),
      a.xb && (a.Pa || c.length))
    ) {
      if ((b = rg(a.l, a.mb)))
        (c = {}),
          b.params(
            "__ym",
            "phc",
            ((c.clientId = a.na), (c.orderId = a.ra), (c.service_id = a.Pb), (c.phones = a.M), (c.performance = a.T), c)
          );
      a.Pa = !1;
    }
  }
  var ak = x(function (a, b, c) {
    function d(k) {
      return e(a, b, k) ? h[k.Ia] && h[k.Ia].La : null;
    }
    var e = c.Wc,
      f = {},
      g = void 0 === c.Cc ? ((f.href = !0), (f.text = !0), f) : c.Cc,
      h;
    return function (k) {
      return new R(function (l, m) {
        (k && k.length) || m();
        h = Vh()(k);
        Ve(a)(
          Re(E({ M: [], T: 0 }, l), function () {
            var n = U(a),
              u = n(T),
              q = g.href ? Xh(a, h) : [],
              v = g.text ? Wh(a, h, a.document.body) : [];
            l({ M: lb(rb, mb(K(d, q.concat(v)))), T: n(T) - u });
          })
        );
      });
    };
  });
  function bk(a, b, c) {
    a = Rh(c.Ia);
    if ("href" === c.Fb) {
      var d = c.sa;
      b = d.href;
      c = b.replace(a, c.ca);
      if (b !== c) return (d.href = c), !0;
    } else if (
      (b = null === (d = c.sa.textContent) || void 0 === d ? void 0 : d.replace(a, c.ca)) &&
      b !== c.sa.textContent
    )
      return (c.sa.textContent = b), !0;
    return !1;
  }
  var ck = x(ne, Aa);
  function dk(a, b, c) {
    b = xd(a, void 0, b);
    b = ck(a, b.m("phc_settings") || "");
    var d = H(b, "clientId"),
      e = H(b, "orderId"),
      f = H(b, "service_id"),
      g = H(b, "phones") || [];
    return d && e && g && f
      ? ak(a, c.mb, { Wc: bk })(g)
          .then(function (h) {
            return Zj(c, { na: d, ra: e, Pb: f }, h.M, g, h.T);
          })
          ["catch"](t)
      : R.resolve();
  }
  var ek = X("phc.p", function (a, b) {
      if (!$h(a))
        return hg(b, function (c) {
          var d = b.id,
            e = xd(a, void 0, d),
            f = e.m("phc_settings") || "";
          if ((c = H(c, "settings.phchange"))) {
            var g = oe(a, c) || "";
            g !== f && e.A("phc_settings", g);
          } else f && (c = ck(a, f));
          e = H(c, "clientId");
          f = H(c, "orderId");
          c = H(c, "phones") || [];
          e &&
            f &&
            c.length &&
            ((f = { na: "", ra: "", Pb: 0, M: {}, T: [], xb: !1, Pa: !0, l: a, mb: b }),
            N(f, { xb: !0 }),
            dk(a, d, f),
            (c = We(a)),
            (e = Zh(a, c)),
            (d = Ta(dk, null, a, d, f)),
            e.D(d),
            Yh(a, c));
        });
    }),
    fk = "architecture bitness model platformVersion uaFullVersion fullVersionList".split(" "),
    gk = cd("uah", function (a) {
      if (!ta("getHighEntropyValues", H(a, "navigator.userAgentData.getHighEntropyValues"))) return R.reject("0");
      try {
        return a.navigator.userAgentData.getHighEntropyValues(fk).then(
          function (b) {
            if (!Pa(b)) throw "2";
            return b;
          },
          function () {
            throw "1";
          }
        );
      } catch (b) {
        return R.reject("3");
      }
    }),
    hk = new RegExp(
      S(
        "|",
        "yandex.com/bots;Googlebot;APIs-Google;Mediapartners-Google;AdsBot-Google;FeedFetcher-Google;Google-Read-Aloud;DuplexWeb-Google;Google Favicon;googleweblight;Lighthouse;Mail.RU_Bot;StackRambler;Slurp;msnbot;bingbot;www.baidu.com/search/spi_?der.htm".split(
          ";"
        )
      ).replace(/[./]/g, "\\$&")
    ),
    ik = x(function (a) {
      var b = xb(a);
      return (b = hk.test(b))
        ? R.resolve(b)
        : gk(a).then(function (c) {
            try {
              return F(
                function (d, e) {
                  return d || hk.test(e.brand);
                },
                !1,
                c.brands
              );
            } catch (d) {
              return !1;
            }
          }, E(!1, w));
    }),
    jk = ["0", "1", "2", "3"],
    kk = jk[0],
    lk = jk[1],
    mk = jk[2],
    nk = ["GDPR-ok-view-detailed-0", "GDPR-ok-view-detailed-1", "GDPR-ok-view-detailed-2", "GDPR-ok-view-detailed-3"],
    ok = ["GDPR-ok-view-default", "GDPR-ok-view-detailed"].concat(nk);
  function pk(a) {
    if (J(a, ["GDPR-ok-view-default", "GDPR-ok-view-detailed"])) return kk;
    a = a.replace("GDPR-ok-view-detailed-", "");
    return J(a, jk) ? a : kk;
  }
  var qk =
      "GDPR-ok GDPR-cross GDPR-cancel 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 GDPR-settings GDPR-ok-view-default GDPR-ok-view-detailed 21 22 23"
        .split(" ")
        .concat(nk)
        .concat(["28", "29", "30", "31"]),
    rk = "3 13 14 31 15 16 17 28".split(" "),
    sk = G(Db(I("ymetrikaEvent.type")), nb(ob(qk)));
  function tk(a, b, c) {
    a = c || cc(a);
    return J(a, b) ? a : "en";
  }
  var uk = {
      Ac: !0,
      url: "https://yastatic.net/s3/gdpr/v3/gdpr",
      Cb: "",
      zb: "az be en es et fi fr hy ka kk ky lt lv no pt ro ru sl tg tr uz cs da de el hr it nl pl sk sv".split(" "),
    },
    vk = cd("gdpr", function (a, b, c, d, e) {
      function f(n) {
        b("10");
        c.D(ok, function (u) {
          u = u.type;
          var q = {};
          l.Kb(((q.type = u), q));
          n({ value: pk(u) });
        });
      }
      var g = void 0 === e ? uk : e;
      e = g.url;
      var h = g.Cb,
        k = g.Ac;
      g = tk(a, g.zb, d.bd);
      var l = Sg(a, d);
      if (!l) return R.resolve({ value: kk, Ua: !0 });
      if (a._yaGdprLoaded)
        return new R(function (n) {
          b("7");
          f(n);
        });
      var m = Ff(a, { src: "" + e + (k ? "" : g) + h + ".js" });
      return new R(function (n, u) {
        m
          ? (b("7"),
            (m.onerror = function () {
              b("9");
              var q = {};
              l.Kb(((q.type = "GDPR-ok-view-default"), q));
              n(null);
            }),
            (m.onload = E(n, f)))
          : (b("9"), u(ae("gdp.e")));
      });
    });
  function wk(a, b) {
    var c = Sg(a, b);
    c &&
      c.ba.D(["isYandex"], function () {
        var d = {};
        return (d.type = "isYandex"), (d.isYandex = bj(a)), d;
      });
  }
  function xk(a, b, c) {
    var d = Sg(a, c);
    return new R(function (e) {
      if (d) {
        var f = d.ba,
          g = G(E("4", b), E(null, e)),
          h = Qe(a, g, 2e3, "gdp.f.t"),
          k = {};
        d.Mb(((k.type = "isYandex"), k))
          .then(function (l) {
            l.isYandex
              ? (b("5"),
                f.D(ok, function (m) {
                  m = p(m);
                  m.next();
                  m = m.next().value.type;
                  e({ value: pk(m) });
                }))
              : (b("6"), e(null));
          })
          ["catch"](g)
          .then(B([a, h], Pe));
      } else e({ value: lk, Ua: !0 });
    });
  }
  var yk = {},
    zk =
      ((yk["GDPR-ok"] = "ok"),
      (yk["GDPR-ok-view-default"] = "ok-default"),
      (yk["GDPR-ok-view-detailed"] = "ok-detailed"),
      (yk["GDPR-ok-view-detailed-0"] = "ok-detailed-all"),
      (yk["GDPR-ok-view-detailed-1"] = "ok-detailed-tech"),
      (yk["GDPR-ok-view-detailed-2"] = "ok-detailed-tech-analytics"),
      (yk["GDPR-ok-view-detailed-3"] = "ok-detailed-tech-other"),
      yk);
  function Ak(a, b) {
    if (bj(a)) {
      var c = Ug(a),
        d = rg(a, b);
      d = d && d.params;
      c = K(E(zk, H), sk(c));
      d && c.length && d("gdpr", mb(c));
    }
  }
  var Bk = "az be en es et fi fr hy ka kk ky lt lv no pt ro ru sl tg tr uz ar he sr uk zh".split(" "),
    Ck = [],
    Dk = Ua("push", Ck),
    Ek = x(function (a, b) {
      var c = b.m("gdpr");
      return J(c, jk) ? "-" + c : "";
    });
  function Fk(a, b, c, d) {
    if (!c.C || nc(b.L)) d();
    else {
      var e = Ug(a),
        f = E(e, Tg),
        g = xd(a, ""),
        h = function () {
          var u = S(",", K(za(qk), sk(e)));
          u = "" + u + Ek(u, g);
          ge(c, "gdpr", u);
          d();
        };
      if (b.ad) f("31"), h();
      else if (3 === b.id) h();
      else {
        var k = Q(a),
          l = k.m("f1");
        if (l) l(h);
        else if (((l = sk(e)), Hb(ob(qk), l))) h();
        else if (g.m("yandex_login")) f("13"), g.A("gdpr", kk, 525600), h();
        else {
          l = bj(a);
          var m = V(a);
          var n = /(^|\w+\.)yango(\.yandex)?\.com$/.test(m.hostname)
            ? {
                url: "https://yastatic.net/s3/taxi-front/yango-gdpr-popup/",
                version: 2,
                zb: Bk,
                Cb: "_inversed_buttons",
              }
            : void 0;
          l || n
            ? ((l = g.m("gdpr")),
              J(l, jk)
                ? (f(l === lk ? "12" : "3"), h())
                : ii(a) || ji(a)
                ? (f("17"), h())
                : ik(a)
                    .then(w, t)
                    .then(function (u) {
                      u
                        ? (f("28"), h())
                        : (Dk(h),
                          k.A("f1", Dk),
                          (u = p(Vi).next().value),
                          u(a)
                            .then(I("params.eu"))
                            .then(function (q) {
                              if (q || La(m.href, "yagdprcheck=1") || g.m("yaGdprCheck")) {
                                g.A("gdpr_popup", lk);
                                wk(a, b);
                                if (dc(a)) return xk(a, f, b);
                                var v = Xg(a, e);
                                if (v) return (q = vk(a, f, v, b, n)), q.then(B([a, b], Ak)), q;
                              }
                              q || f("8");
                              return R.resolve({ value: kk, Ua: !0 });
                            })
                            .then(function (q) {
                              g.ya("gdpr_popup");
                              if (q) {
                                var v = q.value;
                                q = q.Ua;
                                J(v, jk) && g.A("gdpr", v, q ? void 0 : 525600);
                              }
                              v = Wc(Ck, Nd);
                              oi(a, v, 20)(Re(W(a, "gdr"), t));
                              k.A("f1", Nd);
                            })
                            ["catch"](W(a, "gdp.a")));
                    }))
            : (f("14"), h());
        }
      }
    }
  }
  var Gk = lc.split("."),
    Hk = Gk.pop(),
    Ik = S(".", Gk),
    Jk = {};
  function Kk(a) {
    var b = Sj + "/tag_debug.js?ver=" + O.ea + "&b=p";
    Jk[b] || (Jk[b] = { Kc: Ff(a, { src: b }), state: 0 });
    return Jk[b];
  }
  function Lk(a, b) {
    function c() {
      e.state = 1;
      b();
    }
    function d() {
      e.state = 2;
    }
    var e = Kk(a),
      f = e.Kc,
      g = e.state;
    f && 2 !== g ? (1 === g ? c() : ((g = Fc(a)), g.D(f, ["load"], c), g.D(f, ["error"], d))) : d();
  }
  var Mk = x(Ad, P);
  function Nk(a, b, c) {
    var d = Mk(b).Hc;
    if (!d) throw vc("im.no");
    Lk(a, function () {
      var e = Q(a).m("ytmm");
      (e = H(e, "tag_debug.init")) && e(d, c, O.ea);
    });
  }
  var Ok = x(Bd);
  function Pk(a) {
    a = cc(a);
    return Ki[a] || "ru";
  }
  function Qk(a) {
    a = Zi(a);
    return Hi[a] || a;
  }
  var Rk = x(function () {
      var a = F(
        function (b, c) {
          "ru" !== c && (b[c] = Ik + "." + c);
          return b;
        },
        {},
        gd
      );
      K(function (b) {
        a[b] = b;
      }, M(Ii));
      return a;
    }),
    Sk = x(function (a) {
      a = V(a).hostname;
      return (a = Fd(G(I("1"), $a("test"), na(Nd)(a)), Pb(Ii))) && a[0];
    });
  function Tk(a, b) {
    var c = Pk(a),
      d = [Sk(a) || Qk(a)];
    $i(a) && d.push(c);
    var e = U(a);
    c = ve(a);
    var f = c.m("synced", {});
    d = lb(function (g) {
      if (b[g]) {
        var h = (f[g] || 1) + 1440 < e(Lc);
        h && delete f[g];
        return h;
      }
    }, d);
    c.A("synced", f);
    return K(function (g) {
      return { Pc: b[g], Bc: g };
    }, d);
  }
  var Uk = (function (a, b) {
      return function (c, d) {
        if (hc(c) || zb(c)) return {};
        var e = P(d);
        e = Rk(e);
        var f = Tk(c, e),
          g = Q(c),
          h = dc(c);
        return {
          I: function (k, l) {
            var m = k.C,
              n = $i(c);
            m = !(m && m.m("pv"));
            if (!n || h || m || !f.length) return l();
            if (g.m("startSync")) Ok(c).push(l);
            else {
              g.A("startSync", !0);
              n = B([c, f, d.id, t, !1], a);
              m = p(Vi).next().value;
              if (!m) return l();
              m(c)
                .then(n)
                .then(l, G(pa(l), W(c, b)))
                ["catch"](t);
            }
          },
        };
      };
    })(function (a, b, c, d, e) {
      var f = U(a),
        g = Q(a),
        h = ve(a);
      d = Zf(a, "c");
      var k = Ld(a, d),
        l = Pj() + Pj() + "-" + Pj() + "-" + Pj() + "-" + Pj() + "-" + Pj() + Pj() + Pj();
      Yj(l);
      return F(
        function (m, n) {
          function u() {
            var y = h.m("synced");
            g.A("startSync", !1);
            y && ((y[n.Bc] = q), h.A("synced", y));
            y = Ok(a);
            K(Nd, y);
            vb(y);
          }
          var q,
            v = {};
          v = k({ H: { Z: ["sync.cook"], gb: 1500 }, B: ((v.scid = l), (v.cid = "" + c), v) }, [
            O.fa + "//" + n.Pc + "/sync_cookie_image_check" + (e ? "_secondary" : ""),
          ])
            .then(function () {
              q = f(Lc);
              u();
            })
            ["catch"](function () {
              q = f(Lc) - 1435;
              u();
            });
          v = E(v, w);
          return m.then(v);
        },
        R.resolve(),
        b
      )["catch"](W(a, "ctl"));
    }, "sy.c"),
    Vk = {},
    Wk =
      ((Vk.brands = "chu"),
      (Vk.architecture = "cha"),
      (Vk.bitness = "chb"),
      (Vk.uaFullVersion = "chf"),
      (Vk.fullVersionList = "chl"),
      (Vk.mobile = "chm"),
      (Vk.model = "cho"),
      (Vk.platform = "chp"),
      (Vk.platformVersion = "chv"),
      Vk);
  function Xk(a) {
    return Ga(a)
      ? a
      : rb(a)
      ? S(
          ",",
          K(function (b) {
            return '"' + b.brand + '";v="' + b.version + '"';
          }, a)
        )
      : Oa(a)
      ? ""
      : a
      ? "?1"
      : "?0";
  }
  function Yk(a) {
    return "che\n" + a;
  }
  function Zk(a) {
    var b = F(
      function (c, d) {
        var e = p(d),
          f = e.next().value;
        e = e.next().value;
        (f = Xk(a[f])) && c.push("" + e + "\n" + f);
        return c;
      },
      [],
      Pb(Wk)
    );
    return S("\n", b);
  }
  var $k = x(function (a) {
    return gk(a).then(Zk, Yk);
  });
  function al(a) {
    return {
      I: function (b, c) {
        $k(a).then(function (d) {
          b.B || (b.B = {});
          b.B.uah = d;
          c();
        }, c);
      },
    };
  }
  function bl(a, b) {
    if (
      "https://oauth.yandex.ru" === H(b, "origin") &&
      H(b, "source.window") &&
      "_ym_uid_request" === H(b.data, "_ym")
    ) {
      var c = b.source,
        d = {};
      d = ((d._ym_uid = a), d);
      c.postMessage(d, "https://oauth.yandex.ru");
    }
  }
  var cl = cd("ot", function (a, b) {
      if (jc(a)) {
        var c = Fc(a);
        return hg(
          b,
          W(a, "ot.s", function (d) {
            if (H(d, "settings.oauth")) {
              var e = [],
                f = ff(a, b);
              e.push(c.D(a, ["message"], W(a, "ot.m", E(f, bl))));
              Ve(a)(
                Re(
                  t,
                  W(a, "ot.b", function () {
                    function g(n) {
                      var u = n.href;
                      if (u && lh(u, "https://oauth.yandex.ru/") && !La(u, "_ym_uid=")) {
                        u = La(u, "?") ? "&" : "?";
                        var q = {};
                        n.href += "" + u + ad(((q._ym_uid = f), (q.mc = "v"), q));
                        c.D(
                          n,
                          ["click"],
                          W(a, "ot.click", function () {
                            var v = "et=" + k(T);
                            n.href += "&" + v;
                          })
                        );
                      }
                    }
                    var h = a.document.body,
                      k = U(a),
                      l = sh("a", h);
                    K(g, l);
                    if (ta("MutationObserver", a.MutationObserver)) {
                      l = new a.MutationObserver(
                        W(
                          a,
                          "ot.m",
                          E(function (n) {
                            n = n.addedNodes;
                            for (var u = 0; u < n.length; u += 1) {
                              var q = n[u];
                              "A" === q.nodeName && g(q);
                            }
                          }, K)
                        )
                      );
                      var m = {};
                      m = ((m.childList = !0), (m.subtree = !0), m);
                      l.observe(h, m);
                      e.push(Ta(l.disconnect, l));
                    }
                  })
                )
              );
              return B([Od, e], K);
            }
          })
        );
      }
    }),
    dl = X("p.cm", function (a) {
      rc(a)
        .O(
          "mcs",
          X("p.cm.cs", function (b, c, d, e, f) {
            if (rg(a, c)) return Kj(b, c, d, e, f);
            xc(vc("cmws.cd"));
          })
        )
        .O("wsfm", of);
    }),
    el = X("destruct.e", function (a, b, c) {
      return function () {
        var d = Q(a),
          e = b.id;
        K(function (f, g) {
          return z(f) && W(a, "dest.fr." + g, f)();
        }, c);
        delete d.m("counters")[P(b)];
        delete a["yaCounter" + e];
      };
    });
  function fl(a, b, c, d) {
    return function () {
      var e = Ea(arguments);
      e = d.apply(null, da(e));
      return A(e) ? rg(a, b) : e;
    };
  }
  function gl(a, b, c, d) {
    return W(a, "cm." + c, d);
  }
  function hl(a, b, c, d, e) {
    if (!c.length) return e;
    c = K(function (f) {
      return B([a, b, d], f);
    }, c);
    return G.apply(null, da(c))(e);
  }
  var il = Q(window);
  il.O("hitParam", {});
  Q(window).O("getCounters", Eg(window));
  ug.push(Fg);
  bg["1"] = Yd;
  vg.push(Og);
  Yf["1"] = Uf;
  Bf(Kg, -1);
  Df["1"] = [
    [Kg, -1],
    [$d, 1],
    [vf, 2],
    [of(), 3],
    [yf, 4],
  ];
  vg.push(Zg);
  vg.push(
    X("p.ar", function (a, b) {
      var c = cg(a, "a", b),
        d = {};
      return (
        (d.hit = function (e, f, g, h, k, l) {
          var m = {};
          m = { B: {}, C: Id(((m.pv = 1), (m.ar = 1), m)) };
          f = Pa(f)
            ? { title: f.title, Eb: f.referer, G: f.params, xa: f.callback, l: f.ctx }
            : { title: f, Eb: g, G: h, xa: k, l: l };
          h = Mg(b);
          g = e || V(a).href;
          h.url !== g && ((h.ref = h.url), (h.url = e));
          e = f.Eb || h.ref || a.document.referrer;
          h = {};
          h = lg(a, b, "pv", ((h.id = b.id), (h.url = g), (h.ref = e), h), f.G);
          k = N(m.F || {}, { G: f.G, title: f.title });
          l = {};
          m = c(N(m, { F: k, B: N(m.B || {}, ((l["page-url"] = g), (l["page-ref"] = e), l)) }), b).then(h);
          return Lg(a, "p.ar.s", m, f.xa || t, f.l);
        }),
        d
      );
    })
  );
  bg.a = Yd;
  Df.a = zf;
  Yf.a = Uf;
  vg.push(bh);
  bg.g = Yd;
  Yf.g = Uf;
  Df.g = zf;
  vg.push(
    X("cl.p", function (a, b) {
      function c(n, u, q, v) {
        v = void 0 === v ? {} : v;
        q ? eh(a, b, { url: q, ha: !0, za: n, Ea: u, sender: d, Xb: v }) : g.warn("clel");
      }
      var d = cg(a, "2", b),
        e = [],
        f = P(b),
        g = jg(a, f),
        h = W(a, "s.s.tr", E(Cg(a, f), dh));
      f = {
        l: a,
        qa: b,
        qc: e,
        sender: d,
        gd: Q(a),
        oc: we(a, b.id),
        jd: Ke(a),
        Vc: E(E(f, Dg(a)), G(Nd, I("trackLinks"))),
      };
      f = W(a, "cl.p.c", E(f, fh));
      f = Fc(a).D(a, ["click"], f);
      b.Tb && h(b.Tb);
      var k = W(a, "file.clc", B([!0, !1], c)),
        l = W(a, "e.l.l.clc", B([!1, !0], c));
      e = W(a, "add.f.e.clc", gh(e));
      var m = {};
      return (m.file = k), (m.extLink = l), (m.addFileExtension = e), (m.trackLinks = h), (m.u = f), m;
    })
  );
  Df["2"] = zf;
  bg["2"] = Yd;
  Yf["2"] = Uf;
  bg.r = Xd("r");
  Yf.r = ["f", "x", "j", "i"];
  wg.push(
    X("p.r", function (a, b) {
      var c = oh(a),
        d = cg(a, "r", b),
        e = W(a, "rts.p");
      return hg(
        b,
        B(
          [
            function (f, g) {
              var h = { id: g.nc, L: g.L },
                k = { H: { K: g.Fc }, C: Id(g.ic), B: g.G, F: { ta: g.ta }, aa: { U: g.U } };
              g.Y && (k.Y = fe(g.Y));
              h = d(k, h)["catch"](e);
              return f.then(E(h, w));
            },
            R.resolve(),
            c,
          ],
          F
        )
      )
        .then(E(void 0, w))
        ["catch"](e);
    })
  );
  Z(
    "r",
    function (a) {
      return {
        I: function (b, c) {
          var d = void 0 === b.C ? Id() : b.C,
            e = b.F.ta,
            f = hh(a),
            g = d.m("rqnl", 0) + 1;
          d.A("rqnl", g);
          if ((d = H(f, S(".", [e, "browserInfo"])))) (d.rqnl = g), ih(a);
          c();
        },
        da: function (b, c) {
          jh(a, b);
          c();
        },
      };
    },
    1
  );
  Bf(kh, 100);
  Z("1", kh, 100);
  Z("n", kh, 100);
  vg.push(qh);
  Z("n", $d, 1);
  Z("n", vf, 2);
  Z("n", of(), 3);
  Z("n", yf, 3);
  bg.n = Yd;
  Yf.n = Uf;
  N(qc, { lb: { W: "accurateTrackBounce" } });
  vg.push(Oh);
  he.push("ecommerce");
  N(qc, {
    ob: {
      W: "ecommerce",
      $a: function (a) {
        if (a) return !0 === a ? "dataLayer" : "" + a;
      },
    },
  });
  od.push("_ym_debug");
  yg.unshift(di);
  var jl = {},
    kl =
      ((jl.tp = G(Aa, Ig, gb)),
      (jl.tpid = G(Aa, function (a) {
        a = P(a);
        return (Gg[a] && Gg[a].Uc) || null;
      })),
      jl);
  N(mf, kl);
  Bf(ei, 20);
  Z("n", ei, 20);
  Z("1", ei, 20);
  yg.unshift(gi);
  mf.fp = function (a, b, c) {
    if (c.B && c.B.nohit) return null;
    c = Q(a).m;
    if (!c("fpe")) return null;
    b = fi(b);
    if (b.sc) return null;
    c = c("fht", Infinity);
    a: {
      var d = H(a, "performance.getEntriesByType");
      if (z(d)) {
        if (((a = lb(G(w, I("name"), oa("first-contentful-paint")), d.call(a.performance, "paint"))), a.length)) {
          a = a[0].startTime;
          break a;
        }
      } else {
        var e = H(a, "chrome.loadTimes");
        d = kf(a);
        if (z(e) && ((e = e.call(a.chrome)), (e = H(e, "firstPaintTime")), d && e)) {
          a = 1e3 * e - d;
          break a;
        }
        if ((a = H(a, "performance.timing.msFirstPaint"))) {
          a -= d;
          break a;
        }
      }
      a = void 0;
    }
    return a && c > a ? ((b.sc = a), Math.round(a)) : null;
  };
  N(mf, {
    bu: si,
    ds: function (a, b, c) {
      if ((void 0 === c.B ? {} : c.B).nohit) return null;
      a = Gc(a);
      if (!a) return null;
      var d = (c = null);
      H(a, "getEntriesByType") && (d = H(a.getEntriesByType("navigation"), "0")) && (c = ui);
      if (!c) {
        var e = H(a, "timing");
        e && ((c = ti), (d = e));
      }
      if (!c) return null;
      a = yi(a, d, c);
      b = P(b);
      b = xi(b);
      return (b = zi(b, a)) && S(",", b);
    },
    td: function (a) {
      return Q(a).m("tpuid");
    },
  });
  (function () {
    var a = {};
    a.oo = qi("oo");
    a.yu = function (b) {
      return (b = xd(b, "").m("yandexuid")) && b.substring(0, 25);
    };
    a.ecs = qi("ecs");
    a.cdl = qi("cdl");
    a.eco = x(Li, G(Aa, P));
    a.dss = qi("dSync");
    N(me, a);
  })();
  Yf.er = Wf;
  (function () {
    var a = window;
    try {
      var b = Zf(a, "er"),
        c = Ri(a, b);
      de.push(function (d, e, f, g) {
        var h = {},
          k = {},
          l = {},
          m = {},
          n = {};
        c(
          ((n[d] = ((m[O.ea] = ((l[e] = ((k[f] = g ? ((h[a.location.href] = g), h) : a.location.href), k)), l)), m)), n)
        );
      });
    } catch (d) {}
  })();
  tg.push(function (a, b) {
    if (H(a, "disableYaCounter" + b.id) || H(a, "Ya.disableMetrica")) {
      var c = P(b);
      delete Q(a).m("counters", {})[c];
      xc(ae("oo.e"));
    }
  });
  Af.unshift(function (a) {
    return {
      I: function (b, c) {
        Q(a).m("oo") || c();
      },
    };
  });
  Bf(function (a, b) {
    return {
      I: function (c, d) {
        var e = c.B,
          f = c.C;
        !Si[b.id] && f.m("pv") && b.exp && !e.nohit && ((e.exp = b.exp), (Si[b.id] = !0));
        d();
      },
    };
  }, -99);
  vg.push(Ti);
  Df.e = zf;
  bg.e = Yd;
  Yf.e = Uf;
  N(qc, { exp: { W: "experiments" } });
  le.experiments = "ex";
  ug.push(Ui);
  Bf(function (a) {
    return {
      I: function (b, c) {
        b.F && b.F.G && ri(a, b.F.G);
        c();
      },
    };
  }, 2.5);
  Vi.push(Wi);
  bg.f = Yd;
  var ll = {};
  N(Yf, ((ll.f = Vf), ll));
  Z("f", of(), 1);
  Z("f", pf, 2);
  Z("f", ei, 20);
  var ml = ["x"],
    nl = {};
  N(Yf, ((nl.s = ml), (nl.S = ml), (nl.u = Wf), nl));
  var ol = {};
  N(bg, ((ol.s = Ld), (ol.S = Yd), (ol.u = Ld), ol));
  Z("s");
  Z("u");
  Z("S", of(["v", "hid", "u", "vf", "rn"]), 1);
  vg.push(
    X("s", function (a, b) {
      return hg(b, function (c) {
        var d = Q(a),
          e = d.m,
          f = E("dSync", d.A);
        P(b);
        if (e("dSync", !1)) f(1);
        else
          return (
            f(!0),
            lj(a, c, {
              qa: b,
              Gc: "s",
              Bb: "ds",
              ja: f,
              Sb: function (g, h, k) {
                var l = g.Ib;
                g = g.host;
                if (H(l, "settings")) return xc(ae("ds.e"));
                h = h(T) - k;
                k = g[1];
                g = {};
                l = Id(((g.di = l), (g.dit = h), (g.dip = k), g));
                h = {};
                h = ((h["page-url"] = V(a).href), h);
                return cg(a, "S", Fi)({ C: l, B: h }, Fi).then(E(10, f), W(a, "ds.rs"));
              },
            })
          );
      });
    })
  );
  wg.push(Nj);
  Bf(Tj, 6);
  Z("1", Tj, 6);
  Z("adb");
  Z("n", Tj, 4);
  Yf.adb = Wf;
  bg.adb = Wd;
  ug.push(Wj);
  bg.d = Yd;
  Z("d", of(["hid", "u", "v", "vf"]), 1);
  Yf.d = Wf;
  Z(
    "n",
    function (a, b) {
      return {
        da: function (c, d) {
          if (!c.F || !c.F.force) {
            var e = b.id === O.ec ? 1 : 0.002,
              f = 0.002;
            f = void 0 === f ? 1 : f;
            e = void 0 === e ? 1 : e;
            var g = Gc(a);
            if (g && z(g.getEntriesByType)) {
              f = Math.random() > f;
              var h = Math.random() > e;
              if (!f || !h) {
                var k = g.getEntriesByType("resource"),
                  l = {},
                  m = {};
                g = {};
                var n = Oi();
                e = V(a).href;
                for (var u = 0; u < k.length; u += 1) {
                  var q = k[u],
                    v = p(q.name.replace(Mi, "").split("?")).next().value,
                    y = vh(v),
                    D = {};
                  D =
                    ((D.dns = Math.round(q.domainLookupEnd - q.domainLookupStart)),
                    (D.tcp = Math.round(q.connectEnd - q.connectStart)),
                    (D.duration = Math.round(q.duration)),
                    (D.response = Math.round(q.responseEnd - q.requestStart)),
                    D);
                  if ("script" === q.initiatorType && !f) {
                    var C = {};
                    m[v] = N(
                      D,
                      ((C.name = q.name),
                      (C.decodedBodySize = q.decodedBodySize),
                      (C.transferSize = Math.round(q.transferSize)),
                      C)
                    );
                  }
                  (!Ni[y] && !n[y]) || l[v] || h || ((q = {}), (l[v] = N(D, ((q.pages = e), q))));
                }
                M(l).length && (g.timings8 = l);
                M(m).length && (g.scripts = m);
                M(g).length &&
                  ((f = {}),
                  (h = {}),
                  cg(
                    a,
                    "d",
                    b
                  )(
                    { C: Id(((f.ar = 1), (f.pv = 1), f)), H: { K: oe(a, g) || void 0 }, B: ((h["page-url"] = e), h) },
                    { id: O.hc, L: "0" }
                  )["catch"](W(a, "r.tim.ng2")));
              }
            }
          }
          d();
        },
      };
    },
    7
  );
  vg.push(ek);
  ug.push(Rj);
  N(qc, { ad: { W: "yaDisableGDPR" }, bd: { W: "yaGDPRLang" } });
  Af.push(function (a, b) {
    return { I: B([a, b], Fk) };
  });
  od.push("gdpr");
  od.push("gdpr_popup");
  pd.push(function (a, b) {
    var c = Ug(a);
    c = sk(c);
    if (lb(ob(rk), c).length) return !0;
    c = b(a, "gdpr");
    return J(c, [kk, mk]);
  });
  Af.push(function (a) {
    return {
      I: function (b, c) {
        var d = b.aa || {},
          e;
        if ((e = H(a, "document.referrer"))) {
          b: {
            if ((e = Hf(a, e).host.match(hd))) {
              var f = p(e);
              f.next();
              e = f.next().value;
              if ((f = f.next().value)) {
                e = J(f, gd) ? f : !1;
                break b;
              }
              if (e) {
                e = gd[0];
                break b;
              }
            }
            e = !1;
          }
          e = Ik + "." + (e || Hk);
        } else e = lc;
        b.aa = N(d, { tb: [e] });
        c();
      },
    };
  });
  Bf(Uk, 5);
  Z("1", Uk, 6);
  Yf.c = Wf;
  bg.c = Ld;
  Z("1", al, 7);
  Bf(al, 7);
  wg.push(X("p.ot", cl));
  yg.push(
    X("cdl", function (a) {
      var b = Q(a).O;
      if ((a = H(a, "navigator.cookieDeprecationLabel")))
        try {
          a.getValue().then(E("cdl", b), B(["cdl", "e"], b));
        } catch (c) {
          b("cdl", "d");
        }
      else b("cdl", "na");
    })
  );
  vg.push(dl);
  wg.unshift(function (a, b) {
    hg(b, function (c) {
      var d = zd(a),
        e = H(c, "settings.sm"),
        f = ai(a);
      (d || e || f.id) && Nk(a, b, c);
    });
  });
  function pl(a, b, c, d) {
    var e = this;
    return W(window, "c.i", function () {
      function f(y) {
        (y = wh(k, m, "", y)(k, m)) && (z(y.then) ? y.then(g) : g(y));
        return y;
      }
      function g(y) {
        y &&
          (z(y)
            ? n.push(y)
            : Pa(y) &&
              K(function (D) {
                var C = p(D);
                D = C.next().value;
                C = C.next().value;
                z(C) && ("u" === D ? n.push(C) : h(C, D));
              }, Pb(y)));
      }
      function h(y, D, C) {
        e[D] = hl(k, m, C || u, D, y);
      }
      var k = window;
      (!k || (isNaN(a) && !a)) && be();
      var l = oc(a, b, c, d),
        m = pc(l);
      Mk(m).Hc = l;
      Hg(m, m.G || {});
      var n = [],
        u = [gl, wh, fl];
      u.unshift(sg);
      var q = K(w, wg);
      l = P(m);
      m.id || xc(vc("Invalid Metrika id: " + m.id, !0));
      var v = il.m("counters", {});
      if (v[l]) return (q = {}), kg(k, l, "dc", ((q.key = l), q)), v[l];
      v[l] = e;
      il.A("counters", v);
      il.O("counter", e);
      K(function (y) {
        y(k, m);
      }, tg);
      K(f, ug);
      f(ng);
      h(el(k, m, n), "destruct", [gl, fl]);
      mg(k, B([k, q, f, 1, "a.i"], Oj));
      K(f, vg);
      l = {};
      Dd(k, ((l.counterKey = P(m)), (l.name = "counter"), (l.data = Sd(m)), l));
    })();
  }
  K(na(Nd)(window), yg);
  if (window.Ya && pl) {
    var ql = O.kc;
    window.Ya[ql] = pl;
    qg(window);
    K(G(Za([window, window.Ya[ql]]), Nd), xg);
  }
}).call(this);
