function selectText(){var a;if(document.selection){a=document.body.createTextRange();a.moveToElementText(this);a.select()}else{if(window.getSelection){a=document.createRange();a.selectNode(this);window.getSelection().addRange(a)}}}$(document).ready(function(){$("body").on("click",".CopyCommand",selectText)});(function(){var m=document.createElement("input");try{m.type="range";if(m.type=="range"){return}}catch(k){return}if(!document.mozSetImageElement||!("MozAppearance" in m.style)){return}var g;var j=navigator.platform=="MacIntel";var a={radius:j?9:6,width:j?22:12,height:j?16:20};var d="-moz-linear-gradient(top, transparent "+(j?"6px, #999 6px, #999 7px, #ccc 9px, #bbb 11px, #bbb 12px, transparent 12px":"9px, #999 9px, #bbb 10px, #fff 11px, transparent 11px")+", transparent)";var n={"min-width":a.width+"px","min-height":a.height+"px","max-height":a.height+"px",padding:0,border:0,"border-radius":0,cursor:"default","text-indent":"-999999px"};var l=document.createEvent("HTMLEvents");l.initEvent("change",true,false);if(document.readyState=="loading"){document.addEventListener("DOMContentLoaded",h,true)}else{h()}function h(){Array.forEach(document.querySelectorAll("input[type=range]"),f);document.addEventListener("DOMNodeInserted",i,true)}function i(o){c(o.target);if(o.target.querySelectorAll){Array.forEach(o.target.querySelectorAll("input"),c)}}function c(e,o){if(e.localName!="input"||e.type=="range"){}else{if(e.getAttribute("type")=="range"){f(e)}else{if(!o){setTimeout(c,0,e,true)}}}}function f(F){var w,L,v,K,H,I,u;var G,J,y,D,E=F.value;if(!g){g=document.body.appendChild(document.createElement("hr"));b(g,{"-moz-appearance":j?"scale-horizontal":"scalethumb-horizontal",display:"block",visibility:"visible",opacity:1,position:"fixed",top:"-999999px"});document.mozSetImageElement("__sliderthumb__",g)}var q=function(){return""+E};var p=function p(M){E=""+M;w=true;A();delete F.value;F.value=E;F.__defineGetter__("value",q);F.__defineSetter__("value",p)};F.__defineGetter__("value",q);F.__defineSetter__("value",p);F.__defineGetter__("type",function(){return"range"});["min","max","step"].forEach(function(M){if(F.hasAttribute(M)){L=true}F.__defineGetter__(M,function(){return this.hasAttribute(M)?this.getAttribute(M):""});F.__defineSetter__(M,function(N){N===null?this.removeAttribute(M):this.setAttribute(M,N)})});F.readOnly=true;b(F,n);z();F.addEventListener("DOMAttrModified",function(M){if(M.attrName=="value"&&!w){E=M.newValue;A()}else{if(~["min","max","step"].indexOf(M.attrName)){z();L=true}}},true);F.addEventListener("mousedown",x,true);F.addEventListener("keydown",r,true);F.addEventListener("focus",t,true);F.addEventListener("blur",B,true);function x(O){K=true;setTimeout(function(){K=false},0);if(O.button||!D){return}var N=parseFloat(getComputedStyle(this,0).width);var P=(N-a.width)/D;if(!P){return}var M=O.clientX-this.getBoundingClientRect().left-a.width/2-(E-G)*P;if(Math.abs(M)>a.radius){v=true;this.value-=-M/P}I=E;u=O.clientX;this.addEventListener("mousemove",C,true);this.addEventListener("mouseup",o,true)}function C(N){var M=parseFloat(getComputedStyle(this,0).width);var O=(M-a.width)/D;if(!O){return}I+=(N.clientX-u)/O;u=N.clientX;v=true;this.value=I}function o(){this.removeEventListener("mousemove",C,true);this.removeEventListener("mouseup",o,true)}function r(M){if(M.keyCode>36&&M.keyCode<41){t.call(this);v=true;this.value=E+(M.keyCode==38||M.keyCode==39?y:-y)}}function t(){if(!K){this.style.boxShadow=!j?"0 0 0 2px #fb0":"0 0 2px 1px -moz-mac-focusring, inset 0 0 1px -moz-mac-focusring"}}function B(){this.style.boxShadow=""}function s(M){return !isNaN(M)&&+M==parseFloat(M)}function z(){G=s(F.min)?+F.min:0;J=s(F.max)?+F.max:100;if(J<G){J=G>100?G:100}y=s(F.step)&&F.step>0?+F.step:1;D=J-G;A(true)}function e(){if(!w&&!L){E=F.getAttribute("value")}if(!s(E)){E=(G+J)/2}E=Math.round((E-G)/y)*y+G;if(E<G){E=G}else{if(E>J){E=G+~~(D/y)*y}}}function A(O){e();if(v&&E!=H){F.dispatchEvent(l)}v=false;if(!O&&E==H){return}H=E;var M=D?(E-G)/D*100:0;var N="-moz-element(#__sliderthumb__) "+M+"% no-repeat, ";b(F,{background:N+d})}}function b(e,o){for(var p in o){e.style.setProperty(p,o[p],"important")}}})();(function(){var w=this;var k=w._;var E={};var D=Array.prototype,g=Object.prototype,r=Function.prototype;var I=D.push,o=D.slice,y=D.concat,B=D.unshift,d=g.toString,j=g.hasOwnProperty;var M=D.forEach,q=D.map,F=D.reduce,c=D.reduceRight,b=D.filter,C=D.every,p=D.some,n=D.indexOf,l=D.lastIndexOf,u=Array.isArray,f=Object.keys,G=r.bind;var N=function(O){if(O instanceof N){return O}if(!(this instanceof N)){return new N(O)}this._wrapped=O};if(typeof exports!=="undefined"){if(typeof module!=="undefined"&&module.exports){exports=module.exports=N}exports._=N}else{w._=N}N.VERSION="1.4.2";var J=N.each=N.forEach=function(T,S,R){if(T==null){return}if(M&&T.forEach===M){T.forEach(S,R)}else{if(T.length===+T.length){for(var Q=0,O=T.length;Q<O;Q++){if(S.call(R,T[Q],Q,T)===E){return}}}else{for(var P in T){if(N.has(T,P)){if(S.call(R,T[P],P,T)===E){return}}}}}};N.map=N.collect=function(R,Q,P){var O=[];if(R==null){return O}if(q&&R.map===q){return R.map(Q,P)}J(R,function(U,S,T){O[O.length]=Q.call(P,U,S,T)});return O};N.reduce=N.foldl=N.inject=function(S,R,O,Q){var P=arguments.length>2;if(S==null){S=[]}if(F&&S.reduce===F){if(Q){R=N.bind(R,Q)}return P?S.reduce(R,O):S.reduce(R)}J(S,function(V,T,U){if(!P){O=V;P=true}else{O=R.call(Q,O,V,T,U)}});if(!P){throw new TypeError("Reduce of empty array with no initial value")}return O};N.reduceRight=N.foldr=function(U,R,O,Q){var P=arguments.length>2;if(U==null){U=[]}if(c&&U.reduceRight===c){if(Q){R=N.bind(R,Q)}return arguments.length>2?U.reduceRight(R,O):U.reduceRight(R)}var T=U.length;if(T!==+T){var S=N.keys(U);T=S.length}J(U,function(X,V,W){V=S?S[--T]:--T;if(!P){O=U[V];P=true}else{O=R.call(Q,O,U[V],V,W)}});if(!P){throw new TypeError("Reduce of empty array with no initial value")}return O};N.find=N.detect=function(R,Q,P){var O;A(R,function(U,S,T){if(Q.call(P,U,S,T)){O=U;return true}});return O};N.filter=N.select=function(R,Q,P){var O=[];if(R==null){return O}if(b&&R.filter===b){return R.filter(Q,P)}J(R,function(U,S,T){if(Q.call(P,U,S,T)){O[O.length]=U}});return O};N.reject=function(R,Q,P){var O=[];if(R==null){return O}J(R,function(U,S,T){if(!Q.call(P,U,S,T)){O[O.length]=U}});return O};N.every=N.all=function(R,Q,P){Q||(Q=N.identity);var O=true;if(R==null){return O}if(C&&R.every===C){return R.every(Q,P)}J(R,function(U,S,T){if(!(O=O&&Q.call(P,U,S,T))){return E}});return !!O};var A=N.some=N.any=function(R,Q,P){Q||(Q=N.identity);var O=false;if(R==null){return O}if(p&&R.some===p){return R.some(Q,P)}J(R,function(U,S,T){if(O||(O=Q.call(P,U,S,T))){return E}});return !!O};N.contains=N.include=function(Q,P){var O=false;if(Q==null){return O}if(n&&Q.indexOf===n){return Q.indexOf(P)!=-1}O=A(Q,function(R){return R===P});return O};N.invoke=function(P,Q){var O=o.call(arguments,2);return N.map(P,function(R){return(N.isFunction(Q)?Q:R[Q]).apply(R,O)})};N.pluck=function(P,O){return N.map(P,function(Q){return Q[O]})};N.where=function(P,O){if(N.isEmpty(O)){return[]}return N.filter(P,function(R){for(var Q in O){if(O[Q]!==R[Q]){return false}}return true})};N.max=function(R,Q,P){if(!Q&&N.isArray(R)&&R[0]===+R[0]&&R.length<65535){return Math.max.apply(Math,R)}if(!Q&&N.isEmpty(R)){return -Infinity}var O={computed:-Infinity};J(R,function(V,S,U){var T=Q?Q.call(P,V,S,U):V;T>=O.computed&&(O={value:V,computed:T})});return O.value};N.min=function(R,Q,P){if(!Q&&N.isArray(R)&&R[0]===+R[0]&&R.length<65535){return Math.min.apply(Math,R)}if(!Q&&N.isEmpty(R)){return Infinity}var O={computed:Infinity};J(R,function(V,S,U){var T=Q?Q.call(P,V,S,U):V;T<O.computed&&(O={value:V,computed:T})});return O.value};N.shuffle=function(R){var Q;var P=0;var O=[];J(R,function(S){Q=N.random(P++);O[P-1]=O[Q];O[Q]=S});return O};var a=function(O){return N.isFunction(O)?O:function(P){return P[O]}};N.sortBy=function(R,Q,O){var P=a(Q);return N.pluck(N.map(R,function(U,S,T){return{value:U,index:S,criteria:P.call(O,U,S,T)}}).sort(function(V,U){var T=V.criteria;var S=U.criteria;if(T!==S){if(T>S||T===void 0){return 1}if(T<S||S===void 0){return -1}}return V.index<U.index?-1:1}),"value")};var t=function(T,S,P,R){var O={};var Q=a(S);J(T,function(W,U){var V=Q.call(P,W,U,T);R(O,V,W)});return O};N.groupBy=function(Q,P,O){return t(Q,P,O,function(R,S,T){(N.has(R,S)?R[S]:(R[S]=[])).push(T)})};N.countBy=function(Q,P,O){return t(Q,P,O,function(R,S,T){if(!N.has(R,S)){R[S]=0}R[S]++})};N.sortedIndex=function(V,U,R,Q){R=R==null?N.identity:a(R);var T=R.call(Q,U);var O=0,S=V.length;while(O<S){var P=(O+S)>>>1;R.call(Q,V[P])<T?O=P+1:S=P}return O};N.toArray=function(O){if(!O){return[]}if(O.length===+O.length){return o.call(O)}return N.values(O)};N.size=function(O){return(O.length===+O.length)?O.length:N.keys(O).length};N.first=N.head=N.take=function(Q,P,O){return(P!=null)&&!O?o.call(Q,0,P):Q[0]};N.initial=function(Q,P,O){return o.call(Q,0,Q.length-((P==null)||O?1:P))};N.last=function(Q,P,O){if((P!=null)&&!O){return o.call(Q,Math.max(Q.length-P,0))}else{return Q[Q.length-1]}};N.rest=N.tail=N.drop=function(Q,P,O){return o.call(Q,(P==null)||O?1:P)};N.compact=function(O){return N.filter(O,function(P){return !!P})};var x=function(P,Q,O){J(P,function(R){if(N.isArray(R)){Q?I.apply(O,R):x(R,Q,O)}else{O.push(R)}});return O};N.flatten=function(P,O){return x(P,O,[])};N.without=function(O){return N.difference(O,o.call(arguments,1))};N.uniq=N.unique=function(U,T,S,R){var P=S?N.map(U,S,R):U;var Q=[];var O=[];J(P,function(W,V){if(T?(!V||O[O.length-1]!==W):!N.contains(O,W)){O.push(W);Q.push(U[V])}});return Q};N.union=function(){return N.uniq(y.apply(D,arguments))};N.intersection=function(P){var O=o.call(arguments,1);return N.filter(N.uniq(P),function(Q){return N.every(O,function(R){return N.indexOf(R,Q)>=0})})};N.difference=function(P){var O=y.apply(D,o.call(arguments,1));return N.filter(P,function(Q){return !N.contains(O,Q)})};N.zip=function(){var O=o.call(arguments);var R=N.max(N.pluck(O,"length"));var Q=new Array(R);for(var P=0;P<R;P++){Q[P]=N.pluck(O,""+P)}return Q};N.object=function(S,Q){var O={};for(var R=0,P=S.length;R<P;R++){if(Q){O[S[R]]=Q[R]}else{O[S[R][0]]=S[R][1]}}return O};N.indexOf=function(S,Q,R){if(S==null){return -1}var P=0,O=S.length;if(R){if(typeof R=="number"){P=(R<0?Math.max(0,O+R):R)}else{P=N.sortedIndex(S,Q);return S[P]===Q?P:-1}}if(n&&S.indexOf===n){return S.indexOf(Q,R)}for(;P<O;P++){if(S[P]===Q){return P}}return -1};N.lastIndexOf=function(S,Q,R){if(S==null){return -1}var O=R!=null;if(l&&S.lastIndexOf===l){return O?S.lastIndexOf(Q,R):S.lastIndexOf(Q)}var P=(O?R:S.length);while(P--){if(S[P]===Q){return P}}return -1};N.range=function(T,R,S){if(arguments.length<=1){R=T||0;T=0}S=arguments[2]||1;var P=Math.max(Math.ceil((R-T)/S),0);var O=0;var Q=new Array(P);while(O<P){Q[O++]=T;T+=S}return Q};var H=function(){};N.bind=function e(R,P){var Q,O;if(R.bind===G&&G){return G.apply(R,o.call(arguments,1))}if(!N.isFunction(R)){throw new TypeError}O=o.call(arguments,2);return Q=function(){if(!(this instanceof Q)){return R.apply(P,O.concat(o.call(arguments)))}H.prototype=R.prototype;var T=new H;var S=R.apply(T,O.concat(o.call(arguments)));if(Object(S)===S){return S}return T}};N.bindAll=function(P){var O=o.call(arguments,1);if(O.length==0){O=N.functions(P)}J(O,function(Q){P[Q]=N.bind(P[Q],P)});return P};N.memoize=function(Q,P){var O={};P||(P=N.identity);return function(){var R=P.apply(this,arguments);return N.has(O,R)?O[R]:(O[R]=Q.apply(this,arguments))}};N.delay=function(P,Q){var O=o.call(arguments,2);return setTimeout(function(){return P.apply(null,O)},Q)};N.defer=function(O){return N.delay.apply(N,[O,1].concat(o.call(arguments,1)))};N.throttle=function(Q,R){var P,T,U,V,S,W;var O=N.debounce(function(){S=V=false},R);return function(){P=this;T=arguments;var X=function(){U=null;if(S){W=Q.apply(P,T)}O()};if(!U){U=setTimeout(X,R)}if(V){S=true}else{V=true;W=Q.apply(P,T)}O();return W}};N.debounce=function(Q,S,P){var R,O;return function(){var W=this,V=arguments;var U=function(){R=null;if(!P){O=Q.apply(W,V)}};var T=P&&!R;clearTimeout(R);R=setTimeout(U,S);if(T){O=Q.apply(W,V)}return O}};N.once=function(Q){var O=false,P;return function(){if(O){return P}O=true;P=Q.apply(this,arguments);Q=null;return P}};N.wrap=function(O,P){return function(){var Q=[O];I.apply(Q,arguments);return P.apply(this,Q)}};N.compose=function(){var O=arguments;return function(){var P=arguments;for(var Q=O.length-1;Q>=0;Q--){P=[O[Q].apply(this,P)]}return P[0]}};N.after=function(P,O){if(P<=0){return O()}return function(){if(--P<1){return O.apply(this,arguments)}}};N.keys=f||function(Q){if(Q!==Object(Q)){throw new TypeError("Invalid object")}var P=[];for(var O in Q){if(N.has(Q,O)){P[P.length]=O}}return P};N.values=function(Q){var O=[];for(var P in Q){if(N.has(Q,P)){O.push(Q[P])}}return O};N.pairs=function(Q){var P=[];for(var O in Q){if(N.has(Q,O)){P.push([O,Q[O]])}}return P};N.invert=function(Q){var O={};for(var P in Q){if(N.has(Q,P)){O[Q[P]]=P}}return O};N.functions=N.methods=function(Q){var P=[];for(var O in Q){if(N.isFunction(Q[O])){P.push(O)}}return P.sort()};N.extend=function(O){J(o.call(arguments,1),function(P){for(var Q in P){O[Q]=P[Q]}});return O};N.pick=function(P){var Q={};var O=y.apply(D,o.call(arguments,1));J(O,function(R){if(R in P){Q[R]=P[R]}});return Q};N.omit=function(Q){var R={};var P=y.apply(D,o.call(arguments,1));for(var O in Q){if(!N.contains(P,O)){R[O]=Q[O]}}return R};N.defaults=function(O){J(o.call(arguments,1),function(P){for(var Q in P){if(O[Q]==null){O[Q]=P[Q]}}});return O};N.clone=function(O){if(!N.isObject(O)){return O}return N.isArray(O)?O.slice():N.extend({},O)};N.tap=function(P,O){O(P);return P};var K=function(V,U,P,Q){if(V===U){return V!==0||1/V==1/U}if(V==null||U==null){return V===U}if(V instanceof N){V=V._wrapped}if(U instanceof N){U=U._wrapped}var S=d.call(V);if(S!=d.call(U)){return false}switch(S){case"[object String]":return V==String(U);case"[object Number]":return V!=+V?U!=+U:(V==0?1/V==1/U:V==+U);case"[object Date]":case"[object Boolean]":return +V==+U;case"[object RegExp]":return V.source==U.source&&V.global==U.global&&V.multiline==U.multiline&&V.ignoreCase==U.ignoreCase}if(typeof V!="object"||typeof U!="object"){return false}var O=P.length;while(O--){if(P[O]==V){return Q[O]==U}}P.push(V);Q.push(U);var X=0,Y=true;if(S=="[object Array]"){X=V.length;Y=X==U.length;if(Y){while(X--){if(!(Y=K(V[X],U[X],P,Q))){break}}}}else{var T=V.constructor,R=U.constructor;if(T!==R&&!(N.isFunction(T)&&(T instanceof T)&&N.isFunction(R)&&(R instanceof R))){return false}for(var W in V){if(N.has(V,W)){X++;if(!(Y=N.has(U,W)&&K(V[W],U[W],P,Q))){break}}}if(Y){for(W in U){if(N.has(U,W)&&!(X--)){break}}Y=!X}}P.pop();Q.pop();return Y};N.isEqual=function(P,O){return K(P,O,[],[])};N.isEmpty=function(P){if(P==null){return true}if(N.isArray(P)||N.isString(P)){return P.length===0}for(var O in P){if(N.has(P,O)){return false}}return true};N.isElement=function(O){return !!(O&&O.nodeType===1)};N.isArray=u||function(O){return d.call(O)=="[object Array]"};N.isObject=function(O){return O===Object(O)};J(["Arguments","Function","String","Number","Date","RegExp"],function(O){N["is"+O]=function(P){return d.call(P)=="[object "+O+"]"}});if(!N.isArguments(arguments)){N.isArguments=function(O){return !!(O&&N.has(O,"callee"))}}if(typeof(/./)!=="function"){N.isFunction=function(O){return typeof O==="function"}}N.isFinite=function(O){return N.isNumber(O)&&isFinite(O)};N.isNaN=function(O){return N.isNumber(O)&&O!=+O};N.isBoolean=function(O){return O===true||O===false||d.call(O)=="[object Boolean]"};N.isNull=function(O){return O===null};N.isUndefined=function(O){return O===void 0};N.has=function(P,O){return j.call(P,O)};N.noConflict=function(){w._=k;return this};N.identity=function(O){return O};N.times=function(R,Q,P){for(var O=0;O<R;O++){Q.call(P,O)}};N.random=function(P,O){if(O==null){O=P;P=0}return P+(0|Math.random()*(O-P+1))};var m={escape:{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","/":"&#x2F;"}};m.unescape=N.invert(m.escape);var L={escape:new RegExp("["+N.keys(m.escape).join("")+"]","g"),unescape:new RegExp("("+N.keys(m.unescape).join("|")+")","g")};N.each(["escape","unescape"],function(O){N[O]=function(P){if(P==null){return""}return(""+P).replace(L[O],function(Q){return m[O][Q]})}});N.result=function(O,Q){if(O==null){return null}var P=O[Q];return N.isFunction(P)?P.call(O):P};N.mixin=function(O){J(N.functions(O),function(P){var Q=N[P]=O[P];N.prototype[P]=function(){var R=[this._wrapped];I.apply(R,arguments);return s.call(this,Q.apply(N,R))}})};var z=0;N.uniqueId=function(O){var P=z++;return O?O+P:P};N.templateSettings={evaluate:/<%([\s\S]+?)%>/g,interpolate:/<%=([\s\S]+?)%>/g,escape:/<%-([\s\S]+?)%>/g};var v=/(.)^/;var h={"'":"'","\\":"\\","\r":"r","\n":"n","\t":"t","\u2028":"u2028","\u2029":"u2029"};var i=/\\|'|\r|\n|\t|\u2028|\u2029/g;N.template=function(W,R,Q){Q=N.defaults({},Q,N.templateSettings);var S=new RegExp([(Q.escape||v).source,(Q.interpolate||v).source,(Q.evaluate||v).source].join("|")+"|$","g");var T=0;var O="__p+='";W.replace(S,function(Y,Z,X,ab,aa){O+=W.slice(T,aa).replace(i,function(ac){return"\\"+h[ac]});O+=Z?"'+\n((__t=("+Z+"))==null?'':_.escape(__t))+\n'":X?"'+\n((__t=("+X+"))==null?'':__t)+\n'":ab?"';\n"+ab+"\n__p+='":"";T=aa+Y.length});O+="';\n";if(!Q.variable){O="with(obj||{}){\n"+O+"}\n"}O="var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n"+O+"return __p;\n";try{var P=new Function(Q.variable||"obj","_",O)}catch(U){U.source=O;throw U}if(R){return P(R,N)}var V=function(X){return P.call(this,X,N)};V.source="function("+(Q.variable||"obj")+"){\n"+O+"}";return V};N.chain=function(O){return N(O).chain()};var s=function(O){return this._chain?N(O).chain():O};N.mixin(N);J(["pop","push","reverse","shift","sort","splice","unshift"],function(O){var P=D[O];N.prototype[O]=function(){var Q=this._wrapped;P.apply(Q,arguments);if((O=="shift"||O=="splice")&&Q.length===0){delete Q[0]}return s.call(this,Q)}});J(["concat","join","slice"],function(O){var P=D[O];N.prototype[O]=function(){return s.call(this,P.apply(this._wrapped,arguments))}});N.extend(N.prototype,{chain:function(){this._chain=true;return this},value:function(){return this._wrapped}})}).call(this);(function(){var f,c,e,b,d,i,a,h,g={}.hasOwnProperty;c=null;i=null;b={};f=false;e=false;a=_.debounce(function(){if(f){e=true;return}else{e=false}f=true;return c.revert(function(){var j,k;for(j in b){if(!g.call(b,j)){continue}k=b[j];k=parseFloat(k,10);if(k===0){continue}c[j](k)}return c.render(function(){f=false;if(e){return a()}})})},400);d=false;h=function(k){var l,j;if(d){return}$("#PresetFilters a").removeClass("Active");l=$("#PresetFilters a[data-preset='"+k+"']");j=l.html();l.addClass("Active").html("Rendering...");d=true;return i.revert(function(){i[k]();return i.render(function(){l.html(j);return d=false})})};$(document).ready(function(){c=Caman("#example");i=Caman("#preset-example");$(".FilterSetting input").each(function(){var j;j=$(this).data("filter");return b[j]=$(this).val()});$("#Filters").on("change",".FilterSetting input",function(){var j,k;j=$(this).data("filter");k=$(this).val();b[j]=k;$(this).find("~ .FilterValue").html(k);return a()});return $("#PresetFilters").on("click","a",function(){return h($(this).data("preset"))})})}).call(this);(function(){var a;a=function(d){var b,c,e;e=d.attr("id");d.attr("id","");c=$("<div>").css({position:"absolute",visibility:"hidden",top:$(document).scrollTop()+"px"}).attr("id",e).appendTo(document.body);document.location.hash="#"+e;c.remove();d.attr("id",e);b=$("#GuideSections li > a").filter("[href=#"+(d.attr("id"))+"]");b.parents("ul").find(".Active").removeClass("Active");return b.parents("li").addClass("Active")};$(document).ready(function(){var b;$("#GuideSections").on("click","a",function(){var c,d;c=$($(this).attr("href"));d=Math.max(0,c.position().top-129);document.location.hash=$(this).attr("href");setTimeout(function(){return $("body").scrollTop(d)},50);return false});b=_.map($("#GuideSections li > a"),function(c){return $($(c).attr("href"))});b=b.reverse();return $(document).on("scroll",_.throttle(function(){var e,f,d,c;f=$(document).scrollTop();for(d=0,c=b.length;d<c;d++){e=b[d];if(f>=e.position().top-130){a(e);return}}},200))})}).call(this);