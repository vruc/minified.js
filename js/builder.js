if(/^u/.test(typeof define)){var def={};this.define=function(k,m){def[k]=m()};this.require=function(k){return def[k]}}
define("minifiedUtil",function(){function k(c){return c.substr(0,3)}function m(c){return null!=c?""+c:""}function g(c){return"string"==typeof c}function h(c){return"function"==typeof c}function j(c){return!!c&&"object"==typeof c}function q(c){return"number"==typeof c}function u(c){return j(c)&&!!c.getDay}function e(c){return!0===c||!1===c}function w(c){var a=typeof c;return"object"==a?!(!c||!c.getDay):"string"==a||"number"==a||e(c)}function s(c){return!!c&&null!=c.length&&!g(c)&&!(c&&c.nodeType)&&
!h(c)}function t(c){return c}function B(c){return c+1}function v(c,a,b){return m(c).replace(a,null!=b?b:"")}function T(c){return v(c,/[\\\[\]\/{}()*+?.$|^-]/g,"\\$&")}function P(c){return v(c,/^\s+|\s+$/g)}function C(c,a){for(var b in c)c.hasOwnProperty(b)&&a(b,c[b]);return c}function y(c,a){if(c)for(var b=0;b<c.length;b++)a(c[b],b);return c}function Q(c,a){var b=[];y(c,function(c,d){a(c,d)&&b.push(c)});return b}function z(c,a,b){var d=[];c(a,function(c,a){s(c=b(c,a))?y(c,function(c){d.push(c)}):
null!=c&&d.push(c)});return d}function D(c,a){return z(y,c,a)}function E(c){var a=[];C(c,function(c){a.push(c)});return a}function x(c,a){var b=[];y(c,function(c,d){b.push(a(c,d))});return b}function A(c,a,b){var d=a;y(c,function(c,a){d=b(d,c,a)});return d}function F(c,a){if(s(c)){var b=N(a);return f(N(c).sub(0,b.length),b)}return null!=a&&c.substr(0,a.length)==a}function G(c,a){if(s(c)){var b=N(a);return N(c).sub(-b.length).equals(b)||!b.length}return null!=a&&c.substr(c.length-a.length)==a}function W(c){var a=
c.length;return x(c,function(){return c[--a]})}function H(c,a,b){if(!s(c))return[];var d=c.length,f=0>a?d+a:a,n=null==b?d:0<=b?b:d+b;return Q(c,function(c,a){return a>=f&&a<n})}function U(c,a){var b={};y(c,function(c){b[c]=a});return b}function a(c,a,b){C(c,function(c,d){if(null==a[c]||!b)a[c]=d});return a}function b(c,a){for(var b=h(a)?a:function(c,b){if(a===c)return b},d,f=0;f<c.length;f++)if(null!=(d=b(c[f],f)))return d}function d(c,a){if(s(c))for(var b=0;b<c.length;b++)if(c[b]==a)return!0;return!1}
function f(c,a){if(c==a)return!0;if(null==c||null==a)return!1;if(w(c)||w(a))return u(c)&&u(a)&&c.getTime()==a.getTime();if(s(c))return s(a)?c.length!=a.length?!1:!b(c,function(c,b){if(!f(c,a[b]))return!0}):!1;if(s(a))return!1;var d=E(c),n=d.length,e=0;C(a,function(){e++});return n!=e?!1:!b(d,function(b){if(!f(c[b],a[b]))return!0})}function n(c,a,b){return c.apply(b&&a,x(b||a,t))}function O(c,a,b){return x(c,function(c){return h(c)?n(c,a,b):V})}function I(c,a,b,d){return function(){return n(c,a,D([b,
arguments,d],t))}}function K(c,a,b,d){setTimeout(function(){n(a,b,d)},c)}function X(c,a){return ba(a,0,0,0,c)}function ba(c,a,b,d,f,n,e){function s(c){var a=c.length;return a>e?s(c.substr(0,a-e))+(n||",")+c.substr(a-e):c}var h=0>c,k=/(\d+)(\.(.*))?/.exec((h?-c:c).toFixed(a));c=k[1];for(d=(d||".")+k[3];c.length<(f||1);)c="0"+c;e&&(c=s(c));return(h?"-":"")+c+(a?b?v(d,/[.,]?0+$/):d:"")}function ca(c,a,b){return null==a||!c?0:60*parseInt(c[a])+parseInt(c[a+1])+b.getTimezoneOffset()}function Y(c,a){c=
v(c,/^\?/);if(u(a)){var d,f,n=c,e=a,h={y:["FullYear",t],M:["Month",B],n:["Month",ha],N:["Month",da],d:["Date",t],m:["Minutes",t],H:["Hours",t],h:["Hours",function(c){return c%12||12}],K:["Hours",B],k:["Hours",function(c){return c%12+1}],s:["Seconds",t],S:["Milliseconds",t],a:["Hours",function(c,a){return(a||ia)[12>c?0:1]}],w:["Day",pa],W:["Day",ja],z:["TimezoneOffset",function(c){if(d)return d;var a=0<c?c:-c;return(0>c?"+":"-")+X(2,Math.floor(a/60))+X(2,a%60)}]};if(f=/^\[(([+-]\d\d)(\d\d))\]\s*(.*)/.exec(c))d=
f[1],e=Z(a,"minutes",ca(f,2,a)),n=f[4];return v(n,/(\w)(\1*)(?:\[([^\]]+)\])?/g,function(c,a,b,d){if(a=h[a])c=e["get"+(s(a)?a[0]:a)].call(e),d=d&&d.split(","),c=s(a[1])?(d||a[1])[c]:a[1](c,d),null!=c&&!g(c)&&(c=X(b.length+1,c));return c})}return b(c.split(/\s*\|\s*/),function(c){var b,d;if(b=/^([<>]?)(=?)([^:]*?)\s*:\s*(.*)$/.exec(c)){c=a;var f=parseFloat(b[3]);if(isNaN(f)||!q(c))c=null==c?"null":m(c),f=b[3];if(b[1]){if(!b[2]&&c==f||"<"==b[1]&&c>f||">"==b[1]&&c<f)return null}else if(c!=f)return null;
c=b[4]}if(q(a)&&(b=/(?:(0[0.,]*)|(#[#.,]*))(_*)(9*)/.exec(c))){d=m(b[1])+m(b[2]);var f=m(b[1]).length?v(d,/[.,]/g).length:1,n=v(v(d,/^.*[0#]/),/[^,.]/g),e=m(b[3]).length+m(b[4]).length,s,h;if(d=/([.,])[^.,]+[.,]/.exec(b[0]))s=d[1],h=d[0].length-2;s=ba(a,e,m(b[3]).length,n,f,s,h);h=c;c=b.index;b=m(b[0]).length;return h.substr(0,c)+s+h.substr(c+b)}return c})}function aa(c,a){if(1==arguments.length)return aa(null,c);if(/^\?/.test(c)){if(""==P(a))return null;c=c.substr(1)}var b,d=(b=/[0#]([.,])[_9]/.exec(c))?
b[1]:(b=/^[.,]$/.exec(c))?b[0]:".";b=parseFloat(v(v(v(a,","==d?/\./g:/,/g),d,"."),/^[^\d-]*(-?\d)/,"$1"));return isNaN(b)?V:b}function ka(c){return new Date(c.getTime())}function ea(c,a,b){c["set"+a].call(c,c["get"+a].call(c)+b);return c}function Z(c,a,b){return 3>arguments.length?Z(new Date,c,a):ea(ka(c),a.charAt(0).toUpperCase()+a.substr(1),b)}function la(c,a,b){var d=a.getTime(),f=b.getTime(),n=f-d;if(0>n)return-la(c,b,a);if(a={milliseconds:1,seconds:1E3,minutes:6E4,hours:36E5}[c])return n/a;a=
c.charAt(0).toUpperCase()+c.substr(1);c=Math.floor(n/{fullYear:31536E6,month:2628E6,date:864E5}[c]-2);d=ea(new Date(d),a,c);for(n=c;n<1.2*c+4;n++)if(ea(d,a,1).getTime()>f)return n}function fa(c,a,b){var d=/^(([^.]|\.\.)+)\.([^.].*)/.exec(a);if(d){a=v(d[1],/\.\./g,".");var f=c[a];return fa(h(f)?f():f,d[3],b)}a=v(a,/\.\./g,".");f=c[a];return b===V?h(f)?f():f:h(f)?f(b):c[a]=b}function ma(c){return v(c,/['"\t\n\r]/g,function(c){return qa[c]})}function na(c,a){if(ga[c])return ga[c];var b,d=new Function("obj",
"out","esc","print","_","with(obj||{}){"+x(c.split(/<%|%>/),function(c,a){return a%2?(b=/^=(.*)::(.*)/.exec(c))?'print(esc(_.formatValue("'+ma(b[2])+'",'+b[1]+")));\n":(b=/^=(.*)/.exec(c))?"print(esc("+b[1]+"));\n":c+";\n":'print("'+ma(c)+'");\n'}).join("")+"}");return ga[c]=function(c){var b=[];d(c,b,a||t,function(){n(b.push,b,arguments)},N);return b.join("")}}function oa(c){return v(c,/[<>'"&]/g,function(c){return"&#"+c.charCodeAt(0)+";"})}function R(c,a){for(var b=0,d=0;d<c.length;d++){var f=c[d];
if(a&&s(f))for(var n=0;n<f.length;n++)this[b++]=f[n];else this[b++]=f}this.length=b;this._=!0}function N(){return new R(arguments,!0)}function S(c){return function(a,b){return new R(c(this,a,b))}}function L(c){return function(a,b){return c(this,a,b)}}function M(c){return function(a,b,d){return new R(c(a,b,d))}}var V,da="January,February,March,April,May,June,July,August,September,October,November,December".split(/,/),ha=x(da,k),ja="Sunday,Monday,Tuesday,Wednesday,Thursday,Friday,Saturday".split(/,/),
pa=x(ja,k),ia=["am","pm"],qa={'"':'\\"',"'":"\\'","\n":"\\n","\t":"\\t","\r":"\\r"},ga={};a({each:L(y),filter:S(Q),collect:S(D),map:S(x),reduce:L(A),toObject:L(U),equals:L(f),sub:S(H),reverse:S(W),find:L(b),startsWith:L(F),endsWith:L(G),contains:L(d),call:S(O),array:function(){return x(this,t)},func:function(){var c=this;return function(){return new R(O(c,arguments))}},join:function(c){return x(this,t).join(c)},sort:function(c){return new R(x(this,t).sort(c))},uniq:function(){var c={};return this.filter(function(a){if(c[a])return!1;
c[a]=1;return!0})},intersection:function(c){var a=U(c,1);return this.filter(function(c){var b=a[c];a[c]=0;return b})},tap:function(c){c(this);return this},toString:function(){return"["+this.map(function(c){return g(c)?"'"+v(c,/'/g,"\\'")+"'":c}).join(", ")+"]"}},R.prototype);a({bind:I,partial:function(c,a,b){return I(c,null,a,b)},once:function(c){var a=0;return function(){if(!a++)return n(c,this,arguments)}},selfFunc:t,each:y,eachObj:C,toObject:U,filter:M(Q),filterObj:function(a,b){var d={};C(a,function(a,
c){b(a,c)&&(d[a]=c)});return d},collect:M(D),collectObj:M(function(a,b){return z(C,a,b)}),map:M(x),mapObj:function(a,b){var d={};C(a,function(a,c){d[a]=b(a,c)});return d},reduce:A,find:b,contains:d,sub:M(H),reverse:M(W),startsWith:F,endsWith:G,equals:f,toString:m,isList:s,isFunction:h,isObject:j,isNumber:q,isBool:e,isDate:u,isValue:w,isString:g,toString:m,prop:fa,escapeRegExp:T,trim:P,defer:function(a,b,d){K(0,a,b,d)},delay:K,dateClone:ka,dateAdd:Z,dateDiff:la,dateMidnight:function(a){a=a||new Date;
return new Date(a.getFullYear(),a.getMonth(),a.getDate())},formatNumber:ba,pad:X,formatValue:Y,parseDate:function(a,d){var f={y:0,M:[1,1],n:[1,ha],N:[1,da],d:2,m:4,H:3,h:3,K:[3,1],k:[3,1],s:5,S:6,a:[3,ia]},n={},e=1,h,k,m;if(/^\?/.test(a)){if(""==P(d))return null;a=a.substr(1)}if(m=/^\[([+-]\d\d)(\d\d)\]\s*(.*)/.exec(a))h=m,a=m[3];if(!(m=RegExp(a.replace(/(.)(\1*)(?:\[([^\]]*)\])?/g,function(a,c,b,d){return/[dmhkyhs]/i.test(c)?(n[e++]=c,a=b.length+1,"(\\d"+(2>a?"+":"{1,"+a+"}")+")"):"z"==c?(k=e,e+=
2,"([+-]\\d\\d)(\\d\\d)"):/[Nna]/.test(c)?(n[e++]=[c,d&&d.split(",")],"([a-zA-Z\u0080\ufffd\u1fff]+)"):/w/i.test(c)?"[a-zA-Z\u0080\ufffd\u1fff]+":/\s/.test(c)?"\\s+":T(a)})).exec(d)))return V;for(var j=[0,0,0,0,0,0,0],O=1;O<e;O++){var w=m[O],g=n[O];if(s(g)){var K=g[0],q=f[K],I=q[0],g=b(g[1]||q[1],function(a,c){return F(w.toLowerCase(),a.toLowerCase())?c:null});if(null==g)return V;j[I]="a"==K?j[I]+12*g:g}else g&&(K=parseInt(w),q=f[g],s(q)?j[q[0]]+=K-q[1]:j[q]+=K)}f=new Date(j[0],j[1],j[2],j[3],j[4],
j[5],j[6]);return Z(f,"minutes",-ca(h,1,f)-ca(m,k,f))},parseNumber:aa,keys:M(E),values:M(function(a){var b=[];C(a,function(a,c){b.push(c)});return b}),copyObj:a,coal:function(){return b(arguments,t)},format:function(a,b){return v(a,/{([^,}]*)(,([^}]*))?}/g,function(a,c,d,f){a=""==c?b:fa(b,c);return d?Y(f,a):m(a)})},escapeHtml:oa,template:na,htmlTemlplate:function(a){return na(a,oa)}},N);return{_:N}});var l=!0,p=null,r=!1;if(/^u/.test(typeof define)){var J={};this.define=function(k,m){J[k]=m()};this.require=function(k){return J[k]}}
define("minified",function(){function k(a){return a!=p?""+a:""}function m(a){return"string"==typeof a}function g(a){return"function"==typeof a&&!a.item}function h(a){return a&&a.length!=p&&!m(a)&&!(a&&a.nodeType)&&!g(a)}function j(a,b){for(var d in a)a.hasOwnProperty(d)&&b(d,a[d]);return a}function q(a,b){for(var d=0;a&&d<a.length;d++)b(a[d],d);return a}function u(a,b){var d=[];q(a,function(a,n){b(a,n)&&d.push(a)});return d}function e(a,b){var d=[];q(a,function(a,n){h(a=b(a,n))?q(a,function(a){d.push(a)}):
a!=p&&d.push(a)});return d}function w(a,b){var d=[];j(a,function(a,n){h(a=b(a,n))?q(a,function(a){d.push(a)}):a!=p&&d.push(a)});return d}function s(a,b,d){return k(a).replace(b,d||"")}function t(a){return parseFloat(s(a,/^[^\d-]+/))}function B(a){var b={$position:"absolute",$visibility:"hidden",$display:"block",$height:p},d=a.get(b);a.set(b);b=a.get("$height",l);a.set(d);return b}function v(a){a()}function T(){q(F,v);F=p}function P(a){F?F.push(a):x.setTimeout(a,0)}function C(a,b,d,f){return function(){var n=
z(A.createElement(a));h(b)||"object"!=typeof b?n.add(b):n.set(b).add(d);f&&f(n);return n}}function y(){function a(a,n){b==p&&(b=a,d=n,x.setTimeout(function(){q(f,v)},0))}var b,d=[],f=[],n=a.then=function(a,n){function e(){try{var f=b?a:n;if(g(f)){var s=f.apply(p,d);s&&g(s.then)?s.then(function(a){h(l,[a])},function(a){h(r,[a])}):h(l,[s])}else h(b,d)}catch(j){h(r,[j])}}var h=y();b!=p?x.setTimeout(e,0):f.push(e);return h};a.always=function(a){return n(a,a)};a.error=function(a){return n(0,a)};return a}
function Q(a){return U[a]||"\\u"+("0000"+a.charCodeAt(0).toString(16)).slice(-4)}function z(a,b,d){return g(a)?P(a):new E(D(a,b,d))}function D(a,b,d){function f(a){a=function Y(a){return h(a)?e(a,Y):a}(a);return n?u(a,function(a){for(;a=a.parentNode;){if(a===n)return l;if(d)return r}}):a}var n,j,k,g,w;if(b&&1!=(b=D(b)).length)return e(b,function(b){return D(a,b,d)});n=b&&b[0];if(!m(a))return f(h(a)?a:[a]);if(1<(b=a.split(/\s*,\s*/)).length)return e(b,function(a){return D(a,n,d)});if(b=/(\S+)\s+(.+)$/.exec(a))return D(b[2],
D(b[1],n),d);if(a!=(b=s(a,/^#/)))return f([A.getElementById(b)]);n=n||A;j=(b=/([^.]*)\.?([^.]*)/.exec(a))[1];g=b[2];b=(k=n.getElementsByClassName&&g)?n.getElementsByClassName(g):n.getElementsByTagName(j||"*");if(j=k?j:g)w=RegExp("\\b"+j+"\\b","i"),b=u(b,function(a){return w.test(a[k?"nodeName":"className"])});return n?f(b):b}function E(a){for(var b=this.length=a.length,d=0;d<b;d++)this[d]=a[d]}var x=this,A=document,F=[],G=[],W=e(["msR","webkitR","mozR","r"],function(a){return x[a+"equestAnimationFrame"]})[0]||
function(a){x.setTimeout(a,33)},H=!!A.all&&!F.map,U={"\t":"\\t","\r":"\\r","\n":"\\n",'"':'\\"',"\\":"\\\\"};j({each:function(a){return q(this,a)},filter:function(a){return new E(u(this,a))},collect:function(a){return new E(e(this,a))},sub:function(a,b){var d=0>a?this.length+a:a,f=0<=b?b:this.length+(b||0);return new E(u(this,function(a,b){return b>=d&&b<f}))},find:function(a){for(var b,d=g(a)?a:function(b,d){if(a===b)return d},f=0;f<this.length;f++)if((b=d(this[f],f))!=p)return b},hasClass:function(){var a=
RegExp("\\b"+name+"\\b");return this.find(function(b){return a.test(b.className)?b:p})},remove:function(){q(this,function(a){a.parentNode.removeChild(a)})},get:function(a,b){var d=this,f=d[0];if(f){if(m(a)){var n=s(a,/^[$@]/),e;e="$"==a?f.className:"$$"==a?H?f.style.cssText:f.getAttribute("style"):/\$\$/.test(a)&&("hidden"==f.style.visibility||"none"==f.style.display)?0:"$$fade"==a?isNaN(e=H?t(f.style.filter)/100:t(f.style.opacity))?1:e:"$$slide"==a?d.get("$height"):/^\$/.test(a)?x.getComputedStyle?
x.getComputedStyle(f,p).getPropertyValue(s(n,/[A-Z]/g,function(a){return"-"+a.toLowerCase()})):(f.currentStyle||f.style)[n]:/^@/.test(a)?f.getAttribute(n):f[n];return b?t(e):e}var g={};(h(a)?q:j)(a,function(a){g[a]=d.get(a,b)});return g}},set:function(a,b){var d=this,f;void 0!==b?"$$fade"==a||"$$slide"==a?d.set({$visibility:0<(f=t(b))?"visible":"hidden",$display:"block"}).set("$$fade"==a?H?{$filter:"alpha(opacity = "+100*f+")",$zoom:1}:{$opacity:f}:{$height:/px$/.test(b)?b:function(a,b,d){return f*
(f&&B(z(d)))+"px"},$overflow:"hidden"}):q(d,function(d,f){var e=s(a,/^[@$]/),h=d.className||"",j=/^\$/.test(a)?d.style:d,k=g(b)?b(z(d).get(a),f,d):b;"$"==a?k!=p&&(q(k.split(/\s+/),function(a){var b=s(a,/^[+-]/),d=h;h=s(h,RegExp("\\b"+b+"\\b"));if(/^\+/.test(a)||b==a&&d==h)h+=" "+b}),d.className=s(h,/^\s+|\s+(?=\s|$)/g)):"$$"==a?H?j.cssText=k:k!=p?d.setAttribute("style",k):d.removeAttribute("style"):/^@/.test(a)?k!=p?j.setAttribute(e,k):j.removeAttribute(e):j[e]=k}):m(a)||g(a)?d.set("$",a):j(a,function(a,
b){d.set(a,b)});return d},add:function(a,b){return q(this,function(d,f){var e;(function I(a){h(a)?q(a,I):g(a)?I(a(d,f)):a!=p&&(a=a&&a.nodeType?a:A.createTextNode(a),e?e.parentNode.insertBefore(a,e.nextSibling):b?b(a,d,d.parentNode):d.appendChild(a),e=a)})(a&&a.nodeType&&f?p:a)})},fill:function(a){return q(this,function(a){z(a.childNodes).remove()}).add(a)},addBefore:function(a){return this.add(a,function(a,d,f){f.insertBefore(a,d)})},addAfter:function(a){return this.add(a,function(a,d,f){f.insertBefore(a,
d.nextSibling)})},addFront:function(a){return this.add(a,function(a,d){d.insertBefore(a,d.firstChild)})},replace:function(a){return this.add(a,function(a,d,f){f.replaceChild(a,d)})},clone:function(a){return new E(e(this,function(b){var d=b&&b.nodeType;if(1==d){var f={$:b.className||p,$$:H?b.style.cssText:b.getAttribute("style")};q(b.attributes,function(a){var d=a.name;"id"!=d&&"style"!=d&&"class"!=d&&b.getAttribute(d)&&(f["@"+d]=a.value)});return C(b.tagName,f,z(b.childNodes).clone(),a)}return 5>
d?b.data:p}))},animate:function(a,b,d,f){var e=this,h=[],m=/-?[\d.]+/,w,u=y(),v=g(d)?d:function(a,b,f){return a+f*(b-a)*(d+(1-d)*f*(3-2*f))};f=f||{};f.time=0;f.stop=function(){w();u(r)};b=b||500;d=d||0;q(e,function(b){var d={a:z(b),c:{}};j(d.b=d.a.get(a),function(b,f){var e=a[b];"$$slide"==b&&(e=e*B(d.a)+"px");d.c[b]=/^[+-]=/.test(e)?s(e.substr(2),m,t(f)+t(s(e,/\+?=/))):e});h.push(d)});w=z.loop(function(a){function d(a,b){return/^#/.test(a)?parseInt(6<a.length?a.substr(1+2*b,2):(a=a.charAt(1+b))+
a,16):parseInt(s(a,/[^\d,]+/g).split(",")[b])}f.time=a;a>=b||0>a?(q(h,function(a){a.a.set(a.c)}),w(),f.time=p,u(l,[e])):q(h,function(f){j(f.b,function(e,h){var j="rgb(",n=f.c[e],g=a/b;if(/^#|rgb\(/.test(n))for(var w=0;3>w;w++)j+=Math.round(v(d(h,w),d(n,w),g))+(2>w?",":")");else j=s(n,m,k(v(t(h),t(n),g)));f.a.set(e,j)})})});return u},toggle:function(a,b,d,f){var e=this,h={},j=r,k=/\b(?=\w)/g;return!b?e.toggle(s(a,k,"-"),s(a,k,"+")):e.set(a)&&function(k){k!==j&&(j=k===l||k===r?k:!j,d?e.animate(j?b:
a,h.stop?h.stop()||h.time:d,f,h):e.set(j?b:a))}},on:function(a,b,d,f){return q(this,function(e,h){q(a.split(/\s/),function(a){function j(e){e=e||x.event;if((!b.apply(f?d:e.target,f||d||[e,h])||f)&&a==k)e.stopPropagation&&(e.preventDefault(),e.stopPropagation()),e.returnValue=r,e.cancelBubble=l}var k=s(a,/\|/);(b.M=b.M||[]).push({e:e,h:j,n:k});e.addEventListener?e.addEventListener(k,j,l):e.attachEvent("on"+k,j)})})}},function(a,b){E.prototype[a]=b});j({request:function(a,b,d,f,n,s){var g,q=d,t=0,u=
y();try{return g=x.XMLHttpRequest?new XMLHttpRequest:new ActiveXObject("Msxml2.XMLHTTP.3.0"),d!=p&&(f=f||{},!m(d)&&!(d&&d.nodeType)&&(q=w(d,function aa(a,b){return h(b)?e(b,function(b){return aa(a,b)}):encodeURIComponent(a)+(b!=p?"="+encodeURIComponent(b):"")}).join("&")),/post/i.test(a)?!(d&&d.nodeType)&&!m(d)&&!f["Content-Type"]&&(f["Content-Type"]="application/x-www-form-urlencoded"):(b+="?"+q,q=p)),g.open(a,b,l,n,s),j(f,function(a,b){g.setRequestHeader(a,b)}),g.onreadystatechange=function(){4==
g.readyState&&!t++&&(200==g.status?u(l,[g.responseText,g.responseXML]):u(r,[g.status,g.statusText,g.responseText]))},g.send(q),u}catch(v){t||u(r,[0,p,k(v)])}},toJSON:function b(d){return d==p?""+d:m(d=d.valueOf())?'"'+s(d,/[\\\"\x00-\x1f\x22\x5c]/g,Q)+'"':h(d)?"["+e(d,b).join()+"]":"object"==typeof d?"{"+w(d,function(d,e){return b(d)+":"+b(e)}).join()+"}":k(d)},parseJSON:x.JSON?x.JSON.parse:function(b){b=s(b,/[\x00\xad\u0600-\uffff]/g,Q);if(/^[[\],:{}\s]*$/.test(s(s(b,/\\["\\\/bfnrtu]/g),/"[^"\\\n\r]*"|true|false|null|[\d.eE+-]+/g)))return eval("("+
b+")")},ready:P,setCookie:function(b,d,f,e,h,j){A.cookie=b+"="+(j?d:escape(d))+(f?"; expires="+("object"==typeof f?f:new Date((new Date).getTime()+864E5*f)).toUTCString():"")+"; path="+(e?escapeURI(e):"/")+(h?"; domain="+escape(h):"")},getCookie:function(b,d){var f,e=(f=RegExp("(^|;)\\s*"+b+"=([^;]*)").exec(A.cookie))&&f[2];return d?e:e&&unescape(e)},loop:function(b){var d={d:b,f:(new Date).getTime(),b:function(){for(var b=0;b<G.length;b++)G[b]===d&&G.splice(b--,1)}};2>G.push(d)&&function n(){q(G,
function(b){b.d(Math.max(0,(new Date).getTime()-b.f),b.b)}).length&&W(n)}();return d.b},wait:function(b){var d=y();x.setTimeout(function(){d(l,[b])},b||0);return d},off:function(b){q(b.M,function(b){b.e.removeEventListener?b.e.removeEventListener(b.n,b.h,l):b.e.detachEvent("on"+b.n,b.h)});b.M=p}},function(b,d){z[b]=d});x.onload=T;A.addEventListener&&A.addEventListener("DOMContentLoaded",T,r);return{$:z,$$:function(b){return D(b)[0]},EE:C}});var _=require("minifiedUtil")._;
function parseSourceSections(k){function m(){return{id:"anon"+g++,src:[],desc:"",requires:{},requiredBy:{},syntax:[],example:[],params:[]}}k=k.split("\n");var g=100,h=[],j=m(),q=!1;_.each(k,function(k){if(q&&/^.*\*\/\s*$/.test(k))q=!1;else if(q){var e=k.replace(/^\s*(\*\s?)?/,"").replace(/\s*$/,""),g=e.match(/^\s*@([a-z]+)/);g?(g=g[1],e=_.trim(e.replace(/^\s*@[a-z]+\s*/,"")),"syntax"==g||"example"==g?j[g].push(e):"requires"==g?e.length&&_.each(e.split(/\s+/),function(e){j.requires[e]=1}):"param"==
g?j.params.push({name:e.replace(/\s.*$/,""),desc:e.replace(/^\S+\s+/,"")}):"return"==g?j.params.push({name:"@return",desc:e}):"function"==g?j.params[j.params.length-1].funcs.push(e):j[g]=""!=e?e:1):j.params.length?j.params[j.params.length-1].desc+="\n"+_.trim(e):j.example.length?j.example[j.example.length-1]+="\n"+e:j.desc+=e+"\n"}else/^\s*\/\*\$/.test(k)&&!/\*\/\s*$/.test(k)&&(q=!0,h.push(j),j=m());j.src.push(k)});h.push(j);return h}
function createSectionMap(k){var m={};_.each(k,function(g){m[g.id]=g});return m}function completeRequirements(k,m){var g=0;_.each(k,function(h){_.eachObj(h.requires,function(j){var k=m[j];if(!k)throw Error('Unknown id in requirement: "'+j+'"');_.eachObj(k.requires,function(j){h.requires[j]||(g++,h.requires[j]=1)})})});0<g?completeRequirements(k,m):_.each(k,function(h){_.eachObj(h.requires,function(j){m[j].requiredBy[h.id]=1})})}
function calculateDependencies(k,m){var g={};_.eachObj(m,function(h){m[h]&&(g[h]=1,_.eachObj(k[h].requires,function(h){g[h]=1}))});return g}function createDefaultConfigurationMap(k,m){var g={};_.each(k,function(h){if(h.configurable&&("default"==h.configurable||m))g[h.id]=1});return g}
function compile(k,m,g){var h="",j=calculateDependencies(m,g),q=[],u=!0;_.filter(k,function(e){return j[e.id]||!(e.configurable||e.dependency)}).each(function(e){_.each(e.src,function(e){if(/^\s*$/.test(e))u||(h+="\n"),u=!0;else{var g=e.match(/^(\s*)\/\/\s*@(cond|condblock)\s+(\!?)(\w*)\s*(.*)$/);if(g&&"cond"==g[2]&&!!j[g[4]]!=("!"==g[3]))h+=g[1]+g[5]+"\n";else if(g&&"condblock"==g[2])q.unshift(!!j[g[4]]!=("!"==g[3]));else if(q.length&&/^\s*\/\/\s*@condend(\s|$)/.test(e))q.shift();else if(0==q.length||
q[0])h+=e+"\n";u=!1}})});return h}function prepareSections(k){k=parseSourceSections(k);var m=createSectionMap(k);completeRequirements(k,m);var g=createDefaultConfigurationMap(k);return{sections:k,sectionMap:m,enabledSections:g}}var CONFIG_START="minified.js config start --",CONFIG_COMMENT="// - ",CONFIG_ALL="All sections.",CONFIG_ALL_EXCEPT="All sections except ",CONFIG_ONLY="Only sections ";
function serializeEnabledSections(k,m){var g=_.filter(k,function(e){return e.configurable}),h=_.filter(_.keys(m),function(e){return m[e]}),j,q=[];h.length==g.length?(j=CONFIG_COMMENT+CONFIG_ALL,q=[]):h.length/3>g.length/2?(j=CONFIG_COMMENT+CONFIG_ALL_EXCEPT,q=_.filter(g,function(e){return!m[e.id]}).collect(function(e){return e.id})):(j=CONFIG_COMMENT+CONFIG_ONLY,q=h);var u="// "+CONFIG_START+" use this comment to re-create configuration in the Builder\n"+j,e=50;_(q).sort().each(function(g){e<g.length?
(e=70,u+="\n// - "+g+", "):(u+=g+", ",e-=g.length+2)});return u=u.replace(/,\s*$/,".\n")}function fixConfig(k,m){_.eachObj(m,function(g){k[g]?_.copyObj(k[g].requires,m):delete m[g]});return m}
function deserializeEnabledSections(k,m,g){function h(e){return RegExp("^"+e.replace(/ /g,"\\s+"))}var j=h(CONFIG_START+".*"),q=h(CONFIG_ALL.replace(/\./,"\\.")),u=h(CONFIG_ALL_EXCEPT+"\\s*"),e=h(CONFIG_ONLY+"\\s*"),w=h(CONFIG_COMMENT);g=g.split("\n");for(var s=0;s<g.length;s++){var t=g[s];if(/^\s*\/\/s*/.test(t)&&(t=t.replace(/^\s*\/\/\s*/,""),j.test(t)&&s+1<g.length)){for(var t="",B=s+1;B<g.length;B++)if(w.test(g[B])){if(t+=g[B].replace(w,""),/\s*\.\s*$/.test(g[B]))break}else break;if(q.test(t))return createDefaultConfigurationMap(k,
!0);t=t.replace(/\s*\.\s*$/,"");if(u.test(t)){var v=createDefaultConfigurationMap(k,!0);_.each(t.replace(u,"").split(/\s*,\s*/),function(e){delete v[e]});return fixConfig(m,v)}if(e.test(t))return v={},_.each(t.replace(e,"").split(/\s*,\s*/),function(e){m[e]&&(v[e]=1)}),fixConfig(m,v)}}return null};var MINI=require("minified"),$=MINI.$,$$=MINI.$$,EE=MINI.EE,_=require("minifiedUtil")._,MAX_SIZE=4095,SRC="/minified-web-src.js",GROUPS="INTERNAL SELECTORS ELEMENT REQUEST JSON EVENTS COOKIE ANIMATION OPTIONS".split(" ");
function closureCompile(k,m,g){$.request("post","http://closure-compiler.appspot.com/compile",{js_code:k,output_format:"json",output_info:["compiled_code","statistics"],output_file_name:"minified-custom.js",compilation_level:m?"ADVANCED_OPTIMIZATIONS":"SIMPLE_OPTIMIZATIONS"}).then(function(h){g&&g($.parseJSON(h))},function(h,j,k){window.console&&console.log("error",h,j,k);g&&g(null)}).error(function(g){window.console&&console.log(g)})}
function setUpConfigurationUI(k){function m(){$(".modCheck").each(function(e){var g=0;$(".secCheck",e.parentNode.parentNode).each(function(e){e.checked&&g++});e.checked=0<g})}function g(e){var g=k.sectionMap[e.id.substr(4)];e.checked?_.eachObj(g.requires,function(e){$("#sec-"+e).set("checked",!0)}):_.eachObj(g.requiredBy,function(e){$("#sec-"+e).set("checked",!1)})}$("#compile").on("click",function(){var e={};$(".secCheck").each(function(g){g.checked&&(e[g.id.substr(4)]=1)});var g=compile(k.sections,
k.sectionMap,e),h=serializeEnabledSections(k.sections,e);if($$("#compressionAdvanced").checked)$$("#compile").disabled=!0,closureCompile(g,!0,function(e){$$("#compile").disabled=!1;$("#resultDiv").animate({$$slide:1});e?($("#gzipRow, #downloadRow").set({$display:"table-row"}),$$("#resultSrc").value=h+"\n"+e.compiledCode,$("#resultPlain").fill((e.statistics.compressedSize/1024).toFixed(2)+"kb ("+e.statistics.compressedSize+" bytes)"),$("#resultGzippedSize").fill((e.statistics.compressedGzipSize/1024).toFixed(2)+
"kb ("+e.statistics.compressedGzipSize+" bytes)"),$$("#resultLink").setAttribute("href","http://closure-compiler.appspot.com"+e.outputFilePath),$("#resultGzippedComment").set({$$fade:e.statistics.compressedGzipSize>MAX_SIZE?1:0})):alert("Google Closure Service not availble. Try again later.")});else try{$("#resultDiv").animate({$$slide:1}),$$("#resultSrc").value=h+g,$("#resultPlain").fill((g.length/1024).toFixed(2)+"kb"),$("#gzipRow, #downloadRow").set({$display:"none"})}catch(j){console.log(j)}return!1});
var h=$("#configSrcDiv").toggle({$$slide:0},{$$slide:1});$("#fromScratch").on("|click",h,[!1]);$("#loadConfig").on("|click",h,[!0]);$("#recreate").on("click",function(){try{var e=$$("#configSrc").value,g=deserializeEnabledSections(k.sections,k.sectionMap,e);g?(_.eachObj(k.sectionMap,function(e){var h=$$("#sec-"+e);h&&(h.checked=!!g[e])}),m()):alert("Can not find configuration in source.")}catch(h){console.log(h)}});$("#sectionCheckboxes").fill();for(var j=1;j<GROUPS.length;j++){var q;$("#sectionCheckboxes").add(q=
EE("div",{"@id":"divMod-"+j},EE("div",{className:"groupDescriptor"},[h=EE("input",{"@id":"mod-"+j,className:"modCheck","@type":"checkbox",checked:"checked"})(),EE("label",{"@for":"mod-"+j},GROUPS[j])]))());$(h).on("change",function(){var e=this.checked;$(".secCheck",this.parentNode.parentNode).each(function(h){h.checked=e;g(h)});m();return!0});var u;_.filter(k.sections,function(e){return e.group==GROUPS[j]&&e.configurable}).sort(function(e,g){var h=e.name||e.id,j=g.name||g.id;return h==j?0:h>j?1:
-1}).each(function(e){function h(e,g){var j=_.filter(_.keys(g),function(e){return!!g[e].name});if(!j.length)return null;var m=0,q=e;_.each(j,function(e){m++<Math.min(j.length,8)&&(1<m&&(q=m==Math.min(j.length,8)?q+" and ":q+", "),q=8==m&&8<j.length?q+"more":q+(k.sectionMap[e].name||k.sectionMap[e].id))});return q+="."}var j=h("Required by ",e.requiredBy),t=h("Requires ",e.requires);q.add(EE("div",{className:"sectionDescriptor"},[u=EE("input",{className:"secCheck","@type":"checkbox","@id":"sec-"+e.id,
checked:"default"==e.configurable?"checked":null})(),EE("label",{"@for":"sec-"+e.id},e.name||e.id),EE("div",{className:"requirements"},[j?[j,EE("br")]:null,t])]));$(u).on("change",function(){g(this);m();return!0})})}}$(function(){$.request("get",SRC,null).then(function(k){setUpConfigurationUI(prepareSections(k))}).error(function(k){window.console&&console.log(k)})});
