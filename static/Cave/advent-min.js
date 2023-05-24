function e(a) {
    throw a;
}
var g = !0,
    h = null,
    l = !1;
window.console || (window.console = {});
window.console.log || (window.console.log = function () {});

function m(a) {
    this.ka = document.createElement("div");
    this.ka.className = "console";
    a.appendChild(this.ka);
    var b = document.createElement("form");
    this.z = document.createElement("input");
    this.z.setAttribute("type", "text");
    this.z.setAttribute("size", "68");
    this.Za = b;
    b.appendChild(document.createTextNode("> "));
    b.appendChild(this.z);
    a.appendChild(b);
    b.onsubmit = function (a) {
        return function () {
            try {
                if (a.ra) {
                    var b = a.z.value;
                    a.z.value = "";
                    a.e("> " + b);
                    var f = a.ra;
                    a.ra = h;
                    try {
                        f(b)
                    } catch (q) {
                        return a.e("An exception occurred while processing your input:"),
                            a.e(q.toString()), a.e("* * * THE PROGRAM IS DEAD * * *"), a.e("You'll have to reload and try again."), a.z.disabled = g, a.ra = h, a.z.scrollIntoView(), l
                    }!a.ra && !a.Oa && (a.e("No callback set - no more user input can be accepted."), a.z.disabled = g, a.e("* * * THE PROGRAM IS DEAD * * *"), a.e("You'll have to reload and try again."))
                } else a.e("Whoops, no callback was set, so your command cannot be processed."), a.z.disabled = g, a.e("* * * THE PROGRAM IS DEAD * * *"), a.e("You'll have to reload and try again.");
                a.z.scrollIntoView()
            } catch (s) {
                alert("Interal exception handling user input: " +
                    s)
            }
            return l
        }
    }(this);
    this.Ya = function (a) {
        return function (b) {
            aa(a, b)
        }
    }(this);
    this.z.focus()
}
m.MOTD = "$ advent";
m.prototype = {
    e: function (a) {
        for (var b = [], c = 0; c < arguments.length; c++) b.push(arguments[c]);
        b = b.join("").split(/\n/);
        for (c = 0; c < b.length; c++) {
            var d = document.createElement("div");
            "" == b[c] && (b[c] = " ");
            d.appendChild(document.createTextNode(b[c]));
            this.ka.appendChild(d)
        }
    },
    Oa: l,
    Fa: g,
    ya: 79,
    f: function (a) {
        return -1 == this.k[a - 1]
    },
    gb: function () {
        this.ma = Array(150);
        for (var a = 0; a < this.ma.length; a++) this.ma[a] = 0;
        this.u = Array(150);
        for (a = 0; a < this.u.length; a++) this.u[a] = 0;
        this.k = Array(100);
        this.fixed = Array(100);
        this.link =
            Array(200);
        this.la = [];
        this.H = Array(n.length);
        this.G = Array(n.length);
        this.Da = Array(20);
        this.M = Array(6);
        this.l = Array(6);
        this.B = Array(6);
        for (a = 0; 100 > a; a++) this.k[a] = 0, this.link[a] = 0, this.link[a + 100] = 0;
        for (a = ba.length - 1; 0 <= a; a--) 0 < ba[a] && (p(this, a + 101, ba[a]), p(this, a + 1, ca[a]));
        for (a = 100; 0 < a; a--) this.fixed[a - 1] = r(a), 0 != t(a) && 0 >= r(a) && p(this, a, t(a));
        this.ja = this.ia = 0;
        for (a = 50; a <= this.ya; a++) da[a - 1] != h && (u(this, a, -1), this.ia++);
        for (a = 0; a < this.G.length; a++) this.G[a] = l, this.H[a] = 0;
        this.keys = v("KEYS", 1);
        this.q =
            v("LAMP", 1);
        this.A = v("GRATE", 1);
        this.ca = v("CAGE", 1);
        this.I = v("ROD", 1);
        this.J = this.I + 1;
        this.Va = v("STEPS", 1);
        this.j = v("BIRD", 1);
        this.L = v("DOOR", 1);
        this.qa = v("PILLO", 1);
        this.t = v("SNAKE", 1);
        this.pa = v("FISSU", 1);
        this.Wa = v("TABLE", 1);
        this.X = v("CLAM", 1);
        this.s = v("OYSTE", 1);
        this.Ia = v("MAGAZ", 1);
        this.O = v("DWARF", 1);
        this.lb = v("KNIFE", 1);
        this.Z = v("FOOD", 1);
        this.m = v("BOTTL", 1);
        this.F = v("WATER", 1);
        this.ga = v("OIL", 1);
        this.C = v("PLANT", 1);
        this.Ja = this.C + 1;
        this.K = v("AXE", 1);
        this.Aa = v("MIRRO", 1);
        this.n = v("DRAGO", 1);
        this.sa = v("CHASM", 1);
        this.g = v("TROLL", 1);
        this.ba = this.g + 1;
        this.h = v("BEAR", 1);
        this.za = v("MESSA", 1);
        this.qb = v("VENDI", 1);
        this.V = v("BATTE", 1);
        this.nb = v("GOLD", 1);
        this.eb = v("COINS", 1);
        this.oa = v("CHEST", 1);
        this.P = v("EGGS", 1);
        this.pb = v("TRIDE", 1);
        this.r = v("VASE", 1);
        this.va = v("EMERA", 1);
        this.Ca = v("PYRAM", 1);
        this.ob = v("PEARL", 1);
        this.Ka = v("RUG", 1);
        this.p = v("CHAIN", 1);
        this.back = v("BACK", 0);
        this.mb = v("LOOK", 0);
        this.hb = v("CAVE", 0);
        this.Xa = v("NULL", 0);
        this.kb = v("ENTRA", 0);
        this.jb = v("DEPRE", 0);
        this.Ua = v("SAY",
            2);
        this.Sa = v("LOCK", 2);
        this.rb = v("THROW", 2);
        this.find = v("FIND", 2);
        this.fb = v("INVEN", 2);
        this.R = 114;
        this.cb = 140;
        this.M = [l, l, l, l, l, l];
        this.w = 0;
        this.l = [19, 27, 33, 44, 64, this.R];
        this.B = [0, 0, 0, 0, 0, 0];
        this.ib = 18;
        this.Ea = 0;
        this.Ha = l;
        this.detail = this.aa = this.Ra = 0;
        this.Pa = 5;
        for (a = 0; 4 > a; a++) ea[2 * a + 81] != h && (this.Ta = a + 1);
        this.na = this.da = this.Qa = this.ea = this.fa = 0;
        this.ta = 30;
        this.Ga = 50;
        this.La = this.xa = this.closed = this.Ba = this.Y = l
    },
    start: function () {
        m.MOTD && this.e(m.MOTD);
        if (fa(this)) return w(this);
        this.i = this.b = this.T =
            1;
        this.v = 330;
        this.bb = l;
        x(this, 65, 1, 0, function (a) {
            a && (this.G[2] = g, this.v = 1E3);
            w(this)
        })
    },
    Na: function (a) {
        for (var b = 0, c = 0, d = 50; d <= this.ya; d++)
            if (da[d - 1] != h) {
                var f = 12;
                d == this.oa && (f = 14);
                d > this.oa && (f = 16);
                0 <= y(this, d) && (b += 2);
                3 == this.k[d - 1] && 0 == y(this, d) && (b = b + f - 2);
                c += f
            } b += 10 * (this.Ta - this.fa);
        c += 10 * this.Ta;
        !a && !this.xa && (b += 4);
        0 != this.w && (b += 25);
        c = c + 4 + 25;
        this.Y && (b += 25);
        c += 25;
        if (this.closed) switch (this.na) {
        case 0:
            b += 10;
            break;
        case 135:
            b += 25;
            break;
        case 134:
            b += 30;
            break;
        case 133:
            b += 45
        }
        c += 45;
        180 == this.k[this.Ia -
            1] && b++;
        c++;
        b += 2;
        c += 2;
        for (d = 0; d < this.G.length; d++) this.G[d] && (b -= n[d][1]);
        if (0 == arguments.length) return b;
        a ? this.e(" If you were to quit now, you would score ", b, " out of a possible ", c, ".") : this.e(" You scored ", b, " out of a possible ", c, ", using ", this.Ea, " turns.");
        return b
    },
    speak: function (a) {
        a == h || ">$<" == a || (this.Fa && this.e(), this.e(a))
    },
    d: function (a) {
        this.speak(ea[a - 1])
    },
    move: function (a, b) {
        var c;
        c = 100 < a ? this.fixed[a - 101] : this.k[a - 1];
        0 < c && 300 >= c && (ga(this, a, c), p(this, a, b))
    },
    put: function (a, b, c) {
        this.move(a,
            b);
        return -1 - c
    },
    $a: "MESSAGE LINE > 70 CHARACTERS;NULL LINE IN MESSAGE;TOO MANY WORDS OF MESSAGES;TOO MANY TRAVEL OPTIONS;TOO MANY VOCABULARY WORDS;REQUIRED VOCABULARY WORD NOT FOUND;TOO MANY RTEXT OR MTEXT MESSAGES;TOO MANY HINTS;LOCATION HAS COND BIT BEING SET TWICE;INVALID SECTION NUMBER IN DATABASE".split(";"),
    ab: "SPECIAL TRAVEL (500>L>300) EXCEEDS GOTO LIST;RAN OFF END OF VOCABULARY TABLE;VOCABULARY TYPE (N/1000) NOT BETWEEN 0 AND 3;INTRANSITIVE ACTION VERB EXCEEDS GOTO LIST;TRANSITIVE ACTION VERB EXCEEDS GOTO LIST;CONDITIONAL TRAVEL ENTRY WITH NO ALTERNATIVE;LOCATION HAS NO TRAVEL ENTRIES;HINT NUMBER EXCEEDS GOTO LIST;INVALID MONTH RETURNED BY DATE FUNCTION".split(";")
};

function z(a, b) {
    e(Error("Fatal error: " + (0 <= b && b < a.$a.length ? a.$a[b] : 20 <= b && b < a.ab.length + 20 ? a.ab[b - 20] : "Invalid error number " + b)))
}

function B(a) {
    return Math.floor(Math.random() * a)
}

function p(a, b, c) {
    100 >= b ? (-1 == a.k[b - 1] && a.ea--, a.k[b - 1] = c) : a.fixed[b - 101] = c;
    0 < c && (a.link[b - 1] = a.u[c - 1], a.u[c - 1] = b)
}

function ga(a, b, c) {
    if (100 >= b) {
        if (-1 == a.k[b - 1]) return;
        a.k[b - 1] = -1;
        a.ea++
    }
    if (a.u[c - 1] == b) a.u[c - 1] = a.link[b - 1];
    else {
        for (temp = a.u[c - 1]; a.link[temp - 1] != b;) temp = a.link[temp - 1];
        a.link[temp - 1] = a.link[b - 1]
    }
}

function C(a, b) {
    var c = a.fixed[b - 1];
    a.move(b, a.k[b - 1]);
    a.move(b + 100, c)
}

function v(a, b) {
    a = a.toUpperCase();
    5 < a.length && (a = a.substr(0, 5));
    if (0 > b) {
        for (var c = 0; c < ha.length; c++) {
            var d = ha[c][a];
            if (d) return d
        }
        return -1
    }
    b >= ha.length && e(Error("Bad init value " + b));
    (d = ha[b][a]) || e(Error("Missing required word " + a + " (I think)"));
    return d ? d % 1E3 : -1
}

function ia(a, b, c, d, f, q) {
    b != h && 0 != b && f.call(a, b);
    "function" != typeof q && e(Error("Missing callback for yesx"));
    cb = function (b) {
        b = b.toUpperCase();
        "YES" == b || "Y" == b ? (c != h && 0 != c && f.call(a, c), q.call(a, g)) : "NO" == b || "N" == b ? (d != h && 0 != d && f.call(a, d), q.call(a, l)) : (a.e(" Please answer the question."), D(a, cb))
    };
    D(a, cb)
}

function x(a, b, c, d, f) {
    ia(a, b, c, d, a.d, f)
}

function D(a, b) {
    a.Fa && a.e();
    a.ra = b
}

function E(a, b, c) {
    a.speak(da[b - 1][c + 1])
}

function F(a) {
    var b = a.Na(l),
        c;
    for (c = 0; c < G.length && !(G[c].Q >= b); c++);
    c >= G.length ? a.e(" You just went off my scale!!") : (a.speak(G[c].message), c + 1 < G.length ? (b = G[c].Q + 1 - b, a.e(" To achieve the next higher rating, you need ", b, " more point", 1 == b ? "." : "s.")) : a.e(" To achieve the next higher rating would be a neat trick!\n Congratulations!!"));
    a.Oa = g;
    b = document.createElement("div");
    b.className = "gameOver";
    b.appendChild(document.createTextNode("Your game has ended. If you want, you can "));
    c = document.createElement("a");
    c.setAttribute("href", "#restart");
    c.onclick = function (a) {
        return function () {
            try {
                a.ka.innerHTML = "", a.Za.style.display = "block", a.Oa = l, a.z.focus(), a.gb(), a.start()
            } catch (b) {
                try {
                    a.e("Whoops, an error occurred while setting up a new game: ", b, "\nGuess you'll just have to reload and try again.  Sorry.")
                } catch (c) {
                    alert("It just isn't your day, not only did an error occur while restarting the game,\n(" + b + "),\nan error occurred while trying to tell you about it!\n(" + c + ")")
                }
            }
            return l
        }
    }(a);
    c.appendChild(document.createTextNode("start a new game"));
    b.appendChild(c);
    b.appendChild(document.createTextNode("."));
    a.ka.appendChild(b);
    a.Za.style.display = "none";
    b.scrollIntoView()
}

function ja(a) {
    a.d(136);
    F(a)
}

function ka(a, b) {
    switch (b) {
    case 3:
        if (0 == y(a, a.A) && !H(a, a.keys)) return g;
        a.H[3] = 0;
        return l;
    case 4:
        return H(a, a.j) && a.f(a.I) && a.a == a.j;
    case 5:
        if (H(a, a.t) && !H(a, a.j)) return g;
        a.H[5] = 0;
        return l;
    case 6:
        if (0 == a.u[a.b - 1] && 0 == a.u[a.T - 1] && 0 == a.u[a.ha - 1] && 1 < a.ea) return g;
        a.H[6] = 0;
        return l;
    case 7:
        if (-1 != y(a, a.va) && -1 == y(a, a.Ca)) return g;
        a.H[7] = 0;
        return l;
    case 8:
        return g;
    default:
        z(a, 27)
    }
}

function fa(a) {
    var b = location.hash;
    if (1 >= b.length) return l;
    "#" == b.charAt(0) && (b = b.substring(1));
    if (1 > b.length) return l;
    try {
        for (var c = b.split(/[&;]/), b = {}, d = 0; d < c.length; d++) {
            var f = c[d].indexOf("="),
                q, s = "";
            0 > f ? q = c[d] : (q = c[d].substr(0, f), s = c[d].substr(f + 1));
            console.log(" [" + q + "]=[" + s + "]");
            b[q] = s
        }
        "_" in b ? "0" != b._ && e(Error('Unknown version "' + b._ + '", cannot restore this game.')) : e(Error("Missing version marker."));
        for (s in I) q = I[s][1], !q in b && e(Error("State is missing " + q + " (" + s + ") which is required to restore it")),
            a[s] = I[s][0].ua(b[q]);
        a.i = a.b;
        return g
    } catch (A) {
        return console.log(A), a.speak("Error restoring game state: " + A.message), l
    }
}

function la(a, b) {
    if (J(a)) return a.e(" I see no " + b + " here."), K(a);
    a.a == a.Ia && (a.c = 190);
    a.a == a.Wa && (a.c = 196);
    a.a == a.za && (a.c = 191);
    if (a.a == a.s && a.f(a.s))
        if (a.G[1]) a.c = 194;
        else return x(a, 192, 193, 54, function (a) {
            this.G[1] = a;
            return K(this)
        });
    return L(a, a.c)
}

function ma(a, b) {
    var c = v(b, 3),
        d = 42;
    if (a.da == 1 - c) {
        a.da = c;
        if (4 != c) return L(a, 54);
        a.da = 0;
        if (a.k[a.P - 1] == t(a.P) || a.f(a.P) && a.b == t(a.P)) return L(a, d);
        0 == a.k[a.P - 1] && (0 == a.k[a.g - 1] && 0 == y(a, a.g)) && u(a, a.g, 1);
        c = 2;
        H(a, a.P) && (c = 1);
        a.b == t(a.P) && (c = 0);
        a.move(a.P, t(a.P));
        E(a, a.P, c);
        return K(a)
    }
    0 != a.da && (d = 151);
    return L(a, d)
}

function na(a) {
    a.Na(g);
    return x(a, 143, 54, 54, function (a) {
        return (this.xa = a) ? F(this) : K(this)
    })
}

function oa(a) {
    if (0 > y(a, a.J) || !a.closed) return L(a, a.c);
    a.na = 133;
    115 == a.b && (a.na = 134);
    H(a, a.J) && (a.na = 135);
    a.d(a.na);
    return F(a)
}

function pa(a) {
    if (a.a == a.r) {
        var b = 29;
        0 == M(a, a.b) && (b = 144);
        if (0 == M(a, a.b) || !a.f(a.r)) return L(a, b);
        a.d(145);
        a.b == t(a.qa) ? a.d(54) : N(a, a.qa) ? u(a, a.r, 0) : (u(a, a.r, 2), a.fixed[a.r - 1] = -1);
        p(a, a.r, a.b);
        return K(a)
    }
    if (0 != a.a && a.a != a.m) return L(a, a.c);
    if (0 == a.a && !H(a, a.m)) return O(a);
    b = 107;
    0 == M(a, a.b) && (b = 106);
    0 != P(a) && (b = 105);
    if (107 == b) {
        u(a, a.m, Q(a.b) & 2);
        var c = P(a);
        a.f(a.m) && (a.k[c - 1] = -1);
        c == a.ga && (b = 108)
    }
    return L(a, b)
}

function qa(a) {
    if (a.a == a.j) return L(a, 100);
    if (a.a == a.t || a.a == a.n || a.a == a.g) {
        var b = 102;
        a.a == a.n && 0 != y(a, a.n) && (b = 110);
        a.a == a.g && (b = 182);
        a.a == a.t && (!a.closed && H(a, a.j)) && (b = 101, a.move(a.j, 0), u(a, a.j, 0), a.ja++);
        return L(a, b)
    }
    if (a.a == a.O) return H(a, a.Z) ? (a.w++, L(a, 103)) : L(a, a.c);
    if (a.a == a.h) {
        0 == y(a, a.h) && (a.c = 102);
        3 == y(a, a.h) && (a.c = 110);
        if (!H(a, a.Z)) return L(a, a.c);
        a.move(a.Z, 0);
        u(a, a.h, 1);
        a.fixed[a.K - 1] = 0;
        u(a, a.K, 0);
        return L(a, 168)
    }
    return L(a, 14)
}

function ra(a) {
    x(a, 22, 54, 54, function (a) {
        a ? (this.xa = g, F(this)) : K(this)
    })
}

function sa(a, b) {
    a.d(b);
    p(a, a.K, a.b);
    return R(a, a.Xa)
}

function ta(a) {
    a.f(a.J) && (a.a == a.I && !a.f(a.I)) && (a.a = a.J);
    if (!a.f(a.a)) return L(a, a.c);
    if (50 <= a.a && a.a <= a.ya && N(a, a.g)) return p(a, a.a, 0), a.move(a.g, 0), a.move(a.g + 100, 0), p(a, a.ba, t(a.g)), p(a, a.ba + 100, r(a.g)), C(a, a.sa), L(a, 159);
    if (a.a == a.Z && H(a, a.h)) return a.a = a.h, qa(a);
    if (a.a != a.K) return ua(a);
    for (var b = 0; 5 > b; b++)
        if (a.l[b] == a.b) {
            if (0 == B(3)) return sa(a, 48);
            a.M[b] = l;
            a.l[b] = 0;
            a.Qa++;
            return sa(a, 1 == a.Qa ? 149 : 47)
        } if (N(a, a.n) && 0 == y(a, a.n)) return sa(a, 152);
    if (N(a, a.g)) return sa(a, 158);
    if (H(a, a.h) && 0 == y(a,
            a.h)) return p(a, a.K, a.b), a.fixed[a.K - 1] = -1, u(a, a.K, 1), C(a, a.h), L(a, 164);
    a.a = 0;
    return va(a)
}

function wa(a) {
    if (0 == a.a && M(a, a.b) != a.F && (P(a) != a.F || !H(a, a.m))) return O(a);
    0 != a.a && a.a != a.F && (a.c = 110);
    110 != a.c && (P(a) == a.F && H(a, a.m)) && (u(a, a.m, 1), a.k[a.F - 1] = 0, a.c = 74);
    return L(a, a.c)
}

function xa(a) {
    if (a.a == a.m || 0 == a.a) a.a = P(a);
    if (0 == a.a) return O(a);
    if (!a.f(a.a)) return L(a, a.c);
    if (a.a != a.ga && a.a != a.F) return L(a, 78);
    u(a, a.m, 1);
    a.k[a.a - 1] = 0;
    if (!N(a, a.C) && !N(a, a.L)) return L(a, 77);
    if (N(a, a.L)) return u(a, a.L, 0), a.a == a.ga && u(a, a.L, 1), L(a, 113 + y(a, a.L));
    if (a.a != a.F) return L(a, 112);
    E(a, a.C, y(a, a.C) + 1);
    u(a, a.C, (y(a, a.C) + 2) % 6);
    u(a, a.Ja, Math.floor(y(a, a.C) / 2));
    return R(a, a.Xa)
}

function va(a) {
    var b;
    for (b = 0; 5 > b && !(a.l[b] == a.b && 2 <= a.w); b++);
    if (0 == a.a) {
        5 > b && (a.a = a.O);
        H(a, a.t) && (a.a = 100 * a.a + a.t);
        N(a, a.n) && 0 == y(a, a.n) && (a.a = 100 * a.a + a.n);
        N(a, a.g) && (a.a = 100 * a.a + a.g);
        H(a, a.h) && 0 == y(a, a.h) && (a.a = 100 * a.a + a.h);
        if (100 < a.a) return O(a);
        if (0 == a.a) {
            H(a, a.j) && a.o != a.rb && (a.a = a.j);
            if (H(a, a.X) || H(a, a.s)) a.a = 100 * a.a + a.X;
            if (100 < a.a) return O(a)
        }
    }
    if (a.a == a.j) {
        if (a.closed) return L(a, 137);
        a.move(a.j, 0);
        u(a, a.j, 0);
        a.k[a.t - 1] == t(a.t) && a.ja++;
        a.c = 45
    }
    0 == a.a && (a.c = 44);
    if (a.a == a.X || a.a == a.s) a.c = 150;
    a.a ==
        a.t && (a.c = 46);
    a.a == a.O && (a.c = 49);
    if (a.a == a.O && a.closed) return ja(a);
    a.a == a.n && (a.c = 167);
    a.a == a.g && (a.c = 157);
    a.a == a.h && (a.c = 165 + (y(a, a.h) + 1 >> 1));
    if (a.a != a.n || 0 != y(a, a.n)) return L(a, a.c);
    a.d(49);
    a.o = 0;
    a.a = 0;
    return D(a, function (b) {
        b = b.toUpperCase();
        if ("Y" != b && "YES" != b) return aa(a, b);
        E(a, a.n, 1);
        u(a, a.n, 2);
        u(a, a.Ka, 0);
        b = t(a.n) + r(a.n) >> 1;
        a.move(a.n + 100, -1);
        a.move(a.Ka + 100, 0);
        a.move(a.n, b);
        a.move(a.Ka, b);
        for (var d = 1; 100 >= d; d++)(a.k[d - 1] == t(a.n) || a.k[d - 1] == r(a.n)) && a.move(d, b);
        a.b = b;
        return R(a, b)
    })
}

function ya(a) {
    if (!H(a, a.q)) return L(a, a.c);
    u(a, a.q, 0);
    a.d(40);
    J(a) && a.d(16);
    K(a)
}

function za(a) {
    if (!H(a, a.q)) return L(a, a.c);
    if (0 > a.v) return L(a, 184);
    u(a, a.q, 1);
    a.d(39);
    a.Ma ? S(a) : K(a)
}

function Aa(a) {
    if (a.a == a.X || a.a == a.s) {
        var b = a.a == a.s ? 1 : 0,
            c = 124 + b;
        a.f(a.a) && (c = 120 + b);
        a.f(a.pb) || (c = 122 + b);
        a.o == a.Sa && (c = 61);
        124 == c && (a.move(a.X, 0), p(a, a.s, a.b), p(a, a.ob, 105));
        return L(a, c)
    }
    a.a == a.L && (a.c = 111);
    a.a == a.L && 1 == y(a, a.L) && (a.c = 54);
    a.a == a.ca && (a.c = 32);
    a.a == a.keys && (a.c = 55);
    if (a.a == a.A || a.a == a.p) a.c = 31;
    if (31 != a.c || !H(a, a.keys)) return L(a, a.c);
    if (a.a == a.p) return a.o == a.Sa ? (c = 172, 0 != y(a, a.p) && (c = 34), a.b != t(a.p) && (c = 173), 172 == c && (u(a, a.p, 2), a.f(a.p) && p(a, a.p, a.b), a.fixed[a.p - 1] = -1)) : (c = 171, 0 ==
        y(a, a.h) && (c = 41), 0 == y(a, a.p) && (c = 37), 171 == c && (u(a, a.p, 0), a.fixed[a.p - 1] = 0, 3 != y(a, a.h) && u(a, a.h, 2), a.fixed[a.h - 1] = 2 - y(a, a.h))), L(a, c);
    if (!a.Y) return b = 34 + y(a, a.A), u(a, a.A, 1), a.o == a.Sa && u(a, a.A, 0), b += 2 * y(a, a.A), L(a, b);
    a.Ba || (a.Ga = 15, a.Ba = g);
    return L(a, 130)
}

function ua(a) {
    a.f(a.J) && (a.a == a.I && !a.f(rod)) && (a.a = a.J);
    if (!a.f(a.a)) return L(a, a.c);
    if (a.a == a.j && H(a, a.t)) {
        a.d(30);
        if (a.closed) return ja(a);
        a.move(a.t, 0);
        u(a, a.t, 1)
    } else {
        if (a.a == a.eb && H(a, a.qb)) return a.move(a.eb, 0), p(a, a.V, a.b), E(a, a.V, 0), K(a);
        if (a.a == a.j && N(a, a.n) && 0 != y(a, a.n)) return a.d(154), a.move(a.j, 0), u(a, a.j, 0), a.k[a.t - 1] == t(a.t) && a.ja++, K(a);
        a.a == a.h && N(a, a.g) ? (a.d(163), a.move(a.g, 0), a.move(a.g + 100, 0), a.move(a.ba, t(a.g)), a.move(a.ba + 100, r(a.g)), C(a, a.sa), u(a, a.g, 2)) : a.a == a.r && (a.b == t(a.qa) ?
            a.d(54) : (u(a, a.r, N(a, a.qa) ? 0 : 2), E(a, a.r, y(a, a.r) + 1), 0 != y(a, a.r) && (a.fixed[a.r - 1] = -1)))
    }
    var b = P(a);
    b == a.a && (a.a = a.m);
    a.a == a.m && 0 != b && (a.k[b - 1] = 0);
    a.a == a.ca && 0 != y(a, a.j) && p(a, a.j, a.b);
    a.a == a.j && u(a, a.j, 0);
    p(a, a.a, a.b);
    return K(a)
}

function Ba(a) {
    if (a.f(a.a)) return L(a, a.c);
    a.c = 25;
    a.a == a.C && 0 >= y(a, a.C) && (a.c = 115);
    a.a == a.h && 1 == y(a, a.h) && (a.c = 169);
    a.a == a.p && 0 != y(a, a.h) && (a.c = 170);
    if (0 != a.fixed[a.a - 1]) return L(a, a.c);
    if (a.a == a.F || a.a == a.ga)
        if (a.a = a.m, !(H(a, a.m) && P(a) == a.a)) {
            if (a.f(a.m) && 1 == y(a, a.m)) return pa(a);
            1 != y(a, a.m) && (a.c = 105);
            a.f(a.m) || (a.c = 104);
            return L(a, a.c)
        } if (7 <= a.ea) return L(a, 92);
    if (a.a == a.j && 0 == y(a, a.j)) {
        if (a.f(a.I)) return L(a, 26);
        if (!a.f(a.ca)) return L(a, 27);
        u(a, a.j, 1)
    }(a.a == a.j || a.a == a.ca) && 0 != y(a, a.j) && ga(a,
        a.j + a.ca - a.a, a.b);
    ga(a, a.a, a.b);
    if (a.a == a.m) {
        var b = P(a);
        0 != b && (a.k[b - 1] = -1)
    }
    return L(a, 54)
}

function O(a) {
    a.e("What?");
    a.a = 0;
    T(a, 0)
}

function Ca(a) {
    if (a.Y) return a.d(131), a.fa++, F(a);
    x(a, 81 + 2 * a.fa, 82 + 2 * a.fa, 54, function (a) {
        this.fa++;
        if (this.fa >= this.Ta || !a) return F(this);
        this.k[this.F - 1] = 0;
        this.k[this.ga - 1] = 0;
        this.f(this.q) && u(this, this.q, 0);
        for (a = 100; 1 <= a; a--)
            if (this.f(a)) {
                var c = this.ha;
                a == this.q && (c = 1);
                p(this, a, c)
            } this.T = this.b = 3;
        S(this)
    })
}

function Da(a, b, c) {
    for (var d;;) {
        d = Math.abs(U[c]);
        var f = d % 1E3;
        if (1 == f || f == b) break;
        if (0 > U[c]) {
            c = 12;
            43 <= b && 50 >= b && (c = 9);
            if (29 == b || 30 == b) c = 9;
            if (7 == b || 36 == b || 37 == b) c = 10;
            if (11 == b || 19 == b) c = 11;
            if (a.o == a.find || a.o == a.fb) c = 59;
            if (62 == b || 65 == b) c = 42;
            17 == b && (c = 80);
            a.d(c);
            return w(a)
        }
        c++
    }
    for (d = Math.floor(d / 1E3);;) {
        a.i = Math.floor(d / 1E3);
        b = a.i % 100;
        if (300 >= a.i)
            if (100 >= a.i) {
                if (0 == a.i || B(100) < a.i) break
            } else {
                if (a.f(b) || 200 < a.i && N(a, b))
                    if (302 == d % 1E3) p(a, a.va, a.b);
                    else break
            }
        else if (y(a, b) != Math.floor(a.i / 100) - 3) break;
        for (;;)
            if (0 > U[c] && z(a, 25), c++, a.i = Math.floor(Math.abs(U[c]) / 1E3), a.i != d) {
                d = a.i;
                break
            }
    }
    a.i = d % 1E3;
    if (300 >= a.i) return w(a);
    if (500 >= a.i) {
        switch (a.i) {
        case 301:
            a.i = 199 - a.b;
            if (0 == a.ea || 1 == a.ea && a.f(a.va)) return w(a);
            a.i = a.b;
            a.d(117);
            return w(a);
        case 302:
            e(Error("Oops, special travel 302 dropped through."));
        case 303:
            if (1 == y(a, a.g)) return E(a, a.g, 1), u(a, a.g, 0), a.move(a.ba, 0), a.move(a.ba + 100, 0), a.move(a.g, t(a.g)), a.move(a.g + 100, r(a.g)), C(a, a.sa), a.i = a.b, w(a);
            a.i = t(a.g) + r(a.g) - a.b;
            0 == y(a, a.g) && u(a, a.g, 1);
            if (!a.f(a.h)) return w(a);
            a.d(162);
            u(a, a.sa, 1);
            u(a, a.g, 2);
            p(a, a.h, a.i);
            a.fixed[a.h - 1] = -1;
            u(a, a.h, 3);
            0 > y(a, a.sb) && a.ja++;
            a.ha = a.i;
            return Ca(a)
        }
        z(a, 20)
    }
    a.d(a.i - 500);
    a.i = a.b;
    return w(a)
}

function R(a, b) {
    (1 > a.b || a.b >= V.length) && z(a, 26);
    var c = V[a.b - 1];
    a.i = a.b;
    c == h && z(a, 26);
    if (b == a.Xa) return w(a);
    if (b == a.back) {
        b = a.T;
        2 == Q(b) && (b = a.ha);
        a.ha = a.T;
        a.T = a.b;
        var d = 0;
        if (b == a.b) return a.d(91), w(a);
        for (;;) {
            var f = Math.floor(Math.abs(U[c]) / 1E3) % 1E3;
            if (f == b) return Da(a, Math.abs(U[c]) % 1E3, V[a.b - 1]);
            if (300 >= f) {
                var q = V[f - 1];
                2 == Q(f) && Math.floor(Math.abs(U[q]) / 1E3) % 1E3 == b && (d = c)
            }
            if (0 > U[c]) return c = d, 0 == c ? (a.d(140), w(a)) : Da(a, Math.abs(U[c]) % 1E3, V[a.b - 1]);
            c++
        }
    } else {
        if (b == a.mb) return 3 > a.detail && a.d(15),
            a.detail++, a.Ma = l, a.ma[a.b - 1] = 0, w(a);
        if (b == a.hb) return a.d(8 > a.b ? 57 : 58), w(a)
    }
    a.ha = a.T;
    a.T = a.b;
    Da(a, b, c)
}

function Ea(a, b, c, d) {
    if (b == a.O)
        for (var f = 0; 5 > f; f++)
            if (a.l[f] == a.b && 2 <= a.w) return g;
    if (P(a) == b && H(a, a.m) || b == M(a, a.b)) return g;
    if (a.a == a.C && N(a, a.Ja) && 0 != y(a, a.Ja)) return a.a = a.Ja, g;
    if (a.a == a.lb && a.aa == a.b) return a.aa = -1, L(a, 116), l;
    if (a.a == a.I && H(a, a.J)) return a.a = a.J, g;
    if ((a.o == a.find || a.o == a.fb) && d == h) return g;
    a.e(" I see no " + c + " here.");
    K(a);
    return l
}

function Fa(a, b, c, d) {
    a.a = b;
    if (a.fixed[b - 1] != a.b && !H(a, b)) {
        if (b == a.A) {
            if (1 == a.b || 4 == a.b || 7 == a.b) b = a.jb;
            9 < a.b && 15 > a.b && (b = a.kb);
            if (b != a.A) return R(a, b)
        }
        if (!Ea(a, b, c, d)) return
    }
    if (d != h) return Ga(a, d, h);
    if (0 != a.o) return Ha(a, c, d);
    a.e("What do you want to do with the " + c + "?");
    return T(a, 0)
}

function Ha(a, b, c) {
    switch (a.o) {
    case 1:
        return Ba(a);
    case 2:
        return ua(a);
    case 3:
        return c != h && (b = c), c = v(b, -1), 62 == c || 65 == c || 71 == c || 2025 == c ? (a.a = 0, a = Ga(a, b, h)) : (a.e(" Okay, " + b), a = K(a)), a;
    case 4:
    case 6:
        return Aa(a);
    case 5:
        return L(a, 54);
    case 7:
        return za(a);
    case 8:
        return ya(a);
    case 9:
        if (!a.f(a.a) && (a.a != a.I || !a.f(a.J))) a.c = 29;
        a.a != a.I || !N(a, a.pa) || !a.f(a.a) || a.Y ? a = L(a, a.c) : (u(a, a.pa, 1 - y(a, a.pa)), E(a, a.pa, 2 - y(a, a.pa)), a = K(a));
        return a;
    case 10:
    case 11:
    case 18:
    case 24:
    case 25:
    case 26:
    case 30:
    case 31:
        return L(a,
            a.c);
    case 12:
        return va(a);
    case 13:
        return xa(a);
    case 14:
        return a.a == a.Z ? (a.move(a.Z, 0), a = L(a, 72)) : a = a.a == a.j || a.a == a.t || a.a == a.X || a.a == a.s || a.a == a.O || a.a == a.n || a.a == a.g || a.a == a.h ? L(a, 71) : L(a, a.c), a;
    case 15:
        return wa(a);
    case 16:
        return a.a != a.q && (a.c = 76), L(a, a.c);
    case 17:
        return ta(a);
    case 19:
    case 20:
        if (N(a, a.a) || P(a) == a.a && N(a, a.m) || a.o == M(a, a.b)) a.c = 94;
        for (c = 0; 5 > c; c++) a.l[c] == a.b && (2 <= a.w && a.a == a.O) && (a.c = 94);
        a.closed && (a.c = 138);
        a.f(a.a) && (a.c = 24);
        L(a, a.c);
        break;
    case 21:
        return qa(a);
    case 22:
        return pa(a);
    case 23:
        return oa(a);
    case 27:
        return la(a, b);
    case 28:
        return a.a == a.Aa && (a.c = 148), a.a == a.r && 0 == y(a, a.r) ? (a.f(a.r) && p(a, a.r, a.b), u(a, a.r, 2), a.fixed[a.r - 1] = -1, a = L(a, 198)) : a.a != a.Aa || !a.closed ? a = L(a, a.c) : (a.d(197), a = ja(a)), a;
    case 29:
        return a.a == a.O && a.closed ? (a.d(199), a = ja(a)) : a = L(a, a.c), a;
    default:
        z(a, 24)
    }
}

function Ia(a, b) {
    switch (a.o) {
    case 1:
        var c;
        a: if (c = a.u[a.b - 1], 0 == c || 0 != a.link[c - 1]) c = O(a);
            else {
                for (var d = 0; 5 > d; d++)
                    if (a.l[d] == a.b && 2 <= a.w) {
                        c = O(a);
                        break a
                    } a.a = c;
                c = Ba(a)
            }
        return c;
    case 2:
    case 3:
    case 9:
    case 10:
    case 16:
    case 17:
    case 19:
    case 21:
    case 28:
    case 29:
        return O(a);
    case 4:
    case 6:
        return a.c = 28, H(a, a.X) && (a.a = a.X), H(a, a.s) && (a.a = a.s), N(a, a.L) && (a.a = a.L), N(a, a.A) && (a.a = a.A), 0 != a.a && H(a, a.p) ? c = O(a) : (H(a, a.p) && (a.a = a.p), 0 == a.a ? c = L(a, a.c) : (Aa(a), c = void 0)), c;
    case 5:
        return L(a, 54);
    case 7:
        return za(a);
    case 8:
        return ya(a);
    case 11:
        return L(a, a.c);
    case 12:
        return va(a);
    case 13:
        return xa(a);
    case 14:
        return H(a, a.Z) ? (a.move(a.Z, 0), c = L(a, 72)) : c = O(a), c;
    case 15:
        return wa(a);
    case 18:
        return ra(a);
    case 20:
        c = 98;
        for (d = 1; 100 >= d; d++) d != a.h && a.f(d) && (98 == c && a.d(99), a.Fa = l, E(a, d, -1), a.Fa = g, c = 0);
        a.f(a.h) && (c = 141);
        return L(a, c);
    case 22:
        return pa(a);
    case 23:
        return oa(a);
    case 24:
        return na(a);
    case 25:
        return ma(a, b);
    case 26:
        return a.Pa = 1E4, a.detail = 3, L(a, 156);
    case 27:
        return H(a, a.Ia) && (a.a = a.Ia), H(a, a.Wa) && (a.a = 100 * a.a + a.Wa), H(a, a.za) && (a.a =
            100 * a.a + a.message), a.closed && a.f(a.s) && (a.a = a.s), 100 < a.a || 0 == a.a || J(a) ? c = O(a) : (la(a, b), c = void 0), c;
    case 30:
        a.speak(' Warning: suspending the game is currently still an "alpha" feature\n and may not work entirely correctly. Future versions of the game may\n not support reloading older saves. Sorry!\n\n Bookmark this like to save your progress:\n');
        c = document.createElement("div");
        for (var f = 0; f < a.la.length; f++) a.la[f] == h && (a.la[f] = 0);
        f = [];
        for (d in I) f[I[d][1]] = I[d][0].wa(a[d]);
        var q = [],
            s;
        for (s in f) d =
            f[s], q.push(encodeURIComponent(s) + "=" + encodeURIComponent("object" == typeof d ? JSON.stringify(d) : d));
        c.innerHTML = ' <a href="#' + q.join("&") + '">Adventure! ' + a.Ea + " turns, " + a.Na() + " points</a>";
        a.ka.appendChild(c);
        return K(a);
    case 31:
        return a.speak("COLOSSAL CAVE IS OPEN TO REGULAR ADVENTURERS AT THE FOLLOWING HOURS:"), a.e("    Since this is a JavaScript application running on your own\n    computer, the cave is always open.  But thanks for asking.\n"), K(a);
    default:
        z(a, 23)
    }
}

function Ga(a, b, c) {
    var d = v(b, -1);
    if (-1 == d) b = 60, 20 > B(100) && (b = 61), 20 > B(100) && (b = 13), a.d(b), T(a, 0);
    else {
        var f = d % 1E3;
        switch (Math.floor(d / 1E3)) {
        case 0:
            R(a, f);
            break;
        case 1:
            return Fa(a, f, b, c);
        case 2:
            return a.o = f, a.c = Ja[a.o - 1], c != h && a.o != a.Ua ? a = Ga(a, c, h) : (a.o == a.Ua && (a.a = c == h ? 0 : -1), a = 0 != a.a ? Ha(a, b, c) : Ia(a, b)), a;
        case 3:
            return a.d(f), K(a);
        default:
            z(a, 22)
        }
    }
}

function aa(a, b) {
    var c = /^(\S+)(?:\s+(\S+))?/.exec(b);
    if (c == h) D(a, a.Ya);
    else {
        var d = c[1].toUpperCase(),
            c = c[2];
        c != h && (c = c.toUpperCase());
        a.da = Math.min(0, -a.da);
        if (0 == a.Ea && "MAGIC" == d && "MODE" == c) return a.e("Fine, you're a wizard."), a.La = g, K(a);
        a.Ea++;
        if ("ROLL" == d && ("DICE" == c || "DIE" == c)) return a.e("You roll a " + B(1E3) + "."), K(a);
        if ("SUICIDE" == d) {
            if (a.La) return a.e("Well, if you say so."), Ca(a);
            a.e("Suicide is only the answer if you are an immortal wizard.");
            return K(a)
        }
        if ("UNDO" == d) return a.bb && 25 > B(100) ?
            0 < navigator.userAgent.indexOf("Mac") ? a.speak("Try using Command-Z.") : a.speak("Try using Control-Z.") : (a.bb = g, a.speak("What do you think this is, the Inform port?")), K(a);
        if ("RESUME" == d || "RESTORE" == d || "LOAD" == d || "RELOAD" == d) return a.speak("Restore by loading the URL you were given when you saved."), K(a);
        if (a.La && "FIND" == d && "EVERYTHING" == c) {
            a.e("ATLOC table is:");
            for (d = 0; d < a.u.length; d++) a.e(d + 1 + ": " + a.u[d]);
            return K(a)
        }
        if (a.o == a.Ua) return c != h && (a.o = 0), Ha(a, d, c);
        0 == a.ia && (15 <= a.b && 33 != a.b) && a.ta--;
        if (0 == a.ta) {
            u(a, a.A, 0);
            u(a, a.pa, 0);
            for (var f = 0; 6 > f; f++) a.M[f] = l, a.l[f] = 0;
            a.move(a.g, 0);
            a.move(a.g + 100, 0);
            a.move(a.ba, t(a.g));
            a.move(a.ba + 100, r(a.g));
            C(a, a.sa);
            3 != y(a, a.h) && a.move(a.h, 0);
            u(a, a.p, 0);
            a.fixed[a.p - 1] = 0;
            u(a, a.K, 0);
            a.fixed[a.K - 1] = 0;
            a.d(129);
            a.ta = -1;
            a.Y = g;
            e(Error("GOTO 19999"))
        }
        0 > a.ta && clock2--;
        if (0 == a.Ga) {
            u(a, a.m, a.put(a.m, 115, 1));
            u(a, a.C, a.put(a.C, 115, 0));
            u(a, a.s, a.put(a.s, 115, 0));
            u(a, a.q, a.put(a.q, 115, 0));
            u(a, a.I, a.put(a.I, 115, 0));
            u(a, a.O, a.put(a.O, 115, 0));
            a.b = 115;
            a.T = 115;
            a.i = 115;
            a.put(a.A,
                116, 0);
            u(a, a.t, a.put(a.t, 116, 1));
            u(a, a.j, a.put(a.j, 116, 1));
            u(a, a.ca, a.put(a.ca, 116, 0));
            u(a, a.J, a.put(a.J, 116, 0));
            u(a, a.qa, a.put(a.qa, 116, 0));
            u(a, a.Aa, a.put(a.Aa, 115, 0));
            a.fixed[a.Aa - 1] = 116;
            for (d = 1; 100 >= d; d++) a.f(d) && a.move(d, 0);
            a.d(132);
            a.closed = g;
            return w(a)
        }
        1 == y(a, a.q) && a.v--;
        if (30 >= a.v)
            if (H(a, a.V) && 0 == y(a, a.V)) a.d(188), u(a, a.V, 1), a.f(a.V) && p(a, a.V, a.b), a.v += 2500, a.Ha = l;
            else if (0 == a.v) a.v = -1, u(a, a.q, 0), H(a, a.q) && a.d(184);
        else {
            if (0 > a.v && 8 >= a.b) return a.d(185), a.xa = g, F(a);
            !a.Ha && H(a, a.q) && (a.Ha = g,
                y(a, a.V), a.d(189))
        }
        f = 43;
        M(a, a.b) == a.F && (f = 70);
        if ("ENTER" == d && ("STREA" == c.substr(0, 5) || "WATER" == c)) return L(a, f);
        if ("ENTER" == d && c != h) return Ga(a, c, h);
        if (("WATER" == d || "OIL" == d) && ("PLANT" == c || "DOOR" == c)) N(a, v(c, 1)) && (c = "POUR");
        "WEST" == d && (a.Ra++, 10 == a.Ra && a.d(17));
        return Ga(a, d, c)
    }
}

function T(a, b) {
    for (b = Math.max(b, 3); b < n.length; b++)
        if (!a.G[b] && (0 != (Q(a.b) & 1 << b + 1) || (a.H[b] = -1), a.H[b]++, a.H[b] >= n[b][0] && ka(a, b))) return a.H[b] = 0, x(a, n[b][2], 0, 54, function (a) {
            return a ? (this.e(" I am prepared to give you a hint, but it will cost you ", n[b][1], " points."), x(this, 175, n[b][3], 54, function (a) {
                this.G[b] = a;
                this.G[b] && 30 < this.v && (this.v += 30 * n[b][1], this.H[b] = 0);
                return T(this, b)
            })) : T(this, b)
        });
    if (a.closed) {
        0 > y(a, a.s) && a.f(a.s) && E(a, a.s, 1);
        for (var c = 1; 100 >= c; c++) a.f(c) && 0 > y(a, c) && u(a, c, -1 -
            y(a, c))
    }
    a.Ma = J(a);
    0 < a.aa && a.aa != a.b && (a.aa = 0);
    D(a, a.Ya)
}

function K(a) {
    a.o = 0;
    a.a = 0;
    return T(a, 0)
}

function L(a, b) {
    a.d(b);
    return K(a)
}

function S(a) {
    if (0 == a.b) return Ca(a);
    var b = Ka[a.b - 1];
    if (0 == a.ma[a.b - 1] % a.Pa || b == h) b = La[a.b - 1];
    if (2 != Q(a.b) && J(a)) {
        if (a.Ma && 35 > B(100)) return a.d(23), a.ha = a.b, Ca(a);
        b = ea[15]
    }
    a.f(a.h) && a.d(141);
    a.speak(b);
    k = 1;
    if (2 == Q(a.b)) return R(a, k);
    33 == a.b && (25 > B(100) && !a.Y) && a.d(8);
    if (!J(a)) {
        a.ma[a.b - 1]++;
        for (b = a.u[a.b - 1]; 0 != b; b = a.link[b - 1]) {
            var c = b;
            100 < c && (c -= 100);
            if (!(c == a.Va && a.f(a.nb))) {
                if (0 > y(a, c)) {
                    if (a.closed) continue;
                    u(a, c, 0);
                    (c == a.Ka || c == a.p) && u(a, c, 1);
                    a.ia--;
                    a.ia == a.ja && 0 != a.ia && (a.v = Math.min(35, a.v))
                }
                var d =
                    y(a, c);
                c == a.Va && a.b == a.fixed[a.Va - 1] && (d = 1);
                E(a, c, d)
            }
        }
    }
    K(a)
}

function w(a) {
    9 > a.i && (0 != a.i && a.Y) && (a.d(130), a.Ba || (a.Ga = 15, a.Ba = g));
    if (a.i != a.b && 2 != Q(a.b) && 0 == (Q(a.b) & 8))
        for (var b = 0; 5 > b; b++)
            if (a.B[b] == a.i && a.M[b]) {
                a.i = a.b;
                a.d(2);
                break
            } a.b = a.i;
    if (0 == a.b || 2 == Q(a.b) || 0 != (Q(a.i) & 8)) return S(a);
    if (0 == a.w) return 15 <= a.b && (a.w = 1), S(a);
    if (1 == a.w) {
        if (15 > a.b || 95 > B(100)) return S(a);
        a.w = 2;
        for (b = 0; 2 > b; b++) {
            var c = B(5);
            50 > B(100) && (a.l[c] = 0)
        }
        for (b = 0; 5 > b; b++) a.l[b] == a.b && (a.l[b] = a.ib), a.B[b] = a.l[b];
        a.d(3);
        p(a, a.K, a.b);
        return S(a)
    }
    var d = 0,
        f = 0,
        q = 0,
        b = 0;
    a: for (; 6 > b; b++)
        if (0 != a.l[b]) {
            var c =
                0,
                s = V[a.l[b] - 1];
            if (0 <= s) {
                do {
                    var A = Math.floor(Math.abs(U[s]) / 1E3) % 1E3;
                    0 == A ? (a.e(" ---- UH OH ----"), a.e("Newloc for dwarf #", b + 1, " is 0."), a.e("Dwarf is currently in " + a.l[b] + ", kk=" + s), a.e("NOT MOVING DWARF TO AVOID CRASH!")) : 300 < A || (15 == A || A == a.B[b] || 0 < c && A == a.Da[c - 1] || c > a.Da.length || A == a.l[b] || 2 == Q(A) || 5 == b && 0 != (Q(A) & 8) || 100 == Math.floor(Math.abs(U[s]) / 1E6)) || (a.Da[c] = A, c++);
                    s++
                } while (0 <= U[s - 1])
            }
            a.Da[c] = a.B[b];
            1 <= c && c--;
            c = B(c + 1);
            a.B[b] = a.l[b];
            a.l[b] = a.Da[c];
            a.M[b] = a.M[b] && 15 <= a.b || a.l[b] == a.b || a.B[b] ==
                a.b;
            if (a.M[b])
                if (a.l[b] = a.b, 5 == b) {
                    if (a.b == a.R || 0 <= y(a, a.oa)) continue a;
                    k = 0;
                    for (c = 50; c <= a.ya; c++) {
                        if (!(c == a.Ca && (a.b == t(a.Ca) || a.b == t(a.va))))
                            if (a.$ = c, a.f[a.$]) {
                                a.d(128);
                                0 == a.k[a.za - 1] && a.move(a.oa, a.R);
                                a.move(a.za, a.cb);
                                for (c = 50; c <= a.ya; c++) c == a.Ca && (a.b == t(a.Ca) || a.b == t(a.va)) || (a.$ = c, N(a, a.$) && 0 == a.fixed[a.$ - 1] && ga(a, a.$, a.b), a.f(a.$) && p(a, a.$, a.R));
                                a.l[5] = a.R;
                                a.B[5] = a.R;
                                a.M[5] = l;
                                continue a
                            } H(a, a.$) && (k = 1)
                    }
                    if (a.ia == a.ja + 1 && 0 == k && 0 == a.k[a.oa - 1] && H(a, a.q) && 1 == y(a, a.q)) {
                        a.d(186);
                        a.move(a.oa, a.R);
                        a.move(a.za,
                            a.cb);
                        a.l[5] = a.R;
                        a.B[5] = a.R;
                        a.M[5] = l;
                        continue a
                    }
                    a.B[5] != a.l[5] && 20 > B(100) && a.d(127)
                } else d++, a.B[b] == a.l[b] && (f++, 0 <= a.aa && (a.aa = a.b), B(1E3) < 95 * a.w - 2 && q++)
        }
    if (0 < d && (1 == d ? a.d(4) : a.e(" There are ", d, " threatening little dwarves in the room with you."), 0 < f && (2 == a.w && (a.w = 3), 1 == f ? (a.d(5), k = 52) : (a.e(" ", f, " of them throw knives at you!"), k = 6), 1 < q ? a.e(" ", q, " of them get you!") : a.d(k + q), 0 < q))) return a.ha = a.b, Ca(a);
    S(a)
}

function u(a, b, c) {
    (1 > b || 100 < b) && e(Error("Bad object index " + b));
    a.la[b - 1] = c
}

function y(a, b) {
    (1 > b || 100 < b) && e(Error("Bad object index " + b));
    var c = a.la[b - 1];
    return c == h ? 0 : c
}

function J(a) {
    return 0 == (Q(a.b) & 1) && (0 == y(a, a.q) || !H(a, a.q))
}

function M(a, b) {
    var c = Q(b);
    return 0 != (c & 4) ? 0 == (c & 2) ? a.F : a.ga : 0
}

function P(a) {
    var b = Math.max(y(a, a.m), -1 - y(a, a.m));
    return 0 == b ? a.F : 2 == b ? a.ga : 0
}

function N(a, b) {
    return a.k[b - 1] == a.b || a.fixed[b - 1] == a.b
}

function H(a, b) {
    return a.k[b - 1] == a.b || a.f(b)
};
var W = {
        wa: Ma,
        ua: Na
    },
    Qa = {
        wa: Oa,
        ua: Pa
    },
    X = {
        wa: Ra,
        ua: Sa
    },
    Y = {
        wa: Ta,
        ua: Ua
    },
    I = {
        ma: W,
        Pa: X,
        u: W,
        na: X,
        ta: X,
        Ga: X,
        closed: Y,
        Y: Y,
        detail: X,
        fixed: W,
        la: W,
        link: W,
        a: X,
        T: X,
        k: W,
        Ma: Y,
        v: X,
        ia: X,
        ja: X,
        G: Qa,
        H: W,
        w: X,
        Qa: X,
        l: W,
        M: Qa,
        B: W,
        Ea: X,
        Ha: Y,
        Ra: X,
        aa: X,
        detail: X,
        fa: X,
        ea: X,
        da: X,
        Ba: Y,
        xa: Y,
        La: Y,
        b: X
    },
    Va = 0,
    Wa;
for (Wa in I) I[Wa] = [I[Wa], Z(Va++)];
I.version = [{
    wa: function () {
        return 0
    },
    ua: function (a) {
        "0" != a && e(Error("Bad save version"))
    }
}, "_"];

function Xa(a) {
    function b() {
        1 == f ? c.push(d) : 2 == f && d != h && 3 > d.toString().length ? c.push(d, d) : c.push([f, d])
    }
    if (0 == a.length) return a;
    for (var c = [], d = a[0], f = 1, q = 1; q < a.length; q++) a[q] == d ? f++ : (b(), f = 1, d = a[q]);
    b();
    return c
}

function Ma(a) {
    var b = Math.min.apply(h, a),
        c = Math.max.apply(h, a),
        b = 0 > b ? -b : 0,
        c = c + b;
    a = Xa(a);
    var d = [];
    if (62 > c) {
        0 < b && (d.push("-"), d.push(Z(b)));
        for (c = 0; c < a.length; c++) {
            var f = a[c];
            f.push && (d.push("."), d.push(Ya(f[0])), f = f[1]);
            d.push(Z(f + b))
        }
    } else {
        0 < b && (d.push("-"), d.push(Z(b)));
        d.push("_");
        for (c = 0; c < a.length; c++) f = a[c], f.push && (d.push("."), d.push(Ya(f[0])), f = f[1]), f += b, d.push(Z(Math.floor(f / 62)), Z(f % 62))
    }
    return d.join("")
}

function Na(a) {
    var b = 0;
    "-" == a.charAt(0) && (b = $(a.charAt(1)), a = a.substr(2));
    var c = [],
        d = 0,
        f, q, s = 1,
        A = $;
    "_" == a.charAt(0) && (A = Za, s = 2, d++);
    for (; d < a.length; d += s) {
        "." == a.charAt(d) ? (q = Za(a.substr(++d, 2)), d += 2) : q = 1;
        for (f = A(a.substr(d, s)) - b; 0 < q; q--) c.push(f)
    }
    return c
}

function Ya(a) {
    return Z(Math.floor(a / 62)) + Z(a % 62)
}

function Z(a) {
    return 10 > a ? String.fromCharCode(48 + a) : 36 > a ? String.fromCharCode(55 + a) : 62 > a ? String.fromCharCode(61 + a) : "!" + a + "!"
}

function $(a) {
    a = a.charCodeAt(0);
    return 97 <= a ? a - 97 + 36 : 65 <= a ? a - 65 + 10 : a - 48
}

function Za(a) {
    return 62 * $(a.charAt(0)) + $(a.charAt(1))
}

function Ra(a) {
    return 62 > a ? Z(a) : Ya(a)
}

function Sa(a) {
    if (1 == a.length) return $(a);
    if (2 == a.length) return Za(a);
    e(Error('Cannot decode "' + a + '"'))
}

function Oa(a) {
    a = Xa(a);
    for (var b = [], c = 0; c < a.length; c++) {
        var d = a[c];
        d === g ? b.push(".") : d === l ? b.push("-") : b.push(Z(d[0]), Ta(d[1]))
    }
    return b.join("")
}

function Ta(a) {
    return a ? "." : "_"
}

function Ua(a) {
    return "." == a ? g : "_" == a ? l : h
}

function Pa(a) {
    var b = [],
        c, d, f;
    for (c = 0; c < a.length; c++)
        if (d = a.charAt(c), f = Ua(d), f === h) {
            f = Ua(a.charAt(++c));
            for (d = $(d); 0 < d; d--) b.push(f)
        } else b.push(f);
    return b
};
var La = 'YOU ARE STANDING AT THE END OF A ROAD BEFORE A SMALL BRICK BUILDING.\nAROUND YOU IS A FOREST.  A SMALL STREAM FLOWS OUT OF THE BUILDING AND\nDOWN A GULLY.;YOU HAVE WALKED UP A HILL, STILL IN THE FOREST.  THE ROAD SLOPES BACK\nDOWN THE OTHER SIDE OF THE HILL.  THERE IS A BUILDING IN THE DISTANCE.;YOU ARE INSIDE A BUILDING, A WELL HOUSE FOR A LARGE SPRING.;YOU ARE IN A VALLEY IN THE FOREST BESIDE A STREAM TUMBLING ALONG A\nROCKY BED.;YOU ARE IN OPEN FOREST, WITH A DEEP VALLEY TO ONE SIDE.;YOU ARE IN OPEN FOREST NEAR BOTH A VALLEY AND A ROAD.;AT YOUR FEET ALL THE WATER OF THE STREAM SPLASHES INTO A 2-INCH SLIT\nIN THE ROCK.  DOWNSTREAM THE STREAMBED IS BARE ROCK.;YOU ARE IN A 20-FOOT DEPRESSION FLOORED WITH BARE DIRT.  SET INTO THE\nDIRT IS A STRONG STEEL GRATE MOUNTED IN CONCRETE.  A DRY STREAMBED\nLEADS INTO THE DEPRESSION.;YOU ARE IN A SMALL CHAMBER BENEATH A 3X3 STEEL GRATE TO THE SURFACE.\nA LOW CRAWL OVER COBBLES LEADS INWARD TO THE WEST.;YOU ARE CRAWLING OVER COBBLES IN A LOW PASSAGE.  THERE IS A DIM LIGHT\nAT THE EAST END OF THE PASSAGE.;YOU ARE IN A DEBRIS ROOM FILLED WITH STUFF WASHED IN FROM THE SURFACE.\nA LOW WIDE PASSAGE WITH COBBLES BECOMES PLUGGED WITH MUD AND DEBRIS\nHERE, BUT AN AWKWARD CANYON LEADS UPWARD AND WEST.  A NOTE ON THE WALL\nSAYS "MAGIC WORD XYZZY".;YOU ARE IN AN AWKWARD SLOPING EAST/WEST CANYON.;YOU ARE IN A SPLENDID CHAMBER THIRTY FEET HIGH.  THE WALLS ARE FROZEN\nRIVERS OF ORANGE STONE.  AN AWKWARD CANYON AND A GOOD PASSAGE EXIT\nFROM EAST AND WEST SIDES OF THE CHAMBER.;AT YOUR FEET IS A SMALL PIT BREATHING TRACES OF WHITE MIST.  AN EAST\nPASSAGE ENDS HERE EXCEPT FOR A SMALL CRACK LEADING ON.;YOU ARE AT ONE END OF A VAST HALL STRETCHING FORWARD OUT OF SIGHT TO\nTHE WEST.  THERE ARE OPENINGS TO EITHER SIDE.  NEARBY, A WIDE STONE\nSTAIRCASE LEADS DOWNWARD.  THE HALL IS FILLED WITH WISPS OF WHITE MIST\nSWAYING TO AND FRO ALMOST AS IF ALIVE.\tA COLD WIND BLOWS UP THE\nSTAIRCASE.  THERE IS A PASSAGE AT THE TOP OF A DOME BEHIND YOU.;THE CRACK IS FAR TOO SMALL FOR YOU TO FOLLOW.;YOU ARE ON THE EAST BANK OF A FISSURE SLICING CLEAR ACROSS THE HALL.\nTHE MIST IS QUITE THICK HERE, AND THE FISSURE IS TOO WIDE TO JUMP.;THIS IS A LOW ROOM WITH A CRUDE NOTE ON THE WALL.  THE NOTE SAYS,\n"YOU WON\'T GET IT UP THE STEPS".;YOU ARE IN THE HALL OF THE MOUNTAIN KING, WITH PASSAGES OFF IN ALL\nDIRECTIONS.;YOU ARE AT THE BOTTOM OF THE PIT WITH A BROKEN NECK.;YOU DIDN\'T MAKE IT.;THE DOME IS UNCLIMBABLE.;YOU ARE AT THE WEST END OF THE TWOPIT ROOM.  THERE IS A LARGE HOLE IN\nTHE WALL ABOVE THE PIT AT THIS END OF THE ROOM.;YOU ARE AT THE BOTTOM OF THE EASTERN PIT IN THE TWOPIT ROOM.  THERE IS\nA SMALL POOL OF OIL IN ONE CORNER OF THE PIT.;YOU ARE AT THE BOTTOM OF THE WESTERN PIT IN THE TWOPIT ROOM.  THERE IS\nA LARGE HOLE IN THE WALL ABOUT 25 FEET ABOVE YOU.;YOU CLAMBER UP THE PLANT AND SCURRY THROUGH THE HOLE AT THE TOP.;YOU ARE ON THE WEST SIDE OF THE FISSURE IN THE HALL OF MISTS.;YOU ARE IN A LOW N/S PASSAGE AT A HOLE IN THE FLOOR.  THE HOLE GOES\nDOWN TO AN E/W PASSAGE.;YOU ARE IN THE SOUTH SIDE CHAMBER.;YOU ARE IN THE WEST SIDE CHAMBER OF THE HALL OF THE MOUNTAIN KING.\nA PASSAGE CONTINUES WEST AND UP HERE.;>$<;YOU CAN\'T GET BY THE SNAKE.;YOU ARE IN A LARGE ROOM, WITH A PASSAGE TO THE SOUTH, A PASSAGE TO THE\nWEST, AND A WALL OF BROKEN ROCK TO THE EAST.  THERE IS A LARGE "Y2" ON\nA ROCK IN THE ROOM\'S CENTER.;YOU ARE IN A JUMBLE OF ROCK, WITH CRACKS EVERYWHERE.;YOU\'RE AT A LOW WINDOW OVERLOOKING A HUGE PIT, WHICH EXTENDS UP OUT OF\nSIGHT.\tA FLOOR IS INDISTINCTLY VISIBLE OVER 50 FEET BELOW.  TRACES OF\nWHITE MIST COVER THE FLOOR OF THE PIT, BECOMING THICKER TO THE RIGHT.\nMARKS IN THE DUST AROUND THE WINDOW WOULD SEEM TO INDICATE THAT\nSOMEONE HAS BEEN HERE RECENTLY.  DIRECTLY ACROSS THE PIT FROM YOU AND\n25 FEET AWAY THERE IS A SIMILAR WINDOW LOOKING INTO A LIGHTED ROOM.  A\nSHADOWY FIGURE CAN BE SEEN THERE PEERING BACK AT YOU.;YOU ARE IN A DIRTY BROKEN PASSAGE.  TO THE EAST IS A CRAWL.  TO THE\nWEST IS A LARGE PASSAGE.  ABOVE YOU IS A HOLE TO ANOTHER PASSAGE.;YOU ARE ON THE BRINK OF A SMALL CLEAN CLIMBABLE PIT.  A CRAWL LEADS\nWEST.;YOU ARE IN THE BOTTOM OF A SMALL PIT WITH A LITTLE STREAM, WHICH\nENTERS AND EXITS THROUGH TINY SLITS.;YOU ARE IN A LARGE ROOM FULL OF DUSTY ROCKS.  THERE IS A BIG HOLE IN\nTHE FLOOR.  THERE ARE CRACKS EVERYWHERE, AND A PASSAGE LEADING EAST.;YOU HAVE CRAWLED THROUGH A VERY LOW WIDE PASSAGE PARALLEL TO AND NORTH\nOF THE HALL OF MISTS.;YOU ARE AT THE WEST END OF HALL OF MISTS.  A LOW WIDE CRAWL CONTINUES\nWEST AND ANOTHER GOES NORTH.  TO THE SOUTH IS A LITTLE PASSAGE 6 FEET\nOFF THE FLOOR.;YOU ARE IN A MAZE OF TWISTY LITTLE PASSAGES, ALL ALIKE.;YOU ARE IN A MAZE OF TWISTY LITTLE PASSAGES, ALL ALIKE.;YOU ARE IN A MAZE OF TWISTY LITTLE PASSAGES, ALL ALIKE.;YOU ARE IN A MAZE OF TWISTY LITTLE PASSAGES, ALL ALIKE.;DEAD END;DEAD END;DEAD END;YOU ARE IN A MAZE OF TWISTY LITTLE PASSAGES, ALL ALIKE.;YOU ARE IN A MAZE OF TWISTY LITTLE PASSAGES, ALL ALIKE.;YOU ARE IN A MAZE OF TWISTY LITTLE PASSAGES, ALL ALIKE.;YOU ARE IN A MAZE OF TWISTY LITTLE PASSAGES, ALL ALIKE.;YOU ARE IN A MAZE OF TWISTY LITTLE PASSAGES, ALL ALIKE.;DEAD END;YOU ARE IN A MAZE OF TWISTY LITTLE PASSAGES, ALL ALIKE.;DEAD END;YOU ARE ON THE BRINK OF A THIRTY FOOT PIT WITH A MASSIVE ORANGE COLUMN\nDOWN ONE WALL.\tYOU COULD CLIMB DOWN HERE BUT YOU COULD NOT GET BACK\nUP.  THE MAZE CONTINUES AT THIS LEVEL.;DEAD END;YOU HAVE CRAWLED THROUGH A VERY LOW WIDE PASSAGE PARALLEL TO AND NORTH\nOF THE HALL OF MISTS.;YOU ARE AT THE EAST END OF A VERY LONG HALL APPARENTLY WITHOUT SIDE\nCHAMBERS.  TO THE EAST A LOW WIDE CRAWL SLANTS UP.  TO THE NORTH A\nROUND TWO FOOT HOLE SLANTS DOWN.;YOU ARE AT THE WEST END OF A VERY LONG FEATURELESS HALL.  THE HALL\nJOINS UP WITH A NARROW NORTH/SOUTH PASSAGE.;YOU ARE AT A CROSSOVER OF A HIGH N/S PASSAGE AND A LOW E/W ONE.;DEAD END;YOU ARE AT A COMPLEX JUNCTION.\tA LOW HANDS AND KNEES PASSAGE FROM THE\nNORTH JOINS A HIGHER CRAWL FROM THE EAST TO MAKE A WALKING PASSAGE\nGOING WEST.  THERE IS ALSO A LARGE ROOM ABOVE.\tTHE AIR IS DAMP HERE.;YOU ARE IN BEDQUILT, A LONG EAST/WEST PASSAGE WITH HOLES EVERYWHERE.\nTO EXPLORE AT RANDOM SELECT NORTH, SOUTH, UP, OR DOWN.;YOU ARE IN A ROOM WHOSE WALLS RESEMBLE SWISS CHEESE.  OBVIOUS PASSAGES\nGO WEST, EAST, NE, AND NW.  PART OF THE ROOM IS OCCUPIED BY A LARGE\nBEDROCK BLOCK.;YOU ARE AT THE EAST END OF THE TWOPIT ROOM.  THE FLOOR HERE IS\nLITTERED WITH THIN ROCK SLABS, WHICH MAKE IT EASY TO DESCEND THE PITS.\nTHERE IS A PATH HERE BYPASSING THE PITS TO CONNECT PASSAGES FROM EAST\nAND WEST.  THERE ARE HOLES ALL OVER, BUT THE ONLY BIG ONE IS ON THE\nWALL DIRECTLY OVER THE WEST PIT WHERE YOU CAN\'T GET TO IT.;YOU ARE IN A LARGE LOW CIRCULAR CHAMBER WHOSE FLOOR IS AN IMMENSE SLAB\nFALLEN FROM THE CEILING (SLAB ROOM).  EAST AND WEST THERE ONCE WERE\nLARGE PASSAGES, BUT THEY ARE NOW FILLED WITH BOULDERS.\tLOW SMALL\nPASSAGES GO NORTH AND SOUTH, AND THE SOUTH ONE QUICKLY BENDS WEST\nAROUND THE BOULDERS.;YOU ARE IN A SECRET N/S CANYON ABOVE A LARGE ROOM.;YOU ARE IN A SECRET N/S CANYON ABOVE A SIZABLE PASSAGE.;YOU ARE IN A SECRET CANYON AT A JUNCTION OF THREE CANYONS, BEARING\nNORTH, SOUTH, AND SE.  THE NORTH ONE IS AS TALL AS THE OTHER TWO\nCOMBINED.;YOU ARE IN A LARGE LOW ROOM.  CRAWLS LEAD NORTH, SE, AND SW.;DEAD END CRAWL.;YOU ARE IN A SECRET CANYON WHICH HERE RUNS E/W.  IT CROSSES OVER A\nVERY TIGHT CANYON 15 FEET BELOW.  IF YOU GO DOWN YOU MAY NOT BE ABLE\nTO GET BACK UP.;YOU ARE AT A WIDE PLACE IN A VERY TIGHT N/S CANYON.;THE CANYON HERE BECOMES TOO TIGHT TO GO FURTHER SOUTH.;YOU ARE IN A TALL E/W CANYON.  A LOW TIGHT CRAWL GOES 3 FEET NORTH AND\nSEEMS TO OPEN UP.;THE CANYON RUNS INTO A MASS OF BOULDERS -- DEAD END.;THE STREAM FLOWS OUT THROUGH A PAIR OF 1 FOOT DIAMETER SEWER PIPES.\nIT WOULD BE ADVISABLE TO USE THE EXIT.;YOU ARE IN A MAZE OF TWISTY LITTLE PASSAGES, ALL ALIKE.;DEAD END;DEAD END;YOU ARE IN A MAZE OF TWISTY LITTLE PASSAGES, ALL ALIKE.;YOU ARE IN A MAZE OF TWISTY LITTLE PASSAGES, ALL ALIKE.;DEAD END;DEAD END;YOU ARE IN A MAZE OF TWISTY LITTLE PASSAGES, ALL ALIKE.;YOU ARE IN A LONG, NARROW CORRIDOR STRETCHING OUT OF SIGHT TO THE\nWEST.  AT THE EASTERN END IS A HOLE THROUGH WHICH YOU CAN SEE A\nPROFUSION OF LEAVES.;THERE IS NOTHING HERE TO CLIMB.  USE "UP" OR "OUT" TO LEAVE THE PIT.;YOU HAVE CLIMBED UP THE PLANT AND OUT OF THE PIT.;YOU ARE AT THE TOP OF A STEEP INCLINE ABOVE A LARGE ROOM.  YOU COULD\nCLIMB DOWN HERE, BUT YOU WOULD NOT BE ABLE TO CLIMB UP.  THERE IS A\nPASSAGE LEADING BACK TO THE NORTH.;YOU ARE IN THE GIANT ROOM.  THE CEILING HERE IS TOO HIGH UP FOR YOUR\nLAMP TO SHOW IT.  CAVERNOUS PASSAGES LEAD EAST, NORTH, AND SOUTH.  ON\nTHE WEST WALL IS SCRAWLED THE INSCRIPTION, "FEE FIE FOE FOO" [SIC].;THE PASSAGE HERE IS BLOCKED BY A RECENT CAVE-IN.;YOU ARE AT ONE END OF AN IMMENSE NORTH/SOUTH PASSAGE.;YOU ARE IN A MAGNIFICENT CAVERN WITH A RUSHING STREAM, WHICH CASCADES\nOVER A SPARKLING WATERFALL INTO A ROARING WHIRLPOOL WHICH DISAPPEARS\nTHROUGH A HOLE IN THE FLOOR.  PASSAGES EXIT TO THE SOUTH AND WEST.;YOU ARE IN THE SOFT ROOM.  THE WALLS ARE COVERED WITH HEAVY CURTAINS,\nTHE FLOOR WITH A THICK PILE CARPET.  MOSS COVERS THE CEILING.;THIS IS THE ORIENTAL ROOM.  ANCIENT ORIENTAL CAVE DRAWINGS COVER THE\nWALLS.\tA GENTLY SLOPING PASSAGE LEADS UPWARD TO THE NORTH, ANOTHER\nPASSAGE LEADS SE, AND A HANDS AND KNEES CRAWL LEADS WEST.;YOU ARE FOLLOWING A WIDE PATH AROUND THE OUTER EDGE OF A LARGE CAVERN.\nFAR BELOW, THROUGH A HEAVY WHITE MIST, STRANGE SPLASHING NOISES CAN BE\nHEARD.\tTHE MIST RISES UP THROUGH A FISSURE IN THE CEILING.  THE PATH\nEXITS TO THE SOUTH AND WEST.;YOU ARE IN AN ALCOVE.  A SMALL NW PATH SEEMS TO WIDEN AFTER A SHORT\nDISTANCE.  AN EXTREMELY TIGHT TUNNEL LEADS EAST.  IT LOOKS LIKE A VERY\nTIGHT SQUEEZE.\tAN EERIE LIGHT CAN BE SEEN AT THE OTHER END.;YOU\'RE IN A SMALL CHAMBER LIT BY AN EERIE GREEN LIGHT.\tAN EXTREMELY\nNARROW TUNNEL EXITS TO THE WEST.  A DARK CORRIDOR LEADS NE.;YOU\'RE IN THE DARK-ROOM.  A CORRIDOR LEADING SOUTH IS THE ONLY EXIT.;YOU ARE IN AN ARCHED HALL.  A CORAL PASSAGE ONCE CONTINUED UP AND EAST\nFROM HERE, BUT IS NOW BLOCKED BY DEBRIS.  THE AIR SMELLS OF SEA WATER.;YOU\'RE IN A LARGE ROOM CARVED OUT OF SEDIMENTARY ROCK.\tTHE FLOOR AND\nWALLS ARE LITTERED WITH BITS OF SHELLS IMBEDDED IN THE STONE.  A\nSHALLOW PASSAGE PROCEEDS DOWNWARD, AND A SOMEWHAT STEEPER ONE LEADS\nUP.  A LOW HANDS AND KNEES PASSAGE ENTERS FROM THE SOUTH.;YOU ARE IN A LONG SLOPING CORRIDOR WITH RAGGED SHARP WALLS.;YOU ARE IN A CUL-DE-SAC ABOUT EIGHT FEET ACROSS.;YOU ARE IN AN ANTEROOM LEADING TO A LARGE PASSAGE TO THE EAST.\tSMALL\nPASSAGES GO WEST AND UP.  THE REMNANTS OF RECENT DIGGING ARE EVIDENT.\nA SIGN IN MIDAIR HERE SAYS "CAVE UNDER CONSTRUCTION BEYOND THIS POINT.\nPROCEED AT OWN RISK.  [WITT CONSTRUCTION COMPANY]";YOU ARE IN A MAZE OF TWISTY LITTLE PASSAGES, ALL DIFFERENT.;YOU ARE AT WITT\'S END.\tPASSAGES LEAD OFF IN *ALL* DIRECTIONS.;YOU ARE IN A NORTH/SOUTH CANYON ABOUT 25 FEET ACROSS.  THE FLOOR IS\nCOVERED BY WHITE MIST SEEPING IN FROM THE NORTH.  THE WALLS EXTEND\nUPWARD FOR WELL OVER 100 FEET.\tSUSPENDED FROM SOME UNSEEN POINT FAR\nABOVE YOU, AN ENORMOUS TWO-SIDED MIRROR IS HANGING PARALLEL TO AND\nMIDWAY BETWEEN THE CANYON WALLS.  (THE MIRROR IS OBVIOUSLY PROVIDED\nFOR THE USE OF THE DWARVES, WHO AS YOU KNOW, ARE EXTREMELY VAIN.)  A\nSMALL WINDOW CAN BE SEEN IN EITHER WALL, SOME FIFTY FEET UP.;YOU\'RE AT A LOW WINDOW OVERLOOKING A HUGE PIT, WHICH EXTENDS UP OUT OF\nSIGHT.\tA FLOOR IS INDISTINCTLY VISIBLE OVER 50 FEET BELOW.  TRACES OF\nWHITE MIST COVER THE FLOOR OF THE PIT, BECOMING THICKER TO THE LEFT.\nMARKS IN THE DUST AROUND THE WINDOW WOULD SEEM TO INDICATE THAT\nSOMEONE HAS BEEN HERE RECENTLY.  DIRECTLY ACROSS THE PIT FROM YOU AND\n25 FEET AWAY THERE IS A SIMILAR WINDOW LOOKING INTO A LIGHTED ROOM.  A\nSHADOWY FIGURE CAN BE SEEN THERE PEERING BACK AT YOU.;A LARGE STALACTITE EXTENDS FROM THE ROOF AND ALMOST REACHES THE FLOOR\nBELOW.\tYOU COULD CLIMB DOWN IT, AND JUMP FROM IT TO THE FLOOR, BUT\nHAVING DONE SO YOU WOULD BE UNABLE TO REACH IT TO CLIMB BACK UP.;YOU ARE IN A LITTLE MAZE OF TWISTING PASSAGES, ALL DIFFERENT.;YOU ARE AT THE EDGE OF A LARGE UNDERGROUND RESERVOIR.  AN OPAQUE CLOUD\nOF WHITE MIST FILLS THE ROOM AND RISES RAPIDLY UPWARD.\tTHE LAKE IS\nFED BY A STREAM, WHICH TUMBLES OUT OF A HOLE IN THE WALL ABOUT 10 FEET\nOVERHEAD AND SPLASHES NOISILY INTO THE WATER SOMEWHERE WITHIN THE\nMIST.  THE ONLY PASSAGE GOES BACK TOWARD THE SOUTH.;DEAD END;YOU ARE AT THE NORTHEAST END OF AN IMMENSE ROOM, EVEN LARGER THAN THE\nGIANT ROOM.  IT APPEARS TO BE A REPOSITORY FOR THE "ADVENTURE"\nPROGRAM.  MASSIVE TORCHES FAR OVERHEAD BATHE THE ROOM WITH SMOKY\nYELLOW LIGHT.  SCATTERED ABOUT YOU CAN BE SEEN A PILE OF BOTTLES (ALL\nOF THEM EMPTY), A NURSERY OF YOUNG BEANSTALKS MURMURING QUIETLY, A BED\nOF OYSTERS, A BUNDLE OF BLACK RODS WITH RUSTY STARS ON THEIR ENDS, AND\nA COLLECTION OF BRASS LANTERNS.  OFF TO ONE SIDE A GREAT MANY DWARVES\nARE SLEEPING ON THE FLOOR, SNORING LOUDLY.  A SIGN NEARBY READS: "DO\nNOT DISTURB THE DWARVES!"  AN IMMENSE MIRROR IS HANGING AGAINST ONE\nWALL, AND STRETCHES TO THE OTHER END OF THE ROOM, WHERE VARIOUS OTHER\nSUNDRY OBJECTS CAN BE GLIMPSED DIMLY IN THE DISTANCE.;YOU ARE AT THE SOUTHWEST END OF THE REPOSITORY.  TO ONE SIDE IS A PIT\nFULL OF FIERCE GREEN SNAKES.  ON THE OTHER SIDE IS A ROW OF SMALL\nWICKER CAGES, EACH OF WHICH CONTAINS A LITTLE SULKING BIRD.  IN ONE\nCORNER IS A BUNDLE OF BLACK RODS WITH RUSTY MARKS ON THEIR ENDS.  A\nLARGE NUMBER OF VELVET PILLOWS ARE SCATTERED ABOUT ON THE FLOOR.  A\nVAST MIRROR STRETCHES OFF TO THE NORTHEAST.  AT YOUR FEET IS A LARGE\nSTEEL GRATE, NEXT TO WHICH IS A SIGN WHICH READS, "TREASURE VAULT.\nKEYS IN MAIN OFFICE.";YOU ARE ON ONE SIDE OF A LARGE, DEEP CHASM.  A HEAVY WHITE MIST RISING\nUP FROM BELOW OBSCURES ALL VIEW OF THE FAR SIDE.  A SW PATH LEADS AWAY\nFROM THE CHASM INTO A WINDING CORRIDOR.;YOU ARE IN A LONG WINDING CORRIDOR SLOPING OUT OF SIGHT IN BOTH\nDIRECTIONS.;YOU ARE IN A SECRET CANYON WHICH EXITS TO THE NORTH AND EAST.;YOU ARE IN A SECRET CANYON WHICH EXITS TO THE NORTH AND EAST.;YOU ARE IN A SECRET CANYON WHICH EXITS TO THE NORTH AND EAST.;YOU ARE ON THE FAR SIDE OF THE CHASM.  A NE PATH LEADS AWAY FROM THE\nCHASM ON THIS SIDE.;YOU\'RE IN A LONG EAST/WEST CORRIDOR.  A FAINT RUMBLING NOISE CAN BE\nHEARD IN THE DISTANCE.;THE PATH FORKS HERE.  THE LEFT FORK LEADS NORTHEAST.  A DULL RUMBLING\nSEEMS TO GET LOUDER IN THAT DIRECTION.\tTHE RIGHT FORK LEADS SOUTHEAST\nDOWN A GENTLE SLOPE.  THE MAIN CORRIDOR ENTERS FROM THE WEST.;THE WALLS ARE QUITE WARM HERE.\tFROM THE NORTH CAN BE HEARD A STEADY\nROAR, SO LOUD THAT THE ENTIRE CAVE SEEMS TO BE TREMBLING.  ANOTHER\nPASSAGE LEADS SOUTH, AND A LOW CRAWL GOES EAST.;YOU ARE ON THE EDGE OF A BREATH-TAKING VIEW.  FAR BELOW YOU IS AN\nACTIVE VOLCANO, FROM WHICH GREAT GOUTS OF MOLTEN LAVA COME SURGING\nOUT, CASCADING BACK DOWN INTO THE DEPTHS.  THE GLOWING ROCK FILLS THE\nFARTHEST REACHES OF THE CAVERN WITH A BLOOD-RED GLARE, GIVING EVERY-\nTHING AN EERIE, MACABRE APPEARANCE.  THE AIR IS FILLED WITH FLICKERING\nSPARKS OF ASH AND A HEAVY SMELL OF BRIMSTONE.  THE WALLS ARE HOT TO\nTHE TOUCH, AND THE THUNDERING OF THE VOLCANO DROWNS OUT ALL OTHER\nSOUNDS.  EMBEDDED IN THE JAGGED ROOF FAR OVERHEAD ARE MYRIAD TWISTED\nFORMATIONS COMPOSED OF PURE WHITE ALABASTER, WHICH SCATTER THE MURKY\nLIGHT INTO SINISTER APPARITIONS UPON THE WALLS.  TO ONE SIDE IS A DEEP\nGORGE, FILLED WITH A BIZARRE CHAOS OF TORTURED ROCK WHICH SEEMS TO\nHAVE BEEN CRAFTED BY THE DEVIL HIMSELF.  AN IMMENSE RIVER OF FIRE\nCRASHES OUT FROM THE DEPTHS OF THE VOLCANO, BURNS ITS WAY THROUGH THE\nGORGE, AND PLUMMETS INTO A BOTTOMLESS PIT FAR OFF TO YOUR LEFT.  TO\nTHE RIGHT, AN IMMENSE GEYSER OF BLISTERING STEAM ERUPTS CONTINUOUSLY\nFROM A BARREN ISLAND IN THE CENTER OF A SULFUROUS LAKE, WHICH BUBBLES\nOMINOUSLY.  THE FAR RIGHT WALL IS AFLAME WITH AN INCANDESCENCE OF ITS\nOWN, WHICH LENDS AN ADDITIONAL INFERNAL SPLENDOR TO THE ALREADY\nHELLISH SCENE.\tA DARK, FOREBODING PASSAGE EXITS TO THE SOUTH.;YOU ARE IN A SMALL CHAMBER FILLED WITH LARGE BOULDERS.\tTHE WALLS ARE\nVERY WARM, CAUSING THE AIR IN THE ROOM TO BE ALMOST STIFLING FROM THE\nHEAT.  THE ONLY EXIT IS A CRAWL HEADING WEST, THROUGH WHICH IS COMING\nA LOW RUMBLING.;YOU ARE WALKING ALONG A GENTLY SLOPING NORTH/SOUTH PASSAGE LINED WITH\nODDLY SHAPED LIMESTONE FORMATIONS.;YOU ARE STANDING AT THE ENTRANCE TO A LARGE, BARREN ROOM.  A SIGN\nPOSTED ABOVE THE ENTRANCE READS:  "CAUTION!  BEAR IN ROOM!";YOU ARE INSIDE A BARREN ROOM.  THE CENTER OF THE ROOM IS COMPLETELY\nEMPTY EXCEPT FOR SOME DUST.  MARKS IN THE DUST LEAD AWAY TOWARD THE\nFAR END OF THE ROOM.  THE ONLY EXIT IS THE WAY YOU CAME IN.;YOU ARE IN A MAZE OF TWISTING LITTLE PASSAGES, ALL DIFFERENT.;YOU ARE IN A LITTLE MAZE OF TWISTY PASSAGES, ALL DIFFERENT.;YOU ARE IN A TWISTING MAZE OF LITTLE PASSAGES, ALL DIFFERENT.;YOU ARE IN A TWISTING LITTLE MAZE OF PASSAGES, ALL DIFFERENT.;YOU ARE IN A TWISTY LITTLE MAZE OF PASSAGES, ALL DIFFERENT.;YOU ARE IN A TWISTY MAZE OF LITTLE PASSAGES, ALL DIFFERENT.;YOU ARE IN A LITTLE TWISTY MAZE OF PASSAGES, ALL DIFFERENT.;YOU ARE IN A MAZE OF LITTLE TWISTING PASSAGES, ALL DIFFERENT.;YOU ARE IN A MAZE OF LITTLE TWISTY PASSAGES, ALL DIFFERENT.;DEAD END'.split(";"),
    Ka = ["YOU'RE AT END OF ROAD AGAIN.", "YOU'RE AT HILL IN ROAD.", "YOU'RE INSIDE BUILDING.", "YOU'RE IN VALLEY.", "YOU'RE IN FOREST.", "YOU'RE IN FOREST.", "YOU'RE AT SLIT IN STREAMBED.", "YOU'RE OUTSIDE GRATE.", "YOU'RE BELOW THE GRATE.", "YOU'RE IN COBBLE CRAWL.", "YOU'RE IN DEBRIS ROOM.", h, "YOU'RE IN BIRD CHAMBER.", "YOU'RE AT TOP OF SMALL PIT.", "YOU'RE IN HALL OF MISTS.", h, "YOU'RE ON EAST BANK OF FISSURE.", "YOU'RE IN NUGGET OF GOLD ROOM.", "YOU'RE IN HALL OF MT KING", h, h, h, "YOU'RE AT WEST END OF TWOPIT ROOM.",
        "YOU'RE IN EAST PIT.", "YOU'RE IN WEST PIT.", h, h, h, h, h, h, h, 'YOU\'RE AT "Y2".', h, "YOU'RE AT WINDOW ON PIT.", "YOU'RE IN DIRTY PASSAGE.", h, h, "YOU'RE IN DUSTY ROCK ROOM.", h, "YOU'RE AT WEST END OF HALL OF MISTS.", h, h, h, h, h, h, h, h, h, h, h, h, h, h, h, "YOU'RE AT BRINK OF PIT.", h, h, "YOU'RE AT EAST END OF LONG HALL.", "YOU'RE AT WEST END OF LONG HALL.", h, h, "YOU'RE AT COMPLEX JUNCTION.", h, "YOU'RE IN SWISS CHEESE ROOM.", "YOU'RE AT EAST END OF TWOPIT ROOM.", "YOU'RE IN SLAB ROOM.", h, h, "YOU'RE AT JUNCTION OF THREE SECRET CANYONS.",
        h, h, "YOU'RE IN SECRET E/W CANYON ABOVE TIGHT CANYON.", h, h, h, h, h, h, h, h, h, h, h, h, h, "YOU'RE IN NARROW CORRIDOR.", h, h, "YOU'RE AT STEEP INCLINE ABOVE LARGE ROOM.", "YOU'RE IN GIANT ROOM.", h, h, "YOU'RE IN CAVERN WITH WATERFALL.", "YOU'RE IN SOFT ROOM.", "YOU'RE IN ORIENTAL ROOM.", "YOU'RE IN MISTY CAVERN.", "YOU'RE IN ALCOVE.", "YOU'RE IN PLOVER ROOM.", "YOU'RE IN DARK-ROOM.", "YOU'RE IN ARCHED HALL.", "YOU'RE IN SHELL ROOM.", h, h, "YOU'RE IN ANTEROOM.", h, "YOU'RE AT WITT'S END.", "YOU'RE IN MIRROR CANYON.", "YOU'RE AT WINDOW ON PIT.",
        "YOU'RE AT TOP OF STALACTITE.", h, "YOU'RE AT RESERVOIR.", h, "YOU'RE AT NE END.", "YOU'RE AT SW END.", "YOU'RE ON SW SIDE OF CHASM.", "YOU'RE IN SLOPING CORRIDOR.", h, h, h, "YOU'RE ON NE SIDE OF CHASM.", "YOU'RE IN CORRIDOR.", "YOU'RE AT FORK IN PATH.", "YOU'RE AT JUNCTION WITH WARM WALLS.", "YOU'RE AT BREATH-TAKING VIEW.", "YOU'RE IN CHAMBER OF BOULDERS.", "YOU'RE IN LIMESTONE PASSAGE.", "YOU'RE IN FRONT OF BARREN ROOM.", "YOU'RE IN BARREN ROOM."
    ],
    V = [0, 16, 25, 33, 44, 53, 61, 74, 86, 95, 104, 117, 126, 134, 145, 161, 162, 171, 174,
        187, 188, 189, 190, 197, 199, 203, 204, 213, 220, 223, 228, 230, 231, 239, 242, 245, 251, 256, 264, 270, 271, 279, 284, 287, 291, 297, 299, 301, 303, 305, 309, 313, 319, 322, 324, 328, 330, 336, 338, 339, 346, 349, 353, 355, 363, 375, 382, 387, 391, 397, 401, 404, 409, 412, 416, 418, 419, 423, 424, 425, 429, 431, 433, 436, 439, 441, 443, 445, 451, 452, 453, 458, 461, 464, 471, 475, 477, 483, 486, 491, 499, 502, 505, 511, 514, 517, 520, 530, 541, 544, 546, 552, 562, 565, 566, 567, 569, 578, 580, 584, 586, 590, 600, 605, 613, 619, 625, 630, 637, 645, 649, 659, 669, 679, 689, 699, 709, 719, 729, 739
    ],
    U = [2002, 2044, 2029,
        3003, 3012, 3019, 3043, 4005, 4013, 4014, 4046, 4030, 5006, 5045, 5043, -8063, 1002, 1012, 1007, 1043, 1045, 1030, 5006, 5045, -5046, 1003, 1011, 1032, 1044, 11062, 33065, 79005, -79014, 1004, 1012, 1045, 5006, 5043, 5044, 5029, 7005, 7046, 7030, -8063, 4009, 4043, 4030, 50005006, 50005007, 50005045, 6006, 5044, -5046, 1002, 1045, 4009, 4043, 4044, 4030, 5006, -5046, 1012, 4004, 4045, 5006, 5043, 5044, 8005, 8015, 8016, 8046, 595060, 595014, -595030, 5006, 5043, 5044, 5046, 1012, 7004, 7013, 7045, 303009003, 303009019, 303009030, -593003, 303008011, 303008029, 593011, 10017, 10018,
        10019, 10044, 14031, -11051, 9011, 9020, 9021, 9043, 11019, 11022, 11044, 11051, -14031, 303008063, 9064, 10017, 10018, 10023, 10024, 10043, 12025, 12019, 12029, 12044, 3062, -14031, 303008063, 9064, 11030, 11043, 11051, 13019, 13029, 13044, -14031, 303008063, 9064, 11051, 12025, 12043, 14023, 14031, -14044, 303008063, 9064, 11051, 13023, 13043, 150020030, 150020031, 150020034, 15030, 16033, -16044, 18036, 18046, 17007, 17038, 17044, 19010, 19030, 19045, 150022029, 150022031, 150022034, 150022035, 150022023, 150022043, 14029, -34055, -14001, 15038, 15043, 312596039, 412021007,
        412597041, 412597042, 412597044, 412597069, -27041, 15038, 15011, -15045, 15010, 15029, 15043, 311028045, 311028036, 311029046, 311029037, 311030044, 311030007, 32045, 35074049, 211032049, -74066, -1, -1, -15001, 67043, 67042, 68044, 68061, 25030, 25031, -648052, 67029, -67011, 23029, 23011, 724031056, -26056, -88001, 312596039, 412021007, 412597041, 412597042, 412597043, 412597069, 17041, 40045, -41044, 19038, 19011, 19046, 33045, 33055, 36030, -36052, 19038, 19011, -19045, 19038, 19011, 19043, 62044, -62029, 524089001, -90001, -19001, 3065, 28046, 34043, 34053,
        34054, 35044, 159302071, -100071, 33030, 33055, -15029, 33043, 33055, -20039, 37043, 37017, 28029, 28052, 39044, -65070, 36044, 36017, 38030, 38031, -38056, 37056, 37029, 37011, 595060, 595014, 595030, 595004, -595005, 36043, 36023, 64030, 64052, 64058, -65070, -41001, 42046, 42029, 42023, 42056, 27043, 59045, 60044, -60017, 41029, 42045, 43043, 45046, -80044, 42044, 44046, -45043, 43043, 48030, 50046, -82045, 42044, 43045, 46043, 47046, 87029, -87030, 45044, -45011, 45043, -45011, 44029, -44011, 50043, -51044, 44043, 49044, 51030, -52046, 49044, 50029, 52043, -53046, 50044,
        51043, 52046, 53029, 55045, -86030, 51044, 52045, -54046, 53044, -53011, 52044, 55045, 56030, -57043, 55029, -55011, 13030, 13056, 55044, 58046, 83045, -84043, 57043, -57011, -27001, 41043, 41029, 41017, 61044, 62045, 62030, -62052, 60043, 62045, -100107046, 60044, 63045, 30043, -61046, 62046, -62011, 39029, 39056, 39059, 65044, 65070, 103045, 103074, -106043, 64043, 66044, 80556046, 68061, 80556029, 50070029, 39029, 60556045, 75072045, 71045, 80556030, -106030, 65047, 67044, 80556046, 77025, 96043, 50556050, -97072, 66043, 23044, 23042, 24030, -24031, 23046, 69029, 69056,
        -65045, 68030, 68061, 331120046, 119046, 109045, -113075, 71045, 65030, 65023, -111046, 65048, 70046, -110045, 65070, 118049, 73045, 97048, -97072, 72046, 72017, -72011, 19043, 331120044, 121044, -75030, 76046, -77045, -75045, 75043, 78044, 66045, -66017, -77046, -3001, 42045, 80044, 80046, -81043, 80044, -80011, 44046, -44011, 57046, 84043, -85044, 57045, 83044, -114050, 83043, -83011, 52029, -52011, 45029, -45030, 25030, 25056, 25043, 20039, 92044, -92027, -25001, -23001, 95045, 95073, 95023, 72030, -72056, 88046, 93043, -94045, 92046, 92027, -92011, 92046, 92027, 92023,
        309095045, 309095003, 309095073, -611045, 94046, 94011, 92027, -91044, 66044, -66011, 66048, 72044, 72017, 98029, 98045, -98073, 97046, 97072, -99044, 98050, 98073, 301043, 301023, -100043, 301044, 301023, 301011, 99044, 159302071, 33071, 101047, -101022, 100046, 100071, -100011, 103030, 103074, -103011, 102029, 102038, 104030, 114618046, 115619046, -64046, 103029, 103074, -105030, 104029, 104011, -103074, 64029, 65044, -108043, 131046, 132049, 133047, 134048, 135029, 136050, 137043, 138044, 139045, -61030, 95556043, 95556045, 95556046, 95556047, 95556048, 95556049,
        95556050, 95556029, 95556030, 106043, -626044, 69046, 113045, -113075, 71044, -20039, 70045, 40050030, 40050039, 40050056, 50053030, -45030, 131049, 132045, 133043, 134050, 135048, 136047, 137044, 138030, 139029, -140046, 109046, 109011, -109109, -84048, -116049, 115047, -593030, 118049, 233660041, 233660042, 233660069, 233660047, 332661041, 303041, 332021039, -596039, 72030, -117029, 69045, 69011, 653043, -653007, 69045, -74043, 74043, 74011, 653045, -653007, 123047, 233660041, 233660042, 233660069, 233660049, 303041, 596039, 124077, 126028, -129040, 122044,
        124043, 124077, 126028, -129040, 123044, 125047, 125036, 128048, 128037, 128030, 126028, -129040, 124046, 124077, 126045, 126028, 127043, -127017, 125046, 125023, 125011, 124077, 610030, -610039, 125044, 125011, 125017, 124077, -126028, 124045, 124029, 124077, 129046, 129030, 129040, -126028, 128044, 128029, 124077, 130043, 130019, 130040, 130003, -126028, 129044, 129011, 124077, -126028, 107044, 132048, 133050, 134049, 135047, 136029, 137030, 138045, 139046, -112043, 107050, 131029, 133045, 134046, 135044, 136049, 137047, 138043, 139030, -112048, 107029, 131030, 132044,
        134047, 135049, 136043, 137045, 138050, 139048, -112046, 107047, 131045, 132050, 133048, 135043, 136030, 137046, 138029, 139044, -112049, 107045, 131048, 132030, 133046, 134043, 136044, 137049, 138047, 139050, -112029, 107043, 131044, 132029, 133049, 134030, 135046, 137050, 138048, 139047, -112045, 107048, 131047, 132046, 133030, 134029, 135050, 136045, 138049, 139043, -112044, 107030, 131043, 132047, 133029, 134044, 135045, 136046, 137048, 139049, -112050, 107049, 131050, 132043, 133044, 134045, 135030, 136048, 137029, 138046, -112047, 112045, -112011
    ],
    ha = [{
        DEPRE: 63,
        S: 46,
        STAIR: 10,
        VALLE: 9,
        CONTI: 7,
        ACROS: 42,
        AWKWA: 26,
        FORES: 6,
        E: 43,
        SURFA: 20,
        CANYO: 25,
        DOWNS: 5,
        ROOM: 59,
        DARK: 22,
        CROSS: 69,
        OUTSI: 11,
        RIGHT: 37,
        STEPS: 34,
        OUT: 11,
        FORK: 77,
        PLOVE: 71,
        INSID: 19,
        ROCK: 15,
        SW: 49,
        D: 30,
        BACK: 8,
        LEFT: 36,
        FORWA: 7,
        CAVE: 67,
        Y2: 55,
        HALL: 38,
        DOWNW: 30,
        JUMP: 39,
        PASSA: 23,
        ENTRA: 64,
        SLABR: 61,
        SLIT: 60,
        COBBL: 18,
        LEAVE: 11,
        NORTH: 45,
        OVER: 41,
        DESCE: 30,
        GIANT: 27,
        NW: 50,
        PIT: 31,
        UPWAR: 29,
        RESER: 75,
        BUILD: 12,
        DEBRI: 51,
        SHELL: 74,
        RETUR: 8,
        STREA: 14,
        VIEW: 28,
        ORIEN: 72,
        LOOK: 57,
        GULLY: 13,
        N: 45,
        UPSTR: 4,
        CRAWL: 17,
        PLUGH: 65,
        TOUCH: 57,
        NE: 47,
        ONWAR: 7,
        RETRE: 8,
        EXIT: 11,
        INWAR: 19,
        SE: 48,
        W: 44,
        HILL: 2,
        SOUTH: 46,
        ROAD: 2,
        WALL: 53,
        OUTDO: 32,
        EXAMI: 57,
        BED: 16,
        WEST: 44,
        CRACK: 33,
        U: 29,
        NULL: 21,
        HOLE: 52,
        ASCEN: 29,
        TUNNE: 23,
        DESCR: 57,
        BARRE: 40,
        BEDQU: 70,
        SECRE: 66,
        MAIN: 76,
        CAVER: 73,
        UP: 29,
        CLIMB: 56,
        ENTER: 3,
        DOME: 35,
        NOWHE: 21,
        BROKE: 54,
        XYZZY: 62,
        ABOVE: 29,
        HOUSE: 12,
        FLOOR: 58,
        IN: 19,
        LOW: 24,
        EAST: 43,
        OFFIC: 76,
        SLAB: 61,
        DOWN: 30
    }, {
        CAGE: 1004,
        FISSU: 1012,
        POTTE: 1058,
        BARS: 1052,
        CARPE: 1040,
        VASE: 1058,
        PLATI: 1060,
        STALA: 1026,
        CLAM: 1014,
        ROD: 1005,
        PERSI: 1062,
        CHASM: 1032,
        STEPS: 1007,
        MAGAZ: 1016,
        VOLCA: 1037,
        HEADL: 1002,
        BIRD: 1008,
        TROLL: 1033,
        BEANS: 1024,
        KNIVE: 1018,
        DOOR: 1009,
        DIAMO: 1051,
        TABLE: 1013,
        COINS: 1054,
        MACHI: 1038,
        LANTE: 1002,
        SHADO: 1027,
        DRAWI: 1029,
        VENDI: 1038,
        RATIO: 1019,
        BATTE: 1039,
        PIRAT: 1030,
        SPELU: 1016,
        JAR: 1020,
        BEAR: 1035,
        PILLO: 1010,
        EGGS: 1056,
        H2O: 1021,
        '"SPEL': 1016,
        CHAIN: 1064,
        KNIFE: 1018,
        WATER: 1021,
        TREAS: 1055,
        BOTTL: 1020,
        EGG: 1056,
        NEST: 1056,
        RUG: 1062,
        VELVE: 1010,
        DWARV: 1017,
        PEARL: 1061,
        ISSUE: 1016,
        MOSS: 1040,
        KEYS: 1001,
        KEY: 1001,
        SPICE: 1063,
        PYRAM: 1060,
        LAMP: 1002,
        GOLD: 1050,
        GEYSE: 1037,
        SHARD: 1058,
        OYSTE: 1015,
        MIRRO: 1023,
        AXE: 1028,
        GRATE: 1003,
        DRAGO: 1031,
        DWARF: 1017,
        PLANT: 1024,
        BOX: 1055,
        CHEST: 1055,
        MING: 1058,
        TRIDE: 1057,
        OIL: 1022,
        FIGUR: 1027,
        NUGGE: 1050,
        MESSA: 1036,
        CHIRP: 1008,
        SNAKE: 1011,
        JEWEL: 1053,
        EMERA: 1059,
        FOOD: 1019,
        SILVE: 1052
    }, {
        CONTI: 2011,
        GOTO: 2011,
        CALM: 2010,
        FEE: 2025,
        TAKE: 2001,
        TURN: 2011,
        IGNIT: 2023,
        THROW: 2017,
        OPEN: 2004,
        DROP: 2002,
        INVEN: 2020,
        TOSS: 2017,
        READ: 2027,
        GO: 2011,
        LIGHT: 2007,
        PERUS: 2027,
        FIGHT: 2012,
        DEVOU: 2014,
        FOO: 2025,
        CARRY: 2001,
        HIT: 2012,
        FIND: 2019,
        CHANT: 2003,
        TAME: 2010,
        LOCK: 2006,
        DISCA: 2002,
        RUN: 2011,
        HOURS: 2031,
        FUM: 2025,
        TOTE: 2001,
        BRIEF: 2026,
        FREE: 2002,
        EXPLO: 2011,
        ON: 2007,
        QUIT: 2018,
        KILL: 2012,
        DISTU: 2029,
        CLOSE: 2006,
        CATCH: 2001,
        WHERE: 2019,
        FOE: 2025,
        ATTAC: 2012,
        FILL: 2022,
        RELEA: 2002,
        BREAK: 2028,
        WALK: 2011,
        FEED: 2021,
        FIE: 2025,
        NOTHI: 2005,
        PAUSE: 2030,
        GET: 2001,
        MUMBL: 2003,
        BLAST: 2023,
        SCORE: 2024,
        STEAL: 2001,
        WAKE: 2029,
        POUR: 2013,
        UTTER: 2003,
        SMASH: 2028,
        PLACA: 2010,
        STRIK: 2012,
        CAPTU: 2001,
        PROCE: 2011,
        DUMP: 2002,
        RUB: 2016,
        BLOWU: 2023,
        SHATT: 2028,
        FOLLO: 2011,
        UNLOC: 2004,
        EXTIN: 2008,
        DRINK: 2015,
        WAVE: 2009,
        SWING: 2009,
        SING: 2003,
        SUSPE: 2030,
        TRAVE: 2011,
        SAVE: 2030,
        KEEP: 2001,
        DETON: 2023,
        SAY: 2003,
        SHAKE: 2009,
        EAT: 2014,
        OFF: 2008
    }, {
        SWIM: 3147,
        INFOR: 3142,
        MIST: 3069,
        FIE: 3002,
        FEE: 3001,
        SESAM: 3050,
        HELP: 3051,
        ABRA: 3050,
        STOP: 3139,
        FUM: 3005,
        HOCUS: 3050,
        LOST: 3068,
        OPENS: 3050,
        POCUS: 3050,
        TREE: 3064,
        SHAZA: 3050,
        ABRAC: 3050,
        INFO: 3142,
        "?": 3051,
        FOE: 3003,
        DIG: 3066,
        TREES: 3064,
        FUCK: 3079,
        FOO: 3004,
        EXCAV: 3066
    }],
    da = [
        ["SET OF KEYS", "THERE ARE SOME KEYS ON THE GROUND HERE."],
        ["BRASS LANTERN", "THERE IS A SHINY BRASS LAMP NEARBY.", "THERE IS A LAMP SHINING NEARBY."],
        ["*GRATE", "THE GRATE IS LOCKED.", "THE GRATE IS OPEN."],
        ["WICKER CAGE",
            "THERE IS A SMALL WICKER CAGE DISCARDED NEARBY."
        ],
        ["BLACK ROD", "A THREE FOOT BLACK ROD WITH A RUSTY STAR ON AN END LIES NEARBY."],
        ["BLACK ROD", "A THREE FOOT BLACK ROD WITH A RUSTY MARK ON AN END LIES NEARBY."],
        ["*STEPS", "ROUGH STONE STEPS LEAD DOWN THE PIT.", "ROUGH STONE STEPS LEAD UP THE DOME."],
        ["LITTLE BIRD IN CAGE", "A CHEERFUL LITTLE BIRD IS SITTING HERE SINGING.", "THERE IS A LITTLE BIRD IN THE CAGE."],
        ["*RUSTY DOOR", "THE WAY NORTH IS BARRED BY A MASSIVE, RUSTY, IRON DOOR.", "THE WAY NORTH LEADS THROUGH A MASSIVE, RUSTY, IRON DOOR."],
        ["VELVET PILLOW", "A SMALL VELVET PILLOW LIES ON THE FLOOR."],
        ["*SNAKE", "A HUGE GREEN FIERCE SNAKE BARS THE WAY!", ">$<  (CHASED AWAY)"],
        ["*FISSURE", ">$<", "A CRYSTAL BRIDGE NOW SPANS THE FISSURE.", "THE CRYSTAL BRIDGE HAS VANISHED!"],
        ["*STONE TABLET", 'A MASSIVE STONE TABLET IMBEDDED IN THE WALL READS:\n"CONGRATULATIONS ON BRINGING LIGHT INTO THE DARK-ROOM!"'],
        ["GIANT CLAM  >GRUNT!<", "THERE IS AN ENORMOUS CLAM HERE WITH ITS SHELL TIGHTLY CLOSED."],
        ["GIANT OYSTER  >GROAN!<", "THERE IS AN ENORMOUS OYSTER HERE WITH ITS SHELL TIGHTLY CLOSED.",
            "INTERESTING.  THERE SEEMS TO BE SOMETHING WRITTEN ON THE UNDERSIDE OF\nTHE OYSTER."
        ],
        ['"SPELUNKER TODAY"', 'THERE ARE A FEW RECENT ISSUES OF "SPELUNKER TODAY" MAGAZINE HERE.'], h, h, ["TASTY FOOD", "THERE IS FOOD HERE."],
        ["SMALL BOTTLE", "THERE IS A BOTTLE OF WATER HERE.", "THERE IS AN EMPTY BOTTLE HERE.", "THERE IS A BOTTLE OF OIL HERE."],
        ["WATER IN THE BOTTLE"],
        ["OIL IN THE BOTTLE"],
        ["*MIRROR", ">$<"], "*PLANT;THERE IS A TINY LITTLE PLANT IN THE PIT, MURMURING \"WATER, WATER, ...\";THE PLANT SPURTS INTO FURIOUS GROWTH FOR A FEW SECONDS.;THERE IS A 12-FOOT-TALL BEANSTALK STRETCHING UP OUT OF THE PIT,\nBELLOWING \"WATER!! WATER!!\";THE PLANT GROWS EXPLOSIVELY, ALMOST FILLING THE BOTTOM OF THE PIT.;THERE IS A GIGANTIC BEANSTALK STRETCHING ALL THE WAY UP TO THE HOLE.;YOU'VE OVER-WATERED THE PLANT!\tIT'S SHRIVELING UP!  IT'S, IT'S...".split(";"),
        ["*PHONY PLANT (SEEN IN TWOPIT ROOM ONLY WHEN TALL ENOUGH)", ">$<", "THE TOP OF A 12-FOOT-TALL BEANSTALK IS POKING OUT OF THE WEST PIT.", "THERE IS A HUGE BEANSTALK GROWING OUT OF THE WEST PIT UP TO THE HOLE."],
        ["*STALACTITE", ">$<"],
        ["*SHADOWY FIGURE", "THE SHADOWY FIGURE SEEMS TO BE TRYING TO ATTRACT YOUR ATTENTION."],
        ["DWARF'S AXE", "THERE IS A LITTLE AXE HERE.", "THERE IS A LITTLE AXE LYING BESIDE THE BEAR."],
        ["*CAVE DRAWINGS", ">$<"],
        ["*PIRATE", ">$<"],
        ["*DRAGON", "A HUGE GREEN FIERCE DRAGON BARS THE WAY!",
            "CONGRATULATIONS!  YOU HAVE JUST VANQUISHED A DRAGON WITH YOUR BARE\nHANDS!\t(UNBELIEVABLE, ISN'T IT?)", "THE BODY OF A HUGE GREEN DEAD DRAGON IS LYING OFF TO ONE SIDE."
        ],
        ["*CHASM", 'A RICKETY WOODEN BRIDGE EXTENDS ACROSS THE CHASM, VANISHING INTO THE\nMIST.  A SIGN POSTED ON THE BRIDGE READS, "STOP! PAY TROLL!"', "THE WRECKAGE OF A BRIDGE (AND A DEAD BEAR) CAN BE SEEN AT THE BOTTOM\nOF THE CHASM."],
        ["*TROLL", "A BURLY TROLL STANDS BY THE BRIDGE AND INSISTS YOU THROW HIM A\nTREASURE BEFORE YOU MAY CROSS.",
            "THE TROLL STEPS OUT FROM BENEATH THE BRIDGE AND BLOCKS YOUR WAY.", ">$<  (CHASED AWAY)"
        ],
        ["*PHONY TROLL", "THE TROLL IS NOWHERE TO BE SEEN."],
        [">$<  (BEAR USES RTEXT 141)", "THERE IS A FEROCIOUS CAVE BEAR EYING YOU FROM THE FAR END OF THE ROOM!", "THERE IS A GENTLE CAVE BEAR SITTING PLACIDLY IN ONE CORNER.", "THERE IS A CONTENTED-LOOKING BEAR WANDERING ABOUT NEARBY.", ">$<  (DEAD)"],
        ["*MESSAGE IN SECOND MAZE", 'THERE IS A MESSAGE SCRAWLED IN THE DUST IN A FLOWERY SCRIPT, READING:\n"THIS IS NOT THE MAZE WHERE THE PIRATE LEAVES HIS TREASURE CHEST."'],
        ["*VOLCANO AND/OR GEYSER", ">$<"],
        ["*VENDING MACHINE", 'THERE IS A MASSIVE VENDING MACHINE HERE.  THE INSTRUCTIONS ON IT READ:\n"DROP COINS HERE TO RECEIVE FRESH BATTERIES."'],
        ["BATTERIES", "THERE ARE FRESH BATTERIES HERE.", "SOME WORN-OUT BATTERIES HAVE BEEN DISCARDED NEARBY."],
        ["*CARPET AND/OR MOSS", ">$<"], h, h, h, h, h, h, h, h, h, ["LARGE GOLD NUGGET", "THERE IS A LARGE SPARKLING NUGGET OF GOLD HERE!"],
        ["SEVERAL DIAMONDS", "THERE ARE DIAMONDS HERE!"],
        ["BARS OF SILVER", "THERE ARE BARS OF SILVER HERE!"],
        ["PRECIOUS JEWELRY",
            "THERE IS PRECIOUS JEWELRY HERE!"
        ],
        ["RARE COINS", "THERE ARE MANY COINS HERE!"],
        ["TREASURE CHEST", "THE PIRATE'S TREASURE CHEST IS HERE!"],
        ["GOLDEN EGGS", "THERE IS A LARGE NEST HERE, FULL OF GOLDEN EGGS!", "THE NEST OF GOLDEN EGGS HAS VANISHED!", "DONE!"],
        ["JEWELED TRIDENT", "THERE IS A JEWEL-ENCRUSTED TRIDENT HERE!"],
        ["MING VASE", "THERE IS A DELICATE, PRECIOUS, MING VASE HERE!", "THE VASE IS NOW RESTING, DELICATELY, ON A VELVET PILLOW.", "THE FLOOR IS LITTERED WITH WORTHLESS SHARDS OF POTTERY.", "THE MING VASE DROPS WITH A DELICATE CRASH."],
        ["EGG-SIZED EMERALD", "THERE IS AN EMERALD HERE THE SIZE OF A PLOVER'S EGG!"],
        ["PLATINUM PYRAMID", "THERE IS A PLATINUM PYRAMID HERE, 8 INCHES ON A SIDE!"],
        ["GLISTENING PEARL", "OFF TO ONE SIDE LIES A GLISTENING PEARL!"],
        ["PERSIAN RUG", "THERE IS A PERSIAN RUG SPREAD OUT ON THE FLOOR!", "THE DRAGON IS SPRAWLED OUT ON A PERSIAN RUG!!"],
        ["RARE SPICES", "THERE ARE RARE SPICES HERE!"],
        ["GOLDEN CHAIN", "THERE IS A GOLDEN CHAIN LYING IN A HEAP ON THE FLOOR!", "THE BEAR IS LOCKED TO THE WALL WITH A GOLDEN CHAIN!",
            "THERE IS A GOLDEN CHAIN LOCKED TO THE WALL!"
        ]
    ],
    ea = ['SOMEWHERE NEARBY IS COLOSSAL CAVE, WHERE OTHERS HAVE FOUND FORTUNES IN\nTREASURE AND GOLD, THOUGH IT IS RUMORED THAT SOME WHO ENTER ARE NEVER\nSEEN AGAIN.  MAGIC IS SAID TO WORK IN THE CAVE.  I WILL BE YOUR EYES\nAND HANDS.  DIRECT ME WITH COMMANDS OF 1 OR 2 WORDS.  I SHOULD WARN\nYOU THAT I LOOK AT ONLY THE FIRST FIVE LETTERS OF EACH WORD, SO YOU\'LL\nHAVE TO ENTER "NORTHEAST" AS "NE" TO DISTINGUISH IT FROM "NORTH".\n(SHOULD YOU GET STUCK, TYPE "HELP" FOR SOME GENERAL HINTS.  FOR INFOR-\nMATION ON HOW TO END YOUR ADVENTURE, ETC., TYPE "INFO".)\n',
        "A LITTLE DWARF WITH A BIG KNIFE BLOCKS YOUR WAY.", "A LITTLE DWARF JUST WALKED AROUND A CORNER, SAW YOU, THREW A LITTLE\nAXE AT YOU WHICH MISSED, CURSED, AND RAN AWAY.", "THERE IS A THREATENING LITTLE DWARF IN THE ROOM WITH YOU!", "ONE SHARP NASTY KNIFE IS THROWN AT YOU!", "NONE OF THEM HIT YOU!", "ONE OF THEM GETS YOU!", 'A HOLLOW VOICE SAYS "PLUGH".', "THERE IS NO WAY TO GO THAT DIRECTION.", "I AM UNSURE HOW YOU ARE FACING.  USE COMPASS POINTS OR NEARBY OBJECTS.", "I DON'T KNOW IN FROM OUT HERE.\tUSE COMPASS POINTS OR NAME SOMETHING\nIN THE GENERAL DIRECTION YOU WANT TO GO.",
        "I DON'T KNOW HOW TO APPLY THAT WORD HERE.", "I DON'T UNDERSTAND THAT!", "I'M GAME.  WOULD YOU CARE TO EXPLAIN HOW?", "SORRY, BUT I AM NOT ALLOWED TO GIVE MORE DETAIL.  I WILL REPEAT THE\nLONG DESCRIPTION OF YOUR LOCATION.", "IT IS NOW PITCH DARK.  IF YOU PROCEED YOU WILL LIKELY FALL INTO A PIT.", "IF YOU PREFER, SIMPLY TYPE W RATHER THAN WEST.", "ARE YOU TRYING TO CATCH THE BIRD?", "THE BIRD IS FRIGHTENED RIGHT NOW AND YOU CANNOT CATCH IT NO MATTER\nWHAT YOU TRY.  PERHAPS YOU MIGHT TRY LATER.", "ARE YOU TRYING TO SOMEHOW DEAL WITH THE SNAKE?",
        "YOU CAN'T KILL THE SNAKE, OR DRIVE IT AWAY, OR AVOID IT, OR ANYTHING\nLIKE THAT.  THERE IS A WAY TO GET BY, BUT YOU DON'T HAVE THE NECESSARY\nRESOURCES RIGHT NOW.", "DO YOU REALLY WANT TO QUIT NOW?", "YOU FELL INTO A PIT AND BROKE EVERY BONE IN YOUR BODY!", "YOU ARE ALREADY CARRYING IT!", "YOU CAN'T BE SERIOUS!", "THE BIRD WAS UNAFRAID WHEN YOU ENTERED, BUT AS YOU APPROACH IT BECOMES\nDISTURBED AND YOU CANNOT CATCH IT.", "YOU CAN CATCH THE BIRD, BUT YOU CANNOT CARRY IT.", "THERE IS NOTHING HERE WITH A LOCK!",
        "YOU AREN'T CARRYING IT!", "THE LITTLE BIRD ATTACKS THE GREEN SNAKE, AND IN AN ASTOUNDING FLURRY\nDRIVES THE SNAKE AWAY.", "YOU HAVE NO KEYS!", "IT HAS NO LOCK.", "I DON'T KNOW HOW TO LOCK OR UNLOCK SUCH A THING.", "IT WAS ALREADY LOCKED.", "THE GRATE IS NOW LOCKED.", "THE GRATE IS NOW UNLOCKED.", "IT WAS ALREADY UNLOCKED.", "YOU HAVE NO SOURCE OF LIGHT.", "YOUR LAMP IS NOW ON.", "YOUR LAMP IS NOW OFF.", "THERE IS NO WAY TO GET PAST THE BEAR TO UNLOCK THE CHAIN, WHICH IS\nPROBABLY JUST AS WELL.", "NOTHING HAPPENS.",
        "WHERE?", "THERE IS NOTHING HERE TO ATTACK.", "THE LITTLE BIRD IS NOW DEAD.  ITS BODY DISAPPEARS.", "ATTACKING THE SNAKE BOTH DOESN'T WORK AND IS VERY DANGEROUS.", "YOU KILLED A LITTLE DWARF.", "YOU ATTACK A LITTLE DWARF, BUT HE DODGES OUT OF THE WAY.", "WITH WHAT?  YOUR BARE HANDS?", "GOOD TRY, BUT THAT IS AN OLD WORN-OUT MAGIC WORD.", 'I KNOW OF PLACES, ACTIONS, AND THINGS.\tMOST OF MY VOCABULARY\nDESCRIBES PLACES AND IS USED TO MOVE YOU THERE.  TO MOVE, TRY WORDS\nLIKE FOREST, BUILDING, DOWNSTREAM, ENTER, EAST, WEST, NORTH, SOUTH,\nUP, OR DOWN.  I KNOW ABOUT A FEW SPECIAL OBJECTS, LIKE A BLACK ROD\nHIDDEN IN THE CAVE.  THESE OBJECTS CAN BE MANIPULATED USING SOME OF\nTHE ACTION WORDS THAT I KNOW.  USUALLY YOU WILL NEED TO GIVE BOTH THE\nOBJECT AND ACTION WORDS (IN EITHER ORDER), BUT SOMETIMES I CAN INFER\nTHE OBJECT FROM THE VERB ALONE.  SOME OBJECTS ALSO IMPLY VERBS; IN\nPARTICULAR, "INVENTORY" IMPLIES "TAKE INVENTORY", WHICH CAUSES ME TO\nGIVE YOU A LIST OF WHAT YOU\'RE CARRYING.  THE OBJECTS HAVE SIDE\nEFFECTS; FOR INSTANCE, THE ROD SCARES THE BIRD.  USUALLY PEOPLE HAVING\nTROUBLE MOVING JUST NEED TO TRY A FEW MORE WORDS.  USUALLY PEOPLE\nTRYING UNSUCCESSFULLY TO MANIPULATE AN OBJECT ARE ATTEMPTING SOMETHING\nBEYOND THEIR (OR MY!) CAPABILITIES AND SHOULD TRY A COMPLETELY\nDIFFERENT TACK.  TO SPEED THE GAME YOU CAN SOMETIMES MOVE LONG\nDISTANCES WITH A SINGLE WORD.  FOR EXAMPLE, "BUILDING" USUALLY GETS\nYOU TO THE BUILDING FROM ANYWHERE ABOVE GROUND EXCEPT WHEN LOST IN THE\nFOREST.  ALSO, NOTE THAT CAVE PASSAGES TURN A LOT, AND THAT LEAVING A\nROOM TO THE NORTH DOES NOT GUARANTEE ENTERING THE NEXT FROM THE SOUTH.\nGOOD LUCK!',
        "IT MISSES!", "IT GETS YOU!", "OK", "YOU CAN'T UNLOCK THE KEYS.", "YOU HAVE CRAWLED AROUND IN SOME LITTLE HOLES AND WOUND UP BACK IN THE\nMAIN PASSAGE.", "I DON'T KNOW WHERE THE CAVE IS, BUT HEREABOUTS NO STREAM CAN RUN ON\nTHE SURFACE FOR LONG.  I WOULD TRY THE STREAM.", "I NEED MORE DETAILED INSTRUCTIONS TO DO THAT.", "I CAN ONLY TELL YOU WHAT YOU SEE AS YOU MOVE ABOUT AND MANIPULATE\nTHINGS.  I CANNOT TELL YOU WHERE REMOTE THINGS ARE.", "I DON'T KNOW THAT WORD.", "WHAT?", "ARE YOU TRYING TO GET INTO THE CAVE?",
        "THE GRATE IS VERY SOLID AND HAS A HARDENED STEEL LOCK.\tYOU CANNOT\nENTER WITHOUT A KEY, AND THERE ARE NO KEYS NEARBY.  I WOULD RECOMMEND\nLOOKING ELSEWHERE FOR THE KEYS.", "THE TREES OF THE FOREST ARE LARGE HARDWOOD OAK AND MAPLE, WITH AN\nOCCASIONAL GROVE OF PINE OR SPRUCE.  THERE IS QUITE A BIT OF UNDER-\nGROWTH, LARGELY BIRCH AND ASH SAPLINGS PLUS NONDESCRIPT BUSHES OF\nVARIOUS SORTS.\tTHIS TIME OF YEAR VISIBILITY IS QUITE RESTRICTED BY\nALL THE LEAVES, BUT TRAVEL IS QUITE EASY IF YOU DETOUR AROUND THE\nSPRUCE AND BERRY BUSHES.",
        "WELCOME TO ADVENTURE!!\tWOULD YOU LIKE INSTRUCTIONS?", "DDIGGING WITHOUT A SHOVEL IS QUITE IMPRACTICAL.  EVEN WITH A SHOVEL\nPROGRESS IS UNLIKELY.", "BLASTING REQUIRES DYNAMITE.", "I'M AS CONFUSED AS YOU ARE.", "MIST IS A WHITE VAPOR, USUALLY WATER, SEEN FROM TIME TO TIME IN\nCAVERNS.  IT CAN BE FOUND ANYWHERE BUT IS FREQUENTLY A SIGN OF A DEEP\nPIT LEADING DOWN TO WATER.", "YOUR FEET ARE NOW WET.", "I THINK I JUST LOST MY APPETITE.", "THANK YOU, IT WAS DELICIOUS!", "YOU HAVE TAKEN A DRINK FROM THE STREAM.  THE WATER TASTES STRONGLY OF\nMINERALS, BUT IS NOT UNPLEASANT.  IT IS EXTREMELY COLD.",
        "THE BOTTLE OF WATER IS NOW EMPTY.", "RUBBING THE ELECTRIC LAMP IS NOT PARTICULARLY REWARDING.  ANYWAY,\nNOTHING EXCITING HAPPENS.", "PECULIAR.  NOTHING UNEXPECTED HAPPENS.", "YOUR BOTTLE IS EMPTY AND THE GROUND IS WET.", "YOU CAN'T POUR THAT.", "WATCH IT!", "WHICH WAY?", "OH DEAR, YOU SEEM TO HAVE GOTTEN YOURSELF KILLED.  I MIGHT BE ABLE TO\nHELP YOU OUT, BUT I'VE NEVER REALLY DONE THIS BEFORE.  DO YOU WANT ME\nTO TRY TO REINCARNATE YOU?", "ALL RIGHT.  BUT DON'T BLAME ME IF SOMETHING GOES WR......\n\t\t    --- POOF!! ---\nYOU ARE ENGULFED IN A CLOUD OF ORANGE SMOKE.  COUGHING AND GASPING,\nYOU EMERGE FROM THE SMOKE AND FIND....",
        "YOU CLUMSY OAF, YOU'VE DONE IT AGAIN!  I DON'T KNOW HOW LONG I CAN\nKEEP THIS UP.  DO YOU WANT ME TO TRY REINCARNATING YOU AGAIN?", "OKAY, NOW WHERE DID I PUT MY ORANGE SMOKE?....\t>POOF!<\nEVERYTHING DISAPPEARS IN A DENSE CLOUD OF ORANGE SMOKE.", "NOW YOU'VE REALLY DONE IT!  I'M OUT OF ORANGE SMOKE!  YOU DON'T EXPECT\nME TO DO A DECENT REINCARNATION WITHOUT ANY ORANGE SMOKE, DO YOU?", "OKAY, IF YOU'RE SO SMART, DO IT YOURSELF!  I'M LEAVING!", h, h, h, '>>> MESSAGES 81 THRU 90 ARE RESERVED FOR "OBITUARIES". <<<',
        "SORRY, BUT I NO LONGER SEEM TO REMEMBER HOW IT WAS YOU GOT HERE.", "YOU CAN'T CARRY ANYTHING MORE.\tYOU'LL HAVE TO DROP SOMETHING FIRST.", "YOU CAN'T GO THROUGH A LOCKED STEEL GRATE!", "I BELIEVE WHAT YOU WANT IS RIGHT HERE WITH YOU.", "YOU DON'T FIT THROUGH A TWO-INCH SLIT!", "I RESPECTFULLY SUGGEST YOU GO ACROSS THE BRIDGE INSTEAD OF JUMPING.", "THERE IS NO WAY ACROSS THE FISSURE.", "YOU'RE NOT CARRYING ANYTHING.", "YOU ARE CURRENTLY HOLDING THE FOLLOWING:", "IT'S NOT HUNGRY (IT'S MERELY PININ' FOR THE FJORDS).  BESIDES, YOU\nHAVE NO BIRD SEED.",
        "THE SNAKE HAS NOW DEVOURED YOUR BIRD.", "THERE'S NOTHING HERE IT WANTS TO EAT (EXCEPT PERHAPS YOU).", "YOU FOOL, DWARVES EAT ONLY COAL!  NOW YOU'VE MADE HIM *REALLY* MAD!!", "YOU HAVE NOTHING IN WHICH TO CARRY IT.", "YOUR BOTTLE IS ALREADY FULL.", "THERE IS NOTHING HERE WITH WHICH TO FILL THE BOTTLE.", "YOUR BOTTLE IS NOW FULL OF WATER.", "YOUR BOTTLE IS NOW FULL OF OIL.", "YOU CAN'T FILL THAT.", "DON'T BE RIDICULOUS!", "THE DOOR IS EXTREMELY RUSTY AND REFUSES TO OPEN.", 'THE PLANT INDIGNANTLY SHAKES THE OIL OFF ITS LEAVES AND ASKS, "WATER?"',
        "THE HINGES ARE QUITE THOROUGHLY RUSTED NOW AND WON'T BUDGE.", "THE OIL HAS FREED UP THE HINGES SO THAT THE DOOR WILL NOW MOVE,\nALTHOUGH IT REQUIRES SOME EFFORT.", "THE PLANT HAS EXCEPTIONALLY DEEP ROOTS AND CANNOT BE PULLED FREE.", "THE DWARVES' KNIVES VANISH AS THEY STRIKE THE WALLS OF THE CAVE.", "SOMETHING YOU'RE CARRYING WON'T FIT THROUGH THE TUNNEL WITH YOU.\nYOU'D BEST TAKE INVENTORY AND DROP SOMETHING.", "YOU CAN'T FIT THIS FIVE-FOOT CLAM THROUGH THAT LITTLE PASSAGE!", "YOU CAN'T FIT THIS FIVE-FOOT OYSTER THROUGH THAT LITTLE PASSAGE!",
        "I ADVISE YOU TO PUT DOWN THE CLAM BEFORE OPENING IT.  >STRAIN!<", "I ADVISE YOU TO PUT DOWN THE OYSTER BEFORE OPENING IT.\t>WRENCH!<", "YOU DON'T HAVE ANYTHING STRONG ENOUGH TO OPEN THE CLAM.", "YOU DON'T HAVE ANYTHING STRONG ENOUGH TO OPEN THE OYSTER.", "A GLISTENING PEARL FALLS OUT OF THE CLAM AND ROLLS AWAY.  GOODNESS,\nTHIS MUST REALLY BE AN OYSTER.\t(I NEVER WAS VERY GOOD AT IDENTIFYING\nBIVALVES.)  WHATEVER IT IS, IT HAS NOW SNAPPED SHUT AGAIN.", "THE OYSTER CREAKS OPEN, REVEALING NOTHING BUT OYSTER INSIDE.  IT\nPROMPTLY SNAPS SHUT AGAIN.",
        "YOU HAVE CRAWLED AROUND IN SOME LITTLE HOLES AND FOUND YOUR WAY\nBLOCKED BY A RECENT CAVE-IN.  YOU ARE NOW BACK IN THE MAIN PASSAGE.", "THERE ARE FAINT RUSTLING NOISES FROM THE DARKNESS BEHIND YOU.", 'OUT FROM THE SHADOWS BEHIND YOU POUNCES A BEARDED PIRATE!  "HAR, HAR,"\nHE CHORTLES, "I\'LL JUST TAKE ALL THIS BOOTY AND HIDE IT AWAY WITH ME\nCHEST DEEP IN THE MAZE!"  HE SNATCHES YOUR TREASURE AND VANISHES INTO\nTHE GLOOM.', 'A SEPULCHRAL VOICE REVERBERATING THROUGH THE CAVE, SAYS, "CAVE CLOSING\nSOON.  ALL ADVENTURERS EXIT IMMEDIATELY THROUGH MAIN OFFICE."',
        'A MYSTERIOUS RECORDED VOICE GROANS INTO LIFE AND ANNOUNCES:\n   "THIS EXIT IS CLOSED.  PLEASE LEAVE VIA MAIN OFFICE."', "IT LOOKS AS THOUGH YOU'RE DEAD.  WELL, SEEING AS HOW IT'S SO CLOSE TO\nCLOSING TIME ANYWAY, I THINK WE'LL JUST CALL IT A DAY.", 'THE SEPULCHRAL VOICE ENTONES, "THE CAVE IS NOW CLOSED."  AS THE ECHOES\nFADE, THERE IS A BLINDING FLASH OF LIGHT (AND A SMALL PUFF OF ORANGE\nSMOKE). . . .\t AS YOUR EYES REFOCUS, YOU LOOK AROUND AND FIND...', "THERE IS A LOUD EXPLOSION, AND A TWENTY-FOOT HOLE APPEARS IN THE FAR\nWALL, BURYING THE DWARVES IN THE RUBBLE.  YOU MARCH THROUGH THE HOLE\nAND FIND YOURSELF IN THE MAIN OFFICE, WHERE A CHEERING BAND OF\nFRIENDLY ELVES CARRY THE CONQUERING ADVENTURER OFF INTO THE SUNSET.",
        "THERE IS A LOUD EXPLOSION, AND A TWENTY-FOOT HOLE APPEARS IN THE FAR\nWALL, BURYING THE SNAKES IN THE RUBBLE.  A RIVER OF MOLTEN LAVA POURS\nIN THROUGH THE HOLE, DESTROYING EVERYTHING IN ITS PATH, INCLUDING YOU!", "THERE IS A LOUD EXPLOSION, AND YOU ARE SUDDENLY SPLASHED ACROSS THE\nWALLS OF THE ROOM.", "THE RESULTING RUCKUS HAS AWAKENED THE DWARVES.\tTHERE ARE NOW SEVERAL\nTHREATENING LITTLE DWARVES IN THE ROOM WITH YOU!  MOST OF THEM THROW\nKNIVES AT YOU!\tALL OF THEM GET YOU!", "OH, LEAVE THE POOR UNHAPPY BIRD ALONE.",
        "I DARESAY WHATEVER YOU WANT IS AROUND HERE SOMEWHERE.", 'I DON\'T KNOW THE WORD "STOP".  USE "QUIT" IF YOU WANT TO GIVE UP.', "YOU CAN'T GET THERE FROM HERE.", "YOU ARE BEING FOLLOWED BY A VERY LARGE, TAME BEAR.", 'IF YOU WANT TO END YOUR ADVENTURE EARLY, SAY "QUIT".  TO SUSPEND YOUR\nADVENTURE SUCH THAT YOU CAN CONTINUE LATER, SAY "SUSPEND" (OR "PAUSE"\nOR "SAVE").  TO SEE WHAT HOURS THE CAVE IS NORMALLY OPEN, SAY "HOURS".\nTO SEE HOW WELL YOU\'RE DOING, SAY "SCORE".  TO GET FULL CREDIT FOR A\nTREASURE, YOU MUST HAVE LEFT IT SAFELY IN THE BUILDING, THOUGH YOU GET\nPARTIAL CREDIT JUST FOR LOCATING IT.  YOU LOSE POINTS FOR GETTING\nKILLED, OR FOR QUITTING, THOUGH THE FORMER COSTS YOU MORE.  THERE ARE\nALSO POINTS BASED ON HOW MUCH (IF ANY) OF THE CAVE YOU\'VE MANAGED TO\nEXPLORE; IN PARTICULAR, THERE IS A LARGE BONUS JUST FOR GETTING IN (TO\nDISTINGUISH THE BEGINNERS FROM THE REST OF THE PACK), AND THERE ARE\nOTHER WAYS TO DETERMINE WHETHER YOU\'VE BEEN THROUGH SOME OF THE MORE\nHARROWING SECTIONS.  IF YOU THINK YOU\'VE FOUND ALL THE TREASURES, JUST\nKEEP EXPLORING FOR A WHILE.  IF NOTHING INTERESTING HAPPENS, YOU\nHAVEN\'T FOUND THEM ALL YET.  IF SOMETHING INTERESTING *DOES* HAPPEN,\nIT MEANS YOU\'RE GETTING A BONUS AND HAVE AN OPPORTUNITY TO GARNER MANY\nMORE POINTS IN THE MASTER\'S SECTION.  I MAY OCCASIONALLY OFFER HINTS\nIF YOU SEEM TO BE HAVING TROUBLE.  IF I DO, I\'LL WARN YOU IN ADVANCE\nHOW MUCH IT WILL AFFECT YOUR SCORE TO ACCEPT THE HINTS.  FINALLY, TO\nSAVE PAPER, YOU MAY SPECIFY "BRIEF", WHICH TELLS ME NEVER TO REPEAT\nTHE FULL DESCRIPTION OF A PLACE UNLESS YOU EXPLICITLY ASK ME TO.',
        "DO YOU INDEED WISH TO QUIT NOW?", "THERE IS NOTHING HERE WITH WHICH TO FILL THE VASE.", "THE SUDDEN CHANGE IN TEMPERATURE HAS DELICATELY SHATTERED THE VASE.", "IT IS BEYOND YOUR POWER TO DO THAT.", "I DON'T KNOW HOW.", "IT IS TOO FAR UP FOR YOU TO REACH.", "YOU KILLED A LITTLE DWARF.  THE BODY VANISHES IN A CLOUD OF GREASY\nBLACK SMOKE.", "THE SHELL IS VERY STRONG AND IS IMPERVIOUS TO ATTACK.", "WHAT'S THE MATTER, CAN'T YOU READ?  NOW YOU'D BEST START OVER.", "THE AXE BOUNCES HARMLESSLY OFF THE DRAGON'S THICK SCALES.",
        "THE DRAGON LOOKS RATHER NASTY.\tYOU'D BEST NOT TRY TO GET BY.", "THE LITTLE BIRD ATTACKS THE GREEN DRAGON, AND IN AN ASTOUNDING FLURRY\nGETS BURNT TO A CINDER.  THE ASHES BLOW AWAY.", "ON WHAT?", 'OKAY, FROM NOW ON I\'LL ONLY DESCRIBE A PLACE IN FULL THE FIRST TIME\nYOU COME TO IT.  TO GET THE FULL DESCRIPTION, SAY "LOOK".', "TROLLS ARE CLOSE RELATIVES WITH THE ROCKS AND HAVE SKIN AS TOUGH AS\nTHAT OF A RHINOCEROS.  THE TROLL FENDS OFF YOUR BLOWS EFFORTLESSLY.", 'THE TROLL DEFTLY CATCHES THE AXE, EXAMINES IT CAREFULLY, AND TOSSES IT\nBACK, DECLARING, "GOOD WORKMANSHIP, BUT IT\'S NOT VALUABLE ENOUGH."',
        "THE TROLL CATCHES YOUR TREASURE AND SCURRIES AWAY OUT OF SIGHT.", "THE TROLL REFUSES TO LET YOU CROSS.", "THERE IS NO LONGER ANY WAY ACROSS THE CHASM.", "JUST AS YOU REACH THE OTHER SIDE, THE BRIDGE BUCKLES BENEATH THE\nWEIGHT OF THE BEAR, WHICH WAS STILL FOLLOWING YOU AROUND.  YOU\nSCRABBLE DESPERATELY FOR SUPPORT, BUT AS THE BRIDGE COLLAPSES YOU\nSTUMBLE BACK AND FALL INTO THE CHASM.", "THE BEAR LUMBERS TOWARD THE TROLL, WHO LETS OUT A STARTLED SHRIEK AND\nSCURRIES AWAY.\tTHE BEAR SOON GIVES UP THE PURSUIT AND WANDERS BACK.",
        "THE AXE MISSES AND LANDS NEAR THE BEAR WHERE YOU CAN'T GET AT IT.", "WITH WHAT?  YOUR BARE HANDS?  AGAINST *HIS* BEAR HANDS??", "THE BEAR IS CONFUSED; HE ONLY WANTS TO BE YOUR FRIEND.", "FOR CRYING OUT LOUD, THE POOR THING IS ALREADY DEAD!", "THE BEAR EAGERLY WOLFS DOWN YOUR FOOD, AFTER WHICH HE SEEMS TO CALM\nDOWN CONSIDERABLY AND EVEN BECOMES RATHER FRIENDLY.", "THE BEAR IS STILL CHAINED TO THE WALL.", "THE CHAIN IS STILL LOCKED.", "THE CHAIN IS NOW UNLOCKED.", "THE CHAIN IS NOW LOCKED.", "THERE IS NOTHING HERE TO WHICH THE CHAIN CAN BE LOCKED.",
        "THERE IS NOTHING HERE TO EAT.", "DO YOU WANT THE HINT?", "DO YOU NEED HELP GETTING OUT OF THE MAZE?", "YOU CAN MAKE THE PASSAGES LOOK LESS ALIKE BY DROPPING THINGS.", "ARE YOU TRYING TO EXPLORE BEYOND THE PLOVER ROOM?", "THERE IS A WAY TO EXPLORE THAT REGION WITHOUT HAVING TO WORRY ABOUT\nFALLING INTO A PIT.  NONE OF THE OBJECTS AVAILABLE IS IMMEDIATELY\nUSEFUL IN DISCOVERING THE SECRET.", "DO YOU NEED HELP GETTING OUT OF HERE?", "DON'T GO WEST.", "GLUTTONY IS NOT ONE OF THE TROLL'S VICES.  AVARICE, HOWEVER, IS.",
        "YOUR LAMP IS GETTING DIM.  YOU'D BEST START WRAPPING THIS UP, UNLESS\nYOU CAN FIND SOME FRESH BATTERIES.  I SEEM TO RECALL THERE'S A VENDING\nMACHINE IN THE MAZE.  BRING SOME COINS WITH YOU.", "YOUR LAMP HAS RUN OUT OF POWER.", "THERE'S NOT MUCH POINT IN WANDERING AROUND OUT HERE, AND YOU CAN'T\nEXPLORE THE CAVE WITHOUT A LAMP.  SO LET'S JUST CALL IT A DAY.", 'THERE ARE FAINT RUSTLING NOISES FROM THE DARKNESS BEHIND YOU.  AS YOU\nTURN TOWARD THEM, THE BEAM OF YOUR LAMP FALLS ACROSS A BEARDED PIRATE.\nHE IS CARRYING A LARGE CHEST.  "SHIVER ME TIMBERS!" HE CRIES, "I\'VE\nBEEN SPOTTED!  I\'D BEST HIE MESELF OFF TO THE MAZE TO HIDE ME CHEST!"\nWITH THAT, HE VANISHES INTO THE GLOOM.',
        "YOUR LAMP IS GETTING DIM.  YOU'D BEST GO BACK FOR THOSE BATTERIES.", "YOUR LAMP IS GETTING DIM.  I'M TAKING THE LIBERTY OF REPLACING THE\nBATTERIES.", "YOUR LAMP IS GETTING DIM, AND YOU'RE OUT OF SPARE BATTERIES.  YOU'D\nBEST START WRAPPING THIS UP.", "I'M AFRAID THE MAGAZINE IS WRITTEN IN DWARVISH.", '"THIS IS NOT THE MAZE WHERE THE PIRATE LEAVES HIS TREASURE CHEST."', "HMMM, THIS LOOKS LIKE A CLUE, WHICH MEANS IT'LL COST YOU 10 POINTS TO\nREAD IT.  SHOULD I GO AHEAD AND READ IT ANYWAY?", 'IT SAYS, "THERE IS SOMETHING STRANGE ABOUT THIS PLACE, SUCH THAT ONE\nOF THE WORDS I\'VE ALWAYS KNOWN NOW HAS A NEW EFFECT."',
        "IT SAYS THE SAME THING IT DID BEFORE.", "I'M AFRAID I DON'T UNDERSTAND.", '"CONGRATULATIONS ON BRINGING LIGHT INTO THE DARK-ROOM!"', "YOU STRIKE THE MIRROR A RESOUNDING BLOW, WHEREUPON IT SHATTERS INTO A\nMYRIAD TINY FRAGMENTS.", "YOU HAVE TAKEN THE VASE AND HURLED IT DELICATELY TO THE GROUND.", "YOU PROD THE NEAREST DWARF, WHO WAKES UP GRUMPILY, TAKES ONE LOOK AT\nYOU, CURSES, AND GRABS FOR HIS AXE.", "IS THIS ACCEPTABLE?", "THERE'S NO POINT IN SUSPENDING A DEMONSTRATION GAME."
    ],
    ca = [3, 3, 8, 10, 11, 0, 14, 13,
        94, 96, 19, 17, 101, 103, 0, 106, 0, 0, 3, 3, 0, 0, 109, 25, 23, 111, 35, 0, 97, 0, 119, 117, 117, 0, 130, 0, 126, 140, 0, 96, 0, 0, 0, 0, 0, 0, 0, 0, 0, 18, 27, 28, 29, 30, 0, 92, 95, 97, 100, 101, 0, 119, 127, 130
    ],
    ba = [0, 0, 9, 0, 0, 0, 15, 0, -1, 0, -1, 27, -1, 0, 0, 0, -1, 0, 0, 0, 0, 0, -1, -1, 67, -1, 110, 0, -1, -1, 121, 122, 122, 0, -1, -1, -1, -1, 0, -1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 121, 0, -1],
    Ja = [24, 29, 0, 33, 0, 33, 38, 38, 42, 14, 43, 110, 29, 110, 73, 75, 29, 13, 59, 59, 174, 109, 67, 13, 147, 155, 195, 146, 110, 13, 13],
    G = [{
            Q: 35,
            message: "YOU ARE OBVIOUSLY A RANK AMATEUR.  BETTER LUCK NEXT TIME."
        },
        {
            Q: 100,
            message: "YOUR SCORE QUALIFIES YOU AS A NOVICE CLASS ADVENTURER."
        }, {
            Q: 130,
            message: 'YOU HAVE ACHIEVED THE RATING: "EXPERIENCED ADVENTURER".'
        }, {
            Q: 200,
            message: 'YOU MAY NOW CONSIDER YOURSELF A "SEASONED ADVENTURER".'
        }, {
            Q: 250,
            message: 'YOU HAVE REACHED "JUNIOR MASTER" STATUS.'
        }, {
            Q: 300,
            message: "YOUR SCORE PUTS YOU IN MASTER ADVENTURER CLASS C."
        }, {
            Q: 330,
            message: "YOUR SCORE PUTS YOU IN MASTER ADVENTURER CLASS B."
        }, {
            Q: 349,
            message: "YOUR SCORE PUTS YOU IN MASTER ADVENTURER CLASS A."
        }, {
            Q: 9999,
            message: "ALL OF ADVENTUREDOM GIVES TRIBUTE TO YOU, ADVENTURER GRANDMASTER!"
        }
    ],
    n = [h, [9999, 10, 0, 0],
        [9999, 5, 0, 0],
        [4, 2, 62, 63],
        [5, 2, 18, 19],
        [8, 2, 20, 21],
        [75, 4, 176, 177],
        [25, 5, 178, 179],
        [20, 3, 180, 181]
    ];

function $a(a, b) {
    "length" in a || e(Error("Missing required array"));
    return function (c) {
        if (1 <= c && c <= b) return c--, c < a.length ? a[c] : 0;
        e(Error("Index out of bounds [1-" + b + "]: " + c))
    }
}
var Q = $a([5, 1, 5, 5, 1, 1, 5, 17, 1, 1, 0, 0, 32, 0, 0, 2, 0, 0, 64, 2, 2, 2, 0, 6, 0, 2, 0, 0, 0, 0, 2, 2, 0, 0, 0, 0, 0, 4, 0, 2, 0, 128, 128, 128, 128, 136, 136, 136, 128, 128, 128, 128, 128, 136, 128, 136, 0, 8, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 128, 128, 136, 0, 0, 8, 136, 128, 0, 2, 2, 0, 0, 0, 0, 4, 0, 0, 0, 256, 257, 256, 0, 0, 0, 0, 0, 0, 512, 0, 0, 0, 0, 4, 0, 1, 1, 0, 0, 0, 0, 0, 8, 8, 8, 8, 9, 8, 8, 8, 8], 150),
    r = $a(ba, 100),
    t = $a(ca, 100);
window.Adventure = m;
m.prototype.start = m.prototype.start;
m.prototype.setup = m.prototype.gb;