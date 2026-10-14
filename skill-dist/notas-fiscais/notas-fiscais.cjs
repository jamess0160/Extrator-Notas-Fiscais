"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __commonJS = (cb, mod) => function __require() {
  try {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  } catch (e) {
    throw mod = 0, e;
  }
};
var __export = (target, all3) => {
  for (var name in all3)
    __defProp(target, name, { get: all3[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));

// node_modules/dotenv/dist/index.cjs
var require_dist = __commonJS({
  "node_modules/dotenv/dist/index.cjs"(exports2, module2) {
    var k = (e, n) => () => {
      try {
        return n || e((n = { exports: {} }).exports, n), n.exports;
      } catch (t) {
        throw n = 0, t;
      }
    };
    var I = k((xe, U) => {
      function G2(e) {
        return typeof e == "string" ? !["false", "0", "no", "off", ""].includes(e.toLowerCase()) : !!e;
      }
      function Y(e = process.env) {
        let n = {};
        for (let t of ["ENCODING", "PATH", "QUIET", "DEBUG", "OVERRIDE", "FAST"]) {
          let o = e[`DOTENV_${t}`] != null ? e[`DOTENV_${t}`] : e[`DOTENV_CONFIG_${t}`];
          o != null && (n[t.toLowerCase()] = t === "ENCODING" || t === "PATH" ? o : G2(o));
        }
        return n;
      }
      U.exports = { parseBoolean: G2, optionsFromEnv: Y };
    });
    var N = k((ye, x) => {
      var z = require("fs"), S = require("path"), Z = require("os"), { URL: ee, fileURLToPath: te } = require("url"), { parseBoolean: $, optionsFromEnv: B } = I(), re = /(?:^|^)\s*(?:export\s+)?([\w.-]+)(?:\s*=\s*?|:\s+?)(\s*'(?:\\'|[^'])*'|\s*"(?:\\"|[^"])*"|\s*`(?:\\`|[^`])*`|[^#\r\n]+)?\s*(?:#.*)?(?:$|$)/mg, b = new Uint8Array(256);
      for (let e = 48; e <= 57; e++) b[e] = 1;
      for (let e = 65; e <= 90; e++) b[e] = 1;
      for (let e = 97; e <= 122; e++) b[e] = 1;
      b[45] = 1;
      b[46] = 1;
      b[95] = 1;
      function ne(e) {
        let n = {}, t = e.toString();
        t = t.replace(/\r\n?/mg, `
`);
        let o;
        for (; (o = re.exec(t)) != null; ) {
          let r = o[1], s = o[2] || "";
          s = s.trim();
          let i = s[0];
          s = s.replace(/^(['"`])([\s\S]*)\1$/mg, "$2"), i === '"' && (s = s.replace(/\\n/g, `
`), s = s.replace(/\\r/g, "\r")), n[r] = s;
        }
        return n;
      }
      function w(e) {
        return e <= 32 ? e === 32 || e >= 9 && e <= 13 : e >= 160 && (e === 160 || e === 5760 || e >= 8192 && e <= 8202 || e === 8232 || e === 8233 || e === 8239 || e === 8287 || e === 12288 || e === 65279);
      }
      function q(e) {
        return e === 10 || e === 8232 || e === 8233;
      }
      function oe(e) {
        let n = {}, t = typeof e == "string" ? e : e.toString();
        t.indexOf("\r") !== -1 && (t = t.replace(/\r\n?/g, `
`));
        let o = t.length, r = 0;
        for (; r < o; ) {
          let s = t.charCodeAt(r);
          for (; r < o && w(s); ) r++, s = t.charCodeAt(r);
          if (r >= o) break;
          if (s === 35) {
            for (; r < o && !q(t.charCodeAt(r)); ) r++;
            continue;
          }
          let i = -1;
          if (s === 101 && r + 6 < o && t.charCodeAt(r + 1) === 120 && t.charCodeAt(r + 2) === 112 && t.charCodeAt(r + 3) === 111 && t.charCodeAt(r + 4) === 114 && t.charCodeAt(r + 5) === 116) {
            let v = t.charCodeAt(r + 6);
            if (w(v)) {
              let u = r + 7;
              for (; u < o && w(t.charCodeAt(u)); ) u++;
              b[t.charCodeAt(u)] && (i = r + 6, r = u);
            } else s = t.charCodeAt(r);
          }
          let l = r, d = 0;
          for (; r < o && (d = t.charCodeAt(r), b[d]); ) r++;
          if (r === l) {
            for (; r < o && !q(t.charCodeAt(r)); ) r++;
            continue;
          }
          let p = t.slice(l, r), f = r;
          if (r >= o && (d = 0), w(d)) do
            r++, d = r < o ? t.charCodeAt(r) : 0;
          while (w(d));
          if (d === 61) r++;
          else if (d === 58 && r === f && r + 1 < o && w(t.charCodeAt(r + 1))) r += 2;
          else {
            for (r = i === -1 ? f : i; r < o && !q(t.charCodeAt(r)); ) r++;
            continue;
          }
          let c = r, a = r;
          for (; a < o && w(t.charCodeAt(a)); ) a++;
          let h = t.charCodeAt(a), g, y = false;
          if (h === 39 || h === 34 || h === 96) {
            let v = t[a], u = t.indexOf(v, a + 1), m = -1, C = -1;
            for (; u !== -1; ) {
              let O = t.charCodeAt(u - 1) === 92, E = u + 1;
              for (; E < o && !q(t.charCodeAt(E)) && w(t.charCodeAt(E)); ) E++;
              if ((E === o || q(t.charCodeAt(E)) || t.charCodeAt(E) === 35) && (m = u, C = E), !O) break;
              u = t.indexOf(v, u + 1);
            }
            if (m !== -1) {
              if (g = t.slice(a + 1, m), r = C, t.charCodeAt(r) === 35) for (; r < o && !q(t.charCodeAt(r)); ) r++;
              y = true;
            }
          }
          if (!y) {
            let v = t.indexOf(`
`, c);
            v === -1 && (v = o);
            let u;
            if (o < 4096) u = t.indexOf("#", c), (u === -1 || u > v) && (u = v);
            else for (u = c; u < v && t.charCodeAt(u) !== 35; ) u++;
            let m = c, C = u;
            for (; m < C && w(t.charCodeAt(m)); ) m++;
            for (; C > m && w(t.charCodeAt(C - 1)); ) C--;
            let O = t.charCodeAt(m);
            if (C - m >= 2 && (O === 39 || O === 34 || O === 96) && t.charCodeAt(C - 1) === O ? g = t.slice(m + 1, C - 1) : g = t.slice(m, C), r = u, u < v) for (; r < o && !q(t.charCodeAt(r)); ) r++;
          }
          h === 34 && (y || a < r) && g.indexOf("\\") !== -1 && (g = g.replace(/\\n/g, `
`).replace(/\\r/g, "\r")), n[p] = g;
        }
        return n;
      }
      function se(e, n) {
        return n && $(n.fast) ? oe(e) : ne(e);
      }
      function T(e) {
        console.log(`\u2506 ${e}`);
      }
      function ie(e) {
        console.error(`\u25C7 ${e}`);
      }
      function V(e) {
        return e[0] === "~" ? S.join(Z.homedir(), e.slice(1)) : e;
      }
      function ce(e = {}) {
        let n = { ...e };
        for (let t of Object.keys(n)) n[t] === void 0 && delete n[t];
        return { ...B(), ...n };
      }
      function ae(e) {
        e = ce(e);
        let n = S.resolve(process.cwd(), ".env"), t = "utf8", o = process.env;
        e && e.processEnv != null && (o = e.processEnv);
        let r = $(e && e.debug);
        e && e.encoding ? t = e.encoding : r && T("no encoding is specified (UTF-8 is used by default)");
        let s = [n];
        if (e && e.path) if (!Array.isArray(e.path)) s = [V(e.path)];
        else {
          s = [];
          for (let c of e.path) s.push(V(c));
        }
        let i, l = {}, d = { fast: e.fast };
        for (let c of s) try {
          let a = A.parse(z.readFileSync(c, { encoding: t }), d);
          A.populate(l, a, e);
        } catch (a) {
          r && T(`failed to load ${c} ${a.message}`), i = a;
        }
        let p = A.populate(o, l, e), f = $(Object.prototype.hasOwnProperty.call(e, "quiet") ? e.quiet : B(o).quiet);
        if (r || !f) {
          let c = Object.keys(p).length, a = [];
          for (let h of s) try {
            let g = S.relative(process.cwd(), h instanceof ee ? te(h) : h);
            a.push(g);
          } catch (g) {
            r && T(`failed to load ${h} ${g.message}`), i = g;
          }
          ie(`injected env (${c}) from ${a.join(",")}`);
        }
        return i ? { parsed: l, error: i } : { parsed: l };
      }
      function le(e) {
        return A.configDotenv(e);
      }
      function fe(e, n, t = {}) {
        let o = $(t && t.debug), r = $(t && t.override), s = {};
        if (e === null || typeof e != "object" || n === null || typeof n != "object") {
          let i = new Error("OBJECT_REQUIRED: Please check the processEnv argument being passed to populate");
          throw i.code = "OBJECT_REQUIRED", i;
        }
        for (let i of Object.keys(n)) Object.prototype.hasOwnProperty.call(e, i) ? (r === true && (e[i] = n[i], s[i] = n[i]), o && T(r === true ? `"${i}" is already defined and WAS overwritten` : `"${i}" is already defined and was NOT overwritten`)) : (e[i] = n[i], s[i] = n[i]);
        return s;
      }
      var A = { configDotenv: ae, config: le, parse: se, populate: fe };
      x.exports.configDotenv = A.configDotenv;
      x.exports.config = A.config;
      x.exports.parse = A.parse;
      x.exports.populate = A.populate;
      x.exports = A;
    });
    var M = k((Te, W) => {
      var _ = require("child_process"), ue = require("fs"), L = require("path");
      function de(e) {
        let n = ['"'], t = 0;
        for (let o of e) {
          if (o === "\\") {
            t++;
            continue;
          }
          o === '"' ? n.push("\\".repeat(t * 2 + 1), '"') : n.push("\\".repeat(t), o), t = 0;
        }
        return n.push("\\".repeat(t * 2), '"'), n.join("");
      }
      function H(e, n = 1) {
        for (let t = 0; t < n; t++) {
          let o = [];
          for (let r of e) {
            let s = r.charCodeAt(0), i = s >= 48 && s <= 57 || s >= 65 && s <= 90 || s >= 97 && s <= 122, l = "\\/:._-".includes(r);
            !i && !l && s < 128 && o.push("^"), o.push(r);
          }
          e = o.join("");
        }
        return e;
      }
      function P(e, n) {
        let t = Object.keys(e).reverse().find((o) => o.toUpperCase() === n);
        return t === void 0 ? void 0 : e[t];
      }
      function pe(e, n, t) {
        let o = (P(n, "PATHEXT") || ".COM;.EXE;.BAT;.CMD").split(";").filter(Boolean), s = o.some((l) => e.toLowerCase().endsWith(l.toLowerCase())) ? ["", ...o] : [...o, ""], i = /[\\/]/.test(e) ? [t] : [t, ...(P(n, "PATH") || "").split(";")];
        for (let l of i) for (let d of s) {
          let p = L.resolve(t, l.replace(/^"|"$/g, ""), e + d);
          try {
            if (ue.statSync(p).isFile()) return p;
          } catch {
          }
        }
      }
      function he(e, n, t) {
        if (process.platform !== "win32") return _.spawn(e, n, t);
        let o = t.env || process.env, r = pe(e, o, t.cwd || process.cwd());
        if (r && /\.(?:exe|com)$/i.test(r)) return _.spawn(r, n, t);
        let s = /\.(?:bat|cmd)$/i.test(r || e), i = [H(L.normalize(r || e))];
        for (let d of n) i.push(H(de(d), s ? 2 : 1));
        let l = i.join(" ");
        return _.spawn(P(o, "COMSPEC") || "cmd.exe", ["/d", "/v:off", "/s", "/c", `"${l}"`], { ...t, windowsVerbatimArguments: true });
      }
      W.exports = he;
    });
    var X = k(($e, F) => {
      var ge = require("fs"), me = require("os"), Q = require("path"), ve = require("child_process"), Ce = M(), R = N(), { optionsFromEnv: J } = I();
      function D() {
        console.log(["Usage: dotenv run [--help] [-q|--quiet] [--debug] [--override] [--fast] [-f|--file <paths>] [--] <command> [args...]", "", "Run a command with environment variables from a .env file.", "Place dotenv options before the command; all following arguments go to the command.", "", "Options:", "  -f, --file <paths>  .env paths, comma-separated or repeated (default: .env)", "  -q, --quiet suppress the injected env message", "  --debug     enable debug logging", "  --override  override existing environment variables", "  --fast      use the faster character-scanner parser", "", "Environment variables (DOTENV_CONFIG_* names remain as fallbacks):", "  DOTENV_PATH, DOTENV_ENCODING, DOTENV_QUIET,", "  DOTENV_DEBUG, DOTENV_OVERRIDE,", "  DOTENV_FAST"].join(`
`));
      }
      function we(e) {
        let n = [], t = false, o, r, s, i, l = -1;
        for (let p = 0; p < e.length; p++) {
          let f = e[p];
          if (f === "--") {
            l = p + 1;
            break;
          }
          if (f === "--help" || f === "-h") return { help: true };
          if (f === "--quiet" || f === "-q") {
            o = true;
            continue;
          }
          if (f === "--debug") {
            r = true;
            continue;
          }
          if (f === "--override") {
            s = true;
            continue;
          }
          if (f === "--fast") {
            i = true;
            continue;
          }
          if (f === "-f" || f === "--file" || f.startsWith("-f=") || f.startsWith("--file=")) {
            let c = f.indexOf("="), a = c === -1 ? f : f.slice(0, c), h = c === -1 ? e[++p] : f.slice(c + 1);
            if (!h || h === "--") return { error: `${a} requires a path` };
            let g = h.split(",").map((y) => y.trim()).filter(Boolean);
            if (g.length === 0) return { error: `${a} requires a path` };
            n.push(...g), t = true;
            continue;
          }
          if (f.startsWith("-")) return { error: `unknown option: ${f}` };
          l = p;
          break;
        }
        let d = l === -1 ? [] : e.slice(l);
        return { paths: n, pathSet: t, quiet: o, debug: r, override: s, fast: i, command: d };
      }
      function Ae(e) {
        return e[0] === "~" ? Q.join(me.homedir(), e.slice(1)) : e;
      }
      function Ee(e) {
        let n = J(), t = { encoding: n.encoding || "utf8", quiet: n.quiet, debug: n.debug === true, override: n.override === true, fast: n.fast === true, paths: [".env"], defaultPath: true };
        return n.path != null && (t.paths = [n.path], t.defaultPath = false), e.pathSet && (t.paths = e.paths, t.defaultPath = false), e.quiet != null && (t.quiet = e.quiet), e.debug != null && (t.debug = e.debug), e.override != null && (t.override = e.override), e.fast != null && (t.fast = e.fast), t;
      }
      function be(e) {
        let n = {}, t = [], o = { override: e.override, debug: e.debug };
        for (let s of e.paths) {
          let i = Q.resolve(process.cwd(), Ae(s));
          try {
            let l = R.parse(ge.readFileSync(i, { encoding: e.encoding }), { fast: e.fast });
            R.populate(n, l, o), t.push(s);
          } catch (l) {
            if (e.debug && console.log(`\u2506 failed to load ${s} ${l.message}`), !(e.defaultPath && l.code === "ENOENT")) throw l;
          }
        }
        return { injected: R.populate(process.env, n, o), loadedPaths: t };
      }
      function K(e) {
        let n = e[0];
        if (n === "--help" || n === "-h") {
          D();
          return;
        }
        if (n !== "run") {
          D(), process.exitCode = 1;
          return;
        }
        let t = we(e.slice(1));
        if (t.help) {
          D();
          return;
        }
        if (t.error) {
          console.error(`dotenv: ${t.error}`), D(), process.exitCode = 1;
          return;
        }
        if (t.command.length === 0) {
          D(), process.exitCode = 1;
          return;
        }
        let o = Ee(t);
        try {
          let c = be(o);
          if (!(o.quiet == null ? J().quiet : o.quiet)) {
            let h = `\u25C7 injected env (${Object.keys(c.injected).length})`;
            c.loadedPaths.length > 0 && (h += ` from ${c.loadedPaths.join(", ")}`), console.error(h);
          }
        } catch (c) {
          console.error(`dotenv: ${c.message}`), process.exitCode = 1;
          return;
        }
        let r = !!process.stdin.isTTY, s = process.platform !== "win32" && !r, i = Ce(t.command[0], t.command.slice(1), { stdio: "inherit", detached: s }), l = /* @__PURE__ */ new Map(), d = 0;
        function p(c) {
          if (!(!i.pid || i.exitCode !== null || i.signalCode !== null)) {
            if (process.platform === "win32") {
              ve.spawnSync("taskkill", ["/pid", String(i.pid), "/T", "/F"], { stdio: "ignore" });
              return;
            }
            try {
              process.kill(s ? -i.pid : i.pid, c);
            } catch (a) {
              if (a.code !== "ESRCH") throw a;
            }
          }
        }
        function f() {
          for (let [c, a] of l) process.removeListener(c, a);
        }
        for (let c of ["SIGINT", "SIGTERM", "SIGHUP", "SIGQUIT"]) {
          let a = () => {
            if (c === "SIGINT") {
              if (d++, r && process.platform !== "win32" && d === 1) return;
              if (d > 1) {
                p(d === 2 ? "SIGTERM" : "SIGKILL");
                return;
              }
            }
            p(c);
          };
          l.set(c, a), process.on(c, a);
        }
        i.on("error", function(c) {
          f(), console.error(`dotenv: ${c.message}`), process.exitCode = 1;
        }), i.on("exit", function(c, a) {
          f(), typeof c == "number" ? process.exit(c) : (setInterval(() => {
          }, 1e3), process.kill(process.pid, a));
        });
      }
      F.exports = K;
      require.main === F && K(process.argv.slice(2));
    });
    var j = N();
    var qe = X();
    module2.exports = j;
    module2.exports.config = j.config;
    module2.exports.configDotenv = j.configDotenv;
    module2.exports.parse = j.parse;
    module2.exports.populate = j.populate;
    require.main === module2 && qe(process.argv.slice(2));
  }
});

// node_modules/dom-parser/dist/lib/Node.js
var require_Node = __commonJS({
  "node_modules/dom-parser/dist/lib/Node.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.Node = exports2.NodeType = void 0;
    var NodeType;
    (function(NodeType2) {
      NodeType2[NodeType2["element"] = 1] = "element";
      NodeType2[NodeType2["text"] = 3] = "text";
    })(NodeType || (exports2.NodeType = NodeType = {}));
    var Node2 = class {
      constructor({ nodeType, namespace, selfCloseTag, text, nodeName, childNodes, parentNode, attributes }) {
        this.namespace = namespace || null;
        this.nodeType = nodeType;
        this.isSelfCloseTag = Boolean(selfCloseTag);
        this.text = text || null;
        this.nodeName = nodeType === NodeType.element ? nodeName : "#text";
        this.childNodes = childNodes || [];
        this.parentNode = parentNode;
        this.attributes = attributes || [];
      }
      get firstChild() {
        return this.childNodes[0] || null;
      }
      get lastChild() {
        return this.childNodes[this.childNodes.length - 1] || null;
      }
      get innerHTML() {
        return this.childNodes.reduce((html, node) => html + (node.nodeType === NodeType.text ? node.text : node.outerHTML), "");
      }
      get outerHTML() {
        if (this.nodeType === NodeType.text) {
          return this.textContent;
        }
        const attributesString = stringifyAttributes(this.attributes);
        const openTag = `<${this.nodeName}${attributesString.length ? " " : ""}${attributesString}${this.isSelfCloseTag ? "/" : ""}>`;
        if (this.isSelfCloseTag) {
          return openTag;
        }
        const childs = this.childNodes.map((child) => child.outerHTML).join("");
        const closeTag = `</${this.nodeName}>`;
        return [openTag, childs, closeTag].join("");
      }
      get textContent() {
        if (this.nodeType === NodeType.text) {
          return this.text;
        }
        return this.childNodes.map((node) => node.textContent).join("").replace(/\x20+/g, " ");
      }
      getAttribute(name) {
        const attribute = this.attributes.find((a) => a.name === name);
        return attribute ? attribute.value : null;
      }
      getElementsByTagName(tagName) {
        return searchElements(this, (elem) => elem.nodeName.toUpperCase() === tagName.toUpperCase());
      }
      getElementsByClassName(className) {
        const expr = new RegExp(`^(.*?\\s)?${className}(\\s.*?)?$`);
        return searchElements(this, (node) => Boolean(node.attributes.length && expr.test(node.getAttribute("class") || "")));
      }
      getElementsByName(name) {
        return searchElements(this, (node) => Boolean(node.attributes.length && node.getAttribute("name") === name));
      }
      getElementById(id) {
        return searchElement(this, (node) => Boolean(node.attributes.length && node.getAttribute("id") === id));
      }
    };
    exports2.Node = Node2;
    Node2.ELEMENT_NODE = NodeType.element;
    Node2.TEXT_NODE = NodeType.text;
    function searchElements(root, conditionFn) {
      if (root.nodeType === NodeType.text) {
        return [];
      }
      return root.childNodes.reduce((accumulator, childNode) => {
        if (childNode.nodeType !== NodeType.text && conditionFn(childNode)) {
          return [...accumulator, childNode, ...searchElements(childNode, conditionFn)];
        }
        return [...accumulator, ...searchElements(childNode, conditionFn)];
      }, []);
    }
    function searchElement(root, conditionFn) {
      for (let i = 0, l = root.childNodes.length; i < l; i++) {
        const childNode = root.childNodes[i];
        if (conditionFn(childNode)) {
          return childNode;
        }
        const node = searchElement(childNode, conditionFn);
        if (node) {
          return node;
        }
      }
      return null;
    }
    function stringifyAttributes(attributes) {
      return attributes.map((elem) => elem.name + (elem.value ? `="${elem.value}"` : "")).join(" ");
    }
  }
});

// node_modules/dom-parser/dist/lib/NodeAttribute.js
var require_NodeAttribute = __commonJS({
  "node_modules/dom-parser/dist/lib/NodeAttribute.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.NodeAttribute = void 0;
    var NodeAttribute = class {
      constructor({ name, value }) {
        this.name = name;
        this.value = value;
      }
    };
    exports2.NodeAttribute = NodeAttribute;
  }
});

// node_modules/dom-parser/dist/lib/Dom.js
var require_Dom = __commonJS({
  "node_modules/dom-parser/dist/lib/Dom.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.Dom = void 0;
    var Node_1 = require_Node();
    var NodeAttribute_1 = require_NodeAttribute();
    var tagRegExp = /(<\/?(?:[a-z][a-z0-9]*:)?[a-z][a-z0-9-_.]*?[a-z0-9]*\s*(?:\s+[a-z0-9-_:]+(?:=(?:(?:'[\s\S]*?')|(?:"[\s\S]*?")))?)*\s*\/?>)|([^<]|<(?![a-z/]))*/gi;
    var attrRegExp = /\s[a-z0-9-_:]+\b(\s*=\s*('|")[\s\S]*?\2)?/gi;
    var splitAttrRegExp = /(\s[a-z0-9-_:]+\b\s*)(?:=(\s*('|")[\s\S]*?\3))?/gi;
    var startTagExp = /^<[a-z]/;
    var selfCloseTagExp = /\/>$/;
    var closeTagExp = /^<\//;
    var textNodeExp = /^[^<]/;
    var nodeNameExp = /<\/?((?:([a-z][a-z0-9]*):)?(?:[a-z](?:[a-z0-9-_.]*[a-z0-9])?))/i;
    var attributeQuotesExp = /^('|")|('|")$/g;
    var noClosingTagsExp = /^(?:area|base|br|col|command|embed|hr|img|input|link|meta|param|source)/i;
    var Dom3 = class {
      constructor(rawHTML) {
        this.rawHTML = rawHTML;
      }
      find(conditionFn, findFirst) {
        const result = find(this.rawHTML, conditionFn, findFirst);
        return findFirst ? result[0] || null : result;
      }
      getElementsByClassName(className) {
        const expr = new RegExp(`^(.*?\\s)?${className}(\\s.*?)?$`);
        return this.find((node) => Boolean(node.attributes.length && expr.test(node.getAttribute("class") || "")));
      }
      getElementsByTagName(tagName) {
        return this.find((node) => node.nodeName.toUpperCase() === tagName.toUpperCase());
      }
      getElementById(id) {
        return this.find((node) => node.getAttribute("id") === id, true);
      }
      getElementsByName(name) {
        return this.find((node) => node.getAttribute("name") === name);
      }
      getElementsByAttribute(attributeName, attributeValue) {
        return this.find((node) => node.getAttribute(attributeName) === attributeValue);
      }
    };
    exports2.Dom = Dom3;
    function find(html, conditionFn, onlyFirst = false) {
      const generator = domGenerator(html);
      const result = [];
      for (const node of generator) {
        if (node && conditionFn(node)) {
          result.push(node);
          if (onlyFirst) {
            return result;
          }
        }
      }
      return result;
    }
    function* domGenerator(html) {
      const tags = getAllTags(html);
      let cursor = null;
      for (let i = 0, l = tags.length; i < l; i++) {
        const tag = tags[i];
        const node = createNode(tag, cursor);
        cursor = node || cursor;
        if (isElementComposed(cursor, tag)) {
          yield cursor;
          cursor = cursor.parentNode;
        }
      }
      while (cursor) {
        yield cursor;
        cursor = cursor.parentNode;
      }
    }
    function isElementComposed(element, tag) {
      if (!tag) {
        return false;
      }
      const isCloseTag = closeTagExp.test(tag);
      const [, nodeName] = tag.match(nodeNameExp) || [];
      const isElementClosedByTag = isCloseTag && element.nodeName === nodeName;
      return isElementClosedByTag || element.isSelfCloseTag || element.nodeType === Node_1.NodeType.text;
    }
    function getAllTags(html) {
      return html.match(tagRegExp) || [];
    }
    function createNode(tag, parentNode) {
      const isTextNode = textNodeExp.test(tag);
      const isStartTag = startTagExp.test(tag);
      if (isTextNode) {
        return createTextNode(tag, parentNode);
      }
      if (isStartTag) {
        return createElementNode(tag, parentNode);
      }
      return null;
    }
    function createElementNode(tag, parentNode) {
      var _a;
      const [, nodeName, namespace] = tag.match(nodeNameExp) || [];
      const selfCloseTag = selfCloseTagExp.test(tag) || noClosingTagsExp.test(nodeName);
      const attributes = parseAttributes(tag);
      const elementNode = new Node_1.Node({
        nodeType: Node_1.NodeType.element,
        nodeName,
        namespace,
        attributes,
        childNodes: [],
        parentNode,
        selfCloseTag
      });
      (_a = parentNode === null || parentNode === void 0 ? void 0 : parentNode.childNodes) === null || _a === void 0 ? void 0 : _a.push(elementNode);
      return elementNode;
    }
    function parseAttributes(tag) {
      return (tag.match(attrRegExp) || []).map((attributeString) => {
        splitAttrRegExp.lastIndex = 0;
        const exec = splitAttrRegExp.exec(attributeString) || [];
        const [, name = "", value = ""] = exec;
        return new NodeAttribute_1.NodeAttribute({
          name: name.trim(),
          value: value.trim().replace(attributeQuotesExp, "")
        });
      });
    }
    function createTextNode(text, parentNode) {
      var _a;
      const textNode = new Node_1.Node({
        nodeType: Node_1.NodeType.text,
        nodeName: "#text",
        text,
        parentNode
      });
      (_a = parentNode === null || parentNode === void 0 ? void 0 : parentNode.childNodes) === null || _a === void 0 ? void 0 : _a.push(textNode);
      return textNode;
    }
  }
});

// node_modules/dom-parser/dist/index.js
var require_dist2 = __commonJS({
  "node_modules/dom-parser/dist/index.js"(exports2) {
    "use strict";
    var __createBinding = exports2 && exports2.__createBinding || (Object.create ? (function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    }) : (function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      o[k2] = m[k];
    }));
    var __exportStar = exports2 && exports2.__exportStar || function(m, exports3) {
      for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports3, p)) __createBinding(exports3, m, p);
    };
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.parseFromString = void 0;
    var Dom_1 = require_Dom();
    function parseFromString4(html) {
      return new Dom_1.Dom(html);
    }
    exports2.parseFromString = parseFromString4;
    __exportStar(require_Dom(), exports2);
    __exportStar(require_Node(), exports2);
  }
});

// node_modules/delayed-stream/lib/delayed_stream.js
var require_delayed_stream = __commonJS({
  "node_modules/delayed-stream/lib/delayed_stream.js"(exports2, module2) {
    var Stream = require("stream").Stream;
    var util4 = require("util");
    module2.exports = DelayedStream;
    function DelayedStream() {
      this.source = null;
      this.dataSize = 0;
      this.maxDataSize = 1024 * 1024;
      this.pauseStream = true;
      this._maxDataSizeExceeded = false;
      this._released = false;
      this._bufferedEvents = [];
    }
    util4.inherits(DelayedStream, Stream);
    DelayedStream.create = function(source, options) {
      var delayedStream = new this();
      options = options || {};
      for (var option in options) {
        delayedStream[option] = options[option];
      }
      delayedStream.source = source;
      var realEmit = source.emit;
      source.emit = function() {
        delayedStream._handleEmit(arguments);
        return realEmit.apply(source, arguments);
      };
      source.on("error", function() {
      });
      if (delayedStream.pauseStream) {
        source.pause();
      }
      return delayedStream;
    };
    Object.defineProperty(DelayedStream.prototype, "readable", {
      configurable: true,
      enumerable: true,
      get: function() {
        return this.source.readable;
      }
    });
    DelayedStream.prototype.setEncoding = function() {
      return this.source.setEncoding.apply(this.source, arguments);
    };
    DelayedStream.prototype.resume = function() {
      if (!this._released) {
        this.release();
      }
      this.source.resume();
    };
    DelayedStream.prototype.pause = function() {
      this.source.pause();
    };
    DelayedStream.prototype.release = function() {
      this._released = true;
      this._bufferedEvents.forEach(function(args) {
        this.emit.apply(this, args);
      }.bind(this));
      this._bufferedEvents = [];
    };
    DelayedStream.prototype.pipe = function() {
      var r = Stream.prototype.pipe.apply(this, arguments);
      this.resume();
      return r;
    };
    DelayedStream.prototype._handleEmit = function(args) {
      if (this._released) {
        this.emit.apply(this, args);
        return;
      }
      if (args[0] === "data") {
        this.dataSize += args[1].length;
        this._checkIfMaxDataSizeExceeded();
      }
      this._bufferedEvents.push(args);
    };
    DelayedStream.prototype._checkIfMaxDataSizeExceeded = function() {
      if (this._maxDataSizeExceeded) {
        return;
      }
      if (this.dataSize <= this.maxDataSize) {
        return;
      }
      this._maxDataSizeExceeded = true;
      var message = "DelayedStream#maxDataSize of " + this.maxDataSize + " bytes exceeded.";
      this.emit("error", new Error(message));
    };
  }
});

// node_modules/combined-stream/lib/combined_stream.js
var require_combined_stream = __commonJS({
  "node_modules/combined-stream/lib/combined_stream.js"(exports2, module2) {
    var util4 = require("util");
    var Stream = require("stream").Stream;
    var DelayedStream = require_delayed_stream();
    module2.exports = CombinedStream;
    function CombinedStream() {
      this.writable = false;
      this.readable = true;
      this.dataSize = 0;
      this.maxDataSize = 2 * 1024 * 1024;
      this.pauseStreams = true;
      this._released = false;
      this._streams = [];
      this._currentStream = null;
      this._insideLoop = false;
      this._pendingNext = false;
    }
    util4.inherits(CombinedStream, Stream);
    CombinedStream.create = function(options) {
      var combinedStream = new this();
      options = options || {};
      for (var option in options) {
        combinedStream[option] = options[option];
      }
      return combinedStream;
    };
    CombinedStream.isStreamLike = function(stream4) {
      return typeof stream4 !== "function" && typeof stream4 !== "string" && typeof stream4 !== "boolean" && typeof stream4 !== "number" && !Buffer.isBuffer(stream4);
    };
    CombinedStream.prototype.append = function(stream4) {
      var isStreamLike = CombinedStream.isStreamLike(stream4);
      if (isStreamLike) {
        if (!(stream4 instanceof DelayedStream)) {
          var newStream = DelayedStream.create(stream4, {
            maxDataSize: Infinity,
            pauseStream: this.pauseStreams
          });
          stream4.on("data", this._checkDataSize.bind(this));
          stream4 = newStream;
        }
        this._handleErrors(stream4);
        if (this.pauseStreams) {
          stream4.pause();
        }
      }
      this._streams.push(stream4);
      return this;
    };
    CombinedStream.prototype.pipe = function(dest, options) {
      Stream.prototype.pipe.call(this, dest, options);
      this.resume();
      return dest;
    };
    CombinedStream.prototype._getNext = function() {
      this._currentStream = null;
      if (this._insideLoop) {
        this._pendingNext = true;
        return;
      }
      this._insideLoop = true;
      try {
        do {
          this._pendingNext = false;
          this._realGetNext();
        } while (this._pendingNext);
      } finally {
        this._insideLoop = false;
      }
    };
    CombinedStream.prototype._realGetNext = function() {
      var stream4 = this._streams.shift();
      if (typeof stream4 == "undefined") {
        this.end();
        return;
      }
      if (typeof stream4 !== "function") {
        this._pipeNext(stream4);
        return;
      }
      var getStream = stream4;
      getStream(function(stream5) {
        var isStreamLike = CombinedStream.isStreamLike(stream5);
        if (isStreamLike) {
          stream5.on("data", this._checkDataSize.bind(this));
          this._handleErrors(stream5);
        }
        this._pipeNext(stream5);
      }.bind(this));
    };
    CombinedStream.prototype._pipeNext = function(stream4) {
      this._currentStream = stream4;
      var isStreamLike = CombinedStream.isStreamLike(stream4);
      if (isStreamLike) {
        stream4.on("end", this._getNext.bind(this));
        stream4.pipe(this, { end: false });
        return;
      }
      var value = stream4;
      this.write(value);
      this._getNext();
    };
    CombinedStream.prototype._handleErrors = function(stream4) {
      var self2 = this;
      stream4.on("error", function(err) {
        self2._emitError(err);
      });
    };
    CombinedStream.prototype.write = function(data) {
      this.emit("data", data);
    };
    CombinedStream.prototype.pause = function() {
      if (!this.pauseStreams) {
        return;
      }
      if (this.pauseStreams && this._currentStream && typeof this._currentStream.pause == "function") this._currentStream.pause();
      this.emit("pause");
    };
    CombinedStream.prototype.resume = function() {
      if (!this._released) {
        this._released = true;
        this.writable = true;
        this._getNext();
      }
      if (this.pauseStreams && this._currentStream && typeof this._currentStream.resume == "function") this._currentStream.resume();
      this.emit("resume");
    };
    CombinedStream.prototype.end = function() {
      this._reset();
      this.emit("end");
    };
    CombinedStream.prototype.destroy = function() {
      this._reset();
      this.emit("close");
    };
    CombinedStream.prototype._reset = function() {
      this.writable = false;
      this._streams = [];
      this._currentStream = null;
    };
    CombinedStream.prototype._checkDataSize = function() {
      this._updateDataSize();
      if (this.dataSize <= this.maxDataSize) {
        return;
      }
      var message = "DelayedStream#maxDataSize of " + this.maxDataSize + " bytes exceeded.";
      this._emitError(new Error(message));
    };
    CombinedStream.prototype._updateDataSize = function() {
      this.dataSize = 0;
      var self2 = this;
      this._streams.forEach(function(stream4) {
        if (!stream4.dataSize) {
          return;
        }
        self2.dataSize += stream4.dataSize;
      });
      if (this._currentStream && this._currentStream.dataSize) {
        this.dataSize += this._currentStream.dataSize;
      }
    };
    CombinedStream.prototype._emitError = function(err) {
      this._reset();
      this.emit("error", err);
    };
  }
});

// node_modules/mime-db/db.json
var require_db = __commonJS({
  "node_modules/mime-db/db.json"(exports2, module2) {
    module2.exports = {
      "application/1d-interleaved-parityfec": {
        source: "iana"
      },
      "application/3gpdash-qoe-report+xml": {
        source: "iana",
        charset: "UTF-8",
        compressible: true
      },
      "application/3gpp-ims+xml": {
        source: "iana",
        compressible: true
      },
      "application/3gpphal+json": {
        source: "iana",
        compressible: true
      },
      "application/3gpphalforms+json": {
        source: "iana",
        compressible: true
      },
      "application/a2l": {
        source: "iana"
      },
      "application/ace+cbor": {
        source: "iana"
      },
      "application/activemessage": {
        source: "iana"
      },
      "application/activity+json": {
        source: "iana",
        compressible: true
      },
      "application/alto-costmap+json": {
        source: "iana",
        compressible: true
      },
      "application/alto-costmapfilter+json": {
        source: "iana",
        compressible: true
      },
      "application/alto-directory+json": {
        source: "iana",
        compressible: true
      },
      "application/alto-endpointcost+json": {
        source: "iana",
        compressible: true
      },
      "application/alto-endpointcostparams+json": {
        source: "iana",
        compressible: true
      },
      "application/alto-endpointprop+json": {
        source: "iana",
        compressible: true
      },
      "application/alto-endpointpropparams+json": {
        source: "iana",
        compressible: true
      },
      "application/alto-error+json": {
        source: "iana",
        compressible: true
      },
      "application/alto-networkmap+json": {
        source: "iana",
        compressible: true
      },
      "application/alto-networkmapfilter+json": {
        source: "iana",
        compressible: true
      },
      "application/alto-updatestreamcontrol+json": {
        source: "iana",
        compressible: true
      },
      "application/alto-updatestreamparams+json": {
        source: "iana",
        compressible: true
      },
      "application/aml": {
        source: "iana"
      },
      "application/andrew-inset": {
        source: "iana",
        extensions: ["ez"]
      },
      "application/applefile": {
        source: "iana"
      },
      "application/applixware": {
        source: "apache",
        extensions: ["aw"]
      },
      "application/at+jwt": {
        source: "iana"
      },
      "application/atf": {
        source: "iana"
      },
      "application/atfx": {
        source: "iana"
      },
      "application/atom+xml": {
        source: "iana",
        compressible: true,
        extensions: ["atom"]
      },
      "application/atomcat+xml": {
        source: "iana",
        compressible: true,
        extensions: ["atomcat"]
      },
      "application/atomdeleted+xml": {
        source: "iana",
        compressible: true,
        extensions: ["atomdeleted"]
      },
      "application/atomicmail": {
        source: "iana"
      },
      "application/atomsvc+xml": {
        source: "iana",
        compressible: true,
        extensions: ["atomsvc"]
      },
      "application/atsc-dwd+xml": {
        source: "iana",
        compressible: true,
        extensions: ["dwd"]
      },
      "application/atsc-dynamic-event-message": {
        source: "iana"
      },
      "application/atsc-held+xml": {
        source: "iana",
        compressible: true,
        extensions: ["held"]
      },
      "application/atsc-rdt+json": {
        source: "iana",
        compressible: true
      },
      "application/atsc-rsat+xml": {
        source: "iana",
        compressible: true,
        extensions: ["rsat"]
      },
      "application/atxml": {
        source: "iana"
      },
      "application/auth-policy+xml": {
        source: "iana",
        compressible: true
      },
      "application/bacnet-xdd+zip": {
        source: "iana",
        compressible: false
      },
      "application/batch-smtp": {
        source: "iana"
      },
      "application/bdoc": {
        compressible: false,
        extensions: ["bdoc"]
      },
      "application/beep+xml": {
        source: "iana",
        charset: "UTF-8",
        compressible: true
      },
      "application/calendar+json": {
        source: "iana",
        compressible: true
      },
      "application/calendar+xml": {
        source: "iana",
        compressible: true,
        extensions: ["xcs"]
      },
      "application/call-completion": {
        source: "iana"
      },
      "application/cals-1840": {
        source: "iana"
      },
      "application/captive+json": {
        source: "iana",
        compressible: true
      },
      "application/cbor": {
        source: "iana"
      },
      "application/cbor-seq": {
        source: "iana"
      },
      "application/cccex": {
        source: "iana"
      },
      "application/ccmp+xml": {
        source: "iana",
        compressible: true
      },
      "application/ccxml+xml": {
        source: "iana",
        compressible: true,
        extensions: ["ccxml"]
      },
      "application/cdfx+xml": {
        source: "iana",
        compressible: true,
        extensions: ["cdfx"]
      },
      "application/cdmi-capability": {
        source: "iana",
        extensions: ["cdmia"]
      },
      "application/cdmi-container": {
        source: "iana",
        extensions: ["cdmic"]
      },
      "application/cdmi-domain": {
        source: "iana",
        extensions: ["cdmid"]
      },
      "application/cdmi-object": {
        source: "iana",
        extensions: ["cdmio"]
      },
      "application/cdmi-queue": {
        source: "iana",
        extensions: ["cdmiq"]
      },
      "application/cdni": {
        source: "iana"
      },
      "application/cea": {
        source: "iana"
      },
      "application/cea-2018+xml": {
        source: "iana",
        compressible: true
      },
      "application/cellml+xml": {
        source: "iana",
        compressible: true
      },
      "application/cfw": {
        source: "iana"
      },
      "application/city+json": {
        source: "iana",
        compressible: true
      },
      "application/clr": {
        source: "iana"
      },
      "application/clue+xml": {
        source: "iana",
        compressible: true
      },
      "application/clue_info+xml": {
        source: "iana",
        compressible: true
      },
      "application/cms": {
        source: "iana"
      },
      "application/cnrp+xml": {
        source: "iana",
        compressible: true
      },
      "application/coap-group+json": {
        source: "iana",
        compressible: true
      },
      "application/coap-payload": {
        source: "iana"
      },
      "application/commonground": {
        source: "iana"
      },
      "application/conference-info+xml": {
        source: "iana",
        compressible: true
      },
      "application/cose": {
        source: "iana"
      },
      "application/cose-key": {
        source: "iana"
      },
      "application/cose-key-set": {
        source: "iana"
      },
      "application/cpl+xml": {
        source: "iana",
        compressible: true,
        extensions: ["cpl"]
      },
      "application/csrattrs": {
        source: "iana"
      },
      "application/csta+xml": {
        source: "iana",
        compressible: true
      },
      "application/cstadata+xml": {
        source: "iana",
        compressible: true
      },
      "application/csvm+json": {
        source: "iana",
        compressible: true
      },
      "application/cu-seeme": {
        source: "apache",
        extensions: ["cu"]
      },
      "application/cwt": {
        source: "iana"
      },
      "application/cybercash": {
        source: "iana"
      },
      "application/dart": {
        compressible: true
      },
      "application/dash+xml": {
        source: "iana",
        compressible: true,
        extensions: ["mpd"]
      },
      "application/dash-patch+xml": {
        source: "iana",
        compressible: true,
        extensions: ["mpp"]
      },
      "application/dashdelta": {
        source: "iana"
      },
      "application/davmount+xml": {
        source: "iana",
        compressible: true,
        extensions: ["davmount"]
      },
      "application/dca-rft": {
        source: "iana"
      },
      "application/dcd": {
        source: "iana"
      },
      "application/dec-dx": {
        source: "iana"
      },
      "application/dialog-info+xml": {
        source: "iana",
        compressible: true
      },
      "application/dicom": {
        source: "iana"
      },
      "application/dicom+json": {
        source: "iana",
        compressible: true
      },
      "application/dicom+xml": {
        source: "iana",
        compressible: true
      },
      "application/dii": {
        source: "iana"
      },
      "application/dit": {
        source: "iana"
      },
      "application/dns": {
        source: "iana"
      },
      "application/dns+json": {
        source: "iana",
        compressible: true
      },
      "application/dns-message": {
        source: "iana"
      },
      "application/docbook+xml": {
        source: "apache",
        compressible: true,
        extensions: ["dbk"]
      },
      "application/dots+cbor": {
        source: "iana"
      },
      "application/dskpp+xml": {
        source: "iana",
        compressible: true
      },
      "application/dssc+der": {
        source: "iana",
        extensions: ["dssc"]
      },
      "application/dssc+xml": {
        source: "iana",
        compressible: true,
        extensions: ["xdssc"]
      },
      "application/dvcs": {
        source: "iana"
      },
      "application/ecmascript": {
        source: "iana",
        compressible: true,
        extensions: ["es", "ecma"]
      },
      "application/edi-consent": {
        source: "iana"
      },
      "application/edi-x12": {
        source: "iana",
        compressible: false
      },
      "application/edifact": {
        source: "iana",
        compressible: false
      },
      "application/efi": {
        source: "iana"
      },
      "application/elm+json": {
        source: "iana",
        charset: "UTF-8",
        compressible: true
      },
      "application/elm+xml": {
        source: "iana",
        compressible: true
      },
      "application/emergencycalldata.cap+xml": {
        source: "iana",
        charset: "UTF-8",
        compressible: true
      },
      "application/emergencycalldata.comment+xml": {
        source: "iana",
        compressible: true
      },
      "application/emergencycalldata.control+xml": {
        source: "iana",
        compressible: true
      },
      "application/emergencycalldata.deviceinfo+xml": {
        source: "iana",
        compressible: true
      },
      "application/emergencycalldata.ecall.msd": {
        source: "iana"
      },
      "application/emergencycalldata.providerinfo+xml": {
        source: "iana",
        compressible: true
      },
      "application/emergencycalldata.serviceinfo+xml": {
        source: "iana",
        compressible: true
      },
      "application/emergencycalldata.subscriberinfo+xml": {
        source: "iana",
        compressible: true
      },
      "application/emergencycalldata.veds+xml": {
        source: "iana",
        compressible: true
      },
      "application/emma+xml": {
        source: "iana",
        compressible: true,
        extensions: ["emma"]
      },
      "application/emotionml+xml": {
        source: "iana",
        compressible: true,
        extensions: ["emotionml"]
      },
      "application/encaprtp": {
        source: "iana"
      },
      "application/epp+xml": {
        source: "iana",
        compressible: true
      },
      "application/epub+zip": {
        source: "iana",
        compressible: false,
        extensions: ["epub"]
      },
      "application/eshop": {
        source: "iana"
      },
      "application/exi": {
        source: "iana",
        extensions: ["exi"]
      },
      "application/expect-ct-report+json": {
        source: "iana",
        compressible: true
      },
      "application/express": {
        source: "iana",
        extensions: ["exp"]
      },
      "application/fastinfoset": {
        source: "iana"
      },
      "application/fastsoap": {
        source: "iana"
      },
      "application/fdt+xml": {
        source: "iana",
        compressible: true,
        extensions: ["fdt"]
      },
      "application/fhir+json": {
        source: "iana",
        charset: "UTF-8",
        compressible: true
      },
      "application/fhir+xml": {
        source: "iana",
        charset: "UTF-8",
        compressible: true
      },
      "application/fido.trusted-apps+json": {
        compressible: true
      },
      "application/fits": {
        source: "iana"
      },
      "application/flexfec": {
        source: "iana"
      },
      "application/font-sfnt": {
        source: "iana"
      },
      "application/font-tdpfr": {
        source: "iana",
        extensions: ["pfr"]
      },
      "application/font-woff": {
        source: "iana",
        compressible: false
      },
      "application/framework-attributes+xml": {
        source: "iana",
        compressible: true
      },
      "application/geo+json": {
        source: "iana",
        compressible: true,
        extensions: ["geojson"]
      },
      "application/geo+json-seq": {
        source: "iana"
      },
      "application/geopackage+sqlite3": {
        source: "iana"
      },
      "application/geoxacml+xml": {
        source: "iana",
        compressible: true
      },
      "application/gltf-buffer": {
        source: "iana"
      },
      "application/gml+xml": {
        source: "iana",
        compressible: true,
        extensions: ["gml"]
      },
      "application/gpx+xml": {
        source: "apache",
        compressible: true,
        extensions: ["gpx"]
      },
      "application/gxf": {
        source: "apache",
        extensions: ["gxf"]
      },
      "application/gzip": {
        source: "iana",
        compressible: false,
        extensions: ["gz"]
      },
      "application/h224": {
        source: "iana"
      },
      "application/held+xml": {
        source: "iana",
        compressible: true
      },
      "application/hjson": {
        extensions: ["hjson"]
      },
      "application/http": {
        source: "iana"
      },
      "application/hyperstudio": {
        source: "iana",
        extensions: ["stk"]
      },
      "application/ibe-key-request+xml": {
        source: "iana",
        compressible: true
      },
      "application/ibe-pkg-reply+xml": {
        source: "iana",
        compressible: true
      },
      "application/ibe-pp-data": {
        source: "iana"
      },
      "application/iges": {
        source: "iana"
      },
      "application/im-iscomposing+xml": {
        source: "iana",
        charset: "UTF-8",
        compressible: true
      },
      "application/index": {
        source: "iana"
      },
      "application/index.cmd": {
        source: "iana"
      },
      "application/index.obj": {
        source: "iana"
      },
      "application/index.response": {
        source: "iana"
      },
      "application/index.vnd": {
        source: "iana"
      },
      "application/inkml+xml": {
        source: "iana",
        compressible: true,
        extensions: ["ink", "inkml"]
      },
      "application/iotp": {
        source: "iana"
      },
      "application/ipfix": {
        source: "iana",
        extensions: ["ipfix"]
      },
      "application/ipp": {
        source: "iana"
      },
      "application/isup": {
        source: "iana"
      },
      "application/its+xml": {
        source: "iana",
        compressible: true,
        extensions: ["its"]
      },
      "application/java-archive": {
        source: "apache",
        compressible: false,
        extensions: ["jar", "war", "ear"]
      },
      "application/java-serialized-object": {
        source: "apache",
        compressible: false,
        extensions: ["ser"]
      },
      "application/java-vm": {
        source: "apache",
        compressible: false,
        extensions: ["class"]
      },
      "application/javascript": {
        source: "iana",
        charset: "UTF-8",
        compressible: true,
        extensions: ["js", "mjs"]
      },
      "application/jf2feed+json": {
        source: "iana",
        compressible: true
      },
      "application/jose": {
        source: "iana"
      },
      "application/jose+json": {
        source: "iana",
        compressible: true
      },
      "application/jrd+json": {
        source: "iana",
        compressible: true
      },
      "application/jscalendar+json": {
        source: "iana",
        compressible: true
      },
      "application/json": {
        source: "iana",
        charset: "UTF-8",
        compressible: true,
        extensions: ["json", "map"]
      },
      "application/json-patch+json": {
        source: "iana",
        compressible: true
      },
      "application/json-seq": {
        source: "iana"
      },
      "application/json5": {
        extensions: ["json5"]
      },
      "application/jsonml+json": {
        source: "apache",
        compressible: true,
        extensions: ["jsonml"]
      },
      "application/jwk+json": {
        source: "iana",
        compressible: true
      },
      "application/jwk-set+json": {
        source: "iana",
        compressible: true
      },
      "application/jwt": {
        source: "iana"
      },
      "application/kpml-request+xml": {
        source: "iana",
        compressible: true
      },
      "application/kpml-response+xml": {
        source: "iana",
        compressible: true
      },
      "application/ld+json": {
        source: "iana",
        compressible: true,
        extensions: ["jsonld"]
      },
      "application/lgr+xml": {
        source: "iana",
        compressible: true,
        extensions: ["lgr"]
      },
      "application/link-format": {
        source: "iana"
      },
      "application/load-control+xml": {
        source: "iana",
        compressible: true
      },
      "application/lost+xml": {
        source: "iana",
        compressible: true,
        extensions: ["lostxml"]
      },
      "application/lostsync+xml": {
        source: "iana",
        compressible: true
      },
      "application/lpf+zip": {
        source: "iana",
        compressible: false
      },
      "application/lxf": {
        source: "iana"
      },
      "application/mac-binhex40": {
        source: "iana",
        extensions: ["hqx"]
      },
      "application/mac-compactpro": {
        source: "apache",
        extensions: ["cpt"]
      },
      "application/macwriteii": {
        source: "iana"
      },
      "application/mads+xml": {
        source: "iana",
        compressible: true,
        extensions: ["mads"]
      },
      "application/manifest+json": {
        source: "iana",
        charset: "UTF-8",
        compressible: true,
        extensions: ["webmanifest"]
      },
      "application/marc": {
        source: "iana",
        extensions: ["mrc"]
      },
      "application/marcxml+xml": {
        source: "iana",
        compressible: true,
        extensions: ["mrcx"]
      },
      "application/mathematica": {
        source: "iana",
        extensions: ["ma", "nb", "mb"]
      },
      "application/mathml+xml": {
        source: "iana",
        compressible: true,
        extensions: ["mathml"]
      },
      "application/mathml-content+xml": {
        source: "iana",
        compressible: true
      },
      "application/mathml-presentation+xml": {
        source: "iana",
        compressible: true
      },
      "application/mbms-associated-procedure-description+xml": {
        source: "iana",
        compressible: true
      },
      "application/mbms-deregister+xml": {
        source: "iana",
        compressible: true
      },
      "application/mbms-envelope+xml": {
        source: "iana",
        compressible: true
      },
      "application/mbms-msk+xml": {
        source: "iana",
        compressible: true
      },
      "application/mbms-msk-response+xml": {
        source: "iana",
        compressible: true
      },
      "application/mbms-protection-description+xml": {
        source: "iana",
        compressible: true
      },
      "application/mbms-reception-report+xml": {
        source: "iana",
        compressible: true
      },
      "application/mbms-register+xml": {
        source: "iana",
        compressible: true
      },
      "application/mbms-register-response+xml": {
        source: "iana",
        compressible: true
      },
      "application/mbms-schedule+xml": {
        source: "iana",
        compressible: true
      },
      "application/mbms-user-service-description+xml": {
        source: "iana",
        compressible: true
      },
      "application/mbox": {
        source: "iana",
        extensions: ["mbox"]
      },
      "application/media-policy-dataset+xml": {
        source: "iana",
        compressible: true,
        extensions: ["mpf"]
      },
      "application/media_control+xml": {
        source: "iana",
        compressible: true
      },
      "application/mediaservercontrol+xml": {
        source: "iana",
        compressible: true,
        extensions: ["mscml"]
      },
      "application/merge-patch+json": {
        source: "iana",
        compressible: true
      },
      "application/metalink+xml": {
        source: "apache",
        compressible: true,
        extensions: ["metalink"]
      },
      "application/metalink4+xml": {
        source: "iana",
        compressible: true,
        extensions: ["meta4"]
      },
      "application/mets+xml": {
        source: "iana",
        compressible: true,
        extensions: ["mets"]
      },
      "application/mf4": {
        source: "iana"
      },
      "application/mikey": {
        source: "iana"
      },
      "application/mipc": {
        source: "iana"
      },
      "application/missing-blocks+cbor-seq": {
        source: "iana"
      },
      "application/mmt-aei+xml": {
        source: "iana",
        compressible: true,
        extensions: ["maei"]
      },
      "application/mmt-usd+xml": {
        source: "iana",
        compressible: true,
        extensions: ["musd"]
      },
      "application/mods+xml": {
        source: "iana",
        compressible: true,
        extensions: ["mods"]
      },
      "application/moss-keys": {
        source: "iana"
      },
      "application/moss-signature": {
        source: "iana"
      },
      "application/mosskey-data": {
        source: "iana"
      },
      "application/mosskey-request": {
        source: "iana"
      },
      "application/mp21": {
        source: "iana",
        extensions: ["m21", "mp21"]
      },
      "application/mp4": {
        source: "iana",
        extensions: ["mp4s", "m4p"]
      },
      "application/mpeg4-generic": {
        source: "iana"
      },
      "application/mpeg4-iod": {
        source: "iana"
      },
      "application/mpeg4-iod-xmt": {
        source: "iana"
      },
      "application/mrb-consumer+xml": {
        source: "iana",
        compressible: true
      },
      "application/mrb-publish+xml": {
        source: "iana",
        compressible: true
      },
      "application/msc-ivr+xml": {
        source: "iana",
        charset: "UTF-8",
        compressible: true
      },
      "application/msc-mixer+xml": {
        source: "iana",
        charset: "UTF-8",
        compressible: true
      },
      "application/msword": {
        source: "iana",
        compressible: false,
        extensions: ["doc", "dot"]
      },
      "application/mud+json": {
        source: "iana",
        compressible: true
      },
      "application/multipart-core": {
        source: "iana"
      },
      "application/mxf": {
        source: "iana",
        extensions: ["mxf"]
      },
      "application/n-quads": {
        source: "iana",
        extensions: ["nq"]
      },
      "application/n-triples": {
        source: "iana",
        extensions: ["nt"]
      },
      "application/nasdata": {
        source: "iana"
      },
      "application/news-checkgroups": {
        source: "iana",
        charset: "US-ASCII"
      },
      "application/news-groupinfo": {
        source: "iana",
        charset: "US-ASCII"
      },
      "application/news-transmission": {
        source: "iana"
      },
      "application/nlsml+xml": {
        source: "iana",
        compressible: true
      },
      "application/node": {
        source: "iana",
        extensions: ["cjs"]
      },
      "application/nss": {
        source: "iana"
      },
      "application/oauth-authz-req+jwt": {
        source: "iana"
      },
      "application/oblivious-dns-message": {
        source: "iana"
      },
      "application/ocsp-request": {
        source: "iana"
      },
      "application/ocsp-response": {
        source: "iana"
      },
      "application/octet-stream": {
        source: "iana",
        compressible: false,
        extensions: ["bin", "dms", "lrf", "mar", "so", "dist", "distz", "pkg", "bpk", "dump", "elc", "deploy", "exe", "dll", "deb", "dmg", "iso", "img", "msi", "msp", "msm", "buffer"]
      },
      "application/oda": {
        source: "iana",
        extensions: ["oda"]
      },
      "application/odm+xml": {
        source: "iana",
        compressible: true
      },
      "application/odx": {
        source: "iana"
      },
      "application/oebps-package+xml": {
        source: "iana",
        compressible: true,
        extensions: ["opf"]
      },
      "application/ogg": {
        source: "iana",
        compressible: false,
        extensions: ["ogx"]
      },
      "application/omdoc+xml": {
        source: "apache",
        compressible: true,
        extensions: ["omdoc"]
      },
      "application/onenote": {
        source: "apache",
        extensions: ["onetoc", "onetoc2", "onetmp", "onepkg"]
      },
      "application/opc-nodeset+xml": {
        source: "iana",
        compressible: true
      },
      "application/oscore": {
        source: "iana"
      },
      "application/oxps": {
        source: "iana",
        extensions: ["oxps"]
      },
      "application/p21": {
        source: "iana"
      },
      "application/p21+zip": {
        source: "iana",
        compressible: false
      },
      "application/p2p-overlay+xml": {
        source: "iana",
        compressible: true,
        extensions: ["relo"]
      },
      "application/parityfec": {
        source: "iana"
      },
      "application/passport": {
        source: "iana"
      },
      "application/patch-ops-error+xml": {
        source: "iana",
        compressible: true,
        extensions: ["xer"]
      },
      "application/pdf": {
        source: "iana",
        compressible: false,
        extensions: ["pdf"]
      },
      "application/pdx": {
        source: "iana"
      },
      "application/pem-certificate-chain": {
        source: "iana"
      },
      "application/pgp-encrypted": {
        source: "iana",
        compressible: false,
        extensions: ["pgp"]
      },
      "application/pgp-keys": {
        source: "iana",
        extensions: ["asc"]
      },
      "application/pgp-signature": {
        source: "iana",
        extensions: ["asc", "sig"]
      },
      "application/pics-rules": {
        source: "apache",
        extensions: ["prf"]
      },
      "application/pidf+xml": {
        source: "iana",
        charset: "UTF-8",
        compressible: true
      },
      "application/pidf-diff+xml": {
        source: "iana",
        charset: "UTF-8",
        compressible: true
      },
      "application/pkcs10": {
        source: "iana",
        extensions: ["p10"]
      },
      "application/pkcs12": {
        source: "iana"
      },
      "application/pkcs7-mime": {
        source: "iana",
        extensions: ["p7m", "p7c"]
      },
      "application/pkcs7-signature": {
        source: "iana",
        extensions: ["p7s"]
      },
      "application/pkcs8": {
        source: "iana",
        extensions: ["p8"]
      },
      "application/pkcs8-encrypted": {
        source: "iana"
      },
      "application/pkix-attr-cert": {
        source: "iana",
        extensions: ["ac"]
      },
      "application/pkix-cert": {
        source: "iana",
        extensions: ["cer"]
      },
      "application/pkix-crl": {
        source: "iana",
        extensions: ["crl"]
      },
      "application/pkix-pkipath": {
        source: "iana",
        extensions: ["pkipath"]
      },
      "application/pkixcmp": {
        source: "iana",
        extensions: ["pki"]
      },
      "application/pls+xml": {
        source: "iana",
        compressible: true,
        extensions: ["pls"]
      },
      "application/poc-settings+xml": {
        source: "iana",
        charset: "UTF-8",
        compressible: true
      },
      "application/postscript": {
        source: "iana",
        compressible: true,
        extensions: ["ai", "eps", "ps"]
      },
      "application/ppsp-tracker+json": {
        source: "iana",
        compressible: true
      },
      "application/problem+json": {
        source: "iana",
        compressible: true
      },
      "application/problem+xml": {
        source: "iana",
        compressible: true
      },
      "application/provenance+xml": {
        source: "iana",
        compressible: true,
        extensions: ["provx"]
      },
      "application/prs.alvestrand.titrax-sheet": {
        source: "iana"
      },
      "application/prs.cww": {
        source: "iana",
        extensions: ["cww"]
      },
      "application/prs.cyn": {
        source: "iana",
        charset: "7-BIT"
      },
      "application/prs.hpub+zip": {
        source: "iana",
        compressible: false
      },
      "application/prs.nprend": {
        source: "iana"
      },
      "application/prs.plucker": {
        source: "iana"
      },
      "application/prs.rdf-xml-crypt": {
        source: "iana"
      },
      "application/prs.xsf+xml": {
        source: "iana",
        compressible: true
      },
      "application/pskc+xml": {
        source: "iana",
        compressible: true,
        extensions: ["pskcxml"]
      },
      "application/pvd+json": {
        source: "iana",
        compressible: true
      },
      "application/qsig": {
        source: "iana"
      },
      "application/raml+yaml": {
        compressible: true,
        extensions: ["raml"]
      },
      "application/raptorfec": {
        source: "iana"
      },
      "application/rdap+json": {
        source: "iana",
        compressible: true
      },
      "application/rdf+xml": {
        source: "iana",
        compressible: true,
        extensions: ["rdf", "owl"]
      },
      "application/reginfo+xml": {
        source: "iana",
        compressible: true,
        extensions: ["rif"]
      },
      "application/relax-ng-compact-syntax": {
        source: "iana",
        extensions: ["rnc"]
      },
      "application/remote-printing": {
        source: "iana"
      },
      "application/reputon+json": {
        source: "iana",
        compressible: true
      },
      "application/resource-lists+xml": {
        source: "iana",
        compressible: true,
        extensions: ["rl"]
      },
      "application/resource-lists-diff+xml": {
        source: "iana",
        compressible: true,
        extensions: ["rld"]
      },
      "application/rfc+xml": {
        source: "iana",
        compressible: true
      },
      "application/riscos": {
        source: "iana"
      },
      "application/rlmi+xml": {
        source: "iana",
        compressible: true
      },
      "application/rls-services+xml": {
        source: "iana",
        compressible: true,
        extensions: ["rs"]
      },
      "application/route-apd+xml": {
        source: "iana",
        compressible: true,
        extensions: ["rapd"]
      },
      "application/route-s-tsid+xml": {
        source: "iana",
        compressible: true,
        extensions: ["sls"]
      },
      "application/route-usd+xml": {
        source: "iana",
        compressible: true,
        extensions: ["rusd"]
      },
      "application/rpki-ghostbusters": {
        source: "iana",
        extensions: ["gbr"]
      },
      "application/rpki-manifest": {
        source: "iana",
        extensions: ["mft"]
      },
      "application/rpki-publication": {
        source: "iana"
      },
      "application/rpki-roa": {
        source: "iana",
        extensions: ["roa"]
      },
      "application/rpki-updown": {
        source: "iana"
      },
      "application/rsd+xml": {
        source: "apache",
        compressible: true,
        extensions: ["rsd"]
      },
      "application/rss+xml": {
        source: "apache",
        compressible: true,
        extensions: ["rss"]
      },
      "application/rtf": {
        source: "iana",
        compressible: true,
        extensions: ["rtf"]
      },
      "application/rtploopback": {
        source: "iana"
      },
      "application/rtx": {
        source: "iana"
      },
      "application/samlassertion+xml": {
        source: "iana",
        compressible: true
      },
      "application/samlmetadata+xml": {
        source: "iana",
        compressible: true
      },
      "application/sarif+json": {
        source: "iana",
        compressible: true
      },
      "application/sarif-external-properties+json": {
        source: "iana",
        compressible: true
      },
      "application/sbe": {
        source: "iana"
      },
      "application/sbml+xml": {
        source: "iana",
        compressible: true,
        extensions: ["sbml"]
      },
      "application/scaip+xml": {
        source: "iana",
        compressible: true
      },
      "application/scim+json": {
        source: "iana",
        compressible: true
      },
      "application/scvp-cv-request": {
        source: "iana",
        extensions: ["scq"]
      },
      "application/scvp-cv-response": {
        source: "iana",
        extensions: ["scs"]
      },
      "application/scvp-vp-request": {
        source: "iana",
        extensions: ["spq"]
      },
      "application/scvp-vp-response": {
        source: "iana",
        extensions: ["spp"]
      },
      "application/sdp": {
        source: "iana",
        extensions: ["sdp"]
      },
      "application/secevent+jwt": {
        source: "iana"
      },
      "application/senml+cbor": {
        source: "iana"
      },
      "application/senml+json": {
        source: "iana",
        compressible: true
      },
      "application/senml+xml": {
        source: "iana",
        compressible: true,
        extensions: ["senmlx"]
      },
      "application/senml-etch+cbor": {
        source: "iana"
      },
      "application/senml-etch+json": {
        source: "iana",
        compressible: true
      },
      "application/senml-exi": {
        source: "iana"
      },
      "application/sensml+cbor": {
        source: "iana"
      },
      "application/sensml+json": {
        source: "iana",
        compressible: true
      },
      "application/sensml+xml": {
        source: "iana",
        compressible: true,
        extensions: ["sensmlx"]
      },
      "application/sensml-exi": {
        source: "iana"
      },
      "application/sep+xml": {
        source: "iana",
        compressible: true
      },
      "application/sep-exi": {
        source: "iana"
      },
      "application/session-info": {
        source: "iana"
      },
      "application/set-payment": {
        source: "iana"
      },
      "application/set-payment-initiation": {
        source: "iana",
        extensions: ["setpay"]
      },
      "application/set-registration": {
        source: "iana"
      },
      "application/set-registration-initiation": {
        source: "iana",
        extensions: ["setreg"]
      },
      "application/sgml": {
        source: "iana"
      },
      "application/sgml-open-catalog": {
        source: "iana"
      },
      "application/shf+xml": {
        source: "iana",
        compressible: true,
        extensions: ["shf"]
      },
      "application/sieve": {
        source: "iana",
        extensions: ["siv", "sieve"]
      },
      "application/simple-filter+xml": {
        source: "iana",
        compressible: true
      },
      "application/simple-message-summary": {
        source: "iana"
      },
      "application/simplesymbolcontainer": {
        source: "iana"
      },
      "application/sipc": {
        source: "iana"
      },
      "application/slate": {
        source: "iana"
      },
      "application/smil": {
        source: "iana"
      },
      "application/smil+xml": {
        source: "iana",
        compressible: true,
        extensions: ["smi", "smil"]
      },
      "application/smpte336m": {
        source: "iana"
      },
      "application/soap+fastinfoset": {
        source: "iana"
      },
      "application/soap+xml": {
        source: "iana",
        compressible: true
      },
      "application/sparql-query": {
        source: "iana",
        extensions: ["rq"]
      },
      "application/sparql-results+xml": {
        source: "iana",
        compressible: true,
        extensions: ["srx"]
      },
      "application/spdx+json": {
        source: "iana",
        compressible: true
      },
      "application/spirits-event+xml": {
        source: "iana",
        compressible: true
      },
      "application/sql": {
        source: "iana"
      },
      "application/srgs": {
        source: "iana",
        extensions: ["gram"]
      },
      "application/srgs+xml": {
        source: "iana",
        compressible: true,
        extensions: ["grxml"]
      },
      "application/sru+xml": {
        source: "iana",
        compressible: true,
        extensions: ["sru"]
      },
      "application/ssdl+xml": {
        source: "apache",
        compressible: true,
        extensions: ["ssdl"]
      },
      "application/ssml+xml": {
        source: "iana",
        compressible: true,
        extensions: ["ssml"]
      },
      "application/stix+json": {
        source: "iana",
        compressible: true
      },
      "application/swid+xml": {
        source: "iana",
        compressible: true,
        extensions: ["swidtag"]
      },
      "application/tamp-apex-update": {
        source: "iana"
      },
      "application/tamp-apex-update-confirm": {
        source: "iana"
      },
      "application/tamp-community-update": {
        source: "iana"
      },
      "application/tamp-community-update-confirm": {
        source: "iana"
      },
      "application/tamp-error": {
        source: "iana"
      },
      "application/tamp-sequence-adjust": {
        source: "iana"
      },
      "application/tamp-sequence-adjust-confirm": {
        source: "iana"
      },
      "application/tamp-status-query": {
        source: "iana"
      },
      "application/tamp-status-response": {
        source: "iana"
      },
      "application/tamp-update": {
        source: "iana"
      },
      "application/tamp-update-confirm": {
        source: "iana"
      },
      "application/tar": {
        compressible: true
      },
      "application/taxii+json": {
        source: "iana",
        compressible: true
      },
      "application/td+json": {
        source: "iana",
        compressible: true
      },
      "application/tei+xml": {
        source: "iana",
        compressible: true,
        extensions: ["tei", "teicorpus"]
      },
      "application/tetra_isi": {
        source: "iana"
      },
      "application/thraud+xml": {
        source: "iana",
        compressible: true,
        extensions: ["tfi"]
      },
      "application/timestamp-query": {
        source: "iana"
      },
      "application/timestamp-reply": {
        source: "iana"
      },
      "application/timestamped-data": {
        source: "iana",
        extensions: ["tsd"]
      },
      "application/tlsrpt+gzip": {
        source: "iana"
      },
      "application/tlsrpt+json": {
        source: "iana",
        compressible: true
      },
      "application/tnauthlist": {
        source: "iana"
      },
      "application/token-introspection+jwt": {
        source: "iana"
      },
      "application/toml": {
        compressible: true,
        extensions: ["toml"]
      },
      "application/trickle-ice-sdpfrag": {
        source: "iana"
      },
      "application/trig": {
        source: "iana",
        extensions: ["trig"]
      },
      "application/ttml+xml": {
        source: "iana",
        compressible: true,
        extensions: ["ttml"]
      },
      "application/tve-trigger": {
        source: "iana"
      },
      "application/tzif": {
        source: "iana"
      },
      "application/tzif-leap": {
        source: "iana"
      },
      "application/ubjson": {
        compressible: false,
        extensions: ["ubj"]
      },
      "application/ulpfec": {
        source: "iana"
      },
      "application/urc-grpsheet+xml": {
        source: "iana",
        compressible: true
      },
      "application/urc-ressheet+xml": {
        source: "iana",
        compressible: true,
        extensions: ["rsheet"]
      },
      "application/urc-targetdesc+xml": {
        source: "iana",
        compressible: true,
        extensions: ["td"]
      },
      "application/urc-uisocketdesc+xml": {
        source: "iana",
        compressible: true
      },
      "application/vcard+json": {
        source: "iana",
        compressible: true
      },
      "application/vcard+xml": {
        source: "iana",
        compressible: true
      },
      "application/vemmi": {
        source: "iana"
      },
      "application/vividence.scriptfile": {
        source: "apache"
      },
      "application/vnd.1000minds.decision-model+xml": {
        source: "iana",
        compressible: true,
        extensions: ["1km"]
      },
      "application/vnd.3gpp-prose+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.3gpp-prose-pc3ch+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.3gpp-v2x-local-service-information": {
        source: "iana"
      },
      "application/vnd.3gpp.5gnas": {
        source: "iana"
      },
      "application/vnd.3gpp.access-transfer-events+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.3gpp.bsf+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.3gpp.gmop+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.3gpp.gtpc": {
        source: "iana"
      },
      "application/vnd.3gpp.interworking-data": {
        source: "iana"
      },
      "application/vnd.3gpp.lpp": {
        source: "iana"
      },
      "application/vnd.3gpp.mc-signalling-ear": {
        source: "iana"
      },
      "application/vnd.3gpp.mcdata-affiliation-command+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.3gpp.mcdata-info+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.3gpp.mcdata-payload": {
        source: "iana"
      },
      "application/vnd.3gpp.mcdata-service-config+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.3gpp.mcdata-signalling": {
        source: "iana"
      },
      "application/vnd.3gpp.mcdata-ue-config+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.3gpp.mcdata-user-profile+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.3gpp.mcptt-affiliation-command+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.3gpp.mcptt-floor-request+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.3gpp.mcptt-info+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.3gpp.mcptt-location-info+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.3gpp.mcptt-mbms-usage-info+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.3gpp.mcptt-service-config+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.3gpp.mcptt-signed+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.3gpp.mcptt-ue-config+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.3gpp.mcptt-ue-init-config+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.3gpp.mcptt-user-profile+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.3gpp.mcvideo-affiliation-command+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.3gpp.mcvideo-affiliation-info+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.3gpp.mcvideo-info+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.3gpp.mcvideo-location-info+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.3gpp.mcvideo-mbms-usage-info+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.3gpp.mcvideo-service-config+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.3gpp.mcvideo-transmission-request+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.3gpp.mcvideo-ue-config+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.3gpp.mcvideo-user-profile+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.3gpp.mid-call+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.3gpp.ngap": {
        source: "iana"
      },
      "application/vnd.3gpp.pfcp": {
        source: "iana"
      },
      "application/vnd.3gpp.pic-bw-large": {
        source: "iana",
        extensions: ["plb"]
      },
      "application/vnd.3gpp.pic-bw-small": {
        source: "iana",
        extensions: ["psb"]
      },
      "application/vnd.3gpp.pic-bw-var": {
        source: "iana",
        extensions: ["pvb"]
      },
      "application/vnd.3gpp.s1ap": {
        source: "iana"
      },
      "application/vnd.3gpp.sms": {
        source: "iana"
      },
      "application/vnd.3gpp.sms+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.3gpp.srvcc-ext+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.3gpp.srvcc-info+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.3gpp.state-and-event-info+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.3gpp.ussd+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.3gpp2.bcmcsinfo+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.3gpp2.sms": {
        source: "iana"
      },
      "application/vnd.3gpp2.tcap": {
        source: "iana",
        extensions: ["tcap"]
      },
      "application/vnd.3lightssoftware.imagescal": {
        source: "iana"
      },
      "application/vnd.3m.post-it-notes": {
        source: "iana",
        extensions: ["pwn"]
      },
      "application/vnd.accpac.simply.aso": {
        source: "iana",
        extensions: ["aso"]
      },
      "application/vnd.accpac.simply.imp": {
        source: "iana",
        extensions: ["imp"]
      },
      "application/vnd.acucobol": {
        source: "iana",
        extensions: ["acu"]
      },
      "application/vnd.acucorp": {
        source: "iana",
        extensions: ["atc", "acutc"]
      },
      "application/vnd.adobe.air-application-installer-package+zip": {
        source: "apache",
        compressible: false,
        extensions: ["air"]
      },
      "application/vnd.adobe.flash.movie": {
        source: "iana"
      },
      "application/vnd.adobe.formscentral.fcdt": {
        source: "iana",
        extensions: ["fcdt"]
      },
      "application/vnd.adobe.fxp": {
        source: "iana",
        extensions: ["fxp", "fxpl"]
      },
      "application/vnd.adobe.partial-upload": {
        source: "iana"
      },
      "application/vnd.adobe.xdp+xml": {
        source: "iana",
        compressible: true,
        extensions: ["xdp"]
      },
      "application/vnd.adobe.xfdf": {
        source: "iana",
        extensions: ["xfdf"]
      },
      "application/vnd.aether.imp": {
        source: "iana"
      },
      "application/vnd.afpc.afplinedata": {
        source: "iana"
      },
      "application/vnd.afpc.afplinedata-pagedef": {
        source: "iana"
      },
      "application/vnd.afpc.cmoca-cmresource": {
        source: "iana"
      },
      "application/vnd.afpc.foca-charset": {
        source: "iana"
      },
      "application/vnd.afpc.foca-codedfont": {
        source: "iana"
      },
      "application/vnd.afpc.foca-codepage": {
        source: "iana"
      },
      "application/vnd.afpc.modca": {
        source: "iana"
      },
      "application/vnd.afpc.modca-cmtable": {
        source: "iana"
      },
      "application/vnd.afpc.modca-formdef": {
        source: "iana"
      },
      "application/vnd.afpc.modca-mediummap": {
        source: "iana"
      },
      "application/vnd.afpc.modca-objectcontainer": {
        source: "iana"
      },
      "application/vnd.afpc.modca-overlay": {
        source: "iana"
      },
      "application/vnd.afpc.modca-pagesegment": {
        source: "iana"
      },
      "application/vnd.age": {
        source: "iana",
        extensions: ["age"]
      },
      "application/vnd.ah-barcode": {
        source: "iana"
      },
      "application/vnd.ahead.space": {
        source: "iana",
        extensions: ["ahead"]
      },
      "application/vnd.airzip.filesecure.azf": {
        source: "iana",
        extensions: ["azf"]
      },
      "application/vnd.airzip.filesecure.azs": {
        source: "iana",
        extensions: ["azs"]
      },
      "application/vnd.amadeus+json": {
        source: "iana",
        compressible: true
      },
      "application/vnd.amazon.ebook": {
        source: "apache",
        extensions: ["azw"]
      },
      "application/vnd.amazon.mobi8-ebook": {
        source: "iana"
      },
      "application/vnd.americandynamics.acc": {
        source: "iana",
        extensions: ["acc"]
      },
      "application/vnd.amiga.ami": {
        source: "iana",
        extensions: ["ami"]
      },
      "application/vnd.amundsen.maze+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.android.ota": {
        source: "iana"
      },
      "application/vnd.android.package-archive": {
        source: "apache",
        compressible: false,
        extensions: ["apk"]
      },
      "application/vnd.anki": {
        source: "iana"
      },
      "application/vnd.anser-web-certificate-issue-initiation": {
        source: "iana",
        extensions: ["cii"]
      },
      "application/vnd.anser-web-funds-transfer-initiation": {
        source: "apache",
        extensions: ["fti"]
      },
      "application/vnd.antix.game-component": {
        source: "iana",
        extensions: ["atx"]
      },
      "application/vnd.apache.arrow.file": {
        source: "iana"
      },
      "application/vnd.apache.arrow.stream": {
        source: "iana"
      },
      "application/vnd.apache.thrift.binary": {
        source: "iana"
      },
      "application/vnd.apache.thrift.compact": {
        source: "iana"
      },
      "application/vnd.apache.thrift.json": {
        source: "iana"
      },
      "application/vnd.api+json": {
        source: "iana",
        compressible: true
      },
      "application/vnd.aplextor.warrp+json": {
        source: "iana",
        compressible: true
      },
      "application/vnd.apothekende.reservation+json": {
        source: "iana",
        compressible: true
      },
      "application/vnd.apple.installer+xml": {
        source: "iana",
        compressible: true,
        extensions: ["mpkg"]
      },
      "application/vnd.apple.keynote": {
        source: "iana",
        extensions: ["key"]
      },
      "application/vnd.apple.mpegurl": {
        source: "iana",
        extensions: ["m3u8"]
      },
      "application/vnd.apple.numbers": {
        source: "iana",
        extensions: ["numbers"]
      },
      "application/vnd.apple.pages": {
        source: "iana",
        extensions: ["pages"]
      },
      "application/vnd.apple.pkpass": {
        compressible: false,
        extensions: ["pkpass"]
      },
      "application/vnd.arastra.swi": {
        source: "iana"
      },
      "application/vnd.aristanetworks.swi": {
        source: "iana",
        extensions: ["swi"]
      },
      "application/vnd.artisan+json": {
        source: "iana",
        compressible: true
      },
      "application/vnd.artsquare": {
        source: "iana"
      },
      "application/vnd.astraea-software.iota": {
        source: "iana",
        extensions: ["iota"]
      },
      "application/vnd.audiograph": {
        source: "iana",
        extensions: ["aep"]
      },
      "application/vnd.autopackage": {
        source: "iana"
      },
      "application/vnd.avalon+json": {
        source: "iana",
        compressible: true
      },
      "application/vnd.avistar+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.balsamiq.bmml+xml": {
        source: "iana",
        compressible: true,
        extensions: ["bmml"]
      },
      "application/vnd.balsamiq.bmpr": {
        source: "iana"
      },
      "application/vnd.banana-accounting": {
        source: "iana"
      },
      "application/vnd.bbf.usp.error": {
        source: "iana"
      },
      "application/vnd.bbf.usp.msg": {
        source: "iana"
      },
      "application/vnd.bbf.usp.msg+json": {
        source: "iana",
        compressible: true
      },
      "application/vnd.bekitzur-stech+json": {
        source: "iana",
        compressible: true
      },
      "application/vnd.bint.med-content": {
        source: "iana"
      },
      "application/vnd.biopax.rdf+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.blink-idb-value-wrapper": {
        source: "iana"
      },
      "application/vnd.blueice.multipass": {
        source: "iana",
        extensions: ["mpm"]
      },
      "application/vnd.bluetooth.ep.oob": {
        source: "iana"
      },
      "application/vnd.bluetooth.le.oob": {
        source: "iana"
      },
      "application/vnd.bmi": {
        source: "iana",
        extensions: ["bmi"]
      },
      "application/vnd.bpf": {
        source: "iana"
      },
      "application/vnd.bpf3": {
        source: "iana"
      },
      "application/vnd.businessobjects": {
        source: "iana",
        extensions: ["rep"]
      },
      "application/vnd.byu.uapi+json": {
        source: "iana",
        compressible: true
      },
      "application/vnd.cab-jscript": {
        source: "iana"
      },
      "application/vnd.canon-cpdl": {
        source: "iana"
      },
      "application/vnd.canon-lips": {
        source: "iana"
      },
      "application/vnd.capasystems-pg+json": {
        source: "iana",
        compressible: true
      },
      "application/vnd.cendio.thinlinc.clientconf": {
        source: "iana"
      },
      "application/vnd.century-systems.tcp_stream": {
        source: "iana"
      },
      "application/vnd.chemdraw+xml": {
        source: "iana",
        compressible: true,
        extensions: ["cdxml"]
      },
      "application/vnd.chess-pgn": {
        source: "iana"
      },
      "application/vnd.chipnuts.karaoke-mmd": {
        source: "iana",
        extensions: ["mmd"]
      },
      "application/vnd.ciedi": {
        source: "iana"
      },
      "application/vnd.cinderella": {
        source: "iana",
        extensions: ["cdy"]
      },
      "application/vnd.cirpack.isdn-ext": {
        source: "iana"
      },
      "application/vnd.citationstyles.style+xml": {
        source: "iana",
        compressible: true,
        extensions: ["csl"]
      },
      "application/vnd.claymore": {
        source: "iana",
        extensions: ["cla"]
      },
      "application/vnd.cloanto.rp9": {
        source: "iana",
        extensions: ["rp9"]
      },
      "application/vnd.clonk.c4group": {
        source: "iana",
        extensions: ["c4g", "c4d", "c4f", "c4p", "c4u"]
      },
      "application/vnd.cluetrust.cartomobile-config": {
        source: "iana",
        extensions: ["c11amc"]
      },
      "application/vnd.cluetrust.cartomobile-config-pkg": {
        source: "iana",
        extensions: ["c11amz"]
      },
      "application/vnd.coffeescript": {
        source: "iana"
      },
      "application/vnd.collabio.xodocuments.document": {
        source: "iana"
      },
      "application/vnd.collabio.xodocuments.document-template": {
        source: "iana"
      },
      "application/vnd.collabio.xodocuments.presentation": {
        source: "iana"
      },
      "application/vnd.collabio.xodocuments.presentation-template": {
        source: "iana"
      },
      "application/vnd.collabio.xodocuments.spreadsheet": {
        source: "iana"
      },
      "application/vnd.collabio.xodocuments.spreadsheet-template": {
        source: "iana"
      },
      "application/vnd.collection+json": {
        source: "iana",
        compressible: true
      },
      "application/vnd.collection.doc+json": {
        source: "iana",
        compressible: true
      },
      "application/vnd.collection.next+json": {
        source: "iana",
        compressible: true
      },
      "application/vnd.comicbook+zip": {
        source: "iana",
        compressible: false
      },
      "application/vnd.comicbook-rar": {
        source: "iana"
      },
      "application/vnd.commerce-battelle": {
        source: "iana"
      },
      "application/vnd.commonspace": {
        source: "iana",
        extensions: ["csp"]
      },
      "application/vnd.contact.cmsg": {
        source: "iana",
        extensions: ["cdbcmsg"]
      },
      "application/vnd.coreos.ignition+json": {
        source: "iana",
        compressible: true
      },
      "application/vnd.cosmocaller": {
        source: "iana",
        extensions: ["cmc"]
      },
      "application/vnd.crick.clicker": {
        source: "iana",
        extensions: ["clkx"]
      },
      "application/vnd.crick.clicker.keyboard": {
        source: "iana",
        extensions: ["clkk"]
      },
      "application/vnd.crick.clicker.palette": {
        source: "iana",
        extensions: ["clkp"]
      },
      "application/vnd.crick.clicker.template": {
        source: "iana",
        extensions: ["clkt"]
      },
      "application/vnd.crick.clicker.wordbank": {
        source: "iana",
        extensions: ["clkw"]
      },
      "application/vnd.criticaltools.wbs+xml": {
        source: "iana",
        compressible: true,
        extensions: ["wbs"]
      },
      "application/vnd.cryptii.pipe+json": {
        source: "iana",
        compressible: true
      },
      "application/vnd.crypto-shade-file": {
        source: "iana"
      },
      "application/vnd.cryptomator.encrypted": {
        source: "iana"
      },
      "application/vnd.cryptomator.vault": {
        source: "iana"
      },
      "application/vnd.ctc-posml": {
        source: "iana",
        extensions: ["pml"]
      },
      "application/vnd.ctct.ws+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.cups-pdf": {
        source: "iana"
      },
      "application/vnd.cups-postscript": {
        source: "iana"
      },
      "application/vnd.cups-ppd": {
        source: "iana",
        extensions: ["ppd"]
      },
      "application/vnd.cups-raster": {
        source: "iana"
      },
      "application/vnd.cups-raw": {
        source: "iana"
      },
      "application/vnd.curl": {
        source: "iana"
      },
      "application/vnd.curl.car": {
        source: "apache",
        extensions: ["car"]
      },
      "application/vnd.curl.pcurl": {
        source: "apache",
        extensions: ["pcurl"]
      },
      "application/vnd.cyan.dean.root+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.cybank": {
        source: "iana"
      },
      "application/vnd.cyclonedx+json": {
        source: "iana",
        compressible: true
      },
      "application/vnd.cyclonedx+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.d2l.coursepackage1p0+zip": {
        source: "iana",
        compressible: false
      },
      "application/vnd.d3m-dataset": {
        source: "iana"
      },
      "application/vnd.d3m-problem": {
        source: "iana"
      },
      "application/vnd.dart": {
        source: "iana",
        compressible: true,
        extensions: ["dart"]
      },
      "application/vnd.data-vision.rdz": {
        source: "iana",
        extensions: ["rdz"]
      },
      "application/vnd.datapackage+json": {
        source: "iana",
        compressible: true
      },
      "application/vnd.dataresource+json": {
        source: "iana",
        compressible: true
      },
      "application/vnd.dbf": {
        source: "iana",
        extensions: ["dbf"]
      },
      "application/vnd.debian.binary-package": {
        source: "iana"
      },
      "application/vnd.dece.data": {
        source: "iana",
        extensions: ["uvf", "uvvf", "uvd", "uvvd"]
      },
      "application/vnd.dece.ttml+xml": {
        source: "iana",
        compressible: true,
        extensions: ["uvt", "uvvt"]
      },
      "application/vnd.dece.unspecified": {
        source: "iana",
        extensions: ["uvx", "uvvx"]
      },
      "application/vnd.dece.zip": {
        source: "iana",
        extensions: ["uvz", "uvvz"]
      },
      "application/vnd.denovo.fcselayout-link": {
        source: "iana",
        extensions: ["fe_launch"]
      },
      "application/vnd.desmume.movie": {
        source: "iana"
      },
      "application/vnd.dir-bi.plate-dl-nosuffix": {
        source: "iana"
      },
      "application/vnd.dm.delegation+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.dna": {
        source: "iana",
        extensions: ["dna"]
      },
      "application/vnd.document+json": {
        source: "iana",
        compressible: true
      },
      "application/vnd.dolby.mlp": {
        source: "apache",
        extensions: ["mlp"]
      },
      "application/vnd.dolby.mobile.1": {
        source: "iana"
      },
      "application/vnd.dolby.mobile.2": {
        source: "iana"
      },
      "application/vnd.doremir.scorecloud-binary-document": {
        source: "iana"
      },
      "application/vnd.dpgraph": {
        source: "iana",
        extensions: ["dpg"]
      },
      "application/vnd.dreamfactory": {
        source: "iana",
        extensions: ["dfac"]
      },
      "application/vnd.drive+json": {
        source: "iana",
        compressible: true
      },
      "application/vnd.ds-keypoint": {
        source: "apache",
        extensions: ["kpxx"]
      },
      "application/vnd.dtg.local": {
        source: "iana"
      },
      "application/vnd.dtg.local.flash": {
        source: "iana"
      },
      "application/vnd.dtg.local.html": {
        source: "iana"
      },
      "application/vnd.dvb.ait": {
        source: "iana",
        extensions: ["ait"]
      },
      "application/vnd.dvb.dvbisl+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.dvb.dvbj": {
        source: "iana"
      },
      "application/vnd.dvb.esgcontainer": {
        source: "iana"
      },
      "application/vnd.dvb.ipdcdftnotifaccess": {
        source: "iana"
      },
      "application/vnd.dvb.ipdcesgaccess": {
        source: "iana"
      },
      "application/vnd.dvb.ipdcesgaccess2": {
        source: "iana"
      },
      "application/vnd.dvb.ipdcesgpdd": {
        source: "iana"
      },
      "application/vnd.dvb.ipdcroaming": {
        source: "iana"
      },
      "application/vnd.dvb.iptv.alfec-base": {
        source: "iana"
      },
      "application/vnd.dvb.iptv.alfec-enhancement": {
        source: "iana"
      },
      "application/vnd.dvb.notif-aggregate-root+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.dvb.notif-container+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.dvb.notif-generic+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.dvb.notif-ia-msglist+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.dvb.notif-ia-registration-request+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.dvb.notif-ia-registration-response+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.dvb.notif-init+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.dvb.pfr": {
        source: "iana"
      },
      "application/vnd.dvb.service": {
        source: "iana",
        extensions: ["svc"]
      },
      "application/vnd.dxr": {
        source: "iana"
      },
      "application/vnd.dynageo": {
        source: "iana",
        extensions: ["geo"]
      },
      "application/vnd.dzr": {
        source: "iana"
      },
      "application/vnd.easykaraoke.cdgdownload": {
        source: "iana"
      },
      "application/vnd.ecdis-update": {
        source: "iana"
      },
      "application/vnd.ecip.rlp": {
        source: "iana"
      },
      "application/vnd.eclipse.ditto+json": {
        source: "iana",
        compressible: true
      },
      "application/vnd.ecowin.chart": {
        source: "iana",
        extensions: ["mag"]
      },
      "application/vnd.ecowin.filerequest": {
        source: "iana"
      },
      "application/vnd.ecowin.fileupdate": {
        source: "iana"
      },
      "application/vnd.ecowin.series": {
        source: "iana"
      },
      "application/vnd.ecowin.seriesrequest": {
        source: "iana"
      },
      "application/vnd.ecowin.seriesupdate": {
        source: "iana"
      },
      "application/vnd.efi.img": {
        source: "iana"
      },
      "application/vnd.efi.iso": {
        source: "iana"
      },
      "application/vnd.emclient.accessrequest+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.enliven": {
        source: "iana",
        extensions: ["nml"]
      },
      "application/vnd.enphase.envoy": {
        source: "iana"
      },
      "application/vnd.eprints.data+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.epson.esf": {
        source: "iana",
        extensions: ["esf"]
      },
      "application/vnd.epson.msf": {
        source: "iana",
        extensions: ["msf"]
      },
      "application/vnd.epson.quickanime": {
        source: "iana",
        extensions: ["qam"]
      },
      "application/vnd.epson.salt": {
        source: "iana",
        extensions: ["slt"]
      },
      "application/vnd.epson.ssf": {
        source: "iana",
        extensions: ["ssf"]
      },
      "application/vnd.ericsson.quickcall": {
        source: "iana"
      },
      "application/vnd.espass-espass+zip": {
        source: "iana",
        compressible: false
      },
      "application/vnd.eszigno3+xml": {
        source: "iana",
        compressible: true,
        extensions: ["es3", "et3"]
      },
      "application/vnd.etsi.aoc+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.etsi.asic-e+zip": {
        source: "iana",
        compressible: false
      },
      "application/vnd.etsi.asic-s+zip": {
        source: "iana",
        compressible: false
      },
      "application/vnd.etsi.cug+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.etsi.iptvcommand+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.etsi.iptvdiscovery+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.etsi.iptvprofile+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.etsi.iptvsad-bc+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.etsi.iptvsad-cod+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.etsi.iptvsad-npvr+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.etsi.iptvservice+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.etsi.iptvsync+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.etsi.iptvueprofile+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.etsi.mcid+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.etsi.mheg5": {
        source: "iana"
      },
      "application/vnd.etsi.overload-control-policy-dataset+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.etsi.pstn+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.etsi.sci+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.etsi.simservs+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.etsi.timestamp-token": {
        source: "iana"
      },
      "application/vnd.etsi.tsl+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.etsi.tsl.der": {
        source: "iana"
      },
      "application/vnd.eu.kasparian.car+json": {
        source: "iana",
        compressible: true
      },
      "application/vnd.eudora.data": {
        source: "iana"
      },
      "application/vnd.evolv.ecig.profile": {
        source: "iana"
      },
      "application/vnd.evolv.ecig.settings": {
        source: "iana"
      },
      "application/vnd.evolv.ecig.theme": {
        source: "iana"
      },
      "application/vnd.exstream-empower+zip": {
        source: "iana",
        compressible: false
      },
      "application/vnd.exstream-package": {
        source: "iana"
      },
      "application/vnd.ezpix-album": {
        source: "iana",
        extensions: ["ez2"]
      },
      "application/vnd.ezpix-package": {
        source: "iana",
        extensions: ["ez3"]
      },
      "application/vnd.f-secure.mobile": {
        source: "iana"
      },
      "application/vnd.familysearch.gedcom+zip": {
        source: "iana",
        compressible: false
      },
      "application/vnd.fastcopy-disk-image": {
        source: "iana"
      },
      "application/vnd.fdf": {
        source: "iana",
        extensions: ["fdf"]
      },
      "application/vnd.fdsn.mseed": {
        source: "iana",
        extensions: ["mseed"]
      },
      "application/vnd.fdsn.seed": {
        source: "iana",
        extensions: ["seed", "dataless"]
      },
      "application/vnd.ffsns": {
        source: "iana"
      },
      "application/vnd.ficlab.flb+zip": {
        source: "iana",
        compressible: false
      },
      "application/vnd.filmit.zfc": {
        source: "iana"
      },
      "application/vnd.fints": {
        source: "iana"
      },
      "application/vnd.firemonkeys.cloudcell": {
        source: "iana"
      },
      "application/vnd.flographit": {
        source: "iana",
        extensions: ["gph"]
      },
      "application/vnd.fluxtime.clip": {
        source: "iana",
        extensions: ["ftc"]
      },
      "application/vnd.font-fontforge-sfd": {
        source: "iana"
      },
      "application/vnd.framemaker": {
        source: "iana",
        extensions: ["fm", "frame", "maker", "book"]
      },
      "application/vnd.frogans.fnc": {
        source: "iana",
        extensions: ["fnc"]
      },
      "application/vnd.frogans.ltf": {
        source: "iana",
        extensions: ["ltf"]
      },
      "application/vnd.fsc.weblaunch": {
        source: "iana",
        extensions: ["fsc"]
      },
      "application/vnd.fujifilm.fb.docuworks": {
        source: "iana"
      },
      "application/vnd.fujifilm.fb.docuworks.binder": {
        source: "iana"
      },
      "application/vnd.fujifilm.fb.docuworks.container": {
        source: "iana"
      },
      "application/vnd.fujifilm.fb.jfi+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.fujitsu.oasys": {
        source: "iana",
        extensions: ["oas"]
      },
      "application/vnd.fujitsu.oasys2": {
        source: "iana",
        extensions: ["oa2"]
      },
      "application/vnd.fujitsu.oasys3": {
        source: "iana",
        extensions: ["oa3"]
      },
      "application/vnd.fujitsu.oasysgp": {
        source: "iana",
        extensions: ["fg5"]
      },
      "application/vnd.fujitsu.oasysprs": {
        source: "iana",
        extensions: ["bh2"]
      },
      "application/vnd.fujixerox.art-ex": {
        source: "iana"
      },
      "application/vnd.fujixerox.art4": {
        source: "iana"
      },
      "application/vnd.fujixerox.ddd": {
        source: "iana",
        extensions: ["ddd"]
      },
      "application/vnd.fujixerox.docuworks": {
        source: "iana",
        extensions: ["xdw"]
      },
      "application/vnd.fujixerox.docuworks.binder": {
        source: "iana",
        extensions: ["xbd"]
      },
      "application/vnd.fujixerox.docuworks.container": {
        source: "iana"
      },
      "application/vnd.fujixerox.hbpl": {
        source: "iana"
      },
      "application/vnd.fut-misnet": {
        source: "iana"
      },
      "application/vnd.futoin+cbor": {
        source: "iana"
      },
      "application/vnd.futoin+json": {
        source: "iana",
        compressible: true
      },
      "application/vnd.fuzzysheet": {
        source: "iana",
        extensions: ["fzs"]
      },
      "application/vnd.genomatix.tuxedo": {
        source: "iana",
        extensions: ["txd"]
      },
      "application/vnd.gentics.grd+json": {
        source: "iana",
        compressible: true
      },
      "application/vnd.geo+json": {
        source: "iana",
        compressible: true
      },
      "application/vnd.geocube+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.geogebra.file": {
        source: "iana",
        extensions: ["ggb"]
      },
      "application/vnd.geogebra.slides": {
        source: "iana"
      },
      "application/vnd.geogebra.tool": {
        source: "iana",
        extensions: ["ggt"]
      },
      "application/vnd.geometry-explorer": {
        source: "iana",
        extensions: ["gex", "gre"]
      },
      "application/vnd.geonext": {
        source: "iana",
        extensions: ["gxt"]
      },
      "application/vnd.geoplan": {
        source: "iana",
        extensions: ["g2w"]
      },
      "application/vnd.geospace": {
        source: "iana",
        extensions: ["g3w"]
      },
      "application/vnd.gerber": {
        source: "iana"
      },
      "application/vnd.globalplatform.card-content-mgt": {
        source: "iana"
      },
      "application/vnd.globalplatform.card-content-mgt-response": {
        source: "iana"
      },
      "application/vnd.gmx": {
        source: "iana",
        extensions: ["gmx"]
      },
      "application/vnd.google-apps.document": {
        compressible: false,
        extensions: ["gdoc"]
      },
      "application/vnd.google-apps.presentation": {
        compressible: false,
        extensions: ["gslides"]
      },
      "application/vnd.google-apps.spreadsheet": {
        compressible: false,
        extensions: ["gsheet"]
      },
      "application/vnd.google-earth.kml+xml": {
        source: "iana",
        compressible: true,
        extensions: ["kml"]
      },
      "application/vnd.google-earth.kmz": {
        source: "iana",
        compressible: false,
        extensions: ["kmz"]
      },
      "application/vnd.gov.sk.e-form+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.gov.sk.e-form+zip": {
        source: "iana",
        compressible: false
      },
      "application/vnd.gov.sk.xmldatacontainer+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.grafeq": {
        source: "iana",
        extensions: ["gqf", "gqs"]
      },
      "application/vnd.gridmp": {
        source: "iana"
      },
      "application/vnd.groove-account": {
        source: "iana",
        extensions: ["gac"]
      },
      "application/vnd.groove-help": {
        source: "iana",
        extensions: ["ghf"]
      },
      "application/vnd.groove-identity-message": {
        source: "iana",
        extensions: ["gim"]
      },
      "application/vnd.groove-injector": {
        source: "iana",
        extensions: ["grv"]
      },
      "application/vnd.groove-tool-message": {
        source: "iana",
        extensions: ["gtm"]
      },
      "application/vnd.groove-tool-template": {
        source: "iana",
        extensions: ["tpl"]
      },
      "application/vnd.groove-vcard": {
        source: "iana",
        extensions: ["vcg"]
      },
      "application/vnd.hal+json": {
        source: "iana",
        compressible: true
      },
      "application/vnd.hal+xml": {
        source: "iana",
        compressible: true,
        extensions: ["hal"]
      },
      "application/vnd.handheld-entertainment+xml": {
        source: "iana",
        compressible: true,
        extensions: ["zmm"]
      },
      "application/vnd.hbci": {
        source: "iana",
        extensions: ["hbci"]
      },
      "application/vnd.hc+json": {
        source: "iana",
        compressible: true
      },
      "application/vnd.hcl-bireports": {
        source: "iana"
      },
      "application/vnd.hdt": {
        source: "iana"
      },
      "application/vnd.heroku+json": {
        source: "iana",
        compressible: true
      },
      "application/vnd.hhe.lesson-player": {
        source: "iana",
        extensions: ["les"]
      },
      "application/vnd.hl7cda+xml": {
        source: "iana",
        charset: "UTF-8",
        compressible: true
      },
      "application/vnd.hl7v2+xml": {
        source: "iana",
        charset: "UTF-8",
        compressible: true
      },
      "application/vnd.hp-hpgl": {
        source: "iana",
        extensions: ["hpgl"]
      },
      "application/vnd.hp-hpid": {
        source: "iana",
        extensions: ["hpid"]
      },
      "application/vnd.hp-hps": {
        source: "iana",
        extensions: ["hps"]
      },
      "application/vnd.hp-jlyt": {
        source: "iana",
        extensions: ["jlt"]
      },
      "application/vnd.hp-pcl": {
        source: "iana",
        extensions: ["pcl"]
      },
      "application/vnd.hp-pclxl": {
        source: "iana",
        extensions: ["pclxl"]
      },
      "application/vnd.httphone": {
        source: "iana"
      },
      "application/vnd.hydrostatix.sof-data": {
        source: "iana",
        extensions: ["sfd-hdstx"]
      },
      "application/vnd.hyper+json": {
        source: "iana",
        compressible: true
      },
      "application/vnd.hyper-item+json": {
        source: "iana",
        compressible: true
      },
      "application/vnd.hyperdrive+json": {
        source: "iana",
        compressible: true
      },
      "application/vnd.hzn-3d-crossword": {
        source: "iana"
      },
      "application/vnd.ibm.afplinedata": {
        source: "iana"
      },
      "application/vnd.ibm.electronic-media": {
        source: "iana"
      },
      "application/vnd.ibm.minipay": {
        source: "iana",
        extensions: ["mpy"]
      },
      "application/vnd.ibm.modcap": {
        source: "iana",
        extensions: ["afp", "listafp", "list3820"]
      },
      "application/vnd.ibm.rights-management": {
        source: "iana",
        extensions: ["irm"]
      },
      "application/vnd.ibm.secure-container": {
        source: "iana",
        extensions: ["sc"]
      },
      "application/vnd.iccprofile": {
        source: "iana",
        extensions: ["icc", "icm"]
      },
      "application/vnd.ieee.1905": {
        source: "iana"
      },
      "application/vnd.igloader": {
        source: "iana",
        extensions: ["igl"]
      },
      "application/vnd.imagemeter.folder+zip": {
        source: "iana",
        compressible: false
      },
      "application/vnd.imagemeter.image+zip": {
        source: "iana",
        compressible: false
      },
      "application/vnd.immervision-ivp": {
        source: "iana",
        extensions: ["ivp"]
      },
      "application/vnd.immervision-ivu": {
        source: "iana",
        extensions: ["ivu"]
      },
      "application/vnd.ims.imsccv1p1": {
        source: "iana"
      },
      "application/vnd.ims.imsccv1p2": {
        source: "iana"
      },
      "application/vnd.ims.imsccv1p3": {
        source: "iana"
      },
      "application/vnd.ims.lis.v2.result+json": {
        source: "iana",
        compressible: true
      },
      "application/vnd.ims.lti.v2.toolconsumerprofile+json": {
        source: "iana",
        compressible: true
      },
      "application/vnd.ims.lti.v2.toolproxy+json": {
        source: "iana",
        compressible: true
      },
      "application/vnd.ims.lti.v2.toolproxy.id+json": {
        source: "iana",
        compressible: true
      },
      "application/vnd.ims.lti.v2.toolsettings+json": {
        source: "iana",
        compressible: true
      },
      "application/vnd.ims.lti.v2.toolsettings.simple+json": {
        source: "iana",
        compressible: true
      },
      "application/vnd.informedcontrol.rms+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.informix-visionary": {
        source: "iana"
      },
      "application/vnd.infotech.project": {
        source: "iana"
      },
      "application/vnd.infotech.project+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.innopath.wamp.notification": {
        source: "iana"
      },
      "application/vnd.insors.igm": {
        source: "iana",
        extensions: ["igm"]
      },
      "application/vnd.intercon.formnet": {
        source: "iana",
        extensions: ["xpw", "xpx"]
      },
      "application/vnd.intergeo": {
        source: "iana",
        extensions: ["i2g"]
      },
      "application/vnd.intertrust.digibox": {
        source: "iana"
      },
      "application/vnd.intertrust.nncp": {
        source: "iana"
      },
      "application/vnd.intu.qbo": {
        source: "iana",
        extensions: ["qbo"]
      },
      "application/vnd.intu.qfx": {
        source: "iana",
        extensions: ["qfx"]
      },
      "application/vnd.iptc.g2.catalogitem+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.iptc.g2.conceptitem+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.iptc.g2.knowledgeitem+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.iptc.g2.newsitem+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.iptc.g2.newsmessage+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.iptc.g2.packageitem+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.iptc.g2.planningitem+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.ipunplugged.rcprofile": {
        source: "iana",
        extensions: ["rcprofile"]
      },
      "application/vnd.irepository.package+xml": {
        source: "iana",
        compressible: true,
        extensions: ["irp"]
      },
      "application/vnd.is-xpr": {
        source: "iana",
        extensions: ["xpr"]
      },
      "application/vnd.isac.fcs": {
        source: "iana",
        extensions: ["fcs"]
      },
      "application/vnd.iso11783-10+zip": {
        source: "iana",
        compressible: false
      },
      "application/vnd.jam": {
        source: "iana",
        extensions: ["jam"]
      },
      "application/vnd.japannet-directory-service": {
        source: "iana"
      },
      "application/vnd.japannet-jpnstore-wakeup": {
        source: "iana"
      },
      "application/vnd.japannet-payment-wakeup": {
        source: "iana"
      },
      "application/vnd.japannet-registration": {
        source: "iana"
      },
      "application/vnd.japannet-registration-wakeup": {
        source: "iana"
      },
      "application/vnd.japannet-setstore-wakeup": {
        source: "iana"
      },
      "application/vnd.japannet-verification": {
        source: "iana"
      },
      "application/vnd.japannet-verification-wakeup": {
        source: "iana"
      },
      "application/vnd.jcp.javame.midlet-rms": {
        source: "iana",
        extensions: ["rms"]
      },
      "application/vnd.jisp": {
        source: "iana",
        extensions: ["jisp"]
      },
      "application/vnd.joost.joda-archive": {
        source: "iana",
        extensions: ["joda"]
      },
      "application/vnd.jsk.isdn-ngn": {
        source: "iana"
      },
      "application/vnd.kahootz": {
        source: "iana",
        extensions: ["ktz", "ktr"]
      },
      "application/vnd.kde.karbon": {
        source: "iana",
        extensions: ["karbon"]
      },
      "application/vnd.kde.kchart": {
        source: "iana",
        extensions: ["chrt"]
      },
      "application/vnd.kde.kformula": {
        source: "iana",
        extensions: ["kfo"]
      },
      "application/vnd.kde.kivio": {
        source: "iana",
        extensions: ["flw"]
      },
      "application/vnd.kde.kontour": {
        source: "iana",
        extensions: ["kon"]
      },
      "application/vnd.kde.kpresenter": {
        source: "iana",
        extensions: ["kpr", "kpt"]
      },
      "application/vnd.kde.kspread": {
        source: "iana",
        extensions: ["ksp"]
      },
      "application/vnd.kde.kword": {
        source: "iana",
        extensions: ["kwd", "kwt"]
      },
      "application/vnd.kenameaapp": {
        source: "iana",
        extensions: ["htke"]
      },
      "application/vnd.kidspiration": {
        source: "iana",
        extensions: ["kia"]
      },
      "application/vnd.kinar": {
        source: "iana",
        extensions: ["kne", "knp"]
      },
      "application/vnd.koan": {
        source: "iana",
        extensions: ["skp", "skd", "skt", "skm"]
      },
      "application/vnd.kodak-descriptor": {
        source: "iana",
        extensions: ["sse"]
      },
      "application/vnd.las": {
        source: "iana"
      },
      "application/vnd.las.las+json": {
        source: "iana",
        compressible: true
      },
      "application/vnd.las.las+xml": {
        source: "iana",
        compressible: true,
        extensions: ["lasxml"]
      },
      "application/vnd.laszip": {
        source: "iana"
      },
      "application/vnd.leap+json": {
        source: "iana",
        compressible: true
      },
      "application/vnd.liberty-request+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.llamagraphics.life-balance.desktop": {
        source: "iana",
        extensions: ["lbd"]
      },
      "application/vnd.llamagraphics.life-balance.exchange+xml": {
        source: "iana",
        compressible: true,
        extensions: ["lbe"]
      },
      "application/vnd.logipipe.circuit+zip": {
        source: "iana",
        compressible: false
      },
      "application/vnd.loom": {
        source: "iana"
      },
      "application/vnd.lotus-1-2-3": {
        source: "iana",
        extensions: ["123"]
      },
      "application/vnd.lotus-approach": {
        source: "iana",
        extensions: ["apr"]
      },
      "application/vnd.lotus-freelance": {
        source: "iana",
        extensions: ["pre"]
      },
      "application/vnd.lotus-notes": {
        source: "iana",
        extensions: ["nsf"]
      },
      "application/vnd.lotus-organizer": {
        source: "iana",
        extensions: ["org"]
      },
      "application/vnd.lotus-screencam": {
        source: "iana",
        extensions: ["scm"]
      },
      "application/vnd.lotus-wordpro": {
        source: "iana",
        extensions: ["lwp"]
      },
      "application/vnd.macports.portpkg": {
        source: "iana",
        extensions: ["portpkg"]
      },
      "application/vnd.mapbox-vector-tile": {
        source: "iana",
        extensions: ["mvt"]
      },
      "application/vnd.marlin.drm.actiontoken+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.marlin.drm.conftoken+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.marlin.drm.license+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.marlin.drm.mdcf": {
        source: "iana"
      },
      "application/vnd.mason+json": {
        source: "iana",
        compressible: true
      },
      "application/vnd.maxar.archive.3tz+zip": {
        source: "iana",
        compressible: false
      },
      "application/vnd.maxmind.maxmind-db": {
        source: "iana"
      },
      "application/vnd.mcd": {
        source: "iana",
        extensions: ["mcd"]
      },
      "application/vnd.medcalcdata": {
        source: "iana",
        extensions: ["mc1"]
      },
      "application/vnd.mediastation.cdkey": {
        source: "iana",
        extensions: ["cdkey"]
      },
      "application/vnd.meridian-slingshot": {
        source: "iana"
      },
      "application/vnd.mfer": {
        source: "iana",
        extensions: ["mwf"]
      },
      "application/vnd.mfmp": {
        source: "iana",
        extensions: ["mfm"]
      },
      "application/vnd.micro+json": {
        source: "iana",
        compressible: true
      },
      "application/vnd.micrografx.flo": {
        source: "iana",
        extensions: ["flo"]
      },
      "application/vnd.micrografx.igx": {
        source: "iana",
        extensions: ["igx"]
      },
      "application/vnd.microsoft.portable-executable": {
        source: "iana"
      },
      "application/vnd.microsoft.windows.thumbnail-cache": {
        source: "iana"
      },
      "application/vnd.miele+json": {
        source: "iana",
        compressible: true
      },
      "application/vnd.mif": {
        source: "iana",
        extensions: ["mif"]
      },
      "application/vnd.minisoft-hp3000-save": {
        source: "iana"
      },
      "application/vnd.mitsubishi.misty-guard.trustweb": {
        source: "iana"
      },
      "application/vnd.mobius.daf": {
        source: "iana",
        extensions: ["daf"]
      },
      "application/vnd.mobius.dis": {
        source: "iana",
        extensions: ["dis"]
      },
      "application/vnd.mobius.mbk": {
        source: "iana",
        extensions: ["mbk"]
      },
      "application/vnd.mobius.mqy": {
        source: "iana",
        extensions: ["mqy"]
      },
      "application/vnd.mobius.msl": {
        source: "iana",
        extensions: ["msl"]
      },
      "application/vnd.mobius.plc": {
        source: "iana",
        extensions: ["plc"]
      },
      "application/vnd.mobius.txf": {
        source: "iana",
        extensions: ["txf"]
      },
      "application/vnd.mophun.application": {
        source: "iana",
        extensions: ["mpn"]
      },
      "application/vnd.mophun.certificate": {
        source: "iana",
        extensions: ["mpc"]
      },
      "application/vnd.motorola.flexsuite": {
        source: "iana"
      },
      "application/vnd.motorola.flexsuite.adsi": {
        source: "iana"
      },
      "application/vnd.motorola.flexsuite.fis": {
        source: "iana"
      },
      "application/vnd.motorola.flexsuite.gotap": {
        source: "iana"
      },
      "application/vnd.motorola.flexsuite.kmr": {
        source: "iana"
      },
      "application/vnd.motorola.flexsuite.ttc": {
        source: "iana"
      },
      "application/vnd.motorola.flexsuite.wem": {
        source: "iana"
      },
      "application/vnd.motorola.iprm": {
        source: "iana"
      },
      "application/vnd.mozilla.xul+xml": {
        source: "iana",
        compressible: true,
        extensions: ["xul"]
      },
      "application/vnd.ms-3mfdocument": {
        source: "iana"
      },
      "application/vnd.ms-artgalry": {
        source: "iana",
        extensions: ["cil"]
      },
      "application/vnd.ms-asf": {
        source: "iana"
      },
      "application/vnd.ms-cab-compressed": {
        source: "iana",
        extensions: ["cab"]
      },
      "application/vnd.ms-color.iccprofile": {
        source: "apache"
      },
      "application/vnd.ms-excel": {
        source: "iana",
        compressible: false,
        extensions: ["xls", "xlm", "xla", "xlc", "xlt", "xlw"]
      },
      "application/vnd.ms-excel.addin.macroenabled.12": {
        source: "iana",
        extensions: ["xlam"]
      },
      "application/vnd.ms-excel.sheet.binary.macroenabled.12": {
        source: "iana",
        extensions: ["xlsb"]
      },
      "application/vnd.ms-excel.sheet.macroenabled.12": {
        source: "iana",
        extensions: ["xlsm"]
      },
      "application/vnd.ms-excel.template.macroenabled.12": {
        source: "iana",
        extensions: ["xltm"]
      },
      "application/vnd.ms-fontobject": {
        source: "iana",
        compressible: true,
        extensions: ["eot"]
      },
      "application/vnd.ms-htmlhelp": {
        source: "iana",
        extensions: ["chm"]
      },
      "application/vnd.ms-ims": {
        source: "iana",
        extensions: ["ims"]
      },
      "application/vnd.ms-lrm": {
        source: "iana",
        extensions: ["lrm"]
      },
      "application/vnd.ms-office.activex+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.ms-officetheme": {
        source: "iana",
        extensions: ["thmx"]
      },
      "application/vnd.ms-opentype": {
        source: "apache",
        compressible: true
      },
      "application/vnd.ms-outlook": {
        compressible: false,
        extensions: ["msg"]
      },
      "application/vnd.ms-package.obfuscated-opentype": {
        source: "apache"
      },
      "application/vnd.ms-pki.seccat": {
        source: "apache",
        extensions: ["cat"]
      },
      "application/vnd.ms-pki.stl": {
        source: "apache",
        extensions: ["stl"]
      },
      "application/vnd.ms-playready.initiator+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.ms-powerpoint": {
        source: "iana",
        compressible: false,
        extensions: ["ppt", "pps", "pot"]
      },
      "application/vnd.ms-powerpoint.addin.macroenabled.12": {
        source: "iana",
        extensions: ["ppam"]
      },
      "application/vnd.ms-powerpoint.presentation.macroenabled.12": {
        source: "iana",
        extensions: ["pptm"]
      },
      "application/vnd.ms-powerpoint.slide.macroenabled.12": {
        source: "iana",
        extensions: ["sldm"]
      },
      "application/vnd.ms-powerpoint.slideshow.macroenabled.12": {
        source: "iana",
        extensions: ["ppsm"]
      },
      "application/vnd.ms-powerpoint.template.macroenabled.12": {
        source: "iana",
        extensions: ["potm"]
      },
      "application/vnd.ms-printdevicecapabilities+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.ms-printing.printticket+xml": {
        source: "apache",
        compressible: true
      },
      "application/vnd.ms-printschematicket+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.ms-project": {
        source: "iana",
        extensions: ["mpp", "mpt"]
      },
      "application/vnd.ms-tnef": {
        source: "iana"
      },
      "application/vnd.ms-windows.devicepairing": {
        source: "iana"
      },
      "application/vnd.ms-windows.nwprinting.oob": {
        source: "iana"
      },
      "application/vnd.ms-windows.printerpairing": {
        source: "iana"
      },
      "application/vnd.ms-windows.wsd.oob": {
        source: "iana"
      },
      "application/vnd.ms-wmdrm.lic-chlg-req": {
        source: "iana"
      },
      "application/vnd.ms-wmdrm.lic-resp": {
        source: "iana"
      },
      "application/vnd.ms-wmdrm.meter-chlg-req": {
        source: "iana"
      },
      "application/vnd.ms-wmdrm.meter-resp": {
        source: "iana"
      },
      "application/vnd.ms-word.document.macroenabled.12": {
        source: "iana",
        extensions: ["docm"]
      },
      "application/vnd.ms-word.template.macroenabled.12": {
        source: "iana",
        extensions: ["dotm"]
      },
      "application/vnd.ms-works": {
        source: "iana",
        extensions: ["wps", "wks", "wcm", "wdb"]
      },
      "application/vnd.ms-wpl": {
        source: "iana",
        extensions: ["wpl"]
      },
      "application/vnd.ms-xpsdocument": {
        source: "iana",
        compressible: false,
        extensions: ["xps"]
      },
      "application/vnd.msa-disk-image": {
        source: "iana"
      },
      "application/vnd.mseq": {
        source: "iana",
        extensions: ["mseq"]
      },
      "application/vnd.msign": {
        source: "iana"
      },
      "application/vnd.multiad.creator": {
        source: "iana"
      },
      "application/vnd.multiad.creator.cif": {
        source: "iana"
      },
      "application/vnd.music-niff": {
        source: "iana"
      },
      "application/vnd.musician": {
        source: "iana",
        extensions: ["mus"]
      },
      "application/vnd.muvee.style": {
        source: "iana",
        extensions: ["msty"]
      },
      "application/vnd.mynfc": {
        source: "iana",
        extensions: ["taglet"]
      },
      "application/vnd.nacamar.ybrid+json": {
        source: "iana",
        compressible: true
      },
      "application/vnd.ncd.control": {
        source: "iana"
      },
      "application/vnd.ncd.reference": {
        source: "iana"
      },
      "application/vnd.nearst.inv+json": {
        source: "iana",
        compressible: true
      },
      "application/vnd.nebumind.line": {
        source: "iana"
      },
      "application/vnd.nervana": {
        source: "iana"
      },
      "application/vnd.netfpx": {
        source: "iana"
      },
      "application/vnd.neurolanguage.nlu": {
        source: "iana",
        extensions: ["nlu"]
      },
      "application/vnd.nimn": {
        source: "iana"
      },
      "application/vnd.nintendo.nitro.rom": {
        source: "iana"
      },
      "application/vnd.nintendo.snes.rom": {
        source: "iana"
      },
      "application/vnd.nitf": {
        source: "iana",
        extensions: ["ntf", "nitf"]
      },
      "application/vnd.noblenet-directory": {
        source: "iana",
        extensions: ["nnd"]
      },
      "application/vnd.noblenet-sealer": {
        source: "iana",
        extensions: ["nns"]
      },
      "application/vnd.noblenet-web": {
        source: "iana",
        extensions: ["nnw"]
      },
      "application/vnd.nokia.catalogs": {
        source: "iana"
      },
      "application/vnd.nokia.conml+wbxml": {
        source: "iana"
      },
      "application/vnd.nokia.conml+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.nokia.iptv.config+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.nokia.isds-radio-presets": {
        source: "iana"
      },
      "application/vnd.nokia.landmark+wbxml": {
        source: "iana"
      },
      "application/vnd.nokia.landmark+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.nokia.landmarkcollection+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.nokia.n-gage.ac+xml": {
        source: "iana",
        compressible: true,
        extensions: ["ac"]
      },
      "application/vnd.nokia.n-gage.data": {
        source: "iana",
        extensions: ["ngdat"]
      },
      "application/vnd.nokia.n-gage.symbian.install": {
        source: "iana",
        extensions: ["n-gage"]
      },
      "application/vnd.nokia.ncd": {
        source: "iana"
      },
      "application/vnd.nokia.pcd+wbxml": {
        source: "iana"
      },
      "application/vnd.nokia.pcd+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.nokia.radio-preset": {
        source: "iana",
        extensions: ["rpst"]
      },
      "application/vnd.nokia.radio-presets": {
        source: "iana",
        extensions: ["rpss"]
      },
      "application/vnd.novadigm.edm": {
        source: "iana",
        extensions: ["edm"]
      },
      "application/vnd.novadigm.edx": {
        source: "iana",
        extensions: ["edx"]
      },
      "application/vnd.novadigm.ext": {
        source: "iana",
        extensions: ["ext"]
      },
      "application/vnd.ntt-local.content-share": {
        source: "iana"
      },
      "application/vnd.ntt-local.file-transfer": {
        source: "iana"
      },
      "application/vnd.ntt-local.ogw_remote-access": {
        source: "iana"
      },
      "application/vnd.ntt-local.sip-ta_remote": {
        source: "iana"
      },
      "application/vnd.ntt-local.sip-ta_tcp_stream": {
        source: "iana"
      },
      "application/vnd.oasis.opendocument.chart": {
        source: "iana",
        extensions: ["odc"]
      },
      "application/vnd.oasis.opendocument.chart-template": {
        source: "iana",
        extensions: ["otc"]
      },
      "application/vnd.oasis.opendocument.database": {
        source: "iana",
        extensions: ["odb"]
      },
      "application/vnd.oasis.opendocument.formula": {
        source: "iana",
        extensions: ["odf"]
      },
      "application/vnd.oasis.opendocument.formula-template": {
        source: "iana",
        extensions: ["odft"]
      },
      "application/vnd.oasis.opendocument.graphics": {
        source: "iana",
        compressible: false,
        extensions: ["odg"]
      },
      "application/vnd.oasis.opendocument.graphics-template": {
        source: "iana",
        extensions: ["otg"]
      },
      "application/vnd.oasis.opendocument.image": {
        source: "iana",
        extensions: ["odi"]
      },
      "application/vnd.oasis.opendocument.image-template": {
        source: "iana",
        extensions: ["oti"]
      },
      "application/vnd.oasis.opendocument.presentation": {
        source: "iana",
        compressible: false,
        extensions: ["odp"]
      },
      "application/vnd.oasis.opendocument.presentation-template": {
        source: "iana",
        extensions: ["otp"]
      },
      "application/vnd.oasis.opendocument.spreadsheet": {
        source: "iana",
        compressible: false,
        extensions: ["ods"]
      },
      "application/vnd.oasis.opendocument.spreadsheet-template": {
        source: "iana",
        extensions: ["ots"]
      },
      "application/vnd.oasis.opendocument.text": {
        source: "iana",
        compressible: false,
        extensions: ["odt"]
      },
      "application/vnd.oasis.opendocument.text-master": {
        source: "iana",
        extensions: ["odm"]
      },
      "application/vnd.oasis.opendocument.text-template": {
        source: "iana",
        extensions: ["ott"]
      },
      "application/vnd.oasis.opendocument.text-web": {
        source: "iana",
        extensions: ["oth"]
      },
      "application/vnd.obn": {
        source: "iana"
      },
      "application/vnd.ocf+cbor": {
        source: "iana"
      },
      "application/vnd.oci.image.manifest.v1+json": {
        source: "iana",
        compressible: true
      },
      "application/vnd.oftn.l10n+json": {
        source: "iana",
        compressible: true
      },
      "application/vnd.oipf.contentaccessdownload+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.oipf.contentaccessstreaming+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.oipf.cspg-hexbinary": {
        source: "iana"
      },
      "application/vnd.oipf.dae.svg+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.oipf.dae.xhtml+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.oipf.mippvcontrolmessage+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.oipf.pae.gem": {
        source: "iana"
      },
      "application/vnd.oipf.spdiscovery+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.oipf.spdlist+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.oipf.ueprofile+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.oipf.userprofile+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.olpc-sugar": {
        source: "iana",
        extensions: ["xo"]
      },
      "application/vnd.oma-scws-config": {
        source: "iana"
      },
      "application/vnd.oma-scws-http-request": {
        source: "iana"
      },
      "application/vnd.oma-scws-http-response": {
        source: "iana"
      },
      "application/vnd.oma.bcast.associated-procedure-parameter+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.oma.bcast.drm-trigger+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.oma.bcast.imd+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.oma.bcast.ltkm": {
        source: "iana"
      },
      "application/vnd.oma.bcast.notification+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.oma.bcast.provisioningtrigger": {
        source: "iana"
      },
      "application/vnd.oma.bcast.sgboot": {
        source: "iana"
      },
      "application/vnd.oma.bcast.sgdd+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.oma.bcast.sgdu": {
        source: "iana"
      },
      "application/vnd.oma.bcast.simple-symbol-container": {
        source: "iana"
      },
      "application/vnd.oma.bcast.smartcard-trigger+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.oma.bcast.sprov+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.oma.bcast.stkm": {
        source: "iana"
      },
      "application/vnd.oma.cab-address-book+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.oma.cab-feature-handler+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.oma.cab-pcc+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.oma.cab-subs-invite+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.oma.cab-user-prefs+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.oma.dcd": {
        source: "iana"
      },
      "application/vnd.oma.dcdc": {
        source: "iana"
      },
      "application/vnd.oma.dd2+xml": {
        source: "iana",
        compressible: true,
        extensions: ["dd2"]
      },
      "application/vnd.oma.drm.risd+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.oma.group-usage-list+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.oma.lwm2m+cbor": {
        source: "iana"
      },
      "application/vnd.oma.lwm2m+json": {
        source: "iana",
        compressible: true
      },
      "application/vnd.oma.lwm2m+tlv": {
        source: "iana"
      },
      "application/vnd.oma.pal+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.oma.poc.detailed-progress-report+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.oma.poc.final-report+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.oma.poc.groups+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.oma.poc.invocation-descriptor+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.oma.poc.optimized-progress-report+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.oma.push": {
        source: "iana"
      },
      "application/vnd.oma.scidm.messages+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.oma.xcap-directory+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.omads-email+xml": {
        source: "iana",
        charset: "UTF-8",
        compressible: true
      },
      "application/vnd.omads-file+xml": {
        source: "iana",
        charset: "UTF-8",
        compressible: true
      },
      "application/vnd.omads-folder+xml": {
        source: "iana",
        charset: "UTF-8",
        compressible: true
      },
      "application/vnd.omaloc-supl-init": {
        source: "iana"
      },
      "application/vnd.onepager": {
        source: "iana"
      },
      "application/vnd.onepagertamp": {
        source: "iana"
      },
      "application/vnd.onepagertamx": {
        source: "iana"
      },
      "application/vnd.onepagertat": {
        source: "iana"
      },
      "application/vnd.onepagertatp": {
        source: "iana"
      },
      "application/vnd.onepagertatx": {
        source: "iana"
      },
      "application/vnd.openblox.game+xml": {
        source: "iana",
        compressible: true,
        extensions: ["obgx"]
      },
      "application/vnd.openblox.game-binary": {
        source: "iana"
      },
      "application/vnd.openeye.oeb": {
        source: "iana"
      },
      "application/vnd.openofficeorg.extension": {
        source: "apache",
        extensions: ["oxt"]
      },
      "application/vnd.openstreetmap.data+xml": {
        source: "iana",
        compressible: true,
        extensions: ["osm"]
      },
      "application/vnd.opentimestamps.ots": {
        source: "iana"
      },
      "application/vnd.openxmlformats-officedocument.custom-properties+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.openxmlformats-officedocument.customxmlproperties+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.openxmlformats-officedocument.drawing+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.openxmlformats-officedocument.drawingml.chart+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.openxmlformats-officedocument.drawingml.chartshapes+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.openxmlformats-officedocument.drawingml.diagramcolors+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.openxmlformats-officedocument.drawingml.diagramdata+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.openxmlformats-officedocument.drawingml.diagramlayout+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.openxmlformats-officedocument.drawingml.diagramstyle+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.openxmlformats-officedocument.extended-properties+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.openxmlformats-officedocument.presentationml.commentauthors+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.openxmlformats-officedocument.presentationml.comments+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.openxmlformats-officedocument.presentationml.handoutmaster+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.openxmlformats-officedocument.presentationml.notesmaster+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.openxmlformats-officedocument.presentationml.notesslide+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.openxmlformats-officedocument.presentationml.presentation": {
        source: "iana",
        compressible: false,
        extensions: ["pptx"]
      },
      "application/vnd.openxmlformats-officedocument.presentationml.presentation.main+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.openxmlformats-officedocument.presentationml.presprops+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.openxmlformats-officedocument.presentationml.slide": {
        source: "iana",
        extensions: ["sldx"]
      },
      "application/vnd.openxmlformats-officedocument.presentationml.slide+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.openxmlformats-officedocument.presentationml.slidelayout+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.openxmlformats-officedocument.presentationml.slidemaster+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.openxmlformats-officedocument.presentationml.slideshow": {
        source: "iana",
        extensions: ["ppsx"]
      },
      "application/vnd.openxmlformats-officedocument.presentationml.slideshow.main+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.openxmlformats-officedocument.presentationml.slideupdateinfo+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.openxmlformats-officedocument.presentationml.tablestyles+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.openxmlformats-officedocument.presentationml.tags+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.openxmlformats-officedocument.presentationml.template": {
        source: "iana",
        extensions: ["potx"]
      },
      "application/vnd.openxmlformats-officedocument.presentationml.template.main+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.openxmlformats-officedocument.presentationml.viewprops+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.openxmlformats-officedocument.spreadsheetml.calcchain+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.openxmlformats-officedocument.spreadsheetml.chartsheet+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.openxmlformats-officedocument.spreadsheetml.comments+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.openxmlformats-officedocument.spreadsheetml.connections+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.openxmlformats-officedocument.spreadsheetml.dialogsheet+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.openxmlformats-officedocument.spreadsheetml.externallink+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.openxmlformats-officedocument.spreadsheetml.pivotcachedefinition+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.openxmlformats-officedocument.spreadsheetml.pivotcacherecords+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.openxmlformats-officedocument.spreadsheetml.pivottable+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.openxmlformats-officedocument.spreadsheetml.querytable+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.openxmlformats-officedocument.spreadsheetml.revisionheaders+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.openxmlformats-officedocument.spreadsheetml.revisionlog+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sharedstrings+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet": {
        source: "iana",
        compressible: false,
        extensions: ["xlsx"]
      },
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet.main+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheetmetadata+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.openxmlformats-officedocument.spreadsheetml.styles+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.openxmlformats-officedocument.spreadsheetml.table+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.openxmlformats-officedocument.spreadsheetml.tablesinglecells+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.openxmlformats-officedocument.spreadsheetml.template": {
        source: "iana",
        extensions: ["xltx"]
      },
      "application/vnd.openxmlformats-officedocument.spreadsheetml.template.main+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.openxmlformats-officedocument.spreadsheetml.usernames+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.openxmlformats-officedocument.spreadsheetml.volatiledependencies+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.openxmlformats-officedocument.theme+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.openxmlformats-officedocument.themeoverride+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.openxmlformats-officedocument.vmldrawing": {
        source: "iana"
      },
      "application/vnd.openxmlformats-officedocument.wordprocessingml.comments+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document": {
        source: "iana",
        compressible: false,
        extensions: ["docx"]
      },
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document.glossary+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document.main+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.openxmlformats-officedocument.wordprocessingml.endnotes+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.openxmlformats-officedocument.wordprocessingml.fonttable+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.openxmlformats-officedocument.wordprocessingml.footer+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.openxmlformats-officedocument.wordprocessingml.footnotes+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.openxmlformats-officedocument.wordprocessingml.numbering+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.openxmlformats-officedocument.wordprocessingml.settings+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.openxmlformats-officedocument.wordprocessingml.styles+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.openxmlformats-officedocument.wordprocessingml.template": {
        source: "iana",
        extensions: ["dotx"]
      },
      "application/vnd.openxmlformats-officedocument.wordprocessingml.template.main+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.openxmlformats-officedocument.wordprocessingml.websettings+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.openxmlformats-package.core-properties+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.openxmlformats-package.digital-signature-xmlsignature+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.openxmlformats-package.relationships+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.oracle.resource+json": {
        source: "iana",
        compressible: true
      },
      "application/vnd.orange.indata": {
        source: "iana"
      },
      "application/vnd.osa.netdeploy": {
        source: "iana"
      },
      "application/vnd.osgeo.mapguide.package": {
        source: "iana",
        extensions: ["mgp"]
      },
      "application/vnd.osgi.bundle": {
        source: "iana"
      },
      "application/vnd.osgi.dp": {
        source: "iana",
        extensions: ["dp"]
      },
      "application/vnd.osgi.subsystem": {
        source: "iana",
        extensions: ["esa"]
      },
      "application/vnd.otps.ct-kip+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.oxli.countgraph": {
        source: "iana"
      },
      "application/vnd.pagerduty+json": {
        source: "iana",
        compressible: true
      },
      "application/vnd.palm": {
        source: "iana",
        extensions: ["pdb", "pqa", "oprc"]
      },
      "application/vnd.panoply": {
        source: "iana"
      },
      "application/vnd.paos.xml": {
        source: "iana"
      },
      "application/vnd.patentdive": {
        source: "iana"
      },
      "application/vnd.patientecommsdoc": {
        source: "iana"
      },
      "application/vnd.pawaafile": {
        source: "iana",
        extensions: ["paw"]
      },
      "application/vnd.pcos": {
        source: "iana"
      },
      "application/vnd.pg.format": {
        source: "iana",
        extensions: ["str"]
      },
      "application/vnd.pg.osasli": {
        source: "iana",
        extensions: ["ei6"]
      },
      "application/vnd.piaccess.application-licence": {
        source: "iana"
      },
      "application/vnd.picsel": {
        source: "iana",
        extensions: ["efif"]
      },
      "application/vnd.pmi.widget": {
        source: "iana",
        extensions: ["wg"]
      },
      "application/vnd.poc.group-advertisement+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.pocketlearn": {
        source: "iana",
        extensions: ["plf"]
      },
      "application/vnd.powerbuilder6": {
        source: "iana",
        extensions: ["pbd"]
      },
      "application/vnd.powerbuilder6-s": {
        source: "iana"
      },
      "application/vnd.powerbuilder7": {
        source: "iana"
      },
      "application/vnd.powerbuilder7-s": {
        source: "iana"
      },
      "application/vnd.powerbuilder75": {
        source: "iana"
      },
      "application/vnd.powerbuilder75-s": {
        source: "iana"
      },
      "application/vnd.preminet": {
        source: "iana"
      },
      "application/vnd.previewsystems.box": {
        source: "iana",
        extensions: ["box"]
      },
      "application/vnd.proteus.magazine": {
        source: "iana",
        extensions: ["mgz"]
      },
      "application/vnd.psfs": {
        source: "iana"
      },
      "application/vnd.publishare-delta-tree": {
        source: "iana",
        extensions: ["qps"]
      },
      "application/vnd.pvi.ptid1": {
        source: "iana",
        extensions: ["ptid"]
      },
      "application/vnd.pwg-multiplexed": {
        source: "iana"
      },
      "application/vnd.pwg-xhtml-print+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.qualcomm.brew-app-res": {
        source: "iana"
      },
      "application/vnd.quarantainenet": {
        source: "iana"
      },
      "application/vnd.quark.quarkxpress": {
        source: "iana",
        extensions: ["qxd", "qxt", "qwd", "qwt", "qxl", "qxb"]
      },
      "application/vnd.quobject-quoxdocument": {
        source: "iana"
      },
      "application/vnd.radisys.moml+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.radisys.msml+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.radisys.msml-audit+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.radisys.msml-audit-conf+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.radisys.msml-audit-conn+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.radisys.msml-audit-dialog+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.radisys.msml-audit-stream+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.radisys.msml-conf+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.radisys.msml-dialog+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.radisys.msml-dialog-base+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.radisys.msml-dialog-fax-detect+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.radisys.msml-dialog-fax-sendrecv+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.radisys.msml-dialog-group+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.radisys.msml-dialog-speech+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.radisys.msml-dialog-transform+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.rainstor.data": {
        source: "iana"
      },
      "application/vnd.rapid": {
        source: "iana"
      },
      "application/vnd.rar": {
        source: "iana",
        extensions: ["rar"]
      },
      "application/vnd.realvnc.bed": {
        source: "iana",
        extensions: ["bed"]
      },
      "application/vnd.recordare.musicxml": {
        source: "iana",
        extensions: ["mxl"]
      },
      "application/vnd.recordare.musicxml+xml": {
        source: "iana",
        compressible: true,
        extensions: ["musicxml"]
      },
      "application/vnd.renlearn.rlprint": {
        source: "iana"
      },
      "application/vnd.resilient.logic": {
        source: "iana"
      },
      "application/vnd.restful+json": {
        source: "iana",
        compressible: true
      },
      "application/vnd.rig.cryptonote": {
        source: "iana",
        extensions: ["cryptonote"]
      },
      "application/vnd.rim.cod": {
        source: "apache",
        extensions: ["cod"]
      },
      "application/vnd.rn-realmedia": {
        source: "apache",
        extensions: ["rm"]
      },
      "application/vnd.rn-realmedia-vbr": {
        source: "apache",
        extensions: ["rmvb"]
      },
      "application/vnd.route66.link66+xml": {
        source: "iana",
        compressible: true,
        extensions: ["link66"]
      },
      "application/vnd.rs-274x": {
        source: "iana"
      },
      "application/vnd.ruckus.download": {
        source: "iana"
      },
      "application/vnd.s3sms": {
        source: "iana"
      },
      "application/vnd.sailingtracker.track": {
        source: "iana",
        extensions: ["st"]
      },
      "application/vnd.sar": {
        source: "iana"
      },
      "application/vnd.sbm.cid": {
        source: "iana"
      },
      "application/vnd.sbm.mid2": {
        source: "iana"
      },
      "application/vnd.scribus": {
        source: "iana"
      },
      "application/vnd.sealed.3df": {
        source: "iana"
      },
      "application/vnd.sealed.csf": {
        source: "iana"
      },
      "application/vnd.sealed.doc": {
        source: "iana"
      },
      "application/vnd.sealed.eml": {
        source: "iana"
      },
      "application/vnd.sealed.mht": {
        source: "iana"
      },
      "application/vnd.sealed.net": {
        source: "iana"
      },
      "application/vnd.sealed.ppt": {
        source: "iana"
      },
      "application/vnd.sealed.tiff": {
        source: "iana"
      },
      "application/vnd.sealed.xls": {
        source: "iana"
      },
      "application/vnd.sealedmedia.softseal.html": {
        source: "iana"
      },
      "application/vnd.sealedmedia.softseal.pdf": {
        source: "iana"
      },
      "application/vnd.seemail": {
        source: "iana",
        extensions: ["see"]
      },
      "application/vnd.seis+json": {
        source: "iana",
        compressible: true
      },
      "application/vnd.sema": {
        source: "iana",
        extensions: ["sema"]
      },
      "application/vnd.semd": {
        source: "iana",
        extensions: ["semd"]
      },
      "application/vnd.semf": {
        source: "iana",
        extensions: ["semf"]
      },
      "application/vnd.shade-save-file": {
        source: "iana"
      },
      "application/vnd.shana.informed.formdata": {
        source: "iana",
        extensions: ["ifm"]
      },
      "application/vnd.shana.informed.formtemplate": {
        source: "iana",
        extensions: ["itp"]
      },
      "application/vnd.shana.informed.interchange": {
        source: "iana",
        extensions: ["iif"]
      },
      "application/vnd.shana.informed.package": {
        source: "iana",
        extensions: ["ipk"]
      },
      "application/vnd.shootproof+json": {
        source: "iana",
        compressible: true
      },
      "application/vnd.shopkick+json": {
        source: "iana",
        compressible: true
      },
      "application/vnd.shp": {
        source: "iana"
      },
      "application/vnd.shx": {
        source: "iana"
      },
      "application/vnd.sigrok.session": {
        source: "iana"
      },
      "application/vnd.simtech-mindmapper": {
        source: "iana",
        extensions: ["twd", "twds"]
      },
      "application/vnd.siren+json": {
        source: "iana",
        compressible: true
      },
      "application/vnd.smaf": {
        source: "iana",
        extensions: ["mmf"]
      },
      "application/vnd.smart.notebook": {
        source: "iana"
      },
      "application/vnd.smart.teacher": {
        source: "iana",
        extensions: ["teacher"]
      },
      "application/vnd.snesdev-page-table": {
        source: "iana"
      },
      "application/vnd.software602.filler.form+xml": {
        source: "iana",
        compressible: true,
        extensions: ["fo"]
      },
      "application/vnd.software602.filler.form-xml-zip": {
        source: "iana"
      },
      "application/vnd.solent.sdkm+xml": {
        source: "iana",
        compressible: true,
        extensions: ["sdkm", "sdkd"]
      },
      "application/vnd.spotfire.dxp": {
        source: "iana",
        extensions: ["dxp"]
      },
      "application/vnd.spotfire.sfs": {
        source: "iana",
        extensions: ["sfs"]
      },
      "application/vnd.sqlite3": {
        source: "iana"
      },
      "application/vnd.sss-cod": {
        source: "iana"
      },
      "application/vnd.sss-dtf": {
        source: "iana"
      },
      "application/vnd.sss-ntf": {
        source: "iana"
      },
      "application/vnd.stardivision.calc": {
        source: "apache",
        extensions: ["sdc"]
      },
      "application/vnd.stardivision.draw": {
        source: "apache",
        extensions: ["sda"]
      },
      "application/vnd.stardivision.impress": {
        source: "apache",
        extensions: ["sdd"]
      },
      "application/vnd.stardivision.math": {
        source: "apache",
        extensions: ["smf"]
      },
      "application/vnd.stardivision.writer": {
        source: "apache",
        extensions: ["sdw", "vor"]
      },
      "application/vnd.stardivision.writer-global": {
        source: "apache",
        extensions: ["sgl"]
      },
      "application/vnd.stepmania.package": {
        source: "iana",
        extensions: ["smzip"]
      },
      "application/vnd.stepmania.stepchart": {
        source: "iana",
        extensions: ["sm"]
      },
      "application/vnd.street-stream": {
        source: "iana"
      },
      "application/vnd.sun.wadl+xml": {
        source: "iana",
        compressible: true,
        extensions: ["wadl"]
      },
      "application/vnd.sun.xml.calc": {
        source: "apache",
        extensions: ["sxc"]
      },
      "application/vnd.sun.xml.calc.template": {
        source: "apache",
        extensions: ["stc"]
      },
      "application/vnd.sun.xml.draw": {
        source: "apache",
        extensions: ["sxd"]
      },
      "application/vnd.sun.xml.draw.template": {
        source: "apache",
        extensions: ["std"]
      },
      "application/vnd.sun.xml.impress": {
        source: "apache",
        extensions: ["sxi"]
      },
      "application/vnd.sun.xml.impress.template": {
        source: "apache",
        extensions: ["sti"]
      },
      "application/vnd.sun.xml.math": {
        source: "apache",
        extensions: ["sxm"]
      },
      "application/vnd.sun.xml.writer": {
        source: "apache",
        extensions: ["sxw"]
      },
      "application/vnd.sun.xml.writer.global": {
        source: "apache",
        extensions: ["sxg"]
      },
      "application/vnd.sun.xml.writer.template": {
        source: "apache",
        extensions: ["stw"]
      },
      "application/vnd.sus-calendar": {
        source: "iana",
        extensions: ["sus", "susp"]
      },
      "application/vnd.svd": {
        source: "iana",
        extensions: ["svd"]
      },
      "application/vnd.swiftview-ics": {
        source: "iana"
      },
      "application/vnd.sycle+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.syft+json": {
        source: "iana",
        compressible: true
      },
      "application/vnd.symbian.install": {
        source: "apache",
        extensions: ["sis", "sisx"]
      },
      "application/vnd.syncml+xml": {
        source: "iana",
        charset: "UTF-8",
        compressible: true,
        extensions: ["xsm"]
      },
      "application/vnd.syncml.dm+wbxml": {
        source: "iana",
        charset: "UTF-8",
        extensions: ["bdm"]
      },
      "application/vnd.syncml.dm+xml": {
        source: "iana",
        charset: "UTF-8",
        compressible: true,
        extensions: ["xdm"]
      },
      "application/vnd.syncml.dm.notification": {
        source: "iana"
      },
      "application/vnd.syncml.dmddf+wbxml": {
        source: "iana"
      },
      "application/vnd.syncml.dmddf+xml": {
        source: "iana",
        charset: "UTF-8",
        compressible: true,
        extensions: ["ddf"]
      },
      "application/vnd.syncml.dmtnds+wbxml": {
        source: "iana"
      },
      "application/vnd.syncml.dmtnds+xml": {
        source: "iana",
        charset: "UTF-8",
        compressible: true
      },
      "application/vnd.syncml.ds.notification": {
        source: "iana"
      },
      "application/vnd.tableschema+json": {
        source: "iana",
        compressible: true
      },
      "application/vnd.tao.intent-module-archive": {
        source: "iana",
        extensions: ["tao"]
      },
      "application/vnd.tcpdump.pcap": {
        source: "iana",
        extensions: ["pcap", "cap", "dmp"]
      },
      "application/vnd.think-cell.ppttc+json": {
        source: "iana",
        compressible: true
      },
      "application/vnd.tmd.mediaflex.api+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.tml": {
        source: "iana"
      },
      "application/vnd.tmobile-livetv": {
        source: "iana",
        extensions: ["tmo"]
      },
      "application/vnd.tri.onesource": {
        source: "iana"
      },
      "application/vnd.trid.tpt": {
        source: "iana",
        extensions: ["tpt"]
      },
      "application/vnd.triscape.mxs": {
        source: "iana",
        extensions: ["mxs"]
      },
      "application/vnd.trueapp": {
        source: "iana",
        extensions: ["tra"]
      },
      "application/vnd.truedoc": {
        source: "iana"
      },
      "application/vnd.ubisoft.webplayer": {
        source: "iana"
      },
      "application/vnd.ufdl": {
        source: "iana",
        extensions: ["ufd", "ufdl"]
      },
      "application/vnd.uiq.theme": {
        source: "iana",
        extensions: ["utz"]
      },
      "application/vnd.umajin": {
        source: "iana",
        extensions: ["umj"]
      },
      "application/vnd.unity": {
        source: "iana",
        extensions: ["unityweb"]
      },
      "application/vnd.uoml+xml": {
        source: "iana",
        compressible: true,
        extensions: ["uoml"]
      },
      "application/vnd.uplanet.alert": {
        source: "iana"
      },
      "application/vnd.uplanet.alert-wbxml": {
        source: "iana"
      },
      "application/vnd.uplanet.bearer-choice": {
        source: "iana"
      },
      "application/vnd.uplanet.bearer-choice-wbxml": {
        source: "iana"
      },
      "application/vnd.uplanet.cacheop": {
        source: "iana"
      },
      "application/vnd.uplanet.cacheop-wbxml": {
        source: "iana"
      },
      "application/vnd.uplanet.channel": {
        source: "iana"
      },
      "application/vnd.uplanet.channel-wbxml": {
        source: "iana"
      },
      "application/vnd.uplanet.list": {
        source: "iana"
      },
      "application/vnd.uplanet.list-wbxml": {
        source: "iana"
      },
      "application/vnd.uplanet.listcmd": {
        source: "iana"
      },
      "application/vnd.uplanet.listcmd-wbxml": {
        source: "iana"
      },
      "application/vnd.uplanet.signal": {
        source: "iana"
      },
      "application/vnd.uri-map": {
        source: "iana"
      },
      "application/vnd.valve.source.material": {
        source: "iana"
      },
      "application/vnd.vcx": {
        source: "iana",
        extensions: ["vcx"]
      },
      "application/vnd.vd-study": {
        source: "iana"
      },
      "application/vnd.vectorworks": {
        source: "iana"
      },
      "application/vnd.vel+json": {
        source: "iana",
        compressible: true
      },
      "application/vnd.verimatrix.vcas": {
        source: "iana"
      },
      "application/vnd.veritone.aion+json": {
        source: "iana",
        compressible: true
      },
      "application/vnd.veryant.thin": {
        source: "iana"
      },
      "application/vnd.ves.encrypted": {
        source: "iana"
      },
      "application/vnd.vidsoft.vidconference": {
        source: "iana"
      },
      "application/vnd.visio": {
        source: "iana",
        extensions: ["vsd", "vst", "vss", "vsw"]
      },
      "application/vnd.visionary": {
        source: "iana",
        extensions: ["vis"]
      },
      "application/vnd.vividence.scriptfile": {
        source: "iana"
      },
      "application/vnd.vsf": {
        source: "iana",
        extensions: ["vsf"]
      },
      "application/vnd.wap.sic": {
        source: "iana"
      },
      "application/vnd.wap.slc": {
        source: "iana"
      },
      "application/vnd.wap.wbxml": {
        source: "iana",
        charset: "UTF-8",
        extensions: ["wbxml"]
      },
      "application/vnd.wap.wmlc": {
        source: "iana",
        extensions: ["wmlc"]
      },
      "application/vnd.wap.wmlscriptc": {
        source: "iana",
        extensions: ["wmlsc"]
      },
      "application/vnd.webturbo": {
        source: "iana",
        extensions: ["wtb"]
      },
      "application/vnd.wfa.dpp": {
        source: "iana"
      },
      "application/vnd.wfa.p2p": {
        source: "iana"
      },
      "application/vnd.wfa.wsc": {
        source: "iana"
      },
      "application/vnd.windows.devicepairing": {
        source: "iana"
      },
      "application/vnd.wmc": {
        source: "iana"
      },
      "application/vnd.wmf.bootstrap": {
        source: "iana"
      },
      "application/vnd.wolfram.mathematica": {
        source: "iana"
      },
      "application/vnd.wolfram.mathematica.package": {
        source: "iana"
      },
      "application/vnd.wolfram.player": {
        source: "iana",
        extensions: ["nbp"]
      },
      "application/vnd.wordperfect": {
        source: "iana",
        extensions: ["wpd"]
      },
      "application/vnd.wqd": {
        source: "iana",
        extensions: ["wqd"]
      },
      "application/vnd.wrq-hp3000-labelled": {
        source: "iana"
      },
      "application/vnd.wt.stf": {
        source: "iana",
        extensions: ["stf"]
      },
      "application/vnd.wv.csp+wbxml": {
        source: "iana"
      },
      "application/vnd.wv.csp+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.wv.ssp+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.xacml+json": {
        source: "iana",
        compressible: true
      },
      "application/vnd.xara": {
        source: "iana",
        extensions: ["xar"]
      },
      "application/vnd.xfdl": {
        source: "iana",
        extensions: ["xfdl"]
      },
      "application/vnd.xfdl.webform": {
        source: "iana"
      },
      "application/vnd.xmi+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.xmpie.cpkg": {
        source: "iana"
      },
      "application/vnd.xmpie.dpkg": {
        source: "iana"
      },
      "application/vnd.xmpie.plan": {
        source: "iana"
      },
      "application/vnd.xmpie.ppkg": {
        source: "iana"
      },
      "application/vnd.xmpie.xlim": {
        source: "iana"
      },
      "application/vnd.yamaha.hv-dic": {
        source: "iana",
        extensions: ["hvd"]
      },
      "application/vnd.yamaha.hv-script": {
        source: "iana",
        extensions: ["hvs"]
      },
      "application/vnd.yamaha.hv-voice": {
        source: "iana",
        extensions: ["hvp"]
      },
      "application/vnd.yamaha.openscoreformat": {
        source: "iana",
        extensions: ["osf"]
      },
      "application/vnd.yamaha.openscoreformat.osfpvg+xml": {
        source: "iana",
        compressible: true,
        extensions: ["osfpvg"]
      },
      "application/vnd.yamaha.remote-setup": {
        source: "iana"
      },
      "application/vnd.yamaha.smaf-audio": {
        source: "iana",
        extensions: ["saf"]
      },
      "application/vnd.yamaha.smaf-phrase": {
        source: "iana",
        extensions: ["spf"]
      },
      "application/vnd.yamaha.through-ngn": {
        source: "iana"
      },
      "application/vnd.yamaha.tunnel-udpencap": {
        source: "iana"
      },
      "application/vnd.yaoweme": {
        source: "iana"
      },
      "application/vnd.yellowriver-custom-menu": {
        source: "iana",
        extensions: ["cmp"]
      },
      "application/vnd.youtube.yt": {
        source: "iana"
      },
      "application/vnd.zul": {
        source: "iana",
        extensions: ["zir", "zirz"]
      },
      "application/vnd.zzazz.deck+xml": {
        source: "iana",
        compressible: true,
        extensions: ["zaz"]
      },
      "application/voicexml+xml": {
        source: "iana",
        compressible: true,
        extensions: ["vxml"]
      },
      "application/voucher-cms+json": {
        source: "iana",
        compressible: true
      },
      "application/vq-rtcpxr": {
        source: "iana"
      },
      "application/wasm": {
        source: "iana",
        compressible: true,
        extensions: ["wasm"]
      },
      "application/watcherinfo+xml": {
        source: "iana",
        compressible: true,
        extensions: ["wif"]
      },
      "application/webpush-options+json": {
        source: "iana",
        compressible: true
      },
      "application/whoispp-query": {
        source: "iana"
      },
      "application/whoispp-response": {
        source: "iana"
      },
      "application/widget": {
        source: "iana",
        extensions: ["wgt"]
      },
      "application/winhlp": {
        source: "apache",
        extensions: ["hlp"]
      },
      "application/wita": {
        source: "iana"
      },
      "application/wordperfect5.1": {
        source: "iana"
      },
      "application/wsdl+xml": {
        source: "iana",
        compressible: true,
        extensions: ["wsdl"]
      },
      "application/wspolicy+xml": {
        source: "iana",
        compressible: true,
        extensions: ["wspolicy"]
      },
      "application/x-7z-compressed": {
        source: "apache",
        compressible: false,
        extensions: ["7z"]
      },
      "application/x-abiword": {
        source: "apache",
        extensions: ["abw"]
      },
      "application/x-ace-compressed": {
        source: "apache",
        extensions: ["ace"]
      },
      "application/x-amf": {
        source: "apache"
      },
      "application/x-apple-diskimage": {
        source: "apache",
        extensions: ["dmg"]
      },
      "application/x-arj": {
        compressible: false,
        extensions: ["arj"]
      },
      "application/x-authorware-bin": {
        source: "apache",
        extensions: ["aab", "x32", "u32", "vox"]
      },
      "application/x-authorware-map": {
        source: "apache",
        extensions: ["aam"]
      },
      "application/x-authorware-seg": {
        source: "apache",
        extensions: ["aas"]
      },
      "application/x-bcpio": {
        source: "apache",
        extensions: ["bcpio"]
      },
      "application/x-bdoc": {
        compressible: false,
        extensions: ["bdoc"]
      },
      "application/x-bittorrent": {
        source: "apache",
        extensions: ["torrent"]
      },
      "application/x-blorb": {
        source: "apache",
        extensions: ["blb", "blorb"]
      },
      "application/x-bzip": {
        source: "apache",
        compressible: false,
        extensions: ["bz"]
      },
      "application/x-bzip2": {
        source: "apache",
        compressible: false,
        extensions: ["bz2", "boz"]
      },
      "application/x-cbr": {
        source: "apache",
        extensions: ["cbr", "cba", "cbt", "cbz", "cb7"]
      },
      "application/x-cdlink": {
        source: "apache",
        extensions: ["vcd"]
      },
      "application/x-cfs-compressed": {
        source: "apache",
        extensions: ["cfs"]
      },
      "application/x-chat": {
        source: "apache",
        extensions: ["chat"]
      },
      "application/x-chess-pgn": {
        source: "apache",
        extensions: ["pgn"]
      },
      "application/x-chrome-extension": {
        extensions: ["crx"]
      },
      "application/x-cocoa": {
        source: "nginx",
        extensions: ["cco"]
      },
      "application/x-compress": {
        source: "apache"
      },
      "application/x-conference": {
        source: "apache",
        extensions: ["nsc"]
      },
      "application/x-cpio": {
        source: "apache",
        extensions: ["cpio"]
      },
      "application/x-csh": {
        source: "apache",
        extensions: ["csh"]
      },
      "application/x-deb": {
        compressible: false
      },
      "application/x-debian-package": {
        source: "apache",
        extensions: ["deb", "udeb"]
      },
      "application/x-dgc-compressed": {
        source: "apache",
        extensions: ["dgc"]
      },
      "application/x-director": {
        source: "apache",
        extensions: ["dir", "dcr", "dxr", "cst", "cct", "cxt", "w3d", "fgd", "swa"]
      },
      "application/x-doom": {
        source: "apache",
        extensions: ["wad"]
      },
      "application/x-dtbncx+xml": {
        source: "apache",
        compressible: true,
        extensions: ["ncx"]
      },
      "application/x-dtbook+xml": {
        source: "apache",
        compressible: true,
        extensions: ["dtb"]
      },
      "application/x-dtbresource+xml": {
        source: "apache",
        compressible: true,
        extensions: ["res"]
      },
      "application/x-dvi": {
        source: "apache",
        compressible: false,
        extensions: ["dvi"]
      },
      "application/x-envoy": {
        source: "apache",
        extensions: ["evy"]
      },
      "application/x-eva": {
        source: "apache",
        extensions: ["eva"]
      },
      "application/x-font-bdf": {
        source: "apache",
        extensions: ["bdf"]
      },
      "application/x-font-dos": {
        source: "apache"
      },
      "application/x-font-framemaker": {
        source: "apache"
      },
      "application/x-font-ghostscript": {
        source: "apache",
        extensions: ["gsf"]
      },
      "application/x-font-libgrx": {
        source: "apache"
      },
      "application/x-font-linux-psf": {
        source: "apache",
        extensions: ["psf"]
      },
      "application/x-font-pcf": {
        source: "apache",
        extensions: ["pcf"]
      },
      "application/x-font-snf": {
        source: "apache",
        extensions: ["snf"]
      },
      "application/x-font-speedo": {
        source: "apache"
      },
      "application/x-font-sunos-news": {
        source: "apache"
      },
      "application/x-font-type1": {
        source: "apache",
        extensions: ["pfa", "pfb", "pfm", "afm"]
      },
      "application/x-font-vfont": {
        source: "apache"
      },
      "application/x-freearc": {
        source: "apache",
        extensions: ["arc"]
      },
      "application/x-futuresplash": {
        source: "apache",
        extensions: ["spl"]
      },
      "application/x-gca-compressed": {
        source: "apache",
        extensions: ["gca"]
      },
      "application/x-glulx": {
        source: "apache",
        extensions: ["ulx"]
      },
      "application/x-gnumeric": {
        source: "apache",
        extensions: ["gnumeric"]
      },
      "application/x-gramps-xml": {
        source: "apache",
        extensions: ["gramps"]
      },
      "application/x-gtar": {
        source: "apache",
        extensions: ["gtar"]
      },
      "application/x-gzip": {
        source: "apache"
      },
      "application/x-hdf": {
        source: "apache",
        extensions: ["hdf"]
      },
      "application/x-httpd-php": {
        compressible: true,
        extensions: ["php"]
      },
      "application/x-install-instructions": {
        source: "apache",
        extensions: ["install"]
      },
      "application/x-iso9660-image": {
        source: "apache",
        extensions: ["iso"]
      },
      "application/x-iwork-keynote-sffkey": {
        extensions: ["key"]
      },
      "application/x-iwork-numbers-sffnumbers": {
        extensions: ["numbers"]
      },
      "application/x-iwork-pages-sffpages": {
        extensions: ["pages"]
      },
      "application/x-java-archive-diff": {
        source: "nginx",
        extensions: ["jardiff"]
      },
      "application/x-java-jnlp-file": {
        source: "apache",
        compressible: false,
        extensions: ["jnlp"]
      },
      "application/x-javascript": {
        compressible: true
      },
      "application/x-keepass2": {
        extensions: ["kdbx"]
      },
      "application/x-latex": {
        source: "apache",
        compressible: false,
        extensions: ["latex"]
      },
      "application/x-lua-bytecode": {
        extensions: ["luac"]
      },
      "application/x-lzh-compressed": {
        source: "apache",
        extensions: ["lzh", "lha"]
      },
      "application/x-makeself": {
        source: "nginx",
        extensions: ["run"]
      },
      "application/x-mie": {
        source: "apache",
        extensions: ["mie"]
      },
      "application/x-mobipocket-ebook": {
        source: "apache",
        extensions: ["prc", "mobi"]
      },
      "application/x-mpegurl": {
        compressible: false
      },
      "application/x-ms-application": {
        source: "apache",
        extensions: ["application"]
      },
      "application/x-ms-shortcut": {
        source: "apache",
        extensions: ["lnk"]
      },
      "application/x-ms-wmd": {
        source: "apache",
        extensions: ["wmd"]
      },
      "application/x-ms-wmz": {
        source: "apache",
        extensions: ["wmz"]
      },
      "application/x-ms-xbap": {
        source: "apache",
        extensions: ["xbap"]
      },
      "application/x-msaccess": {
        source: "apache",
        extensions: ["mdb"]
      },
      "application/x-msbinder": {
        source: "apache",
        extensions: ["obd"]
      },
      "application/x-mscardfile": {
        source: "apache",
        extensions: ["crd"]
      },
      "application/x-msclip": {
        source: "apache",
        extensions: ["clp"]
      },
      "application/x-msdos-program": {
        extensions: ["exe"]
      },
      "application/x-msdownload": {
        source: "apache",
        extensions: ["exe", "dll", "com", "bat", "msi"]
      },
      "application/x-msmediaview": {
        source: "apache",
        extensions: ["mvb", "m13", "m14"]
      },
      "application/x-msmetafile": {
        source: "apache",
        extensions: ["wmf", "wmz", "emf", "emz"]
      },
      "application/x-msmoney": {
        source: "apache",
        extensions: ["mny"]
      },
      "application/x-mspublisher": {
        source: "apache",
        extensions: ["pub"]
      },
      "application/x-msschedule": {
        source: "apache",
        extensions: ["scd"]
      },
      "application/x-msterminal": {
        source: "apache",
        extensions: ["trm"]
      },
      "application/x-mswrite": {
        source: "apache",
        extensions: ["wri"]
      },
      "application/x-netcdf": {
        source: "apache",
        extensions: ["nc", "cdf"]
      },
      "application/x-ns-proxy-autoconfig": {
        compressible: true,
        extensions: ["pac"]
      },
      "application/x-nzb": {
        source: "apache",
        extensions: ["nzb"]
      },
      "application/x-perl": {
        source: "nginx",
        extensions: ["pl", "pm"]
      },
      "application/x-pilot": {
        source: "nginx",
        extensions: ["prc", "pdb"]
      },
      "application/x-pkcs12": {
        source: "apache",
        compressible: false,
        extensions: ["p12", "pfx"]
      },
      "application/x-pkcs7-certificates": {
        source: "apache",
        extensions: ["p7b", "spc"]
      },
      "application/x-pkcs7-certreqresp": {
        source: "apache",
        extensions: ["p7r"]
      },
      "application/x-pki-message": {
        source: "iana"
      },
      "application/x-rar-compressed": {
        source: "apache",
        compressible: false,
        extensions: ["rar"]
      },
      "application/x-redhat-package-manager": {
        source: "nginx",
        extensions: ["rpm"]
      },
      "application/x-research-info-systems": {
        source: "apache",
        extensions: ["ris"]
      },
      "application/x-sea": {
        source: "nginx",
        extensions: ["sea"]
      },
      "application/x-sh": {
        source: "apache",
        compressible: true,
        extensions: ["sh"]
      },
      "application/x-shar": {
        source: "apache",
        extensions: ["shar"]
      },
      "application/x-shockwave-flash": {
        source: "apache",
        compressible: false,
        extensions: ["swf"]
      },
      "application/x-silverlight-app": {
        source: "apache",
        extensions: ["xap"]
      },
      "application/x-sql": {
        source: "apache",
        extensions: ["sql"]
      },
      "application/x-stuffit": {
        source: "apache",
        compressible: false,
        extensions: ["sit"]
      },
      "application/x-stuffitx": {
        source: "apache",
        extensions: ["sitx"]
      },
      "application/x-subrip": {
        source: "apache",
        extensions: ["srt"]
      },
      "application/x-sv4cpio": {
        source: "apache",
        extensions: ["sv4cpio"]
      },
      "application/x-sv4crc": {
        source: "apache",
        extensions: ["sv4crc"]
      },
      "application/x-t3vm-image": {
        source: "apache",
        extensions: ["t3"]
      },
      "application/x-tads": {
        source: "apache",
        extensions: ["gam"]
      },
      "application/x-tar": {
        source: "apache",
        compressible: true,
        extensions: ["tar"]
      },
      "application/x-tcl": {
        source: "apache",
        extensions: ["tcl", "tk"]
      },
      "application/x-tex": {
        source: "apache",
        extensions: ["tex"]
      },
      "application/x-tex-tfm": {
        source: "apache",
        extensions: ["tfm"]
      },
      "application/x-texinfo": {
        source: "apache",
        extensions: ["texinfo", "texi"]
      },
      "application/x-tgif": {
        source: "apache",
        extensions: ["obj"]
      },
      "application/x-ustar": {
        source: "apache",
        extensions: ["ustar"]
      },
      "application/x-virtualbox-hdd": {
        compressible: true,
        extensions: ["hdd"]
      },
      "application/x-virtualbox-ova": {
        compressible: true,
        extensions: ["ova"]
      },
      "application/x-virtualbox-ovf": {
        compressible: true,
        extensions: ["ovf"]
      },
      "application/x-virtualbox-vbox": {
        compressible: true,
        extensions: ["vbox"]
      },
      "application/x-virtualbox-vbox-extpack": {
        compressible: false,
        extensions: ["vbox-extpack"]
      },
      "application/x-virtualbox-vdi": {
        compressible: true,
        extensions: ["vdi"]
      },
      "application/x-virtualbox-vhd": {
        compressible: true,
        extensions: ["vhd"]
      },
      "application/x-virtualbox-vmdk": {
        compressible: true,
        extensions: ["vmdk"]
      },
      "application/x-wais-source": {
        source: "apache",
        extensions: ["src"]
      },
      "application/x-web-app-manifest+json": {
        compressible: true,
        extensions: ["webapp"]
      },
      "application/x-www-form-urlencoded": {
        source: "iana",
        compressible: true
      },
      "application/x-x509-ca-cert": {
        source: "iana",
        extensions: ["der", "crt", "pem"]
      },
      "application/x-x509-ca-ra-cert": {
        source: "iana"
      },
      "application/x-x509-next-ca-cert": {
        source: "iana"
      },
      "application/x-xfig": {
        source: "apache",
        extensions: ["fig"]
      },
      "application/x-xliff+xml": {
        source: "apache",
        compressible: true,
        extensions: ["xlf"]
      },
      "application/x-xpinstall": {
        source: "apache",
        compressible: false,
        extensions: ["xpi"]
      },
      "application/x-xz": {
        source: "apache",
        extensions: ["xz"]
      },
      "application/x-zmachine": {
        source: "apache",
        extensions: ["z1", "z2", "z3", "z4", "z5", "z6", "z7", "z8"]
      },
      "application/x400-bp": {
        source: "iana"
      },
      "application/xacml+xml": {
        source: "iana",
        compressible: true
      },
      "application/xaml+xml": {
        source: "apache",
        compressible: true,
        extensions: ["xaml"]
      },
      "application/xcap-att+xml": {
        source: "iana",
        compressible: true,
        extensions: ["xav"]
      },
      "application/xcap-caps+xml": {
        source: "iana",
        compressible: true,
        extensions: ["xca"]
      },
      "application/xcap-diff+xml": {
        source: "iana",
        compressible: true,
        extensions: ["xdf"]
      },
      "application/xcap-el+xml": {
        source: "iana",
        compressible: true,
        extensions: ["xel"]
      },
      "application/xcap-error+xml": {
        source: "iana",
        compressible: true
      },
      "application/xcap-ns+xml": {
        source: "iana",
        compressible: true,
        extensions: ["xns"]
      },
      "application/xcon-conference-info+xml": {
        source: "iana",
        compressible: true
      },
      "application/xcon-conference-info-diff+xml": {
        source: "iana",
        compressible: true
      },
      "application/xenc+xml": {
        source: "iana",
        compressible: true,
        extensions: ["xenc"]
      },
      "application/xhtml+xml": {
        source: "iana",
        compressible: true,
        extensions: ["xhtml", "xht"]
      },
      "application/xhtml-voice+xml": {
        source: "apache",
        compressible: true
      },
      "application/xliff+xml": {
        source: "iana",
        compressible: true,
        extensions: ["xlf"]
      },
      "application/xml": {
        source: "iana",
        compressible: true,
        extensions: ["xml", "xsl", "xsd", "rng"]
      },
      "application/xml-dtd": {
        source: "iana",
        compressible: true,
        extensions: ["dtd"]
      },
      "application/xml-external-parsed-entity": {
        source: "iana"
      },
      "application/xml-patch+xml": {
        source: "iana",
        compressible: true
      },
      "application/xmpp+xml": {
        source: "iana",
        compressible: true
      },
      "application/xop+xml": {
        source: "iana",
        compressible: true,
        extensions: ["xop"]
      },
      "application/xproc+xml": {
        source: "apache",
        compressible: true,
        extensions: ["xpl"]
      },
      "application/xslt+xml": {
        source: "iana",
        compressible: true,
        extensions: ["xsl", "xslt"]
      },
      "application/xspf+xml": {
        source: "apache",
        compressible: true,
        extensions: ["xspf"]
      },
      "application/xv+xml": {
        source: "iana",
        compressible: true,
        extensions: ["mxml", "xhvml", "xvml", "xvm"]
      },
      "application/yang": {
        source: "iana",
        extensions: ["yang"]
      },
      "application/yang-data+json": {
        source: "iana",
        compressible: true
      },
      "application/yang-data+xml": {
        source: "iana",
        compressible: true
      },
      "application/yang-patch+json": {
        source: "iana",
        compressible: true
      },
      "application/yang-patch+xml": {
        source: "iana",
        compressible: true
      },
      "application/yin+xml": {
        source: "iana",
        compressible: true,
        extensions: ["yin"]
      },
      "application/zip": {
        source: "iana",
        compressible: false,
        extensions: ["zip"]
      },
      "application/zlib": {
        source: "iana"
      },
      "application/zstd": {
        source: "iana"
      },
      "audio/1d-interleaved-parityfec": {
        source: "iana"
      },
      "audio/32kadpcm": {
        source: "iana"
      },
      "audio/3gpp": {
        source: "iana",
        compressible: false,
        extensions: ["3gpp"]
      },
      "audio/3gpp2": {
        source: "iana"
      },
      "audio/aac": {
        source: "iana"
      },
      "audio/ac3": {
        source: "iana"
      },
      "audio/adpcm": {
        source: "apache",
        extensions: ["adp"]
      },
      "audio/amr": {
        source: "iana",
        extensions: ["amr"]
      },
      "audio/amr-wb": {
        source: "iana"
      },
      "audio/amr-wb+": {
        source: "iana"
      },
      "audio/aptx": {
        source: "iana"
      },
      "audio/asc": {
        source: "iana"
      },
      "audio/atrac-advanced-lossless": {
        source: "iana"
      },
      "audio/atrac-x": {
        source: "iana"
      },
      "audio/atrac3": {
        source: "iana"
      },
      "audio/basic": {
        source: "iana",
        compressible: false,
        extensions: ["au", "snd"]
      },
      "audio/bv16": {
        source: "iana"
      },
      "audio/bv32": {
        source: "iana"
      },
      "audio/clearmode": {
        source: "iana"
      },
      "audio/cn": {
        source: "iana"
      },
      "audio/dat12": {
        source: "iana"
      },
      "audio/dls": {
        source: "iana"
      },
      "audio/dsr-es201108": {
        source: "iana"
      },
      "audio/dsr-es202050": {
        source: "iana"
      },
      "audio/dsr-es202211": {
        source: "iana"
      },
      "audio/dsr-es202212": {
        source: "iana"
      },
      "audio/dv": {
        source: "iana"
      },
      "audio/dvi4": {
        source: "iana"
      },
      "audio/eac3": {
        source: "iana"
      },
      "audio/encaprtp": {
        source: "iana"
      },
      "audio/evrc": {
        source: "iana"
      },
      "audio/evrc-qcp": {
        source: "iana"
      },
      "audio/evrc0": {
        source: "iana"
      },
      "audio/evrc1": {
        source: "iana"
      },
      "audio/evrcb": {
        source: "iana"
      },
      "audio/evrcb0": {
        source: "iana"
      },
      "audio/evrcb1": {
        source: "iana"
      },
      "audio/evrcnw": {
        source: "iana"
      },
      "audio/evrcnw0": {
        source: "iana"
      },
      "audio/evrcnw1": {
        source: "iana"
      },
      "audio/evrcwb": {
        source: "iana"
      },
      "audio/evrcwb0": {
        source: "iana"
      },
      "audio/evrcwb1": {
        source: "iana"
      },
      "audio/evs": {
        source: "iana"
      },
      "audio/flexfec": {
        source: "iana"
      },
      "audio/fwdred": {
        source: "iana"
      },
      "audio/g711-0": {
        source: "iana"
      },
      "audio/g719": {
        source: "iana"
      },
      "audio/g722": {
        source: "iana"
      },
      "audio/g7221": {
        source: "iana"
      },
      "audio/g723": {
        source: "iana"
      },
      "audio/g726-16": {
        source: "iana"
      },
      "audio/g726-24": {
        source: "iana"
      },
      "audio/g726-32": {
        source: "iana"
      },
      "audio/g726-40": {
        source: "iana"
      },
      "audio/g728": {
        source: "iana"
      },
      "audio/g729": {
        source: "iana"
      },
      "audio/g7291": {
        source: "iana"
      },
      "audio/g729d": {
        source: "iana"
      },
      "audio/g729e": {
        source: "iana"
      },
      "audio/gsm": {
        source: "iana"
      },
      "audio/gsm-efr": {
        source: "iana"
      },
      "audio/gsm-hr-08": {
        source: "iana"
      },
      "audio/ilbc": {
        source: "iana"
      },
      "audio/ip-mr_v2.5": {
        source: "iana"
      },
      "audio/isac": {
        source: "apache"
      },
      "audio/l16": {
        source: "iana"
      },
      "audio/l20": {
        source: "iana"
      },
      "audio/l24": {
        source: "iana",
        compressible: false
      },
      "audio/l8": {
        source: "iana"
      },
      "audio/lpc": {
        source: "iana"
      },
      "audio/melp": {
        source: "iana"
      },
      "audio/melp1200": {
        source: "iana"
      },
      "audio/melp2400": {
        source: "iana"
      },
      "audio/melp600": {
        source: "iana"
      },
      "audio/mhas": {
        source: "iana"
      },
      "audio/midi": {
        source: "apache",
        extensions: ["mid", "midi", "kar", "rmi"]
      },
      "audio/mobile-xmf": {
        source: "iana",
        extensions: ["mxmf"]
      },
      "audio/mp3": {
        compressible: false,
        extensions: ["mp3"]
      },
      "audio/mp4": {
        source: "iana",
        compressible: false,
        extensions: ["m4a", "mp4a"]
      },
      "audio/mp4a-latm": {
        source: "iana"
      },
      "audio/mpa": {
        source: "iana"
      },
      "audio/mpa-robust": {
        source: "iana"
      },
      "audio/mpeg": {
        source: "iana",
        compressible: false,
        extensions: ["mpga", "mp2", "mp2a", "mp3", "m2a", "m3a"]
      },
      "audio/mpeg4-generic": {
        source: "iana"
      },
      "audio/musepack": {
        source: "apache"
      },
      "audio/ogg": {
        source: "iana",
        compressible: false,
        extensions: ["oga", "ogg", "spx", "opus"]
      },
      "audio/opus": {
        source: "iana"
      },
      "audio/parityfec": {
        source: "iana"
      },
      "audio/pcma": {
        source: "iana"
      },
      "audio/pcma-wb": {
        source: "iana"
      },
      "audio/pcmu": {
        source: "iana"
      },
      "audio/pcmu-wb": {
        source: "iana"
      },
      "audio/prs.sid": {
        source: "iana"
      },
      "audio/qcelp": {
        source: "iana"
      },
      "audio/raptorfec": {
        source: "iana"
      },
      "audio/red": {
        source: "iana"
      },
      "audio/rtp-enc-aescm128": {
        source: "iana"
      },
      "audio/rtp-midi": {
        source: "iana"
      },
      "audio/rtploopback": {
        source: "iana"
      },
      "audio/rtx": {
        source: "iana"
      },
      "audio/s3m": {
        source: "apache",
        extensions: ["s3m"]
      },
      "audio/scip": {
        source: "iana"
      },
      "audio/silk": {
        source: "apache",
        extensions: ["sil"]
      },
      "audio/smv": {
        source: "iana"
      },
      "audio/smv-qcp": {
        source: "iana"
      },
      "audio/smv0": {
        source: "iana"
      },
      "audio/sofa": {
        source: "iana"
      },
      "audio/sp-midi": {
        source: "iana"
      },
      "audio/speex": {
        source: "iana"
      },
      "audio/t140c": {
        source: "iana"
      },
      "audio/t38": {
        source: "iana"
      },
      "audio/telephone-event": {
        source: "iana"
      },
      "audio/tetra_acelp": {
        source: "iana"
      },
      "audio/tetra_acelp_bb": {
        source: "iana"
      },
      "audio/tone": {
        source: "iana"
      },
      "audio/tsvcis": {
        source: "iana"
      },
      "audio/uemclip": {
        source: "iana"
      },
      "audio/ulpfec": {
        source: "iana"
      },
      "audio/usac": {
        source: "iana"
      },
      "audio/vdvi": {
        source: "iana"
      },
      "audio/vmr-wb": {
        source: "iana"
      },
      "audio/vnd.3gpp.iufp": {
        source: "iana"
      },
      "audio/vnd.4sb": {
        source: "iana"
      },
      "audio/vnd.audiokoz": {
        source: "iana"
      },
      "audio/vnd.celp": {
        source: "iana"
      },
      "audio/vnd.cisco.nse": {
        source: "iana"
      },
      "audio/vnd.cmles.radio-events": {
        source: "iana"
      },
      "audio/vnd.cns.anp1": {
        source: "iana"
      },
      "audio/vnd.cns.inf1": {
        source: "iana"
      },
      "audio/vnd.dece.audio": {
        source: "iana",
        extensions: ["uva", "uvva"]
      },
      "audio/vnd.digital-winds": {
        source: "iana",
        extensions: ["eol"]
      },
      "audio/vnd.dlna.adts": {
        source: "iana"
      },
      "audio/vnd.dolby.heaac.1": {
        source: "iana"
      },
      "audio/vnd.dolby.heaac.2": {
        source: "iana"
      },
      "audio/vnd.dolby.mlp": {
        source: "iana"
      },
      "audio/vnd.dolby.mps": {
        source: "iana"
      },
      "audio/vnd.dolby.pl2": {
        source: "iana"
      },
      "audio/vnd.dolby.pl2x": {
        source: "iana"
      },
      "audio/vnd.dolby.pl2z": {
        source: "iana"
      },
      "audio/vnd.dolby.pulse.1": {
        source: "iana"
      },
      "audio/vnd.dra": {
        source: "iana",
        extensions: ["dra"]
      },
      "audio/vnd.dts": {
        source: "iana",
        extensions: ["dts"]
      },
      "audio/vnd.dts.hd": {
        source: "iana",
        extensions: ["dtshd"]
      },
      "audio/vnd.dts.uhd": {
        source: "iana"
      },
      "audio/vnd.dvb.file": {
        source: "iana"
      },
      "audio/vnd.everad.plj": {
        source: "iana"
      },
      "audio/vnd.hns.audio": {
        source: "iana"
      },
      "audio/vnd.lucent.voice": {
        source: "iana",
        extensions: ["lvp"]
      },
      "audio/vnd.ms-playready.media.pya": {
        source: "iana",
        extensions: ["pya"]
      },
      "audio/vnd.nokia.mobile-xmf": {
        source: "iana"
      },
      "audio/vnd.nortel.vbk": {
        source: "iana"
      },
      "audio/vnd.nuera.ecelp4800": {
        source: "iana",
        extensions: ["ecelp4800"]
      },
      "audio/vnd.nuera.ecelp7470": {
        source: "iana",
        extensions: ["ecelp7470"]
      },
      "audio/vnd.nuera.ecelp9600": {
        source: "iana",
        extensions: ["ecelp9600"]
      },
      "audio/vnd.octel.sbc": {
        source: "iana"
      },
      "audio/vnd.presonus.multitrack": {
        source: "iana"
      },
      "audio/vnd.qcelp": {
        source: "iana"
      },
      "audio/vnd.rhetorex.32kadpcm": {
        source: "iana"
      },
      "audio/vnd.rip": {
        source: "iana",
        extensions: ["rip"]
      },
      "audio/vnd.rn-realaudio": {
        compressible: false
      },
      "audio/vnd.sealedmedia.softseal.mpeg": {
        source: "iana"
      },
      "audio/vnd.vmx.cvsd": {
        source: "iana"
      },
      "audio/vnd.wave": {
        compressible: false
      },
      "audio/vorbis": {
        source: "iana",
        compressible: false
      },
      "audio/vorbis-config": {
        source: "iana"
      },
      "audio/wav": {
        compressible: false,
        extensions: ["wav"]
      },
      "audio/wave": {
        compressible: false,
        extensions: ["wav"]
      },
      "audio/webm": {
        source: "apache",
        compressible: false,
        extensions: ["weba"]
      },
      "audio/x-aac": {
        source: "apache",
        compressible: false,
        extensions: ["aac"]
      },
      "audio/x-aiff": {
        source: "apache",
        extensions: ["aif", "aiff", "aifc"]
      },
      "audio/x-caf": {
        source: "apache",
        compressible: false,
        extensions: ["caf"]
      },
      "audio/x-flac": {
        source: "apache",
        extensions: ["flac"]
      },
      "audio/x-m4a": {
        source: "nginx",
        extensions: ["m4a"]
      },
      "audio/x-matroska": {
        source: "apache",
        extensions: ["mka"]
      },
      "audio/x-mpegurl": {
        source: "apache",
        extensions: ["m3u"]
      },
      "audio/x-ms-wax": {
        source: "apache",
        extensions: ["wax"]
      },
      "audio/x-ms-wma": {
        source: "apache",
        extensions: ["wma"]
      },
      "audio/x-pn-realaudio": {
        source: "apache",
        extensions: ["ram", "ra"]
      },
      "audio/x-pn-realaudio-plugin": {
        source: "apache",
        extensions: ["rmp"]
      },
      "audio/x-realaudio": {
        source: "nginx",
        extensions: ["ra"]
      },
      "audio/x-tta": {
        source: "apache"
      },
      "audio/x-wav": {
        source: "apache",
        extensions: ["wav"]
      },
      "audio/xm": {
        source: "apache",
        extensions: ["xm"]
      },
      "chemical/x-cdx": {
        source: "apache",
        extensions: ["cdx"]
      },
      "chemical/x-cif": {
        source: "apache",
        extensions: ["cif"]
      },
      "chemical/x-cmdf": {
        source: "apache",
        extensions: ["cmdf"]
      },
      "chemical/x-cml": {
        source: "apache",
        extensions: ["cml"]
      },
      "chemical/x-csml": {
        source: "apache",
        extensions: ["csml"]
      },
      "chemical/x-pdb": {
        source: "apache"
      },
      "chemical/x-xyz": {
        source: "apache",
        extensions: ["xyz"]
      },
      "font/collection": {
        source: "iana",
        extensions: ["ttc"]
      },
      "font/otf": {
        source: "iana",
        compressible: true,
        extensions: ["otf"]
      },
      "font/sfnt": {
        source: "iana"
      },
      "font/ttf": {
        source: "iana",
        compressible: true,
        extensions: ["ttf"]
      },
      "font/woff": {
        source: "iana",
        extensions: ["woff"]
      },
      "font/woff2": {
        source: "iana",
        extensions: ["woff2"]
      },
      "image/aces": {
        source: "iana",
        extensions: ["exr"]
      },
      "image/apng": {
        compressible: false,
        extensions: ["apng"]
      },
      "image/avci": {
        source: "iana",
        extensions: ["avci"]
      },
      "image/avcs": {
        source: "iana",
        extensions: ["avcs"]
      },
      "image/avif": {
        source: "iana",
        compressible: false,
        extensions: ["avif"]
      },
      "image/bmp": {
        source: "iana",
        compressible: true,
        extensions: ["bmp"]
      },
      "image/cgm": {
        source: "iana",
        extensions: ["cgm"]
      },
      "image/dicom-rle": {
        source: "iana",
        extensions: ["drle"]
      },
      "image/emf": {
        source: "iana",
        extensions: ["emf"]
      },
      "image/fits": {
        source: "iana",
        extensions: ["fits"]
      },
      "image/g3fax": {
        source: "iana",
        extensions: ["g3"]
      },
      "image/gif": {
        source: "iana",
        compressible: false,
        extensions: ["gif"]
      },
      "image/heic": {
        source: "iana",
        extensions: ["heic"]
      },
      "image/heic-sequence": {
        source: "iana",
        extensions: ["heics"]
      },
      "image/heif": {
        source: "iana",
        extensions: ["heif"]
      },
      "image/heif-sequence": {
        source: "iana",
        extensions: ["heifs"]
      },
      "image/hej2k": {
        source: "iana",
        extensions: ["hej2"]
      },
      "image/hsj2": {
        source: "iana",
        extensions: ["hsj2"]
      },
      "image/ief": {
        source: "iana",
        extensions: ["ief"]
      },
      "image/jls": {
        source: "iana",
        extensions: ["jls"]
      },
      "image/jp2": {
        source: "iana",
        compressible: false,
        extensions: ["jp2", "jpg2"]
      },
      "image/jpeg": {
        source: "iana",
        compressible: false,
        extensions: ["jpeg", "jpg", "jpe"]
      },
      "image/jph": {
        source: "iana",
        extensions: ["jph"]
      },
      "image/jphc": {
        source: "iana",
        extensions: ["jhc"]
      },
      "image/jpm": {
        source: "iana",
        compressible: false,
        extensions: ["jpm"]
      },
      "image/jpx": {
        source: "iana",
        compressible: false,
        extensions: ["jpx", "jpf"]
      },
      "image/jxr": {
        source: "iana",
        extensions: ["jxr"]
      },
      "image/jxra": {
        source: "iana",
        extensions: ["jxra"]
      },
      "image/jxrs": {
        source: "iana",
        extensions: ["jxrs"]
      },
      "image/jxs": {
        source: "iana",
        extensions: ["jxs"]
      },
      "image/jxsc": {
        source: "iana",
        extensions: ["jxsc"]
      },
      "image/jxsi": {
        source: "iana",
        extensions: ["jxsi"]
      },
      "image/jxss": {
        source: "iana",
        extensions: ["jxss"]
      },
      "image/ktx": {
        source: "iana",
        extensions: ["ktx"]
      },
      "image/ktx2": {
        source: "iana",
        extensions: ["ktx2"]
      },
      "image/naplps": {
        source: "iana"
      },
      "image/pjpeg": {
        compressible: false
      },
      "image/png": {
        source: "iana",
        compressible: false,
        extensions: ["png"]
      },
      "image/prs.btif": {
        source: "iana",
        extensions: ["btif"]
      },
      "image/prs.pti": {
        source: "iana",
        extensions: ["pti"]
      },
      "image/pwg-raster": {
        source: "iana"
      },
      "image/sgi": {
        source: "apache",
        extensions: ["sgi"]
      },
      "image/svg+xml": {
        source: "iana",
        compressible: true,
        extensions: ["svg", "svgz"]
      },
      "image/t38": {
        source: "iana",
        extensions: ["t38"]
      },
      "image/tiff": {
        source: "iana",
        compressible: false,
        extensions: ["tif", "tiff"]
      },
      "image/tiff-fx": {
        source: "iana",
        extensions: ["tfx"]
      },
      "image/vnd.adobe.photoshop": {
        source: "iana",
        compressible: true,
        extensions: ["psd"]
      },
      "image/vnd.airzip.accelerator.azv": {
        source: "iana",
        extensions: ["azv"]
      },
      "image/vnd.cns.inf2": {
        source: "iana"
      },
      "image/vnd.dece.graphic": {
        source: "iana",
        extensions: ["uvi", "uvvi", "uvg", "uvvg"]
      },
      "image/vnd.djvu": {
        source: "iana",
        extensions: ["djvu", "djv"]
      },
      "image/vnd.dvb.subtitle": {
        source: "iana",
        extensions: ["sub"]
      },
      "image/vnd.dwg": {
        source: "iana",
        extensions: ["dwg"]
      },
      "image/vnd.dxf": {
        source: "iana",
        extensions: ["dxf"]
      },
      "image/vnd.fastbidsheet": {
        source: "iana",
        extensions: ["fbs"]
      },
      "image/vnd.fpx": {
        source: "iana",
        extensions: ["fpx"]
      },
      "image/vnd.fst": {
        source: "iana",
        extensions: ["fst"]
      },
      "image/vnd.fujixerox.edmics-mmr": {
        source: "iana",
        extensions: ["mmr"]
      },
      "image/vnd.fujixerox.edmics-rlc": {
        source: "iana",
        extensions: ["rlc"]
      },
      "image/vnd.globalgraphics.pgb": {
        source: "iana"
      },
      "image/vnd.microsoft.icon": {
        source: "iana",
        compressible: true,
        extensions: ["ico"]
      },
      "image/vnd.mix": {
        source: "iana"
      },
      "image/vnd.mozilla.apng": {
        source: "iana"
      },
      "image/vnd.ms-dds": {
        compressible: true,
        extensions: ["dds"]
      },
      "image/vnd.ms-modi": {
        source: "iana",
        extensions: ["mdi"]
      },
      "image/vnd.ms-photo": {
        source: "apache",
        extensions: ["wdp"]
      },
      "image/vnd.net-fpx": {
        source: "iana",
        extensions: ["npx"]
      },
      "image/vnd.pco.b16": {
        source: "iana",
        extensions: ["b16"]
      },
      "image/vnd.radiance": {
        source: "iana"
      },
      "image/vnd.sealed.png": {
        source: "iana"
      },
      "image/vnd.sealedmedia.softseal.gif": {
        source: "iana"
      },
      "image/vnd.sealedmedia.softseal.jpg": {
        source: "iana"
      },
      "image/vnd.svf": {
        source: "iana"
      },
      "image/vnd.tencent.tap": {
        source: "iana",
        extensions: ["tap"]
      },
      "image/vnd.valve.source.texture": {
        source: "iana",
        extensions: ["vtf"]
      },
      "image/vnd.wap.wbmp": {
        source: "iana",
        extensions: ["wbmp"]
      },
      "image/vnd.xiff": {
        source: "iana",
        extensions: ["xif"]
      },
      "image/vnd.zbrush.pcx": {
        source: "iana",
        extensions: ["pcx"]
      },
      "image/webp": {
        source: "apache",
        extensions: ["webp"]
      },
      "image/wmf": {
        source: "iana",
        extensions: ["wmf"]
      },
      "image/x-3ds": {
        source: "apache",
        extensions: ["3ds"]
      },
      "image/x-cmu-raster": {
        source: "apache",
        extensions: ["ras"]
      },
      "image/x-cmx": {
        source: "apache",
        extensions: ["cmx"]
      },
      "image/x-freehand": {
        source: "apache",
        extensions: ["fh", "fhc", "fh4", "fh5", "fh7"]
      },
      "image/x-icon": {
        source: "apache",
        compressible: true,
        extensions: ["ico"]
      },
      "image/x-jng": {
        source: "nginx",
        extensions: ["jng"]
      },
      "image/x-mrsid-image": {
        source: "apache",
        extensions: ["sid"]
      },
      "image/x-ms-bmp": {
        source: "nginx",
        compressible: true,
        extensions: ["bmp"]
      },
      "image/x-pcx": {
        source: "apache",
        extensions: ["pcx"]
      },
      "image/x-pict": {
        source: "apache",
        extensions: ["pic", "pct"]
      },
      "image/x-portable-anymap": {
        source: "apache",
        extensions: ["pnm"]
      },
      "image/x-portable-bitmap": {
        source: "apache",
        extensions: ["pbm"]
      },
      "image/x-portable-graymap": {
        source: "apache",
        extensions: ["pgm"]
      },
      "image/x-portable-pixmap": {
        source: "apache",
        extensions: ["ppm"]
      },
      "image/x-rgb": {
        source: "apache",
        extensions: ["rgb"]
      },
      "image/x-tga": {
        source: "apache",
        extensions: ["tga"]
      },
      "image/x-xbitmap": {
        source: "apache",
        extensions: ["xbm"]
      },
      "image/x-xcf": {
        compressible: false
      },
      "image/x-xpixmap": {
        source: "apache",
        extensions: ["xpm"]
      },
      "image/x-xwindowdump": {
        source: "apache",
        extensions: ["xwd"]
      },
      "message/cpim": {
        source: "iana"
      },
      "message/delivery-status": {
        source: "iana"
      },
      "message/disposition-notification": {
        source: "iana",
        extensions: [
          "disposition-notification"
        ]
      },
      "message/external-body": {
        source: "iana"
      },
      "message/feedback-report": {
        source: "iana"
      },
      "message/global": {
        source: "iana",
        extensions: ["u8msg"]
      },
      "message/global-delivery-status": {
        source: "iana",
        extensions: ["u8dsn"]
      },
      "message/global-disposition-notification": {
        source: "iana",
        extensions: ["u8mdn"]
      },
      "message/global-headers": {
        source: "iana",
        extensions: ["u8hdr"]
      },
      "message/http": {
        source: "iana",
        compressible: false
      },
      "message/imdn+xml": {
        source: "iana",
        compressible: true
      },
      "message/news": {
        source: "iana"
      },
      "message/partial": {
        source: "iana",
        compressible: false
      },
      "message/rfc822": {
        source: "iana",
        compressible: true,
        extensions: ["eml", "mime"]
      },
      "message/s-http": {
        source: "iana"
      },
      "message/sip": {
        source: "iana"
      },
      "message/sipfrag": {
        source: "iana"
      },
      "message/tracking-status": {
        source: "iana"
      },
      "message/vnd.si.simp": {
        source: "iana"
      },
      "message/vnd.wfa.wsc": {
        source: "iana",
        extensions: ["wsc"]
      },
      "model/3mf": {
        source: "iana",
        extensions: ["3mf"]
      },
      "model/e57": {
        source: "iana"
      },
      "model/gltf+json": {
        source: "iana",
        compressible: true,
        extensions: ["gltf"]
      },
      "model/gltf-binary": {
        source: "iana",
        compressible: true,
        extensions: ["glb"]
      },
      "model/iges": {
        source: "iana",
        compressible: false,
        extensions: ["igs", "iges"]
      },
      "model/mesh": {
        source: "iana",
        compressible: false,
        extensions: ["msh", "mesh", "silo"]
      },
      "model/mtl": {
        source: "iana",
        extensions: ["mtl"]
      },
      "model/obj": {
        source: "iana",
        extensions: ["obj"]
      },
      "model/step": {
        source: "iana"
      },
      "model/step+xml": {
        source: "iana",
        compressible: true,
        extensions: ["stpx"]
      },
      "model/step+zip": {
        source: "iana",
        compressible: false,
        extensions: ["stpz"]
      },
      "model/step-xml+zip": {
        source: "iana",
        compressible: false,
        extensions: ["stpxz"]
      },
      "model/stl": {
        source: "iana",
        extensions: ["stl"]
      },
      "model/vnd.collada+xml": {
        source: "iana",
        compressible: true,
        extensions: ["dae"]
      },
      "model/vnd.dwf": {
        source: "iana",
        extensions: ["dwf"]
      },
      "model/vnd.flatland.3dml": {
        source: "iana"
      },
      "model/vnd.gdl": {
        source: "iana",
        extensions: ["gdl"]
      },
      "model/vnd.gs-gdl": {
        source: "apache"
      },
      "model/vnd.gs.gdl": {
        source: "iana"
      },
      "model/vnd.gtw": {
        source: "iana",
        extensions: ["gtw"]
      },
      "model/vnd.moml+xml": {
        source: "iana",
        compressible: true
      },
      "model/vnd.mts": {
        source: "iana",
        extensions: ["mts"]
      },
      "model/vnd.opengex": {
        source: "iana",
        extensions: ["ogex"]
      },
      "model/vnd.parasolid.transmit.binary": {
        source: "iana",
        extensions: ["x_b"]
      },
      "model/vnd.parasolid.transmit.text": {
        source: "iana",
        extensions: ["x_t"]
      },
      "model/vnd.pytha.pyox": {
        source: "iana"
      },
      "model/vnd.rosette.annotated-data-model": {
        source: "iana"
      },
      "model/vnd.sap.vds": {
        source: "iana",
        extensions: ["vds"]
      },
      "model/vnd.usdz+zip": {
        source: "iana",
        compressible: false,
        extensions: ["usdz"]
      },
      "model/vnd.valve.source.compiled-map": {
        source: "iana",
        extensions: ["bsp"]
      },
      "model/vnd.vtu": {
        source: "iana",
        extensions: ["vtu"]
      },
      "model/vrml": {
        source: "iana",
        compressible: false,
        extensions: ["wrl", "vrml"]
      },
      "model/x3d+binary": {
        source: "apache",
        compressible: false,
        extensions: ["x3db", "x3dbz"]
      },
      "model/x3d+fastinfoset": {
        source: "iana",
        extensions: ["x3db"]
      },
      "model/x3d+vrml": {
        source: "apache",
        compressible: false,
        extensions: ["x3dv", "x3dvz"]
      },
      "model/x3d+xml": {
        source: "iana",
        compressible: true,
        extensions: ["x3d", "x3dz"]
      },
      "model/x3d-vrml": {
        source: "iana",
        extensions: ["x3dv"]
      },
      "multipart/alternative": {
        source: "iana",
        compressible: false
      },
      "multipart/appledouble": {
        source: "iana"
      },
      "multipart/byteranges": {
        source: "iana"
      },
      "multipart/digest": {
        source: "iana"
      },
      "multipart/encrypted": {
        source: "iana",
        compressible: false
      },
      "multipart/form-data": {
        source: "iana",
        compressible: false
      },
      "multipart/header-set": {
        source: "iana"
      },
      "multipart/mixed": {
        source: "iana"
      },
      "multipart/multilingual": {
        source: "iana"
      },
      "multipart/parallel": {
        source: "iana"
      },
      "multipart/related": {
        source: "iana",
        compressible: false
      },
      "multipart/report": {
        source: "iana"
      },
      "multipart/signed": {
        source: "iana",
        compressible: false
      },
      "multipart/vnd.bint.med-plus": {
        source: "iana"
      },
      "multipart/voice-message": {
        source: "iana"
      },
      "multipart/x-mixed-replace": {
        source: "iana"
      },
      "text/1d-interleaved-parityfec": {
        source: "iana"
      },
      "text/cache-manifest": {
        source: "iana",
        compressible: true,
        extensions: ["appcache", "manifest"]
      },
      "text/calendar": {
        source: "iana",
        extensions: ["ics", "ifb"]
      },
      "text/calender": {
        compressible: true
      },
      "text/cmd": {
        compressible: true
      },
      "text/coffeescript": {
        extensions: ["coffee", "litcoffee"]
      },
      "text/cql": {
        source: "iana"
      },
      "text/cql-expression": {
        source: "iana"
      },
      "text/cql-identifier": {
        source: "iana"
      },
      "text/css": {
        source: "iana",
        charset: "UTF-8",
        compressible: true,
        extensions: ["css"]
      },
      "text/csv": {
        source: "iana",
        compressible: true,
        extensions: ["csv"]
      },
      "text/csv-schema": {
        source: "iana"
      },
      "text/directory": {
        source: "iana"
      },
      "text/dns": {
        source: "iana"
      },
      "text/ecmascript": {
        source: "iana"
      },
      "text/encaprtp": {
        source: "iana"
      },
      "text/enriched": {
        source: "iana"
      },
      "text/fhirpath": {
        source: "iana"
      },
      "text/flexfec": {
        source: "iana"
      },
      "text/fwdred": {
        source: "iana"
      },
      "text/gff3": {
        source: "iana"
      },
      "text/grammar-ref-list": {
        source: "iana"
      },
      "text/html": {
        source: "iana",
        compressible: true,
        extensions: ["html", "htm", "shtml"]
      },
      "text/jade": {
        extensions: ["jade"]
      },
      "text/javascript": {
        source: "iana",
        compressible: true
      },
      "text/jcr-cnd": {
        source: "iana"
      },
      "text/jsx": {
        compressible: true,
        extensions: ["jsx"]
      },
      "text/less": {
        compressible: true,
        extensions: ["less"]
      },
      "text/markdown": {
        source: "iana",
        compressible: true,
        extensions: ["markdown", "md"]
      },
      "text/mathml": {
        source: "nginx",
        extensions: ["mml"]
      },
      "text/mdx": {
        compressible: true,
        extensions: ["mdx"]
      },
      "text/mizar": {
        source: "iana"
      },
      "text/n3": {
        source: "iana",
        charset: "UTF-8",
        compressible: true,
        extensions: ["n3"]
      },
      "text/parameters": {
        source: "iana",
        charset: "UTF-8"
      },
      "text/parityfec": {
        source: "iana"
      },
      "text/plain": {
        source: "iana",
        compressible: true,
        extensions: ["txt", "text", "conf", "def", "list", "log", "in", "ini"]
      },
      "text/provenance-notation": {
        source: "iana",
        charset: "UTF-8"
      },
      "text/prs.fallenstein.rst": {
        source: "iana"
      },
      "text/prs.lines.tag": {
        source: "iana",
        extensions: ["dsc"]
      },
      "text/prs.prop.logic": {
        source: "iana"
      },
      "text/raptorfec": {
        source: "iana"
      },
      "text/red": {
        source: "iana"
      },
      "text/rfc822-headers": {
        source: "iana"
      },
      "text/richtext": {
        source: "iana",
        compressible: true,
        extensions: ["rtx"]
      },
      "text/rtf": {
        source: "iana",
        compressible: true,
        extensions: ["rtf"]
      },
      "text/rtp-enc-aescm128": {
        source: "iana"
      },
      "text/rtploopback": {
        source: "iana"
      },
      "text/rtx": {
        source: "iana"
      },
      "text/sgml": {
        source: "iana",
        extensions: ["sgml", "sgm"]
      },
      "text/shaclc": {
        source: "iana"
      },
      "text/shex": {
        source: "iana",
        extensions: ["shex"]
      },
      "text/slim": {
        extensions: ["slim", "slm"]
      },
      "text/spdx": {
        source: "iana",
        extensions: ["spdx"]
      },
      "text/strings": {
        source: "iana"
      },
      "text/stylus": {
        extensions: ["stylus", "styl"]
      },
      "text/t140": {
        source: "iana"
      },
      "text/tab-separated-values": {
        source: "iana",
        compressible: true,
        extensions: ["tsv"]
      },
      "text/troff": {
        source: "iana",
        extensions: ["t", "tr", "roff", "man", "me", "ms"]
      },
      "text/turtle": {
        source: "iana",
        charset: "UTF-8",
        extensions: ["ttl"]
      },
      "text/ulpfec": {
        source: "iana"
      },
      "text/uri-list": {
        source: "iana",
        compressible: true,
        extensions: ["uri", "uris", "urls"]
      },
      "text/vcard": {
        source: "iana",
        compressible: true,
        extensions: ["vcard"]
      },
      "text/vnd.a": {
        source: "iana"
      },
      "text/vnd.abc": {
        source: "iana"
      },
      "text/vnd.ascii-art": {
        source: "iana"
      },
      "text/vnd.curl": {
        source: "iana",
        extensions: ["curl"]
      },
      "text/vnd.curl.dcurl": {
        source: "apache",
        extensions: ["dcurl"]
      },
      "text/vnd.curl.mcurl": {
        source: "apache",
        extensions: ["mcurl"]
      },
      "text/vnd.curl.scurl": {
        source: "apache",
        extensions: ["scurl"]
      },
      "text/vnd.debian.copyright": {
        source: "iana",
        charset: "UTF-8"
      },
      "text/vnd.dmclientscript": {
        source: "iana"
      },
      "text/vnd.dvb.subtitle": {
        source: "iana",
        extensions: ["sub"]
      },
      "text/vnd.esmertec.theme-descriptor": {
        source: "iana",
        charset: "UTF-8"
      },
      "text/vnd.familysearch.gedcom": {
        source: "iana",
        extensions: ["ged"]
      },
      "text/vnd.ficlab.flt": {
        source: "iana"
      },
      "text/vnd.fly": {
        source: "iana",
        extensions: ["fly"]
      },
      "text/vnd.fmi.flexstor": {
        source: "iana",
        extensions: ["flx"]
      },
      "text/vnd.gml": {
        source: "iana"
      },
      "text/vnd.graphviz": {
        source: "iana",
        extensions: ["gv"]
      },
      "text/vnd.hans": {
        source: "iana"
      },
      "text/vnd.hgl": {
        source: "iana"
      },
      "text/vnd.in3d.3dml": {
        source: "iana",
        extensions: ["3dml"]
      },
      "text/vnd.in3d.spot": {
        source: "iana",
        extensions: ["spot"]
      },
      "text/vnd.iptc.newsml": {
        source: "iana"
      },
      "text/vnd.iptc.nitf": {
        source: "iana"
      },
      "text/vnd.latex-z": {
        source: "iana"
      },
      "text/vnd.motorola.reflex": {
        source: "iana"
      },
      "text/vnd.ms-mediapackage": {
        source: "iana"
      },
      "text/vnd.net2phone.commcenter.command": {
        source: "iana"
      },
      "text/vnd.radisys.msml-basic-layout": {
        source: "iana"
      },
      "text/vnd.senx.warpscript": {
        source: "iana"
      },
      "text/vnd.si.uricatalogue": {
        source: "iana"
      },
      "text/vnd.sosi": {
        source: "iana"
      },
      "text/vnd.sun.j2me.app-descriptor": {
        source: "iana",
        charset: "UTF-8",
        extensions: ["jad"]
      },
      "text/vnd.trolltech.linguist": {
        source: "iana",
        charset: "UTF-8"
      },
      "text/vnd.wap.si": {
        source: "iana"
      },
      "text/vnd.wap.sl": {
        source: "iana"
      },
      "text/vnd.wap.wml": {
        source: "iana",
        extensions: ["wml"]
      },
      "text/vnd.wap.wmlscript": {
        source: "iana",
        extensions: ["wmls"]
      },
      "text/vtt": {
        source: "iana",
        charset: "UTF-8",
        compressible: true,
        extensions: ["vtt"]
      },
      "text/x-asm": {
        source: "apache",
        extensions: ["s", "asm"]
      },
      "text/x-c": {
        source: "apache",
        extensions: ["c", "cc", "cxx", "cpp", "h", "hh", "dic"]
      },
      "text/x-component": {
        source: "nginx",
        extensions: ["htc"]
      },
      "text/x-fortran": {
        source: "apache",
        extensions: ["f", "for", "f77", "f90"]
      },
      "text/x-gwt-rpc": {
        compressible: true
      },
      "text/x-handlebars-template": {
        extensions: ["hbs"]
      },
      "text/x-java-source": {
        source: "apache",
        extensions: ["java"]
      },
      "text/x-jquery-tmpl": {
        compressible: true
      },
      "text/x-lua": {
        extensions: ["lua"]
      },
      "text/x-markdown": {
        compressible: true,
        extensions: ["mkd"]
      },
      "text/x-nfo": {
        source: "apache",
        extensions: ["nfo"]
      },
      "text/x-opml": {
        source: "apache",
        extensions: ["opml"]
      },
      "text/x-org": {
        compressible: true,
        extensions: ["org"]
      },
      "text/x-pascal": {
        source: "apache",
        extensions: ["p", "pas"]
      },
      "text/x-processing": {
        compressible: true,
        extensions: ["pde"]
      },
      "text/x-sass": {
        extensions: ["sass"]
      },
      "text/x-scss": {
        extensions: ["scss"]
      },
      "text/x-setext": {
        source: "apache",
        extensions: ["etx"]
      },
      "text/x-sfv": {
        source: "apache",
        extensions: ["sfv"]
      },
      "text/x-suse-ymp": {
        compressible: true,
        extensions: ["ymp"]
      },
      "text/x-uuencode": {
        source: "apache",
        extensions: ["uu"]
      },
      "text/x-vcalendar": {
        source: "apache",
        extensions: ["vcs"]
      },
      "text/x-vcard": {
        source: "apache",
        extensions: ["vcf"]
      },
      "text/xml": {
        source: "iana",
        compressible: true,
        extensions: ["xml"]
      },
      "text/xml-external-parsed-entity": {
        source: "iana"
      },
      "text/yaml": {
        compressible: true,
        extensions: ["yaml", "yml"]
      },
      "video/1d-interleaved-parityfec": {
        source: "iana"
      },
      "video/3gpp": {
        source: "iana",
        extensions: ["3gp", "3gpp"]
      },
      "video/3gpp-tt": {
        source: "iana"
      },
      "video/3gpp2": {
        source: "iana",
        extensions: ["3g2"]
      },
      "video/av1": {
        source: "iana"
      },
      "video/bmpeg": {
        source: "iana"
      },
      "video/bt656": {
        source: "iana"
      },
      "video/celb": {
        source: "iana"
      },
      "video/dv": {
        source: "iana"
      },
      "video/encaprtp": {
        source: "iana"
      },
      "video/ffv1": {
        source: "iana"
      },
      "video/flexfec": {
        source: "iana"
      },
      "video/h261": {
        source: "iana",
        extensions: ["h261"]
      },
      "video/h263": {
        source: "iana",
        extensions: ["h263"]
      },
      "video/h263-1998": {
        source: "iana"
      },
      "video/h263-2000": {
        source: "iana"
      },
      "video/h264": {
        source: "iana",
        extensions: ["h264"]
      },
      "video/h264-rcdo": {
        source: "iana"
      },
      "video/h264-svc": {
        source: "iana"
      },
      "video/h265": {
        source: "iana"
      },
      "video/iso.segment": {
        source: "iana",
        extensions: ["m4s"]
      },
      "video/jpeg": {
        source: "iana",
        extensions: ["jpgv"]
      },
      "video/jpeg2000": {
        source: "iana"
      },
      "video/jpm": {
        source: "apache",
        extensions: ["jpm", "jpgm"]
      },
      "video/jxsv": {
        source: "iana"
      },
      "video/mj2": {
        source: "iana",
        extensions: ["mj2", "mjp2"]
      },
      "video/mp1s": {
        source: "iana"
      },
      "video/mp2p": {
        source: "iana"
      },
      "video/mp2t": {
        source: "iana",
        extensions: ["ts"]
      },
      "video/mp4": {
        source: "iana",
        compressible: false,
        extensions: ["mp4", "mp4v", "mpg4"]
      },
      "video/mp4v-es": {
        source: "iana"
      },
      "video/mpeg": {
        source: "iana",
        compressible: false,
        extensions: ["mpeg", "mpg", "mpe", "m1v", "m2v"]
      },
      "video/mpeg4-generic": {
        source: "iana"
      },
      "video/mpv": {
        source: "iana"
      },
      "video/nv": {
        source: "iana"
      },
      "video/ogg": {
        source: "iana",
        compressible: false,
        extensions: ["ogv"]
      },
      "video/parityfec": {
        source: "iana"
      },
      "video/pointer": {
        source: "iana"
      },
      "video/quicktime": {
        source: "iana",
        compressible: false,
        extensions: ["qt", "mov"]
      },
      "video/raptorfec": {
        source: "iana"
      },
      "video/raw": {
        source: "iana"
      },
      "video/rtp-enc-aescm128": {
        source: "iana"
      },
      "video/rtploopback": {
        source: "iana"
      },
      "video/rtx": {
        source: "iana"
      },
      "video/scip": {
        source: "iana"
      },
      "video/smpte291": {
        source: "iana"
      },
      "video/smpte292m": {
        source: "iana"
      },
      "video/ulpfec": {
        source: "iana"
      },
      "video/vc1": {
        source: "iana"
      },
      "video/vc2": {
        source: "iana"
      },
      "video/vnd.cctv": {
        source: "iana"
      },
      "video/vnd.dece.hd": {
        source: "iana",
        extensions: ["uvh", "uvvh"]
      },
      "video/vnd.dece.mobile": {
        source: "iana",
        extensions: ["uvm", "uvvm"]
      },
      "video/vnd.dece.mp4": {
        source: "iana"
      },
      "video/vnd.dece.pd": {
        source: "iana",
        extensions: ["uvp", "uvvp"]
      },
      "video/vnd.dece.sd": {
        source: "iana",
        extensions: ["uvs", "uvvs"]
      },
      "video/vnd.dece.video": {
        source: "iana",
        extensions: ["uvv", "uvvv"]
      },
      "video/vnd.directv.mpeg": {
        source: "iana"
      },
      "video/vnd.directv.mpeg-tts": {
        source: "iana"
      },
      "video/vnd.dlna.mpeg-tts": {
        source: "iana"
      },
      "video/vnd.dvb.file": {
        source: "iana",
        extensions: ["dvb"]
      },
      "video/vnd.fvt": {
        source: "iana",
        extensions: ["fvt"]
      },
      "video/vnd.hns.video": {
        source: "iana"
      },
      "video/vnd.iptvforum.1dparityfec-1010": {
        source: "iana"
      },
      "video/vnd.iptvforum.1dparityfec-2005": {
        source: "iana"
      },
      "video/vnd.iptvforum.2dparityfec-1010": {
        source: "iana"
      },
      "video/vnd.iptvforum.2dparityfec-2005": {
        source: "iana"
      },
      "video/vnd.iptvforum.ttsavc": {
        source: "iana"
      },
      "video/vnd.iptvforum.ttsmpeg2": {
        source: "iana"
      },
      "video/vnd.motorola.video": {
        source: "iana"
      },
      "video/vnd.motorola.videop": {
        source: "iana"
      },
      "video/vnd.mpegurl": {
        source: "iana",
        extensions: ["mxu", "m4u"]
      },
      "video/vnd.ms-playready.media.pyv": {
        source: "iana",
        extensions: ["pyv"]
      },
      "video/vnd.nokia.interleaved-multimedia": {
        source: "iana"
      },
      "video/vnd.nokia.mp4vr": {
        source: "iana"
      },
      "video/vnd.nokia.videovoip": {
        source: "iana"
      },
      "video/vnd.objectvideo": {
        source: "iana"
      },
      "video/vnd.radgamettools.bink": {
        source: "iana"
      },
      "video/vnd.radgamettools.smacker": {
        source: "iana"
      },
      "video/vnd.sealed.mpeg1": {
        source: "iana"
      },
      "video/vnd.sealed.mpeg4": {
        source: "iana"
      },
      "video/vnd.sealed.swf": {
        source: "iana"
      },
      "video/vnd.sealedmedia.softseal.mov": {
        source: "iana"
      },
      "video/vnd.uvvu.mp4": {
        source: "iana",
        extensions: ["uvu", "uvvu"]
      },
      "video/vnd.vivo": {
        source: "iana",
        extensions: ["viv"]
      },
      "video/vnd.youtube.yt": {
        source: "iana"
      },
      "video/vp8": {
        source: "iana"
      },
      "video/vp9": {
        source: "iana"
      },
      "video/webm": {
        source: "apache",
        compressible: false,
        extensions: ["webm"]
      },
      "video/x-f4v": {
        source: "apache",
        extensions: ["f4v"]
      },
      "video/x-fli": {
        source: "apache",
        extensions: ["fli"]
      },
      "video/x-flv": {
        source: "apache",
        compressible: false,
        extensions: ["flv"]
      },
      "video/x-m4v": {
        source: "apache",
        extensions: ["m4v"]
      },
      "video/x-matroska": {
        source: "apache",
        compressible: false,
        extensions: ["mkv", "mk3d", "mks"]
      },
      "video/x-mng": {
        source: "apache",
        extensions: ["mng"]
      },
      "video/x-ms-asf": {
        source: "apache",
        extensions: ["asf", "asx"]
      },
      "video/x-ms-vob": {
        source: "apache",
        extensions: ["vob"]
      },
      "video/x-ms-wm": {
        source: "apache",
        extensions: ["wm"]
      },
      "video/x-ms-wmv": {
        source: "apache",
        compressible: false,
        extensions: ["wmv"]
      },
      "video/x-ms-wmx": {
        source: "apache",
        extensions: ["wmx"]
      },
      "video/x-ms-wvx": {
        source: "apache",
        extensions: ["wvx"]
      },
      "video/x-msvideo": {
        source: "apache",
        extensions: ["avi"]
      },
      "video/x-sgi-movie": {
        source: "apache",
        extensions: ["movie"]
      },
      "video/x-smv": {
        source: "apache",
        extensions: ["smv"]
      },
      "x-conference/x-cooltalk": {
        source: "apache",
        extensions: ["ice"]
      },
      "x-shader/x-fragment": {
        compressible: true
      },
      "x-shader/x-vertex": {
        compressible: true
      }
    };
  }
});

// node_modules/mime-db/index.js
var require_mime_db = __commonJS({
  "node_modules/mime-db/index.js"(exports2, module2) {
    module2.exports = require_db();
  }
});

// node_modules/mime-types/index.js
var require_mime_types = __commonJS({
  "node_modules/mime-types/index.js"(exports2) {
    "use strict";
    var db = require_mime_db();
    var extname = require("path").extname;
    var EXTRACT_TYPE_REGEXP = /^\s*([^;\s]*)(?:;|\s|$)/;
    var TEXT_TYPE_REGEXP = /^text\//i;
    exports2.charset = charset;
    exports2.charsets = { lookup: charset };
    exports2.contentType = contentType;
    exports2.extension = extension;
    exports2.extensions = /* @__PURE__ */ Object.create(null);
    exports2.lookup = lookup;
    exports2.types = /* @__PURE__ */ Object.create(null);
    populateMaps(exports2.extensions, exports2.types);
    function charset(type) {
      if (!type || typeof type !== "string") {
        return false;
      }
      var match = EXTRACT_TYPE_REGEXP.exec(type);
      var mime = match && db[match[1].toLowerCase()];
      if (mime && mime.charset) {
        return mime.charset;
      }
      if (match && TEXT_TYPE_REGEXP.test(match[1])) {
        return "UTF-8";
      }
      return false;
    }
    function contentType(str) {
      if (!str || typeof str !== "string") {
        return false;
      }
      var mime = str.indexOf("/") === -1 ? exports2.lookup(str) : str;
      if (!mime) {
        return false;
      }
      if (mime.indexOf("charset") === -1) {
        var charset2 = exports2.charset(mime);
        if (charset2) mime += "; charset=" + charset2.toLowerCase();
      }
      return mime;
    }
    function extension(type) {
      if (!type || typeof type !== "string") {
        return false;
      }
      var match = EXTRACT_TYPE_REGEXP.exec(type);
      var exts = match && exports2.extensions[match[1].toLowerCase()];
      if (!exts || !exts.length) {
        return false;
      }
      return exts[0];
    }
    function lookup(path4) {
      if (!path4 || typeof path4 !== "string") {
        return false;
      }
      var extension2 = extname("x." + path4).toLowerCase().substr(1);
      if (!extension2) {
        return false;
      }
      return exports2.types[extension2] || false;
    }
    function populateMaps(extensions, types) {
      var preference = ["nginx", "apache", void 0, "iana"];
      Object.keys(db).forEach(function forEachMimeType(type) {
        var mime = db[type];
        var exts = mime.extensions;
        if (!exts || !exts.length) {
          return;
        }
        extensions[type] = exts;
        for (var i = 0; i < exts.length; i++) {
          var extension2 = exts[i];
          if (types[extension2]) {
            var from = preference.indexOf(db[types[extension2]].source);
            var to = preference.indexOf(mime.source);
            if (types[extension2] !== "application/octet-stream" && (from > to || from === to && types[extension2].substr(0, 12) === "application/")) {
              continue;
            }
          }
          types[extension2] = type;
        }
      });
    }
  }
});

// node_modules/asynckit/lib/defer.js
var require_defer = __commonJS({
  "node_modules/asynckit/lib/defer.js"(exports2, module2) {
    module2.exports = defer;
    function defer(fn) {
      var nextTick = typeof setImmediate == "function" ? setImmediate : typeof process == "object" && typeof process.nextTick == "function" ? process.nextTick : null;
      if (nextTick) {
        nextTick(fn);
      } else {
        setTimeout(fn, 0);
      }
    }
  }
});

// node_modules/asynckit/lib/async.js
var require_async = __commonJS({
  "node_modules/asynckit/lib/async.js"(exports2, module2) {
    var defer = require_defer();
    module2.exports = async;
    function async(callback) {
      var isAsync = false;
      defer(function() {
        isAsync = true;
      });
      return function async_callback(err, result) {
        if (isAsync) {
          callback(err, result);
        } else {
          defer(function nextTick_callback() {
            callback(err, result);
          });
        }
      };
    }
  }
});

// node_modules/asynckit/lib/abort.js
var require_abort = __commonJS({
  "node_modules/asynckit/lib/abort.js"(exports2, module2) {
    module2.exports = abort;
    function abort(state) {
      Object.keys(state.jobs).forEach(clean.bind(state));
      state.jobs = {};
    }
    function clean(key) {
      if (typeof this.jobs[key] == "function") {
        this.jobs[key]();
      }
    }
  }
});

// node_modules/asynckit/lib/iterate.js
var require_iterate = __commonJS({
  "node_modules/asynckit/lib/iterate.js"(exports2, module2) {
    var async = require_async();
    var abort = require_abort();
    module2.exports = iterate;
    function iterate(list, iterator2, state, callback) {
      var key = state["keyedList"] ? state["keyedList"][state.index] : state.index;
      state.jobs[key] = runJob(iterator2, key, list[key], function(error, output) {
        if (!(key in state.jobs)) {
          return;
        }
        delete state.jobs[key];
        if (error) {
          abort(state);
        } else {
          state.results[key] = output;
        }
        callback(error, state.results);
      });
    }
    function runJob(iterator2, key, item, callback) {
      var aborter;
      if (iterator2.length == 2) {
        aborter = iterator2(item, async(callback));
      } else {
        aborter = iterator2(item, key, async(callback));
      }
      return aborter;
    }
  }
});

// node_modules/asynckit/lib/state.js
var require_state = __commonJS({
  "node_modules/asynckit/lib/state.js"(exports2, module2) {
    module2.exports = state;
    function state(list, sortMethod) {
      var isNamedList = !Array.isArray(list), initState = {
        index: 0,
        keyedList: isNamedList || sortMethod ? Object.keys(list) : null,
        jobs: {},
        results: isNamedList ? {} : [],
        size: isNamedList ? Object.keys(list).length : list.length
      };
      if (sortMethod) {
        initState.keyedList.sort(isNamedList ? sortMethod : function(a, b) {
          return sortMethod(list[a], list[b]);
        });
      }
      return initState;
    }
  }
});

// node_modules/asynckit/lib/terminator.js
var require_terminator = __commonJS({
  "node_modules/asynckit/lib/terminator.js"(exports2, module2) {
    var abort = require_abort();
    var async = require_async();
    module2.exports = terminator;
    function terminator(callback) {
      if (!Object.keys(this.jobs).length) {
        return;
      }
      this.index = this.size;
      abort(this);
      async(callback)(null, this.results);
    }
  }
});

// node_modules/asynckit/parallel.js
var require_parallel = __commonJS({
  "node_modules/asynckit/parallel.js"(exports2, module2) {
    var iterate = require_iterate();
    var initState = require_state();
    var terminator = require_terminator();
    module2.exports = parallel;
    function parallel(list, iterator2, callback) {
      var state = initState(list);
      while (state.index < (state["keyedList"] || list).length) {
        iterate(list, iterator2, state, function(error, result) {
          if (error) {
            callback(error, result);
            return;
          }
          if (Object.keys(state.jobs).length === 0) {
            callback(null, state.results);
            return;
          }
        });
        state.index++;
      }
      return terminator.bind(state, callback);
    }
  }
});

// node_modules/asynckit/serialOrdered.js
var require_serialOrdered = __commonJS({
  "node_modules/asynckit/serialOrdered.js"(exports2, module2) {
    var iterate = require_iterate();
    var initState = require_state();
    var terminator = require_terminator();
    module2.exports = serialOrdered;
    module2.exports.ascending = ascending;
    module2.exports.descending = descending;
    function serialOrdered(list, iterator2, sortMethod, callback) {
      var state = initState(list, sortMethod);
      iterate(list, iterator2, state, function iteratorHandler(error, result) {
        if (error) {
          callback(error, result);
          return;
        }
        state.index++;
        if (state.index < (state["keyedList"] || list).length) {
          iterate(list, iterator2, state, iteratorHandler);
          return;
        }
        callback(null, state.results);
      });
      return terminator.bind(state, callback);
    }
    function ascending(a, b) {
      return a < b ? -1 : a > b ? 1 : 0;
    }
    function descending(a, b) {
      return -1 * ascending(a, b);
    }
  }
});

// node_modules/asynckit/serial.js
var require_serial = __commonJS({
  "node_modules/asynckit/serial.js"(exports2, module2) {
    var serialOrdered = require_serialOrdered();
    module2.exports = serial;
    function serial(list, iterator2, callback) {
      return serialOrdered(list, iterator2, null, callback);
    }
  }
});

// node_modules/asynckit/index.js
var require_asynckit = __commonJS({
  "node_modules/asynckit/index.js"(exports2, module2) {
    module2.exports = {
      parallel: require_parallel(),
      serial: require_serial(),
      serialOrdered: require_serialOrdered()
    };
  }
});

// node_modules/es-object-atoms/index.js
var require_es_object_atoms = __commonJS({
  "node_modules/es-object-atoms/index.js"(exports2, module2) {
    "use strict";
    module2.exports = Object;
  }
});

// node_modules/es-errors/index.js
var require_es_errors = __commonJS({
  "node_modules/es-errors/index.js"(exports2, module2) {
    "use strict";
    module2.exports = Error;
  }
});

// node_modules/es-errors/eval.js
var require_eval = __commonJS({
  "node_modules/es-errors/eval.js"(exports2, module2) {
    "use strict";
    module2.exports = EvalError;
  }
});

// node_modules/es-errors/range.js
var require_range = __commonJS({
  "node_modules/es-errors/range.js"(exports2, module2) {
    "use strict";
    module2.exports = RangeError;
  }
});

// node_modules/es-errors/ref.js
var require_ref = __commonJS({
  "node_modules/es-errors/ref.js"(exports2, module2) {
    "use strict";
    module2.exports = ReferenceError;
  }
});

// node_modules/es-errors/syntax.js
var require_syntax = __commonJS({
  "node_modules/es-errors/syntax.js"(exports2, module2) {
    "use strict";
    module2.exports = SyntaxError;
  }
});

// node_modules/es-errors/type.js
var require_type = __commonJS({
  "node_modules/es-errors/type.js"(exports2, module2) {
    "use strict";
    module2.exports = TypeError;
  }
});

// node_modules/es-errors/uri.js
var require_uri = __commonJS({
  "node_modules/es-errors/uri.js"(exports2, module2) {
    "use strict";
    module2.exports = URIError;
  }
});

// node_modules/math-intrinsics/abs.js
var require_abs = __commonJS({
  "node_modules/math-intrinsics/abs.js"(exports2, module2) {
    "use strict";
    module2.exports = Math.abs;
  }
});

// node_modules/math-intrinsics/floor.js
var require_floor = __commonJS({
  "node_modules/math-intrinsics/floor.js"(exports2, module2) {
    "use strict";
    module2.exports = Math.floor;
  }
});

// node_modules/math-intrinsics/max.js
var require_max = __commonJS({
  "node_modules/math-intrinsics/max.js"(exports2, module2) {
    "use strict";
    module2.exports = Math.max;
  }
});

// node_modules/math-intrinsics/min.js
var require_min = __commonJS({
  "node_modules/math-intrinsics/min.js"(exports2, module2) {
    "use strict";
    module2.exports = Math.min;
  }
});

// node_modules/math-intrinsics/pow.js
var require_pow = __commonJS({
  "node_modules/math-intrinsics/pow.js"(exports2, module2) {
    "use strict";
    module2.exports = Math.pow;
  }
});

// node_modules/math-intrinsics/round.js
var require_round = __commonJS({
  "node_modules/math-intrinsics/round.js"(exports2, module2) {
    "use strict";
    module2.exports = Math.round;
  }
});

// node_modules/math-intrinsics/isNaN.js
var require_isNaN = __commonJS({
  "node_modules/math-intrinsics/isNaN.js"(exports2, module2) {
    "use strict";
    module2.exports = Number.isNaN || function isNaN2(a) {
      return a !== a;
    };
  }
});

// node_modules/math-intrinsics/sign.js
var require_sign = __commonJS({
  "node_modules/math-intrinsics/sign.js"(exports2, module2) {
    "use strict";
    var $isNaN = require_isNaN();
    module2.exports = function sign(number) {
      if ($isNaN(number) || number === 0) {
        return number;
      }
      return number < 0 ? -1 : 1;
    };
  }
});

// node_modules/gopd/gOPD.js
var require_gOPD = __commonJS({
  "node_modules/gopd/gOPD.js"(exports2, module2) {
    "use strict";
    module2.exports = Object.getOwnPropertyDescriptor;
  }
});

// node_modules/gopd/index.js
var require_gopd = __commonJS({
  "node_modules/gopd/index.js"(exports2, module2) {
    "use strict";
    var $gOPD = require_gOPD();
    if ($gOPD) {
      try {
        $gOPD([], "length");
      } catch (e) {
        $gOPD = null;
      }
    }
    module2.exports = $gOPD;
  }
});

// node_modules/es-define-property/index.js
var require_es_define_property = __commonJS({
  "node_modules/es-define-property/index.js"(exports2, module2) {
    "use strict";
    var $defineProperty = Object.defineProperty || false;
    if ($defineProperty) {
      try {
        $defineProperty({}, "a", { value: 1 });
      } catch (e) {
        $defineProperty = false;
      }
    }
    module2.exports = $defineProperty;
  }
});

// node_modules/has-symbols/shams.js
var require_shams = __commonJS({
  "node_modules/has-symbols/shams.js"(exports2, module2) {
    "use strict";
    module2.exports = function hasSymbols() {
      if (typeof Symbol !== "function" || typeof Object.getOwnPropertySymbols !== "function") {
        return false;
      }
      if (typeof Symbol.iterator === "symbol") {
        return true;
      }
      var obj = {};
      var sym = /* @__PURE__ */ Symbol("test");
      var symObj = Object(sym);
      if (typeof sym === "string") {
        return false;
      }
      if (Object.prototype.toString.call(sym) !== "[object Symbol]") {
        return false;
      }
      if (Object.prototype.toString.call(symObj) !== "[object Symbol]") {
        return false;
      }
      var symVal = 42;
      obj[sym] = symVal;
      for (var _ in obj) {
        return false;
      }
      if (typeof Object.keys === "function" && Object.keys(obj).length !== 0) {
        return false;
      }
      if (typeof Object.getOwnPropertyNames === "function" && Object.getOwnPropertyNames(obj).length !== 0) {
        return false;
      }
      var syms = Object.getOwnPropertySymbols(obj);
      if (syms.length !== 1 || syms[0] !== sym) {
        return false;
      }
      if (!Object.prototype.propertyIsEnumerable.call(obj, sym)) {
        return false;
      }
      if (typeof Object.getOwnPropertyDescriptor === "function") {
        var descriptor = (
          /** @type {PropertyDescriptor} */
          Object.getOwnPropertyDescriptor(obj, sym)
        );
        if (descriptor.value !== symVal || descriptor.enumerable !== true) {
          return false;
        }
      }
      return true;
    };
  }
});

// node_modules/has-symbols/index.js
var require_has_symbols = __commonJS({
  "node_modules/has-symbols/index.js"(exports2, module2) {
    "use strict";
    var origSymbol = typeof Symbol !== "undefined" && Symbol;
    var hasSymbolSham = require_shams();
    module2.exports = function hasNativeSymbols() {
      if (typeof origSymbol !== "function") {
        return false;
      }
      if (typeof Symbol !== "function") {
        return false;
      }
      if (typeof origSymbol("foo") !== "symbol") {
        return false;
      }
      if (typeof /* @__PURE__ */ Symbol("bar") !== "symbol") {
        return false;
      }
      return hasSymbolSham();
    };
  }
});

// node_modules/get-proto/Reflect.getPrototypeOf.js
var require_Reflect_getPrototypeOf = __commonJS({
  "node_modules/get-proto/Reflect.getPrototypeOf.js"(exports2, module2) {
    "use strict";
    module2.exports = typeof Reflect !== "undefined" && Reflect.getPrototypeOf || null;
  }
});

// node_modules/get-proto/Object.getPrototypeOf.js
var require_Object_getPrototypeOf = __commonJS({
  "node_modules/get-proto/Object.getPrototypeOf.js"(exports2, module2) {
    "use strict";
    var $Object = require_es_object_atoms();
    module2.exports = $Object.getPrototypeOf || null;
  }
});

// node_modules/function-bind/implementation.js
var require_implementation = __commonJS({
  "node_modules/function-bind/implementation.js"(exports2, module2) {
    "use strict";
    var ERROR_MESSAGE = "Function.prototype.bind called on incompatible ";
    var toStr = Object.prototype.toString;
    var max = Math.max;
    var funcType = "[object Function]";
    var concatty = function concatty2(a, b) {
      var arr = [];
      for (var i = 0; i < a.length; i += 1) {
        arr[i] = a[i];
      }
      for (var j = 0; j < b.length; j += 1) {
        arr[j + a.length] = b[j];
      }
      return arr;
    };
    var slicy = function slicy2(arrLike, offset) {
      var arr = [];
      for (var i = offset || 0, j = 0; i < arrLike.length; i += 1, j += 1) {
        arr[j] = arrLike[i];
      }
      return arr;
    };
    var joiny = function(arr, joiner) {
      var str = "";
      for (var i = 0; i < arr.length; i += 1) {
        str += arr[i];
        if (i + 1 < arr.length) {
          str += joiner;
        }
      }
      return str;
    };
    module2.exports = function bind2(that) {
      var target = this;
      if (typeof target !== "function" || toStr.apply(target) !== funcType) {
        throw new TypeError(ERROR_MESSAGE + target);
      }
      var args = slicy(arguments, 1);
      var bound;
      var binder = function() {
        if (this instanceof bound) {
          var result = target.apply(
            this,
            concatty(args, arguments)
          );
          if (Object(result) === result) {
            return result;
          }
          return this;
        }
        return target.apply(
          that,
          concatty(args, arguments)
        );
      };
      var boundLength = max(0, target.length - args.length);
      var boundArgs = [];
      for (var i = 0; i < boundLength; i++) {
        boundArgs[i] = "$" + i;
      }
      bound = Function("binder", "return function (" + joiny(boundArgs, ",") + "){ return binder.apply(this,arguments); }")(binder);
      if (target.prototype) {
        var Empty = function Empty2() {
        };
        Empty.prototype = target.prototype;
        bound.prototype = new Empty();
        Empty.prototype = null;
      }
      return bound;
    };
  }
});

// node_modules/function-bind/index.js
var require_function_bind = __commonJS({
  "node_modules/function-bind/index.js"(exports2, module2) {
    "use strict";
    var implementation = require_implementation();
    module2.exports = Function.prototype.bind || implementation;
  }
});

// node_modules/call-bind-apply-helpers/functionCall.js
var require_functionCall = __commonJS({
  "node_modules/call-bind-apply-helpers/functionCall.js"(exports2, module2) {
    "use strict";
    module2.exports = Function.prototype.call;
  }
});

// node_modules/call-bind-apply-helpers/functionApply.js
var require_functionApply = __commonJS({
  "node_modules/call-bind-apply-helpers/functionApply.js"(exports2, module2) {
    "use strict";
    module2.exports = Function.prototype.apply;
  }
});

// node_modules/call-bind-apply-helpers/reflectApply.js
var require_reflectApply = __commonJS({
  "node_modules/call-bind-apply-helpers/reflectApply.js"(exports2, module2) {
    "use strict";
    module2.exports = typeof Reflect !== "undefined" && Reflect && Reflect.apply;
  }
});

// node_modules/call-bind-apply-helpers/actualApply.js
var require_actualApply = __commonJS({
  "node_modules/call-bind-apply-helpers/actualApply.js"(exports2, module2) {
    "use strict";
    var bind2 = require_function_bind();
    var $apply = require_functionApply();
    var $call = require_functionCall();
    var $reflectApply = require_reflectApply();
    module2.exports = $reflectApply || bind2.call($call, $apply);
  }
});

// node_modules/call-bind-apply-helpers/index.js
var require_call_bind_apply_helpers = __commonJS({
  "node_modules/call-bind-apply-helpers/index.js"(exports2, module2) {
    "use strict";
    var bind2 = require_function_bind();
    var $TypeError = require_type();
    var $call = require_functionCall();
    var $actualApply = require_actualApply();
    module2.exports = function callBindBasic(args) {
      if (args.length < 1 || typeof args[0] !== "function") {
        throw new $TypeError("a function is required");
      }
      return $actualApply(bind2, $call, args);
    };
  }
});

// node_modules/dunder-proto/get.js
var require_get = __commonJS({
  "node_modules/dunder-proto/get.js"(exports2, module2) {
    "use strict";
    var callBind = require_call_bind_apply_helpers();
    var gOPD = require_gopd();
    var hasProtoAccessor;
    try {
      hasProtoAccessor = /** @type {{ __proto__?: typeof Array.prototype }} */
      [].__proto__ === Array.prototype;
    } catch (e) {
      if (!e || typeof e !== "object" || !("code" in e) || e.code !== "ERR_PROTO_ACCESS") {
        throw e;
      }
    }
    var desc = !!hasProtoAccessor && gOPD && gOPD(
      Object.prototype,
      /** @type {keyof typeof Object.prototype} */
      "__proto__"
    );
    var $Object = Object;
    var $getPrototypeOf = $Object.getPrototypeOf;
    module2.exports = desc && typeof desc.get === "function" ? callBind([desc.get]) : typeof $getPrototypeOf === "function" ? (
      /** @type {import('./get')} */
      function getDunder(value) {
        return $getPrototypeOf(value == null ? value : $Object(value));
      }
    ) : false;
  }
});

// node_modules/get-proto/index.js
var require_get_proto = __commonJS({
  "node_modules/get-proto/index.js"(exports2, module2) {
    "use strict";
    var reflectGetProto = require_Reflect_getPrototypeOf();
    var originalGetProto = require_Object_getPrototypeOf();
    var getDunderProto = require_get();
    module2.exports = reflectGetProto ? function getProto(O) {
      return reflectGetProto(O);
    } : originalGetProto ? function getProto(O) {
      if (!O || typeof O !== "object" && typeof O !== "function") {
        throw new TypeError("getProto: not an object");
      }
      return originalGetProto(O);
    } : getDunderProto ? function getProto(O) {
      return getDunderProto(O);
    } : null;
  }
});

// node_modules/hasown/index.js
var require_hasown = __commonJS({
  "node_modules/hasown/index.js"(exports2, module2) {
    "use strict";
    var call = Function.prototype.call;
    var $hasOwn = Object.prototype.hasOwnProperty;
    var bind2 = require_function_bind();
    module2.exports = bind2.call(call, $hasOwn);
  }
});

// node_modules/get-intrinsic/index.js
var require_get_intrinsic = __commonJS({
  "node_modules/get-intrinsic/index.js"(exports2, module2) {
    "use strict";
    var undefined2;
    var $Object = require_es_object_atoms();
    var $Error = require_es_errors();
    var $EvalError = require_eval();
    var $RangeError = require_range();
    var $ReferenceError = require_ref();
    var $SyntaxError = require_syntax();
    var $TypeError = require_type();
    var $URIError = require_uri();
    var abs = require_abs();
    var floor = require_floor();
    var max = require_max();
    var min = require_min();
    var pow = require_pow();
    var round = require_round();
    var sign = require_sign();
    var $Function = Function;
    var getEvalledConstructor = function(expressionSyntax) {
      try {
        return $Function('"use strict"; return (' + expressionSyntax + ").constructor;")();
      } catch (e) {
      }
    };
    var $gOPD = require_gopd();
    var $defineProperty = require_es_define_property();
    var throwTypeError = function() {
      throw new $TypeError();
    };
    var ThrowTypeError = $gOPD ? (function() {
      try {
        arguments.callee;
        return throwTypeError;
      } catch (calleeThrows) {
        try {
          return $gOPD(arguments, "callee").get;
        } catch (gOPDthrows) {
          return throwTypeError;
        }
      }
    })() : throwTypeError;
    var hasSymbols = require_has_symbols()();
    var getProto = require_get_proto();
    var $ObjectGPO = require_Object_getPrototypeOf();
    var $ReflectGPO = require_Reflect_getPrototypeOf();
    var $apply = require_functionApply();
    var $call = require_functionCall();
    var needsEval = {};
    var TypedArray = typeof Uint8Array === "undefined" || !getProto ? undefined2 : getProto(Uint8Array);
    var INTRINSICS = {
      __proto__: null,
      "%AggregateError%": typeof AggregateError === "undefined" ? undefined2 : AggregateError,
      "%Array%": Array,
      "%ArrayBuffer%": typeof ArrayBuffer === "undefined" ? undefined2 : ArrayBuffer,
      "%ArrayIteratorPrototype%": hasSymbols && getProto ? getProto([][Symbol.iterator]()) : undefined2,
      "%AsyncFromSyncIteratorPrototype%": undefined2,
      "%AsyncFunction%": needsEval,
      "%AsyncGenerator%": needsEval,
      "%AsyncGeneratorFunction%": needsEval,
      "%AsyncIteratorPrototype%": needsEval,
      "%Atomics%": typeof Atomics === "undefined" ? undefined2 : Atomics,
      "%BigInt%": typeof BigInt === "undefined" ? undefined2 : BigInt,
      "%BigInt64Array%": typeof BigInt64Array === "undefined" ? undefined2 : BigInt64Array,
      "%BigUint64Array%": typeof BigUint64Array === "undefined" ? undefined2 : BigUint64Array,
      "%Boolean%": Boolean,
      "%DataView%": typeof DataView === "undefined" ? undefined2 : DataView,
      "%Date%": Date,
      "%decodeURI%": decodeURI,
      "%decodeURIComponent%": decodeURIComponent,
      "%encodeURI%": encodeURI,
      "%encodeURIComponent%": encodeURIComponent,
      "%Error%": $Error,
      "%eval%": eval,
      // eslint-disable-line no-eval
      "%EvalError%": $EvalError,
      "%Float16Array%": typeof Float16Array === "undefined" ? undefined2 : Float16Array,
      "%Float32Array%": typeof Float32Array === "undefined" ? undefined2 : Float32Array,
      "%Float64Array%": typeof Float64Array === "undefined" ? undefined2 : Float64Array,
      "%FinalizationRegistry%": typeof FinalizationRegistry === "undefined" ? undefined2 : FinalizationRegistry,
      "%Function%": $Function,
      "%GeneratorFunction%": needsEval,
      "%Int8Array%": typeof Int8Array === "undefined" ? undefined2 : Int8Array,
      "%Int16Array%": typeof Int16Array === "undefined" ? undefined2 : Int16Array,
      "%Int32Array%": typeof Int32Array === "undefined" ? undefined2 : Int32Array,
      "%isFinite%": isFinite,
      "%isNaN%": isNaN,
      "%IteratorPrototype%": hasSymbols && getProto ? getProto(getProto([][Symbol.iterator]())) : undefined2,
      "%JSON%": typeof JSON === "object" ? JSON : undefined2,
      "%Map%": typeof Map === "undefined" ? undefined2 : Map,
      "%MapIteratorPrototype%": typeof Map === "undefined" || !hasSymbols || !getProto ? undefined2 : getProto((/* @__PURE__ */ new Map())[Symbol.iterator]()),
      "%Math%": Math,
      "%Number%": Number,
      "%Object%": $Object,
      "%Object.getOwnPropertyDescriptor%": $gOPD,
      "%parseFloat%": parseFloat,
      "%parseInt%": parseInt,
      "%Promise%": typeof Promise === "undefined" ? undefined2 : Promise,
      "%Proxy%": typeof Proxy === "undefined" ? undefined2 : Proxy,
      "%RangeError%": $RangeError,
      "%ReferenceError%": $ReferenceError,
      "%Reflect%": typeof Reflect === "undefined" ? undefined2 : Reflect,
      "%RegExp%": RegExp,
      "%Set%": typeof Set === "undefined" ? undefined2 : Set,
      "%SetIteratorPrototype%": typeof Set === "undefined" || !hasSymbols || !getProto ? undefined2 : getProto((/* @__PURE__ */ new Set())[Symbol.iterator]()),
      "%SharedArrayBuffer%": typeof SharedArrayBuffer === "undefined" ? undefined2 : SharedArrayBuffer,
      "%String%": String,
      "%StringIteratorPrototype%": hasSymbols && getProto ? getProto(""[Symbol.iterator]()) : undefined2,
      "%Symbol%": hasSymbols ? Symbol : undefined2,
      "%SyntaxError%": $SyntaxError,
      "%ThrowTypeError%": ThrowTypeError,
      "%TypedArray%": TypedArray,
      "%TypeError%": $TypeError,
      "%Uint8Array%": typeof Uint8Array === "undefined" ? undefined2 : Uint8Array,
      "%Uint8ClampedArray%": typeof Uint8ClampedArray === "undefined" ? undefined2 : Uint8ClampedArray,
      "%Uint16Array%": typeof Uint16Array === "undefined" ? undefined2 : Uint16Array,
      "%Uint32Array%": typeof Uint32Array === "undefined" ? undefined2 : Uint32Array,
      "%URIError%": $URIError,
      "%WeakMap%": typeof WeakMap === "undefined" ? undefined2 : WeakMap,
      "%WeakRef%": typeof WeakRef === "undefined" ? undefined2 : WeakRef,
      "%WeakSet%": typeof WeakSet === "undefined" ? undefined2 : WeakSet,
      "%Function.prototype.call%": $call,
      "%Function.prototype.apply%": $apply,
      "%Object.defineProperty%": $defineProperty,
      "%Object.getPrototypeOf%": $ObjectGPO,
      "%Math.abs%": abs,
      "%Math.floor%": floor,
      "%Math.max%": max,
      "%Math.min%": min,
      "%Math.pow%": pow,
      "%Math.round%": round,
      "%Math.sign%": sign,
      "%Reflect.getPrototypeOf%": $ReflectGPO
    };
    if (getProto) {
      try {
        null.error;
      } catch (e) {
        errorProto = getProto(getProto(e));
        INTRINSICS["%Error.prototype%"] = errorProto;
      }
    }
    var errorProto;
    var doEval = function doEval2(name) {
      var value;
      if (name === "%AsyncFunction%") {
        value = getEvalledConstructor("async function () {}");
      } else if (name === "%GeneratorFunction%") {
        value = getEvalledConstructor("function* () {}");
      } else if (name === "%AsyncGeneratorFunction%") {
        value = getEvalledConstructor("async function* () {}");
      } else if (name === "%AsyncGenerator%") {
        var fn = doEval2("%AsyncGeneratorFunction%");
        if (fn) {
          value = fn.prototype;
        }
      } else if (name === "%AsyncIteratorPrototype%") {
        var gen = doEval2("%AsyncGenerator%");
        if (gen && getProto) {
          value = getProto(gen.prototype);
        }
      }
      INTRINSICS[name] = value;
      return value;
    };
    var LEGACY_ALIASES = {
      __proto__: null,
      "%ArrayBufferPrototype%": ["ArrayBuffer", "prototype"],
      "%ArrayPrototype%": ["Array", "prototype"],
      "%ArrayProto_entries%": ["Array", "prototype", "entries"],
      "%ArrayProto_forEach%": ["Array", "prototype", "forEach"],
      "%ArrayProto_keys%": ["Array", "prototype", "keys"],
      "%ArrayProto_values%": ["Array", "prototype", "values"],
      "%AsyncFunctionPrototype%": ["AsyncFunction", "prototype"],
      "%AsyncGenerator%": ["AsyncGeneratorFunction", "prototype"],
      "%AsyncGeneratorPrototype%": ["AsyncGeneratorFunction", "prototype", "prototype"],
      "%BooleanPrototype%": ["Boolean", "prototype"],
      "%DataViewPrototype%": ["DataView", "prototype"],
      "%DatePrototype%": ["Date", "prototype"],
      "%ErrorPrototype%": ["Error", "prototype"],
      "%EvalErrorPrototype%": ["EvalError", "prototype"],
      "%Float32ArrayPrototype%": ["Float32Array", "prototype"],
      "%Float64ArrayPrototype%": ["Float64Array", "prototype"],
      "%FunctionPrototype%": ["Function", "prototype"],
      "%Generator%": ["GeneratorFunction", "prototype"],
      "%GeneratorPrototype%": ["GeneratorFunction", "prototype", "prototype"],
      "%Int8ArrayPrototype%": ["Int8Array", "prototype"],
      "%Int16ArrayPrototype%": ["Int16Array", "prototype"],
      "%Int32ArrayPrototype%": ["Int32Array", "prototype"],
      "%JSONParse%": ["JSON", "parse"],
      "%JSONStringify%": ["JSON", "stringify"],
      "%MapPrototype%": ["Map", "prototype"],
      "%NumberPrototype%": ["Number", "prototype"],
      "%ObjectPrototype%": ["Object", "prototype"],
      "%ObjProto_toString%": ["Object", "prototype", "toString"],
      "%ObjProto_valueOf%": ["Object", "prototype", "valueOf"],
      "%PromisePrototype%": ["Promise", "prototype"],
      "%PromiseProto_then%": ["Promise", "prototype", "then"],
      "%Promise_all%": ["Promise", "all"],
      "%Promise_reject%": ["Promise", "reject"],
      "%Promise_resolve%": ["Promise", "resolve"],
      "%RangeErrorPrototype%": ["RangeError", "prototype"],
      "%ReferenceErrorPrototype%": ["ReferenceError", "prototype"],
      "%RegExpPrototype%": ["RegExp", "prototype"],
      "%SetPrototype%": ["Set", "prototype"],
      "%SharedArrayBufferPrototype%": ["SharedArrayBuffer", "prototype"],
      "%StringPrototype%": ["String", "prototype"],
      "%SymbolPrototype%": ["Symbol", "prototype"],
      "%SyntaxErrorPrototype%": ["SyntaxError", "prototype"],
      "%TypedArrayPrototype%": ["TypedArray", "prototype"],
      "%TypeErrorPrototype%": ["TypeError", "prototype"],
      "%Uint8ArrayPrototype%": ["Uint8Array", "prototype"],
      "%Uint8ClampedArrayPrototype%": ["Uint8ClampedArray", "prototype"],
      "%Uint16ArrayPrototype%": ["Uint16Array", "prototype"],
      "%Uint32ArrayPrototype%": ["Uint32Array", "prototype"],
      "%URIErrorPrototype%": ["URIError", "prototype"],
      "%WeakMapPrototype%": ["WeakMap", "prototype"],
      "%WeakSetPrototype%": ["WeakSet", "prototype"]
    };
    var bind2 = require_function_bind();
    var hasOwn = require_hasown();
    var $concat = bind2.call($call, Array.prototype.concat);
    var $spliceApply = bind2.call($apply, Array.prototype.splice);
    var $replace = bind2.call($call, String.prototype.replace);
    var $strSlice = bind2.call($call, String.prototype.slice);
    var $exec = bind2.call($call, RegExp.prototype.exec);
    var rePropName = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g;
    var reEscapeChar = /\\(\\)?/g;
    var stringToPath = function stringToPath2(string) {
      var first = $strSlice(string, 0, 1);
      var last = $strSlice(string, -1);
      if (first === "%" && last !== "%") {
        throw new $SyntaxError("invalid intrinsic syntax, expected closing `%`");
      } else if (last === "%" && first !== "%") {
        throw new $SyntaxError("invalid intrinsic syntax, expected opening `%`");
      }
      var result = [];
      $replace(string, rePropName, function(match, number, quote, subString) {
        result[result.length] = quote ? $replace(subString, reEscapeChar, "$1") : number || match;
      });
      return result;
    };
    var getBaseIntrinsic = function getBaseIntrinsic2(name, allowMissing) {
      var intrinsicName = name;
      var alias;
      if (hasOwn(LEGACY_ALIASES, intrinsicName)) {
        alias = LEGACY_ALIASES[intrinsicName];
        intrinsicName = "%" + alias[0] + "%";
      }
      if (hasOwn(INTRINSICS, intrinsicName)) {
        var value = INTRINSICS[intrinsicName];
        if (value === needsEval) {
          value = doEval(intrinsicName);
        }
        if (typeof value === "undefined" && !allowMissing) {
          throw new $TypeError("intrinsic " + name + " exists, but is not available. Please file an issue!");
        }
        return {
          alias,
          name: intrinsicName,
          value
        };
      }
      throw new $SyntaxError("intrinsic " + name + " does not exist!");
    };
    module2.exports = function GetIntrinsic(name, allowMissing) {
      if (typeof name !== "string" || name.length === 0) {
        throw new $TypeError("intrinsic name must be a non-empty string");
      }
      if (arguments.length > 1 && typeof allowMissing !== "boolean") {
        throw new $TypeError('"allowMissing" argument must be a boolean');
      }
      if ($exec(/^%?[^%]*%?$/, name) === null) {
        throw new $SyntaxError("`%` may not be present anywhere but at the beginning and end of the intrinsic name");
      }
      var parts = stringToPath(name);
      var intrinsicBaseName = parts.length > 0 ? parts[0] : "";
      var intrinsic = getBaseIntrinsic("%" + intrinsicBaseName + "%", allowMissing);
      var intrinsicRealName = intrinsic.name;
      var value = intrinsic.value;
      var skipFurtherCaching = false;
      var alias = intrinsic.alias;
      if (alias) {
        intrinsicBaseName = alias[0];
        $spliceApply(parts, $concat([0, 1], alias));
      }
      for (var i = 1, isOwn = true; i < parts.length; i += 1) {
        var part = parts[i];
        var first = $strSlice(part, 0, 1);
        var last = $strSlice(part, -1);
        if ((first === '"' || first === "'" || first === "`" || (last === '"' || last === "'" || last === "`")) && first !== last) {
          throw new $SyntaxError("property names with quotes must have matching quotes");
        }
        if (part === "constructor" || !isOwn) {
          skipFurtherCaching = true;
        }
        intrinsicBaseName += "." + part;
        intrinsicRealName = "%" + intrinsicBaseName + "%";
        if (hasOwn(INTRINSICS, intrinsicRealName)) {
          value = INTRINSICS[intrinsicRealName];
        } else if (value != null) {
          if (!(part in value)) {
            if (!allowMissing) {
              throw new $TypeError("base intrinsic for " + name + " exists, but the property is not available.");
            }
            return void undefined2;
          }
          if ($gOPD && i + 1 >= parts.length) {
            var desc = $gOPD(value, part);
            isOwn = !!desc;
            if (isOwn && "get" in desc && !("originalValue" in desc.get)) {
              value = desc.get;
            } else {
              value = value[part];
            }
          } else {
            isOwn = hasOwn(value, part);
            value = value[part];
          }
          if (isOwn && !skipFurtherCaching) {
            INTRINSICS[intrinsicRealName] = value;
          }
        }
      }
      return value;
    };
  }
});

// node_modules/has-tostringtag/shams.js
var require_shams2 = __commonJS({
  "node_modules/has-tostringtag/shams.js"(exports2, module2) {
    "use strict";
    var hasSymbols = require_shams();
    module2.exports = function hasToStringTagShams() {
      return hasSymbols() && !!Symbol.toStringTag;
    };
  }
});

// node_modules/es-set-tostringtag/index.js
var require_es_set_tostringtag = __commonJS({
  "node_modules/es-set-tostringtag/index.js"(exports2, module2) {
    "use strict";
    var GetIntrinsic = require_get_intrinsic();
    var $defineProperty = GetIntrinsic("%Object.defineProperty%", true);
    var hasToStringTag = require_shams2()();
    var hasOwn = require_hasown();
    var $TypeError = require_type();
    var toStringTag2 = hasToStringTag ? Symbol.toStringTag : null;
    module2.exports = function setToStringTag(object, value) {
      var overrideIfSet = arguments.length > 2 && !!arguments[2] && arguments[2].force;
      var nonConfigurable = arguments.length > 2 && !!arguments[2] && arguments[2].nonConfigurable;
      if (typeof overrideIfSet !== "undefined" && typeof overrideIfSet !== "boolean" || typeof nonConfigurable !== "undefined" && typeof nonConfigurable !== "boolean") {
        throw new $TypeError("if provided, the `overrideIfSet` and `nonConfigurable` options must be booleans");
      }
      if (toStringTag2 && (overrideIfSet || !hasOwn(object, toStringTag2))) {
        if ($defineProperty) {
          $defineProperty(object, toStringTag2, {
            configurable: !nonConfigurable,
            enumerable: false,
            value,
            writable: false
          });
        } else {
          object[toStringTag2] = value;
        }
      }
    };
  }
});

// node_modules/form-data/lib/populate.js
var require_populate = __commonJS({
  "node_modules/form-data/lib/populate.js"(exports2, module2) {
    "use strict";
    module2.exports = function(dst, src) {
      Object.keys(src).forEach(function(prop) {
        dst[prop] = dst[prop] || src[prop];
      });
      return dst;
    };
  }
});

// node_modules/form-data/lib/form_data.js
var require_form_data = __commonJS({
  "node_modules/form-data/lib/form_data.js"(exports2, module2) {
    "use strict";
    var CombinedStream = require_combined_stream();
    var util4 = require("util");
    var path4 = require("path");
    var http3 = require("http");
    var https2 = require("https");
    var parseUrl2 = require("url").parse;
    var fs2 = require("fs");
    var Stream = require("stream").Stream;
    var crypto2 = require("crypto");
    var mime = require_mime_types();
    var asynckit = require_asynckit();
    var setToStringTag = require_es_set_tostringtag();
    var hasOwn = require_hasown();
    var populate = require_populate();
    function escapeHeaderParam(str) {
      return String(str).replace(/\r/g, "%0D").replace(/\n/g, "%0A").replace(/"/g, "%22");
    }
    function FormData3(options) {
      if (!(this instanceof FormData3)) {
        return new FormData3(options);
      }
      this._overheadLength = 0;
      this._valueLength = 0;
      this._valuesToMeasure = [];
      CombinedStream.call(this);
      options = options || {};
      for (var option in options) {
        this[option] = options[option];
      }
    }
    util4.inherits(FormData3, CombinedStream);
    FormData3.LINE_BREAK = "\r\n";
    FormData3.DEFAULT_CONTENT_TYPE = "application/octet-stream";
    FormData3.prototype.append = function(field, value, options) {
      options = options || {};
      if (typeof options === "string") {
        options = { filename: options };
      }
      var append2 = CombinedStream.prototype.append.bind(this);
      if (typeof value === "number" || value == null) {
        value = String(value);
      }
      if (Array.isArray(value)) {
        this._error(new Error("Arrays are not supported."));
        return;
      }
      var header = this._multiPartHeader(field, value, options);
      var footer = this._multiPartFooter();
      append2(header);
      append2(value);
      append2(footer);
      this._trackLength(header, value, options);
    };
    FormData3.prototype._trackLength = function(header, value, options) {
      var valueLength = 0;
      if (options.knownLength != null) {
        valueLength += Number(options.knownLength);
      } else if (Buffer.isBuffer(value)) {
        valueLength = value.length;
      } else if (typeof value === "string") {
        valueLength = Buffer.byteLength(value);
      }
      this._valueLength += valueLength;
      this._overheadLength += Buffer.byteLength(header) + FormData3.LINE_BREAK.length;
      if (!value || !value.path && !(value.readable && hasOwn(value, "httpVersion")) && !(value instanceof Stream)) {
        return;
      }
      if (!options.knownLength) {
        this._valuesToMeasure.push(value);
      }
    };
    FormData3.prototype._lengthRetriever = function(value, callback) {
      if (hasOwn(value, "fd")) {
        if (value.end != void 0 && value.end != Infinity && value.start != void 0) {
          callback(null, value.end + 1 - (value.start ? value.start : 0));
        } else {
          fs2.stat(value.path, function(err, stat) {
            if (err) {
              callback(err);
              return;
            }
            var fileSize = stat.size - (value.start ? value.start : 0);
            callback(null, fileSize);
          });
        }
      } else if (hasOwn(value, "httpVersion")) {
        callback(null, Number(value.headers["content-length"]));
      } else if (hasOwn(value, "httpModule")) {
        value.on("response", function(response) {
          value.pause();
          callback(null, Number(response.headers["content-length"]));
        });
        value.resume();
      } else {
        callback("Unknown stream");
      }
    };
    FormData3.prototype._multiPartHeader = function(field, value, options) {
      if (typeof options.header === "string") {
        return options.header;
      }
      var contentDisposition = this._getContentDisposition(value, options);
      var contentType = this._getContentType(value, options);
      var contents = "";
      var headers = {
        // add custom disposition as third element or keep it two elements if not
        "Content-Disposition": ["form-data", 'name="' + escapeHeaderParam(field) + '"'].concat(contentDisposition || []),
        // if no content type. allow it to be empty array
        "Content-Type": [].concat(contentType || [])
      };
      if (typeof options.header === "object") {
        populate(headers, options.header);
      }
      var header;
      for (var prop in headers) {
        if (hasOwn(headers, prop)) {
          header = headers[prop];
          if (header == null) {
            continue;
          }
          if (!Array.isArray(header)) {
            header = [header];
          }
          if (header.length) {
            contents += prop + ": " + header.join("; ") + FormData3.LINE_BREAK;
          }
        }
      }
      return "--" + this.getBoundary() + FormData3.LINE_BREAK + contents + FormData3.LINE_BREAK;
    };
    FormData3.prototype._getContentDisposition = function(value, options) {
      var filename;
      if (typeof options.filepath === "string") {
        filename = path4.normalize(options.filepath).replace(/\\/g, "/");
      } else if (options.filename || value && (value.name || value.path)) {
        filename = path4.basename(options.filename || value && (value.name || value.path));
      } else if (value && value.readable && hasOwn(value, "httpVersion")) {
        filename = path4.basename(value.client._httpMessage.path || "");
      }
      if (filename) {
        return 'filename="' + escapeHeaderParam(filename) + '"';
      }
    };
    FormData3.prototype._getContentType = function(value, options) {
      var contentType = options.contentType;
      if (!contentType && value && value.name) {
        contentType = mime.lookup(value.name);
      }
      if (!contentType && value && value.path) {
        contentType = mime.lookup(value.path);
      }
      if (!contentType && value && value.readable && hasOwn(value, "httpVersion")) {
        contentType = value.headers["content-type"];
      }
      if (!contentType && (options.filepath || options.filename)) {
        contentType = mime.lookup(options.filepath || options.filename);
      }
      if (!contentType && value && typeof value === "object") {
        contentType = FormData3.DEFAULT_CONTENT_TYPE;
      }
      return contentType;
    };
    FormData3.prototype._multiPartFooter = function() {
      return function(next) {
        var footer = FormData3.LINE_BREAK;
        var lastPart = this._streams.length === 0;
        if (lastPart) {
          footer += this._lastBoundary();
        }
        next(footer);
      }.bind(this);
    };
    FormData3.prototype._lastBoundary = function() {
      return "--" + this.getBoundary() + "--" + FormData3.LINE_BREAK;
    };
    FormData3.prototype.getHeaders = function(userHeaders) {
      var header;
      var formHeaders = {
        "content-type": "multipart/form-data; boundary=" + this.getBoundary()
      };
      for (header in userHeaders) {
        if (hasOwn(userHeaders, header)) {
          formHeaders[header.toLowerCase()] = userHeaders[header];
        }
      }
      return formHeaders;
    };
    FormData3.prototype.setBoundary = function(boundary) {
      if (typeof boundary !== "string") {
        throw new TypeError("FormData boundary must be a string");
      }
      this._boundary = boundary;
    };
    FormData3.prototype.getBoundary = function() {
      if (!this._boundary) {
        this._generateBoundary();
      }
      return this._boundary;
    };
    FormData3.prototype.getBuffer = function() {
      var dataBuffer = new Buffer.alloc(0);
      var boundary = this.getBoundary();
      for (var i = 0, len = this._streams.length; i < len; i++) {
        if (typeof this._streams[i] !== "function") {
          if (Buffer.isBuffer(this._streams[i])) {
            dataBuffer = Buffer.concat([dataBuffer, this._streams[i]]);
          } else {
            dataBuffer = Buffer.concat([dataBuffer, Buffer.from(this._streams[i])]);
          }
          if (typeof this._streams[i] !== "string" || this._streams[i].substring(2, boundary.length + 2) !== boundary) {
            dataBuffer = Buffer.concat([dataBuffer, Buffer.from(FormData3.LINE_BREAK)]);
          }
        }
      }
      return Buffer.concat([dataBuffer, Buffer.from(this._lastBoundary())]);
    };
    FormData3.prototype._generateBoundary = function() {
      this._boundary = "--------------------------" + crypto2.randomBytes(12).toString("hex");
    };
    FormData3.prototype.getLengthSync = function() {
      var knownLength = this._overheadLength + this._valueLength;
      if (this._streams.length) {
        knownLength += this._lastBoundary().length;
      }
      if (!this.hasKnownLength()) {
        this._error(new Error("Cannot calculate proper length in synchronous way."));
      }
      return knownLength;
    };
    FormData3.prototype.hasKnownLength = function() {
      var hasKnownLength = true;
      if (this._valuesToMeasure.length) {
        hasKnownLength = false;
      }
      return hasKnownLength;
    };
    FormData3.prototype.getLength = function(cb) {
      var knownLength = this._overheadLength + this._valueLength;
      if (this._streams.length) {
        knownLength += this._lastBoundary().length;
      }
      if (!this._valuesToMeasure.length) {
        process.nextTick(cb.bind(this, null, knownLength));
        return;
      }
      asynckit.parallel(this._valuesToMeasure, this._lengthRetriever, function(err, values) {
        if (err) {
          cb(err);
          return;
        }
        values.forEach(function(length) {
          knownLength += length;
        });
        cb(null, knownLength);
      });
    };
    FormData3.prototype.submit = function(params, cb) {
      var request;
      var options;
      var defaults2 = { method: "post" };
      if (typeof params === "string") {
        params = parseUrl2(params);
        options = populate({
          port: params.port,
          path: params.pathname,
          host: params.hostname,
          protocol: params.protocol
        }, defaults2);
      } else {
        options = populate(params, defaults2);
        if (!options.port) {
          options.port = options.protocol === "https:" ? 443 : 80;
        }
      }
      options.headers = this.getHeaders(params.headers);
      if (options.protocol === "https:") {
        request = https2.request(options);
      } else {
        request = http3.request(options);
      }
      this.getLength(function(err, length) {
        if (err && err !== "Unknown stream") {
          this._error(err);
          return;
        }
        if (length) {
          request.setHeader("Content-Length", length);
        }
        this.pipe(request);
        if (cb) {
          var onResponse;
          var callback = function(error, responce) {
            request.removeListener("error", callback);
            request.removeListener("response", onResponse);
            return cb.call(this, error, responce);
          };
          onResponse = callback.bind(this, null);
          request.on("error", callback);
          request.on("response", onResponse);
        }
      }.bind(this));
      return request;
    };
    FormData3.prototype._error = function(err) {
      if (!this.error) {
        this.error = err;
        this.pause();
        this.emit("error", err);
      }
    };
    FormData3.prototype.toString = function() {
      return "[object FormData]";
    };
    setToStringTag(FormData3.prototype, "FormData");
    module2.exports = FormData3;
  }
});

// node_modules/ms/index.js
var require_ms = __commonJS({
  "node_modules/ms/index.js"(exports2, module2) {
    var s = 1e3;
    var m = s * 60;
    var h = m * 60;
    var d = h * 24;
    var w = d * 7;
    var y = d * 365.25;
    module2.exports = function(val, options) {
      options = options || {};
      var type = typeof val;
      if (type === "string" && val.length > 0) {
        return parse(val);
      } else if (type === "number" && isFinite(val)) {
        return options.long ? fmtLong(val) : fmtShort(val);
      }
      throw new Error(
        "val is not a non-empty string or a valid number. val=" + JSON.stringify(val)
      );
    };
    function parse(str) {
      str = String(str);
      if (str.length > 100) {
        return;
      }
      var match = /^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(
        str
      );
      if (!match) {
        return;
      }
      var n = parseFloat(match[1]);
      var type = (match[2] || "ms").toLowerCase();
      switch (type) {
        case "years":
        case "year":
        case "yrs":
        case "yr":
        case "y":
          return n * y;
        case "weeks":
        case "week":
        case "w":
          return n * w;
        case "days":
        case "day":
        case "d":
          return n * d;
        case "hours":
        case "hour":
        case "hrs":
        case "hr":
        case "h":
          return n * h;
        case "minutes":
        case "minute":
        case "mins":
        case "min":
        case "m":
          return n * m;
        case "seconds":
        case "second":
        case "secs":
        case "sec":
        case "s":
          return n * s;
        case "milliseconds":
        case "millisecond":
        case "msecs":
        case "msec":
        case "ms":
          return n;
        default:
          return void 0;
      }
    }
    function fmtShort(ms) {
      var msAbs = Math.abs(ms);
      if (msAbs >= d) {
        return Math.round(ms / d) + "d";
      }
      if (msAbs >= h) {
        return Math.round(ms / h) + "h";
      }
      if (msAbs >= m) {
        return Math.round(ms / m) + "m";
      }
      if (msAbs >= s) {
        return Math.round(ms / s) + "s";
      }
      return ms + "ms";
    }
    function fmtLong(ms) {
      var msAbs = Math.abs(ms);
      if (msAbs >= d) {
        return plural(ms, msAbs, d, "day");
      }
      if (msAbs >= h) {
        return plural(ms, msAbs, h, "hour");
      }
      if (msAbs >= m) {
        return plural(ms, msAbs, m, "minute");
      }
      if (msAbs >= s) {
        return plural(ms, msAbs, s, "second");
      }
      return ms + " ms";
    }
    function plural(ms, msAbs, n, name) {
      var isPlural = msAbs >= n * 1.5;
      return Math.round(ms / n) + " " + name + (isPlural ? "s" : "");
    }
  }
});

// node_modules/debug/src/common.js
var require_common = __commonJS({
  "node_modules/debug/src/common.js"(exports2, module2) {
    function setup(env) {
      createDebug.debug = createDebug;
      createDebug.default = createDebug;
      createDebug.coerce = coerce;
      createDebug.disable = disable;
      createDebug.enable = enable;
      createDebug.enabled = enabled;
      createDebug.humanize = require_ms();
      createDebug.destroy = destroy;
      Object.keys(env).forEach((key) => {
        createDebug[key] = env[key];
      });
      createDebug.names = [];
      createDebug.skips = [];
      createDebug.formatters = {};
      function selectColor(namespace) {
        let hash = 0;
        for (let i = 0; i < namespace.length; i++) {
          hash = (hash << 5) - hash + namespace.charCodeAt(i);
          hash |= 0;
        }
        return createDebug.colors[Math.abs(hash) % createDebug.colors.length];
      }
      createDebug.selectColor = selectColor;
      function createDebug(namespace) {
        let prevTime;
        let enableOverride = null;
        let namespacesCache;
        let enabledCache;
        function debug(...args) {
          if (!debug.enabled) {
            return;
          }
          const self2 = debug;
          const curr = Number(/* @__PURE__ */ new Date());
          const ms = curr - (prevTime || curr);
          self2.diff = ms;
          self2.prev = prevTime;
          self2.curr = curr;
          prevTime = curr;
          args[0] = createDebug.coerce(args[0]);
          if (typeof args[0] !== "string") {
            args.unshift("%O");
          }
          let index = 0;
          args[0] = args[0].replace(/%([a-zA-Z%])/g, (match, format) => {
            if (match === "%%") {
              return "%";
            }
            index++;
            const formatter = createDebug.formatters[format];
            if (typeof formatter === "function") {
              const val = args[index];
              match = formatter.call(self2, val);
              args.splice(index, 1);
              index--;
            }
            return match;
          });
          createDebug.formatArgs.call(self2, args);
          const logFn = self2.log || createDebug.log;
          logFn.apply(self2, args);
        }
        debug.namespace = namespace;
        debug.useColors = createDebug.useColors();
        debug.color = createDebug.selectColor(namespace);
        debug.extend = extend2;
        debug.destroy = createDebug.destroy;
        Object.defineProperty(debug, "enabled", {
          enumerable: true,
          configurable: false,
          get: () => {
            if (enableOverride !== null) {
              return enableOverride;
            }
            if (namespacesCache !== createDebug.namespaces) {
              namespacesCache = createDebug.namespaces;
              enabledCache = createDebug.enabled(namespace);
            }
            return enabledCache;
          },
          set: (v) => {
            enableOverride = v;
          }
        });
        if (typeof createDebug.init === "function") {
          createDebug.init(debug);
        }
        return debug;
      }
      function extend2(namespace, delimiter) {
        const newDebug = createDebug(this.namespace + (typeof delimiter === "undefined" ? ":" : delimiter) + namespace);
        newDebug.log = this.log;
        return newDebug;
      }
      function enable(namespaces) {
        createDebug.save(namespaces);
        createDebug.namespaces = namespaces;
        createDebug.names = [];
        createDebug.skips = [];
        const split = (typeof namespaces === "string" ? namespaces : "").trim().replace(/\s+/g, ",").split(",").filter(Boolean);
        for (const ns of split) {
          if (ns[0] === "-") {
            createDebug.skips.push(ns.slice(1));
          } else {
            createDebug.names.push(ns);
          }
        }
      }
      function matchesTemplate(search, template) {
        let searchIndex = 0;
        let templateIndex = 0;
        let starIndex = -1;
        let matchIndex = 0;
        while (searchIndex < search.length) {
          if (templateIndex < template.length && (template[templateIndex] === search[searchIndex] || template[templateIndex] === "*")) {
            if (template[templateIndex] === "*") {
              starIndex = templateIndex;
              matchIndex = searchIndex;
              templateIndex++;
            } else {
              searchIndex++;
              templateIndex++;
            }
          } else if (starIndex !== -1) {
            templateIndex = starIndex + 1;
            matchIndex++;
            searchIndex = matchIndex;
          } else {
            return false;
          }
        }
        while (templateIndex < template.length && template[templateIndex] === "*") {
          templateIndex++;
        }
        return templateIndex === template.length;
      }
      function disable() {
        const namespaces = [
          ...createDebug.names,
          ...createDebug.skips.map((namespace) => "-" + namespace)
        ].join(",");
        createDebug.enable("");
        return namespaces;
      }
      function enabled(name) {
        for (const skip of createDebug.skips) {
          if (matchesTemplate(name, skip)) {
            return false;
          }
        }
        for (const ns of createDebug.names) {
          if (matchesTemplate(name, ns)) {
            return true;
          }
        }
        return false;
      }
      function coerce(val) {
        if (val instanceof Error) {
          return val.stack || val.message;
        }
        return val;
      }
      function destroy() {
        console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.");
      }
      createDebug.enable(createDebug.load());
      return createDebug;
    }
    module2.exports = setup;
  }
});

// node_modules/debug/src/browser.js
var require_browser = __commonJS({
  "node_modules/debug/src/browser.js"(exports2, module2) {
    exports2.formatArgs = formatArgs;
    exports2.save = save;
    exports2.load = load;
    exports2.useColors = useColors;
    exports2.storage = localstorage();
    exports2.destroy = /* @__PURE__ */ (() => {
      let warned = false;
      return () => {
        if (!warned) {
          warned = true;
          console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.");
        }
      };
    })();
    exports2.colors = [
      "#0000CC",
      "#0000FF",
      "#0033CC",
      "#0033FF",
      "#0066CC",
      "#0066FF",
      "#0099CC",
      "#0099FF",
      "#00CC00",
      "#00CC33",
      "#00CC66",
      "#00CC99",
      "#00CCCC",
      "#00CCFF",
      "#3300CC",
      "#3300FF",
      "#3333CC",
      "#3333FF",
      "#3366CC",
      "#3366FF",
      "#3399CC",
      "#3399FF",
      "#33CC00",
      "#33CC33",
      "#33CC66",
      "#33CC99",
      "#33CCCC",
      "#33CCFF",
      "#6600CC",
      "#6600FF",
      "#6633CC",
      "#6633FF",
      "#66CC00",
      "#66CC33",
      "#9900CC",
      "#9900FF",
      "#9933CC",
      "#9933FF",
      "#99CC00",
      "#99CC33",
      "#CC0000",
      "#CC0033",
      "#CC0066",
      "#CC0099",
      "#CC00CC",
      "#CC00FF",
      "#CC3300",
      "#CC3333",
      "#CC3366",
      "#CC3399",
      "#CC33CC",
      "#CC33FF",
      "#CC6600",
      "#CC6633",
      "#CC9900",
      "#CC9933",
      "#CCCC00",
      "#CCCC33",
      "#FF0000",
      "#FF0033",
      "#FF0066",
      "#FF0099",
      "#FF00CC",
      "#FF00FF",
      "#FF3300",
      "#FF3333",
      "#FF3366",
      "#FF3399",
      "#FF33CC",
      "#FF33FF",
      "#FF6600",
      "#FF6633",
      "#FF9900",
      "#FF9933",
      "#FFCC00",
      "#FFCC33"
    ];
    function useColors() {
      if (typeof window !== "undefined" && window.process && (window.process.type === "renderer" || window.process.__nwjs)) {
        return true;
      }
      if (typeof navigator !== "undefined" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/)) {
        return false;
      }
      let m;
      return typeof document !== "undefined" && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance || // Is firebug? http://stackoverflow.com/a/398120/376773
      typeof window !== "undefined" && window.console && (window.console.firebug || window.console.exception && window.console.table) || // Is firefox >= v31?
      // https://developer.mozilla.org/en-US/docs/Tools/Web_Console#Styling_messages
      typeof navigator !== "undefined" && navigator.userAgent && (m = navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/)) && parseInt(m[1], 10) >= 31 || // Double check webkit in userAgent just in case we are in a worker
      typeof navigator !== "undefined" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/);
    }
    function formatArgs(args) {
      args[0] = (this.useColors ? "%c" : "") + this.namespace + (this.useColors ? " %c" : " ") + args[0] + (this.useColors ? "%c " : " ") + "+" + module2.exports.humanize(this.diff);
      if (!this.useColors) {
        return;
      }
      const c = "color: " + this.color;
      args.splice(1, 0, c, "color: inherit");
      let index = 0;
      let lastC = 0;
      args[0].replace(/%[a-zA-Z%]/g, (match) => {
        if (match === "%%") {
          return;
        }
        index++;
        if (match === "%c") {
          lastC = index;
        }
      });
      args.splice(lastC, 0, c);
    }
    exports2.log = console.debug || console.log || (() => {
    });
    function save(namespaces) {
      try {
        if (namespaces) {
          exports2.storage.setItem("debug", namespaces);
        } else {
          exports2.storage.removeItem("debug");
        }
      } catch (error) {
      }
    }
    function load() {
      let r;
      try {
        r = exports2.storage.getItem("debug") || exports2.storage.getItem("DEBUG");
      } catch (error) {
      }
      if (!r && typeof process !== "undefined" && "env" in process) {
        r = process.env.DEBUG;
      }
      return r;
    }
    function localstorage() {
      try {
        return localStorage;
      } catch (error) {
      }
    }
    module2.exports = require_common()(exports2);
    var { formatters } = module2.exports;
    formatters.j = function(v) {
      try {
        return JSON.stringify(v);
      } catch (error) {
        return "[UnexpectedJSONParseError]: " + error.message;
      }
    };
  }
});

// node_modules/has-flag/index.js
var require_has_flag = __commonJS({
  "node_modules/has-flag/index.js"(exports2, module2) {
    "use strict";
    module2.exports = (flag, argv = process.argv) => {
      const prefix = flag.startsWith("-") ? "" : flag.length === 1 ? "-" : "--";
      const position = argv.indexOf(prefix + flag);
      const terminatorPosition = argv.indexOf("--");
      return position !== -1 && (terminatorPosition === -1 || position < terminatorPosition);
    };
  }
});

// node_modules/supports-color/index.js
var require_supports_color = __commonJS({
  "node_modules/supports-color/index.js"(exports2, module2) {
    "use strict";
    var os2 = require("os");
    var tty = require("tty");
    var hasFlag = require_has_flag();
    var { env } = process;
    var forceColor;
    if (hasFlag("no-color") || hasFlag("no-colors") || hasFlag("color=false") || hasFlag("color=never")) {
      forceColor = 0;
    } else if (hasFlag("color") || hasFlag("colors") || hasFlag("color=true") || hasFlag("color=always")) {
      forceColor = 1;
    }
    if ("FORCE_COLOR" in env) {
      if (env.FORCE_COLOR === "true") {
        forceColor = 1;
      } else if (env.FORCE_COLOR === "false") {
        forceColor = 0;
      } else {
        forceColor = env.FORCE_COLOR.length === 0 ? 1 : Math.min(parseInt(env.FORCE_COLOR, 10), 3);
      }
    }
    function translateLevel(level) {
      if (level === 0) {
        return false;
      }
      return {
        level,
        hasBasic: true,
        has256: level >= 2,
        has16m: level >= 3
      };
    }
    function supportsColor(haveStream, streamIsTTY) {
      if (forceColor === 0) {
        return 0;
      }
      if (hasFlag("color=16m") || hasFlag("color=full") || hasFlag("color=truecolor")) {
        return 3;
      }
      if (hasFlag("color=256")) {
        return 2;
      }
      if (haveStream && !streamIsTTY && forceColor === void 0) {
        return 0;
      }
      const min = forceColor || 0;
      if (env.TERM === "dumb") {
        return min;
      }
      if (process.platform === "win32") {
        const osRelease = os2.release().split(".");
        if (Number(osRelease[0]) >= 10 && Number(osRelease[2]) >= 10586) {
          return Number(osRelease[2]) >= 14931 ? 3 : 2;
        }
        return 1;
      }
      if ("CI" in env) {
        if (["TRAVIS", "CIRCLECI", "APPVEYOR", "GITLAB_CI", "GITHUB_ACTIONS", "BUILDKITE"].some((sign) => sign in env) || env.CI_NAME === "codeship") {
          return 1;
        }
        return min;
      }
      if ("TEAMCITY_VERSION" in env) {
        return /^(9\.(0*[1-9]\d*)\.|\d{2,}\.)/.test(env.TEAMCITY_VERSION) ? 1 : 0;
      }
      if (env.COLORTERM === "truecolor") {
        return 3;
      }
      if ("TERM_PROGRAM" in env) {
        const version = parseInt((env.TERM_PROGRAM_VERSION || "").split(".")[0], 10);
        switch (env.TERM_PROGRAM) {
          case "iTerm.app":
            return version >= 3 ? 3 : 2;
          case "Apple_Terminal":
            return 2;
        }
      }
      if (/-256(color)?$/i.test(env.TERM)) {
        return 2;
      }
      if (/^screen|^xterm|^vt100|^vt220|^rxvt|color|ansi|cygwin|linux/i.test(env.TERM)) {
        return 1;
      }
      if ("COLORTERM" in env) {
        return 1;
      }
      return min;
    }
    function getSupportLevel(stream4) {
      const level = supportsColor(stream4, stream4 && stream4.isTTY);
      return translateLevel(level);
    }
    module2.exports = {
      supportsColor: getSupportLevel,
      stdout: translateLevel(supportsColor(true, tty.isatty(1))),
      stderr: translateLevel(supportsColor(true, tty.isatty(2)))
    };
  }
});

// node_modules/debug/src/node.js
var require_node = __commonJS({
  "node_modules/debug/src/node.js"(exports2, module2) {
    var tty = require("tty");
    var util4 = require("util");
    exports2.init = init;
    exports2.log = log;
    exports2.formatArgs = formatArgs;
    exports2.save = save;
    exports2.load = load;
    exports2.useColors = useColors;
    exports2.destroy = util4.deprecate(
      () => {
      },
      "Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`."
    );
    exports2.colors = [6, 2, 3, 4, 5, 1];
    try {
      const supportsColor = require_supports_color();
      if (supportsColor && (supportsColor.stderr || supportsColor).level >= 2) {
        exports2.colors = [
          20,
          21,
          26,
          27,
          32,
          33,
          38,
          39,
          40,
          41,
          42,
          43,
          44,
          45,
          56,
          57,
          62,
          63,
          68,
          69,
          74,
          75,
          76,
          77,
          78,
          79,
          80,
          81,
          92,
          93,
          98,
          99,
          112,
          113,
          128,
          129,
          134,
          135,
          148,
          149,
          160,
          161,
          162,
          163,
          164,
          165,
          166,
          167,
          168,
          169,
          170,
          171,
          172,
          173,
          178,
          179,
          184,
          185,
          196,
          197,
          198,
          199,
          200,
          201,
          202,
          203,
          204,
          205,
          206,
          207,
          208,
          209,
          214,
          215,
          220,
          221
        ];
      }
    } catch (error) {
    }
    exports2.inspectOpts = Object.keys(process.env).filter((key) => {
      return /^debug_/i.test(key);
    }).reduce((obj, key) => {
      const prop = key.substring(6).toLowerCase().replace(/_([a-z])/g, (_, k) => {
        return k.toUpperCase();
      });
      let val = process.env[key];
      if (/^(yes|on|true|enabled)$/i.test(val)) {
        val = true;
      } else if (/^(no|off|false|disabled)$/i.test(val)) {
        val = false;
      } else if (val === "null") {
        val = null;
      } else {
        val = Number(val);
      }
      obj[prop] = val;
      return obj;
    }, {});
    function useColors() {
      return "colors" in exports2.inspectOpts ? Boolean(exports2.inspectOpts.colors) : tty.isatty(process.stderr.fd);
    }
    function formatArgs(args) {
      const { namespace: name, useColors: useColors2 } = this;
      if (useColors2) {
        const c = this.color;
        const colorCode = "\x1B[3" + (c < 8 ? c : "8;5;" + c);
        const prefix = `  ${colorCode};1m${name} \x1B[0m`;
        args[0] = prefix + args[0].split("\n").join("\n" + prefix);
        args.push(colorCode + "m+" + module2.exports.humanize(this.diff) + "\x1B[0m");
      } else {
        args[0] = getDate() + name + " " + args[0];
      }
    }
    function getDate() {
      if (exports2.inspectOpts.hideDate) {
        return "";
      }
      return (/* @__PURE__ */ new Date()).toISOString() + " ";
    }
    function log(...args) {
      return process.stderr.write(util4.formatWithOptions(exports2.inspectOpts, ...args) + "\n");
    }
    function save(namespaces) {
      if (namespaces) {
        process.env.DEBUG = namespaces;
      } else {
        delete process.env.DEBUG;
      }
    }
    function load() {
      return process.env.DEBUG;
    }
    function init(debug) {
      debug.inspectOpts = {};
      const keys = Object.keys(exports2.inspectOpts);
      for (let i = 0; i < keys.length; i++) {
        debug.inspectOpts[keys[i]] = exports2.inspectOpts[keys[i]];
      }
    }
    module2.exports = require_common()(exports2);
    var { formatters } = module2.exports;
    formatters.o = function(v) {
      this.inspectOpts.colors = this.useColors;
      return util4.inspect(v, this.inspectOpts).split("\n").map((str) => str.trim()).join(" ");
    };
    formatters.O = function(v) {
      this.inspectOpts.colors = this.useColors;
      return util4.inspect(v, this.inspectOpts);
    };
  }
});

// node_modules/debug/src/index.js
var require_src = __commonJS({
  "node_modules/debug/src/index.js"(exports2, module2) {
    if (typeof process === "undefined" || process.type === "renderer" || process.browser === true || process.__nwjs) {
      module2.exports = require_browser();
    } else {
      module2.exports = require_node();
    }
  }
});

// node_modules/agent-base/dist/src/promisify.js
var require_promisify = __commonJS({
  "node_modules/agent-base/dist/src/promisify.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    function promisify(fn) {
      return function(req, opts) {
        return new Promise((resolve, reject) => {
          fn.call(this, req, opts, (err, rtn) => {
            if (err) {
              reject(err);
            } else {
              resolve(rtn);
            }
          });
        });
      };
    }
    exports2.default = promisify;
  }
});

// node_modules/agent-base/dist/src/index.js
var require_src2 = __commonJS({
  "node_modules/agent-base/dist/src/index.js"(exports2, module2) {
    "use strict";
    var __importDefault = exports2 && exports2.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : { "default": mod };
    };
    var events_1 = require("events");
    var debug_1 = __importDefault(require_src());
    var promisify_1 = __importDefault(require_promisify());
    var debug = debug_1.default("agent-base");
    function isAgent(v) {
      return Boolean(v) && typeof v.addRequest === "function";
    }
    function isSecureEndpoint() {
      const { stack } = new Error();
      if (typeof stack !== "string")
        return false;
      return stack.split("\n").some((l) => l.indexOf("(https.js:") !== -1 || l.indexOf("node:https:") !== -1);
    }
    function createAgent(callback, opts) {
      return new createAgent.Agent(callback, opts);
    }
    (function(createAgent2) {
      class Agent extends events_1.EventEmitter {
        constructor(callback, _opts) {
          super();
          let opts = _opts;
          if (typeof callback === "function") {
            this.callback = callback;
          } else if (callback) {
            opts = callback;
          }
          this.timeout = null;
          if (opts && typeof opts.timeout === "number") {
            this.timeout = opts.timeout;
          }
          this.maxFreeSockets = 1;
          this.maxSockets = 1;
          this.maxTotalSockets = Infinity;
          this.sockets = {};
          this.freeSockets = {};
          this.requests = {};
          this.options = {};
        }
        get defaultPort() {
          if (typeof this.explicitDefaultPort === "number") {
            return this.explicitDefaultPort;
          }
          return isSecureEndpoint() ? 443 : 80;
        }
        set defaultPort(v) {
          this.explicitDefaultPort = v;
        }
        get protocol() {
          if (typeof this.explicitProtocol === "string") {
            return this.explicitProtocol;
          }
          return isSecureEndpoint() ? "https:" : "http:";
        }
        set protocol(v) {
          this.explicitProtocol = v;
        }
        callback(req, opts, fn) {
          throw new Error('"agent-base" has no default implementation, you must subclass and override `callback()`');
        }
        /**
         * Called by node-core's "_http_client.js" module when creating
         * a new HTTP request with this Agent instance.
         *
         * @api public
         */
        addRequest(req, _opts) {
          const opts = Object.assign({}, _opts);
          if (typeof opts.secureEndpoint !== "boolean") {
            opts.secureEndpoint = isSecureEndpoint();
          }
          if (opts.host == null) {
            opts.host = "localhost";
          }
          if (opts.port == null) {
            opts.port = opts.secureEndpoint ? 443 : 80;
          }
          if (opts.protocol == null) {
            opts.protocol = opts.secureEndpoint ? "https:" : "http:";
          }
          if (opts.host && opts.path) {
            delete opts.path;
          }
          delete opts.agent;
          delete opts.hostname;
          delete opts._defaultAgent;
          delete opts.defaultPort;
          delete opts.createConnection;
          req._last = true;
          req.shouldKeepAlive = false;
          let timedOut = false;
          let timeoutId = null;
          const timeoutMs = opts.timeout || this.timeout;
          const onerror = (err) => {
            if (req._hadError)
              return;
            req.emit("error", err);
            req._hadError = true;
          };
          const ontimeout = () => {
            timeoutId = null;
            timedOut = true;
            const err = new Error(`A "socket" was not created for HTTP request before ${timeoutMs}ms`);
            err.code = "ETIMEOUT";
            onerror(err);
          };
          const callbackError = (err) => {
            if (timedOut)
              return;
            if (timeoutId !== null) {
              clearTimeout(timeoutId);
              timeoutId = null;
            }
            onerror(err);
          };
          const onsocket = (socket) => {
            if (timedOut)
              return;
            if (timeoutId != null) {
              clearTimeout(timeoutId);
              timeoutId = null;
            }
            if (isAgent(socket)) {
              debug("Callback returned another Agent instance %o", socket.constructor.name);
              socket.addRequest(req, opts);
              return;
            }
            if (socket) {
              socket.once("free", () => {
                this.freeSocket(socket, opts);
              });
              req.onSocket(socket);
              return;
            }
            const err = new Error(`no Duplex stream was returned to agent-base for \`${req.method} ${req.path}\``);
            onerror(err);
          };
          if (typeof this.callback !== "function") {
            onerror(new Error("`callback` is not defined"));
            return;
          }
          if (!this.promisifiedCallback) {
            if (this.callback.length >= 3) {
              debug("Converting legacy callback function to promise");
              this.promisifiedCallback = promisify_1.default(this.callback);
            } else {
              this.promisifiedCallback = this.callback;
            }
          }
          if (typeof timeoutMs === "number" && timeoutMs > 0) {
            timeoutId = setTimeout(ontimeout, timeoutMs);
          }
          if ("port" in opts && typeof opts.port !== "number") {
            opts.port = Number(opts.port);
          }
          try {
            debug("Resolving socket for %o request: %o", opts.protocol, `${req.method} ${req.path}`);
            Promise.resolve(this.promisifiedCallback(req, opts)).then(onsocket, callbackError);
          } catch (err) {
            Promise.reject(err).catch(callbackError);
          }
        }
        freeSocket(socket, opts) {
          debug("Freeing socket %o %o", socket.constructor.name, opts);
          socket.destroy();
        }
        destroy() {
          debug("Destroying agent %o", this.constructor.name);
        }
      }
      createAgent2.Agent = Agent;
      createAgent2.prototype = createAgent2.Agent.prototype;
    })(createAgent || (createAgent = {}));
    module2.exports = createAgent;
  }
});

// node_modules/https-proxy-agent/dist/parse-proxy-response.js
var require_parse_proxy_response = __commonJS({
  "node_modules/https-proxy-agent/dist/parse-proxy-response.js"(exports2) {
    "use strict";
    var __importDefault = exports2 && exports2.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : { "default": mod };
    };
    Object.defineProperty(exports2, "__esModule", { value: true });
    var debug_1 = __importDefault(require_src());
    var debug = debug_1.default("https-proxy-agent:parse-proxy-response");
    function parseProxyResponse(socket) {
      return new Promise((resolve, reject) => {
        let buffersLength = 0;
        const buffers = [];
        function read() {
          const b = socket.read();
          if (b)
            ondata(b);
          else
            socket.once("readable", read);
        }
        function cleanup() {
          socket.removeListener("end", onend);
          socket.removeListener("error", onerror);
          socket.removeListener("close", onclose);
          socket.removeListener("readable", read);
        }
        function onclose(err) {
          debug("onclose had error %o", err);
        }
        function onend() {
          debug("onend");
        }
        function onerror(err) {
          cleanup();
          debug("onerror %o", err);
          reject(err);
        }
        function ondata(b) {
          buffers.push(b);
          buffersLength += b.length;
          const buffered = Buffer.concat(buffers, buffersLength);
          const endOfHeaders = buffered.indexOf("\r\n\r\n");
          if (endOfHeaders === -1) {
            debug("have not received end of HTTP headers yet...");
            read();
            return;
          }
          const firstLine = buffered.toString("ascii", 0, buffered.indexOf("\r\n"));
          const statusCode = +firstLine.split(" ")[1];
          debug("got proxy server response: %o", firstLine);
          resolve({
            statusCode,
            buffered
          });
        }
        socket.on("error", onerror);
        socket.on("close", onclose);
        socket.on("end", onend);
        read();
      });
    }
    exports2.default = parseProxyResponse;
  }
});

// node_modules/https-proxy-agent/dist/agent.js
var require_agent = __commonJS({
  "node_modules/https-proxy-agent/dist/agent.js"(exports2) {
    "use strict";
    var __awaiter = exports2 && exports2.__awaiter || function(thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
          resolve(value);
        });
      }
      return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }
        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }
        function step(result) {
          result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    };
    var __importDefault = exports2 && exports2.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : { "default": mod };
    };
    Object.defineProperty(exports2, "__esModule", { value: true });
    var net_1 = __importDefault(require("net"));
    var tls_1 = __importDefault(require("tls"));
    var url_1 = __importDefault(require("url"));
    var assert_1 = __importDefault(require("assert"));
    var debug_1 = __importDefault(require_src());
    var agent_base_1 = require_src2();
    var parse_proxy_response_1 = __importDefault(require_parse_proxy_response());
    var debug = debug_1.default("https-proxy-agent:agent");
    var HttpsProxyAgent2 = class extends agent_base_1.Agent {
      constructor(_opts) {
        let opts;
        if (typeof _opts === "string") {
          opts = url_1.default.parse(_opts);
        } else {
          opts = _opts;
        }
        if (!opts) {
          throw new Error("an HTTP(S) proxy server `host` and `port` must be specified!");
        }
        debug("creating new HttpsProxyAgent instance: %o", opts);
        super(opts);
        const proxy = Object.assign({}, opts);
        this.secureProxy = opts.secureProxy || isHTTPS(proxy.protocol);
        proxy.host = proxy.hostname || proxy.host;
        if (typeof proxy.port === "string") {
          proxy.port = parseInt(proxy.port, 10);
        }
        if (!proxy.port && proxy.host) {
          proxy.port = this.secureProxy ? 443 : 80;
        }
        if (this.secureProxy && !("ALPNProtocols" in proxy)) {
          proxy.ALPNProtocols = ["http 1.1"];
        }
        if (proxy.host && proxy.path) {
          delete proxy.path;
          delete proxy.pathname;
        }
        this.proxy = proxy;
      }
      /**
       * Called when the node-core HTTP client library is creating a
       * new HTTP request.
       *
       * @api protected
       */
      callback(req, opts) {
        return __awaiter(this, void 0, void 0, function* () {
          const { proxy, secureProxy } = this;
          let socket;
          if (secureProxy) {
            debug("Creating `tls.Socket`: %o", proxy);
            socket = tls_1.default.connect(proxy);
          } else {
            debug("Creating `net.Socket`: %o", proxy);
            socket = net_1.default.connect(proxy);
          }
          const headers = Object.assign({}, proxy.headers);
          const hostname = `${opts.host}:${opts.port}`;
          let payload = `CONNECT ${hostname} HTTP/1.1\r
`;
          if (proxy.auth) {
            headers["Proxy-Authorization"] = `Basic ${Buffer.from(proxy.auth).toString("base64")}`;
          }
          let { host, port, secureEndpoint } = opts;
          if (!isDefaultPort(port, secureEndpoint)) {
            host += `:${port}`;
          }
          headers.Host = host;
          headers.Connection = "close";
          for (const name of Object.keys(headers)) {
            payload += `${name}: ${headers[name]}\r
`;
          }
          const proxyResponsePromise = parse_proxy_response_1.default(socket);
          socket.write(`${payload}\r
`);
          const { statusCode, buffered } = yield proxyResponsePromise;
          if (statusCode === 200) {
            req.once("socket", resume);
            if (opts.secureEndpoint) {
              debug("Upgrading socket connection to TLS");
              const servername = opts.servername || opts.host;
              return tls_1.default.connect(Object.assign(Object.assign({}, omit(opts, "host", "hostname", "path", "port")), {
                socket,
                servername
              }));
            }
            return socket;
          }
          socket.destroy();
          const fakeSocket = new net_1.default.Socket({ writable: false });
          fakeSocket.readable = true;
          req.once("socket", (s) => {
            debug("replaying proxy buffer for failed request");
            assert_1.default(s.listenerCount("data") > 0);
            s.push(buffered);
            s.push(null);
          });
          return fakeSocket;
        });
      }
    };
    exports2.default = HttpsProxyAgent2;
    function resume(socket) {
      socket.resume();
    }
    function isDefaultPort(port, secure) {
      return Boolean(!secure && port === 80 || secure && port === 443);
    }
    function isHTTPS(protocol) {
      return typeof protocol === "string" ? /^https:?$/i.test(protocol) : false;
    }
    function omit(obj, ...keys) {
      const ret = {};
      let key;
      for (key in obj) {
        if (!keys.includes(key)) {
          ret[key] = obj[key];
        }
      }
      return ret;
    }
  }
});

// node_modules/https-proxy-agent/dist/index.js
var require_dist3 = __commonJS({
  "node_modules/https-proxy-agent/dist/index.js"(exports2, module2) {
    "use strict";
    var __importDefault = exports2 && exports2.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : { "default": mod };
    };
    var agent_1 = __importDefault(require_agent());
    function createHttpsProxyAgent(opts) {
      return new agent_1.default(opts);
    }
    (function(createHttpsProxyAgent2) {
      createHttpsProxyAgent2.HttpsProxyAgent = agent_1.default;
      createHttpsProxyAgent2.prototype = agent_1.default.prototype;
    })(createHttpsProxyAgent || (createHttpsProxyAgent = {}));
    module2.exports = createHttpsProxyAgent;
  }
});

// node_modules/follow-redirects/debug.js
var require_debug = __commonJS({
  "node_modules/follow-redirects/debug.js"(exports2, module2) {
    var debug;
    module2.exports = function() {
      if (!debug) {
        try {
          debug = require_src()("follow-redirects");
        } catch (error) {
        }
        if (typeof debug !== "function") {
          debug = function() {
          };
        }
      }
      debug.apply(null, arguments);
    };
  }
});

// node_modules/follow-redirects/index.js
var require_follow_redirects = __commonJS({
  "node_modules/follow-redirects/index.js"(exports2, module2) {
    var url2 = require("url");
    var URL2 = url2.URL;
    var http3 = require("http");
    var https2 = require("https");
    var Writable = require("stream").Writable;
    var assert = require("assert");
    var debug = require_debug();
    (function detectUnsupportedEnvironment() {
      var looksLikeNode = typeof process !== "undefined";
      var looksLikeBrowser = typeof window !== "undefined" && typeof document !== "undefined";
      var looksLikeV8 = isFunction3(Error.captureStackTrace);
      if (!looksLikeNode && (looksLikeBrowser || !looksLikeV8)) {
        console.warn("The follow-redirects package should be excluded from browser builds.");
      }
    })();
    var useNativeURL = false;
    try {
      assert(new URL2(""));
    } catch (error) {
      useNativeURL = error.code === "ERR_INVALID_URL";
    }
    var sensitiveHeaders = [
      "Authorization",
      "Proxy-Authorization",
      "Cookie"
    ];
    var preservedUrlFields = [
      "auth",
      "host",
      "hostname",
      "href",
      "path",
      "pathname",
      "port",
      "protocol",
      "query",
      "search",
      "hash"
    ];
    var events = ["abort", "aborted", "connect", "error", "socket", "timeout"];
    var eventHandlers = /* @__PURE__ */ Object.create(null);
    events.forEach(function(event) {
      eventHandlers[event] = function(arg1, arg2, arg3) {
        this._redirectable.emit(event, arg1, arg2, arg3);
      };
    });
    var InvalidUrlError = createErrorType(
      "ERR_INVALID_URL",
      "Invalid URL",
      TypeError
    );
    var RedirectionError = createErrorType(
      "ERR_FR_REDIRECTION_FAILURE",
      "Redirected request failed"
    );
    var TooManyRedirectsError = createErrorType(
      "ERR_FR_TOO_MANY_REDIRECTS",
      "Maximum number of redirects exceeded",
      RedirectionError
    );
    var MaxBodyLengthExceededError = createErrorType(
      "ERR_FR_MAX_BODY_LENGTH_EXCEEDED",
      "Request body larger than maxBodyLength limit"
    );
    var WriteAfterEndError = createErrorType(
      "ERR_STREAM_WRITE_AFTER_END",
      "write after end"
    );
    var destroy = Writable.prototype.destroy || noop2;
    function RedirectableRequest(options, responseCallback) {
      Writable.call(this);
      this._sanitizeOptions(options);
      this._options = options;
      this._ended = false;
      this._ending = false;
      this._redirectCount = 0;
      this._redirects = [];
      this._requestBodyLength = 0;
      this._requestBodyBuffers = [];
      if (responseCallback) {
        this.on("response", responseCallback);
      }
      var self2 = this;
      this._onNativeResponse = function(response) {
        try {
          self2._processResponse(response);
        } catch (cause) {
          self2.emit("error", cause instanceof RedirectionError ? cause : new RedirectionError({ cause }));
        }
      };
      this._headerFilter = new RegExp("^(?:" + sensitiveHeaders.concat(options.sensitiveHeaders).map(escapeRegex).join("|") + ")$", "i");
      this._performRequest();
    }
    RedirectableRequest.prototype = Object.create(Writable.prototype);
    RedirectableRequest.prototype.abort = function() {
      destroyRequest(this._currentRequest);
      this._currentRequest.abort();
      this.emit("abort");
    };
    RedirectableRequest.prototype.destroy = function(error) {
      destroyRequest(this._currentRequest, error);
      destroy.call(this, error);
      return this;
    };
    RedirectableRequest.prototype.write = function(data, encoding, callback) {
      if (this._ending) {
        throw new WriteAfterEndError();
      }
      if (!isString2(data) && !isBuffer2(data)) {
        throw new TypeError("data should be a string, Buffer or Uint8Array");
      }
      if (isFunction3(encoding)) {
        callback = encoding;
        encoding = null;
      }
      if (data.length === 0) {
        if (callback) {
          callback();
        }
        return;
      }
      if (this._requestBodyLength + data.length <= this._options.maxBodyLength) {
        this._requestBodyLength += data.length;
        this._requestBodyBuffers.push({ data, encoding });
        this._currentRequest.write(data, encoding, callback);
      } else {
        this.emit("error", new MaxBodyLengthExceededError());
        this.abort();
      }
    };
    RedirectableRequest.prototype.end = function(data, encoding, callback) {
      if (isFunction3(data)) {
        callback = data;
        data = encoding = null;
      } else if (isFunction3(encoding)) {
        callback = encoding;
        encoding = null;
      }
      if (!data) {
        this._ended = this._ending = true;
        this._currentRequest.end(null, null, callback);
      } else {
        var self2 = this;
        var currentRequest = this._currentRequest;
        this.write(data, encoding, function() {
          self2._ended = true;
          currentRequest.end(null, null, callback);
        });
        this._ending = true;
      }
    };
    RedirectableRequest.prototype.setHeader = function(name, value) {
      this._options.headers[name] = value;
      this._currentRequest.setHeader(name, value);
    };
    RedirectableRequest.prototype.removeHeader = function(name) {
      delete this._options.headers[name];
      this._currentRequest.removeHeader(name);
    };
    RedirectableRequest.prototype.setTimeout = function(msecs, callback) {
      var self2 = this;
      function destroyOnTimeout(socket) {
        socket.setTimeout(msecs);
        socket.removeListener("timeout", socket.destroy);
        socket.addListener("timeout", socket.destroy);
      }
      function startTimer(socket) {
        if (self2._timeout) {
          clearTimeout(self2._timeout);
        }
        self2._timeout = setTimeout(function() {
          self2.emit("timeout");
          clearTimer();
        }, msecs);
        destroyOnTimeout(socket);
      }
      function clearTimer() {
        if (self2._timeout) {
          clearTimeout(self2._timeout);
          self2._timeout = null;
        }
        self2.removeListener("abort", clearTimer);
        self2.removeListener("error", clearTimer);
        self2.removeListener("response", clearTimer);
        self2.removeListener("close", clearTimer);
        if (callback) {
          self2.removeListener("timeout", callback);
        }
        if (!self2.socket) {
          self2._currentRequest.removeListener("socket", startTimer);
        }
      }
      if (callback) {
        this.on("timeout", callback);
      }
      if (this.socket) {
        startTimer(this.socket);
      } else {
        this._currentRequest.once("socket", startTimer);
      }
      this.on("socket", destroyOnTimeout);
      this.on("abort", clearTimer);
      this.on("error", clearTimer);
      this.on("response", clearTimer);
      this.on("close", clearTimer);
      return this;
    };
    [
      "flushHeaders",
      "getHeader",
      "setNoDelay",
      "setSocketKeepAlive"
    ].forEach(function(method) {
      RedirectableRequest.prototype[method] = function(a, b) {
        return this._currentRequest[method](a, b);
      };
    });
    ["aborted", "connection", "socket"].forEach(function(property) {
      Object.defineProperty(RedirectableRequest.prototype, property, {
        get: function() {
          return this._currentRequest[property];
        }
      });
    });
    RedirectableRequest.prototype._sanitizeOptions = function(options) {
      if (!options.headers) {
        options.headers = {};
      } else if (Array.isArray(options.headers)) {
        var headerList = options.headers;
        options.headers = {};
        for (var i = 0; i < headerList.length; i += 2) {
          options.headers[headerList[i]] = headerList[i + 1];
        }
      }
      if (!isArray2(options.sensitiveHeaders)) {
        options.sensitiveHeaders = [];
      }
      if (options.host) {
        if (!options.hostname) {
          options.hostname = options.host;
        }
        delete options.host;
      }
      if (!options.pathname && options.path) {
        var searchPos = options.path.indexOf("?");
        if (searchPos < 0) {
          options.pathname = options.path;
        } else {
          options.pathname = options.path.substring(0, searchPos);
          options.search = options.path.substring(searchPos);
        }
      }
    };
    RedirectableRequest.prototype._performRequest = function() {
      var protocol = this._options.protocol;
      var nativeProtocol = this._options.nativeProtocols[protocol];
      if (!nativeProtocol) {
        throw new TypeError("Unsupported protocol " + protocol);
      }
      if (this._options.agents) {
        var scheme = protocol.slice(0, -1);
        this._options.agent = this._options.agents[scheme];
      }
      var request = this._currentRequest = nativeProtocol.request(this._options, this._onNativeResponse);
      request._redirectable = this;
      for (var event of events) {
        request.on(event, eventHandlers[event]);
      }
      this._currentUrl = /^\//.test(this._options.path) ? url2.format(this._options) : (
        // When making a request to a proxy, […]
        // a client MUST send the target URI in absolute-form […].
        this._options.path
      );
      if (this._isRedirect) {
        var i = 0;
        var self2 = this;
        var buffers = this._requestBodyBuffers;
        (function writeNext(error) {
          if (request === self2._currentRequest) {
            if (error) {
              self2.emit("error", error);
            } else if (i < buffers.length) {
              var buffer = buffers[i++];
              if (!request.finished) {
                request.write(buffer.data, buffer.encoding, writeNext);
              }
            } else if (self2._ended) {
              request.end();
            }
          }
        })();
      }
    };
    RedirectableRequest.prototype._processResponse = function(response) {
      var statusCode = response.statusCode;
      if (this._options.trackRedirects) {
        this._redirects.push({
          url: this._currentUrl,
          headers: response.headers,
          statusCode
        });
      }
      var location = response.headers.location;
      if (!location || this._options.followRedirects === false || statusCode < 300 || statusCode >= 400) {
        response.responseUrl = this._currentUrl;
        response.redirects = this._redirects;
        this.emit("response", response);
        this._requestBodyBuffers = [];
        return;
      }
      destroyRequest(this._currentRequest);
      response.destroy();
      if (++this._redirectCount > this._options.maxRedirects) {
        throw new TooManyRedirectsError();
      }
      var requestHeaders;
      var beforeRedirect = this._options.beforeRedirect;
      if (beforeRedirect) {
        requestHeaders = Object.assign({
          // The Host header was set by nativeProtocol.request
          Host: response.req.getHeader("host")
        }, this._options.headers);
      }
      var method = this._options.method;
      if ((statusCode === 301 || statusCode === 302) && this._options.method === "POST" || // RFC7231§6.4.4: The 303 (See Other) status code indicates that
      // the server is redirecting the user agent to a different resource […]
      // A user agent can perform a retrieval request targeting that URI
      // (a GET or HEAD request if using HTTP) […]
      statusCode === 303 && !/^(?:GET|HEAD)$/.test(this._options.method)) {
        this._options.method = "GET";
        this._requestBodyBuffers = [];
        removeMatchingHeaders(/^content-/i, this._options.headers);
      }
      var currentHostHeader = removeMatchingHeaders(/^host$/i, this._options.headers);
      var currentUrlParts = parseUrl2(this._currentUrl);
      var currentHost = currentHostHeader || currentUrlParts.host;
      var currentUrl = /^\w+:/.test(location) ? this._currentUrl : url2.format(Object.assign(currentUrlParts, { host: currentHost }));
      var redirectUrl = resolveUrl(location, currentUrl);
      debug("redirecting to", redirectUrl.href);
      this._isRedirect = true;
      spreadUrlObject(redirectUrl, this._options);
      if (redirectUrl.protocol !== currentUrlParts.protocol && redirectUrl.protocol !== "https:" || redirectUrl.host !== currentHost && !isSubdomain(redirectUrl.host, currentHost)) {
        removeMatchingHeaders(this._headerFilter, this._options.headers);
      }
      if (isFunction3(beforeRedirect)) {
        var responseDetails = {
          headers: response.headers,
          statusCode
        };
        var requestDetails = {
          url: currentUrl,
          method,
          headers: requestHeaders
        };
        beforeRedirect(this._options, responseDetails, requestDetails);
        this._sanitizeOptions(this._options);
      }
      this._performRequest();
    };
    function wrap(protocols) {
      var exports3 = {
        maxRedirects: 21,
        maxBodyLength: 10 * 1024 * 1024
      };
      var nativeProtocols = {};
      Object.keys(protocols).forEach(function(scheme) {
        var protocol = scheme + ":";
        var nativeProtocol = nativeProtocols[protocol] = protocols[scheme];
        var wrappedProtocol = exports3[scheme] = Object.create(nativeProtocol);
        function request(input, options, callback) {
          if (isURL(input)) {
            input = spreadUrlObject(input);
          } else if (isString2(input)) {
            input = spreadUrlObject(parseUrl2(input));
          } else {
            callback = options;
            options = validateUrl(input);
            input = { protocol };
          }
          if (isFunction3(options)) {
            callback = options;
            options = null;
          }
          options = Object.assign({
            maxRedirects: exports3.maxRedirects,
            maxBodyLength: exports3.maxBodyLength
          }, input, options);
          options.nativeProtocols = nativeProtocols;
          if (!isString2(options.host) && !isString2(options.hostname)) {
            options.hostname = "::1";
          }
          assert.equal(options.protocol, protocol, "protocol mismatch");
          debug("options", options);
          return new RedirectableRequest(options, callback);
        }
        function get(input, options, callback) {
          var wrappedRequest = wrappedProtocol.request(input, options, callback);
          wrappedRequest.end();
          return wrappedRequest;
        }
        Object.defineProperties(wrappedProtocol, {
          request: { value: request, configurable: true, enumerable: true, writable: true },
          get: { value: get, configurable: true, enumerable: true, writable: true }
        });
      });
      return exports3;
    }
    function noop2() {
    }
    function parseUrl2(input) {
      var parsed;
      if (useNativeURL) {
        parsed = new URL2(input);
      } else {
        parsed = validateUrl(url2.parse(input));
        if (!isString2(parsed.protocol)) {
          throw new InvalidUrlError({ input });
        }
      }
      return parsed;
    }
    function resolveUrl(relative, base) {
      return useNativeURL ? new URL2(relative, base) : parseUrl2(url2.resolve(base, relative));
    }
    function validateUrl(input) {
      if (/^\[/.test(input.hostname) && !/^\[[:0-9a-f]+\]$/i.test(input.hostname)) {
        throw new InvalidUrlError({ input: input.href || input });
      }
      if (/^\[/.test(input.host) && !/^\[[:0-9a-f]+\](:\d+)?$/i.test(input.host)) {
        throw new InvalidUrlError({ input: input.href || input });
      }
      return input;
    }
    function spreadUrlObject(urlObject, target) {
      var spread3 = target || {};
      for (var key of preservedUrlFields) {
        spread3[key] = urlObject[key];
      }
      if (spread3.hostname.startsWith("[")) {
        spread3.hostname = spread3.hostname.slice(1, -1);
      }
      if (spread3.port !== "") {
        spread3.port = Number(spread3.port);
      }
      spread3.path = spread3.search ? spread3.pathname + spread3.search : spread3.pathname;
      return spread3;
    }
    function removeMatchingHeaders(regex, headers) {
      var lastValue;
      for (var header in headers) {
        if (regex.test(header)) {
          lastValue = headers[header];
          delete headers[header];
        }
      }
      return lastValue === null || typeof lastValue === "undefined" ? void 0 : String(lastValue).trim();
    }
    function createErrorType(code, message, baseClass) {
      function CustomError(properties) {
        if (isFunction3(Error.captureStackTrace)) {
          Error.captureStackTrace(this, this.constructor);
        }
        Object.assign(this, properties || {});
        this.code = code;
        this.message = this.cause ? message + ": " + this.cause.message : message;
      }
      CustomError.prototype = new (baseClass || Error)();
      Object.defineProperties(CustomError.prototype, {
        constructor: {
          value: CustomError,
          enumerable: false
        },
        name: {
          value: "Error [" + code + "]",
          enumerable: false
        }
      });
      return CustomError;
    }
    function destroyRequest(request, error) {
      for (var event of events) {
        request.removeListener(event, eventHandlers[event]);
      }
      request.on("error", noop2);
      request.destroy(error);
    }
    function isSubdomain(subdomain, domain) {
      assert(isString2(subdomain) && isString2(domain));
      var dot = subdomain.length - domain.length - 1;
      return dot > 0 && subdomain[dot] === "." && subdomain.endsWith(domain);
    }
    function isArray2(value) {
      return value instanceof Array;
    }
    function isString2(value) {
      return typeof value === "string" || value instanceof String;
    }
    function isFunction3(value) {
      return typeof value === "function";
    }
    function isBuffer2(value) {
      return typeof value === "object" && "length" in value;
    }
    function isURL(value) {
      return URL2 && value instanceof URL2;
    }
    function escapeRegex(regex) {
      return regex.replace(/[[\]\\/()*+?.^$|]/g, "\\$&");
    }
    module2.exports = wrap({ http: http3, https: https2 });
    module2.exports.wrap = wrap;
  }
});

// node_modules/@hapi/hoek/lib/assertError.js
var require_assertError = __commonJS({
  "node_modules/@hapi/hoek/lib/assertError.js"(exports2, module2) {
    "use strict";
    module2.exports = class AssertError extends Error {
      name = "AssertError";
      constructor(message, ctor) {
        super(message || "Unknown error");
        if (typeof Error.captureStackTrace === "function") {
          Error.captureStackTrace(this, ctor);
        }
      }
    };
  }
});

// node_modules/@hapi/hoek/lib/stringify.js
var require_stringify = __commonJS({
  "node_modules/@hapi/hoek/lib/stringify.js"(exports2, module2) {
    "use strict";
    module2.exports = function(...args) {
      try {
        return JSON.stringify(...args);
      } catch (err) {
        return "[Cannot display object: " + err.message + "]";
      }
    };
  }
});

// node_modules/@hapi/hoek/lib/assert.js
var require_assert = __commonJS({
  "node_modules/@hapi/hoek/lib/assert.js"(exports2, module2) {
    "use strict";
    var AssertError = require_assertError();
    var Stringify = require_stringify();
    var assert = module2.exports = function(condition, ...args) {
      if (condition) {
        return;
      }
      if (args.length === 1 && args[0] instanceof Error) {
        throw args[0];
      }
      const msgs = args.filter((arg) => arg !== "").map((arg) => {
        return typeof arg === "string" ? arg : arg instanceof Error ? arg.message : Stringify(arg);
      });
      throw new AssertError(msgs.join(" "), assert);
    };
  }
});

// node_modules/@hapi/hoek/lib/reach.js
var require_reach = __commonJS({
  "node_modules/@hapi/hoek/lib/reach.js"(exports2, module2) {
    "use strict";
    var Assert = require_assert();
    var internals = {};
    module2.exports = function(obj, chain, options) {
      if (chain === false || chain === null || chain === void 0) {
        return obj;
      }
      options = options || {};
      if (typeof options === "string") {
        options = { separator: options };
      }
      const isChainArray = Array.isArray(chain);
      Assert(!isChainArray || !options.separator, "Separator option is not valid for array-based chain");
      const path4 = isChainArray ? chain : chain.split(options.separator || ".");
      let ref = obj;
      for (let i = 0; i < path4.length; ++i) {
        let key = path4[i];
        const type = options.iterables && internals.iterables(ref);
        if (Array.isArray(ref) || type === "set") {
          const number = Number(key);
          if (Number.isInteger(number)) {
            key = number < 0 ? ref.length + number : number;
          }
        }
        if (!ref || typeof ref === "function" && options.functions === false || // Defaults to true
        !type && ref[key] === void 0) {
          Assert(!options.strict || i + 1 === path4.length, "Missing segment", key, "in reach path ", chain);
          Assert(typeof ref === "object" || options.functions === true || typeof ref !== "function", "Invalid segment", key, "in reach path ", chain);
          ref = options.default;
          break;
        }
        if (!type) {
          ref = ref[key];
        } else if (type === "set") {
          ref = [...ref][key];
        } else {
          ref = ref.get(key);
        }
      }
      return ref;
    };
    internals.iterables = function(ref) {
      if (ref instanceof Set) {
        return "set";
      }
      if (ref instanceof Map) {
        return "map";
      }
    };
  }
});

// node_modules/@hapi/hoek/lib/types.js
var require_types = __commonJS({
  "node_modules/@hapi/hoek/lib/types.js"(exports2, module2) {
    "use strict";
    var internals = {};
    exports2 = module2.exports = {
      array: Array.prototype,
      buffer: Buffer && Buffer.prototype,
      // $lab:coverage:ignore$
      date: Date.prototype,
      error: Error.prototype,
      generic: Object.prototype,
      map: Map.prototype,
      promise: Promise.prototype,
      regex: RegExp.prototype,
      set: Set.prototype,
      url: URL.prototype,
      weakMap: WeakMap.prototype,
      weakSet: WeakSet.prototype
    };
    internals.typeMap = /* @__PURE__ */ new Map([
      ["[object Error]", exports2.error],
      ["[object Map]", exports2.map],
      ["[object Promise]", exports2.promise],
      ["[object Set]", exports2.set],
      ["[object URL]", exports2.url],
      ["[object WeakMap]", exports2.weakMap],
      ["[object WeakSet]", exports2.weakSet]
    ]);
    exports2.getInternalProto = function(obj) {
      if (Array.isArray(obj)) {
        return exports2.array;
      }
      if (Buffer && obj instanceof Buffer) {
        return exports2.buffer;
      }
      if (obj instanceof Date) {
        return exports2.date;
      }
      if (obj instanceof RegExp) {
        return exports2.regex;
      }
      if (obj instanceof Error) {
        return exports2.error;
      }
      const objName = Object.prototype.toString.call(obj);
      return internals.typeMap.get(objName) || exports2.generic;
    };
  }
});

// node_modules/@hapi/hoek/lib/utils.js
var require_utils = __commonJS({
  "node_modules/@hapi/hoek/lib/utils.js"(exports2) {
    "use strict";
    exports2.keys = function(obj, options = {}) {
      return options.symbols !== false ? Reflect.ownKeys(obj) : Object.getOwnPropertyNames(obj);
    };
  }
});

// node_modules/@hapi/hoek/lib/clone.js
var require_clone = __commonJS({
  "node_modules/@hapi/hoek/lib/clone.js"(exports2, module2) {
    "use strict";
    var Reach = require_reach();
    var Types = require_types();
    var Utils = require_utils();
    var internals = {
      needsProtoHack: /* @__PURE__ */ new Set([Types.set, Types.map, Types.weakSet, Types.weakMap]),
      structuredCloneExists: typeof structuredClone === "function"
    };
    module2.exports = internals.clone = function(obj, options = {}, _seen = null) {
      if (typeof obj !== "object" || obj === null) {
        return obj;
      }
      let clone = internals.clone;
      let seen = _seen;
      if (options.shallow) {
        if (options.shallow !== true) {
          return internals.cloneWithShallow(obj, options);
        }
        clone = (value) => value;
      } else if (seen) {
        const lookup = seen.get(obj);
        if (lookup) {
          return lookup;
        }
      } else {
        seen = /* @__PURE__ */ new Map();
      }
      const baseProto = Types.getInternalProto(obj);
      switch (baseProto) {
        case Types.buffer:
          return Buffer?.from(obj);
        case Types.date:
          return new Date(obj.getTime());
        case Types.regex:
        case Types.url:
          return new baseProto.constructor(obj);
      }
      const newObj = internals.base(obj, baseProto, options);
      if (newObj === obj) {
        return obj;
      }
      if (seen) {
        seen.set(obj, newObj);
      }
      if (baseProto === Types.set) {
        for (const value of obj) {
          newObj.add(clone(value, options, seen));
        }
      } else if (baseProto === Types.map) {
        for (const [key, value] of obj) {
          newObj.set(key, clone(value, options, seen));
        }
      }
      const keys = Utils.keys(obj, options);
      for (const key of keys) {
        if (key === "__proto__") {
          continue;
        }
        if (baseProto === Types.array && key === "length") {
          newObj.length = obj.length;
          continue;
        }
        if (internals.structuredCloneExists && baseProto === Types.error && key === "stack") {
          continue;
        }
        const descriptor = Object.getOwnPropertyDescriptor(obj, key);
        if (descriptor) {
          if (descriptor.get || descriptor.set) {
            Object.defineProperty(newObj, key, descriptor);
          } else if (descriptor.enumerable) {
            newObj[key] = clone(obj[key], options, seen);
          } else {
            Object.defineProperty(newObj, key, { enumerable: false, writable: true, configurable: true, value: clone(obj[key], options, seen) });
          }
        } else {
          Object.defineProperty(newObj, key, {
            enumerable: true,
            writable: true,
            configurable: true,
            value: clone(obj[key], options, seen)
          });
        }
      }
      return newObj;
    };
    internals.cloneWithShallow = function(source, options) {
      const keys = options.shallow;
      options = Object.assign({}, options);
      options.shallow = false;
      const seen = /* @__PURE__ */ new Map();
      for (const key of keys) {
        const ref = Reach(source, key);
        if (typeof ref === "object" || typeof ref === "function") {
          seen.set(ref, ref);
        }
      }
      return internals.clone(source, options, seen);
    };
    internals.base = function(obj, baseProto, options) {
      if (options.prototype === false) {
        if (internals.needsProtoHack.has(baseProto)) {
          return new baseProto.constructor();
        }
        return baseProto === Types.array ? [] : {};
      }
      const proto = Object.getPrototypeOf(obj);
      if (proto && proto.isImmutable) {
        return obj;
      }
      if (baseProto === Types.array) {
        const newObj = [];
        if (proto !== baseProto) {
          Object.setPrototypeOf(newObj, proto);
        }
        return newObj;
      } else if (baseProto === Types.error && internals.structuredCloneExists && (proto === baseProto || Error.isPrototypeOf(proto.constructor))) {
        const err = structuredClone(obj);
        if (Object.getPrototypeOf(err) !== proto) {
          Object.setPrototypeOf(err, proto);
        }
        return err;
      }
      if (internals.needsProtoHack.has(baseProto)) {
        const newObj = new proto.constructor();
        if (proto !== baseProto) {
          Object.setPrototypeOf(newObj, proto);
        }
        return newObj;
      }
      return Object.create(proto);
    };
  }
});

// node_modules/@hapi/hoek/lib/merge.js
var require_merge = __commonJS({
  "node_modules/@hapi/hoek/lib/merge.js"(exports2, module2) {
    "use strict";
    var Assert = require_assert();
    var Clone = require_clone();
    var Utils = require_utils();
    var internals = {};
    module2.exports = internals.merge = function(target, source, options) {
      Assert(target && typeof target === "object", "Invalid target value: must be an object");
      Assert(source === null || source === void 0 || typeof source === "object", "Invalid source value: must be null, undefined, or an object");
      if (!source) {
        return target;
      }
      options = Object.assign({ nullOverride: true, mergeArrays: true }, options);
      if (Array.isArray(source)) {
        Assert(Array.isArray(target), "Cannot merge array onto an object");
        if (!options.mergeArrays) {
          target.length = 0;
        }
        for (let i = 0; i < source.length; ++i) {
          target.push(Clone(source[i], { symbols: options.symbols }));
        }
        return target;
      }
      const keys = Utils.keys(source, options);
      for (let i = 0; i < keys.length; ++i) {
        const key = keys[i];
        if (key === "__proto__" || !Object.prototype.propertyIsEnumerable.call(source, key)) {
          continue;
        }
        const value = source[key];
        if (value && typeof value === "object") {
          if (target[key] === value) {
            continue;
          }
          if (!target[key] || typeof target[key] !== "object" || Array.isArray(target[key]) !== Array.isArray(value) || value instanceof Date || Buffer && Buffer.isBuffer(value) || // $lab:coverage:ignore$
          value instanceof RegExp) {
            target[key] = Clone(value, { symbols: options.symbols });
          } else {
            internals.merge(target[key], value, options);
          }
        } else {
          if (value !== null && value !== void 0) {
            target[key] = value;
          } else if (options.nullOverride) {
            target[key] = value;
          }
        }
      }
      return target;
    };
  }
});

// node_modules/@hapi/hoek/lib/applyToDefaults.js
var require_applyToDefaults = __commonJS({
  "node_modules/@hapi/hoek/lib/applyToDefaults.js"(exports2, module2) {
    "use strict";
    var Assert = require_assert();
    var Clone = require_clone();
    var Merge = require_merge();
    var Reach = require_reach();
    var internals = {};
    module2.exports = function(defaults2, source, options = {}) {
      Assert(defaults2 && typeof defaults2 === "object", "Invalid defaults value: must be an object");
      Assert(!source || source === true || typeof source === "object", "Invalid source value: must be true, falsy or an object");
      Assert(typeof options === "object", "Invalid options: must be an object");
      if (!source) {
        return null;
      }
      if (options.shallow) {
        return internals.applyToDefaultsWithShallow(defaults2, source, options);
      }
      const copy = Clone(defaults2);
      if (source === true) {
        return copy;
      }
      const nullOverride = options.nullOverride !== void 0 ? options.nullOverride : false;
      return Merge(copy, source, { nullOverride, mergeArrays: false });
    };
    internals.applyToDefaultsWithShallow = function(defaults2, source, options) {
      const keys = options.shallow;
      Assert(Array.isArray(keys), "Invalid keys");
      const seen = /* @__PURE__ */ new Map();
      const merge2 = source === true ? null : /* @__PURE__ */ new Set();
      for (let key of keys) {
        key = Array.isArray(key) ? key : key.split(".");
        const ref = Reach(defaults2, key);
        if (ref && typeof ref === "object") {
          seen.set(ref, merge2 && Reach(source, key) || ref);
        } else if (merge2) {
          merge2.add(key);
        }
      }
      const copy = Clone(defaults2, {}, seen);
      if (!merge2) {
        return copy;
      }
      for (const key of merge2) {
        internals.reachCopy(copy, source, key);
      }
      const nullOverride = options.nullOverride !== void 0 ? options.nullOverride : false;
      return Merge(copy, source, { nullOverride, mergeArrays: false });
    };
    internals.reachCopy = function(dst, src, path4) {
      for (const segment of path4) {
        if (!(segment in src)) {
          return;
        }
        const val = src[segment];
        if (typeof val !== "object" || val === null) {
          return;
        }
        src = val;
      }
      const value = src;
      let ref = dst;
      for (let i = 0; i < path4.length - 1; ++i) {
        const segment = path4[i];
        if (typeof ref[segment] !== "object") {
          ref[segment] = {};
        }
        ref = ref[segment];
      }
      ref[path4[path4.length - 1]] = value;
    };
  }
});

// node_modules/@hapi/hoek/lib/bench.js
var require_bench = __commonJS({
  "node_modules/@hapi/hoek/lib/bench.js"(exports2, module2) {
    "use strict";
    var internals = {};
    module2.exports = internals.Bench = class {
      constructor() {
        this.ts = 0;
        this.reset();
      }
      reset() {
        this.ts = internals.Bench.now();
      }
      elapsed() {
        return internals.Bench.now() - this.ts;
      }
      static now() {
        const ts = process.hrtime();
        return ts[0] * 1e3 + ts[1] / 1e6;
      }
    };
  }
});

// node_modules/@hapi/hoek/lib/ignore.js
var require_ignore = __commonJS({
  "node_modules/@hapi/hoek/lib/ignore.js"(exports2, module2) {
    "use strict";
    module2.exports = function() {
    };
  }
});

// node_modules/@hapi/hoek/lib/block.js
var require_block = __commonJS({
  "node_modules/@hapi/hoek/lib/block.js"(exports2, module2) {
    "use strict";
    var Ignore = require_ignore();
    module2.exports = function() {
      return new Promise(Ignore);
    };
  }
});

// node_modules/@hapi/hoek/lib/deepEqual.js
var require_deepEqual = __commonJS({
  "node_modules/@hapi/hoek/lib/deepEqual.js"(exports2, module2) {
    "use strict";
    var Types = require_types();
    var internals = {
      mismatched: null
    };
    module2.exports = function(obj, ref, options) {
      options = Object.assign({ prototype: true }, options);
      return !!internals.isDeepEqual(obj, ref, options, []);
    };
    internals.isDeepEqual = function(obj, ref, options, seen) {
      if (obj === ref) {
        return obj !== 0 || 1 / obj === 1 / ref;
      }
      const type = typeof obj;
      if (type !== typeof ref) {
        return false;
      }
      if (obj === null || ref === null) {
        return false;
      }
      if (type === "function") {
        if (!options.deepFunction || obj.toString() !== ref.toString()) {
          return false;
        }
      } else if (type !== "object") {
        return obj !== obj && ref !== ref;
      }
      const instanceType = internals.getSharedType(obj, ref, !!options.prototype);
      switch (instanceType) {
        case Types.buffer:
          return Buffer && Buffer.prototype.equals.call(obj, ref);
        // $lab:coverage:ignore$
        case Types.promise:
          return obj === ref;
        case Types.regex:
        case Types.url:
          return obj.toString() === ref.toString();
        case internals.mismatched:
          return false;
      }
      for (let i = seen.length - 1; i >= 0; --i) {
        if (seen[i].isSame(obj, ref)) {
          return true;
        }
      }
      seen.push(new internals.SeenEntry(obj, ref));
      try {
        return !!internals.isDeepEqualObj(instanceType, obj, ref, options, seen);
      } finally {
        seen.pop();
      }
    };
    internals.getSharedType = function(obj, ref, checkPrototype) {
      if (checkPrototype) {
        if (Object.getPrototypeOf(obj) !== Object.getPrototypeOf(ref)) {
          return internals.mismatched;
        }
        return Types.getInternalProto(obj);
      }
      const type = Types.getInternalProto(obj);
      if (type !== Types.getInternalProto(ref)) {
        return internals.mismatched;
      }
      return type;
    };
    internals.valueOf = function(obj) {
      const objValueOf = obj.valueOf;
      if (objValueOf === void 0) {
        return obj;
      }
      try {
        return objValueOf.call(obj);
      } catch (err) {
        return err;
      }
    };
    internals.hasOwnEnumerableProperty = function(obj, key) {
      return Object.prototype.propertyIsEnumerable.call(obj, key);
    };
    internals.isSetSimpleEqual = function(obj, ref) {
      for (const entry of Set.prototype.values.call(obj)) {
        if (!Set.prototype.has.call(ref, entry)) {
          return false;
        }
      }
      return true;
    };
    internals.isDeepEqualObj = function(instanceType, obj, ref, options, seen) {
      const { isDeepEqual, valueOf, hasOwnEnumerableProperty } = internals;
      const { keys, getOwnPropertySymbols } = Object;
      if (instanceType === Types.array) {
        if (options.part) {
          for (const objValue of obj) {
            for (const refValue of ref) {
              if (isDeepEqual(objValue, refValue, options, seen)) {
                return true;
              }
            }
          }
        } else {
          if (obj.length !== ref.length) {
            return false;
          }
          for (let i = 0; i < obj.length; ++i) {
            if (!isDeepEqual(obj[i], ref[i], options, seen)) {
              return false;
            }
          }
          return true;
        }
      } else if (instanceType === Types.set) {
        if (obj.size !== ref.size) {
          return false;
        }
        if (!internals.isSetSimpleEqual(obj, ref)) {
          const ref2 = new Set(Set.prototype.values.call(ref));
          for (const objEntry of Set.prototype.values.call(obj)) {
            if (ref2.delete(objEntry)) {
              continue;
            }
            let found = false;
            for (const refEntry of ref2) {
              if (isDeepEqual(objEntry, refEntry, options, seen)) {
                ref2.delete(refEntry);
                found = true;
                break;
              }
            }
            if (!found) {
              return false;
            }
          }
        }
      } else if (instanceType === Types.map) {
        if (obj.size !== ref.size) {
          return false;
        }
        for (const [key, value] of Map.prototype.entries.call(obj)) {
          if (value === void 0 && !Map.prototype.has.call(ref, key)) {
            return false;
          }
          if (!isDeepEqual(value, Map.prototype.get.call(ref, key), options, seen)) {
            return false;
          }
        }
      } else if (instanceType === Types.error) {
        if (obj.name !== ref.name || obj.message !== ref.message) {
          return false;
        }
      }
      const valueOfObj = valueOf(obj);
      const valueOfRef = valueOf(ref);
      if ((obj !== valueOfObj || ref !== valueOfRef) && !isDeepEqual(valueOfObj, valueOfRef, options, seen)) {
        return false;
      }
      const objKeys = keys(obj);
      if (!options.part && objKeys.length !== keys(ref).length && !options.skip) {
        return false;
      }
      let skipped = 0;
      for (const key of objKeys) {
        if (options.skip && options.skip.includes(key)) {
          if (ref[key] === void 0) {
            ++skipped;
          }
          continue;
        }
        if (!hasOwnEnumerableProperty(ref, key)) {
          return false;
        }
        if (!isDeepEqual(obj[key], ref[key], options, seen)) {
          return false;
        }
      }
      if (!options.part && objKeys.length - skipped !== keys(ref).length) {
        return false;
      }
      if (options.symbols !== false) {
        const objSymbols = getOwnPropertySymbols(obj);
        const refSymbols = new Set(getOwnPropertySymbols(ref));
        for (const key of objSymbols) {
          if (!options.skip?.includes(key)) {
            if (hasOwnEnumerableProperty(obj, key)) {
              if (!hasOwnEnumerableProperty(ref, key)) {
                return false;
              }
              if (!isDeepEqual(obj[key], ref[key], options, seen)) {
                return false;
              }
            } else if (hasOwnEnumerableProperty(ref, key)) {
              return false;
            }
          }
          refSymbols.delete(key);
        }
        for (const key of refSymbols) {
          if (hasOwnEnumerableProperty(ref, key)) {
            return false;
          }
        }
      }
      return true;
    };
    internals.SeenEntry = class {
      constructor(obj, ref) {
        this.obj = obj;
        this.ref = ref;
      }
      isSame(obj, ref) {
        return this.obj === obj && this.ref === ref;
      }
    };
  }
});

// node_modules/@hapi/hoek/lib/escapeRegex.js
var require_escapeRegex = __commonJS({
  "node_modules/@hapi/hoek/lib/escapeRegex.js"(exports2, module2) {
    "use strict";
    module2.exports = function(string) {
      return string.replace(/[\^\$\.\*\+\-\?\=\!\:\|\\\/\(\)\[\]\{\}\,]/g, "\\$&");
    };
  }
});

// node_modules/@hapi/hoek/lib/contain.js
var require_contain = __commonJS({
  "node_modules/@hapi/hoek/lib/contain.js"(exports2, module2) {
    "use strict";
    var Assert = require_assert();
    var DeepEqual = require_deepEqual();
    var EscapeRegex = require_escapeRegex();
    var Utils = require_utils();
    var internals = {};
    module2.exports = function(ref, values, options = {}) {
      if (typeof values !== "object") {
        values = [values];
      }
      Assert(!Array.isArray(values) || values.length, "Values array cannot be empty");
      if (typeof ref === "string") {
        return internals.string(ref, values, options);
      }
      if (Array.isArray(ref)) {
        return internals.array(ref, values, options);
      }
      Assert(typeof ref === "object", "Reference must be string or an object");
      return internals.object(ref, values, options);
    };
    internals.array = function(ref, values, options) {
      if (!Array.isArray(values)) {
        values = [values];
      }
      if (!ref.length) {
        return false;
      }
      if (options.only && options.once && ref.length !== values.length) {
        return false;
      }
      let compare;
      const map = /* @__PURE__ */ new Map();
      for (const value of values) {
        if (!options.deep || !value || typeof value !== "object") {
          const existing = map.get(value);
          if (existing) {
            ++existing.allowed;
          } else {
            map.set(value, { allowed: 1, hits: 0 });
          }
        } else {
          compare = compare ?? internals.compare(options);
          let found = false;
          for (const [key, existing] of map.entries()) {
            if (compare(key, value)) {
              ++existing.allowed;
              found = true;
              break;
            }
          }
          if (!found) {
            map.set(value, { allowed: 1, hits: 0 });
          }
        }
      }
      let hits = 0;
      for (const item of ref) {
        let match;
        if (!options.deep || !item || typeof item !== "object") {
          match = map.get(item);
        } else {
          compare = compare ?? internals.compare(options);
          for (const [key, existing] of map.entries()) {
            if (compare(key, item)) {
              match = existing;
              break;
            }
          }
        }
        if (match) {
          ++match.hits;
          ++hits;
          if (options.once && match.hits > match.allowed) {
            return false;
          }
        }
      }
      if (options.only && hits !== ref.length) {
        return false;
      }
      for (const match of map.values()) {
        if (match.hits === match.allowed) {
          continue;
        }
        if (match.hits < match.allowed && !options.part) {
          return false;
        }
      }
      return !!hits;
    };
    internals.object = function(ref, values, options) {
      Assert(options.once === void 0, "Cannot use option once with object");
      const keys = Utils.keys(ref, options);
      if (!keys.length) {
        return false;
      }
      if (Array.isArray(values)) {
        return internals.array(keys, values, options);
      }
      const symbols = Object.getOwnPropertySymbols(values).filter((sym) => values.propertyIsEnumerable(sym));
      const targets = [...Object.keys(values), ...symbols];
      const compare = internals.compare(options);
      const set = new Set(targets);
      for (const key of keys) {
        if (!set.has(key)) {
          if (options.only) {
            return false;
          }
          continue;
        }
        if (!compare(values[key], ref[key])) {
          return false;
        }
        set.delete(key);
      }
      if (set.size) {
        return options.part ? set.size < targets.length : false;
      }
      return true;
    };
    internals.string = function(ref, values, options) {
      if (ref === "") {
        return values.length === 1 && values[0] === "" || // '' contains ''
        !options.once && !values.some((v) => v !== "");
      }
      const map = /* @__PURE__ */ new Map();
      const patterns = [];
      for (const value of values) {
        Assert(typeof value === "string", "Cannot compare string reference to non-string value");
        if (value) {
          const existing = map.get(value);
          if (existing) {
            ++existing.allowed;
          } else {
            map.set(value, { allowed: 1, hits: 0 });
            patterns.push(EscapeRegex(value));
          }
        } else if (options.once || options.only) {
          return false;
        }
      }
      if (!patterns.length) {
        return true;
      }
      const regex = new RegExp(`(${patterns.join("|")})`, "g");
      const leftovers = ref.replace(regex, ($0, $1) => {
        ++map.get($1).hits;
        return "";
      });
      if (options.only && leftovers) {
        return false;
      }
      let any = false;
      for (const match of map.values()) {
        if (match.hits) {
          any = true;
        }
        if (match.hits === match.allowed) {
          continue;
        }
        if (match.hits < match.allowed && !options.part) {
          return false;
        }
        if (options.once) {
          return false;
        }
      }
      return !!any;
    };
    internals.compare = function(options) {
      if (!options.deep) {
        return internals.shallow;
      }
      const hasOnly = options.only !== void 0;
      const hasPart = options.part !== void 0;
      const flags = {
        prototype: hasOnly ? options.only : hasPart ? !options.part : false,
        part: hasOnly ? !options.only : hasPart ? options.part : false
      };
      return (a, b) => DeepEqual(a, b, flags);
    };
    internals.shallow = function(a, b) {
      return a === b;
    };
  }
});

// node_modules/@hapi/hoek/lib/escapeHeaderAttribute.js
var require_escapeHeaderAttribute = __commonJS({
  "node_modules/@hapi/hoek/lib/escapeHeaderAttribute.js"(exports2, module2) {
    "use strict";
    var Assert = require_assert();
    module2.exports = function(attribute) {
      Assert(/^[ \w\!#\$%&'\(\)\*\+,\-\.\/\:;<\=>\?@\[\]\^`\{\|\}~\"\\]*$/.test(attribute), "Bad attribute value (" + attribute + ")");
      return attribute.replace(/\\/g, "\\\\").replace(/\"/g, '\\"');
    };
  }
});

// node_modules/@hapi/hoek/lib/escapeHtml.js
var require_escapeHtml = __commonJS({
  "node_modules/@hapi/hoek/lib/escapeHtml.js"(exports2, module2) {
    "use strict";
    var internals = {};
    module2.exports = function(input) {
      if (!input) {
        return "";
      }
      let escaped = "";
      for (let i = 0; i < input.length; ++i) {
        const charCode = input.charCodeAt(i);
        if (internals.isSafe(charCode)) {
          escaped += input[i];
        } else {
          escaped += internals.escapeHtmlChar(charCode);
        }
      }
      return escaped;
    };
    internals.escapeHtmlChar = function(charCode) {
      const namedEscape = internals.namedHtml.get(charCode);
      if (namedEscape) {
        return namedEscape;
      }
      if (charCode >= 256) {
        return "&#" + charCode + ";";
      }
      const hexValue2 = charCode.toString(16).padStart(2, "0");
      return `&#x${hexValue2};`;
    };
    internals.isSafe = function(charCode) {
      return internals.safeCharCodes.has(charCode);
    };
    internals.namedHtml = /* @__PURE__ */ new Map([
      [38, "&amp;"],
      [60, "&lt;"],
      [62, "&gt;"],
      [34, "&quot;"],
      [160, "&nbsp;"],
      [162, "&cent;"],
      [163, "&pound;"],
      [164, "&curren;"],
      [169, "&copy;"],
      [174, "&reg;"]
    ]);
    internals.safeCharCodes = (function() {
      const safe = /* @__PURE__ */ new Set();
      for (let i = 32; i < 123; ++i) {
        if (i >= 97 || // a-z
        i >= 65 && i <= 90 || // A-Z
        i >= 48 && i <= 57 || // 0-9
        i === 32 || // space
        i === 46 || // .
        i === 44 || // ,
        i === 45 || // -
        i === 58 || // :
        i === 95) {
          safe.add(i);
        }
      }
      return safe;
    })();
  }
});

// node_modules/@hapi/hoek/lib/escapeJson.js
var require_escapeJson = __commonJS({
  "node_modules/@hapi/hoek/lib/escapeJson.js"(exports2, module2) {
    "use strict";
    var internals = {};
    module2.exports = function(input) {
      if (!input) {
        return "";
      }
      return input.replace(/[<>&\u2028\u2029]/g, internals.escape);
    };
    internals.escape = function(char) {
      return internals.replacements.get(char);
    };
    internals.replacements = /* @__PURE__ */ new Map([
      ["<", "\\u003c"],
      [">", "\\u003e"],
      ["&", "\\u0026"],
      ["\u2028", "\\u2028"],
      ["\u2029", "\\u2029"]
    ]);
  }
});

// node_modules/@hapi/hoek/lib/flatten.js
var require_flatten = __commonJS({
  "node_modules/@hapi/hoek/lib/flatten.js"(exports2, module2) {
    "use strict";
    var internals = {};
    module2.exports = internals.flatten = function(array, target) {
      const result = target || [];
      for (const entry of array) {
        if (Array.isArray(entry)) {
          internals.flatten(entry, result);
        } else {
          result.push(entry);
        }
      }
      return result;
    };
  }
});

// node_modules/@hapi/hoek/lib/intersect.js
var require_intersect = __commonJS({
  "node_modules/@hapi/hoek/lib/intersect.js"(exports2, module2) {
    "use strict";
    var internals = {};
    module2.exports = function(array1, array2, options = {}) {
      if (!array1 || !array2) {
        return options.first ? null : [];
      }
      const common = [];
      const hash = Array.isArray(array1) ? new Set(array1) : array1;
      const found = /* @__PURE__ */ new Set();
      for (const value of array2) {
        if (internals.has(hash, value) && !found.has(value)) {
          if (options.first) {
            return value;
          }
          common.push(value);
          found.add(value);
        }
      }
      return options.first ? null : common;
    };
    internals.has = function(ref, key) {
      if (typeof ref.has === "function") {
        return ref.has(key);
      }
      return ref[key] !== void 0;
    };
  }
});

// node_modules/@hapi/hoek/lib/isPromise.js
var require_isPromise = __commonJS({
  "node_modules/@hapi/hoek/lib/isPromise.js"(exports2, module2) {
    "use strict";
    module2.exports = function(promise) {
      return typeof promise?.then === "function";
    };
  }
});

// node_modules/@hapi/hoek/lib/once.js
var require_once = __commonJS({
  "node_modules/@hapi/hoek/lib/once.js"(exports2, module2) {
    "use strict";
    var internals = {
      wrapped: /* @__PURE__ */ Symbol("wrapped")
    };
    module2.exports = function(method) {
      if (method[internals.wrapped]) {
        return method;
      }
      let once = false;
      const wrappedFn = function(...args) {
        if (!once) {
          once = true;
          method(...args);
        }
      };
      wrappedFn[internals.wrapped] = true;
      return wrappedFn;
    };
  }
});

// node_modules/@hapi/hoek/lib/reachTemplate.js
var require_reachTemplate = __commonJS({
  "node_modules/@hapi/hoek/lib/reachTemplate.js"(exports2, module2) {
    "use strict";
    var Reach = require_reach();
    module2.exports = function(obj, template, options) {
      return template.replace(/{([^{}]+)}/g, ($0, chain) => {
        const value = Reach(obj, chain, options);
        return value ?? "";
      });
    };
  }
});

// node_modules/@hapi/hoek/lib/wait.js
var require_wait = __commonJS({
  "node_modules/@hapi/hoek/lib/wait.js"(exports2, module2) {
    "use strict";
    var internals = {
      maxTimer: 2 ** 31 - 1
      // ~25 days
    };
    module2.exports = function(timeout, returnValue, options) {
      if (typeof timeout === "bigint") {
        timeout = Number(timeout);
      }
      if (timeout >= Number.MAX_SAFE_INTEGER) {
        timeout = Infinity;
      }
      if (typeof timeout !== "number" && timeout !== void 0) {
        throw new TypeError("Timeout must be a number or bigint");
      }
      return new Promise((resolve) => {
        const _setTimeout = options ? options.setTimeout : setTimeout;
        const activate = () => {
          const time = Math.min(timeout, internals.maxTimer);
          timeout -= time;
          _setTimeout(() => timeout > 0 ? activate() : resolve(returnValue), time);
        };
        if (timeout !== Infinity) {
          activate();
        }
      });
    };
  }
});

// node_modules/@hapi/hoek/lib/index.js
var require_lib = __commonJS({
  "node_modules/@hapi/hoek/lib/index.js"(exports2) {
    "use strict";
    exports2.applyToDefaults = require_applyToDefaults();
    exports2.assert = require_assert();
    exports2.AssertError = require_assertError();
    exports2.Bench = require_bench();
    exports2.block = require_block();
    exports2.clone = require_clone();
    exports2.contain = require_contain();
    exports2.deepEqual = require_deepEqual();
    exports2.escapeHeaderAttribute = require_escapeHeaderAttribute();
    exports2.escapeHtml = require_escapeHtml();
    exports2.escapeJson = require_escapeJson();
    exports2.escapeRegex = require_escapeRegex();
    exports2.flatten = require_flatten();
    exports2.ignore = require_ignore();
    exports2.intersect = require_intersect();
    exports2.isPromise = require_isPromise();
    exports2.merge = require_merge();
    exports2.once = require_once();
    exports2.reach = require_reach();
    exports2.reachTemplate = require_reachTemplate();
    exports2.stringify = require_stringify();
    exports2.wait = require_wait();
  }
});

// node_modules/joi/package.json
var require_package = __commonJS({
  "node_modules/joi/package.json"(exports2, module2) {
    module2.exports = {
      name: "joi",
      description: "Object schema validation",
      version: "18.2.9",
      repository: {
        url: "git://github.com/hapijs/joi.git",
        type: "git"
      },
      engines: {
        node: ">= 20"
      },
      main: "lib/index.js",
      types: "lib/index.d.ts",
      browser: "dist/joi-browser.min.js",
      files: [
        "lib/**/*",
        "dist/*"
      ],
      keywords: [
        "schema",
        "validation"
      ],
      dependencies: {
        "@hapi/address": "^5.1.1",
        "@hapi/formula": "^3.0.2",
        "@hapi/hoek": "^11.0.7",
        "@hapi/pinpoint": "^2.0.1",
        "@hapi/tlds": "^1.1.1",
        "@hapi/topo": "^6.0.2",
        "@standard-schema/spec": "^1.1.0"
      },
      devDependencies: {
        "@hapi/bourne": "^3.0.0",
        "@hapi/code": "^9.0.3",
        "@hapi/eslint-plugin": "^7.0.0",
        "@hapi/joi-legacy-test": "npm:@hapi/joi@15.x.x",
        "@hapi/lab": "^26.0.0",
        "@types/node": "^20.17.47",
        ajv: "^8.18.0",
        "ajv-formats": "^3.0.1",
        typescript: "^5.8.3"
      },
      scripts: {
        prepublishOnly: "cd browser && npm install && npm run build",
        test: "lab -t 100 -a @hapi/code -L -Y",
        "test-cov-html": "lab -r html -o coverage.html -a @hapi/code"
      },
      license: "BSD-3-Clause"
    };
  }
});

// node_modules/joi/lib/schemas.js
var require_schemas = __commonJS({
  "node_modules/joi/lib/schemas.js"(exports2) {
    "use strict";
    var Joi2 = require_lib5();
    var internals = {};
    internals.wrap = Joi2.string().min(1).max(2).allow(false);
    exports2.preferences = Joi2.object({
      allowUnknown: Joi2.boolean(),
      abortEarly: Joi2.boolean(),
      artifacts: Joi2.boolean(),
      cache: Joi2.boolean(),
      context: Joi2.object(),
      convert: Joi2.boolean(),
      dateFormat: Joi2.valid("date", "iso", "string", "time", "utc"),
      debug: Joi2.boolean(),
      errors: {
        escapeHtml: Joi2.boolean(),
        label: Joi2.valid("path", "key", false),
        language: [
          Joi2.string(),
          Joi2.object().ref()
        ],
        render: Joi2.boolean(),
        stack: Joi2.boolean(),
        wrap: {
          label: internals.wrap,
          array: internals.wrap,
          string: internals.wrap
        }
      },
      externals: Joi2.boolean(),
      messages: Joi2.object(),
      noDefaults: Joi2.boolean(),
      nonEnumerables: Joi2.boolean(),
      presence: Joi2.valid("required", "optional", "forbidden"),
      skipFunctions: Joi2.boolean(),
      stripUnknown: Joi2.object({
        arrays: Joi2.boolean(),
        objects: Joi2.boolean()
      }).or("arrays", "objects").allow(true, false),
      warnings: Joi2.boolean()
    }).strict();
    internals.nameRx = /^[a-zA-Z0-9]\w*$/;
    internals.rule = Joi2.object({
      alias: Joi2.array().items(Joi2.string().pattern(internals.nameRx)).single(),
      args: Joi2.array().items(
        Joi2.string(),
        Joi2.object({
          name: Joi2.string().pattern(internals.nameRx).required(),
          ref: Joi2.boolean(),
          assert: Joi2.alternatives([
            Joi2.function(),
            Joi2.object().schema()
          ]).conditional("ref", { is: true, then: Joi2.required() }),
          normalize: Joi2.function(),
          message: Joi2.string().when("assert", { is: Joi2.function(), then: Joi2.required() })
        })
      ),
      convert: Joi2.boolean(),
      manifest: Joi2.boolean(),
      method: Joi2.function().allow(false),
      multi: Joi2.boolean(),
      validate: Joi2.function(),
      jsonSchema: Joi2.function()
    });
    exports2.extension = Joi2.object({
      type: Joi2.alternatives([
        Joi2.string(),
        Joi2.object().regex()
      ]).required(),
      args: Joi2.function(),
      cast: Joi2.object().pattern(internals.nameRx, Joi2.object({
        from: Joi2.function().maxArity(1).required(),
        to: Joi2.function().minArity(1).maxArity(2).required()
      })),
      base: Joi2.object().schema().when("type", { is: Joi2.object().regex(), then: Joi2.forbidden() }),
      coerce: [
        Joi2.function().maxArity(3),
        Joi2.object({ method: Joi2.function().maxArity(3).required(), from: Joi2.array().items(Joi2.string()).single() })
      ],
      flags: Joi2.object().pattern(internals.nameRx, Joi2.object({
        setter: Joi2.string(),
        default: Joi2.any()
      })),
      manifest: {
        build: Joi2.function().arity(2)
      },
      messages: [Joi2.object(), Joi2.string()],
      modifiers: Joi2.object().pattern(internals.nameRx, Joi2.function().minArity(1).maxArity(2)),
      overrides: Joi2.object().pattern(internals.nameRx, Joi2.function()),
      prepare: Joi2.function().maxArity(3),
      rebuild: Joi2.function().arity(1),
      rules: Joi2.object().pattern(internals.nameRx, internals.rule),
      jsonSchema: Joi2.function(),
      terms: Joi2.object().pattern(internals.nameRx, Joi2.object({
        init: Joi2.array().allow(null).required(),
        manifest: Joi2.object().pattern(/.+/, [
          Joi2.valid("schema", "single"),
          Joi2.object({
            mapped: Joi2.object({
              from: Joi2.string().required(),
              to: Joi2.string().required()
            }).required()
          })
        ])
      })),
      validate: Joi2.function().maxArity(3)
    }).strict();
    exports2.extensions = Joi2.array().items(Joi2.object(), Joi2.function().arity(1)).strict();
    internals.desc = {
      buffer: Joi2.object({
        buffer: Joi2.string()
      }),
      func: Joi2.object({
        function: Joi2.function().required(),
        options: {
          literal: true
        }
      }),
      override: Joi2.object({
        override: true
      }),
      ref: Joi2.object({
        ref: Joi2.object({
          type: Joi2.valid("value", "global", "local"),
          path: Joi2.array().required(),
          separator: Joi2.string().length(1).allow(false),
          ancestor: Joi2.number().min(0).integer().allow("root"),
          map: Joi2.array().items(Joi2.array().length(2)).min(1),
          adjust: Joi2.function(),
          iterables: Joi2.boolean(),
          in: Joi2.boolean(),
          render: Joi2.boolean()
        }).required()
      }),
      regex: Joi2.object({
        regex: Joi2.string().min(3)
      }),
      special: Joi2.object({
        special: Joi2.valid("deep").required()
      }),
      template: Joi2.object({
        template: Joi2.string().required(),
        options: Joi2.object()
      }),
      value: Joi2.object({
        value: Joi2.alternatives([Joi2.object(), Joi2.array()]).required()
      })
    };
    internals.desc.entity = Joi2.alternatives([
      Joi2.array().items(Joi2.link("...")),
      Joi2.boolean(),
      Joi2.function(),
      Joi2.number(),
      Joi2.string(),
      internals.desc.buffer,
      internals.desc.func,
      internals.desc.ref,
      internals.desc.regex,
      internals.desc.special,
      internals.desc.template,
      internals.desc.value,
      Joi2.link("/")
    ]);
    internals.desc.values = Joi2.array().items(
      null,
      Joi2.boolean(),
      Joi2.function(),
      Joi2.number().allow(Infinity, -Infinity, NaN),
      Joi2.string().allow(""),
      Joi2.symbol(),
      internals.desc.buffer,
      internals.desc.func,
      internals.desc.override,
      internals.desc.ref,
      internals.desc.regex,
      internals.desc.template,
      internals.desc.value
    );
    internals.desc.messages = Joi2.object().pattern(/.+/, [
      Joi2.string(),
      internals.desc.template,
      Joi2.object().pattern(/.+/, [Joi2.string(), internals.desc.template])
    ]);
    exports2.description = Joi2.object({
      type: Joi2.string().required(),
      flags: Joi2.object({
        cast: Joi2.string(),
        default: Joi2.any(),
        description: Joi2.string(),
        empty: Joi2.link("/"),
        failover: internals.desc.entity,
        id: Joi2.string(),
        label: Joi2.string(),
        only: true,
        presence: ["optional", "required", "forbidden"],
        result: ["raw", "strip"],
        strip: Joi2.boolean(),
        unit: Joi2.string()
      }).unknown(),
      preferences: {
        allowUnknown: Joi2.boolean(),
        abortEarly: Joi2.boolean(),
        artifacts: Joi2.boolean(),
        cache: Joi2.boolean(),
        convert: Joi2.boolean(),
        dateFormat: ["date", "iso", "string", "time", "utc"],
        errors: {
          escapeHtml: Joi2.boolean(),
          label: ["path", "key"],
          language: [
            Joi2.string(),
            internals.desc.ref
          ],
          wrap: {
            label: internals.wrap,
            array: internals.wrap
          }
        },
        externals: Joi2.boolean(),
        messages: internals.desc.messages,
        noDefaults: Joi2.boolean(),
        nonEnumerables: Joi2.boolean(),
        presence: ["required", "optional", "forbidden"],
        skipFunctions: Joi2.boolean(),
        stripUnknown: Joi2.object({
          arrays: Joi2.boolean(),
          objects: Joi2.boolean()
        }).or("arrays", "objects").allow(true, false),
        warnings: Joi2.boolean()
      },
      allow: internals.desc.values,
      invalid: internals.desc.values,
      rules: Joi2.array().min(1).items({
        name: Joi2.string().required(),
        args: Joi2.object().min(1),
        keep: Joi2.boolean(),
        message: [
          Joi2.string(),
          internals.desc.messages
        ],
        warn: Joi2.boolean()
      }),
      // Terms
      keys: Joi2.object().pattern(/.*/, Joi2.link("/")),
      link: internals.desc.ref
    }).pattern(/^[a-z]\w*$/, Joi2.any());
  }
});

// node_modules/@hapi/formula/lib/index.js
var require_lib2 = __commonJS({
  "node_modules/@hapi/formula/lib/index.js"(exports2) {
    "use strict";
    var internals = {
      operators: ["!", "^", "*", "/", "%", "+", "-", "<", "<=", ">", ">=", "==", "!=", "&&", "||", "??"],
      operatorCharacters: ["!", "^", "*", "/", "%", "+", "-", "<", "=", ">", "&", "|", "?"],
      operatorsOrder: [["^"], ["*", "/", "%"], ["+", "-"], ["<", "<=", ">", ">="], ["==", "!="], ["&&"], ["||", "??"]],
      operatorsPrefix: ["!", "n"],
      literals: {
        '"': '"',
        "`": "`",
        "'": "'",
        "[": "]"
      },
      numberRx: /^(?:[0-9]*(\.[0-9]*)?){1}$/,
      tokenRx: /^[\w\$\#\.\@\:\{\}]+$/,
      symbol: /* @__PURE__ */ Symbol("formula"),
      settings: /* @__PURE__ */ Symbol("settings")
    };
    exports2.Parser = class {
      constructor(string, options = {}) {
        if (!options[internals.settings] && options.constants) {
          for (const constant in options.constants) {
            const value = options.constants[constant];
            if (value !== null && !["boolean", "number", "string"].includes(typeof value)) {
              throw new Error(`Formula constant ${constant} contains invalid ${typeof value} value type`);
            }
          }
        }
        this.settings = options[internals.settings] ? options : Object.assign({ [internals.settings]: true, constants: {}, functions: {} }, options);
        this.single = null;
        this._parts = null;
        this._parse(string);
      }
      _parse(string) {
        let parts = [];
        let current = "";
        let parenthesis = 0;
        let literal = false;
        const flush = (inner) => {
          if (parenthesis) {
            throw new Error("Formula missing closing parenthesis");
          }
          const last = parts.length ? parts[parts.length - 1] : null;
          if (!literal && !current && !inner) {
            return;
          }
          if (last && last.type === "reference" && inner === ")") {
            last.type = "function";
            last.value = this._subFormula(current, last.value);
            current = "";
            return;
          }
          if (inner === ")") {
            const sub = new exports2.Parser(current, this.settings);
            parts.push({ type: "segment", value: sub });
          } else if (literal) {
            if (literal === "]") {
              parts.push({ type: "reference", value: current });
              current = "";
              return;
            }
            parts.push({ type: "literal", value: current });
          } else if (internals.operatorCharacters.includes(current)) {
            if (last && last.type === "operator" && internals.operators.includes(last.value + current)) {
              last.value += current;
            } else {
              parts.push({ type: "operator", value: current });
            }
          } else if (current.match(internals.numberRx)) {
            parts.push({ type: "constant", value: parseFloat(current) });
          } else if (this.settings.constants[current] !== void 0) {
            parts.push({ type: "constant", value: this.settings.constants[current] });
          } else {
            if (!current.match(internals.tokenRx)) {
              throw new Error(`Formula contains invalid token: ${current}`);
            }
            parts.push({ type: "reference", value: current });
          }
          current = "";
        };
        for (const c of string) {
          if (literal) {
            if (c === literal) {
              flush();
              literal = false;
            } else {
              current += c;
            }
          } else if (parenthesis) {
            if (c === "(") {
              current += c;
              ++parenthesis;
            } else if (c === ")") {
              --parenthesis;
              if (!parenthesis) {
                flush(c);
              } else {
                current += c;
              }
            } else {
              current += c;
            }
          } else if (c in internals.literals) {
            literal = internals.literals[c];
          } else if (c === "(") {
            flush();
            ++parenthesis;
          } else if (internals.operatorCharacters.includes(c)) {
            flush();
            current = c;
            flush();
          } else if (c !== " ") {
            current += c;
          } else {
            flush();
          }
        }
        flush();
        parts = parts.map((part, i) => {
          if (part.type !== "operator" || part.value !== "-" || i && parts[i - 1].type !== "operator") {
            return part;
          }
          return { type: "operator", value: "n" };
        });
        let operator = false;
        for (const part of parts) {
          if (part.type === "operator") {
            if (internals.operatorsPrefix.includes(part.value)) {
              continue;
            }
            if (!operator) {
              throw new Error("Formula contains an operator in invalid position");
            }
            if (!internals.operators.includes(part.value)) {
              throw new Error(`Formula contains an unknown operator ${part.value}`);
            }
          } else if (operator) {
            throw new Error("Formula missing expected operator");
          }
          operator = !operator;
        }
        if (!operator) {
          throw new Error("Formula contains invalid trailing operator");
        }
        if (parts.length === 1 && ["reference", "literal", "constant"].includes(parts[0].type)) {
          this.single = { type: parts[0].type === "reference" ? "reference" : "value", value: parts[0].value };
        }
        this._parts = parts.map((part) => {
          if (part.type === "operator") {
            return internals.operatorsPrefix.includes(part.value) ? part : part.value;
          }
          if (part.type !== "reference") {
            return part.value;
          }
          if (this.settings.tokenRx && !this.settings.tokenRx.test(part.value)) {
            throw new Error(`Formula contains invalid reference ${part.value}`);
          }
          if (this.settings.reference) {
            return this.settings.reference(part.value);
          }
          return internals.reference(part.value);
        });
      }
      _subFormula(string, name) {
        const method = this.settings.functions[name];
        if (typeof method !== "function") {
          throw new Error(`Formula contains unknown function ${name}`);
        }
        let args = [];
        if (string) {
          let current = "";
          let parenthesis = 0;
          let literal = false;
          const flush = () => {
            if (!current) {
              throw new Error(`Formula contains function ${name} with invalid arguments ${string}`);
            }
            args.push(current);
            current = "";
          };
          for (let i = 0; i < string.length; ++i) {
            const c = string[i];
            if (literal) {
              current += c;
              if (c === literal) {
                literal = false;
              }
            } else if (c in internals.literals && !parenthesis) {
              current += c;
              literal = internals.literals[c];
            } else if (c === "," && !parenthesis) {
              flush();
            } else {
              current += c;
              if (c === "(") {
                ++parenthesis;
              } else if (c === ")") {
                --parenthesis;
              }
            }
          }
          flush();
        }
        args = args.map((arg) => new exports2.Parser(arg, this.settings));
        return function(context) {
          const innerValues = [];
          for (const arg of args) {
            innerValues.push(arg.evaluate(context));
          }
          return method.call(context, ...innerValues);
        };
      }
      evaluate(context) {
        const parts = this._parts.slice();
        for (let i = parts.length - 2; i >= 0; --i) {
          const part = parts[i];
          if (part && part.type === "operator") {
            const current = parts[i + 1];
            parts.splice(i + 1, 1);
            const value = internals.evaluate(current, context);
            parts[i] = internals.single(part.value, value);
          }
        }
        internals.operatorsOrder.forEach((set) => {
          for (let i = 1; i < parts.length - 1; ) {
            if (set.includes(parts[i])) {
              const operator = parts[i];
              const left = internals.evaluate(parts[i - 1], context);
              const right = internals.evaluate(parts[i + 1], context);
              parts.splice(i, 2);
              const result = internals.calculate(operator, left, right);
              parts[i - 1] = result === 0 ? 0 : result;
            } else {
              i += 2;
            }
          }
        });
        return internals.evaluate(parts[0], context);
      }
    };
    exports2.Parser.prototype[internals.symbol] = true;
    internals.reference = function(name) {
      return function(context) {
        return context && context[name] !== void 0 ? context[name] : null;
      };
    };
    internals.evaluate = function(part, context) {
      if (part === null) {
        return null;
      }
      if (typeof part === "function") {
        return part(context);
      }
      if (part[internals.symbol]) {
        return part.evaluate(context);
      }
      return part;
    };
    internals.single = function(operator, value) {
      if (operator === "!") {
        return value ? false : true;
      }
      const negative = -value;
      if (negative === 0) {
        return 0;
      }
      return negative;
    };
    internals.calculate = function(operator, left, right) {
      if (operator === "??") {
        return internals.exists(left) ? left : right;
      }
      if (typeof left === "string" || typeof right === "string") {
        if (operator === "+") {
          left = internals.exists(left) ? left : "";
          right = internals.exists(right) ? right : "";
          return left + right;
        }
      } else {
        switch (operator) {
          case "^":
            return Math.pow(left, right);
          case "*":
            return left * right;
          case "/":
            return left / right;
          case "%":
            return left % right;
          case "+":
            return left + right;
          case "-":
            return left - right;
        }
      }
      switch (operator) {
        case "<":
          return left < right;
        case "<=":
          return left <= right;
        case ">":
          return left > right;
        case ">=":
          return left >= right;
        case "==":
          return left === right;
        case "!=":
          return left !== right;
        case "&&":
          return left && right;
        case "||":
          return left || right;
      }
      return null;
    };
    internals.exists = function(value) {
      return value !== null && value !== void 0;
    };
  }
});

// node_modules/joi/lib/annotate.js
var require_annotate = __commonJS({
  "node_modules/joi/lib/annotate.js"(exports2) {
    "use strict";
    var { clone } = require_lib();
    var Common = require_common2();
    var internals = {
      annotations: /* @__PURE__ */ Symbol("annotations")
    };
    exports2.error = function(stripColorCodes) {
      if (!this._original || typeof this._original !== "object") {
        return this.details[0].message;
      }
      const redFgEscape = stripColorCodes ? "" : "\x1B[31m";
      const redBgEscape = stripColorCodes ? "" : "\x1B[41m";
      const endColor = stripColorCodes ? "" : "\x1B[0m";
      const obj = clone(this._original);
      for (let i = this.details.length - 1; i >= 0; --i) {
        const pos = i + 1;
        const error = this.details[i];
        const path4 = error.path;
        let node = obj;
        for (let j = 0; ; ++j) {
          const seg = path4[j];
          if (Common.isSchema(node)) {
            node = node.clone();
          }
          if (j + 1 < path4.length && typeof node[seg] !== "string") {
            node = node[seg];
          } else {
            const refAnnotations = node[internals.annotations] || { errors: {}, missing: {} };
            node[internals.annotations] = refAnnotations;
            const cacheKey = seg || error.context.key;
            if (node[seg] !== void 0) {
              refAnnotations.errors[cacheKey] = refAnnotations.errors[cacheKey] || [];
              refAnnotations.errors[cacheKey].push(pos);
            } else {
              refAnnotations.missing[cacheKey] = pos;
            }
            break;
          }
        }
      }
      const replacers = {
        key: /_\$key\$_([, \d]+)_\$end\$_"/g,
        missing: /"_\$miss\$_([^|]+)\|(\d+)_\$end\$_": "__missing__"/g,
        arrayIndex: /\s*"_\$idx\$_([, \d]+)_\$end\$_",?\n(.*)/g,
        specials: /"\[(NaN|Symbol.*|-?Infinity|function.*|\(.*)]"/g
      };
      let message = internals.safeStringify(obj, 2).replace(replacers.key, ($0, $1) => `" ${redFgEscape}[${$1}]${endColor}`).replace(replacers.missing, ($0, $1, $2) => `${redBgEscape}"${$1}"${endColor}${redFgEscape} [${$2}]: -- missing --${endColor}`).replace(replacers.arrayIndex, ($0, $1, $2) => `
${$2} ${redFgEscape}[${$1}]${endColor}`).replace(replacers.specials, ($0, $1) => $1);
      message = `${message}
${redFgEscape}`;
      for (let i = 0; i < this.details.length; ++i) {
        const pos = i + 1;
        message = `${message}
[${pos}] ${this.details[i].message}`;
      }
      message = message + endColor;
      return message;
    };
    internals.safeStringify = function(obj, spaces) {
      return JSON.stringify(obj, internals.serializer(), spaces);
    };
    internals.serializer = function() {
      const keys = [];
      const stack = [];
      const cycleReplacer = (key, value) => {
        if (stack[0] === value) {
          return "[Circular ~]";
        }
        return "[Circular ~." + keys.slice(0, stack.indexOf(value)).join(".") + "]";
      };
      return function(key, value) {
        if (stack.length > 0) {
          const thisPos = stack.indexOf(this);
          if (~thisPos) {
            stack.length = thisPos + 1;
            keys.length = thisPos + 1;
            keys[thisPos] = key;
          } else {
            stack.push(this);
            keys.push(key);
          }
          if (~stack.indexOf(value)) {
            value = cycleReplacer.call(this, key, value);
          }
        } else {
          stack.push(value);
        }
        if (value) {
          const annotations = value[internals.annotations];
          if (annotations) {
            if (Array.isArray(value)) {
              const annotated = [];
              for (let i = 0; i < value.length; ++i) {
                if (annotations.errors[i]) {
                  annotated.push(`_$idx$_${annotations.errors[i].sort().join(", ")}_$end$_`);
                }
                annotated.push(value[i]);
              }
              value = annotated;
            } else {
              for (const errorKey of Object.keys(annotations.errors)) {
                value[`${errorKey}_$key$_${annotations.errors[errorKey].sort().join(", ")}_$end$_`] = value[errorKey];
                value[errorKey] = void 0;
              }
              for (const missingKey of Object.keys(annotations.missing)) {
                value[`_$miss$_${missingKey}|${annotations.missing[missingKey]}_$end$_`] = "__missing__";
              }
            }
            return value;
          }
        }
        if (value === Infinity || value === -Infinity || Number.isNaN(value) || typeof value === "function" || typeof value === "symbol") {
          return "[" + value.toString() + "]";
        }
        return value;
      };
    };
  }
});

// node_modules/joi/lib/errors.js
var require_errors = __commonJS({
  "node_modules/joi/lib/errors.js"(exports2) {
    "use strict";
    var Annotate = require_annotate();
    var Common = require_common2();
    var Template = require_template();
    exports2.Report = class {
      constructor(code, value, local, flags, messages, state, prefs) {
        this.code = code;
        this.flags = flags;
        this.messages = messages;
        this.path = state.path;
        this.prefs = prefs;
        this.state = state;
        this.value = value;
        this.message = null;
        this.template = null;
        this.local = local || {};
        this.local.label = exports2.label(this.flags, this.state, this.prefs, this.messages);
        if (this.value !== void 0 && !this.local.hasOwnProperty("value")) {
          this.local.value = this.value;
        }
        if (this.path.length) {
          const key = this.path[this.path.length - 1];
          if (typeof key !== "object") {
            this.local.key = key;
          }
        }
      }
      _setTemplate(template) {
        this.template = template;
        if (!this.flags.label && this.path.length === 0) {
          const localized = this._template(this.template, "root");
          if (localized) {
            this.local.label = localized;
          }
        }
      }
      toString() {
        if (this.message) {
          return this.message;
        }
        const code = this.code;
        if (!this.prefs.errors.render) {
          return this.code;
        }
        const template = this._template(this.template) || this._template(this.prefs.messages) || this._template(this.messages);
        if (template === void 0) {
          return `Error code "${code}" is not defined, your custom type is missing the correct messages definition`;
        }
        this.message = template.render(this.value, this.state, this.prefs, this.local, { errors: this.prefs.errors, messages: [this.prefs.messages, this.messages] });
        if (!this.prefs.errors.label) {
          this.message = this.message.replace(/^"" /, "").trim();
        }
        return this.message;
      }
      _template(messages, code) {
        return exports2.template(this.value, messages, code || this.code, this.state, this.prefs);
      }
    };
    exports2.path = function(path4) {
      let label = "";
      for (const segment of path4) {
        if (typeof segment === "object") {
          continue;
        }
        if (typeof segment === "string") {
          if (label) {
            label += ".";
          }
          label += segment;
        } else {
          label += `[${segment}]`;
        }
      }
      return label;
    };
    exports2.template = function(value, messages, code, state, prefs) {
      if (!messages) {
        return;
      }
      if (Template.isTemplate(messages)) {
        return code !== "root" ? messages : null;
      }
      let lang = prefs.errors.language;
      if (Common.isResolvable(lang)) {
        lang = lang.resolve(value, state, prefs);
      }
      if (lang && messages[lang]) {
        if (messages[lang][code] !== void 0) {
          return messages[lang][code];
        }
        if (messages[lang]["*"] !== void 0) {
          return messages[lang]["*"];
        }
      }
      if (!messages[code]) {
        return messages["*"];
      }
      return messages[code];
    };
    exports2.label = function(flags, state, prefs, messages) {
      if (!prefs.errors.label) {
        return "";
      }
      if (flags.label) {
        return flags.label;
      }
      let path4 = state.path;
      if (prefs.errors.label === "key" && state.path.length > 1) {
        path4 = state.path.slice(-1);
      }
      const normalized = exports2.path(path4);
      if (normalized) {
        return normalized;
      }
      return exports2.template(null, prefs.messages, "root", state, prefs) || messages && exports2.template(null, messages, "root", state, prefs) || "value";
    };
    exports2.process = function(errors, original, prefs) {
      if (!errors) {
        return null;
      }
      const { override, message, details } = exports2.details(errors);
      if (override) {
        return override;
      }
      if (prefs.errors.stack) {
        return new exports2.ValidationError(message, details, original);
      }
      const limit = Error.stackTraceLimit;
      Error.stackTraceLimit = 0;
      const validationError = new exports2.ValidationError(message, details, original);
      Error.stackTraceLimit = limit;
      return validationError;
    };
    exports2.details = function(errors, options = {}) {
      let messages = [];
      const details = [];
      for (const item of errors) {
        if (item instanceof Error) {
          if (options.override !== false) {
            return { override: item };
          }
          const message2 = item.toString();
          messages.push(message2);
          details.push({
            message: message2,
            type: "override",
            context: { error: item }
          });
          continue;
        }
        const message = item.toString();
        messages.push(message);
        details.push({
          message,
          path: item.path.filter((v) => typeof v !== "object"),
          type: item.code,
          context: item.local
        });
      }
      if (messages.length > 1) {
        messages = [...new Set(messages)];
      }
      return { message: messages.join(". "), details };
    };
    exports2.ValidationError = class extends Error {
      constructor(message, details, original) {
        super(message);
        this._original = original;
        this.details = details;
      }
      static isError(err) {
        return err instanceof exports2.ValidationError;
      }
    };
    exports2.ValidationError.prototype.isJoi = true;
    exports2.ValidationError.prototype.name = "ValidationError";
    exports2.ValidationError.prototype.annotate = Annotate.error;
  }
});

// node_modules/joi/lib/ref.js
var require_ref2 = __commonJS({
  "node_modules/joi/lib/ref.js"(exports2) {
    "use strict";
    var { assert, reach } = require_lib();
    var Common = require_common2();
    var Template;
    var internals = {
      symbol: /* @__PURE__ */ Symbol("ref"),
      // Used to internally identify references (shared with other joi versions)
      defaults: {
        adjust: null,
        in: false,
        iterables: null,
        map: null,
        separator: ".",
        type: "value"
      }
    };
    exports2.create = function(key, options = {}) {
      assert(typeof key === "string", "Invalid reference key:", key);
      Common.assertOptions(options, ["adjust", "ancestor", "in", "iterables", "map", "prefix", "render", "separator"]);
      assert(!options.prefix || typeof options.prefix === "object", "options.prefix must be of type object");
      const ref = Object.assign({}, internals.defaults, options);
      delete ref.prefix;
      const separator = ref.separator;
      const context = internals.context(key, separator, options.prefix);
      ref.type = context.type;
      key = context.key;
      if (ref.type === "value") {
        if (context.root) {
          assert(!separator || key[0] !== separator, "Cannot specify relative path with root prefix");
          ref.ancestor = "root";
          if (!key) {
            key = null;
          }
        }
        if (separator && separator === key) {
          key = null;
          ref.ancestor = 0;
        } else {
          if (ref.ancestor !== void 0) {
            assert(!separator || !key || key[0] !== separator, "Cannot combine prefix with ancestor option");
          } else {
            const [ancestor, slice] = internals.ancestor(key, separator);
            if (slice) {
              key = key.slice(slice);
              if (key === "") {
                key = null;
              }
            }
            ref.ancestor = ancestor;
          }
        }
      }
      ref.path = separator ? key === null ? [] : key.split(separator) : [key];
      return new internals.Ref(ref);
    };
    exports2.in = function(key, options = {}) {
      return exports2.create(key, { ...options, in: true });
    };
    exports2.isRef = function(ref) {
      return ref ? !!ref[Common.symbols.ref] : false;
    };
    internals.Ref = class {
      constructor(options) {
        assert(typeof options === "object", "Invalid reference construction");
        Common.assertOptions(options, [
          "adjust",
          "ancestor",
          "in",
          "iterables",
          "map",
          "path",
          "render",
          "separator",
          "type",
          // Copied
          "depth",
          "key",
          "root",
          "display"
          // Overridden
        ]);
        assert([false, void 0].includes(options.separator) || typeof options.separator === "string" && options.separator.length === 1, "Invalid separator");
        assert(!options.adjust || typeof options.adjust === "function", "options.adjust must be a function");
        assert(!options.map || Array.isArray(options.map), "options.map must be an array");
        assert(!options.map || !options.adjust, "Cannot set both map and adjust options");
        Object.assign(this, internals.defaults, options);
        assert(this.type === "value" || this.ancestor === void 0, "Non-value references cannot reference ancestors");
        if (Array.isArray(this.map)) {
          this.map = new Map(this.map);
        }
        this.depth = this.path.length;
        this.key = this.path.length ? this.path.join(this.separator) : null;
        this.root = this.path[0];
        this.updateDisplay();
      }
      resolve(value, state, prefs, local, options = {}) {
        assert(!this.in || options.in, "Invalid in() reference usage");
        if (this.type === "global") {
          return this._resolve(prefs.context, state, options);
        }
        if (this.type === "local") {
          return this._resolve(local, state, options);
        }
        if (!this.ancestor) {
          return this._resolve(value, state, options);
        }
        if (this.ancestor === "root") {
          return this._resolve(state.ancestors[state.ancestors.length - 1], state, options);
        }
        assert(this.ancestor <= state.ancestors.length, "Invalid reference exceeds the schema root:", this.display);
        return this._resolve(state.ancestors[this.ancestor - 1], state, options);
      }
      _resolve(target, state, options) {
        let resolved;
        if (this.type === "value" && state.mainstay.shadow && options.shadow !== false) {
          resolved = state.mainstay.shadow.get(this.absolute(state));
        }
        if (resolved === void 0) {
          resolved = reach(target, this.path, { iterables: this.iterables, functions: true });
        }
        if (this.adjust) {
          resolved = this.adjust(resolved);
        }
        if (this.map) {
          const mapped = this.map.get(resolved);
          if (mapped !== void 0) {
            resolved = mapped;
          }
        }
        if (state.mainstay) {
          state.mainstay.tracer.resolve(state, this, resolved);
        }
        return resolved;
      }
      toString() {
        return this.display;
      }
      absolute(state) {
        return [...state.path.slice(0, -this.ancestor), ...this.path];
      }
      clone() {
        return new internals.Ref(this);
      }
      describe() {
        const ref = { path: this.path };
        if (this.type !== "value") {
          ref.type = this.type;
        }
        if (this.separator !== ".") {
          ref.separator = this.separator;
        }
        if (this.type === "value" && this.ancestor !== 1) {
          ref.ancestor = this.ancestor;
        }
        if (this.map) {
          ref.map = [...this.map];
        }
        for (const key of ["adjust", "iterables", "render"]) {
          if (this[key] !== null && this[key] !== void 0) {
            ref[key] = this[key];
          }
        }
        if (this.in !== false) {
          ref.in = true;
        }
        return { ref };
      }
      updateDisplay() {
        const key = this.key !== null ? this.key : "";
        if (this.type !== "value") {
          this.display = `ref:${this.type}:${key}`;
          return;
        }
        if (!this.separator) {
          this.display = `ref:${key}`;
          return;
        }
        if (!this.ancestor) {
          this.display = `ref:${this.separator}${key}`;
          return;
        }
        if (this.ancestor === "root") {
          this.display = `ref:root:${key}`;
          return;
        }
        if (this.ancestor === 1) {
          this.display = `ref:${key || ".."}`;
          return;
        }
        const lead = new Array(this.ancestor + 1).fill(this.separator).join("");
        this.display = `ref:${lead}${key || ""}`;
      }
    };
    internals.Ref.prototype[Common.symbols.ref] = true;
    exports2.build = function(desc) {
      desc = Object.assign({}, internals.defaults, desc);
      if (desc.type === "value" && desc.ancestor === void 0) {
        desc.ancestor = 1;
      }
      return new internals.Ref(desc);
    };
    internals.context = function(key, separator, prefix = {}) {
      key = key.trim();
      if (prefix) {
        const globalp = prefix.global === void 0 ? "$" : prefix.global;
        if (globalp !== separator && key.startsWith(globalp)) {
          return { key: key.slice(globalp.length), type: "global" };
        }
        const local = prefix.local === void 0 ? "#" : prefix.local;
        if (local !== separator && key.startsWith(local)) {
          return { key: key.slice(local.length), type: "local" };
        }
        const root = prefix.root === void 0 ? "/" : prefix.root;
        if (root !== separator && key.startsWith(root)) {
          return { key: key.slice(root.length), type: "value", root: true };
        }
      }
      return { key, type: "value" };
    };
    internals.ancestor = function(key, separator) {
      if (!separator) {
        return [1, 0];
      }
      if (key[0] !== separator) {
        return [1, 0];
      }
      if (key[1] !== separator) {
        return [0, 1];
      }
      let i = 2;
      while (key[i] === separator) {
        ++i;
      }
      return [i - 1, i];
    };
    exports2.toSibling = 0;
    exports2.toParent = 1;
    exports2.Manager = class {
      constructor() {
        this.refs = [];
      }
      register(source, target) {
        if (!source) {
          return;
        }
        target = target === void 0 ? exports2.toParent : target;
        if (Array.isArray(source)) {
          for (const ref of source) {
            this.register(ref, target);
          }
          return;
        }
        if (Common.isSchema(source)) {
          for (const item of source._refs.refs) {
            if (item.ancestor - target >= 0) {
              this.refs.push({ ancestor: item.ancestor - target, root: item.root });
            }
          }
          return;
        }
        if (exports2.isRef(source) && source.type === "value" && source.ancestor - target >= 0) {
          this.refs.push({ ancestor: source.ancestor - target, root: source.root });
        }
        Template = Template || require_template();
        if (Template.isTemplate(source)) {
          this.register(source.refs(), target);
        }
      }
      get length() {
        return this.refs.length;
      }
      clone() {
        const copy = new exports2.Manager();
        copy.refs = this.refs.slice();
        return copy;
      }
      reset() {
        this.refs = [];
      }
      roots() {
        return this.refs.filter((ref) => !ref.ancestor).map((ref) => ref.root);
      }
    };
  }
});

// node_modules/joi/lib/template.js
var require_template = __commonJS({
  "node_modules/joi/lib/template.js"(exports2, module2) {
    "use strict";
    var { assert, clone, escapeHtml } = require_lib();
    var Formula = require_lib2();
    var Common = require_common2();
    var Errors = require_errors();
    var Ref = require_ref2();
    var internals = {
      symbol: /* @__PURE__ */ Symbol("template"),
      opens: new Array(1e3).join("\0"),
      closes: new Array(1e3).join(""),
      dateFormat: {
        date: Date.prototype.toDateString,
        iso: Date.prototype.toISOString,
        string: Date.prototype.toString,
        time: Date.prototype.toTimeString,
        utc: Date.prototype.toUTCString
      }
    };
    module2.exports = exports2 = internals.Template = class {
      constructor(source, options) {
        assert(typeof source === "string", "Template source must be a string");
        assert(!source.includes("\0") && !source.includes(""), "Template source cannot contain reserved control characters");
        this.source = source;
        this.rendered = source;
        this._template = null;
        if (options) {
          const { functions, ...opts } = options;
          this._settings = Object.keys(opts).length ? clone(opts) : void 0;
          this._functions = functions;
          if (this._functions) {
            assert(Object.keys(this._functions).every((key) => typeof key === "string"), "Functions keys must be strings");
            assert(Object.values(this._functions).every((key) => typeof key === "function"), "Functions values must be functions");
          }
        } else {
          this._settings = void 0;
          this._functions = void 0;
        }
        this._parse();
      }
      _parse() {
        if (!this.source.includes("{")) {
          return;
        }
        const encoded = internals.encode(this.source);
        const parts = internals.split(encoded);
        let refs = false;
        const processed = [];
        const head = parts.shift();
        if (head) {
          processed.push(internals.decode(head));
        }
        for (const part of parts) {
          const raw = part[0] !== "{";
          const ender = raw ? "}" : "}}";
          const end = part.indexOf(ender);
          if (end === -1 || // Ignore non-matching closing
          part[1] === "{") {
            processed.push(`{${internals.decode(part)}`);
            continue;
          }
          let variable = part.slice(raw ? 0 : 1, end);
          const wrapped = variable[0] === ":";
          if (wrapped) {
            variable = variable.slice(1);
          }
          const dynamic = this._ref(internals.decode(variable), { raw, wrapped });
          processed.push(dynamic);
          if (typeof dynamic !== "string") {
            refs = true;
          }
          const rest = part.slice(end + ender.length);
          if (rest) {
            processed.push(internals.decode(rest));
          }
        }
        if (!refs) {
          this.rendered = processed.join("");
          return;
        }
        this._template = processed;
      }
      static date(date, prefs) {
        return internals.dateFormat[prefs.dateFormat].call(date);
      }
      describe(options = {}) {
        if (!this._settings && options.compact) {
          return this.source;
        }
        const desc = { template: this.source };
        if (this._settings) {
          desc.options = this._settings;
        }
        if (this._functions) {
          desc.functions = this._functions;
        }
        return desc;
      }
      static build(desc) {
        return new internals.Template(desc.template, desc.options || desc.functions ? { ...desc.options, functions: desc.functions } : void 0);
      }
      isDynamic() {
        return !!this._template;
      }
      static isTemplate(template) {
        return template ? !!template[Common.symbols.template] : false;
      }
      refs() {
        if (!this._template) {
          return;
        }
        const refs = [];
        for (const part of this._template) {
          if (typeof part !== "string") {
            refs.push(...part.refs);
          }
        }
        return refs;
      }
      resolve(value, state, prefs, local) {
        if (this._template && this._template.length === 1) {
          return this._part(
            this._template[0],
            /* context -> [*/
            value,
            state,
            prefs,
            local,
            {}
            /*] */
          );
        }
        return this.render(value, state, prefs, local);
      }
      _part(part, ...args) {
        if (part.ref) {
          return part.ref.resolve(...args);
        }
        return part.formula.evaluate(args);
      }
      render(value, state, prefs, local, options = {}) {
        if (!this.isDynamic()) {
          return this.rendered;
        }
        const parts = [];
        for (const part of this._template) {
          if (typeof part === "string") {
            parts.push(part);
          } else {
            const rendered = this._part(
              part,
              /* context -> [*/
              value,
              state,
              prefs,
              local,
              options
              /*] */
            );
            const string = internals.stringify(rendered, value, state, prefs, local, options);
            if (string !== void 0) {
              const result = part.raw || (options.errors && options.errors.escapeHtml) === false ? string : escapeHtml(string);
              parts.push(internals.wrap(result, part.wrapped && prefs.errors.wrap.label));
            }
          }
        }
        return parts.join("");
      }
      _ref(content, { raw, wrapped }) {
        const refs = [];
        const reference = (variable) => {
          const ref = Ref.create(variable, this._settings);
          refs.push(ref);
          return (context) => {
            const resolved = ref.resolve(...context);
            return resolved !== void 0 ? resolved : null;
          };
        };
        try {
          const functions = this._functions ? { ...internals.functions, ...this._functions } : internals.functions;
          var formula = new Formula.Parser(content, { reference, functions, constants: internals.constants });
        } catch (err) {
          err.message = `Invalid template variable "${content}" fails due to: ${err.message}`;
          throw err;
        }
        if (formula.single) {
          if (formula.single.type === "reference") {
            const ref = refs[0];
            return { ref, raw, refs, wrapped: wrapped || ref.type === "local" && ref.key === "label" };
          }
          return internals.stringify(formula.single.value);
        }
        return { formula, raw, refs };
      }
      toString() {
        return this.source;
      }
    };
    internals.Template.prototype[Common.symbols.template] = true;
    internals.Template.prototype.isImmutable = true;
    internals.encode = function(string) {
      return string.replace(/\\(\{+)/g, ($0, $1) => {
        return internals.opens.slice(0, $1.length);
      }).replace(/\\(\}+)/g, ($0, $1) => {
        return internals.closes.slice(0, $1.length);
      });
    };
    internals.decode = function(string) {
      return string.replace(/\u0000/g, "{").replace(/\u0001/g, "}");
    };
    internals.split = function(string) {
      const parts = [];
      let current = "";
      for (let i = 0; i < string.length; ++i) {
        const char = string[i];
        if (char === "{") {
          let next = "";
          while (i + 1 < string.length && string[i + 1] === "{") {
            next += "{";
            ++i;
          }
          parts.push(current);
          current = next;
        } else {
          current += char;
        }
      }
      parts.push(current);
      return parts;
    };
    internals.wrap = function(value, ends) {
      if (!ends) {
        return value;
      }
      if (ends.length === 1) {
        return `${ends}${value}${ends}`;
      }
      return `${ends[0]}${value}${ends[1]}`;
    };
    internals.stringify = function(value, original, state, prefs, local, options = {}) {
      const type = typeof value;
      const wrap = prefs && prefs.errors && prefs.errors.wrap || {};
      let skipWrap = false;
      if (Ref.isRef(value) && value.render) {
        skipWrap = value.in;
        value = value.resolve(original, state, prefs, local, { in: value.in, ...options });
      }
      if (value === null) {
        return "null";
      }
      if (type === "string") {
        return internals.wrap(value, options.arrayItems && wrap.string);
      }
      if (type === "number" || type === "function" || type === "symbol") {
        return value.toString();
      }
      if (type !== "object") {
        return JSON.stringify(value);
      }
      if (value instanceof Date) {
        return internals.Template.date(value, prefs);
      }
      if (value instanceof Map) {
        const pairs = [];
        for (const [key, sym] of value.entries()) {
          pairs.push(`${key.toString()} -> ${sym.toString()}`);
        }
        value = pairs;
      }
      if (!Array.isArray(value)) {
        return value.toString();
      }
      const values = [];
      for (const item of value) {
        values.push(internals.stringify(item, original, state, prefs, local, { arrayItems: true, ...options }));
      }
      return internals.wrap(values.join(", "), !skipWrap && wrap.array);
    };
    internals.constants = {
      true: true,
      false: false,
      null: null,
      second: 1e3,
      minute: 60 * 1e3,
      hour: 60 * 60 * 1e3,
      day: 24 * 60 * 60 * 1e3
    };
    internals.functions = {
      if(condition, then, otherwise) {
        return condition ? then : otherwise;
      },
      length(item) {
        if (typeof item === "string") {
          return item.length;
        }
        if (!item || typeof item !== "object") {
          return null;
        }
        if (Array.isArray(item)) {
          return item.length;
        }
        return Object.keys(item).length;
      },
      msg(code) {
        const [value, state, prefs, local, options] = this;
        const messages = options.messages;
        if (!messages) {
          return "";
        }
        const template = Errors.template(value, messages[0], code, state, prefs) || Errors.template(value, messages[1], code, state, prefs);
        if (!template) {
          return "";
        }
        return template.render(value, state, prefs, local, options);
      },
      number(value) {
        if (typeof value === "number") {
          return value;
        }
        if (typeof value === "string") {
          return parseFloat(value);
        }
        if (typeof value === "boolean") {
          return value ? 1 : 0;
        }
        if (value instanceof Date) {
          return value.getTime();
        }
        return null;
      }
    };
  }
});

// node_modules/joi/lib/messages.js
var require_messages = __commonJS({
  "node_modules/joi/lib/messages.js"(exports2) {
    "use strict";
    var { assert, clone } = require_lib();
    var Template = require_template();
    exports2.compile = function(messages, target) {
      if (typeof messages === "string") {
        assert(!target, "Cannot set single message string");
        return new Template(messages);
      }
      if (Template.isTemplate(messages)) {
        assert(!target, "Cannot set single message template");
        return messages;
      }
      assert(typeof messages === "object" && !Array.isArray(messages), "Invalid message options");
      target = target ? clone(target) : {};
      for (const code of Object.keys(messages)) {
        const message = messages[code];
        if (code === "root" || Template.isTemplate(message)) {
          assert(code !== "__proto__", "Cannot use __proto__ as a message code");
          target[code] = message;
          continue;
        }
        if (typeof message === "string") {
          assert(code !== "__proto__", "Cannot use __proto__ as a message code");
          target[code] = new Template(message);
          continue;
        }
        assert(typeof message === "object" && !Array.isArray(message), "Invalid message for", code);
        const language = code;
        const localizedTarget = Object.hasOwn(target, language) ? target[language] : {};
        target[language] = localizedTarget;
        for (const key of Object.keys(message)) {
          const localized = message[key];
          assert(key !== "__proto__", "Cannot use __proto__ as a message code");
          if (key === "root" || Template.isTemplate(localized)) {
            localizedTarget[key] = localized;
            continue;
          }
          assert(typeof localized === "string", "Invalid message for", key, "in", language);
          localizedTarget[key] = new Template(localized);
        }
      }
      return target;
    };
    exports2.decompile = function(messages) {
      const target = {};
      for (const code of Object.keys(messages)) {
        const message = messages[code];
        if (code === "root") {
          target.root = message;
          continue;
        }
        if (Template.isTemplate(message)) {
          target[code] = message.describe({ compact: true });
          continue;
        }
        const language = code;
        target[language] = {};
        for (const key of Object.keys(message)) {
          const localized = message[key];
          if (key === "root") {
            target[language].root = localized;
            continue;
          }
          target[language][key] = localized.describe({ compact: true });
        }
      }
      return target;
    };
    exports2.merge = function(base, extended) {
      if (!base) {
        return exports2.compile(extended);
      }
      if (!extended) {
        return base;
      }
      if (typeof extended === "string") {
        return new Template(extended);
      }
      if (Template.isTemplate(extended)) {
        return extended;
      }
      const target = clone(base);
      for (const code of Object.keys(extended)) {
        const message = extended[code];
        if (code === "root" || Template.isTemplate(message)) {
          assert(code !== "__proto__", "Cannot use __proto__ as a message code");
          target[code] = message;
          continue;
        }
        if (typeof message === "string") {
          assert(code !== "__proto__", "Cannot use __proto__ as a message code");
          target[code] = new Template(message);
          continue;
        }
        assert(typeof message === "object" && !Array.isArray(message), "Invalid message for", code);
        const language = code;
        const localizedTarget = Object.hasOwn(target, language) ? target[language] : {};
        target[language] = localizedTarget;
        for (const key of Object.keys(message)) {
          const localized = message[key];
          assert(key !== "__proto__", "Cannot use __proto__ as a message code");
          if (key === "root" || Template.isTemplate(localized)) {
            localizedTarget[key] = localized;
            continue;
          }
          assert(typeof localized === "string", "Invalid message for", key, "in", language);
          localizedTarget[key] = new Template(localized);
        }
      }
      return target;
    };
  }
});

// node_modules/joi/lib/common.js
var require_common2 = __commonJS({
  "node_modules/joi/lib/common.js"(exports2) {
    "use strict";
    var { assert: Assert, AssertError } = require_lib();
    var Pkg = require_package();
    var Messages;
    var Schemas2;
    var internals = {
      isoDate: /^(?:[-+]\d{2})?(?:\d{4}(?!\d{2}\b))(?:(-?)(?:(?:0[1-9]|1[0-2])(?:\1(?:[12]\d|0[1-9]|3[01]))?|W(?:[0-4]\d|5[0-2])(?:-?[1-7])?|(?:00[1-9]|0[1-9]\d|[12]\d{2}|3(?:[0-5]\d|6[1-6])))(?![T]$|[T][\d]+Z$)(?:[T\s](?:(?:(?:[01]\d|2[0-3])(?:(:?)[0-5]\d)?|24\:?00)(?:[.,]\d+(?!:))?)(?:\2[0-5]\d(?:[.,]\d+)?)?(?:[Z]|(?:[+-])(?:[01]\d|2[0-3])(?::?[0-5]\d)?)?)?)?$/
    };
    exports2.version = Pkg.version;
    exports2.defaults = {
      abortEarly: true,
      allowUnknown: false,
      artifacts: false,
      cache: true,
      context: null,
      convert: true,
      dateFormat: "iso",
      errors: {
        escapeHtml: false,
        label: "path",
        language: null,
        render: true,
        stack: false,
        wrap: {
          label: '"',
          array: "[]"
        }
      },
      externals: true,
      messages: {},
      nonEnumerables: false,
      noDefaults: false,
      presence: "optional",
      skipFunctions: false,
      stripUnknown: false,
      warnings: false
    };
    exports2.symbols = {
      any: /* @__PURE__ */ Symbol.for("@hapi/joi/schema"),
      // Used to internally identify any-based types (shared with other joi versions)
      arraySingle: /* @__PURE__ */ Symbol("arraySingle"),
      deepDefault: /* @__PURE__ */ Symbol("deepDefault"),
      errors: /* @__PURE__ */ Symbol("errors"),
      literal: /* @__PURE__ */ Symbol("literal"),
      override: /* @__PURE__ */ Symbol("override"),
      parent: /* @__PURE__ */ Symbol("parent"),
      prefs: /* @__PURE__ */ Symbol("prefs"),
      ref: /* @__PURE__ */ Symbol("ref"),
      template: /* @__PURE__ */ Symbol("template"),
      values: /* @__PURE__ */ Symbol("values")
    };
    exports2.assertOptions = function(options, keys, name = "Options") {
      Assert(options && typeof options === "object" && !Array.isArray(options), "Options must be of type object");
      const unknownKeys = Object.keys(options).filter((k) => !keys.includes(k));
      Assert(unknownKeys.length === 0, `${name} contain unknown keys: ${unknownKeys}`);
    };
    exports2.checkPreferences = function(prefs) {
      Schemas2 = Schemas2 || require_schemas();
      const result = Schemas2.preferences.validate(prefs);
      if (result.error) {
        throw new AssertError([result.error.details[0].message]);
      }
    };
    exports2.compare = function(a, b, operator) {
      switch (operator) {
        case "=":
          return a === b;
        case ">":
          return a > b;
        case "<":
          return a < b;
        case ">=":
          return a >= b;
        case "<=":
          return a <= b;
      }
    };
    exports2.default = function(value, defaultValue) {
      return value === void 0 ? defaultValue : value;
    };
    exports2.intersect = function(set, other) {
      if (typeof set.intersection === "function") {
        return set.intersection(other);
      }
      const result = /* @__PURE__ */ new Set();
      for (const item of set) {
        if (other.has(item)) {
          result.add(item);
        }
      }
      return result;
    };
    exports2.isIsoDate = function(date) {
      return internals.isoDate.test(date);
    };
    exports2.isNumber = function(value) {
      return typeof value === "number" && !isNaN(value);
    };
    exports2.isResolvable = function(obj) {
      if (!obj) {
        return false;
      }
      return obj[exports2.symbols.ref] || obj[exports2.symbols.template];
    };
    exports2.isSchema = function(schema, options = {}) {
      const any = schema && schema[exports2.symbols.any];
      if (!any) {
        return false;
      }
      Assert(options.legacy || any.version === exports2.version, "Cannot mix different versions of joi schemas");
      return true;
    };
    exports2.isValues = function(obj) {
      return obj[exports2.symbols.values];
    };
    exports2.limit = function(value) {
      return Number.isSafeInteger(value) && value >= 0;
    };
    exports2.preferences = function(target, source) {
      Messages = Messages || require_messages();
      target = target || {};
      source = source || {};
      const merged = Object.assign({}, target, source);
      if (source.errors && target.errors) {
        merged.errors = Object.assign({}, target.errors, source.errors);
        merged.errors.wrap = Object.assign({}, target.errors.wrap, source.errors.wrap);
      }
      if (source.messages) {
        merged.messages = Messages.compile(source.messages, target.messages);
      }
      delete merged[exports2.symbols.prefs];
      return merged;
    };
    exports2.tryWithPath = function(fn, key, options = {}) {
      try {
        return fn();
      } catch (err) {
        if (err.path !== void 0) {
          err.path = key + "." + err.path;
        } else {
          err.path = key;
        }
        if (options.append) {
          err.message = `${err.message} (${err.path})`;
        }
        throw err;
      }
    };
    exports2.validateArg = function(value, label, { assert, message }) {
      if (exports2.isSchema(assert)) {
        const result = assert.validate(value);
        if (!result.error) {
          return;
        }
        return result.error.message;
      } else if (!assert(value)) {
        return label ? `${label} ${message}` : message;
      }
    };
    exports2.verifyFlat = function(args, method) {
      for (const arg of args) {
        Assert(!Array.isArray(arg), "Method no longer accepts array arguments:", method);
      }
    };
  }
});

// node_modules/joi/lib/cache.js
var require_cache = __commonJS({
  "node_modules/joi/lib/cache.js"(exports2) {
    "use strict";
    var { assert, clone } = require_lib();
    var Common = require_common2();
    var internals = {
      max: 1e3,
      supported: /* @__PURE__ */ new Set(["undefined", "boolean", "number", "string"])
    };
    exports2.provider = {
      provision(options) {
        return new internals.Cache(options);
      }
    };
    internals.Cache = class {
      constructor(options = {}) {
        Common.assertOptions(options, ["max"]);
        assert(options.max === void 0 || options.max && options.max > 0 && isFinite(options.max), "Invalid max cache size");
        this._max = options.max || internals.max;
        this._map = /* @__PURE__ */ new Map();
        this._list = new internals.List();
      }
      get length() {
        return this._map.size;
      }
      set(key, value) {
        if (key !== null && !internals.supported.has(typeof key)) {
          return;
        }
        let node = this._map.get(key);
        if (node) {
          node.value = value;
          this._list.first(node);
          return;
        }
        node = this._list.unshift({ key, value });
        this._map.set(key, node);
        this._compact();
      }
      get(key) {
        const node = this._map.get(key);
        if (node) {
          this._list.first(node);
          return clone(node.value);
        }
      }
      _compact() {
        if (this._map.size > this._max) {
          const node = this._list.pop();
          this._map.delete(node.key);
        }
      }
    };
    internals.List = class {
      constructor() {
        this.tail = null;
        this.head = null;
      }
      unshift(node) {
        node.next = null;
        node.prev = this.head;
        if (this.head) {
          this.head.next = node;
        }
        this.head = node;
        if (!this.tail) {
          this.tail = node;
        }
        return node;
      }
      first(node) {
        if (node === this.head) {
          return;
        }
        this._remove(node);
        this.unshift(node);
      }
      pop() {
        return this._remove(this.tail);
      }
      _remove(node) {
        const { next, prev } = node;
        next.prev = prev;
        if (prev) {
          prev.next = next;
        }
        if (node === this.tail) {
          this.tail = next;
        }
        node.prev = null;
        node.next = null;
        return node;
      }
    };
  }
});

// node_modules/joi/lib/compile.js
var require_compile = __commonJS({
  "node_modules/joi/lib/compile.js"(exports2) {
    "use strict";
    var { assert } = require_lib();
    var Common = require_common2();
    var Ref = require_ref2();
    var internals = {};
    exports2.schema = function(Joi2, config, options = {}) {
      Common.assertOptions(options, ["appendPath", "override"]);
      try {
        return internals.schema(Joi2, config, options);
      } catch (err) {
        if (options.appendPath && err.path !== void 0) {
          err.message = `${err.message} (${err.path})`;
        }
        throw err;
      }
    };
    internals.schema = function(Joi2, config, options) {
      assert(config !== void 0, "Invalid undefined schema");
      if (Array.isArray(config)) {
        assert(config.length, "Invalid empty array schema");
        if (config.length === 1) {
          config = config[0];
        }
      }
      const valid = (base, ...values) => {
        if (options.override !== false) {
          return base.valid(Joi2.override, ...values);
        }
        return base.valid(...values);
      };
      if (internals.simple(config)) {
        return valid(Joi2, config);
      }
      if (typeof config === "function") {
        return Joi2.custom(config);
      }
      assert(typeof config === "object", "Invalid schema content:", typeof config);
      if (Common.isResolvable(config)) {
        return valid(Joi2, config);
      }
      if (Common.isSchema(config)) {
        return config;
      }
      if (Array.isArray(config)) {
        for (const item of config) {
          if (!internals.simple(item)) {
            return Joi2.alternatives().try(...config);
          }
        }
        return valid(Joi2, ...config);
      }
      if (config instanceof RegExp) {
        return Joi2.string().regex(config);
      }
      if (config instanceof Date) {
        return valid(Joi2.date(), config);
      }
      assert(Object.getPrototypeOf(config) === Object.getPrototypeOf({}), "Schema can only contain plain objects");
      return Joi2.object().keys(config);
    };
    exports2.ref = function(id, options) {
      return Ref.isRef(id) ? id : Ref.create(id, options);
    };
    exports2.compile = function(root, schema, options = {}) {
      Common.assertOptions(options, ["legacy"]);
      const any = schema && schema[Common.symbols.any];
      if (any) {
        assert(options.legacy || any.version === Common.version, "Cannot mix different versions of joi schemas:", any.version, Common.version);
        return schema;
      }
      if (typeof schema !== "object" || !options.legacy) {
        return exports2.schema(root, schema, { appendPath: true });
      }
      const compiler = internals.walk(schema);
      if (!compiler) {
        return exports2.schema(root, schema, { appendPath: true });
      }
      return compiler.compile(compiler.root, schema);
    };
    internals.walk = function(schema) {
      if (typeof schema !== "object") {
        return null;
      }
      if (Array.isArray(schema)) {
        for (const item of schema) {
          const compiler = internals.walk(item);
          if (compiler) {
            return compiler;
          }
        }
        return null;
      }
      const any = schema[Common.symbols.any];
      if (any) {
        return { root: schema[any.root], compile: any.compile };
      }
      assert(Object.getPrototypeOf(schema) === Object.getPrototypeOf({}), "Schema can only contain plain objects");
      for (const key of Object.keys(schema)) {
        const compiler = internals.walk(schema[key]);
        if (compiler) {
          return compiler;
        }
      }
      return null;
    };
    internals.simple = function(value) {
      return value === null || ["boolean", "string", "number"].includes(typeof value);
    };
    exports2.when = function(schema, condition, options) {
      if (options === void 0) {
        assert(condition && typeof condition === "object", "Missing options");
        options = condition;
        condition = Ref.create(".");
      }
      if (Array.isArray(options)) {
        options = { switch: options };
      }
      Common.assertOptions(options, ["is", "not", "then", "otherwise", "switch", "break"]);
      if (Common.isSchema(condition)) {
        assert(options.is === void 0, '"is" can not be used with a schema condition');
        assert(options.not === void 0, '"not" can not be used with a schema condition');
        assert(options.switch === void 0, '"switch" can not be used with a schema condition');
        return internals.condition(schema, { is: condition, then: options.then, otherwise: options.otherwise, break: options.break });
      }
      assert(Ref.isRef(condition) || typeof condition === "string", "Invalid condition:", condition);
      assert(options.not === void 0 || options.is === void 0, 'Cannot combine "is" with "not"');
      if (options.switch === void 0) {
        let rule2 = options;
        if (options.not !== void 0) {
          rule2 = { is: options.not, then: options.otherwise, otherwise: options.then, break: options.break };
        }
        let is = rule2.is !== void 0 ? schema.$_compile(rule2.is) : schema.$_root.invalid(null, false, 0, "").required();
        assert(rule2.then !== void 0 || rule2.otherwise !== void 0, 'options must have at least one of "then", "otherwise", or "switch"');
        assert(rule2.break === void 0 || rule2.then === void 0 || rule2.otherwise === void 0, "Cannot specify then, otherwise, and break all together");
        if (options.is !== void 0 && !Ref.isRef(options.is) && !Common.isSchema(options.is)) {
          is = is.required();
        }
        return internals.condition(schema, { ref: exports2.ref(condition), is, then: rule2.then, otherwise: rule2.otherwise, break: rule2.break });
      }
      assert(Array.isArray(options.switch), '"switch" must be an array');
      assert(options.is === void 0, 'Cannot combine "switch" with "is"');
      assert(options.not === void 0, 'Cannot combine "switch" with "not"');
      assert(options.then === void 0, 'Cannot combine "switch" with "then"');
      const rule = {
        ref: exports2.ref(condition),
        switch: [],
        break: options.break
      };
      for (let i = 0; i < options.switch.length; ++i) {
        const test2 = options.switch[i];
        const last = i === options.switch.length - 1;
        Common.assertOptions(test2, last ? ["is", "then", "otherwise"] : ["is", "then"]);
        assert(test2.is !== void 0, 'Switch statement missing "is"');
        assert(test2.then !== void 0, 'Switch statement missing "then"');
        const item = {
          is: schema.$_compile(test2.is),
          then: schema.$_compile(test2.then)
        };
        if (!Ref.isRef(test2.is) && !Common.isSchema(test2.is)) {
          item.is = item.is.required();
        }
        if (last) {
          assert(options.otherwise === void 0 || test2.otherwise === void 0, 'Cannot specify "otherwise" inside and outside a "switch"');
          const otherwise = options.otherwise !== void 0 ? options.otherwise : test2.otherwise;
          if (otherwise !== void 0) {
            assert(rule.break === void 0, "Cannot specify both otherwise and break");
            item.otherwise = schema.$_compile(otherwise);
          }
        }
        rule.switch.push(item);
      }
      return rule;
    };
    internals.condition = function(schema, condition) {
      for (const key of ["then", "otherwise"]) {
        if (condition[key] === void 0) {
          delete condition[key];
        } else {
          condition[key] = schema.$_compile(condition[key]);
        }
      }
      return condition;
    };
  }
});

// node_modules/joi/lib/extend.js
var require_extend = __commonJS({
  "node_modules/joi/lib/extend.js"(exports2) {
    "use strict";
    var { assert, clone } = require_lib();
    var Common = require_common2();
    var Messages = require_messages();
    var internals = {};
    exports2.type = function(from, options) {
      const base = Object.getPrototypeOf(from);
      const prototype2 = clone(base);
      const schema = from._assign(Object.create(prototype2));
      const def = Object.assign({}, options);
      delete def.base;
      prototype2._definition = def;
      const parent = base._definition || {};
      def.messages = Messages.merge(parent.messages, def.messages);
      def.properties = Object.assign({}, parent.properties, def.properties);
      schema.type = def.type;
      def.flags = Object.assign({}, parent.flags, def.flags);
      const terms = Object.assign({}, parent.terms);
      if (def.terms) {
        for (const name of Object.keys(def.terms)) {
          const term = def.terms[name];
          assert(schema.$_terms[name] === void 0, "Invalid term override for", def.type, name);
          schema.$_terms[name] = term.init;
          terms[name] = term;
        }
      }
      def.terms = terms;
      if (!def.args) {
        def.args = parent.args;
      }
      def.prepare = internals.prepare(def.prepare, parent.prepare);
      if (def.coerce) {
        if (typeof def.coerce === "function") {
          def.coerce = { method: def.coerce };
        }
        if (def.coerce.from && !Array.isArray(def.coerce.from)) {
          def.coerce = { method: def.coerce.method, from: [].concat(def.coerce.from) };
        }
      }
      def.coerce = internals.coerce(def.coerce, parent.coerce);
      def.validate = internals.validate(def.validate, parent.validate);
      const rules = Object.assign({}, parent.rules);
      if (def.rules) {
        for (const name of Object.keys(def.rules)) {
          const rule = def.rules[name];
          assert(typeof rule === "object", "Invalid rule definition for", def.type, name);
          let method = rule.method;
          if (method === void 0) {
            method = function() {
              return this.$_addRule(name);
            };
          }
          if (method) {
            assert(!prototype2[name], "Rule conflict in", def.type, name);
            prototype2[name] = method;
          }
          assert(!rules[name], "Rule conflict in", def.type, name);
          rules[name] = rule;
          if (rule.alias) {
            const aliases = [].concat(rule.alias);
            for (const alias of aliases) {
              prototype2[alias] = rule.method;
            }
          }
          if (rule.args) {
            rule.argsByName = /* @__PURE__ */ new Map();
            rule.args = rule.args.map((arg) => {
              if (typeof arg === "string") {
                arg = { name: arg };
              }
              assert(!rule.argsByName.has(arg.name), "Duplicated argument name", arg.name);
              if (Common.isSchema(arg.assert)) {
                arg.assert = arg.assert.strict().label(arg.name);
              }
              rule.argsByName.set(arg.name, arg);
              return arg;
            });
          }
        }
      }
      def.rules = rules;
      if (!def.jsonSchema) {
        def.jsonSchema = parent.jsonSchema;
      }
      const modifiers = Object.assign({}, parent.modifiers);
      if (def.modifiers) {
        for (const name of Object.keys(def.modifiers)) {
          assert(!prototype2[name], "Rule conflict in", def.type, name);
          const modifier = def.modifiers[name];
          assert(typeof modifier === "function", "Invalid modifier definition for", def.type, name);
          const method = function(arg) {
            return this.rule({ [name]: arg });
          };
          prototype2[name] = method;
          modifiers[name] = modifier;
        }
      }
      def.modifiers = modifiers;
      if (def.overrides) {
        prototype2._super = base;
        schema.$_super = {};
        for (const override of Object.keys(def.overrides)) {
          assert(base[override], "Cannot override missing", override);
          def.overrides[override][Common.symbols.parent] = base[override];
          schema.$_super[override] = base[override].bind(schema);
        }
        Object.assign(prototype2, def.overrides);
      }
      def.cast = Object.assign({}, parent.cast, def.cast);
      const manifest = Object.assign({}, parent.manifest, def.manifest);
      manifest.build = internals.build(def.manifest && def.manifest.build, parent.manifest && parent.manifest.build);
      def.manifest = manifest;
      def.rebuild = internals.rebuild(def.rebuild, parent.rebuild);
      return schema;
    };
    internals.build = function(child, parent) {
      if (!child || !parent) {
        return child || parent;
      }
      return function(obj, desc) {
        return parent(child(obj, desc), desc);
      };
    };
    internals.coerce = function(child, parent) {
      if (!child || !parent) {
        return child || parent;
      }
      return {
        from: child.from && parent.from ? [.../* @__PURE__ */ new Set([...child.from, ...parent.from])] : null,
        method(value, helpers) {
          let coerced;
          if (!parent.from || parent.from.includes(typeof value)) {
            coerced = parent.method(value, helpers);
            if (coerced) {
              if (coerced.errors || coerced.value === void 0) {
                return coerced;
              }
              value = coerced.value;
            }
          }
          if (!child.from || child.from.includes(typeof value)) {
            const own2 = child.method(value, helpers);
            if (own2) {
              return own2;
            }
          }
          return coerced;
        }
      };
    };
    internals.prepare = function(child, parent) {
      if (!child || !parent) {
        return child || parent;
      }
      return function(value, helpers) {
        const prepared = child(value, helpers);
        if (prepared) {
          if (prepared.errors || prepared.value === void 0) {
            return prepared;
          }
          value = prepared.value;
        }
        return parent(value, helpers) || prepared;
      };
    };
    internals.rebuild = function(child, parent) {
      if (!child || !parent) {
        return child || parent;
      }
      return function(schema) {
        parent(schema);
        child(schema);
      };
    };
    internals.validate = function(child, parent) {
      if (!child || !parent) {
        return child || parent;
      }
      return function(value, helpers) {
        const result = parent(value, helpers);
        if (result) {
          if (result.errors && (!Array.isArray(result.errors) || result.errors.length)) {
            return result;
          }
          value = result.value;
        }
        return child(value, helpers) || result;
      };
    };
  }
});

// node_modules/joi/lib/manifest.js
var require_manifest = __commonJS({
  "node_modules/joi/lib/manifest.js"(exports2) {
    "use strict";
    var { assert, clone } = require_lib();
    var Common = require_common2();
    var Messages = require_messages();
    var Ref = require_ref2();
    var Template = require_template();
    var Schemas2;
    var internals = {};
    exports2.describe = function(schema) {
      const def = schema._definition;
      const desc = {
        type: schema.type,
        flags: {},
        rules: []
      };
      for (const flag of Object.keys(schema._flags)) {
        if (flag[0] !== "_") {
          desc.flags[flag] = internals.describe(schema._flags[flag]);
        }
      }
      if (!Object.keys(desc.flags).length) {
        delete desc.flags;
      }
      if (schema._preferences) {
        desc.preferences = clone(schema._preferences, { shallow: ["messages"] });
        delete desc.preferences[Common.symbols.prefs];
        if (desc.preferences.messages) {
          desc.preferences.messages = Messages.decompile(desc.preferences.messages);
        }
      }
      if (schema._valids) {
        desc.allow = schema._valids.describe();
      }
      if (schema._invalids) {
        desc.invalid = schema._invalids.describe();
      }
      for (const rule of schema._rules) {
        const ruleDef = def.rules[rule.name];
        if (ruleDef.manifest === false) {
          continue;
        }
        const item = { name: rule.name };
        for (const custom of Object.keys(def.modifiers)) {
          if (rule[custom] !== void 0) {
            item[custom] = internals.describe(rule[custom]);
          }
        }
        if (rule.args) {
          item.args = {};
          for (const key of Object.keys(rule.args)) {
            const arg = rule.args[key];
            if (key === "options" && !Object.keys(arg).length) {
              continue;
            }
            item.args[key] = internals.describe(arg, { assign: key });
          }
          if (!Object.keys(item.args).length) {
            delete item.args;
          }
        }
        desc.rules.push(item);
      }
      if (!desc.rules.length) {
        delete desc.rules;
      }
      for (const term of Object.keys(schema.$_terms)) {
        if (term[0] === "_") {
          continue;
        }
        assert(!desc[term], "Cannot describe schema due to internal name conflict with", term);
        const items = schema.$_terms[term];
        if (!items) {
          continue;
        }
        if (items instanceof Map) {
          if (items.size) {
            desc[term] = [...items.entries()];
          }
          continue;
        }
        if (Common.isValues(items)) {
          desc[term] = items.describe();
          continue;
        }
        assert(def.terms[term], "Term", term, "missing configuration");
        const manifest = def.terms[term].manifest;
        const mapped = typeof manifest === "object";
        if (!items.length && !mapped) {
          continue;
        }
        const normalized = [];
        for (const item of items) {
          normalized.push(internals.describe(item));
        }
        if (mapped) {
          const { from, to } = manifest.mapped;
          desc[term] = {};
          for (const item of normalized) {
            desc[term][item[to]] = item[from];
          }
          continue;
        }
        if (manifest === "single") {
          assert(normalized.length === 1, "Term", term, "contains more than one item");
          desc[term] = normalized[0];
          continue;
        }
        desc[term] = normalized;
      }
      internals.validate(schema.$_root, desc);
      return desc;
    };
    internals.describe = function(item, options = {}) {
      if (Array.isArray(item)) {
        return item.map(internals.describe);
      }
      if (item === Common.symbols.deepDefault) {
        return { special: "deep" };
      }
      if (typeof item !== "object" || item === null) {
        return item;
      }
      if (options.assign === "options") {
        return clone(item);
      }
      if (Buffer && Buffer.isBuffer(item)) {
        return { buffer: item.toString("binary") };
      }
      if (item instanceof Date) {
        return item.toISOString();
      }
      if (item instanceof Error) {
        return item;
      }
      if (item instanceof RegExp) {
        if (options.assign === "regex") {
          return item.toString();
        }
        return { regex: item.toString() };
      }
      if (item[Common.symbols.literal]) {
        return { function: item.literal };
      }
      if (typeof item.describe === "function") {
        if (options.assign === "ref") {
          return item.describe().ref;
        }
        return item.describe();
      }
      const normalized = {};
      for (const key of Object.keys(item)) {
        const value = item[key];
        if (value === void 0) {
          continue;
        }
        normalized[key] = internals.describe(value, { assign: key });
      }
      return normalized;
    };
    exports2.build = function(joi, desc) {
      const builder = new internals.Builder(joi);
      return builder.parse(desc);
    };
    internals.Builder = class {
      constructor(joi) {
        this.joi = joi;
      }
      parse(desc) {
        internals.validate(this.joi, desc);
        let schema = this.joi[desc.type]()._bare();
        const def = schema._definition;
        if (desc.flags) {
          for (const flag of Object.keys(desc.flags)) {
            const setter = def.flags[flag] && def.flags[flag].setter || flag;
            assert(typeof schema[setter] === "function", "Invalid flag", flag, "for type", desc.type);
            schema = schema[setter](this.build(desc.flags[flag]));
          }
        }
        if (desc.preferences) {
          schema = schema.preferences(this.build(desc.preferences));
        }
        if (desc.allow) {
          schema = schema.allow(...this.build(desc.allow));
        }
        if (desc.invalid) {
          schema = schema.invalid(...this.build(desc.invalid));
        }
        if (desc.rules) {
          for (const rule of desc.rules) {
            assert(typeof schema[rule.name] === "function", "Invalid rule", rule.name, "for type", desc.type);
            const args = [];
            if (rule.args) {
              const built = {};
              for (const key of Object.keys(rule.args)) {
                built[key] = this.build(rule.args[key], { assign: key });
              }
              const keys = Object.keys(built);
              const definition = def.rules[rule.name].args;
              if (definition) {
                assert(keys.length <= definition.length, "Invalid number of arguments for", desc.type, rule.name, "(expected up to", definition.length, ", found", keys.length, ")");
                for (const { name } of definition) {
                  args.push(built[name]);
                }
              } else {
                assert(keys.length === 1, "Invalid number of arguments for", desc.type, rule.name, "(expected up to 1, found", keys.length, ")");
                args.push(built[keys[0]]);
              }
            }
            schema = schema[rule.name](...args);
            const options = {};
            for (const custom of Object.keys(def.modifiers)) {
              if (rule[custom] !== void 0) {
                options[custom] = this.build(rule[custom]);
              }
            }
            if (Object.keys(options).length) {
              schema = schema.rule(options);
            }
          }
        }
        const terms = {};
        for (const key of Object.keys(desc)) {
          if (["allow", "flags", "invalid", "whens", "preferences", "rules", "type"].includes(key)) {
            continue;
          }
          assert(def.terms[key], "Term", key, "missing configuration");
          const manifest = def.terms[key].manifest;
          if (manifest === "schema") {
            terms[key] = desc[key].map((item) => this.parse(item));
            continue;
          }
          if (manifest === "values") {
            terms[key] = desc[key].map((item) => this.build(item));
            continue;
          }
          if (manifest === "single") {
            terms[key] = this.build(desc[key]);
            continue;
          }
          if (typeof manifest === "object") {
            terms[key] = {};
            for (const name of Object.keys(desc[key])) {
              const value = desc[key][name];
              terms[key][name] = this.parse(value);
            }
            continue;
          }
          terms[key] = this.build(desc[key]);
        }
        if (desc.whens) {
          terms.whens = desc.whens.map((when) => this.build(when));
        }
        schema = def.manifest.build(schema, terms);
        schema.$_temp.ruleset = false;
        return schema;
      }
      build(desc, options = {}) {
        if (desc === null) {
          return null;
        }
        if (Array.isArray(desc)) {
          return desc.map((item) => this.build(item));
        }
        if (desc instanceof Error) {
          return desc;
        }
        if (options.assign === "options") {
          return clone(desc);
        }
        if (options.assign === "regex") {
          return internals.regex(desc);
        }
        if (options.assign === "ref") {
          return Ref.build(desc);
        }
        if (typeof desc !== "object") {
          return desc;
        }
        if (Object.keys(desc).length === 1) {
          if (desc.buffer) {
            assert(Buffer, "Buffers are not supported");
            return Buffer && Buffer.from(desc.buffer, "binary");
          }
          if (desc.function) {
            return { [Common.symbols.literal]: true, literal: desc.function };
          }
          if (desc.override) {
            return Common.symbols.override;
          }
          if (desc.ref) {
            return Ref.build(desc.ref);
          }
          if (desc.regex) {
            return internals.regex(desc.regex);
          }
          if (desc.special) {
            assert(["deep"].includes(desc.special), "Unknown special value", desc.special);
            return Common.symbols.deepDefault;
          }
          if (desc.value) {
            return clone(desc.value);
          }
        }
        if (desc.type) {
          return this.parse(desc);
        }
        if (desc.template) {
          return Template.build(desc);
        }
        const normalized = {};
        for (const key of Object.keys(desc)) {
          normalized[key] = this.build(desc[key], { assign: key });
        }
        return normalized;
      }
    };
    internals.regex = function(string) {
      const end = string.lastIndexOf("/");
      const exp = string.slice(1, end);
      const flags = string.slice(end + 1);
      return new RegExp(exp, flags);
    };
    internals.validate = function(joi, desc) {
      Schemas2 = Schemas2 || require_schemas();
      joi.assert(desc, Schemas2.description);
    };
  }
});

// node_modules/@hapi/pinpoint/lib/index.js
var require_lib3 = __commonJS({
  "node_modules/@hapi/pinpoint/lib/index.js"(exports2) {
    "use strict";
    exports2.location = function(depth = 0) {
      const orig = Error.prepareStackTrace;
      Error.prepareStackTrace = (ignore, stack) => stack;
      const capture = {};
      Error.captureStackTrace(capture, this);
      const line = capture.stack[depth + 1];
      Error.prepareStackTrace = orig;
      return {
        filename: line.getFileName(),
        line: line.getLineNumber()
      };
    };
  }
});

// node_modules/joi/lib/trace.js
var require_trace = __commonJS({
  "node_modules/joi/lib/trace.js"(exports2) {
    "use strict";
    var { deepEqual } = require_lib();
    var Pinpoint = require_lib3();
    var Errors = require_errors();
    var internals = {
      codes: {
        error: 1,
        pass: 2,
        full: 3
      },
      labels: {
        0: "never used",
        1: "always error",
        2: "always pass"
      }
    };
    exports2.setup = function(root) {
      const trace = function() {
        root._tracer = root._tracer || new internals.Tracer();
        return root._tracer;
      };
      root.trace = trace;
      root[/* @__PURE__ */ Symbol.for("@hapi/lab/coverage/initialize")] = trace;
      root.untrace = () => {
        root._tracer = null;
      };
    };
    exports2.location = function(schema) {
      return schema.$_setFlag("_tracerLocation", Pinpoint.location(2));
    };
    internals.Tracer = class {
      constructor() {
        this.name = "Joi";
        this._schemas = /* @__PURE__ */ new Map();
      }
      _register(schema) {
        const existing = this._schemas.get(schema);
        if (existing) {
          return existing.store;
        }
        const store = new internals.Store(schema);
        const { filename, line } = schema._flags._tracerLocation || Pinpoint.location(5);
        this._schemas.set(schema, { filename, line, store });
        return store;
      }
      _combine(merged, sources) {
        for (const { store } of this._schemas.values()) {
          store._combine(merged, sources);
        }
      }
      report(file) {
        const coverage = [];
        for (const { filename, line, store } of this._schemas.values()) {
          if (file && file !== filename) {
            continue;
          }
          const missing = [];
          const skipped = [];
          for (const [schema, log] of store._sources.entries()) {
            if (internals.sub(log.paths, skipped)) {
              continue;
            }
            if (!log.entry) {
              missing.push({
                status: "never reached",
                paths: [...log.paths]
              });
              skipped.push(...log.paths);
              continue;
            }
            for (const type of ["valid", "invalid"]) {
              const set = schema[`_${type}s`];
              if (!set) {
                continue;
              }
              const values = new Set(set._values);
              const refs = new Set(set._refs);
              for (const { value, ref } of log[type]) {
                values.delete(value);
                refs.delete(ref);
              }
              if (values.size || refs.size) {
                missing.push({
                  status: [...values, ...[...refs].map((ref) => ref.display)],
                  rule: `${type}s`
                });
              }
            }
            const rules = schema._rules.map((rule) => rule.name);
            for (const type of ["default", "failover"]) {
              if (schema._flags[type] !== void 0) {
                rules.push(type);
              }
            }
            for (const name of rules) {
              const status = internals.labels[log.rule[name] || 0];
              if (status) {
                const report = { rule: name, status };
                if (log.paths.size) {
                  report.paths = [...log.paths];
                }
                missing.push(report);
              }
            }
          }
          if (missing.length) {
            coverage.push({
              filename,
              line,
              missing,
              severity: "error",
              message: `Schema missing tests for ${missing.map(internals.message).join(", ")}`
            });
          }
        }
        return coverage.length ? coverage : null;
      }
    };
    internals.Store = class {
      constructor(schema) {
        this.active = true;
        this._sources = /* @__PURE__ */ new Map();
        this._combos = /* @__PURE__ */ new Map();
        this._scan(schema);
      }
      debug(state, source, name, result) {
        state.mainstay.debug && state.mainstay.debug.push({ type: source, name, result, path: state.path });
      }
      entry(schema, state) {
        internals.debug(state, { type: "entry" });
        this._record(schema, (log) => {
          log.entry = true;
        });
      }
      filter(schema, state, source, value) {
        internals.debug(state, { type: source, ...value });
        this._record(schema, (log) => {
          log[source].add(value);
        });
      }
      log(schema, state, source, name, result) {
        internals.debug(state, { type: source, name, result: result === "full" ? "pass" : result });
        this._record(schema, (log) => {
          log[source][name] = log[source][name] || 0;
          log[source][name] |= internals.codes[result];
        });
      }
      resolve(state, ref, to) {
        if (!state.mainstay.debug) {
          return;
        }
        const log = { type: "resolve", ref: ref.display, to, path: state.path };
        state.mainstay.debug.push(log);
      }
      value(state, by, from, to, name) {
        if (!state.mainstay.debug || deepEqual(from, to)) {
          return;
        }
        const log = { type: "value", by, from, to, path: state.path };
        if (name) {
          log.name = name;
        }
        state.mainstay.debug.push(log);
      }
      _record(schema, each) {
        const log = this._sources.get(schema);
        if (log) {
          each(log);
          return;
        }
        const sources = this._combos.get(schema);
        for (const source of sources) {
          this._record(source, each);
        }
      }
      _scan(schema, _path) {
        const path4 = _path || [];
        let log = this._sources.get(schema);
        if (!log) {
          log = {
            paths: /* @__PURE__ */ new Set(),
            entry: false,
            rule: {},
            valid: /* @__PURE__ */ new Set(),
            invalid: /* @__PURE__ */ new Set()
          };
          this._sources.set(schema, log);
        }
        if (path4.length) {
          log.paths.add(path4);
        }
        const each = (sub, source) => {
          const subId = internals.id(sub, source);
          this._scan(sub, path4.concat(subId));
        };
        schema.$_modify({ each, ref: false });
      }
      _combine(merged, sources) {
        this._combos.set(merged, sources);
      }
    };
    internals.message = function(item) {
      const path4 = item.paths ? Errors.path(item.paths[0]) + (item.rule ? ":" : "") : "";
      return `${path4}${item.rule || ""} (${item.status})`;
    };
    internals.id = function(schema, { source, name, path: path4, key }) {
      if (schema._flags.id) {
        return schema._flags.id;
      }
      if (key) {
        return key;
      }
      name = `@${name}`;
      if (source === "terms") {
        return [name, path4[Math.min(path4.length - 1, 1)]];
      }
      return name;
    };
    internals.sub = function(paths, skipped) {
      for (const path4 of paths) {
        for (const skip of skipped) {
          if (deepEqual(path4.slice(0, skip.length), skip)) {
            return true;
          }
        }
      }
      return false;
    };
    internals.debug = function(state, event) {
      if (state.mainstay.debug) {
        event.path = state.debug ? [...state.path, state.debug] : state.path;
        state.mainstay.debug.push(event);
      }
    };
  }
});

// node_modules/joi/lib/modify.js
var require_modify = __commonJS({
  "node_modules/joi/lib/modify.js"(exports2) {
    "use strict";
    var { assert } = require_lib();
    var Common = require_common2();
    var Ref = require_ref2();
    var internals = {};
    exports2.Ids = internals.Ids = class {
      constructor() {
        this._byId = /* @__PURE__ */ new Map();
        this._byKey = /* @__PURE__ */ new Map();
        this._schemaChain = false;
      }
      clone() {
        const clone = new internals.Ids();
        if (this._byId.size) {
          clone._byId = new Map(this._byId);
        }
        if (this._byKey.size) {
          clone._byKey = new Map(this._byKey);
        }
        clone._schemaChain = this._schemaChain;
        return clone;
      }
      concat(source) {
        if (source._schemaChain) {
          this._schemaChain = true;
        }
        for (const [id, value] of source._byId.entries()) {
          assert(!this._byKey.has(id), "Schema id conflicts with existing key:", id);
          this._byId.set(id, value);
        }
        for (const [key, value] of source._byKey.entries()) {
          assert(!this._byId.has(key), "Schema key conflicts with existing id:", key);
          this._byKey.set(key, value);
        }
      }
      fork(path4, adjuster, root) {
        const chain = this._collect(path4);
        chain.push({ schema: root });
        const tail = chain.shift();
        let adjusted = { id: tail.id, schema: adjuster(tail.schema) };
        assert(Common.isSchema(adjusted.schema), "adjuster function failed to return a joi schema type");
        for (const node of chain) {
          adjusted = { id: node.id, schema: internals.fork(node.schema, adjusted.id, adjusted.schema) };
        }
        return adjusted.schema;
      }
      labels(path4, behind = []) {
        const current = path4[0];
        const node = this._get(current);
        if (!node) {
          return [...behind, ...path4].join(".");
        }
        const forward = path4.slice(1);
        behind = [...behind, node.schema._flags.label || current];
        if (!forward.length) {
          return behind.join(".");
        }
        return node.schema._ids.labels(forward, behind);
      }
      reach(path4, behind = []) {
        const current = path4[0];
        const node = this._get(current);
        assert(node, "Schema does not contain path", [...behind, ...path4].join("."));
        const forward = path4.slice(1);
        if (!forward.length) {
          return node.schema;
        }
        return node.schema._ids.reach(forward, [...behind, current]);
      }
      register(schema, { key } = {}) {
        if (!schema || !Common.isSchema(schema)) {
          return;
        }
        if (schema.$_property("schemaChain") || schema._ids._schemaChain) {
          this._schemaChain = true;
        }
        const id = schema._flags.id;
        if (id) {
          const existing = this._byId.get(id);
          assert(!existing || existing.schema === schema, "Cannot add different schemas with the same id:", id);
          assert(!this._byKey.has(id), "Schema id conflicts with existing key:", id);
          this._byId.set(id, { schema, id });
        }
        if (key) {
          assert(!this._byKey.has(key), "Schema already contains key:", key);
          assert(!this._byId.has(key), "Schema key conflicts with existing id:", key);
          this._byKey.set(key, { schema, id: key });
        }
      }
      reset() {
        this._byId = /* @__PURE__ */ new Map();
        this._byKey = /* @__PURE__ */ new Map();
        this._schemaChain = false;
      }
      _collect(path4, behind = [], nodes = []) {
        const current = path4[0];
        const node = this._get(current);
        assert(node, "Schema does not contain path", [...behind, ...path4].join("."));
        nodes = [node, ...nodes];
        const forward = path4.slice(1);
        if (!forward.length) {
          return nodes;
        }
        return node.schema._ids._collect(forward, [...behind, current], nodes);
      }
      _get(id) {
        return this._byId.get(id) || this._byKey.get(id);
      }
    };
    internals.fork = function(schema, id, replacement) {
      const each = (item, { key }) => {
        if (id === (item._flags.id || key)) {
          return replacement;
        }
      };
      const obj = exports2.schema(schema, { each, ref: false });
      return obj ? obj.$_mutateRebuild() : schema;
    };
    exports2.schema = function(schema, options) {
      let obj;
      for (const name of Object.keys(schema._flags)) {
        if (name[0] === "_") {
          continue;
        }
        const result = internals.scan(schema._flags[name], { source: "flags", name }, options);
        if (result !== void 0) {
          obj = obj || schema.clone();
          obj._flags[name] = result;
        }
      }
      for (let i = 0; i < schema._rules.length; ++i) {
        const rule = schema._rules[i];
        const result = internals.scan(rule.args, { source: "rules", name: rule.name }, options);
        if (result !== void 0) {
          obj = obj || schema.clone();
          const clone = Object.assign({}, rule);
          clone.args = result;
          obj._rules[i] = clone;
          const existingUnique = obj._singleRules.get(rule.name);
          if (existingUnique === rule) {
            obj._singleRules.set(rule.name, clone);
          }
        }
      }
      for (const name of Object.keys(schema.$_terms)) {
        if (name[0] === "_") {
          continue;
        }
        const result = internals.scan(schema.$_terms[name], { source: "terms", name }, options);
        if (result !== void 0) {
          obj = obj || schema.clone();
          obj.$_terms[name] = result;
        }
      }
      return obj;
    };
    internals.scan = function(item, source, options, _path, _key) {
      const path4 = _path || [];
      if (item === null || typeof item !== "object") {
        return;
      }
      let clone;
      if (Array.isArray(item)) {
        for (let i = 0; i < item.length; ++i) {
          const key = source.source === "terms" && source.name === "keys" && item[i].key;
          const result = internals.scan(item[i], source, options, [i, ...path4], key);
          if (result !== void 0) {
            clone = clone || item.slice();
            clone[i] = result;
          }
        }
        return clone;
      }
      if (options.schema !== false && Common.isSchema(item) || options.ref !== false && Ref.isRef(item)) {
        const result = options.each(item, { ...source, path: path4, key: _key });
        if (result === item) {
          return;
        }
        return result;
      }
      for (const key of Object.keys(item)) {
        if (key[0] === "_") {
          continue;
        }
        const result = internals.scan(item[key], source, options, [key, ...path4], _key);
        if (result !== void 0) {
          clone = clone || Object.assign({}, item);
          clone[key] = result;
        }
      }
      return clone;
    };
  }
});

// node_modules/joi/lib/state.js
var require_state2 = __commonJS({
  "node_modules/joi/lib/state.js"(exports2, module2) {
    "use strict";
    var { clone, reach } = require_lib();
    var Common = require_common2();
    var internals = {
      value: /* @__PURE__ */ Symbol("value")
    };
    module2.exports = internals.State = class {
      constructor(path4, ancestors, state) {
        this.path = path4;
        this.ancestors = ancestors;
        this.mainstay = state.mainstay;
        this.schemas = state.schemas;
        this.debug = null;
      }
      localize(path4, ancestors = null, schema = null) {
        const state = new internals.State(path4, ancestors, this);
        if (schema && state.schemas) {
          state.schemas = [internals.schemas(schema), ...state.schemas];
        }
        return state;
      }
      nest(schema, debug) {
        const state = new internals.State(this.path, this.ancestors, this);
        state.schemas = state.schemas && [internals.schemas(schema), ...state.schemas];
        state.debug = debug;
        return state;
      }
      shadow(value, reason) {
        this.mainstay.shadow = this.mainstay.shadow || new internals.Shadow();
        this.mainstay.shadow.set(this.path, value, reason);
      }
      snapshot() {
        if (this.mainstay.shadow) {
          this._snapshot = clone(this.mainstay.shadow.node(this.path));
        }
        this.mainstay.snapshot();
      }
      restore() {
        if (this.mainstay.shadow) {
          this.mainstay.shadow.override(this.path, this._snapshot);
          this._snapshot = void 0;
        }
        this.mainstay.restore();
      }
      commit() {
        if (this.mainstay.shadow) {
          this.mainstay.shadow.override(this.path, this._snapshot);
          this._snapshot = void 0;
        }
        this.mainstay.commit();
      }
    };
    internals.schemas = function(schema) {
      if (Common.isSchema(schema)) {
        return { schema };
      }
      return schema;
    };
    internals.Shadow = class {
      constructor() {
        this._values = null;
      }
      set(path4, value, reason) {
        if (!path4.length) {
          return;
        }
        if (reason === "strip" && typeof path4[path4.length - 1] === "number") {
          return;
        }
        this._values = this._values || /* @__PURE__ */ new Map();
        let node = this._values;
        for (let i = 0; i < path4.length; ++i) {
          const segment = path4[i];
          let next = node.get(segment);
          if (!next) {
            next = /* @__PURE__ */ new Map();
            node.set(segment, next);
          }
          node = next;
        }
        node[internals.value] = value;
      }
      get(path4) {
        const node = this.node(path4);
        if (node) {
          return node[internals.value];
        }
      }
      node(path4) {
        if (!this._values) {
          return;
        }
        return reach(this._values, path4, { iterables: true });
      }
      override(path4, node) {
        if (!this._values) {
          return;
        }
        const parents = path4.slice(0, -1);
        const own2 = path4[path4.length - 1];
        const parent = reach(this._values, parents, { iterables: true });
        if (node) {
          parent.set(own2, node);
          return;
        }
        if (parent) {
          parent.delete(own2);
        }
      }
    };
  }
});

// node_modules/joi/lib/validator.js
var require_validator = __commonJS({
  "node_modules/joi/lib/validator.js"(exports2) {
    "use strict";
    var { assert, clone, ignore, reach } = require_lib();
    var Common = require_common2();
    var Errors = require_errors();
    var State = require_state2();
    var internals = {
      result: /* @__PURE__ */ Symbol("result")
    };
    exports2.entry = function(value, schema, prefs) {
      let settings = Common.defaults;
      if (prefs) {
        assert(prefs.warnings === void 0, "Cannot override warnings preference in synchronous validation");
        assert(prefs.artifacts === void 0, "Cannot override artifacts preference in synchronous validation");
        settings = Common.preferences(Common.defaults, prefs);
      }
      const result = internals.entry(value, schema, settings);
      assert(!result.mainstay.externals.length, "Schema with external rules must use validateAsync()");
      const outcome = { value: result.value };
      if (result.error) {
        outcome.error = result.error;
      }
      if (result.mainstay.warnings.length) {
        outcome.warning = Errors.details(result.mainstay.warnings);
      }
      if (result.mainstay.debug) {
        outcome.debug = result.mainstay.debug;
      }
      if (result.mainstay.artifacts) {
        outcome.artifacts = result.mainstay.artifacts;
      }
      return outcome;
    };
    exports2.entryAsync = async function(value, schema, prefs) {
      let settings = Common.defaults;
      if (prefs) {
        settings = Common.preferences(Common.defaults, prefs);
      }
      const result = internals.entry(value, schema, settings);
      const mainstay = result.mainstay;
      if (result.error) {
        if (mainstay.debug) {
          result.error.debug = mainstay.debug;
        }
        throw result.error;
      }
      if (mainstay.externals.length) {
        let root = result.value;
        const errors = [];
        for (const external of mainstay.externals) {
          const path4 = external.state.path;
          const linked = external.schema.type === "link" ? mainstay.links.get(external.schema) : null;
          let node = root;
          let key;
          let parent;
          const ancestors = path4.length ? [root] : [];
          const original = path4.length ? reach(value, path4) : value;
          if (path4.length) {
            key = path4[path4.length - 1];
            let current = root;
            for (const segment of path4.slice(0, -1)) {
              current = current[segment];
              ancestors.unshift(current);
            }
            parent = ancestors[0];
            node = parent[key];
          }
          try {
            const createError = (code, local) => (linked || external.schema).$_createError(code, node, local, external.state, settings);
            const output = await external.method(node, {
              schema: external.schema,
              linked,
              state: external.state,
              prefs,
              original,
              error: createError,
              errorsArray: internals.errorsArray,
              warn: (code, local) => mainstay.warnings.push((linked || external.schema).$_createError(code, node, local, external.state, settings)),
              message: (messages, local) => (linked || external.schema).$_createError("external", node, local, external.state, settings, { messages })
            });
            if (output === void 0 || output === node) {
              continue;
            }
            if (output instanceof Errors.Report) {
              mainstay.tracer.log(external.schema, external.state, "rule", "external", "error");
              errors.push(output);
              if (settings.abortEarly) {
                break;
              }
              continue;
            }
            if (Array.isArray(output) && output[Common.symbols.errors]) {
              mainstay.tracer.log(external.schema, external.state, "rule", "external", "error");
              errors.push(...output);
              if (settings.abortEarly) {
                break;
              }
              continue;
            }
            if (parent) {
              mainstay.tracer.value(external.state, "rule", node, output, "external");
              parent[key] = output;
            } else {
              mainstay.tracer.value(external.state, "rule", root, output, "external");
              root = output;
            }
          } catch (err) {
            if (settings.errors.label) {
              err.message += ` (${external.label})`;
            }
            throw err;
          }
        }
        result.value = root;
        if (errors.length) {
          result.error = Errors.process(errors, value, settings);
          if (mainstay.debug) {
            result.error.debug = mainstay.debug;
          }
          throw result.error;
        }
      }
      if (!settings.warnings && !settings.debug && !settings.artifacts) {
        return result.value;
      }
      const outcome = { value: result.value };
      if (mainstay.warnings.length) {
        outcome.warning = Errors.details(mainstay.warnings);
      }
      if (mainstay.debug) {
        outcome.debug = mainstay.debug;
      }
      if (mainstay.artifacts) {
        outcome.artifacts = mainstay.artifacts;
      }
      return outcome;
    };
    exports2.standard = function(value, schema, options) {
      const prefs = options?.libraryOptions;
      if (schema.isAsync()) {
        return exports2.entryAsync(value, schema, prefs);
      }
      return exports2.entry(value, schema, prefs);
    };
    internals.Mainstay = class {
      constructor(tracer, debug, links) {
        this.externals = [];
        this.warnings = [];
        this.tracer = tracer;
        this.debug = debug;
        this.links = links;
        this.shadow = null;
        this.artifacts = null;
        this._snapshots = [];
      }
      snapshot() {
        this._snapshots.push({
          externals: this.externals.length,
          warnings: this.warnings.length
        });
      }
      restore() {
        const snapshot = this._snapshots.pop();
        this.externals.length = snapshot.externals;
        this.warnings.length = snapshot.warnings;
      }
      commit() {
        this._snapshots.pop();
      }
    };
    internals.entry = function(value, schema, prefs) {
      const { tracer, cleanup } = internals.tracer(schema, prefs);
      const debug = prefs.debug ? [] : null;
      const links = schema._ids._schemaChain ? /* @__PURE__ */ new Map() : null;
      const mainstay = new internals.Mainstay(tracer, debug, links);
      const schemas = schema._ids._schemaChain ? [{ schema }] : null;
      const state = new State([], [], { mainstay, schemas });
      const result = exports2.validate(value, schema, state, prefs);
      if (cleanup) {
        schema.$_root.untrace();
      }
      const error = Errors.process(result.errors, value, prefs);
      return { value: result.value, error, mainstay };
    };
    internals.tracer = function(schema, prefs) {
      if (schema.$_root._tracer) {
        return { tracer: schema.$_root._tracer._register(schema) };
      }
      if (prefs.debug) {
        assert(schema.$_root.trace, "Debug mode not supported");
        return { tracer: schema.$_root.trace()._register(schema), cleanup: true };
      }
      return { tracer: internals.ignore };
    };
    exports2.validate = function(value, schema, state, prefs, overrides = {}) {
      if (schema.$_terms.whens) {
        schema = schema._generate(value, state, prefs).schema;
      }
      if (schema._preferences) {
        prefs = internals.prefs(schema, prefs);
      }
      if (schema._cache && prefs.cache) {
        const result = schema._cache.get(value);
        state.mainstay.tracer.debug(state, "validate", "cached", !!result);
        if (result) {
          return result;
        }
      }
      if (schema._flags.failover !== void 0) {
        state.snapshot();
      }
      const createError = (code, local, localState) => schema.$_createError(code, value, local, localState || state, prefs);
      const helpers = {
        original: value,
        prefs,
        schema,
        state,
        error: createError,
        errorsArray: internals.errorsArray,
        warn: (code, local, localState) => state.mainstay.warnings.push(createError(code, local, localState)),
        message: (messages, local) => schema.$_createError("custom", value, local, state, prefs, { messages })
      };
      state.mainstay.tracer.entry(schema, state);
      const def = schema._definition;
      if (def.prepare && value !== void 0 && prefs.convert) {
        const prepared = def.prepare(value, helpers);
        if (prepared) {
          state.mainstay.tracer.value(state, "prepare", value, prepared.value);
          if (prepared.errors) {
            return internals.finalize(prepared.value, [].concat(prepared.errors), helpers);
          }
          value = prepared.value;
        }
      }
      if (def.coerce && value !== void 0 && prefs.convert && (!def.coerce.from || def.coerce.from.includes(typeof value))) {
        const coerced = def.coerce.method(value, helpers);
        if (coerced) {
          state.mainstay.tracer.value(state, "coerced", value, coerced.value);
          if (coerced.errors) {
            return internals.finalize(coerced.value, [].concat(coerced.errors), helpers);
          }
          value = coerced.value;
        }
      }
      const empty = schema._flags.empty;
      if (empty && empty.$_match(internals.trim(value, schema), state.nest(empty), Common.defaults)) {
        state.mainstay.tracer.value(state, "empty", value, void 0);
        value = void 0;
      }
      const presence = overrides.presence || schema._flags.presence || (schema._flags._endedSwitch ? null : prefs.presence);
      if (value === void 0) {
        if (presence === "forbidden") {
          return internals.finalize(value, null, helpers);
        }
        if (presence === "required") {
          return internals.finalize(value, [schema.$_createError("any.required", value, null, state, prefs)], helpers);
        }
        if (presence === "optional") {
          if (schema._flags.default !== Common.symbols.deepDefault) {
            return internals.finalize(value, null, helpers);
          }
          state.mainstay.tracer.value(state, "default", value, {});
          value = {};
        }
      } else if (presence === "forbidden") {
        return internals.finalize(value, [schema.$_createError("any.unknown", value, null, state, prefs)], helpers);
      }
      const errors = [];
      if (schema._valids) {
        const match = schema._valids.get(value, state, prefs, schema._flags.insensitive);
        if (match) {
          if (prefs.convert) {
            state.mainstay.tracer.value(state, "valids", value, match.value);
            value = match.value;
          }
          state.mainstay.tracer.filter(schema, state, "valid", match);
          return internals.finalize(value, null, helpers);
        }
        if (schema._flags.only) {
          const report = schema.$_createError("any.only", value, { valids: schema._valids.values({ display: true }) }, state, prefs);
          if (prefs.abortEarly) {
            return internals.finalize(value, [report], helpers);
          }
          errors.push(report);
        }
      }
      if (schema._invalids) {
        const match = schema._invalids.get(value, state, prefs, schema._flags.insensitive);
        if (match) {
          state.mainstay.tracer.filter(schema, state, "invalid", match);
          const report = schema.$_createError("any.invalid", value, { invalids: schema._invalids.values({ display: true }) }, state, prefs);
          if (prefs.abortEarly) {
            return internals.finalize(value, [report], helpers);
          }
          errors.push(report);
        }
      }
      if (def.validate) {
        const base = def.validate(value, helpers);
        if (base) {
          state.mainstay.tracer.value(state, "base", value, base.value);
          value = base.value;
          if (base.errors) {
            if (!Array.isArray(base.errors)) {
              errors.push(base.errors);
              return internals.finalize(value, errors, helpers);
            }
            if (base.errors.length) {
              errors.push(...base.errors);
              return internals.finalize(value, errors, helpers);
            }
          }
        }
      }
      if (!schema._rules.length) {
        return internals.finalize(value, errors, helpers);
      }
      return internals.rules(value, errors, helpers);
    };
    internals.rules = function(value, errors, helpers) {
      const { schema, state, prefs } = helpers;
      for (const rule of schema._rules) {
        const definition = schema._definition.rules[rule.method];
        if (definition.convert && prefs.convert) {
          state.mainstay.tracer.log(schema, state, "rule", rule.name, "full");
          continue;
        }
        let ret;
        let args = rule.args;
        if (rule._resolve.length) {
          args = Object.assign({}, args);
          for (const key of rule._resolve) {
            const resolver = definition.argsByName.get(key);
            const resolved = args[key].resolve(value, state, prefs);
            const normalized = resolver.normalize ? resolver.normalize(resolved) : resolved;
            const invalid = Common.validateArg(normalized, null, resolver);
            if (invalid) {
              ret = schema.$_createError("any.ref", resolved, { arg: key, ref: args[key], reason: invalid }, state, prefs);
              break;
            }
            args[key] = normalized;
          }
        }
        ret = ret || definition.validate(value, helpers, args, rule);
        const result = internals.rule(ret, rule);
        if (result.errors) {
          state.mainstay.tracer.log(schema, state, "rule", rule.name, "error");
          if (rule.warn) {
            state.mainstay.warnings.push(...result.errors);
            continue;
          }
          if (prefs.abortEarly) {
            return internals.finalize(value, result.errors, helpers);
          }
          errors.push(...result.errors);
        } else {
          state.mainstay.tracer.log(schema, state, "rule", rule.name, "pass");
          state.mainstay.tracer.value(state, "rule", value, result.value, rule.name);
          value = result.value;
        }
      }
      return internals.finalize(value, errors, helpers);
    };
    internals.rule = function(ret, rule) {
      if (ret instanceof Errors.Report) {
        internals.error(ret, rule);
        return { errors: [ret], value: null };
      }
      if (Array.isArray(ret) && ret[Common.symbols.errors]) {
        ret.forEach((report) => internals.error(report, rule));
        return { errors: ret, value: null };
      }
      return { errors: null, value: ret };
    };
    internals.error = function(report, rule) {
      if (rule.message) {
        report._setTemplate(rule.message);
      }
      return report;
    };
    internals.finalize = function(value, errors, helpers) {
      errors = errors || [];
      const { schema, state, prefs } = helpers;
      if (schema._flags.failover !== void 0) {
        let applied = false;
        if (errors.length) {
          const failover = internals.default("failover", void 0, errors, helpers);
          if (failover !== void 0) {
            state.mainstay.tracer.value(state, "failover", value, failover);
            value = failover;
            errors = [];
            applied = true;
          }
        }
        if (applied) {
          state.restore();
        } else {
          state.commit();
        }
      }
      if (errors.length && schema._flags.error) {
        if (typeof schema._flags.error === "function") {
          errors = schema._flags.error(errors);
          if (!Array.isArray(errors)) {
            errors = [errors];
          }
          for (const error of errors) {
            assert(error instanceof Error || error instanceof Errors.Report, "error() must return an Error object");
          }
        } else {
          errors = [schema._flags.error];
        }
      }
      if (value === void 0) {
        const defaulted = internals.default("default", value, errors, helpers);
        state.mainstay.tracer.value(state, "default", value, defaulted);
        value = defaulted;
      }
      if (schema._flags.cast && value !== void 0) {
        const caster = schema._definition.cast[schema._flags.cast];
        if (caster.from(value)) {
          const casted = caster.to(value, helpers);
          state.mainstay.tracer.value(state, "cast", value, casted, schema._flags.cast);
          value = casted;
        }
      }
      if (schema.$_terms.externals && prefs.externals && prefs._externals !== false) {
        for (const { method } of schema.$_terms.externals) {
          state.mainstay.externals.push({ method, schema, state, label: Errors.label(schema._flags, state, prefs) });
        }
      }
      const result = { value, errors: errors.length ? errors : null };
      if (schema._flags.result) {
        result.value = schema._flags.result === "strip" ? void 0 : (
          /* raw */
          helpers.original
        );
        state.mainstay.tracer.value(state, schema._flags.result, value, result.value);
        state.shadow(value, schema._flags.result);
      }
      if (schema._cache && prefs.cache !== false && !schema._refs.length) {
        schema._cache.set(helpers.original, result);
      }
      if (value !== void 0 && !result.errors && schema._flags.artifact !== void 0) {
        state.mainstay.artifacts = state.mainstay.artifacts || /* @__PURE__ */ new Map();
        if (!state.mainstay.artifacts.has(schema._flags.artifact)) {
          state.mainstay.artifacts.set(schema._flags.artifact, []);
        }
        state.mainstay.artifacts.get(schema._flags.artifact).push(state.path);
      }
      return result;
    };
    internals.prefs = function(schema, prefs) {
      const isDefaultOptions = prefs === Common.defaults;
      if (isDefaultOptions && schema._preferences[Common.symbols.prefs]) {
        return schema._preferences[Common.symbols.prefs];
      }
      prefs = Common.preferences(prefs, schema._preferences);
      if (isDefaultOptions) {
        schema._preferences[Common.symbols.prefs] = prefs;
      }
      return prefs;
    };
    internals.default = function(flag, value, errors, helpers) {
      const { schema, state, prefs } = helpers;
      const source = schema._flags[flag];
      if (prefs.noDefaults || source === void 0) {
        return value;
      }
      state.mainstay.tracer.log(schema, state, "rule", flag, "full");
      if (!source) {
        return source;
      }
      if (typeof source === "function") {
        const args = source.length ? [clone(state.ancestors[0]), helpers] : [];
        try {
          return source(...args);
        } catch (err) {
          errors.push(schema.$_createError(`any.${flag}`, null, { error: err }, state, prefs));
          return;
        }
      }
      if (typeof source !== "object") {
        return source;
      }
      if (source[Common.symbols.literal]) {
        return source.literal;
      }
      if (Common.isResolvable(source)) {
        return source.resolve(value, state, prefs);
      }
      return clone(source);
    };
    internals.trim = function(value, schema) {
      if (typeof value !== "string") {
        return value;
      }
      const trim2 = schema.$_getRule("trim");
      if (!trim2 || !trim2.args.enabled) {
        return value;
      }
      return value.trim();
    };
    internals.ignore = {
      active: false,
      debug: ignore,
      entry: ignore,
      filter: ignore,
      log: ignore,
      resolve: ignore,
      value: ignore
    };
    internals.errorsArray = function() {
      const errors = [];
      errors[Common.symbols.errors] = true;
      return errors;
    };
  }
});

// node_modules/joi/lib/values.js
var require_values = __commonJS({
  "node_modules/joi/lib/values.js"(exports2, module2) {
    "use strict";
    var { assert, deepEqual } = require_lib();
    var Common = require_common2();
    var internals = {};
    module2.exports = internals.Values = class {
      constructor(values, refs) {
        this._values = new Set(values);
        this._refs = new Set(refs);
        this._lowercase = internals.lowercases(values);
        this._override = false;
      }
      get length() {
        return this._values.size + this._refs.size;
      }
      add(value, refs) {
        if (Common.isResolvable(value)) {
          if (!this._refs.has(value)) {
            this._refs.add(value);
            if (refs) {
              refs.register(value);
            }
          }
          return;
        }
        if (!this.has(value, null, null, false)) {
          this._values.add(value);
          if (typeof value === "string") {
            this._lowercase.set(value.toLowerCase(), value);
          }
        }
      }
      static merge(target, source, remove) {
        target = target || new internals.Values();
        if (source) {
          if (source._override) {
            return source.clone();
          }
          for (const item of [...source._values, ...source._refs]) {
            target.add(item);
          }
        }
        if (remove) {
          for (const item of [...remove._values, ...remove._refs]) {
            target.remove(item);
          }
        }
        return target.length ? target : null;
      }
      remove(value) {
        if (Common.isResolvable(value)) {
          this._refs.delete(value);
          return;
        }
        this._values.delete(value);
        if (typeof value === "string") {
          this._lowercase.delete(value.toLowerCase());
        }
      }
      has(value, state, prefs, insensitive) {
        return !!this.get(value, state, prefs, insensitive);
      }
      get(value, state, prefs, insensitive) {
        if (!this.length) {
          return false;
        }
        if (this._values.has(value)) {
          return { value };
        }
        if (typeof value === "string" && value && insensitive) {
          const found = this._lowercase.get(value.toLowerCase());
          if (found) {
            return { value: found };
          }
        }
        if (!this._refs.size && typeof value !== "object") {
          return false;
        }
        if (typeof value === "object") {
          for (const item of this._values) {
            if (deepEqual(item, value)) {
              return { value: item };
            }
          }
        }
        if (state) {
          for (const ref of this._refs) {
            const resolved = ref.resolve(value, state, prefs, null, { in: true });
            if (resolved === void 0) {
              continue;
            }
            const items = !ref.in || typeof resolved !== "object" ? [resolved] : Array.isArray(resolved) ? resolved : Object.keys(resolved);
            for (const item of items) {
              if (typeof item !== typeof value) {
                continue;
              }
              if (insensitive && value && typeof value === "string") {
                if (item.toLowerCase() === value.toLowerCase()) {
                  return { value: item, ref };
                }
              } else {
                if (deepEqual(item, value)) {
                  return { value: item, ref };
                }
              }
            }
          }
        }
        return false;
      }
      override() {
        this._override = true;
      }
      values(options) {
        if (options && options.display) {
          const values = [];
          for (const item of [...this._values, ...this._refs]) {
            if (item !== void 0) {
              values.push(item);
            }
          }
          return values;
        }
        return Array.from([...this._values, ...this._refs]);
      }
      clone() {
        const set = new internals.Values(this._values, this._refs);
        set._override = this._override;
        return set;
      }
      concat(source) {
        assert(!source._override, "Cannot concat override set of values");
        const set = new internals.Values([...this._values, ...source._values], [...this._refs, ...source._refs]);
        set._override = this._override;
        return set;
      }
      describe() {
        const normalized = [];
        if (this._override) {
          normalized.push({ override: true });
        }
        for (const value of this._values.values()) {
          normalized.push(value && typeof value === "object" ? { value } : value);
        }
        for (const value of this._refs.values()) {
          normalized.push(value.describe());
        }
        return normalized;
      }
    };
    internals.Values.prototype[Common.symbols.values] = true;
    internals.Values.prototype.slice = internals.Values.prototype.clone;
    internals.lowercases = function(from) {
      const map = /* @__PURE__ */ new Map();
      if (from) {
        for (const value of from) {
          if (typeof value === "string") {
            map.set(value.toLowerCase(), value);
          }
        }
      }
      return map;
    };
  }
});

// node_modules/joi/lib/base.js
var require_base = __commonJS({
  "node_modules/joi/lib/base.js"(exports2, module2) {
    "use strict";
    var { assert, clone, deepEqual, merge: merge2 } = require_lib();
    var Cache = require_cache();
    var Common = require_common2();
    var Compile = require_compile();
    var Errors = require_errors();
    var Extend = require_extend();
    var Manifest = require_manifest();
    var Messages = require_messages();
    var Modify = require_modify();
    var Ref = require_ref2();
    var Trace = require_trace();
    var Validator = require_validator();
    var Values = require_values();
    var internals = {
      standardTypes: /* @__PURE__ */ new Set(["string", "number", "integer", "boolean", "object", "array", "null"]),
      jsonSchemaTarget: "draft-2020-12",
      primitiveTypes: /* @__PURE__ */ new Set(["string", "number", "boolean"]),
      nullSchema: () => ({ type: "null" })
    };
    internals.Base = class {
      constructor(type) {
        this.type = type;
        this.$_root = null;
        this._definition = {};
        this._reset();
      }
      _reset() {
        this._ids = new Modify.Ids();
        this._preferences = null;
        this._refs = new Ref.Manager();
        this._cache = null;
        this._valids = null;
        this._invalids = null;
        this._flags = {};
        this._rules = [];
        this._singleRules = /* @__PURE__ */ new Map();
        this.$_terms = {};
        this.$_temp = {
          // Runtime state (not cloned)
          ruleset: null,
          // null: use last, false: error, number: start position
          whens: {}
          // Runtime cache of generated whens
        };
      }
      // Manifest
      describe() {
        assert(typeof Manifest.describe === "function", "Manifest functionality disabled");
        return Manifest.describe(this);
      }
      $_jsonSchema(mode, options = {}) {
        if (options.target !== void 0 && options.target !== internals.jsonSchemaTarget) {
          throw new Error(`Unsupported JSON Schema target: ${options.target}`);
        }
        const rootCall = !options.$defs;
        const defs = options.$defs ?? {};
        let schema = {};
        const isTypeAny = this.type === "any";
        const isOnly = this._flags.only;
        const valids = this._valids && Array.from(this._valids._values).filter((v) => v !== null);
        let typesOverlap = true;
        if (valids && valids.length && isOnly && !isTypeAny) {
          const types = new Set(valids.map((v) => typeof v));
          typesOverlap = types.has(this.type) || this.type === "date" && types.has("object");
        }
        if (!isTypeAny && typesOverlap && internals.standardTypes.has(this.type)) {
          schema.type = this.type;
        }
        if (this._flags.description) {
          schema.description = this._flags.description;
        }
        if (this._flags.default !== void 0 && typeof this._flags.default !== "function") {
          schema.default = this._flags.default;
        }
        const subOptions = { ...options, $defs: defs };
        if (this._definition.jsonSchema && typesOverlap) {
          schema = this._definition.jsonSchema(this, schema, mode, subOptions);
        }
        for (const rule of this._rules) {
          const definition = this._definition.rules[rule.name];
          if (definition.jsonSchema && typesOverlap && !rule._resolve.length) {
            schema = definition.jsonSchema(rule, schema, isOnly, mode, subOptions);
          }
        }
        if (this.$_terms.shared) {
          for (const shared of this.$_terms.shared) {
            defs[shared._flags.id] = shared.$_jsonSchema(mode, subOptions);
          }
        }
        if (rootCall && Object.keys(defs).length) {
          schema.$defs = defs;
        }
        if (this._valids) {
          const values = valids.filter((v) => typeof v !== "symbol");
          if (values.length) {
            if (this._flags.only) {
              schema.enum = values;
              const list = Common.intersect(new Set(values.map((v) => typeof v)), internals.primitiveTypes);
              if (list.size) {
                const types = [...list];
                schema.type = types.length === 1 ? types[0] : types;
              }
            } else {
              const otherTypes = values.filter((v) => typeof v !== this.type || isTypeAny);
              if (otherTypes.length && !(isTypeAny && !isOnly)) {
                if (!schema.anyOf) {
                  schema = {
                    anyOf: [schema]
                  };
                }
                schema.anyOf.push({ enum: otherTypes });
              }
            }
          }
        }
        if (this._valids && this._valids.has(null) && !(isTypeAny && !isOnly)) {
          if (this._valids.length === 1 && (isTypeAny || isOnly)) {
            schema.type = "null";
          } else if (schema.type) {
            schema.type = [schema.type, "null"];
          } else if (schema.anyOf) {
            schema.anyOf.unshift(internals.nullSchema());
          } else {
            schema = {
              anyOf: [
                internals.nullSchema(),
                schema
              ]
            };
          }
        }
        if (this.$_terms.whens) {
          const base = this.clone();
          base.$_terms.whens = null;
          const matches = [];
          for (const when of this.$_terms.whens) {
            const tests = when.is ? [when] : when.switch;
            for (let i = 0; i < tests.length; ++i) {
              const test2 = tests[i];
              if (test2.then) {
                matches.push(base.concat(test2.then).$_jsonSchema(mode, subOptions));
              }
              if (test2.otherwise) {
                matches.push(base.concat(test2.otherwise).$_jsonSchema(mode, subOptions));
              }
              if (!test2.then || i === tests.length - 1 && !test2.otherwise) {
                matches.push(base.$_jsonSchema(mode, subOptions));
              }
            }
          }
          const results = [];
          for (const match of matches) {
            if (!results.some((r) => deepEqual(r, match))) {
              results.push(match);
            }
          }
          return { anyOf: results };
        }
        return schema;
      }
      // Rules
      allow(...values) {
        Common.verifyFlat(values, "allow");
        return this._values(values, "_valids");
      }
      alter(targets) {
        assert(targets && typeof targets === "object" && !Array.isArray(targets), "Invalid targets argument");
        assert(!this._inRuleset(), "Cannot set alterations inside a ruleset");
        const obj = this.clone();
        obj.$_terms.alterations = obj.$_terms.alterations || [];
        for (const target of Object.keys(targets)) {
          const adjuster = targets[target];
          assert(typeof adjuster === "function", "Alteration adjuster for", target, "must be a function");
          obj.$_terms.alterations.push({ target, adjuster });
        }
        obj.$_temp.ruleset = false;
        return obj;
      }
      artifact(id) {
        assert(id !== void 0, "Artifact cannot be undefined");
        assert(!this._cache, "Cannot set an artifact with a rule cache");
        return this.$_setFlag("artifact", id);
      }
      cast(to) {
        assert(to === false || typeof to === "string", "Invalid to value");
        assert(to === false || this._definition.cast[to], "Type", this.type, "does not support casting to", to);
        return this.$_setFlag("cast", to === false ? void 0 : to);
      }
      default(value, options) {
        return this._default("default", value, options);
      }
      description(desc) {
        assert(desc && typeof desc === "string", "Description must be a non-empty string");
        return this.$_setFlag("description", desc);
      }
      empty(schema) {
        const obj = this.clone();
        if (schema !== void 0) {
          schema = obj.$_compile(schema, { override: false });
        }
        return obj.$_setFlag("empty", schema, { clone: false });
      }
      error(err) {
        assert(err, "Missing error");
        assert(err instanceof Error || typeof err === "function", "Must provide a valid Error object or a function");
        return this.$_setFlag("error", err);
      }
      example(example, options = {}) {
        assert(example !== void 0, "Missing example");
        Common.assertOptions(options, ["override"]);
        return this._inner("examples", example, { single: true, override: options.override });
      }
      external(method, description) {
        if (typeof method === "object") {
          assert(!description, "Cannot combine options with description");
          description = method.description;
          method = method.method;
        }
        assert(typeof method === "function", "Method must be a function");
        assert(description === void 0 || description && typeof description === "string", "Description must be a non-empty string");
        return this._inner("externals", { method, description }, { single: true });
      }
      failover(value, options) {
        return this._default("failover", value, options);
      }
      forbidden() {
        return this.presence("forbidden");
      }
      id(id) {
        if (!id) {
          return this.$_setFlag("id", void 0);
        }
        assert(typeof id === "string", "id must be a non-empty string");
        assert(/^[^\.]+$/.test(id), "id cannot contain period character");
        return this.$_setFlag("id", id);
      }
      invalid(...values) {
        return this._values(values, "_invalids");
      }
      label(name) {
        assert(name && typeof name === "string", "Label name must be a non-empty string");
        return this.$_setFlag("label", name);
      }
      meta(meta) {
        assert(meta !== void 0, "Meta cannot be undefined");
        return this._inner("metas", meta, { single: true });
      }
      note(...notes) {
        assert(notes.length, "Missing notes");
        for (const note of notes) {
          assert(note && typeof note === "string", "Notes must be non-empty strings");
        }
        return this._inner("notes", notes);
      }
      only(mode = true) {
        assert(typeof mode === "boolean", "Invalid mode:", mode);
        return this.$_setFlag("only", mode);
      }
      optional() {
        return this.presence("optional");
      }
      prefs(prefs) {
        assert(prefs, "Missing preferences");
        assert(prefs.context === void 0, "Cannot override context");
        assert(prefs.externals === void 0, "Cannot override externals");
        assert(prefs.warnings === void 0, "Cannot override warnings");
        assert(prefs.debug === void 0, "Cannot override debug");
        Common.checkPreferences(prefs);
        const obj = this.clone();
        obj._preferences = Common.preferences(obj._preferences, prefs);
        return obj;
      }
      presence(mode) {
        assert(["optional", "required", "forbidden"].includes(mode), "Unknown presence mode", mode);
        return this.$_setFlag("presence", mode);
      }
      raw(enabled = true) {
        return this.$_setFlag("result", enabled ? "raw" : void 0);
      }
      result(mode) {
        assert(["raw", "strip"].includes(mode), "Unknown result mode", mode);
        return this.$_setFlag("result", mode);
      }
      required() {
        return this.presence("required");
      }
      strict(enabled) {
        const obj = this.clone();
        const convert = enabled === void 0 ? false : !enabled;
        obj._preferences = Common.preferences(obj._preferences, { convert });
        return obj;
      }
      strip(enabled = true) {
        return this.$_setFlag("result", enabled ? "strip" : void 0);
      }
      tag(...tags) {
        assert(tags.length, "Missing tags");
        for (const tag of tags) {
          assert(tag && typeof tag === "string", "Tags must be non-empty strings");
        }
        return this._inner("tags", tags);
      }
      unit(name) {
        assert(name && typeof name === "string", "Unit name must be a non-empty string");
        return this.$_setFlag("unit", name);
      }
      valid(...values) {
        Common.verifyFlat(values, "valid");
        const obj = this.allow(...values);
        obj.$_setFlag("only", !!obj._valids, { clone: false });
        return obj;
      }
      when(condition, options) {
        const obj = this.clone();
        if (!obj.$_terms.whens) {
          obj.$_terms.whens = [];
        }
        const when = Compile.when(obj, condition, options);
        if (!["any", "link"].includes(obj.type)) {
          const conditions = when.is ? [when] : when.switch;
          for (const item of conditions) {
            assert(!item.then || item.then.type === "any" || item.then.type === obj.type, "Cannot combine", obj.type, "with", item.then && item.then.type);
            assert(!item.otherwise || item.otherwise.type === "any" || item.otherwise.type === obj.type, "Cannot combine", obj.type, "with", item.otherwise && item.otherwise.type);
          }
        }
        obj.$_terms.whens.push(when);
        return obj.$_mutateRebuild();
      }
      // Helpers
      cache(cache) {
        assert(!this._inRuleset(), "Cannot set caching inside a ruleset");
        assert(!this._cache, "Cannot override schema cache");
        assert(this._flags.artifact === void 0, "Cannot cache a rule with an artifact");
        const obj = this.clone();
        obj._cache = cache || Cache.provider.provision();
        obj.$_temp.ruleset = false;
        return obj;
      }
      clone() {
        const obj = Object.create(Object.getPrototypeOf(this));
        return this._assign(obj);
      }
      concat(source) {
        assert(Common.isSchema(source), "Invalid schema object");
        assert(this.type === "any" || source.type === "any" || source.type === this.type, "Cannot merge type", this.type, "with another type:", source.type);
        assert(!this._inRuleset(), "Cannot concatenate onto a schema with open ruleset");
        assert(!source._inRuleset(), "Cannot concatenate a schema with open ruleset");
        let obj = this.clone();
        if (this.type === "any" && source.type !== "any") {
          const tmpObj = source.clone();
          for (const key of Object.keys(obj)) {
            if (key !== "type") {
              tmpObj[key] = obj[key];
            }
          }
          obj = tmpObj;
        }
        obj._ids.concat(source._ids);
        obj._refs.register(source, Ref.toSibling);
        obj._preferences = obj._preferences ? Common.preferences(obj._preferences, source._preferences) : source._preferences;
        obj._valids = Values.merge(obj._valids, source._valids, source._invalids);
        obj._invalids = Values.merge(obj._invalids, source._invalids, source._valids);
        for (const name of source._singleRules.keys()) {
          if (obj._singleRules.has(name)) {
            obj._rules = obj._rules.filter((target) => target.keep || target.name !== name);
            obj._singleRules.delete(name);
          }
        }
        for (const test2 of source._rules) {
          if (!source._definition.rules[test2.method].multi) {
            obj._singleRules.set(test2.name, test2);
          }
          obj._rules.push(test2);
        }
        if (obj._flags.empty && source._flags.empty) {
          obj._flags.empty = obj._flags.empty.concat(source._flags.empty);
          const flags = Object.assign({}, source._flags);
          delete flags.empty;
          merge2(obj._flags, flags);
        } else if (source._flags.empty) {
          obj._flags.empty = source._flags.empty;
          const flags = Object.assign({}, source._flags);
          delete flags.empty;
          merge2(obj._flags, flags);
        } else {
          merge2(obj._flags, source._flags);
        }
        for (const key of Object.keys(source.$_terms)) {
          const terms = source.$_terms[key];
          if (!terms) {
            if (!obj.$_terms[key]) {
              obj.$_terms[key] = terms;
            }
            continue;
          }
          if (!obj.$_terms[key]) {
            obj.$_terms[key] = terms.slice();
            continue;
          }
          obj.$_terms[key] = obj.$_terms[key].concat(terms);
        }
        if (this.$_root._tracer) {
          this.$_root._tracer._combine(obj, [this, source]);
        }
        return obj.$_mutateRebuild();
      }
      extend(options) {
        assert(!options.base, "Cannot extend type with another base");
        return Extend.type(this, options);
      }
      extract(path4) {
        path4 = Array.isArray(path4) ? path4 : path4.split(".");
        return this._ids.reach(path4);
      }
      fork(paths, adjuster) {
        assert(!this._inRuleset(), "Cannot fork inside a ruleset");
        let obj = this;
        for (let path4 of [].concat(paths)) {
          path4 = Array.isArray(path4) ? path4 : path4.split(".");
          obj = obj._ids.fork(path4, adjuster, obj);
        }
        obj.$_temp.ruleset = false;
        return obj;
      }
      isAsync() {
        if (Boolean(this.$_terms.externals?.length)) {
          return true;
        }
        if (this.$_terms.whens) {
          for (const when of this.$_terms.whens) {
            if (when.then?.isAsync()) {
              return true;
            }
            if (when.otherwise?.isAsync()) {
              return true;
            }
            if (when.switch) {
              for (const item of when.switch) {
                if (item.then?.isAsync()) {
                  return true;
                }
                if (item.otherwise?.isAsync()) {
                  return true;
                }
              }
            }
          }
        }
        return false;
      }
      rule(options) {
        const def = this._definition;
        Common.assertOptions(options, Object.keys(def.modifiers));
        assert(this.$_temp.ruleset !== false, "Cannot apply rules to empty ruleset or the last rule added does not support rule properties");
        const start = this.$_temp.ruleset === null ? this._rules.length - 1 : this.$_temp.ruleset;
        assert(start >= 0 && start < this._rules.length, "Cannot apply rules to empty ruleset");
        const obj = this.clone();
        for (let i = start; i < obj._rules.length; ++i) {
          const original = obj._rules[i];
          const rule = clone(original);
          for (const name of Object.keys(options)) {
            def.modifiers[name](rule, options[name]);
            assert(rule.name === original.name, "Cannot change rule name");
          }
          obj._rules[i] = rule;
          if (obj._singleRules.get(rule.name) === original) {
            obj._singleRules.set(rule.name, rule);
          }
        }
        obj.$_temp.ruleset = false;
        return obj.$_mutateRebuild();
      }
      get ruleset() {
        assert(!this._inRuleset(), "Cannot start a new ruleset without closing the previous one");
        const obj = this.clone();
        obj.$_temp.ruleset = obj._rules.length;
        return obj;
      }
      get $() {
        return this.ruleset;
      }
      tailor(targets) {
        targets = [].concat(targets);
        assert(!this._inRuleset(), "Cannot tailor inside a ruleset");
        let obj = this;
        if (this.$_terms.alterations) {
          for (const { target, adjuster } of this.$_terms.alterations) {
            if (targets.includes(target)) {
              obj = adjuster(obj);
              assert(Common.isSchema(obj), "Alteration adjuster for", target, "failed to return a schema object");
            }
          }
        }
        obj = obj.$_modify({ each: (item) => item.tailor(targets), ref: false });
        obj.$_temp.ruleset = false;
        return obj.$_mutateRebuild();
      }
      tracer() {
        return Trace.location ? Trace.location(this) : this;
      }
      validate(value, options) {
        return Validator.entry(value, this, options);
      }
      validateAsync(value, options) {
        return Validator.entryAsync(value, this, options);
      }
      // Extensions
      $_addRule(options) {
        if (typeof options === "string") {
          options = { name: options };
        }
        assert(options && typeof options === "object", "Invalid options");
        assert(options.name && typeof options.name === "string", "Invalid rule name");
        for (const key of Object.keys(options)) {
          assert(key[0] !== "_", "Cannot set private rule properties");
        }
        const rule = Object.assign({}, options);
        rule._resolve = [];
        rule.method = rule.method || rule.name;
        const definition = this._definition.rules[rule.method];
        const args = rule.args;
        assert(definition, "Unknown rule", rule.method);
        const obj = this.clone();
        if (args) {
          const argKeys = Object.keys(args);
          assert(argKeys.length === 1 || argKeys.length === this._definition.rules[rule.name].args.length, "Invalid rule definition for", this.type, rule.name);
          for (const key of argKeys) {
            let arg = args[key];
            if (definition.argsByName) {
              const resolver = definition.argsByName.get(key);
              if (resolver.ref && Common.isResolvable(arg)) {
                rule._resolve.push(key);
                obj.$_mutateRegister(arg);
              } else {
                if (resolver.normalize) {
                  arg = resolver.normalize(arg);
                  args[key] = arg;
                }
                if (resolver.assert) {
                  const error = Common.validateArg(arg, key, resolver);
                  assert(!error, error, "or reference");
                }
              }
            }
            if (arg === void 0) {
              delete args[key];
              continue;
            }
            args[key] = arg;
          }
        }
        if (!definition.multi) {
          obj._ruleRemove(rule.name, { clone: false });
          obj._singleRules.set(rule.name, rule);
        }
        if (obj.$_temp.ruleset === false) {
          obj.$_temp.ruleset = null;
        }
        if (definition.priority) {
          obj._rules.unshift(rule);
        } else {
          obj._rules.push(rule);
        }
        return obj;
      }
      $_compile(schema, options) {
        return Compile.schema(this.$_root, schema, options);
      }
      $_createError(code, value, local, state, prefs, options = {}) {
        const flags = options.flags !== false ? this._flags : {};
        const messages = options.messages ? Messages.merge(this._definition.messages, options.messages) : this._definition.messages;
        return new Errors.Report(code, value, local, flags, messages, state, prefs);
      }
      $_getFlag(name) {
        return this._flags[name];
      }
      $_getRule(name) {
        return this._singleRules.get(name);
      }
      $_mapLabels(path4) {
        path4 = Array.isArray(path4) ? path4 : path4.split(".");
        return this._ids.labels(path4);
      }
      $_match(value, state, prefs, overrides) {
        prefs = Object.assign({}, prefs);
        prefs.abortEarly = true;
        prefs._externals = false;
        state.snapshot();
        const result = !Validator.validate(value, this, state, prefs, overrides).errors;
        state.restore();
        return result;
      }
      $_modify(options) {
        Common.assertOptions(options, ["each", "once", "ref", "schema"]);
        return Modify.schema(this, options) || this;
      }
      $_mutateRebuild() {
        assert(!this._inRuleset(), "Cannot add this rule inside a ruleset");
        this._refs.reset();
        this._ids.reset();
        const each = (item, { source, name, path: path4, key }) => {
          const family = this._definition[source][name] && this._definition[source][name].register;
          if (family !== false) {
            this.$_mutateRegister(item, { family, key });
          }
        };
        this.$_modify({ each });
        if (this._definition.rebuild) {
          this._definition.rebuild(this);
        }
        this.$_temp.ruleset = false;
        return this;
      }
      $_mutateRegister(schema, { family, key } = {}) {
        this._refs.register(schema, family);
        this._ids.register(schema, { key });
      }
      $_property(name) {
        return this._definition.properties[name];
      }
      $_reach(path4) {
        return this._ids.reach(path4);
      }
      $_rootReferences() {
        return this._refs.roots();
      }
      $_setFlag(name, value, options = {}) {
        assert(name[0] === "_" || !this._inRuleset(), "Cannot set flag inside a ruleset");
        const flag = this._definition.flags[name] || {};
        if (deepEqual(value, flag.default)) {
          value = void 0;
        }
        if (deepEqual(value, this._flags[name])) {
          return this;
        }
        const obj = options.clone !== false ? this.clone() : this;
        if (value !== void 0) {
          obj._flags[name] = value;
          obj.$_mutateRegister(value);
        } else {
          delete obj._flags[name];
        }
        if (name[0] !== "_") {
          obj.$_temp.ruleset = false;
        }
        return obj;
      }
      $_parent(method, ...args) {
        return this[method][Common.symbols.parent].call(this, ...args);
      }
      $_validate(value, state, prefs) {
        return Validator.validate(value, this, state, prefs);
      }
      // Internals
      _assign(target) {
        target.type = this.type;
        target.$_root = this.$_root;
        target.$_temp = Object.assign({}, this.$_temp);
        target.$_temp.whens = {};
        target._ids = this._ids.clone();
        target._preferences = this._preferences;
        target._valids = this._valids && this._valids.clone();
        target._invalids = this._invalids && this._invalids.clone();
        target._rules = this._rules.slice();
        target._singleRules = new Map(this._singleRules);
        target._refs = this._refs.clone();
        target._flags = Object.assign({}, this._flags);
        target._cache = null;
        target.$_terms = {};
        for (const key of Object.keys(this.$_terms)) {
          target.$_terms[key] = this.$_terms[key] ? this.$_terms[key].slice() : null;
        }
        target.$_super = {};
        if (this.$_super) {
          for (const override of Object.keys(this.$_super)) {
            target.$_super[override] = this._super[override].bind(target);
          }
        }
        return target;
      }
      _bare() {
        const obj = this.clone();
        obj._reset();
        const terms = obj._definition.terms;
        for (const name of Object.keys(terms)) {
          const term = terms[name];
          obj.$_terms[name] = term.init;
        }
        return obj.$_mutateRebuild();
      }
      _default(flag, value, options = {}) {
        Common.assertOptions(options, "literal");
        assert(value !== void 0, "Missing", flag, "value");
        assert(typeof value === "function" || !options.literal, "Only function value supports literal option");
        if (typeof value === "function" && options.literal) {
          value = {
            [Common.symbols.literal]: true,
            literal: value
          };
        }
        const obj = this.$_setFlag(flag, value);
        return obj;
      }
      _generate(value, state, prefs) {
        if (!this.$_terms.whens) {
          return { schema: this };
        }
        const whens = [];
        const ids = [];
        for (let i = 0; i < this.$_terms.whens.length; ++i) {
          const when = this.$_terms.whens[i];
          if (when.concat) {
            whens.push(when.concat);
            ids.push(`${i}.concat`);
            continue;
          }
          const input = when.ref ? when.ref.resolve(value, state, prefs) : value;
          const tests = when.is ? [when] : when.switch;
          const before = ids.length;
          for (let j = 0; j < tests.length; ++j) {
            const { is, then, otherwise } = tests[j];
            const baseId = `${i}${when.switch ? "." + j : ""}`;
            if (is.$_match(input, state.nest(is, `${baseId}.is`), prefs)) {
              if (then) {
                const localState = state.localize([...state.path, `${baseId}.then`], state.ancestors, state.schemas);
                const { schema: generated, id: id2 } = then._generate(value, localState, prefs);
                whens.push(generated);
                ids.push(`${baseId}.then${id2 ? `(${id2})` : ""}`);
                break;
              }
            } else if (otherwise) {
              const localState = state.localize([...state.path, `${baseId}.otherwise`], state.ancestors, state.schemas);
              const { schema: generated, id: id2 } = otherwise._generate(value, localState, prefs);
              whens.push(generated);
              ids.push(`${baseId}.otherwise${id2 ? `(${id2})` : ""}`);
              break;
            }
          }
          if (when.break && ids.length > before) {
            break;
          }
        }
        const id = ids.join(", ");
        state.mainstay.tracer.debug(state, "rule", "when", id);
        if (!id) {
          return { schema: this };
        }
        if (!state.mainstay.tracer.active && this.$_temp.whens[id]) {
          return { schema: this.$_temp.whens[id], id };
        }
        let obj = this;
        if (this._definition.generate) {
          obj = this._definition.generate(this, value, state, prefs);
        }
        for (const when of whens) {
          obj = obj.concat(when);
        }
        if (this.$_root._tracer) {
          this.$_root._tracer._combine(obj, [this, ...whens]);
        }
        this.$_temp.whens[id] = obj;
        return { schema: obj, id };
      }
      _inner(type, values, options = {}) {
        assert(!this._inRuleset(), `Cannot set ${type} inside a ruleset`);
        const obj = this.clone();
        if (!obj.$_terms[type] || options.override) {
          obj.$_terms[type] = [];
        }
        if (options.single) {
          obj.$_terms[type].push(values);
        } else {
          obj.$_terms[type].push(...values);
        }
        obj.$_temp.ruleset = false;
        return obj;
      }
      _inRuleset() {
        return this.$_temp.ruleset !== null && this.$_temp.ruleset !== false;
      }
      _ruleRemove(name, options = {}) {
        if (!this._singleRules.has(name)) {
          return this;
        }
        const obj = options.clone !== false ? this.clone() : this;
        obj._singleRules.delete(name);
        const filtered = [];
        for (let i = 0; i < obj._rules.length; ++i) {
          const test2 = obj._rules[i];
          if (test2.name === name && !test2.keep) {
            if (obj._inRuleset() && i < obj.$_temp.ruleset) {
              --obj.$_temp.ruleset;
            }
            continue;
          }
          filtered.push(test2);
        }
        obj._rules = filtered;
        return obj;
      }
      _values(values, key) {
        Common.verifyFlat(values, key.slice(1, -1));
        const obj = this.clone();
        const override = values[0] === Common.symbols.override;
        if (override) {
          values = values.slice(1);
        }
        if (!obj[key] && values.length) {
          obj[key] = new Values();
        } else if (override) {
          obj[key] = values.length ? new Values() : null;
          obj.$_mutateRebuild();
        }
        if (!obj[key]) {
          return obj;
        }
        if (override) {
          obj[key].override();
        }
        for (const value of values) {
          assert(value !== void 0, "Cannot call allow/valid/invalid with undefined");
          assert(value !== Common.symbols.override, "Override must be the first value");
          const other = key === "_invalids" ? "_valids" : "_invalids";
          if (obj[other]) {
            obj[other].remove(value);
            if (!obj[other].length) {
              assert(key === "_valids" || !obj._flags.only, "Setting invalid value", value, "leaves schema rejecting all values due to previous valid rule");
              obj[other] = null;
            }
          }
          obj[key].add(value, obj._refs);
        }
        return obj;
      }
      // Standard Schema
      get "~standard"() {
        const mapToStandardError = (error) => {
          let issues;
          if (Errors.ValidationError.isError(error)) {
            issues = error.details.map(({ message, path: path4 }) => ({
              message,
              path: path4
            }));
          } else {
            issues = [{
              message: error.message
            }];
          }
          return {
            issues
          };
        };
        const mapToStandardValue = (value) => ({ value });
        return {
          version: 1,
          vendor: "joi",
          validate: (value, options) => {
            const result = Validator.standard(value, this, options);
            if (result instanceof Promise) {
              return result.then(mapToStandardValue, mapToStandardError);
            }
            if (!result.error) {
              return mapToStandardValue(result.value);
            }
            return mapToStandardError(result.error);
          },
          jsonSchema: {
            input: (options) => this.$_jsonSchema("input", options),
            output: (options) => this.$_jsonSchema("output", options)
          }
        };
      }
    };
    internals.Base.prototype[Common.symbols.any] = {
      version: Common.version,
      compile: Compile.compile,
      root: "$_root"
    };
    internals.Base.prototype.isImmutable = true;
    internals.Base.prototype.deny = internals.Base.prototype.invalid;
    internals.Base.prototype.disallow = internals.Base.prototype.invalid;
    internals.Base.prototype.equal = internals.Base.prototype.valid;
    internals.Base.prototype.exist = internals.Base.prototype.required;
    internals.Base.prototype.not = internals.Base.prototype.invalid;
    internals.Base.prototype.options = internals.Base.prototype.prefs;
    internals.Base.prototype.preferences = internals.Base.prototype.prefs;
    module2.exports = new internals.Base();
  }
});

// node_modules/joi/lib/types/any.js
var require_any = __commonJS({
  "node_modules/joi/lib/types/any.js"(exports2, module2) {
    "use strict";
    var { assert } = require_lib();
    var Base = require_base();
    var Common = require_common2();
    var Messages = require_messages();
    module2.exports = Base.extend({
      type: "any",
      flags: {
        only: { default: false }
      },
      terms: {
        alterations: { init: null },
        examples: { init: null },
        externals: { init: null },
        metas: { init: [] },
        notes: { init: [] },
        shared: { init: null },
        tags: { init: [] },
        whens: { init: null }
      },
      rules: {
        custom: {
          method(method, description) {
            assert(typeof method === "function", "Method must be a function");
            assert(description === void 0 || description && typeof description === "string", "Description must be a non-empty string");
            return this.$_addRule({ name: "custom", args: { method, description } });
          },
          validate(value, helpers, { method }) {
            try {
              return method(value, helpers);
            } catch (err) {
              return helpers.error("any.custom", { error: err });
            }
          },
          args: ["method", "description"],
          multi: true
        },
        messages: {
          method(messages) {
            return this.prefs({ messages });
          }
        },
        shared: {
          method(schema) {
            assert(Common.isSchema(schema) && schema._flags.id, "Schema must be a schema with an id");
            const obj = this.clone();
            obj.$_terms.shared = obj.$_terms.shared || [];
            obj.$_terms.shared.push(schema);
            obj.$_mutateRegister(schema);
            return obj;
          }
        },
        warning: {
          method(code, local) {
            assert(code && typeof code === "string", "Invalid warning code");
            return this.$_addRule({ name: "warning", args: { code, local }, warn: true });
          },
          validate(value, helpers, { code, local }) {
            return helpers.error(code, local);
          },
          args: ["code", "local"],
          multi: true
        }
      },
      modifiers: {
        keep(rule, enabled = true) {
          rule.keep = enabled;
        },
        message(rule, message) {
          rule.message = Messages.compile(message);
        },
        warn(rule, enabled = true) {
          rule.warn = enabled;
        }
      },
      manifest: {
        build(obj, desc) {
          for (const key of Object.keys(desc)) {
            const values = desc[key];
            if (["examples", "externals", "metas", "notes", "tags"].includes(key)) {
              for (const value of values) {
                obj = obj[key.slice(0, -1)](value);
              }
              continue;
            }
            if (key === "alterations") {
              const alter = {};
              for (const { target, adjuster } of values) {
                alter[target] = adjuster;
              }
              obj = obj.alter(alter);
              continue;
            }
            if (key === "whens") {
              for (const value of values) {
                const { ref, is, not, then, otherwise, concat } = value;
                if (concat) {
                  obj = obj.concat(concat);
                } else if (ref) {
                  obj = obj.when(ref, { is, not, then, otherwise, switch: value.switch, break: value.break });
                } else {
                  obj = obj.when(is, { then, otherwise, break: value.break });
                }
              }
              continue;
            }
            if (key === "shared") {
              for (const value of values) {
                obj = obj.shared(value);
              }
            }
          }
          return obj;
        }
      },
      messages: {
        "any.custom": "{{#label}} failed custom validation because {{#error.message}}",
        "any.default": "{{#label}} threw an error when running default method",
        "any.failover": "{{#label}} threw an error when running failover method",
        "any.invalid": "{{#label}} contains an invalid value",
        "any.only": '{{#label}} must be {if(#valids.length == 1, "", "one of ")}{{#valids}}',
        "any.ref": "{{#label}} {{#arg}} references {{:#ref}} which {{#reason}}",
        "any.required": "{{#label}} is required",
        "any.unknown": "{{#label}} is not allowed"
      }
    });
  }
});

// node_modules/joi/lib/types/alternatives.js
var require_alternatives = __commonJS({
  "node_modules/joi/lib/types/alternatives.js"(exports2, module2) {
    "use strict";
    var { assert, merge: merge2 } = require_lib();
    var Any = require_any();
    var Common = require_common2();
    var Compile = require_compile();
    var Errors = require_errors();
    var Ref = require_ref2();
    var internals = {};
    module2.exports = Any.extend({
      type: "alternatives",
      flags: {
        match: { default: "any" }
        // 'any', 'one', 'all'
      },
      terms: {
        matches: { init: [], register: Ref.toSibling }
      },
      args(schema, ...schemas) {
        if (schemas.length === 1) {
          if (Array.isArray(schemas[0])) {
            return schema.try(...schemas[0]);
          }
        }
        return schema.try(...schemas);
      },
      validate(value, helpers) {
        const { schema, error, state, prefs } = helpers;
        if (schema._flags.match) {
          const matched = [];
          const failed = [];
          for (let i = 0; i < schema.$_terms.matches.length; ++i) {
            const item = schema.$_terms.matches[i];
            const localState = state.nest(item.schema, `match.${i}`);
            localState.snapshot();
            const result = item.schema.$_validate(value, localState, prefs);
            if (!result.errors) {
              matched.push(result.value);
              localState.commit();
            } else {
              failed.push(result.errors);
              localState.restore();
            }
          }
          if (matched.length === 0) {
            const context = {
              details: failed.map((f) => Errors.details(f, { override: false }))
            };
            return { errors: error("alternatives.any", context) };
          }
          if (schema._flags.match === "one") {
            return matched.length === 1 ? { value: matched[0] } : { errors: error("alternatives.one") };
          }
          if (matched.length !== schema.$_terms.matches.length) {
            const context = {
              details: failed.map((f) => Errors.details(f, { override: false }))
            };
            return { errors: error("alternatives.all", context) };
          }
          const isAnyObj = (alternative) => {
            return alternative.$_terms.matches.some((v) => {
              return v.schema.type === "object" || v.schema.type === "alternatives" && isAnyObj(v.schema);
            });
          };
          return isAnyObj(schema) ? { value: matched.reduce((acc, v) => merge2(acc, v, { mergeArrays: false })) } : { value: matched[matched.length - 1] };
        }
        const errors = [];
        for (let i = 0; i < schema.$_terms.matches.length; ++i) {
          const item = schema.$_terms.matches[i];
          if (item.schema) {
            const localState = state.nest(item.schema, `match.${i}`);
            localState.snapshot();
            const result = item.schema.$_validate(value, localState, prefs);
            if (!result.errors) {
              localState.commit();
              return result;
            }
            localState.restore();
            errors.push({ schema: item.schema, reports: result.errors });
            continue;
          }
          const input = item.ref ? item.ref.resolve(value, state, prefs) : value;
          const tests = item.is ? [item] : item.switch;
          for (let j = 0; j < tests.length; ++j) {
            const test2 = tests[j];
            const { is, then, otherwise } = test2;
            const id = `match.${i}${item.switch ? "." + j : ""}`;
            if (!is.$_match(input, state.nest(is, `${id}.is`), prefs)) {
              if (otherwise) {
                return otherwise.$_validate(value, state.nest(otherwise, `${id}.otherwise`), prefs);
              }
            } else if (then) {
              return then.$_validate(value, state.nest(then, `${id}.then`), prefs);
            }
          }
        }
        return internals.errors(errors, helpers);
      },
      jsonSchema(schema, res, mode, options) {
        const matches = [];
        for (const match of schema.$_terms.matches) {
          if (match.schema) {
            matches.push(match.schema.$_jsonSchema(mode, options));
          } else {
            const tests = match.is ? [match] : match.switch;
            for (const test2 of tests) {
              if (test2.then) {
                matches.push(test2.then.$_jsonSchema(mode, options));
              }
              if (test2.otherwise) {
                matches.push(test2.otherwise.$_jsonSchema(mode, options));
              }
            }
          }
        }
        if (matches.length) {
          delete res.type;
          const matchMode = schema._flags.match ?? "any";
          if (matchMode === "one") {
            res.oneOf = matches;
          } else if (matchMode === "all") {
            res.allOf = matches;
          } else {
            res.anyOf = matches;
          }
        }
        return res;
      },
      rules: {
        conditional: {
          method(condition, options) {
            assert(!this._flags._endedSwitch, "Unreachable condition");
            assert(!this._flags.match, "Cannot combine match mode", this._flags.match, "with conditional rule");
            assert(options.break === void 0, "Cannot use break option with alternatives conditional");
            const obj = this.clone();
            const match = Compile.when(obj, condition, options);
            const conditions = match.is ? [match] : match.switch;
            for (const item of conditions) {
              if (item.then && item.otherwise) {
                obj.$_setFlag("_endedSwitch", true, { clone: false });
                break;
              }
            }
            obj.$_terms.matches.push(match);
            return obj.$_mutateRebuild();
          }
        },
        match: {
          method(mode) {
            assert(["any", "one", "all"].includes(mode), "Invalid alternatives match mode", mode);
            if (mode !== "any") {
              for (const match of this.$_terms.matches) {
                assert(match.schema, "Cannot combine match mode", mode, "with conditional rules");
              }
            }
            return this.$_setFlag("match", mode);
          }
        },
        try: {
          method(...schemas) {
            assert(schemas.length, "Missing alternative schemas");
            Common.verifyFlat(schemas, "try");
            assert(!this._flags._endedSwitch, "Unreachable condition");
            const obj = this.clone();
            for (const schema of schemas) {
              obj.$_terms.matches.push({ schema: obj.$_compile(schema) });
            }
            return obj.$_mutateRebuild();
          }
        }
      },
      overrides: {
        label(name) {
          const obj = this.$_parent("label", name);
          const each = (item, source) => {
            return source.path[0] !== "is" && typeof item._flags.label !== "string" ? item.label(name) : void 0;
          };
          return obj.$_modify({ each, ref: false });
        },
        isAsync() {
          if (this.$_terms.externals?.length) {
            return true;
          }
          for (const match of this.$_terms.matches) {
            if (match.schema?.isAsync()) {
              return true;
            }
            if (match.then?.isAsync()) {
              return true;
            }
            if (match.otherwise?.isAsync()) {
              return true;
            }
          }
          return false;
        }
      },
      rebuild(schema) {
        const each = (item) => {
          if (Common.isSchema(item) && item.type === "array") {
            schema.$_setFlag("_arrayItems", true, { clone: false });
          }
        };
        schema.$_modify({ each });
      },
      manifest: {
        build(obj, desc) {
          if (desc.matches) {
            for (const match of desc.matches) {
              const { schema, ref, is, not, then, otherwise } = match;
              if (schema) {
                obj = obj.try(schema);
              } else if (ref) {
                obj = obj.conditional(ref, { is, then, not, otherwise, switch: match.switch });
              } else {
                obj = obj.conditional(is, { then, otherwise });
              }
            }
          }
          return obj;
        }
      },
      messages: {
        "alternatives.all": "{{#label}} does not match all of the required types",
        "alternatives.any": "{{#label}} does not match any of the allowed types",
        "alternatives.match": "{{#label}} does not match any of the allowed types",
        "alternatives.one": "{{#label}} matches more than one allowed type",
        "alternatives.types": "{{#label}} must be one of {{#types}}"
      }
    });
    internals.errors = function(failures, { error, state }) {
      if (!failures.length) {
        return { errors: error("alternatives.any") };
      }
      if (failures.length === 1) {
        return { errors: failures[0].reports };
      }
      const valids = /* @__PURE__ */ new Set();
      const complex = [];
      for (const { reports, schema } of failures) {
        if (reports.length > 1) {
          return internals.unmatched(failures, error);
        }
        const report = reports[0];
        if (report instanceof Errors.Report === false) {
          return internals.unmatched(failures, error);
        }
        if (report.state.path.length !== state.path.length) {
          complex.push({ type: schema.type, report });
          continue;
        }
        if (report.code === "any.only") {
          for (const valid of report.local.valids) {
            valids.add(valid);
          }
          continue;
        }
        const [type, code] = report.code.split(".");
        if (code !== "base") {
          complex.push({ type: schema.type, report });
        } else if (report.code === "object.base") {
          valids.add(report.local.type);
        } else {
          valids.add(type);
        }
      }
      if (!complex.length) {
        return { errors: error("alternatives.types", { types: [...valids] }) };
      }
      if (complex.length === 1) {
        return { errors: complex[0].report };
      }
      return internals.unmatched(failures, error);
    };
    internals.unmatched = function(failures, error) {
      const errors = [];
      for (const failure2 of failures) {
        errors.push(...failure2.reports);
      }
      return { errors: error("alternatives.match", Errors.details(errors, { override: false })) };
    };
  }
});

// node_modules/joi/lib/types/array.js
var require_array = __commonJS({
  "node_modules/joi/lib/types/array.js"(exports2, module2) {
    "use strict";
    var { assert, deepEqual, reach } = require_lib();
    var Any = require_any();
    var Common = require_common2();
    var Compile = require_compile();
    var internals = {};
    module2.exports = Any.extend({
      type: "array",
      flags: {
        single: { default: false },
        sparse: { default: false }
      },
      terms: {
        items: { init: [], manifest: "schema" },
        ordered: { init: [], manifest: "schema" },
        _exclusions: { init: [] },
        _inclusions: { init: [] },
        _requireds: { init: [] }
      },
      coerce: {
        from: "object",
        method(value, { schema, state, prefs }) {
          if (!Array.isArray(value)) {
            return;
          }
          const sort = schema.$_getRule("sort");
          if (!sort) {
            return;
          }
          return internals.sort(schema, value, sort.args.options, state, prefs);
        }
      },
      validate(value, { schema, error }) {
        if (!Array.isArray(value)) {
          if (schema._flags.single) {
            const single = [value];
            single[Common.symbols.arraySingle] = true;
            return { value: single };
          }
          return { errors: error("array.base") };
        }
        if (!schema.$_getRule("items") && !schema.$_terms.externals) {
          return;
        }
        return { value: value.slice() };
      },
      jsonSchema(schema, res, mode, options) {
        const ordered = schema.$_terms.ordered;
        if (ordered.length) {
          res.prefixItems = ordered.map((item) => item.$_jsonSchema(mode, options));
        }
        if (schema.$_terms.items.length) {
          let items;
          if (schema.$_terms.items.length === 1) {
            items = schema.$_terms.items[0].$_jsonSchema(mode, options);
          } else {
            items = {
              anyOf: schema.$_terms.items.map((item) => item.$_jsonSchema(mode, options))
            };
          }
          if (ordered.length) {
            res.unevaluatedItems = items;
            internals.setOrderedMinItems(res, ordered);
          } else {
            res.items = items;
          }
        } else if (ordered.length) {
          res.unevaluatedItems = false;
          internals.setOrderedMinItems(res, ordered);
          res.maxItems = ordered.length;
        }
        const contains = [];
        for (const rule of schema._rules) {
          if (rule.name === "has" && !rule.args.schema._refs.refs.length) {
            contains.push(rule.args.schema.$_jsonSchema(mode, options));
          }
        }
        if (contains.length) {
          if (contains.length === 1) {
            res.contains = contains[0];
          } else {
            res.allOf = contains.map((item) => ({ contains: item }));
          }
        }
        if (schema._flags.single && schema.$_terms.items.length) {
          let items;
          if (schema.$_terms.items.length === 1) {
            items = schema.$_terms.items[0].$_jsonSchema(mode, options);
          } else {
            items = {
              anyOf: schema.$_terms.items.map((item) => item.$_jsonSchema(mode, options))
            };
          }
          res = {
            anyOf: [
              res,
              items
            ]
          };
        }
        return res;
      },
      rules: {
        has: {
          method(schema) {
            schema = this.$_compile(schema, { appendPath: true });
            const obj = this.$_addRule({ name: "has", args: { schema } });
            obj.$_mutateRegister(schema);
            return obj;
          },
          validate(value, { state, prefs, error }, { schema: has }) {
            const ancestors = [value, ...state.ancestors];
            for (let i = 0; i < value.length; ++i) {
              const localState = state.localize([...state.path, i], ancestors, has);
              if (has.$_match(value[i], localState, prefs)) {
                return value;
              }
            }
            const patternLabel = has._flags.label;
            if (patternLabel) {
              return error("array.hasKnown", { patternLabel });
            }
            return error("array.hasUnknown", null);
          },
          multi: true
        },
        items: {
          method(...schemas) {
            Common.verifyFlat(schemas, "items");
            const obj = this.$_addRule("items");
            for (let i = 0; i < schemas.length; ++i) {
              const type = Common.tryWithPath(() => this.$_compile(schemas[i]), i, { append: true });
              obj.$_terms.items.push(type);
            }
            return obj.$_mutateRebuild();
          },
          validate(value, { schema, error, state, prefs, errorsArray }) {
            const requireds = schema.$_terms._requireds.slice();
            const ordereds = schema.$_terms.ordered.slice();
            const inclusions = [...schema.$_terms._inclusions, ...requireds];
            const wasArray = !value[Common.symbols.arraySingle];
            delete value[Common.symbols.arraySingle];
            const errors = errorsArray();
            let il = value.length;
            for (let i = 0; i < il; ++i) {
              const item = value[i];
              let errored = false;
              let isValid = false;
              const key = wasArray ? i : new Number(i);
              const path4 = [...state.path, key];
              if (!schema._flags.sparse && item === void 0) {
                errors.push(error("array.sparse", { key, path: path4, pos: i, value: void 0 }, state.localize(path4)));
                if (prefs.abortEarly) {
                  return errors;
                }
                ordereds.shift();
                continue;
              }
              const ancestors = [value, ...state.ancestors];
              for (const exclusion of schema.$_terms._exclusions) {
                if (!exclusion.$_match(item, state.localize(path4, ancestors, exclusion), prefs, { presence: "ignore" })) {
                  continue;
                }
                errors.push(error("array.excludes", { pos: i, value: item }, state.localize(path4)));
                if (prefs.abortEarly) {
                  return errors;
                }
                errored = true;
                ordereds.shift();
                break;
              }
              if (errored) {
                continue;
              }
              if (schema.$_terms.ordered.length) {
                if (ordereds.length) {
                  const ordered = ordereds.shift();
                  const res = ordered.$_validate(item, state.localize(path4, ancestors, ordered), prefs);
                  if (!res.errors) {
                    if (ordered._flags.result === "strip") {
                      internals.fastSplice(value, i);
                      --i;
                      --il;
                    } else if (!schema._flags.sparse && res.value === void 0) {
                      errors.push(error("array.sparse", { key, path: path4, pos: i, value: void 0 }, state.localize(path4)));
                      if (prefs.abortEarly) {
                        return errors;
                      }
                      continue;
                    } else {
                      value[i] = res.value;
                    }
                  } else {
                    errors.push(...res.errors);
                    if (prefs.abortEarly) {
                      return errors;
                    }
                  }
                  continue;
                } else if (!schema.$_terms.items.length) {
                  errors.push(error("array.orderedLength", { pos: i, limit: schema.$_terms.ordered.length }));
                  if (prefs.abortEarly) {
                    return errors;
                  }
                  break;
                }
              }
              const requiredChecks = [];
              let jl = requireds.length;
              for (let j = 0; j < jl; ++j) {
                const localState = state.localize(path4, ancestors, requireds[j]);
                localState.snapshot();
                const res = requireds[j].$_validate(item, localState, prefs);
                requiredChecks[j] = res;
                if (!res.errors) {
                  localState.commit();
                  value[i] = res.value;
                  isValid = true;
                  internals.fastSplice(requireds, j);
                  --j;
                  --jl;
                  if (!schema._flags.sparse && res.value === void 0) {
                    errors.push(error("array.sparse", { key, path: path4, pos: i, value: void 0 }, state.localize(path4)));
                    if (prefs.abortEarly) {
                      return errors;
                    }
                  }
                  break;
                }
                localState.restore();
              }
              if (isValid) {
                continue;
              }
              const stripUnknown = prefs.stripUnknown && !!prefs.stripUnknown.arrays || false;
              jl = inclusions.length;
              for (const inclusion of inclusions) {
                let res;
                const previousCheck = requireds.indexOf(inclusion);
                if (previousCheck !== -1) {
                  res = requiredChecks[previousCheck];
                } else {
                  const localState = state.localize(path4, ancestors, inclusion);
                  localState.snapshot();
                  res = inclusion.$_validate(item, localState, prefs);
                  if (!res.errors) {
                    localState.commit();
                    if (inclusion._flags.result === "strip") {
                      internals.fastSplice(value, i);
                      --i;
                      --il;
                    } else if (!schema._flags.sparse && res.value === void 0) {
                      errors.push(error("array.sparse", { key, path: path4, pos: i, value: void 0 }, state.localize(path4)));
                      errored = true;
                    } else {
                      value[i] = res.value;
                    }
                    isValid = true;
                    break;
                  }
                  localState.restore();
                }
                if (jl === 1) {
                  if (stripUnknown) {
                    internals.fastSplice(value, i);
                    --i;
                    --il;
                    isValid = true;
                    break;
                  }
                  errors.push(...res.errors);
                  if (prefs.abortEarly) {
                    return errors;
                  }
                  errored = true;
                  break;
                }
              }
              if (errored) {
                continue;
              }
              if ((schema.$_terms._inclusions.length || schema.$_terms._requireds.length) && !isValid) {
                if (stripUnknown) {
                  internals.fastSplice(value, i);
                  --i;
                  --il;
                  continue;
                }
                errors.push(error("array.includes", { pos: i, value: item }, state.localize(path4)));
                if (prefs.abortEarly) {
                  return errors;
                }
              }
            }
            if (requireds.length) {
              internals.fillMissedErrors(schema, errors, requireds, value, state, prefs);
            }
            if (ordereds.length) {
              internals.fillOrderedErrors(schema, errors, ordereds, value, state, prefs);
              if (!errors.length) {
                internals.fillDefault(ordereds, value, state, prefs);
              }
            }
            return errors.length ? errors : value;
          },
          priority: true,
          manifest: false
        },
        length: {
          method(limit) {
            return this.$_addRule({ name: "length", args: { limit }, operator: "=" });
          },
          validate(value, helpers, { limit }, { name, operator, args }) {
            if (Common.compare(value.length, limit, operator)) {
              return value;
            }
            return helpers.error("array." + name, { limit: args.limit, value });
          },
          jsonSchema(rule, res) {
            res.minItems = rule.args.limit;
            res.maxItems = rule.args.limit;
            return res;
          },
          args: [
            {
              name: "limit",
              ref: true,
              assert: Common.limit,
              message: "must be a positive integer"
            }
          ]
        },
        max: {
          method(limit) {
            return this.$_addRule({ name: "max", method: "length", args: { limit }, operator: "<=" });
          },
          jsonSchema(rule, res) {
            res.maxItems = rule.args.limit;
            return res;
          }
        },
        min: {
          method(limit) {
            return this.$_addRule({ name: "min", method: "length", args: { limit }, operator: ">=" });
          },
          jsonSchema(rule, res) {
            res.minItems = rule.args.limit;
            return res;
          }
        },
        ordered: {
          method(...schemas) {
            Common.verifyFlat(schemas, "ordered");
            const obj = this.$_addRule("items");
            for (let i = 0; i < schemas.length; ++i) {
              const type = Common.tryWithPath(() => this.$_compile(schemas[i]), i, { append: true });
              internals.validateSingle(type, obj);
              obj.$_mutateRegister(type);
              obj.$_terms.ordered.push(type);
            }
            return obj.$_mutateRebuild();
          }
        },
        single: {
          method(enabled) {
            const value = enabled === void 0 ? true : !!enabled;
            assert(!value || !this._flags._arrayItems, "Cannot specify single rule when array has array items");
            return this.$_setFlag("single", value);
          }
        },
        sort: {
          method(options = {}) {
            Common.assertOptions(options, ["by", "order"]);
            const settings = {
              order: options.order || "ascending"
            };
            if (options.by) {
              settings.by = Compile.ref(options.by, { ancestor: 0 });
              assert(!settings.by.ancestor, "Cannot sort by ancestor");
            }
            return this.$_addRule({ name: "sort", args: { options: settings } });
          },
          validate(value, { error, state, prefs, schema }, { options }) {
            const { value: sorted, errors } = internals.sort(schema, value, options, state, prefs);
            if (errors) {
              return errors;
            }
            for (let i = 0; i < value.length; ++i) {
              if (value[i] !== sorted[i]) {
                return error("array.sort", { order: options.order, by: options.by ? options.by.key : "value" });
              }
            }
            return value;
          },
          convert: true
        },
        sparse: {
          method(enabled) {
            const value = enabled === void 0 ? true : !!enabled;
            if (this._flags.sparse === value) {
              return this;
            }
            const obj = value ? this.clone() : this.$_addRule("items");
            return obj.$_setFlag("sparse", value, { clone: false });
          }
        },
        unique: {
          method(comparator, options = {}) {
            assert(!comparator || typeof comparator === "function" || typeof comparator === "string", "comparator must be a function or a string");
            Common.assertOptions(options, ["ignoreUndefined", "separator"]);
            const rule = { name: "unique", args: { options, comparator } };
            if (comparator) {
              if (typeof comparator === "string") {
                const separator = Common.default(options.separator, ".");
                rule.path = separator ? comparator.split(separator) : [comparator];
              } else {
                rule.comparator = comparator;
              }
            }
            return this.$_addRule(rule);
          },
          validate(value, { state, error, schema }, { comparator: raw, options }, { comparator, path: path4 }) {
            const found = {
              string: /* @__PURE__ */ Object.create(null),
              number: /* @__PURE__ */ Object.create(null),
              undefined: /* @__PURE__ */ Object.create(null),
              boolean: /* @__PURE__ */ Object.create(null),
              bigint: /* @__PURE__ */ Object.create(null),
              object: /* @__PURE__ */ new Map(),
              function: /* @__PURE__ */ new Map(),
              custom: /* @__PURE__ */ new Map()
            };
            const compare = comparator || deepEqual;
            const ignoreUndefined = options.ignoreUndefined;
            for (let i = 0; i < value.length; ++i) {
              const item = path4 ? reach(value[i], path4) : value[i];
              const records = comparator ? found.custom : found[typeof item];
              assert(records, "Failed to find unique map container for type", typeof item);
              if (records instanceof Map) {
                const entries = records.entries();
                let current;
                while (!(current = entries.next()).done) {
                  if (compare(current.value[0], item)) {
                    const localState = state.localize([...state.path, i], [value, ...state.ancestors]);
                    const context = {
                      pos: i,
                      value: value[i],
                      dupePos: current.value[1],
                      dupeValue: value[current.value[1]]
                    };
                    if (path4) {
                      context.path = raw;
                    }
                    return error("array.unique", context, localState);
                  }
                }
                records.set(item, i);
              } else {
                if ((!ignoreUndefined || item !== void 0) && records[item] !== void 0) {
                  const context = {
                    pos: i,
                    value: value[i],
                    dupePos: records[item],
                    dupeValue: value[records[item]]
                  };
                  if (path4) {
                    context.path = raw;
                  }
                  const localState = state.localize([...state.path, i], [value, ...state.ancestors]);
                  return error("array.unique", context, localState);
                }
                records[item] = i;
              }
            }
            return value;
          },
          jsonSchema(rule, res) {
            if (!rule.args.comparator) {
              res.uniqueItems = true;
            }
            return res;
          },
          args: ["comparator", "options"],
          multi: true
        }
      },
      overrides: {
        isAsync() {
          if (this.$_terms.externals?.length) {
            return true;
          }
          for (const item of this.$_terms.items) {
            if (item.isAsync()) {
              return true;
            }
          }
          for (const item of this.$_terms.ordered) {
            if (item.isAsync()) {
              return true;
            }
          }
          return false;
        }
      },
      cast: {
        set: {
          from: Array.isArray,
          to(value, helpers) {
            return new Set(value);
          }
        }
      },
      rebuild(schema) {
        schema.$_terms._inclusions = [];
        schema.$_terms._exclusions = [];
        schema.$_terms._requireds = [];
        for (const type of schema.$_terms.items) {
          internals.validateSingle(type, schema);
          if (type._flags.presence === "required") {
            schema.$_terms._requireds.push(type);
          } else if (type._flags.presence === "forbidden") {
            schema.$_terms._exclusions.push(type);
          } else {
            schema.$_terms._inclusions.push(type);
          }
        }
        for (const type of schema.$_terms.ordered) {
          internals.validateSingle(type, schema);
        }
      },
      manifest: {
        build(obj, desc) {
          if (desc.items) {
            obj = obj.items(...desc.items);
          }
          if (desc.ordered) {
            obj = obj.ordered(...desc.ordered);
          }
          return obj;
        }
      },
      messages: {
        "array.base": "{{#label}} must be an array",
        "array.excludes": "{{#label}} contains an excluded value",
        "array.hasKnown": "{{#label}} does not contain at least one required match for type {:#patternLabel}",
        "array.hasUnknown": "{{#label}} does not contain at least one required match",
        "array.includes": "{{#label}} does not match any of the allowed types",
        "array.includesRequiredBoth": "{{#label}} does not contain {{#knownMisses}} and {{#unknownMisses}} other required value(s)",
        "array.includesRequiredKnowns": "{{#label}} does not contain {{#knownMisses}}",
        "array.includesRequiredUnknowns": "{{#label}} does not contain {{#unknownMisses}} required value(s)",
        "array.length": "{{#label}} must contain {{#limit}} items",
        "array.max": "{{#label}} must contain less than or equal to {{#limit}} items",
        "array.min": "{{#label}} must contain at least {{#limit}} items",
        "array.orderedLength": "{{#label}} must contain at most {{#limit}} items",
        "array.sort": "{{#label}} must be sorted in {#order} order by {{#by}}",
        "array.sort.mismatching": "{{#label}} cannot be sorted due to mismatching types",
        "array.sort.unsupported": "{{#label}} cannot be sorted due to unsupported type {#type}",
        "array.sparse": "{{#label}} must not be a sparse array item",
        "array.unique": "{{#label}} contains a duplicate value"
      }
    });
    internals.setOrderedMinItems = function(res, ordered) {
      const minItems = internals.orderedMinItems(ordered);
      if (minItems) {
        res.minItems = minItems;
      }
    };
    internals.orderedMinItems = function(ordered) {
      for (let i = ordered.length - 1; i >= 0; --i) {
        if (ordered[i]._flags.presence === "required") {
          return i + 1;
        }
      }
      return 0;
    };
    internals.fillMissedErrors = function(schema, errors, requireds, value, state, prefs) {
      const knownMisses = [];
      let unknownMisses = 0;
      for (const required of requireds) {
        const label = required._flags.label;
        if (label) {
          knownMisses.push(label);
        } else {
          ++unknownMisses;
        }
      }
      if (knownMisses.length) {
        if (unknownMisses) {
          errors.push(schema.$_createError("array.includesRequiredBoth", value, { knownMisses, unknownMisses }, state, prefs));
        } else {
          errors.push(schema.$_createError("array.includesRequiredKnowns", value, { knownMisses }, state, prefs));
        }
      } else {
        errors.push(schema.$_createError("array.includesRequiredUnknowns", value, { unknownMisses }, state, prefs));
      }
    };
    internals.fillOrderedErrors = function(schema, errors, ordereds, value, state, prefs) {
      const requiredOrdereds = [];
      for (const ordered of ordereds) {
        if (ordered._flags.presence === "required") {
          requiredOrdereds.push(ordered);
        }
      }
      if (requiredOrdereds.length) {
        internals.fillMissedErrors(schema, errors, requiredOrdereds, value, state, prefs);
      }
    };
    internals.fillDefault = function(ordereds, value, state, prefs) {
      const overrides = [];
      let trailingUndefined = true;
      for (let i = ordereds.length - 1; i >= 0; --i) {
        const ordered = ordereds[i];
        const ancestors = [value, ...state.ancestors];
        const override = ordered.$_validate(void 0, state.localize(state.path, ancestors, ordered), prefs).value;
        if (trailingUndefined) {
          if (override === void 0) {
            continue;
          }
          trailingUndefined = false;
        }
        overrides.unshift(override);
      }
      if (overrides.length) {
        value.push(...overrides);
      }
    };
    internals.fastSplice = function(arr, i) {
      let pos = i;
      while (pos < arr.length) {
        arr[pos++] = arr[pos];
      }
      --arr.length;
    };
    internals.validateSingle = function(type, obj) {
      if (type.type === "array" || type._flags._arrayItems) {
        assert(!obj._flags.single, "Cannot specify array item with single rule enabled");
        obj.$_setFlag("_arrayItems", true, { clone: false });
      }
    };
    internals.sort = function(schema, value, settings, state, prefs) {
      const order = settings.order === "ascending" ? 1 : -1;
      const aFirst = -1 * order;
      const bFirst = order;
      const sort = (a, b) => {
        let compare = internals.compare(a, b, aFirst, bFirst);
        if (compare !== null) {
          return compare;
        }
        if (settings.by) {
          a = settings.by.resolve(a, state, prefs);
          b = settings.by.resolve(b, state, prefs);
        }
        compare = internals.compare(a, b, aFirst, bFirst);
        if (compare !== null) {
          return compare;
        }
        const type = typeof a;
        if (type !== typeof b) {
          throw schema.$_createError("array.sort.mismatching", value, null, state, prefs);
        }
        if (type !== "number" && type !== "string") {
          throw schema.$_createError("array.sort.unsupported", value, { type }, state, prefs);
        }
        if (type === "number") {
          return (a - b) * order;
        }
        return a < b ? aFirst : bFirst;
      };
      try {
        return { value: value.slice().sort(sort) };
      } catch (err) {
        return { errors: err };
      }
    };
    internals.compare = function(a, b, aFirst, bFirst) {
      if (a === b) {
        return 0;
      }
      if (a === void 0) {
        return 1;
      }
      if (b === void 0) {
        return -1;
      }
      if (a === null) {
        return bFirst;
      }
      if (b === null) {
        return aFirst;
      }
      return null;
    };
  }
});

// node_modules/joi/lib/types/boolean.js
var require_boolean = __commonJS({
  "node_modules/joi/lib/types/boolean.js"(exports2, module2) {
    "use strict";
    var { assert } = require_lib();
    var Any = require_any();
    var Common = require_common2();
    var Values = require_values();
    var internals = {};
    internals.isBool = function(value) {
      return typeof value === "boolean";
    };
    module2.exports = Any.extend({
      type: "boolean",
      flags: {
        sensitive: { default: false }
      },
      terms: {
        falsy: {
          init: null,
          manifest: "values"
        },
        truthy: {
          init: null,
          manifest: "values"
        }
      },
      coerce(value, { schema }) {
        if (typeof value === "boolean") {
          return;
        }
        if (typeof value === "string") {
          const trimmedValue = value.trim();
          const normalized = schema._flags.sensitive ? trimmedValue : trimmedValue.toLowerCase();
          value = normalized === "true" ? true : normalized === "false" ? false : value;
        }
        if (typeof value !== "boolean") {
          value = schema.$_terms.truthy && schema.$_terms.truthy.has(value, null, null, !schema._flags.sensitive) || (schema.$_terms.falsy && schema.$_terms.falsy.has(value, null, null, !schema._flags.sensitive) ? false : value);
        }
        return { value };
      },
      validate(value, { error }) {
        if (typeof value !== "boolean") {
          return { value, errors: error("boolean.base") };
        }
      },
      rules: {
        truthy: {
          method(...values) {
            Common.verifyFlat(values, "truthy");
            const obj = this.clone();
            obj.$_terms.truthy = obj.$_terms.truthy || new Values();
            for (let i = 0; i < values.length; ++i) {
              const value = values[i];
              assert(value !== void 0, "Cannot call truthy with undefined");
              obj.$_terms.truthy.add(value);
            }
            return obj;
          }
        },
        falsy: {
          method(...values) {
            Common.verifyFlat(values, "falsy");
            const obj = this.clone();
            obj.$_terms.falsy = obj.$_terms.falsy || new Values();
            for (let i = 0; i < values.length; ++i) {
              const value = values[i];
              assert(value !== void 0, "Cannot call falsy with undefined");
              obj.$_terms.falsy.add(value);
            }
            return obj;
          }
        },
        sensitive: {
          method(enabled = true) {
            return this.$_setFlag("sensitive", enabled);
          }
        }
      },
      cast: {
        number: {
          from: internals.isBool,
          to(value, helpers) {
            return value ? 1 : 0;
          }
        },
        string: {
          from: internals.isBool,
          to(value, helpers) {
            return value ? "true" : "false";
          }
        }
      },
      manifest: {
        build(obj, desc) {
          if (desc.truthy) {
            obj = obj.truthy(...desc.truthy);
          }
          if (desc.falsy) {
            obj = obj.falsy(...desc.falsy);
          }
          return obj;
        }
      },
      messages: {
        "boolean.base": "{{#label}} must be a boolean"
      }
    });
  }
});

// node_modules/joi/lib/types/date.js
var require_date = __commonJS({
  "node_modules/joi/lib/types/date.js"(exports2, module2) {
    "use strict";
    var { assert } = require_lib();
    var Any = require_any();
    var Common = require_common2();
    var Template = require_template();
    var internals = {
      formats: ["iso", "javascript", "unix"]
    };
    internals.isDate = function(value) {
      return value instanceof Date;
    };
    module2.exports = Any.extend({
      type: "date",
      coerce: {
        from: ["number", "string"],
        method(value, { schema }) {
          return { value: internals.parse(value, schema._flags.format) || value };
        }
      },
      validate(value, { schema, error, prefs }) {
        if (value instanceof Date && !isNaN(value.getTime())) {
          return;
        }
        const format = schema._flags.format;
        if (!prefs.convert || !format || typeof value !== "string") {
          return { value, errors: error("date.base") };
        }
        return { value, errors: error("date.format", { format }) };
      },
      jsonSchema(schema, res, mode, options) {
        res.type = "string";
        res.format = "date-time";
        return res;
      },
      rules: {
        compare: {
          method: false,
          validate(value, helpers, { date }, { name, operator, args }) {
            const to = date === "now" ? Date.now() : date.getTime();
            if (Common.compare(value.getTime(), to, operator)) {
              return value;
            }
            return helpers.error("date." + name, { limit: args.date, value });
          },
          args: [
            {
              name: "date",
              ref: true,
              normalize: (date) => {
                return date === "now" ? date : internals.parse(date);
              },
              assert: (date) => date !== null,
              message: "must have a valid date format"
            }
          ]
        },
        format: {
          method(format) {
            assert(internals.formats.includes(format), "Unknown date format", format);
            return this.$_setFlag("format", format);
          }
        },
        greater: {
          method(date) {
            return this.$_addRule({ name: "greater", method: "compare", args: { date }, operator: ">" });
          },
          jsonSchema(rule, res) {
            const date = rule.args.date;
            if (date instanceof Date) {
              res["x-constraint"] = { ...res["x-constraint"], greater: date.toISOString() };
            }
            return res;
          }
        },
        iso: {
          method() {
            return this.format("iso");
          }
        },
        less: {
          method(date) {
            return this.$_addRule({ name: "less", method: "compare", args: { date }, operator: "<" });
          },
          jsonSchema(rule, res) {
            const date = rule.args.date;
            if (date instanceof Date) {
              res["x-constraint"] = { ...res["x-constraint"], less: date.toISOString() };
            }
            return res;
          }
        },
        max: {
          method(date) {
            return this.$_addRule({ name: "max", method: "compare", args: { date }, operator: "<=" });
          },
          jsonSchema(rule, res) {
            const date = rule.args.date;
            if (date instanceof Date) {
              res["x-constraint"] = { ...res["x-constraint"], max: date.toISOString() };
            }
            return res;
          }
        },
        min: {
          method(date) {
            return this.$_addRule({ name: "min", method: "compare", args: { date }, operator: ">=" });
          },
          jsonSchema(rule, res) {
            const date = rule.args.date;
            if (date instanceof Date) {
              res["x-constraint"] = { ...res["x-constraint"], min: date.toISOString() };
            }
            return res;
          }
        },
        timestamp: {
          method(type = "javascript") {
            assert(["javascript", "unix"].includes(type), '"type" must be one of "javascript, unix"');
            return this.format(type);
          }
        }
      },
      cast: {
        number: {
          from: internals.isDate,
          to(value, helpers) {
            return value.getTime();
          }
        },
        string: {
          from: internals.isDate,
          to(value, { prefs }) {
            return Template.date(value, prefs);
          }
        }
      },
      messages: {
        "date.base": "{{#label}} must be a valid date",
        "date.format": '{{#label}} must be in {msg("date.format." + #format) || #format} format',
        "date.greater": "{{#label}} must be greater than {{:#limit}}",
        "date.less": "{{#label}} must be less than {{:#limit}}",
        "date.max": "{{#label}} must be less than or equal to {{:#limit}}",
        "date.min": "{{#label}} must be greater than or equal to {{:#limit}}",
        // Messages used in date.format
        "date.format.iso": "ISO 8601 date",
        "date.format.javascript": "timestamp or number of milliseconds",
        "date.format.unix": "timestamp or number of seconds"
      }
    });
    internals.parse = function(value, format) {
      if (value instanceof Date) {
        return value;
      }
      if (typeof value !== "string" && (isNaN(value) || !isFinite(value))) {
        return null;
      }
      if (/^\s*$/.test(value)) {
        return null;
      }
      if (format === "iso") {
        if (!Common.isIsoDate(value)) {
          return null;
        }
        return internals.date(value.toString());
      }
      const original = value;
      if (typeof value === "string" && /^[+-]?\d+(\.\d+)?$/.test(value)) {
        value = parseFloat(value);
      }
      if (format) {
        if (format === "javascript") {
          return internals.date(1 * value);
        }
        if (format === "unix") {
          return internals.date(1e3 * value);
        }
        if (typeof original === "string") {
          return null;
        }
      }
      return internals.date(value);
    };
    internals.date = function(value) {
      const date = new Date(value);
      if (!isNaN(date.getTime())) {
        return date;
      }
      return null;
    };
  }
});

// node_modules/@hapi/topo/lib/index.js
var require_lib4 = __commonJS({
  "node_modules/@hapi/topo/lib/index.js"(exports2) {
    "use strict";
    var { assert } = require_lib();
    var internals = {};
    exports2.Sorter = class {
      constructor() {
        this._items = [];
        this.nodes = [];
      }
      add(nodes, options) {
        options = options ?? {};
        const before = [].concat(options.before ?? []);
        const after = [].concat(options.after ?? []);
        const group = options.group ?? "?";
        const sort = options.sort ?? 0;
        assert(!before.includes(group), `Item cannot come before itself: ${group}`);
        assert(!before.includes("?"), "Item cannot come before unassociated items");
        assert(!after.includes(group), `Item cannot come after itself: ${group}`);
        assert(!after.includes("?"), "Item cannot come after unassociated items");
        if (!Array.isArray(nodes)) {
          nodes = [nodes];
        }
        for (const node of nodes) {
          const item = {
            seq: this._items.length,
            sort,
            before,
            after,
            group,
            node
          };
          this._items.push(item);
        }
        if (!options.manual) {
          const valid = this._sort();
          assert(valid, "item", group !== "?" ? `added into group ${group}` : "", "created a dependencies error");
        }
        return this.nodes;
      }
      merge(others) {
        if (!Array.isArray(others)) {
          others = [others];
        }
        for (const other of others) {
          if (other) {
            for (const item of other._items) {
              this._items.push(Object.assign({}, item));
            }
          }
        }
        this._items.sort(internals.mergeSort);
        for (let i = 0; i < this._items.length; ++i) {
          this._items[i].seq = i;
        }
        const valid = this._sort();
        assert(valid, "merge created a dependencies error");
        return this.nodes;
      }
      sort() {
        const valid = this._sort();
        assert(valid, "sort created a dependencies error");
        return this.nodes;
      }
      _sort() {
        const graph = {};
        const graphAfters = /* @__PURE__ */ Object.create(null);
        const groups = /* @__PURE__ */ Object.create(null);
        for (const item of this._items) {
          const seq = item.seq;
          const group = item.group;
          groups[group] = groups[group] ?? [];
          groups[group].push(seq);
          graph[seq] = item.before;
          for (const after of item.after) {
            graphAfters[after] = graphAfters[after] ?? [];
            graphAfters[after].push(seq);
          }
        }
        for (const node in graph) {
          const expandedGroups = [];
          for (const graphNodeItem in graph[node]) {
            const group = graph[node][graphNodeItem];
            groups[group] = groups[group] ?? [];
            expandedGroups.push(...groups[group]);
          }
          graph[node] = expandedGroups;
        }
        for (const group in graphAfters) {
          if (groups[group]) {
            for (const node of groups[group]) {
              graph[node].push(...graphAfters[group]);
            }
          }
        }
        const ancestors = {};
        for (const node in graph) {
          const children = graph[node];
          for (const child of children) {
            ancestors[child] = ancestors[child] ?? [];
            ancestors[child].push(node);
          }
        }
        const visited = {};
        const sorted = [];
        for (let i = 0; i < this._items.length; ++i) {
          let next = i;
          if (ancestors[i]) {
            next = null;
            for (let j = 0; j < this._items.length; ++j) {
              if (visited[j] === true) {
                continue;
              }
              if (!ancestors[j]) {
                ancestors[j] = [];
              }
              const shouldSeeCount = ancestors[j].length;
              let seenCount = 0;
              for (let k = 0; k < shouldSeeCount; ++k) {
                if (visited[ancestors[j][k]]) {
                  ++seenCount;
                }
              }
              if (seenCount === shouldSeeCount) {
                next = j;
                break;
              }
            }
          }
          if (next !== null) {
            visited[next] = true;
            sorted.push(next);
          }
        }
        if (sorted.length !== this._items.length) {
          return false;
        }
        const seqIndex = {};
        for (const item of this._items) {
          seqIndex[item.seq] = item;
        }
        this._items = [];
        this.nodes = [];
        for (const value of sorted) {
          const sortedItem = seqIndex[value];
          this.nodes.push(sortedItem.node);
          this._items.push(sortedItem);
        }
        return true;
      }
    };
    internals.mergeSort = (a, b) => {
      return a.sort === b.sort ? 0 : a.sort < b.sort ? -1 : 1;
    };
  }
});

// node_modules/joi/lib/types/keys.js
var require_keys = __commonJS({
  "node_modules/joi/lib/types/keys.js"(exports2, module2) {
    "use strict";
    var { applyToDefaults, assert, clone: Clone } = require_lib();
    var Topo = require_lib4();
    var Any = require_any();
    var Common = require_common2();
    var Compile = require_compile();
    var Errors = require_errors();
    var Ref = require_ref2();
    var Template = require_template();
    var internals = {
      renameDefaults: {
        alias: false,
        // Keep old value in place
        multiple: false,
        // Allow renaming multiple keys into the same target
        override: false
        // Overrides an existing key
      }
    };
    module2.exports = Any.extend({
      type: "_keys",
      properties: {
        typeof: "object"
      },
      flags: {
        unknown: { default: void 0 }
      },
      terms: {
        dependencies: { init: null },
        keys: { init: null, manifest: { mapped: { from: "schema", to: "key" } } },
        patterns: { init: null },
        renames: { init: null }
      },
      args(schema, keys) {
        return schema.keys(keys);
      },
      jsonSchema(schema, res, mode, options) {
        res.type = "object";
        if (schema.$_terms.keys) {
          res.properties = {};
          const required = [];
          for (const child of schema.$_terms.keys) {
            const jsonSchema = child.schema.$_jsonSchema(mode, options);
            res.properties[child.key] = jsonSchema;
            if (child.schema._flags.id) {
              options.$defs[child.schema._flags.id] = jsonSchema;
            }
            if (child.schema._flags.presence === "required" || mode === "output" && child.schema._flags.default !== void 0) {
              required.push(child.key);
            }
          }
          if (required.length) {
            res.required = required.sort();
          }
        }
        if (schema.$_terms.patterns) {
          const patternProperties = {};
          for (const pattern of schema.$_terms.patterns) {
            if (pattern.regex) {
              patternProperties[pattern.regex.source] = pattern.rule.$_jsonSchema(mode, options);
            } else {
              const isAny = pattern.schema.type === "any";
              if (isAny) {
                res.additionalProperties = pattern.rule.$_jsonSchema(mode, options);
              } else {
                patternProperties[".*"] = pattern.rule.$_jsonSchema(mode, options);
              }
            }
          }
          if (Object.keys(patternProperties).length) {
            res.patternProperties = patternProperties;
          }
        }
        if (res.additionalProperties === void 0) {
          const additionalProperties = schema._flags.unknown === true || schema._flags.unknown === void 0 && !schema.$_terms.keys && !schema.$_terms.patterns && !schema._flags.only;
          if (additionalProperties === false) {
            res.additionalProperties = false;
          }
        }
        return res;
      },
      validate(value, { schema, error, state, prefs }) {
        if (!value || typeof value !== schema.$_property("typeof") || Array.isArray(value)) {
          return { value, errors: error("object.base", { type: schema.$_property("typeof") }) };
        }
        if (!schema.$_terms.renames && !schema.$_terms.dependencies && !schema.$_terms.keys && // null allows any keys
        !schema.$_terms.patterns && !schema.$_terms.externals) {
          return;
        }
        value = internals.clone(value, prefs);
        const errors = [];
        if (schema.$_terms.renames && !internals.rename(schema, value, state, prefs, errors)) {
          return { value, errors };
        }
        if (!schema.$_terms.keys && // null allows any keys
        !schema.$_terms.patterns && !schema.$_terms.dependencies) {
          return { value, errors };
        }
        const unprocessed = new Set(Object.keys(value));
        if (schema.$_terms.keys) {
          const ancestors = [value, ...state.ancestors];
          for (const child of schema.$_terms.keys) {
            const key = child.key;
            const item = value[key];
            unprocessed.delete(key);
            const localState = state.localize([...state.path, key], ancestors, child);
            const result = child.schema.$_validate(item, localState, prefs);
            if (result.errors) {
              if (prefs.abortEarly) {
                return { value, errors: result.errors };
              }
              if (result.value !== void 0) {
                value[key] = result.value;
              }
              errors.push(...result.errors);
            } else if (child.schema._flags.result === "strip" || result.value === void 0 && item !== void 0) {
              delete value[key];
            } else if (result.value !== void 0) {
              value[key] = result.value;
            }
          }
        }
        if (unprocessed.size || schema._flags._hasPatternMatch) {
          const early = internals.unknown(schema, value, unprocessed, errors, state, prefs);
          if (early) {
            return early;
          }
        }
        if (schema.$_terms.dependencies) {
          for (const dep of schema.$_terms.dependencies) {
            if (dep.key !== null && internals.isPresent(dep.options)(dep.key.resolve(value, state, prefs, null, { shadow: false })) === false) {
              continue;
            }
            const failed = internals.dependencies[dep.rel](schema, dep, value, state, prefs);
            if (failed) {
              const report = schema.$_createError(failed.code, value, failed.context, state, prefs);
              if (prefs.abortEarly) {
                return { value, errors: report };
              }
              errors.push(report);
            }
          }
        }
        return { value, errors };
      },
      rules: {
        and: {
          method(...peers) {
            Common.verifyFlat(peers, "and");
            return internals.dependency(this, "and", null, peers);
          }
        },
        append: {
          method(schema) {
            if (schema === null || schema === void 0 || Object.keys(schema).length === 0) {
              return this;
            }
            return this.keys(schema);
          }
        },
        assert: {
          method(subject, schema, message) {
            if (!Template.isTemplate(subject)) {
              subject = Compile.ref(subject);
            }
            assert(message === void 0 || typeof message === "string", "Message must be a string");
            schema = this.$_compile(schema, { appendPath: true });
            const obj = this.$_addRule({ name: "assert", args: { subject, schema, message } });
            obj.$_mutateRegister(subject);
            obj.$_mutateRegister(schema);
            return obj;
          },
          validate(value, { error, prefs, state }, { subject, schema, message }) {
            const about = subject.resolve(value, state, prefs);
            const path4 = Ref.isRef(subject) ? subject.absolute(state) : [];
            if (schema.$_match(about, state.localize(path4, [value, ...state.ancestors], schema), prefs)) {
              return value;
            }
            return error("object.assert", { subject, message });
          },
          args: ["subject", "schema", "message"],
          multi: true
        },
        instance: {
          method(constructor, name) {
            assert(typeof constructor === "function", "constructor must be a function");
            name = name || constructor.name;
            return this.$_addRule({ name: "instance", args: { constructor, name } });
          },
          validate(value, helpers, { constructor, name }) {
            if (value instanceof constructor) {
              return value;
            }
            return helpers.error("object.instance", { type: name, value });
          },
          args: ["constructor", "name"]
        },
        keys: {
          method(schema) {
            assert(schema === void 0 || typeof schema === "object", "Object schema must be a valid object");
            assert(!Common.isSchema(schema), "Object schema cannot be a joi schema");
            const obj = this.clone();
            if (!schema) {
              obj.$_terms.keys = null;
            } else if (!Object.keys(schema).length) {
              obj.$_terms.keys = new internals.Keys();
            } else {
              obj.$_terms.keys = obj.$_terms.keys ? obj.$_terms.keys.filter((child) => !schema.hasOwnProperty(child.key)) : new internals.Keys();
              for (const key of Object.keys(schema)) {
                Common.tryWithPath(() => obj.$_terms.keys.push({ key, schema: this.$_compile(schema[key]) }), key);
              }
            }
            return obj.$_mutateRebuild();
          }
        },
        length: {
          method(limit) {
            return this.$_addRule({ name: "length", args: { limit }, operator: "=" });
          },
          validate(value, helpers, { limit }, { name, operator, args }) {
            if (Common.compare(Object.keys(value).length, limit, operator)) {
              return value;
            }
            return helpers.error("object." + name, { limit: args.limit, value });
          },
          jsonSchema(rule, res) {
            res.minProperties = rule.args.limit;
            res.maxProperties = rule.args.limit;
            return res;
          },
          args: [
            {
              name: "limit",
              ref: true,
              assert: Common.limit,
              message: "must be a positive integer"
            }
          ]
        },
        max: {
          method(limit) {
            return this.$_addRule({ name: "max", method: "length", args: { limit }, operator: "<=" });
          },
          jsonSchema(rule, res) {
            res.maxProperties = rule.args.limit;
            return res;
          }
        },
        min: {
          method(limit) {
            return this.$_addRule({ name: "min", method: "length", args: { limit }, operator: ">=" });
          },
          jsonSchema(rule, res) {
            res.minProperties = rule.args.limit;
            return res;
          }
        },
        nand: {
          method(...peers) {
            Common.verifyFlat(peers, "nand");
            return internals.dependency(this, "nand", null, peers);
          }
        },
        or: {
          method(...peers) {
            Common.verifyFlat(peers, "or");
            return internals.dependency(this, "or", null, peers);
          }
        },
        oxor: {
          method(...peers) {
            return internals.dependency(this, "oxor", null, peers);
          }
        },
        pattern: {
          method(pattern, schema, options = {}) {
            const isRegExp2 = pattern instanceof RegExp;
            if (!isRegExp2) {
              pattern = this.$_compile(pattern, { appendPath: true });
            }
            assert(schema !== void 0, "Invalid rule");
            Common.assertOptions(options, ["fallthrough", "matches"]);
            if (isRegExp2) {
              assert(!pattern.flags.includes("g") && !pattern.flags.includes("y"), "pattern should not use global or sticky mode");
            }
            schema = this.$_compile(schema, { appendPath: true });
            const obj = this.clone();
            obj.$_terms.patterns = obj.$_terms.patterns || [];
            const config = { [isRegExp2 ? "regex" : "schema"]: pattern, rule: schema };
            if (options.matches) {
              config.matches = this.$_compile(options.matches);
              if (config.matches.type !== "array") {
                config.matches = config.matches.$_root.array().items(config.matches);
              }
              obj.$_mutateRegister(config.matches);
              obj.$_setFlag("_hasPatternMatch", true, { clone: false });
            }
            if (options.fallthrough) {
              config.fallthrough = true;
            }
            obj.$_terms.patterns.push(config);
            obj.$_mutateRegister(schema);
            return obj;
          }
        },
        ref: {
          method() {
            return this.$_addRule("ref");
          },
          validate(value, helpers) {
            if (Ref.isRef(value)) {
              return value;
            }
            return helpers.error("object.refType", { value });
          }
        },
        regex: {
          method() {
            return this.$_addRule("regex");
          },
          validate(value, helpers) {
            if (value instanceof RegExp) {
              return value;
            }
            return helpers.error("object.regex", { value });
          }
        },
        rename: {
          method(from, to, options = {}) {
            assert(typeof from === "string" || from instanceof RegExp, "Rename missing the from argument");
            assert(typeof to === "string" || to instanceof Template, "Invalid rename to argument");
            assert(to !== from, "Cannot rename key to same name:", from);
            Common.assertOptions(options, ["alias", "ignoreUndefined", "override", "multiple"]);
            const obj = this.clone();
            obj.$_terms.renames = obj.$_terms.renames || [];
            for (const rename of obj.$_terms.renames) {
              assert(rename.from !== from, "Cannot rename the same key multiple times");
            }
            if (to instanceof Template) {
              obj.$_mutateRegister(to);
            }
            obj.$_terms.renames.push({
              from,
              to,
              options: applyToDefaults(internals.renameDefaults, options)
            });
            return obj;
          }
        },
        schema: {
          method(type = "any") {
            return this.$_addRule({ name: "schema", args: { type } });
          },
          validate(value, helpers, { type }) {
            if (Common.isSchema(value) && (type === "any" || value.type === type)) {
              return value;
            }
            return helpers.error("object.schema", { type });
          }
        },
        unknown: {
          method(allow) {
            return this.$_setFlag("unknown", allow !== false);
          }
        },
        with: {
          method(key, peers, options = {}) {
            return internals.dependency(this, "with", key, peers, options);
          }
        },
        without: {
          method(key, peers, options = {}) {
            return internals.dependency(this, "without", key, peers, options);
          }
        },
        xor: {
          method(...peers) {
            Common.verifyFlat(peers, "xor");
            return internals.dependency(this, "xor", null, peers);
          }
        }
      },
      overrides: {
        default(value, options) {
          if (value === void 0) {
            value = Common.symbols.deepDefault;
          }
          return this.$_parent("default", value, options);
        },
        isAsync() {
          if (this.$_terms.externals?.length) {
            return true;
          }
          if (this.$_terms.keys?.length) {
            for (const key of this.$_terms.keys) {
              if (key.schema.isAsync()) {
                return true;
              }
            }
          }
          if (this.$_terms.patterns?.length) {
            for (const pattern of this.$_terms.patterns) {
              if (pattern.rule.isAsync()) {
                return true;
              }
            }
          }
          return false;
        }
      },
      rebuild(schema) {
        if (schema.$_terms.keys) {
          schema.$_terms.keys = new internals.Keys(...internals.sortKeys(schema.$_terms.keys));
        }
      },
      manifest: {
        build(obj, desc) {
          if (desc.keys) {
            obj = obj.keys(desc.keys);
          }
          if (desc.dependencies) {
            for (const { rel, key = null, peers, options } of desc.dependencies) {
              obj = internals.dependency(obj, rel, key, peers, options);
            }
          }
          if (desc.patterns) {
            for (const { regex, schema, rule, fallthrough, matches } of desc.patterns) {
              obj = obj.pattern(regex || schema, rule, { fallthrough, matches });
            }
          }
          if (desc.renames) {
            for (const { from, to, options } of desc.renames) {
              obj = obj.rename(from, to, options);
            }
          }
          return obj;
        }
      },
      messages: {
        "object.and": "{{#label}} contains {{#presentWithLabels}} without its required peers {{#missingWithLabels}}",
        "object.assert": '{{#label}} is invalid because {if(#subject.key, `"` + #subject.key + `" failed to ` + (#message || "pass the assertion test"), #message || "the assertion failed")}',
        "object.base": "{{#label}} must be of type {{#type}}",
        "object.instance": "{{#label}} must be an instance of {{:#type}}",
        "object.length": '{{#label}} must have {{#limit}} key{if(#limit == 1, "", "s")}',
        "object.max": '{{#label}} must have less than or equal to {{#limit}} key{if(#limit == 1, "", "s")}',
        "object.min": '{{#label}} must have at least {{#limit}} key{if(#limit == 1, "", "s")}',
        "object.missing": "{{#label}} must contain at least one of {{#peersWithLabels}}",
        "object.nand": "{{:#mainWithLabel}} must not exist simultaneously with {{#peersWithLabels}}",
        "object.oxor": "{{#label}} contains a conflict between optional exclusive peers {{#peersWithLabels}}",
        "object.pattern.match": "{{#label}} keys failed to match pattern requirements",
        "object.refType": "{{#label}} must be a Joi reference",
        "object.regex": "{{#label}} must be a RegExp object",
        "object.rename.multiple": "{{#label}} cannot rename {{:#from}} because multiple renames are disabled and another key was already renamed to {{:#to}}",
        "object.rename.override": "{{#label}} cannot rename {{:#from}} because override is disabled and target {{:#to}} exists",
        "object.rename.proto": "{{#label}} cannot rename {{:#from}} because target {{:#to}} is a reserved key",
        "object.schema": "{{#label}} must be a Joi schema of {{#type}} type",
        "object.unknown": "{{#label}} is not allowed",
        "object.with": "{{:#mainWithLabel}} missing required peer {{:#peerWithLabel}}",
        "object.without": "{{:#mainWithLabel}} conflict with forbidden peer {{:#peerWithLabel}}",
        "object.xor": "{{#label}} contains a conflict between exclusive peers {{#peersWithLabels}}"
      }
    });
    internals.clone = function(value, prefs) {
      if (typeof value === "object") {
        if (prefs.nonEnumerables) {
          return Clone(value, { shallow: true });
        }
        const proto = Object.getPrototypeOf(value);
        const clone2 = Object.create(proto);
        Object.assign(clone2, value);
        if (Object.getPrototypeOf(clone2) !== proto) {
          Object.setPrototypeOf(clone2, proto);
        }
        return clone2;
      }
      const clone = function(...args) {
        return value.apply(this, args);
      };
      clone.prototype = Clone(value.prototype);
      Object.defineProperty(clone, "name", { value: value.name, writable: false });
      Object.defineProperty(clone, "length", { value: value.length, writable: false });
      Object.assign(clone, value);
      return clone;
    };
    internals.dependency = function(schema, rel, key, peers, options) {
      assert(key === null || typeof key === "string", rel, "key must be a strings");
      if (!options) {
        options = peers.length > 1 && typeof peers[peers.length - 1] === "object" ? peers.pop() : {};
      }
      Common.assertOptions(options, ["separator", "isPresent"]);
      peers = [].concat(peers);
      const separator = Common.default(options.separator, ".");
      const paths = [];
      for (const peer of peers) {
        assert(typeof peer === "string", rel, "peers must be strings");
        paths.push(Compile.ref(peer, { separator, ancestor: 0, prefix: false }));
      }
      if (key !== null) {
        key = Compile.ref(key, { separator, ancestor: 0, prefix: false });
      }
      const obj = schema.clone();
      obj.$_terms.dependencies = obj.$_terms.dependencies || [];
      obj.$_terms.dependencies.push(new internals.Dependency(rel, key, paths, peers, options));
      return obj;
    };
    internals.dependencies = {
      and(schema, dep, value, state, prefs) {
        const missing = [];
        const present = [];
        const count = dep.peers.length;
        const isPresent = internals.isPresent(dep.options);
        for (const peer of dep.peers) {
          if (isPresent(peer.resolve(value, state, prefs, null, { shadow: false })) === false) {
            missing.push(peer.key);
          } else {
            present.push(peer.key);
          }
        }
        if (missing.length !== count && present.length !== count) {
          return {
            code: "object.and",
            context: {
              present,
              presentWithLabels: internals.keysToLabels(schema, present),
              missing,
              missingWithLabels: internals.keysToLabels(schema, missing)
            }
          };
        }
      },
      nand(schema, dep, value, state, prefs) {
        const present = [];
        const isPresent = internals.isPresent(dep.options);
        for (const peer of dep.peers) {
          if (isPresent(peer.resolve(value, state, prefs, null, { shadow: false }))) {
            present.push(peer.key);
          }
        }
        if (present.length !== dep.peers.length) {
          return;
        }
        const main2 = dep.paths[0];
        const values = dep.paths.slice(1);
        return {
          code: "object.nand",
          context: {
            main: main2,
            mainWithLabel: internals.keysToLabels(schema, main2),
            peers: values,
            peersWithLabels: internals.keysToLabels(schema, values)
          }
        };
      },
      or(schema, dep, value, state, prefs) {
        const isPresent = internals.isPresent(dep.options);
        for (const peer of dep.peers) {
          if (isPresent(peer.resolve(value, state, prefs, null, { shadow: false }))) {
            return;
          }
        }
        return {
          code: "object.missing",
          context: {
            peers: dep.paths,
            peersWithLabels: internals.keysToLabels(schema, dep.paths)
          }
        };
      },
      oxor(schema, dep, value, state, prefs) {
        const present = [];
        const isPresent = internals.isPresent(dep.options);
        for (const peer of dep.peers) {
          if (isPresent(peer.resolve(value, state, prefs, null, { shadow: false }))) {
            present.push(peer.key);
          }
        }
        if (!present.length || present.length === 1) {
          return;
        }
        const context = { peers: dep.paths, peersWithLabels: internals.keysToLabels(schema, dep.paths) };
        context.present = present;
        context.presentWithLabels = internals.keysToLabels(schema, present);
        return { code: "object.oxor", context };
      },
      with(schema, dep, value, state, prefs) {
        const isPresent = internals.isPresent(dep.options);
        for (const peer of dep.peers) {
          if (isPresent(peer.resolve(value, state, prefs, null, { shadow: false })) === false) {
            return {
              code: "object.with",
              context: {
                main: dep.key.key,
                mainWithLabel: internals.keysToLabels(schema, dep.key.key),
                peer: peer.key,
                peerWithLabel: internals.keysToLabels(schema, peer.key)
              }
            };
          }
        }
      },
      without(schema, dep, value, state, prefs) {
        const isPresent = internals.isPresent(dep.options);
        for (const peer of dep.peers) {
          if (isPresent(peer.resolve(value, state, prefs, null, { shadow: false }))) {
            return {
              code: "object.without",
              context: {
                main: dep.key.key,
                mainWithLabel: internals.keysToLabels(schema, dep.key.key),
                peer: peer.key,
                peerWithLabel: internals.keysToLabels(schema, peer.key)
              }
            };
          }
        }
      },
      xor(schema, dep, value, state, prefs) {
        const present = [];
        const isPresent = internals.isPresent(dep.options);
        for (const peer of dep.peers) {
          if (isPresent(peer.resolve(value, state, prefs, null, { shadow: false }))) {
            present.push(peer.key);
          }
        }
        if (present.length === 1) {
          return;
        }
        const context = { peers: dep.paths, peersWithLabels: internals.keysToLabels(schema, dep.paths) };
        if (present.length === 0) {
          return { code: "object.missing", context };
        }
        context.present = present;
        context.presentWithLabels = internals.keysToLabels(schema, present);
        return { code: "object.xor", context };
      }
    };
    internals.sortKeys = function(keys, manual = true) {
      const topo = new Topo.Sorter();
      for (const child of keys) {
        Common.tryWithPath(() => topo.add(child, { after: child.schema.$_rootReferences(), group: child.key, manual }), child.key);
      }
      try {
        return topo.sort();
      } catch {
        return internals.sortKeys(keys, false);
      }
    };
    internals.keysToLabels = function(schema, keys) {
      if (Array.isArray(keys)) {
        return keys.map((key) => schema.$_mapLabels(key));
      }
      return schema.$_mapLabels(keys);
    };
    internals.isPresent = function(options) {
      return typeof options.isPresent === "function" ? options.isPresent : (resolved) => resolved !== void 0;
    };
    internals.rename = function(schema, value, state, prefs, errors) {
      const renamed = {};
      for (const rename of schema.$_terms.renames) {
        const matches = [];
        const pattern = typeof rename.from !== "string";
        if (!pattern) {
          if (Object.prototype.hasOwnProperty.call(value, rename.from) && (value[rename.from] !== void 0 || !rename.options.ignoreUndefined)) {
            matches.push(rename);
          }
        } else {
          for (const from of Object.keys(value)) {
            if (value[from] === void 0 && rename.options.ignoreUndefined) {
              continue;
            }
            if (from === rename.to) {
              continue;
            }
            const match = rename.from.exec(from);
            if (!match) {
              continue;
            }
            matches.push({ from, to: rename.to, match });
          }
        }
        for (const match of matches) {
          const from = match.from;
          let to = match.to;
          if (to instanceof Template) {
            to = to.render(value, state, prefs, match.match);
          }
          if (from === to) {
            continue;
          }
          if (!rename.options.multiple && renamed[to]) {
            errors.push(schema.$_createError("object.rename.multiple", value, { from, to, pattern }, state, prefs));
            if (prefs.abortEarly) {
              return false;
            }
          }
          if (Object.prototype.hasOwnProperty.call(value, to) && !rename.options.override && !renamed[to]) {
            errors.push(schema.$_createError("object.rename.override", value, { from, to, pattern }, state, prefs));
            if (prefs.abortEarly) {
              return false;
            }
          }
          if (to === "__proto__") {
            errors.push(schema.$_createError("object.rename.proto", value, { from, to, pattern }, state, prefs));
            if (prefs.abortEarly) {
              return false;
            }
            continue;
          }
          if (value[from] === void 0) {
            delete value[to];
          } else {
            value[to] = value[from];
          }
          renamed[to] = true;
          if (!rename.options.alias) {
            delete value[from];
          }
        }
      }
      return true;
    };
    internals.unknown = function(schema, value, unprocessed, errors, state, prefs) {
      if (schema.$_terms.patterns) {
        let hasMatches = false;
        const matches = schema.$_terms.patterns.map((pattern) => {
          if (pattern.matches) {
            hasMatches = true;
            return [];
          }
        });
        const ancestors = [value, ...state.ancestors];
        for (const key of unprocessed) {
          const item = value[key];
          const path4 = [...state.path, key];
          for (let i = 0; i < schema.$_terms.patterns.length; ++i) {
            const pattern = schema.$_terms.patterns[i];
            if (pattern.regex) {
              const match = pattern.regex.test(key);
              state.mainstay.tracer.debug(state, "rule", `pattern.${i}`, match ? "pass" : "error");
              if (!match) {
                continue;
              }
            } else {
              if (!pattern.schema.$_match(key, state.nest(pattern.schema, `pattern.${i}`), prefs)) {
                continue;
              }
            }
            unprocessed.delete(key);
            const localState = state.localize(path4, ancestors, { schema: pattern.rule, key });
            const result = pattern.rule.$_validate(item, localState, prefs);
            if (result.errors) {
              if (prefs.abortEarly) {
                return { value, errors: result.errors };
              }
              errors.push(...result.errors);
            }
            if (pattern.matches) {
              matches[i].push(key);
            }
            value[key] = result.value;
            if (!pattern.fallthrough) {
              break;
            }
          }
        }
        if (hasMatches) {
          for (let i = 0; i < matches.length; ++i) {
            const match = matches[i];
            if (!match) {
              continue;
            }
            const stpm = schema.$_terms.patterns[i].matches;
            const localState = state.localize(state.path, ancestors, stpm);
            const result = stpm.$_validate(match, localState, prefs);
            if (result.errors) {
              const details = Errors.details(result.errors, { override: false });
              details.matches = match;
              const report = schema.$_createError("object.pattern.match", value, details, state, prefs);
              if (prefs.abortEarly) {
                return { value, errors: report };
              }
              errors.push(report);
            }
          }
        }
      }
      if (!unprocessed.size || !schema.$_terms.keys && !schema.$_terms.patterns) {
        return;
      }
      if (prefs.stripUnknown && typeof schema._flags.unknown === "undefined" || prefs.skipFunctions) {
        const stripUnknown = prefs.stripUnknown ? prefs.stripUnknown === true ? true : !!prefs.stripUnknown.objects : false;
        for (const key of unprocessed) {
          if (stripUnknown) {
            delete value[key];
            unprocessed.delete(key);
          } else if (typeof value[key] === "function") {
            unprocessed.delete(key);
          }
        }
      }
      const forbidUnknown = !Common.default(schema._flags.unknown, prefs.allowUnknown);
      if (forbidUnknown) {
        for (const unprocessedKey of unprocessed) {
          const localState = state.localize([...state.path, unprocessedKey], []);
          const report = schema.$_createError("object.unknown", value[unprocessedKey], { child: unprocessedKey }, localState, prefs, { flags: false });
          if (prefs.abortEarly) {
            return { value, errors: report };
          }
          errors.push(report);
        }
      }
    };
    internals.Dependency = class {
      constructor(rel, key, peers, paths, options) {
        this.rel = rel;
        this.key = key;
        this.peers = peers;
        this.paths = paths;
        this.options = options;
      }
      describe() {
        const desc = {
          rel: this.rel,
          peers: this.paths
        };
        if (this.key !== null) {
          desc.key = this.key.key;
        }
        if (this.peers[0].separator !== ".") {
          desc.options = { ...desc.options, separator: this.peers[0].separator };
        }
        if (this.options.isPresent) {
          desc.options = { ...desc.options, isPresent: this.options.isPresent };
        }
        return desc;
      }
    };
    internals.Keys = class extends Array {
      concat(source) {
        const result = this.slice();
        const keys = /* @__PURE__ */ new Map();
        for (let i = 0; i < result.length; ++i) {
          keys.set(result[i].key, i);
        }
        for (const item of source) {
          const key = item.key;
          const pos = keys.get(key);
          if (pos !== void 0) {
            result[pos] = { key, schema: result[pos].schema.concat(item.schema) };
          } else {
            result.push(item);
          }
        }
        return result;
      }
    };
  }
});

// node_modules/joi/lib/types/function.js
var require_function = __commonJS({
  "node_modules/joi/lib/types/function.js"(exports2, module2) {
    "use strict";
    var { assert } = require_lib();
    var Keys = require_keys();
    module2.exports = Keys.extend({
      type: "function",
      properties: {
        typeof: "function"
      },
      rules: {
        arity: {
          method(n) {
            assert(Number.isSafeInteger(n) && n >= 0, "n must be a positive integer");
            return this.$_addRule({ name: "arity", args: { n } });
          },
          validate(value, helpers, { n }) {
            if (value.length === n) {
              return value;
            }
            return helpers.error("function.arity", { n });
          }
        },
        class: {
          method() {
            return this.$_addRule("class");
          },
          validate(value, helpers) {
            if (/^\s*class\s/.test(value.toString())) {
              return value;
            }
            return helpers.error("function.class", { value });
          }
        },
        minArity: {
          method(n) {
            assert(Number.isSafeInteger(n) && n > 0, "n must be a strict positive integer");
            return this.$_addRule({ name: "minArity", args: { n } });
          },
          validate(value, helpers, { n }) {
            if (value.length >= n) {
              return value;
            }
            return helpers.error("function.minArity", { n });
          }
        },
        maxArity: {
          method(n) {
            assert(Number.isSafeInteger(n) && n >= 0, "n must be a positive integer");
            return this.$_addRule({ name: "maxArity", args: { n } });
          },
          validate(value, helpers, { n }) {
            if (value.length <= n) {
              return value;
            }
            return helpers.error("function.maxArity", { n });
          }
        }
      },
      messages: {
        "function.arity": "{{#label}} must have an arity of {{#n}}",
        "function.class": "{{#label}} must be a class",
        "function.maxArity": "{{#label}} must have an arity lesser or equal to {{#n}}",
        "function.minArity": "{{#label}} must have an arity greater or equal to {{#n}}"
      }
    });
  }
});

// node_modules/joi/lib/types/link.js
var require_link = __commonJS({
  "node_modules/joi/lib/types/link.js"(exports2, module2) {
    "use strict";
    var { assert } = require_lib();
    var Any = require_any();
    var Common = require_common2();
    var Compile = require_compile();
    var Errors = require_errors();
    var internals = {};
    module2.exports = Any.extend({
      type: "link",
      properties: {
        schemaChain: true
      },
      terms: {
        link: { init: null, manifest: "single", register: false }
      },
      args(schema, ref) {
        return schema.ref(ref);
      },
      jsonSchema(schema, res, mode, options) {
        if (!schema.$_terms.link) {
          return res;
        }
        const { ref } = schema.$_terms.link[0];
        if (ref.ancestor === "root" || ref.ancestor > 0) {
          res.$ref = `#/${ref.path.map((p) => `properties/${p}`).join("/")}`;
          return res;
        }
        if (ref.path.length === 1) {
          res.$ref = `#/$defs/${ref.path[0]}`;
        } else {
          res.$ref = `#/${ref.path.slice(1).map((p) => `properties/${p}`).join("/")}`;
        }
        return res;
      },
      validate(value, { schema, state, prefs, error }) {
        assert(schema.$_terms.link, "Uninitialized link schema");
        const limit = schema._flags.maxRecursion;
        if (limit !== void 0 && state.schemas.filter((entry) => entry.schema === schema).length > limit) {
          return { value, errors: error("link.maxRecursion", { limit }) };
        }
        const linked = internals.generate(schema, value, state, prefs);
        const ref = schema.$_terms.link[0].ref;
        try {
          return linked.$_validate(value, state.nest(linked, `link:${ref.display}:${linked.type}`), prefs);
        } catch (err) {
          if (!(err instanceof RangeError)) {
            throw err;
          }
          return { value, errors: error("link.depth") };
        }
      },
      generate(schema, value, state, prefs) {
        return internals.generate(schema, value, state, prefs);
      },
      rules: {
        ref: {
          method(ref) {
            assert(!this.$_terms.link, "Cannot reinitialize schema");
            ref = Compile.ref(ref);
            assert(ref.type === "value" || ref.type === "local", "Invalid reference type:", ref.type);
            assert(ref.type === "local" || ref.ancestor === "root" || ref.ancestor > 0, "Link cannot reference itself");
            const obj = this.clone();
            obj.$_terms.link = [{ ref }];
            return obj;
          }
        },
        relative: {
          method(enabled = true) {
            return this.$_setFlag("relative", enabled);
          }
        },
        maxRecursion: {
          method(limit) {
            assert(Number.isSafeInteger(limit) && limit >= 1, "limit must be a positive integer");
            return this.$_setFlag("maxRecursion", limit);
          }
        }
      },
      messages: {
        "link.depth": "{{#label}} exceeds maximum recursion depth supported by the runtime",
        "link.maxRecursion": "{{#label}} exceeds maximum recursion depth of {{#limit}}"
      },
      overrides: {
        concat(source) {
          assert(this.$_terms.link, "Uninitialized link schema");
          assert(Common.isSchema(source), "Invalid schema object");
          assert(source.type !== "link", "Cannot merge type link with another link");
          const obj = this.clone();
          if (!obj.$_terms.whens) {
            obj.$_terms.whens = [];
          }
          obj.$_terms.whens.push({ concat: source });
          return obj.$_mutateRebuild();
        }
      },
      manifest: {
        build(obj, desc) {
          assert(desc.link, "Invalid link description missing link");
          return obj.ref(desc.link);
        }
      }
    });
    internals.generate = function(schema, value, state, prefs) {
      let linked = state.mainstay.links.get(schema);
      if (linked) {
        return linked._generate(value, state, prefs).schema;
      }
      const ref = schema.$_terms.link[0].ref;
      const { perspective, path: path4 } = internals.perspective(ref, state);
      internals.assert(perspective, "which is outside of schema boundaries", ref, schema, state, prefs);
      try {
        linked = path4.length ? perspective.$_reach(path4) : perspective;
      } catch {
        internals.assert(false, "to non-existing schema", ref, schema, state, prefs);
      }
      internals.assert(linked.type !== "link", "which is another link", ref, schema, state, prefs);
      if (!schema._flags.relative) {
        state.mainstay.links.set(schema, linked);
      }
      return linked._generate(value, state, prefs).schema;
    };
    internals.perspective = function(ref, state) {
      if (ref.type === "local") {
        for (const { schema, key } of state.schemas) {
          const id = schema._flags.id || key;
          if (id === ref.path[0]) {
            return { perspective: schema, path: ref.path.slice(1) };
          }
          if (schema.$_terms.shared) {
            for (const shared of schema.$_terms.shared) {
              if (shared._flags.id === ref.path[0]) {
                return { perspective: shared, path: ref.path.slice(1) };
              }
            }
          }
        }
        return { perspective: null, path: null };
      }
      if (ref.ancestor === "root") {
        return { perspective: state.schemas[state.schemas.length - 1].schema, path: ref.path };
      }
      return { perspective: state.schemas[ref.ancestor] && state.schemas[ref.ancestor].schema, path: ref.path };
    };
    internals.assert = function(condition, message, ref, schema, state, prefs) {
      if (condition) {
        return;
      }
      assert(false, `"${Errors.label(schema._flags, state, prefs)}" contains link reference "${ref.display}" ${message}`);
    };
  }
});

// node_modules/joi/lib/types/number.js
var require_number = __commonJS({
  "node_modules/joi/lib/types/number.js"(exports2, module2) {
    "use strict";
    var { assert } = require_lib();
    var Any = require_any();
    var Common = require_common2();
    var internals = {
      numberRx: /^\s*[+-]?(?:(?:\d+(?:\.\d*)?)|(?:\.\d+))(?:e([+-]?\d+))?\s*$/i,
      precisionRx: /(?:\.(\d+))?(?:[eE]([+-]?\d+))?$/,
      exponentialPartRegex: /[eE][+-]?\d+$/,
      leadingSignAndZerosRegex: /^[+-]?(0*)?/,
      dotRegex: /\./,
      trailingZerosRegex: /0+$/,
      decimalPlaces(value) {
        const str = value.toString();
        const dindex = str.indexOf(".");
        const eindex = str.indexOf("e");
        return (dindex < 0 ? 0 : (eindex < 0 ? str.length : eindex) - dindex - 1) + (eindex < 0 ? 0 : Math.max(0, -parseInt(str.slice(eindex + 1))));
      }
    };
    module2.exports = Any.extend({
      type: "number",
      flags: {
        unsafe: { default: false }
      },
      coerce: {
        from: "string",
        method(value, { schema, error }) {
          const matches = value.match(internals.numberRx);
          if (!matches) {
            return;
          }
          value = value.trim();
          const result = { value: parseFloat(value) };
          if (result.value === 0) {
            result.value = 0;
          }
          if (!schema._flags.unsafe) {
            if (value.match(/e/i)) {
              if (internals.extractSignificantDigits(value) !== internals.extractSignificantDigits(String(result.value))) {
                result.errors = error("number.unsafe");
                return result;
              }
            } else {
              const string = result.value.toString();
              if (string.match(/e/i)) {
                return result;
              }
              if (string !== internals.normalizeDecimal(value)) {
                result.errors = error("number.unsafe");
                return result;
              }
            }
          }
          return result;
        }
      },
      validate(value, { schema, error, prefs }) {
        if (value === Infinity || value === -Infinity) {
          return { value, errors: error("number.infinity") };
        }
        if (!Common.isNumber(value)) {
          return { value, errors: error("number.base") };
        }
        const result = { value };
        if (prefs.convert) {
          const rule = schema.$_getRule("precision");
          if (rule) {
            const precision = Math.pow(10, rule.args.limit);
            result.value = Math.round(result.value * precision) / precision;
          }
        }
        if (result.value === 0) {
          result.value = 0;
        }
        if (!schema._flags.unsafe && (value > Number.MAX_SAFE_INTEGER || value < Number.MIN_SAFE_INTEGER)) {
          result.errors = error("number.unsafe");
        }
        return result;
      },
      rules: {
        compare: {
          method: false,
          validate(value, helpers, { limit }, { name, operator, args }) {
            if (Common.compare(value, limit, operator)) {
              return value;
            }
            return helpers.error("number." + name, { limit: args.limit, value });
          },
          args: [
            {
              name: "limit",
              ref: true,
              assert: Common.isNumber,
              message: "must be a number"
            }
          ]
        },
        greater: {
          method(limit) {
            return this.$_addRule({ name: "greater", method: "compare", args: { limit }, operator: ">" });
          },
          jsonSchema(rule, res) {
            res.exclusiveMinimum = rule.args.limit;
            return res;
          }
        },
        integer: {
          method() {
            return this.$_addRule("integer");
          },
          validate(value, helpers) {
            if (Math.trunc(value) - value === 0) {
              return value;
            }
            return helpers.error("number.integer");
          },
          jsonSchema(rule, res) {
            res.type = "integer";
            return res;
          }
        },
        less: {
          method(limit) {
            return this.$_addRule({ name: "less", method: "compare", args: { limit }, operator: "<" });
          },
          jsonSchema(rule, res) {
            res.exclusiveMaximum = rule.args.limit;
            return res;
          }
        },
        max: {
          method(limit) {
            return this.$_addRule({ name: "max", method: "compare", args: { limit }, operator: "<=" });
          },
          jsonSchema(rule, res) {
            res.maximum = rule.args.limit;
            return res;
          }
        },
        min: {
          method(limit) {
            return this.$_addRule({ name: "min", method: "compare", args: { limit }, operator: ">=" });
          },
          jsonSchema(rule, res) {
            res.minimum = rule.args.limit;
            return res;
          }
        },
        multiple: {
          method(base) {
            const baseDecimalPlace = typeof base === "number" ? internals.decimalPlaces(base) : null;
            const pfactor = Math.pow(10, baseDecimalPlace);
            return this.$_addRule({
              name: "multiple",
              args: {
                base,
                baseDecimalPlace,
                pfactor
              }
            });
          },
          validate(value, helpers, { base, baseDecimalPlace, pfactor }, options) {
            const valueDecimalPlace = internals.decimalPlaces(value);
            if (valueDecimalPlace > baseDecimalPlace) {
              return helpers.error("number.multiple", { multiple: options.args.base, value });
            }
            return Math.round(pfactor * value) % Math.round(pfactor * base) === 0 ? value : helpers.error("number.multiple", { multiple: options.args.base, value });
          },
          jsonSchema(rule, res) {
            res.multipleOf = rule.args.base;
            return res;
          },
          args: [
            {
              name: "base",
              ref: true,
              assert: (value) => typeof value === "number" && isFinite(value) && value > 0,
              message: "must be a positive number"
            },
            "baseDecimalPlace",
            "pfactor"
          ],
          multi: true
        },
        negative: {
          method() {
            return this.sign("negative");
          }
        },
        port: {
          method() {
            return this.$_addRule("port");
          },
          validate(value, helpers) {
            if (Number.isSafeInteger(value) && value >= 0 && value <= 65535) {
              return value;
            }
            return helpers.error("number.port");
          },
          jsonSchema(rule, res) {
            res.type = "integer";
            res.minimum = 0;
            res.maximum = 65535;
            return res;
          }
        },
        positive: {
          method() {
            return this.sign("positive");
          }
        },
        precision: {
          method(limit) {
            assert(Number.isSafeInteger(limit), "limit must be an integer");
            return this.$_addRule({ name: "precision", args: { limit } });
          },
          validate(value, helpers, { limit }) {
            const places = value.toString().match(internals.precisionRx);
            const decimals = Math.max((places[1] ? places[1].length : 0) - (places[2] ? parseInt(places[2], 10) : 0), 0);
            if (decimals <= limit) {
              return value;
            }
            return helpers.error("number.precision", { limit, value });
          },
          convert: true
        },
        sign: {
          method(sign) {
            assert(["negative", "positive"].includes(sign), "Invalid sign", sign);
            return this.$_addRule({ name: "sign", args: { sign } });
          },
          validate(value, helpers, { sign }) {
            if (sign === "negative" && value < 0 || sign === "positive" && value > 0) {
              return value;
            }
            return helpers.error(`number.${sign}`);
          },
          jsonSchema(rule, res) {
            if (rule.args.sign === "positive") {
              res.exclusiveMinimum = 0;
            } else {
              res.exclusiveMaximum = 0;
            }
            return res;
          }
        },
        unsafe: {
          method(enabled = true) {
            assert(typeof enabled === "boolean", "enabled must be a boolean");
            return this.$_setFlag("unsafe", enabled);
          }
        }
      },
      cast: {
        string: {
          from: (value) => typeof value === "number",
          to(value, helpers) {
            return value.toString();
          }
        }
      },
      messages: {
        "number.base": "{{#label}} must be a number",
        "number.greater": "{{#label}} must be greater than {{#limit}}",
        "number.infinity": "{{#label}} cannot be infinity",
        "number.integer": "{{#label}} must be an integer",
        "number.less": "{{#label}} must be less than {{#limit}}",
        "number.max": "{{#label}} must be less than or equal to {{#limit}}",
        "number.min": "{{#label}} must be greater than or equal to {{#limit}}",
        "number.multiple": "{{#label}} must be a multiple of {{#multiple}}",
        "number.negative": "{{#label}} must be a negative number",
        "number.port": "{{#label}} must be a valid port",
        "number.positive": "{{#label}} must be a positive number",
        "number.precision": "{{#label}} must have no more than {{#limit}} decimal places",
        "number.unsafe": "{{#label}} must be a safe number"
      }
    });
    internals.extractSignificantDigits = function(value) {
      return value.replace(internals.exponentialPartRegex, "").replace(internals.dotRegex, "").replace(internals.trailingZerosRegex, "").replace(internals.leadingSignAndZerosRegex, "");
    };
    internals.normalizeDecimal = function(str) {
      str = str.replace(/^\+/, "").replace(/\.0*$/, "").replace(/^(-?)\.([^\.]*)$/, "$10.$2").replace(/^(-?)0+([0-9])/, "$1$2");
      if (str.includes(".") && str.endsWith("0")) {
        str = str.replace(/0+$/, "");
      }
      if (str === "-0") {
        return "0";
      }
      return str;
    };
  }
});

// node_modules/joi/lib/types/object.js
var require_object = __commonJS({
  "node_modules/joi/lib/types/object.js"(exports2, module2) {
    "use strict";
    var Keys = require_keys();
    module2.exports = Keys.extend({
      type: "object",
      cast: {
        map: {
          from: (value) => value && typeof value === "object",
          to(value, helpers) {
            return new Map(Object.entries(value));
          }
        }
      }
    });
  }
});

// node_modules/@hapi/address/dist/errors.js
var require_errors2 = __commonJS({
  "node_modules/@hapi/address/dist/errors.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.errorCode = exports2.errorCodes = void 0;
    exports2.errorCodes = {
      EMPTY_STRING: "Address must be a non-empty string",
      FORBIDDEN_UNICODE: "Address contains forbidden Unicode characters",
      MULTIPLE_AT_CHAR: "Address cannot contain more than one @ character",
      MISSING_AT_CHAR: "Address must contain one @ character",
      EMPTY_LOCAL: "Address local part cannot be empty",
      ADDRESS_TOO_LONG: "Address too long",
      LOCAL_TOO_LONG: "Address local part too long",
      EMPTY_LOCAL_SEGMENT: "Address local part contains empty dot-separated segment",
      INVALID_LOCAL_CHARS: "Address local part contains invalid character",
      DOMAIN_NON_EMPTY_STRING: "Domain must be a non-empty string",
      DOMAIN_TOO_LONG: "Domain too long",
      DOMAIN_INVALID_UNICODE_CHARS: "Domain contains forbidden Unicode characters",
      DOMAIN_INVALID_CHARS: "Domain contains invalid character",
      DOMAIN_INVALID_TLDS_CHARS: "Domain contains invalid tld character",
      DOMAIN_SEGMENTS_COUNT: "Domain lacks the minimum required number of segments",
      DOMAIN_SEGMENTS_COUNT_MAX: "Domain contains too many segments",
      DOMAIN_FORBIDDEN_TLDS: "Domain uses forbidden TLD",
      DOMAIN_EMPTY_SEGMENT: "Domain contains empty dot-separated segment",
      DOMAIN_LONG_SEGMENT: "Domain contains dot-separated segment that is too long"
    };
    function errorCode(code) {
      return { code, error: exports2.errorCodes[code] };
    }
    exports2.errorCode = errorCode;
  }
});

// node_modules/@hapi/address/dist/domain.js
var require_domain = __commonJS({
  "node_modules/@hapi/address/dist/domain.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.validateDomainOptions = exports2.isDomainValid = exports2.analyzeDomain = void 0;
    var Url = require("url");
    var errors_1 = require_errors2();
    var MIN_DOMAIN_SEGMENTS = 2;
    var NON_ASCII_RX = /[^\x00-\x7f]/;
    var DOMAIN_CONTROL_RX = /[\x00-\x20@\:\/\\#!\$&\'\(\)\*\+,;=\?]/;
    var TLD_SEGMENT_RX = /^[a-zA-Z](?:[a-zA-Z0-9\-]*[a-zA-Z0-9])?$/;
    var DOMAIN_SEGMENT_RX = /^[a-zA-Z0-9](?:[a-zA-Z0-9\-]*[a-zA-Z0-9])?$/;
    var DOMAIN_UNDERSCORE_SEGMENT_RX = /^[a-zA-Z0-9_](?:[a-zA-Z0-9\-]*[a-zA-Z0-9])?$/;
    var URL_IMPL = Url.URL || URL;
    function isTldsAllow(tlds) {
      return !!tlds.allow;
    }
    function analyzeDomain(domain, options = {}) {
      if (!domain) {
        return (0, errors_1.errorCode)("DOMAIN_NON_EMPTY_STRING");
      }
      if (typeof domain !== "string") {
        throw new Error("Invalid input: domain must be a string");
      }
      if (domain.length > 256) {
        return (0, errors_1.errorCode)("DOMAIN_TOO_LONG");
      }
      const ascii = !NON_ASCII_RX.test(domain);
      if (!ascii) {
        if (options.allowUnicode === false) {
          return (0, errors_1.errorCode)("DOMAIN_INVALID_UNICODE_CHARS");
        }
        domain = domain.normalize("NFC");
      }
      if (DOMAIN_CONTROL_RX.test(domain)) {
        return (0, errors_1.errorCode)("DOMAIN_INVALID_CHARS");
      }
      domain = punycode(domain);
      if (options.allowFullyQualified && domain[domain.length - 1] === ".") {
        domain = domain.slice(0, -1);
      }
      const minDomainSegments = options.minDomainSegments || MIN_DOMAIN_SEGMENTS;
      const segments = domain.split(".");
      if (segments.length < minDomainSegments) {
        return (0, errors_1.errorCode)("DOMAIN_SEGMENTS_COUNT");
      }
      if (options.maxDomainSegments) {
        if (segments.length > options.maxDomainSegments) {
          return (0, errors_1.errorCode)("DOMAIN_SEGMENTS_COUNT_MAX");
        }
      }
      const tlds = options.tlds;
      if (tlds) {
        const tld = segments[segments.length - 1].toLowerCase();
        if (isTldsAllow(tlds)) {
          if (!tlds.allow.has(tld)) {
            return (0, errors_1.errorCode)("DOMAIN_FORBIDDEN_TLDS");
          }
        } else if (tlds.deny.has(tld)) {
          return (0, errors_1.errorCode)("DOMAIN_FORBIDDEN_TLDS");
        }
      }
      for (let i = 0; i < segments.length; ++i) {
        const segment = segments[i];
        if (!segment.length) {
          return (0, errors_1.errorCode)("DOMAIN_EMPTY_SEGMENT");
        }
        if (segment.length > 63) {
          return (0, errors_1.errorCode)("DOMAIN_LONG_SEGMENT");
        }
        if (i < segments.length - 1) {
          if (options.allowUnderscore) {
            if (!DOMAIN_UNDERSCORE_SEGMENT_RX.test(segment)) {
              return (0, errors_1.errorCode)("DOMAIN_INVALID_CHARS");
            }
          } else {
            if (!DOMAIN_SEGMENT_RX.test(segment)) {
              return (0, errors_1.errorCode)("DOMAIN_INVALID_CHARS");
            }
          }
        } else {
          if (!TLD_SEGMENT_RX.test(segment)) {
            return (0, errors_1.errorCode)("DOMAIN_INVALID_TLDS_CHARS");
          }
        }
      }
      return null;
    }
    exports2.analyzeDomain = analyzeDomain;
    function isDomainValid(domain, options) {
      return !analyzeDomain(domain, options);
    }
    exports2.isDomainValid = isDomainValid;
    function punycode(domain) {
      if (domain.includes("%")) {
        domain = domain.replace(/%/g, "%25");
      }
      try {
        return new URL_IMPL(`http://${domain}`).host;
      } catch (err) {
        return domain;
      }
    }
    function validateDomainOptions(options) {
      if (!options) {
        return;
      }
      if (typeof options.tlds !== "object") {
        throw new Error("Invalid options: tlds must be a boolean or an object");
      }
      if (isTldsAllow(options.tlds)) {
        if (options.tlds.allow instanceof Set === false) {
          throw new Error("Invalid options: tlds.allow must be a Set object or true");
        }
        if (options.tlds.deny) {
          throw new Error("Invalid options: cannot specify both tlds.allow and tlds.deny lists");
        }
      } else {
        if (options.tlds.deny instanceof Set === false) {
          throw new Error("Invalid options: tlds.deny must be a Set object");
        }
      }
    }
    exports2.validateDomainOptions = validateDomainOptions;
  }
});

// node_modules/@hapi/address/dist/email.js
var require_email = __commonJS({
  "node_modules/@hapi/address/dist/email.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.isEmailValid = exports2.analyzeEmail = void 0;
    var Util = require("util");
    var domain_1 = require_domain();
    var errors_1 = require_errors2();
    var NON_ASCII_RX = /[^\x00-\x7f]/;
    var ENCODER_IMPL = new (Util.TextEncoder || TextEncoder)();
    function analyzeEmail(email, options) {
      return validateEmail(email, options);
    }
    exports2.analyzeEmail = analyzeEmail;
    function isEmailValid(email, options) {
      return !validateEmail(email, options);
    }
    exports2.isEmailValid = isEmailValid;
    function validateEmail(email, options = {}) {
      if (typeof email !== "string") {
        throw new Error("Invalid input: email must be a string");
      }
      if (!email) {
        return (0, errors_1.errorCode)("EMPTY_STRING");
      }
      const ascii = !NON_ASCII_RX.test(email);
      if (!ascii) {
        if (options.allowUnicode === false) {
          return (0, errors_1.errorCode)("FORBIDDEN_UNICODE");
        }
        email = email.normalize("NFC");
      }
      const parts = email.split("@");
      if (parts.length !== 2) {
        return parts.length > 2 ? (0, errors_1.errorCode)("MULTIPLE_AT_CHAR") : (0, errors_1.errorCode)("MISSING_AT_CHAR");
      }
      const [local, domain] = parts;
      if (!local) {
        return (0, errors_1.errorCode)("EMPTY_LOCAL");
      }
      if (!options.ignoreLength) {
        if (email.length > 254) {
          return (0, errors_1.errorCode)("ADDRESS_TOO_LONG");
        }
        if (ENCODER_IMPL.encode(local).length > 64) {
          return (0, errors_1.errorCode)("LOCAL_TOO_LONG");
        }
      }
      return validateLocal(local, ascii) || (0, domain_1.analyzeDomain)(domain, options);
    }
    function validateLocal(local, ascii) {
      const segments = local.split(".");
      for (const segment of segments) {
        if (!segment.length) {
          return (0, errors_1.errorCode)("EMPTY_LOCAL_SEGMENT");
        }
        if (ascii) {
          if (!ATEXT_RX.test(segment)) {
            return (0, errors_1.errorCode)("INVALID_LOCAL_CHARS");
          }
          continue;
        }
        for (const char of segment) {
          if (ATEXT_RX.test(char)) {
            continue;
          }
          const binary = toBinary(char);
          if (!ATOM_RX.test(binary)) {
            return (0, errors_1.errorCode)("INVALID_LOCAL_CHARS");
          }
        }
      }
      return null;
    }
    function toBinary(char) {
      return Array.from(ENCODER_IMPL.encode(char), (v) => String.fromCharCode(v)).join("");
    }
    var ATEXT_RX = /^[\w!#\$%&'\*\+\-/=\?\^`\{\|\}~]+$/;
    var ATOM_RX = new RegExp([
      //  %xC2-DF UTF8-tail
      "(?:[\\xc2-\\xdf][\\x80-\\xbf])",
      //  %xE0 %xA0-BF UTF8-tail              %xE1-EC 2( UTF8-tail )            %xED %x80-9F UTF8-tail              %xEE-EF 2( UTF8-tail )
      "(?:\\xe0[\\xa0-\\xbf][\\x80-\\xbf])|(?:[\\xe1-\\xec][\\x80-\\xbf]{2})|(?:\\xed[\\x80-\\x9f][\\x80-\\xbf])|(?:[\\xee-\\xef][\\x80-\\xbf]{2})",
      //  %xF0 %x90-BF 2( UTF8-tail )            %xF1-F3 3( UTF8-tail )            %xF4 %x80-8F 2( UTF8-tail )
      "(?:\\xf0[\\x90-\\xbf][\\x80-\\xbf]{2})|(?:[\\xf1-\\xf3][\\x80-\\xbf]{3})|(?:\\xf4[\\x80-\\x8f][\\x80-\\xbf]{2})"
    ].join("|"));
  }
});

// node_modules/@hapi/address/dist/uri.js
var require_uri2 = __commonJS({
  "node_modules/@hapi/address/dist/uri.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.uriRegex = exports2.ipVersions = void 0;
    var hoek_1 = require_lib();
    function generate() {
      const rfc39862 = {};
      const hexDigit = "\\dA-Fa-f";
      const hexDigitOnly = "[" + hexDigit + "]";
      const unreserved = "\\w-\\.~";
      const subDelims = "!\\$&'\\(\\)\\*\\+,;=";
      const pctEncoded = "%" + hexDigit;
      const pchar = unreserved + pctEncoded + subDelims + ":@";
      const pcharOnly = "[" + pchar + "]";
      const decOctect = "(?:0{0,2}\\d|0?[1-9]\\d|1\\d\\d|2[0-4]\\d|25[0-5])";
      rfc39862.ipv4address = "(?:" + decOctect + "\\.){3}" + decOctect;
      const h16 = hexDigitOnly + "{1,4}";
      const ls32 = "(?:" + h16 + ":" + h16 + "|" + rfc39862.ipv4address + ")";
      const IPv6SixHex = "(?:" + h16 + ":){6}" + ls32;
      const IPv6FiveHex = "::(?:" + h16 + ":){5}" + ls32;
      const IPv6FourHex = "(?:" + h16 + ")?::(?:" + h16 + ":){4}" + ls32;
      const IPv6ThreeHex = "(?:(?:" + h16 + ":){0,1}" + h16 + ")?::(?:" + h16 + ":){3}" + ls32;
      const IPv6TwoHex = "(?:(?:" + h16 + ":){0,2}" + h16 + ")?::(?:" + h16 + ":){2}" + ls32;
      const IPv6OneHex = "(?:(?:" + h16 + ":){0,3}" + h16 + ")?::" + h16 + ":" + ls32;
      const IPv6NoneHex = "(?:(?:" + h16 + ":){0,4}" + h16 + ")?::" + ls32;
      const IPv6NoneHex2 = "(?:(?:" + h16 + ":){0,5}" + h16 + ")?::" + h16;
      const IPv6NoneHex3 = "(?:(?:" + h16 + ":){0,6}" + h16 + ")?::";
      rfc39862.ipv4Cidr = "(?:\\d|[1-2]\\d|3[0-2])";
      rfc39862.ipv6Cidr = "(?:0{0,2}\\d|0?[1-9]\\d|1[01]\\d|12[0-8])";
      rfc39862.ipv6address = "(?:" + IPv6SixHex + "|" + IPv6FiveHex + "|" + IPv6FourHex + "|" + IPv6ThreeHex + "|" + IPv6TwoHex + "|" + IPv6OneHex + "|" + IPv6NoneHex + "|" + IPv6NoneHex2 + "|" + IPv6NoneHex3 + ")";
      rfc39862.ipvFuture = "v" + hexDigitOnly + "+\\.[" + unreserved + subDelims + ":]+";
      rfc39862.scheme = "[a-zA-Z][a-zA-Z\\d+-\\.]*";
      rfc39862.schemeRegex = new RegExp(rfc39862.scheme);
      const userinfo = "[" + unreserved + pctEncoded + subDelims + ":]*";
      const IPLiteral = "\\[(?:" + rfc39862.ipv6address + "|" + rfc39862.ipvFuture + ")\\]";
      const regName = "[" + unreserved + pctEncoded + subDelims + "]{1,255}";
      const host = "(?:" + IPLiteral + "|" + rfc39862.ipv4address + "|" + regName + ")";
      const port = "\\d*";
      const authority = "(?:" + userinfo + "@)?" + host + "(?::" + port + ")?";
      const authorityCapture = "(?:" + userinfo + "@)?(" + host + ")(?::" + port + ")?";
      const segment = pcharOnly + "*";
      const segmentNz = pcharOnly + "+";
      const segmentNzNc = "[" + unreserved + pctEncoded + subDelims + "@]+";
      const pathEmpty = "";
      const pathAbEmpty = "(?:\\/" + segment + ")*";
      const pathAbsolute = "\\/(?:" + segmentNz + pathAbEmpty + ")?";
      const pathRootless = segmentNz + pathAbEmpty;
      const pathNoScheme = segmentNzNc + pathAbEmpty;
      const pathAbNoAuthority = "(?:\\/\\/\\/" + segment + pathAbEmpty + ")";
      rfc39862.hierPart = "(?:(?:\\/\\/" + authority + pathAbEmpty + ")|" + pathAbsolute + "|" + pathRootless + "|" + pathAbNoAuthority + ")";
      rfc39862.hierPartCapture = "(?:(?:\\/\\/" + authorityCapture + pathAbEmpty + ")|" + pathAbsolute + "|" + pathRootless + ")";
      rfc39862.relativeRef = "(?:(?:\\/\\/" + authority + pathAbEmpty + ")|" + pathAbsolute + "|" + pathNoScheme + "|" + pathEmpty + ")";
      rfc39862.relativeRefCapture = "(?:(?:\\/\\/" + authorityCapture + pathAbEmpty + ")|" + pathAbsolute + "|" + pathNoScheme + "|" + pathEmpty + ")";
      rfc39862.query = "[" + pchar + "\\/\\?]*(?=#|$)";
      rfc39862.queryWithSquareBrackets = "[" + pchar + "\\[\\]\\/\\?]*(?=#|$)";
      rfc39862.fragment = "[" + pchar + "\\/\\?]*";
      return rfc39862;
    }
    var rfc3986 = generate();
    exports2.ipVersions = {
      v4Cidr: rfc3986.ipv4Cidr,
      v6Cidr: rfc3986.ipv6Cidr,
      ipv4: rfc3986.ipv4address,
      ipv6: rfc3986.ipv6address,
      ipvfuture: rfc3986.ipvFuture
    };
    function createRegex(options) {
      const rfc = rfc3986;
      const query = options.allowQuerySquareBrackets ? rfc.queryWithSquareBrackets : rfc.query;
      const suffix = "(?:\\?" + query + ")?(?:#" + rfc.fragment + ")?";
      const relative = options.domain ? rfc.relativeRefCapture : rfc.relativeRef;
      if (options.relativeOnly) {
        return wrap(relative + suffix);
      }
      let customScheme = "";
      if (options.scheme) {
        (0, hoek_1.assert)(options.scheme instanceof RegExp || typeof options.scheme === "string" || Array.isArray(options.scheme), "scheme must be a RegExp, String, or Array");
        const schemes = [].concat(options.scheme);
        (0, hoek_1.assert)(schemes.length >= 1, "scheme must have at least 1 scheme specified");
        const selections = [];
        for (let i = 0; i < schemes.length; ++i) {
          const scheme2 = schemes[i];
          (0, hoek_1.assert)(scheme2 instanceof RegExp || typeof scheme2 === "string", "scheme at position " + i + " must be a RegExp or String");
          if (scheme2 instanceof RegExp) {
            selections.push(scheme2.source.toString());
          } else {
            (0, hoek_1.assert)(rfc.schemeRegex.test(scheme2), "scheme at position " + i + " must be a valid scheme");
            selections.push((0, hoek_1.escapeRegex)(scheme2));
          }
        }
        customScheme = selections.join("|");
      }
      const scheme = customScheme ? "(?:" + customScheme + ")" : rfc.scheme;
      const absolute = "(?:" + scheme + ":" + (options.domain ? rfc.hierPartCapture : rfc.hierPart) + ")";
      const prefix = options.allowRelative ? "(?:" + absolute + "|" + relative + ")" : absolute;
      return wrap(prefix + suffix, customScheme);
    }
    function wrap(raw, scheme = null) {
      raw = `(?=.)(?!https?:/(?:$|[^/]))(?!https?:///)(?!https?:[^/])${raw}`;
      return {
        raw,
        regex: new RegExp(`^${raw}$`),
        scheme
      };
    }
    var genericUriRegex = createRegex({});
    function uriRegex(options = {}) {
      if (options.scheme || options.allowRelative || options.relativeOnly || options.allowQuerySquareBrackets || options.domain) {
        return createRegex(options);
      }
      return genericUriRegex;
    }
    exports2.uriRegex = uriRegex;
  }
});

// node_modules/@hapi/address/dist/ip.js
var require_ip = __commonJS({
  "node_modules/@hapi/address/dist/ip.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.ipRegex = void 0;
    var hoek_1 = require_lib();
    var uri_1 = require_uri2();
    function ipRegex(options = {}) {
      const cidr = options.cidr || "optional";
      (0, hoek_1.assert)(["required", "optional", "forbidden"].includes(cidr), "options.cidr must be one of required, optional, forbidden");
      (0, hoek_1.assert)(options.version === void 0 || typeof options.version === "string" || Array.isArray(options.version), "options.version must be a string or an array of string");
      let versions = options.version || ["ipv4", "ipv6", "ipvfuture"];
      if (!Array.isArray(versions)) {
        versions = [versions];
      }
      (0, hoek_1.assert)(versions.length >= 1, "options.version must have at least 1 version specified");
      for (const version of versions) {
        (0, hoek_1.assert)(typeof version === "string" && version === version.toLowerCase(), "Invalid options.version value");
        (0, hoek_1.assert)(["ipv4", "ipv6", "ipvfuture"].includes(version), "options.version contains unknown version " + version + " - must be one of ipv4, ipv6, ipvfuture");
      }
      versions = Array.from(new Set(versions));
      const parts = versions.map((version) => {
        if (cidr === "forbidden") {
          return uri_1.ipVersions[version];
        }
        const cidrpart = `\\/${version === "ipv4" ? uri_1.ipVersions.v4Cidr : uri_1.ipVersions.v6Cidr}`;
        if (cidr === "required") {
          return `${uri_1.ipVersions[version]}${cidrpart}`;
        }
        return `${uri_1.ipVersions[version]}(?:${cidrpart})?`;
      });
      const raw = `(?:${parts.join("|")})`;
      const regex = new RegExp(`^${raw}$`);
      return { cidr, versions, regex, raw };
    }
    exports2.ipRegex = ipRegex;
  }
});

// node_modules/@hapi/address/dist/decode.js
var require_decode = __commonJS({
  "node_modules/@hapi/address/dist/decode.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.uriDecode = void 0;
    var HEX = {
      "0": 0,
      "1": 1,
      "2": 2,
      "3": 3,
      "4": 4,
      "5": 5,
      "6": 6,
      "7": 7,
      "8": 8,
      "9": 9,
      a: 10,
      A: 10,
      b: 11,
      B: 11,
      c: 12,
      C: 12,
      d: 13,
      D: 13,
      e: 14,
      E: 14,
      f: 15,
      F: 15
    };
    var UTF8 = {
      accept: 12,
      reject: 0,
      data: [
        // Maps bytes to character to a transition
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        2,
        2,
        2,
        2,
        2,
        2,
        2,
        2,
        2,
        2,
        2,
        2,
        2,
        2,
        2,
        2,
        3,
        3,
        3,
        3,
        3,
        3,
        3,
        3,
        3,
        3,
        3,
        3,
        3,
        3,
        3,
        3,
        3,
        3,
        3,
        3,
        3,
        3,
        3,
        3,
        3,
        3,
        3,
        3,
        3,
        3,
        3,
        3,
        4,
        4,
        5,
        5,
        5,
        5,
        5,
        5,
        5,
        5,
        5,
        5,
        5,
        5,
        5,
        5,
        5,
        5,
        5,
        5,
        5,
        5,
        5,
        5,
        5,
        5,
        5,
        5,
        5,
        5,
        5,
        5,
        6,
        7,
        7,
        7,
        7,
        7,
        7,
        7,
        7,
        7,
        7,
        7,
        7,
        8,
        7,
        7,
        10,
        9,
        9,
        9,
        11,
        4,
        4,
        4,
        4,
        4,
        4,
        4,
        4,
        4,
        4,
        4,
        // Maps a state to a new state when adding a transition
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        12,
        0,
        0,
        0,
        0,
        24,
        36,
        48,
        60,
        72,
        84,
        96,
        0,
        12,
        12,
        12,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        24,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        24,
        24,
        24,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        24,
        24,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        48,
        48,
        48,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        48,
        48,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        48,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        // Maps the current transition to a mask that needs to apply to the byte
        127,
        63,
        63,
        63,
        0,
        31,
        15,
        15,
        15,
        7,
        7,
        7
      ]
    };
    function uriDecode(string) {
      let percentPos = string.indexOf("%");
      if (percentPos === -1) {
        return string;
      }
      let decoded = "";
      let last = 0;
      let codepoint = 0;
      let startOfOctets = percentPos;
      let state = UTF8.accept;
      while (percentPos > -1 && percentPos < string.length) {
        const high = resolveHex(string[percentPos + 1], 4);
        const low = resolveHex(string[percentPos + 2], 0);
        const byte = high | low;
        const type = UTF8.data[byte];
        state = UTF8.data[256 + state + type];
        codepoint = codepoint << 6 | byte & UTF8.data[364 + type];
        if (state === UTF8.accept) {
          decoded += string.slice(last, startOfOctets);
          decoded += codepoint <= 65535 ? String.fromCharCode(codepoint) : String.fromCharCode(55232 + (codepoint >> 10), 56320 + (codepoint & 1023));
          codepoint = 0;
          last = percentPos + 3;
          percentPos = string.indexOf("%", last);
          startOfOctets = percentPos;
          continue;
        }
        if (state === UTF8.reject) {
          return null;
        }
        percentPos += 3;
        if (percentPos >= string.length || string[percentPos] !== "%") {
          return null;
        }
      }
      return decoded + string.slice(last);
    }
    exports2.uriDecode = uriDecode;
    function resolveHex(char, shift) {
      const i = HEX[char];
      return i === void 0 ? 255 : i << shift;
    }
  }
});

// node_modules/@hapi/address/dist/index.js
var require_dist4 = __commonJS({
  "node_modules/@hapi/address/dist/index.js"(exports2) {
    "use strict";
    var __createBinding = exports2 && exports2.__createBinding || (Object.create ? (function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    }) : (function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      o[k2] = m[k];
    }));
    var __exportStar = exports2 && exports2.__exportStar || function(m, exports3) {
      for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports3, p)) __createBinding(exports3, m, p);
    };
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.uriDecode = exports2.uriRegex = exports2.ipRegex = exports2.errorCodes = void 0;
    __exportStar(require_domain(), exports2);
    __exportStar(require_email(), exports2);
    var errors_1 = require_errors2();
    Object.defineProperty(exports2, "errorCodes", { enumerable: true, get: function() {
      return errors_1.errorCodes;
    } });
    var ip_1 = require_ip();
    Object.defineProperty(exports2, "ipRegex", { enumerable: true, get: function() {
      return ip_1.ipRegex;
    } });
    var uri_1 = require_uri2();
    Object.defineProperty(exports2, "uriRegex", { enumerable: true, get: function() {
      return uri_1.uriRegex;
    } });
    var decode_1 = require_decode();
    Object.defineProperty(exports2, "uriDecode", { enumerable: true, get: function() {
      return decode_1.uriDecode;
    } });
  }
});

// node_modules/@hapi/tlds/dist/commonjs/tlds.js
var require_tlds = __commonJS({
  "node_modules/@hapi/tlds/dist/commonjs/tlds.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.TLDS = void 0;
    exports2.TLDS = [
      "AAA",
      "AARP",
      "ABB",
      "ABBOTT",
      "ABBVIE",
      "ABC",
      "ABLE",
      "ABOGADO",
      "ABUDHABI",
      "AC",
      "ACADEMY",
      "ACCENTURE",
      "ACCOUNTANT",
      "ACCOUNTANTS",
      "ACO",
      "ACTOR",
      "AD",
      "ADS",
      "ADULT",
      "AE",
      "AEG",
      "AERO",
      "AETNA",
      "AF",
      "AFL",
      "AFRICA",
      "AG",
      "AGAKHAN",
      "AGENCY",
      "AI",
      "AIG",
      "AIRBUS",
      "AIRFORCE",
      "AIRTEL",
      "AKDN",
      "AL",
      "ALIBABA",
      "ALIPAY",
      "ALLFINANZ",
      "ALLSTATE",
      "ALLY",
      "ALSACE",
      "ALSTOM",
      "AM",
      "AMAZON",
      "AMERICANEXPRESS",
      "AMERICANFAMILY",
      "AMEX",
      "AMFAM",
      "AMICA",
      "AMSTERDAM",
      "ANALYTICS",
      "ANDROID",
      "ANQUAN",
      "ANZ",
      "AO",
      "AOL",
      "APARTMENTS",
      "APP",
      "APPLE",
      "AQ",
      "AQUARELLE",
      "AR",
      "ARAB",
      "ARAMCO",
      "ARCHI",
      "ARMY",
      "ARPA",
      "ART",
      "ARTE",
      "AS",
      "ASDA",
      "ASIA",
      "ASSOCIATES",
      "AT",
      "ATHLETA",
      "ATTORNEY",
      "AU",
      "AUCTION",
      "AUDI",
      "AUDIBLE",
      "AUDIO",
      "AUSPOST",
      "AUTHOR",
      "AUTO",
      "AUTOS",
      "AW",
      "AWS",
      "AX",
      "AXA",
      "AZ",
      "AZURE",
      "BA",
      "BABY",
      "BAIDU",
      "BANAMEX",
      "BAND",
      "BANK",
      "BAR",
      "BARCELONA",
      "BARCLAYCARD",
      "BARCLAYS",
      "BAREFOOT",
      "BARGAINS",
      "BASEBALL",
      "BASKETBALL",
      "BAUHAUS",
      "BAYERN",
      "BB",
      "BBC",
      "BBT",
      "BBVA",
      "BCG",
      "BCN",
      "BD",
      "BE",
      "BEATS",
      "BEAUTY",
      "BEER",
      "BERLIN",
      "BEST",
      "BESTBUY",
      "BET",
      "BF",
      "BG",
      "BH",
      "BHARTI",
      "BI",
      "BIBLE",
      "BID",
      "BIKE",
      "BING",
      "BINGO",
      "BIO",
      "BIZ",
      "BJ",
      "BLACK",
      "BLACKFRIDAY",
      "BLOCKBUSTER",
      "BLOG",
      "BLOOMBERG",
      "BLUE",
      "BM",
      "BMS",
      "BMW",
      "BN",
      "BNPPARIBAS",
      "BO",
      "BOATS",
      "BOEHRINGER",
      "BOFA",
      "BOM",
      "BOND",
      "BOO",
      "BOOK",
      "BOOKING",
      "BOSCH",
      "BOSTIK",
      "BOSTON",
      "BOT",
      "BOUTIQUE",
      "BOX",
      "BR",
      "BRADESCO",
      "BRIDGESTONE",
      "BROADWAY",
      "BROKER",
      "BROTHER",
      "BRUSSELS",
      "BS",
      "BT",
      "BUILD",
      "BUILDERS",
      "BUSINESS",
      "BUY",
      "BUZZ",
      "BV",
      "BW",
      "BY",
      "BZ",
      "BZH",
      "CA",
      "CAB",
      "CAFE",
      "CAL",
      "CALL",
      "CALVINKLEIN",
      "CAM",
      "CAMERA",
      "CAMP",
      "CANON",
      "CAPETOWN",
      "CAPITAL",
      "CAPITALONE",
      "CAR",
      "CARAVAN",
      "CARDS",
      "CARE",
      "CAREER",
      "CAREERS",
      "CARS",
      "CASA",
      "CASE",
      "CASH",
      "CASINO",
      "CAT",
      "CATERING",
      "CATHOLIC",
      "CBA",
      "CBN",
      "CBRE",
      "CC",
      "CD",
      "CENTER",
      "CEO",
      "CERN",
      "CF",
      "CFA",
      "CFD",
      "CG",
      "CH",
      "CHANEL",
      "CHANNEL",
      "CHARITY",
      "CHASE",
      "CHAT",
      "CHEAP",
      "CHINTAI",
      "CHRISTMAS",
      "CHROME",
      "CHURCH",
      "CI",
      "CIPRIANI",
      "CIRCLE",
      "CISCO",
      "CITADEL",
      "CITI",
      "CITIC",
      "CITY",
      "CK",
      "CL",
      "CLAIMS",
      "CLEANING",
      "CLICK",
      "CLINIC",
      "CLINIQUE",
      "CLOTHING",
      "CLOUD",
      "CLUB",
      "CLUBMED",
      "CM",
      "CN",
      "CO",
      "COACH",
      "CODES",
      "COFFEE",
      "COLLEGE",
      "COLOGNE",
      "COM",
      "COMMBANK",
      "COMMUNITY",
      "COMPANY",
      "COMPARE",
      "COMPUTER",
      "COMSEC",
      "CONDOS",
      "CONSTRUCTION",
      "CONSULTING",
      "CONTACT",
      "CONTRACTORS",
      "COOKING",
      "COOL",
      "COOP",
      "CORSICA",
      "COUNTRY",
      "COUPON",
      "COUPONS",
      "COURSES",
      "CPA",
      "CR",
      "CREDIT",
      "CREDITCARD",
      "CREDITUNION",
      "CRICKET",
      "CROWN",
      "CRS",
      "CRUISE",
      "CRUISES",
      "CU",
      "CUISINELLA",
      "CV",
      "CW",
      "CX",
      "CY",
      "CYMRU",
      "CYOU",
      "CZ",
      "DAD",
      "DANCE",
      "DATA",
      "DATE",
      "DATING",
      "DATSUN",
      "DAY",
      "DCLK",
      "DDS",
      "DE",
      "DEAL",
      "DEALER",
      "DEALS",
      "DEGREE",
      "DELIVERY",
      "DELL",
      "DELOITTE",
      "DELTA",
      "DEMOCRAT",
      "DENTAL",
      "DENTIST",
      "DESI",
      "DESIGN",
      "DEV",
      "DHL",
      "DIAMONDS",
      "DIET",
      "DIGITAL",
      "DIRECT",
      "DIRECTORY",
      "DISCOUNT",
      "DISCOVER",
      "DISH",
      "DIY",
      "DJ",
      "DK",
      "DM",
      "DNP",
      "DO",
      "DOCS",
      "DOCTOR",
      "DOG",
      "DOMAINS",
      "DOT",
      "DOWNLOAD",
      "DRIVE",
      "DTV",
      "DUBAI",
      "DUPONT",
      "DURBAN",
      "DVAG",
      "DVR",
      "DZ",
      "EARTH",
      "EAT",
      "EC",
      "ECO",
      "EDEKA",
      "EDU",
      "EDUCATION",
      "EE",
      "EG",
      "EMAIL",
      "EMERCK",
      "ENERGY",
      "ENGINEER",
      "ENGINEERING",
      "ENTERPRISES",
      "EPSON",
      "EQUIPMENT",
      "ER",
      "ERICSSON",
      "ERNI",
      "ES",
      "ESQ",
      "ESTATE",
      "ET",
      "EU",
      "EUROVISION",
      "EUS",
      "EVENTS",
      "EXCHANGE",
      "EXPERT",
      "EXPOSED",
      "EXPRESS",
      "EXTRASPACE",
      "FAGE",
      "FAIL",
      "FAIRWINDS",
      "FAITH",
      "FAMILY",
      "FAN",
      "FANS",
      "FARM",
      "FARMERS",
      "FASHION",
      "FAST",
      "FEDEX",
      "FEEDBACK",
      "FERRARI",
      "FERRERO",
      "FI",
      "FIDELITY",
      "FIDO",
      "FILM",
      "FINAL",
      "FINANCE",
      "FINANCIAL",
      "FIRE",
      "FIRESTONE",
      "FIRMDALE",
      "FISH",
      "FISHING",
      "FIT",
      "FITNESS",
      "FJ",
      "FK",
      "FLICKR",
      "FLIGHTS",
      "FLIR",
      "FLORIST",
      "FLOWERS",
      "FLY",
      "FM",
      "FO",
      "FOO",
      "FOOD",
      "FOOTBALL",
      "FORD",
      "FOREX",
      "FORSALE",
      "FORUM",
      "FOUNDATION",
      "FOX",
      "FR",
      "FREE",
      "FRESENIUS",
      "FRL",
      "FROGANS",
      "FRONTIER",
      "FTR",
      "FUJITSU",
      "FUN",
      "FUND",
      "FURNITURE",
      "FUTBOL",
      "FYI",
      "GA",
      "GAL",
      "GALLERY",
      "GALLO",
      "GALLUP",
      "GAME",
      "GAMES",
      "GAP",
      "GARDEN",
      "GAY",
      "GB",
      "GBIZ",
      "GD",
      "GDN",
      "GE",
      "GEA",
      "GENT",
      "GENTING",
      "GEORGE",
      "GF",
      "GG",
      "GGEE",
      "GH",
      "GI",
      "GIFT",
      "GIFTS",
      "GIVES",
      "GIVING",
      "GL",
      "GLASS",
      "GLE",
      "GLOBAL",
      "GLOBO",
      "GM",
      "GMAIL",
      "GMBH",
      "GMO",
      "GMX",
      "GN",
      "GODADDY",
      "GOLD",
      "GOLDPOINT",
      "GOLF",
      "GOODYEAR",
      "GOOG",
      "GOOGLE",
      "GOP",
      "GOT",
      "GOV",
      "GP",
      "GQ",
      "GR",
      "GRAINGER",
      "GRAPHICS",
      "GRATIS",
      "GREEN",
      "GRIPE",
      "GROCERY",
      "GROUP",
      "GS",
      "GT",
      "GU",
      "GUCCI",
      "GUGE",
      "GUIDE",
      "GUITARS",
      "GURU",
      "GW",
      "GY",
      "HAIR",
      "HAMBURG",
      "HANGOUT",
      "HAUS",
      "HBO",
      "HDFC",
      "HDFCBANK",
      "HEALTH",
      "HEALTHCARE",
      "HELP",
      "HELSINKI",
      "HERE",
      "HERMES",
      "HIPHOP",
      "HISAMITSU",
      "HITACHI",
      "HIV",
      "HK",
      "HKT",
      "HM",
      "HN",
      "HOCKEY",
      "HOLDINGS",
      "HOLIDAY",
      "HOMEDEPOT",
      "HOMEGOODS",
      "HOMES",
      "HOMESENSE",
      "HONDA",
      "HORSE",
      "HOSPITAL",
      "HOST",
      "HOSTING",
      "HOT",
      "HOTELS",
      "HOTMAIL",
      "HOUSE",
      "HOW",
      "HR",
      "HSBC",
      "HT",
      "HU",
      "HUGHES",
      "HYATT",
      "HYUNDAI",
      "IBM",
      "ICBC",
      "ICE",
      "ICU",
      "ID",
      "IE",
      "IEEE",
      "IFM",
      "IKANO",
      "IL",
      "IM",
      "IMAMAT",
      "IMDB",
      "IMMO",
      "IMMOBILIEN",
      "IN",
      "INC",
      "INDUSTRIES",
      "INFINITI",
      "INFO",
      "ING",
      "INK",
      "INSTITUTE",
      "INSURANCE",
      "INSURE",
      "INT",
      "INTERNATIONAL",
      "INTUIT",
      "INVESTMENTS",
      "IO",
      "IPIRANGA",
      "IQ",
      "IR",
      "IRISH",
      "IS",
      "ISMAILI",
      "IST",
      "ISTANBUL",
      "IT",
      "ITAU",
      "ITV",
      "JAGUAR",
      "JAVA",
      "JCB",
      "JE",
      "JEEP",
      "JETZT",
      "JEWELRY",
      "JIO",
      "JLL",
      "JM",
      "JMP",
      "JNJ",
      "JO",
      "JOBS",
      "JOBURG",
      "JOT",
      "JOY",
      "JP",
      "JPMORGAN",
      "JPRS",
      "JUEGOS",
      "JUNIPER",
      "KAUFEN",
      "KDDI",
      "KE",
      "KERRYHOTELS",
      "KERRYPROPERTIES",
      "KFH",
      "KG",
      "KH",
      "KI",
      "KIA",
      "KIDS",
      "KIM",
      "KINDLE",
      "KITCHEN",
      "KIWI",
      "KM",
      "KN",
      "KOELN",
      "KOMATSU",
      "KOSHER",
      "KP",
      "KPMG",
      "KPN",
      "KR",
      "KRD",
      "KRED",
      "KUOKGROUP",
      "KW",
      "KY",
      "KYOTO",
      "KZ",
      "LA",
      "LACAIXA",
      "LAMBORGHINI",
      "LAMER",
      "LAND",
      "LANDROVER",
      "LANXESS",
      "LASALLE",
      "LAT",
      "LATINO",
      "LATROBE",
      "LAW",
      "LAWYER",
      "LB",
      "LC",
      "LDS",
      "LEASE",
      "LECLERC",
      "LEFRAK",
      "LEGAL",
      "LEGO",
      "LEXUS",
      "LGBT",
      "LI",
      "LIDL",
      "LIFE",
      "LIFEINSURANCE",
      "LIFESTYLE",
      "LIGHTING",
      "LIKE",
      "LILLY",
      "LIMITED",
      "LIMO",
      "LINCOLN",
      "LINK",
      "LIVE",
      "LIVING",
      "LK",
      "LLC",
      "LLP",
      "LOAN",
      "LOANS",
      "LOCKER",
      "LOCUS",
      "LOL",
      "LONDON",
      "LOTTE",
      "LOTTO",
      "LOVE",
      "LPL",
      "LPLFINANCIAL",
      "LR",
      "LS",
      "LT",
      "LTD",
      "LTDA",
      "LU",
      "LUNDBECK",
      "LUXE",
      "LUXURY",
      "LV",
      "LY",
      "MA",
      "MADRID",
      "MAIF",
      "MAISON",
      "MAKEUP",
      "MAN",
      "MANAGEMENT",
      "MANGO",
      "MAP",
      "MARKET",
      "MARKETING",
      "MARKETS",
      "MARRIOTT",
      "MARSHALLS",
      "MATTEL",
      "MBA",
      "MC",
      "MCKINSEY",
      "MD",
      "ME",
      "MED",
      "MEDIA",
      "MEET",
      "MELBOURNE",
      "MEME",
      "MEMORIAL",
      "MEN",
      "MENU",
      "MERCK",
      "MERCKMSD",
      "MG",
      "MH",
      "MIAMI",
      "MICROSOFT",
      "MIL",
      "MINI",
      "MINT",
      "MIT",
      "MITSUBISHI",
      "MK",
      "ML",
      "MLB",
      "MLS",
      "MM",
      "MMA",
      "MN",
      "MO",
      "MOBI",
      "MOBILE",
      "MODA",
      "MOE",
      "MOI",
      "MOM",
      "MONASH",
      "MONEY",
      "MONSTER",
      "MORMON",
      "MORTGAGE",
      "MOSCOW",
      "MOTO",
      "MOTORCYCLES",
      "MOV",
      "MOVIE",
      "MP",
      "MQ",
      "MR",
      "MS",
      "MSD",
      "MT",
      "MTN",
      "MTR",
      "MU",
      "MUSEUM",
      "MUSIC",
      "MV",
      "MW",
      "MX",
      "MY",
      "MZ",
      "NA",
      "NAB",
      "NAGOYA",
      "NAME",
      "NAVY",
      "NBA",
      "NC",
      "NE",
      "NEC",
      "NET",
      "NETBANK",
      "NETFLIX",
      "NETWORK",
      "NEUSTAR",
      "NEW",
      "NEWS",
      "NEXT",
      "NEXTDIRECT",
      "NEXUS",
      "NF",
      "NFL",
      "NG",
      "NGO",
      "NHK",
      "NI",
      "NICO",
      "NIKE",
      "NIKON",
      "NINJA",
      "NISSAN",
      "NISSAY",
      "NL",
      "NO",
      "NOKIA",
      "NORTON",
      "NOW",
      "NOWRUZ",
      "NOWTV",
      "NP",
      "NR",
      "NRA",
      "NRW",
      "NTT",
      "NU",
      "NYC",
      "NZ",
      "OBI",
      "OBSERVER",
      "OFFICE",
      "OKINAWA",
      "OLAYAN",
      "OLAYANGROUP",
      "OLLO",
      "OM",
      "OMEGA",
      "ONE",
      "ONG",
      "ONL",
      "ONLINE",
      "OOO",
      "OPEN",
      "ORACLE",
      "ORANGE",
      "ORG",
      "ORGANIC",
      "ORIGINS",
      "OSAKA",
      "OTSUKA",
      "OTT",
      "OVH",
      "PA",
      "PAGE",
      "PANASONIC",
      "PARIS",
      "PARS",
      "PARTNERS",
      "PARTS",
      "PARTY",
      "PAY",
      "PCCW",
      "PE",
      "PET",
      "PF",
      "PFIZER",
      "PG",
      "PH",
      "PHARMACY",
      "PHD",
      "PHILIPS",
      "PHONE",
      "PHOTO",
      "PHOTOGRAPHY",
      "PHOTOS",
      "PHYSIO",
      "PICS",
      "PICTET",
      "PICTURES",
      "PID",
      "PIN",
      "PING",
      "PINK",
      "PIONEER",
      "PIZZA",
      "PK",
      "PL",
      "PLACE",
      "PLAY",
      "PLAYSTATION",
      "PLUMBING",
      "PLUS",
      "PM",
      "PN",
      "PNC",
      "POHL",
      "POKER",
      "POLITIE",
      "PORN",
      "POST",
      "PR",
      "PRAXI",
      "PRESS",
      "PRIME",
      "PRO",
      "PROD",
      "PRODUCTIONS",
      "PROF",
      "PROGRESSIVE",
      "PROMO",
      "PROPERTIES",
      "PROPERTY",
      "PROTECTION",
      "PRU",
      "PRUDENTIAL",
      "PS",
      "PT",
      "PUB",
      "PW",
      "PWC",
      "PY",
      "QA",
      "QPON",
      "QUEBEC",
      "QUEST",
      "RACING",
      "RADIO",
      "RE",
      "READ",
      "REALESTATE",
      "REALTOR",
      "REALTY",
      "RECIPES",
      "RED",
      "REDUMBRELLA",
      "REHAB",
      "REISE",
      "REISEN",
      "REIT",
      "RELIANCE",
      "REN",
      "RENT",
      "RENTALS",
      "REPAIR",
      "REPORT",
      "REPUBLICAN",
      "REST",
      "RESTAURANT",
      "REVIEW",
      "REVIEWS",
      "REXROTH",
      "RICH",
      "RICHARDLI",
      "RICOH",
      "RIL",
      "RIO",
      "RIP",
      "RO",
      "ROCKS",
      "RODEO",
      "ROGERS",
      "ROOM",
      "RS",
      "RSVP",
      "RU",
      "RUGBY",
      "RUHR",
      "RUN",
      "RW",
      "RWE",
      "RYUKYU",
      "SA",
      "SAARLAND",
      "SAFE",
      "SAFETY",
      "SAKURA",
      "SALE",
      "SALON",
      "SAMSCLUB",
      "SAMSUNG",
      "SANDVIK",
      "SANDVIKCOROMANT",
      "SANOFI",
      "SAP",
      "SARL",
      "SAS",
      "SAVE",
      "SAXO",
      "SB",
      "SBI",
      "SBS",
      "SC",
      "SCB",
      "SCHAEFFLER",
      "SCHMIDT",
      "SCHOLARSHIPS",
      "SCHOOL",
      "SCHULE",
      "SCHWARZ",
      "SCIENCE",
      "SCOT",
      "SD",
      "SE",
      "SEARCH",
      "SEAT",
      "SECURE",
      "SECURITY",
      "SEEK",
      "SELECT",
      "SENER",
      "SERVICES",
      "SEVEN",
      "SEW",
      "SEX",
      "SEXY",
      "SFR",
      "SG",
      "SH",
      "SHANGRILA",
      "SHARP",
      "SHELL",
      "SHIA",
      "SHIKSHA",
      "SHOES",
      "SHOP",
      "SHOPPING",
      "SHOUJI",
      "SHOW",
      "SI",
      "SILK",
      "SINA",
      "SINGLES",
      "SITE",
      "SJ",
      "SK",
      "SKI",
      "SKIN",
      "SKY",
      "SKYPE",
      "SL",
      "SLING",
      "SM",
      "SMART",
      "SMILE",
      "SN",
      "SNCF",
      "SO",
      "SOCCER",
      "SOCIAL",
      "SOFTBANK",
      "SOFTWARE",
      "SOHU",
      "SOLAR",
      "SOLUTIONS",
      "SONG",
      "SONY",
      "SOY",
      "SPA",
      "SPACE",
      "SPORT",
      "SPOT",
      "SR",
      "SRL",
      "SS",
      "ST",
      "STADA",
      "STAPLES",
      "STAR",
      "STATEBANK",
      "STATEFARM",
      "STC",
      "STCGROUP",
      "STOCKHOLM",
      "STORAGE",
      "STORE",
      "STREAM",
      "STUDIO",
      "STUDY",
      "STYLE",
      "SU",
      "SUCKS",
      "SUPPLIES",
      "SUPPLY",
      "SUPPORT",
      "SURF",
      "SURGERY",
      "SUZUKI",
      "SV",
      "SWATCH",
      "SWISS",
      "SX",
      "SY",
      "SYDNEY",
      "SYSTEMS",
      "SZ",
      "TAB",
      "TAIPEI",
      "TALK",
      "TAOBAO",
      "TARGET",
      "TATAMOTORS",
      "TATAR",
      "TATTOO",
      "TAX",
      "TAXI",
      "TC",
      "TCI",
      "TD",
      "TDK",
      "TEAM",
      "TECH",
      "TECHNOLOGY",
      "TEL",
      "TEMASEK",
      "TENNIS",
      "TEVA",
      "TF",
      "TG",
      "TH",
      "THD",
      "THEATER",
      "THEATRE",
      "TIAA",
      "TICKETS",
      "TIENDA",
      "TIPS",
      "TIRES",
      "TIROL",
      "TJ",
      "TJMAXX",
      "TJX",
      "TK",
      "TKMAXX",
      "TL",
      "TM",
      "TMALL",
      "TN",
      "TO",
      "TODAY",
      "TOKYO",
      "TOOLS",
      "TOP",
      "TORAY",
      "TOSHIBA",
      "TOTAL",
      "TOURS",
      "TOWN",
      "TOYOTA",
      "TOYS",
      "TR",
      "TRADE",
      "TRADING",
      "TRAINING",
      "TRAVEL",
      "TRAVELERS",
      "TRAVELERSINSURANCE",
      "TRUST",
      "TRV",
      "TT",
      "TUBE",
      "TUI",
      "TUNES",
      "TUSHU",
      "TV",
      "TVS",
      "TW",
      "TZ",
      "UA",
      "UBANK",
      "UBS",
      "UG",
      "UK",
      "UNICOM",
      "UNIVERSITY",
      "UNO",
      "UOL",
      "UPS",
      "US",
      "UY",
      "UZ",
      "VA",
      "VACATIONS",
      "VANA",
      "VANGUARD",
      "VC",
      "VE",
      "VEGAS",
      "VENTURES",
      "VERISIGN",
      "VERSICHERUNG",
      "VET",
      "VG",
      "VI",
      "VIAJES",
      "VIDEO",
      "VIG",
      "VIKING",
      "VILLAS",
      "VIN",
      "VIP",
      "VIRGIN",
      "VISA",
      "VISION",
      "VIVA",
      "VIVO",
      "VLAANDEREN",
      "VN",
      "VODKA",
      "VOLVO",
      "VOTE",
      "VOTING",
      "VOTO",
      "VOYAGE",
      "VU",
      "WALES",
      "WALMART",
      "WALTER",
      "WANG",
      "WANGGOU",
      "WATCH",
      "WATCHES",
      "WEATHER",
      "WEATHERCHANNEL",
      "WEBCAM",
      "WEBER",
      "WEBSITE",
      "WED",
      "WEDDING",
      "WEIBO",
      "WEIR",
      "WF",
      "WHOSWHO",
      "WIEN",
      "WIKI",
      "WILLIAMHILL",
      "WIN",
      "WINDOWS",
      "WINE",
      "WINNERS",
      "WME",
      "WOODSIDE",
      "WORK",
      "WORKS",
      "WORLD",
      "WOW",
      "WS",
      "WTC",
      "WTF",
      "XBOX",
      "XEROX",
      "XIHUAN",
      "XIN",
      "XN--11B4C3D",
      "XN--1CK2E1B",
      "XN--1QQW23A",
      "XN--2SCRJ9C",
      "XN--30RR7Y",
      "XN--3BST00M",
      "XN--3DS443G",
      "XN--3E0B707E",
      "XN--3HCRJ9C",
      "XN--3PXU8K",
      "XN--42C2D9A",
      "XN--45BR5CYL",
      "XN--45BRJ9C",
      "XN--45Q11C",
      "XN--4DBRK0CE",
      "XN--4GBRIM",
      "XN--54B7FTA0CC",
      "XN--55QW42G",
      "XN--55QX5D",
      "XN--5SU34J936BGSG",
      "XN--5TZM5G",
      "XN--6FRZ82G",
      "XN--6QQ986B3XL",
      "XN--80ADXHKS",
      "XN--80AO21A",
      "XN--80AQECDR1A",
      "XN--80ASEHDB",
      "XN--80ASWG",
      "XN--8Y0A063A",
      "XN--90A3AC",
      "XN--90AE",
      "XN--90AIS",
      "XN--9DBQ2A",
      "XN--9ET52U",
      "XN--9KRT00A",
      "XN--B4W605FERD",
      "XN--BCK1B9A5DRE4C",
      "XN--C1AVG",
      "XN--C2BR7G",
      "XN--CCK2B3B",
      "XN--CCKWCXETD",
      "XN--CG4BKI",
      "XN--CLCHC0EA0B2G2A9GCD",
      "XN--CZR694B",
      "XN--CZRS0T",
      "XN--CZRU2D",
      "XN--D1ACJ3B",
      "XN--D1ALF",
      "XN--E1A4C",
      "XN--ECKVDTC9D",
      "XN--EFVY88H",
      "XN--FCT429K",
      "XN--FHBEI",
      "XN--FIQ228C5HS",
      "XN--FIQ64B",
      "XN--FIQS8S",
      "XN--FIQZ9S",
      "XN--FJQ720A",
      "XN--FLW351E",
      "XN--FPCRJ9C3D",
      "XN--FZC2C9E2C",
      "XN--FZYS8D69UVGM",
      "XN--G2XX48C",
      "XN--GCKR3F0F",
      "XN--GECRJ9C",
      "XN--GK3AT1E",
      "XN--H2BREG3EVE",
      "XN--H2BRJ9C",
      "XN--H2BRJ9C8C",
      "XN--HXT814E",
      "XN--I1B6B1A6A2E",
      "XN--IMR513N",
      "XN--IO0A7I",
      "XN--J1AEF",
      "XN--J1AMH",
      "XN--J6W193G",
      "XN--JLQ480N2RG",
      "XN--JVR189M",
      "XN--KCRX77D1X4A",
      "XN--KPRW13D",
      "XN--KPRY57D",
      "XN--KPUT3I",
      "XN--L1ACC",
      "XN--LGBBAT1AD8J",
      "XN--MGB9AWBF",
      "XN--MGBA3A3EJT",
      "XN--MGBA3A4F16A",
      "XN--MGBA7C0BBN0A",
      "XN--MGBAAM7A8H",
      "XN--MGBAB2BD",
      "XN--MGBAH1A3HJKRD",
      "XN--MGBAI9AZGQP6J",
      "XN--MGBAYH7GPA",
      "XN--MGBBH1A",
      "XN--MGBBH1A71E",
      "XN--MGBC0A9AZCG",
      "XN--MGBCA7DZDO",
      "XN--MGBCPQ6GPA1A",
      "XN--MGBERP4A5D4AR",
      "XN--MGBGU82A",
      "XN--MGBI4ECEXP",
      "XN--MGBPL2FH",
      "XN--MGBT3DHD",
      "XN--MGBTX2B",
      "XN--MGBX4CD0AB",
      "XN--MIX891F",
      "XN--MK1BU44C",
      "XN--MXTQ1M",
      "XN--NGBC5AZD",
      "XN--NGBE9E0A",
      "XN--NGBRX",
      "XN--NODE",
      "XN--NQV7F",
      "XN--NQV7FS00EMA",
      "XN--NYQY26A",
      "XN--O3CW4H",
      "XN--OGBPF8FL",
      "XN--OTU796D",
      "XN--P1ACF",
      "XN--P1AI",
      "XN--PGBS0DH",
      "XN--PSSY2U",
      "XN--Q7CE6A",
      "XN--Q9JYB4C",
      "XN--QCKA1PMC",
      "XN--QXA6A",
      "XN--QXAM",
      "XN--RHQV96G",
      "XN--ROVU88B",
      "XN--RVC1E0AM3E",
      "XN--S9BRJ9C",
      "XN--SES554G",
      "XN--T60B56A",
      "XN--TCKWE",
      "XN--TIQ49XQYJ",
      "XN--UNUP4Y",
      "XN--VERMGENSBERATER-CTB",
      "XN--VERMGENSBERATUNG-PWB",
      "XN--VHQUV",
      "XN--VUQ861B",
      "XN--W4R85EL8FHU5DNRA",
      "XN--W4RS40L",
      "XN--WGBH1C",
      "XN--WGBL6A",
      "XN--XHQ521B",
      "XN--XKC2AL3HYE2A",
      "XN--XKC2DL3A5EE0H",
      "XN--Y9A3AQ",
      "XN--YFRO4I67O",
      "XN--YGBI2AMMX",
      "XN--ZFR164B",
      "XXX",
      "XYZ",
      "YACHTS",
      "YAHOO",
      "YAMAXUN",
      "YANDEX",
      "YE",
      "YODOBASHI",
      "YOGA",
      "YOKOHAMA",
      "YOU",
      "YOUTUBE",
      "YT",
      "YUN",
      "ZA",
      "ZAPPOS",
      "ZARA",
      "ZERO",
      "ZIP",
      "ZM",
      "ZONE",
      "ZUERICH",
      "ZW"
    ];
  }
});

// node_modules/@hapi/tlds/dist/commonjs/index.js
var require_commonjs = __commonJS({
  "node_modules/@hapi/tlds/dist/commonjs/index.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.tlds = void 0;
    var tlds_js_1 = require_tlds();
    exports2.tlds = new Set(tlds_js_1.TLDS.map((tld) => tld.toLowerCase()));
  }
});

// node_modules/joi/lib/types/string.js
var require_string = __commonJS({
  "node_modules/joi/lib/types/string.js"(exports2, module2) {
    "use strict";
    var { assert, escapeRegex } = require_lib();
    var { isDomainValid, isEmailValid, ipRegex, uriRegex } = require_dist4();
    var Tlds = require_commonjs();
    var Any = require_any();
    var Common = require_common2();
    var internals = {
      tlds: Tlds.tlds instanceof Set ? { tlds: { allow: Tlds.tlds, deny: null } } : false,
      // $lab:coverage:ignore$
      base64Regex: {
        // paddingRequired
        true: {
          // urlSafe
          true: /^(?:[\w\-]{2}[\w\-]{2})*(?:[\w\-]{2}==|[\w\-]{3}=)?$/,
          false: /^(?:[A-Za-z0-9+\/]{2}[A-Za-z0-9+\/]{2})*(?:[A-Za-z0-9+\/]{2}==|[A-Za-z0-9+\/]{3}=)?$/
        },
        false: {
          true: /^(?:[\w\-]{2}[\w\-]{2})*(?:[\w\-]{2}(==)?|[\w\-]{3}=?)?$/,
          false: /^(?:[A-Za-z0-9+\/]{2}[A-Za-z0-9+\/]{2})*(?:[A-Za-z0-9+\/]{2}(==)?|[A-Za-z0-9+\/]{3}=?)?$/
        }
      },
      dataUriRegex: /^data:[\w+.-]+\/[\w+.-]+;((charset=[\w-]+|base64),)?(.*)$/,
      hexRegex: {
        withPrefix: /^0x[0-9a-f]+$/i,
        withOptionalPrefix: /^(?:0x)?[0-9a-f]+$/i,
        withoutPrefix: /^[0-9a-f]+$/i
      },
      ipRegex: ipRegex({ cidr: "forbidden" }).regex,
      isoDurationRegex: /^P(?!$)(\d+Y)?(\d+M)?(\d+W)?(\d+D)?(T(?=\d)(\d+H)?(\d+M)?(\d+S)?)?$/,
      guidBrackets: {
        "{": "}",
        "[": "]",
        "(": ")",
        "": ""
      },
      guidVersions: {
        uuidv1: "1",
        uuidv2: "2",
        uuidv3: "3",
        uuidv4: "4",
        uuidv5: "5",
        uuidv6: "6",
        uuidv7: "7",
        uuidv8: "8"
      },
      guidSeparators: /* @__PURE__ */ new Set([void 0, true, false, "-", ":"]),
      normalizationForms: ["NFC", "NFD", "NFKC", "NFKD"]
    };
    module2.exports = Any.extend({
      type: "string",
      flags: {
        insensitive: { default: false },
        truncate: { default: false }
      },
      terms: {
        replacements: { init: null }
      },
      coerce: {
        from: "string",
        method(value, { schema, state, prefs }) {
          const normalize = schema.$_getRule("normalize");
          if (normalize) {
            value = value.normalize(normalize.args.form);
          }
          const casing = schema.$_getRule("case");
          if (casing) {
            value = casing.args.direction === "upper" ? value.toLocaleUpperCase() : value.toLocaleLowerCase();
          }
          const trim2 = schema.$_getRule("trim");
          if (trim2 && trim2.args.enabled) {
            value = value.trim();
          }
          if (schema.$_terms.replacements) {
            for (const replacement of schema.$_terms.replacements) {
              value = value.replace(replacement.pattern, replacement.replacement);
            }
          }
          const hex = schema.$_getRule("hex");
          if (hex && hex.args.options.byteAligned && value.length % 2 !== 0) {
            value = `0${value}`;
          }
          if (schema.$_getRule("isoDate")) {
            const iso = internals.isoDate(value);
            if (iso) {
              value = iso;
            }
          }
          if (schema._flags.truncate) {
            const rule = schema.$_getRule("max");
            if (rule) {
              let limit = rule.args.limit;
              if (Common.isResolvable(limit)) {
                limit = limit.resolve(value, state, prefs);
                if (!Common.limit(limit)) {
                  return { value, errors: schema.$_createError("any.ref", limit, { ref: rule.args.limit, arg: "limit", reason: "must be a positive integer" }, state, prefs) };
                }
              }
              value = value.slice(0, limit);
            }
          }
          return { value };
        }
      },
      validate(value, { schema, error }) {
        if (typeof value !== "string") {
          return { value, errors: error("string.base") };
        }
        if (value === "") {
          const min = schema.$_getRule("min");
          if (min && min.args.limit === 0) {
            return;
          }
          return { value, errors: error("string.empty") };
        }
      },
      jsonSchema(schema, res, mode, options) {
        const noEmpty = !schema._valids?.has("") && !schema._flags.only;
        if (noEmpty) {
          const min = schema.$_getRule("min");
          const length = schema.$_getRule("length");
          if ((!min || min.args.limit > 0) && (!length || length.args.limit > 0)) {
            res.minLength = 1;
          }
        }
        return res;
      },
      rules: {
        alphanum: {
          method() {
            return this.$_addRule("alphanum");
          },
          validate(value, helpers) {
            if (/^[a-zA-Z0-9]+$/.test(value)) {
              return value;
            }
            return helpers.error("string.alphanum");
          }
        },
        base64: {
          method(options = {}) {
            Common.assertOptions(options, ["paddingRequired", "urlSafe"]);
            options = { urlSafe: false, paddingRequired: true, ...options };
            assert(typeof options.paddingRequired === "boolean", "paddingRequired must be boolean");
            assert(typeof options.urlSafe === "boolean", "urlSafe must be boolean");
            return this.$_addRule({ name: "base64", args: { options } });
          },
          validate(value, helpers, { options }) {
            const regex = internals.base64Regex[options.paddingRequired][options.urlSafe];
            if (regex.test(value)) {
              return value;
            }
            return helpers.error("string.base64");
          },
          jsonSchema(rule, res) {
            res.format = "base64";
            return res;
          }
        },
        case: {
          method(direction) {
            assert(["lower", "upper"].includes(direction), "Invalid case:", direction);
            return this.$_addRule({ name: "case", args: { direction } });
          },
          validate(value, helpers, { direction }) {
            if (direction === "lower" && value === value.toLocaleLowerCase() || direction === "upper" && value === value.toLocaleUpperCase()) {
              return value;
            }
            return helpers.error(`string.${direction}case`);
          },
          convert: true
        },
        creditCard: {
          method() {
            return this.$_addRule("creditCard");
          },
          validate(value, helpers) {
            let i = value.length;
            let sum = 0;
            let mul = 1;
            while (i--) {
              const char = value.charAt(i) * mul;
              sum = sum + (char - (char > 9) * 9);
              mul = mul ^ 3;
            }
            if (sum > 0 && sum % 10 === 0) {
              return value;
            }
            return helpers.error("string.creditCard");
          }
        },
        dataUri: {
          method(options = {}) {
            Common.assertOptions(options, ["paddingRequired"]);
            options = { paddingRequired: true, ...options };
            assert(typeof options.paddingRequired === "boolean", "paddingRequired must be boolean");
            return this.$_addRule({ name: "dataUri", args: { options } });
          },
          validate(value, helpers, { options }) {
            const matches = value.match(internals.dataUriRegex);
            if (matches) {
              if (!matches[2]) {
                return value;
              }
              if (matches[2] !== "base64") {
                return value;
              }
              const base64regex = internals.base64Regex[options.paddingRequired].false;
              if (base64regex.test(matches[3])) {
                return value;
              }
            }
            return helpers.error("string.dataUri");
          },
          jsonSchema(rule, res) {
            res.format = "data-uri";
            return res;
          }
        },
        domain: {
          method(options) {
            if (options) {
              Common.assertOptions(options, ["allowFullyQualified", "allowUnicode", "allowUnderscore", "maxDomainSegments", "minDomainSegments", "tlds"]);
            }
            const address = internals.addressOptions(options);
            return this.$_addRule({ name: "domain", args: { options }, address });
          },
          validate(value, helpers, args, { address }) {
            if (isDomainValid(value, address)) {
              return value;
            }
            return helpers.error("string.domain");
          }
        },
        email: {
          method(options = {}) {
            Common.assertOptions(options, ["allowFullyQualified", "allowUnicode", "allowUnderscore", "ignoreLength", "maxDomainSegments", "minDomainSegments", "multiple", "separator", "tlds"]);
            assert(options.multiple === void 0 || typeof options.multiple === "boolean", "multiple option must be an boolean");
            const address = internals.addressOptions(options);
            const regex = new RegExp(`\\s*[${options.separator ? escapeRegex(options.separator) : ","}]\\s*`);
            return this.$_addRule({ name: "email", args: { options }, regex, address });
          },
          validate(value, helpers, { options }, { regex, address }) {
            const emails = options.multiple ? value.split(regex) : [value];
            const invalids = [];
            for (const email of emails) {
              if (!isEmailValid(email, address)) {
                invalids.push(email);
              }
            }
            if (!invalids.length) {
              return value;
            }
            return helpers.error("string.email", { value, invalids });
          },
          jsonSchema(rule, res) {
            res.format = "email";
            return res;
          }
        },
        guid: {
          alias: "uuid",
          method(options = {}) {
            Common.assertOptions(options, ["version", "separator", "wrapper"]);
            assert(
              options.wrapper === void 0 || typeof options.wrapper === "boolean" || typeof options.wrapper === "string" && typeof internals.guidBrackets[options.wrapper] === "string",
              `"wrapper" must be true, false, or one of "${Object.keys(internals.guidBrackets).filter(Boolean).join('", "')}"`
            );
            let versionNumbers = "";
            if (options.version) {
              const versions = [].concat(options.version);
              assert(versions.length >= 1, "version must have at least 1 valid version specified");
              const set = /* @__PURE__ */ new Set();
              for (let i = 0; i < versions.length; ++i) {
                const version = versions[i];
                assert(typeof version === "string", "version at position " + i + " must be a string");
                const versionNumber = internals.guidVersions[version.toLowerCase()];
                assert(versionNumber, "version at position " + i + " must be one of " + Object.keys(internals.guidVersions).join(", "));
                assert(!set.has(versionNumber), "version at position " + i + " must not be a duplicate");
                versionNumbers += versionNumber;
                set.add(versionNumber);
              }
            }
            assert(internals.guidSeparators.has(options.separator), 'separator must be one of true, false, "-", or ":"');
            const separator = options.separator === void 0 ? "[:-]?" : options.separator === true ? "[:-]" : options.separator === false ? "[]?" : `\\${options.separator}`;
            let wrapperStart;
            let wrapperEnd;
            if (options.wrapper === void 0) {
              wrapperStart = "[\\[{\\(]?";
              wrapperEnd = "[\\]}\\)]?";
            } else if (options.wrapper === true) {
              wrapperStart = "[\\[{\\(]";
              wrapperEnd = "[\\]}\\)]";
            } else if (options.wrapper === false) {
              wrapperStart = "";
              wrapperEnd = "";
            } else {
              wrapperStart = escapeRegex(options.wrapper);
              wrapperEnd = escapeRegex(internals.guidBrackets[options.wrapper]);
            }
            const regex = new RegExp(
              `^(${wrapperStart})[0-9A-F]{8}(${separator})[0-9A-F]{4}\\2?[${versionNumbers || "0-9A-F"}][0-9A-F]{3}\\2?[${versionNumbers ? "89AB" : "0-9A-F"}][0-9A-F]{3}\\2?[0-9A-F]{12}(${wrapperEnd})$`,
              "i"
            );
            return this.$_addRule({ name: "guid", args: { options }, regex });
          },
          validate(value, helpers, args, { regex }) {
            const results = regex.exec(value);
            if (!results) {
              return helpers.error("string.guid");
            }
            const open = results[1];
            const close = results[results.length - 1];
            if ((open || close) && internals.guidBrackets[open] !== close) {
              return helpers.error("string.guid");
            }
            return value;
          },
          jsonSchema(rule, res) {
            res.format = "uuid";
            return res;
          }
        },
        hex: {
          method(options = {}) {
            Common.assertOptions(options, ["byteAligned", "prefix"]);
            options = { byteAligned: false, prefix: false, ...options };
            assert(typeof options.byteAligned === "boolean", "byteAligned must be boolean");
            assert(typeof options.prefix === "boolean" || options.prefix === "optional", 'prefix must be boolean or "optional"');
            return this.$_addRule({ name: "hex", args: { options } });
          },
          validate(value, helpers, { options }) {
            const re = options.prefix === "optional" ? internals.hexRegex.withOptionalPrefix : options.prefix === true ? internals.hexRegex.withPrefix : internals.hexRegex.withoutPrefix;
            if (!re.test(value)) {
              return helpers.error("string.hex");
            }
            if (options.byteAligned && value.length % 2 !== 0) {
              return helpers.error("string.hexAlign");
            }
            return value;
          },
          jsonSchema(rule, res) {
            res.format = "hex";
            return res;
          }
        },
        hostname: {
          method() {
            return this.$_addRule("hostname");
          },
          validate(value, helpers) {
            if (isDomainValid(value, { minDomainSegments: 1 }) || internals.ipRegex.test(value)) {
              return value;
            }
            return helpers.error("string.hostname");
          },
          jsonSchema(rule, res) {
            res.format = "hostname";
            return res;
          }
        },
        insensitive: {
          method() {
            return this.$_setFlag("insensitive", true);
          }
        },
        ip: {
          method(options = {}) {
            Common.assertOptions(options, ["cidr", "version"]);
            const { cidr, versions, regex } = ipRegex(options);
            const version = options.version ? versions : void 0;
            return this.$_addRule({ name: "ip", args: { options: { cidr, version } }, regex });
          },
          validate(value, helpers, { options }, { regex }) {
            if (regex.test(value)) {
              return value;
            }
            if (options.version) {
              return helpers.error("string.ipVersion", { value, cidr: options.cidr, version: options.version });
            }
            return helpers.error("string.ip", { value, cidr: options.cidr });
          },
          jsonSchema(rule, res) {
            const version = rule.args.options.version;
            if (version && version.length === 1) {
              res.format = version[0];
            } else {
              res.format = "ip";
            }
            return res;
          }
        },
        isoDate: {
          method() {
            return this.$_addRule("isoDate");
          },
          validate(value, { error }) {
            if (internals.isoDate(value)) {
              return value;
            }
            return error("string.isoDate");
          },
          jsonSchema(rule, res) {
            res.format = "date-time";
            return res;
          }
        },
        isoDuration: {
          method() {
            return this.$_addRule("isoDuration");
          },
          validate(value, helpers) {
            if (internals.isoDurationRegex.test(value)) {
              return value;
            }
            return helpers.error("string.isoDuration");
          },
          jsonSchema(rule, res) {
            res.format = "duration";
            return res;
          }
        },
        length: {
          method(limit, encoding) {
            return internals.length(this, "length", limit, "=", encoding);
          },
          validate(value, helpers, { limit, encoding }, { name, operator, args }) {
            const length = encoding ? Buffer && Buffer.byteLength(value, encoding) : value.length;
            if (Common.compare(length, limit, operator)) {
              return value;
            }
            return helpers.error("string." + name, { limit: args.limit, value, encoding });
          },
          jsonSchema(rule, res) {
            res.minLength = rule.args.limit;
            res.maxLength = rule.args.limit;
            return res;
          },
          args: [
            {
              name: "limit",
              ref: true,
              assert: Common.limit,
              message: "must be a positive integer"
            },
            "encoding"
          ]
        },
        lowercase: {
          method() {
            return this.case("lower");
          }
        },
        max: {
          method(limit, encoding) {
            return internals.length(this, "max", limit, "<=", encoding);
          },
          jsonSchema(rule, res) {
            res.maxLength = rule.args.limit;
            return res;
          },
          args: ["limit", "encoding"]
        },
        min: {
          method(limit, encoding) {
            return internals.length(this, "min", limit, ">=", encoding);
          },
          jsonSchema(rule, res) {
            if (rule.args.limit > 0) {
              res.minLength = rule.args.limit;
            }
            return res;
          },
          args: ["limit", "encoding"]
        },
        normalize: {
          method(form = "NFC") {
            assert(internals.normalizationForms.includes(form), "normalization form must be one of " + internals.normalizationForms.join(", "));
            return this.$_addRule({ name: "normalize", args: { form } });
          },
          validate(value, { error }, { form }) {
            if (value === value.normalize(form)) {
              return value;
            }
            return error("string.normalize", { value, form });
          },
          convert: true
        },
        pattern: {
          alias: "regex",
          method(regex, options = {}) {
            assert(regex instanceof RegExp, "regex must be a RegExp");
            assert(!regex.flags.includes("g") && !regex.flags.includes("y"), "regex should not use global or sticky mode");
            if (typeof options === "string") {
              options = { name: options };
            }
            Common.assertOptions(options, ["invert", "name"]);
            const errorCode = ["string.pattern", options.invert ? ".invert" : "", options.name ? ".name" : ".base"].join("");
            return this.$_addRule({ name: "pattern", args: { regex, options }, errorCode });
          },
          validate(value, helpers, { regex, options }, { errorCode }) {
            const patternMatch = regex.test(value);
            if (patternMatch ^ options.invert) {
              return value;
            }
            return helpers.error(errorCode, { name: options.name, regex, value });
          },
          jsonSchema(rule, res) {
            const pattern = rule.args.regex.source;
            if (res.allOf) {
              res.allOf.push({ pattern });
            } else if (res.pattern !== void 0) {
              res.allOf = [{ pattern: res.pattern }, { pattern }];
              delete res.pattern;
            } else {
              res.pattern = pattern;
            }
            return res;
          },
          args: ["regex", "options"],
          multi: true
        },
        replace: {
          method(pattern, replacement) {
            if (typeof pattern === "string") {
              pattern = new RegExp(escapeRegex(pattern), "g");
            }
            assert(pattern instanceof RegExp, "pattern must be a RegExp");
            assert(typeof replacement === "string", "replacement must be a String");
            const obj = this.clone();
            if (!obj.$_terms.replacements) {
              obj.$_terms.replacements = [];
            }
            obj.$_terms.replacements.push({ pattern, replacement });
            return obj;
          }
        },
        token: {
          method() {
            return this.$_addRule("token");
          },
          validate(value, helpers) {
            if (/^\w+$/.test(value)) {
              return value;
            }
            return helpers.error("string.token");
          },
          jsonSchema(rule, res) {
            res.format = "token";
            return res;
          }
        },
        trim: {
          method(enabled = true) {
            assert(typeof enabled === "boolean", "enabled must be a boolean");
            return this.$_addRule({ name: "trim", args: { enabled } });
          },
          validate(value, helpers, { enabled }) {
            if (!enabled || value === value.trim()) {
              return value;
            }
            return helpers.error("string.trim");
          },
          convert: true
        },
        truncate: {
          method(enabled = true) {
            assert(typeof enabled === "boolean", "enabled must be a boolean");
            return this.$_setFlag("truncate", enabled);
          }
        },
        uppercase: {
          method() {
            return this.case("upper");
          }
        },
        uri: {
          method(options = {}) {
            Common.assertOptions(options, ["allowRelative", "allowQuerySquareBrackets", "domain", "relativeOnly", "scheme", "encodeUri"]);
            if (options.domain) {
              Common.assertOptions(options.domain, ["allowFullyQualified", "allowUnicode", "maxDomainSegments", "minDomainSegments", "tlds"]);
            }
            const { regex, scheme } = uriRegex(options);
            const domain = options.domain ? internals.addressOptions(options.domain) : null;
            return this.$_addRule({ name: "uri", args: { options }, regex, domain, scheme });
          },
          validate(value, helpers, { options }, { regex, domain, scheme }) {
            if (["http:/", "https:/"].includes(value)) {
              return helpers.error("string.uri");
            }
            let match = regex.exec(value);
            if (!match && helpers.prefs.convert && options.encodeUri) {
              const encoded = encodeURI(value);
              match = regex.exec(encoded);
              if (match) {
                value = encoded;
              }
            }
            if (match) {
              const matched = match[1] || match[2];
              if (domain && (!options.allowRelative || matched) && !isDomainValid(matched, domain)) {
                return helpers.error("string.domain", { value: matched });
              }
              return value;
            }
            if (options.relativeOnly) {
              return helpers.error("string.uriRelativeOnly");
            }
            if (options.scheme) {
              return helpers.error("string.uriCustomScheme", { scheme, value });
            }
            return helpers.error("string.uri");
          },
          jsonSchema(rule, res) {
            res.format = "uri";
            return res;
          }
        }
      },
      manifest: {
        build(obj, desc) {
          if (desc.replacements) {
            for (const { pattern, replacement } of desc.replacements) {
              obj = obj.replace(pattern, replacement);
            }
          }
          return obj;
        }
      },
      messages: {
        "string.alphanum": "{{#label}} must only contain alpha-numeric characters",
        "string.base": "{{#label}} must be a string",
        "string.base64": "{{#label}} must be a valid base64 string",
        "string.creditCard": "{{#label}} must be a credit card",
        "string.dataUri": "{{#label}} must be a valid dataUri string",
        "string.domain": "{{#label}} must contain a valid domain name",
        "string.email": "{{#label}} must be a valid email",
        "string.empty": "{{#label}} is not allowed to be empty",
        "string.guid": "{{#label}} must be a valid GUID",
        "string.hex": "{{#label}} must only contain hexadecimal characters",
        "string.hexAlign": "{{#label}} hex decoded representation must be byte aligned",
        "string.hostname": "{{#label}} must be a valid hostname",
        "string.ip": "{{#label}} must be a valid ip address with a {{#cidr}} CIDR",
        "string.ipVersion": "{{#label}} must be a valid ip address of one of the following versions {{#version}} with a {{#cidr}} CIDR",
        "string.isoDate": "{{#label}} must be in iso format",
        "string.isoDuration": "{{#label}} must be a valid ISO 8601 duration",
        "string.length": "{{#label}} length must be {{#limit}} characters long",
        "string.lowercase": "{{#label}} must only contain lowercase characters",
        "string.max": "{{#label}} length must be less than or equal to {{#limit}} characters long",
        "string.min": "{{#label}} length must be at least {{#limit}} characters long",
        "string.normalize": "{{#label}} must be unicode normalized in the {{#form}} form",
        "string.token": "{{#label}} must only contain alpha-numeric and underscore characters",
        "string.pattern.base": "{{#label}} with value {:[.]} fails to match the required pattern: {{#regex}}",
        "string.pattern.name": "{{#label}} with value {:[.]} fails to match the {{#name}} pattern",
        "string.pattern.invert.base": "{{#label}} with value {:[.]} matches the inverted pattern: {{#regex}}",
        "string.pattern.invert.name": "{{#label}} with value {:[.]} matches the inverted {{#name}} pattern",
        "string.trim": "{{#label}} must not have leading or trailing whitespace",
        "string.uri": "{{#label}} must be a valid uri",
        "string.uriCustomScheme": "{{#label}} must be a valid uri with a scheme matching the {{#scheme}} pattern",
        "string.uriRelativeOnly": "{{#label}} must be a valid relative uri",
        "string.uppercase": "{{#label}} must only contain uppercase characters"
      }
    });
    internals.addressOptions = function(options) {
      if (!options) {
        return internals.tlds || options;
      }
      assert(options.minDomainSegments === void 0 || Number.isSafeInteger(options.minDomainSegments) && options.minDomainSegments > 0, "minDomainSegments must be a positive integer");
      assert(options.maxDomainSegments === void 0 || Number.isSafeInteger(options.maxDomainSegments) && options.maxDomainSegments > 0, "maxDomainSegments must be a positive integer");
      if (options.tlds === false) {
        return options;
      }
      if (options.tlds === true || options.tlds === void 0) {
        assert(internals.tlds, "Built-in TLD list disabled");
        return Object.assign({}, options, internals.tlds);
      }
      assert(typeof options.tlds === "object", "tlds must be true, false, or an object");
      const deny = options.tlds.deny;
      if (deny) {
        if (Array.isArray(deny)) {
          options = Object.assign({}, options, { tlds: { deny: new Set(deny) } });
        }
        assert(options.tlds.deny instanceof Set, "tlds.deny must be an array, Set, or boolean");
        assert(!options.tlds.allow, "Cannot specify both tlds.allow and tlds.deny lists");
        internals.validateTlds(options.tlds.deny, "tlds.deny");
        return options;
      }
      const allow = options.tlds.allow;
      if (!allow) {
        return { ...options, tlds: false };
      }
      if (allow === true) {
        assert(internals.tlds, "Built-in TLD list disabled");
        return Object.assign({}, options, internals.tlds);
      }
      if (Array.isArray(allow)) {
        options = Object.assign({}, options, { tlds: { allow: new Set(allow) } });
      }
      assert(options.tlds.allow instanceof Set, "tlds.allow must be an array, Set, or boolean");
      internals.validateTlds(options.tlds.allow, "tlds.allow");
      return options;
    };
    internals.validateTlds = function(set, source) {
      for (const tld of set) {
        assert(isDomainValid(tld, { minDomainSegments: 1, maxDomainSegments: 1 }), `${source} must contain valid top level domain names`);
      }
    };
    internals.isoDate = function(value) {
      if (!Common.isIsoDate(value)) {
        return null;
      }
      if (/T.*[+-]\d\d$/.test(value)) {
        value += ":00";
      }
      const date = new Date(value);
      if (isNaN(date.getTime())) {
        return null;
      }
      return date.toISOString();
    };
    internals.length = function(schema, name, limit, operator, encoding) {
      assert(!encoding || Buffer && Buffer.isEncoding(encoding), "Invalid encoding:", encoding);
      return schema.$_addRule({ name, method: "length", args: { limit, encoding }, operator });
    };
  }
});

// node_modules/joi/lib/types/symbol.js
var require_symbol = __commonJS({
  "node_modules/joi/lib/types/symbol.js"(exports2, module2) {
    "use strict";
    var { assert } = require_lib();
    var Any = require_any();
    var internals = {};
    internals.Map = class extends Map {
      slice() {
        return new internals.Map(this);
      }
    };
    module2.exports = Any.extend({
      type: "symbol",
      terms: {
        map: { init: new internals.Map() }
      },
      coerce: {
        method(value, { schema, error }) {
          const lookup = schema.$_terms.map.get(value);
          if (lookup) {
            value = lookup;
          }
          if (!schema._flags.only || typeof value === "symbol") {
            return { value };
          }
          return { value, errors: error("symbol.map", { map: schema.$_terms.map }) };
        }
      },
      validate(value, { error }) {
        if (typeof value !== "symbol") {
          return { value, errors: error("symbol.base") };
        }
      },
      rules: {
        map: {
          method(iterable) {
            if (iterable && !iterable[Symbol.iterator] && typeof iterable === "object") {
              iterable = Object.entries(iterable);
            }
            assert(iterable && iterable[Symbol.iterator], "Iterable must be an iterable or object");
            const obj = this.clone();
            const symbols = [];
            for (const entry of iterable) {
              assert(entry && entry[Symbol.iterator], "Entry must be an iterable");
              const [key, value] = entry;
              assert(typeof key !== "object" && typeof key !== "function" && typeof key !== "symbol", "Key must not be of type object, function, or Symbol");
              assert(typeof value === "symbol", "Value must be a Symbol");
              obj.$_terms.map.set(key, value);
              symbols.push(value);
            }
            return obj.valid(...symbols);
          }
        }
      },
      manifest: {
        build(obj, desc) {
          if (desc.map) {
            obj = obj.map(desc.map);
          }
          return obj;
        }
      },
      jsonSchema(schema, json, mode, options) {
        const map = schema.$_terms.map;
        if (!map.size) {
          return {};
        }
        return {
          anyOf: Array.from(map.keys()).map((key) => ({ const: key }))
        };
      },
      messages: {
        "symbol.base": "{{#label}} must be a symbol",
        "symbol.map": "{{#label}} must be one of {{#map}}"
      }
    });
  }
});

// node_modules/joi/lib/types/binary.js
var require_binary = __commonJS({
  "node_modules/joi/lib/types/binary.js"(exports2, module2) {
    "use strict";
    var { assert } = require_lib();
    var Any = require_any();
    var Common = require_common2();
    module2.exports = Any.extend({
      type: "binary",
      coerce: {
        from: ["string", "object"],
        method(value, { schema }) {
          if (typeof value === "string" || value !== null && value.type === "Buffer") {
            try {
              return { value: Buffer.from(value, schema._flags.encoding) };
            } catch {
            }
          }
        }
      },
      validate(value, { error }) {
        if (!Buffer.isBuffer(value)) {
          return { value, errors: error("binary.base") };
        }
      },
      jsonSchema(schema, res, mode, options) {
        res.type = "string";
        res.format = "binary";
        return res;
      },
      rules: {
        encoding: {
          method(encoding) {
            assert(Buffer.isEncoding(encoding), "Invalid encoding:", encoding);
            return this.$_setFlag("encoding", encoding);
          }
        },
        length: {
          method(limit) {
            return this.$_addRule({ name: "length", method: "length", args: { limit }, operator: "=" });
          },
          validate(value, helpers, { limit }, { name, operator, args }) {
            if (Common.compare(value.length, limit, operator)) {
              return value;
            }
            return helpers.error("binary." + name, { limit: args.limit, value });
          },
          jsonSchema(rule, res) {
            res.minLength = rule.args.limit;
            res.maxLength = rule.args.limit;
            return res;
          },
          args: [
            {
              name: "limit",
              ref: true,
              assert: Common.limit,
              message: "must be a positive integer"
            }
          ]
        },
        max: {
          method(limit) {
            return this.$_addRule({ name: "max", method: "length", args: { limit }, operator: "<=" });
          },
          jsonSchema(rule, res) {
            res.maxLength = rule.args.limit;
            return res;
          }
        },
        min: {
          method(limit) {
            return this.$_addRule({ name: "min", method: "length", args: { limit }, operator: ">=" });
          },
          jsonSchema(rule, res) {
            res.minLength = rule.args.limit;
            return res;
          }
        }
      },
      cast: {
        string: {
          from: (value) => Buffer.isBuffer(value),
          to(value, helpers) {
            return value.toString();
          }
        }
      },
      messages: {
        "binary.base": "{{#label}} must be a buffer or a string",
        "binary.length": "{{#label}} must be {{#limit}} bytes",
        "binary.max": "{{#label}} must be less than or equal to {{#limit}} bytes",
        "binary.min": "{{#label}} must be at least {{#limit}} bytes"
      }
    });
  }
});

// node_modules/joi/lib/index.js
var require_lib5 = __commonJS({
  "node_modules/joi/lib/index.js"(exports2, module2) {
    "use strict";
    var { assert, clone } = require_lib();
    var Cache = require_cache();
    var Common = require_common2();
    var Compile = require_compile();
    var Errors = require_errors();
    var Extend = require_extend();
    var Manifest = require_manifest();
    var Ref = require_ref2();
    var Template = require_template();
    var Trace = require_trace();
    var Schemas2;
    var internals = {
      types: {
        alternatives: require_alternatives(),
        any: require_any(),
        array: require_array(),
        boolean: require_boolean(),
        date: require_date(),
        function: require_function(),
        link: require_link(),
        number: require_number(),
        object: require_object(),
        string: require_string(),
        symbol: require_symbol()
      },
      aliases: {
        alt: "alternatives",
        bool: "boolean",
        func: "function"
      }
    };
    if (Buffer) {
      internals.types.binary = require_binary();
    }
    internals.root = function() {
      const root = {
        _types: new Set(Object.keys(internals.types))
      };
      for (const type of root._types) {
        root[type] = function(...args) {
          assert(!args.length || ["alternatives", "link", "object"].includes(type), "The", type, "type does not allow arguments");
          return internals.generate(this, internals.types[type], args);
        };
      }
      for (const method of ["allow", "custom", "disallow", "equal", "exist", "forbidden", "invalid", "not", "only", "optional", "options", "prefs", "preferences", "required", "strip", "valid", "when"]) {
        root[method] = function(...args) {
          return this.any()[method](...args);
        };
      }
      Object.assign(root, internals.methods);
      for (const alias of Object.keys(internals.aliases)) {
        const target = internals.aliases[alias];
        root[alias] = root[target];
      }
      root.x = root.expression;
      if (Trace.setup) {
        Trace.setup(root);
      }
      return root;
    };
    internals.methods = {
      ValidationError: Errors.ValidationError,
      version: Common.version,
      cache: Cache.provider,
      assert(value, schema, ...args) {
        internals.assert(value, schema, true, args);
      },
      attempt(value, schema, ...args) {
        return internals.assert(value, schema, false, args);
      },
      build(desc) {
        assert(typeof Manifest.build === "function", "Manifest functionality disabled");
        return Manifest.build(this, desc);
      },
      checkPreferences(prefs) {
        Common.checkPreferences(prefs);
      },
      compile(schema, options) {
        return Compile.compile(this, schema, options);
      },
      defaults(modifier) {
        assert(typeof modifier === "function", "modifier must be a function");
        const joi = Object.assign({}, this);
        for (const type of joi._types) {
          const schema = modifier(joi[type]());
          assert(Common.isSchema(schema), "modifier must return a valid schema object");
          joi[type] = function(...args) {
            return internals.generate(this, schema, args);
          };
        }
        return joi;
      },
      expression(...args) {
        return new Template(...args);
      },
      extend(...extensions) {
        Common.verifyFlat(extensions, "extend");
        Schemas2 = Schemas2 || require_schemas();
        assert(extensions.length, "You need to provide at least one extension");
        this.assert(extensions, Schemas2.extensions);
        const joi = Object.assign({}, this);
        joi._types = new Set(joi._types);
        for (let extension of extensions) {
          if (typeof extension === "function") {
            extension = extension(joi);
          }
          this.assert(extension, Schemas2.extension);
          const expanded = internals.expandExtension(extension, joi);
          for (const item of expanded) {
            assert(joi[item.type] === void 0 || joi._types.has(item.type), "Cannot override name", item.type);
            const base = item.base || this.any();
            const schema = Extend.type(base, item);
            joi._types.add(item.type);
            joi[item.type] = function(...args) {
              return internals.generate(this, schema, args);
            };
          }
        }
        return joi;
      },
      isError: Errors.ValidationError.isError,
      isExpression: Template.isTemplate,
      isRef: Ref.isRef,
      isSchema: Common.isSchema,
      in(...args) {
        return Ref.in(...args);
      },
      override: Common.symbols.override,
      ref(...args) {
        return Ref.create(...args);
      },
      types() {
        const types = {};
        for (const type of this._types) {
          types[type] = this[type]();
        }
        for (const target of Object.keys(internals.aliases)) {
          types[target] = this[target]();
        }
        return types;
      }
    };
    internals.assert = function(value, schema, annotate, args) {
      const message = args[0] instanceof Error || typeof args[0] === "string" ? args[0] : null;
      const options = message !== null ? args[1] : args[0];
      const result = schema.validate(value, Common.preferences({ errors: { stack: true } }, options || {}));
      let error = result.error;
      if (!error) {
        return result.value;
      }
      if (message instanceof Error) {
        throw message;
      }
      const display = annotate && typeof error.annotate === "function" ? error.annotate() : error.message;
      if (error instanceof Errors.ValidationError === false) {
        error = clone(error);
      }
      error.message = message ? `${message} ${display}` : display;
      throw error;
    };
    internals.generate = function(root, schema, args) {
      assert(root, "Must be invoked on a Joi instance.");
      schema.$_root = root;
      if (!schema._definition.args || !args.length) {
        return schema;
      }
      return schema._definition.args(schema, ...args);
    };
    internals.expandExtension = function(extension, joi) {
      if (typeof extension.type === "string") {
        return [extension];
      }
      const extended = [];
      for (const type of joi._types) {
        if (extension.type.test(type)) {
          const item = Object.assign({}, extension);
          item.type = type;
          item.base = joi[type]();
          extended.push(item);
        }
      }
      return extended;
    };
    module2.exports = internals.root();
  }
});

// src/index.ts
var import_node_path3 = __toESM(require("node:path"));
var import_dotenv = __toESM(require_dist());

// src/config.ts
var import_node_os = __toESM(require("node:os"));
var import_node_path = __toESM(require("node:path"));
var DEFAULT_SEFAZ_URL = "https://www.sefaz.rs.gov.br/ASP/AAE_ROOT/NFE/SAT-WEB-NFE-NFC_2.asp";
var DEFAULT_CNPJ_API_URL = "https://brasilapi.com.br/api/cnpj/v1/";
var DEFAULT_CACHE_TTL_DAYS = 30;
function numberFromEnv(name, fallback) {
  const parsed = Number(process.env[name]);
  return Number.isFinite(parsed) && parsed > 0 ? parsed : fallback;
}
var Config = {
  get SefazUrl() {
    return process.env.SEFAZ_URL || DEFAULT_SEFAZ_URL;
  },
  get TimeoutMs() {
    return numberFromEnv("SEFAZ_TIMEOUT_MS", 15e3);
  },
  get Concurrency() {
    return numberFromEnv("CLI_CONCURRENCY", 3);
  },
  get CnpjApiUrl() {
    const url2 = process.env.CNPJ_API_URL || DEFAULT_CNPJ_API_URL;
    return url2.endsWith("/") ? url2 : `${url2}/`;
  },
  /** `CNPJ_LOOKUP=off` (ou `false`/`0`) desliga a consulta e mantém só a razão social. */
  get CnpjLookupEnabled() {
    return !isOff(process.env.CNPJ_LOOKUP);
  },
  /**
   * `CNPJ_CACHE=off` desliga o cache em disco.
   *
   * O cache existe porque `scan` e `full` são processos separados: sem ele, decidir no meio do
   * fluxo custaria duas consultas por CNPJ em vez de uma. Não é otimização, é o que torna o
   * fluxo de dois passos viável.
   */
  get CnpjCacheEnabled() {
    return !isOff(process.env.CNPJ_CACHE);
  },
  get CnpjCachePath() {
    return process.env.CNPJ_CACHE_PATH || import_node_path.default.join(import_node_os.default.homedir(), ".extrator-nfe", "cnpj.json");
  },
  /**
   * Prazo de validade das entradas. Nome fantasia e CNAE mudam raramente, mas *mudam* — e um
   * cache sem expiração esconderia uma correção de cadastro para sempre.
   */
  get CnpjCacheTtlMs() {
    return numberFromEnv("CNPJ_CACHE_TTL_DAYS", DEFAULT_CACHE_TTL_DAYS) * 24 * 60 * 60 * 1e3;
  }
};
function isOff(value) {
  return ["off", "false", "0", "no"].includes((value || "").trim().toLowerCase());
}

// src/ExtractNfeData/ExtractNfeData.ts
var import_dom_parser3 = __toESM(require_dist2());

// src/cnpj.ts
function normalizeCnpj(raw) {
  const digits = raw.replace(/\D/g, "");
  return digits.length === 14 ? digits : void 0;
}
function cnpjFromDanfe(danfe) {
  return normalizeCnpj(danfe.slice(6, 20));
}
function formatCnpj(cnpj) {
  const digits = normalizeCnpj(cnpj);
  if (!digits) {
    return cnpj;
  }
  return digits.replace(/^(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})$/, "$1.$2.$3/$4-$5");
}
function periodFromDanfe(danfe) {
  const aamm = danfe.slice(2, 6);
  if (!/^\d{4}$/.test(aamm)) {
    return void 0;
  }
  const month = Number(aamm.slice(2));
  if (month < 1 || month > 12) {
    return void 0;
  }
  return `20${aamm.slice(0, 2)}-${aamm.slice(2)}`;
}

// node_modules/axios/lib/helpers/bind.js
function bind(fn, thisArg) {
  return function wrap() {
    return fn.apply(thisArg, arguments);
  };
}

// node_modules/axios/lib/utils.js
var { toString } = Object.prototype;
var { getPrototypeOf } = Object;
var { iterator, toStringTag } = Symbol;
var hasOwnProperty = (({ hasOwnProperty: hasOwnProperty2 }) => (obj, prop) => hasOwnProperty2.call(obj, prop))(Object.prototype);
var isUnsafeObjectKey = (prop) => typeof prop === "string" && (prop === "__proto__" || prop === "constructor" || prop === "prototype");
var isPrototypeBoundary = (obj, prototype2, source) => obj === Object.prototype || !source && prototype2 === null;
var isSafeAndFullyMutable = (obj) => {
  if (!Object.isExtensible(obj)) {
    return false;
  }
  const props = Object.getOwnPropertyNames(obj);
  if (Object.getOwnPropertySymbols) {
    props.push(...Object.getOwnPropertySymbols(obj));
  }
  return props.every((prop) => {
    if (isUnsafeObjectKey(prop)) {
      return false;
    }
    const descriptor = Object.getOwnPropertyDescriptor(obj, prop);
    return !!descriptor && descriptor.configurable && descriptor.writable === true;
  });
};
var hasOwnInPrototypeChain = (thing, prop) => {
  let obj = thing;
  const seen = [];
  while (obj != null) {
    if (seen.indexOf(obj) !== -1) {
      return false;
    }
    seen.push(obj);
    const prototype2 = getPrototypeOf(obj);
    if (isPrototypeBoundary(obj, prototype2, obj === thing)) {
      return false;
    }
    if (hasOwnProperty(obj, prop)) {
      return true;
    }
    obj = prototype2;
  }
  return false;
};
var getSafeProp = (obj, prop) => obj != null && hasOwnInPrototypeChain(obj, prop) ? obj[prop] : void 0;
var toSafeFlatObject = (thing) => {
  if (thing == null || typeof thing !== "object" && typeof thing !== "function") {
    return thing;
  }
  const sourcePrototype = getPrototypeOf(thing);
  if (sourcePrototype === null && isSafeAndFullyMutable(thing)) {
    return thing;
  }
  const result = /* @__PURE__ */ Object.create(null);
  const merged = /* @__PURE__ */ Object.create(null);
  const seen = [];
  let current = thing;
  while (current != null) {
    if (seen.indexOf(current) !== -1) {
      break;
    }
    seen.push(current);
    const prototype2 = current === thing ? sourcePrototype : getPrototypeOf(current);
    if (isPrototypeBoundary(current, prototype2, current === thing)) {
      break;
    }
    const props = Object.getOwnPropertyNames(current);
    if (Object.getOwnPropertySymbols) {
      props.push(...Object.getOwnPropertySymbols(current));
    }
    for (const prop of props) {
      if (isUnsafeObjectKey(prop)) {
        continue;
      }
      if (!hasOwnProperty(merged, prop)) {
        result[prop] = thing[prop];
        merged[prop] = true;
      }
    }
    current = prototype2;
  }
  return result;
};
var kindOf = /* @__PURE__ */ ((cache) => (thing) => {
  const str = toString.call(thing);
  return cache[str] || (cache[str] = str.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null));
var kindOfTest = (type) => {
  type = type.toLowerCase();
  return (thing) => kindOf(thing) === type;
};
var typeOfTest = (type) => (thing) => typeof thing === type;
var { isArray } = Array;
var isUndefined = typeOfTest("undefined");
function isBuffer(val) {
  return val !== null && !isUndefined(val) && val.constructor !== null && !isUndefined(val.constructor) && isFunction(val.constructor.isBuffer) && val.constructor.isBuffer(val);
}
var isArrayBuffer = kindOfTest("ArrayBuffer");
function isArrayBufferView(val) {
  let result;
  if (typeof ArrayBuffer !== "undefined" && ArrayBuffer.isView) {
    result = ArrayBuffer.isView(val);
  } else {
    result = val && val.buffer && isArrayBuffer(val.buffer);
  }
  return result;
}
var isString = typeOfTest("string");
var isFunction = typeOfTest("function");
var isNumber = typeOfTest("number");
var isObject = (thing) => thing !== null && typeof thing === "object";
var isBoolean = (thing) => thing === true || thing === false;
var isPlainObject = (val) => {
  if (!isObject(val)) {
    return false;
  }
  const prototype2 = getPrototypeOf(val);
  return (prototype2 === null || prototype2 === Object.prototype || getPrototypeOf(prototype2) === null) && // Treat safe own/inherited Symbol.toStringTag or Symbol.iterator members as
  // evidence the value is tagged/iterable, while ignoring members reachable
  // only through shared or terminal prototype boundaries.
  !hasOwnInPrototypeChain(val, toStringTag) && !hasOwnInPrototypeChain(val, iterator);
};
var isEmptyObject = (val) => {
  if (!isObject(val) || isBuffer(val)) {
    return false;
  }
  try {
    return Object.keys(val).length === 0 && Object.getPrototypeOf(val) === Object.prototype;
  } catch (e) {
    return false;
  }
};
var isDate = kindOfTest("Date");
var isFile = kindOfTest("File");
var isReactNativeBlob = (value) => {
  return !!(value && typeof value.uri !== "undefined");
};
var isReactNative = (formData) => formData && typeof formData.getParts !== "undefined";
var isBlob = kindOfTest("Blob");
var isFileList = kindOfTest("FileList");
var isSet = kindOfTest("Set");
var isStream = (val) => isObject(val) && isFunction(val.pipe);
function getGlobal() {
  if (typeof globalThis !== "undefined") return globalThis;
  if (typeof self !== "undefined") return self;
  if (typeof window !== "undefined") return window;
  if (typeof global !== "undefined") return global;
  return {};
}
var G = getGlobal();
var FormDataCtor = typeof G.FormData !== "undefined" ? G.FormData : void 0;
var isFormData = (thing) => {
  if (!thing) return false;
  if (FormDataCtor && thing instanceof FormDataCtor) return true;
  const proto = getPrototypeOf(thing);
  if (!proto || proto === Object.prototype) return false;
  if (!isFunction(thing.append)) return false;
  const kind = kindOf(thing);
  return kind === "formdata" || // detect form-data instance
  kind === "object" && isFunction(thing.toString) && thing.toString() === "[object FormData]";
};
var isURLSearchParams = kindOfTest("URLSearchParams");
var [isReadableStream, isRequest, isResponse, isHeaders] = [
  "ReadableStream",
  "Request",
  "Response",
  "Headers"
].map(kindOfTest);
var trim = (str) => {
  return str.trim ? str.trim() : str.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
};
function forEach(obj, fn, { allOwnKeys = false } = {}) {
  if (obj === null || typeof obj === "undefined") {
    return;
  }
  let i;
  let l;
  if (typeof obj !== "object") {
    obj = [obj];
  }
  if (isArray(obj)) {
    for (i = 0, l = obj.length; i < l; i++) {
      fn.call(null, obj[i], i, obj);
    }
  } else {
    if (isBuffer(obj)) {
      return;
    }
    const keys = allOwnKeys ? Object.getOwnPropertyNames(obj) : Object.keys(obj);
    const len = keys.length;
    let key;
    for (i = 0; i < len; i++) {
      key = keys[i];
      fn.call(null, obj[key], key, obj);
    }
  }
}
function findKey(obj, key) {
  if (isBuffer(obj)) {
    return null;
  }
  key = key.toLowerCase();
  const keys = Object.keys(obj);
  let i = keys.length;
  let _key;
  while (i-- > 0) {
    _key = keys[i];
    if (key === _key.toLowerCase()) {
      return _key;
    }
  }
  return null;
}
var _global = (() => {
  if (typeof globalThis !== "undefined") return globalThis;
  return typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : global;
})();
var isContextDefined = (context) => !isUndefined(context) && context !== _global;
function merge(...objs) {
  const { caseless, skipUndefined } = isContextDefined(this) && this || {};
  const result = {};
  const assignValue = (val, key) => {
    if (key === "__proto__" || key === "constructor" || key === "prototype") {
      return;
    }
    const targetKey = caseless && typeof key === "string" && findKey(result, key) || key;
    const existing = hasOwnProperty(result, targetKey) ? result[targetKey] : void 0;
    if (isPlainObject(existing) && isPlainObject(val)) {
      result[targetKey] = merge(existing, val);
    } else if (isPlainObject(val)) {
      result[targetKey] = merge({}, val);
    } else if (isArray(val)) {
      result[targetKey] = val.slice();
    } else if (!skipUndefined || !isUndefined(val)) {
      result[targetKey] = val;
    }
  };
  for (let i = 0, l = objs.length; i < l; i++) {
    const source = objs[i];
    if (!source || isBuffer(source)) {
      continue;
    }
    forEach(source, assignValue);
    if (typeof source !== "object" || isArray(source)) {
      continue;
    }
    const symbols = Object.getOwnPropertySymbols(source);
    for (let j = 0; j < symbols.length; j++) {
      const symbol = symbols[j];
      if (propertyIsEnumerable.call(source, symbol)) {
        assignValue(source[symbol], symbol);
      }
    }
  }
  return result;
}
var extend = (a, b, thisArg, { allOwnKeys } = {}) => {
  forEach(
    b,
    (val, key) => {
      if (thisArg && isFunction(val)) {
        Object.defineProperty(a, key, {
          // Null-proto descriptor so a polluted Object.prototype.get cannot
          // hijack defineProperty's accessor-vs-data resolution.
          __proto__: null,
          value: bind(val, thisArg),
          writable: true,
          enumerable: true,
          configurable: true
        });
      } else {
        Object.defineProperty(a, key, {
          __proto__: null,
          value: val,
          writable: true,
          enumerable: true,
          configurable: true
        });
      }
    },
    { allOwnKeys }
  );
  return a;
};
var stripBOM = (content) => {
  if (content.charCodeAt(0) === 65279) {
    content = content.slice(1);
  }
  return content;
};
var inherits = (constructor, superConstructor, props, descriptors) => {
  constructor.prototype = Object.create(superConstructor.prototype, descriptors);
  Object.defineProperty(constructor.prototype, "constructor", {
    __proto__: null,
    value: constructor,
    writable: true,
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(constructor, "super", {
    __proto__: null,
    value: superConstructor.prototype
  });
  props && Object.assign(constructor.prototype, props);
};
var toFlatObject = (sourceObj, destObj, filter2, propFilter) => {
  let props;
  let i;
  let prop;
  const merged = {};
  destObj = destObj || {};
  if (sourceObj == null) return destObj;
  do {
    props = Object.getOwnPropertyNames(sourceObj);
    i = props.length;
    while (i-- > 0) {
      prop = props[i];
      if ((!propFilter || propFilter(prop, sourceObj, destObj)) && !merged[prop]) {
        destObj[prop] = sourceObj[prop];
        merged[prop] = true;
      }
    }
    sourceObj = filter2 !== false && getPrototypeOf(sourceObj);
  } while (sourceObj && (!filter2 || filter2(sourceObj, destObj)) && sourceObj !== Object.prototype);
  return destObj;
};
var endsWith = (str, searchString, position) => {
  str = String(str);
  if (position === void 0 || position > str.length) {
    position = str.length;
  }
  position -= searchString.length;
  const lastIndex = str.indexOf(searchString, position);
  return lastIndex !== -1 && lastIndex === position;
};
var toArray = (thing) => {
  if (!thing) return null;
  if (isArray(thing)) return thing;
  let i = thing.length;
  if (!isNumber(i)) return null;
  const arr = new Array(i);
  while (i-- > 0) {
    arr[i] = thing[i];
  }
  return arr;
};
var isTypedArray = /* @__PURE__ */ ((TypedArray) => {
  return (thing) => {
    return TypedArray && thing instanceof TypedArray;
  };
})(typeof Uint8Array !== "undefined" && getPrototypeOf(Uint8Array));
var forEachEntry = (obj, fn) => {
  const generator = obj && obj[iterator];
  const _iterator = generator.call(obj);
  let result;
  while ((result = _iterator.next()) && !result.done) {
    const pair = result.value;
    fn.call(obj, pair[0], pair[1]);
  }
};
var matchAll = (regExp, str) => {
  let matches;
  const arr = [];
  while ((matches = regExp.exec(str)) !== null) {
    arr.push(matches);
  }
  return arr;
};
var isHTMLForm = kindOfTest("HTMLFormElement");
var toCamelCase = (str) => {
  return str.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function replacer(m, p1, p2) {
    return p1.toUpperCase() + p2;
  });
};
var { propertyIsEnumerable } = Object.prototype;
var isRegExp = kindOfTest("RegExp");
var reduceDescriptors = (obj, reducer) => {
  const descriptors = Object.getOwnPropertyDescriptors(obj);
  const reducedDescriptors = {};
  forEach(descriptors, (descriptor, name) => {
    let ret;
    if ((ret = reducer(descriptor, name, obj)) !== false) {
      reducedDescriptors[name] = ret || descriptor;
    }
  });
  Object.defineProperties(obj, reducedDescriptors);
};
var freezeMethods = (obj) => {
  reduceDescriptors(obj, (descriptor, name) => {
    if (isFunction(obj) && ["arguments", "caller", "callee"].includes(name)) {
      return false;
    }
    const value = obj[name];
    if (!isFunction(value)) return;
    descriptor.enumerable = false;
    if ("writable" in descriptor) {
      descriptor.writable = false;
      return;
    }
    if (!descriptor.set) {
      descriptor.set = () => {
        throw Error("Can not rewrite read-only method '" + name + "'");
      };
    }
  });
};
var toObjectSet = (arrayOrString, delimiter) => {
  const obj = {};
  const define = (arr) => {
    arr.forEach((value) => {
      obj[value] = true;
    });
  };
  isArray(arrayOrString) ? define(arrayOrString) : define(String(arrayOrString).split(delimiter));
  return obj;
};
var noop = () => {
};
var toFiniteNumber = (value, defaultValue) => {
  return value != null && Number.isFinite(value = +value) ? value : defaultValue;
};
function isSpecCompliantForm(thing) {
  return !!(thing && isFunction(thing.append) && thing[toStringTag] === "FormData" && thing[iterator]);
}
var toJSONObject = (obj) => {
  const visited = /* @__PURE__ */ new WeakSet();
  const visit = (source) => {
    if (isObject(source)) {
      if (visited.has(source)) {
        return;
      }
      if (isBuffer(source)) {
        return source;
      }
      if (!("toJSON" in source)) {
        visited.add(source);
        let target;
        if (isSet(source)) {
          target = [];
          for (const value of source) {
            const reducedValue = visit(value);
            !isUndefined(reducedValue) && target.push(reducedValue);
          }
        } else {
          target = isArray(source) ? [] : {};
          forEach(source, (value, key) => {
            const reducedValue = visit(value);
            !isUndefined(reducedValue) && (target[key] = reducedValue);
          });
        }
        visited.delete(source);
        return target;
      }
    }
    return source;
  };
  return visit(obj);
};
var isAsyncFn = kindOfTest("AsyncFunction");
var isThenable = (thing) => thing && (isObject(thing) || isFunction(thing)) && isFunction(thing.then) && isFunction(thing.catch);
var _setImmediate = ((setImmediateSupported, postMessageSupported) => {
  if (setImmediateSupported) {
    return setImmediate;
  }
  return postMessageSupported ? ((token, callbacks) => {
    _global.addEventListener(
      "message",
      ({ source, data }) => {
        if (source === _global && data === token) {
          callbacks.length && callbacks.shift()();
        }
      },
      false
    );
    return (cb) => {
      callbacks.push(cb);
      _global.postMessage(token, "*");
    };
  })(`axios@${Math.random()}`, []) : (cb) => setTimeout(cb);
})(typeof setImmediate === "function", isFunction(_global.postMessage));
var asap = typeof queueMicrotask !== "undefined" ? queueMicrotask.bind(_global) : typeof process !== "undefined" && process.nextTick || _setImmediate;
var isIterable = (thing) => thing != null && isFunction(thing[iterator]);
var isSafeIterable = (thing) => thing != null && hasOwnInPrototypeChain(thing, iterator) && isIterable(thing);
var utils_default = {
  isArray,
  isArrayBuffer,
  isBuffer,
  isFormData,
  isArrayBufferView,
  isString,
  isNumber,
  isBoolean,
  isObject,
  isPlainObject,
  isEmptyObject,
  isReadableStream,
  isRequest,
  isResponse,
  isHeaders,
  isUndefined,
  isDate,
  isFile,
  isReactNativeBlob,
  isReactNative,
  isBlob,
  isRegExp,
  isFunction,
  isStream,
  isURLSearchParams,
  isTypedArray,
  isFileList,
  forEach,
  merge,
  extend,
  trim,
  stripBOM,
  inherits,
  toFlatObject,
  kindOf,
  kindOfTest,
  endsWith,
  toArray,
  forEachEntry,
  matchAll,
  isHTMLForm,
  hasOwnProperty,
  hasOwnProp: hasOwnProperty,
  // an alias to avoid ESLint no-prototype-builtins detection
  hasOwnInPrototypeChain,
  getSafeProp,
  toSafeFlatObject,
  reduceDescriptors,
  freezeMethods,
  toObjectSet,
  toCamelCase,
  noop,
  toFiniteNumber,
  findKey,
  global: _global,
  isContextDefined,
  isSpecCompliantForm,
  toJSONObject,
  isAsyncFn,
  isThenable,
  setImmediate: _setImmediate,
  asap,
  isIterable,
  isSafeIterable
};

// node_modules/axios/lib/helpers/parseHeaders.js
var ignoreDuplicateOf = utils_default.toObjectSet([
  "age",
  "authorization",
  "content-length",
  "content-type",
  "etag",
  "expires",
  "from",
  "host",
  "if-modified-since",
  "if-unmodified-since",
  "last-modified",
  "location",
  "max-forwards",
  "proxy-authorization",
  "referer",
  "retry-after",
  "user-agent"
]);
var parseHeaders_default = (rawHeaders) => {
  const parsed = {};
  let key;
  let val;
  let i;
  rawHeaders && rawHeaders.split("\n").forEach(function parser(line) {
    i = line.indexOf(":");
    key = line.substring(0, i).trim().toLowerCase();
    val = line.substring(i + 1).trim();
    const hasKey = utils_default.hasOwnProp(parsed, key);
    if (!key || hasKey && utils_default.hasOwnProp(ignoreDuplicateOf, key)) {
      return;
    }
    if (key === "set-cookie") {
      if (hasKey) {
        parsed[key].push(val);
      } else {
        parsed[key] = [val];
      }
    } else {
      parsed[key] = hasKey ? parsed[key] + ", " + val : val;
    }
  });
  return parsed;
};

// node_modules/axios/lib/helpers/sanitizeHeaderValue.js
function trimSPorHTAB(str) {
  let start = 0;
  let end = str.length;
  while (start < end) {
    const code = str.charCodeAt(start);
    if (code !== 9 && code !== 32) {
      break;
    }
    start += 1;
  }
  while (end > start) {
    const code = str.charCodeAt(end - 1);
    if (code !== 9 && code !== 32) {
      break;
    }
    end -= 1;
  }
  return start === 0 && end === str.length ? str : str.slice(start, end);
}
var INVALID_UNICODE_HEADER_VALUE_CHARS = new RegExp("[\\u0000-\\u0008\\u000a-\\u001f\\u007f]+", "g");
var INVALID_BYTE_STRING_HEADER_VALUE_CHARS = new RegExp("[^\\u0009\\u0020-\\u007e\\u0080-\\u00ff]+", "g");
function sanitizeValue(value, invalidChars) {
  if (utils_default.isArray(value)) {
    return value.map((item) => sanitizeValue(item, invalidChars));
  }
  return trimSPorHTAB(String(value).replace(invalidChars, ""));
}
var sanitizeHeaderValue = (value) => sanitizeValue(value, INVALID_UNICODE_HEADER_VALUE_CHARS);
var sanitizeByteStringHeaderValue = (value) => sanitizeValue(value, INVALID_BYTE_STRING_HEADER_VALUE_CHARS);
function toByteStringHeaderObject(headers) {
  const byteStringHeaders = /* @__PURE__ */ Object.create(null);
  utils_default.forEach(headers.toJSON(), (value, header) => {
    byteStringHeaders[header] = sanitizeByteStringHeaderValue(value);
  });
  return byteStringHeaders;
}

// node_modules/axios/lib/core/AxiosHeaders.js
var $internals = /* @__PURE__ */ Symbol("internals");
function normalizeHeader(header) {
  return header && String(header).trim().toLowerCase();
}
function normalizeValue(value) {
  if (value === false || value == null) {
    return value;
  }
  return utils_default.isArray(value) ? value.map(normalizeValue) : sanitizeHeaderValue(String(value));
}
function parseTokens(str) {
  const tokens = /* @__PURE__ */ Object.create(null);
  const tokensRE = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let match;
  while (match = tokensRE.exec(str)) {
    tokens[match[1]] = match[2];
  }
  return tokens;
}
var parameterNameRE = /^[!#$%&'*+\-.^_`|~0-9A-Za-z]+$/;
function trimOWS(value) {
  let start = 0;
  let end = value.length;
  while (start < end) {
    const code = value.charCodeAt(start);
    if (code !== 9 && code !== 32) {
      break;
    }
    start += 1;
  }
  while (end > start) {
    const code = value.charCodeAt(end - 1);
    if (code !== 9 && code !== 32) {
      break;
    }
    end -= 1;
  }
  return start === 0 && end === value.length ? value : value.slice(start, end);
}
function decodeQuotedString(value) {
  const last = value.length - 1;
  if (last < 1 || value.charCodeAt(0) !== 34 || value.charCodeAt(last) !== 34) {
    return value;
  }
  let decoded = "";
  for (let i = 1; i < last; i++) {
    const code = value.charCodeAt(i);
    if (code === 34) {
      return value;
    }
    if (code === 92) {
      i += 1;
      if (i >= last) {
        return value;
      }
    }
    decoded += value[i];
  }
  return decoded;
}
function parseParameters(value) {
  const parameters = /* @__PURE__ */ Object.create(null);
  const str = String(value);
  let start = 0;
  let quoted = false;
  let escaped = false;
  function parseParameter(end) {
    const part = trimOWS(str.slice(start, end));
    const equals = part.indexOf("=");
    if (equals < 1) {
      return;
    }
    const name = trimOWS(part.slice(0, equals));
    if (!parameterNameRE.test(name)) {
      return;
    }
    const normalizedName = name.toLowerCase();
    if (normalizedName === "__proto__" || normalizedName === "constructor" || normalizedName === "prototype") {
      return;
    }
    const parameterValue = trimOWS(part.slice(equals + 1));
    parameters[normalizedName] = decodeQuotedString(parameterValue);
  }
  for (let i = 0; i < str.length; i++) {
    const code = str.charCodeAt(i);
    if (quoted) {
      if (escaped) {
        escaped = false;
      } else if (code === 92) {
        escaped = true;
      } else if (code === 34) {
        quoted = false;
      }
    } else if (code === 34) {
      quoted = true;
    } else if (code === 44 || code === 59) {
      parseParameter(i);
      start = i + 1;
    }
  }
  parseParameter(str.length);
  return parameters;
}
var isValidHeaderName = (str) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(str.trim());
function matchHeaderValue(context, value, header, filter2, isHeaderNameFilter) {
  if (utils_default.isFunction(filter2)) {
    return filter2.call(this, value, header);
  }
  if (isHeaderNameFilter) {
    value = header;
  }
  if (!utils_default.isString(value)) return;
  if (utils_default.isString(filter2)) {
    return value.indexOf(filter2) !== -1;
  }
  if (utils_default.isRegExp(filter2)) {
    return filter2.test(value);
  }
}
function formatHeader(header) {
  return header.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (w, char, str) => {
    return char.toUpperCase() + str;
  });
}
function buildAccessors(obj, header) {
  const accessorName = utils_default.toCamelCase(" " + header);
  ["get", "set", "has"].forEach((methodName) => {
    Object.defineProperty(obj, methodName + accessorName, {
      // Null-proto descriptor so a polluted Object.prototype.get cannot turn
      // this data descriptor into an accessor descriptor on the way in.
      __proto__: null,
      value: function(arg1, arg2, arg3) {
        return this[methodName].call(this, header, arg1, arg2, arg3);
      },
      configurable: true
    });
  });
}
var AxiosHeaders = class {
  constructor(headers) {
    headers && this.set(headers);
  }
  set(header, valueOrRewrite, rewrite) {
    const self2 = this;
    function setHeader(_value, _header, _rewrite) {
      const lHeader = normalizeHeader(_header);
      if (!lHeader) {
        return;
      }
      const key = utils_default.findKey(self2, lHeader);
      if (!key || self2[key] === void 0 || _rewrite === true || _rewrite === void 0 && self2[key] !== false) {
        self2[key || _header] = normalizeValue(_value);
      }
    }
    const setHeaders = (headers, _rewrite) => utils_default.forEach(headers, (_value, _header) => setHeader(_value, _header, _rewrite));
    if (utils_default.isPlainObject(header) || header instanceof this.constructor) {
      setHeaders(header, valueOrRewrite);
    } else if (utils_default.isString(header) && (header = header.trim()) && !isValidHeaderName(header)) {
      setHeaders(parseHeaders_default(header), valueOrRewrite);
    } else if (utils_default.isObject(header) && utils_default.isSafeIterable(header)) {
      let obj = /* @__PURE__ */ Object.create(null), dest, key;
      for (const entry of header) {
        if (!utils_default.isArray(entry)) {
          throw new TypeError("Object iterator must return a key-value pair");
        }
        key = entry[0];
        if (utils_default.hasOwnProp(obj, key)) {
          dest = obj[key];
          obj[key] = utils_default.isArray(dest) ? [...dest, entry[1]] : [dest, entry[1]];
        } else {
          obj[key] = entry[1];
        }
      }
      setHeaders(obj, valueOrRewrite);
    } else {
      header != null && setHeader(valueOrRewrite, header, rewrite);
    }
    return this;
  }
  get(header, parser) {
    header = normalizeHeader(header);
    if (header) {
      const key = utils_default.findKey(this, header);
      if (key) {
        const value = this[key];
        if (!parser) {
          return value;
        }
        if (parser === true) {
          return parseTokens(value);
        }
        if (utils_default.isFunction(parser)) {
          return parser.call(this, value, key);
        }
        if (utils_default.isRegExp(parser)) {
          return parser.exec(value);
        }
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(header, matcher) {
    header = normalizeHeader(header);
    if (header) {
      const key = utils_default.findKey(this, header);
      return !!(key && this[key] !== void 0 && (!matcher || matchHeaderValue(this, this[key], key, matcher)));
    }
    return false;
  }
  delete(header, matcher) {
    const self2 = this;
    let deleted = false;
    function deleteHeader(_header) {
      _header = normalizeHeader(_header);
      if (_header) {
        const key = utils_default.findKey(self2, _header);
        if (key && (!matcher || matchHeaderValue(self2, self2[key], key, matcher))) {
          delete self2[key];
          deleted = true;
        }
      }
    }
    if (utils_default.isArray(header)) {
      header.forEach(deleteHeader);
    } else {
      deleteHeader(header);
    }
    return deleted;
  }
  clear(matcher) {
    const keys = Object.keys(this);
    let i = keys.length;
    let deleted = false;
    while (i--) {
      const key = keys[i];
      if (!matcher || matchHeaderValue(this, this[key], key, matcher, true)) {
        delete this[key];
        deleted = true;
      }
    }
    return deleted;
  }
  normalize(format) {
    const self2 = this;
    const headers = {};
    utils_default.forEach(this, (value, header) => {
      const key = utils_default.findKey(headers, header);
      if (key) {
        self2[key] = normalizeValue(value);
        delete self2[header];
        return;
      }
      const normalized = format ? formatHeader(header) : String(header).trim();
      if (normalized !== header) {
        delete self2[header];
      }
      self2[normalized] = normalizeValue(value);
      headers[normalized] = true;
    });
    return this;
  }
  concat(...targets) {
    return this.constructor.concat(this, ...targets);
  }
  toJSON(asStrings) {
    const obj = /* @__PURE__ */ Object.create(null);
    utils_default.forEach(this, (value, header) => {
      value != null && value !== false && (obj[header] = asStrings && utils_default.isArray(value) ? value.join(", ") : value);
    });
    return obj;
  }
  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]();
  }
  toString() {
    return Object.entries(this.toJSON()).map(([header, value]) => header + ": " + value).join("\n");
  }
  getSetCookie() {
    const value = this.get("set-cookie");
    return utils_default.isArray(value) ? value : value == null || value === false ? [] : [value];
  }
  get [Symbol.toStringTag]() {
    return "AxiosHeaders";
  }
  static from(thing) {
    return thing instanceof this ? thing : new this(thing);
  }
  static parseParameters(value) {
    return parseParameters(value);
  }
  static concat(first, ...targets) {
    const computed = new this(first);
    targets.forEach((target) => computed.set(target));
    return computed;
  }
  static accessor(header) {
    const internals = this[$internals] = this[$internals] = {
      accessors: {}
    };
    const accessors = internals.accessors;
    const prototype2 = this.prototype;
    function defineAccessor(_header) {
      const lHeader = normalizeHeader(_header);
      if (!accessors[lHeader]) {
        buildAccessors(prototype2, _header);
        accessors[lHeader] = true;
      }
    }
    utils_default.isArray(header) ? header.forEach(defineAccessor) : defineAccessor(header);
    return this;
  }
};
AxiosHeaders.accessor([
  "Content-Type",
  "Content-Length",
  "Accept",
  "Accept-Encoding",
  "User-Agent",
  "Authorization"
]);
utils_default.reduceDescriptors(AxiosHeaders.prototype, ({ value }, key) => {
  let mapped = key[0].toUpperCase() + key.slice(1);
  return {
    get: () => value,
    set(headerValue) {
      this[mapped] = headerValue;
    }
  };
});
utils_default.freezeMethods(AxiosHeaders);
var AxiosHeaders_default = AxiosHeaders;

// node_modules/axios/lib/core/AxiosError.js
var REDACTED = "[REDACTED ****]";
function hasOwnOrPrototypeToJSON(source) {
  if (utils_default.hasOwnProp(source, "toJSON")) {
    return true;
  }
  let prototype2 = Object.getPrototypeOf(source);
  while (prototype2 && prototype2 !== Object.prototype) {
    if (utils_default.hasOwnProp(prototype2, "toJSON")) {
      return true;
    }
    prototype2 = Object.getPrototypeOf(prototype2);
  }
  return false;
}
function redactConfig(config, redactKeys) {
  const lowerKeys = new Set(redactKeys.map((k) => String(k).toLowerCase()));
  const seen = [];
  const visit = (source) => {
    if (source === null || typeof source !== "object") return source;
    if (utils_default.isBuffer(source)) return source;
    if (seen.indexOf(source) !== -1) return void 0;
    if (source instanceof AxiosHeaders_default) {
      source = source.toJSON();
    }
    seen.push(source);
    let result;
    if (utils_default.isArray(source)) {
      result = [];
      source.forEach((v, i) => {
        const reducedValue = visit(v);
        if (!utils_default.isUndefined(reducedValue)) {
          result[i] = reducedValue;
        }
      });
    } else {
      if (!utils_default.isPlainObject(source) && hasOwnOrPrototypeToJSON(source)) {
        seen.pop();
        return source;
      }
      result = /* @__PURE__ */ Object.create(null);
      for (const [key, value] of Object.entries(source)) {
        const reducedValue = lowerKeys.has(key.toLowerCase()) ? REDACTED : visit(value);
        if (!utils_default.isUndefined(reducedValue)) {
          result[key] = reducedValue;
        }
      }
    }
    seen.pop();
    return result;
  };
  return visit(config);
}
function stringifySafely(value) {
  try {
    return String(value);
  } catch (err) {
    return "";
  }
}
function aggregateErrorMessage(error) {
  const message = error.errors.map((entry) => {
    try {
      return entry && entry.message ? stringifySafely(entry.message) : stringifySafely(entry);
    } catch (err) {
      return "";
    }
  }).filter(Boolean).join("; ");
  return message || error.name || "AggregateError";
}
var AxiosError = class _AxiosError extends Error {
  static from(error, code, config, request, response, customProps) {
    let message = error.message;
    if (!message && utils_default.isArray(error.errors) && error.errors.length) {
      message = aggregateErrorMessage(error);
    }
    const axiosError = new _AxiosError(message, code || error.code, config, request, response);
    Object.defineProperty(axiosError, "cause", {
      __proto__: null,
      value: error,
      writable: true,
      enumerable: false,
      configurable: true
    });
    axiosError.name = error.name;
    if (error.status != null && axiosError.status == null) {
      axiosError.status = error.status;
    }
    customProps && Object.assign(axiosError, customProps);
    return axiosError;
  }
  /**
   * Create an Error with the specified message, config, error code, request and response.
   *
   * @param {string} message The error message.
   * @param {string} [code] The error code (for example, 'ECONNABORTED').
   * @param {Object} [config] The config.
   * @param {Object} [request] The request.
   * @param {Object} [response] The response.
   *
   * @returns {Error} The created error.
   */
  constructor(message, code, config, request, response) {
    super(message);
    Object.defineProperty(this, "message", {
      // Null-proto descriptor so a polluted Object.prototype.get cannot turn
      // this data descriptor into an accessor descriptor on the way in.
      __proto__: null,
      value: message,
      enumerable: true,
      writable: true,
      configurable: true
    });
    this.name = "AxiosError";
    this.isAxiosError = true;
    code && (this.code = code);
    config && (this.config = config);
    request && (this.request = request);
    if (response) {
      this.response = response;
      this.status = response.status;
    }
  }
  toJSON() {
    const config = this.config;
    const redactKeys = config && utils_default.hasOwnProp(config, "redact") ? config.redact : void 0;
    const serializedConfig = utils_default.isArray(redactKeys) && redactKeys.length > 0 ? redactConfig(config, redactKeys) : utils_default.toJSONObject(config);
    return {
      // Standard
      message: this.message,
      name: this.name,
      // Microsoft
      description: this.description,
      number: this.number,
      // Mozilla
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      // Axios
      config: serializedConfig,
      code: this.code,
      status: this.status
    };
  }
};
AxiosError.ERR_BAD_OPTION_VALUE = "ERR_BAD_OPTION_VALUE";
AxiosError.ERR_BAD_OPTION = "ERR_BAD_OPTION";
AxiosError.ECONNABORTED = "ECONNABORTED";
AxiosError.ETIMEDOUT = "ETIMEDOUT";
AxiosError.ECONNREFUSED = "ECONNREFUSED";
AxiosError.ERR_NETWORK = "ERR_NETWORK";
AxiosError.ERR_FR_TOO_MANY_REDIRECTS = "ERR_FR_TOO_MANY_REDIRECTS";
AxiosError.ERR_DEPRECATED = "ERR_DEPRECATED";
AxiosError.ERR_BAD_RESPONSE = "ERR_BAD_RESPONSE";
AxiosError.ERR_BAD_REQUEST = "ERR_BAD_REQUEST";
AxiosError.ERR_CANCELED = "ERR_CANCELED";
AxiosError.ERR_NOT_SUPPORT = "ERR_NOT_SUPPORT";
AxiosError.ERR_INVALID_URL = "ERR_INVALID_URL";
AxiosError.ERR_FORM_DATA_DEPTH_EXCEEDED = "ERR_FORM_DATA_DEPTH_EXCEEDED";
var AxiosError_default = AxiosError;

// node_modules/axios/lib/platform/node/classes/FormData.js
var import_form_data = __toESM(require_form_data(), 1);
var FormData_default = import_form_data.default;

// node_modules/axios/lib/platform/node/classes/Buffer.js
var Buffer_default = {
  isBufferAvailable() {
    return typeof Buffer !== "undefined";
  },
  from(value) {
    return Buffer.from(value);
  }
};

// node_modules/axios/lib/helpers/toFormData.js
var DEFAULT_FORM_DATA_MAX_DEPTH = 100;
function isVisitable(thing) {
  return utils_default.isPlainObject(thing) || utils_default.isArray(thing);
}
function removeBrackets(key) {
  return utils_default.endsWith(key, "[]") ? key.slice(0, -2) : key;
}
function renderKey(path4, key, dots) {
  if (!path4) return key;
  return path4.concat(key).map(function each(token, i) {
    token = removeBrackets(token);
    return !dots && i ? "[" + token + "]" : token;
  }).join(dots ? "." : "");
}
function isFlatArray(arr) {
  return utils_default.isArray(arr) && !arr.some(isVisitable);
}
var predicates = utils_default.toFlatObject(utils_default, {}, null, function filter(prop) {
  return /^is[A-Z]/.test(prop);
});
function toFormData(obj, formData, options) {
  if (!utils_default.isObject(obj)) {
    throw new TypeError("target must be an object");
  }
  formData = formData || new (FormData_default || FormData)();
  const option = (name, fallback) => {
    const value = utils_default.getSafeProp(options, name);
    return utils_default.isUndefined(value) ? fallback : value;
  };
  const metaTokens = option("metaTokens", true);
  const visitor = option("visitor") || defaultVisitor;
  const dots = option("dots", false);
  const indexes = option("indexes", false);
  const _Blob = option("Blob") || typeof Blob !== "undefined" && Blob;
  const maxDepth = option("maxDepth", DEFAULT_FORM_DATA_MAX_DEPTH);
  const useBlob = _Blob && utils_default.isSpecCompliantForm(formData);
  const stack = [];
  if (!utils_default.isFunction(visitor)) {
    throw new TypeError("visitor must be a function");
  }
  function convertValue(value) {
    if (value === null) return "";
    if (utils_default.isDate(value)) {
      return value.toISOString();
    }
    if (utils_default.isBoolean(value)) {
      return value.toString();
    }
    if (!useBlob && utils_default.isBlob(value)) {
      throw new AxiosError_default("Blob is not supported. Use a Buffer instead.");
    }
    if (utils_default.isArrayBuffer(value) || utils_default.isTypedArray(value)) {
      if (useBlob && typeof _Blob === "function") {
        return new _Blob([value]);
      }
      if (Buffer_default && Buffer_default.isBufferAvailable()) {
        return Buffer_default.from(value);
      }
      throw new AxiosError_default(
        "Blob is not supported. Use a Buffer instead.",
        AxiosError_default.ERR_NOT_SUPPORT
      );
    }
    return value;
  }
  function throwIfMaxDepthExceeded(depth) {
    if (depth > maxDepth) {
      throw new AxiosError_default(
        "Object is too deeply nested (" + depth + " levels). Max depth: " + maxDepth,
        AxiosError_default.ERR_FORM_DATA_DEPTH_EXCEEDED
      );
    }
  }
  function stringifyWithDepthLimit(value, depth) {
    if (maxDepth === Infinity) {
      return JSON.stringify(value);
    }
    const ancestors = [];
    return JSON.stringify(value, function limitDepth(_key, currentValue) {
      if (!utils_default.isObject(currentValue)) {
        return currentValue;
      }
      while (ancestors.length && ancestors[ancestors.length - 1] !== this) {
        ancestors.pop();
      }
      ancestors.push(currentValue);
      throwIfMaxDepthExceeded(depth + ancestors.length - 1);
      return currentValue;
    });
  }
  function defaultVisitor(value, key, path4) {
    let arr = value;
    if (utils_default.isReactNative(formData) && utils_default.isReactNativeBlob(value)) {
      formData.append(renderKey(path4, key, dots), convertValue(value));
      return false;
    }
    if (value && !path4 && typeof value === "object") {
      if (utils_default.endsWith(key, "{}")) {
        key = metaTokens ? key : key.slice(0, -2);
        value = stringifyWithDepthLimit(value, 1);
      } else if (utils_default.isArray(value) && isFlatArray(value) || (utils_default.isFileList(value) || utils_default.endsWith(key, "[]")) && (arr = utils_default.toArray(value))) {
        key = removeBrackets(key);
        arr.forEach(function each(el, index) {
          !(utils_default.isUndefined(el) || el === null) && formData.append(
            // eslint-disable-next-line no-nested-ternary
            indexes === true ? renderKey([key], index, dots) : indexes === null ? key : key + "[]",
            convertValue(el)
          );
        });
        return false;
      }
    }
    if (isVisitable(value)) {
      return true;
    }
    formData.append(renderKey(path4, key, dots), convertValue(value));
    return false;
  }
  const exposedHelpers = Object.assign(predicates, {
    defaultVisitor,
    convertValue,
    isVisitable
  });
  function build(value, path4, depth = 0) {
    if (utils_default.isUndefined(value)) return;
    throwIfMaxDepthExceeded(depth);
    if (stack.indexOf(value) !== -1) {
      throw new Error("Circular reference detected in " + path4.join("."));
    }
    stack.push(value);
    utils_default.forEach(value, function each(el, key) {
      const result = !(utils_default.isUndefined(el) || el === null) && visitor.call(formData, el, utils_default.isString(key) ? key.trim() : key, path4, exposedHelpers);
      if (result === true) {
        build(el, path4 ? path4.concat(key) : [key], depth + 1);
      }
    });
    stack.pop();
  }
  if (!utils_default.isObject(obj)) {
    throw new TypeError("data must be an object");
  }
  build(obj);
  return formData;
}
var toFormData_default = toFormData;

// node_modules/axios/lib/helpers/AxiosURLSearchParams.js
function encode(str) {
  const charMap = {
    "!": "%21",
    "'": "%27",
    "(": "%28",
    ")": "%29",
    "~": "%7E",
    "%20": "+"
  };
  return encodeURIComponent(str).replace(/[!'()~]|%20/g, function replacer(match) {
    return charMap[match];
  });
}
function AxiosURLSearchParams(params, options) {
  this._pairs = [];
  params && toFormData_default(params, this, options);
}
var prototype = AxiosURLSearchParams.prototype;
prototype.append = function append(name, value) {
  this._pairs.push([name, value]);
};
prototype.toString = function toString2(encoder) {
  const _encode = encoder ? (value) => encoder.call(this, value, encode) : encode;
  return this._pairs.map(function each(pair) {
    return _encode(pair[0]) + "=" + _encode(pair[1]);
  }, "").join("&");
};
var AxiosURLSearchParams_default = AxiosURLSearchParams;

// node_modules/axios/lib/helpers/buildURL.js
function encode2(val) {
  return encodeURIComponent(val).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+");
}
function buildURL(url2, params, options) {
  if (!params) {
    return url2;
  }
  url2 = url2 || "";
  const _options = utils_default.isFunction(options) ? {
    serialize: options
  } : options;
  const _encode = utils_default.getSafeProp(_options, "encode") || encode2;
  const serializeFn = utils_default.getSafeProp(_options, "serialize");
  let serializedParams;
  if (serializeFn) {
    serializedParams = serializeFn(params, _options);
  } else {
    serializedParams = utils_default.isURLSearchParams(params) ? params.toString() : new AxiosURLSearchParams_default(params, _options).toString(_encode);
  }
  if (serializedParams) {
    const hashmarkIndex = url2.indexOf("#");
    if (hashmarkIndex !== -1) {
      url2 = url2.slice(0, hashmarkIndex);
    }
    url2 += (url2.indexOf("?") === -1 ? "?" : "&") + serializedParams;
  }
  return url2;
}

// node_modules/axios/lib/core/InterceptorManager.js
var $internals2 = /* @__PURE__ */ Symbol("internals");
function countHandlers(handlers) {
  return handlers ? handlers.length : 0;
}
function trimHandlers(handlers) {
  if (!handlers) {
    return;
  }
  while (handlers.length && handlers[handlers.length - 1] === null) {
    handlers.pop();
  }
}
function syncHandlerEntries(manager, internals) {
  const handlers = manager.handlers;
  const length = countHandlers(handlers);
  if (handlers !== internals.handlersRef) {
    internals.handlersRef = handlers;
    internals.handlerEntries.clear();
  } else if (length !== internals.handlersLength) {
    if (!length) {
      internals.handlerEntries.clear();
    } else {
      internals.handlerEntries.forEach(function removeStaleEntry(entry, id) {
        if (handlers[entry.index] !== entry.handler) {
          internals.handlerEntries.delete(id);
        }
      });
    }
  }
  internals.handlersLength = length;
}
var InterceptorManager = class {
  constructor() {
    this.handlers = [];
    this[$internals2] = {
      handlersRef: this.handlers,
      handlersLength: this.handlers.length,
      handlerEntries: /* @__PURE__ */ new Map(),
      iterationDepth: 0,
      nextId: 0
    };
  }
  /**
   * Add a new interceptor to the stack
   *
   * @param {Function} fulfilled The function to handle `then` for a `Promise`
   * @param {Function} rejected The function to handle `reject` for a `Promise`
   * @param {Object} options The options for the interceptor, synchronous and runWhen
   *
   * @return {Number} An ID used to remove interceptor later
   */
  use(fulfilled, rejected, options) {
    const handler = {
      fulfilled,
      rejected,
      synchronous: options ? options.synchronous : false,
      runWhen: options ? options.runWhen : null
    };
    const internals = this[$internals2];
    if (this.handlers == null) {
      this.handlers = [];
    }
    syncHandlerEntries(this, internals);
    const id = internals.nextId++;
    this.handlers.push(handler);
    internals.handlerEntries.set(id, {
      handler,
      index: this.handlers.length - 1
    });
    internals.handlersLength = this.handlers.length;
    return id;
  }
  /**
   * Remove an interceptor from the stack
   *
   * @param {Number} id The ID that was returned by `use`
   *
   * @returns {void}
   */
  eject(id) {
    const internals = this[$internals2];
    syncHandlerEntries(this, internals);
    const entry = internals.handlerEntries.get(id);
    if (entry) {
      internals.handlerEntries.delete(id);
      if (this.handlers[entry.index] !== entry.handler) {
        return;
      }
      this.handlers[entry.index] = null;
      if (!internals.iterationDepth) {
        trimHandlers(this.handlers);
        internals.handlersLength = this.handlers.length;
      }
    }
  }
  /**
   * Clear all interceptors from the stack
   *
   * @returns {void}
   */
  clear() {
    if (this.handlers) {
      this.handlers = [];
      syncHandlerEntries(this, this[$internals2]);
    }
  }
  /**
   * Iterate over all the registered interceptors
   *
   * This method is particularly useful for skipping over any
   * interceptors that may have become `null` calling `eject`.
   *
   * @param {Function} fn The function to call for each interceptor
   *
   * @returns {void}
   */
  forEach(fn) {
    const internals = this[$internals2];
    syncHandlerEntries(this, internals);
    internals.iterationDepth++;
    try {
      utils_default.forEach(this.handlers, function forEachHandler(h) {
        if (h !== null) {
          fn(h);
        }
      });
    } finally {
      if (!--internals.iterationDepth) {
        syncHandlerEntries(this, internals);
        trimHandlers(this.handlers);
        internals.handlersLength = countHandlers(this.handlers);
      }
    }
  }
};
var InterceptorManager_default = InterceptorManager;

// node_modules/axios/lib/defaults/transitional.js
var transitional_default = {
  silentJSONParsing: true,
  forcedJSONParsing: true,
  clarifyTimeoutError: false,
  legacyInterceptorReqResOrdering: true,
  advertiseZstdAcceptEncoding: false,
  validateStatusUndefinedResolves: true
};

// node_modules/axios/lib/platform/node/index.js
var import_crypto = __toESM(require("crypto"), 1);

// node_modules/axios/lib/platform/node/classes/URLSearchParams.js
var import_url = __toESM(require("url"), 1);
var URLSearchParams_default = import_url.default.URLSearchParams;

// node_modules/axios/lib/platform/node/index.js
var ALPHA = "abcdefghijklmnopqrstuvwxyz";
var DIGIT = "0123456789";
var ALPHABET = {
  DIGIT,
  ALPHA,
  ALPHA_DIGIT: ALPHA + ALPHA.toUpperCase() + DIGIT
};
var generateString = (size = 16, alphabet = ALPHABET.ALPHA_DIGIT) => {
  let str = "";
  const { length } = alphabet;
  const randomValues = new Uint32Array(size);
  import_crypto.default.randomFillSync(randomValues);
  for (let i = 0; i < size; i++) {
    str += alphabet[randomValues[i] % length];
  }
  return str;
};
var node_default = {
  isNode: true,
  classes: {
    URLSearchParams: URLSearchParams_default,
    FormData: FormData_default,
    Blob: typeof Blob !== "undefined" && Blob || null
  },
  ALPHABET,
  generateString,
  protocols: ["http", "https", "file", "data"]
};

// node_modules/axios/lib/platform/common/utils.js
var utils_exports = {};
__export(utils_exports, {
  hasBrowserEnv: () => hasBrowserEnv,
  hasStandardBrowserEnv: () => hasStandardBrowserEnv,
  hasStandardBrowserWebWorkerEnv: () => hasStandardBrowserWebWorkerEnv,
  navigator: () => _navigator,
  origin: () => origin
});
var hasBrowserEnv = typeof window !== "undefined" && typeof document !== "undefined";
var _navigator = typeof navigator === "object" && navigator || void 0;
var hasStandardBrowserEnv = hasBrowserEnv && (!_navigator || ["ReactNative", "NativeScript", "NS"].indexOf(_navigator.product) < 0);
var hasStandardBrowserWebWorkerEnv = (() => {
  return typeof WorkerGlobalScope !== "undefined" && // eslint-disable-next-line no-undef
  self instanceof WorkerGlobalScope && typeof self.importScripts === "function";
})();
var origin = hasBrowserEnv && window.location.href || "http://localhost";

// node_modules/axios/lib/platform/index.js
var platform_default = {
  ...utils_exports,
  ...node_default
};

// node_modules/axios/lib/helpers/toURLEncodedForm.js
function toURLEncodedForm(data, options) {
  return toFormData_default(data, new platform_default.classes.URLSearchParams(), {
    visitor: function(value, key, path4, helpers) {
      if (platform_default.isNode && utils_default.isBuffer(value)) {
        this.append(key, value.toString("base64"));
        return false;
      }
      return helpers.defaultVisitor.apply(this, arguments);
    },
    ...options
  });
}

// node_modules/axios/lib/helpers/formDataToJSON.js
var MAX_DEPTH = DEFAULT_FORM_DATA_MAX_DEPTH;
function throwIfDepthExceeded(index) {
  if (index > MAX_DEPTH) {
    throw new AxiosError_default(
      "FormData field is too deeply nested (" + index + " levels). Max depth: " + MAX_DEPTH,
      AxiosError_default.ERR_FORM_DATA_DEPTH_EXCEEDED
    );
  }
}
function parsePropPath(name) {
  const path4 = [];
  const pattern = /[^.[\]]+|\[([^.[\]]*)]/g;
  let match;
  while ((match = pattern.exec(name)) !== null) {
    throwIfDepthExceeded(path4.length);
    path4.push(match[0] === "[]" ? "" : match[1] || match[0]);
  }
  return path4;
}
function arrayToObject(arr) {
  const obj = {};
  const keys = Object.keys(arr);
  let i;
  const len = keys.length;
  let key;
  for (i = 0; i < len; i++) {
    key = keys[i];
    obj[key] = arr[key];
  }
  return obj;
}
function formDataToJSON(formData) {
  function buildPath(path4, value, target, index) {
    throwIfDepthExceeded(index);
    let name = path4[index++];
    if (name === "__proto__") return true;
    const isNumericKey = Number.isFinite(+name);
    const isLast = index >= path4.length;
    name = !name && utils_default.isArray(target) ? target.length : name;
    if (isLast) {
      if (utils_default.hasOwnProp(target, name)) {
        target[name] = utils_default.isArray(target[name]) ? target[name].concat(value) : [target[name], value];
      } else {
        target[name] = value;
      }
      return !isNumericKey;
    }
    if (!utils_default.hasOwnProp(target, name) || !utils_default.isObject(target[name])) {
      target[name] = [];
    }
    const result = buildPath(path4, value, target[name], index);
    if (result && utils_default.isArray(target[name])) {
      target[name] = arrayToObject(target[name]);
    }
    return !isNumericKey;
  }
  if (utils_default.isFormData(formData) && utils_default.isFunction(formData.entries)) {
    const obj = {};
    utils_default.forEachEntry(formData, (name, value) => {
      buildPath(parsePropPath(name), value, obj, 0);
    });
    return obj;
  }
  return null;
}
var formDataToJSON_default = formDataToJSON;

// node_modules/axios/lib/core/methodList.js
var methodList = Object.freeze([
  "get",
  "delete",
  "head",
  "options",
  "post",
  "put",
  "patch",
  "purge",
  "link",
  "unlink",
  "query"
]);
var methodList_default = methodList;

// node_modules/axios/lib/defaults/index.js
var own = (obj, key) => obj != null && utils_default.hasOwnProp(obj, key) ? obj[key] : void 0;
function stringifySafely2(rawValue, parser, encoder) {
  if (utils_default.isString(rawValue)) {
    try {
      (parser || JSON.parse)(rawValue);
      return utils_default.trim(rawValue);
    } catch (e) {
      if (e.name !== "SyntaxError") {
        throw e;
      }
    }
  }
  return (encoder || JSON.stringify)(rawValue);
}
var defaults = {
  transitional: transitional_default,
  adapter: ["xhr", "http", "fetch"],
  transformRequest: [
    function transformRequest(data, headers) {
      const contentType = headers.getContentType() || "";
      const hasJSONContentType = contentType.indexOf("application/json") > -1;
      const isObjectPayload = utils_default.isObject(data);
      if (isObjectPayload && utils_default.isHTMLForm(data)) {
        data = new FormData(data);
      }
      const isFormData2 = utils_default.isFormData(data);
      if (isFormData2) {
        return hasJSONContentType ? JSON.stringify(formDataToJSON_default(data)) : data;
      }
      if (utils_default.isArrayBuffer(data) || utils_default.isBuffer(data) || utils_default.isStream(data) || utils_default.isFile(data) || utils_default.isBlob(data) || utils_default.isReadableStream(data)) {
        return data;
      }
      if (utils_default.isArrayBufferView(data)) {
        return data.buffer;
      }
      if (utils_default.isURLSearchParams(data)) {
        headers.setContentType("application/x-www-form-urlencoded;charset=utf-8", false);
        return data.toString();
      }
      let isFileList2;
      if (isObjectPayload) {
        const formSerializer = own(this, "formSerializer");
        if (contentType.indexOf("application/x-www-form-urlencoded") > -1) {
          return toURLEncodedForm(data, formSerializer).toString();
        }
        if ((isFileList2 = utils_default.isFileList(data)) || contentType.indexOf("multipart/form-data") > -1) {
          const env = own(this, "env");
          const _FormData = env && env.FormData;
          return toFormData_default(
            isFileList2 ? { "files[]": data } : data,
            _FormData && new _FormData(),
            formSerializer
          );
        }
      }
      if (isObjectPayload || hasJSONContentType) {
        headers.setContentType("application/json", false);
        return stringifySafely2(data);
      }
      return data;
    }
  ],
  transformResponse: [
    function transformResponse(data) {
      const transitional2 = own(this, "transitional") || defaults.transitional;
      const forcedJSONParsing = transitional2 && transitional2.forcedJSONParsing;
      const responseType = own(this, "responseType");
      const JSONRequested = responseType === "json";
      if (utils_default.isResponse(data) || utils_default.isReadableStream(data)) {
        return data;
      }
      if (data && utils_default.isString(data) && (forcedJSONParsing && !responseType || JSONRequested)) {
        const silentJSONParsing = transitional2 && transitional2.silentJSONParsing;
        const strictJSONParsing = !silentJSONParsing && JSONRequested;
        try {
          return JSON.parse(data, own(this, "parseReviver"));
        } catch (e) {
          if (strictJSONParsing) {
            if (e.name === "SyntaxError") {
              throw AxiosError_default.from(e, AxiosError_default.ERR_BAD_RESPONSE, this, null, own(this, "response"));
            }
            throw e;
          }
        }
      }
      return data;
    }
  ],
  /**
   * A timeout in milliseconds to abort a request. If set to 0 (default) a
   * timeout is not created.
   */
  timeout: 0,
  xsrfCookieName: "XSRF-TOKEN",
  xsrfHeaderName: "X-XSRF-TOKEN",
  maxContentLength: -1,
  maxBodyLength: -1,
  env: {
    FormData: platform_default.classes.FormData,
    Blob: platform_default.classes.Blob
  },
  validateStatus: function validateStatus(status) {
    return status >= 200 && status < 300;
  },
  headers: {
    common: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": void 0
    }
  }
};
utils_default.forEach(methodList_default, (method) => {
  defaults.headers[method] = {};
});
var defaults_default = defaults;

// node_modules/axios/lib/core/transformData.js
function transformData(fns, response) {
  const config = this || defaults_default;
  const context = response || config;
  const headers = AxiosHeaders_default.from(context.headers);
  let data = context.data;
  utils_default.forEach(fns, function transform(fn) {
    data = fn.call(config, data, headers.normalize(), response ? response.status : void 0);
  });
  headers.normalize();
  return data;
}

// node_modules/axios/lib/cancel/isCancel.js
function isCancel(value) {
  return !!(value && value.__CANCEL__);
}

// node_modules/axios/lib/cancel/CanceledError.js
var CanceledError = class extends AxiosError_default {
  /**
   * A `CanceledError` is an object that is thrown when an operation is canceled.
   *
   * @param {string=} message The message.
   * @param {Object=} config The config.
   * @param {Object=} request The request.
   *
   * @returns {CanceledError} The created error.
   */
  constructor(message, config, request) {
    super(message == null ? "canceled" : message, AxiosError_default.ERR_CANCELED, config, request);
    this.name = "CanceledError";
    this.__CANCEL__ = true;
  }
};
var CanceledError_default = CanceledError;

// node_modules/axios/lib/core/settle.js
function settle(resolve, reject, response) {
  const validateStatus2 = response.config.validateStatus;
  if (!response.status || !validateStatus2 || validateStatus2(response.status)) {
    resolve(response);
  } else {
    reject(new AxiosError_default(
      "Request failed with status code " + response.status,
      response.status >= 400 && response.status < 500 ? AxiosError_default.ERR_BAD_REQUEST : AxiosError_default.ERR_BAD_RESPONSE,
      response.config,
      response.request,
      response
    ));
  }
}

// node_modules/axios/lib/helpers/isAbsoluteURL.js
function isAbsoluteURL(url2) {
  if (typeof url2 !== "string") {
    return false;
  }
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(url2);
}

// node_modules/axios/lib/helpers/combineURLs.js
function combineURLs(baseURL, relativeURL) {
  if (!relativeURL) {
    return baseURL;
  }
  let end = baseURL.length;
  while (end > 0 && baseURL.charCodeAt(end - 1) === 47) {
    end--;
  }
  return baseURL.slice(0, end) + "/" + relativeURL.replace(/^\/+/, "");
}

// node_modules/axios/lib/helpers/normalizeURLForProtocolCheck.js
var urlParserControlCharacters = /[\t\n\r]/g;
function normalizeURLForProtocolCheck(url2) {
  if (typeof url2 !== "string") {
    return url2;
  }
  let start = 0;
  while (start < url2.length && url2.charCodeAt(start) <= 32) {
    start++;
  }
  return url2.slice(start).replace(urlParserControlCharacters, "");
}

// node_modules/axios/lib/core/buildFullPath.js
var malformedHttpProtocol = /^https?:(?!\/\/)/i;
function redactFragment(fragment) {
  if (!fragment) {
    return fragment;
  }
  return fragment.replace(/(^|&)([^=&]*=)?[^&]+/g, (match, separator, parameterName = "") => {
    return `${separator}${parameterName}${REDACTED}`;
  });
}
function redactSensitiveURLParts(url2) {
  const redactedURL = url2.replace(/^(https?:\/{0,2})[^/?#]*@/i, `$1${REDACTED}@`);
  const fragmentIndex = redactedURL.indexOf("#");
  const urlWithoutFragment = fragmentIndex === -1 ? redactedURL : redactedURL.slice(0, fragmentIndex);
  const redactedURLWithoutFragment = urlWithoutFragment.replace(
    /([?&][^=&#]*=)[^&#]*/g,
    `$1${REDACTED}`
  );
  if (fragmentIndex === -1) {
    return redactedURLWithoutFragment;
  }
  return `${redactedURLWithoutFragment}#${redactFragment(redactedURL.slice(fragmentIndex + 1))}`;
}
function assertValidHttpProtocolURL(url2, config) {
  if (typeof url2 === "string") {
    const normalizedURL = normalizeURLForProtocolCheck(url2);
    if (malformedHttpProtocol.test(normalizedURL)) {
      throw new AxiosError_default(
        `Invalid URL ${JSON.stringify(redactSensitiveURLParts(normalizedURL))}: missing "//" after protocol`,
        AxiosError_default.ERR_INVALID_URL,
        config
      );
    }
  }
}
function buildFullPath(baseURL, requestedURL, allowAbsoluteUrls, config) {
  assertValidHttpProtocolURL(requestedURL, config);
  let isRelativeUrl = !isAbsoluteURL(requestedURL);
  if (baseURL && (isRelativeUrl || allowAbsoluteUrls === false)) {
    assertValidHttpProtocolURL(baseURL, config);
    return combineURLs(baseURL, requestedURL);
  }
  return requestedURL;
}

// node_modules/proxy-from-env/index.js
var DEFAULT_PORTS = {
  ftp: 21,
  gopher: 70,
  http: 80,
  https: 443,
  ws: 80,
  wss: 443
};
function parseUrl(urlString) {
  try {
    return new URL(urlString);
  } catch {
    return null;
  }
}
function getProxyForUrl(url2) {
  var parsedUrl = (typeof url2 === "string" ? parseUrl(url2) : url2) || {};
  var proto = parsedUrl.protocol;
  var hostname = parsedUrl.host;
  var port = parsedUrl.port;
  if (typeof hostname !== "string" || !hostname || typeof proto !== "string") {
    return "";
  }
  proto = proto.split(":", 1)[0];
  hostname = hostname.replace(/:\d*$/, "");
  port = parseInt(port) || DEFAULT_PORTS[proto] || 0;
  if (!shouldProxy(hostname, port)) {
    return "";
  }
  var proxy = getEnv(proto + "_proxy") || getEnv("all_proxy");
  if (proxy && proxy.indexOf("://") === -1) {
    proxy = proto + "://" + proxy;
  }
  return proxy;
}
function shouldProxy(hostname, port) {
  var NO_PROXY = getEnv("no_proxy").toLowerCase();
  if (!NO_PROXY) {
    return true;
  }
  if (NO_PROXY === "*") {
    return false;
  }
  return NO_PROXY.split(/[,\s]/).every(function(proxy) {
    if (!proxy) {
      return true;
    }
    var parsedProxy = proxy.match(/^(.+):(\d+)$/);
    var parsedProxyHostname = parsedProxy ? parsedProxy[1] : proxy;
    var parsedProxyPort = parsedProxy ? parseInt(parsedProxy[2]) : 0;
    if (parsedProxyPort && parsedProxyPort !== port) {
      return true;
    }
    if (!/^[.*]/.test(parsedProxyHostname)) {
      return hostname !== parsedProxyHostname;
    }
    if (parsedProxyHostname.charAt(0) === "*") {
      parsedProxyHostname = parsedProxyHostname.slice(1);
    }
    return !hostname.endsWith(parsedProxyHostname);
  });
}
function getEnv(key) {
  return process.env[key.toLowerCase()] || process.env[key.toUpperCase()] || "";
}

// node_modules/axios/lib/adapters/http.js
var import_https_proxy_agent = __toESM(require_dist3(), 1);
var import_http = __toESM(require("http"), 1);
var import_https = __toESM(require("https"), 1);
var import_http22 = __toESM(require("http2"), 1);
var import_util3 = __toESM(require("util"), 1);
var import_path = require("path");
var import_follow_redirects = __toESM(require_follow_redirects(), 1);
var import_zlib = __toESM(require("zlib"), 1);

// node_modules/axios/lib/env/data.js
var VERSION = "1.20.0";

// node_modules/axios/lib/helpers/parseProtocol.js
function parseProtocol(url2) {
  const match = /^([-+\w]{1,25}):(?:\/\/)?/.exec(url2);
  return match && match[1] || "";
}

// node_modules/axios/lib/helpers/fromDataURI.js
var DATA_URL_PATTERN = /^([^,;/]+\/[^,;/]+)?((?:;[^,;=]+=[^,;]+)*)(;base64)?,([\s\S]*)$/;
function fromDataURI(uri, asBlob, options) {
  const _Blob = options && options.Blob || platform_default.classes.Blob;
  const protocol = parseProtocol(uri);
  if (asBlob === void 0 && _Blob) {
    asBlob = true;
  }
  if (protocol === "data") {
    uri = protocol.length ? uri.slice(protocol.length + 1) : uri;
    const match = DATA_URL_PATTERN.exec(uri);
    if (!match) {
      throw new AxiosError_default("Invalid URL", AxiosError_default.ERR_INVALID_URL);
    }
    const type = match[1];
    const params = match[2];
    const encoding = match[3] ? "base64" : "utf8";
    const body = match[4];
    let mime = "";
    if (type) {
      mime = params ? type + params : type;
    } else if (params) {
      mime = "text/plain" + params;
    }
    const buffer = encoding === "base64" ? Buffer.from(body, "base64") : Buffer.from(decodeURIComponent(body), encoding);
    if (asBlob) {
      if (!_Blob) {
        throw new AxiosError_default("Blob is not supported", AxiosError_default.ERR_NOT_SUPPORT);
      }
      return new _Blob([buffer], { type: mime });
    }
    return buffer;
  }
  throw new AxiosError_default("Unsupported protocol " + protocol, AxiosError_default.ERR_NOT_SUPPORT);
}

// node_modules/axios/lib/adapters/http.js
var import_stream4 = __toESM(require("stream"), 1);

// node_modules/axios/lib/core/setFormDataHeaders.js
var FORM_DATA_CONTENT_HEADERS = ["content-type", "content-length"];
function setFormDataHeaders(headers, formHeaders, policy) {
  if (policy !== "content-only") {
    headers.set(formHeaders);
    return;
  }
  Object.entries(formHeaders || {}).forEach(([key, val]) => {
    if (FORM_DATA_CONTENT_HEADERS.includes(key.toLowerCase())) {
      headers.set(key, val);
    }
  });
}

// node_modules/axios/lib/helpers/AxiosTransformStream.js
var import_stream = __toESM(require("stream"), 1);
var kInternals = /* @__PURE__ */ Symbol("internals");
var AxiosTransformStream = class extends import_stream.default.Transform {
  constructor(options) {
    options = utils_default.toFlatObject(
      options,
      {
        maxRate: 0,
        chunkSize: 64 * 1024,
        minChunkSize: 100,
        timeWindow: 500,
        ticksRate: 2,
        samplesCount: 15
      },
      null,
      (prop, source) => {
        return !utils_default.isUndefined(source[prop]);
      }
    );
    super({
      readableHighWaterMark: options.chunkSize
    });
    const internals = this[kInternals] = {
      timeWindow: options.timeWindow,
      chunkSize: options.chunkSize,
      maxRate: options.maxRate,
      minChunkSize: options.minChunkSize,
      bytesSeen: 0,
      isCaptured: false,
      notifiedBytesLoaded: 0,
      ts: Date.now(),
      bytes: 0,
      onReadCallback: null
    };
    this.on("newListener", (event) => {
      if (event === "progress") {
        if (!internals.isCaptured) {
          internals.isCaptured = true;
        }
      }
    });
  }
  _read(size) {
    const internals = this[kInternals];
    if (internals.onReadCallback) {
      internals.onReadCallback();
    }
    return super._read(size);
  }
  _transform(chunk, encoding, callback) {
    const internals = this[kInternals];
    const maxRate = internals.maxRate;
    const readableHighWaterMark = this.readableHighWaterMark;
    const timeWindow = internals.timeWindow;
    const divider = 1e3 / timeWindow;
    const bytesThreshold = maxRate / divider;
    const minChunkSize = internals.minChunkSize !== false ? Math.max(internals.minChunkSize, bytesThreshold * 0.01) : 0;
    const pushChunk = (_chunk, _callback) => {
      const bytes = Buffer.byteLength(_chunk);
      internals.bytesSeen += bytes;
      internals.bytes += bytes;
      internals.isCaptured && this.emit("progress", internals.bytesSeen);
      if (this.push(_chunk)) {
        process.nextTick(_callback);
      } else {
        internals.onReadCallback = () => {
          internals.onReadCallback = null;
          process.nextTick(_callback);
        };
      }
    };
    const transformChunk = (_chunk, _callback) => {
      const chunkSize = Buffer.byteLength(_chunk);
      let chunkRemainder = null;
      let maxChunkSize = readableHighWaterMark;
      let bytesLeft;
      let passed = 0;
      if (maxRate) {
        const now = Date.now();
        if (!internals.ts || (passed = now - internals.ts) >= timeWindow) {
          internals.ts = now;
          bytesLeft = bytesThreshold - internals.bytes;
          internals.bytes = bytesLeft < 0 ? -bytesLeft : 0;
          passed = 0;
        }
        bytesLeft = bytesThreshold - internals.bytes;
      }
      if (maxRate) {
        if (bytesLeft <= 0) {
          return setTimeout(() => {
            _callback(null, _chunk);
          }, timeWindow - passed);
        }
        if (bytesLeft < maxChunkSize) {
          maxChunkSize = bytesLeft;
        }
      }
      if (maxChunkSize && chunkSize > maxChunkSize && chunkSize - maxChunkSize > minChunkSize) {
        chunkRemainder = _chunk.subarray(maxChunkSize);
        _chunk = _chunk.subarray(0, maxChunkSize);
      }
      pushChunk(
        _chunk,
        chunkRemainder ? () => {
          process.nextTick(_callback, null, chunkRemainder);
        } : _callback
      );
    };
    transformChunk(chunk, function transformNextChunk(err, _chunk) {
      if (err) {
        return callback(err);
      }
      if (_chunk) {
        transformChunk(_chunk, transformNextChunk);
      } else {
        callback(null);
      }
    });
  }
};
var AxiosTransformStream_default = AxiosTransformStream;

// node_modules/axios/lib/adapters/http.js
var import_events = require("events");

// node_modules/axios/lib/helpers/formDataToStream.js
var import_util = __toESM(require("util"), 1);
var import_stream2 = require("stream");

// node_modules/axios/lib/helpers/readBlob.js
var { asyncIterator } = Symbol;
var readBlob = async function* (blob) {
  if (blob.stream) {
    yield* blob.stream();
  } else if (blob.arrayBuffer) {
    yield await blob.arrayBuffer();
  } else if (blob[asyncIterator]) {
    yield* blob[asyncIterator]();
  } else {
    yield blob;
  }
};
var readBlob_default = readBlob;

// node_modules/axios/lib/helpers/formDataToStream.js
var BOUNDARY_ALPHABET = platform_default.ALPHABET.ALPHA_DIGIT + "-_";
var textEncoder = typeof TextEncoder === "function" ? new TextEncoder() : new import_util.default.TextEncoder();
var CRLF = "\r\n";
var CRLF_BYTES = textEncoder.encode(CRLF);
var CRLF_BYTES_COUNT = 2;
var FormDataPart = class {
  constructor(name, value) {
    const { escapeName } = this.constructor;
    const isStringValue = utils_default.isString(value);
    let headers = `Content-Disposition: form-data; name="${escapeName(name)}"${!isStringValue && value.name ? `; filename="${escapeName(value.name)}"` : ""}${CRLF}`;
    if (isStringValue) {
      value = textEncoder.encode(String(value).replace(/\r?\n|\r\n?/g, CRLF));
    } else {
      const safeType = String(value.type || "application/octet-stream").replace(/[\r\n]/g, "");
      headers += `Content-Type: ${safeType}${CRLF}`;
    }
    this.headers = textEncoder.encode(headers + CRLF);
    this.contentLength = isStringValue ? value.byteLength : value.size;
    this.size = this.headers.byteLength + this.contentLength + CRLF_BYTES_COUNT;
    this.name = name;
    this.value = value;
  }
  async *encode() {
    yield this.headers;
    const { value } = this;
    if (utils_default.isTypedArray(value)) {
      yield value;
    } else {
      yield* readBlob_default(value);
    }
    yield CRLF_BYTES;
  }
  static escapeName(name) {
    return String(name).replace(
      /[\r\n"]/g,
      (match) => ({
        "\r": "%0D",
        "\n": "%0A",
        '"': "%22"
      })[match]
    );
  }
};
var formDataToStream = (form, headersHandler, options) => {
  const {
    tag = "form-data-boundary",
    size = 25,
    boundary = tag + "-" + platform_default.generateString(size, BOUNDARY_ALPHABET)
  } = options || {};
  if (!utils_default.isFormData(form)) {
    throw new TypeError("FormData instance required");
  }
  if (boundary.length < 1 || boundary.length > 70) {
    throw new Error("boundary must be 1-70 characters long");
  }
  const boundaryBytes = textEncoder.encode("--" + boundary + CRLF);
  const footerBytes = textEncoder.encode("--" + boundary + "--" + CRLF);
  let contentLength = footerBytes.byteLength;
  const parts = Array.from(form.entries()).map(([name, value]) => {
    const part = new FormDataPart(name, value);
    contentLength += part.size;
    return part;
  });
  contentLength += boundaryBytes.byteLength * parts.length;
  contentLength = utils_default.toFiniteNumber(contentLength);
  const computedHeaders = {
    "Content-Type": `multipart/form-data; boundary=${boundary}`
  };
  if (Number.isFinite(contentLength)) {
    computedHeaders["Content-Length"] = contentLength;
  }
  headersHandler && headersHandler(computedHeaders);
  return import_stream2.Readable.from(
    (async function* () {
      for (const part of parts) {
        yield boundaryBytes;
        yield* part.encode();
      }
      yield footerBytes;
    })()
  );
};
var formDataToStream_default = formDataToStream;

// node_modules/axios/lib/helpers/ZlibHeaderTransformStream.js
var import_stream3 = __toESM(require("stream"), 1);
var ZlibHeaderTransformStream = class extends import_stream3.default.Transform {
  __transform(chunk, encoding, callback) {
    this.push(chunk);
    callback();
  }
  _transform(chunk, encoding, callback) {
    if (chunk.length !== 0) {
      this._transform = this.__transform;
      if (chunk[0] !== 120) {
        const header = Buffer.alloc(2);
        header[0] = 120;
        header[1] = 156;
        this.push(header, encoding);
      }
    }
    this.__transform(chunk, encoding, callback);
  }
};
var ZlibHeaderTransformStream_default = ZlibHeaderTransformStream;

// node_modules/axios/lib/helpers/Http2Sessions.js
var import_http2 = __toESM(require("http2"), 1);
var import_util2 = __toESM(require("util"), 1);
var Http2Sessions = class {
  constructor() {
    this.sessions = /* @__PURE__ */ Object.create(null);
  }
  getSession(authority, options) {
    options = Object.assign(
      /* @__PURE__ */ Object.create(null),
      {
        sessionTimeout: 1e3
      },
      options
    );
    let authoritySessions = this.sessions[authority];
    if (authoritySessions) {
      let len = authoritySessions.length;
      for (let i = 0; i < len; i++) {
        const [sessionHandle, sessionOptions] = authoritySessions[i];
        if (!sessionHandle.destroyed && !sessionHandle.closed && import_util2.default.isDeepStrictEqual(sessionOptions, options)) {
          return sessionHandle;
        }
      }
    }
    const session = import_http2.default.connect(authority, options);
    let removed;
    let timer;
    const removeSession = () => {
      if (removed) {
        return;
      }
      removed = true;
      if (timer) {
        clearTimeout(timer);
        timer = null;
      }
      let entries = authoritySessions, len = entries.length, i = len;
      while (i--) {
        if (entries[i][0] === session) {
          if (len === 1) {
            delete this.sessions[authority];
          } else {
            entries.splice(i, 1);
          }
          if (!session.closed) {
            session.close();
          }
          return;
        }
      }
    };
    const originalRequestFn = session.request;
    const { sessionTimeout } = options;
    if (sessionTimeout != null) {
      let streamsCount = 0;
      session.request = function() {
        const stream4 = originalRequestFn.apply(this, arguments);
        streamsCount++;
        if (timer) {
          clearTimeout(timer);
          timer = null;
        }
        stream4.once("close", () => {
          if (!--streamsCount) {
            timer = setTimeout(() => {
              timer = null;
              removeSession();
            }, sessionTimeout);
          }
        });
        return stream4;
      };
    }
    session.once("close", removeSession);
    session.once("error", removeSession);
    let entry = [session, options];
    authoritySessions ? authoritySessions.push(entry) : authoritySessions = this.sessions[authority] = [entry];
    return session;
  }
};
var Http2Sessions_default = Http2Sessions;

// node_modules/axios/lib/helpers/callbackify.js
var callbackify = (fn, reducer) => {
  return utils_default.isAsyncFn(fn) ? function(...args) {
    const cb = args.pop();
    fn.apply(this, args).then((value) => {
      try {
        reducer ? cb(null, ...reducer(value)) : cb(null, value);
      } catch (err) {
        cb(err);
      }
    }, cb);
  } : fn;
};
var callbackify_default = callbackify;

// node_modules/axios/lib/helpers/shouldBypassProxy.js
var LOOPBACK_HOSTNAMES = /* @__PURE__ */ new Set(["localhost", "0.0.0.0"]);
var trimTrailingDots = (value) => {
  let end = value.length;
  while (end && value.charCodeAt(end - 1) === 46) {
    end--;
  }
  return end === value.length ? value : value.slice(0, end);
};
var isIPv4Loopback = (host) => {
  const parts = host.split(".");
  if (parts.length !== 4) return false;
  if (parts[0] !== "127") return false;
  return parts.every((p) => /^\d+$/.test(p) && Number(p) >= 0 && Number(p) <= 255);
};
var parseIPv4Octet = (text) => {
  if (/^0[xX][0-9a-fA-F]+$/.test(text)) {
    const n = parseInt(text.slice(2), 16);
    return Number.isFinite(n) ? n : null;
  }
  if (text.length > 1 && /^0[0-7]+$/.test(text)) {
    const n = parseInt(text, 8);
    return Number.isFinite(n) ? n : null;
  }
  if (text.length > 1 && /^0[0-9]+$/.test(text)) {
    return null;
  }
  if (/^[0-9]+$/.test(text)) {
    const n = parseInt(text, 10);
    return Number.isFinite(n) ? n : null;
  }
  return null;
};
var normalizeIPAddress = (host) => {
  if (typeof host !== "string" || !host || host.indexOf(":") !== -1) {
    return host;
  }
  let h = host;
  if (h.charAt(0) === "[" && h.charAt(h.length - 1) === "]") {
    h = h.slice(1, -1);
  }
  h = trimTrailingDots(h);
  if (!/^[0-9.xXa-fA-F]+$/.test(h)) return host;
  const parts = h.split(".");
  if (parts.some((p) => p === "")) return host;
  if (parts.length === 4) {
    const octets = parts.map(parseIPv4Octet);
    if (octets.some((n) => n === null || n < 0 || n > 255)) return host;
    return octets.join(".");
  }
  if (parts.length > 4) {
    return host;
  }
  if (parts.length === 1) return host;
  const literalOctets = parts.slice(0, -1);
  const tail = parts[parts.length - 1];
  const tailSlots = 4 - literalOctets.length;
  const tailValue = parseIPv4Octet(tail);
  if (tailValue === null) return host;
  const maxTail = (1 << 8 * tailSlots) - 1;
  if (tailValue < 0 || tailValue > maxTail) return host;
  const tailOctets = new Array(tailSlots).fill(0);
  for (let i = tailSlots - 1, v = tailValue; i >= 0; i--, v >>= 8) {
    tailOctets[i] = v & 255;
  }
  const literal = literalOctets.map(parseIPv4Octet);
  if (literal.some((n) => n === null || n < 0 || n > 255)) return host;
  return [...literal, ...tailOctets].join(".");
};
var isIPv6ZeroGroup = (group) => /^0{1,4}$/.test(group);
var isIPv6Unspecified = (host) => {
  if (host === "::") return true;
  const compressionIndex = host.indexOf("::");
  if (compressionIndex !== -1) {
    if (compressionIndex !== host.lastIndexOf("::")) return false;
    const left = host.slice(0, compressionIndex);
    const right = host.slice(compressionIndex + 2);
    const leftGroups = left ? left.split(":") : [];
    const rightGroups = right ? right.split(":") : [];
    const explicitGroups = leftGroups.length + rightGroups.length;
    return explicitGroups < 8 && leftGroups.every(isIPv6ZeroGroup) && rightGroups.every(isIPv6ZeroGroup);
  }
  const groups = host.split(":");
  return groups.length === 8 && groups.every(isIPv6ZeroGroup);
};
var isIPv6Loopback = (host) => {
  if (host === "::1") return true;
  const v4MappedDotted = host.match(/^::ffff:(\d+\.\d+\.\d+\.\d+)$/i);
  if (v4MappedDotted) return isIPv4Loopback(v4MappedDotted[1]);
  const v4MappedHex = host.match(/^::ffff:([0-9a-f]{1,4}):([0-9a-f]{1,4})$/i);
  if (v4MappedHex) {
    const high = parseInt(v4MappedHex[1], 16);
    return high >= 32512 && high <= 32767;
  }
  const groups = host.split(":");
  if (groups.length === 8) {
    for (let i = 0; i < 7; i++) {
      if (!/^0+$/.test(groups[i])) return false;
    }
    return /^0*1$/.test(groups[7]);
  }
  return false;
};
var isLoopback = (host) => {
  if (!host) return false;
  if (LOOPBACK_HOSTNAMES.has(host)) return true;
  if (isIPv4Loopback(host)) return true;
  if (isIPv6Unspecified(host)) return true;
  return isIPv6Loopback(host);
};
var DEFAULT_PORTS2 = {
  http: 80,
  https: 443,
  ws: 80,
  wss: 443,
  ftp: 21
};
var parseNoProxyEntry = (entry) => {
  let entryHost = entry;
  let entryPort = 0;
  if (entryHost.charAt(0) === "[") {
    const bracketIndex = entryHost.indexOf("]");
    if (bracketIndex !== -1) {
      const host = entryHost.slice(1, bracketIndex);
      const rest = entryHost.slice(bracketIndex + 1);
      if (rest.charAt(0) === ":" && /^\d+$/.test(rest.slice(1))) {
        entryPort = Number.parseInt(rest.slice(1), 10);
      }
      return [host, entryPort];
    }
  }
  const firstColon = entryHost.indexOf(":");
  const lastColon = entryHost.lastIndexOf(":");
  if (firstColon !== -1 && firstColon === lastColon && /^\d+$/.test(entryHost.slice(lastColon + 1))) {
    entryPort = Number.parseInt(entryHost.slice(lastColon + 1), 10);
    entryHost = entryHost.slice(0, lastColon);
  }
  return [entryHost, entryPort];
};
var IPV4_MAPPED_DOTTED_RE = /^(?:::|(?:0{1,4}:){1,4}:|(?:0{1,4}:){5})ffff:(\d+\.\d+\.\d+\.\d+)$/i;
var IPV4_MAPPED_HEX_RE = /^(?:::|(?:0{1,4}:){1,4}:|(?:0{1,4}:){5})ffff:([0-9a-f]{1,4}):([0-9a-f]{1,4})$/i;
var unmapIPv4MappedIPv6 = (host) => {
  if (typeof host !== "string" || host.indexOf(":") === -1) return host;
  const dotted = host.match(IPV4_MAPPED_DOTTED_RE);
  if (dotted) return dotted[1];
  const hex = host.match(IPV4_MAPPED_HEX_RE);
  if (hex) {
    const high = parseInt(hex[1], 16);
    const low = parseInt(hex[2], 16);
    return `${high >> 8}.${high & 255}.${low >> 8}.${low & 255}`;
  }
  return host;
};
var IPV4_OCTET_RE = /^(?:0|[1-9]\d{0,2})$/;
var ipv4ToBytes = (host) => {
  const parts = host.split(".");
  return parts.length === 4 && parts.every((part) => IPV4_OCTET_RE.test(part) && Number(part) <= 255) ? parts.map(Number) : null;
};
var IPV6_GROUP_RE = /^[0-9a-f]{1,4}$/i;
var ipv6ToBytes = (host) => {
  const halves = host.split("::");
  if (halves.length > 2) {
    return null;
  }
  const groups = halves[0] ? halves[0].split(":") : [];
  if (halves.length === 2) {
    const rear = halves[1] ? halves[1].split(":") : [];
    const missing = 8 - groups.length - rear.length;
    if (missing < 1) {
      return null;
    }
    groups.push(...new Array(missing).fill("0"), ...rear);
  }
  if (groups.length !== 8 || groups.some((group) => !IPV6_GROUP_RE.test(group))) {
    return null;
  }
  return groups.flatMap((group) => {
    const value = Number.parseInt(group, 16);
    return [value >> 8 & 255, value & 255];
  });
};
var ipToBytes = (host) => {
  if (typeof host !== "string" || !host) {
    return null;
  }
  return host.indexOf(":") !== -1 ? ipv6ToBytes(host) : ipv4ToBytes(host);
};
var normalizeNoProxyHost = (hostname) => {
  if (!hostname) {
    return hostname;
  }
  if (hostname.charAt(0) === "[" && hostname.charAt(hostname.length - 1) === "]") {
    hostname = hostname.slice(1, -1);
  }
  const trimmed = trimTrailingDots(hostname);
  const ipv4 = normalizeIPAddress(trimmed);
  if (ipv4 !== trimmed) {
    return ipv4;
  }
  return unmapIPv4MappedIPv6(trimmed);
};
var normalizeCidrBase = (input) => {
  let base = input;
  const startsBracket = base.charAt(0) === "[";
  const endsBracket = base.charAt(base.length - 1) === "]";
  const hasBracket = base.includes("[") || base.includes("]");
  if (startsBracket || endsBracket) {
    if (!startsBracket || !endsBracket) {
      return null;
    }
    base = base.slice(1, -1);
    if (base.indexOf(":") === -1 || base.includes("[") || base.includes("]")) {
      return null;
    }
  } else if (hasBracket) {
    return null;
  }
  if (!base || base.charAt(base.length - 1) === ".") {
    return null;
  }
  const wasIPv6 = base.indexOf(":") !== -1;
  if (wasIPv6) {
    try {
      base = new URL(`http://[${base}]/`).hostname.slice(1, -1);
    } catch (_err) {
      return null;
    }
  } else {
    base = normalizeIPAddress(base);
    if (!ipv4ToBytes(base)) {
      return null;
    }
  }
  return { normalized: unmapIPv4MappedIPv6(base), wasIPv6 };
};
var CIDR_ENTRY_RE = /^(.+)\/(0|[1-9]\d{0,2})$/;
var parseCidrEntry = (entry) => {
  if (entry.indexOf("/") === -1) {
    return void 0;
  }
  const match = CIDR_ENTRY_RE.exec(entry);
  if (!match) {
    return null;
  }
  let prefix = Number(match[2]);
  const parsedBase = normalizeCidrBase(match[1]);
  if (!parsedBase) {
    return null;
  }
  const { normalized, wasIPv6 } = parsedBase;
  if (wasIPv6 && normalized.indexOf(":") === -1) {
    if (prefix < 96) {
      return null;
    }
    prefix -= 96;
  }
  const bytes = ipToBytes(normalized);
  if (!bytes || prefix > bytes.length * 8) {
    return null;
  }
  return { bytes, prefix };
};
var isInSubnet = (addressBytes, networkBytes, prefix) => {
  const fullBytes = prefix >> 3;
  for (let i = 0; i < fullBytes; i++) {
    if (addressBytes[i] !== networkBytes[i]) {
      return false;
    }
  }
  const remainingBits = prefix & 7;
  if (remainingBits) {
    const mask = 255 << 8 - remainingBits & 255;
    if ((addressBytes[fullBytes] & mask) !== (networkBytes[fullBytes] & mask)) {
      return false;
    }
  }
  return true;
};
function shouldBypassProxy(location) {
  let parsed;
  try {
    parsed = new URL(location);
  } catch (_err) {
    return false;
  }
  const noProxy = (process.env.no_proxy || process.env.NO_PROXY || "").toLowerCase();
  if (!noProxy) {
    return false;
  }
  if (noProxy === "*") {
    return true;
  }
  const port = Number.parseInt(parsed.port, 10) || DEFAULT_PORTS2[parsed.protocol.split(":", 1)[0]] || 0;
  const hostname = normalizeNoProxyHost(parsed.hostname.toLowerCase());
  const hostnameBytes = ipToBytes(hostname);
  return noProxy.split(/[\s,]+/).some((entry) => {
    if (!entry) {
      return false;
    }
    if (entry === "*") {
      return true;
    }
    const cidr = parseCidrEntry(entry);
    if (cidr !== void 0) {
      return cidr !== null && !!hostnameBytes && hostnameBytes.length === cidr.bytes.length && isInSubnet(hostnameBytes, cidr.bytes, cidr.prefix);
    }
    let [entryHost, entryPort] = parseNoProxyEntry(entry);
    entryHost = normalizeNoProxyHost(entryHost);
    if (!entryHost) {
      return false;
    }
    if (entryPort && entryPort !== port) {
      return false;
    }
    if (entryHost.charAt(0) === "*") {
      entryHost = entryHost.slice(1);
    }
    if (entryHost.charAt(0) === ".") {
      return hostname.endsWith(entryHost);
    }
    return hostname === entryHost || isLoopback(hostname) && isLoopback(entryHost);
  });
}

// node_modules/axios/lib/helpers/speedometer.js
function speedometer(samplesCount, min) {
  samplesCount = samplesCount || 10;
  const bytes = new Array(samplesCount);
  const timestamps = new Array(samplesCount);
  let head = 0;
  let tail = 0;
  let firstSampleTS;
  min = min !== void 0 ? min : 1e3;
  return function push(chunkLength) {
    const now = Date.now();
    const startedAt = timestamps[tail];
    if (!firstSampleTS) {
      firstSampleTS = now;
    }
    bytes[head] = chunkLength;
    timestamps[head] = now;
    let i = tail;
    let bytesCount = 0;
    while (i !== head) {
      bytesCount += bytes[i++];
      i = i % samplesCount;
    }
    head = (head + 1) % samplesCount;
    if (head === tail) {
      tail = (tail + 1) % samplesCount;
    }
    if (now - firstSampleTS < min) {
      return;
    }
    const passed = startedAt && now - startedAt;
    return passed ? Math.round(bytesCount * 1e3 / passed) : void 0;
  };
}
var speedometer_default = speedometer;

// node_modules/axios/lib/helpers/throttle.js
function throttle(fn, freq) {
  let timestamp = 0;
  let threshold = 1e3 / freq;
  let lastArgs;
  let timer;
  const invoke = (args, now = Date.now()) => {
    timestamp = now;
    lastArgs = null;
    if (timer) {
      clearTimeout(timer);
      timer = null;
    }
    fn(...args);
  };
  const throttled = (...args) => {
    const now = Date.now();
    const passed = now - timestamp;
    if (passed >= threshold) {
      invoke(args, now);
    } else {
      lastArgs = args;
      if (!timer) {
        timer = setTimeout(() => {
          timer = null;
          invoke(lastArgs);
        }, threshold - passed);
      }
    }
  };
  const flush = () => lastArgs && invoke(lastArgs);
  const flushWith = (...args) => invoke(args);
  return [throttled, flush, flushWith];
}
var throttle_default = throttle;

// node_modules/axios/lib/helpers/progressEventReducer.js
var progressEventReducer = (listener, isDownloadStream, freq = 3) => {
  let bytesNotified = 0;
  const _speedometer = speedometer_default(50, 250);
  return throttle_default((e) => {
    if (!e || !utils_default.isNumber(e.loaded)) {
      return;
    }
    const rawLoaded = e.loaded;
    const total = e.lengthComputable ? e.total : void 0;
    const loaded = Math.max(0, total != null ? Math.min(rawLoaded, total) : rawLoaded);
    const progressBytes = Math.max(0, loaded - bytesNotified);
    const rate = _speedometer(progressBytes);
    bytesNotified = Math.max(bytesNotified, loaded);
    const data = {
      loaded,
      total,
      progress: total ? loaded / total : void 0,
      bytes: progressBytes,
      rate: rate ? rate : void 0,
      estimated: rate && total ? (total - loaded) / rate : void 0,
      event: e,
      lengthComputable: total != null,
      [isDownloadStream ? "download" : "upload"]: true
    };
    listener(data);
  }, freq);
};
var progressEventDecorator = (total, throttled) => {
  const lengthComputable = total != null;
  return [
    (loaded) => throttled[0]({
      lengthComputable,
      total,
      loaded
    }),
    throttled[1]
  ];
};
var asyncDecorator = (fn, scheduler = utils_default.asap) => (...args) => scheduler(() => fn(...args));

// node_modules/axios/lib/helpers/estimateDataURLDecodedBytes.js
var isHexDigit = (charCode) => charCode >= 48 && charCode <= 57 || charCode >= 65 && charCode <= 70 || charCode >= 97 && charCode <= 102;
var isPercentEncodedByte = (str, i, len) => i + 2 < len && isHexDigit(str.charCodeAt(i + 1)) && isHexDigit(str.charCodeAt(i + 2));
var hexValue = (charCode) => charCode <= 57 ? charCode - 48 : (charCode & 223) - 55;
var isBase64Char = (charCode) => charCode >= 65 && charCode <= 90 || // A-Z
charCode >= 97 && charCode <= 122 || // a-z
charCode >= 48 && charCode <= 57 || // 0-9
charCode === 43 || // +
charCode === 47 || // /
charCode === 45 || // - (base64url)
charCode === 95;
var isBase64Whitespace = (charCode) => charCode === 9 || charCode === 10 || charCode === 12 || charCode === 13 || charCode === 32;
var base64Bytes = (significant) => {
  const groups = Math.floor(significant / 4);
  const remainder = significant % 4;
  return groups * 3 + (remainder === 2 ? 1 : remainder === 3 ? 2 : 0);
};
var estimateBase64BufferAllocation = (body) => {
  const len = body.length;
  let padding = 0;
  if (len > 0 && body.charCodeAt(len - 1) === 61) {
    padding++;
    if (len > 1 && body.charCodeAt(len - 2) === 61) {
      padding++;
    }
  }
  return Math.floor((len - padding) * 3 / 4);
};
var estimatePercentDecodedBase64Bytes = (body) => {
  const len = body.length;
  let significant = 0;
  let padding = 0;
  let invalid = false;
  for (let i = 0; i < len; i++) {
    let code = body.charCodeAt(i);
    if (code === 37 && isPercentEncodedByte(body, i, len)) {
      code = hexValue(body.charCodeAt(i + 1)) * 16 + hexValue(body.charCodeAt(i + 2));
      i += 2;
    }
    if (isBase64Whitespace(code)) {
      continue;
    }
    if (code === 61) {
      padding++;
      continue;
    }
    if (!isBase64Char(code) || padding > 0) {
      invalid = true;
      continue;
    }
    significant++;
  }
  if (invalid || padding > 2 || padding > 0 && (significant + padding) % 4 !== 0 || significant % 4 === 1) {
    return estimateBase64BufferAllocation(body);
  }
  return base64Bytes(significant);
};
var estimateDataURLBytes = (url2, estimateBase64) => {
  if (!url2 || typeof url2 !== "string") return 0;
  if (!url2.startsWith("data:")) return 0;
  const comma = url2.indexOf(",");
  if (comma < 0) return 0;
  const meta = url2.slice(5, comma);
  const body = url2.slice(comma + 1);
  const isBase64 = /;base64/i.test(meta);
  if (isBase64) {
    return estimateBase64(body);
  }
  let bytes = 0;
  for (let i = 0, len = body.length; i < len; i++) {
    const c = body.charCodeAt(i);
    if (c === 37 && isPercentEncodedByte(body, i, len)) {
      bytes += 1;
      i += 2;
    } else if (c < 128) {
      bytes += 1;
    } else if (c < 2048) {
      bytes += 2;
    } else if (c >= 55296 && c <= 56319 && i + 1 < len) {
      const next = body.charCodeAt(i + 1);
      if (next >= 56320 && next <= 57343) {
        bytes += 4;
        i++;
      } else {
        bytes += 3;
      }
    } else {
      bytes += 3;
    }
  }
  return bytes;
};
function estimateDataURLDecodedBytes(url2) {
  const fragmentIndex = typeof url2 === "string" ? url2.indexOf("#") : -1;
  return estimateDataURLBytes(
    fragmentIndex === -1 ? url2 : url2.slice(0, fragmentIndex),
    estimatePercentDecodedBase64Bytes
  );
}
function estimateDataURLBufferAllocation(url2) {
  return estimateDataURLBytes(url2, estimateBase64BufferAllocation);
}

// node_modules/axios/lib/adapters/http.js
var zlibOptions = {
  flush: import_zlib.default.constants.Z_SYNC_FLUSH,
  finishFlush: import_zlib.default.constants.Z_SYNC_FLUSH
};
var brotliOptions = {
  flush: import_zlib.default.constants.BROTLI_OPERATION_FLUSH,
  finishFlush: import_zlib.default.constants.BROTLI_OPERATION_FLUSH
};
var zstdOptions = {
  flush: import_zlib.default.constants.ZSTD_e_flush,
  finishFlush: import_zlib.default.constants.ZSTD_e_flush
};
var isBrotliSupported = utils_default.isFunction(import_zlib.default.createBrotliDecompress);
var isZstdSupported = utils_default.isFunction(import_zlib.default.createZstdDecompress);
var ACCEPT_ENCODING = "gzip, compress, deflate" + (isBrotliSupported ? ", br" : "");
var ACCEPT_ENCODING_WITH_ZSTD = ACCEPT_ENCODING + (isZstdSupported ? ", zstd" : "");
var scheduleProgress = typeof process !== "undefined" && process.nextTick ? process.nextTick.bind(process) : utils_default.asap;
var { http: httpFollow, https: httpsFollow } = import_follow_redirects.default;
var isHttps = /https:?/;
var kAxiosSocketListener = /* @__PURE__ */ Symbol("axios.http.socketListener");
var kAxiosCurrentReq = /* @__PURE__ */ Symbol("axios.http.currentReq");
function handleSocketError(err) {
  const current = this[kAxiosCurrentReq];
  if (current && !current.destroyed) {
    current.destroy(err);
  }
}
var kAxiosInstalledTunnel = /* @__PURE__ */ Symbol("axios.http.installedTunnel");
var tunnelingAgentCache = /* @__PURE__ */ new Map();
var tunnelingAgentCacheUser = /* @__PURE__ */ new WeakMap();
var NODE_NATIVE_ENV_PROXY_SUPPORT = {
  22: 21,
  24: 5
};
function isNodeNativeEnvProxySupported(nodeVersion = process.versions && process.versions.node) {
  if (!nodeVersion) {
    return false;
  }
  const [major, minor] = nodeVersion.split(".").map((part) => Number(part));
  if (!Number.isInteger(major) || !Number.isInteger(minor)) {
    return false;
  }
  if (major > 24) {
    return true;
  }
  return NODE_NATIVE_ENV_PROXY_SUPPORT[major] != null && minor >= NODE_NATIVE_ENV_PROXY_SUPPORT[major];
}
function isNodeEnvProxyEnabled(agent, nodeVersion = process.versions && process.versions.node) {
  if (!isNodeNativeEnvProxySupported(nodeVersion)) {
    return false;
  }
  const agentOptions = agent && agent.options;
  return Boolean(
    agentOptions && utils_default.hasOwnProp(agentOptions, "proxyEnv") && agentOptions.proxyEnv != null
  );
}
function getProxyEnvAgent(options, configHttpAgent, configHttpsAgent) {
  return isHttps.test(options.protocol) ? configHttpsAgent || import_https.default.globalAgent : configHttpAgent || import_http.default.globalAgent;
}
function getTunnelingAgent(agentOptions, userHttpsAgent) {
  const key = agentOptions.protocol + "//" + agentOptions.hostname + ":" + (agentOptions.port || "") + "#" + (agentOptions.auth || "");
  const cache = userHttpsAgent ? tunnelingAgentCacheUser.get(userHttpsAgent) || tunnelingAgentCacheUser.set(userHttpsAgent, /* @__PURE__ */ new Map()).get(userHttpsAgent) : tunnelingAgentCache;
  let agent = cache.get(key);
  if (agent) return agent;
  const merged = userHttpsAgent && userHttpsAgent.options ? { ...userHttpsAgent.options, ...agentOptions } : agentOptions;
  agent = new import_https_proxy_agent.default(merged);
  if (userHttpsAgent && userHttpsAgent.options) {
    const originTLSOptions = { ...userHttpsAgent.options };
    const callback = agent.callback;
    agent.callback = function axiosTunnelingAgentCallback(req, opts) {
      return callback.call(this, req, { ...originTLSOptions, ...opts });
    };
  }
  agent[kAxiosInstalledTunnel] = true;
  cache.set(key, agent);
  return agent;
}
var supportedProtocols = platform_default.protocols.map((protocol) => {
  return protocol + ":";
});
var decodeURIComponentSafe = (value) => {
  if (!utils_default.isString(value)) {
    return value;
  }
  try {
    return decodeURIComponent(value);
  } catch (error) {
    return value;
  }
};
var flushOnFinish = (stream4, [throttled, flush]) => {
  stream4.on("end", flush).on("error", flush);
  return throttled;
};
var http2Sessions = new Http2Sessions_default();
function dispatchBeforeRedirect(options, responseDetails, requestDetails) {
  if (options.beforeRedirects.proxy) {
    options.beforeRedirects.proxy(options);
  }
  if (options.beforeRedirects.auth) {
    options.beforeRedirects.auth(options);
  }
  if (options.beforeRedirects.sensitiveHeaders) {
    options.beforeRedirects.sensitiveHeaders(options, requestDetails);
  }
  if (options.beforeRedirects.config) {
    options.beforeRedirects.config(options, responseDetails, requestDetails);
  }
}
function stripMatchingHeaders(headers, sensitiveSet) {
  if (!headers) {
    return;
  }
  Object.keys(headers).forEach((header) => {
    if (sensitiveSet.has(header.toLowerCase())) {
      delete headers[header];
    }
  });
}
function isSameOriginRedirect(redirectOptions, requestDetails) {
  if (!requestDetails) {
    return false;
  }
  try {
    return new URL(requestDetails.url).origin === new URL(redirectOptions.href).origin;
  } catch (e) {
    return false;
  }
}
function setProxy(options, configProxy, location, isRedirect, configHttpsAgent, configHttpAgent, allowEnvProxy = true) {
  let proxy = configProxy;
  const proxyEnvAgent = getProxyEnvAgent(options, configHttpAgent, configHttpsAgent);
  if (!proxy && proxy !== false && allowEnvProxy && !isNodeEnvProxyEnabled(proxyEnvAgent)) {
    const proxyUrl = getProxyForUrl(location);
    if (proxyUrl) {
      if (!shouldBypassProxy(location)) {
        proxy = new URL(proxyUrl);
      }
    }
  }
  if (isRedirect && options.headers) {
    for (const name of Object.keys(options.headers)) {
      if (name.toLowerCase() === "proxy-authorization") {
        delete options.headers[name];
      }
    }
  }
  if (isRedirect && options.agent && options.agent[kAxiosInstalledTunnel]) {
    options.agent = void 0;
  }
  if (proxy) {
    const isProxyURL = proxy instanceof URL;
    const readProxyField = (key) => isProxyURL || utils_default.hasOwnProp(proxy, key) ? proxy[key] : void 0;
    const proxyUsername = readProxyField("username");
    const proxyPassword = readProxyField("password");
    let proxyAuth = utils_default.hasOwnProp(proxy, "auth") ? proxy.auth : void 0;
    if (proxyUsername) {
      proxyAuth = (proxyUsername || "") + ":" + (proxyPassword || "");
    }
    if (proxyAuth) {
      const authIsObject = typeof proxyAuth === "object";
      const authUsername = authIsObject && utils_default.hasOwnProp(proxyAuth, "username") ? proxyAuth.username : void 0;
      const authPassword = authIsObject && utils_default.hasOwnProp(proxyAuth, "password") ? proxyAuth.password : void 0;
      const validProxyAuth = Boolean(authUsername || authPassword);
      if (validProxyAuth) {
        proxyAuth = (authUsername || "") + ":" + (authPassword || "");
      } else if (authIsObject) {
        throw new AxiosError_default("Invalid proxy authorization", AxiosError_default.ERR_BAD_OPTION, { proxy });
      }
    }
    const targetIsHttps = isHttps.test(options.protocol);
    if (targetIsHttps) {
      if (!(configHttpsAgent instanceof import_https_proxy_agent.default)) {
        const proxyHost = readProxyField("hostname") || readProxyField("host");
        const proxyPort = readProxyField("port");
        const rawProxyProtocol = readProxyField("protocol");
        const normalizedProtocol = rawProxyProtocol ? rawProxyProtocol.includes(":") ? rawProxyProtocol : `${rawProxyProtocol}:` : "http:";
        const proxyHostForURL = proxyHost && proxyHost.includes(":") && !proxyHost.startsWith("[") ? `[${proxyHost}]` : proxyHost;
        const proxyURL = new URL(
          `${normalizedProtocol}//${proxyHostForURL}${proxyPort ? ":" + proxyPort : ""}`
        );
        const agentOptions = {
          protocol: proxyURL.protocol,
          hostname: proxyURL.hostname.replace(/^\[|\]$/g, ""),
          port: proxyURL.port,
          auth: proxyAuth && typeof proxyAuth === "string" ? proxyAuth : void 0
        };
        if (proxyURL.protocol === "https:") {
          agentOptions.ALPNProtocols = ["http/1.1"];
        }
        const tunnelingAgent = getTunnelingAgent(agentOptions, configHttpsAgent);
        options.agent = tunnelingAgent;
        if (options.agents) {
          options.agents.https = tunnelingAgent;
        }
      }
    } else {
      if (proxyAuth) {
        const base64 = Buffer.from(proxyAuth, "utf8").toString("base64");
        options.headers["Proxy-Authorization"] = "Basic " + base64;
      }
      let hasUserHostHeader = false;
      for (const name of Object.keys(options.headers)) {
        if (name.toLowerCase() === "host") {
          hasUserHostHeader = true;
          break;
        }
      }
      if (!hasUserHostHeader) {
        options.headers.host = options.hostname + (options.port ? ":" + options.port : "");
      }
      const proxyHost = readProxyField("hostname") || readProxyField("host");
      options.hostname = proxyHost;
      options.host = proxyHost;
      options.port = readProxyField("port");
      options.path = location;
      const proxyProtocol = readProxyField("protocol");
      if (proxyProtocol) {
        options.protocol = proxyProtocol.includes(":") ? proxyProtocol : `${proxyProtocol}:`;
      }
    }
  }
  options.beforeRedirects.proxy = function beforeRedirect(redirectOptions) {
    setProxy(
      redirectOptions,
      configProxy,
      redirectOptions.href,
      true,
      configHttpsAgent,
      configHttpAgent,
      allowEnvProxy
    );
  };
  return Boolean(
    proxy || configProxy !== false && allowEnvProxy && isNodeEnvProxyEnabled(proxyEnvAgent)
  );
}
var isHttpAdapterSupported = typeof process !== "undefined" && utils_default.kindOf(process) === "process";
var wrapAsync = (asyncExecutor) => {
  return new Promise((resolve, reject) => {
    let onDone;
    let isDone;
    const done = (value, isRejected) => {
      if (isDone) return;
      isDone = true;
      onDone && onDone(value, isRejected);
    };
    const _resolve = (value) => {
      done(value);
      resolve(value);
    };
    const _reject = (reason) => {
      done(reason, true);
      reject(reason);
    };
    asyncExecutor(_resolve, _reject, (onDoneHandler) => onDone = onDoneHandler).catch(_reject);
  });
};
var resolveFamily = ({ address, family }) => {
  if (!utils_default.isString(address)) {
    throw new AxiosError_default("address must be a string", AxiosError_default.ERR_BAD_OPTION_VALUE);
  }
  return {
    address,
    family: family || (address.indexOf(".") < 0 ? 6 : 4)
  };
};
var buildAddressEntry = (address, family) => resolveFamily(utils_default.isObject(address) ? address : { address, family });
var normalizedLookupCache = /* @__PURE__ */ new WeakMap();
var normalizeLookup = (lookup) => {
  let normalized = normalizedLookupCache.get(lookup);
  if (normalized) {
    return normalized;
  }
  const callbackLookup = callbackify_default(lookup, (value) => utils_default.isArray(value) ? value : [value]);
  normalized = (hostname, opt, cb) => {
    callbackLookup(hostname, opt, (err, arg0, arg1) => {
      if (err) {
        return cb(err);
      }
      let addresses;
      try {
        addresses = utils_default.isArray(arg0) ? arg0.map((addr) => buildAddressEntry(addr)) : [buildAddressEntry(arg0, arg1)];
      } catch (error) {
        return cb(error);
      }
      opt.all ? cb(err, addresses) : cb(err, addresses[0].address, addresses[0].family);
    });
  };
  normalizedLookupCache.set(lookup, normalized);
  return normalized;
};
var http2Transport = {
  request(options, cb) {
    const authority = options.protocol + "//" + options.hostname + ":" + (options.port || (options.protocol === "https:" ? 443 : 80));
    const { http2Options, headers } = options;
    const session = http2Sessions.getSession(authority, http2Options);
    const { HTTP2_HEADER_SCHEME, HTTP2_HEADER_METHOD, HTTP2_HEADER_PATH, HTTP2_HEADER_STATUS } = import_http22.default.constants;
    const http2Headers = {
      [HTTP2_HEADER_SCHEME]: options.protocol.replace(":", ""),
      [HTTP2_HEADER_METHOD]: options.method,
      [HTTP2_HEADER_PATH]: options.path
    };
    utils_default.forEach(headers, (header, name) => {
      name.charAt(0) !== ":" && (http2Headers[name] = header);
    });
    const req = session.request(http2Headers);
    req.once("response", (responseHeaders) => {
      const response = req;
      responseHeaders = Object.assign({}, responseHeaders);
      const status = responseHeaders[HTTP2_HEADER_STATUS];
      delete responseHeaders[HTTP2_HEADER_STATUS];
      response.headers = responseHeaders;
      response.statusCode = +status;
      cb(response);
    });
    return req;
  }
};
var http_default = isHttpAdapterSupported && function httpAdapter(config) {
  return wrapAsync(async function dispatchHttpRequest(resolve, reject, onDone) {
    const own2 = (key) => utils_default.getSafeProp(config, key);
    const transitional2 = own2("transitional") || transitional_default;
    let data = own2("data");
    let lookup = own2("lookup");
    let family = own2("family");
    let httpVersion = own2("httpVersion");
    if (httpVersion === void 0) httpVersion = 1;
    const rawHttpVersion = httpVersion;
    let http2Options = own2("http2Options");
    const httpAgent = own2("httpAgent");
    const httpsAgent = own2("httpsAgent");
    const configProxy = own2("proxy");
    const responseType = own2("responseType");
    const responseEncoding = own2("responseEncoding");
    const socketPath = own2("socketPath");
    const method = own2("method").toUpperCase();
    const maxRedirects = own2("maxRedirects");
    const maxBodyLength = own2("maxBodyLength");
    const maxContentLength = own2("maxContentLength");
    const decompress = own2("decompress");
    let isDone;
    let rejected = false;
    let req;
    let connectPhaseTimer;
    try {
      httpVersion = +httpVersion;
    } catch (err) {
      throw new AxiosError_default(
        "Invalid protocol version: value is not a number",
        AxiosError_default.ERR_BAD_OPTION_VALUE,
        config
      );
    }
    if (Number.isNaN(httpVersion)) {
      throw new AxiosError_default(
        `Invalid protocol version: '${rawHttpVersion}' is not a number`,
        AxiosError_default.ERR_BAD_OPTION_VALUE,
        config
      );
    }
    if (httpVersion !== 1 && httpVersion !== 2) {
      throw new AxiosError_default(
        `Unsupported protocol version '${httpVersion}'`,
        AxiosError_default.ERR_BAD_OPTION_VALUE,
        config
      );
    }
    const isHttp2 = httpVersion === 2;
    if (lookup) {
      lookup = normalizeLookup(lookup);
    }
    const abortEmitter = new import_events.EventEmitter();
    function abort(reason) {
      try {
        abortEmitter.emit(
          "abort",
          !reason || reason.type ? new CanceledError_default(null, config, req) : reason
        );
      } catch (err) {
      }
    }
    function clearConnectPhaseTimer() {
      if (connectPhaseTimer) {
        clearTimeout(connectPhaseTimer);
        connectPhaseTimer = null;
      }
    }
    function createTimeoutError() {
      const configTimeout = own2("timeout");
      let timeoutErrorMessage = configTimeout ? "timeout of " + configTimeout + "ms exceeded" : "timeout exceeded";
      const configTimeoutErrorMessage = own2("timeoutErrorMessage");
      if (configTimeoutErrorMessage) {
        timeoutErrorMessage = configTimeoutErrorMessage;
      }
      return new AxiosError_default(
        timeoutErrorMessage,
        transitional2.clarifyTimeoutError ? AxiosError_default.ETIMEDOUT : AxiosError_default.ECONNABORTED,
        config,
        req
      );
    }
    abortEmitter.once("abort", reject);
    const onFinished = () => {
      clearConnectPhaseTimer();
      if (config.cancelToken) {
        config.cancelToken.unsubscribe(abort);
      }
      if (config.signal) {
        config.signal.removeEventListener("abort", abort);
      }
      abortEmitter.removeAllListeners();
    };
    if (config.cancelToken || config.signal) {
      config.cancelToken && config.cancelToken.subscribe(abort);
      if (config.signal) {
        config.signal.aborted ? abort() : config.signal.addEventListener("abort", abort);
      }
    }
    onDone((response, isRejected) => {
      isDone = true;
      clearConnectPhaseTimer();
      if (isRejected) {
        rejected = true;
        onFinished();
        return;
      }
      const { data: data2 } = response;
      if (data2 instanceof import_stream4.default.Readable || data2 instanceof import_stream4.default.Duplex) {
        const offListeners = import_stream4.default.finished(data2, () => {
          offListeners();
          onFinished();
        });
      } else {
        onFinished();
      }
    });
    const fullPath = buildFullPath(own2("baseURL"), own2("url"), own2("allowAbsoluteUrls"), config);
    const urlBase = socketPath ? "http://localhost" : platform_default.hasBrowserEnv ? platform_default.origin : void 0;
    const parsed = new URL(fullPath, urlBase);
    const protocol = parsed.protocol || supportedProtocols[0];
    if (protocol === "data:") {
      if (maxContentLength > -1) {
        const dataUrl = String(own2("url") || fullPath || "");
        const estimated = estimateDataURLBufferAllocation(dataUrl);
        if (estimated > maxContentLength) {
          return reject(
            new AxiosError_default(
              "maxContentLength size of " + maxContentLength + " exceeded",
              AxiosError_default.ERR_BAD_RESPONSE,
              config
            )
          );
        }
      }
      let convertedData;
      if (method !== "GET") {
        return settle(resolve, reject, {
          status: 405,
          statusText: "method not allowed",
          headers: {},
          config
        });
      }
      try {
        convertedData = fromDataURI(own2("url"), responseType === "blob", {
          Blob: config.env && config.env.Blob
        });
      } catch (err) {
        throw AxiosError_default.from(err, AxiosError_default.ERR_BAD_REQUEST, config);
      }
      if (responseType === "text") {
        convertedData = convertedData.toString(responseEncoding);
        if (!responseEncoding || responseEncoding === "utf8") {
          convertedData = utils_default.stripBOM(convertedData);
        }
      } else if (responseType === "stream") {
        convertedData = import_stream4.default.Readable.from(convertedData);
      }
      return settle(resolve, reject, {
        data: convertedData,
        status: 200,
        statusText: "OK",
        headers: new AxiosHeaders_default(),
        config
      });
    }
    if (supportedProtocols.indexOf(protocol) === -1) {
      return reject(
        new AxiosError_default("Unsupported protocol " + protocol, AxiosError_default.ERR_BAD_REQUEST, config)
      );
    }
    const headers = AxiosHeaders_default.from(config.headers).normalize();
    headers.set("User-Agent", "axios/" + VERSION, false);
    const { onUploadProgress, onDownloadProgress } = config;
    const maxRate = config.maxRate;
    let maxUploadRate = void 0;
    let maxDownloadRate = void 0;
    if (utils_default.isSpecCompliantForm(data)) {
      const userBoundary = headers.getContentType(/boundary=([-_\w\d]{10,70})/i);
      data = formDataToStream_default(
        data,
        (formHeaders) => {
          headers.set(formHeaders);
        },
        {
          tag: `axios-${VERSION}-boundary`,
          boundary: userBoundary && userBoundary[1] || void 0
        }
      );
    } else if (utils_default.isFormData(data) && utils_default.isFunction(data.getHeaders) && data.getHeaders !== Object.prototype.getHeaders) {
      setFormDataHeaders(headers, data.getHeaders(), own2("formDataHeaderPolicy"));
      if (!headers.hasContentLength()) {
        try {
          const knownLength = await import_util3.default.promisify(data.getLength).call(data);
          Number.isFinite(knownLength) && knownLength >= 0 && headers.setContentLength(knownLength);
        } catch (e) {
        }
      }
    } else if (utils_default.isBlob(data) || utils_default.isFile(data)) {
      data.size && headers.setContentType(data.type || "application/octet-stream");
      headers.setContentLength(data.size || 0);
      data = import_stream4.default.Readable.from(readBlob_default(data));
    } else if (data && !utils_default.isStream(data)) {
      if (Buffer.isBuffer(data)) {
      } else if (utils_default.isArrayBuffer(data)) {
        data = Buffer.from(new Uint8Array(data));
      } else if (utils_default.isString(data)) {
        data = Buffer.from(data, "utf-8");
      } else {
        return reject(
          new AxiosError_default(
            "Data after transformation must be a string, an ArrayBuffer, a Buffer, or a Stream",
            AxiosError_default.ERR_BAD_REQUEST,
            config
          )
        );
      }
      headers.setContentLength(data.length, false);
      if (maxBodyLength > -1 && data.length > maxBodyLength) {
        return reject(
          new AxiosError_default(
            "Request body larger than maxBodyLength limit",
            AxiosError_default.ERR_BAD_REQUEST,
            config
          )
        );
      }
    }
    const contentLength = utils_default.toFiniteNumber(headers.getContentLength());
    if (utils_default.isArray(maxRate)) {
      maxUploadRate = maxRate[0];
      maxDownloadRate = maxRate[1];
    } else {
      maxUploadRate = maxDownloadRate = maxRate;
    }
    if (data && (onUploadProgress || maxUploadRate)) {
      if (!utils_default.isStream(data)) {
        data = import_stream4.default.Readable.from(data, { objectMode: false });
      }
      data = import_stream4.default.pipeline(
        [
          data,
          new AxiosTransformStream_default({
            maxRate: utils_default.toFiniteNumber(maxUploadRate)
          })
        ],
        utils_default.noop
      );
      onUploadProgress && data.on(
        "progress",
        flushOnFinish(
          data,
          progressEventDecorator(
            contentLength,
            progressEventReducer(asyncDecorator(onUploadProgress, scheduleProgress), false, 3)
          )
        )
      );
    }
    let auth = void 0;
    const configAuth = own2("auth");
    if (configAuth) {
      const username = utils_default.getSafeProp(configAuth, "username") || "";
      const password = utils_default.getSafeProp(configAuth, "password") || "";
      auth = username + ":" + password;
    }
    if (!auth && (parsed.username || parsed.password)) {
      const urlUsername = decodeURIComponentSafe(parsed.username);
      const urlPassword = decodeURIComponentSafe(parsed.password);
      auth = urlUsername + ":" + urlPassword;
    }
    auth && headers.delete("authorization");
    let path4;
    try {
      path4 = buildURL(
        parsed.pathname + parsed.search,
        own2("params"),
        own2("paramsSerializer")
      ).replace(/^\?/, "");
    } catch (err) {
      return reject(
        AxiosError_default.from(err, AxiosError_default.ERR_BAD_REQUEST, config, null, null, {
          url: own2("url"),
          exists: true
        })
      );
    }
    headers.set(
      "Accept-Encoding",
      utils_default.hasOwnProp(transitional2, "advertiseZstdAcceptEncoding") && transitional2.advertiseZstdAcceptEncoding === true ? ACCEPT_ENCODING_WITH_ZSTD : ACCEPT_ENCODING,
      false
    );
    if (isHttp2 && lookup) {
      http2Options = Object.assign(/* @__PURE__ */ Object.create(null), http2Options, { lookup });
    }
    const options = Object.assign(/* @__PURE__ */ Object.create(null), {
      path: path4,
      method,
      headers: toByteStringHeaderObject(headers),
      agents: { http: httpAgent, https: httpsAgent },
      auth,
      protocol,
      family,
      beforeRedirect: dispatchBeforeRedirect,
      beforeRedirects: /* @__PURE__ */ Object.create(null),
      http2Options,
      createConnection: void 0
    });
    !utils_default.isUndefined(lookup) && (options.lookup = lookup);
    let proxyApplied = false;
    if (socketPath) {
      if (typeof socketPath !== "string") {
        return reject(
          new AxiosError_default("socketPath must be a string", AxiosError_default.ERR_BAD_OPTION_VALUE, config)
        );
      }
      const allowedSocketPaths = own2("allowedSocketPaths");
      if (allowedSocketPaths != null) {
        const allowed = Array.isArray(allowedSocketPaths) ? allowedSocketPaths : [allowedSocketPaths];
        const resolvedSocket = (0, import_path.resolve)(socketPath);
        const isAllowed = allowed.some(
          (entry) => typeof entry === "string" && (0, import_path.resolve)(entry) === resolvedSocket
        );
        if (!isAllowed) {
          return reject(
            new AxiosError_default(
              `socketPath "${socketPath}" is not permitted by allowedSocketPaths`,
              AxiosError_default.ERR_BAD_OPTION_VALUE,
              config
            )
          );
        }
      }
      options.socketPath = socketPath;
    } else {
      options.hostname = parsed.hostname.startsWith("[") ? parsed.hostname.slice(1, -1) : parsed.hostname;
      options.port = parsed.port;
      proxyApplied = setProxy(
        options,
        configProxy,
        protocol + "//" + parsed.hostname + (parsed.port ? ":" + parsed.port : "") + options.path,
        false,
        httpsAgent,
        httpAgent,
        // The HTTP/2 transport connects independently of HTTP/1 agents, so it
        // cannot apply either axios-resolved or agent-local environment proxies.
        // Explicit proxy config is still processed and rejected below.
        !isHttp2
      );
    }
    let transport;
    let isNativeTransport = false;
    let transportEnforcesMaxBodyLength = false;
    const isHttpsRequest = isHttps.test(options.protocol);
    if (options.agent == null) {
      options.agent = isHttpsRequest ? httpsAgent : httpAgent;
    }
    if (isHttp2) {
      if (proxyApplied) {
        return reject(
          new AxiosError_default(
            "HTTP/2 requests with a proxy are not supported",
            AxiosError_default.ERR_NOT_SUPPORT,
            config
          )
        );
      }
      transport = http2Transport;
    } else {
      const configTransport = own2("transport");
      if (configTransport) {
        transport = configTransport;
      } else if (maxRedirects === 0) {
        transport = isHttpsRequest ? import_https.default : import_http.default;
        isNativeTransport = true;
      } else {
        transportEnforcesMaxBodyLength = true;
        options.sensitiveHeaders = [];
        if (maxRedirects) {
          options.maxRedirects = maxRedirects;
        }
        const configBeforeRedirect = own2("beforeRedirect");
        if (configBeforeRedirect) {
          options.beforeRedirects.config = configBeforeRedirect;
        }
        if (auth) {
          const requestOrigin = parsed.origin;
          const authToRestore = auth;
          options.beforeRedirects.auth = function beforeRedirectAuth(redirectOptions) {
            try {
              if (new URL(redirectOptions.href).origin === requestOrigin) {
                redirectOptions.auth = authToRestore;
              }
            } catch (e) {
            }
          };
        }
        const sensitiveHeaders = own2("sensitiveHeaders");
        if (sensitiveHeaders != null) {
          if (!utils_default.isArray(sensitiveHeaders)) {
            return reject(
              new AxiosError_default(
                "sensitiveHeaders must be an array of strings",
                AxiosError_default.ERR_BAD_OPTION_VALUE,
                config
              )
            );
          }
          const sensitiveSet = /* @__PURE__ */ new Set();
          for (const header of sensitiveHeaders) {
            if (!utils_default.isString(header)) {
              return reject(
                new AxiosError_default(
                  "sensitiveHeaders must be an array of strings",
                  AxiosError_default.ERR_BAD_OPTION_VALUE,
                  config
                )
              );
            }
            sensitiveSet.add(header.toLowerCase());
          }
          if (sensitiveSet.size) {
            options.sensitiveHeaders = Array.from(sensitiveSet);
            options.beforeRedirects.sensitiveHeaders = function beforeRedirectSensitiveHeaders(redirectOptions, requestDetails) {
              if (!isSameOriginRedirect(redirectOptions, requestDetails)) {
                stripMatchingHeaders(redirectOptions.headers, sensitiveSet);
              }
            };
          }
        }
        transport = isHttpsRequest ? httpsFollow : httpFollow;
      }
    }
    if (maxBodyLength > -1) {
      options.maxBodyLength = maxBodyLength;
    } else {
      options.maxBodyLength = Infinity;
    }
    options.insecureHTTPParser = Boolean(own2("insecureHTTPParser"));
    req = transport.request(options, function handleResponse(res) {
      clearConnectPhaseTimer();
      if (req.destroyed) return;
      const streams = [res];
      const responseLength = utils_default.toFiniteNumber(res.headers["content-length"]);
      if (onDownloadProgress || maxDownloadRate) {
        const transformStream = new AxiosTransformStream_default({
          maxRate: utils_default.toFiniteNumber(maxDownloadRate)
        });
        onDownloadProgress && transformStream.on(
          "progress",
          flushOnFinish(
            transformStream,
            progressEventDecorator(
              responseLength,
              progressEventReducer(
                asyncDecorator(onDownloadProgress, scheduleProgress),
                true,
                3
              )
            )
          )
        );
        streams.push(transformStream);
      }
      let responseStream = res;
      const lastRequest = res.req || req;
      if (decompress !== false && res.headers["content-encoding"]) {
        if (method === "HEAD" || res.statusCode === 204) {
          delete res.headers["content-encoding"];
        }
        switch ((res.headers["content-encoding"] || "").toLowerCase()) {
          /*eslint default-case:0*/
          case "gzip":
          case "x-gzip":
          case "compress":
          case "x-compress":
            streams.push(import_zlib.default.createUnzip(zlibOptions));
            delete res.headers["content-encoding"];
            break;
          case "deflate":
            streams.push(new ZlibHeaderTransformStream_default());
            streams.push(import_zlib.default.createUnzip(zlibOptions));
            delete res.headers["content-encoding"];
            break;
          case "br":
            if (isBrotliSupported) {
              streams.push(import_zlib.default.createBrotliDecompress(brotliOptions));
              delete res.headers["content-encoding"];
            }
            break;
          case "zstd":
            if (isZstdSupported) {
              streams.push(import_zlib.default.createZstdDecompress(zstdOptions));
              delete res.headers["content-encoding"];
            }
            break;
        }
      }
      responseStream = streams.length > 1 ? import_stream4.default.pipeline(streams, utils_default.noop) : streams[0];
      const response = {
        status: res.statusCode,
        statusText: res.statusMessage,
        headers: new AxiosHeaders_default(res.headers),
        config,
        request: lastRequest
      };
      if (responseType === "stream") {
        if (maxContentLength > -1) {
          const limit = maxContentLength;
          const source = responseStream;
          async function* enforceMaxContentLength() {
            let totalResponseBytes = 0;
            for await (const chunk of source) {
              totalResponseBytes += chunk.length;
              if (totalResponseBytes > limit) {
                throw new AxiosError_default(
                  "maxContentLength size of " + limit + " exceeded",
                  AxiosError_default.ERR_BAD_RESPONSE,
                  config,
                  lastRequest
                );
              }
              yield chunk;
            }
          }
          responseStream = import_stream4.default.Readable.from(enforceMaxContentLength(), {
            objectMode: false
          });
        }
        response.data = responseStream;
        settle(resolve, reject, response);
      } else {
        const responseBuffer = [];
        let totalResponseBytes = 0;
        responseStream.on("data", function handleStreamData(chunk) {
          responseBuffer.push(chunk);
          totalResponseBytes += chunk.length;
          if (maxContentLength > -1 && totalResponseBytes > maxContentLength) {
            rejected = true;
            responseStream.destroy();
            abort(
              new AxiosError_default(
                "maxContentLength size of " + maxContentLength + " exceeded",
                AxiosError_default.ERR_BAD_RESPONSE,
                config,
                lastRequest
              )
            );
          }
        });
        responseStream.on("aborted", function handlerStreamAborted() {
          if (rejected) {
            return;
          }
          const err = new AxiosError_default(
            "stream has been aborted",
            AxiosError_default.ERR_BAD_RESPONSE,
            config,
            lastRequest,
            response
          );
          responseStream.destroy(err);
          reject(err);
        });
        responseStream.on("error", function handleStreamError(err) {
          if (rejected) return;
          reject(AxiosError_default.from(err, null, config, lastRequest, response));
        });
        responseStream.on("end", function handleStreamEnd() {
          try {
            let responseData = responseBuffer.length === 1 ? responseBuffer[0] : Buffer.concat(responseBuffer);
            if (responseType !== "arraybuffer") {
              responseData = responseData.toString(responseEncoding);
              if (!responseEncoding || responseEncoding === "utf8") {
                responseData = utils_default.stripBOM(responseData);
              }
            }
            response.data = responseData;
          } catch (err) {
            return reject(AxiosError_default.from(err, null, config, response.request, response));
          }
          settle(resolve, reject, response);
        });
      }
      abortEmitter.once("abort", (err) => {
        if (!responseStream.destroyed) {
          responseStream.emit("error", err);
          responseStream.destroy();
        }
      });
    });
    abortEmitter.once("abort", (err) => {
      if (req.close) {
        req.close();
      } else {
        req.destroy(err);
      }
    });
    req.on("error", function handleRequestError(err) {
      reject(AxiosError_default.from(err, null, config, req));
    });
    const boundSockets = /* @__PURE__ */ new Set();
    req.on("socket", function handleRequestSocket(socket) {
      if (typeof socket.setKeepAlive === "function") {
        socket.setKeepAlive(true, 1e3 * 60);
      }
      if (!socket[kAxiosSocketListener]) {
        socket.on("error", handleSocketError);
        socket[kAxiosSocketListener] = true;
      }
      socket[kAxiosCurrentReq] = req;
      boundSockets.add(socket);
    });
    req.once("close", function clearCurrentReq() {
      clearConnectPhaseTimer();
      for (const socket of boundSockets) {
        if (socket[kAxiosCurrentReq] === req) {
          socket[kAxiosCurrentReq] = null;
        }
      }
      boundSockets.clear();
    });
    if (own2("timeout")) {
      const timeout = parseInt(own2("timeout"), 10);
      if (Number.isNaN(timeout)) {
        abort(
          new AxiosError_default(
            "error trying to parse `config.timeout` to int",
            AxiosError_default.ERR_BAD_OPTION_VALUE,
            config,
            req
          )
        );
        return;
      }
      const handleTimeout = function handleTimeout2() {
        if (isDone) return;
        abort(createTimeoutError());
      };
      if (isNativeTransport && timeout > 0) {
        connectPhaseTimer = setTimeout(handleTimeout, timeout);
      }
      req.setTimeout(timeout, handleTimeout);
    } else {
      req.setTimeout(0);
    }
    if (utils_default.isStream(data)) {
      let ended = false;
      let errored = false;
      data.on("end", () => {
        ended = true;
      });
      data.once("error", (err) => {
        errored = true;
        req.destroy(err);
      });
      data.on("close", () => {
        if (!ended && !errored) {
          abort(new CanceledError_default("Request stream has been aborted", config, req));
        }
      });
      let uploadStream = data;
      if (maxBodyLength > -1 && !transportEnforcesMaxBodyLength) {
        const limit = maxBodyLength;
        let bytesSent = 0;
        uploadStream = import_stream4.default.pipeline(
          [
            data,
            new import_stream4.default.Transform({
              transform(chunk, _enc, cb) {
                bytesSent += chunk.length;
                if (bytesSent > limit) {
                  return cb(
                    new AxiosError_default(
                      "Request body larger than maxBodyLength limit",
                      AxiosError_default.ERR_BAD_REQUEST,
                      config,
                      req
                    )
                  );
                }
                cb(null, chunk);
              }
            })
          ],
          utils_default.noop
        );
        uploadStream.on("error", (err) => {
          if (!req.destroyed) req.destroy(err);
        });
      }
      uploadStream.pipe(req);
    } else {
      data && req.write(data);
      req.end();
    }
  });
};

// node_modules/axios/lib/helpers/isURLSameOrigin.js
var isURLSameOrigin_default = platform_default.hasStandardBrowserEnv ? /* @__PURE__ */ ((origin2, isMSIE) => (url2) => {
  url2 = new URL(url2, platform_default.origin);
  return origin2.protocol === url2.protocol && origin2.host === url2.host && (isMSIE || origin2.port === url2.port);
})(
  new URL(platform_default.origin),
  platform_default.navigator && /(msie|trident)/i.test(platform_default.navigator.userAgent)
) : () => true;

// node_modules/axios/lib/helpers/cookies.js
var cookies_default = platform_default.hasStandardBrowserEnv ? (
  // Standard browser envs support document.cookie
  {
    write(name, value, expires, path4, domain, secure, sameSite) {
      if (typeof document === "undefined") return;
      const cookie = [`${name}=${encodeURIComponent(value)}`];
      if (utils_default.isNumber(expires)) {
        cookie.push(`expires=${new Date(expires).toUTCString()}`);
      }
      if (utils_default.isString(path4)) {
        cookie.push(`path=${path4}`);
      }
      if (utils_default.isString(domain)) {
        cookie.push(`domain=${domain}`);
      }
      if (secure === true) {
        cookie.push("secure");
      }
      if (utils_default.isString(sameSite)) {
        cookie.push(`SameSite=${sameSite}`);
      }
      document.cookie = cookie.join("; ");
    },
    read(name) {
      if (typeof document === "undefined") return null;
      const cookies = document.cookie.split(";");
      for (let i = 0; i < cookies.length; i++) {
        const cookie = cookies[i].replace(/^\s+/, "");
        const eq = cookie.indexOf("=");
        if (eq !== -1 && cookie.slice(0, eq) === name) {
          try {
            return decodeURIComponent(cookie.slice(eq + 1));
          } catch (e) {
            return cookie.slice(eq + 1);
          }
        }
      }
      return null;
    },
    remove(name) {
      this.write(name, "", Date.now() - 864e5, "/");
    }
  }
) : (
  // Non-standard browser env (web workers, react-native) lack needed support.
  {
    write() {
    },
    read() {
      return null;
    },
    remove() {
    }
  }
);

// node_modules/axios/lib/core/mergeConfig.js
var headersToObject = (thing) => thing instanceof AxiosHeaders_default ? { ...thing } : thing;
var ownEnumerableKeys = (thing) => {
  if (Object.getOwnPropertySymbols && Object.getOwnPropertyDescriptor) {
    return Object.keys(thing).concat(
      Object.getOwnPropertySymbols(thing).filter(
        (symbol) => Object.getOwnPropertyDescriptor(thing, symbol).enumerable
      )
    );
  }
  return Object.keys(thing);
};
function mergeConfig(config1, config2) {
  config1 = config1 || {};
  config2 = config2 || {};
  const config = /* @__PURE__ */ Object.create(null);
  Object.defineProperty(config, "hasOwnProperty", {
    // Null-proto descriptor so a polluted Object.prototype.get cannot turn
    // this data descriptor into an accessor descriptor on the way in.
    __proto__: null,
    value: Object.prototype.hasOwnProperty,
    enumerable: false,
    writable: true,
    configurable: true
  });
  function getMergedValue(target, source, prop, caseless) {
    if (utils_default.isPlainObject(target) && utils_default.isPlainObject(source)) {
      return utils_default.merge.call({ caseless }, target, source);
    } else if (utils_default.isPlainObject(source)) {
      return utils_default.merge({}, source);
    } else if (utils_default.isArray(source)) {
      return source.slice();
    }
    return source;
  }
  function mergeDeepProperties(a, b, prop, caseless) {
    if (!utils_default.isUndefined(b)) {
      return getMergedValue(a, b, prop, caseless);
    } else if (!utils_default.isUndefined(a)) {
      return getMergedValue(void 0, a, prop, caseless);
    }
  }
  function valueFromConfig2(a, b) {
    if (!utils_default.isUndefined(b)) {
      return getMergedValue(void 0, b);
    }
  }
  function defaultToConfig2(a, b) {
    if (!utils_default.isUndefined(b)) {
      return getMergedValue(void 0, b);
    } else if (!utils_default.isUndefined(a)) {
      return getMergedValue(void 0, a);
    }
  }
  function getMergedTransitionalOption(prop) {
    const transitional2 = utils_default.hasOwnProp(config2, "transitional") ? config2.transitional : void 0;
    if (!utils_default.isUndefined(transitional2)) {
      if (utils_default.isPlainObject(transitional2)) {
        if (utils_default.hasOwnProp(transitional2, prop)) {
          return transitional2[prop];
        }
      } else {
        return void 0;
      }
    }
    const transitional1 = utils_default.hasOwnProp(config1, "transitional") ? config1.transitional : void 0;
    if (utils_default.isPlainObject(transitional1) && utils_default.hasOwnProp(transitional1, prop)) {
      return transitional1[prop];
    }
    return void 0;
  }
  function mergeDirectKeys(a, b, prop) {
    if (utils_default.hasOwnProp(config2, prop)) {
      return getMergedValue(a, b);
    } else if (utils_default.hasOwnProp(config1, prop)) {
      return getMergedValue(void 0, a);
    }
  }
  const mergeMap = {
    url: valueFromConfig2,
    method: valueFromConfig2,
    data: valueFromConfig2,
    baseURL: defaultToConfig2,
    transformRequest: defaultToConfig2,
    transformResponse: defaultToConfig2,
    paramsSerializer: defaultToConfig2,
    timeout: defaultToConfig2,
    timeoutErrorMessage: defaultToConfig2,
    withCredentials: defaultToConfig2,
    withXSRFToken: defaultToConfig2,
    adapter: defaultToConfig2,
    responseType: defaultToConfig2,
    xsrfCookieName: defaultToConfig2,
    xsrfHeaderName: defaultToConfig2,
    onUploadProgress: defaultToConfig2,
    onDownloadProgress: defaultToConfig2,
    decompress: defaultToConfig2,
    maxContentLength: defaultToConfig2,
    maxBodyLength: defaultToConfig2,
    beforeRedirect: defaultToConfig2,
    transport: defaultToConfig2,
    httpAgent: defaultToConfig2,
    httpsAgent: defaultToConfig2,
    cancelToken: defaultToConfig2,
    socketPath: defaultToConfig2,
    allowedSocketPaths: defaultToConfig2,
    responseEncoding: defaultToConfig2,
    validateStatus: mergeDirectKeys,
    headers: (a, b, prop) => mergeDeepProperties(headersToObject(a), headersToObject(b), prop, true)
  };
  utils_default.forEach(ownEnumerableKeys({ ...config1, ...config2 }), function computeConfigValue(prop) {
    if (prop === "__proto__" || prop === "constructor" || prop === "prototype") return;
    const merge2 = utils_default.hasOwnProp(mergeMap, prop) ? mergeMap[prop] : mergeDeepProperties;
    const a = utils_default.hasOwnProp(config1, prop) ? config1[prop] : void 0;
    const b = utils_default.hasOwnProp(config2, prop) ? config2[prop] : void 0;
    const configValue = merge2(a, b, prop);
    utils_default.isUndefined(configValue) && merge2 !== mergeDirectKeys || (config[prop] = configValue);
  });
  if (utils_default.hasOwnProp(config2, "validateStatus") && utils_default.isUndefined(config2.validateStatus) && getMergedTransitionalOption("validateStatusUndefinedResolves") === false) {
    if (utils_default.hasOwnProp(config1, "validateStatus")) {
      config.validateStatus = getMergedValue(void 0, config1.validateStatus);
    } else {
      delete config.validateStatus;
    }
  }
  return config;
}

// node_modules/axios/lib/helpers/resolveConfig.js
var encodeUTF8 = (str) => encodeURIComponent(str).replace(
  /%([0-9A-F]{2})/gi,
  (_, hex) => String.fromCharCode(parseInt(hex, 16))
);
function resolveConfig(config) {
  const newConfig = mergeConfig({}, config);
  const own2 = (key) => utils_default.hasOwnProp(newConfig, key) ? newConfig[key] : void 0;
  const data = own2("data");
  let withXSRFToken = own2("withXSRFToken");
  const xsrfHeaderName = own2("xsrfHeaderName");
  const xsrfCookieName = own2("xsrfCookieName");
  let headers = own2("headers");
  const auth = own2("auth");
  const baseURL = own2("baseURL");
  const allowAbsoluteUrls = own2("allowAbsoluteUrls");
  const url2 = own2("url");
  newConfig.headers = headers = AxiosHeaders_default.from(headers);
  newConfig.url = buildURL(
    buildFullPath(baseURL, url2, allowAbsoluteUrls, newConfig),
    own2("params"),
    own2("paramsSerializer")
  );
  if (auth) {
    const username = utils_default.getSafeProp(auth, "username") || "";
    const password = utils_default.getSafeProp(auth, "password") || "";
    try {
      headers.set(
        "Authorization",
        "Basic " + btoa(username + ":" + (password ? encodeUTF8(password) : ""))
      );
    } catch (e) {
      throw AxiosError_default.from(e, AxiosError_default.ERR_BAD_OPTION_VALUE, config);
    }
  }
  if (utils_default.isFormData(data)) {
    const getHeaders = utils_default.getSafeProp(data, "getHeaders");
    if (platform_default.hasStandardBrowserEnv || platform_default.hasStandardBrowserWebWorkerEnv || utils_default.isReactNative(data)) {
      headers.setContentType(void 0);
    } else if (utils_default.isFunction(getHeaders)) {
      setFormDataHeaders(headers, getHeaders.call(data), own2("formDataHeaderPolicy"));
    }
  }
  if (platform_default.hasStandardBrowserEnv) {
    if (utils_default.isFunction(withXSRFToken)) {
      withXSRFToken = withXSRFToken(newConfig);
    }
    const shouldSendXSRF = withXSRFToken === true || withXSRFToken == null && isURLSameOrigin_default(newConfig.url);
    if (shouldSendXSRF) {
      const xsrfValue = xsrfHeaderName && xsrfCookieName && cookies_default.read(xsrfCookieName);
      if (xsrfValue) {
        headers.set(xsrfHeaderName, xsrfValue);
      }
    }
  }
  return newConfig;
}
var resolveConfig_default = resolveConfig;

// node_modules/axios/lib/adapters/xhr.js
var isXHRAdapterSupported = typeof XMLHttpRequest !== "undefined";
var xhr_default = isXHRAdapterSupported && function(config) {
  return new Promise(function dispatchXhrRequest(resolve, reject) {
    const _config = resolveConfig_default(config);
    let requestData = _config.data;
    const requestHeaders = AxiosHeaders_default.from(_config.headers).normalize();
    let { responseType, onUploadProgress, onDownloadProgress } = _config;
    let onCanceled;
    let uploadThrottled, downloadThrottled;
    let flushUpload, flushDownload, flushDownloadWithEvent;
    function done() {
      flushUpload && flushUpload();
      flushDownload && flushDownload();
      _config.cancelToken && _config.cancelToken.unsubscribe(onCanceled);
      _config.signal && _config.signal.removeEventListener("abort", onCanceled);
    }
    let request = new XMLHttpRequest();
    request.open(_config.method.toUpperCase(), _config.url, true);
    request.timeout = _config.timeout;
    function onloadend(event) {
      if (!request) {
        return;
      }
      if (request.status === 0 && (parseProtocol(normalizeURLForProtocolCheck(_config.url)) || parseProtocol(platform_default.origin)) !== "file" && !(request.responseURL && request.responseURL.startsWith("file:"))) {
        reject(new AxiosError_default("Request aborted", AxiosError_default.ECONNABORTED, config, request));
        done();
        request = null;
        return;
      }
      try {
        if (event) {
          flushDownloadWithEvent && flushDownloadWithEvent(event);
        } else {
          flushDownload && flushDownload();
        }
      } catch (err) {
        setTimeout(() => {
          throw err;
        });
      }
      if (!request) {
        return;
      }
      const responseHeaders = AxiosHeaders_default.from(
        "getAllResponseHeaders" in request && request.getAllResponseHeaders()
      );
      const responseData = !responseType || responseType === "text" || responseType === "json" ? request.responseText : request.response;
      const response = {
        data: responseData,
        status: request.status,
        statusText: request.statusText,
        headers: responseHeaders,
        config,
        request
      };
      settle(
        function _resolve(value) {
          resolve(value);
          done();
        },
        function _reject(err) {
          reject(err);
          done();
        },
        response
      );
      request = null;
    }
    if ("onloadend" in request) {
      request.onloadend = onloadend;
    } else {
      request.onreadystatechange = function handleLoad() {
        if (!request || request.readyState !== 4) {
          return;
        }
        if (request.status === 0 && !(request.responseURL && request.responseURL.startsWith("file:"))) {
          return;
        }
        setTimeout(onloadend);
      };
    }
    request.onabort = function handleAbort() {
      if (!request) {
        return;
      }
      reject(new AxiosError_default("Request aborted", AxiosError_default.ECONNABORTED, config, request));
      done();
      request = null;
    };
    request.onerror = function handleError(event) {
      const msg = event && event.message ? event.message : "Network Error";
      const err = new AxiosError_default(msg, AxiosError_default.ERR_NETWORK, config, request);
      err.event = event || null;
      reject(err);
      done();
      request = null;
    };
    request.ontimeout = function handleTimeout() {
      let timeoutErrorMessage = _config.timeout ? "timeout of " + _config.timeout + "ms exceeded" : "timeout exceeded";
      const transitional2 = _config.transitional || transitional_default;
      if (_config.timeoutErrorMessage) {
        timeoutErrorMessage = _config.timeoutErrorMessage;
      }
      reject(
        new AxiosError_default(
          timeoutErrorMessage,
          transitional2.clarifyTimeoutError ? AxiosError_default.ETIMEDOUT : AxiosError_default.ECONNABORTED,
          config,
          request
        )
      );
      done();
      request = null;
    };
    requestData === void 0 && requestHeaders.setContentType(null);
    if ("setRequestHeader" in request) {
      utils_default.forEach(toByteStringHeaderObject(requestHeaders), function setRequestHeader(val, key) {
        request.setRequestHeader(key, val);
      });
    }
    if (!utils_default.isUndefined(_config.withCredentials)) {
      request.withCredentials = !!_config.withCredentials;
    }
    if (responseType && responseType !== "json") {
      request.responseType = _config.responseType;
    }
    if (onDownloadProgress) {
      [downloadThrottled, flushDownload, flushDownloadWithEvent] = progressEventReducer(
        onDownloadProgress,
        true
      );
      request.addEventListener("progress", downloadThrottled);
    }
    if (onUploadProgress && request.upload) {
      [uploadThrottled, flushUpload] = progressEventReducer(onUploadProgress);
      request.upload.addEventListener("progress", uploadThrottled);
      request.upload.addEventListener("loadend", flushUpload);
    }
    if (_config.cancelToken || _config.signal) {
      onCanceled = (cancel) => {
        if (!request) {
          return;
        }
        reject(!cancel || cancel.type ? new CanceledError_default(null, config, request) : cancel);
        request.abort();
        done();
        request = null;
      };
      _config.cancelToken && _config.cancelToken.subscribe(onCanceled);
      if (_config.signal) {
        _config.signal.aborted ? onCanceled() : _config.signal.addEventListener("abort", onCanceled);
      }
    }
    const protocol = parseProtocol(_config.url);
    if (protocol && !platform_default.protocols.includes(protocol)) {
      reject(
        new AxiosError_default(
          "Unsupported protocol " + protocol + ":",
          AxiosError_default.ERR_BAD_REQUEST,
          config
        )
      );
      done();
      return;
    }
    request.send(requestData || null);
  });
};

// node_modules/axios/lib/helpers/composeSignals.js
var composeSignals = (signals, timeout) => {
  signals = signals ? signals.filter(Boolean) : [];
  if (!timeout && !signals.length) {
    return;
  }
  const controller = new AbortController();
  let aborted = false;
  const onabort = function(reason) {
    if (!aborted) {
      aborted = true;
      unsubscribe();
      const err = reason instanceof Error ? reason : this.reason;
      controller.abort(
        err instanceof AxiosError_default ? err : new CanceledError_default(err instanceof Error ? err.message : err)
      );
    }
  };
  let timer = timeout && setTimeout(() => {
    timer = null;
    onabort(new AxiosError_default(`timeout of ${timeout}ms exceeded`, AxiosError_default.ETIMEDOUT));
  }, timeout);
  const unsubscribe = () => {
    if (!signals) {
      return;
    }
    timer && clearTimeout(timer);
    timer = null;
    signals.forEach((signal2) => {
      signal2.unsubscribe ? signal2.unsubscribe(onabort) : signal2.removeEventListener("abort", onabort);
    });
    signals = null;
  };
  signals.forEach((signal2) => {
    if (aborted) {
      return;
    }
    if (signal2.aborted) {
      onabort.call(signal2);
      return;
    }
    signal2.addEventListener("abort", onabort, { once: true });
  });
  const { signal } = controller;
  signal.unsubscribe = () => utils_default.asap(unsubscribe);
  return signal;
};
var composeSignals_default = composeSignals;

// node_modules/axios/lib/helpers/trackStream.js
var streamChunk = function* (chunk, chunkSize) {
  let len = chunk.byteLength;
  if (!chunkSize || len < chunkSize) {
    yield chunk;
    return;
  }
  let pos = 0;
  let end;
  while (pos < len) {
    end = pos + chunkSize;
    yield chunk.slice(pos, end);
    pos = end;
  }
};
var readBytes = async function* (iterable, chunkSize) {
  for await (const chunk of readStream(iterable)) {
    yield* streamChunk(chunk, chunkSize);
  }
};
var readStream = async function* (stream4) {
  if (stream4[Symbol.asyncIterator]) {
    yield* stream4;
    return;
  }
  const reader = stream4.getReader();
  try {
    for (; ; ) {
      const { done, value } = await reader.read();
      if (done) {
        break;
      }
      yield value;
    }
  } finally {
    await reader.cancel();
  }
};
var trackStream = (stream4, chunkSize, onProgress, onFinish) => {
  const iterator2 = readBytes(stream4, chunkSize);
  let bytes = 0;
  let done;
  let _onFinish = (e) => {
    if (!done) {
      done = true;
      onFinish && onFinish(e);
    }
  };
  return new ReadableStream(
    {
      async pull(controller) {
        try {
          const { done: done2, value } = await iterator2.next();
          if (done2) {
            _onFinish();
            controller.close();
            return;
          }
          let len = value.byteLength;
          if (onProgress) {
            let loadedBytes = bytes += len;
            onProgress(loadedBytes);
          }
          controller.enqueue(new Uint8Array(value));
        } catch (err) {
          _onFinish(err);
          throw err;
        }
      },
      cancel(reason) {
        _onFinish(reason);
        return iterator2.return();
      }
    },
    {
      highWaterMark: 2
    }
  );
};

// node_modules/axios/lib/adapters/fetch.js
var DEFAULT_CHUNK_SIZE = 64 * 1024;
var DEFAULT_REQUEST_OPTIONS = {
  cache: "default",
  redirect: "follow",
  referrer: "about:client",
  referrerPolicy: "",
  mode: "cors",
  integrity: "",
  keepalive: false,
  priority: "auto",
  window: null
};
var { isFunction: isFunction2 } = utils_default;
var encodeUTF82 = (str) => encodeURIComponent(str).replace(
  /%([0-9A-F]{2})/gi,
  (_, hex) => String.fromCharCode(parseInt(hex, 16))
);
var decodeURIComponentSafe2 = (value) => {
  if (!utils_default.isString(value)) {
    return value;
  }
  try {
    return decodeURIComponent(value);
  } catch (error) {
    return value;
  }
};
var test = (fn, ...args) => {
  try {
    return !!fn(...args);
  } catch (e) {
    return false;
  }
};
var maybeWithAuthCredentials = (url2) => {
  const protocolIndex = url2.indexOf("://");
  let urlToCheck = url2;
  if (protocolIndex !== -1) {
    urlToCheck = urlToCheck.slice(protocolIndex + 3);
  }
  return urlToCheck.includes("@") || urlToCheck.includes(":");
};
var factory = (env) => {
  const globalObject = utils_default.global !== void 0 && utils_default.global !== null ? utils_default.global : globalThis;
  const { ReadableStream: ReadableStream2, TextEncoder: TextEncoder2 } = globalObject;
  env = utils_default.merge.call(
    {
      skipUndefined: true
    },
    {
      Request: globalObject.Request,
      Response: globalObject.Response
    },
    env
  );
  const { fetch: envFetch, Request, Response } = env;
  const isFetchSupported = envFetch ? isFunction2(envFetch) : typeof fetch === "function";
  const isRequestSupported = isFunction2(Request);
  const isResponseSupported = isFunction2(Response);
  if (!isFetchSupported) {
    return false;
  }
  const isReadableStreamSupported = isFetchSupported && isFunction2(ReadableStream2);
  const encodeText = isFetchSupported && (typeof TextEncoder2 === "function" ? /* @__PURE__ */ ((encoder) => (str) => encoder.encode(str))(new TextEncoder2()) : async (str) => new Uint8Array(await new Request(str).arrayBuffer()));
  const supportsRequestStream = isRequestSupported && isReadableStreamSupported && test(() => {
    let duplexAccessed = false;
    const request = new Request(platform_default.origin, {
      body: new ReadableStream2(),
      method: "POST",
      get duplex() {
        duplexAccessed = true;
        return "half";
      }
    });
    const hasContentType = request.headers.has("Content-Type");
    if (request.body != null) {
      request.body.cancel();
    }
    return duplexAccessed && !hasContentType;
  });
  const supportsResponseStream = isResponseSupported && isReadableStreamSupported && test(() => utils_default.isReadableStream(new Response("").body));
  const resolvers = {
    stream: supportsResponseStream && ((res) => res.body)
  };
  isFetchSupported && (() => {
    ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((type) => {
      !resolvers[type] && (resolvers[type] = (res, config) => {
        let method = res && res[type];
        if (method) {
          return method.call(res);
        }
        throw new AxiosError_default(
          `Response type '${type}' is not supported`,
          AxiosError_default.ERR_NOT_SUPPORT,
          config
        );
      });
    });
  })();
  const getBodyLength = async (body) => {
    if (body == null) {
      return 0;
    }
    if (utils_default.isBlob(body)) {
      return body.size;
    }
    if (utils_default.isSpecCompliantForm(body)) {
      const _request = new Request(platform_default.origin, {
        method: "POST",
        body
      });
      return (await _request.arrayBuffer()).byteLength;
    }
    if (utils_default.isArrayBufferView(body) || utils_default.isArrayBuffer(body)) {
      return body.byteLength;
    }
    if (utils_default.isURLSearchParams(body)) {
      body = body + "";
    }
    if (utils_default.isString(body)) {
      return (await encodeText(body)).byteLength;
    }
  };
  const resolveBodyLength = async (headers, body) => {
    const length = utils_default.toFiniteNumber(headers.getContentLength());
    return length == null ? getBodyLength(body) : length;
  };
  return async (config) => {
    let {
      url: url2,
      method,
      data,
      signal,
      cancelToken,
      timeout,
      onDownloadProgress,
      onUploadProgress,
      responseType,
      headers,
      withCredentials = "same-origin",
      fetchOptions,
      maxContentLength,
      maxBodyLength,
      maxRedirects
    } = resolveConfig_default(config);
    const hasMaxContentLength = utils_default.isNumber(maxContentLength) && maxContentLength > -1;
    const hasMaxBodyLength = utils_default.isNumber(maxBodyLength) && maxBodyLength > -1;
    const own2 = (key) => utils_default.hasOwnProp(config, key) ? config[key] : void 0;
    let _fetch = envFetch || fetch;
    responseType = responseType ? (responseType + "").toLowerCase() : "text";
    let composedSignal = composeSignals_default(
      [signal, cancelToken && cancelToken.toAbortSignal()],
      timeout
    );
    let request = null;
    const unsubscribe = composedSignal && composedSignal.unsubscribe && (() => {
      composedSignal.unsubscribe();
    });
    let requestContentLength;
    let pendingBodyError = null;
    const maxBodyLengthError = () => new AxiosError_default(
      "Request body larger than maxBodyLength limit",
      AxiosError_default.ERR_BAD_REQUEST,
      config,
      request
    );
    try {
      let auth = void 0;
      const configAuth = own2("auth");
      if (configAuth) {
        const username = utils_default.getSafeProp(configAuth, "username") || "";
        const password = utils_default.getSafeProp(configAuth, "password") || "";
        auth = {
          username,
          password
        };
      }
      if (maybeWithAuthCredentials(url2)) {
        const parsedURL = new URL(url2, platform_default.origin);
        if (!auth && (parsedURL.username || parsedURL.password)) {
          const urlUsername = decodeURIComponentSafe2(parsedURL.username);
          const urlPassword = decodeURIComponentSafe2(parsedURL.password);
          auth = {
            username: urlUsername,
            password: urlPassword
          };
        }
        if (parsedURL.username || parsedURL.password) {
          parsedURL.username = "";
          parsedURL.password = "";
          url2 = parsedURL.href;
        }
      }
      if (auth) {
        headers.delete("authorization");
        headers.set(
          "Authorization",
          "Basic " + btoa(encodeUTF82((auth.username || "") + ":" + (auth.password || "")))
        );
      }
      if (hasMaxContentLength && typeof url2 === "string" && url2.startsWith("data:")) {
        const estimated = estimateDataURLDecodedBytes(url2);
        if (estimated > maxContentLength) {
          throw new AxiosError_default(
            "maxContentLength size of " + maxContentLength + " exceeded",
            AxiosError_default.ERR_BAD_RESPONSE,
            config,
            request
          );
        }
      }
      if (hasMaxBodyLength && method !== "get" && method !== "head") {
        const outboundLength = await getBodyLength(data);
        if (typeof outboundLength === "number" && isFinite(outboundLength)) {
          requestContentLength = outboundLength;
          if (outboundLength > maxBodyLength) {
            throw maxBodyLengthError();
          }
        }
      }
      const mustEnforceStreamBody = hasMaxBodyLength && (utils_default.isReadableStream(data) || utils_default.isStream(data));
      const trackRequestStream = (stream4, onProgress, flush) => trackStream(
        stream4,
        DEFAULT_CHUNK_SIZE,
        (loadedBytes) => {
          if (hasMaxBodyLength && loadedBytes > maxBodyLength) {
            throw pendingBodyError = maxBodyLengthError();
          }
          onProgress && onProgress(loadedBytes);
        },
        flush
      );
      if (supportsRequestStream && method !== "get" && method !== "head" && (onUploadProgress || mustEnforceStreamBody)) {
        requestContentLength = requestContentLength == null ? await resolveBodyLength(headers, data) : requestContentLength;
        if (requestContentLength !== 0 || mustEnforceStreamBody) {
          let _request = new Request(url2, {
            method: "POST",
            body: data,
            duplex: "half"
          });
          let contentTypeHeader;
          if (utils_default.isFormData(data) && (contentTypeHeader = _request.headers.get("content-type"))) {
            headers.setContentType(contentTypeHeader);
          }
          if (_request.body) {
            const [onProgress, flush] = onUploadProgress && progressEventDecorator(
              requestContentLength,
              progressEventReducer(asyncDecorator(onUploadProgress))
            ) || [];
            data = trackRequestStream(_request.body, onProgress, flush);
          }
        }
      } else if (mustEnforceStreamBody && !isRequestSupported && isReadableStreamSupported && method !== "get" && method !== "head") {
        data = trackRequestStream(data);
      } else if (mustEnforceStreamBody && isRequestSupported && !supportsRequestStream && method !== "get" && method !== "head") {
        throw new AxiosError_default(
          "Stream request bodies are not supported by the current fetch implementation",
          AxiosError_default.ERR_NOT_SUPPORT,
          config,
          request
        );
      }
      if (!utils_default.isString(withCredentials)) {
        withCredentials = withCredentials ? "include" : "omit";
      }
      const isCredentialsSupported = isRequestSupported && "credentials" in Request.prototype;
      if (utils_default.isFormData(data)) {
        const contentType = headers.getContentType();
        if (contentType && /^multipart\/form-data/i.test(contentType) && !/boundary=/i.test(contentType)) {
          headers.delete("content-type");
        }
      }
      headers.set("User-Agent", "axios/" + VERSION, false);
      const safeFetchOptions = fetchOptions == null ? fetchOptions : Object.assign(/* @__PURE__ */ Object.create(null), fetchOptions);
      if (safeFetchOptions) {
        delete safeFetchOptions.body;
        delete safeFetchOptions.headers;
        delete safeFetchOptions.method;
        delete safeFetchOptions.signal;
        delete safeFetchOptions.duplex;
        delete safeFetchOptions.credentials;
      }
      const resolvedOptions = Object.assign(/* @__PURE__ */ Object.create(null), safeFetchOptions, {
        signal: composedSignal,
        method: method.toUpperCase(),
        headers: toByteStringHeaderObject(headers.normalize()),
        body: data,
        duplex: "half",
        credentials: isCredentialsSupported ? withCredentials : void 0
      });
      if (isRequestSupported) {
        utils_default.forEach(DEFAULT_REQUEST_OPTIONS, (value, key) => {
          if (resolvedOptions[key] === void 0) {
            resolvedOptions[key] = value;
          }
        });
        if (resolvedOptions.signal === void 0) {
          resolvedOptions.signal = null;
        }
        if (resolvedOptions.body === void 0) {
          resolvedOptions.body = null;
        }
      }
      if (maxRedirects === 0) {
        resolvedOptions.redirect = "manual";
        if (safeFetchOptions) {
          safeFetchOptions.redirect = "manual";
        }
      }
      request = isRequestSupported && new Request(url2, resolvedOptions);
      let response = await (isRequestSupported ? _fetch(request, safeFetchOptions) : _fetch(url2, resolvedOptions));
      const responseHeaders = AxiosHeaders_default.from(response.headers);
      if (hasMaxContentLength) {
        const declaredLength = utils_default.toFiniteNumber(responseHeaders.getContentLength());
        if (declaredLength != null && declaredLength > maxContentLength) {
          throw new AxiosError_default(
            "maxContentLength size of " + maxContentLength + " exceeded",
            AxiosError_default.ERR_BAD_RESPONSE,
            config,
            request
          );
        }
      }
      const isStreamResponse = supportsResponseStream && (responseType === "stream" || responseType === "response");
      if (supportsResponseStream && response.body && (onDownloadProgress || hasMaxContentLength || isStreamResponse && unsubscribe)) {
        const options = {};
        ["status", "statusText", "headers"].forEach((prop) => {
          options[prop] = response[prop];
        });
        const responseContentLength = utils_default.toFiniteNumber(responseHeaders.getContentLength());
        const [onProgress, flush] = onDownloadProgress && progressEventDecorator(
          responseContentLength,
          progressEventReducer(asyncDecorator(onDownloadProgress), true)
        ) || [];
        let bytesRead = 0;
        const onChunkProgress = (loadedBytes) => {
          if (hasMaxContentLength) {
            bytesRead = loadedBytes;
            if (bytesRead > maxContentLength) {
              throw new AxiosError_default(
                "maxContentLength size of " + maxContentLength + " exceeded",
                AxiosError_default.ERR_BAD_RESPONSE,
                config,
                request
              );
            }
          }
          onProgress && onProgress(loadedBytes);
        };
        response = new Response(
          trackStream(response.body, DEFAULT_CHUNK_SIZE, onChunkProgress, () => {
            flush && flush();
            unsubscribe && unsubscribe();
          }),
          options
        );
      }
      responseType = responseType || "text";
      let responseData = await resolvers[utils_default.findKey(resolvers, responseType) || "text"](
        response,
        config
      );
      if (hasMaxContentLength && !supportsResponseStream && !isStreamResponse) {
        let materializedSize;
        if (responseData != null) {
          if (typeof responseData.byteLength === "number") {
            materializedSize = responseData.byteLength;
          } else if (typeof responseData.size === "number") {
            materializedSize = responseData.size;
          } else if (typeof responseData === "string") {
            materializedSize = typeof TextEncoder2 === "function" ? new TextEncoder2().encode(responseData).byteLength : responseData.length;
          }
        }
        if (typeof materializedSize === "number" && materializedSize > maxContentLength) {
          throw new AxiosError_default(
            "maxContentLength size of " + maxContentLength + " exceeded",
            AxiosError_default.ERR_BAD_RESPONSE,
            config,
            request
          );
        }
      }
      !isStreamResponse && unsubscribe && unsubscribe();
      return await new Promise((resolve, reject) => {
        settle(resolve, reject, {
          data: responseData,
          headers: AxiosHeaders_default.from(response.headers),
          status: response.status,
          statusText: response.statusText,
          config,
          request
        });
      });
    } catch (err) {
      unsubscribe && unsubscribe();
      if (composedSignal && composedSignal.aborted && composedSignal.reason instanceof AxiosError_default) {
        const canceledError = composedSignal.reason;
        canceledError.config = config;
        request && (canceledError.request = request);
        if (err !== canceledError) {
          Object.defineProperty(canceledError, "cause", {
            __proto__: null,
            value: err,
            writable: true,
            enumerable: false,
            configurable: true
          });
        }
        throw canceledError;
      }
      if (pendingBodyError) {
        request && !pendingBodyError.request && (pendingBodyError.request = request);
        throw pendingBodyError;
      }
      if (err instanceof AxiosError_default) {
        request && !err.request && (err.request = request);
        throw err;
      }
      if (err && err.name === "TypeError" && /Load failed|fetch/i.test(err.message)) {
        const networkError = new AxiosError_default(
          "Network Error",
          AxiosError_default.ERR_NETWORK,
          config,
          request,
          err && err.response
        );
        Object.defineProperty(networkError, "cause", {
          __proto__: null,
          value: err.cause || err,
          writable: true,
          enumerable: false,
          configurable: true
        });
        throw networkError;
      }
      throw AxiosError_default.from(err, err && err.code, config, request, err && err.response);
    }
  };
};
var seedCache = /* @__PURE__ */ new Map();
var getFetch = (config) => {
  let env = config && config.env || {};
  const { fetch: fetch2, Request, Response } = env;
  const seeds = [Request, Response, fetch2];
  let len = seeds.length, i = len, seed, target, map = seedCache;
  while (i--) {
    seed = seeds[i];
    target = map.get(seed);
    target === void 0 && map.set(seed, target = i ? /* @__PURE__ */ new Map() : factory(env));
    map = target;
  }
  return target;
};
var adapter = getFetch();

// node_modules/axios/lib/adapters/adapters.js
var knownAdapters = {
  http: http_default,
  xhr: xhr_default,
  fetch: {
    get: getFetch
  }
};
utils_default.forEach(knownAdapters, (fn, value) => {
  if (fn) {
    try {
      Object.defineProperty(fn, "name", { __proto__: null, value });
    } catch (e) {
    }
    Object.defineProperty(fn, "adapterName", { __proto__: null, value });
  }
});
var renderReason = (reason) => `- ${reason}`;
var isResolvedHandle = (adapter2) => utils_default.isFunction(adapter2) || adapter2 === null || adapter2 === false;
function getAdapter(adapters, config) {
  adapters = utils_default.isArray(adapters) ? adapters : [adapters];
  const { length } = adapters;
  let nameOrAdapter;
  let adapter2;
  const rejectedReasons = {};
  for (let i = 0; i < length; i++) {
    nameOrAdapter = adapters[i];
    let id;
    adapter2 = nameOrAdapter;
    if (!isResolvedHandle(nameOrAdapter)) {
      adapter2 = knownAdapters[(id = String(nameOrAdapter)).toLowerCase()];
      if (adapter2 === void 0) {
        throw new AxiosError_default(`Unknown adapter '${id}'`);
      }
    }
    if (adapter2 && (utils_default.isFunction(adapter2) || (adapter2 = adapter2.get(config)))) {
      break;
    }
    rejectedReasons[id || "#" + i] = adapter2;
  }
  if (!adapter2) {
    const reasons = Object.entries(rejectedReasons).map(
      ([id, state]) => `adapter ${id} ` + (state === false ? "is not supported by the environment" : "is not available in the build")
    );
    let s = length ? reasons.length > 1 ? "since :\n" + reasons.map(renderReason).join("\n") : " " + renderReason(reasons[0]) : "as no adapter specified";
    throw new AxiosError_default(
      `There is no suitable adapter to dispatch the request ` + s,
      AxiosError_default.ERR_NOT_SUPPORT
    );
  }
  return adapter2;
}
var adapters_default = {
  /**
   * Resolve an adapter from a list of adapter names or functions.
   * @type {Function}
   */
  getAdapter,
  /**
   * Exposes all known adapters
   * @type {Object<string, Function|Object>}
   */
  adapters: knownAdapters
};

// node_modules/axios/lib/core/dispatchRequest.js
function throwIfCancellationRequested(config) {
  if (config.cancelToken) {
    config.cancelToken.throwIfRequested();
  }
  if (config.signal && config.signal.aborted) {
    throw new CanceledError_default(null, config);
  }
}
function dispatchRequest(_config) {
  const config = utils_default.toSafeFlatObject(_config);
  throwIfCancellationRequested(config);
  config.headers = AxiosHeaders_default.from(utils_default.getSafeProp(config, "headers"));
  config.data = transformData.call(config, config.transformRequest);
  if (["post", "put", "patch"].indexOf(config.method) !== -1) {
    config.headers.setContentType("application/x-www-form-urlencoded", false);
  }
  const adapter2 = adapters_default.getAdapter(config.adapter || defaults_default.adapter, config);
  return adapter2(config).then(
    function onAdapterResolution(response) {
      throwIfCancellationRequested(config);
      config.response = response;
      try {
        response.data = transformData.call(config, config.transformResponse, response);
      } finally {
        delete config.response;
      }
      response.headers = AxiosHeaders_default.from(response.headers);
      return response;
    },
    function onAdapterRejection(reason) {
      if (!isCancel(reason)) {
        throwIfCancellationRequested(config);
        if (reason && reason.response) {
          config.response = reason.response;
          try {
            reason.response.data = transformData.call(
              config,
              config.transformResponse,
              reason.response
            );
          } finally {
            delete config.response;
          }
          reason.response.headers = AxiosHeaders_default.from(reason.response.headers);
        }
      }
      return Promise.reject(reason);
    }
  );
}

// node_modules/axios/lib/helpers/validator.js
var validators = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((type, i) => {
  validators[type] = function validator(thing) {
    return typeof thing === type || "a" + (i < 1 ? "n " : " ") + type;
  };
});
var deprecatedWarnings = {};
validators.transitional = function transitional(validator, version, message) {
  function formatMessage(opt, desc) {
    return "[Axios v" + VERSION + "] Transitional option '" + opt + "'" + desc + (message ? ". " + message : "");
  }
  return (value, opt, opts) => {
    if (validator === false) {
      throw new AxiosError_default(
        formatMessage(opt, " has been removed" + (version ? " in " + version : "")),
        AxiosError_default.ERR_DEPRECATED
      );
    }
    if (version && !deprecatedWarnings[opt]) {
      deprecatedWarnings[opt] = true;
      console.warn(
        formatMessage(
          opt,
          " has been deprecated since v" + version + " and will be removed in the near future"
        )
      );
    }
    return validator ? validator(value, opt, opts) : true;
  };
};
validators.spelling = function spelling(correctSpelling) {
  return (value, opt) => {
    console.warn(`${opt} is likely a misspelling of ${correctSpelling}`);
    return true;
  };
};
function assertOptions(options, schema, allowUnknown) {
  if (typeof options !== "object" || options === null) {
    throw new AxiosError_default("options must be an object", AxiosError_default.ERR_BAD_OPTION_VALUE);
  }
  const keys = Object.keys(options);
  let i = keys.length;
  while (i-- > 0) {
    const opt = keys[i];
    const validator = Object.prototype.hasOwnProperty.call(schema, opt) ? schema[opt] : void 0;
    if (validator) {
      const value = options[opt];
      const result = value === void 0 || validator(value, opt, options);
      if (result !== true) {
        throw new AxiosError_default(
          "option " + opt + " must be " + result,
          AxiosError_default.ERR_BAD_OPTION_VALUE
        );
      }
      continue;
    }
    if (allowUnknown !== true) {
      throw new AxiosError_default("Unknown option " + opt, AxiosError_default.ERR_BAD_OPTION);
    }
  }
}
var validator_default = {
  assertOptions,
  validators
};

// node_modules/axios/lib/core/Axios.js
var validators2 = validator_default.validators;
var Axios = class {
  constructor(instanceConfig) {
    this.defaults = instanceConfig || {};
    this.interceptors = {
      request: new InterceptorManager_default(),
      response: new InterceptorManager_default()
    };
  }
  /**
   * Dispatch a request
   *
   * @param {String|Object} configOrUrl The config specific for this request (merged with this.defaults)
   * @param {?Object} config
   *
   * @returns {Promise} The Promise to be fulfilled
   */
  async request(configOrUrl, config) {
    try {
      return await this._request(configOrUrl, config);
    } catch (err) {
      if (err instanceof Error) {
        try {
          let dummy = {};
          Error.captureStackTrace ? Error.captureStackTrace(dummy) : dummy = new Error();
          const dummyStack = dummy.stack;
          let stack = "";
          if (typeof dummyStack === "string") {
            const firstNewlineIndex = dummyStack.indexOf("\n");
            stack = firstNewlineIndex === -1 ? "" : dummyStack.slice(firstNewlineIndex + 1);
          }
          if (!err.stack) {
            err.stack = stack;
          } else if (stack) {
            const firstNewlineIndex = stack.indexOf("\n");
            const secondNewlineIndex = firstNewlineIndex === -1 ? -1 : stack.indexOf("\n", firstNewlineIndex + 1);
            const stackWithoutTwoTopLines = secondNewlineIndex === -1 ? "" : stack.slice(secondNewlineIndex + 1);
            if (!String(err.stack).endsWith(stackWithoutTwoTopLines)) {
              err.stack += "\n" + stack;
            }
          }
        } catch (e) {
        }
      }
      throw err;
    }
  }
  _request(configOrUrl, config) {
    if (typeof configOrUrl === "string") {
      config = config || {};
      config.url = configOrUrl;
    } else {
      config = configOrUrl || {};
    }
    config = mergeConfig(this.defaults, config);
    const { transitional: transitional2, paramsSerializer, headers } = config;
    if (transitional2 !== void 0) {
      validator_default.assertOptions(
        transitional2,
        {
          silentJSONParsing: validators2.transitional(validators2.boolean),
          forcedJSONParsing: validators2.transitional(validators2.boolean),
          clarifyTimeoutError: validators2.transitional(validators2.boolean),
          legacyInterceptorReqResOrdering: validators2.transitional(validators2.boolean),
          advertiseZstdAcceptEncoding: validators2.transitional(validators2.boolean),
          validateStatusUndefinedResolves: validators2.transitional(validators2.boolean)
        },
        false
      );
    }
    if (paramsSerializer != null) {
      if (utils_default.isFunction(paramsSerializer)) {
        config.paramsSerializer = {
          serialize: paramsSerializer
        };
      } else {
        validator_default.assertOptions(
          paramsSerializer,
          {
            encode: validators2.function,
            serialize: validators2.function
          },
          true
        );
      }
    }
    if (config.allowAbsoluteUrls !== void 0) {
    } else if (this.defaults.allowAbsoluteUrls !== void 0) {
      config.allowAbsoluteUrls = this.defaults.allowAbsoluteUrls;
    } else {
      config.allowAbsoluteUrls = true;
    }
    validator_default.assertOptions(
      config,
      {
        baseUrl: validators2.spelling("baseURL"),
        withXsrfToken: validators2.spelling("withXSRFToken")
      },
      true
    );
    config.method = (utils_default.getSafeProp(config, "method") || utils_default.getSafeProp(this.defaults, "method") || "get").toLowerCase();
    let contextHeaders = headers && utils_default.merge(headers.common, headers[config.method]);
    headers && utils_default.forEach(methodList_default.concat("common"), (method) => {
      delete headers[method];
    });
    config.headers = AxiosHeaders_default.concat(contextHeaders, headers);
    const requestInterceptorChain = [];
    let synchronousRequestInterceptors = true;
    this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {
      if (typeof interceptor.runWhen === "function" && interceptor.runWhen(config) === false) {
        return;
      }
      synchronousRequestInterceptors = synchronousRequestInterceptors && interceptor.synchronous;
      const transitional3 = config.transitional || transitional_default;
      const legacyInterceptorReqResOrdering = transitional3 && transitional3.legacyInterceptorReqResOrdering;
      if (legacyInterceptorReqResOrdering) {
        requestInterceptorChain.unshift(interceptor.fulfilled, interceptor.rejected);
      } else {
        requestInterceptorChain.push(interceptor.fulfilled, interceptor.rejected);
      }
    });
    const responseInterceptorChain = [];
    this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {
      responseInterceptorChain.push(interceptor.fulfilled, interceptor.rejected);
    });
    let promise;
    let i = 0;
    let len;
    if (!synchronousRequestInterceptors) {
      const chain = [dispatchRequest.bind(this), void 0];
      chain.unshift(...requestInterceptorChain);
      chain.push(...responseInterceptorChain);
      len = chain.length;
      promise = Promise.resolve(config);
      while (i < len) {
        promise = promise.then(chain[i++], chain[i++]);
      }
      return promise;
    }
    len = requestInterceptorChain.length;
    let newConfig = config;
    while (i < len) {
      const onFulfilled = requestInterceptorChain[i++];
      const onRejected = requestInterceptorChain[i++];
      try {
        newConfig = onFulfilled ? onFulfilled(newConfig) : newConfig;
      } catch (error) {
        if (!onRejected) {
          promise = Promise.reject(error);
          break;
        }
        try {
          const rejectedResult = onRejected.call(this, error);
          if (utils_default.isThenable(rejectedResult)) {
            promise = Promise.resolve(rejectedResult).then(
              () => dispatchRequest.call(this, newConfig)
            );
          }
        } catch (rejectedError) {
          promise = Promise.reject(rejectedError);
        }
        break;
      }
    }
    if (!promise) {
      try {
        promise = dispatchRequest.call(this, newConfig);
      } catch (error) {
        promise = Promise.reject(error);
      }
    }
    i = 0;
    len = responseInterceptorChain.length;
    while (i < len) {
      promise = promise.then(responseInterceptorChain[i++], responseInterceptorChain[i++]);
    }
    return promise;
  }
  getUri(config) {
    config = mergeConfig(this.defaults, config);
    const fullPath = buildFullPath(config.baseURL, config.url, config.allowAbsoluteUrls, config);
    return buildURL(fullPath, config.params, config.paramsSerializer);
  }
};
utils_default.forEach(["delete", "get", "head", "options"], function forEachMethodNoData(method) {
  Axios.prototype[method] = function(url2, config) {
    return this.request(
      mergeConfig(config || {}, {
        method,
        url: url2,
        data: config && utils_default.hasOwnProp(config, "data") ? config.data : void 0
      })
    );
  };
});
utils_default.forEach(["post", "put", "patch", "query"], function forEachMethodWithData(method) {
  function generateHTTPMethod(isForm) {
    return function httpMethod(url2, data, config) {
      return this.request(
        mergeConfig(config || {}, {
          method,
          headers: isForm ? {
            "Content-Type": "multipart/form-data"
          } : {},
          url: url2,
          data
        })
      );
    };
  }
  Axios.prototype[method] = generateHTTPMethod();
  if (method !== "query") {
    Axios.prototype[method + "Form"] = generateHTTPMethod(true);
  }
});
var Axios_default = Axios;

// node_modules/axios/lib/cancel/CancelToken.js
var CancelToken = class _CancelToken {
  constructor(executor) {
    if (typeof executor !== "function") {
      throw new TypeError("executor must be a function.");
    }
    let resolvePromise;
    this.promise = new Promise(function promiseExecutor(resolve) {
      resolvePromise = resolve;
    });
    const token = this;
    this.promise.then((cancel) => {
      if (!token._listeners) return;
      let i = token._listeners.length;
      while (i-- > 0) {
        token._listeners[i](cancel);
      }
      token._listeners = null;
    });
    this.promise.then = (onfulfilled) => {
      let _resolve;
      const promise = new Promise((resolve) => {
        token.subscribe(resolve);
        _resolve = resolve;
      }).then(onfulfilled);
      promise.cancel = function reject() {
        token.unsubscribe(_resolve);
      };
      return promise;
    };
    executor(function cancel(message, config, request) {
      if (token.reason) {
        return;
      }
      token.reason = new CanceledError_default(message, config, request);
      resolvePromise(token.reason);
    });
  }
  /**
   * Throws a `CanceledError` if cancellation has been requested.
   */
  throwIfRequested() {
    if (this.reason) {
      throw this.reason;
    }
  }
  /**
   * Subscribe to the cancel signal
   */
  subscribe(listener) {
    if (this.reason) {
      listener(this.reason);
      return;
    }
    if (this._listeners) {
      this._listeners.push(listener);
    } else {
      this._listeners = [listener];
    }
  }
  /**
   * Unsubscribe from the cancel signal
   */
  unsubscribe(listener) {
    if (!this._listeners) {
      return;
    }
    const index = this._listeners.indexOf(listener);
    if (index !== -1) {
      this._listeners.splice(index, 1);
    }
  }
  toAbortSignal() {
    const controller = new AbortController();
    const abort = (err) => {
      controller.abort(err);
    };
    this.subscribe(abort);
    controller.signal.unsubscribe = () => this.unsubscribe(abort);
    return controller.signal;
  }
  /**
   * Returns an object that contains a new `CancelToken` and a function that, when called,
   * cancels the `CancelToken`.
   */
  static source() {
    let cancel;
    const token = new _CancelToken(function executor(c) {
      cancel = c;
    });
    return {
      token,
      cancel
    };
  }
};
var CancelToken_default = CancelToken;

// node_modules/axios/lib/helpers/spread.js
function spread(callback) {
  return function wrap(arr) {
    return callback.apply(null, arr);
  };
}

// node_modules/axios/lib/helpers/isAxiosError.js
function isAxiosError(payload) {
  return utils_default.isObject(payload) && payload.isAxiosError === true;
}

// node_modules/axios/lib/helpers/HttpStatusCode.js
var HttpStatusCode = {
  Continue: 100,
  SwitchingProtocols: 101,
  Processing: 102,
  EarlyHints: 103,
  Ok: 200,
  Created: 201,
  Accepted: 202,
  NonAuthoritativeInformation: 203,
  NoContent: 204,
  ResetContent: 205,
  PartialContent: 206,
  MultiStatus: 207,
  AlreadyReported: 208,
  ImUsed: 226,
  MultipleChoices: 300,
  MovedPermanently: 301,
  Found: 302,
  SeeOther: 303,
  NotModified: 304,
  UseProxy: 305,
  Unused: 306,
  TemporaryRedirect: 307,
  PermanentRedirect: 308,
  BadRequest: 400,
  Unauthorized: 401,
  PaymentRequired: 402,
  Forbidden: 403,
  NotFound: 404,
  MethodNotAllowed: 405,
  NotAcceptable: 406,
  ProxyAuthenticationRequired: 407,
  RequestTimeout: 408,
  Conflict: 409,
  Gone: 410,
  LengthRequired: 411,
  PreconditionFailed: 412,
  /**
   * @deprecated Use `ContentTooLarge` instead.
   */
  PayloadTooLarge: 413,
  ContentTooLarge: 413,
  UriTooLong: 414,
  UnsupportedMediaType: 415,
  RangeNotSatisfiable: 416,
  ExpectationFailed: 417,
  ImATeapot: 418,
  MisdirectedRequest: 421,
  /**
   * @deprecated Use `UnprocessableContent` instead.
   */
  UnprocessableEntity: 422,
  UnprocessableContent: 422,
  Locked: 423,
  FailedDependency: 424,
  TooEarly: 425,
  UpgradeRequired: 426,
  PreconditionRequired: 428,
  TooManyRequests: 429,
  RequestHeaderFieldsTooLarge: 431,
  UnavailableForLegalReasons: 451,
  InternalServerError: 500,
  NotImplemented: 501,
  BadGateway: 502,
  ServiceUnavailable: 503,
  GatewayTimeout: 504,
  HttpVersionNotSupported: 505,
  VariantAlsoNegotiates: 506,
  InsufficientStorage: 507,
  LoopDetected: 508,
  NotExtended: 510,
  NetworkAuthenticationRequired: 511,
  WebServerReturnsAnUnknownError: 520,
  WebServerIsDown: 521,
  ConnectionTimedOut: 522,
  OriginIsUnreachable: 523,
  TimeoutOccurred: 524,
  SslHandshakeFailed: 525,
  InvalidSslCertificate: 526
};
Object.entries(HttpStatusCode).forEach(([key, value]) => {
  if (HttpStatusCode[value] === void 0) {
    HttpStatusCode[value] = key;
  }
});
var HttpStatusCode_default = HttpStatusCode;

// node_modules/axios/lib/axios.js
function createInstance(defaultConfig) {
  const context = new Axios_default(defaultConfig);
  const instance = bind(Axios_default.prototype.request, context);
  utils_default.extend(instance, Axios_default.prototype, context, { allOwnKeys: true });
  utils_default.extend(instance, context, null, { allOwnKeys: true });
  instance.create = function create2(instanceConfig) {
    return createInstance(mergeConfig(defaultConfig, instanceConfig));
  };
  return instance;
}
var axios = createInstance(defaults_default);
axios.Axios = Axios_default;
axios.CanceledError = CanceledError_default;
axios.CancelToken = CancelToken_default;
axios.isCancel = isCancel;
axios.VERSION = VERSION;
axios.toFormData = toFormData_default;
axios.AxiosError = AxiosError_default;
axios.Cancel = axios.CanceledError;
axios.all = function all(promises) {
  return Promise.all(promises);
};
axios.spread = spread;
axios.isAxiosError = isAxiosError;
axios.mergeConfig = mergeConfig;
axios.AxiosHeaders = AxiosHeaders_default;
axios.formToJSON = (thing) => formDataToJSON_default(utils_default.isHTMLForm(thing) ? new FormData(thing) : thing);
axios.getAdapter = adapters_default.getAdapter;
axios.HttpStatusCode = HttpStatusCode_default;
axios.default = axios;
var axios_default = axios;

// node_modules/axios/index.js
var {
  Axios: Axios2,
  AxiosError: AxiosError2,
  CanceledError: CanceledError2,
  isCancel: isCancel2,
  CancelToken: CancelToken2,
  VERSION: VERSION2,
  all: all2,
  Cancel,
  isAxiosError: isAxiosError2,
  spread: spread2,
  toFormData: toFormData2,
  AxiosHeaders: AxiosHeaders2,
  HttpStatusCode: HttpStatusCode2,
  formToJSON,
  getAdapter: getAdapter2,
  mergeConfig: mergeConfig2,
  create
} = axios_default;

// src/CnpjCache.ts
var import_node_fs = __toESM(require("node:fs"));
var import_node_path2 = __toESM(require("node:path"));
var VERSION3 = 1;
var CnpjCache = class {
  entries;
  warned = false;
  get(cnpj) {
    if (!Config.CnpjCacheEnabled) {
      return void 0;
    }
    const entry = this.load()[cnpj];
    if (!entry) {
      return void 0;
    }
    if (Date.now() - entry.FetchedAt > Config.CnpjCacheTtlMs) {
      return void 0;
    }
    return entry.Info;
  }
  set(cnpj, info) {
    if (!Config.CnpjCacheEnabled) {
      return;
    }
    const entries = this.load();
    entries[cnpj] = { FetchedAt: Date.now(), Info: info };
    this.save(entries);
  }
  load() {
    if (this.entries) {
      return this.entries;
    }
    this.entries = {};
    try {
      const raw = import_node_fs.default.readFileSync(Config.CnpjCachePath, "utf8");
      const parsed = JSON.parse(raw);
      if (parsed?.Version === VERSION3 && parsed.Entries) {
        this.entries = parsed.Entries;
      }
    } catch (error) {
      if (error?.code !== "ENOENT") {
        this.warn(error);
      }
    }
    return this.entries;
  }
  save(entries) {
    const file = { Version: VERSION3, Entries: entries };
    const target = Config.CnpjCachePath;
    const temporary = `${target}.tmp`;
    try {
      import_node_fs.default.mkdirSync(import_node_path2.default.dirname(target), { recursive: true });
      import_node_fs.default.writeFileSync(temporary, JSON.stringify(file), "utf8");
      import_node_fs.default.renameSync(temporary, target);
    } catch (error) {
      this.warn(error);
    }
  }
  /** Um aviso por processo: um por CNPJ transformaria disco cheio em enxurrada no stderr. */
  warn(error) {
    if (this.warned) {
      return;
    }
    this.warned = true;
    const detail = error instanceof Error ? error.message : String(error);
    process.stderr.write(`  aviso: cache de CNPJ indispon\xEDvel (${detail}); seguindo sem cache
`);
  }
};

// src/segment.ts
var POR_SUBCLASSE = {
  "4789004": "Pet shop",
  "4729602": "Loja de conveni\xEAncia",
  "4713004": "Loja de departamento"
};
var POR_CLASSE = {
  "4711": "Supermercado",
  "4712": "Supermercado",
  "4713": "Loja de departamento",
  "4721": "Padaria e doces",
  "4722": "A\xE7ougue e peixaria",
  "4723": "Bebidas",
  "4724": "Hortifr\xFAti",
  "4729": "Alimentos especializados",
  "4731": "Combust\xEDvel e g\xE1s",
  "4732": "Combust\xEDvel e g\xE1s",
  "4784": "Combust\xEDvel e g\xE1s",
  "4741": "Material de constru\xE7\xE3o",
  "4742": "Material de constru\xE7\xE3o",
  "4743": "Material de constru\xE7\xE3o",
  "4744": "Material de constru\xE7\xE3o",
  "4751": "Eletr\xF4nicos e eletrodom\xE9sticos",
  "4752": "Eletr\xF4nicos e eletrodom\xE9sticos",
  "4753": "Eletr\xF4nicos e eletrodom\xE9sticos",
  "4757": "Eletr\xF4nicos e eletrodom\xE9sticos",
  "4754": "M\xF3veis e utilidades dom\xE9sticas",
  "4755": "M\xF3veis e utilidades dom\xE9sticas",
  "4759": "M\xF3veis e utilidades dom\xE9sticas",
  "4761": "Livraria e papelaria",
  "4762": "Livraria e papelaria",
  "4763": "Esporte e lazer",
  "4771": "Farm\xE1cia",
  "4772": "Cosm\xE9ticos e higiene",
  "4773": "Sa\xFAde",
  "4774": "Sa\xFAde",
  "4781": "Vestu\xE1rio e cal\xE7ados",
  "4782": "Vestu\xE1rio e cal\xE7ados",
  "4783": "Vestu\xE1rio e cal\xE7ados",
  "4789": "Outro",
  "4520": "Ve\xEDculos e autope\xE7as",
  "4530": "Ve\xEDculos e autope\xE7as",
  "4541": "Ve\xEDculos e autope\xE7as",
  "5611": "Restaurante",
  "5612": "Restaurante",
  "5620": "Restaurante"
};
function normalizeCnaeCode(raw) {
  const digits = String(raw ?? "").replace(/\D/g, "");
  if (digits.length < 6 || digits.length > 7) {
    return void 0;
  }
  return digits.padStart(7, "0");
}
function segmentFromCnae(raw) {
  const code = normalizeCnaeCode(raw);
  if (!code) {
    return null;
  }
  return POR_SUBCLASSE[code] ?? POR_CLASSE[code.slice(0, 4)] ?? "Outro";
}

// src/text.ts
var NAMED_ENTITIES = {
  amp: "&",
  lt: "<",
  gt: ">",
  quot: '"',
  apos: "'",
  nbsp: " "
};
function cleanText(raw) {
  return raw.replace(/&(#x?[0-9a-fA-F]+|[a-zA-Z]+);/g, (match, entity) => {
    if (entity.startsWith("#x") || entity.startsWith("#X")) {
      return String.fromCodePoint(parseInt(entity.slice(2), 16));
    }
    if (entity.startsWith("#")) {
      return String.fromCodePoint(Number(entity.slice(1)));
    }
    return NAMED_ENTITIES[entity.toLowerCase()] ?? match;
  }).replace(/\s+/g, " ").trim();
}

// src/CnpjClient.ts
var CnpjClient = class {
  constructor(cache = new CnpjCache()) {
    this.cache = cache;
  }
  cache;
  memory = /* @__PURE__ */ new Map();
  async info(cnpj) {
    if (!Config.CnpjLookupEnabled) {
      return null;
    }
    const inMemory = this.memory.get(cnpj);
    if (inMemory !== void 0) {
      return inMemory;
    }
    const cached = this.cache.get(cnpj);
    if (cached !== void 0) {
      this.memory.set(cnpj, cached);
      return cached;
    }
    const info = await this.lookup(cnpj);
    this.memory.set(cnpj, info);
    if (info) {
      this.cache.set(cnpj, info);
    }
    return info;
  }
  async lookup(cnpj) {
    try {
      return await this.get(cnpj);
    } catch (error) {
      if (!this.isRetriable(error)) {
        return this.giveUp(cnpj, error);
      }
      try {
        return await this.get(cnpj);
      } catch (retryError) {
        return this.giveUp(cnpj, retryError);
      }
    }
  }
  async get(cnpj) {
    const { data } = await axios_default.get(`${Config.CnpjApiUrl}${cnpj}`, {
      timeout: Config.TimeoutMs
    });
    const code = normalizeCnaeCode(data.cnae_fiscal);
    const description = cleanText(data.cnae_fiscal_descricao ?? "");
    return {
      // Cadastro sem nome fantasia é comum, sobretudo em LTDA: a Receita devolve o campo
      // vazio. `null` significa "consultado e não existe", não "não consultei".
      TradeName: textOrNull(data.nome_fantasia),
      Company: textOrNull(data.razao_social),
      // Sem código não há CNAE, mesmo que venha descrição: o código é o que a tabela de
      // ramos consulta, e uma descrição solta não é verificável.
      Cnae: code ? { Code: code, Description: description } : null,
      Segment: segmentFromCnae(code)
    };
  }
  /** Só 5xx e falha de rede valem segunda tentativa; 404 e 400 são respostas definitivas. */
  isRetriable(error) {
    if (!axios_default.isAxiosError(error)) {
      return false;
    }
    const status = error.response?.status;
    return status === void 0 || status >= 500;
  }
  giveUp(cnpj, error) {
    const status = axios_default.isAxiosError(error) ? error.response?.status : void 0;
    if (status !== 404) {
      const motivo = status ?? (error instanceof Error ? error.message : String(error));
      process.stderr.write(`  aviso: cadastro de ${formatCnpj(cnpj)} indispon\xEDvel (${motivo})
`);
    }
    return null;
  }
};
function textOrNull(raw) {
  const text = cleanText(raw ?? "");
  return text === "" ? null : text;
}

// src/errors.ts
var MESSAGES = {
  INVALID_LENGTH: "A chave de acesso deve ter 44 d\xEDgitos",
  INVALID_FORMAT: "A chave de acesso deve conter apenas d\xEDgitos",
  UNSUPPORTED_UF: "Apenas notas do RS (UF 43) s\xE3o suportadas",
  NOT_FOUND: "DANFE n\xE3o encontrada na base do SEFAZ",
  FETCH_ERROR: "Falha ao consultar o SEFAZ",
  PARSE_ERROR: "A p\xE1gina do SEFAZ respondeu, mas os dados n\xE3o puderam ser extra\xEDdos"
};
function describeError(code, danfe, detail) {
  if (code === "UNSUPPORTED_UF") {
    return `Chave da UF ${danfe.slice(0, 2)}; apenas RS (43) \xE9 suportado`;
  }
  return detail ? `${MESSAGES[code]}: ${detail}` : MESSAGES[code];
}
function failure(danfe, code, detail) {
  return {
    Danfe: danfe,
    Valid: false,
    Error: {
      Code: code,
      Message: describeError(code, danfe, detail)
    }
  };
}

// src/schema.ts
var import_joi = __toESM(require_lib5());
var Schemas;
((Schemas2) => {
  Schemas2.Danfe = import_joi.default.string().length(44).message("INVALID_LENGTH").pattern(/^[0-9]+$/).message("INVALID_FORMAT").pattern(/^43/).message("UNSUPPORTED_UF").required().messages({
    "string.empty": "INVALID_LENGTH",
    "any.required": "INVALID_LENGTH",
    "string.base": "INVALID_FORMAT"
  });
})(Schemas || (Schemas = {}));
var FORMAT_CODES = ["INVALID_LENGTH", "INVALID_FORMAT", "UNSUPPORTED_UF"];
function validateDanfe(danfe) {
  const { error } = Schemas.Danfe.validate(danfe);
  if (!error) {
    return void 0;
  }
  const code = error.details[0]?.message;
  return code && FORMAT_CODES.includes(code) ? code : "INVALID_FORMAT";
}

// src/decode.ts
function decodeHtml(buffer) {
  try {
    return new TextDecoder("utf-8", { fatal: true }).decode(buffer);
  } catch {
    return buffer.toString("latin1");
  }
}

// src/SefazClient.ts
var SefazFetchError = class extends Error {
  constructor(message, cause) {
    super(message);
    this.cause = cause;
    this.name = "SefazFetchError";
  }
  cause;
};
var SefazClient = class {
  /** Busca a página de consulta da chave. Só transporte: não valida nem interpreta o HTML. */
  async fetchPage(danfe) {
    try {
      return await this.post(danfe);
    } catch (error) {
      if (!this.isRetriable(error)) {
        throw new SefazFetchError(this.describe(error), error);
      }
      process.stderr.write(`  aviso: falha ao consultar ${danfe}, tentando novamente
`);
      try {
        return await this.post(danfe);
      } catch (retryError) {
        throw new SefazFetchError(this.describe(retryError), retryError);
      }
    }
  }
  async post(danfe) {
    const formData = new URLSearchParams({
      HML: "false",
      chaveNFe: danfe
    });
    const { data } = await axios_default.post(Config.SefazUrl, formData, {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      responseType: "arraybuffer",
      timeout: Config.TimeoutMs
    });
    return decodeHtml(Buffer.from(data));
  }
  /**
   * Retry apenas no que pode ser transitório: sem resposta (rede, timeout) ou 5xx. Um 4xx é
   * resposta definitiva do servidor e repetir só dobra o custo.
   *
   * Nota fiscal inexistente **não** passa por aqui: o SEFAZ responde 200 com uma página normal
   * (ver docs/etapa-2-cli.md), então nunca chega a virar erro de transporte.
   */
  isRetriable(error) {
    if (!axios_default.isAxiosError(error)) {
      return false;
    }
    const status = error.response?.status;
    return status === void 0 || status >= 500;
  }
  describe(error) {
    if (axios_default.isAxiosError(error)) {
      const axiosError = error;
      const status = axiosError.response?.status;
      return status ? `HTTP ${status}` : axiosError.code || axiosError.message;
    }
    return error instanceof Error ? error.message : String(error);
  }
};

// src/ExtractNfeData/ExtractItems.ts
var import_dom_parser = __toESM(require_dist2());

// src/number.ts
function parsePtBrNumber(raw) {
  const normalized = cleanText(raw).replace(/\./g, "").replace(",", ".");
  if (normalized === "") {
    throw new Error("Valor num\xE9rico ausente na p\xE1gina");
  }
  const parsed = Number(normalized);
  if (!Number.isFinite(parsed)) {
    throw new Error(`Valor num\xE9rico inesperado na p\xE1gina: "${raw}"`);
  }
  return parsed;
}

// src/ExtractNfeData/ExtractItems.ts
var ExtractItems = class {
  run(dom) {
    let lines = dom.rawHTML.split("\n");
    let itemsLines = lines.filter((item) => {
      return /Item \+ .*/.test(item);
    });
    let ids = itemsLines.map((item) => {
      let id = /id="([^"]+)"/.exec(item)?.[1];
      if (!id) {
        throw new Error(`Linha de item sem atributo id: ${item.trim()}`);
      }
      return id;
    });
    return ids.map((id) => {
      let domItem = dom.getElementById(id);
      if (!domItem) {
        throw new Error(`Item com id ${id} n\xE3o encontrado`);
      }
      return this.extractItemData(domItem);
    });
  }
  /**
   * As células são mapeadas por **índice posicional** (1=Descrição, 2=Qtde, 3=Un, 4=Vl Unit,
   * 5=Vl Total; 0 é o código do produto). Mudança na ordem das colunas da página do SEFAZ quebra
   * isso silenciosamente.
   */
  extractItemData(htmlItem) {
    let itemDom = (0, import_dom_parser.parseFromString)(htmlItem.innerHTML);
    let nodes = itemDom.getElementsByTagName("td");
    return nodes.reduce((old, item, index) => {
      let value = item.innerHTML;
      if (index === 1) {
        old.Description = cleanText(value);
      }
      if (index === 2) {
        old.Quantity = parsePtBrNumber(value);
      }
      if (index === 3) {
        old.UN = cleanText(value);
      }
      if (index === 4) {
        old.UnityValue = parsePtBrNumber(value);
      }
      if (index === 5) {
        old.TotalValue = parsePtBrNumber(value);
      }
      return old;
    }, {
      Description: "",
      Quantity: 0,
      UN: "",
      UnityValue: 0,
      TotalValue: 0
    });
  }
};

// src/ExtractNfeData/GetDanfeCnpj.ts
var CNPJ_NO_CABECALHO = /CNPJ:\s*([\d.\/-]{14,20})/;
var GetDanfeCnpj = class {
  /**
   * Devolve o CNPJ do emitente com 14 dígitos, ou `undefined` quando não está na página.
   *
   * Ausência **não** é erro: quem chama cai na derivação a partir da chave de acesso
   * (`cnpjFromDanfe`), então uma mudança no cabeçalho do SEFAZ não transforma a nota em
   * `PARSE_ERROR` por causa desse campo.
   */
  run(dom) {
    const match = CNPJ_NO_CABECALHO.exec(dom.rawHTML);
    return match?.[1] ? normalizeCnpj(match[1]) : void 0;
  }
};

// src/ExtractNfeData/GetDanfeCompany.ts
var GetDanfeCompany = class {
  /**
   * Primeiro `NFCCabecalho_SubTitulo` da página é a razão social do emitente.
   *
   * Lança quando o campo não existe, em vez de devolver `undefined` como o código anterior fazia
   * — ausência significa que a página mudou, e isso é `PARSE_ERROR`, não nota sem empresa.
   */
  run(dom) {
    const raw = dom.getElementsByClassName("NFCCabecalho_SubTitulo")[0]?.innerHTML;
    const company = raw ? cleanText(raw) : void 0;
    if (!company) {
      throw new Error("Nome da empresa n\xE3o encontrado na p\xE1gina");
    }
    return company;
  }
};

// src/ExtractNfeData/GetDanfeDate.ts
var EMISSION_DATE = /Data de Emiss\S{0,4}o:\s*(\d{2})\/(\d{2})\/(\d{4})\s+(\d{2}):(\d{2}):(\d{2})/;
var GetDanfeDate = class {
  /** Devolve a data de emissão em ISO 8601 local (`YYYY-MM-DDTHH:MM:SS`). */
  run(dom) {
    const match = EMISSION_DATE.exec(dom.rawHTML);
    if (!match) {
      throw new Error("Data de emiss\xE3o n\xE3o encontrada na p\xE1gina");
    }
    const [, day, month, year, hour, minute, second] = match;
    return `${year}-${month}-${day}T${hour}:${minute}:${second}`;
  }
};

// src/ExtractNfeData/GetDanfeValue.ts
var import_dom_parser2 = __toESM(require_dist2());
var GetDanfeValue = class {
  run(dom) {
    let lines = dom.rawHTML.split("\n");
    let valueLine = lines.findIndex((item) => {
      return item.includes("FORMA PAGAMENTO");
    });
    let parentLineIndex = this.getParentLineIndex(lines, valueLine);
    let closeParentLineIndex = this.getCloseParentLineIndex(lines, parentLineIndex);
    let valueLines = lines.slice(parentLineIndex, closeParentLineIndex);
    let valueDom = (0, import_dom_parser2.parseFromString)(valueLines.join("\n"));
    let childs = valueDom.getElementsByTagName("tr");
    let paymentIndex = childs.findIndex((item) => {
      return item.innerHTML.includes("FORMA PAGAMENTO");
    });
    let paymentChilds = childs.slice(paymentIndex + 1, childs.length);
    return paymentChilds.reduce((old, item) => {
      let nodes = item.getElementsByTagName("td");
      let valueNode = nodes[1];
      if (!valueNode) {
        throw new Error("Linha de pagamento sem coluna de valor");
      }
      return old + parsePtBrNumber(valueNode.innerHTML);
    }, 0);
  }
  getParentLineIndex(lines, lineIndex) {
    for (let i = lineIndex; i > 0; i--) {
      let line = lines[i];
      if (line.includes("<table")) {
        return i;
      }
    }
    throw new Error("Linha pai n\xE3o encontrada!");
  }
  getCloseParentLineIndex(lines, lineIndex) {
    for (let i = lineIndex; i < lines.length; i++) {
      let line = lines[i];
      if (line.includes("</table")) {
        return i;
      }
    }
    throw new Error("Fechamento da linha pai n\xE3o encontrada!");
  }
};

// src/ExtractNfeData/ExtractNfeData.ts
var NOT_FOUND_SENTINELS = [
  "Documento Fiscal (NFC-e) inexistente na base de dados da SEFAZ",
  "M230 - Documento Fiscal"
];
var ExtractNfeData = class {
  constructor(client = new SefazClient(), cnpjClient = new CnpjClient()) {
    this.client = client;
    this.cnpjClient = cnpjClient;
  }
  client;
  cnpjClient;
  ExtractItems = new ExtractItems();
  GetDanfeValue = new GetDanfeValue();
  GetDanfeDate = new GetDanfeDate();
  GetDanfeCompany = new GetDanfeCompany();
  GetDanfeCnpj = new GetDanfeCnpj();
  /**
   * Consulta uma chave e devolve o item de `Results` do contrato.
   *
   * Nunca lança: toda falha vira `Valid: false` com um `Error.Code`, porque uma exceção aqui
   * abortaria o lote inteiro por causa de uma chave (D4).
   */
  async run(danfe) {
    const formatError = validateDanfe(danfe);
    if (formatError) {
      return failure(danfe, formatError);
    }
    let page;
    try {
      page = await this.client.fetchPage(danfe);
    } catch (error) {
      const detail = error instanceof SefazFetchError ? error.message : String(error);
      return failure(danfe, "FETCH_ERROR", detail);
    }
    const result = this.extract(danfe, page);
    if (result.Valid === false) {
      return result;
    }
    const info = await this.cnpjClient.info(result.Cnpj);
    return {
      ...result,
      TradeName: info?.TradeName ?? null,
      Cnae: info?.Cnae ?? null,
      Segment: info?.Segment ?? null
    };
  }
  /**
   * Interpreta uma página já obtida. Separado de `run` para que a extração seja testável com
   * fixture, sem rede.
   */
  extract(danfe, page) {
    if (NOT_FOUND_SENTINELS.some((sentinel) => page.includes(sentinel))) {
      return failure(danfe, "NOT_FOUND");
    }
    try {
      const dom = (0, import_dom_parser3.parseFromString)(page);
      return {
        Danfe: danfe,
        Valid: true,
        // Página primeiro, chave de acesso como garantia: o CNPJ vive nos dois lugares, e
        // assim uma mudança no cabeçalho não custa a nota inteira.
        Cnpj: this.GetDanfeCnpj.run(dom) ?? cnpjFromDanfe(danfe) ?? "",
        Company: this.GetDanfeCompany.run(dom),
        TradeName: null,
        Cnae: null,
        Segment: null,
        Date: this.GetDanfeDate.run(dom),
        Value: this.GetDanfeValue.run(dom),
        Items: this.ExtractItems.run(dom)
      };
    } catch (error) {
      const detail = error instanceof Error ? error.message : String(error);
      return failure(danfe, "PARSE_ERROR", detail);
    }
  }
};

// src/BatchRunner.ts
var BatchRunner = class {
  constructor(extractor = new ExtractNfeData()) {
    this.extractor = extractor;
  }
  extractor;
  /**
   * Processa as chaves com concorrência limitada e monta o envelope do contrato.
   *
   * Deduplica preservando a ordem de primeira aparição (D6) — `Set` itera na ordem de inserção,
   * e `Results` segue essa mesma ordem, independente de qual consulta terminar primeiro.
   */
  async run(danfes) {
    const unique = [...new Set(danfes)];
    const results = new Array(unique.length);
    if (unique.length < danfes.length) {
      process.stderr.write(`${danfes.length - unique.length} chave(s) duplicada(s) ignorada(s)
`);
    }
    let nextIndex = 0;
    const worker = async () => {
      while (true) {
        const index = nextIndex++;
        if (index >= unique.length) {
          return;
        }
        const danfe = unique[index];
        process.stderr.write(`[${index + 1}/${unique.length}] consultando ${danfe.slice(0, 8)}...
`);
        results[index] = await this.safeRun(danfe);
      }
    };
    const workers = Math.min(Config.Concurrency, unique.length);
    await Promise.all(Array.from({ length: workers }, worker));
    const success = results.filter((result) => result.Valid).length;
    return {
      Total: results.length,
      Success: success,
      Failed: results.length - success,
      Results: results
    };
  }
  /**
   * Segunda rede de proteção para a D4. `ExtractNfeData.run` já promete não lançar; se essa
   * promessa for quebrada no futuro, o custo deve ser uma chave com `PARSE_ERROR`, não o lote
   * inteiro perdido.
   */
  async safeRun(danfe) {
    try {
      return await this.extractor.run(danfe);
    } catch (error) {
      const detail = error instanceof Error ? error.message : String(error);
      return failure(danfe, "PARSE_ERROR", detail);
    }
  }
};

// src/ScanRunner.ts
var ScanRunner = class {
  constructor(cnpjClient = new CnpjClient()) {
    this.cnpjClient = cnpjClient;
  }
  cnpjClient;
  async run(danfes) {
    const unique = [...new Set(danfes)];
    if (unique.length < danfes.length) {
      process.stderr.write(`${danfes.length - unique.length} chave(s) duplicada(s) ignorada(s)
`);
    }
    const items = new Array(unique.length);
    const pending = /* @__PURE__ */ new Map();
    unique.forEach((danfe, index) => {
      const formatError = validateDanfe(danfe);
      if (formatError) {
        items[index] = failure(danfe, formatError);
        return;
      }
      const cnpj = cnpjFromDanfe(danfe) ?? "";
      items[index] = {
        Danfe: danfe,
        Valid: true,
        Cnpj: cnpj,
        Company: null,
        TradeName: null,
        Cnae: null,
        Segment: null,
        Period: periodFromDanfe(danfe) ?? null
      };
      const positions = pending.get(cnpj);
      if (positions) {
        positions.push(index);
      } else {
        pending.set(cnpj, [index]);
      }
    });
    await this.enrich(pending, items);
    return this.envelope(items);
  }
  /** Consulta cada CNPJ distinto uma vez, com a mesma concorrência do lote de notas. */
  async enrich(pending, items) {
    const cnpjs = [...pending.keys()];
    let nextIndex = 0;
    const worker = async () => {
      while (true) {
        const index = nextIndex++;
        if (index >= cnpjs.length) {
          return;
        }
        const cnpj = cnpjs[index];
        process.stderr.write(`[${index + 1}/${cnpjs.length}] cadastro de ${cnpj}
`);
        const info = await this.cnpjClient.info(cnpj);
        if (!info) {
          continue;
        }
        for (const position of pending.get(cnpj) ?? []) {
          const item = items[position];
          item.Company = info.Company;
          item.TradeName = info.TradeName;
          item.Cnae = info.Cnae;
          item.Segment = info.Segment;
        }
      }
    };
    const workers = Math.min(Config.Concurrency, cnpjs.length);
    await Promise.all(Array.from({ length: workers }, worker));
  }
  envelope(items) {
    const valid = items.filter((item) => item.Valid);
    const resolved = valid.filter((item) => item.Segment !== null).length;
    return {
      Total: items.length,
      Success: valid.length,
      Failed: items.length - valid.length,
      Resolved: resolved,
      Unresolved: valid.length - resolved,
      Segments: this.group(valid),
      Results: items
    };
  }
  /**
   * Agrupa por ramo. `Danfes` leva as chaves do grupo porque é exatamente o argumento que o
   * `full` vai receber depois do filtro — sem isso, quem consome teria que reconstruir o
   * agrupamento para usá-lo.
   */
  group(valid) {
    const groups = /* @__PURE__ */ new Map();
    for (const item of valid) {
      const key = item.Segment ?? "";
      const group = groups.get(key) ?? { segment: item.Segment, cnpjs: /* @__PURE__ */ new Set(), danfes: [] };
      group.cnpjs.add(item.Cnpj);
      group.danfes.push(item.Danfe);
      groups.set(key, group);
    }
    return [...groups.values()].map((group) => ({
      Segment: group.segment,
      Establishments: group.cnpjs.size,
      Notes: group.danfes.length,
      Danfes: group.danfes
    })).sort((a, b) => {
      if (a.Segment === null !== (b.Segment === null)) {
        return a.Segment === null ? 1 : -1;
      }
      return b.Notes - a.Notes || String(a.Segment).localeCompare(String(b.Segment), "pt-BR");
    });
  }
};

// src/version.ts
var VERSION4 = true ? "1.1.0" : fromPackageJson();

// src/index.ts
import_dotenv.default.config({
  path: [import_node_path3.default.resolve(__dirname, "../.env"), import_node_path3.default.resolve(process.cwd(), ".env")],
  quiet: true
});
var USAGE = [
  `Consulta de NFC-e do RS \u2014 vers\xE3o ${VERSION4}`,
  "",
  "Uso: node <cli> [comando] <chave-danfe> [chave-danfe ...]",
  "",
  "Comandos:",
  "  scan   identifica emitente e ramo de cada nota pelo CNPJ contido na chave,",
  "         sem consultar o SEFAZ. Serve para decidir quais notas analisar.",
  "  full   consulta a nota inteira no SEFAZ: data, valor e itens. \xC9 o padr\xE3o",
  "         quando nenhum comando \xE9 informado.",
  "",
  "Op\xE7\xF5es:",
  "  --version, -v   imprime a vers\xE3o e sai",
  "  --help, -h      imprime esta ajuda e sai",
  ""
];
var COMMANDS = ["scan", "full"];
async function main() {
  const args = process.argv.slice(2);
  if (args.includes("--version") || args.includes("-v")) {
    process.stdout.write(VERSION4 + "\n");
    return;
  }
  if (args.includes("--help") || args.includes("-h")) {
    process.stdout.write(USAGE.join("\n") + "\n");
    return;
  }
  const desconhecida = args.find((arg) => arg.startsWith("-"));
  if (desconhecida) {
    return fail("Op\xE7\xE3o desconhecida: " + desconhecida);
  }
  const command = isCommand(args[0]) ? args[0] : "full";
  const danfes = isCommand(args[0]) ? args.slice(1) : args;
  if (danfes.length === 0) {
    process.stderr.write(USAGE.join("\n"));
    process.exitCode = 1;
    return;
  }
  const result = command === "scan" ? await new ScanRunner().run(danfes) : await new BatchRunner().run(danfes);
  process.stdout.write(JSON.stringify(result));
}
function isCommand(arg) {
  return arg !== void 0 && COMMANDS.includes(arg);
}
function fail(message) {
  process.stderr.write(message + "\n\n" + USAGE.join("\n"));
  process.exitCode = 1;
}
main().catch((error) => {
  const message = error instanceof Error ? error.message : String(error);
  process.stderr.write("Falha irrecuper\xE1vel: " + message + "\n");
  process.exitCode = 1;
});
/*! Bundled license information:

mime-db/index.js:
  (*!
   * mime-db
   * Copyright(c) 2014 Jonathan Ong
   * Copyright(c) 2015-2022 Douglas Christopher Wilson
   * MIT Licensed
   *)

mime-types/index.js:
  (*!
   * mime-types
   * Copyright(c) 2014 Jonathan Ong
   * Copyright(c) 2015 Douglas Christopher Wilson
   * MIT Licensed
   *)
*/
