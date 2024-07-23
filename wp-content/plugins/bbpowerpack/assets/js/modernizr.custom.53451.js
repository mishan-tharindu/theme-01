/*! modernizr 3.6.0 (Custom Build) | MIT *
 * https://modernizr.com/download/?-backgroundcliptext-csstransforms-csstransforms3d-csstransitions-addtest-atrule-domprefixes-prefixes-setclasses-testallprops-testprop-teststyles !*/
 if ( 'undefined' === typeof window.Modernizr ) {
 !function(e,n,t){function r(e,n){return typeof e===n}function o(){var e,n,t,o,s,i,a;for(var l in S)if(S.hasOwnProperty(l)){if(e=[],n=S[l],n.name&&(e.push(n.name.toLowerCase()),n.options&&n.options.aliases&&n.options.aliases.length))for(t=0;t<n.options.aliases.length;t++)e.push(n.options.aliases[t].toLowerCase());for(o=r(n.fn,"function")?n.fn():n.fn,s=0;s<e.length;s++)i=e[s],a=i.split("."),1===a.length?Modernizr[a[0]]=o:(!Modernizr[a[0]]||Modernizr[a[0]]instanceof Boolean||(Modernizr[a[0]]=new Boolean(Modernizr[a[0]])),Modernizr[a[0]][a[1]]=o),_.push((o?"":"no-")+a.join("-"))}}function s(e){var n=P.className,t=Modernizr._config.classPrefix||"";if(T&&(n=n.baseVal),Modernizr._config.enableJSClass){var r=new RegExp("(^|\\s)"+t+"no-js(\\s|$)");n=n.replace(r,"$1"+t+"js$2")}Modernizr._config.enableClasses&&(n+=" "+t+e.join(" "+t),T?P.className.baseVal=n:P.className=n)}function i(e,n){if("object"==typeof e)for(var t in e)b(e,t)&&i(t,e[t]);else{e=e.toLowerCase();var r=e.split("."),o=Modernizr[r[0]];if(2==r.length&&(o=o[r[1]]),"undefined"!=typeof o)return Modernizr;n="function"==typeof n?n():n,1==r.length?Modernizr[r[0]]=n:(!Modernizr[r[0]]||Modernizr[r[0]]instanceof Boolean||(Modernizr[r[0]]=new Boolean(Modernizr[r[0]])),Modernizr[r[0]][r[1]]=n),s([(n&&0!=n?"":"no-")+r.join("-")]),Modernizr._trigger(e,n)}return Modernizr}function a(e,n){return!!~(""+e).indexOf(n)}function l(){return"function"!=typeof n.createElement?n.createElement(arguments[0]):T?n.createElementNS.call(n,"http://www.w3.org/2000/svg",arguments[0]):n.createElement.apply(n,arguments)}function u(){var e=n.body;return e||(e=l(T?"svg":"body"),e.fake=!0),e}function f(e,t,r,o){var s,i,a,f,c="modernizr",p=l("div"),d=u();if(parseInt(r,10))for(;r--;)a=l("div"),a.id=o?o[r]:c+(r+1),p.appendChild(a);return s=l("style"),s.type="text/css",s.id="s"+c,(d.fake?d:p).appendChild(s),d.appendChild(p),s.styleSheet?s.styleSheet.cssText=e:s.appendChild(n.createTextNode(e)),p.id=c,d.fake&&(d.style.background="",d.style.overflow="hidden",f=P.style.overflow,P.style.overflow="hidden",P.appendChild(d)),i=t(p,e),d.fake?(d.parentNode.removeChild(d),P.style.overflow=f,P.offsetHeight):p.parentNode.removeChild(p),!!i}function c(e){return e.replace(/([a-z])-([a-z])/g,function(e,n,t){return n+t.toUpperCase()}).replace(/^-/,"")}function p(e,n){return function(){return e.apply(n,arguments)}}function d(e,n,t){var o;for(var s in e)if(e[s]in n)return t===!1?e[s]:(o=n[e[s]],r(o,"function")?p(o,t||n):o);return!1}function m(e){return e.replace(/([A-Z])/g,function(e,n){return"-"+n.toLowerCase()}).replace(/^ms-/,"-ms-")}function g(n,t,r){var o;if("getComputedStyle"in e){o=getComputedStyle.call(e,n,t);var s=e.console;if(null!==o)r&&(o=o.getPropertyValue(r));else if(s){var i=s.error?"error":"log";s[i].call(s,"getComputedStyle returning null, its possible modernizr test results are inaccurate")}}else o=!t&&n.currentStyle&&n.currentStyle[r];return o}function v(n,r){var o=n.length;if("CSS"in e&&"supports"in e.CSS){for(;o--;)if(e.CSS.supports(m(n[o]),r))return!0;return!1}if("CSSSupportsRule"in e){for(var s=[];o--;)s.push("("+m(n[o])+":"+r+")");return s=s.join(" or "),f("@supports ("+s+") { #modernizr { position: absolute; } }",function(e){return"absolute"==g(e,null,"position")})}return t}function h(e,n,o,s){function i(){f&&(delete O.style,delete O.modElem)}if(s=r(s,"undefined")?!1:s,!r(o,"undefined")){var u=v(e,o);if(!r(u,"undefined"))return u}for(var f,p,d,m,g,h=["modernizr","tspan","samp"];!O.style&&h.length;)f=!0,O.modElem=l(h.shift()),O.style=O.modElem.style;for(d=e.length,p=0;d>p;p++)if(m=e[p],g=O.style[m],a(m,"-")&&(m=c(m)),O.style[m]!==t){if(s||r(o,"undefined"))return i(),"pfx"==n?m:!0;try{O.style[m]=o}catch(y){}if(O.style[m]!=g)return i(),"pfx"==n?m:!0}return i(),!1}function y(e,n,t,o,s){var i=e.charAt(0).toUpperCase()+e.slice(1),a=(e+" "+N.join(i+" ")+i).split(" ");return r(n,"string")||r(n,"undefined")?h(a,n,o,s):(a=(e+" "+E.join(i+" ")+i).split(" "),d(a,n,t))}function C(e,n,r){return y(e,t,t,n,r)}var _=[],S=[],w={_version:"3.6.0",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(e,n){var t=this;setTimeout(function(){n(t[e])},0)},addTest:function(e,n,t){S.push({name:e,fn:n,options:t})},addAsyncTest:function(e){S.push({name:null,fn:e})}},Modernizr=function(){};Modernizr.prototype=w,Modernizr=new Modernizr;var x=w._config.usePrefixes?" -webkit- -moz- -o- -ms- ".split(" "):["",""];w._prefixes=x;var b;!function(){var e={}.hasOwnProperty;b=r(e,"undefined")||r(e.call,"undefined")?function(e,n){return n in e&&r(e.constructor.prototype[n],"undefined")}:function(n,t){return e.call(n,t)}}();var P=n.documentElement,T="svg"===P.nodeName.toLowerCase();w._l={},w.on=function(e,n){this._l[e]||(this._l[e]=[]),this._l[e].push(n),Modernizr.hasOwnProperty(e)&&setTimeout(function(){Modernizr._trigger(e,Modernizr[e])},0)},w._trigger=function(e,n){if(this._l[e]){var t=this._l[e];setTimeout(function(){var e,r;for(e=0;e<t.length;e++)(r=t[e])(n)},0),delete this._l[e]}},Modernizr._q.push(function(){w.addTest=i});var z="Moz O ms Webkit",E=w._config.usePrefixes?z.toLowerCase().split(" "):[];w._domPrefixes=E;var j="CSS"in e&&"supports"in e.CSS,k="supportsCSS"in e;Modernizr.addTest("supports",j||k);var N=w._config.usePrefixes?z.split(" "):[];w._cssomPrefixes=N;var A=function(n){var r,o=x.length,s=e.CSSRule;if("undefined"==typeof s)return t;if(!n)return!1;if(n=n.replace(/^@/,""),r=n.replace(/-/g,"_").toUpperCase()+"_RULE",r in s)return"@"+n;for(var i=0;o>i;i++){var a=x[i],l=a.toUpperCase()+"_"+r;if(l in s)return"@-"+a.toLowerCase()+"-"+n}return!1};w.atRule=A;var L=(w.testStyles=f,{elem:l("modernizr")});Modernizr._q.push(function(){delete L.elem});var O={style:L.elem.style};Modernizr._q.unshift(function(){delete O.style});w.testProp=function(e,n,r){return h([e],t,n,r)};w.testAllProps=y,w.testAllProps=C,Modernizr.addTest("backgroundcliptext",function(){return C("backgroundClip","text")}),Modernizr.addTest("csstransforms",function(){return-1===navigator.userAgent.indexOf("Android 2.")&&C("transform","scale(1)",!0)}),Modernizr.addTest("csstransforms3d",function(){return!!C("perspective","1px",!0)}),Modernizr.addTest("csstransitions",C("transition","all",!0)),o(),s(_),delete w.addTest,delete w.addAsyncTest;for(var q=0;q<Modernizr._q.length;q++)Modernizr._q[q]();e.Modernizr=Modernizr}(window,document);
 }